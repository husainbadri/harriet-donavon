"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    countryCode: "+971",
    mobile: "",
    email: "",
    request: "",
    consent: false,
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const countryCodes = [
    { code: "+971", label: "🇦🇪 +971 (UAE)" },
    { code: "+44", label: "🇬🇧 +44 (UK)" },
    { code: "+1", label: "🇺🇸 +1 (US/CA)" },
    { code: "+966", label: "🇸🇦 +966 (Saudi Arabia)" },
    { code: "+974", label: "🇶🇦 +974 (Qatar)" },
    { code: "+968", label: "🇴🇲 +968 (Oman)" },
    { code: "+973", label: "🇧🇭 +973 (Bahrain)" },
    { code: "+965", label: "🇰🇼 +965 (Kuwait)" },
    { code: "+33", label: "🇫🇷 +33 (France)" },
    { code: "+49", label: "🇩🇪 +49 (Germany)" },
    { code: "+91", label: "🇮🇳 +91 (India)" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.mobile || !formData.request) {
      setStatus("error");
      setErrorMessage("Please complete all required fields marked with *");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    // Simulate clean form submission
    setTimeout(() => {
      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        countryCode: "+971",
        mobile: "",
        email: "",
        request: "",
        consent: false,
      });
    }, 800);
  };

  return (
    <div className="w-full max-w-[540px] mx-auto bg-white p-6 sm:p-8 border border-[#c0ccda] shadow-sm rounded-none">
      {status === "success" ? (
        <div className="p-6 bg-[#e7faf0] border border-[#13ce66] rounded-none text-left space-y-3">
          <div className="flex items-center gap-3 text-[#085229]">
            <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
            <h3 className="font-sans font-bold text-base">Your message has been sent.</h3>
          </div>
          <p className="text-sm text-[#085229]/90 font-sans pl-9 leading-relaxed">
            Thank you for reaching out! We&apos;re excited to start your styling journey. Harriet&apos;s team will be in touch with you shortly.
          </p>
          <div className="pt-3 pl-9">
            <button
              onClick={() => setStatus("idle")}
              className="text-xs uppercase tracking-wider font-semibold text-[#085229] underline hover:no-underline"
            >
              Send another message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 text-left font-sans">
          {status === "error" && (
            <div className="p-4 bg-[#ffeded] border border-[#ff4949] rounded-none text-[#661d1d] flex items-center gap-3 text-sm">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span>{errorMessage || "Your message has not been sent. Please try again."}</span>
            </div>
          )}

          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="block text-[14px] uppercase tracking-wider font-bold text-[#3c4858] mb-1.5"
            >
              First Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              required
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="w-full px-3 py-2.5 border border-[#c0ccda] text-[15px] text-neutral-900 rounded-none focus:outline-none focus:border-brand-sand transition-colors"
            />
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="lastName"
              className="block text-[14px] uppercase tracking-wider font-bold text-[#3c4858] mb-1.5"
            >
              Last Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              required
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="w-full px-3 py-2.5 border border-[#c0ccda] text-[15px] text-neutral-900 rounded-none focus:outline-none focus:border-brand-sand transition-colors"
            />
          </div>

          {/* Mobile Number with country selector */}
          <div>
            <label
              htmlFor="mobile"
              className="block text-[14px] uppercase tracking-wider font-bold text-[#3c4858] mb-1.5"
            >
              Mobile Number <span className="text-red-600">*</span>
            </label>
            <div className="flex gap-2">
              <select
                value={formData.countryCode}
                onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                className="px-2 py-2.5 border border-[#c0ccda] text-[14px] font-sans text-neutral-900 bg-neutral-50 rounded-none focus:outline-none focus:border-brand-sand"
              >
                {countryCodes.map((item) => (
                  <option key={item.code} value={item.code}>
                    {item.label}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                id="mobile"
                required
                placeholder="50 123 4567"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                className="flex-1 px-3 py-2.5 border border-[#c0ccda] text-[15px] text-neutral-900 rounded-none focus:outline-none focus:border-brand-sand transition-colors"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-[14px] uppercase tracking-wider font-bold text-[#3c4858] mb-1.5"
            >
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 py-2.5 border border-[#c0ccda] text-[15px] text-neutral-900 rounded-none focus:outline-none focus:border-brand-sand transition-colors"
            />
          </div>

          {/* Your Request */}
          <div>
            <label
              htmlFor="request"
              className="block text-[14px] uppercase tracking-wider font-bold text-[#3c4858] mb-1.5"
            >
              Your Request <span className="text-red-600">*</span>
            </label>
            <textarea
              id="request"
              rows={4}
              required
              value={formData.request}
              onChange={(e) => setFormData({ ...formData, request: e.target.value })}
              className="w-full px-3 py-2.5 border border-[#c0ccda] text-[15px] text-neutral-900 rounded-none focus:outline-none focus:border-brand-sand transition-colors resize-none"
            />
          </div>

          {/* Marketing consent */}
          <div className="flex items-start gap-2.5 pt-1">
            <input
              type="checkbox"
              id="consent"
              checked={formData.consent}
              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
              className="mt-1 w-4 h-4 rounded-none border-[#c0ccda] text-brand-charcoal focus:ring-0 cursor-pointer"
            />
            <label htmlFor="consent" className="text-[14px] font-medium text-[#3c4858] leading-normal cursor-pointer">
              I agree to receive marketing communication from Harriet O&apos;Donovan.
              <span className="block text-neutral-400 text-[12px] mt-0.5">
                You may unsubscribe at any time.
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="pt-3">
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3.5 px-6 bg-[#3c4858] hover:bg-[#262626] text-white text-[16px] font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 rounded-none shadow hover:shadow-md"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>SUBMITTING...</span>
                </>
              ) : (
                <span>SUBMIT</span>
              )}
            </button>
          </div>
        </form>
      )}

      {/* Powered by with Outgrow Emblem */}
      <div className="pt-5 mt-4 border-t border-neutral-100 flex items-center justify-center gap-1.5">
        <span className="text-[11.5px] text-[#64748b] font-normal tracking-normal select-none">
          Powered by
        </span>
        <a
          href="https://outgrow.co"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center hover:opacity-80 transition-opacity"
          title="Powered by Outgrow"
        >
          <Image
            src="/images/oglogo-dark.png"
            alt="Outgrow"
            width={20}
            height={13}
            className="h-[9.5px] w-auto object-contain"
          />
        </a>
      </div>
    </div>
  );
}
