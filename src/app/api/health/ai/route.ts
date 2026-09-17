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
// This endpoint closes that gap. It makes ONE real, minimal Anthropic call and
// reports the truth: which model was used, whether it answered, and if not, the
// provider's error class and status. Point a scheduled check at it and a
// retirement becomes a next-morning alert instead of a ten-week outage.
//
// It is deliberately NOT public: the call costs money and the failure detail is
// operational. Same Bearer CRON_SECRET pattern as every other scheduled route.
//
// Cost: a handful of tokens per run. Daily is ample; hourly would still be
// negligible against a single marking request.
// ────────────────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server'
import { timingSafeEqual } from 'crypto'
import {
  getAnthropicClient,
  ANTHROPIC_MODEL,
  AnthropicNotConfiguredError,
} from '@/lib/anthropic-client'
import { MARKING_MODELS } from '@/lib/marking/engine/models'

export const dynamic = 'force-dynamic'

/** The cheapest call that still proves the model id is callable on this key. */
const PROBE_MAX_TOKENS = 8

export async function GET(request: NextRequest) {
  const cronSecret = process.env.CRON_SECRET
  if (!cronSecret) {
    console.error('[health/ai] CRON_SECRET environment variable is not set')
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
  }

  const incoming = Buffer.from(request.headers.get('authorization') ?? '')
  const expected = Buffer.from(`Bearer ${cronSecret}`)
  if (incoming.length !== expected.length || !timingSafeEqual(incoming, expected)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // The configured ids are reported whether or not the call succeeds, so an
  // alert carries the thing you need in order to fix it.
  const configured = {
    shared: ANTHROPIC_MODEL,
    marker: MARKING_MODELS.marker,
    escalation: MARKING_MODELS.escalation,
    classifier: MARKING_MODELS.classifier,
  }

  const startedAt = Date.now()
  try {
    const client = getAnthropicClient()
    const res = await client.messages.create(
      {
        model: ANTHROPIC_MODEL,
        max_tokens: PROBE_MAX_TOKENS,
        messages: [{ role: 'user', content: 'Reply with the single word: ok' }],
      },
      { timeout: 20_000 },
    )
    const text = res.content
      .map((b) => (b.type === 'text' ? b.text : ''))
      .join('')
      .trim()

    return NextResponse.json({
      status: 'ok',
      model: ANTHROPIC_MODEL,
      configured,
      latencyMs: Date.now() - startedAt,
      replied: text.slice(0, 40),
      checkedAt: new Date().toISOString(),
    })
  } catch (err: unknown) {
    // A dead model and a dead key look identical to a learner and must not look
    // identical here: report the provider's own class and status.
    const e = err as { status?: number; name?: string; message?: string }
    const notConfigured = err instanceof AnthropicNotConfiguredError
    const detail = {
      status: 'failed' as const,
      reason: notConfigured ? 'ANTHROPIC_API_KEY is not set' : (e.message ?? 'unknown error'),
      providerStatus: e.status ?? null,
      errorClass: e.name ?? 'Error',
      model: ANTHROPIC_MODEL,
      configured,
      latencyMs: Date.now() - startedAt,
      checkedAt: new Date().toISOString(),
      // The two failures seen in production, so an alert is self-explaining.
      likelyCause:
        e.status === 400 || e.status === 404
          ? 'Model id rejected by the provider - it has probably been retired. Set ANTHROPIC_MODEL (and the MARKING_* vars) in Vercel to a current model id.'
          : e.status === 401
            ? 'API key rejected. Set a live ANTHROPIC_API_KEY in Vercel.'
            : e.status === 429
              ? 'Rate limited or over quota at the provider.'
              : notConfigured
                ? 'ANTHROPIC_API_KEY is missing from this environment.'
                : 'Unclassified provider failure.',
    }
    console.error(
      `[health/ai] AI liveness FAILED: status=${detail.providerStatus} class=${detail.errorClass} model=${ANTHROPIC_MODEL}`,
    )
    // 503 so an uptime monitor treats it as down without any extra configuration.
    return NextResponse.json(detail, { status: 503 })
  }
}
