import { useEffect } from 'react';

export default function SEO({ title, description }) {
  useEffect(() => {
    if (title) document.title = title;

    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', description);
      const og = document.querySelector('meta[property="og:description"]');
      if (og) og.setAttribute('content', description);
      const tw = document.querySelector('meta[name="twitter:description"]');
      if (tw) tw.setAttribute('content', description);
    }

    if (title) {
      const og = document.querySelector('meta[property="og:title"]');
      if (og) og.setAttribute('content', title);
      const tw = document.querySelector('meta[name="twitter:title"]');
      if (tw) tw.setAttribute('content', title);
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', `https://www.dannyzionconsult.com${window.location.pathname}`);
  }, [title, description]);

  return null;
}
