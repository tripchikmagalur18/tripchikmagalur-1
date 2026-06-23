"use client";

import { useCallback, useEffect, useRef, useState, type PointerEventHandler } from "react";

type UseManualAutoCarouselOptions = {
  /** Enable auto-scroll (e.g. when section is visible). */
  active?: boolean;
  /** Ms to scroll one duplicated segment (matches original CSS animation duration). */
  segmentDurationMs?: number;
  /** How many times content is duplicated for seamless looping. */
  segments?: number;
  /** Ms before auto-scroll resumes after manual interaction. */
  resumeDelayMs?: number;
};

export function useManualAutoCarousel({
  active = true,
  segmentDurationMs = 35000,
  segments = 2,
  resumeDelayMs = 2500,
}: UseManualAutoCarouselOptions = {}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const isAutoScrolling = useRef(false);
  const dragRef = useRef({ active: false, startX: 0, startScrollLeft: 0 });
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const initialized = useRef(false);

  const isInteractiveTarget = (target: EventTarget | null) =>
    target instanceof Element &&
    !!target.closest("button, a, input, textarea, select, label, [role='button']");

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

    const tick = (now: number) => {
      const segment = el.scrollWidth / segments;
      if (segment > 0) {
        const delta = Math.min(now - lastTime, 50);
        lastTime = now;
        isAutoScrolling.current = true;
        el.scrollLeft += (segment / segmentDurationMs) * delta;
        normalizeScroll();
        isAutoScrolling.current = false;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, isPaused, segmentDurationMs, segments, normalizeScroll]);

  useEffect(() => () => clearResumeTimer(), [clearResumeTimer]);

  const onScroll = useCallback(() => {
    if (isAutoScrolling.current) return;
    normalizeScroll();
    pause();
    resumeLater();
  }, [normalizeScroll, pause, resumeLater]);

  const onPointerDown: PointerEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      if (isInteractiveTarget(e.target)) return;

      const el = scrollRef.current;
      if (!el) return;

      dragRef.current = {
        active: true,
        startX: e.clientX,
        startScrollLeft: el.scrollLeft,
      };
      el.setPointerCapture(e.pointerId);
      pause();
    },
    [pause],
  );

  const onPointerMove: PointerEventHandler<HTMLDivElement> = useCallback((e) => {
    if (isInteractiveTarget(e.target) && !dragRef.current.active) return;

    const el = scrollRef.current;
    if (!el || !dragRef.current.active) return;

    const dx = e.clientX - dragRef.current.startX;
    el.scrollLeft = dragRef.current.startScrollLeft - dx;
  }, []);

  const endPointer = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const el = scrollRef.current;
      if (!el) return;

      if (dragRef.current.active) {
        dragRef.current.active = false;
        if (el.hasPointerCapture(e.pointerId)) {
          el.releasePointerCapture(e.pointerId);
        }
        normalizeScroll();
        resumeLater();
      }
    },
    [normalizeScroll, resumeLater],
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
    },
  };
}
