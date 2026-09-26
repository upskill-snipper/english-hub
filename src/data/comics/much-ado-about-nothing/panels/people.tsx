import type { ReactNode } from 'react'

import { INK, PAPER } from '@/components/comics/linocut/palette'
import { deg, gouge, n } from '@/components/comics/linocut/carve'

import {
  CutFigure,
  arm,
  doublet,
  gown,
  hand,
  headAt,
  limb,
  sheathed,
  shoe,
  warningHand,
  type P,
  type Part,
  type Piece,
} from '../../romeo-and-juliet/panels/verona-kit'
import {
  COIF,
  COIF_EDGE,
  EYE,
  EYE_DOWN,
  FULL_BEARD,
  FULL_BEARD_STRANDS,
  HEAD_MAN,
  HEAD_WOMAN,
  OLD_BEARD,
  OLD_HAIR,
  OLD_STRANDS,
  TONSURE,
  TONSURE_SHINE,
  TONSURE_STRANDS,
  WHITE_BROW,
  pointingHand,
} from '../../romeo-and-juliet/panels/acts-3-4-kit'

export {
  CutFigure,
  arm,
  doublet,
  gown,
  hand,
  headAt,
  limb,
  sheathed,
  shoe,
  warningHand,
  pointingHand,
  EYE,
  EYE_DOWN,
  HEAD_MAN,
  HEAD_WOMAN,
  type P,
  type Part,
  type Piece,
}

/**
 * THE PEOPLE OF MESSINA: one figure kit for every Much Ado About Nothing
 * panel, so that a student meets the same Benedick, the same Hero and the
 * same Don John from the first act to the last. Draw every recurring
 * character with `Person` (or, for a pose it cannot make, with the heads and
 * pieces below), never with a new outline. A change here changes every panel
 * that uses it: preview them all before changing one.
 *
 * The cutting tools (CutFigure, arm and its open hand with the fingers apart,
 * doublet, gown, shoe, the sheathed rapier) are the Romeo and Juliet kit's
 * (../../romeo-and-juliet/panels/verona-kit.tsx), re-exported, not copied:
 * the two plays are set in the same Italy in the same years, and one hand
 * cutting both keeps the site one artist. The portraits of this play take
 * their helpers from the Romeo and Juliet portraits for the same reason
 * (../portraits/common.tsx), and dress their people as this kit does.
 *
 * A FIGURE is cut as the reference panel cuts Fred
 * (src/data/comics/a-christmas-carol/counting-house.tsx): a paper halo round
 * every part, so it reads as one black shape with one carved outline, then
 * the parts in ink, then the paper cuts of folds and features. `Person`
 * builds it from a pose in its own frame: facing right, feet at (0, 0), a man
 * about 182 units tall, the head centred on (3, -160). Place it with `at`,
 * `scale` and `flip` (to face left).
 *
 * WHAT THE PLAY SAYS OF THEM, and so what is drawn (the held edition,
 * src/data/full-texts/much-ado-about-nothing.ts, Project Gutenberg #1519).
 * Shakespeare describes almost nobody, and most of what he gives is said by
 * someone else in a jest; where he is silent, a person is drawn plainly in
 * the dress of the time, and nothing is taken from a film, television or
 * stage production.
 *
 * - BENEDICK is bearded until Act 3, Scene 2, where his friends find him
 *   shaved: "the old ornament of his cheek hath already stuffed tennis
 *   balls", "he looks younger than he did, by the loss of a beard". So up to
 *   that scene he has a short pointed dark beard ('benedick'), cut with
 *   strands so it reads on an ink head; from it on, draw 'benedick-shaved',
 *   the same man with his chin bare. A soldier, "a very proper man" (2.3): a
 *   doublet and hose, a short cloak and a rapier.
 * - CLAUDIO is "a young Florentine", doing "in the figure of a lamb the feats
 *   of a lion" (1.1), and Benedick calls him "my Lord Lack-beard" (5.1). So
 *   he is a beardless youth, a little slighter than the older men, his
 *   straight hair cut level at the jaw.
 * - DON PEDRO, the Prince of Arragon, is not described. He is known by a
 *   plain circlet, printed in paper, and a cloak to the knee. At the masked
 *   ball he woos Hero "in some disguise" as Claudio (1.1), so masked he wears
 *   no circlet (`bare`).
 * - DON JOHN: "How tartly that gentleman looks! I never can see him but I am
 *   heart-burned an hour after"; "He is of a very melancholy disposition";
 *   "too like an image, and says nothing" (2.1); "I am not of many words"
 *   (1.1). So he stands still as a statue, his arms folded, wrapped to the
 *   knee in a dark cloak, a brow drawn down in a frown and a mouth turned
 *   down at the corner. Nothing else is said of his looks; he is known by a
 *   tall black hat, which nobody else wears. (His hair once hung to his
 *   shoulders under a cloak to his calf, and he read as a woman.)
 * - LEONATO is old: Benedick, hidden, calls him "the white-bearded fellow"
 *   (2.3), and he speaks of his "grey hairs" (5.1). So he has a full white
 *   beard, a white brow and white hair, cut in paper, and wears the long gown
 *   of an old man of standing, the Governor of Messina.
 * - HERO is "too low for a high praise, too brown for a fair praise, and too
 *   little for a great praise", "Leonato's short daughter" (1.1). So she is
 *   drawn small, a head shorter than her cousin, and in ink, never cut in
 *   paper as Juliet is: "too brown for a fair praise" means she is not pale.
 *   Her hair is dark, bound with a paper fillet and plaited down her back.
 * - BEATRICE is taller than Hero (Benedick says she "exceeds her as much in
 *   beauty as the first of May doth the last of December", 1.1), and
 *   "sunburnt" (2.1), so she too is in ink. Her hair is dressed up in a
 *   netted caul at the back of her head, as the portrait of her dresses it
 *   (../portraits/beatrice.tsx), so the two cousins are told apart at a
 *   glance: one plait falling, one caul.
 * - BORACHIO and CONRADE, Don John's followers, are not described. Borachio
 *   wears a plain round cap with a turned-up brim, Conrade a soft flat
 *   bonnet, so the two can be told apart, from the gentlemen and from their
 *   master's tall hat.
 * - The revellers wear visors (2.1: "Enter ... masked"): `masked` puts a
 *   paper visor over the eyes, with its tie behind.
 *
 * ADDED for the panels of moments 6 to 10 (Act 3, Scene 1 to Act 4, Scene
 * 1), for the people those scenes bring on, who recur in later panels:
 * - DOGBERRY calls himself "as pretty a piece of flesh as any in Messina",
 *   "a rich fellow enough", "one that hath two gowns and everything handsome
 *   about him" (4.2), and the officers come to the examination "in gowns"
 *   (4.2). So he is stout, in a wide belted gown, with a flat cap cut round
 *   its brim, and a round fleshy cheek cut in paper.
 * - VERGES is "an old man, sir, and his wits are not so blunt" and "A good
 *   old man, sir; he will be talking" (3.5), and "two men ride of a horse,
 *   one must ride behind" (3.5). So he is smaller than Dogberry and stooped,
 *   in a narrow gown and a close cap, with a short white beard and white hair
 *   (the Romeo and Juliet kit's OLD_BEARD and OLD_HAIR), so he is not taken
 *   for Leonato, whose beard is full and who goes bareheaded.
 * - THE WATCH are the Prince's watch, told "have a care that your bills be
 *   not stolen" and "bear you the lanthorn" (3.3), and are not otherwise
 *   described: plain men in doublets and a brimmed hat ('watchman'). Their
 *   bills are `bill`.
 * - FRIAR FRANCIS: "trust not my age, / My reverence, calling, nor divinity"
 *   (4.1). So he is an old friar, in a habit girdled with a knotted cord,
 *   his hood down on his shoulders and his crown shaved in a ring of white
 *   hair (the Romeo and Juliet kit's TONSURE, cut for Friar Lawrence).
 * - URSULA, Hero's gentlewoman (3.1), is not described. She wears a linen
 *   coif (the Romeo and Juliet kit's COIF), so she is told from the two
 *   cousins at a glance.
 *
 * HANDS. Every open hand is `arm`'s, with four fingers and a thumb cut apart,
 * so it reads as an open hand at panel size and never as a fist; a pointing
 * hand has one long finger and the rest curled; a hand at rest by the side is
 * a small closed mitten. No hand is raised flat on a straight arm: at panel
 * size that reads as a salute.
 */

// ── Heads, in profile facing right, centred on (0, 0), about 38 by 44 ────────

/**
 * Benedick's head: the man's head with a short pointed beard from the ear to
 * a point below the chin, and a moustache over the lip. The beard is ink on
 * an ink head, so its strands and the line of the mouth are cut in paper
 * (BENEDICK_BEARD_CUTS): a dark beard left uncut reads only as a longer chin.
 */
export const HEAD_BENEDICK =
  'M-9 22C-10 16 -15 12 -16 3C-17 -10 -8 -20 3 -20C11 -20 16 -14 16 -8L16 -5L22.5 3.5L17 5.5L18.8 8.4L17.4 10C19.2 14.5 19 20.5 16.6 26L14.2 31.5C11.6 27.4 8.8 24.6 6 23Z'
export const BENEDICK_BEARD_CUTS =
  gouge(-2.5, 3, 1.5, 14, 0.9, -0.6) +
  gouge(3.4, 11.4, 8.6, 24, 1, -0.5) +
  gouge(9, 12.6, 12.2, 27, 1, -0.3) +
  gouge(13.4, 12.8, 15, 24, 0.9, -0.2) +
  gouge(12.4, 10.2, 18, 9.6, 0.75)

/** A man's short hair, swept back from the brow: a few paper strands over the crown. */
export const HAIR_CUTS =
  gouge(7, -15.5, -12, -5, 0.6, 2.6) +
  gouge(10.5, -11, -13.5, 3, 0.55, 3) +
  gouge(-1, -18, -13, -10, 0.5, 1.4)

/** A youth's head (Claudio): the nose and chin softer than the older men's, the jaw bare. */
export const HEAD_YOUTH =
  'M-9 22C-10 16 -15 12 -16 3C-17 -10 -8 -20 3 -20C11 -20 15.5 -14 15.5 -8L15.8 -5L21 3L16.4 5.2L17 8.2L15.6 9.8L16.4 12.4C15.8 15.8 12.6 17.8 8 17.8L6 22Z'
/** Claudio's straight hair, over the crown and cut level at the jaw behind. */
export const CLAUDIO_HAIR =
  'M15.5 -11C12 -20.5 1 -24 -8 -20.5C-16 -17 -19.5 -8 -19 2C-18.6 9 -17.6 14 -15.4 18.5L-9.6 17.6C-11 11 -11 4 -9.4 -2C-7 -8.4 -0.6 -11.6 6 -11.2C9.6 -11 12.6 -10.2 15.5 -11Z'
export const CLAUDIO_HAIR_CUTS =
  gouge(10, -16.5, -12, -8, 0.6, 2.2) +
  gouge(-4, -18.5, -16.5, 4, 0.6, 1.8) +
  gouge(-13.2, -2, -14.6, 15, 0.55, 0.6)

/**
 * Don Pedro's circlet: a plain band with three low points, set on the brow.
 * Printed in paper with an ink edge, so the Prince is known by it on an ink
 * head in every panel where he is not in disguise.
 */
export const CIRCLET =
  'M-15.5 -10.5L-16 -17.5L-10.5 -14.5L-4 -20L2 -15.5L8.5 -20.5L13.5 -14.5L15.5 -16.5L15 -9C7 -11.5 -7 -12 -15.5 -10.5Z'

/** Don John's head: the jaw a little longer than the other men's. */
export const HEAD_DON_JOHN =
  'M-9 23C-10 17 -15 12 -16 3C-17 -10 -8 -20 3 -20C11 -20 16 -14 16 -8L16 -5L22.5 3.5L17 5.5L17.5 8.5L16 10L17.2 13C17.4 18 14.5 21 9 21.4L6.5 23Z'
/** His hair, cropped short at the nape under the hat. */
export const DON_JOHN_HAIR =
  'M-6 -10C-12.6 -9 -17.4 -5 -18.4 2C-19 8 -18.4 13 -16.6 17.4L-10.4 17C-11 12 -11 7 -10 2C-9 -3 -7.6 -7 -6 -10Z'
export const DON_JOHN_HAIR_CUTS = gouge(-14.4, -4, -15, 14, 0.6, 0.4)
/**
 * His hat: a tall black crown and a narrow brim, pulled down to the frown,
 * with its band cut in paper (DON_JOHN_HAT_CUT). Nobody else in the play
 * wears one like it, so he is known by it at a glance. (A broad-brimmed hat
 * was tried first, and read as the watchmen's.)
 */
export const DON_JOHN_HAT =
  'M-21 -10C-9 -13.6 8 -15.2 23 -15.4L22.4 -12.4C18 -12.4 14.2 -12.8 12 -14.2L9 -36C6 -39.6 -5 -39.8 -9.4 -36.4L-13.2 -13.8C-16.2 -12.8 -18.8 -11.6 -21 -10Z'
export const DON_JOHN_HAT_CUT = gouge(-12.4, -18.4, 11.2, -19.2, 1.1)
/**
 * "How tartly that gentleman looks": the brow drawn down towards the nose in
 * a frown, cut bold so it survives a phone, and the mouth turned down at its
 * corner.
 */
export const DON_JOHN_FROWN = gouge(5.4, -9.4, 15.8, -5.2, 1.4, -0.3)
export const DON_JOHN_MOUTH = gouge(11, 14.4, 17.2, 10.6, 1, -1.4)

/**
 * Leonato's white hair, round the back of the head from the temple to the
 * nape, in paper with an ink edge. His full white beard and white brow are
 * FULL_BEARD and WHITE_BROW, the old man's beard the Romeo and Juliet kit
 * cut for Capulet, large enough to read as white at panel size.
 */
export const LEONATO_HAIR =
  'M-0.5 -19.4C-8.5 -18.4 -14.6 -12 -15.8 -4C-17 5 -16 13 -12 20L-7 20.6C-9.8 13 -10.4 4.6 -8.6 -2.6C-6.8 -9.6 -3.4 -13.8 1.6 -16Z'
export const LEONATO_HAIR_STRANDS =
  'M-12.4 -6C-13.6 2 -13 10 -10.6 17M-6.6 -13C-9.6 -8 -11 -2 -11.4 4'
export { FULL_BEARD, FULL_BEARD_STRANDS, WHITE_BROW }

/**
 * Beatrice's hair, drawn back from the brow over the crown into a round
 * netted caul at the back of the head (BEATRICE_CAUL_NET, the net cut in
 * paper), as her portrait dresses it.
 */
export const BEATRICE_HAIR =
  'M13.5 -11.5C10 -20 0 -23 -7.5 -20.5C-11 -24 -18 -24.5 -22.5 -19.5C-27 -14.5 -26 -6 -21 -2C-18 0.5 -14.5 0.5 -12 -1L-9 -5C-7 -10 -2 -12.5 3 -12.5C7 -12.5 10.5 -12 13.5 -11.5Z'
export const BEATRICE_CAUL_NET =
  'M-24.4 -14.6L-15.6 -3.4M-21.8 -20.4L-11.8 -8M-16.8 -22.6L-10.2 -14.4M-25 -8.4L-20.6 -2.6M-24 -8.6L-13.6 -20.8M-21.6 -2.8L-10.8 -16.2M-16.8 -1.4L-11.4 -7.6'

/**
 * Hero's hair: dark, drawn back over the crown under a fillet (HERO_FILLET, a
 * paper band) and gathered behind the ear into one long plait brought forward
 * over her shoulder to the waist (HERO_PLAIT, its crossings cut in paper by
 * HERO_PLAIT_CUTS). Forward, so its paper edge shows it against her bodice: a
 * plait down her back was lost in the ink of her gown.
 */
export const HERO_HAIR =
  'M13 -11C9 -20.5 -4 -22.5 -11.5 -16.5C-17 -12 -18 -3 -16.4 5C-15 10 -12 13 -8 13C-7 8 -6 1 -4 -4C-1 -9.5 6 -11.5 13 -11Z'
const PLAIT_SPINE: P[] = [
  [-9, 8],
  [-5, 20],
  [-1.6, 32],
  [0.4, 44],
  [1.4, 56],
]
export const HERO_PLAIT =
  'M' +
  [
    ...PLAIT_SPINE.map(([x, y], i): P => [x - 3.6 + i * 0.2, y]),
    ...PLAIT_SPINE.map(([x, y], i): P => [x + 3.6 - i * 0.2, y]).reverse(),
  ]
    .map(([x, y]) => `${n(x)} ${n(y)}`)
    .join('L') +
  'Z'
export const HERO_FILLET = gouge(12.6, -11.6, -14.6, -12.4, 1.4, -1.6)
export const HERO_PLAIT_CUTS = PLAIT_SPINE.slice(1)
  .map(([x, y]) => gouge(x - 3, y - 3, x + 2.6, y + 1, 0.7))
  .join('')

/** Borachio's cap: a plain round cap with a turned-up brim, cut along its brim. */
export const BORACHIO_CAP =
  'M-17 -5C-19 -14 -12 -23 -1 -24C9 -25 16 -20 17.5 -12L19 -9C12 -8 2 -8.5 -6 -8C-11 -7.6 -14.5 -6.5 -17 -5Z'
export const BORACHIO_CAP_CUT = gouge(-16, -7.5, 18, -11, 1, -0.6)

/** Conrade's soft flat bonnet, worn tilted back, its band cut in paper. */
export const CONRADE_HAT =
  'M-18.4 -8.6C-22 -16.6 -13 -26 1 -26.6C14 -27 22.6 -21.4 21.6 -14.6C14 -12 -4 -10.6 -18.4 -8.6Z'
export const CONRADE_HAT_CUT = gouge(-17, -11.2, 19.6, -16.2, 0.9, -0.8)

/** A reveller's visor over the eyes, in paper, with its eyehole in ink and its tie behind. */
export const MASK =
  'M-4 -10C4 -12.5 12 -11.5 16.5 -7.5L17 -4.5L21 2.4L16.5 3.6C12 5.4 5 5.5 -2 3.4C-4.5 -0.5 -5.5 -6 -4 -10Z'
export const MASK_TIE = 'M-3.5 -5C-10 -4 -15 -1 -20 5C-18 -1 -13 -6.5 -3.5 -8.5Z'
export const MASK_EYE = 'M6.5 -3.8Q10 -6.4 13.2 -3.8Q10 -1.6 6.5 -3.8Z'

/**
 * Dogberry's head: "as pretty a piece of flesh as any in Messina". The man's
 * head with a full jowl swelling under the jaw, and DOGBERRY_CHEEK, the
 * curve of a round cheek and the fold of a double chin cut in paper, so the
 * face reads as fleshy at panel size. (A round of paper on the cheek was
 * tried first, and read as a gaping mouth.)
 */
export const HEAD_DOGBERRY =
  'M-10 23C-12 17 -17 12 -18 3C-19 -11 -9 -21 3 -21C11 -21 16 -15 16 -9L16.4 -5.4L22 3.2L17 5.4L17.8 8.4L16.4 10L18.6 13.2C19.8 18.4 16.6 23.4 9.6 24.6C5 25.4 -1 25.6 -5 24.8Z'
export const DOGBERRY_CHEEK =
  gouge(2.4, 3.4, 9.8, 11.6, 0.8, 2.2) + gouge(3.6, 20.6, 14.4, 19.4, 0.8, 1)
/** His flat cap, wide in the brim, cut round its band. */
export const DOGBERRY_CAP =
  'M-20 -8C-23 -17 -13 -27 1 -27.4C14 -27.6 23 -21.6 25 -14C19 -11 -4 -10.6 -20 -8Z'
export const DOGBERRY_CAP_CUT = gouge(-18, -11.2, 23, -15.2, 1, -0.8)

/** Verges' close cap, over the crown, and its edge cut in paper. */
export const VERGES_CAP =
  'M-15.6 -8.4C-16.4 -17.4 -8 -23 1 -23C9.4 -23 14.6 -18.6 15.4 -11.6C6 -13 -6.6 -11.6 -15.6 -8.4Z'
export const VERGES_CAP_CUT = gouge(-14.6, -10.6, 14.6, -13.4, 0.9, -0.6)

/** A watchman's felt hat: a tall flat-topped crown and a brim wide before and behind. */
export const WATCH_HAT =
  'M-26 -8.6C-14 -12.6 8 -13.6 26 -11.6L25.6 -8.4C19 -9 14.6 -9.6 12.4 -11L11.4 -27.6C3 -30.6 -6 -30.6 -12.6 -27.6L-13.6 -10.6C-18 -10.2 -22.4 -9.6 -26 -8.6Z'
export const WATCH_HAT_CUT = gouge(-13, -15.4, 12, -15.8, 0.9)

/**
 * The Friar's hood, down, lying in folds on his shoulders behind his neck,
 * in the figure's frame (the Romeo and Juliet kit's COWL, set to this kit's
 * height).
 */
export const COWL =
  'M9 -137C4 -146 -8 -150 -19 -147C-28 -144 -32 -134 -32 -121C-32 -108 -30 -95 -26 -82C-22 -93 -18 -105 -13 -114C-5 -119 4 -125 9 -137Z'
export const COWL_CUTS =
  gouge(-22, -139, -28, -94, 0.9, 1.2) +
  gouge(-14, -144, 5, -133, 0.8, -1.5) +
  gouge(-16, -130, -20, -102, 0.7, 0.8)
/** The Friar's girdle: a cord knotted at the waist, its end hanging to the knee. */
export const FRIAR_CORD =
  gouge(-13, -91, 14, -90, 1.4) +
  gouge(8, -89, 11, -44, 1.3, -0.4) +
  gouge(8.2, -70, 12.6, -67, 1.6) +
  gouge(9, -56, 13.2, -53, 1.6)

/**
 * A watchman's bill: a staff from `foot` to `top` with a hooked blade and a
 * spike at its head, facing along +x. Returned as parts of the figure that
 * holds it, so the halo cuts it free of the ground as one shape with him.
 */
export function bill(foot: P, top: P): Part[] {
  const a = Math.atan2(top[1] - foot[1], top[0] - foot[0])
  const u: P = [Math.cos(a), Math.sin(a)]
  const v: P = [-u[1], u[0]]
  const at = (x: number, y: number) =>
    `${n(top[0] + u[0] * x + v[0] * y)} ${n(top[1] + u[1] * x + v[1] * y)}`
  const blade =
    `M${at(-2, 1.6)}L${at(12, 1.6)}L${at(22, 0)}L${at(12, -1.8)}` +
    `L${at(6, -2)}C${at(8, -8)} ${at(4, -14)} ${at(-4, -15)}` +
    `C${at(-2, -11)} ${at(-4, -7)} ${at(-10, -4)}L${at(-12, -1.6)}Z` +
    `M${at(-6, 1.4)}L${at(-2, 7)}L${at(0, 1.4)}Z`
  return [{ d: limb([foot, top]), w: 3.4 }, { d: blade }]
}

// ── Pieces ───────────────────────────────────────────────────────────────────

const pt = (p: P) => `${n(p[0])} ${n(p[1])}`

/**
 * A hand at rest, the fingers closed together: a small mitten along the
 * forearm. For a hand that does nothing, where a fanned hand would draw the
 * eye and a round one would read as a clenched fist.
 */
export function mitt(wrist: P, angle: number, size = 1): Part {
  const a = deg(angle)
  const u: P = [Math.cos(a), Math.sin(a)]
  const v: P = [-u[1], u[0]]
  const at = (x: number, y: number): P => [
    wrist[0] + (u[0] * x + v[0] * y) * size,
    wrist[1] + (u[1] * x + v[1] * y) * size,
  ]
  return {
    d: `M${pt(at(-1, -3.4))}L${pt(at(6, -3.8))}Q${pt(at(11.6, -3))} ${pt(at(11.6, 0))}Q${pt(at(11.6, 3))} ${pt(at(6, 3.6))}L${pt(at(-1, 3.2))}Z`,
  }
}

/** The angle in degrees of the last segment of a limb, for the hand at its end. */
export function endAngle(pts: P[]) {
  const a = pts[pts.length - 2]
  const b = pts[pts.length - 1]
  return (Math.atan2(b[1] - a[1], b[0] - a[0]) * 180) / Math.PI
}

/**
 * A short cloak hung from the far shoulder, falling to the thigh, its hem
 * swung back by `swing` units. With `long`, it falls to the knee, as the
 * Prince's does.
 */
export function cloak(swing = 0, long = false) {
  const b = long ? -34 : -58
  return `M-2 -142C-14 -136 -21 -116 -23 -94C-24.4 -78 ${n(-25 - swing)} ${b + 12} ${n(-26 - swing)} ${b}L${n(-8 - swing * 0.4)} ${b + 4}C-8 -84 -7 -112 2 -134Z`
}
export const cloakCuts = (swing = 0, long = false) =>
  gouge(-12, -128, -20 - swing * 0.8, long ? -40 : -64, 1.8, 1) +
  gouge(-4, -126, -10 - swing * 0.4, long ? -42 : -66, 1.6, 0.6)

/**
 * Don John's long cloak, closed about him from the shoulders to the knee, as
 * still as a statue: "too like an image".
 */
export const LONG_CLOAK =
  'M-6 -143C-18 -137 -25 -114 -27 -88C-28.4 -72 -29 -58 -30 -44L22 -44C20.6 -58 19 -72 17.4 -92C16 -114 12 -136 5 -143C1 -145 -2 -145 -6 -143Z'
export const LONG_CLOAK_CUTS =
  gouge(-14, -118, -22, -48, 1.8, 1.4) +
  gouge(2, -98, 4, -48, 2, -0.6) +
  gouge(12, -98, 16, -48, 1.6, -0.8)

/** The folded arms: the near forearm laid across the chest over the far hand. */
const FOLDED: Piece[] = [
  {
    d: limb([
      [-4, -130],
      [-13, -108],
      [10, -113],
    ]),
    w: 8.6,
  },
  mitt([10, -113], -12, 0.9),
  [
    {
      d: limb([
        [4, -130],
        [14, -106],
        [-10, -103],
      ]),
      w: 9,
      sep: 1.6,
    },
    { ...mitt([-10, -103], 178, 0.9), sep: 1.6 },
  ],
]

// ── The builder ──────────────────────────────────────────────────────────────

export type Look =
  | 'benedick'
  | 'benedick-shaved'
  | 'claudio'
  | 'don-pedro'
  | 'don-john'
  | 'leonato'
  | 'beatrice'
  | 'hero'
  | 'borachio'
  | 'conrade'
  | 'dogberry'
  | 'verges'
  | 'watchman'
  | 'friar'
  | 'ursula'

/** How big each person is, against a man of 1: Hero is "Leonato's short daughter". */
const SIZE: Record<Look, number> = {
  benedick: 1,
  'benedick-shaved': 1,
  claudio: 0.97,
  'don-pedro': 1,
  'don-john': 1,
  leonato: 0.97,
  beatrice: 0.95,
  hero: 0.82,
  borachio: 0.98,
  conrade: 1,
  dogberry: 1,
  verges: 0.9,
  watchman: 1,
  friar: 0.97,
  ursula: 0.93,
}

/** A hand: open with the fingers apart, pointing with one finger, one finger raised, at rest, or hidden. */
export type HandKind = 'open' | 'point' | 'finger' | 'mitt' | 'none'

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
  /** The head's centre and its tilt in degrees (forward is positive). */
  head?: { at?: P; rot?: number }
  far?: ArmPose
  near?: ArmPose
  /** Arms folded across the chest (Don John's), in place of `far` and `near`. */
  folded?: boolean
  /** Hip, knee and foot of each leg, for the men. */
  legs?: { far: P[]; near: P[] }
  /** A short cloak, and how far its hem swings back. */
  cloak?: number
  /** A gown's hem: how far it reaches ahead of the waist and behind it. */
  hem?: { front?: number; back?: number }
  masked?: boolean
  eye?: 'open' | 'down' | 'none'
  /** No circlet, cap or hat. */
  bare?: boolean
  /** A rapier sheathed at the hip. */
  sword?: boolean
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

const GOWNED: Look[] = ['leonato', 'beatrice', 'hero', 'dogberry', 'verges', 'friar', 'ursula']
const WOMEN: Look[] = ['beatrice', 'hero', 'ursula']
/** The long gowns of the old and the officers: shoulders and waist, in units. */
const GOWN_WIDTH: Partial<Record<Look, [number, number]>> = {
  leonato: [30, 24],
  dogberry: [36, 40],
  verges: [26, 20],
  friar: [30, 26],
}

function headOf(look: Look) {
  if (look === 'benedick') return HEAD_BENEDICK
  if (look === 'claudio') return HEAD_YOUTH
  if (look === 'don-john') return HEAD_DON_JOHN
  if (look === 'dogberry') return HEAD_DOGBERRY
  if (WOMEN.includes(look)) return HEAD_WOMAN
  return HEAD_MAN
}

function build(p: Pose) {
  const look = p.look
  const woman = WOMEN.includes(look)
  const gowned = GOWNED.includes(look)
  const h = p.head ?? {}
  const hAt: P = h.at ?? (woman ? [3, -154] : [3, -160])
  const headT = `translate(${n(hAt[0])} ${n(hAt[1])}) rotate(${h.rot ?? 0})`
  const armW = look === 'hero' ? 8.6 : woman ? 7.8 : look === 'leonato' ? 10 : 8.4
  const handOf = (a: ArmPose, sep?: number): Part[] => {
    const kind = a.hand ?? 'mitt'
    const wrist = a.pts[a.pts.length - 1]
    const angle = a.deg ?? endAngle(a.pts)
    if (kind === 'none') return []
    if (kind === 'mitt') return [{ ...mitt(wrist, angle, woman ? 0.85 : 1), sep }]
    if (kind === 'point')
      return pointingHand(wrist, angle, woman ? 0.9 : 1, a.thumb ?? 1).map((q) => ({ ...q, sep }))
    if (kind === 'finger') return warningHand(wrist, angle, { size: woman ? 13 : 15, sep })
    return hand(wrist, angle, {
      size: a.size ?? (woman ? 13.5 : 15),
      spread: a.spread ?? 14,
      thumb: a.thumb,
      sep,
    })
  }
  const armOf = (a: ArmPose, near: boolean): Part[] => {
    const sep = near ? 1.5 : undefined
    return [{ d: limb(a.pts), w: armW, sep }, ...handOf(a, sep)]
  }

  const parts: Piece[] = []
  let cuts = ''
  const sword = p.sword && !gowned ? sheathed([0, -74], 1, 76) : undefined
  const folded = p.folded || (look === 'don-john' && !p.far && !p.near)
  if (!folded && p.far) parts.push(armOf(p.far, false))
  if (!gowned) {
    const legs = p.legs ?? MEN_LEGS
    const leg = (pts: P[]): Part[] => [{ d: limb(pts), w: 9 }, shoe([pts[pts.length - 1][0], 0], 1)]
    parts.push(...leg(legs.far))
    if (p.cloak !== undefined || look === 'don-pedro') {
      const swing = p.cloak ?? 0
      parts.push({ d: cloak(swing, look === 'don-pedro') })
      cuts += cloakCuts(swing, look === 'don-pedro')
    }
    if (sword) parts.push(sword.scabbard)
    parts.push({
      d: limb([
        [0, -138],
        [0, -72],
      ]),
      w: 22,
    })
    parts.push({ d: doublet([0, -138], [0, -70], 1, { width: 28, hem: 16, flare: 6 }) })
    parts.push(...leg(legs.near))
    if (look === 'don-john') {
      parts.push({ d: LONG_CLOAK })
      cuts += LONG_CLOAK_CUTS
    } else {
      // the doublet's buttons down the front and the girdle at the waist
      cuts += gouge(7.6, -128, 8.6, -84, 0.9, 0.4) + gouge(-11, -79, 12, -80, 1.1)
    }
  } else if (woman) {
    parts.push({
      d: gown([0, -132], [0, -94], 0, 1, {
        shoulder: 24,
        waistW: 16,
        front: p.hem?.front ?? 30,
        back: p.hem?.back ?? 36,
      }),
    })
    // the bodice's point, and two folds of the skirt
    cuts +=
      gouge(-8, -95, 8.4, -94, 1, 0.8) +
      gouge(-6, -84, -20, -8, 1.8, 1) +
      gouge(8, -84, 18, -8, 1.8, -1)
  } else {
    // A long gown, belted: Leonato's, the officers' (Dogberry "hath two
    // gowns"), and the Friar's habit, girdled with a cord.
    const [shoulder, waistW] = GOWN_WIDTH[look] ?? [30, 24]
    const stout = look === 'dogberry' ? 8 : 0
    if (look === 'friar') parts.push({ d: COWL })
    parts.push({
      d: gown([0, -136], [0, -90], 0, 1, {
        shoulder,
        waistW,
        front: p.hem?.front ?? 24 + stout,
        back: p.hem?.back ?? 28 + stout,
      }),
    })
    parts.push(shoe([10 + stout, 0], 1))
    cuts +=
      (look === 'friar' ? FRIAR_CORD + COWL_CUTS : gouge(-12 - stout, -91, 13 + stout, -90, 1.4)) +
      gouge(-4, -80, -14 - stout, -8, 1.8, 1) +
      gouge(8, -80, 14 + stout, -8, 1.8, -1)
  }
  if (look === 'claudio') parts.push({ d: CLAUDIO_HAIR, t: headT })
  if (look === 'don-john') parts.push({ d: DON_JOHN_HAIR, t: headT })
  if (look === 'hero') parts.push({ d: HERO_HAIR, t: headT })
  if (look === 'beatrice') parts.push({ d: BEATRICE_HAIR, t: headT })
  if (look === 'ursula') parts.push({ d: COIF, t: headT })
  parts.push({ d: headOf(look), t: headT })
  if (!p.bare && !p.masked && look === 'borachio') parts.push({ d: BORACHIO_CAP, t: headT })
  if (!p.bare && !p.masked && look === 'conrade') parts.push({ d: CONRADE_HAT, t: headT })
  if (!p.bare && look === 'don-john') parts.push({ d: DON_JOHN_HAT, t: headT })
  if (!p.bare && look === 'dogberry') parts.push({ d: DOGBERRY_CAP, t: headT })
  if (!p.bare && look === 'verges') parts.push({ d: VERGES_CAP, t: headT })
  if (!p.bare && look === 'watchman') parts.push({ d: WATCH_HAT, t: headT })
  if (look === 'hero') parts.push({ d: HERO_PLAIT, t: headT, sep: 1.4 })
  if (folded) parts.push(...FOLDED)
  else if (p.near) parts.push(armOf(p.near, true))
  return { parts, cuts, headT, hilt: sword?.hilt }
}

/**
 * One of the people of the play, cut from the block: placed with its feet at
 * `at`, scaled by `scale` (on top of the person's own size), and turned to
 * face left with `flip`. `children` are drawn last, in the figure's own frame
 * (a purse, a book, a candle held in the hand).
 */
export function Person({
  pose,
  at,
  scale = 1,
  flip = false,
  children,
}: {
  pose: Pose
  at: P
  scale?: number
  flip?: boolean
  children?: ReactNode
}) {
  const { parts, cuts, headT, hilt } = build(pose)
  const look = pose.look
  const s = scale * SIZE[look]
  const eye = pose.eye ?? 'open'
  const bare = pose.bare || pose.masked
  return (
    <CutFigure
      parts={parts}
      cuts={cuts || undefined}
      transform={`translate(${n(at[0])} ${n(at[1])}) scale(${n(flip ? -s : s)} ${n(s)})`}
    >
      <g transform={headT}>
        {look === 'benedick' && <path d={BENEDICK_BEARD_CUTS} fill={PAPER} />}
        {(look === 'benedick' || look === 'benedick-shaved' || look === 'don-pedro') && (
          <path d={HAIR_CUTS} fill={PAPER} />
        )}
        {(look === 'borachio' || look === 'conrade') && bare && <path d={HAIR_CUTS} fill={PAPER} />}
        {look === 'claudio' && <path d={CLAUDIO_HAIR_CUTS} fill={PAPER} />}
        {look === 'don-john' && (
          <>
            <path d={DON_JOHN_HAIR_CUTS} fill={PAPER} />
            <path d={DON_JOHN_FROWN + DON_JOHN_MOUTH} fill={PAPER} />
            {!pose.bare && <path d={DON_JOHN_HAT_CUT} fill={PAPER} />}
          </>
        )}
        {look === 'leonato' && (
          <>
            <path d={LEONATO_HAIR} fill={PAPER} stroke={INK} strokeWidth={1} />
            <path d={LEONATO_HAIR_STRANDS} fill="none" stroke={INK} strokeWidth={0.8} />
            <path d={FULL_BEARD} fill={PAPER} stroke={INK} strokeWidth={0.9} />
            <path d={FULL_BEARD_STRANDS} fill="none" stroke={INK} strokeWidth={0.8} />
            <path d={WHITE_BROW} fill={PAPER} />
          </>
        )}
        {look === 'beatrice' && (
          <path d={BEATRICE_CAUL_NET} fill="none" stroke={PAPER} strokeWidth={0.8} />
        )}
        {look === 'hero' && <path d={HERO_FILLET + HERO_PLAIT_CUTS} fill={PAPER} />}
        {look === 'borachio' && !bare && <path d={BORACHIO_CAP_CUT} fill={PAPER} />}
        {look === 'conrade' && !bare && <path d={CONRADE_HAT_CUT} fill={PAPER} />}
        {look === 'dogberry' && (
          <>
            <path d={DOGBERRY_CHEEK} fill={PAPER} />
            {!bare && <path d={DOGBERRY_CAP_CUT} fill={PAPER} />}
          </>
        )}
        {look === 'verges' && (
          <>
            <path d={OLD_HAIR} fill={PAPER} stroke={INK} strokeWidth={0.9} />
            <path d={OLD_BEARD} fill={PAPER} stroke={INK} strokeWidth={0.9} />
            <path d={OLD_STRANDS} fill="none" stroke={INK} strokeWidth={0.8} />
            <path d={WHITE_BROW} fill={PAPER} />
            {!bare && <path d={VERGES_CAP_CUT} fill={PAPER} />}
          </>
        )}
        {look === 'watchman' && !bare && <path d={WATCH_HAT_CUT} fill={PAPER} />}
        {look === 'friar' && (
          <>
            <path d={TONSURE} fill={PAPER} />
            <path d={TONSURE_SHINE} fill={PAPER} />
            <path d={TONSURE_STRANDS} fill="none" stroke={INK} strokeWidth={0.9} />
          </>
        )}
        {look === 'ursula' && (
          <path d={COIF_EDGE} fill="none" stroke={PAPER} strokeWidth={1.8} strokeLinecap="round" />
        )}
        {look === 'don-pedro' && !bare && (
          <path d={CIRCLET} fill={PAPER} stroke={INK} strokeWidth={1.1} strokeLinejoin="round" />
        )}
        {pose.masked ? (
          <>
            <path d={MASK_TIE} fill={PAPER} />
            <path d={MASK} fill={PAPER} stroke={INK} strokeWidth={0.9} />
            <path d={MASK_EYE} fill={INK} />
          </>
        ) : (
          eye !== 'none' && <path d={eye === 'down' ? EYE_DOWN : EYE} fill={PAPER} />
        )}
      </g>
      {hilt && <path d={hilt} fill={PAPER} stroke={INK} strokeWidth={0.8} />}
      {children}
    </CutFigure>
  )
}
