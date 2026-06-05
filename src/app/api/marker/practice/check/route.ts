// ─── Marker · Practice check (reveal + compare) ──────────────────────────────
// POST /api/marker/practice/check  { submissionId, score, grade?, ao? }
//
// The marker commits a practice mark on a SPECIMEN gold script; this reveals the
// expert mark and returns the comparison (delta, grade match, per-AO). Formative
// only — NOTHING is written. Mirrors the practice list's safety scope: the script
// must be `is_gold AND source = 'specimen'` and on a board the marker is APPROVED
// for, so live blind-QA gold can never be revealed here.
// ────────────────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import {
  badRequestResponse,
  forbiddenResponse,
  notFoundResponse,
  rateLimitResponse,
  serverErrorResponse,
  requireJsonContentType,
} from '@/lib/api-response'
import { requireMarker } from '@/lib/marker-auth'
import { canMarkSubmission } from '@/lib/marker-board-access'
import { comparePractice, type GoldExpected } from '@/lib/marking/practice'

export const dynamic = 'force-dynamic'

interface Body {
  submissionId?: string
  score?: number
  grade?: string | null
  ao?: Record<string, number> | null
}

export async function POST(req: NextRequest) {
  try {
    const ctError = requireJsonContentType(req)
    if (ctError) return ctError

    const guard = await requireMarker()
    if (!guard.ok) return guard.response
    const { marker } = guard

    const ip = getClientIp(req.headers)
    const rl = await rateLimit(`marker-practice-check:${marker.id}:${ip}`, {
      limit: 60,
      windowSeconds: 60,
    })
    if (!rl.success) return rateLimitResponse(rl.resetAt)

    let body: Body
    try {
      body = (await req.json()) as Body
    } catch {
      return badRequestResponse('Invalid JSON body.')
    }

    const submissionId = typeof body.submissionId === 'string' ? body.submissionId.trim() : ''
    if (!submissionId) return badRequestResponse('submissionId is required.')
    if (typeof body.score !== 'number' || !Number.isFinite(body.score) || body.score < 0) {
      return badRequestResponse('score must be a non-negative number.')
    }
    let ao: Record<string, number> | null = null
    if (body.ao && typeof body.ao === 'object' && !Array.isArray(body.ao)) {
      ao = {}
      for (const [k, v] of Object.entries(body.ao)) {
        if (typeof v === 'number' && Number.isFinite(v)) ao[k] = v
      }
    }
    const grade = typeof body.grade === 'string' ? body.grade.trim() || null : null

    const admin = createServiceRoleClient()
    const { data, error } = await admin
      .from('marking_submissions')
      .select('id, is_gold, source, exam_board, qualification, gold_expected')
      .eq('id', submissionId)
      .maybeSingle()

    if (error) {
      console.error('[marker/practice/check] lookup failed', error)
      return serverErrorResponse('Could not load the practice script.')
    }
    const row = (data ?? null) as unknown as {
      id: string
      is_gold: boolean | null
      source: string | null
      exam_board: string | null
      qualification: string | null
      gold_expected: GoldExpected | null
    } | null
    if (!row) return notFoundResponse('Practice script not found.')

    // SAFETY: only specimen gold is a valid practice script (never QA gold).
    if (row.is_gold !== true || row.source !== 'specimen') {
      return forbiddenResponse('This script is not available for practice.')
    }
    const boardOk = await canMarkSubmission(marker.id, row.exam_board, row.qualification)
    if (!boardOk) return forbiddenResponse('You are not approved to practise this board.')

    if (!row.gold_expected || typeof row.gold_expected !== 'object') {
      return badRequestResponse('This practice script has no expert mark set yet.')
    }

    const comparison = comparePractice(row.gold_expected, { score: body.score, grade, ao })

    return NextResponse.json({ comparison, expected: row.gold_expected })
  } catch (err) {
    console.error('[marker/practice/check] unexpected error', err)
    return serverErrorResponse('An unexpected error occurred.')
  }
}
