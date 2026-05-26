/**
 * POST /api/school/bulk-upload/commit
 *
 * Admin-gated, transactional commit of a validated student CSV. The flow is:
 *
 *   1. Authenticate. Require `admin` school role (site admins bypass).
 *   2. Parse the JSON body - expect `{ rows: StudentRow[], fileName, idempotencyKey }`.
 *   3. Short-circuit on a duplicate `idempotencyKey`: return the cached result.
 *   4. Insert a BulkUploadJob row with status='pending'.
 *   5. For each row, either upsert the Prisma User (re-use existing by email,
 *      otherwise create with a temporary password) and link/update the class
 *      membership in Supabase. Collect per-row errors without aborting the batch.
 *      Either everything in the Prisma transaction succeeds or the job row is
 *      flipped to 'failed' and nothing is persisted.
 *   6. Fire welcome emails for freshly-created users (best-effort).
 *   7. Stamp completedAt and return `{ jobId, created, updated, skipped, errors }`.
 *
 * Tested by `./route.test.ts`:
 *   - idempotency (same key twice returns same body; writes once)
 *   - transactional rollback on partial failure (Prisma-level failure reverts
 *     every row in the batch)
 *   - RBAC (non-admin → 403)
 */

import { NextRequest, NextResponse } from 'next/server'
import { randomBytes, randomUUID } from 'crypto'

import { prisma } from '@/lib/prisma'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { verifySchoolMember } from '@/lib/school-auth'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { sendEmail } from '@/lib/email'
import type { StudentRow, ParseError } from '@/lib/school/csv-parse'

export const dynamic = 'force-dynamic'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface CommitRequestBody {
  readonly fileName: string
  readonly idempotencyKey: string
  readonly rows: ReadonlyArray<StudentRow>
}

interface PerRowOutcome {
  readonly row: number
  readonly email: string
  readonly action: 'created' | 'updated' | 'skipped'
}

interface CommitResponse {
  readonly jobId: string
  readonly created: number
  readonly updated: number
  readonly skipped: number
  readonly errors: ReadonlyArray<ParseError>
  readonly outcomes: ReadonlyArray<PerRowOutcome>
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const TEMP_PASSWORD_CHARSET = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789'

/**
 * Cryptographically-secure 10-char temporary password. Displayed once in the
 * welcome email; the learner is required to change it on first login (same
 * convention as the legacy /api/school/import endpoint).
 */
function generateTempPassword(length = 10): string {
  const bytes = randomBytes(length)
  let out = ''
  for (let i = 0; i < length; i++) {
    out += TEMP_PASSWORD_CHARSET[bytes[i] % TEMP_PASSWORD_CHARSET.length]
  }
  return out
}

function welcomeEmailHtml(params: {
  firstName: string
  tempPassword: string
  loginUrl: string
}): string {
  return `
    <p>Hi ${escapeHtml(params.firstName)},</p>
    <p>Your school has created an English Hub account for you.</p>
    <p>Sign in here: <a href="${params.loginUrl}">${params.loginUrl}</a></p>
    <p>Temporary password: <code>${escapeHtml(params.tempPassword)}</code></p>
    <p>You will be prompted to set a new password on first sign-in.</p>
    <p>- The English Hub team</p>
  `
}

function escapeHtml(v: string): string {
  return v
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

// A conservative duplicate-of-header regex - if the row somehow survived to
// this point with an obvious non-value in a required field we skip it rather
// than crash the batch.
function looksLikeUsableRow(r: StudentRow): boolean {
  return (
    typeof r.email === 'string' &&
    r.email.includes('@') &&
    r.firstName.trim().length > 0 &&
    r.lastName.trim().length > 0 &&
    r.classCode.trim().length > 0
  )
}

// ---------------------------------------------------------------------------
// Route handler
// ---------------------------------------------------------------------------

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

    // 3. Parse + validate body
    let body: CommitRequestBody
    try {
      body = (await request.json()) as CommitRequestBody
    } catch {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
    }

    if (
      !body ||
      typeof body.idempotencyKey !== 'string' ||
      body.idempotencyKey.length < 16 ||
      body.idempotencyKey.length > 128 ||
      typeof body.fileName !== 'string' ||
      !Array.isArray(body.rows)
    ) {
      return NextResponse.json(
        { error: 'Body must include fileName, idempotencyKey, and rows[]' },
        { status: 422 },
      )
    }
    if (body.rows.length === 0) {
      return NextResponse.json({ error: 'No rows to import.' }, { status: 422 })
    }
    if (body.rows.length > 500) {
      return NextResponse.json({ error: 'Maximum 500 rows per commit.' }, { status: 422 })
    }

    // 4. Idempotency short-circuit.
    const existing = await prisma.bulkUploadJob.findUnique({
      where: { idempotencyKey: body.idempotencyKey },
    })
    if (existing) {
      return NextResponse.json(
        {
          jobId: existing.id,
          created: existing.createdCount,
          updated: existing.updatedCount,
          skipped: existing.skippedCount,
          errors: (existing.errorsJson as unknown as ReadonlyArray<ParseError> | null) ?? [],
          outcomes: [],
          idempotent: true,
        },
        { status: 200 },
      )
    }

    // 5. Create the pending job row before any writes.
    const job = await prisma.bulkUploadJob.create({
      data: {
        id: randomUUID(),
        adminUserId: user.id,
        schoolId,
        fileName: body.fileName.slice(0, 200),
        idempotencyKey: body.idempotencyKey,
        rowCount: body.rows.length,
        status: 'pending',
      },
    })

    // 6. Load existing Prisma users by email - one query, set semantics.
    const normalisedRows = body.rows.filter(looksLikeUsableRow)
    const emails = Array.from(new Set(normalisedRows.map((r) => r.email.toLowerCase())))
    const existingUsers = await prisma.user.findMany({
      where: { email: { in: emails } },
      select: { id: true, email: true },
    })
    const existingByEmail = new Map(existingUsers.map((u) => [u.email.toLowerCase(), u]))

    // 7. Transactional commit. The Prisma transaction wraps all DB writes to
    //    the Prisma-owned tables (`User`, `BulkUploadJob`). Supabase-side
    //    writes (auth users + school_members) happen outside the Prisma tx
    //    because they live in a different backing store; on transaction
    //    failure we roll back the auth side by revoking what we just created.
    const createdAuthIds: Array<{ email: string; authId: string }> = []
    const outcomes: PerRowOutcome[] = []
    const errors: ParseError[] = []
    let createdCount = 0
    let updatedCount = 0
    let skippedCount = 0

    const admin = createServiceRoleClient()

    try {
      await prisma.$transaction(async (tx) => {
        for (const row of normalisedRows) {
          const email = row.email.toLowerCase()
          const existing = existingByEmail.get(email)

          if (existing) {
            // Existing user: refresh class assignment in Supabase
            // school_members without touching Prisma's `User` row (leave
            // their name, DOB, consent untouched).
            outcomes.push({ row: row.row, email, action: 'updated' })
            updatedCount++
            continue
          }

          // New user: create the auth user first so we have a Supabase UID.
          const tempPassword = generateTempPassword()
          const { data: authData, error: authErr } = await admin.auth.admin.createUser({
            email,
            password: tempPassword,
            email_confirm: true,
            user_metadata: {
              full_name: `${row.firstName} ${row.lastName}`,
              role: 'STUDENT',
              school_id: schoolId,
              bulk_upload_job_id: job.id,
            },
          })
          if (authErr || !authData?.user) {
            errors.push({
              row: row.row,
              field: 'email',
              code: 'INVALID_EMAIL',
              message: `Failed to create auth user for ${email}.`,
            })
            skippedCount++
            outcomes.push({ row: row.row, email, action: 'skipped' })
            continue
          }
          const authId = authData.user.id
          createdAuthIds.push({ email, authId })

          await tx.user.create({
            data: {
              email,
              supabaseUserId: authId,
              passwordHash: '',
              firstName: row.firstName,
              lastName: row.lastName,
              // Bulk-upload has no DOB; the child-safety flow requires it on
              // self-signup but is deferred to first-login for admin-managed
              // accounts. Use a far-past placeholder that the login flow
              // prompts the user to correct.
              dateOfBirth: new Date('2000-01-01'),
              country: 'GB',
              role: 'STUDENT',
              school: schoolId,
              isMinor: true,
            },
          })

          createdCount++
          outcomes.push({ row: row.row, email, action: 'created' })

          // Schedule welcome email (fire-and-forget; we do not await inside
          // the tx to keep the transaction short).
          const loginUrl = 'https://theenglishhub.app/login'
          void sendEmail(
            email,
            'Your English Hub account',
            welcomeEmailHtml({
              firstName: row.firstName,
              tempPassword,
              loginUrl,
            }),
          ).catch((e) => {
            console.warn('bulk-upload: welcome email failed', email, e)
          })
        }

        // Flip the job row to completed inside the same tx.
        await tx.bulkUploadJob.update({
          where: { id: job.id },
          data: {
            status: 'completed',
            successCount: createdCount + updatedCount,
            createdCount,
            updatedCount,
            skippedCount,
            errorCount: errors.length,
            errorsJson: errors as unknown as object,
            completedAt: new Date(),
          },
        })
      })
    } catch (txErr) {
      // Prisma tx rolled back. Revoke any auth users we created outside it so
      // the commit is atomic end-to-end.
      console.error('bulk-upload.commit: tx failed, rolling back', txErr)
      for (const { authId } of createdAuthIds) {
        try {
          await admin.auth.admin.deleteUser(authId)
        } catch (e) {
          console.warn('bulk-upload.commit: failed to revoke auth user', e)
        }
      }
      await prisma.bulkUploadJob.update({
        where: { id: job.id },
        data: {
          status: 'failed',
          completedAt: new Date(),
          errorsJson: [
            {
              row: 0,
              code: 'INVALID_EMAIL',
              message:
                txErr instanceof Error
                  ? txErr.message
                  : 'Transactional commit failed; no rows were persisted.',
            },
          ] as unknown as object,
        },
      })
      return NextResponse.json(
        {
          error: 'Commit failed. No accounts were created. Please review errors and retry.',
        },
        { status: 500 },
      )
    }

    // 8. Link Supabase school_members for every row (best-effort; outside tx).
    for (const row of normalisedRows) {
      try {
        const email = row.email.toLowerCase()
        const authId =
          createdAuthIds.find((a) => a.email === email)?.authId ?? existingByEmail.get(email)?.id
        if (!authId) continue
        await admin.from('school_members').upsert(
          {
            school_id: schoolId,
            user_id: authId,
            role: 'student',
            full_name: `${row.firstName} ${row.lastName}`,
            email,
            invite_status: 'accepted',
            year_group: row.yearGroup,
            class_code: row.classCode,
          },
          { onConflict: 'school_id,user_id' },
        )
      } catch (e) {
        console.warn('bulk-upload.commit: school_members upsert failed', row.email, e)
      }
    }

    const response: CommitResponse = {
      jobId: job.id,
      created: createdCount,
      updated: updatedCount,
      skipped: skippedCount,
      errors,
      outcomes,
    }
    return NextResponse.json(response, { status: 200 })
  } catch (err) {
    console.error('bulk-upload.commit error', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
