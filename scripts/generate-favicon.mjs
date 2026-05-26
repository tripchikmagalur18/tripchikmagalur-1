/**
 * Generate favicon + app icons from src/assets/brand/logo.png (your reference artwork).
 * - App / home screen icons = full logo exactly as provided (1024→512 PNG)
 * - favicon.ico only = simplified mark (readable at 16px in browser tabs)
 * Run: npm run favicon
 */
import sharp from "sharp";
import { writeFileSync, mkdirSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const SOURCE = path.join(root, "src/assets/brand/logo.png");

/** Cream paper background from your logo file */
const BG = { r: 250, g: 249, b: 247, alpha: 1 };

/** Full reference logo — mountains, jeep, TRIP CHIKMAGALUR text */
async function fullLogoBuffer(size) {
  return sharp(SOURCE)
    .resize(size, size, { fit: "contain", background: BG })
    .png({ compressionLevel: 9 })
    .toBuffer();
}

/** Simplified mark for tiny browser favicons only (no text) */
async function logoMarkBuffer(size) {
  const meta = await sharp(SOURCE).metadata();
  const cropHeight = Math.round(meta.height * 0.72);
  return sharp(SOURCE)
    .extract({ left: 0, top: 0, width: meta.width, height: cropHeight })
    .resize(size, size, { fit: "contain", background: BG })
    .png()
    .toBuffer();
}

/** Maskable PWA icon — full logo with safe padding so iOS/Android circles don't clip text */
async function maskableFullLogo(size) {
  const inner = Math.round(size * 0.82);
  const logo = await fullLogoBuffer(inner);
  return sharp({
    create: { width: size, height: size, channels: 4, background: BG },
  })
    .composite([{ input: logo, gravity: "center" }])
    .png()
    .toBuffer();
}

async function main() {
  mkdirSync(path.join(root, ".tmp-favicon"), { recursive: true });

  const icoBuffers = [];
  for (const size of [16, 32, 48]) {
    const buf = await logoMarkBuffer(size);
    writeFileSync(path.join(root, `.tmp-favicon/favicon-${size}.png`), buf);
    icoBuffers.push(buf);
  }

  const pngToIco = (await import("png-to-ico")).default;
  writeFileSync(path.join(root, "public/favicon.ico"), await pngToIco(icoBuffers));

  const app512 = await fullLogoBuffer(512);
  const app192 = await fullLogoBuffer(192);
  const app180 = await fullLogoBuffer(180);

  writeFileSync(path.join(root, "src/app/apple-icon.png"), app512);

  writeFileSync(path.join(root, "public/apple-icon.png"), app512);
  writeFileSync(path.join(root, "public/apple-touch-icon.png"), app512);
  writeFileSync(path.join(root, "public/icon-180.png"), app180);
  writeFileSync(path.join(root, "public/icon-192.png"), app192);
  writeFileSync(path.join(root, "public/icon-512.png"), app512);
  writeFileSync(path.join(root, "public/icon-192-maskable.png"), await maskableFullLogo(192));
  writeFileSync(path.join(root, "public/icon-512-maskable.png"), await maskableFullLogo(512));

  console.log("Done — app icons match your reference logo (full artwork).");
  console.log("  Home screen: apple-icon.png, apple-touch-icon.png, icon-512.png (512px)");
  console.log("  Browser tab only: favicon.ico (small simplified mark)");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
