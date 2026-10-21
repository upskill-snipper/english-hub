// ─── An AI outage reaches a person, from both places that can see it ────────
//
// From 12 to 21 October 2026 the Anthropic account was out of credit. Two
// parts of the product saw it and told nobody:
//
//   • /api/health/ai, at 06:30 every morning, into the Vercel cron log.
//   • logAiDecision, on every failed learner request: 36 records on
//     /api/marking/run alone, each with the provider's sentence, in a table
//     nobody reads.
//
// Both now send the alert in src/lib/ops/ai-outage-alert.ts. The second is
// the one that would have fired at 15:10 on 12 October, on the first failed
// essay, instead of at 06:30 the next morning. The alert module itself is
// tested in an-empty-ai-account-is-named-as-one.test.ts; here it is mocked,
// and these tests hold the two callers to calling it, and only when they
// should.
// ────────────────────────────────────────────────────────────────────────────

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { NextRequest } from 'next/server'

import { logAiDecision, type LogAiDecisionInput } from '@/lib/ai-audit-log'

const sendAiOutageAlert = vi.fn()
vi.mock('@/lib/ops/ai-outage-alert', () => ({
  sendAiOutageAlert: (...a: unknown[]) => sendAiOutageAlert(...a),
}))

const anthropicCreate = vi.fn()
vi.mock('@/lib/anthropic-client', () => {
  class AnthropicNotConfiguredError extends Error {}
  return {
    ANTHROPIC_MODEL: 'claude-test',
    AnthropicNotConfiguredError,
    getAnthropicClient: () => ({
      messages: { create: (...a: unknown[]) => anthropicCreate(...a) },
    }),
  }
})

const auditCreate = vi.fn()
vi.mock('@/lib/prisma', () => ({
  prisma: {
    auditLog: {
      get create() {
        return auditCreate
      },
    },
  },
}))
vi.mock('@/lib/identity', () => ({ tryPrismaUserId: async () => 'clx0000000000000000000000' }))

const CREDIT =
  'Your credit balance is too low to access the Anthropic API. Please go to Plans & Billing to upgrade or purchase credits.'
const CREDIT_BODY = { type: 'error', error: { type: 'invalid_request_error', message: CREDIT } }

function creditError(): Error {
  return Object.assign(new Error(`400 ${JSON.stringify(CREDIT_BODY)}`), {
    name: 'BadRequestError',
    status: 400,
    error: CREDIT_BODY,
  })
}

let errorSpy: ReturnType<typeof vi.spyOn>
const savedSecret = process.env.CRON_SECRET

beforeEach(() => {
  sendAiOutageAlert.mockReset().mockResolvedValue({ sent: true })
  anthropicCreate.mockReset()
  auditCreate.mockReset().mockResolvedValue({ id: 'audit_1' })
  process.env.CRON_SECRET = 'cron-test-secret'
  errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
})

afterEach(() => {
  if (savedSecret === undefined) delete process.env.CRON_SECRET
  else process.env.CRON_SECRET = savedSecret
  errorSpy.mockRestore()
})

// ─── 1. The daily check ─────────────────────────────────────────────────────

async function runHealthCheck() {
  const { GET } = await import('@/app/api/health/ai/route')
  const res = await GET(
    new NextRequest('http://localhost/api/health/ai', {
      headers: { authorization: 'Bearer cron-test-secret' },
    }),
  )
  return { status: res.status, body: await res.json() }
}

describe('/api/health/ai', () => {
  it('names an empty account as one, says to top it up, and emails once for the run', async () => {
    anthropicCreate.mockRejectedValue(creditError())

    const { status, body } = await runHealthCheck()

    expect(status).toBe(503)
    expect(body.probes.length).toBeGreaterThan(0)
    for (const probe of body.probes) {
      expect(probe.kind).toBe('credit_exhausted')
      expect(probe.providerStatus).toBe(400)
      // What it said for nine days, and what it says now.
      expect(probe.likelyCause).not.toMatch(/retired/i)
      expect(probe.likelyCause).toMatch(/top it up/i)
      expect(probe).not.toHaveProperty('failure')
    }

    expect(sendAiOutageAlert).toHaveBeenCalledOnce()
    const [alert, options] = sendAiOutageAlert.mock.calls[0]
    expect(alert.source).toBe('health/ai')
    expect(alert.failure.kind).toBe('credit_exhausted')
    expect(alert.lines).toHaveLength(body.probes.length)
    expect(options).toBeUndefined()
    expect(body.alert).toEqual({ sent: true })
  })

  it('reports in its response when the alert could not be sent', async () => {
    anthropicCreate.mockRejectedValue(creditError())
    sendAiOutageAlert.mockResolvedValue({ sent: false, reason: 'no-recipient' })

    const { body } = await runHealthCheck()
    expect(body.alert).toEqual({ sent: false, reason: 'no-recipient' })
  })

  it('still reads a bare 400 on its minimal probe as a retired model', async () => {
    anthropicCreate.mockRejectedValue(
      Object.assign(new Error('400 bad'), { name: 'BadRequestError', status: 400 }),
    )
    const { body } = await runHealthCheck()
    expect(body.probes[0].kind).toBe('model_unavailable')
    expect(sendAiOutageAlert.mock.calls[0][0].failure.kind).toBe('model_unavailable')
  })

  it('sends nothing when every model answers', async () => {
    anthropicCreate.mockResolvedValue({ content: [{ type: 'text', text: 'ok' }] })

    const { status, body } = await runHealthCheck()

    expect(status).toBe(200)
    expect(body.status).toBe('ok')
    expect(body.alert).toBeNull()
    expect(sendAiOutageAlert).not.toHaveBeenCalled()
  })
})

// ─── 2. The first failed learner request ────────────────────────────────────

function record(overrides: Partial<LogAiDecisionInput>): LogAiDecisionInput {
  return {
    feature: 'marking/run',
    userId: '6b1a1f0e-9d3a-4f7a-9d2f-0f0a1b2c3d4e',
    inputText: 'An essay.',
    requestStartedAt: new Date('2026-10-12T15:09:58Z'),
    responseFinishedAt: new Date('2026-10-12T15:10:01Z'),
    success: false,
    ...overrides,
  }
}

/** The alarm runs beside the write, so give it a moment to arrive. */
async function settle(): Promise<void> {
  for (let i = 0; i < 20; i++) await new Promise((resolve) => setImmediate(resolve))
}

describe('logAiDecision raises the alarm on a failure that will not pass', () => {
  it('as /api/marking/run recorded the empty account on 12 October', async () => {
    await logAiDecision(
      record({
        errorClass: 'error',
        errorMessage: `400 ${JSON.stringify(CREDIT_BODY)}`.slice(0, 300),
      }),
    )
    await settle()

    // The record is still written, and the alarm is raised beside it.
    expect(auditCreate).toHaveBeenCalledOnce()
    expect(sendAiOutageAlert).toHaveBeenCalledOnce()
    const [alert, options] = sendAiOutageAlert.mock.calls[0]
    expect(alert).toMatchObject({ source: 'live-request', feature: 'marking/run' })
    expect(alert.failure.kind).toBe('credit_exhausted')
    expect(alert.at.toISOString()).toBe('2026-10-12T15:10:01.000Z')
    expect(options).toEqual({ throttle: true })
  })

  it('as generate-notes now records it, with the status and the sentence', async () => {
    await logAiDecision(
      record({
        feature: 'toolkit/generate-notes',
        errorClass: 'http_400',
        errorStatus: 400,
        errorMessage: CREDIT,
      }),
    )
    await settle()
    expect(sendAiOutageAlert).toHaveBeenCalledOnce()
    expect(sendAiOutageAlert.mock.calls[0][0].failure.kind).toBe('credit_exhausted')
  })

  it('for a rejected key or a retired model too', async () => {
    await logAiDecision(record({ errorClass: 'AuthenticationError', errorStatus: 401 }))
    await logAiDecision(
      record({ errorClass: 'NotFoundError', errorStatus: 404, errorMessage: 'model: claude-x' }),
    )
    await settle()
    const kinds = sendAiOutageAlert.mock.calls.map((c) => c[0].failure.kind).sort()
    expect(kinds).toEqual(['key_rejected', 'model_unavailable'])
  })

  it('but not for a success, a refused essay, a timeout or overload', async () => {
    await logAiDecision(record({ success: true, outputSummary: { predictedGrade: '6' } }))
    await logAiDecision(record({ errorClass: 'OFF_TOPIC' }))
    await logAiDecision(
      record({ errorClass: 'TRUNCATED', errorMessage: 'Reply stopped at max_tokens' }),
    )
    await logAiDecision(record({ errorClass: 'timeout', errorMessage: 'No reply within 95 s' }))
    await logAiDecision(record({ errorClass: 'RateLimitError', errorStatus: 429 }))
    await logAiDecision(record({ errorClass: 'overloaded_error', errorStatus: 529 }))
    await settle()
    expect(sendAiOutageAlert).not.toHaveBeenCalled()
  })

  it('and never throws into the route when the alarm itself fails', async () => {
    sendAiOutageAlert.mockRejectedValue(new Error('mail is down'))
    await expect(
      logAiDecision(record({ errorClass: 'AuthenticationError', errorStatus: 401 })),
    ).resolves.toBeUndefined()
    await settle()
    expect(errorSpy.mock.calls.flat().join(' ')).toContain('provider alarm failed')
  })
})
