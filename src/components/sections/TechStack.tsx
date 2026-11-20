import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { techGroups } from "@/data/content";
import { cn } from "@/lib/utils";

const DOT = {
  a: "bg-a shadow-[0_0_10px_var(--color-a)]",
  b: "bg-b shadow-[0_0_10px_var(--color-b)]",
  both: "bg-gradient-to-r from-a to-b",
};

export default function TechStack() {
  return (
    <section id="stack" className="border-y border-line bg-bg-soft px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Toolkit"
          title={<>The stack behind <span className="text-gradient">the work.</span></>}
          subtitle="Cyan marks where Nitin leads, rose where Mahi leads, and the blend where both are comfortable."
        />

        <div className="mt-6 flex flex-wrap gap-5 font-mono text-[10px] uppercase tracking-wider text-muted">
          <span className="inline-flex items-center gap-2"><span className={cn("size-2.5 rounded-full", DOT.a)} /> Nitin</span>
          <span className="inline-flex items-center gap-2"><span className={cn("size-2.5 rounded-full", DOT.b)} /> Mahi</span>
          <span className="inline-flex items-center gap-2"><span className={cn("size-2.5 rounded-full", DOT.both)} /> Both</span>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {techGroups.map((group, index) => (
            <Reveal key={group.title} delay={(index % 3) * 0.07}>
              <div className="card-surface h-full rounded-3xl p-6">
                <h3 className="font-display text-lg font-bold">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item.name} className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-2/50 px-3 py-2 text-xs text-muted">
                      <span className={cn("size-2 rounded-full", DOT[item.strong])} />
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
