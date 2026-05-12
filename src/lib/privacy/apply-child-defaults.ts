/**
 * Server-only helper to write Children's Code high-privacy defaults
 * into the Supabase `profiles` table during signup.
 *
 * This is extracted from `child-defaults.ts` so that the pure constants
 * + selectors in that file can be imported by client components (like
 * the registration form) without dragging the server-only Supabase
 * admin client into the client bundle.
 *
 * @see ./child-defaults.ts for the rationale + defaults table.
 */

import 'server-only'

import { createServiceRoleClient } from '@/lib/supabase/server'
import { getChildProfileDefaults } from './child-defaults'

/**
 * Applies the Children's Code high-privacy defaults to the given user
 * by writing the {@link getChildProfileDefaults} mapping into the
 * Supabase `profiles` table.
 *
 * Called from the signup API route for any user where `isMinorAge`
 * returns true (ages 13-17 — under-13s use the parent-linked flow).
 * For adult sign-ups this function is a no-op.
 *
 * Failure mode: errors are SWALLOWED (logged + sent to Sentry) — a
 * profile-defaults write should never block account creation. The
 * worst-case fallback is that the profile row inherits the database's
 * column defaults, which are themselves set to high-privacy values via
 * the Supabase migration.
 */
export async function applyChildDefaults(userId: string): Promise<void> {
  if (!userId) return
  try {
    const supabase = createServiceRoleClient()
    const defaults = getChildProfileDefaults()
    const { error } = await supabase
      .from('profiles')
      .update({ ...defaults, is_minor: true })
      .eq('id', userId)
    if (error) {
      // eslint-disable-next-line no-console
      console.error('[applyChildDefaults] update failed', error)
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('[applyChildDefaults] unexpected error', err)
  }
}
