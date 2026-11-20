import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, AlertCircle } from "lucide-react";

export default function Toast({
  message,
  tone = "success",
}: {
  message: string | null;
  tone?: "success" | "error";
}) {
  return (
    <AnimatePresence>
      {message ? (
        <motion.div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 z-[140] flex -translate-x-1/2 items-center gap-2 rounded-full border border-line bg-surface px-5 py-3 text-sm shadow-2xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
        >
          {tone === "success" ? (
            <CheckCircle2 className="size-4 text-mint" />
          ) : (
            <AlertCircle className="size-4 text-b" />
          )}
          {message}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
