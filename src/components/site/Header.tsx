import Link from "next/link";
import { PHONE_DISPLAY, PHONE_E164 } from "@/lib/site";

const nav = [
  { href: "#oferta", label: "Oferta" },
  { href: "#ai-dla-biznesu", label: "AI dla biznesu" },
  { href: "#realizacje", label: "Realizacje" },
  { href: "#proces", label: "Proces" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-card/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-navy"
        >
          rweb<span className="text-accent">.pl</span>
        </Link>
        <nav
          className="hidden items-center gap-6 text-sm font-medium text-muted md:flex"
          aria-label="Nawigacja główna"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-navy"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={`tel:${PHONE_E164}`}
            className="hidden text-sm font-medium text-navy sm:block"
          >
            {PHONE_DISPLAY}
          </a>
          <a
            href="#kontakt"
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover"
          >
            Konsultacja
          </a>
        </div>
      </div>
    </header>
  );
}
