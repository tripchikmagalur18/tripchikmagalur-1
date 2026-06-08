"use client";

import { useState, useEffect } from "react";
import { X, User, Phone, Mail, Sparkles } from "lucide-react";
import { leadFormSchema } from "@/lib/validations/lead";
import { LEAD_SUCCESS_MESSAGE, submitLeadEnquiry } from "@/lib/lead-enquiry";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunset focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

const LeadFormPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("hasSeenLeadPopup");
    if (hasSeenPopup) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
      sessionStorage.setItem("hasSeenLeadPopup", "true");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFieldErrors({});

    const validation = leadFormSchema.safeParse(formData);
    if (!validation.success) {
      const errors: Record<string, string> = {};
      validation.error.errors.forEach((err) => {
        if (err.path[0]) {
          errors[err.path[0] as string] = err.message;
        }
      });
      setFieldErrors(errors);
      return;
    }

    setIsSubmitting(true);

    try {
      await submitLeadEnquiry(validation.data);
      setIsSubmitted(true);
      setTimeout(() => handleClose(), 4000);
    } catch (error) {
      setFieldErrors({
        form:
          error instanceof Error
            ? error.message
            : "Could not send enquiry. Please call +91 6363131585.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-3 sm:p-4 transition-all duration-300 ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
      role="presentation"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-popup-title"
        className={`relative w-full max-w-md max-h-[92dvh] overflow-y-auto overscroll-contain transform transition-all duration-500 ease-out ${
          isClosing ? "scale-95 opacity-0 translate-y-4" : "scale-100 opacity-100 translate-y-0"
        }`}
        style={{
          animation: isClosing ? "" : "popup-bounce 0.6s ease-out",
        }}
      >
        <div className="relative overflow-hidden rounded-2xl glass-dark shadow-2xl">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-sunset/30 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-teal-500/20 to-transparent rounded-full blur-3xl pointer-events-none" />

          <button
            type="button"
            onClick={handleClose}
            className={`absolute top-3 right-3 sm:top-4 sm:right-4 min-w-11 min-h-11 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors z-10 ${focusRing}`}
            aria-label="Close enquiry form"
          >
            <X className="w-5 h-5 text-white/60 hover:text-white transition-colors" />
          </button>

          <div className="p-6 sm:p-8 pt-5 sm:pt-6">
            {!isSubmitted ? (
              <>
                <div className="text-center mb-5 sm:mb-6 pr-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-sunset/20 to-sunset/5 border border-sunset/20 mb-3 sm:mb-4">
                    <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-sunset" />
                  </div>
                  <h2
                    id="lead-popup-title"
                    className="text-xl sm:text-2xl font-display font-bold text-white mb-2"
                  >
                    Plan Your Chikmagalur Trip
                  </h2>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Share your details — we send them to our team on WhatsApp instantly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="space-y-1.5">
                    <label htmlFor="lead-name" className="text-xs font-medium text-white/70 pl-1">
                      Name <span className="text-sunset">*</span>
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User
                          className={`w-5 h-5 ${fieldErrors.name ? "text-destructive" : "text-white/40 group-focus-within:text-sunset"}`}
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        id="lead-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        autoComplete="name"
                        aria-invalid={!!fieldErrors.name}
                        aria-describedby={fieldErrors.name ? "lead-name-error" : undefined}
                        className={`w-full pl-12 pr-4 py-3.5 min-h-12 rounded-xl bg-white/5 border text-white text-base placeholder:text-white/40 focus:outline-none focus:bg-white/10 transition-all ${fieldErrors.name ? "border-destructive" : "border-white/10 focus:border-sunset/50"} ${focusRing}`}
                      />
                    </div>
                    {fieldErrors.name && (
                      <p id="lead-name-error" className="text-destructive text-xs pl-1" role="alert">
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="lead-phone" className="text-xs font-medium text-white/70 pl-1">
                      Phone <span className="text-sunset">*</span>
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Phone
                          className={`w-5 h-5 ${fieldErrors.phone ? "text-destructive" : "text-white/40 group-focus-within:text-sunset"}`}
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        id="lead-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        required
                        autoComplete="tel"
                        inputMode="tel"
                        aria-invalid={!!fieldErrors.phone}
                        aria-describedby={fieldErrors.phone ? "lead-phone-error" : undefined}
                        className={`w-full pl-12 pr-4 py-3.5 min-h-12 rounded-xl bg-white/5 border text-white text-base placeholder:text-white/40 focus:outline-none focus:bg-white/10 transition-all ${fieldErrors.phone ? "border-destructive" : "border-white/10 focus:border-sunset/50"} ${focusRing}`}
                      />
                    </div>
                    {fieldErrors.phone && (
                      <p id="lead-phone-error" className="text-destructive text-xs pl-1" role="alert">
                        {fieldErrors.phone}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="lead-email" className="text-xs font-medium text-white/70 pl-1">
                      Email <span className="text-sunset">*</span>
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail
                          className={`w-5 h-5 ${fieldErrors.email ? "text-destructive" : "text-white/40 group-focus-within:text-sunset"}`}
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        id="lead-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                        autoComplete="email"
                        inputMode="email"
                        aria-invalid={!!fieldErrors.email}
                        aria-describedby={fieldErrors.email ? "lead-email-error" : undefined}
                        className={`w-full pl-12 pr-4 py-3.5 min-h-12 rounded-xl bg-white/5 border text-white text-base placeholder:text-white/40 focus:outline-none focus:bg-white/10 transition-all ${fieldErrors.email ? "border-destructive" : "border-white/10 focus:border-sunset/50"} ${focusRing}`}
                      />
                    </div>
                    {fieldErrors.email && (
                      <p id="lead-email-error" className="text-destructive text-xs pl-1" role="alert">
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>

                  {fieldErrors.form && (
                    <p className="text-destructive text-xs text-center" role="alert">
                      {fieldErrors.form}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 min-h-12 mt-1 rounded-xl bg-gradient-to-r from-sunset to-orange-500 text-white font-semibold text-base sm:text-lg shadow-lg shadow-sunset/25 hover:shadow-sunset/40 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 ${focusRing}`}
                  >
                    {isSubmitting ? "Sending…" : "Submit enquiry"}
                  </button>
                </form>

                <p className="text-center text-white/40 text-xs mt-4 leading-relaxed px-2">
                  Submitted securely — delivered to our WhatsApp via CallMeBot. The WhatsApp app will
                  not open on your device.
                </p>
              </>
            ) : (
              <div className="text-center py-6 sm:py-8 px-2">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-green-500/20 to-green-500/5 border border-green-500/20 mb-4">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3">
                  Enquiry received
                </h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-sm mx-auto">
                  {LEAD_SUCCESS_MESSAGE}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes popup-bounce {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          50% {
            transform: scale(1.02) translateY(-5px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default LeadFormPopup;
