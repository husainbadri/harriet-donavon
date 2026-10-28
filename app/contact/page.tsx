import React from "react";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { InstagramIcon, FacebookIcon, LinkedinIcon } from "@/components/SocialIcons";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero */}
      <section className="relative py-28 md:py-36 text-center text-white overflow-hidden">
        <Image
          src="/images/Harriet-book-scaled.webp"
          alt="Harriet styling sketches and flowers"
          fill
          className="object-cover object-center brightness-40"
          priority
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <h1 className="font-script text-[36px] sm:text-[45px] lg:text-[65px] drop-shadow-md leading-[1.3]">
            Reach Out for Your Personalized Styling Experience
          </h1>
        </div>
      </section>

      {/* 2. Contact Details & Photo with Floating Social Badge */}
      <section className="py-20 md:py-28 bg-[#d1b7a1]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            {/* Left Card: Info */}
            <div className="bg-white p-10 sm:p-14 shadow-sm flex flex-col justify-center space-y-8">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[14px] uppercase tracking-[0.22em] font-sans font-bold text-[#d1b7a1] mb-1">
                    EMAIL
                  </p>
                  <a
                    href="mailto:info@harrietodonovan.com"
                    className="font-sans font-bold text-[18px] text-neutral-900 hover:text-black transition-colors leading-[27.9px]"
                  >
                    info@harrietodonovan.com
                  </a>
                </div>
              </div>

              <div className="w-full h-[1px] bg-neutral-200" />

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[14px] uppercase tracking-[0.22em] font-sans font-bold text-[#d1b7a1] mb-1">
                    ADDRESS
                  </p>
                  <p className="font-sans font-bold text-[18px] text-neutral-900 leading-[27.9px]">
                    Dubai, UAE
                  </p>
                </div>
              </div>
            </div>

            {/* Right Card: Photo with Floating Social Media Card */}
            <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-auto min-h-[380px] shadow-lg overflow-hidden group">
              <Image
                src="/images/WhatsApp-Image-2026-02-09-at-11.53.00.jpeg"
                alt="Harriet O'Donovan seated outdoors"
                fill
                className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
              />

              {/* Floating Social Media badge */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-[#f0e0dd] px-6 py-4 shadow-md border border-[#e8d0cb] flex items-center gap-4">
                <span className="font-serif text-[22px] font-normal text-neutral-900 leading-[28.6px]">
                  Social Media
                </span>
                <div className="flex items-center gap-3 text-neutral-900">
                  <a
                    href="https://www.facebook.com/groups/244742976735298"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="hover:text-black transition-colors"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/harriet_styling"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="hover:text-black transition-colors"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/harriet-o-donovan-103bb728/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="hover:text-black transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Connect with Us & Form */}
      <section className="py-20 md:py-28 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-script text-[36px] sm:text-[45px] lg:text-[55px] text-neutral-900 leading-[1.2]">
            Connect with Us
          </h2>
          <p className="font-sans text-[18px] sm:text-[22px] text-neutral-600 max-w-xl mx-auto leading-[34.1px]">
            We&apos;re excited to hear from you! Complete the form below and let&apos;s start your styling journey together.
          </p>

          <div className="pt-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
