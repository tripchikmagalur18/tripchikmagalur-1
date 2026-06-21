"use client";

import { Award, Star, CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { AppImage } from "@/components/AppImage";
import { partnerLogos, type PartnerLogo } from "@/data/partners";
import { useCoarsePointer } from "@/hooks/use-coarse-pointer";

const certifications = [
  { label: "Tourism Dept. of India", icon: Award },
  { label: "WTTC Certified", icon: CheckCircle },
  { label: "Rated 4.9+", icon: Star },
  { label: "Incredible India", icon: Award },
];

function PartnerLogoItem({ partner }: { partner: PartnerLogo }) {
  const content = (
    <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-white shadow-md ring-1 ring-border/40 flex-shrink-0">
      <AppImage
        src={partner.logo}
        alt={`${partner.name} — Trip Chikmagalur partner`}
        fill
        sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
        className="object-cover"
      />
    </div>
  );

  if (partner.href) {
    return (
      <a
        href={partner.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mx-6 sm:mx-8 md:mx-10 flex-shrink-0 hover:scale-105 transition-transform duration-300"
        aria-label={partner.name}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      className="mx-6 sm:mx-8 md:mx-10 flex-shrink-0"
      title={partner.name}
      aria-label={partner.name}
    >
      {content}
    </div>
  );
}

const PartnersSection = () => {
  const isTouchDevice = useCoarsePointer();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const autoScroll = !isTouchDevice;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const duplicatedPartners = [...partnerLogos, ...partnerLogos, ...partnerLogos];

  return (
    <section ref={sectionRef} className="py-16 bg-background border-y border-border overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          className={`flex flex-wrap justify-center gap-8 mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {certifications.map((cert, index) => (
            <div
              key={cert.label}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-300 cursor-default"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <cert.icon className="w-6 h-6" />
              <span className="font-medium">{cert.label}</span>
            </div>
          ))}
        </div>

        <div className="border-t border-border mb-10" />

        <div
          className={`text-center mb-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <span className="text-sm text-muted-foreground uppercase tracking-[0.2em]">
            Associated Partners
          </span>
        </div>
      </div>

      <div
        className={`relative transition-all duration-1000 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div
          className={`flex items-center py-2 ${autoScroll ? "animate-carousel-slow" : ""}`}
          style={{
            animationDirection: autoScroll ? "reverse" : "normal",
            animationPlayState: autoScroll ? "running" : "paused",
          }}
        >
          {duplicatedPartners.map((partner, index) => (
            <PartnerLogoItem key={`${partner.id}-${index}`} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
