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
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-[4.25rem] max-w-[1200px] items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href="/"
          className="text-lg font-semibold tracking-[-0.03em] text-[#0f172a]"
        >
          rweb
          <span className="[font-family:var(--font-instrument-serif),serif] font-normal italic text-[#373a46]">
            .pl
          </span>
        </Link>
        <nav
          className="hidden items-center gap-8 text-sm font-medium text-[#373a46]/90 md:flex"
          aria-label="Nawigacja główna"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[#0f172a]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href={`tel:${PHONE_E164}`}
            className="hidden text-sm font-medium text-[#373a46] sm:block"
          >
            {PHONE_DISPLAY}
          </a>
          <a
            href="#kontakt"
            className="rounded-[40px] bg-gradient-to-b from-[#2e2e2e] via-[#1a1a1a] to-[#0d0d0d] px-4 py-2.5 text-sm font-semibold text-white shadow-[inset_-4px_-6px_25px_0px_rgba(201,201,201,0.08),inset_4px_4px_10px_0px_rgba(29,29,29,0.24)] transition-[filter] hover:brightness-110"
          >
            Konsultacja
          </a>
        </div>
      </div>
    </header>
  );
}
