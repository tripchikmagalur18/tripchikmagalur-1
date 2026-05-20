"use client";

import { Award, Star, CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const certifications = [
  { label: "Tourism Dept. of India", icon: Award },
  { label: "WTTC Certified", icon: CheckCircle },
  { label: "Rated 4.9+", icon: Star },
  { label: "Incredible India", icon: Award },
];

const partners = [
  "Funday Bites",
  "Kaimara Coffee",
  "Lotsa Ice Cream",
  "Mubarak Adventures",
  "World of Coffee",
  "RedBus",
  "TripAdvisor",
  "MakeMyTrip",
];

const PartnersSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        {/* Certifications */}
        <div className={`flex flex-wrap justify-center gap-8 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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

        {/* Divider */}
        <div className="border-t border-border mb-12" />

        {/* Partners */}
        <div className={`text-center mb-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-sm text-muted-foreground uppercase tracking-[0.2em]">
            Associated Partners
          </span>
        </div>
        <div className={`flex flex-wrap justify-center gap-x-8 gap-y-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {partners.map((partner) => (
            <span
              key={partner}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium cursor-default"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
