/**
 * Generate favicon.ico, app icons, and PWA icons from the Trip Chikmagalur logo.
 * Run: node scripts/generate-favicon.mjs
 */
import sharp from "sharp";
import { writeFileSync, mkdirSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const SOURCE = path.join(
  root,
  "src/assets/brand/logo.png",
);

const BG = { r: 250, g: 249, b: 247, alpha: 1 };

/** Crop to the graphic mark (mountains, sun, jeep) — text is below ~72% height */
async function logoMarkPipeline(size) {
  const meta = await sharp(SOURCE).metadata();
  const cropHeight = Math.round(meta.height * 0.72);
  return sharp(SOURCE)
    .extract({ left: 0, top: 0, width: meta.width, height: cropHeight })
    .resize(size, size, {
      fit: "contain",
      background: BG,
    })
    .png()
    .toBuffer();
}

async function fullLogoPipeline(size) {
  return sharp(SOURCE)
    .resize(size, size, { fit: "contain", background: BG })
    .png()
    .toBuffer();
}

async function main() {
  mkdirSync(path.join(root, ".tmp-favicon"), { recursive: true });

  const icoSizes = [16, 32, 48];
  const icoBuffers = [];

  for (const size of icoSizes) {
    const buf = await logoMarkPipeline(size);
    const tmpPath = path.join(root, `.tmp-favicon/favicon-${size}.png`);
    writeFileSync(tmpPath, buf);
    icoBuffers.push(buf);
  }

  const pngToIco = (await import("png-to-ico")).default;
  const ico = await pngToIco(icoBuffers);
  writeFileSync(path.join(root, "public/favicon.ico"), ico);

  writeFileSync(path.join(root, "src/app/icon.png"), await logoMarkPipeline(32));
  const appleBuf = await fullLogoPipeline(180);
  writeFileSync(path.join(root, "src/app/apple-icon.png"), appleBuf);
  writeFileSync(path.join(root, "public/apple-icon.png"), appleBuf);
  writeFileSync(path.join(root, "public/icon-192.png"), await fullLogoPipeline(192));
  writeFileSync(path.join(root, "public/icon-512.png"), await fullLogoPipeline(512));

  console.log("Generated:");
  console.log("  public/favicon.ico (16, 32, 48)");
  console.log("  src/app/icon.png (32)");
  console.log("  src/app/apple-icon.png (180)");
  console.log("  public/icon-192.png, public/icon-512.png");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
