import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/data/content";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="Good questions"
          title={<>Things clients <span className="text-gradient">ask us.</span></>}
          subtitle="Still curious? Send us a message — Mahi replies personally."
        />
        <div className="space-y-3">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            return (
              <Reveal key={item.q} delay={index * 0.04}>
                <div className={cn("overflow-hidden rounded-2xl border bg-surface/40", isOpen ? "border-c/50" : "border-line")}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="font-display text-sm font-semibold sm:text-base">{item.q}</span>
                    <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="shrink-0 text-c">
                      <Plus className="size-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28 }}
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
