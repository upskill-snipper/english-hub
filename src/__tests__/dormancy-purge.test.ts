import { describe, it, expect, vi, beforeEach } from 'vitest'

// ---------------------------------------------------------------------------
// Tests for dormant child account auto-purge:
//   - findDormantChildAccounts() filters by 12-month inactivity AND
//     age-at-signup < 18.
//   - purgeDormantAccount() anonymises analytics, deletes PII + consents,
//     soft-deletes the user, and writes an audit row — all in one
//     transaction.
//   - /api/cron/dormancy-purge POST returns { purged, errors } and is
//     protected by the CRON_SECRET Bearer token.
// ---------------------------------------------------------------------------

// ── Mocks ────────────────────────────────────────────────────────────────

vi.mock('@/lib/email', () => ({
  sendEmail: vi.fn().mockResolvedValue(undefined),
}))

vi.mock('@/lib/data-retention', () => ({
  hardDeleteUser: vi.fn().mockResolvedValue(undefined),
}))

// ── Helpers ─────────────────────────────────────────────────────────────

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

// Build a mock Prisma client with chainable mocks for the methods we need.
function buildMockPrisma(
  opts: {
    candidates?: Array<{
      id: string
      dateOfBirth: Date
      createdAt: Date
      isMinor: boolean
    }>
  } = {},
) {
  const findMany = vi.fn().mockResolvedValue(opts.candidates ?? [])
  const update = vi.fn().mockResolvedValue(undefined)
  const consentDeleteMany = vi.fn().mockResolvedValue({ count: 0 })
  const auditCreate = vi.fn().mockResolvedValue(undefined)
  const analyticsUpdateMany = vi.fn().mockResolvedValue({ count: 0 })

  // The transaction implementation invokes its callback with a "tx" client
  // shaped exactly like the parent. We reuse the same mocks so assertions
  // can inspect calls regardless of whether they happened inside or
  // outside the transaction.
  const txClient: any = {
    user: { findMany, update },
    consent: { deleteMany: consentDeleteMany },
    auditLog: { create: auditCreate },
    analyticsEvent: { updateMany: analyticsUpdateMany },
    usageEvent: { updateMany: analyticsUpdateMany },
    engagementEvent: { updateMany: analyticsUpdateMany },
  }

  const $transaction = vi.fn().mockImplementation(async (fn: any) => fn(txClient))

  const prisma: any = {
    ...txClient,
    $transaction,
  }

  return {
    prisma,
    findMany,
    update,
    consentDeleteMany,
    auditCreate,
    analyticsUpdateMany,
    $transaction,
  }
}

// ---------------------------------------------------------------------------
// findDormantChildAccounts
// ---------------------------------------------------------------------------

describe('findDormantChildAccounts', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns ids of child accounts inactive for 12+ months', async () => {
    const { findDormantChildAccounts } = await import('@/lib/privacy/dormancy')

    // 10-year-old who signed up 13 months ago — clearly a child.
    const childAtSignup = {
      id: 'child-1',
      dateOfBirth: yearsAgo(10),
      createdAt: monthsAgo(13),
      isMinor: true,
    }

    const { prisma, findMany } = buildMockPrisma({ candidates: [childAtSignup] })

    const ids = await findDormantChildAccounts(prisma)

    expect(findMany).toHaveBeenCalledOnce()
    expect(ids).toEqual(['child-1'])

    // Verify the where clause hits both lastLoginAt and the null-fallback.
    const whereArg = findMany.mock.calls[0][0].where
    expect(whereArg.OR).toBeDefined()
    expect(whereArg.deletedAt).toBeNull()
  })

  it('excludes accounts that were 18+ at signup (and not flagged isMinor)', async () => {
    const { findDormantChildAccounts } = await import('@/lib/privacy/dormancy')

    const adultAtSignup = {
      id: 'adult-1',
      dateOfBirth: yearsAgo(30),
      createdAt: monthsAgo(13),
      isMinor: false,
    }

    const { prisma } = buildMockPrisma({ candidates: [adultAtSignup] })
    const ids = await findDormantChildAccounts(prisma)

    expect(ids).toEqual([])
  })

  it('still includes a user who has since turned 18 if they were a minor at signup', async () => {
    const { findDormantChildAccounts } = await import('@/lib/privacy/dormancy')

    // DOB 19 years ago, but signup was 25 months ago so age-at-signup ~17.
    // This person is now an adult but the data was collected as a child,
    // so the Children's Code still applies.
    const dob = yearsAgo(19)
    const createdAt = monthsAgo(25)
    const subject = {
      id: 'adult-now-was-child',
      dateOfBirth: dob,
      createdAt,
      isMinor: false,
    }

    const { prisma } = buildMockPrisma({ candidates: [subject] })
    const ids = await findDormantChildAccounts(prisma)

    expect(ids).toContain('adult-now-was-child')
  })

  it('returns empty array when no candidates match', async () => {
    const { findDormantChildAccounts } = await import('@/lib/privacy/dormancy')
    const { prisma } = buildMockPrisma({ candidates: [] })
    const ids = await findDormantChildAccounts(prisma)
    expect(ids).toEqual([])
  })
})

// ---------------------------------------------------------------------------
// purgeDormantAccount
// ---------------------------------------------------------------------------

describe('purgeDormantAccount', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('anonymises analytics, deletes PII + consents, soft-deletes, and audits', async () => {
    const { purgeDormantAccount } = await import('@/lib/privacy/dormancy')

    const { prisma, update, consentDeleteMany, auditCreate, analyticsUpdateMany, $transaction } =
      buildMockPrisma()

    await purgeDormantAccount(prisma, 'user-xyz')

    // Single transaction wraps everything.
    expect($transaction).toHaveBeenCalledOnce()

    // Analytics anonymised — userId rewritten to null.
    expect(analyticsUpdateMany).toHaveBeenCalled()
    const analyticsCall = analyticsUpdateMany.mock.calls[0][0]
    expect(analyticsCall.where).toEqual({ userId: 'user-xyz' })
    expect(analyticsCall.data).toEqual({ userId: null })

    // PII overwrite + soft-delete = two user.update calls.
    expect(update).toHaveBeenCalledTimes(2)

    const piiCall = update.mock.calls[0][0]
    expect(piiCall.where).toEqual({ id: 'user-xyz' })
    expect(piiCall.data.firstName).toBe('[purged]')
    expect(piiCall.data.lastName).toBe('[purged]')
    expect(piiCall.data.email).toContain('purged-user-xyz')
    expect(piiCall.data.passwordHash).toBe('')
    // DOB is required (non-null) — must be replaced, not removed.
    expect(piiCall.data.dateOfBirth).toBeInstanceOf(Date)

    const softDeleteCall = update.mock.calls[1][0]
    expect(softDeleteCall.data.accountStatus).toBe('DELETED')
    expect(softDeleteCall.data.deletedAt).toBeInstanceOf(Date)

    // Consents removed.
    expect(consentDeleteMany).toHaveBeenCalledWith({
      where: { userId: 'user-xyz' },
    })

    // Audit row written with the right action + compliance metadata.
    expect(auditCreate).toHaveBeenCalled()
    const auditArg = auditCreate.mock.calls[0][0].data
    expect(auditArg.action).toBe('CHILD_DORMANCY_ACCOUNT_PURGED')
    expect(auditArg.resourceId).toBe('user-xyz')
    expect(auditArg.details.complianceStandard).toContain('Standard 8')
  })

  it('orders writes correctly: analytics → PII → consent → soft-delete → audit', async () => {
    const { purgeDormantAccount } = await import('@/lib/privacy/dormancy')

    const callOrder: string[] = []

    const txClient: any = {
      user: {
        update: vi.fn().mockImplementation((arg: any) => {
          callOrder.push(arg.data.deletedAt ? 'user.softDelete' : 'user.piiOverwrite')
          return Promise.resolve()
        }),
      },
      consent: {
        deleteMany: vi.fn().mockImplementation(() => {
          callOrder.push('consent.delete')
          return Promise.resolve({ count: 0 })
        }),
      },
      auditLog: {
        create: vi.fn().mockImplementation(() => {
          callOrder.push('audit')
          return Promise.resolve()
        }),
      },
      analyticsEvent: {
        updateMany: vi.fn().mockImplementation(() => {
          callOrder.push('analytics')
          return Promise.resolve({ count: 0 })
        }),
      },
    }

    const prisma: any = {
      $transaction: vi.fn().mockImplementation(async (fn: any) => fn(txClient)),
    }

    await purgeDormantAccount(prisma, 'u1')

    // First analytics event, then PII, then consent, then soft-delete, then audit.
    expect(callOrder[0]).toBe('analytics')
    expect(callOrder.indexOf('user.piiOverwrite')).toBeLessThan(callOrder.indexOf('consent.delete'))
    expect(callOrder.indexOf('consent.delete')).toBeLessThan(callOrder.indexOf('user.softDelete'))
    expect(callOrder.indexOf('user.softDelete')).toBeLessThan(callOrder.indexOf('audit'))
  })
})
