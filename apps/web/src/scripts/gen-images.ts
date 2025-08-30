import sharp from "sharp";
import { readdirSync, mkdirSync, existsSync } from "fs";
import { join } from "path";

async function run() {
  const src = "public/raw";
  const out = "public/media";
  if (!existsSync(out)) mkdirSync(out, { recursive: true });
  const files = readdirSync(src);
  for (const f of files) {
    const inputPath = join(src, f);
    const base = f.replace(/\.[^.]+$/, "");
    const img = sharp(inputPath).resize(1280, null, { withoutEnlargement: true });
    await img.avif({ quality: 56 }).toFile(join(out, `${base}.avif`));
    await img.webp({ quality: 72 }).toFile(join(out, `${base}.webp`));
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

