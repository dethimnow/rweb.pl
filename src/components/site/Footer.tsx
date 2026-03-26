import Link from "next/link";
import { PHONE_DISPLAY, PHONE_E164 } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">
              rweb<span className="text-accent">.pl</span>
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-400">
              Strony, aplikacje webowe i wdrożenia AI dla firm, które chcą
              pracować mądrzej — nie ciężej.
            </p>
          </div>
          <div className="text-sm">
            <p className="font-medium text-white">Kontakt</p>
            <a
              href={`tel:${PHONE_E164}`}
              className="mt-2 block text-accent hover:text-teal-300"
            >
              {PHONE_DISPLAY}
            </a>
            <p className="mt-3 text-slate-500">
              Pon–Pt, odpowiadamy w ciągu jednego dnia roboczego.
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-slate-700 pt-8 text-xs text-slate-500 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} rweb.pl</span>
          <Link href="#oferta" className="hover:text-slate-300">
            Oferta
          </Link>
        </div>
      </div>
    </footer>
  );
}
