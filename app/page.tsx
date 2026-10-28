import React from "react";
import Image from "next/image";
import Link from "next/link";
import TestimonialSlider from "@/components/TestimonialSlider";
import CtaBanner from "@/components/CtaBanner";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section - Warm Sand Background */}
      <section className="relative bg-[#d1b7a1] pt-10 pb-16 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Brand Logo & Script Headline */}
            <div className="lg:col-span-6 space-y-8 text-left">
              <div className="relative w-64 h-32 md:w-80 md:h-40">
                <Image
                  src="/images/logo.png"
                  alt="HO Harriet O'Donovan Dubai"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>

              <h1 className="font-script text-[45px] sm:text-[58px] lg:text-[67px] text-[#262626] leading-[1.15] tracking-normal">
                Impactful style that <br />
                takes you to your dreams
              </h1>
            </div>

            {/* Right: Harriet Seated in Cane Chair */}
            <div className="lg:col-span-6">
              <div className="relative w-full aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] max-h-[640px] shadow-xl overflow-hidden group">
                <Image
                  src="/images/Harriet-sideways.webp"
                  alt="Harriet O'Donovan - Luxury Stylist"
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Style Success Banner */}
      <section className="relative w-full h-[340px] sm:h-[420px] md:h-[500px] overflow-hidden">
        <Image
          src="/images/harriet-ready.webp"
          alt="Wardrobe styling rack"
          fill
          className="object-cover object-center brightness-90"
        />
        <div className="absolute inset-0 bg-black/35 flex items-center justify-center p-4">
          <h2 className="font-script text-[38px] sm:text-[52px] lg:text-[65px] text-white text-center leading-[1.15] drop-shadow-lg">
            Ready for your style success?
          </h2>
        </div>
      </section>

      {/* 3. Harriet O'Donovan - Guide to Style */}
      <section className="py-20 md:py-28 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <p className="text-[14px] uppercase tracking-[0.22em] font-sans font-bold text-neutral-800">
            HARRIET O&apos;DONOVAN
          </p>
          <h2 className="font-script text-[42px] sm:text-[50px] lg:text-[55px] text-neutral-900 leading-[1.2]">
            Your Ultimate Guide To Style
          </h2>

          <div className="space-y-5 pt-4 max-w-3xl mx-auto font-sans text-[16px] text-neutral-600 leading-[1.7]">
            <p>
              Style is anything but superficial. It runs deep. When you feel good in your clothes, and you look the part, it sends a ripple of positive energy through every aspect of your life.
            </p>
            <p>
              Fashion sends a message. What are you saying when you walk in a room? Great style does not happen by accident. It takes consideration and inspiration. It gets better and better as cut and colour options are expanded.
            </p>
            <p>
              Style is more than clothes. It is a way to enhance your best features and step out joyfully. We know fashion is wonderful. It is art. Using my proven system, I put it together in a way that celebrates you and your dreams, goals and achievements. I blend passion and expertise to bring you truly unique looks.
            </p>
          </div>

          <div className="pt-6">
            <Link
              href="/about"
              className="inline-block px-8 py-3 border-l-2 border-r-2 border-neutral-900 text-neutral-900 text-[14px] uppercase tracking-[0.22em] font-sans font-semibold hover:bg-neutral-900 hover:text-white transition-all duration-300"
            >
              GET TO KNOW HARRIET
            </Link>
          </div>

          {/* Centered Editorial Portrait */}
          <div className="pt-12 max-w-lg mx-auto">
            <div className="relative aspect-[4/5] overflow-hidden shadow-md group">
              <Image
                src="/images/Harriet-homepage-image-3-1.webp"
                alt="Harriet O'Donovan editorial portrait"
                fill
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Client Love Testimonial Slider */}
      <TestimonialSlider />

      {/* 5. "This is for you if..." Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Editorial Numbered List */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-script text-[42px] sm:text-[48px] lg:text-[55px] text-neutral-900 leading-[1.2] mb-8">
                This is for you if ...
              </h2>

              <div className="space-y-6 divide-y divide-neutral-200">
                {[
                  {
                    num: "01",
                    text: "You're already aware of the power of style and fashion, you need some help to create impactful looks.",
                  },
                  {
                    num: "02",
                    text: "You're highly visible and leading in various ways in your life – in your career, your family and more.",
                  },
                  {
                    num: "03",
                    text: "You have a lot of daily decisions to make, and would love to have someone do the thinking for you when it comes to style.",
                  },
                  {
                    num: "04",
                    text: "You're sure that there are many more clothes options that you could be wearing, but you tend to stay in your comfort zone, and would love to successfully wear new styles.",
                  },
                ].map((item) => (
                  <div key={item.num} className="pt-6 first:pt-0 flex items-start gap-5">
                    <span className="font-serif text-[20px] font-bold text-neutral-900 flex-shrink-0 mt-0.5">
                      {item.num}.
                    </span>
                    <p className="font-serif text-[18px] lg:text-[20px] text-neutral-800 leading-[1.6]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Garden Seated Photo */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[3/4] overflow-hidden shadow-xl group">
                <Image
                  src="/images/Harriet-homepage-image-4.webp"
                  alt="Harriet O'Donovan seated in garden"
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Banner */}
      <CtaBanner />
    </div>
  );
}
