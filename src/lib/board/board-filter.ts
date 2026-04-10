import type { ExamBoard } from './board-store'

export function isForBoard(contentBoards: ExamBoard[], userBoard: ExamBoard | null): boolean {
  if (!userBoard) return true  // server-side fallback when board unknown
  return contentBoards.includes(userBoard)
}

export function filterByBoard<T extends { boards?: ExamBoard[] }>(
  items: T[],
  userBoard: ExamBoard | null,
): T[] {
  if (!userBoard) return items
  return items.filter((item) => !item.boards || item.boards.includes(userBoard))
}

export function isIgcseBoard(board: ExamBoard | null): boolean {
  return board === 'edexcel-igcse' || board === 'cambridge-0500' || board === 'cambridge-0990'
}

export function isGcseBoard(board: ExamBoard | null): boolean {
  return board === 'aqa' || board === 'edexcel' || board === 'ocr' || board === 'eduqas'
}

// Routes that are board-specific and should redirect if user is on wrong board
export const BOARD_SPECIFIC_PATH_PREFIXES: Record<ExamBoard, string[]> = {
  'aqa': ['/revision/poetry/power-and-conflict', '/revision/poetry/love-and-relationships', '/analysis/aqa-power-conflict', '/analysis/aqa-love-relationships'],
  'edexcel': ['/revision/poetry/edexcel'],
  'ocr': ['/revision/poetry/ocr'],
  'eduqas': ['/revision/poetry/eduqas'],
  'edexcel-igcse': ['/igcse/edexcel'],
  'cambridge-0500': ['/igcse/cambridge/0500'],
  'cambridge-0990': ['/igcse/cambridge/0990'],
}
