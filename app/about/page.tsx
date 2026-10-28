import React from "react";
import Image from "next/image";
import CtaBanner from "@/components/CtaBanner";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Header Box with Centered Brand Logo */}
      <section className="bg-[#f0e0dd] py-16 sm:py-24 text-center">
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

      {/* 2. Hi, I'm Harriet O'Donovan */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Floral Dress Photo */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[3/4] overflow-hidden shadow-lg group">
                <Image
                  src="/images/WhatsApp-Image-2026-02-09-at-11.53.00.jpeg"
                  alt="Harriet O'Donovan in Dubai"
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Right: Bio Text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="w-12 h-[1px] bg-neutral-400 mb-4" />
              <h1 className="font-script text-[42px] sm:text-[50px] lg:text-[55px] text-neutral-900 leading-[1.2]">
                Hi, I&apos;m Harriet O&apos;Donovan
              </h1>
              <div className="space-y-4 font-sans text-[16px] text-neutral-700 leading-[1.7]">
                <p>
                  Spending my childhood in London, a city where everybody has their own style, left a huge impression on me. Surrounded by eclectic styles, from flamboyant to minimalist, I loved the freedom to express who you are.
                </p>
                <p>
                  I was exposed to the wonders of vintage, antique jewellery, and old films, and they were a huge inspiration. A sense of colour and style was a part of my life from an early age. Studying Art History, Fashion Styling and years of experience working with clients as a stylist feeds my vision for what is possible. Colour and tailoring has transformative power.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. My Journey to Fashion Excellence */}
      <section className="py-20 md:py-28 bg-[#d1b7a1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="w-12 h-[1px] bg-black/60 mb-4" />
              <h2 className="font-script text-[42px] sm:text-[50px] lg:text-[55px] text-white leading-[1.2]">
                My Journey to Fashion Excellence
              </h2>
              <div className="space-y-4 font-sans text-[16px] text-neutral-900 leading-[1.7]">
                <p>
                  Making new connections and attracting opportunities is far easier when people can see who you really are. Like a lot of women, I stopped prioritizing style for a while as life got in the way.
                </p>
                <p>
                  When I realized I had become somewhat invisible, I knew it was time to make a change. That is why I recommend showing up stylishly. Life is different.
                </p>
              </div>
            </div>

            {/* Right: Dual B&W Photos */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
              <div className="relative aspect-[3/4] overflow-hidden shadow-md group">
                <Image
                  src="/images/Harriet-with-a-hat.webp"
                  alt="Harriet O'Donovan with hat"
                  fill
                  className="object-cover object-center grayscale group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden shadow-md group mt-8">
                <Image
                  src="/images/Harriet-luxury-styling-page.webp"
                  alt="Harriet O'Donovan in tweed"
                  fill
                  className="object-cover object-center grayscale group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. My Mission */}
      <section className="py-20 md:py-28 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <div className="w-12 h-[1px] bg-neutral-300 mx-auto mb-4" />
          <p className="text-[14px] uppercase tracking-[0.22em] font-sans font-bold text-neutral-500">
            MY MISSION
          </p>
          <h2 className="font-script text-[38px] sm:text-[48px] lg:text-[55px] text-neutral-900 leading-[1.2]">
            To help high achieving women maximise their style
          </h2>
          <p className="font-serif italic text-[18px] sm:text-[20px] text-neutral-700 max-w-2xl mx-auto leading-[1.6] pt-2">
            &lsquo;A lot of people find fashion overwhelming. My mission is to guide my clients to a unique personal style that is easy to maintain.&rsquo;
          </p>
        </div>
      </section>

      {/* 5. Your style. Your mission. */}
      <section className="py-20 md:py-28 bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="font-serif text-[24px] sm:text-[28px] font-bold text-neutral-900 tracking-tight">
                Your style, Your mission...
              </h3>
              <p className="font-sans text-[16px] text-neutral-700 leading-[1.7]">
                Every client is unique, and so is every look. I ensure that you wear the fashion, not the fashion wears you. Whether preparing for a red-carpet moment, corporate engagement, or travel, I blend timeless craftsmanship with modern aesthetics to create a signature style that feels elevated.
              </p>
              <p className="font-serif font-bold text-[18px] text-neutral-900 pt-2">
                Transform your look into a powerful statement.
              </p>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/5] overflow-hidden shadow-lg group">
                <Image
                  src="/images/Harriet-Contact-page-scaled.webp"
                  alt="Harriet O'Donovan resting chin on hand"
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. The Principles That Guide Us */}
      <section className="py-20 md:py-28 bg-[#d1b7a1] text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-script text-[42px] sm:text-[50px] lg:text-[55px] text-white mb-14 tracking-wide leading-[1.2]">
            The Principles That Guide Us
          </h2>

          <div className="bg-white p-8 sm:p-12 md:p-14 shadow-sm border border-neutral-200 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x md:divide-neutral-200 text-left">
              {[
                {
                  title: "Success",
                  desc: "Looking the part helps to fast track success.",
                },
                {
                  title: "Ambition",
                  desc: "We hold a style vision for you, and help you reach it.",
                },
                {
                  title: "Style",
                  desc: "We believe it must be a non-negotiable.",
                },
              ].map((item, idx) => (
                <div key={item.title} className={`${idx !== 0 ? "md:pl-8" : ""}`}>
                  <h3 className="font-serif text-[22px] font-bold text-neutral-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[16px] text-neutral-600 leading-[1.6]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA Banner */}
      <CtaBanner />
    </div>
  );
}
