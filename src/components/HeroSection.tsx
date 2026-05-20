"use client";
import { imageSrc } from "@/lib/image-src";
import { WHATSAPP_LINK } from "@/lib/whatsapp";

import { MessageCircle, CheckCircle, Star, Users, Shield } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import heroImage1 from "@/assets/hero-chikmagalur.jpg";
import heroImage2 from "@/assets/hero-mist.jpg";
import heroImage3 from "@/assets/hero-adventure.jpg";
import heroImage4 from "@/assets/hero-waterfall.jpg";
import heroImage5 from "@/assets/hero-plantations.jpg";
import heroImage6 from "@/assets/hero-jeep-adventure.jpg";
import heroImage7 from "@/assets/hero-atv-adventure.jpg";

const heroImages = [
  imageSrc(heroImage1),
  imageSrc(heroImage2),
  imageSrc(heroImage6),
  imageSrc(heroImage3),
  imageSrc(heroImage7),
  imageSrc(heroImage4),
  imageSrc(heroImage5),
];

// Animated number component
const AnimatedNumber = ({ target, duration = 2000, suffix = "" }: { target: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const startTime = Date.now();
          
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeOut * target);
            setCount(current);
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-shuffle images every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Trigger fade-in after mount
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePosition({ x: x * 10, y: y * 10 });
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
      return () => hero.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Images Carousel — eager-load first slide for LCP, lazy-load rest */}
      <div className="absolute inset-0">
        {/* Hidden img tags allow native lazy-loading of non-active hero slides */}
        {heroImages.map((image, index) => (
          <img
            key={`preload-${index}`}
            src={image}
            alt=""
            aria-hidden="true"
            loading={index === 0 ? "eager" : "lazy"}
            decoding={index === 0 ? "sync" : "async"}
            fetchPriority={index === 0 ? "high" : "low"}
            className="hidden"
          />
        ))}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-no-repeat transition-all duration-[2000ms] ease-in-out ${
              index === currentImageIndex ? 'opacity-100 scale-[1.04]' : 'opacity-0 scale-100'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: 'center 40%',
              transform: index === currentImageIndex 
                ? `scale(1.04) translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)` 
                : 'scale(1)',
            }}
          />
        ))}
      </div>

      {/* Desktop Bottom Bar: Stats + Carousel Indicators */}
      <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-20 items-center gap-6">
        {/* Stats Cards */}
        <div className="glass-card px-4 py-2 animate-float-gentle hover-glow">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-sunset fill-sunset" />
            <span className="font-semibold text-white text-sm">4.9+ Rating</span>
          </div>
        </div>
        <div className="glass-card px-4 py-2 animate-float-gentle hover-glow" style={{ animationDelay: "1s" }}>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-sunset" />
            <span className="font-semibold text-white text-sm">500+ Travelers</span>
          </div>
        </div>
        <div className="glass-card px-4 py-2 animate-float-gentle hover-glow" style={{ animationDelay: "2s" }}>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-sunset" />
            <span className="font-semibold text-white text-sm">Govt. Verified</span>
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-px h-6 bg-white/30" />
        
        {/* Carousel Dots */}
        <div className="flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-white w-6' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Mobile Carousel Indicators Only */}
      <div className="md:hidden absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white w-6' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Animated Morning Mist Layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-white/10 via-white/5 to-transparent animate-mist-drift-1"
          style={{ filter: 'blur(40px)' }}
        />
        <div 
          className="absolute bottom-[10%] left-[-20%] w-[140%] h-[30%] bg-gradient-to-r from-transparent via-white/8 to-transparent animate-mist-drift-2"
          style={{ filter: 'blur(60px)' }}
        />
        <div 
          className="absolute bottom-[20%] left-[-10%] w-[120%] h-[25%] bg-gradient-to-r from-white/5 via-white/10 to-white/5 animate-mist-drift-3"
          style={{ filter: 'blur(50px)' }}
        />
      </div>

      {/* Soft Light Bloom Effect */}
      <div 
        className="absolute top-[10%] left-[30%] w-[40%] h-[40%] rounded-full pointer-events-none animate-bloom-pulse"
        style={{
          background: 'radial-gradient(ellipse, hsl(45 80% 90% / 0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      
      {/* Cinematic Gradient Overlay */}
      <div className="absolute inset-0 gradient-cinematic" />
      
      {/* Extra dark bottom gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-16 sm:pt-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div 
            className={`inline-flex items-center gap-2 glass-dark rounded-full px-5 py-2.5 mb-8 transition-all duration-1000 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <CheckCircle className="w-4 h-4 text-sunset" />
            <span className="text-sm font-medium tracking-wide">100% Verified Tours</span>
          </div>

          {/* Heading - SEO Optimized H1 */}
          <h1 
            className={`font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6 sm:mb-8 tracking-tight transition-all duration-1200 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            Best Chikmagalur <br className="hidden sm:block" />
            <span className="text-gradient-gold">Tour Packages</span>
          </h1>
          
          {/* SEO Subtitle */}
          <p 
            className={`text-base sm:text-lg md:text-xl text-white/95 max-w-2xl mx-auto mb-4 transition-all duration-1200 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            Book trips to coffee plantations, Mullayanagiri trek, waterfalls & adventure activities. Trusted by 5000+ travelers.
          </p>

          {/* Glassmorphic CTA Buttons - Mobile: centered lower, Desktop: left corner above stats */}
          <div 
            className={`flex flex-row gap-2 sm:gap-4 justify-center md:justify-start mt-8 sm:mt-6 md:mt-10 mb-6 sm:mb-8 md:mb-6 px-4 transition-all duration-1200 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '700ms' }}
          >
            {/* Primary CTA - Glassmorphic with accent */}
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-3 px-4 sm:px-8 py-2.5 sm:py-4 rounded-full glass-button text-white text-sm sm:text-lg font-medium overflow-hidden animate-cta-glow hover:-translate-y-0.5 transition-transform duration-500 ease-out"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <MessageCircle className="w-3.5 h-3.5 sm:w-5 sm:h-5 relative z-10" />
              <span className="relative z-10">Book Now</span>
            </a>
            
            {/* Secondary CTA */}
            <a 
              href="#packages" 
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-8 py-2.5 sm:py-4 rounded-full border border-white/20 text-white text-sm sm:text-lg font-medium backdrop-blur-sm hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5 transition-all duration-500 ease-out"
            >
              View Packages
            </a>
          </div>

        </div>
      </div>

      {/* Mobile Stats Section - Below hero content */}
      <div 
        className={`md:hidden absolute bottom-6 left-0 right-0 px-4 transition-all duration-1200 ease-out ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: '900ms' }}
      >
        <div className="flex justify-center gap-3">
          <div className="glass-card px-4 py-2.5 text-center min-w-[85px]">
            <div className="flex items-center justify-center gap-1 mb-0.5">
              <Star className="w-3.5 h-3.5 text-sunset fill-sunset" />
            </div>
            <span className="font-bold text-white text-base">
              <AnimatedNumber target={4} suffix=".9+" />
            </span>
            <p className="text-white/90 text-[10px]">Rating</p>
          </div>
          <div className="glass-card px-4 py-2.5 text-center min-w-[85px]">
            <div className="flex items-center justify-center gap-1 mb-0.5">
              <Users className="w-3.5 h-3.5 text-sunset" />
            </div>
            <span className="font-bold text-white text-base">
              <AnimatedNumber target={500} suffix="+" />
            </span>
            <p className="text-white/90 text-[10px]">Travelers</p>
          </div>
          <div className="glass-card px-4 py-2.5 text-center min-w-[85px]">
            <div className="flex items-center justify-center gap-1 mb-0.5">
              <Shield className="w-3.5 h-3.5 text-sunset" />
            </div>
            <span className="font-bold text-white text-base">
              <AnimatedNumber target={100} suffix="%" />
            </span>
            <p className="text-white/90 text-[10px]">Verified</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
