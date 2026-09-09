import { contact, profile } from "@/data/site";

export default function Contact() {
  const waHref = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    "Halo Naila, saya tertarik untuk bekerja sama membuat website.",
  )}`;
  const igHref = `https://instagram.com/${contact.instagram}`;

  return (
    <section id="kontak" className="scroll-mt-20 border-t border-border bg-glow">
      <div className="mx-auto max-w-5xl px-5 py-20 text-center">
        <h2 className="fluid-h2 font-bold tracking-tight">
          Mari <span className="text-gradient">Bekerja Sama</span>
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-muted">
          Punya rencana membuat atau memperbarui website? Kirim pesan, saya akan
          balas secepatnya.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            WhatsApp · {contact.whatsappDisplay}
          </a>
          <a
            href={igHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            Instagram · @{contact.instagram}
          </a>
          {contact.email && (
            <a
              href={`mailto:${contact.email}`}
              className="rounded-lg border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              Email · {contact.email}
            </a>
          )}
        </div>

        <p className="mt-10 font-mono text-xs text-muted">
          {profile.name} — {profile.role}
        </p>
      </div>
    </section>
  );
}
