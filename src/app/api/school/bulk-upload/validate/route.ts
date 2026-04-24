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
 * Auth: Supabase user + verifySchoolMember(['admin']). Site admins bypass.
 * Rate limit: 10/min per school to discourage enumeration of class codes.
 *
 * Note: this endpoint never persists rows — its only side-effect is a rate
 * limit increment. The commit endpoint owns all writes.
 */

import { NextRequest, NextResponse } from 'next/server';

import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server';
import { verifySchoolMember } from '@/lib/school-auth';
import { rateLimit, getClientIp } from '@/lib/rate-limit';
import {
  parseStudentsCsv,
  MAX_ROWS,
} from '@/lib/school/csv-parse';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    // 1. Auth
    const supabase = createServerSupabaseClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // 2. Admin-only (school admin OR site admin via synthetic member)
    const member = await verifySchoolMember(user.id, ['admin']);
    if (!member) {
      return NextResponse.json(
        { error: 'Forbidden: school admin role required' },
        { status: 403 },
      );
    }
    const schoolId = member.school_id as string;

    // 3. Rate limit — 10/min per school
    const ip = getClientIp(request.headers);
    const rlIp = await rateLimit(`bulk-upload-validate-ip:${ip}`, {
      limit: 30,
      windowSeconds: 60,
    });
    const rlSchool = await rateLimit(`bulk-upload-validate-school:${schoolId}`, {
      limit: 10,
      windowSeconds: 60,
    });
    if (!rlIp.success || !rlSchool.success) {
      const resetAt = Math.min(
        rlIp.success ? Infinity : rlIp.resetAt,
        rlSchool.success ? Infinity : rlSchool.resetAt,
      );
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please wait a moment and try again.' },
        {
          status: 429,
          headers: {
            'Retry-After': String(Math.ceil((resetAt - Date.now()) / 1000)),
          },
        },
      );
    }

    // 4. Parse multipart
    let formData: FormData;
    try {
      formData = await request.formData();
    } catch {
      return NextResponse.json(
        { error: 'Invalid multipart form data' },
        { status: 400 },
      );
    }

    const file = formData.get('file');
    if (!file || typeof file === 'string') {
      return NextResponse.json(
        { error: 'Missing file field in form data' },
        { status: 422 },
      );
    }
    const blob = file as File;
    const fileName = blob.name ?? '';
    const isCsv =
      fileName.toLowerCase().endsWith('.csv') ||
      blob.type === 'text/csv' ||
      blob.type === 'application/csv' ||
      blob.type === '';
    if (!isCsv) {
      return NextResponse.json(
        {
          error:
            'Only .csv files are accepted. Download the template and save as CSV.',
        },
        { status: 422 },
      );
    }

    // Cap upload at ~512KB — plenty for 500 rows of student data.
    if (blob.size > 512 * 1024) {
      return NextResponse.json(
        {
          error:
            'File is too large. Maximum 500 rows; save a narrower CSV and retry.',
        },
        { status: 413 },
      );
    }

    let csvText: string;
    try {
      csvText = await blob.text();
    } catch {
      return NextResponse.json(
        { error: 'Failed to read uploaded file.' },
        { status: 400 },
      );
    }

    // 5. Load the school's known class codes so the parser can validate
    //    membership. Non-fatal if the classes table is unavailable — the
    //    parser still runs and we flag the response so the client can show
    //    a degraded-mode banner.
    let knownClassCodes: Set<string> | undefined;
    let knownClassCodesChecked = false;
    try {
      const admin = createServiceRoleClient();
      const { data: classRows, error: classErr } = await admin
        .from('classes')
        .select('id, name, code')
        .eq('school_id', schoolId)
        .eq('is_active', true);
      if (!classErr && classRows) {
        knownClassCodes = new Set(
          classRows
            .flatMap((r) => [r.code, r.name])
            .filter((v): v is string => typeof v === 'string' && v.length > 0),
        );
        knownClassCodesChecked = true;
      }
    } catch (err) {
      // Swallow — the parser will skip the class-existence check.
      console.warn('bulk-upload.validate: failed to load classes', err);
    }

    // 6. Parse and validate
    const result = parseStudentsCsv(csvText, {
      knownClassCodes,
      expectedRole: 'STUDENT',
    });

    // 7. Enforce the row cap (parser does not; we do here so the cap lives
    //    alongside other API policies).
    if (result.totalRows > MAX_ROWS) {
      return NextResponse.json(
        {
          error: `Too many rows: ${result.totalRows}. Maximum ${MAX_ROWS} students per upload.`,
        },
        { status: 422 },
      );
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
    );
  } catch (err) {
    console.error('bulk-upload.validate error', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
