import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useRef } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function SpotlightCard({
  children,
  className = "",
  tint = "c",
}: {
  children: ReactNode;
  className?: string;
  tint?: "a" | "b" | "c";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const rotateX = useSpring(useMotionValue(0), { stiffness: 180, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 180, damping: 20 });

  function move(event: React.MouseEvent<HTMLDivElement>) {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = event.clientX - rect.left;
    const py = event.clientY - rect.top;
    ref.current.style.setProperty("--mx", `${px}px`);
    ref.current.style.setProperty("--my", `${py}px`);
    rotateY.set(((px / rect.width) - 0.5) * 8);
    rotateX.set(((py / rect.height) - 0.5) * -8);
  }

  function reset() {
    rotateX.set(0);
    rotateY.set(0);
  }

  const color = tint === "a" ? "var(--color-a)" : tint === "b" ? "var(--color-b)" : "var(--color-c)";

  return (
    <motion.div
      ref={ref}
      className={cn("group relative overflow-hidden rounded-3xl card-surface will-change-transform", className)}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onMouseMove={move}
      onMouseLeave={reset}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(320px circle at var(--mx, 50%) var(--my, 50%), color-mix(in srgb, ${color} 20%, transparent), transparent 68%)`,
        }}
      />
      {children}
    </motion.div>
  );
}
