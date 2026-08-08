import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

/**
 * =========================================================================
 * 🖼️ BATCH PNG/JPG TO WEBP CONVERTER WITH CUSTOM RESIZE & COMPRESSION
 * Engine: Sharp (libwebp)
 * =========================================================================
 * 
 * CARA PENGGUNAAN:
 * 
 * 1. Konversi dasar folder/file (Default quality 80):
 *    node convert-webp.mjs src/assets/photos
 * 
 * 2. Custom Compress / Kualitas (misal quality 75):
 *    node convert-webp.mjs src/assets/photos -q 75
 * 
 * 3. Custom Resize Width (misal lebar 800px, tinggi otomatis rasio):
 *    node convert-webp.mjs src/assets/photos -w 800
 * 
 * 4. Custom Resize Width & Height (misal 800x480px):
 *    node convert-webp.mjs src/assets/photos -w 800 -h 480
 * 
 * 5. Kombinasi Resize + Kualitas + Hapus Asli:
 *    node convert-webp.mjs src/assets/photos -w 1200 -q 85 --del
 * 
 * OPSI / FLAG LENGKAP:
 *   -i, --input <path>      : Path folder atau file (default: ./src/assets)
 *   -w, --width <px>        : Lebar target pixel
 *   -h, --height <px>       : Tinggi target pixel
 *   -q, --quality <0-100>   : Kualitas kompresi WebP (default: 80)
 *   -f, --fit <type>        : Fit mode: cover, contain, fill, inside, outside (default: cover)
 *   --del, --delete         : Hapus file PNG/JPG asli setelah sukses konversi
 *   --lossless              : Gunakan mode kompresi tanpa penurunan kualitas (lossless)
 */

// Parse CLI Arguments
const args = process.argv.slice(2);
const options = {
  input: './src/assets',
  width: null,
  height: null,
  quality: 80,
  fit: 'cover',
  deleteOriginal: false,
  lossless: false,
};

for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  if (arg === '-w' || arg === '--width') {
    options.width = parseInt(args[++i], 10) || null;
  } else if (arg === '-h' || arg === '--height') {
    options.height = parseInt(args[++i], 10) || null;
  } else if (arg === '-q' || arg === '--quality') {
    options.quality = parseInt(args[++i], 10) || 80;
  } else if (arg === '-f' || arg === '--fit') {
    options.fit = args[++i] || 'cover';
  } else if (arg === '-i' || arg === '--input') {
    options.input = args[++i];
  } else if (arg === '--del' || arg === '--delete') {
    options.deleteOriginal = true;
  } else if (arg === '--lossless') {
    options.lossless = true;
  } else if (!arg.startsWith('-') && i === 0) {
    options.input = arg;
  }
}

const SUPPORTED_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp', '.tif', '.tiff', '.bmp'];

function getAllFiles(dirOrFile) {
  let fileList = [];
  if (!fs.existsSync(dirOrFile)) return fileList;

  const stat = fs.statSync(dirOrFile);
  if (stat.isFile()) {
    const ext = path.extname(dirOrFile).toLowerCase();
    if (SUPPORTED_EXTENSIONS.includes(ext)) {
      fileList.push(dirOrFile);
    }
  } else if (stat.isDirectory()) {
    const items = fs.readdirSync(dirOrFile);
    for (const item of items) {
      const fullPath = path.join(dirOrFile, item);
      fileList = fileList.concat(getAllFiles(fullPath));
    }
  }
  return fileList;
}

async function runBatchConversion() {
  const files = getAllFiles(options.input);

  console.log(`\n=======================================================`);
  console.log(`🚀 BATCH IMAGE CONVERTER TO WEBP (libwebp/Sharp)`);
  console.log(`=======================================================`);
  console.log(`📁 Input Target      : ${options.input}`);
  console.log(`📊 Quality           : ${options.lossless ? 'Lossless (100%)' : options.quality + '%'}`);
  console.log(`📐 Custom Resize     : ${options.width || 'Auto'} x ${options.height || 'Auto'} px ${options.width || options.height ? `(Fit: ${options.fit})` : ''}`);
  console.log(`🗑️  Hapus File Asli  : ${options.deleteOriginal ? 'Ya' : 'Tidak'}`);
  console.log(`🖼️  Total File Ditemukan : ${files.length} file`);
  console.log(`-------------------------------------------------------\n`);

  if (files.length === 0) {
    console.log(`⚠️ Tidak ada file gambar (${SUPPORTED_EXTENSIONS.join(', ')}) yang ditemukan di target.`);
    return;
  }

  let totalOriginalSize = 0;
  let totalNewSize = 0;
  let successCount = 0;
  let failCount = 0;

  for (let idx = 0; idx < files.length; idx++) {
    const filePath = files[idx];
    const ext = path.extname(filePath);
    const outputPath = filePath.substring(0, filePath.length - ext.length) + '.webp';
    const oldSizeBytes = fs.statSync(filePath).size;
    totalOriginalSize += oldSizeBytes;

    const progressStr = `[${idx + 1}/${files.length}]`;

    try {
      const fileBuffer = await fs.promises.readFile(filePath);
      let pipeline = sharp(fileBuffer);

      // Apply Custom Resize
      if (options.width || options.height) {
        pipeline = pipeline.resize({
          width: options.width,
          height: options.height,
          fit: options.fit,
          withoutEnlargement: false,
        });
      }

      // Apply WebP Compress Settings
      pipeline = pipeline.webp({
        quality: options.quality,
        lossless: options.lossless,
        effort: 6, // 0-6 max compression effort
      });

      const outputBuffer = await pipeline.toBuffer();

      // Write converted image
      await fs.promises.writeFile(outputPath, outputBuffer);

      const newSizeBytes = outputBuffer.length;
      totalNewSize += newSizeBytes;
      successCount++;

      const oldSizeKb = (oldSizeBytes / 1024).toFixed(1);
      const newSizeKb = (newSizeBytes / 1024).toFixed(1);
      const savingsPct = oldSizeBytes > 0 ? (((oldSizeBytes - newSizeBytes) / oldSizeBytes) * 100).toFixed(1) : '0';

      const metadata = await sharp(outputBuffer).metadata();
      const resizeInfo = ` (${metadata.width}x${metadata.height}px)`;

      console.log(`✅ ${progressStr} ${path.basename(filePath)} ➔ ${path.basename(outputPath)}${resizeInfo}`);
      console.log(`   └─ Ukuran: ${oldSizeKb} KB ➔ ${newSizeKb} KB (${savingsPct >= 0 ? 'Hemat ' + savingsPct + '%' : 'Naik ' + Math.abs(savingsPct) + '%'})\n`);

      // Delete original file if requested (and if output path is different)
      if (options.deleteOriginal && filePath.toLowerCase() !== outputPath.toLowerCase()) {
        fs.unlinkSync(filePath);
      }
    } catch (err) {
      failCount++;
      console.error(`❌ ${progressStr} Gagal konversi ${path.basename(filePath)}: ${err.message}\n`);
    }
  }

  const totalOldMb = (totalOriginalSize / (1024 * 1024)).toFixed(2);
  const totalNewMb = (totalNewSize / (1024 * 1024)).toFixed(2);
  const totalSavingsMb = ((totalOriginalSize - totalNewSize) / (1024 * 1024)).toFixed(2);
  const totalSavingsPct = totalOriginalSize > 0 ? (((totalOriginalSize - totalNewSize) / totalOriginalSize) * 100).toFixed(1) : '0';

  console.log(`=======================================================`);
  console.log(`🎉 KONVERSI BATCH SELESAI`);
  console.log(`=======================================================`);
  console.log(`✅ Berhasil : ${successCount} file`);
  if (failCount > 0) console.log(`❌ Gagal    : ${failCount} file`);
  console.log(`📦 Total Ukuran Sebelum : ${totalOldMb} MB`);
  console.log(`📦 Total Ukuran Sesudah : ${totalNewMb} MB`);
  console.log(`💥 Total Ruang Dihemat  : ${totalSavingsMb} MB (${totalSavingsPct}%)\n`);
}

runBatchConversion();
