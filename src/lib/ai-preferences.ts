/**
 * AI preference helpers — Children's Code compliance (GAP-12B).
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
 * This is the authoritative check — API routes must use this rather than
 * relying on the client-side localStorage flag.
 *
 * Import only in server code (API routes, server components).
 */
export async function isAiOptedOutServer(userId: string): Promise<boolean> {
  // Dynamic import to avoid pulling Prisma into client bundles
  const { prisma } = await import('@/lib/prisma')

  const settings = await prisma.privacySettings.findUnique({
    where: { userId },
    select: { aiOptOut: true },
  })

  // If no settings row exists, the user has not opted out (default = false)
  return settings?.aiOptOut ?? false
}
