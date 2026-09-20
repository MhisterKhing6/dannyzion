export const Icon = ({ path, size = 16, className = '', viewBox = '0 0 24 24', strokeWidth = 2 }) => (
  <svg width={size} height={size} viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    {path}
  </svg>
);

export const MenuIcon = (p) => <Icon {...p} path={<><path d="M4 12h16" /><path d="M4 6h16" /><path d="M4 18h16" /></>} />;
export const XIcon = (p) => <Icon {...p} path={<><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>} />;
export const ArrowRightIcon = (p) => <Icon {...p} path={<><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>} />;
export const ChevronLeftIcon = (p) => <Icon {...p} path={<path d="m15 18-6-6 6-6" />} />;
export const ChevronRightIcon = (p) => <Icon {...p} path={<path d="m9 18 6-6-6-6" />} />;
export const MailIcon = (p) => <Icon {...p} path={<><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="m22 6-10 7L2 6" /></>} />;
export const PhoneIcon = (p) => <Icon {...p} path={<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.652 1.396l-.464.354a1 1 0 0 0-.302 1.214 14.11 14.11 0 0 0 6.25 6.25z" />} />;
export const MapPinIcon = (p) => <Icon {...p} path={<><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></>} />;
export const ClockIcon = (p) => <Icon {...p} path={<><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>} />;
export const InstagramIcon = (p) => <Icon {...p} path={<><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></>} />;
export const FacebookIcon = (p) => <Icon {...p} path={<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />} />;
export const TikTokIcon = (p) => <Icon {...p} path={<path d="M9 12a4 4 0 1 0 4 4V2a5 5 0 0 0 5 5" />} />;
export const LinkedInIcon = (p) => <Icon {...p} path={<><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></>} />;
export const WhatsAppIcon = (p) => <Icon {...p} path={<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />} />;
export const CheckCircleIcon = (p) => <Icon {...p} path={<><path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" /></>} />;
export const SofaIcon = (p) => <Icon {...p} path={<><path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" /><path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" /><path d="M4 18v2" /><path d="M20 18v2" /></>} />;
export const ImageIcon = (p) => <Icon {...p} path={<><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></>} />;
export const PencilIcon = (p) => <Icon {...p} path={<><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" /><path d="m15 5 4 4" /></>} />;
export const PaintbrushIcon = (p) => <Icon {...p} path={<><path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" /><path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" /></>} />;
export const PackageIcon = (p) => <Icon {...p} path={<><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" x2="12" y1="22.08" y2="12" /></>} />;
export const CropIcon = (p) => <Icon {...p} path={<><path d="M6.13 1 6 16a2 2 0 0 0 2 2h15" /><path d="M1 6.13 16 6a2 2 0 0 1 2 2v15" /></>} />;
export const MountainIcon = (p) => <Icon {...p} path={<path d="m8 3 4 8 5-5 5 15H2L8 3z" />} />;
export const SparklesIcon = (p) => <Icon {...p} path={<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275z" />} />;
