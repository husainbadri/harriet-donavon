import React from "react";
import Image from "next/image";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";

export default function LuxuryStylingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Brand Logo Banner on Sand */}
      <section className="bg-[#d1b7a1] py-16 sm:py-24 text-center">
        <div className="relative w-64 h-32 md:w-80 md:h-40 mx-auto">
          <Image
            src="/images/logo.png"
            alt="HO Harriet O'Donovan Dubai"
            fill
            className="object-contain"
            priority
          />
        </div>
      </section>

      {/* 2. Style Your Confidence / Hero */}
      <section className="py-20 md:py-28 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h1 className="font-script text-[42px] sm:text-[50px] lg:text-[55px] text-neutral-900 leading-[1.2]">
            Style Your Confidence
          </h1>
          <p className="text-[14px] uppercase tracking-[0.22em] font-sans font-bold text-neutral-800">
            LUXURY STYLING
          </p>
          <div className="space-y-4 font-sans text-[16px] text-neutral-600 max-w-3xl mx-auto leading-[1.7] pt-2">
            <p>
              Great style leads to amazing outcomes. It is a way to connect with yourself and others. Our StyleSuccess System gives you results fast. Everybody has a unique style, and we find it.
            </p>
            <p>
              Our system ensures you look the part. That means you are ready for visibility opportunities and building a personal brand.
            </p>
          </div>
          <div className="w-12 h-[1px] bg-neutral-300 mx-auto my-6" />

          {/* Laptop & Orchid Feature */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-8 text-left">
            <div className="md:col-span-6">
              <div className="relative aspect-[4/3] overflow-hidden shadow-md group">
                <Image
                  src="/images/harrieto_donovan1.webp"
                  alt="Harriet styling session at laptop"
                  fill
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
            <div className="md:col-span-6 space-y-6 md:pl-6">
              <p className="font-sans text-[16px] text-neutral-800 leading-[1.7]">
                Our luxury styling service is crafted for high-achieving individuals who understand that style is an extension of their personal brand.
              </p>
              <div>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-3.5 border border-neutral-900 text-neutral-900 text-[14px] uppercase tracking-[0.22em] font-sans font-semibold hover:bg-neutral-900 hover:text-white transition-all duration-300"
                >
                  DOWNLOAD LOOKBOOK
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Impeccable Style */}
      <section className="py-20 md:py-28 bg-[#fbf9f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h3 className="font-serif text-[24px] sm:text-[30px] font-bold text-neutral-900">
                Impeccable style
              </h3>
              <p className="font-sans text-[16px] text-neutral-700 leading-[1.7]">
                Clothes are a second skin and it is crucial that they fit every aspect of your body and personality. That way you show up authentically. Our styling is luxury because of the personal attention and focus on detail that you will experience. The result is new style possibilities and a feeling of coming home to who you are.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/5] overflow-hidden shadow-lg group">
                <Image
                  src="/images/Harriet-with-a-hat.webp"
                  alt="Harriet O'Donovan editorial portrait"
                  fill
                  className="object-cover object-center grayscale group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Mid-page Banner */}
      <section className="relative py-24 md:py-32 overflow-hidden text-center">
        <Image
          src="/images/harrieto_donovan1.webp"
          alt="Elevate your style"
          fill
          className="object-cover object-center brightness-40"
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 z-10 text-white">
          <h2 className="font-script text-[38px] sm:text-[50px] lg:text-[60px] drop-shadow-md leading-[1.2]">
            Elevate Your Style with Professional Guidance
          </h2>
          <div className="pt-4">
            <Link
              href="/total-style-transformation"
              className="inline-block px-8 py-3.5 border border-white text-white text-[14px] uppercase tracking-[0.22em] font-sans font-medium hover:bg-white hover:text-black transition-all duration-300"
            >
              READY FOR YOUR TRANSFORMATION?
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Life Changing Style Is For You If... (6 White Cards on Sand) */}
      <section className="py-20 md:py-28 bg-[#d1b7a1] text-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-script text-[42px] sm:text-[50px] lg:text-[55px] text-white mb-14 tracking-wide leading-[1.2]">
            Life changing style is for you if...
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "You're incredibly busy and love fashion, but don’t always have time and attention for it because your life is full.",
              "You feel how you would like to show up and would love some guidance to get there.",
              "Style can be a point of stress, another thing to think about.",
              "You would like style to be easy, fast and wonderful.",
              "You would love to work with a stylist who listens, gets you and brings out your style.",
              "You’d love your style to be an extension of your personal brand.",
            ].map((text, idx) => (
              <div
                key={idx}
                className="bg-white p-8 sm:p-10 shadow-sm border border-neutral-100 text-left flex flex-col justify-center min-h-[160px] hover-lift"
              >
                <div className="flex items-start gap-3">
                  <span className="font-serif text-[18px] sm:text-[20px] font-bold text-neutral-900 leading-[1.6]">
                    *
                  </span>
                  <p className="font-serif text-[18px] sm:text-[20px] text-neutral-900 leading-[1.6]">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Dual Transformation Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <h3 className="font-serif text-[24px] sm:text-[30px] font-bold text-neutral-900 leading-[1.35]">
                You’re transformation begins here, a fully personalized approach that turns your image into an asset.
              </h3>
            </div>
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] overflow-hidden shadow-md group">
                <Image
                  src="/images/Harriet-luxury-styling-page.webp"
                  alt="Harriet O'Donovan in tweed"
                  fill
                  className="object-cover object-center grayscale group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative aspect-[4/3] overflow-hidden shadow-md group">
                <Image
                  src="/images/harrieto_donovan1.webp"
                  alt="Harriet styling at desk"
                  fill
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
              <h3 className="font-serif text-[24px] sm:text-[30px] font-bold text-neutral-900 leading-[1.35]">
                Style Success is within reach. Just take the first step.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA Banner */}
      <CtaBanner />
    </div>
  );
}
