import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { escapeFields, isRateLimited, looksLikeBot, validateFields } from "@/lib/formGuard";
import { BUSINESS_PHONE_DISPLAY, BUSINESS_PHONE_TEL, CAN_EMAIL_CUSTOMERS, FROM_ADDRESS } from "@/lib/email";

const resend = new Resend(process.env.RESEND_API_KEY);

const LEAD_RECIPIENT = "ansik@skyhouse.ca";

/* ── Type ──────────────────────────────────────────────────────────── */
interface LeadPayload {
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  roofType: string;
  jobType: string;
  urgency: string;
  message?: string;
}

/* ── Helpers ───────────────────────────────────────────────────────── */
function formatJobType(value: string): string {
  const map: Record<string, string> = {
    repair: "Roof Repair",
    replacement: "Roof Replacement",
    inspection: "Roof Inspection",
    emergency: "Emergency",
    other: "Other",
  };
  return map[value] ?? value;
}

function formatUrgency(value: string): string {
  const map: Record<string, string> = {
    emergency: "Emergency — ASAP",
    week: "Within a Week",
    flexible: "Flexible",
  };
  return map[value] ?? value;
}

function formatRoofType(value: string): string {
  const map: Record<string, string> = {
    shingle: "Shingle Roof",
    metal: "Metal Roof",
    flat: "Flat Roof",
    unknown: "Not Sure",
  };
  return map[value] ?? value;
}

function formatCity(value: string): string {
  return value
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function buildEmailHtml(lead: LeadPayload, timestamp: string): string {
  const urgencyColor =
    lead.urgency === "emergency" ? "#DC2626" : lead.urgency === "week" ? "#D97706" : "#16A34A";

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Roofing Lead</title>
</head>
<body style="margin:0;padding:0;background:#F8FAFC;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F8FAFC;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:#0F172A;border-radius:12px 12px 0 0;padding:28px 32px;">
              <p style="margin:0;font-size:22px;font-weight:800;color:#fff;letter-spacing:-0.3px;">
                Local<span style="color:#F97316;">Roofer</span><span style="color:rgba(255,255,255,0.4)">.ca</span>
              </p>
              <p style="margin:6px 0 0;font-size:13px;color:rgba(255,255,255,0.5);">New Lead Notification</p>
            </td>
          </tr>

          <!-- Urgency banner -->
          <tr>
            <td style="background:${urgencyColor};padding:10px 32px;">
              <p style="margin:0;font-size:13px;font-weight:700;color:#fff;text-transform:uppercase;letter-spacing:0.5px;">
                ⏱ Urgency: ${formatUrgency(lead.urgency)}
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#fff;border-radius:0 0 12px 12px;padding:32px;">

              <h2 style="margin:0 0 24px;font-size:20px;font-weight:700;color:#0F172A;">
                New Quote Request
              </h2>

              <!-- Contact details -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #F1F5F9;width:38%;">
                    <span style="font-size:12px;font-weight:600;color:#94A3B8;text-transform:uppercase;letter-spacing:0.4px;">Name</span>
                  </td>
                  <td style="padding:10px 0;border-bottom:1px solid #F1F5F9;">
                    <span style="font-size:15px;color:#0F172A;font-weight:500;">${lead.name}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #F1F5F9;">
                    <span style="font-size:12px;font-weight:600;color:#94A3B8;text-transform:uppercase;letter-spacing:0.4px;">Phone</span>
                  </td>
                  <td style="padding:10px 0;border-bottom:1px solid #F1F5F9;">
                    <a href="tel:${lead.phone}" style="font-size:15px;color:#F97316;font-weight:600;text-decoration:none;">${lead.phone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #F1F5F9;">
                    <span style="font-size:12px;font-weight:600;color:#94A3B8;text-transform:uppercase;letter-spacing:0.4px;">Email</span>
                  </td>
                  <td style="padding:10px 0;border-bottom:1px solid #F1F5F9;">
                    <a href="mailto:${lead.email}" style="font-size:15px;color:#F97316;font-weight:500;text-decoration:none;">${lead.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #F1F5F9;">
                    <span style="font-size:12px;font-weight:600;color:#94A3B8;text-transform:uppercase;letter-spacing:0.4px;">Address</span>
                  </td>
                  <td style="padding:10px 0;border-bottom:1px solid #F1F5F9;">
                    <span style="font-size:15px;color:#0F172A;font-weight:500;">${lead.address}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #F1F5F9;">
                    <span style="font-size:12px;font-weight:600;color:#94A3B8;text-transform:uppercase;letter-spacing:0.4px;">City</span>
                  </td>
                  <td style="padding:10px 0;border-bottom:1px solid #F1F5F9;">
                    <span style="font-size:15px;color:#0F172A;">${formatCity(lead.city)}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #F1F5F9;">
                    <span style="font-size:12px;font-weight:600;color:#94A3B8;text-transform:uppercase;letter-spacing:0.4px;">Roof Type</span>
                  </td>
                  <td style="padding:10px 0;border-bottom:1px solid #F1F5F9;">
                    <span style="font-size:15px;color:#0F172A;font-weight:500;">${formatRoofType(lead.roofType)}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #F1F5F9;">
                    <span style="font-size:12px;font-weight:600;color:#94A3B8;text-transform:uppercase;letter-spacing:0.4px;">Job Type</span>
                  </td>
                  <td style="padding:10px 0;border-bottom:1px solid #F1F5F9;">
                    <span style="font-size:15px;color:#0F172A;font-weight:500;">${formatJobType(lead.jobType)}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;">
                    <span style="font-size:12px;font-weight:600;color:#94A3B8;text-transform:uppercase;letter-spacing:0.4px;">Submitted</span>
                  </td>
                  <td style="padding:10px 0;">
                    <span style="font-size:14px;color:#64748B;">${timestamp}</span>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              ${
                lead.message
                  ? `
              <div style="background:#F8FAFC;border-left:3px solid #F97316;border-radius:4px;padding:14px 18px;margin-bottom:28px;">
                <p style="margin:0 0 6px;font-size:12px;font-weight:600;color:#94A3B8;text-transform:uppercase;letter-spacing:0.4px;">Message</p>
                <p style="margin:0;font-size:14px;color:#334155;line-height:1.6;">${lead.message.replace(/\n/g, "<br>")}</p>
              </div>`
                  : ""
              }

              <!-- CTA -->
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="border-radius:8px;background:#F97316;">
                    <a href="mailto:${lead.email}" style="display:inline-block;padding:12px 24px;font-size:14px;font-weight:700;color:#fff;text-decoration:none;">
                      Reply to ${lead.name.split(" ")[0]} →
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 0 0;text-align:center;">
              <p style="margin:0;font-size:12px;color:#94A3B8;">
                This notification was sent by LocalRoofer.ca · Toronto &amp; GTA
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/** Confirmation sent to the homeowner after they submit the quote form. */
function buildConfirmationHtml(lead: LeadPayload): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>We received your roofing request</title>
</head>
<body style="margin:0;padding:0;background:#F8FAFC;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F8FAFC;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:#0F172A;border-radius:12px 12px 0 0;padding:28px 32px;">
              <p style="margin:0;font-size:22px;font-weight:800;color:#fff;letter-spacing:-0.3px;">
                Local<span style="color:#F97316;">Roofer</span><span style="color:rgba(255,255,255,0.4)">.ca</span>
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#fff;border-radius:0 0 12px 12px;padding:32px;">
              <h2 style="margin:0 0 16px;font-size:20px;font-weight:700;color:#0F172A;">
                Thanks, ${lead.name.split(" ")[0]} — we got your request
              </h2>
              <p style="margin:0 0 24px;font-size:15px;color:#334155;line-height:1.6;">
                We&rsquo;ve received your roofing quote request and will follow up shortly to
                connect you with a local contractor. There&rsquo;s no cost and no obligation.
              </p>

              <!-- Summary -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#F8FAFC;border-radius:8px;margin-bottom:24px;">
                <tr><td style="padding:16px 20px;font-size:14px;color:#334155;line-height:1.8;">
                  <strong style="color:#0F172A;">Service:</strong> ${formatJobType(lead.jobType)}<br>
                  <strong style="color:#0F172A;">Roof type:</strong> ${formatRoofType(lead.roofType)}<br>
                  <strong style="color:#0F172A;">Location:</strong> ${lead.address}, ${formatCity(lead.city)}<br>
                  <strong style="color:#0F172A;">Timing:</strong> ${formatUrgency(lead.urgency)}
                </td></tr>
              </table>

              <p style="margin:0;font-size:15px;color:#334155;line-height:1.6;">
                Roof leaking right now? Call us at
                <a href="tel:${BUSINESS_PHONE_TEL}" style="color:#F97316;font-weight:600;text-decoration:none;">${BUSINESS_PHONE_DISPLAY}</a>.
                To update your request, just reply to this email.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 0 0;text-align:center;">
              <p style="margin:0;font-size:12px;color:#94A3B8;">
                You&rsquo;re receiving this because you requested a quote on LocalRoofer.ca.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/* ── Route handler ─────────────────────────────────────────────────── */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, address, city, roofType, jobType, urgency, message } =
      body as LeadPayload;

    // Bots get a fake success so they don't retry with a smarter payload
    if (looksLikeBot(body)) {
      return NextResponse.json({ success: true });
    }

    if (isRateLimited(req, "lead")) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a few minutes." },
        { status: 429 }
      );
    }

    // Basic server-side validation
    if (!name || !phone || !email || !address || !city || !roofType || !jobType || !urgency) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const lead: LeadPayload = { name, phone, email, address, city, roofType, jobType, urgency, message };
    const invalid = validateFields({ ...lead });
    if (invalid) {
      return NextResponse.json({ error: invalid }, { status: 400 });
    }

    const timestamp = new Date().toLocaleString("en-CA", {
      timeZone: "America/Toronto",
      dateStyle: "full",
      timeStyle: "short",
    });

    const subject = `[${formatUrgency(urgency)}] New ${formatJobType(jobType)} Lead — ${formatCity(city)}`;

    const safeLead = escapeFields(lead);

    // Resend reports failures in the return value rather than throwing
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: [LEAD_RECIPIENT],
      replyTo: email,
      subject,
      html: buildEmailHtml(safeLead, timestamp),
    });
    if (error) throw new Error(`Resend: ${error.message}`);

    // The lead is already safe in our inbox, so a failed confirmation is logged, not surfaced
    if (CAN_EMAIL_CUSTOMERS) {
      const { error: confirmError } = await resend.emails.send({
        from: FROM_ADDRESS,
        to: [email],
        replyTo: LEAD_RECIPIENT,
        subject: "We received your roofing quote request",
        html: buildConfirmationHtml(safeLead),
      });
      if (confirmError) console.error("[submit-lead] confirmation:", confirmError.message);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[submit-lead]", err);
    return NextResponse.json(
      { error: "Failed to send. Please try again." },
      { status: 500 }
    );
  }
}
