export default function Loader({ leaving = false }) {
  return (
    <div
      className={`fixed inset-0 z-[999] flex items-center justify-center bg-bg transition-opacity duration-500 ${leaving ? 'opacity-0' : 'opacity-100'}`}
      role="status"
      aria-label="Loading"
    >
      <div className="loader-frame relative px-10 py-7 md:px-14 md:py-9">
        <p className="font-heading font-extrabold text-xl md:text-2xl m-0 whitespace-nowrap">
          DannyZion <span className="text-accent">Art Consult</span>
        </p>
      </div>
    </div>
  );
}
