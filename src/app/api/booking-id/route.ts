import { NextResponse } from "next/server";
import {
  BOOKING_ID_START,
  formatBookingId,
  reserveNextBookingId,
} from "@/lib/server/booking-id";

export async function POST() {
  try {
    const id = await reserveNextBookingId();
    return NextResponse.json({
      id,
      bookingId: formatBookingId(id),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Booking ID unavailable";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}

export async function GET() {
  return NextResponse.json({
    start: BOOKING_ID_START,
    format: "#1349",
  });
}
