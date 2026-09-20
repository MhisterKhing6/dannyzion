import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import Reveal from '../components/Reveal.jsx';
import SEO from '../components/SEO.jsx';
import { CATEGORIES, galleryItems } from '../data/gallery.js';
import { XIcon, ChevronLeftIcon, ChevronRightIcon } from '../components/Icons.jsx';

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const [loaded, setLoaded] = useState(() => new Set());

  const markLoaded = useCallback((src) => {
    setLoaded((s) => (s.has(src) ? s : new Set(s).add(src)));
  }, []);

  const filtered = filter === 'All' ? galleryItems : galleryItems.filter((it) => it.category === filter);

  const step = useCallback((delta) => {
    if (!filtered.length) return;
    setLightboxIdx((i) => (i === null ? null : (i + delta + filtered.length) % filtered.length));
  }, [filtered.length]);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setLightboxIdx(null);
      if (e.key === 'ArrowLeft') step(-1);
      if (e.key === 'ArrowRight') step(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIdx, step]);

  const active = lightboxIdx !== null ? filtered[lightboxIdx] : null;

  return (
    <>
      <SEO
        title="Portfolio Gallery | DannyZion Art Consult"
        description="Browse interior styling, portraits, sculpture, landscapes and custom artworks from DannyZion Art Consult's studio in Kumasi, Ghana."
      />
      <Nav />

      <Reveal as="section" className="max-w-[1200px] mx-auto px-5 md:px-8 pt-14 md:pt-20 pb-8 md:pb-12">
        <span className="block text-[13px] tracking-wide uppercase text-accent-700 mb-3">Portfolio</span>
        <h1 className="text-4xl md:text-6xl max-w-[20ch] mb-6">A studio's worth of work, one gallery.</h1>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter portfolio by category">
          {['All', ...CATEGORIES].map((cat) => (
            <button
              key={cat}
              type="button"
              className={`btn ${filter === cat ? 'btn-primary' : 'btn-secondary'}`}
              aria-pressed={filter === cat}
              onClick={() => { setFilter(cat); setHoveredIdx(null); }}
            >
              {cat}
            </button>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="max-w-[1200px] mx-auto px-5 md:px-8 pb-14 md:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((it, idx) => (
            <div
              key={it.src + it.title}
              role="button"
              tabIndex={0}
              aria-label={it.title}
              onClick={() => setLightboxIdx(idx)}
              onKeyDown={(e) => { if (e.key === 'Enter') setLightboxIdx(idx); }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx((h) => (h === idx ? null : h))}
              className={`block aspect-[4/5] overflow-hidden relative cursor-pointer bg-surface ${loaded.has(it.src) ? '' : 'animate-pulse'}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                decoding="async"
                onLoad={() => markLoaded(it.src)}
                className={`w-full h-full object-cover transition duration-500 ${loaded.has(it.src) ? 'opacity-100' : 'opacity-0'}`}
                style={{ transform: hoveredIdx === idx ? 'scale(1.02)' : 'scale(1)' }}
              />
              {hoveredIdx === idx && (
                <div className="absolute inset-0 flex flex-col justify-end p-4" style={{ background: 'linear-gradient(180deg,rgba(32,30,29,0) 45%,rgba(32,30,29,0.88) 100%)' }}>
                  <span className="text-[11px] tracking-wide uppercase text-accent-300 mb-1">{it.category}</span>
                  <span className="font-heading font-extrabold text-base text-white">{it.title}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </Reveal>

      {active && (
        <div role="dialog" aria-modal="true" aria-label={active.title} className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12" style={{ background: 'rgba(32,30,29,0.88)' }}>
          <button type="button" onClick={() => setLightboxIdx(null)} aria-label="Close" className="btn btn-icon absolute top-3 md:top-8 right-3 md:right-8 bg-transparent text-white border border-white/40">
            <XIcon size={20} />
          </button>
          <button type="button" onClick={() => step(-1)} aria-label="Previous artwork" className="btn btn-icon absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-transparent text-white border border-white/40">
            <ChevronLeftIcon size={20} />
          </button>
          <button type="button" onClick={() => step(1)} aria-label="Next artwork" className="btn btn-icon absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-transparent text-white border border-white/40">
            <ChevronRightIcon size={20} />
          </button>
          <figure className="m-0 max-w-[min(920px,90vw)] max-h-[88vh] flex flex-col gap-3">
            <img src={active.src} alt={active.alt} className="max-w-full max-h-[74vh] object-contain mx-auto" />
            <figcaption className="text-center text-white">
              <span className="block text-[11px] tracking-wide uppercase text-accent-300 mb-1">{active.category}</span>
              <span className="font-heading font-extrabold text-lg">{active.title}</span>
            </figcaption>
          </figure>
        </div>
      )}

      <Reveal as="section" className="bg-accent text-bg">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-14 md:py-20 flex justify-between items-center gap-6 flex-wrap">
          <h2 className="text-3xl md:text-5xl text-bg m-0 max-w-[22ch]">See something close to what you want?</h2>
          <Link to="/contact" className="btn btn-ghost !text-bg border-2 border-bg px-5 py-3">Start Your Commission</Link>
        </div>
      </Reveal>

      <Footer />
    </>
  );
}
