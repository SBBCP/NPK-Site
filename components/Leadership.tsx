import Image from "next/image";
import { team } from "@/lib/team";
import FadeIn from "./FadeIn";

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="bg-[#F7F5F0] py-24 px-6"
      aria-labelledby="leadership-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <FadeIn>
          <p className="font-sans text-xs font-[500] uppercase tracking-[0.3em] text-[#6B6B5E] mb-6">
            Leadership
          </p>
        </FadeIn>
        <FadeIn delay={100}>
          <h2
            id="leadership-heading"
            className="font-display text-4xl md:text-5xl font-[600] leading-[1.1] text-[#1A1A18] mb-4 max-w-xl"
          >
            The people running the business.
          </h2>
        </FadeIn>
        <FadeIn delay={150}>
          <p className="font-sans text-base font-[300] leading-relaxed text-[#6B6B5E] mb-16 max-w-2xl">
            Our team brings decades of experience in lawn and plant care, built
            through years of hands-on work with customers across the Omaha metro.
          </p>
        </FadeIn>

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <FadeIn key={member.name} delay={200 + i * 80}>
              <article className="bg-[#FFFFFF] border border-[#E0DDD6] p-8">
                {/* Photo placeholder / initials */}
                {member.photoSrc ? (
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-5">
                    <Image
                      src={member.photoSrc}
                      alt={`${member.name} headshot`}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ) : (
                  <div
                    className="w-14 h-14 flex items-center justify-center bg-[#2C4A1E]/10 text-[#2C4A1E] font-display text-xl font-[400] mb-5"
                    aria-hidden="true"
                  >
                    {member.name.charAt(0)}
                  </div>
                )}

                {/* Name */}
                <h3 className="font-display text-2xl font-[400] text-[#1A1A18] mb-1">
                  {member.name}
                </h3>

                {/* Title */}
                <p className="font-sans text-xs font-[500] uppercase tracking-[0.2em] text-[#8B7355] mb-4">
                  {member.title}
                </p>

                {/* Divider */}
                <div className="w-8 h-px bg-[#E0DDD6] mb-4" />

                {/* Bio */}
                <p className="font-sans text-sm font-[300] leading-relaxed text-[#6B6B5E]">
                  {member.bio}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
