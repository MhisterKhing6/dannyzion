import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import Reveal from '../components/Reveal.jsx';
import SEO from '../components/SEO.jsx';
import { MailIcon, PhoneIcon, MapPinIcon, ClockIcon, InstagramIcon, FacebookIcon, TikTokIcon, LinkedInIcon, WhatsAppIcon } from '../components/Icons.jsx';

const tiles = [
  { href: 'mailto:awuahdaniel4@gmail.com', Icon: MailIcon, label: 'Email', value: 'awuahdaniel4@gmail.com' },
  { href: 'tel:+233543858386', Icon: PhoneIcon, label: 'Call', value: '+233 54 385 8386' },
  { href: 'https://wa.me/233543858386', Icon: WhatsAppIcon, label: 'WhatsApp', value: 'Message us instantly' },
];

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us | DannyZion Art Consult"
        description="Get in touch with DannyZion Art Consult in Kumasi, Ghana — email, call or WhatsApp us to plan your space or commission your next piece."
      />
      <Nav />

      <Reveal as="section" className="max-w-[1200px] mx-auto px-5 md:px-8 pt-14 md:pt-20 pb-8 md:pb-12 border-b-2 border-divider">
        <span className="block text-[13px] tracking-wide uppercase text-accent-700 mb-3">Contact Us</span>
        <h1 className="text-4xl md:text-6xl max-w-[22ch] m-0">Let's plan your space or your next piece.</h1>
      </Reveal>

      <Reveal as="section" className="max-w-[1200px] mx-auto px-5 md:px-8 py-14 md:py-20">
        <h2 className="text-2xl mb-2">Reach us directly</h2>
        <p className="text-[14.5px] opacity-72 max-w-[60ch] mb-6">Email, call or WhatsApp us with your idea, and we will reply within one business day.</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14 md:mb-20">
          {tiles.map(({ href, Icon, label, value }) => (
            <a key={label} href={href} className="card elev-sm p-6 md:p-8 hover:elev-md hover:-translate-y-0.5 transition !text-ink">
              <Icon size={24} strokeWidth={1.7} className="text-accent mb-2" />
              <p className="text-xs tracking-wide uppercase opacity-60 mb-1.5">{label}</p>
              <p className="font-heading font-extrabold text-base m-0">{value}</p>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16 items-start">
          <div className="card elev-sm p-6">
            <h2 className="text-lg mb-4">Business Information</h2>
            <div className="grid gap-3 text-[14.5px]">
              <span className="flex gap-2.5 items-start">
                <MapPinIcon size={16} className="flex-none mt-0.5 text-accent" />
                Green House Victory, Atwima Kwanwoma, Kumasi, Ashanti Region, Ghana
              </span>
              <span className="flex gap-2.5 items-start">
                <ClockIcon size={16} className="flex-none mt-0.5 text-accent" />
                Monday &ndash; Saturday, 8:00 AM &ndash; 6:00 PM
              </span>
            </div>
            <div className="flex gap-2 mt-4">
              <a href="#" aria-label="Instagram" className="btn btn-secondary btn-icon"><InstagramIcon /></a>
              <a href="#" aria-label="Facebook" className="btn btn-secondary btn-icon"><FacebookIcon /></a>
              <a href="#" aria-label="TikTok" className="btn btn-secondary btn-icon"><TikTokIcon /></a>
              <a href="#" aria-label="LinkedIn" className="btn btn-secondary btn-icon"><LinkedInIcon /></a>
            </div>
          </div>
          <div className="card elev-sm p-6">
            <h2 className="text-lg mb-3">Find Us</h2>
            <div className="aspect-video border-2 border-divider overflow-hidden">
              <iframe
                title="Map showing Green House Victory, Atwima Kwanwoma, Kumasi, Ghana"
                src="https://www.google.com/maps?q=Green+House+Victory,+Atwima+Kwanwoma,+Kumasi,+Ghana&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </Reveal>

      <Footer />
    </>
  );
}
