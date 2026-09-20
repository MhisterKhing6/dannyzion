import { Link } from 'react-router-dom';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import Reveal from '../components/Reveal.jsx';
import SEO from '../components/SEO.jsx';
import { services } from '../data/services.js';
import { SofaIcon, ImageIcon, PencilIcon, PaintbrushIcon, PackageIcon, CropIcon, MountainIcon, SparklesIcon } from '../components/Icons.jsx';

const ICONS = { sofa: SofaIcon, image: ImageIcon, pencil: PencilIcon, paintbrush: PaintbrushIcon, package: PackageIcon, crop: CropIcon, mountain: MountainIcon, sparkles: SparklesIcon };

export default function Services() {
  return (
    <>
      <SEO
        title="Services | DannyZion Art Consult"
        description="Interior design, house paintings, portrait drawing and painting, sculptural figures and custom artworks — every service quoted to your brief by Danny Zion."
      />
      <Nav />

      <Reveal as="section" className="max-w-[1200px] mx-auto px-5 md:px-8 pt-14 md:pt-20 pb-8 md:pb-12 border-b-2 border-divider">
        <span className="block text-[13px] tracking-wide uppercase text-accent-700 mb-3">Services</span>
        <h1 className="text-4xl md:text-6xl max-w-[22ch] mb-4">Eight ways we bring art into your world.</h1>
        <p className="text-base leading-relaxed opacity-80 max-w-[60ch] m-0">
          From a single charcoal portrait to a full interior styling, every service below is delivered personally by Danny Zion and quoted to your brief, with no fixed catalogue prices.
        </p>
      </Reveal>

      {services.map((s, i) => {
        const IconComp = ICONS[s.icon];
        const reverse = i % 2 === 1;
        return (
          <Reveal as="section" key={s.slug} id={s.slug} className="max-w-[1200px] mx-auto px-5 md:px-8 py-10 md:py-16">
            <div className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${i > 0 ? 'border-t-2 border-divider pt-10 md:pt-16' : ''}`}>
              <figure className={`m-0 aspect-[4/3] overflow-hidden ${reverse ? 'md:order-2' : 'md:order-1'}`}>
                <img src={s.image} alt={s.alt} className="w-full h-full object-cover" />
              </figure>
              <div className={reverse ? 'md:order-1' : 'md:order-2'}>
                <p className="font-heading font-extrabold text-sm text-accent-700 mb-2">{String(i + 1).padStart(2, '0')}</p>
                <h2 className="text-2xl md:text-3xl mb-3">{s.title}</h2>
                <p className="text-[15.5px] leading-relaxed opacity-82 mb-5">{s.long}</p>
                <div className="flex items-center gap-3">
                  <IconComp size={22} strokeWidth={1.6} className="text-accent" />
                  <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}

      <Reveal as="section" className="bg-accent text-bg">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-14 md:py-20 flex justify-between items-center gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-5xl text-bg mb-2">No fixed prices. Every piece is quoted for you.</h2>
            <p className="text-sm opacity-95 max-w-[56ch] m-0">Tell us the service, the space and the brief, and we'll come back with a quote built for exactly what you need.</p>
          </div>
          <Link to="/contact" className="btn btn-ghost !text-bg border-2 border-bg px-5 py-3">Get a Pricing Quote</Link>
        </div>
      </Reveal>

      <Footer />
    </>
  );
}
