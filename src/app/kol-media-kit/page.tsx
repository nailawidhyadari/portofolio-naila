import type { Metadata } from "next";
import { Cormorant_Garamond, Parisienne, Urbanist } from "next/font/google";
import KolMediaKit from "./KolMediaKit";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
});

const script = Parisienne({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

const body = Urbanist({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-body",
});

const kolSiteUrl = "https://kol-media-kit-template.vercel.app";
const kolTitle = "Alya Maheswari — Media Kit & Rate Card";
const kolDescription =
  "Media kit & rate card Alya Maheswari: portofolio konten, audience insight, dan paket kerja sama untuk brand.";

export const metadata: Metadata = {
  metadataBase: new URL(kolSiteUrl),
  title: kolTitle,
  description: kolDescription,
  robots: { index: false, follow: false },
  authors: [{ name: "Alya Maheswari" }],
  keywords: undefined,
  openGraph: {
    title: kolTitle,
    description: kolDescription,
    url: kolSiteUrl,
    siteName: kolTitle,
    images: ["/kol-media-kit/hero-photo.jpg"],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: kolTitle,
    description: kolDescription,
    images: ["/kol-media-kit/hero-photo.jpg"],
  },
};

export default function KolMediaKitPage() {
  return (
    <div className={`${display.variable} ${script.variable} ${body.variable}`}>
      <KolMediaKit />
    </div>
  );
}
