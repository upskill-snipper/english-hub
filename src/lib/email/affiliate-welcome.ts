// ─── Affiliate welcome email ───────────────────────────────────────────────
//
// Sent immediately after a user self-enrols at /affiliates. Gives them
// their code + referral URL + the four starter post templates + the
// mandatory #ad disclosure reminder. Never blocks the enrolment response
// - we fire-and-forget and log delivery outcomes.
// ──────────────────────────────────────────────────────────────────────────

import { sendViaResend, escapeHtml, type ResendSendResult } from './resend'

export interface AffiliateWelcomeInput {
  toEmail: string
  displayName: string
  code: string
  referralUrl: string
  dashboardUrl: string
}

export async function sendAffiliateWelcomeEmail(
  input: AffiliateWelcomeInput,
): Promise<ResendSendResult> {
  const nameSafe = escapeHtml(input.displayName)
  const codeSafe = escapeHtml(input.code)
  const urlSafe = escapeHtml(input.referralUrl)
  const dashboardSafe = escapeHtml(
    input.dashboardUrl.startsWith('http')
      ? input.dashboardUrl
      : `https://theenglishhub.app${input.dashboardUrl}`,
  )

  const subject = `You're in! Your English Hub affiliate code is ${input.code}`

  const html = `
<div style="font-family: system-ui, -apple-system, sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
  <h1 style="font-size: 22px; margin: 0 0 12px;">Hi ${nameSafe},</h1>
  <p style="line-height: 1.6; font-size: 15px;">
    You&rsquo;re officially an English Hub partner. Your code is active and ready to share -
    every signup attributed to you is tracked automatically.
  </p>

  <div style="margin: 28px 0; padding: 16px 20px; border: 1px solid #e2e8f0; border-radius: 10px; background: #f8fafc;">
    <p style="margin: 0 0 4px; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #64748b;">Your affiliate code</p>
    <p style="margin: 0; font-family: 'SF Mono', Menlo, monospace; font-size: 22px; letter-spacing: 0.06em; color: #0f172a;">${codeSafe}</p>
  </div>

  <div style="margin: 20px 0; padding: 16px 20px; border: 1px solid #e2e8f0; border-radius: 10px;">
    <p style="margin: 0 0 4px; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #64748b;">Your referral link</p>
    <p style="margin: 0; font-size: 14px; word-break: break-all;"><a href="${urlSafe}" style="color: #0f766e;">${urlSafe}</a></p>
  </div>

  <h2 style="font-size: 17px; margin: 32px 0 8px;">Starter post templates</h2>
  <p style="line-height: 1.6; font-size: 14px; color: #475569;">
    Copy, paste, personalise. Every template already includes the mandatory <strong>#ad</strong>
    disclosure - the ASA requires it at the start of a caption, visible without a &ldquo;more&rdquo;
    truncation, and on-screen for 3s on any video.
  </p>

  ${renderTemplate('TikTok', tiktokTemplate(input.code, input.referralUrl))}
  ${renderTemplate('Instagram', instagramTemplate(input.code, input.referralUrl))}
  ${renderTemplate('X / Twitter', xTemplate(input.code, input.referralUrl))}
  ${renderTemplate('WhatsApp / text', whatsappTemplate(input.code, input.referralUrl))}

  <div style="margin: 32px 0 20px; padding: 16px 20px; border-left: 4px solid #f59e0b; background: #fffbeb; border-radius: 4px;">
    <p style="margin: 0 0 6px; font-size: 14px; font-weight: 600; color: #92400e;">Disclosure is non-negotiable</p>
    <p style="margin: 0; font-size: 14px; line-height: 1.5; color: #78350f;">
      Every promotional post must include <strong>#ad</strong> (or &ldquo;paid partnership&rdquo; on video)
      at the start of the caption. Failing to disclose is an ASA breach and will end your partnership.
    </p>
  </div>

  <p style="margin: 24px 0;">
    <a href="${dashboardSafe}" style="display: inline-block; padding: 12px 20px; background: #0f766e; color: white; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px;">
      Go to your dashboard
    </a>
  </p>

  <p style="margin-top: 36px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 13px; color: #64748b; line-height: 1.5;">
    Questions? Reply to this email or hit us at <a href="mailto:info@upskillenergy.com" style="color: #0f766e;">info@upskillenergy.com</a>.<br />
    Thanks for partnering with us - it genuinely helps students.<br />
    <strong>The English Hub</strong> &middot; Upskill Energy Limited &middot; Companies House 16511479 &middot; ICO ZC016690
  </p>
</div>`.trim()

  const text = [
    `Hi ${input.displayName},`,
    ``,
    `Your English Hub affiliate code is active:`,
    ``,
    `  Code: ${input.code}`,
    `  Link: ${input.referralUrl}`,
    `  Dashboard: ${input.dashboardUrl}`,
    ``,
    `Starter post templates (remember #ad at the START of every caption):`,
    ``,
    `- TikTok -`,
    tiktokTemplate(input.code, input.referralUrl),
    ``,
    `- Instagram -`,
    instagramTemplate(input.code, input.referralUrl),
    ``,
    `- X / Twitter -`,
    xTemplate(input.code, input.referralUrl),
    ``,
    `- WhatsApp -`,
    whatsappTemplate(input.code, input.referralUrl),
    ``,
    `ASA rules: disclose at the start, visible without truncation, 3s on-screen for video.`,
    ``,
    `Questions? Reply to this email or info@upskillenergy.com.`,
    ``,
    `The English Hub · Upskill Energy Limited · Co. 16511479 · ICO ZC016690`,
  ].join('\n')

  return sendViaResend({
    to: input.toEmail,
    subject,
    html,
    text,
    replyTo: 'info@upskillenergy.com',
    tags: [
      { name: 'category', value: 'affiliate' },
      { name: 'event', value: 'enrolment-welcome' },
    ],
  })
}

// ─── Template bodies ────────────────────────────────────────────────────────

function tiktokTemplate(code: string, url: string): string {
  return `POV: you found the GCSE English revision tool that actually marks your essays 🔥\n\nThe English Hub gives you AO-aligned feedback in 60 seconds. Built by real examiners (AQA, Pearson, Cambridge, OCR, WJEC).\n\nGrab a trial - code ${code} at checkout for 7 days free.\n\n👉 ${url}\n\n#GCSE #GCSE2026 #GCSEenglish #revision #studytok #ad`
}

function instagramTemplate(code: string, url: string): string {
  return `If you're revising for GCSE English, stop scrolling 🧵\n\nThe English Hub lets you write an essay, submit it, and get a predicted grade + AO-level feedback in a minute. No teacher, no tutor - instant feedback, as many essays as you want.\n\nUse code ${code} for a 7-day free trial. Link: ${url}\n\n#GCSE #GCSEenglish #revision #TeamEnglish #ad`
}

function xTemplate(code: string, url: string): string {
  return `Revising for GCSE English? @theenglishhub marks your essays against real AQA / Edexcel / OCR / Eduqas / Cambridge mark schemes in ~60s.\n\nCode ${code} gets you a 7-day free trial.\n\n${url}\n\n#GCSE #ad`
}

function whatsappTemplate(code: string, url: string): string {
  return `Came across this - The English Hub marks GCSE English essays using real examiner mark schemes. Might be useful. Code ${code} for 7 days free: ${url} (#ad)`
}

function renderTemplate(platform: string, body: string): string {
  const escaped = escapeHtml(body)
  return `
<div style="margin: 12px 0; padding: 12px 16px; border: 1px solid #e2e8f0; border-radius: 8px; background: #fafafa;">
  <p style="margin: 0 0 6px; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #64748b;">${escapeHtml(platform)}</p>
  <pre style="margin: 0; white-space: pre-wrap; font-family: system-ui, -apple-system, sans-serif; font-size: 13px; line-height: 1.55; color: #1e293b;">${escaped}</pre>
</div>`
}
