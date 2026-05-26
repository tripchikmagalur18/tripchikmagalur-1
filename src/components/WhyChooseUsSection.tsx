"use client";

import { useEffect, useRef, useState } from "react";
import { AppImage } from "@/components/AppImage";
import whyChooseUsImage from "@/assets/why-choose-us.webp";

const WhyChooseUsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <AppImage
            src={whyChooseUsImage}
            alt="Best travel partner in Chikmagalur — certified and recognised by WTTC"
            width={whyChooseUsImage.width}
            height={whyChooseUsImage.height}
            sizes="(max-width: 1152px) 100vw, 1152px"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
