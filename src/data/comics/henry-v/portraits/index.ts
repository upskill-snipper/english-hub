import type { Portrait } from '@/lib/comics/types'

import { archbishopOfCanterbury } from './archbishop-of-canterbury'
import { bardolph } from './bardolph'
import { exeter } from './exeter'
import { fluellen } from './fluellen'
import { gower } from './gower'
import { kingHenryV } from './king-henry-v'
import { mistressQuickly } from './mistress-quickly'
import { pistol } from './pistol'
import { princessKatherine } from './princess-katherine'
import { scroop } from './scroop'
import { theConstable } from './the-constable'
import { theDauphin } from './the-dauphin'
import { williams } from './williams'

/**
 * The Henry V portraits: every character in the guide's map of relationships
 * (src/data/study-guides/henry-v.ts), each as the play describes them, in
 * their own file here, with the words their numbered markers point to. What
 * they share, and the rules they keep, are in ./common.tsx.
 *
 * The King first; then the rest in the order the play brings them on: the
 * Archbishop and Exeter at court (1.1, 1.2), the Eastcheap three in the
 * London street (2.1), Scroop at Southampton (2.2), the Dauphin and the
 * Constable at the French court (2.4), the captains at Harfleur (3.2),
 * Katherine at her lesson (3.4), and Williams in the camp before Agincourt
 * (4.1).
 *
 * The comics test checks every marker phrase and passage against the held
 * edition, src/data/full-texts/henry-v.ts (Project Gutenberg #1521), mark for
 * mark, within one speech.
 */
export const PORTRAITS: Portrait[] = [
  kingHenryV,
  archbishopOfCanterbury,
  exeter,
  bardolph,
  pistol,
  mistressQuickly,
  scroop,
  theDauphin,
  theConstable,
  fluellen,
  gower,
  princessKatherine,
  williams,
]
