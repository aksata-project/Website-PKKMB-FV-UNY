// src/data/orgs.ts — Centralized data for all Ormawa & UKM

export interface OrgData {
  id: string;
  type: 'ormawa' | 'ukm';
  name: string;
  shortName: string;
  logo: string;
  /**
   * Gambar card (tampil di listing ormawa/ukm).
   * Ukuran: 800 x 480 px (landscape 5:3)
   * Nama file contoh: card-bem.jpg
   * Letakkan di: /Assets/photos/ormawa/ atau /Assets/photos/ukm/
   */
  cardImage?: string;
  /**
   * Gambar hero/header halaman detail.
   * Ukuran: 1920 x 480 px (landscape banner)
   * Nama file contoh: header-bem.jpg
   * Letakkan di: /Assets/photos/ormawa/ atau /Assets/photos/ukm/
   */
  headerImage?: string;
  /**
   * Galeri foto (min 3, tampil di halaman detail).
   * Ukuran tiap foto: 800 x 600 px (4:3)
   * Nama file contoh: gallery-bem-1.jpg, gallery-bem-2.jpg
   * Letakkan di: /Assets/photos/ormawa/ atau /Assets/photos/ukm/
   */
  gallery?: string[];
  badge: string;
  badgeColor: 'gold' | 'blue' | 'sky';
  description: string;
  vision: string;
  missions: string[];
  structure: {
    pembina: string;
    ketua: string;
    wakilKetua: string;
    divisions: { name: string; head: string }[];
  };
  programs: { name: string; description: string }[];
  achievements?: string[];
  contact: {
    instagram?: string;
    tiktok?: string;
    whatsapp?: string;
  };
}

export const orgs: OrgData[] = [
  // ─── ORMAWA ───────────────────────────────────────────────────────────────
  {
    id: 'bem',
    type: 'ormawa',
    name: 'Badan Eksekutif Mahasiswa',
    shortName: 'BEM FV UNY',
    logo: '/Assets/logos/ormawa/logo-bem.svg',
    cardImage: '/Assets/photos/ormawa/card-bem.jpg',
    headerImage: '/Assets/photos/ormawa/header-bem.jpg',
    gallery: [
      '/Assets/photos/ormawa/gallery-bem-1.jpg',
      '/Assets/photos/ormawa/gallery-bem-2.jpg',
      '/Assets/photos/ormawa/gallery-bem-3.jpg',
    ],
    badge: 'Eksekutif',
    badgeColor: 'gold',
    description:
      'BEM Fakultas Vokasi adalah organisasi mahasiswa eksekutif tertinggi di lingkungan Fakultas Vokasi UNY. Berperan sebagai wadah aspirasi mahasiswa dan pelaksana program kerja yang berdampak nyata bagi sivitas akademika. BEM FV hadir untuk memastikan suara mahasiswa didengar dan diwujudkan melalui berbagai program inovatif dan kolaboratif.',
    vision:
      'Terwujudnya BEM FV UNY yang aktif, inovatif, dan berdampak dalam menyejahterakan mahasiswa Fakultas Vokasi UNY.',
    missions: [
      'Menjadi jembatan aspirasi antara mahasiswa dengan pihak birokrasi kampus.',
      'Mengembangkan potensi mahasiswa melalui program kerja yang relevan dan berkelanjutan.',
      'Membangun sinergi yang kuat antar himpunan dan lembaga mahasiswa di FV UNY.',
      'Mewujudkan lingkungan kampus yang inklusif, produktif, dan berprestasi.',
    ],
    structure: {
      pembina: 'Dr. [Nama Pembina] — Wakil Dekan III FV UNY',
      ketua: '[Nama Ketua Umum]',
      wakilKetua: '[Nama Wakil Ketua]',
      divisions: [
        { name: 'Kesekretariatan', head: '[Nama Kepala Divisi]' },
        { name: 'Keuangan', head: '[Nama Kepala Divisi]' },
        { name: 'Pendidikan & Pengembangan SDM', head: '[Nama Kepala Divisi]' },
        { name: 'Sosial & Pengabdian Masyarakat', head: '[Nama Kepala Divisi]' },
        { name: 'Hubungan Masyarakat & Media', head: '[Nama Kepala Divisi]' },
        { name: 'Kewirausahaan', head: '[Nama Kepala Divisi]' },
      ],
    },
    programs: [
      { name: 'PKKMB FV UNY', description: 'Pengenalan kehidupan kampus bagi mahasiswa baru Fakultas Vokasi UNY setiap tahun ajaran baru.' },
      { name: 'Vokasipreneur', description: 'Program inkubasi wirausaha untuk mahasiswa FV yang ingin mengembangkan ide bisnis berbasis vokasi.' },
      { name: 'Vokasi Mengabdi', description: 'Kegiatan pengabdian masyarakat yang melibatkan seluruh mahasiswa FV UNY di lingkungan sekitar kampus.' },
      { name: 'Forum Diskusi Mahasiswa', description: 'Wadah dialog antara mahasiswa dengan dekanat terkait isu-isu akademik dan kesejahteraan mahasiswa.' },
    ],
    achievements: [
      'Penyelenggara PKKMB terbaik tingkat fakultas se-UNY 2024.',
      'Juara I Lomba Debat Mahasiswa antar BEM Perguruan Tinggi Yogyakarta 2024.',
    ],
    contact: {
      instagram: 'https://instagram.com/bemfvuny',
      tiktok: 'https://tiktok.com/@bemfvuny',
      whatsapp: 'https://wa.me/628123456789',
    },
  },
  {
    id: 'dpm',
    type: 'ormawa',
    name: 'Dewan Perwakilan Mahasiswa',
    shortName: 'DPM FV UNY',
    logo: '/Assets/logos/ormawa/logo-dpm.svg',
    cardImage: '/Assets/photos/ormawa/card-dpm.jpg',
    headerImage: '/Assets/photos/ormawa/header-dpm.jpg',
    gallery: [
      '/Assets/photos/ormawa/gallery-dpm-1.jpg',
      '/Assets/photos/ormawa/gallery-dpm-2.jpg',
      '/Assets/photos/ormawa/gallery-dpm-3.jpg',
    ],
    badge: 'Legislatif',
    badgeColor: 'blue',
    description:
      'DPM adalah lembaga legislatif tertinggi di Fakultas Vokasi UNY. Bertugas mengawasi kinerja BEM, menyerap aspirasi mahasiswa, dan memastikan kebijakan kampus berpihak pada kesejahteraan mahasiswa. DPM FV hadir sebagai penjaga demokrasi di tingkat fakultas.',
    vision:
      'Menjadi lembaga legislatif mahasiswa yang transparan, aspiratif, dan berwibawa di lingkungan Fakultas Vokasi UNY.',
    missions: [
      'Menjalankan fungsi legislasi dengan menyusun peraturan yang adil bagi seluruh mahasiswa.',
      'Mengawasi kinerja BEM FV secara objektif dan bertanggung jawab.',
      'Menyerap dan menyalurkan aspirasi mahasiswa melalui mekanisme yang demokratis.',
      'Menjaga transparansi dan akuntabilitas dalam tata kelola organisasi mahasiswa FV.',
    ],
    structure: {
      pembina: 'Dr. [Nama Pembina] — Wakil Dekan III FV UNY',
      ketua: '[Nama Ketua DPM]',
      wakilKetua: '[Nama Wakil Ketua DPM]',
      divisions: [
        { name: 'Komisi I — Legislasi', head: '[Nama Ketua Komisi]' },
        { name: 'Komisi II — Pengawasan', head: '[Nama Ketua Komisi]' },
        { name: 'Komisi III — Advokasi & Aspirasi', head: '[Nama Ketua Komisi]' },
      ],
    },
    programs: [
      { name: 'Rapat Dengar Pendapat (RDP)', description: 'Forum resmi antara DPM dan BEM untuk evaluasi program kerja secara periodik.' },
      { name: 'Kotak Aspirasi Digital', description: 'Platform digital untuk menyerap masukan dan keluhan mahasiswa secara anonim dan terstruktur.' },
      { name: 'DPM Goes to Campus', description: 'Roadshow sosialisasi ke tiap program studi untuk mendekatkan DPM dengan mahasiswa.' },
    ],
    contact: {
      instagram: 'https://instagram.com/dpmfvuny',
      tiktok: 'https://tiktok.com/@dpmfvuny',
      whatsapp: 'https://wa.me/628123456790',
    },
  },
  {
    id: 'himanagari',
    type: 'ormawa',
    name: 'Himpunan Mahasiswa Bisnis & Keuangan',
    shortName: 'HIMANAGARI',
    logo: '/Assets/logos/ormawa/logo-himanagari.svg',
    cardImage: '/Assets/photos/ormawa/card-himanagari.jpg',
    headerImage: '/Assets/photos/ormawa/header-himanagari.jpg',
    gallery: [
      '/Assets/photos/ormawa/gallery-himanagari-1.jpg',
      '/Assets/photos/ormawa/gallery-himanagari-2.jpg',
      '/Assets/photos/ormawa/gallery-himanagari-3.jpg',
    ],
    badge: 'Himpunan',
    badgeColor: 'sky',
    description:
      'HIMANAGARI adalah himpunan mahasiswa Departemen Bisnis dan Keuangan yang bergerak dalam pengembangan kompetensi akademik dan profesional di bidang akuntansi, manajemen pemasaran, dan administrasi perkantoran. Aktif mengadakan pelatihan, seminar, dan kompetisi bisnis.',
    vision:
      'Menjadi himpunan mahasiswa yang unggul dalam mengembangkan kompetensi bisnis dan keuangan yang berwawasan global.',
    missions: [
      'Meningkatkan kompetensi akademik dan profesional anggota di bidang bisnis dan keuangan.',
      'Menjadi wadah pengembangan kreativitas dan inovasi bisnis mahasiswa.',
      'Membangun jaringan (networking) dengan dunia industri dan alumni.',
      'Menciptakan lulusan yang siap bersaing di pasar kerja nasional maupun internasional.',
    ],
    structure: {
      pembina: '[Nama Dosen Pembina]',
      ketua: '[Nama Ketua HIMANAGARI]',
      wakilKetua: '[Nama Wakil Ketua]',
      divisions: [
        { name: 'Akademik & Profesi', head: '[Nama Kepala Divisi]' },
        { name: 'Kewirausahaan', head: '[Nama Kepala Divisi]' },
        { name: 'Sosial & Pengabdian', head: '[Nama Kepala Divisi]' },
        { name: 'Media & Kreatif', head: '[Nama Kepala Divisi]' },
      ],
    },
    programs: [
      { name: 'Business Competition (BISCOM)', description: 'Kompetisi bisnis antar mahasiswa perguruan tinggi se-DIY & Jateng.' },
      { name: 'Workshop Keuangan & Investasi', description: 'Pelatihan literasi keuangan, pasar modal, dan investasi untuk mahasiswa.' },
      { name: 'Magang Profesi', description: 'Program penghubung mahasiswa dengan perusahaan mitra untuk pengalaman magang terstruktur.' },
    ],
    contact: {
      instagram: 'https://instagram.com/himanagari_uny',
      tiktok: 'https://tiktok.com/@himanagari_uny',
      whatsapp: 'https://wa.me/628123456791',
    },
  },
  {
    id: 'himatabona',
    type: 'ormawa',
    name: 'Himpunan Mahasiswa Tata Boga & Busana',
    shortName: 'HIMATABONA',
    logo: '/Assets/logos/ormawa/logo-himatabona.svg',
    cardImage: '/Assets/photos/ormawa/card-himatabona.jpg',
    headerImage: '/Assets/photos/ormawa/header-himatabona.jpg',
    gallery: [
      '/Assets/photos/ormawa/gallery-himatabona-1.jpg',
      '/Assets/photos/ormawa/gallery-himatabona-2.jpg',
      '/Assets/photos/ormawa/gallery-himatabona-3.jpg',
    ],
    badge: 'Himpunan',
    badgeColor: 'sky',
    description:
      'HIMATABONA menaungi prodi Tata Boga, Tata Busana, dan Tata Rias & Kecantikan. Aktif mengadakan berbagai kompetisi, workshop, dan kegiatan kreatif yang mengasah kemampuan kuliner, fashion, dan kecantikan mahasiswa.',
    vision:
      'Menjadi himpunan mahasiswa yang kreatif, inovatif, dan berkarakter dalam bidang boga, busana, dan kecantikan.',
    missions: [
      'Mengembangkan kreativitas dan profesionalisme anggota di bidang boga, busana, dan kecantikan.',
      'Menyelenggarakan kegiatan yang memperluas wawasan dan kompetensi praktis anggota.',
      'Membangun citra positif Departemen Boga Busana melalui karya-karya berkualitas.',
    ],
    structure: {
      pembina: '[Nama Dosen Pembina]',
      ketua: '[Nama Ketua HIMATABONA]',
      wakilKetua: '[Nama Wakil Ketua]',
      divisions: [
        { name: 'Kuliner & Food Art', head: '[Nama Kepala Divisi]' },
        { name: 'Fashion & Textile', head: '[Nama Kepala Divisi]' },
        { name: 'Beauty & Skincare', head: '[Nama Kepala Divisi]' },
        { name: 'Event & Kreatif', head: '[Nama Kepala Divisi]' },
      ],
    },
    programs: [
      { name: 'Vokasi Food Festival', description: 'Festival kuliner tahunan yang menampilkan kreasi masakan terbaik mahasiswa dan alumni.' },
      { name: 'Fashion Show FV', description: 'Peragaan busana karya mahasiswa Tata Busana dalam rangka Dies Natalis UNY.' },
      { name: 'Beauty Workshop', description: 'Workshop kecantikan dan makeup profesional untuk mahasiswa dan umum.' },
    ],
    contact: {
      instagram: 'https://instagram.com/himatabona_uny',
      tiktok: 'https://tiktok.com/@himatabona_uny',
      whatsapp: 'https://wa.me/628123456792',
    },
  },
  {
    id: 'hmdbk',
    type: 'ormawa',
    name: 'Himpunan Mahasiswa Departemen Bisnis & Keuangan',
    shortName: 'HMDBK',
    logo: '/Assets/logos/ormawa/logo-hmdbk.svg',
    cardImage: '/Assets/photos/ormawa/card-hmdbk.jpg',
    headerImage: '/Assets/photos/ormawa/header-hmdbk.jpg',
    gallery: [
      '/Assets/photos/ormawa/gallery-hmdbk-1.jpg',
      '/Assets/photos/ormawa/gallery-hmdbk-2.jpg',
      '/Assets/photos/ormawa/gallery-hmdbk-3.jpg',
    ],
    badge: 'Himpunan',
    badgeColor: 'sky',
    description:
      'HMDBK fokus pada pengembangan kompetensi mahasiswa di bidang bisnis dan keuangan melalui program pelatihan, studi kasus industri, dan kegiatan kewirausahaan yang berorientasi pada praktik nyata di dunia industri.',
    vision:
      'Menghasilkan mahasiswa bisnis dan keuangan yang kompeten, berkarakter, dan siap terjun ke dunia kerja.',
    missions: [
      'Meningkatkan kualitas akademik dan soft skill anggota secara menyeluruh.',
      'Memfasilitasi pengembangan jiwa wirausaha yang inovatif dan bertanggung jawab.',
      'Membangun relasi yang luas dengan alumni dan stakeholder industri.',
    ],
    structure: {
      pembina: '[Nama Dosen Pembina]',
      ketua: '[Nama Ketua HMDBK]',
      wakilKetua: '[Nama Wakil Ketua]',
      divisions: [
        { name: 'Akademik', head: '[Nama Kepala Divisi]' },
        { name: 'Wirausaha', head: '[Nama Kepala Divisi]' },
        { name: 'Humas & Media', head: '[Nama Kepala Divisi]' },
      ],
    },
    programs: [
      { name: 'Tax Goes to Campus', description: 'Sosialisasi perpajakan bekerja sama dengan Kantor Pelayanan Pajak setempat.' },
      { name: 'Business Mentoring', description: 'Program mentoring bisnis dengan praktisi dan alumni sukses di bidang bisnis & keuangan.' },
    ],
    contact: {
      instagram: 'https://instagram.com/hmdbk_uny',
      tiktok: 'https://tiktok.com/@hmdbk_uny',
      whatsapp: 'https://wa.me/628123456793',
    },
  },
  {
    id: 'hmdtm',
    type: 'ormawa',
    name: 'Himpunan Mahasiswa Departemen Teknik Mesin',
    shortName: 'HMDTM',
    logo: '/Assets/logos/ormawa/logo-hmdtm.svg',
    badge: 'Himpunan',
    badgeColor: 'sky',
    cardImage: '/Assets/photos/ormawa/card-hmdtm.jpg',
    headerImage: '/Assets/photos/ormawa/header-hmdtm.jpg',
    gallery: [
      '/Assets/photos/ormawa/gallery-hmdtm-1.jpg',
      '/Assets/photos/ormawa/gallery-hmdtm-2.jpg',
      '/Assets/photos/ormawa/gallery-hmdtm-3.jpg',
    ],
    description:
      'HMDTM berkomitmen dalam meningkatkan kompetensi teknis, jiwa inovatif, dan semangat industrialis mahasiswa vokasi di bidang teknik mesin dan otomotif. Aktif dalam kegiatan riset terapan dan kompetisi teknik.',
    vision:
      'Menjadi himpunan teknik mesin yang inovatif, berkarakter industri, dan berdaya saing tinggi.',
    missions: [
      'Meningkatkan kompetensi teknis anggota melalui pelatihan dan praktikum.',
      'Memfasilitasi kegiatan riset dan inovasi di bidang teknik mesin dan otomotif.',
      'Menjalin kerjasama dengan industri otomotif dan manufaktur.',
    ],
    structure: {
      pembina: '[Nama Dosen Pembina]',
      ketua: '[Nama Ketua HMDTM]',
      wakilKetua: '[Nama Wakil Ketua]',
      divisions: [
        { name: 'Riset & Teknologi', head: '[Nama Kepala Divisi]' },
        { name: 'Otomotif', head: '[Nama Kepala Divisi]' },
        { name: 'Sosial & Pengabdian', head: '[Nama Kepala Divisi]' },
        { name: 'Media & Desain', head: '[Nama Kepala Divisi]' },
      ],
    },
    programs: [
      { name: 'Mechanical Engineering Expo', description: 'Pameran hasil riset dan inovasi mahasiswa teknik mesin setiap semester.' },
      { name: 'Otomotif Challenge', description: 'Kompetisi keterampilan otomotif antar mahasiswa vokasi se-DIY.' },
      { name: 'Workshop CNC & Permesinan', description: 'Pelatihan penggunaan mesin CNC dan permesinan modern untuk mahasiswa.' },
    ],
    achievements: [
      'Juara II Kompetisi Desain Mesin Nasional 2024.',
    ],
    contact: {
      instagram: 'https://instagram.com/hmdtm_uny',
      tiktok: 'https://tiktok.com/@hmdtm_uny',
      whatsapp: 'https://wa.me/628123456794',
    },
  },
  {
    id: 'hmdts',
    type: 'ormawa',
    name: 'Himpunan Mahasiswa Departemen Teknik Sipil',
    shortName: 'HMDTS',
    logo: '/Assets/logos/ormawa/logo-hmdts.svg',
    badge: 'Himpunan',
    badgeColor: 'sky',
    cardImage: '/Assets/photos/ormawa/card-hmdts.jpg',
    headerImage: '/Assets/photos/ormawa/header-hmdts.jpg',
    gallery: [
      '/Assets/photos/ormawa/gallery-hmdts-1.jpg',
      '/Assets/photos/ormawa/gallery-hmdts-2.jpg',
      '/Assets/photos/ormawa/gallery-hmdts-3.jpg',
    ],
    description:
      'HMDTS aktif dalam pengembangan kompetensi konstruksi dan infrastruktur melalui proyek nyata, kunjungan industri, dan kompetisi rancang bangun. Berfokus pada pengembangan mahasiswa yang siap menghadapi tantangan industri konstruksi nasional.',
    vision:
      'Menjadi himpunan teknik sipil yang profesional dan berdampak bagi pembangunan infrastruktur Indonesia.',
    missions: [
      'Mengembangkan kompetensi teknis mahasiswa dalam bidang konstruksi dan infrastruktur.',
      'Memfasilitasi kegiatan survei lapangan dan kunjungan proyek konstruksi.',
      'Membangun sinergi dengan dunia industri konstruksi nasional.',
    ],
    structure: {
      pembina: '[Nama Dosen Pembina]',
      ketua: '[Nama Ketua HMDTS]',
      wakilKetua: '[Nama Wakil Ketua]',
      divisions: [
        { name: 'Teknik & Riset', head: '[Nama Kepala Divisi]' },
        { name: 'Kewirausahaan', head: '[Nama Kepala Divisi]' },
        { name: 'Sosial & Lingkungan', head: '[Nama Kepala Divisi]' },
      ],
    },
    programs: [
      { name: 'Civil Engineering Exhibition', description: 'Pameran dan lomba desain konstruksi tingkat mahasiswa se-DIY.' },
      { name: 'Survei Lapangan Terpadu', description: 'Kegiatan survei dan pemetaan lapangan bekerja sama dengan dinas terkait.' },
    ],
    contact: {
      instagram: 'https://instagram.com/hmdts_uny',
      tiktok: 'https://tiktok.com/@hmdts_uny',
      whatsapp: 'https://wa.me/628123456795',
    },
  },
  {
    id: 'hmok',
    type: 'ormawa',
    name: 'Himpunan Mahasiswa Olahraga & Kesehatan',
    shortName: 'HMOK',
    logo: '/Assets/logos/ormawa/logo-hmok.svg',
    badge: 'Himpunan',
    badgeColor: 'sky',
    cardImage: '/Assets/photos/ormawa/card-hmok.jpg',
    headerImage: '/Assets/photos/ormawa/header-hmok.jpg',
    gallery: [
      '/Assets/photos/ormawa/gallery-hmok-1.jpg',
      '/Assets/photos/ormawa/gallery-hmok-2.jpg',
      '/Assets/photos/ormawa/gallery-hmok-3.jpg',
    ],
    description:
      'HMOK mendorong gaya hidup sehat, sportivitas, dan prestasi di bidang olahraga dan ilmu kesehatan vokasi. Aktif dalam kegiatan olahraga, kesehatan komunitas, dan pengabdian masyarakat di bidang kesehatan.',
    vision:
      'Menjadi himpunan yang unggul dalam membangun generasi mahasiswa yang sehat, aktif, dan berprestasi.',
    missions: [
      'Mendorong budaya hidup sehat dan aktif berolahraga di kalangan mahasiswa FV UNY.',
      'Mengembangkan prestasi mahasiswa di bidang olahraga di tingkat regional dan nasional.',
      'Menyelenggarakan kegiatan pengabdian masyarakat di bidang kesehatan dan olahraga.',
    ],
    structure: {
      pembina: '[Nama Dosen Pembina]',
      ketua: '[Nama Ketua HMOK]',
      wakilKetua: '[Nama Wakil Ketua]',
      divisions: [
        { name: 'Olahraga Prestasi', head: '[Nama Kepala Divisi]' },
        { name: 'Kesehatan Masyarakat', head: '[Nama Kepala Divisi]' },
        { name: 'Pengabdian & Sosial', head: '[Nama Kepala Divisi]' },
      ],
    },
    programs: [
      { name: 'Vokasi Sport Festival', description: 'Turnamen olahraga antar mahasiswa FV UNY yang meliputi berbagai cabang olahraga.' },
      { name: 'Health Check Community', description: 'Program pemeriksaan kesehatan gratis untuk masyarakat sekitar kampus.' },
      { name: 'Senam Gembira FV', description: 'Kegiatan olahraga rutin setiap minggu yang terbuka untuk seluruh civitas akademika FV.' },
    ],
    contact: {
      instagram: 'https://instagram.com/hmok_fvuny',
      tiktok: 'https://tiktok.com/@hmok_fvuny',
      whatsapp: 'https://wa.me/628123456796',
    },
  },
  {
    id: 'hmve',
    type: 'ormawa',
    name: 'Himpunan Mahasiswa Vokasi Elektro',
    shortName: 'HMVE',
    logo: '/Assets/logos/ormawa/logo-hmve.svg',
    badge: 'Himpunan',
    badgeColor: 'sky',
    cardImage: '/Assets/photos/ormawa/card-hmve.jpg',
    headerImage: '/Assets/photos/ormawa/header-hmve.jpg',
    gallery: [
      '/Assets/photos/ormawa/gallery-hmve-1.jpg',
      '/Assets/photos/ormawa/gallery-hmve-2.jpg',
      '/Assets/photos/ormawa/gallery-hmve-3.jpg',
    ],
    description:
      'HMVE bergerak dalam pengembangan inovasi teknologi kelistrikan, otomasi, dan elektronika terapan. Aktif dalam kegiatan riset, kompetisi robotik, dan kolaborasi dengan industri elektronika nasional.',
    vision:
      'Menjadi himpunan elektro yang inovatif dan berdampak dalam kemajuan teknologi kelistrikan dan elektronika Indonesia.',
    missions: [
      'Mengembangkan kompetensi teknis anggota di bidang elektro, elektronika, dan otomasi.',
      'Memfasilitasi kegiatan riset dan inovasi teknologi terapan yang bermanfaat.',
      'Menjalin kerjasama dengan industri elektronika dan ketenagalistrikan.',
    ],
    structure: {
      pembina: '[Nama Dosen Pembina]',
      ketua: '[Nama Ketua HMVE]',
      wakilKetua: '[Nama Wakil Ketua]',
      divisions: [
        { name: 'Riset & Inovasi', head: '[Nama Kepala Divisi]' },
        { name: 'Robotika & Otomasi', head: '[Nama Kepala Divisi]' },
        { name: 'Energi Terbarukan', head: '[Nama Kepala Divisi]' },
        { name: 'Media & Dokumentasi', head: '[Nama Kepala Divisi]' },
      ],
    },
    programs: [
      { name: 'Electrical Engineering Competition', description: 'Kompetisi desain dan inovasi kelistrikan antar mahasiswa vokasi se-Indonesia.' },
      { name: 'Workshop IoT & Robotika', description: 'Pelatihan intensif Internet of Things dan pemrograman robot untuk mahasiswa.' },
      { name: 'Solar Panel Community', description: 'Program instalasi panel surya di desa-desa terpencil sebagai bentuk pengabdian masyarakat.' },
    ],
    achievements: [
      'Juara I Kompetisi Robotik Nasional Vokasi 2024.',
      'Best Innovation Award di IoT Summit Indonesia 2024.',
    ],
    contact: {
      instagram: 'https://instagram.com/hmve_uny',
      tiktok: 'https://tiktok.com/@hmve_uny',
      whatsapp: 'https://wa.me/628123456797',
    },
  },

  // ─── UKM ──────────────────────────────────────────────────────────────────
  {
    id: 'ukm-baiturrahman',
    type: 'ukm',
    name: 'UKM Baiturrahman',
    shortName: 'Kerohanian Islam FV UNY',
    logo: '/Assets/logos/ukm/logo-ukm-baiturrahman.svg',
    badge: 'Kerohanian',
    badgeColor: 'gold',
    cardImage: '/Assets/photos/ukm/card-ukm-baiturrahman.jpg',
    headerImage: '/Assets/photos/ukm/header-ukm-baiturrahman.jpg',
    gallery: [
      '/Assets/photos/ukm/gallery-ukm-baiturrahman-1.jpg',
      '/Assets/photos/ukm/gallery-ukm-baiturrahman-2.jpg',
      '/Assets/photos/ukm/gallery-ukm-baiturrahman-3.jpg',
    ],
    description:
      'UKM Kerohanian Islam Baiturrahman adalah wadah pengembangan spiritualitas dan kegiatan keagamaan Islam bagi mahasiswa Fakultas Vokasi UNY. Aktif menyelenggarakan kajian, program sosial, dan kegiatan keislaman yang inspiratif untuk membentuk mahasiswa yang beriman, berilmu, dan berakhlak mulia.',
    vision:
      'Menjadi UKM kerohanian yang mencetak mahasiswa Muslim yang bertakwa, berilmu, dan bermanfaat bagi sesama.',
    missions: [
      'Menyelenggarakan kegiatan keagamaan Islam yang berkualitas dan menginspirasi.',
      'Menjadi wadah pengembangan diri mahasiswa Muslim di bidang spiritual dan sosial.',
      'Mempererat ukhuwah Islamiyah antar mahasiswa Muslim di FV UNY.',
      'Berkontribusi nyata kepada masyarakat melalui program sosial keagamaan.',
    ],
    structure: {
      pembina: '[Nama Dosen Pembina]',
      ketua: '[Nama Ketua UKM Baiturrahman]',
      wakilKetua: '[Nama Wakil Ketua]',
      divisions: [
        { name: 'Kajian Islam & Dakwah', head: '[Nama Kepala Divisi]' },
        { name: 'Sosial & Kemanusiaan', head: '[Nama Kepala Divisi]' },
        { name: 'Tahfidz & Al-Quran', head: '[Nama Kepala Divisi]' },
        { name: 'Media & Kreatif', head: '[Nama Kepala Divisi]' },
      ],
    },
    programs: [
      { name: 'Kajian Rutin Mingguan', description: 'Kajian keislaman setiap minggu dengan tema yang relevan dan mengundang pembicara berkompeten.' },
      { name: 'Pesantren Kilat Mahasiswa', description: 'Program pesantren intensif selama liburan semester untuk pendalaman ilmu agama.' },
      { name: 'Baiturrahman Peduli', description: 'Program sosial kemanusiaan: donasi, santunan anak yatim, dan bantuan bencana alam.' },
      { name: 'Halaqoh Tahfidz', description: 'Program menghafal Al-Quran secara berkelompok dengan bimbingan mentor berpengalaman.' },
    ],
    contact: {
      instagram: 'https://instagram.com/baiturrahman_fvuny',
      tiktok: 'https://tiktok.com/@baiturrahman_fvuny',
      whatsapp: 'https://wa.me/628123456798',
    },
  },
  {
    id: 'ukm-kesenian',
    type: 'ukm',
    name: 'UKM Kesenian',
    shortName: 'Seni & Budaya FV UNY',
    logo: '/Assets/logos/ukm/logo-ukm-keseninan.svg',
    badge: 'Seni & Budaya',
    badgeColor: 'sky',
    cardImage: '/Assets/photos/ukm/card-ukm-kesenian.jpg',
    headerImage: '/Assets/photos/ukm/header-ukm-kesenian.jpg',
    gallery: [
      '/Assets/photos/ukm/gallery-ukm-kesenian-1.jpg',
      '/Assets/photos/ukm/gallery-ukm-kesenian-2.jpg',
      '/Assets/photos/ukm/gallery-ukm-kesenian-3.jpg',
    ],
    description:
      'UKM Kesenian adalah wadah bagi mahasiswa berbakat di bidang seni dan budaya. Meliputi seni tari, musik, teater, dan kesenian tradisional. Aktif tampil di berbagai event kampus, festival seni, dan lomba tingkat regional maupun nasional.',
    vision:
      'Menjadi UKM kesenian terdepan yang melestarikan budaya dan mengembangkan kreativitas seni mahasiswa Fakultas Vokasi UNY.',
    missions: [
      'Melestarikan dan mengembangkan seni dan budaya tradisional Indonesia.',
      'Memfasilitasi mahasiswa berbakat di bidang seni untuk berkarya dan berprestasi.',
      'Menampilkan karya seni mahasiswa di berbagai forum budaya nasional.',
      'Membangun komunitas seni yang inklusif dan apresiatif di lingkungan kampus.',
    ],
    structure: {
      pembina: '[Nama Dosen Pembina]',
      ketua: '[Nama Ketua UKM Kesenian]',
      wakilKetua: '[Nama Wakil Ketua]',
      divisions: [
        { name: 'Tari Tradisional & Kontemporer', head: '[Nama Kepala Divisi]' },
        { name: 'Musik & Vokal', head: '[Nama Kepala Divisi]' },
        { name: 'Teater & Drama', head: '[Nama Kepala Divisi]' },
        { name: 'Seni Rupa & Visual', head: '[Nama Kepala Divisi]' },
      ],
    },
    programs: [
      { name: 'Vokasi Art Festival', description: 'Festival seni tahunan menampilkan seluruh bidang kesenian mahasiswa FV UNY.' },
      { name: 'Pentas Rutin Bulanan', description: 'Penampilan seni reguler di lingkungan kampus sebagai ruang ekspresi mahasiswa.' },
      { name: 'Workshop Seni Intensif', description: 'Pelatihan intensif tari, musik, dan teater yang terbuka untuk seluruh mahasiswa FV.' },
    ],
    achievements: [
      'Juara I Festival Tari Tradisional antar Perguruan Tinggi DIY 2024.',
      'Penampil terbaik di Dies Natalis UNY 2024.',
    ],
    contact: {
      instagram: 'https://instagram.com/ukmkesenian_fvuny',
      tiktok: 'https://tiktok.com/@ukmkesenian_fvuny',
      whatsapp: 'https://wa.me/628123456799',
    },
  },
  {
    id: 'ukm-reaction',
    type: 'ukm',
    name: 'UKM Reaction',
    shortName: 'Olahraga & Prestasi FV UNY',
    logo: '/Assets/logos/ukm/logo-ukm-reaction.svg',
    badge: 'Olahraga',
    badgeColor: 'blue',
    cardImage: '/Assets/photos/ukm/card-ukm-reaction.jpg',
    headerImage: '/Assets/photos/ukm/header-ukm-reaction.jpg',
    gallery: [
      '/Assets/photos/ukm/gallery-ukm-reaction-1.jpg',
      '/Assets/photos/ukm/gallery-ukm-reaction-2.jpg',
      '/Assets/photos/ukm/gallery-ukm-reaction-3.jpg',
    ],
    description:
      'UKM Reaction adalah unit kegiatan mahasiswa yang bergerak di bidang olahraga kompetitif dan pengembangan prestasi. Memfasilitasi mahasiswa yang ingin berprestasi di berbagai cabang olahraga di tingkat regional dan nasional melalui program latihan terstruktur.',
    vision:
      'Menjadi UKM olahraga yang mencetak atlet mahasiswa berprestasi dan berkarakter dari Fakultas Vokasi UNY.',
    missions: [
      'Memfasilitasi pengembangan bakat olahraga mahasiswa secara terstruktur dan profesional.',
      'Menghasilkan atlet-atlet mahasiswa yang berprestasi di tingkat regional dan nasional.',
      'Menumbuhkan semangat sportivitas, kerja keras, dan fair play di kalangan mahasiswa.',
      'Membangun komunitas olahraga yang sehat dan kompetitif di lingkungan FV UNY.',
    ],
    structure: {
      pembina: '[Nama Dosen Pembina]',
      ketua: '[Nama Ketua UKM Reaction]',
      wakilKetua: '[Nama Wakil Ketua]',
      divisions: [
        { name: 'Olahraga Bela Diri', head: '[Nama Kepala Divisi]' },
        { name: 'Olahraga Tim', head: '[Nama Kepala Divisi]' },
        { name: 'Olahraga Aquatik', head: '[Nama Kepala Divisi]' },
        { name: 'Manajemen & Humas', head: '[Nama Kepala Divisi]' },
      ],
    },
    programs: [
      { name: 'Reaction Open Tournament', description: 'Turnamen olahraga antar mahasiswa dan umum yang diadakan setiap semester.' },
      { name: 'Sport Development Camp', description: 'Program pelatihan intensif selama liburan semester untuk atlet potensial.' },
      { name: 'Healthy Campus Movement', description: 'Kampanye gaya hidup aktif dan sehat melalui olahraga di lingkungan kampus.' },
    ],
    achievements: [
      'Juara Umum Olimpiade Mahasiswa UNY 2024.',
      'Medali Emas Pencak Silat POMNAS 2024.',
    ],
    contact: {
      instagram: 'https://instagram.com/ukmreaction_fvuny',
      tiktok: 'https://tiktok.com/@ukmreaction_fvuny',
      whatsapp: 'https://wa.me/628123456800',
    },
  },
];

export function getOrgById(id: string): OrgData | undefined {
  return orgs.find(o => o.id === id);
}

export function getOrgsByType(type: 'ormawa' | 'ukm'): OrgData[] {
  return orgs.filter(o => o.type === type);
}
