// @vitest-environment node
import { describe, it, expect, vi, beforeEach } from 'vitest'

/**
 * readRounds reads in pages (16 October 2026). Supabase's API returns at most
 * 1,000 rows to one request by default and says nothing when it stops there,
 * so a single request for up to 2,000 rounds silently dropped the oldest of
 * any student who had played more than 1,000. The fake below enforces that
 * cap, as the real API does.
 */

const state = vi.hoisted(() => ({
  rows: [] as Record<string, unknown>[],
  ranges: [] as [number, number][],
  failOnPage: -1,
}))

const SERVER_CAP = 1000

vi.mock('@/lib/supabase/server', () => ({
  createServiceRoleClient: () => ({
    from: () => {
      const q = {
        select: () => q,
        eq: () => q,
        gte: () => q,
        order: () => q,
        range: async (from: number, to: number) => {
          state.ranges.push([from, to])
          if (state.ranges.length - 1 === state.failOnPage) {
            return { data: null, error: { message: 'simulated' } }
          }
          const end = Math.min(to + 1, from + SERVER_CAP)
          return { data: state.rows.slice(from, end), error: null }
        },
        // A single unpaged request, as the old code made: capped like the real API.
        limit: async (n: number) => ({
          data: state.rows.slice(0, Math.min(n, SERVER_CAP)),
          error: null,
        }),
      }
      return q
    },
  }),
}))

import { readRounds, ROUNDS_PAGE, ANALYTICS_MAX_ROUNDS } from './store'

const row = (n: number) => ({
  source: 'skills',
  activity: 'speed-analysis',
  level: null,
  answered: 1,
  correct: 1,
  score: null,
  max_score: null,
  duration_seconds: 10,
  items: [],
  finished_at: new Date(Date.UTC(2026, 9, 16) - n * 60_000).toISOString(),
})

beforeEach(() => {
  state.ranges = []
  state.failOnPage = -1
})

describe('readRounds', () => {
  it('reads every round past the API row cap, a page at a time', async () => {
    state.rows = Array.from({ length: 1203 }, (_, n) => row(n))
    const rounds = await readRounds('u1')
    expect(rounds).toHaveLength(1203)
    expect(state.ranges).toEqual([
      [0, ROUNDS_PAGE - 1],
      [ROUNDS_PAGE, 2 * ROUNDS_PAGE - 1],
      [2 * ROUNDS_PAGE, 3 * ROUNDS_PAGE - 1],
    ])
  })

  it('stops at its limit', async () => {
    state.rows = Array.from({ length: 3000 }, (_, n) => row(n))
    expect(await readRounds('u1')).toHaveLength(ANALYTICS_MAX_ROUNDS)
    state.ranges = []
    expect(await readRounds('u1', { limit: 600 })).toHaveLength(600)
    expect(state.ranges).toEqual([
      [0, ROUNDS_PAGE - 1],
      [ROUNDS_PAGE, 599],
    ])
  })

  it('throws, rather than returning part of a record, when a later page fails', async () => {
    state.rows = Array.from({ length: 1203 }, (_, n) => row(n))
    state.failOnPage = 1
    await expect(readRounds('u1')).rejects.toThrow(/game_rounds read failed/)
  })

  it('makes one request when there is less than a page', async () => {
    state.rows = Array.from({ length: 12 }, (_, n) => row(n))
    expect(await readRounds('u1')).toHaveLength(12)
    expect(state.ranges).toHaveLength(1)
  })
})
