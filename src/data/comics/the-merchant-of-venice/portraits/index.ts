import type { Portrait } from '@/lib/comics/types'

import { antonio } from './antonio'
import { bassanio } from './bassanio'
import { gratiano } from './gratiano'
import { jessica } from './jessica'
import { launceletGobbo } from './launcelet-gobbo'
import { lorenzo } from './lorenzo'
import { nerissa } from './nerissa'
import { portia } from './portia'
import { shylock } from './shylock'
import { thePrinceOfMorocco } from './the-prince-of-morocco'
import { tubal } from './tubal'

/**
 * The Merchant of Venice portraits: each character in the guide's character
 * map as the play describes them, in their own files here, with the words
 * their numbered markers point to, in the order the character map meets them.
 *
 * An edition is held in src/data/full-texts/the-merchant-of-venice.ts, so the
 * comics test checks every marker phrase, and every passage, against it word
 * for word. A phrase may not run across a paragraph break, which in a play
 * means across two speeches; a portrait whose markers come from more than one
 * speech lists the phrases and prints no passage.
 *
 * Shakespeare describes few of these people, and most of what he gives is
 * said by someone else. Where the play gives no looks, the figure is drawn
 * plainly in the dress of the time (see ./common.tsx), the markers point only
 * at what the play does say, and the card's small print says so. No marker
 * phrase is a slur or a line of abuse, whoever in the play speaks it.
 */
export const PORTRAITS: Portrait[] = [
  antonio,
  bassanio,
  shylock,
  jessica,
  portia,
  lorenzo,
  nerissa,
  gratiano,
  tubal,
  launceletGobbo,
  thePrinceOfMorocco,
]
