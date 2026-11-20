import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import { useState } from "react";
import Modal from "@/components/ui/Modal";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { mahiProjects, projects, type ProjectItem } from "@/data/content";
import { cn, externalLink } from "@/lib/utils";

const FILTERS = ["All", "Web", "App", "Security", "AI-ML"] as const;
type Filter = (typeof FILTERS)[number];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const [selected, setSelected] = useState<ProjectItem | null>(null);
  const visible = filter === "All" ? projects : projects.filter((project) => project.category === filter);

  return (
    <section id="work" className="border-y border-line bg-bg-soft px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            title={<>Projects we <span className="text-gradient">actually built.</span></>}
            subtitle="A sample of security, Flutter, web and AI/ML builds. Click a card for the story behind it."
          />
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
            {FILTERS.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                aria-pressed={filter === item}
                className={cn(
                  "rounded-full border px-4 py-2 text-xs transition-colors",
                  filter === item ? "border-c bg-c/15 text-c" : "border-line text-muted hover:text-ink",
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="card-surface group flex flex-col rounded-3xl p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <span
                    className={cn(
                      "rounded-full border px-3 py-1 font-mono text-[9px] uppercase tracking-widest",
                      project.accent === "a" ? "border-a/40 text-a" : project.accent === "b" ? "border-b/40 text-b" : "border-c/40 text-c",
                    )}
                  >
                    {project.category}
                  </span>
                  <span className="font-mono text-[10px] text-muted">{project.id.slice(0, 3).toUpperCase()}</span>
                </div>

                <h3 className="mt-6 font-display text-xl font-bold">{project.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-surface-2 px-2.5 py-1 text-[10px] text-muted">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-2 border-t border-line pt-5">
                  <button
                    type="button"
                    onClick={() => setSelected(project)}
                    className="flex-1 rounded-full bg-surface-2 py-2.5 text-xs font-semibold text-ink hover:bg-c hover:text-bg"
                  >
                    Case study <ArrowUpRight className="inline size-3.5" />
                  </button>
                  {project.repo ? (
                    <a
                      href={project.repo}
                      {...externalLink()}
                      aria-label={`${project.name} on GitHub`}
                      className="flex items-center justify-center rounded-full border border-line px-3.5 text-muted hover:text-ink"
                    >
                      <Code2 className="size-4" />
                    </a>
                  ) : null}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal className="mt-14">
          <div className="rounded-3xl border border-b/25 bg-surface/30 p-6 sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-b">Mahi&apos;s builds · live proofs</p>
                <h3 className="mt-2 font-display text-2xl font-bold">Shipped, deployed, demo-ready.</h3>
                <p className="mt-2 text-sm text-muted">Every card below has a working live demo and public source code.</p>
              </div>
              <span className="w-fit rounded-full border border-b/40 px-3 py-1 font-mono text-[10px] text-b">
                {mahiProjects.length} live demos
              </span>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {mahiProjects.map((project) => (
                <div key={project.id} className="flex flex-col rounded-2xl border border-line bg-surface p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="font-display text-base font-bold">{project.name}</h4>
                    <span className="rounded-full bg-b/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-b">
                      {project.category}
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-xs leading-relaxed text-muted">{project.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-surface-2 px-2.5 py-1 text-[10px] text-muted">{tag}</span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-2 border-t border-line pt-4">
                    {project.live ? (
                      <a
                        href={project.live}
                        {...externalLink()}
                        className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-b to-c px-4 py-2.5 text-xs font-semibold text-bg"
                      >
                        Live demo <ArrowUpRight className="size-3.5" />
                      </a>
                    ) : null}
                    {project.repo ? (
                      <a
                        href={project.repo}
                        {...externalLink()}
                        className="inline-flex items-center justify-center gap-1.5 rounded-full border border-line px-4 py-2.5 text-xs text-muted hover:text-ink"
                      >
                        <Code2 className="size-3.5" /> Code
                      </a>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <Modal open={Boolean(selected)} onClose={() => setSelected(null)} label={selected ? `${selected.name} case study` : "Case study"}>
        {selected ? (
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-c">{selected.category}</p>
            <h3 className="mt-3 font-display text-3xl font-bold">{selected.name}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">{selected.detail}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {selected.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-line px-3 py-1 text-[11px] text-muted">{tag}</span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {selected.repo ? (
                <a href={selected.repo} {...externalLink()} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-a to-c px-5 py-3 text-sm font-semibold text-bg">
                  <Code2 className="size-4" /> View on GitHub <ArrowUpRight className="size-3.5" />
                </a>
              ) : null}
              {selected.live ? (
                <a href={selected.live} {...externalLink()} className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm">
                  Live demo <ArrowUpRight className="size-3.5" />
                </a>
              ) : null}
            </div>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}
