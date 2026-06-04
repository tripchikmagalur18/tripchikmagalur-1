const BOOKING_SEQ_KEY = "tripchikmagalur_booking_seq";
const MIN_ID = 1000;
const MAX_ID = 9999;

/** Next 4-digit booking ID (1000–9999), ascending per browser via localStorage. */
export function createNextBookingId(): string {
  if (typeof window === "undefined") {
    return String(MIN_ID + Math.floor(Math.random() * (MAX_ID - MIN_ID + 1)));
  }

  try {
    const stored = localStorage.getItem(BOOKING_SEQ_KEY);
    const current = stored ? parseInt(stored, 10) : MIN_ID - 1;
    const next =
      !Number.isFinite(current) || current < MIN_ID - 1
        ? MIN_ID
        : current >= MAX_ID
          ? MIN_ID
          : current + 1;
    localStorage.setItem(BOOKING_SEQ_KEY, String(next));
    return String(next);
  } catch {
    return String(MIN_ID + Math.floor(Math.random() * (MAX_ID - MIN_ID + 1)));
  }
}
