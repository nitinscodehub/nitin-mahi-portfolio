import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useRef } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "ghost" | "soft";
  strength?: number;
  ariaLabel?: string;
};

export default function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  variant = "primary",
  strength = 0.28,
  ariaLabel,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });

  const base =
    variant === "primary"
      ? "bg-gradient-to-r from-a to-c text-bg shadow-[0_18px_40px_-20px_var(--color-a)]"
      : variant === "soft"
        ? "bg-surface-2 text-ink border border-line"
        : "border border-line text-ink bg-transparent";

  function move(event: React.MouseEvent<HTMLElement>) {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  const style = { x, y };
  const classes = cn(
    "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 will-change-transform",
    base,
    className,
  );

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        aria-label={ariaLabel}
        className={classes}
        style={style}
        onMouseMove={move}
        onMouseLeave={reset}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={classes}
      style={style}
      onMouseMove={move}
      onMouseLeave={reset}
    >
      {children}
    </motion.button>
  );
}
