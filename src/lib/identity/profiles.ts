import * as Sentry from '@sentry/nextjs'
import { createServiceRoleClient } from '@/lib/supabase/server'

/**
 * The `profiles` columns the identity layer reads.
 *
 * `profiles` is written during Supabase signup for every account, including
 * the ~96% that never reached /api/auth/register (email confirmation is ON,
 * so there is no session at signup and the Prisma projection was never
 * written). It is therefore the only place a Supabase-native account's
 * declared details exist.
 *
 * Read-only. Nothing in src/lib/identity ever writes to `profiles`.
 */
export interface IdentityProfile {
  id: string
  email: string | null
  full_name: string | null
  date_of_birth: string | null
  is_minor: boolean | null
  role: string | null
  school_name: string | null
  exam_board: string | null
  created_at: string | null
}

const COLUMNS =
  'id, email, full_name, date_of_birth, is_minor, role, school_name, exam_board, created_at'

/**
 * Reads the Supabase `profiles` row for an auth user.
 *
 * Returns null both when there is no row and when the read fails. Callers
 * must treat null as "we do not know", never as "this is an adult" - see
 * resolveAgeBand in ./age.ts, which fails closed on it.
 *
 * FAILING CLOSED IS NOT THE SAME AS FAILING QUIETLY. This function returned a
 * bare null for four months while EVERY call failed, and nothing said so:
 * `COLUMNS` names `is_minor`, and `profiles.is_minor` did not exist in
 * production. The migration that creates it, 20260512_user_is_minor.sql, was
 * recorded as applied on 2026-05-30 in a burst of 66 files that the runner
 * BASELINED rather than executed (see `BASELINE_CUTOFF` in
 * scripts/apply-migrations.mjs), so the tracker said applied and the column
 * was absent. Postgres answered 42703, the `if (error || !data)` above threw
 * it away, and `resolveAgeBand` degraded to UNKNOWN for every account on a
 * children's product - correct behaviour, invisibly, for the wrong reason.
 *
 * So: "no row" is an ordinary answer and stays silent. A query that FAILED is
 * a defect and is now reported. It still returns null, because the gate must
 * stay closed, but somebody finds out.
 *
 * The column was created on 2026-09-18. This reporting is what stops the next
 * one hiding, and a schema-contract test would stop it sooner - see the
 * handover.
 */
export async function readIdentityProfile(supabaseUserId: string): Promise<IdentityProfile | null> {
  try {
    const admin = createServiceRoleClient()
    const { data, error } = await admin
      .from('profiles')
      .select(COLUMNS)
      .eq('id', supabaseUserId)
      .maybeSingle()

    if (error) {
      reportProfileReadFailure(error.code, error.message)
      return null
    }
    return (data as unknown as IdentityProfile) ?? null
  } catch (err) {
    reportProfileReadFailure(null, err instanceof Error ? err.message : String(err))
    return null
  }
}

/**
 * One greppable marker, and Sentry. Deliberately does NOT include the user id:
 * this fires per request when the schema is wrong, and the failure is a
 * property of the query, not of the person making it.
 */
function reportProfileReadFailure(code: string | null, message: string): void {
  const detail = code ? `${code}: ${message}` : message
  console.error(
    `[identity] IDENTITY_PROFILE_READ_FAILED ${detail}. ` +
      'resolveAgeBand() will return UNKNOWN for every account until this is fixed, ' +
      'which blocks every consent-gated AI route. If the code is 42703 the schema is ' +
      'missing a column this file selects - check information_schema.columns, not ' +
      '_migrations_applied, because the runner baselines files without executing them.',
  )
  Sentry.captureMessage(`IDENTITY_PROFILE_READ_FAILED ${detail}`, {
    level: 'error',
    tags: { defect: 'identity-profile-read' },
    fingerprint: ['identity-profile-read', code ?? 'unknown'],
  })
}
