import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[150] h-0.5 origin-left bg-gradient-to-r from-a via-c to-b"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
