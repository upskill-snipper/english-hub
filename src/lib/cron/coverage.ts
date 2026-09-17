/**
 * Retention coverage: how much of the real user base a retention job can see.
 *
 * Every retention and dormancy path enumerates `prisma.user`. On
 * 17 September 2026 that table held 8 rows against 200 Supabase auth users
 * and 200 `profiles` rows, because nothing created the Prisma projection
 * after email confirmation. The crons still returned 200 with low counts,
 * which reads as "nothing to do" rather than "I cannot see 96% of the
 * accounts I am responsible for".
 *
 * Accounts are now projected eagerly at sign-in (see
 * `src/app/api/auth/record-login`), but that converges only for people who
 * come back - and the accounts a retention job exists to act on are exactly
 * the ones that do not. So the gap has to be measured, not assumed closed.
 *
 * This helper does not fix the coverage. It makes the shortfall a number in
 * the cron's own result and an error in the log, so nobody reads a green run
 * as a discharged duty. A read failure is reported as unknown - never as
 * zero, which would be the same silent success in a different disguise.
 */

import { prisma } from '@/lib/prisma'
import { createServiceRoleClient } from '@/lib/supabase/server'

export interface RetentionCoverage {
  /** Rows the job can actually enumerate. */
  prismaUsers: number
  /** Accounts that exist in Supabase `profiles`. Null when unreadable. */
  supabaseProfiles: number | null
  /** profiles - prismaUsers, floored at 0. Null when either side is unknown. */
  unprojectedAccounts: number | null
  /** True when the job demonstrably cannot see part of the user base. */
  incomplete: boolean
  /** Present when a count could not be read. */
  note?: string
}

/**
 * Measure the population gap and log it. Never throws: a coverage check must
 * not be able to fail a retention run.
 */
export async function measureRetentionCoverage(jobName: string): Promise<RetentionCoverage> {
  let prismaUsers = 0
  try {
    prismaUsers = await prisma.user.count({ where: { deletedAt: null } })
  } catch (err) {
    console.error(`[cron/${jobName}] could not count Prisma users for the coverage check:`, err)
    return {
      prismaUsers: 0,
      supabaseProfiles: null,
      unprojectedAccounts: null,
      incomplete: true,
      note: 'Prisma user count unavailable; coverage unknown.',
    }
  }

  let supabaseProfiles: number | null = null
  try {
    const admin = createServiceRoleClient()
    const { count, error } = await admin
      .from('profiles')
      .select('id', { count: 'exact', head: true })
    if (error) throw new Error(error.message)
    supabaseProfiles = typeof count === 'number' ? count : null
  } catch (err) {
    console.error(`[cron/${jobName}] could not count Supabase profiles:`, err)
    return {
      prismaUsers,
      supabaseProfiles: null,
      unprojectedAccounts: null,
      incomplete: true,
      note: 'Supabase profiles count unavailable; coverage unknown.',
    }
  }

  if (supabaseProfiles === null) {
    return {
      prismaUsers,
      supabaseProfiles: null,
      unprojectedAccounts: null,
      incomplete: true,
      note: 'Supabase profiles count unavailable; coverage unknown.',
    }
  }

  const unprojectedAccounts = Math.max(0, supabaseProfiles - prismaUsers)
  const incomplete = unprojectedAccounts > 0

  if (incomplete) {
    console.error(
      `[cron/${jobName}] RETENTION COVERAGE INCOMPLETE: this job enumerates prisma.user ` +
        `(${prismaUsers} rows) but ${supabaseProfiles} accounts exist in Supabase profiles. ` +
        `${unprojectedAccounts} account(s) cannot be seen by this run, so no dormancy warning, ` +
        `purge or retention cleanup can happen for them. This is not "nothing to do".`,
    )
  }

  return { prismaUsers, supabaseProfiles, unprojectedAccounts, incomplete }
}
