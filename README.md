# rweb.pl

Strona agencji: strony www, aplikacje webowe i wdrożenia AI dla MŚP (Next.js).

## Rozwój lokalny

```bash
npm install
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000).

## Formularz kontaktowy (e-mail)

W Vercel ustaw zmienne środowiskowe (zob. `.env.example`):

- `RESEND_API_KEY` — klucz z [resend.com](https://resend.com)
- `CONTACT_FORM_TO` — opcjonalnie inna skrzynka odbiorcza niż domyślna w kodzie API
- `RESEND_FROM` — po **weryfikacji domeny** w Resend, np. `rweb.pl <kontakt@rweb.pl>`

Bez zweryfikowanej domeny Resend pozwala testować z adresu `onboarding@resend.dev` (ograniczenia w panelu).

## Wdrożenie na Vercel

1. Zaloguj się na [vercel.com](https://vercel.com) i **Add New → Project**.
2. Zaimportuj repozytorium **rweb.pl** z GitHuba.
3. Ustawienia domyślne (Framework: Next.js) — zatwierdź **Deploy**.
4. **Settings → Environment Variables** — dodaj `RESEND_API_KEY` (i opcjonalnie pozostałe).
5. **Settings → Domains** — dodaj **rweb.pl** oraz opcjonalnie **www.rweb.pl**; Vercel pokaże dokładne rekordy DNS (nazwy i wartości). Typowe ustawienia:
   - **Apex (`rweb.pl`):** rekord **A** na host `@` → `76.76.21.21` **albo** rekord **ALIAS/ANAME** (u rejestratora) na `cname.vercel-dns.com`, jeśli rejestrator to obsługuje.
   - **www:** rekord **CNAME** `www` → `cname.vercel-dns.com`.

Po dodaniu domeny zawsze porównaj rekordy z tym, co wyświetla panel Vercel — mogą się różnić w zależności od konfiguracji projektu.
