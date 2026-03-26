import type { SimpleIcon } from "simple-icons";
import {
  siNextdotjs,
  siPostgresql,
  siPython,
  siReact,
  siTypescript,
  siVercel,
  siWordpress,
} from "simple-icons";
import Image from "next/image";

function BrandSvg({
  icon,
  className,
}: {
  icon: SimpleIcon;
  className?: string;
}) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <title>{icon.title}</title>
      <path fill={`#${icon.hex}`} d={icon.path} />
    </svg>
  );
}

const stack: {
  key: string;
  label: string;
  sublabel?: string;
  icon: SimpleIcon | "openai";
}[] = [
  { key: "next", label: "Next.js", icon: siNextdotjs },
  { key: "react", label: "React", icon: siReact },
  { key: "ts", label: "TypeScript", icon: siTypescript },
  { key: "py", label: "Python", icon: siPython },
  { key: "openai", label: "OpenAI", sublabel: "API", icon: "openai" },
  { key: "wp", label: "WordPress", icon: siWordpress },
  { key: "pg", label: "PostgreSQL", icon: siPostgresql },
  { key: "vercel", label: "Vercel", icon: siVercel },
];

export function TechLogoGrid() {
  return (
    <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8">
      {stack.map((item) => (
        <li
          key={item.key}
          className="flex flex-col items-center justify-center gap-2.5 rounded-2xl border border-black/[0.07] bg-white px-3 py-5 shadow-[0px_8px_28px_rgba(194,194,194,0.18)] transition-shadow duration-300 hover:shadow-[0px_12px_36px_rgba(194,194,194,0.26)]"
        >
          <div className="flex h-11 w-11 items-center justify-center">
            {item.icon === "openai" ? (
              <Image
                src="/openai-mark.svg"
                alt=""
                width={36}
                height={34}
                className="h-9 w-auto max-h-9"
              />
            ) : (
              <BrandSvg icon={item.icon} className="h-9 w-9" />
            )}
          </div>
          <div className="text-center leading-tight">
            <span className="block text-xs font-semibold tracking-[-0.02em] text-[#0f172a]">
              {item.label}
            </span>
            {item.sublabel ? (
              <span className="mt-0.5 block text-[0.65rem] font-medium uppercase tracking-[0.08em] text-[#373a46]/55">
                {item.sublabel}
              </span>
            ) : null}
          </div>
        </li>
      ))}
    </ul>
  );
}
