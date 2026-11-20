import { useReducedMotion } from "framer-motion";
import { useCallback, useState } from "react";
import DualCursor from "@/components/effects/DualCursor";
import EasterEgg from "@/components/effects/EasterEgg";
import Preloader from "@/components/effects/Preloader";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollProgress from "@/components/layout/ScrollProgress";
import About from "@/components/sections/About";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import TechStack from "@/components/sections/TechStack";
import Testimonials from "@/components/sections/Testimonials";
import TrustStrip from "@/components/sections/TrustStrip";
import WhyUs from "@/components/sections/WhyUs";
import { useLenis } from "@/hooks/useLenis";
import { useTheme } from "@/hooks/useTheme";

export default function App() {
  const { theme, toggle } = useTheme();
  const reduced = useReducedMotion();
  const [ready, setReady] = useState(false);
  useLenis(!reduced);
  const onIntroDone = useCallback(() => setReady(true), []);

  return (
    <div className="grain relative min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <ScrollProgress />
      {!ready ? <Preloader onDone={onIntroDone} /> : null}
      <DualCursor />
      <EasterEgg />
      <Navbar theme={theme} onToggleTheme={toggle} />

      <main id="main">
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <Process />
        <Projects />
        <Achievements />
        <TechStack />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
