"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Our Brands", href: "#brands" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F7F5F0]/95 backdrop-blur-sm shadow-sm border-b border-[#E0DDD6]"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#hero");
          }}
          className="flex items-center"
          aria-label="NPK Group — home"
        >
          <Image
            src="/logos/npk-group-logo.svg"
            alt="NPK Group"
            width={140}
            height={40}
            className={`h-9 w-auto transition-all duration-500 ${
              scrolled ? "[color-scheme:normal]" : "brightness-0 invert"
            }`}
            style={{ color: scrolled ? "#1A1A18" : "#FFFFFF" }}
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(href);
                }}
                className={`nav-link text-sm font-sans font-[400] tracking-wide transition-colors duration-300 ${
                  scrolled ? "text-[#1A1A18]" : "text-white"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden flex flex-col gap-1.5 p-2 transition-colors duration-300 ${
            scrolled ? "text-[#1A1A18]" : "text-white"
          }`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-px bg-current transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-[10px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-current transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-current transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-[#F7F5F0] flex flex-col justify-center items-center gap-10 transition-all duration-400 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        {navLinks.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(href);
            }}
            className="font-display text-4xl text-[#1A1A18] hover:text-[#2C4A1E] transition-colors duration-300"
            tabIndex={menuOpen ? 0 : -1}
          >
            {label}
          </a>
        ))}
      </div>
    </header>
  );
}
