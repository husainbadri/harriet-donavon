"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "I never felt more confident in my outfits! Harriet’s sense of style is impeccable, and she listened to exactly what I wanted.",
    author: "Sarah",
  },
  {
    quote:
      "Harriet transformed my wardrobe into something I truly love. Her eye for detail and understanding of my needs were exceptional.",
    author: "Sophia",
  },
  {
    quote:
      "The styling session was a delightful experience! Harriet’s professionalism and expertise shine through in every piece she selected for me.",
    author: "Emily",
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
    <section className="py-24 md:py-28 bg-[#d1b7a1] text-neutral-900 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-script text-[41px] text-black mb-10 leading-[1.25] font-light">
          Client Love
        </h2>

        <div className="relative min-h-[180px] flex items-center justify-center">
          {/* Previous button */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 p-2 text-black hover:opacity-70 transition-opacity focus:outline-none"
          >
            <ChevronLeft className="w-8 h-8 stroke-[1.5]" />
          </button>

          {/* Testimonial quote & author */}
          <div className="px-12 md:px-20 transition-all duration-500 ease-in-out">
            <p className="font-sans text-[20px] sm:text-[22px] leading-[34px] text-black font-light max-w-2xl mx-auto">
              &ldquo;{testimonials[current].quote}&rdquo;
            </p>
            <p className="mt-6 font-serif text-[20px] text-black font-semibold">
              {testimonials[current].author}
            </p>
          </div>

          {/* Next button */}
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 p-2 text-black hover:opacity-70 transition-opacity focus:outline-none"
          >
            <ChevronRight className="w-8 h-8 stroke-[1.5]" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2.5 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                current === i ? "bg-black w-7" : "bg-black/35"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
