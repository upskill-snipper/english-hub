// ─── The shell and the shared copy for the lifecycle emails ─────────────────
//
// WHY THIS EXISTS (23 October 2026)
//
// The registration-to-subscription emails (account ready, the day-3 nudge,
// trial ending, trial ended, day 14, day 30, payment failed, cancelled) used
// to be two builders with their own shell, two inline HTML strings in the
// Stripe webhook, and nothing else. Between them they:
//
//   • listed mock papers as something a trialist loses, which the claim sheet
//     (§5) says is free with an account and the code still gates;
//   • said "courses ... remain free", where only the first module of each
//     course is free (§2, §5);
//   • pointed the opt-out at /dashboard/privacy and sent no List-Unsubscribe
//     header, so Gmail and Outlook offered only "report spam";
//   • printed the ICO number, which the register showed expiring on
//     17 October 2026 (§8), and "a trading name of" in one place and nothing
//     in another;
//   • greeted the reader by a first name typed at sign-up, which is free text
//     and, on a children's product, a way to put words in our mouth.
//
// So every lifecycle email is now built here, from plain-text blocks that this
// file escapes, with one call-to-action link, the unsubscribe link, "Hi," and
// the house sign-off. Every product claim below is the claim sheet's wording
// (TEHC-079, 16 October 2026), cited by section. Nothing here states a time
// for AI marking (§9), a mock-paper count (§2, §9), "lesson plans" (§2) or a
// "was" price (§4).
// ────────────────────────────────────────────────────────────────────────────

import { PRICING } from '@/constants/pricing'

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://theenglishhub.app'

const BRAND_COLOR = '#1A5276'
const BRAND_LIGHT = '#D6EAF8'

export interface BuiltEmail {
  subject: string
  html: string
  text: string
}

// ─── Shared copy, each line from the claim sheet ────────────────────────────

/** §6.1 "Say:", verbatim. */
export const AI_MARKING_SENTENCE =
  'Get a mark for each assessment objective, what went well, what to improve and what to practise next. Written by AI and labelled as AI; the grade is a practice estimate, not an official result.'

/**
 * What a registered account keeps once a trial or a plan ends. §2's safe
 * phrasings for the items its last column marks free, and §5's "the first
 * module of every course". It replaces "Exam-board aligned courses ... remain
 * free", which promised whole courses.
 */
export const STAYS_FREE_LINE =
  'The 100+ set-text study guides, the quests for 100+ set texts, the 37 games, revision notes for 40+ texts, 2,000+ flashcards and the first module of each of the 80+ courses.'

/**
 * What a trial or a plan adds, from §5's "Not free" list. Two items are left
 * out on purpose: AI feedback on mock answers, because whether mock papers are
 * free is still the founder's decision (the sheet says free, the code gates
 * them), and IELTS checks, which §6.2 says not to advertise.
 */
export function paidFeatures(isTeacher: boolean): string[] {
  const list = ['AI essay marking and feedback', 'Model answers', 'Course modules 2 onwards']
  if (isTeacher) list.push('The examiner marking tool')
  return list
}

/** "Everything you have already had marked stays where it is", from the site's own copy. */
export const MARKED_ESSAYS_STAY_LINE = 'Everything you have already had marked stays where it is.'

function pounds(n: number): string {
  return Number.isInteger(n) ? `£${n}` : `£${n.toFixed(2)}`
}

/**
 * §4's price line, read from src/constants/pricing.ts. Adults only: no caller
 * may pass this to a child (enforced by the builders' audience argument and by
 * the tests).
 */
export function priceLine(isTeacher: boolean): string {
  if (isTeacher) {
    return `The Teacher plan is ${pounds(PRICING.TEACHER_MONTHLY)} a month or ${pounds(PRICING.TEACHER_ANNUAL)} a year (planned standard pricing ${pounds(PRICING.TEACHER_MONTHLY_STANDARD)} or ${pounds(PRICING.TEACHER_ANNUAL_STANDARD)}).`
  }
  return `The Student plan is ${pounds(PRICING.STUDENT_MONTHLY)} a month or ${pounds(PRICING.STUDENT_ANNUAL)} a year (planned standard pricing ${pounds(PRICING.STUDENT_MONTHLY_STANDARD)} or ${pounds(PRICING.STUDENT_ANNUAL_STANDARD)}).`
}

/** The house sign-off and company line (§8; no ICO number until the register shows the renewal). */
export const SIGN_OFF = 'We hope to continue to provide the best service possible.'
export const SIGNATURE = 'The English Hub Team'
export const COMPANY_LINE =
  'A product of Upskill Energy Limited, registered in England and Wales, company no. 16511479.'

/** A tracked link to a page on the site. */
export function siteLink(path: string, ref: string): string {
  return `${SITE_URL}${path}?ref=${encodeURIComponent(ref)}`
}

/** The date as a reader in the UK reads it, for example "31 October 2026". */
export function formatEmailDate(date: Date): string {
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Europe/London',
  })
}

// ─── The shell ──────────────────────────────────────────────────────────────

export type LifecycleBlock =
  | { kind: 'p'; text: string }
  | { kind: 'list'; heading: string; items: readonly string[] }
  | { kind: 'box'; heading: string; text: string }

/**
 * Why the reader is getting this, for the footer.
 *   service   a fact about their own account; no selling
 *   billing   a fact about their plan
 *   marketing consented adults only
 */
export type FooterKind = 'service' | 'billing' | 'marketing'

export interface LifecycleEmailParts {
  subject: string
  preheader: string
  heading: string
  blocks: readonly LifecycleBlock[]
  cta: { label: string; url: string }
  footer: FooterKind
  /** `/unsubscribe?token=...`, or bare `/unsubscribe` when no token could be signed. */
  unsubscribeUrl: string
}

const FOOTER_REASON: Record<FooterKind, string> = {
  service: 'You are receiving this because it is about your English Hub account.',
  billing: 'You are receiving this because it is about your English Hub plan.',
  marketing: 'You are receiving this because you asked to hear from The English Hub.',
}

const UNSUBSCRIBE_NOTE: Record<FooterKind, string> = {
  service: 'Messages about your account will still reach you.',
  billing: 'Messages about your account and your plan will still reach you.',
  marketing: 'Messages about your account will still reach you.',
}

export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

const P = 'margin:0 0 16px 0;font-size:15px;color:#333333;line-height:1.6;'

function blockHtml(b: LifecycleBlock): string {
  if (b.kind === 'p') return `<p style="${P}">${escapeHtml(b.text)}</p>`
  if (b.kind === 'list') {
    const items = b.items
      .map(
        (i) =>
          `<li style="padding:4px 0;font-size:15px;color:#555555;line-height:1.5;">${escapeHtml(i)}</li>`,
      )
      .join('')
    return `<p style="margin:8px 0 8px 0;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:${BRAND_COLOR};">${escapeHtml(b.heading)}</p><ul style="margin:0 0 16px 0;padding:0 0 0 20px;">${items}</ul>`
  }
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND_LIGHT};border-radius:6px;margin:0 0 16px 0;"><tr><td style="padding:16px 20px;"><p style="margin:0 0 6px 0;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:${BRAND_COLOR};">${escapeHtml(b.heading)}</p><p style="margin:0;font-size:15px;color:#333333;line-height:1.6;">${escapeHtml(b.text)}</p></td></tr></table>`
}

function blockText(b: LifecycleBlock): string {
  if (b.kind === 'p') return b.text
  if (b.kind === 'list') return [`${b.heading}:`, ...b.items.map((i) => `  - ${i}`)].join('\n')
  return `${b.heading}:\n  ${b.text}`
}

/**
 * Render a lifecycle email. Every string is escaped here, so a builder passes
 * plain text and cannot inject markup. The HTML carries exactly two links: the
 * call to action and the unsubscribe link.
 */
export function renderLifecycleEmail(parts: LifecycleEmailParts): BuiltEmail {
  const body = parts.blocks.map(blockHtml).join('\n              ')
  const ctaUrl = escapeHtml(parts.cta.url)
  const unsubscribeUrl = escapeHtml(parts.unsubscribeUrl)

  const html = `<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(parts.heading)}</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;color:#333333;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(parts.preheader)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;">
    <tr>
      <td align="center" style="padding:24px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;max-width:600px;width:100%;">
          <tr>
            <td style="background:${BRAND_COLOR};padding:28px 32px;">
              <p style="margin:0;font-size:20px;font-weight:700;color:#ffffff;">The English Hub</p>
              <p style="margin:6px 0 0 0;font-size:14px;color:${BRAND_LIGHT};">${escapeHtml(parts.heading)}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 32px 8px 32px;">
              <p style="${P}">Hi,</p>
              ${body}
            </td>
          </tr>
          <tr>
            <td style="padding:8px 32px 24px 32px;" align="center">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:${BRAND_COLOR};border-radius:6px;">
                    <a href="${ctaUrl}" target="_blank" style="display:inline-block;padding:14px 32px;color:#ffffff;font-size:16px;font-weight:600;text-decoration:none;border-radius:6px;">${escapeHtml(parts.cta.label)}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 32px 32px;">
              <p style="${P}">${escapeHtml(SIGN_OFF)}</p>
              <p style="margin:0;font-size:15px;color:#333333;line-height:1.6;font-weight:600;">${escapeHtml(SIGNATURE)}</p>
            </td>
          </tr>
          <tr>
            <td style="background:#f9f9f9;padding:24px 32px;border-top:1px solid #eeeeee;">
              <p style="margin:0 0 8px 0;font-size:12px;color:#888888;line-height:1.5;">${escapeHtml(FOOTER_REASON[parts.footer])} <a href="${unsubscribeUrl}" style="color:${BRAND_COLOR};text-decoration:underline;">Unsubscribe from marketing email</a>. ${escapeHtml(UNSUBSCRIBE_NOTE[parts.footer])}</p>
              <p style="margin:0;font-size:12px;color:#888888;line-height:1.5;">${escapeHtml(COMPANY_LINE)}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

  const text = [
    'Hi,',
    '',
    ...parts.blocks.flatMap((b) => [blockText(b), '']),
    `${parts.cta.label}: ${parts.cta.url}`,
    '',
    SIGN_OFF,
    SIGNATURE,
    '',
    FOOTER_REASON[parts.footer],
    `Unsubscribe from marketing email: ${parts.unsubscribeUrl}`,
    UNSUBSCRIBE_NOTE[parts.footer],
    COMPANY_LINE,
  ].join('\n')

  return { subject: parts.subject, html, text }
}
