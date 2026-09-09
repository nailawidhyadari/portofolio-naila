# Portofolio — Naila Widhyadari

Website portofolio pribadi, dibangun dengan **Next.js 16** (App Router), **TypeScript**, dan **Tailwind CSS v4**. Tema gelap, satu halaman.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Struktur

| Path | Isi |
|------|-----|
| `src/data/site.ts` | **Semua konten** (profil, keahlian, kontak, daftar proyek). Edit di sini. |
| `src/components/` | Komponen section: `Nav`, `Hero`, `About`, `Projects`, `Contact`, `Footer` |
| `src/app/globals.css` | Token warna & tema gelap |
| `src/app/layout.tsx` | Metadata / SEO |

## Mengubah isi

Cukup edit `src/data/site.ts`:

- `profile` — nama, role, tagline, paragraf "tentang", statistik, daftar keahlian
- `contact` — nomor WhatsApp, Instagram, email (opsional)
- `projects` — daftar website beserta deskripsi & kontribusi

## Deploy

Terhubung ke **Vercel** — setiap `git push` ke branch `main` otomatis ter-deploy.

```bash
git add .
git commit -m "update konten"
git push
```
