import type { Portrait } from '@/lib/comics/types'

import { calpurnia } from './calpurnia'
import { cassius } from './cassius'
import { decius } from './decius'
import { juliusCaesar } from './julius-caesar'
import { lepidus } from './lepidus'
import { lucius } from './lucius'
import { marcusBrutus } from './marcus-brutus'
import { markAntony } from './mark-antony'
import { octavius } from './octavius'
import { portia } from './portia'
import { theCitizens } from './the-citizens'

/**
 * The Julius Caesar portraits: each of the people in the guide's
 * relationships, as the play describes them, in their own files here, with
 * the words their numbered markers point to. In the order the guide's
 * relationships name them.
 *
 * Every phrase is copied from the held edition, src/data/full-texts/
 * julius-caesar.ts (Project Gutenberg #1522), and the comics test checks it
 * there, mark for mark. A phrase may not run across a paragraph break, which
 * in a play means across two speeches; a card whose markers come from more
 * than one speech prints the phrases alone, and no passage.
 *
 * Shakespeare describes few of these people, and most of what he gives is
 * said by someone else. Where the play gives no looks, the sitter is drawn
 * plainly in the dress of the time (see ./common.tsx), the markers point only
 * at what the play does say, and the card's small print says so.
 */
export const PORTRAITS: Portrait[] = [
  marcusBrutus,
  cassius,
  juliusCaesar,
  markAntony,
  portia,
  calpurnia,
  decius,
  theCitizens,
  octavius,
  lepidus,
  lucius,
]
