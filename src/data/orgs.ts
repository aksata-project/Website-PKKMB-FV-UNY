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
   * Nama file contoh: card-bem.webp
   * Letakkan di: /Assets/photos/ormawa/ atau /Assets/photos/ukm/
   */
  cardImage?: string;
  /**
   * Gambar hero/header halaman detail.
   * Ukuran: 1920 x 480 px (landscape banner)
   * Nama file contoh: header-bem.webp
   * Letakkan di: /Assets/photos/ormawa/ atau /Assets/photos/ukm/
   */
  headerImage?: string;
  /**
   * Galeri foto (min 3, tampil di halaman detail).
   * Ukuran tiap foto: 800 x 600 px (4:3)
   * Nama file contoh: gallery-bem-1.webp, gallery-bem-2.webp
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
    // cardImage & headerImage belum tersedia — menunggu pengumpulan dari BEM
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
      instagram: 'https://www.instagram.com/bemvokasiuny/',
    },
  },
  {
    id: 'dpm',
    type: 'ormawa',
    name: 'Dewan Perwakilan Mahasiswa',
    shortName: 'DPM FV UNY',
    logo: '/Assets/logos/ormawa/logo-dpm.svg',
    // cardImage & headerImage belum tersedia — menunggu pengumpulan dari DPM
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
      instagram: 'https://www.instagram.com/dpmkmfvuny/',
    },
  },
  {
    id: 'himanagari',
    type: 'ormawa',
    name: 'Himpunan Mahasiswa Bisnis & Keuangan',
    shortName: 'HIMANAGARI',
    logo: '/Assets/logos/ormawa/logo-himanagari.svg',
    // cardImage & headerImage belum tersedia — menunggu pengumpulan dari HIMANAGARI
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
      instagram: 'https://www.instagram.com/himanagari/',
    },
  },
  {
    id: 'himatabona',
    type: 'ormawa',
    name: 'Himpunan Mahasiswa Tata Boga & Busana',
    shortName: 'HIMATABONA',
    logo: '/Assets/logos/ormawa/logo-himatabona.svg',
    cardImage: '/Assets/photos/ormawa/card-himatabona.webp',
    headerImage: '/Assets/photos/ormawa/header-himatabona.webp',
    gallery: [
      '/Assets/photos/ormawa/gallery-himatabona-1.webp',
      '/Assets/photos/ormawa/gallery-himatabona-2.webp',
      '/Assets/photos/ormawa/gallery-himatabona-3.webp',
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
      instagram: 'https://www.instagram.com/himatabona/',
    },
  },
  {
    id: 'hmdbk',
    type: 'ormawa',
    name: 'Himpunan Mahasiswa Departemen Bisnis & Keuangan',
    shortName: 'HMDBK',
    logo: '/Assets/logos/ormawa/logo-hmdbk.svg',
    // cardImage & headerImage belum tersedia — menunggu pengumpulan dari HMDBK
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
      instagram: 'https://www.instagram.com/himadbkfvuny/',
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
    // cardImage & headerImage belum tersedia — menunggu pengumpulan dari HMDTM
    badge: 'Himpunan',
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
      instagram: 'https://www.instagram.com/hmdtm.fvuny/',
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
    // cardImage & headerImage belum tersedia — menunggu pengumpulan dari HMDTS
    badge: 'Himpunan',
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
      instagram: 'https://www.instagram.com/hmdts_fvuny/',
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
    cardImage: '/Assets/photos/ormawa/card-hmok.webp',
    headerImage: '/Assets/photos/ormawa/header-hmok.webp',
    gallery: [
      '/Assets/photos/ormawa/gallery-hmok-1.webp',
      '/Assets/photos/ormawa/gallery-hmok-2.webp',
      '/Assets/photos/ormawa/gallery-hmok-3.webp',
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
      instagram: 'https://www.instagram.com/himaorkesfvuny/',
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
    // cardImage & headerImage belum tersedia — menunggu pengumpulan dari HMVE
    badge: 'Himpunan',
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
      instagram: 'https://www.instagram.com/hmve.uny/',
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
    // cardImage & headerImage belum tersedia — menunggu pengumpulan dari UKM Baiturrahman
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
      instagram: 'https://www.instagram.com/ukmf_baiturrahman/',
    },
  },
  {
    id: 'ukm-kesenian',
    type: 'ukm',
    name: 'UKM Kesenian',
    shortName: 'Seni & Budaya FV UNY',
    logo: '/Assets/logos/ukm/logo-ukm-kesenian.svg',
    badge: 'Seni & Budaya',
    badgeColor: 'sky',
    cardImage: '/Assets/photos/ukm/card-ukm-kesenian.webp',
    headerImage: '/Assets/photos/ukm/header-ukm-kesenian.webp',
    gallery: [
      '/Assets/photos/ukm/gallery-ukm-kesenian-1.webp',
      '/Assets/photos/ukm/gallery-ukm-kesenian-2.webp',
      '/Assets/photos/ukm/gallery-ukm-kesenian-3.webp',
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
      instagram: 'https://www.instagram.com/ukmkesenianfv.uny/',
    },
  },
  {
    id: 'ukm-reaction',
    type: 'ukm',
    name: 'UKMF Penelitian Reaction',
    shortName: 'Penelitian & Penalaran FV UNY',
    logo: '/Assets/logos/ukm/logo-ukm-reaction.svg',
    badge: 'Penelitian',
    badgeColor: 'blue',
    cardImage: '/Assets/photos/ukm/card-ukm-reaction.webp',
    headerImage: '/Assets/photos/ukm/header-ukm-reaction.webp',
    gallery: [
      '/Assets/photos/ukm/gallery-ukm-reaction-1.webp',
      '/Assets/photos/ukm/gallery-ukm-reaction-2.webp',
      '/Assets/photos/ukm/gallery-ukm-reaction-3.webp',
    ],
    description:
      'UKMF Penelitian Reaction FV UNY adalah unit kegiatan mahasiswa yang berfokus pada pengembangan penelitian, penalaran, karya ilmiah, dan inovasi mahasiswa Fakultas Vokasi Universitas Negeri Yogyakarta. Organisasi ini mewadahi mahasiswa yang memiliki minat dan bakat di bidang riset melalui pembinaan, pelatihan, pendampingan, diskusi ilmiah, serta pengembangan keterampilan akademik agar lahir karya yang bermanfaat bagi masyarakat.',
    vision:
      'Menjadi pusat integratif pengembangan dan pengelolaan riset serta penalaran ilmiah mahasiswa Fakultas Vokasi UNY yang inklusif, berkelanjutan dan berdaya saing.',
    missions: [
      'Menjadi wadah bagi mahasiswa Fakultas Vokasi UNY untuk meraih prestasi dan meningkatkan kapasitas ilmiah melalui riset, penalaran, dan literasi.',
      'Mengembangkan kemampuan riset, penalaran, dan kreativitas mahasiswa melalui kegiatan ilmiah, kompetisi, dan proyek berbasis penalaran.',
      'Mengelola dan menyebarluaskan informasi serta literasi ilmiah melalui media kreatif dan platform digital.',
      'Membangun jejaring dan kolaborasi dengan pihak internal maupun eksternal untuk mendukung pengembangan kreativitas dan inovasi.',
    ],
    structure: {
      pembina: 'Dr. Apt. Lailla Affianti Fauzi, S.Farm., M.Biomed.',
      ketua: 'Igma Lisna Padillah',
      wakilKetua: 'Fitriana Novitasari',
      divisions: [
        { name: 'Pengembangan Sumber Daya Anggota', head: 'Alya Hardyanti' },
        { name: 'Media Kreatif', head: 'Hana Puspita Dewi' },
        { name: 'Riset dan Prestasi', head: 'Asni Imelia Putri' },
        { name: 'Informasi dan Jaringan', head: 'Dimas Pratama' },
        { name: 'PKM Center', head: 'Amalia Husna Safira' },
      ],
    },
    programs: [
      { name: 'Student Development Program (SDP) Penelitian', description: 'Program pembinaan bagi mahasiswa baru dalam bidang penelitian, penalaran, dan kepenulisan ilmiah melalui pelatihan intensif untuk menghasilkan esai ilmiah dan poster.' },
      { name: 'LITERSA', description: 'Kompetisi ilmiah tingkat provinsi yang mewadahi esai, infografis, dan Business Model Canvas untuk mengasah kreativitas, inovasi, dan kemampuan berpikir kritis.' },
      { name: 'Research to Action', description: 'Program yang mengintegrasikan penelitian, pengabdian kepada masyarakat, dan publikasi ilmiah sebagai satu rangkaian pembelajaran dan diseminasi hasil riset.' },
    ],
    achievements: [
      'Karya peserta SDP dihimpun menjadi buku fisik dan e-book yang diajukan sebagai Hak Kekayaan Intelektual (HAKI).',
    ],
    contact: {
      instagram: 'https://instagram.com/ukmfreaction',
    },
  },
  {
    id: 'ukm-kewirausahaan',
    type: 'ukm',
    name: 'UKMF Kewirausahaan',
    shortName: 'Segera Hadir',
    logo: '/Assets/logos/ukm/logo-ukm-kwu.svg',
    badge: 'Wirausaha',
    badgeColor: 'gold',
    cardImage: '/Assets/photos/ukm/card-ukm-kewirausahaan.webp',
    headerImage: '/Assets/photos/ukm/header-ukm-kewirausahaan.webp',
    description:
      'Profil UKMF Kewirausahaan masih dalam tahap penyusunan. Placeholder ini disiapkan agar daftar UKM tetap tampil lengkap dan siap diisi dengan data resmi pada tahap berikutnya.',
    vision:
      'Menjadi wadah pengembangan jiwa wirausaha mahasiswa yang kreatif, mandiri, dan berdaya saing.',
    missions: [
      'Mendorong minat mahasiswa dalam bidang kewirausahaan.',
      'Menyediakan ruang belajar dan praktik usaha yang aplikatif.',
      'Membuka kolaborasi dengan pelaku usaha dan komunitas terkait.',
    ],
    structure: {
      pembina: '[Nama Dosen Pembina]',
      ketua: '[Nama Ketua UKMF Kewirausahaan]',
      wakilKetua: '[Nama Wakil Ketua]',
      divisions: [
        { name: 'Pengembangan Usaha', head: '[Nama Kepala Divisi]' },
        { name: 'Media & Promosi', head: '[Nama Kepala Divisi]' },
        { name: 'Kemitraan', head: '[Nama Kepala Divisi]' },
      ],
    },
    programs: [
      { name: 'Workshop Bisnis Dasar', description: 'Kegiatan pengenalan dasar-dasar kewirausahaan dan perencanaan bisnis.' },
      { name: 'Inkubasi Ide Usaha', description: 'Pendampingan awal untuk mahasiswa yang ingin mengembangkan ide bisnis.' },
      { name: 'Bazar Mahasiswa', description: 'Wadah promosi dan penjualan produk karya mahasiswa.' },
    ],
    contact: {
      instagram: 'https://www.instagram.com/kwuvokasiuny/',
    },
  },
  {
    id: 'ukm-ksr',
    type: 'ukm',
    name: 'UKMF KSR',
    shortName: 'Segera Hadir',
    logo: '/Assets/logos/ukm/logo-ukm-ksr.svg',
    badge: 'Kemanusiaan',
    badgeColor: 'sky',
    // cardImage & headerImage belum tersedia — menunggu pengumpulan dari UKMF KSR
    description:
      'Profil UKMF KSR masih berupa placeholder. Entitas ini disiapkan sebagai ruang awal untuk pengisian profil resmi kegiatan kemanusiaan dan kepalangmerahan mahasiswa.',
    vision:
      'Menjadi wadah mahasiswa yang peduli, tanggap, dan aktif dalam kegiatan kemanusiaan.',
    missions: [
      'Menumbuhkan kepedulian sosial dan semangat relawan mahasiswa.',
      'Mengembangkan kesiapsiagaan dasar dan keterampilan pertolongan.',
      'Mendorong aksi kemanusiaan yang berkelanjutan di lingkungan kampus.',
    ],
    structure: {
      pembina: '[Nama Dosen Pembina]',
      ketua: '[Nama Ketua UKMF KSR]',
      wakilKetua: '[Nama Wakil Ketua]',
      divisions: [
        { name: 'Relawan & Aksi Sosial', head: '[Nama Kepala Divisi]' },
        { name: 'Pendidikan & Pelatihan', head: '[Nama Kepala Divisi]' },
        { name: 'Logistik & Respons Cepat', head: '[Nama Kepala Divisi]' },
      ],
    },
    programs: [
      { name: 'Pelatihan Dasar Relawan', description: 'Penguatan kemampuan dasar bagi anggota baru sebelum terjun ke lapangan.' },
      { name: 'Aksi Sosial Kampus', description: 'Kegiatan bakti sosial dan penggalangan bantuan di lingkungan kampus dan sekitarnya.' },
      { name: 'Donor Darah', description: 'Program kemanusiaan berkala yang mendukung kebutuhan darah di masyarakat.' },
    ],
    contact: {
      instagram: 'https://www.instagram.com/ksrpmifvuny/',
    },
  },
  {
    id: 'ukm-olahraga',
    type: 'ukm',
    name: 'UKMF Olahraga',
    shortName: 'Segera Hadir',
    logo: '/Assets/logos/ukm/logo-ukm-olahraga.svg',
    badge: 'Olahraga',
    badgeColor: 'blue',
    cardImage: '/Assets/photos/ukm/card-ukm-olahraga.webp',
    headerImage: '/Assets/photos/ukm/header-ukm-olahraga.webp',
    gallery: [
      '/Assets/photos/ukm/gallery-ukm-olahraga-1.webp',
      '/Assets/photos/ukm/gallery-ukm-olahraga-2.webp',
      '/Assets/photos/ukm/gallery-ukm-olahraga-3.webp',
    ],
    description:
      'Profil UKMF Olahraga masih dalam tahap placeholder. Entri ini disiapkan agar kategori UKM tetap lengkap sebelum data resmi dimasukkan.',
    vision:
      'Menjadi wadah pengembangan minat, bakat, dan prestasi mahasiswa di bidang olahraga.',
    missions: [
      'Memfasilitasi mahasiswa untuk berlatih dan berkompetisi.',
      'Membangun budaya hidup sehat dan sportivitas.',
      'Mendorong prestasi olahraga di tingkat kampus hingga regional.',
    ],
    structure: {
      pembina: '[Nama Dosen Pembina]',
      ketua: '[Nama Ketua UKMF Olahraga]',
      wakilKetua: '[Nama Wakil Ketua]',
      divisions: [
        { name: 'Cabang Olahraga', head: '[Nama Kepala Divisi]' },
        { name: 'Kebugaran & Latihan', head: '[Nama Kepala Divisi]' },
        { name: 'Kompetisi & Prestasi', head: '[Nama Kepala Divisi]' },
      ],
    },
    programs: [
      { name: 'Latihan Rutin', description: 'Sesi latihan berkala untuk pengembangan fisik dan teknik dasar.' },
      { name: 'Turnamen Internal', description: 'Agenda kompetisi internal untuk menjaring potensi dan mempererat kebersamaan.' },
      { name: 'Sport Day', description: 'Kegiatan olahraga bersama untuk membangun semangat hidup aktif.' },
    ],
    contact: {
      instagram: 'https://www.instagram.com/ukmfv_olahraga/',
    },
  },
];

export function getOrgById(id: string): OrgData | undefined {
  return orgs.find(o => o.id === id);
}

export function getOrgsByType(type: 'ormawa' | 'ukm'): OrgData[] {
  return orgs.filter(o => o.type === type);
}
