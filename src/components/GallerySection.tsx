"use client";

import { useState, useEffect, useRef } from "react";
import ziplineImg from "@/assets/activity-zipline.webp";
import atvImg from "@/assets/activity-atv.webp";
import jeepImg from "@/assets/activity-jeep.webp";
import trekImg from "@/assets/activity-trek.webp";
import campingImg from "@/assets/activity-camping.webp";
import sightseeingImg from "@/assets/activity-sightseeing.webp";
import heroImg from "@/assets/hero-chikmagalur.webp";
import { imageSrc } from "@/lib/image-src";

const galleryImages = [
  { src: imageSrc(heroImg), alt: "Chikmagalur Mountains", rotation: -3 },
  { src: imageSrc(sightseeingImg), alt: "Hebbe Falls", rotation: 4 },
  { src: imageSrc(trekImg), alt: "Mullayanagiri Trek", rotation: -2 },
  { src: imageSrc(jeepImg), alt: "Jeep Safari", rotation: 5 },
  { src: imageSrc(campingImg), alt: "Campfire Night", rotation: -4 },
  { src: imageSrc(ziplineImg), alt: "Ziplining Adventure", rotation: 3 },
  { src: imageSrc(atvImg), alt: "ATV Ride", rotation: -5 },
];

const GallerySection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Duplicate images for seamless loop
  const duplicatedImages = [...galleryImages, ...galleryImages];

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
    setHoveredIndex(null);
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

  return (
    <section 
      ref={sectionRef}
      id="gallery" 
      className="py-24 bg-muted/30 overflow-hidden relative"
    >
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-sunset font-medium text-sm uppercase tracking-[0.2em]">
            Captured Moments
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mt-4">
            Photo Gallery
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Glimpses of the magical experiences awaiting you in Chikmagalur
          </p>
          <p className="text-muted-foreground/60 mt-2 text-sm">
            Drag to explore →
          </p>
        </div>
      </div>

      {/* Scrolling Gallery with Tilted Cards */}
      <div
        ref={scrollContainerRef}
        className={`relative py-8 overflow-x-auto scrollbar-hide cursor-grab ${isDragging ? 'cursor-grabbing' : ''}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => setIsPaused(false)}
        style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
      >
        <div
          className={`flex gap-8 ${isPaused || isDragging ? "" : "animate-slide-left-slow"}`}
          style={{
            animationPlayState: isPaused || isDragging ? "paused" : "running",
            width: "max-content",
          }}
        >
          {duplicatedImages.map((image, index) => {
            const isHovered = hoveredIndex === index;
            const baseRotation = image.rotation;
            
            return (
              <div
                key={`${image.alt}-${index}`}
                className="relative shrink-0 cursor-pointer transition-all duration-500 ease-out"
                style={{
                  transform: isHovered 
                    ? `rotate(${baseRotation * 0.3}deg) translateY(-8px)` 
                    : `rotate(${baseRotation}deg)`,
                  zIndex: isHovered ? 50 : 1,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card with shadow */}
                <div 
                  className="w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden transition-all duration-500"
                  style={{
                    boxShadow: isHovered 
                      ? '0 20px 40px -12px rgba(0,0,0,0.5)' 
                      : '0 10px 30px -10px rgba(0,0,0,0.4)',
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700"
                    style={{
                      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                    }}
                  />
                  
                  {/* Gradient overlay */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-300"
                    style={{ opacity: isHovered ? 1 : 0.5 }}
                  />
                  
                  {/* Caption */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 p-5 transition-all duration-300"
                    style={{
                      transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
                      opacity: isHovered ? 1 : 0.8,
                    }}
                  >
                    <p className="text-white font-semibold text-lg">{image.alt}</p>
                  </div>
                </div>
                
                {/* Decorative scattered-photo border effect */}
                <div 
                  className="absolute inset-0 rounded-2xl border-4 border-white/20 pointer-events-none transition-opacity duration-300"
                  style={{ opacity: isHovered ? 0 : 1 }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
