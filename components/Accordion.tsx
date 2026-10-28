"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="border border-brand-sand/60 bg-[#cbb39e] text-white transition-colors"
          >
            <button
              onClick={() => toggleItem(idx)}
              className="w-full py-4 px-6 flex items-center justify-between text-left focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-sans text-xs md:text-sm uppercase tracking-[0.18em] font-medium text-white">
                {item.question}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-white transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-6 pt-2 text-sm font-sans text-neutral-100 leading-relaxed border-t border-white/20">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
