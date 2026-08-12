const items = [
  "Diseño Web",
  "SEO Técnico",
  "Automatizaciones IA",
  "E-commerce",
  "Landing Pages",
  "Analytics",
];

export default function Marquee() {
  const track = [...items, ...items];

  return (
    <section
      aria-label="Servicios destacados"
      className="relative z-20 -mt-1 overflow-hidden border-y border-ink-line bg-ink-raised py-5"
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-8 font-display text-sm uppercase tracking-[0.25em] text-bone/70"
          >
            {item}
            <span className="ml-8 text-coral">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
