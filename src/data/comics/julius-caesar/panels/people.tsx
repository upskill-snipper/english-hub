import type { ReactNode } from 'react'

import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { deg, gouge, n } from '@/components/comics/linocut/carve'

import {
  CutFigure,
  gown,
  hand,
  limb,
  warningHand,
  type P,
  type Part,
  type Piece,
} from '../../romeo-and-juliet/panels/verona-kit'
import {
  EYE,
  EYE_DOWN,
  FULL_BEARD,
  FULL_BEARD_STRANDS,
  HEAD_MAN,
  HEAD_WOMAN,
  WHITE_BROW,
  pointingHand,
} from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { HEAD_YOUTH, endAngle, mitt } from '../../much-ado-about-nothing/panels/people'

export {
  CutFigure,
  hand,
  limb,
  mitt,
  endAngle,
  pointingHand,
  warningHand,
  EYE,
  EYE_DOWN,
  HEAD_MAN,
  type P,
  type Part,
  type Piece,
}

/**
 * THE PEOPLE OF ROME: one figure kit for every Julius Caesar panel, so that a
 * student meets the same Caesar, the same Brutus and the same Cassius from the
 * Lupercal to Philippi. Draw every recurring character with `Person`, never
 * with a new outline. A change here changes every panel that uses it: preview
 * them all before changing one. Cut first for the panels of moments 1 to 5
 * (Act 1, Scene 1 to Act 2, Scene 1). An artist who needs a person not here
 * (Octavius, Lepidus, Cinna the poet, Titinius, Pindarus, the Ghost) adds a
 * `Look` for them below, in the same way, and says so in this docblock.
 *
 * The cutting tools (CutFigure, the open hand with its fingers apart, the
 * warning finger, the pointing hand, the gown) are the Romeo and Juliet kit's
 * (../../romeo-and-juliet/panels/verona-kit.tsx and acts-3-4-kit.tsx), and
 * the hand at rest the Much Ado kit's, re-exported, not copied, so one hand
 * cuts every Shakespeare play on the site. The men's heads are that kit's
 * HEAD_MAN, as in every Shakespeare kit, told apart by hair, beard and
 * wreath. A figure is cut as the reference panel cuts Fred
 * (src/data/comics/a-christmas-carol/counting-house.tsx): a paper halo round
 * every part, then the parts in ink, then the paper cuts of folds and
 * features. `Person` builds it from a pose in its own frame: facing right,
 * feet at (0, 0), a man about 182 units tall, the head centred on (3, -160).
 * Place it with `at`, `scale` and `flip` (to face left). With `stone`, the
 * same figure is cut in paper with ink folds: a statue, one of "Caesar's
 * images" (1.1), and it is Caesar's own figure in stone (`CaesarImage`).
 *
 * ── THIS PLAY'S OWN RULES, which every panel keeps ─────────────────────────
 * - The assassination (3.1) is suggested, never shown: no dagger in or
 *   touching Caesar, no wound, no blood, and never red hands or a bloodied
 *   body for "let us bathe our hands in Caesar's blood". Draw the
 *   conspirators closing round him, the faces, the mantle, or the empty
 *   Capitol after.
 * - Cinna the poet's death, Portia's death, and the deaths of Cassius and
 *   Brutus happen off the page: the mob turning, the letter, the battlefield,
 *   the faces of those who find them, never a body or a blade at the moment.
 * - Portia's "voluntary wound Here, in the thigh" (2.1) is left to the words:
 *   never drawn, bandaged or pointed at.
 * - Caesar's ghost is a pale figure at the tent, never gory: cut it with
 *   `stone`, as the statue is, and nothing more.
 * - The citizens are ordinary Romans, working men and women in their holiday
 *   clothes, cut with the same care as the senators: no caricature.
 * - RED is never put on a mouth, a chin or a hand: on this site it was twice
 *   read as blood. A flush goes on the cheek (FLUSH).
 *
 * ── WHAT THE PLAY SAYS OF THEM, and so what is drawn ────────────────────────
 * (the held edition, src/data/full-texts/julius-caesar.ts, Project Gutenberg
 * #1522). Shakespeare describes few of them. Where he is silent a person is
 * drawn plainly, in the dress of Rome in 44 BC: the toga for a senator or a
 * tribune in public, a tunic at home and for working men, sandals. Where a
 * mark is invented only to tell two men apart, this says so. Nothing is
 * taken from a film, television or stage production.
 *
 * - CAESAR. Nothing describes his face; he is the oldest of the great men and
 *   ailing ("He had a fever when he was in Spain", "he hath the
 *   falling-sickness", "this ear is deaf", 1.2), so his face is lined
 *   (CAESAR_LINES). He comes home "in triumph over Pompey's blood" (1.1), and
 *   a general in triumph wore a wreath of victory, the "wreath of victory"
 *   Titinius brings Cassius in 5.3; so he wears a laurel wreath, cut in paper
 *   (LAUREL), which is also how he is known in every panel. It is never
 *   printed in red: red on a head reads as a wound.
 * - BRUTUS. "Poor Brutus, with himself at war" (1.2); "the charactery of my
 *   sad brows" (2.1); "Musing and sighing, with your arms across" (2.1). So
 *   his brows are drawn up towards the nose and his forehead creased
 *   (BRUTUS_BROW), and `folded` gives him his arms across. His thick dark hair
 *   is combed forward, in the Roman way (ROMAN_HAIR). Clean-shaven.
 * - CASSIUS. "Yond Cassius has a lean and hungry look"; "that spare Cassius";
 *   "Would he were fatter!"; "Seldom he smiles" (1.2). So his head is narrow
 *   and long-jawed with a hollow cheek and a hard brow (HEAD_CASSIUS,
 *   CASSIUS_CUTS), his hair receding, his neck and body thin (`slim`). He
 *   never smiles in a panel.
 * - CASCA. "What a blunt fellow is this grown to be!" (1.2), "his sour
 *   fashion" (1.2). Not otherwise described: a short dark beard, invented
 *   only to tell him from the other conspirators (HEAD_CASCA).
 * - ANTONY. Younger and an athlete: he runs the course at the Lupercal
 *   ("Antony, for the course", 1.2), and is "given To sports, to wildness,
 *   and much company" (2.1). So a youth's head with thick curling hair
 *   (ANTONY_HAIR), and for the course a short belted tunic (dress
 *   'runner'), arms and legs bare.
 * - CALPURNIA, Caesar's wife. Not described beyond "Calphurnia's cheek is
 *   pale" (1.2). A Roman matron in a long stola, her palla drawn over her
 *   head (PALLA).
 * - PORTIA, "Cato's daughter" (2.1). Not described: a stola, her hair bound
 *   at the nape (PORTIA_KNOT), no palla at home.
 * - THE SOOTHSAYER is a voice "in the press", "a tongue shriller than all the
 *   music" (1.2), and nothing more. Drawn plainly as an old man of the crowd:
 *   white hair and a long white beard, bareheaded, in a plain long robe.
 * - FLAVIUS and MARULLUS, the tribunes, are not described. Togas; Marullus,
 *   who speaks the longest rebuke, frowns; Flavius is the older, with grey
 *   hair, invented only to tell them apart.
 * - THE CITIZENS: a carpenter without his "leather apron" and "rule", a
 *   cobbler who lives "with the awl", in their "best apparel" (1.1). Knee
 *   tunics and sandals; some wear the felt caps they "threw up" when Caesar
 *   refused the crown, "their sweaty night-caps" (1.2), cut as CAP.
 * - LUCIUS, Brutus's servant, is a "boy" (2.1) who sleeps soundly: a boy in a
 *   short tunic, a head shorter than the men.
 * - THE CONSPIRATORS AT NIGHT: "their hats are pluck'd about their ears, And
 *   half their faces buried in their cloaks" (2.1). So `look: 'conspirator'`
 *   is a broad-brimmed hat pulled down to the eye (PETASUS) and a cloak drawn
 *   up over the nose (MUFFLE), only the eye showing between.
 *
 * Added for the panels of moments 11 to 15 (Act 4, Scene 1 to Act 5, Scene 5):
 * - OCTAVIUS: "young Octavius" (4.3), "Young man" and "A peevish school-boy"
 *   (5.1). So a youth's head, beardless, his hair cropped and combed forward
 *   (ROMAN_HAIR), never Antony's curls, and a little smaller than the men.
 * - LEPIDUS: "a slight unmeritable man", "A barren-spirited fellow" (4.1),
 *   and nothing of his face. Slight in the body (`slim`), and balding, the
 *   light on his bare crown and his hair left at the side (LEPIDUS_HAIR):
 *   invented only to tell him from Antony and Octavius at their table.
 * - PINDARUS, Cassius's "bondman", taken "prisoner" in Parthia (5.3). Not
 *   described: a plain man in a plain belted tunic, bareheaded. Nothing marks
 *   him as foreign, because the play draws nothing of the kind.
 * - AT PHILIPPI everyone is dressed for battle (dress 'armour'): a cuirass,
 *   its rim, the line of the chest and the edge of the shoulder guard cut in
 *   paper, over a skirt of leather strips to mid-thigh, then bare legs and
 *   sandals. The play describes none of it, so it is the plain dress of a
 *   Roman soldier. The generals (Brutus, Cassius, Antony, Octavius) go
 *   bareheaded, so each is known by his own head, with a general's cloak
 *   hanging from the shoulders (HOUSE_MANTLE). STRATO, "my master's man"
 *   (5.5), is bareheaded with no cloak; a SOLDIER wears a helmet with a
 *   crest (HELMET), which is all that tells him from Strato. No sword is
 *   drawn on anyone in Act 5: two of the play's deaths there are by the
 *   sword, and none is shown.
 * - THE GHOST OF CAESAR (4.3) is Caesar's own figure cut with `stone`, in his
 *   toga and wreath, and nothing more.
 *
 * Added for the panels of moments 6 to 10 (Act 2, Scene 2 to Act 3, Scene 3):
 * - DECIUS, who boasts "I can o'ersway him" (2.1) and does, in 2.2. Not
 *   described: a toga, and his hair worn longer and swept back to a lock at
 *   the nape (DECIUS_LOCK, DECIUS_HAIR), invented only to tell him from the
 *   other conspirators in the two panels that show his face.
 * - A SENATOR (`look: 'senator'`): a plain man of the Senate in a toga, his
 *   hair cropped (ROMAN_HAIR), for the men the play names and does not
 *   describe: Metellus Cimber, Cinna the conspirator, the Senators on their
 *   benches. Cut with `stone`, he is also Pompey's statue in the Capitol,
 *   "the base of Pompey's statue" (3.2), which the play does not describe.
 * - CINNA THE POET (3.3) is not described, and is not Cinna the conspirator:
 *   "I am not Cinna the conspirator". A toga, for "I am going to Caesar's
 *   funeral", which sets him apart from the working men in tunics who stop
 *   him, and a fringe of hair over the brow (CINNA_FRINGE), invented only to
 *   tell him from the senators. Nothing marks him as a poet, because the
 *   play draws nothing of the kind.
 *
 * HANDS. Every open hand is `hand`'s, four fingers and a thumb cut apart and
 * fanned 18 degrees, so it reads as an open hand at panel size and never as a
 * fist; a pointing hand has one long finger and the rest curled; a raised
 * finger is the warning finger; a hand at rest is a small closed mitten; a
 * hand round a sword hilt or a letter is `grip`, which only ever closes round
 * something held. NO HAND IS RAISED FLAT ON A STRAIGHT ARM, least of all in
 * this play: at panel size that reads as a salute, and in Roman dress as the
 * one salute no page of this site may show. A statue of Caesar holds its arms
 * down.
 */

const pt = (p: P) => `${n(p[0])} ${n(p[1])}`

// ── Heads, hair and wreaths, in profile facing right, centred on (0, 0) ─────

/**
 * Hair cropped short and combed forward, in the Roman way: the hairline cut
 * from the brow round in front of the ear to the nape, the ear, two strands
 * combed forward over the crown and a short fringe at the brow. Stroke in
 * PAPER, about 1.2. (The hairline is what makes strands read as hair: the
 * Merchant kit found that strands alone read as a cloth wound round the head.)
 */
export const ROMAN_HAIR =
  'M13.4 -12.6C6.4 -11.6 1.6 -8.4 -0.2 -3C-1.2 1.2 -2.6 4.6 -5.8 7.4' +
  'M-1.4 -3.2C-4.4 -3.8 -5.8 0 -4 3.2C-3 4.6 -1.4 4.2 -1 2.8' +
  'M-13.6 -6C-9.6 -14 -2 -18.4 9 -16.4M-12.8 1C-9.6 -7.4 -3.4 -12.4 4.4 -13.2'

/**
 * An old man's hair: the crown bald, with a short glint of light on it
 * (CROWN_SHINE), and white hair left in a fringe at the level of the ear from
 * the temple round the back of the head, tufted along its lower edge, set in
 * from the head's outline. Paper, with ink strands (OLD_FRINGE_STRANDS). Cut
 * as the Tempest kit cuts Prospero's, for the same reason: a smooth white
 * band round the back of a bare head read at panel size as a hood or a
 * headscarf (the Romeo and Juliet kit's OLD_HAIR was tried first, on
 * Flavius, and did exactly that).
 */
export const OLD_FRINGE =
  'M5.6 -6.4C0 -6.8 -6 -7.6 -12.6 -8.4C-14.8 -4.6 -15 0.6 -14.2 5.6C-13.6 8.6 -12.6 11 -11 13.2L-9.6 10.6L-8 13L-7 9.4L-5.4 10.4L-5.2 6.6L-3 6.4L-3 3.2L-0.6 2.6L0.2 -0.4L2.6 -0.8L3.4 -3.4L5.6 -3.2Z'
export const OLD_FRINGE_STRANDS =
  'M-12.2 -4.4C-12.6 0 -12.2 5 -10.6 9.6M-8.6 -6C-9.4 -2 -9.2 2 -8.2 6.4M-4.4 -6.2C-5.2 -3.6 -5.2 -0.6 -4.6 2.6'

/** Cassius's hair, cropped and receding from the temple: the hairline set back. */
export const RECEDING_HAIR =
  'M7.6 -15.6C3.4 -12.6 0.8 -8.6 -0.4 -3.4C-1.4 1 -2.6 4.6 -5.8 7.4' +
  'M-1.4 -3.2C-4.4 -3.8 -5.8 0 -4 3.2C-3 4.6 -1.4 4.2 -1 2.8' +
  'M-13.4 -5C-10 -12.4 -3.6 -16.6 4.6 -16.8'

/**
 * Cassius: "a lean and hungry look". The man's head made narrow at the back
 * and long in the jaw, the neck thin. CASSIUS_CUTS, in paper: a hollow under
 * the cheekbone, a hard straight brow, and the line from the nose to a mouth
 * that does not smile.
 */
export const HEAD_CASSIUS =
  'M-7.4 25C-8.6 18.6 -13 13.4 -14.2 4.4C-15.4 -10 -7 -21 3 -21C11 -21 15.6 -15 15.6 -9L15.6 -5.6L22.6 4.4L16.6 6.4L17 9.4L15.6 11L16.8 14.2C16.6 19 13.6 21.6 8.4 21.8L5.4 25Z'
export const CASSIUS_CUTS =
  gouge(2.4, 2.4, 6, 16.4, 0.9, 1.7) +
  gouge(5.2, -8.2, 15, -7.2, 1.15, 0.1) +
  gouge(15.8, 6.6, 12.4, 13.2, 0.5, -0.4) +
  gouge(11.2, 15.6, 15.4, 14.6, 0.45)

/**
 * Brutus's "sad brows": the brow drawn up towards the nose, not down as in
 * anger, and two creases across the forehead above it. Fill with PAPER.
 */
export const BRUTUS_BROW =
  gouge(4.8, -7.2, 15, -10.4, 1.15, -0.2) +
  gouge(8.4, -14, 14.2, -14.8, 0.55, 0.2) +
  gouge(9.6, -16.6, 13.6, -17.2, 0.5, 0.2)
/** Brutus's hair: as ROMAN_HAIR, the hairline set a little higher to leave the creased forehead. */
export const BRUTUS_HAIR =
  'M11.4 -17.6C5 -14.6 1.2 -9.6 -0.2 -3.6C-1.2 1 -2.6 4.6 -5.8 7.4' +
  'M-1.4 -3.2C-4.4 -3.8 -5.8 0 -4 3.2C-3 4.6 -1.4 4.2 -1 2.8' +
  'M-13.6 -6C-9.6 -14 -3 -18.6 7 -19.2M-12.8 1C-9.6 -7.4 -3.4 -12.6 3.6 -14.6' +
  'M11.4 -17.6L12.8 -15M8 -17.4L9 -14.8'

/** Caesar's age: the line from nose to mouth, a hollow cheek and a crease at the eye. Fill with PAPER. */
export const CAESAR_LINES =
  gouge(15.4, 6, 11.6, 12.4, 0.55, -0.5) +
  gouge(3, 2, 6.4, 11, 0.65, 1.3) +
  gouge(5.4, -2.6, 1.6, -0.6, 0.45, 0.3)

/**
 * The laurel wreath: two rows of leaves along a band from the brow round over
 * the temple to the back of the head, pointing back, the upper row turned up
 * and the lower row down. Paper with an ink edge (stroke 0.7). Large enough
 * that at phone width it still reads as a wreath and not a headband.
 */
export const LAUREL = (() => {
  // the band's spine: a quadratic from the brow to the back of the head
  const a: P = [13.6, -12.6]
  const c: P = [1, -17.6]
  const b: P = [-15.6, -5]
  const at = (t: number): P => [
    (1 - t) * (1 - t) * a[0] + 2 * (1 - t) * t * c[0] + t * t * b[0],
    (1 - t) * (1 - t) * a[1] + 2 * (1 - t) * t * c[1] + t * t * b[1],
  ]
  let d = ''
  const leaves = 7
  for (let i = 0; i < leaves; i++) {
    const t = 0.04 + (i / (leaves - 1)) * 0.86
    const p = at(t)
    const q = at(Math.min(1, t + 0.02))
    // backward along the band
    const back = Math.atan2(q[1] - p[1], q[0] - p[0])
    for (const side of [-1, 1]) {
      const ang = back + side * deg(34)
      const len = 8.2
      d += gouge(p[0], p[1], p[0] + Math.cos(ang) * len, p[1] + Math.sin(ang) * len, 2, side * 0.6)
    }
  }
  return d
})()

/**
 * Casca's head: the man's head with a short dark beard along the jaw to a
 * blunt end under the chin, invented to tell him from the others. Ink on an
 * ink head, so its strands and the line of the mouth are cut in paper
 * (CASCA_BEARD_CUTS): a dark beard left uncut reads only as a longer chin.
 */
export const HEAD_CASCA =
  'M-9 22C-10 16 -15 12 -16 3C-17 -10 -8 -20 3 -20C11 -20 16 -14 16 -8L16 -5L22.5 3.5L17 5.5L18.6 8.4L17.2 10.2C19.6 13 20.2 18.6 17.8 22.6C15.2 25.8 10.6 26 6.8 23.6L6 22Z'
export const CASCA_BEARD_CUTS =
  gouge(12.2, 10.8, 17.6, 9.8, 0.7) +
  gouge(-1.4, 2, 4.6, 15.6, 0.8, -1.2) +
  gouge(4.6, 9.6, 9, 22.4, 0.85, -0.6) +
  gouge(10, 14, 12.8, 23.4, 0.8, -0.3) +
  gouge(14.6, 14, 16.4, 21.6, 0.7, -0.2)

/** A scalloped mass of hair round a head, from `a0` to `a1` degrees about (cx, cy). */
function curls(
  cx: number,
  cy: number,
  r: number,
  a0: number,
  a1: number,
  bumps: number,
  out: number,
) {
  const at = (a: number, rad: number): P => [
    cx + rad * Math.cos((a * Math.PI) / 180),
    cy + rad * Math.sin((a * Math.PI) / 180),
  ]
  const step = (a1 - a0) / bumps
  let p = at(a0, r)
  let d = `M${pt(p)}`
  for (let i = 0; i < bumps; i++) {
    const c = at(a0 + step * (i + 0.5), r + out)
    p = at(a0 + step * (i + 1), r)
    d += `Q${pt(c)} ${pt(p)}`
  }
  const inner = at(a1, r - 7)
  const inner0 = at(a0, r - 7)
  d += `L${pt(inner)}A${n(r - 7)} ${n(r - 7)} 0 0 1 ${pt(inner0)}Z`
  return d
}

/**
 * Antony's hair: thick and curling, over the crown from the brow to the nape,
 * in ink, with the curls cut in paper (ANTONY_CURLS). For HEAD_YOUTH.
 */
export const ANTONY_HAIR =
  curls(0.5, -1.5, 19.4, 112, 304, 10, 5) + 'M8.6 -18.4C13.6 -17.4 16.4 -13.4 15.4 -8.6L11.8 -11.2Z'
export const ANTONY_CURLS =
  'M-14.6 -12.4a2.6 2.6 0 1 1 3.4 2.6M-6.6 -19a2.6 2.6 0 1 1 3.4 2.6M2.6 -21a2.6 2.6 0 1 1 3.4 2.4' +
  'M-19.6 -3.6a2.6 2.6 0 1 1 3.2 2.8M-18.4 6.4a2.6 2.6 0 1 1 3 3M-10.6 -6.4a2.4 2.4 0 1 1 3.2 2.2' +
  'M10 -17a2.4 2.4 0 1 1 3 2.6'

/**
 * A felt cap, as working men wore: the "sweaty night-caps" the crowd threw up
 * (1.2). Tall and soft, rising to a rounded point above the crown, so its
 * outline is not the head's; its rolled brim and a fold are cut in paper
 * (CAP_CUT). (A close round cap was tried first, and at panel size its band
 * read as a headband on a bare head.)
 */
export const CAP =
  'M-16.6 -7.4C-18.8 -17 -14.4 -27.6 -5 -32.6C1.6 -36 9.6 -32.6 13.4 -25C15.8 -20 16.8 -15.4 17 -10.4C7.4 -12 -5 -11 -16.6 -7.4Z'
export const CAP_CUT =
  gouge(-16, -11, 16.6, -13.4, 1.15, -0.4) + gouge(-3, -30, -9, -15.4, 0.6, 1.2)

/** A grin: the mouth's line turned up at the corner, cut in paper (the cobbler, "a saucy fellow"). */
export const GRIN = 'M11.4 10.4Q13.8 13.8 17.6 10.6'

/** A bald crown's light, so the bare head reads as bare and not as a cap. */
export const CROWN_SHINE = gouge(-4, -17.4, 8, -15.4, 1, -1.3)

/**
 * The palla: a matron's mantle drawn over the head from the brow, falling
 * behind the neck to the shoulders and down the back. In ink on the ink head,
 * so its edge round the face is cut in paper (PALLA_EDGE), or it would read
 * as hair.
 */
export const PALLA =
  'M14.6 -11.6C10.6 -22.6 -4 -25.4 -13.4 -19.2C-20.6 -13.6 -22.8 -2 -22 10C-21.4 20 -24 32 -30 44L-11 46C-8 36 -5.4 27 -4.6 18C-3.6 6 0.4 -4 6.4 -8.6C9 -10.6 11.8 -11.6 14.6 -11.6Z'
export const PALLA_EDGE = 'M14.6 -12.2C8.2 -10.2 2.8 -4.6 0.8 2.4C-0.8 8.6 -2.2 14.4 -4.6 19.4'

/** Portia's hair, bound in a knot at the nape, its strands cut in paper. For HEAD_WOMAN. */
export const PORTIA_HAIR =
  'M13.4 -11.4C9.6 -20.4 -4.4 -22.4 -12.2 -16C-17.4 -11 -18.4 -3 -16.6 4.6C-20.6 5.4 -22.6 10 -20.4 13.6C-18 17 -13 16.4 -11.4 12.6C-9.8 8.6 -8.6 3 -6.4 -1.6C-3.6 -6.8 2.6 -10 13.4 -11.4Z'
export const PORTIA_STRANDS =
  gouge(8, -15.6, -11, -6, 0.75, 2.4) + gouge(2, -18.4, -15, -0.6, 0.75, 2.6)

/**
 * The broad-brimmed hat of a traveller at night, pulled down to the eye:
 * "their hats are pluck'd about their ears" (2.1). Its brim's edge and band
 * are cut in paper (PETASUS_CUT).
 */
export const PETASUS =
  'M-25 -5.4C-15 -10 10 -11.4 27 -7.8L26 -4.6C19 -5.8 15 -6.4 13.4 -7.6C13.6 -15.6 9.4 -21.6 1 -22C-7.4 -22.4 -12.8 -16.8 -13.8 -9C-17.6 -8.2 -21.4 -7 -25 -5.4Z'
export const PETASUS_CUT =
  gouge(-23.6, -5.8, 25.6, -6.4, 0.85, -0.7) + gouge(-13, -10, 13, -10.4, 0.7, -0.6)

/**
 * "Half their faces buried in their cloaks" (2.1): the cloak drawn up over the
 * nose and mouth to just below the eye, so the profile is the cloth's, not the
 * face's. Its top edge is cut in paper (MUFFLE_EDGE), and a fold (MUFFLE_FOLD).
 */
export const MUFFLE =
  'M24.6 0.6C25 8 23 15.6 18.8 21.4C14 26.6 5 27.6 -3 26L-13 27C-14.6 19 -16.4 11 -17.2 4.4L-14.4 -0.6C-6 2.4 6 2.4 14 -0.2C18.4 -1.6 21.6 -1.2 24.6 0.6Z'
export const MUFFLE_EDGE = 'M24.4 0.4C20.4 -1.6 16.4 -1.6 12.4 -0.2C6.4 1.8 -2 1.6 -10.4 -0.6'
export const MUFFLE_FOLD = gouge(20, 6, 12, 22, 0.8, 1.6) + gouge(10, 6, 2, 22, 0.75, 1.2)

/** Anger: the brow drawn down towards the nose, cut in paper. */
export const FROWN = gouge(5.4, -9.6, 15.8, -5.4, 1.3, -0.3)
/**
 * A flush of feeling: one short stroke on the cheek, below the eye and back
 * from the nose, never on the mouth or chin. Stroke in RED, about 1.7.
 */
export const FLUSH = 'M5 4.6L9.2 5.6'
/** An open mouth, calling out: a paper notch between the lips. */
export const OPEN_MOUTH = 'M17.2 8.2L13.2 8.8L16.6 10.2Z'

// ── Garments, in the figure's frame (facing right, feet at y 0) ─────────────

/**
 * The toga: a long draped garment from the shoulders to the ankles, fuller at
 * the back. `front` and `back` are how far the hem reaches ahead of the body
 * and behind it (wider in a stride); `slim` narrows it (Cassius).
 */
export function toga(front = 24, back = 30, slim = 1): string {
  const s = (x: number) => n(x * slim)
  return (
    `M${s(-6)} -147C${s(-14)} -146 ${s(-19)} -141 ${s(-20)} -130C${s(-21)} -116 ${s(-20)} -102 ${s(-19)} -92` +
    `C${s(-21)} -66 ${n(-back + 4)} -30 ${n(-back)} -4Q${n((front - back) / 2)} 0 ${n(front)} -4` +
    `C${n(front - 4)} -30 ${s(18)} -62 ${s(16)} -90C${s(18)} -106 ${s(18)} -122 ${s(16)} -134C${s(14)} -142 ${s(10)} -147 ${s(5)} -148Z`
  )
}
/**
 * Its folds, cut in paper: the roll of cloth from the far shoulder across the
 * chest to the hip, the loop of the sinus across the thigh, the long folds of
 * the skirt, and the end hanging down the back from the far shoulder. Cut at
 * 1.4 to 1.9: finer is lost under the paper grain at panel size.
 */
export function togaCuts(front = 24, back = 30, slim = 1): string {
  const s = (x: number) => x * slim
  return (
    gouge(s(-15), -136, s(15), -100, 1.9, 3.2) +
    gouge(s(-19), -117, s(14), -84, 1.6, 3.4) +
    gouge(s(-18), -82, s(13), -58, 1.5, 4.6) +
    gouge(s(-10), -76, -back * 0.62, -8, 1.6, 1.2) +
    gouge(s(1), -56, (front - back) * 0.12, -8, 1.5, 0.4) +
    gouge(s(10), -62, front * 0.6, -8, 1.4, -0.8) +
    gouge(s(-18), -128, -back * 0.84, -36, 1.2, 0.8)
  )
}

/** A tunic, belted, to the knee (`hem` -46) or, for a runner, to mid-thigh (-62). */
export function tunic(hem = -46, slim = 1): string {
  const s = (x: number) => n(x * slim)
  return (
    `M${s(-6)} -147C${s(-13)} -146 ${s(-17)} -141 ${s(-18)} -131C${s(-19)} -116 ${s(-17)} -102 ${s(-16)} -91` +
    `C${s(-18)} -78 ${s(-21)} ${n(hem - 14)} ${s(-22)} ${n(hem)}L${s(20)} ${n(hem)}` +
    `C${s(19)} ${n(hem - 14)} ${s(16)} -78 ${s(15)} -91C${s(17)} -106 ${s(17)} -122 ${s(16)} -133C${s(14)} -142 ${s(10)} -147 ${s(5)} -148Z`
  )
}
/** The tunic's belt, the neck of it, and two folds of the skirt, in paper. */
export function tunicCuts(hem = -46, slim = 1, belted = true): string {
  const s = (x: number) => x * slim
  return (
    (belted ? gouge(s(-16.4), -91, s(15.6), -90, 1.6, 0.6) : '') +
    gouge(s(-3), -145.6, s(7), -146.4, 0.9, 1.4) +
    gouge(s(-6), -86, s(-14), hem + 4, 1.4, 0.8) +
    gouge(s(6), -86, s(10), hem + 4, 1.4, -0.4)
  )
}

/**
 * A cloak closed about the body from the shoulders to the shin, the arms
 * inside it: the conspirators' at night. Its folds and front edge in paper.
 */
export const CLOAK =
  'M-8 -147C-18 -145 -24 -134 -26 -118C-28 -96 -30 -64 -32 -34L23 -34C21.6 -64 20.4 -96 19.4 -116C18.4 -132 14 -145 6 -149Z'
export const CLOAK_CUTS =
  gouge(-15, -122, -24, -40, 1.7, 1) +
  gouge(-3, -112, -7, -40, 1.6, 0.4) +
  gouge(9, -122, 14, -40, 1.5, -0.6) +
  gouge(15.4, -140, 18.6, -38, 0.9, -0.6)

/**
 * A long plain robe to the ankle, girt with a cord (the Soothsayer), or
 * ungirt with a mantle hanging open from the shoulders (`unbraced`: Brutus
 * risen from his bed, 2.1, "to walk unbraced").
 */
export function robe(front = 20, back = 26): string {
  return (
    `M-6 -147C-13 -146 -18 -141 -19 -130C-20 -116 -19 -102 -18 -92` +
    `C-20 -66 ${n(-back + 4)} -30 ${n(-back)} -6L${n(front)} -6` +
    `C${n(front - 3)} -30 17 -62 15 -90C17 -106 17 -122 16 -134C14 -142 10 -147 5 -148Z`
  )
}
export function robeCuts(front = 20, back = 26, girt = true): string {
  return (
    (girt ? gouge(-17, -92, 15, -91, 1.3, 0.6) + gouge(10, -90, 12, -62, 1.1, -0.4) : '') +
    gouge(-6, -84, -back * 0.66, -10, 1.6, 1) +
    gouge(5, -84, front * 0.5, -10, 1.6, -0.4)
  )
}
/** The loose mantle of a man at home, hanging open from the shoulders behind him to the calf. */
export const HOUSE_MANTLE =
  'M2 -146C-12 -144 -22 -130 -25 -108C-28 -84 -30 -58 -32 -28L-14 -24C-14 -60 -12 -96 -4 -128C-2 -136 0 -142 2 -146Z'
export const HOUSE_MANTLE_CUTS =
  gouge(-14, -126, -26, -34, 1.6, 1.2) + gouge(-7, -118, -18, -32, 1.4, 0.8)

/** A sandal on the ground at (x, y), toe towards `facing`: the sole and the foot. */
export function sandal([x, y]: P, f: 1 | -1): Part {
  return {
    d: `M${n(x - f * 5)} ${n(y - 7)}L${n(x + f * 4)} ${n(y - 6)}C${n(x + f * 9)} ${n(y - 5)} ${n(x + f * 12)} ${n(y - 2.6)} ${n(x + f * 13)} ${n(y + 0.6)}L${n(x - f * 6.4)} ${n(y + 1)}Z`,
  }
}
/** Its straps, across the instep and round the ankle, and the line of the sole, in paper. */
export function sandalCuts([x, y]: P, f: 1 | -1): string {
  return (
    gouge(x - f * 1, y - 6.4, x + f * 4.6, y - 2.4, 0.75, 0) +
    gouge(x - f * 5.4, y - 7.6, x + f * 1.4, y - 7.8, 0.7, 0) +
    gouge(x - f * 6, y - 0.6, x + f * 12, y - 0.4, 0.55, 0)
  )
}

/**
 * The gladius, the Roman short sword: a broad straight blade with a long
 * point, a small guard, the grip and a round pommel, from the hand at `grip`
 * along `angle` (degrees clockwise from the right). Paper with an ink edge.
 */
export function gladius(grip: P, angle: number, len = 50): string {
  const a = deg(angle)
  const u: P = [Math.cos(a), Math.sin(a)]
  const v: P = [-u[1], u[0]]
  const at = (x: number, y: number): P => [
    grip[0] + u[0] * x + v[0] * y,
    grip[1] + u[1] * x + v[1] * y,
  ]
  const blade = `M${pt(at(6, -2.4))}L${pt(at(len - 8, -2.2))}L${pt(at(len, 0))}L${pt(at(len - 8, 2.2))}L${pt(at(6, 2.4))}Z`
  const guard = `M${pt(at(3.6, -5))}L${pt(at(6.2, -5))}L${pt(at(6.2, 5))}L${pt(at(3.6, 5))}Z`
  const c = at(-7.4, 0)
  const pommel = `M${n(c[0] - 3)} ${n(c[1])}a3 3 0 1 0 6 0a3 3 0 1 0 -6 0Z`
  return blade + guard + pommel
}

/** A hand closed round something held (a hilt, a letter, a staff) at `wrist`: never drawn empty. */
export function gripHand(wrist: P, angle: number, size = 1): Part {
  const a = deg(angle)
  const u: P = [Math.cos(a), Math.sin(a)]
  const v: P = [-u[1], u[0]]
  const at = (x: number, y: number): P => [
    wrist[0] + (u[0] * x + v[0] * y) * size,
    wrist[1] + (u[1] * x + v[1] * y) * size,
  ]
  return {
    d: `M${pt(at(-1, -4))}L${pt(at(5, -5.4))}Q${pt(at(10.6, -4.6))} ${pt(at(10.6, 0))}Q${pt(at(10.6, 4.6))} ${pt(at(5, 5.4))}L${pt(at(-1, 4))}Z`,
  }
}

// ── Act 4 and Act 5: Lepidus's head, and the dress of Philippi ──────────────

/**
 * Lepidus, balding: the hairline at the side from the temple back over the
 * ear to the nape, the ear, and two strands below it. Stroke in PAPER, about
 * 1.2, with CROWN_SHINE on the bare crown above.
 */
export const LEPIDUS_HAIR =
  'M7.4 -9.6C2.4 -9.4 -4.4 -9.4 -10.4 -8.2C-13.6 -7.4 -15.4 -5 -15.8 -2' +
  'M-1.4 -3.2C-4.4 -3.8 -5.8 0 -4 3.2C-3 4.6 -1.4 4.2 -1 2.8' +
  'M-9.4 -6.6C-10.6 -2 -10.4 2 -8.6 6M-13.4 -4C-14.2 0 -13.8 4 -12.4 7.6'

/**
 * Decius's hair, worn longer and swept back: a lock at the nape, in ink with
 * the head (DECIUS_LOCK), and in paper the hairline, the ear and two strands
 * swept from the brow back to it (DECIUS_HAIR). Invented to tell him apart.
 */
export const DECIUS_LOCK = 'M-15.4 -3C-18.8 4 -18.6 12 -15 19L-8.4 21C-11.2 13.6 -11.4 6 -9.6 -0.6Z'
export const DECIUS_HAIR =
  'M13.4 -12.6C6.4 -11.6 1.6 -8.4 -0.2 -3C-1.2 1.2 -2.6 4.6 -5.8 7.4' +
  'M-1.4 -3.2C-4.4 -3.8 -5.8 0 -4 3.2C-3 4.6 -1.4 4.2 -1 2.8' +
  'M10.6 -16.6C2 -18.6 -8 -15 -14.4 -4.4M8.4 -12.8C0.8 -14 -6.8 -10.4 -11.4 -1.4M-14.6 4C-14.4 9 -13.2 13 -11.4 17'

/**
 * Cinna the poet's fringe: hair combed down over the brow, a little proud of
 * it, in ink with the head (CINNA_FRINGE), its strands, the hairline and the
 * ear cut in paper (CINNA_HAIR). Invented to tell him apart.
 */
export const CINNA_FRINGE =
  'M16.8 -9.2C17.6 -15 14 -20.4 6.6 -21.6C-1.4 -22.8 -9.6 -19.6 -14.4 -12.4L-12 -10.6C-6 -14.6 2.4 -16 11.6 -13.4C13.8 -12.2 15.2 -10.8 16.8 -9.2Z'
export const CINNA_HAIR =
  'M13.4 -10.4L11.4 -17.4M9.4 -11.8L7.2 -19.2M5.2 -12.8L2.6 -19.8M0.8 -13.2L-2 -19' +
  'M3.4 -11.8C1 -8.6 0 -6 -0.2 -3C-1.2 1.2 -2.6 4.6 -5.8 7.4' +
  'M-1.4 -3.2C-4.4 -3.8 -5.8 0 -4 3.2C-3 4.6 -1.4 4.2 -1 2.8'

/**
 * A Roman soldier's helmet, in the head's frame: the bowl, a flared neck guard,
 * a cheek piece over the jaw, and a low crest (HELMET_CREST). Its rim, the
 * edge of the cheek piece and the crest's hair are cut in paper (HELMET_CUTS).
 */
export const HELMET =
  'M17 -7.4C17.4 -17.6 10 -24.4 1 -24.4C-9 -24.4 -16 -17.6 -17 -8L-17.6 -2L-23.4 3.4L-21.6 5.4L-14 1.2L-10.6 -1.4L-4 -2.4L-3.4 12.6C-1.4 14.4 2.6 14.4 5 12.6L6.6 -1.4L12 -2.8L17.6 -4.4Z'
export const HELMET_CREST = 'M-12 -20C-10 -30 2 -34 12 -28L9 -22.6C3 -25.6 -5 -24.6 -9 -18.6Z'
export const HELMET_CUTS =
  gouge(-16, -6.6, 16.4, -8.6, 0.85, -0.4) +
  gouge(-2.6, -1, -1.6, 11.2, 0.7, -0.4) +
  gouge(-9.6, -24.4, 8.4, -28.6, 0.6, 1.2) +
  gouge(-6.6, -21.6, 9.4, -25.4, 0.55, 1)

/**
 * The cuirass, from the neck to the hip: the chest full, the back straight,
 * its lower edge curving down at the front. In the figure's frame.
 */
export function cuirass(slim = 1): string {
  const s = (x: number) => n(x * slim)
  return (
    `M${s(-6)} -148C${s(-14)} -147 ${s(-19)} -141 ${s(-19)} -131C${s(-20)} -116 ${s(-18)} -102 ${s(-17)} -90` +
    `L${s(-18)} -84C${s(-6)} -81 ${s(8)} -81 ${s(19)} -85C${s(19)} -96 ${s(20)} -108 ${s(19.6)} -119` +
    `C${s(19.4)} -129 ${s(16)} -140 ${s(11)} -145C${s(8)} -148 ${s(3)} -149 ${s(-1)} -149Z`
  )
}
/** The skirt of leather strips (pteruges) under the cuirass, to mid-thigh. */
export function pteruges(slim = 1): string {
  const s = (x: number) => n(x * slim)
  return `M${s(-18.6)} -88L${s(-21)} -62L${s(21.6)} -62L${s(19.4)} -88Z`
}
/** The cuirass's rim, the line of the chest, the shoulder guard's edge and the gaps between the strips, in paper. */
export function armourCuts(slim = 1): string {
  const s = (x: number) => x * slim
  let d =
    gouge(s(-17.4), -85.4, s(18.6), -86.8, 1.5, 1.2) +
    gouge(s(-2), -118, s(18.6), -121, 1.3, -1.4) +
    gouge(s(-6), -146, s(8), -131, 1.3, 1.2)
  for (let k = 0; k < 7; k++) {
    const x = s(-15 + k * 5.4)
    d += gouge(x, -82, x - 0.6 + k * 0.2, -63.4, 0.8)
  }
  return d
}

/** The generals, who wear a cloak over their armour at Philippi. */
const GENERALS: string[] = ['brutus', 'cassius', 'antony', 'octavius']

// ── The builder ──────────────────────────────────────────────────────────────

export type Look =
  | 'caesar'
  | 'brutus'
  | 'cassius'
  | 'casca'
  | 'antony'
  | 'calpurnia'
  | 'portia'
  | 'soothsayer'
  | 'flavius'
  | 'marullus'
  | 'citizen'
  | 'citizen-woman'
  | 'lucius'
  | 'conspirator'
  | 'octavius'
  | 'lepidus'
  | 'pindarus'
  | 'strato'
  | 'soldier'
  | 'decius'
  | 'senator'
  | 'cinna-poet'

/** What a person wears: the toga in public, a tunic at work or at home, a cloak at night, armour at Philippi. */
export type Dress = 'toga' | 'tunic' | 'runner' | 'robe' | 'unbraced' | 'cloak' | 'stola' | 'armour'

const DRESS: Record<Look, Dress> = {
  decius: 'toga',
  senator: 'toga',
  'cinna-poet': 'toga',
  octavius: 'toga',
  lepidus: 'toga',
  pindarus: 'tunic',
  strato: 'armour',
  soldier: 'armour',
  caesar: 'toga',
  brutus: 'toga',
  cassius: 'toga',
  casca: 'toga',
  antony: 'toga',
  calpurnia: 'stola',
  portia: 'stola',
  soothsayer: 'robe',
  flavius: 'toga',
  marullus: 'toga',
  citizen: 'tunic',
  'citizen-woman': 'stola',
  lucius: 'tunic',
  conspirator: 'cloak',
}

/** How big each person is, against a man of 1. Lucius is a boy. */
const SIZE: Record<Look, number> = {
  decius: 1,
  senator: 1,
  'cinna-poet': 0.98,
  octavius: 0.97,
  lepidus: 0.98,
  pindarus: 0.97,
  strato: 0.99,
  soldier: 1,
  caesar: 1,
  brutus: 1.01,
  cassius: 1.01,
  casca: 0.98,
  antony: 1.02,
  calpurnia: 0.92,
  portia: 0.92,
  soothsayer: 0.94,
  flavius: 0.98,
  marullus: 1,
  citizen: 0.97,
  'citizen-woman': 0.9,
  lucius: 0.72,
  conspirator: 0.99,
}

const WOMEN: Look[] = ['calpurnia', 'portia', 'citizen-woman']

/** A hand: open with the fingers apart, pointing, one finger raised, at rest, closed round something held, or hidden. */
export type HandKind = 'open' | 'point' | 'finger' | 'mitt' | 'grip' | 'none'

export interface ArmPose {
  /** Shoulder, elbow and wrist, in the figure's frame. */
  pts: P[]
  hand?: HandKind
  /** The direction the fingers point, in degrees clockwise from the right. Defaults to the forearm's. */
  deg?: number
  /** Which side of the fingers the thumb is on: 1 clockwise of them, -1 anticlockwise. */
  thumb?: 1 | -1
  /** An open hand's length (15 is life and a little more) and how far its fingers fan. */
  size?: number
  spread?: number
}

export interface Pose {
  look: Look
  /** Overrides the look's usual dress (Brutus at home is 'unbraced'; Antony for the course is 'runner'). */
  dress?: Dress
  /**
   * Which citizen: 0 the cobbler (cap, grin), 1 the carpenter (bareheaded),
   * 2 a man in a cap with a beard, 3 an older man, bald, 4 a young man.
   */
  variant?: number
  /**
   * The head's centre and its tilt in degrees (forward is positive). With
   * `back`, the head is turned to look back over the shoulder, the way the
   * body is not facing (Caesar walking on from the Soothsayer, 1.2).
   */
  head?: { at?: P; rot?: number; back?: boolean }
  far?: ArmPose
  near?: ArmPose
  /** "With your arms across" (2.1): both forearms folded over the chest, in place of `far` and `near`. */
  folded?: boolean
  /** Hip, knee and ankle of each leg, for the tunics and cloaks. */
  legs?: { far: P[]; near: P[] }
  /** Where the feet stand under a toga, robe or stola: x of the far foot and the near foot. */
  feet?: [number, number]
  /** The hem's reach ahead of the body and behind it, wider in a stride. */
  hem?: { front?: number; back?: number }
  eye?: 'open' | 'down' | 'shut' | 'none'
  mouth?: 'grin' | 'open'
  frown?: boolean
  /** A red flush on the cheek (FLUSH). Never on the mouth or chin. */
  flush?: boolean
  /** No wreath, cap or hat. */
  bare?: boolean
}

/** Where the arms hang at rest, if a pose gives none: the far arm under the toga, the near one by the side. */
export const REST: { near: ArmPose } = {
  near: {
    pts: [
      [5, -128],
      [9, -104],
      [11, -80],
    ],
    hand: 'mitt',
  },
}

const MEN_LEGS = {
  far: [
    [-3, -70],
    [-5, -36],
    [-6, -3],
  ] as P[],
  near: [
    [3, -70],
    [5, -36],
    [7, -3],
  ] as P[],
}

/** "With your arms across": the near forearm laid over the far one across the chest. */
function folded(slim: number): Piece[] {
  const s = (x: number) => x * slim
  return [
    {
      d: limb([
        [s(-4), -130],
        [s(-12), -108],
        [s(10), -112],
      ]),
      w: 8.4,
    },
    mitt([s(10), -112], -14, 0.9),
    [
      {
        d: limb([
          [s(4), -130],
          [s(14), -106],
          [s(-9), -102],
        ]),
        w: 8.8,
        sep: 1.6,
      },
      { ...mitt([s(-9), -102], 178, 0.9), sep: 1.6 },
    ],
  ]
}

function headOf(look: Look, variant: number) {
  if (look === 'cassius') return HEAD_CASSIUS
  if (look === 'casca') return HEAD_CASCA
  if (look === 'antony' || look === 'lucius' || look === 'octavius') return HEAD_YOUTH
  if (WOMEN.includes(look)) return HEAD_WOMAN
  if (look === 'citizen' && variant === 2) return HEAD_CASCA
  if (look === 'citizen' && variant === 4) return HEAD_YOUTH
  return HEAD_MAN
}

function build(p: Pose) {
  const look = p.look
  const variant = p.variant ?? 0
  const woman = WOMEN.includes(look)
  const dress = p.dress ?? DRESS[look]
  const slim = look === 'cassius' ? 0.86 : look === 'lucius' ? 0.92 : look === 'lepidus' ? 0.9 : 1
  const h = p.head ?? {}
  const hAt: P = h.at ?? (woman ? [3, -154] : [3, -160])
  const headT =
    `translate(${n(hAt[0])} ${n(hAt[1])}) rotate(${h.rot ?? 0})` + (h.back ? ' scale(-1 1)' : '')
  const armW = woman ? 7.6 : look === 'cassius' ? 7.8 : look === 'lucius' ? 7.4 : 8.6
  const parts: Piece[] = []
  let cuts = ''

  const handOf = (a: ArmPose, sep?: number): Part[] => {
    const kind = a.hand ?? 'mitt'
    const wrist = a.pts[a.pts.length - 1]
    const angle = a.deg ?? endAngle(a.pts)
    if (kind === 'none') return []
    if (kind === 'mitt') return [{ ...mitt(wrist, angle, woman ? 0.85 : 1), sep }]
    if (kind === 'grip') return [{ ...gripHand(wrist, angle, woman ? 0.85 : 1), sep }]
    if (kind === 'point')
      return pointingHand(wrist, angle, woman ? 0.9 : 1, a.thumb ?? 1).map((q) => ({ ...q, sep }))
    if (kind === 'finger') return warningHand(wrist, angle, { size: woman ? 13 : 15, sep })
    // Fanned 18 degrees by default: at 14 the rough edge of the print closed
    // the gaps between the fingers at panel size, and open hands read as
    // fists (the Merchant kit, reviewed 27 September 2026).
    return hand(wrist, angle, {
      size: a.size ?? (woman ? 13.5 : 15),
      spread: a.spread ?? 18,
      thumb: a.thumb,
      sep,
    })
  }
  const armOf = (a: ArmPose, near: boolean): Piece => {
    const sep = near ? 1.5 : undefined
    return [{ d: limb(a.pts), w: armW, sep }, ...handOf(a, sep)]
  }

  if (!p.folded && p.far) parts.push(armOf(p.far, false))

  const front = p.hem?.front
  const back = p.hem?.back
  const legsOf = (legs: { far: P[]; near: P[] }, which: 'far' | 'near'): Part[] => {
    const pts = legs[which]
    const ankle = pts[pts.length - 1]
    cuts += sandalCuts([ankle[0], 0], 1)
    return [{ d: limb(pts), w: look === 'lucius' ? 8 : 9 }, sandal([ankle[0], 0], 1)]
  }
  const feetUnder = (fallback: [number, number]) => {
    const [fx, nx] = p.feet ?? fallback
    parts.push(sandal([fx, 0], 1))
    cuts += sandalCuts([fx, 0], 1)
    return nx
  }

  if (dress === 'toga') {
    const f = front ?? 24
    const b = back ?? 30
    const nx = feetUnder([-8, 8])
    parts.push({ d: toga(f, b, slim) })
    parts.push(sandal([nx, 0], 1))
    cuts += sandalCuts([nx, 0], 1) + togaCuts(f, b, slim)
  } else if (dress === 'robe' || dress === 'unbraced') {
    const f = front ?? 20
    const b = back ?? 26
    const nx = feetUnder([-6, 8])
    if (dress === 'unbraced') {
      parts.push({ d: HOUSE_MANTLE })
      cuts += HOUSE_MANTLE_CUTS
    }
    parts.push({ d: robe(f, b) })
    parts.push(sandal([nx, 0], 1))
    cuts += sandalCuts([nx, 0], 1) + robeCuts(f, b, dress === 'robe')
  } else if (dress === 'stola') {
    const nx = feetUnder([-4, 10])
    parts.push({
      d: gown([0, -132], [0, -94], 0, 1, {
        shoulder: 24,
        waistW: 17,
        front: front ?? 26,
        back: back ?? 32,
      }),
    })
    parts.push(sandal([nx, 0], 1))
    // the girdle under the breast and two long folds of the stola
    cuts +=
      sandalCuts([nx, 0], 1) +
      gouge(-8, -112, 8.6, -111, 1, 0.6) +
      gouge(-6, -100, -18, -8, 1.7, 1) +
      gouge(6, -100, 16, -8, 1.7, -1)
  } else if (dress === 'cloak') {
    const legs = p.legs ?? {
      far: [
        [-4, -60],
        [-6, -3],
      ] as P[],
      near: [
        [4, -60],
        [8, -3],
      ] as P[],
    }
    parts.push(...legsOf(legs, 'far'))
    parts.push(...legsOf(legs, 'near'))
    parts.push({ d: CLOAK })
    cuts += CLOAK_CUTS
  } else if (dress === 'armour') {
    // Philippi: a general's cloak behind, then bare legs, the skirt of
    // strips and the cuirass over it
    if (GENERALS.includes(look)) {
      parts.push({ d: HOUSE_MANTLE })
      cuts += HOUSE_MANTLE_CUTS
    }
    const legs = p.legs ?? MEN_LEGS
    parts.push(...legsOf(legs, 'far'))
    parts.push({ d: pteruges(slim) })
    parts.push({ d: cuirass(slim) })
    parts.push(...legsOf(legs, 'near'))
    cuts += armourCuts(slim)
  } else {
    // tunic or runner: bare legs and sandals below the hem
    const hem = dress === 'runner' ? -62 : -46
    const legs = p.legs ?? MEN_LEGS
    parts.push(...legsOf(legs, 'far'))
    parts.push({
      d: limb([
        [0, -138],
        [0, -86],
      ]),
      w: 22 * slim,
    })
    parts.push({ d: tunic(hem, slim) })
    parts.push(...legsOf(legs, 'near'))
    cuts += tunicCuts(hem, slim)
  }

  // The head, and what is behind it or on it.
  const hatted = !p.bare
  if (look === 'antony') parts.push({ d: ANTONY_HAIR, t: headT })
  if (look === 'portia') parts.push({ d: PORTIA_HAIR, t: headT })
  if (look === 'calpurnia' || look === 'citizen-woman') parts.push({ d: PALLA, t: headT })
  if (look === 'decius') parts.push({ d: DECIUS_LOCK, t: headT })
  parts.push({ d: headOf(look, variant), t: headT })
  if (look === 'cinna-poet') parts.push({ d: CINNA_FRINGE, t: headT })
  if (look === 'citizen' && hatted && (variant === 0 || variant === 2))
    parts.push({ d: CAP, t: headT })
  if (look === 'conspirator') {
    parts.push({ d: MUFFLE, t: headT })
    if (hatted) parts.push({ d: PETASUS, t: headT })
  }
  if (look === 'soldier' && hatted)
    parts.push({ d: HELMET, t: headT }, { d: HELMET_CREST, t: headT })

  if (p.folded) parts.push(...folded(slim))
  else if (p.near) parts.push(armOf(p.near, true))
  return { parts, cuts, headT }
}

/**
 * One of the people of the play, cut from the block: placed with its feet at
 * `at`, scaled by `scale` (on top of the person's own size), and turned to
 * face left with `flip`. With `stone`, cut in paper with ink folds and
 * features: a statue (or the Ghost). `children` are drawn last, in the
 * figure's own frame (a letter, a sword, flowers held in the hand).
 */
export function Person({
  pose,
  at,
  scale = 1,
  flip = false,
  stone = false,
  children,
}: {
  pose: Pose
  at: P
  scale?: number
  flip?: boolean
  stone?: boolean
  children?: ReactNode
}) {
  const { parts, cuts, headT } = build(pose)
  const look = pose.look
  const variant = pose.variant ?? 0
  const s = scale * SIZE[look]
  const eye = pose.eye ?? (stone ? 'none' : 'open')
  // The colour a feature is cut in: paper on an ink figure, ink on a stone one.
  const cut = stone ? INK : PAPER
  const transform = `translate(${n(at[0])} ${n(at[1])}) scale(${n(flip ? -s : s)} ${n(s)})`
  const romanHair =
    look === 'caesar' ||
    look === 'marullus' ||
    look === 'senator' ||
    look === 'casca' ||
    look === 'octavius' ||
    look === 'pindarus' ||
    look === 'strato' ||
    (look === 'soldier' && pose.bare) ||
    (look === 'citizen' && (variant === 1 || variant === 4)) ||
    (look === 'citizen' && pose.bare && (variant === 0 || variant === 2))
  const capped = look === 'citizen' && !pose.bare && (variant === 0 || variant === 2)
  return (
    <CutFigure
      parts={parts}
      cuts={cuts || undefined}
      transform={transform}
      tone={stone ? 'paper' : 'ink'}
    >
      <g transform={headT}>
        {romanHair && (
          <path d={ROMAN_HAIR} fill="none" stroke={cut} strokeWidth={1.2} strokeLinecap="round" />
        )}
        {look === 'brutus' && (
          <>
            <path
              d={BRUTUS_HAIR}
              fill="none"
              stroke={cut}
              strokeWidth={1.2}
              strokeLinecap="round"
            />
            <path d={BRUTUS_BROW} fill={cut} />
          </>
        )}
        {look === 'cassius' && (
          <>
            <path
              d={RECEDING_HAIR}
              fill="none"
              stroke={cut}
              strokeWidth={1.2}
              strokeLinecap="round"
            />
            <path d={CASSIUS_CUTS} fill={cut} />
          </>
        )}
        {look === 'casca' && <path d={CASCA_BEARD_CUTS} fill={cut} />}
        {look === 'citizen' && variant === 2 && <path d={CASCA_BEARD_CUTS} fill={cut} />}
        {look === 'antony' && (
          <path d={ANTONY_CURLS} fill="none" stroke={cut} strokeWidth={1.1} strokeLinecap="round" />
        )}
        {look === 'lucius' && (
          <path d={ROMAN_HAIR} fill="none" stroke={cut} strokeWidth={1.1} strokeLinecap="round" />
        )}
        {look === 'caesar' && <path d={CAESAR_LINES} fill={cut} />}
        {look === 'lepidus' && (
          <>
            <path
              d={LEPIDUS_HAIR}
              fill="none"
              stroke={cut}
              strokeWidth={1.2}
              strokeLinecap="round"
            />
            <path d={CROWN_SHINE} fill={cut} />
          </>
        )}
        {look === 'soldier' && !pose.bare && <path d={HELMET_CUTS} fill={cut} />}
        {look === 'decius' && (
          <path d={DECIUS_HAIR} fill="none" stroke={cut} strokeWidth={1.2} strokeLinecap="round" />
        )}
        {look === 'cinna-poet' && (
          <path d={CINNA_HAIR} fill="none" stroke={cut} strokeWidth={1.2} strokeLinecap="round" />
        )}
        {(look === 'soothsayer' || look === 'flavius' || (look === 'citizen' && variant === 3)) && (
          <>
            <path d={OLD_FRINGE} fill={PAPER} stroke={INK} strokeWidth={1} />
            <path d={OLD_FRINGE_STRANDS} fill="none" stroke={INK} strokeWidth={0.8} />
            <path d={CROWN_SHINE} fill={cut} />
            <path d={WHITE_BROW} fill={cut} />
          </>
        )}
        {look === 'soothsayer' && (
          <>
            <path d={FULL_BEARD} fill={PAPER} stroke={INK} strokeWidth={0.9} />
            <path d={FULL_BEARD_STRANDS} fill="none" stroke={INK} strokeWidth={0.8} />
          </>
        )}
        {(look === 'calpurnia' || look === 'citizen-woman') && (
          <path d={PALLA_EDGE} fill="none" stroke={cut} strokeWidth={1.8} strokeLinecap="round" />
        )}
        {look === 'portia' && <path d={PORTIA_STRANDS} fill={cut} />}
        {capped && <path d={CAP_CUT} fill={cut} />}
        {look === 'conspirator' && (
          <>
            <path
              d={MUFFLE_EDGE}
              fill="none"
              stroke={cut}
              strokeWidth={1.6}
              strokeLinecap="round"
            />
            <path d={MUFFLE_FOLD} fill={cut} />
            {!pose.bare && <path d={PETASUS_CUT} fill={cut} />}
          </>
        )}
        {look === 'caesar' && !pose.bare && (
          <path d={LAUREL} fill={PAPER} stroke={INK} strokeWidth={0.7} strokeLinejoin="round" />
        )}
        {eye === 'open' && <path d={EYE} fill={cut} />}
        {(eye === 'down' || eye === 'shut') && <path d={EYE_DOWN} fill={cut} />}
        {pose.frown && <path d={FROWN} fill={cut} />}
        {pose.mouth === 'grin' && (
          <path d={GRIN} fill="none" stroke={cut} strokeWidth={1.2} strokeLinecap="round" />
        )}
        {pose.mouth === 'open' && <path d={OPEN_MOUTH} fill={cut} />}
        {pose.flush && !stone && (
          <path d={FLUSH} fill="none" stroke={RED} strokeWidth={1.7} strokeLinecap="round" />
        )}
      </g>
      {children}
    </CutFigure>
  )
}
