import { Quote } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/content";

// Renders nothing until real, permissioned client quotes are added to `testimonials`.
// No fabricated testimonials are ever displayed.
export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="border-y border-line bg-bg-soft px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Client words" title={<>What people <span className="text-gradient">said.</span></>} align="center" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <Reveal key={`${item.name}-${item.role}`}>
              <figure className="card-surface rounded-3xl p-6">
                <Quote className="size-5 text-c" />
                <blockquote className="mt-4 text-sm leading-relaxed text-muted">“{item.quote}”</blockquote>
                <figcaption className="mt-5 font-mono text-[11px] text-ink">{item.name} · {item.role}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
