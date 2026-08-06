// One-off splitter: moves the heavy data exports (services, doctors, checkup
// packages, testimonials) out of siteData.tsx into their own modules so the
// site shell only bundles the lightweight shared data.
//
// ⚠ ALREADY APPLIED — do NOT re-run. It throws "block not found" on the
// current (already-split) siteData.tsx. Kept only as a record of how the
// split was performed.
//
// Run: node scripts/split-site-data.mjs
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const file = path.resolve("src/data/siteData.tsx");
let src = readFileSync(file, "utf8");

// ── bracket-aware statement scanning (ignores string contents) ────────────
function statementEnd(text, valueStart) {
  const depth = { "{": 0, "[": 0, "(": 0 };
  const closer = { "}": "{", "]": "[", ")": "(" };
  let inStr = null;
  let i = valueStart;
  while (i < text.length) {
    const ch = text[i];
    if (inStr) {
      if (ch === "\\") { i += 2; continue; }
      if (ch === inStr) inStr = null;
      i++;
      continue;
    }
    if (ch === "'" || ch === '"' || ch === "`") { inStr = ch; i++; continue; }
    if (ch === "{" || ch === "[" || ch === "(") {
      depth[ch]++;
    } else if (ch === "}" || ch === "]" || ch === ")") {
      depth[closer[ch]]--;
      if (depth["{"] === 0 && depth["["] === 0 && depth["("] === 0) {
        // skip a trailing semicolon if present
        return text[i + 1] === ";" ? i + 2 : i + 1;
      }
    }
    i++;
  }
  throw new Error("unbalanced statement starting at " + valueStart);
}

function valueStart(text, statementStart) {
  // interface -> value begins at the first '{'
  if (text.startsWith("export interface", statementStart)) {
    return text.indexOf("{", statementStart);
  }
  // const -> value begins right after the first '='
  const eq = text.indexOf("=", statementStart);
  let i = eq + 1;
  while (/\s/.test(text[i])) i++;
  return i;
}

// ── locate + extract each heavy block (banner + statements) ───────────────
const blocks = [
  { first: "export interface ServiceDetail", last: "export const servicesData" },
  { first: "export interface DoctorCondition", last: "export const doctorsData" },
  { first: "export const testimonialsData", last: "export const testimonialsData" },
  { first: "export interface CheckupPackage", last: "export const checkupPackagesData" },
];

const extracted = {};
const removals = [];

for (const block of blocks) {
  const start = src.indexOf(block.first);
  const lastStart = src.indexOf(block.last);
  if (start === -1 || lastStart === -1) throw new Error("block not found: " + block.first);

  const end = statementEnd(src, valueStart(src, lastStart));
  // Banner = the contiguous comment block directly above the first statement
  // (sections are separated by a blank line).
  const prevBreak = src.lastIndexOf("\n\n", start);
  let bannerStart = prevBreak === -1 ? start : prevBreak + 2;
  const between = src.slice(bannerStart, start);
  if (!/^(\/\/[^\n]*\n)*$/.test(between)) bannerStart = start; // not a comment banner

  const name = block.last.replace("export const ", "");
  extracted[name] = src.slice(bannerStart, end).trimEnd() + "\n";
  removals.push([bannerStart, end]);
}

// Remove from the end so earlier indices stay valid
removals.sort((a, b) => b[0] - a[0]);
for (const [from, to] of removals) src = src.slice(0, from) + src.slice(to);

// Collapse any doubled blank lines left by the removals
src = src.replace(/\n{3,}/g, "\n\n");

// ── prune now-unused icon imports ─────────────────────────────────────────
src = src.replace(
  /(import\s+type\s*)?\{([^}]*)\}\s*from\s*'([^']+)';/g,
  (_m, typeKw, names, mod) => {
    const keep = names
      .split(",")
      .map((s) => s.trim())
      .filter((n) => n && new RegExp(`\\b${n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`).test(src));
    if (!keep.length) return "";
    return `${typeKw || "import"} { ${keep.join(", ")} } from '${mod}';`;
  }
);
src = src.replace(/\n{3,}/g, "\n\n").trimEnd() + "\n";

writeFileSync(file, src);

// ── write the new modules ─────────────────────────────────────────────────
const modules = {
  "servicesData.tsx":
    "import type { ReactNode } from 'react';\n" +
    "import { FaStethoscope, FaUserMd, FaBone, FaBaby, FaFlask, FaBed, FaCapsules } from 'react-icons/fa';\n\n" +
    extracted.servicesData,
  "doctorsData.tsx":
    "import type { ReactNode } from 'react';\n\n" +
    extracted.doctorsData,
  "checkupPackagesData.tsx": extracted.checkupPackagesData,
  "testimonialsData.tsx": extracted.testimonialsData,
};

for (const [name, content] of Object.entries(modules)) {
  writeFileSync(path.resolve("src/data", name), content.trimEnd() + "\n");
  console.log(`wrote src/data/${name}`);
}

console.log("done — siteData.tsx rewritten, heavy data moved to their own modules.");
