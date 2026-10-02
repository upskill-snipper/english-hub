import type { Portrait } from '@/lib/comics/types'

import { claudius } from './claudius'
import { fortinbras } from './fortinbras'
import { gertrude } from './gertrude'
import { guildenstern } from './guildenstern'
import { hamlet } from './hamlet'
import { horatio } from './horatio'
import { laertes } from './laertes'
import { ophelia } from './ophelia'
import { polonius } from './polonius'
import { rosencrantz } from './rosencrantz'
import { theGhost } from './the-ghost'

/**
 * The Hamlet portraits: every character in the guide's relationships
 * (src/data/study-guides/hamlet.ts), each as the play describes them, in
 * their own files here, with the words their numbered markers point to, in
 * the order the relationships meet them.
 *
 * An edition is held in src/data/full-texts/hamlet.ts (Project Gutenberg
 * #1524), so the comics test checks every marker phrase, and every passage,
 * against it word for word. A phrase may not run across a paragraph break,
 * which in a play means across two speeches; a portrait whose markers come
 * from more than one speech lists the phrases and prints no passage. Only
 * Hamlet's does: all four of his markers are in his answer to his mother in
 * Act 1, Scene 2.
 *
 * Shakespeare describes the Ghost closely and hardly anyone else, and most of
 * what he gives is said by someone else, often in mockery or grief: Polonius's
 * grey beard is in the satire Hamlet pretends to read, Gertrude's tears in her
 * son's bitter memory. Where the play gives no looks, the sitter is drawn
 * plainly, in the dress the figure kit (../panels/people.tsx) gives them, and
 * the card's small print says so. What they share, and the rules every one of
 * them keeps (no wound, no blade drawn, Polonius never behind the arras,
 * Ophelia never near water, red never on a mouth), is in ./common.tsx.
 */
export const PORTRAITS: Portrait[] = [
  hamlet,
  theGhost,
  claudius,
  gertrude,
  ophelia,
  polonius,
  laertes,
  horatio,
  rosencrantz,
  guildenstern,
  fortinbras,
]
