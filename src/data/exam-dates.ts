// @ts-nocheck
// ── GCSE English Exam Timetable 2026 (Estimated May/June) ─────────────────────
// Based on typical exam board scheduling patterns. Actual dates published by
// boards in autumn of the preceding year - update once official timetables land.

export interface ExamDate {
  id: string
  board: string
  subject: string
  paper: string
  date: string // ISO date
  time: 'morning' | 'afternoon'
  duration: number // minutes
}

export const examDates: ExamDate[] = [
  // ── AQA English Language ──────────────────────────────────────────────────
  {
    id: 'aqa-lang-1-2026',
    board: 'AQA',
    subject: 'English Language',
    paper: 'Paper 1: Explorations in Creative Reading and Writing',
    date: '2026-05-18',
    time: 'morning',
    duration: 105,
  },
  {
    id: 'aqa-lang-2-2026',
    board: 'AQA',
    subject: 'English Language',
    paper: "Paper 2: Writers' Viewpoints and Perspectives",
    date: '2026-06-05',
    time: 'morning',
    duration: 105,
  },

  // ── AQA English Literature ────────────────────────────────────────────────
  {
    id: 'aqa-lit-1-2026',
    board: 'AQA',
    subject: 'English Literature',
    paper: 'Paper 1: Shakespeare and the 19th-Century Novel',
    date: '2026-05-20',
    time: 'afternoon',
    duration: 105,
  },
  {
    id: 'aqa-lit-2-2026',
    board: 'AQA',
    subject: 'English Literature',
    paper: 'Paper 2: Modern Texts and Poetry',
    date: '2026-06-01',
    time: 'morning',
    duration: 135,
  },

  // ── Edexcel English Language ──────────────────────────────────────────────
  {
    id: 'edexcel-lang-1-2026',
    board: 'Edexcel',
    subject: 'English Language',
    paper: 'Paper 1: Fiction and Imaginative Writing',
    date: '2026-05-19',
    time: 'morning',
    duration: 105,
  },
  {
    id: 'edexcel-lang-2-2026',
    board: 'Edexcel',
    subject: 'English Language',
    paper: 'Paper 2: Non-Fiction and Transactional Writing',
    date: '2026-06-04',
    time: 'morning',
    duration: 120,
  },

  // ── Edexcel English Literature ────────────────────────────────────────────
  {
    id: 'edexcel-lit-1-2026',
    board: 'Edexcel',
    subject: 'English Literature',
    paper: 'Paper 1: Shakespeare and Post-1914 Literature',
    date: '2026-05-21',
    time: 'morning',
    duration: 105,
  },
  {
    id: 'edexcel-lit-2-2026',
    board: 'Edexcel',
    subject: 'English Literature',
    paper: 'Paper 2: 19th-Century Novel and Poetry since 1789',
    date: '2026-06-03',
    time: 'afternoon',
    duration: 135,
  },

  // ── OCR English Language ──────────────────────────────────────────────────
  {
    id: 'ocr-lang-1-2026',
    board: 'OCR',
    subject: 'English Language',
    paper: 'Paper 1: Communicating Information and Ideas',
    date: '2026-05-18',
    time: 'afternoon',
    duration: 120,
  },
  {
    id: 'ocr-lang-2-2026',
    board: 'OCR',
    subject: 'English Language',
    paper: 'Paper 2: Exploring Effects and Impact',
    date: '2026-06-08',
    time: 'morning',
    duration: 120,
  },

  // ── OCR English Literature ────────────────────────────────────────────────
  {
    id: 'ocr-lit-1-2026',
    board: 'OCR',
    subject: 'English Literature',
    paper: 'Paper 1: Exploring Modern and Literary Heritage Texts',
    date: '2026-05-22',
    time: 'morning',
    duration: 120,
  },
  {
    id: 'ocr-lit-2-2026',
    board: 'OCR',
    subject: 'English Literature',
    paper: 'Paper 2: Poetry and Unseen Poetry',
    date: '2026-06-05',
    time: 'afternoon',
    duration: 120,
  },

  // ── WJEC Eduqas English Language ──────────────────────────────────────────
  {
    id: 'wjec-lang-1-2026',
    board: 'WJEC',
    subject: 'English Language',
    paper: 'Component 1: 20th Century Literature Reading and Creative Prose Writing',
    date: '2026-05-19',
    time: 'afternoon',
    duration: 105,
  },
  {
    id: 'wjec-lang-2-2026',
    board: 'WJEC',
    subject: 'English Language',
    paper:
      'Component 2: 19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing',
    date: '2026-06-09',
    time: 'morning',
    duration: 120,
  },

  // ── WJEC Eduqas English Literature ────────────────────────────────────────
  {
    id: 'wjec-lit-1-2026',
    board: 'WJEC',
    subject: 'English Literature',
    paper: 'Component 1: Shakespeare and Poetry',
    date: '2026-05-21',
    time: 'afternoon',
    duration: 120,
  },
  {
    id: 'wjec-lit-2-2026',
    board: 'WJEC',
    subject: 'English Literature',
    paper: 'Component 2: Post-1914 Prose/Drama, 19th Century Prose and Unseen Poetry',
    date: '2026-06-02',
    time: 'morning',
    duration: 150,
  },
]

// ── Helpers ─────────────────────────────────────────────────────────────────

/** Return exams sorted by date (earliest first) */
export function getExamsSorted(board?: string): ExamDate[] {
  const filtered = board ? examDates.filter((e) => e.board === board) : examDates
  return [...filtered].sort((a, b) => a.date.localeCompare(b.date))
}

/** Return only exams that haven't happened yet */
export function getUpcomingExams(board?: string): ExamDate[] {
  const today = new Date().toISOString().split('T')[0]
  return getExamsSorted(board).filter((e) => e.date >= today)
}

/** Days between today and a given ISO date string */
export function daysUntil(dateStr: string): number {
  const target = new Date(dateStr + 'T00:00:00')
  const now = new Date()
  now.setHours(0, 0, 0, 0)
  return Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
}

/** Urgency colour based on days remaining */
export function urgencyColor(days: number): 'green' | 'amber' | 'red' {
  if (days >= 30) return 'green'
  if (days >= 14) return 'amber'
  return 'red'
}

/** All unique boards in the dataset */
export const BOARDS = [...new Set(examDates.map((e) => e.board))] as string[]

/** All unique subjects */
export const SUBJECTS = [...new Set(examDates.map((e) => e.subject))] as string[]
