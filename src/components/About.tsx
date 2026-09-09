import { profile } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-5xl px-5 py-20">
        <h2 className="fluid-h2 font-bold tracking-tight">
          About <span className="text-gradient">Me</span>
        </h2>

        <div className="mt-8 grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4 text-base leading-relaxed text-muted">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div>
            <h3 className="font-mono text-sm text-accent-2">Skills</h3>
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
