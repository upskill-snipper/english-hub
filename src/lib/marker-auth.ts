// ─── Paid Marker · Authentication / Authorisation ──────────────────────────
//
// Resolves the logged-in auth user to their `markers` row. A marker is
// auth-linked via markers.user_id = auth.uid() and must be status='active'
// to use the console. The lookup is performed with the SERVICE-ROLE client
// (RLS-independent, like the rest of the marking API surface) but the
// constraint is explicit and narrow: ONLY the row whose user_id matches the
// caller's auth uid AND whose status is 'active'.
//
// A marker may therefore never resolve to another marker's record, and a
// paused/offboarded marker resolves to null (locked out). Every marker API
// route and the console gate go through getCurrentMarker / requireMarker so
// the rule lives in exactly one place.
//
// Supabase generated types don't know about the `markers` table yet (Prisma
// client not regenerated — see the 20260519_marker_drive.sql migration
// note), so the row is cast through `unknown` to the shape the frozen
// migration guarantees.

import type { SupabaseClient } from '@supabase/supabase-js'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { forbiddenResponse, unauthorizedResponse } from '@/lib/api-response'

// Columns the console / marker routes need. Pay/contract fields are NOT
// surfaced to the client by callers (see /api/marker/me) but are selected
// here so a single shape is reused.
export interface MarkerRow {
  id: string
  user_id: string | null
  display_name: string
  email: string | null
  boards: string[]
  qualification: string | null
  status: 'active' | 'paused' | 'offboarded'
  contract_signed_at: string | null
  nda_signed_at: string | null
  created_at: string
}

const MARKER_COLUMNS =
  'id, user_id, display_name, email, boards, qualification, status,' +
  ' contract_signed_at, nda_signed_at, created_at'

/**
 * Resolve the currently-authenticated user to their ACTIVE marker row.
 *
 * @param supabase an auth-context Supabase client (createServerSupabaseClient)
 *                  used only to read the session — the marker row itself is
 *                  read with the service-role client.
 * @returns the marker row when the caller is signed in AND has a markers row
 *          with user_id = auth.uid() AND status = 'active'; otherwise null.
 *
 * Returns null (never throws) for: not signed in, no marker row, marker
 * paused/offboarded, table missing (pre-migration), or any lookup error —
 * callers degrade to a friendly "not a marker" state rather than a 500.
 */
export async function getCurrentMarker(supabase: SupabaseClient): Promise<MarkerRow | null> {
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) return null

  const admin = createServiceRoleClient()
  const { data, error } = await admin
    .from('markers')
    .select(MARKER_COLUMNS)
    .eq('user_id', user.id)
    .eq('status', 'active')
    .maybeSingle()

  if (error || !data) return null
  return data as unknown as MarkerRow
}

export type RequireMarkerResult =
  | { ok: true; marker: MarkerRow; userId: string; userEmail: string | null }
  | { ok: false; response: ReturnType<typeof unauthorizedResponse> }

/**
 * Route guard: 401 when unauthenticated, 403 when authenticated but not an
 * active marker, otherwise the resolved marker (+ the auth identity, handy
 * for audit columns). Mirrors the api-response helper conventions used
 * across the marking API.
 *
 * Usage:
 *   const guard = await requireMarker()
 *   if (!guard.ok) return guard.response
 *   const { marker } = guard
 */
export async function requireMarker(): Promise<RequireMarkerResult> {
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) {
    return { ok: false, response: unauthorizedResponse('Sign in required') }
  }

  const admin = createServiceRoleClient()
  const { data, error } = await admin
    .from('markers')
    .select(MARKER_COLUMNS)
    .eq('user_id', user.id)
    .eq('status', 'active')
    .maybeSingle()

  if (error || !data) {
    return {
      ok: false,
      response: forbiddenResponse(
        'You are not an active marker. If you believe this is a mistake, contact an administrator.',
      ),
    }
  }

  return {
    ok: true,
    marker: data as unknown as MarkerRow,
    userId: user.id,
    userEmail: user.email ?? null,
  }
}
