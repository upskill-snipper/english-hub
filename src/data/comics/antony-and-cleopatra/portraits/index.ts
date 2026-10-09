import type { Portrait } from '@/lib/comics/types'

import { antony } from './antony'
import { charmian } from './charmian'
import { cleopatra } from './cleopatra'
import { dolabella } from './dolabella'
import { enobarbus } from './enobarbus'
import { eros } from './eros'
import { iras } from './iras'
import { lepidus } from './lepidus'
import { menas } from './menas'
import { octavia } from './octavia'
import { octaviusCaesar } from './octavius-caesar'
import { pompey } from './pompey'

/**
 * The Antony and Cleopatra portraits: each of the people in the guide's
 * relationships who comes on stage, as the play describes them, in their own
 * files here, with the words their numbered markers point to, in the order
 * the guide's relationships name them. Fulvia, Antony's first wife, is named
 * there too, but never appears and is never described: she has no portrait.
 *
 * Every phrase is copied from the held edition, src/data/full-texts/
 * antony-and-cleopatra.ts (Project Gutenberg #1534), and the comics test
 * checks it there, mark for mark. A phrase may not run across a paragraph
 * break, which in a play means across two speeches; every card here takes its
 * markers from more than one speech, so each prints the phrases alone, and no
 * passage.
 *
 * Shakespeare describes few of these people, and most of what he gives is
 * said by someone else. Where the play gives no looks, the sitter is drawn
 * plainly in the dress of the time, as the figure kit draws them (see
 * ./common.tsx), the markers point only at what the play does say, and the
 * card's small print says so. The rules every portrait keeps, on the deaths
 * in this play, on Cleopatra, on red and on the markers, are in ./common.tsx
 * and ../index.ts.
 */
export const PORTRAITS: Portrait[] = [
  antony,
  cleopatra,
  octaviusCaesar,
  octavia,
  enobarbus,
  eros,
  charmian,
  iras,
  lepidus,
  pompey,
  menas,
  dolabella,
]
