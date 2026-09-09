import { experiences } from "@/data/site";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
        <h2 className="fluid-h2 font-bold tracking-tight">
          Work <span className="text-gradient">Experience</span>
        </h2>
        <p className="mt-3 max-w-xl text-muted">
          Companies and institutions I&apos;ve worked with.
        </p>

        <ol className="spotlight mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {experiences.map((exp) => (
            <li
              key={exp.company}
              className="flex flex-col rounded-xl border border-border bg-surface p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex h-16 items-center justify-center rounded-lg bg-white px-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={exp.logo}
                    alt={exp.logoAlt}
                    className="max-h-10 w-auto max-w-[150px] object-contain"
                    loading="lazy"
                  />
                </div>
                {exp.current && (
                  <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-white">
                    Now
                  </span>
                )}
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
