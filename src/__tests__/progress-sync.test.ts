/**
 * Tests for POST /api/progress/sync.
 *
 * Strategy: mock the Supabase server client and rate-limiter, then
 * invoke the exported POST handler directly. Each test reconfigures
 * the mock to drive a specific code path (auth, validation, upsert,
 * error). The mock records every `from(...).upsert(...)` /
 * `.insert(...)` call so we can assert that:
 *   - `user_id` is bound from the authenticated session, NOT the body
 *   - the right tables are hit with the right shaped rows
 *   - response shape `{ inserted, updated, errors }` is honoured
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'

// ---------------------------------------------------------------------------
// Mocks — defined before the route module is loaded
// ---------------------------------------------------------------------------

interface SupabaseSessionFixture {
  user: { id: string } | null
  error: { message: string } | null
}

let session: SupabaseSessionFixture = {
  user: { id: 'auth-user-1' },
  error: null,
}

// Per-test recorders so assertions can inspect what the route did.
interface UpsertCall {
  table: string
  rows: Array<Record<string, unknown>>
  onConflict?: string
}
interface InsertCall {
  table: string
  rows: Array<Record<string, unknown>>
}

let upsertCalls: UpsertCall[] = []
let insertCalls: InsertCall[] = []

// Per-table existing-row fixtures keyed by the natural-key column. The
// route calls `select(...).eq('user_id', uid).in(<key>, [...])` and we
// echo back rows so the route's inserted-vs-updated split is testable.
let existingRows: Record<string, Array<Record<string, unknown>>> = {}

// Per-table error fixtures — let a test simulate a DB failure on a
// single table without breaking the others.
let upsertErrors: Record<string, { message: string } | null> = {}
let insertErrors: Record<string, { message: string } | null> = {}

vi.mock('@/lib/supabase/server', () => ({
  createServerSupabaseClient: () => ({
    auth: {
      getUser: async () => ({
        data: { user: session.user },
        error: session.error,
      }),
    },
    from: (table: string) => ({
      select: (_cols: string) => ({
        eq: (_col: string, _val: string) => ({
          in: async (_keyCol: string, _keys: string[]) => ({
            data: existingRows[table] ?? [],
            error: null,
          }),
        }),
      }),
      upsert: async (rows: Array<Record<string, unknown>>, opts?: { onConflict?: string }) => {
        upsertCalls.push({ table, rows, onConflict: opts?.onConflict })
        return { error: upsertErrors[table] ?? null }
      },
      insert: async (rows: Array<Record<string, unknown>>) => {
        insertCalls.push({ table, rows })
        return { error: insertErrors[table] ?? null }
      },
    }),
  }),
}))

const rateLimitMock = vi.fn(async () => ({
  success: true,
  remaining: 9,
  resetAt: Date.now() + 3_600_000,
}))

vi.mock('@/lib/rate-limit', () => ({
  rateLimit: rateLimitMock,
  getClientIp: () => '127.0.0.1',
}))

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function buildRequest(body: unknown): NextRequest {
  return new NextRequest('http://localhost/api/progress/sync', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  })
}

function buildRequestRaw(body: string): NextRequest {
  return new NextRequest('http://localhost/api/progress/sync', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body,
  })
}

async function invokePost(req: NextRequest): Promise<Response> {
  const mod = await import('@/app/api/progress/sync/route')
  return mod.POST(req)
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe('POST /api/progress/sync', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    session = { user: { id: 'auth-user-1' }, error: null }
    upsertCalls = []
    insertCalls = []
    existingRows = {}
    upsertErrors = {}
    insertErrors = {}
    rateLimitMock.mockResolvedValue({
      success: true,
      remaining: 9,
      resetAt: Date.now() + 3_600_000,
    })
  })

  // ── Auth ────────────────────────────────────────────────────────────

  it('returns 401 when there is no Supabase session', async () => {
    session = { user: null, error: null }
    const res = await invokePost(buildRequest({ poems: [] }))
    expect(res.status).toBe(401)
    const body = (await res.json()) as { error: string }
    expect(body.error).toBe('Unauthorized')
    // No DB writes should have happened.
    expect(upsertCalls).toHaveLength(0)
    expect(insertCalls).toHaveLength(0)
  })

  it('returns 401 when Supabase reports an auth error', async () => {
    session = { user: null, error: { message: 'jwt expired' } }
    const res = await invokePost(buildRequest({ poems: [] }))
    expect(res.status).toBe(401)
  })

  // ── Rate limit ──────────────────────────────────────────────────────

  it('returns 429 when the user is rate-limited', async () => {
    rateLimitMock.mockResolvedValueOnce({
      success: false,
      remaining: 0,
      resetAt: Date.now() + 60_000,
    })
    const res = await invokePost(buildRequest({ poems: [] }))
    expect(res.status).toBe(429)
    expect(res.headers.get('Retry-After')).toBeTruthy()
  })

  it('keys the rate limit on the authenticated user id', async () => {
    await invokePost(buildRequest({}))
    expect(rateLimitMock).toHaveBeenCalledWith(
      'progress-sync:auth-user-1',
      expect.objectContaining({ limit: 10, windowSeconds: 3600 }),
    )
  })

  // ── Validation ──────────────────────────────────────────────────────

  it('returns 400 on invalid JSON', async () => {
    const res = await invokePost(buildRequestRaw('{not json'))
    expect(res.status).toBe(400)
  })

  it('returns 400 when a poem entry is missing slug', async () => {
    const res = await invokePost(buildRequest({ poems: [{ board: 'aqa' }] }))
    expect(res.status).toBe(400)
  })

  // ── Empty / no-op ──────────────────────────────────────────────────

  it('returns inserted:0 updated:0 when the body has no arrays', async () => {
    const res = await invokePost(buildRequest({}))
    expect(res.status).toBe(200)
    const body = (await res.json()) as {
      inserted: number
      updated: number
      errors: string[]
    }
    expect(body).toEqual({ inserted: 0, updated: 0, errors: [] })
    expect(upsertCalls).toHaveLength(0)
    expect(insertCalls).toHaveLength(0)
  })

  // ── Poems ───────────────────────────────────────────────────────────

  it('upserts poems into progress_poems with the authenticated user_id', async () => {
    const res = await invokePost(
      buildRequest({
        poems: [
          {
            slug: 'ozymandias',
            board: 'aqa',
            status: 'studied',
            annotatedLines: 4,
          },
        ],
      }),
    )
    expect(res.status).toBe(200)
    const poemCall = upsertCalls.find((c) => c.table === 'progress_poems')
    expect(poemCall).toBeDefined()
    expect(poemCall!.onConflict).toBe('user_id,slug')
    expect(poemCall!.rows).toHaveLength(1)
    expect(poemCall!.rows[0]).toMatchObject({
      user_id: 'auth-user-1',
      slug: 'ozymandias',
      board: 'aqa',
      status: 'studied',
      annotated_lines: 4,
    })
  })

  it('ignores any client-supplied user_id and binds to the session id', async () => {
    // Even if the schema permitted extra fields, the route never copies
    // them — the row's user_id always comes from the session.
    await invokePost(
      buildRequest({
        poems: [{ slug: 'tissue', board: 'aqa' }],
      }),
    )
    const poemCall = upsertCalls.find((c) => c.table === 'progress_poems')!
    expect(poemCall.rows[0].user_id).toBe('auth-user-1')
  })

  // ── Games ───────────────────────────────────────────────────────────

  it('upserts games into progress_games with snake_cased columns', async () => {
    await invokePost(
      buildRequest({
        games: [
          {
            slug: 'vocab-blast',
            bestScore: 92,
            totalPlays: 7,
            totalTimeSeconds: 480,
          },
        ],
      }),
    )
    const gameCall = upsertCalls.find((c) => c.table === 'progress_games')!
    expect(gameCall.onConflict).toBe('user_id,slug')
    expect(gameCall.rows[0]).toMatchObject({
      user_id: 'auth-user-1',
      slug: 'vocab-blast',
      best_score: 92,
      total_plays: 7,
      total_time_seconds: 480,
    })
  })

  // ── Quizzes ─────────────────────────────────────────────────────────

  it('upserts quizzes onto user_id+quiz_id', async () => {
    await invokePost(
      buildRequest({
        quizzes: [
          {
            quizId: 'poetry-q1',
            attempts: 2,
            bestScore: 8,
            lastScore: 7,
          },
        ],
      }),
    )
    const quizCall = upsertCalls.find((c) => c.table === 'progress_quizzes')!
    expect(quizCall.onConflict).toBe('user_id,quiz_id')
    expect(quizCall.rows[0]).toMatchObject({
      user_id: 'auth-user-1',
      quiz_id: 'poetry-q1',
      attempts: 2,
      best_score: 8,
      last_score: 7,
    })
  })

  // ── Reading age (insert only — no natural key) ─────────────────────

  it('inserts (does NOT upsert) reading age rows', async () => {
    await invokePost(
      buildRequest({
        readingAge: [
          {
            passageId: 'pa-001',
            readingAgeYears: 11.5,
            comprehensionScore: 0.8,
            timeSeconds: 240,
          },
        ],
      }),
    )
    const ra = insertCalls.find((c) => c.table === 'progress_reading_age')!
    expect(ra).toBeDefined()
    expect(ra.rows[0]).toMatchObject({
      user_id: 'auth-user-1',
      passage_id: 'pa-001',
      reading_age_years: 11.5,
      comprehension_score: 0.8,
      time_seconds: 240,
    })
    // Must NOT have upserted the reading age table.
    expect(upsertCalls.find((c) => c.table === 'progress_reading_age')).toBeUndefined()
  })

  // ── inserted vs updated counts ─────────────────────────────────────

  it('counts pre-existing rows as updated and new rows as inserted', async () => {
    existingRows['progress_poems'] = [{ slug: 'ozymandias' }]
    const res = await invokePost(
      buildRequest({
        poems: [
          { slug: 'ozymandias' }, // existing → updated
          { slug: 'kamikaze' }, // new       → inserted
        ],
      }),
    )
    const body = (await res.json()) as {
      inserted: number
      updated: number
      errors: string[]
    }
    expect(body.inserted).toBe(1)
    expect(body.updated).toBe(1)
    expect(body.errors).toEqual([])
  })

  // ── Mixed payload ──────────────────────────────────────────────────

  it('processes all four arrays in one request', async () => {
    const res = await invokePost(
      buildRequest({
        poems: [{ slug: 'ozymandias' }],
        games: [{ slug: 'vocab-blast', bestScore: 10 }],
        quizzes: [{ quizId: 'q-1', bestScore: 9 }],
        readingAge: [{ passageId: 'p-1', readingAgeYears: 12 }],
      }),
    )
    expect(res.status).toBe(200)
    expect(upsertCalls.map((c) => c.table).sort()).toEqual([
      'progress_games',
      'progress_poems',
      'progress_quizzes',
    ])
    expect(insertCalls.map((c) => c.table)).toEqual(['progress_reading_age'])
  })

  // ── Partial failure ────────────────────────────────────────────────

  it('reports per-table errors without aborting the other tables', async () => {
    upsertErrors['progress_quizzes'] = { message: 'constraint violation' }
    const res = await invokePost(
      buildRequest({
        poems: [{ slug: 'ozymandias' }],
        quizzes: [{ quizId: 'q-1' }],
      }),
    )
    expect(res.status).toBe(200)
    const body = (await res.json()) as {
      inserted: number
      updated: number
      errors: string[]
    }
    // Poem still committed.
    expect(body.inserted).toBeGreaterThanOrEqual(1)
    expect(body.errors.length).toBe(1)
    expect(body.errors[0]).toContain('progress_quizzes')
    expect(body.errors[0]).toContain('constraint violation')
  })
})
