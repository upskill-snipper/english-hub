/**
 * Weekly student digest — email template.
 *
 * A self-contained TSX component rendered to a static HTML string by the
 * `weekly-student-reports` cron. We do NOT depend on `@react-email/*` because
 * it is not in package.json; instead we use `react-dom/server`'s
 * `renderToStaticMarkup` (Next.js 15 / React 19) which is sufficient for
 * transactional email — every style is inlined and the markup is JS-free.
 *
 * Brand alignment (see `src/app/globals.css`):
 *   • Background  — warm cream (#F1E8D6, approximating `--background: 37 47% 92%`).
 *   • Body text   — ink-900 (#15211C, approximating `--foreground: 150 15% 9%`).
 *   • Accent      — clay-600 (#C7521F, slightly darker than `--accent` clay-500
 *                   for a11y contrast on the cream background).
 *   • Layout      — single column, max 560px, no JS, no remote scripts.
 *
 * Children's Code §5 (data minimisation) — the digest only includes:
 *   streak (when enabled), top quiz scores, one focus suggestion, dashboard
 *   link. No grade prediction, no peer comparisons, no ad surfaces.
 */

import * as React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

// ─── Brand tokens (inline-only for email clients) ────────────────────────

const TOKENS = {
  bg: '#F1E8D6', // cream
  surface: '#FFFFFF',
  surfaceMuted: '#E8DCC4', // cream-100
  ink900: '#15211C',
  ink700: '#3B463F',
  ink500: '#6B7670',
  ink200: '#D7D5CF',
  clay600: '#C7521F', // accent
  clay100: '#FBE9DD',
  teal900: '#15403E', // primary
} as const

// ─── Public types ────────────────────────────────────────────────────────

export interface WeeklyStudentQuizScore {
  /** Display title of the quiz / activity. */
  title: string
  /** 0–100 score. */
  score: number
  /** ISO date string of when the quiz was taken (used only for the row label). */
  takenAt: string
}

export interface WeeklyStudentEmailProps {
  /** First name for the greeting (already trusted/escaped — React handles it). */
  firstName: string
  /**
   * Streak in days. Pass `null` to suppress the streak block — the cron MUST
   * pass `null` for any user where streaks are disabled (children: always).
   */
  streakDays: number | null
  /** Top 3 quiz scores from the last 7 days. May be empty. */
  topQuizzes: WeeklyStudentQuizScore[]
  /**
   * One "Focus on X" recommendation. Pass `null` to suppress the block —
   * the cron MUST pass `null` for users with recommendations disabled.
   */
  focusRecommendation: string | null
  /** Absolute URL to the dashboard CTA. */
  dashboardUrl: string
  /** Absolute URL for one-click unsubscribe. */
  unsubscribeUrl: string
}

// ─── Component ───────────────────────────────────────────────────────────

export function WeeklyStudentEmail(props: WeeklyStudentEmailProps): React.ReactElement {
  const { firstName, streakDays, topQuizzes, focusRecommendation, dashboardUrl, unsubscribeUrl } =
    props

  const wrapper: React.CSSProperties = {
    margin: 0,
    padding: '24px 12px',
    backgroundColor: TOKENS.bg,
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    color: TOKENS.ink900,
    lineHeight: 1.5,
  }

  const card: React.CSSProperties = {
    maxWidth: 560,
    margin: '0 auto',
    backgroundColor: TOKENS.surface,
    borderRadius: 12,
    border: `1px solid ${TOKENS.ink200}`,
    overflow: 'hidden',
  }

  const padded: React.CSSProperties = { padding: '24px 28px' }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Your week on The English Hub</title>
      </head>
      <body style={wrapper}>
        {/* Preheader — hidden but used by inbox previews. */}
        <div
          style={{
            display: 'none',
            maxHeight: 0,
            overflow: 'hidden',
            opacity: 0,
            color: TOKENS.bg,
          }}
        >
          Your weekly recap from The English Hub.
        </div>

        <div style={card}>
          {/* Brand strip */}
          <div
            style={{
              padding: '16px 28px',
              backgroundColor: TOKENS.teal900,
              color: TOKENS.bg,
              fontWeight: 600,
              fontSize: 15,
              letterSpacing: '0.04em',
            }}
          >
            The English Hub
          </div>

          {/* Greeting */}
          <div style={padded}>
            <h1
              style={{
                margin: '0 0 8px',
                fontSize: 22,
                fontWeight: 700,
                color: TOKENS.ink900,
              }}
            >
              Hi {firstName}, here's your week
            </h1>
            <p style={{ margin: 0, color: TOKENS.ink700, fontSize: 15 }}>
              A short recap of what you did, and one thing to try next.
            </p>
          </div>

          {/* Streak */}
          {streakDays !== null && streakDays > 0 ? (
            <div style={{ ...padded, paddingTop: 0 }}>
              <div
                style={{
                  borderRadius: 10,
                  border: `1px solid ${TOKENS.clay600}`,
                  backgroundColor: TOKENS.clay100,
                  padding: '14px 16px',
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: 13,
                    color: TOKENS.ink700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  Current streak
                </p>
                <p
                  style={{
                    margin: '4px 0 0',
                    fontSize: 24,
                    fontWeight: 700,
                    color: TOKENS.clay600,
                  }}
                >
                  {streakDays} day{streakDays === 1 ? '' : 's'}
                </p>
              </div>
            </div>
          ) : null}

          {/* Top quizzes */}
          <div style={{ ...padded, paddingTop: streakDays !== null ? 8 : 0 }}>
            <h2
              style={{
                margin: '0 0 10px',
                fontSize: 16,
                fontWeight: 700,
                color: TOKENS.ink900,
              }}
            >
              Top quiz scores this week
            </h2>
            {topQuizzes.length === 0 ? (
              <p style={{ margin: 0, color: TOKENS.ink500, fontSize: 14 }}>
                No quizzes scored this week — give one a try.
              </p>
            ) : (
              <table
                role="presentation"
                cellPadding={0}
                cellSpacing={0}
                style={{ width: '100%', borderCollapse: 'collapse' }}
              >
                <tbody>
                  {topQuizzes.slice(0, 3).map((q, i) => (
                    <tr key={i}>
                      <td
                        style={{
                          padding: '10px 0',
                          borderBottom:
                            i === Math.min(topQuizzes.length, 3) - 1
                              ? 'none'
                              : `1px solid ${TOKENS.ink200}`,
                          fontSize: 14,
                          color: TOKENS.ink900,
                        }}
                      >
                        {q.title}
                      </td>
                      <td
                        style={{
                          padding: '10px 0',
                          borderBottom:
                            i === Math.min(topQuizzes.length, 3) - 1
                              ? 'none'
                              : `1px solid ${TOKENS.ink200}`,
                          fontSize: 14,
                          fontWeight: 700,
                          color: TOKENS.clay600,
                          textAlign: 'right',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {Math.round(q.score)}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* Focus recommendation */}
          {focusRecommendation ? (
            <div style={{ ...padded, paddingTop: 0 }}>
              <div
                style={{
                  borderLeft: `4px solid ${TOKENS.clay600}`,
                  backgroundColor: TOKENS.surfaceMuted,
                  padding: '14px 16px',
                  borderRadius: 4,
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: 12,
                    color: TOKENS.ink700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: 600,
                  }}
                >
                  Focus on
                </p>
                <p
                  style={{
                    margin: '4px 0 0',
                    fontSize: 15,
                    color: TOKENS.ink900,
                    lineHeight: 1.45,
                  }}
                >
                  {focusRecommendation}
                </p>
              </div>
            </div>
          ) : null}

          {/* CTA */}
          <div style={{ ...padded, paddingTop: 8, paddingBottom: 28 }}>
            <a
              href={dashboardUrl}
              style={{
                display: 'inline-block',
                padding: '12px 20px',
                backgroundColor: TOKENS.clay600,
                color: TOKENS.surface,
                textDecoration: 'none',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 14,
              }}
            >
              Open my dashboard
            </a>
          </div>

          {/* Footer */}
          <div
            style={{
              padding: '16px 28px',
              backgroundColor: TOKENS.surfaceMuted,
              borderTop: `1px solid ${TOKENS.ink200}`,
              fontSize: 12,
              color: TOKENS.ink500,
              lineHeight: 1.5,
            }}
          >
            <p style={{ margin: '0 0 6px' }}>
              You're receiving this because you opted in to weekly emails.
            </p>
            <p style={{ margin: 0 }}>
              <a
                href={unsubscribeUrl}
                style={{ color: TOKENS.ink700, textDecoration: 'underline' }}
              >
                Unsubscribe
              </a>
              {' · '}
              The English Hub &middot; Upskill Energy Limited
            </p>
          </div>
        </div>
      </body>
    </html>
  )
}

// ─── Render helpers ──────────────────────────────────────────────────────

/**
 * Renders the email to a complete HTML document string ready for Resend.
 * Prepends the HTML5 doctype because `renderToStaticMarkup` does not.
 */
export function renderWeeklyStudentEmail(props: WeeklyStudentEmailProps): string {
  const markup = renderToStaticMarkup(<WeeklyStudentEmail {...props} />)
  return `<!doctype html>${markup}`
}

/**
 * Plain-text alternative — improves deliverability and accessibility for
 * text-only clients. Mirrors the HTML structure but stripped to essentials.
 */
export function renderWeeklyStudentText(props: WeeklyStudentEmailProps): string {
  const lines: string[] = []
  lines.push(`Hi ${props.firstName}, here's your week on The English Hub.`)
  lines.push('')
  if (props.streakDays !== null && props.streakDays > 0) {
    lines.push(`Current streak: ${props.streakDays} day${props.streakDays === 1 ? '' : 's'}`)
    lines.push('')
  }
  lines.push('Top quiz scores this week:')
  if (props.topQuizzes.length === 0) {
    lines.push('  (no quizzes scored this week)')
  } else {
    for (const q of props.topQuizzes.slice(0, 3)) {
      lines.push(`  - ${q.title}: ${Math.round(q.score)}%`)
    }
  }
  lines.push('')
  if (props.focusRecommendation) {
    lines.push(`Focus on: ${props.focusRecommendation}`)
    lines.push('')
  }
  lines.push(`Open your dashboard: ${props.dashboardUrl}`)
  lines.push('')
  lines.push(`Unsubscribe: ${props.unsubscribeUrl}`)
  lines.push('The English Hub · Upskill Energy Limited')
  return lines.join('\n')
}
