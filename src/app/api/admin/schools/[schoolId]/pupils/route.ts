/**
 * POST /api/admin/schools/[schoolId]/pupils
 *
 * The Pupils sheet of a school's setup spreadsheet, pasted or uploaded by the
 * operator: `{ csv: string, idempotencyKey: string, fileName?: string }`,
 * headers First name, Last name, Email address, Year group, Class code.
 *
 * It is read by parseStudentsCsv (src/lib/school/csv-parse.ts), the parser the
 * school's own upload uses, with the school's active classes, so a row whose
 * class does not exist is refused before any account is made. The rows that
 * pass then go through commitBulkUpload (src/lib/school/bulk-upload-commit.ts)
 * with the operator as the actor: the same idempotency, account budget,
 * revocation, welcome emails, member links and class places as a school's
 * upload, recorded in the same BulkUploadJob log the school can read.
 *
 * Answers with every row: created (a new account), updated (an existing
 * account linked and placed), skipped (a repeat, or a member of staff's
 * email) and failed (a row the sheet got wrong, an account that could not be
 * made, a link or a class place that did not happen). A pupil created but not
 * placed is created AND failed.
 *
 * Site administrators only (verifyAdmin); the school is the one in the path.
 */

import { NextRequest, NextResponse } from 'next/server'

import { createServiceRoleClient } from '@/lib/supabase/server'
import { parseStudentsCsv, MAX_ROWS } from '@/lib/school/csv-parse'
import { loadActiveClasses } from '@/lib/school/school-classes'
import { commitBulkUpload } from '@/lib/school/bulk-upload-commit'
import { finishSetupResult, newSetupResult } from '@/lib/school/setup-result'
import {
  loadSchool,
  operatorRateLimit,
  readSheetBody,
  requireOperator,
} from '@/lib/school/operator-access'

export const dynamic = 'force-dynamic'
// The same pipeline as /api/school/bulk-upload/commit, so the same budget:
// see "The time budget" in src/lib/school/bulk-upload-commit.ts. A literal,
// because Next reads it statically.
export const maxDuration = 120

/** Errors a fresh upload reports as skipped rather than failed: nothing to fix. */
const SKIP_CODES = new Set(['DUPLICATE_EMAIL_IN_FILE', 'INVALID_ROLE'])

export async function POST(request: NextRequest, props: { params: Promise<{ schoolId: string }> }) {
  try {
    const { schoolId } = await props.params

    const gate = await requireOperator()
    if (gate.response) return gate.response
    const limited = await operatorRateLimit(gate.user.id, 'admin-schools-pupils', 10)
    if (limited) return limited

    const admin = createServiceRoleClient()
    const loaded = await loadSchool(admin, schoolId)
    if (loaded.response) return loaded.response
    const school = loaded.school

    const read = await readSheetBody(request)
    if (read.response) return read.response
    const idempotencyKey = read.body.idempotencyKey
    if (typeof idempotencyKey !== 'string' || idempotencyKey.length < 16) {
      return NextResponse.json(
        { error: 'idempotencyKey is required: reload the page and run the step again.' },
        { status: 422 },
      )
    }
    const fileName =
      typeof read.body.fileName === 'string' && read.body.fileName.trim()
        ? read.body.fileName.trim()
        : 'Pupils sheet, pasted at /admin/schools'

    // The school's classes, so a row naming a class that does not exist is
    // refused here, before an account is made for a pupil who could be
    // placed nowhere. If they cannot be read, nothing is done.
    const classes = await loadActiveClasses(admin, school.id)
    if (classes.error !== null) {
      console.error('[admin/schools] pupils step: classes read failed', classes.error)
      return NextResponse.json(
        {
          error: "Could not read the school's classes, so nothing was done.",
          detail: classes.error,
        },
        { status: 500 },
      )
    }

    const parsed = parseStudentsCsv(read.csv, {
      knownClassCodes: new Set(classes.classes.map((c) => c.name)),
      expectedRole: 'STUDENT',
    })
    const result = newSetupResult(parsed.totalRows)
    for (const e of parsed.errors) {
      result.failed.push({ row: e.row, subject: e.field ?? 'sheet', detail: e.message })
    }
    if (parsed.totalRows > MAX_ROWS) {
      return NextResponse.json(
        {
          error: `The sheet has ${parsed.totalRows} pupils; at most ${MAX_ROWS} at a time. Split it and run each part. Nothing was done.`,
        },
        { status: 422 },
      )
    }
    if (parsed.valid.length === 0) {
      return NextResponse.json(
        {
          error:
            parsed.totalRows === 0
              ? 'No pupil rows were found under a header the parser knows. Nothing was done.'
              : 'Every row has a problem, listed below. Nothing was done.',
          ...finishSetupResult(result),
        },
        { status: 422 },
      )
    }

    const commit = await commitBulkUpload({
      schoolId: school.id,
      actorUserId: gate.user.id,
      fileName,
      idempotencyKey,
      rows: parsed.valid,
    })
    if (commit.status !== 200) {
      return NextResponse.json(
        { ...commit.body, ...finishSetupResult(result) },
        { status: commit.status },
      )
    }

    const body = commit.body
    if ('idempotent' in body) {
      // The same key twice: the first run's counts and stored problems.
      for (const e of body.errors) {
        result.failed.push({ row: e.row || null, subject: e.field ?? 'row', detail: e.message })
      }
      return NextResponse.json({
        ...finishSetupResult(result),
        jobId: body.jobId,
        replayed: {
          created: body.created,
          updated: body.updated,
          skipped: body.skipped,
          note: 'This matched an upload already run, so nothing was done again. Its counts are shown; its per-row results were in the first answer.',
        },
      })
    }

    const emailByRow = new Map(body.outcomes.map((o) => [o.row, o.email]))
    const notLinked = new Set(body.memberLinkFailures.map((f) => f.email))
    for (const o of body.outcomes) {
      if (o.action === 'skipped') continue
      const linked = !notLinked.has(o.email)
      const placed = o.placedInClass ? ` and placed in ${o.placedInClass}` : ''
      if (o.action === 'created') {
        result.created.push({
          row: o.row,
          subject: o.email,
          detail: `Account created${linked ? ', linked to the school' : ''}${placed}; a welcome email with a temporary password is being sent.`,
        })
      } else {
        result.updated.push({
          row: o.row,
          subject: o.email,
          detail: `Already had an account${linked ? '; linked to the school' : ''}${placed}. No email was sent.`,
        })
      }
    }
    for (const e of body.errors) {
      const entry = {
        row: e.row,
        subject: emailByRow.get(e.row) || e.field || 'row',
        detail: e.message,
      }
      if (SKIP_CODES.has(e.code)) result.skipped.push(entry)
      else result.failed.push(entry)
    }
    for (const f of body.memberLinkFailures) {
      result.failed.push({
        row: f.row,
        subject: f.email,
        detail: `Not linked to the school (${f.reason}). Run this step again to retry.`,
      })
    }
    for (const u of body.unmatchedClassCodes) {
      result.failed.push({
        row: u.row,
        subject: u.email,
        detail: `No active class is called "${u.classCode}", so the pupil is in no class. Add it in the Classes step, then run this step again.`,
      })
    }
    for (const f of body.placementFailures) {
      result.failed.push({
        row: f.row,
        subject: f.email,
        detail: `Class "${f.classCode}": ${f.reason}. Run this step again to retry.`,
      })
    }
    for (const c of body.classCountFailures) {
      result.failed.push({
        row: null,
        subject: `class ${c.classCode}`,
        detail: `Its pupil count was not updated (${c.reason}).`,
      })
    }
    if (body.failuresNotLogged) {
      result.failed.push({
        row: null,
        subject: 'upload log',
        detail: "The problems above could not be written to the school's upload log.",
      })
    }

    return NextResponse.json({ ...finishSetupResult(result), jobId: body.jobId })
  } catch (err) {
    console.error('[admin/schools] pupils step error', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
