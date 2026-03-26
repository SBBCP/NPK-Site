import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#FFFFFF] py-24 px-6"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Eyebrow */}
        <FadeIn>
          <p className="font-sans text-xs font-[500] uppercase tracking-[0.3em] text-[#6B6B5E] mb-6">
            About NPK Group
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Headline column */}
          <FadeIn delay={100}>
            <h2
              id="about-heading"
              className="font-display text-4xl md:text-5xl font-[600] leading-[1.1] text-[#1A1A18]"
            >
              Named for the nutrients that make lawns thrive.
            </h2>
          </FadeIn>

          {/* Body copy column */}
          <FadeIn delay={200}>
            <div className="space-y-5 font-sans text-base font-[300] leading-relaxed text-[#1A1A18]">
              <p>
                N, P, and K — nitrogen, phosphorus, and potassium — are the
                three essential nutrients that determine whether a lawn merely
                survives or genuinely thrives. We chose that name deliberately.
              </p>
              <p>
                NPK Group is an Omaha-based holding company focused on
                acquiring and growing premium lawn and plant care businesses.
                We concentrate on the services that require real expertise:
                fertilization, pest control, tree and shrub care, irrigation,
                and landscape design. These aren&rsquo;t commodity services.
                They&rsquo;re science-based programs that demand skilled
                technicians, deep local knowledge, and a long-term commitment
                to the customer.
              </p>
              <p>
                That&rsquo;s the kind of company we look for. And that&rsquo;s
                the kind of company we build.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Decorative divider */}
        <div className="mt-20 border-t border-[#E0DDD6]" />
      </div>
    </section>
  );
}
