export default function Hero() {
  return (
    <section
      id="hero"
      className="grain-bg relative min-h-screen flex items-center justify-center bg-[#2C4A1E] overflow-hidden"
      aria-label="Hero"
    >
      {/* Large NPK typographic motif — background layer */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-display text-[22vw] font-[400] text-white opacity-[0.04] leading-none tracking-[0.15em] whitespace-nowrap"
        >
          N·P·K
        </span>
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center text-white">
        {/* Eyebrow */}
        <p className="font-sans text-xs font-[500] uppercase tracking-[0.3em] text-white/60 mb-8">
          Omaha, Nebraska
        </p>

        {/* Headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[400] leading-[1.1] mb-8 max-w-4xl mx-auto">
          The Science Behind Great Lawns.{" "}
          <br className="hidden md:block" />
          The Strategy Behind Great Companies.
        </h1>

        {/* Divider */}
        <div className="w-12 h-px bg-white/40 mx-auto mb-8" />

        {/* Subheadline */}
        <p className="font-sans text-base md:text-lg lg:text-xl font-[300] leading-relaxed text-white/80 max-w-2xl mx-auto mb-12">
          NPK Group acquires and grows exceptional lawn and plant care
          businesses across the Heartland — the kind built on expertise,
          trusted by homeowners, and rooted in their communities.
        </p>

        {/* CTA */}
        <a
          href="#brands"
          className="inline-flex items-center gap-2 border border-white/40 text-white font-sans text-sm font-[400] tracking-wide px-8 py-3.5 hover:bg-white hover:text-[#2C4A1E] transition-all duration-300"
        >
          Explore Our Brands
          <span aria-hidden="true">↓</span>
        </a>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#F7F5F0] pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
