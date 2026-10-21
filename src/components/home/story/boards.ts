import { getBoardConfig, type ExamBoard } from '@/lib/board/board-config'

/**
 * One card on the homepage board picker.
 *
 * The seven cards are declared in src/app/page.tsx, not here, because
 * homepage-board-cards.test.ts reads that file and holds each card's href to
 * boardLandingHref(<id>): the path and the ?setBoard= parameter must name the
 * same board, or a student would set one board and see another.
 */
export type Board = {
  /** The name a student knows the board by, as the brief spells it. */
  name: string
  id: ExamBoard
  /** Always boardLandingHref(id): the shelf, or the hub for a board with no shelf. */
  href: string
}

export type BoardGroups = { gcse: Board[]; igcse: Board[] }

/**
 * The name to print for a board in a sentence.
 *
 * The seven homepage boards are named as the brief names them ("Pearson
 * Edexcel", not the config's "Edexcel"); any other remembered board, KS3 or an
 * A level for instance, falls back to its config name. The id itself always
 * comes from the cookie or the set-text registry, never from here.
 */
export function boardLabel(id: ExamBoard, groups: BoardGroups): string {
  const card = [...groups.gcse, ...groups.igcse].find((b) => b.id === id)
  return card?.name ?? getBoardConfig(id)?.name ?? id
}
