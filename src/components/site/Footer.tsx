import Link from "next/link";
import {
  CONTACT_EMAIL,
  CONTACT_MAILTO,
  PHONE_DISPLAY,
  PHONE_E164,
} from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#0a0a0a] text-neutral-400">
      <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-lg font-semibold tracking-[-0.03em] text-white">
              rweb
              <span className="[font-family:var(--font-instrument-serif),serif] font-normal italic text-neutral-400">
                .pl
              </span>
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-neutral-500">
              Strony, aplikacje webowe i wdrożenia AI dla firm, które chcą
              pracować mądrzej — nie ciężej.
            </p>
          </div>
          <div className="text-sm">
            <p className="font-medium text-white">Kontakt</p>
            <a
              href={`tel:${PHONE_E164}`}
              className="mt-2 block text-white/90 transition-colors hover:text-white"
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href={CONTACT_MAILTO}
              className="mt-2 block text-white/90 transition-colors hover:text-white"
            >
              {CONTACT_EMAIL}
            </a>
            <p className="mt-3 text-neutral-500">
              Pon–Pt — odpowiadamy w ciągu jednego dnia roboczego.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-white/[0.08] pt-8 text-xs text-neutral-600 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} rweb.pl</span>
          <Link href="#oferta" className="hover:text-neutral-400">
            Oferta
          </Link>
        </div>
      </div>
    </footer>
  );
}
