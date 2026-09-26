import type { Portrait } from '@/lib/comics/types'

import { banquo } from './banquo'
import { duncan } from './duncan'
import { ladyMacbeth } from './lady-macbeth'
import { macbeth } from './macbeth'
import { macduff } from './macduff'
import { malcolm } from './malcolm'
import { witches } from './witches'

/**
 * The Macbeth portraits: each character as the play describes them, in their
 * own files here, with the words their numbered markers point to.
 *
 * The comics test checks every marker phrase against the held edition,
 * src/data/full-texts/macbeth.ts (Project Gutenberg #1533), mark for mark.
 * Until 26 September 2026 no edition was held and the test checked them
 * against the guide's own quotations instead.
 *
 * THREE WERE HELD BACK, AND WHY (26 September 2026). The Witches, Banquo and
 * Malcolm were drawn with the play's words for them, checked against the
 * Folger text, but those words were not then among the guide's quotations, so
 * the test would rightly have refused them. The guide was given them (an Act
 * 1, Scene 3 extract, an Act 5, Scene 3 extract and the Birnam Wood scene
 * card), and with the edition held they are now checked against the play
 * itself. Banquo's second marker was a 4.1 stage direction and now points at
 * the 1.3 line instead; see banquo.tsx.
 *
 * Every marker follows Gutenberg's text, not Folger's, because Folger Digital
 * Texts are licensed for non-commercial use only. So the Witches' first marker
 * is "So wither'd", not Folger's "So withered", and Macbeth's is "O valiant
 * cousin! worthy gentleman!".
 */
export const PORTRAITS: Portrait[] = [
  macbeth,
  ladyMacbeth,
  banquo,
  duncan,
  witches,
  macduff,
  malcolm,
]
