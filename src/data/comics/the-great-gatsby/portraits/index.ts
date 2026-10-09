import type { Portrait } from '@/lib/comics/types'

import { daisyBuchanan } from './daisy-buchanan'
import { georgeWilson } from './george-wilson'
import { jayGatsby } from './jay-gatsby'
import { jordanBaker } from './jordan-baker'
import { meyerWolfshiem } from './meyer-wolfshiem'
import { myrtleWilson } from './myrtle-wilson'
import { nickCarraway } from './nick-carraway'
import { tomBuchanan } from './tom-buchanan'

/**
 * The Great Gatsby portraits: each of the people in the guide's
 * relationships, as Fitzgerald describes them, in their own files here, with
 * the words their numbered markers point to, in the order the guide's
 * relationships first name them. What they share, and the rules every one of
 * them keeps (on Wolfshiem, on the women, on red and on the markers), are in
 * ./common.tsx.
 *
 * THE WORDS COME FROM THE HELD EDITION ONLY. Every phrase and passage is
 * copied from src/data/full-texts/the-great-gatsby.ts, the 1925 first edition
 * as Wikisource transcribes the Scribner printing, in its own spelling
 * ("gray", "anæmic", "crêpe-de-chine"), and the comics test checks them
 * there. Where a card prints a whole passage, every marker phrase is inside
 * it. Where the words come from more than one paragraph (Gatsby's, Wilson's,
 * Wolfshiem's), or from a paragraph that goes on to dwell on her body
 * (Myrtle's), the card prints the phrases alone.
 *
 * A CHECKOUT WITHOUT THE HELD EDITION FAILS HERE, AND SHOULD. The comics test
 * checks a text with no edition held against the guide's own quotations
 * instead, and none of these phrases is among those. The held edition has
 * been on main since 2 October 2026 (commit 26b73146); on 9 October these
 * cards were drawn in a checkout behind main that lacked it, checked against
 * the same file in other worktrees with the test's own rules, and reviewed
 * in a checkout that held it. If the test fails on a portrait's words, bring
 * the held edition into that checkout. Do not swap the words for ones the
 * guide happens to quote: that would make a card point at something
 * Fitzgerald did not write about that person.
 */
export const PORTRAITS: Portrait[] = [
  jayGatsby,
  daisyBuchanan,
  tomBuchanan,
  myrtleWilson,
  georgeWilson,
  nickCarraway,
  jordanBaker,
  meyerWolfshiem,
]
