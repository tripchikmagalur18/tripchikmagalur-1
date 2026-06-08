import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { leadFormSchema } from "@/lib/validations/lead";
import { isLeadNotifyConfigured, notifyLeadEnquiry } from "@/lib/server/notify-lead";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = leadFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", details: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  if (!isLeadNotifyConfigured()) {
    return NextResponse.json(
      {
        error:
          "Enquiry delivery is not configured. Set CALLMEBOT_API_KEY (recommended) or RESEND_API_KEY on the server.",
      },
      { status: 503 },
    );
  }

  const data = parsed.data;

  if (SUPABASE_URL && SUPABASE_KEY) {
    try {
      const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
      await supabase.from("leads").insert({
        name: data.name,
        phone: data.phone,
        email: data.email,
      });
    } catch {
      /* non-blocking */
    }
  }

  const notify = await notifyLeadEnquiry(data);

  if (!notify.whatsapp && !notify.email) {
    const callMeBotHint = process.env.CALLMEBOT_API_KEY
      ? " WhatsApp delivery failed — activate CallMeBot on +91 6363131585 and use the real API key from the bot (not the example 123123 unless that is yours)."
      : "";
    return NextResponse.json(
      {
        error: `Could not deliver enquiry.${callMeBotHint} Please try again or call +91 6363131585.`,
        ...(process.env.NODE_ENV === "development" ? { details: notify.errors } : {}),
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    delivered: {
      whatsapp: notify.whatsapp,
      email: notify.email,
    },
  });
}
