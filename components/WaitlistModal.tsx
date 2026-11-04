"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, CheckCircle2, ChevronRight, ArrowLeft, Loader2, Lock, ArrowUpRight } from "lucide-react";

const STRIPE_APPLY_URL = "https://buy.stripe.com/9B6bJ0gP9eKYbGHb1f7ok02";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode?: "waitlist" | "apply";
}

export default function WaitlistModal({ isOpen, onClose, mode = "waitlist" }: WaitlistModalProps) {
  // In "waitlist" mode: Step 1 (Contact info pop-up) -> Step 2 (Questionnaire pop-up) -> Step 3 (Success)
  // In "apply" mode: Direct questionnaire flow with applicant details -> redirects to payment
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Contact details (3 fields: Name, Email, Business Name)
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    businessName: "",
  });

  // Questionnaire answers
  const [answers, setAnswers] = useState({
    businessAndRole: "",
    visibilityEvents: "",
    loveAboutStyle: "",
    changeAboutStyle: "",
    whyNow: "",
    whenToBegin: "Immediately",
    workedWithStylist: "",
    investmentReadiness: "Yes, I am ready to proceed",
    anythingElse: "",
  });

  // Load any previously saved responses from localStorage on mount
  useEffect(() => {
    try {
      const savedContact = localStorage.getItem("harriet_contact_data");
      if (savedContact) {
        setContactData(JSON.parse(savedContact));
      }
      const savedAnswers = localStorage.getItem("harriet_answers_data");
      if (savedAnswers) {
        setAnswers(JSON.parse(savedAnswers));
      }
    } catch {
      // Ignore localStorage errors in private browsing
    }
  }, []);

  // When modal opens, adjust starting step based on mode
  useEffect(() => {
    if (isOpen) {
      setErrorMessage("");
      setIsSubmitting(false);
      if (mode === "apply") {
        setStep(2); // "apply" mode directly shows the questionnaire
      } else {
        setStep(1); // "waitlist" mode shows the lead pop-up first
      }
    }
  }, [isOpen, mode]);

  // Handle ESC key and scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep(mode === "apply" ? 2 : 1);
      setErrorMessage("");
      setIsSubmitting(false);
    }, 250);
  };

  const persistData = () => {
    try {
      localStorage.setItem("harriet_contact_data", JSON.stringify(contactData));
      localStorage.setItem("harriet_answers_data", JSON.stringify(answers));
    } catch {
      // Ignore
    }
  };

  // Step 1 Submit (Waitlist Pop-up: Name, Email, Business Name)
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!contactData.name.trim() || !contactData.email.trim() || !contactData.businessName.trim()) {
      setErrorMessage("Please complete your name, email, and business name.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(contactData.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    persistData();
    // After submitting email, name, and business name, the questionnaire appears!
    setStep(2);
  };

  // Step 2 Submit (Questionnaire submitted)
  const handleQuestionnaireSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Validate contact info (required for both waitlist and apply mode)
    if (!contactData.name.trim() || !contactData.email.trim() || !contactData.businessName.trim()) {
      setErrorMessage("Please complete your full name, email, and business name.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(contactData.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    // Validate questionnaire primary question
    if (!answers.businessAndRole.trim()) {
      setErrorMessage("Please tell me about your business and your role.");
      return;
    }

    persistData();
    setIsSubmitting(true);

    if (mode === "apply") {
      // For the Apply buttons: after questionnaire is filled, redirect to payment page
      setTimeout(() => {
        const prefillParam = contactData.email
          ? `?prefilled_email=${encodeURIComponent(contactData.email)}`
          : "";
        window.location.href = `${STRIPE_APPLY_URL}${prefillParam}`;
      }, 700);
    } else {
      // For waitlist pop-up flow: show success state
      setTimeout(() => {
        setIsSubmitting(false);
        setStep(3);
      }, 600);
    }
  };

  const handleProceedToPaymentFromSuccess = () => {
    const prefillParam = contactData.email
      ? `?prefilled_email=${encodeURIComponent(contactData.email)}`
      : "";
    window.location.href = `${STRIPE_APPLY_URL}${prefillParam}`;
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-[12px] transition-opacity duration-300"
      onClick={handleClose}
    >
      <div
        className={`relative bg-white max-w-full max-h-[92vh] flex flex-col rounded-[28px] shadow-[0_30px_90px_rgba(0,0,0,0.3)] text-center animate-in fade-in zoom-in-95 duration-200 transition-all ${
          step === 1 ? "w-[480px]" : "w-[620px]"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-5 top-5 z-20 text-neutral-400 hover:text-black transition-colors p-1.5 rounded-full hover:bg-neutral-100"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Modal Header */}
        <div className="pt-8 px-6 sm:px-10 pb-3 flex-shrink-0">
          {/* Brand Logo in Pure Black */}
          <div className="relative w-44 h-16 sm:w-52 sm:h-20 mx-auto mb-3">
            <Image
              src="/images/logo.png"
              alt="Harriet O'Donovan"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Heading */}
          <h2 className="font-script text-[34px] sm:text-[42px] font-bold text-neutral-900 mb-2 leading-[1.25]">
            {step === 3
              ? "Application Received"
              : step === 1
              ? "Join the Waitlist"
              : mode === "apply"
              ? "Power Style Application"
              : "Style Questionnaire"}
          </h2>

          <p className="font-sans text-[13.5px] sm:text-[15px] text-neutral-600 leading-[1.5] max-w-md mx-auto">
            {step === 3
              ? "Thank you for sharing your vision with Harriet."
              : step === 1
              ? "Enter your details to begin your personal style transformation."
              : mode === "apply"
              ? "Complete your style questionnaire to apply. Once submitted, you will be redirected to finalize your enrollment."
              : "Tell Harriet about your business, vision, and styling goals."}
          </p>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto px-6 sm:px-10 py-4 flex-grow text-left">
          {errorMessage && (
            <div className="p-3 mb-4 bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm rounded-xl">
              {errorMessage}
            </div>
          )}

          {/* ============================================================== */}
          {/* STEP 1: INITIAL POP-UP (NAME, EMAIL, BUSINESS NAME) */}
          {/* Questionnaire appears AFTER user submits these details */}
          {/* ============================================================== */}
          {step === 1 && (
            <form onSubmit={handleContactSubmit} className="space-y-4 font-sans pt-1">
              <div>
                <label className="block text-[12px] uppercase tracking-wider font-bold text-neutral-700 mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={contactData.name}
                  onChange={(e) =>
                    setContactData({ ...contactData, name: e.target.value })
                  }
                  className="w-full px-4 py-3.5 border border-[#e3e3e3] rounded-[14px] text-sm text-neutral-900 focus:outline-none focus:border-black focus:ring-4 focus:ring-black/5 transition-all"
                />
              </div>

              <div>
                <label className="block text-[12px] uppercase tracking-wider font-bold text-neutral-700 mb-1.5">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. sarah@example.com"
                  value={contactData.email}
                  onChange={(e) =>
                    setContactData({ ...contactData, email: e.target.value })
                  }
                  className="w-full px-4 py-3.5 border border-[#e3e3e3] rounded-[14px] text-sm text-neutral-900 focus:outline-none focus:border-black focus:ring-4 focus:ring-black/5 transition-all"
                />
              </div>

              <div>
                <label className="block text-[12px] uppercase tracking-wider font-bold text-neutral-700 mb-1.5">
                  Business Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Atelier Luxury PR"
                  value={contactData.businessName}
                  onChange={(e) =>
                    setContactData({ ...contactData, businessName: e.target.value })
                  }
                  className="w-full px-4 py-3.5 border border-[#e3e3e3] rounded-[14px] text-sm text-neutral-900 focus:outline-none focus:border-black focus:ring-4 focus:ring-black/5 transition-all"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#111827] hover:bg-black text-white font-serif text-[16px] uppercase tracking-wider rounded-[14px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <span>NEXT: STYLE QUESTIONNAIRE</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[12px] text-neutral-500 text-center pt-1">
                Harriet works privately with two female founders at a time.
              </p>
            </form>
          )}

          {/* ============================================================== */}
          {/* STEP 2: STYLE QUESTIONNAIRE */}
          {/* In "waitlist" mode: shown after submitting Name, Email, Business */}
          {/* In "apply" mode: shown first with contact details & redirects to payment */}
          {/* ============================================================== */}
          {step === 2 && (
            <form onSubmit={handleQuestionnaireSubmit} className="space-y-6 font-sans">
              {/* Back to contact details (Waitlist mode only) */}
              {mode === "waitlist" && (
                <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs font-semibold text-neutral-500 hover:text-black uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to Contact Details</span>
                  </button>
                  <span className="text-xs text-neutral-500 truncate max-w-[200px]">
                    {contactData.name || contactData.email}
                  </span>
                </div>
              )}

              {/* Contact Details Section (Included in Apply mode so questionnaire is complete) */}
              {mode === "apply" && (
                <div className="p-4 sm:p-5 bg-neutral-50/80 rounded-[18px] border border-neutral-200/80 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif font-bold text-sm sm:text-base text-neutral-900 tracking-wide uppercase">
                      Applicant Details
                    </h3>
                    <span className="text-[11px] uppercase tracking-wider text-neutral-500 font-semibold">
                      Required for Payment Link
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-bold text-neutral-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        value={contactData.name}
                        onChange={(e) =>
                          setContactData({ ...contactData, name: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 bg-white border border-[#e3e3e3] rounded-[10px] text-sm text-neutral-900 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/5"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-bold text-neutral-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        value={contactData.email}
                        onChange={(e) =>
                          setContactData({ ...contactData, email: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 bg-white border border-[#e3e3e3] rounded-[10px] text-sm text-neutral-900 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/5"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[11px] uppercase tracking-wider font-bold text-neutral-700 mb-1">
                        Business Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Business Name"
                        value={contactData.businessName}
                        onChange={(e) =>
                          setContactData({ ...contactData, businessName: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 bg-white border border-[#e3e3e3] rounded-[10px] text-sm text-neutral-900 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/5"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Style Questions Header */}
              <div className="pt-1">
                <h3 className="font-serif font-bold text-sm sm:text-base text-neutral-900 tracking-wide uppercase mb-1">
                  Style Questionnaire
                </h3>
                <p className="text-xs text-neutral-500">
                  Please answer these questions carefully to assist Harriet in curating your transformation.
                </p>
              </div>

              {/* Question 1 */}
              <div>
                <label className="block text-[13px] uppercase tracking-wider font-bold text-neutral-800 mb-1.5">
                  1. Tell me about your business and your role <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={2}
                  placeholder="e.g. Founder & CEO of a boutique consulting firm in Dubai..."
                  value={answers.businessAndRole}
                  onChange={(e) =>
                    setAnswers({ ...answers, businessAndRole: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 border border-[#e3e3e3] rounded-[12px] text-sm text-neutral-900 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/5 transition-all resize-none"
                />
              </div>

              {/* Question 2 */}
              <div>
                <label className="block text-[13px] uppercase tracking-wider font-bold text-neutral-800 mb-1.5">
                  2. What upcoming visibility opportunities or events are you preparing for?
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Keynote speaking, summits, investor pitches, media features..."
                  value={answers.visibilityEvents}
                  onChange={(e) =>
                    setAnswers({ ...answers, visibilityEvents: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 border border-[#e3e3e3] rounded-[12px] text-sm text-neutral-900 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/5 transition-all resize-none"
                />
              </div>

              {/* Question 3 */}
              <div>
                <label className="block text-[13px] uppercase tracking-wider font-bold text-neutral-800 mb-1.5">
                  3. What do you currently love about your style?
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Tailored pieces, classic silhouettes, or confidence in specific outfits..."
                  value={answers.loveAboutStyle}
                  onChange={(e) =>
                    setAnswers({ ...answers, loveAboutStyle: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 border border-[#e3e3e3] rounded-[12px] text-sm text-neutral-900 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/5 transition-all resize-none"
                />
              </div>

              {/* Question 4 */}
              <div>
                <label className="block text-[13px] uppercase tracking-wider font-bold text-neutral-800 mb-1.5">
                  4. What would you like to change about your style?
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. More effortless daily execution, commanding visual presence..."
                  value={answers.changeAboutStyle}
                  onChange={(e) =>
                    setAnswers({ ...answers, changeAboutStyle: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 border border-[#e3e3e3] rounded-[12px] text-sm text-neutral-900 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/5 transition-all resize-none"
                />
              </div>

              {/* Question 5 */}
              <div>
                <label className="block text-[13px] uppercase tracking-wider font-bold text-neutral-800 mb-1.5">
                  5. Why is now the right time for your style transformation?
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. My company is scaling and my visibility demands a signature executive look..."
                  value={answers.whyNow}
                  onChange={(e) => setAnswers({ ...answers, whyNow: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-[#e3e3e3] rounded-[12px] text-sm text-neutral-900 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/5 transition-all resize-none"
                />
              </div>

              {/* Question 6 */}
              <div>
                <label className="block text-[13px] uppercase tracking-wider font-bold text-neutral-800 mb-2">
                  6. When would you like to begin?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {["Immediately", "Within the next month", "In 2–3 months"].map(
                    (option) => (
                      <label
                        key={option}
                        className={`flex items-center justify-center px-3 py-2.5 border text-xs sm:text-[13px] font-medium rounded-[12px] cursor-pointer text-center transition-all ${
                          answers.whenToBegin === option
                            ? "bg-neutral-900 text-white border-neutral-900 shadow-sm"
                            : "bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-neutral-400"
                        }`}
                      >
                        <input
                          type="radio"
                          name="whenToBegin"
                          value={option}
                          checked={answers.whenToBegin === option}
                          onChange={(e) =>
                            setAnswers({ ...answers, whenToBegin: e.target.value })
                          }
                          className="sr-only"
                        />
                        {option}
                      </label>
                    )
                  )}
                </div>
              </div>

              {/* Question 7 */}
              <div>
                <label className="block text-[13px] uppercase tracking-wider font-bold text-neutral-800 mb-1.5">
                  7. Have you worked with a stylist before?
                </label>
                <textarea
                  rows={2}
                  placeholder="If yes, what was helpful and what was missing from the experience?"
                  value={answers.workedWithStylist}
                  onChange={(e) =>
                    setAnswers({ ...answers, workedWithStylist: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 border border-[#e3e3e3] rounded-[12px] text-sm text-neutral-900 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/5 transition-all resize-none"
                />
              </div>

              {/* Question 8 */}
              <div>
                <label className="block text-[13px] uppercase tracking-wider font-bold text-neutral-800 mb-2">
                  8. If your application is accepted, are you prepared to make the $5,000 investment in Total Style Transformation?
                </label>
                <div className="space-y-2">
                  {[
                    "Yes, I am ready to proceed",
                    "I have a question before proceeding",
                    "Not at this time",
                  ].map((opt) => (
                    <label
                      key={opt}
                      className={`flex items-center gap-3 p-3 border rounded-[12px] cursor-pointer transition-all ${
                        answers.investmentReadiness === opt
                          ? "bg-neutral-50 border-neutral-900 ring-1 ring-neutral-900"
                          : "border-neutral-200 hover:border-neutral-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="investmentReadiness"
                        value={opt}
                        checked={answers.investmentReadiness === opt}
                        onChange={(e) =>
                          setAnswers({
                            ...answers,
                            investmentReadiness: e.target.value,
                          })
                        }
                        className="w-4 h-4 text-black focus:ring-black accent-black cursor-pointer"
                      />
                      <span className="text-[13px] sm:text-[14px] text-neutral-800 font-medium">
                        {opt}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Question 9 */}
              <div>
                <label className="block text-[13px] uppercase tracking-wider font-bold text-neutral-800 mb-1.5">
                  9. Is there anything else you would like me to know?
                </label>
                <textarea
                  rows={2}
                  placeholder="Any additional notes or questions for Harriet..."
                  value={answers.anythingElse}
                  onChange={(e) =>
                    setAnswers({ ...answers, anythingElse: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 border border-[#e3e3e3] rounded-[12px] text-sm text-neutral-900 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/5 transition-all resize-none"
                />
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#111827] hover:bg-black text-white font-serif text-[16px] uppercase tracking-wider rounded-[14px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>
                        {mode === "apply"
                          ? "REDIRECTING TO PAYMENT..."
                          : "SUBMITTING APPLICATION..."}
                      </span>
                    </>
                  ) : mode === "apply" ? (
                    <>
                      <Lock className="w-4 h-4 text-[#d1b7a1]" />
                      <span>SUBMIT & PROCEED TO PAYMENT ($5,000)</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      <span>SUBMIT APPLICATION</span>
                      <ChevronRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {mode === "apply" && (
                <div className="flex items-center justify-center gap-1.5 text-xs text-neutral-500 pt-1 text-center">
                  <Lock className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Secure 256-bit encrypted checkout via Stripe</span>
                </div>
              )}
            </form>
          )}

          {/* ============================================================== */}
          {/* STEP 3: SUCCESS STATE (WAITLIST POP-UP FLOW) */}
          {/* ============================================================== */}
          {step === 3 && (
            <div className="py-6 text-center space-y-4 font-sans">
              <div className="w-16 h-16 bg-[#e7faf0] text-[#085229] rounded-full flex items-center justify-center mx-auto border border-[#13ce66]/40">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="font-serif font-bold text-xl text-neutral-900">
                  Thank You, {contactData.name}!
                </h3>
                <p className="font-sans text-sm text-neutral-600 leading-relaxed max-w-sm mx-auto mt-2">
                  Your style questionnaire has been received. Harriet will review your answers and be in touch with you shortly at{" "}
                  <span className="font-semibold text-neutral-900">
                    {contactData.email}
                  </span>.
                </p>
              </div>

              <div className="pt-2 flex flex-col gap-2.5 max-w-sm mx-auto">
                <button
                  onClick={handleProceedToPaymentFromSuccess}
                  className="w-full py-3.5 px-6 bg-[#111827] hover:bg-black text-white font-serif text-[14px] uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Lock className="w-4 h-4 text-[#d1b7a1]" />
                  <span>SECURE YOUR SPOT — PROCEED TO PAYMENT</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleClose}
                  className="w-full py-2.5 text-xs uppercase tracking-widest font-semibold text-neutral-500 hover:text-black transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer: Powered by with Outgrow Emblem */}
        <div className="py-3 px-6 border-t border-neutral-100 flex items-center justify-center gap-1.5 flex-shrink-0">
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
    </div>
  );
}
