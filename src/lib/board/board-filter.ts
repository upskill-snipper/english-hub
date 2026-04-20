import type { ExamBoard } from './board-store'
import { getBoardConfig } from './board-config'

export function getBoardType(
  board: ExamBoard | null,
): 'ks3' | 'gcse' | 'igcse' | 'ial' | 'a-level' | null {
  if (!board) return null
  const config = getBoardConfig(board)
  return config?.type ?? null
}

export function isForBoard(contentBoards: ExamBoard[], userBoard: ExamBoard | null): boolean {
  if (!userBoard) return true // server-side fallback when board unknown
  return contentBoards.includes(userBoard)
}

export function filterByBoard<T extends { boards?: ExamBoard[] }>(
  items: T[],
  userBoard: ExamBoard | null,
): T[] {
  if (!userBoard) return items
  return items.filter((item) => !item.boards || item.boards.includes(userBoard))
}

export function isKs3Board(board: ExamBoard | null): boolean {
  return board === 'ks3'
}

export function isIgcseBoard(board: ExamBoard | null): boolean {
  return (
    board === 'edexcel-igcse' ||
    board === 'edexcel-igcse-lang' ||
    board === 'cambridge-0500' ||
    board === 'cambridge-0990' ||
    board === 'cambridge-0475'
  )
}

export function isGcseBoard(board: ExamBoard | null): boolean {
  return board === 'aqa' || board === 'edexcel' || board === 'ocr' || board === 'eduqas'
}

export function isIalBoard(board: ExamBoard | null): boolean {
  return board === 'ial-edexcel'
}

export function isALevelBoard(board: ExamBoard | null): boolean {
  return (
    board === 'aqa-a-level' ||
    board === 'edexcel-a-level' ||
    board === 'ocr-a-level' ||
    board === 'eduqas-a-level'
  )
}

/**
 * Returns the board-specific A-Level hub URL for a given board.
 * Returns `null` if the board is not a UK A-Level board.
 */
export function getALevelHubUrl(board: ExamBoard | null): string | null {
  if (!board) return null
  switch (board) {
    case 'aqa-a-level':
      return '/a-level/aqa'
    case 'edexcel-a-level':
      return '/a-level/edexcel'
    case 'ocr-a-level':
      return '/a-level/ocr'
    case 'eduqas-a-level':
      return '/a-level/eduqas'
    default:
      return null
  }
}

/**
 * Returns the board-specific IGCSE hub URL for a given board.
 * Returns `null` if the board is not an IGCSE board.
 */
export function getIgcseHubUrl(board: ExamBoard | null): string | null {
  if (!board) return null
  switch (board) {
    case 'edexcel-igcse':
      return '/igcse/edexcel'
    case 'edexcel-igcse-lang':
      return '/igcse/edexcel-lang'
    case 'cambridge-0500':
      return '/igcse/cambridge/0500'
    case 'cambridge-0990':
      return '/igcse/cambridge/0990'
    case 'cambridge-0475':
      return '/igcse/cambridge'
    default:
      return null
  }
}

// Routes that are board-specific and should redirect if user is on wrong board
export const BOARD_SPECIFIC_PATH_PREFIXES: Record<ExamBoard, string[]> = {
  ks3: [],
  aqa: [
    '/revision/poetry/power-and-conflict',
    '/revision/poetry/love-and-relationships',
    '/analysis/aqa-power-conflict',
    '/analysis/aqa-love-relationships',
  ],
  edexcel: ['/revision/poetry/edexcel'],
  ocr: ['/revision/poetry/ocr'],
  eduqas: ['/revision/poetry/eduqas'],
  'edexcel-igcse': ['/igcse/edexcel'],
  'edexcel-igcse-lang': ['/igcse/edexcel'], // TODO: add distinct language routes when content is built
  'cambridge-0500': ['/igcse/cambridge/0500'],
  'cambridge-0990': ['/igcse/cambridge/0990'],
  'cambridge-0475': [], // TODO: add Cambridge Literature routes when content is built
  'ial-edexcel': [], // TODO: add IAL routes when content is built
  'aqa-a-level': ['/a-level/aqa'],
  'edexcel-a-level': ['/a-level/edexcel'],
  'ocr-a-level': ['/a-level/ocr'],
  'eduqas-a-level': ['/a-level/eduqas'],
}
