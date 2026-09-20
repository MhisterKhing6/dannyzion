# DannyZion Art Consult — React + Tailwind

A React (Vite) + Tailwind CSS rebuild of the DannyZion Art Consult site: Home, About, Services, Gallery (filter + lightbox) and Contact, using client-side routing.

## Run it

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

`npm run build` outputs static files to `dist/` — deploy that folder to any static host (Netlify, Vercel, GitHub Pages, S3, etc.). Because routing is client-side, configure your host to fall back to `index.html` for unknown paths (a "SPA rewrite" rule) so `/about`, `/gallery`, etc. work on refresh/direct link.

## Deployment (Cloudflare Pages)

Deployed via the Cloudflare Pages dashboard's Git integration (connect this repo, no GitHub Actions involved). Build settings:

- **Build command:** `npm run build`
- **Build output directory:** `dist`

`public/_redirects` (`/* /index.html 200`) makes Cloudflare Pages serve `index.html` for every path, so client-side routes like `/about` and `/gallery` resolve on refresh/direct link. Add the custom domain **www.dannyzionconsult.com** under the Pages project's **Custom domains** tab.

## SEO

- `index.html` carries the default meta description, Open Graph/Twitter card tags, a `LocalBusiness` JSON-LD block, and the canonical/favicon/manifest links. `public/og-image.jpg` is the social-share preview image.
- `src/components/SEO.jsx` is dropped into each page to override `document.title`, the meta description, and OG/Twitter titles per route (a lightweight stand-in for SSR-based per-page metadata, since this is a client-rendered SPA).
- `public/robots.txt` and `public/sitemap.xml` reference the production domain directly — update both if the domain ever changes.

## Structure

```
src/
  components/   Nav, Footer, Icons (inline SVG set)
  data/         services.js, gallery.js — page content as data
  pages/        Home, About, Services, Gallery, Contact
  index.css     Tailwind + small @layer components (btn, card, tag …)
public/images/  Artwork photos (from the uploaded design assets)
```

## Notes

- Colors, spacing and type approximate the original flat/architectural design: near-mono red accent (#ec3013) on off-white, 0px border radius, Archivo type — defined in `tailwind.config.js` and the `@layer components` block in `src/index.css`.
- No backend/contact form — the Contact page links directly to email, phone (tel:) and WhatsApp (wa.me), matching the live site.
- Swap any file under `public/images/` to update artwork photos; filenames are referenced from `src/data/services.js` and `src/data/gallery.js`.
