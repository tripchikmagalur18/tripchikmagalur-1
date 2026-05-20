"use client";

import { useState, useEffect } from "react";
import { X, User, Phone, Mail, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/backend/client";
import { useToast } from "@/hooks/use-toast";
import { leadFormSchema } from "@/lib/validations/lead";
import { ZodError } from "zod";

const LeadFormPopup = () => {
  const { toast } = useToast();
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
    // Check if popup was already shown in this session
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
    
    // Client-side validation
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
      const { error } = await supabase
        .from('leads')
        .insert({
          name: validation.data.name,
          phone: validation.data.phone,
          email: validation.data.email,
        });

      if (error) {
        // Handle rate limiting error from database
        if (error.message.includes('Rate limit')) {
          throw new Error('Please wait a few minutes before submitting again.');
        }
        throw error;
      }

      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: "We'll get back to you with amazing offers soon!",
      });
      
      setTimeout(() => {
        handleClose();
      }, 2000);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong. Please try again.";
      toast({
        title: "Oops!",
        description: message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Popup Card */}
      <div
        className={`relative w-full max-w-md transform transition-all duration-500 ease-out ${
          isClosing
            ? "scale-95 opacity-0 translate-y-4"
            : "scale-100 opacity-100 translate-y-0"
        }`}
        style={{
          animation: isClosing ? "" : "popup-bounce 0.6s ease-out",
        }}
      >
        {/* Glassmorphic Card */}
        <div className="relative overflow-hidden rounded-2xl glass-dark shadow-2xl">
          {/* Decorative gradient orbs */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-sunset/30 to-transparent rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-teal-500/20 to-transparent rounded-full blur-3xl" />

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-200 group z-10"
            aria-label="Close popup"
          >
            <X className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
          </button>

          {/* Content */}
          <div className="p-8 pt-6">
            {!isSubmitted ? (
              <>
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-sunset/20 to-sunset/5 border border-sunset/20 mb-4 animate-pulse">
                    <Sparkles className="w-7 h-7 text-sunset" />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-white mb-2">
                    Get Exclusive Offers! ✨
                  </h2>
                  <p className="text-white/60 text-sm">
                    Sign up for the best Chikmagalur travel deals
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div className="space-y-1">
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className={`w-5 h-5 transition-colors ${fieldErrors.name ? 'text-destructive' : 'text-white/40 group-focus-within:text-sunset'}`} />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className={`w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border text-white placeholder:text-white/40 focus:outline-none focus:bg-white/10 transition-all duration-200 ${fieldErrors.name ? 'border-destructive' : 'border-white/10 focus:border-sunset/50'}`}
                      />
                    </div>
                    {fieldErrors.name && <p className="text-destructive text-xs pl-4">{fieldErrors.name}</p>}
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-1">
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Phone className={`w-5 h-5 transition-colors ${fieldErrors.phone ? 'text-destructive' : 'text-white/40 group-focus-within:text-sunset'}`} />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className={`w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border text-white placeholder:text-white/40 focus:outline-none focus:bg-white/10 transition-all duration-200 ${fieldErrors.phone ? 'border-destructive' : 'border-white/10 focus:border-sunset/50'}`}
                      />
                    </div>
                    {fieldErrors.phone && <p className="text-destructive text-xs pl-4">{fieldErrors.phone}</p>}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1">
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className={`w-5 h-5 transition-colors ${fieldErrors.email ? 'text-destructive' : 'text-white/40 group-focus-within:text-sunset'}`} />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className={`w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border text-white placeholder:text-white/40 focus:outline-none focus:bg-white/10 transition-all duration-200 ${fieldErrors.email ? 'border-destructive' : 'border-white/10 focus:border-sunset/50'}`}
                      />
                    </div>
                    {fieldErrors.email && <p className="text-destructive text-xs pl-4">{fieldErrors.email}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 mt-2 rounded-xl bg-gradient-to-r from-sunset to-orange-500 text-white font-semibold text-lg shadow-lg shadow-sunset/25 hover:shadow-sunset/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? "Sending..." : "Get My Offers 🎉"}
                  </button>
                </form>

                {/* Footer */}
                <p className="text-center text-white/40 text-xs mt-4">
                  We respect your privacy. No spam, ever.
                </p>
              </>
            ) : (
              /* Success State */
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-500/20 to-green-500/5 border border-green-500/20 mb-4">
                  <svg
                    className="w-10 h-10 text-green-400 animate-success-check"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  Thank You! 🎊
                </h3>
                <p className="text-white/60">
                  We'll send you amazing deals soon!
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
        
        @keyframes success-check {
          0% {
            stroke-dasharray: 0, 100;
          }
          100% {
            stroke-dasharray: 100, 0;
          }
        }
        
        .animate-success-check path {
          animation: success-check 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default LeadFormPopup;
