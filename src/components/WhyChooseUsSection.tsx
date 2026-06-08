"use client";

import { useEffect, useRef, useState } from "react";
import { AppImage } from "@/components/AppImage";
import whyChooseUsImage from "@/assets/why-choose-us.webp";

const IMAGE_ALT =
  "Best travel partner in Chikmagalur — certified and recognised by WTTC with certified & trusted, best price guarantee, safety & comfort, and well experienced service";

const WhyChooseUsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-10 sm:py-14 md:py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div
          className={`max-w-7xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Mobile: swipeable wide banner so baked-in text stays readable */}
          <div className="md:hidden">
            <p className="text-center text-xs text-muted-foreground mb-3">
              Swipe to view full banner →
            </p>
            <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 pb-1 snap-x snap-mandatory">
              <div className="rounded-2xl overflow-hidden bg-white shadow-md border border-border/40 snap-center inline-block">
                <AppImage
                  src={whyChooseUsImage}
                  alt={IMAGE_ALT}
                  width={whyChooseUsImage.width}
                  height={whyChooseUsImage.height}
                  sizes="720px"
                  className="h-auto w-[720px] max-w-none block"
                />
              </div>
            </div>
          </div>

          {/* Desktop & tablet: full-width fit inside container */}
          <div className="hidden md:block rounded-2xl overflow-hidden bg-white shadow-md border border-border/40">
            <div className="relative w-full aspect-[1024/329]">
              <AppImage
                src={whyChooseUsImage}
                alt={IMAGE_ALT}
                fill
                sizes="(max-width: 1280px) 90vw, 1152px"
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
