import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function DualCursor() {
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const x1 = useSpring(useMotionValue(-100), { stiffness: 700, damping: 38 });
  const y1 = useSpring(useMotionValue(-100), { stiffness: 700, damping: 38 });
  const x2 = useSpring(useMotionValue(-100), { stiffness: 130, damping: 22 });
  const y2 = useSpring(useMotionValue(-100), { stiffness: 130, damping: 22 });

  useEffect(() => {
    if (reduced) return;
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setEnabled(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, [reduced]);

  useEffect(() => {
    if (!enabled) return;
    const move = (event: MouseEvent) => {
      x1.set(event.clientX);
      y1.set(event.clientY);
      x2.set(event.clientX);
      y2.set(event.clientY);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [enabled, x1, y1, x2, y2]);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[90] hidden lg:block">
      <motion.div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ x: x1, y: y1 }}>
        <span className="block size-2.5 rounded-full bg-a shadow-[0_0_16px_var(--color-a)]" />
        <span className="absolute left-4 top-1 whitespace-nowrap font-mono text-[9px] uppercase tracking-widest text-a">
          Nitin
        </span>
      </motion.div>
      <motion.div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ x: x2, y: y2 }}>
        <span className="block size-2.5 rounded-full bg-b shadow-[0_0_16px_var(--color-b)]" />
        <span className="absolute left-4 top-4 whitespace-nowrap font-mono text-[9px] uppercase tracking-widest text-b">
          Mahi
        </span>
      </motion.div>
    </div>
  );
}
