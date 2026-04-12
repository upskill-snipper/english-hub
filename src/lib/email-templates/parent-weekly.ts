// ─── Parent Weekly Email Template ────────────────────────────────────────
//
// Generates a branded HTML email for parents summarising their child's
// weekly activity, quiz scores, and suggested focus areas.
//
// Usage:
//   const { subject, html } = buildParentWeeklyEmail(data);
//   await sendEmail(parent.email, subject, html);
// ─────────────────────────────────────────────────────────────────────────

import { percentageToGCSEGradeLabel } from "@/lib/grades";

// ─── Configuration ───────────────────────────────────────────────────────

const BASE_URL = process.env.NEXTAUTH_URL || "https://theenglishhub.app";
const BRAND_COLOR = "#1A5276";
const BRAND_ACCENT = "#2E86C1";
const BRAND_LIGHT = "#D6EAF8";
const PROGRESS_URL = `${BASE_URL}/parent/progress`;
const UNSUBSCRIBE_URL = `${BASE_URL}/dashboard/parent/settings`;
const TERMS_URL = `${BASE_URL}/terms`;
const PRIVACY_URL = `${BASE_URL}/privacy-policy`;

// ─── Types ───────────────────────────────────────────────────────────────

export interface ParentWeeklyData {
  parentName: string;
  parentEmail: string;
  childName: string;
  weekStart: Date;
  weekEnd: Date;

  /** Content items studied (poems, texts, etc.) */
  itemsStudied: string[];
  /** Games played */
  gamesPlayed: number;

  /** Individual quiz scores as percentages (0-100) */
  quizScores: { quizName: string; score: number }[];

  /** Estimated time spent on the platform in minutes */
  timeSpentMinutes: number;

  /** Consecutive days active */
  streakDays: number;

  /** Suggested focus areas for the coming week */
  suggestedFocus: string[];

  /** Unsubscribe token for one-click unsubscribe */
  unsubscribeToken?: string;
}

// ─── Builder ─────────────────────────────────────────────────────────────

export function buildParentWeeklyEmail(
  data: ParentWeeklyData
): { subject: string; html: string } {
  const subject = `${data.childName}\u2019s English Hub Weekly Report`;

  // ── Time display ─────────────────────────────────────────────────────

  const hours = Math.floor(data.timeSpentMinutes / 60);
  const minutes = data.timeSpentMinutes % 60;
  const timeDisplay =
    hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;

  // ── Quiz summary ─────────────────────────────────────────────────────

  const hasQuizzes = data.quizScores.length > 0;
  const avgScore = hasQuizzes
    ? Math.round(
        data.quizScores.reduce((a, b) => a + b.score, 0) /
          data.quizScores.length
      )
    : 0;

  const quizRows = data.quizScores
    .map((q) => {
      const gradeLabel = percentageToGCSEGradeLabel(q.score);
      const scoreColor =
        q.score >= 70 ? "#27AE60" : q.score >= 50 ? "#F39C12" : "#E74C3C";
      return `<tr>
        <td style="padding:8px 12px;font-size:14px;color:#555;border-bottom:1px solid #eee;">${escapeHtml(q.quizName)}</td>
        <td style="padding:8px 12px;font-size:14px;font-weight:700;color:${scoreColor};text-align:center;border-bottom:1px solid #eee;">${q.score}%</td>
        <td style="padding:8px 12px;font-size:14px;color:#888;text-align:center;border-bottom:1px solid #eee;">${gradeLabel}</td>
      </tr>`;
    })
    .join("");

  // ── Activity summary ─────────────────────────────────────────────────

  const totalItems = data.itemsStudied.length;
  const activitySummary =
    totalItems > 0
      ? `${totalItems} item${totalItems !== 1 ? "s" : ""} studied`
      : "No items studied";

  // ── Focus recommendations ────────────────────────────────────────────

  const focusList = data.suggestedFocus
    .map(
      (f) =>
        `<li style="padding:4px 0;font-size:14px;color:#555;">${escapeHtml(f)}</li>`
    )
    .join("");

  // ── Unsubscribe link ─────────────────────────────────────────────────

  const unsubLink = data.unsubscribeToken
    ? `${BASE_URL}/unsubscribe?token=${data.unsubscribeToken}`
    : UNSUBSCRIBE_URL;

  // ── Build HTML ───────────────────────────────────────────────────────

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Weekly Report - ${escapeHtml(data.childName)}</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;color:#333333;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;">
    <tr>
      <td align="center" style="padding:24px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:${BRAND_COLOR};padding:24px 32px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;">The English Hub</h1>
              <p style="margin:8px 0 0 0;color:rgba(255,255,255,0.8);font-size:14px;">Parent Weekly Report</p>
            </td>
          </tr>

          <!-- Greeting -->
          <tr>
            <td style="padding:32px 32px 16px 32px;">
              <h2 style="margin:0;color:${BRAND_COLOR};font-size:20px;">Hi ${escapeHtml(data.parentName)},</h2>
              <p style="margin:8px 0 0 0;font-size:14px;color:#555;line-height:1.5;">
                Here&apos;s how ${escapeHtml(data.childName)} got on this week
                (${formatDate(data.weekStart)} &ndash; ${formatDate(data.weekEnd)}).
              </p>
            </td>
          </tr>

          <!-- Summary stats -->
          <tr>
            <td style="padding:8px 32px 24px 32px;">
              <h3 style="margin:0 0 12px 0;font-size:16px;color:${BRAND_COLOR};">Your child studied ${totalItems} item${totalItems !== 1 ? "s" : ""} this week</h3>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="33%" align="center" style="padding:14px 8px;background:${BRAND_LIGHT};border-radius:8px 0 0 8px;">
                    <p style="margin:0;font-size:26px;font-weight:700;color:${BRAND_COLOR};">${totalItems}</p>
                    <p style="margin:4px 0 0 0;font-size:11px;color:#555;">Items Studied</p>
                  </td>
                  <td width="34%" align="center" style="padding:14px 8px;background:${BRAND_LIGHT};">
                    <p style="margin:0;font-size:26px;font-weight:700;color:${BRAND_ACCENT};">${timeDisplay}</p>
                    <p style="margin:4px 0 0 0;font-size:11px;color:#555;">Time on Platform</p>
                  </td>
                  <td width="33%" align="center" style="padding:14px 8px;background:${BRAND_LIGHT};border-radius:0 8px 8px 0;">
                    <p style="margin:0;font-size:26px;font-weight:700;color:${BRAND_COLOR};">${data.streakDays}</p>
                    <p style="margin:4px 0 0 0;font-size:11px;color:#555;">Day Streak</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          ${data.itemsStudied.length > 0 ? `
          <!-- Items studied -->
          <tr>
            <td style="padding:0 32px 24px 32px;">
              <p style="margin:0 0 6px 0;font-size:13px;font-weight:600;color:#888;text-transform:uppercase;letter-spacing:0.5px;">Content covered</p>
              <ul style="margin:0 0 8px 0;padding-left:20px;list-style-type:disc;">
                ${data.itemsStudied
                  .map(
                    (item) =>
                      `<li style="padding:3px 0;font-size:14px;color:#555;">${escapeHtml(item)}</li>`
                  )
                  .join("")}
              </ul>
              ${data.gamesPlayed > 0 ? `<p style="margin:0;font-size:14px;color:#555;"><strong>${data.gamesPlayed}</strong> revision game${data.gamesPlayed !== 1 ? "s" : ""} played</p>` : ""}
            </td>
          </tr>` : ""}

          ${hasQuizzes ? `
          <!-- Quiz scores -->
          <tr>
            <td style="padding:0 32px 24px 32px;">
              <h3 style="margin:0 0 12px 0;font-size:16px;color:${BRAND_COLOR};">Quiz Scores &amp; Grades</h3>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #eee;border-radius:8px;overflow:hidden;">
                <tr style="background:#f9f9f9;">
                  <th style="padding:8px 12px;font-size:12px;color:#888;text-align:left;border-bottom:1px solid #eee;">Quiz</th>
                  <th style="padding:8px 12px;font-size:12px;color:#888;text-align:center;border-bottom:1px solid #eee;">Score</th>
                  <th style="padding:8px 12px;font-size:12px;color:#888;text-align:center;border-bottom:1px solid #eee;">GCSE Grade</th>
                </tr>
                ${quizRows}
              </table>
              <p style="margin:12px 0 0 0;font-size:14px;color:#555;">
                Average score: <strong>${avgScore}%</strong>
                (GCSE Grade <strong>${percentageToGCSEGradeLabel(avgScore)}</strong>)
              </p>
            </td>
          </tr>` : ""}

          ${data.suggestedFocus.length > 0 ? `
          <!-- Suggested focus areas -->
          <tr>
            <td style="padding:0 32px 24px 32px;">
              <h3 style="margin:0 0 8px 0;font-size:16px;color:${BRAND_ACCENT};">Suggested Focus Areas</h3>
              <ul style="margin:0;padding-left:20px;list-style-type:disc;">
                ${focusList}
              </ul>
            </td>
          </tr>` : ""}

          <!-- CTA Button -->
          <tr>
            <td style="padding:8px 32px 32px 32px;" align="center">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:${BRAND_COLOR};border-radius:6px;">
                    <a href="${PROGRESS_URL}" target="_blank" style="display:inline-block;padding:14px 32px;color:#ffffff;font-size:16px;font-weight:600;text-decoration:none;border-radius:6px;">
                      View full progress &#8594;
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9f9f9;padding:24px 32px;border-top:1px solid #eeeeee;">
              <p style="margin:0 0 8px 0;font-size:12px;color:#888888;line-height:1.5;">
                This report was generated automatically for your parent dashboard account, included with your child&apos;s subscription.
              </p>
              <p style="margin:0 0 8px 0;font-size:12px;color:#888888;line-height:1.5;">
                The English Hub is a trading name of <strong>Upskill Energy Limited</strong>.
              </p>
              <p style="margin:0 0 8px 0;font-size:12px;color:#888888;line-height:1.5;">
                <a href="${TERMS_URL}" style="color:${BRAND_COLOR};text-decoration:underline;">Terms</a> &nbsp;|&nbsp;
                <a href="${PRIVACY_URL}" style="color:${BRAND_COLOR};text-decoration:underline;">Privacy</a> &nbsp;|&nbsp;
                <a href="${unsubLink}" style="color:${BRAND_COLOR};text-decoration:underline;">Email Preferences</a>
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
</html>`;

  return { subject, html };
}

// ─── Helpers ─────────────────────────────────────────────────────────────

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
