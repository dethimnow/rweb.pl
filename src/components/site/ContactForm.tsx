"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const inputClass =
  "w-full rounded-2xl border border-black/[0.1] bg-white px-4 py-3 text-sm text-[#0f172a] outline-none transition-shadow placeholder:text-[#373a46]/45 focus:border-black/[0.18] focus:shadow-[0px_4px_20px_rgba(194,194,194,0.25)]";
const labelClass = "mb-1.5 block text-xs font-medium uppercase tracking-[0.08em] text-[#373a46]/70";

export function ContactForm() {
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const q = searchParams.get("email");
    if (q) {
      try {
        setEmail(decodeURIComponent(q));
      } catch {
        setEmail(q);
      }
      const t = window.setTimeout(() => {
        document
          .getElementById("kontakt")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
      return () => clearTimeout(t);
    }
  }, [searchParams]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          consent,
          _gotcha: (e.currentTarget.elements.namedItem("_gotcha") as HTMLInputElement)?.value ?? "",
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Coś poszło nie tak.");
        return;
      }
      setStatus("success");
      setMessage("");
    } catch {
      setStatus("error");
      setErrorMsg("Brak połączenia. Spróbuj ponownie.");
    }
  }

  if (status === "success") {
    return (
      <div
        className="mt-10 rounded-2xl border border-black/[0.08] bg-white px-6 py-8 text-center"
        role="status"
      >
        <p className="text-lg font-medium text-[#0f172a]">Dziękujemy za wiadomość</p>
        <p className="mt-2 text-sm text-[#373a46]/80">
          Odezwiemy się na podany adres e-mail w ciągu jednego dnia roboczego.
        </p>
      </div>
    );
  }

  return (
    <form className="mt-10 space-y-5 text-left" onSubmit={onSubmit} noValidate>
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="sr-only" aria-hidden />

      <div>
        <label htmlFor="cf-name" className={labelClass}>
          Imię i nazwa
        </label>
        <input
          id="cf-name"
          name="name"
          type="text"
          required
          maxLength={200}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
          autoComplete="name"
        />
      </div>

      <div>
        <label htmlFor="cf-email" className={labelClass}>
          E-mail
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
          autoComplete="email"
        />
      </div>

      <div>
        <label htmlFor="cf-phone" className={labelClass}>
          Telefon <span className="font-normal normal-case text-[#373a46]/45">(opcjonalnie)</span>
        </label>
        <input
          id="cf-phone"
          name="phone"
          type="tel"
          maxLength={40}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={inputClass}
          autoComplete="tel"
        />
      </div>

      <div>
        <label htmlFor="cf-message" className={labelClass}>
          Wiadomość
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          minLength={10}
          maxLength={8000}
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClass} resize-y min-h-[120px]`}
          placeholder="Opisz krótko, czego potrzebujesz…"
        />
      </div>

      <label className="flex cursor-pointer items-start gap-3 text-sm leading-snug text-[#373a46]/85">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-black/20"
          required
        />
        <span>
          Wyrażam zgodę na kontakt zwrotny w sprawie tego zapytania (e-mail lub telefon).
        </span>
      </label>

      {errorMsg ? (
        <p className="text-sm text-red-600" role="alert">
          {errorMsg}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-[40px] bg-gradient-to-b from-[#2e2e2e] via-[#1a1a1a] to-[#0d0d0d] py-3.5 text-base font-semibold text-white shadow-[inset_-4px_-6px_25px_0px_rgba(201,201,201,0.08),inset_4px_4px_10px_0px_rgba(29,29,29,0.24)] transition-[filter] hover:brightness-110 disabled:opacity-60"
      >
        {status === "loading" ? "Wysyłanie…" : "Wyślij zapytanie"}
      </button>
    </form>
  );
}
