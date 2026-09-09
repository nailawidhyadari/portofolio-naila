import { profile } from "@/data/site";

export default function About() {
  return (
    <section id="tentang" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-5xl px-5 py-20">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Tentang <span className="text-gradient">Saya</span>
        </h2>

        <div className="mt-8 grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4 text-base leading-relaxed text-muted">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div>
            <h3 className="font-mono text-sm text-accent-2">Keahlian</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {profile.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-foreground"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
