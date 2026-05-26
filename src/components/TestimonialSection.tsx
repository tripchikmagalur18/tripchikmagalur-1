"use client";

import { Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { AppImage } from "@/components/AppImage";
import { testimonials } from "@/data/testimonials";
import { JsonLd } from "@/components/json-ld";
import { buildReviewSchemas } from "@/lib/review-schema";

const TestimonialCard = ({ 
  testimonial, 
  index,
  onHover,
  onLeave 
}: { 
  testimonial: typeof testimonials[0];
  index: number;
  onHover: () => void;
  onLeave: () => void;
}) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(testimonial.likes);
  const [isHovered, setIsHovered] = useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onLeave();
  };

  return (
    <div 
      className={`testimonial-card min-w-[320px] max-w-[320px] md:min-w-[380px] md:max-w-[380px] p-6 mx-4 flex-shrink-0 transition-all duration-700 ease-out cursor-pointer ${
        isHovered ? 'scale-[1.02] testimonial-card-hovered' : ''
      }`}
      style={{ 
        animationDelay: `${index * 0.5}s`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Header with photo and name */}
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
      
      {/* Review text */}
      <p className="text-foreground/80 leading-relaxed mb-4 text-sm md:text-base">
        "{testimonial.review}"
      </p>
      
      {/* Like button with bounce animation */}
      <button
        onClick={handleLike}
        className={`group/like flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-500 ease-out ${
          liked 
            ? 'bg-sunset/20 text-sunset' 
            : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
        }`}
      >
        <Heart 
          className={`w-4 h-4 transition-all duration-500 ease-out ${
            liked ? 'fill-sunset scale-110 animate-like-bounce' : 'group-hover/like:scale-110'
          }`} 
        />
        <span className="text-sm font-medium">{likeCount}</span>
      </button>
    </div>
  );
};

const TestimonialSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    setIsPaused(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-muted/30 relative overflow-hidden"
    >
      <JsonLd data={buildReviewSchemas()} />
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-sunset/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-teal/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10 mb-12">
        {/* Section Header */}
        <div className={`text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="text-sunset font-medium text-sm uppercase tracking-[0.2em]">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mt-4">
            What Our Travelers Say
          </h2>
          <p className="text-muted-foreground mt-4 text-sm">
            Drag to explore →
          </p>
        </div>
      </div>

      {/* Carousel Container */}
      <div 
        ref={scrollContainerRef}
        className={`relative overflow-x-auto scrollbar-hide transition-all duration-1000 delay-300 cursor-grab ${
          isDragging ? 'cursor-grabbing' : ''
        } ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => setIsPaused(false)}
        style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
      >
        {/* Gradient masks for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling testimonials - Super slow 40s cycle */}
        <div 
          className={`flex py-4 ${isPaused || isDragging ? '' : 'animate-carousel-slow'}`}
          style={{ 
            animationPlayState: isPaused || isDragging ? 'paused' : 'running',
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={`${testimonial.id}-${index}`} 
              testimonial={testimonial} 
              index={index}
              onHover={() => setIsPaused(true)}
              onLeave={() => setIsPaused(false)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
