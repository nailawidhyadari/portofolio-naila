import Image from "next/image";
import { projects } from "@/data/site";

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="proyek" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
        <h2 className="fluid-h2 font-bold tracking-tight">
          Proyek yang Pernah <span className="text-gradient">Saya Kerjakan</span>
        </h2>
        <p className="mt-3 max-w-xl text-muted">
          Website yang sudah saya bangun dan rilis ke publik — lengkap dengan
          tangkapan layar halaman depannya.
        </p>

        <div className="spotlight mt-10 grid gap-5 sm:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.name}
              className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface"
            >
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Buka ${p.name} di tab baru`}
                className="relative block aspect-[16/10] overflow-hidden border-b border-border bg-surface-2"
              >
                <Image
                  src={p.image}
                  alt={`Tangkapan layar halaman depan ${p.name}`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              </a>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-mono text-base font-semibold">
                      {p.name}
                    </h3>
                    <p className="mt-1 text-xs text-muted">
                      {p.category} · {p.year}
                    </p>
                  </div>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Buka ${p.name} di tab baru`}
                    className="shrink-0 rounded-md border border-border p-2 text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    <ArrowIcon />
                  </a>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {p.summary}
                </p>

                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                    Kontribusi
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {p.contributions.map((c) => (
                      <li key={c} className="flex gap-2 text-sm text-foreground/90">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-2" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-1" />
                <ul className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
                  {p.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded bg-surface-2 px-2 py-1 text-xs text-muted"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
