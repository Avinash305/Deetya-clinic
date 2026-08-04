// One-off image optimizer for the DEETYA clinic site.
// Re-encodes every public/images image as real WebP (many are mislabeled JPEG/PNG)
// and downscales to the max width actually needed on screen (2x for retina).
// Run: node scripts/optimize-images.mjs
import sharp from "sharp";
import { readdirSync, writeFileSync, renameSync, unlinkSync, statSync, copyFileSync } from "node:fs";
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
    // Write via a temp file + unlink + rename. On Windows, renaming over a
    // file the running dev server has open fails with EPERM, so the original
    // is unlinked first (freeing the path) and the tmp renamed into place,
    // retried a few times to survive transient locks. If the rename still
    // fails on the last attempt, fall back to writing the buffer directly to
    // the now-fresh path. Only if that also fails do we try restoring the
    // original from the tmp (copy is lock-tolerant where rename is not); if
    // that fails too the original is untouched, we warn, and move on.
    const tmp = file + ".tmp";
    writeFileSync(tmp, buf);
    let replaced = false;
    // OneDrive/Defender on the Desktop path can hold short-lived locks, so
    // retry for a generous window (20 x 500ms ~= 10s) before giving up.
    for (let attempt = 0; attempt < 20 && !replaced; attempt++) {
      try {
        try { unlinkSync(file); } catch {} // ENOENT if already removed
        renameSync(tmp, file);
        replaced = true;
      } catch {
        if (attempt === 19) {
          // Original was unlinked (path is free) unless the unlink itself
          // was locked too. Writing directly is the last resort.
          try {
            writeFileSync(file, buf);
            replaced = true;
          } catch {
            // Restore the original from tmp if we can; copyFile tolerates
            // locks that rename refuses. If the original was never unlinked
            // it stays untouched either way.
            try {
              copyFileSync(tmp, file);
              replaced = true;
            } catch {
              try { unlinkSync(tmp); } catch {}
              skipped += 1;
              console.warn(`  WARN: ${f} could not be replaced (file locked); kept original`);
            }
          }
          // A successful direct write or copy leaves the tmp behind;
          // remove it so it never ships to dist/.
          try { unlinkSync(tmp); } catch {}
        } else {
          await new Promise((r) => setTimeout(r, 500));
        }
      }
    }
    if (replaced) {
      totalAfter += buf.length;
      console.log(
        `${f.padEnd(30)} ${(before / 1024).toFixed(0).padStart(4)}KB -> ${(buf.length / 1024).toFixed(0).padStart(4)}KB  ${(((before - buf.length) / before) * 100).toFixed(0)}%`
      );
    } else {
      totalAfter += before;
    }
  } else {
    totalAfter += before;
    console.log(`${f.padEnd(30)} kept (already optimal)`);
  }
}

console.log("\n=======================");
console.log(`TOTAL: ${(totalBefore / 1024).toFixed(0)}KB -> ${(totalAfter / 1024).toFixed(0)}KB`);
if (skipped > 0) {
  console.log(`⚠ ${skipped} image${skipped > 1 ? "s" : ""} skipped due to file locks. Stop the dev server and re-run to finish.`);
}
