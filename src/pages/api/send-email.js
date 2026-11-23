import nodemailer from "nodemailer";

const LIMITS = { name: 120, email: 200, phone: 40, company: 160, subject: 200, plan: 40, fleetSize: 20, bookingMethod: 60, message: 5000 };

const esc = (v = "") =>
  String(v)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const clean = (body) => {
  const out = {};
  for (const [k, max] of Object.entries(LIMITS)) {
    const v = typeof body?.[k] === "string" ? body[k].trim().slice(0, max) : "";
    if (v) out[k] = v;
  }
  return out;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

let transporter;
const getTransport = () => {
  if (!transporter) {
    const port = Number(process.env.SMTP_PORT) || 465;
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
    });
  }
  return transporter;
};

const row = (label, value) =>
  value
    ? `<tr><td style="padding:10px;font-weight:bold;border-bottom:1px solid #e0e0e0;vertical-align:top;">${label}</td><td style="padding:10px;border-bottom:1px solid #e0e0e0;white-space:pre-wrap;">${esc(value)}</td></tr>`
    : "";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  const body = req.body || {};

  // Honeypot: real users never fill this hidden field. Pretend success for bots.
  if (body.website) return res.status(201).json({ message: "Email sent successfully" });

  const f = clean(body);
  const leadForm = body.leadForm === true || body.leadForm === "true";

  if (!f.name || !f.email) return res.status(400).json({ message: "Name and email are required." });
  if (!EMAIL_RE.test(f.email)) return res.status(400).json({ message: "Please enter a valid email address." });

  const kind = leadForm ? "Lead Form" : "Contact Form";
  const subjectLine = `${kind} Submission - ${(f.subject || f.plan || "No subject").replace(/[\r\n]+/g, " ")}`;

  try {
    await getTransport().sendMail({
      from: { name: process.env.SMTP_FROM_NAME || "Fajraan Tech Website", address: process.env.SMTP_USER },
      to: "info@fajraan.com",
      replyTo: { name: f.name.replace(/[\r\n"]+/g, " "), address: f.email },
      subject: subjectLine,
      text: Object.entries(f).map(([k, v]) => `${k}: ${v}`).join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;border:1px solid #e0e0e0;border-radius:10px;">
          <h2 style="color:#092a54;text-align:center;">${kind} Submission</h2>
          <table style="width:100%;border-collapse:collapse;margin:20px 0;">
            ${row("Name", f.name)}
            ${row("Email", f.email)}
            ${row("Phone", f.phone)}
            ${row("Subject", f.subject)}
            ${row("Company", f.company)}
            ${row("Plan", f.plan)}
            ${row("Fleet size", f.fleetSize)}
            ${row("Booking method", f.bookingMethod)}
            ${row("Message", f.message)}
          </table>
        </div>`,
    });

    return res.status(201).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(502).json({ message: "We couldn't send your message right now. Please email info@fajraan.com directly." });
  }
}
