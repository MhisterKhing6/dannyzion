import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from './Icons.jsx';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className="sticky top-0 z-50">
      <nav className="flex items-center gap-4 px-4 md:px-6 py-3 border-b-2 border-divider bg-bg flex-wrap">
        <Link to="/" className="font-heading font-extrabold text-lg mr-auto flex-none whitespace-nowrap !text-ink">
          DannyZion <span className="text-accent">Art Consult</span>
        </Link>
        <button
          type="button"
          className="btn btn-ghost btn-icon md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <XIcon size={20} /> : <MenuIcon size={20} />}
        </button>
        <div className="hidden md:flex items-center gap-4 flex-none">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              aria-current={pathname === l.to ? 'page' : undefined}
              className={`text-sm whitespace-nowrap ${pathname === l.to ? 'text-accent' : '!text-ink hover:text-accent'}`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="btn btn-primary">Book a Consultation</Link>
        </div>
      </nav>
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 flex flex-col gap-2 p-4 border-b-2 border-divider bg-bg elev-md">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`py-2 ${pathname === l.to ? 'text-accent' : '!text-ink'}`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="btn btn-primary btn-block">
            Book a Consultation
          </Link>
        </div>
      )}
    </div>
  );
}
