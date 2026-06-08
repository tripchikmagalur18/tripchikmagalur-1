import type { LeadFormData } from "@/lib/validations/lead";
import { formatLeadEnquiryMessage, LEAD_EMAIL } from "@/lib/lead-enquiry";

const DEFAULT_NOTIFY_PHONE = "+916363131585";

export type NotifyResult = {
  whatsapp: boolean;
  email: boolean;
  channels: string[];
  errors: string[];
};

function normalizeNotifyPhone(raw: string): string {
  const trimmed = raw.trim();
  if (trimmed.startsWith("+")) return trimmed;
  const digits = trimmed.replace(/\D/g, "");
  if (digits.length === 10) return `+91${digits}`;
  return `+${digits}`;
}

function isCallMeBotFailure(body: string): boolean {
  const lower = body.toLowerCase();
  return (
    lower.includes("apikey is invalid") ||
    lower.includes("invalid apikey") ||
    lower.includes("api key is invalid") ||
    lower.includes("please create a new one")
  );
}

/** Sends lead popup data to your WhatsApp via CallMeBot (server-side GET). */
async function tryCallMeBot(message: string): Promise<{ ok: boolean; detail?: string }> {
  const apiKey = process.env.CALLMEBOT_API_KEY?.trim();
  if (!apiKey) return { ok: false, detail: "CALLMEBOT_API_KEY not set" };

  const phone = encodeURIComponent(
    normalizeNotifyPhone(process.env.LEAD_WHATSAPP_PHONE ?? DEFAULT_NOTIFY_PHONE),
  );
  const text = encodeURIComponent(message);
  const url = `https://api.callmebot.com/whatsapp.php?source=nextjs&phone=${phone}&text=${text}&apikey=${encodeURIComponent(apiKey)}`;

  const res = await fetch(url, { method: "GET", cache: "no-store" });
  const body = await res.text();

  if (!res.ok || isCallMeBotFailure(body)) {
    const snippet = body.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 160);
    return { ok: false, detail: snippet || `HTTP ${res.status}` };
  }

  return { ok: true };
}

async function tryWhatsAppCloudApi(message: string): Promise<boolean> {
  const token = process.env.WHATSAPP_ACCESS_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  if (!token || !phoneNumberId) return false;

  const notifyPhone = normalizeNotifyPhone(
    process.env.LEAD_WHATSAPP_PHONE ?? DEFAULT_NOTIFY_PHONE,
  );
  const to = notifyPhone.replace(/\D/g, "");
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

/** Popup enquiry → WhatsApp (CallMeBot) with optional email fallback. */
export async function notifyLeadEnquiry(data: LeadFormData): Promise<NotifyResult> {
  const message = formatLeadEnquiryMessage(data);
  const result: NotifyResult = {
    whatsapp: false,
    email: false,
    channels: [],
    errors: [],
  };

  if (process.env.CALLMEBOT_API_KEY?.trim()) {
    const callMeBot = await tryCallMeBot(message).catch((e) => ({
      ok: false,
      detail: e instanceof Error ? e.message : "CallMeBot request failed",
    }));
    if (callMeBot.ok) {
      result.whatsapp = true;
      result.channels.push("callmebot");
    } else {
      result.errors.push(
        callMeBot.detail
          ? `CallMeBot: ${callMeBot.detail}`
          : "CallMeBot: message not delivered",
      );
    }
  }

  if (!result.whatsapp) {
    const whatsappCloud = await tryWhatsAppCloudApi(message).catch((e) => {
      result.errors.push(`WhatsApp API: ${e instanceof Error ? e.message : "failed"}`);
      return false;
    });
    if (whatsappCloud) {
      result.whatsapp = true;
      result.channels.push("whatsapp_cloud");
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
    process.env.CALLMEBOT_API_KEY?.trim() ||
      (process.env.WHATSAPP_ACCESS_TOKEN && process.env.WHATSAPP_PHONE_NUMBER_ID) ||
      process.env.RESEND_API_KEY,
  );
}
