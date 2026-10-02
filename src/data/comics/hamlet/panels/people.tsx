import type { CSSProperties, ReactNode } from 'react'

import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { gouge, n, ribbon } from '@/components/comics/linocut/carve'

import {
  CutFigure,
  doublet,
  gown,
  hand,
  hilt,
  limb,
  rapier,
  sheathed,
  shoe,
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
  HEAD_GIRL,
  HEAD_MAN,
  HEAD_WOMAN,
  OLD_HAIR,
  OLD_STRANDS,
  VEIL,
  WHITE_BROW,
  pointingHand,
} from '../../romeo-and-juliet/panels/acts-3-4-kit'
import {
  CIRCLET,
  HEAD_YOUTH,
  VERGES_CAP,
  VERGES_CAP_CUT,
  cloak,
  cloakCuts,
  endAngle,
  mitt,
} from '../../much-ado-about-nothing/panels/people'
import {
  GAOLER_HELMET,
  GAOLER_HELMET_CUT,
  GRATIANO_CAP,
  GRATIANO_CAP_CUT,
  GRATIANO_FEATHER,
  GRATIANO_FEATHER_CUTS,
  HAIR_SHORT,
  LORENZO_BONNET,
  LORENZO_BONNET_CUT,
  NAPE_HAIR,
  RUFF,
  SALARINO_CAP,
  SALARINO_CAP_CUT,
  SOLANIO_BEARD,
  SOLANIO_BEARD_CUTS,
} from '../../the-merchant-of-venice/panels/people'
import {
  ANGER,
  CROWN,
  CROWN_BAND,
  EAR,
  FLUSH,
  FROWN,
  MILAN_HAT,
  MILAN_HAT_CUT,
  MIRANDA_FALL,
  MIRANDA_FALL_STRANDS,
  MIRANDA_HAIR,
  MIRANDA_LOCK,
  MIRANDA_LOCK_CUT,
  MIRANDA_STRANDS,
  PROSPERO_LINES,
  gripHand,
  seatedFrame,
} from '../../the-tempest/panels/people'

export {
  CutFigure,
  hand,
  hilt,
  limb,
  mitt,
  endAngle,
  gripHand,
  pointingHand,
  rapier,
  shoe,
  warningHand,
  seatedFrame,
  CROWN,
  CROWN_BAND,
  EYE,
  EYE_DOWN,
  HEAD_MAN,
  HEAD_WOMAN,
  HEAD_YOUTH,
  type P,
  type Part,
  type Piece,
}

/**
 * THE PEOPLE OF ELSINORE: one figure kit for every Hamlet panel, so that a
 * student meets the same Hamlet, the same Ghost and the same Claudius from
 * the battlements to the last scene. Draw every recurring character with
 * `Person`, and the Ghost with `Ghost`, never with a new outline; for a pose
 * they cannot make, cut the figure from the heads and pieces below, as the
 * kit's docblock in the Tempest allows. A change here changes every panel
 * that uses it: preview them all before changing one. Cut first for the
 * panels of moments 1 to 5 (Act 1). An artist who needs a person not here
 * (Reynaldo, a Captain) adds a `Look` for them
 * below, in the same way, and says so in this docblock.
 *
 * The cutting tools (CutFigure, the open hand with its fingers apart, the
 * doublet, the gown, the shoe, the rapier) are the Romeo and Juliet kit's
 * (../../romeo-and-juliet/panels/verona-kit.tsx); the men's and women's heads
 * and the old man's beard that kit's acts-3-4-kit.tsx; the hand at rest, the
 * youth's head and the short cloak the Much Ado kit's; the caps, the ruff and
 * the steel cap the Merchant kit's; the King's crown, the grip and the flush
 * the Tempest kit's. They are re-exported, not copied, so one hand cuts every
 * Shakespeare play on the site. A figure is cut as the reference panel cuts
 * Fred (src/data/comics/a-christmas-carol/counting-house.tsx): a paper halo
 * round every part, so it reads as one black shape with one carved outline,
 * then the parts in ink, then the paper cuts of folds and features. `Person`
 * builds it from a pose in its own frame: facing right, feet at (0, 0), a man
 * about 182 units tall, the head centred on (3, -160). Place it with `at`,
 * `scale` and `flip` (to face left).
 *
 * ── THIS PLAY'S OWN RULES, which every panel keeps ─────────────────────────
 * - THE GHOST is a pale armoured figure, cut in PAPER with ink edges (`Ghost`),
 *   never gory, never a skeleton, never a corpse: the man as he was. In the
 *   closet scene too ("My father, in his habit as he liv'd!", 3.4) he is the
 *   same figure.
 * - Violence is suggested, never shown. Polonius dies behind the arras unseen;
 *   Ophelia's drowning is told, never drawn; Yorick's is a clean plain skull
 *   in Hamlet's hand and nothing else; the duel shows the foils, the cup and
 *   the faces, and no wound, no blood and no body. Hamlet's end is Horatio at
 *   his side and Fortinbras arriving, not a body on the floor.
 * - "To be, or not to be" is Hamlet in thought: no bodkin raised, no blade
 *   turned on himself.
 * - Ophelia in her madness is drawn with dignity and grief, never as a
 *   spectacle, and her flowers are her own.
 * - RED is never put on a mouth, a chin or a hand: on this site it was twice
 *   read as blood. A flush goes on the cheek (FLUSH, ANGER).
 *
 * ── WHAT THE PLAY SAYS OF THEM, and so what is drawn ────────────────────────
 * (the held edition, src/data/full-texts/hamlet.ts, Project Gutenberg #1524).
 * Shakespeare describes the Ghost closely and almost nobody else. Where he is
 * silent a person is drawn plainly in the dress of about 1600, the play's own
 * time, and told from the others by a hat or a cut of hair, invented only for
 * that and noted here. Nothing is taken from a film, television or stage
 * production.
 *
 * - THE GHOST: "A figure like your father, Armed at point exactly, cap-à-pie"
 *   and "Arm'd ... From top to toe" (1.2), "in complete steel" (1.4); "he
 *   wore his beaver up", "A countenance more in sorrow than in anger", "very
 *   pale", his eyes fixed "Most constantly", "His beard was grizzled ... A
 *   sable silver'd" (1.2); "with solemn march Goes slow and stately by them
 *   ... Within his truncheon's length" (1.2); "With martial stalk" (1.1). So
 *   he is in full plate from the helmet to the feet, cut in paper, the
 *   helmet's visor raised over the brow so the face shows; the brows are drawn
 *   up in sorrow, not down in anger; the eye is a dark fixed oval; the beard is
 *   cut in ink with paper strands through it, black silvered; and he carries
 *   a commander's truncheon, a short baton, never a drawn sword.
 * - HAMLET wears "my inky cloak" and "customary suits of solemn black"
 *   (1.2); he is "young Hamlet" (1.1) and "thou noble youth" (1.5). So he is
 *   the youth's head, beardless, in a black doublet and hose with no ruff and
 *   no paper ornament, and a black cloak to the knee. Nothing describes his
 *   hair; it is dark and falls to the jaw (HAMLET_HAIR), invented only so he
 *   is known at a glance, and he goes bareheaded.
 * - HORATIO is "a scholar" (1.1), Hamlet's "fellow-student" from Wittenberg
 *   (1.2). So he wears a scholar's cap with a flat square top (HORATIO_CAP)
 *   and a scholar's gown to the calf over his doublet, with a plain white
 *   band at the neck. Beardless, as a student.
 * - MARCELLUS, BARNARDO and FRANCISCO are the watch, soldiers on the platform:
 *   "Shall I strike at it with my partisan?" (1.1), "'Tis bitter cold"
 *   (1.1). So they wear a steel cap (the Merchant kit's GAOLER_HELMET), a
 *   buff jerkin, boots and a cloak against the cold, and carry a partisan
 *   (`partisan`). Barnardo has a short dark beard, invented only to tell him
 *   from Marcellus.
 * - CLAUDIUS is the King, who "may smile, and smile, and be a villain" (1.5)
 *   and "drains his draughts of Rhenish down" (1.4). He wears the King's
 *   crown (the Tempest kit's CROWN, in paper; a panel about the crown may
 *   print it in red with `crownRed`), a short dark beard, invented only to
 *   tell him from his nephew, and a king's gown to the floor with a broad
 *   collar of fur. `mouth: 'smile'` gives him the smile.
 *   Hamlet's names for him ("a satyr", "the bloat King") stay in his mouth:
 *   Claudius is drawn plainly, not as a caricature.
 * - GERTRUDE is the Queen, and not young ("at your age The hey-day in the
 *   blood is tame", 3.4): a woman's head, a veil falling behind it, a small
 *   crown over the veil, and a gown to the floor.
 * - POLONIUS is old: Hamlet reads to him that "old men have grey beards, that
 *   their faces are wrinkled" (2.2). So he has a full white beard, a white
 *   brow, white hair at the nape and the lines of age, under a flat black
 *   bonnet worn level, in a counsellor's long gown.
 * - LAERTES is young and leaving for France: "Costly thy habit as thy purse
 *   can buy, But not express'd in fancy; rich, not gaudy" (1.3), and is
 *   praised "for his weapon" (5.2). So he is dressed in the fashion: a small
 *   cap with a feather (the Merchant kit's GRATIANO_CAP), a ruff, a short
 *   cloak and a rapier (`sword`). A short pointed beard (LAERTES_BEARD) is
 *   invented only to tell him from Hamlet when both are bareheaded.
 * - OPHELIA is "a green girl" to her father (1.3), "the fair Ophelia" (3.1),
 *   unmarried, so her dark hair is long and loose down her back (the Tempest
 *   kit's long hair), bound with a paper fillet (OPHELIA_FILLET), in a long
 *   gown. A little smaller than the men.
 * - ROSENCRANTZ and GUILDENSTERN are Hamlet's schoolfellows, "of so young
 *   days brought up with him" (2.2), and the King cannot tell them apart:
 *   "Thanks, Rosencrantz and gentle Guildenstern" (2.2). So they are dressed
 *   alike, a doublet, a ruff and a short cloak, and told apart only by their
 *   caps (Rosencrantz a flat bonnet, Guildenstern a round cap with a turned-up
 *   brim) and Guildenstern's short beard.
 * - OSRIC fusses with his hat: "Put your bonnet to his right use; 'tis for the
 *   head" (5.2). So he is a young courtier in a tall hat with a great curling
 *   feather (OSRIC_PLUME) and a ruff.
 * - FORTINBRAS is "young Fortinbras, Of unimproved mettle, hot and full"
 *   (1.1), a prince at the head of an army. So he is the youth's head in a
 *   prince's circlet (the Much Ado kit's CIRCLET, in paper), in a breastplate
 *   over his doublet, with a cloak and a rapier.
 * - THE FIRST PLAYER has grown a beard since Hamlet last saw him: "thy face is
 *   valanced since I saw thee last" (2.2). So he has a full dark beard
 *   (PLAYER_BEARD) and goes bareheaded, in a plain doublet and a cloak.
 * - A LORD or a LADY of the court is drawn plainly for the crowd: a lord in a
 *   bonnet and a ruff (`variant` 0 to 2 changes his cap and beard), a lady in
 *   a gown with a coif-like veil.
 * - THE GRAVEDIGGER (added for "The graveyard", 5.1) is a working man, "Enter
 *   two Clowns with spades", who has "been sexton here, man and boy, thirty
 *   years". So he wears a plain close cap (the Much Ado kit's VERGES_CAP, a
 *   working man's) and a plain jerkin, with no ruff, and the lines of age
 *   (PROSPERO_LINES) of a man who has dug graves for thirty years. (White
 *   hair at his nape under the cap was tried, and read as a helmet's strap.)
 *   Nothing else of him is described.
 * - THE PRIEST (added for "Ophelia's funeral", 5.1) speaks of "Her obsequies"
 *   and "the service of the dead"; nothing describes him. He is drawn plainly
 *   as a priest of the play's Denmark about 1600: bareheaded, in a long black
 *   gown to the floor and a white ruff, and the panel gives him his book.
 *
 * HANDS. Every open hand is `hand`'s, four fingers and a thumb cut apart and
 * fanned 18 degrees, so it reads as an open hand at panel size and never as a
 * fist; a pointing hand has one long finger and the rest curled; a raised
 * finger is the warning finger; a hand at rest is a small closed mitten; a
 * hand round a hilt, a cup or a truncheon is `grip`, which only ever closes
 * round something held. NO HAND IS RAISED FLAT ON A STRAIGHT ARM: at panel
 * size that reads as a salute. A beckoning hand is held out low, palm up,
 * from a bent arm.
 */

const pt = (p: P) => `${n(p[0])} ${n(p[1])}`

// ── Heads, hair, hats and faces, in profile facing right, centred on (0, 0) ─

/**
 * Hamlet's hair: dark, over the crown and down behind the ear to the jaw, its
 * lower edge broken into locks, its strands cut in paper (HAMLET_STRANDS),
 * with his ear cut in paper in front of it (the Tempest kit's EAR): dark
 * hair on a dark head with no ear and no strands reads as a hood. For
 * HEAD_YOUTH.
 */
export const HAMLET_HAIR =
  'M15.4 -10.6C14 -19 6 -24.4 -3 -23.4C-11.6 -22.4 -18.4 -16 -20 -7C-21.4 1 -20.4 9 -17.6 15.6L-15.4 13.4L-14.4 17.8L-11.4 14.6L-9.6 18.4L-8 12C-9.6 7 -9.4 2 -7.4 -2.6C-5 -8 0.6 -10.8 6.6 -10.8C9.8 -10.8 12.8 -10 15.4 -10.6Z'
export const HAMLET_STRANDS =
  gouge(12, -14.4, -2, -20.6, 0.8, 1.4) +
  gouge(8.6, -11.8, -12.6, -13, 0.9, 2.6) +
  gouge(1, -11.4, -16.6, -1.6, 0.9, 2.4) +
  gouge(-6.8, -5, -16.8, 9.6, 0.85, 1.4) +
  gouge(-11.2, 1.6, -12.6, 14.6, 0.8, 0.5)

/**
 * Laertes's short pointed beard, from below the ear along the jaw to a point
 * under the chin: ink on the ink head, so its strands and the line of the
 * mouth are cut in paper (LAERTES_BEARD_CUTS). For HEAD_YOUTH.
 */
export const LAERTES_BEARD =
  'M0.6 6.4C1.6 13.6 5.6 20.4 10.4 25.6C12 27.4 13.8 27 14.8 25C16.8 20.6 17.2 16.2 16.4 12.4L15.6 9.8C12.6 11.6 8.4 11.8 4.6 9.4Z'
export const LAERTES_BEARD_CUTS =
  gouge(3.6, 10.6, 8.4, 20.6, 0.8, -0.5) +
  gouge(8.6, 13.6, 12.4, 24, 0.8, -0.3) +
  gouge(10.6, 10.8, 15.4, 10.2, 0.6)

/**
 * Claudius's short dark beard, along the jaw and round the chin, with a
 * moustache over the lip; its strands cut in paper (CLAUDIUS_BEARD_CUTS).
 * For HEAD_MAN.
 */
export const CLAUDIUS_BEARD =
  'M-2.6 4C-3 12 0.4 19.6 5.8 23.6C9.6 26.4 14.4 26.4 17 23.4C19 21 19.2 17 18 13.6L17 12.5L16 10L17.5 8.5L17 5.5C14.4 7.6 11 8.2 8.4 8.6C5 8.8 1.6 7 -2.6 4Z'
export const CLAUDIUS_BEARD_CUTS =
  gouge(0.4, 9, 4, 19, 0.8, -0.6) +
  gouge(5.6, 12.6, 9, 22.6, 0.85, -0.4) +
  gouge(11, 13.4, 13.6, 23, 0.8, -0.2) +
  gouge(12, 10.6, 16.4, 10.4, 0.6)
/** A smile: the line of the mouth turned up at the corner, cut in paper. */
export const SMILE = 'M11.6 10.4Q13.8 13.2 17.2 10.6'

/** Barnardo's short dark beard (the Merchant kit's, which Solanio wears). */
export const BARNARDO_BEARD = SOLANIO_BEARD
export const BARNARDO_BEARD_CUTS = SOLANIO_BEARD_CUTS

/** The First Player's full dark beard: "thy face is valanced since I saw thee last". */
export const PLAYER_BEARD =
  'M-3.6 2C-4.4 12 -2 22 3.4 29C7 33.6 12 35.4 15.6 33C19 30.4 20 24.6 19.2 18.4L17.4 12.6L16 10L17.5 8.5L17 5.5C14 8 10 8.6 7 8.4C3 8 0 5.6 -3.6 2Z'
export const PLAYER_BEARD_CUTS =
  gouge(-0.6, 8, 3.6, 24, 0.85, -0.8) +
  gouge(4.6, 12, 8.4, 29, 0.9, -0.6) +
  gouge(10.4, 13.2, 13.2, 30.6, 0.9, -0.3) +
  gouge(15.2, 14.6, 16.4, 27, 0.8) +
  gouge(11.6, 10.6, 16.2, 10.4, 0.6)

/**
 * Horatio's scholar's cap: a close skull cap under a flat square top that
 * stands out beyond it front and back, its edges cut in paper
 * (HORATIO_CAP_CUT). (The Merchant kit's doctor's cap was tried first, and
 * at panel size its tall crown read as a fez.)
 */
export const HORATIO_CAP =
  'M-16.6 -9.4C-17.6 -13.4 -17.4 -16.8 -16 -19.2L-21.4 -21.4L-20.4 -25C-6.4 -28.2 10 -28.2 23.4 -24.8L22.8 -21.2L17.4 -19.2C18.4 -16.4 18.2 -13.4 17.4 -11.2C6 -12.8 -6 -11.8 -16.6 -9.4Z'
export const HORATIO_CAP_CUT =
  gouge(-19.6, -22.4, 21.8, -22.2, 0.9, -0.6) + gouge(-15.6, -12, 16.8, -13.6, 0.8, -0.4)

/** Polonius's flat black bonnet, worn level, its band cut in paper. */
export const POLONIUS_CAP =
  'M-19.4 -9.4C-22 -16.2 -14.4 -23.6 -0.4 -24.4C12.6 -25 21.4 -20.4 20.8 -13.8C12.4 -11.6 -6.4 -10.6 -19.4 -9.4Z'
export const POLONIUS_CAP_CUT = gouge(-18.4, -11.8, 19.6, -15, 0.9, -0.6)

/** A plain white band at the neck, a scholar's (Horatio), in paper. */
export const PLAIN_BAND =
  'M-10.6 19.6C-5.6 24.4 5.6 26 13.8 22L16.4 26.2C8.2 31 -4.6 30.8 -12.2 24.4Z'

/**
 * Ophelia's fillet: a band across her loose hair from the brow to behind the
 * ear, cut in paper, so her hair reads as a young woman's dressed and not as
 * a hood.
 */
export const OPHELIA_FILLET = gouge(12.6, -11.6, -14.6, -12.4, 1.4, -1.6)

/**
 * The Queen's crown: the King's, smaller, over her veil. Placed in her head's
 * frame with QUEEN_CROWN_T.
 */
export const QUEEN_CROWN_T = 'translate(0.4 -2.4) scale(0.8)'

/**
 * Osric's hat: the tall hat (the Tempest kit's MILAN_HAT) with a great
 * white feather curling back over the crown and down behind (OSRIC_PLUME,
 * printed in paper, its barbs cut in ink by OSRIC_PLUME_CUTS). (An ink
 * feather ran into the ink hat and the two read as a jester's hood.)
 */
export const OSRIC_PLUME = ribbon(
  [
    [10, -30],
    [2, -40],
    [-10, -44],
    [-22, -40],
    [-30, -30],
    [-32, -18],
    [-30, -8],
  ],
  10,
  0.55,
)
export const OSRIC_PLUME_CUTS =
  gouge(4, -37, -24, -38.6, 0.6, 3) +
  gouge(-25, -34, -28.6, -12, 0.55, -1) +
  'M-4 -40.4L-6 -36.4M-12 -42L-13 -37.6M-20 -40.6L-20.4 -36.4M-26 -34L-24.4 -30.6M-29 -24L-26.6 -21.6'

/** Sorrow: the brow drawn up towards the nose, not down as in anger. Fill PAPER. */
export const SORROW = gouge(4.8, -7.2, 15, -10.4, 1.15, -0.2)
/** An open mouth, calling out: a paper notch between the lips. */
export const OPEN_MOUTH = 'M17.2 8.2L13.2 8.8L16.6 10.2Z'
/** Eyes wide in fear: the eye cut larger, with a dark pupil set in it (WIDE_PUPIL). */
export const WIDE_EYE = 'M6.4 -4Q9.8 -7.4 13.4 -4Q9.8 -1 6.4 -4Z'
export const WIDE_PUPIL: [number, number, number] = [10.4, -4.1, 1.3]

// ── Garments and pieces, in the figure's frame ─────────────────────────────

/**
 * A partisan, the watch's spear: a staff from `foot` to `top` with a broad,
 * pointed blade and two curved lugs at its foot. Returned as parts of the
 * figure that holds it, so the halo cuts it free of the ground as one shape
 * with him.
 */
export function partisan(foot: P, top: P): Part[] {
  const a = Math.atan2(top[1] - foot[1], top[0] - foot[0])
  const u: P = [Math.cos(a), Math.sin(a)]
  const v: P = [-u[1], u[0]]
  const at = (x: number, y: number) =>
    `${n(top[0] + u[0] * x + v[0] * y)} ${n(top[1] + u[1] * x + v[1] * y)}`
  const blade =
    `M${at(-2, 2.4)}C${at(6, 5.4)} ${at(14, 4.2)} ${at(30, 0)}C${at(14, -4.2)} ${at(6, -5.4)} ${at(-2, -2.4)}Z` +
    `M${at(-1, 2)}C${at(-3, 6)} ${at(-6, 8.6)} ${at(-10, 9.4)}C${at(-7, 6.4)} ${at(-5.6, 4)} ${at(-5, 1.8)}Z` +
    `M${at(-1, -2)}C${at(-3, -6)} ${at(-6, -8.6)} ${at(-10, -9.4)}C${at(-7, -6.4)} ${at(-5.6, -4)} ${at(-5, -1.8)}Z`
  return [{ d: limb([foot, top]), w: 3.4 }, { d: blade }]
}

/** The fur collar of the King's gown, from shoulder to shoulder over the chest: paper, spotted in ink. */
const FUR_COLLAR = 'M-16 -146C-10 -136 4 -134 18 -142L20 -128C8 -120 -8 -122 -18 -132Z'
const FUR_SPOTS = 'M-12 -133l1.4 3.2M-5 -129l1.2 3.2M2 -128.6l1.2 3.2M9 -131l1 3.2M15 -135l1 3'

/**
 * A breastplate over the doublet, for Fortinbras at the head of his army: the
 * plate from the neck to below the waist, its rim and the line of its ridge
 * cut in paper (BREASTPLATE_CUTS).
 */
const BREASTPLATE =
  'M-7 -146C-15 -145 -19 -138 -19.6 -128C-20.4 -114 -18.6 -100 -17 -88L-16.4 -80C-6 -76 6 -76 15 -81L19 -88C21 -100 21.4 -114 19.6 -126C18.4 -137 14 -144 7 -147C3 -148.6 -3 -148.6 -7 -146Z'
const BREASTPLATE_CUTS =
  gouge(-16, -83, 17, -84, 1.4, 1.4) +
  gouge(-1, -140, -3, -86, 1.2, 0.6) +
  gouge(-9, -142, 9, -143, 1, -1)

/** A sash worn across the breastplate, from the far shoulder to the near hip, in paper. */
const SASH = gouge(-12, -140, 14, -92, 2.6, -1)

// ── The builder ──────────────────────────────────────────────────────────────

export type Look =
  | 'hamlet'
  | 'horatio'
  | 'marcellus'
  | 'barnardo'
  | 'francisco'
  | 'claudius'
  | 'gertrude'
  | 'polonius'
  | 'laertes'
  | 'ophelia'
  | 'rosencrantz'
  | 'guildenstern'
  | 'osric'
  | 'fortinbras'
  | 'player'
  | 'lord'
  | 'lady'
  | 'gravedigger'
  | 'priest'

/** How big each person is, against a man of 1. */
const SIZE: Record<Look, number> = {
  hamlet: 1,
  horatio: 0.99,
  marcellus: 1.01,
  barnardo: 1.02,
  francisco: 1,
  claudius: 1.02,
  gertrude: 0.93,
  polonius: 0.95,
  laertes: 1,
  ophelia: 0.88,
  rosencrantz: 0.99,
  guildenstern: 0.99,
  osric: 0.97,
  fortinbras: 1.01,
  player: 1,
  lord: 1,
  lady: 0.92,
  gravedigger: 0.98,
  priest: 0.97,
}

const WOMEN: Look[] = ['gertrude', 'ophelia', 'lady']
const WATCH: Look[] = ['marcellus', 'barnardo', 'francisco']
/** Long gowns to the floor over no visible legs: the King and his counsellor. */
const GOWNED_MEN: Look[] = ['claudius', 'polonius', 'priest']
const YOUTHS: Look[] = ['hamlet', 'laertes', 'osric', 'fortinbras']
const RUFFED: Look[] = ['laertes', 'rosencrantz', 'guildenstern', 'osric', 'lord', 'priest']

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
  /** The head's centre and its tilt in degrees (forward is positive). */
  head?: { at?: P; rot?: number }
  /** The line of the body, neck to hip (to the waist, for a gown): to lean, stoop or kneel. */
  body?: { neck?: P; hip?: P }
  far?: ArmPose
  near?: ArmPose
  /** Hip, knee and ankle of each leg, for the men in hose. The ankle sits 3 above the sole. */
  legs?: { far: P[]; near: P[] }
  /** A cloak, its hem swung back this far (Hamlet always wears his). */
  cloak?: number
  /** A long gown's hem: how far it reaches ahead of the waist and behind it. */
  hem?: { front?: number; back?: number }
  /**
   * Seated, for the gowned figures (the King, the Queen, Polonius, the
   * women): the seat's height under the hips and where the lap ends. The
   * head, neck and waist move down with the seat; take the arms' points
   * from `seatedFrame`.
   */
  seated?: { seat: number; knee?: P }
  /** 'down' is the vailed lid of grief or thought; 'wide' is fear. */
  eye?: 'open' | 'down' | 'shut' | 'wide' | 'none'
  /** The brow drawn down in anger (FROWN), or up towards the nose in sorrow (SORROW). */
  brow?: 'frown' | 'sorrow'
  mouth?: 'open' | 'smile'
  /** A red flush on the cheek (FLUSH), or anger (ANGER, with the frown). Never the mouth. */
  flush?: boolean | 'anger'
  /** No hat, cap or crown. */
  bare?: boolean
  /** A rapier sheathed at the hip. */
  sword?: boolean
  /** The King's crown printed in the spot colour, for a panel whose subject it is. */
  crownRed?: boolean
  /** A lord's cap and beard (0 to 2). */
  variant?: number
  /**
   * A partisan held in the far or near hand (give that hand 'grip'), from its
   * foot to its head, in the figure's frame. Held in the far hand it stands
   * behind the body; in the near hand, in front of it, the fist closed over it.
   */
  partisan?: { foot: P; top: P; hand: 'far' | 'near' }
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

/** A man's legs on a seat `seat` units high, knees forward to `reach`, feet on the ground. */
export function seatedLegs(seat: number, reach = 34): { far: P[]; near: P[] } {
  return {
    far: [
      [-2, -seat],
      [reach - 4, -seat - 2],
      [reach - 6, -3],
    ],
    near: [
      [2, -seat],
      [reach + 2, -seat - 1],
      [reach + 2, -3],
    ],
  }
}

/**
 * A long gown on a seated figure, facing right: the bodice from `neck` to
 * `waist`, the skirt over the lap to the `knee` and falling from it to the
 * hem on the ground in front of the shins; behind, it falls to the seat.
 */
function seatedGown(
  neck: P,
  waist: P,
  seat: number,
  knee: P,
  { shoulder = 24, waistW = 17 }: { shoulder?: number; waistW?: number } = {},
): string {
  const h = shoulder / 2
  const t1: P = [neck[0] - h * 0.55, neck[1] - 4]
  const c1: P = [neck[0] - h, neck[1] - 4]
  const s1: P = [neck[0] - h, neck[1] + 4]
  const w1: P = [waist[0] - waistW / 2, waist[1]]
  const back: P = [waist[0] - waistW / 2 - 5, -seat + 1]
  const under: P = [knee[0] - 10, -seat + 3]
  const hemB: P = [knee[0] - 9, 0]
  const hemF: P = [knee[0] + 13, 0]
  const kf: P = [knee[0] + 7, knee[1] - 2]
  const w2: P = [waist[0] + waistW / 2, waist[1] + 2]
  const s2: P = [neck[0] + h, neck[1] + 4]
  const c2: P = [neck[0] + h, neck[1] - 4]
  const t2: P = [neck[0] + h * 0.55, neck[1] - 4]
  return (
    `M${pt(t1)}Q${pt(c1)} ${pt(s1)}L${pt(w1)}Q${pt([back[0] - 3, (w1[1] + back[1]) / 2])} ${pt(back)}` +
    `L${pt(under)}Q${pt([under[0] - 2, under[1] + 20])} ${pt(hemB)}L${pt(hemF)}` +
    `Q${pt([hemF[0] + 1, (hemF[1] + kf[1]) / 2])} ${pt(kf)}Q${pt([knee[0] - 4, knee[1] - 12])} ${pt(w2)}` +
    `L${pt(s2)}Q${pt(c2)} ${pt(t2)}Z`
  )
}

/** A riding boot to below the knee, the watch's: the leg to the knee, then the boot to the sole. */
function bootParts(knee: P, ankle: P, w: number): Part[] {
  const top: P = [knee[0] + (ankle[0] - knee[0]) * 0.12, knee[1] + (ankle[1] - knee[1]) * 0.12]
  return [
    { d: limb([top, ankle]), w: w + 2.4 },
    {
      d: `M${n(ankle[0] - 6)} ${n(ankle[1] - 6)}L${n(ankle[0] + 6)} ${n(ankle[1] - 5)}C${n(ankle[0] + 11)} ${n(ankle[1] - 4)} ${n(ankle[0] + 14)} ${n(ankle[1] - 1)} ${n(ankle[0] + 14)} ${n(ankle[1] + 3)}L${n(ankle[0] - 7)} ${n(ankle[1] + 3)}Z`,
    },
  ]
}
/** The turned-down top of a boot below the knee, in paper. */
function bootTop(knee: P, ankle: P, w: number): string {
  const t = 0.16
  const c: P = [knee[0] + (ankle[0] - knee[0]) * t, knee[1] + (ankle[1] - knee[1]) * t]
  const L = Math.hypot(ankle[0] - knee[0], ankle[1] - knee[1]) || 1
  const v: P = [-(ankle[1] - knee[1]) / L, (ankle[0] - knee[0]) / L]
  const h = w / 2 + 1.6
  return gouge(c[0] + v[0] * h, c[1] + v[1] * h, c[0] - v[0] * h, c[1] - v[1] * h, 1.2)
}

function hatOf(look: Look, p: Pose): { d: string; cut?: string; paper?: boolean } | undefined {
  if (p.bare) return undefined
  if (look === 'horatio') return { d: HORATIO_CAP, cut: HORATIO_CAP_CUT }
  if (WATCH.includes(look)) return { d: GAOLER_HELMET, cut: GAOLER_HELMET_CUT }
  if (look === 'polonius') return { d: POLONIUS_CAP, cut: POLONIUS_CAP_CUT }
  if (look === 'laertes') return { d: GRATIANO_CAP, cut: GRATIANO_CAP_CUT }
  if (look === 'rosencrantz') return { d: LORENZO_BONNET, cut: LORENZO_BONNET_CUT }
  if (look === 'guildenstern') return { d: SALARINO_CAP, cut: SALARINO_CAP_CUT }
  if (look === 'osric') return { d: MILAN_HAT, cut: MILAN_HAT_CUT }
  if (look === 'gravedigger') return { d: VERGES_CAP, cut: VERGES_CAP_CUT }
  if (look === 'lord') {
    const v = p.variant ?? 0
    if (v === 1) return { d: SALARINO_CAP, cut: SALARINO_CAP_CUT }
    return { d: LORENZO_BONNET, cut: LORENZO_BONNET_CUT }
  }
  return undefined
}

function headShape(look: Look): string {
  if (YOUTHS.includes(look)) return HEAD_YOUTH
  if (look === 'ophelia') return HEAD_GIRL
  if (look === 'gertrude' || look === 'lady') return HEAD_WOMAN
  return HEAD_MAN
}

function build(p: Pose) {
  const look = p.look
  const woman = WOMEN.includes(look)
  const gownedMan = GOWNED_MEN.includes(look)
  const gowned = woman || gownedMan
  const seat = gowned ? p.seated?.seat : undefined
  const sf = seat !== undefined ? seatedFrame(seat) : undefined
  const defNeck: P = sf ? sf.neck : woman ? [0, -132] : [0, -138]
  const defHip: P = sf ? sf.waist : woman ? [0, -94] : gownedMan ? [0, -90] : [0, -70]
  const neck: P = p.body?.neck ?? defNeck
  const hip: P = p.body?.hip ?? defHip
  const hAt: P = p.head?.at ?? [neck[0] + 3, neck[1] - 22]
  const headT = `translate(${n(hAt[0])} ${n(hAt[1])}) rotate(${p.head?.rot ?? 0})`
  // Hair that hangs from the head but does not turn with it.
  const hangT = `translate(${n(hAt[0])} ${n(hAt[1])})`
  const girl = look === 'ophelia'
  const armW = woman ? 7.6 : look === 'claudius' ? 9.4 : 8.6
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

  if (p.far) parts.push(armOf(p.far, false))
  const pole = p.partisan ? partisan(p.partisan.foot, p.partisan.top) : []
  if (p.partisan?.hand === 'far') {
    parts.push(...pole)
    // the far fist closed again over the staff
    if (p.far && (p.far.hand ?? 'mitt') === 'grip') parts.push(...handOf(p.far))
  }

  const swordAt: P = [hip[0], hip[1] - 4]
  const sword = p.sword && !woman && !gownedMan ? sheathed(swordAt, 1, 76) : undefined
  const legs = p.legs ?? MEN_LEGS
  const last = (a: P[]) => a[a.length - 1]
  const watch = WATCH.includes(look)
  const legParts = (pts: P[]): Part[] => {
    const ankle = last(pts)
    if (watch && pts.length >= 3)
      return [{ d: limb(pts.slice(0, -1)), w: 9 }, ...bootParts(pts[pts.length - 2], ankle, 9)]
    return [{ d: limb(pts), w: 9 }, shoe([ankle[0], ankle[1] + 3], 1)]
  }

  if (gowned && sf) {
    // A long gown on a seated figure: the lap, and the skirt falling to the feet.
    const knee = p.seated?.knee ?? ([34, -(seat ?? 0) - 8] as P)
    parts.push({
      d: seatedGown(neck, hip, seat ?? 0, knee, {
        shoulder: woman ? 24 : 32,
        waistW: woman ? 16 : 26,
      }),
    })
    parts.push(shoe([knee[0] + 8, 0], 1))
    cuts +=
      gouge(hip[0] - 8, hip[1] + 1, hip[0] + 8.4, hip[1] + 2, 1, 0.8) +
      gouge(knee[0] - 2, knee[1] + 8, knee[0] + 2, -10, 1.6, -0.6) +
      gouge(hip[0] + 6, hip[1] + 6, knee[0] - 4, knee[1] + 2, 1.4, -1)
  } else if (woman) {
    // A long gown to the floor, the bodice drawn in at the waist.
    parts.push({
      d: gown(neck, hip, 0, 1, {
        shoulder: 24,
        waistW: 16,
        front: p.hem?.front ?? (girl ? 28 : 30),
        back: p.hem?.back ?? (girl ? 34 : 38),
      }),
    })
    // the bodice's point, and two folds of the skirt
    cuts +=
      gouge(hip[0] - 8, hip[1] - 1, hip[0] + 8.4, hip[1], 1, 0.8) +
      gouge(hip[0] - 6, hip[1] + 10, hip[0] - 20, -8, 1.8, 1) +
      gouge(hip[0] + 8, hip[1] + 10, hip[0] + 18, -8, 1.8, -1)
  } else if (gownedMan) {
    // The King's gown and the counsellor's: to the floor, girdled.
    const king = look === 'claudius'
    parts.push({
      d: gown(neck, hip, 0, 1, {
        shoulder: king ? 34 : 30,
        waistW: king ? 28 : 24,
        front: p.hem?.front ?? 22,
        back: p.hem?.back ?? 28,
      }),
    })
    parts.push(shoe([hip[0] + 10, 0], 1))
    cuts +=
      gouge(hip[0] - 13, hip[1] - 1, hip[0] + 13, hip[1], 1.8) +
      gouge(hip[0] + 8, neck[1] + 10, hip[0] + 15, -8, 1.3, -0.6) +
      gouge(hip[0] - 4, hip[1] + 10, hip[0] - 14, -8, 1.8, 1) +
      gouge(hip[0] + 4, hip[1] + 10, hip[0] + 6, -8, 1.6, -0.4)
  } else {
    // The men in doublet and hose.
    parts.push(...legParts(legs.far))
    const cloaked = p.cloak !== undefined || look === 'hamlet' || watch
    if (cloaked) {
      const swing = p.cloak ?? 0
      const long = look === 'hamlet'
      const t =
        neck[0] !== 0 || neck[1] !== -138
          ? `translate(${n(neck[0])} ${n(neck[1] + 138)})`
          : undefined
      parts.push({ d: cloak(swing, long), t })
      cuts += t ? '' : cloakCuts(swing, long)
    }
    if (sword) parts.push(sword.scabbard)
    if (look === 'horatio') {
      // The scholar's gown to the calf, open down the front, over his doublet.
      parts.push(...legParts(legs.near))
      parts.push({
        d: gown(neck, [hip[0], hip[1] - 22], hip[1] + 42, 1, {
          shoulder: 30,
          waistW: 24,
          front: 14,
          back: 20,
        }),
      })
      cuts +=
        gouge(hip[0] + 6, neck[1] + 8, hip[0] + 10, hip[1] + 38, 1.7, -0.6) +
        gouge(hip[0] - 6, hip[1] - 14, hip[0] - 14, hip[1] + 38, 1.8, 1)
    } else {
      const coat = watch ? { width: 30, hem: 22, flare: 8 } : { width: 28, hem: 16, flare: 6 }
      parts.push({ d: limb([neck, hip]), w: coat.width * 0.76 })
      parts.push({ d: doublet(neck, hip, 1, coat) })
      if (look === 'fortinbras') parts.push({ d: BREASTPLATE })
      parts.push(...legParts(legs.near))
      const u: P = [(hip[0] - neck[0]) / 68, (hip[1] - neck[1]) / 68]
      const front = (a: number): P => [neck[0] + u[0] * a + 7.6, neck[1] + u[1] * a]
      const b0 = front(10)
      const b1 = front(52)
      if (look === 'fortinbras') cuts += BREASTPLATE_CUTS + SASH
      else if (watch)
        // the buff jerkin's belt and its front edge
        cuts +=
          gouge(b0[0], b0[1], b1[0], b1[1], 1, 0.4) +
          gouge(hip[0] - 13, hip[1] - 9, hip[0] + 14, hip[1] - 10, 1.8)
      else if (look !== 'hamlet')
        // the doublet's buttons down the front and the girdle at the waist
        cuts +=
          gouge(b0[0], b0[1], b1[0], b1[1], 0.9, 0.4) +
          gouge(
            hip[0] - coat.width * 0.42,
            hip[1] - 9,
            hip[0] + coat.width * 0.44,
            hip[1] - 10,
            1.1,
          )
      else cuts += gouge(hip[0] - 11, hip[1] - 9, hip[0] + 12, hip[1] - 10, 1)
    }
    if (watch)
      for (const leg of [legs.far, legs.near])
        if (leg.length >= 3) cuts += bootTop(leg[leg.length - 2], last(leg), 9)
  }

  // The head, and what is behind or on it.
  const hat = hatOf(look, p)
  if (look === 'ophelia') parts.push({ d: MIRANDA_FALL, t: hangT }, { d: MIRANDA_HAIR, t: headT })
  if (look === 'gertrude' || look === 'lady') parts.push({ d: VEIL, t: headT })
  if (look === 'hamlet') parts.push({ d: HAMLET_HAIR, t: headT })
  if (hat && look !== 'polonius') parts.push({ d: NAPE_HAIR, t: headT })
  if (look === 'claudius') parts.push({ d: NAPE_HAIR, t: headT })
  if (look === 'laertes') parts.push({ d: LAERTES_BEARD, t: headT })
  if (look === 'claudius') parts.push({ d: CLAUDIUS_BEARD, t: headT })
  if (look === 'barnardo' || look === 'guildenstern' || (look === 'lord' && p.variant === 2))
    parts.push({ d: BARNARDO_BEARD, t: headT })
  if (look === 'player') parts.push({ d: PLAYER_BEARD, t: headT })
  parts.push({ d: headShape(look), t: headT })
  if (look === 'laertes' && hat) parts.push({ d: GRATIANO_FEATHER, t: headT })
  if (hat && !hat.paper) parts.push({ d: hat.d, t: headT })
  if (look === 'ophelia') parts.push({ d: MIRANDA_LOCK, t: hangT, sep: 1.3 })

  if (p.partisan?.hand === 'near') parts.push(...pole)
  if (p.near) parts.push(armOf(p.near, true))
  return { parts, cuts, headT, hangT, hat, hilt: sword?.hilt, neck, hip }
}

/**
 * One of the people of the play, cut from the block: placed with its feet at
 * `at`, scaled by `scale` (on top of the person's own size), and turned to
 * face left with `flip`. `children` are drawn last, in the figure's own frame
 * (a cup, a letter, a book held in the hand).
 */
export function Person({
  pose,
  at,
  scale = 1,
  flip = false,
  className,
  style,
  children,
}: {
  pose: Pose
  at: P
  scale?: number
  flip?: boolean
  className?: string
  style?: CSSProperties
  children?: ReactNode
}) {
  const { parts, cuts, headT, hangT, hat, hilt: hiltPath, neck } = build(pose)
  const look = pose.look
  const s = scale * SIZE[look]
  const eye = pose.eye ?? 'open'
  const transform = `translate(${n(at[0])} ${n(at[1])}) scale(${n(flip ? -s : s)} ${n(s)})`
  const bare = pose.bare || hat === undefined
  return (
    <CutFigure
      parts={parts}
      cuts={cuts || undefined}
      transform={transform}
      className={className}
      style={style}
    >
      {look === 'claudius' && (
        <g transform={`translate(${n(neck[0])} ${n(neck[1] + 138)})`}>
          <path d={FUR_COLLAR} fill={PAPER} stroke={INK} strokeWidth={0.9} />
          <path d={FUR_SPOTS} fill="none" stroke={INK} strokeWidth={1.3} strokeLinecap="round" />
        </g>
      )}
      <g transform={headT}>
        {look === 'hamlet' && (
          <>
            <path d={HAMLET_STRANDS} fill={PAPER} />
            <path d={EAR} fill="none" stroke={PAPER} strokeWidth={1.2} strokeLinecap="round" />
          </>
        )}
        {look === 'ophelia' && <path d={MIRANDA_STRANDS + OPHELIA_FILLET} fill={PAPER} />}
        {look === 'laertes' && <path d={LAERTES_BEARD_CUTS} fill={PAPER} />}
        {look === 'claudius' && <path d={CLAUDIUS_BEARD_CUTS} fill={PAPER} />}
        {(look === 'barnardo' ||
          look === 'guildenstern' ||
          (look === 'lord' && pose.variant === 2)) && <path d={BARNARDO_BEARD_CUTS} fill={PAPER} />}
        {look === 'player' && <path d={PLAYER_BEARD_CUTS} fill={PAPER} />}
        {look === 'gravedigger' && <path d={PROSPERO_LINES} fill={PAPER} />}
        {look === 'polonius' && (
          <>
            <path d={OLD_HAIR} fill={PAPER} stroke={INK} strokeWidth={0.9} />
            <path d={FULL_BEARD} fill={PAPER} stroke={INK} strokeWidth={0.9} />
            <path d={FULL_BEARD_STRANDS + OLD_STRANDS} fill="none" stroke={INK} strokeWidth={0.8} />
            <path d={WHITE_BROW + PROSPERO_LINES} fill={PAPER} />
          </>
        )}
        {(look === 'gertrude' || look === 'lady') && (
          <path
            d="M14.6 -12.2C8.2 -10.2 2.8 -4.6 0.8 2.4C-0.8 8.6 -2.2 14.4 -4.6 19.4"
            fill="none"
            stroke={PAPER}
            strokeWidth={1.6}
            strokeLinecap="round"
          />
        )}
        {bare && !WOMEN.includes(look) && look !== 'hamlet' && look !== 'polonius' && (
          <path d={HAIR_SHORT} fill="none" stroke={PAPER} strokeWidth={1.2} strokeLinecap="round" />
        )}
        {hat?.cut && <path d={hat.cut} fill={PAPER} />}
        {look === 'laertes' && hat && <path d={GRATIANO_FEATHER_CUTS} fill={PAPER} />}
        {look === 'osric' && hat && (
          <>
            <path d={OSRIC_PLUME} fill={PAPER} stroke={INK} strokeWidth={1.1} />
            <path d={OSRIC_PLUME_CUTS} fill={INK} />
          </>
        )}
        {look === 'claudius' && !pose.bare && (
          <>
            <path
              d={CROWN}
              fill={pose.crownRed ? RED : PAPER}
              stroke={INK}
              strokeWidth={1.1}
              strokeLinejoin="round"
            />
            <path d={CROWN_BAND} fill="none" stroke={INK} strokeWidth={1} />
          </>
        )}
        {look === 'gertrude' && !pose.bare && (
          <g transform={QUEEN_CROWN_T}>
            <path d={CROWN} fill={PAPER} stroke={INK} strokeWidth={1.3} strokeLinejoin="round" />
            <path d={CROWN_BAND} fill="none" stroke={INK} strokeWidth={1.2} />
          </g>
        )}
        {look === 'fortinbras' && !pose.bare && (
          <path d={CIRCLET} fill={PAPER} stroke={INK} strokeWidth={1.1} strokeLinejoin="round" />
        )}
        {RUFFED.includes(look) && <path d={RUFF} fill={PAPER} stroke={INK} strokeWidth={0.8} />}
        {look === 'horatio' && <path d={PLAIN_BAND} fill={PAPER} stroke={INK} strokeWidth={0.8} />}
        {eye === 'open' && <path d={EYE} fill={PAPER} />}
        {(eye === 'down' || eye === 'shut') && <path d={EYE_DOWN} fill={PAPER} />}
        {eye === 'wide' && (
          <>
            <path d={WIDE_EYE} fill={PAPER} />
            <circle cx={WIDE_PUPIL[0]} cy={WIDE_PUPIL[1]} r={WIDE_PUPIL[2]} fill={INK} />
          </>
        )}
        {pose.brow === 'frown' && <path d={FROWN} fill={PAPER} />}
        {pose.brow === 'sorrow' && <path d={SORROW} fill={PAPER} />}
        {pose.mouth === 'open' && <path d={OPEN_MOUTH} fill={PAPER} />}
        {pose.mouth === 'smile' && (
          <path d={SMILE} fill="none" stroke={PAPER} strokeWidth={1.2} strokeLinecap="round" />
        )}
        {pose.flush && (
          <path
            d={pose.flush === 'anger' ? ANGER : FLUSH}
            fill="none"
            stroke={RED}
            strokeWidth={1.7}
            strokeLinecap="round"
          />
        )}
      </g>
      {look === 'ophelia' && (
        <path d={MIRANDA_FALL_STRANDS + MIRANDA_LOCK_CUT} transform={hangT} fill={PAPER} />
      )}
      {hiltPath && <path d={hiltPath} fill={PAPER} stroke={INK} strokeWidth={0.8} />}
      {children}
    </CutFigure>
  )
}

// ── The Ghost ────────────────────────────────────────────────────────────────

/**
 * The Ghost's helmet, in the frame of HEAD_MAN: the bowl over the crown and
 * the back of the head, flaring into a guard over the nape, with a hinged
 * plate over the ear (GHOST_HELM); a low comb along the crown (GHOST_COMB);
 * and the visor raised, lying back over the brow with its point standing
 * forward above the face: "he wore his beaver up" (GHOST_VISOR). The face
 * is open from the brow to the chin. (The visor's point first stood out
 * past the nose, and over the profile it read as a beak.)
 */
export const GHOST_HELM =
  'M15.6 -9.6C16.4 -20 8.4 -27.4 -1 -27.4C-11.4 -27.4 -18.8 -19.4 -19.4 -8L-19.6 3.6C-20.4 7.6 -21.6 10.6 -23 13L-13.4 14.4C-11.6 11.4 -10.4 8.4 -9.6 5L-3.6 4.6L-1.6 -6C2.4 -8.8 9 -10 15.6 -9.6Z'
export const GHOST_COMB =
  'M9 -24.4C4 -33.4 -9 -34.8 -16.6 -24L-13.4 -22.4C-7.6 -29.6 3.4 -29 6.2 -22.6Z'
export const GHOST_VISOR =
  'M-2.4 -6C0.8 -14 7.6 -20.4 16 -24L19.4 -21.4L17.6 -18.6C12.4 -16.2 6.4 -11.8 1.6 -4.2Z'
/** The helmet's rims and rivets, the visor's sight, in ink. */
export const GHOST_HELM_CUTS =
  gouge(-16.4, -11, -3.4, -12.4, 0.9, 1) +
  gouge(-19, 4.4, -11, 6.6, 0.8, -0.6) +
  gouge(4.4, -12.4, 15.4, -19.8, 0.75, 0.3) +
  gouge(-12, -21.6, 4.6, -23.4, 0.6, 1.6)
/** "A countenance more in sorrow than in anger": the brow drawn up towards the nose. */
export const GHOST_BROW = gouge(4.6, -6.6, 14.8, -9.8, 1.5, -0.3)
/** "fix'd his eyes upon you ... Most constantly": a dark open eye. */
export const GHOST_EYE = 'M6.6 -3.4Q10 -6.2 13.2 -3.4Q10 -1.2 6.6 -3.4Z'
/** The line of the mouth, and the crease from the nose. */
export const GHOST_MOUTH = 'M16.4 10.2L12 10.8M16.6 3.6Q12.6 5 11.4 8.2'
/**
 * "His beard was grizzled ... A sable silver'd": a full beard in ink along
 * the jaw from below the ear to the chin, with a moustache, and strands of
 * paper through it (GHOST_BEARD_SILVER).
 */
export const GHOST_BEARD =
  'M-2.4 6.4C-2.6 14.6 1 22.4 6.6 27C10.6 30 15.6 30 18 26.6C19.6 24 19.6 19.6 18.4 16L17.4 12.6L16.8 10.2L17.6 8.4L17 5.6C14 8 10.6 8.6 7.6 8.6C4.2 8.6 1 7.8 -2.4 6.4Z'
export const GHOST_BEARD_SILVER =
  gouge(0.6, 10.6, 4.6, 22.6, 0.75, -0.6) +
  gouge(5.4, 13.6, 9, 26, 0.8, -0.4) +
  gouge(10.6, 14.6, 13.2, 26.6, 0.75, -0.2) +
  gouge(15, 15.6, 16.2, 24, 0.65) +
  gouge(9, 9.6, 15.4, 9.4, 0.55)

/** The gorget round the neck, two lames, in the figure's frame. */
const GORGET =
  'M-11 -151C-4.6 -156.6 7.4 -156.6 14 -151L14.6 -141.6C7 -146.4 -4.4 -146.4 -11.6 -141.6Z'
/** The cuirass, breast and back, from the gorget to the waist; its front swells to a point. */
const CUIRASS =
  'M-8 -147C-16 -146 -21 -139 -21.6 -128C-22.4 -114 -20.6 -100 -19 -88L-18.4 -82C-8 -78 6 -78 16 -83L21.6 -88C23.4 -100 23.6 -114 21.6 -126C20.4 -137 15 -145 8 -148C3 -149.6 -3 -149.6 -8 -147Z'
/** The tassets, the plates hung from the waist over the thighs. */
const TASSETS = 'M-19.6 -88L-24 -48C-10 -45 10 -45 23.6 -49L20.4 -88Z'
/** The plate's edges, in ink: the waist rim, the seam of breast and back, the tassets' lames. */
const ARMOUR_CUTS =
  gouge(-18.4, -86, 20.6, -87, 1.5, 1.6) +
  gouge(-2.6, -140, -4.6, -92, 1.2, 0.8) +
  gouge(-9, -143.6, 11, -144.6, 1.1, -1.2) +
  gouge(-20.2, -77, 21.6, -78, 1.4, 1.4) +
  gouge(-21.4, -66, 22.4, -67, 1.4, 1.4) +
  gouge(-22.6, -55.6, 23, -56.6, 1.3, 1.3) +
  gouge(0.6, -84, 1, -47.6, 1.1) +
  // the shadow down the back of the plate, cut as short upright ink strokes
  [-138, -126, -114, -102].map((y, i) => gouge(-19.6 + (i % 2), y, -18.6, y + 9, 0.8)).join('')

/** A plate's lame across a limb at `t` along it, as an ink cut. */
function lameAcross(a: P, b: P, t: number, w: number): string {
  const c: P = [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]
  const L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1
  const v: P = [-(b[1] - a[1]) / L, (b[0] - a[0]) / L]
  const h = w / 2 + 0.6
  return gouge(c[0] + v[0] * h, c[1] + v[1] * h, c[0] - v[0] * h, c[1] - v[1] * h, 1.1)
}

/**
 * The cop over a joint (a knee or an elbow) through `pts`, hip or shoulder to
 * the joint to the ankle or wrist: a lame cut just above the joint and one
 * just below it, so the plate reads as jointed there. (Rings were tried
 * first, and at panel size two knee rings read as a pair of eyes.)
 */
function copLames(pts: P[], w: number): string {
  if (pts.length < 3) return ''
  return lameAcross(pts[0], pts[1], 0.84, w) + lameAcross(pts[1], pts[2], 0.16, w)
}

/** The pauldron over a shoulder: a rounded plate laid along the upper arm, from shoulder towards elbow. */
function pauldron(sh: P, el: P): { d: string; lames: string } {
  const L = Math.hypot(el[0] - sh[0], el[1] - sh[1]) || 1
  const u: P = [(el[0] - sh[0]) / L, (el[1] - sh[1]) / L]
  const v: P = [-u[1], u[0]]
  const c: P = [sh[0] + u[0] * 5, sh[1] + u[1] * 5]
  const rx = 15
  const ry = 11.4
  const pts: P[] = []
  for (let i = 0; i < 18; i++) {
    const a = (i / 18) * Math.PI * 2
    const along = Math.cos(a) * rx
    const across = Math.sin(a) * ry
    pts.push([c[0] + u[0] * along + v[0] * across, c[1] + u[1] * along + v[1] * across])
  }
  let lames = ''
  for (const k of [-1, 4.4, 9.4]) {
    const m: P = [c[0] + u[0] * k, c[1] + u[1] * k]
    const h = ry * Math.sqrt(Math.max(0, 1 - (k / rx) ** 2)) - 1
    lames += gouge(m[0] + v[0] * h, m[1] + v[1] * h, m[0] - v[0] * h, m[1] - v[1] * h, 1, 1.4)
  }
  return { d: 'M' + pts.map(pt).join('L') + 'Z', lames }
}

/** A sabaton, the plate shoe, its heel at the ankle point and its sole 4 below it, toe forward; and its lames. */
function sabaton([x, y]: P): { d: string; lames: string } {
  return {
    d: `M${n(x - 6.4)} ${n(y - 4)}L${n(x + 6)} ${n(y - 4.4)}C${n(x + 12)} ${n(y - 3.4)} ${n(x + 15.6)} ${n(y)} ${n(x + 15.6)} ${n(y + 4)}L${n(x - 7)} ${n(y + 4)}Z`,
    lames: gouge(x + 4, y - 4, x + 6, y + 3, 0.9) + gouge(x + 9, y - 2.4, x + 10, y + 3.4, 0.8),
  }
}

export interface GhostPose {
  /** The head's tilt in degrees (forward is positive). */
  head?: { rot?: number }
  far?: ArmPose
  near?: ArmPose
  /** Hip, knee and ankle of each leg. The ankle sits 4 above the sole. */
  legs?: { far: P[]; near: P[] }
  /**
   * "Within his truncheon's length": the truncheon held in the near hand
   * (give that hand 'grip'), from its butt to its tip, in the figure's frame.
   */
  truncheon?: { from: P; to: P }
  eye?: 'open' | 'down'
}

const GHOST_LEGS = {
  far: [
    [-3, -70],
    [-5, -36],
    [-6, -4],
  ] as P[],
  near: [
    [3, -70],
    [5, -36],
    [7, -4],
  ] as P[],
}

/**
 * The Ghost of Hamlet's father, in his armour as the play describes it (see
 * the docblock above), cut in PAPER with ink edges and ink cuts, as the
 * Macbeth panels cut Banquo's ghost: he reads as light, never as a body.
 * In the frame of a man (feet at (0, 0), the head centred on (3, -160)),
 * placed with `at`, `scale` and `flip`. `children` are drawn last, in his
 * frame.
 *
 * He is cut as two figures in one frame: the body (the far arm, the legs, the
 * plate, the head and helmet), and over it the near arm with its pauldron,
 * its gauntlet and the truncheon, carved free of the body by its own ink
 * edge, so the lines of the plate are never cut across the arm in front.
 */
export function Ghost({
  pose,
  at,
  scale = 1,
  flip = false,
  className,
  style,
  children,
}: {
  pose: GhostPose
  at: P
  scale?: number
  flip?: boolean
  className?: string
  style?: CSSProperties
  children?: ReactNode
}) {
  const s = scale * 1.04
  const transform = `translate(${n(at[0])} ${n(at[1])}) scale(${n(flip ? -s : s)} ${n(s)})`
  const headT = `translate(3 -160) rotate(${pose.head?.rot ?? 0})`
  const legs = pose.legs ?? GHOST_LEGS
  const last = (a: P[]) => a[a.length - 1]
  const armW = 10.4
  const legW = 11
  const body: Piece[] = []
  let bodyCuts = ARMOUR_CUTS

  const handOf = (a: ArmPose): Part[] => {
    const kind = a.hand ?? 'mitt'
    const wrist = a.pts[a.pts.length - 1]
    const angle = a.deg ?? endAngle(a.pts)
    if (kind === 'none') return []
    if (kind === 'mitt') return [mitt(wrist, angle, 1.1)]
    if (kind === 'grip') return [gripHand(wrist, angle, 0.95)]
    if (kind === 'point') return pointingHand(wrist, angle, 1.05, a.thumb ?? 1)
    if (kind === 'finger') return warningHand(wrist, angle, { size: 16 })
    return hand(wrist, angle, { size: a.size ?? 16, spread: a.spread ?? 18, thumb: a.thumb })
  }

  if (pose.far) {
    body.push([{ d: limb(pose.far.pts), w: armW }, ...handOf(pose.far)])
    bodyCuts += copLames(pose.far.pts, armW)
  }
  const leg = (pts: P[]): Part[] => {
    const sb = sabaton(last(pts))
    bodyCuts += sb.lames + copLames(pts, legW)
    return [{ d: limb(pts), w: legW }, { d: sb.d }]
  }
  body.push(...leg(legs.far))
  body.push(...leg(legs.near))
  body.push({ d: CUIRASS })
  body.push({ d: TASSETS })
  body.push({ d: GORGET })
  body.push({ d: HEAD_MAN, t: headT })
  body.push({ d: GHOST_HELM, t: headT, sep: 1.2 })
  body.push({ d: GHOST_COMB, t: headT })
  body.push({ d: GHOST_VISOR, t: headT, sep: 1.2 })

  // The near arm, the pauldron over its shoulder, the gauntlet and the truncheon.
  const arm: Piece[] = []
  let armCuts = ''
  const near = pose.near
  if (near) {
    const pts = near.pts
    const pd = pts.length >= 2 ? pauldron(pts[0], pts[1]) : undefined
    const gripping = (near.hand ?? 'mitt') === 'grip'
    arm.push({ d: limb(pts), w: armW })
    if (pd) {
      arm.push({ d: pd.d })
      armCuts += pd.lames
    }
    armCuts += copLames(pts, armW)
    if (!gripping) arm.push(...handOf(near))
    if (pose.truncheon) arm.push({ d: limb([pose.truncheon.from, pose.truncheon.to]), w: 4.6 })
    if (gripping) arm.push({ ...handOf(near)[0], sep: 1.1 })
  }
  if (!near && pose.truncheon)
    body.push({ d: limb([pose.truncheon.from, pose.truncheon.to]), w: 4.6 })

  const eye = pose.eye ?? 'open'
  const truncheonBands = pose.truncheon
    ? lameAcross(pose.truncheon.from, pose.truncheon.to, 0.1, 4.6) +
      lameAcross(pose.truncheon.from, pose.truncheon.to, 0.9, 4.6)
    : ''
  return (
    <g transform={transform} className={className} style={style}>
      <CutFigure parts={body} cuts={bodyCuts} tone="paper">
        {!near && truncheonBands && <path d={truncheonBands} fill={INK} />}
        <g transform={headT}>
          <path d={GHOST_BEARD} fill={INK} />
          <path d={GHOST_BEARD_SILVER} fill={PAPER} />
          <path d={GHOST_HELM_CUTS + GHOST_BROW} fill={INK} />
          <path d={GHOST_MOUTH} fill="none" stroke={INK} strokeWidth={1.1} strokeLinecap="round" />
          <path d={eye === 'open' ? GHOST_EYE : EYE_DOWN} fill={INK} />
        </g>
      </CutFigure>
      {near && (
        <CutFigure parts={arm} cuts={armCuts || undefined} tone="paper" halo={1.5}>
          {truncheonBands && <path d={truncheonBands} fill={INK} />}
        </CutFigure>
      )}
      {children}
    </g>
  )
}
