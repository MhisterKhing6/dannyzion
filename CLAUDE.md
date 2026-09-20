# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A React (Vite) + Tailwind CSS site for DannyZion Art Consult: Home, About, Services, Gallery (filter + lightbox), Contact. Client-side routing via `react-router-dom`. No backend — the Contact page links directly to `mailto:`, `tel:`, and `wa.me` instead of a form.

## Commands

```bash
npm install
npm run dev       # start dev server (Vite, usually http://localhost:5173)
npm run build     # production build to dist/
npm run preview   # preview the production build locally
```

There is no test suite and no linter configured in this repo.

Because routing is client-side, any static host needs a SPA rewrite rule (fall back to `index.html` for unknown paths) so routes like `/about` work on refresh/direct link. `public/_redirects` handles this for Cloudflare Pages (see Deployment below).

## Architecture

- `src/App.jsx` — the route table (`<Routes>`), one route per page in `src/pages/`. Also owns the initial-load gate: it preloads a small `CRITICAL_IMAGES` list (the homepage hero + featured strip only, not the whole gallery) and renders `Loader` until they're ready or an 8s safety timeout passes, then renders the routes plus a persistent `WhatsAppButton`.
- `src/main.jsx` — mounts `App` inside `BrowserRouter` and `React.StrictMode`.
- `src/pages/*.jsx` — one component per route (Home, About, Services, Gallery, Contact). Each page composes `SEO` + `Nav` + page sections + `Footer` itself; there is no shared layout wrapper. Top-level `<section>`s are wrapped as `<Reveal as="section">` for scroll-in fade/slide animation — when adding a new section, wrap it the same way for consistency, and keep in mind `Reveal`'s `IntersectionObserver` uses `threshold: 0` deliberately (a higher threshold breaks on tall sections, since it's a fraction of the section's own height, not the viewport — this bit the gallery page once already).
- `src/components/` — `Nav.jsx`, `Footer.jsx`, `Icons.jsx` (hand-written inline SVG icons, imported individually rather than from a library), `Reveal.jsx` (scroll-reveal wrapper), `Loader.jsx` (splash screen), `WhatsAppButton.jsx` (floating action button, wa.me link), `SEO.jsx` (per-page `document.title`/meta-description/OG overrides — see SEO below).
- `src/data/services.js` and `src/data/gallery.js` — page content as plain data arrays (service entries with slug/title/copy/icon/image; gallery items with src/alt/title/category). Pages map over these rather than hardcoding content, so most content edits touch these files, not the page components.
- `public/images/` — curated photos referenced directly from Home/About/Services. `public/images/portfolio/` — the Gallery page's photo set specifically (referenced from `gallery.js`); when adding new portfolio photos, convert to WebP and resize to a ~1600px max edge first (matches the existing set's size/quality).

## SEO

- `index.html` holds the static defaults: meta description, OG/Twitter card tags, a `LocalBusiness` JSON-LD block, canonical link, favicons (`favicon.ico`, `apple-touch-icon.png`, `icon-512.png`), `site.webmanifest`, and `og-image.jpg` (social preview). All reference the production domain `https://www.dannyzionconsult.com/` directly.
- Each page renders `<SEO title=... description=... />` near the top to override `document.title` and the meta/OG/Twitter description and title tags for that route client-side (there's no SSR/prerendering, so this only helps crawlers that execute JS — Googlebot does).
- `public/robots.txt` and `public/sitemap.xml` are static and hardcode the five routes and the production domain — update both by hand if routes or the domain change.

## Deployment

Deployed via Cloudflare Pages' own Git integration (dashboard-connected to this repo) — no GitHub Actions workflow. Build command `npm run build`, output directory `dist`. `public/_redirects` (`/* /index.html 200`) is what makes Cloudflare Pages serve the SPA for any client-side route instead of 404ing. The custom domain (`www.dannyzionconsult.com`) is attached to the Pages project via the Cloudflare dashboard, not a file in this repo.

## Styling

- Tailwind config (`tailwind.config.js`) defines the design system: colors (`bg`, `surface`, `ink`, `divider`, `accent` with a 100–900 scale, base accent `#ec3013`), `heading`/`body` font families (Archivo, loaded via Google Fonts in `src/index.css`), a custom shadow scale (`sm`/`md`/`lg`), and `borderRadius` forced to `0px` across the board (the design is intentionally square-cornered).
- `src/index.css` has an `@layer components` block with the shared class primitives used across pages: `.btn` (+ `.btn-primary`, `.btn-secondary`, `.btn-ghost`, `.btn-icon`, `.btn-block`), `.card`, `.elev-sm`/`.elev-md`, `.tag`. Prefer these over ad hoc utility combos when building buttons/cards/tags so new UI matches existing pages.
- No CSS modules or styled-components — styling is Tailwind utility classes plus the components layer above.
