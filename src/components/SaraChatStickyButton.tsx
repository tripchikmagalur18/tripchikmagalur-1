"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { BadgeCheck, MessageCircle, Users } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { openChatWidget } from "@/lib/open-chat-widget";

function isChatPanelOpen(): boolean {
  if (typeof document === "undefined") return false;
  return (
    document.body.classList.contains("chat-widget-open") ||
    !!document.querySelector("body dialog[open]") ||
    !!document.querySelector(
      '#chat-widget-root textarea[placeholder*="Write your message" i]',
    )
  );
}

/**
 * Sticky bottom-center "Chat with Sara" CTA — matches reference pill + glass bar.
 * Triggers the hidden third-party widget launcher on click.
 */
export function SaraChatStickyButton() {
  const [mounted, setMounted] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const { isOpen: isCartOpen } = useCart();

  useEffect(() => {
    setMounted(true);
    document.body.classList.add("has-sara-sticky");

    const sync = () => setChatOpen(isChatPanelOpen());
    sync();

    const observer = new MutationObserver(sync);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
      childList: true,
      subtree: true,
    });
    window.addEventListener("resize", sync, { passive: true });

    return () => {
      document.body.classList.remove("has-sara-sticky");
      observer.disconnect();
      window.removeEventListener("resize", sync);
    };
  }, []);

  if (!mounted || isCartOpen || chatOpen) return null;

  return createPortal(
    <div
      className="sara-chat-sticky fixed left-1/2 z-[9998] -translate-x-1/2 pointer-events-none bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] w-[min(340px,calc(100vw-8.75rem))] max-w-[calc(100vw-8.75rem)] px-0.5 sm:w-[min(380px,calc(100vw-3rem))] sm:max-w-[380px]"
      role="region"
      aria-label="Chat with Sara"
    >
      <div className="relative flex w-full items-center justify-center min-h-[52px] sm:min-h-[56px]">
        {/* Glass info bar behind the green pill */}
        <div
          className="pointer-events-none flex h-10 w-full items-center justify-between rounded-full border border-white/15 bg-black/50 px-2.5 backdrop-blur-md sm:h-11 sm:px-4"
          aria-hidden
        >
          <div className="flex min-w-0 max-w-[28%] items-center gap-1">
            <Users
              className="h-3.5 w-3.5 shrink-0 text-orange-400 sm:h-4 sm:w-4"
              strokeWidth={2.25}
              aria-hidden
            />
            <span className="truncate text-[10px] font-semibold text-white sm:text-xs">500+</span>
          </div>

          <div className="w-[min(9.75rem,46%)] shrink-0" aria-hidden />

          <div className="flex min-w-0 max-w-[32%] items-center justify-end gap-0.5 sm:gap-1">
            <BadgeCheck
              className="hidden h-3.5 w-3.5 shrink-0 text-emerald-400 sm:block sm:h-4 sm:w-4"
              strokeWidth={2.25}
              aria-hidden
            />
            <span className="truncate text-[9px] font-medium text-white/90 sm:text-xs">
              Govt. Verified
            </span>
          </div>
        </div>

        {/* Green pill — overlaps bar, stays inside container */}
        <button
          type="button"
          onClick={() => openChatWidget()}
          className="sara-chat-sticky-btn pointer-events-auto absolute left-1/2 top-1/2 flex h-11 max-w-[calc(100%-0.5rem)] -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border border-white/25 bg-gradient-to-b from-[#5FD068] to-[#2D9B47] pl-1.5 pr-3.5 text-[13px] font-semibold text-white shadow-[0_4px_20px_rgba(45,155,71,0.45)] transition-transform hover:brightness-105 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5FD068] focus-visible:ring-offset-2 sm:h-12 sm:gap-2.5 sm:pr-5 sm:text-sm"
          aria-label="Chat with Sara"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#248A38]/90 sm:h-9 sm:w-9">
            <MessageCircle className="h-4 w-4 text-white sm:h-[18px] sm:w-[18px]" strokeWidth={2} />
          </span>
          <span className="truncate whitespace-nowrap">Chat with Sara</span>
        </button>
      </div>
    </div>,
    document.body,
  );
}
