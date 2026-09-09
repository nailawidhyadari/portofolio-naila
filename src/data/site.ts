// =============================================================
//  DATA KONTEN PORTOFOLIO — ubah bagian ini kapan saja.
//  Semua teks di website diambil dari file ini.
// =============================================================

export const profile = {
  name: "Naila Widhyadari",
  role: "Web Developer",
  tagline:
    "Saya membangun website yang cepat, rapi, dan mudah dikelola — dari ide sampai online.",
  about: [
    "Halo, saya Naila Widhyadari. Saya seorang web developer yang berfokus pada pembuatan website untuk kebutuhan bisnis dan layanan.",
    "Selama beberapa tahun terakhir saya sudah membangun dan merilis sejumlah website yang aktif digunakan, mulai dari landing page layanan, platform bimbingan, sampai situs company profile.",
    "Saya terbiasa menangani keseluruhan proses: desain tampilan, pengembangan front-end, integrasi, sampai deployment ke server produksi.",
  ],
  // Ganti angka di bawah kalau perlu.
  stats: [
    { value: "5+", label: "Website dirilis" },
    { value: "3+", label: "Tahun pengalaman" },
    { value: "100%", label: "Proyek online" },
  ],
  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "HTML & CSS",
    "JavaScript",
    "WordPress",
    "SEO On-Page",
    "Git & GitHub",
    "Vercel",
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

export type Project = {
  name: string;
  url: string;
  year: string;
  category: string;
  summary: string;
  contributions: string[];
  stack: string[];
};

// -------------------------------------------------------------
//  PROYEK — teks di bawah ini masih placeholder umum.
//  Silakan sesuaikan "summary", "contributions", dan "year"
//  dengan detail yang sebenarnya.
// -------------------------------------------------------------
export const projects: Project[] = [
  {
    name: "bimbingandosen.com",
    url: "https://bimbingandosen.com",
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
    year: "2023",
    category: "Landing Page Layanan",
    summary:
      "Website informasi layanan konsultasi dan pendampingan skripsi dengan halaman detail layanan dan kontak.",
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
    url: "https://jasapembuatanskripsibandung.web.id",
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
