import { WhatsAppIcon } from './Icons.jsx';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/233543858386"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-[100] w-14 h-14 rounded-full flex items-center justify-center bg-[#25D366] text-white elev-md hover:bg-[#1ebe57] hover:-translate-y-0.5 transition"
    >
      <span className="wa-pulse absolute inset-0 rounded-full bg-[#25D366]" aria-hidden="true" />
      <WhatsAppIcon size={28} strokeWidth={2} className="relative" />
    </a>
  );
}
