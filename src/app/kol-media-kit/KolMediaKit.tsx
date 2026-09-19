"use client";

import { useEffect, useRef, useState } from "react";
import "./kol-media-kit.css";

type CSSVars = React.CSSProperties & Record<`--${string}`, string | number>;

const TIKTOK_PROFILE_URL = "https://www.tiktok.com/@maudifarah";

const NAV_LINKS = [
  { href: "#kmk-about", label: "Tentang" },
  { href: "#kmk-stats", label: "Audience" },
  { href: "#kmk-portfolio", label: "Portofolio" },
  { href: "#kmk-ratecard", label: "Rate Card" },
  { href: "#kmk-terms", label: "S&K" },
];

const BRAND_LOGOS = [
  "/kol-media-kit/logos/logo-01.png",
  "/kol-media-kit/logos/logo-02.png",
  "/kol-media-kit/logos/logo-03.png",
  "/kol-media-kit/logos/logo-04.png",
  "/kol-media-kit/logos/logo-05.png",
  "/kol-media-kit/logos/logo-06.png",
  "/kol-media-kit/logos/logo-07.png",
  "/kol-media-kit/logos/logo-08.png",
  "/kol-media-kit/logos/logo-09.png",
  "/kol-media-kit/logos/logo-10.png",
  "/kol-media-kit/logos/logo-11.png",
  "/kol-media-kit/logos/logo-12.png",
  "/kol-media-kit/logos/logo-13.png",
  "/kol-media-kit/logos/logo-14.png",
  "/kol-media-kit/logos/logo-15.png",
  "/kol-media-kit/logos/logo-16.png",
  "/kol-media-kit/logos/logo-17.png",
  "/kol-media-kit/logos/logo-18.png",
  "/kol-media-kit/logos/logo-19.png",
  "/kol-media-kit/logos/logo-20.png",
  "/kol-media-kit/logos/logo-21.png",
  "/kol-media-kit/logos/logo-22.png",
  "/kol-media-kit/logos/logo-23.png",
  "/kol-media-kit/logos/logo-24.png",
  "/kol-media-kit/logos/logo-25.png",
  "/kol-media-kit/logos/logo-26.png",
  "/kol-media-kit/logos/logo-27.png",
  "/kol-media-kit/logos/logo-28.png",
  "/kol-media-kit/logos/logo-29.png",
  "/kol-media-kit/logos/logo-30.png",
  "/kol-media-kit/logos/logo-31.png",
  "/kol-media-kit/logos/logo-32.png",
  "/kol-media-kit/logos/logo-33.png",
  "/kol-media-kit/logos/logo-34.png",
  "/kol-media-kit/logos/logo-35.png",
  "/kol-media-kit/logos/logo-36.png",
  "/kol-media-kit/logos/logo-37.png",
  "/kol-media-kit/logos/logo-38.png",
  "/kol-media-kit/logos/logo-39.png",
  "/kol-media-kit/logos/logo-40.png",
  "/kol-media-kit/logos/logo-41.png",
  "/kol-media-kit/logos/logo-42.png",
  "/kol-media-kit/logos/logo-43.png",
  "/kol-media-kit/logos/logo-44.png",
  "/kol-media-kit/logos/logo-45.png",
  "/kol-media-kit/logos/logo-46.png",
  "/kol-media-kit/logos/logo-48.png",
  "/kol-media-kit/logos/logo-49.png",
];

const PORTFOLIO_ITEMS = [
  {
    img: "/kol-media-kit/portfolio-1-stroller.png",
    badge: "TikTok",
    cap: "Stroller Untuk Mommy Mommy Mandiri",
    sub: "Konten Organik",
  },
  {
    img: "/kol-media-kit/portfolio-2-mpasi.png",
    badge: "TikTok",
    cap: "Best Buy Alat MPASI yang Kepake Tiap Hari",
    sub: "Review Produk",
  },
  {
    img: "/kol-media-kit/portfolio-3-dayinlife.png",
    badge: "TikTok",
    cap: "A Day in My Life",
    sub: "Konten Organik",
  },
  {
    img: "/kol-media-kit/portfolio-4-lukasc.png",
    badge: "TikTok",
    cap: "Luka SC Kok Sembuhnya Lama?",
    sub: "Konten Organik",
  },
  {
    img: "/kol-media-kit/portfolio-5-somtam.png",
    badge: "TikTok",
    cap: "Makan Som Tam Part 200",
    sub: "Konten Organik",
  },
];

const TERMS = [
  "Brand wajib mengirimkan Statement of Work (SOW) sebelum produksi dimulai.",
  "Revisi maksimal 2x tanpa biaya tambahan; revisi berikutnya dikenakan additional cost.",
  'Hak cipta konten tetap milik KOL, kecuali paket "Owning Content" dipilih.',
  "Pembayaran dilakukan setelah draft disetujui dan sebelum tayang, sesuai SPK/MoU.",
  "Konten yang belum diterima mendekati tanggal tayang akan dijadwalkan ulang.",
  "KOL tidak bertanggung jawab atas performa algoritma platform (FYP/Explore).",
  "Kunjungan store/event hanya tersedia pada akhir pekan (Sabtu–Minggu).",
  "Harga pada rate card belum termasuk pajak.",
  "Sistem DP berlaku; pelunasan maksimal H+7 setelah konten tayang.",
  "Brief yang diberikan tidak boleh overclaim atau melanggar etika periklanan.",
];

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M6 4l14 8-14 8V4z" />
    </svg>
  );
}

export default function KolMediaKit() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [rateTab, setRateTab] = useState<"tiktok" | "instagram" | "bundling">("tiktok");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#kmk-hero");

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // scrollspy: highlight the nav link for the section currently in view
    const sectionIds = NAV_LINKS.map((l) => l.href.slice(1));
    const sections = sectionIds
      .map((id) => root.querySelector<HTMLElement>(`#${id}`))
      .filter((el): el is HTMLElement => Boolean(el));
    const spyIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((el) => spyIo.observe(el));

    // scroll reveal
    const revealEls = root.querySelectorAll<HTMLElement>(".kmk-reveal");
    const revealIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("kmk-in");
            revealIo.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    revealEls.forEach((el) => revealIo.observe(el));

    // bar fill widths
    const bars = root.querySelectorAll<HTMLElement>(".kmk-bar-fill");
    const barIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.width = `${el.getAttribute("data-width")}%`;
            barIo.unobserve(el);
          }
        });
      },
      { threshold: 0.4 },
    );
    bars.forEach((b) => barIo.observe(b));

    // count up
    const counters = root.querySelectorAll<HTMLElement>("[data-count]");
    const countIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const target = parseFloat(el.getAttribute("data-count") || "0");
          const suffix = el.getAttribute("data-suffix") || "";
          const decimals = parseInt(el.getAttribute("data-decimal") || "0", 10);
          const duration = reduceMotion ? 1 : 1400;
          let start: number | null = null;
          function step(ts: number) {
            if (start === null) start = ts;
            const p = Math.min((ts - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = (decimals ? (target * eased).toFixed(decimals) : Math.round(target * eased).toString()) + suffix;
            if (p < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
          countIo.unobserve(el);
        });
      },
      { threshold: 0.5 },
    );
    counters.forEach((c) => countIo.observe(c));

    // tilt + parallax (skip entirely when reduced motion is requested)
    const tiltCleanups: Array<() => void> = [];
    if (!reduceMotion) {
      root.querySelectorAll<HTMLElement>(".kmk-tilt .kmk-port-inner").forEach((card) => {
        const onMove = (e: MouseEvent) => {
          const r = card.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          card.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-4px) scale(1.05)`;
        };
        const onLeave = () => {
          card.style.transform = "rotateY(0deg) rotateX(0deg) translateY(0) scale(1)";
        };
        card.addEventListener("mousemove", onMove);
        card.addEventListener("mouseleave", onLeave);
        tiltCleanups.push(() => {
          card.removeEventListener("mousemove", onMove);
          card.removeEventListener("mouseleave", onLeave);
        });
      });

      root.querySelectorAll<HTMLElement>(".kmk-hero, .kmk-cta").forEach((zone) => {
        const onMove = (e: MouseEvent) => {
          const r = zone.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          zone.querySelectorAll<HTMLElement>(".kmk-float").forEach((f, i) => {
            const depth = ((i % 3) + 1) * 8;
            f.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
          });
        };
        zone.addEventListener("mousemove", onMove);
        tiltCleanups.push(() => zone.removeEventListener("mousemove", onMove));
      });
    }

    return () => {
      spyIo.disconnect();
      revealIo.disconnect();
      barIo.disconnect();
      countIo.disconnect();
      tiltCleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <div className="kmk-root" ref={rootRef}>
      <nav className="kmk-nav">
        <div className="kmk-brand">
          Alya <em>Maheswari</em>
        </div>
        <ul className={`kmk-navlinks${menuOpen ? " kmk-open" : ""}`}>
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={activeSection === l.href ? "kmk-current" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="kmk-nav-actions">
          <a href="#kmk-contact" className="kmk-btn kmk-btn-gold" style={{ padding: "10px 22px", fontSize: ".82rem" }}>
            Kolaborasi
          </a>
          <button
            type="button"
            className={`kmk-menu-btn${menuOpen ? " kmk-open" : ""}`}
            aria-label="Buka menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <header className="kmk-hero kmk-wrap" id="kmk-hero">
        <div className="kmk-hero-grid">
          <div>
            <div className="kmk-hero-tag kmk-reveal">Media Kit &amp; Rate Card 2026</div>
            <h1 className="kmk-reveal" style={{ "--i": 1 } as CSSVars}>
              <span className="kmk-script">dengan cinta,</span>Alya Maheswari
            </h1>
            <p className="kmk-lede kmk-reveal" style={{ "--i": 2 } as CSSVars}>
              Beauty, mom life &amp; everyday story content creator asal Jakarta. Menemani 180K+ audiens lewat konten
              jujur, hangat, dan detail — dari skincare shelf sampai drama emak-emak sehari-hari.
            </p>
            <div className="kmk-hero-actions kmk-reveal" style={{ "--i": 3 } as CSSVars}>
              <a href="#kmk-ratecard" className="kmk-btn kmk-btn-gold">
                Lihat Rate Card
              </a>
              <a href="#kmk-contact" className="kmk-btn kmk-btn-ghost">
                Chat via WhatsApp
              </a>
            </div>
            <div className="kmk-stat-row kmk-reveal" style={{ "--i": 4 } as CSSVars}>
              <div className="kmk-stat-chip">
                <span className="kmk-num">182K</span>
                <span className="kmk-lbl">TikTok Followers</span>
              </div>
              <div className="kmk-stat-chip">
                <span className="kmk-num">9.4M</span>
                <span className="kmk-lbl">Total Likes</span>
              </div>
              <div className="kmk-stat-chip">
                <span className="kmk-num">24.3K</span>
                <span className="kmk-lbl">Instagram Followers</span>
              </div>
              <div className="kmk-stat-chip">
                <span className="kmk-num">8.6%</span>
                <span className="kmk-lbl">Engagement Rate</span>
              </div>
            </div>
          </div>
          <div className="kmk-photo-stage">
            <div className="kmk-arch-ring" />
            <div className="kmk-arch">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/kol-media-kit/hero-photo.jpg" alt="Alya Maheswari" className="kmk-arch-photo" />
            </div>
            <svg
              className="kmk-float kmk-drift"
              style={{ top: "-14px", right: "10px", width: "34px" }}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#B98A4E"
              strokeWidth="1.2"
            >
              <path d="M12 2c1 3 3 5 6 6-3 1-5 3-6 6-1-3-3-5-6-6 3-1 5-3 6-6Z" />
            </svg>
            <svg className="kmk-float kmk-drift kmk-d2" style={{ bottom: "8px", left: "-18px", width: "26px" }} viewBox="0 0 24 24" fill="#C9808C">
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
        </div>
      </header>

      <div className="kmk-marquee-band">
        <p className="kmk-marquee-label">Dipercaya oleh 30+ brand</p>
        <div className="kmk-marquee-track">
          {[...BRAND_LOGOS, ...BRAND_LOGOS].map((src, i) => (
            <span className="kmk-logo-chip" key={i}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" loading="lazy" />
            </span>
          ))}
        </div>
      </div>

      <section id="kmk-about" className="kmk-wrap">
        <svg
          className="kmk-float kmk-drift kmk-d2"
          style={{ top: "6px", right: "4%", width: "20px" }}
          viewBox="0 0 24 24"
          fill="#C9808C"
        >
          <circle cx="12" cy="12" r="3" />
        </svg>
        <div className="kmk-about-grid">
          <div>
            <div className="kmk-eyebrow kmk-reveal">tentang</div>
            <h2 className="kmk-reveal" style={{ "--i": 1, fontSize: "clamp(1.9rem,3.6vw,2.6rem)", marginTop: "10px" } as CSSVars}>
              Cerita sehari-hari yang terasa dekat
            </h2>
            <p className="kmk-reveal" style={{ "--i": 2, marginTop: "18px", maxWidth: "52ch" } as CSSVars}>
              Sejak 2021, Alya membangun komunitas lewat konten yang relate: review jujur tanpa filter berlebihan,
              momen mengasuh anak yang apa adanya, dan gaya hidup rumahan yang estetik tapi tetap membumi. Brand fit
              terkuat: beauty &amp; skincare, ibu &amp; bayi, home living.
            </p>
            <div className="kmk-pillars kmk-reveal" style={{ "--i": 3 } as CSSVars}>
              <span className="kmk-pillar">Beauty &amp; Skincare</span>
              <span className="kmk-pillar">Mom &amp; Baby</span>
              <span className="kmk-pillar">Daily Vlog</span>
              <span className="kmk-pillar">Home Living</span>
            </div>
          </div>
          <div className="kmk-collage kmk-reveal" style={{ "--i": 2 } as CSSVars}>
            <div className="kmk-cell kmk-c1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/kol-media-kit/about-1-parenting.jpg" alt="Momen gentle parenting bersama anak" />
            </div>
            <div className="kmk-cell kmk-c2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/kol-media-kit/about-2-athome.jpg" alt="Momen di rumah bersama anak" />
            </div>
            <div className="kmk-cell kmk-c3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/kol-media-kit/about-3-daily.jpg" alt="Keseharian sebagai ibu satu anak" />
            </div>
            <div className="kmk-cell kmk-c4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/kol-media-kit/about-4-diet.jpg" alt="Momen keseharian lainnya" />
            </div>
          </div>
        </div>
      </section>

      <section id="kmk-stats" className="kmk-stats-band">
        <div className="kmk-wrap">
          <div className="kmk-eyebrow kmk-reveal">audience &amp; performa</div>
          <h2 className="kmk-reveal" style={{ "--i": 1, fontSize: "clamp(1.9rem,3.6vw,2.6rem)", marginTop: "10px" } as CSSVars}>
            Angka yang berbicara
          </h2>
          <div className="kmk-metric-grid">
            <div className="kmk-metric kmk-reveal" style={{ "--i": 1 } as CSSVars}>
              <span className="kmk-num" data-count="182" data-suffix="K">
                0
              </span>
              <div className="kmk-lbl">TikTok Followers</div>
            </div>
            <div className="kmk-metric kmk-reveal" style={{ "--i": 2 } as CSSVars}>
              <span className="kmk-num" data-count="54" data-suffix="M">
                0
              </span>
              <div className="kmk-lbl">Post Views / bln</div>
            </div>
            <div className="kmk-metric kmk-reveal" style={{ "--i": 3 } as CSSVars}>
              <span className="kmk-num" data-count="8.6" data-suffix="%" data-decimal="1">
                0
              </span>
              <div className="kmk-lbl">Engagement Rate</div>
            </div>
            <div className="kmk-metric kmk-reveal" style={{ "--i": 4 } as CSSVars}>
              <span className="kmk-num" data-count="81" data-suffix="%">
                0
              </span>
              <div className="kmk-lbl">Audiens Wanita</div>
            </div>
          </div>
          <div className="kmk-insight-grid">
            <div className="kmk-reveal" style={{ "--i": 1 } as CSSVars}>
              {[
                { label: "Perempuan", value: 81 },
                { label: "Usia 18–24", value: 41 },
                { label: "Usia 25–34", value: 47 },
                { label: "Usia 35+", value: 12 },
              ].map((row) => (
                <div className="kmk-bar-group" key={row.label}>
                  <div className="kmk-head">
                    <span>{row.label}</span>
                    <span>{row.value}%</span>
                  </div>
                  <div className="kmk-bar-track">
                    <span className="kmk-bar-fill" data-width={row.value} />
                  </div>
                </div>
              ))}
            </div>
            <div className="kmk-reveal" style={{ "--i": 2 } as CSSVars}>
              <div className="kmk-head" style={{ marginBottom: "14px" }}>
                <span>Top Lokasi</span>
              </div>
              <ul className="kmk-city-list">
                {[
                  { city: "Jakarta", pct: 28 },
                  { city: "Bandung", pct: 14 },
                  { city: "Surabaya", pct: 11 },
                  { city: "Lainnya", pct: 47 },
                ].map((row) => (
                  <li key={row.city}>
                    <span className="kmk-city-name">{row.city}</span>
                    <span className="kmk-bar-track">
                      <span className="kmk-bar-fill" data-width={row.pct} />
                    </span>
                    <span className="kmk-pct">{row.pct}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="kmk-divider" aria-hidden="true">
          <svg viewBox="0 0 1440 70" preserveAspectRatio="none">
            <path
              d="M0,32 C240,64 480,64 720,40 C960,16 1200,8 1440,32 L1440,70 L0,70 Z"
              style={{ fill: "var(--cream)" }}
            />
          </svg>
        </div>
      </section>

      <section id="kmk-portfolio" className="kmk-portfolio kmk-wrap">
        <svg
          className="kmk-float kmk-drift"
          style={{ top: "-6px", right: "6%", width: "26px" }}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#B98A4E"
          strokeWidth="1.2"
        >
          <path d="M12 2c1 3 3 5 6 6-3 1-5 3-6 6-1-3-3-5-6-6 3-1 5-3 6-6Z" />
        </svg>
        <div className="kmk-eyebrow kmk-reveal">portofolio</div>
        <h2 className="kmk-reveal" style={{ "--i": 1, fontSize: "clamp(1.9rem,3.6vw,2.6rem)", marginTop: "10px" } as CSSVars}>
          Konten &amp; endorsement terpilih
        </h2>
        <div className="kmk-port-grid">
          {PORTFOLIO_ITEMS.map((item, i) => (
            <div key={item.img} className="kmk-port-card kmk-show kmk-tilt" style={{ "--i": i + 1 } as CSSVars}>
              <a
                className="kmk-port-inner"
                href={TIKTOK_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Tonton "${item.cap}" di TikTok @maudifarah`}
              >
                <div className="kmk-port-thumb">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.img} alt={item.cap} loading="lazy" />
                  <span className="kmk-port-badge">{item.badge}</span>
                  <div className="kmk-play">
                    <PlayIcon />
                  </div>
                </div>
                <div className="kmk-port-cap">{item.cap}</div>
                <div className="kmk-port-sub">{item.sub}</div>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="kmk-ratecard" className="kmk-ratecard kmk-wrap">
        <div className="kmk-eyebrow kmk-reveal">rate card</div>
        <h2 className="kmk-reveal" style={{ "--i": 1, fontSize: "clamp(1.9rem,3.6vw,2.6rem)", marginTop: "10px" } as CSSVars}>
          Paket kerja sama
        </h2>
        <p className="kmk-reveal" style={{ "--i": 2, marginTop: "12px", maxWidth: "56ch" } as CSSVars}>
          Harga belum termasuk pajak. Detail lengkap ada di Syarat &amp; Ketentuan.
        </p>
        <div className="kmk-rate-tabs kmk-reveal" style={{ "--i": 3 } as CSSVars}>
          {(["tiktok", "instagram", "bundling"] as const).map((t) => (
            <button
              key={t}
              type="button"
              className={`kmk-filter-btn${rateTab === t ? " kmk-active" : ""}`}
              onClick={() => setRateTab(t)}
            >
              {t === "tiktok" ? "TikTok" : t === "instagram" ? "Instagram" : "Paket Bundling"}
            </button>
          ))}
        </div>

        <div className={`kmk-rate-panel${rateTab === "tiktok" ? " kmk-show" : ""}`}>
          <ul className="kmk-rate-list">
            <li>
              <span className="kmk-r-name">
                TikTok Review Video<span className="kmk-r-note">15–90 detik</span>
              </span>
              <span className="kmk-r-dots" />
              <span className="kmk-r-price">Rp 700rb</span>
            </li>
            <li>
              <span className="kmk-r-name">
                A Day in My Life / Daily Vlog<span className="kmk-r-note">60–120 detik</span>
              </span>
              <span className="kmk-r-dots" />
              <span className="kmk-r-price">Rp 1,2jt</span>
            </li>
            <li>
              <span className="kmk-r-name">Visit Store / Event Attendance Only</span>
              <span className="kmk-r-dots" />
              <span className="kmk-r-price">Rp 1,5jt</span>
            </li>
            <li>
              <span className="kmk-r-name">Visit Store incl. TikTok Video</span>
              <span className="kmk-r-dots" />
              <span className="kmk-r-price">Rp 2jt</span>
            </li>
            <li>
              <span className="kmk-r-name">TikTok Story</span>
              <span className="kmk-r-dots" />
              <span className="kmk-r-price">Rp 350rb</span>
            </li>
          </ul>
          <div className="kmk-addendum">
            <h3>Additional Request</h3>
            <ul className="kmk-rate-list kmk-rate-two-col">
              <li>
                <span className="kmk-r-name">Yellow Cart</span>
                <span className="kmk-r-dots" />
                <span className="kmk-r-price">Rp 150rb</span>
              </li>
              <li>
                <span className="kmk-r-name">1 Minggu Pin Konten</span>
                <span className="kmk-r-dots" />
                <span className="kmk-r-price">Rp 400rb</span>
              </li>
              <li>
                <span className="kmk-r-name">
                  Owning Content <span className="kmk-r-note">selamanya</span>
                </span>
                <span className="kmk-r-dots" />
                <span className="kmk-r-price">Rp 2jt</span>
              </li>
              <li>
                <span className="kmk-r-name">Code Boost 30 Hari</span>
                <span className="kmk-r-dots" />
                <span className="kmk-r-price">Rp 250rb</span>
              </li>
              <li>
                <span className="kmk-r-name">Code Boost 365 Hari</span>
                <span className="kmk-r-dots" />
                <span className="kmk-r-price">Rp 500rb</span>
              </li>
              <li>
                <span className="kmk-r-name">Family / Baby in Frame</span>
                <span className="kmk-r-dots" />
                <span className="kmk-r-price">Rp 300rb</span>
              </li>
              <li>
                <span className="kmk-r-name">Mirroring Reels / IGS</span>
                <span className="kmk-r-dots" />
                <span className="kmk-r-price">Rp 250rb</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={`kmk-rate-panel${rateTab === "instagram" ? " kmk-show" : ""}`}>
          <ul className="kmk-rate-list kmk-rate-two-col">
            <li>
              <span className="kmk-r-name">Instagram Reels</span>
              <span className="kmk-r-dots" />
              <span className="kmk-r-price">Rp 450rb</span>
            </li>
            <li>
              <span className="kmk-r-name">Instagram Feed Video</span>
              <span className="kmk-r-dots" />
              <span className="kmk-r-price">Rp 450rb</span>
            </li>
            <li>
              <span className="kmk-r-name">Instagram Story Session</span>
              <span className="kmk-r-dots" />
              <span className="kmk-r-price">Rp 350rb</span>
            </li>
            <li>
              <span className="kmk-r-name">Instagram Story</span>
              <span className="kmk-r-dots" />
              <span className="kmk-r-price">Rp 100rb</span>
            </li>
            <li>
              <span className="kmk-r-name">Instagram Feed Photo</span>
              <span className="kmk-r-dots" />
              <span className="kmk-r-price">Rp 250rb</span>
            </li>
            <li>
              <span className="kmk-r-name">
                Owning Photo/Video <span className="kmk-r-note">selamanya</span>
              </span>
              <span className="kmk-r-dots" />
              <span className="kmk-r-price">Rp 1jt</span>
            </li>
            <li>
              <span className="kmk-r-name">Additional Collab</span>
              <span className="kmk-r-dots" />
              <span className="kmk-r-price">Rp 300rb</span>
            </li>
          </ul>
        </div>

        <div className={`kmk-rate-panel${rateTab === "bundling" ? " kmk-show" : ""}`}>
          {[
            { name: "1 Video TikTok + Yellow Cart + Code Boost 365 + Free Req Tanggal + Free Mirroring IGS", was: "Rp 1.350.000", now: "Rp 1jt" },
            { name: "2 Video TikTok + Yellow Cart + Code Boost 365 + Free Req Tanggal + Free Mirroring IGS", was: "Rp 2.700.000", now: "Rp 2jt" },
            { name: "3 Video TikTok + Yellow Cart + Code Boost 365 + Mirroring Reels + Free Req Tanggal + Free Mirroring IGS", was: "Rp 4.800.000", now: "Rp 3,5jt" },
            { name: "5 Video TikTok + Yellow Cart + Code Boost 365 + Mirroring Reels + Free Req Tanggal + Free Mirroring IGS", was: "Rp 8.000.000", now: "Rp 4,5jt" },
            { name: "Additional Video TikTok + Family/Baby in Frame + Mirroring Reels Family/Baby in Frame", was: "Rp 1.750.000", now: "Rp 1,25jt" },
            { name: "1 Video TikTok + Baby in Frame", was: "Rp 1.000.000", now: "Rp 850rb" },
          ].map((b) => (
            <div className="kmk-bundle-card" key={b.name}>
              <div>
                <div className="kmk-name">{b.name}</div>
                <div className="kmk-was">{b.was}</div>
              </div>
              <div className="kmk-now">{b.now}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="kmk-terms" className="kmk-terms-band">
        <div className="kmk-wrap">
          <div className="kmk-eyebrow kmk-reveal">catatan kerja sama</div>
          <h2 className="kmk-reveal" style={{ "--i": 1, fontSize: "clamp(1.9rem,3.6vw,2.6rem)", marginTop: "10px" } as CSSVars}>
            Syarat &amp; Ketentuan
          </h2>
          <ul className="kmk-terms-list">
            {TERMS.map((t, i) => (
              <li className="kmk-reveal" style={{ "--i": i + 1 } as CSSVars} key={i}>
                <span className="kmk-t-num">{String(i + 1).padStart(2, "0")}</span>
                <p>{t}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="kmk-contact" className="kmk-cta">
        <svg className="kmk-float kmk-drift" style={{ top: "24px", left: "8%", width: "30px" }} viewBox="0 0 24 24" fill="none" stroke="#E3C89B" strokeWidth="1.2">
          <path d="M12 2c1 3 3 5 6 6-3 1-5 3-6 6-1-3-3-5-6-6 3-1 5-3 6-6Z" />
        </svg>
        <svg className="kmk-float kmk-drift kmk-d3" style={{ bottom: "30px", right: "10%", width: "22px" }} viewBox="0 0 24 24" fill="#E3C89B">
          <circle cx="12" cy="12" r="3" />
        </svg>
        <div className="kmk-wrap kmk-reveal">
          <span className="kmk-script">siap kolaborasi?</span>
          <h2>Yuk, wujudkan campaign berikutnya</h2>
          <p>Kirim brief lengkap kamu, tim akan balas dalam 1×24 jam dengan proposal konten yang pas untuk brand kamu.</p>
          <div className="kmk-cta-actions">
            <a href="#" className="kmk-btn kmk-btn-gold">
              Chat WhatsApp · [Nomor KOL]
            </a>
            <a href="#" className="kmk-btn kmk-btn-ghost">
              Download Media Kit (PDF)
            </a>
          </div>
          <div className="kmk-handles">
            <span>TikTok @alya.maheswari</span>
            <span>Instagram @alya.maheswari</span>
            <span>Email hello@alyamaheswari.id</span>
          </div>
        </div>
      </section>

      <footer>
        <div>Media Kit Template — dirancang untuk klien KOL / Influencer</div>
        <div className="kmk-note">
          Semua nama, angka, dan foto pada halaman ini adalah contoh placeholder untuk didemonstrasikan, silakan
          diganti dengan data klien asli.
        </div>
      </footer>

      <a href="#kmk-contact" className="kmk-wa-float" aria-label="Chat via WhatsApp" title="Chat via WhatsApp">
        <svg viewBox="0 0 24 24">
          <path d="M17.47 14.38c-.29-.15-1.72-.85-1.99-.94-.27-.1-.46-.15-.66.15-.2.29-.76.94-.93 1.13-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.71-1.6-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.59-.91-2.18-.24-.57-.48-.5-.66-.51h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.43 0 1.43 1.05 2.82 1.19 3.01.15.2 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.62.7.22 1.34.19 1.84.12.56-.08 1.72-.7 1.97-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.2-.55-.35Z" />
          <path d="M12.04 2C6.58 2 2.13 6.42 2.13 11.88c0 1.87.51 3.62 1.4 5.13L2 22l5.13-1.5a9.9 9.9 0 0 0 4.9 1.31h.01c5.46 0 9.9-4.42 9.9-9.88C21.95 6.42 17.5 2 12.04 2Zm5.83 15.67c-.25.7-1.44 1.38-1.99 1.46-.51.08-1.15.11-1.85-.12a15.4 15.4 0 0 1-1.68-.62c-2.95-1.27-4.87-4.23-5.02-4.43-.15-.2-1.19-1.58-1.19-3.01 0-1.43.75-2.14 1.02-2.43a1.1 1.1 0 0 1 .78-.37c.19 0 .38 0 .55.01.18.01.42-.07.65.5.24.58.83 2.02.9 2.17.07.15.12.32.02.52-.1.2-.15.32-.29.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.75 1.23 1.6 2 1.1.98 2.03 1.28 2.32 1.43.29.15.46.13.63-.07.17-.19.73-.84.93-1.13.2-.3.39-.25.66-.15.27.09 1.7.79 1.99.94.29.15.48.22.55.35.07.12.07.7-.18 1.38Z" />
        </svg>
      </a>
    </div>
  );
}
