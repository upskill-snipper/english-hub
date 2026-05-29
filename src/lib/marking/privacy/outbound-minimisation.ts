// ─── DP-1: Outbound PII-Minimisation Guard (marking path) ─────────────────────
//
// WHY THIS FILE EXISTS
// `src/lib/anthropic-client.ts` is the single source of the *contractual* privacy
// posture, and its header is explicit that the installed SDK exposes NO retention
// / no-training / privacy flag — so the one thing the codebase can actually
// ENFORCE on every call is **data minimisation before the request leaves the
// process**: the prompt must carry only the markable signal (question + essay +
// board/year metadata) and never a student identifier (name, email, DOB, school,
// internal userId/uuid). See design doc 19 §1.1 + §2(1) and the master build plan
// (section B / DP-1, step P0.5).
//
// Today (doc 19 §1.1) that guarantee is implicit — it rests on the *accident of a
// type shape* (`PromptInput` has no identifier field) with NO allow-list and NO
// test. As the IELTS engine adds a Router, retrieval context, exemplars and
// integrity flags, new fields get assembled into the payload and the implicit
// guarantee can silently regress. This module converts the implicit guarantee
// into an EXPLICIT, tested guard that runs on the assembled Anthropic
// `messages.create`-shaped body immediately before dispatch and THROWS if any
// identifier is detected.
//
// ── THE LOAD-BEARING CARVE-OUT (read before editing) ─────────────────────────
// The candidate ESSAY text is the markable signal and MUST be sent verbatim
// (doc 19 §2(1): "minimisation means 'no surrounding identifiers', not 'redact
// the essay'"). A student essay can *legitimately* contain something that looks
// like PII — a worked example with an email address, a date written in ISO form,
// a character called "Mr Smith". If the guard naïvely flagged those it would
// produce false positives, get disabled, and the real protection would be lost
// (doc 19 §5, risk: "the essay-is-verbatim carve-out must be implemented
// carefully or the guard will produce false positives and get disabled").
//
// So the contract is: the caller passes the exact essay string(s) it is sending
// via `opts.allowVerbatim`. The guard removes those verbatim spans from the text
// it scans, THEN looks for identifiers in everything that remains (the system
// prompt, the instructions, any surrounding metadata). PII *inside* the essay is
// allowed; PII *outside* the essay is not. The carve-out is applied by exact
// substring excision only — it never weakens detection elsewhere.
//
// ── SCOPING THE CARVE-OUT (the trust boundary — read before editing) ─────────
// The carve-out is DANGEROUS if applied too broadly: any byte excised by
// `allowVerbatim` is, by construction, invisible to every detector wherever it
// appears. So a caller that over-supplies `allowVerbatim` (passes the whole
// user-message, or accidentally the system prompt, or a span that happens to also
// appear in `system`) would silently blind the guard for that text everywhere —
// letting real PII outside the essay ride through. To contain that blast radius,
// the carve-out is SCOPED:
//   1. It applies ONLY to message-content strings (paths under `messages`) — the
//      surfaces that structurally ARE the candidate essay/question. It is NEVER
//      applied to the `system` prompt or to any other top-level/metadata field;
//      those are always scanned on their FULL text.
//   2. A `MIN_VERBATIM_SPAN_CHARS` (40) floor rejects spans too short to be a real
//      essay/question — a short span would over-match across the payload and is a
//      sign of misuse, so it throws.
//   3. Any `allowVerbatim` span that ALSO occurs in the `system` prompt is treated
//      as misuse (the essay is never the examiner persona) and throws.
// These three rules mean a name/email/DOB in the system prompt is ALWAYS detected
// even when `allowVerbatim` is supplied.
//
// This module is pure and does NO network I/O. It does not import the Anthropic
// SDK; it inspects a structural, SDK-shaped plain object so it can be unit-tested
// in isolation and reused by any caller that assembles a request body.
// ────────────────────────────────────────────────────────────────────────────

/**
 * The minimal subset of an Anthropic `messages.create` request body that the
 * guard needs to inspect. Kept structural (not the SDK type) so this module has
 * no SDK dependency and so a malformed/partial body is still safely scannable.
 *
 * Anthropic content blocks may be a plain string or an array of typed blocks
 * (`{ type: 'text', text: string }`, plus image/tool blocks we don't read for
 * text). We accept `unknown`-ish shapes defensively and extract every string we
 * can reach, because an identifier hiding in an unexpected field is exactly the
 * regression this guard exists to catch.
 */
export interface MinimisableMessageParam {
  role: string
  /** String, or an array of content blocks (text/image/tool_use/etc.). */
  content: unknown
}

/** The inspected shape of an Anthropic messages.create request body. */
export interface MinimisableBody {
  /** `system` may be a string or an array of text blocks. */
  system?: unknown
  messages?: readonly MinimisableMessageParam[]
  /** Anything else on the body is tolerated and deep-scanned for strings. */
  [key: string]: unknown
}

/** What the guard found, surfaced on the thrown error for triage + logging. */
export interface MinimisationViolation {
  /** The class of identifier detected. */
  kind:
    | 'email'
    | 'date-of-birth'
    | 'uuid'
    | 'likely-name'
    | 'forbidden-key'
    | 'identifier'
    | 'verbatim-misuse'
  /** Where it was found (e.g. `system`, `messages[0].content`, key path). */
  location: string
  /**
   * A REDACTED preview of the offending span — never the raw value, so the error
   * (which may itself be logged) does not become a new place PII leaks.
   */
  redactedSample: string
}

export interface AssertMinimisedOptions {
  /**
   * The exact verbatim string(s) that are the markable signal and are therefore
   * ALLOWED to contain PII-looking content — i.e. the candidate essay (and,
   * where relevant, the question text the candidate is responding to). These are
   * excised from the scanned text by exact substring match BEFORE detection, so
   * an email inside the essay does not trip the guard, but the same email in the
   * system prompt does. Pass every span you are sending verbatim; an empty or
   * missing value means "scan everything" (strictest mode).
   *
   * SCOPING (see file header "SCOPING THE CARVE-OUT"): the excision applies ONLY
   * to message-content strings (paths under `messages`). The `system` prompt and
   * any other top-level/metadata field are ALWAYS scanned on their full text, so
   * over-supplying `allowVerbatim` cannot blind the guard on those surfaces.
   * Each span must be at least {@link MIN_VERBATIM_SPAN_CHARS} characters, and a
   * span that also appears in the `system` prompt is rejected as misuse — both
   * throw {@link MinimisationViolationError}.
   */
  allowVerbatim?: string | readonly string[]
  /**
   * Extra forbidden object keys to treat as a hard violation if present anywhere
   * in the body (case-insensitive substring match against each key). Merged with
   * {@link DEFAULT_FORBIDDEN_KEYS}. Lets a caller tighten without editing this
   * file. (The full canonical allow-/forbidden-list lives in the data-protection
   * allow-list module per doc 19 step 1; this guard ships a conservative,
   * self-contained default so it is useful before that module exists.)
   */
  extraForbiddenKeys?: readonly string[]
}

/**
 * Object keys that must NEVER appear in an outbound marking payload — these name
 * a student identifier directly. Conservative, lower-cased, matched as a
 * case-insensitive substring of each encountered key so `studentEmail`,
 * `user_id`, `dateOfBirth`, `schoolName` etc. are all caught. This is the
 * self-contained seed; doc 19 step 1 will reconcile a canonical
 * `FORBIDDEN_OUTBOUND_KEYS` (re-using the training anonymiser's
 * `FORBIDDEN_EXPORT_KEYS`) — keep this list a SUBSET-or-equal in spirit so the
 * guard never disagrees with that source once it lands.
 */
export const DEFAULT_FORBIDDEN_KEYS: readonly string[] = [
  'name',
  'firstname',
  'lastname',
  'surname',
  'fullname',
  'email',
  'phone',
  'mobile',
  'dob',
  'dateofbirth',
  'birthdate',
  'school',
  'schoolid',
  'schoolname',
  'classid',
  'class',
  'userid',
  'studentid',
  'pupilid',
  'uuid',
  'guid',
  'address',
  'postcode',
  'zip',
  'nino', // UK National Insurance number
  'upn', // UK Unique Pupil Number
  // UK-education / exam-administration identifiers (substring-matched, lower-cased).
  'centre', // also matches 'centrenumber', 'centrename', UK spelling of exam centre
  'center', // US spelling, defensive
  'centrenumber',
  'centrename',
  'uln', // UK Unique Learner Number
  'candidatenumber',
  'candidateref',
  'examnumber',
  'seatnumber',
  'username',
  'initials',
  'nhsnumber',
  'ip',
  'ipaddress',
] as const

/**
 * Minimum length (characters) for an `allowVerbatim` span to be accepted. A
 * shorter span is almost never a real essay/question and, because excision is a
 * plain substring removal, a short span would over-match across the whole payload
 * and silently blind the detectors. Spans below this floor are rejected (FIX 1).
 */
export const MIN_VERBATIM_SPAN_CHARS = 40

// ── Detectors (conservative, well-commented) ─────────────────────────────────
//
// IMPORTANT: these are stored as pattern STRINGS, not as shared `RegExp`
// objects. `detectInText` compiles a FRESH `RegExp` (with the global flag) on
// every call. A module-level global regex carries mutable `lastIndex` state, and
// reusing one across the many `assertMinimisedPayload` calls a process makes
// (e.g. every case in a test run, or every request in a long-lived server) can
// cause `matchAll`/`exec` to start mid-string and silently MISS a match. Fresh
// instances make detection stateless and deterministic. Each detector errs
// toward avoiding false positives on essay-free text, because the carve-out has
// already removed the essay before these run.

/**
 * Email addresses. Standard, conservative RFC-ish pattern: a local part, `@`, a
 * domain with at least one dot and a 2+ char TLD.
 */
const EMAIL_PATTERN = String.raw`[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}`

/**
 * Dates that read as a date-of-birth. We intentionally match common explicit
 * date forms rather than every number:
 *   • ISO 8601:            1998-07-21   (YYYY-MM-DD)
 *   • slashes / dots:      21/07/1998, 21.07.1998, 07/21/1998
 *   • dashes, day-first:   21-07-1998   (DD-MM-YYYY)
 *   • 2-digit-year forms:  21/07/98, 21-07-98, 07/21/98
 *   • month-name forms:    3rd March 2009, March 3, 2009, 03 Mar 2009
 * Numeric years are constrained to 1900–2099 (4-digit) so we don't flag every
 * "12/34". These are structural DOB-shaped detectors, not semantic ones —
 * appropriate for the non-essay surfaces (system prompt / metadata) we scan, and
 * (per FIX 1) the essay is excised from message-content before these run, so
 * essay false-positive risk is low.
 */
const ISO_DOB_PATTERN = String.raw`\b(?:19|20)\d{2}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\d|3[01])\b`

// Day-first / month-first separated by '/', '.', or '-', with a 4-digit year.
const SLASH_DOB_PATTERN =
  String.raw`\b(?:0?[1-9]|[12]\d|3[01])[\/.\-](?:0?[1-9]|1[0-2])[\/.\-](?:19|20)\d{2}\b` +
  '|' +
  String.raw`\b(?:0?[1-9]|1[0-2])[\/.\-](?:0?[1-9]|[12]\d|3[01])[\/.\-](?:19|20)\d{2}\b`

// 2-digit-year variants (DD-MM-YY, DD/MM/YY, MM/DD/YY). Anchored to two leading
// day/month components followed by a 2-digit year that is NOT followed by more
// digits, so we do not clip the first two digits off a 4-digit year.
const SHORT_YEAR_DOB_PATTERN =
  String.raw`\b(?:0?[1-9]|[12]\d|3[01])[\/.\-](?:0?[1-9]|1[0-2])[\/.\-]\d{2}\b(?!\d)` +
  '|' +
  String.raw`\b(?:0?[1-9]|1[0-2])[\/.\-](?:0?[1-9]|[12]\d|3[01])[\/.\-]\d{2}\b(?!\d)`

// Month-name forms. `MONTH` covers full and 3-letter abbreviations.
const MONTH = String.raw`(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:t(?:ember)?)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)`
const ORDINAL_DAY = String.raw`(?:0?[1-9]|[12]\d|3[01])(?:st|nd|rd|th)?`
// "3rd March 2009", "03 Mar 2009"  (day month year)
const MONTHNAME_DMY_PATTERN = String.raw`\b${ORDINAL_DAY}\s+${MONTH}\.?\s+(?:19|20)\d{2}\b`
// "March 3, 2009", "Mar 03 2009"  (month day year)
const MONTHNAME_MDY_PATTERN = String.raw`\b${MONTH}\.?\s+${ORDINAL_DAY},?\s+(?:19|20)\d{2}\b`

/**
 * UUID / GUID — a strong signal of an internal record identifier (userId, etc.)
 * that has leaked into the prompt text. Canonical 8-4-4-4-12 hex form.
 */
const UUID_PATTERN = String.raw`\b[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}\b`

// ── Identifier detectors (FIX 3) ──────────────────────────────────────────────
// These are gated to run ONLY on the post-carve-out (essay-excised) text, because
// long digit runs and base32/hex blobs can legitimately appear in an essay (a
// quoted ISBN, a maths working, a hex colour). After the essay is excised from
// message-content, a residual long identifier on a non-essay surface is a strong
// leak signal.

/**
 * A run of >=6 consecutive digits, as a prose identifier signal (student
 * reference, candidate number, ID printed into the prompt). Word-boundaried so a
 * year (4 digits) or a short page number does not trip it. The 4-digit DOB years
 * the date detectors rely on stay below the 6-digit floor.
 */
const LONG_DIGIT_RUN_PATTERN = String.raw`\b\d{6,}\b`

/** 24-character hexadecimal Mongo ObjectId. */
const MONGO_OBJECTID_PATTERN = String.raw`\b[0-9a-fA-F]{24}\b`

/**
 * ULID — 26-char Crockford base32 (excludes I, L, O, U). Anchored to exactly 26
 * such chars to avoid matching ordinary 26-letter words (which would contain the
 * excluded letters and/or be lowercase).
 */
const ULID_PATTERN = String.raw`\b[0-7][0-9A-HJKMNP-TV-Z]{25}\b`

/**
 * JWT-shaped token: three base64url segments separated by dots, the first two of
 * meaningful length. A bearer/JWT in a prompt is always a leak.
 */
const JWT_PATTERN = String.raw`\beyJ[A-Za-z0-9_-]{5,}\.[A-Za-z0-9_-]{5,}\.[A-Za-z0-9_-]+\b`

/**
 * A "labelled name" — a colon/equation that explicitly attributes a person's
 * name, e.g. `Student name: Jane Doe`, `Candidate: John Smith`, `Pupil = ...`.
 * We do NOT try to detect bare proper nouns (un-decidable, and the task scopes a
 * name allow-not-list out) — we detect the STRUCTURAL pattern of an identifier
 * field rendered into prose, which is what a leaked metadata field looks like.
 * Requires two Capitalised tokens after the label to avoid flagging
 * "Candidate: discuss…".
 */
// NOTE: the LABEL keywords are matched case-insensitively via explicit
// `[Ss]tudent` etc., so a real field rendered as `Student name:` (capital S) is
// caught — but the trailing `[A-Z][a-z]+` (the actual person name) stays
// case-SENSITIVE so we don't false-positive on lowercase prose like
// "candidate: discuss the causes". This is why we do NOT just slap the `i` flag
// on the whole pattern.
const LABELLED_NAME_PATTERN = String.raw`\b(?:[Ss]tudent|[Cc]andidate|[Pp]upil|[Ll]earner|[Nn]ame|[Cc]hild)(?:'s)?\s*(?:[Ff]ull\s*)?[Nn]ame\s*[:=]\s*[A-Z][a-z]+(?:\s+[A-Z][a-z]+)+`
const LABELLED_PERSON_PATTERN = String.raw`\b(?:[Ss]tudent|[Cc]andidate|[Pp]upil|[Ll]earner|[Cc]hild)\s*[:=]\s*[A-Z][a-z]+(?:\s+[A-Z][a-z]+)+`

/**
 * Detector tiers control WHICH surfaces a detector runs on:
 *
 *  • `'always'` — the high-precision PII detectors (email, DOB, UUID, labelled
 *    name). These run on EVERY collected string, including structural metadata,
 *    because their shapes essentially never occur by accident in benign fields.
 *
 *  • `'identifier'` — the broader identifier detectors (JWT, ULID, Mongo
 *    ObjectId, long digit-run). These are deliberately aggressive and WOULD
 *    false-positive on benign structural metadata (e.g. a model id like
 *    `claude-sonnet-4-20250514` contains an 8-digit run). They therefore run
 *    ONLY on identifier-eligible surfaces: the `system` prompt, message content
 *    (after the essay carve-out), and coerced numeric scalars (the `{ ref: 88213 }`
 *    case from FIX 3a). They do NOT run on arbitrary string metadata such as the
 *    `model` field — a residual long digit run there is request plumbing, not a
 *    learner identifier, and flagging it is exactly the kind of false positive
 *    that gets the guard disabled (doc 19 §5).
 */
type DetectorTier = 'always' | 'identifier'

/**
 * Each detector: a label, a source pattern (compiled fresh per use), and a tier.
 * The `'always'` tier runs on every collected string; the `'identifier'` tier
 * runs only on identifier-eligible surfaces (see {@link DetectorTier}). The
 * carve-out has already excised the essay from message-content before any of
 * these run, so essay false positives are avoided (FIX 1 + FIX 3).
 */
const DETECTORS: ReadonlyArray<{
  kind: MinimisationViolation['kind']
  pattern: string
  tier: DetectorTier
}> = [
  { kind: 'email', pattern: EMAIL_PATTERN, tier: 'always' },
  { kind: 'date-of-birth', pattern: ISO_DOB_PATTERN, tier: 'always' },
  { kind: 'date-of-birth', pattern: SLASH_DOB_PATTERN, tier: 'always' },
  { kind: 'date-of-birth', pattern: SHORT_YEAR_DOB_PATTERN, tier: 'always' },
  { kind: 'date-of-birth', pattern: MONTHNAME_DMY_PATTERN, tier: 'always' },
  { kind: 'date-of-birth', pattern: MONTHNAME_MDY_PATTERN, tier: 'always' },
  { kind: 'uuid', pattern: UUID_PATTERN, tier: 'always' },
  { kind: 'likely-name', pattern: LABELLED_NAME_PATTERN, tier: 'always' },
  { kind: 'likely-name', pattern: LABELLED_PERSON_PATTERN, tier: 'always' },
  // Identifier detectors — order matters only for which kind is reported first;
  // JWT/ULID/ObjectId are checked before the generic long-digit run.
  { kind: 'identifier', pattern: JWT_PATTERN, tier: 'identifier' },
  { kind: 'identifier', pattern: ULID_PATTERN, tier: 'identifier' },
  { kind: 'identifier', pattern: MONGO_OBJECTID_PATTERN, tier: 'identifier' },
  { kind: 'identifier', pattern: LONG_DIGIT_RUN_PATTERN, tier: 'identifier' },
]

/**
 * Error thrown when the guard detects a student identifier in an outbound
 * marking payload. Carries the structured violations so callers can log a safe
 * summary and fail closed. `name` is set explicitly so `instanceof` and
 * name-based checks both work after transpilation/serialisation.
 */
export class MinimisationViolationError extends Error {
  readonly name = 'MinimisationViolationError'
  readonly violations: readonly MinimisationViolation[]

  constructor(violations: readonly MinimisationViolation[]) {
    super(
      `Outbound marking payload failed PII minimisation (DP-1): ` +
        `${violations.length} violation(s) — ` +
        violations.map((v) => `${v.kind}@${v.location}`).join(', '),
    )
    this.violations = violations
    // Restore prototype chain for transpilation targets that break it.
    Object.setPrototypeOf(this, MinimisationViolationError.prototype)
  }
}

// ── Internals ────────────────────────────────────────────────────────────────

/** Redact a matched span for safe inclusion in errors/logs. */
function redactSample(raw: string): string {
  const s = raw.trim()
  if (s.length <= 2) return '••'
  return `${s[0]}••${s[s.length - 1]} (len ${s.length})`
}

/** Normalise the allowVerbatim option to a deduped, non-empty string array. */
function normaliseVerbatim(allow: AssertMinimisedOptions['allowVerbatim']): string[] {
  if (!allow) return []
  const arr = Array.isArray(allow) ? allow : [allow]
  return arr.filter((s): s is string => typeof s === 'string' && s.length > 0)
}

/**
 * Excise every verbatim-allowed span from `text` by EXACT substring removal.
 * Replacing with a single space (not '') preserves token boundaries so we don't
 * accidentally fuse two safe fragments into a false match. Longest spans first
 * so a shorter span that is a substring of a longer one can't partially mask it.
 */
function stripVerbatim(text: string, verbatim: string[]): string {
  if (verbatim.length === 0) return text
  let out = text
  for (const span of [...verbatim].sort((a, b) => b.length - a.length)) {
    // Remove ALL occurrences of the exact span.
    out = out.split(span).join(' ')
  }
  return out
}

/**
 * Walk an arbitrary value and collect every reachable string together with a
 * dotted path. Also reports any object key that matches the forbidden-key set as
 * a violation directly (a forbidden key is a leak regardless of its value).
 */
function collectStrings(
  value: unknown,
  path: string,
  forbiddenKeys: readonly string[],
  out: { path: string; text: string; numeric?: boolean }[],
  keyViolations: MinimisationViolation[],
  seen: Set<object>,
): void {
  if (typeof value === 'string') {
    out.push({ path, text: value })
    return
  }
  // FIX 3a: coerce numeric scalars to strings so a numeric id / packed DOB under
  // a non-forbidden key (e.g. `{ ref: 88213 }`, `{ ts: 19980721 }`) is still
  // scanned by the detectors rather than skipped entirely. A coerced number is
  // always an identifier-eligible surface (a bare number is never benign prose),
  // so it is flagged `numeric` to enable the identifier-tier detectors on it.
  if (typeof value === 'number' || typeof value === 'bigint') {
    if (typeof value === 'bigint' || Number.isFinite(value)) {
      out.push({ path, text: String(value), numeric: true })
    }
    return
  }
  if (value === null || typeof value !== 'object') return
  if (seen.has(value as object)) return // guard against cyclic bodies
  seen.add(value as object)

  if (Array.isArray(value)) {
    value.forEach((item, i) =>
      collectStrings(item, `${path}[${i}]`, forbiddenKeys, out, keyViolations, seen),
    )
    return
  }

  for (const [key, child] of Object.entries(value as Record<string, unknown>)) {
    const lowerKey = key.toLowerCase()
    if (forbiddenKeys.some((fk) => lowerKey.includes(fk))) {
      keyViolations.push({
        kind: 'forbidden-key',
        location: path ? `${path}.${key}` : key,
        redactedSample: typeof child === 'string' ? redactSample(child) : '[non-string value]',
      })
      // Do NOT scan the forbidden field's value for further patterns — the key
      // alone is the violation, and the value may legitimately be empty.
      continue
    }
    collectStrings(child, path ? `${path}.${key}` : key, forbiddenKeys, out, keyViolations, seen)
  }
}

/**
 * Run all text detectors over one string span and append any hits. A fresh
 * global `RegExp` is compiled per detector per call so there is no shared
 * `lastIndex` state across calls (see the DETECTORS note above).
 */
function detectInText(
  text: string,
  location: string,
  out: MinimisationViolation[],
  runIdentifierTier: boolean,
): void {
  for (const { kind, pattern, tier } of DETECTORS) {
    // The aggressive identifier tier runs only on identifier-eligible surfaces
    // (system prompt, message content, numeric scalars) — never on arbitrary
    // string metadata such as the model id (see DetectorTier docs).
    if (tier === 'identifier' && !runIdentifierTier) continue
    const re = new RegExp(pattern, 'g')
    for (const m of text.matchAll(re)) {
      out.push({ kind, location, redactedSample: redactSample(m[0]) })
    }
  }
}

/**
 * Inspect an Anthropic `messages.create`-shaped body and THROW
 * {@link MinimisationViolationError} if it carries a student identifier anywhere
 * in the system prompt, the messages, or any other field — EXCEPT inside the
 * verbatim spans passed via {@link AssertMinimisedOptions.allowVerbatim}, which
 * are the markable essay/question signal and are allowed to contain PII-looking
 * content (see file header for the carve-out rationale).
 *
 * Pure and side-effect-free: does no network I/O and does not mutate `body`.
 * Call it immediately before dispatching the request, so the guarantee holds for
 * the exact bytes that go to Anthropic.
 *
 * The verbatim carve-out is SCOPED (FIX 1): it is applied ONLY to message-content
 * strings (paths under `messages`), never to the `system` prompt or any other
 * field, which are always scanned on their full text. Spans shorter than
 * {@link MIN_VERBATIM_SPAN_CHARS}, or spans that also appear in the `system`
 * prompt, are rejected as misuse and throw.
 *
 * @param body The assembled request body (`{ system?, messages? , ... }`).
 * @param opts Carve-out + tightening options. Pass the essay via `allowVerbatim`.
 * @throws {MinimisationViolationError} when any identifier is detected outside
 *         the allowed verbatim spans, or when an `allowVerbatim` span is misused
 *         (too short, or also present in the `system` prompt).
 */
export function assertMinimisedPayload(
  body: MinimisableBody,
  opts: AssertMinimisedOptions = {},
): void {
  const forbiddenKeys = [
    ...DEFAULT_FORBIDDEN_KEYS,
    ...(opts.extraForbiddenKeys ?? []).map((k) => k.toLowerCase()),
  ]
  const verbatim = normaliseVerbatim(opts.allowVerbatim)

  const strings: { path: string; text: string; numeric?: boolean }[] = []
  const keyViolations: MinimisationViolation[] = []
  collectStrings(body, '', forbiddenKeys, strings, keyViolations, new Set<object>())

  // FIX 1: validate the carve-out spans BEFORE using them. A too-short span (which
  // would over-match across the payload) or a span that also appears in the
  // `system` prompt (a sign the caller has mis-supplied the essay) is misuse and
  // fails closed. Collect the system text once for the cross-check.
  const verbatimViolations: MinimisationViolation[] = []
  const systemText = strings
    .filter(({ path }) => isSystemPath(path))
    .map(({ text }) => text)
    .join('\n')
  for (const span of verbatim) {
    if (span.length < MIN_VERBATIM_SPAN_CHARS) {
      verbatimViolations.push({
        kind: 'verbatim-misuse',
        location: 'allowVerbatim',
        redactedSample: `span too short (len ${span.length} < ${MIN_VERBATIM_SPAN_CHARS})`,
      })
      continue
    }
    if (systemText.includes(span)) {
      verbatimViolations.push({
        kind: 'verbatim-misuse',
        location: 'allowVerbatim',
        redactedSample: 'span also present in system prompt',
      })
    }
  }
  // Only spans that passed validation are allowed to excise content. A rejected
  // short span MUST NOT excise (it would blind detection), so drop it here too.
  const usableVerbatim = verbatim.filter((s) => s.length >= MIN_VERBATIM_SPAN_CHARS)

  const textViolations: MinimisationViolation[] = []
  for (const { path, text, numeric } of strings) {
    // FIX 1: the carve-out applies ONLY to message-content strings. The `system`
    // prompt and any other top-level/metadata field are scanned on FULL text, so
    // an over-broad allowVerbatim cannot blind the guard on those surfaces.
    const onMessage = isMessagePath(path)
    const scannable = onMessage ? stripVerbatim(text, usableVerbatim) : text
    // Identifier-tier detectors (long digit runs, ObjectId, ULID, JWT) run only
    // on prose/identifier surfaces: the system prompt, message content, or a
    // coerced numeric scalar. They do NOT run on arbitrary string metadata such
    // as the `model` id, which would otherwise false-positive (see DetectorTier).
    const runIdentifierTier = onMessage || isSystemPath(path) || numeric === true
    detectInText(scannable, path || '(root)', textViolations, runIdentifierTier)
  }

  const all = [...keyViolations, ...verbatimViolations, ...textViolations]
  if (all.length > 0) {
    throw new MinimisationViolationError(all)
  }
}

/** True when a collected-string path is (under) the `system` prompt. */
function isSystemPath(path: string): boolean {
  return path === 'system' || path.startsWith('system[') || path.startsWith('system.')
}

/**
 * True when a collected-string path is message content — the only surface the
 * verbatim carve-out is allowed to touch (FIX 1). Matches `messages[i]...`.
 */
function isMessagePath(path: string): boolean {
  return path.startsWith('messages[') || path.startsWith('messages.') || path === 'messages'
}

/**
 * Produce a structurally-redacted copy of a request body that is SAFE to log.
 * Every reachable string is replaced with a non-reversible descriptor
 * (`[string len N fp <8hex>]`), so the shape and size of the payload remain
 * inspectable for debugging while no learner content (essay, question, and
 * certainly no leaked identifier) is ever written to a log sink.
 *
 * Note: this is for LOG safety, not for sending to Anthropic — the model gets
 * the real essay verbatim (that is the whole point). Use this only at the
 * logging boundary.
 *
 * @param body Any request-body-shaped value.
 * @returns A deep copy with all strings replaced by safe descriptors.
 */
export function redactForLog(body: unknown): unknown {
  return redactValue(body, new Set<object>())
}

function redactValue(value: unknown, seen: Set<object>): unknown {
  if (typeof value === 'string') return `[string len ${value.length} fp ${fingerprint(value)}]`
  if (value === null || typeof value !== 'object') return value
  if (seen.has(value as object)) return '[circular]'
  seen.add(value as object)
  if (Array.isArray(value)) return value.map((v) => redactValue(v, seen))
  const out: Record<string, unknown> = {}
  for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
    out[k] = redactValue(v, seen)
  }
  return out
}

/**
 * Tiny non-cryptographic fingerprint for log correlation only (NOT for security
 * — it is intentionally not a full hash, and is one-way/lossy). Lets two log
 * lines be matched as "same string" without revealing the string.
 */
function fingerprint(s: string): string {
  let h = 0x811c9dc5
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 0x01000193)
  }
  return (h >>> 0).toString(16).padStart(8, '0')
}
