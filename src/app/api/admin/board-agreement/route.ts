// ─── Platform-admin · Per-board AI↔Examiner agreement ────────────────────────
// GET /api/admin/board-agreement
//
// Aggregates the approved training_data corpus to show how closely the AI's
// predicted mark matches the examiner's final mark, per exam board. As your
// examiners mark more scripts for a board, these numbers should climb — visible
// proof the calibration loop is working.
//
// Site-admin ONLY (verifyAdmin). DB: Supabase service-role client (training_data
// is RLS deny-by-default). EMPTY-TABLE SAFE: degrades to an empty list, never 500.
// ────────────────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { verifyAdmin } from '@/lib/admin-auth'
import { rateLimitResponse, forbiddenResponse, unauthorizedResponse } from '@/lib/api-response'
import { boardAgreementFromRows, type AgreementInputRow } from '@/lib/marking/agreement'

export const dynamic = 'force-dynamic'

function empty(note: string | null) {
  return NextResponse.json({
    generatedAt: new Date().toISOString(),
    storeAvailable: note === null,
    note,
    boards: [],
    totalPairs: 0,
  })
}

export async function GET(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`admin-board-agreement:${ip}`, { limit: 30, windowSeconds: 60 })
    if (!rl.success) return rateLimitResponse(rl.resetAt)

    const { error: authError } = await verifyAdmin()
    if (authError === 'Unauthorized') return unauthorizedResponse()
    if (authError === 'Forbidden') return forbiddenResponse()

    const supabase = createServiceRoleClient()
    const { data, error } = await supabase
      .from('training_data')
      .select('exam_board, ai_predicted_mark, teacher_final_mark')
      .not('teacher_final_mark', 'is', null)
      .limit(50000)

    if (error) {
      console.error('[api/admin/board-agreement] query failed', error)
      return empty('Training corpus unavailable')
    }

    const rows = (data ?? []) as unknown as AgreementInputRow[]
    const boards = boardAgreementFromRows(rows)
    const totalPairs = boards.reduce((s, b) => s + b.n, 0)

    return NextResponse.json({
      generatedAt: new Date().toISOString(),
      storeAvailable: true,
      note: null,
      boards,
      totalPairs,
    })
  } catch (err) {
    console.error('[api/admin/board-agreement] unexpected error', err)
    return empty('Metrics temporarily unavailable')
  }
}
