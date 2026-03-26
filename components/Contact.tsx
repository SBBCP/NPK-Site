"use client";

// TODO: Wire up a real form backend (e.g. Resend, Formspree, or a Next.js API route)
// before going live. Currently opens a pre-filled mailto: link on submit.

import { useState, FormEvent } from "react";
import FadeIn from "./FadeIn";

const CONTACT_EMAIL = "barton@baumpartners.com";

export default function Contact() {
  const [fields, setFields] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `NPK Group inquiry from ${fields.name}${fields.company ? ` — ${fields.company}` : ""}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${fields.name}`,
        `Company: ${fields.company}`,
        `Phone: ${fields.phone}`,
        `Email: ${fields.email}`,
        fields.message ? `\nMessage:\n${fields.message}` : "",
      ]
        .filter(Boolean)
        .join("\n")
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-transparent border border-[#E0DDD6] focus:border-[#2C4A1E] outline-none px-4 py-3 font-sans text-sm font-[300] text-[#1A1A18] placeholder:text-[#6B6B5E]/60 transition-colors duration-200";

  return (
    <section
      id="contact"
      className="bg-[#2C4A1E] py-24 px-6"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — copy */}
          <div>
            <FadeIn>
              <p className="font-sans text-xs font-[500] uppercase tracking-[0.3em] text-white/50 mb-6">
                Get In Touch
              </p>
            </FadeIn>
            <FadeIn delay={100}>
              <h2
                id="contact-heading"
                className="font-display text-4xl md:text-5xl font-[600] leading-[1.1] text-white mb-8"
              >
                Thinking about your next chapter?
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="space-y-4 font-sans text-base font-[300] leading-relaxed text-white/75">
                <p>
                  If you&rsquo;ve built a lawn or plant care company and
                  you&rsquo;re exploring what&rsquo;s next — whether that&rsquo;s
                  retirement, growth, or simply finding the right partner —
                  we&rsquo;d like to have a conversation. We know the industry,
                  we respect what it takes to build a loyal customer base, and we
                  approach acquisitions as long-term partnerships, not
                  transactions.
                </p>
                <p>Reach out. No pressure, no rush.</p>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="mt-10 pt-10 border-t border-white/20">
                <p className="font-sans text-xs font-[500] uppercase tracking-[0.25em] text-white/40 mb-2">
                  Direct email
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="nav-link font-sans text-sm font-[400] text-white/80 hover:text-white transition-colors duration-200"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right — form */}
          <FadeIn delay={200}>
            {submitted ? (
              <div className="bg-white/10 border border-white/20 px-8 py-12 text-center">
                <p className="font-display text-3xl text-white mb-3">
                  Thank you.
                </p>
                <p className="font-sans text-sm font-[300] text-white/70">
                  Your email client should open with a pre-filled message. We
                  look forward to the conversation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Name *"
                      value={fields.name}
                      onChange={handleChange}
                      className={inputClass}
                      style={{ color: "inherit" }}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="sr-only">
                      Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Company Name"
                      value={fields.company}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Email *"
                    value={fields.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Phone"
                    value={fields.phone}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Message (optional)"
                    value={fields.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-[#2C4A1E] font-sans text-sm font-[500] tracking-wide py-4 hover:bg-[#F7F5F0] transition-colors duration-300"
                >
                  Start the Conversation
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
