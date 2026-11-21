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

## Edit the content (single source of truth)

**All words, links, services, projects, achievements, skills and FAQs live in [`src/data/content.ts`](src/data/content.ts).** You do not need to touch components to change copy.

- `STUDIO_NAME` — rename the studio in one line.
- `CONTRA_JOKI_URL` — **TODO: replace `#` with the real profile URL.**
- `studio` — tagline options, rotating hero roles, intro, location, email.
- `partners` — Nitin and Mahi's bios, skills, experience, achievements, certs, links.
- `services`, `process`, `projects`, `achievements`, `techGroups`, `whyUs`, `faqs`, `counters` — section content.
- `testimonials` — intentionally empty. The component renders **nothing** until you add real, permissioned quotes.

### VERIFY before publishing

`src/data/content.ts` carries explicit `// VERIFY:` comments for claims that should not be shown until confirmed: **patent pending, 30+ tutorials, 92% accuracy, CGPA**. They are stored in `partner.verify` and are deliberately **not rendered** anywhere.

### Mahi's details

Her five deployed builds (Portfolio, Pulse, Askly, Cartly, Flowbit) are listed in the Work section with live demos and source links. Her exact tools and achievements were not supplied, so nothing was invented — her card keeps a clearly-marked `TODO` note for those until you provide them.

## Replace the photos

The originals were copied, unrenamed, into:

```
public/images/n.png      → Nitin (1024×1024 portrait)
public/images/mahi.png   → Mahi (150×150)
```

Replace either file with the same filename. `SmartImage` falls back to a styled initials avatar (`ND` / `MP`) if an image is missing or fails to load, so the site never breaks.

## Contact form setup

1. Copy `.env.example` → `.env.local`.
2. Choose one provider:
   - **Web3Forms** — set `VITE_CONTACT_ENDPOINT=https://api.web3forms.com/submit` and `VITE_CONTACT_ACCESS_KEY=...`
   - **Formspree** — set `VITE_CONTACT_ENDPOINT=https://formspree.io/f/...`
3. Set `VITE_CONTACT_EMAIL` for the fallback.

With **no endpoint configured**, the submit button opens a prefilled `mailto:` to `mahipriyadarshi0@gmail.com`, so the form works out of the box. Validation, a honeypot field and a provider-side rate limit note are included. **Never commit `.env.local`.**

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
