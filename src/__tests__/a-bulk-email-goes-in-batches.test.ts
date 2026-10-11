// @vitest-environment node
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

/**
 * A bulk job's emails go in batches, not as one request each.
 *
 * WHY (11 October 2026). The school bulk upload emails up to 500 pupils their
 * temporary passwords at once. It fired one Resend request per pupil, all
 * together, and Resend allows 10 requests a second per team, refusing the rest
 * with 429. Most pupils in a large upload would never have received their
 * password. sendBatchViaResend uses Resend's batch endpoint, 100 emails to a
 * request, and sendEmailBatch puts the welcome emails through it with the same
 * sender address sendEmail uses.
 */

vi.mock('@/lib/prisma', () => ({ prisma: {} }))
vi.mock('@/lib/supabase/server', () => ({ createServiceRoleClient: () => ({}) }))
vi.mock('@/lib/trustpilot/should-bcc', () => ({ shouldBccTrustpilot: vi.fn() }))

import { sendBatchViaResend, sendViaResend, RESEND_BATCH_LIMIT } from '@/lib/email/resend'
import { sendEmailBatch } from '@/lib/email'

const message = (i: number) => ({
  to: `pupil${i}@example.school.uk`,
  subject: 'Your English Hub account',
  html: `<p>Password ${i}</p>`,
})

const ok = () =>
  new Response(JSON.stringify({ data: [] }), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  })

let fetchMock: ReturnType<typeof vi.fn>

beforeEach(() => {
  fetchMock = vi.fn(async () => ok())
  vi.stubGlobal('fetch', fetchMock)
  vi.stubEnv('RESEND_API_KEY', 're_test_key')
  vi.stubEnv('SMTP_HOST', '')
  vi.spyOn(console, 'error').mockImplementation(() => {})
  vi.spyOn(console, 'warn').mockImplementation(() => {})
})

afterEach(() => {
  vi.unstubAllGlobals()
  vi.unstubAllEnvs()
  vi.restoreAllMocks()
})

/** The JSON arrays posted to the batch endpoint, one per request. */
const batchesSent = () =>
  fetchMock.mock.calls.map(([url, init]) => {
    expect(url).toBe('https://api.resend.com/emails/batch')
    return JSON.parse(String((init as RequestInit).body)) as Array<Record<string, unknown>>
  })

describe('sendBatchViaResend', () => {
  it('sends 250 emails as three requests of at most 100, in order', async () => {
    const messages = Array.from({ length: 250 }, (_, i) => message(i))
    const result = await sendBatchViaResend(messages)
    expect(result).toEqual({ sent: 250, failed: [] })
    const batches = batchesSent()
    expect(RESEND_BATCH_LIMIT).toBe(100)
    expect(batches.map((b) => b.length)).toEqual([100, 100, 50])
    expect(batches.flat().map((m) => m.to)).toEqual(messages.map((m) => m.to))
  })

  it('maps each email the way the single send does', async () => {
    const one = { ...message(1), text: 'Password 1', replyTo: 'school@example.school.uk' }
    await sendBatchViaResend([one])
    const [batch] = batchesSent()
    expect(batch[0]).toEqual({
      from: 'The English Hub <noreply@theenglishhub.app>',
      to: one.to,
      subject: one.subject,
      html: one.html,
      text: 'Password 1',
      reply_to: 'school@example.school.uk',
    })

    // The single send still builds the same object from the shared mapping.
    fetchMock.mockResolvedValueOnce(
      new Response(JSON.stringify({ id: 'e1' }), {
        status: 200,
        headers: { 'content-type': 'application/json' },
      }),
    )
    await sendViaResend(one)
    const single = JSON.parse(String((fetchMock.mock.calls[1][1] as RequestInit).body))
    expect(fetchMock.mock.calls[1][0]).toBe('https://api.resend.com/emails')
    expect(single).toEqual(batch[0])
  })

  it('reports every email in a refused request as failed, and still sends the rest', async () => {
    fetchMock
      .mockImplementationOnce(async () => ok())
      .mockImplementationOnce(async () => new Response('Too many requests', { status: 429 }))
      .mockImplementationOnce(async () => ok())
    const messages = Array.from({ length: 250 }, (_, i) => message(i))
    const result = await sendBatchViaResend(messages)
    expect(result.sent).toBe(150)
    expect(result.failed).toHaveLength(100)
    expect(result.failed[0]).toMatchObject({
      to: 'pupil100@example.school.uk',
      reason: 'http-error',
    })
    expect(result.failed[0].detail).toContain('429')
  })

  it('reports a network failure without throwing', async () => {
    fetchMock.mockRejectedValue(new Error('socket hang up'))
    const result = await sendBatchViaResend([message(1), message(2)])
    expect(result.sent).toBe(0)
    expect(result.failed.map((f) => f.reason)).toEqual(['network-error', 'network-error'])
  })

  it('without a key sends nothing and says so for every email', async () => {
    vi.stubEnv('RESEND_API_KEY', '')
    const result = await sendBatchViaResend([message(1), message(2)])
    expect(fetchMock).not.toHaveBeenCalled()
    expect(result).toEqual({
      sent: 0,
      failed: [
        { to: 'pupil1@example.school.uk', reason: 'no-key' },
        { to: 'pupil2@example.school.uk', reason: 'no-key' },
      ],
    })
  })
})

describe('sendEmailBatch', () => {
  it('goes through the batch endpoint, from the address sendEmail uses', async () => {
    const result = await sendEmailBatch([message(1), message(2), message(3)])
    expect(result).toEqual({ sent: 3, failed: [] })
    const [batch] = batchesSent()
    expect(batch.map((m) => m.from)).toEqual(
      Array(3).fill('The English Hub <noreply@theenglishhub.app>'),
    )
  })

  it('returns the addresses that were not sent', async () => {
    fetchMock.mockImplementationOnce(async () => new Response('bad', { status: 500 }))
    const result = await sendEmailBatch([message(1), message(2)])
    expect(result).toEqual({
      sent: 0,
      failed: ['pupil1@example.school.uk', 'pupil2@example.school.uk'],
    })
  })

  it('sends nothing for an empty list', async () => {
    expect(await sendEmailBatch([])).toEqual({ sent: 0, failed: [] })
    expect(fetchMock).not.toHaveBeenCalled()
  })
})
