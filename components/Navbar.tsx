"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "LUXURY STYLING", href: "/luxury-styling" },
  { name: "THE POWER STYLE TRANSFORMATION", href: "/total-style-transformation" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between lg:justify-end h-[100px] lg:h-[120px] relative">
          {/* Brand Logo - Visible ONLY on Mobile/Tablet (< lg) */}
          <Link href="/" className="flex lg:hidden items-center group flex-shrink-0">
            <div className="relative w-[130px] h-[75px]">
              <Image
                src="/images/cropped-Harriet_O_Donovan_logo-transparent-150x85.png"
                alt="Harriet O'Donovan Dubai"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links & Button - Aligned cleanly */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-10 font-nav">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[17px] xl:text-[18px] uppercase tracking-[1px] font-normal transition-colors duration-200 ${
                    isActive
                      ? "text-black font-medium"
                      : "text-black hover:text-black/70"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-2.5 text-[20px] xl:text-[22px] uppercase font-sans font-light border border-black text-black hover:bg-black hover:text-white transition-all duration-300 rounded-none ml-4"
            >
              LET&apos;S STYLE
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-neutral-900 hover:text-black focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 border-t border-neutral-100 bg-white shadow-lg" : "max-h-0"
        }`}
      >
        <div className="px-6 pt-4 pb-6 space-y-4 font-nav">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block text-base uppercase font-light py-2 ${
                  isActive ? "text-black font-medium" : "text-neutral-700"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-3 text-base uppercase font-light border border-black text-black hover:bg-black hover:text-white transition-colors"
            >
              LET&apos;S STYLE
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
