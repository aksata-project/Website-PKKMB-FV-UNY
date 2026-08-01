// src/data/tataTertib.ts
// Structured 100% complete text from TATA TERTIB PESERTA PKKMB KM FV UNY 2026.pdf

export interface DresscodeItem {
  category: string;
  male: string;
  female: string;
}

export interface RuleItem {
  id: number;
  title: string;
  details?: string[];
}

export interface PenaltyViolationItem {
  no: string;
  category: string;
  description: string;
  points: number;
}

export interface PenaltyTierItem {
  range: string;
  sanctions: string[];
}

export interface SpecialSanctionItem {
  no: number;
  violation: string;
  sanction: string;
}

export interface Signatory {
  role: string;
  name: string;
  nim: string;
}

export interface ApprovalSheet {
  campus: string;
  location: string;
  date: string;
  time: string;
  signatories: Signatory[];
}

export const TATA_TERTIB_TITLE = "TATA TERTIB PESERTA PKKMB KELUARGA MAHASISWA FAKULTAS VOKASI UNIVERSITAS NEGERI YOGYAKARTA TAHUN 2026";

export const GENERAL_RULES: RuleItem[] = [
  {
    id: 1,
    title: "Peserta PKKMB KM FV UNY 2026 datang maksimal pada pukul 07.30 WIB untuk TMTP dan Kepemanduan, 06.30 WIB untuk hari H PKKMB KM FV UNY.",
  },
  {
    id: 2,
    title: "Mengikuti seluruh rangkaian kegiatan PKKMB KM FV UNY 2026 yang terdiri dari TMTP, Kepemanduan, hari H PKKMB KM FV UNY tahun 2026, dan Open House Ormawa.",
  },
  {
    id: 3,
    title: "Peserta PKKMB KM FV UNY 2026 dilarang keluar area FV UNY selama rangkaian PKKMB KM FV UNY 2026 berlangsung tanpa izin pemandu dan persetujuan Koordinator Fakultas PKKMB KM FV UNY 2026.",
  },
  {
    id: 4,
    title: "Memenuhi semua jenis penugasan PKKMB KM FV UNY 2026.",
  },
  {
    id: 5,
    title: "Menggunakan dresscode dan ketentuan Peserta PKKMB KM FV UNY 2026 sebagai berikut:",
  },
];

export const DRESSCODE_TABLE: DresscodeItem[] = [
  {
    category: "TMTP",
    male: "Batik berlengan panjang, tidak ketat, lengan tidak dilipat, dan tidak dimasukkan.",
    female: "Batik berlengan panjang, tidak ketat, lengan tidak dilipat, dan tidak dimasukkan.",
  },
  {
    category: "Kepemanduan s.d. Hari H PKKMB",
    male: "Kemeja putih polos berlengan panjang, tidak ketat, tidak transparan, lengan dapat dilipat sampai siku, dan dimasukkan. (Pada bagian ujung lengan kemeja terdapat manset dan kancing).",
    female: "Kemeja putih polos berlengan panjang, tidak ketat, tidak transparan, lengan dapat dilipat sampai siku, dan dimasukkan. (Pada bagian ujung lengan kemeja terdapat manset dan kancing).",
  },
  {
    category: "Bawahan",
    male: "Celana kain hitam polos panjang non jeans, tidak ketat, tidak pensil, dan dapat dilipat sampai lutut.",
    female: "Rok hitam panjang model A-line (non jeans, non belahan, non transparan, non plisket dan tidak ketat). Mengenakan legging (panjang sampai mata kaki dan dimasukkan ke dalam kaos kaki).",
  },
  {
    category: "Kaos Kaki",
    male: "Kaos kaki putih polos diatas mata kaki, tidak berlogo dan tidak mengatasnamakan instansi manapun.",
    female: "Kaos kaki putih polos diatas mata kaki, tidak berlogo dan tidak mengatasnamakan instansi manapun.",
  },
  {
    category: "Sepatu",
    male: "Sepatu dominan berwarna hitam dan tali berwarna hitam.",
    female: "Sepatu dominan berwarna hitam dan tali berwarna hitam.",
  },
  {
    category: "Dasi",
    male: "Dasi hitam polos dengan ujung dasi berbentuk segitiga menyentuh ikat pinggang.",
    female: "Dasi hitam polos dengan ujung dasi berbentuk datar menyentuh ikat pinggang.",
  },
  {
    category: "Ikat Pinggang",
    male: "Ikat pinggang polos berwarna hitam, berbahan kulit, dengan kepala gesper berbentuk kotak berwarna hitam, tanpa logo, tanpa tulisan atau lambang instansi apapun.",
    female: "Ikat pinggang polos berwarna hitam, berbahan kulit, dengan kepala gesper berbentuk kotak berwarna hitam, tanpa logo, tanpa tulisan atau lambang instansi apapun.",
  },
  {
    category: "Rambut & Jilbab",
    male: "Rambut rapi dan tidak panjang model 321* ukuran centimeter (warna alami, tidak disemir dan tidak dibatik) serta tidak memakai wig. (*rincian model rambut: atas 3 cm, samping 2 cm, bawah 1 cm).",
    female: "Berjilbab: Jilbab kain segi empat hitam polos, menutup dada, bukan rawis, non bordir, tidak menerawang, dan tidak boleh dirangkap (Standar ketebalan bahan wolfis).\n\nTidak Berjilbab: Rambut dicepol menggunakan hairnet warna hitam. Untuk peserta berambut pendek dan tidak dapat diikat ke belakang, rambut dijepit ke samping dengan rapi menggunakan jepit lidi hitam polos. Rambut warna alami, tidak disemir.",
  },
  {
    category: "Alis",
    male: "Alis alami, tidak dibingkai, digambar, dan dibatik.",
    female: "Alis alami, tidak dibingkai, digambar, dan dibatik.",
  },
  {
    category: "Kuku",
    male: "Tidak berkuku panjang dan berwarna alami (tidak berkutek dan nail art).",
    female: "Tidak berkuku panjang dan berwarna alami (tidak berkutek dan nail art).",
  },
  {
    category: "Atribut & Perlengkapan",
    male: "Wajib membawa, mengenakan Jas Almamater UNY dan Co-Card, serta atribut pendukung sesuai arahan pemandu.",
    female: "Wajib membawa, mengenakan Jas Almamater UNY dan Co-Card, serta atribut pendukung sesuai arahan pemandu.",
  },
];

export const PROHIBITIONS: string[] = [
  "Membawa atau mengonsumsi semua jenis rokok, minuman beralkohol, serta mengonsumsi narkoba dan sejenisnya.",
  "Memakai kutek, henna atau kuku palsu.",
  "Bertato dan bertindik.",
  "Membawa senjata tajam dan senjata api.",
  "Meninggalkan acara tanpa seizin pemandu dan Koordinator Fakultas PKKMB KM FV UNY 2026.",
  "Mengoperasikan alat elektronik saat acara PKKMB KM FV UNY 2026 berlangsung.",
  "Makan makanan ringan maupun berat kecuali pada saat ishoma atau waktu yang ditentukan.",
  "Tidur selama kegiatan berlangsung.",
  "Memakai make-up. Pengecualian untuk sunscreen dan lip balm tanpa warna, serta acne patch bening.",
  "Mengucapkan atau bertindak sesuatu yang menghina dan mengandung unsur SARA serta pelecehan seksual baik verbal maupun non-verbal.",
  "Merusak sarana, prasarana kampus dan kelengkapan PKKMB KM FV UNY 2026 serta membuang sampah sembarangan di area kampus. Ditambahkan sanksi khusus.",
];

export const FINAL_GENERAL_POINTERS: string[] = [
  "Berkelakuan baik terhadap seluruh komponen PKKMB KM FV UNY 2026, dan lingkungan, serta menjaga nama baik almamater.",
  "Bagi peserta PKKMB KM FV UNY 2026 yang tidak memenuhi tata tertib, akan dikenakan sanksi yang bersifat mendidik.",
  "Mematuhi tata tertib dan sanksi yang ditetapkan.",
  "Segala bentuk pelanggaran di luar tata tertib akan diselesaikan berdasarkan keputusan bersama.",
];

export const VIOLATION_POINTS: PenaltyViolationItem[] = [
  // 1. Keterlambatan
  { no: "1.a", category: "Keterlambatan", description: "Keterlambatan mengikuti kegiatan PKKMB hari H: 1-5 menit", points: 5 },
  { no: "1.b", category: "Keterlambatan", description: "Keterlambatan mengikuti kegiatan PKKMB hari H: 5-10 menit", points: 10 },
  { no: "1.c", category: "Keterlambatan", description: "Keterlambatan mengikuti kegiatan PKKMB hari H: 10-20 menit", points: 15 },
  { no: "1.d", category: "Keterlambatan", description: "Keterlambatan mengikuti kegiatan PKKMB hari H: >20 menit", points: 50 },
  { no: "1.e", category: "Keterlambatan", description: "Tidak mengikuti pengecekan atribut", points: 80 },

  // 2. Rangkaian Kegiatan
  { no: "2.a", category: "Rangkaian Kegiatan", description: "Tidak mengikuti rangkaian kegiatan: TMTP", points: 30 },
  { no: "2.b", category: "Rangkaian Kegiatan", description: "Tidak mengikuti rangkaian kegiatan: Kepemanduan", points: 30 },
  { no: "2.c", category: "Rangkaian Kegiatan", description: "Tidak mengikuti rangkaian kegiatan: Hari H PKKMB KM FV UNY 2026", points: 100 },

  // 3. Area Kegiatan
  { no: "3", category: "Area Kegiatan", description: "Keluar area FV UNY selama rangkaian PKKMB berlangsung tanpa izin pemandu dan persetujuan Koordinator Fakultas", points: 80 },

  // 4. Pelanggaran Atribut (Laki-laki)
  { no: "4.a.1", category: "Atribut (Laki-laki)", description: "TMTP: Tidak memakai batik berlengan panjang, tidak ketat, lengan tidak dilipat, dan tidak dimasukkan", points: 20 },
  { no: "4.a.2", category: "Atribut (Laki-laki)", description: "Kepemanduan s.d. Hari H: Tidak memakai kemeja putih polos berlengan panjang, tidak ketat, tidak transparan, lengan dapat dilipat sampai siku, dan dimasukkan (manset & kancing)", points: 20 },
  { no: "4.a.3", category: "Atribut (Laki-laki)", description: "Tidak mengenakan celana kain hitam polos panjang, berbahan jeans, ketat atau pensil, dan tidak dapat ditarik sampai lutut", points: 20 },
  { no: "4.a.4", category: "Atribut (Laki-laki)", description: "Tidak mengenakan kaos kaki putih polos di atas mata kaki dan terdapat logo instansi", points: 5 },
  { no: "4.a.5", category: "Atribut (Laki-laki)", description: "Tidak mengenakan sepatu tertutup dominan berwarna hitam dan jika bertali tidak berwarna hitam", points: 10 },
  { no: "4.a.6", category: "Atribut (Laki-laki)", description: "Tidak mengenakan dasi hitam polos dengan ujung dasi berbentuk segitiga dan tidak menyentuh ikat pinggang", points: 10 },
  { no: "4.a.7", category: "Atribut (Laki-laki)", description: "Tidak mengenakan ikat pinggang polos berwarna hitam, berbahan kulit, dengan kepala gesper berbentuk kotak berwarna hitam (terdapat logo/tulisan)", points: 10 },
  { no: "4.a.8", category: "Atribut (Laki-laki)", description: "Potongan rambut tidak rapi dan tidak sesuai ketentuan (maksimal diatas alis dan telinga)", points: 30 },
  { no: "4.a.9", category: "Atribut (Laki-laki)", description: "Berkuku panjang", points: 5 },
  { no: "4.a.10", category: "Atribut (Laki-laki)", description: "Tidak membawa, mengenakan Jas Almamater UNY dan Co-Card, serta atribut pendukung sesuai arahan pemandu", points: 20 },

  // 4. Pelanggaran Atribut (Perempuan)
  { no: "4.b.1", category: "Atribut (Perempuan)", description: "TMTP: Tidak memakai batik berlengan panjang, tidak ketat, lengan tidak dilipat, dan tidak dimasukkan", points: 20 },
  { no: "4.b.2", category: "Atribut (Perempuan)", description: "Kepemanduan s.d. Hari H: Tidak memakai kemeja putih polos berlengan panjang, tidak ketat, tidak transparan, lengan dapat dilipat sampai siku, dan dimasukkan (manset & kancing)", points: 20 },
  { no: "4.b.3", category: "Atribut (Perempuan)", description: "Tidak mengenakan rok hitam panjang A-line sesuai ketentuan (non jeans, non belahan, non transparan, non plisket dan tidak ketat)", points: 20 },
  { no: "4.b.4", category: "Atribut (Perempuan)", description: "Tidak mengenakan legging panjang sampai mata kaki dan tidak dimasukkan ke dalam kaos kaki", points: 5 },
  { no: "4.b.5", category: "Atribut (Perempuan)", description: "Tidak mengenakan kaos kaki putih polos di atas mata kaki dan terdapat logo instansi", points: 5 },
  { no: "4.b.6", category: "Atribut (Perempuan)", description: "Tidak mengenakan sepatu tertutup dominan berwarna hitam dan jika bertali tidak berwarna hitam", points: 10 },
  { no: "4.b.7", category: "Atribut (Perempuan)", description: "Tidak mengenakan dasi segitiga hitam polos dengan ujung dasi datar dan menyentuh ikat pinggang", points: 10 },
  { no: "4.b.8", category: "Atribut (Perempuan)", description: "Tidak mengenakan ikat pinggang polos berwarna hitam, berbahan kulit, dengan kepala gesper berbentuk kotak berwarna hitam tanpa logo/tulisan", points: 10 },
  { no: "4.b.9", category: "Atribut (Perempuan)", description: "Jilbab tidak memenuhi ketentuan (segiempat hitam polos, menutup dada, bukan rawis, non bordir, tidak menerawang, wolfis, tidak dirangkap)", points: 30 },
  { no: "4.b.10", category: "Atribut (Perempuan)", description: "Tidak berjilbab tidak memenuhi ketentuan (rambut dicepol hairnet hitam / pendek dijepit lidi hitam polos)", points: 30 },
  { no: "4.b.11", category: "Atribut (Perempuan)", description: "Rambut tidak berwarna alami atau disemir", points: 30 },
  { no: "4.b.12", category: "Atribut (Perempuan)", description: "Berkuku panjang dan warna tidak alami (memakai kutek dan nail art)", points: 5 },
  { no: "4.b.13", category: "Atribut (Perempuan)", description: "Tidak membawa dan mengenakan Jas Almamater UNY, Co-Card, dan atribut pendukung sesuai arahan pemandu", points: 20 },

  // 5. Pelanggaran Selama Kegiatan
  { no: "5.1", category: "Ketertiban Kegiatan", description: "Membawa atau mengonsumsi semua jenis rokok, minuman beralkohol, serta mengonsumsi narkoba dan sejenisnya", points: 120 },
  { no: "5.2", category: "Ketertiban Kegiatan", description: "Mengenakan perhiasan atau aksesoris yang berlebihan (Pengecualian: jam tangan/smartwatch atau gelang keagamaan)", points: 10 },
  { no: "5.3", category: "Ketertiban Kegiatan", description: "Memakai kutek, henna atau kuku palsu", points: 35 },
  { no: "5.4", category: "Ketertiban Kegiatan", description: "Bertato dan bertindik", points: 115 },
  { no: "5.5", category: "Ketertiban Kegiatan", description: "Membawa senjata tajam dan senjata api", points: 120 },
  { no: "5.6", category: "Ketertiban Kegiatan", description: "Meninggalkan acara tanpa seizin pemandu dan Koordinator Fakultas PKKMB KM FV UNY 2026", points: 80 },
  { no: "5.7", category: "Ketertiban Kegiatan", description: "Mengoperasikan alat elektronik saat acara PKKMB KM FV UNY 2026 berlangsung", points: 50 },
  { no: "5.8", category: "Ketertiban Kegiatan", description: "Makan makanan ringan maupun berat kecuali pada saat ishoma atau waktu yang ditentukan", points: 50 },
  { no: "5.9", category: "Ketertiban Kegiatan", description: "Tidur selama kegiatan berlangsung", points: 80 },
  { no: "5.10", category: "Ketertiban Kegiatan", description: "Memakai make-up (Pengecualian: sunscreen, lip balm tanpa warna, acne patch bening)", points: 70 },
  { no: "5.11", category: "Ketertiban Kegiatan", description: "Tidak berkelakuan baik terhadap seluruh komponen PKKMB KM FV UNY 2026", points: 115 },
  { no: "5.12", category: "Ketertiban Kegiatan", description: "Merusak sarana, prasarana kampus dan kelengkapan PKKMB KM FV UNY 2026 serta membuang sampah sembarangan di area kampus", points: 115 },
  { no: "5.13", category: "Ketertiban Kegiatan", description: "Mengucapkan atau bertindak sesuatu yang menghina dan mengandung unsur SARA serta pelecehan seksual baik verbal maupun non-verbal", points: 125 },
  { no: "5.14", category: "Ketertiban Kegiatan", description: "Tidak mematuhi tata tertib dan sanksi yang telah ditetapkan", points: 125 },
];

export const PENALTY_TIERS: PenaltyTierItem[] = [
  {
    range: "5 – 10 Poin",
    sanctions: [
      "Meminta maaf secara langsung di hadapan seluruh mahasiswa baru yang lain dengan menyebutkan pelanggaran yang dilakukan.",
    ],
  },
  {
    range: "15 – 30 Poin",
    sanctions: [
      "Meminta maaf secara langsung di hadapan seluruh mahasiswa baru yang lain dengan menyebutkan pelanggaran yang dilakukan.",
      "Membuat resume materi \"Pengenalan jajaran dekan\". Ditulis tangan minimal 1 halaman penuh folio bergaris, resume diselesaikan langsung pada hari H PKKMB KM FV UNY dan dikumpulkan pada pemandu paling lambat 30 menit setelah acara selesai.",
    ],
  },
  {
    range: "35 – 50 Poin",
    sanctions: [
      "Meminta maaf secara langsung di hadapan seluruh mahasiswa baru yang lain dengan menyebutkan pelanggaran yang dilakukan.",
      "Membuat resume materi \"Pengenalan jajaran dekan\". Ditulis tangan minimal 1 halaman penuh folio bergaris, resume diselesaikan langsung pada hari H PKKMB KM FV UNY dan dikumpulkan pada pemandu paling lambat 30 menit setelah acara selesai.",
      "Membuat resume materi \"explore the future\". Ditulis tangan minimal 1 halaman penuh folio bergaris, resume diselesaikan langsung pada hari H PKKMB KM FV UNY dan dikumpulkan pada pemandu paling lambat 30 menit setelah acara selesai.",
    ],
  },
  {
    range: "55 – 75 Poin",
    sanctions: [
      "Meminta maaf secara langsung di hadapan seluruh mahasiswa baru yang lain dengan menyebutkan pelanggaran yang dilakukan.",
      "Membuat resume materi \"Pengenalan jajaran dekan\". Ditulis tangan minimal 1 halaman penuh folio bergaris, resume diselesaikan langsung pada hari H PKKMB KM FV UNY dan dikumpulkan pada pemandu paling lambat 30 menit setelah acara selesai.",
      "Membuat resume materi \"shape your character, chase your dream\". Ditulis tangan minimal 1 halaman penuh folio bergaris, resume diselesaikan langsung pada hari H PKKMB KM FV UNY dan dikumpulkan pada pemandu paling lambat 30 menit setelah acara selesai.",
      "Membuat resume materi \"critical thinking\". Ditulis tangan minimal 1 halaman penuh folio bergaris, resume diselesaikan langsung pada hari H PKKMB KM FV UNY dan dikumpulkan pada pemandu paling lambat 30 menit setelah acara selesai.",
    ],
  },
  {
    range: "80 – 100 Poin",
    sanctions: [
      "Meminta maaf secara langsung di hadapan seluruh mahasiswa baru yang lain dengan menyebutkan pelanggaran yang dilakukan.",
      "Membuat resume materi \"Pengenalan jajaran dekan\". Ditulis tangan minimal 1 halaman penuh folio bergaris, resume diselesaikan langsung pada hari H PKKMB KM FV UNY dan dikumpulkan pada pemandu paling lambat 30 menit setelah acara selesai.",
      "Membuat resume materi \"shape your character, chase your dream\". Ditulis tangan minimal 1 halaman penuh folio bergaris, resume diselesaikan langsung pada hari H PKKMB KM FV UNY dan dikumpulkan pada pemandu paling lambat 30 menit setelah acara selesai.",
      "Membuat resume materi \"critical thinking\". Ditulis tangan minimal 1 halaman penuh folio bergaris, resume diselesaikan langsung pada hari H PKKMB KM FV UNY dan dikumpulkan pada pemandu paling lambat 30 menit setelah acara selesai.",
      "Membuat resume materi \"Penjelasan terkait karakter dan mindset mahasiswa\". Ditulis tangan minimal 1 halaman penuh folio bergaris, resume diselesaikan langsung pada hari H PKKMB KM FV UNY dan dikumpulkan pada pemandu paling lambat 30 menit setelah acara selesai.",
    ],
  },
  {
    range: "> 100 Poin",
    sanctions: [
      "Penangguhan sertifikat peserta PKKMB KM FV UNY 2026, termasuk bagi mahasiswa yang tidak bisa mengikuti acara PKKMB KM FV UNY 2026 dengan alasan yang tidak kuat.",
    ],
  },
];

export const SPECIAL_SANCTIONS: SpecialSanctionItem[] = [
  {
    no: 1,
    violation: "Berkuku panjang",
    sanction: "Memotong kuku pada saat itu juga.",
  },
  {
    no: 2,
    violation: "Membawa dan/atau mengonsumsi rokok dan sejenisnya",
    sanction: "Barang yang dilarang akan dilakukan penyitaan dan akan dikembalikan pada akhir rangkaian PKKMB KM FV UNY 2026.",
  },
  {
    no: 3,
    violation: "Membawa senjata tajam atau senjata api",
    sanction: "Barang yang dilarang akan dilakukan penyitaan, dengan pengetahuan orangtua; dan pihak khusus untuk senjata api.",
  },
  {
    no: 4,
    violation: "Memakai make-up pada saat acara berlangsung",
    sanction: "Menghapus make-up pada saat itu juga.",
  },
  {
    no: 5,
    violation: "Tidak memotong rambut sesuai dengan ketentuan",
    sanction: "Memotong rambut sesuai dengan ketentuan pada saat pengecekan menggunakan alat potong yang telah disediakan oleh panitia.",
  },
  {
    no: 6,
    violation: "Bertato dan bertindik",
    sanction: "Dilaporkan ke pihak birokrasi Fakultas Vokasi UNY.",
  },
  {
    no: 7,
    violation: "Mengonsumsi narkoba dan minuman beralkohol",
    sanction: "Dilaporkan ke pihak berwajib.",
  },
  {
    no: 8,
    violation: "Tidak menjaga nama baik almamater UNY",
    sanction: "Dilaporkan ke pihak birokrasi Fakultas Vokasi UNY.",
  },
  {
    no: 9,
    violation: "Terlambat mengerjakan tugas kepemanduan",
    sanction: "Mengurangi poin gugus/Leaderboard gugus yang bersangkutan.",
  },
  {
    no: 10,
    violation: "Terlambat dan tidak mengerjakan tugas kepemanduan",
    sanction: "Mengurangi poin gugus/Leaderboard gugus yang bersangkutan.",
  },
];

export const APPROVAL_SHEETS: ApprovalSheet[] = [
  {
    campus: "Kampus Wates (FV UNY Kulon Progo)",
    location: "Auditorium FV UNY KP",
    date: "Sabtu, 25 Juli 2026",
    time: "09.07 WIB",
    signatories: [
      { role: "Steering Committee", name: "Nabila Ayu Sya'bani", nim: "24091320002" },
      { role: "Koordinator Penegak Kedisiplinan", name: "Bagus Arya Sanjaya", nim: "24090720017" },
      { role: "Perwakilan Mahasiswa Baru", name: "Umar Sidiq", nim: "26090820009" },
      { role: "Perwakilan Mahasiswa Baru", name: "Sprintve Rizqi Indrianti", nim: "26091120012" },
      { role: "Mahkamah", name: "M. Abdurrahman Al Ghazi", nim: "23091320095" },
      { role: "Ketua Tim Advokasi", name: "Wili Wibowo Putro", nim: "24090120034" },
      { role: "Koordinator Fakultas", name: "Fulca Liya Furaidah", nim: "25090220054" },
    ],
  },
  {
    campus: "Kampus Gunungkidul (FV UNY GK)",
    location: "Kampus FV UNY GK",
    date: "Sabtu, 25 Juli 2026",
    time: "09.10 WIB",
    signatories: [
      { role: "Koordinator Steering Committee", name: "Dini Eka Rakhmayani", nim: "23091420007" },
      { role: "Wakil Koordinator Penegak Kedisiplinan", name: "Viony Virgyna", nim: "24091320093" },
      { role: "Perwakilan Mahasiswa Baru", name: "Dimas Arfian Nandika", nim: "26091220015" },
      { role: "Perwakilan Mahasiswa Baru", name: "Fiorentina Ramadani", nim: "26091420003" },
      { role: "Mahkamah", name: "Muhammad Alif Fadhillah", nim: "24090520039" },
      { role: "An. Ketua Tim Advokasi", name: "Suryani Putri Mardin", nim: "25090220134" },
      { role: "An. Koordinator Fakultas", name: "Qonita Hasna Nadiya", nim: "25090220039" },
    ],
  },
];
