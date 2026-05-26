/**
 * Generate favicon.ico, Next.js app icons, and PWA icons from the Trip Chikmagalur logo.
 * Run: npm run favicon
 */
import sharp from "sharp";
import { writeFileSync, mkdirSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const SOURCE = path.join(root, "src/assets/brand/logo.png");

const BG = { r: 250, g: 249, b: 247, alpha: 1 };

/** Graphic mark only (jeep + mountains + sun) — no bottom text */
async function logoMarkBuffer(size) {
  const meta = await sharp(SOURCE).metadata();
  const cropHeight = Math.round(meta.height * 0.72);
  return sharp(SOURCE)
    .extract({ left: 0, top: 0, width: meta.width, height: cropHeight })
    .resize(size, size, { fit: "contain", background: BG })
    .png()
    .toBuffer();
}

/** Full logo with text */
async function fullLogoBuffer(size) {
  return sharp(SOURCE)
    .resize(size, size, { fit: "contain", background: BG })
    .png()
    .toBuffer();
}

/** Android maskable icon — mark centered with safe-zone padding */
async function maskableBuffer(size) {
  const inner = Math.round(size * 0.78);
  const mark = await logoMarkBuffer(inner);
  return sharp({
    create: { width: size, height: size, channels: 4, background: BG },
  })
    .composite([{ input: mark, gravity: "center" }])
    .png()
    .toBuffer();
}

async function main() {
  mkdirSync(path.join(root, ".tmp-favicon"), { recursive: true });

  const icoSizes = [16, 32, 48];
  const icoBuffers = [];
  for (const size of icoSizes) {
    const buf = await logoMarkBuffer(size);
    writeFileSync(path.join(root, `.tmp-favicon/favicon-${size}.png`), buf);
    icoBuffers.push(buf);
  }

  const pngToIco = (await import("png-to-ico")).default;
  writeFileSync(path.join(root, "public/favicon.ico"), await pngToIco(icoBuffers));

  writeFileSync(path.join(root, "src/app/icon.png"), await logoMarkBuffer(48));

  const appleBuf = await fullLogoBuffer(180);
  writeFileSync(path.join(root, "src/app/apple-icon.png"), appleBuf);
  writeFileSync(path.join(root, "public/apple-icon.png"), appleBuf);

  writeFileSync(path.join(root, "public/icon-192.png"), await fullLogoBuffer(192));
  writeFileSync(path.join(root, "public/icon-512.png"), await fullLogoBuffer(512));
  writeFileSync(path.join(root, "public/icon-192-maskable.png"), await maskableBuffer(192));
  writeFileSync(path.join(root, "public/icon-512-maskable.png"), await maskableBuffer(512));

  console.log("Generated favicon + app icons:");
  console.log("  public/favicon.ico");
  console.log("  src/app/icon.png (48) — browser tab");
  console.log("  src/app/apple-icon.png + public/apple-icon.png (180) — iOS home screen");
  console.log("  public/icon-192.png, icon-512.png — PWA / Android");
  console.log("  public/icon-192-maskable.png, icon-512-maskable.png — adaptive icons");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
