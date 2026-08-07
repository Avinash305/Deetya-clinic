// One-off image optimizer for the DEETYA clinic site.
// Re-encodes every public/images image as real WebP (many are mislabeled JPEG/PNG)
// and downscales to the max width actually needed on screen (2x for retina).
// Run: node scripts/optimize-images.mjs
import sharp from "sharp";
import { readdirSync, readFileSync, writeFileSync, unlinkSync, statSync } from "node:fs";
import path from "node:path";

const dir = path.resolve("public/images");

// Clean up any .tmp leftovers from a previously interrupted run before we
// start, so a stray temp never gets copied into dist/.
for (const f of readdirSync(dir)) {
  if (f.endsWith(".tmp")) {
    try { unlinkSync(path.join(dir, f)); console.log(`cleaned stray ${f}`); } catch {}
  }
}

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
  "location": { w: 600, q: 92 },
  "logo": { w: null, q: 80 },
};

let totalBefore = 0;
let totalAfter = 0;
let skipped = 0;

for (const f of readdirSync(dir)) {
  if (!f.endsWith(".webp")) continue;
  const file = path.join(dir, f);
  const before = statSync(file).size;
  totalBefore += before;

  let target = { w: null, q: 75 };
  for (const [key, t] of Object.entries(targets)) {
    if (f.startsWith(key)) { target = t; break; }
  }

  // Read the source into memory first: libvips memory-maps path inputs, and
  // on Windows that open mmap handle blocks overwriting the same file later.
  const src = readFileSync(file);
  const meta = await sharp(src).metadata();
  const opts = {};
  if (target.w && meta.width && meta.width > target.w) {
    opts.width = target.w;
    opts.withoutEnlargement = true;
  }

  const buf = await sharp(src)
    .resize(opts)
    .webp({ quality: target.q, effort: 6, smartSubsample: true })
    .toBuffer();

  if (buf.length < before) {
    // Replace in place with a direct write, retried to ride out transient
    // Windows Defender / filesystem-filter scan locks. The previous
    // tmp + unlink + rename strategy hung here (MoveFileEx blocked with
    // EPERM), and even the first plain write can hit a short-lived scan
    // lock, so keep a generous retry window. Encoding happens fully in
    // memory and the write itself is fast (~ms), so the non-atomic replace
    // window is tiny; a retry will even repair a partial write. Only the
    // transient lock codes below warrant a retry - anything else (disk
    // full, permissions, read-only) should fail fast.
    let wrote = false;
    let reason = "transient lock";
    for (let attempt = 0; attempt < 20 && !wrote; attempt++) {
      try {
        writeFileSync(file, buf);
        wrote = true;
      } catch (err) {
        if (!["EPERM", "UNKNOWN", "EACCES", "EBUSY"].includes(err.code)) {
          reason = err.code;
          break;
        }
        await new Promise((r) => setTimeout(r, 500));
      }
    }
    if (wrote) {
      totalAfter += buf.length;
      console.log(
        `${f.padEnd(30)} ${(before / 1024).toFixed(0).padStart(4)}KB -> ${(buf.length / 1024).toFixed(0).padStart(4)}KB  ${(((before - buf.length) / before) * 100).toFixed(0)}%`
      );
    } else {
      totalAfter += before;
      skipped += 1;
      console.warn(`  WARN: ${f} could not be written (${reason}); kept original`);
    }
  } else {
    totalAfter += before;
    console.log(`${f.padEnd(30)} kept (already optimal)`);
  }
}

console.log("\n=======================");
console.log(`TOTAL: ${(totalBefore / 1024).toFixed(0)}KB -> ${(totalAfter / 1024).toFixed(0)}KB`);
if (skipped > 0) {
  console.log(`⚠ ${skipped} image${skipped > 1 ? "s" : ""} skipped due to transient file locks; re-run to retry.`);
}
