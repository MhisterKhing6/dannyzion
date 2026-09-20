import { Link } from 'react-router-dom';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import Reveal from '../components/Reveal.jsx';
import SEO from '../components/SEO.jsx';
import { services } from '../data/services.js';
import { ArrowRightIcon, MailIcon, MapPinIcon, SofaIcon, ImageIcon, PencilIcon, PaintbrushIcon, PackageIcon, CropIcon, MountainIcon, SparklesIcon } from '../components/Icons.jsx';

const ICONS = { sofa: SofaIcon, image: ImageIcon, pencil: PencilIcon, paintbrush: PaintbrushIcon, package: PackageIcon, crop: CropIcon, mountain: MountainIcon, sparkles: SparklesIcon };

const featured = [
  { src: '/images/gallery-wall-mockup.webp', alt: 'Gallery wall styled with mixed artworks' },
  { src: '/images/luxury-living-room.webp', alt: 'Living room interior styled with African art' },
  { src: '/images/realistic-portrait-painting.webp', alt: 'Realistic oil portrait painting in a gold frame' },
  { src: '/images/modern-abstract-sculpture.webp', alt: 'Carved sculptural figure displayed in a gallery' },
  { src: '/images/ghanaian-landscape-painting.webp', alt: 'Ghanaian landscape painting' },
  { src: '/images/market-scene-painting.webp', alt: 'Market scene painting' },
  { src: '/images/family-portrait.webp', alt: 'Family portrait painting' },
  { src: '/images/charcoal-portrait-drawing.webp', alt: 'Charcoal portrait drawing' },
];

const whyUs = [
  { n: '01', title: 'Nine years of proven craft', copy: 'A decade of hands-on painting, drawing, sculpture and interior styling across Ghana.' },
  { n: '02', title: 'Bespoke, not templated', copy: 'Every commission is designed around your space, story and taste, nothing off the shelf.' },
  { n: '03', title: 'Art and interiors, one studio', copy: 'We design the room and make the piece that fills it, so the two are never at odds.' },
  { n: '04', title: 'Honest process, clear quotes', copy: 'Every project is quoted individually after a consultation, with no guesswork and no fixed catalogue prices.' },
];

export default function Home() {
  return (
    <>
      <SEO
        title="DannyZion Art Consult | Art & Interior Design Studio in Kumasi, Ghana"
        description="Bespoke paintings, portraits, sculpture and interior styling from Kumasi, Ghana — nine years of Ghanaian craftsmanship."
      />
      <Nav />

      <Reveal as="section" className="relative min-h-[min(88vh,860px)] flex items-center overflow-hidden">
        <img
          src="/images/hero.webp"
          alt="Framed painting and sculptural artwork styled in a modern Ghanaian home"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(100deg,rgba(32,30,29,0.82) 0%,rgba(32,30,29,0.55) 45%,rgba(32,30,29,0.25) 100%)' }} />
        <div className="relative max-w-[1200px] mx-auto px-5 md:px-8 py-12 md:py-16 w-full">
          <span className="block text-[13px] tracking-wide uppercase text-white/85 mb-4">Kumasi, Ghana &middot; 9 Years of Craft</span>
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-[16ch] mb-4">Art that transforms every space it enters.</h1>
          <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-[52ch] mb-6">
            DannyZion Art Consult designs interiors and creates bespoke paintings, portraits and sculpture, bringing nine years of Ghanaian craftsmanship into modern homes and offices.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link to="/gallery" className="inline-flex items-center gap-1.5 font-heading font-extrabold text-sm text-ink bg-white px-5 py-3 hover:bg-accent-100">
              View Our Portfolio<ArrowRightIcon size={14} />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-1.5 font-heading font-extrabold text-sm text-white border-2 border-white px-5 py-3 hover:bg-white hover:text-ink">
              Book a Consultation
            </Link>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="max-w-[1200px] mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-[1fr_1.4fr] gap-8 md:gap-16 items-start">
        <div>
          <span className="block text-[13px] tracking-wide uppercase text-accent-700 mb-2">Since 2017</span>
          <h2 className="text-3xl md:text-4xl">Nine years of art, styled into living spaces.</h2>
        </div>
        <div>
          <p className="text-base leading-relaxed opacity-85 mb-4">
            DannyZion Art Consult is an art and interior design studio based in Kumasi, Ghana. For nine years we have painted portraits, drawn in charcoal, carved and cast sculpture, and styled homes and offices with work that is made, not mass-produced.
          </p>
          <p className="text-base leading-relaxed opacity-85 mb-6">
            Every commission starts with a conversation about the space and the story it should tell, and ends with a piece built to live in it.
          </p>
          <Link to="/about" className="btn btn-secondary">More about us<ArrowRightIcon size={14} /></Link>
        </div>
      </Reveal>

      <Reveal as="section" className="max-w-[1200px] mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="flex justify-between items-baseline gap-4 flex-wrap mb-8">
          <h2 className="text-3xl md:text-4xl">What we create</h2>
          <Link to="/services" className="text-sm font-heading font-extrabold inline-flex items-center gap-1.5">All services<ArrowRightIcon size={14} /></Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s) => {
            const IconComp = ICONS[s.icon];
            return (
              <Link key={s.slug} to={`/services#${s.slug}`} className="card elev-sm p-6 hover:elev-md hover:-translate-y-0.5 transition !text-ink">
                <IconComp size={26} strokeWidth={1.6} className="text-accent mb-1" />
                <h3 className="text-[17px] m-0">{s.title}</h3>
                <p className="text-sm opacity-75 m-0">{s.short}</p>
              </Link>
            );
          })}
        </div>
      </Reveal>

      <Reveal as="section" className="bg-surface">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="flex justify-between items-baseline gap-4 flex-wrap mb-8">
            <h2 className="text-3xl md:text-4xl">Featured work</h2>
            <Link to="/gallery" className="text-sm font-heading font-extrabold inline-flex items-center gap-1.5">Full portfolio<ArrowRightIcon size={14} /></Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {featured.map((f) => (
              <Link key={f.src} to="/gallery" className="block aspect-[4/5] overflow-hidden relative group">
                <img src={f.src} alt={f.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]" />
              </Link>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="max-w-[1200px] mx-auto px-5 md:px-8 py-14 md:py-24">
        <h2 className="text-3xl md:text-4xl mb-8">Why choose DannyZion</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-16">
          {whyUs.map((w) => (
            <div key={w.n} className="card elev-sm p-6 hover:elev-md hover:-translate-y-0.5 transition">
              <p className="font-heading font-extrabold text-sm text-accent-700 mb-2">{w.n}</p>
              <h3 className="text-lg mb-2">{w.title}</h3>
              <p className="text-[14.5px] opacity-78 m-0">{w.copy}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="bg-accent text-bg">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-14 md:py-20 flex justify-between items-center gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-5xl text-bg mb-3">Ready to bring art into your space?</h2>
            <p className="text-sm opacity-95 flex flex-wrap gap-4 m-0">
              <span className="inline-flex items-center gap-1.5"><MailIcon size={15} />awuahdaniel4@gmail.com</span>
              <span className="inline-flex items-center gap-1.5"><MapPinIcon size={15} />Green House Victory, Atwima Kwanwoma, Kumasi</span>
            </p>
          </div>
          <Link to="/contact" className="btn btn-ghost !text-bg border-2 border-bg px-5 py-3">Book a Consultation</Link>
        </div>
      </Reveal>

      <Footer />
    </>
  );
}
