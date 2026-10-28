function Cobweb({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.25">
        <path d="M0 0 L190 8" />
        <path d="M0 0 L170 70" />
        <path d="M0 0 L120 140" />
        <path d="M0 0 L55 185" />
        <path d="M0 0 L8 190" />
        <path d="M48 2 C58 28 28 36 8 48" />
        <path d="M96 4 C112 48 70 62 18 92" />
        <path d="M142 6 C150 78 100 100 28 138" />
        <path d="M178 18 C160 110 110 140 48 176" />
      </g>
    </svg>
  );
}

function Pumpkin({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 64 72" aria-hidden="true">
      <path d="M32 14c1-8 8-10 10-4" stroke="#86efac" strokeWidth="3" fill="none" />
      <path
        d="M32 16c8 0 14 6 16 16 6-2 12 2 12 10 0 14-10 24-28 24S4 56 4 42c0-8 6-12 12-10 2-10 8-16 16-16z"
        fill="currentColor"
      />
      <path d="M24 36h6l-2 8 4-8h4l-2 8 4-8h6" stroke="#120816" strokeWidth="2" fill="none" />
      <path d="M26 54c4 4 8 4 12 0" stroke="#120816" strokeWidth="2" fill="none" />
    </svg>
  );
}

export default function HalloweenBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <Cobweb className="absolute -left-2 top-0 h-28 w-28 text-bone/25 sm:h-40 sm:w-40" />
      <Cobweb className="absolute -right-2 top-0 h-28 w-28 -scale-x-100 text-bone/20 sm:h-36 sm:w-36" />
      <Pumpkin className="absolute left-6 top-[22rem] hidden h-16 w-16 text-halloween-pumpkin xl:block" />
      <Pumpkin className="absolute right-4 top-80 hidden h-16 w-16 text-halloween-pumpkin/90 xl:block" />
      <div className="absolute left-[22%] top-16 h-1.5 w-1.5 animate-flicker rounded-full bg-halloween-glow" />
      <div className="absolute right-[26%] top-28 h-1.5 w-1.5 animate-flicker rounded-full bg-halloween-mist [animation-delay:0.7s]" />
    </div>
  );
}
