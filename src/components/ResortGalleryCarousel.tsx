"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { AppImage } from "@/components/AppImage";
import type { StayGalleryImage } from "@/data/stays";
import { cn } from "@/lib/utils";
import { useBodyScrollLock } from "@/hooks/use-body-scroll-lock";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunset focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const emblaOpts = {
  align: "start" as const,
  loop: true,
  dragFree: false,
};

const TAP_MOVE_THRESHOLD = 10;

type ResortGalleryCarouselProps = {
  images: StayGalleryImage[];
  className?: string;
};

export function ResortGalleryCarousel({ images, className }: ResortGalleryCarouselProps) {
  const headingId = useId();
  const statusId = useId();
  const lightboxTitleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const tapStartRef = useRef<{ x: number; y: number } | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [lightboxApi, setLightboxApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  const onLightboxSelect = useCallback(() => {
    if (!lightboxApi) return;
    setLightboxIndex(lightboxApi.selectedScrollSnap());
  }, [lightboxApi]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onSelect]);

  useEffect(() => {
    if (!lightboxApi) return;
    onLightboxSelect();
    lightboxApi.on("select", onLightboxSelect);
    lightboxApi.on("reInit", onLightboxSelect);
    return () => {
      lightboxApi.off("select", onLightboxSelect);
      lightboxApi.off("reInit", onLightboxSelect);
    };
  }, [lightboxApi, onLightboxSelect]);

  const scrollTo = (index: number) => api?.scrollTo(index);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const onInlinePointerDown = (e: ReactPointerEvent<HTMLElement>) => {
    tapStartRef.current = { x: e.clientX, y: e.clientY };
  };

  const onInlinePointerUp = (index: number) => (e: ReactPointerEvent<HTMLElement>) => {
    const start = tapStartRef.current;
    tapStartRef.current = null;
    if (!start) return;
    const dx = Math.abs(e.clientX - start.x);
    const dy = Math.abs(e.clientY - start.y);
    if (dx <= TAP_MOVE_THRESHOLD && dy <= TAP_MOVE_THRESHOLD) {
      openLightbox(index);
    }
  };

  const closeLightbox = useCallback(() => {
    const index = lightboxApi?.selectedScrollSnap() ?? lightboxIndex;
    setLightboxOpen(false);
    api?.scrollTo(index);
    setCurrent(index);
  }, [api, lightboxApi, lightboxIndex]);

  useEffect(() => {
    if (!lightboxOpen || !lightboxApi) return;
    lightboxApi.scrollTo(lightboxIndex, true);
  }, [lightboxOpen, lightboxApi, lightboxIndex]);

  useBodyScrollLock(lightboxOpen);

  useEffect(() => {
    if (!lightboxOpen) return;

    closeButtonRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") lightboxApi?.scrollPrev();
      if (e.key === "ArrowRight") lightboxApi?.scrollNext();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxOpen, closeLightbox, lightboxApi]);

  const active = images[current];
  const lightboxImage = images[lightboxIndex];

  const slideFigure = (img: StayGalleryImage, index: number, mode: "inline" | "fullscreen" = "inline") => (
    <figure
      className={cn(
        "relative w-full m-0",
        mode === "inline" ? "h-[200px] sm:h-[260px] lg:h-[300px] cursor-zoom-in" : "flex h-full min-h-[50vh] items-center justify-center",
      )}
      {...(mode === "inline"
        ? {
            role: "button" as const,
            tabIndex: 0,
            onPointerDown: onInlinePointerDown,
            onPointerUp: onInlinePointerUp(index),
            onPointerCancel: () => {
              tapStartRef.current = null;
            },
            onKeyDown: (e: ReactKeyboardEvent<HTMLElement>) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openLightbox(index);
              }
            },
            "aria-label": `Open full screen: ${img.label}`,
          }
        : {})}
    >
      <AppImage
        src={img.src}
        alt={img.alt}
        fill={mode === "inline"}
        width={mode === "inline" ? undefined : img.src.width}
        height={mode === "inline" ? undefined : img.src.height}
        sizes={mode === "inline" ? "(max-width: 768px) 100vw, 50vw" : "100vw"}
        priority={index === 0}
        className={cn(
          "select-none pointer-events-none",
          mode === "inline" ? "object-cover" : "max-h-[calc(100dvh-11rem)] w-auto h-auto object-contain",
        )}
      />
      {mode === "inline" && (
        <>
          <button
            type="button"
            onClick={() => openLightbox(index)}
            className={cn(
              "absolute bottom-3 right-3 z-10 min-w-11 min-h-11 rounded-full",
              "bg-black/50 backdrop-blur-sm text-white hover:bg-black/65 transition",
              "flex items-center justify-center",
              focusRing,
            )}
            aria-label={`View full screen: ${img.label}`}
          >
            <Maximize2 className="w-4 h-4" aria-hidden="true" />
          </button>
          <figcaption className="absolute inset-x-0 bottom-0 px-4 py-3 pr-16 bg-gradient-to-t from-black/75 via-black/40 to-transparent pointer-events-none">
            <span className="text-white text-sm font-medium">{img.label}</span>
          </figcaption>
        </>
      )}
      {mode === "fullscreen" && (
        <figcaption className="sr-only">
          {img.label}: {img.alt}
        </figcaption>
      )}
    </figure>
  );

  return (
    <section aria-labelledby={headingId} className={cn("min-w-0", className)}>
      <h2 id={headingId} className="sr-only">
        Resort photo gallery — swipe left or right to browse
      </h2>

      <Carousel
        setApi={setApi}
        opts={emblaOpts}
        className="w-full touch-pan-x"
        aria-roledescription="carousel"
        aria-label="Resort photos. Swipe to browse."
      >
        <div className="relative rounded-2xl overflow-hidden border border-border bg-muted/30 shadow-md">
          <CarouselContent className="-ml-0 [&>div]:touch-pan-x">
            {images.map((img, index) => (
              <CarouselItem key={img.label} className="pl-0 basis-full">
                {slideFigure(img, index)}
              </CarouselItem>
            ))}
          </CarouselContent>

          <button
            type="button"
            onClick={() => api?.scrollPrev()}
            className={cn(
              "absolute left-2 top-1/2 -translate-y-1/2 z-10 min-w-11 min-h-11 rounded-full",
              "bg-black/45 backdrop-blur-sm text-white hover:bg-black/60 transition",
              "flex items-center justify-center pointer-events-auto",
              focusRing,
            )}
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-5 h-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => api?.scrollNext()}
            className={cn(
              "absolute right-2 top-1/2 -translate-y-1/2 z-10 min-w-11 min-h-11 rounded-full",
              "bg-black/45 backdrop-blur-sm text-white hover:bg-black/60 transition",
              "flex items-center justify-center pointer-events-auto",
              focusRing,
            )}
            aria-label="Next photo"
          >
            <ChevronRight className="w-5 h-5" aria-hidden="true" />
          </button>

          <div
            className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium tabular-nums pointer-events-none"
            aria-hidden="true"
          >
            {current + 1} / {images.length}
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-2" aria-hidden="true">
          <span className="sm:hidden">Tap photo for full view · swipe to browse</span>
          <span className="hidden sm:inline">Tap any photo to open full screen</span>
        </p>

        <p id={statusId} className="sr-only" aria-live="polite" aria-atomic="true">
          {active
            ? `Showing photo ${current + 1} of ${images.length}: ${active.label}. ${active.alt}`
            : ""}
        </p>

        <div
          className="flex justify-center gap-1.5 mt-3 px-1"
          role="tablist"
          aria-label="Choose a photo"
        >
          {images.map((img, index) => (
            <button
              key={img.label}
              type="button"
              role="tab"
              aria-selected={index === current}
              aria-controls={statusId}
              aria-label={`Photo ${index + 1}: ${img.label}`}
              onClick={() => scrollTo(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300 min-w-2",
                focusRing,
                index === current ? "w-6 bg-sunset" : "w-2 bg-muted-foreground/35 hover:bg-muted-foreground/55",
              )}
            />
          ))}
        </div>
      </Carousel>

      {lightboxOpen && lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={lightboxTitleId}
          className="fixed inset-0 z-[70] flex flex-col bg-black"
        >
          <header
            className="flex items-center gap-3 px-4 py-3 shrink-0 border-b border-white/10 z-10"
            style={{ paddingTop: "max(0.75rem, env(safe-area-inset-top))" }}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeLightbox}
              className={cn(
                "inline-flex items-center gap-2 min-h-11 px-3 rounded-full",
                "bg-white/10 text-white hover:bg-white/20 transition",
                focusRing,
              )}
              aria-label="Close full screen and go back to gallery"
            >
              <ArrowLeft className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span className="text-sm font-medium">Back</span>
            </button>
            <div className="flex-1 min-w-0 text-right">
              <p id={lightboxTitleId} className="text-white text-sm font-medium truncate">
                {lightboxImage.label}
              </p>
              <p className="text-white/60 text-xs tabular-nums">
                {lightboxIndex + 1} of {images.length}
              </p>
            </div>
          </header>

          <div className="relative flex-1 min-h-0 touch-pan-x">
            <Carousel
              setApi={setLightboxApi}
              opts={emblaOpts}
              className="h-full w-full"
              aria-label="Full screen photos. Swipe to browse."
            >
              <CarouselContent className="-ml-0 h-full">
                {images.map((img, index) => (
                  <CarouselItem key={`lb-slide-${img.label}`} className="pl-0 basis-full h-full">
                    <div className="flex h-full min-h-[50vh] items-center justify-center px-2">
                      {slideFigure(img, index, "fullscreen")}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <button
                type="button"
                onClick={() => lightboxApi?.scrollPrev()}
                className={cn(
                  "absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 min-w-11 min-h-11 rounded-full",
                  "bg-white/15 text-white hover:bg-white/25 flex items-center justify-center transition",
                  focusRing,
                )}
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => lightboxApi?.scrollNext()}
                className={cn(
                  "absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 min-w-11 min-h-11 rounded-full",
                  "bg-white/15 text-white hover:bg-white/25 flex items-center justify-center transition",
                  focusRing,
                )}
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" aria-hidden="true" />
              </button>
            </Carousel>
          </div>

          <p className="sr-only" aria-live="polite" aria-atomic="true">
            {lightboxImage.label}. {lightboxImage.alt}
          </p>

          <p className="text-center text-xs text-white/50 py-1 sm:hidden shrink-0" aria-hidden="true">
            Swipe to see more photos
          </p>

          <footer
            className="shrink-0 px-4 py-4 flex justify-center gap-1.5 z-10"
            style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
          >
            {images.map((img, index) => (
              <button
                key={`lb-${img.label}`}
                type="button"
                aria-label={`Go to ${img.label}`}
                aria-current={index === lightboxIndex ? "true" : undefined}
                onClick={() => lightboxApi?.scrollTo(index)}
                className={cn(
                  "h-2 rounded-full transition-all min-w-2",
                  focusRing,
                  index === lightboxIndex ? "w-6 bg-sunset" : "w-2 bg-white/35 hover:bg-white/55",
                )}
              />
            ))}
          </footer>
        </div>
      )}
    </section>
  );
}
