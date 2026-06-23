"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { MessageCircle } from "lucide-react";
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

/** Sticky bottom-center "Chat with Sara" — opens the third-party Sara chatbot. */
export function SaraChatStickyButton() {
  const [mounted, setMounted] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const { isOpen: isCartOpen } = useCart();

  useEffect(() => {
    setMounted(true);

    const sync = () => setChatOpen(isChatPanelOpen());
    sync();

    const observer = new MutationObserver(sync);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  if (!mounted || isCartOpen || chatOpen) return null;

  return createPortal(
    <div
      className="sara-chat-sticky fixed left-1/2 z-[9998] -translate-x-1/2 bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] w-[min(220px,calc(100vw-8.75rem))] max-w-[calc(100vw-8.75rem)] sm:w-auto sm:max-w-none pointer-events-none"
      role="region"
      aria-label="Chat with Sara"
    >
      <button
        type="button"
        onClick={() => openChatWidget()}
        className="sara-chat-sticky-btn pointer-events-auto mx-auto flex h-11 w-full min-w-[11.5rem] max-w-full items-center gap-2.5 rounded-full border border-white/25 bg-gradient-to-b from-[#5FD068] to-[#2D9B47] pl-1.5 pr-5 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(45,155,71,0.45)] transition-transform hover:brightness-105 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5FD068] focus-visible:ring-offset-2 sm:h-12 sm:min-w-[12.5rem] sm:text-[15px]"
        aria-label="Chat with Sara"
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#248A38]/90 sm:h-9 sm:w-9">
          <MessageCircle className="h-4 w-4 text-white sm:h-[18px] sm:w-[18px]" strokeWidth={2} />
        </span>
        <span className="truncate whitespace-nowrap">Chat with Sara</span>
      </button>
    </div>,
    document.body,
  );
}
