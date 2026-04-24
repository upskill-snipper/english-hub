/**
 * GET /api/parent-reports
 *
 * Paginated list of WeeklyReport rows for the authenticated parent, across
 * all of their linked children. Most recent week first.
 *
 * Query: `?cursor=<weekStarting ISO>&limit=<1..50>`
 * RLS-equivalent: filter hard-wired to `parentId === me.id`.
 */

import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

import { prisma } from '@/lib/prisma'
import { createServerSupabaseClient } from '@/lib/supabase/server'

const querySchema = z.object({
  cursor: z.string().datetime().optional(),
  limit: z.coerce.number().int().min(1).max(50).default(20),
})

export async function GET(request: NextRequest): Promise<NextResponse> {
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 })
  }

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

  let parsed
  try {
    parsed = querySchema.parse({
      cursor: request.nextUrl.searchParams.get('cursor') ?? undefined,
      limit: request.nextUrl.searchParams.get('limit') ?? undefined,
    })
  } catch (err) {
    return NextResponse.json(
      { error: 'Invalid query', detail: err instanceof Error ? err.message : undefined },
      { status: 400 },
    )
  }

  const cursorDate = parsed.cursor ? new Date(parsed.cursor) : null

  const rows = await prisma.weeklyReport.findMany({
    where: {
      parentId: me.id,
      ...(cursorDate ? { weekStarting: { lt: cursorDate } } : {}),
    },
    orderBy: { weekStarting: 'desc' },
    take: parsed.limit + 1, // over-fetch by 1 to compute nextCursor
    select: {
      id: true,
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

  const hasMore = rows.length > parsed.limit
  const page = hasMore ? rows.slice(0, parsed.limit) : rows
  const nextCursor = hasMore
    ? page[page.length - 1]!.weekStarting.toISOString()
    : null

  return NextResponse.json({
    data: page.map((r) => ({
      id: r.id,
      studentId: r.studentId,
      studentFirstName: r.student.firstName,
      weekStarting: r.weekStarting,
      essaysCompleted: r.essaysCompleted,
      totalTimeMinutes: r.totalTimeSpent,
      averageScore: r.averageScore,
      strengths: r.strengths ?? [],
      focusAreas: r.weaknesses ?? [],
      suggestions: r.recommendations ?? [],
      sentAt: r.sentAt,
    })),
    nextCursor,
  })
}
