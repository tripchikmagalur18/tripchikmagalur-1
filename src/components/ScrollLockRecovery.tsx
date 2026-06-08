"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { forceUnlockBodyScroll } from "@/lib/body-scroll-lock";

/** Prevents stuck scroll/touch state after navigation or iOS back-forward cache. */
export function ScrollLockRecovery() {
  const pathname = usePathname();

  useEffect(() => {
    forceUnlockBodyScroll();
  }, [pathname]);

  useEffect(() => {
    const onPageShow = () => forceUnlockBodyScroll();
    const onVisible = () => {
      if (document.visibilityState === "visible") forceUnlockBodyScroll();
    };

    window.addEventListener("pageshow", onPageShow);
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      window.removeEventListener("pageshow", onPageShow);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  return null;
}
