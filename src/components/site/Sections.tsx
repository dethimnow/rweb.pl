import { PHONE_DISPLAY, PHONE_E164 } from "@/lib/site";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b border-border bg-gradient-to-b from-white to-slate-50"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-teal-600/5 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="text-sm font-medium uppercase tracking-wider text-accent">
          Agencja dla MŚP
        </p>
        <h1
          id="hero-heading"
          className="mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl lg:text-5xl"
        >
          Budujemy przyszłość Twojej firmy: strony, aplikacje i inteligentna
          automatyzacja AI.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Pomagamy małym i średnim firmom skalować biznes dzięki nowoczesnym
          technologiom i wdrażaniu sztucznej inteligencji, która realnie
          oszczędza czas.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-900/15 transition-colors hover:bg-accent-hover"
          >
            Umów się na bezpłatną konsultację AI
          </a>
          <a
            href="#realizacje"
            className="inline-flex items-center justify-center rounded-full border-2 border-navy/15 bg-transparent px-8 py-3.5 text-base font-semibold text-navy transition-colors hover:border-navy/30"
          >
            Sprawdź nasze realizacje
          </a>
        </div>
        <p className="mt-8 text-sm text-muted">
          Zadzwoń:{" "}
          <a
            href={`tel:${PHONE_E164}`}
            className="font-semibold text-navy hover:text-accent"
          >
            {PHONE_DISPLAY}
          </a>
        </p>
      </div>
    </section>
  );
}

const pillars = [
  {
    title: "Wdrożenia AI",
    offer:
      "Chatboty obsługi klienta, analiza danych, automatyzacja dokumentów i powtarzalnych zadań.",
    benefit: "Praca 24/7 bez dodatkowych etatów — odpowiedzi i procesy, które skalują się z Tobą.",
  },
  {
    title: "Aplikacje webowe",
    offer:
      "Systemy CRM, dedykowane panele klienta, wewnętrzne narzędzia, aplikacje SaaS.",
    benefit: "Oprogramowanie dopasowane do Twoich procesów, nie odwrotnie.",
  },
  {
    title: "Strony internetowe",
    offer:
      "Nowoczesne wizytówki, landing page pod kampanie, sklepy i e-commerce.",
    benefit: "Profesjonalny wizerunek i strona zaprojektowana pod konwersję.",
  },
];

export function OfferPillars() {
  return (
    <section
      id="oferta"
      className="border-b border-border bg-background py-20 sm:py-24"
      aria-labelledby="oferta-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="oferta-heading"
          className="text-2xl font-bold tracking-tight text-navy sm:text-3xl"
        >
          Oferta: trzy filary
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Wiemy, w czym możemy pomóc — bez żargonu. Każdy filar ma jasny efekt
          dla Twojego biznesu.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {pillars.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-navy">{p.title}</h3>
              <p className="mt-4 text-sm font-medium text-navy/80">
                Co oferujemy?
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {p.offer}
              </p>
              <p className="mt-4 text-sm font-medium text-accent">
                Korzyść dla Ciebie
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {p.benefit}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const scenarios = [
  {
    title: "Obsługa klienta",
    text: "Inteligentny asystent na stronie, który zna Twoją ofertę i odpowiada o 3:00 w nocy — zamiast tracenia leadów po godzinach pracy biura.",
  },
  {
    title: "Automatyzacja biura",
    text: "AI segreguje faktury, wyciąga kluczowe dane ze skanów albo streszcza długie maile od kontrahentów — mniej ręcznego przeklikiwania.",
  },
  {
    title: "Analiza sprzedaży",
    text: "Wsparcie w przewidywaniu trendów na podstawie historii zamówień — lepsze decyzje zakupowe i magazynowe.",
  },
];

export function AIBusiness() {
  return (
    <section
      id="ai-dla-biznesu"
      className="border-b border-border bg-navy py-20 text-white sm:py-24"
      aria-labelledby="ai-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="ai-heading"
          className="text-2xl font-bold tracking-tight sm:text-3xl"
        >
          AI dla biznesu — konkretne scenariusze
        </h2>
        <p className="mt-3 max-w-2xl text-slate-400">
          Dla wielu właścicieli MŚP „AI” brzmi abstrakcyjnie. Oto przykłady, co
          robi w praktyce.
        </p>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {scenarios.map((s) => (
            <li
              key={s.title}
              className="rounded-2xl border border-slate-700/80 bg-slate-900/50 p-6"
            >
              <h3 className="text-lg font-semibold text-accent">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {s.text}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-sm text-slate-500">
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
      className="border-b border-border bg-slate-50 py-20 sm:py-24"
      aria-labelledby="realizacje-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="realizacje-heading"
          className="text-2xl font-bold tracking-tight text-navy sm:text-3xl"
        >
          Realizacje — problem, rozwiązanie, efekt
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Poniżej przykładowe scenariusze współpracy. Po pierwszych
          udokumentowanych projektach pod Twoją marką łatwo zamienisz je na
          pełne case studies z nazwą klienta (za zgodą).
        </p>
        <div className="mt-12 space-y-10">
          {cases.map((c, i) => (
            <article
              key={i}
              className="rounded-2xl border border-border bg-card p-8 shadow-sm"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                Case {i + 1}
              </span>
              <h3 className="mt-2 font-semibold text-navy">Problem</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {c.problem}
              </p>
              <h3 className="mt-4 font-semibold text-navy">Rozwiązanie</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {c.solution}
              </p>
              <h3 className="mt-4 font-semibold text-navy">Wynik</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
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
      className="border-b border-border bg-background py-20 sm:py-24"
      aria-labelledby="proces-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="proces-heading"
          className="text-2xl font-bold tracking-tight text-navy sm:text-3xl"
        >
          Proces współpracy
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Projekty IT bywają stresujące — dlatego pokazujemy przejrzysty tok
          pracy od pierwszego spotkania.
        </p>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="relative rounded-2xl border border-border bg-card p-6"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 font-semibold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
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
      className="border-b border-border bg-slate-50 py-16 sm:py-20"
      aria-labelledby="tech-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="tech-heading"
          className="text-center text-xl font-bold text-navy sm:text-2xl"
        >
          Technologie, których używamy
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted">
          Stos dobieramy do projektu — poniżej typowe elementy stacku.
        </p>
        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {tech.map((t) => (
            <li
              key={t}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-navy shadow-sm"
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
      className="border-b border-border bg-background py-16 sm:py-20"
      aria-labelledby="opinie-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="opinie-heading"
          className="text-2xl font-bold tracking-tight text-navy sm:text-3xl"
        >
          Zaufanie i opinie
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          Tu znajdą się cytaty od klientów (np. z LinkedIn) po pierwszych
          zakończonych projektach — publikujemy wyłącznie za zgodą. Poniżej
          przykład układu; treść możesz podmienić w kodzie lub przez CMS.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <figure className="rounded-2xl border border-dashed border-border bg-card/50 p-6">
            <blockquote className="text-sm italic leading-relaxed text-muted">
              „Wreszcie ktoś wytłumaczył nam AI bez slajdów pełnych buzzwordów.
              Wdrożenie poszło sprawnie.”
            </blockquote>
            <figcaption className="mt-4 text-sm font-medium text-navy">
              — Właściciel, firma usługowa B2B
            </figcaption>
          </figure>
          <figure className="rounded-2xl border border-dashed border-border bg-card/50 p-6">
            <blockquote className="text-sm italic leading-relaxed text-muted">
              „Strona i panel pod nasze zamówienia działają stabilnie. Kontakt
              był konkretny od pierwszego telefonu.”
            </blockquote>
            <figcaption className="mt-4 text-sm font-medium text-navy">
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
      className="bg-gradient-to-b from-white to-slate-100 py-20 sm:py-28"
      aria-labelledby="kontakt-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-card p-8 shadow-xl sm:p-12">
          <h2
            id="kontakt-heading"
            className="text-center text-2xl font-bold text-navy sm:text-3xl"
          >
            Bezpłatna konsultacja AI
          </h2>
          <p className="mx-auto mt-4 text-center text-muted">
            Opowiedz, co zajmuje Twój zespół czasem „na piechotę”. Wstępnie
            ocenimy, czy automatyzacja lub AI ma sens — bez zobowiązań.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <a
              href={`tel:${PHONE_E164}`}
              className="inline-flex w-full max-w-sm items-center justify-center rounded-full bg-accent py-4 text-lg font-semibold text-white transition-colors hover:bg-accent-hover sm:w-auto sm:px-12"
            >
              Zadzwoń: {PHONE_DISPLAY}
            </a>
            <p className="text-center text-sm text-muted">
              Możesz też napisać wiadomość na LinkedIn lub maila — podaj preferowany
              kanał przy pierwszym kontakcie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
