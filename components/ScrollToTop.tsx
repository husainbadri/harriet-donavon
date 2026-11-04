"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 250);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to Top"
      className="fixed bottom-6 right-6 z-40 w-8 h-8 md:w-9 md:h-9 bg-black text-white rounded-[2px] flex items-center justify-center hover:bg-neutral-800 transition-opacity duration-300 shadow-md focus:outline-none"
    >
      <ChevronUp className="w-5 h-5 text-white" strokeWidth={2.5} />
    </button>
  );
}
