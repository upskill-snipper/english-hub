/**
 * GET /api/parent-reports/[id]
 *
 * Returns a single WeeklyReport for the authenticated parent. RLS-equivalent
 * enforcement: the parent must own the row (i.e. `report.parentId === me.id`).
 * Returns 404 rather than 403 on any mismatch - we do not confirm or deny
 * the existence of reports belonging to other parents.
 */

import { NextResponse } from 'next/server'

import { prisma } from '@/lib/prisma'
import { createServerSupabaseClient } from '@/lib/supabase/server'

interface RouteContext {
  readonly params: Promise<{ readonly id: string }>
}

export async function GET(_request: Request, context: RouteContext): Promise<NextResponse> {
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 })
  }

  // Look up the Prisma User row by supabase auth ID.
  const me = await prisma.user.findUnique({
    where: { supabaseUserId: user.id },
    select: { id: true, role: true },
  })
  if (!me) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 })
  }
  if (me.role !== 'PARENT') {
    return NextResponse.json(
      { error: 'Only parent accounts can view parent reports.' },
      { status: 403 },
    )
  }

  const { id } = await context.params
  const report = await prisma.weeklyReport.findFirst({
    where: { id, parentId: me.id },
    select: {
      id: true,
      parentId: true,
      studentId: true,
      weekStarting: true,
      essaysCompleted: true,
      totalTimeSpent: true,
      averageScore: true,
      strengths: true,
      weaknesses: true,
      recommendations: true,
      sentAt: true,
      student: { select: { firstName: true } },
    },
  })

  if (!report) {
    // Deliberately a 404 - this masks whether the row exists under another
    // parent, which aligns with our RLS posture.
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  return NextResponse.json({
    id: report.id,
    studentId: report.studentId,
    studentFirstName: report.student.firstName,
    weekStarting: report.weekStarting,
    essaysCompleted: report.essaysCompleted,
    totalTimeMinutes: report.totalTimeSpent,
    averageScore: report.averageScore,
    strengths: report.strengths ?? [],
    focusAreas: report.weaknesses ?? [],
    suggestions: report.recommendations ?? [],
    sentAt: report.sentAt,
  })
}
