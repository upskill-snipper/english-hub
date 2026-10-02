import type { Portrait } from '@/lib/comics/types'

import { bianca } from './bianca'
import { brabantio } from './brabantio'
import { cassio } from './cassio'
import { desdemona } from './desdemona'
import { emilia } from './emilia'
import { iago } from './iago'
import { lodovico } from './lodovico'
import { othello } from './othello'
import { roderigo } from './roderigo'

/**
 * The Othello portraits: each of the people in the guide's relationships
 * (src/data/study-guides/othello.ts), as the play describes them, in their
 * own files here, with the words their numbered markers point to, in the
 * order the relationships name them.
 *
 * Every phrase is copied from the held edition, src/data/full-texts/
 * othello.ts (Project Gutenberg #1531), and the comics test checks it there,
 * mark for mark. A phrase may not run across a paragraph break, which in a
 * play means across two speeches; a card whose markers come from more than
 * one speech prints the phrases alone, and no passage.
 *
 * Shakespeare describes few of these people, and most of what he gives is
 * said by someone else. Where the play gives no looks, the sitter is drawn
 * plainly in the dress of the time, as the figure kit draws them
 * (../panels/people.tsx), the markers point only at what the play does say,
 * and the card's small print says so. No marker, passage, note or alt text
 * quotes the racist or sexual insults Iago, Roderigo and Brabantio use about
 * Othello and Desdemona, whoever in the play speaks them.
 */
export const PORTRAITS: Portrait[] = [
  othello,
  desdemona,
  iago,
  emilia,
  roderigo,
  cassio,
  brabantio,
  bianca,
  lodovico,
]
