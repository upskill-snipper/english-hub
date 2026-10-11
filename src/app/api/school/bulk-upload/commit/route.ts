/**
 * POST /api/school/bulk-upload/commit
 *
 * Admin-gated, transactional commit of a validated student CSV. The flow is:
 *
 *   1. Authenticate. Require `admin` school role (site admins bypass).
 *   2. Parse the JSON body - expect `{ rows: StudentRow[], fileName, idempotencyKey }`.
 *   3. Short-circuit on a duplicate `idempotencyKey`: return the cached result
 *      of a completed job; refuse a key whose job is running or failed.
 *   4. Insert a BulkUploadJob row with status='pending'.
 *   5. Create an auth user for each new pupil, a few at a time and outside any
 *      transaction, then record every new pupil's Prisma User row and complete
 *      the job in one short transaction. Collect per-row errors without
 *      aborting the batch. If the transaction fails, or the accounts take too
 *      long, every auth user created is revoked and nothing is persisted.
 *   6. Fire welcome emails for freshly-created users (best-effort, in batches),
 *      only once the transaction has committed (step 7d below).
 *   7. Link school_members, stamp completedAt and return
 *      `{ jobId, created, updated, skipped, errors }`.
 *
 * Tested by `./route.test.ts`:
 *   - idempotency (same key twice returns same body; writes once)
 *   - transactional rollback on partial failure (Prisma-level failure reverts
 *     every row in the batch, and no welcome email is sent)
 *   - RBAC (non-admin → 403)
 *   - welcome emails go out after the commit, in one batch, one per new
 *     pupil, each with the password its account was created with
 *   - no Supabase call runs inside the transaction, which has explicit
 *     options; accounts are made a few at a time and abandoned, and revoked,
 *     when they run out of time
 *   - only a completed job is replayed for a repeated idempotency key
 *   - an existing pupil is linked to school_members by their Supabase id
 *
 * On 11 October 2026 production had no BulkUploadJob table (known drift in
 * scripts/schema-drift-known.json; nothing in the build applies
 * prisma/migrations/), so this route failed at its first query. Check
 * information_schema, not this comment, before relying on it.
 */

import { NextRequest, NextResponse } from 'next/server'
import { randomBytes, randomUUID } from 'crypto'

import { prisma } from '@/lib/prisma'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { verifySchoolMember } from '@/lib/school-auth'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { sendEmailBatch } from '@/lib/email'
import { keepAlive } from '@/lib/keep-alive'
import { mapWithConcurrency } from '@/lib/concurrency'
import type { StudentRow, ParseError } from '@/lib/school/csv-parse'

export const dynamic = 'force-dynamic'

// ─── The time budget (11 October 2026) ──────────────────────────────────────
// This route could not have handled a real school. It created each pupil's
// auth user with a Supabase admin call INSIDE the Prisma transaction, one at
// a time. Prisma closes an interactive transaction after 5 s by default
// (6.19.3, and src/lib/prisma.ts sets no transactionOptions), so an upload of
// more than a few dozen new pupils would expire mid-way and roll back. Even
// outside a transaction, 500 calls one after another take minutes, while the
// function had vercel.json's 60 s. Stopped by the platform part-way, it would
// leave auth users that nothing ever revoked.
//
// Now the auth users are made SUPABASE_CONCURRENCY at a time, outside any
// transaction, with ACCOUNT_PHASE_BUDGET_MS to do it in. After that no new
// account is started, and the whole upload is revoked and refused, so the
// function always ends in its own rollback rather than the platform's kill.
// The transaction holds two statements (a createMany and the job update),
// under an explicit TRANSACTION_OPTIONS. maxDuration covers the account phase,
// a full revocation and the member links. It stays under the 125 s
// Cloudflare waits for this site's origin.
export const maxDuration = 120

/** Supabase admin calls in flight at once: account creation, revocation, member links. */
const SUPABASE_CONCURRENCY = 5
/** How long account creation may run before the upload is abandoned and revoked. */
const ACCOUNT_PHASE_BUDGET_MS = 60_000
/** The transaction does no network calls now; this bounds two statements. */
const TRANSACTION_OPTIONS = { maxWait: 10_000, timeout: 20_000 }

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
  /**
   * Emails whose school_members row could not be written. Reported rather than
   * logged, because this whole step failed silently for every import until
   * 19 September 2026 and the school was told the upload had succeeded.
   */
  readonly memberLinkFailures: ReadonlyArray<string>
  /**
   * How many rows supplied a class code that was NOT acted on. Class
   * membership lives in class_students and moves seat billing, so the import
   * does not assign classes; saying so is better than appearing to.
   */
  readonly classCodesNotAssigned: number
  readonly errors: ReadonlyArray<ParseError>
  readonly outcomes: ReadonlyArray<PerRowOutcome>
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const TEMP_PASSWORD_CHARSET = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789'

/**
 * Cryptographically-secure 10-char temporary password. Displayed once in the
 * welcome email; the learner is required to change it on first login.
 *
 * "Required" was aspirational until Aug 2026 - the account carried no flag and
 * nothing stopped the pupil using the emailed password forever. Rotation is
 * now enforced via `user_metadata.needs_password_change` (set below) plus the
 * /auth/set-password gate in src/lib/supabase/middleware.ts. The same flag is
 * set by the legacy /api/school/import endpoint.
 */
function generateTempPassword(length = 10): string {
  const bytes = randomBytes(length)
  let out = ''
  for (let i = 0; i < length; i++) {
    out += TEMP_PASSWORD_CHARSET[bytes[i] % TEMP_PASSWORD_CHARSET.length]
  }
  return out
}

/**
 * QA 2026-08-23: the password paragraph in this email said "This password works
 * once." Nothing makes it single use - the rotation gate in
 * src/lib/supabase/middleware.ts holds the account on /auth/set-password until
 * a new password is chosen, but the temporary password stays valid until that
 * happens and can be used to sign in repeatedly. A false single-use assurance
 * in a pupil's welcome email is a claims-honesty defect, so the copy now says
 * "temporary" and states what the gate actually does.
 */
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
    <p>This password is temporary. You will be asked to choose your own password before you can use your account, so please keep it private and do not share it.</p>
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
      // Only a COMPLETED job is a result to replay. Until 11 October 2026 a
      // failed or still-running job was replayed too, as a 200 with nothing
      // created, and the upload page reuses its key when the school presses
      // the button again, so a retry after any failure could never succeed.
      if (existing.status !== 'completed') {
        return NextResponse.json(
          {
            error:
              existing.status === 'pending'
                ? 'This upload is already being processed. Wait a minute, then check the upload log.'
                : 'That attempt failed and nothing was saved. Please run the upload again.',
            jobStatus: existing.status,
          },
          { status: 409 },
        )
      }
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
      // supabaseUserId is what school_members.user_id holds (step 8).
      select: { id: true, email: true, supabaseUserId: true },
    })
    const existingByEmail = new Map(existingUsers.map((u) => [u.email.toLowerCase(), u]))

    // 7. Accounts first, then one short transaction.
    //
    // The auth users and school_members live in Supabase, a different store
    // from the Prisma-owned tables (`User`, `BulkUploadJob`), so they cannot
    // share the transaction. The auth users are made first, outside it (see
    // "The time budget" at the top), and the transaction then records them
    // all at once. On any failure every auth user made here is revoked, so the
    // commit is atomic end-to-end.
    const createdAuthIds: Array<{ email: string; authId: string }> = []
    // Welcome emails are queued here and sent only once the transaction has
    // committed (step 7d), so no pupil is emailed a password for an account a
    // rollback then deletes.
    const welcomes: Array<{ email: string; firstName: string; tempPassword: string }> = []
    const outcomes: PerRowOutcome[] = []
    const errors: ParseError[] = []
    let createdCount = 0
    let updatedCount = 0
    let skippedCount = 0

    const admin = createServiceRoleClient()

    /** The rollback for the Supabase side: revoke every auth user made here. */
    const revokeCreatedAccounts = () =>
      mapWithConcurrency(createdAuthIds, SUPABASE_CONCURRENCY, async ({ authId }) => {
        try {
          await admin.auth.admin.deleteUser(authId)
        } catch (e) {
          console.warn('bulk-upload.commit: failed to revoke auth user', e)
        }
      })

    /** Mark the job failed, with the reason the school sees in its upload log. */
    const failJob = (message: string) =>
      prisma.bulkUploadJob.update({
        where: { id: job.id },
        data: {
          status: 'failed',
          completedAt: new Date(),
          errorsJson: [{ row: 0, code: 'INVALID_EMAIL', message }] as unknown as object,
        },
      })

    // 7a. Sort the rows, in file order. A pupil Prisma already knows is
    // updated, a repeat of an email earlier in the file is skipped, and anyone
    // else needs an account.
    const seen = new Set<string>()
    const plan = normalisedRows.map((row) => {
      const email = row.email.toLowerCase()
      const kind = existingByEmail.has(email) ? 'existing' : seen.has(email) ? 'repeat' : 'new'
      seen.add(email)
      return { row, email, kind }
    })
    const needAccounts = plan.filter((p) => p.kind === 'new')

    // 7b. Create the auth users, SUPABASE_CONCURRENCY at a time, starting no
    // new one once ACCOUNT_PHASE_BUDGET_MS has passed.
    const deadline = Date.now() + ACCOUNT_PHASE_BUDGET_MS
    const attempts = await mapWithConcurrency(
      needAccounts,
      SUPABASE_CONCURRENCY,
      async ({ row, email }) => {
        const tempPassword = generateTempPassword()
        try {
          const { data: authData, error: authErr } = await admin.auth.admin.createUser({
            email,
            password: tempPassword,
            email_confirm: true,
            user_metadata: {
              full_name: `${row.firstName} ${row.lastName}`,
              role: 'STUDENT',
              school_id: schoolId,
              bulk_upload_job_id: job.id,
              // SECURITY: the temporary password below travels through email
              // (and the admin-facing credential export), so it must be
              // rotated on first use rather than remaining a permanent
              // credential for a pupil's account. The flag holds the user on
              // /auth/set-password after sign-in until they change it
              // (enforced in src/lib/supabase/middleware.ts). The welcome
              // email already promises this; before this change nothing
              // actually enforced it.
              needs_password_change: true,
            },
          })
          if (authErr || !authData?.user) return { ok: false as const, threw: false }
          createdAuthIds.push({ email, authId: authData.user.id })
          return { ok: true as const, authId: authData.user.id, tempPassword }
        } catch (err) {
          // Not a bad row: the call never answered. The old transaction undid
          // the whole upload on a throw, and so does this.
          console.error('bulk-upload.commit: createUser threw', err)
          return { ok: false as const, threw: true }
        }
      },
      () => Date.now() < deadline,
    )

    const ranOutOfTime = attempts.some((a) => a === undefined)
    if (ranOutOfTime || attempts.some((a) => a !== undefined && !a.ok && a.threw)) {
      console.error(
        `bulk-upload.commit: ${ranOutOfTime ? 'account creation ran out of time' : 'createUser threw'}; revoking ${createdAuthIds.length} accounts`,
      )
      await revokeCreatedAccounts()
      await failJob(
        ranOutOfTime
          ? 'Account creation ran out of time; nothing was saved.'
          : 'Account creation failed part-way; nothing was saved.',
      )
      return NextResponse.json(
        {
          error: ranOutOfTime
            ? 'This upload took too long and was stopped. No accounts were created. Please split the file into smaller files and try again.'
            : 'Commit failed. No accounts were created. Please review errors and retry.',
        },
        { status: ranOutOfTime ? 503 : 500 },
      )
    }

    // Outcomes, counts and the rows to record, in file order.
    const attemptByEmail = new Map(needAccounts.map((p, i) => [p.email, attempts[i]]))
    const accounts: Array<{ email: string; authId: string; row: StudentRow }> = []
    for (const { row, email, kind } of plan) {
      if (kind === 'existing') {
        // Existing user: refresh their school_members link (step 8) without
        // touching Prisma's `User` row (leave their name, DOB, consent
        // untouched).
        outcomes.push({ row: row.row, email, action: 'updated' })
        updatedCount++
        continue
      }
      const attempt = attemptByEmail.get(email)
      if (kind === 'repeat' || !attempt || !attempt.ok) {
        errors.push(
          kind === 'repeat'
            ? {
                row: row.row,
                field: 'email',
                code: 'DUPLICATE_EMAIL_IN_FILE',
                message: `${email} appears earlier in this file.`,
              }
            : {
                row: row.row,
                field: 'email',
                code: 'INVALID_EMAIL',
                message: `Failed to create auth user for ${email}.`,
              },
        )
        skippedCount++
        outcomes.push({ row: row.row, email, action: 'skipped' })
        continue
      }
      accounts.push({ email, authId: attempt.authId, row })
      createdCount++
      outcomes.push({ row: row.row, email, action: 'created' })
      welcomes.push({ email, firstName: row.firstName, tempPassword: attempt.tempPassword })
    }

    // 7c. Record the new pupils and complete the job: one transaction, two
    // statements, no network calls.
    try {
      await prisma.$transaction(async (tx) => {
        if (accounts.length > 0) {
          await tx.user.createMany({
            data: accounts.map(({ email, authId, row }) => ({
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
              role: 'STUDENT' as const,
              school: schoolId,
              isMinor: true,
            })),
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
      }, TRANSACTION_OPTIONS)
    } catch (txErr) {
      // Prisma tx rolled back. Revoke the auth users made above so the commit
      // is atomic end-to-end.
      console.error('bulk-upload.commit: tx failed, rolling back', txErr)
      await revokeCreatedAccounts()
      await failJob(
        txErr instanceof Error
          ? txErr.message
          : 'Transactional commit failed; no rows were persisted.',
      )
      return NextResponse.json(
        {
          error: 'Commit failed. No accounts were created. Please review errors and retry.',
        },
        { status: 500 },
      )
    }

    // 7d. Welcome emails, now that the accounts are committed.
    //
    // FIXED 11 October 2026. These were sent from inside the transaction, as
    // each account was created. If a later row or the job update then failed,
    // the transaction rolled back and the catch above deleted every auth user
    // it had made, and told the school "No accounts were created". But each
    // email already started had gone out, giving a pupil a temporary password
    // for an account that no longer existed.
    //
    // They were also one request each, fired together. Resend allows 10
    // requests a second per team and refuses the rest with 429, so most of a
    // large upload's emails would have been lost. sendEmailBatch sends them
    // 100 to a request.
    //
    // Sent from here, an email only ever describes an account that exists.
    // Still not awaited, so a mail-service outage does not hold up the school,
    // and still kept alive past the response, because each carries the
    // pupil's only copy of their password (src/lib/keep-alive.ts).
    if (welcomes.length > 0) {
      const loginUrl = 'https://theenglishhub.app/login'
      const sending = sendEmailBatch(
        welcomes.map((welcome) => ({
          to: welcome.email,
          subject: 'Your English Hub account',
          html: welcomeEmailHtml({
            firstName: welcome.firstName,
            tempPassword: welcome.tempPassword,
            loginUrl,
          }),
        })),
      ).then(({ failed }) => {
        if (failed.length > 0) {
          console.warn(
            `bulk-upload: ${failed.length} of ${welcomes.length} welcome emails were not sent`,
            failed,
          )
        }
      })
      keepAlive(sending, 'bulk-upload: welcome emails')
    }

    // 8. Link Supabase school_members for every row.
    //
    // THE DEFECT THIS FIXES (19 September 2026). This upsert named a
    // `class_code` column that school_members does not have and never has.
    // PostgREST rejects the whole request when one column is unknown, so NOT
    // ONE member row was written for any bulk-uploaded student - and
    // school_members holds 0 rows to prove it.
    //
    // It was invisible for two compounding reasons. Supabase returns
    // `{ error }` rather than throwing, so the `catch` below never fired; and
    // nothing read the result, so the error object was dropped on the floor.
    // The import then reported "created: N" to the school.
    //
    // The class code is NOT written here. Class membership lives in
    // `class_students`, and joining a student to a class moves
    // `schools.seats_used`, which is seat billing. Wiring that from a CSV
    // import is a real piece of work and is not being guessed at tonight - so
    // the code the teacher supplied is reported back per row instead of being
    // silently dropped into a column that does not exist.
    //
    // A few rows at a time (SUPABASE_CONCURRENCY): one call each, in turn,
    // would not fit a full file into the time budget.
    //
    // FIXED 11 October 2026: a pupil Prisma already knew was linked under their
    // Prisma `User.id`, a cuid, but school_members.user_id holds the Supabase
    // auth uuid (CLAUDE.md, structural fact 1), so the link never matched them.
    // It now uses their `supabaseUserId`, falling back to `id` only for rows
    // whose id IS the Supabase id, the second case src/lib/identity/lookup.ts
    // allows for.
    const memberFailures: string[] = []
    let classCodesSupplied = 0
    for (const row of normalisedRows) {
      if (row.classCode) classCodesSupplied += 1
    }
    await mapWithConcurrency(normalisedRows, SUPABASE_CONCURRENCY, async (row) => {
      const email = row.email.toLowerCase()
      try {
        const existing = existingByEmail.get(email)
        const authId =
          createdAuthIds.find((a) => a.email === email)?.authId ??
          existing?.supabaseUserId ??
          existing?.id
        if (!authId) return
        const { error: memberError } = await admin.from('school_members').upsert(
          {
            school_id: schoolId,
            user_id: authId,
            role: 'student',
            full_name: `${row.firstName} ${row.lastName}`,
            email,
            invite_status: 'accepted',
            year_group: row.yearGroup,
          },
          { onConflict: 'school_id,user_id' },
        )
        if (memberError) {
          console.error('bulk-upload.commit: school_members upsert failed', email, memberError)
          memberFailures.push(email)
        }
      } catch (e) {
        console.error('bulk-upload.commit: school_members upsert threw', email, e)
        memberFailures.push(email)
      }
    })
    // Rows finish out of order when run together; report them in file order.
    const fileOrder = new Map(normalisedRows.map((r, i) => [r.email.toLowerCase(), i]))
    memberFailures.sort((a, b) => (fileOrder.get(a) ?? 0) - (fileOrder.get(b) ?? 0))
    if (memberFailures.length) {
      console.error(
        `bulk-upload.commit: ${memberFailures.length} of ${normalisedRows.length} school_members rows failed`,
      )
    }

    const response: CommitResponse = {
      jobId: job.id,
      memberLinkFailures: memberFailures,
      classCodesNotAssigned: classCodesSupplied,
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
