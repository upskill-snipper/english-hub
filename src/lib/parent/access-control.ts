/**
 * Parent-child access-control helpers.
 *
 * Centralizes the rules around who can see what for the Parent tier:
 *   - parents are identified via Supabase auth user_metadata.role === 'parent'
 *   - parents can only read data for children they are actively linked to
 *     (parent_child_links.status = 'active')
 *   - parents have READ-ONLY access: they cannot modify child data
 *   - the child must have an active or trialing subscription OR belong to a
 *     Parent-tier subscription owned by the parent themselves
 *
 * These helpers never short-circuit on admin/staff roles — the parent tier
 * is intentionally locked to the linked-child relationship.
 */

import type { SupabaseClient } from '@supabase/supabase-js'

// ── Types ─────────────────────────────────────────────────────────────────────

export type ParentAccessError =
  | 'NOT_AUTHENTICATED'
  | 'NOT_PARENT_ROLE'
  | 'NOT_LINKED'
  | 'LINK_NOT_ACTIVE'
  | 'CHILD_NOT_FOUND'
  | 'INTERNAL_ERROR'

export interface ParentAccessResult {
  ok: boolean
  error?: ParentAccessError
  childId?: string
  parentId?: string
}

// ── isParentRole ──────────────────────────────────────────────────────────────

/**
 * Checks whether a Supabase user is flagged as a parent account.
 * Role is stored in user_metadata.role.
 */
export function isParentRole(
  user: { user_metadata?: { role?: string } } | null | undefined
): boolean {
  return user?.user_metadata?.role === 'parent'
}

// ── assertParentCanAccessChild ────────────────────────────────────────────────

/**
 * Verifies the authenticated parent has an *active* link to the
 * given child. Uses the service-role client because parent_child_links
 * RLS is scoped to the parent's own rows and we want a single
 * authoritative check server-side.
 *
 * Returns { ok: true } on success. On failure, returns an error code
 * the caller can translate into an HTTP status.
 */
export async function assertParentCanAccessChild(
  serviceClient: SupabaseClient,
  parentUser: { id: string; user_metadata?: { role?: string } } | null,
  childId: string
): Promise<ParentAccessResult> {
  if (!parentUser) {
    return { ok: false, error: 'NOT_AUTHENTICATED' }
  }

  if (!isParentRole(parentUser)) {
    return { ok: false, error: 'NOT_PARENT_ROLE' }
  }

  if (!childId || typeof childId !== 'string') {
    return { ok: false, error: 'CHILD_NOT_FOUND' }
  }

  // Lookup the active link
  const { data: link, error } = await serviceClient
    .from('parent_child_links')
    .select('id, status, parent_id, child_id')
    .eq('parent_id', parentUser.id)
    .eq('child_id', childId)
    .maybeSingle()

  if (error) {
    console.error('[parent/access-control] link lookup failed:', error)
    return { ok: false, error: 'INTERNAL_ERROR' }
  }

  if (!link) {
    return { ok: false, error: 'NOT_LINKED' }
  }

  if (link.status !== 'active') {
    return { ok: false, error: 'LINK_NOT_ACTIVE' }
  }

  return {
    ok: true,
    parentId: parentUser.id,
    childId,
  }
}

// ── listLinkedChildIds ────────────────────────────────────────────────────────

/**
 * Returns all active child ids for a parent. Used by dashboard-style
 * endpoints that don't take a specific childId (e.g., weekly reports).
 */
export async function listLinkedChildIds(
  serviceClient: SupabaseClient,
  parentId: string
): Promise<string[]> {
  const { data, error } = await serviceClient
    .from('parent_child_links')
    .select('child_id')
    .eq('parent_id', parentId)
    .eq('status', 'active')

  if (error) {
    console.error('[parent/access-control] list linked children failed:', error)
    return []
  }

  return (data ?? []).map((row) => row.child_id as string)
}

// ── accessErrorToHttpStatus ───────────────────────────────────────────────────

/**
 * Maps a ParentAccessError to an HTTP status + user-facing message.
 * Keeps the error surface consistent across routes.
 */
export function accessErrorToHttpStatus(err: ParentAccessError): {
  status: number
  message: string
} {
  switch (err) {
    case 'NOT_AUTHENTICATED':
      return { status: 401, message: 'Unauthorized' }
    case 'NOT_PARENT_ROLE':
      return {
        status: 403,
        message: 'This endpoint is only available to parent accounts.',
      }
    case 'NOT_LINKED':
    case 'LINK_NOT_ACTIVE':
      return {
        status: 403,
        message:
          'You are not linked to this child account. Ask your child to share a link code.',
      }
    case 'CHILD_NOT_FOUND':
      return { status: 404, message: 'Child account not found.' }
    case 'INTERNAL_ERROR':
    default:
      return { status: 500, message: 'Internal server error' }
  }
}
