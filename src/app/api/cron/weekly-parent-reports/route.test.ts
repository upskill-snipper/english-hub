/**
 * Tests for the weekly-parent-reports cron route.
 *
 * Strategy: stub CRON_SECRET, mock Prisma, sendEmail, and global fetch.
 * Invoke POST directly and assert the envelope plus the number of
 * persists, emails, and push fan-outs.
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'

// ─── Mocks ───────────────────────────────────────────────────────────────

type ParentChildRow = {
  id: string
  firstName: string
  dateOfBirth: Date
  parentId: string | null
  privacySettings: {
    aiOptOut: boolean
    profileVisibility: 'PRIVATE' | 'SCHOOL_ONLY' | 'PUBLIC'
  } | null
}

type EssayRow = {
  id: string
  subject: 'LANGUAGE' | 'LITERATURE'
  createdAt: Date
  aiFeedback: {
    overallScore: number
    grammarScore: number
    structureScore: number
    argumentScore: number
    vocabularyScore: number
  } | null
}

type ParentRow = { id: string; email: string; firstName: string }

const state: {
  parentChildPairs: ParentChildRow[]
  essaysByChild: Record<string, EssayRow[]>
  assignmentsCountByChild: Record<string, number>
  parents: Record<string, ParentRow>
  weeklyReports: Array<{ studentId: string; weekStarting: Date }>
} = {
  parentChildPairs: [],
  essaysByChild: {},
  assignmentsCountByChild: {},
  parents: {},
  weeklyReports: [],
}

const createSpy = vi.fn(async ({ data }: { data: { studentId: string; weekStarting: Date } }) => {
  state.weeklyReports.push({ studentId: data.studentId, weekStarting: data.weekStarting })
  return { id: `wr_${state.weeklyReports.length}` }
})

vi.mock('@/lib/prisma', () => ({
  prisma: {
    user: {
      findMany: vi.fn(async () => state.parentChildPairs),
      findUnique: vi.fn(async ({ where }: { where: { id: string } }) => {
        return state.parents[where.id] ?? null
      }),
    },
    essay: {
      findMany: vi.fn(async ({ where }: { where: { userId: string } }) => {
        return state.essaysByChild[where.userId] ?? []
      }),
    },
    assignmentSubmission: {
      count: vi.fn(async ({ where }: { where: { studentId: string } }) => {
        return state.assignmentsCountByChild[where.studentId] ?? 0
      }),
    },
    weeklyReport: {
      findFirst: vi.fn(async ({ where }: { where: { studentId: string; weekStarting: Date } }) => {
        return (
          state.weeklyReports.find(
            (r) =>
              r.studentId === where.studentId &&
              r.weekStarting.getTime() === where.weekStarting.getTime(),
          ) ?? null
        )
      }),
      create: createSpy,
    },
  },
}))

const sendEmailMock = vi.fn(async () => ({ success: true, messageId: 'm_1' }))
vi.mock('@/lib/email', () => ({
  sendEmail: (...args: unknown[]) => sendEmailMock(...(args as [])),
}))

// runCron wraps body() - re-export a simple identity implementation.
vi.mock('@/lib/cron/observability', () => ({
  runCron: async <T>(_name: string, body: () => Promise<T>) => {
    const result = await body()
    return Response.json({ ok: true, data: result })
  },
}))

// Global fetch for push fan-out.
const fetchMock = vi.fn(async () => new Response('{"ok":true}', { status: 200 }))

beforeEach(() => {
  process.env.CRON_SECRET = 'test-secret-abcdef'
  state.parentChildPairs = []
  state.essaysByChild = {}
  state.assignmentsCountByChild = {}
  state.parents = {}
  state.weeklyReports = []
  createSpy.mockClear()
  sendEmailMock.mockClear()
  fetchMock.mockClear()
  vi.stubGlobal('fetch', fetchMock)
})

// ─── Import AFTER mocks are registered ───────────────────────────────────

const { POST } = await import('./route')

// ─── Helpers ─────────────────────────────────────────────────────────────

function buildRequest(secret = 'test-secret-abcdef'): NextRequest {
  return new NextRequest('http://localhost/api/cron/weekly-parent-reports', {
    method: 'POST',
    headers: { 'x-cron-secret': secret },
  })
}

function seedEligibleChild(
  id: string,
  parentId: string,
  {
    essays = 0,
    aiOptOut = false,
    visibility = 'SCHOOL_ONLY',
  }: {
    essays?: number
    aiOptOut?: boolean
    visibility?: 'SCHOOL_ONLY' | 'PRIVATE' | 'PUBLIC'
  } = {},
): void {
  state.parentChildPairs.push({
    id,
    firstName: `Child${id}`,
    dateOfBirth: new Date('2010-01-01T00:00:00.000Z'), // 16 in 2026
    parentId,
    privacySettings: { aiOptOut, profileVisibility: visibility },
  })
  state.essaysByChild[id] = Array.from({ length: essays }, (_, i) => ({
    id: `e-${id}-${i}`,
    subject: 'LANGUAGE',
    createdAt: new Date(`2026-04-${14 + i}T10:00:00.000Z`),
    aiFeedback: {
      overallScore: 72,
      grammarScore: 78,
      structureScore: 74,
      argumentScore: 60,
      vocabularyScore: 70,
    },
  }))
  state.parents[parentId] = {
    id: parentId,
    email: `parent-${parentId}@example.com`,
    firstName: `Parent${parentId}`,
  }
}

// ─── Tests ───────────────────────────────────────────────────────────────

describe('cron /api/cron/weekly-parent-reports', () => {
  it('rejects callers without a valid CRON_SECRET', async () => {
    const res = await POST(buildRequest('nope'))
    expect(res.status).toBe(401)
  })

  it('generates reports for 3 eligible parents and skips ineligible cases', async () => {
    seedEligibleChild('c1', 'p1', { essays: 2 })
    seedEligibleChild('c2', 'p2', { essays: 1 })
    seedEligibleChild('c3', 'p3', { essays: 3 })
    // Ineligible: AI opt-out
    seedEligibleChild('c4', 'p4', { essays: 2, aiOptOut: true })
    // Ineligible: PRIVATE
    seedEligibleChild('c5', 'p5', { essays: 2, visibility: 'PRIVATE' })

    const res = await POST(buildRequest())
    expect(res.status).toBe(200)

    const json = (await res.json()) as {
      ok: boolean
      data: {
        generated: number
        emailed: number
        pushed: number
        skipped: Record<string, number>
      }
    }

    expect(json.ok).toBe(true)
    expect(json.data.generated).toBe(3)
    expect(json.data.emailed).toBe(3)
    expect(json.data.pushed).toBe(3)
    expect(json.data.skipped.aiOptOut).toBe(1)
    expect(json.data.skipped.profilePrivate).toBe(1)

    expect(sendEmailMock).toHaveBeenCalledTimes(3)
    expect(createSpy).toHaveBeenCalledTimes(3)
    expect(fetchMock).toHaveBeenCalledTimes(3) // push fan-out per parent
  })

  it('is idempotent on re-run - existing reports are skipped', async () => {
    seedEligibleChild('c1', 'p1', { essays: 1 })

    const first = await POST(buildRequest())
    const firstBody = (await first.json()) as {
      data: { generated: number; skipped: Record<string, number> }
    }
    expect(firstBody.data.generated).toBe(1)

    // Second run should see the persisted WeeklyReport row and bail.
    const second = await POST(buildRequest())
    const secondBody = (await second.json()) as {
      data: { generated: number; skipped: Record<string, number> }
    }
    expect(secondBody.data.generated).toBe(0)
    expect(secondBody.data.skipped.alreadySent).toBe(1)
  })
})
