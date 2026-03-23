import nodemailer from "nodemailer";

// ─── SMTP Configuration ─────────────────────────────────────────────────

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587", 10),
  secure: process.env.SMTP_PORT === "465",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const FROM_ADDRESS =
  process.env.FROM_EMAIL || "noreply@theenglishhub.co.uk";
const FROM_NAME = "The English Hub";
const FROM = `${FROM_NAME} <${FROM_ADDRESS}>`;

// ─── Send Email ──────────────────────────────────────────────────────────

export async function sendEmail(
  to: string,
  subject: string,
  html: string
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    const info = await transporter.sendMail({
      from: FROM,
      to,
      subject,
      html,
    });

    return { success: true, messageId: info.messageId };
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Unknown email error";
    console.error(`[email] Failed to send to ${to}: ${message}`);
    return { success: false, error: message };
  }
}

// ─── Verify SMTP connection (call on startup if desired) ─────────────────

export async function verifyEmailConnection(): Promise<boolean> {
  try {
    await transporter.verify();
    console.log("[email] SMTP connection verified");
    return true;
  } catch (err) {
    console.error("[email] SMTP verification failed:", err);
    return false;
  }
}
