// ─── Smart IP - Versioning admin data-access ────────────────────────────────
//
// Service-role-backed, PURE DATA-ACCESS helpers for the platform-admin
// versioning surfaces (model_versions / prompt_versions / rubric_versions).
//
// SCOPE: read/list + the small set of admin mutations the prompt/rubric
// management pages need (create a prompt version, flip the active flag).
// Deliberately NO marking-time logic here - capturing which version produced
// a given mark is a separate workstream and is intentionally NOT implemented
// in this file.
//
// DB RULE: these tables are RLS deny-by-default with a service_role ALL
// policy and NO authenticated policy (see
// supabase/migrations/20260518_smart_ip_marking.sql §5). They are therefore
// reachable ONLY via createServiceRoleClient(). Prisma is intentionally not
// used (client not regenerated for these tables on the Windows box).
//
// Every function is empty-table-safe: a missing table or a query error
// degrades to an empty list / a structured error result rather than throwing,
// so the admin UI renders an empty state instead of a 500.
// ────────────────────────────────────────────────────────────────────────────

import { createServiceRoleClient } from '@/lib/supabase/server'
import { createHash } from 'crypto'

// ─── Row shapes (mirror the frozen migration columns) ────────────────────────

export interface ModelVersionRow {
  id: string
  provider: string
  model_name: string
  model_version: string
  temperature: number | null
  settings: Record<string, unknown>
  is_active: boolean
  created_at: string
}

export interface PromptVersionRow {
  id: string
  prompt_key: string
  subject: string | null
  exam_board: string | null
  question_type: string | null
  prompt_text: string
  content_hash: string
  rubric_version_id: string | null
  active: boolean
  created_at: string
  updated_at: string
}

export interface RubricVersionRow {
  id: string
  mark_scheme_id: string
  scheme_version: string
  content_hash: string
  exam_board: string | null
  qualification: string | null
  source_url: string | null
  is_active: boolean
  created_at: string
}

/** Uniform result wrapper so callers never have to try/catch. */
export interface DataResult<T> {
  ok: boolean
  data: T
  /** Present only when ok === false; safe, non-leaky message. */
  error?: string
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Stable SHA-256 of prompt text. The migration keys prompt_versions by a
 * UNIQUE (content_hash); we derive it deterministically so the same text is
 * never stored twice and "is this already a version?" is a pure function.
 */
export function hashContent(text: string): string {
  return createHash('sha256').update(text, 'utf8').digest('hex')
}

function fail<T>(fallback: T, err: unknown, where: string): DataResult<T> {
  // Most likely cause in this codebase: the migration hasn't been applied to
  // the target DB yet, so the table/relation does not exist. We log for ops
  // but present an empty-state-safe result to the caller.
  console.error(`[versioning/admin ${where}]`, err)
  return { ok: false, data: fallback, error: 'Versioning store unavailable' }
}

// ─── model_versions ──────────────────────────────────────────────────────────

/** All model versions, newest first. Empty list if table absent/empty. */
export async function listModelVersions(): Promise<DataResult<ModelVersionRow[]>> {
  try {
    const supabase = createServiceRoleClient()
    const { data, error } = await supabase
      .from('model_versions')
      .select(
        'id, provider, model_name, model_version, temperature, settings, is_active, created_at',
      )
      .order('created_at', { ascending: false })
    if (error) return fail<ModelVersionRow[]>([], error, 'listModelVersions')
    return { ok: true, data: (data ?? []) as ModelVersionRow[] }
  } catch (err) {
    return fail<ModelVersionRow[]>([], err, 'listModelVersions')
  }
}

/**
 * Mark one model version active and (atomically in intent) all others of the
 * SAME (provider, model_name) inactive - there should be exactly one live
 * model per provider/model. Two writes; the deactivate is best-effort and
 * never blocks the activation.
 */
export async function activateModelVersion(
  id: string,
): Promise<DataResult<ModelVersionRow | null>> {
  try {
    const supabase = createServiceRoleClient()

    const { data: target, error: findErr } = await supabase
      .from('model_versions')
      .select('id, provider, model_name')
      .eq('id', id)
      .maybeSingle()
    if (findErr) return fail<ModelVersionRow | null>(null, findErr, 'activateModelVersion.find')
    if (!target) return { ok: false, data: null, error: 'Model version not found' }

    // Deactivate siblings first (best-effort).
    await supabase
      .from('model_versions')
      .update({ is_active: false })
      .eq('provider', target.provider)
      .eq('model_name', target.model_name)
      .neq('id', id)

    const { data: updated, error: updErr } = await supabase
      .from('model_versions')
      .update({ is_active: true })
      .eq('id', id)
      .select(
        'id, provider, model_name, model_version, temperature, settings, is_active, created_at',
      )
      .maybeSingle()
    if (updErr) return fail<ModelVersionRow | null>(null, updErr, 'activateModelVersion.update')
    return { ok: true, data: (updated ?? null) as ModelVersionRow | null }
  } catch (err) {
    return fail<ModelVersionRow | null>(null, err, 'activateModelVersion')
  }
}

// ─── prompt_versions ─────────────────────────────────────────────────────────

/** All prompt versions, newest first (optionally filtered by prompt_key). */
export async function listPromptVersions(
  promptKey?: string,
): Promise<DataResult<PromptVersionRow[]>> {
  try {
    const supabase = createServiceRoleClient()
    let query = supabase
      .from('prompt_versions')
      .select(
        'id, prompt_key, subject, exam_board, question_type, prompt_text, content_hash, rubric_version_id, active, created_at, updated_at',
      )
      .order('created_at', { ascending: false })
    if (promptKey) query = query.eq('prompt_key', promptKey)
    const { data, error } = await query
    if (error) return fail<PromptVersionRow[]>([], error, 'listPromptVersions')
    return { ok: true, data: (data ?? []) as PromptVersionRow[] }
  } catch (err) {
    return fail<PromptVersionRow[]>([], err, 'listPromptVersions')
  }
}

export interface CreatePromptVersionInput {
  prompt_key: string
  prompt_text: string
  subject?: string | null
  exam_board?: string | null
  question_type?: string | null
  rubric_version_id?: string | null
  /** When true (default) the new version is created active and supersedes
   * every other version that shares its prompt_key. */
  activate?: boolean
}

/**
 * Create a new prompt version. The migration enforces UNIQUE (content_hash),
 * so re-submitting identical text is treated as "already a version": we look
 * it up and (re)activate it instead of erroring.
 *
 * When `activate` (default true): every OTHER version of the same prompt_key
 * is set inactive, then this row is set active - so there is a single live
 * prompt per key.
 */
export async function createPromptVersion(
  input: CreatePromptVersionInput,
): Promise<DataResult<PromptVersionRow | null>> {
  const promptKey = input.prompt_key?.trim()
  const promptText = input.prompt_text?.trim()
  if (!promptKey) return { ok: false, data: null, error: 'prompt_key is required' }
  if (!promptText) return { ok: false, data: null, error: 'prompt_text is required' }

  const activate = input.activate !== false
  const content_hash = hashContent(promptText)

  try {
    const supabase = createServiceRoleClient()

    // Idempotency: identical text already stored?
    const { data: existing, error: existErr } = await supabase
      .from('prompt_versions')
      .select(
        'id, prompt_key, subject, exam_board, question_type, prompt_text, content_hash, rubric_version_id, active, created_at, updated_at',
      )
      .eq('content_hash', content_hash)
      .maybeSingle()
    if (existErr) return fail<PromptVersionRow | null>(null, existErr, 'createPromptVersion.exist')

    let row = existing as PromptVersionRow | null

    if (!row) {
      const { data: inserted, error: insErr } = await supabase
        .from('prompt_versions')
        .insert({
          prompt_key: promptKey,
          prompt_text: promptText,
          content_hash,
          subject: input.subject ?? null,
          exam_board: input.exam_board ?? null,
          question_type: input.question_type ?? null,
          rubric_version_id: input.rubric_version_id ?? null,
          active: activate,
        })
        .select(
          'id, prompt_key, subject, exam_board, question_type, prompt_text, content_hash, rubric_version_id, active, created_at, updated_at',
        )
        .maybeSingle()
      if (insErr) return fail<PromptVersionRow | null>(null, insErr, 'createPromptVersion.insert')
      row = inserted as PromptVersionRow | null
    }

    if (row && activate) {
      // Single live prompt per key: deactivate siblings, ensure this active.
      await supabase
        .from('prompt_versions')
        .update({ active: false, updated_at: new Date().toISOString() })
        .eq('prompt_key', promptKey)
        .neq('id', row.id)
      const { data: act, error: actErr } = await supabase
        .from('prompt_versions')
        .update({ active: true, updated_at: new Date().toISOString() })
        .eq('id', row.id)
        .select(
          'id, prompt_key, subject, exam_board, question_type, prompt_text, content_hash, rubric_version_id, active, created_at, updated_at',
        )
        .maybeSingle()
      if (actErr) return fail<PromptVersionRow | null>(null, actErr, 'createPromptVersion.activate')
      row = (act ?? row) as PromptVersionRow
    }

    return { ok: true, data: row }
  } catch (err) {
    return fail<PromptVersionRow | null>(null, err, 'createPromptVersion')
  }
}

/**
 * Activate one prompt version and deactivate every other version of the same
 * prompt_key (single live prompt per key).
 */
export async function activatePromptVersion(
  id: string,
): Promise<DataResult<PromptVersionRow | null>> {
  try {
    const supabase = createServiceRoleClient()
    const { data: target, error: findErr } = await supabase
      .from('prompt_versions')
      .select('id, prompt_key')
      .eq('id', id)
      .maybeSingle()
    if (findErr) return fail<PromptVersionRow | null>(null, findErr, 'activatePromptVersion.find')
    if (!target) return { ok: false, data: null, error: 'Prompt version not found' }

    await supabase
      .from('prompt_versions')
      .update({ active: false, updated_at: new Date().toISOString() })
      .eq('prompt_key', target.prompt_key)
      .neq('id', id)

    const { data: updated, error: updErr } = await supabase
      .from('prompt_versions')
      .update({ active: true, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select(
        'id, prompt_key, subject, exam_board, question_type, prompt_text, content_hash, rubric_version_id, active, created_at, updated_at',
      )
      .maybeSingle()
    if (updErr) return fail<PromptVersionRow | null>(null, updErr, 'activatePromptVersion.update')
    return { ok: true, data: (updated ?? null) as PromptVersionRow | null }
  } catch (err) {
    return fail<PromptVersionRow | null>(null, err, 'activatePromptVersion')
  }
}

/** Deactivate a single prompt version (no sibling promotion). */
export async function deactivatePromptVersion(
  id: string,
): Promise<DataResult<PromptVersionRow | null>> {
  try {
    const supabase = createServiceRoleClient()
    const { data: updated, error } = await supabase
      .from('prompt_versions')
      .update({ active: false, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select(
        'id, prompt_key, subject, exam_board, question_type, prompt_text, content_hash, rubric_version_id, active, created_at, updated_at',
      )
      .maybeSingle()
    if (error) return fail<PromptVersionRow | null>(null, error, 'deactivatePromptVersion')
    if (!updated) return { ok: false, data: null, error: 'Prompt version not found' }
    return { ok: true, data: updated as PromptVersionRow }
  } catch (err) {
    return fail<PromptVersionRow | null>(null, err, 'deactivatePromptVersion')
  }
}

// ─── rubric_versions (read-only) ─────────────────────────────────────────────

/** All rubric versions, newest first. Rubrics are content-hash pointers to
 * the in-code mark schemes; this surface is read-only by design. */
export async function listRubricVersions(): Promise<DataResult<RubricVersionRow[]>> {
  try {
    const supabase = createServiceRoleClient()
    const { data, error } = await supabase
      .from('rubric_versions')
      .select(
        'id, mark_scheme_id, scheme_version, content_hash, exam_board, qualification, source_url, is_active, created_at',
      )
      .order('created_at', { ascending: false })
    if (error) return fail<RubricVersionRow[]>([], error, 'listRubricVersions')
    return { ok: true, data: (data ?? []) as RubricVersionRow[] }
  } catch (err) {
    return fail<RubricVersionRow[]>([], err, 'listRubricVersions')
  }
}
