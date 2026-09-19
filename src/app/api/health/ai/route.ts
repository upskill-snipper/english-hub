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
  likelyCause?: string
}

function likelyCause(status: number | undefined, notConfigured: boolean): string {
  if (status === 400 || status === 404) {
    return 'Model id rejected by the provider - it has probably been retired. Set the matching *_MODEL variable in Vercel to a current model id.'
  }
  if (status === 401) return 'API key rejected. Set a live ANTHROPIC_API_KEY in Vercel.'
  if (status === 429) return 'Rate limited or over quota at the provider.'
  if (notConfigured) return 'ANTHROPIC_API_KEY is missing from this environment.'
  return 'Unclassified provider failure.'
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
        return {
          model,
          usedBy,
          status: 'failed',
          latencyMs: 0,
          reason: notConfigured
            ? 'ANTHROPIC_API_KEY is not set'
            : 'client could not be constructed',
          providerStatus: null,
          errorClass: notConfigured ? 'AnthropicNotConfiguredError' : 'Error',
          likelyCause: likelyCause(undefined, notConfigured),
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
        // A dead model and a dead key look identical to a learner and must not
        // look identical here: report the provider's own class and status.
        const e = err as { status?: number; name?: string; message?: string }
        return {
          model,
          usedBy,
          status: 'failed',
          latencyMs: Date.now() - t0,
          reason: e.message ?? 'unknown error',
          providerStatus: e.status ?? null,
          errorClass: e.name ?? 'Error',
          likelyCause: likelyCause(e.status, false),
        }
      }
    }),
  )

  const failed = results.filter((r) => r.status === 'failed')
  const body = {
    status: failed.length ? ('failed' as const) : ('ok' as const),
    configured,
    probes: results,
    failedModels: failed.map((f) => f.model),
    latencyMs: Date.now() - startedAt,
    checkedAt: new Date().toISOString(),
  }

  if (failed.length) {
    for (const f of failed) {
      console.error(
        `[health/ai] AI liveness FAILED: model=${f.model} roles=${f.usedBy.join(',')} status=${f.providerStatus} class=${f.errorClass}`,
      )
    }
    // 503 so an uptime monitor or the cron log treats it as down without any
    // extra configuration.
    return NextResponse.json(body, { status: 503 })
  }
  return NextResponse.json(body)
}
