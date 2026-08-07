#!/usr/bin/env python3
"""
process_drive_assets.py
=======================
Memproses berkas yang diunduh dari Google Drive pengumpulan Ormawa/UKM.
- Melewati: PDF, DOCX, HEIF, dan berkas non-gambar lainnya
- Mengkonversi semua gambar (JPG/JPEG/PNG) → WebP kualitas 60%
- Menempatkan logo ke:         public/Assets/logos/ormawa/ atau public/Assets/logos/ukm/
- Menempatkan foto ke:         public/Assets/photos/ormawa/ atau public/Assets/photos/ukm/
- Penamaan berkas: card-X.webp, header-X.webp, gallery-X-N.webp
"""

import os
import sys
import shutil
from pathlib import Path
from PIL import Image

# ── Konfigurasi ─────────────────────────────────────────────────────────────
BASE = Path(__file__).parent.parent
SRC  = BASE / "temp_drive_downloads" / "PENGUMPULAN LOGO DAN DOKUMENTASI"
ORMAWA_LOGO = BASE / "public" / "Assets" / "logos" / "ormawa"
UKM_LOGO    = BASE / "public" / "Assets" / "logos" / "ukm"
ORMAWA_PHOTO = BASE / "public" / "Assets" / "photos" / "ormawa"
UKM_PHOTO    = BASE / "public" / "Assets" / "photos" / "ukm"

WEBP_QUALITY = 60

# ── Pemetaan folder Drive → id ormawa/ukm ───────────────────────────────────
FOLDER_MAP = {
    "HIMA TABONA":      {"id": "himatabona",      "type": "ormawa"},
    "HIMA NAGARI":      {"id": "himanagari",      "type": "ormawa"},
    "BEM":              {"id": "bem",              "type": "ormawa"},
    "DPM":              {"id": "dpm",              "type": "ormawa"},
    "HMDBK":            {"id": "hmdbk",            "type": "ormawa"},
    "HMDTM":            {"id": "hmdtm",            "type": "ormawa"},
    "HMDTS":            {"id": "hmdts",            "type": "ormawa"},
    "HMOK":             {"id": "hmok",             "type": "ormawa"},
    "HMVE":             {"id": "hmve",             "type": "ormawa"},
    "UKM BAITURRAHMAN": {"id": "ukm-baiturrahman", "type": "ukm"},
    "UKM KESENIAN":     {"id": "ukm-kesenian",     "type": "ukm"},
    "UKM KEWIRAUSAHAAN":{"id": "ukm-kewirausahaan","type": "ukm"},
}

SKIP_EXTENSIONS = {".pdf", ".docx", ".doc", ".heif", ".heic", ".dng", ".xls", ".xlsx", ".ppt", ".pptx"}
IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp", ".gif", ".bmp", ".tiff", ".tif"}

# Kata kunci nama file → arahkan ke logo
LOGO_KEYWORDS = ["logo", "lambang", "icon", "brand"]


def is_logo(filename: str) -> bool:
    name_lower = filename.lower()
    return any(kw in name_lower for kw in LOGO_KEYWORDS)


def convert_to_webp(src_path: Path, dst_path: Path, quality: int = 60):
    """Buka gambar, konversi ke RGB jika perlu, simpan sebagai WebP."""
    try:
        with Image.open(src_path) as img:
            if img.mode not in ("RGB", "RGBA"):
                img = img.convert("RGB")
            elif img.mode == "RGBA":
                # Flatten alpha ke latar putih untuk WebP
                bg = Image.new("RGB", img.size, (255, 255, 255))
                bg.paste(img, mask=img.split()[3])
                img = bg
            dst_path.parent.mkdir(parents=True, exist_ok=True)
            img.save(dst_path, "WEBP", quality=quality, method=6)
        print(f"  ✅  {src_path.name}  →  {dst_path.name}  ({dst_path.stat().st_size // 1024} KB)")
        return True
    except Exception as e:
        print(f"  ❌  Gagal: {src_path.name}  —  {e}")
        return False


def process_folder(folder: Path, org_id: str, org_type: str):
    """Proses satu folder ormawa/ukm."""
    files = sorted([f for f in folder.iterdir() if f.is_file()])
    if not files:
        print(f"  ⚠️  Folder kosong: {folder.name}")
        return

    logo_dir  = ORMAWA_LOGO if org_type == "ormawa" else UKM_LOGO
    photo_dir = ORMAWA_PHOTO if org_type == "ormawa" else UKM_PHOTO

    logos  = []
    photos = []

    for f in files:
        ext = f.suffix.lower()
        if ext in SKIP_EXTENSIONS:
            print(f"  ⏭️  Skip: {f.name}")
            continue
        if ext not in IMAGE_EXTENSIONS:
            print(f"  ⏭️  Skip (unknown): {f.name}")
            continue

        if is_logo(f.name):
            logos.append(f)
        else:
            photos.append(f)

    # ── Logo ─────────────────────────────────────────────────────────────────
    if logos:
        # Ambil hanya logo pertama; jika ada lebih, beri warning
        logo_src = logos[0]
        logo_dst = logo_dir / f"logo-{org_id}.webp"
        if len(logos) > 1:
            print(f"  ℹ️  Lebih dari 1 logo ditemukan, hanya menggunakan: {logo_src.name}")
        convert_to_webp(logo_src, logo_dst, quality=80)  # Logo sedikit lebih tinggi kualitasnya
    else:
        print(f"  ℹ️  Tidak ada file logo untuk {org_id}")

    # ── Foto Dokumentasi ─────────────────────────────────────────────────────
    if not photos:
        print(f"  ℹ️  Tidak ada foto dokumentasi untuk {org_id}")
        return

    # Cek apakah sudah ada foto yang dibuat sebelumnya
    existing_card   = photo_dir / f"card-{org_id}.webp"
    existing_header = photo_dir / f"header-{org_id}.webp"
    has_card   = existing_card.exists()
    has_header = existing_header.exists()

    # Tetapkan: foto[0]=card, foto[1]=header, foto[2+]=gallery
    idx = 0
    for i, src in enumerate(photos):
        if i == 0 and not has_card:
            dst = photo_dir / f"card-{org_id}.webp"
            convert_to_webp(src, dst, quality=WEBP_QUALITY)
        elif i == 1 and not has_header:
            dst = photo_dir / f"header-{org_id}.webp"
            convert_to_webp(src, dst, quality=WEBP_QUALITY)
        else:
            # Cek nomor gallery berikutnya
            idx += 1
            gallery_existing = list(photo_dir.glob(f"gallery-{org_id}-*.webp"))
            next_n = len(gallery_existing) + idx
            dst = photo_dir / f"gallery-{org_id}-{next_n}.webp"
            while dst.exists():
                next_n += 1
                dst = photo_dir / f"gallery-{org_id}-{next_n}.webp"
            convert_to_webp(src, dst, quality=WEBP_QUALITY)


def main():
    if not SRC.exists():
        print(f"❌ Folder sumber tidak ditemukan: {SRC}")
        sys.exit(1)

    print("=" * 60)
    print("  PEMROSESAN ASET DRIVE → WebP")
    print("=" * 60)

    for folder_name, meta in FOLDER_MAP.items():
        folder = SRC / folder_name
        if not folder.exists():
            print(f"\n⚠️  Folder tidak ada: {folder_name} (belum mengumpulkan)")
            continue

        org_id   = meta["id"]
        org_type = meta["type"]
        print(f"\n📂  {folder_name}  →  [{org_type}] {org_id}")
        process_folder(folder, org_id, org_type)

    print("\n" + "=" * 60)
    print("  SELESAI!")
    print("=" * 60)


if __name__ == "__main__":
    main()
