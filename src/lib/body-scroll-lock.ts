let lockCount = 0;
let savedScrollY = 0;

/** iOS-safe scroll lock with ref counting for stacked modals/drawers. */
export function lockBodyScroll(): () => void {
  if (typeof document === "undefined") return () => undefined;

  lockCount += 1;
  if (lockCount === 1) {
    savedScrollY = window.scrollY;
    const { body, documentElement } = document;

    body.style.position = "fixed";
    body.style.top = `-${savedScrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";
    body.style.touchAction = "none";
    documentElement.style.overflow = "hidden";
  }

  return () => {
    lockCount = Math.max(0, lockCount - 1);
    if (lockCount !== 0 || typeof document === "undefined") return;

    const { body, documentElement } = document;
    const scrollY = savedScrollY;

    body.style.position = "";
    body.style.top = "";
    body.style.left = "";
    body.style.right = "";
    body.style.width = "";
    body.style.overflow = "";
    body.style.touchAction = "";
    documentElement.style.overflow = "";

    window.scrollTo(0, scrollY);
  };
}

/** Clears any stuck scroll lock (route change, bfcache restore, tab focus). */
export function forceUnlockBodyScroll() {
  if (typeof document === "undefined") return;

  lockCount = 0;
  const { body, documentElement } = document;
  const top = body.style.top;
  const scrollY = top ? Math.abs(parseInt(top, 10) || 0) : savedScrollY;

  body.style.position = "";
  body.style.top = "";
  body.style.left = "";
  body.style.right = "";
  body.style.width = "";
  body.style.overflow = "";
  body.style.touchAction = "";
  documentElement.style.overflow = "";

  if (scrollY > 0) {
    window.scrollTo(0, scrollY);
  }
}
