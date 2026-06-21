"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { syncChatLauncher } from "@/lib/open-chat-widget";

const CHAT_WIDGET_LABEL = "Chat with Sara";
const LEGACY_CHAT_WIDGET_LABEL = "Chat with Saif";

function renameChatWidgetLabel() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode() as Text | null;
  while (node) {
    if (node.textContent?.includes(LEGACY_CHAT_WIDGET_LABEL)) {
      node.textContent = node.textContent.replace(
        LEGACY_CHAT_WIDGET_LABEL,
        CHAT_WIDGET_LABEL,
      );
    }
    node = walker.nextNode() as Text | null;
  }
}

function setChatWidgetsVisible(visible: boolean) {
  const display = visible ? "" : "none";
  const pointerEvents = visible ? "" : "none";

  ["chat-widget-root", "__cw_portal"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.style.display = display;
      el.style.pointerEvents = pointerEvents;
    }
  });

  document.querySelectorAll("button, a").forEach((el) => {
    if (
      el.textContent?.includes(CHAT_WIDGET_LABEL) ||
      el.textContent?.includes(LEGACY_CHAT_WIDGET_LABEL)
    ) {
      (el as HTMLElement).style.display = display;
      (el as HTMLElement).style.pointerEvents = pointerEvents;
      const parent = el.parentElement;
      if (parent && parent !== document.body && parent.childElementCount <= 2) {
        parent.style.display = display;
        parent.style.pointerEvents = pointerEvents;
      }
    }
  });
}

export function ChatWidgetScripts() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { isOpen: isCartOpen } = useCart();

  useEffect(() => {
    setChatWidgetsVisible(isHome && !isCartOpen);
  }, [isHome, isCartOpen]);

  useEffect(() => {
    if (!isHome) return;

    renameChatWidgetLabel();
    const observer = new MutationObserver(() => {
      renameChatWidgetLabel();
      syncChatLauncher();
    });
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    syncChatLauncher();

    return () => observer.disconnect();
  }, [isHome]);

  if (!isHome) return null;

  return (
    <>
      <Script
        src="https://d1jmlxwcuatskv.cloudfront.net/widget-loader.js"
        data-client-id="tripchikmagaluru"
        strategy="afterInteractive"
      />
      <Script id="chat-widget-portal" strategy="afterInteractive">
        {`(function () {
  var PORTAL_ID = "__cw_portal";
  function isMobile() { return window.innerWidth <= 640; }
  function ensurePortal() {
    var p = document.getElementById(PORTAL_ID);
    if (!p) {
      p = document.createElement("div");
      p.id = PORTAL_ID;
      p.style.cssText = "position:fixed;inset:auto;right:0;bottom:0;width:0;height:0;z-index:40;";
      document.body.appendChild(p);
    }
    return p;
  }
  function applyStyles(el) {
    if (!el) return;
    var s = el.style;
    s.setProperty("position", "fixed", "important");
    s.setProperty("inset", "auto", "important");
    s.setProperty("top", "auto", "important");
    s.setProperty("left", "auto", "important");
    s.setProperty("right", isMobile() ? "8px" : "16px", "important");
    s.setProperty("bottom", isMobile() ? "calc(5.5rem + env(safe-area-inset-bottom, 0px))" : "88px", "important");
    s.setProperty("margin", "0", "important");
    s.setProperty("width", isMobile() ? "calc(100vw - 16px)" : "min(380px, calc(100vw - 32px))", "important");
    s.setProperty("max-width", "calc(100vw - 16px)", "important");
    s.setProperty("height", isMobile() ? "calc(100dvh - 100px)" : "min(560px, calc(100dvh - 120px))", "important");
    s.setProperty("max-height", isMobile() ? "calc(100dvh - 100px)" : "min(560px, calc(100dvh - 120px))", "important");
    s.setProperty("z-index", "40", "important");
    s.setProperty("pointer-events", "auto", "important");
    s.setProperty("border-radius", "16px", "important");
    s.setProperty("box-shadow", "0 8px 24px rgba(0,0,0,0.15)", "important");
    s.setProperty("background", "#ffffff", "important");
    s.setProperty("background-color", "#ffffff", "important");
    s.setProperty("backdrop-filter", "none", "important");
    s.setProperty("-webkit-backdrop-filter", "none", "important");
    el.querySelectorAll("footer, form, header").forEach(function (child) {
      var cs = child.style;
      cs.setProperty("background", "#ffffff", "important");
      cs.setProperty("background-color", "#ffffff", "important");
      cs.setProperty("backdrop-filter", "none", "important");
      cs.setProperty("-webkit-backdrop-filter", "none", "important");
    });
    el.querySelectorAll("*").forEach(function (child) {
      var cs = child.style;
      cs.setProperty("backdrop-filter", "none", "important");
      cs.setProperty("-webkit-backdrop-filter", "none", "important");
    });
  }
  function findChatPanel() {
    var ta = document.querySelector('textarea[placeholder*="Write your message" i]');
    if (!ta) return null;
    var el = ta;
    while (el && el !== document.body) {
      if (el.querySelector('header') && el.querySelector('footer')) return el;
      el = el.parentElement;
    }
    return null;
  }
  function scan() {
    var panel = findChatPanel();
    var chatOpen = !!document.querySelector("body dialog[open]") || !!panel;
    document.body.classList.toggle("chat-widget-open", chatOpen);
    if (panel) {
      var portal = ensurePortal();
      if (panel.parentElement !== portal) portal.appendChild(panel);
      applyStyles(panel);
    }
    document.querySelectorAll("body dialog[open]").forEach(applyStyles);
  }
  var raf = null;
  var lastScan = 0;
  function schedule() {
    if (raf) return;
    raf = requestAnimationFrame(function () {
      raf = null;
      var now = Date.now();
      if (now - lastScan < 120) return;
      lastScan = now;
      scan();
    });
  }
  new MutationObserver(schedule).observe(document.documentElement, {
    childList: true, subtree: true, attributes: true,
    attributeFilter: ["open", "style", "class", "aria-hidden"]
  });
  window.addEventListener("resize", schedule, { passive: true });
  schedule();
})();`}
      </Script>
    </>
  );
}
