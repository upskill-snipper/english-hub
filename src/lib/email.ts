import nodemailer from 'nodemailer'

// ─── SMTP Configuration ─────────────────────────────────────────────────

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  secure: process.env.SMTP_PORT === '465',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

const FROM_ADDRESS = process.env.FROM_EMAIL || 'noreply@theenglishhub.app'
const FROM_NAME = 'The English Hub'
const FROM = `${FROM_NAME} <${FROM_ADDRESS}>`

// ─── Send Email ──────────────────────────────────────────────────────────

/**
 * Send an email. When a plain-text `text` body is supplied alongside the
 * HTML, nodemailer emits a `multipart/alternative` message — improving
 * deliverability (spam scoring) and accessibility (screen readers, text-only
 * clients). The 3-arg call form remains supported for existing callers.
 */
export async function sendEmail(
  to: string,
  subject: string,
  html: string,
  text?: string,
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    const info = await transporter.sendMail({
      from: FROM,
      to,
      subject,
      html,
      ...(text ? { text } : {}),
    })

    return { success: true, messageId: info.messageId }
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown email error'
    console.error(`[email] Failed to send to ${to}: ${message}`)
    return { success: false, error: message }
  }
}

// ─── Verify SMTP connection (call on startup if desired) ─────────────────

export async function verifyEmailConnection(): Promise<boolean> {
  try {
    await transporter.verify()
    return true
  } catch (err) {
    console.error('[email] SMTP verification failed:', err)
    return false
  }
}
