"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { forceUnlockBodyScroll, recoverBodyScrollIfStuck } from "@/lib/body-scroll-lock";

/** Prevents stuck scroll/touch state after navigation or iOS back-forward cache. */
export function ScrollLockRecovery() {
  const pathname = usePathname();

  useEffect(() => {
    forceUnlockBodyScroll();
  }, [pathname]);

  useEffect(() => {
    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        forceUnlockBodyScroll();
      } else {
        recoverBodyScrollIfStuck();
      }
    };
    const onVisible = () => {
      if (document.visibilityState === "visible") {
        recoverBodyScrollIfStuck();
      }
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
