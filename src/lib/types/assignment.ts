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

/* ── API helpers ──────────────────────────────────────────────────────── */

/** Shape returned by the server API routes (Prisma-backed). */
export interface ApiAssignment {
  id: string
  classId: string
  teacherId: string
  title: string
  description: string | null
  type: string // e.g. 'HOMEWORK' | 'CLASSWORK' | 'ASSESSMENT' | 'REVISION'
  status: string // e.g. 'DRAFT' | 'ACTIVE' | 'CLOSED'
  courseId: string | null
  moduleIds: string[]
  dueDate: string | null
  createdAt: string
  updatedAt: string
  submissionsCount: number
  totalStudents: number
  avgScore: number | null
  submissions?: ApiSubmission[]
}

export interface ApiSubmission {
  id: string
  studentId: string
  status: string
  score: number | null
  feedback: string | null
  submittedAt: string | null
  gradedAt: string | null
}

export async function fetchAssignments(params?: {
  classId?: string
  status?: string
}): Promise<ApiAssignment[]> {
  const query = new URLSearchParams()
  if (params?.classId) query.set('classId', params.classId)
  if (params?.status) query.set('status', params.status)
  const url = `/api/school/assignments${query.toString() ? `?${query}` : ''}`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Failed to fetch assignments: ${res.status}`)
  const data = await res.json()
  return data.assignments
}

export async function fetchAssignmentById(id: string): Promise<ApiAssignment> {
  const res = await fetch(`/api/school/assignments/${id}`)
  if (!res.ok) throw new Error(`Failed to fetch assignment: ${res.status}`)
  const data = await res.json()
  return data.assignment
}

export async function createAssignment(body: {
  class_id: string
  title: string
  description?: string
  course_id?: string
  module_ids?: string[]
  type: string
  due_date?: string
  status?: string
}): Promise<ApiAssignment> {
  const res = await fetch('/api/school/assignments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err.error || `Failed to create assignment: ${res.status}`)
  }
  const data = await res.json()
  return data.assignment
}

export async function patchAssignment(
  id: string,
  body: {
    title?: string
    description?: string | null
    type?: string
    status?: string
    due_date?: string | null
    course_id?: string | null
    module_ids?: string[]
  },
): Promise<ApiAssignment> {
  const res = await fetch(`/api/school/assignments/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err.error || `Failed to update assignment: ${res.status}`)
  }
  const data = await res.json()
  return data.assignment
}

export async function deleteAssignment(id: string): Promise<void> {
  const res = await fetch(`/api/school/assignments/${id}`, { method: 'DELETE' })
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err.error || `Failed to delete assignment: ${res.status}`)
  }
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
