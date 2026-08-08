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
  };
}

export const orgs: OrgData[] = [
  // ─── ORMAWA ───────────────────────────────────────────────────────────────
  {
    id: 'bem',
    type: 'ormawa',
    name: 'Badan Eksekutif Mahasiswa',
    shortName: 'BEM FV UNY',
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
    name: 'Himpunan Mahasiswa Bisnis & Keuangan',
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
    },
  },
  {
    id: 'hmdbk',
    type: 'ormawa',
    name: 'Himpunan Mahasiswa Departemen Bisnis & Keuangan',
    shortName: 'HMDBK',
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
    },
  },
  {
    id: 'hmdtm',
    type: 'ormawa',
    name: 'Himpunan Mahasiswa Departemen Teknik Mesin',
    shortName: 'HMDTM',
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
    },
  },
  {
    id: 'hmdts',
    type: 'ormawa',
    name: 'Himpunan Mahasiswa Departemen Teknik Sipil',
    shortName: 'HMDTS',
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
    headerImage: '/src/assets/photos/ormawa/header-hmok.webp',
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
    },
  },
  {
    id: 'hmve',
    type: 'ormawa',
    name: 'Himpunan Mahasiswa Vokasi Elektro',
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
    },
  },
];

export function getOrgById(id: string): OrgData | undefined {
  return orgs.find(o => o.id === id);
}

export function getOrgsByType(type: 'ormawa' | 'ukm'): OrgData[] {
  return orgs.filter(o => o.type === type);
}
