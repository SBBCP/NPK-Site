export default function Hero() {
  return (
    <section
      id="hero"
      className="grain-bg relative min-h-screen flex items-end justify-start bg-[#2C4A1E] overflow-hidden"
      aria-label="Hero"
    >
      {/* Large NPK typographic motif — background layer */}
      <div
        className="absolute inset-0 flex items-center justify-end pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span className="font-display text-[45vw] md:text-[28vw] font-[400] text-white opacity-[0.05] leading-none tracking-widest translate-x-16">
          NPK
        </span>
      </div>

      {/* Hero content — left-aligned, bottom of viewport */}
      <div className="relative z-10 w-full px-6 sm:px-10 md:px-16 pb-20 md:pb-28 pt-32">
        {/* Eyebrow */}
        <p className="font-sans text-[10px] font-[500] uppercase tracking-[0.35em] text-white/50 mb-6">
          Omaha, Nebraska
        </p>

        {/* Headline */}
        <h1 className="font-display text-[2.6rem] sm:text-5xl md:text-6xl lg:text-7xl font-[400] leading-[1.05] text-white mb-8 max-w-3xl">
          The Science Behind Great Lawns.{" "}
          The Strategy Behind Great Companies.
        </h1>

        {/* Divider */}
        <div className="w-10 h-px bg-white/40 mb-7" />

        {/* Subheadline */}
        <p className="font-sans text-sm sm:text-base md:text-lg font-[300] leading-relaxed text-white/70 max-w-xl mb-10">
          NPK Group acquires and grows exceptional lawn and plant care
          businesses across the Heartland — the kind built on expertise,
          trusted by homeowners, and rooted in their communities.
        </p>

        {/* CTA */}
        <a
          href="#brands"
          className="inline-flex items-center gap-2 border border-white/40 text-white font-sans text-xs font-[500] uppercase tracking-widest px-7 py-3.5 hover:bg-white hover:text-[#2C4A1E] transition-all duration-300"
        >
          Explore Our Brands
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
