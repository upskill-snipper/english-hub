import type { SupabaseClient } from '@supabase/supabase-js'
import { isSchoolAccessActive, type SchoolAccessRow } from '@/lib/school-access'
import type { CoachReport } from '@/lib/game-results/coach'

/**
 * What the class's Games tab and the class report route share (23 October
 * 2026): whether the school may have an AI class report written at all, and
 * the latest report stored for a class.
 *
 * A school may have one when its access is live (isSchoolAccessActive, THE
 * rule for a live school) and it has recorded its authorisation for AI
 * processing (schools.ai_authorised_at, the record a school makes once, as
 * data controller, that its privacy notice covers AI processing and parents
 * have been told; src/lib/consent-check.ts). A failed read throws: the caller
 * must say the state could not be read, never show "not authorised" or an
 * empty report as if that were the truth.
 */

export type SchoolAiStatus = 'ok' | 'not_live' | 'not_authorised'

interface SchoolRow extends SchoolAccessRow {
  id: string
  ai_authorised_at: string | null
}

/** A recorded authorisation is a real timestamp; a NULL or garbage is "not authorised". */
function isRecorded(value: string | null): boolean {
  return typeof value === 'string' && value.trim() !== '' && !Number.isNaN(Date.parse(value))
}

export async function schoolAiStatus(
  svc: SupabaseClient,
  schoolId: string,
): Promise<SchoolAiStatus> {
  const { data, error } = await svc
    .from('schools')
    .select('id, access_type, access_until, subscription_status, ai_authorised_at')
    .eq('id', schoolId)
    .maybeSingle<SchoolRow>()
  if (error) throw new Error(`schools read failed: ${error.message}`)
  if (!data || !isSchoolAccessActive(data)) return 'not_live'
  return isRecorded(data.ai_authorised_at) ? 'ok' : 'not_authorised'
}

/** A stored class report, as the Games tab shows it. */
export interface StoredClassReport {
  report: CoachReport
  createdAt: string
  pupilsUsed: number
  answersUsed: number
}

interface ReportRow {
  report: CoachReport
  created_at: string
  pupils_used: number
  answers_used: number
}

/** The newest report written for the class, or null. Throws on a read error. */
export async function latestClassReport(
  svc: SupabaseClient,
  classId: string,
): Promise<StoredClassReport | null> {
  const { data, error } = await svc
    .from('class_coach_reports')
    .select('report, created_at, pupils_used, answers_used')
    .eq('class_id', classId)
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle<ReportRow>()
  if (error) throw new Error(`class_coach_reports read failed: ${error.message}`)
  if (!data) return null
  return {
    report: data.report,
    createdAt: data.created_at,
    pupilsUsed: data.pupils_used,
    answersUsed: data.answers_used,
  }
}
