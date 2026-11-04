import React from "react";
import Image from "next/image";
import Link from "next/link";
import TestimonialSlider from "@/components/TestimonialSlider";
import CtaBanner from "@/components/CtaBanner";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* ============================================================== */}
      {/* 1. HERO SECTION 1 - WARM SAND BLOCK (#d1b7a1) */}
      {/* ============================================================== */}
      <section className="relative bg-[#d1b7a1] pt-16 sm:pt-20 pb-0 overflow-visible z-10">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Brand Logo (40% width) */}
            <div className="lg:col-span-5 pb-10 lg:pb-16 flex justify-center lg:justify-start">
              <div className="relative w-[340px] h-[190px] sm:w-[408px] sm:h-[232px]">
                <Image
                  src="/images/cropped-Harriet_O_Donovan_logo-transparent.png"
                  alt="Harriet O'Donovan Dubai"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </div>

            {/* Right: Harriet Hero Image hanging 150px below sand container */}
            <div className="lg:col-span-7 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[620px] lg:max-w-[720px] aspect-square lg:-mb-[150px] z-20">
                <Image
                  src="/images/Harriet-homepage-hero-image-1.webp"
                  alt="Harriet - homepage hero-image"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. HERO SECTION 2 - SCRIPT HEADLINE */}
      {/* ============================================================== */}
      <section className="relative bg-white pt-16 lg:pt-28 pb-14 px-6 sm:px-10 lg:px-16 z-10">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-script text-[48px] sm:text-[58px] lg:text-[67px] text-black font-light leading-[1.25] text-left max-w-4xl">
            Impactful style that <br />
            takes you to your dreams
          </h2>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. STYLE SUCCESS BANNER WITH VIDEO BACKGROUND */}
      {/* ============================================================== */}
      <section className="relative w-full min-h-[500px] lg:min-h-[700px] flex items-center justify-center overflow-hidden bg-black">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-center"
          >
            <source src="/images/Harriet.mp4" type="video/mp4" />
          </video>
          {/* 50% Black Overlay */}
          <div className="absolute inset-0 bg-black/50 pointer-events-none" />
        </div>

        {/* Overlay Heading in #f0e0dd */}
        <div className="relative z-10 px-4 sm:px-6 text-center">
          <h2 className="font-script text-[48px] sm:text-[58px] lg:text-[65px] text-[#f0e0dd] leading-[1.25] font-light drop-shadow-sm">
            Ready for your style success?
          </h2>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. HARRIET O'DONOVAN - YOUR ULTIMATE GUIDE TO STYLE */}
      {/* ============================================================== */}
      <section className="pt-24 pb-14 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12 space-y-6">
          <h3 className="font-serif text-[28px] sm:text-[37px] uppercase tracking-normal text-black font-normal">
            Harriet O’Donovan
          </h3>

          <h2 className="font-script text-[36px] sm:text-[41px] text-black font-light leading-[1.25]">
            Your Ultimate Guide To Style
          </h2>

          <div className="space-y-6 pt-4 max-w-3xl mx-auto font-sans text-[20px] sm:text-[22px] text-black font-light leading-[34.1px]">
            <p>
              Style is anything but superficial. It runs deep. When you feel good in your clothes, and you look the part, it sends a ripple of positive energy through every aspect of your life.
            </p>
            <p>
              Fashion sends a message. What are you saying when you walk in a room? <br className="hidden sm:inline" />
              Great style does not happen by accident. It takes consideration and inspiration. It gets better and better as cut and colour options are expanded.
            </p>
            <p>
              Style is more than clothes. It is a way to enhance your best features and step out joyfully. We know fashion is wonderful. It is art. Using my proven system, I put it together in a way that celebrates you and your dreams, goals and achievements. I blend passion and expertise to bring you truly unique looks.
            </p>
          </div>

          <div className="pt-6">
            <Link
              href="/about"
              className="inline-block px-9 py-3.5 border border-[#333] text-[#262626] font-serif text-[18px] sm:text-[20px] uppercase font-light hover:bg-black hover:text-white transition-all duration-300 rounded-none"
            >
              GET TO KNOW HARRIET
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. CENTERED EDITORIAL PORTRAIT (Harriet-homepage-image-3-1.webp) */}
      {/* ============================================================== */}
      <section className="py-12 bg-white flex justify-center">
        <div className="w-full max-w-3xl px-6 sm:px-10">
          <div className="relative w-full aspect-[4/5] min-h-[500px] lg:min-h-[640px] overflow-hidden">
            <Image
              src="/images/Harriet-homepage-image-3-1.webp"
              alt="Harriet O'Donovan editorial portrait"
              fill
              className="object-cover"
              style={{ objectPosition: "37% 13%" }}
              priority
            />
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. CLIENT LOVE TESTIMONIAL SLIDER */}
      {/* ============================================================== */}
      <TestimonialSlider />

      {/* ============================================================== */}
      {/* 7. THIS IS FOR YOU IF … */}
      {/* ============================================================== */}
      <section className="py-24 md:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Numbered Editorial List */}
            <div className="lg:col-span-7 space-y-8">
              <h2 className="font-script text-[46px] sm:text-[55px] text-black font-light leading-[1.25] mb-10">
                This is for you if …
              </h2>

              <div className="space-y-8">
                {[
                  {
                    num: "01.",
                    text: "You’re already aware of the power of style and fashion, you need some help to create impactful looks.",
                  },
                  {
                    num: "02.",
                    text: "You’re highly visible and leading in various ways in your life – in your career, your family and more.",
                  },
                  {
                    num: "03.",
                    text: "You have a lot of daily decisions to make, and would love to have someone do the thinking for you when it comes to style.",
                  },
                  {
                    num: "04.",
                    text: "You’re sure that there are many more clothes options that you could be wearing, but you tend to stay in your comfort zone, and would love to successfully wear new styles.",
                  },
                ].map((item) => (
                  <div key={item.num} className="flex items-start gap-5">
                    <span className="font-serif text-[26px] font-normal text-[#d1b7a1] flex-shrink-0 mt-0.5">
                      {item.num}
                    </span>
                    <p className="font-serif text-[20px] leading-[31px] text-black font-normal">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Garden Seated Photo (Harriet-homepage-image-4.webp) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] h-[650px] sm:h-[750px] lg:h-[800px] overflow-hidden">
                <Image
                  src="/images/Harriet-homepage-image-4.webp"
                  alt="Harriet - homepage image 4"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 8. CTA BANNER WITH CONTACT INFO */}
      {/* ============================================================== */}
      <CtaBanner />
    </div>
  );
}
