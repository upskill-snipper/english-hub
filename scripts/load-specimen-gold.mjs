// ─── Load specimen GOLD scripts into marking_submissions ─────────────────────
//
// Headless loader for SPECIMEN gold practice scripts (e.g. exam-board
// standardisation packs). Inserts rows that power the examiner Practice zone
// (/marker/practice): is_gold=true, source='specimen', gold_expected set.
//
// It mirrors the vetted admin batch-ingest shape (src/app/api/admin/
// marker-batches/[batchId]/ingest), but runs headless with the Supabase
// service-role key so you don't need an admin browser session.
//
// USAGE:
//   SUPABASE env must be set (NEXT_PUBLIC_SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY,
//   e.g. via your .env). Then:
//     node scripts/load-specimen-gold.mjs <items.json>
//   …where items.json is an array of:
//     {
//       "tag": "4EA1 specimen · Q4 · P3",   // stable dedupe key (essay_title)
//       "board": "EDEXCEL_IGCSE",
//       "paper": "Paper 1",
//       "questionType": "Q4",
//       "questionText": "Analyse how the writer uses language and structure…",
//       "markSchemeId": "edexcel-igcse-lang-paper1",
//       "questionId": "Q4",                  // in-scheme question id (rubric_ref)
//       "studentAnswer": "<verbatim transcription>",
//       "goldExpected": { "mark": 9, "ao": { "AO2": 9 } }
//     }
//
// IDEMPOTENT: dedupes on essay_title === tag (updates the row if it already
// exists, else inserts). Re-running is safe. NEVER writes status 'approved'.
// The data file stays OUTSIDE the repo (it contains copyrighted board scripts).
// ────────────────────────────────────────────────────────────────────────────

import { readFileSync } from 'node:fs'
import { createClient } from '@supabase/supabase-js'

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY
if (!URL || !KEY) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in env.')
  process.exit(1)
}
const file = process.argv[2]
if (!file) {
  console.error('Usage: node scripts/load-specimen-gold.mjs <items.json>')
  process.exit(1)
}

let items
try {
  items = JSON.parse(readFileSync(file, 'utf8'))
} catch (e) {
  console.error('Could not read/parse items file:', e.message)
  process.exit(1)
}
if (!Array.isArray(items) || items.length === 0) {
  console.error('Items file must be a non-empty JSON array.')
  process.exit(1)
}

const db = createClient(URL, KEY, { auth: { persistSession: false } })

function validate(it, i) {
  for (const f of ['tag', 'board', 'questionText', 'markSchemeId', 'questionId', 'studentAnswer']) {
    if (typeof it[f] !== 'string' || it[f].trim().length === 0) {
      return `item ${i}: "${f}" is required`
    }
  }
  if (!it.goldExpected || typeof it.goldExpected !== 'object') return `item ${i}: goldExpected required`
  if (typeof it.goldExpected.mark !== 'number') return `item ${i}: goldExpected.mark must be a number`
  return null
}

function rowFor(it) {
  return {
    source: 'specimen',
    student_id: null,
    school_id: null,
    class_id: null,
    exam_board: it.board.trim(),
    paper: it.paper?.trim() || null,
    essay_title: it.tag.trim(),
    question_text: it.questionText.trim(),
    question_type: it.questionType?.trim() || null,
    studied_text: it.studiedText?.trim() || null,
    mark_scheme_id: it.markSchemeId.trim(),
    rubric_ref: it.questionId.trim(),
    essay_text: it.studentAnswer,
    is_gold: true,
    gold_expected: it.goldExpected,
    status: 'submitted',
  }
}

let inserted = 0
let updated = 0
let failed = 0

for (let i = 0; i < items.length; i++) {
  const it = items[i]
  const err = validate(it, i)
  if (err) {
    console.error('SKIP', err)
    failed++
    continue
  }
  const tag = it.tag.trim()
  const { data: existing, error: selErr } = await db
    .from('marking_submissions')
    .select('id')
    .eq('essay_title', tag)
    .eq('is_gold', true)
    .maybeSingle()
  if (selErr) {
    console.error('SKIP (lookup failed)', tag, selErr.message)
    failed++
    continue
  }
  if (existing) {
    const { error } = await db
      .from('marking_submissions')
      .update(rowFor(it))
      .eq('id', existing.id)
    if (error) {
      console.error('FAIL update', tag, error.message)
      failed++
    } else {
      updated++
      console.log('updated', tag)
    }
  } else {
    const { error } = await db.from('marking_submissions').insert(rowFor(it))
    if (error) {
      console.error('FAIL insert', tag, error.message)
      failed++
    } else {
      inserted++
      console.log('inserted', tag)
    }
  }
}

console.log(`\nDone. inserted=${inserted} updated=${updated} failed=${failed} of ${items.length}`)
process.exit(failed > 0 ? 1 : 0)
