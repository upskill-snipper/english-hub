// ─── An empty AI account is named as one, and a person is told ──────────────
//
// THE DEFECT (12 to 21 October 2026). The Anthropic account ran out of credit
// at 15:10 UTC on 12 October and every AI call failed with HTTP 400 "Your
// credit balance is too low to access the Anthropic API". 37 essays from 12
// new trial learners were saved and never marked. Two things kept it quiet:
//
//   1. Nothing told a person. /api/health/ai failed every morning into the
//      Vercel cron log, which nobody reads.
//   2. What it would have said was wrong. It read every 400 as a retired
//      model, and the provider's sentence came as a 400, not the 402
//      `billing_error` the API reference lists.
//
// These tests hold the classifier to the shapes production actually stored,
// and the alert to reaching a person, once, without learner data.
// ────────────────────────────────────────────────────────────────────────────

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

import {
  classifyAiProviderFailure,
  mostSerious,
  parseProviderErrorText,
  readProviderError,
  readProviderRecord,
} from '@/lib/ai/provider-failure'
import {
  AI_ALERT_THROTTLE_SECONDS,
  aiAlertRecipient,
  renderAiOutageAlert,
  sendAiOutageAlert,
} from '@/lib/ops/ai-outage-alert'

const sendEmail = vi.fn()
const claimCronLock = vi.fn()
const releaseCronLock = vi.fn()

vi.mock('@/lib/email', () => ({ sendEmail: (...a: unknown[]) => sendEmail(...a) }))
vi.mock('@/lib/cron/lock', () => ({
  claimCronLock: (...a: unknown[]) => claimCronLock(...a),
  releaseCronLock: (...a: unknown[]) => releaseCronLock(...a),
}))

/** The provider's sentence, as it arrived on 12 October 2026. */
const CREDIT =
  'Your credit balance is too low to access the Anthropic API. Please go to Plans & Billing to upgrade or purchase credits.'

/** The provider's body, as the SDK parses it onto APIError.error. */
const CREDIT_BODY = { type: 'error', error: { type: 'invalid_request_error', message: CREDIT } }

/** What /api/marking/run stored in AuditLog: the SDK's message, cut to 300. */
const STORED_MESSAGE =
  `400 ${JSON.stringify({ ...CREDIT_BODY, request_id: 'req_011CTestTestTestTestTest' })}`.slice(
    0,
    300,
  )

describe('the classifier recognises an empty account in every shape it was stored in', () => {
  it('the marking route record: class "error", no status, the SDK message', () => {
    const failure = classifyAiProviderFailure(
      readProviderRecord({ errorClass: 'error', errorStatus: null, errorMessage: STORED_MESSAGE }),
    )
    expect(failure.kind).toBe('credit_exhausted')
    expect(failure.status).toBe(400)
    expect(failure.needsHuman).toBe(true)
    expect(failure.action).toMatch(/top it up/i)
  })

  it('the same record cut short mid-JSON still names the account, by its words', () => {
    const cut = STORED_MESSAGE.slice(0, 160)
    expect(() => JSON.parse(cut.slice(4))).toThrow()
    const failure = classifyAiProviderFailure(readProviderRecord({ errorMessage: cut }))
    expect(failure.kind).toBe('credit_exhausted')
  })

  it('the thrown SDK error, with its parsed body', () => {
    const err = Object.assign(new Error(`400 ${JSON.stringify(CREDIT_BODY)}`), {
      name: 'BadRequestError',
      status: 400,
      error: CREDIT_BODY,
    })
    const failure = classifyAiProviderFailure(readProviderError(err))
    expect(failure).toMatchObject({
      kind: 'credit_exhausted',
      status: 400,
      type: 'invalid_request_error',
      message: CREDIT,
    })
  })

  it('a raw response body, as generate-notes now records it', () => {
    const parsed = parseProviderErrorText(JSON.stringify(CREDIT_BODY))
    expect(parsed.message).toBe(CREDIT)
    const failure = classifyAiProviderFailure(
      readProviderRecord({
        errorClass: 'http_400',
        errorStatus: 400,
        errorMessage: parsed.message,
      }),
    )
    expect(failure.kind).toBe('credit_exhausted')
  })

  it('and the 402 billing_error the API reference lists', () => {
    expect(classifyAiProviderFailure({ status: 402, type: null, message: null }).kind).toBe(
      'credit_exhausted',
    )
    expect(
      classifyAiProviderFailure({ status: null, type: 'billing_error', message: 'x' }).kind,
    ).toBe('credit_exhausted')
  })

  it('the old generate-notes record, status and nothing else, could not say so', () => {
    // Why the route now records the sentence: these twelve rows are all
    // production has for generate-notes between 12 and 21 October.
    const failure = classifyAiProviderFailure(readProviderRecord({ errorClass: 'http_400' }))
    expect(failure.kind).toBe('other')
    expect(failure.needsHuman).toBe(false)
  })
})

describe('the other kinds, and which of them need a person', () => {
  const kind = (facts: Parameters<typeof classifyAiProviderFailure>[0], minimal = false) =>
    classifyAiProviderFailure(facts, { minimalRequest: minimal })

  it('a rejected key, a forbidden model and a retired model need a person', () => {
    expect(kind({ status: 401, type: null, message: 'invalid x-api-key' })).toMatchObject({
      kind: 'key_rejected',
      needsHuman: true,
    })
    expect(kind({ status: 403, type: 'permission_error', message: 'no' })).toMatchObject({
      kind: 'access_denied',
      needsHuman: true,
    })
    expect(kind({ status: 404, type: null, message: 'model: claude-x' })).toMatchObject({
      kind: 'model_unavailable',
      needsHuman: true,
    })
    // The September 2026 outage arrived as a 400 that named the model.
    expect(
      kind({ status: 400, type: null, message: 'model: claude-sonnet-4-6 is not supported' }),
    ).toMatchObject({ kind: 'model_unavailable', needsHuman: true })
  })

  it('a bare 400 is a retired model only on the minimal health probe', () => {
    expect(kind({ status: 400, type: null, message: 'something about this request' }).kind).toBe(
      'other',
    )
    expect(
      kind({ status: 400, type: null, message: 'something about this request' }, true).kind,
    ).toBe('model_unavailable')
  })

  it('rate limits, overload and timeouts pass on their own and raise nothing live', () => {
    for (const facts of [
      { status: 429, type: null, message: null },
      { status: 529, type: 'overloaded_error', message: null },
      { status: 500, type: 'api_error', message: null },
      { status: null, type: null, message: null, name: 'APIConnectionTimeoutError' },
      { status: null, type: null, message: 'No reply within 95 s', name: 'timeout' },
    ]) {
      expect(kind(facts).needsHuman, JSON.stringify(facts)).toBe(false)
    }
  })

  it("a refusal of one essay is not the provider's failure", () => {
    for (const errorClass of ['OFF_TOPIC', 'TRUNCATED', 'INVALID_RESPONSE', 'INVALID_SUBMISSION']) {
      const failure = classifyAiProviderFailure(readProviderRecord({ errorClass }))
      expect(failure.kind, errorClass).toBe('other')
      expect(failure.needsHuman, errorClass).toBe(false)
    }
  })

  it('an empty account outranks every other failure when several probes fail', () => {
    const worst = mostSerious([
      { kind: 'model_unavailable' as const, model: 'a' },
      { kind: 'credit_exhausted' as const, model: 'b' },
      { kind: 'timeout' as const, model: 'c' },
    ])
    expect(worst?.model).toBe('b')
    expect(mostSerious([])).toBeNull()
  })

  it('never throws, whatever it is given', () => {
    for (const value of [null, undefined, 42, 'text', {}, { error: 'x' }, { status: 'NaN' }]) {
      expect(() => classifyAiProviderFailure(readProviderError(value))).not.toThrow()
    }
    expect(() => parseProviderErrorText('400 {not json')).not.toThrow()
  })
})

describe('the alert reaches a person', () => {
  const credit = classifyAiProviderFailure(readProviderRecord({ errorMessage: STORED_MESSAGE }))
  const saved = { ...process.env }
  let errorSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    sendEmail.mockReset().mockResolvedValue({ success: true, messageId: 'msg_1' })
    claimCronLock.mockReset().mockResolvedValue(true)
    releaseCronLock.mockReset().mockResolvedValue(undefined)
    delete process.env.AI_ALERT_EMAIL
    delete process.env.OPERATOR_DIGEST_EMAIL
    errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    process.env = { ...saved }
    errorSpy.mockRestore()
  })

  it('goes to AI_ALERT_EMAIL, or the operator digest address, or says nobody is named', () => {
    expect(
      aiAlertRecipient({ AI_ALERT_EMAIL: 'a@x.test', OPERATOR_DIGEST_EMAIL: 'b@x.test' }),
    ).toBe('a@x.test')
    expect(aiAlertRecipient({ OPERATOR_DIGEST_EMAIL: 'b@x.test' })).toBe('b@x.test')
    expect(aiAlertRecipient({ AI_ALERT_EMAIL: '   ' })).toBeNull()
    expect(aiAlertRecipient({})).toBeNull()
  })

  it('says what failed and what to do, and carries no learner data', () => {
    const { subject, text, html } = renderAiOutageAlert({
      source: 'live-request',
      failure: credit,
      feature: 'marking/run',
      model: 'claude-test',
      at: new Date('2026-10-12T15:10:01Z'),
    })
    expect(subject).toMatch(/out of credit/i)
    expect(text).toContain('2026-10-12T15:10:01')
    expect(text).toContain('marking/run')
    expect(text).toContain('credit balance is too low')
    expect(text).toMatch(/top it up/i)
    expect(text).toMatch(/essays are saved but not marked/i)
    // Escaped, because the provider's sentence is not ours to trust as HTML.
    expect(html).toContain('Plans &amp; Billing')
    // The input has no field for a person, and nothing in the text names one.
    expect(text).not.toMatch(/userId|student_id|@/)
  })

  it('is sent through the site mail path when a recipient is named', async () => {
    process.env.AI_ALERT_EMAIL = 'ops@x.test'
    const outcome = await sendAiOutageAlert({ source: 'health/ai', failure: credit })
    expect(outcome).toEqual({ sent: true, messageId: 'msg_1' })
    expect(sendEmail).toHaveBeenCalledOnce()
    expect(sendEmail.mock.calls[0][0]).toBe('ops@x.test')
    expect(sendEmail.mock.calls[0][1]).toMatch(/out of credit/i)
    // The daily check is not throttled: a standing outage is re-announced.
    expect(claimCronLock).not.toHaveBeenCalled()
  })

  it('is not quiet when nobody is named', async () => {
    const outcome = await sendAiOutageAlert({ source: 'health/ai', failure: credit })
    expect(outcome).toEqual({ sent: false, reason: 'no-recipient' })
    expect(sendEmail).not.toHaveBeenCalled()
    expect(errorSpy.mock.calls.flat().join(' ')).toContain('AI_ALERT_EMAIL')
  })

  it('sends one live alert per kind per lease, held in the cron lease table', async () => {
    process.env.AI_ALERT_EMAIL = 'ops@x.test'
    const first = await sendAiOutageAlert(
      { source: 'live-request', failure: credit },
      { throttle: true },
    )
    expect(first.sent).toBe(true)
    expect(claimCronLock).toHaveBeenCalledWith(
      'ai-alert:credit_exhausted',
      AI_ALERT_THROTTLE_SECONDS,
    )

    claimCronLock.mockResolvedValue(false)
    const second = await sendAiOutageAlert(
      { source: 'live-request', failure: credit },
      { throttle: true },
    )
    expect(second).toEqual({ sent: false, reason: 'throttled' })
    expect(sendEmail).toHaveBeenCalledOnce()
  })

  it('sends anyway when the lease cannot be reached', async () => {
    process.env.AI_ALERT_EMAIL = 'ops@x.test'
    claimCronLock.mockRejectedValue(new Error('relation "cron_runs" does not exist'))
    const outcome = await sendAiOutageAlert(
      { source: 'live-request', failure: credit },
      { throttle: true },
    )
    expect(outcome.sent).toBe(true)
  })

  it('gives the lease back when the email fails, so the next failure tries again', async () => {
    process.env.AI_ALERT_EMAIL = 'ops@x.test'
    sendEmail.mockResolvedValue({ success: false, error: 'resend http-error: 500' })
    const outcome = await sendAiOutageAlert(
      { source: 'live-request', failure: credit },
      { throttle: true },
    )
    expect(outcome).toMatchObject({ sent: false, reason: 'send-failed' })
    expect(releaseCronLock).toHaveBeenCalledWith('ai-alert:credit_exhausted')
  })

  it('never throws, even when the mail module does', async () => {
    process.env.AI_ALERT_EMAIL = 'ops@x.test'
    sendEmail.mockRejectedValue(new Error('boom'))
    await expect(
      sendAiOutageAlert({ source: 'health/ai', failure: credit }),
    ).resolves.toMatchObject({
      sent: false,
    })
  })
})
