import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Eye, EyeOff, MapPin } from "lucide-react";
import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SmartImage from "@/components/ui/SmartImage";
import { mahiHeadline, partners, studio, type Partner } from "@/data/content";
import { cn, externalLink } from "@/lib/utils";

function PartnerCard({ partner, index }: { partner: Partner; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const [phoneVisible, setPhoneVisible] = useState(false);
  const isNitin = partner.id === "nitin";

  return (
    <Reveal delay={index * 0.12}>
      <motion.article
        whileHover={expanded ? undefined : { y: -6 }}
        className={cn(
          "card-surface relative h-full overflow-hidden rounded-3xl p-6 transition-shadow sm:p-8",
          isNitin ? "hover:shadow-[0_30px_80px_-50px_var(--color-a)]" : "hover:shadow-[0_30px_80px_-50px_var(--color-b)]",
        )}
      >
        <div className={cn("absolute inset-x-0 top-0 h-1", isNitin ? "bg-gradient-to-r from-a to-c" : "bg-gradient-to-r from-c to-b")} />
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <div className="shrink-0">
            <div
              className={cn(
                "relative size-32 overflow-hidden rounded-[2rem] border-2 sm:size-40",
                isNitin ? "border-a/50" : "border-b/50",
              )}
              style={{ boxShadow: `0 0 50px -18px ${isNitin ? "var(--color-a)" : "var(--color-b)"}` }}
            >
              <SmartImage
                src={partner.image}
                alt={`${partner.name}, ${partner.role}`}
                initials={partner.initials}
                accent={partner.accent}
                className="size-full"
                imgClassName={cn("size-full", isNitin ? "object-contain object-bottom" : "object-cover")}
              />
            </div>
            <p className={cn("mt-3 font-mono text-[10px] uppercase tracking-[0.2em]", isNitin ? "text-a" : "text-b")}>
              {partner.initials} · {isNitin ? "Builds" : "Delivers"}
            </p>
          </div>

          <div className="min-w-0 flex-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-c">{partner.role}</p>
            <h3 className="mt-2 font-display text-3xl font-bold">{partner.name}</h3>
            <p className="mt-1 text-sm text-muted">{partner.focus}</p>
            <p className="mt-4 text-sm leading-relaxed text-ink/90">{partner.bio}</p>
            {!isNitin ? <p className="mt-3 text-xs leading-relaxed text-muted">{mahiHeadline}</p> : null}
            <p className="mt-4 flex items-center gap-2 text-xs text-muted">
              <MapPin className="size-3.5 shrink-0" /> {partner.education}
            </p>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {partner.skills.slice(0, expanded ? partner.skills.length : 8).map((skill) => (
            <span key={skill} className="rounded-full border border-line bg-surface-2/60 px-3 py-1.5 text-[11px] text-muted">
              {skill}
            </span>
          ))}
          {partner.skills.length > 8 ? (
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="rounded-full border border-c/40 px-3 py-1.5 text-[11px] text-c"
            >
              {expanded ? "Show less" : `+${partner.skills.length - 8} more`}
            </button>
          ) : null}
        </div>

        <AnimatePresence initial={false}>
          {expanded ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              {partner.experience.length > 0 ? (
                <ul className="mt-6 space-y-4 border-t border-line pt-6">
                  {partner.experience.map((item) => (
                    <li key={`${item.role}-${item.org}`} className="text-sm">
                      <p className="font-semibold text-ink">{item.role}</p>
                      <p className="text-xs text-c">{item.org} · {item.period}</p>
                      <p className="mt-1 text-xs leading-relaxed text-muted">{item.detail}</p>
                    </li>
                  ))}
                </ul>
              ) : null}
              {partner.achievements.length > 0 ? (
                <ul className="mt-6 space-y-2 border-t border-line pt-6">
                  {partner.achievements.slice(0, 6).map((item) => (
                    <li key={item} className="flex gap-2 text-xs text-muted">
                      <span className={isNitin ? "text-a" : "text-b"}>✦</span> {item}
                    </li>
                  ))}
                </ul>
              ) : null}
              {partner.placeholderNote ? (
                <p className="mt-6 rounded-xl border border-dashed border-line p-4 font-mono text-[11px] text-muted">
                  {partner.placeholderNote}
                </p>
              ) : null}
            </motion.div>
          ) : null}
        </AnimatePresence>

        <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-line pt-5">
          <a href={`mailto:${partner.email}`} className="text-xs text-a hover:underline">
            {partner.email}
          </a>
          {partner.phone ? (
            phoneVisible ? (
              <a
                href={`tel:${partner.phone.replace(/[^+\d]/g, "")}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-a/40 px-3 py-1.5 text-[11px] text-a hover:underline"
              >
                <EyeOff className="size-3" /> {partner.phone}
              </a>
            ) : (
              <button
                type="button"
                onClick={() => setPhoneVisible(true)}
                className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-[11px] text-muted hover:text-ink"
              >
                <Eye className="size-3" /> Click to reveal phone
              </button>
            )
          ) : null}
          <div className="ml-auto flex flex-wrap gap-3">
            {partner.links.map((link) => (
              <a key={link.label} href={link.url} {...externalLink()} className="text-[11px] text-muted hover:text-ink">
                {link.label} <ArrowUpRight className="inline size-2.5" />
              </a>
            ))}
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}

export default function About() {
  return (
    <section id="about" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Meet the duo"
          title={<>Two halves. <span className="text-gradient">One studio.</span></>}
          subtitle={studio.intro}
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {partners.map((partner, index) => (
            <PartnerCard key={partner.id} partner={partner} index={index} />
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="grid gap-5 rounded-3xl border border-line bg-surface/40 p-6 sm:p-8 md:grid-cols-3">
            {[
              { title: "Mahi leads the conversation", text: "Scoping, timelines, updates and smooth delivery — one clear point of contact." },
              { title: "Nitin leads the build", text: "Architecture, code, Flutter apps and security testing from first commit to handover." },
              { title: "Both review each other", text: "Every deliverable gets a second pair of eyes before it reaches you." },
            ].map((item, index) => (
              <div key={item.title}>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-c">0{index + 1}</p>
                <h3 className="mt-2 font-display text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
