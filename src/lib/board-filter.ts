import type { ExamBoard } from '@/lib/board/board-store'

/**
 * Map a user's `ExamBoard` cookie value to the legacy display-name strings
 * used inside content data (e.g. practice questions tagged `'AQA'`,
 * `'Edexcel'`, `'OCR'`, `'WJEC'`, `'CAIE'`). Returning multiple strings lets
 * an IGCSE student see Edexcel-tagged content as well as Edexcel-IGCSE-tagged
 * content, etc.
 */
function legacyDisplayNamesForBoard(board: ExamBoard): string[] {
  switch (board) {
    case 'aqa':
      return ['AQA']
    case 'edexcel':
      return ['Edexcel']
    case 'ocr':
      return ['OCR']
    case 'eduqas':
      return ['WJEC', 'Eduqas']
    case 'edexcel-igcse':
    case 'edexcel-igcse-lang':
      return ['Edexcel', 'Edexcel IGCSE', 'IGCSE']
    case 'cambridge-0500':
    case 'cambridge-0990':
    case 'cambridge-0475':
      return ['CAIE', 'Cambridge']
    case 'ial-edexcel':
      return ['Edexcel', 'IAL']
    case 'aqa-a-level':
      return ['AQA', 'A-Level']
    case 'edexcel-a-level':
      return ['Edexcel', 'A-Level']
    case 'ocr-a-level':
      return ['OCR', 'A-Level']
    case 'eduqas-a-level':
      return ['WJEC', 'Eduqas', 'A-Level']
    case 'ks3':
      return ['KS3']
    default:
      return []
  }
}

/**
 * Generic board match - returns true when the user has not yet picked a
 * board (server-render fallback) or when the content is untagged.
 *
 * NOTE: kept lenient by default so legacy callers that pass arbitrary
 * board strings (e.g. text-tagged courses) don't disappear. Use
 * `matchesPracticeBoard` for the strict variant.
 */
export function matchesBoard(
  itemBoard: string | undefined | null,
  selectedBoard: ExamBoard | null,
): boolean {
  if (!selectedBoard) return true
  if (!itemBoard) return true
  const allowed = legacyDisplayNamesForBoard(selectedBoard)
  return allowed.some((name) => name.toLowerCase() === itemBoard.toLowerCase())
}

export function matchesDeckBoard(deckBoard: string, selectedBoard: ExamBoard | null): boolean {
  if (!selectedBoard) return true
  if (!deckBoard) return true
  const allowed = legacyDisplayNamesForBoard(selectedBoard)
  return allowed.some((name) => name.toLowerCase() === deckBoard.toLowerCase())
}

/**
 * Strict practice-question filter. Practice questions are authored against
 * one board's spec (`'AQA'`, `'Edexcel'`, `'OCR'`, `'WJEC'`, `'CAIE'`) and
 * leaking another board's question into the user's pool is a syllabus
 * mismatch - e.g. an OCR Q3 structure question is meaningless on a
 * Cambridge IGCSE paper. Untagged questions still pass.
 */
export function matchesPracticeBoard(
  question: { id: string; board?: string; tier?: string },
  selectedBoard: ExamBoard | null,
): boolean {
  if (!selectedBoard) return true
  if (!question.board) return true
  const allowed = legacyDisplayNamesForBoard(selectedBoard)
  if (allowed.length === 0) return true
  return allowed.some((name) => name.toLowerCase() === question.board!.toLowerCase())
}
