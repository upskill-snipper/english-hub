import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { verifySchoolMember } from '@/lib/school-auth'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

export const dynamic = 'force-dynamic'

// ── Types ──

type InterventionType =
  | 'one_to_one'
  | 'small_group'
  | 'differentiated_resources'
  | 'peer_tutoring'
  | 'parent_contact'
  | 'referral'
  | 'revision_session'
  | 'other'

type InterventionStatus = 'planned' | 'in_progress' | 'completed' | 'cancelled'

type InterventionPriority = 'urgent' | 'high' | 'medium' | 'low'

interface Intervention {
  id: string
  class_id: string
  class_name: string
  created_by: string
  created_by_name: string | null
  type: InterventionType
  priority: InterventionPriority
  status: InterventionStatus
  title: string
  description: string
  /** Student IDs this intervention targets */
  target_student_ids: string[]
  /** Student names for display */
  target_student_names: string[]
  /** The skill/area this intervention addresses */
  target_area: string | null
  /** Start date of the intervention */
  start_date: string
  /** Expected end/review date */
  review_date: string | null
  /** Notes on progress or outcomes */
  notes: string | null
  /** Measurable success criteria */
  success_criteria: string | null
  /** Pre-intervention baseline score */
  baseline_score: number | null
  /** Post-intervention score (filled in on completion) */
  outcome_score: number | null
  created_at: string
  updated_at: string
}

interface CreateInterventionRequest {
  class_id: string
  type: InterventionType
  priority?: InterventionPriority
  title: string
  description: string
  target_student_ids: string[]
  target_area?: string
  start_date?: string
  review_date?: string
  success_criteria?: string
}

/**
 * GET /api/school/interventions?classId=xxx
 * GET /api/school/interventions?status=planned
 * GET /api/school/interventions (all interventions for the teacher's classes)
 *
 * Returns intervention plans with student targeting and progress tracking.
 *
 * In production, this would query an `interventions` table that stores:
 * - intervention metadata (type, priority, dates, criteria)
 * - an `intervention_students` junction table linking interventions to students
 * - progress notes as an `intervention_notes` table or JSONB array
 * The route would also compute baseline and outcome scores from module_progress.
 */
export async function GET(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-interventions:${ip}`, { limit: 30, windowSeconds: 60 })
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

    const member = await verifySchoolMember(user.id)
    if (!member) {
      return NextResponse.json({ error: 'Forbidden: not a school member' }, { status: 403 })
    }

    const { searchParams } = new URL(request.url)
    const classId = searchParams.get('classId')
    const statusFilter = searchParams.get('status') as InterventionStatus | null
    const priorityFilter = searchParams.get('priority') as InterventionPriority | null

    const admin = createServiceRoleClient()

    // Get accessible classes
    const staffRoles = ['admin', 'head_of_department']
    let classQuery = admin.from('classes')
      .select('id, name, teacher_id')
      .eq('school_id', member.school_id)
      .eq('is_active', true)

    if (classId) {
      classQuery = classQuery.eq('id', classId)
    } else if (!staffRoles.includes(member.role)) {
      classQuery = classQuery.eq('teacher_id', member.id)
    }

    const { data: classes } = await classQuery
    const classesData = (classes || []) as Array<{ id: string; name: string; teacher_id: string | null }>

    if (classesData.length === 0) {
      return NextResponse.json({ interventions: [], total: 0 })
    }

    const classIds = classesData.map(c => c.id)
    const classMap = new Map(classesData.map(c => [c.id, c]))

    // Fetch students in these classes
    const { data: classStudentsData } = await admin
      .from('class_students')
      .select('class_id, student_id')
      .in('class_id', classIds)
      .eq('is_active', true)

    const classStudents = (classStudentsData || []) as Array<{ class_id: string; student_id: string }>
    const allStudentIds = Array.from(new Set(classStudents.map(cs => cs.student_id)))

    // Fetch profiles and progress for at-risk detection
    let profiles: Array<{ id: string; full_name: string | null; email: string }> = []
    let progressData: Array<{
      user_id: string; quiz_score: number | null; completed: boolean; completed_at: string | null
    }> = []

    if (allStudentIds.length > 0) {
      const [profilesResult, progressResult] = await Promise.all([
        admin.from('profiles')
          .select('id, full_name, email')
          .in('id', allStudentIds),
        admin.from('module_progress')
          .select('user_id, quiz_score, completed, completed_at')
          .in('user_id', allStudentIds),
      ])
      profiles = (profilesResult.data || []) as typeof profiles
      progressData = (progressResult.data || []) as typeof progressData
    }

    const profileMap = new Map(profiles.map(p => [p.id, p]))

    // Build per-student score aggregates
    const studentAgg = new Map<string, { avg: number; count: number }>()
    const studentScores = new Map<string, number[]>()
    for (const p of progressData) {
      if (p.quiz_score !== null) {
        if (!studentScores.has(p.user_id)) studentScores.set(p.user_id, [])
        studentScores.get(p.user_id)!.push(p.quiz_score)
      }
    }
    for (const [sid, scores] of studentScores) {
      studentAgg.set(sid, {
        avg: Math.round(scores.reduce((a, b) => a + b, 0) / scores.length),
        count: scores.length,
      })
    }

    // In production, this would query the `interventions` table.
    // For now, auto-generate suggested interventions based on at-risk students.
    const interventions: Intervention[] = []

    const studentsByClass = new Map<string, string[]>()
    for (const cs of classStudents) {
      if (!studentsByClass.has(cs.class_id)) studentsByClass.set(cs.class_id, [])
      studentsByClass.get(cs.class_id)!.push(cs.student_id)
    }

    for (const cls of classesData) {
      const classStudentIds = studentsByClass.get(cls.id) || []
      const atRiskStudents = classStudentIds.filter(sid => {
        const agg = studentAgg.get(sid)
        return agg && agg.avg < 50
      })

      const decliningStudents = classStudentIds.filter(sid => {
        const scores = studentScores.get(sid)
        if (!scores || scores.length < 4) return false
        const mid = Math.floor(scores.length / 2)
        const firstHalf = scores.slice(0, mid)
        const secondHalf = scores.slice(mid)
        const firstAvg = firstHalf.reduce((a, b) => a + b, 0) / firstHalf.length
        const secondAvg = secondHalf.reduce((a, b) => a + b, 0) / secondHalf.length
        return secondAvg - firstAvg < -5
      })

      // Generate interventions for at-risk students
      if (atRiskStudents.length > 0) {
        const targetNames = atRiskStudents.map(sid => {
          const p = profileMap.get(sid)
          return p?.full_name || p?.email || 'Unknown'
        })

        // Determine the weakest area for these students
        const avgScoreForGroup = atRiskStudents
          .map(sid => studentAgg.get(sid)?.avg || 0)
          .reduce((a, b) => a + b, 0) / atRiskStudents.length

        const intervention: Intervention = {
          id: `${cls.id}-intervention-atrisk`,
          class_id: cls.id,
          class_name: cls.name,
          created_by: member.id,
          created_by_name: member.full_name,
          type: atRiskStudents.length <= 3 ? 'one_to_one' : 'small_group',
          priority: avgScoreForGroup < 30 ? 'urgent' : 'high',
          status: 'planned',
          title: `Support for underperforming students in ${cls.name}`,
          description: `${atRiskStudents.length} student(s) averaging below 50%. ` +
            `Targeted support needed to close the gap before the next assessment window.`,
          target_student_ids: atRiskStudents,
          target_student_names: targetNames,
          target_area: 'Overall performance',
          start_date: new Date().toISOString().split('T')[0],
          review_date: new Date(Date.now() + 28 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          notes: null,
          success_criteria: 'All targeted students achieve at least 50% average across modules',
          baseline_score: Math.round(avgScoreForGroup),
          outcome_score: null,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        }

        if (!statusFilter || intervention.status === statusFilter) {
          if (!priorityFilter || intervention.priority === priorityFilter) {
            interventions.push(intervention)
          }
        }
      }

      // Generate intervention for declining students (if different from at-risk)
      const decliningOnly = decliningStudents.filter(sid => !atRiskStudents.includes(sid))
      if (decliningOnly.length > 0) {
        const targetNames = decliningOnly.map(sid => {
          const p = profileMap.get(sid)
          return p?.full_name || p?.email || 'Unknown'
        })

        const intervention: Intervention = {
          id: `${cls.id}-intervention-declining`,
          class_id: cls.id,
          class_name: cls.name,
          created_by: member.id,
          created_by_name: member.full_name,
          type: 'differentiated_resources',
          priority: 'medium',
          status: 'planned',
          title: `Address declining performance in ${cls.name}`,
          description: `${decliningOnly.length} student(s) showing a declining trajectory. ` +
            `Early intervention recommended to prevent further drops.`,
          target_student_ids: decliningOnly,
          target_student_names: targetNames,
          target_area: 'Performance trajectory',
          start_date: new Date().toISOString().split('T')[0],
          review_date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          notes: null,
          success_criteria: 'Halt declining trend; stabilise or improve scores over next 2 weeks',
          baseline_score: null,
          outcome_score: null,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        }

        if (!statusFilter || intervention.status === statusFilter) {
          if (!priorityFilter || intervention.priority === priorityFilter) {
            interventions.push(intervention)
          }
        }
      }

      // Low-engagement intervention
      const noActivityStudents = classStudentIds.filter(sid => !studentScores.has(sid))
      if (noActivityStudents.length > 0) {
        const targetNames = noActivityStudents.map(sid => {
          const p = profileMap.get(sid)
          return p?.full_name || p?.email || 'Unknown'
        })

        const intervention: Intervention = {
          id: `${cls.id}-intervention-engagement`,
          class_id: cls.id,
          class_name: cls.name,
          created_by: member.id,
          created_by_name: member.full_name,
          type: 'parent_contact',
          priority: 'medium',
          status: 'planned',
          title: `Engagement follow-up for ${cls.name}`,
          description: `${noActivityStudents.length} student(s) have no recorded quiz activity. ` +
            `Contact parents/guardians to ensure students can access the platform.`,
          target_student_ids: noActivityStudents,
          target_student_names: targetNames,
          target_area: 'Engagement',
          start_date: new Date().toISOString().split('T')[0],
          review_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          notes: null,
          success_criteria: 'All targeted students complete at least one module within review period',
          baseline_score: 0,
          outcome_score: null,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        }

        if (!statusFilter || intervention.status === statusFilter) {
          if (!priorityFilter || intervention.priority === priorityFilter) {
            interventions.push(intervention)
          }
        }
      }
    }

    // Sort by priority (urgent first), then by created_at
    const priorityOrder: Record<InterventionPriority, number> = {
      urgent: 0, high: 1, medium: 2, low: 3,
    }
    interventions.sort((a, b) =>
      priorityOrder[a.priority] - priorityOrder[b.priority] ||
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    )

    return NextResponse.json({
      interventions,
      total: interventions.length,
    })
  } catch (error) {
    console.error('Interventions list error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

/**
 * POST /api/school/interventions
 *
 * Creates a new intervention plan.
 *
 * In production, this would:
 * - INSERT INTO interventions (...) the intervention metadata
 * - INSERT INTO intervention_students for each targeted student
 * - Optionally notify the class teacher (if created by HoD) via email/notification
 * - Record the baseline scores for targeted students at time of creation
 */
export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-interventions-create:${ip}`, { limit: 10, windowSeconds: 60 })
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

    const member = await verifySchoolMember(user.id)
    if (!member) {
      return NextResponse.json({ error: 'Forbidden: not a school member' }, { status: 403 })
    }

    let body: CreateInterventionRequest
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    const {
      class_id, type, priority, title, description,
      target_student_ids, target_area, start_date, review_date,
      success_criteria,
    } = body

    // Validate required fields
    if (!class_id || typeof class_id !== 'string') {
      return NextResponse.json({ error: 'class_id is required' }, { status: 422 })
    }

    if (!title || typeof title !== 'string' || title.trim().length === 0) {
      return NextResponse.json({ error: 'title is required' }, { status: 422 })
    }

    if (title.trim().length > 200) {
      return NextResponse.json({ error: 'title must be 200 characters or fewer' }, { status: 422 })
    }

    if (!description || typeof description !== 'string' || description.trim().length === 0) {
      return NextResponse.json({ error: 'description is required' }, { status: 422 })
    }

    const validTypes: InterventionType[] = [
      'one_to_one', 'small_group', 'differentiated_resources',
      'peer_tutoring', 'parent_contact', 'referral', 'revision_session', 'other',
    ]
    if (!type || !validTypes.includes(type)) {
      return NextResponse.json(
        { error: `type must be one of: ${validTypes.join(', ')}` },
        { status: 422 }
      )
    }

    if (!target_student_ids || !Array.isArray(target_student_ids) || target_student_ids.length === 0) {
      return NextResponse.json({ error: 'target_student_ids must be a non-empty array' }, { status: 422 })
    }

    if (review_date) {
      const parsed = new Date(review_date)
      if (isNaN(parsed.getTime())) {
        return NextResponse.json({ error: 'review_date must be a valid ISO date string' }, { status: 422 })
      }
    }

    const admin = createServiceRoleClient()

    // Verify class belongs to school
    const { data: classData } = await admin
      .from('classes')
      .select('id, name, teacher_id')
      .eq('id', class_id)
      .eq('school_id', member.school_id)
      .single()

    if (!classData) {
      return NextResponse.json({ error: 'Class not found' }, { status: 404 })
    }

    // Verify teacher has access to this class
    const staffRoles = ['admin', 'head_of_department']
    if (!staffRoles.includes(member.role) && classData.teacher_id !== member.id) {
      return NextResponse.json(
        { error: 'Forbidden: you can only create interventions for your own classes' },
        { status: 403 }
      )
    }

    // Verify students are in the class
    const { data: classStudents } = await admin
      .from('class_students')
      .select('student_id')
      .eq('class_id', class_id)
      .eq('is_active', true)
      .in('student_id', target_student_ids)

    const validStudentIds = (classStudents || []).map((s: { student_id: string }) => s.student_id)
    const invalidStudents = target_student_ids.filter(id => !validStudentIds.includes(id))

    if (invalidStudents.length > 0) {
      return NextResponse.json(
        { error: `${invalidStudents.length} student ID(s) not found in this class` },
        { status: 422 }
      )
    }

    // Get student names
    const { data: profilesData } = await admin
      .from('profiles')
      .select('id, full_name, email')
      .in('id', validStudentIds)

    const profileMap = new Map(
      (profilesData || []).map((p: { id: string; full_name: string | null; email: string }) => [p.id, p])
    )
    const studentNames = validStudentIds.map(sid => {
      const p = profileMap.get(sid)
      return p?.full_name || p?.email || 'Unknown'
    })

    // Compute baseline score for targeted students
    let baselineScore: number | null = null
    if (validStudentIds.length > 0) {
      const { data: progressData } = await admin
        .from('module_progress')
        .select('user_id, quiz_score')
        .in('user_id', validStudentIds)
        .not('quiz_score', 'is', null)

      const scores = (progressData || []).map((p: { quiz_score: number }) => p.quiz_score)
      if (scores.length > 0) {
        baselineScore = Math.round(scores.reduce((a: number, b: number) => a + b, 0) / scores.length)
      }
    }

    const now = new Date().toISOString()

    // In production: INSERT INTO interventions (...)
    const newIntervention: Intervention = {
      id: crypto.randomUUID(),
      class_id,
      class_name: classData.name,
      created_by: member.id,
      created_by_name: member.full_name,
      type,
      priority: priority || 'medium',
      status: 'planned',
      title: title.trim(),
      description: description.trim(),
      target_student_ids: validStudentIds,
      target_student_names: studentNames,
      target_area: target_area || null,
      start_date: start_date || new Date().toISOString().split('T')[0],
      review_date: review_date || null,
      notes: null,
      success_criteria: success_criteria || null,
      baseline_score: baselineScore,
      outcome_score: null,
      created_at: now,
      updated_at: now,
    }

    return NextResponse.json({ intervention: newIntervention }, { status: 201 })
  } catch (error) {
    console.error('Intervention create error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
