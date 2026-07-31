// One-off image optimizer for the DEETYA clinic site.
// Re-encodes every public/images image as real WebP (many are mislabeled JPEG/PNG)
// and downscales to the max width actually needed on screen (2x for retina).
// Run: node scripts/optimize-images.mjs
import sharp from "sharp";
import { readdirSync, writeFileSync, statSync } from "node:fs";
import path from "node:path";

const dir = path.resolve("public/images");

// max width per usage group (safe 2x retina of the largest display size)
const targets = {
  "hero-slide-": { w: 1600, q: 80 },
  "banner-": { w: 1600, q: 78 },
  "about-surgery": { w: 1600, q: 78 },
  "about-story": { w: 1000, q: 78 },
  "about-clinic": { w: 1000, q: 78 },
  "ipd-2": { w: 1600, q: 78 },
  "ipd-1": { w: 1000, q: 75 },
  "general-medicine-": { w: 1000, q: 75 },
  "gynecology-": { w: 1000, q: 75 },
  "orthopedics-": { w: 1000, q: 75 },
  "pediatrics-": { w: 1000, q: 75 },
  "ent-": { w: 1000, q: 75 },
  "laboratory-1": { w: 1000, q: 75 },
  "pharmacy-1": { w: 1000, q: 75 },
  "doctor-": { w: 800, q: 75 },
  "og-image": { w: 1200, q: 75 },
  "logo": { w: null, q: 80 },
};

let totalBefore = 0;
let totalAfter = 0;

for (const f of readdirSync(dir)) {
  if (!f.endsWith(".webp")) continue;
  const file = path.join(dir, f);
  const before = statSync(file).size;
  totalBefore += before;

  let target = { w: null, q: 75 };
  for (const [key, t] of Object.entries(targets)) {
    if (f.startsWith(key)) { target = t; break; }
  }

  const meta = await sharp(file).metadata();
  const opts = {};
  if (target.w && meta.width && meta.width > target.w) {
    opts.width = target.w;
    opts.withoutEnlargement = true;
  }

  const buf = await sharp(file)
    .resize(opts)
    .webp({ quality: target.q, effort: 6, smartSubsample: true })
    .toBuffer();

  if (buf.length < before) {
    writeFileSync(file, buf);
    totalAfter += buf.length;
    console.log(
      `${f.padEnd(30)} ${(before / 1024).toFixed(0).padStart(4)}KB -> ${(buf.length / 1024).toFixed(0).padStart(4)}KB  ${(((before - buf.length) / before) * 100).toFixed(0)}%`
    );
  } else {
    totalAfter += before;
    console.log(`${f.padEnd(30)} kept (already optimal)`);
  }
}

console.log("\n=======================");
console.log(`TOTAL: ${(totalBefore / 1024).toFixed(0)}KB -> ${(totalAfter / 1024).toFixed(0)}KB`);
