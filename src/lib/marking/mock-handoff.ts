/**
 * Send a finished mock answer to the marking page (SF-4).
 *
 * THE DEFECT. The 178 mock papers are the biggest free surface in the product,
 * and a written answer on one is never scored: the results view says it is
 * "self-marked against the mark scheme", the submit handler keeps the answers
 * in component state and nothing else, and every link on the results view goes
 * back to /mock-exams. A student finishes a paper at the exact moment they most
 * want a mark, and the product shows them the way out.
 *
 * THE HANDOFF ALREADY EXISTED. `src/lib/marking/draft-store.ts` carries an
 * essay through a sign-in round trip in sessionStorage - tab-scoped, consumed
 * on read, because it is a child's schoolwork on a possibly shared machine. The
 * same mechanism carries an answer from a mock to /marking/submit, so this adds
 * a resolver and a button rather than a second way of moving an essay about.
 *
 * WHAT THIS FILE IS CAREFUL ABOUT. The mock papers and the mark schemes are two
 * separate corpora with different board spellings - `AQA / Edexcel IGCSE`,
 * `WJEC`, `Pearson Edexcel`, `All`. Guessing wrong sends a student's Language
 * answer to a Literature grid and marks it against the wrong objectives, which
 * is worse than not offering the button. So an inexact match is REPORTED as
 * inexact and the caller tells the reader, rather than quietly pre-selecting
 * something plausible.
 */

import { MARK_SCHEMES, type MarkScheme } from './mark-schemes'

/** The values `/marking/submit` uses for its board picker. */
export type MarkingBoard =
  | 'AQA'
  | 'Edexcel'
  | 'OCR'
  | 'Eduqas'
  | 'Cambridge-0500'
  | 'Cambridge-0990'

/**
 * Mock-paper board spellings, mapped to the marking picker.
 *
 * Listed rather than pattern-matched, because a loose match is how a Language
 * answer reaches a Literature grid. A spelling not in this table produces no
 * board, and the caller offers the button without a pre-selection instead of
 * with a wrong one.
 */
const BOARD_SPELLINGS: ReadonlyArray<readonly [RegExp, MarkingBoard]> = [
  [/^aqa$/i, 'AQA'],
  [/^(pearson )?edexcel$/i, 'Edexcel'],
  [/^ocr$/i, 'OCR'],
  [/^(wjec|eduqas|wjec eduqas)$/i, 'Eduqas'],
  [/0500/, 'Cambridge-0500'],
  [/0990/, 'Cambridge-0990'],
  // "AQA / Edexcel IGCSE" and similar name more than one board. The first is
  // not necessarily the paper's board, so these resolve to AQA only when AQA
  // leads, and are flagged inexact by the caller.
  [/^aqa\s*\/\s*edexcel/i, 'AQA'],
]

export interface MockPaperIdentity {
  examBoard: string
  paperType: 'language' | 'literature'
  paperNumber: 1 | 2
}

export interface HandoffTarget {
  /** Board value for the picker, or null when the spelling is not recognised. */
  board: MarkingBoard | null
  /** MARK_SCHEMES id, or null when no scheme matches closely enough. */
  schemeId: string | null
  /**
   * False when the scheme is the nearest available rather than the paper's own.
   *
   * The caller MUST show this to the reader. A mark against the wrong paper is
   * a number a student may act on.
   */
  exact: boolean
  /** Why, in a sentence, when it is not exact. */
  note: string | null
}

export function resolveMarkingBoard(examBoard: string): MarkingBoard | null {
  const trimmed = examBoard.trim()
  for (const [pattern, board] of BOARD_SPELLINGS) {
    if (pattern.test(trimmed)) return board
  }
  return null
}

/** Every scheme on a board, in the picker's own order. */
function schemesForBoard(board: MarkingBoard): MarkScheme[] {
  const tokens: Record<MarkingBoard, string[]> = {
    AQA: ['aqa'],
    Edexcel: ['edexcel', 'pearson edexcel'],
    OCR: ['ocr'],
    Eduqas: ['eduqas', 'wjec eduqas', 'wjec'],
    'Cambridge-0500': ['0500'],
    'Cambridge-0990': ['0990'],
  }
  const wanted = tokens[board]
  return Object.values(MARK_SCHEMES).filter((scheme) => {
    const name = scheme.board.trim().toLowerCase()
    // The scheme ID too. The Cambridge schemes carry `board: 'Cambridge'` and
    // `'Cambridge (9-1)'`; only their IDs carry 0500 and 0990, which are the
    // tokens that tell the two syllabuses apart.
    const id = scheme.id.toLowerCase()
    return wanted.some((token) => name === token || name.includes(token) || id.includes(token))
  })
}

/**
 * The scheme a mock answer should be marked against.
 *
 * Matching is on subject first and paper number second, because marking a
 * Literature answer against a Language grid is the failure that matters. A
 * paper-number mismatch is survivable and flagged; a subject mismatch is not
 * offered at all.
 */
export function resolveHandoffTarget(paper: MockPaperIdentity): HandoffTarget {
  const board = resolveMarkingBoard(paper.examBoard)
  // "AQA / Edexcel IGCSE" names two boards. A scheme will match the first one,
  // but the paper is not necessarily AQA's, so this can never be reported as an
  // exact match however well the lookup goes.
  const namesSeveralBoards = /[/&]|\sand\s/i.test(paper.examBoard)
  if (!board) {
    return {
      board: null,
      schemeId: null,
      exact: false,
      note: `This paper is listed as "${paper.examBoard}", which does not map to a single marking board. Choose the board and paper yourself.`,
    }
  }

  const schemes = schemesForBoard(board)
  if (schemes.length === 0) {
    return {
      board,
      schemeId: null,
      exact: false,
      note: 'There is no mark scheme for this board yet. Choose the nearest paper yourself.',
    }
  }

  const wantedSubject = paper.paperType === 'literature' ? 'literature' : 'language'
  const sameSubject = schemes.filter((s) => s.subject.trim().toLowerCase().includes(wantedSubject))

  if (sameSubject.length === 0) {
    return {
      board,
      schemeId: null,
      exact: false,
      // Deliberately no fallback across subjects. AO2 in Literature and AO2 in
      // Language are different objectives; a mark from the wrong one is not a
      // rough guide, it is wrong.
      note: `We have no ${wantedSubject} mark scheme for ${board} yet. Choose a paper yourself.`,
    }
  }

  const match = sameSubject.find((s) => new RegExp(`\\b${paper.paperNumber}\\b`).test(s.paper))
  if (match) {
    if (namesSeveralBoards) {
      return {
        board,
        schemeId: match.id,
        exact: false,
        note: `This paper is listed as "${paper.examBoard}", so the board is set to ${board}. Change it if that is not yours.`,
      }
    }
    return { board, schemeId: match.id, exact: true, note: null }
  }

  const nearest = sameSubject[0]
  return {
    board,
    schemeId: nearest.id,
    exact: false,
    note: `We have no Paper ${paper.paperNumber} ${wantedSubject} scheme for ${board}, so this is set to ${nearest.paper}. Check it fits before you submit.`,
  }
}
