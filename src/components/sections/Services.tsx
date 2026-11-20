import { BrainCircuit, Check, Code2, ShieldCheck, Smartphone, Tags, Terminal } from "lucide-react";
import SpotlightCard from "@/components/ui/SpotlightCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { services, type Service } from "@/data/content";

const ICONS = {
  code: Code2,
  phone: Smartphone,
  shield: ShieldCheck,
  brain: BrainCircuit,
  tag: Tags,
  terminal: Terminal,
} as const;

export default function Services() {
  return (
    <section id="services" className="border-y border-line bg-bg-soft px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What we do"
          title={<>Six ways we <span className="text-gradient">help you ship.</span></>}
          subtitle="Pick one service or combine them — we scope the work around your goal, not a fixed package."
          align="center"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service: Service, index) => {
            const Icon = ICONS[service.icon];
            const tint = index % 2 === 0 ? "a" : "b";
            return (
              <Reveal key={service.id} delay={(index % 3) * 0.08}>
                <SpotlightCard tint={tint} className="h-full p-6">
                  <div className="relative z-20 flex h-full flex-col">
                    <div className={`flex size-11 items-center justify-center rounded-2xl bg-surface-2 ring-1 ${tint === "a" ? "text-a ring-a/30" : "text-b ring-b/30"}`}>
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-bold">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{service.value}</p>
                    <ul className="mt-5 space-y-2.5">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex gap-2 text-xs text-ink/85">
                          <Check className={`mt-0.5 size-3.5 shrink-0 ${tint === "a" ? "text-a" : "text-b"}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-auto pt-6 font-mono text-[10px] uppercase tracking-wider text-muted">{service.typical}</p>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
