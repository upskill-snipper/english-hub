import { prisma } from '@/lib/prisma'
import { tryPrismaUserId } from '@/lib/identity'

/**
 * Record a sign-in: project the Prisma User row if it is missing, then stamp
 * `lastLoginAt`. Returns whether the stamp landed. Never throws, because a
 * sign-in must not fail on bookkeeping.
 *
 * `lastLoginAt` is the inactivity clock for the adult dormancy warning
 * (/api/cron/dormancy-check) and the child dormancy purge
 * (findDormantChildAccounts). Where it is null both fall back to
 * `createdAt`, so an account that is never stamped looks dormant from the day
 * it is old enough, however often it is used.
 *
 * WHY THIS IS SHARED (12 October 2026). The stamp used to happen only in
 * /api/auth/record-login, which only the email-and-password form calls. Every
 * Google and Apple sign-in, every email-confirmation sign-in and every
 * re-verification link goes through /auth/callback instead, so none of them
 * was ever stamped (docs/system/05 §2 recorded the gap and the one-call fix).
 * The product dates from March 2026, so nothing has been lost yet; the
 * earliest it could have bitten is March 2027 for a child account and March
 * 2028 for an adult. Both entry points now call this, so they cannot drift
 * apart again.
 *
 * It is still a sign-in clock, not an activity clock: a session kept alive by
 * refresh tokens for months is not re-stamped.
 */
export async function stampLogin(supabaseUserId: string): Promise<boolean> {
  try {
    // tryPrismaUserId rather than the throwing form: identity that cannot be
    // resolved is logged and the sign-in carries on.
    const prismaUserId = await tryPrismaUserId(supabaseUserId)
    if (!prismaUserId) {
      console.error('[stamp-login] could not resolve identity for', supabaseUserId)
      return false
    }
    await prisma.user.update({
      where: { id: prismaUserId },
      data: { lastLoginAt: new Date() },
    })
    return true
  } catch (err) {
    console.error('[stamp-login] failed for', supabaseUserId, err)
    return false
  }
}
