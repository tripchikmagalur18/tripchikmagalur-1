import type { LeadFormData } from "@/lib/validations/lead";

export const LEAD_WHATSAPP_DISPLAY = "+91 6363131585";
export const LEAD_EMAIL = "tripchikmagalur18@gmail.com";

export const LEAD_SUCCESS_MESSAGE =
  "Thank you! Your enquiry has been received. Our team will contact you shortly.";

export function formatLeadEnquiryMessage(data: LeadFormData): string {
  return `New Trip ckm Enquiry

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}`;
}

/** Submits enquiry via server API — delivers to WhatsApp/email without opening apps in the browser. */
export async function submitLeadEnquiry(data: LeadFormData): Promise<void> {
  const res = await fetch("/api/enquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  let payload: { error?: string } = {};
  try {
    payload = await res.json();
  } catch {
    /* ignore */
  }

  if (!res.ok) {
    throw new Error(payload.error ?? "Failed to send enquiry. Please try again.");
  }
}
