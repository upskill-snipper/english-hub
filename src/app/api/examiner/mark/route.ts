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
import { markingContent, markingSystem } from '@/lib/marking/examiner/prompts'
import { extractMark } from '@/lib/marking/examiner/engine'
import { getExaminerPack } from '@/lib/marking/examiner/registry'
import { sseResponse, streamText, friendlyError } from '@/lib/marking/examiner/stream'

// ─── POST /api/examiner/mark ────────────────────────────────────────────────
// Marks one candidate response against a pack's grids and the teacher's own
// pasted mark scheme, streaming examiner commentary and ending with the mark
// the tool could extract from it. This is the call that spends a unit of the
// per-teacher monthly script ceiling (see src/lib/usage/limits.ts).
//
// Caching: the pack briefing is the system block and the question label plus
// mark scheme is the first user block, both marked ephemeral. In a bulk run of
// a class every candidate after the first reads both from cache; only the
// response itself is paid for in full.
// ────────────────────────────────────────────────────────────────────────────

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 120

const bodySchema = z.object({
  packId: z.string().min(1).max(80),
  questionId: z.string().min(1).max(20),
  schemeText: z.string().max(EXAMINER_BOUNDS.maxSchemeChars).default(''),
  response: z.string().min(1).max(EXAMINER_BOUNDS.maxResponseChars),
  notes: z.string().max(EXAMINER_BOUNDS.maxNotesChars).default(''),
  pageCount: z.number().int().min(0).max(200).default(0),
})

export async function POST(request: NextRequest) {
  const gate = await examinerGate(request, {
    slug: 'examiner-mark',
    hourlyLimit: 60,
    countsAsScript: true,
  })
  if (!gate.ok) return gate.response
  const { user, trialGate } = gate

  let body: z.infer<typeof bodySchema>
  try {
    body = bodySchema.parse(await request.json())
  } catch {
    await refundTrialAllowance(trialGate)
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const pack = getExaminerPack(body.packId)
  const question = pack?.questions.find((q) => q.id === body.questionId) ?? null
  if (!pack || !question) {
    await refundTrialAllowance(trialGate)
    return NextResponse.json({ error: 'Unknown paper or question' }, { status: 404 })
  }

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
  const model = EXAMINER_MODELS.mark

  return sseResponse(async (emit) => {
    try {
      const result = await streamText(
        client,
        {
          model,
          max_tokens: EXAMINER_MAX_TOKENS.mark,
          system: markingSystem(pack),
          messages: [
            {
              role: 'user',
              content: markingContent(
                pack,
                question,
                body.schemeText,
                body.response,
                body.pageCount,
                body.notes,
              ),
            },
          ],
          output_config: { effort: 'high' },
        },
        (delta) => emit({ type: 'delta', text: delta }),
      )

      if (result.stopReason === 'refusal') {
        throw Object.assign(new Error('The model declined this request.'), { name: 'RefusalError' })
      }

      const mark = extractMark(result.text, question)

      emit({
        type: 'done',
        commentary: result.text,
        mark,
        truncated: result.stopReason === 'max_tokens',
        usage: result.usage,
        model: result.model,
      })

      await logAiDecision({
        feature: 'examiner/mark',
        userId: user.id,
        inputText: body.response,
        markSchemeId: pack.id,
        questionId: question.id,
        requestStartedAt,
        responseFinishedAt: new Date(),
        tokenUsage: { inputTokens: result.usage.input, outputTokens: result.usage.output },
        success: true,
        outputSummary: {
          calibration: pack.calibration,
          mark: mark?.mark ?? null,
          max: question.max,
          markNote: mark?.note ?? null,
          extracted: mark !== null,
          fromPhotographs: body.pageCount > 0,
          cacheRead: result.usage.cacheRead,
          cacheWrite: result.usage.cacheWrite,
          truncated: result.stopReason === 'max_tokens',
        },
      })
    } catch (err) {
      await refundTrialAllowance(trialGate)
      await logAiDecisionError(
        {
          feature: 'examiner/mark',
          userId: user.id,
          markSchemeId: pack.id,
          questionId: question.id,
          requestStartedAt,
          responseFinishedAt: new Date(),
          outputSummary: { model },
        },
        err,
      )
      const e = err as { status?: number; name?: string }
      console.error(
        `[examiner/mark] failed: class=${e?.name ?? 'Error'} status=${e?.status ?? 'n/a'} model=${model}`,
      )
      emit({ type: 'error', message: friendlyError(err) })
    }
  })
}
