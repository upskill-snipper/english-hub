import { describe, it, expect, vi, beforeEach } from 'vitest'

/**
 * A marketing withdrawal in the consent centre is honoured (24 October 2026).
 *
 * Withdrawing MARKETING at /dashboard/consent wrote one Consent row (granted
 * false, withdrawnAt set) and changed neither store isMarketingAllowed read.
 * So an adult who had switched marketing on at /dashboard/privacy, then
 * withdrew it in the consent centre and was told it had been withdrawn, still
 * received the day-14 and day-30 trial emails with the price. These pin the
 * ledger leg: a withdrawal as the latest MARKETING row refuses, an unreadable
 * ledger refuses, and a ledger grant on its own is still not permission.
 */

const UID = '11111111-2222-4333-8444-555555555555'

const state: {
  marketingEnabled: boolean
  latest: { granted: boolean; withdrawnAt: Date | null } | null
  ledgerThrows: boolean
  prismaId: string | null
  ledgerQueries: Array<Record<string, unknown>>
} = {
  marketingEnabled: false,
  latest: null,
  ledgerThrows: false,
  prismaId: 'cuid_1',
  ledgerQueries: [],
}

vi.mock('@/lib/prisma', () => ({
  prisma: {
    privacySettings: {
      findUnique: vi.fn(async () => ({ marketingEnabled: state.marketingEnabled })),
    },
    consent: {
      findFirst: vi.fn(async (args: Record<string, unknown>) => {
        state.ledgerQueries.push(args)
        if (state.ledgerThrows) throw new Error('relation "Consent" is unreachable')
        return state.latest
      }),
    },
  },
}))

vi.mock('@/lib/supabase/server', () => ({
  createServiceRoleClient: () => ({
    from: () => ({
      select: () => ({
        eq: () => ({ maybeSingle: async () => ({ data: { marketing_opt_in: false } }) }),
      }),
    }),
  }),
}))

vi.mock('@/lib/identity', () => ({ tryPrismaUserId: async () => state.prismaId }))

const { isMarketingAllowed } = await import('@/lib/email/marketing-preference')

beforeEach(() => {
  state.marketingEnabled = true
  state.latest = null
  state.ledgerThrows = false
  state.prismaId = 'cuid_1'
  state.ledgerQueries = []
  vi.spyOn(console, 'error').mockImplementation(() => {})
})

describe('isMarketingAllowed and the consent centre', () => {
  it('allows marketing switched on at /dashboard/privacy when the ledger holds nothing', async () => {
    expect(await isMarketingAllowed(UID)).toBe(true)
  })

  it('refuses once the latest MARKETING row is a withdrawal', async () => {
    state.latest = { granted: false, withdrawnAt: new Date() }
    expect(await isMarketingAllowed(UID)).toBe(false)
  })

  it('reads the latest MARKETING row for this account, newest first', async () => {
    await isMarketingAllowed(UID)
    expect(state.ledgerQueries[0]).toMatchObject({
      where: { userId: 'cuid_1', consentType: 'MARKETING' },
      orderBy: [{ grantedAt: 'desc' }, { id: 'desc' }],
    })
  })

  it('allows it again once a newer grant is the latest row', async () => {
    state.latest = { granted: true, withdrawnAt: null }
    expect(await isMarketingAllowed(UID)).toBe(true)
  })

  it('refuses when the ledger cannot be read: it may hold a withdrawal', async () => {
    state.ledgerThrows = true
    expect(await isMarketingAllowed(UID)).toBe(false)
  })

  it('does not treat a ledger grant as permission when the stores say no', async () => {
    state.marketingEnabled = false
    state.latest = { granted: true, withdrawnAt: null }
    expect(await isMarketingAllowed(UID)).toBe(false)
  })

  it('refuses when the account cannot be resolved, since neither store nor ledger can be read', async () => {
    state.prismaId = null
    expect(await isMarketingAllowed(UID)).toBe(false)
    expect(await isMarketingAllowed(null)).toBe(false)
  })
})
