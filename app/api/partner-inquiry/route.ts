import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { escapeFields, isRateLimited, looksLikeBot, validateFields } from "@/lib/formGuard";
import { FROM_ADDRESS } from "@/lib/email";

const resend = new Resend(process.env.RESEND_API_KEY);

const PARTNER_RECIPIENT = "ansik@skyhouse.ca";

interface PartnerPayload {
  name: string;
  company: string;
  phone: string;
  email: string;
  serviceAreas: string;
  yearsInBusiness: string;
  licensed: string;
  message?: string;
}

function buildPartnerEmailHtml(p: PartnerPayload, timestamp: string): string {
  const licensedBadge =
    p.licensed === "yes"
      ? `<span style="background:#DCFCE7;color:#15803D;padding:2px 10px;border-radius:20px;font-size:12px;font-weight:700;">✓ Licensed & Insured</span>`
      : `<span style="background:#FEF9C3;color:#A16207;padding:2px 10px;border-radius:20px;font-size:12px;font-weight:700;">Pending / Unsure</span>`;

  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><title>New Partner Inquiry</title></head>
<body style="margin:0;padding:0;background:#F8FAFC;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F8FAFC;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:#0F172A;border-radius:12px 12px 0 0;padding:28px 32px;">
            <p style="margin:0;font-size:22px;font-weight:800;color:#fff;">
              Local<span style="color:#F97316;">Roofer</span><span style="color:rgba(255,255,255,0.4)">.ca</span>
            </p>
            <p style="margin:6px 0 0;font-size:13px;color:rgba(255,255,255,0.5);">New Partner Inquiry</p>
          </td>
        </tr>

        <!-- Orange banner -->
        <tr>
          <td style="background:#F97316;padding:10px 32px;">
            <p style="margin:0;font-size:13px;font-weight:700;color:#fff;text-transform:uppercase;letter-spacing:0.5px;">
              🤝 Roofing Partner Application
            </p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background:#fff;border-radius:0 0 12px 12px;padding:32px;">
            <h2 style="margin:0 0 24px;font-size:20px;font-weight:700;color:#0F172A;">Partner Inquiry Details</h2>

            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #F1F5F9;width:38%;">
                  <span style="font-size:12px;font-weight:600;color:#94A3B8;text-transform:uppercase;letter-spacing:0.4px;">Name</span>
                </td>
                <td style="padding:10px 0;border-bottom:1px solid #F1F5F9;">
                  <span style="font-size:15px;color:#0F172A;font-weight:500;">${p.name}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #F1F5F9;">
                  <span style="font-size:12px;font-weight:600;color:#94A3B8;text-transform:uppercase;letter-spacing:0.4px;">Company</span>
                </td>
                <td style="padding:10px 0;border-bottom:1px solid #F1F5F9;">
                  <span style="font-size:15px;color:#0F172A;font-weight:600;">${p.company}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #F1F5F9;">
                  <span style="font-size:12px;font-weight:600;color:#94A3B8;text-transform:uppercase;letter-spacing:0.4px;">Phone</span>
                </td>
                <td style="padding:10px 0;border-bottom:1px solid #F1F5F9;">
                  <a href="tel:${p.phone}" style="font-size:15px;color:#F97316;font-weight:600;text-decoration:none;">${p.phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #F1F5F9;">
                  <span style="font-size:12px;font-weight:600;color:#94A3B8;text-transform:uppercase;letter-spacing:0.4px;">Email</span>
                </td>
                <td style="padding:10px 0;border-bottom:1px solid #F1F5F9;">
                  <a href="mailto:${p.email}" style="font-size:15px;color:#F97316;text-decoration:none;">${p.email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #F1F5F9;">
                  <span style="font-size:12px;font-weight:600;color:#94A3B8;text-transform:uppercase;letter-spacing:0.4px;">Service Areas</span>
                </td>
                <td style="padding:10px 0;border-bottom:1px solid #F1F5F9;">
                  <span style="font-size:15px;color:#0F172A;">${p.serviceAreas}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #F1F5F9;">
                  <span style="font-size:12px;font-weight:600;color:#94A3B8;text-transform:uppercase;letter-spacing:0.4px;">Years in Business</span>
                </td>
                <td style="padding:10px 0;border-bottom:1px solid #F1F5F9;">
                  <span style="font-size:15px;color:#0F172A;">${p.yearsInBusiness}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #F1F5F9;">
                  <span style="font-size:12px;font-weight:600;color:#94A3B8;text-transform:uppercase;letter-spacing:0.4px;">Licensed & Insured</span>
                </td>
                <td style="padding:10px 0;border-bottom:1px solid #F1F5F9;">${licensedBadge}</td>
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

            ${p.message ? `
            <div style="background:#F8FAFC;border-left:3px solid #F97316;border-radius:4px;padding:14px 18px;margin-bottom:28px;">
              <p style="margin:0 0 6px;font-size:12px;font-weight:600;color:#94A3B8;text-transform:uppercase;letter-spacing:0.4px;">Additional Info</p>
              <p style="margin:0;font-size:14px;color:#334155;line-height:1.6;">${p.message.replace(/\n/g, "<br>")}</p>
            </div>` : ""}

            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="border-radius:8px;background:#F97316;">
                  <a href="mailto:${p.email}" style="display:inline-block;padding:12px 24px;font-size:14px;font-weight:700;color:#fff;text-decoration:none;">
                    Reply to ${p.name.split(" ")[0]} →
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td style="padding:20px 0 0;text-align:center;">
            <p style="margin:0;font-size:12px;color:#94A3B8;">
              LocalRoofer.ca Partner Network · Toronto &amp; GTA
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
  `.trim();
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, phone, email, serviceAreas, yearsInBusiness, licensed, message } =
      body as PartnerPayload;

    // Bots get a fake success so they don't retry with a smarter payload
    if (looksLikeBot(body)) {
      return NextResponse.json({ success: true });
    }

    if (isRateLimited(req, "partner")) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a few minutes." },
        { status: 429 }
      );
    }

    if (!name || !company || !phone || !email || !serviceAreas || !yearsInBusiness) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const partner: PartnerPayload = { name, company, phone, email, serviceAreas, yearsInBusiness, licensed, message };
    const invalid = validateFields({ ...partner });
    if (invalid) {
      return NextResponse.json({ error: invalid }, { status: 400 });
    }

    const timestamp = new Date().toLocaleString("en-CA", {
      timeZone: "America/Toronto",
      dateStyle: "full",
      timeStyle: "short",
    });

    // Resend reports failures in the return value rather than throwing
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: [PARTNER_RECIPIENT],
      replyTo: email,
      subject: `[Partner Inquiry] ${company} — ${serviceAreas}`,
      html: buildPartnerEmailHtml(escapeFields(partner), timestamp),
    });
    if (error) throw new Error(`Resend: ${error.message}`);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[partner-inquiry]", err);
    return NextResponse.json({ error: "Failed to send. Please try again." }, { status: 500 });
  }
}
