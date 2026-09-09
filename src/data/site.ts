// =============================================================
//  PORTFOLIO CONTENT — edit anything here.
//  Every piece of text on the site is pulled from this file.
// =============================================================

export const profile = {
  name: "Naila Widhyadari",
  role: "Web Developer",
  greeting: "Hi, I'm",
  tagline:
    "I build websites that are fast, clean, and easy to maintain — from the first idea all the way to production.",

  about: [
    "I'm Naila Widhyadari, a web developer based in Indonesia. I hold a bachelor's degree in Telecommunication Systems Engineering from Universitas Pendidikan Indonesia (UPI).",
    "My focus is building websites that load fast, stay easy to maintain, and are ready to grow — handling the whole path from layout and front-end development to SEO, performance, and deployment. I work across the stack with JavaScript, React, Next.js, PHP, and WordPress.",
    "I also bring hands-on experience with Google Cloud and AWS, Python, and digital marketing, so I think about a site as a whole: how it performs, how people find it, and how it converts. I'm currently a digital marketer at PT Cipherion Corp Indonesia while continuing to design and build websites.",
  ],

  stats: [
    { value: "5+", label: "Websites shipped" },
    { value: "4", label: "Companies & institutions" },
    { value: "6", label: "Certifications" },
  ],

  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "PHP",
    "WordPress",
    "HTML & CSS",
    "Tailwind CSS",
    "Node.js",
    "Python",
    "Google Cloud",
    "AWS Cloud",
    "SEO (On-Page)",
    "Digital Marketing",
    "Networking",
    "Git & GitHub",
    "Vercel",
    "Responsive Design",
  ],
};

export const contact = {
  whatsappNumber: "6285718861554", // international format for wa.me links
  whatsappDisplay: "+62 857-1886-1554",
  instagram: "naiiaawidhyadari",
  email: "", // optional — leave "" to hide
};

// =============================================================
//  WORK EXPERIENCE (reverse-chronological)
// =============================================================
export type Experience = {
  company: string;
  logo: string;
  logoAlt: string;
  role: string;
  period: string;
  description: string;
  current?: boolean;
};

export const experiences: Experience[] = [
  {
    company: "PT Cipherion Corp Indonesia",
    logo: "/logos/cipherion.png",
    logoAlt: "Cipherion logo",
    role: "Digital Marketing",
    period: "2026 · 1 month",
    description:
      "Running digital marketing activities for the company's products and services.",
    current: true,
  },
  {
    company: "PT Lentera Statistics Indonesia",
    logo: "/logos/lentera-statistik.png",
    logoAlt: "PT Lentera Statistics Indonesia logo",
    role: "Digital Marketing & Web Developer",
    period: "2026 · 2 months",
    description:
      "Built and maintained websites for the company's academic-guidance services and ran its digital marketing campaigns.",
  },
  {
    company: "Balai Besar Pengujian Perangkat Telekomunikasi (BBPPT)",
    logo: "/logos/bbppt-idth.png",
    logoAlt: "Komdigi — Indonesia Digital Test House (BBPPT) logo",
    role: "Device Test Engineer — SAR Testing",
    period: "2025 · 1 year",
    description:
      "Tested telecommunication devices in the SAR (Specific Absorption Rate) testing laboratory.",
  },
  {
    company: "Telkom Indonesia",
    logo: "/logos/telkom.svg",
    logoAlt: "Telkom Indonesia logo",
    role: "Accounting & Digital Marketing",
    period: "2024 · 1 year",
    description:
      "Handled accounting tasks and supported the team's digital marketing activities.",
  },
];

// =============================================================
//  CERTIFICATIONS & TRAINING (real data from source folder)
//  pdf: "" => card shows without a "view" button.
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
    title: "Cloud Practitioner Essentials (AWS Cloud Fundamentals)",
    issuer: "Dicoding × Amazon Web Services",
    date: "Jul 2024",
    pdf: "/certificates/aws-cloud-practitioner.pdf",
    tag: "Cloud",
  },
  {
    title: "DevCoach 137 — Front-End: How the Web Talks to a Server",
    issuer: "Dicoding Event",
    date: "Mar 2024",
    pdf: "/certificates/devcoach-137-frontend.pdf",
    tag: "Front-End",
  },
  {
    title: "Design & Content: Getting to Know PHP Frameworks (MOOCs)",
    issuer: "Universitas Terbuka",
    date: "Oct 2025",
    pdf: "/certificates/php-framework-ut.pdf",
    tag: "Back-End",
  },
  {
    title: 'Netclass "Exploring Cybersecurity and Networking" — Networking',
    issuer: "NETCOMP 3.0 — Universitas Gadjah Mada",
    date: "Oct 2024",
    pdf: "/certificates/netcomp-networking.pdf",
    tag: "Networking",
  },
  {
    title: "CONNECT Class: Effective Communication / Public Speaking",
    issuer: "Universitas Indonesia × Indonesia Digital Test House (BBPPT)",
    date: "Dec 2025",
    pdf: "/certificates/connect-class-public-speaking.pdf",
    tag: "Soft Skill",
  },
  {
    title:
      "Agricultural Automation System Design with Arduino & ESP32 (Passed, 40 hrs)",
    issuer: "BPVP Belitung — Ministry of Manpower, Republic of Indonesia",
    date: "May 2026",
    pdf: "", // intentionally not published: the file contains a home address
    tag: "IoT",
  },
];

// =============================================================
//  SELECTED WORK
//  Front-page screenshots live in /public/portfolio.
//  `summary` & `contributions` are still generic — adjust them
//  to the real scope of each project.
// =============================================================
export type Project = {
  name: string;
  title: string;
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
    title: "Bimbingan Dosen",
    url: "https://bimbingandosen.com",
    image: "/portfolio/bimbingandosen.jpg",
    year: "2024",
    category: "Service Platform",
    summary:
      "A platform connecting students with mentors for academic consultation and final-project guidance.",
    contributions: [
      "Built the page structure and main UI",
      "Service pages, ordering flow, and contact form",
      "Page-speed and on-page SEO work",
      "Deployment and domain setup",
    ],
    stack: ["Next.js", "Tailwind CSS", "SEO"],
  },
  {
    name: "bimbingancerdas.id",
    title: "Bimbingan Cerdas",
    url: "https://bimbingancerdas.id",
    image: "/portfolio/bimbingancerdas.jpg",
    year: "2024",
    category: "Mentoring Platform",
    summary:
      "A tutoring and academic-mentoring site with program pages and service-package details.",
    contributions: [
      "Landing-page design and implementation",
      "Program list and pricing components",
      "WhatsApp contact integration",
      "Hosting and .id domain setup",
    ],
    stack: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    name: "tuntasskripsi.com",
    title: "Tuntas Skripsi",
    url: "https://tuntasskripsi.com",
    image: "/portfolio/tuntasskripsi.jpg",
    year: "2023",
    category: "Service Landing Page",
    summary:
      "A landing page for thesis-completion mentoring, focused on turning visitors into leads.",
    contributions: [
      "Copywriting and page layout",
      "Testimonials, FAQ, and call-to-action sections",
      "Mobile layout optimisation",
      "Production deployment",
    ],
    stack: ["HTML & CSS", "JavaScript", "SEO"],
  },
  {
    name: "solusiskripsi.com",
    title: "Solusi Skripsi",
    url: "https://solusiskripsi.com",
    image: "/portfolio/solusiskripsi.jpg",
    year: "2023",
    category: "Service Landing Page",
    summary:
      "An information site for thesis consultation services, with detailed service pages and a consultation form.",
    contributions: [
      "Site layout and navigation",
      "Service pages and consultation flow",
      "Basic SEO and meta structure",
      "Domain and hosting configuration",
    ],
    stack: ["WordPress", "HTML & CSS", "SEO"],
  },
  {
    name: "jasapembuatanskripsibandung.web.id",
    title: "Ruang Ilmu Bandung",
    url: "https://www.jasapembuatanskripsibandung.web.id",
    image: "/portfolio/jasapembuatanskripsibandung.jpg",
    year: "2022",
    category: "Local Service Site",
    summary:
      "A local service site for the Bandung area, built around organic search for region-specific keywords.",
    contributions: [
      "Local-SEO oriented page structure",
      "Content writing and keyword placement",
      "Speed and responsive-layout tuning",
      "Deployment and maintenance",
    ],
    stack: ["WordPress", "SEO", "Responsive Design"],
  },
];
