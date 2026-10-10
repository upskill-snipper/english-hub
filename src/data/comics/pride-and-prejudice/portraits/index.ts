import type { Portrait } from '@/lib/comics/types'

import { charlotteLucas } from './charlotte-lucas'
import { elizabethBennet } from './elizabeth-bennet'
import { georgianaDarcy } from './georgiana-darcy'
import { janeBennet } from './jane-bennet'
import { ladyCatherineDeBourgh } from './lady-catherine-de-bourgh'
import { lydiaBennet } from './lydia-bennet'
import { mrBennet } from './mr-bennet'
import { mrBingley } from './mr-bingley'
import { mrCollins } from './mr-collins'
import { mrDarcy } from './mr-darcy'
import { mrWickham } from './mr-wickham'
import { mrsBennet } from './mrs-bennet'
import { mrsGardiner } from './mrs-gardiner'

/**
 * The Pride and Prejudice portraits: each of the people in the guide's
 * relationships, as Austen describes them, in their own files here, with the
 * words their numbered markers point to, in the order the guide's
 * relationships first name them. What they share, and the rules every one of
 * them keeps (on the dress, on red and on the markers), are in ./common.tsx.
 */
export const PORTRAITS: Portrait[] = [
  elizabethBennet,
  mrDarcy,
  janeBennet,
  mrBingley,
  mrBennet,
  mrsBennet,
  mrWickham,
  georgianaDarcy,
  lydiaBennet,
  mrCollins,
  charlotteLucas,
  ladyCatherineDeBourgh,
  mrsGardiner,
]
