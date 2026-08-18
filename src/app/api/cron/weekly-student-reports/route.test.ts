/**
 * Tests for the weekly-student-reports cron route.
 *
 * Vercel Cron invokes GET with `Authorization: Bearer ${CRON_SECRET}`.
 * The route was historically POST-only (so the schedule 405ed forever);
 * these tests pin the GET + Bearer contract and the delegation to the
 * existing send logic. No kill switch is expected here: the digest goes
 * to the account holder and is gated on their own
 * PrivacySettings.marketingEnabled preference.
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'

// ─── Mocks ───────────────────────────────────────────────────────────────

type StudentRow = {
  id: string
  email: string
  firstName: string
  dateOfBirth: Date
  isMinor: boolean
  privacySettings: { aiOptOut: boolean; marketingEnabled: boolean } | null
}

type EssayRow = {
  id: string
  title: string | null
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

const state: {
  students: StudentRow[]
  essaysByStudent: Record<string, EssayRow[]>
} = {
  students: [],
  essaysByStudent: {},
}

vi.mock('@/lib/prisma', () => ({
  prisma: {
    user: {
      findMany: vi.fn(async () => state.students),
    },
    essay: {
      findMany: vi.fn(async ({ where }: { where: { userId: string } }) => {
        return state.essaysByStudent[where.userId] ?? []
      }),
    },
  },
}))

const sendViaResendMock = vi.fn(async () => ({ sent: true as const }))
vi.mock('@/lib/email/resend', () => ({
  sendViaResend: (...args: unknown[]) => sendViaResendMock(...(args as [])),
}))

vi.mock('@/lib/email/templates/weekly-student', () => ({
  renderWeeklyStudentEmail: vi.fn(async () => '<html>digest</html>'),
  renderWeeklyStudentText: vi.fn(() => 'digest'),
}))

beforeEach(() => {
  process.env.CRON_SECRET = 'test-secret-abcdef'
  state.students = []
  state.essaysByStudent = {}
  sendViaResendMock.mockClear()
})

// ─── Import AFTER mocks are registered ───────────────────────────────────

const { GET } = await import('./route')

// ─── Helpers ─────────────────────────────────────────────────────────────

function buildGetRequest(authorization?: string): NextRequest {
  return new NextRequest('http://localhost/api/cron/weekly-student-reports', {
    method: 'GET',
    headers: authorization ? { authorization } : {},
  })
}

function seedStudentWithEssay(id: string): void {
  state.students.push({
    id,
    email: `student-${id}@example.com`,
    firstName: `Student${id}`,
    dateOfBirth: new Date('2008-01-01T00:00:00.000Z'),
    isMinor: false,
    privacySettings: { aiOptOut: false, marketingEnabled: true },
  })
  state.essaysByStudent[id] = [
    {
      id: `e-${id}-1`,
      title: 'Macbeth ambition essay',
      subject: 'LITERATURE',
      createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
      aiFeedback: {
        overallScore: 70,
        grammarScore: 72,
        structureScore: 68,
        argumentScore: 66,
        vocabularyScore: 74,
      },
    },
  ]
}

// ─── Tests ───────────────────────────────────────────────────────────────

describe('cron /api/cron/weekly-student-reports', () => {
  it('GET rejects a missing or invalid Bearer token', async () => {
    const missing = await GET(buildGetRequest())
    expect(missing.status).toBe(401)

    const wrong = await GET(buildGetRequest('Bearer wrong-secret'))
    expect(wrong.status).toBe(401)
  })

  it('GET with a valid Bearer token runs the digest (Vercel Cron convention)', async () => {
    seedStudentWithEssay('s1')

    const res = await GET(buildGetRequest('Bearer test-secret-abcdef'))
    expect(res.status).toBe(200)

    const json = (await res.json()) as { sent: number; skipped: number; errors: string[] }
    expect(json.sent).toBe(1)
    expect(json.errors).toEqual([])
    expect(sendViaResendMock).toHaveBeenCalledTimes(1)
  })

  it('GET with a valid Bearer token and no eligible students sends nothing', async () => {
    const res = await GET(buildGetRequest('Bearer test-secret-abcdef'))
    expect(res.status).toBe(200)

    const json = (await res.json()) as { sent: number; skipped: number; errors: string[] }
    expect(json.sent).toBe(0)
    expect(sendViaResendMock).not.toHaveBeenCalled()
  })
})
