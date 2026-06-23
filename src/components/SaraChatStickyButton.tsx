"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { openChatWidget } from "@/lib/open-chat-widget";

/** Sticky bottom-center "Chat with Sara" — always visible; opens/closes the Sara chatbot. */
export function SaraChatStickyButton() {
  const [mounted, setMounted] = useState(false);
  const { isOpen: isCartOpen } = useCart();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || isCartOpen) return null;

  return createPortal(
    <div
      className="sara-chat-sticky fixed left-1/2 z-[9998] -translate-x-1/2 bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] pointer-events-none px-2"
      role="region"
      aria-label="Chat with Sara"
    >
      <button
        type="button"
        onClick={() => openChatWidget()}
        className="sara-chat-sticky-btn pointer-events-auto mx-auto flex h-11 min-w-[11.75rem] max-w-[min(240px,calc(100vw-8.75rem))] items-center justify-center gap-2 rounded-full border border-white/25 bg-gradient-to-b from-[#5FD068] to-[#2D9B47] px-4 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(45,155,71,0.45)] transition-transform hover:brightness-105 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5FD068] focus-visible:ring-offset-2 sm:h-12 sm:min-w-[13rem] sm:max-w-[min(260px,calc(100vw-8.75rem))] sm:px-5 sm:text-[15px]"
        aria-label="Chat with Sara"
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#248A38]/90 sm:h-9 sm:w-9">
          <MessageCircle className="h-4 w-4 text-white sm:h-[18px] sm:w-[18px]" strokeWidth={2} />
        </span>
        <span className="whitespace-nowrap text-center leading-none">Chat with Sara</span>
      </button>
    </div>,
    document.body,
  );
}
