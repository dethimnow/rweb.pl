import type { ReactNode } from "react";

/**
 * Zmyślone marki i znaki graficzne — wyłącznie dekoracja zaufania społecznego w hero.
 */

function LogoShell({
  children,
  zIndex,
  className = "",
}: {
  children: ReactNode;
  zIndex: number;
  className?: string;
}) {
  return (
    <div
      className={`flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-gradient-to-br from-slate-50 to-slate-100 shadow-sm ring-1 ring-black/[0.04] ${className}`}
      style={{ zIndex }}
    >
      {children}
    </div>
  );
}

/** Novaris — abstrakcyjny znak „N” + punkt */
function LogoNovaris() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
      <path
        d="M8 24V8h3.2l7.8 10.4V8H22v16h-3.1L11 13.5V24H8z"
        className="fill-[#0f172a]"
      />
      <circle cx="25" cy="9" r="3" className="fill-[#2563eb]" />
    </svg>
  );
}

/** Baltmetal — uproszczone belki / profil */
function LogoBaltmetal() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
      <rect
        x="5"
        y="7"
        width="22"
        height="4"
        rx="1"
        className="fill-[#0f172a]"
      />
      <rect
        x="5"
        y="14"
        width="16"
        height="4"
        rx="1"
        className="fill-[#334155]"
      />
      <rect
        x="5"
        y="21"
        width="20"
        height="4"
        rx="1"
        className="fill-[#64748b]"
      />
      <path
        d="M26 14l3 4-3 4"
        className="fill-none stroke-[#c2410c]"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** EkoSerwis — liść + łodyga */
function LogoEkoSerwis() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
      <path
        d="M16 26V14"
        className="fill-none stroke-[#166534]"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        d="M16 14c-4-6-10-6-12-2 2 8 8 10 12 2zm0 0c4-6 10-6 12-2-2 8-8 10-12 2z"
        className="fill-[#22c55e]/90"
      />
      <path
        d="M16 18c-2-3-5-4-7-3"
        className="fill-none stroke-[#15803d] opacity-80"
        strokeWidth={1.2}
        strokeLinecap="round"
      />
    </svg>
  );
}

/** DataPunkt — wykres + punkt centralny */
function LogoDataPunkt() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
      <rect
        x="5"
        y="18"
        width="4"
        height="8"
        rx="0.8"
        className="fill-[#94a3b8]"
      />
      <rect
        x="12"
        y="12"
        width="4"
        height="14"
        rx="0.8"
        className="fill-[#64748b]"
      />
      <rect
        x="19"
        y="8"
        width="4"
        height="18"
        rx="0.8"
        className="fill-[#475569]"
      />
      <circle cx="25" cy="7" r="4" className="fill-[#7c3aed]" />
      <circle cx="25" cy="7" r="1.6" className="fill-white" />
    </svg>
  );
}

const items = [
  { key: "novaris", label: "Novaris (marka przykładowa)", Logo: LogoNovaris },
  {
    key: "baltmetal",
    label: "Baltmetal (marka przykładowa)",
    Logo: LogoBaltmetal,
  },
  {
    key: "ekoserwis",
    label: "EkoSerwis (marka przykładowa)",
    Logo: LogoEkoSerwis,
  },
  {
    key: "datapunkt",
    label: "DataPunkt (marka przykładowa)",
    Logo: LogoDataPunkt,
  },
] as const;

export function FakeTrustLogoStack({ className }: { className?: string }) {
  return (
    <div
      className={`flex -space-x-2 ${className ?? ""}`}
      role="list"
      aria-label="Przykładowe logotypy firm MŚP (fikcyjne, ilustracyjne)"
    >
      {items.map(({ key, label, Logo }, i) => (
        <div key={key} className="relative" role="listitem">
          <LogoShell zIndex={4 - i}>
            <Logo />
          </LogoShell>
          <span className="sr-only">{label}</span>
        </div>
      ))}
    </div>
  );
}
