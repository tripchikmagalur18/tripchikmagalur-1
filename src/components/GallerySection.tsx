"use client";

import { useState, useEffect, useRef } from "react";
import ziplineImg from "@/assets/activity-zipline.webp";
import atvImg from "@/assets/activity-atv.webp";
import jeepImg from "@/assets/activity-jeep.webp";
import trekImg from "@/assets/activity-trek.webp";
import campingImg from "@/assets/activity-camping.webp";
import sightseeingImg from "@/assets/activity-sightseeing.webp";
import heroImg from "@/assets/hero-chikmagalur.webp";
import galleryHouseOfPepperCamping from "@/assets/gallery/gallery-house-of-pepper-camping.webp";
import galleryMullayanagiriSunset from "@/assets/gallery/gallery-mullayanagiri-sunset.webp";
import galleryWaterfallTrek from "@/assets/gallery/gallery-waterfall-trek.webp";
import galleryAboveCloudsSummit from "@/assets/gallery/gallery-above-clouds-summit.webp";
import galleryResortPoolVilla from "@/assets/gallery/gallery-resort-pool-villa.webp";
import type { StaticImageData } from "next/image";
import { AppImage } from "@/components/AppImage";
import { useCoarsePointer } from "@/hooks/use-coarse-pointer";

const GALLERY_SIZES = "(max-width: 768px) 256px, 288px";

const galleryImages: { src: StaticImageData; alt: string; caption: string; rotation: number }[] = [
  { src: heroImg, alt: "Misty Chikmagalur mountain panorama at sunrise over coffee country Karnataka", caption: "Coffee country sunrise", rotation: -3 },
  { src: galleryAboveCloudsSummit, alt: "Trekkers standing above the clouds at Mullayanagiri summit Chikmagalur Karnataka", caption: "Above the clouds — Mullayanagiri", rotation: 4 },
  { src: galleryMullayanagiriSunset, alt: "Friends celebrating sunset at Mullayanagiri peak viewpoint on Chikmagalur tour package", caption: "Sunset at Mullayanagiri peak", rotation: -2 },
  { src: galleryWaterfallTrek, alt: "Adventure waterfall trekking in lush Western Ghats forest near Chikmagalur", caption: "Waterfall trek adventure", rotation: 5 },
  { src: sightseeingImg, alt: "Hebbe Falls cascading through Kemmangundi coffee estate Chikmagalur", caption: "Hebbe Falls — Kemmangundi", rotation: -4 },
  { src: galleryResortPoolVilla, alt: "Trip Chikmagalur resort with swimming pool and luxury villa stay in coffee hills", caption: "Resort with pool — Chikmagalur", rotation: 3 },
  { src: galleryHouseOfPepperCamping, alt: "Luxury camping tents at House of Pepper Coffee homestay in Chikmagalur plantation", caption: "House of Pepper Coffee camping", rotation: -5 },
  { src: trekImg, alt: "Mullayanagiri trek summit trail through misty hills in Chikmagalur", caption: "Mullayanagiri trek trail", rotation: 2 },
  { src: jeepImg, alt: "Jeep safari on Western Ghats mountain trail near Chikmagalur waterfalls", caption: "Jeep safari adventure", rotation: -3 },
  { src: campingImg, alt: "Campfire night camping experience in Chikmagalur Western Ghats hills", caption: "Night camping in the hills", rotation: 4 },
  { src: ziplineImg, alt: "Ziplining adventure across valley in Chikmagalur Karnataka", caption: "Zipline adventure", rotation: -2 },
  { src: atvImg, alt: "ATV off-road adventure ride through Chikmagalur coffee plantation trails", caption: "ATV off-road ride", rotation: 5 },
];

const GallerySection = () => {
  const isTouchDevice = useCoarsePointer();
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

  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !scrollContainerRef.current) return;
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !isDragging || !scrollContainerRef.current) return;
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const endDrag = () => {
    setIsDragging(false);
    setIsPaused(false);
    setHoveredIndex(null);
  };

  const autoScroll = isTouchDevice ? !isPaused : !isPaused && !isDragging;

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
            {isTouchDevice ? "Swipe to explore →" : "Drag to explore →"}
          </p>
        </div>
      </div>

      {/* Scrolling Gallery with Tilted Cards */}
      <div
        ref={scrollContainerRef}
        className={`relative py-8 scrollbar-hide smooth-touch-x ${
          isTouchDevice ? "overflow-hidden" : "overflow-x-auto"
        } ${
          isDragging ? "cursor-grabbing" : "md:cursor-grab"
        }`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onPointerCancel={endDrag}
        style={{ scrollBehavior: "auto" }}
      >
        <div
          className={`flex gap-8 ${autoScroll ? "animate-slide-left-slow" : ""}`}
          style={{
            animationPlayState: autoScroll ? "running" : "paused",
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
                  className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden transition-all duration-500"
                  style={{
                    boxShadow: isHovered
                      ? "0 20px 40px -12px rgba(0,0,0,0.5)"
                      : "0 10px 30px -10px rgba(0,0,0,0.4)",
                  }}
                >
                  <AppImage
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={GALLERY_SIZES}
                    className="transition-transform duration-700"
                    style={{
                      transform: isHovered ? "scale(1.05)" : "scale(1)",
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
                    <p className="text-white font-semibold text-lg">{image.caption}</p>
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
