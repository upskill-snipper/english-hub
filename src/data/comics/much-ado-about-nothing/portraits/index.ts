import type { Portrait } from '@/lib/comics/types'

import { beatrice } from './beatrice'
import { benedick } from './benedick'
import { borachio } from './borachio'
import { claudio } from './claudio'
import { dogberry } from './dogberry'
import { donJohn } from './don-john'
import { donPedro } from './don-pedro'
import { hero } from './hero'
import { leonato } from './leonato'
import { margaret } from './margaret'
import { verges } from './verges'

/**
 * The Much Ado About Nothing portraits: each character in the guide's
 * character map as the play describes them, in their own files here, with
 * the words their numbered markers point to.
 *
 * An edition is held in src/data/full-texts/much-ado-about-nothing.ts, so the
 * comics test checks every marker phrase, and every passage, against it word
 * for word. A phrase may not run across a paragraph break, which in a play
 * means across two speeches; a portrait whose markers come from more than one
 * speech lists the phrases and prints no passage.
 *
 * Shakespeare describes few of these people, and most of what he gives is
 * said by someone else, often in a jest. Where the play gives no looks, the
 * figure is drawn plainly in the dress of the time (see ./common.tsx), the
 * markers point only at what the play does say, and the card's small print
 * says so.
 */
export const PORTRAITS: Portrait[] = [
  beatrice,
  benedick,
  hero,
  claudio,
  donPedro,
  donJohn,
  leonato,
  borachio,
  margaret,
  dogberry,
  verges,
]
