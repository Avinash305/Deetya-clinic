// Regenerates public/sitemap.xml from the live route list + data slugs so the
// sitemap never drifts out of sync with the actual pages (previously it
// referenced deleted package slugs like "full-body-checkup-essential").
//
// Run: node scripts/generate-sitemap.mjs
import { writeFileSync, readFileSync, existsSync } from "node:fs";
import path from "node:path";

const ORIGIN = "https://deetyahealthcare.com";
const TODAY = new Date().toISOString().slice(0, 10);

const slugsFrom = (file, re) => {
  if (!existsSync(file)) return [];
  const src = readFileSync(file, "utf8");
  return [...src.matchAll(re)].map((m) => m[1]);
};

const serviceSlugs = slugsFrom("src/data/servicesData.tsx", /slug: '([^']+)'/g);
const packageSlugs = slugsFrom("src/data/healthPackagesData.tsx", /slug: '([^']+)'/g);
const doctorSlugs = slugsFrom("src/data/doctorsData.tsx", /slug: '([^']+)'/g);

const core = [
  { loc: "/", freq: "weekly", pri: "1.0" },
  { loc: "/#/about", freq: "monthly", pri: "0.8" },
  { loc: "/#/services", freq: "weekly", pri: "0.9" },
  { loc: "/#/health-packages", freq: "weekly", pri: "0.9" },
  { loc: "/#/contact", freq: "monthly", pri: "0.8" },
];

const url = (loc, freq, pri) => `  <url>\n    <loc>${ORIGIN}${loc}</loc>\n    <lastmod>${TODAY}</lastmod>\n    <changefreq>${freq}</changefreq>\n    <priority>${pri}</priority>\n  </url>`;

const lines = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  "  <!-- Core pages -->",
  ...core.map((c) => url(c.loc, c.freq, c.pri)),
  "",
  "  <!-- Service detail pages -->",
  ...serviceSlugs.map((s) => url(`/#/services/${s}`, "monthly", "0.7")),
  "",
  "  <!-- Health checkup package pages -->",
  ...packageSlugs.map((p) => url(`/#/packages/${p}`, "weekly", "0.7")),
  "",
  "  <!-- Doctor detail pages -->",
  ...doctorSlugs.map((d) => url(`/#/doctors/${d}`, "monthly", "0.7")),
  "</urlset>",
  "",
];

writeFileSync(path.resolve("public/sitemap.xml"), lines.join("\n"));
console.log(`sitemap.xml written: ${core.length + serviceSlugs.length + packageSlugs.length + doctorSlugs.length} URLs`);
