/**
 * POST /api/admin/schools/[schoolId]/classes
 *
 * The Classes sheet of a school's setup spreadsheet, pasted or uploaded by the
 * operator: `{ csv: string }`, headers Class code, Year group, Teacher's school
 * email address, Exam board (AQA | Edexcel | OCR | Eduqas).
 *
 * Each row creates or updates the school's class whose `name` is the class
 * code, matched trimmed and case-insensitively as the pupil upload matches it
 * (src/lib/school/school-classes.ts), with its year group and exam board. A
 * class matched but inactive is made active again, since the sheet lists it.
 *
 * THE TEACHER. classes.teacher_id references school_members.id, NOT
 * auth.users.id (003_school_analytics.sql; docs/system/08, section 7). Get that
 * wrong and every teacher-scoped query silently returns nothing. It is set to
 * the school_members row of the staff member with the sheet's email. That row
 * exists from the moment they are invited, while the invitation is still
 * pending, so run the Staff step first. A teacher not found is reported: the
 * class is still created, with no teacher, and an existing class keeps the
 * teacher it had.
 *
 * Answers with every row: created, updated (with what changed), skipped
 * (already exactly as the sheet says) and failed. A class saved without the
 * teacher the sheet names is created or updated AND failed.
 *
 * Site administrators only (verifyAdmin); the school is the one in the path.
 */

import { NextRequest, NextResponse } from 'next/server'

import { createServiceRoleClient } from '@/lib/supabase/server'
import { parseClassesSheet } from '@/lib/school/setup-sheets'
import { finishSetupResult, newSetupResult } from '@/lib/school/setup-result'
import { classKey } from '@/lib/school/school-classes'
import {
  STAFF_ROLES,
  loadSchool,
  operatorRateLimit,
  readSheetBody,
  requireOperator,
} from '@/lib/school/operator-access'

export const dynamic = 'force-dynamic'

const MAX_CLASS_ROWS = 300

interface ExistingClass {
  id: string
  name: string
  year_group: string | null
  exam_board: string | null
  teacher_id: string | null
  is_active: boolean | null
}

/**
 * The academic year a class made today belongs to; it starts in September.
 * Written, not left to the column's default, which is the literal '2025-2026'
 * (003_school_analytics.sql). The school's own class route does the same.
 */
function academicYearOf(now: Date): string {
  const year = now.getUTCFullYear()
  return now.getUTCMonth() >= 8 ? `${year}-${year + 1}` : `${year - 1}-${year}`
}

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

    const sheet = parseClassesSheet(read.csv)
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
          error: 'There are no class rows under the header. Nothing was done.',
          ...finishSetupResult(result),
        },
        { status: 422 },
      )
    }
    if (sheet.rows.length > MAX_CLASS_ROWS) {
      return NextResponse.json(
        { error: `At most ${MAX_CLASS_ROWS} classes at a time. Nothing was done.` },
        { status: 422 },
      )
    }

    // The school's classes, active or not, and its staff, pending or not.
    const [classesRead, staffRead] = await Promise.all([
      admin
        .from('classes')
        .select('id, name, year_group, exam_board, teacher_id, is_active')
        .eq('school_id', school.id),
      admin
        .from('school_members')
        .select('id, email, role, invite_status')
        .eq('school_id', school.id)
        .in('role', [...STAFF_ROLES]),
    ])
    if (classesRead.error || staffRead.error) {
      const which = classesRead.error ? 'classes' : 'staff'
      const error = classesRead.error ?? staffRead.error
      console.error(`[admin/schools] classes step: ${which} read failed`, error)
      return NextResponse.json(
        {
          error: `Could not read the school's ${which}, so nothing was done.`,
          detail: error?.message ?? null,
        },
        { status: 500 },
      )
    }
    const classesByKey = new Map<string, ExistingClass[]>()
    for (const c of (classesRead.data ?? []) as ExistingClass[]) {
      const key = classKey(c.name ?? '')
      classesByKey.set(key, [...(classesByKey.get(key) ?? []), c])
    }
    const staffByEmail = new Map<string, { id: string; invite_status: string | null }>()
    for (const m of (staffRead.data ?? []) as Array<{
      id: string
      email: string | null
      invite_status: string | null
    }>) {
      if (m.email)
        staffByEmail.set(m.email.toLowerCase(), { id: m.id, invite_status: m.invite_status })
    }

    const academicYear = academicYearOf(new Date())

    // One class at a time: a school has tens of them, and each result is read.
    for (const r of sheet.rows) {
      const subject = r.classCode
      const teacher = r.teacherEmail ? staffByEmail.get(r.teacherEmail) : undefined
      const teacherProblem = !r.teacherEmail
        ? "No teacher's email is given"
        : !teacher
          ? `No member of staff at this school has the email ${r.teacherEmail} (run the Staff step first, or check the address)`
          : null

      const matches = classesByKey.get(classKey(r.classCode)) ?? []
      if (matches.length > 1) {
        result.failed.push({
          row: r.row,
          subject,
          detail: `${matches.length} classes at this school are already called "${r.classCode}", so this row cannot tell which to change. Nothing was done.`,
        })
        continue
      }

      if (matches.length === 0) {
        const { error: insertError } = await admin
          .from('classes')
          .insert({
            school_id: school.id,
            name: r.classCode,
            year_group: r.yearGroup,
            exam_board: r.examBoard,
            teacher_id: teacher?.id ?? null,
            academic_year: academicYear,
            is_active: true,
          })
          .select('id')
          .single()
        if (insertError) {
          console.error('[admin/schools] class insert failed', r.classCode, insertError)
          result.failed.push({
            row: r.row,
            subject,
            detail: `The class could not be created: ${insertError.message}`,
          })
          continue
        }
        result.created.push({
          row: r.row,
          subject,
          detail: `Created: ${[r.yearGroup, r.examBoard].filter(Boolean).join(', ')}, ${academicYear}${teacher ? `, taught by ${r.teacherEmail}` : ', with no teacher'}.`,
        })
        if (teacherProblem) {
          result.failed.push({
            row: r.row,
            subject,
            detail: `${teacherProblem}, so the class has no teacher and no teacher will see its pupils' work.`,
          })
        }
        continue
      }

      const existing = matches[0]
      const changes: Record<string, unknown> = {}
      const said: string[] = []
      if (r.yearGroup && r.yearGroup !== existing.year_group) {
        changes.year_group = r.yearGroup
        said.push(`year group ${existing.year_group ?? 'none'} to ${r.yearGroup}`)
      }
      if (r.examBoard !== existing.exam_board) {
        changes.exam_board = r.examBoard
        said.push(`exam board ${existing.exam_board ?? 'none'} to ${r.examBoard}`)
      }
      if (teacher && teacher.id !== existing.teacher_id) {
        changes.teacher_id = teacher.id
        said.push(`teacher to ${r.teacherEmail}`)
      }
      if (existing.is_active === false) {
        changes.is_active = true
        said.push('made active again')
      }

      if (said.length === 0) {
        result.skipped.push({
          row: r.row,
          subject,
          detail: 'Already exactly as the sheet says; nothing changed.',
        })
      } else {
        const { error: updateError } = await admin
          .from('classes')
          .update(changes)
          .eq('id', existing.id)
          .select('id')
          .single()
        if (updateError) {
          console.error('[admin/schools] class update failed', r.classCode, updateError)
          result.failed.push({
            row: r.row,
            subject,
            detail: `The class could not be updated: ${updateError.message}`,
          })
          continue
        }
        result.updated.push({ row: r.row, subject, detail: `Updated: ${said.join('; ')}.` })
      }
      if (teacherProblem) {
        result.failed.push({
          row: r.row,
          subject,
          detail: `${teacherProblem}, so the class's teacher was not changed${existing.teacher_id ? '' : ' and it still has none'}.`,
        })
      }
    }

    return NextResponse.json(finishSetupResult(result))
  } catch (err) {
    console.error('[admin/schools] classes step error', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
