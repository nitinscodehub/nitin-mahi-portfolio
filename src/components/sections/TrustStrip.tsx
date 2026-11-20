import { useInView } from "framer-motion";
import { useRef } from "react";
import { useCounter } from "@/hooks/useCounter";
import { counters } from "@/data/content";

const tech = [
  "React",
  "TypeScript",
  "Node.js",
  "FastAPI",
  "Flutter",
  "Firebase",
  "PostgreSQL",
  "Docker",
  "Python",
  "Burp Suite",
  "Nmap",
  "Metasploit",
  " scikit-learn".trim(),
  "Git",
];

function Counter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const current = useCounter(value, inView);
  return (
    <div ref={ref} className="text-center sm:text-left">
      <p className="font-display text-4xl font-bold text-gradient sm:text-5xl">
        {current}
        {suffix}
      </p>
      <p className="mt-2 text-xs text-muted">{label}</p>
    </div>
  );
}

export default function TrustStrip() {
  return (
    <section aria-label="Numbers and tools" className="border-y border-line bg-surface/40 py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {counters.map((counter) => (
            <Counter key={counter.label} {...counter} />
          ))}
        </div>
      </div>

      <div className="relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="marquee-track flex w-max gap-3">
          {[...tech, ...tech].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="whitespace-nowrap rounded-full border border-line bg-surface px-4 py-2 font-mono text-[11px] text-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
