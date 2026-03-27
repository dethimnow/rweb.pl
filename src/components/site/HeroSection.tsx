"use client";

import { useMemo, useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { FakeTrustLogoStack } from "@/components/site/FakeTrustLogos";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/site";

const HERO_VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260302_085640_276ea93b-d7da-4418-a09b-2aa5b490e838.mp4";

const fadeSlideUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const itemInstant = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0 } },
};

function StarRow() {
  return (
    <div className="flex items-center gap-0.5" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4 text-amber-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const btnPrimary =
  "min-h-[56px] shrink-0 rounded-[40px] bg-gradient-to-b from-[#2e2e2e] via-[#1a1a1a] to-[#0d0d0d] px-8 text-base font-semibold text-white shadow-[inset_-4px_-6px_25px_0px_rgba(201,201,201,0.08),inset_4px_4px_10px_0px_rgba(29,29,29,0.24)] transition-[filter] hover:brightness-110 sm:px-10";

export function HeroSection() {
  const emailRef = useRef<HTMLInputElement>(null);
  const reduceMotion = useReducedMotion();

  const containerVariants = useMemo(
    () => ({
      hidden: {},
      visible: {
        transition: {
          staggerChildren: reduceMotion ? 0 : 0.14,
          delayChildren: reduceMotion ? 0 : 0.06,
        },
      },
    }),
    [reduceMotion],
  );

  const item = reduceMotion ? itemInstant : fadeSlideUp;

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <video
          className="h-full w-full object-cover [transform:scaleY(-1)]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 bg-gradient-to-b from-[26.416%] from-[rgba(255,255,255,0)] to-[66.943%] to-white"
          aria-hidden
        />
      </div>

      <motion.div
        className="mx-auto flex min-h-[100dvh] max-w-[1200px] flex-col items-center px-5 pt-20 gap-5 sm:px-8 sm:pt-28 sm:gap-6 md:pt-36 md:gap-7 lg:gap-8 lg:pt-[290px]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={item}
          className="text-center text-xs font-medium uppercase tracking-[0.2em] text-[#373a46]/70"
        >
          Agencja dla MŚP
        </motion.p>

        <motion.h1
          id="hero-heading"
          variants={item}
          className="max-w-[1100px] text-center font-medium tracking-[-0.04em] text-[#0f172a]"
        >
          <span className="block text-[clamp(2rem,4.8vw,4.75rem)] leading-[1.06]">
            Budujemy{" "}
            <span
              className="inline-block align-baseline text-[clamp(2.5rem,6vw,6.25rem)] italic leading-[1.02] [font-family:var(--font-instrument-serif),serif]"
              style={{ fontWeight: 400 }}
            >
              przyszłość
            </span>
          </span>
          <span className="mt-1.5 block text-[clamp(1.5rem,3.2vw,3.25rem)] font-medium leading-[1.15] text-[#0f172a] sm:mt-2">
            Twojej firmy: strony, aplikacje i inteligentna automatyzacja AI.
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="max-w-[554px] text-center leading-relaxed text-[#373a46]/80"
          style={{ fontSize: 18 }}
        >
          Pomagamy małym i średnim firmom skalować biznes dzięki nowoczesnym
          technologiom i wdrożeniom sztucznej inteligencji, która realnie
          oszczędza czas — bez zbędnego żargonu.
        </motion.p>

        <motion.div variants={item} className="w-full max-w-[640px]">
          <form
            className="flex flex-col gap-4 sm:flex-row sm:items-stretch"
            onSubmit={(e) => {
              e.preventDefault();
              const el = emailRef.current;
              const raw = el?.value?.trim() ?? "";
              if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(raw)) {
                el?.setCustomValidity("Podaj poprawny adres e-mail");
                el?.reportValidity();
                return;
              }
              el?.setCustomValidity("");
              const path = window.location.pathname || "/";
              window.location.href = `${path}?email=${encodeURIComponent(raw)}#kontakt`;
            }}
          >
            <div className="flex min-h-[56px] flex-1 items-center rounded-[40px] border border-black/[0.08] bg-[#fcfcfc] px-6 shadow-[0px_10px_40px_5px_rgba(194,194,194,0.25)]">
              <label htmlFor="hero-email" className="sr-only">
                Adres e-mail
              </label>
              <input
                ref={emailRef}
                id="hero-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Twój adres e-mail"
                className="h-full w-full min-w-0 border-0 bg-transparent text-base text-[#0f172a] outline-none placeholder:text-[#373a46]/45"
              />
            </div>
            <button type="submit" className={btnPrimary}>
              Umów bezpłatną konsultację
            </button>
          </form>

          <div className="mt-5 flex flex-col items-center gap-2 sm:gap-3">
            <Link
              href="#realizacje"
              className="text-sm font-medium text-[#373a46] underline decoration-black/[0.12] underline-offset-4 transition-colors hover:text-[#0f172a]"
            >
              Sprawdź realizacje
            </Link>
            <a
              href={CONTACT_MAILTO}
              className="text-sm text-[#373a46]/80 transition-colors hover:text-[#0f172a]"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className="mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:justify-center sm:gap-4">
            <div className="flex items-center gap-2 rounded-full border border-black/[0.06] bg-white/80 px-4 py-2 text-sm font-medium text-[#373a46] shadow-sm backdrop-blur-sm">
              <StarRow />
              <span>Zaufanie MŚP z całej Polski</span>
            </div>
            <FakeTrustLogoStack />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
