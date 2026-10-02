import type { Portrait } from '@/lib/comics/types'

import { albany } from './albany'
import { cordelia } from './cordelia'
import { cornwall } from './cornwall'
import { edgar } from './edgar'
import { edmund } from './edmund'
import { gloucester } from './gloucester'
import { goneril } from './goneril'
import { kent } from './kent'
import { kingLear } from './king-lear'
import { regan } from './regan'
import { theFool } from './the-fool'

/**
 * The King Lear portraits: each of the people in the guide's relationships
 * (src/data/study-guides/king-lear.ts), as the play describes them, in their
 * own files here, with the words their numbered markers point to, in the
 * order the relationships name them.
 *
 * Every phrase is copied from the held edition, src/data/full-texts/
 * king-lear.ts (Project Gutenberg #1532), and the comics test checks it there,
 * mark for mark. A phrase may not run across a paragraph break, which in a
 * play means across two speeches; a card whose markers all come from one
 * speech prints that passage, and a card whose markers come from more than one
 * prints the phrases alone.
 *
 * Shakespeare describes few of these people, and most of what he gives is
 * said by someone else: Cordelia's tears are a Gentleman's report, Goneril's
 * frown and Regan's eyes are Lear's words, Albany's mildness his wife's scorn.
 * Where the play gives no looks, the sitter is drawn plainly in the dress of
 * the play's old Britain, as the figure kit draws them (../panels/people.tsx),
 * the markers point only at what the play does say, and the card's small print
 * says so. No marker, passage, note or alt text is a curse or a line of abuse,
 * whoever in the play speaks it.
 *
 * Gloucester is drawn as he is after Act 3, Scene 7, with the plain band over
 * his eyes and nothing beneath it; Edgar as Poor Tom, decently covered, with
 * his own steady face. The rules for both, and for every marker on a face, are
 * in ./common.tsx.
 */
export const PORTRAITS: Portrait[] = [
  kingLear,
  cordelia,
  goneril,
  regan,
  kent,
  theFool,
  gloucester,
  edgar,
  edmund,
  albany,
  cornwall,
]
