import { NextResponse, type NextRequest } from 'next/server'
import { z } from 'zod'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit } from '@/lib/rate-limit'
import { rateLimitResponse } from '@/lib/api-response'
import { EXAMINER_BOUNDS } from '@/lib/marking/examiner/models'
import { getExaminerPack } from '@/lib/marking/examiner/registry'

// ─── /api/examiner/runs ─────────────────────────────────────────────────────
// A teacher's saved marking results. Saving is an explicit action in the tool
// ("Save to my records"), never automatic, because a transcript is a child's
// writing and a candidate label may be a child's name.
//
// Retention: rows expire 180 days after creation. GET sweeps the caller's own
// expired rows before listing, so a teacher who uses the tool never sees or
// keeps anything past its date. Owners who never return are covered by
// ON DELETE CASCADE on account erasure; a scheduled sweep for dormant owners
// belongs in /api/cron/data-retention and is recorded as a follow-up in
// docs/HANDOVER.md.
// ────────────────────────────────────────────────────────────────────────────

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const saveSchema = z.object({
  packId: z.string().min(1).max(80),
  questionId: z.string().min(1).max(20),
  batchId: z.string().uuid().optional(),
  candidateLabel: z.string().trim().max(120).optional(),
  pageCount: z.number().int().min(0).max(200).default(0),
  transcript: z.string().max(EXAMINER_BOUNDS.maxResponseChars).optional(),
  transcriptNotes: z.string().max(EXAMINER_BOUNDS.maxNotesChars).optional(),
  commentary: z.string().max(EXAMINER_BOUNDS.maxResponseChars).optional(),
  mark: z.number().int().min(0).max(500).nullable().optional(),
  maxMark: z.number().int().min(0).max(500).nullable().optional(),
  markNote: z.string().max(80).optional(),
  doubtfulReadings: z.number().int().min(0).default(0),
  unreadableStretches: z.number().int().min(0).default(0),
  modelTranscribe: z.string().max(80).optional(),
  modelMark: z.string().max(80).optional(),
})

const LIST_COLUMNS =
  'id, pack_id, question_id, batch_id, candidate_label, page_count, mark, max_mark, mark_note, doubtful_readings, unreadable_stretches, created_at, expires_at'

async function requireUser() {
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return user
}

export async function GET() {
  const user = await requireUser()
  if (!user) return NextResponse.json({ error: 'Sign in first.' }, { status: 401 })

  const admin = createServiceRoleClient()

  // Lazy retention: the owner's expired rows go before anything is listed.
  const { error: sweepError } = await admin
    .from('examiner_marking_runs')
    .delete()
    .eq('owner_id', user.id)
    .lt('expires_at', new Date().toISOString())
  if (sweepError) console.error('[examiner/runs] expiry sweep failed', sweepError.message)

  const { data, error } = await admin
    .from('examiner_marking_runs')
    .select(LIST_COLUMNS)
    .eq('owner_id', user.id)
    .order('created_at', { ascending: false })
    .limit(200)
  if (error) {
    console.error('[examiner/runs] list failed', error.message)
    return NextResponse.json({ error: 'Could not load your saved marking.' }, { status: 500 })
  }
  return NextResponse.json({ runs: data ?? [] })
}

export async function POST(request: NextRequest) {
  const user = await requireUser()
  if (!user) return NextResponse.json({ error: 'Sign in first.' }, { status: 401 })

  const rl = await rateLimit(`examiner-runs-write:${user.id}`, { limit: 300, windowSeconds: 3600 })
  if (!rl.success) return rateLimitResponse(rl.resetAt)

  let body: z.infer<typeof saveSchema>
  try {
    body = saveSchema.parse(await request.json())
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
  if (!getExaminerPack(body.packId)) {
    return NextResponse.json({ error: 'Unknown paper' }, { status: 404 })
  }

  const admin = createServiceRoleClient()
  const { data, error } = await admin
    .from('examiner_marking_runs')
    .insert({
      owner_id: user.id,
      pack_id: body.packId,
      question_id: body.questionId,
      batch_id: body.batchId ?? null,
      candidate_label: body.candidateLabel || null,
      page_count: body.pageCount,
      transcript: body.transcript ?? null,
      transcript_notes: body.transcriptNotes ?? null,
      commentary: body.commentary ?? null,
      mark: body.mark ?? null,
      max_mark: body.maxMark ?? null,
      mark_note: body.markNote ?? null,
      doubtful_readings: body.doubtfulReadings,
      unreadable_stretches: body.unreadableStretches,
      model_transcribe: body.modelTranscribe ?? null,
      model_mark: body.modelMark ?? null,
    })
    .select(LIST_COLUMNS)
    .single()
  if (error || !data) {
    console.error('[examiner/runs] save failed', error?.message)
    return NextResponse.json({ error: 'Could not save this result.' }, { status: 500 })
  }
  return NextResponse.json({ run: data })
}
