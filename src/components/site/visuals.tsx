/** Minimalistyczne grafiki w stylu strony: monochrom, miękkie kontury, bez „stockowego” koloru. */

export function SectionHaze({ tone }: { tone: "light" | "muted" | "dark" }) {
  if (tone === "dark") {
    return (
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-24 top-1/4 h-[28rem] w-[28rem] rounded-full bg-white/[0.045] blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-[22rem] w-[22rem] rounded-full bg-white/[0.03] blur-3xl" />
        <div className="absolute left-1/2 top-0 h-64 w-[120%] -translate-x-1/2 bg-gradient-to-b from-white/[0.04] to-transparent blur-2xl" />
      </div>
    );
  }
  if (tone === "muted") {
    return (
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-16 top-20 h-72 w-72 rounded-full bg-neutral-400/12 blur-3xl" />
        <div className="absolute -left-10 bottom-16 h-56 w-56 rounded-full bg-neutral-300/18 blur-3xl" />
      </div>
    );
  }
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-neutral-300/14 blur-3xl" />
      <div className="absolute left-[-10%] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-neutral-200/25 blur-3xl" />
    </div>
  );
}

/** Siatka kropek bez zduplikowanych id SVG — bezpieczne w wielu sekcjach. */
export function DotField({ tone = "light" }: { tone?: "light" | "dark" }) {
  const bg =
    tone === "dark"
      ? "bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:22px_22px]"
      : "bg-[radial-gradient(circle,rgba(15,23,42,0.055)_1px,transparent_1px)] bg-[length:20px_20px]";
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${bg}`}
    />
  );
}

const strokeLight = "stroke-[#0f172a]/[0.22]";
const strokeDark = "stroke-white/[0.35]";

export function GraphicPillarAI({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 96 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle
        cx="48"
        cy="24"
        r="10"
        className={`${strokeLight} fill-[#0f172a]/[0.04]`}
        strokeWidth="1.25"
      />
      <circle
        cx="24"
        cy="58"
        r="10"
        className={`${strokeLight} fill-[#0f172a]/[0.04]`}
        strokeWidth="1.25"
      />
      <circle
        cx="72"
        cy="58"
        r="10"
        className={`${strokeLight} fill-[#0f172a]/[0.04]`}
        strokeWidth="1.25"
      />
      <path
        d="M44 31L28 50M52 31L68 50M48 34v18"
        className={strokeLight}
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function GraphicPillarApps({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 96 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect
        x="12"
        y="14"
        width="72"
        height="52"
        rx="8"
        className={`${strokeLight} fill-[#0f172a]/[0.03]`}
        strokeWidth="1.25"
      />
      <path
        d="M12 26h72"
        className={strokeLight}
        strokeWidth="1.25"
        strokeOpacity="0.5"
      />
      <rect
        x="22"
        y="36"
        width="22"
        height="22"
        rx="3"
        className={`${strokeLight} fill-[#0f172a]/[0.05]`}
        strokeWidth="1.1"
      />
      <rect
        x="52"
        y="36"
        width="22"
        height="10"
        rx="2"
        className={strokeLight}
        strokeWidth="1.1"
      />
      <rect
        x="52"
        y="50"
        width="22"
        height="8"
        rx="2"
        className={strokeLight}
        strokeWidth="1.1"
        strokeOpacity="0.6"
      />
    </svg>
  );
}

export function GraphicPillarSites({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 96 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect
        x="10"
        y="12"
        width="76"
        height="56"
        rx="8"
        className={`${strokeLight} fill-[#0f172a]/[0.03]`}
        strokeWidth="1.25"
      />
      <circle cx="22" cy="24" r="2.5" className="fill-[#0f172a]/15" />
      <circle cx="32" cy="24" r="2.5" className="fill-[#0f172a]/10" />
      <circle cx="42" cy="24" r="2.5" className="fill-[#0f172a]/08" />
      <rect
        x="20"
        y="36"
        width="28"
        height="24"
        rx="3"
        className={`${strokeLight} fill-[#0f172a]/[0.04]`}
        strokeWidth="1.1"
      />
      <rect
        x="54"
        y="36"
        width="22"
        height="10"
        rx="2"
        className={strokeLight}
        strokeWidth="1.1"
      />
      <rect
        x="54"
        y="50"
        width="22"
        height="10"
        rx="2"
        className={strokeLight}
        strokeWidth="1.1"
        strokeOpacity="0.55"
      />
    </svg>
  );
}

export function GraphicScenarioSupport({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 72 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M14 20c0-4.4 3.6-8 8-8h28c4.4 0 8 3.6 8 8v10c0 2.2-1.8 4-4 4h-6l-6 6v-6h-20c-2.2 0-4-1.8-4-4V20z"
        className={`${strokeDark} fill-white/[0.04]`}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M46 18l2 2 4-4"
        className={strokeDark}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GraphicScenarioOffice({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 72 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect
        x="16"
        y="10"
        width="40"
        height="36"
        rx="3"
        className={`${strokeDark} fill-white/[0.04]`}
        strokeWidth="1.2"
      />
      <path
        d="M20 18h32M20 26h24M20 34h28"
        className={strokeDark}
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeOpacity="0.7"
      />
      <rect
        x="22"
        y="40"
        width="28"
        height="4"
        rx="1"
        className="fill-white/[0.08]"
      />
    </svg>
  );
}

export function GraphicScenarioSales({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 72 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12 42V18M12 42h48"
        className={strokeDark}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeOpacity="0.45"
      />
      <path
        d="M16 34l10-8 8 6 14-18 10 8"
        className={strokeDark}
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="58" cy="22" r="3" className="fill-white/[0.12]" />
    </svg>
  );
}

export function GraphicCaseStack({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect
        x="48"
        y="12"
        width="56"
        height="40"
        rx="4"
        className="stroke-[#0f172a]/[0.12] fill-[#0f172a]/[0.02]"
        strokeWidth="1"
      />
      <rect
        x="36"
        y="22"
        width="56"
        height="40"
        rx="4"
        className="stroke-[#0f172a]/[0.1] fill-white/40"
        strokeWidth="1"
      />
      <rect
        x="24"
        y="32"
        width="56"
        height="40"
        rx="4"
        className="stroke-[#0f172a]/[0.14] fill-[#fcfcfc]"
        strokeWidth="1.1"
      />
    </svg>
  );
}

export function GraphicProcessStep({
  step,
  className,
}: {
  step: 1 | 2 | 3 | 4;
  className?: string;
}) {
  const common = `${strokeLight} strokeLinecap="round" strokeLinejoin="round"`;
  if (step === 1) {
    return (
      <svg
        className={className}
        viewBox="0 0 64 52"
        fill="none"
        aria-hidden
      >
        <circle
          cx="28"
          cy="26"
          r="14"
          className={`${strokeLight} fill-[#0f172a]/[0.03]`}
          strokeWidth="1.2"
        />
        <path d="M38 36l12 10" className={common} strokeWidth="1.35" />
        <circle cx="52" cy="48" r="3" className={strokeLight} strokeWidth="1.2" />
      </svg>
    );
  }
  if (step === 2) {
    return (
      <svg
        className={className}
        viewBox="0 0 64 52"
        fill="none"
        aria-hidden
      >
        <path
          d="M12 40L32 14l20 26"
          className={common}
          strokeWidth="1.25"
          fill="none"
        />
        <circle cx="32" cy="14" r="4" className="fill-[#0f172a]/[0.08]" />
        <circle cx="12" cy="40" r="3" className={strokeLight} strokeWidth="1.2" />
        <circle cx="52" cy="40" r="3" className={strokeLight} strokeWidth="1.2" />
      </svg>
    );
  }
  if (step === 3) {
    return (
      <svg
        className={className}
        viewBox="0 0 64 52"
        fill="none"
        aria-hidden
      >
        <rect
          x="14"
          y="16"
          width="36"
          height="26"
          rx="3"
          className={`${strokeLight} fill-[#0f172a]/[0.03]`}
          strokeWidth="1.2"
        />
        <path
          d="M22 26h20M22 32h14M22 38h18"
          className={common}
          strokeWidth="1.1"
          strokeOpacity="0.55"
        />
      </svg>
    );
  }
  return (
    <svg className={className} viewBox="0 0 64 52" fill="none" aria-hidden>
      <path
        d="M32 10v32M20 22l12 10 12-10"
        className={common}
        strokeWidth="1.25"
      />
      <path
        d="M16 44h32"
        className={common}
        strokeWidth="1.2"
        strokeOpacity="0.4"
      />
    </svg>
  );
}

export function GraphicTechOrbit({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <ellipse
        cx="100"
        cy="60"
        rx="78"
        ry="38"
        className="stroke-[#0f172a]/[0.08]"
        strokeWidth="1"
      />
      <ellipse
        cx="100"
        cy="60"
        rx="52"
        ry="24"
        className="stroke-[#0f172a]/[0.06]"
        strokeWidth="1"
      />
      <circle cx="100" cy="22" r="4" className="fill-[#0f172a]/10" />
      <circle cx="168" cy="58" r="3.5" className="fill-[#0f172a]/08" />
      <circle cx="38" cy="72" r="3" className="fill-[#0f172a]/06" />
    </svg>
  );
}

export function QuoteGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={`text-[#0f172a]/[0.1] ${className ?? ""}`}
      viewBox="0 0 80 56"
      fill="none"
      aria-hidden
    >
      <path
        d="M18 38c-2-8 2-18 12-22M46 38c-2-8 2-18 12-22"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ContactOrb({ className }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none ${className ?? ""}`}
      aria-hidden
    >
      <div className="absolute -left-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-neutral-300/20 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-56 w-56 rounded-full bg-neutral-400/15 blur-3xl" />
    </div>
  );
}
