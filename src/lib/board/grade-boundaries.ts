import type { ExamBoard } from './board-store'

export type GradeSystem = '9-1' | 'A*-G'

export const GRADE_SYSTEMS: Record<ExamBoard, GradeSystem> = {
  'aqa': '9-1',
  'edexcel': '9-1',
  'ocr': '9-1',
  'eduqas': '9-1',
  'cambridge-0500': 'A*-G',
  'cambridge-0990': '9-1',
  'edexcel-igcse': '9-1',
}

// Approximate grade boundaries (% of total marks) — update with real data
export const GRADE_BOUNDARIES: Record<ExamBoard, Partial<Record<'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'A*'|'A'|'B'|'C'|'D'|'E'|'F'|'G', number>>> = {
  'aqa': { '4': 40, '5': 50, '6': 60, '7': 70, '8': 80, '9': 88 },
  'edexcel': { '4': 40, '5': 50, '6': 58, '7': 68, '8': 78, '9': 85 },
  'ocr': { '4': 40, '5': 50, '6': 60, '7': 70, '8': 80, '9': 87 },
  'eduqas': { '4': 40, '5': 50, '6': 60, '7': 70, '8': 80, '9': 87 },
  'cambridge-0500': { 'G': 20, 'F': 30, 'E': 40, 'D': 50, 'C': 60, 'B': 70, 'A': 80, 'A*': 88 },
  'cambridge-0990': { '4': 40, '5': 50, '6': 60, '7': 70, '8': 80, '9': 88 },
  'edexcel-igcse': { '4': 40, '5': 50, '6': 60, '7': 70, '8': 80, '9': 88 },
}

export function getGradeSystemForBoard(board: ExamBoard | null): GradeSystem {
  if (!board) return '9-1'
  return GRADE_SYSTEMS[board]
}

/**
 * For A*-G boards, return the equivalent 9-1 grade.
 * Rough mapping used for cross-referencing guides.
 */
export function gradeNineToLetterEquivalent(grade: '5' | '7' | '9'): 'C' | 'B' | 'A' | 'A*' {
  switch (grade) {
    case '5': return 'C'
    case '7': return 'A'
    case '9': return 'A*'
  }
}

export function gradeLetterToNineOneEquivalent(letter: 'A*' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'): string {
  switch (letter) {
    case 'A*': return '8-9'
    case 'A': return '7'
    case 'B': return '6'
    case 'C': return '4-5'
    case 'D': return '3'
    case 'E': return '2'
    case 'F': return '1'
    case 'G': return '1'
  }
}

/**
 * Board-specific mark boundary summary for Literature paper headline boundaries.
 * Values are percentages of total marks — approximate, for student-facing guidance only.
 */
export function getBoundaryForGrade(
  board: ExamBoard | null,
  grade: '5' | '7' | '9',
): { label: string; percent: number | null; systemNote?: string } {
  if (!board) {
    return { label: `Grade ${grade}`, percent: GRADE_BOUNDARIES['aqa'][grade] ?? null }
  }
  const system = GRADE_SYSTEMS[board]
  if (system === '9-1') {
    return { label: `Grade ${grade}`, percent: GRADE_BOUNDARIES[board][grade] ?? null }
  }
  // Cambridge 0500 A*-G — map 9-1 target to nearest letter
  const letter = gradeNineToLetterEquivalent(grade)
  return {
    label: `Grade ${letter}`,
    percent: GRADE_BOUNDARIES[board][letter] ?? null,
    systemNote: `IGCSE Language A uses A*-G grading. Grade ${letter} is the equivalent of 9-1 Grade ${grade}.`,
  }
}

/**
 * Paper references for the 5-question self-assessment quiz.
 * Each board has different paper numbers/names.
 */
export function getPaperReferencesForBoard(board: ExamBoard | null): {
  literature: string
  language: string
  boardLabel: string
} {
  switch (board) {
    case 'aqa':
      return { literature: 'AQA Paper 1 / Paper 2 (Literature)', language: 'AQA Paper 1 / Paper 2 (Language)', boardLabel: 'AQA GCSE' }
    case 'edexcel':
      return { literature: 'Edexcel Paper 1 / Paper 2 (Literature)', language: 'Edexcel Paper 1 / Paper 2 (Language)', boardLabel: 'Pearson Edexcel GCSE' }
    case 'ocr':
      return { literature: 'OCR Paper 1 / Paper 2 (Literature)', language: 'OCR Paper 1 / Paper 2 (Language)', boardLabel: 'OCR GCSE' }
    case 'eduqas':
      return { literature: 'Eduqas Component 1 / Component 2 (Literature)', language: 'Eduqas Component 1 / Component 2 (Language)', boardLabel: 'WJEC Eduqas GCSE' }
    case 'edexcel-igcse':
      return { literature: 'IGCSE Literature Paper 1 / Paper 2', language: 'IGCSE Literature Paper 1 / Paper 2', boardLabel: 'IGCSE English Literature' }
    case 'cambridge-0500':
      return { literature: 'IGCSE Language A Paper 1 / Paper 2', language: 'IGCSE Language A Paper 1 / Paper 2', boardLabel: 'IGCSE First Language English' }
    case 'cambridge-0990':
      return { literature: 'IGCSE Language B Paper 1 / Paper 2', language: 'IGCSE Language B Paper 1 / Paper 2', boardLabel: 'IGCSE First Language English (9-1)' }
    default:
      return { literature: 'Literature Paper 1 / Paper 2', language: 'Language Paper 1 / Paper 2', boardLabel: 'GCSE English' }
  }
}
