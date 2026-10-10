/**
 * A failed save of a student's work, reported to the team.
 *
 * WHY THIS EXISTS (10 October 2026). Production's practice_sessions table was
 * found empty three weeks after the two fixes meant to fill it (02b28778f on
 * /practice, 09f54102e for finished mock exams). The investigation could not
 * tell whether students were not saving or every save was failing, because a
 * failure reached nobody: /practice caught the error and only showed the
 * student a message, the mock exam logged it to the student's own browser
 * console, and Sentry is not set up in the browser (no client DSN; see
 * instrumentation-client.ts). The answer had to be inferred from Postgres
 * statistics. It was "not saving", but the next real failure would have been
 * just as invisible. Both save paths now send a report here when a save fails,
 * and /api/save-failures writes it to the server log, which exists in
 * production whatever the Sentry settings, and passes it to Sentry, which
 * reports whenever a DSN is set.
 *
 * WHAT A REPORT CARRIES, AND NOTHING MORE: which save it was, the error's
 * code (a SQLSTATE such as 42501, a PostgREST code such as PGRST204, or
 * "thrown" for an error with no code), the HTTP status PostgREST answered
 * with, and the error's message with every quoted value removed except
 * database identifiers. Most users are children: the report never includes
 * the student's answer, the question, the account, or the error's `details`
 * and `hint`, because Postgres puts the failing row's values in `details`
 * ("Failing row contains (...)"), and that row holds the student's answer.
 * The server parses the body with the same rules and drops anything else.
 */

export const SAVE_PATHS = ['practice', 'mock-exam'] as const
export type SavePath = (typeof SAVE_PATHS)[number]

export interface SaveFailureReport {
  path: SavePath
  /** A SQLSTATE ('42501'), a PostgREST code ('PGRST204'), or 'thrown'. */
  code: string
  /** The HTTP status PostgREST answered with, when it answered at all. */
  status: number | null
  /** The error's message, quoted values removed, at most 300 characters. */
  message: string
}

/** Where the browser sends a report. */
export const SAVE_FAILURE_ENDPOINT = '/api/save-failures'

const CODE = /^[A-Za-z0-9_-]{1,16}$/
const IDENTIFIER = /^[A-Za-z_][A-Za-z0-9_.]{0,62}$/
const MAX_MESSAGE = 300

/**
 * The message with anything quoted that is not a database identifier
 * replaced by "…": Postgres quotes names ("practice_sessions") and values
 * ("12.5") alike, and only the names may leave the student's browser.
 */
export function sanitiseSaveMessage(message: unknown): string {
  if (typeof message !== 'string') return ''
  return message
    .replace(/"([^"]*)"/g, (_, inner: string) => (IDENTIFIER.test(inner) ? `"${inner}"` : '"…"'))
    .replace(/'([^']*)'/g, (_, inner: string) => (IDENTIFIER.test(inner) ? `'${inner}'` : "'…'"))
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, MAX_MESSAGE)
}

const validStatus = (s: unknown): s is number =>
  typeof s === 'number' && Number.isInteger(s) && s >= 100 && s < 600

/**
 * The parts of an error a report may carry. Reads `code`, `status` and
 * `message` only; `details` and `hint` are never read.
 */
export function describeSaveError(
  err: unknown,
  status?: number | null,
): Omit<SaveFailureReport, 'path'> {
  const e = (err !== null && typeof err === 'object' ? err : {}) as {
    code?: unknown
    status?: unknown
    message?: unknown
  }
  const code = typeof e.code === 'string' && CODE.test(e.code) ? e.code : 'thrown'
  const s = validStatus(status) ? status : validStatus(e.status) ? e.status : null
  return { code, status: s, message: sanitiseSaveMessage(e.message) }
}

/**
 * A request body as the server accepts it, or null. Only the four fields of a
 * report survive, each re-checked, so a body carrying anything else (an
 * answer, a `details` field) is reduced to the report or refused.
 */
export function parseSaveFailureReport(body: unknown): SaveFailureReport | null {
  if (body === null || typeof body !== 'object') return null
  const b = body as Record<string, unknown>
  const path = SAVE_PATHS.find((p) => p === b.path)
  if (!path) return null
  if (typeof b.code !== 'string' || !CODE.test(b.code)) return null
  return {
    path,
    code: b.code,
    status: validStatus(b.status) ? b.status : null,
    message: sanitiseSaveMessage(b.message),
  }
}

export type SaveFailureReporter = (path: SavePath, err: unknown, status?: number | null) => void

/**
 * Sends a report and returns at once. Never waits and never throws: a save
 * that failed must not also cost the student the screen in front of them.
 */
export const reportSaveFailure: SaveFailureReporter = (path, err, status) => {
  try {
    const report: SaveFailureReport = { path, ...describeSaveError(err, status) }
    void fetch(SAVE_FAILURE_ENDPOINT, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(report),
      credentials: 'same-origin',
      keepalive: true,
    }).catch(() => {})
  } catch {
    // Reporting is best effort by design; the save's own outcome is already
    // on the student's screen.
  }
}
