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
  el.style.setProperty("display", "none", "important");
  el.style.setProperty("pointer-events", "none", "important");
  el.style.setProperty("visibility", "hidden", "important");
}

function applyLauncherStyles(primary: HTMLElement): void {
  primary.setAttribute("data-chat-launcher-fixed", "true");
  primary.style.setProperty("display", "", "important");
  primary.style.setProperty("visibility", "visible", "important");
  primary.style.setProperty("pointer-events", "auto", "important");
  primary.style.setProperty("position", "relative", "important");
  primary.style.setProperty("z-index", "1", "important");
  primary.style.setProperty("margin", "0", "important");
  primary.style.setProperty("opacity", "1", "important");
  primary.style.setProperty("width", "auto", "important");
  primary.style.setProperty("height", "auto", "important");
  primary.style.setProperty("overflow", "visible", "important");
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

/** One visible launcher — bottom-center on homepage, bottom-right elsewhere. */
export function syncChatLauncher(): void {
  if (typeof window === "undefined") return;

  const root = getChatRoot();
  if (!root) return;

  const launchers = findChatLaunchers();
  const primary = pickPrimaryLauncher(launchers);

  launchers.forEach((el) => {
    if (el !== primary) hideLauncher(el);
  });

  if (!primary) return;

  if (isChatOpen()) {
    primary.style.setProperty("display", "none", "important");
    return;
  }

  applyLauncherStyles(primary);
}

/** @deprecated Use syncChatLauncher */
export function hideChatLauncherForMobileDock(): void {
  syncChatLauncher();
}
