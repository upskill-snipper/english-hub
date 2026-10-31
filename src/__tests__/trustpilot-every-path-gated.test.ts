import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { NextRequest } from 'next/server'

/**
 * Every Trustpilot path asks one gate (31 October 2026).
 *
 * 7e701d004 made triggerTrustpilotInvite send only to a KNOWN adult (a real
 * date of birth 18 or over) whom isMarketingAllowed clears. Two paths did not
 * go through it:
 *
 *   - /api/cron/trustpilot-retention-invite sent its own review request to
 *     every ACTIVE row whose period started 90 days ago, filtered only by
 *     `User.isMinor` (which defaults to false and says nothing). It was not
 *     behind TRUSTPILOT_ENABLED, which gated only the BCC inside sendEmail,
 *     and the email had no unsubscribe link or List-Unsubscribe header.
 *   - shouldBccTrustpilot, the gate for that BCC and for the InviteJS
 *     /api/trustpilot/fired-check, kept the lax reading: its own age check
 *     counted the 2000-01-01 placeholder date of birth (written with
 *     isMinor false by the pre-17-September verify route and backfill) as an
 *     adult, and a missing PrivacySettings row as consent.
 *
 * These run the real cron, the real shouldBccTrustpilot and the real
 * resolveEmailAgeGroup, with the identity reads, the marketing read, Prisma
 * and Supabase faked, and a fetch spy standing in for Resend.
 */

const UUID = '11111111-2222-4333-8444-555555555555'
const CUID = 'ckusr_tp_1'
const PLACEHOLDER = '2000-01-01'
const REAL_ADULT = '1990-05-17'

// ─── Identity: the reads beneath the real resolveEmailAgeGroup ────────────

let profileDob: string | null = null
let prismaDob: Date | null = null

vi.mock('@/lib/identity/profiles', () => ({
  readIdentityProfile: async () => ({
    id: UUID,
    date_of_birth: profileDob,
    is_minor: false,
    role: 'student',
  }),
}))
vi.mock('@/lib/identity/lookup', () => ({
  findExistingUser: async () => ({ id: CUID, dateOfBirth: prismaDob, isMinor: false }),
}))

let marketingAllowed = true
vi.mock('@/lib/email/marketing-preference', () => ({
  isMarketingAllowed: async (id: string | null) => id === UUID && marketingAllowed,
}))

// ─── Prisma ───────────────────────────────────────────────────────────────

let privacySettings: { marketingEnabled: boolean; aiOptOut: boolean } | null = null

const prismaUser = () => ({
  id: CUID,
  supabaseUserId: UUID,
  email: 'stale-prisma-copy@example.com',
  firstName: 'Sam',
  deletedAt: null,
  // The default, and what a child with no date of birth carries.
  isMinor: false,
  dateOfBirth: prismaDob,
  privacySettings,
})

vi.mock('@/lib/prisma', () => ({
  prisma: {
    subscription: {
      findMany: async () => [{ userId: CUID, user: prismaUser() }],
    },
    user: { findUnique: async () => prismaUser() },
    cronRun: { create: vi.fn(async () => ({ id: 'run_1' })), update: vi.fn(async () => ({})) },
  },
}))

// ─── Supabase ─────────────────────────────────────────────────────────────

/** trustpilot_invite rows already held, as (user_id, status). */
let priorInvites: Array<{ user_id: string; status: string }> = []
const insertedInvites: Record<string, unknown>[] = []

function inviteQuery() {
  const filters: Array<(r: { user_id: string; status: string }) => boolean> = []
  const q = {
    select: () => q,
    eq: (col: string, val: string) => {
      filters.push((r) => (r as Record<string, string>)[col] === val || col === 'trigger')
      return q
    },
    in: (col: string, vals: string[]) => {
      filters.push((r) => vals.includes((r as Record<string, string>)[col]!))
      return q
    },
    gte: () => q,
    limit: async () => ({
      data: priorInvites.filter((r) => filters.every((f) => f(r))),
      error: null,
    }),
    insert: async (row: Record<string, unknown>) => {
      insertedInvites.push(row)
      return { error: null }
    },
  }
  return q
}

vi.mock('@/lib/supabase/server', () => ({
  createServiceRoleClient: () => ({
    auth: {
      admin: {
        getUserById: async () => ({ data: { user: { id: UUID, email: 'learner@example.com' } } }),
      },
    },
    from: (table: string) => {
      if (table === 'trustpilot_invite') return inviteQuery()
      // cron_runs and anything else the observability wrapper writes.
      const any = {
        insert: () => ({
          select: () => ({ single: async () => ({ data: { id: 'r' }, error: null }) }),
        }),
        update: () => ({ eq: async () => ({ error: null }) }),
        select: () => any,
        eq: () => any,
        single: async () => ({ data: null, error: null }),
      }
      return any
    },
  }),
}))

vi.mock('@/lib/cron/observability', () => ({
  runCron: async (_name: string, fn: () => Promise<unknown>) => Response.json(await fn()),
}))

// ─── Sends ────────────────────────────────────────────────────────────────

let fetchSpy: ReturnType<typeof vi.spyOn>

type ResendBody = {
  to: string
  bcc?: string[]
  subject: string
  html: string
  text?: string
  headers?: Record<string, string>
}

function resendBodies(): ResendBody[] {
  return (fetchSpy.mock.calls as unknown as unknown[][])
    .filter((c) => String(c[0]).includes('api.resend.com'))
    .map((c) => JSON.parse((c[1] as { body: string }).body) as ResendBody)
}

async function runCronRoute(): Promise<Record<string, unknown>> {
  const { GET } = await import('@/app/api/cron/trustpilot-retention-invite/route')
  const res = await GET(
    new NextRequest('http://localhost/api/cron/trustpilot-retention-invite', {
      headers: { authorization: 'Bearer test-cron-secret' },
    }),
  )
  return (await res.json()) as Record<string, unknown>
}

beforeEach(() => {
  profileDob = REAL_ADULT
  prismaDob = null
  marketingAllowed = true
  privacySettings = null
  priorInvites = []
  insertedInvites.length = 0
  process.env.CRON_SECRET = 'test-cron-secret'
  process.env.RESEND_API_KEY = 're_test'
  process.env.TRUSTPILOT_ENABLED = 'true'
  process.env.TRUSTPILOT_INVITE_EMAIL = 'theenglishhub.app+x@invite.trustpilot.com'
  delete process.env.SMTP_HOST
  fetchSpy = vi
    .spyOn(globalThis, 'fetch')
    .mockImplementation(async () => new Response('{"id":"re_1"}', { status: 200 }) as never)
  vi.spyOn(console, 'info').mockImplementation(() => {})
  vi.spyOn(console, 'warn').mockImplementation(() => {})
  vi.spyOn(console, 'error').mockImplementation(() => {})
})

afterEach(() => {
  vi.restoreAllMocks()
  delete process.env.TRUSTPILOT_ENABLED
  delete process.env.TRUSTPILOT_INVITE_EMAIL
  delete process.env.RESEND_API_KEY
})

// ═══════════════════════════════════════════════════════════════════════════

describe('/api/cron/trustpilot-retention-invite', () => {
  it('sends nothing while TRUSTPILOT_ENABLED is off', async () => {
    delete process.env.TRUSTPILOT_ENABLED
    const result = await runCronRoute()
    expect(result.sent).toBe(0)
    expect(resendBodies()).toHaveLength(0)
  })

  it('sends nothing to an account whose age is not known (isMinor false proves nothing)', async () => {
    profileDob = null
    await runCronRoute()
    expect(resendBodies()).toHaveLength(0)
  })

  it('sends nothing on the 2000-01-01 placeholder date of birth', async () => {
    profileDob = PLACEHOLDER
    prismaDob = new Date(`${PLACEHOLDER}T00:00:00.000Z`)
    await runCronRoute()
    expect(resendBodies()).toHaveLength(0)
  })

  it('sends nothing to an adult whom isMarketingAllowed does not clear', async () => {
    marketingAllowed = false
    await runCronRoute()
    expect(resendBodies()).toHaveLength(0)
  })

  it('sends nothing when the other 90-day path already invited them under the Supabase id', async () => {
    priorInvites = [{ user_id: UUID, status: 'sent' }]
    await runCronRoute()
    expect(resendBodies()).toHaveLength(0)
  })

  it('a known adult who may receive marketing gets one, with a way to refuse it', async () => {
    const result = await runCronRoute()
    expect(result.sent).toBe(1)
    const bodies = resendBodies()
    expect(bodies).toHaveLength(1)
    const [b] = bodies
    // The auth address, not the Prisma copy, which can be stale.
    expect(b.to).toBe('learner@example.com')
    expect(b.html).toContain('trustpilot.com/review/theenglishhub.app')
    expect(b.headers?.['List-Unsubscribe']).toMatch(/\/api\/unsubscribe\?token=/)
    expect(b.headers?.['List-Unsubscribe-Post']).toBe('List-Unsubscribe=One-Click')
    expect(b.html).toMatch(/Unsubscribe from marketing email/)
    expect(b.text).toMatch(
      /Unsubscribe from marketing email: https:\/\/theenglishhub\.app\/unsubscribe\?token=/,
    )
  })
})

describe('shouldBccTrustpilot, the gate for the BCC and InviteJS', () => {
  const ask = async () => {
    const { shouldBccTrustpilot } = await import('@/lib/trustpilot/should-bcc')
    const { prisma } = await import('@/lib/prisma')
    return shouldBccTrustpilot({
      userId: CUID,
      trigger: 'student_first_mark',
      prisma: prisma as never,
      now: new Date('2026-10-31T12:00:00.000Z'),
    })
  }

  it('refuses the 2000-01-01 placeholder date of birth', async () => {
    profileDob = PLACEHOLDER
    prismaDob = new Date(`${PLACEHOLDER}T00:00:00.000Z`)
    expect((await ask()).ok).toBe(false)
  })

  it('refuses an account with no date of birth at all', async () => {
    profileDob = null
    expect((await ask()).ok).toBe(false)
  })

  it('refuses when there is no PrivacySettings row and isMarketingAllowed says no', async () => {
    privacySettings = null
    marketingAllowed = false
    expect((await ask()).ok).toBe(false)
  })

  it('allows a known adult whom isMarketingAllowed clears (the control)', async () => {
    expect(await ask()).toEqual({ ok: true })
  })
})
