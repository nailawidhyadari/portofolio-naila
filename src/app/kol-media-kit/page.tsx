import type { Metadata } from "next";
import { Cormorant_Garamond, Parisienne, Urbanist } from "next/font/google";
import KolMediaKit from "./KolMediaKit";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const script = Parisienne({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

const body = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Media Kit Template — KOL / Influencer",
  description:
    "Contoh template media kit & rate card untuk klien KOL/influencer: portofolio, audience insight, dan rate card siap pakai.",
  robots: { index: false, follow: false },
};

export default function KolMediaKitPage() {
  return (
    <div className={`${display.variable} ${script.variable} ${body.variable}`}>
      <KolMediaKit />
    </div>
  );
}
