/**
 * Pride and Prejudice in linocut: the panels for its key moments and the
 * portraits of its people as Austen describes them.
 *
 * THE TEXT. Quotations on the art are copied from the held edition,
 * src/data/full-texts/pride-and-prejudice.ts: the first edition (Egerton,
 * London, 1813), as Project Gutenberg transcribes it (eBook #42671), with its
 * chapters numbered straight through, 1 to 61 (the guide's "Volume II,
 * Chapter 11" is Chapter 34 there). It prints straight quotation marks, "Mr."
 * with its full stop, and a dash as two hyphens ("Wickham.--Wilfully"): copy
 * every quotation from the held edition, in its own spelling and punctuation
 * ("chuse", "ancle"), and never from the guide or from memory.
 *
 * ITALICS. The held edition marks an italic word with underscores
 * ("not handsome enough to tempt _me_"), and the comics test matches a
 * quotation against it mark for mark, so a quotation that runs over an
 * italic word must carry the underscores, which would print on the panel.
 * Choose a line, or the part of one, that has no italic word in it. Four of
 * the guide's own quotations for moments 2 to 5 run over one, and so the
 * panels for those moments quote another line of the same scene, or the
 * part of the guide's line that stops short of the italic.
 *
 * THIS NOVEL'S OWN RULES, for every piece:
 * - Dress and setting are the 1790s to the 1810s of the novel: high-waisted
 *   gowns, tailcoats, bonnets, English country houses and assembly rooms.
 * - Nothing is drawn from the 1940, 1995 or 2005 adaptations, or any other:
 *   no wet shirt, no lake, no film faces, no actor's costume.
 * - Elizabeth's "fine eyes" are the text's own detail (Chapter 6), and are
 *   cut as the text gives them: dark.
 * - Lydia's elopement with Wickham carries no suggestion of anything sexual:
 *   show the letter, the family's alarm or the couple's return, never the two
 *   alone together.
 * - The militia officers' coats are printed in the spot colour, because the
 *   text names them ("a red coat", Chapter 7; "a scarlet coat", Chapter 13;
 *   "the cluster of red coats", Chapter 18). Wickham has no regimentals yet
 *   when he is first in Meryton ("the young man wanted only regimentals to
 *   make him completely charming", Chapter 15).
 * - Characters who are only named (the Gardiners, the Lucases) are drawn
 *   plainly, in the dress of the period.
 * A quotation never names or describes a death, a killing, or the means of
 * either.
 *
 * The people recur from chapter to chapter, so the figures cut from Austen's
 * descriptions of them are shared in ./panels/people.tsx. Draw them from
 * there, so a student meets the same Elizabeth, the same Darcy and the same
 * Mrs Bennet in every panel.
 *
 * How to add a piece, and how to preview one, are set out at the top of
 * src/data/comics/a-christmas-carol/index.ts and in the style guide,
 * src/components/comics/linocut/index.ts:
 *
 *   node scripts/preview-comics.mjs pride-and-prejudice --only <moment or name>
 *
 * Several artists draw here at once: add your own entries, and keep each
 * change to the lines that are yours.
 */

import type { ComicSet } from '@/lib/comics/types'

import { aRichYoungManTakesNetherfield } from './panels/a-rich-young-man-takes-netherfield'
import { charlotteAcceptsMrCollins } from './panels/charlotte-accepts-mr-collins'
import { darcysSecret } from './panels/darcys-secret'
import { endings } from './panels/endings'
import { ladyCatherinesVisit } from './panels/lady-catherines-visit'
import { lydiaHasGone } from './panels/lydia-has-gone'
import { mrCollinsProposes } from './panels/mr-collins-proposes'
import { pemberley } from './panels/pemberley'
import { theFirstProposal } from './panels/the-first-proposal'
import { theLetter } from './panels/the-letter'
import { theMerytonAssembly } from './panels/the-meryton-assembly'
import { theNetherfieldBall } from './panels/the-netherfield-ball'
import { theSecondProposal } from './panels/the-second-proposal'
import { wickhamsStory } from './panels/wickhams-story'
import { PORTRAITS } from './portraits'

export const comics: ComicSet = {
  slug: 'pride-and-prejudice',
  // All fourteen moments of the guide's timeline, in its order. Each panel's
  // alt text and quotation are kept with its drawing, in its own file.
  panels: [
    // Moments 1 to 5 (Chapters 1 to 20)
    aRichYoungManTakesNetherfield,
    theMerytonAssembly,
    wickhamsStory,
    theNetherfieldBall,
    mrCollinsProposes,
    // Moments 6 to 10 (Chapters 22 to 46)
    charlotteAcceptsMrCollins,
    theFirstProposal,
    theLetter,
    pemberley,
    lydiaHasGone,
    // Moments 11 to 14 (Chapters 51 to 61)
    darcysSecret,
    ladyCatherinesVisit,
    theSecondProposal,
    endings,
  ],
  // The people of the guide's relationships, each in its own file under
  // ./portraits, in the order the relationships first name them.
  portraits: PORTRAITS,
}
