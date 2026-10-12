/**
 * The gate and the school for the operator's setup routes,
 * /api/admin/schools/**.
 *
 * - The caller must be a site administrator: verifyAdmin, the check every
 *   /api/admin route and school provisioning use (docs/system/08, section 3).
 * - The school comes from the PATH and must exist. A site administrator has no
 *   real school membership (verifySchoolMember gives them the synthetic school
 *   '__site_admin__'), so the school is never derived from the caller.
 * - Everything runs on the service-role client: the operator is not a member
 *   of the school, so row-level security would show them nothing.
 */

import { NextResponse, type NextRequest } from 'next/server'
import type { SupabaseClient, User } from '@supabase/supabase-js'

import { verifyAdmin } from '@/lib/admin-auth'
import { rateLimit } from '@/lib/rate-limit'
import { isUuid } from '@/lib/school/is-uuid'
import type { OperatorSchool } from '@/lib/school/setup-result'

export type { OperatorSchool }

/** The roles in school_members that are staff rather than pupils. */
export const STAFF_ROLES = ['admin', 'head_of_department', 'teacher'] as const

const SCHOOL_COLUMNS = 'id, name, access_type, access_until, ai_authorised_at, ai_authorised_by'

/** 401 without a session, 403 for anyone who is not a site administrator. */
export async function requireOperator(): Promise<
  { user: User; response: null } | { user: null; response: NextResponse }
> {
  const { user, error } = await verifyAdmin()
  if (error === 'Unauthorized' || !user) {
    return { user: null, response: NextResponse.json({ error: 'Unauthorized' }, { status: 401 }) }
  }
  if (error === 'Forbidden') {
    return { user: null, response: NextResponse.json({ error: 'Forbidden' }, { status: 403 }) }
  }
  return { user, response: null }
}

/** A modest ceiling per operator, as every admin route has; null when within it. */
export async function operatorRateLimit(
  userId: string,
  bucket: string,
  limit: number,
): Promise<NextResponse | null> {
  const rl = await rateLimit(`${bucket}:${userId}`, { limit, windowSeconds: 60 })
  if (rl.success) return null
  return NextResponse.json(
    { error: 'Too many requests. Please wait a minute and try again.' },
    {
      status: 429,
      headers: { 'Retry-After': String(Math.max(1, Math.ceil((rl.resetAt - Date.now()) / 1000))) },
    },
  )
}

/**
 * The school named in the path: 404 when there is no such school (or the id
 * is not a uuid), 500 with the database's reason when it cannot be read.
 */
export async function loadSchool(
  admin: SupabaseClient,
  schoolId: string,
): Promise<{ school: OperatorSchool; response: null } | { school: null; response: NextResponse }> {
  if (!isUuid(schoolId)) {
    return {
      school: null,
      response: NextResponse.json({ error: 'School not found' }, { status: 404 }),
    }
  }
  const { data, error } = await admin
    .from('schools')
    .select(SCHOOL_COLUMNS)
    .eq('id', schoolId)
    .maybeSingle()
  if (error) {
    console.error('[admin/schools] school read failed', schoolId, error)
    return {
      school: null,
      response: NextResponse.json(
        { error: 'Could not read the school', detail: error.message ?? null },
        { status: 500 },
      ),
    }
  }
  if (!data) {
    return {
      school: null,
      response: NextResponse.json({ error: 'School not found' }, { status: 404 }),
    }
  }
  return { school: data as OperatorSchool, response: null }
}

/** The largest sheet a setup step accepts: 500 pupils is about 60 KB. */
const MAX_CSV_BYTES = 1_000_000

/**
 * The JSON body of a sheet step, `{ csv: string, ... }`. 400 for a body that
 * is not JSON, 422 for a missing or oversized sheet.
 */
export async function readSheetBody(
  request: NextRequest,
): Promise<
  | { csv: string; body: Record<string, unknown>; response: null }
  | { csv: null; body: null; response: NextResponse }
> {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return {
      csv: null,
      body: null,
      response: NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 }),
    }
  }
  const record = (body && typeof body === 'object' ? body : {}) as Record<string, unknown>
  const csv = record.csv
  if (typeof csv !== 'string' || csv.trim() === '') {
    return {
      csv: null,
      body: null,
      response: NextResponse.json(
        { error: 'Paste the sheet, or choose its .csv file, before running this step.' },
        { status: 422 },
      ),
    }
  }
  if (csv.length > MAX_CSV_BYTES) {
    return {
      csv: null,
      body: null,
      response: NextResponse.json(
        { error: 'That sheet is too large. Split it into smaller sheets and run each.' },
        { status: 413 },
      ),
    }
  }
  return { csv, body: record, response: null }
}
