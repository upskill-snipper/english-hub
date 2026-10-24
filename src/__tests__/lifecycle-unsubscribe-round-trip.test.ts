import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'

/**
 * The unsubscribe link in every lifecycle email works (23 October 2026).
 *
 * The trial emails used to point their opt-out at /dashboard/privacy and send
 * no List-Unsubscribe header. Now each one carries a signed token twice: in
 * the footer link and in the RFC 8058 header. This renders every message the
 * way its sender does, takes the token out of both places, and posts it to
 * /api/unsubscribe, which must write false to BOTH stores the senders read:
 * profiles.marketing_opt_in and PrivacySettings.marketingEnabled.
 */

const UID = '11111111-2222-4333-8444-555555555555'

const profileWrites: Array<{ row: Record<string, unknown>; id: string }> = []
const privacyUpserts: Array<Record<string, unknown>> = []

vi.mock('@/lib/rate-limit', () => ({ rateLimit: async () => ({ success: true }) }))

vi.mock('@/lib/supabase/server', () => ({
  createServiceRoleClient: () => ({
    from: () => ({
      update: (row: Record<string, unknown>) => ({
        eq: async (_col: string, id: string) => {
          profileWrites.push({ row, id })
          return { error: null }
        },
      }),
    }),
  }),
}))

vi.mock('@/lib/prisma', () => ({
  prisma: {
    privacySettings: {
      upsert: vi.fn(async (args: Record<string, unknown>) => {
        privacyUpserts.push(args)
        return {}
      }),
    },
  },
}))

vi.mock('@/lib/identity', () => ({ tryPrismaUserId: async () => 'cuid_round_trip' }))

const { unsubscribeLinkFor } = await import('@/lib/email/lifecycle/send')
const { verifyUnsubscribeToken } = await import('@/lib/email/unsubscribe-token')
const T = await import('@/lib/email-templates/lifecycle-emails')
const L = await import('@/lib/email-templates/trial-lifecycle')
const { POST } = await import('@/app/api/unsubscribe/route')

const END = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)

const BUILDERS: Array<[string, (url: string) => { html: string; text: string }]> = [
  [
    'M0',
    (u) =>
      T.buildAccountReadyEmail({
        trialEndsAt: END,
        ageGroup: 'UNKNOWN',
        isTeacher: false,
        unsubscribeUrl: u,
      }),
  ],
  ['M1', (u) => T.buildFirstEssayEmail({ trialEndsAt: END, unsubscribeUrl: u })],
  [
    'M2',
    (u) => L.buildTrialEndingEmail({ trialEndsAt: END, audience: 'service', unsubscribeUrl: u }),
  ],
  [
    'M3',
    (u) =>
      L.buildTrialEndedEmail({ trialEndsAt: END, audience: 'consented-adult', unsubscribeUrl: u }),
  ],
  ['M4', (u) => T.buildQuestsFreeEmail({ trialEndedAt: END, isTeacher: false, unsubscribeUrl: u })],
  ['M5', (u) => T.buildOneEssayEmail({ trialEndedAt: END, isTeacher: true, unsubscribeUrl: u })],
  [
    'M6',
    (u) =>
      T.buildPaymentFailedEmail({
        amountMinor: 2999,
        currency: 'gbp',
        accessPaused: false,
        ieltsOnly: false,
        unsubscribeUrl: u,
      }),
  ],
  [
    'M7 cancelled',
    (u) =>
      T.buildPlanCancelledEmail({
        status: 'past_due',
        ieltsOnly: false,
        otherPlanRemains: false,
        unsubscribeUrl: u,
      }),
  ],
  ['M7 ended', (u) => T.buildPlanEndedEmail({ unsubscribeUrl: u })],
]

beforeEach(() => {
  process.env.CRON_SECRET = 'round-trip-secret'
  profileWrites.length = 0
  privacyUpserts.length = 0
})

describe.each(BUILDERS)('%s', (_name, build) => {
  it('carries a token, in the footer and the header, that turns marketing off in both stores', async () => {
    const link = unsubscribeLinkFor(UID)
    const email = build(link.pageUrl)

    const footer = email.html.match(
      /href="https:\/\/theenglishhub\.app\/unsubscribe\?token=([^"]+)"/,
    )
    expect(footer, 'no signed unsubscribe link in the footer').toBeTruthy()
    const header = link.headers?.['List-Unsubscribe']?.match(/\?token=([^>]+)>$/)
    expect(header, 'no signed List-Unsubscribe header').toBeTruthy()
    expect(link.headers?.['List-Unsubscribe-Post']).toBe('List-Unsubscribe=One-Click')

    const token = decodeURIComponent(footer![1])
    expect(decodeURIComponent(header![1])).toBe(token)
    expect(email.text).toContain(link.pageUrl)
    expect(verifyUnsubscribeToken(token, Date.now())).toEqual({ valid: true, supabaseUserId: UID })

    // A mail client's one-click POST: the header URL, form-encoded body.
    const res = await POST(
      new NextRequest(`https://theenglishhub.app/api/unsubscribe?token=${header![1]}`, {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        body: 'List-Unsubscribe=One-Click',
      }),
    )
    expect(res.status).toBe(200)
    expect(profileWrites).toEqual([{ row: { marketing_opt_in: false }, id: UID }])
    expect(privacyUpserts[0]).toMatchObject({
      where: { userId: 'cuid_round_trip' },
      update: { marketingEnabled: false },
    })
  })
})

describe('without a signing key', () => {
  it('falls back to the bare page and sends no one-click header that could not work', () => {
    delete process.env.CRON_SECRET
    const link = unsubscribeLinkFor(UID)
    expect(link.pageUrl).toBe('https://theenglishhub.app/unsubscribe')
    expect(link.headers).toBeNull()
  })
})
