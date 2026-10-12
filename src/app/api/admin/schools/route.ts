/**
 * GET /api/admin/schools
 *
 * Every school, for the operator's setup pages (/admin/schools): its access,
 * its AI authorisation and the note recording where the school's written
 * confirmation is held, and how many staff, classes and pupils it has.
 *
 * Site administrators only (verifyAdmin). Service-role reads: the operator is
 * a member of no school.
 *
 * A count that cannot be read is null, with the reason in that school's
 * `problems`, never 0: "no pupils" and "could not count the pupils" are
 * different answers, and the second must not pass for the first.
 *
 * Counts:
 *   members        staff rows in school_members (admin, head of department,
 *                  teacher), whatever their invite status
 *   pendingInvites those of them not yet accepted (pending or expired)
 *   classes        active classes
 *   pupils         accepted pupils, through getSchoolStudents, the one
 *                  definition of a school's pupils (docs/system/08, section 6)
 */

import { NextResponse } from 'next/server'

import { prisma } from '@/lib/prisma'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { getSchoolStudents } from '@/lib/school-students'
import { AI_AUTHORISATION_AUDIT_ACTION } from '@/lib/school/ai-authorisation'
import { STAFF_ROLES, operatorRateLimit, requireOperator } from '@/lib/school/operator-access'
import type { OperatorSchool, OperatorSchoolSummary } from '@/lib/school/setup-result'

export const dynamic = 'force-dynamic'

function reasonOf(e: unknown): string {
  if (e && typeof e === 'object' && 'message' in e) {
    const message = (e as { message?: unknown }).message
    if (typeof message === 'string' && message.trim()) return message.slice(0, 300)
  }
  return e instanceof Error ? e.message : 'no reason given'
}

export async function GET() {
  try {
    const gate = await requireOperator()
    if (gate.response) return gate.response
    const limited = await operatorRateLimit(gate.user.id, 'admin-schools-read', 60)
    if (limited) return limited

    const admin = createServiceRoleClient()
    const { data, error } = await admin
      .from('schools')
      .select('id, name, access_type, access_until, ai_authorised_at, ai_authorised_by')
      .order('name')
    if (error) {
      console.error('[admin/schools] schools read failed', error)
      return NextResponse.json(
        { error: 'Could not read the schools', detail: error.message ?? null },
        { status: 500 },
      )
    }
    const schools = (data ?? []) as OperatorSchool[]

    // The latest authorisation note per school.
    const notes = new Map<string, string>()
    const problems: string[] = []
    if (schools.length > 0) {
      try {
        const entries = await prisma.auditLog.findMany({
          where: {
            action: AI_AUTHORISATION_AUDIT_ACTION,
            resource: 'School',
            resourceId: { in: schools.map((s) => s.id) },
          },
          orderBy: { timestamp: 'desc' },
          select: { resourceId: true, details: true },
        })
        for (const entry of entries) {
          if (notes.has(entry.resourceId)) continue
          const note = (entry.details as { note?: unknown } | null)?.note
          if (typeof note === 'string') notes.set(entry.resourceId, note)
        }
      } catch (e) {
        console.error('[admin/schools] AuditLog read failed', e)
        problems.push(`The AI authorisation notes could not be read: ${reasonOf(e)}`)
      }
    }

    const summaries: OperatorSchoolSummary[] = await Promise.all(
      schools.map(async (school) => {
        const schoolProblems: string[] = []
        const count = async (
          label: string,
          query: PromiseLike<{ count: number | null; error: { message: string } | null }>,
        ): Promise<number | null> => {
          const { count: n, error: countError } = await query
          if (countError || typeof n !== 'number') {
            schoolProblems.push(
              `The ${label} could not be counted: ${countError ? reasonOf(countError) : 'no count returned'}`,
            )
            return null
          }
          return n
        }

        const [members, pendingInvites, classes] = await Promise.all([
          count(
            'staff',
            admin
              .from('school_members')
              .select('id', { count: 'exact', head: true })
              .eq('school_id', school.id)
              .in('role', [...STAFF_ROLES]),
          ),
          count(
            'pending invitations',
            admin
              .from('school_members')
              .select('id', { count: 'exact', head: true })
              .eq('school_id', school.id)
              .in('role', [...STAFF_ROLES])
              .in('invite_status', ['pending', 'expired']),
          ),
          count(
            'classes',
            admin
              .from('classes')
              .select('id', { count: 'exact', head: true })
              .eq('school_id', school.id)
              .eq('is_active', true),
          ),
        ])

        let pupils: number | null = null
        try {
          pupils = (await getSchoolStudents(admin, school.id, { acceptedOnly: true })).length
        } catch (e) {
          schoolProblems.push(`The pupils could not be counted: ${reasonOf(e)}`)
        }

        return {
          ...school,
          ai_authorisation_note: notes.get(school.id) ?? null,
          counts: { members, pendingInvites, classes, pupils },
          problems: schoolProblems,
        }
      }),
    )

    return NextResponse.json({ schools: summaries, problems })
  } catch (err) {
    console.error('[admin/schools] GET error', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
