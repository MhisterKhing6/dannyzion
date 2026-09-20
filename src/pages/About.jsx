import { Link } from 'react-router-dom';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import Reveal from '../components/Reveal.jsx';
import SEO from '../components/SEO.jsx';
import { CheckCircleIcon } from '../components/Icons.jsx';

const values = [
  { n: '01', title: 'Creativity', copy: 'Every brief is a starting point for something original, not a template to fill in.' },
  { n: '02', title: 'Craftsmanship', copy: 'Trained hands, proper materials, and the patience to finish a piece properly.' },
  { n: '03', title: 'Authenticity', copy: 'Work grounded in Ghanaian craft and told honestly, never copied or generic.' },
  { n: '04', title: 'Excellence', copy: 'Every commission is finished to a standard worth putting a name to.' },
];

const stats = [
  { n: '9', label: 'Years of Experience' },
  { n: '150+', label: 'Artworks Delivered' },
  { n: '60+', label: 'Interiors Styled' },
  { n: '100%', label: 'Handcrafted' },
];

const skills = [
  'Interior styling & space planning',
  'Oil & acrylic painting',
  'Charcoal & pencil portraiture',
  'Wood & bronze sculpture',
  'Mural & wall art',
  'Landscape painting',
  'Realism & fine detail work',
  'Custom commissions',
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us | DannyZion Art Consult"
        description="Nine years of art, craft and considered spaces — meet Danny Zion, founder and lead artist of DannyZion Art Consult in Kumasi, Ghana."
      />
      <Nav />

      <Reveal as="section" className="max-w-[1200px] mx-auto px-5 md:px-8 pt-14 md:pt-20 pb-8 md:pb-12 border-b-2 border-divider">
        <span className="block text-[13px] tracking-wide uppercase text-accent-700 mb-3">About Us</span>
        <h1 className="text-4xl md:text-6xl max-w-[20ch] m-0">Nine years of art, craft and considered spaces.</h1>
      </Reveal>

      <Reveal as="section" className="max-w-[1200px] mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-[7fr_5fr] gap-8 md:gap-16 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl mb-4">Our story &amp; mission</h2>
          <p className="text-base leading-relaxed opacity-85 mb-4">
            DannyZion Art Consult began as one artist's easel in Kumasi and has grown, over nine years, into a full art and interior consultancy. We paint, draw, carve and cast, and bring all of it together to style rooms that feel considered rather than decorated.
          </p>
          <p className="text-base leading-relaxed opacity-85 m-0">
            Our mission is simple: make original, well-made art part of everyday Ghanaian homes and workplaces, and design the spaces around it with the same care.
          </p>
        </div>
        <figure className="m-0 aspect-[4/5] overflow-hidden">
          <img src="/images/about.webp" alt="Framed portrait paintings and artwork styled on a living room wall" className="w-full h-full object-cover" />
        </figure>
      </Reveal>

      <Reveal as="section" className="bg-surface">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-[5fr_7fr] gap-8 md:gap-16 items-center">
          <figure className="m-0 aspect-[4/5] overflow-hidden">
            <img src="/images/about-artist-at-work.webp" alt="Danny Zion, founder and lead artist, in his studio" className="w-full h-full object-cover" />
          </figure>
          <div>
            <span className="block text-[13px] tracking-wide uppercase text-accent-700 mb-3">Founder &amp; Lead Artist</span>
            <h2 className="text-2xl md:text-3xl mb-4">Danny Zion</h2>
            <p className="text-base leading-relaxed opacity-85 mb-4">
              Danny Zion founded DannyZion Art Consult in Kumasi and has spent nine years working across painting, drawing and sculpture, and styling the interiors that hold them. His work is rooted in Ghanaian craft and built for how people actually live in a room.
            </p>
            <p className="text-base leading-relaxed opacity-85 m-0">He leads every commission personally, from the first consultation to the final install.</p>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="max-w-[1200px] mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t-2 border-b-2 border-divider py-8">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-heading font-extrabold text-4xl md:text-5xl text-accent m-0">{s.n}</p>
              <p className="text-[13px] tracking-wide uppercase opacity-70 mt-2 mb-0">{s.label}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="max-w-[1200px] mx-auto px-5 md:px-8 py-14 md:py-20">
        <h2 className="text-3xl md:text-4xl mb-8">Core values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-16">
          {values.map((v) => (
            <div key={v.n} className="border-t-2 border-divider pt-4">
              <p className="font-heading font-extrabold text-sm text-accent-700 mb-2">{v.n}</p>
              <h3 className="text-lg mb-2">{v.title}</h3>
              <p className="text-[14.5px] opacity-78 m-0">{v.copy}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="bg-surface">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-14 md:py-20">
          <h2 className="text-3xl md:text-4xl mb-8">Skills &amp; specialties</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {skills.map((s) => (
              <div key={s} className="flex items-center gap-2.5 bg-bg elev-sm p-4">
                <CheckCircleIcon size={18} strokeWidth={1.8} className="flex-none text-accent" />
                <span className="font-heading font-extrabold text-sm">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="bg-accent text-bg">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-14 md:py-20 flex justify-between items-center gap-6 flex-wrap">
          <h2 className="text-3xl md:text-5xl text-bg m-0 max-w-[22ch]">Let's talk about your space.</h2>
          <Link to="/contact" className="btn btn-ghost !text-bg border-2 border-bg px-5 py-3">Book a Consultation</Link>
        </div>
      </Reveal>

      <Footer />
    </>
  );
}
