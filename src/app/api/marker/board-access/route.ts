// ─── Marker · Board Access (list own + request more) ───────────────────────
// GET  /api/marker/board-access  → the signed-in marker's board-access rows
// POST /api/marker/board-access  → request access to another board
//
// For an EXISTING marker to see their per-board statuses (the board picker) and
// to request additional boards they're qualified for. A new request is created
// as 'requested' and grants nothing until an admin approves it.
//
// Auth: an existing marker (any status) resolved from the session. A non-marker
// gets 403 (they should use /api/marker/apply first).

import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import {
  badRequestResponse,
  forbiddenResponse,
  rateLimitResponse,
  serverErrorResponse,
  unauthorizedResponse,
  unsupportedMediaTypeResponse,
} from '@/lib/api-response'
import {
  listBoardAccess,
  requestBoardAccess,
  isRequestableBoard,
  normaliseBoard,
  REQUESTABLE_BOARDS,
} from '@/lib/marker-board-access'

export const dynamic = 'force-dynamic'

/** Resolve the session user to their marker id (ANY status), or null. */
async function resolveMarkerId(): Promise<{ markerId: string; userId: string } | null> {
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()
  if (error || !user) return null
  const admin = createServiceRoleClient()
  const { data } = await admin.from('markers').select('id').eq('user_id', user.id).maybeSingle()
  if (!data) return null
  return { markerId: (data as unknown as { id: string }).id, userId: user.id }
}

export async function GET(request: NextRequest) {
  try {
    const resolved = await resolveMarkerId()
    if (!resolved) {
      // Distinguish unauthenticated from not-a-marker for a clearer client UX.
      const supabase = createServerSupabaseClient()
      const {
        data: { user },
      } = await supabase.auth.getUser()
      return user
        ? forbiddenResponse('You are not a marker yet. Apply first.')
        : unauthorizedResponse('Sign in required.')
    }
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`marker-board-access-get:${resolved.markerId}:${ip}`, {
      limit: 60,
      windowSeconds: 60,
    })
    if (!rl.success) return rateLimitResponse(rl.resetAt)

    const rows = await listBoardAccess(resolved.markerId)
    return NextResponse.json({
      access: rows.map((r) => ({
        board: r.board,
        status: r.status,
        requestedAt: r.requested_at,
        decidedAt: r.decided_at,
      })),
      requestableBoards: REQUESTABLE_BOARDS,
    })
  } catch (err) {
    console.error('[marker/board-access GET] unexpected error', err)
    return serverErrorResponse('Could not load your board access.')
  }
}

interface RequestBody {
  board?: string
  qualificationNote?: string
}

export async function POST(request: NextRequest) {
  try {
    const ct = request.headers.get('content-type')
    if (!ct || !ct.includes('application/json')) return unsupportedMediaTypeResponse()

    const resolved = await resolveMarkerId()
    if (!resolved) return forbiddenResponse('You are not a marker. Apply first.')

    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`marker-board-access-post:${resolved.markerId}:${ip}`, {
      limit: 20,
      windowSeconds: 3600,
    })
    if (!rl.success) return rateLimitResponse(rl.resetAt)

    let body: RequestBody
    try {
      body = (await request.json()) as RequestBody
    } catch {
      return badRequestResponse('Invalid JSON body.')
    }
    const board = typeof body.board === 'string' ? normaliseBoard(body.board) : ''
    if (!isRequestableBoard(board)) return badRequestResponse(`Unknown board: ${body.board ?? ''}`)
    const note =
      typeof body.qualificationNote === 'string' && body.qualificationNote.trim().length > 0
        ? body.qualificationNote.trim().slice(0, 2000)
        : null

    const status = await requestBoardAccess(resolved.markerId, board, note)
    return NextResponse.json({ ok: true, board, status })
  } catch (err) {
    console.error('[marker/board-access POST] unexpected error', err)
    return serverErrorResponse('Could not request board access.')
  }
}
