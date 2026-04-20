import type { ExamBoard } from './board-store'

export type GradeSystem = '9-1' | 'A*-G' | 'A*-E'

export const GRADE_SYSTEMS: Record<ExamBoard, GradeSystem> = {
  ks3: '9-1',
  aqa: '9-1',
  edexcel: '9-1',
  ocr: '9-1',
  eduqas: '9-1',
  'cambridge-0500': 'A*-G', // legacy IGCSE: full A*-G
  'cambridge-0990': '9-1',
  'cambridge-0475': '9-1',
  'edexcel-igcse': '9-1',
  'edexcel-igcse-lang': '9-1',
  // IAL (International A-Level) uses A*-E — A*/A/B/C/D/E, no F or G.
  // U below E = ungraded.
  'ial-edexcel': 'A*-E',
  // UK A-Level — A*-E
  'aqa-a-level': 'A*-E',
  'edexcel-a-level': 'A*-E',
  'ocr-a-level': 'A*-E',
  'eduqas-a-level': 'A*-E',
}

/**
 * Board-aware display label for a 9-1 grade. For 9-1 boards returns
 * "Grade N". For A*-G / A*-E boards returns the letter equivalent.
 * A*-E boards clamp low grades to "E" (the lowest passing letter) or
 * "U" below that.
 */
export function gradeDisplayLabel(
  grade: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9',
  board: ExamBoard | null,
): string {
  const system = board ? GRADE_SYSTEMS[board] : '9-1'
  if (system === '9-1') return `Grade ${grade}`
  const letter = gradeNineToLetterEquivalent(grade)
  if (system === 'A*-E') {
    // A*-E has no F or G — collapse to E (threshold) or U (ungraded).
    if (letter === 'F' || letter === 'G') return 'U'
  }
  return letter
}

// Approximate grade boundaries (% of total marks) — update with real data
export const GRADE_BOUNDARIES: Record<
  ExamBoard,
  Partial<
    Record<
      | '1'
      | '2'
      | '3'
      | '4'
      | '5'
      | '6'
      | '7'
      | '8'
      | '9'
      | 'A*'
      | 'A'
      | 'B'
      | 'C'
      | 'D'
      | 'E'
      | 'F'
      | 'G',
      number
    >
  >
> = {
  ks3: {},
  aqa: { '4': 40, '5': 50, '6': 60, '7': 70, '8': 80, '9': 88 },
  edexcel: { '4': 40, '5': 50, '6': 58, '7': 68, '8': 78, '9': 85 },
  ocr: { '4': 40, '5': 50, '6': 60, '7': 70, '8': 80, '9': 87 },
  eduqas: { '4': 40, '5': 50, '6': 60, '7': 70, '8': 80, '9': 87 },
  'cambridge-0500': { G: 20, F: 30, E: 40, D: 50, C: 60, B: 70, A: 80, 'A*': 88 },
  'cambridge-0990': { '4': 40, '5': 50, '6': 60, '7': 70, '8': 80, '9': 88 },
  'cambridge-0475': { '4': 40, '5': 50, '6': 60, '7': 70, '8': 80, '9': 88 },
  'edexcel-igcse': { '4': 40, '5': 50, '6': 60, '7': 70, '8': 80, '9': 88 },
  'edexcel-igcse-lang': { '4': 40, '5': 50, '6': 60, '7': 70, '8': 80, '9': 88 },
  'ial-edexcel': { E: 40, D: 50, C: 60, B: 70, A: 80, 'A*': 88 }, // TODO: update with real IAL boundaries
  // TODO: update A-Level boundaries with real data from each board's specimen
  'aqa-a-level': { E: 40, D: 50, C: 60, B: 70, A: 80, 'A*': 90 },
  'edexcel-a-level': { E: 40, D: 50, C: 60, B: 70, A: 80, 'A*': 90 },
  'ocr-a-level': { E: 40, D: 50, C: 60, B: 70, A: 80, 'A*': 90 },
  'eduqas-a-level': { E: 40, D: 50, C: 60, B: 70, A: 80, 'A*': 90 },
}

export function getGradeSystemForBoard(board: ExamBoard | null): GradeSystem {
  if (!board) return '9-1'
  return GRADE_SYSTEMS[board]
}

/**
 * For A*-G boards, return the equivalent 9-1 grade.
 * Rough mapping used for cross-referencing guides.
 */
export function gradeNineToLetterEquivalent(
  grade: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9',
): 'G' | 'F' | 'E' | 'D' | 'C' | 'B' | 'A' | 'A*' {
  // Approximate mapping between 9-1 and A*-G grading systems.
  switch (grade) {
    case '1':
      return 'G'
    case '2':
      return 'F'
    case '3':
      return 'E'
    case '4':
      return 'D'
    case '5':
      return 'C'
    case '6':
      return 'B'
    case '7':
      return 'A'
    case '8':
      return 'A'
    case '9':
      return 'A*'
  }
}

export function gradeLetterToNineOneEquivalent(
  letter: 'A*' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G',
): string {
  switch (letter) {
    case 'A*':
      return '8-9'
    case 'A':
      return '7'
    case 'B':
      return '6'
    case 'C':
      return '4-5'
    case 'D':
      return '3'
    case 'E':
      return '2'
    case 'F':
      return '1'
    case 'G':
      return '1'
  }
}

/**
 * Board-specific mark boundary summary for Literature paper headline boundaries.
 * Values are percentages of total marks — approximate, for student-facing guidance only.
 */
export function getBoundaryForGrade(
  board: ExamBoard | null,
  grade: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9',
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
      return {
        literature: 'AQA Paper 1 / Paper 2 (Literature)',
        language: 'AQA Paper 1 / Paper 2 (Language)',
        boardLabel: 'AQA GCSE',
      }
    case 'edexcel':
      return {
        literature: 'Edexcel Paper 1 / Paper 2 (Literature)',
        language: 'Edexcel Paper 1 / Paper 2 (Language)',
        boardLabel: 'Pearson Edexcel GCSE',
      }
    case 'ocr':
      return {
        literature: 'OCR Paper 1 / Paper 2 (Literature)',
        language: 'OCR Paper 1 / Paper 2 (Language)',
        boardLabel: 'OCR GCSE',
      }
    case 'eduqas':
      return {
        literature: 'Eduqas Component 1 / Component 2 (Literature)',
        language: 'Eduqas Component 1 / Component 2 (Language)',
        boardLabel: 'WJEC Eduqas GCSE',
      }
    case 'edexcel-igcse':
      return {
        literature: 'IGCSE Literature Paper 1 / Paper 2',
        language: 'IGCSE Literature Paper 1 / Paper 2',
        boardLabel: 'IGCSE English Literature',
      }
    case 'cambridge-0500':
      return {
        literature: 'IGCSE Language A Paper 1 / Paper 2',
        language: 'IGCSE Language A Paper 1 / Paper 2',
        boardLabel: 'IGCSE First Language English',
      }
    case 'cambridge-0990':
      return {
        literature: 'IGCSE Language B Paper 1 / Paper 2',
        language: 'IGCSE Language B Paper 1 / Paper 2',
        boardLabel: 'IGCSE First Language English (9-1)',
      }
    default:
      return {
        literature: 'Literature Paper 1 / Paper 2',
        language: 'Language Paper 1 / Paper 2',
        boardLabel: 'GCSE English',
      }
  }
}
