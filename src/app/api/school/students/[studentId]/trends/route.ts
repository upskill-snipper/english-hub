import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { verifySchoolMember } from '@/lib/school-auth'
import { verifyStudentInSchool } from '@/lib/school-student-auth'

export const dynamic = 'force-dynamic'

function getWeekStart(date: Date): string {
  const d = new Date(date)
  const day = d.getDay()
  const diff = d.getDate() - day + (day === 0 ? -6 : 1) // Monday start
  d.setDate(diff)
  d.setHours(0, 0, 0, 0)
  return d.toISOString().split('T')[0]
}

interface WeekBucket {
  scores: number[]
  modules_completed: number
  time_spent_seconds: number
  practice_count: number
}

export async function GET(
  request: NextRequest,
  { params }: { params: { studentId: string } }
) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-student-trends:${ip}`, { limit: 30, windowSeconds: 60 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } }
      )
    }

    const supabase = createServerSupabaseClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const membership = await verifySchoolMember(user.id)
    if (!membership) {
      return NextResponse.json({ error: 'Forbidden: not a school member' }, { status: 403 })
    }

    const { studentId } = params
    const staffRoles = ['admin', 'head_of_department', 'teacher']

    // Students can only view their own trends
    if (!staffRoles.includes(membership.role) && user.id !== studentId) {
      return NextResponse.json({ error: 'Forbidden: you can only view your own progress' }, { status: 403 })
    }

    if (!(await verifyStudentInSchool(studentId, membership.school_id))) {
      return NextResponse.json({ error: 'Student not found in your school' }, { status: 404 })
    }

    const admin = createServiceRoleClient()
    const eightWeeksAgo = new Date(Date.now() - 8 * 7 * 24 * 60 * 60 * 1000).toISOString()

    const [progressResult, practiceResult] = await Promise.all([
      admin.from('module_progress')
        .select('quiz_score, completed, time_spent_seconds, completed_at')
        .eq('user_id', studentId)
        .gte('completed_at', eightWeeksAgo)
        .not('completed_at', 'is', null)
        .order('completed_at', { ascending: true }),
      admin.from('practice_sessions')
        .select('id, time_spent_seconds, created_at')
        .eq('user_id', studentId)
        .gte('created_at', eightWeeksAgo)
        .order('created_at', { ascending: true }),
    ])

    // Initialize the last 8 weeks
    const weeks = new Map<string, WeekBucket>()
    for (let i = 0; i < 8; i++) {
      const date = new Date(Date.now() - i * 7 * 24 * 60 * 60 * 1000)
      const weekStart = getWeekStart(date)
      if (!weeks.has(weekStart)) {
        weeks.set(weekStart, { scores: [], modules_completed: 0, time_spent_seconds: 0, practice_count: 0 })
      }
    }

    // Fill in module progress data
    for (const p of (progressResult.data || []) as Array<{
      quiz_score: number | null; completed: boolean; time_spent_seconds: number; completed_at: string
    }>) {
      const weekStart = getWeekStart(new Date(p.completed_at))
      if (!weeks.has(weekStart)) {
        weeks.set(weekStart, { scores: [], modules_completed: 0, time_spent_seconds: 0, practice_count: 0 })
      }
      const week = weeks.get(weekStart)!
      if (p.quiz_score !== null) week.scores.push(p.quiz_score)
      if (p.completed) week.modules_completed++
      week.time_spent_seconds += p.time_spent_seconds || 0
    }

    // Fill in practice sessions data
    for (const p of (practiceResult.data || []) as Array<{
      id: string; time_spent_seconds: number; created_at: string
    }>) {
      const weekStart = getWeekStart(new Date(p.created_at))
      if (!weeks.has(weekStart)) {
        weeks.set(weekStart, { scores: [], modules_completed: 0, time_spent_seconds: 0, practice_count: 0 })
      }
      const week = weeks.get(weekStart)!
      week.practice_count++
      week.time_spent_seconds += p.time_spent_seconds || 0
    }

    // Convert to sorted array matching the spec shape
    const trends = Array.from(weeks.entries())
      .map(([weekStart, data]) => ({
        week: weekStart,
        avg_score: data.scores.length > 0
          ? Math.round(data.scores.reduce((a, b) => a + b, 0) / data.scores.length)
          : null,
        modules_completed: data.modules_completed,
        time_spent_minutes: Math.round(data.time_spent_seconds / 60),
        practice_count: data.practice_count,
      }))
      .sort((a, b) => a.week.localeCompare(b.week))

    return NextResponse.json({
      student_id: studentId,
      period: 'last_8_weeks',
      trends,
    })
  } catch (error) {
    console.error('Student trends error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
