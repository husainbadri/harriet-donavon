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
  subtitle = "Join our satisfied clients and experience the luxury of personalized styling that elevates your confidence and style.",
  buttonText = "Let’s Style",
  buttonHref = "/contact",
}: CtaBannerProps) {
  return (
    <section
      className="relative w-full pt-16 pb-24 text-white text-center overflow-hidden"
      style={{
        background: "linear-gradient(0deg, rgb(0, 0, 0) 80%, rgb(255, 255, 255) 80%)",
      }}
    >
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-7 z-10 pt-10">
        <h2 className="font-script text-[40px] sm:text-[50px] text-white leading-[1.25] font-light">
          {title}
        </h2>

        {subtitle && (
          <p className="max-w-2xl mx-auto text-white font-sans text-[18px] sm:text-[22px] leading-[34px] font-light">
            {subtitle}
          </p>
        )}

        <div className="pt-2">
          <Link
            href={buttonHref}
            className="inline-block px-10 py-3.5 border border-white text-[#f0e0dd] font-serif text-[18px] sm:text-[20px] tracking-normal font-light hover:bg-white hover:text-black transition-all duration-300 rounded-none uppercase"
          >
            {buttonText}
          </Link>
        </div>

        {/* Contact info below button matching live site */}
        <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto text-center border-t border-neutral-800/80">
          <div>
            <p className="text-[14px] uppercase font-bold text-[#d1b7a1] tracking-wider mb-1">
              Address
            </p>
            <p className="text-[18px] font-bold text-white font-sans">
              Dubai, UAE
            </p>
          </div>

          <div>
            <p className="text-[14px] uppercase font-bold text-[#d1b7a1] tracking-wider mb-1">
              Phone No
            </p>
            <p className="text-[18px] font-bold text-white font-sans">
              <a href="tel:+971524354925" className="hover:text-[#d1b7a1] transition-colors">
                +971 52 435 4925
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
