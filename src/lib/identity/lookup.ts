import { prisma } from '@/lib/prisma'

/**
 * The columns every identity consumer needs off the Prisma `User` row.
 * Kept in one place so a new consumer cannot quietly widen the read.
 */
export const IDENTITY_SELECT = {
  id: true,
  supabaseUserId: true,
  email: true,
  dateOfBirth: true,
  isMinor: true,
  parentId: true,
  accountStatus: true,
} as const

export type IdentityUserRow = {
  id: string
  supabaseUserId: string | null
  email: string
  dateOfBirth: Date | null
  isMinor: boolean
  parentId: string | null
  accountStatus: 'ACTIVE' | 'SUSPENDED' | 'DELETED'
}

/**
 * Finds the existing Prisma `User` row for a Supabase auth id, WITHOUT
 * creating one.
 *
 * Two lookups, in the order the identity design sets out:
 *   1. `supabaseUserId` - the correct column, and where every projected row
 *      and every row written by /api/auth/register carries the auth uuid.
 *   2. `id` - for seeded rows whose primary key IS the value handed in, e.g.
 *      the synthetic App Review account 'usr_apple_reviewer'.
 *
 * This is where a Supabase id SHOULD be resolved to a Prisma row, and where
 * anything that needs the row to exist must come.
 *
 * src/__tests__/identity-guard.test.ts enforces part of that, honestly scoped:
 * it fails the suite on a `User` row created OUTSIDE this module, and on a
 * private lookup via findFirst / findMany / updateMany / deleteMany. It does
 * NOT forbid `findUnique({ where: { supabaseUserId } })`, because around
 * twenty-seven routes read that way legitimately and handle the
 * Supabase-native case explicitly - the Art.15 export routes, for instance,
 * deliberately serve from the Supabase store rather than projecting a row as
 * a side effect of a read. A regex cannot tell those apart from a careless
 * lookup, so the guard does not pretend to. What it does guarantee is that no
 * second place can CREATE an identity.
 */
export async function findExistingUser(supabaseUserId: string): Promise<IdentityUserRow | null> {
  if (!supabaseUserId) return null

  try {
    const byUuid = await prisma.user.findFirst({
      where: { supabaseUserId },
      select: IDENTITY_SELECT,
    })
    if (byUuid) return byUuid as IdentityUserRow
  } catch {
    // Fall through to the legacy primary-key lookup.
  }

  try {
    const byId = await prisma.user.findUnique({
      where: { id: supabaseUserId },
      select: IDENTITY_SELECT,
    })
    return (byId as IdentityUserRow) ?? null
  } catch {
    return null
  }
}
