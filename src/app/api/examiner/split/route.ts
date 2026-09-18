import { NextResponse, type NextRequest } from 'next/server'
import { z } from 'zod'
import { getAnthropicClient, AnthropicNotConfiguredError } from '@/lib/anthropic-client'
import { logAiDecision, logAiDecisionError } from '@/lib/ai-audit-log'
import { examinerGate } from '@/lib/marking/examiner/gate'
import {
  EXAMINER_BOUNDS,
  EXAMINER_MAX_TOKENS,
  EXAMINER_MODELS,
} from '@/lib/marking/examiner/models'
import { SPLIT_SYSTEM, splitContent } from '@/lib/marking/examiner/prompts'
import { friendlyError } from '@/lib/marking/examiner/stream'

// ─── POST /api/examiner/split ───────────────────────────────────────────────
// Bulk marking: looks at ONE scanned page and says whether it is the first
// page of a new candidate's script, and whose. The cheapest tier does this
// job because a mistake is visible on screen and one click to fix, and nothing
// is marked until the teacher has confirmed the grouping. Not metered against
// the trial allowance (a class scan is thirty of these) but hourly-limited.
// ────────────────────────────────────────────────────────────────────────────

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 60

const BASE64_PREFIX = /^data:image\/[a-z]+;base64,/i

const bodySchema = z.object({
  page: z
    .string()
    .min(100)
    .max(EXAMINER_BOUNDS.maxPageBytes * 1.4),
})

const resultSchema = z.object({
  starts_new_script: z.boolean(),
  candidate_name: z.string().max(120).default(''),
  candidate_number: z.string().max(60).default(''),
  confidence: z.number().min(0).max(1).default(0),
  evidence: z.string().max(300).default(''),
})

function parseJsonLoose(s: string): unknown {
  const a = s.indexOf('{')
  const b = s.lastIndexOf('}')
  if (a < 0 || b < a) return null
  try {
    return JSON.parse(s.slice(a, b + 1))
  } catch {
    return null
  }
}

export async function POST(request: NextRequest) {
  const gate = await examinerGate(request, {
    slug: 'examiner-split',
    hourlyLimit: 600,
    meterTrial: false,
  })
  if (!gate.ok) return gate.response
  const { user } = gate

  let body: z.infer<typeof bodySchema>
  try {
    body = bodySchema.parse(await request.json())
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
  const page = body.page.replace(BASE64_PREFIX, '')

  let client
  try {
    client = getAnthropicClient()
  } catch (err) {
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
  const model = EXAMINER_MODELS.split
  try {
    const res = await client.messages.create(
      {
        model,
        max_tokens: EXAMINER_MAX_TOKENS.split,
        system: SPLIT_SYSTEM,
        messages: [{ role: 'user', content: splitContent(page) }],
      },
      { timeout: 45_000 },
    )
    const text = res.content.map((b) => (b.type === 'text' ? b.text : '')).join('')
    const parsed = resultSchema.safeParse(parseJsonLoose(text))
    const detect = parsed.success
      ? parsed.data
      : {
          starts_new_script: false,
          candidate_name: '',
          candidate_number: '',
          confidence: 0,
          evidence: 'could not be read',
        }

    await logAiDecision({
      feature: 'examiner/split',
      userId: user.id,
      requestStartedAt,
      responseFinishedAt: new Date(),
      tokenUsage: { inputTokens: res.usage.input_tokens, outputTokens: res.usage.output_tokens },
      success: true,
      // The candidate name read off the page is personal data and is not
      // written to the audit log; only whether one was found.
      outputSummary: {
        startsNewScript: detect.starts_new_script,
        confidence: detect.confidence,
        nameFound: detect.candidate_name.length > 0,
        parsed: parsed.success,
      },
    })

    return NextResponse.json({ detect, model: res.model })
  } catch (err) {
    await logAiDecisionError(
      {
        feature: 'examiner/split',
        userId: user.id,
        requestStartedAt,
        responseFinishedAt: new Date(),
        outputSummary: { model },
      },
      err,
    )
    const e = err as { status?: number; name?: string }
    console.error(
      `[examiner/split] failed: class=${e?.name ?? 'Error'} status=${e?.status ?? 'n/a'} model=${model}`,
    )
    return NextResponse.json({ error: friendlyError(err) }, { status: 503 })
  }
}
