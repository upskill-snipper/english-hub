/**
 * Types for `drift.mjs`.
 *
 * The comparison is plain JavaScript so that the CLI checker (a Node script)
 * and the health route (TypeScript, bundled by Next) can share one definition
 * of what drift means. This file is what makes it typed on the TypeScript side.
 */

export type DriftKind =
  | 'missing-table'
  | 'missing-column'
  | 'code-references-missing-table'
  | 'prisma-model-without-table'
  | 'missing-policy'
  | 'missing-index'
  | 'missing-trigger'
  | 'missing-function'

export interface DriftFinding {
  kind: DriftKind
  /** Table, `table.column`, `table:policy`, or object name. */
  object: string
  /** The migration file or source file that claims it exists. */
  declaredIn: string
  detail?: string
}

export interface IndexEntry {
  file: string
  table: string
}

export interface TriggerEntry {
  file: string
  table: string
  schema: string
}

export interface SchemaManifest {
  generatedAt: string
  tables: Record<string, string>
  columns: Record<string, string>
  codeTables: Record<string, string>
  prismaTables: Record<string, string>
  policies: Record<string, string>
  indexes: Record<string, IndexEntry>
  triggers: Record<string, TriggerEntry>
  functions: Record<string, string>
}

export interface LiveSchema {
  tables: string[]
  columns: string[]
  policies: string[]
  indexes: string[]
  /** `schema.triggername`, because one of them lives on `auth.users`. */
  triggers: string[]
  functions: string[]
}

export interface KnownDriftEntry {
  kind: DriftKind
  object: string
  why: string
}

export interface KnownDrift {
  allow: KnownDriftEntry[]
}

export interface DriftReport {
  /** Not on the allowlist. This is what makes the check fail. */
  introduced: DriftFinding[]
  /** On the allowlist: already known, already recorded, not news. */
  expected: DriftFinding[]
  /** Allowlisted but no longer drifting - remove these from the list. */
  stale: KnownDriftEntry[]
  checkedObjects: number
}

export function compareSchema(
  manifest: SchemaManifest,
  live: LiveSchema,
  known: KnownDrift,
): DriftReport

export function countExpectations(manifest: SchemaManifest): number
