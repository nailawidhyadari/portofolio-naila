// =============================================================
//  DATA KONTEN PORTOFOLIO — ubah bagian ini kapan saja.
//  Semua teks di website diambil dari file ini.
// =============================================================

export const profile = {
  name: "Naila Widhyadari",
  role: "Web Developer",
  tagline:
    "Saya membangun website yang cepat, rapi, dan mudah dikelola — dari ide sampai online.",

  // -----------------------------------------------------------
  //  TENTANG SAYA — PLACEHOLDER.
  //  Ganti paragraf di bawah dengan perkenalan versi Anda
  //  (kirimkan poin-poinnya, nanti dirapikan jadi paragraf).
  // -----------------------------------------------------------
  about: [
    "Halo, saya Naila Widhyadari — seorang web developer yang senang mengubah ide menjadi website yang benar-benar dipakai orang.",
    "Fokus saya adalah membangun tampilan yang bersih dan responsif, menata konten agar mudah ditemukan di mesin pencari, serta memastikan situs berjalan stabil setelah rilis.",
    "Saya pernah menjadi bagian dari tim di Telkom Indonesia, Balai Besar Pengujian Perangkat Telekomunikasi (BBPPT), dan PT Lentera Statistics Indonesia — pengalaman yang mengasah cara saya bekerja secara terstruktur dan detail.",
  ],

  // Ganti angka di bawah kalau perlu.
  stats: [
    { value: "5+", label: "Website dirilis" },
    { value: "3", label: "Instansi / perusahaan" },
    { value: "6", label: "Sertifikat" },
  ],

  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "HTML & CSS",
    "JavaScript",
    "PHP",
    "WordPress",
    "SEO On-Page",
    "Git & GitHub",
    "Vercel",
    "Networking Dasar",
    "AWS Cloud (Dasar)",
    "Responsive Design",
  ],
};

export const contact = {
  whatsappNumber: "6285718861554", // format internasional untuk link wa.me
  whatsappDisplay: "0857-1886-1554",
  instagram: "naiiaawidhyadari",
  // Email opsional — kosongkan ("") kalau tidak ingin ditampilkan.
  email: "",
};

// =============================================================
//  PENGALAMAN KERJA
//  role / period / description masih PLACEHOLDER —
//  kirimkan posisi, periode (bln–thn), dan tugas utamanya.
// =============================================================
export type Experience = {
  company: string;
  logo: string;
  logoAlt: string;
  role: string;
  period: string;
  description: string;
};

export const experiences: Experience[] = [
  {
    company: "Telkom Indonesia",
    logo: "/logos/telkom.svg",
    logoAlt: "Logo Telkom Indonesia",
    role: "— (isi posisi Anda)",
    period: "— (bln thn – bln thn)",
    description:
      "Placeholder: 1–2 kalimat tentang peran dan tugas utama Anda selama di Telkom Indonesia.",
  },
  {
    company: "Balai Besar Pengujian Perangkat Telekomunikasi (BBPPT)",
    logo: "/logos/bbppt-idth.png",
    logoAlt: "Logo Komdigi — Indonesia Digital Test House (BBPPT)",
    role: "— (isi posisi Anda)",
    period: "— (bln thn – bln thn)",
    description:
      "Placeholder: 1–2 kalimat tentang peran dan tugas utama Anda selama di BBPPT / IDTH.",
  },
  {
    company: "PT Lentera Statistics Indonesia",
    logo: "/logos/lentera-statistik.png",
    logoAlt: "Logo PT Lentera Statistics Indonesia",
    role: "— (isi posisi Anda)",
    period: "— (bln thn – bln thn)",
    description:
      "Placeholder: 1–2 kalimat tentang peran Anda — mis. membangun dan memelihara website layanan bimbingan akademik.",
  },
];

// =============================================================
//  SERTIFIKAT (data asli dari folder "bahan web")
//  pdf: "" berarti kartu tampil tanpa tombol lihat PDF.
// =============================================================
export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  pdf: string;
  tag: string;
};

export const certificates: Certificate[] = [
  {
    title: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
    issuer: "Dicoding × Amazon Web Services",
    date: "Juli 2024",
    pdf: "/certificates/aws-cloud-practitioner.pdf",
    tag: "Cloud",
  },
  {
    title:
      "DevCoach 137 — Front-End: Belajar Cara Berkomunikasi Web dengan Server",
    issuer: "Dicoding Event",
    date: "Maret 2024",
    pdf: "/certificates/devcoach-137-frontend.pdf",
    tag: "Front-End",
  },
  {
    title: "Desain dan Konten Mengenal PHP Framework (MOOCs)",
    issuer: "Universitas Terbuka",
    date: "Oktober 2025",
    pdf: "/certificates/php-framework-ut.pdf",
    tag: "Back-End",
  },
  {
    title: 'Netclass "Exploring Cybersecurity and Networking" — Networking',
    issuer: "NETCOMP 3.0 — Universitas Gadjah Mada",
    date: "Oktober 2024",
    pdf: "/certificates/netcomp-networking.pdf",
    tag: "Networking",
  },
  {
    title: "CONNECT Class: Effective Communication / Public Speaking",
    issuer: "Universitas Indonesia × Indonesia Digital Test House (BBPPT)",
    date: "Desember 2025",
    pdf: "/certificates/connect-class-public-speaking.pdf",
    tag: "Soft Skill",
  },
  {
    title:
      "Perancangan Sistem Otomatisasi Pertanian Berbasis Arduino & ESP32 (Lulus, 40 jam)",
    issuer: "BPVP Belitung — Kementerian Ketenagakerjaan RI",
    date: "Mei 2026",
    pdf: "", // sengaja tidak dipublikasikan: file memuat alamat rumah
    tag: "IoT",
  },
];

// =============================================================
//  PROYEK
//  Screenshot halaman depan tiap situs ada di /public/portfolio.
//  "summary" & "contributions" masih placeholder umum —
//  silakan sesuaikan dengan detail sebenarnya.
// =============================================================
export type Project = {
  name: string;
  url: string;
  image: string;
  year: string;
  category: string;
  summary: string;
  contributions: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    name: "bimbingandosen.com",
    url: "https://bimbingandosen.com",
    image: "/portfolio/bimbingandosen.jpg",
    year: "2024",
    category: "Platform Layanan",
    summary:
      "Website platform yang menghubungkan mahasiswa dengan pembimbing untuk kebutuhan konsultasi akademik dan tugas akhir.",
    contributions: [
      "Membangun struktur halaman dan tampilan utama",
      "Menyusun halaman layanan, alur pemesanan, dan formulir kontak",
      "Optimasi kecepatan halaman dan SEO on-page",
      "Deployment dan konfigurasi domain",
    ],
    stack: ["Next.js", "Tailwind CSS", "SEO On-Page"],
  },
  {
    name: "bimbingancerdas.id",
    url: "https://bimbingancerdas.id",
    image: "/portfolio/bimbingancerdas.jpg",
    year: "2024",
    category: "Platform Bimbingan",
    summary:
      "Situs layanan bimbingan belajar dan pendampingan akademik dengan halaman program serta informasi paket layanan.",
    contributions: [
      "Desain dan implementasi landing page",
      "Pembuatan komponen daftar program dan harga",
      "Integrasi tombol kontak WhatsApp",
      "Pengaturan hosting dan domain .id",
    ],
    stack: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    name: "tuntasskripsi.com",
    url: "https://tuntasskripsi.com",
    image: "/portfolio/tuntasskripsi.jpg",
    year: "2023",
    category: "Landing Page Layanan",
    summary:
      "Landing page layanan pendampingan penyelesaian skripsi, difokuskan pada konversi pengunjung menjadi calon klien.",
    contributions: [
      "Menyusun copywriting dan tata letak halaman",
      "Membuat bagian testimoni, FAQ, dan call-to-action",
      "Optimasi tampilan mobile",
      "Deployment ke produksi",
    ],
    stack: ["HTML & CSS", "JavaScript", "SEO On-Page"],
  },
  {
    name: "solusiskripsi.com",
    url: "https://solusiskripsi.com",
    image: "/portfolio/solusiskripsi.jpg",
    year: "2023",
    category: "Landing Page Layanan",
    summary:
      "Website informasi layanan konsultasi dan pendampingan skripsi dengan halaman detail layanan dan formulir konsultasi.",
    contributions: [
      "Membangun tampilan dan navigasi website",
      "Membuat halaman layanan dan alur konsultasi",
      "Penyesuaian SEO dasar dan struktur meta",
      "Konfigurasi domain dan hosting",
    ],
    stack: ["WordPress", "HTML & CSS", "SEO On-Page"],
  },
  {
    name: "jasapembuatanskripsibandung.web.id",
    url: "https://www.jasapembuatanskripsibandung.web.id",
    image: "/portfolio/jasapembuatanskripsibandung.jpg",
    year: "2022",
    category: "Company Profile / Layanan Lokal",
    summary:
      "Situs layanan lokal area Bandung dengan penekanan pada pencarian organik untuk kata kunci wilayah tertentu.",
    contributions: [
      "Pembuatan struktur halaman berorientasi SEO lokal",
      "Penulisan konten dan penataan kata kunci",
      "Optimasi kecepatan dan tampilan responsif",
      "Deployment dan pemeliharaan",
    ],
    stack: ["WordPress", "SEO On-Page", "Responsive Design"],
  },
];
