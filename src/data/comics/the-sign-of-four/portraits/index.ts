import type { Portrait } from '@/lib/comics/types'

import { abdullahKhan } from './abdullah-khan'
import { athelneyJones } from './athelney-jones'
import { captainArthurMorstan } from './captain-arthur-morstan'
import { drJohnWatson } from './dr-john-watson'
import { jonathanSmall } from './jonathan-small'
import { majorJohnSholto } from './major-john-sholto'
import { maryMorstan } from './mary-morstan'
import { mrsCecilForrester } from './mrs-cecil-forrester'
import { sherlockHolmes } from './sherlock-holmes'
import { thaddeusSholto } from './thaddeus-sholto'
import { tonga } from './tonga'
import { wiggins } from './wiggins'

/**
 * The Sign of Four portraits: the people in the guide's relationships who
 * matter to the story, as Conan Doyle describes them, each in its own file
 * here, with the words its numbered markers point to. In the order the
 * guide's relationships name them.
 *
 * Every phrase is copied from the held edition, src/data/full-texts/
 * the-sign-of-four.ts, and the comics test checks it there. Where a card
 * prints a whole passage, every marker phrase is inside it; where the words
 * come from more than one paragraph, or from a paragraph that also holds
 * violence or the narrators' racist language, the card prints the phrases
 * alone. What the dress is, and why, is set out in ./common.tsx.
 *
 * Mary Morstan appears twice: in her own portrait, and beside Mrs Cecil
 * Forrester, whose description is of her arm round Mary's waist. The second
 * is drawn from the first (MaryHead in ./mary-morstan.tsx), so she is one
 * woman in both. Where the text gives a person no face (Watson, Major Sholto,
 * Captain Morstan, Abdullah Khan, Mrs Forrester, Wiggins), they are drawn
 * plainly and the card's artNote says so; where a panel of this text drew
 * them first, the portrait follows the panel.
 *
 * BARTHOLOMEW SHOLTO HAS NO PORTRAIT, on purpose. The only description of him
 * in the novel is of his dead face, seen through the keyhole in Chapter 5,
 * and this text's rules are that he is never drawn dead. To draw him alive
 * from that description would still be to draw it. His twin, Thaddeus, whom
 * the text says he resembles, is drawn from Chapter 4.
 */
export const PORTRAITS: Portrait[] = [
  sherlockHolmes,
  drJohnWatson,
  maryMorstan,
  athelneyJones,
  jonathanSmall,
  tonga,
  majorJohnSholto,
  captainArthurMorstan,
  thaddeusSholto,
  abdullahKhan,
  mrsCecilForrester,
  wiggins,
]
