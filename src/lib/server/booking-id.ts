import { createClient } from "@supabase/supabase-js";
import { BOOKING_ID_START, formatBookingId } from "@/lib/booking-id";
import { reserveFileBookingId } from "@/lib/server/booking-seq-store";

export { BOOKING_ID_START, formatBookingId };

const FALLBACK_URL = "https://wmvttoshdnciwpuhecfo.supabase.co";
const FALLBACK_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtdnR0b3NoZG5jaXdwdWhlY2ZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzNzM0ODgsImV4cCI6MjA4NTk0OTQ4OH0.fcQDYznLFoqh8lZy5T9he3HwlcV6gIm1HnehT1Vv2Ys";

function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || FALLBACK_URL;
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
    FALLBACK_ANON_KEY;
  return createClient(url, key, { auth: { persistSession: false } });
}

async function reserveSupabaseBookingId(): Promise<number | null> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("cart_bookings")
    .insert({})
    .select("id")
    .single();

  if (error || !data?.id) return null;

  const id = Number(data.id);
  if (!Number.isFinite(id) || id < BOOKING_ID_START) return null;
  return id;
}

/** Next booking number: #1349 → #1350 → #1351 … never repeats on this server. */
export async function reserveNextBookingId(): Promise<number> {
  const fromDb = await reserveSupabaseBookingId();
  if (fromDb !== null) return fromDb;

  return reserveFileBookingId();
}
