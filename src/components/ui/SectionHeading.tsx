import type { ReactNode } from "react";
import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-c">
        <span className="mr-2">//</span>
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-bold leading-[1.1] sm:text-5xl">{title}</h2>
      {subtitle ? <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">{subtitle}</p> : null}
      <div className={cn("mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-a via-c to-b", align === "center" && "mx-auto")} />
    </Reveal>
  );
}
