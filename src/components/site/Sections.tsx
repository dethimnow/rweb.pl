import type { ComponentType } from "react";
import { Suspense } from "react";
import {
  CONTACT_EMAIL,
  CONTACT_MAILTO,
  PHONE_DISPLAY,
  PHONE_E164,
} from "@/lib/site";
import { ContactForm } from "@/components/site/ContactForm";
import {
  ContactOrb,
  DotField,
  GraphicCaseStack,
  GraphicPillarAI,
  GraphicPillarApps,
  GraphicPillarSites,
  GraphicProcessStep,
  GraphicScenarioOffice,
  GraphicScenarioSales,
  GraphicScenarioSupport,
  GraphicTechOrbit,
  QuoteGlyph,
  SectionHaze,
} from "@/components/site/visuals";

export { HeroSection as Hero } from "./HeroSection";

const shell = "mx-auto max-w-[1200px] px-5 sm:px-8 relative z-10";
const h2 =
  "text-3xl font-medium tracking-[-0.04em] text-[#0f172a] sm:text-[2.25rem] sm:leading-tight";
const lead = "mt-4 max-w-2xl text-lg leading-relaxed text-[#373a46]/80";
const card =
  "rounded-[24px] border border-black/[0.08] bg-[#fcfcfc] p-8 shadow-[0px_10px_40px_5px_rgba(194,194,194,0.16)] transition-shadow duration-300 hover:shadow-[0px_14px_48px_8px_rgba(194,194,194,0.22)]";

const pillarArt: Record<
  "ai" | "apps" | "sites",
  ComponentType<{ className?: string }>
> = {
  ai: GraphicPillarAI,
  apps: GraphicPillarApps,
  sites: GraphicPillarSites,
};

const pillars = [
  {
    title: "Wdrożenia AI",
    graphic: "ai" as const,
    offer:
      "Chatboty obsługi klienta, analiza danych, automatyzacja dokumentów i powtarzalnych zadań.",
    benefit:
      "Praca 24/7 bez dodatkowych etatów — odpowiedzi i procesy, które skalują się z Tobą.",
  },
  {
    title: "Aplikacje webowe",
    graphic: "apps" as const,
    offer:
      "Systemy CRM, dedykowane panele klienta, wewnętrzne narzędzia, aplikacje SaaS.",
    benefit: "Oprogramowanie dopasowane do Twoich procesów, nie odwrotnie.",
  },
  {
    title: "Strony internetowe",
    graphic: "sites" as const,
    offer:
      "Nowoczesne wizytówki, landing page pod kampanie, sklepy i e-commerce.",
    benefit: "Profesjonalny wizerunek i strona zaprojektowana pod konwersję.",
  },
];

export function OfferPillars() {
  return (
    <section
      id="oferta"
      className="relative overflow-hidden border-b border-black/[0.06] bg-white py-20 sm:py-28"
      aria-labelledby="oferta-heading"
    >
      <SectionHaze tone="light" />
      <DotField tone="light" />
      <div className={shell}>
        <h2 id="oferta-heading" className={h2}>
          Oferta:{" "}
          <span className="[font-family:var(--font-instrument-serif),serif] font-normal italic text-[#373a46]">
            trzy filary
          </span>
        </h2>
        <p className={lead}>
          Wiemy, w czym możemy pomóc — bez żargonu. Każdy filar ma jasny efekt
          dla Twojego biznesu.
        </p>
        <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
          {pillars.map((p) => {
            const Art = pillarArt[p.graphic];
            return (
            <article key={p.title} className={card}>
              <div className="mb-6 flex justify-center rounded-2xl border border-black/[0.06] bg-white/90 py-5 shadow-[0px_8px_30px_rgba(194,194,194,0.12)]">
                <Art className="h-[4.5rem] w-auto" />
              </div>
              <h3 className="text-xl font-medium tracking-[-0.02em] text-[#0f172a]">
                {p.title}
              </h3>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.12em] text-[#373a46]/60">
                Co oferujemy?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#373a46]/85">
                {p.offer}
              </p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.12em] text-[#0f172a]">
                Korzyść dla Ciebie
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#373a46]/85">
                {p.benefit}
              </p>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const scenarioArt: Record<
  "support" | "office" | "sales",
  ComponentType<{ className?: string }>
> = {
  support: GraphicScenarioSupport,
  office: GraphicScenarioOffice,
  sales: GraphicScenarioSales,
};

const scenarios = [
  {
    title: "Obsługa klienta",
    graphic: "support" as const,
    text: "Inteligentny asystent na stronie, który zna Twoją ofertę i odpowiada o 3:00 w nocy — zamiast tracenia leadów po godzinach pracy biura.",
  },
  {
    title: "Automatyzacja biura",
    graphic: "office" as const,
    text: "AI segreguje faktury, wyciąga kluczowe dane ze skanów albo streszcza długie maile od kontrahentów — mniej ręcznego przeklikiwania.",
  },
  {
    title: "Analiza sprzedaży",
    graphic: "sales" as const,
    text: "Wsparcie w przewidywaniu trendów na podstawie historii zamówień — lepsze decyzje zakupowe i magazynowe.",
  },
];

export function AIBusiness() {
  return (
    <section
      id="ai-dla-biznesu"
      className="relative overflow-hidden border-b border-white/[0.06] bg-gradient-to-b from-[#0c0c0c] to-[#050505] py-20 text-white sm:py-28"
      aria-labelledby="ai-heading"
    >
      <SectionHaze tone="dark" />
      <DotField tone="dark" />
      <div className={shell}>
        <h2 id="ai-heading" className={`${h2} text-white`}>
          <span className="[font-family:var(--font-instrument-serif),serif] font-normal italic text-white/80">
            AI
          </span>{" "}
          dla biznesu — konkretne scenariusze
        </h2>
        <p className={`${lead} text-white/55`}>
          Dla wielu właścicieli MŚP „AI” brzmi abstrakcyjnie. Oto przykłady, co
          robi w praktyce.
        </p>
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {scenarios.map((s) => {
            const SArt = scenarioArt[s.graphic];
            return (
            <li
              key={s.title}
              className="rounded-[24px] border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-sm"
            >
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/[0.1] bg-white/[0.05]">
                  <SArt className="h-9 w-auto" />
                </div>
                <h3 className="text-lg font-medium tracking-[-0.02em] text-white">
                  {s.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-white/65">
                {s.text}
              </p>
            </li>
            );
          })}
        </ul>
        <p className="mt-12 text-sm text-white/40">
          Dobieramy narzędzia do skali problemu — bez strzelania z armaty do
          muchy.
        </p>
      </div>
    </section>
  );
}

const cases = [
  {
    problem:
      "Klient tracił ok. 10 godzin tygodniowo na odpowiadanie na te same pytania o ofertę i terminy.",
    solution:
      "Wdrożyliśmy asystenta AI z bazą wiedzy firmy, spiętego ze stroną i typowymi dokumentami.",
    result:
      "Oszczędność czasu ok. 80% w tym obszarze i wyższa dostępność dla klientów po godzinach.",
  },
  {
    problem:
      "Biuro otrzymywało dziesiątki faktur miesięcznie — ręczne wprowadzanie do arkusza generowało błędy.",
    solution:
      "Automatyczny odczyt PDF i e-maili, walidacja pól, eksport do używanego przez firmę formatu.",
    result:
      "Krótszy czas księgowania i mniej pomyłek w danych do rozliczeń.",
  },
  {
    problem:
      "Landing pod kampanię Google Ads konwertował poniżej oczekiwań mimo ruchu.",
    solution:
      "Nowy układ strony, treści pod intencję wyszukiwania, szybsze ładowanie i jasne CTA.",
    result:
      "Wyższy współczynnik konwersji z tego samego budżetu reklamowego.",
  },
];

export function CaseStudies() {
  return (
    <section
      id="realizacje"
      className="relative overflow-hidden border-b border-black/[0.06] bg-[#f7f7f7] py-20 sm:py-28"
      aria-labelledby="realizacje-heading"
    >
      <SectionHaze tone="muted" />
      <div className="opacity-40">
        <DotField tone="light" />
      </div>
      <div className={shell}>
        <h2 id="realizacje-heading" className={h2}>
          Realizacje —{" "}
          <span className="[font-family:var(--font-instrument-serif),serif] font-normal italic text-[#373a46]">
            problem, rozwiązanie, efekt
          </span>
        </h2>
        <p className={lead}>
          Wybrane wdrożenia dla MŚP w skróconej formule: problem biznesowy,
          nasze rozwiązanie i efekt, który można porównać z własną sytuacją.
        </p>
        <div className="mt-14 space-y-8">
          {cases.map((c, i) => (
            <article
              key={i}
              className="relative overflow-hidden rounded-[24px] border border-black/[0.08] bg-[#fcfcfc] p-8 sm:p-10 shadow-[0px_10px_40px_5px_rgba(194,194,194,0.14)]"
            >
              <GraphicCaseStack className="pointer-events-none absolute -right-2 top-4 w-32 opacity-[0.35] sm:right-4 sm:w-36" />
              <span className="relative text-xs font-semibold uppercase tracking-[0.14em] text-[#373a46]/50">
                Wdrożenie {i + 1}
              </span>
              <h3 className="relative mt-3 text-sm font-semibold text-[#0f172a]">
                Problem
              </h3>
              <p className="relative mt-1 max-w-[85%] text-sm leading-relaxed text-[#373a46]/85 sm:max-w-none">
                {c.problem}
              </p>
              <h3 className="relative mt-5 text-sm font-semibold text-[#0f172a]">
                Rozwiązanie
              </h3>
              <p className="relative mt-1 max-w-[85%] text-sm leading-relaxed text-[#373a46]/85 sm:max-w-none">
                {c.solution}
              </p>
              <h3 className="relative mt-5 text-sm font-semibold text-[#0f172a]">
                Wynik
              </h3>
              <p className="relative mt-1 max-w-[85%] text-sm leading-relaxed text-[#373a46]/85 sm:max-w-none">
                {c.result}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    title: "Audyt",
    text: "Rozmawiamy o wyzwaniach, procesach i oczekiwanym efekcie — czas, koszt, ryzyko.",
  },
  {
    title: "Strategia",
    text: "Dobieramy technologie i zakres: tylko to, co ma sens biznesowo.",
  },
  {
    title: "Realizacja",
    text: "Budujemy, testujemy, wdrażamy. Jesteś w pętli informacyjnej na każdym etapie.",
  },
  {
    title: "Wsparcie",
    text: "Po starcie nie zostawiamy Cię samego — szkolenia, poprawki i rozwój w miarę potrzeb.",
  },
];

export function Process() {
  return (
    <section
      id="proces"
      className="relative overflow-hidden border-b border-black/[0.06] bg-white py-20 sm:py-28"
      aria-labelledby="proces-heading"
    >
      <SectionHaze tone="light" />
      <div className={shell}>
        <h2 id="proces-heading" className={h2}>
          Proces{" "}
          <span className="[font-family:var(--font-instrument-serif),serif] font-normal italic text-[#373a46]">
            współpracy
          </span>
        </h2>
        <p className={lead}>
          Projekty IT bywają stresujące — dlatego pokazujemy przejrzysty tok
          pracy od pierwszego spotkania.
        </p>
        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className={card}>
              <div className="flex items-start justify-between gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#2e2e2e] to-[#0d0d0d] text-sm font-semibold text-white shadow-[inset_-2px_-3px_12px_0px_rgba(201,201,201,0.08),inset_2px_2px_6px_0px_rgba(29,29,29,0.24)]">
                  {i + 1}
                </span>
                <GraphicProcessStep
                  step={(i + 1) as 1 | 2 | 3 | 4}
                  className="h-11 w-auto shrink-0 opacity-90"
                />
              </div>
              <h3 className="mt-5 text-lg font-medium tracking-[-0.02em] text-[#0f172a]">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#373a46]/85">
                {s.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const tech = [
  "Next.js",
  "React",
  "TypeScript",
  "Python",
  "OpenAI API",
  "WordPress",
  "PostgreSQL",
  "Vercel",
];

export function TechTrust() {
  return (
    <section
      className="relative overflow-hidden border-b border-black/[0.06] bg-[#f7f7f7] py-16 sm:py-24"
      aria-labelledby="tech-heading"
    >
      <GraphicTechOrbit className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-[min(100%,28rem)] -translate-x-1/2 -translate-y-1/2 opacity-[0.55] sm:h-56" />
      <SectionHaze tone="muted" />
      <div className={shell}>
        <h2
          id="tech-heading"
          className="text-center text-2xl font-medium tracking-[-0.04em] text-[#0f172a] sm:text-3xl"
        >
          Technologie,{" "}
          <span className="[font-family:var(--font-instrument-serif),serif] font-normal italic text-[#373a46]">
            których używamy
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed text-[#373a46]/75">
          Stos dobieramy do projektu — poniżej typowe elementy stacku.
        </p>
        <ul className="mt-12 flex flex-wrap justify-center gap-3">
          {tech.map((t) => (
            <li
              key={t}
              className="rounded-[40px] border border-black/[0.08] bg-[#fcfcfc] px-5 py-2.5 text-sm font-medium text-[#0f172a] shadow-[0px_6px_24px_rgba(194,194,194,0.2)]"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section
      className="relative overflow-hidden border-b border-black/[0.06] bg-white py-16 sm:py-24"
      aria-labelledby="opinie-heading"
    >
      <DotField tone="light" />
      <div className={shell}>
        <h2 id="opinie-heading" className={h2}>
          Zaufanie{" "}
          <span className="[font-family:var(--font-instrument-serif),serif] font-normal italic text-[#373a46]">
            i opinie
          </span>
        </h2>
        <p className={`${lead} text-base`}>
          Współpracujemy z firmami, które cenią konkret i spokój przy wdrożeniach.
          Poniżej krótkie opinie po zakończonych projektach.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <figure className="relative overflow-hidden rounded-[24px] border border-black/[0.08] bg-[#fcfcfc] p-8 shadow-[0px_8px_28px_rgba(194,194,194,0.14)]">
            <QuoteGlyph className="pointer-events-none absolute right-4 top-3 h-12 w-20" />
            <blockquote className="relative text-sm italic leading-relaxed text-[#373a46]/85 [font-family:var(--font-instrument-serif),serif]">
              „Wreszcie ktoś wytłumaczył nam AI bez slajdów pełnych buzzwordów.
              Wdrożenie poszło sprawnie.”
            </blockquote>
            <figcaption className="relative mt-5 text-sm font-medium text-[#0f172a]">
              — Właściciel, firma usługowa B2B
            </figcaption>
          </figure>
          <figure className="relative overflow-hidden rounded-[24px] border border-black/[0.08] bg-[#fcfcfc] p-8 shadow-[0px_8px_28px_rgba(194,194,194,0.14)]">
            <QuoteGlyph className="pointer-events-none absolute right-4 top-3 h-12 w-20" />
            <blockquote className="relative text-sm italic leading-relaxed text-[#373a46]/85 [font-family:var(--font-instrument-serif),serif]">
              „Strona i panel pod nasze zamówienia działają stabilnie. Kontakt
              był konkretny od pierwszego telefonu.”
            </blockquote>
            <figcaption className="relative mt-5 text-sm font-medium text-[#0f172a]">
              — Dyrektor operacyjny, MŚP produkcyjne
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export function ContactCTA() {
  return (
    <section
      id="kontakt"
      className="relative overflow-hidden bg-gradient-to-b from-white to-[#f0f0f0] py-20 sm:py-28"
      aria-labelledby="kontakt-heading"
    >
      <ContactOrb className="absolute inset-0" />
      <div className={shell}>
        <div className="relative mx-auto max-w-[640px] rounded-[28px] border border-black/[0.08] bg-[#fcfcfc] p-8 shadow-[0px_10px_40px_5px_rgba(194,194,194,0.2)] sm:p-12">
          <h2
            id="kontakt-heading"
            className="text-center text-3xl font-medium tracking-[-0.04em] text-[#0f172a] sm:text-4xl"
          >
            Bezpłatna konsultacja{" "}
            <span className="[font-family:var(--font-instrument-serif),serif] font-normal italic text-[#373a46]">
              AI
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-center text-[#373a46]/80">
            Opowiedz, co zajmuje Twój zespół czasem „na piechotę”. Wstępnie
            ocenimy, czy automatyzacja lub AI ma sens — bez zobowiązań.
          </p>
          <Suspense
            fallback={
              <div
                className="mt-10 h-64 animate-pulse rounded-2xl bg-black/[0.04]"
                aria-hidden
              />
            }
          >
            <ContactForm />
          </Suspense>
          <div className="relative my-10 flex items-center gap-4">
            <span className="h-px flex-1 bg-black/[0.08]" />
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-[#373a46]/50">
              Albo
            </span>
            <span className="h-px flex-1 bg-black/[0.08]" />
          </div>
          <div className="flex flex-col items-center gap-4">
            <a
              href={`tel:${PHONE_E164}`}
              className="inline-flex w-full max-w-sm items-center justify-center rounded-[40px] bg-gradient-to-b from-[#2e2e2e] via-[#1a1a1a] to-[#0d0d0d] py-4 text-lg font-semibold text-white shadow-[inset_-4px_-6px_25px_0px_rgba(201,201,201,0.08),inset_4px_4px_10px_0px_rgba(29,29,29,0.24)] transition-[filter] hover:brightness-110 sm:w-auto sm:px-14"
            >
              Zadzwoń: {PHONE_DISPLAY}
            </a>
            <p className="text-center text-sm text-[#373a46]/70">
              Napisz bezpośrednio na{" "}
              <a
                href={CONTACT_MAILTO}
                className="font-medium text-[#0f172a] underline decoration-black/[0.15] underline-offset-2 transition-colors hover:decoration-[#0f172a]"
              >
                {CONTACT_EMAIL}
              </a>
              {" — "}odpowiemy w ciągu jednego dnia roboczego.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
