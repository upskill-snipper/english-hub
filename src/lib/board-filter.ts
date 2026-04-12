import type { ExamBoard } from '@/lib/board/board-store';

/**
 * Board filtering is disabled — all content is accessible to all users
 * regardless of their selected exam board.
 *
 * These functions are kept as no-op stubs because other modules import them.
 */
export function matchesBoard(
  _itemBoard: string | undefined | null,
  _selectedBoard: ExamBoard | null
): boolean {
  return true;
}

export function matchesDeckBoard(
  _deckBoard: string,
  _selectedBoard: ExamBoard | null
): boolean {
  return true;
}

export function matchesPracticeBoard(
  _question: { id: string; board?: string; tier?: string },
  _selectedBoard: ExamBoard | null
): boolean {
  return true;
}
