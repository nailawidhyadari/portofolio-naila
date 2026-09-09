import { profile, contact } from "@/data/site";

export default function Hero() {
  const waHref = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    "Halo Naila, saya tertarik untuk bekerja sama membuat website.",
  )}`;

  return (
    <section id="top" className="bg-glow">
      <div className="mx-auto max-w-5xl px-5 pb-20 pt-16 sm:pt-24">
        <p className="font-mono text-sm text-accent-2">Halo, saya</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-2 text-xl font-medium text-muted sm:text-2xl">
          <span className="text-gradient">{profile.role}</span>
        </p>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {profile.tagline}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#proyek"
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Lihat Proyek
          </a>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            Hubungi via WhatsApp
          </a>
        </div>

        <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-border pt-8 sm:max-w-md">
          {profile.stats.map((s) => (
            <div key={s.label}>
              <dt className="text-2xl font-bold sm:text-3xl">{s.value}</dt>
              <dd className="mt-1 text-xs text-muted sm:text-sm">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
