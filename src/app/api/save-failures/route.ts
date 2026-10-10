import { NextRequest, NextResponse } from 'next/server'
import * as Sentry from '@sentry/nextjs'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { rateLimit } from '@/lib/rate-limit'
import { parseSaveFailureReport } from '@/lib/save-failure-report'

/**
 * POST /api/save-failures: a student's practice answer or finished mock exam
 * failed to save, and their browser says so.
 *
 * WHY (10 October 2026). Until then a failed save reached nobody, so an empty
 * practice_sessions table could not be told apart from a broken one; see
 * src/lib/save-failure-report.ts. This route makes the failure a record.
 *
 * WHERE IT GOES. One `[save-failure]` line in the server log, which exists in
 * production whatever the Sentry settings, and a Sentry event tagged by save
 * path and code, which is reported once a SENTRY_DSN is set. The browser has
 * no Sentry of its own (no client DSN), which is why the report comes here.
 *
 * WHAT IT RECORDS. Only the report as parseSaveFailureReport accepts it: the
 * save path, the error code, the HTTP status and the message with quoted
 * values removed. Never the student's answer, the question or the account. A
 * failure that reaches every account is the one this exists to catch, and the
 * code and time are enough to find it; one account's failure is placed by the
 * time alone.
 *
 * WHO MAY REPORT. A signed-in student, because both saves run only for one.
 * Twenty reports an hour each, which a student saving by hand cannot reach.
 * The middleware's same-origin check applies, as to every API mutation.
 */
export async function POST(req: NextRequest) {
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const rl = await rateLimit(`save-failures:${user.id}`, { limit: 20, windowSeconds: 3600 })
  if (!rl.success) return NextResponse.json({ error: 'Too many reports' }, { status: 429 })

  let body: unknown = null
  try {
    body = await req.json()
  } catch {
    body = null
  }
  const report = parseSaveFailureReport(body)
  if (!report) return NextResponse.json({ error: 'Not a save-failure report' }, { status: 400 })

  console.error('[save-failure]', JSON.stringify(report))
  Sentry.captureMessage(`A student's ${report.path} save failed: ${report.code}`, {
    level: 'error',
    tags: { area: 'student-save', path: report.path, code: report.code },
    extra: { status: report.status, message: report.message },
  })
  return new NextResponse(null, { status: 204 })
}
