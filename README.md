# 🎓 Website Resmi PKKMB Fakultas Vokasi UNY 2026

> **"Take the leap, chase your dream!"**  
> Pusat informasi resmi, panduan penugasan, direktori ormawa/ukm, dan layanan advokasi untuk Pengenalan Kehidupan Kampus bagi Mahasiswa Baru (PKKMB) Fakultas Vokasi Universitas Negeri Yogyakarta 2026.

---

## 📌 Tentang Website

Website ini dikembangkan sebagai portal digital terpadu bagi mahasiswa baru Fakultas Vokasi UNY tahun 2026 untuk mengakses seluruh informasi penting terkait rangkaian kegiatan PKKMB, materi orientasi, panduan atribut, tata tertib, ormawa, UKM, hingga pusat bantuan & advokasi.

---

## ✨ Fitur Utama

- **🏠 Beranda Interaktif**: Sambutan pimpinan, pengenalan panitia & tema, filosofi logo/maskot, profil Fakultas Vokasi, serta peta/denah kampus (Kampus Wates & Gunungkidul).
- **📅 Timeline Kegiatan**: Jadwal lengkap dan rundown tahapan pra-PKKMB hingga pasca-kegiatan.
- **📖 Panduan & Juknis**: Akses buku panduan resmi, unduhan dokumen, dan materi pembekalan maba.
- **👔 Ketentuan Atribut & Penugasan**: Detail busana, perlengkapan wajib, ketentuan dresscode, serta penugasan individu dan kelompok.
- **⚖️ Tata Tertib**: Regulasi, kode etik, hak & kewajiban peserta, dan sistem poin/sanksi pelanggaran.
- **🏛️ Direktori Ormawa & UKM**: Profil lengkap organisasi mahasiswa (BEM, DPM, HIMA) dan Unit Kegiatan Mahasiswa dengan detail deskripsi, struktur, dan kontak.
- **💬 Advokasi & Helpdesk**: Pusat layanan pertanyaan kendala teknis, aspirasi, dan kontak narahubung resmi panitia.
- **❓ Tanya Jawab (FAQ)**: Kumpulan tanya-jawab seputar pelaksanaan PKKMB yang sering ditanyakan.

---

## 🛠️ Tech Stack & Ekosistem

- **Framework**: [Astro](https://astro.build/) v7
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4 (`@tailwindcss/vite`)
- **Icons**: [Lucide Astro](https://lucide.dev/)
- **Interactive UI & Carousel**: [Swiper](https://swiperjs.com/)
- **Media**: `@astro-community/astro-embed-youtube`
- **Asset Optimization**: `sharp` & `cwebp-bin` untuk optimasi gambar WebP

---

## 📂 Struktur Proyek

```text
pkkmbfvuny/
├── public/                  # Aset statis publik (favicon, PDF panduan, dll.)
├── src/
│   ├── assets/              # Aset gambar, logo, ilustrasi, dan ikon
│   │   ├── icons/
│   │   ├── illustrations/
│   │   └── logos/
│   ├── components/          # Komponen UI modular
│   │   ├── home/            # Komponen halaman Beranda (Hero, Welcome, Map, dll.)
│   │   ├── layout/          # Navbar, Footer, MobileNav
│   │   └── ui/              # Komponen UI reusable (Card, Button, Modal, dll.)
│   ├── data/                # Data terpusat (ormawa, ukm, timeline, faq)
│   ├── layouts/             # Layout utama (BaseLayout.astro)
│   ├── pages/               # Halaman & rute aplikasi Astro
│   │   ├── ormawa/          # Halaman dinamis ormawa
│   │   ├── ukm/             # Halaman dinamis ukm
│   │   ├── advokasi.astro
│   │   ├── canvas.astro
│   │   ├── faq.astro
│   │   ├── index.astro
│   │   ├── ketentuan-atribut.astro
│   │   ├── ormawa.astro
│   │   ├── panduan.astro
│   │   ├── tata-tertib.astro
│   │   ├── timeline.astro
│   │   └── ukm.astro
│   └── styles/              # Global CSS & konfigurasi styling
├── astro.config.mjs         # Konfigurasi Astro & integrasi
└── package.json             # Dependensi dan script project
```

---

## 🚀 Memulai Pengembangan (Local Development)

### Prasyarat
- **Node.js**: Versi `>= 22.12.0`
- **npm** (atau package manager yang didukung)

### 1. Instalasi Dependensi
```bash
npm install
```

### 2. Menjalankan Server Development
```bash
npm run dev
```
Buka browser dan akses [http://localhost:4321](http://localhost:4321).

### 3. Build untuk Produksi
```bash
npm run build
```
Hasil build statis akan disimpan dalam direktori `./dist/`.

### 4. Preview Hasil Build
```bash
npm run preview
```

---

## 📜 Skrip Tambahan

| Perintah | Keterangan |
| :--- | :--- |
| `npm run dev` | Menjalankan server pengembangan lokal |
| `npm run build` | Melakukan build aplikasi untuk deployment |
| `npm run preview` | Menjalankan preview lokal dari folder `./dist` |
| `npm run astro ...` | Menjalankan perintah bawaan Astro CLI (misal: `astro check`) |

---

## 👥 Tim Pengembang & Penyelenggara

Dikembangkan dengan penuh dedikasi oleh **Cokro Aksata Nusantara**.

© 2026 Cokro Aksata Nusantara. All Rights Reserved.
