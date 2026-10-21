// ─── AI liveness check ──────────────────────────────────────────────────────
// GET /api/health/ai      Auth: Bearer CRON_SECRET
//
// WHY THIS EXISTS
// The AI product has now died silently in production twice, both times because
// a pinned Anthropic model reached retirement:
//
//   • ~15 Jun 2026 - `claude-sonnet-4-20250514` retired. Found by hand on
//     18 Aug, about ten weeks later.
//   • ~Sep 2026    - `claude-sonnet-4-6` began returning HTTP 400. Found by
//     hand on 17 Sep.
//
// Neither outage announced itself, and that is by design at the learner-facing
// layer: every AI route deliberately catches provider errors and returns a calm
// "temporarily unavailable" 503, because a fifteen-year-old mid-essay should not
// be shown a provider stack trace. The cost of that kindness is that the whole
// product can be dead while every dashboard stays green - `/api/health` only
// reports that the process is running, which it always is.
//
// This endpoint closes that gap. It makes ONE real, minimal Anthropic call PER
// CONFIGURED MODEL and reports the truth for each: which model, whether it
// answered, and if not, the provider's error class and status.
//
// 2026-09-18: two gaps closed. (1) It probed `ANTHROPIC_MODEL` only, so a
// retired `MARKING_MARKER_MODEL` would have reported `ok` while core marking
// was dead. It now probes every distinct model id the product is configured
// to call - the shared model, the three marking tiers and the three examiner
// tiers. (2) Nothing called it. It is now in vercel.json as a daily cron
// (06:30 UTC); Vercel sends the CRON_SECRET bearer automatically. A failing
// run is a non-2xx in the Vercel cron log. Until an external monitor is
// pointed at it (see docs/HANDOVER.md), that log is where the alert lives.
//
// It is deliberately NOT public: the calls cost money and the failure detail is
// operational. Same Bearer CRON_SECRET pattern as every other scheduled route.
//
// Cost: a handful of tokens per model per run. Daily is ample.
//
// 2026-10-21: the third outage, and the first that was not a model. The
// Anthropic account ran out of credit on 12 October at 15:10 UTC and every
// call returned HTTP 400 "Your credit balance is too low to access the
// Anthropic API". This check failed at 06:30 every morning for nine days and
// told nobody, and had anyone read it, it would have said the model had
// "probably been retired", because it read every 400 that way. Two changes:
//   - Each failure is classified by src/lib/ai/provider-failure.ts, which
//     recognises an empty account by the provider's own sentence (it came as
//     a 400, not the 402 the API reference lists) and says to top it up.
//   - A failed run emails a person through src/lib/ops/ai-outage-alert.ts, to
//     AI_ALERT_EMAIL (or OPERATOR_DIGEST_EMAIL). The response's `alert` field
//     says whether it was sent, and why not when it was not.
// ────────────────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server'
import {
  getAnthropicClient,
  ANTHROPIC_MODEL,
  AnthropicNotConfiguredError,
} from '@/lib/anthropic-client'
import { MARKING_MODELS } from '@/lib/marking/engine/models'
import { EXAMINER_MODELS } from '@/lib/marking/examiner/models'
import { authoriseCronRequest } from '@/lib/cron/auth'
import {
  classifyAiProviderFailure,
  mostSerious,
  readProviderError,
  type AiProviderFailure,
  type AiProviderFailureKind,
} from '@/lib/ai/provider-failure'
import { sendAiOutageAlert } from '@/lib/ops/ai-outage-alert'

export const dynamic = 'force-dynamic'
export const maxDuration = 60

/** The cheapest call that still proves the model id is callable on this key. */
const PROBE_MAX_TOKENS = 8

interface ProbeResult {
  model: string
  usedBy: string[]
  status: 'ok' | 'failed'
  latencyMs: number
  replied?: string
  reason?: string
  providerStatus?: number | null
  errorClass?: string
  /** What kind of failure, from src/lib/ai/provider-failure.ts. */
  kind?: AiProviderFailureKind
  likelyCause?: string
  /** Kept for the alert; not part of the response. */
  failure?: AiProviderFailure
}

export async function GET(request: NextRequest) {
  const auth = authoriseCronRequest(request, 'health/ai')
  if (!auth.ok) return auth.response

  // The configured ids are reported whether or not the calls succeed, so an
  // alert carries the thing you need in order to fix it.
  const configured = {
    shared: ANTHROPIC_MODEL,
    marker: MARKING_MODELS.marker,
    escalation: MARKING_MODELS.escalation,
    classifier: MARKING_MODELS.classifier,
    examinerTranscribe: EXAMINER_MODELS.transcribe,
    examinerMark: EXAMINER_MODELS.mark,
    examinerSplit: EXAMINER_MODELS.split,
  }

  // Probe each distinct id once, remembering which roles depend on it.
  const byModel = new Map<string, string[]>()
  for (const [role, id] of Object.entries(configured)) {
    if (!byModel.has(id)) byModel.set(id, [])
    byModel.get(id)!.push(role)
  }

  const startedAt = Date.now()
  let client: ReturnType<typeof getAnthropicClient> | null = null
  let notConfigured = false
  try {
    client = getAnthropicClient()
  } catch (err) {
    notConfigured = err instanceof AnthropicNotConfiguredError
  }

  const results: ProbeResult[] = await Promise.all(
    Array.from(byModel.entries()).map(async ([model, usedBy]): Promise<ProbeResult> => {
      const t0 = Date.now()
      if (!client) {
        const failure = classifyAiProviderFailure({
          status: null,
          type: null,
          message: notConfigured
            ? 'ANTHROPIC_API_KEY is not set'
            : 'client could not be constructed',
          name: notConfigured ? 'AnthropicNotConfiguredError' : 'Error',
        })
        return {
          model,
          usedBy,
          status: 'failed',
          latencyMs: 0,
          reason: failure.message ?? 'client could not be constructed',
          providerStatus: null,
          errorClass: failure.name ?? 'Error',
          kind: failure.kind,
          likelyCause: failure.action,
          failure,
        }
      }
      try {
        const res = await client.messages.create(
          {
            model,
            max_tokens: PROBE_MAX_TOKENS,
            messages: [{ role: 'user', content: 'Reply with the single word: ok' }],
          },
          { timeout: 20_000 },
        )
        const text = res.content
          .map((b) => (b.type === 'text' ? b.text : ''))
          .join('')
          .trim()
        return {
          model,
          usedBy,
          status: 'ok',
          latencyMs: Date.now() - t0,
          replied: text.slice(0, 40),
        }
      } catch (err: unknown) {
        // A dead model, a dead key and an empty account look identical to a
        // learner and must not look identical here: report the provider's own
        // class, status and sentence, and what kind of failure that makes it.
        const failure = classifyAiProviderFailure(readProviderError(err), { minimalRequest: true })
        return {
          model,
          usedBy,
          status: 'failed',
          latencyMs: Date.now() - t0,
          reason: failure.message ?? 'unknown error',
          providerStatus: failure.status,
          errorClass: failure.name ?? 'Error',
          kind: failure.kind,
          likelyCause: failure.action,
          failure,
        }
      }
    }),
  )

  const failed = results.filter((r) => r.status === 'failed')
  const checkedAt = new Date()

  let alert: { sent: boolean; reason?: string } | null = null
  if (failed.length) {
    for (const f of failed) {
      console.error(
        `[health/ai] AI liveness FAILED: model=${f.model} roles=${f.usedBy.join(',')} status=${f.providerStatus} class=${f.errorClass} kind=${f.kind}`,
      )
    }
    // One email for the run, named after the most serious failure. An empty
    // account fails every model at once, and seven emails saying so would be
    // read as noise.
    const worst = mostSerious(
      failed.flatMap((f) => (f.failure ? [{ ...f, kind: f.failure.kind }] : [])),
    )
    if (worst?.failure) {
      const outcome = await sendAiOutageAlert({
        source: 'health/ai',
        failure: worst.failure,
        model: worst.model,
        lines: failed.map(
          (f) =>
            `${f.model} (${f.usedBy.join(', ')}): ${f.kind}, status ${f.providerStatus ?? 'none'}, ${(f.reason ?? '').slice(0, 160)}`,
        ),
        at: checkedAt,
      })
      alert = outcome.sent ? { sent: true } : { sent: false, reason: outcome.reason }
    }
  }

  const body = {
    status: failed.length ? ('failed' as const) : ('ok' as const),
    configured,
    // The classified failure is for the alert; the response carries its parts.
    probes: results.map(({ failure: _failure, ...probe }) => probe),
    failedModels: failed.map((f) => f.model),
    latencyMs: Date.now() - startedAt,
    checkedAt: checkedAt.toISOString(),
    alert,
  }

  if (failed.length) {
    // 503 so an uptime monitor or the cron log treats it as down without any
    // extra configuration.
    return NextResponse.json(body, { status: 503 })
  }
  return NextResponse.json(body)
}
