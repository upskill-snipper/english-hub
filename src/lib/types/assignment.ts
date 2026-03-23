export type AssignmentType =
  | 'essay'
  | 'quiz'
  | 'mock_exam'
  | 'module'
  | 'flashcards'
  | 'custom'

export type AssignmentStatus = 'draft' | 'active' | 'closed'

export type SubmissionStatus = 'pending' | 'submitted' | 'graded'

export interface AssignmentSubmission {
  studentId: string
  studentName: string
  submittedAt?: string
  status: SubmissionStatus
  score?: number
  feedback?: string
}

export interface Assignment {
  id: string
  classId: string
  title: string
  description: string
  type: AssignmentType
  resourceId?: string // linked lesson/module/mock
  dueDate: string
  createdAt: string
  status: AssignmentStatus
  submissions: AssignmentSubmission[]
}

/* ── localStorage helpers ─────────────────────────────────────────────── */

const STORAGE_KEY = 'english-hub-assignments'

export function getAssignments(): Assignment[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Assignment[]) : []
  } catch {
    return []
  }
}

export function saveAssignments(assignments: Assignment[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(assignments))
}

export function getAssignmentById(id: string): Assignment | undefined {
  return getAssignments().find((a) => a.id === id)
}

export function addAssignment(assignment: Assignment): void {
  const all = getAssignments()
  all.push(assignment)
  saveAssignments(all)
}

export function updateAssignment(updated: Assignment): void {
  const all = getAssignments().map((a) => (a.id === updated.id ? updated : a))
  saveAssignments(all)
}

/* ── Display helpers ──────────────────────────────────────────────────── */

export const ASSIGNMENT_TYPE_LABELS: Record<AssignmentType, string> = {
  essay: 'Essay',
  quiz: 'Quiz',
  mock_exam: 'Mock Exam',
  module: 'Module',
  flashcards: 'Flashcards',
  custom: 'Custom',
}

export const ASSIGNMENT_STATUS_LABELS: Record<AssignmentStatus, string> = {
  draft: 'Draft',
  active: 'Active',
  closed: 'Closed',
}
