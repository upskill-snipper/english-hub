// @vitest-environment node
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { NextRequest } from 'next/server'

// Mocked before the route is imported (vitest hoists vi.mock).
vi.mock('@/lib/supabase/server', () => ({
  createServerSupabaseClient: vi.fn(),
  createServiceRoleClient: vi.fn(),
}))
vi.mock('@/lib/rate-limit', () => ({ rateLimit: vi.fn() }))
vi.mock('@sentry/nextjs', () => ({ captureMessage: vi.fn() }))

import { POST } from './route'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit } from '@/lib/rate-limit'

/**
 * POST /api/games/rounds stores a signed-in student's round in game_rounds,
 * under the SESSION's auth uuid, with only the shape store.ts accepts.
 *
 * The defect this route replaces (13 October 2026): /api/progress/games wrote
 * the auth uuid into a table whose rule admits only the Prisma cuid, so every
 * write since May was refused, and nobody saw it because the browser ignored
 * the answer. These tests pin the identity written, the counts computed here
 * rather than trusted, and that a refusal or a failure leaves a log line.
 */

const ACCOUNT = '7d1c9a52-1f0e-4b7a-9c3d-2e8f6a4b1c90'
const OTHER = '11111111-2222-4333-8444-555555555555'

let upsert: ReturnType<typeof vi.fn>
let from: ReturnType<typeof vi.fn>

function signedIn(id: string | null) {
  vi.mocked(createServerSupabaseClient).mockReturnValue({
    auth: { getUser: async () => ({ data: { user: id ? { id } : null } }) },
  } as unknown as ReturnType<typeof createServerSupabaseClient>)
}

const post = (body: unknown) =>
  new NextRequest('https://theenglishhub.app/api/games/rounds', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: typeof body === 'string' ? body : JSON.stringify(body),
  })

const ROUND = {
  clientRoundId: '3b1f0c2e-9d4a-4f6b-8a71-0c5e2d9f4a13',
  source: 'skills',
  activity: 'speed-analysis',
  score: 2,
  maxScore: 3,
  durationSeconds: 95,
  items: [
    { i: 'a1b2c3', k: 'metaphor', c: 1 },
    { i: 'd4e5f6', k: 'simile', c: 0, w: 'Metaphor' },
    { i: 'g7h8i9', k: 'irony', c: 1, w: 'Hyperbole' },
  ],
}

let log: ReturnType<typeof vi.spyOn>
beforeEach(() => {
  vi.clearAllMocks()
  vi.mocked(rateLimit).mockResolvedValue({ success: true, remaining: 100, resetAt: 0 })
  upsert = vi.fn(async () => ({ error: null }))
  from = vi.fn(() => ({ upsert }))
  vi.mocked(createServiceRoleClient).mockReturnValue({ from } as unknown as ReturnType<
    typeof createServiceRoleClient
  >)
  log = vi.spyOn(console, 'error').mockImplementation(() => {})
})
afterEach(() => log.mockRestore())

describe('POST /api/games/rounds', () => {
  it('stores the round under the session’s auth uuid, once per browser round id', async () => {
    signedIn(ACCOUNT)
    const res = await POST(post(ROUND))
    expect(res.status).toBe(204)
    expect(from).toHaveBeenCalledWith('game_rounds')
    const [row, opts] = upsert.mock.calls[0]
    expect(row.user_id).toBe(ACCOUNT)
    expect(row.client_round_id).toBe(ROUND.clientRoundId)
    expect(opts).toEqual({ onConflict: 'user_id,client_round_id', ignoreDuplicates: true })
  })

  it('counts answered and right itself, and keeps a chosen option only on a wrong answer', async () => {
    signedIn(ACCOUNT)
    await POST(post(ROUND))
    const [row] = upsert.mock.calls[0]
    expect(row.answered).toBe(3)
    expect(row.correct).toBe(2)
    expect(row.items).toEqual([
      { i: 'a1b2c3', k: 'metaphor', c: 1 },
      { i: 'd4e5f6', k: 'simile', c: 0, w: 'Metaphor' },
      { i: 'g7h8i9', k: 'irony', c: 1 },
    ])
  })

  it('refuses a body that names a user, or claims its own counts', async () => {
    signedIn(ACCOUNT)
    expect((await POST(post({ ...ROUND, userId: OTHER }))).status).toBe(400)
    expect((await POST(post({ ...ROUND, answered: 50, correct: 50 }))).status).toBe(400)
    expect(upsert).not.toHaveBeenCalled()
  })

  it('refuses a game or text the site does not have, and logs the refusal without the values', async () => {
    signedIn(ACCOUNT)
    const res = await POST(post({ ...ROUND, activity: 'not-a-real-game' }))
    expect(res.status).toBe(400)
    expect(upsert).not.toHaveBeenCalled()
    expect(log).toHaveBeenCalledOnce()
    expect(log.mock.calls[0][0]).toBe('[game-rounds] refused')
    expect(String(log.mock.calls[0][1])).toContain('activity')
    expect(String(log.mock.calls[0][1])).not.toContain('not-a-real-game')
  })

  it('takes a quest level, but not a level on a skills game', async () => {
    signedIn(ACCOUNT)
    const quest = {
      clientRoundId: 'abcdef12-3456',
      source: 'quest',
      activity: 'macbeth',
      level: 'chapter-2',
      items: [{ i: 'x1', k: 'method', c: 0 }],
    }
    expect((await POST(post(quest))).status).toBe(204)
    expect((await POST(post({ ...ROUND, level: 'chapter-2' }))).status).toBe(400)
  })

  it('refuses an item id that is not a hash, so no quotation or name is stored as one', async () => {
    signedIn(ACCOUNT)
    const res = await POST(
      post({ ...ROUND, items: [{ i: 'Fair is foul, and foul is fair', k: 'where', c: 1 }] }),
    )
    expect(res.status).toBe(400)
    expect(upsert).not.toHaveBeenCalled()
  })

  it('stores nothing for someone not signed in', async () => {
    signedIn(null)
    const res = await POST(post(ROUND))
    expect(res.status).toBe(401)
    expect(from).not.toHaveBeenCalled()
  })

  it('says so when the database refuses, with the code and not the round', async () => {
    signedIn(ACCOUNT)
    upsert.mockResolvedValueOnce({
      error: { code: '42501', message: 'permission denied for table game_rounds' },
    })
    const res = await POST(post(ROUND))
    expect(res.status).toBe(500)
    expect(log.mock.calls[0][0]).toBe('[game-rounds] save failed')
    expect(String(log.mock.calls[0][1])).toContain('42501')
    expect(String(log.mock.calls[0][1])).not.toContain('Metaphor')
  })

  it('stops a runaway client', async () => {
    signedIn(ACCOUNT)
    vi.mocked(rateLimit).mockResolvedValueOnce({ success: false, remaining: 0, resetAt: 0 })
    expect((await POST(post(ROUND))).status).toBe(429)
    expect(upsert).not.toHaveBeenCalled()
  })
})
