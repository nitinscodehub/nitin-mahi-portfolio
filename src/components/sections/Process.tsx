import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { process } from "@/data/content";

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 25%"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="px-5 py-24 sm:px-8 sm:py-32">
      <div ref={ref} className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              eyebrow="How we work"
              title={<>From hello to <span className="text-gradient">handover.</span></>}
              subtitle="A clear, repeatable process so you always know what happens next."
            />
          </div>

          <div className="relative pl-10 sm:pl-14">
            <div className="absolute left-3 top-2 h-full w-px bg-line sm:left-5" />
            <motion.div
              aria-hidden="true"
              className="absolute left-3 top-2 w-px origin-top bg-gradient-to-b from-a via-c to-b sm:left-5"
              style={{ height: reduced ? "100%" : lineHeight }}
            />
            <div className="space-y-10">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  className="relative"
                  initial={{ opacity: 0, x: reduced ? 0 : 26 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: index * 0.04 }}
                >
                  <span
                    className={`absolute -left-10 top-1 flex size-7 items-center justify-center rounded-full border bg-bg font-mono text-[10px] sm:-left-14 sm:size-9 ${index % 2 === 0 ? "border-a/60 text-a" : "border-b/60 text-b"}`}
                  >
                    {item.step}
                  </span>
                  <h3 className="font-display text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
