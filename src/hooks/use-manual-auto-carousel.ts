"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEventHandler,
  type WheelEventHandler,
} from "react";

type DragState = {
  pending: boolean;
  active: boolean;
  startX: number;
  startY: number;
  startScrollLeft: number;
  pointerId: number;
};

type UseManualAutoCarouselOptions = {
  /** Enable auto-scroll when section is visible. */
  active?: boolean;
  /** Ms to scroll one duplicated segment (super-slow = 90s–180s). */
  segmentDurationMs?: number;
  /** Duplicated segments for seamless loop. */
  segments?: number;
  /** Ms before auto-scroll resumes after manual interaction. */
  resumeDelayMs?: number;
  /** Auto direction: rtl = cards move right → left. */
  direction?: "rtl" | "ltr";
};

const AXIS_LOCK_PX = 8;

export function useManualAutoCarousel({
  active = true,
  segmentDurationMs = 120000,
  segments = 2,
  resumeDelayMs = 5000,
  direction = "rtl",
}: UseManualAutoCarouselOptions = {}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const isAutoScrolling = useRef(false);
  const dragRef = useRef<DragState>({
    pending: false,
    active: false,
    startX: 0,
    startY: 0,
    startScrollLeft: 0,
    pointerId: -1,
  });
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const initialized = useRef(false);

  const isInteractiveTarget = (target: EventTarget | null) =>
    target instanceof Element &&
    !!target.closest(
      "button, a, input, textarea, select, label, [role='button'], [data-carousel-no-drag]",
    );

  const clearResumeTimer = useCallback(() => {
    if (resumeTimer.current) {
      clearTimeout(resumeTimer.current);
      resumeTimer.current = null;
    }
  }, []);

  const pause = useCallback(() => {
    clearResumeTimer();
    setIsPaused(true);
  }, [clearResumeTimer]);

  const resumeLater = useCallback(() => {
    clearResumeTimer();
    resumeTimer.current = setTimeout(() => setIsPaused(false), resumeDelayMs);
  }, [clearResumeTimer, resumeDelayMs]);

  const normalizeScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el || el.scrollWidth <= 0) return;

    const segment = el.scrollWidth / segments;
    if (segment <= 0) return;

    if (el.scrollLeft >= segment * (segments - 1)) {
      el.scrollLeft -= segment;
    } else if (el.scrollLeft < segment * 0.05) {
      el.scrollLeft += segment;
    }
  }, [segments]);

  const scrollByDelta = useCallback(
    (delta: number) => {
      const el = scrollRef.current;
      if (!el || delta === 0) return;
      el.scrollLeft += delta;
      normalizeScroll();
    },
    [normalizeScroll],
  );

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !active) return;

    const init = () => {
      const segment = el.scrollWidth / segments;
      if (segment > 0 && !initialized.current) {
        el.scrollLeft = segment;
        initialized.current = true;
      }
    };

    init();
    const ro = new ResizeObserver(init);
    ro.observe(el);
    return () => ro.disconnect();
  }, [active, segments]);

  useEffect(() => {
    if (!active || isPaused) return;

    const el = scrollRef.current;
    if (!el) return;

    let raf = 0;
    let lastTime = performance.now();
    const sign = direction === "rtl" ? 1 : -1;

    const tick = (now: number) => {
      const segment = el.scrollWidth / segments;
      if (segment > 0) {
        const delta = Math.min(now - lastTime, 50);
        lastTime = now;
        isAutoScrolling.current = true;
        el.scrollLeft += sign * (segment / segmentDurationMs) * delta;
        normalizeScroll();
        isAutoScrolling.current = false;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, isPaused, segmentDurationMs, segments, direction, normalizeScroll]);

  useEffect(() => () => clearResumeTimer(), [clearResumeTimer]);

  const onScroll = useCallback(() => {
    if (isAutoScrolling.current) return;
    normalizeScroll();
    pause();
    resumeLater();
  }, [normalizeScroll, pause, resumeLater]);

  const resetDrag = useCallback(() => {
    dragRef.current = {
      pending: false,
      active: false,
      startX: 0,
      startY: 0,
      startScrollLeft: 0,
      pointerId: -1,
    };
  }, []);

  const onPointerDown: PointerEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      if (isInteractiveTarget(e.target)) return;

      const el = scrollRef.current;
      if (!el) return;

      dragRef.current = {
        pending: true,
        active: false,
        startX: e.clientX,
        startY: e.clientY,
        startScrollLeft: el.scrollLeft,
        pointerId: e.pointerId,
      };
    },
    [],
  );

  const onPointerMove: PointerEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      const el = scrollRef.current;
      const drag = dragRef.current;
      if (!el || (!drag.pending && !drag.active)) return;
      if (drag.pointerId !== e.pointerId) return;

      const dx = e.clientX - drag.startX;
      const dy = e.clientY - drag.startY;

      if (drag.pending && !drag.active) {
        if (Math.abs(dx) < AXIS_LOCK_PX && Math.abs(dy) < AXIS_LOCK_PX) return;

        // Vertical intent → let the page scroll up/down
        if (Math.abs(dy) > Math.abs(dx)) {
          resetDrag();
          return;
        }

        drag.active = true;
        drag.pending = false;
        el.setPointerCapture(e.pointerId);
        pause();
      }

      if (!drag.active) return;

      el.scrollLeft = drag.startScrollLeft - dx;
    },
    [pause, resetDrag],
  );

  const endPointer = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const el = scrollRef.current;
      const drag = dragRef.current;
      if (!el || drag.pointerId !== e.pointerId) return;

      if (drag.active) {
        if (el.hasPointerCapture(e.pointerId)) {
          el.releasePointerCapture(e.pointerId);
        }
        normalizeScroll();
        resumeLater();
      }

      resetDrag();
    },
    [normalizeScroll, resumeLater, resetDrag],
  );

  const onWheel: WheelEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      const el = scrollRef.current;
      if (!el) return;

      const horizontal = Math.abs(e.deltaX) >= Math.abs(e.deltaY);
      const delta = horizontal ? e.deltaX : e.deltaY;

      if (Math.abs(delta) < 0.5) return;

      e.preventDefault();
      scrollByDelta(delta);
      pause();
      resumeLater();
    },
    [scrollByDelta, pause, resumeLater],
  );

  return {
    scrollRef,
    isPaused,
    scrollProps: {
      onScroll,
      onPointerDown,
      onPointerMove,
      onPointerUp: endPointer,
      onPointerLeave: endPointer,
      onPointerCancel: endPointer,
      onWheel,
    },
  };
}

/** Super-slow carousel timings (right → left auto drift). */
export const CAROUSEL_SUPER_SLOW = {
  testimonialsMs: 120000,
  galleryMs: 180000,
} as const;
