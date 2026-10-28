"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black text-white pt-14 pb-10 overflow-hidden border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 pb-12">
          {/* Dubai column */}
          <div className="text-left space-y-2">
            <h4 className="text-[14px] uppercase tracking-[0.22em] font-sans font-bold text-neutral-400">
              DUBAI
            </h4>
            <p className="text-[16px] text-neutral-300 font-sans tracking-wide">
              Dubai, UAE
            </p>
          </div>

          {/* Contact column */}
          <div className="text-right space-y-2">
            <h4 className="text-[14px] uppercase tracking-[0.22em] font-sans font-bold text-neutral-400">
              CONTACT
            </h4>
            <p className="text-[16px] text-neutral-300 font-sans tracking-wide">
              <a
                href="mailto:info@harrietodonovan.com"
                className="hover:text-white transition-colors"
              >
                info@harrietodonovan.com
              </a>
            </p>
          </div>
        </div>

        {/* Centered copyright */}
        <div className="pt-6 border-t border-neutral-900 text-center">
          <p className="text-[16px] text-neutral-500 font-sans tracking-wider">
            Copyright © 2026 Harriet O&apos;Donovan
          </p>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 p-2.5 bg-neutral-900 text-white hover:bg-neutral-800 transition-all duration-300 border border-neutral-700 shadow-xl rounded-none"
        >
          <ChevronUp className="w-4 h-4" />
        </button>
      )}
    </footer>
  );
}
