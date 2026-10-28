"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role?: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Harriet transformed my wardrobe and completely changed how I show up in my business and personal life. I feel confident, elegant, and authentic every single day.",
    author: "Sophia",
    role: "Entrepreneur",
  },
  {
    quote:
      "Harriet understood well what works for me, and that was from the first consultation. She has incredible fashion sense. She has the eye.",
    author: "Sofia Sayerh",
    role: "Yoga Entrepreneur",
  },
  {
    quote:
      "Working with Harriet completely transformed how I show up in the world. I used to dread getting dressed, and now I love my wardrobe and feel confident every day.",
    author: "Sarah Jenkins",
    role: "Corporate Executive",
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((curr) => (curr === 0 ? testimonials.length - 1 : curr - 1));
  };

  const next = () => {
    setCurrent((curr) => (curr === testimonials.length - 1 ? 0 : curr + 1));
  };

  return (
    <section className="py-20 md:py-28 bg-[#d1b7a1] text-brand-charcoal overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-script text-5xl md:text-6xl text-white mb-10 tracking-wide">
          Client Love
        </h2>

        <div className="relative min-h-[160px] flex items-center justify-center">
          {/* Previous button */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 p-2 text-white hover:text-black transition-colors focus:outline-none"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Testimonial content with smooth fade */}
          <div className="px-12 md:px-20 transition-all duration-500 ease-in-out">
            <p className="font-sans text-sm md:text-base leading-relaxed text-black font-normal max-w-2xl mx-auto">
              &ldquo;{testimonials[current].quote}&rdquo;
            </p>
            <p className="mt-6 font-serif italic text-base md:text-lg text-black font-semibold">
              {testimonials[current].author}
              {testimonials[current].role && (
                <span className="block text-xs font-sans font-normal uppercase tracking-wider text-black/70 mt-1">
                  {testimonials[current].role}
                </span>
              )}
            </p>
          </div>

          {/* Next button */}
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 p-2 text-white hover:text-black transition-colors focus:outline-none"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                current === i ? "bg-black w-6" : "bg-black/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
