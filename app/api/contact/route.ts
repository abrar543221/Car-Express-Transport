import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const schema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  companyName: z.string().optional(),
  message: z.string().optional(),
  // Transport-specific fields from hero quote form
  origin: z.string().optional(),
  destination: z.string().optional(),
  condition: z.string().optional(),
  transportType: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

function buildEmailHtml(data: FormData): string {
  const isTransportQuote = !!(data.origin || data.destination);

  const transportSection = isTransportQuote
    ? `
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
        <tr>
          <td style="background:#fffbeb; border:1px solid #fde68a; border-radius:10px; padding:20px 24px;">
            <p style="font-size:11px; font-weight:700; color:#d97706; text-transform:uppercase; letter-spacing:0.1em; margin:0 0 14px;">Transport Details</p>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td width="45%" style="padding:0 12px 0 0;">
                  <p style="font-size:11px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.08em;font-weight:700;margin:0 0 4px;">From (Origin)</p>
                  <p style="font-size:16px;font-weight:700;color:#111827;margin:0;">${data.origin || "—"}</p>
                </td>
                <td width="10%" style="text-align:center;font-size:20px;color:#d97706;font-weight:700;">→</td>
                <td width="45%" style="padding:0 0 0 12px;">
                  <p style="font-size:11px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.08em;font-weight:700;margin:0 0 4px;">To (Destination)</p>
                  <p style="font-size:16px;font-weight:700;color:#111827;margin:0;">${data.destination || "—"}</p>
                </td>
              </tr>
            </table>
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:16px;">
              <tr>
                <td width="50%" style="padding-right:12px;">
                  <p style="font-size:11px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.08em;font-weight:700;margin:0 0 4px;">Vehicle Condition</p>
                  <p style="font-size:14px;font-weight:600;color:#374151;margin:0;">${data.condition || "—"}</p>
                </td>
                <td width="50%">
                  <p style="font-size:11px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.08em;font-weight:700;margin:0 0 4px;">Transport Type</p>
                  <p style="font-size:14px;font-weight:600;color:#374151;margin:0;">${data.transportType || "—"}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>`
    : "";

  const messageSection = data.message
    ? `
      <div class="field">
        <div class="label">Additional Notes</div>
        <div class="message-box">${data.message.replace(/\n/g, "<br />")}</div>
      </div>`
    : "";

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: Arial, sans-serif; background: #f1f5f9; margin: 0; padding: 0; }
    .wrapper { max-width: 620px; margin: 40px auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 32px rgba(0,0,0,0.10); }
    .header { background: #080C18; padding: 32px 40px 28px; }
    .header-logo { display: flex; align-items: center; gap: 10px; margin-bottom: 16px; }
    .header-icon { width: 40px; height: 40px; background: #F5B800; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 20px; }
    .header h1 { color: #ffffff; margin: 0; font-size: 20px; font-weight: 800; }
    .header h1 span { color: #F5B800; }
    .badge { display: inline-block; background: #F5B800; color: #080C18; font-size: 11px; font-weight: 800; padding: 4px 14px; border-radius: 20px; margin-bottom: 10px; letter-spacing: 0.06em; text-transform: uppercase; }
    .header p { color: #64748b; margin: 0; font-size: 13px; }
    .body { padding: 32px 40px; }
    .section-title { font-size: 11px; font-weight: 700; color: #F5B800; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 16px; }
    .field { margin-bottom: 18px; }
    .label { font-size: 11px; font-weight: 700; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 3px; }
    .value { font-size: 15px; color: #111827; font-weight: 500; }
    .value a { color: #d97706; text-decoration: none; }
    .message-box { background: #f9fafb; border-left: 4px solid #F5B800; border-radius: 4px; padding: 14px 18px; font-size: 14px; color: #374151; line-height: 1.65; }
    .divider { border: none; border-top: 1px solid #e5e7eb; margin: 24px 0; }
    .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    .footer { background: #f8fafc; border-top: 1px solid #e5e7eb; padding: 20px 40px; text-align: center; font-size: 12px; color: #9ca3af; line-height: 1.6; }
    .footer a { color: #d97706; text-decoration: none; }
    .cta-btn { display: inline-block; background: #F5B800; color: #080C18; font-weight: 800; font-size: 13px; padding: 10px 24px; border-radius: 8px; text-decoration: none; margin-top: 8px; }
  </style>
</head>
<body>
  <div class="wrapper">
    <!-- Header -->
    <div class="header">
      <div class="header-logo">
        <div class="header-icon">🚗</div>
        <h1>Car Express<span> Transport</span></h1>
      </div>
      <div class="badge">New Quote Request</div>
      <p>A new quote request was submitted via carexpresstransport.com</p>
    </div>

    <!-- Body -->
    <div class="body">

      <!-- Transport Details (hero form) -->
      ${transportSection}

      <!-- Contact Info -->
      <p class="section-title">Contact Information</p>
      <div class="field">
        <div class="label">Full Name</div>
        <div class="value">${data.fullName}</div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:18px;">
        <div>
          <div class="label">Phone</div>
          <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
        </div>
        <div>
          <div class="label">Email</div>
          <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
        </div>
      </div>
      ${data.companyName ? `<div class="field"><div class="label">Company</div><div class="value">${data.companyName}</div></div>` : ""}

      ${messageSection}

      <hr class="divider" />

      <!-- Quick reply CTA -->
      <p style="font-size:13px;color:#6b7280;margin:0 0 8px;">Reply directly to this lead:</p>
      <a href="mailto:${data.email}?subject=Re: Your Auto Transport Quote" class="cta-btn">Reply to ${data.fullName}</a>
    </div>

    <!-- Footer -->
    <div class="footer">
      Sent automatically from <a href="https://carexpresstransport.com">carexpresstransport.com</a><br />
      To unsubscribe from lead notifications, contact your administrator.
    </div>
  </div>
</body>
</html>
  `.trim();
}

function buildPlainText(data: FormData): string {
  const lines = [
    "NEW QUOTE REQUEST — Car Express Transport",
    "==========================================",
    "",
  ];

  if (data.origin || data.destination) {
    lines.push("TRANSPORT DETAILS");
    lines.push(`  From:       ${data.origin || "—"}`);
    lines.push(`  To:         ${data.destination || "—"}`);
    lines.push(`  Condition:  ${data.condition || "—"}`);
    lines.push(`  Transport:  ${data.transportType || "—"}`);
    lines.push("");
  }

  lines.push("CONTACT INFORMATION");
  lines.push(`  Name:   ${data.fullName}`);
  lines.push(`  Phone:  ${data.phone}`);
  lines.push(`  Email:  ${data.email}`);
  if (data.companyName) lines.push(`  Company: ${data.companyName}`);
  if (data.message) {
    lines.push("");
    lines.push("NOTES");
    lines.push(data.message);
  }

  return lines.join("\n");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Invalid form data. Please check all fields." },
        { status: 400 }
      );
    }

    const data = parsed.data;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const routeLabel = data.origin && data.destination
      ? `${data.origin} → ${data.destination}`
      : "General Inquiry";

    await transporter.sendMail({
      from: `"Car Express Transport" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO || "info@carexpresstransport.com",
      replyTo: data.email,
      subject: `New Quote: ${data.fullName} — ${routeLabel}`,
      html: buildEmailHtml(data),
      text: buildPlainText(data),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[/api/contact] Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
