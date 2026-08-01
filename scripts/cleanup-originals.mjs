// scripts/cleanup-originals.mjs
// Hapus file JPG/PNG asli dari dist/ — semua referensi sudah pakai WebP.
// Repo tetap menyimpan original (source), tapi yang dideploy hanya versi ringan.
import { readdir, unlink } from 'node:fs/promises';
import { join, extname } from 'node:path';

const DIST = join(process.cwd(), 'dist');
let removed = 0;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full);
      continue;
    }
    const ext = extname(entry.name).toLowerCase();
    if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
      await unlink(full);
      removed++;
    }
  }
}

await walk(DIST);
console.log(`\nCleanup: ${removed} file JPG/PNG dihapus dari dist/.`);
