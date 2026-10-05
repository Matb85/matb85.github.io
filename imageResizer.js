import sharp from "sharp";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { variants } from "./image.config.mjs";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(ROOT, "public/images");
const PHOTOS = path.join(ROOT, "src/assets/photos");

// Album photos get every variant (the full-screen viewer uses 1280/1920); the portrait on the
// photography page only needs up to 1280; the 320px-wide carousel cards only need 720.
const jobs = [
  { src: path.join(ROOT, "src/assets/other"), out: OUT, maxWidth: 1280 },
  { src: path.join(ROOT, "src/assets/ss"), out: OUT, maxWidth: 720 },
];
for (const entry of await fs.readdir(PHOTOS, { withFileTypes: true })) {
  if (entry.isDirectory()) {
    jobs.push({ src: path.join(PHOTOS, entry.name), out: path.join(OUT, entry.name), maxWidth: 1920 });
  }
}

const quality = width => (width >= 1280 ? 75 : 80);

async function transformFolder({ src, out, maxWidth }) {
  await fs.mkdir(out, { recursive: true });
  const files = (await fs.readdir(src)).filter(file => /\.(jpe?g|png)$/i.test(file));
  const sizes = variants.filter(v => v.width <= maxWidth);

  await Promise.all(
    files.flatMap(file =>
      sizes.map(({ width, prefix }) =>
        sharp(path.join(src, file))
          .rotate() // honour EXIF orientation, which webp output would otherwise drop
          .resize({ width, withoutEnlargement: true })
          .webp({ quality: quality(width) })
          .toFile(path.join(out, prefix + file.replace(/\.[^.]+$/, ".webp"))),
      ),
    ),
  );
  console.log(`${path.relative(ROOT, src)}: ${files.length} images × ${sizes.length} variants`);
}

try {
  for (const job of jobs) await transformFolder(job);
} catch (err) {
  console.error("Error in processing", err);
  process.exit(1);
}
