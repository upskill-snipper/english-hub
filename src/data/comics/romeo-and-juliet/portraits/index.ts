import type { Portrait } from '@/lib/comics/types'

import { benvolio } from './benvolio'
import { friarLawrence } from './friar-lawrence'
import { juliet } from './juliet'
import { ladyCapulet } from './lady-capulet'
import { lordCapulet } from './lord-capulet'
import { lordMontague } from './lord-montague'
import { mercutio } from './mercutio'
import { paris } from './paris'
import { princeEscalus } from './prince-escalus'
import { romeo } from './romeo'
import { theNurse } from './the-nurse'
import { tybalt } from './tybalt'

/**
 * The Romeo and Juliet portraits: each character as the play describes them,
 * in their own files here, with the words their numbered markers point to.
 *
 * An edition is held in src/data/full-texts/romeo-and-juliet.ts, so the comics
 * test checks every marker phrase, and every passage, against it word for
 * word. A phrase may not run across a paragraph break, which in a play means
 * across two speeches; a portrait whose markers come from more than one speech
 * lists the phrases and prints no passage.
 *
 * Shakespeare describes very few of these people. Where the play gives no
 * looks, the figure is drawn plainly in the dress of the time (see
 * ./common.tsx), the markers point only at what the play does say, and the
 * card's small print says so.
 */
export const PORTRAITS: Portrait[] = [
  romeo,
  juliet,
  mercutio,
  benvolio,
  tybalt,
  friarLawrence,
  theNurse,
  paris,
  lordCapulet,
  ladyCapulet,
  lordMontague,
  princeEscalus,
]
