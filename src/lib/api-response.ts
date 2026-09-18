import { NextRequest, NextResponse } from 'next/server'

/**
 * Standardized API response helpers for consistent error handling.
 */

export function successResponse<T>(data: T, status = 200) {
  return NextResponse.json(data, { status })
}

export function errorResponse(
  error: string,
  status: number,
  headers?: Record<string, string>,
  details?: Record<string, unknown>,
) {
  return NextResponse.json({ error, ...details }, { status, headers })
}

export function unauthorizedResponse(message = 'Unauthorized') {
  return errorResponse(message, 401)
}

/**
 * 403 Forbidden.
 *
 * `details` exists so a refusal can carry a machine-readable `code` beside
 * the sentence. 403 is returned here for at least four different states
 * (not a subscriber, no AI-processing consent, no guardian consent, AI
 * switched off for the account), and a client that wants to help the
 * learner out of one of them must not have to match English prose to tell
 * them apart. CLIENTS SWITCH ON `code`, NEVER ON THE STATUS ALONE.
 */
export function forbiddenResponse(message = 'Forbidden', details?: Record<string, unknown>) {
  return errorResponse(message, 403, undefined, details)
}

export function notFoundResponse(message = 'Not found') {
  return errorResponse(message, 404)
}

export function badRequestResponse(message = 'Bad request') {
  return errorResponse(message, 400)
}

export function rateLimitResponse(resetAt: number) {
  const retryAfter = Math.ceil((resetAt - Date.now()) / 1000)
  return errorResponse('Too many requests. Please try again later.', 429, {
    'Retry-After': String(retryAfter),
  })
}

/**
 * The free allowance for this meter is spent.
 *
 * WHY 402 AND NOT 403 OR 429
 *  - 403 already means "premium feature, you are not a subscriber" across ten
 *    routes, and `forbiddenResponse()` also carries consent refusal and the AI
 *    opt-out. Reusing it would make four different states indistinguishable in
 *    the logs and in the client.
 *  - 429 via `rateLimitResponse()` means "slow down" and carries `Retry-After`.
 *    It is also the code CDNs, Vercel analytics and uptime monitors bucket as
 *    abuse, so a converting learner would look like an attacker on the
 *    dashboards.
 *  - 402 Payment Required is formally reserved rather than standardised in
 *    RFC 9110, so no client may infer behaviour from the number alone. That is
 *    exactly why the body carries a stable `code`. CLIENTS MUST SWITCH ON
 *    `code`, NEVER ON THE STATUS. Precedent is broad (Stripe and similar use
 *    402 for "you must pay to continue") and no intermediary treats it
 *    specially.
 */
export function allowanceExhaustedResponse(state: {
  used: number
  limit: number
  resetsAt: Date
  subjectType?: 'user' | 'ip'
}) {
  const resetsAt = state.resetsAt.toISOString()
  const resetLabel = state.resetsAt.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })

  // A signed-out learner is told plainly that signing in gives more. That
  // matters because a school, a library or a household behind one public IP
  // shares a single counter, and this is the route out of it.
  const message =
    state.subjectType === 'ip'
      ? `You have used all ${state.limit} free AI checks from this connection for now. They renew on ${resetLabel}. Sign in for a larger free allowance, or see our plans for unlimited checks.`
      : `You have used all ${state.limit} of your free AI checks for now. They renew on ${resetLabel}. See our plans to carry on straight away.`

  return errorResponse(message, 402, undefined, {
    code: 'free_allowance_exhausted',
    used: state.used,
    limit: state.limit,
    resetsAt,
    upgradeUrl: '/pricing',
  })
}

export function unsupportedMediaTypeResponse(message = 'Content-Type must be application/json') {
  return errorResponse(message, 415)
}

export function serviceUnavailableResponse(message = 'Service temporarily unavailable') {
  return errorResponse(message, 503)
}

export function serverErrorResponse(message = 'Internal server error') {
  return errorResponse(message, 500)
}

export function requireJsonContentType(request: NextRequest): NextResponse | null {
  const ct = request.headers.get('content-type')
  if (!ct || !ct.includes('application/json')) {
    return NextResponse.json({ error: 'Content-Type must be application/json' }, { status: 415 })
  }
  return null
}
