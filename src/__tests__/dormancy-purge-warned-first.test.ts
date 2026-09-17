import { describe, it, expect, vi, beforeEach } from 'vitest'

/**
 * A dormant child account may not be purged unless it was warned first.
 *
 * `findDormantChildAccounts`, which drives the Sunday 04:00
 * `/api/cron/dormancy-purge` run, used to select on inactivity alone: no
 * warned-status condition and no grace period, so
 * `CHILD_DORMANCY.WARNING_GRACE_DAYS = 30` gated nothing. A child's account
 * could be stripped - analytics anonymised, email and name overwritten,
 * consents deleted - without the warning email the design promises, and so
 * without the child or their parent getting a chance to log in or export
 * their work.
 *
 * The condition is now the same warned proxy the check cron uses:
 * `accountStatus: 'SUSPENDED'` (what sendDormancyWarning sets) plus
 * `updatedAt` older than the grace period.
 */

vi.mock('@/lib/email', () => ({ sendEmail: vi.fn().mockResolvedValue(undefined) }))
vi.mock('@/lib/data-retention', () => ({ hardDeleteUser: vi.fn().mockResolvedValue(undefined) }))

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

interface Candidate {
  id: string
  dateOfBirth: Date | null
  createdAt: Date
  isMinor: boolean
}

function buildMockPrisma(candidates: Candidate[] = []) {
  const findMany = vi.fn().mockResolvedValue(candidates)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const prisma: any = { user: { findMany } }
  return { prisma, findMany }
}

beforeEach(() => {
  vi.clearAllMocks()
})

describe('findDormantChildAccounts requires a warning before it purges', () => {
  it('asks the database only for accounts already marked SUSPENDED', async () => {
    const { findDormantChildAccounts } = await import('@/lib/privacy/dormancy')
    const { prisma, findMany } = buildMockPrisma([])

    await findDormantChildAccounts(prisma)

    const where = findMany.mock.calls[0][0].where
    expect(where.accountStatus).toBe('SUSPENDED')
  })

  it('requires the 30-day grace period to have elapsed since the warning', async () => {
    const { findDormantChildAccounts, CHILD_DORMANCY } = await import('@/lib/privacy/dormancy')
    const { prisma, findMany } = buildMockPrisma([])

    const before = Date.now()
    await findDormantChildAccounts(prisma)
    const after = Date.now()

    const where = findMany.mock.calls[0][0].where
    expect(where.updatedAt?.lte).toBeInstanceOf(Date)

    const graceMs = CHILD_DORMANCY.WARNING_GRACE_DAYS * 24 * 60 * 60 * 1000
    const cutoff = (where.updatedAt.lte as Date).getTime()
    // The cutoff is "now minus the grace period", computed during the call.
    expect(cutoff).toBeGreaterThanOrEqual(before - graceMs - 5000)
    expect(cutoff).toBeLessThanOrEqual(after - graceMs + 5000)
  })

  it('still keeps the 12-month inactivity condition and the soft-delete guard', async () => {
    const { findDormantChildAccounts } = await import('@/lib/privacy/dormancy')
    const { prisma, findMany } = buildMockPrisma([])

    await findDormantChildAccounts(prisma)

    const where = findMany.mock.calls[0][0].where
    expect(where.deletedAt).toBeNull()
    expect(Array.isArray(where.OR)).toBe(true)
    expect(where.OR[0].lastLoginAt.lte).toBeInstanceOf(Date)
  })

  it('still returns a warned, long-dormant child account - the gate narrows, it does not disable', async () => {
    const { findDormantChildAccounts } = await import('@/lib/privacy/dormancy')
    // The database applied the warned filter; this is what it returns.
    const { prisma } = buildMockPrisma([
      { id: 'child-1', dateOfBirth: yearsAgo(10), createdAt: monthsAgo(13), isMinor: true },
    ])

    await expect(findDormantChildAccounts(prisma)).resolves.toEqual(['child-1'])
  })

  it('never purges an adult account that happens to be dormant', async () => {
    const { findDormantChildAccounts } = await import('@/lib/privacy/dormancy')
    const { prisma } = buildMockPrisma([
      { id: 'adult-1', dateOfBirth: yearsAgo(40), createdAt: monthsAgo(13), isMinor: false },
    ])

    await expect(findDormantChildAccounts(prisma)).resolves.toEqual([])
  })
})
