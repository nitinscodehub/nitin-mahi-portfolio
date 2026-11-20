import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import MagneticButton from "@/components/ui/MagneticButton";
import { HACKER_EVENT } from "@/components/effects/EasterEgg";
import { navLinks, STUDIO_NAME } from "@/data/content";
import type { Theme } from "@/hooks/useTheme";

export default function Navbar({ theme, onToggleTheme }: { theme: Theme; onToggleTheme: () => void }) {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);
  const clicks = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY.current && y > 140 && !menuOpen);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  function logoClick() {
    clicks.current += 1;
    if (clicks.current >= 5) {
      clicks.current = 0;
      window.dispatchEvent(new Event(HACKER_EVENT));
    }
  }

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-[100] border-b border-transparent"
        animate={{ y: hidden ? -100 : 0, backgroundColor: hidden ? "transparent" : "color-mix(in srgb, var(--color-bg) 82%, transparent)" }}
        transition={{ duration: 0.3 }}
        style={{ backdropFilter: "blur(16px)" }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8" aria-label="Main navigation">
          <button type="button" onClick={logoClick} className="flex items-center gap-2" aria-label={`${STUDIO_NAME} home — click logo five times for a surprise`}>
            <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-a via-c to-b font-display text-xs font-bold text-bg">
              N&amp;M
            </span>
            <span className="hidden font-display text-sm font-bold tracking-tight sm:block">
              Nitin <span className="text-c">&amp;</span> Mahi
            </span>
          </button>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-xs font-medium text-muted transition-colors hover:text-ink">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              className="flex size-9 items-center justify-center rounded-full border border-line text-muted hover:text-ink"
            >
              {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
            <MagneticButton href="#contact" className="hidden px-5 py-2.5 text-xs sm:inline-flex">
              Hire Us <ArrowUpRight className="size-3.5" />
            </MagneticButton>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="flex size-9 items-center justify-center rounded-full border border-line text-ink md:hidden"
            >
              <Menu className="size-4" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="fixed inset-0 z-[110] flex flex-col bg-bg px-6 py-6 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-lg font-bold">Menu</span>
              <button type="button" onClick={() => setMenuOpen(false)} aria-label="Close menu" className="flex size-9 items-center justify-center rounded-full border border-line">
                <X className="size-4" />
              </button>
            </div>
            <div className="mt-12 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-line py-4 font-display text-3xl font-semibold"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
            <MagneticButton href="#contact" className="mt-auto w-full" onClick={() => setMenuOpen(false)}>
              Hire Us <ArrowUpRight className="size-4" />
            </MagneticButton>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
