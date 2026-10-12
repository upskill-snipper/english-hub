/**
 * The pupil upload: validated rows in, accounts, school membership and class
 * places out.
 *
 * Shared by two routes, each of which does its own auth and passes the school
 * it has established:
 *   - POST /api/school/bulk-upload/commit, a school administrator, whose school
 *     is their own membership's;
 *   - POST /api/admin/schools/[schoolId]/pupils, the operator setting a school
 *     up, whose school is the one in the path. A site administrator has no
 *     real school membership, so nothing here derives a school from a caller.
 *
 * The steps:
 *   1. Check the request: a file name, a 16 to 128 character idempotency key,
 *      1 to 500 rows, and a school id that is a uuid.
 *   2. Short-circuit a repeated idempotency key: replay a completed job,
 *      refuse one that is running or failed.
 *   3. Read the school's staff, so no member of staff is made a pupil.
 *   4. Insert a BulkUploadJob row with status 'pending'.
 *   5. Create an auth user for each new pupil, a few at a time and outside any
 *      transaction, then record every new pupil's Prisma User row and complete
 *      the job in one short transaction. Per-row errors are collected without
 *      aborting the batch. If the transaction fails, or the accounts take too
 *      long, every auth user created is revoked and nothing is persisted.
 *   6. Welcome emails, in batches, only once the transaction has committed.
 *   7. Link each pupil in school_members.
 *   8. Place each pupil in their class: class_students, school_students, and
 *      each touched class's student_count.
 *   9. Write anything that failed in 7 and 8 onto the job, so the school's
 *      upload log counts it, and return every row's outcome.
 *
 * NOTHING AFTER THE COMMIT IS ALLOWED TO PASS FOR SUCCESS. Steps 7 and 8 run
 * after the accounts exist, so they cannot roll the upload back; what they can
 * do is say exactly which rows they failed on. Supabase returns `{ error }`
 * rather than throwing, and until 19 September 2026 nothing read it: the
 * member link failed for every pupil ever uploaded while the school was told
 * "created: N". Every write below reads its result, and every failure reaches
 * the response, per row.
 *
 * Tested by ./bulk-upload-commit.test.ts and, through the school route, by
 * src/app/api/school/bulk-upload/commit/route.test.ts.
 */

import { randomBytes, randomUUID } from 'crypto'

import { prisma } from '@/lib/prisma'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { sendEmailBatch } from '@/lib/email'
import { keepAlive } from '@/lib/keep-alive'
import { mapWithConcurrency } from '@/lib/concurrency'
import type { StudentRow, ParseError } from '@/lib/school/csv-parse'
import { classKey, loadActiveClasses, type ActiveClass } from '@/lib/school/school-classes'
import { isUuid } from '@/lib/school/is-uuid'

// ─── The time budget (11 October 2026) ──────────────────────────────────────
// The commit route could not have handled a real school. It created each
// pupil's auth user with a Supabase admin call INSIDE the Prisma transaction,
// one at a time. Prisma closes an interactive transaction after 5 s by default
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
// under an explicit TRANSACTION_OPTIONS. Each calling route sets maxDuration
// 120, which covers the account phase, a full revocation, and the member links
// and class places (three table writes a pupil, TABLE_WRITE_CONCURRENCY at a
// time). It stays under the 125 s Cloudflare waits for this site's origin.

/** Supabase auth admin calls in flight at once: account creation and revocation. */
const SUPABASE_CONCURRENCY = 5
/**
 * Table writes in flight at once after the commit: school_members,
 * class_students and school_students, one each a pupil. These are PostgREST
 * writes, not auth admin calls, and at five at a time a full file's three
 * writes a pupil would not fit what is left of the budget.
 */
const TABLE_WRITE_CONCURRENCY = 10
/** How long account creation may run before the upload is abandoned and revoked. */
const ACCOUNT_PHASE_BUDGET_MS = 60_000
/** The transaction does no network calls now; this bounds two statements. */
const TRANSACTION_OPTIONS = { maxWait: 10_000, timeout: 20_000 }
/** One commit's ceiling, the same as the parser's (src/lib/school/csv-parse.ts). */
const MAX_ROWS_PER_COMMIT = 500

/**
 * Where a new pupil signs in. FIXED 12 October 2026: the welcome email linked
 * https://theenglishhub.app/login, which is a 404 (checked live that day);
 * the sign-in page is /auth/login.
 */
const LOGIN_URL = 'https://theenglishhub.app/auth/login'

/** The school_members roles that are staff. A pupil upload never touches these rows. */
const STAFF_ROLES = ['admin', 'head_of_department', 'teacher'] as const

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface CommitBulkUploadInput {
  /** The school the pupils join. Established by the caller, never derived here. */
  readonly schoolId: string
  /** Supabase auth uuid of whoever ran the upload, recorded on the job. */
  readonly actorUserId: string
  readonly fileName: string
  readonly idempotencyKey: string
  readonly rows: ReadonlyArray<StudentRow>
}

export interface PerRowOutcome {
  readonly row: number
  readonly email: string
  readonly action: 'created' | 'updated' | 'skipped'
  /** The class the pupil was placed in, when the placement worked. */
  readonly placedInClass?: string
}

/** One row a step after the commit failed on, and the database's reason. */
export interface RowFailure {
  readonly row: number
  readonly email: string
  readonly reason: string
}

export interface ClassPlacementFailure extends RowFailure {
  readonly classCode: string
}

export interface UnmatchedClassCode {
  readonly row: number
  readonly email: string
  readonly classCode: string
}

export interface ClassCountFailure {
  readonly classCode: string
  readonly reason: string
}

/** A fresh upload's result. Every failure category is always present, often empty. */
export interface CommitBulkUploadBody {
  readonly jobId: string
  readonly created: number
  readonly updated: number
  readonly skipped: number
  /** Rows not imported at all: unusable, repeated, staff, or no account made. */
  readonly errors: ReadonlyArray<ParseError>
  readonly outcomes: ReadonlyArray<PerRowOutcome>
  /**
   * Pupils whose school_members row could not be written. Reported rather than
   * logged, because this whole step failed silently for every import until
   * 19 September 2026 and the school was told the upload had succeeded.
   */
  readonly memberLinkFailures: ReadonlyArray<RowFailure>
  /** Pupils whose class code matched no active class at the school: they are in no class. */
  readonly unmatchedClassCodes: ReadonlyArray<UnmatchedClassCode>
  /** Pupils whose class place, or school_students row, could not be written. */
  readonly placementFailures: ReadonlyArray<ClassPlacementFailure>
  /** Classes whose student_count could not be recomputed. */
  readonly classCountFailures: ReadonlyArray<ClassCountFailure>
  /**
   * True when the failures above could not be written onto the job, so the
   * school's upload log under-reports this run. Absent when they were.
   */
  readonly failuresNotLogged?: true
}

/**
 * A repeated idempotency key's result: the completed job's counts and stored
 * errors, which include whatever failed after the commit (step 9). The
 * per-category lists are not stored, so they are absent here, not empty.
 */
export interface CommitBulkUploadReplayBody {
  readonly jobId: string
  readonly created: number
  readonly updated: number
  readonly skipped: number
  readonly errors: ReadonlyArray<ParseError>
  readonly outcomes: readonly []
  readonly idempotent: true
}

export interface CommitBulkUploadErrorBody {
  readonly error: string
  readonly jobStatus?: string
}

export type CommitBulkUploadResult =
  | { readonly status: 200; readonly body: CommitBulkUploadBody | CommitBulkUploadReplayBody }
  | { readonly status: 409 | 422 | 500 | 503; readonly body: CommitBulkUploadErrorBody }

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
export function welcomeEmailHtml(params: {
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

/**
 * A row this step can act on. The routes pass parsed, validated rows, but the
 * school route's body is JSON from a browser, so every field is checked for
 * its type: a row that is not usable is reported, never thrown on (a throw
 * after the job row exists would strand it as 'pending').
 *
 * Until 12 October 2026 a row failing this check was filtered out without a
 * word: not counted, not reported, not in the log.
 */
function looksLikeUsableRow(r: unknown): r is StudentRow {
  if (!r || typeof r !== 'object') return false
  const x = r as Record<string, unknown>
  return (
    typeof x.row === 'number' &&
    typeof x.email === 'string' &&
    x.email.includes('@') &&
    typeof x.firstName === 'string' &&
    x.firstName.trim().length > 0 &&
    typeof x.lastName === 'string' &&
    x.lastName.trim().length > 0 &&
    typeof x.yearGroup === 'string' &&
    typeof x.classCode === 'string' &&
    x.classCode.trim().length > 0
  )
}

/** A database error's message, never empty. */
function reasonOf(e: unknown): string {
  if (e && typeof e === 'object' && 'message' in e) {
    const message = (e as { message?: unknown }).message
    if (typeof message === 'string' && message.trim()) return message.slice(0, 300)
  }
  return e instanceof Error ? e.message.slice(0, 300) : 'no reason given'
}

// ---------------------------------------------------------------------------
// The upload
// ---------------------------------------------------------------------------

export async function commitBulkUpload(
  input: CommitBulkUploadInput,
): Promise<CommitBulkUploadResult> {
  const { schoolId, actorUserId, fileName, idempotencyKey, rows } = input

  // 1. The request. The school route's body is browser JSON, so the types
  // are checked here as well as declared.
  if (
    typeof idempotencyKey !== 'string' ||
    idempotencyKey.length < 16 ||
    idempotencyKey.length > 128 ||
    typeof fileName !== 'string' ||
    !Array.isArray(rows)
  ) {
    return {
      status: 422,
      body: { error: 'Body must include fileName, idempotencyKey, and rows[]' },
    }
  }
  if (rows.length === 0) {
    return { status: 422, body: { error: 'No rows to import.' } }
  }
  if (rows.length > MAX_ROWS_PER_COMMIT) {
    return { status: 422, body: { error: 'Maximum 500 rows per commit.' } }
  }
  // A site administrator reaching the school route carries the synthetic
  // school '__site_admin__'. Before 12 October 2026 their upload created real
  // accounts against it, and every link and place then failed.
  if (!isUuid(schoolId)) {
    return {
      status: 422,
      body: {
        error:
          'This upload is not attached to a school, so nothing was imported. A site administrator uploads pupils from /admin/schools.',
      },
    }
  }

  // 2. Idempotency short-circuit.
  const existing = await prisma.bulkUploadJob.findUnique({
    where: { idempotencyKey },
  })
  if (existing) {
    // Only a COMPLETED job is a result to replay. Until 11 October 2026 a
    // failed or still-running job was replayed too, as a 200 with nothing
    // created, and the upload page reuses its key when the school presses
    // the button again, so a retry after any failure could never succeed.
    if (existing.status !== 'completed') {
      return {
        status: 409,
        body: {
          error:
            existing.status === 'pending'
              ? 'This upload is already being processed. Wait a minute, then check the upload log.'
              : 'That attempt failed and nothing was saved. Please run the upload again.',
          jobStatus: existing.status,
        },
      }
    }
    return {
      status: 200,
      body: {
        jobId: existing.id,
        created: existing.createdCount,
        updated: existing.updatedCount,
        skipped: existing.skippedCount,
        errors: (existing.errorsJson as unknown as ReadonlyArray<ParseError> | null) ?? [],
        outcomes: [],
        idempotent: true,
      },
    }
  }

  const admin = createServiceRoleClient()

  // 3. The school's staff. Since the member link was corrected to the table's
  // real key, (school_id, email), an upsert for an email that belongs to a
  // teacher or administrator would REWRITE their membership as a pupil's: an
  // administrator who put their own address in the file would lock themselves
  // out of the portal. Such rows are refused before any account is made. If
  // the staff list cannot be read, nothing is uploaded rather than risk it.
  const { data: staffRows, error: staffError } = await admin
    .from('school_members')
    .select('email, role')
    .eq('school_id', schoolId)
    .in('role', [...STAFF_ROLES])
  if (staffError) {
    console.error('bulk-upload.commit: could not read the school staff list', staffError)
    return {
      status: 500,
      body: {
        error: `Could not check this school's staff list, so nothing was imported: ${reasonOf(staffError)}`,
      },
    }
  }
  const staffEmails = new Set(
    ((staffRows ?? []) as Array<{ email: unknown }>)
      .map((s) => (typeof s.email === 'string' ? s.email.toLowerCase() : ''))
      .filter(Boolean),
  )

  // Unusable rows are reported, not dropped.
  const errors: ParseError[] = []
  const outcomes: PerRowOutcome[] = []
  let createdCount = 0
  let updatedCount = 0
  let skippedCount = 0
  const usableRows: StudentRow[] = []
  rows.forEach((r, index) => {
    if (looksLikeUsableRow(r)) {
      usableRows.push(r)
      return
    }
    const x = (r && typeof r === 'object' ? r : {}) as Record<string, unknown>
    const row = typeof x.row === 'number' ? x.row : index + 2
    const email = typeof x.email === 'string' ? x.email.toLowerCase() : ''
    errors.push({
      row,
      code: 'MISSING_REQUIRED',
      message:
        'This row is missing a first name, last name, email address, year group or class code, so it was not imported.',
    })
    outcomes.push({ row, email, action: 'skipped' })
    skippedCount++
  })

  // 4. Create the pending job row before any writes.
  const job = await prisma.bulkUploadJob.create({
    data: {
      id: randomUUID(),
      adminUserId: actorUserId,
      schoolId,
      fileName: fileName.slice(0, 200),
      idempotencyKey,
      rowCount: rows.length,
      status: 'pending',
    },
  })

  const createdAuthIds: Array<{ email: string; authId: string }> = []

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

  // Set once the transaction has committed. A failure before it revokes every
  // account; a failure after it cannot, and must say so.
  let committed = false

  try {
    // 5. Load existing Prisma users by email - one query, set semantics.
    const emails = Array.from(new Set(usableRows.map((r) => r.email.toLowerCase())))
    const existingUsers = await prisma.user.findMany({
      where: { email: { in: emails } },
      // The Supabase id is what school_members.user_id holds (step 7).
      select: { id: true, email: true, supabaseUserId: true },
    })
    const existingByEmail = new Map(existingUsers.map((u) => [u.email.toLowerCase(), u]))

    // 5a. Sort the rows, in file order. A repeat of an email earlier in the
    // file is skipped (checked first, so a known pupil listed twice is not
    // "updated" twice), so is a member of staff's email, a pupil Prisma
    // already knows is updated, and anyone else needs an account.
    const seen = new Set<string>()
    const plan = usableRows.map((row) => {
      const email = row.email.toLowerCase()
      const kind: 'repeat' | 'staff' | 'existing' | 'new' = seen.has(email)
        ? 'repeat'
        : staffEmails.has(email)
          ? 'staff'
          : existingByEmail.has(email)
            ? 'existing'
            : 'new'
      seen.add(email)
      return { row, email, kind }
    })
    const needAccounts = plan.filter((p) => p.kind === 'new')

    // 5b. Create the auth users, SUPABASE_CONCURRENCY at a time, starting no
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
          if (authErr || !authData?.user) {
            // Usually an email that already has an account here but no
            // Prisma row; the reason says which.
            return {
              ok: false as const,
              threw: false,
              reason: authErr ? reasonOf(authErr) : 'no user returned',
            }
          }
          createdAuthIds.push({ email, authId: authData.user.id })
          return { ok: true as const, authId: authData.user.id, tempPassword }
        } catch (err) {
          // Not a bad row: the call never answered. The old transaction undid
          // the whole upload on a throw, and so does this.
          console.error('bulk-upload.commit: createUser threw', err)
          return { ok: false as const, threw: true, reason: reasonOf(err) }
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
      return {
        status: ranOutOfTime ? 503 : 500,
        body: {
          error: ranOutOfTime
            ? 'This upload took too long and was stopped. No accounts were created. Please split the file into smaller files and try again.'
            : 'Commit failed. No accounts were created. Please review errors and retry.',
        },
      }
    }

    // Outcomes, counts and the rows to record, in file order.
    const attemptByEmail = new Map(needAccounts.map((p, i) => [p.email, attempts[i]]))
    const accounts: Array<{ email: string; authId: string; row: StudentRow }> = []
    /** Every pupil who has an account now: the rows steps 7 and 8 act on. */
    const pupils: Array<{ email: string; authId: string; row: StudentRow }> = []
    const welcomes: Array<{ email: string; firstName: string; tempPassword: string }> = []
    for (const { row, email, kind } of plan) {
      if (kind === 'existing') {
        // Existing user: refresh their school_members link and class place
        // without touching Prisma's `User` row (leave their name, DOB,
        // consent untouched). FIXED 11 October 2026: linked by their
        // `supabaseUserId`, not their Prisma `User.id`, a cuid, because
        // school_members.user_id holds the Supabase auth uuid (CLAUDE.md,
        // structural fact 1). `id` is the fallback only for rows whose id IS
        // the Supabase id, the second case src/lib/identity/lookup.ts allows.
        const known = existingByEmail.get(email)
        if (known) pupils.push({ email, authId: known.supabaseUserId ?? known.id, row })
        outcomes.push({ row: row.row, email, action: 'updated' })
        updatedCount++
        continue
      }
      const attempt = attemptByEmail.get(email)
      if (kind !== 'new' || !attempt || !attempt.ok) {
        errors.push(
          kind === 'repeat'
            ? {
                row: row.row,
                field: 'email',
                code: 'DUPLICATE_EMAIL_IN_FILE',
                message: `${email} appears earlier in this file.`,
              }
            : kind === 'staff'
              ? {
                  row: row.row,
                  field: 'email',
                  code: 'INVALID_ROLE',
                  message: `${email} belongs to a member of staff at this school, so it was not imported as a pupil.`,
                }
              : {
                  row: row.row,
                  field: 'email',
                  code: 'ACCOUNT_NOT_CREATED',
                  message: `No account could be created for ${email}: ${attempt && !attempt.ok ? attempt.reason : 'not attempted'}.`,
                },
        )
        skippedCount++
        outcomes.push({ row: row.row, email, action: 'skipped' })
        continue
      }
      accounts.push({ email, authId: attempt.authId, row })
      pupils.push({ email, authId: attempt.authId, row })
      createdCount++
      outcomes.push({ row: row.row, email, action: 'created' })
      welcomes.push({ email, firstName: row.firstName, tempPassword: attempt.tempPassword })
    }

    // 5c. Record the new pupils and complete the job: one transaction, two
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
      return {
        status: 500,
        body: {
          error: 'Commit failed. No accounts were created. Please review errors and retry.',
        },
      }
    }
    committed = true

    // 6. Welcome emails, now that the accounts are committed.
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
      const sending = sendEmailBatch(
        welcomes.map((welcome) => ({
          to: welcome.email,
          subject: 'Your English Hub account',
          html: welcomeEmailHtml({
            firstName: welcome.firstName,
            tempPassword: welcome.tempPassword,
            loginUrl: LOGIN_URL,
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

    // 7. Link Supabase school_members for every pupil.
    //
    // THE DEFECTS THIS STEP HAS HAD. On 19 September 2026 it named a
    // `class_code` column that school_members does not have and never has.
    // PostgREST rejects the whole request when one column is unknown, so NOT
    // ONE member row was written for any bulk-uploaded student, while the
    // result was never read and the import reported "created: N".
    //
    // Then, FIXED 12 October 2026: it upserted with onConflict
    // 'school_id,user_id'. ON CONFLICT must name a unique key, and the only
    // one school_members has, besides its id, is UNIQUE(school_id, email)
    // (003_school_analytics.sql; production checked 12 October). Postgres
    // refused every row with 42P10, so every pupil still went unlinked.
    const memberLinkFailures: RowFailure[] = []
    await mapWithConcurrency(pupils, TABLE_WRITE_CONCURRENCY, async ({ row, email, authId }) => {
      try {
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
          { onConflict: 'school_id,email' },
        )
        if (memberError) {
          console.error('bulk-upload.commit: school_members upsert failed', email, memberError)
          memberLinkFailures.push({ row: row.row, email, reason: reasonOf(memberError) })
        }
      } catch (e) {
        console.error('bulk-upload.commit: school_members upsert threw', email, e)
        memberLinkFailures.push({ row: row.row, email, reason: reasonOf(e) })
      }
    })

    // 8. Place each pupil in their class.
    //
    // FIXED 12 October 2026. The class code was required on every row and
    // then ignored: no pupil was ever placed in a class, so no teacher saw any
    // uploaded pupil's work (the marking queue is scoped by class).
    //
    // The code is matched to `classes.name`, trimmed and case-insensitive,
    // among the school's active classes (src/lib/school/school-classes.ts).
    // A place is a class_students row (keyed on the pupil's Supabase uuid)
    // and a school_students row; then each touched class's student_count is
    // recounted from its active places.
    //
    // schools.seats_used is NOT moved here. Seat counting belongs to the join
    // and class-students routes and is a billing question; a provisioned
    // school's seat_limit is 9999, so nothing is refused for want of it, but
    // seats_used will undercount pupils placed by an upload.
    const unmatchedClassCodes: UnmatchedClassCode[] = []
    const placementFailures: ClassPlacementFailure[] = []
    const classCountFailures: ClassCountFailure[] = []
    const placedIn = new Map<string, string>()
    const touched = new Map<string, ActiveClass>()

    const loaded = await loadActiveClasses(admin, schoolId)
    const classesByKey = new Map<string, ActiveClass[]>()
    for (const c of loaded.classes ?? []) {
      const key = classKey(c.name)
      classesByKey.set(key, [...(classesByKey.get(key) ?? []), c])
    }

    await mapWithConcurrency(pupils, TABLE_WRITE_CONCURRENCY, async ({ row, email, authId }) => {
      const classCode = row.classCode.trim()
      if (loaded.error !== null) {
        placementFailures.push({
          row: row.row,
          email,
          classCode,
          reason: `the school's classes could not be read: ${loaded.error}`,
        })
        return
      }
      const matches = classesByKey.get(classKey(classCode)) ?? []
      if (matches.length === 0) {
        unmatchedClassCodes.push({ row: row.row, email, classCode })
        return
      }
      if (matches.length > 1) {
        placementFailures.push({
          row: row.row,
          email,
          classCode,
          reason: `${matches.length} active classes at this school are called "${classCode}"`,
        })
        return
      }
      const cls = matches[0]
      try {
        const { error: placeError } = await admin
          .from('class_students')
          .upsert(
            { class_id: cls.id, student_id: authId, is_active: true, removed_at: null },
            { onConflict: 'class_id,student_id' },
          )
        if (placeError) {
          console.error('bulk-upload.commit: class_students upsert failed', email, placeError)
          placementFailures.push({
            row: row.row,
            email,
            classCode,
            reason: `not placed in the class: ${reasonOf(placeError)}`,
          })
          return
        }
        touched.set(cls.id, cls)
        placedIn.set(email, cls.name)

        const { error: enrolError } = await admin.from('school_students').upsert(
          {
            school_id: schoolId,
            user_id: authId,
            status: 'active',
            year_group: row.yearGroup,
            class_name: cls.name,
          },
          { onConflict: 'school_id,user_id' },
        )
        if (enrolError) {
          console.error('bulk-upload.commit: school_students upsert failed', email, enrolError)
          placementFailures.push({
            row: row.row,
            email,
            classCode,
            reason: `placed in the class, but the school_students row failed: ${reasonOf(enrolError)}`,
          })
        }
      } catch (e) {
        console.error('bulk-upload.commit: class placement threw', email, e)
        placementFailures.push({ row: row.row, email, classCode, reason: reasonOf(e) })
      }
    })

    // The recount, from the rows themselves rather than by adding, so a
    // re-upload of pupils already in the class does not inflate it.
    for (const cls of touched.values()) {
      try {
        const { count, error: countError } = await admin
          .from('class_students')
          .select('id', { count: 'exact', head: true })
          .eq('class_id', cls.id)
          .eq('is_active', true)
        if (countError || typeof count !== 'number') {
          classCountFailures.push({
            classCode: cls.name,
            reason: countError ? reasonOf(countError) : 'no count returned',
          })
          continue
        }
        const { error: updateError } = await admin
          .from('classes')
          .update({ student_count: count })
          .eq('id', cls.id)
        if (updateError) {
          classCountFailures.push({ classCode: cls.name, reason: reasonOf(updateError) })
        }
      } catch (e) {
        classCountFailures.push({ classCode: cls.name, reason: reasonOf(e) })
      }
    }

    // Rows finish out of order when run together; report them in file order.
    const byRow = <T extends { row: number }>(a: T, b: T) => a.row - b.row
    memberLinkFailures.sort(byRow)
    unmatchedClassCodes.sort(byRow)
    placementFailures.sort(byRow)
    const failureCount =
      memberLinkFailures.length +
      unmatchedClassCodes.length +
      placementFailures.length +
      classCountFailures.length
    if (failureCount > 0) {
      console.error(
        `bulk-upload.commit: ${failureCount} failures after the commit (${memberLinkFailures.length} member links, ${unmatchedClassCodes.length} unknown classes, ${placementFailures.length} placements, ${classCountFailures.length} class counts) of ${pupils.length} pupils`,
      )
    }

    // 9. Put those failures on the job, so the upload log's error count and
    // a replay of this key both include them.
    let failuresNotLogged = false
    if (failureCount > 0) {
      const lateErrors: ParseError[] = [
        ...memberLinkFailures.map((f) => ({
          row: f.row,
          field: 'email',
          code: 'MEMBER_LINK_FAILED' as const,
          message: `${f.email} was not linked to the school: ${f.reason}`,
        })),
        ...unmatchedClassCodes.map((u) => ({
          row: u.row,
          field: 'classCode',
          code: 'UNKNOWN_CLASS' as const,
          message: `No active class at this school is called "${u.classCode}", so ${u.email} is in no class.`,
        })),
        ...placementFailures.map((f) => ({
          row: f.row,
          field: 'classCode',
          code: 'CLASS_PLACEMENT_FAILED' as const,
          message: `${f.email} (class "${f.classCode}"): ${f.reason}`,
        })),
        ...classCountFailures.map((c) => ({
          row: 0,
          field: 'classCode',
          code: 'CLASS_COUNT_FAILED' as const,
          message: `The pupil count of class "${c.classCode}" was not updated: ${c.reason}`,
        })),
      ]
      try {
        await prisma.bulkUploadJob.update({
          where: { id: job.id },
          data: {
            errorCount: errors.length + lateErrors.length,
            errorsJson: [...errors, ...lateErrors] as unknown as object,
          },
        })
      } catch (e) {
        console.error('bulk-upload.commit: could not write the late failures onto the job', e)
        failuresNotLogged = true
      }
    }

    const body: CommitBulkUploadBody = {
      jobId: job.id,
      created: createdCount,
      updated: updatedCount,
      skipped: skippedCount,
      errors,
      outcomes: outcomes
        .map((o) =>
          placedIn.has(o.email) && o.action !== 'skipped'
            ? { ...o, placedInClass: placedIn.get(o.email) }
            : o,
        )
        .sort(byRow),
      memberLinkFailures,
      unmatchedClassCodes,
      placementFailures,
      classCountFailures,
      ...(failuresNotLogged ? { failuresNotLogged: true as const } : {}),
    }
    return { status: 200, body }
  } catch (err) {
    console.error('bulk-upload.commit: stopped unexpectedly', err)
    if (!committed) {
      await revokeCreatedAccounts()
      try {
        await failJob('The upload stopped unexpectedly; nothing was saved.')
      } catch (jobErr) {
        console.error('bulk-upload.commit: could not mark the job failed', jobErr)
      }
      return {
        status: 500,
        body: { error: 'Commit failed. No accounts were created. Please review errors and retry.' },
      }
    }
    // After the commit the accounts exist and cannot be revoked here; say so
    // rather than claim nothing was saved. A re-run of the same file finds
    // them as existing pupils and finishes their links and places.
    return {
      status: 500,
      body: {
        error:
          'The accounts were created, but the upload stopped before every pupil was linked to the school and placed in a class. Run the same file again to finish it.',
      },
    }
  }
}
