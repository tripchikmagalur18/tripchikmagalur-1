export const BOOKING_ID_START = 1349;

const LOCAL_SEQ_KEY = "tripchikmagalur_booking_seq";

export function formatBookingId(id: number): string {
  return `#${id}`;
}

function readLocalLastId(): number {
  try {
    const stored = localStorage.getItem(LOCAL_SEQ_KEY);
    const parsed = stored ? parseInt(stored, 10) : BOOKING_ID_START - 1;
    if (Number.isFinite(parsed) && parsed >= BOOKING_ID_START - 1) {
      return parsed;
    }
  } catch {
    /* ignore */
  }
  return BOOKING_ID_START - 1;
}

function writeLocalLastId(id: number) {
  try {
    localStorage.setItem(LOCAL_SEQ_KEY, String(id));
  } catch {
    /* ignore */
  }
}

/** Last-resort per-browser counter — only used if the server API is unreachable. */
function reserveLocalBookingId(): number {
  const next = readLocalLastId() + 1;
  writeLocalLastId(next);
  return next;
}

/**
 * Reserves the next booking ID on checkout (#1349, #1350, #1351, …).
 * Server assigns the global sequence; client storage only tracks the last seen ID.
 */
export async function reserveBookingId(): Promise<string> {
  try {
    const res = await fetch("/api/booking-id", {
      method: "POST",
      cache: "no-store",
    });

    if (res.ok) {
      const payload = (await res.json()) as { id: number; bookingId?: string };
      writeLocalLastId(payload.id);
      return payload.bookingId ?? formatBookingId(payload.id);
    }
  } catch {
    /* server unreachable */
  }

  return formatBookingId(reserveLocalBookingId());
}
