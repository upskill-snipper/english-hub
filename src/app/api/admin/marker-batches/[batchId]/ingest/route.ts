// ─── Platform-admin — Batch ingest ──────────────────────────────────────────
// POST /api/admin/marker-batches/[batchId]/ingest
//
// Site-admin only (verifyAdmin — RLS deny-by-default; service-role only).
// Bulk-loads answers into `marking_submissions` rows for a paid-marker batch.
//
// Accepts EITHER:
//   • JSON body  { items: [ IngestItem, … ] }            (Content-Type JSON)
//   • raw CSV    text/csv body with a header row         (tolerant parser)
//
// IngestItem:
//   { board, paper?, questionType?, questionText, studiedText?, markSchemeId,
//     questionId, studentAnswer, source('commissioned'|'specimen'|'platform'),
//     isGold?, goldExpected? }
//
// Mapping into marking_submissions (snake_case — see the two frozen
// migrations 20260518 / 20260519):
//   studentAnswer            → essay_text          (the answer IS the essay)
//   questionText             → question_text
//   questionType             → question_type
//   studiedText              → studied_text
//   markSchemeId             → mark_scheme_id   (validated via getMarkScheme)
//   questionId               → rubric_ref       (in-scheme question id)
//   board                    → exam_board
//   paper                    → paper
//   batch_id                 = path :batchId
//   status                   = 'submitted'      (awaiting AI draft)
//   is_gold / gold_expected  passthrough (gold-set rows)
//   source: 'commissioned' → 'commissioned' (student_id NULL — no data subject)
//           'specimen'     → 'specimen'     (student_id NULL — no data subject)
//           'platform'     → 'b2b_class'    (real pupil work; student_id REQUIRED
//                                            — there is no 'platform' value in
//                                            the marking_submissions source
//                                            CHECK, platform == class spine)
//
// RULES enforced here:
//   • commissioned/specimen rows MUST have student_id NULL.
//   • platform rows MUST carry a studentId (real pupil, FK to auth.users).
//   • NEVER writes status 'approved' (marker approval does that later).
//   • Unknown markSchemeId → skipped + reported (never inserted).
//   • Cap 500 items / call.
//
// EMPTY-TABLE / bad-input SAFE: validation failures are per-row skips with a
// reason; a missing table degrades to a 502 with a note, never an unhandled
// 500.
// ────────────────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { verifyAdmin } from '@/lib/admin-auth'
import { getMarkScheme } from '@/lib/marking/mark-schemes'

export const dynamic = 'force-dynamic'
export const maxDuration = 60

const SUBMISSIONS_TABLE = 'marking_submissions'
const BATCHES_TABLE = 'marker_batches'
const MAX_ITEMS = 500

type IngestSource = 'commissioned' | 'specimen' | 'platform'
const INGEST_SOURCES: readonly IngestSource[] = ['commissioned', 'specimen', 'platform']

interface IngestItem {
  board?: string
  paper?: string | null
  questionType?: string | null
  questionText?: string
  studiedText?: string | null
  markSchemeId?: string
  questionId?: string
  studentAnswer?: string
  source?: string
  studentId?: string | null
  isGold?: boolean
  goldExpected?: unknown
}

interface SkippedItem {
  index: number
  reason: string
}

// ─── Tolerant RFC-4180-ish CSV tokeniser ─────────────────────────────────────
// Same proven algorithm as src/lib/school/csv-parse.ts (BOM strip, CRLF/CR/LF,
// quoted fields with embedded commas/newlines and "" escapes). Inlined so the
// frozen shared student-upload parser is not repurposed.
function tokeniseCsv(raw: string): string[][] {
  const stripped = raw.charCodeAt(0) === 0xfeff ? raw.slice(1) : raw
  if (stripped.length === 0) return []
  const rows: string[][] = []
  let cell = ''
  let row: string[] = []
  let inQuotes = false
  for (let i = 0; i < stripped.length; i++) {
    const ch = stripped[i]
    const next = stripped[i + 1]
    if (inQuotes) {
      if (ch === '"' && next === '"') {
        cell += '"'
        i++
      } else if (ch === '"') {
        inQuotes = false
      } else {
        cell += ch
      }
      continue
    }
    if (ch === '"') {
      inQuotes = true
      continue
    }
    if (ch === ',') {
      row.push(cell)
      cell = ''
      continue
    }
    if (ch === '\n') {
      row.push(cell)
      rows.push(row)
      cell = ''
      row = []
      continue
    }
    if (ch === '\r') {
      row.push(cell)
      rows.push(row)
      cell = ''
      row = []
      if (next === '\n') i++
      continue
    }
    cell += ch
  }
  if (cell.length > 0 || row.length > 0) {
    row.push(cell)
    rows.push(row)
  }
  return rows
}

/** Header synonyms → canonical IngestItem keys. Case/space/underscore-tolerant. */
const CSV_HEADER_ALIASES: Readonly<Record<string, keyof IngestItem>> = {
  board: 'board',
  examboard: 'board',
  exam_board: 'board',
  paper: 'paper',
  questiontype: 'questionType',
  question_type: 'questionType',
  qtype: 'questionType',
  questiontext: 'questionText',
  question_text: 'questionText',
  question: 'questionText',
  studiedtext: 'studiedText',
  studied_text: 'studiedText',
  studied: 'studiedText',
  markschemeid: 'markSchemeId',
  mark_scheme_id: 'markSchemeId',
  markscheme: 'markSchemeId',
  scheme: 'markSchemeId',
  questionid: 'questionId',
  question_id: 'questionId',
  qid: 'questionId',
  studentanswer: 'studentAnswer',
  student_answer: 'studentAnswer',
  answer: 'studentAnswer',
  essay: 'studentAnswer',
  source: 'source',
  studentid: 'studentId',
  student_id: 'studentId',
  isgold: 'isGold',
  is_gold: 'isGold',
  gold: 'isGold',
  goldexpected: 'goldExpected',
  gold_expected: 'goldExpected',
}

function csvToItems(raw: string): { items: IngestItem[]; error: string | null } {
  const rows = tokeniseCsv(raw)
  if (rows.length === 0) return { items: [], error: 'CSV is empty.' }

  // Skip blank / comment ("# …") leading rows before the header.
  let headerIdx = 0
  const isBlank = (cells: string[]) => cells.every((c) => c.trim() === '')
  while (
    headerIdx < rows.length &&
    (isBlank(rows[headerIdx]) || rows[headerIdx][0]?.trim().startsWith('#'))
  ) {
    headerIdx++
  }
  if (headerIdx >= rows.length) return { items: [], error: 'No header row found.' }

  const header = rows[headerIdx]
  const colMap: Partial<Record<keyof IngestItem, number>> = {}
  header.forEach((cell, idx) => {
    const key = cell.trim().toLowerCase().replace(/\s+/g, '')
    const canonical = CSV_HEADER_ALIASES[key]
    if (canonical && colMap[canonical] === undefined) colMap[canonical] = idx
  })

  if (
    colMap.markSchemeId === undefined ||
    colMap.questionId === undefined ||
    colMap.studentAnswer === undefined ||
    colMap.source === undefined ||
    colMap.questionText === undefined ||
    colMap.board === undefined
  ) {
    return {
      items: [],
      error:
        'CSV header must include board, questionText, markSchemeId, questionId, studentAnswer and source.',
    }
  }

  const cellAt = (cells: string[], k: keyof IngestItem): string | undefined => {
    const idx = colMap[k]
    return idx === undefined ? undefined : (cells[idx] ?? '').trim()
  }

  const items: IngestItem[] = []
  for (let i = headerIdx + 1; i < rows.length; i++) {
    const cells = rows[i]
    if (isBlank(cells)) continue
    const goldRaw = cellAt(cells, 'isGold')
    const goldExpectedRaw = cellAt(cells, 'goldExpected')
    let goldExpected: unknown
    if (goldExpectedRaw) {
      try {
        goldExpected = JSON.parse(goldExpectedRaw)
      } catch {
        goldExpected = goldExpectedRaw // keep as string; column is JSONB-tolerant
      }
    }
    items.push({
      board: cellAt(cells, 'board'),
      paper: cellAt(cells, 'paper') || null,
      questionType: cellAt(cells, 'questionType') || null,
      questionText: cellAt(cells, 'questionText'),
      studiedText: cellAt(cells, 'studiedText') || null,
      markSchemeId: cellAt(cells, 'markSchemeId'),
      questionId: cellAt(cells, 'questionId'),
      studentAnswer: cellAt(cells, 'studentAnswer'),
      source: cellAt(cells, 'source'),
      studentId: cellAt(cells, 'studentId') || null,
      isGold: goldRaw ? /^(true|1|yes|y)$/i.test(goldRaw) : false,
      goldExpected,
    })
  }
  return { items, error: null }
}

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ batchId: string }> },
) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`admin-batch-ingest:${ip}`, { limit: 20, windowSeconds: 60 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
        },
      )
    }

    const { error: authError } = await verifyAdmin()
    if (authError === 'Unauthorized') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    if (authError === 'Forbidden') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const { batchId } = await context.params
    if (!batchId || batchId.trim().length === 0) {
      return NextResponse.json({ error: 'batchId is required' }, { status: 400 })
    }

    // ── Parse the body: JSON { items } OR raw CSV. ───────────────────────
    const ct = (request.headers.get('content-type') ?? '').toLowerCase()
    let items: IngestItem[]

    if (ct.includes('text/csv') || ct.includes('application/csv')) {
      const raw = await request.text()
      const parsed = csvToItems(raw)
      if (parsed.error) {
        return NextResponse.json({ error: parsed.error }, { status: 400 })
      }
      items = parsed.items
    } else if (ct.includes('application/json')) {
      let body: { items?: unknown }
      try {
        body = (await request.json()) as { items?: unknown }
      } catch {
        return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
      }
      if (!body || !Array.isArray(body.items)) {
        return NextResponse.json(
          { error: 'Body must be { items: [...] } (JSON) or a text/csv document.' },
          { status: 400 },
        )
      }
      items = body.items as IngestItem[]
    } else {
      // Be tolerant: try CSV if the text looks like it, else demand a type.
      const raw = await request.text()
      if (raw.trim().length > 0 && raw.includes(',')) {
        const parsed = csvToItems(raw)
        if (parsed.error) {
          return NextResponse.json({ error: parsed.error }, { status: 400 })
        }
        items = parsed.items
      } else {
        return NextResponse.json(
          { error: 'Content-Type must be application/json or text/csv' },
          { status: 415 },
        )
      }
    }

    if (items.length === 0) {
      return NextResponse.json({ error: 'No items to ingest.' }, { status: 400 })
    }
    if (items.length > MAX_ITEMS) {
      return NextResponse.json(
        { error: `Too many items: ${items.length}. Maximum ${MAX_ITEMS} per call.` },
        { status: 400 },
      )
    }

    const supabase = createServiceRoleClient()

    // Confirm the batch exists (and is a real row) before inserting children.
    const { data: batch, error: batchErr } = await supabase
      .from(BATCHES_TABLE)
      .select('id, status')
      .eq('id', batchId)
      .single()

    if (batchErr) {
      if ((batchErr as { code?: string }).code === 'PGRST116') {
        return NextResponse.json({ error: 'Batch not found.' }, { status: 404 })
      }
      console.error('[api/admin/.../ingest] batch lookup failed', batchErr)
      return NextResponse.json(
        { error: 'Batch store unavailable.', inserted: 0, skipped: items.length },
        { status: 502 },
      )
    }
    if (!batch) {
      return NextResponse.json({ error: 'Batch not found.' }, { status: 404 })
    }

    // ── Validate + build the insert rows; collect per-row skips. ──────────
    const rowsToInsert: Record<string, unknown>[] = []
    const skipped: SkippedItem[] = []

    items.forEach((raw, index) => {
      const item = raw && typeof raw === 'object' ? raw : ({} as IngestItem)

      const sourceIn = typeof item.source === 'string' ? (item.source.trim() as string) : ''
      if (!INGEST_SOURCES.includes(sourceIn as IngestSource)) {
        skipped.push({
          index,
          reason: `Invalid source "${sourceIn}" (expected commissioned|specimen|platform).`,
        })
        return
      }
      const source = sourceIn as IngestSource

      const studentAnswer = typeof item.studentAnswer === 'string' ? item.studentAnswer.trim() : ''
      if (studentAnswer.length === 0) {
        skipped.push({ index, reason: 'studentAnswer is required and was empty.' })
        return
      }

      const questionText = typeof item.questionText === 'string' ? item.questionText.trim() : ''
      if (questionText.length === 0) {
        skipped.push({ index, reason: 'questionText is required and was empty.' })
        return
      }

      const board = typeof item.board === 'string' ? item.board.trim() : ''
      if (board.length === 0) {
        skipped.push({ index, reason: 'board is required and was empty.' })
        return
      }

      const markSchemeId = typeof item.markSchemeId === 'string' ? item.markSchemeId.trim() : ''
      if (markSchemeId.length === 0) {
        skipped.push({ index, reason: 'markSchemeId is required and was empty.' })
        return
      }
      // Validate the mark scheme — skip + report unknown (never insert it).
      if (!getMarkScheme(markSchemeId)) {
        skipped.push({ index, reason: `Unknown markSchemeId "${markSchemeId}".` })
        return
      }

      const questionId = typeof item.questionId === 'string' ? item.questionId.trim() : ''
      if (questionId.length === 0) {
        skipped.push({ index, reason: 'questionId is required and was empty.' })
        return
      }

      // Source ⇒ marking_submissions.source + student_id rule.
      // commissioned/specimen carry NO data subject → student_id MUST be NULL.
      // platform == real pupil class work → student_id REQUIRED (FK to
      // auth.users); maps onto the existing 'b2b_class' source.
      let mappedSource: 'commissioned' | 'specimen' | 'b2b_class'
      let studentId: string | null
      if (source === 'commissioned' || source === 'specimen') {
        mappedSource = source
        studentId = null // RULE: no pupil data subject for these.
      } else {
        mappedSource = 'b2b_class'
        const sid = typeof item.studentId === 'string' ? item.studentId.trim() : ''
        if (sid.length === 0) {
          skipped.push({
            index,
            reason: 'platform rows require a studentId (real pupil work).',
          })
          return
        }
        studentId = sid
      }

      rowsToInsert.push({
        source: mappedSource,
        student_id: studentId,
        school_id: null,
        class_id: null,
        batch_id: batchId,
        exam_board: board,
        paper:
          typeof item.paper === 'string' && item.paper.trim().length > 0 ? item.paper.trim() : null,
        question_text: questionText,
        question_type:
          typeof item.questionType === 'string' && item.questionType.trim().length > 0
            ? item.questionType.trim()
            : null,
        studied_text:
          typeof item.studiedText === 'string' && item.studiedText.trim().length > 0
            ? item.studiedText.trim()
            : null,
        mark_scheme_id: markSchemeId,
        rubric_ref: questionId,
        essay_text: studentAnswer,
        is_gold: item.isGold === true,
        gold_expected: item.goldExpected === undefined ? null : (item.goldExpected as unknown),
        // NEVER 'approved' — marker approval is a later, human act.
        status: 'submitted',
      })
    })

    if (rowsToInsert.length === 0) {
      return NextResponse.json(
        { inserted: 0, skipped: skipped.length, skippedDetail: skipped, ids: [] },
        { status: 200 },
      )
    }

    // Single bulk insert (≤500 rows). Return the new ids.
    const { data: inserted, error: insertErr } = await supabase
      .from(SUBMISSIONS_TABLE)
      .insert(rowsToInsert)
      .select('id')

    if (insertErr) {
      console.error('[api/admin/.../ingest] insert failed', insertErr)
      return NextResponse.json(
        {
          error: insertErr.message ?? 'Failed to insert submissions.',
          inserted: 0,
          skipped: skipped.length,
          skippedDetail: skipped,
        },
        { status: 502 },
      )
    }

    const ids = ((inserted ?? []) as Array<{ id: string }>).map((r) => r.id)
    return NextResponse.json(
      {
        inserted: ids.length,
        skipped: skipped.length,
        skippedDetail: skipped,
        ids,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error('[api/admin/marker-batches/[batchId]/ingest POST] Unexpected error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
