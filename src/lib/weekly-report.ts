import { sendEmail } from "@/lib/email";

// ─── Configuration ────────────────────────────────────────────────────

const BASE_URL = process.env.NEXTAUTH_URL || "https://theenglishhub.app";
const BRAND_COLOR = "#1A5276";
const BRAND_ACCENT = "#2E86C1";
const BRAND_LIGHT = "#D6EAF8";
const DASHBOARD_URL = `${BASE_URL}/dashboard/parent`;
const UNSUBSCRIBE_URL = `${BASE_URL}/dashboard/parent/settings`;
const TERMS_URL = `${BASE_URL}/legal/terms`;
const PRIVACY_URL = `${BASE_URL}/legal/privacy`;

// ─── Types ────────────────────────────────────────────────────────────

export interface WeeklyReportData {
  parentName: string;
  parentEmail: string;
  studentName: string;
  weekStart: Date;
  weekEnd: Date;
  essaysCompleted: number;
  timeSpentMinutes: number;
  averageScoreThisWeek: number;
  averageScoreLastWeek: number;
  projectedGrades: { subject: string; grade: string; target: string }[];
  topStrengths: string[];
  areasForImprovement: string[];
  recommendedNextSteps: string[];
}

// ─── Generate Weekly Report ───────────────────────────────────────────
//
// Compiles weekly data for a specific parent-student pair.
// In production, this queries the database for the student's activity
// during the specified week.

export async function generateWeeklyReport(
  parentId: string,
  studentId: string
): Promise<WeeklyReportData | null> {
  try {
    // TODO: Replace with real database queries using Prisma
    //
    // const parent = await prisma.user.findUnique({ where: { id: parentId } });
    // const student = await prisma.user.findUnique({ where: { id: studentId } });
    // const weekStart = getStartOfWeek(new Date());
    // const weekEnd = getEndOfWeek(new Date());
    //
    // const essays = await prisma.essay.findMany({
    //   where: {
    //     userId: studentId,
    //     createdAt: { gte: weekStart, lte: weekEnd },
    //   },
    //   include: { feedback: true },
    // });
    //
    // const previousWeekEssays = await prisma.essay.findMany({
    //   where: {
    //     userId: studentId,
    //     createdAt: {
    //       gte: subDays(weekStart, 7),
    //       lte: subDays(weekEnd, 7),
    //     },
    //   },
    // });
    //
    // Calculate averages, trends, projected grades, strengths, etc.

    // For now, return mock data structure to demonstrate the shape
    const now = new Date();
    const weekStart = new Date(now);
    weekStart.setDate(now.getDate() - now.getDay() + 1); // Monday
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 6); // Sunday

    // TODO: Remove mock data once database is connected
    const report: WeeklyReportData = {
      parentName: "Parent",
      parentEmail: "parent@example.com",
      studentName: "Student",
      weekStart,
      weekEnd,
      essaysCompleted: 0,
      timeSpentMinutes: 0,
      averageScoreThisWeek: 0,
      averageScoreLastWeek: 0,
      projectedGrades: [],
      topStrengths: [],
      areasForImprovement: [],
      recommendedNextSteps: [],
    };

    return report;
  } catch (error) {
    console.error(
      `[weekly-report] Failed to generate report for parent=${parentId}, student=${studentId}:`,
      error
    );
    return null;
  }
}

// ─── Send Weekly Report ───────────────────────────────────────────────
//
// Sends a branded HTML email with the weekly progress report to the parent.

export async function sendWeeklyReport(
  parentId: string
): Promise<{ success: boolean; sent: number; failed: number }> {
  try {
    // TODO: Replace with real database query
    // const parent = await prisma.user.findUnique({
    //   where: { id: parentId },
    //   include: { linkedStudents: true },
    // });

    // TODO: Fetch linked students from database
    // const linkedStudents = await prisma.parentStudent.findMany({
    //   where: { parentId },
    //   include: { student: true },
    // });

    // For each linked student, generate a report and send
    // TODO: Replace with real student IDs from database
    const mockStudentIds = ["student_1"];
    let sent = 0;
    let failed = 0;

    for (const studentId of mockStudentIds) {
      const report = await generateWeeklyReport(parentId, studentId);

      if (!report) {
        failed++;
        continue;
      }

      const html = buildWeeklyReportEmail(report);
      const subject = `Weekly Progress Report: ${report.studentName} - ${formatDateShort(report.weekStart)} to ${formatDateShort(report.weekEnd)}`;

      const result = await sendEmail(report.parentEmail, subject, html);

      if (result.success) {
        sent++;
      } else {
        failed++;
        console.error(
          `[weekly-report] Failed to send report for student=${studentId}: ${result.error}`
        );
      }
    }

    return { success: failed === 0, sent, failed };
  } catch (error) {
    console.error(
      `[weekly-report] Failed to send reports for parent=${parentId}:`,
      error
    );
    return { success: false, sent: 0, failed: 1 };
  }
}

// ─── Build HTML email ─────────────────────────────────────────────────

function buildWeeklyReportEmail(report: WeeklyReportData): string {
  const scoreDiff =
    report.averageScoreThisWeek - report.averageScoreLastWeek;
  const trendArrow = scoreDiff >= 0 ? "&#9650;" : "&#9660;"; // up or down triangle
  const trendColor = scoreDiff >= 0 ? "#27AE60" : "#E74C3C";
  const trendText =
    scoreDiff >= 0 ? `+${scoreDiff}%` : `${scoreDiff}%`;

  const hours = Math.floor(report.timeSpentMinutes / 60);
  const minutes = report.timeSpentMinutes % 60;
  const timeDisplay =
    hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;

  // Projected grades rows
  const gradesRows = report.projectedGrades
    .map((g) => {
      const projected = parseInt(g.grade);
      const target = parseInt(g.target);
      const gradeColor =
        projected >= target
          ? "#27AE60"
          : projected >= target - 1
            ? "#2E86C1"
            : "#E74C3C";
      return `<tr>
        <td style="padding:8px 12px;font-size:14px;color:#555;border-bottom:1px solid #eee;">${g.subject}</td>
        <td style="padding:8px 12px;font-size:14px;font-weight:700;color:${gradeColor};text-align:center;border-bottom:1px solid #eee;">Grade ${g.grade}</td>
        <td style="padding:8px 12px;font-size:14px;color:#888;text-align:center;border-bottom:1px solid #eee;">Grade ${g.target}</td>
      </tr>`;
    })
    .join("");

  // Strengths list
  const strengthsList = report.topStrengths
    .map(
      (s) =>
        `<li style="padding:4px 0;font-size:14px;color:#555;">${s}</li>`
    )
    .join("");

  // Improvements list
  const improvementsList = report.areasForImprovement
    .map(
      (i) =>
        `<li style="padding:4px 0;font-size:14px;color:#555;">${i}</li>`
    )
    .join("");

  // Recommendations list
  const recommendationsList = report.recommendedNextSteps
    .map(
      (r) =>
        `<li style="padding:4px 0;font-size:14px;color:#555;">${r}</li>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Weekly Progress Report - ${report.studentName}</title>
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
              <p style="margin:8px 0 0 0;color:rgba(255,255,255,0.8);font-size:14px;">Weekly Progress Report</p>
            </td>
          </tr>

          <!-- Student name and week -->
          <tr>
            <td style="padding:32px 32px 0 32px;">
              <h2 style="margin:0;color:${BRAND_COLOR};font-size:20px;">${report.studentName}</h2>
              <p style="margin:4px 0 0 0;font-size:14px;color:#888;">
                Week of ${formatDate(report.weekStart)} &ndash; ${formatDate(report.weekEnd)}
              </p>
            </td>
          </tr>

          <!-- Summary stats -->
          <tr>
            <td style="padding:24px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="33%" align="center" style="padding:16px 8px;background:${BRAND_LIGHT};border-radius:8px 0 0 8px;">
                    <p style="margin:0;font-size:28px;font-weight:700;color:${BRAND_COLOR};">${report.essaysCompleted}</p>
                    <p style="margin:4px 0 0 0;font-size:12px;color:#555;">Essays Completed</p>
                  </td>
                  <td width="34%" align="center" style="padding:16px 8px;background:${BRAND_LIGHT};">
                    <p style="margin:0;font-size:28px;font-weight:700;color:${BRAND_ACCENT};">${timeDisplay}</p>
                    <p style="margin:4px 0 0 0;font-size:12px;color:#555;">Time on Platform</p>
                  </td>
                  <td width="33%" align="center" style="padding:16px 8px;background:${BRAND_LIGHT};border-radius:0 8px 8px 0;">
                    <p style="margin:0;font-size:28px;font-weight:700;color:${BRAND_COLOR};">${report.averageScoreThisWeek}%</p>
                    <p style="margin:4px 0 0 0;font-size:12px;color:#555;">
                      Avg Score
                      <span style="color:${trendColor};font-weight:700;"> ${trendArrow} ${trendText}</span>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          ${report.projectedGrades.length > 0 ? `
          <!-- Projected grades -->
          <tr>
            <td style="padding:0 32px 24px 32px;">
              <h3 style="margin:0 0 12px 0;font-size:16px;color:${BRAND_COLOR};">Projected Grades</h3>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #eee;border-radius:8px;overflow:hidden;">
                <tr style="background:#f9f9f9;">
                  <th style="padding:8px 12px;font-size:12px;color:#888;text-align:left;border-bottom:1px solid #eee;">Subject</th>
                  <th style="padding:8px 12px;font-size:12px;color:#888;text-align:center;border-bottom:1px solid #eee;">Projected</th>
                  <th style="padding:8px 12px;font-size:12px;color:#888;text-align:center;border-bottom:1px solid #eee;">Target</th>
                </tr>
                ${gradesRows}
              </table>
            </td>
          </tr>` : ""}

          ${report.topStrengths.length > 0 ? `
          <!-- Strengths -->
          <tr>
            <td style="padding:0 32px 24px 32px;">
              <h3 style="margin:0 0 8px 0;font-size:16px;color:#27AE60;">Top 3 Strengths</h3>
              <ol style="margin:0;padding-left:20px;list-style-type:decimal;">
                ${strengthsList}
              </ol>
            </td>
          </tr>` : ""}

          ${report.areasForImprovement.length > 0 ? `
          <!-- Areas for improvement -->
          <tr>
            <td style="padding:0 32px 24px 32px;">
              <h3 style="margin:0 0 8px 0;font-size:16px;color:#E74C3C;">Top 3 Areas for Improvement</h3>
              <ol style="margin:0;padding-left:20px;list-style-type:decimal;">
                ${improvementsList}
              </ol>
            </td>
          </tr>` : ""}

          ${report.recommendedNextSteps.length > 0 ? `
          <!-- Recommended next steps -->
          <tr>
            <td style="padding:0 32px 24px 32px;">
              <h3 style="margin:0 0 8px 0;font-size:16px;color:${BRAND_ACCENT};">Recommended Next Steps</h3>
              <ol style="margin:0;padding-left:20px;list-style-type:decimal;">
                ${recommendationsList}
              </ol>
            </td>
          </tr>` : ""}

          <!-- CTA Button -->
          <tr>
            <td style="padding:0 32px 32px 32px;" align="center">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:${BRAND_COLOR};border-radius:6px;">
                    <a href="${DASHBOARD_URL}" target="_blank" style="display:inline-block;padding:14px 32px;color:#ffffff;font-size:16px;font-weight:600;text-decoration:none;border-radius:6px;">
                      View Full Dashboard
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
                This report was generated automatically for your free parent dashboard account, included with your child&apos;s subscription.
              </p>
              <p style="margin:0 0 8px 0;font-size:12px;color:#888888;line-height:1.5;">
                The English Hub is a trading name of <strong>Upskill Energy Limited</strong>.<br />
                Company registration number: [COMPANY_NUMBER]<br />
                Registered address: [REGISTERED_ADDRESS]
              </p>
              <p style="margin:0 0 8px 0;font-size:12px;color:#888888;line-height:1.5;">
                <a href="${TERMS_URL}" style="color:${BRAND_COLOR};text-decoration:underline;">Terms &amp; Conditions</a> &nbsp;|&nbsp;
                <a href="${PRIVACY_URL}" style="color:${BRAND_COLOR};text-decoration:underline;">Privacy Policy</a> &nbsp;|&nbsp;
                <a href="${UNSUBSCRIBE_URL}" style="color:${BRAND_COLOR};text-decoration:underline;">Email Preferences</a>
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
}

// ─── Helpers ──────────────────────────────────────────────────────────

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
