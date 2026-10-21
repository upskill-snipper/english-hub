// ─── What kind of AI provider failure is this? ───────────────────────────────
//
// WHY THIS EXISTS (21 October 2026)
// From 12 October 2026 at 15:10 UTC every Anthropic call returned HTTP 400
// with "Your credit balance is too low to access the Anthropic API". In the
// nine days that followed, 37 essays from 12 learners were saved and never
// marked, every one of them a new trial account's first essay, and revision
// notes and the free IELTS diagnostic failed too. Nobody was told. The daily
// check at /api/health/ai could not have said so even had anyone read it: it
// read any 400 as "the model id has probably been retired", which sends the
// reader to change a model id that was never the problem.
//
// An empty account, a dead key and a retired model all arrive as a status and
// a sentence, and they need different people to do different things. This
// module turns the provider's answer into one of a few kinds, each with the
// action that ends it, and says which kinds will not pass on their own. The
// alert in src/lib/ops/ai-outage-alert.ts fires on those.
//
// It is pure and total: it never throws, so it can run on any failure path.
// ────────────────────────────────────────────────────────────────────────────

export type AiProviderFailureKind =
  /** The Anthropic account has no credit left. Every call fails until it is topped up. */
  | 'credit_exhausted'
  /** The API key was rejected (401). */
  | 'key_rejected'
  /** The key may not use this model or feature (403). */
  | 'access_denied'
  /** The model id is unknown or retired (404, or a 400 naming the model). */
  | 'model_unavailable'
  /** No API key in this environment. */
  | 'not_configured'
  /** Rate limited at the provider (429). Usually passes. */
  | 'rate_limited'
  /** The provider is overloaded or failing (5xx, 529). Usually passes. */
  | 'overloaded'
  /** No reply in time. Usually passes. */
  | 'timeout'
  /** Anything else, including a refusal of one particular request. */
  | 'other'

/** What a failure said about itself, however it arrived. */
export interface ProviderErrorFacts {
  /** HTTP status from the provider, when known. */
  status: number | null
  /** The provider's error type, e.g. 'invalid_request_error'. */
  type: string | null
  /** The provider's own sentence, without the status or the JSON around it. */
  message: string | null
  /** The thrown error's class name, or the class a record carried. */
  name?: string | null
}

export interface AiProviderFailure extends ProviderErrorFacts {
  kind: AiProviderFailureKind
  /**
   * True when every request will fail until a person acts. These are the
   * kinds an alert is raised for from a live request; the rest pass on their
   * own, and alerting on them would teach the reader to ignore the alert.
   */
  needsHuman: boolean
  /** What to do about it, in one or two sentences. */
  action: string
}

/**
 * The sentence the provider sends when the account is empty. Recognised by
 * its words because, on 12 October 2026, it came as a plain 400
 * `invalid_request_error`, not as the 402 `billing_error` the API reference
 * lists. Both are recognised.
 */
const CREDIT_EXHAUSTED = /credit balance is too low/i

/** A 400 that names the model is a rejected model id, not a bad request. */
const MODEL_REJECTED =
  /^model:|\bmodel\b[^.]*\b(not found|not supported|not available|does not exist|deprecated|retired)\b/i

/** The SDK's error classes, by the status they stand for. */
const STATUS_BY_SDK_CLASS: Readonly<Record<string, number>> = {
  BadRequestError: 400,
  AuthenticationError: 401,
  PermissionDeniedError: 403,
  NotFoundError: 404,
  RateLimitError: 429,
  InternalServerError: 500,
}

const TIMEOUT_NAMES = new Set([
  'APIConnectionTimeoutError',
  'AbortError',
  'TimeoutError',
  'timeout',
])

const NEEDS_HUMAN: ReadonlySet<AiProviderFailureKind> = new Set([
  'credit_exhausted',
  'key_rejected',
  'access_denied',
  'model_unavailable',
  'not_configured',
])

const ACTIONS: Readonly<Record<AiProviderFailureKind, string>> = {
  credit_exhausted:
    'The Anthropic account has run out of credit. Top it up in the Anthropic Console under Plans & Billing, and consider turning on auto-reload. Every AI feature fails until then.',
  key_rejected:
    'The provider rejected the API key. Set a live ANTHROPIC_API_KEY in Vercel and redeploy.',
  access_denied:
    "The API key is not allowed to use this model or feature. Check the organisation's access in the Anthropic Console.",
  model_unavailable:
    'The model id was rejected, so it has probably been retired. Set the matching *_MODEL variable in Vercel to a current model id.',
  not_configured: 'ANTHROPIC_API_KEY is missing from this environment.',
  rate_limited:
    "Rate limited at the provider. This usually passes on its own; if it persists, check the account's rate limits.",
  overloaded: 'The provider is overloaded or failing. This usually passes on its own.',
  timeout: 'No reply in time. This usually passes on its own.',
  other: "Unclassified provider failure. Read the provider's own message.",
}

// ─── Reading the facts ──────────────────────────────────────────────────────

function str(value: unknown): string | null {
  return typeof value === 'string' && value.trim() ? value.trim() : null
}

/**
 * The type and message from an Anthropic error body, given either the whole
 * body (`{ type: 'error', error: { type, message } }`) or its inner object.
 * The outer `type` is always the word 'error', which says nothing, so it is
 * never reported as the type.
 */
function bodyFacts(body: unknown): { type: string | null; message: string | null } {
  if (!body || typeof body !== 'object') return { type: null, message: null }
  const outer = body as { type?: unknown; message?: unknown; error?: unknown }
  const inner =
    outer.error && typeof outer.error === 'object'
      ? (outer.error as { type?: unknown; message?: unknown })
      : outer
  const type = str(inner.type)
  return { type: type === 'error' ? null : type, message: str(inner.message) }
}

/**
 * Read a provider failure from text: a raw response body, or the SDK's own
 * message, which is the status followed by the body as JSON
 * ("400 {\"type\":\"error\",...}"). That second form is what /api/marking/run
 * has stored in the audit log since it began recording messages, cut to 300
 * characters, so text that is not valid JSON is kept as the message rather
 * than dropped: the words are what identify an empty account.
 */
export function parseProviderErrorText(text: string | null | undefined): ProviderErrorFacts {
  let rest = str(text)
  if (!rest) return { status: null, type: null, message: null }

  let status: number | null = null
  const lead = /^(\d{3})\s+([\s\S]*)$/.exec(rest)
  if (lead) {
    status = Number(lead[1])
    rest = lead[2].trim()
  }

  if (rest.startsWith('{')) {
    try {
      const facts = bodyFacts(JSON.parse(rest))
      if (facts.type || facts.message) return { status, ...facts }
    } catch {
      // Cut short or not JSON at all: keep the words below.
    }
  }
  return { status, type: null, message: rest || null }
}

/**
 * Read a provider failure from a thrown error. Handles the SDK's APIError,
 * which keeps the status on `status` and the parsed body on `error`, as well
 * as an AbortError, a missing key and anything else that was thrown.
 */
export function readProviderError(err: unknown): ProviderErrorFacts {
  if (err === null || err === undefined) return { status: null, type: null, message: null }
  if (typeof err !== 'object') {
    return { ...parseProviderErrorText(String(err)), name: null }
  }
  const e = err as { status?: unknown; name?: unknown; message?: unknown; error?: unknown }
  const fromBody = bodyFacts(e.error)
  const fromMessage = parseProviderErrorText(typeof e.message === 'string' ? e.message : null)
  return {
    status: typeof e.status === 'number' ? e.status : fromMessage.status,
    type: fromBody.type ?? fromMessage.type,
    message: fromBody.message ?? fromMessage.message,
    name: str(e.name),
  }
}

/**
 * Read a provider failure from the fields an AI audit record carries. The
 * routes fill these in different ways: an SDK class name or a provider type
 * in `errorClass`, `http_400` from a raw fetch, a status in `errorStatus` or
 * only inside the message. All of them are read.
 */
export function readProviderRecord(record: {
  errorStatus?: number | null
  errorClass?: string | null
  errorMessage?: string | null
}): ProviderErrorFacts {
  const parsed = parseProviderErrorText(record.errorMessage)
  const cls = str(record.errorClass)
  const httpStatus = cls ? /^http_(\d{3})$/.exec(cls) : null
  const classStatus = httpStatus
    ? Number(httpStatus[1])
    : cls
      ? (STATUS_BY_SDK_CLASS[cls] ?? null)
      : null
  const classIsProviderType = cls !== null && cls.endsWith('_error')
  return {
    status: record.errorStatus ?? parsed.status ?? classStatus,
    type: parsed.type ?? (classIsProviderType ? cls : null),
    message: parsed.message,
    name: cls,
  }
}

// ─── Classifying ────────────────────────────────────────────────────────────

function kindOf(facts: ProviderErrorFacts, minimalRequest: boolean): AiProviderFailureKind {
  const { status, type } = facts
  const name = facts.name ?? ''
  const message = facts.message ?? ''

  // First, because an empty account arrives as an ordinary 400.
  if (status === 402 || type === 'billing_error' || CREDIT_EXHAUSTED.test(message)) {
    return 'credit_exhausted'
  }
  if (name === 'AnthropicNotConfiguredError') return 'not_configured'
  if (status === 401 || type === 'authentication_error' || name === 'AuthenticationError') {
    return 'key_rejected'
  }
  if (status === 403 || type === 'permission_error' || name === 'PermissionDeniedError') {
    return 'access_denied'
  }
  if (
    status === 404 ||
    type === 'not_found_error' ||
    name === 'NotFoundError' ||
    (status === 400 && (MODEL_REJECTED.test(message) || minimalRequest))
  ) {
    return 'model_unavailable'
  }
  if (status === 429 || type === 'rate_limit_error' || name === 'RateLimitError') {
    return 'rate_limited'
  }
  if (TIMEOUT_NAMES.has(name) || type === 'timeout_error') return 'timeout'
  if (
    (status !== null && status >= 500) ||
    type === 'overloaded_error' ||
    type === 'api_error' ||
    name === 'InternalServerError'
  ) {
    return 'overloaded'
  }
  return 'other'
}

/**
 * Classify a provider failure.
 *
 * `minimalRequest` is for the health probe, which sends the smallest possible
 * request ("Reply with the single word: ok"). A 400 on that cannot be a
 * problem with the request, so it is read as a rejected model id, which is
 * what the probe reported before this module existed. On a learner's request
 * a bare 400 may be about that one request, so it is left as 'other'.
 */
export function classifyAiProviderFailure(
  facts: ProviderErrorFacts,
  options: { minimalRequest?: boolean } = {},
): AiProviderFailure {
  const kind = kindOf(facts, options.minimalRequest === true)
  return { ...facts, kind, needsHuman: NEEDS_HUMAN.has(kind), action: ACTIONS[kind] }
}

/**
 * Order of seriousness, for choosing the one failure that names an alert when
 * several probes fail at once. An empty account explains every other failure,
 * so it comes first.
 */
export const FAILURE_KIND_PRIORITY: readonly AiProviderFailureKind[] = [
  'credit_exhausted',
  'key_rejected',
  'not_configured',
  'access_denied',
  'model_unavailable',
  'rate_limited',
  'overloaded',
  'timeout',
  'other',
]

/** The most serious of several failures, or null when there are none. */
export function mostSerious<T extends { kind: AiProviderFailureKind }>(
  failures: readonly T[],
): T | null {
  let best: T | null = null
  for (const f of failures) {
    if (!best || FAILURE_KIND_PRIORITY.indexOf(f.kind) < FAILURE_KIND_PRIORITY.indexOf(best.kind)) {
      best = f
    }
  }
  return best
}
