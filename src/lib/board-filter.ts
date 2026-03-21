import type { ExamBoard } from '@/store/board-store';

/**
 * Returns true if a course/item matches the selected board.
 * - KS3 users only see items with no board or board='All' (i.e. KS3 content)
 * - AQA/Edexcel/OCR/WJEC users see their board-specific content PLUS generic KS3 content
 */
export function matchesBoard(
  itemBoard: string | undefined | null,
  selectedBoard: ExamBoard | null
): boolean {
  if (!selectedBoard) return true;       // no board selected yet — show all
  if (selectedBoard === 'KS3') {
    // KS3 users only see generic (no board) or 'All' content
    return !itemBoard || itemBoard === 'All';
  }
  if (!itemBoard || itemBoard === 'All') return true; // generic content — show for all exam boards
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
  if (selectedBoard === 'KS3') return deckBoard === 'All';
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
  if (selectedBoard === 'KS3') {
    // KS3 users only see questions with no board or tier KS3
    return !question.board || question.board === 'All' || question.board === 'KS3' || question.tier === 'KS3';
  }
  const isIgcse = question.id.includes('igcse') || question.tier === 'IGCSE';
  if (isIgcse) return selectedBoard === 'Edexcel';
  if (!question.board) return true;
  return question.board === selectedBoard;
}
