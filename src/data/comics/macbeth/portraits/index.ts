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
 * No edition of Macbeth is held in src/data/full-texts, so the comics test
 * checks every marker phrase against the guide's own verified quotations (its
 * timeline, extracts and annotations).
 *
 * THREE WERE HELD BACK, AND WHY (26 September 2026). The Witches, Banquo and
 * Malcolm were drawn with the play's words for them, checked against the
 * Folger text, but those words were not among the guide's quotations, so the
 * test would rightly have refused them. The guide now holds them: an Act 1,
 * Scene 3 extract (the Witches and Banquo), an Act 5, Scene 3 extract ("the
 * boy Malcolm") and the Birnam Wood scene card ("Let every soldier hew him
 * down a bough"). Banquo's second marker was a 4.1 stage direction and now
 * points at the 1.3 line instead; see banquo.tsx. Rewording any of those
 * lines in src/data/study-guides/macbeth.ts will fail the comics test here.
 *
 * Those two extracts print Project Gutenberg's text, not Folger's, because
 * Folger Digital Texts are licensed for non-commercial use only (see the note
 * above the guide's extracts). So the Witches' first marker is Gutenberg's
 * "So wither'd", not Folger's "So withered".
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
