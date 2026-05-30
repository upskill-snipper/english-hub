// ─── Admin · Run Calibration & Promote ─────────────────────────────────────
// POST /api/admin/calibration/run
//
// The train-the-ML loop, wired end to end (Stage 6). For a marking AREA it:
//   1. fetches APPROVED scripts that carry BOTH an AI mark and a human mark,
//   2. maps each to an {AI overall+criteria, human overall+criteria} pair,
//   3. runs runCalibration() → agreement metrics + the G-LIVE gate per check,
//   4. persists the result to calibration_baselines (Stage 5) — as 'promoted'
//      (the live baseline that flips the gate) when green AND ?promote=1, else
//      'measured' (recorded for history),
//   5. returns the report + per-check breakdown so the admin sees exactly why
//      an area is/ isn't live.
//
// SCOPE: IELTS only (the agreement maths is band/criteria-specific — see
// run.ts). Non-IELTS areas return 400 rather than a misleading "green".
//
// Auth: site-admin only (verifyAdmin), like every other /api/admin/marker-*
// route. Uses the service-role client for the data + baseline writes.
//
// Supabase generated types don't know about marking_submissions /
// calibration_baselines yet (Prisma client not regenerated), so rows are cast
// through `unknown` to the SELECT shapes the migrations guarantee.

import { NextRequest, NextResponse } from 'next/server'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { verifyAdmin } from '@/lib/admin-auth'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { rateLimitResponse, serverErrorResponse, badRequestResponse } from '@/lib/api-response'
import {
  runCalibration,
  toCriterionBands,
  type CalibrationScript,
} from '@/lib/marking/engine/calibration/run'
import {
  persistBaseline,
  getPromotedBaselineId,
} from '@/lib/marking/engine/calibration/baseline-store'
import { IELTS_CRITERIA } from '@/lib/marking/engine/calibration/metrics'
import { resolveMarkingShape } from '@/lib/marking/marking-shapes'

export const dynamic = 'force-dynamic'
export const maxDuration = 60

// The pilot area the IELTS WT2 route reads. Mirrors IELTS_WT2_AREA_KEY in the
// route's glive.ts (kept in sync; this route promotes under this exact key).
const IELTS_WT2_AREA_KEY = 'ielts:academic:writing-task-2'

interface RunBody {
  /** Area to calibrate. Defaults to the IELTS WT2 pilot. */
  areaKey?: string
  /** Restrict to a specific batch (optional). */
  batchId?: string
  /** Promote a green run as the live baseline (default false = measure only). */
  promote?: boolean
}

// Rows we need to build pairs: the AI structured result + the human band mark.
const ROW_COLUMNS =
  'id, exam_board, qualification, paper, status, ai_result, ai_grade_band,' +
  ' teacher_band_marks, batch_id'

interface CalibRow {
  id: string
  exam_board: string | null
  qualification: string | null
  paper: string | null
  status: string | null
  ai_result: unknown
  ai_grade_band: string | null
  teacher_band_marks: unknown
  batch_id: string | null
}

/**
 * Extract the AI overall band + per-criterion bands from a persisted
 * MarkingResultV2 (ai_result). Tolerant of shape drift: returns null when the
 * row has no usable AI band (it's then excluded from the pairs).
 */
function extractAi(
  aiResult: unknown,
): { overall: number; criteria: Record<string, number> } | null {
  if (!aiResult || typeof aiResult !== 'object') return null
  const r = aiResult as Record<string, unknown>
  const overallObj = r.overall as Record<string, unknown> | undefined
  const overall =
    typeof overallObj?.overallBand === 'number'
      ? overallObj.overallBand
      : typeof r.overallBand === 'number'
        ? (r.overallBand as number)
        : null
  if (overall === null || !Number.isFinite(overall)) return null

  const criteria: Record<string, number> = {}
  const critArr = Array.isArray(r.criteria) ? (r.criteria as Record<string, unknown>[]) : []
  for (const c of critArr) {
    const code = typeof c.code === 'string' ? c.code : null
    const band = typeof c.band === 'number' ? c.band : null
    if (code && band !== null && (IELTS_CRITERIA as readonly string[]).includes(code)) {
      criteria[code] = band
    }
  }
  return { overall, criteria }
}

/**
 * Extract the human overall band + criteria from teacher_band_marks (Stage 3).
 * Only 'band' marks are usable for IELTS calibration; returns null otherwise.
 */
function extractHuman(tbm: unknown): { overall: number; criteria: Record<string, number> } | null {
  if (!tbm || typeof tbm !== 'object') return null
  const m = tbm as Record<string, unknown>
  if (m.kind !== 'band') return null
  const overall = typeof m.overall === 'number' ? m.overall : Number(m.overall)
  if (!Number.isFinite(overall)) return null
  const criteria: Record<string, number> = {}
  if (m.criteria && typeof m.criteria === 'object') {
    for (const [k, v] of Object.entries(m.criteria as Record<string, unknown>)) {
      if (typeof v === 'number' && (IELTS_CRITERIA as readonly string[]).includes(k))
        criteria[k] = v
    }
  }
  return { overall, criteria }
}

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get('content-type')
    // Tolerate an empty body (defaults to the IELTS pilot, measure-only).
    let body: RunBody = {}
    if (contentType?.includes('application/json')) {
      try {
        body = (await request.json()) as RunBody
      } catch {
        body = {}
      }
    }

    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`admin-calibration-run:${ip}`, { limit: 10, windowSeconds: 60 })
    if (!rl.success) return rateLimitResponse(rl.resetAt)

    const { error: authError } = await verifyAdmin()
    if (authError === 'Unauthorized') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    if (authError === 'Forbidden') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const areaKey = (body.areaKey ?? IELTS_WT2_AREA_KEY).trim()
    const promote = body.promote === true

    // SCOPE GUARD: the agreement maths is IELTS band-specific. Refuse non-IELTS
    // areas rather than produce a misleading result.
    if (!areaKey.startsWith('ielts:')) {
      return badRequestResponse(
        'Calibration is currently supported for IELTS areas only (band agreement metric).',
      )
    }

    const admin = createServiceRoleClient()

    // Fetch APPROVED rows for the area that have a human band mark. We match on
    // qualification/board loosely (IELTS), optionally narrowed to a batch.
    let query = admin
      .from('marking_submissions')
      .select(ROW_COLUMNS)
      .eq('status', 'approved')
      .not('teacher_band_marks', 'is', null)
      .limit(5000)
    if (body.batchId) query = query.eq('batch_id', body.batchId)

    const { data: rowsRaw, error: rowsErr } = await query
    if (rowsErr) {
      console.error('[admin/calibration/run] rows query failed', rowsErr)
      return serverErrorResponse('Could not load marked scripts for calibration.')
    }
    const rows = (rowsRaw ?? []) as unknown as CalibRow[]

    // Build pairs: keep only IELTS-band rows with BOTH an AI and a human band.
    const scripts: CalibrationScript[] = []
    let skippedNoAi = 0
    let skippedNoHuman = 0
    let skippedNotIelts = 0
    for (const row of rows) {
      const shape = resolveMarkingShape(row.exam_board, row.qualification)
      if (shape.kind !== 'band') {
        skippedNotIelts += 1
        continue
      }
      const human = extractHuman(row.teacher_band_marks)
      if (!human) {
        skippedNoHuman += 1
        continue
      }
      const ai = extractAi(row.ai_result)
      if (!ai) {
        skippedNoAi += 1
        continue
      }
      scripts.push({
        id: row.id,
        aiOverall: ai.overall,
        humanOverall: human.overall,
        aiCriteria: toCriterionBands(ai.criteria, ai.overall),
        humanCriteria: toCriterionBands(human.criteria, human.overall),
      })
    }

    // Resolve the prior promoted baseline (for the regression check + linkage).
    const priorId = await getPromotedBaselineId(areaKey)
    const priorRef = priorId
      ? await (async () => {
          const { data } = await admin
            .from('calibration_baselines')
            .select('id, within_half_band')
            .eq('id', priorId)
            .maybeSingle()
          const p = data as unknown as { id: string; within_half_band: number } | null
          return p ? { id: p.id, withinHalfBand: p.within_half_band } : null
        })()
      : null

    // Run the calibration (pure). The baseline id is provisional; the persisted
    // row gets its own DB id.
    const result = runCalibration({
      id: `run-${areaKey}`,
      scripts,
      priorBaseline: priorRef,
    })

    // Persist: promote only when green AND the caller asked to promote.
    const willPromote = promote && result.green
    let persistedId: string | null = null
    let persistedStatus: 'measured' | 'promoted' | null = null
    if (scripts.length > 0) {
      try {
        const firstRow = rows.find(
          (r) => resolveMarkingShape(r.exam_board, r.qualification).kind === 'band',
        )
        const persisted = await persistBaseline({
          areaKey,
          examBoard: firstRow?.exam_board ?? null,
          qualification: firstRow?.qualification ?? null,
          paper: firstRow?.paper ?? null,
          n: result.n,
          withinHalfBand: result.withinHalfBand,
          exactBand: result.exactBand,
          perBandCoverage: result.perBandCoverage,
          report: result.report,
          priorBaselineId: priorId,
          promote: willPromote,
          gatePassed: result.green,
          gateDetail: result.checks,
          createdBy: null,
        })
        persistedId = persisted.id
        persistedStatus = persisted.status
      } catch (err) {
        console.error('[admin/calibration/run] persist failed', err)
        return serverErrorResponse('Calibration ran but the baseline could not be saved.')
      }
    }

    return NextResponse.json({
      areaKey,
      scriptsConsidered: rows.length,
      pairsUsed: result.n,
      skipped: { noAi: skippedNoAi, noHuman: skippedNoHuman, notIelts: skippedNotIelts },
      withinHalfBand: result.withinHalfBand,
      exactBand: result.exactBand,
      perBandCoverage: result.perBandCoverage,
      green: result.green,
      checks: result.checks,
      promoted: persistedStatus === 'promoted',
      requestedPromote: promote,
      baselineId: persistedId,
      baselineStatus: persistedStatus,
      report: result.report,
    })
  } catch (err) {
    console.error('[admin/calibration/run] unexpected error', err)
    return serverErrorResponse('An unexpected error occurred during calibration.')
  }
}
