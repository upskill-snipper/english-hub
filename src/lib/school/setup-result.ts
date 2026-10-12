/**
 * What one step of the operator's school setup did, row by row.
 *
 * The staff, classes and pupils routes under /api/admin/schools/[schoolId]
 * all answer in this shape, and the setup page renders it the same way for
 * each: what was created, updated, skipped and failed, with the sheet's row
 * number and a sentence saying what happened. A row can appear twice when two
 * things are true of it, for example a pupil whose account was created but
 * who could not be placed in their class: created, and failed.
 *
 * Types and pure helpers only, so the client page can import it.
 */

/** A school as the operator's routes read it. */
export interface OperatorSchool {
  readonly id: string
  readonly name: string
  readonly access_type: string | null
  readonly access_until: string | null
  readonly ai_authorised_at: string | null
  readonly ai_authorised_by: string | null
}

/** One school in GET /api/admin/schools. */
export interface OperatorSchoolSummary extends OperatorSchool {
  /** The note recorded with the latest AI authorisation, from the AuditLog. */
  readonly ai_authorisation_note: string | null
  /** null when that count could not be read; the reason is in `problems`. */
  readonly counts: {
    readonly members: number | null
    readonly pendingInvites: number | null
    readonly classes: number | null
    readonly pupils: number | null
  }
  /** Anything about this school that could not be read. */
  readonly problems: string[]
}

export interface SetupRow {
  /** The row in the pasted sheet (header = 1); null for an entry that is not one row. */
  readonly row: number | null
  /** Who or what the row is about: an email address or a class code. */
  readonly subject: string
  /** What happened, in a sentence. */
  readonly detail: string
}

export interface SetupResult {
  /** Data rows read from the sheet, before anything was done with them. */
  readonly totalRows: number
  readonly created: SetupRow[]
  readonly updated: SetupRow[]
  readonly skipped: SetupRow[]
  readonly failed: SetupRow[]
}

export interface MutableSetupResult {
  totalRows: number
  created: SetupRow[]
  updated: SetupRow[]
  skipped: SetupRow[]
  failed: SetupRow[]
}

export function newSetupResult(totalRows: number): MutableSetupResult {
  return { totalRows, created: [], updated: [], skipped: [], failed: [] }
}

/** Sheet order, with entries that are not one row last. */
export function sortSetupRows(rows: SetupRow[]): SetupRow[] {
  return [...rows].sort(
    (a, b) => (a.row ?? Number.MAX_SAFE_INTEGER) - (b.row ?? Number.MAX_SAFE_INTEGER),
  )
}

export function finishSetupResult(r: MutableSetupResult): SetupResult {
  return {
    totalRows: r.totalRows,
    created: sortSetupRows(r.created),
    updated: sortSetupRows(r.updated),
    skipped: sortSetupRows(r.skipped),
    failed: sortSetupRows(r.failed),
  }
}
