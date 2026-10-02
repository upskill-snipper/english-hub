import type { Portrait } from '@/lib/comics/types'

import { aaronWinthrop } from './aaron-winthrop'
import { dollyWinthrop } from './dolly-winthrop'
import { dunstanCass } from './dunstan-cass'
import { eppie } from './eppie'
import { godfreyCass } from './godfrey-cass'
import { mollyFarren } from './molly-farren'
import { nancyLammeter } from './nancy-lammeter'
import { priscillaLammeter } from './priscilla-lammeter'
import { sarah } from './sarah'
import { silasMarner } from './silas-marner'
import { squireCass } from './squire-cass'
import { williamDane } from './william-dane'

/**
 * The Silas Marner portraits: each of the people in the guide's
 * relationships, as George Eliot describes them, in their own files here,
 * with the words their numbered markers point to. In the order the guide's
 * relationships name them.
 *
 * Every phrase is copied from the held edition, src/data/full-texts/
 * silas-marner.ts, and the comics test checks it there. Where a card prints
 * a whole passage, every marker phrase is inside it; where the words come
 * from too far apart to print as one passage (Sarah's, from one long
 * paragraph; Priscilla's, from three in Chapter 11), the card prints the
 * phrases alone. No passage here carries a dash from the edition: each
 * begins and ends where the house style lets it be quoted whole (Dolly's
 * begins after the dash that follows "comfortable woman").
 *
 * Eliot describes some of these people closely and some hardly at all. Where
 * the text gives no face (Sarah, and Priscilla's colouring), the sitter is
 * drawn plainly in the dress of the time and the markers point only at what
 * the text says; the card's small print says so. Molly Farren is drawn alive,
 * setting out with her child asleep in her arms: her dying is never drawn
 * (see ../index.ts).
 */
export const PORTRAITS: Portrait[] = [
  silasMarner,
  williamDane,
  sarah,
  eppie,
  godfreyCass,
  mollyFarren,
  dunstanCass,
  nancyLammeter,
  squireCass,
  dollyWinthrop,
  aaronWinthrop,
  priscillaLammeter,
]
