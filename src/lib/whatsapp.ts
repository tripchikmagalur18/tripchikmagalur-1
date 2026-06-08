/** Trip Chikmagalur WhatsApp: +91 6363131585 */
export const WHATSAPP_NUMBER = "916363131585";
export const PHONE_DISPLAY = "+91 6363131585";
export const PHONE_LINK = "tel:+916363131585";

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export function whatsappUrl(message?: string): string {
  if (!message) return WHATSAPP_LINK;
  return `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`;
}
