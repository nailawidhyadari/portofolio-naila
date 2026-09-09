import { profile, contact } from "@/data/site";

const snippet = `// what I care about on every build
const site = {
  fast:   "fast by default",
  clean:  "easy to maintain",
  found:  "built for SEO",
};

export function ship() {
  return site;
}`;

export default function Hero() {
  const waHref = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    "Hi Naila, I'd like to talk about a website project.",
  )}`;

  return (
    <section id="top" className="bg-glow dot-grid">
      <div className="mx-auto grid max-w-5xl gap-12 px-5 pb-20 pt-16 sm:pt-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="font-mono text-sm text-accent-2">{profile.greeting}</p>
          <h1 className="fluid-h1 mt-3 font-bold tracking-tight">
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
              href="#work"
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              View my work
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              Message on WhatsApp
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

        <div className="code-window hidden lg:block" aria-hidden="true">
          <div className="code-window__bar">
            <span className="code-window__dot" />
            <span className="code-window__dot" />
            <span className="code-window__dot" />
          </div>
          <pre>{snippet}</pre>
        </div>
      </div>
    </section>
  );
}
