import type { Portrait } from '@/lib/comics/types'

import { carew } from './carew'
import { enfield } from './enfield'
import { guest } from './guest'
import { hyde } from './hyde'
import { jekyll } from './jekyll'
import { lanyon } from './lanyon'
import { poole } from './poole'
import { utterson } from './utterson'

/**
 * The Jekyll and Hyde portraits: each of the people in the guide's
 * relationships, as Stevenson describes them, in their own files here, with
 * the words their numbered markers point to. In the order the guide's
 * relationships name them.
 *
 * Every phrase is copied from the held edition, src/data/full-texts/
 * jekyll-and-hyde.ts, and the comics test checks it there. Where a card
 * prints a whole passage, every marker phrase is inside it; where the words
 * come from more than one paragraph, or from a paragraph that goes on to show
 * violence (Carew's), the card prints the phrases alone.
 */
export const PORTRAITS: Portrait[] = [jekyll, hyde, utterson, enfield, lanyon, poole, carew, guest]
