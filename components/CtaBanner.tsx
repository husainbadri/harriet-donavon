import React from "react";
import Link from "next/link";

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CtaBanner({
  title = "Transform Your Look Today with Our Expertise",
  subtitle = "Schedule your personalized style experience today with our expert personal stylist. Let's elevate your wardrobe to match your elegance.",
  buttonText = "LET'S STYLE",
  buttonHref = "/contact",
}: CtaBannerProps) {
  return (
    <section className="relative py-24 md:py-32 bg-[#1b1715] text-white text-center overflow-hidden">
      {/* Dark luxury silk overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-[#211b18]/80 to-black/90 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 z-10">
        <h2 className="font-script text-[42px] sm:text-[55px] lg:text-[65px] text-white leading-[1.2] drop-shadow-md">
          {title}
        </h2>

        {subtitle && (
          <p className="max-w-2xl mx-auto text-neutral-300 font-sans text-[16px] leading-[1.7]">
            {subtitle}
          </p>
        )}

        <div className="pt-4">
          <Link
            href={buttonHref}
            className="inline-block px-10 py-3.5 border border-white text-white font-sans text-[14px] uppercase tracking-[0.22em] font-semibold hover:bg-white hover:text-black transition-all duration-300 rounded-none"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
