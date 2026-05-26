// ─── Versioning Capture ──────────────────────────────────────────────────────
//
// Every AI mark must record WHAT produced it (EU AI Act Art. 12 traceability):
// the model/provider/settings, the exact prompt text (content-hashed) and the
// rubric/mark-scheme version (content-hashed). This module upserts-by-unique
// into the three lookup tables and returns their ids for the
// `marking_submissions.{model,prompt,rubric}_version_id` columns.
//
// CONTRACT: best-effort. Any failure (table missing pre-migration, race, RLS)
// returns nulls for the affected id(s) and NEVER throws - a provenance gap must
// never break marking. Uses the Supabase SERVICE client only (these *_versions
// tables have no authenticated RLS policy).
//
// Uniqueness keys (mirror supabase/migrations/20260518_smart_ip_marking.sql):
//   • model_versions  : (provider, model_name, model_version)
//   • prompt_versions : (content_hash)            - global unique
//   • rubric_versions : (mark_scheme_id, content_hash)
// We SELECT-existing-first then INSERT, swallowing a duplicate-race by
// re-selecting, so concurrent marks converge on the same row.
// ────────────────────────────────────────────────────────────────────────────

import type { SupabaseClient } from '@supabase/supabase-js'
import { ANTHROPIC_MODEL } from '@/lib/anthropic-client'
import { hashAuditInput } from '@/lib/ai-audit-log'

export interface CaptureVersionsInput {
  /** The fully-built prompt text (system + user) used for this mark. */
  promptText: string
  markSchemeId: string
  /** Mark-scheme version label (falls back to 'v1.0' to match the column default). */
  schemeVersion: string
  examBoard: string
  qualification?: string | null
}

export interface CapturedVersionIds {
  modelVersionId: string | null
  promptVersionId: string | null
  rubricVersionId: string | null
}

// ─── Small helpers ───────────────────────────────────────────────────────────

/** Treat a "duplicate key" Postgres error (23505) as a benign race. */
function isUniqueViolation(error: unknown): boolean {
  return (error as { code?: string } | null)?.code === '23505'
}

async function selectId(
  svc: SupabaseClient,
  table: string,
  match: Record<string, string>,
): Promise<string | null> {
  try {
    let q = svc.from(table).select('id')
    for (const [k, v] of Object.entries(match)) q = q.eq(k, v)
    const { data, error } = await q.limit(1).maybeSingle()
    if (error || !data) return null
    return (data as { id: string }).id
  } catch {
    return null
  }
}

/**
 * Get-or-create one lookup row. Selects on `selectMatch` first; if absent,
 * inserts `insertRow`; on a unique-violation race re-selects. Returns the id
 * or null - never throws.
 */
async function upsertByUnique(
  svc: SupabaseClient,
  table: string,
  selectMatch: Record<string, string>,
  insertRow: Record<string, unknown>,
): Promise<string | null> {
  try {
    const existing = await selectId(svc, table, selectMatch)
    if (existing) return existing

    const { data, error } = await svc.from(table).insert(insertRow).select('id').single()
    if (!error && data) return (data as { id: string }).id

    // Lost an insert race (or unique hit) - the row now exists; re-select.
    if (isUniqueViolation(error)) {
      return await selectId(svc, table, selectMatch)
    }
    return null
  } catch {
    return null
  }
}

// ─── Public API ──────────────────────────────────────────────────────────────

/**
 * Capture (get-or-create) the model / prompt / rubric version rows for an AI
 * mark and return their ids. Best-effort: returns nulls on any failure.
 */
export async function captureVersions(
  svc: SupabaseClient,
  input: CaptureVersionsInput,
): Promise<CapturedVersionIds> {
  const result: CapturedVersionIds = {
    modelVersionId: null,
    promptVersionId: null,
    rubricVersionId: null,
  }

  try {
    // 1. Model - provider 'anthropic', name/version both ANTHROPIC_MODEL.
    result.modelVersionId = await upsertByUnique(
      svc,
      'model_versions',
      { provider: 'anthropic', model_name: ANTHROPIC_MODEL, model_version: ANTHROPIC_MODEL },
      {
        provider: 'anthropic',
        model_name: ANTHROPIC_MODEL,
        model_version: ANTHROPIC_MODEL,
        is_active: true,
      },
    )

    // 2. Rubric - content_hash over (markSchemeId + schemeVersion).
    const schemeVersion = input.schemeVersion || 'v1.0'
    const rubricHash = hashAuditInput(`${input.markSchemeId}${schemeVersion}`)
    result.rubricVersionId = await upsertByUnique(
      svc,
      'rubric_versions',
      { mark_scheme_id: input.markSchemeId, content_hash: rubricHash },
      {
        mark_scheme_id: input.markSchemeId,
        scheme_version: schemeVersion,
        content_hash: rubricHash,
        exam_board: input.examBoard,
        qualification: input.qualification ?? null,
        is_active: true,
      },
    )

    // 3. Prompt - content_hash over the full prompt text; key by board:scheme.
    const promptHash = hashAuditInput(input.promptText)
    result.promptVersionId = await upsertByUnique(
      svc,
      'prompt_versions',
      { content_hash: promptHash },
      {
        prompt_key: `${input.examBoard}:${input.markSchemeId}`,
        exam_board: input.examBoard,
        prompt_text: input.promptText,
        content_hash: promptHash,
        rubric_version_id: result.rubricVersionId,
        active: true,
      },
    )
  } catch {
    // Defensive - upsertByUnique already self-suppresses, but never let a
    // provenance failure escape into the marking path.
  }

  return result
}
