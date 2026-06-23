"use client";

import { Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { AppImage } from "@/components/AppImage";
import { testimonials } from "@/data/testimonials";
import {
  CAROUSEL_SUPER_SLOW,
  useManualAutoCarousel,
} from "@/hooks/use-manual-auto-carousel";

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(testimonial.likes);
  const [isActive, setIsActive] = useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <div
      data-carousel-no-drag
      className={`testimonial-card carousel-interactive-card min-w-[320px] max-w-[320px] md:min-w-[380px] md:max-w-[380px] p-6 mx-4 flex-shrink-0 transition-all duration-500 ease-out cursor-default ${
        isActive ? "scale-[1.02] testimonial-card-hovered carousel-card-active" : ""
      }`}
      style={{ animationDelay: `${index * 0.5}s` }}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onPointerDown={() => setIsActive(true)}
      onPointerUp={() => setIsActive(false)}
      onPointerCancel={() => setIsActive(false)}
    >
      <div className="flex items-center gap-4 mb-4">
        <AppImage
          src={testimonial.photo}
          alt={`${testimonial.name} — Trip Chikmagalur customer review photo`}
          width={48}
          height={48}
          className="w-12 h-12 rounded-full object-cover shadow-lg ring-2 ring-white/20 shrink-0"
        />
        <div>
          <p className="font-semibold text-foreground">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.handle}</p>
        </div>
      </div>

      <p className="text-foreground/80 leading-relaxed mb-4 text-sm md:text-base">
        &ldquo;{testimonial.review}&rdquo;
      </p>

      <button
        type="button"
        onClick={handleLike}
        className={`group/like flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-500 ease-out ${
          liked
            ? "bg-sunset/20 text-sunset"
            : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground active:bg-muted"
        }`}
      >
        <Heart
          className={`w-4 h-4 transition-all duration-500 ease-out ${
            liked ? "fill-sunset scale-110 animate-like-bounce" : "group-hover/like:scale-110"
          }`}
        />
        <span className="text-sm font-medium">{likeCount}</span>
      </button>
    </div>
  );
}

const TestimonialSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const { scrollRef, isPaused, scrollProps } = useManualAutoCarousel({
    active: isVisible,
    segments: 3,
    segmentDurationMs: CAROUSEL_SUPER_SLOW.testimonialsMs,
    direction: "rtl",
  });

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

  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section ref={sectionRef} className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-sunset/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-teal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 mb-12">
        <div
          className={`text-center transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <span className="text-sunset font-medium text-sm uppercase tracking-[0.2em]">Testimonials</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mt-4">
            What Our Travelers Say
          </h2>
          <p className="text-muted-foreground mt-4 text-sm max-w-lg mx-auto">
            Super-slow drift right → left · swipe/drag ↔ or scroll ↑↓ on mobile & desktop
            {isPaused ? " · paused" : ""}
          </p>
        </div>
      </div>

      <div
        className={`relative transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollRef}
          className={`testimonials-carousel carousel-manual-scroll scrollbar-hide py-2 ${isPaused ? "is-dragging" : ""}`}
          {...scrollProps}
        >
          <div className="flex py-4 w-max">
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
