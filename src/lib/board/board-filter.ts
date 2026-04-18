import type { ExamBoard } from './board-store'
import { getBoardConfig } from './board-config'

export function getBoardType(board: ExamBoard | null): 'ks3' | 'gcse' | 'igcse' | 'ial' | null {
  if (!board) return null
  const config = getBoardConfig(board)
  return config?.type ?? null
}

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

export function isKs3Board(board: ExamBoard | null): boolean {
  return board === 'ks3'
}

export function isIgcseBoard(board: ExamBoard | null): boolean {
  return board === 'edexcel-igcse' || board === 'edexcel-igcse-lang' || board === 'cambridge-0500' || board === 'cambridge-0990' || board === 'cambridge-0475'
}

export function isGcseBoard(board: ExamBoard | null): boolean {
  return board === 'aqa' || board === 'edexcel' || board === 'ocr' || board === 'eduqas'
}

export function isIalBoard(board: ExamBoard | null): boolean {
  return board === 'ial-edexcel'
}

// Routes that are board-specific and should redirect if user is on wrong board
export const BOARD_SPECIFIC_PATH_PREFIXES: Record<ExamBoard, string[]> = {
  'ks3': [],
  'aqa': ['/revision/poetry/power-and-conflict', '/revision/poetry/love-and-relationships', '/analysis/aqa-power-conflict', '/analysis/aqa-love-relationships'],
  'edexcel': ['/revision/poetry/edexcel'],
  'ocr': ['/revision/poetry/ocr'],
  'eduqas': ['/revision/poetry/eduqas'],
  'edexcel-igcse': ['/igcse/edexcel'],
  'edexcel-igcse-lang': ['/igcse/edexcel'], // TODO: add distinct language routes when content is built
  'cambridge-0500': ['/igcse/cambridge/0500'],
  'cambridge-0990': ['/igcse/cambridge/0990'],
  'cambridge-0475': [], // TODO: add Cambridge Literature routes when content is built
  'ial-edexcel': [], // TODO: add IAL routes when content is built
}
