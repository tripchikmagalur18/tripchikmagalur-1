const CHAT_LABELS = ["Chat with Sara", "Chat with Saif"];

/** Clicks the third-party Sara chat launcher if present. */
export function openChatWidget(): void {
  if (typeof document === "undefined") return;

  for (const el of document.querySelectorAll("button, a")) {
    const text = el.textContent ?? "";
    if (CHAT_LABELS.some((label) => text.includes(label))) {
      (el as HTMLElement).click();
      return;
    }
  }
}

/** Hides the native chat pill on mobile home — dock button opens it instead. */
export function hideChatLauncherForMobileDock(): void {
  if (typeof window === "undefined" || window.innerWidth > 640) return;

  for (const el of document.querySelectorAll("button, a")) {
    const text = el.textContent ?? "";
    if (!CHAT_LABELS.some((label) => text.includes(label))) continue;

    const node = el as HTMLElement;
    node.setAttribute("data-chat-launcher", "true");
    node.style.setProperty("position", "fixed", "important");
    node.style.setProperty("opacity", "0", "important");
    node.style.setProperty("width", "1px", "important");
    node.style.setProperty("height", "1px", "important");
    node.style.setProperty("overflow", "hidden", "important");
    node.style.setProperty("pointer-events", "none", "important");
    node.style.setProperty("bottom", "0", "important");
    node.style.setProperty("right", "0", "important");
  }
}
