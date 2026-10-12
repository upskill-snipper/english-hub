import { beforeEach, describe, expect, it, vi } from 'vitest'

/**
 * A signed-in parent whose account has no Prisma row yet can still use the
 * parent link.
 *
 * THE DEFECT (12 October 2026). /api/parent/link looked the caller up by
 * supabaseUserId and email and, finding no Prisma row, answered "Session
 * expired. Please log in again." Most accounts have no Prisma row until
 * something forces one (CLAUDE.md, structural fact 1), and the sign-in button
 * only sent a signed-in parent back to the dashboard, so the link could never
 * work for them. Each handler now projects the row with tryPrismaUserId first.
 *
 * MUTATIONS RUN, each verified to have altered the file first: removing the
 * projection from POST fails the first case.
 */

const PARENT = { id: '6a1b7c2d-3e4f-4a5b-8c6d-7e8f9a0b1c2d', email: 'parent@example.com' }

let projected = false
const tryPrismaUserId = vi.fn(async (_supabaseUserId: string) => {
  projected = true
  return 'cuid-parent'
})
vi.mock('@/lib/identity', () => ({ tryPrismaUserId: (id: string) => tryPrismaUserId(id) }))

vi.mock('@/lib/prisma', () => ({
  prisma: {
    user: {
      // The row exists only once the projection has run.
      findUnique: vi.fn(async () =>
        projected
          ? {
              id: 'cuid-parent',
              role: 'PARENT',
              accountStatus: 'ACTIVE',
              firstName: 'P',
              email: PARENT.email,
            }
          : null,
      ),
    },
  },
}))

vi.mock('@/lib/supabase/server', () => ({
  createServerSupabaseClient: () => ({
    auth: { getUser: async () => ({ data: { user: PARENT }, error: null }) },
  }),
}))
vi.mock('@/lib/rate-limit', () => ({ rateLimit: async () => ({ success: true, resetAt: 0 }) }))
vi.mock('@/lib/parent-linking', () => ({
  linkParentToStudent: vi.fn(),
  unlinkParentFromStudent: vi.fn(),
  validateInviteCode: vi.fn(),
  getLinkedStudents: vi.fn(async () => []),
  getLinkedParents: vi.fn(async () => []),
  verifyStudentHasActiveSubscription: vi.fn(),
}))
vi.mock('@/lib/email', () => ({ sendEmail: vi.fn() }))
vi.mock('@/lib/email-templates', () => ({
  parentLinkedEmail: vi.fn(),
  studentLinkedNotificationEmail: vi.fn(),
}))
vi.mock('@/lib/keep-alive', () => ({ keepAlive: vi.fn() }))

const { POST } = await import('@/app/api/parent/link/route')
const { NextRequest } = await import('next/server')

beforeEach(() => {
  projected = false
  tryPrismaUserId.mockClear()
  vi.spyOn(console, 'error').mockImplementation(() => {})
  vi.spyOn(console, 'warn').mockImplementation(() => {})
})

describe('the parent link for a parent with no Prisma row yet', () => {
  it('projects the row instead of saying the session expired', async () => {
    const res = await POST(
      new NextRequest('https://theenglishhub.app/api/parent/link', {
        method: 'POST',
        body: JSON.stringify({}),
      }),
    )
    expect(tryPrismaUserId).toHaveBeenCalledWith(PARENT.id)
    expect(res.status).not.toBe(401)
    const body = await res.json()
    expect(String(body.error ?? '')).not.toMatch(/session expired/i)
  })
})
