import { experiences } from "@/data/site";

export default function Experience() {
  return (
    <section id="pengalaman" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
        <h2 className="fluid-h2 font-bold tracking-tight">
          Pengalaman <span className="text-gradient">Kerja</span>
        </h2>
        <p className="mt-3 max-w-xl text-muted">
          Instansi dan perusahaan tempat saya pernah bekerja.
        </p>

        <ol className="spotlight mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp) => (
            <li
              key={exp.company}
              className="flex flex-col rounded-xl border border-border bg-surface p-6"
            >
              <div className="flex h-16 w-full items-center justify-center rounded-lg bg-white px-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={exp.logo}
                  alt={exp.logoAlt}
                  className="max-h-10 w-auto max-w-[160px] object-contain"
                  loading="lazy"
                />
              </div>

              <h3 className="mt-5 text-base font-semibold leading-snug">
                {exp.company}
              </h3>
              <p className="mt-1 text-sm text-accent-2">{exp.role}</p>
              <p className="mt-0.5 font-mono text-xs text-muted">{exp.period}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {exp.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
