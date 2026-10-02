import type { Portrait } from '@/lib/comics/types'

import { alonso } from './alonso'
import { antonio } from './antonio'
import { ariel } from './ariel'
import { caliban } from './caliban'
import { ferdinand } from './ferdinand'
import { gonzalo } from './gonzalo'
import { miranda } from './miranda'
import { prospero } from './prospero'
import { sebastian } from './sebastian'
import { stephano } from './stephano'
import { trinculo } from './trinculo'

/**
 * The Tempest portraits: each character in the guide's character map as the
 * play describes them, in their own files here, with the words their
 * numbered markers point to, in the order the character map meets them.
 *
 * An edition is held in src/data/full-texts/the-tempest.ts, so the comics
 * test checks every marker phrase, and every passage, against it word for
 * word. A phrase may not run across a paragraph break, which in a play means
 * across two speeches; a portrait whose markers come from more than one
 * speech lists the phrases and prints no passage.
 *
 * Shakespeare describes few of these people, and most of what he gives is
 * said by someone else. Where the play gives no looks, the figure is drawn
 * plainly in the dress of the time (see ./common.tsx), the markers point only
 * at what the play does say, and the card's small print says so. No marker
 * phrase is a slur or a line of abuse, whoever in the play speaks it: the
 * names the others call Caliban are never a marker, a passage or a caption.
 */
export const PORTRAITS: Portrait[] = [
  prospero,
  miranda,
  ariel,
  caliban,
  antonio,
  alonso,
  gonzalo,
  ferdinand,
  sebastian,
  stephano,
  trinculo,
]
