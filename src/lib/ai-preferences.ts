/**
 * AI preference helpers - Children's Code compliance (GAP-12B).
 *
 * Client-side: stores a boolean flag in localStorage for immediate UI gating.
 * Server-side: checks the `aiOptOut` field on `PrivacySettings` in the
 * database, ensuring the opt-out cannot be bypassed by manipulating localStorage.
 *
 * The flag can be toggled by the student themselves or by a parent /
 * guardian on their behalf via the parent settings page.
 *
 * When `isAiOptedOut()` returns `true`, the UI must show a fallback
 * message instead of the AI marking form.
 */

const AI_OPT_OUT_KEY = 'english-hub-ai-opted-out'

// ─── Client-side helpers ────────────────────────────────────────────────

/** Returns `true` when the user (or their parent) has opted out of AI features. */
export function isAiOptedOut(): boolean {
  if (typeof window === 'undefined') return false
  return localStorage.getItem(AI_OPT_OUT_KEY) === 'true'
}

/** Toggle the AI opt-out preference. */
export function setAiOptedOut(optedOut: boolean): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(AI_OPT_OUT_KEY, optedOut ? 'true' : 'false')
}

// ─── Server-side helper ─────────────────────────────────────────────────

/**
 * Check the database for whether a user has opted out of AI features.
 * This is the authoritative check - API routes must use this rather than
 * relying on the client-side localStorage flag.
 *
 * Import only in server code (API routes, server components).
 *
 * A DEFECT, FIXED 12 OCTOBER 2026. Every caller (fifteen AI routes and the
 * examiner gate) hands in the Supabase auth uuid, and this used to look
 * `PrivacySettings` up by it directly. `PrivacySettings.userId` is the Prisma
 * `User.id`, a cuid, which is what /api/privacy/settings writes, so the lookup
 * could never match and an opt-out was never enforced on the server. Nobody
 * had opted out when it was found (0 of 2 settings rows, counted read-only),
 * so no one was marked against their choice.
 *
 * The uuid is now resolved to the Prisma row first, without creating one: a
 * person with no Prisma row cannot have a settings row, because the foreign
 * key requires the row. A database error propagates rather than reading as
 * "not opted out", so the caller fails closed. Anything that is not
 * uuid-shaped is taken as a Prisma id already (seeded rows such as the App
 * Review account have non-uuid primary keys).
 */
const SUPABASE_UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

export async function isAiOptedOutServer(userId: string): Promise<boolean> {
  // Dynamic import to avoid pulling Prisma into client bundles
  const { prisma } = await import('@/lib/prisma')

  let prismaUserId = userId
  if (SUPABASE_UUID.test(userId)) {
    const owner = await prisma.user.findUnique({
      where: { supabaseUserId: userId },
      select: { id: true },
    })
    if (!owner) return false
    prismaUserId = owner.id
  }

  const settings = await prisma.privacySettings.findUnique({
    where: { userId: prismaUserId },
    select: { aiOptOut: true },
  })

  // If no settings row exists, the user has not opted out (default = false)
  return settings?.aiOptOut ?? false
}

/**
 * The members of `people` who have NOT switched AI off, in their order.
 *
 * For the AI class report (23 October 2026; src/app/api/school/classes/
 * [classId]/coach): the founder decided that a pupil who has switched AI off
 * is left out of the class's pooled figures, not that the teacher is refused.
 * So this is a filter, not a gate, and nothing here answers a request. A
 * refusal of the CALLER for their own opt-out still carries AI_OPT_OUT_CODE
 * (an-ai-opt-out-is-never-sold-a-plan.test.ts holds every such call site).
 * A database error propagates, as in isAiOptedOutServer: fail closed.
 */
export async function withoutAiOptedOut<T extends { id: string }>(
  people: readonly T[],
  width = 5,
): Promise<T[]> {
  const kept: T[] = []
  for (let i = 0; i < people.length; i += width) {
    const batch = people.slice(i, i + width)
    const optedOut = await Promise.all(batch.map((p) => isAiOptedOutServer(p.id)))
    batch.forEach((p, n) => {
      if (!optedOut[n]) kept.push(p)
    })
  }
  return kept
}
