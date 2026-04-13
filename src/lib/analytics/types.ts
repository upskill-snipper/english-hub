// ─── Analytics Types ─────────────────────────────────────────────────────────

export interface StudentAnalytics {
  studentId: string
  fullName: string | null
  yearGroup: string | null
  examBoard: string | null

  // Progress
  modulesCompleted: number
  totalModules: number
  completionRate: number // 0-100

  // Scores
  avgQuizScore: number // 0-100
  avgAssessmentScore: number // 0-100
  quizScores: { moduleId: string; moduleName: string; courseId: string; courseName: string; score: number }[]
  assessmentScores: { courseId: string; courseName: string; score: number; date: string }[]

  // Activity
  timeSpentSeconds: number
  practiceSessions: number
  certificates: number

  // Computed
  trajectory: 'improving' | 'stable' | 'declining'
  predictedGrade: string
  strengths: { courseId: string; courseName: string; avgScore: number }[]
  weaknesses: { courseId: string; courseName: string; avgScore: number }[]
}

export interface ClassAnalytics {
  classId: string
  className: string
  yearGroup: string | null
  examBoard: string | null
  teacherId: string | null
  studentCount: number

  // Aggregates
  avgCompletionRate: number
  avgQuizScore: number
  avgAssessmentScore: number
  totalTimeSpentSeconds: number
  totalPracticeSessions: number
  totalCertificates: number

  // Distributions
  gradeDistribution: Record<string, number> // grade -> count
  trajectoryBreakdown: { improving: number; stable: number; declining: number }

  // Per-student
  students: StudentAnalytics[]

  // Weak areas & recommendations
  weakAreas: WeakArea[]
}

export interface SchoolOverview {
  schoolId: string
  schoolName: string
  totalStudents: number
  totalClasses: number
  totalTeachers: number

  // Aggregates
  avgCompletionRate: number
  avgQuizScore: number
  avgAssessmentScore: number
  totalCertificates: number

  // Class summaries
  classes: {
    classId: string
    className: string
    yearGroup: string | null
    examBoard: string | null
    studentCount: number
    avgQuizScore: number
    avgCompletionRate: number
  }[]

  // School-wide distributions
  gradeDistribution: Record<string, number>
  trajectoryBreakdown: { improving: number; stable: number; declining: number }
}

export interface WeakArea {
  moduleId: string
  moduleName: string
  courseId: string
  courseName: string
  avgScore: number
  studentsBelowThreshold: number // count of students below 50%
  totalStudentsAttempted: number
  severity: 'critical' | 'warning' | 'minor'
}

export interface Recommendation {
  priority: 1 | 2 | 3
  title: string
  description: string
  affectedStudentCount: number
  affectedStudentIds: string[]
  suggestedAction: string
  courseIds: string[]
}

export interface TrendDataPoint {
  weekStart: string // ISO date string
  avgScore: number
  activeStudents: number
  modulesCompleted: number
}
