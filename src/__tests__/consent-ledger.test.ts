import { describe, it, expect, vi, beforeEach } from 'vitest'
import type { ConsentType } from '@prisma/client'

/**
 * The consent ledger for a Supabase-native account.
 *
 * THE DEFECT: `Consent.userId` is a foreign key to `User.id`, every caller
 * passes the Supabase auth uuid, and only 8 of 200 real accounts had a
 * `User` row at all. recordConsent therefore threw, production held ZERO
 * AI_PROCESSING rows, and because checkMinorAIConsent requires one, every
 * signed-in learner was refused every AI feature.
 *
 * These tests run the full grant -> read back -> withdraw cycle for an
 * account that has NO Prisma row when it starts.
 */

// ─── In-memory Prisma ───────────────────────────────────────────────────

interface UserRow {
  id: string
  supabaseUserId: string | null
  email: string
  dateOfBirth: Date | null
  isMinor: boolean
  parentId: string | null
  accountStatus: string
}

interface ConsentRow {
  id: string
  userId: string
  consentType: string
  version: string
  granted: boolean
  grantedAt: Date
  withdrawnAt: Date | null
  method: string
  ipAddress: string
}

const db: { users: UserRow[]; consents: ConsentRow[]; auditLogs: Record<string, unknown>[] } = {
  users: [],
  consents: [],
  auditLogs: [],
}

let clock = 0

vi.mock('@/lib/prisma', () => ({
  prisma: {
    user: {
      findFirst: vi.fn(async ({ where }: { where: { supabaseUserId?: string } }) =>
        where?.supabaseUserId
          ? (db.users.find((u) => u.supabaseUserId === where.supabaseUserId) ?? null)
          : null,
      ),
      findUnique: vi.fn(async ({ where }: { where: { id?: string; email?: string } }) => {
        if (where?.id) return db.users.find((u) => u.id === where.id) ?? null
        if (where?.email) return db.users.find((u) => u.email === where.email) ?? null
        return null
      }),
      create: vi.fn(async ({ data }: { data: Record<string, unknown> }) => {
        const row: UserRow = {
          id: `cuid_${db.users.length + 1}`,
          supabaseUserId: (data.supabaseUserId as string) ?? null,
          email: data.email as string,
          dateOfBirth: (data.dateOfBirth as Date) ?? null,
          isMinor: data.isMinor as boolean,
          parentId: null,
          accountStatus: 'ACTIVE',
        }
        db.users.push(row)
        return row
      }),
      update: vi.fn(
        async ({ where, data }: { where: { id: string }; data: Record<string, unknown> }) => {
          const row = db.users.find((u) => u.id === where.id)!
          Object.assign(row, data)
          return row
        },
      ),
    },
    consent: {
      create: vi.fn(async ({ data }: { data: Record<string, unknown> }) => {
        const row: ConsentRow = {
          id: `cns_${db.consents.length + 1}`,
          userId: data.userId as string,
          consentType: data.consentType as string,
          version: data.version as string,
          granted: data.granted as boolean,
          // Monotonic so "most recent record wins" is deterministic.
          grantedAt: new Date(2026, 0, 1, 0, 0, clock++),
          withdrawnAt: (data.withdrawnAt as Date) ?? null,
          method: data.method as string,
          ipAddress: data.ipAddress as string,
        }
        // The real column is a foreign key to User.id. Enforce it here, so a
        // test cannot pass by writing an orphan row the database would reject.
        if (!db.users.some((u) => u.id === row.userId)) {
          throw new Error(`FK violation: no User row with id ${row.userId}`)
        }
        db.consents.push(row)
        return row
      }),
      findMany: vi.fn(async ({ where, orderBy }: any) => {
        const rows = db.consents.filter((c) => c.userId === where.userId)
        const dir = orderBy?.grantedAt === 'desc' ? -1 : 1
        return [...rows].sort((a, b) => dir * (a.grantedAt.getTime() - b.grantedAt.getTime()))
      }),
      findFirst: vi.fn(async ({ where }: any) => {
        const rows = db.consents
          .filter((c) => c.userId === where.userId && c.consentType === where.consentType)
          .sort((a, b) => b.grantedAt.getTime() - a.grantedAt.getTime())
        return rows[0] ?? null
      }),
    },
    auditLog: {
      create: vi.fn(async ({ data }: { data: Record<string, unknown> }) => {
        db.auditLogs.push(data)
        return data
      }),
    },
  },
}))

// ─── Supabase service-role client ───────────────────────────────────────

const profileRow = vi.fn((): Record<string, unknown> | null => null)
let authUser: Record<string, unknown> | null = null

vi.mock('@/lib/supabase/server', () => ({
  createServiceRoleClient: () => ({
    from: () => ({
      select: () => ({
        eq: () => ({
          maybeSingle: async () => ({ data: profileRow(), error: null }),
          single: async () => ({ data: profileRow(), error: null }),
        }),
      }),
    }),
    auth: {
      admin: {
        getUserById: async () => ({
          data: { user: authUser },
          error: authUser ? null : { message: 'not found' },
        }),
      },
    },
  }),
  createServerSupabaseClient: () => ({ auth: { getUser: vi.fn() } }),
}))

const UUID = '11111111-2222-3333-4444-555555555555'

beforeEach(() => {
  db.users = []
  db.consents = []
  db.auditLogs = []
  clock = 0
  profileRow.mockReturnValue(null)
  authUser = { id: UUID, email: 'learner@example.com', created_at: '2026-01-15T09:00:00.000Z' }
})

// ─── Tests ──────────────────────────────────────────────────────────────

describe('consent ledger for a Supabase-native account with no Prisma row', () => {
  it('grants, reads back and withdraws AI processing consent', async () => {
    const {
      recordConsent,
      hasConsent,
      getConsents,
      withdrawConsent,
      CONSENT_TYPES,
      POLICY_VERSIONS,
    } = await import('@/lib/consent')

    // Starting state: this is the production reality for ~192 accounts.
    expect(db.users).toHaveLength(0)
    await expect(hasConsent(UUID, CONSENT_TYPES.AI_PROCESSING)).resolves.toBe(false)

    // GRANT
    const record = await recordConsent(
      UUID,
      CONSENT_TYPES.AI_PROCESSING,
      POLICY_VERSIONS.AI_PROCESSING,
      true,
      'EXPLICIT',
      '198.51.100.7',
    )

    // The row is keyed on the Prisma cuid, not on the Supabase uuid.
    expect(db.users).toHaveLength(1)
    expect(record.userId).toBe(db.users[0].id)
    expect(record.userId).not.toBe(UUID)
    expect(db.consents).toHaveLength(1)

    // READ BACK - under the Supabase uuid, which is all a caller ever has.
    await expect(hasConsent(UUID, CONSENT_TYPES.AI_PROCESSING)).resolves.toBe(true)
    const active = await getConsents(UUID)
    expect(active.map((c) => c.consentType)).toContain('AI_PROCESSING')

    // WITHDRAW - UK GDPR Art.7(3): as easy as giving it.
    await withdrawConsent(UUID, CONSENT_TYPES.AI_PROCESSING, '198.51.100.7')
    await expect(hasConsent(UUID, CONSENT_TYPES.AI_PROCESSING)).resolves.toBe(false)
    expect(await getConsents(UUID)).toHaveLength(0)

    // Append-only: the grant is still on record, alongside the withdrawal.
    expect(db.consents).toHaveLength(2)
    expect(db.consents[0].granted).toBe(true)
    expect(db.consents[1].granted).toBe(false)

    // And both acts are audited.
    expect(db.auditLogs.map((a) => a.action)).toEqual(['CONSENT_GRANTED', 'CONSENT_WITHDRAWN'])
  })

  it('records the withdrawal against the version of the wording withdrawn from', async () => {
    const { recordConsent, withdrawConsent, CONSENT_TYPES, POLICY_VERSIONS } =
      await import('@/lib/consent')

    await recordConsent(
      UUID,
      CONSENT_TYPES.AI_PROCESSING,
      POLICY_VERSIONS.AI_PROCESSING,
      true,
      'EXPLICIT',
      '198.51.100.7',
    )
    const withdrawal = await withdrawConsent(UUID, CONSENT_TYPES.AI_PROCESSING)

    expect(withdrawal.version).toBe(POLICY_VERSIONS.AI_PROCESSING)
    expect(withdrawal.withdrawnAt).not.toBeNull()
  })

  it('projects the account without granting anything on a read', async () => {
    const { getConsents } = await import('@/lib/consent')

    expect(await getConsents(UUID)).toEqual([])
    // The read made the account addressable...
    expect(db.users).toHaveLength(1)
    // ...and recorded no consent for it.
    expect(db.consents).toHaveLength(0)
  })

  it('throws rather than silently dropping a consent it cannot key', async () => {
    authUser = null // no Prisma row and no auth record to project from

    const { recordConsent, CONSENT_TYPES, POLICY_VERSIONS } = await import('@/lib/consent')

    await expect(
      recordConsent(
        UUID,
        CONSENT_TYPES.AI_PROCESSING,
        POLICY_VERSIONS.AI_PROCESSING,
        true,
        'EXPLICIT',
        '198.51.100.7',
      ),
    ).rejects.toThrow(/no user matches id/i)

    expect(db.consents).toHaveLength(0)
  })

  it('still refuses to withdraw the terms and privacy consents', async () => {
    const { withdrawConsent, ESSENTIAL_CONSENT_TYPES, OPTIONAL_CONSENT_TYPES } =
      await import('@/lib/consent')

    await expect(withdrawConsent(UUID, 'TERMS' as ConsentType)).rejects.toThrow(
      /Cannot withdraw essential consent/,
    )
    expect(ESSENTIAL_CONSENT_TYPES).toEqual(['TERMS', 'PRIVACY'])
    // AI processing is withdrawable: the product works without AI, and
    // Art.7(3) requires withdrawal to be as easy as granting.
    expect(OPTIONAL_CONSENT_TYPES).toContain('AI_PROCESSING')
  })

  it('reports no consent, rather than someone else’s, when the account cannot be resolved', async () => {
    authUser = null

    const { hasConsent, getConsents, getConsentHistory, CONSENT_TYPES } =
      await import('@/lib/consent')

    await expect(hasConsent(UUID, CONSENT_TYPES.AI_PROCESSING)).resolves.toBe(false)
    await expect(getConsents(UUID)).resolves.toEqual([])
    await expect(getConsentHistory(UUID)).resolves.toEqual([])
  })
})
