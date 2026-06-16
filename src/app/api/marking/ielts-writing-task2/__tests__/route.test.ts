// ─── Tests — POST /api/marking/ielts-writing-task2 (TRACK B, G-LIVE gated) ─────
//
// OFFLINE tests (vitest, matching /api/mark/__tests__/route.test.ts conventions):
// every model touch-point (the engine facade) and every gate-chain helper is
// mocked, so no network, DB, or Anthropic call happens. We assert the contractual
// behaviours from the task:
//   1. No green baseline (the real pre-G-LIVE state) → 503, and markSubmission is
//      NEVER called (the model is not reached).
//   2. Feature flag OFF → 503, regardless of baseline.
//   3. Gate stubbed green + flag ON → markSubmission + persistEngineResult are
//      called and the OQ-5 disposition is returned.
//   4. A red baseline (gate throws) → 503, not 500.
//   5. The Children's-Code gate chain runs BEFORE any model call (auth / opt-out /
//      rate-limit failures short-circuit and markSubmission is never reached).
// ──────────────────────────────────────────────────────────────────────────────

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { NextRequest } from 'next/server'

// ── Mock every dependency BEFORE importing the route (vitest hoists vi.mock). ────
vi.mock('@/lib/supabase/server', () => ({
  createServerSupabaseClient: vi.fn(),
}))

vi.mock('@/lib/consent-check', () => ({
  checkMinorAIConsent: vi.fn(),
}))

vi.mock('@/lib/ai-preferences', () => ({
  isAiOptedOutServer: vi.fn(),
}))

vi.mock('@/lib/rate-limit', () => ({
  rateLimit: vi.fn(),
}))

vi.mock('@/lib/content-safety', () => ({
  contentSafetyCheck: vi.fn(),
}))

vi.mock('@/lib/i18n/ai-language-directive', () => ({
  resolveLocaleFromRequest: () => 'en',
}))

vi.mock('@/lib/ai-audit-log', () => ({
  logAiDecision: vi.fn(),
}))

// The engine facade — the model seam. Mocked so the route is exercised offline.
vi.mock('@/lib/marking/engine/mark', () => ({
  markSubmission: vi.fn(),
}))

// Persistence seam — mocked so no DB write happens.
vi.mock('@/lib/marking/engine/persistence/persist', () => ({
  persistEngineResult: vi.fn(),
}))

// The calibration gate. We keep a REAL CalibrationGateError class (so the route's
// `instanceof` check works) but make assertCalibrationGreen controllable per test.
vi.mock('@/lib/marking/engine/calibration/gate', () => {
  class CalibrationGateError extends Error {
    public readonly check: string
    constructor(check: string, message: string) {
      super(message)
      this.name = 'CalibrationGateError'
      this.check = check
    }
  }
  return {
    CalibrationGateError,
    assertCalibrationGreen: vi.fn(),
  }
})

// Import the route + the mocked deps AFTER the mocks are registered. The route
// handler (POST) comes from ../route; the G-LIVE flag/seam helpers now live in
// ../glive (a Next.js route.ts may only export handlers + segment config).
import { POST } from '../route'
import { IELTS_WT2_FLAG_ENV, __setCalibrationBaselineLoader } from '../glive'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { checkMinorAIConsent } from '@/lib/consent-check'
import { isAiOptedOutServer } from '@/lib/ai-preferences'
import { rateLimit } from '@/lib/rate-limit'
import { contentSafetyCheck } from '@/lib/content-safety'
import { markSubmission } from '@/lib/marking/engine/mark'
import { persistEngineResult } from '@/lib/marking/engine/persistence/persist'
import { assertCalibrationGreen, CalibrationGateError } from '@/lib/marking/engine/calibration/gate'

const mockedSupabase = vi.mocked(createServerSupabaseClient)
const mockedConsent = vi.mocked(checkMinorAIConsent)
const mockedOptOut = vi.mocked(isAiOptedOutServer)
const mockedRateLimit = vi.mocked(rateLimit)
const mockedContentSafety = vi.mocked(contentSafetyCheck)
const mockedMarkSubmission = vi.mocked(markSubmission)
const mockedPersist = vi.mocked(persistEngineResult)
const mockedAssertGreen = vi.mocked(assertCalibrationGreen)

// ── Fixtures ────────────────────────────────────────────────────────────────

function makeRequest(body: unknown): NextRequest {
  return new NextRequest('http://localhost/api/marking/ielts-writing-task2', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  })
}

const VALID_BODY = {
  submissionId: 'sub_123',
  promptText: 'Some people think that... To what extent do you agree or disagree?',
  essay: 'a'.repeat(200),
}

/** A minimal promoted green baseline; only used when exercising the green path. */
const GREEN_BASELINE = {
  id: 'baseline_green',
  n: 60,
  withinHalfBand: 0.85,
  perBandCoverage: { 5: 20, 6: 20, 7: 20 },
  report: {} as never,
  priorBaseline: null,
}

/** A finished EngineMarkResult the facade would return (only fields the route reads). */
const FAKE_OUTCOME = {
  routingDecision: { status: 'routed' },
  provenance: {},
  disposition: 'show_ai_practice_feedback',
  result: {
    needsHumanReview: false,
    overallConfidence: 0.82,
  },
}

/**
 * A mocked server-supabase client whose `.from('profiles')` chain resolves to an
 * entitled profile (pro + IELTS active), so the step-4b `hasIeltsAccess` gate
 * passes and each test reaches the link it is actually exercising. The 401 test
 * overrides this with a null-user client (short-circuits at auth, never reaches 4b).
 */
function entitledSupabaseClient(user: { id: string } | null) {
  const profileBuilder = {
    select: () => profileBuilder,
    eq: () => profileBuilder,
    single: async () => ({
      data: { subscription_status: 'pro', ielts_status: 'active' },
      error: null,
    }),
    maybeSingle: async () => ({
      data: { subscription_status: 'pro', ielts_status: 'active' },
      error: null,
    }),
  }
  return {
    auth: { getUser: vi.fn().mockResolvedValue({ data: { user }, error: null }) },
    from: () => profileBuilder,
  } as unknown as ReturnType<typeof createServerSupabaseClient>
}

beforeEach(() => {
  vi.clearAllMocks()
  // Happy-path gate chain by default (each individual test breaks one link).
  // Step 4b now gates on hasIeltsAccess, which reads
  // supabase.from('profiles').select('subscription_status, ielts_status').eq().single().
  // The default client returns an entitled profile so the gate chain proceeds to
  // the link each test is actually exercising (G-LIVE / rate-limit / engine).
  mockedSupabase.mockReturnValue(entitledSupabaseClient({ id: 'user_1' }))
  mockedConsent.mockResolvedValue({ allowed: true } as Awaited<
    ReturnType<typeof checkMinorAIConsent>
  >)
  mockedOptOut.mockResolvedValue(false)
  mockedRateLimit.mockResolvedValue({
    success: true,
    remaining: 9,
    resetAt: Date.now() + 1000,
  } as Awaited<ReturnType<typeof rateLimit>>)
  mockedContentSafety.mockReturnValue(null)
  mockedMarkSubmission.mockResolvedValue(
    FAKE_OUTCOME as unknown as Awaited<ReturnType<typeof markSubmission>>,
  )
  mockedPersist.mockResolvedValue(undefined as never)
  // Default: flag OFF (route dark) + production baseline loader (null).
  delete process.env[IELTS_WT2_FLAG_ENV]
  __setCalibrationBaselineLoader(null)
})

afterEach(() => {
  delete process.env[IELTS_WT2_FLAG_ENV]
  __setCalibrationBaselineLoader(null)
})

describe('POST /api/marking/ielts-writing-task2 — G-LIVE gating', () => {
  it('returns 503 and does NOT call the engine when there is no green baseline (pre-G-LIVE)', async () => {
    // Flag ON but the real loader returns null (no promoted baseline) → not_calibrated.
    process.env[IELTS_WT2_FLAG_ENV] = 'true'

    const res = await POST(makeRequest(VALID_BODY))

    expect(res.status).toBe(503)
    expect(mockedMarkSubmission).not.toHaveBeenCalled()
    expect(mockedPersist).not.toHaveBeenCalled()
  })

  it('returns 503 when the feature flag is OFF, even with a green baseline available', async () => {
    // Flag unset (default). The kill-switch keeps the route dark regardless of data.
    __setCalibrationBaselineLoader(async () => GREEN_BASELINE)
    mockedAssertGreen.mockReturnValue(undefined)

    const res = await POST(makeRequest(VALID_BODY))

    expect(res.status).toBe(503)
    expect(mockedMarkSubmission).not.toHaveBeenCalled()
  })

  it('marks, persists, and returns the OQ-5 disposition when flag ON + gate stubbed green', async () => {
    process.env[IELTS_WT2_FLAG_ENV] = 'true'
    __setCalibrationBaselineLoader(async () => GREEN_BASELINE)
    mockedAssertGreen.mockReturnValue(undefined) // green → no throw

    const res = await POST(makeRequest(VALID_BODY))

    expect(mockedMarkSubmission).toHaveBeenCalledTimes(1)
    expect(mockedPersist).toHaveBeenCalledTimes(1)
    expect(res.status).toBe(200)
    const json = (await res.json()) as { disposition: string }
    expect(json.disposition).toBe('show_ai_practice_feedback')
  })

  it('returns 503 (not 500) when the gate THROWS CalibrationGateError on a red baseline', async () => {
    process.env[IELTS_WT2_FLAG_ENV] = 'true'
    __setCalibrationBaselineLoader(async () => GREEN_BASELINE)
    mockedAssertGreen.mockImplementation(() => {
      throw new CalibrationGateError('absolute-floor', 'below floor')
    })

    const res = await POST(makeRequest(VALID_BODY))

    expect(res.status).toBe(503)
    expect(mockedMarkSubmission).not.toHaveBeenCalled()
  })
})

describe('POST /api/marking/ielts-writing-task2 — gate chain runs before any model call', () => {
  it('returns 401 and never calls the engine when the user is not authenticated', async () => {
    mockedSupabase.mockReturnValue({
      auth: { getUser: vi.fn().mockResolvedValue({ data: { user: null }, error: null }) },
    } as unknown as ReturnType<typeof createServerSupabaseClient>)
    process.env[IELTS_WT2_FLAG_ENV] = 'true'

    const res = await POST(makeRequest(VALID_BODY))

    expect(res.status).toBe(401)
    expect(mockedMarkSubmission).not.toHaveBeenCalled()
  })

  it('returns 403 (AI opt-out) before reaching the engine', async () => {
    mockedOptOut.mockResolvedValue(true)
    process.env[IELTS_WT2_FLAG_ENV] = 'true'

    const res = await POST(makeRequest(VALID_BODY))

    expect(res.status).toBe(403)
    expect(mockedMarkSubmission).not.toHaveBeenCalled()
  })

  it('returns 429 when rate-limited, before the engine', async () => {
    mockedRateLimit.mockResolvedValue({
      success: false,
      remaining: 0,
      resetAt: Date.now() + 1000,
    } as Awaited<ReturnType<typeof rateLimit>>)
    process.env[IELTS_WT2_FLAG_ENV] = 'true'

    const res = await POST(makeRequest(VALID_BODY))

    expect(res.status).toBe(429)
    expect(mockedMarkSubmission).not.toHaveBeenCalled()
  })
})
