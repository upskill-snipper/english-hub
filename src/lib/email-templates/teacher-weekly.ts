// ─── Teacher Weekly Email Template ───────────────────────────────────────
//
// Generates a branded HTML email for teachers summarising class-level
// stats, flagging students who need attention, and highlighting top
// performers.
//
// Usage:
//   const { subject, html } = buildTeacherWeeklyEmail(data);
//   await sendEmail(teacher.email, subject, html);
// ─────────────────────────────────────────────────────────────────────────

// ─── Configuration ───────────────────────────────────────────────────────

const BASE_URL = process.env.NEXTAUTH_URL || "https://theenglishhub.app";
const BRAND_COLOR = "#1A5276";
const BRAND_ACCENT = "#2E86C1";
const BRAND_LIGHT = "#D6EAF8";
const ANALYTICS_URL = `${BASE_URL}/school/analytics`;
const UNSUBSCRIBE_URL = `${BASE_URL}/school/settings`;
const TERMS_URL = `${BASE_URL}/terms`;
const PRIVACY_URL = `${BASE_URL}/privacy-policy`;

// ─── Types ───────────────────────────────────────────────────────────────

export interface StudentAttention {
  name: string;
  /** Reason the student is flagged (e.g. "Lowest quiz score: 22%", "Inactive for 5 days") */
  reason: string;
}

export interface TopPerformer {
  name: string;
  /** Achievement description (e.g. "Average score: 94%", "7-day streak") */
  achievement: string;
}

export interface TeacherWeeklyData {
  teacherName: string;
  teacherEmail: string;
  className: string;
  weekStart: Date;
  weekEnd: Date;

  /** Total students in the class */
  totalStudents: number;
  /** Students who were active at least once this week */
  activeStudents: number;

  /** Class average quiz score as a percentage (0-100) */
  averageQuizScore: number | null;
  /** Total quizzes taken across the class */
  totalQuizzesTaken: number;

  /** Students needing attention (low scorers, inactive, etc.) */
  studentsNeedingAttention: StudentAttention[];

  /** Top performers to celebrate */
  topPerformers: TopPerformer[];

  /** Unsubscribe token for one-click unsubscribe */
  unsubscribeToken?: string;
}

// ─── Builder ─────────────────────────────────────────────────────────────

export function buildTeacherWeeklyEmail(
  data: TeacherWeeklyData
): { subject: string; html: string } {
  const dateRange = `${formatDateShort(data.weekStart)} - ${formatDateShort(data.weekEnd)}`;
  const subject = `English Hub Class Report \u2014 ${dateRange}`;

  // ── Engagement rate ──────────────────────────────────────────────────

  const engagementRate =
    data.totalStudents > 0
      ? Math.round((data.activeStudents / data.totalStudents) * 100)
      : 0;
  const engagementColor =
    engagementRate >= 75
      ? "#27AE60"
      : engagementRate >= 50
        ? "#F39C12"
        : "#E74C3C";

  // ── Score display ────────────────────────────────────────────────────

  const scoreDisplay =
    data.averageQuizScore !== null ? `${data.averageQuizScore}%` : "N/A";
  const scoreColor =
    data.averageQuizScore !== null && data.averageQuizScore >= 70
      ? "#27AE60"
      : data.averageQuizScore !== null && data.averageQuizScore >= 50
        ? "#F39C12"
        : "#E74C3C";

  // ── Attention rows ───────────────────────────────────────────────────

  const attentionRows = data.studentsNeedingAttention
    .map(
      (s) => `<tr>
        <td style="padding:8px 12px;font-size:14px;color:#555;border-bottom:1px solid #eee;">${escapeHtml(s.name)}</td>
        <td style="padding:8px 12px;font-size:14px;color:#E74C3C;border-bottom:1px solid #eee;">${escapeHtml(s.reason)}</td>
      </tr>`
    )
    .join("");

  // ── Top performer rows ───────────────────────────────────────────────

  const performerRows = data.topPerformers
    .map(
      (s) => `<tr>
        <td style="padding:8px 12px;font-size:14px;color:#555;border-bottom:1px solid #eee;">${escapeHtml(s.name)}</td>
        <td style="padding:8px 12px;font-size:14px;color:#27AE60;border-bottom:1px solid #eee;">${escapeHtml(s.achievement)}</td>
      </tr>`
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
  <title>Class Report - ${escapeHtml(data.className)}</title>
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
              <p style="margin:8px 0 0 0;color:rgba(255,255,255,0.8);font-size:14px;">Class Weekly Report</p>
            </td>
          </tr>

          <!-- Greeting -->
          <tr>
            <td style="padding:32px 32px 16px 32px;">
              <h2 style="margin:0;color:${BRAND_COLOR};font-size:20px;">Hi ${escapeHtml(data.teacherName)},</h2>
              <p style="margin:8px 0 0 0;font-size:14px;color:#555;line-height:1.5;">
                Here&apos;s the weekly summary for <strong>${escapeHtml(data.className)}</strong>
                (${formatDate(data.weekStart)} &ndash; ${formatDate(data.weekEnd)}).
              </p>
            </td>
          </tr>

          <!-- Class-level stats -->
          <tr>
            <td style="padding:8px 32px 24px 32px;">
              <h3 style="margin:0 0 12px 0;font-size:16px;color:${BRAND_COLOR};">Class Overview</h3>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="25%" align="center" style="padding:14px 6px;background:${BRAND_LIGHT};border-radius:8px 0 0 8px;">
                    <p style="margin:0;font-size:24px;font-weight:700;color:${BRAND_COLOR};">${data.activeStudents}/${data.totalStudents}</p>
                    <p style="margin:4px 0 0 0;font-size:11px;color:#555;">Active Students</p>
                  </td>
                  <td width="25%" align="center" style="padding:14px 6px;background:${BRAND_LIGHT};">
                    <p style="margin:0;font-size:24px;font-weight:700;color:${engagementColor};">${engagementRate}%</p>
                    <p style="margin:4px 0 0 0;font-size:11px;color:#555;">Engagement</p>
                  </td>
                  <td width="25%" align="center" style="padding:14px 6px;background:${BRAND_LIGHT};">
                    <p style="margin:0;font-size:24px;font-weight:700;color:${data.averageQuizScore !== null ? scoreColor : "#888"};">${scoreDisplay}</p>
                    <p style="margin:4px 0 0 0;font-size:11px;color:#555;">Avg Quiz Score</p>
                  </td>
                  <td width="25%" align="center" style="padding:14px 6px;background:${BRAND_LIGHT};border-radius:0 8px 8px 0;">
                    <p style="margin:0;font-size:24px;font-weight:700;color:${BRAND_ACCENT};">${data.totalQuizzesTaken}</p>
                    <p style="margin:4px 0 0 0;font-size:11px;color:#555;">Quizzes Taken</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          ${data.studentsNeedingAttention.length > 0 ? `
          <!-- Students needing attention -->
          <tr>
            <td style="padding:0 32px 24px 32px;">
              <h3 style="margin:0 0 12px 0;font-size:16px;color:#E74C3C;">Students Needing Attention</h3>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #eee;border-radius:8px;overflow:hidden;">
                <tr style="background:#f9f9f9;">
                  <th style="padding:8px 12px;font-size:12px;color:#888;text-align:left;border-bottom:1px solid #eee;">Student</th>
                  <th style="padding:8px 12px;font-size:12px;color:#888;text-align:left;border-bottom:1px solid #eee;">Concern</th>
                </tr>
                ${attentionRows}
              </table>
            </td>
          </tr>` : ""}

          ${data.topPerformers.length > 0 ? `
          <!-- Top performers -->
          <tr>
            <td style="padding:0 32px 24px 32px;">
              <h3 style="margin:0 0 12px 0;font-size:16px;color:#27AE60;">Top Performers</h3>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #eee;border-radius:8px;overflow:hidden;">
                <tr style="background:#f9f9f9;">
                  <th style="padding:8px 12px;font-size:12px;color:#888;text-align:left;border-bottom:1px solid #eee;">Student</th>
                  <th style="padding:8px 12px;font-size:12px;color:#888;text-align:left;border-bottom:1px solid #eee;">Achievement</th>
                </tr>
                ${performerRows}
              </table>
            </td>
          </tr>` : ""}

          <!-- CTA Button -->
          <tr>
            <td style="padding:8px 32px 32px 32px;" align="center">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:${BRAND_COLOR};border-radius:6px;">
                    <a href="${ANALYTICS_URL}" target="_blank" style="display:inline-block;padding:14px 32px;color:#ffffff;font-size:16px;font-weight:600;text-decoration:none;border-radius:6px;">
                      View class dashboard &#8594;
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
                This report was generated automatically for your school dashboard account.
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

function formatDateShort(date: Date): string {
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
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
