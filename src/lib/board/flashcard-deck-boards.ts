import type { ExamBoard } from './board-store'

/**
 * Maps each flashcard deck `id` to the exam boards it is relevant for.
 *
 * Conventions:
 * - 'all' (handled below) means show on every board
 * - Anthology / poetry collections are board-specific
 * - Set-text decks (Macbeth, AIC, ACC, J&H) are mapped to their actual boards
 * - Skill / vocabulary / technique decks are universal
 *
 * Decks not present in this map default to "all boards" so existing decks are
 * never accidentally hidden.
 */

export const ALL_BOARDS: ExamBoard[] = [
  'ks3',
  'aqa',
  'edexcel',
  'ocr',
  'eduqas',
  'edexcel-igcse',
  'edexcel-igcse-lang',
  'cambridge-0500',
  'cambridge-0990',
  'cambridge-0475',
  'ial-edexcel',
  'aqa-a-level',
  'edexcel-a-level',
  'ocr-a-level',
  'eduqas-a-level',
]

/** Boards that study the standard GCSE Shakespeare/19th century novel set-texts */
const GCSE_LIT_BOARDS: ExamBoard[] = ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse']

const GCSE_LIT_NO_IGCSE: ExamBoard[] = ['aqa', 'edexcel', 'ocr', 'eduqas']

const ACC_BOARDS: ExamBoard[] = ['aqa', 'edexcel', 'eduqas']

export const FLASHCARD_DECK_BOARDS: Record<string, ExamBoard[]> = {
  // ── AQA-only poetry anthologies ───────────────────────────────────────────
  'aqa-power-conflict-quotes': ['aqa'],
  'aqa-love-relationships-quotes': ['aqa'],

  // ── Edexcel-only poetry anthologies ──────────────────────────────────────
  'edexcel-relationships-poetry': ['edexcel'],
  'edexcel-conflict-poetry': ['edexcel'],
  'edexcel-igcse-poetry': ['edexcel-igcse'],

  // ── Edexcel-only paper terminology decks ─────────────────────────────────
  'edexcel-paper1-key-terms': ['edexcel'],
  'edexcel-paper2-key-terms': ['edexcel'],
  'edexcel-1en2-paper-1-key-terms': ['edexcel'],
  'edexcel-1en2-paper-2-key-terms': ['edexcel'],
  'edexcel-1en2-assessment-objectives': ['edexcel'],
  'edexcel-1en2-mark-scheme-vocabulary': ['edexcel'],
  'edexcel-1en2-exam-technique': ['edexcel'],

  // ── Set-text decks ───────────────────────────────────────────────────────
  'macbeth-quotes': GCSE_LIT_BOARDS,
  'romeo-juliet-quotes': GCSE_LIT_BOARDS,
  'inspector-calls-quotes': GCSE_LIT_BOARDS,
  'aic-comprehensive': GCSE_LIT_BOARDS,
  'jekyll-hyde-quotes': GCSE_LIT_NO_IGCSE,
  'christmas-carol-quotes': ACC_BOARDS,
  'acc-comprehensive': ACC_BOARDS,
  // Lord of the Flies: AQA + OCR + Eduqas (per set-texts.ts)
  'lotf-comprehensive': ['aqa', 'ocr', 'eduqas'],
  // Animal Farm: AQA + Edexcel + OCR (per set-texts.ts)
  'af-comprehensive': ['aqa', 'edexcel', 'ocr'],

  // ── Board-specific exam technique decks ──────────────────────────────────
  // These decks contain paper-by-paper question technique guidance that is
  // strictly board-specific (paper structure, mark schemes, AOs differ).
  'aqa-exam-technique': ['aqa'],
  'edexcel-exam-technique': ['edexcel'],
  'ocr-exam-technique': ['ocr'],
  // WJEC = Eduqas (WJEC Eduqas single-anthology GCSE)
  'wjec-exam-technique': ['eduqas'],

  // ── Universal skills / technique / vocabulary decks ──────────────────────
  'literary-techniques': ALL_BOARDS,
  'grammar-terms': ALL_BOARDS,
  'advanced-writing-techniques': ALL_BOARDS,
  'narrative-techniques': ALL_BOARDS,
  'language-devices': ALL_BOARDS,
  'critical-approaches': ALL_BOARDS,
  'essay-writing': ALL_BOARDS,
  'bulk-deck': ALL_BOARDS,
  'final-deck': ALL_BOARDS,
  'poetry-analysis-techniques': ALL_BOARDS,
  'essay-skills': ALL_BOARDS,
  'academic-vocabulary': ALL_BOARDS,
  'grammar-terms-advanced': ALL_BOARDS,
  'rhetorical-devices': ALL_BOARDS,
  'tier2-vocabulary': ALL_BOARDS,
}

/** Returns the boards a deck is relevant for. Unknown decks default to all boards. */
export function getDeckBoards(deckId: string): ExamBoard[] {
  return FLASHCARD_DECK_BOARDS[deckId] ?? ALL_BOARDS
}

/** True if the given deck should be shown to a student on `board`. */
export function deckMatchesBoard(deckId: string, board: ExamBoard | null): boolean {
  if (!board) return true
  return getDeckBoards(deckId).includes(board)
}
