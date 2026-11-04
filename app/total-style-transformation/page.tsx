"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ChevronDown, ChevronUp, Quote } from "lucide-react";
import WaitlistModal from "@/components/WaitlistModal";

const faqData = [
  {
    question: "AM I OBLIGATED TO BUY THE CLOTHES THE STYLIST SELECTS?",
    answer:
      "You are not obligated. Styling is a process and we arrive at the best looks for you.",
  },
  {
    question: "HOW WILL YOU KNOW MY STYLE?",
    answer:
      "By considering the whole picture - lifestyle, ambition and goals, in addition to reviewing your current style.",
  },
  {
    question: "WHAT IS THE STYLE SUCCESS SYSTEM?",
    answer:
      "This is a unique system for laying a style foundation that can be maintained.",
  },
  {
    question: "WILL I BE STYLED IN MY CLOTHES OR PURCHASE NEW OUTFITS?",
    answer:
      "The aim of styling is to make you feel confident and energised. This could be achieved by starting fresh with an entirely new wardrobe, or combining the amazing pieces you have with new clothes.",
  },
  {
    question: "DO I NEED TO PREPARE FOR THE SESSIONS?",
    answer:
      "The only preparation you need to do before being styled is to get excited!",
  },
];

const STRIPE_APPLY_URL = "https://buy.stripe.com/9B6bJ0gP9eKYbGHb1f7ok02";

export default function TotalStyleTransformationPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"waitlist" | "apply">("waitlist");
  const videoRef = useRef<HTMLVideoElement>(null);

  // Ensure video autoplay reliably starts across all browsers
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  // Auto-open waitlist pop-up after 3 seconds of page visit (once per session)
  useEffect(() => {
    const hasSeen = sessionStorage.getItem("harriet_popup_seen");
    if (!hasSeen) {
      const timer = setTimeout(() => {
        setModalMode("waitlist");
        setIsModalOpen(true);
        sessionStorage.setItem("harriet_popup_seen", "true");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleOpenApply = () => {
    setModalMode("apply");
    setIsModalOpen(true);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* ============================================================== */}
      {/* 1. HERO SECTION WITH VIDEO BACKGROUND & OVERLAY */}
      {/* ============================================================== */}
      <section className="relative min-h-[750px] lg:min-h-[800px] flex items-center justify-center text-center text-white overflow-hidden py-24 sm:py-32">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-black">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-center opacity-80"
            poster="/images/harriet-ready.webp"
          >
            <source src="/images/Harriet.webm" type="video/webm" />
            <source src="/images/Harriet.mp4" type="video/mp4" />
          </video>
          {/* Gradient Overlay: 310deg, transparent to terracotta rgb(133,72,57) + 40% darkness */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(310deg, rgba(0, 0, 0, 0.45) 0%, rgba(133, 72, 57, 0.75) 100%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h1 className="font-script text-[48px] sm:text-[64px] lg:text-[76px] text-[#f0e0dd] leading-[1.08] drop-shadow-sm font-normal">
            The Power Style Transformation
          </h1>

          <h4 className="font-serif text-[18px] sm:text-[22px] lg:text-[24px] text-white font-normal leading-[1.4] max-w-2xl mx-auto pt-2">
            Go from second-guessing what to wear to a signature style that commands the room.
          </h4>

          <h4 className="font-sans text-[15px] sm:text-[17px] text-neutral-100 font-normal leading-[1.7] max-w-xl mx-auto pb-4">
            In eight weeks, my three-part Style Success System gives you the confidence, clarity, and looks to show up powerfully without the stress of figuring it out alone.
          </h4>

          <div className="pt-2">
            <button
              onClick={handleOpenApply}
              className="inline-block px-8 sm:px-10 py-3.5 sm:py-4 border border-white text-white text-[13px] sm:text-[14px] uppercase tracking-[0.2em] font-sans font-semibold hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
            >
              <strong>APPLY FOR THE POWER STYLE TRANSFORMATION</strong>
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. THIS IS FOR YOU IF... */}
      {/* ============================================================== */}
      <section className="py-20 md:py-24 bg-white text-center">
        <div className="max-w-[740px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Sand Accent Separator */}
          <div className="w-[50px] h-[1px] bg-[#d1b7a1] mx-auto mb-5" />

          <h2 className="font-script text-[42px] sm:text-[54px] lg:text-[62px] text-neutral-900 leading-[1.3] mb-12 sm:mb-16">
            <strong>This is for you if...</strong>
          </h2>

          <h4 className="font-serif text-[18px] sm:text-[20px] text-neutral-900 font-normal leading-[1.6] mb-10 max-w-xl mx-auto">
            Your business has evolved. Your visibility has grown. Now you need a signature style that reflects the woman leading it.
          </h4>

          {/* 4 Bullet Points */}
          <div className="space-y-6 text-center max-w-[680px] mx-auto font-serif text-[17px] sm:text-[18px] text-neutral-800 leading-[1.7]">
            <p>Your business and visibility have grown, but your wardrobe hasn’t evolved with you.</p>
            <p>You need to look polished across meetings, speaking engagements, content, travel, and important events.</p>
            <p>You understand the power of style, but you don’t have time to plan every outfit or search endlessly for the right pieces.</p>
            <p>You want an expert to make the decisions, create the looks, and make getting dressed easier.</p>
          </div>

          {/* I can help you + Down Arrow */}
          <div className="mt-14 mb-2">
            <h2 className="font-script text-[38px] sm:text-[48px] text-neutral-900 mb-4">
              <strong>I can help you.</strong>
            </h2>
            <ArrowDown className="w-9 h-9 text-black mx-auto stroke-[1.75]" />
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. AS EASY AS 1, 2, 3 (3 PINK CARDS) */}
      {/* ============================================================== */}
      <section className="pt-8 pb-20 md:pb-24 bg-white text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Sand Accent Separator */}
          <div className="w-[50px] h-[1px] bg-[#d1b7a1] mx-auto mb-5" />

          <h2 className="font-script text-[36px] sm:text-[48px] lg:text-[54px] text-neutral-900 leading-[1.2] mb-12">
            <strong>The Power Style Transformation, Is As Easy As 1, 2, 3</strong>
          </h2>

          {/* 3 Pink Cards Grid (#fadadd) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {/* Step 1 */}
            <div className="bg-[#fadadd] p-8 sm:p-10 flex flex-col items-center justify-start min-h-[260px]">
              <div className="flex items-baseline justify-center gap-1.5 mb-5">
                <span className="font-script text-[28px] sm:text-[32px] font-semibold text-neutral-900">
                  Step
                </span>
                <span className="font-script text-[50px] sm:text-[58px] font-bold text-neutral-900 leading-none">
                  1
                </span>
              </div>
              <p className="font-sans text-[15px] sm:text-[16px] text-neutral-800 leading-[1.65]">
                We define how you want to be seen and identify where your current style no longer reflects your business, ambition, and visibility.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#fadadd] p-8 sm:p-10 flex flex-col items-center justify-start min-h-[260px]">
              <div className="flex items-baseline justify-center gap-1.5 mb-5">
                <span className="font-script text-[28px] sm:text-[32px] font-semibold text-neutral-900">
                  Step
                </span>
                <span className="font-script text-[50px] sm:text-[58px] font-bold text-neutral-900 leading-none">
                  2
                </span>
              </div>
              <p className="font-sans text-[15px] sm:text-[16px] text-neutral-800 leading-[1.65]">
                I create the exact styles and complete looks that support your body, personality, personal brand, and real business life.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#fadadd] p-8 sm:p-10 flex flex-col items-center justify-start min-h-[260px]">
              <div className="flex items-baseline justify-center gap-1.5 mb-5">
                <span className="font-script text-[28px] sm:text-[32px] font-semibold text-neutral-900">
                  Step
                </span>
                <span className="font-script text-[50px] sm:text-[58px] font-bold text-neutral-900 leading-none">
                  3
                </span>
              </div>
              <p className="font-sans text-[15px] sm:text-[16px] text-neutral-800 leading-[1.65]">
                You step forward with a signature style that feels natural, elevated, and easy to sustain as your business continues to grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. BY THE END OF YOUR TRANSFORMATION... (5 PINK CARDS) */}
      {/* ============================================================== */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-script text-[36px] sm:text-[46px] lg:text-[52px] text-neutral-900 leading-[1.2] mb-12">
            <strong>By the End of Your, The Power Style Transformation, You Will Have:</strong>
          </h2>

          {/* Grid of 5 Pink Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
            {/* Card 01 */}
            <div className="bg-[#fadadd] p-6 sm:p-7 flex items-start gap-5">
              <span className="font-script text-[42px] sm:text-[50px] text-neutral-900 leading-none flex-shrink-0">
                01
              </span>
              <p className="font-sans text-[15px] sm:text-[16px] text-neutral-800 leading-[1.6] pt-1">
                A clear approach to getting dressed that saves time and removes daily outfit decisions
              </p>
            </div>

            {/* Card 02 */}
            <div className="bg-[#fadadd] p-6 sm:p-7 flex items-start gap-5">
              <span className="font-script text-[42px] sm:text-[50px] text-neutral-900 leading-none flex-shrink-0">
                02
              </span>
              <p className="font-sans text-[15px] sm:text-[16px] text-neutral-800 leading-[1.6] pt-1">
                A signature style that reflects the founder and leader you have become.
              </p>
            </div>

            {/* Card 03 */}
            <div className="bg-[#fadadd] p-6 sm:p-7 flex items-start gap-5">
              <span className="font-script text-[42px] sm:text-[50px] text-neutral-900 leading-none flex-shrink-0">
                03
              </span>
              <p className="font-sans text-[15px] sm:text-[16px] text-neutral-800 leading-[1.6] pt-1">
                Complete looks for the moments when your visibility matters most.
              </p>
            </div>

            {/* Card 04 */}
            <div className="bg-[#fadadd] p-6 sm:p-7 flex items-start gap-5">
              <span className="font-script text-[42px] sm:text-[50px] text-neutral-900 leading-none flex-shrink-0">
                04
              </span>
              <p className="font-sans text-[15px] sm:text-[16px] text-neutral-800 leading-[1.6] pt-1">
                Greater confidence being seen, remembered, and representing your business.
              </p>
            </div>

            {/* Card 05 */}
            <div className="bg-[#fadadd] p-6 sm:p-7 flex items-start gap-5 md:col-span-1">
              <span className="font-script text-[42px] sm:text-[50px] text-neutral-900 leading-none flex-shrink-0">
                05
              </span>
              <p className="font-sans text-[15px] sm:text-[16px] text-neutral-800 leading-[1.6] pt-1">
                A faster, easier way to get dressed without second-guessing yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. WHAT'S INSIDE */}
      {/* ============================================================== */}
      <section className="py-16 md:py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-script text-[40px] sm:text-[50px] lg:text-[56px] text-neutral-900 leading-[1.2] mb-6">
            <strong>What&apos;s Inside</strong>
          </h2>

          <h5 className="font-sans font-bold uppercase tracking-[0.14em] text-[15px] sm:text-[17px] text-neutral-900 leading-[1.8] max-w-3xl mx-auto">
            A portfolio of at least five complete signature looks created around your most important business and visibility moments.
          </h5>

          <h5 className="font-serif text-[16px] sm:text-[18px] text-neutral-700 leading-[1.8] max-w-3xl mx-auto pt-2">
            Your eight-week private experience includes an initial style consultation, personalized recommendations, direct access to me through email and messaging, access to my styling app, and optional weekly check-ins whenever additional guidance would be helpful.
          </h5>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. TESTIMONIAL (PINK FULL-WIDTH BG WITH FLOATING BADGE) */}
      {/* ============================================================== */}
      <section className="bg-[#fadadd] py-24 sm:py-28 px-4 sm:px-6">
        <div className="max-w-[720px] mx-auto">
          {/* White Card with Relative Position for Badge */}
          <div className="relative bg-white pt-16 pb-12 px-6 sm:px-14 text-center shadow-sm">
            {/* Floating Top Black Badge */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black py-2.5 px-8 max-w-[340px] w-[90%] sm:w-auto shadow-md">
              <h5 className="font-script text-[26px] sm:text-[30px] text-white whitespace-nowrap">
                <strong>What others are saying</strong>
              </h5>
            </div>

            {/* Quotation Icon */}
            <div className="flex justify-center mb-4">
              <Quote className="w-10 h-10 text-neutral-300 stroke-[1.5]" />
            </div>

            {/* Testimonial Quote */}
            <h5 className="font-serif text-[17px] sm:text-[19px] text-neutral-800 leading-[1.8] max-w-xl mx-auto mb-8 font-normal">
              Harriet understood well what works for me, and that was from the first consultation. She has incredible fashion sense. She has the eye.
            </h5>

            {/* Author */}
            <h5 className="font-sans font-semibold uppercase tracking-[0.2em] text-[13px] sm:text-[14px] text-neutral-900">
              Sofia Sayerh, <br className="sm:hidden" />
              <span className="font-normal text-neutral-500 lowercase tracking-normal sm:ml-1">
                yoga entrepreneur
              </span>
            </h5>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. HAVE QUESTIONS? I'VE GOT ANSWERS! (SAND ACCORDION) */}
      {/* ============================================================== */}
      <section className="py-20 md:py-24 bg-white text-center">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-script text-[38px] sm:text-[48px] lg:text-[54px] text-neutral-900 leading-[1.2] mb-10">
            <strong>Have Questions? I&apos;ve Got Answers!</strong>
          </h2>

          {/* Accordion List with #d1b7a1 background */}
          <div className="space-y-4 text-left">
            {faqData.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-[#d1b7a1] transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-5 sm:px-6 py-4 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif font-bold uppercase text-[15px] sm:text-[17px] text-black tracking-wide leading-snug">
                      {item.question}
                    </span>
                    <span className="text-black flex-shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 stroke-[2.5]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 stroke-[2.5]" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-black font-serif text-[15px] sm:text-[16px] leading-[1.7]">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Apply Button below FAQ */}
          <div className="pt-12">
            <button
              onClick={handleOpenApply}
              className="inline-block px-8 sm:px-10 py-3.5 sm:py-4 border border-black text-black text-[13px] sm:text-[14px] uppercase tracking-[0.2em] font-sans font-semibold hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
            >
              <strong>APPLY FOR THE POWER STYLE TRANSFORMATION</strong>
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 8 & 9. BLACK ROW: READY TO TRANSFORM YOUR STYLE + PRICING CARD */}
      {/* ============================================================== */}
      <section className="bg-black py-20 lg:py-28 px-4 sm:px-6 lg:px-12 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Script Heading in Sand/Gold */}
          <div className="text-center lg:text-left">
            <h1 className="font-script text-[42px] sm:text-[56px] lg:text-[68px] text-[#d1b7a1] leading-[1.2]">
              <strong>Ready to Transform Your Style</strong>
            </h1>
          </div>

          {/* Right: White Article Pricing Card with Gold Border & Sand Shadow */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-[#fefefe] text-neutral-900 w-full max-w-[420px] p-8 sm:p-12 text-center border-2 border-[#d1b7a1] shadow-[6px_10px_24px_rgba(209,183,161,0.55)]">
              <h2 className="font-script text-[36px] sm:text-[42px] text-neutral-900 leading-tight mb-2">
                <strong>One installment</strong>
              </h2>
              <p className="font-sans font-bold text-[50px] sm:text-[60px] text-neutral-900 leading-none my-4">
                $5,000
              </p>
              <div className="pt-4">
                <button
                  onClick={handleOpenApply}
                  className="inline-block w-full py-4 px-4 border border-black text-black font-sans font-bold uppercase text-[12px] sm:text-[13px] tracking-[0.18em] hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
                >
                  <strong>APPLY FOR THE POWER STYLE TRANSFORMATION</strong>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 10. YOU HAVE BUILT A BUSINESS... + HARRIET LILIES PHOTO */}
      {/* ============================================================== */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Information */}
          <div className="space-y-6 text-left">
            <h2 className="font-script text-[38px] sm:text-[48px] lg:text-[55px] text-neutral-900 leading-[1.18]">
              You have built a business that asks you to be seen.
            </h2>

            <div className="font-sans text-[15px] sm:text-[16px] text-neutral-800 leading-[1.75] space-y-4">
              <p className="font-bold">
                You lead, make decisions, represent your ideas, and walk into rooms where perception matters. Your style should make those moments easier, not give you one more decision to manage.
              </p>

              <p className="font-bold">
                The Power Style Transformation gives you a direct, personalized route to a signature style that reflects your ambition and supports the future you are building.
              </p>

              <h5 className="font-bold text-[16px] sm:text-[17px] text-neutral-900 pt-2">
                I work privately with two female founders at a time, so every client receives a highly personalized styling experience.
              </h5>

              <p className="font-sans font-bold text-[17px] sm:text-[19px] text-neutral-900 pt-2">
                Investment: $5,000
              </p>
            </div>
          </div>

          {/* Right: Harriet Photo in Floral Dress holding Lilies */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px] overflow-hidden shadow-sm">
              <Image
                src="/images/WhatsApp-Image-2026-02-09-at-11.53.00.jpeg"
                alt="Harriet O'Donovan"
                width={400}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 11 & 12. BLACK ROW: PRICING CARD + JOIN BEFORE IT'S GONE */}
      {/* ============================================================== */}
      <section className="bg-black py-20 lg:py-28 px-4 sm:px-6 lg:px-12 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: White Article Pricing Card with Gold Border & Sand Shadow */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="bg-[#fefefe] text-neutral-900 w-full max-w-[420px] p-8 sm:p-12 text-center border-2 border-[#d1b7a1] shadow-[6px_10px_24px_rgba(209,183,161,0.55)]">
              <h2 className="font-script text-[36px] sm:text-[42px] text-neutral-900 leading-tight mb-2">
                <strong>One installment</strong>
              </h2>
              <p className="font-sans font-bold text-[50px] sm:text-[60px] text-neutral-900 leading-none my-4">
                $5,000
              </p>
              <div className="pt-4">
                <button
                  onClick={handleOpenApply}
                  className="inline-block w-full py-4 px-4 border border-black text-black font-sans font-bold uppercase text-[12px] sm:text-[13px] tracking-[0.18em] hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
                >
                  <strong>APPLY FOR THE POWER STYLE TRANSFORMATION</strong>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Script Heading in Sand/Gold */}
          <div className="text-center lg:text-right order-1 lg:order-2">
            <h1 className="font-script text-[42px] sm:text-[56px] lg:text-[68px] text-[#d1b7a1] leading-[1.2]">
              <strong>Join The Power Style Transformation Before It&apos;s Gone.</strong>
            </h1>
          </div>
        </div>
      </section>

      {/* Waitlist / Apply Modal */}
      <WaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode={modalMode}
      />
    </div>
  );
}
