import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { STUDIO_NAME } from "@/data/content";

const KEY = "nm-studio-intro";

export default function Preloader({ onDone }: { onDone: () => void }) {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reduced) {
      onDone();
      return;
    }
    try {
      if (sessionStorage.getItem(KEY) === "done") {
        onDone();
        return;
      }
    } catch {
      // Intro simply shows again if storage is unavailable.
    }
    setVisible(true);
    const timer = window.setTimeout(finish, 1450);
    return () => window.clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function finish() {
    try {
      sessionStorage.setItem(KEY, "done");
    } catch {
      // Non-critical.
    }
    setVisible(false);
    window.setTimeout(onDone, 280);
  }

  if (!visible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-bg"
      exit={{ opacity: 0 }}
      initial={{ opacity: 1 }}
    >
      <div className="flex items-center gap-3">
        <motion.span
          className="font-display text-5xl font-bold text-a sm:text-7xl"
          initial={{ x: -160, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          N
        </motion.span>
        <motion.span
          className="font-display text-5xl font-bold text-c sm:text-7xl"
          initial={{ scale: 0.4, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.4 }}
        >
          &amp;
        </motion.span>
        <motion.span
          className="font-display text-5xl font-bold text-b sm:text-7xl"
          initial={{ x: 160, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          M
        </motion.span>
      </div>
      <motion.p
        className="mt-5 font-mono text-[11px] uppercase tracking-[0.3em] text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        {STUDIO_NAME} · loading studio
      </motion.p>
      <div className="mt-7 h-0.5 w-48 overflow-hidden rounded-full bg-line">
        <motion.div
          className="h-full bg-gradient-to-r from-a via-c to-b"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.15, ease: "easeInOut" }}
        />
      </div>
      <button
        type="button"
        onClick={finish}
        className="mt-6 text-xs text-muted underline decoration-dotted underline-offset-4 hover:text-ink"
      >
        Skip intro
      </button>
    </motion.div>
  );
}
