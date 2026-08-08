// Downloads real, treatment-related stock photos (Pexels — free license) for
// each health package and converts them to 1600×900 WebP into
// public/images/packages/, overwriting the generated branded graphics.
//
// Photos are cropped to a fixed 16:9 landscape so the detail-page banner and
// the og:image share a consistent, social-friendly aspect ratio.
//
// Run: node scripts/download-package-photos.mjs
import { writeFileSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

// slug -> Pexels photo ID (topics mapped to each package's treatment focus).
// Photos are from Pexels, which allows free commercial use without attribution.
const PHOTOS = {
  "master-health-package": 6129149, // full body checkup — doctor & patient
  "executive-health-package": 3825586, // executive checkup — doctor with stethoscope
  "super-executive-health-package": 6129049, // premium screening — doctor reviewing X-ray
  "senior-citizen-package": 8413410, // senior care — elderly patient with doctor
  // NOTE: Well Women Package intentionally uses the in-house photo
  // /images/gynecology-1.webp (see healthPackagesData.tsx) — no stock photo.
  "diabetic-health-package": 17072086, // diabetes — blood glucose meter
  "cardiac-risk-package": 16450237, // heart — ECG printout & monitor
  "pre-employment-health-package": 6285370, // employment screening — blood draw prep
  "essential-cancer-screening-package": 7723603, // cancer screening — awareness ribbon
  "pre-operative-package": 15688020, // pre-op — surgical team in operating room
  "basic-health-profile": 8442105, // basic blood tests — pathology lab samples
  "standard-health-profile": 8460346, // blood panel — test tubes
  "diabetic-profile": 17043389, // sugar monitoring — glucose meter
  "male-fertility-profile": 9574511, // fertility lab — technician analyzing samples
  "female-fertility-profile": 9574492, // hormone testing — scientist in sterile lab
  "pcod-profile": 9628808, // PCOD — gloved hands in lab
  "kidney-profile": 9574569, // kidney — laboratory diagnostics
  "hypertension-profile": 7659573, // blood pressure measurement
  "coagulation-screening-profile": 8600447, // blood coagulation — samples held by tech
  "anemia-profile": 4047146, // anemia — blood sample tubes
  "rheumatoid-arthritis-profile": 35053995, // joints — hand X-ray
};

const W = 1600;
const H = 900;
const VARIANTS = [480, 768, 1200];
const VARIANT_QUALITY = 74;
const outDir = path.resolve("public/images/packages");
const url = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=2400`;

/** Write with retries — Windows Defender can briefly lock a freshly written
    file (same guard as scripts/optimize-images.mjs). */
async function writeRetry(file, buf) {
  for (let attempt = 0; attempt < 20; attempt++) {
    try {
      writeFileSync(file, buf);
      return;
    } catch (err) {
      if (!["EPERM", "UNKNOWN", "EACCES", "EBUSY"].includes(err.code)) throw err;
      await new Promise((r) => setTimeout(r, 500));
    }
  }
  throw new Error("transient file lock not cleared after 20 attempts");
}

let ok = 0;
let fail = 0;
for (const [slug, id] of Object.entries(PHOTOS)) {
  try {
    const res = await fetch(url(id));
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    const webp = await sharp(buf)
      .resize({ width: W, height: H, fit: "cover", position: "centre" })
      .webp({ quality: 78, effort: 6, smartSubsample: true })
      .toBuffer();
    await writeRetry(path.join(outDir, `${slug}.webp`), webp);
    // Responsive variants for the detail-page srcSet
    for (const w of VARIANTS) {
      const vbuf = await sharp(webp)
        .resize({ width: w })
        .webp({ quality: VARIANT_QUALITY, effort: 6, smartSubsample: true })
        .toBuffer();
      await writeRetry(path.join(outDir, `${slug}-${w}.webp`), vbuf);
    }
    console.log(`✓ ${slug.padEnd(36)} ${(webp.length / 1024).toFixed(0).padStart(4)}KB (+3 variants)`);
    ok++;
  } catch (err) {
    console.error(`✗ ${slug.padEnd(36)} ${err.message}`);
    fail++;
  }
}
console.log(`\nDownloaded ${ok} package photos${fail ? `, ${fail} failed` : ""} → public/images/packages/`);
