import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { lazy, Suspense, useEffect, useState } from "react";
import MagneticButton from "@/components/ui/MagneticButton";
import SmartImage from "@/components/ui/SmartImage";
import { CONTRA_JOKI_URL, partners, studio } from "@/data/content";
import { cn } from "@/lib/utils";

const HeroCanvas = lazy(() => import("@/components/effects/HeroCanvas"));

export default function Hero() {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const [roleIndex, setRoleIndex] = useState(0);

  const leftY = useTransform(scrollY, [0, 700], [0, reduced ? 0 : -60]);
  const rightY = useTransform(scrollY, [0, 700], [0, reduced ? 0 : 60]);
  const mergeOpacity = useTransform(scrollY, [0, 420], [0, reduced ? 0 : 0.85]);

  useEffect(() => {
    if (reduced) return;
    const timer = window.setInterval(() => setRoleIndex((index) => (index + 1) % studio.heroRoles.length), 2300);
    return () => window.clearInterval(timer);
  }, [reduced]);

  const words = studio.taglines[0].split(" ");

  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 sm:pt-40">
      <Suspense fallback={null}>{!reduced ? <HeroCanvas /> : null}</Suspense>
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-10 size-[34rem] rounded-full bg-a/10 blur-[130px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-32 size-[34rem] rounded-full bg-b/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="size-1.5 rounded-full bg-mint shadow-[0_0_10px_var(--color-mint)]" />
          Freelance studio · {studio.location}
        </motion.div>

        <h1 className="mt-8 max-w-5xl font-display text-[clamp(2.8rem,8vw,6.4rem)] font-bold leading-[0.98]">
          {words.map((word, index) => (
            <motion.span
              key={`${word}-${index}`}
              className={cn(
                "mr-3 inline-block",
                index === 0 && "text-a",
                index === 1 && "text-gradient",
                index === 2 && "text-b",
              )}
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 40, rotateX: -30 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.1 + index * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          Two engineers, one studio. We build web apps, Flutter apps and AI products — and we secure what we ship.
        </motion.p>

        <div className="mt-5 flex h-8 items-center font-mono text-xs text-c">
          <span className="mr-2 text-muted">&gt;</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {studio.heroRoles[roleIndex]}
              <span className="ml-1 animate-pulse">_</span>
            </motion.span>
          </AnimatePresence>
        </div>

        <motion.div className="mt-8 flex flex-wrap items-center gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}>
          <MagneticButton href="#contact">
            Hire Us <ArrowUpRight className="size-4" />
          </MagneticButton>
          <MagneticButton href="#work" variant="ghost">
            View Work <ArrowDown className="size-4" />
          </MagneticButton>
          <a
            href={CONTRA_JOKI_URL}
            {...(CONTRA_JOKI_URL === "#" ? {} : { target: "_blank", rel: "noopener noreferrer" })}
            className="inline-flex items-center gap-2 rounded-full border border-c/40 bg-c/10 px-4 py-3 text-xs text-c hover:bg-c/20"
          >
            <Sparkles className="size-3.5" /> Find us on Contra Joki
          </a>
        </motion.div>

        {/* Split duo stage */}
        <motion.div
          className="relative mt-16 grid gap-4 md:grid-cols-2"
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.div
            style={{ y: leftY }}
            className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-a/25 bg-gradient-to-br from-a/10 via-surface to-surface p-6 sm:p-8"
          >
            <div className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(var(--color-a) 1px, transparent 1px), linear-gradient(90deg, var(--color-a) 1px, transparent 1px)", backgroundSize: "38px 38px", maskImage: "linear-gradient(to bottom, black, transparent)" }} />
            <p className="relative font-mono text-[10px] uppercase tracking-[0.25em] text-a">01 / Technical lead</p>
            <div className="relative mt-4 flex items-end justify-center">
              <SmartImage
                src={partners[0].image}
                alt={`${partners[0].name}, technical lead`}
                initials={partners[0].initials}
                accent="a"
                eager
                className="h-64 w-full rounded-3xl"
                imgClassName="h-72 w-72 max-w-full rounded-3xl object-cover drop-shadow-[0_20px_40px_rgba(34,211,238,0.35)] sm:h-80 sm:w-80"
              />
            </div>
            <div className="relative mt-4 flex items-center justify-between gap-3">
              <div>
                <p className="font-display text-xl font-bold">{partners[0].name}</p>
                <p className="text-xs text-muted">{partners[0].focus}</p>
              </div>
              <span className="rounded-full border border-a/40 px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-a">Builds</span>
            </div>
          </motion.div>

          <motion.div
            style={{ y: rightY }}
            className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-b/25 bg-gradient-to-bl from-b/10 via-surface to-surface p-6 sm:p-8"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-b/15 blur-3xl" />
            <p className="relative font-mono text-[10px] uppercase tracking-[0.25em] text-b">02 / Client &amp; delivery lead</p>
            <div className="relative mt-4 flex items-end justify-center">
              <SmartImage
                src={partners[1].image}
                alt={`${partners[1].name}, client and delivery lead`}
                initials={partners[1].initials}
                accent="b"
                eager
                className="h-64 w-64 rounded-full sm:h-72 sm:w-72"
                imgClassName="size-56 rounded-full object-cover shadow-[0_20px_50px_-12px_var(--color-b)] sm:size-64"
              />
            </div>
            <div className="relative mt-4 flex items-center justify-between gap-3">
              <div>
                <p className="font-display text-xl font-bold">{partners[1].name}</p>
                <p className="text-xs text-muted">{partners[1].focus}</p>
              </div>
              <span className="rounded-full border border-b/40 px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-b">Delivers</span>
            </div>
          </motion.div>

          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-r from-a/20 via-c/30 to-b/20 mix-blend-screen"
            style={{ opacity: mergeOpacity }}
          />
          <span className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-c/40 bg-bg/80 px-4 py-2 font-display text-lg font-bold text-c backdrop-blur md:block">
            &amp;
          </span>
        </motion.div>

        <a href="#about" className="mt-12 inline-flex items-center gap-2 text-xs text-muted hover:text-ink">
          <ArrowDown className="size-3.5 animate-bounce" /> Scroll to meet the studio
        </a>
      </div>
    </section>
  );
}
