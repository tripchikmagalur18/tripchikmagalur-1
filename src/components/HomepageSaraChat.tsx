"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ChatWidgetScripts } from "@/components/chat-widget-scripts";
import { SaraChatStickyButton } from "@/components/SaraChatStickyButton";

function hideChatWidgetDom() {
  ["chat-widget-root", "__cw_portal"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.style.display = "none";
      el.style.pointerEvents = "none";
    }
  });

  document.body.classList.remove("chat-widget-open");

  document.querySelectorAll("body dialog[open]").forEach((dialog) => {
    const d = dialog as HTMLDialogElement;
    try {
      d.close();
    } catch {
      /* ignore */
    }
  });
}

/** Sara chatbot + sticky button — homepage only. */
export function HomepageSaraChat() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) hideChatWidgetDom();
  }, [isHome]);

  if (!isHome) return null;

  return (
    <>
      <ChatWidgetScripts />
      <SaraChatStickyButton />
    </>
  );
}
