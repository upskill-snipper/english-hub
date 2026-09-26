import type { Portrait } from '@/lib/comics/types'

import { alphonseFrankenstein } from './alphonse-frankenstein'
import { elizabethLavenza } from './elizabeth-lavenza'
import { henryClerval } from './henry-clerval'
import { justineMoritz } from './justine-moritz'
import { robertWalton } from './robert-walton'
import { theCreature } from './the-creature'
import { theDeLaceyFamily } from './the-de-lacey-family'
import { victorFrankenstein } from './victor-frankenstein'
import { williamFrankenstein } from './william-frankenstein'

/**
 * The Frankenstein portraits: each of the people in the guide's
 * relationships, as Shelley describes them, in their own files here, with the
 * words their numbered markers point to. In the order the guide's
 * relationships name them.
 *
 * Every phrase is copied from the held 1831 edition, src/data/full-texts/
 * frankenstein.ts, and the comics test checks it there. Where a card prints a
 * whole passage, every marker phrase is inside it; where the words come from
 * more than one paragraph, the card prints the phrases alone. What the dress
 * is, and why, is set out in ./common.tsx.
 */
export const PORTRAITS: Portrait[] = [
  victorFrankenstein,
  theCreature,
  robertWalton,
  elizabethLavenza,
  henryClerval,
  theDeLaceyFamily,
  williamFrankenstein,
  justineMoritz,
  alphonseFrankenstein,
]
