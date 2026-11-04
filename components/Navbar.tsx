"use client";

import React, { useState, useEffect } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/98 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? "shadow-sm py-2" : "py-3 md:py-4"
      } border-b border-neutral-200/60`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Brand Logo on Left */}
          <Link href="/" className="flex items-center group flex-shrink-0">
            <div className="relative w-[150px] h-[85px] transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src="/images/cropped-Harriet_O_Donovan_logo-transparent-150x85.png"
                alt="Harriet O'Donovan Dubai"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links on Right */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-10 font-nav">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[17px] xl:text-[18px] uppercase tracking-normal font-light transition-colors duration-200 ${
                    isActive
                      ? "text-black font-normal"
                      : "text-black/90 hover:text-black"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 text-[17px] xl:text-[18px] uppercase font-nav font-light border border-black text-black hover:bg-black hover:text-white transition-all duration-300 rounded-none"
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
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 border-t border-neutral-200 bg-white" : "max-h-0"
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
