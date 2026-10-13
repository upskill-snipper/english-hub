// @vitest-environment node
import { describe, it, expect, vi, beforeEach } from 'vitest'

vi.mock('@/lib/supabase/server', () => ({
  createServerSupabaseClient: vi.fn(),
  createServiceRoleClient: vi.fn(),
}))
vi.mock('@/lib/rate-limit', () => ({ rateLimit: vi.fn() }))
vi.mock('@/lib/game-results/store', () => ({ readRounds: vi.fn() }))
vi.mock('@/lib/course-access', () => ({ hasActiveSubscription: vi.fn(async () => true) }))

import { GET } from './route'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit } from '@/lib/rate-limit'
import { readRounds } from '@/lib/game-results/store'
import type { StoredRound } from '@/lib/game-results/types'

/**
 * GET /api/games/analytics returns a student's own figures always, and the
 * rule-based next steps only when their suggestions setting is on: the
 * Children's Code default switches it off for under-18s, and the founder
 * decided (13 October 2026) that suggestions follow it. Unsure means off. A
 * read failure is a 503, never an empty record.
 */

const ACCOUNT = '7d1c9a52-1f0e-4b7a-9c3d-2e8f6a4b1c90'
let readsRoundsFor: string | null = null

function signedIn(id: string | null) {
  vi.mocked(createServerSupabaseClient).mockReturnValue({
    auth: { getUser: async () => ({ data: { user: id ? { id } : null } }) },
  } as unknown as ReturnType<typeof createServerSupabaseClient>)
}

function suggestions(value: boolean | null | 'throws') {
  vi.mocked(createServiceRoleClient).mockReturnValue({
    from: () => ({
      select: () => ({
        eq: () => ({
          maybeSingle: async () => {
            if (value === 'throws') throw new Error('down')
            return { data: value === null ? null : { personalised_recommendations: value } }
          },
        }),
      }),
    }),
  } as unknown as ReturnType<typeof createServiceRoleClient>)
}

const weak: StoredRound = {
  source: 'quest',
  activity: 'macbeth',
  level: 'craft',
  answered: 10,
  correct: 2,
  score: null,
  maxScore: null,
  durationSeconds: 120,
  items: Array.from({ length: 10 }, (_, k) => ({
    i: `q${k}`,
    k: 'method',
    c: (k < 2 ? 1 : 0) as 0 | 1,
  })),
  finishedAt: new Date().toISOString(),
}

beforeEach(() => {
  vi.clearAllMocks()
  vi.mocked(rateLimit).mockResolvedValue({ success: true, remaining: 100, resetAt: 0 })
  vi.mocked(readRounds).mockImplementation(async (id: string) => {
    readsRoundsFor = id
    return [weak]
  })
})

describe('GET /api/games/analytics', () => {
  it('reads the session’s own rounds and names what was played', async () => {
    signedIn(ACCOUNT)
    suggestions(false)
    const res = await GET()
    expect(res.status).toBe(200)
    expect(readsRoundsFor).toBe(ACCOUNT)
    const body = await res.json()
    expect(body.analytics.totals.answered).toBe(10)
    expect(body.names['quest:macbeth']).toBe('Macbeth')
  })

  it('gives no next steps while suggestions are off', async () => {
    signedIn(ACCOUNT)
    suggestions(false)
    const body = await (await GET()).json()
    expect(body.suggestions.allowed).toBe(false)
    expect(body.nextSteps).toBeNull()
    // The analysis itself is still there: it describes, it does not suggest.
    expect(body.analytics.workOn.length).toBeGreaterThan(0)
  })

  it('gives the coach card nothing while suggestions are off', async () => {
    signedIn(ACCOUNT)
    suggestions(false)
    expect((await (await GET()).json()).coach).toBeNull()
  })

  it('gives the coach card its plan status once suggestions are on', async () => {
    signedIn(ACCOUNT)
    suggestions(true)
    const coach = (await (await GET()).json()).coach
    expect(coach).toMatchObject({ planned: true, minAnswers: 20, cooldownHours: 20 })
  })

  it('gives next steps once they are on', async () => {
    signedIn(ACCOUNT)
    suggestions(true)
    const body = await (await GET()).json()
    expect(body.suggestions.allowed).toBe(true)
    expect(body.nextSteps[0].href).toBe('/games/texts/macbeth')
  })

  it('treats an unreadable or missing setting as off', async () => {
    signedIn(ACCOUNT)
    suggestions(null)
    expect((await (await GET()).json()).suggestions.allowed).toBe(false)
    suggestions('throws')
    expect((await (await GET()).json()).suggestions.allowed).toBe(false)
  })

  it('says it could not load, rather than showing an empty record', async () => {
    signedIn(ACCOUNT)
    suggestions(true)
    vi.mocked(readRounds).mockRejectedValueOnce(new Error('game_rounds read failed: timeout'))
    const err = vi.spyOn(console, 'error').mockImplementation(() => {})
    const res = await GET()
    expect(res.status).toBe(503)
    err.mockRestore()
  })

  it('shows nothing to someone not signed in', async () => {
    signedIn(null)
    expect((await GET()).status).toBe(401)
    expect(readRounds).not.toHaveBeenCalled()
  })
})
