import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import * as Sentry from '@sentry/nextjs'
import { rateLimit } from '@/lib/rate-limit'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'

// ─── POST /api/quiz/response ───────────────────────────────────────────────
//
// Writes a single per-question answer into `public.quiz_responses` (see
// supabase/migrations/20260420_quiz_responses.sql). That table is the
// source of truth for the Cycle 6 ANALYTICS engine's
// `getQuestionDifficulty` / `getHardestQuestions` functions in
// src/lib/analytics/questions.ts — both return empty `[]` today because
// no write path exists to populate the table. This handler closes that
// loop.
//
// RLS
// ---
// The migration enables RLS with an INSERT policy of
//   WITH CHECK (auth.uid() = user_id)
// We use the SERVICE ROLE client here so we can insert reliably from a
// server context even if the user's cookie session is tricky (e.g. the
// client fires this as background `keepalive: true`). Because the service
// role bypasses RLS, we MUST set `user_id = user.id` ourselves on every
// insert — the DB will not enforce the user==self invariant for us on
// this code path. Do NOT accept `user_id` from the request body.
//
// Posture
// -------
// Fire-and-forget from the client's perspective. This is a background
// log, not a user-facing action — if it fails, the student still saw
// the right answer and moved on. We surface errors via Sentry so the
// analytics data loss doesn't go silent, but the HTTP response is
// compact and never gates the UX.
//
// FOLLOW-UP (out of scope for this route file)
// --------------------------------------------
// The quiz consumer at src/app/revision/quiz/quiz-engine.tsx (and
// src/app/revision/quiz/quiz-hub-client.tsx) needs to be wired to call
// this endpoint after every answer, e.g.:
//
//   fetch('/api/quiz/response', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ questionId, moduleId, isCorrect, timeTakenSeconds }),
//     keepalive: true,  // survive page nav / reload
//   }).catch(() => { /* silent — background log */ })
//
// This handler does NOT touch any client page; that wiring is a separate
// PR. Until it lands, the table stays empty and analytics continues to
// return `[]`.
// ──────────────────────────────────────────────────────────────────────────

const QuizResponseSchema = z.object({
  // Bounded free-form key — question banks live in TypeScript data files,
  // not the DB (see migration header). Regex keeps the alphabet sane so
  // the table can't be polluted with log-spam keys that break analytics
  // aggregation or blow up the question_id index.
  questionId: z
    .string()
    .min(1)
    .max(200)
    .regex(/^[A-Za-z0-9_.:-]{1,200}$/, 'questionId contains invalid characters'),
  moduleId: z.string().min(1).max(200).optional(),
  isCorrect: z.boolean(),
  // Integer, bounded to 1 hour. Negative or absurd values would let a
  // malicious client inflate difficulty metrics (e.g. a "question X took
  // 9,999,999s on average") or hide slow responses as zero.
  timeTakenSeconds: z.number().int().min(0).max(3600),
})

export async function POST(request: NextRequest) {
  // ── 1. Authenticate ──────────────────────────────────────────────────────
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()
  if (authError || !user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // ── 2. Per-user rate limit ───────────────────────────────────────────────
  // Quiz responses are high-frequency (one per answered question). 60/min
  // comfortably covers the fastest realistic human pace while still
  // capping any runaway client that's retrying in a loop.
  const rl = await rateLimit(`quiz-response:${user.id}`, {
    limit: 60,
    windowSeconds: 60,
  })
  if (!rl.success) {
    return NextResponse.json(
      { error: 'Too many quiz responses. Please slow down.' },
      {
        status: 429,
        headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
      },
    )
  }

  // ── 3. Parse + validate body ─────────────────────────────────────────────
  let raw: unknown
  try {
    raw = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const parsed = QuizResponseSchema.safeParse(raw)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Invalid quiz response payload.', details: parsed.error.flatten() },
      { status: 400 },
    )
  }
  const { questionId, moduleId, isCorrect, timeTakenSeconds } = parsed.data

  // ── 4. Insert via service-role client ────────────────────────────────────
  // Service role bypasses RLS, so we MUST set user_id from the session.
  // attempted_at is set server-side so clients can't backdate/forward-date
  // rows to manipulate per-day analytics buckets.
  const admin = createServiceRoleClient()
  const { data, error: insertErr } = await admin
    .from('quiz_responses')
    .insert({
      user_id: user.id,
      question_id: questionId,
      module_id: moduleId ?? null,
      is_correct: isCorrect,
      time_taken_seconds: timeTakenSeconds,
      attempted_at: new Date().toISOString(),
    })
    .select('id')
    .single()

  if (insertErr) {
    // 23503 = foreign_key_violation. The only FK on this table (outside
    // auth.users) is module_id -> public.modules(id). If the client sent
    // an unknown moduleId we want a 400 with a friendly message rather
    // than a 500, so the caller knows to drop/correct the field.
    if ((insertErr as { code?: string }).code === '23503') {
      return NextResponse.json(
        { error: 'Unknown moduleId — the referenced module does not exist.' },
        { status: 400 },
      )
    }

    console.error('[api/quiz/response] insert failed:', insertErr)
    Sentry.captureException(insertErr, {
      tags: { route: 'api/quiz/response' },
      extra: { userId: user.id, questionId, moduleId: moduleId ?? null },
    })
    return NextResponse.json({ error: 'Could not record quiz response.' }, { status: 500 })
  }

  return NextResponse.json({ success: true, id: data?.id }, { status: 201 })
}
