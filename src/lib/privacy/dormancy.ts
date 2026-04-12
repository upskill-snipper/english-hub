/**
 * ─── Child Account Dormancy Logic ─────────────────────────────────────────
 *
 * Children's Code (Age Appropriate Design Code) – Standard 8: Data Minimisation
 *
 * Child accounts (isMinor === true at registration) that have been inactive
 * for 12 months are flagged for deletion. A 30-day warning email is sent
 * to the parent/guardian on file before hard-deletion occurs.
 *
 * This is stricter than the general 2-year inactivity threshold applied to
 * adult accounts in `src/lib/data-retention.ts`.
 *
 * Flow:
 *   1. Identify child accounts with last_sign_in_at > 12 months ago
 *   2. If not already warned → send warning email, set dormancyWarnedAt
 *   3. If dormancyWarnedAt > 30 days ago → hard-delete the account
 *   4. Every action is logged to the audit table
 */

import { PrismaClient } from "@prisma/client";
import { sendEmail } from "@/lib/email";
import { hardDeleteUser } from "@/lib/data-retention";

// ─── Constants ─────────────────────────────────────────────────────────────

/** Children's Code requires shorter dormancy period than adults */
export const CHILD_DORMANCY = {
  /** Inactive threshold for child accounts (12 months, per Standard 8) */
  INACTIVE_MONTHS: 12,

  /** Grace period after warning email before hard deletion */
  WARNING_GRACE_DAYS: 30,

  /** Maximum accounts to process per cron run (rate-limiting) */
  BATCH_SIZE: 50,
} as const;

// ─── Types ─────────────────────────────────────────────────────────────────

export interface DormancyResult {
  warningsSent: { userId: string; email: string }[];
  deletions: { userId: string; email: string }[];
  errors: { userId?: string; step: string; message: string }[];
}

// ─── Helpers ───────────────────────────────────────────────────────────────

function monthsAgo(months: number): Date {
  const d = new Date();
  d.setMonth(d.getMonth() - months);
  return d;
}

function daysAgo(days: number): Date {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d;
}

// ─── Audit helper ──────────────────────────────────────────────────────────

async function auditDormancyAction(
  prisma: PrismaClient,
  action: string,
  resourceId: string | null,
  details: Record<string, unknown>
): Promise<void> {
  await prisma.auditLog.create({
    data: {
      userId: null,
      action,
      resource: "ChildDormancy",
      resourceId: resourceId ?? "system",
      details: {
        ...details,
        automated: true,
        complianceStandard: "Children's Code Standard 8 – Data Minimisation",
        timestamp: new Date().toISOString(),
      },
      ipAddress: "system",
    },
  });
}

// ─── Core: identify dormant child accounts ─────────────────────────────────

/**
 * Returns child accounts whose last sign-in was more than 12 months ago
 * and who have NOT yet been warned about pending deletion.
 *
 * // TODO(Phase-7): test with real Supabase data
 * // The `lastLoginAt` field must be populated by Supabase auth hooks.
 * // If your schema uses `updatedAt` as a proxy, adjust the where clause.
 */
export async function findDormantChildren(
  prisma: PrismaClient
): Promise<
  { id: string; email: string; firstName: string; parentEmail: string | null }[]
> {
  const cutoff = monthsAgo(CHILD_DORMANCY.INACTIVE_MONTHS);

  // TODO(Phase-7): test with real Supabase data – `lastLoginAt` may need
  // to be sourced from Supabase auth.users.last_sign_in_at via a join or
  // a synced column. Using `updatedAt` as a fallback proxy here.
  const dormant = await prisma.user.findMany({
    where: {
      isMinor: true,
      accountStatus: "ACTIVE",
      // No dormancy warning sent yet (field may need schema migration)
      // dormancyWarnedAt: null,
      updatedAt: { lte: cutoff },
    },
    select: {
      id: true,
      email: true,
      firstName: true,
    },
    take: CHILD_DORMANCY.BATCH_SIZE,
  });

  // TODO(Phase-7): add parentEmail to User model or fetch from a related
  // ParentGuardian table. For now, parentEmail is null (only the child's
  // own email receives the warning).
  return dormant.map((u) => ({
    id: u.id,
    email: u.email,
    firstName: u.firstName,
    parentEmail: null as string | null,
  }));
}

// ─── Core: identify children whose warning period has elapsed ──────────────

/**
 * Returns child accounts that were warned 30+ days ago and are now
 * eligible for hard-deletion.
 *
 * // TODO(Phase-7): test with real Supabase data
 * // Requires `dormancyWarnedAt` timestamp column on User model.
 * // Until the schema migration lands, this uses SUSPENDED status +
 * // updatedAt as a proxy (same pattern as data-retention.ts).
 */
export async function findChildrenPastGracePeriod(
  prisma: PrismaClient
): Promise<{ id: string; email: string }[]> {
  const graceCutoff = daysAgo(CHILD_DORMANCY.WARNING_GRACE_DAYS);

  // TODO(Phase-7): replace SUSPENDED proxy with:
  //   dormancyWarnedAt: { lte: graceCutoff }
  const ready = await prisma.user.findMany({
    where: {
      isMinor: true,
      accountStatus: "SUSPENDED",
      updatedAt: { lte: graceCutoff },
    },
    select: { id: true, email: true },
    take: CHILD_DORMANCY.BATCH_SIZE,
  });

  return ready;
}

// ─── Core: send dormancy warning ───────────────────────────────────────────

/**
 * Sends a dormancy warning email and marks the account as warned.
 *
 * The email goes to the parent/guardian (if on file) AND the child's own
 * address, because the parent may have set up the account on their behalf.
 */
export async function sendDormancyWarning(
  prisma: PrismaClient,
  user: { id: string; email: string; firstName: string; parentEmail: string | null }
): Promise<void> {
  const deletionDate = new Date();
  deletionDate.setDate(deletionDate.getDate() + CHILD_DORMANCY.WARNING_GRACE_DAYS);

  const formattedDate = deletionDate.toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const html = buildChildDormancyWarningEmail(user.firstName, formattedDate);
  const subject =
    "Your child's English Hub account will be deleted due to inactivity";

  // Send to child's address
  await sendEmail(user.email, subject, html);

  // Also send to parent/guardian if available
  if (user.parentEmail) {
    await sendEmail(user.parentEmail, subject, html);
  }

  // Mark the account as warned
  // TODO(Phase-7): once `dormancyWarnedAt` column exists, set it here
  // instead of changing accountStatus.
  await prisma.user.update({
    where: { id: user.id },
    data: {
      accountStatus: "SUSPENDED",
      // dormancyWarnedAt: new Date(),
    },
  });

  await auditDormancyAction(prisma, "CHILD_DORMANCY_WARNING_SENT", user.id, {
    reason: `No activity for ${CHILD_DORMANCY.INACTIVE_MONTHS}+ months (child account)`,
    deletionScheduledFor: deletionDate.toISOString(),
    parentNotified: !!user.parentEmail,
  });
}

// ─── Core: delete dormant child account ────────────────────────────────────

/**
 * Hard-deletes a child account whose grace period has elapsed.
 * Delegates to the existing `hardDeleteUser` in data-retention.ts,
 * which handles cascade deletion and safeguarding checks.
 */
export async function deleteDormantChild(
  prisma: PrismaClient,
  user: { id: string; email: string }
): Promise<void> {
  // TODO(Phase-7): test with real Supabase data
  await hardDeleteUser(user.id);

  await auditDormancyAction(prisma, "CHILD_DORMANCY_ACCOUNT_DELETED", user.id, {
    reason: `Child account deleted after ${CHILD_DORMANCY.INACTIVE_MONTHS}-month inactivity + ${CHILD_DORMANCY.WARNING_GRACE_DAYS}-day grace period`,
    email: user.email,
  });
}

// ─── Orchestrator ──────────────────────────────────────────────────────────

/**
 * Runs the full child dormancy cycle. Called from the data-retention cron.
 *
 * 1. Delete children whose 30-day grace period has elapsed
 * 2. Send warnings to newly-dormant children (12 months inactive)
 *
 * Deletions run first so that a single cron invocation never sends a
 * warning AND deletes the same user.
 */
export async function processChildDormancy(
  prisma: PrismaClient
): Promise<DormancyResult> {
  const result: DormancyResult = {
    warningsSent: [],
    deletions: [],
    errors: [],
  };

  // ── Step 1: hard-delete accounts past the grace period ────────────────

  try {
    const pastGrace = await findChildrenPastGracePeriod(prisma);

    for (const user of pastGrace) {
      try {
        await deleteDormantChild(prisma, user);
        result.deletions.push({ userId: user.id, email: user.email });
      } catch (err) {
        result.errors.push({
          userId: user.id,
          step: "child_dormancy_delete",
          message: err instanceof Error ? err.message : String(err),
        });
      }
    }
  } catch (err) {
    result.errors.push({
      step: "child_dormancy_delete_query",
      message: err instanceof Error ? err.message : String(err),
    });
  }

  // ── Step 2: send warnings to newly-dormant children ───────────────────

  try {
    const dormant = await findDormantChildren(prisma);

    for (const user of dormant) {
      try {
        await sendDormancyWarning(prisma, user);
        result.warningsSent.push({ userId: user.id, email: user.email });
      } catch (err) {
        result.errors.push({
          userId: user.id,
          step: "child_dormancy_warning",
          message: err instanceof Error ? err.message : String(err),
        });
      }
    }
  } catch (err) {
    result.errors.push({
      step: "child_dormancy_warning_query",
      message: err instanceof Error ? err.message : String(err),
    });
  }

  // ── Audit summary ────────────────────────────────────────────────────

  await auditDormancyAction(prisma, "CHILD_DORMANCY_CYCLE_COMPLETED", null, {
    warningsSent: result.warningsSent.length,
    deletions: result.deletions.length,
    errors: result.errors.length,
  });

  return result;
}

// ─── Email template ────────────────────────────────────────────────────────

/**
 * Warning email for dormant child accounts. Language is kept plain and
 * age-appropriate per the Children's Code. Both the child and parent/
 * guardian receive this.
 */
function buildChildDormancyWarningEmail(
  firstName: string,
  deletionDate: string
): string {
  return `
    <div style="font-family: Inter, Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
      <div style="background-color: #1A5276; padding: 24px; border-radius: 12px 12px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 20px;">The English Hub</h1>
      </div>
      <div style="padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
        <p>Hi ${firstName},</p>

        <p>We noticed that you haven't used your English Hub account for over a year.</p>

        <p>Because your account was created as a child's account, we are required
           by the <strong>Children's Code</strong> to delete accounts that have not
           been used for a long time. This helps keep your personal information safe.</p>

        <p>Your account and all of its data will be permanently deleted on:</p>

        <p style="font-weight: 600; color: #1A5276; font-size: 18px; text-align: center;">
          ${deletionDate}
        </p>

        <h3 style="margin-top: 24px;">What can you do?</h3>
        <ul style="line-height: 1.8;">
          <li><strong>Keep your account</strong> &ndash;
              simply <a href="https://theenglishhub.app/auth/login" style="color: #2E86C1;">log in</a>
              before this date.</li>
          <li><strong>Download your work</strong> &ndash;
              visit your <a href="https://theenglishhub.app/dashboard/privacy" style="color: #2E86C1;">privacy settings</a>
              to export your essays and feedback before deletion.</li>
        </ul>

        <p>If you have any questions, a parent or guardian can email us at
           <a href="mailto:dpo@theenglishhub.app" style="color: #2E86C1;">dpo@theenglishhub.app</a>.</p>

        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
        <p style="font-size: 12px; color: #9ca3af;">
          This email was sent in accordance with the UK Age Appropriate Design Code
          (Children's Code), Standard 8 &ndash; Data Minimisation, and the UK General
          Data Protection Regulation (UK GDPR). If you believe you received this email
          in error, please contact
          <a href="mailto:dpo@theenglishhub.app" style="color: #2E86C1;">dpo@theenglishhub.app</a>.
        </p>
      </div>
    </div>
  `;
}
