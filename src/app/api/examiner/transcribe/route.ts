import { NextResponse, type NextRequest } from 'next/server'
import { z } from 'zod'
import { getAnthropicClient, AnthropicNotConfiguredError } from '@/lib/anthropic-client'
import { logAiDecision, logAiDecisionError } from '@/lib/ai-audit-log'
import { refundTrialAllowance } from '@/lib/usage/trial-allowance'
import { examinerGate } from '@/lib/marking/examiner/gate'
import {
  EXAMINER_BOUNDS,
  EXAMINER_MAX_TOKENS,
  EXAMINER_MODELS,
} from '@/lib/marking/examiner/models'
import {
  TRANSCRIBE_SYSTEM,
  transcribePassOneContent,
  transcribePassTwoContent,
} from '@/lib/marking/examiner/prompts'
import { splitTranscript, transcriptStats } from '@/lib/marking/examiner/engine'
import { sseResponse, streamText, friendlyError } from '@/lib/marking/examiner/stream'

// ─── POST /api/examiner/transcribe ──────────────────────────────────────────
// Reads photographed pages of a handwritten script into a faithful transcript
// with every doubtful reading flagged. Called twice per script by the client:
// pass 1 transcribes, pass 2 re-reads every page against the first transcript
// and corrects it. Both passes send byte-identical system and image blocks so
// the second is largely served from the prompt cache.
//
// The photographs are children's work. They pass through this function to the
// provider and are never written to disk, storage or the database. The audit
// row records the model, token usage, latency and a hash of the transcript -
// never the images and never the text (unless AI_AUDIT_STORE_RAW_INPUT is on).
// ────────────────────────────────────────────────────────────────────────────

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 120

const BASE64_PREFIX = /^data:image\/[a-z]+;base64,/i

const bodySchema = z.object({
  packId: z.string().min(1).max(80).optional(),
  pass: z.union([z.literal(1), z.literal(2)]),
  pages: z
    .array(
      z
        .string()
        .min(100)
        .max(EXAMINER_BOUNDS.maxPageBytes * 1.4),
    )
    .min(1)
    .max(EXAMINER_BOUNDS.maxPagesPerCall),
  prior: z
    .object({
      text: z.string().max(EXAMINER_BOUNDS.maxResponseChars),
      notes: z.string().max(EXAMINER_BOUNDS.maxNotesChars),
    })
    .optional(),
})

export async function POST(request: NextRequest) {
  const declared = Number(request.headers.get('content-length') ?? 0)
  if (declared > EXAMINER_BOUNDS.maxBodyBytes) {
    return NextResponse.json(
      { error: 'Too many pages in one go. Send up to twelve pages, or smaller photographs.' },
      { status: 413 },
    )
  }

  const gate = await examinerGate(request, { slug: 'examiner-transcribe', hourlyLimit: 120 })
  if (!gate.ok) return gate.response
  const { user, trialGate } = gate

  let body: z.infer<typeof bodySchema>
  try {
    body = bodySchema.parse(await request.json())
  } catch {
    await refundTrialAllowance(trialGate)
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
  if (body.pass === 2 && !body.prior) {
    await refundTrialAllowance(trialGate)
    return NextResponse.json(
      { error: 'A checking pass needs the first-pass transcript.' },
      { status: 400 },
    )
  }

  const pages = body.pages.map((p) => p.replace(BASE64_PREFIX, ''))

  let client
  try {
    client = getAnthropicClient()
  } catch (err) {
    await refundTrialAllowance(trialGate)
    const notConfigured = err instanceof AnthropicNotConfiguredError
    return NextResponse.json(
      {
        error: notConfigured
          ? 'AI marking is not configured.'
          : 'AI marking is temporarily unavailable.',
      },
      { status: 503 },
    )
  }

  const requestStartedAt = new Date()
  const model = EXAMINER_MODELS.transcribe

  return sseResponse(async (emit) => {
    try {
      const result = await streamText(
        client,
        {
          model,
          max_tokens: EXAMINER_MAX_TOKENS.transcribe,
          system: [{ type: 'text', text: TRANSCRIBE_SYSTEM, cache_control: { type: 'ephemeral' } }],
          messages: [
            {
              role: 'user',
              content:
                body.pass === 1
                  ? transcribePassOneContent(pages)
                  : transcribePassTwoContent(pages, body.prior!),
            },
          ],
          output_config: { effort: 'high' },
        },
        (delta) => emit({ type: 'delta', text: delta }),
      )

      // A refusal on the FIRST pass is a real failure: there is no transcript.
      // A refusal on the CHECKING pass is not: the first pass stands, and the
      // teacher is told the check did not run. The live smoke test saw exactly
      // this on benign exam prose, so it is handled rather than surfaced as an
      // error that would throw away a good transcript.
      const refused = result.stopReason === 'refusal'
      if (refused && body.pass === 1) {
        throw Object.assign(new Error('The model declined this request.'), { name: 'RefusalError' })
      }

      let { text, notes } = splitTranscript(result.text)
      let verified = body.pass === 2
      // A checking pass that comes back empty or refused must not erase a good
      // first pass.
      if (body.pass === 2 && body.prior && (refused || text.length <= 20)) {
        text = body.prior.text
        notes = body.prior.notes
        verified = false
      }
      const stats = transcriptStats(text)

      emit({
        type: 'done',
        text,
        notes,
        truncated: result.stopReason === 'max_tokens',
        verified,
        stats,
        usage: result.usage,
        model: result.model,
      })

      await logAiDecision({
        feature: 'examiner/transcribe',
        userId: user.id,
        inputText: text,
        markSchemeId: body.packId ?? null,
        requestStartedAt,
        responseFinishedAt: new Date(),
        tokenUsage: { inputTokens: result.usage.input, outputTokens: result.usage.output },
        success: true,
        outputSummary: {
          pass: body.pass,
          pages: pages.length,
          words: stats.words,
          doubtful: stats.doubtful,
          illegible: stats.illegible,
          cacheRead: result.usage.cacheRead,
          cacheWrite: result.usage.cacheWrite,
          truncated: result.stopReason === 'max_tokens',
          refusedCheckingPass: refused,
          servedBy: result.model,
        },
      })
    } catch (err) {
      await refundTrialAllowance(trialGate)
      await logAiDecisionError(
        {
          feature: 'examiner/transcribe',
          userId: user.id,
          markSchemeId: body.packId ?? null,
          requestStartedAt,
          responseFinishedAt: new Date(),
          outputSummary: { pass: body.pass, pages: pages.length, model },
        },
        err,
      )
      const e = err as { status?: number; name?: string }
      console.error(
        `[examiner/transcribe] failed: class=${e?.name ?? 'Error'} status=${e?.status ?? 'n/a'} model=${model}`,
      )
      emit({ type: 'error', message: friendlyError(err) })
    }
  })
}
