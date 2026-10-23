/**
 * The five chapters, in the order one student meets them: read the text, play
 * it, revise it, write about it, sit the paper. The ids are the sections' DOM
 * ids and the index's anchors; the numerals are printed large and read aloud
 * through the eyebrow, so the index hides its own copy of them.
 */
export type ChapterId = 'read' | 'play' | 'revise' | 'write' | 'sit'

export const CHAPTERS: ReadonlyArray<{ id: ChapterId; numeral: string }> = [
  { id: 'read', numeral: 'I' },
  { id: 'play', numeral: 'II' },
  { id: 'revise', numeral: 'III' },
  { id: 'write', numeral: 'IV' },
  { id: 'sit', numeral: 'V' },
]
