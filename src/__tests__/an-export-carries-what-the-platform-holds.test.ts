// @vitest-environment node
import { describe, it, expect, vi, beforeEach } from 'vitest'

vi.mock('@/lib/prisma', () => ({ prisma: { user: { findUniqueOrThrow: vi.fn() } } }))
vi.mock('@/lib/data-retention', () => ({ compileSupabaseNativeSubjectData: vi.fn() }))

import { prisma } from '@/lib/prisma'
import { compileSupabaseNativeSubjectData } from '@/lib/data-retention'
import { compileUserData } from '@/lib/dsar'

/**
 * compileUserData read the Prisma store only. Since 12 October 2026 every
 * sign-in projects a Prisma row, so it became the usual export path, and it
 * left out everything held against the Supabase identity: the profile, a
 * pupil's school essays and AI marks, quiz answers, practice, and the game
 * results saved from 13 October, while the account page promised "quiz scores
 * and game scores". Its export now carries the same records the Supabase-only
 * branch reads, from the same list, and says plainly when it could not.
 */

const SUPA = '7d1c9a52-1f0e-4b7a-9c3d-2e8f6a4b1c90'

function prismaUser(supabaseUserId: string | null) {
  vi.mocked(prisma.user.findUniqueOrThrow).mockResolvedValue({
    id: 'cuid1',
    email: 's@example.invalid',
    firstName: 'A',
    lastName: 'B',
    dateOfBirth: null,
    school: null,
    country: null,
    role: 'STUDENT',
    isMinor: true,
    accountStatus: 'ACTIVE',
    createdAt: new Date('2026-01-01'),
    updatedAt: new Date('2026-01-01'),
    supabaseUserId,
    consents: [],
    essays: [],
    subscription: null,
    dataAccessRequests: [],
    auditLogs: [],
    privacySettings: null,
  } as never)
}

beforeEach(() => vi.clearAllMocks())

describe('compileUserData', () => {
  it('carries the platform records, game results among them', async () => {
    prismaUser(SUPA)
    vi.mocked(compileSupabaseNativeSubjectData).mockResolvedValue({
      profile: { id: SUPA, year_group: 'Year 10' },
      records: [{ table: 'game_rounds', status: 'read', rowCount: 2, rows: [{}, {}] }],
    } as never)
    const out = await compileUserData('cuid1')
    expect(compileSupabaseNativeSubjectData).toHaveBeenCalledWith(SUPA)
    expect(out.platform).toMatchObject({
      status: 'read',
      profile: { id: SUPA },
      records: [{ table: 'game_rounds', rowCount: 2 }],
    })
  })

  it('says so in the file when the platform records could not be read', async () => {
    prismaUser(SUPA)
    vi.mocked(compileSupabaseNativeSubjectData).mockRejectedValue(new Error('timeout'))
    const out = await compileUserData('cuid1')
    expect(out.platform.status).toBe('could-not-be-read')
    expect('note' in out.platform && out.platform.note).toContain('timeout')
  })

  it('says so when the account has no sign-in identity to read against', async () => {
    prismaUser(null)
    const out = await compileUserData('cuid1')
    expect(out.platform.status).toBe('not-linked')
    expect(compileSupabaseNativeSubjectData).not.toHaveBeenCalled()
  })
})
