import type { CartItem } from "@/context/CartContext";
import { isStayCartItem } from "@/context/CartContext";
import { formatBookingDate, stayLineTotal, stayNights } from "@/lib/booking-date";

export function buildCartWhatsAppMessage(
  items: CartItem[],
  total: number,
  bookingId: string,
): string {
  const lines = items
    .map((i, idx) => {
      const qty = i.quantity ?? 1;
      const line = i.price * qty;
      if (isStayCartItem(i)) {
        const nights = stayNights(i.checkInDate, i.checkOutDate);
        const stayTotal = stayLineTotal(i);
        const dateLines = [
          i.checkInDate ? `\n   • Check-in: ${formatBookingDate(i.checkInDate)}` : "",
          i.checkOutDate ? `\n   • Check-out: ${formatBookingDate(i.checkOutDate)}` : "",
          i.checkInDate && i.checkOutDate
            ? `\n   • ${nights} ${nights === 1 ? "night" : "nights"}`
            : "",
        ].join("");
        return `${idx + 1}. ${i.name}${dateLines}\n   • Adults: ${qty}\n   • Rate: ₹${i.price.toLocaleString("en-IN")}/adult/night\n   • Subtotal: ₹${stayTotal.toLocaleString("en-IN")}`;
      }
      if (i.perPerson) {
        return `${idx + 1}. ${i.name}\n   • Price: ₹${i.price.toLocaleString("en-IN")}/person\n   • Members: ${qty}\n   • Subtotal: ₹${line.toLocaleString("en-IN")}`;
      }
      return `${idx + 1}. ${i.name}\n   • Price: ₹${i.price.toLocaleString()}/group\n   • Subtotal: ₹${line.toLocaleString()}`;
    })
    .join("\n\n");

  return `Hi Trip Chikmagalur! I'd like to book the following:

Booking ID: ${bookingId}

${lines}

----------------------
Booking ID: ${bookingId}
Total Bill: ₹${total.toLocaleString("en-IN")}

Please confirm availability. Thank you!`;
}
