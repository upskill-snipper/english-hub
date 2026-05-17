// ─── Platform-admin — Batch AI-draft ────────────────────────────────────────
// POST /api/admin/marker-batches/[batchId]/draft
//
// Site-admin only (verifyAdmin — RLS deny-by-default; service-role only).
// AI-drafts up to N (default 25, cap 50) `'submitted'` rows in the batch by
// running the EXACT marking-engine sequence used by /api/marking/run:
//
//   getMarkScheme → buildMarkingPrompt → getAnthropicClient/ANTHROPIC_MODEL
//   → anthropic.messages.create → generateFeedback → captureVersions
//   → applyAiResult (status 'teacher_review_required')
//
// IDEMPOTENT: only ever touches rows whose status === 'submitted'. A drafted
// row moves to 'teacher_review_required' so a re-run skips it. NEVER writes
// 'approved' (marker approval is a later, human act). EU AI Act Art. 12/19
// traceability: best-effort logAiDecision({ feature: 'marking/run', … }) on
// both the success and handled-error branches (mirrors the run route).
//
// EMPTY-TABLE SAFE: a missing table / no eligible rows → { drafted: 0, … },
// never a 500.
// ────────────────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server'
import type Anthropic from '@anthropic-ai/sdk'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { verifyAdmin } from '@/lib/admin-auth'
import { getAnthropicClient, ANTHROPIC_MODEL } from '@/lib/anthropic-client'
import { getMarkScheme } from '@/lib/marking/mark-schemes'
import { buildMarkingPrompt } from '@/lib/marking/prompt-builder'
import { generateFeedback } from '@/lib/marking/feedback-generator'
import { captureVersions } from '@/lib/marking/versioning-capture'
import { applyAiResult, deriveUncertaintyFlags } from '@/lib/marking/persistence'
import { logAiDecision } from '@/lib/ai-audit-log'

export const dynamic = 'force-dynamic'
export const maxDuration = 300

const SUBMISSIONS_TABLE = 'marking_submissions'
const BATCHES_TABLE = 'marker_batches'
const DEFAULT_LIMIT = 25
const MAX_LIMIT = 50

interface DraftRow {
  id: string
  source: string
  essay_text: string
  question_text: string | null
  studied_text: string | null
  mark_scheme_id: string | null
  rubric_ref: string | null
  qualification: string | null
  status: string
}

interface DraftError {
  submissionId: string
  reason: string
}

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ batchId: string }> },
) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`admin-batch-draft:${ip}`, { limit: 10, windowSeconds: 60 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
        },
      )
    }

    const { user, error: authError } = await verifyAdmin()
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

    // Optional body: { count }. Tolerate an empty / non-JSON body.
    let requested = DEFAULT_LIMIT
    try {
      const ct = (request.headers.get('content-type') ?? '').toLowerCase()
      if (ct.includes('application/json')) {
        const body = (await request.json()) as { count?: unknown }
        if (body && body.count !== undefined && body.count !== null) {
          const n = Number(body.count)
          if (Number.isFinite(n) && n > 0) requested = Math.floor(n)
        }
      }
    } catch {
      // No / invalid body — fall back to the default limit.
    }
    const limit = Math.min(MAX_LIMIT, Math.max(1, requested))

    const supabase = createServiceRoleClient()

    // Confirm the batch exists.
    const { data: batch, error: batchErr } = await supabase
      .from(BATCHES_TABLE)
      .select('id')
      .eq('id', batchId)
      .single()
    if (batchErr) {
      if ((batchErr as { code?: string }).code === 'PGRST116') {
        return NextResponse.json({ error: 'Batch not found.' }, { status: 404 })
      }
      console.error('[api/admin/.../draft] batch lookup failed', batchErr)
      return NextResponse.json(
        { drafted: 0, remaining: 0, errors: [], note: 'Batch store unavailable' },
        { status: 502 },
      )
    }
    if (!batch) {
      return NextResponse.json({ error: 'Batch not found.' }, { status: 404 })
    }

    // Pull up to `limit` 'submitted' rows for this batch (idempotency: a
    // drafted row is no longer 'submitted', so a re-run never re-touches it).
    const { data: rowsRaw, error: rowsErr } = await supabase
      .from(SUBMISSIONS_TABLE)
      .select(
        'id, source, essay_text, question_text, studied_text, mark_scheme_id, rubric_ref, qualification, status',
      )
      .eq('batch_id', batchId)
      .eq('status', 'submitted')
      .order('submitted_at', { ascending: true })
      .limit(limit)

    if (rowsErr) {
      console.error('[api/admin/.../draft] rows query failed', rowsErr)
      return NextResponse.json(
        { drafted: 0, remaining: 0, errors: [], note: 'Submission store unavailable' },
        { status: 502 },
      )
    }

    const rows = (rowsRaw ?? []) as unknown as DraftRow[]

    // Count remaining 'submitted' rows so the caller can decide to loop.
    const remainingCount = async (): Promise<number> => {
      const { count, error } = await supabase
        .from(SUBMISSIONS_TABLE)
        .select('id', { count: 'exact', head: true })
        .eq('batch_id', batchId)
        .eq('status', 'submitted')
      if (error || count == null) return 0
      return count
    }

    if (rows.length === 0) {
      return NextResponse.json(
        { drafted: 0, remaining: await remainingCount(), errors: [] },
        { status: 200 },
      )
    }

    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) {
      console.error('[api/admin/.../draft] ANTHROPIC_API_KEY not configured')
      return NextResponse.json(
        { error: 'AI marking is temporarily unavailable. Please try again later.' },
        { status: 503 },
      )
    }
    const anthropic = getAnthropicClient(apiKey)

    let drafted = 0
    const errors: DraftError[] = []

    // Sequential — one model call per row. Keeps within Anthropic rate limits
    // and lets a single bad row fail without aborting the batch.
    for (const row of rows) {
      // Defensive idempotency re-check (a concurrent draft may have moved it).
      if (row.status !== 'submitted') {
        continue
      }
      if (!row.mark_scheme_id) {
        errors.push({ submissionId: row.id, reason: 'No mark scheme associated.' })
        continue
      }
      const scheme = getMarkScheme(row.mark_scheme_id)
      if (!scheme) {
        errors.push({
          submissionId: row.id,
          reason: `Unknown mark scheme "${row.mark_scheme_id}".`,
        })
        continue
      }
      const questionId = row.rubric_ref ?? ''

      let prompt
      try {
        prompt = buildMarkingPrompt({
          scheme,
          questionId,
          questionText: row.question_text ?? '',
          essay: row.essay_text,
          studiedText: row.studied_text ?? undefined,
        })
      } catch (err) {
        errors.push({
          submissionId: row.id,
          reason: err instanceof Error ? err.message : 'Invalid question.',
        })
        continue
      }

      const auditBase = {
        feature: 'marking/run' as const,
        userId: user?.id ?? null,
        locale: 'en',
        inputText: row.essay_text,
        markSchemeId: row.mark_scheme_id,
        questionId,
        promptSchemeId: row.mark_scheme_id,
        consentSnapshot: {
          // Corpus rows: commissioned/specimen have no data subject;
          // platform (b2b_class) work is ingested under the school path.
          aiOptOut: false,
          aiProcessingConsentOk: true,
        },
        ipAddress: request.headers.get('x-forwarded-for'),
      }

      const startedAt = new Date()
      let message
      try {
        message = await anthropic.messages.create(
          {
            model: ANTHROPIC_MODEL,
            max_tokens: 4_096,
            system: prompt.systemPrompt,
            messages: [{ role: 'user', content: prompt.userMessage }],
          },
          { timeout: 50_000 },
        )
      } catch (aiError: unknown) {
        const e = aiError as { status?: number; message?: string; error?: { type?: string } }
        void logAiDecision({
          ...auditBase,
          requestStartedAt: startedAt,
          responseFinishedAt: new Date(),
          success: false,
          errorClass: e.error?.type ?? (e.status ? `http_${e.status}` : 'anthropic_error'),
          errorMessage: typeof e.message === 'string' ? e.message.slice(0, 300) : null,
        })
        errors.push({
          submissionId: row.id,
          reason:
            e.status === 429
              ? 'AI service overloaded (rate limited).'
              : e.message?.includes('timeout')
                ? 'AI service timed out.'
                : 'AI service error.',
        })
        // A rate-limit/timeout will likely hit the next row too — stop early
        // and report what we have so the caller can retry the remainder.
        if (e.status === 429 || e.error?.type === 'timeout_error') {
          break
        }
        continue
      }
      const finishedAt = new Date()

      const responseText = message.content
        .filter((b): b is Anthropic.TextBlock => b.type === 'text')
        .map((b) => b.text)
        .join('')

      const feedback = generateFeedback({
        scheme,
        questionId,
        rawResponseText: responseText,
      })

      if (!feedback.ok) {
        void logAiDecision({
          ...auditBase,
          requestStartedAt: startedAt,
          responseFinishedAt: finishedAt,
          tokenUsage: {
            inputTokens: message.usage?.input_tokens,
            outputTokens: message.usage?.output_tokens,
          },
          success: false,
          outputSummary: { rejected: feedback.error.type },
          errorClass: feedback.error.type,
          errorMessage: 'reason' in feedback.error ? String(feedback.error.reason) : null,
        })
        errors.push({
          submissionId: row.id,
          reason: `Model response rejected (${feedback.error.type}).`,
        })
        continue
      }

      const result = feedback.result

      // Best-effort provenance capture (never throws — returns nulls).
      const versions = await captureVersions(supabase, {
        promptText: `${prompt.systemPrompt}\n\n${prompt.userMessage}`,
        markSchemeId: row.mark_scheme_id,
        schemeVersion: scheme.version ?? 'v1.0',
        examBoard: scheme.board,
        qualification: row.qualification,
      })

      try {
        await applyAiResult(supabase, row.id, {
          result,
          uncertaintyFlags: deriveUncertaintyFlags(result),
          modelVersionId: versions.modelVersionId,
          promptVersionId: versions.promptVersionId,
          rubricVersionId: versions.rubricVersionId,
          // Corpus drafts always go to a (paid) marker for review.
          // NEVER 'approved' from here.
          status: 'teacher_review_required',
        })
      } catch (dbErr) {
        console.error('[api/admin/.../draft] persist failed', row.id, dbErr)
        errors.push({ submissionId: row.id, reason: 'Failed to save the AI draft.' })
        continue
      }

      drafted += 1

      void logAiDecision({
        ...auditBase,
        requestStartedAt: startedAt,
        responseFinishedAt: finishedAt,
        tokenUsage: {
          inputTokens: message.usage?.input_tokens,
          outputTokens: message.usage?.output_tokens,
        },
        success: true,
        outputSummary: {
          predictedGrade: result.predictedGrade,
          gradeBand: result.gradeBand,
          totalMarks: result.totalMarks,
          maxMarks: result.maxMarks,
          status: 'teacher_review_required',
          aoScores: result.aoScores.map((ao) => ({
            id: ao.id,
            marks: ao.marks,
            maxMarks: ao.maxMarks,
          })),
        },
      })
    }

    return NextResponse.json(
      { drafted, remaining: await remainingCount(), errors },
      { status: 200 },
    )
  } catch (error) {
    console.error('[api/admin/marker-batches/[batchId]/draft POST] Unexpected error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
