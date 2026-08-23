// ─── Demo Data Types ──────────────────────────────────────────────────────────
// Shapes for the free interactive school demo (/demo/school, /demo/teacher).
// Split out of the old monolithic src/data/demo-data.ts: types erase at compile
// time, so keeping them in their own module lets pages import a shape without
// dragging any of the ~430 KB of demo records into their client bundle.
// ──────────────────────────────────────────────────────────────────────────────

export interface DemoTeacher {
  id: string
  name: string
  email: string
  role: 'head_of_department' | 'teacher' | 'nqt' | 'head_of_year'
  classes: string[]
  lastActive: string
  activeThisWeek: boolean
  department: string
  studentCount: number
  classCount: number
  avgProgress: number
  yearsExperience?: number
  cpdNotes?: string[]
}

export interface DemoModuleProgress {
  name: string
  progress: number
  score: number
  status?: string
}

export interface DemoMockExam {
  name: string
  score: number
  grade: string
  date: string
}

export interface DemoEssay {
  title: string
  score: number
  feedback: string
  date: string
  teacherReviewed?: boolean
}

export interface DemoQuizAttempt {
  name: string
  score: number
  maxScore: number
  date: string
}

export interface DemoActivity {
  action: string
  detail?: string
  date: string
  type?: string
}

export interface DemoStudent {
  id: string
  name: string
  email: string
  yearGroup: string
  className: string
  teacher: string
  overallProgress: number
  averageScore: number
  assignmentsCompleted: number
  assignmentsTotal: number
  lastActive: string
  status: 'on-track' | 'needs-support' | 'at-risk' | 'excelling'
  strengths: (string | { name: string; score: number })[]
  weaknesses: (string | { name: string; score: number })[]
  recentScores: number[]
  mockExamResults: { exam: string; score: number; grade: string; date: string }[]
  essaySubmissions: { title: string; score: number; feedback: string; date: string }[]
  moduleProgress: { module: string; progress: number; score: number; status: string }[]
  quizAttempts: { quiz: string; score: number; maxScore: number; date: string }[]
  activityLog: { action: string; date: string }[]
  recommendations: string[]
  atRisk: boolean
  riskReason: string
  classId: string
  teacherName: string
  modulesCompleted: number
  modules: DemoModuleProgress[]
  mockExams: DemoMockExam[]
  essays: DemoEssay[]
  activityTimeline: DemoActivity[]
  workingAtGrade: number
  predictedGrade: number
  targetGrade: number
  /** Reading age in months, e.g. 148 = 12y 4m. null if not assessed. */
  readingAge: number | null
  /** Decoding age in months */
  decodingAge: number | null
  /** Fluency age in months */
  fluencyAge: number | null
  /** ISO date string of last reading age assessment */
  readingAgeAssessmentDate: string | null
  /** Optional flag: student is on the EAL (English as Additional Language) register. */
  isEal?: boolean
  /** Optional EAL proficiency banding (CEFR-aligned A2/B1/B2/C1). Set only for EAL learners. */
  ealProficiency?: 'A2' | 'B1' | 'B2' | 'C1'
  /** Optional attendance percentage over the current term (0-100). */
  attendancePct?: number
}

export interface DemoClass {
  id: string
  name: string
  yearGroup: string
  examBoard: string
  teacher: string
  teacherId: string
  studentCount: number
  averageScore: number
  completionRate: number
  studentIds: string[]
  avgScore: number
  avgProgress: number
  assignmentsSet: number
  assignmentsCompleted: number
  atRiskCount?: number
  students?: Array<{
    id: string
    name: string
    overallScore: number
    overallProgress: number
    atRisk: boolean
    ragStatus: 'green' | 'amber' | 'red'
    trend: 'up' | 'down' | 'stable'
    lastActive: string
    assignmentsCompleted: number
    assignmentsTotal: number
    riskReason?: string
  }>
}

export interface DemoYearGroupStats {
  yearGroup: string
  year: number
  label: string
  studentCount: number
  classCount: number
  averageScore: number
  avgProgress: number
  completionRate: number
  atRiskCount: number
  excellingCount: number
  topModule: string
  weakestModule: string
}

export interface DemoAtRiskStudent {
  studentId: string
  name: string
  yearGroup: string
  className: string
  averageScore: number
  trend: 'declining' | 'stagnant' | 'slightly-improving'
  reasons: string[]
  recommendedActions: string[]
  lastTeacherNote: string
  daysSinceActive: number
}

export interface DemoWeeklyActivity {
  week: string
  lessonsAccessed: number
  quizzesCompleted: number
  essaysSubmitted: number
  mockExamsTaken: number
  averageSessionMinutes: number
  activeStudents: number
}

export interface DemoResourceUsage {
  resourceId: string
  title: string
  type: 'lesson' | 'mock-exam' | 'quiz' | 'revision-guide' | 'essay-prompt'
  accessCount: number
  averageScore: number | null
  yearGroup: string
  examBoard: string
}

export interface DemoAssignmentOverview {
  classId: string
  className: string
  teacher: string
  totalAssignments: number
  completed: number
  inProgress: number
  notStarted: number
  overdue: number
  averageScore: number
}

export interface DemoInterventionLog {
  id: string
  studentId: string
  studentName: string
  yearGroup: number
  type: 'one-to-one' | 'small-group' | 'parental-contact' | 'reading-support' | 'eal-support'
  startedAt: string
  status: 'active' | 'completed' | 'monitoring'
  note: string
  ledBy: string
}

export interface DemoMockAttempt {
  studentId: string
  date: string
  paper: string
  score: number
  grade: number
}

/**
 * The slice of a demo student that list, table, chart and roll-up surfaces
 * actually read.
 *
 * Every heavy per-student array (moduleProgress/modules, essaySubmissions/essays,
 * mockExamResults/mockExams, quizAttempts, activityLog/activityTimeline,
 * recentScores) is deliberately absent: those accounted for roughly three
 * quarters of the demo roster's bytes and were being shipped to ~19 demo routes
 * that never rendered them. Screens that genuinely show a student's detail load
 * the full record lazily from './students-detail'.
 *
 * `mockGrades` is the one exception: the analytics grade-distribution chart needs
 * only the grade letters/numbers from each mock, not the whole attempt records.
 */
export interface DemoStudentSummary {
  id: string
  name: string
  email: string
  yearGroup: string
  className: string
  classId: string
  teacher: string
  teacherName: string
  status: DemoStudent['status']
  atRisk: boolean
  riskReason: string
  overallProgress: number
  averageScore: number
  assignmentsCompleted: number
  assignmentsTotal: number
  lastActive: string
  workingAtGrade: number
  predictedGrade: number
  targetGrade: number
  /** Reading age in months, e.g. 148 = 12y 4m. null if not assessed. */
  readingAge: number | null
  strengths: (string | { name: string; score: number })[]
  weaknesses: (string | { name: string; score: number })[]
  recommendations: string[]
  /** Grade awarded in each recorded mock, in order. */
  mockGrades: string[]
  /** Normalised from DemoStudent.isEal, which is absent rather than false for non-EAL learners. */
  isEal: boolean
  /** Normalised from DemoStudent.ealProficiency; null for learners not on the EAL register. */
  ealProficiency: 'A2' | 'B1' | 'B2' | 'C1' | null
}
