import { Link } from 'react-router-dom';
import { services } from '../data/services.js';
import { MailIcon, PhoneIcon, MapPinIcon, ClockIcon, InstagramIcon, FacebookIcon, TikTokIcon, LinkedInIcon } from './Icons.jsx';

export default function Footer() {
  return (
    <footer className="border-t-2 border-divider">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 pt-10 md:pt-16 pb-8 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 md:gap-8">
        <div className="col-span-2 sm:col-span-1">
          <p className="font-heading font-extrabold text-lg mb-3">
            DannyZion <span className="text-accent">Art Consult</span>
          </p>
          <p className="text-sm opacity-75 max-w-[32ch] m-0">
            Bespoke art and interior styling from Kumasi, Ghana, with nine years of creativity, craftsmanship and authenticity.
          </p>
          <div className="flex gap-2 mt-4">
            <a href="#" aria-label="Instagram" className="btn btn-secondary btn-icon"><InstagramIcon /></a>
            <a href="#" aria-label="Facebook" className="btn btn-secondary btn-icon"><FacebookIcon /></a>
            <a href="#" aria-label="TikTok" className="btn btn-secondary btn-icon"><TikTokIcon /></a>
            <a href="#" aria-label="LinkedIn" className="btn btn-secondary btn-icon"><LinkedInIcon /></a>
            <a href="https://wa.me/233543858386" aria-label="WhatsApp" className="btn btn-secondary btn-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
            </a>
          </div>
        </div>
        <div>
          <h6 className="text-[13px] tracking-wide uppercase mb-3">Quick Links</h6>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/" className="!text-ink hover:text-accent">Home</Link>
            <Link to="/about" className="!text-ink hover:text-accent">About Us</Link>
            <Link to="/services" className="!text-ink hover:text-accent">Services</Link>
            <Link to="/gallery" className="!text-ink hover:text-accent">Portfolio</Link>
            <Link to="/contact" className="!text-ink hover:text-accent">Contact</Link>
          </div>
        </div>
        <div>
          <h6 className="text-[13px] tracking-wide uppercase mb-3">Services</h6>
          <div className="flex flex-col gap-2 text-sm">
            {services.map((s) => (
              <Link key={s.slug} to={`/services#${s.slug}`} className="!text-ink hover:text-accent">{s.title}</Link>
            ))}
          </div>
        </div>
        <div>
          <h6 className="text-[13px] tracking-wide uppercase mb-3">Contact</h6>
          <div className="flex flex-col gap-3 text-sm">
            <a href="mailto:awuahdaniel4@gmail.com" className="!text-ink hover:text-accent flex gap-2 items-start">
              <MailIcon size={15} className="flex-none mt-0.5" />awuahdaniel4@gmail.com
            </a>
            <a href="tel:+233543858386" className="!text-ink hover:text-accent flex gap-2 items-start">
              <PhoneIcon size={15} className="flex-none mt-0.5" />+233 54 385 8386
            </a>
            <span className="flex gap-2 items-start opacity-85">
              <MapPinIcon size={15} className="flex-none mt-0.5" />Green House Victory, Atwima Kwanwoma, Kumasi, Ashanti Region, Ghana
            </span>
            <span className="flex gap-2 items-start opacity-85">
              <ClockIcon size={15} className="flex-none mt-0.5" />Mon &ndash; Sat, 8:00 AM &ndash; 6:00 PM
            </span>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-divider">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-4 flex justify-between flex-wrap gap-2 text-xs opacity-70">
          <span>&copy; 2026 DannyZion Art Consult. All rights reserved.</span>
          <span>Kumasi, Ashanti Region, Ghana</span>
        </div>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 pb-3 text-center sm:text-right">
          <span className="text-[11px] opacity-50">Created by KB Empire</span>
        </div>
      </div>
    </footer>
  );
}
