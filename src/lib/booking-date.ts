/** Local calendar date as YYYY-MM-DD (for date inputs). */
export function todayLocalISO(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function formatBookingDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  return new Date(y, m - 1, d).toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function parseLocalISO(iso: string): Date | null {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return null;
  return new Date(y, m - 1, d);
}

/** Nights between check-in and check-out (checkout day is departure, not counted as a night). */
export function nightsBetween(checkIn: string, checkOut: string): number {
  const start = parseLocalISO(checkIn);
  const end = parseLocalISO(checkOut);
  if (!start || !end) return 1;
  const diffDays = Math.round((end.getTime() - start.getTime()) / 86_400_000);
  return Math.max(1, diffDays);
}

export function addDaysToISO(iso: string, days: number): string {
  const d = parseLocalISO(iso);
  if (!d) return iso;
  d.setDate(d.getDate() + days);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function stayNights(checkIn?: string, checkOut?: string): number {
  if (checkIn && checkOut) return nightsBetween(checkIn, checkOut);
  return 1;
}

export function stayLineTotal(item: {
  price: number;
  quantity?: number;
  checkInDate?: string;
  checkOutDate?: string;
}): number {
  const guests = item.quantity ?? 1;
  const nights = stayNights(item.checkInDate, item.checkOutDate);
  return item.price * guests * nights;
}
