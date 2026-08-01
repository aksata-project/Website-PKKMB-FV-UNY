# Temuan Masalah & Hasil Audit — Website PKKMB FV UNY 2026

Dokumen ini mencatat seluruh temuan masalah, ketidaksesuaian data, serta area perbaikan pada website PKKMB FV UNY 2026. Audit ini mencakup analisis *codebase* statis (Astro SSG), komparasi data resmi Instagram Ormawa/UKM, serta pencocokan berkas resmi dari Google Drive PDD.

---

## 📌 Ringkasan Audit Statis

| Kategori | Jumlah Masalah | Urgensi | Status Perbaikan |
|---|---|---|---|
| **1. Data Kontak Ormawa & UKM** | 14 Kontak | 🔴 P-0 | ✅ SELESAI (14 IG valid + logo SVG KWU/KSR/Olahraga) |
| **2. Dokumen & Tautan Mengambang** | 3 Link | 🔴 P-0 | ✅ SELESAI (4 link Drive aktif di `/panduan`) |
| **3. UI, Countdown & Maskot** | 4 Masalah | 🟠 P-1 | 🟡 SELESAI PERATAN COUNTDOWN & TEKS (Maskot menyusul) |
| **4. Inkonsistensi Data & Kontak** | 5 Ketidaksesuaian | 🟠 P-1 | ✅ SELESAI (FAQ, Email, YouTube, Typo Logo) |
| **5. Kualitas Kode & Arsitektur** | 6 Item | 🟡 P-2 | 🟡 SELESAI DEAD CODE (OrgModal dihapus, build clean) |
| **6. SEO & Aksesibilitas** | 3 Catatan | 🟢 P-3 | ⏳ Tahap Berikutnya |

---

## 1. Data Kontak Instagram Ormawa & UKM SALAH / TIDAK SESUAI

Acuan resmi: Daftar 15 Akun Instagram Resmi Ormawa Vokasi UNY.
Lokasi data di codebase: `src/data/orgs.ts`

| Organisasi | IG di Kode (`orgs.ts`) | IG Resmi (Valid) | Status di Codebase |
|---|---|---|---|
| BEM FV UNY | `instagram.com/bemfvuny` | `bemvokasiuny` | ❌ Salah |
| DPM KM FV UNY | `instagram.com/dpmfvuny` | `dpmkmfvuny` | ❌ Salah |
| HMVE | `instagram.com/hmve_uny` | `hmve.uny` | ❌ Salah |
| HMDTM | `instagram.com/hmdtm_uny` | `hmdtm.fvuny` | ❌ Salah |
| HMDTS | `instagram.com/hmdts_uny` | `hmdts_fvuny` | ❌ Salah |
| HIMA NAGARI | `instagram.com/himanagari_uny` | `himanagari` | ❌ Salah |
| HIMA TABONA | `instagram.com/himatabona_uny` | `himatabona` | ❌ Salah |
| HIMA ORKES | `instagram.com/hmok_fvuny` (web: HMOK) | `himaorkesfvuny` | ❌ Salah + Nama Beda |
| HIMA DBK | `instagram.com/hmdbk_uny` | `himadbkfvuny` | ❌ Salah |
| UKM BAITURRAHMAN | `instagram.com/baiturrahman_fvuny` | `ukmf_baiturrahman` | ❌ Salah |
| UKM KESENIAN | `instagram.com/ukmkesenian_fvuny` | `ukmkesenianfv.uny` | ❌ Salah |
| UKM PENELITIAN (REACTION) | `instagram.com/ukmfreaction` | `ukmfreaction` | ✅ Benar |
| UKM KWU | Tidak ada (status "Segera Hadir") | `kwuvokasiuny` | ❌ Belum diisi |
| UKM KSR PMI | Tidak ada (status "Segera Hadir") | `ksrpmifvuny` | ❌ Belum diisi |
| UKM OLAHRAGA | Tidak ada (status "Segera Hadir") | `ukmfv_olahraga` | ❌ Belum diisi |

### Masalah Turunan Data Kontak:
- **Kontak Palsu/Placeholder**: WhatsApp `wa.me/628123456789...` dan TikTok `@bemfvuny`, `@dpmfvuny` terbukti data fiktif.
- **3 UKM Berstatus "Segera Hadir"**: KWU, KSR, dan Olahraga padahal data IG resminya sudah tersedia.
- **Penggunaan Logo UKM**: UKM Kewirausahaan, KSR, dan Olahraga di `orgs.ts` menggunakan logo `logo-ukm-reaction.svg` (salah logo organisasi).

---

## 2. Dokumen Peserta & Link Mengambang (`panduan.astro`)

- **3 Kartu Dokumen Berstatus "LINK MENYUSUL"**:
  - `Guidebook PKKMB` (`href: null`)
  - `Tata Tertib` (`href: null`)
  - `Pemaparan Advokasi` (`href: null`)
- **Solusi**: Tautan resmi Google Drive dari dokumen [DAFTAR-ASET-DRIVE.md](file:///home/brianatmokoo/Documents/Cokro%20Proyek/Website-PKKMB-FV-UNY/DAFTAR-ASET-DRIVE.md) sudah tersedia dan siap dihubungkan langsung ke komponen `documentResources` di [src/pages/panduan.astro](file:///home/brianatmokoo/Documents/Cokro%20Proyek/Website-PKKMB-FV-UNY/src/pages/panduan.astro).

---

## 3. Masalah Tampilan UI & Responsif (User Experience)

1. **Countdown Wrap di Layar Mobile (`Hero.astro`)**:
   - Container countdown (`flex flex-wrap justify-center`) menyebabkan kotak angka (Hari, Jam, Menit, Detik) patah/wrap ke baris kedua saat dibuka pada layar HP.
2. **Label Teks Salah (`timeline.astro`)**:
   - Di `timeline.astro` line 96 terdapat badge bertuliskan `GESER & CATAT ✦`, padahal layout di bawahnya memakai `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` (grid statis, bukan carousel horizontal).
3. **Maskot Vokasi Belum Ada (`Hero.astro`)**:
   - Ilustrasi/animasi maskot vokasi di sekitar judul "Selamat Datang Vokasi Muda" belum dipasang (folder `public/Assets/illustrations/mascot/` masih kosong).
4. **Foto Kampus & Galeri (SELESAI ✅)**:
   - Foto Kampus Kulon Progo & Gunungkidul di [AboutFaculty.astro](file:///home/brianatmokoo/Documents/Cokro%20Proyek/Website-PKKMB-FV-UNY/src/components/home/AboutFaculty.astro) kini menampilkan foto gedung kampus asli.
   - Galeri foto "Intip keseruan PKKMB FV UNY 2025" di [Welcome.astro](file:///home/brianatmokoo/Documents/Cokro%20Proyek/Website-PKKMB-FV-UNY/src/components/home/Welcome.astro) kini memuat 10 foto dokumentasi asli dari Google Drive PDD dengan `alt` text deskriptif.
   - Foto di [Introduction.astro](file:///home/brianatmokoo/Documents/Cokro%20Proyek/Website-PKKMB-FV-UNY/src/components/home/Introduction.astro) serta seluruh kartu Ormawa/UKM di `src/data/orgs.ts` telah terhubung ke foto dokumentasi resmi Google Drive CDN.

---

## 4. Inkonsistensi Data & Kontak Antar Halaman

- **Tanggal PKKMB**:
  - Halaman FAQ (`faq.astro` line 16): menyebutkan *"20–23 Agustus 2026"*.
  - Halaman Timeline (`timeline.astro` line 39-55): PKKMB FV UNY = 20 Agt, PKKMB Departemen = 21 Agt, SDP × OH = 29 Agt.
  - Dokumen Acara Resmi Drive: TMTP = 25 Juli 2026, Deadline CAnVas = 20 Agt 2026, CBT Domisili = 21 Agt 2026.
- **Email Kontak Berbeda**:
  - `faq.astro` line 106: `pkkmbfvuny2026@uny.ac.id`
  - `Footer.astro` line 138 & `SocialIcons.astro` line 29: `pkkmbfvuny.web@gmail.com`
- **Link YouTube PKKMB**:
  - `SocialIcons.astro` line 37: `youtube.com/@pkkmbfvuny` vs Dokumen Kontrak Belajar Resmi: `@FVUNYOfficial`.
- **Typo Nama File Logo**:
  - `public/Assets/logos/ukm/logo-ukm-keseninan.svg` ("keseninan", typo).

---

## 5. Kualitas Kode & Pemeliharaan (Static Site Architecture)

- **Duplikasi `<head>` & Google Fonts**:
  - Setiap halaman (`index`, `timeline`, `panduan`, `ormawa`, `ukm`, `faq`, `[id]`) menulis ulang tag `<html>`, `<head>`, meta description, dan import Google Fonts secara manual.
  - *Rekomendasi*: Buat `BaseLayout.astro` di `src/layouts/` untuk membungkus seluruh halaman agar konsisten.
- **Dead Code**:
  - `src/components/ui/OrgModal.astro` tidak pernah dipakai di halaman manapun (halaman detail menggunakan dynamic route `/[id].astro`).
- **Dependensi Nganggur (`package.json`)**:
  - `@astro-community/astro-embed-youtube` dan `lucide-astro` terinstall tapi tidak pernah diimpor di `src/`.
- **Countdown Target Hardcoded**:
  - Script countdown di `Hero.astro` menggunakan `new Date("August 20, 2026 00:00:00")` secara hardcoded.

---

## 6. SEO & Aksesibilitas (Minor)

- `alt` text gambar pada galeri `Welcome.astro` hanya berisi `"800 x 600"`.
- `alt` text pada marquee logo `AboutFaculty.astro` hanya berisi `"Logo Organisasi"`.
- Belum ada `sitemap.xml`, `robots.txt`, serta Open Graph meta tags (OG Image/Title) untuk preview ketika link dibagikan ke media sosial.

---

## 🚀 Pelan Tindakan Perbaikan Yang Direkomendasikan

1. **Tahap 1 (Data & Link Dokumen)**:
   - Perbarui seluruh data IG di `src/data/orgs.ts` sesuai 15 IG resmi.
   - Isi link Google Drive pada `documentResources` di `panduan.astro` dari [DAFTAR-ASET-DRIVE.md](file:///home/brianatmokoo/Documents/Cokro%20Proyek/Website-PKKMB-FV-UNY/DAFTAR-ASET-DRIVE.md).
   - Samakan email (`pkkmbfvuny.web@gmail.com` / `pkkmbfvuny2026@uny.ac.id`) dan Youtube channel di seluruh komponen.
2. **Tahap 2 (Pembersihan UI & Layout)**:
   - Perbaiki perataan countdown timer di `Hero.astro` (layout mobile satu baris/responsive).
   - Ganti teks `"GESER & CATAT"` menjadi `"SCROLL & CATAT"` di `timeline.astro`.
   - Perbaiki typo file logo `logo-ukm-keseninan.svg`.
3. **Tahap 3 (Arsitektur & Refactoring Kode)**:
   - Buat `BaseLayout.astro` untuk eliminasi duplikasi `<head>` di 8 halaman.
   - Hapus dead code `OrgModal.astro` dan dependensi yang tidak terpakai.
