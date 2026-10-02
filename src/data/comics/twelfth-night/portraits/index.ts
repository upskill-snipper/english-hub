import type { Portrait } from '@/lib/comics/types'

import { antonio } from './antonio'
import { feste } from './feste'
import { malvolio } from './malvolio'
import { maria } from './maria'
import { olivia } from './olivia'
import { orsino } from './orsino'
import { sebastian } from './sebastian'
import { sirAndrew } from './sir-andrew-aguecheek'
import { sirToby } from './sir-toby-belch'
import { viola } from './viola'

/**
 * The Twelfth Night portraits: each character in the guide's character map
 * as the play describes them, in their own files here, with the words their
 * numbered markers point to, in the order the character map meets them.
 *
 * An edition is held in src/data/full-texts/twelfth-night.ts (Project
 * Gutenberg #1526), so the comics test checks every marker phrase, and every
 * passage, against it word for word. A phrase may not run across a paragraph
 * break, which in a play means across two speeches; a portrait whose markers
 * come from more than one speech lists the phrases and prints no passage.
 * Gutenberg marks Latin and stage directions with underscores, which the
 * test does not strip, so no phrase here runs through one.
 *
 * Shakespeare describes few of these people, and much of what he gives is
 * said by someone else. Where the play gives no looks, the figure is drawn
 * plainly in the dress of the time (see ./common.tsx), the markers point only
 * at what the play does say, and the card's small print says so. No marker
 * phrase is a line of abuse, whoever in the play speaks it.
 */
export const PORTRAITS: Portrait[] = [
  orsino,
  olivia,
  viola,
  sebastian,
  antonio,
  malvolio,
  maria,
  sirToby,
  sirAndrew,
  feste,
]
