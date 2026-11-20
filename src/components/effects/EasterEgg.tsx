import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export const HACKER_EVENT = "nm:hacker";

export default function EasterEgg() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(false);

  const pieces = useMemo(
    () =>
      Array.from({ length: 44 }, (_, index) => ({
        left: (index * 37) % 100,
        delay: (index % 9) * 0.045,
        duration: 1.6 + (index % 7) * 0.14,
        color: ["var(--color-a)", "var(--color-b)", "var(--color-c)"][index % 3],
        size: 5 + (index % 4) * 3,
      })),
    [],
  );

  useEffect(() => {
    if (reduced) return;
    let position = 0;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === KONAMI[position]) {
        position += 1;
        if (position === KONAMI.length) {
          position = 0;
          trigger();
        }
      } else {
        position = 0;
      }
    };
    const onCustom = () => trigger();
    const trigger = () => {
      setActive(true);
      document.documentElement.classList.add("hacker-mode");
      window.setTimeout(() => {
        setActive(false);
        document.documentElement.classList.remove("hacker-mode");
      }, 4200);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener(HACKER_EVENT, onCustom);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(HACKER_EVENT, onCustom);
    };
  }, [reduced]);

  return (
    <AnimatePresence>
      {active ? (
        <motion.div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[130] overflow-hidden">
          {pieces.map((piece, index) => (
            <motion.span
              key={index}
              className="absolute top-[-20px] rounded-sm"
              style={{ left: `${piece.left}%`, width: piece.size, height: piece.size, background: piece.color }}
              initial={{ y: -30, rotate: 0, opacity: 1 }}
              animate={{ y: "105vh", rotate: 540, opacity: 0 }}
              transition={{ duration: piece.duration, delay: piece.delay, ease: "easeIn" }}
            />
          ))}
          <motion.span
            className="absolute left-1/2 top-10 -translate-x-1/2 rounded-full border border-c bg-surface px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-c"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            hacker mode unlocked · nice
          </motion.span>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
