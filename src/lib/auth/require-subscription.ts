import { redirect } from 'next/navigation'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { hasActiveSubscription } from '@/lib/course-access'

/**
 * Server-component / layout guard for premium routes (2026-06-08 Option C
 * paywall). Mirrors the style of `requireBoard` in board-guard.ts.
 *
 * Behaviour:
 *   • Anonymous (no session)         → redirect to /auth/register?redirect=…
 *     so the visitor signs up and starts their no-card 7-day trial.
 *   • Signed in but not entitled     → redirect to /pricing?from=… so they
 *     can upgrade (their trial has lapsed and they have no paid plan).
 *   • Signed in + 'pro' / on trial   → render (returns normally).
 *
 * Use this in a route's `layout.tsx` (a server component) so the gate runs
 * BEFORE the page's client bundle is served — critical for routes like
 * /mock-exams/[id] whose papers + mark schemes + model answers are bundled
 * into the client, where a client-side check would leak the content in the
 * JS payload regardless of what the UI shows.
 *
 * `intendedPath` is captured into the redirect so the auth flow can return
 * the user to where they were headed after signing up.
 */
export async function requireSubscription(intendedPath: string): Promise<void> {
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect(`/auth/register?redirect=${encodeURIComponent(intendedPath)}`)
  }

  const isPremium = await hasActiveSubscription(supabase, user.id)
  if (!isPremium) {
    redirect(`/pricing?from=${encodeURIComponent(intendedPath)}`)
  }
}
