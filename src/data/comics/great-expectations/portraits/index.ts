import type { Portrait } from '@/lib/comics/types'

import { abelMagwitch } from './abel-magwitch'
import { estella } from './estella'
import { joeGargery } from './joe-gargery'
import { missHavisham } from './miss-havisham'
import { compeyson } from './compeyson'
import { pip } from './pip'
import { mrJaggers } from './mr-jaggers'
import { molly } from './molly'
import { herbertPocket } from './herbert-pocket'
import { biddy } from './biddy'
import { mrsJoeGargery } from './mrs-joe-gargery'
import { orlick } from './orlick'
import { bentleyDrummle } from './bentley-drummle'

/**
 * The Great Expectations portraits: each of the people in the guide's
 * relationships, as Dickens describes them, in their own files here, with
 * the words their numbered markers point to, in the order the guide's
 * relationships first name them. What they share, and the rules every one of
 * them keeps (on colours the print cannot show, on red, on what is never
 * drawn and on the markers), are in ./common.tsx.
 *
 * THE WORDS COME FROM THE HELD EDITION ONLY. Every phrase and passage is
 * copied from src/data/full-texts/great-expectations.ts, the P. F. Collier
 * edition of 1890 as Wikisource transcribes it, in its own spelling and
 * punctuation ("iron-grey", "pocket-handkercher"), and the comics test checks
 * them there. Where a card prints a whole passage, every marker phrase is
 * inside it. Where the words come from more than one paragraph, the card
 * prints the phrases alone.
 */
export const PORTRAITS: Portrait[] = [
  pip,
  joeGargery,
  abelMagwitch,
  estella,
  missHavisham,
  compeyson,
  mrJaggers,
  molly,
  herbertPocket,
  biddy,
  mrsJoeGargery,
  orlick,
  bentleyDrummle,
]
