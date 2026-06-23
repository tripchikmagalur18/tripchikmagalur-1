const CHAT_ROOT_ID = "chat-widget-root";
const CHAT_LABELS = ["Chat with Sara", "Chat with Saif"];

function isChatLabel(text: string): boolean {
  return CHAT_LABELS.some((label) => text.includes(label));
}

function getChatRoot(): HTMLElement | null {
  if (typeof document === "undefined") return null;
  return document.getElementById(CHAT_ROOT_ID);
}

function findChatLaunchers(): HTMLElement[] {
  const root = getChatRoot();
  if (!root) return [];

  const launchers: HTMLElement[] = [];
  for (const el of root.querySelectorAll("button, a")) {
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
  el.style.setProperty("position", "absolute", "important");
  el.style.setProperty("width", "1px", "important");
  el.style.setProperty("height", "1px", "important");
  el.style.setProperty("margin", "-1px", "important");
  el.style.setProperty("padding", "0", "important");
  el.style.setProperty("overflow", "hidden", "important");
  el.style.setProperty("clip", "rect(0,0,0,0)", "important");
  el.style.setProperty("white-space", "nowrap", "important");
  el.style.setProperty("border", "0", "important");
  el.style.setProperty("opacity", "0", "important");
  el.style.setProperty("pointer-events", "none", "important");
  el.style.setProperty("visibility", "hidden", "important");
}

function isChatOpen(): boolean {
  return (
    document.body.classList.contains("chat-widget-open") ||
    !!document.querySelector("body dialog[open]") ||
    !!document.querySelector(
      '#chat-widget-root textarea[placeholder*="Write your message" i]',
    )
  );
}

function tryOpenChatDialog(): boolean {
  const dialog = document.querySelector<HTMLDialogElement>(
    "#chat-widget-root dialog, body dialog",
  );
  if (dialog && !dialog.open) {
    try {
      dialog.showModal();
      return true;
    } catch {
      dialog.show();
      return true;
    }
  }
  return false;
}

/** Clicks the third-party Sara chat launcher if present. */
export function openChatWidget(): void {
  if (typeof document === "undefined") return;

  const primary = pickPrimaryLauncher(findChatLaunchers());
  if (primary) {
    primary.dispatchEvent(
      new MouseEvent("click", { bubbles: true, cancelable: true, view: window }),
    );
    primary.click();

    window.setTimeout(() => {
      if (!isChatOpen()) tryOpenChatDialog();
    }, 120);
    return;
  }

  const hidden = document.querySelector<HTMLElement>(
    '#chat-widget-root [data-chat-launcher-hidden="true"]',
  );
  if (hidden) {
    hidden.click();
    return;
  }

  tryOpenChatDialog();
}

/** Hide all third-party launchers — custom SaraChatStickyButton is the visible UI. */
export function syncChatLauncher(): void {
  if (typeof window === "undefined") return;

  const root = getChatRoot();
  if (!root) return;

  const launchers = findChatLaunchers();
  launchers.forEach(hideLauncher);

  root.querySelectorAll("button, a").forEach((el) => {
    const node = el as HTMLElement;
    const text = node.textContent?.trim() ?? "";
    if (!text) hideLauncher(node);
  });
}

/** @deprecated Use syncChatLauncher */
export function hideChatLauncherForMobileDock(): void {
  syncChatLauncher();
}
