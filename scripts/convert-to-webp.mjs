#!/usr/bin/env node
/**
 * Converts src/assets and public OG images to WebP and updates source imports.
 * Run: node scripts/convert-to-webp.mjs
 */
import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const ASSETS = path.join(ROOT, "src", "assets");
const PUBLIC = path.join(ROOT, "public");
const SRC = path.join(ROOT, "src");

const EXT_RE = /\.(jpe?g|png)$/i;

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...(await walk(full)));
    else if (EXT_RE.test(e.name)) files.push(full);
  }
  return files;
}

async function convertFile(filePath) {
  const webpPath = filePath.replace(EXT_RE, ".webp");
  if (filePath === webpPath) return null;
  const buf = await sharp(filePath).webp({ quality: 85, effort: 4 }).toBuffer();
  await fs.writeFile(webpPath, buf);
  await fs.unlink(filePath);
  return { from: filePath, to: webpPath };
}

async function updateSourceImports() {
  const exts = [".ts", ".tsx", ".js", ".jsx", ".mjs"];
  async function walkSrc(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory() && e.name !== "node_modules") await walkSrc(full);
      else if (exts.some((x) => e.name.endsWith(x))) {
        let text = await fs.readFile(full, "utf8");
        const next = text.replace(/\.(jpe?g|png)(?=["'])/gi, ".webp");
        if (next !== text) await fs.writeFile(full, next);
      }
    }
  }
  await walkSrc(SRC);
}

async function main() {
  const targets = [...(await walk(ASSETS))];
  for (const name of ["og-image.jpg", "og-image.jpeg", "og-image.png"]) {
    try {
      await fs.access(path.join(PUBLIC, name));
      targets.push(path.join(PUBLIC, name));
    } catch {
      /* skip */
    }
  }

  const converted = [];
  for (const f of targets) {
    const r = await convertFile(f);
    if (r) converted.push(r);
  }

  await updateSourceImports();
  console.log(`Converted ${converted.length} images to WebP and updated imports.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
