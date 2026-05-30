// ─── Marker Board Access — the authoritative access rule ────────────────────
//
// "May this marker work this board?" lives in exactly ONE place: an APPROVED row
// in marker_board_access for (marker, board). The marker console queue, the
// review API, and the admin approval UI all go through this module so the rule
// can never drift.
//
// WHY this exists alongside markers.boards[]: the legacy boards[] array is set
// by an admin with no request/approval lifecycle. Self-service onboarding needs
// a marker to REQUEST a board and an approver to GRANT it — and, crucially, a
// self-registered marker must be able to mark NOTHING until approved. That gate
// is an approved row here, not membership of boards[].
//
// Server-only: service-role Supabase client (the marker/admin APIs apply their
// own authz before calling these). Pre-migration safe: a missing table degrades
// to "no access" (deny) on read — never throws into a request path.
//
// Supabase generated types don't know about marker_board_access yet (Prisma
// client not regenerated), so rows are cast through `unknown`.
// ───────────────────────────────────────────────────────────────────────────

import { createServiceRoleClient } from '@/lib/supabase/server'
import { resolveMarkingShape } from '@/lib/marking/marking-shapes'

export type BoardAccessStatus = 'requested' | 'approved' | 'rejected' | 'revoked'

export interface BoardAccessRow {
  id: string
  marker_id: string
  board: string
  qualification_note: string | null
  status: BoardAccessStatus
  requested_at: string
  decided_at: string | null
  decided_by: string | null
}

const SELECT_COLUMNS =
  'id, marker_id, board, qualification_note, status, requested_at, decided_at, decided_by'

/**
 * Normalise a board token for comparison: trimmed, upper-case. Board codes are
 * stored as the ExamBoard enum values / 'IELTS' / 'KS3' / 'EAL', so a
 * case-insensitive exact match is the right key (NOT the marking-shape, which is
 * coarser — two different GCSE boards are distinct access grants).
 */
export function normaliseBoard(board: string): string {
  return board.trim().toUpperCase()
}

/**
 * The full set of boards the platform recognises for access requests. Mirrors
 * the ExamBoard prisma enum plus the non-GCSE offerings. The apply screen offers
 * exactly these; a request for anything else is rejected.
 */
export const REQUESTABLE_BOARDS: readonly string[] = [
  'AQA',
  'EDEXCEL',
  'OCR',
  'EDUQAS',
  'EDEXCEL_IGCSE',
  'CAMBRIDGE_0500',
  'CAMBRIDGE_0990',
  'IELTS',
  'KS3',
  'EAL',
]

/** True when `board` is one of the requestable boards (case-insensitive). */
export function isRequestableBoard(board: string): boolean {
  return REQUESTABLE_BOARDS.includes(normaliseBoard(board))
}

/**
 * List a marker's board-access rows (all statuses), for the board picker /
 * admin view. Empty array on any error (deny-by-default).
 */
export async function listBoardAccess(markerId: string): Promise<BoardAccessRow[]> {
  let admin: ReturnType<typeof createServiceRoleClient>
  try {
    admin = createServiceRoleClient()
  } catch {
    return []
  }
  const { data, error } = await admin
    .from('marker_board_access')
    .select(SELECT_COLUMNS)
    .eq('marker_id', markerId)
    .order('board', { ascending: true })
  if (error || !data) return []
  return data as unknown as BoardAccessRow[]
}

/**
 * The set of boards a marker is APPROVED for (upper-cased). The authoritative
 * "what may they work" answer. Empty set on any error (deny).
 */
export async function approvedBoards(markerId: string): Promise<Set<string>> {
  const rows = await listBoardAccess(markerId)
  return new Set(rows.filter((r) => r.status === 'approved').map((r) => normaliseBoard(r.board)))
}

/**
 * Is the marker approved for a specific board? Deny-by-default.
 */
export async function hasApprovedBoard(markerId: string, board: string): Promise<boolean> {
  const set = await approvedBoards(markerId)
  return set.has(normaliseBoard(board))
}

/**
 * Is the marker approved for the board that OWNS a given submission, given the
 * submission's exam_board (and qualification, for fallback)? Used by the queue /
 * review API to scope work to approved boards.
 *
 * The submission's `exam_board` is the access key. For non-GCSE offerings whose
 * exam_board may be blank but whose qualification names the offering, we fall
 * back to the marking shape to derive a board token ('IELTS' / 'KS3' / 'EAL').
 */
export async function canMarkSubmission(
  markerId: string,
  examBoard: string | null,
  qualification: string | null,
): Promise<boolean> {
  const set = await approvedBoards(markerId)
  if (set.size === 0) return false

  if (examBoard && set.has(normaliseBoard(examBoard))) return true

  // Fallback for non-GCSE offerings tagged via qualification only.
  const shape = resolveMarkingShape(examBoard, qualification)
  if (shape.id === 'ielts-writing' && set.has('IELTS')) return true
  if (shape.id === 'ks3-level' && set.has('KS3')) return true
  if (shape.id === 'eal-stage' && set.has('EAL')) return true
  return false
}

/**
 * Request access to a board for a marker. Idempotent per (marker, board): if a
 * row exists it is left as-is unless it was 'rejected'/'revoked', in which case
 * it is reset to 'requested' (re-application). Returns the resulting status.
 *
 * @throws Error on an unrecognised board or a write failure.
 */
export async function requestBoardAccess(
  markerId: string,
  board: string,
  qualificationNote: string | null,
): Promise<BoardAccessStatus> {
  const b = normaliseBoard(board)
  if (!isRequestableBoard(b)) {
    throw new Error(`Unknown board: ${board}`)
  }
  const admin = createServiceRoleClient()

  // Existing row?
  const { data: existing } = await admin
    .from('marker_board_access')
    .select('id, status')
    .eq('marker_id', markerId)
    .eq('board', b)
    .maybeSingle()

  if (existing) {
    const row = existing as unknown as { id: string; status: BoardAccessStatus }
    // Leave approved/requested as-is; re-open a rejected/revoked application.
    if (row.status === 'rejected' || row.status === 'revoked') {
      const { error } = await admin
        .from('marker_board_access')
        .update({
          status: 'requested',
          qualification_note: qualificationNote,
          requested_at: new Date().toISOString(),
          decided_at: null,
          decided_by: null,
        })
        .eq('id', row.id)
      if (error) throw new Error(`Failed to re-request board access: ${error.message}`)
      return 'requested'
    }
    return row.status
  }

  const { error } = await admin.from('marker_board_access').insert({
    marker_id: markerId,
    board: b,
    qualification_note: qualificationNote,
    status: 'requested',
  })
  if (error) throw new Error(`Failed to request board access: ${error.message}`)
  return 'requested'
}

/**
 * Admin decision on a board-access request. Sets status to approved/rejected/
 * revoked and stamps decided_by/decided_at. Returns the new status.
 *
 * @throws Error on a write failure.
 */
export async function decideBoardAccess(
  accessId: string,
  decision: 'approved' | 'rejected' | 'revoked',
  deciderUserId: string | null,
): Promise<BoardAccessStatus> {
  const admin = createServiceRoleClient()
  const { error } = await admin
    .from('marker_board_access')
    .update({
      status: decision,
      decided_at: new Date().toISOString(),
      decided_by: deciderUserId,
    })
    .eq('id', accessId)
  if (error) throw new Error(`Failed to decide board access: ${error.message}`)
  return decision
}

/**
 * List all PENDING (requested) board-access rows across all markers, joined to
 * the marker's display name / email / qualification, for the admin approvals
 * queue. Best-effort; empty on error.
 */
export interface PendingAccessRow extends BoardAccessRow {
  marker_display_name: string | null
  marker_email: string | null
  marker_qualification: string | null
}

export async function listPendingBoardAccess(): Promise<PendingAccessRow[]> {
  let admin: ReturnType<typeof createServiceRoleClient>
  try {
    admin = createServiceRoleClient()
  } catch {
    return []
  }
  const { data, error } = await admin
    .from('marker_board_access')
    .select(SELECT_COLUMNS)
    .eq('status', 'requested')
    .order('requested_at', { ascending: true })
    .limit(1000)
  if (error || !data) return []
  const rows = data as unknown as BoardAccessRow[]
  if (rows.length === 0) return []

  // Hydrate marker identity (one query for the distinct marker ids).
  const ids = Array.from(new Set(rows.map((r) => r.marker_id)))
  const { data: markerData } = await admin
    .from('markers')
    .select('id, display_name, email, qualification')
    .in('id', ids)
  const byId = new Map<
    string,
    { display_name: string; email: string | null; qualification: string | null }
  >()
  for (const m of (markerData ?? []) as unknown as {
    id: string
    display_name: string
    email: string | null
    qualification: string | null
  }[]) {
    byId.set(m.id, { display_name: m.display_name, email: m.email, qualification: m.qualification })
  }

  return rows.map((r) => {
    const m = byId.get(r.marker_id)
    return {
      ...r,
      marker_display_name: m?.display_name ?? null,
      marker_email: m?.email ?? null,
      marker_qualification: m?.qualification ?? null,
    }
  })
}
