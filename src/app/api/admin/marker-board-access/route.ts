// ─── Admin · Marker Board-Access Approvals ─────────────────────────────────
// GET  /api/admin/marker-board-access  → all PENDING (requested) access rows
// POST /api/admin/marker-board-access  → approve / reject / revoke one row
//
// The per-board approval gate. Site-admin only (verifyAdmin), like every other
// /api/admin/marker-* route. Approving a row is the ONLY thing that lets a
// (self-registered) marker actually mark that board — the queue/review enforce
// approved-board access. Every decision logs decided_by + decided_at.

import { NextRequest, NextResponse } from 'next/server'
import { verifyAdmin } from '@/lib/admin-auth'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import {
  badRequestResponse,
  rateLimitResponse,
  serverErrorResponse,
  unsupportedMediaTypeResponse,
} from '@/lib/api-response'
import { decideBoardAccess, listPendingBoardAccess } from '@/lib/marker-board-access'

export const dynamic = 'force-dynamic'

function adminGate(authError: 'Unauthorized' | 'Forbidden' | null): NextResponse | null {
  if (authError === 'Unauthorized')
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  if (authError === 'Forbidden') return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  return null
}

export async function GET(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`admin-board-access-get:${ip}`, { limit: 60, windowSeconds: 60 })
    if (!rl.success) return rateLimitResponse(rl.resetAt)

    const { error: authError, user } = await verifyAdmin()
    const denied = adminGate(authError)
    if (denied) return denied

    const pending = await listPendingBoardAccess()
    return NextResponse.json({
      pending: pending.map((p) => ({
        id: p.id,
        board: p.board,
        markerId: p.marker_id,
        markerName: p.marker_display_name,
        markerEmail: p.marker_email,
        markerQualification: p.marker_qualification,
        qualificationNote: p.qualification_note,
        requestedAt: p.requested_at,
      })),
      reviewedBy: user?.email ?? null,
    })
  } catch (err) {
    console.error('[admin/marker-board-access GET] unexpected error', err)
    return serverErrorResponse('Could not load pending board access.')
  }
}

interface DecideBody {
  accessId?: string
  decision?: 'approved' | 'rejected' | 'revoked'
}

export async function POST(request: NextRequest) {
  try {
    const ct = request.headers.get('content-type')
    if (!ct || !ct.includes('application/json')) return unsupportedMediaTypeResponse()

    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`admin-board-access-post:${ip}`, { limit: 60, windowSeconds: 60 })
    if (!rl.success) return rateLimitResponse(rl.resetAt)

    const { error: authError, user } = await verifyAdmin()
    const denied = adminGate(authError)
    if (denied) return denied

    let body: DecideBody
    try {
      body = (await request.json()) as DecideBody
    } catch {
      return badRequestResponse('Invalid JSON body.')
    }
    const accessId = typeof body.accessId === 'string' ? body.accessId.trim() : ''
    if (!accessId) return badRequestResponse('accessId is required.')
    if (
      body.decision !== 'approved' &&
      body.decision !== 'rejected' &&
      body.decision !== 'revoked'
    ) {
      return badRequestResponse("decision must be 'approved', 'rejected' or 'revoked'.")
    }

    const status = await decideBoardAccess(accessId, body.decision, user?.id ?? null)
    return NextResponse.json({ ok: true, accessId, status })
  } catch (err) {
    console.error('[admin/marker-board-access POST] unexpected error', err)
    return serverErrorResponse('Could not record the decision.')
  }
}
