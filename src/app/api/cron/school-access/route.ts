import { NextRequest, NextResponse } from "next/server";
import { timingSafeEqual } from "crypto";
import { createServiceRoleClient } from "@/lib/supabase/server";
import { sendEmail } from "@/lib/email";

export const dynamic = "force-dynamic";

// ---------------------------------------------------------------------------
// Email template helpers
// ---------------------------------------------------------------------------

const BASE_URL = process.env.NEXTAUTH_URL || "https://theenglishhub.app";
const BRAND_COLOR = "#1A5276";

function formatDate(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function schoolAccessWarningEmail(
  schoolName: string,
  accessUntil: string,
  daysRemaining: number,
  isUrgent: boolean
): string {
  const urgencyColor = isUrgent ? "#c0392b" : BRAND_COLOR;
  const urgencyLabel = isUrgent ? "URGENT: " : "";
  const renewUrl = `${BASE_URL}/school/renew`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>School Access Expiring Soon</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;color:#333333;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;">
    <tr>
      <td align="center" style="padding:24px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;max-width:600px;width:100%;">
          <tr>
            <td style="background:${BRAND_COLOR};padding:24px 32px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;">The English Hub</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;">
              <h2 style="color:${urgencyColor};margin:0 0 16px 0;">${urgencyLabel}Your school access expires in ${daysRemaining} day${daysRemaining === 1 ? "" : "s"}</h2>
              <p style="font-size:16px;line-height:1.6;">
                The Founder access for <strong>${schoolName}</strong> on The English Hub will expire on <strong>${formatDate(accessUntil)}</strong>.
              </p>
              <p style="font-size:16px;line-height:1.6;">
                After this date, teachers and students at your school will lose access to the platform. To keep access, please renew before <strong>${formatDate(accessUntil)}</strong>.
              </p>
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin:24px 0;">
                <tr>
                  <td align="center" style="background:${urgencyColor};border-radius:6px;">
                    <a href="${renewUrl}" target="_blank" style="display:inline-block;padding:14px 32px;color:#ffffff;font-size:16px;font-weight:600;text-decoration:none;border-radius:6px;">Renew School Access</a>
                  </td>
                </tr>
              </table>
              <p style="font-size:13px;color:#888888;line-height:1.5;">
                If you have any questions, please contact us at <a href="mailto:schools@theenglishhub.app" style="color:${BRAND_COLOR};">schools@theenglishhub.app</a>.
              </p>
            </td>
          </tr>
          <tr>
            <td style="background:#f9f9f9;padding:24px 32px;border-top:1px solid #eeeeee;">
              <p style="margin:0;font-size:12px;color:#888888;line-height:1.5;">
                The English Hub is a trading name of <strong>Upskill Energy Limited</strong>.
              </p>
              <p style="margin:8px 0 0 0;font-size:11px;color:#aaaaaa;">
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

function schoolAccessExpiredEmail(schoolName: string, accessUntil: string): string {
  const renewUrl = `${BASE_URL}/school/renew`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>School Access Expired</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;color:#333333;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;">
    <tr>
      <td align="center" style="padding:24px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;max-width:600px;width:100%;">
          <tr>
            <td style="background:${BRAND_COLOR};padding:24px 32px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;">The English Hub</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;">
              <h2 style="color:#c0392b;margin:0 0 16px 0;">Your school access has expired</h2>
              <p style="font-size:16px;line-height:1.6;">
                The Founder access for <strong>${schoolName}</strong> on The English Hub expired on <strong>${formatDate(accessUntil)}</strong>.
              </p>
              <p style="font-size:16px;line-height:1.6;">
                Teachers and students at your school can no longer access the platform. To restore access, please renew your subscription.
              </p>
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin:24px 0;">
                <tr>
                  <td align="center" style="background:#c0392b;border-radius:6px;">
                    <a href="${renewUrl}" target="_blank" style="display:inline-block;padding:14px 32px;color:#ffffff;font-size:16px;font-weight:600;text-decoration:none;border-radius:6px;">Restore School Access</a>
                  </td>
                </tr>
              </table>
              <p style="font-size:13px;color:#888888;line-height:1.5;">
                If you have any questions, please contact us at <a href="mailto:schools@theenglishhub.app" style="color:${BRAND_COLOR};">schools@theenglishhub.app</a>.
              </p>
            </td>
          </tr>
          <tr>
            <td style="background:#f9f9f9;padding:24px 32px;border-top:1px solid #eeeeee;">
              <p style="margin:0;font-size:12px;color:#888888;line-height:1.5;">
                The English Hub is a trading name of <strong>Upskill Energy Limited</strong>.
              </p>
              <p style="margin:8px 0 0 0;font-size:11px;color:#aaaaaa;">
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

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface SchoolRow {
  id: string;
  name: string;
  contact_email: string | null;
  access_type: string | null;
  access_until: string | null;
}

// ---------------------------------------------------------------------------
// GET /api/cron/school-access
//
// Runs daily. Checks all Founder access schools and:
//   1. Marks schools with a passed access_until as 'expired'
//   2. Sends expiry emails to newly expired schools
//   3. Sends urgent warning emails (access_until within 7 days)
//   4. Sends standard warning emails (access_until within 30 days)
//
// Auth: Bearer token matching process.env.CRON_SECRET (timing-safe comparison)
// ---------------------------------------------------------------------------

export async function GET(request: NextRequest) {
  // ── Verify CRON_SECRET ────────────────────────────────────────────────────

  const cronSecret = process.env.CRON_SECRET;
  if (!cronSecret) {
    console.error("[cron/school-access] CRON_SECRET is not set");
    return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
  }

  const authHeader = request.headers.get("authorization");
  const incoming = Buffer.from(authHeader ?? "");
  const expected = Buffer.from(`Bearer ${cronSecret}`);

  if (
    incoming.length !== expected.length ||
    !timingSafeEqual(incoming, expected)
  ) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // ── Query all Founder schools with a set access_until ────────────────────

  const admin = createServiceRoleClient();

  const { data: schools, error: queryError } = await admin
    .from("schools")
    .select("id, name, contact_email, access_type, access_until")
    .eq("access_type", "founder")
    .not("access_until", "is", null);

  if (queryError) {
    console.error("[cron/school-access] Failed to query schools:", queryError);
    return NextResponse.json({ error: "Failed to query schools" }, { status: 500 });
  }

  const rows = (schools ?? []) as SchoolRow[];

  const now = new Date();
  const in7Days = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
  const in30Days = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);

  const expiredIds: string[] = [];
  const emailErrors: string[] = [];
  let expiredCount = 0;
  let warnedCount = 0;

  for (const school of rows) {
    if (!school.access_until) continue;

    const accessUntil = new Date(school.access_until);
    const contactEmail = school.contact_email;

    // ── Expired: access_until has passed ────────────────────────────────────
    if (accessUntil < now) {
      expiredIds.push(school.id);
      expiredCount++;

      if (contactEmail) {
        const html = schoolAccessExpiredEmail(school.name, school.access_until);
        const result = await sendEmail(
          contactEmail,
          `Your school access has expired - ${school.name}`,
          html
        );
        if (!result.success) {
          emailErrors.push(`Expiry email failed for school ${school.id}: ${result.error}`);
        }
      } else {
        console.info(
          `[cron/school-access] No contact email for expired school: ${school.id} (${school.name})`
        );
      }

      continue;
    }

    // ── Urgent warning: within 7 days ────────────────────────────────────────
    if (accessUntil <= in7Days) {
      warnedCount++;

      if (contactEmail) {
        const daysRemaining = Math.ceil(
          (accessUntil.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
        );
        const html = schoolAccessWarningEmail(
          school.name,
          school.access_until,
          daysRemaining,
          true
        );
        const result = await sendEmail(
          contactEmail,
          `URGENT: Your school access expires in ${daysRemaining} day${daysRemaining === 1 ? "" : "s"} - ${school.name}`,
          html
        );
        if (!result.success) {
          emailErrors.push(`Urgent warning email failed for school ${school.id}: ${result.error}`);
        }
      } else {
        console.info(
          `[cron/school-access] No contact email for urgent-warn school: ${school.id} (${school.name})`
        );
      }

      continue;
    }

    // ── Standard warning: within 30 days ─────────────────────────────────────
    if (accessUntil <= in30Days) {
      warnedCount++;

      if (contactEmail) {
        const daysRemaining = Math.ceil(
          (accessUntil.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
        );
        const html = schoolAccessWarningEmail(
          school.name,
          school.access_until,
          daysRemaining,
          false
        );
        const result = await sendEmail(
          contactEmail,
          `Your school access expires in ${daysRemaining} days - ${school.name}`,
          html
        );
        if (!result.success) {
          emailErrors.push(`Warning email failed for school ${school.id}: ${result.error}`);
        }
      } else {
        console.info(
          `[cron/school-access] No contact email for warn school: ${school.id} (${school.name})`
        );
      }
    }
  }

  // ── Bulk-update expired schools ───────────────────────────────────────────

  if (expiredIds.length > 0) {
    const { error: updateError } = await admin
      .from("schools")
      .update({ access_type: "expired" })
      .in("id", expiredIds);

    if (updateError) {
      console.error("[cron/school-access] Failed to mark schools as expired:", updateError);
      return NextResponse.json(
        {
          error: "Failed to update expired schools",
          processed: rows.length,
          expired: expiredCount,
          warned: warnedCount,
          emailErrors,
        },
        { status: 500 }
      );
    }
  }

  if (emailErrors.length > 0) {
    for (const msg of emailErrors) {
      console.error(`[cron/school-access] ${msg}`);
    }
  }

  console.info(
    `[cron/school-access] Done. processed=${rows.length} expired=${expiredCount} warned=${warnedCount} emailErrors=${emailErrors.length}`
  );

  return NextResponse.json({
    processed: rows.length,
    expired: expiredCount,
    warned: warnedCount,
  });
}
