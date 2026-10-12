/**
 * POST /api/school/bulk-upload/commit
 *
 * A school administrator's commit of a validated pupil CSV. This route does
 * the two things that are the school's own:
 *
 *   1. Authenticate. Require the `admin` school role; the school is the one
 *      the administrator's membership belongs to.
 *   2. Rate limit, per school and per IP, because this endpoint writes.
 *
 * then parses the JSON body - `{ rows: StudentRow[], fileName, idempotencyKey }`
 * - and hands it to commitBulkUpload (src/lib/school/bulk-upload-commit.ts),
 * which the operator's setup page (/api/admin/schools/[schoolId]/pupils) also
 * uses. That module's header lists the steps: idempotency, the job row,
 * accounts and the transaction, welcome emails, member links, class places,
 * and the per-row report of everything that failed.
 *
 * Extracted 12 October 2026 so the operator path runs exactly this pipeline
 * rather than a second copy of it. Tested by `./route.test.ts`:
 *   - RBAC (non-admin → 403, signed out → 401)
 *   - idempotency (same key twice returns same body; writes once)
 *   - transactional rollback on partial failure (no welcome email is sent)
 *   - welcome emails after the commit, in one batch, each with its password
 *   - accounts a few at a time, revoked when they run out of time
 *   - only a completed job is replayed for a repeated idempotency key
 *   - an existing pupil is linked by their Supabase id
 *
 * On 11 October 2026 production had no BulkUploadJob table (known drift in
 * scripts/schema-drift-known.json; nothing in the build applies
 * prisma/migrations/), so this route failed at its first query. 20261011
 * created it; check information_schema, not this comment, before relying on
 * it.
 */

import { NextRequest, NextResponse } from 'next/server'

import { createServerSupabaseClient } from '@/lib/supabase/server'
import { verifySchoolMember } from '@/lib/school-auth'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { commitBulkUpload } from '@/lib/school/bulk-upload-commit'
import type { StudentRow } from '@/lib/school/csv-parse'

export const dynamic = 'force-dynamic'

// The account phase, a full revocation, and the member links and class places
// all happen inside this request; see "The time budget" in
// src/lib/school/bulk-upload-commit.ts. Under the 125 s Cloudflare waits for
// this site's origin. A literal, because Next reads it statically.
export const maxDuration = 120

interface CommitRequestBody {
  readonly fileName: string
  readonly idempotencyKey: string
  readonly rows: ReadonlyArray<StudentRow>
}

export async function POST(request: NextRequest) {
  try {
    // 1. Auth
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const member = await verifySchoolMember(user.id, ['admin'])
    if (!member) {
      return NextResponse.json({ error: 'Forbidden: school admin role required' }, { status: 403 })
    }
    const schoolId = member.school_id as string

    // 2. Rate limit - stricter than validate because this endpoint writes.
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`bulk-upload-commit-school:${schoolId}`, {
      limit: 5,
      windowSeconds: 3600,
    })
    const rlIp = await rateLimit(`bulk-upload-commit-ip:${ip}`, {
      limit: 15,
      windowSeconds: 3600,
    })
    if (!rl.success || !rlIp.success) {
      const resetAt = Math.min(
        rl.success ? Infinity : rl.resetAt,
        rlIp.success ? Infinity : rlIp.resetAt,
      )
      return NextResponse.json(
        {
          error: 'Rate limit exceeded. Maximum 5 bulk commits per hour per school.',
        },
        {
          status: 429,
          headers: {
            'Retry-After': String(Math.ceil((resetAt - Date.now()) / 1000)),
          },
        },
      )
    }

    // 3. Parse the body; commitBulkUpload checks its fields.
    let body: CommitRequestBody
    try {
      body = (await request.json()) as CommitRequestBody
    } catch {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
    }
    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { error: 'Body must include fileName, idempotencyKey, and rows[]' },
        { status: 422 },
      )
    }

    const result = await commitBulkUpload({
      schoolId,
      actorUserId: user.id,
      fileName: body.fileName,
      idempotencyKey: body.idempotencyKey,
      rows: body.rows,
    })
    return NextResponse.json(result.body, { status: result.status })
  } catch (err) {
    console.error('bulk-upload.commit error', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
