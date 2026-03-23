// ─── Teacher Notification Generation & Storage ──────────────────────────────

import type {
  StudentAnalytics,
  ClassAnalytics,
  SchoolOverview,
} from '@/lib/types'

// ── Types ────────────────────────────────────────────────────────────────────

export type NotificationType =
  | 'student_at_risk'
  | 'assignment_due_soon'
  | 'class_milestone'
  | 'intervention_reminder'
  | 'new_student_joined'
  | 'weekly_digest'
  | 'grade_prediction_change'
  | 'inactivity_alert'

export type NotificationPriority = 'high' | 'medium' | 'low'

export interface TeacherNotification {
  id: string
  type: NotificationType
  priority: NotificationPriority
  title: string
  message: string
  classId?: string
  className?: string
  studentId?: string
  studentName?: string
  timestamp: string
  read: boolean
  actionUrl?: string
  metadata?: Record<string, unknown>
}

// ── Notification type display config ─────────────────────────────────────────

export const NOTIFICATION_TYPE_CONFIG: Record<
  NotificationType,
  { label: string; color: string; bg: string; emoji: string }
> = {
  student_at_risk: {
    label: 'Student at Risk',
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    emoji: 'AlertTriangle',
  },
  assignment_due_soon: {
    label: 'Assignment Due Soon',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    emoji: 'Clock',
  },
  class_milestone: {
    label: 'Class Milestone',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    emoji: 'Trophy',
  },
  intervention_reminder: {
    label: 'Intervention Reminder',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    emoji: 'CalendarClock',
  },
  new_student_joined: {
    label: 'New Student Joined',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    emoji: 'UserPlus',
  },
  weekly_digest: {
    label: 'Weekly Digest',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    emoji: 'BarChart3',
  },
  grade_prediction_change: {
    label: 'Grade Prediction Change',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    emoji: 'TrendingUp',
  },
  inactivity_alert: {
    label: 'Inactivity Alert',
    color: 'text-slate-400',
    bg: 'bg-slate-500/10',
    emoji: 'UserX',
  },
}

// ── LocalStorage helpers ─────────────────────────────────────────────────────

const STORAGE_KEY = 'teacher_notifications'
const READ_STATUS_KEY = 'teacher_notifications_read'

function getReadStatusMap(): Record<string, boolean> {
  if (typeof window === 'undefined') return {}
  try {
    const raw = localStorage.getItem(READ_STATUS_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function saveReadStatusMap(map: Record<string, boolean>) {
  if (typeof window === 'undefined') return
  localStorage.setItem(READ_STATUS_KEY, JSON.stringify(map))
}

export function markNotificationRead(id: string) {
  const map = getReadStatusMap()
  map[id] = true
  saveReadStatusMap(map)
}

export function markAllNotificationsRead(ids: string[]) {
  const map = getReadStatusMap()
  for (const id of ids) {
    map[id] = true
  }
  saveReadStatusMap(map)
}

export function isNotificationRead(id: string): boolean {
  const map = getReadStatusMap()
  return map[id] === true
}

export function getUnreadCount(notifications: TeacherNotification[]): number {
  const map = getReadStatusMap()
  return notifications.filter((n) => !map[n.id]).length
}

export function applyReadStatus(
  notifications: TeacherNotification[]
): TeacherNotification[] {
  const map = getReadStatusMap()
  return notifications.map((n) => ({
    ...n,
    read: map[n.id] === true,
  }))
}

// ── Cache helpers ────────────────────────────────────────────────────────────

function getCachedNotifications(): TeacherNotification[] | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const { notifications, generatedAt } = JSON.parse(raw) as {
      notifications: TeacherNotification[]
      generatedAt: string
    }
    // Cache for 5 minutes
    const age = Date.now() - new Date(generatedAt).getTime()
    if (age > 5 * 60 * 1000) return null
    return notifications
  } catch {
    return null
  }
}

function cacheNotifications(notifications: TeacherNotification[]) {
  if (typeof window === 'undefined') return
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      notifications,
      generatedAt: new Date().toISOString(),
    })
  )
}

// ── ID generator ─────────────────────────────────────────────────────────────

function notificationId(type: NotificationType, ...parts: string[]): string {
  const dateKey = new Date().toISOString().slice(0, 10)
  return `${type}_${parts.join('_')}_${dateKey}`
}

// ── Notification generators ──────────────────────────────────────────────────

function generateStudentAtRiskNotifications(
  students: StudentAnalytics[],
  classId: string,
  className: string
): TeacherNotification[] {
  const now = new Date().toISOString()
  const notifications: TeacherNotification[] = []

  for (const student of students) {
    // Score below threshold
    if (student.avg_quiz_score < 40) {
      notifications.push({
        id: notificationId('student_at_risk', 'score', student.student_id),
        type: 'student_at_risk',
        priority: 'high',
        title: 'Student score critically low',
        message: `${student.student_name} has an average score of ${Math.round(student.avg_quiz_score)}% in ${className}. Consider scheduling an intervention.`,
        classId,
        className,
        studentId: student.student_id,
        studentName: student.student_name,
        timestamp: now,
        read: false,
        actionUrl: `/school/students/${student.student_id}`,
      })
    }

    // Declining trajectory
    if (student.trajectory === 'declining') {
      notifications.push({
        id: notificationId('student_at_risk', 'declining', student.student_id),
        type: 'student_at_risk',
        priority: 'high',
        title: 'Student performance declining',
        message: `${student.student_name}'s performance has been declining in ${className}. Their trajectory shows consistent drops over recent weeks.`,
        classId,
        className,
        studentId: student.student_id,
        studentName: student.student_name,
        timestamp: now,
        read: false,
        actionUrl: `/school/students/${student.student_id}`,
      })
    }
  }

  return notifications
}

function generateInactivityAlerts(
  students: StudentAnalytics[],
  classId: string,
  className: string
): TeacherNotification[] {
  const now = new Date()
  const notifications: TeacherNotification[] = []
  const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)

  for (const student of students) {
    if (!student.last_active_at) continue
    const lastActive = new Date(student.last_active_at)
    if (lastActive < sevenDaysAgo) {
      const daysSince = Math.floor(
        (now.getTime() - lastActive.getTime()) / (1000 * 60 * 60 * 24)
      )
      notifications.push({
        id: notificationId('inactivity_alert', student.student_id),
        type: 'inactivity_alert',
        priority: daysSince > 14 ? 'high' : 'medium',
        title: 'Student inactive',
        message: `${student.student_name} hasn't logged in for ${daysSince} days in ${className}.`,
        classId,
        className,
        studentId: student.student_id,
        studentName: student.student_name,
        timestamp: now.toISOString(),
        read: false,
        actionUrl: `/school/students/${student.student_id}`,
      })
    }
  }

  return notifications
}

function generateClassMilestones(
  classes: ClassAnalytics[]
): TeacherNotification[] {
  const now = new Date().toISOString()
  const notifications: TeacherNotification[] = []

  for (const cls of classes) {
    if (cls.completion_rate >= 80) {
      notifications.push({
        id: notificationId('class_milestone', cls.class_id),
        type: 'class_milestone',
        priority: 'low',
        title: 'Class milestone reached',
        message: `${cls.class_name} has reached ${Math.round(cls.completion_rate)}% overall completion. Great progress!`,
        classId: cls.class_id,
        className: cls.class_name,
        timestamp: now,
        read: false,
        actionUrl: `/school/classes/${cls.class_id}`,
      })
    }
  }

  return notifications
}

function generateGradePredictionChanges(
  students: StudentAnalytics[],
  classId: string,
  className: string
): TeacherNotification[] {
  const now = new Date().toISOString()
  const notifications: TeacherNotification[] = []

  for (const student of students) {
    if (!student.predicted_grade) continue

    // Use trajectory as proxy for grade prediction direction
    if (student.trajectory === 'improving' && student.avg_quiz_score > 60) {
      notifications.push({
        id: notificationId('grade_prediction_change', 'up', student.student_id),
        type: 'grade_prediction_change',
        priority: 'low',
        title: 'Predicted grade improved',
        message: `${student.student_name}'s predicted grade in ${className} has improved to ${student.predicted_grade}. Keep up the good work!`,
        classId,
        className,
        studentId: student.student_id,
        studentName: student.student_name,
        timestamp: now,
        read: false,
        actionUrl: `/school/students/${student.student_id}`,
        metadata: { direction: 'up', predictedGrade: student.predicted_grade },
      })
    } else if (
      student.trajectory === 'declining' &&
      student.avg_quiz_score < 50
    ) {
      notifications.push({
        id: notificationId(
          'grade_prediction_change',
          'down',
          student.student_id
        ),
        type: 'grade_prediction_change',
        priority: 'high',
        title: 'Predicted grade dropped',
        message: `${student.student_name}'s predicted grade in ${className} has dropped to ${student.predicted_grade}. Intervention may be needed.`,
        classId,
        className,
        studentId: student.student_id,
        studentName: student.student_name,
        timestamp: now,
        read: false,
        actionUrl: `/school/students/${student.student_id}`,
        metadata: {
          direction: 'down',
          predictedGrade: student.predicted_grade,
        },
      })
    }
  }

  return notifications
}

function generateWeeklyDigest(overview: SchoolOverview): TeacherNotification[] {
  const now = new Date()
  // Only generate on Mondays (or if no digest exists)
  const dayOfWeek = now.getDay()
  if (dayOfWeek !== 1) return []

  const totalStudents = overview.total_students
  const activeThisWeek = overview.active_students_this_week
  const avgScore = Math.round(overview.avg_score_all)
  const completionRate = Math.round(overview.completion_rate_all)

  return [
    {
      id: notificationId('weekly_digest', overview.school.id),
      type: 'weekly_digest',
      priority: 'low',
      title: 'Weekly activity summary',
      message: `This week: ${activeThisWeek}/${totalStudents} students active, ${avgScore}% avg score, ${completionRate}% completion rate across all classes.`,
      timestamp: now.toISOString(),
      read: false,
      actionUrl: '/school',
      metadata: {
        activeStudents: activeThisWeek,
        totalStudents,
        avgScore,
        completionRate,
      },
    },
  ]
}

function generateMockAssignmentDueSoon(
  classes: ClassAnalytics[]
): TeacherNotification[] {
  const now = new Date()
  const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000)
  const notifications: TeacherNotification[] = []

  // Generate a mock assignment notification for classes with active students
  for (const cls of classes) {
    if (cls.student_count > 0) {
      notifications.push({
        id: notificationId('assignment_due_soon', cls.class_id),
        type: 'assignment_due_soon',
        priority: 'medium',
        title: 'Assignment due tomorrow',
        message: `The module assessment for ${cls.class_name} is due ${tomorrow.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'short' })}. ${cls.student_count} students enrolled.`,
        classId: cls.class_id,
        className: cls.class_name,
        timestamp: now.toISOString(),
        read: false,
        actionUrl: `/school/classes/${cls.class_id}`,
      })
    }
  }

  // Only return the first one to avoid noise
  return notifications.slice(0, 1)
}

function generateMockInterventionReminders(
  students: StudentAnalytics[],
  classId: string,
  className: string
): TeacherNotification[] {
  const now = new Date()
  const notifications: TeacherNotification[] = []

  const atRiskStudents = students.filter(
    (s) => s.trajectory === 'declining' || s.avg_quiz_score < 40
  )

  if (atRiskStudents.length > 0) {
    const student = atRiskStudents[0]
    notifications.push({
      id: notificationId('intervention_reminder', student.student_id),
      type: 'intervention_reminder',
      priority: 'medium',
      title: 'Scheduled intervention coming up',
      message: `Reminder: Intervention session with ${student.student_name} (${className}) is scheduled for this week. Score: ${Math.round(student.avg_quiz_score)}%.`,
      classId,
      className,
      studentId: student.student_id,
      studentName: student.student_name,
      timestamp: now.toISOString(),
      read: false,
      actionUrl: `/school/students/${student.student_id}`,
    })
  }

  return notifications
}

function generateNewStudentJoined(
  classes: ClassAnalytics[]
): TeacherNotification[] {
  const now = new Date()
  const notifications: TeacherNotification[] = []

  // Mock: pick a class and generate a "new student joined" notification
  for (const cls of classes) {
    if (cls.student_count > 2) {
      notifications.push({
        id: notificationId('new_student_joined', cls.class_id),
        type: 'new_student_joined',
        priority: 'low',
        title: 'New student joined',
        message: `A new student has joined ${cls.class_name} using the class join code. Total students: ${cls.student_count}.`,
        classId: cls.class_id,
        className: cls.class_name,
        timestamp: new Date(
          now.getTime() - 2 * 60 * 60 * 1000
        ).toISOString(),
        read: false,
        actionUrl: `/school/classes/${cls.class_id}`,
      })
      break // Only one
    }
  }

  return notifications
}

// ── Main generation function ─────────────────────────────────────────────────

export interface GenerateNotificationsInput {
  overview: SchoolOverview
  studentsByClass: Record<string, StudentAnalytics[]>
}

export function generateNotifications(
  input: GenerateNotificationsInput
): TeacherNotification[] {
  // Check cache first
  const cached = getCachedNotifications()
  if (cached) return applyReadStatus(cached)

  const { overview, studentsByClass } = input
  const allNotifications: TeacherNotification[] = []

  // Per-class notifications
  for (const cls of overview.classes) {
    const students = studentsByClass[cls.class_id] ?? []

    allNotifications.push(
      ...generateStudentAtRiskNotifications(
        students,
        cls.class_id,
        cls.class_name
      ),
      ...generateInactivityAlerts(students, cls.class_id, cls.class_name),
      ...generateGradePredictionChanges(
        students,
        cls.class_id,
        cls.class_name
      ),
      ...generateMockInterventionReminders(
        students,
        cls.class_id,
        cls.class_name
      )
    )
  }

  // School-wide notifications
  allNotifications.push(
    ...generateClassMilestones(overview.classes),
    ...generateWeeklyDigest(overview),
    ...generateMockAssignmentDueSoon(overview.classes),
    ...generateNewStudentJoined(overview.classes)
  )

  // Sort by priority then timestamp
  const priorityOrder: Record<NotificationPriority, number> = {
    high: 0,
    medium: 1,
    low: 2,
  }
  allNotifications.sort((a, b) => {
    const pDiff = priorityOrder[a.priority] - priorityOrder[b.priority]
    if (pDiff !== 0) return pDiff
    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  })

  // Cache and apply read status
  cacheNotifications(allNotifications)
  return applyReadStatus(allNotifications)
}

// ── Mock data generator (for demo/development) ──────────────────────────────

export function generateMockNotifications(): TeacherNotification[] {
  const now = new Date()

  const mocks: TeacherNotification[] = [
    {
      id: 'mock_risk_1',
      type: 'student_at_risk',
      priority: 'high',
      title: 'Student score critically low',
      message:
        'Emily Watson has an average score of 32% in 10B English. Consider scheduling an intervention.',
      classId: 'cls_1',
      className: '10B English',
      studentId: 'stu_1',
      studentName: 'Emily Watson',
      timestamp: new Date(now.getTime() - 15 * 60 * 1000).toISOString(),
      read: false,
      actionUrl: '/school/students/stu_1',
    },
    {
      id: 'mock_risk_2',
      type: 'student_at_risk',
      priority: 'high',
      title: 'Student performance declining',
      message:
        "James Chen's performance has been declining in 11A Literature. Their trajectory shows consistent drops over recent weeks.",
      classId: 'cls_2',
      className: '11A Literature',
      studentId: 'stu_2',
      studentName: 'James Chen',
      timestamp: new Date(now.getTime() - 45 * 60 * 1000).toISOString(),
      read: false,
      actionUrl: '/school/students/stu_2',
    },
    {
      id: 'mock_grade_1',
      type: 'grade_prediction_change',
      priority: 'high',
      title: 'Predicted grade dropped',
      message:
        "Sophie Taylor's predicted grade in 11A Literature has dropped to Grade 4. Intervention may be needed.",
      classId: 'cls_2',
      className: '11A Literature',
      studentId: 'stu_3',
      studentName: 'Sophie Taylor',
      timestamp: new Date(now.getTime() - 1 * 60 * 60 * 1000).toISOString(),
      read: false,
      actionUrl: '/school/students/stu_3',
      metadata: { direction: 'down', predictedGrade: 'Grade 4' },
    },
    {
      id: 'mock_assignment_1',
      type: 'assignment_due_soon',
      priority: 'medium',
      title: 'Assignment due tomorrow',
      message:
        'The module assessment for 10B English is due Friday 22nd Mar. 28 students enrolled.',
      classId: 'cls_1',
      className: '10B English',
      timestamp: new Date(now.getTime() - 2 * 60 * 60 * 1000).toISOString(),
      read: false,
      actionUrl: '/school/classes/cls_1',
    },
    {
      id: 'mock_intervention_1',
      type: 'intervention_reminder',
      priority: 'medium',
      title: 'Scheduled intervention coming up',
      message:
        'Reminder: Intervention session with Emily Watson (10B English) is scheduled for this week. Score: 32%.',
      classId: 'cls_1',
      className: '10B English',
      studentId: 'stu_1',
      studentName: 'Emily Watson',
      timestamp: new Date(now.getTime() - 3 * 60 * 60 * 1000).toISOString(),
      read: false,
      actionUrl: '/school/students/stu_1',
    },
    {
      id: 'mock_inactivity_1',
      type: 'inactivity_alert',
      priority: 'medium',
      title: 'Student inactive',
      message:
        "Oliver Brown hasn't logged in for 12 days in 10B English.",
      classId: 'cls_1',
      className: '10B English',
      studentId: 'stu_4',
      studentName: 'Oliver Brown',
      timestamp: new Date(now.getTime() - 4 * 60 * 60 * 1000).toISOString(),
      read: false,
      actionUrl: '/school/students/stu_4',
    },
    {
      id: 'mock_milestone_1',
      type: 'class_milestone',
      priority: 'low',
      title: 'Class milestone reached',
      message:
        '9C English has reached 85% overall completion. Great progress!',
      classId: 'cls_3',
      className: '9C English',
      timestamp: new Date(now.getTime() - 6 * 60 * 60 * 1000).toISOString(),
      read: false,
      actionUrl: '/school/classes/cls_3',
    },
    {
      id: 'mock_new_student_1',
      type: 'new_student_joined',
      priority: 'low',
      title: 'New student joined',
      message:
        'A new student has joined 10B English using the class join code. Total students: 29.',
      classId: 'cls_1',
      className: '10B English',
      timestamp: new Date(now.getTime() - 8 * 60 * 60 * 1000).toISOString(),
      read: false,
      actionUrl: '/school/classes/cls_1',
    },
    {
      id: 'mock_grade_up_1',
      type: 'grade_prediction_change',
      priority: 'low',
      title: 'Predicted grade improved',
      message:
        "Ava Singh's predicted grade in 9C English has improved to Grade 7. Keep up the good work!",
      classId: 'cls_3',
      className: '9C English',
      studentId: 'stu_5',
      studentName: 'Ava Singh',
      timestamp: new Date(now.getTime() - 10 * 60 * 60 * 1000).toISOString(),
      read: false,
      actionUrl: '/school/students/stu_5',
      metadata: { direction: 'up', predictedGrade: 'Grade 7' },
    },
    {
      id: 'mock_digest_1',
      type: 'weekly_digest',
      priority: 'low',
      title: 'Weekly activity summary',
      message:
        'This week: 45/52 students active, 68% avg score, 72% completion rate across all classes.',
      timestamp: new Date(
        now.getTime() - 24 * 60 * 60 * 1000
      ).toISOString(),
      read: false,
      actionUrl: '/school',
      metadata: {
        activeStudents: 45,
        totalStudents: 52,
        avgScore: 68,
        completionRate: 72,
      },
    },
  ]

  return applyReadStatus(mocks)
}

// ── Filter helpers ───────────────────────────────────────────────────────────

export function filterNotifications(
  notifications: TeacherNotification[],
  filters: {
    types?: NotificationType[]
    classId?: string
    dateFrom?: Date
    dateTo?: Date
    readStatus?: 'all' | 'read' | 'unread'
  }
): TeacherNotification[] {
  return notifications.filter((n) => {
    if (filters.types && filters.types.length > 0) {
      if (!filters.types.includes(n.type)) return false
    }
    if (filters.classId && n.classId !== filters.classId) return false
    if (filters.dateFrom) {
      if (new Date(n.timestamp) < filters.dateFrom) return false
    }
    if (filters.dateTo) {
      if (new Date(n.timestamp) > filters.dateTo) return false
    }
    if (filters.readStatus === 'read' && !n.read) return false
    if (filters.readStatus === 'unread' && n.read) return false
    return true
  })
}
