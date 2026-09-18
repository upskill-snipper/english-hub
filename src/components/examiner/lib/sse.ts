// ─── Examiner tool - talking to the examiner API from the browser ───────────

export class ApiError extends Error {
  status: number
  code: string | null
  body: Record<string, unknown>
  constructor(status: number, body: Record<string, unknown>) {
    super(typeof body.error === 'string' ? body.error : `Request failed (${status})`)
    this.name = 'ApiError'
    this.status = status
    this.code = typeof body.code === 'string' ? body.code : null
    this.body = body
  }
}

async function parseBody(res: Response): Promise<Record<string, unknown>> {
  try {
    return (await res.json()) as Record<string, unknown>
  } catch {
    return {}
  }
}

/** POST JSON. Throws ApiError with the parsed body on a non-2xx response. */
export async function postJson(
  url: string,
  body: unknown,
  signal?: AbortSignal,
): Promise<Response> {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    signal,
  })
  if (!res.ok) throw new ApiError(res.status, await parseBody(res))
  return res
}

export async function getJson<T>(url: string, signal?: AbortSignal): Promise<T> {
  const res = await fetch(url, { signal })
  if (!res.ok) throw new ApiError(res.status, await parseBody(res))
  return (await res.json()) as T
}

export async function deleteJson(url: string): Promise<void> {
  const res = await fetch(url, { method: 'DELETE' })
  if (!res.ok) throw new ApiError(res.status, await parseBody(res))
}

export async function patchJson<T>(url: string, body: unknown): Promise<T> {
  const res = await fetch(url, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!res.ok) throw new ApiError(res.status, await parseBody(res))
  return (await res.json()) as T
}

/**
 * Read a server-sent event stream from an examiner route. Resolves with the
 * terminal `done` frame; throws with the `error` frame's message. The response
 * status is 200 once streaming has begun, so the frames are the truth.
 */
export async function readSse<T extends Record<string, unknown>>(
  res: Response,
  onDelta: (accumulated: string, delta: string) => void,
): Promise<T> {
  if (!res.body) throw new Error('No response body')
  const reader = res.body.getReader()
  const decoder = new TextDecoder()
  let buffer = ''
  let accumulated = ''
  let done: T | null = null
  for (;;) {
    const { value, done: finished } = await reader.read()
    if (finished) break
    buffer += decoder.decode(value, { stream: true })
    const frames = buffer.split('\n\n')
    buffer = frames.pop() ?? ''
    for (const frame of frames) {
      const line = frame.split('\n').find((l) => l.startsWith('data:'))
      if (!line) continue
      let ev: Record<string, unknown>
      try {
        ev = JSON.parse(line.slice(5).trim()) as Record<string, unknown>
      } catch {
        continue
      }
      if (ev.type === 'delta' && typeof ev.text === 'string') {
        accumulated += ev.text
        onDelta(accumulated, ev.text)
      } else if (ev.type === 'done') {
        done = ev as T
      } else if (ev.type === 'error') {
        throw new Error(typeof ev.message === 'string' ? ev.message : 'The request failed.')
      }
    }
  }
  if (!done) throw new Error('The connection closed before the result arrived. Try again.')
  return done
}
