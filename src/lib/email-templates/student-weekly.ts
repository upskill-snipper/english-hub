// ─── Student Weekly Email Template ───────────────────────────────────────
//
// Generates a branded HTML email summarising a student's weekly revision
// activity and suggesting focus areas for the coming week.
//
// Usage:
//   const { subject, html } = buildStudentWeeklyEmail(data);
//   await sendEmail(student.email, subject, html);
// ─────────────────────────────────────────────────────────────────────────

// ─── Configuration ───────────────────────────────────────────────────────

const BASE_URL = process.env.NEXTAUTH_URL || "https://theenglishhub.app";
const BRAND_COLOR = "#1A5276";
const BRAND_ACCENT = "#2E86C1";
const BRAND_LIGHT = "#D6EAF8";
const REVISION_URL = `${BASE_URL}/revision`;
const UNSUBSCRIBE_URL = `${BASE_URL}/dashboard/settings`;
const TERMS_URL = `${BASE_URL}/terms`;
const PRIVACY_URL = `${BASE_URL}/privacy-policy`;

// ─── Types ───────────────────────────────────────────────────────────────

export interface StudentWeeklyData {
  studentName: string;
  studentEmail: string;
  weekStart: Date;
  weekEnd: Date;

  /** Poems studied this week */
  poemsStudied: string[];
  /** Prose / extract texts studied this week */
  textsStudied: string[];
  /** Games played (e.g. vocabulary, matching) */
  gamesPlayed: number;

  /** Quiz scores as percentages (0-100). Empty array if no quizzes taken. */
  quizScores: number[];

  /** Consecutive days active (streak) */
  streakDays: number;

  /** 1-2 specific focus recommendations for next week */
  suggestedFocus: string[];

  /** Unsubscribe token for one-click unsubscribe */
  unsubscribeToken?: string;
}

// ─── Builder ─────────────────────────────────────────────────────────────

export function buildStudentWeeklyEmail(
  data: StudentWeeklyData
): { subject: string; html: string } {
  const dateRange = `${formatDateShort(data.weekStart)} - ${formatDateShort(data.weekEnd)}`;
  const subject = `Your English Hub Weekly Summary \u2014 ${dateRange}`;

  // ── Studied items ────────────────────────────────────────────────────

  const poemsList = data.poemsStudied.length > 0
    ? data.poemsStudied
        .map((p) => `<li style="padding:3px 0;font-size:14px;color:#555;">${escapeHtml(p)}</li>`)
        .join("")
    : "";

  const textsList = data.textsStudied.length > 0
    ? data.textsStudied
        .map((t) => `<li style="padding:3px 0;font-size:14px;color:#555;">${escapeHtml(t)}</li>`)
        .join("")
    : "";

  const hasStudied =
    data.poemsStudied.length > 0 ||
    data.textsStudied.length > 0 ||
    data.gamesPlayed > 0;

  // ── Quiz summary ─────────────────────────────────────────────────────

  const hasQuizzes = data.quizScores.length > 0;
  const avgScore = hasQuizzes
    ? Math.round(
        data.quizScores.reduce((a, b) => a + b, 0) / data.quizScores.length
      )
    : 0;
  const bestScore = hasQuizzes ? Math.max(...data.quizScores) : 0;

  // ── Streak display ───────────────────────────────────────────────────

  const streakEmoji =
    data.streakDays >= 7
      ? "&#128293;" // fire
      : data.streakDays >= 3
        ? "&#11088;" // star
        : "&#128170;"; // flexed bicep

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
  <title>Weekly Summary - ${escapeHtml(data.studentName)}</title>
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
              <p style="margin:8px 0 0 0;color:rgba(255,255,255,0.8);font-size:14px;">Your Weekly Summary</p>
            </td>
          </tr>

          <!-- Greeting -->
          <tr>
            <td style="padding:32px 32px 16px 32px;">
              <h2 style="margin:0;color:${BRAND_COLOR};font-size:20px;">Hi ${escapeHtml(data.studentName)},</h2>
              <p style="margin:8px 0 0 0;font-size:14px;color:#555;line-height:1.5;">
                Here&apos;s what you got up to on The English Hub this week
                (${formatDate(data.weekStart)} &ndash; ${formatDate(data.weekEnd)}).
              </p>
            </td>
          </tr>

          <!-- Streak banner -->
          <tr>
            <td style="padding:0 32px 24px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:${BRAND_LIGHT};border-radius:8px;padding:16px 20px;text-align:center;">
                    <p style="margin:0;font-size:14px;color:${BRAND_COLOR};font-weight:600;">
                      ${streakEmoji} ${data.streakDays}-day streak ${streakEmoji}
                    </p>
                    <p style="margin:4px 0 0 0;font-size:12px;color:#888;">
                      ${data.streakDays >= 7
                        ? "Amazing consistency \u2014 keep it going!"
                        : data.streakDays >= 3
                          ? "Great momentum this week!"
                          : "Every day counts \u2014 try to build your streak!"}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          ${hasStudied ? `
          <!-- This week you studied -->
          <tr>
            <td style="padding:0 32px 24px 32px;">
              <h3 style="margin:0 0 12px 0;font-size:16px;color:${BRAND_COLOR};">This week you studied:</h3>

              ${data.poemsStudied.length > 0 ? `
              <p style="margin:0 0 6px 0;font-size:13px;font-weight:600;color:#888;text-transform:uppercase;letter-spacing:0.5px;">Poems</p>
              <ul style="margin:0 0 12px 0;padding-left:20px;list-style-type:disc;">
                ${poemsList}
              </ul>` : ""}

              ${data.textsStudied.length > 0 ? `
              <p style="margin:0 0 6px 0;font-size:13px;font-weight:600;color:#888;text-transform:uppercase;letter-spacing:0.5px;">Texts</p>
              <ul style="margin:0 0 12px 0;padding-left:20px;list-style-type:disc;">
                ${textsList}
              </ul>` : ""}

              ${data.gamesPlayed > 0 ? `
              <p style="margin:0;font-size:14px;color:#555;">
                <strong>${data.gamesPlayed}</strong> revision game${data.gamesPlayed !== 1 ? "s" : ""} played
              </p>` : ""}
            </td>
          </tr>` : `
          <!-- No activity -->
          <tr>
            <td style="padding:0 32px 24px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#FEF9E7;border-radius:8px;padding:16px 20px;text-align:center;">
                    <p style="margin:0;font-size:14px;color:#7D6608;font-weight:600;">
                      No revision activity this week
                    </p>
                    <p style="margin:6px 0 0 0;font-size:13px;color:#9A7D0A;">
                      Even 10 minutes a day makes a real difference. Jump back in below!
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>`}

          ${hasQuizzes ? `
          <!-- Quiz scores -->
          <tr>
            <td style="padding:0 32px 24px 32px;">
              <h3 style="margin:0 0 12px 0;font-size:16px;color:${BRAND_COLOR};">Quiz Scores</h3>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="33%" align="center" style="padding:14px 8px;background:${BRAND_LIGHT};border-radius:8px 0 0 8px;">
                    <p style="margin:0;font-size:26px;font-weight:700;color:${BRAND_COLOR};">${data.quizScores.length}</p>
                    <p style="margin:4px 0 0 0;font-size:11px;color:#555;">Quizzes Taken</p>
                  </td>
                  <td width="34%" align="center" style="padding:14px 8px;background:${BRAND_LIGHT};">
                    <p style="margin:0;font-size:26px;font-weight:700;color:${BRAND_ACCENT};">${avgScore}%</p>
                    <p style="margin:4px 0 0 0;font-size:11px;color:#555;">Average Score</p>
                  </td>
                  <td width="33%" align="center" style="padding:14px 8px;background:${BRAND_LIGHT};border-radius:0 8px 8px 0;">
                    <p style="margin:0;font-size:26px;font-weight:700;color:#27AE60;">${bestScore}%</p>
                    <p style="margin:4px 0 0 0;font-size:11px;color:#555;">Best Score</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>` : ""}

          ${data.suggestedFocus.length > 0 ? `
          <!-- Suggested focus -->
          <tr>
            <td style="padding:0 32px 24px 32px;">
              <h3 style="margin:0 0 8px 0;font-size:16px;color:${BRAND_ACCENT};">Suggested focus this week:</h3>
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
                    <a href="${REVISION_URL}" target="_blank" style="display:inline-block;padding:14px 32px;color:#ffffff;font-size:16px;font-weight:600;text-decoration:none;border-radius:6px;">
                      Continue revising &#8594;
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
                You&apos;re receiving this because you have an active English Hub account.
              </p>
              <p style="margin:0 0 8px 0;font-size:12px;color:#888888;line-height:1.5;">
                The English Hub is a trading name of <strong>Upskill Energy Limited</strong>.
              </p>
              <p style="margin:0 0 8px 0;font-size:12px;color:#888888;line-height:1.5;">
                <a href="${TERMS_URL}" style="color:${BRAND_COLOR};text-decoration:underline;">Terms</a> &nbsp;|&nbsp;
                <a href="${PRIVACY_URL}" style="color:${BRAND_COLOR};text-decoration:underline;">Privacy</a> &nbsp;|&nbsp;
                <a href="${unsubLink}" style="color:${BRAND_COLOR};text-decoration:underline;">Unsubscribe</a>
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
