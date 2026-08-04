// Generates the favicon / app icon set from public/images/logo.webp.
// The logo is a wide banner (475x237) with an off-white background, so each
// icon is a square canvas filled with the logo's own corner color and the
// logo composited in the center with a small padding — seamless on any page.
//
// Run: node scripts/generate-icons.mjs
import sharp from "sharp";
import { writeFileSync, renameSync, unlinkSync } from "node:fs";
import path from "node:path";

// Write via a temp file + unlink + rename. On Windows, renaming over a file
// that a running dev server / OneDrive has open fails with EPERM, so the
// original is unlinked first and the tmp renamed into place (same pattern as
// optimize-images.mjs).
function safeWrite(file, buf) {
  const tmp = file + ".tmp";
  writeFileSync(tmp, buf);
  try {
    try { unlinkSync(file); } catch {}
    renameSync(tmp, file);
  } catch {
    writeFileSync(file, buf);
    try { unlinkSync(tmp); } catch {}
  }
}

const src = path.resolve("public/images/logo.webp");
const outDir = path.resolve("public");

// Website favicons only — no PWA/app icons (site.webmanifest was removed
// because this is a website, not an installable app).
const sizes = [16, 32, 48];

const meta = await sharp(src).metadata();
const w = meta.width;
const h = meta.height;

// Sample the four corners to find the logo's background color.
const raw = await sharp(src).ensureAlpha().raw().toBuffer();
const corner = (x, y) => {
  const i = (y * w + x) * 4;
  return [raw[i], raw[i + 1], raw[i + 2]];
};
const corners = [
  corner(1, 1),
  corner(w - 2, 1),
  corner(1, h - 2),
  corner(w - 2, h - 2),
];
const bg = [
  Math.round(corners.reduce((s, c) => s + c[0], 0) / corners.length),
  Math.round(corners.reduce((s, c) => s + c[1], 0) / corners.length),
  Math.round(corners.reduce((s, c) => s + c[2], 0) / corners.length),
];
console.log(`logo: ${w}x${h}, background: rgb(${bg.join(",")})`);

for (const size of sizes) {
  // Logo fills ~86% of the icon width; the square height keeps its ratio.
  const logoW = Math.round(size * 0.86);
  const logoH = Math.round((logoW * h) / w);
  const top = Math.round((size - logoH) / 2);
  const left = Math.round((size - logoW) / 2);

  const icon = await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: bg[0], g: bg[1], b: bg[2], alpha: 1 },
    },
  })
    .composite([
      {
        input: await sharp(src)
          .resize(logoW, logoH, { fit: "fill" })
          .png()
          .toBuffer(),
        top,
        left,
      },
    ])
    .png()
    .toBuffer();

  const file = path.join(outDir, `favicon-${size}x${size}.png`);
  safeWrite(file, icon);
  console.log(`generated ${path.basename(file)} (${size}x${size})`);
}

console.log("done");
