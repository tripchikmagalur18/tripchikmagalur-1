const CHAT_LABELS = ["Chat with Sara", "Chat with Saif"];

function isChatLabel(text: string): boolean {
  return CHAT_LABELS.some((label) => text.includes(label));
}

function findChatLaunchers(): HTMLElement[] {
  if (typeof document === "undefined") return [];

  const launchers: HTMLElement[] = [];
  for (const el of document.querySelectorAll("button, a")) {
    const text = el.textContent?.trim() ?? "";
    if (isChatLabel(text)) {
      launchers.push(el as HTMLElement);
    }
  }
  return launchers;
}

/** Prefer the full "Chat with Sara" pill over icon-only duplicates. */
function pickPrimaryLauncher(launchers: HTMLElement[]): HTMLElement | null {
  if (launchers.length === 0) return null;

  const pill = launchers.find((el) =>
    (el.textContent?.trim() ?? "").includes("Chat with Sara"),
  );
  if (pill) return pill;

  return launchers.reduce((best, el) =>
    (el.textContent?.length ?? 0) > (best.textContent?.length ?? 0) ? el : best,
  );
}

function hideLauncher(el: HTMLElement): void {
  el.setAttribute("data-chat-launcher-hidden", "true");
  el.style.setProperty("display", "none", "important");
  el.style.setProperty("pointer-events", "none", "important");
  el.style.setProperty("visibility", "hidden", "important");
}

/** Clicks the third-party Sara chat launcher if present. */
export function openChatWidget(): void {
  if (typeof document === "undefined") return;

  const primary = pickPrimaryLauncher(findChatLaunchers());
  if (primary) {
    primary.click();
    return;
  }

  const hidden = document.querySelector<HTMLElement>('[data-chat-launcher-hidden="true"]');
  hidden?.click();
}

/**
 * One visible chat launcher:
 * - Mobile: hidden (HomeContactDock center FAB opens chat)
 * - Desktop: fixed bottom-center "Chat with Sara" pill — does not scroll
 */
export function syncChatLauncher(): void {
  if (typeof window === "undefined") return;

  const launchers = findChatLaunchers();
  const primary = pickPrimaryLauncher(launchers);
  const isMobile = window.innerWidth <= 640;

  launchers.forEach((el) => {
    if (el !== primary) hideLauncher(el);
  });

  // Hide icon-only duplicates inside the widget root (above the pill)
  document.querySelectorAll("#chat-widget-root button, #chat-widget-root a").forEach((el) => {
    const node = el as HTMLElement;
    if (primary && (node === primary || primary.contains(node) || node.contains(primary))) return;
    const text = node.textContent?.trim() ?? "";
    if (!text || !isChatLabel(text)) {
      hideLauncher(node);
    }
  });

  if (!primary) return;

  const chatOpen =
    document.body.classList.contains("chat-widget-open") ||
    !!document.querySelector("body dialog[open]");

  if (isMobile) {
    primary.setAttribute("data-chat-launcher", "true");
    primary.style.setProperty("position", "fixed", "important");
    primary.style.setProperty("opacity", "0", "important");
    primary.style.setProperty("width", "1px", "important");
    primary.style.setProperty("height", "1px", "important");
    primary.style.setProperty("overflow", "hidden", "important");
    primary.style.setProperty("pointer-events", "none", "important");
    primary.style.setProperty("bottom", "0", "important");
    primary.style.setProperty("left", "0", "important");
    return;
  }

  if (chatOpen) {
    primary.style.setProperty("display", "none", "important");
    return;
  }

  // Desktop — sticky bottom-center pill
  if (primary.parentElement && primary.parentElement !== document.body) {
    document.body.appendChild(primary);
  }

  primary.setAttribute("data-chat-launcher-fixed", "true");
  primary.style.setProperty("display", "", "important");
  primary.style.setProperty("visibility", "visible", "important");
  primary.style.setProperty("pointer-events", "auto", "important");
  primary.style.setProperty("position", "fixed", "important");
  primary.style.setProperty("left", "50%", "important");
  primary.style.setProperty("right", "auto", "important");
  primary.style.setProperty("top", "auto", "important");
  primary.style.setProperty("bottom", "calc(1.25rem + env(safe-area-inset-bottom, 0px))", "important");
  primary.style.setProperty("transform", "translateX(-50%)", "important");
  primary.style.setProperty("z-index", "9998", "important");
  primary.style.setProperty("margin", "0", "important");
  primary.style.setProperty("opacity", "1", "important");
  primary.style.setProperty("width", "auto", "important");
  primary.style.setProperty("height", "auto", "important");
  primary.style.setProperty("overflow", "visible", "important");
}

/** @deprecated Use syncChatLauncher */
export function hideChatLauncherForMobileDock(): void {
  syncChatLauncher();
}
