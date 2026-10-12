import { beforeEach, describe, expect, it, vi } from 'vitest'

/**
 * An AI opt-out recorded in privacy settings is enforced on the server.
 *
 * THE DEFECT (12 October 2026). Every AI route hands isAiOptedOutServer the
 * Supabase auth uuid, and it looked PrivacySettings up by that uuid directly.
 * PrivacySettings.userId is the Prisma User.id, a cuid, which is what
 * /api/privacy/settings writes, so the lookup never matched and every opt-out
 * read as "not opted out". It is the identity split in CLAUDE.md, again.
 *
 * MUTATIONS RUN, each verified to have altered the file first: looking the
 * settings up by the uuid again fails the first case; returning false on a
 * database error fails the last.
 */

const UUID = '3f2b8c1e-7d4a-4b9e-9c21-5a6d8e0f1b23'
const CUID = 'cuidprismauser0000000001'

const userFindUnique = vi.fn()
const settingsFindUnique = vi.fn()
vi.mock('@/lib/prisma', () => ({
  prisma: {
    user: { findUnique: (...a: unknown[]) => userFindUnique(...a) },
    privacySettings: { findUnique: (...a: unknown[]) => settingsFindUnique(...a) },
  },
}))

const { isAiOptedOutServer } = await import('@/lib/ai-preferences')

beforeEach(() => {
  userFindUnique.mockReset().mockResolvedValue({ id: CUID })
  settingsFindUnique
    .mockReset()
    .mockImplementation(async ({ where }: { where: { userId: string } }) =>
      where.userId === CUID ? { aiOptOut: true } : null,
    )
})

describe('isAiOptedOutServer', () => {
  it('finds an opt-out written against the Prisma id when handed the Supabase uuid', async () => {
    expect(await isAiOptedOutServer(UUID)).toBe(true)
    expect(userFindUnique).toHaveBeenCalledWith({
      where: { supabaseUserId: UUID },
      select: { id: true },
    })
    expect(settingsFindUnique).toHaveBeenCalledWith({
      where: { userId: CUID },
      select: { aiOptOut: true },
    })
  })

  it('reads no opt-out for someone with no Prisma row, and creates nothing', async () => {
    userFindUnique.mockResolvedValue(null)
    expect(await isAiOptedOutServer(UUID)).toBe(false)
    expect(settingsFindUnique).not.toHaveBeenCalled()
  })

  it('takes an id that is not a uuid as the Prisma id', async () => {
    expect(await isAiOptedOutServer(CUID)).toBe(true)
    expect(userFindUnique).not.toHaveBeenCalled()
  })

  it('fails closed: a database error is thrown, not read as "not opted out"', async () => {
    userFindUnique.mockRejectedValue(new Error('database unavailable'))
    await expect(isAiOptedOutServer(UUID)).rejects.toThrow('database unavailable')
  })
})
