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
   * Path foto card thumbnail di grid ormawa.
   * Letakkan di: /src/assets/photos/ormawa/ atau /src/assets/photos/ukm/
   * Format disarankan: WebP (600x400 atau rasio 3:2).
   */
  cardImage?: string;
  /**
   * Path foto hero header detail ormawa.
   * Letakkan di: /src/assets/photos/ormawa/ atau /src/assets/photos/ukm/
   * Format disarankan: WebP (800x450 atau rasio 16:9).
   */
  headerImage?: string;
  /**
   * Array path foto dokumentasi galeri (maksimal 3 diprioritaskan).
   * Letakkan di: /src/assets/photos/ormawa/ atau /src/assets/photos/ukm/
   * Format disarankan: WebP.
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
    youtube?: string;
    linkedin?: string;
    website?: string;
    whatsapp?: string;
    email?: string;
  };
}

export const orgs: OrgData[] = [
  // ─── ORMAWA ───────────────────────────────────────────────────────────────
  {
    id: 'bem',
    type: 'ormawa',
    name: 'Badan Eksekutif Mahasiswa KM FV UNY',
    shortName: 'BEM KM FV UNY',
    logo: '/src/assets/logos/ormawa/logo-bem.webp',
    cardImage: '/src/assets/photos/ormawa/card-bem.webp',
    headerImage: '/src/assets/photos/ormawa/header-bem.webp',
    gallery: [
      '/src/assets/photos/ormawa/gallery-bem-1.webp',
      '/src/assets/photos/ormawa/gallery-bem-2.webp',
      '/src/assets/photos/ormawa/gallery-bem-3.webp',
    ],
    badge: 'Eksekutif',
    badgeColor: 'gold',
    description:
      'BEM KM Fakultas Vokasi UNY merupakan organisasi eksekutif mahasiswa yang berfokus sebagai wadah kolaborasi, pengembangan kapasitas, advokasi, serta pemberdayaan mahasiswa Fakultas Vokasi. BEM KM FV UNY mewadahi mahasiswa untuk mengembangkan kemampuan kepemimpinan, organisasi, komunikasi, dan kerja sama melalui berbagai program kerja yang berorientasi pada penguatan sumber daya mahasiswa, pelayanan kesejahteraan mahasiswa, kajian strategis, serta pengabdian kepada masyarakat dengan semangat progresif, berintegritas, dan adaptif.',
    vision:
      'Terwujudnya BEM KM Fakultas Vokasi sebagai wadah kolaborasi dan aksi mahasiswa Fakultas Vokasi yang progresif, berintegritas dan adaptif melalui pembentukan pengurus berkompeten serta memperkuat sinergi kemahasiswaan Fakultas Vokasi dengan semangat perubahan.',
    missions: [
      'Mengoptimalkan sistem kaderisasi internal yang sistematis dan berkelanjutan untuk membentuk pengurus BEM KM Fakultas Vokasi yang kompeten, profesional dan memiliki jiwa kepemimpinan yang terarah.',
      'Membangun budaya organisasi yang suportif, profesional dan berasaskan kekeluargaan sebagai pondasi utama internal BEM KM Fakultas Vokasi.',
      'Menjalin komunikasi aktif dan membangun kolaborasi harmonis dengan seluruh elemen organisasi kemahasiswaan Fakultas Vokasi, hingga elemen organisasi kemahasiswaan Vokasi tingkat nasional.',
      'Menyediakan ruang partisipatif guna mendorong potensi sumber daya mahasiswa Fakultas Vokasi melalui program kerja yang realistis, terarah dan tepat sasaran.',
      'Mengoptimalkan fungsi advokasi dan pelayanan kesejahteraan mahasiswa secara responsif dan solutif sebagai garda terdepan dalam memperjuangkan hak serta kebutuhan mahasiswa.',
      'Adaptif dan terlibat dalam gerakan serta kajian strategis sebagai respon terhadap isu kemahasiswaan dan sosial.',
    ],
    structure: {
      pembina: 'Dr. Yoga Guntur Sampurno, S.Pd., M.Pd.',
      ketua: 'Dini Eka Rakhmayani',
      wakilKetua: 'Dio Putra Sadewa',
      divisions: [
        { name: 'Kesekjenan', head: 'Biro Keuangan & Biro Administrasi' },
        { name: 'BJMO', head: 'Biro Keorganisasian & Biro Personalia' },
        { name: 'Departemen KESMA', head: 'Divisi Advokasi & Divisi Kesejahteraan' },
        { name: 'Departemen PSDM', head: 'Divisi Pengembangan Dasar & Divisi Pengembangan Lanjut' },
        { name: 'Departemen SOSMAS', head: 'Divisi Pengabdian & Divisi Respon Sosial' },
        { name: 'Departemen MEDKRAF', head: 'Divisi Media Production & Divisi Branding & Marketing' },
        { name: 'Departemen EKOKRAF', head: 'Divisi Kemitraan & Divisi Entrepreneur' },
        { name: 'Departemen EKSTERNAL', head: 'Divisi Sinergi Mahasiswa & Divisi Jaringan Eksternal' },
        { name: 'Departemen KARISPOL', head: 'Divisi Pergerakan & Divisi Kajian' },
        { name: 'Departemen MIKAT', head: 'Divisi Kompetisi & Divisi Eksibisi Prestasi' },
      ],
    },
    programs: [
      { name: 'Vokasi Muda Berdaya', description: 'Program pemberdayaan dan pengembangan kapasitas mahasiswa vokasi melalui berbagai pelatihan, aksi kolaboratif, dan pengabdian.' },
      { name: 'Apresiasi Mapres', description: 'Pemberian penghargaan dan apresiasi bagi mahasiswa berprestasi Fakultas Vokasi di bidang akademik maupun non-akademik.' },
      { name: 'Report Triwulan', description: 'Publikasi laporan transparansi kinerja, advokasi, dan keuangan BEM KM FV UNY secara berkala kepada seluruh mahasiswa.' },
      { name: 'Vokasi Loka Cakrawala (VLC)', description: 'Program SDP Leadership pembinaan karakter kepemimpinan, debat kritis, simulasi uji krisis, pentas seni, dan aksi nyata aksara bhakti.' },
    ],
    achievements: [
      'Penyelenggara PKKMB terbaik tingkat fakultas se-UNY 2024.',
      'Juara I Lomba Debat Mahasiswa antar BEM Perguruan Tinggi Yogyakarta 2024.',
    ],
    contact: {
      instagram: 'https://instagram.com/bemvokasiuny',
      tiktok: 'https://www.tiktok.com/@bemfvuny',
      youtube: 'https://youtube.com/@bemvokasiuny',
      email: 'uny.bemvokasi@gmail.com',
    },
  },
  {
    id: 'dpm',
    type: 'ormawa',
    name: 'Dewan Perwakilan Mahasiswa',
    shortName: 'DPM FV UNY',
    logo: '/src/assets/logos/ormawa/logo-dpm.webp',
    cardImage: '/src/assets/photos/ormawa/card-dpm.webp',
    headerImage: '/src/assets/photos/ormawa/header-dpm.webp',
    gallery: [
      '/src/assets/photos/ormawa/gallery-dpm-1.webp',
      '/src/assets/photos/ormawa/gallery-dpm-2.webp',
      '/src/assets/photos/ormawa/gallery-dpm-3.webp',
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
    },
  },
  {
    id: 'himanagari',
    type: 'ormawa',
    name: 'Himpunan Mahasiswa Tata Boga, Tata Busana, Tata Rias dan Kecantikan',
    shortName: 'HIMANAGARI',
    logo: '/src/assets/logos/ormawa/logo-himanagari.webp',
    cardImage: '/src/assets/photos/ormawa/card-himanagari.webp',
    headerImage: '/src/assets/photos/ormawa/header-himanagari.webp',
    gallery: [
      '/src/assets/photos/ormawa/gallery-himanagari-1.webp',
      '/src/assets/photos/ormawa/gallery-himanagari-2.webp',
      '/src/assets/photos/ormawa/gallery-himanagari-3.webp',
    ],
    badge: 'Himpunan',
    badgeColor: 'sky',
    description:
      'HIMANAGARI FV UNY (Kabinet Langkah Maju) merupakan organisasi kemahasiswaan yang mewadahi seluruh aspirasi, kreativitas, minat, dan bakat mahasiswa Departemen BOSARIS (Tata Boga, Tata Busana, serta Tata Rias dan Kecantikan) di Kampus Wates Kulon Progo. Berdiri pada tahun 2023, HIMANAGARI berfokus pada pengembangan soft skill, kompetensi akademik maupun non-akademik, serta menciptakan keharmonisan dan dampak nyata bagi kampus dan masyarakat.',
    vision:
      'Menjadikan Himanagari sebagai organisasi pengembangan mahasiswa yang berkualitas secara akademis maupun non akademis untuk terwujudnya kemajuan kampus dan masyarakat.',
    missions: [
      'Mengembangkan soft skill mahasiswa melalui program kerja HIMANAGARI.',
      'Membangun keharmonisan dalam lingkup HIMANAGARI serta departemen BOSARIS.',
      'Menjalin ikatan dengan organisasi lain, internal maupun eksternal kampus.',
      'Mendukung kemajuan kampus.',
      'Memaksimalkan kontribusi bagi masyarakat.',
    ],
    structure: {
      pembina: 'Angga Rendyantoni Puji Utomo, M.Sc.',
      ketua: 'Diannisa Naila Hanin',
      wakilKetua: 'Nadiyah Intan Maharani Saifudin',
      divisions: [
        { name: 'Biro Keuangan', head: 'Pengurus Biro Keuangan' },
        { name: 'Biro Administrasi', head: 'Pengurus Biro Administrasi' },
        { name: 'Biro Personalia', head: 'Pengurus Biro Personalia' },
        { name: 'Pengembangan Sumber Daya Mahasiswa (PSDM)', head: 'Pengurus PSDM' },
        { name: 'Sosial Jaringan (Sosjar)', head: 'Pengurus Sosjar' },
        { name: 'Media dan Informasi (Medinfo)', head: 'Pengurus Medinfo' },
        { name: 'Entrepreneur', head: 'Pengurus Entrepreneur' },
        { name: 'Akademik', head: 'Pengurus Akademik' },
        { name: 'Pengembangan Kreatifitas Mahasiswa (PKM)', head: 'Pengurus PKM' },
      ],
    },
    programs: [
      { name: 'Nagari Berkompetisi', description: 'Ajang kompetisi dan unjuk karya kreatif bagi mahasiswa Departemen BOSARIS di bidang kuliner, busana, dan kecantikan.' },
      { name: 'Open House', description: 'Program penyambutan dan pengenalan lingkungan departemen BOSARIS serta keorganisasian HIMANAGARI bagi mahasiswa baru.' },
    ],
    contact: {
      instagram: 'https://instagram.com/himanagari',
      tiktok: 'https://www.tiktok.com/@himanagarifvuny',
      email: 'himanagarifvuny@gmail.com',
    },
  },
  {
    id: 'himatabona',
    type: 'ormawa',
    name: 'Himpunan Mahasiswa Tata Boga & Tata Busana',
    shortName: 'HIMATABONA',
    logo: '/src/assets/logos/ormawa/logo-himatabona.webp',
    cardImage: '/src/assets/photos/ormawa/card-himatabona.webp',
    headerImage: '/src/assets/photos/ormawa/header-himatabona.webp',
    gallery: [
      '/src/assets/photos/ormawa/gallery-himatabona-1.webp',
      '/src/assets/photos/ormawa/gallery-himatabona-2.webp',
      '/src/assets/photos/ormawa/gallery-himatabona-3.webp',
    ],
    badge: 'Himpunan',
    badgeColor: 'sky',
    description:
      'HIMATABONA FV UNY adalah sarana berorganisasi formal dan struktural untuk melaksanakan seluruh kegiatan kemahasiswaan departemen Tata Boga dan Tata Busana di UNY Kampus Wilayah Gunungkidul (Kabinet Abhipraya). Berperan aktif meningkatkan kualitas SDM melalui pengembangan akademik, non-akademik, kepemimpinan, dan kewirausahaan.',
    vision:
      'Menjadikan HIMATABONA yang inovatif dan kreatif untuk mengembangkan potensi mahasiswa dalam bidang Tata Boga dan Tata Busana, serta menjunjung tinggi keberagaman dan kolaborasi demi mencapai tujuan bersama.',
    missions: [
      'Membangun Kreativitas, Mendorong anggota untuk berinovasi dan berkreasi dalam bidang kuliner dan fashion design.',
      'Menghargai keberagaman latar belakang anggota, serta mendorong inklusivitas dalam setiap kegiatan yang dilaksanakan.',
      'Menjadi wadah informasi bagi mahasiswa Tata Boga & Tata Busana Gunungkidul, serta meningkatkan keaktifan mahasiswa dengan berkontribusi dalam kegiatan lingkup fakultas vokasi untuk relasi yang berkelanjutan.',
    ],
    structure: {
      pembina: 'Angga Rendyantoni Puji Utomo, M.Sc.',
      ketua: 'Kholifah Mulyaputri Rachma Shagiva',
      wakilKetua: 'Chelsea Aulia Annastasya',
      divisions: [
        { name: 'Sekretaris & Bendahara', head: 'Pengurus Kesekretariatan & Keuangan' },
        { name: 'Pengembangan Sumber Daya Mahasiswa (PSDM)', head: 'Pengurus PSDM' },
        { name: 'Minat Bakat (Mikat)', head: 'Pengurus Mikat' },
        { name: 'Media Informasi (Medinfo)', head: 'Pengurus Medinfo' },
        { name: 'Sosial Jaringan (Sosjar)', head: 'Pengurus Sosjar' },
        { name: 'Pengembangan Kreativitas Mahasiswa (PKM)', head: 'Pengurus PKM' },
        { name: 'Ekonomi Kreatif (Ekotif)', head: 'Pengurus Ekotif' },
      ],
    },
    programs: [
      { name: 'Ekspokreasi', description: 'Pameran kreasi kuliner dan peragaan fashion karya mahasiswa Tata Boga dan Tata Busana UNY Gunungkidul.' },
      { name: 'Kompetisi Inovasi', description: 'Ajang perlombaan inovasi resep kuliner dan desain busana kreatif tingkat mahasiswa.' },
      { name: 'Kreativa', description: 'Workshop dan pelatihan keterampilan terapan di bidang boga, busana, dan tata rias.' },
    ],
    contact: {
      instagram: 'https://instagram.com/himatabona',
      tiktok: 'https://www.tiktok.com/@himatabonafvuny',
      email: 'himatabona@gmail.com',
    },
  },
  {
    id: 'hmdbk',
    type: 'ormawa',
    name: 'Himpunan Mahasiswa Departemen Bisnis & Keuangan',
    shortName: 'HMDBK FV UNY',
    logo: '/src/assets/logos/ormawa/logo-hmdbk.webp',
    cardImage: '/src/assets/photos/ormawa/card-hmdbk.webp',
    headerImage: '/src/assets/photos/ormawa/header-hmdbk.webp',
    gallery: [
      '/src/assets/photos/ormawa/gallery-hmdbk-1.webp',
      '/src/assets/photos/ormawa/gallery-hmdbk-2.webp',
      '/src/assets/photos/ormawa/gallery-hmdbk-3.webp',
    ],
    badge: 'Himpunan',
    badgeColor: 'sky',
    description:
      'HMDBK FV UNY (Kabinet Resonansi Niscala) adalah organisasi mahasiswa yang menaungi 3 program studi yaitu D4 Akuntansi, D4 Manajemen Pemasaran, dan D4 Administrasi Perkantoran di Kampus Kulon Progo dan Gunungkidul. HMDBK hadir sebagai ruang bersama untuk bertemu, berkembang, berkolaborasi, dan menyalurkan aspirasi dengan semangat kekeluargaan, konsistensi, serta dampak luas bagi mahasiswa dan masyarakat.',
    vision:
      'Menciptakan harmonisasi, konsistensi, dan integrasi dalam berkarya serta memberi dampak luas bagi mahasiswa Departemen Bisnis dan Keuangan FV UNY. Berkomitmen menjadi garda terdepan dalam penyuaraan aspirasi mahasiswa serta mendorong dan mengembangkan potensi akademik, nonakademik, dan kewirausahaan.',
    missions: [
      'Membangun harmonisasi internal yang sehat dan inklusif dengan menumbuhkan rasa keagamaan, kekeluargaan, kebersamaan, dan solidaritas.',
      'Menciptakan sumber daya manusia yang kokoh konsisten dalam pengembangan diri secara optimal melalui kaderisasi serta menjaga citra Departemen Bisnis dan Keuangan FV UNY agar berdaya saing.',
      'Menjadi wadah aspirasi dan penyaluran kesejahteraan mahasiswa dengan mengedepankan advokasi, penyelesaian masalah, perlindungan hak mahasiswa, serta informasi akurat.',
      'Menghadirkan wadah pengembangan ide bisnis kreatif dan inovatif serta mendorong kolaborasi dan networking di bidang kewirausahaan.',
      'Menjadi pusat informasi yang cepat, akurat, dan kreatif dalam mendukung transparansi serta memperkuat citra positif HIMA.',
      'Membangun jaringan kerja sama yang kokoh dan berkelanjutan dengan sesama mahasiswa UNY atau masyarakat luar (niscala) dalam memperluas pengaruh organisasi.',
      'Menjadi wadah penyalur dan pengembangan minat, bakat, dan kreativitas mahasiswa serta menghadirkan resonansi semangat berkarya di bidang nonakademik.',
      'Menjadi wadah mahasiswa untuk berkarya dan berprestasi di bidang akademik guna mencetak generasi adaptif, kreatif, dan berdaya saing.',
    ],
    structure: {
      pembina: 'Nadia Husnaningtyas, S.Ak., M.Ak.',
      ketua: 'Diri Aria Hepta Pamungkas',
      wakilKetua: 'Mirza Galih Aulia & Jadid Abdurrahman Al-Farisi',
      divisions: [
        { name: 'Sekretaris & Bendahara', head: 'Kharisma Fitri Aulia, Dinda Meidia Rahayu, Clasmila Meilia Sari, Adinda Avisha Riyani' },
        { name: 'Biro Personalia', head: 'Samuel Rizky Handelen M. (Kabiro), Fajar Nugroho & Hilmy Zhafran Zaky (Wakabiro)' },
        { name: 'Divisi PSDM', head: 'Haykal Martvito (Kadiv), Siti Khusnul Latifah & Abidah Izzatul Adha (Wakadiv)' },
        { name: 'Divisi ADVOKESMA', head: 'Alya Rahmawati (Kadiv), Haffa Pradista Dewantara & Yenita Nurlaily Azzahra (Wakadiv)' },
        { name: 'Divisi Entrepreneur', head: 'Cindy Cahya Shinta (Kadiv), Hanania Rossa Kalyana & Amelia Dwi Saputri (Wakadiv)' },
        { name: 'Divisi KOMINFO', head: 'Muhammad Iqbal Afryo (Kadiv), Hanifa Intan Nurrahma & Asni Imelia Putri (Wakadiv)' },
        { name: 'Divisi EKSMA', head: 'Muhammad Fahmi (Kadiv), Layung Ahsany Wedhana & Muhammad Shofwan Robie (Wakadiv)' },
        { name: 'Divisi SOSJAR', head: 'Destri Sulistyawati (Kadiv), Muhammad Naufal Maulana & Lingua El Nifwa (Wakadiv)' },
        { name: 'Divisi LITBANG', head: 'Ilyas Ananda Putra (Kadiv), Winda Sri Febriyani & Annisa Septiana Paramita (Wakadiv)' },
      ],
    },
    programs: [
      { name: 'D’Festival', description: 'Festival tahunan kebanggaan departemen yang menyajikan pentas seni, expo kreativitas, dan bazaar mahasiswa Bisnis & Keuangan.' },
      { name: 'Pantai Lestari', description: 'Program aksi kepedulian lingkungan dan bakti sosial pembersihan kawasan pesisir pantai bersama civitas akademika.' },
      { name: 'HIMA Menanam', description: 'Gerakan penghijauan dan kepedulian ekologi kampus serta lingkungan sekitar oleh mahasiswa Departemen Bisnis & Keuangan.' },
      { name: 'Ruang Prestasi', description: 'Wadah pendampingan, kurasi, dan pembinaan intensif bagi mahasiswa untuk meraih prestasi di berbagai kompetisi ilmiah dan bisnis.' },
      { name: 'Seminar Jejak Karir', description: 'Seminar karir dan pembekalan persiapan dunia profesional bersama para praktisi industri dan alumni terkemuka.' },
    ],
    achievements: [
      'Best Event Ormawa Universitas Negeri Yogyakarta 2025.',
      'Juara 1 Lomba Basket (Komposisi 2025).',
      'Juara 1 Lomba Dance (Komposisi 2025).',
      'Juara 2 Lomba Tari Tradisional (Komposisi 2025).',
      'Juara 2 Lomba Mobile Legend (Komposisi 2025).',
      'Juara 3 Lomba Bulutangkis Campuran (Komposisi 2025).',
      'Juara 2 Lomba Futsal (Vsport 2025).',
      'Juara 2 Lomba Futsal (Vsport 2024).',
      'Juara 2 Mini Soccer (xcus 2024).',
    ],
    contact: {
      instagram: 'https://www.instagram.com/himadbkfvuny',
      tiktok: 'https://www.tiktok.com/@himadbkfvuny',
      youtube: 'https://youtube.com/@himadbkfvuny',
      linkedin: 'https://www.linkedin.com/company/hmdbkfvuny/',
      email: 'himabkfvuny@gmail.com',
    },
  },
  {
    id: 'hmdtm',
    type: 'ormawa',
    name: 'Himpunan Mahasiswa Departemen Teknik Mesin',
    shortName: 'HMDTM FV UNY',
    logo: '/src/assets/logos/ormawa/logo-hmdtm.webp',
    badge: 'Himpunan',
    badgeColor: 'sky',
    cardImage: '/src/assets/photos/ormawa/card-hmdtm.webp',
    headerImage: '/src/assets/photos/ormawa/header-hmdtm.webp',
    gallery: [
      '/src/assets/photos/ormawa/gallery-hmdtm-1.webp',
      '/src/assets/photos/ormawa/gallery-hmdtm-2.webp',
      '/src/assets/photos/ormawa/gallery-hmdtm-3.webp',
    ],
    description:
      'HMDTM FV UNY adalah organisasi mahasiswa tingkat departemen yang mewadahi aspirasi serta kebutuhan akademik dan non-akademik dari mahasiswa aktif Departemen Teknik Mesin dan Otomotif (meningkupi prodi D4 Teknik Mesin dan D4 Mesin Otomotif). Berkomitmen membangun iklim internal yang sehat, produktif, kompetitif, dan harmonis.',
    vision:
      'Menjadikan HMDTM sebagai wadah aspirasi, minat, dan bakat mahasiswa DTMO, dan juga membentuk lingkungan yang kompetitif dan harmonis. HMDTM berkomitmen dalam membangun iklim internal yang sehat dan produktif, sekaligus berkontribusi aktif dalam membangun lingkungan akademik yang nyaman.',
    missions: [
      'Memberikan apresiasi terhadap pencapaian mahasiswa DTMO agar bisa menjadi motivasi untuk berkembang sekaligus memotivasi mahasiswa DTMO lainnya untuk menciptakan lingkungan kompetitif yang positif.',
      'Membentuk ruang aman dan nyaman bagi mahasiswa departemen melalui forum diskusi terbuka guna mengetahui apa saja yang dirasa dibutuhkan oleh mahasiswa departemen untuk menciptakan keseimbangan antara tanggungjawab dan kenyamanan.',
      'Mengadakan kompetisi internal dan mendukung partisipasi mahasiswa dalam lomba eksternal sebagai sarana menumbuhkan semangat berprestasi dan meningkatkan daya saing untuk mendorong budaya kompetitif yang sehat.',
      'Melanjutkan roda kepengurusan HMDTM dengan menjalin komunikasi yang aktif dengan civitas akademika dan pihak eksternal demi menunjang kebutuhan yang dibutuhkan dalam menciptakan lingkungan yang produktif dan berdampak nyata bagi lingkungan sekitar.',
    ],
    structure: {
      pembina: 'Dosen Pembina Departemen Teknik Mesin & Otomotif',
      ketua: 'Restu Inggil Pakerti',
      wakilKetua: 'Pengurus Harian HMDTM',
      divisions: [
        { name: 'Divisi Riset & Teknologi', head: 'Pengurus Riset & Teknologi' },
        { name: 'Divisi Otomotif & Permesinan', head: 'Pengurus Otomotif & Permesinan' },
        { name: 'Divisi Hubungan Masyarakat & Sosmas', head: 'Pengurus Humas & Sosmas' },
        { name: 'Divisi Media Informasi & Desain', head: 'Pengurus Medinfo' },
      ],
    },
    programs: [
      { name: 'Mechanical Engineering Expo', description: 'Pameran hasil riset terapan, manufaktur, dan rekayasa otomotif karya inovatif mahasiswa DTMO.' },
      { name: 'Otomotif & CNC Challenge', description: 'Ajang kompetisi keterampilan teknik pemesinan presisi dan troubleshooting otomotif antar mahasiswa.' },
      { name: 'Forum Diskusi Terbuka DTMO', description: 'Ruang dialog aspirasi mahasiswa bersama jurusan guna merancang fasilitas dan lingkungan akademik yang nyaman.' },
    ],
    achievements: [
      'Juara II Kompetisi Desain Mesin Nasional 2024.',
      'Peserta Aktif Kontes Mobil Hemat Energi (KMHE) & Kontes Robot Terbang Indonesia.',
    ],
    contact: {
      instagram: 'https://instagram.com/hmdtm.fvuny',
      email: 'himamesinvokasi@gmail.com',
      whatsapp: 'https://wa.me/6285117795591',
    },
  },
  {
    id: 'hmdts',
    type: 'ormawa',
    name: 'Himpunan Mahasiswa Departemen Teknik Sipil',
    shortName: 'HMDTS FV UNY',
    logo: '/src/assets/logos/ormawa/logo-hmdts.webp',
    badge: 'Himpunan',
    badgeColor: 'sky',
    cardImage: '/src/assets/photos/ormawa/card-hmdts.webp',
    headerImage: '/src/assets/photos/ormawa/header-hmdts.webp',
    gallery: [
      '/src/assets/photos/ormawa/gallery-hmdts-1.webp',
      '/src/assets/photos/ormawa/gallery-hmdts-2.webp',
      '/src/assets/photos/ormawa/gallery-hmdts-3.webp',
    ],
    description:
      'HMDTS FV UNY adalah organisasi kemahasiswaan yang berfungsi sebagai wadah aspirasi, pengembangan minat dan bakat, peningkatan kapasitas akademik maupun non-akademik, serta penguatan rasa kekeluargaan mahasiswa D4 Teknik Sipil. HMDTS mengasah jiwa kepemimpinan, riset ketekniksipilan, dan mempersiapkan lulusan yang kompeten serta siap berkontribusi dalam pembangunan bangsa.',
    vision:
      'Menjadikan HMDTS sebagai organisasi yang aspiratif, kolaboratif, dan inovatif baik dalam departemen maupun di luar departemen.',
    missions: [
      'Mengembangkan minat bakat mahasiswa teknik sipil.',
      'Pengembangan potensi mahasiswa dalam bidang akademik maupun non-akademik.',
      'Menjalin komunikasi dan berperan aktif baik di dalam departemen maupun di luar departemen.',
    ],
    structure: {
      pembina: 'Ir. Wisnu Rachmad Prihadi, M.Pd.',
      ketua: 'Naga Bumi',
      wakilKetua: 'Faza Nur Halisa',
      divisions: [
        { name: 'Sekretaris & Bendahara', head: 'Rizki Amelia Faidah Prastiwi, Nezha Asmi Mekar Sari, William Yudistira, Rifa Elfariani' },
        { name: 'Biro Personalia', head: 'Rizqi Aulia Pratama (Kabiro) & Ibram Muhammad Farhan (Wakabiro)' },
        { name: 'Divisi PSDM', head: 'Naufal Noor Hassan (Kadiv) & Diwangkara Forestya Putra (Wakadiv)' },
        { name: 'Divisi Sosial Mahasiswa (SOSMAS)', head: 'Mahesa Putra Wisesa (Kadiv) & Festya Fatika Mukti (Wakadiv)' },
        { name: 'Divisi Komunikasi dan Informasi (KOMINFO)', head: 'Abrar Mumtaz Satya Aji (Kadiv) & Zulfikar Ali (Wakadiv)' },
        { name: 'Divisi Akademik', head: 'Artha Sulistyowati (Kadiv) & Nur Safimatunajah (Wakadiv)' },
        { name: 'Divisi Kerumahtanggaan & Dana Usaha (KRD)', head: 'Muhammad Taro Taufiqurrahman (Kadiv) & Muhammad Ars Athaillah Nafis (Wakadiv)' },
      ],
    },
    programs: [
      { name: 'CIVILIZATION', description: 'Civil Engineering Orientation And Introduction — acara orientasi dan pengenalan dunia perkuliahan bagi mahasiswa baru D4 Teknik Sipil.' },
      { name: 'Leadership Development', description: 'Program pelatihan kepemimpinan dan keakraban untuk menumbuhkan karakter pemimpin yang solid bagi mahasiswa Teknik Sipil.' },
      { name: 'Stadium General Ketekniksipilan', description: 'Kuliah umum dan seminar teknologi konstruksi terkini yang menghadirkan pakar dan praktisi industri konstruksi nasional.' },
    ],
    contact: {
      instagram: 'https://instagram.com/hmdts_fvuny',
      tiktok: 'https://www.tiktok.com/@hmdts_fvuny',
      whatsapp: 'https://wa.me/6285879415711',
    },
  },
  {
    id: 'hmok',
    type: 'ormawa',
    name: 'HIMA Olahraga & Kesehatan',
    shortName: 'HIMA ORKES',
    logo: '/src/assets/logos/ormawa/logo-hmok.webp',
    badge: 'Himpunan',
    badgeColor: 'sky',
    cardImage: '/src/assets/photos/ormawa/card-hmok.webp',
    headerImage: '/src/assets/photos/ormawa/card-hmok.webp',
    gallery: [
      '/src/assets/photos/ormawa/gallery-hmok-1.webp',
      '/src/assets/photos/ormawa/gallery-hmok-2.webp',
      '/src/assets/photos/ormawa/gallery-hmok-3.webp',
    ],
    description:
      'HIMA ORKES FV UNY merupakan himpunan mahasiswa gabungan 3 prodi (Pengobatan Tradisional Indonesia, Pengelolaan Usaha Rekreasi, dan Promosi Kesehatan) yang menaungi bidang olahraga dan kesehatan. Berlandaskan asas manfaat, musyawarah, dan kekeluargaan untuk mengadvokasi aspirasi mahasiswa serta menggerakkan inovasi kesehatan.',
    vision:
      'Menjadi himpunan mahasiswa yang kritis, solutif, dan solid dalam memperjuangkan hak serta aspirasi mahasiswa Orkes, sekaligus menjadi roda penggerak inovasi nyata di bidang olahraga dan kesehatan.',
    missions: [
      'Mengadvokasi kebutuhan mahasiswa secara responsif, berkeadilan, dan berkelanjutan.',
      'Menguatkan solidaritas internal melalui budaya transparansi, akuntabilitas, kolaborasi dan kekeluargaan.',
      'Menumbuhkan budaya kepemimpinan yang reflektif, empatik, dan berintegritas.',
      'Memberikan wadah untuk mendorong pengembangan minat bakat, dan profesionalisme mahasiswa di bidang akademik dan non-akademik.',
    ],
    structure: {
      pembina: 'Dosen Pembina Departemen Orkes',
      ketua: 'Aqila Azkavia Kurniawan (2026)',
      wakilKetua: 'Arya Hafizh S. & Achmad Guntur A.P. (2026)',
      divisions: [
        { name: 'Sekretaris & Bendahara', head: 'Rifiana Sakina S., Nimas Andini, Tiara Marga U., Alifah Farras' },
        { name: 'Divisi PSDM', head: 'Nur Meilani (Kepala) & Khoirunnisa Nur H. (Wakil)' },
        { name: 'Divisi SOSMAS', head: 'Aulianisa Tsabita (Kepala) & Navyzha Nourferynanda (Wakil)' },
        { name: 'Divisi PMB', head: 'Davina Putri N. (Kepala) & Khoirunnisa Nur (Wakil)' },
        { name: 'Divisi KOMVIS', head: 'Augie Putri R. (Kepala) & Khaerunisa Laiqa I. (Wakil)' },
        { name: 'Divisi KWU', head: 'Rienaras Ganes N. (Kepala) & Anindika Revalina (Wakil)' },
      ],
    },
    programs: [
      { name: 'Nayakaganta', description: 'Program pelatihan kepemimpinan (Leadership Development) dari Divisi PSDM untuk membangun mahasiswa yang berintegritas dan berinisiatif.' },
      { name: 'Charity With Orkes', description: 'Kegiatan sosial kunjungan panti asuhan, penyerahan bantuan sembako, dan sosialisasi kesehatan bersama anak-anak panti.' },
      { name: 'Orkes Podcast', description: 'Program kolaborasi SOSMAS & KOMVIS yang membahas isu kemahasiswaan, keolahragaan, dan kesehatan melalui diskusi santai dan edukatif.' },
      { name: 'Aliansi & Orkesan', description: 'Apresiasi mahasiswa wisuda/atlet berprestasi serta pengembangan wirausaha mahasiswa melalui sistem pre-order merchandise resmi ORKES.' },
    ],
    contact: {
      instagram: 'https://instagram.com/himaorkesfvuny',
      tiktok: 'https://www.tiktok.com/@himaorkesfvuny',
      youtube: 'https://www.youtube.com/@HimaOrkesFvUny',
      whatsapp: 'https://wa.me/6285669903988',
    },
  },
  {
    id: 'hmve',
    type: 'ormawa',
    name: 'Himpunan Mahasiswa Vokasi Elektro dan Elektronika',
    shortName: 'HMVE',
    logo: '/src/assets/logos/ormawa/logo-hmve.webp',
    badge: 'Himpunan',
    badgeColor: 'sky',
    cardImage: '/src/assets/photos/ormawa/card-hmve.webp',
    headerImage: '/src/assets/photos/ormawa/header-hmve.webp',
    gallery: [
      '/src/assets/photos/ormawa/gallery-hmve-1.webp',
      '/src/assets/photos/ormawa/gallery-hmve-2.webp',
      '/src/assets/photos/ormawa/gallery-hmve-3.webp',
    ],
    description:
      'Himpunan Mahasiswa Vokasi Elektro dan Elektronika (HMVE) UNY merupakan wadah bagi mahasiswa Vokasi Elektro dan Elektronika untuk berhimpun, berproses, dan menyalurkan aspirasi, sekaligus mengembangkan potensi, keterampilan, dan kesolidan. Kabinet Prakarsa Asa hadir dengan tagline "Berani Melangkah, Wujudkan Harapan", diharapkan menjadi penggerak HMVE UNY yang lebih proaktif, kolaboratif, dan memberi ruang bagi setiap pengurus untuk berkontribusi.',
    vision:
      'Mewujudkan HMVE UNY yang aktif, kolaboratif, dan berdaya guna bagi pengembangan mahasiswa dan himpunan.',
    missions: [
      'Memfasilitasi pengembangan akademik, minat, dan bakat mahasiswa melalui informasi serta kegiatan yang terstruktur dan mudah diakses.',
      'Menyediakan ruang aspirasi dan advokasi yang terbuka, cepat, dan bertanggung jawab bagi seluruh mahasiswa.',
      'Mengembangkan program inovatif dan kegiatan sosial yang memberikan dampak nyata.',
      'Membangun hubungan yang harmonis dan berkelanjutan dengan mahasiswa, dosen, alumni, serta pihak eksternal.',
    ],
    structure: {
      pembina: 'Sa\'adillah Rosyadi S.Pd. M.Pd.',
      ketua: 'Fadhil Destiawan',
      wakilKetua: 'Mulya Putra Adhi Nugraha',
      divisions: [
        { name: 'Biro Personalia', head: 'Shafa Naufal Ramadhan' },
        { name: 'Biro Administrasi', head: 'Dinta Khoiru Sanata' },
        { name: 'Biro Keuangan', head: 'Naswa Revalinda Wibowo' },
        { name: 'Biro KOMINFO', head: 'Habib Muhammad Fauzan' },
        { name: 'Divisi PSDM', head: 'Rossa Astia Kirania Putri' },
        { name: 'Divisi SOSJAR', head: 'Cito Refanov' },
        { name: 'Divisi KWU', head: 'Arkaan Ahmad' },
        { name: 'Divisi IPTEK', head: 'Khaliq Bima Alvian Putra' },
        { name: 'Divisi APP', head: 'Daffa Aryabima' },
        { name: 'Divisi MIKAT', head: 'Dimas Ardian Rassi' },
      ],
    },
    programs: [
      { name: 'SEMNAS', description: 'Seminar Nasional bidang teknologi elektro dan elektronika dari Divisi IPTEK.' },
      { name: 'Bincang Departemen', description: 'Forum diskusi dan sharing session terkait perkembangan departemen dari Divisi APP.' },
      { name: 'CIRCUIT', description: 'Program pengembangan kompetensi dan skill mahasiswa dari Divisi PSDM.' },
      { name: 'Voltalimpic', description: 'Kompetisi olahraga dan minat bakat mahasiswa elektro dari Divisi MIKAT.' },
      { name: 'Pioneer', description: 'Program pengembangan soft skill dan kepemimpinan dari Divisi SOSJAR.' },
      { name: 'Merch', description: 'Produk merchandise khas HMVE dari Divisi KWU.' },
    ],
    achievements: [
      'Juara 1 Badminton Ganda Putra Komposisi 2023.',
      'Juara 1 Futsal Komposisi 2023.',
      'Juara 2 Basket Komposisi 2023.',
      'Juara 1 Voli Komposisi 2023.',
      'Program Ormawa Membangun Negeri (POMN) 2024.',
      'Juara 1 Vsport 2024.',
      'Juara Umum Komposisi 2025.',
    ],
    contact: {
      instagram: 'https://instagram.com/hmve.uny',
      tiktok: 'https://www.tiktok.com/@hmve.uny',
      youtube: 'https://www.youtube.com/@hmve_uny',
      linkedin: 'https://www.linkedin.com/in/hmve.uny',
      website: 'https://linktr.ee/hmve.uny',
    },
  },

  // ─── UKM ──────────────────────────────────────────────────────────────────
  {
    id: 'ukm-baiturrahman',
    type: 'ukm',
    name: 'UKMF KM Baiturrahman',
    shortName: 'UKMF KM Baiturrahman',
    logo: '/src/assets/logos/ukm/logo-ukm-baiturrahman.webp',
    badge: 'Kerohanian',
    badgeColor: 'gold',
    cardImage: '/src/assets/photos/ukm/card-ukm-baiturrahman.webp',
    headerImage: '/src/assets/photos/ukm/header-ukm-baiturrahman.webp',
    gallery: [
      '/src/assets/photos/ukm/gallery-ukm-baiturrahman-1.webp',
      '/src/assets/photos/ukm/gallery-ukm-baiturrahman-2.webp',
      '/src/assets/photos/ukm/gallery-ukm-baiturrahman-3.webp',
    ],
    description:
      'UKMF KM Baiturrahman FV UNY merupakan wadah pembinaan, pengembangan, dan pemberdayaan mahasiswa dalam meningkatkan keimanan, ketakwaan, serta akhlak mulia berdasarkan nilai-nilai Islam. Berperan mendekatkan dunia keilmuan dengan keislaman, mempererat ukhuwah Islamiyah, serta menumbuhkan jiwa kepemimpinan dan kepedulian sosial.',
    vision:
      'UKMF KM BAITURRAHMAN FV UNY sebagai lembaga dakwah kampus yang membentuk kepribadian integral dan mensyiarkan Islam di kampus dan masyarakat.',
    missions: [
      'Membuat dan melaksanakan pola pembinaan dan pengaderan UKMF KM BAITURRAHMAN FV UNY.',
      'Mengoptimalkan peran Pengurus UKMF KM BAITURRAHMAN FV UNY dalam menjalankan roda organisasi.',
      'Melaksanakan kegiatan pengabdian dan pelayanan umat.',
      'Melakukan kerja sama dengan pihak internal dan eksternal kampus.',
      'Mengoptimalkan kegiatan syiar keislaman di kampus.',
      'Mengoptimalkan peran kemuslimahan.',
      'Mengoptimalkan peran media dan jaringan dalam mengembangkan media dakwah.',
      'Menumbuhkan jiwa sociopreneur, pengembangan ekonomi kreatif, dan meningkatkan wawasan ekonomi Islam di lingkungan FV UNY.',
    ],
    structure: {
      pembina: 'Fatoni Yanuar Akhmad Budi Sunaryo, S.Or., M.Or., M.Sc.',
      ketua: 'Kahfi Alghifari (Teknik Mesin 2023)',
      wakilKetua: 'Atha Aqila Nazahah (PTI 2024)',
      divisions: [
        { name: 'Sekretaris Jenderal', head: 'Ahmad Hanafi (Teknik Elektronika 2023)' },
        { name: 'Departemen Binaan Kaderisasi (Binkad)', head: 'Pengurus Binkad' },
        { name: 'Departemen Kewirausahaan (KWU)', head: 'Pengurus KWU' },
        { name: 'Departemen Kemuslimahan (KMH)', head: 'Pengurus KMH' },
        { name: 'BSO Ketakmiran', head: 'Pengurus BSO Ketakmiran' },
        { name: 'BSO Korwil Gunungkidul', head: 'Pengurus BSO Korwil Gunungkidul' },
        { name: 'Departemen Edukasi & Kreativitas Mahasiswa (Edukesma)', head: 'Pengurus Edukesma' },
        { name: 'Departemen Media', head: 'Pengurus Media' },
        { name: 'Departemen Sosial Jaringan (Sosjar)', head: 'Pengurus Sosjar' },
        { name: 'Departemen Syiar', head: 'Pengurus Syiar' },
      ],
    },
    programs: [
      { name: 'SDP Kerohanian & Eksmild', description: 'Ekspedisi Mengenal Islam Lebih Dalam, program pembinaan karakter, moral, dan spiritual bagi mahasiswa baru melalui pematerian, FGD, dan studi kasus.' },
      { name: 'BARAFEST (Baiturrahman Festival)', description: 'Festival keislaman tahunan yang memadukan agenda syiar, seni, dan kompetisi keagamaan.' },
      { name: 'RDK (Ramadhan Di Kampus)', description: 'Rangkaian agenda ibadah, kajian, dan bakti sosial kepedulian selama bulan suci Ramadhan.' },
    ],
    contact: {
      instagram: 'https://instagram.com/ukmf_baiturrahman',
      tiktok: 'https://www.tiktok.com/@ukmf_baiturrahman',
      whatsapp: 'https://wa.me/6285774307886',
    },
  },
  {
    id: 'ukm-kesenian',
    type: 'ukm',
    name: 'UKMF Kesenian FV UNY',
    shortName: 'UKMF Kesenian',
    logo: '/src/assets/logos/ukm/logo-ukm-kesenian.webp',
    badge: 'Seni & Budaya',
    badgeColor: 'sky',
    cardImage: '/src/assets/photos/ukm/card-ukm-kesenian.webp',
    headerImage: '/src/assets/photos/ukm/header-ukm-kesenian.webp',
    gallery: [
      '/src/assets/photos/ukm/gallery-ukm-kesenian-1.webp',
      '/src/assets/photos/ukm/gallery-ukm-kesenian-2.webp',
      '/src/assets/photos/ukm/gallery-ukm-kesenian-3.webp',
    ],
    description:
      'UKMF Kesenian Fakultas Vokasi UNY merupakan wadah bagi mahasiswa untuk mengembangkan minat, bakat, kreativitas, serta potensi di bidang seni dan budaya (Tari Tradisional, Dance Modern, Musik, Teater, dan Karawitan). Berperan sebagai sarana penyaluran hobi, pembentukan karakter, peningkatan keterampilan, serta pengembangan kemampuan berorganisasi.',
    vision:
      'Menjadi wadah untuk mengekspresikan ide dan kreativitas dalam bidang seni, sastra, dan budaya.',
    missions: [
      'Mengembangkan minat dan bakat mahasiswa Vokasi UNY dalam bidang kesenian.',
      'Mengembangkan sarana pelatihan untuk mengeksplor keterampilan anggota UKMF Kesenian.',
      'Menanamkan jiwa nasionalisme dengan sikap dan kesadaran untuk melestarikan seni, sastra, dan budaya.',
      'Mewujudkan UKMF Kesenian yang memiliki nilai integritas dan solidaritas yang tinggi.',
    ],
    structure: {
      pembina: 'Triyanto, S. Sn., M. A.',
      ketua: 'Muhammad Nur Shodiq',
      wakilKetua: 'Theresia Yesha Sancristi',
      divisions: [
        { name: 'HRD', head: 'Pengurus HRD' },
        { name: 'Public Relation', head: 'Pengurus Public Relation' },
        { name: 'Medinfo', head: 'Pengurus Medinfo' },
        { name: 'Divisi Musik', head: 'Pengurus Divisi Musik' },
        { name: 'Divisi Teater', head: 'Pengurus Divisi Teater' },
        { name: 'Divisi Dance', head: 'Pengurus Divisi Dance' },
        { name: 'Divisi Tari Tradisional', head: 'Pengurus Divisi Tari Tradisional' },
        { name: 'Divisi Karawitan', head: 'Pengurus Divisi Karawitan' },
      ],
    },
    programs: [
      { name: 'Sambang Rupa', description: 'Kegiatan pentas akhir yang diadakan di akhir periode sebagai wadah unjuk karya persembahan anggota sekaligus penutupan periode.' },
      { name: 'SDP (Student Development Program) Kesenian', description: 'Program pengembangan mahasiswa baru melalui pemilihan divisi seni (Musik, Tari Tradisional, Dance, Teater), latihan terbimbing mentor, dan puncak pertunjukan seni.' },
    ],
    contact: {
      instagram: 'https://instagram.com/ukmkesenianfv.uny',
    },
  },
  {
    id: 'ukm-reaction',
    type: 'ukm',
    name: 'UKMF Penelitian Reaction FV UNY',
    shortName: 'UKMF Reaction',
    logo: '/src/assets/logos/ukm/logo-ukm-reaction.webp',
    badge: 'Penelitian',
    badgeColor: 'blue',
    cardImage: '/src/assets/photos/ukm/card-ukm-reaction.webp',
    headerImage: '/src/assets/photos/ukm/header-ukm-reaction.webp',
    gallery: [
      '/src/assets/photos/ukm/gallery-ukm-reaction-1.webp',
      '/src/assets/photos/ukm/gallery-ukm-reaction-2.webp',
      '/src/assets/photos/ukm/gallery-ukm-reaction-3.webp',
    ],
    description:
      'UKMF Penelitian Reaction FV UNY merupakan Unit Kegiatan Mahasiswa Fakultas yang berfokus pada pengembangan penelitian, penalaran, karya ilmiah, dan inovasi mahasiswa. Organisasi ini memfasilitasi mahasiswa Fakultas Vokasi untuk mengikuti berbagai kompetisi akademik seperti Program Kreativitas Mahasiswa (PKM), Olimpiade Vokasi Indonesia (OLIVIA), dan ajang ilmiah nasional.',
    vision:
      'Menjadi pusat integratif pengembangan dan pengelolaan riset serta penalaran ilmiah mahasiswa Fakultas Vokasi UNY yang inklusif, berkelanjutan dan berdaya saing.',
    missions: [
      'Menjadi wadah bagi mahasiswa Fakultas Vokasi UNY untuk meraih prestasi dan meningkatkan kapasitas ilmiah melalui riset, penalaran, dan literasi.',
      'Mengembangkan kemampuan riset, penalaran, dan kreativitas mahasiswa Fakultas Vokasi UNY melalui kegiatan ilmiah, kompetisi, dan proyek berbasis penalaran.',
      'Mengelola dan menyebarluaskan informasi serta literasi ilmiah kepada mahasiswa untuk memperluas wawasan dan akses peluang untuk berprestasi melalui media kreatif dan platform digital.',
      'Membangun jejaring dan kolaborasi dengan pihak internal maupun eksternal untuk mendukung pengembangan kreativitas dan inovasi.',
    ],
    structure: {
      pembina: 'Dr. Apt. Lailla Affianti Fauzi, S.Farm., M.Biomed.',
      ketua: 'Igma Lisna Padillah (Manajemen Pemasaran 2024)',
      wakilKetua: 'Fitriana Novitasari (Wakil I) & Siwi Listyaningrum (Wakil II)',
      divisions: [
        { name: 'Divisi Pengembangan Sumber Daya Anggota', head: 'Alya Hardyanti' },
        { name: 'Divisi Media Kreatif', head: 'Hana Puspita Dewi' },
        { name: 'Divisi Riset dan Prestasi', head: 'Asni Imelia Putri' },
        { name: 'Divisi Informasi dan Jaringan', head: 'Dimas Pratama' },
        { name: 'Divisi PKM Center', head: 'Amalia Husna Safira' },
      ],
    },
    programs: [
      { name: 'Student Development Program (SDP) Penelitian', description: 'Program pembinaan penalaran kritis, penulisan esai ilmiah & poster terintegrasi bagi mahasiswa baru berluaran publikasi E-Book & HAKI.' },
      { name: 'LITERSA (Lomba Inovasi Teknologi dan Literasi)', description: 'Kompetisi ilmiah tingkat provinsi yang mempertandingkan cabang esai, infografis, dan Business Model Canvas (BMC).' },
      { name: 'Research to Action', description: 'Program pengintegrasian riset, pengabdian masyarakat berbasis hasil penelitian, dan publikasi artikel ilmiah.' },
    ],
    achievements: [
      'Penerbitan E-Book Kompilasi Karya Ilmiah Mahasiswa Ber-HAKI Resmi Kemenkumham.',
      'Penyelenggara LITERSA dan Pendampingan Kontingen PKM & OLIVIA FV UNY.',
    ],
    contact: {
      instagram: 'https://instagram.com/ukmfreaction',
      email: 'ukmfreaction.fvuny@gmail.com',
    },
  },
  {
    id: 'ukm-kewirausahaan',
    type: 'ukm',
    name: 'UKMF Kewirausahaan FV UNY',
    shortName: 'KWU FV UNY',
    logo: '/src/assets/logos/ukm/logo-ukm-kwu.webp',
    badge: 'Wirausaha',
    badgeColor: 'gold',
    cardImage: '/src/assets/photos/ukm/card-ukm-kewirausahaan.webp',
    headerImage: '/src/assets/photos/ukm/header-ukm-kewirausahaan.webp',
    gallery: [
      '/src/assets/photos/ukm/gallery-ukm-kewirausahaan-1.webp',
      '/src/assets/photos/ukm/gallery-ukm-kewirausahaan-2.webp',
      '/src/assets/photos/ukm/gallery-ukm-kewirausahaan-3.webp',
    ],
    description:
      'UKMF Kewirausahaan Fakultas Vokasi UNY hadir sebagai organisasi kemahasiswaan yang menjadi ruang pengembangan minat, bakat, dan kompetensi mahasiswa di bidang kewirausahaan. Berperan dalam membangun karakter wirausaha yang kreatif, kolaboratif, dan berjiwa kepemimpinan melalui program pengembangan ide bisnis dan inkubasi usaha.',
    vision:
      'Menjadikan UKMF Kewirausahaan Fakultas Vokasi UNY sebagai pusat lahirnya wirausaha muda vokasi yang berkarakter, progresif, dan mampu beradaptasi dengan jiwa pemimpin mengikuti perkembangan zaman.',
    missions: [
      'Menciptakan lingkungan kekeluargaan di dalam organisasi.',
      'Menguatkan jiwa wirausaha dalam organisasi.',
      'Mendorong terciptanya ide-ide usaha baru yang kreatif melalui kompetensi internal maupun inkubasi bisnis.',
      'Mampu mencetak generasi unggul, kreatif, dan leadership yang mumpuni.',
    ],
    structure: {
      pembina: 'Nadia Husnaningtyas, S.Ak., M.Ak.',
      ketua: 'Ananda Fatoni Aprilian',
      wakilKetua: 'Gusti Ayu Widya',
      divisions: [
        { name: 'Biro Secretary & Biro Finance', head: 'Pengurus Kesekretariatan' },
        { name: 'Human Resource Development (HRD)', head: 'Pengurus HRD' },
        { name: 'Relationship & Communication (RC)', head: 'Pengurus RC' },
        { name: 'Business Education Training (BET)', head: 'Pengurus BET' },
        { name: 'Business Center (BC)', head: 'Pengurus BC' },
        { name: 'Creative Media Maker (CMM)', head: 'Pengurus CMM' },
      ],
    },
    programs: [
      { name: 'Voca Market', description: 'Wadah pemasaran dan penjualan produk usaha inovatif karya mahasiswa Vokasi UNY.' },
      { name: 'Visit Company', description: 'Kunjungan industri dan studi lapangan untuk memperluas wawasan praktis bisnis mahasiswa.' },
      { name: 'Branding High UKM', description: 'Program pendampingan dan penguatan branding digital produk UKM mahasiswa.' },
      { name: 'Student Development Program (SDP) KWU', description: 'Simulasi jualan langsung, pelatihan strategi pemasaran & branding, serta seminar kewirausahaan bagi mahasiswa baru.' },
    ],
    contact: {
      instagram: 'https://instagram.com/kwuvokasiuny',
      tiktok: 'https://www.tiktok.com/@kwuvokasiuny',
      youtube: 'https://www.youtube.com/@UKMFKWUVokasiUNY',
    },
  },
  {
    id: 'ukm-ksr',
    type: 'ukm',
    name: 'UKMF KSR PMI FV UNY',
    shortName: 'KSR PMI FV UNY',
    logo: '/src/assets/logos/ukm/logo-ukm-ksr.webp',
    badge: 'Kemanusiaan',
    badgeColor: 'sky',
    cardImage: '/src/assets/photos/ukm/card-ukm-ksr.webp',
    headerImage: '/src/assets/photos/ukm/header-ukm-ksr.webp',
    gallery: [
      '/src/assets/photos/ukm/gallery-ukm-ksr-1.webp',
      '/src/assets/photos/ukm/gallery-ukm-ksr-2.webp',
      '/src/assets/photos/ukm/gallery-ukm-ksr-3.webp',
    ],
    description:
      'UKMF KSR PMI Fakultas Vokasi UNY merupakan satuan relawan kemahasiswaan yang berfokus pada bidang kemanusiaan, pertolongan pertama, pelayanan kesehatan, kesiapsiagaan bencana, donor darah, dan pengabdian masyarakat berlandaskan Tujuh Prinsip Dasar Gerakan Internasional Palang Merah dan Bulan Sabit Merah.',
    vision:
      'Menjadi organisasi relawan yang unggul, profesional, dan berlandaskan nilai-nilai kemanusiaan dalam membentuk insan yang berempati serta berkontribusi aktif dalam pelayanan kepada masyarakat.',
    missions: [
      'Menanamkan dan menginternalisasikan nilai-nilai kemanusiaan, kepedulian sosial, serta empati kepada seluruh anggota dan civitas akademika.',
      'Meningkatkan kapasitas dan kompetensi anggota melalui pendidikan, pelatihan, dan kegiatan kerelawanan yang terstruktur dan berkelanjutan.',
      'Melaksanakan kegiatan kemanusiaan yang responsif, edukatif, dan sesuai dengan kebutuhan masyarakat.',
      'Mewujudkan lingkungan organisasi yang inklusif, kondusif, dan berorientasi pada pengembangan potensi anggota.',
      'Menjalin kerja sama yang sinergis dengan berbagai pihak dalam rangka memperluas dampak kegiatan kemanusiaan.',
      'Menumbuhkan semangat solidaritas dan pengabdian sebagai bentuk implementasi Tri Dharma Perguruan Tinggi dalam bidang pengabdian kepada masyarakat.',
    ],
    structure: {
      pembina: 'Palang Merah Indonesia & Dekanat FV UNY',
      ketua: 'Syifa\' Anifatul Maulida (2025)',
      wakilKetua: 'Esa Rizki Kinandra (2024)',
      divisions: [
        { name: 'Sekretaris', head: 'Zaahidatussaliimah (2024)' },
        { name: 'Bendahara', head: 'Ignasia Raasti Asmarajati Sietnio T. (2025)' },
        { name: 'Divisi Pendidikan dan Kepelatihan', head: 'Stefany Salma Shalikhah (2025)' },
        { name: 'Divisi Internal', head: 'Azzura Faadhilah Sonik (2024)' },
        { name: 'Divisi Eksternal', head: 'Nasywa Syaidina M. (2024)' },
      ],
    },
    programs: [
      { name: 'SDP x Kepelatihan UKM KSR PMI', description: 'Pelatihan pertolongan pertama pada kondisi mengancam nyawa (CPR, pengecekan kesadaran, posisi pemulihan) bersama PMI Kulon Progo.' },
      { name: 'Pendidikan & Pelatihan Kepalangmerahan', description: 'Pelatihan medis dasar, perawatan keluarga, manajemen kesehatan lapangan, dan kesiapsiagaan bencana.' },
      { name: 'Aksi Kemanusiaan & Donor Darah', description: 'Kegiatan pengabdian masyarakat, donor darah berkala, dan penanggulangan situasi darurat.' },
    ],
    contact: {
      instagram: 'https://instagram.com/ksrpmifvuny',
    },
  },
  {
    id: 'ukm-olahraga',
    type: 'ukm',
    name: 'UKMF Olahraga FV UNY',
    shortName: 'UKMF KO UNY',
    logo: '/src/assets/logos/ukm/logo-ukm-olahraga.webp',
    badge: 'Olahraga',
    badgeColor: 'blue',
    cardImage: '/src/assets/photos/ukm/card-ukm-olahraga.webp',
    headerImage: '/src/assets/photos/ukm/header-ukm-olahraga.webp',
    gallery: [
      '/src/assets/photos/ukm/gallery-ukm-olahraga-1.webp',
      '/src/assets/photos/ukm/gallery-ukm-olahraga-2.webp',
      '/src/assets/photos/ukm/gallery-ukm-olahraga-3.webp',
    ],
    description:
      'UKMF Olahraga (UKMFV KO UNY) berfokus pada pengembangan minat dan bakat mahasiswa Fakultas Vokasi UNY di bidang olahraga melalui pembinaan rutin dan kompetisi. Membina berbagai cabang olahraga di Kampus Wates (badminton, futsal, voli, basket, renang, pencak silat, panahan, sepak bola, karate) dan Kampus Gunungkidul (bulu tangkis, voli, mini soccer, basket).',
    vision:
      'Mewadahi serta mengembangkan kemampuan minat dan bakat bidang olahraga dengan berfokus pada pengembangan Fisik, Psikis, Teknik, serta Taktik guna mewujudkan sumber daya mahasiswa yang mumpuni dalam bidang olahraga.',
    missions: [
      'Memberikan wadah pengembangan minat dan bakat mahasiswa FV UNY dalam bidang olahraga.',
      'Mewujudkan serta meningkatkan prestasi mahasiswa dan mahasiswi FV UNY di bidang olahraga dengan fokus pada pengembangan Fisik, Psikis, Teknik, Sportifitas serta Taktik.',
      'Menjadi fasilitator dalam peningkatan kemampuan sdm bagi mahasiswa maupun mahasiswi FV UNY yang memiliki minat, bakat, serta berdedikasi tinggi dalam bidang olahraga.',
    ],
    structure: {
      pembina: 'BEM & Dekanat FV UNY',
      ketua: 'Afrizal Hilma. N.',
      wakilKetua: 'Pengurus Harian UKMF KO',
      divisions: [
        { name: 'Humas & Public Relation', head: 'M. Hafid Liverpudlian' },
        { name: 'Divisi Personalia', head: 'Pengurus Personalia' },
        { name: 'Divisi Medinfo', head: 'Pengurus Medinfo' },
        { name: 'Koordinator Cabor Kampus Wates', head: 'Pengurus Cabor Wates' },
        { name: 'Koordinator Cabor Kampus Gunungkidul', head: 'Pengurus Cabor Gunungkidul' },
      ],
    },
    programs: [
      { name: 'Komposisi', description: 'Program kerja sinergi BEM FV UNY, UKM Kesenian, dan UKMF KO untuk memfasilitasi mahasiswa meraih prestasi cabang olahraga.' },
      { name: 'SDP (Student Development Program) Keolahragaan', description: 'Program pengenalan, latihan terstruktur, dan pembinaan karakter sportivitas bagi mahasiswa baru.' },
      { name: 'Kepemimpinan Keolahragaan', description: 'Pembekalan sistem manajemen dan kepemimpinan keolahragaan bagi pengurus dan mahasiswa.' },
    ],
    contact: {
      instagram: 'https://instagram.com/ukmfv_olahraga',
      tiktok: 'https://www.tiktok.com/@ukmfv_olahraga',
      email: 'ukmfkouny@gmail.com',
      whatsapp: 'https://wa.me/628983024000',
    },
  },
];

export function getOrgById(id: string): OrgData | undefined {
  return orgs.find(o => o.id === id);
}

export function getOrgsByType(type: 'ormawa' | 'ukm'): OrgData[] {
  return orgs.filter(o => o.type === type);
}
