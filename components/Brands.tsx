import Image from "next/image";
import { brands } from "@/lib/brands";
import FadeIn from "./FadeIn";

export default function Brands() {
  return (
    <section
      id="brands"
      className="bg-[#FFFFFF] py-24 px-6"
      aria-labelledby="brands-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <FadeIn>
          <p className="font-sans text-xs font-[500] uppercase tracking-[0.3em] text-[#6B6B5E] mb-6">
            Our Portfolio
          </p>
        </FadeIn>
        <FadeIn delay={100}>
          <h2
            id="brands-heading"
            className="font-display text-4xl md:text-5xl font-[600] leading-[1.1] text-[#1A1A18] mb-16 max-w-xl"
          >
            Companies we&rsquo;re proud to call ours.
          </h2>
        </FadeIn>

        {/* Brand grid — starts at 1 col, expands to 2–3 as brands are added */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, i) => (
            <FadeIn key={brand.slug} delay={150 + i * 100}>
              <article className="group flex flex-col bg-[#F7F5F0] border border-[#E0DDD6] hover:border-[#2C4A1E]/30 transition-colors duration-300 overflow-hidden">
                {/* Logo / header area */}
                <div className="bg-[#FFFFFF] border-b border-[#E0DDD6] px-8 py-10 flex items-center justify-start">
                  <Image
                    src={brand.logoSrc}
                    alt={brand.logoAlt}
                    width={220}
                    height={56}
                    className="h-12 w-auto object-left object-contain"
                  />
                </div>

                {/* Card body */}
                <div className="px-8 py-8 flex flex-col flex-1">
                  <p className="font-sans text-xs font-[500] uppercase tracking-[0.2em] text-[#8B7355] mb-3">
                    {brand.tagline}
                  </p>

                  <p className="font-sans text-base font-[300] leading-relaxed text-[#6B6B5E] flex-1 mb-8">
                    {brand.description}
                  </p>

                  {/* Link */}
                  <a
                    href={brand.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link inline-flex items-center gap-2 font-sans text-sm font-[500] text-[#2C4A1E] group-hover:gap-3 transition-all duration-300"
                  >
                    Visit {brand.name}
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
