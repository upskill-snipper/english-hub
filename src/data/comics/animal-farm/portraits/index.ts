import type { Portrait } from '@/lib/comics/types'

import { benjamin } from './benjamin'
import { boxer } from './boxer'
import { clover } from './clover'
import { mollie } from './mollie'
import { moses } from './moses'
import { mrFrederick } from './mr-frederick'
import { mrJones } from './mr-jones'
import { mrPilkington } from './mr-pilkington'
import { mrWhymper } from './mr-whymper'
import { napoleon } from './napoleon'
import { oldMajor } from './old-major'
import { snowball } from './snowball'
import { squealer } from './squealer'
import { theDogs } from './the-dogs'

/**
 * The Animal Farm portraits: each of the animals and people in the guide's
 * relationships, as Orwell describes them, in their own files here, with the
 * words their numbered markers point to. In the order the guide's
 * relationships first name them.
 *
 * Every phrase is copied from the held edition, src/data/full-texts/
 * animal-farm.ts, and the comics test checks it there. Where a card prints a
 * whole passage, every marker phrase is inside it; where the words come from
 * more than one paragraph, the card prints the phrases alone. How each animal
 * is cut, and why, is set out in ./common.tsx.
 */
export const PORTRAITS: Portrait[] = [
  napoleon,
  snowball,
  squealer,
  theDogs,
  boxer,
  benjamin,
  clover,
  oldMajor,
  mollie,
  moses,
  mrWhymper,
  mrFrederick,
  mrPilkington,
  mrJones,
]
