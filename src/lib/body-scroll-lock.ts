let lockCount = 0;
let savedScrollY = 0;

function isBodyLocked() {
  if (typeof document === "undefined") return false;
  return document.body.style.position === "fixed";
}

function clearBodyLockStyles() {
  const { body, documentElement } = document;
  body.style.position = "";
  body.style.top = "";
  body.style.left = "";
  body.style.right = "";
  body.style.width = "";
  body.style.overflow = "";
  body.style.touchAction = "";
  body.style.overscrollBehavior = "";
  documentElement.style.overflow = "";
  body.removeAttribute("data-scroll-locked");
}

/** iOS-safe scroll lock with ref counting for stacked modals/drawers. */
export function lockBodyScroll(): () => void {
  if (typeof document === "undefined") return () => undefined;

  lockCount += 1;
  if (lockCount === 1) {
    savedScrollY = window.scrollY;
    const { body, documentElement } = document;

    body.setAttribute("data-scroll-locked", "true");
    body.style.position = "fixed";
    body.style.top = `-${savedScrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";
    body.style.overscrollBehavior = "none";
    documentElement.style.overflow = "hidden";
  }

  return () => {
    lockCount = Math.max(0, lockCount - 1);
    if (lockCount !== 0 || typeof document === "undefined") return;

    const scrollY = savedScrollY;
    clearBodyLockStyles();
    window.scrollTo(0, scrollY);
  };
}

/** Clears any stuck scroll lock (route change, bfcache restore). */
export function forceUnlockBodyScroll() {
  if (typeof document === "undefined") return;

  const scrollY = isBodyLocked()
    ? Math.abs(parseInt(document.body.style.top, 10) || 0) || savedScrollY
    : savedScrollY;

  lockCount = 0;
  clearBodyLockStyles();

  if (scrollY > 0) {
    window.scrollTo(0, scrollY);
  }
}

/** Clears orphaned lock styles when no modal intentionally holds the lock. */
export function recoverBodyScrollIfStuck() {
  if (typeof document === "undefined") return;
  if (lockCount > 0) return;
  if (!isBodyLocked() && document.documentElement.style.overflow !== "hidden") return;

  const scrollY = Math.abs(parseInt(document.body.style.top, 10) || 0) || savedScrollY;
  clearBodyLockStyles();
  if (scrollY > 0) {
    window.scrollTo(0, scrollY);
  }
}
