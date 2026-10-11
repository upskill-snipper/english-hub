// @vitest-environment node
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'

/**
 * GET /api/school/bulk-upload/latest-status names the admin who ran the
 * school's last import.
 *
 * FIXED 11 October 2026. The admin was looked up as a Prisma `User.id`, but
 * the commit route records `adminUserId` as the Supabase auth uuid, and a
 * Prisma id is a cuid (CLAUDE.md, structural fact 1). The lookup never found
 * anyone, so every school saw "the school administrator". The name now comes
 * from `profiles`, which the uuid keys.
 */

const ADMIN_UUID = '6b1a1f0e-9d3a-4f7a-9d2f-0f0a1b2c3d4e'

const { jobFindFirst, userFindUnique, readProfile } = vi.hoisted(() => ({
  jobFindFirst: vi.fn(),
  // Production has no Prisma row whose id is a Supabase uuid.
  userFindUnique: vi.fn(async () => null),
  readProfile: vi.fn(),
}))

vi.mock('@/lib/supabase/server', () => ({
  createServerSupabaseClient: () => ({
    auth: { getUser: async () => ({ data: { user: { id: 'teacher-1' } }, error: null }) },
  }),
}))
vi.mock('@/lib/school-auth', () => ({
  verifySchoolMember: vi.fn(async () => ({ school_id: 'school-1', role: 'teacher' })),
}))
vi.mock('@/lib/rate-limit', () => ({
  rateLimit: vi.fn(async () => ({ success: true, resetAt: Date.now() + 60_000 })),
  getClientIp: vi.fn(() => '127.0.0.1'),
}))
vi.mock('@/lib/prisma', () => ({
  prisma: {
    bulkUploadJob: { findFirst: jobFindFirst },
    user: { findUnique: userFindUnique },
  },
}))
vi.mock('@/lib/identity', () => ({ readIdentityProfile: readProfile }))

import { GET } from './route'

const request = () => new NextRequest('http://localhost/api/school/bulk-upload/latest-status')

const completedJob = {
  id: 'job-1',
  adminUserId: ADMIN_UUID,
  schoolId: 'school-1',
  status: 'completed',
  completedAt: new Date('2026-10-01T09:00:00Z'),
  createdCount: 28,
  updatedCount: 2,
}

beforeEach(() => {
  vi.clearAllMocks()
  jobFindFirst.mockResolvedValue(completedJob)
})

describe('GET /api/school/bulk-upload/latest-status', () => {
  it('names the admin who ran the upload, from their profile', async () => {
    readProfile.mockResolvedValue({ full_name: 'Ms Example', email: 'admin@example.school.uk' })
    const res = await GET(request())
    expect(res.status).toBe(200)
    expect(await res.json()).toMatchObject({
      hasImport: true,
      adminName: 'Ms Example',
      createdCount: 28,
      updatedCount: 2,
    })
    expect(readProfile).toHaveBeenCalledWith(ADMIN_UUID)
  })

  it('falls back to their email when the profile has no name', async () => {
    readProfile.mockResolvedValue({ full_name: '  ', email: 'admin@example.school.uk' })
    expect((await (await GET(request())).json()).adminName).toBe('admin@example.school.uk')
  })

  it("says 'the school administrator' only when there is no profile at all", async () => {
    readProfile.mockResolvedValue(null)
    expect((await (await GET(request())).json()).adminName).toBe('the school administrator')
  })

  it('reports no import when the school has no completed upload', async () => {
    jobFindFirst.mockResolvedValue(null)
    expect(await (await GET(request())).json()).toMatchObject({ hasImport: false })
  })
})
