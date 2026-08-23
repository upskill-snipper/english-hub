// ─── Demo Teacher Surfaces ────────────────────────────────────────────────────
// Lesson plan and submission queue shown on /demo/teacher.
// ──────────────────────────────────────────────────────────────────────────────

export const TEACHER_DEMO_LESSONS: {
  id: string
  title: string
  date: string
  className: string
  status: string
  topic: string
  time: string
  room: string
}[] = [
  {
    id: 'l1',
    title: 'An Inspector Calls - Act 1 Analysis',
    date: '2026-04-01',
    className: '10A English',
    status: 'completed',
    topic: 'Literature',
    time: '09:00',
    room: 'Room 14',
  },
  {
    id: 'l2',
    title: 'Language Paper 1 - Q5 Creative Writing',
    date: '2026-04-02',
    className: '11B English',
    status: 'completed',
    topic: 'Language',
    time: '10:15',
    room: 'Room 22',
  },
  {
    id: 'l3',
    title: 'A-Level Language - World Englishes',
    date: '2026-04-02',
    className: '13 A-Level Lang',
    status: 'completed',
    topic: 'Language',
    time: '13:30',
    room: 'Room 8',
  },
  {
    id: 'l4',
    title: 'An Inspector Calls - Dramatic Irony',
    date: '2026-04-03',
    className: '10A English',
    status: 'in-progress',
    topic: 'Literature',
    time: '09:00',
    room: 'Room 14',
  },
  {
    id: 'l5',
    title: 'Macbeth - Act 5 Revision',
    date: '2026-04-03',
    className: '11B English',
    status: 'in-progress',
    topic: 'Literature',
    time: '11:30',
    room: 'Room 22',
  },
  {
    id: 'l6',
    title: 'A-Level Language Investigation Workshop',
    date: '2026-04-04',
    className: '13 A-Level Lang',
    status: 'scheduled',
    topic: 'Language',
    time: '13:30',
    room: 'Room 8',
  },
  {
    id: 'l7',
    title: 'Poetry Anthology - Comparison Practice',
    date: '2026-04-07',
    className: '11B English',
    status: 'scheduled',
    topic: 'Literature',
    time: '10:15',
    room: 'Room 22',
  },
  {
    id: 'l8',
    title: 'An Inspector Calls - Context Lesson',
    date: '2026-04-07',
    className: '10A English',
    status: 'scheduled',
    topic: 'Literature',
    time: '09:00',
    room: 'Room 14',
  },
]

export const TEACHER_DEMO_SUBMISSIONS: {
  id: string
  studentName: string
  assignment: string
  score: number
  date: string
  status: string
}[] = [
  {
    id: 'sub1',
    studentName: 'Jessica Taylor',
    assignment: 'An Inspector Calls - Responsibility Theme',
    score: 80,
    date: '2026-03-15',
    status: 'graded',
  },
  {
    id: 'sub2',
    studentName: 'Charlotte Brown',
    assignment: 'Creative Writing - Childhood Memory',
    score: 72,
    date: '2026-03-18',
    status: 'graded',
  },
  {
    id: 'sub3',
    studentName: 'Nathan Wright',
    assignment: "Macbeth - Lady Macbeth's Guilt",
    score: 52,
    date: '2026-03-18',
    status: 'graded',
  },
  {
    id: 'sub4',
    studentName: 'Ben Carter',
    assignment: 'Macbeth - Kingship and Tyranny',
    score: 80,
    date: '2026-03-18',
    status: 'graded',
  },
  {
    id: 'sub5',
    studentName: 'Victoria Ashworth',
    assignment: 'Language Investigation - Code-Switching',
    score: 92,
    date: '2026-03-20',
    status: 'graded',
  },
  {
    id: 'sub6',
    studentName: 'Naomi Abebe',
    assignment: 'Sociolinguistics - Language and Identity',
    score: 78,
    date: '2026-03-20',
    status: 'graded',
  },
  {
    id: 'sub7',
    studentName: 'Jessica Taylor',
    assignment: 'Poetry Anthology Comparison',
    score: 76,
    date: '2026-03-28',
    status: 'pending',
  },
  {
    id: 'sub8',
    studentName: 'Nathan Wright',
    assignment: 'Language Paper 2 - Viewpoint Writing',
    score: 0,
    date: '2026-04-01',
    status: 'submitted',
  },
  {
    id: 'sub9',
    studentName: 'Ben Carter',
    assignment: 'Poetry Anthology Comparison',
    score: 0,
    date: '2026-04-02',
    status: 'submitted',
  },
  {
    id: 'sub10',
    studentName: 'Victoria Ashworth',
    assignment: 'Language and Representation Essay',
    score: 0,
    date: '2026-04-03',
    status: 'submitted',
  },
]
