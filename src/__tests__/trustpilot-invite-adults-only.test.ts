import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

/**
 * A Trustpilot invitation goes only to a known adult who may receive
 * marketing (24 October 2026).
 *
 * triggerTrustpilotInvite skipped a user only when Prisma `User.isMinor` was
 * true, and hard-coded `optedOut = false`. `isMinor` defaults to false and a
 * false carries no information (src/lib/identity/age.ts): a child with no
 * date of birth on file, or a stale flag, read as an adult. So with
 * TRUSTPILOT_ENABLED on, a review request reached children through the
 * first-mark, 7-day and 90-day triggers, and the 90-day one became reachable
 * for web payers once the webhook began counting payments. Nobody's marketing
 * choice was read either. It now asks the email age group (a real date of
 * birth, 18 or over) and isMarketingAllowed, as the trial lifecycle emails do.
 */

const SUPABASE_UUID = '11111111-2222-4333-8444-555555555555'

let ageGroup = 'UNKNOWN'
let marketingAllowed = true
const insertedRows: Record<string, unknown>[] = []

vi.mock('@/lib/identity', () => ({
  resolveEmailAgeGroup: async () => ageGroup,
  isAdultForEmail: (group: string) => group === 'ADULT',
}))

vi.mock('@/lib/email/marketing-preference', () => ({
  isMarketingAllowed: async () => marketingAllowed,
}))

vi.mock('@/lib/prisma', () => ({
  prisma: {
    user: {
      findUnique: async () => ({
        id: 'ckusr_1',
        email: 'learner@example.com',
        firstName: 'Sam',
        lastName: 'Lee',
        // The default, and the value a child with no date of birth carries.
        isMinor: false,
        deletedAt: null,
        role: 'STUDENT',
      }),
    },
  },
}))

vi.mock('@/lib/supabase/server', () => ({
  createServiceRoleClient: () => ({
    auth: {
      admin: {
        getUserById: async () => ({ data: { user: { email: 'learner@example.com' } } }),
      },
    },
    from: () => ({
      select: () => ({
        eq: () => ({ eq: () => ({ maybeSingle: async () => ({ data: null, error: null }) }) }),
      }),
      insert: async (row: Record<string, unknown>) => {
        insertedRows.push(row)
        return { error: null }
      },
    }),
  }),
}))

let fetchSpy: ReturnType<typeof vi.spyOn>

beforeEach(() => {
  ageGroup = 'UNKNOWN'
  marketingAllowed = true
  insertedRows.length = 0
  process.env.TRUSTPILOT_ENABLED = 'true'
  process.env.SENDGRID_API_KEY = 'sg_test'
  fetchSpy = vi
    .spyOn(globalThis, 'fetch')
    .mockResolvedValue(new Response('', { status: 202 }) as never)
  vi.spyOn(console, 'info').mockImplementation(() => {})
  vi.spyOn(console, 'warn').mockImplementation(() => {})
})

afterEach(() => {
  vi.restoreAllMocks()
  delete process.env.TRUSTPILOT_ENABLED
  delete process.env.SENDGRID_API_KEY
})

const sentToSendGrid = () =>
  (fetchSpy.mock.calls as unknown as unknown[][]).filter((c) =>
    String(c[0]).includes('api.sendgrid.com'),
  ).length

async function fire90d() {
  const { fireStudent90dRetention } = await import('@/lib/trustpilot/trigger-invite')
  return fireStudent90dRetention(SUPABASE_UUID, {
    modules_completed: 0,
    essays_submitted_count: 3,
    mock_exams_taken: 0,
    grade_start: '-',
    grade_current: '-',
  })
}

describe('the Trustpilot invitation', () => {
  it.each(['UNKNOWN', 'MINOR_16_17', 'MINOR_UNDER_16', 'UNDER_13'])(
    'is not sent when the email age group is %s, whatever isMinor says',
    async (group) => {
      ageGroup = group
      const result = await fire90d()
      expect(sentToSendGrid()).toBe(0)
      expect(result.ok).toBe(true)
      expect(result.sent).toBeFalsy()
      expect(result.skipped).toBe('not_known_adult')
    },
  )

  it('is not sent to an adult who may not receive marketing', async () => {
    ageGroup = 'ADULT'
    marketingAllowed = false
    const result = await fire90d()
    expect(sentToSendGrid()).toBe(0)
    expect(result.skipped).toBe('no_marketing_consent')
  })

  it('is sent to an adult who may receive marketing', async () => {
    // The control: a gate that refused everyone would pass the cases above.
    ageGroup = 'ADULT'
    marketingAllowed = true
    const result = await fire90d()
    expect(sentToSendGrid()).toBe(1)
    expect(result.sent).toBe(true)
  })

  it('applies to every trigger, not only the 90-day one', async () => {
    ageGroup = 'UNKNOWN'
    const { fireStudentFirstMark } = await import('@/lib/trustpilot/trigger-invite')
    await fireStudentFirstMark(SUPABASE_UUID)
    expect(sentToSendGrid()).toBe(0)
  })
})
