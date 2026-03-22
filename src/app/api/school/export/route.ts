import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { verifySchoolMember } from '@/lib/school-auth'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { allCourses } from '@/data/courses'

export const dynamic = 'force-dynamic'

function escapeCsvField(value: string | number | null | undefined): string {
  if (value === null || value === undefined) return ''
  let str = String(value)
  // Prevent CSV formula injection — prefix dangerous leading characters
  if (/^[=+\-@]/.test(str)) {
    str = `'${str}`
  }
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return `"${str.replace(/"/g, '""')}"`
  }
  return str
}

function predictGrade(avgScore: number | null): string {
  if (avgScore === null) return ''
  if (avgScore >= 90) return 'Grade 9'
  if (avgScore >= 80) return 'Grade 8'
  if (avgScore >= 70) return 'Grade 7'
  if (avgScore >= 60) return 'Grade 6'
  if (avgScore >= 50) return 'Grade 5'
  if (avgScore >= 40) return 'Grade 4'
  if (avgScore >= 30) return 'Grade 3'
  if (avgScore >= 20) return 'Grade 2'
  return 'Grade 1'
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = rateLimit(`school-export:${ip}`, { limit: 5, windowSeconds: 60 })
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

    const membership = await verifySchoolMember(user.id, ['admin', 'head_of_department'])
    if (!membership) {
      return NextResponse.json({ error: 'Forbidden: requires admin or head of department role' }, { status: 403 })
    }

    let body: { class_id?: string; format?: string }
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    const { class_id, format = 'csv' } = body

    if (format !== 'csv') {
      return NextResponse.json({ error: 'Only CSV format is currently supported' }, { status: 422 })
    }

    const admin = createServiceRoleClient()

    // Determine which classes to export
    let classIds: string[] = []
    if (class_id) {
      // Verify class belongs to school
      const { data: cls } = await admin
        .from('classes')
        .select('id')
        .eq('id', class_id)
        .eq('school_id', membership.school_id)
        .single()

      if (!cls) {
        return NextResponse.json({ error: 'Class not found in your school' }, { status: 404 })
      }
      classIds = [class_id]
    } else {
      const { data: classes } = await admin
        .from('classes')
        .select('id')
        .eq('school_id', membership.school_id)
        .eq('is_active', true)

      classIds = (classes || []).map((c: { id: string }) => c.id)
    }

    if (classIds.length === 0) {
      return NextResponse.json({ error: 'No classes found' }, { status: 404 })
    }

    // Get all students across these classes
    const { data: classStudents } = await admin
      .from('class_students')
      .select('class_id, student_id')
      .in('class_id', classIds)
      .eq('is_active', true)

    const studentIds = Array.from(new Set((classStudents || []).map((s: { student_id: string }) => s.student_id)))

    if (studentIds.length === 0) {
      return new NextResponse('No student data to export', { status: 200 })
    }

    // Total modules available from static course data
    const totalModulesAvailable = allCourses.reduce((sum, c) => sum + c.moduleList.length, 0)

    // Fetch all data in parallel
    const [profilesResult, progressResult, practiceResult, certificatesResult] = await Promise.all([
      admin.from('profiles').select('id, email, full_name, year_group').in('id', studentIds),
      admin.from('module_progress').select('user_id, quiz_score, completed, time_spent_seconds, completed_at').in('user_id', studentIds),
      admin.from('practice_sessions').select('user_id').in('user_id', studentIds),
      admin.from('certificates').select('user_id').in('user_id', studentIds),
    ])

    // Aggregate module progress per student
    const progressByStudent = new Map<string, {
      scores: number[]; completed: number; timeSpent: number;
      recentScores: number[]; previousScores: number[]
    }>()

    const now = new Date()
    const fourWeeksAgo = new Date(now.getTime() - 28 * 24 * 60 * 60 * 1000)
    const eightWeeksAgo = new Date(now.getTime() - 56 * 24 * 60 * 60 * 1000)

    for (const p of (progressResult.data || []) as Array<{
      user_id: string; quiz_score: number | null; completed: boolean;
      time_spent_seconds: number; completed_at: string | null
    }>) {
      if (!progressByStudent.has(p.user_id)) {
        progressByStudent.set(p.user_id, { scores: [], completed: 0, timeSpent: 0, recentScores: [], previousScores: [] })
      }
      const entry = progressByStudent.get(p.user_id)!
      if (p.completed) entry.completed++
      if (p.quiz_score !== null) entry.scores.push(p.quiz_score)
      entry.timeSpent += p.time_spent_seconds || 0

      // Trajectory data
      if (p.completed_at && p.quiz_score !== null) {
        const completedDate = new Date(p.completed_at)
        if (completedDate >= fourWeeksAgo) {
          entry.recentScores.push(p.quiz_score)
        } else if (completedDate >= eightWeeksAgo) {
          entry.previousScores.push(p.quiz_score)
        }
      }
    }

    // Count practice sessions per student
    const practiceByStudent = new Map<string, number>()
    for (const p of (practiceResult.data || []) as Array<{ user_id: string }>) {
      practiceByStudent.set(p.user_id, (practiceByStudent.get(p.user_id) || 0) + 1)
    }

    // Count certificates per student
    const certsByStudent = new Map<string, number>()
    for (const c of (certificatesResult.data || []) as Array<{ user_id: string }>) {
      certsByStudent.set(c.user_id, (certsByStudent.get(c.user_id) || 0) + 1)
    }

    // Build CSV with spec-required headers
    const headers = [
      'Name',
      'Email',
      'Year Group',
      'Modules Completed',
      'Total Modules',
      'Completion %',
      'Avg Score',
      'Time Spent (hrs)',
      'Practice Sessions',
      'Certificates',
      'Trajectory',
      'Predicted Grade',
    ]

    const rows = (profilesResult.data || []).map((profile: {
      id: string; email: string; full_name: string; year_group: string
    }) => {
      const progress = progressByStudent.get(profile.id)
      const practiceCount = practiceByStudent.get(profile.id) || 0
      const certCount = certsByStudent.get(profile.id) || 0

      const modulesCompleted = progress?.completed || 0
      const completionPct = totalModulesAvailable > 0
        ? Math.round((modulesCompleted / totalModulesAvailable) * 100)
        : 0

      const avgScore = progress && progress.scores.length > 0
        ? Math.round(progress.scores.reduce((a, b) => a + b, 0) / progress.scores.length)
        : null

      const timeSpentHours = progress
        ? Math.round((progress.timeSpent / 3600) * 10) / 10
        : 0

      // Trajectory
      let trajectory = 'Stable'
      if (progress && progress.recentScores.length > 0 && progress.previousScores.length > 0) {
        const recentAvg = progress.recentScores.reduce((a, b) => a + b, 0) / progress.recentScores.length
        const previousAvg = progress.previousScores.reduce((a, b) => a + b, 0) / progress.previousScores.length
        const diff = recentAvg - previousAvg
        if (diff > 5) trajectory = 'Improving'
        else if (diff < -5) trajectory = 'Declining'
      }

      const grade = predictGrade(avgScore)

      return [
        escapeCsvField(profile.full_name),
        escapeCsvField(profile.email),
        escapeCsvField(profile.year_group),
        modulesCompleted,
        totalModulesAvailable,
        completionPct,
        avgScore ?? '',
        timeSpentHours,
        practiceCount,
        certCount,
        trajectory,
        escapeCsvField(grade),
      ].join(',')
    })

    const csv = [headers.join(','), ...rows].join('\n')

    return new NextResponse(csv, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="school-export-${new Date().toISOString().split('T')[0]}.csv"`,
      },
    })
  } catch (error) {
    console.error('Export error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
