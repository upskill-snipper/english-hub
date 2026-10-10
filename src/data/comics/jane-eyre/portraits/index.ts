import type { Portrait } from '@/lib/comics/types'

import { adeleVarens } from './adele-varens'
import { berthaMason } from './bertha-mason'
import { bessie } from './bessie'
import { blancheIngram } from './blanche-ingram'
import { dianaAndMaryRivers } from './diana-and-mary-rivers'
import { gracePoole } from './grace-poole'
import { helenBurns } from './helen-burns'
import { janeEyre } from './jane-eyre'
import { johnEyre } from './john-eyre'
import { johnReed } from './john-reed'
import { missTemple } from './miss-temple'
import { mrBrocklehurst } from './mr-brocklehurst'
import { mrRochester } from './mr-rochester'
import { mrsFairfax } from './mrs-fairfax'
import { mrsReed } from './mrs-reed'
import { richardMason } from './richard-mason'
import { rosamondOliver } from './rosamond-oliver'
import { stJohnRivers } from './st-john-rivers'

/**
 * The Jane Eyre portraits: each of the people in the guide's relationships,
 * as Brontë describes them, in their own files here, with the words their
 * numbered markers point to. In the order the guide's relationships first
 * name them. What they share, and the rules every one of them keeps (on
 * Bertha Mason, on the children, on red and on the markers), are in
 * ./common.tsx.
 *
 * Every phrase is copied from the held edition, src/data/full-texts/
 * jane-eyre.ts, and the comics test checks it there. Where a card prints a
 * whole passage, every marker phrase is inside it; where the words come from
 * more than one paragraph, or from a paragraph whose words between them are
 * set off by the edition's dashes, the card prints the phrases alone. No
 * passage here carries a dash from the edition.
 */
export const PORTRAITS: Portrait[] = [
  janeEyre,
  mrRochester,
  stJohnRivers,
  berthaMason,
  mrsReed,
  johnReed,
  helenBurns,
  missTemple,
  mrBrocklehurst,
  adeleVarens,
  blancheIngram,
  richardMason,
  gracePoole,
  rosamondOliver,
  dianaAndMaryRivers,
  johnEyre,
  bessie,
  mrsFairfax,
]
