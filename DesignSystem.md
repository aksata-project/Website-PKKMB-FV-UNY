# Design System PKKMB FV UNY 2026 — "Cokro Aksata"

> **Versi:** 1.0.0  
> **Author:** Senior Web Developer Team PKKMB FV UNY 2026  
> **Status:** Approved / Active Specification  
> **Dasar Desain:** Hero Section PKKMB FV UNY 2026

---

## 1. Visi & Filosofi Desain

Design System **PKKMB FV UNY 2026** dirancang untuk merepresentasikan semangat mahasiswa baru Fakultas Vokasi Universitas Negeri Yogyakarta di bawah nama kabinet **"Cokro Aksata"**.

### Core Vibe & Aesthetic Principles:
- **Vibrant & Futuristic Cityscape:** Menggambarkan dunia vokasi yang dinamis, modern, dan berorientasi pada masa depan industri & perkotaan.
- **Playful 3D Pop & Youthful Energy:** Penggunaan tipografi 3D tebal, aksen warna emas/kuning cerah, serta efek doodle interaktif memberikan kesan ramah, energik, dan inspiratif.
- **Clean Structure & Accessibility:** Kontras tinggi antara teks pendukung dan latar belakang memastikan keterbacaan (readability) yang optimal di berbagai ukuran perangkat.

---

## 2. Palet Warna (Color Palette & Tokens)

Palet warna diekstrak langsung dari elemen Hero Section, menggabungkan biru vokasi khas UNY dengan kuning emas aksata dan sentuhan langit cerah.

### 2.1 Brand & Core Colors

| Role | Color Name | Hex Code | HSL | Penggunaan Utama |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Brand** | Cokro Royal Blue | `#0F52BA` | `hsl(217, 85%, 40%)` | Judul utama 3D, tombol utama, teks nav aktif |
| **Secondary Brand** | Vokasi Sky Blue | `#3B82F6` | `hsl(217, 91%, 60%)` | Header bar, gradien hero, batas aksen |
| **Accent Gold** | Aksata Gold Yellow | `#FFC700` | `hsl(47, 100%, 50%)` | Angka "2026", tagline, garis batas wave, badge |
| **3D Shadow Depth** | Navy Extrusion | `#0A2540` | `hsl(210, 73%, 15%)` | Bayangan 3D pada teks judul & angka |
| **Background Light**| Cloud Sky Tint | `#EBF4FF` | `hsl(213, 100%, 96%)` | Latar belakang section utama & kartu light |
| **Header Blue** | Pattern Blue | `#2B7FFF` | `hsl(216, 100%, 58%)` | Navigation bar background dengan doodle overlay |
| **Neutral Dark** | Deep Charcoal | `#1E293B` | `hsl(215, 25%, 17%)` | Subtitle & body text |
| **Neutral Light** | Pure White | `#FFFFFF` | `hsl(0, 0%, 100%)` | Outline teks 3D, background pill aktif, card bg |

### 2.2 Design Tokens (CSS Variables)

```css
:root {
  /* Brand Palette */
  --color-primary-blue: #0F52BA;
  --color-primary-blue-dark: #0A2540;
  --color-secondary-blue: #3B82F6;
  --color-header-blue: #2B7FFF;
  --color-accent-gold: #FFC700;
  --color-sky-tint: #EBF4FF;
  
  /* Text & Surfaces */
  --color-text-main: #1E293B;
  --color-text-muted: #475569;
  --color-surface-white: #FFFFFF;
  --color-surface-glass: rgba(255, 255, 255, 0.85);

  /* Shadows & Borders */
  --shadow-3d-title: 0px 8px 0px #0A2540;
  --shadow-3d-tagline: 0px 4px 0px #0A2540;
  --shadow-pill: 0px 4px 12px rgba(15, 82, 186, 0.15);
  --border-white-stroke: 3px solid #FFFFFF;

  /* Border Radius */
  --radius-pill: 9999px;
  --radius-card-lg: 24px;
  --radius-card-md: 16px;
  --radius-button: 12px;
}
```

---

## 3. Tipografi (Typography Hierarchy)

Sistem tipografi menggunakan kombinasi 3 jenis font untuk mencapai keseimbangan antara *visual impact* dan *readability*.

### 3.1 Font Families
1. **Display Font (3D Titles):** `Fredoka`, `Bungee`, atau `Plus Jakarta Sans ExtraBold` (dengan gaya 3D extruded & white stroke).
2. **Tagline Font (Playful Subhead):** `Fredoka` / `Sniglet` (Bulat, ramah, playful).
3. **Body & UI Font:** `Plus Jakarta Sans` / `Inter` (Sangat terbaca di semua ukuran).

### 3.2 Typography Scale

| Hierarchy | Font Family | Size (Desktop) | Size (Mobile) | Weight | Line Height | Case |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Title 3D** | Display Font | `72px` (`4.5rem`) | `40px` (`2.5rem`) | 800 (Bold) | `1.1` | Uppercase |
| **Hero Year Badge** | Display Font | `56px` (`3.5rem`) | `36px` (`2.25rem`)| 800 (Bold) | `1.1` | Numeric |
| **Hero Tagline** | Playful Display | `32px` (`2rem`) | `20px` (`1.25rem`)| 700 (Bold) | `1.2` | Lowercase |
| **Hero Subtitle** | Body Sans | `24px` (`1.5rem`) | `16px` (`1rem`) | 600 (SemiBold)| `1.4` | Title Case |
| **Nav Links** | Body Sans | `16px` (`1rem`) | `14px` (`0.875rem`)| 700 (Bold) | `1.0` | Capitalize |
| **Body Text** | Body Sans | `16px` (`1rem`) | `14px` (`0.875rem`)| 400 (Regular) | `1.6` | Normal |

---

## 4. Spesifikasi Komponen (Component Specs)

### 4.1 Header Navigation Bar
- **Latar Belakang:** Header Blue (`#2B7FFF`) dengan efek overlay Doodle Pattern transparan (opasitas 15-20%).
- **Logo Area:**
  - Kiri: Logo UNY / Emblem FV Emas.
  - Samping: Logo & Teks **"COKRO AKSATA"** warna putih dengan ikon node jaringan/konstelasi.
- **Nav Items (Pills):**
  - **State Normal:** Teks warna putih (`#FFFFFF`), `font-weight: 700`, padding `8px 16px`, transition hover smooth (`opacity: 0.8`).
  - **State Aktif (Home):** Background Putih (`#FFFFFF`), Teks Biru Utama (`#0F52BA`), `border-radius: 9999px`, shadow halus `0 2px 8px rgba(0,0,0,0.1)`.
- **Social Media Icons:**
  - Ikon Email, YouTube, Instagram, TikTok berwarna putih bersih, ukuran `20px`, dengan jarak antar ikon `16px`.

### 4.2 Hero Banner Elements
1. **Title 3D ("PKKMB FV UNY"):**
   - Isian Teks: Biru Utama (`#0F52BA`).
   - Stroke/Outline: Putih (`#FFFFFF`) ketebalan `4px` - `6px`.
   - Bayangan Extrusion 3D: Dark Navy (`#0A2540`) offset bawah-kanan `6px 8px`.
   - Kemiringan: Arc / Tilt `deg(-2deg)` opsional untuk efek melengkung pop-art.

2. **Year Badge ("2026"):**
   - Isian Teks: Kuning Emas Aksata (`#FFC700`).
   - Stroke: Putih (`#FFFFFF`) `3px`.
   - Extrusion 3D: Dark Navy (`#0A2540`) `4px 6px`.

3. **Tagline Pill ("take the leap, chase your dream"):**
   - Isian Teks: Kuning Emas Aksata (`#FFC700`).
   - Stroke: Biru Tua / Navy (`#0A2540`) `2px`.
   - Aksesori: Ikon bintang kecil berwarna kuning pada huruf awal.

4. **Wave Divider (Batas Bawah Hero Section):**
   - Bentuk: Curve cembung mulus (SVG Wave path).
   - Aksesori Ganda: Garis aksen biru di bagian atas curve dan garis kuning di bagian bawah curve.

---

## 5. Implementasi CSS Utility & Helper Classes

### 5.1 CSS Custom Utilities for 3D Text & Effects

```css
/* 3D Main Title Effect */
.text-3d-primary {
  font-family: 'Fredoka', 'Plus Jakarta Sans', sans-serif;
  color: #0F52BA;
  -webkit-text-stroke: 3px #FFFFFF;
  text-shadow: 
    3px 3px 0px #0A2540,
    6px 6px 0px #0A2540,
    8px 8px 12px rgba(10, 37, 64, 0.4);
}

/* 3D Gold Accent Text Effect */
.text-3d-gold {
  font-family: 'Fredoka', 'Plus Jakarta Sans', sans-serif;
  color: #FFC700;
  -webkit-text-stroke: 2px #0A2540;
  text-shadow: 
    2px 2px 0px #0A2540,
    4px 4px 0px #0A2540;
}

/* Active Nav Pill */
.nav-pill-active {
  background-color: #FFFFFF;
  color: #0F52BA;
  border-radius: 9999px;
  padding: 6px 20px;
  font-weight: 700;
  box-shadow: 0 4px 12px rgba(15, 82, 186, 0.15);
}

/* Doodle Pattern Background Overlay */
.bg-doodle-pattern {
  background-color: #2B7FFF;
  background-image: url('/assets/doodle-pattern.svg');
  background-repeat: repeat;
  background-size: 300px;
}
```

### 5.2 Config Tailwind Extension (`tailwind.config.js`)

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        cokro: {
          blue: '#0F52BA',
          navy: '#0A2540',
          sky: '#3B82F6',
          header: '#2B7FFF',
          gold: '#FFC700',
          tint: '#EBF4FF',
        }
      },
      fontFamily: {
        display: ['Fredoka', 'Plus Jakarta Sans', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      },
      borderRadius: {
        'pill': '9999px',
        'card': '24px',
      },
      boxShadow: {
        '3d-blue': '4px 6px 0px #0A2540',
        'pill': '0px 4px 12px rgba(15, 82, 186, 0.15)',
      }
    }
  }
}
```

---

## 6. Panduan Layout & Responsivitas (Layout & Grid System)

### 6.1 Breakpoints Standard

| Device Size | Width | Target Layout Adjustment |
| :--- | :--- | :--- |
| **Mobile (sm)** | `< 640px` | Navigation berpindah ke Hamburger Menu / Drawer, Ukuran 3D Title disesuaikan ke `40px`, padding samping `16px`. |
| **Tablet (md)** | `640px - 1024px` | Logo & Nav tersusun rapi, 3D Title `56px`, tagline `24px`. |
| **Desktop (lg/xl)** | `> 1024px` | Header penuh dengan Social Icons lengkap, 3D Title `72px`, Cityscape vector penuh dengan background depth. |

### 6.2 Spacing & Padding Standard
- **Header Height:** `72px` (Desktop) / `64px` (Mobile).
- **Hero Vertical Padding:** Top `48px`, Bottom `120px` (memberikan ruang untuk SVG Wave curve).
- **Content Max-Width:** `1280px` (Centered container).

---

## 7. Aset & Media Guidelines

1. **Logo Formats:** SVG / PNG High Resolution transparan.
2. **Cityscape Illustration:** Layered Vector (SVG) dipisah menjadi Background Sky, Midground Buildings, dan Foreground Clouds untuk mendukung mikro-animasi parallax saat scroll.
3. **Icons:** Lucide Icons / Heroicons dengan `stroke-width: 2px` atau kustom SVG icon untuk media sosial.

---

## 8. Panduan Mikro-Animasi & Interaksi

- **Nav Hover Effect:** Transition `all 0.2s ease-in-out` dengan scaling ringan `scale(1.05)`.
- **Title Entrance Animation:** Fade-in-up dengan efek bounce lembut (`cubic-bezier(0.34, 1.56, 0.64, 1)`).
- **Cityscape Parallax:** Midground gedung bergerak lebih lambat dibanding foreground awan saat user melakukan scroll (`transform: translateY()`).

---

> **Catatan Tim Developer:**  
> Dokumen `DesignSystem.md` ini wajib menjadi acuan tunggal (Single Source of Truth) untuk pengembangan komponen antarmuka website PKKMB FV UNY 2026 di seluruh halaman (Timeline, Panduan, Ormawa, UKM, FAQ).
