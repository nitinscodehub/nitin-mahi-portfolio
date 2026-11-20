import { Award, BadgeCheck, Trophy } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { achievements, partners } from "@/data/content";

export default function Achievements() {
  return (
    <section id="achievements" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Proof of work"
          title={<>Ranks, rounds &amp; <span className="text-gradient">receipts.</span></>}
          subtitle="Competitive security and hackathon results, plus the certifications behind the toolkit."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item, index) => (
            <Reveal key={`${item.title}-${item.org}`} delay={(index % 4) * 0.06}>
              <div className="card-surface flex h-full items-start gap-3 rounded-2xl p-5">
                <Trophy className="mt-0.5 size-5 shrink-0 text-c" />
                <div>
                  <p className="font-display text-base font-bold">{item.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{item.org}</p>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-a">{item.year} · {item.kind}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <div className="grid gap-8 rounded-3xl border border-line bg-surface/40 p-6 sm:p-8 lg:grid-cols-2">
            <div>
              <p className="flex items-center gap-2 font-display text-lg font-bold">
                <Award className="size-5 text-a" /> Certifications
              </p>
              <ul className="mt-5 space-y-3">
                {partners[0].certs.map((cert) => (
                  <li key={cert} className="flex gap-2 text-sm text-muted">
                    <BadgeCheck className="mt-0.5 size-4 shrink-0 text-mint" /> {cert}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="flex items-center gap-2 font-display text-lg font-bold">
                <Trophy className="size-5 text-b" /> Practice
              </p>
              <p className="mt-5 text-sm leading-relaxed text-muted">
                Nitin has solved 200+ LeetCode problems and published 50+ public repositories. Mahi&apos;s certifications and achievements will be added here when her finalized resume is shared — nothing is assumed.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
