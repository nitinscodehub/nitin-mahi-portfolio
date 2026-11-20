# Build Plan — Nitin & Mahi Duo Studio Portfolio

## Design direction

**Concept:** "Two halves, one studio." Nitin = cyan/electric-blue, terminal/grid energy. Mahi = rose/peach/lavender, soft creative energy. The split hero visibly merges into one violet brand gradient as you scroll. The duality repeats in paired cards, dual underlines and the two-cursor effect.

**Palette tokens (CSS variables, dark default + light toggle):**
- Dark: bg `#0B1020`, surface `#121A30`, line `#263253`, ink `#EAF0FF`, muted `#9AA8C7`
- Accent A (Nitin): `#22D3EE` · Accent B (Mahi): `#FB7185` · Shared: `#A78BFA`
- Light overrides keep AA contrast: dark ink on light bg, muted `#4D5875`

**Type:** Space Grotesk (display) · Inter (body) · JetBrains Mono (terminal accents), Google Fonts with `display=swap` and preconnect.

**Motion:** Framer Motion for reveals, layout filters, modals, accordion, counters. `useScroll` + `useTransform` for the scrubbed process line (no GSAP needed — one less dependency). Lenis for smooth scroll, disabled under `prefers-reduced-motion`. Particle/grid hero canvas is lazy-loaded, throttled and paused when the tab is hidden; desktop only.

## Component list

- `layout`: Navbar, Footer, ScrollProgress
- `sections`: Hero, TrustStrip, About, Services, Process, Projects, Achievements, TechStack, WhyUs, Testimonials (hidden until real data), FAQ, Contact
- `ui`: SectionHeading, Button/MagneticButton, SpotlightCard, Modal, Accordion, Toast, Reveal, Counter
- `effects`: Preloader, DualCursor, HeroCanvas, EasterEgg
- `data/content.ts`: single typed source of truth for every string and link
- `hooks`: useTheme, useReducedMotion, useLenis, useMagnetic, useInView, useTypewriter
- `lib`: utils (cn, reveal variants), form validation

## Animation plan

1. Preloader: initials slide from opposite sides and merge (< 1.5 s, skippable, once per session).
2. Hero: word-by-word headline reveal, rotating typewriter role, parallax portraits, magnetic CTAs.
3. Scroll progress bar; every section reveals with a small stagger.
4. Counters animate on enter; tech marquee loops seamlessly.
5. Services: cursor-following spotlight border + subtle tilt.
6. Process: scroll-scrubbed progress line.
7. Projects: filter transitions with layout animation; detail modal springs in.
8. Dual cursor with lag (desktop, no touch, no reduced motion). Konami or 5 logo clicks → harmless confetti + temporary "hacker mode".
9. Reduced motion: no parallax, no Lenis, no cursor, simple fades, no confetti.

## Decisions & caveats

- No fake data: Contra Joki URL is a `#` TODO; Mahi's project/tools/achievement fields are clearly marked placeholders and are NOT rendered until filled.
- Unverifiable claims (patent, tutorials, accuracy, CGPA) live in a `verify` array with `// VERIFY:` comments and are never displayed.
- Nitin's phone is click-to-reveal. Contact form is env-driven (Web3Forms/Formspree) with a `mailto:` fallback and honeypot. No secrets in the repo.
- Static SPA deploy config for both Vercel and Netlify, with security headers and SPA rewrites.
- Photos copied from the provided folder as `public/images/n.png` (Nitin) and `public/images/mahi.png`, with initials fallback if missing. The first version used `ss.png`; it was replaced with the supplied `n.png`.
- Testimonials render nothing while the data array is empty.

## Quality gates

`npm run typecheck`, `npm run lint`, `npm run build` must pass. Responsive at 360 / 768 / 1024 / 1440+. Semantic landmarks, skip link, focus rings, aria labels, alt text, keyboard-operable controls.
