// ─── Admin · Run Calibration & Promote ─────────────────────────────────────
// POST /api/admin/calibration/run
//
// The train-the-ML loop. For a marking BOARD it:
//   1. fetches APPROVED scripts that carry BOTH an AI mark and a human mark,
//   2. builds agreement pairs using the metric for that board's SHAPE,
//   3. runs the gate (per-check),
//   4. persists the result to calibration_baselines — 'promoted' (live) when
//      green AND ?promote, else 'measured' (recorded for history),
//   5. returns the report + per-check breakdown.
//
// SCOPE: ALL boards. The metric is chosen by the board's marking shape:
//   • IELTS (band)         → within-half-BAND (run.ts / metrics.ts)
//   • GCSE grades, KS3/EAL → within-ONE-STEP ordinal (ordinal-metrics.ts)
// Human-mark SOURCE is shape-aware: GCSE reads final_teacher_mark; IELTS/KS3/EAL
// read teacher_band_marks. A pair forms only when BOTH an AI and a human mark
// exist; otherwise the script is honestly skipped + counted, never guessed.
//
// NOTE on "go live": only the IELTS route is behind a fail-closed calibration
// gate, so promoting an IELTS baseline flips that route live. GCSE is already
// live, so a promoted GCSE/KS3/EAL baseline is the agreement CERTIFICATION
// record (audit + drift tracking), not a switch.
//
// Auth: site-admin only (verifyAdmin). Service-role client for data + writes.

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
  summariseOrdinal,
  assessOrdinalGate,
  type OrdinalPair,
} from '@/lib/marking/engine/calibration/ordinal-metrics'
import {
  persistBaseline,
  getPromotedBaselineId,
} from '@/lib/marking/engine/calibration/baseline-store'
import { IELTS_CRITERIA } from '@/lib/marking/engine/calibration/metrics'
import { resolveMarkingShape, type MarkingShape } from '@/lib/marking/marking-shapes'
import { normaliseBoard, isRequestableBoard } from '@/lib/marker-board-access'

export const dynamic = 'force-dynamic'
export const maxDuration = 60

// The pilot area the IELTS WT2 route reads (mirrors IELTS_WT2_AREA_KEY in glive.ts).
const IELTS_WT2_AREA_KEY = 'ielts:academic:writing-task-2'

/** Map a board token to its stable calibration area key. */
function boardToAreaKey(board: string): string {
  const b = normaliseBoard(board)
  if (b === 'IELTS') return IELTS_WT2_AREA_KEY
  if (b === 'KS3') return 'ks3:english'
  if (b === 'EAL') return 'eal:english'
  return `${b.toLowerCase()}:gcse`
}

interface RunBody {
  /** Board to calibrate (preferred), e.g. 'AQA', 'IELTS', 'KS3'. */
  board?: string
  /** Area key (legacy/explicit); defaults to the IELTS pilot. */
  areaKey?: string
  /** Restrict to a specific batch (optional). */
  batchId?: string
  /** Promote a green run as the live baseline (default false = measure only). */
  promote?: boolean
}

// Rows we need: AI mark (band via ai_result / grade via ai_grade) + the human
// mark (band/level via teacher_band_marks / grade via final_teacher_mark).
const ROW_COLUMNS =
  'id, exam_board, qualification, paper, status, ai_result, ai_grade, ai_grade_band,' +
  ' teacher_band_marks, final_teacher_mark, batch_id'

interface CalibRow {
  id: string
  exam_board: string | null
  qualification: string | null
  paper: string | null
  status: string | null
  ai_result: unknown
  ai_grade: string | null
  ai_grade_band: string | null
  teacher_band_marks: unknown
  final_teacher_mark: string | null
  batch_id: string | null
}

// ─── Band extraction (IELTS) ─────────────────────────────────────────────────

/** AI overall band + per-criterion bands from a persisted MarkingResultV2. */
function extractAiBand(
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

/** Human overall band + criteria from teacher_band_marks (kind:'band'). */
function extractHumanBand(
  tbm: unknown,
): { overall: number; criteria: Record<string, number> } | null {
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

// ─── Ordinal extraction (GCSE grades / KS3-EAL levels) ───────────────────────

/** Human label: GCSE grade from final_teacher_mark; KS3/EAL level from teacher_band_marks.overall. */
function extractHumanLabel(row: CalibRow, shape: MarkingShape): string | null {
  if (shape.kind === 'gcse_grade') {
    const g = row.final_teacher_mark
    return typeof g === 'string' && g.trim().length > 0 ? g.trim() : null
  }
  const tbm = row.teacher_band_marks
  if (tbm && typeof tbm === 'object') {
    const m = tbm as Record<string, unknown>
    if (m.kind === 'level' && typeof m.overall === 'string' && m.overall.trim().length > 0) {
      return m.overall.trim()
    }
  }
  return null
}

/** AI label: GCSE grade from ai_grade; KS3/EAL level from ai_grade_band / ai_result.overall.level. */
function extractAiLabel(row: CalibRow, shape: MarkingShape): string | null {
  if (shape.kind === 'gcse_grade') {
    const g = row.ai_grade
    return typeof g === 'string' && g.trim().length > 0 ? g.trim() : null
  }
  if (typeof row.ai_grade_band === 'string' && row.ai_grade_band.trim().length > 0) {
    return row.ai_grade_band.trim()
  }
  const r = row.ai_result
  if (r && typeof r === 'object') {
    const overall = (r as Record<string, unknown>).overall
    if (overall && typeof overall === 'object') {
      const lvl = (overall as Record<string, unknown>).level
      if (typeof lvl === 'string' && lvl.trim().length > 0) return lvl.trim()
    }
  }
  return null
}

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get('content-type')
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
    if (authError === 'Unauthorized')
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    if (authError === 'Forbidden') return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    const promote = body.promote === true

    // Resolve the target board → areaKey → shape. `board` preferred; an explicit
    // areaKey (legacy) still works and defaults to the IELTS pilot.
    let board: string
    let areaKey: string
    if (typeof body.board === 'string' && body.board.trim().length > 0) {
      board = normaliseBoard(body.board)
      if (!isRequestableBoard(board)) return badRequestResponse(`Unknown board: ${body.board}`)
      areaKey = boardToAreaKey(board)
    } else {
      areaKey = (body.areaKey ?? IELTS_WT2_AREA_KEY).trim()
      board = (areaKey.split(':')[0] ?? 'IELTS').toUpperCase()
    }
    // The shape drives the metric. resolveMarkingShape takes (board, qualification);
    // passing the board token as both is enough for shape resolution.
    const shape: MarkingShape = resolveMarkingShape(board, board)
    const isBand = shape.kind === 'band'

    const admin = createServiceRoleClient()

    // Fetch APPROVED rows, optionally narrowed to a batch. We DON'T filter on a
    // human-mark column here (GCSE uses final_teacher_mark, others use
    // teacher_band_marks) — we filter precisely in code by shape.
    let query = admin
      .from('marking_submissions')
      .select(ROW_COLUMNS)
      .eq('status', 'approved')
      .limit(5000)
    if (body.batchId) query = query.eq('batch_id', body.batchId)

    const { data: rowsRaw, error: rowsErr } = await query
    if (rowsErr) {
      console.error('[admin/calibration/run] rows query failed', rowsErr)
      return serverErrorResponse('Could not load marked scripts for calibration.')
    }
    const rows = (rowsRaw ?? []) as unknown as CalibRow[]

    const targetBoard = board
    // A row belongs to this run when its shape matches AND (for GCSE) its exact
    // board matches; for IELTS/KS3/EAL the shape is the identity (one offering).
    const matchesArea = (r: CalibRow): boolean => {
      const rShape = resolveMarkingShape(r.exam_board, r.qualification)
      if (rShape.kind !== shape.kind) return false
      if (shape.kind === 'gcse_grade') {
        return r.exam_board ? normaliseBoard(r.exam_board) === targetBoard : false
      }
      return true
    }

    let skippedNoAi = 0
    let skippedNoHuman = 0
    let skippedNotArea = 0
    let firstRow: CalibRow | undefined

    let n: number
    let headlineAgreement: number
    let secondaryAgreement: number | null
    let coverage: Record<number | string, number>
    let green: boolean
    let checks: unknown
    let report: unknown

    if (isBand) {
      const scripts: CalibrationScript[] = []
      for (const row of rows) {
        if (!matchesArea(row)) {
          skippedNotArea += 1
          continue
        }
        const human = extractHumanBand(row.teacher_band_marks)
        if (!human) {
          skippedNoHuman += 1
          continue
        }
        const ai = extractAiBand(row.ai_result)
        if (!ai) {
          skippedNoAi += 1
          continue
        }
        if (!firstRow) firstRow = row
        scripts.push({
          id: row.id,
          aiOverall: ai.overall,
          humanOverall: human.overall,
          aiCriteria: toCriterionBands(ai.criteria, ai.overall),
          humanCriteria: toCriterionBands(human.criteria, human.overall),
        })
      }
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
      const result = runCalibration({ id: `run-${areaKey}`, scripts, priorBaseline: priorRef })
      n = result.n
      headlineAgreement = result.withinHalfBand
      secondaryAgreement = result.exactBand
      coverage = result.perBandCoverage
      green = result.green
      checks = result.checks
      report = result.report
    } else {
      // ORDINAL: GCSE grades, KS3/EAL levels.
      const pairs: OrdinalPair[] = []
      for (const row of rows) {
        if (!matchesArea(row)) {
          skippedNotArea += 1
          continue
        }
        const human = extractHumanLabel(row, shape)
        if (!human) {
          skippedNoHuman += 1
          continue
        }
        const ai = extractAiLabel(row, shape)
        if (!ai) {
          skippedNoAi += 1
          continue
        }
        if (!firstRow) firstRow = row
        pairs.push({ ai, human })
      }
      const ordReport = summariseOrdinal(shape, pairs)
      const gate = assessOrdinalGate(ordReport)
      n = ordReport.count
      headlineAgreement = ordReport.withinOneStep
      secondaryAgreement = ordReport.exactAgreement
      coverage = ordReport.perLabelCoverage
      green = gate.green
      checks = gate.checks
      report = ordReport
    }

    // Persist: promote only when green AND the caller asked to promote.
    const priorId = await getPromotedBaselineId(areaKey)
    const willPromote = promote && green
    let persistedId: string | null = null
    let persistedStatus: 'measured' | 'promoted' | null = null
    if (n > 0) {
      try {
        const persisted = await persistBaseline({
          areaKey,
          examBoard: firstRow?.exam_board ?? board,
          qualification: firstRow?.qualification ?? null,
          paper: firstRow?.paper ?? null,
          n,
          withinHalfBand: headlineAgreement,
          exactBand: secondaryAgreement,
          perBandCoverage: coverage as Record<number, number>,
          report: report as Record<string, unknown>,
          priorBaselineId: priorId,
          promote: willPromote,
          gatePassed: green,
          gateDetail: checks,
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
      board,
      metric: isBand ? 'within-half-band' : 'within-one-step',
      scriptsConsidered: rows.length,
      pairsUsed: n,
      skipped: { noAi: skippedNoAi, noHuman: skippedNoHuman, notArea: skippedNotArea },
      headlineAgreement,
      exactAgreement: secondaryAgreement,
      coverage,
      green,
      checks,
      promoted: persistedStatus === 'promoted',
      requestedPromote: promote,
      baselineId: persistedId,
      baselineStatus: persistedStatus,
      report,
    })
  } catch (err) {
    console.error('[admin/calibration/run] unexpected error', err)
    return serverErrorResponse('An unexpected error occurred.')
  }
}
