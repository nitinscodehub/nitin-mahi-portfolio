import { ArrowUp, ArrowUpRight } from "lucide-react";
import { CONTRA_JOKI_URL, navLinks, partners, STUDIO_NAME, studio } from "@/data/content";
import { externalLink } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg-soft px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-2xl font-bold">
              {STUDIO_NAME} <span className="text-c">✳</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{studio.shortBio}</p>
            <a href={`mailto:${studio.email}`} className="mt-4 inline-block text-sm text-a hover:underline">
              {studio.email}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Explore</p>
              <ul className="mt-4 space-y-2 text-sm">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-muted hover:text-ink">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Connect</p>
              <ul className="mt-4 space-y-2 text-sm">
                {partners.flatMap((partner) =>
                  partner.links.slice(0, 2).map((link) => (
                    <li key={`${partner.id}-${link.label}`}>
                      <a href={link.url} {...externalLink()} className="inline-flex items-center gap-1 text-muted hover:text-ink">
                        {link.label} <span className="text-[10px]">({partner.name.split(" ")[0]})</span>
                        <ArrowUpRight className="size-3" />
                      </a>
                    </li>
                  )),
                )}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Hire</p>
              <a href={CONTRA_JOKI_URL} {...(CONTRA_JOKI_URL === "#" ? {} : externalLink())} className="mt-4 inline-flex items-center gap-1 text-sm text-b hover:underline">
                Contra Joki <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>Made with ♥ by Nitin &amp; Mahi · © {new Date().getFullYear()}</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 hover:text-ink"
          >
            Back to top <ArrowUp className="size-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
