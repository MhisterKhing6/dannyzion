import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Gallery from './pages/Gallery.jsx';
import Contact from './pages/Contact.jsx';

// Only the images visible on first paint of the landing page — not the full
// gallery — so the loading screen stays fast regardless of portfolio size.
const CRITICAL_IMAGES = [
  '/images/hero.webp',
  '/images/gallery-wall-mockup.webp',
  '/images/luxury-living-room.webp',
  '/images/realistic-portrait-painting.webp',
  '/images/modern-abstract-sculpture.webp',
  '/images/ghanaian-landscape-painting.webp',
  '/images/market-scene-painting.webp',
  '/images/family-portrait.webp',
  '/images/charcoal-portrait-drawing.webp',
];
const SAFETY_TIMEOUT_MS = 8000;

function preloadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = resolve;
    img.src = src;
  });
}

export default function App() {
  const [phase, setPhase] = useState('loading');

  useEffect(() => {
    let cancelled = false;
    const ready = Promise.all(CRITICAL_IMAGES.map(preloadImage));
    const safety = new Promise((resolve) => setTimeout(resolve, SAFETY_TIMEOUT_MS));

    Promise.race([ready, safety]).then(() => {
      if (cancelled) return;
      setPhase('leaving');
      setTimeout(() => {
        if (!cancelled) setPhase('done');
      }, 500);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  if (phase !== 'done') return <Loader leaving={phase === 'leaving'} />;

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <WhatsAppButton />
    </>
  );
}
