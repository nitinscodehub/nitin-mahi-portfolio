import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { whyUs } from "@/data/content";

export default function WhyUs() {
  return (
    <section id="why-us" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why us"
          title={<>Small team. <span className="text-gradient">Big ownership.</span></>}
          subtitle="You work directly with the people building your product — no account managers, no handoffs."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, index) => (
            <Reveal key={item.title} delay={(index % 3) * 0.07}>
              <div className="card-surface group flex h-full gap-4 rounded-2xl p-6 transition-colors hover:border-c/50">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-mint" />
                <div>
                  <h3 className="font-display text-base font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
