# Nitin & Mahi — Duo Studio Portfolio

> An animated, award-quality single-page portfolio for two engineering partners. Cyan for Nitin's technical side, rose for Mahi's client/delivery side, violet where they merge into one studio.


Built with **Vite + React 19 + TypeScript + Tailwind CSS v4 + Framer Motion + Lenis**. No backend required.





---

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
npm run lint
npm run typecheck
npm run format
```



## Deploy

Both configs are included with SPA rewrites and security headers (CSP, `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy`):

- **Vercel** — `vercel.json`, `npm run build`, output `dist`
- **Netlify** — `netlify.toml`, publish `dist`

Before going live, update the canonical URL and OG image URL in `index.html`, plus `public/robots.txt` and `public/sitemap.xml`.

## Design & implementation notes

- **Dark default + light toggle**, persisted with `try/catch` around `localStorage`. Tokens are CSS variables mapped to Tailwind utilities in `src/styles/index.css`.
- **No GSAP**: a scroll-scrubbed process line is done with Framer Motion `useScroll`/`useTransform` — one less dependency.
- **No heavy 3D**: the hero uses a tiny throttled canvas particle/grid, lazy-loaded and paused when the tab is hidden.
- **Reduced motion**: parallax, Lenis, dual cursor, marquee, preloader and confetti are all disabled; simple fades remain.
- **Dual cursor** is desktop-only (`hover: hover` and `pointer: fine`).
- **Easter egg**: Konami code or five logo clicks → harmless confetti + temporary "hacker mode".
- **Accessibility**: semantic landmarks, skip link, visible focus rings, labelled form fields with inline errors, alt text, click-to-reveal phone, keyboard-operable controls, AA-contrast tokens.
- **SEO**: title/description, Open Graph + Twitter cards, generated OG image, SVG favicon, `ProfessionalService` JSON-LD, sitemap, robots, canonical.

## Structure

```
src/
├── components/{layout,sections,ui,effects}
├── data/content.ts          ← edit all copy and links here
├── hooks/                   ← theme, Lenis, counter
├── lib/                     ← utils, form validation
├── styles/index.css         ← design tokens + global styles
├── App.tsx
└── main.tsx
public/images/               ← n.png, mahi.png
public/og/og-image.png
PLAN.md                      ← design/component/animation plan
```

## Remaining TODOs

1. Real Contra Joki URL (`CONTRA_JOKI_URL`).
2. Mahi's exact tools, projects and achievements.
3. Contact form endpoint/access key (or keep the mailto fallback).
4. Confirm the `VERIFY:` claims before displaying them.
5. Replace placeholder canonical/OG URLs with the deployed domain.

No fake testimonials, invented clients or fabricated metrics for Mahi are included by design.
