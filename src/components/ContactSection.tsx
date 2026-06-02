"use client";

import { MessageCircle, Mail, Phone, Instagram, Facebook, Twitter } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { WHATSAPP_LINK } from "@/lib/whatsapp";

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-24 bg-foreground text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-foreground to-black/90" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sunset/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-sunset font-medium text-sm uppercase tracking-[0.2em]">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mt-4">
              Ready for Your Adventure?
            </h2>
            <p className="text-white/60 mt-4 text-lg max-w-2xl mx-auto">
              Let's plan your perfect Chikmagalur getaway. Reach out to us via WhatsApp
              for instant responses!
            </p>
          </div>

          {/* WhatsApp CTA */}
          <div className={`mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-[#25D366]/30"
            >
              <MessageCircle className="w-7 h-7" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Contact Info */}
          <div className={`flex flex-wrap justify-center gap-8 mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a
              href="mailto:tripchikmagalur18@gmail.com"
              className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <span>tripchikmagalur18@gmail.com</span>
            </a>
            <a
              href="tel:+916363131585"
              className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <span>+91 63631 31585</span>
            </a>
          </div>

          {/* Social Links */}
          <div className={`flex justify-center gap-4 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {[
              { icon: Instagram, href: "https://instagram.com/trip_chikmagalur" },
              { icon: Facebook, href: "https://facebook.com/wanderlustckm" },
              { icon: Twitter, href: "https://twitter.com/wanderlustckm" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
