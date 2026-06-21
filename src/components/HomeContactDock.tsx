"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { MessageCircle, Phone, Ticket } from "lucide-react";
import { MULLAYANAGIRI_PASS_BOOKING_URL } from "@/data/mullayanagiri-entry-pass";
import { hideChatLauncherForMobileDock, openChatWidget } from "@/lib/open-chat-widget";
import { PHONE_LINK, WHATSAPP_LINK } from "@/lib/whatsapp";

const PASS_SESSION_KEY = "trip_ckm_home_pass_icon_v3";
const PASS_AUTO_CLOSE_MS = 7000;

const fabClass =
  "flex flex-col items-center justify-center gap-1.5 min-w-0 flex-1 py-2 active:scale-95 transition-transform";

const fabCircleClass =
  "w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300";

/**
 * Homepage contact UI:
 * - Mobile: bottom dock (Call · Sara · WhatsApp) + optional pass popup
 * - Desktop: pass popup + WhatsApp FAB (call stays global left)
 */
export default function HomeContactDock() {
  const [mounted, setMounted] = useState(false);
  const [showPassIcon, setShowPassIcon] = useState(false);
  const [passClosing, setPassClosing] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.classList.add("home-page");

    if (sessionStorage.getItem(PASS_SESSION_KEY) !== "1") {
      const t = window.setTimeout(() => setShowPassIcon(true), 300);
      return () => {
        window.clearTimeout(t);
        document.body.classList.remove("home-page");
      };
    }

    return () => document.body.classList.remove("home-page");
  }, []);

  useEffect(() => {
    hideChatLauncherForMobileDock();
    const observer = new MutationObserver(hideChatLauncherForMobileDock);
    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("resize", hideChatLauncherForMobileDock, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", hideChatLauncherForMobileDock);
    };
  }, []);

  useEffect(() => {
    if (!showPassIcon) return;

    sessionStorage.setItem(PASS_SESSION_KEY, "1");

    const closeTimer = window.setTimeout(() => {
      setPassClosing(true);
      window.setTimeout(() => setShowPassIcon(false), 280);
    }, PASS_AUTO_CLOSE_MS);

    return () => window.clearTimeout(closeTimer);
  }, [showPassIcon]);

  if (!mounted) return null;

  return createPortal(
    <>
      {/* Mobile bottom dock — Call · Sara · WhatsApp */}
      <nav
        aria-label="Contact options"
        className="home-contact-dock md:hidden fixed inset-x-0 bottom-0 z-[9998] pointer-events-none border-t border-gray-200 pb-[env(safe-area-inset-bottom,0px)]"
      >
        <div className="flex items-stretch justify-around gap-2 px-3 pt-2 pb-2 pointer-events-auto max-w-lg mx-auto">
          <a href={PHONE_LINK} className={fabClass} aria-label="Call us">
            <span className={fabCircleClass}>
              <Phone className="w-6 h-6 text-white" strokeWidth={2.25} />
            </span>
            <span className="text-[10px] font-semibold text-foreground">Call</span>
          </a>

          <button
            type="button"
            onClick={openChatWidget}
            className={fabClass}
            aria-label="Chat with Sara"
          >
            <span className={fabCircleClass}>
              <MessageCircle className="w-6 h-6 text-white" strokeWidth={2.25} />
            </span>
            <span className="text-[10px] font-semibold text-foreground">Sara</span>
          </button>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={fabClass}
            aria-label="WhatsApp us"
          >
            <span className={fabCircleClass}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-6 h-6"
                aria-hidden
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </span>
            <span className="text-[10px] font-semibold text-foreground">WhatsApp</span>
          </a>
        </div>
      </nav>

      {/* Pass popup + desktop WhatsApp */}
      <div
        className="fixed right-3 sm:right-6 z-[9999] flex flex-col items-end gap-2.5 pointer-events-none bottom-[calc(5.75rem+env(safe-area-inset-bottom,0px))] md:bottom-[calc(1.5rem+env(safe-area-inset-bottom,0px))]"
        aria-hidden={false}
      >
        {showPassIcon && (
          <div
            className={`flex flex-col items-end gap-1.5 pointer-events-auto transition-all duration-300 ${
              passClosing ? "opacity-0 translate-y-2 scale-95" : "opacity-100 translate-y-0 scale-100"
            }`}
          >
            <span className="px-2.5 py-1 rounded-full bg-white text-gray-800 text-[10px] sm:text-xs font-semibold whitespace-nowrap max-w-[calc(100vw-5rem)] truncate shadow-lg">
              Mullayanagiri online pass
            </span>
            <a
              href={MULLAYANAGIRI_PASS_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[3.5rem] min-h-[3.5rem] w-14 h-14 bg-sunset rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform"
              aria-label="Book Mullayanagiri online pass"
            >
              <Ticket className="w-6 h-6 text-white" strokeWidth={2.25} />
            </a>
          </div>
        )}

        {/* WhatsApp — desktop only (mobile uses dock) */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex pointer-events-auto min-w-[3.5rem] min-h-[3.5rem] w-14 h-14 bg-[#25D366] rounded-full items-center justify-center shadow-lg hover:scale-105 transition-transform"
          aria-label="Chat on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-7 h-7" aria-hidden>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>
    </>,
    document.body,
  );
}
