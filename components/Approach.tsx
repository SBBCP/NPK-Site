import FadeIn from "./FadeIn";

const pillars = [
  {
    number: "01",
    title: "Local First",
    body: "We don't run our businesses from a boardroom. Every brand in our portfolio keeps its local identity, its local team, and its connection to the community it's served for years. That's not a strategy — it's a conviction.",
  },
  {
    number: "02",
    title: "Built on Expertise",
    body: "We focus on the technical side of lawn and plant care — the programs and treatments that require certified professionals and proven science. We're not in the mowing business. We're in the expertise business.",
  },
  {
    number: "03",
    title: "Partnership Minded",
    body: "When we acquire a business, we bring resources, operational support, and a genuine interest in the team's success. We work with the people who built the company — not around them.",
  },
];

export default function Approach() {
  return (
    <section
      id="approach"
      className="bg-[#F7F5F0] py-24 px-6"
      aria-labelledby="approach-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <FadeIn>
          <p className="font-sans text-xs font-[500] uppercase tracking-[0.3em] text-[#6B6B5E] mb-6">
            Our Approach
          </p>
        </FadeIn>
        <FadeIn delay={100}>
          <h2
            id="approach-heading"
            className="font-display text-4xl md:text-5xl font-[600] leading-[1.1] text-[#1A1A18] mb-16 max-w-xl"
          >
            We&rsquo;re long-term owners, not flippers.
          </h2>
        </FadeIn>

        {/* Pillar cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <FadeIn key={pillar.number} delay={150 + i * 100}>
              <article className="bg-[#FFFFFF] border border-[#E0DDD6] p-8 h-full flex flex-col">
                {/* Number */}
                <span className="font-sans text-xs font-[500] uppercase tracking-[0.25em] text-[#8B7355] mb-6">
                  {pillar.number}
                </span>

                {/* Title */}
                <h3 className="font-display text-2xl font-[400] text-[#1A1A18] mb-4">
                  {pillar.title}
                </h3>

                {/* Divider */}
                <div className="w-8 h-px bg-[#E0DDD6] mb-5" />

                {/* Body */}
                <p className="font-sans text-base font-[300] leading-relaxed text-[#6B6B5E] flex-1">
                  {pillar.body}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
