/**
 * POST /api/school/bulk-upload/validate
 *
 * Admin-gated endpoint that parses and validates an uploaded student CSV
 * without touching the database. The client uses this to render the preview
 * table and "errors CSV" download; only after the admin reviews the preview
 * does the browser post to `/commit` with the validated rows.
 *
 * Request: multipart/form-data with a single `file` field (the CSV).
 * Response 200:
 *   {
 *     valid: StudentRow[],
 *     errors: ParseError[],
 *     totalRows: number,
 *     knownClassCodesChecked: boolean,
 *   }
 *
 * Auth: Supabase user + verifySchoolMember(['admin']). A site admin passes the
 * role check with a synthetic membership that has no real school, so they are
 * refused with a 422 pointing at /admin/schools, where the operator uploads
 * pupils into a named school.
 * Rate limit: 10/min per school to discourage enumeration of class codes.
 *
 * Note: this endpoint never persists rows - its only side-effect is a rate
 * limit increment. The commit endpoint owns all writes.
 */

import { NextRequest, NextResponse } from 'next/server'

import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { verifySchoolMember } from '@/lib/school-auth'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { parseStudentsCsv, MAX_ROWS } from '@/lib/school/csv-parse'
import { loadActiveClasses } from '@/lib/school/school-classes'
import { isUuid } from '@/lib/school/is-uuid'

export const dynamic = 'force-dynamic'

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

    // 2. Admin-only (school admin OR site admin via synthetic member)
    const member = await verifySchoolMember(user.id, ['admin'])
    if (!member) {
      return NextResponse.json({ error: 'Forbidden: school admin role required' }, { status: 403 })
    }
    const schoolId = member.school_id as string
    // A site administrator's synthetic membership has no real school; the
    // commit refuses it, so the preview says so first (see isUuid).
    if (!isUuid(schoolId)) {
      return NextResponse.json(
        {
          error:
            'This account is not attached to a school. A site administrator uploads pupils from /admin/schools.',
        },
        { status: 422 },
      )
    }

    // 3. Rate limit - 10/min per school
    const ip = getClientIp(request.headers)
    const rlIp = await rateLimit(`bulk-upload-validate-ip:${ip}`, {
      limit: 30,
      windowSeconds: 60,
    })
    const rlSchool = await rateLimit(`bulk-upload-validate-school:${schoolId}`, {
      limit: 10,
      windowSeconds: 60,
    })
    if (!rlIp.success || !rlSchool.success) {
      const resetAt = Math.min(
        rlIp.success ? Infinity : rlIp.resetAt,
        rlSchool.success ? Infinity : rlSchool.resetAt,
      )
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please wait a moment and try again.' },
        {
          status: 429,
          headers: {
            'Retry-After': String(Math.ceil((resetAt - Date.now()) / 1000)),
          },
        },
      )
    }

    // 4. Parse multipart
    let formData: FormData
    try {
      formData = await request.formData()
    } catch {
      return NextResponse.json({ error: 'Invalid multipart form data' }, { status: 400 })
    }

    const file = formData.get('file')
    if (!file || typeof file === 'string') {
      return NextResponse.json({ error: 'Missing file field in form data' }, { status: 422 })
    }
    const blob = file as File
    const fileName = blob.name ?? ''
    const isCsv =
      fileName.toLowerCase().endsWith('.csv') ||
      blob.type === 'text/csv' ||
      blob.type === 'application/csv' ||
      blob.type === ''
    if (!isCsv) {
      return NextResponse.json(
        {
          error: 'Only .csv files are accepted. Download the template and save as CSV.',
        },
        { status: 422 },
      )
    }

    // Cap upload at ~512KB - plenty for 500 rows of student data.
    if (blob.size > 512 * 1024) {
      return NextResponse.json(
        {
          error: 'File is too large. Maximum 500 rows; save a narrower CSV and retry.',
        },
        { status: 413 },
      )
    }

    let csvText: string
    try {
      csvText = await blob.text()
    } catch {
      return NextResponse.json({ error: 'Failed to read uploaded file.' }, { status: 400 })
    }

    // 5. Load the school's class codes so the parser can check each row's.
    //    A class code is the class's `name`, matched among the school's
    //    ACTIVE classes, exactly as the commit places pupils
    //    (src/lib/school/school-classes.ts).
    //
    //    FIXED 12 October 2026: this selected `id, name, code`. `classes` has
    //    no `code` column, PostgREST refused the whole select, and the error
    //    was ignored, so every preview said the codes "could not be
    //    validated" and let any code through to the commit.
    //
    //    If the classes cannot be read the parser still runs, the response
    //    says the codes were not checked, and the page shows a warning. The
    //    reason is logged at error level: it is a fault, not a mode.
    let knownClassCodes: Set<string> | undefined
    let knownClassCodesChecked = false
    try {
      const loaded = await loadActiveClasses(createServiceRoleClient(), schoolId)
      if (loaded.error === null) {
        knownClassCodes = new Set(loaded.classes.map((c) => c.name).filter((n) => n.length > 0))
        knownClassCodesChecked = true
      } else {
        console.error('bulk-upload.validate: failed to load classes', loaded.error)
      }
    } catch (err) {
      console.error('bulk-upload.validate: failed to load classes', err)
    }

    // 6. Parse and validate
    const result = parseStudentsCsv(csvText, {
      knownClassCodes,
      expectedRole: 'STUDENT',
    })

    // 7. Enforce the row cap (parser does not; we do here so the cap lives
    //    alongside other API policies).
    if (result.totalRows > MAX_ROWS) {
      return NextResponse.json(
        {
          error: `Too many rows: ${result.totalRows}. Maximum ${MAX_ROWS} students per upload.`,
        },
        { status: 422 },
      )
    }

    return NextResponse.json(
      {
        valid: result.valid,
        errors: result.errors,
        totalRows: result.totalRows,
        knownClassCodesChecked,
        fileName,
      },
      { status: 200 },
    )
  } catch (err) {
    console.error('bulk-upload.validate error', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
