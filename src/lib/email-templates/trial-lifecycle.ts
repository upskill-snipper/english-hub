// ─── Trial Lifecycle Email Templates ─────────────────────────────────────
//
// Defect being fixed (2026-08-23 conversion audit): the 7-day no-card
// signup trial (Option C paywall, see /api/auth/register) is ended silently
// by `/api/cron/trial-expiry`. Nothing warned the user beforehand and
// nothing followed up afterwards, so the entire main trial population lost
// premium access with no notice at all.
//
// Two builders live here:
//   • buildTrialEndingEmail  - service notice, ~2 days before the trial ends.
//   • buildTrialEndedEmail   - follow-up after the trial has ended.
//
// Copy rules enforced in this file (2026-08 claims-honesty sweep):
//   • No statistics, no grade promises, no testimonials, no scale claims.
//   • No invented urgency and no deadline other than the account's real
//     trial end date, which is passed in by the caller.
//   • The "what stays free" line is the exact vetted product claim already
//     used on /pricing (`pricing.faq.a1` in the dictionary), so the email
//     can never drift away from what the site promises.
//   • The no-card fact is stated plainly: we never took payment details,
//     so nothing can be charged. That removes the false "you are about to
//     be billed" panic a generic trial-ending email creates.
//   • British English, spaced hyphens rather than em dashes.
//
// Strings are inline rather than dictionary keys: `src/lib/i18n/dictionary.ts`
// is owned by another workstream this cycle, and the existing email
// templates in this directory are all English-only inline copy too. Flagged
// for translation in the handover notes.
// ─────────────────────────────────────────────────────────────────────────

// ─── Configuration ───────────────────────────────────────────────────────

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://theenglishhub.app'
const BRAND_COLOR = '#1A5276'
const BRAND_LIGHT = '#D6EAF8'

const PRICING_URL = `${BASE_URL}/pricing`
const TERMS_URL = `${BASE_URL}/terms`
const PRIVACY_URL = `${BASE_URL}/privacy-policy`
// Real, working opt-out surface. /dashboard/privacy renders the
// `marketingEnabled` toggle and PATCHes /api/privacy/settings, which is the
// same preference this product's other email crons gate on. The
// `/unsubscribe?token=` route referenced by the weekly report templates does
// NOT exist yet (see report), so these emails deliberately point at the
// preference page that does.
const EMAIL_PREFERENCES_URL = `${BASE_URL}/dashboard/privacy`

// ─── Types ───────────────────────────────────────────────────────────────

export interface TrialEmailData {
  /** Recipient's first name. Escaped before interpolation. */
  firstName: string
  /**
   * The real trial boundary from `Subscription.currentPeriodEnd`. Used for
   * the only date shown in the email - never a made-up deadline.
   */
  trialEndsAt: Date
}

export interface BuiltEmail {
  subject: string
  html: string
  text: string
}

// ─── Shared, verified copy fragments ─────────────────────────────────────

/**
 * What the recipient actually loses when the trial ends.
 *
 * Every item was verified against a real entitlement gate in the codebase
 * before being listed here. This is a claim made to a child about their own
 * account, so an unverified entry is a false claim:
 *
 *   • AI essay marking and feedback - `/api/marking/run` refuses without a
 *     live entitlement, and `/marking/results/[id]` calls requireSubscription.
 *   • Mock exam papers - `/mock-exams/[id]/layout.tsx` calls
 *     requireSubscription (the /mock-exams index stays public).
 *   • Revision study plan and analytics - `/revision/study-plan/layout.tsx`
 *     and `/revision/analytics/layout.tsx` call requireSubscription.
 *
 * Deliberately NOT listed: course content and lesson plans. Neither is
 * behind a live gate (`checkCourseAccess` in src/lib/course-access.ts has
 * no callers, and the lesson-plan pages are static resources), and claiming
 * courses are lost would directly contradict STAYS_FREE_LINE below.
 */
const PREMIUM_FEATURES: readonly string[] = [
  'AI essay marking and feedback',
  'Mock exam papers',
  'Revision study plan and revision analytics',
]

/**
 * The exact free-tier claim already published on /pricing. Kept as one
 * constant so the email and the website can never disagree about what a
 * registered account keeps once the trial ends.
 */
const STAYS_FREE_LINE =
  'Exam-board aligned courses, revision notes and flashcards remain free with a registered account.'

/**
 * The no-card fact, derived from the Option C paywall: signup takes no
 * payment details, so an expiring trial cannot produce a charge. Stated
 * explicitly because "your trial is ending" reads as "you are about to be
 * billed" unless it is contradicted.
 */
const NO_CHARGE_LINE =
  'We never took your card details, so nothing will be charged when the trial ends.'

// ─── Builders ────────────────────────────────────────────────────────────

/**
 * Trial-ending reminder, sent while the trial is still running.
 *
 * This is a service message about a change to the recipient's own account
 * access, not a marketing broadcast: it tells them what is about to change
 * and confirms nothing will be charged. It still carries a preferences link.
 */
export function buildTrialEndingEmail(data: TrialEmailData): BuiltEmail {
  const name = escapeHtml(data.firstName || 'there')
  const endDate = formatDate(data.trialEndsAt)
  const features = PREMIUM_FEATURES

  const subject = `Your free trial ends on ${endDate}`

  const intro = `Your 7-day free trial of The English Hub ends on <strong>${escapeHtml(endDate)}</strong>. Your account stays open after that and moves to the free plan.`

  const html = renderShell({
    preheader: `Your trial ends on ${endDate}. Your account stays open on the free plan.`,
    heading: 'Your free trial ends soon',
    name,
    introHtml: intro,
    features,
    featuresHeading: 'What you will lose access to',
    ctaLabel: 'See plans',
    // Honest close: no countdown, no scarcity, no "act now".
    closingHtml: `If you would like to keep the premium features, you can choose a plan at any time. If the free plan suits you, there is nothing to do.`,
    noChargeLine: NO_CHARGE_LINE,
    preferencesHtml: `You are receiving this because you have an English Hub account and your free trial is ending. Manage your email preferences at <a href="${EMAIL_PREFERENCES_URL}" style="color:${BRAND_COLOR};text-decoration:underline;">your privacy settings</a>.`,
  })

  const text = renderText({
    heading: 'Your free trial ends soon',
    name: data.firstName || 'there',
    intro: `Your 7-day free trial of The English Hub ends on ${endDate}. Your account stays open after that and moves to the free plan.`,
    featuresHeading: 'What you will lose access to',
    features,
    closing:
      'If you would like to keep the premium features, you can choose a plan at any time. If the free plan suits you, there is nothing to do.',
    noChargeLine: NO_CHARGE_LINE,
    preferencesLine: `You are receiving this because you have an English Hub account and your free trial is ending. Manage your email preferences: ${EMAIL_PREFERENCES_URL}`,
  })

  return { subject, html, text }
}

/**
 * Post-expiry follow-up, sent after the trial has already ended.
 *
 * This one is winback, i.e. marketing, so the calling cron gates it on
 * `PrivacySettings.marketingEnabled === true` (the house consent signal,
 * OFF by default). The copy still leads with what the recipient keeps for
 * free rather than with the upgrade.
 */
export function buildTrialEndedEmail(data: TrialEmailData): BuiltEmail {
  const name = escapeHtml(data.firstName || 'there')
  const endDate = formatDate(data.trialEndsAt)
  const features = PREMIUM_FEATURES

  const subject = 'Your free trial has ended - your account is still open'

  const intro = `Your 7-day free trial of The English Hub ended on <strong>${escapeHtml(endDate)}</strong>. Your account is still open and is now on the free plan.`

  const html = renderShell({
    preheader: 'Your trial has ended. Your account is still open on the free plan.',
    heading: 'Your free trial has ended',
    name,
    introHtml: intro,
    features,
    featuresHeading: 'What a plan adds back',
    ctaLabel: 'See plans',
    closingHtml: `You are welcome to keep using the free plan for as long as you like. If the premium features were useful, a plan puts them back.`,
    noChargeLine: 'Nothing was charged for the trial: we never took your card details.',
    preferencesHtml: `You are receiving this because email updates are switched on for your account. You can turn them off at any time in <a href="${EMAIL_PREFERENCES_URL}" style="color:${BRAND_COLOR};text-decoration:underline;">your privacy settings</a>.`,
  })

  const text = renderText({
    heading: 'Your free trial has ended',
    name: data.firstName || 'there',
    intro: `Your 7-day free trial of The English Hub ended on ${endDate}. Your account is still open and is now on the free plan.`,
    featuresHeading: 'What a plan adds back',
    features,
    closing:
      'You are welcome to keep using the free plan for as long as you like. If the premium features were useful, a plan puts them back.',
    noChargeLine: 'Nothing was charged for the trial: we never took your card details.',
    preferencesLine: `You are receiving this because email updates are switched on for your account. Turn them off at any time: ${EMAIL_PREFERENCES_URL}`,
  })

  return { subject, html, text }
}

// ─── Renderers ───────────────────────────────────────────────────────────

interface ShellData {
  preheader: string
  heading: string
  /** Already HTML-escaped. */
  name: string
  introHtml: string
  features: readonly string[]
  featuresHeading: string
  ctaLabel: string
  closingHtml: string
  noChargeLine: string
  preferencesHtml: string
}

function renderShell(d: ShellData): string {
  const featureItems = d.features
    .map(
      (f) =>
        `<li style="padding:4px 0;font-size:15px;color:#555555;line-height:1.5;">${escapeHtml(f)}</li>`,
    )
    .join('')

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(d.heading)}</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;color:#333333;">
  <!-- Preheader: shown in the inbox preview, hidden in the body. -->
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(d.preheader)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;">
    <tr>
      <td align="center" style="padding:24px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:${BRAND_COLOR};padding:28px 32px;">
              <p style="margin:0;font-size:20px;font-weight:700;color:#ffffff;">The English Hub</p>
              <p style="margin:6px 0 0 0;font-size:14px;color:${BRAND_LIGHT};">${escapeHtml(d.heading)}</p>
            </td>
          </tr>

          <!-- Intro -->
          <tr>
            <td style="padding:32px 32px 8px 32px;">
              <p style="margin:0 0 16px 0;font-size:16px;color:#333333;line-height:1.6;">Hi ${d.name},</p>
              <p style="margin:0 0 16px 0;font-size:15px;color:#555555;line-height:1.6;">${d.introHtml}</p>
              <p style="margin:0;font-size:15px;color:#555555;line-height:1.6;">${escapeHtml(d.noChargeLine)}</p>
            </td>
          </tr>

          <!-- Premium features -->
          <tr>
            <td style="padding:24px 32px 8px 32px;">
              <p style="margin:0 0 8px 0;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:${BRAND_COLOR};">${escapeHtml(d.featuresHeading)}</p>
              <ul style="margin:0;padding:0 0 0 20px;">${featureItems}</ul>
            </td>
          </tr>

          <!-- What stays free -->
          <tr>
            <td style="padding:16px 32px 8px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND_LIGHT};border-radius:6px;">
                <tr>
                  <td style="padding:16px 20px;">
                    <p style="margin:0 0 6px 0;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:${BRAND_COLOR};">What stays free</p>
                    <p style="margin:0;font-size:15px;color:#333333;line-height:1.6;">${escapeHtml(STAYS_FREE_LINE)}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Closing -->
          <tr>
            <td style="padding:20px 32px 0 32px;">
              <p style="margin:0;font-size:15px;color:#555555;line-height:1.6;">${d.closingHtml}</p>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding:24px 32px 32px 32px;" align="center">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:${BRAND_COLOR};border-radius:6px;">
                    <a href="${PRICING_URL}" target="_blank" style="display:inline-block;padding:14px 32px;color:#ffffff;font-size:16px;font-weight:600;text-decoration:none;border-radius:6px;">${escapeHtml(d.ctaLabel)} &#8594;</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9f9f9;padding:24px 32px;border-top:1px solid #eeeeee;">
              <p style="margin:0 0 8px 0;font-size:12px;color:#888888;line-height:1.5;">${d.preferencesHtml}</p>
              <p style="margin:0 0 8px 0;font-size:12px;color:#888888;line-height:1.5;">
                The English Hub is a trading name of <strong>Upskill Energy Limited</strong>.
              </p>
              <p style="margin:0 0 8px 0;font-size:12px;color:#888888;line-height:1.5;">
                <a href="${TERMS_URL}" style="color:${BRAND_COLOR};text-decoration:underline;">Terms</a> &nbsp;|&nbsp;
                <a href="${PRIVACY_URL}" style="color:${BRAND_COLOR};text-decoration:underline;">Privacy</a> &nbsp;|&nbsp;
                <a href="${EMAIL_PREFERENCES_URL}" style="color:${BRAND_COLOR};text-decoration:underline;">Email preferences</a>
              </p>
              <p style="margin:0;font-size:11px;color:#aaaaaa;">
                &copy; ${new Date().getFullYear()} Upskill Energy Limited. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

interface TextData {
  heading: string
  name: string
  intro: string
  featuresHeading: string
  features: readonly string[]
  closing: string
  noChargeLine: string
  preferencesLine: string
}

/**
 * Plain-text alternative. `sendEmail` emits multipart/alternative when a
 * text body is supplied, which improves both deliverability and screen
 * reader access.
 */
function renderText(d: TextData): string {
  return [
    d.heading.toUpperCase(),
    '',
    `Hi ${d.name},`,
    '',
    d.intro,
    '',
    d.noChargeLine,
    '',
    `${d.featuresHeading}:`,
    ...d.features.map((f) => `  - ${f}`),
    '',
    'What stays free:',
    `  ${STAYS_FREE_LINE}`,
    '',
    d.closing,
    '',
    `See plans: ${PRICING_URL}`,
    '',
    // House copy rule: no literal double hyphen in prose, so the usual
    // plain-text "---" rule is replaced with a blank-line break.
    '',
    d.preferencesLine,
    'The English Hub is a trading name of Upskill Energy Limited.',
    `Terms: ${TERMS_URL}`,
    `Privacy: ${PRIVACY_URL}`,
  ].join('\n')
}

// ─── Helpers ─────────────────────────────────────────────────────────────

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
