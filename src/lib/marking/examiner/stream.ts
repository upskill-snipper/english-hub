// ─── Examiner Marking Tool - server streaming helpers ───────────────────────
//
// The examiner routes stream text back to the browser as server-sent events so
// a teacher watches the transcript or commentary arrive instead of staring at
// a spinner for thirty seconds. Every stream ends with exactly one terminal
// frame, `done` or `error`, and the HTTP status is 200 either way once the
// stream has started, so the client reads the terminal frame rather than the
// status. Gate failures happen before any stream starts and use normal JSON.
//
// Frames: {"type":"delta","text":"..."} | {"type":"done", ...payload} |
//         {"type":"error","message":"..."}
// ────────────────────────────────────────────────────────────────────────────

import type Anthropic from '@anthropic-ai/sdk'

export type SseEmit = (frame: Record<string, unknown>) => void

export function sseResponse(run: (emit: SseEmit) => Promise<void>): Response {
  const encoder = new TextEncoder()
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      let closed = false
      const emit: SseEmit = (frame) => {
        if (closed) return
        controller.enqueue(encoder.encode(`data: ${JSON.stringify(frame)}\n\n`))
      }
      try {
        await run(emit)
      } catch (err) {
        emit({ type: 'error', message: friendlyError(err) })
      } finally {
        closed = true
        controller.close()
      }
    },
  })
  return new Response(stream, {
    status: 200,
    headers: {
      'Content-Type': 'text/event-stream; charset=utf-8',
      'Cache-Control': 'no-cache, no-transform',
      Connection: 'keep-alive',
      'X-Accel-Buffering': 'no',
    },
  })
}

export interface StreamedText {
  text: string
  stopReason: string | null
  usage: { input: number; output: number; cacheRead: number; cacheWrite: number }
  model: string
}

/**
 * Server-side refusal fallback. The provider's safety classifiers can decline
 * an entirely benign request - the live smoke test on 18 September 2026 saw a
 * transcription checking pass come back `stop_reason: 'refusal'` on a page of
 * exam prose. With this beta the provider re-runs a declined request on a
 * fallback model inside the same call. The installed SDK (0.100.1) does not
 * type the parameter, so it is added by cast and dropped on a 400 that names
 * it, which is how the standalone tool behaved. Never fabricate a claim about
 * this: a final `stop_reason: 'refusal'` means the whole chain declined.
 */
const FALLBACK_BETA = 'server-side-fallback-2026-07-01'

async function runStream(
  client: Anthropic,
  params: Anthropic.MessageStreamParams,
  onDelta: (text: string) => void,
  withFallbacks: boolean,
): Promise<Anthropic.Message> {
  const body = withFallbacks
    ? ({ ...params, fallbacks: 'default' } as unknown as Anthropic.MessageStreamParams)
    : params
  const stream = client.messages.stream(
    body,
    withFallbacks ? { headers: { 'anthropic-beta': FALLBACK_BETA } } : undefined,
  )
  stream.on('text', (delta) => onDelta(delta))
  return stream.finalMessage()
}

/**
 * Run a streaming Messages call, forwarding text deltas, and return the whole
 * text plus usage. Thinking deltas are never forwarded: on the current models
 * they are empty by default and are not something a teacher should read.
 */
export async function streamText(
  client: Anthropic,
  params: Anthropic.MessageStreamParams,
  onDelta: (text: string) => void,
): Promise<StreamedText> {
  let final: Anthropic.Message
  try {
    final = await runStream(client, params, onDelta, true)
  } catch (err) {
    const e = err as { status?: number; message?: string }
    // The beta is not available on this account or model: run without it.
    if (e?.status === 400 && /fallback|beta/i.test(e.message ?? '')) {
      final = await runStream(client, params, onDelta, false)
    } else {
      throw err
    }
  }
  const text = final.content.map((b) => (b.type === 'text' ? b.text : '')).join('')
  const u = final.usage
  return {
    text,
    stopReason: final.stop_reason ?? null,
    usage: {
      input: u.input_tokens ?? 0,
      output: u.output_tokens ?? 0,
      cacheRead: u.cache_read_input_tokens ?? 0,
      cacheWrite: u.cache_creation_input_tokens ?? 0,
    },
    model: final.model,
  }
}

/**
 * A learner-safe description of a provider failure. The class and status are
 * for the audit log; this is for the person watching the screen.
 */
export function friendlyError(err: unknown): string {
  const e = err as { status?: number; name?: string; message?: string }
  if (e?.name === 'AnthropicNotConfiguredError')
    return 'AI marking is not configured on this server.'
  if (e?.status === 401) return 'The AI provider rejected our credentials. We have been alerted.'
  if (e?.status === 429) return 'The AI provider is busy. Wait a moment and try again.'
  if (e?.status === 400 || e?.status === 404) {
    return 'The AI provider rejected the request. If this keeps happening the model may need updating.'
  }
  if (typeof e?.status === 'number' && e.status >= 500) {
    return 'The AI provider is temporarily unavailable. Try again shortly.'
  }
  if (e?.name === 'APIConnectionTimeoutError' || /timeout/i.test(e?.message ?? '')) {
    return 'The request took too long. Try fewer pages at once.'
  }
  return 'Something went wrong while marking. Try again.'
}
