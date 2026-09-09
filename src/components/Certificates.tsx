import { certificates } from "@/data/site";

function DocIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
    </svg>
  );
}

export default function Certificates() {
  return (
    <section id="sertifikat" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
        <h2 className="fluid-h2 font-bold tracking-tight">
          Sertifikat &amp; <span className="text-gradient">Pelatihan</span>
        </h2>
        <p className="mt-3 max-w-xl text-muted">
          Kursus dan pelatihan yang pernah saya ikuti dan selesaikan.
        </p>

        <ul className="spotlight mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((c) => (
            <li
              key={c.title}
              className="flex flex-col rounded-xl border border-border bg-surface p-6"
            >
              <span className="w-max rounded bg-surface-2 px-2 py-1 text-xs text-accent-2">
                {c.tag}
              </span>
              <h3 className="mt-4 text-sm font-semibold leading-snug">
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{c.issuer}</p>
              <p className="mt-1 font-mono text-xs text-muted">{c.date}</p>

              <div className="mt-4 flex-1" />
              {c.pdf ? (
                <a
                  href={c.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-max items-center gap-2 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <DocIcon />
                  Lihat sertifikat
                </a>
              ) : (
                <span className="text-xs text-muted">
                  Sertifikat tersedia atas permintaan
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
