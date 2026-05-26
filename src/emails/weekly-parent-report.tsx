/**
 * Weekly Parent Report - transactional email builder.
 *
 * Produces `{ subject, html, text }` from a {@link WeeklyReportPayload}. The
 * copy is British English, calm in tone, and respectful of Children's Code
 * §5 (no detrimental framing) and §8 (data minimisation - body and
 * rationale are not rendered because the generator never collects them).
 *
 * Shape note: we intentionally ship a hand-rolled HTML string rather than
 * React Email's renderer. The web app's existing parent email template
 * (`src/lib/email-templates/parent-weekly.ts`) uses the same convention,
 * and React Email is not a project dependency. The file is `.tsx` purely
 * to satisfy the scope spec; the component below renders inline-styled
 * HTML suitable for the full spread of email clients.
 */

import type * as React from 'react'
import type { WeeklyReportPayload } from '@/lib/parent-reports/generate'

// ─── Theming (locked to the rest of the transactional suite) ─────────────

const BRAND_COLOR = '#1A5276'
const BRAND_ACCENT = '#2E86C1'
const BRAND_LIGHT = '#D6EAF8'

const APP_BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://theenglishhub.app'
const WEB_PARENT_URL = `${APP_BASE}/parent/progress`
const TERMS_URL = `${APP_BASE}/terms`
const PRIVACY_URL = `${APP_BASE}/privacy-policy`
const UNSUBSCRIBE_URL = `${APP_BASE}/dashboard/parent/settings`

// ─── Inputs ──────────────────────────────────────────────────────────────

export interface WeeklyParentReportEmailProps {
  readonly parentFirstName: string
  readonly parentEmail: string
  readonly report: WeeklyReportPayload
  /** Optional one-click unsubscribe token. */
  readonly unsubscribeToken?: string
}

export interface BuiltEmail {
  readonly subject: string
  readonly html: string
  readonly text: string
}

// ─── Entry point ─────────────────────────────────────────────────────────

export function buildWeeklyParentReportEmail(props: WeeklyParentReportEmailProps): BuiltEmail {
  const { parentFirstName, report, unsubscribeToken } = props
  const subject = `${report.childFirstName}\u2019s English Hub weekly update`

  const hours = Math.floor(report.timeSpentMinutes / 60)
  const minutes = report.timeSpentMinutes % 60
  const timeDisplay = hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`

  const deepLink = `theenglishhub://parent/child/${encodeURIComponent(report.childId)}`

  const unsubscribeHref = unsubscribeToken
    ? `${APP_BASE}/unsubscribe?token=${encodeURIComponent(unsubscribeToken)}`
    : UNSUBSCRIBE_URL

  const strengthsList = (report.strengths.length > 0 ? report.strengths : [])
    .map(
      (b) =>
        `<li style="padding:4px 0;font-size:14px;color:#333;line-height:1.5;">${escapeHtml(b)}</li>`,
    )
    .join('')

  const focusList = (report.focusAreas.length > 0 ? report.focusAreas : [])
    .map(
      (b) =>
        `<li style="padding:4px 0;font-size:14px;color:#333;line-height:1.5;">${escapeHtml(b)}</li>`,
    )
    .join('')

  const averageLine =
    typeof report.averageScore === 'number'
      ? `Average mark: <strong>${report.averageScore}%</strong>`
      : 'No marked essays this week.'

  const html = `<!DOCTYPE html>
<html lang="en-GB">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(subject)}</title>
  </head>
  <body style="margin:0;padding:0;background:#f4f4f4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;color:#333;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;">
      <tr>
        <td align="center" style="padding:24px 16px;">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;max-width:600px;width:100%;">

            <tr>
              <td style="background:${BRAND_COLOR};padding:24px 32px;text-align:center;">
                <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;">The English Hub</h1>
                <p style="margin:8px 0 0 0;color:rgba(255,255,255,0.85);font-size:14px;">Weekly parent update</p>
              </td>
            </tr>

            <tr>
              <td style="padding:28px 32px 8px 32px;">
                <h2 style="margin:0;color:${BRAND_COLOR};font-size:18px;">Hi ${escapeHtml(parentFirstName)},</h2>
                <p style="margin:10px 0 0 0;font-size:14px;color:#555;line-height:1.6;">
                  Here is a short, calm summary of how ${escapeHtml(report.childFirstName)} got on between
                  ${escapeHtml(formatDate(report.weekStartsAt))} and ${escapeHtml(formatDate(report.weekEndsAt))}.
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:16px 32px 8px 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td width="33%" align="center" style="padding:14px 8px;background:${BRAND_LIGHT};border-radius:8px 0 0 8px;">
                      <p style="margin:0;font-size:24px;font-weight:700;color:${BRAND_COLOR};">${report.essaysCompleted}</p>
                      <p style="margin:4px 0 0 0;font-size:11px;color:#555;">Essays this week</p>
                    </td>
                    <td width="34%" align="center" style="padding:14px 8px;background:${BRAND_LIGHT};">
                      <p style="margin:0;font-size:24px;font-weight:700;color:${BRAND_ACCENT};">${escapeHtml(timeDisplay)}</p>
                      <p style="margin:4px 0 0 0;font-size:11px;color:#555;">Time on platform</p>
                    </td>
                    <td width="33%" align="center" style="padding:14px 8px;background:${BRAND_LIGHT};border-radius:0 8px 8px 0;">
                      <p style="margin:0;font-size:24px;font-weight:700;color:${BRAND_COLOR};">${report.streakDays}</p>
                      <p style="margin:4px 0 0 0;font-size:11px;color:#555;">Day streak</p>
                    </td>
                  </tr>
                </table>
                <p style="margin:14px 0 0 0;font-size:14px;color:#555;">${averageLine}</p>
                ${
                  report.assignmentsCompleted > 0
                    ? `<p style="margin:4px 0 0 0;font-size:14px;color:#555;">Assignments completed: <strong>${report.assignmentsCompleted}</strong></p>`
                    : ''
                }
              </td>
            </tr>

            ${
              report.strengths.length > 0
                ? `<tr>
                    <td style="padding:16px 32px 4px 32px;">
                      <h3 style="margin:0 0 6px 0;font-size:15px;color:${BRAND_COLOR};">Strengths this week</h3>
                      <ul style="margin:0;padding-left:20px;">${strengthsList}</ul>
                    </td>
                  </tr>`
                : ''
            }

            ${
              report.focusAreas.length > 0
                ? `<tr>
                    <td style="padding:16px 32px 4px 32px;">
                      <h3 style="margin:0 0 6px 0;font-size:15px;color:${BRAND_ACCENT};">Where there is room to grow</h3>
                      <ul style="margin:0;padding-left:20px;">${focusList}</ul>
                    </td>
                  </tr>`
                : ''
            }

            ${
              report.suggestion
                ? `<tr>
                    <td style="padding:16px 32px 4px 32px;">
                      <h3 style="margin:0 0 6px 0;font-size:15px;color:${BRAND_COLOR};">A small suggestion</h3>
                      <p style="margin:0;font-size:14px;color:#333;line-height:1.6;">${escapeHtml(report.suggestion)}</p>
                    </td>
                  </tr>`
                : ''
            }

            <tr>
              <td align="center" style="padding:24px 32px 8px 32px;">
                <a href="${escapeHtml(deepLink)}" target="_blank"
                   style="display:inline-block;background:${BRAND_COLOR};color:#ffffff;padding:12px 28px;border-radius:6px;font-size:15px;font-weight:600;text-decoration:none;">
                  View in app
                </a>
                <p style="margin:10px 0 0 0;font-size:12px;color:#888;">
                  Not on your phone? <a href="${WEB_PARENT_URL}" style="color:${BRAND_ACCENT};">View on the web</a>.
                </p>
              </td>
            </tr>

            <tr>
              <td style="background:#f9f9f9;padding:20px 32px;border-top:1px solid #eeeeee;">
                <p style="margin:0 0 6px 0;font-size:12px;color:#888;line-height:1.5;">
                  Sent because you are linked to ${escapeHtml(report.childFirstName)}\u2019s account.
                  We do not share essay content with anyone - this update is a summary only.
                </p>
                <p style="margin:0 0 6px 0;font-size:12px;color:#888;line-height:1.5;">
                  <a href="${TERMS_URL}" style="color:${BRAND_COLOR};">Terms</a> &nbsp;|&nbsp;
                  <a href="${PRIVACY_URL}" style="color:${BRAND_COLOR};">Privacy</a> &nbsp;|&nbsp;
                  <a href="${escapeHtml(unsubscribeHref)}" style="color:${BRAND_COLOR};">Unsubscribe</a>
                </p>
                <p style="margin:0;font-size:11px;color:#aaa;">
                  &copy; ${new Date().getFullYear()} Upskill Energy Limited. Liverpool, UK.
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`

  // Accessible plain-text alternative for screen readers and text-only clients.
  const textLines = [
    `Hi ${parentFirstName},`,
    '',
    `Here is a short weekly summary for ${report.childFirstName} (${formatDate(report.weekStartsAt)} to ${formatDate(report.weekEndsAt)}).`,
    '',
    `Essays this week: ${report.essaysCompleted}`,
    `Time on platform: ${timeDisplay}`,
    `Day streak: ${report.streakDays}`,
    typeof report.averageScore === 'number'
      ? `Average mark: ${report.averageScore}%`
      : 'No marked essays this week.',
    report.assignmentsCompleted > 0 ? `Assignments completed: ${report.assignmentsCompleted}` : '',
    '',
    report.strengths.length > 0 ? 'Strengths:' : '',
    ...report.strengths.map((s) => `- ${s}`),
    '',
    report.focusAreas.length > 0 ? 'Where there is room to grow:' : '',
    ...report.focusAreas.map((s) => `- ${s}`),
    '',
    report.suggestion ? `Suggestion: ${report.suggestion}` : '',
    '',
    `View in app: ${deepLink}`,
    `View on the web: ${WEB_PARENT_URL}`,
    '',
    `Unsubscribe: ${unsubscribeHref}`,
  ].filter((l) => l !== '' || true) // keep blank lines for readability

  return { subject, html, text: textLines.join('\n') }
}

// ─── Component export (for future React Email migration) ────────────────
//
// This functional component is a thin wrapper so callers may `import { WeeklyParentReport }`
// if the project later adopts React Email. Today it simply renders a fragment
// around a dangerouslySetInnerHTML of the already-built markup.

export function WeeklyParentReport(props: WeeklyParentReportEmailProps): React.JSX.Element {
  const { html } = buildWeeklyParentReportEmail(props)
  // eslint-disable-next-line react/no-danger
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

// ─── Helpers ─────────────────────────────────────────────────────────────

function formatDate(d: Date): string {
  return d.toLocaleDateString('en-GB', {
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
