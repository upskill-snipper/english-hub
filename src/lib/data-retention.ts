// Cycle 7 / Identity PR-3: lookups prefer supabaseUserId over email.
import { prisma } from '@/lib/prisma'
import { sendEmail } from '@/lib/email'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { processChildDormancy, type DormancyResult } from '@/lib/privacy/dormancy'

// ─── Retention Periods ──────────────────────────────────────────────────

/** All retention periods aligned with The English Hub data retention policy */
export const RETENTION_PERIODS = {
  /** Account data: retained while active, hard-deleted 30 days after closure */
  ACCOUNT_GRACE_PERIOD_DAYS: 30,

  /** Inactive account warning threshold (2 years) */
  INACTIVE_ACCOUNT_DAYS: 730,

  /** Days after inactivity warning before soft-deleting the account */
  INACTIVE_WARNING_GRACE_DAYS: 30,

  /** Payment/billing records: 7 years (HMRC requirement) */
  PAYMENT_RECORDS_YEARS: 7,

  /** Individual usage/analytics data: 12 months, then anonymised */
  USAGE_DATA_MONTHS: 12,

  /** Support communications: 2 years after resolution */
  SUPPORT_COMMS_YEARS: 2,

  /** Marketing consent records: consent duration + 2 years */
  MARKETING_CONSENT_EXTRA_YEARS: 2,

  /** Safeguarding records: until user turns 25 or 7 years (whichever is longer) */
  SAFEGUARDING_MIN_AGE: 25,
  SAFEGUARDING_MIN_YEARS: 7,
} as const

// ─── Types ──────────────────────────────────────────────────────────────

export interface CleanupSummary {
  startedAt: string
  completedAt: string
  hardDeletedAccounts: string[]
  inactiveWarningsSent: string[]
  inactiveSoftDeleted: string[]
  usageDataAnonymised: number
  supportTicketsArchived: number
  expiredMarketingConsents: number
  childrenPriorityCleanups: number
  /** Children's Code Standard 8 - dormant child account processing */
  childDormancy: DormancyResult | null
  errors: { userId?: string; step: string; message: string }[]
}

export interface RetentionStatus {
  userId: string
  categories: {
    category: string
    dataExists: boolean
    recordCount: number
    retentionPeriod: string
    expiresAt: string | null
    status: 'active' | 'expiring_soon' | 'expired' | 'retained_indefinitely'
  }[]
}

// ─── Helper: date arithmetic ────────────────────────────────────────────

function daysAgo(days: number): Date {
  const d = new Date()
  d.setDate(d.getDate() - days)
  return d
}

function monthsAgo(months: number): Date {
  const d = new Date()
  d.setMonth(d.getMonth() - months)
  return d
}

function yearsAgo(years: number): Date {
  const d = new Date()
  d.setFullYear(d.getFullYear() - years)
  return d
}

// ─── Audit helper ───────────────────────────────────────────────────────

async function auditRetentionAction(
  action: string,
  resourceId: string | null,
  details: Record<string, unknown>,
): Promise<void> {
  await prisma.auditLog.create({
    data: {
      userId: null,
      action,
      resource: 'DataRetention',
      resourceId: resourceId ?? 'system',
      details: {
        ...details,
        automated: true,
        timestamp: new Date().toISOString(),
      },
      ipAddress: 'system',
    },
  })
}

// ─── Main cleanup function ──────────────────────────────────────────────

/**
 * Runs the full data retention cleanup cycle.
 * This should be called by a scheduled cron job (e.g. daily).
 *
 * Processing order:
 *   1. Children's data (priority cleanup per ICO guidance)
 *   2. Soft-deleted accounts past 30-day grace period
 *   3. Inactive accounts (2 years)
 *   4. Usage/analytics data older than 12 months
 *   5. Support tickets older than 2 years
 *   6. Expired marketing consent records
 */
export async function cleanupExpiredData(): Promise<CleanupSummary> {
  const summary: CleanupSummary = {
    startedAt: new Date().toISOString(),
    completedAt: '',
    hardDeletedAccounts: [],
    inactiveWarningsSent: [],
    inactiveSoftDeleted: [],
    usageDataAnonymised: 0,
    supportTicketsArchived: 0,
    expiredMarketingConsents: 0,
    childrenPriorityCleanups: 0,
    childDormancy: null,
    errors: [],
  }

  // ── 1. Priority: children's data cleanup ────────────────────────────

  try {
    const deletedMinors = await prisma.user.findMany({
      where: {
        isMinor: true,
        accountStatus: 'DELETED',
        deletedAt: { lte: daysAgo(RETENTION_PERIODS.ACCOUNT_GRACE_PERIOD_DAYS) },
      },
      select: { id: true },
    })

    for (const user of deletedMinors) {
      try {
        await hardDeleteUser(user.id)
        summary.hardDeletedAccounts.push(user.id)
        summary.childrenPriorityCleanups++
      } catch (err) {
        summary.errors.push({
          userId: user.id,
          step: 'children_hard_delete',
          message: err instanceof Error ? err.message : String(err),
        })
      }
    }
  } catch (err) {
    summary.errors.push({
      step: 'children_cleanup_query',
      message: err instanceof Error ? err.message : String(err),
    })
  }

  // ── 1b. Children's Code Standard 8: dormant child account cleanup ───
  //
  // Child accounts inactive for 12 months (shorter than the general
  // 2-year threshold) are warned and then hard-deleted after a 30-day
  // grace period. This runs before general cleanup to ensure child data
  // minimisation takes priority per ICO guidance.

  try {
    // TODO(Phase-7): test with real Supabase data
    const dormancyResult = await processChildDormancy(prisma)
    summary.childDormancy = dormancyResult

    // Roll child dormancy deletions into the overall hard-delete count
    for (const d of dormancyResult.deletions) {
      summary.hardDeletedAccounts.push(d.userId)
      summary.childrenPriorityCleanups++
    }

    // Roll child dormancy errors into the summary
    summary.errors.push(...dormancyResult.errors)
  } catch (err) {
    summary.errors.push({
      step: 'child_dormancy_processing',
      message: err instanceof Error ? err.message : String(err),
    })
  }

  // ── 2. Hard-delete soft-deleted accounts past 30-day grace period ───

  try {
    const expiredSoftDeletes = await prisma.user.findMany({
      where: {
        accountStatus: 'DELETED',
        isMinor: false, // minors already handled above
        deletedAt: { lte: daysAgo(RETENTION_PERIODS.ACCOUNT_GRACE_PERIOD_DAYS) },
      },
      select: { id: true },
    })

    for (const user of expiredSoftDeletes) {
      try {
        await hardDeleteUser(user.id)
        summary.hardDeletedAccounts.push(user.id)
      } catch (err) {
        summary.errors.push({
          userId: user.id,
          step: 'hard_delete',
          message: err instanceof Error ? err.message : String(err),
        })
      }
    }
  } catch (err) {
    summary.errors.push({
      step: 'expired_soft_delete_query',
      message: err instanceof Error ? err.message : String(err),
    })
  }

  // ── 3. Warn and soft-delete inactive accounts (2 years) ────────────
  // Note: The current schema does not include INACTIVE_WARNED status,
  // lastLoginAt, or inactiveWarnedAt fields. Using SUSPENDED status and
  // updatedAt as proxies until schema is extended.

  try {
    // 3a. Soft-delete accounts that were suspended (warned) 30+ days ago
    const warningCutoff = daysAgo(RETENTION_PERIODS.INACTIVE_WARNING_GRACE_DAYS)

    const readyToSoftDelete = await prisma.user.findMany({
      where: {
        accountStatus: 'SUSPENDED',
        updatedAt: { lte: warningCutoff },
      },
      select: { id: true, email: true },
    })

    for (const user of readyToSoftDelete) {
      try {
        await prisma.user.update({
          where: { id: user.id },
          data: {
            accountStatus: 'DELETED',
            deletedAt: new Date(),
          },
        })

        await auditRetentionAction('INACTIVE_ACCOUNT_SOFT_DELETED', user.id, {
          reason: 'No activity for 2 years + 30-day warning period elapsed',
          email: user.email,
        })

        summary.inactiveSoftDeleted.push(user.id)
      } catch (err) {
        summary.errors.push({
          userId: user.id,
          step: 'inactive_soft_delete',
          message: err instanceof Error ? err.message : String(err),
        })
      }
    }

    // 3b. Send warnings to accounts inactive for 2 years (not already warned)
    const inactiveCutoff = daysAgo(RETENTION_PERIODS.INACTIVE_ACCOUNT_DAYS)

    const inactiveAccounts = await prisma.user.findMany({
      where: {
        accountStatus: 'ACTIVE',
        updatedAt: { lte: inactiveCutoff },
      },
      select: { id: true, email: true, firstName: true },
    })

    for (const user of inactiveAccounts) {
      try {
        await prisma.user.update({
          where: { id: user.id },
          data: {
            accountStatus: 'SUSPENDED',
          },
        })

        const deletionDate = new Date()
        deletionDate.setDate(deletionDate.getDate() + RETENTION_PERIODS.INACTIVE_WARNING_GRACE_DAYS)

        await sendEmail(
          user.email,
          'Your English Hub account will be deleted due to inactivity',
          buildInactivityWarningEmail(
            user.firstName,
            deletionDate.toLocaleDateString('en-GB', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }),
          ),
        )

        await auditRetentionAction('INACTIVE_ACCOUNT_WARNING_SENT', user.id, {
          reason: 'No login for 2+ years',
          deletionScheduledFor: deletionDate.toISOString(),
        })

        summary.inactiveWarningsSent.push(user.id)
      } catch (err) {
        summary.errors.push({
          userId: user.id,
          step: 'inactive_warning',
          message: err instanceof Error ? err.message : String(err),
        })
      }
    }
  } catch (err) {
    summary.errors.push({
      step: 'inactive_accounts_query',
      message: err instanceof Error ? err.message : String(err),
    })
  }

  // ── 4. Anonymise usage/analytics data older than 12 months ─────────
  // [PHASE:schema-extension] Implement when UsageEvent model is added to Prisma schema.

  // ── 5. Archive/delete support tickets older than 2 years ───────────
  // [PHASE:schema-extension] Implement when SupportTicket model is added to Prisma schema.

  // ── 6. Clean up expired marketing consent records ──────────────────

  try {
    const marketingCutoff = yearsAgo(RETENTION_PERIODS.MARKETING_CONSENT_EXTRA_YEARS)

    const expiredMarketingConsents = await prisma.consent.findMany({
      where: {
        consentType: 'MARKETING',
        granted: false,
        withdrawnAt: { lte: marketingCutoff },
      },
      select: { id: true },
    })

    if (expiredMarketingConsents.length > 0) {
      await prisma.consent.deleteMany({
        where: {
          id: { in: expiredMarketingConsents.map((c) => c.id) },
        },
      })

      summary.expiredMarketingConsents = expiredMarketingConsents.length

      await auditRetentionAction('MARKETING_CONSENT_RECORDS_PURGED', null, {
        recordsPurged: expiredMarketingConsents.length,
        cutoffDate: marketingCutoff.toISOString(),
      })
    }
  } catch (err) {
    summary.errors.push({
      step: 'marketing_consent_cleanup',
      message: err instanceof Error ? err.message : String(err),
    })
  }

  summary.completedAt = new Date().toISOString()

  // ── Final audit entry for the entire run ───────────────────────────

  await auditRetentionAction('DATA_RETENTION_CLEANUP_COMPLETED', null, {
    summary: {
      hardDeletedAccounts: summary.hardDeletedAccounts.length,
      inactiveWarningsSent: summary.inactiveWarningsSent.length,
      inactiveSoftDeleted: summary.inactiveSoftDeleted.length,
      usageDataAnonymised: summary.usageDataAnonymised,
      supportTicketsArchived: summary.supportTicketsArchived,
      expiredMarketingConsents: summary.expiredMarketingConsents,
      childrenPriorityCleanups: summary.childrenPriorityCleanups,
      errorCount: summary.errors.length,
    },
  })

  return summary
}

// ─── Anonymise User ─────────────────────────────────────────────────────

/**
 * Replaces all PII with anonymised placeholders.
 * Preserves non-identifying metadata for aggregate reporting.
 * Payment records are retained per HMRC requirements.
 */
export async function anonymiseUser(userId: string): Promise<void> {
  const anonymisedEmail = `deleted-${userId}@anonymised.invalid`

  await prisma.$transaction(
    async (tx: Parameters<Parameters<typeof prisma.$transaction>[0]>[0]) => {
      // 1. Anonymise profile
      await tx.user.update({
        where: { id: userId },
        data: {
          email: anonymisedEmail,
          firstName: 'Deleted',
          lastName: 'User',
          passwordHash: '',
          school: null,
          country: 'ANONYMISED',
          accountStatus: 'DELETED',
          deletedAt: new Date(),
        },
      })

      // 2. Anonymise essay content (keep structure for aggregate stats)
      await tx.essay.updateMany({
        where: { userId },
        data: {
          content: '[Content removed - user data anonymised]',
          title: '[Anonymised]',
        },
      })

      // 3. Remove AI feedback content (linked to essays)
      const essays = await tx.essay.findMany({
        where: { userId },
        select: { id: true },
      })

      if (essays.length > 0) {
        await tx.aIFeedback.updateMany({
          where: { essayId: { in: essays.map((e: { id: string }) => e.id) } },
          data: {
            feedbackText: '[Removed - user data anonymised]',
          },
        })
      }

      // 4. Remove privacy settings
      await tx.privacySettings.deleteMany({
        where: { userId },
      })

      // 5. Usage events - [PHASE:schema-extension] awaiting UsageEvent model

      // 6. Audit
      await tx.auditLog.create({
        data: {
          userId: null,
          action: 'USER_DATA_ANONYMISED',
          resource: 'User',
          resourceId: userId,
          details: {
            reason: 'Data retention policy - anonymisation',
            anonymisedAt: new Date().toISOString(),
          },
          ipAddress: 'system',
        },
      })
    },
  )
}

// ─── Hard Delete User ───────────────────────────────────────────────────

/**
 * Cascade-deletes ALL user data permanently.
 * Payment records are retained separately per HMRC 7-year requirement.
 * Safeguarding records follow separate retention rules.
 *
 * This is irreversible.
 */
export async function hardDeleteUser(userId: string): Promise<void> {
  // Capture the identity info we need to purge the Supabase auth.users row
  // AFTER the Prisma transaction commits and anonymises the email column.
  // Prefer the canonical `supabaseUserId` (populated by PR-1/PR-2) so we
  // can target the auth.users row by UUID directly, avoiding the brittle
  // email-scan fallback that the Cycle 7 convergence plan is closing.
  let supabaseUserId: string | null = null
  let supabaseUserEmail: string | null = null

  await prisma.$transaction(async (tx) => {
    const user = await tx.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        supabaseUserId: true,
        isMinor: true,
        dateOfBirth: true,
      },
    })
    supabaseUserId = user?.supabaseUserId ?? null
    supabaseUserEmail = user?.email ?? null

    if (!user) {
      throw new Error(`User ${userId} not found`)
    }

    // Check safeguarding retention: minors' safeguarding records must be
    // kept until age 25 or 7 years, whichever is longer
    const hasSafeguardingHold = await checkSafeguardingRetention(tx, userId, user.dateOfBirth)

    // 1. Delete AI feedback (depends on essays)
    const essays = await tx.essay.findMany({
      where: { userId },
      select: { id: true },
    })

    if (essays.length > 0) {
      await tx.aIFeedback.deleteMany({
        where: { essayId: { in: essays.map((e: { id: string }) => e.id) } },
      })
    }

    // 2. Delete essays
    await tx.essay.deleteMany({ where: { userId } })

    // 3. Delete consents
    await tx.consent.deleteMany({ where: { userId } })

    // 4. Delete privacy settings
    await tx.privacySettings.deleteMany({ where: { userId } })

    // 5. Delete usage events -- [PHASE:schema-extension] awaiting UsageEvent model

    // 6. Delete data access requests
    await tx.dataAccessRequest.deleteMany({ where: { userId } })

    // 7. Archive support tickets -- [PHASE:schema-extension] awaiting SupportTicket model

    // 8. Delete subscription (but payment invoices are retained separately)
    await tx.subscription.delete({ where: { userId } }).catch(() => {
      // No subscription exists - this is fine
    })

    // 9. Nullify audit log references (keep entries for compliance)
    await tx.auditLog.updateMany({
      where: { userId },
      data: { userId: null },
    })

    // 10. Delete safeguarding reports only if retention period has passed
    if (!hasSafeguardingHold) {
      await tx.safeguardingReport.deleteMany({ where: { reporterId: userId } })
    }

    // 10a. P1 (Cycle 2 data-model): explicitly delete cookie-consent rows
    // tied to this user. CookieConsent has no Prisma @relation with
    // onDelete: Cascade, so it would otherwise orphan with a live userId
    // pointing nowhere, keeping ipHash + userAgent beyond the erasure.
    await tx.cookieConsent.deleteMany({ where: { userId } }).catch(() => {
      // CookieConsent may not have userId populated for anonymous
      // visitors; delete-by-user is best-effort.
    })

    // 11. Delete the user record itself
    await tx.user.delete({ where: { id: userId } })

    // 12. Final audit entry
    await tx.auditLog.create({
      data: {
        userId: null,
        action: 'USER_HARD_DELETED',
        resource: 'User',
        resourceId: userId,
        details: {
          reason: 'Data retention policy - hard deletion',
          wasMinor: user.isMinor,
          safeguardingRecordsRetained: hasSafeguardingHold,
          deletedAt: new Date().toISOString(),
        },
        ipAddress: 'system',
      },
    })
  })

  // 13. P1 (Cycle 2 security): also delete the Supabase auth.users row.
  // The Prisma transaction above only covers Prisma-owned tables; without
  // this step the auth identity, login history, email, password hash,
  // and MFA factors remain in `auth.users` indefinitely - contradicting
  // the "all personal data will be permanently deleted" promise in the
  // parent-deletion email.
  //
  // This runs OUTSIDE the Prisma transaction because Supabase admin
  // calls are HTTP, not Postgres. The Prisma commit has already
  // succeeded by this point, so a Supabase failure leaves the app-side
  // data deleted (compliant direction) with only the Supabase auth
  // record lingering. A retry/reconciliation task can sweep those.
  //
  // Cycle 7 / Identity PR-3: prefer the stored `supabaseUserId` UUID so
  // we can target auth.users directly. Fall back to the email-scan path
  // only when the column is null (pre-backfill rows); that scan was the
  // core bug this convergence plan closes.
  if (supabaseUserId || supabaseUserEmail) {
    try {
      const admin = createServiceRoleClient()
      if (supabaseUserId) {
        // Direct UUID-based deletion - no listUsers scan needed.
        await admin.auth.admin.deleteUser(supabaseUserId)
      } else {
        // Legacy fallback: Prisma row had no supabaseUserId populated.
        // Supabase uses its own UUID for auth.users; our Prisma User.id
        // is a cuid. Find the matching Supabase user by email and delete.
        const { data: authUsers } = await admin.auth.admin.listUsers()
        const match = authUsers?.users.find(
          (u) => u.email?.toLowerCase() === supabaseUserEmail!.toLowerCase(),
        )
        if (match) {
          await admin.auth.admin.deleteUser(match.id)
        }
      }
    } catch (err) {
      // Log but don't throw: Prisma data is already gone. Surface this
      // to monitoring so an operator can finish the job.
      console.error(
        `[hardDeleteUser] Prisma deletion succeeded but Supabase auth.users deletion failed for prisma.User.id=${userId}`,
        err,
      )
      // Best-effort - swallow the error here so the enclosing cron
      // doesn't retry the whole thing (which would fail on the already
      // deleted Prisma row).
    }
  }
}

// ─── Safeguarding retention check ───────────────────────────────────────

/**
 * Safeguarding records must be retained until the user turns 25
 * or for 7 years from the date of the record, whichever is longer.
 */
async function checkSafeguardingRetention(
  tx: Parameters<Parameters<typeof prisma.$transaction>[0]>[0],
  userId: string,
  dateOfBirth: Date,
): Promise<boolean> {
  const reports = await tx.safeguardingReport.findMany({
    where: { reporterId: userId },
    select: { id: true, createdAt: true },
  })

  if (reports.length === 0) return false

  const now = new Date()

  // Check if user is under 25
  const age = Math.floor((now.getTime() - dateOfBirth.getTime()) / (365.25 * 24 * 60 * 60 * 1000))
  if (age < RETENTION_PERIODS.SAFEGUARDING_MIN_AGE) return true

  // Check if any report is less than 7 years old
  const sevenYearsAgo = yearsAgo(RETENTION_PERIODS.SAFEGUARDING_MIN_YEARS)
  const hasRecentReport = reports.some((r) => r.createdAt > sevenYearsAgo)

  return hasRecentReport
}

// ─── Get Retention Status ───────────────────────────────────────────────

/**
 * Returns a detailed breakdown of what data is held for a user
 * and when each category expires under the retention policy.
 */
export async function getRetentionStatus(userId: string): Promise<RetentionStatus> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      accountStatus: true,
      deletedAt: true,
      dateOfBirth: true,
      isMinor: true,
      createdAt: true,
    },
  })

  if (!user) {
    throw new Error(`User ${userId} not found`)
  }

  const now = new Date()

  // Count records in each category
  const [
    essayCount,
    feedbackCount,
    paymentCount,
    usageCount,
    supportCount,
    consentCount,
    safeguardingCount,
  ] = await Promise.all([
    prisma.essay.count({ where: { userId } }),
    prisma.aIFeedback.count({
      where: { essay: { userId } },
    }),
    // paymentRecord model not yet in schema - return 0
    Promise.resolve(0),
    // usageEvent model not yet in schema - return 0
    Promise.resolve(0),
    // supportTicket model not yet in schema - return 0
    Promise.resolve(0),
    prisma.consent.count({ where: { userId, consentType: 'MARKETING' } }),
    prisma.safeguardingReport.count({ where: { reporterId: userId } }),
  ])

  // Calculate expiry dates
  const accountExpiresAt =
    user.accountStatus === 'DELETED' && user.deletedAt
      ? new Date(
          user.deletedAt.getTime() +
            RETENTION_PERIODS.ACCOUNT_GRACE_PERIOD_DAYS * 24 * 60 * 60 * 1000,
        )
      : null

  const paymentExpiresAt =
    paymentCount > 0
      ? new Date(
          now.getFullYear() + RETENTION_PERIODS.PAYMENT_RECORDS_YEARS,
          now.getMonth(),
          now.getDate(),
        )
      : null

  const usageExpiresAt = new Date(now)
  usageExpiresAt.setMonth(usageExpiresAt.getMonth() + RETENTION_PERIODS.USAGE_DATA_MONTHS)

  const supportExpiresAt = new Date(now)
  supportExpiresAt.setFullYear(
    supportExpiresAt.getFullYear() + RETENTION_PERIODS.SUPPORT_COMMS_YEARS,
  )

  // Safeguarding: until age 25 or 7 years
  let safeguardingExpiresAt: Date | null = null
  if (safeguardingCount > 0 && user.dateOfBirth) {
    const age25Date = new Date(user.dateOfBirth)
    age25Date.setFullYear(age25Date.getFullYear() + RETENTION_PERIODS.SAFEGUARDING_MIN_AGE)
    const sevenYearsFromNow = new Date(now)
    sevenYearsFromNow.setFullYear(
      sevenYearsFromNow.getFullYear() + RETENTION_PERIODS.SAFEGUARDING_MIN_YEARS,
    )
    safeguardingExpiresAt = age25Date > sevenYearsFromNow ? age25Date : sevenYearsFromNow
  }

  function status(
    expiresAt: Date | null,
    indefinite: boolean = false,
  ): 'active' | 'expiring_soon' | 'expired' | 'retained_indefinitely' {
    if (indefinite) return 'retained_indefinitely'
    if (!expiresAt) return 'active'
    const daysUntil = Math.ceil((expiresAt.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
    if (daysUntil < 0) return 'expired'
    if (daysUntil < 30) return 'expiring_soon'
    return 'active'
  }

  return {
    userId,
    categories: [
      {
        category: 'Account Data',
        dataExists: true,
        recordCount: 1,
        retentionPeriod: 'While active; 30 days after closure',
        expiresAt: accountExpiresAt?.toISOString() ?? null,
        status: user.accountStatus === 'DELETED' ? status(accountExpiresAt) : 'active',
      },
      {
        category: 'Essays',
        dataExists: essayCount > 0,
        recordCount: essayCount,
        retentionPeriod: 'While account active; user can delete individually',
        expiresAt: accountExpiresAt?.toISOString() ?? null,
        status: essayCount > 0 ? 'active' : 'active',
      },
      {
        category: 'AI Feedback',
        dataExists: feedbackCount > 0,
        recordCount: feedbackCount,
        retentionPeriod: 'Deleted with associated essay',
        expiresAt: null,
        status: feedbackCount > 0 ? 'active' : 'active',
      },
      {
        category: 'Payment Records',
        dataExists: paymentCount > 0,
        recordCount: paymentCount,
        retentionPeriod: '7 years (HMRC requirement)',
        expiresAt: paymentExpiresAt?.toISOString() ?? null,
        status: status(paymentExpiresAt),
      },
      {
        category: 'Usage/Analytics',
        dataExists: usageCount > 0,
        recordCount: usageCount,
        retentionPeriod: '12 months individual; aggregated data retained indefinitely',
        expiresAt: usageExpiresAt.toISOString(),
        status: status(usageExpiresAt),
      },
      {
        category: 'Support Communications',
        dataExists: supportCount > 0,
        recordCount: supportCount,
        retentionPeriod: '2 years after resolution',
        expiresAt: supportExpiresAt.toISOString(),
        status: status(supportExpiresAt),
      },
      {
        category: 'Marketing Consent',
        dataExists: consentCount > 0,
        recordCount: consentCount,
        retentionPeriod: 'Consent duration + 2 years',
        expiresAt: null,
        status: consentCount > 0 ? 'active' : 'active',
      },
      {
        category: 'Safeguarding Records',
        dataExists: safeguardingCount > 0,
        recordCount: safeguardingCount,
        retentionPeriod: 'Until user turns 25 or 7 years (whichever is longer)',
        expiresAt: safeguardingExpiresAt?.toISOString() ?? null,
        status: safeguardingCount > 0 ? status(safeguardingExpiresAt) : 'active',
      },
    ],
  }
}

// ─── Admin: get accounts approaching deletion ──────────────────────────

export interface AccountApproachingDeletion {
  userId: string
  email: string
  firstName: string
  isMinor: boolean
  accountStatus: string
  deletedAt: Date | null
  gracePeriodEndsAt: Date | null
  daysRemaining: number
}

/**
 * Returns accounts that are within the 30-day grace period and
 * approaching permanent deletion.
 */
export async function getAccountsApproachingDeletion(): Promise<AccountApproachingDeletion[]> {
  const deletedAccounts = await prisma.user.findMany({
    where: {
      accountStatus: 'DELETED',
      deletedAt: { not: null },
    },
    select: {
      id: true,
      email: true,
      firstName: true,
      isMinor: true,
      accountStatus: true,
      deletedAt: true,
    },
    orderBy: { deletedAt: 'asc' },
  })

  const now = new Date()

  return deletedAccounts
    .map((u) => {
      const gracePeriodEndsAt = u.deletedAt
        ? new Date(
            u.deletedAt.getTime() +
              RETENTION_PERIODS.ACCOUNT_GRACE_PERIOD_DAYS * 24 * 60 * 60 * 1000,
          )
        : null

      const daysRemaining = gracePeriodEndsAt
        ? Math.ceil((gracePeriodEndsAt.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
        : 0

      return {
        userId: u.id,
        email: u.email,
        firstName: u.firstName,
        isMinor: u.isMinor,
        accountStatus: u.accountStatus,
        deletedAt: u.deletedAt,
        gracePeriodEndsAt,
        daysRemaining,
      }
    })
    .filter((a) => a.daysRemaining > 0) // Only those still within grace period
}

// ─── Admin: retention compliance report ─────────────────────────────────

export interface ComplianceReport {
  generatedAt: string
  totalUsers: number
  activeUsers: number
  deletedUsers: number
  anonymisedUsers: number
  inactiveWarnedUsers: number
  minorUsers: number
  overdueCleanups: {
    category: string
    count: number
    severity: 'low' | 'medium' | 'high'
  }[]
  lastCleanupRun: string | null
  isCompliant: boolean
}

export async function generateComplianceReport(): Promise<ComplianceReport> {
  const now = new Date()

  const [
    totalUsers,
    activeUsers,
    deletedUsers,
    anonymisedUsers,
    inactiveWarnedUsers,
    minorUsers,
    overdueHardDeletes,
    overdueUsageData,
    overdueSupportTickets,
  ] = await Promise.all([
    prisma.user.count(),
    prisma.user.count({ where: { accountStatus: 'ACTIVE' } }),
    prisma.user.count({ where: { accountStatus: 'DELETED' } }),
    // ANONYMISED status not yet in schema - return 0
    Promise.resolve(0),
    // INACTIVE_WARNED status not yet in schema - return 0
    Promise.resolve(0),
    prisma.user.count({ where: { isMinor: true, accountStatus: 'ACTIVE' } }),
    // Accounts past grace period not yet hard-deleted
    prisma.user.count({
      where: {
        accountStatus: 'DELETED',
        deletedAt: {
          lte: daysAgo(RETENTION_PERIODS.ACCOUNT_GRACE_PERIOD_DAYS),
        },
      },
    }),
    // [PHASE:schema-extension] UsageEvent count - awaiting model
    Promise.resolve(0),
    // [PHASE:schema-extension] SupportTicket count - awaiting model
    Promise.resolve(0),
  ])

  // Find last cleanup run from audit log
  const lastCleanupEntry = await prisma.auditLog.findFirst({
    where: { action: 'DATA_RETENTION_CLEANUP_COMPLETED' },
    orderBy: { timestamp: 'desc' },
    select: { timestamp: true },
  })

  const overdueCleanups: ComplianceReport['overdueCleanups'] = []

  if (overdueHardDeletes > 0) {
    overdueCleanups.push({
      category: 'Accounts past grace period',
      count: overdueHardDeletes,
      severity: 'high',
    })
  }

  if (overdueUsageData > 0) {
    overdueCleanups.push({
      category: 'Usage data past 12-month retention',
      count: overdueUsageData,
      severity: 'medium',
    })
  }

  if (overdueSupportTickets > 0) {
    overdueCleanups.push({
      category: 'Support tickets past 2-year retention',
      count: overdueSupportTickets,
      severity: 'low',
    })
  }

  return {
    generatedAt: now.toISOString(),
    totalUsers,
    activeUsers,
    deletedUsers,
    anonymisedUsers,
    inactiveWarnedUsers,
    minorUsers,
    overdueCleanups,
    lastCleanupRun: lastCleanupEntry?.timestamp.toISOString() ?? null,
    isCompliant: overdueCleanups.length === 0,
  }
}

// ─── Email template ─────────────────────────────────────────────────────

function buildInactivityWarningEmail(firstName: string, deletionDate: string): string {
  return `
    <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
      <div style="background-color: #1A5276; padding: 24px; border-radius: 12px 12px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 20px;">The English Hub</h1>
      </div>
      <div style="padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
        <p>Dear ${firstName},</p>
        <p>We noticed that you have not logged in to your English Hub account for over two years.</p>
        <p>In line with our <a href="https://theenglishhub.app/privacy-policy" style="color: #2E86C1;">data retention policy</a>,
           we will automatically delete your account and all associated data on:</p>
        <p style="font-weight: 600; color: #1A5276; font-size: 18px;">${deletionDate}</p>
        <p>To keep your account, simply <a href="https://theenglishhub.app/auth/login" style="color: #2E86C1;">log in</a>
           before this date.</p>
        <p>If you would like to download your data before deletion, you can do so from your
           <a href="https://theenglishhub.app/dashboard/privacy" style="color: #2E86C1;">privacy settings</a>.</p>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
        <p style="font-size: 12px; color: #9ca3af;">
          This email was sent in accordance with our data retention policy under the
          UK General Data Protection Regulation (UK GDPR). If you believe you have received
          this email in error, please contact us at
          <a href="mailto:dpo@theenglishhub.app" style="color: #2E86C1;">dpo@theenglishhub.app</a>.
        </p>
      </div>
    </div>
  `
}
