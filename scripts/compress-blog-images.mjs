import sharp from "sharp";
import { glob } from "node:fs/promises";
import path from "node:path";

const assetsDir = path.resolve("assets");
const patterns = ["blog-*.png"];

for (const pattern of patterns) {
  for await (const file of glob(path.join(assetsDir, pattern))) {
    const output = file.replace(/\.png$/i, ".webp");
    await sharp(file).webp({ quality: 80 }).toFile(output);
    console.log(`wrote ${path.relative(process.cwd(), output)}`);
  }
}
