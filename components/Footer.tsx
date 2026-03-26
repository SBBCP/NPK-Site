import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A18] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <Image
          src="/logos/npk-group-logo.svg"
          alt="NPK Group"
          width={120}
          height={36}
          className="h-8 w-auto brightness-0 invert opacity-50"
        />

        {/* Copyright + location */}
        <p className="font-sans text-xs font-[300] tracking-wide text-white/40 text-center sm:text-right">
          &copy; {new Date().getFullYear()} NPK Group. All rights reserved.
          <span className="mx-3 opacity-40">·</span>
          Omaha, Nebraska
        </p>
      </div>
    </footer>
  );
}
