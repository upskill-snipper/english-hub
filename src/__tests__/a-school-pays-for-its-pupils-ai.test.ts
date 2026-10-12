import { describe, it, expect, vi, beforeEach } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * The no-card trial ceiling does not apply where a pupil's school pays.
 *
 * THE DEFECT (as at d682afc1). A pupil on a no-card trial was metered like
 * any trialist, 15 AI calls a day and 40 in all, then refused with a 402,
 * although their school's pilot paid for the same feature. Uploaded pupils
 * had nothing BUT that trial. Calum decided on 12 October 2026 that a school
 * pupil's AI access comes from the school's live pilot; the routes' own daily
 * caps (20 submissions, 30 marking runs) still apply.
 *
 * The exemption is opt-in per route (`schoolFunded`), so a route that forgets
 * it meters, and the IELTS routes, which a school's pilot does not cover,
 * leave it off.
 */

const SESSION = { id: 'a0000000-0000-4000-8000-0000000000a1', email: 'pupil@school.example' }

const mockSubscription = vi.fn()
vi.mock('@/lib/prisma', () => ({
  prisma: {
    user: { findUnique: vi.fn(async () => ({ id: 'cuid_pupil' })) },
    subscription: { findUnique: (...a: unknown[]) => mockSubscription(...a) },
  },
}))

const mockConsume = vi.fn()
vi.mock('@/lib/usage/free-allowance', () => ({
  consumeAllowance: (...a: unknown[]) => mockConsume(...a),
  refundAllowance: vi.fn(),
  resolveUsageSubject: () => ({ type: 'user', key: 'k' }),
  allowanceExhaustedResponse: () => new Response(null, { status: 402 }),
}))

const mockSchool = vi.fn()
vi.mock('@/lib/school-entitlement', () => ({
  getPupilSchoolAccess: (...a: unknown[]) => mockSchool(...a),
}))

import { enforceTrialAllowance } from '@/lib/usage/trial-allowance'

const request = { headers: new Headers() }
const noCardTrial = {
  id: 'sub_1',
  status: 'TRIALING',
  currentPeriodEnd: new Date(Date.now() + 5 * 86_400_000),
  stripeSubscriptionId: null,
  stripeCustomerId: null,
  paymentCount: 0,
}

beforeEach(() => {
  vi.clearAllMocks()
  mockSubscription.mockResolvedValue(noCardTrial)
  mockConsume.mockResolvedValue({ allowed: true, used: 1, limit: 40 })
  mockSchool.mockResolvedValue({ schoolId: 'school-1', aiAuthorised: true })
})

describe('the trial ceiling and a school that pays', () => {
  it('a trialist who is a pupil of a live school is not metered on a school-funded route', async () => {
    const gate = await enforceTrialAllowance(request, SESSION, { schoolFunded: true })
    expect(gate.response).toBeNull()
    expect(gate.consumed).toBeNull()
    expect(mockConsume).not.toHaveBeenCalled()
    expect(mockSchool).toHaveBeenCalledWith(SESSION.id)
  })

  it('the same pupil is metered on a route the school does not fund (IELTS)', async () => {
    const gate = await enforceTrialAllowance(request, SESSION)
    expect(mockConsume).toHaveBeenCalled()
    expect(gate.consumed).not.toBeNull()
    expect(mockSchool).not.toHaveBeenCalled()
  })

  it('a trialist who is not a pupil is metered as before, even on a school-funded route', async () => {
    mockSchool.mockResolvedValue(null)
    const gate = await enforceTrialAllowance(request, SESSION, { schoolFunded: true })
    expect(mockConsume).toHaveBeenCalled()
    expect(gate.consumed).not.toBeNull()
  })

  it('nobody who is not on a no-card trial pays for the school lookup', async () => {
    mockSubscription.mockResolvedValue({
      ...noCardTrial,
      status: 'ACTIVE',
      stripeSubscriptionId: 's',
    })
    await enforceTrialAllowance(request, SESSION, { schoolFunded: true })
    expect(mockSchool).not.toHaveBeenCalled()
    expect(mockConsume).not.toHaveBeenCalled()
  })
})

describe('which routes the school funds', () => {
  const read = (rel: string) => readFileSync(join(process.cwd(), rel), 'utf8')

  // /api/marking/run passes it too, for the pupil's own run; that is asserted
  // on the route's behaviour in smart-ip/a-class-pupil-gets-their-ai-mark.test.ts.
  it.each([
    'src/app/api/mark/route.ts',
    'src/app/api/mark/stream/route.ts',
    'src/app/api/essay/feedback/route.ts',
  ])('%s, a GCSE route behind the paid-access choke point, passes schoolFunded', (rel) => {
    expect(read(rel)).toMatch(/enforceTrialAllowance\(request, user, \{ schoolFunded: true \}\)/)
  })

  it.each([
    'src/app/api/ielts/writing-feedback/route.ts',
    'src/app/api/ielts/speaking-feedback/route.ts',
    'src/app/api/ielts/statement-feedback/route.ts',
    'src/app/api/marking/ielts-writing-task2/route.ts',
  ])('%s, an IELTS route, does not', (rel) => {
    expect(read(rel)).not.toContain('schoolFunded')
  })
})
