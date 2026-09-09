"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/site";

const links = [
  { href: "#tentang", label: "Tentang" },
  { href: "#proyek", label: "Proyek" },
  { href: "#kontak", label: "Kontak" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight">
          {profile.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden gap-8 text-sm text-muted sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-foreground">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Buka menu"
          aria-expanded={open}
          className="sm:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-foreground" />
          <span className="mt-1.5 block h-0.5 w-6 bg-foreground" />
          <span className="mt-1.5 block h-0.5 w-6 bg-foreground" />
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-border bg-background px-5 pb-4 pt-2 text-sm sm:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="block py-2 text-muted transition-colors hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
