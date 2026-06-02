import type { LeadFormData } from "@/lib/validations/lead";
import { formatLeadEnquiryMessage, LEAD_EMAIL } from "@/lib/lead-enquiry";

const NOTIFY_PHONE = process.env.LEAD_WHATSAPP_PHONE ?? "+916363131585";

export type NotifyResult = {
  whatsapp: boolean;
  email: boolean;
  channels: string[];
  errors: string[];
};

async function tryCallMeBot(message: string): Promise<boolean> {
  const apiKey = process.env.CALLMEBOT_API_KEY;
  if (!apiKey) return false;

  const phone = encodeURIComponent(NOTIFY_PHONE);
  const text = encodeURIComponent(message);
  const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${text}&apikey=${encodeURIComponent(apiKey)}`;

  const res = await fetch(url, { method: "GET", cache: "no-store" });
  const body = await res.text();
  return res.ok && !body.toLowerCase().includes("error");
}

async function tryWhatsAppCloudApi(message: string): Promise<boolean> {
  const token = process.env.WHATSAPP_ACCESS_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  if (!token || !phoneNumberId) return false;

  const to = NOTIFY_PHONE.replace(/\D/g, "");
  const res = await fetch(`https://graph.facebook.com/v21.0/${phoneNumberId}/messages`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to,
      type: "text",
      text: { body: message },
    }),
    cache: "no-store",
  });

  return res.ok;
}

async function tryResendEmail(message: string, data: LeadFormData): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const from =
    process.env.RESEND_FROM_EMAIL ?? "Trip Chikmagalur <onboarding@resend.dev>";

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [LEAD_EMAIL],
      reply_to: data.email,
      subject: "New Trip Chikmagalur Enquiry",
      text: message,
    }),
    cache: "no-store",
  });

  return res.ok;
}

/** Sends enquiry to WhatsApp (server-side) and/or email — no browser WhatsApp UI. */
export async function notifyLeadEnquiry(data: LeadFormData): Promise<NotifyResult> {
  const message = formatLeadEnquiryMessage(data);
  const result: NotifyResult = {
    whatsapp: false,
    email: false,
    channels: [],
    errors: [],
  };

  const whatsappCloud = await tryWhatsAppCloudApi(message).catch((e) => {
    result.errors.push(`WhatsApp API: ${e instanceof Error ? e.message : "failed"}`);
    return false;
  });
  if (whatsappCloud) {
    result.whatsapp = true;
    result.channels.push("whatsapp_cloud");
  }

  if (!result.whatsapp) {
    const callMeBot = await tryCallMeBot(message).catch((e) => {
      result.errors.push(`CallMeBot: ${e instanceof Error ? e.message : "failed"}`);
      return false;
    });
    if (callMeBot) {
      result.whatsapp = true;
      result.channels.push("callmebot");
    }
  }

  const email = await tryResendEmail(message, data).catch((e) => {
    result.errors.push(`Email: ${e instanceof Error ? e.message : "failed"}`);
    return false;
  });
  if (email) {
    result.email = true;
    result.channels.push("resend");
  }

  return result;
}

export function isLeadNotifyConfigured(): boolean {
  return Boolean(
    process.env.CALLMEBOT_API_KEY ||
      (process.env.WHATSAPP_ACCESS_TOKEN && process.env.WHATSAPP_PHONE_NUMBER_ID) ||
      process.env.RESEND_API_KEY,
  );
}
