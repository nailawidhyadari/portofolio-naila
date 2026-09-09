import { contact, profile } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-muted sm:flex-row">
        <p>
          © {year} {profile.name}. Dibuat dengan Next.js.
        </p>
        <div className="flex gap-4">
          <a
            href={`https://wa.me/${contact.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            WhatsApp
          </a>
          <a
            href={`https://instagram.com/${contact.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
