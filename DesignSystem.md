# Design System PKKMB FV UNY 2026 — "Cokro Aksata"

> **Versi:** 1.1.0  
> **Author:** Senior Web Developer Team PKKMB FV UNY 2026  
> **Status:** Approved / Active Specification  
> **Tujuan:** Menjadi acuan desain utama untuk seluruh menu, halaman, dan komponen pada website PKKMB FV UNY 2026 (Hero, Timeline, Ormawa, UKM, FAQ, dll).

---

## 1. Visi & Filosofi Desain

Design System **PKKMB FV UNY 2026** dirancang untuk merepresentasikan semangat mahasiswa baru Fakultas Vokasi Universitas Negeri Yogyakarta dengan tema **"Take the leap, chase your dream"**.

### Core Vibe & Aesthetic Principles:
- **Vibrant & Futuristic Cityscape:** Menggambarkan dunia vokasi yang dinamis, modern, dan berorientasi pada masa depan industri & perkotaan.
- **Playful 3D Pop & Youthful Energy:** Penggunaan tipografi 3D tebal, aksen warna emas/kuning cerah, serta efek doodle interaktif memberikan kesan ramah, energik, dan inspiratif.
- **Clean Structure & Accessibility:** Kontras tinggi antara teks pendukung dan latar belakang memastikan keterbacaan (readability) yang optimal di berbagai ukuran perangkat.

---

## 2. Palet Warna (Color Palette & Tokens)

Palet warna menggabungkan biru vokasi khas UNY dengan kuning emas aksata dan sentuhan terang untuk kontras. Seluruh elemen website wajib menggunakan set warna ini.

### 2.1 Brand & Core Colors

| Role | Color Name | Hex Code | HSL | Penggunaan Utama |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Brand** | Royal Blue | `#0F52BA` | `hsl(217, 85%, 40%)` | Judul utama 3D, tombol utama, teks nav aktif, heading |
| **Secondary Brand** | Sky Blue | `#3B82F6` | `hsl(217, 91%, 60%)` | Header bar, gradien hero, batas aksen, hover state |
| **Accent Gold** | Gold Yellow | `#FFC700` | `hsl(47, 100%, 50%)` | Angka "2026", tagline, badge, highlight text, button CTA sekunder |
| **3D Shadow Depth** | Navy Extrusion | `#0A2540` | `hsl(210, 73%, 15%)` | Bayangan 3D pada teks judul & angka, teks gelap utama |
| **Background Light**| Cloud Sky Tint | `#EBF4FF` | `hsl(213, 100%, 96%)` | Latar belakang body utama, section, & kartu light |
| **Header Blue** | Pattern Blue | `#2B7FFF` | `hsl(216, 100%, 58%)` | Navigation bar background, footer background |
| **Neutral Dark** | Deep Charcoal | `#1E293B` | `hsl(215, 25%, 17%)` | Subtitle, paragraph text, form labels |
| **Neutral Light** | Pure White | `#FFFFFF` | `hsl(0, 0%, 100%)` | Outline teks 3D, background kartu, tombol outline |

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
  --shadow-card-3d: 0px 6px 0px #0A2540;
  --shadow-pill: 0px 4px 12px rgba(15, 82, 186, 0.15);
  --border-white-stroke: 3px solid #FFFFFF;
  --border-dark-stroke: 2px solid #0A2540;

  /* Border Radius */
  --radius-pill: 9999px;
  --radius-card-lg: 24px;
  --radius-card-md: 16px;
  --radius-button: 12px;
}
```

---

## 3. Tipografi (Typography Hierarchy)

Sistem tipografi menggunakan 2-3 jenis font untuk mencapai keseimbangan antara *visual impact* dan *readability* di seluruh halaman web.

### 3.1 Font Families
1. **Display Font (3D Titles & Headings):** `Fredoka` atau `Plus Jakarta Sans ExtraBold`. (Digunakan untuk judul section seperti "Timeline", "Ormawa", dll).
2. **Tagline Font (Playful Subhead):** `Sniglet` atau `Fredoka` (Bulat, ramah, playful).
3. **Body & UI Font:** `Plus Jakarta Sans` atau `Inter` (Sangat terbaca untuk paragraf dan detail informasi).

### 3.2 Typography Scale

| Hierarchy | Font Family | Size (Desktop) | Size (Mobile) | Weight | Line Height | Penggunaan Utama |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Title 3D (H1)** | Display Font | `72px` (`4.5rem`) | `40px` (`2.5rem`) | 800 (Bold) | `1.1` | Judul Halaman Utama |
| **Section Title (H2)**| Display Font | `48px` (`3rem`) | `32px` (`2rem`) | 700 (Bold) | `1.2` | Judul Section (Timeline, Ormawa) |
| **Card Title (H3)** | Display Font/Body| `24px` (`1.5rem`) | `20px` (`1.25rem`)| 700 (Bold) | `1.3` | Nama Ormawa, Judul Berita |
| **Subtitle/Lead** | Body Sans | `20px` (`1.25rem`)| `16px` (`1rem`) | 600 (SemiBold)| `1.4` | Teks pengantar section |
| **Nav Links/Buttons**| Body Sans | `16px` (`1rem`) | `14px` (`0.875rem`)| 700 (Bold) | `1.0` | Navigasi, Teks Button CTA |
| **Body Text** | Body Sans | `16px` (`1rem`) | `14px` (`0.875rem`)| 400 (Regular) | `1.6` | Deskripsi, Paragraf |
| **Caption/Badge** | Body Sans | `14px` (`0.875rem`)| `12px` (`0.75rem`)| 500 (Medium) | `1.4` | Kategori UKM, Tanggal Timeline |

---

## 4. Spesifikasi Komponen (Component Specs)

Semua komponen harus selaras dengan prinsip *Playful 3D Pop*.

### 4.1 Buttons (Tombol)
- **Primary 3D Button:** 
  - Background Biru Utama (`#0F52BA`) atau Kuning Emas (`#FFC700`).
  - Border putih 2-3px, radius `12px` atau `9999px` (Pill).
  - Box-shadow 3D solid ke bawah (`4px 4px 0px #0A2540`).
  - **Hover:** Transform `translateY(2px)`, ubah shadow menjadi `2px 2px 0px #0A2540` untuk efek ditekan.
- **Ghost/Outline Button:** 
  - Transparan dengan border Biru Tua (`#0A2540`) `2px`, teks Biru Tua.

### 4.2 Cards (Kartu Profil Ormawa/UKM/Berita)
- **Background:** Putih (`#FFFFFF`) dengan border tebal `2px` ke Navy (`#0A2540`).
- **Shadow:** Solid 3D shadow (`6px 6px 0px #0A2540`) untuk kesan pop-up dari halaman.
- **Border Radius:** `24px` (Card LG) atau `16px` (Card MD).
- **Interaksi Hover:** Card bergerak naik tipis (`translateY(-4px)`), shadow bertambah besar (`8px 8px 0px #0A2540`).
- **Badge dalam Card:** Label kategori (Misal: "Fakultas", "Olahraga") menggunakan bentuk pill (kapsul) berwarna kuning emas (`#FFC700`) atau sky blue tint dengan font tebal ukuran kecil (`12-14px`).

### 4.3 Formulir (Inputs & Search)
- **Input Field:** Background Putih bersih, border Navy `2px`, `border-radius: 12px`, teks `Deep Charcoal`.
- **Focus State:** Outline Biru Utama (`#0F52BA`) atau box-shadow glow.

### 4.4 Header Navigation Bar
- **Latar Belakang:** Header Blue (`#2B7FFF`) dengan efek overlay Doodle transparan (15-20%).
- **State Aktif Nav Item:** Background Putih (`#FFFFFF`), Teks Biru Utama (`#0F52BA`), bentuk Pill.

### 4.5 Footer
- **Latar Belakang:** Deep Navy (`#0A2540`) atau Header Blue (`#2B7FFF`).
- **Gaya Visual:** Menggunakan garis batas (wave divider) dari section atasnya untuk transisi yang mulus. Teks informasi putih atau biru sangat terang (`#EBF4FF`).

---

## 5. Panduan Layout & Grid System (Layouting)

### 5.1 Breakpoints Standard (Mobile-First)

| Device Size | Width | Target Layout Adjustment |
| :--- | :--- | :--- |
| **Mobile (sm)** | `< 640px` | 1 Kolom card, spacing 16px. Typography di-scale down (H2 ke 32px). |
| **Tablet (md)** | `640px - 1024px` | 2 Kolom grid untuk daftar Card (UKM/Ormawa). Margin section `32px`. |
| **Desktop (lg/xl)** | `> 1024px` | 3-4 Kolom grid untuk Card. Max-width container `1280px` centered. |

### 5.2 Spacing & Padding Standard
- **Section Margin:** Jarak antar block utama di halaman adalah `80px` - `120px` (Desktop) dan `48px` - `64px` (Mobile) untuk memberi nafas pada desain.
- **Card Padding:** Internal card padding umumnya `24px`.
- **Wave Dividers:** Gunakan SVG Wave/Curve divider antar section dengan warna solid/berbeda untuk memperkuat transisi antar *content block* yang *playful*.

---

## 6. Config Tailwind Extension (`tailwind.config.js`)

Untuk mempermudah penggunaan di halaman lain, konfigurasi Tailwind diperluas:

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
        'card-md': '16px',
        'card-lg': '24px',
      },
      boxShadow: {
        '3d-solid': '4px 4px 0px #0A2540',
        '3d-solid-lg': '6px 6px 0px #0A2540',
        '3d-solid-hover': '8px 8px 0px #0A2540',
        '3d-solid-pressed': '2px 2px 0px #0A2540',
        'pill': '0px 4px 12px rgba(15, 82, 186, 0.15)',
      }
    }
  }
}
```

---

## 7. Pola Desain Halaman Spesifik

Untuk memastikan konsistensi di halaman selain beranda:

- **Halaman Timeline:** Gunakan struktur vertikal dengan node (titik) emas `3D`. Garis penghubung (connector) tebal (min. `4px` Navy atau Biru). Setiap milestone bisa berupa Card dengan shadow 3D.
- **Halaman Profil Ormawa / UKM:**
  - Header halaman berukuran lebih pendek dibanding Hero utama, namun tetap dengan background biru dan teks 3D.
  - Gunakan Grid layout (Card LG) dengan logo Ormawa yang *oversized* (meluap/offset sedikit dari card-nya untuk efek pop-up).
- **Halaman FAQ / Akordion:** 
  - Gunakan style blok solid. Saat akordion ditutup: Background putih, border navy `2px`.
  - Ikon panah (chevron) yang tebal (`stroke-width: 3`).

---

## 8. Panduan Mikro-Animasi & Interaksi

Semua interaksi di dalam website harus terasa *tactile* (dapat disentuh) dan responsif.
- **Button & Card Press (Tactile Feedback):** Setiap tombol atau kartu yang diklik harus memberikan sensasi "ditekan" dengan mengurangi nilai offset `box-shadow` 3D (misal dari `6px 6px` menjadi `2px 2px`) dan menggeser elemen ke bawah menggunakan `transform: translateY()`.
- **Hover Reveal:** Pada list Ormawa atau fitur, hover dapat memunculkan dekorasi doodle kecil absolut di pojok elemen yang sebelumnya disembunyikan.
- **Scroll Reveal (Fade-in-up):** Saat pengguna men-scroll ke section baru (misal Timeline), elemen akan muncul satu per satu (staggered) dari bawah dengan efek `bounce` yang ringan (`cubic-bezier(0.34, 1.56, 0.64, 1)`).

---

> **Catatan Tim Developer:**  
> Dokumen `DesignSystem.md` versi 1.1.0 ini diperbarui agar dapat digunakan tidak hanya untuk Hero & Navigation, namun mencakup semua komponen visual di seluruh web PKKMB FV UNY 2026. Semua elemen dari Button, Card, hingga Grid pada halaman turunan **wajib** mengikuti panduan Shadow 3D, Roundness, dan warna-warni yang telah ditentukan di atas.
