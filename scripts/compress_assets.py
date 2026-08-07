#!/usr/bin/env python3
"""
compress_assets.py
==================
Batch script untuk me-resize dan mengompresi gambar di public/Assets dan asset/
agar memenuhi standar web performance (super kecil, pemuatan cepat).
"""

import os
import sys
from pathlib import Path
from PIL import Image, ImageOps

BASE_DIR = Path(__file__).parent.parent
TARGET_DIRS = [
    BASE_DIR / "public" / "Assets",
    BASE_DIR / "asset",
]

# Resolution rules based on folder/filepath
MAX_PHOTO_DIM = 1920
MAX_LOGO_DIM = 800
MAX_OTHER_DIM = 1920

QUALITY_WEBP = 75
QUALITY_JPEG = 75

IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}

def get_max_dim(filepath: Path) -> int:
    path_str = str(filepath).lower()
    if "logo" in path_str:
        return MAX_LOGO_DIM
    return MAX_PHOTO_DIM

def compress_image(filepath: Path) -> tuple[int, int, bool]:
    """
    Reads image, resizes if max dimension exceeds limit, compresses and overwrites.
    Returns (orig_size_bytes, new_size_bytes, success).
    """
    orig_size = filepath.stat().st_size
    ext = filepath.suffix.lower()

    try:
        with Image.open(filepath) as img:
            # Handle orientation from EXIF
            img = ImageOps.exif_transpose(img)
            
            w, h = img.size
            max_allowed = get_max_dim(filepath)
            
            # Check if resizing needed
            needs_resize = max(w, h) > max_allowed
            if needs_resize:
                if w >= h:
                    new_w = max_allowed
                    new_h = max(1, int(h * (max_allowed / w)))
                else:
                    new_h = max_allowed
                    new_w = max(1, int(w * (max_allowed / h)))
                img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
            
            # Prepare image format / color mode
            if ext in [".jpg", ".jpeg"]:
                if img.mode in ("RGBA", "P"):
                    img = img.convert("RGB")
                img.save(filepath, "JPEG", quality=QUALITY_JPEG, optimize=True)
            elif ext == ".webp":
                if img.mode == "P":
                    img = img.convert("RGBA")
                img.save(filepath, "WEBP", quality=QUALITY_WEBP, method=6)
            elif ext == ".png":
                # For PNG, if RGBA or P, optimize PNG saving
                if img.mode == "P":
                    img = img.convert("RGBA")
                img.save(filepath, "PNG", optimize=True)

        new_size = filepath.stat().st_size
        return (orig_size, new_size, True)
    except Exception as e:
        print(f"❌ Error processing {filepath.name}: {e}")
        return (orig_size, orig_size, False)

def main():
    print("=" * 65)
    print("🚀 PROSES KOMPRESI DAN OPTIMASI GAMBAR ASET WEBSITE")
    print("=" * 65)

    total_orig = 0
    total_new = 0
    processed_count = 0
    skipped_count = 0

    for target_dir in TARGET_DIRS:
        if not target_dir.exists():
            continue
        print(f"\n📂 Memproses direktori: {target_dir.relative_to(BASE_DIR)}")

        for root, dirs, files in os.walk(target_dir):
            for file in files:
                filepath = Path(root) / file
                if filepath.suffix.lower() in IMAGE_EXTENSIONS:
                    orig_sz, new_sz, success = compress_image(filepath)
                    if success:
                        total_orig += orig_sz
                        total_new += new_sz
                        processed_count += 1
                        savings = orig_sz - new_sz
                        rel_path = filepath.relative_to(BASE_DIR)
                        if savings > 100 * 1024:  # Print noticeable reductions (>100KB)
                            print(f"  ✅ {rel_path}: {orig_sz//1024} KB → {new_sz//1024} KB (-{savings//1024} KB)")
                    else:
                        skipped_count += 1

    orig_mb = total_orig / (1024 * 1024)
    new_mb = total_new / (1024 * 1024)
    saved_mb = orig_mb - new_mb
    percent = (saved_mb / orig_mb * 100) if orig_mb > 0 else 0

    print("\n" + "=" * 65)
    print("📊 RINGKASAN HASIL OPTIMASI GAMBAR")
    print("=" * 65)
    print(f"Jumlah berkas diproses : {processed_count}")
    print(f"Ukuran Awal            : {orig_mb:.2f} MB")
    print(f"Ukuran Akhir           : {new_mb:.2f} MB")
    print(f"Total Hemat Ukuran     : {saved_mb:.2f} MB ({percent:.1f}% berkurang!)")
    print("=" * 65)

if __name__ == "__main__":
    main()
