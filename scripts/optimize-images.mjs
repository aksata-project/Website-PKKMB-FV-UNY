// scripts/optimize-images.mjs
// Konversi JPG/PNG di public/Assets menjadi WebP (resize max 2000px, q82).
// Idempotent: file .webp yang sudah ada & lebih baru dari sumbernya akan dilewati.
import { readdir, stat } from 'node:fs/promises';
import { join, extname, dirname, basename } from 'node:path';
import sharp from 'sharp';

const ROOT = join(process.cwd(), 'public', 'Assets');
const MAX_WIDTH = 2000;
const QUALITY = 82;

let converted = 0;
let skipped = 0;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full);
      continue;
    }
    const ext = extname(entry.name).toLowerCase();
    if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') continue;

    const source = await stat(full);
    const outFile = join(dirname(full), `${basename(entry.name, ext)}.webp`);

    let upToDate = false;
    try {
      const outStat = await stat(outFile);
      upToDate = outStat.mtimeMs >= source.mtimeMs && outStat.size > 0;
    } catch {
      // output belum ada
    }

    if (upToDate) {
      skipped++;
      continue;
    }

    const img = sharp(full, { failOn: 'none' });
    const meta = await img.metadata();
    if (meta.width && meta.width > MAX_WIDTH) {
      img.resize({ width: MAX_WIDTH, withoutEnlargement: true });
    }
    await img
      .webp({ quality: QUALITY, effort: 4, smartSubsample: true })
      .toFile(outFile);

    converted++;
    console.log(`✓ ${outFile.replace(process.cwd(), '')} (${(source.size / 1024).toFixed(0)}KB → ${((await stat(outFile)).size / 1024).toFixed(0)}KB)`);
  }
}

await walk(ROOT);
console.log(`\nSelesai: ${converted} dikonversi, ${skipped} sudah up-to-date.`);
