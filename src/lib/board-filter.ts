import type { ExamBoard } from '@/store/board-store';

/**
 * Returns true if a course/item matches the selected board.
 * Items with no board (e.g. KS3) are "generic" and show for everyone.
 */
export function matchesBoard(
  itemBoard: string | undefined | null,
  selectedBoard: ExamBoard | null
): boolean {
  if (!selectedBoard) return true;       // no board selected yet — show all
  if (!itemBoard) return true;           // generic content (KS3) — show for everyone
  return itemBoard === selectedBoard;    // board-specific — must match
}

/**
 * For flashcard decks that use board: 'All' to mean universal content.
 */
export function matchesDeckBoard(
  deckBoard: string,
  selectedBoard: ExamBoard | null
): boolean {
  if (!selectedBoard) return true;
  if (deckBoard === 'All') return true;
  // IGCSE decks should show for Edexcel users
  if (deckBoard === 'IGCSE') return selectedBoard === 'Edexcel';
  return deckBoard === selectedBoard;
}

/**
 * For practice questions — handles IGCSE as Edexcel subset.
 */
export function matchesPracticeBoard(
  question: { id: string; board?: string; tier?: string },
  selectedBoard: ExamBoard | null
): boolean {
  if (!selectedBoard) return true;
  const isIgcse = question.id.includes('igcse') || question.tier === 'IGCSE';
  if (isIgcse) return selectedBoard === 'Edexcel';
  if (!question.board) return true;
  return question.board === selectedBoard;
}
