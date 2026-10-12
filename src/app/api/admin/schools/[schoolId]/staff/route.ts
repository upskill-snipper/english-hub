/**
 * POST /api/admin/schools/[schoolId]/staff
 *
 * The Staff sheet of a school's setup spreadsheet, pasted or uploaded by the
 * operator: `{ csv: string }`, headers First name, Last name, School email
 * address, Role (Head of department | Teacher), Classes taught. Each person is
 * invited through src/lib/school/invite-staff.ts, the same invitation a school
 * administrator sends from the portal: a 7-day link by email, or straight in
 * for someone who already has an account, and never for someone already
 * accepted at another school.
 *
 * "Classes taught" is read but not acted on: each class's teacher is set by
 * the Classes step, from that sheet's "Teacher's school email address".
 *
 * Answers with every row: created (invited, or added), updated (an earlier
 * invitation re-sent with a new link), skipped (already a member here, or a
 * member of another school), failed (with the reason). An invitation saved
 * but whose email did not go is created AND failed, so it is not missed.
 *
 * Site administrators only (verifyAdmin); the school is the one in the path.
 */

import { NextRequest, NextResponse } from 'next/server'

import { createServiceRoleClient } from '@/lib/supabase/server'
import { inviteStaff } from '@/lib/school/invite-staff'
import { parseStaffSheet } from '@/lib/school/setup-sheets'
import { finishSetupResult, newSetupResult } from '@/lib/school/setup-result'
import {
  loadSchool,
  operatorRateLimit,
  readSheetBody,
  requireOperator,
} from '@/lib/school/operator-access'

export const dynamic = 'force-dynamic'
// One person at a time, as the school route invites them: a few reads, a
// write and an email each, so about half a second a person. MAX_STAFF_ROWS at
// that rate fits well inside this, which stays under the 125 s Cloudflare
// waits for this site's origin. A literal, because Next reads it statically.
export const maxDuration = 120

/** A department, with room to spare; the school route's own cap is 50 a request. */
const MAX_STAFF_ROWS = 100

const ROLE_LABEL = { teacher: 'teacher', head_of_department: 'head of department' } as const

export async function POST(request: NextRequest, props: { params: Promise<{ schoolId: string }> }) {
  try {
    const { schoolId } = await props.params

    const gate = await requireOperator()
    if (gate.response) return gate.response
    const limited = await operatorRateLimit(gate.user.id, 'admin-schools-write', 30)
    if (limited) return limited

    const admin = createServiceRoleClient()
    const loaded = await loadSchool(admin, schoolId)
    if (loaded.response) return loaded.response
    const school = loaded.school

    const read = await readSheetBody(request)
    if (read.response) return read.response

    const sheet = parseStaffSheet(read.csv)
    const result = newSetupResult(sheet.totalRows)
    for (const e of sheet.errors) {
      result.failed.push({
        row: e.row,
        subject: e.subject ?? e.field ?? 'Sheet',
        detail: e.message,
      })
    }
    if (sheet.missingHeaders.length > 0) {
      return NextResponse.json(
        {
          error: `The sheet's header is missing: ${sheet.missingHeaders.join(', ')}. Nothing was done.`,
          ...finishSetupResult(result),
        },
        { status: 422 },
      )
    }
    if (sheet.totalRows === 0) {
      return NextResponse.json(
        {
          error: 'There are no staff rows under the header. Nothing was done.',
          ...finishSetupResult(result),
        },
        { status: 422 },
      )
    }
    if (sheet.rows.length > MAX_STAFF_ROWS) {
      return NextResponse.json(
        { error: `At most ${MAX_STAFF_ROWS} staff at a time. Nothing was done.` },
        { status: 422 },
      )
    }

    const invites = await inviteStaff({
      admin,
      school: { id: school.id, name: school.name },
      invitees: sheet.rows.map((r) => ({
        email: r.email,
        role: r.role,
        fullName: [r.firstName, r.lastName].filter(Boolean).join(' ') || undefined,
      })),
    })

    // inviteStaff answers in the order it was asked.
    invites.forEach((invite, i) => {
      const row = sheet.rows[i].row
      const subject = invite.email
      const role = ROLE_LABEL[invite.role]
      // Running the step again re-sends a pending invitation (it is re-issued),
      // but not the note to someone already added: they are a member by then.
      const emailFailure = (then: string) =>
        result.failed.push({
          row,
          subject,
          detail: `${invite.reason ?? 'The email could not be sent'}${invite.detail ? ` (${invite.detail})` : ''}. ${then}`,
        })
      switch (invite.outcome) {
        case 'invited':
          result.created.push({
            row,
            subject,
            detail: invite.emailSent
              ? `Invited as ${role}; the invitation email went, and its link lasts 7 days.`
              : `Invitation saved as ${role}, but its email was not sent.`,
          })
          if (!invite.emailSent) emailFailure('Run this step again to re-send it.')
          break
        case 'reinvited':
          result.updated.push({
            row,
            subject,
            detail: invite.emailSent
              ? `Already invited; a new invitation went as ${role}, and the earlier link no longer works.`
              : `Already invited; a new link was saved as ${role}, but its email was not sent.`,
          })
          if (!invite.emailSent) emailFailure('Run this step again to re-send it.')
          break
        case 'added_existing':
          result.created.push({
            row,
            subject,
            detail: invite.emailSent
              ? `Already had an English Hub account, so added to the school as ${role} straight away, and told by email.`
              : `Already had an English Hub account, so added to the school as ${role}; the email telling them was not sent.`,
          })
          if (!invite.emailSent) {
            emailFailure(
              'They are a member now, so running this again will not re-send it: tell them.',
            )
          }
          break
        case 'already_member':
          result.skipped.push({
            row,
            subject,
            detail: 'Already a member of this school; nothing changed.',
          })
          break
        case 'other_school':
          result.skipped.push({
            row,
            subject,
            detail: `${invite.reason ?? 'Already an accepted member of another school'} (school ${invite.otherSchoolId ?? 'unknown'}). Nothing was written and no email was sent.`,
          })
          break
        case 'failed':
          result.failed.push({
            row,
            subject,
            detail: `${invite.reason ?? 'Failed'}${invite.detail ? `: ${invite.detail}` : ''}.`,
          })
          break
      }
    })

    return NextResponse.json(finishSetupResult(result))
  } catch (err) {
    console.error('[admin/schools] staff step error', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
