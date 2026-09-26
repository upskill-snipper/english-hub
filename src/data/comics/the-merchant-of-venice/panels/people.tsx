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
  HEAD_MAN,
  HEAD_WOMAN,
  pointingHand,
} from '../../romeo-and-juliet/panels/acts-3-4-kit'
import {
  CIRCLET,
  HAIR_CUTS,
  MASK,
  MASK_EYE,
  MASK_TIE,
  cloak,
  cloakCuts,
  endAngle,
  mitt,
  WATCH_HAT,
  WATCH_HAT_CUT,
} from '../../much-ado-about-nothing/panels/people'

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
  mitt,
  endAngle,
  EYE,
  EYE_DOWN,
  HEAD_MAN,
  HEAD_WOMAN,
  type P,
  type Part,
  type Piece,
}

/**
 * THE PEOPLE OF VENICE AND BELMONT: one figure kit for every Merchant of
 * Venice panel, so that a student meets the same Shylock, the same Antonio and
 * the same Portia from the first act to the last. Draw every recurring
 * character with `Person` (or, for a pose it cannot make, with the heads and
 * pieces below), never with a new outline. A change here changes every panel
 * that uses it: preview them all before changing one. Cut first for the
 * panels of moments 1 to 5 (Act 1, Scene 1 to Act 2, Scene 7); an artist who
 * needs a person not here (Tubal, the Duke, Arragon, Balthazar, the gaoler)
 * adds a `Look` for them below, in the same way, and says so in this
 * docblock.
 *
 * The cutting tools (CutFigure, arm and its open hand with the fingers apart,
 * doublet, gown, shoe, the sheathed rapier) are the Romeo and Juliet kit's
 * (../../romeo-and-juliet/panels/verona-kit.tsx), and the hand at rest, the
 * short cloak and the visor are the Much Ado kit's
 * (../../much-ado-about-nothing/panels/people.tsx), re-exported, not copied:
 * the three plays are set in the same Italy in the same years, and one hand
 * cutting all of them keeps the site one artist. A figure is cut as the
 * reference panel cuts Fred (src/data/comics/a-christmas-carol/
 * counting-house.tsx): a paper halo round every part, so it reads as one
 * black shape with one carved outline, then the parts in ink, then the paper
 * cuts of folds and features. `Person` builds it from a pose in its own
 * frame: facing right, feet at (0, 0), a man about 182 units tall, the head
 * centred on (3, -160). Place it with `at`, `scale` and `flip` (to face
 * left).
 *
 * ── THIS PLAY'S OWN RULES, which every panel keeps ─────────────────────────
 * The play's characters speak antisemitism and racism. The art never adopts
 * it.
 * - SHYLOCK is drawn as an individual with dignity. His head is the same man's
 *   head every other man in this kit wears (HEAD_MAN): the same nose, the
 *   same brow, cut no differently. He stands upright; he is never drawn
 *   hunched, grasping, clutching money, or with any devil or animal imagery,
 *   whatever other characters call him. Nobody is drawn spitting on him or
 *   striking him: his own words carry that ("You call me misbeliever,
 *   cut-throat dog, / And spet upon my Jewish gaberdine", 1.3), and no slur or
 *   line of abuse is ever a panel's quotation. At the trial Portia asks
 *   "Which is the merchant here, and which the Jew?" (4.1): nothing in the
 *   play marks him out by his looks, and nothing here does either.
 * - THE PRINCE OF MOROCCO describes himself: "Mislike me not for my
 *   complexion, / The shadowed livery of the burnish'd sun" (2.1). He is
 *   drawn with the same dignity as every suitor, upright, with no caricature.
 *   Every face in this print is cut from the same black block, his as much as
 *   Portia's or Antonio's, so his complexion is left to his own proud words,
 *   as the pilot leaves Scrooge's blue lips to Dickens. Portia's "Let all of
 *   his complexion choose me so" (2.7) is never a caption.
 * - JESSICA leaving with the casket of ducats may be shown, with nothing
 *   demeaning in it.
 * - At the trial, the knife and the scales may be shown, but never touching
 *   or near Antonio's body, and Antonio stays clothed. Shylock's forced
 *   conversion and exit are drawn with gravity, never as comedy or
 *   humiliation.
 *
 * ── WHAT THE PLAY SAYS OF THEM, and so what is drawn ────────────────────────
 * (the held edition, src/data/full-texts/the-merchant-of-venice.ts, Project
 * Gutenberg #1515). Shakespeare describes almost nobody. Where he is silent a
 * person is drawn plainly in the dress of Venice in the 1590s, and is told
 * from the others by a hat or a cut of hair, invented only for that and noted
 * here; nothing is taken from a film, television or stage production.
 *
 * - SHYLOCK is old: "The difference of old Shylock and Bassanio" (2.5). He has
 *   a beard ("You that did void your rheum upon my beard", 1.3), and wears a
 *   gaberdine ("my Jewish gaberdine", 1.3), a long loose coat. So he has a
 *   full grey beard and grey hair, cut in paper with ink strands, and is
 *   bareheaded; his gaberdine is plain period dress, falling to the ankle,
 *   tied with a sash, with nothing on it to mark him. Nobody else in the kit
 *   wears a coat to the ankle, so he is known by it and his beard.
 * - ANTONIO is "the merchant" and a sad one: "In sooth I know not why I am
 *   so sad" (1.1); "A stage, where every man must play a part, / And mine a
 *   sad one" (1.1). His looks are not described. He wears a merchant's gown to
 *   the knee over his hose, girdled, and a round cap with a turned-up brim,
 *   and is clean-shaven: told from Shylock at a glance by the bare chin, the
 *   cap and the hose below the hem. His head is often bowed (`head.rot`).
 * - BASSANIO: "a Venetian, a scholar and a soldier" (1.2), who has lived
 *   "something showing a more swelling port / Than my faint means would grant
 *   continuance" (1.1). A young gentleman in a doublet and hose, a short cloak
 *   and a rapier, bareheaded, his short hair swept back (HAIR_SHORT).
 * - GRATIANO: "Let me play the fool" (1.1), and "speaks an infinite deal of
 *   nothing" (1.1). Not otherwise described. A doublet and a small cap with a
 *   feather curling back from it, which no one else wears.
 * - LORENZO is not described. A doublet and a flat bonnet worn tilted, its
 *   band cut in paper.
 * - SALARINO and SOLANIO are not described, and are always seen together.
 *   Salarino wears a round cap with a turned-up brim; Solanio goes
 *   bareheaded, with a short beard, so the two are told apart.
 * - PORTIA: "her sunny locks / Hang on her temples like a golden fleece"
 *   (1.1); "my little body is aweary of this great world" (1.2); "a lady
 *   richly left" (1.1). So she is small, a head shorter than the men, in a
 *   rich gown with a paper band at the neck, and her hair, the one fair head
 *   in the play, is cut in paper with ink strands, falling in locks at her
 *   temples and down her back.
 * - NERISSA, "her waiting-woman" (1.2), is not described. A plain gown and a
 *   linen coif (the Romeo and Juliet kit's COIF), so she is told from Portia
 *   at a glance.
 * - JESSICA is not described beyond "fair Jessica" and "the fair hand that
 *   writ" (2.4), which is praise, not colouring, so she is in ink like
 *   everyone else, with long dark hair loose down her back ('jessica'). On
 *   the night she leaves she is "above, in boy's clothes" (2.6), "in the
 *   lovely garnish of a boy", so 'jessica-page' is a slight figure in a
 *   doublet and hose with a small round cap over her hair.
 * - LAUNCELET GOBBO is Shylock's man, then Bassanio's: "I am famished in his
 *   service" (2.2). A plain jerkin and a close cap.
 * - THE PRINCE OF MOROCCO: "a tawny Moor all in white, and three or four
 *   followers accordingly" (2.1), and he swears "By this scimitar" (2.1). So
 *   his long robe is cut in PAPER, the one figure in the play who is, with a
 *   plain paper circlet for a prince, and a curved scimitar sheathed at his
 *   side. His followers (`morocco-follower`) are in white too, without the
 *   circlet.
 *
 * ADDED for the panels of moments 11 to 15 (Act 3, Scene 4 to Act 5, Scene
 * 1), for the people those scenes bring on:
 * - PORTIA AS THE DOCTOR ('portia-doctor'): "Enter Portia dressed like a
 *   doctor of laws" (4.1), whom Bellario's letter calls "a young doctor of
 *   Rome" with "so young a body with so old a head". So she wears a doctor's
 *   long dark robe to the floor, open down the front and without Shylock's
 *   sash, and a doctor's square cap, flat on top and wider there than at
 *   the brow (DOCTOR_CAP), which nobody else wears. (It was first cut with
 *   three ridges on its crown, and at panel size it read as a crown.) Her face is her own, beardless, and her fair hair is
 *   gathered up under the cap, a short paper lock showing at the nape
 *   (PORTIA_TUCKED), so a student still knows the one fair head in the play.
 *   She is as small as Portia is.
 * - NERISSA AS THE CLERK ('nerissa-clerk'): "Enter Nerissa dressed like a
 *   lawyer's clerk" (4.1), later "a little scrubbed boy, / No higher than
 *   thyself, the judge's clerk, a prating boy" (5.1). So a slight youth in a
 *   doublet and hose, as tall as Nerissa, bareheaded, the hair cut short
 *   like a boy's (HAIR_SHORT) where Nerissa wears a coif; a panel gives the
 *   clerk papers to carry. (A cap with a peak over the brow was tried first,
 *   and read as a modern cap.)
 * - THE DUKE OF VENICE ('duke') is not described. He sits in judgment in a
 *   long robe to the floor with a short cape across the shoulders, and wears
 *   the stiff cap of the Duke of Venice in the play's own years, rising to a
 *   horn at the back (DUKE_CAP): the dress of his office and place, which
 *   nobody else in the play wears.
 * - BALTHAZAR, Portia's servant, sent "In speed to Padua" (3.4), is not
 *   described. A doublet, a short cloak for the road and a brimmed hat (the
 *   Much Ado kit's WATCH_HAT), so he is told from Launcelet in his close cap.
 *
 * ADDED for the panels of moments 6 to 10 (Act 2, Scene 8 to Act 3, Scene 3):
 * - THE PRINCE OF ARRAGON ('arragon') is not described, but proud: "I will
 *   not jump with common spirits" and "I will assume desert" (2.9). A prince,
 *   so he wears the plain paper circlet the Prince of Morocco wears (and the
 *   Much Ado kit's Prince of Arragon, Don Pedro), with a long cloak to the
 *   knee and a rapier; he is in ink, so he is never taken for Morocco in his
 *   white robe.
 * - SALERIO, "my old Venetian friend" (3.2), comes to Belmont from Venice with
 *   Antonio's letter ("meeting with Salerio by the way"). Not described. A
 *   doublet, a short cloak for the road and a soft hat with a wide brim
 *   turned down (SALERIO_HAT), which nobody else wears.
 * - THE GAOLER of Act 3, Scene 3 ("Gaoler, look to him") is not described. A
 *   plain jerkin, the steel cap of an officer who guards a prisoner, a dome
 *   with a comb and a sloping brim (GAOLER_HELMET), which nobody else wears,
 *   and the keys of his office on a ring at his belt, cut in paper
 *   (GAOLER_KEYS). (A tall felt cap was tried first, and beside Antonio's cap
 *   read as a second of the same; then a hood, which at phone size read as
 *   long hair.)
 *
 * HANDS. Every open hand is `arm`'s, with four fingers and a thumb cut apart,
 * so it reads as an open hand at panel size and never as a fist; a pointing
 * hand has one long finger and the rest curled; a hand at rest by the side is
 * a small closed mitten. No hand is raised flat on a straight arm: at panel
 * size that reads as a salute.
 *
 * RED. The spot colour is never put on a mouth or a chin: on this site it
 * was twice read as blood (Hyde's anger, Juliet's lips beside the vial). A
 * flush, if a panel needs one, goes on the cheek.
 */

// ── Heads and hats, in profile facing right, centred on (0, 0) ──────────────

/**
 * Shylock's grey hair, round the back of the head from the temple to the
 * nape, in paper with an ink edge and ink strands (SHYLOCK_HAIR_STRANDS): more
 * strands than Leonato's white hair in Much Ado, so it reads as grey.
 */
export const SHYLOCK_HAIR =
  'M-0.5 -19.4C-8.5 -18.4 -14.6 -12 -15.8 -4C-17 5 -16 13 -12 20L-7 20.6C-9.8 13 -10.4 4.6 -8.6 -2.6C-6.8 -9.6 -3.4 -13.8 1.6 -16Z'
export const SHYLOCK_HAIR_STRANDS =
  'M-12.4 -6C-13.6 2 -13 10 -10.6 17M-6.6 -13C-9.6 -8 -11 -2 -11.4 4M-9.6 -10C-12 -4 -12.6 3 -12 10M-3 -16.6C-7 -13 -9 -8 -9.8 -3'
/** Ink strands in his full grey beard (the kit's FULL_BEARD), denser than an old man's white. */
export const SHYLOCK_BEARD_STRANDS =
  'M3 16C4.6 22 7.4 28 10.6 32M8.6 16.4C10 22 12.4 27 14.6 30.6M14.6 16C15.6 21 16.2 25 16.4 28.6M0.6 8C1.4 14 3 19 5.6 24M5.8 18C7.4 24 9 28 11.8 33.4M11.6 17.4C13 23 14 27 14.8 31'
/** His brow, grey: a paper cut with an ink line through it. */
export const SHYLOCK_BROW = gouge(6.4, -8.2, 15.4, -8.4, 1.3, -0.8)

/**
 * A bare head's short hair, swept back, for the men who go bareheaded: the
 * hairline cut in paper from the brow round in front of the ear to the nape,
 * the ear, and two strands sweeping back over the crown. Stroke in PAPER,
 * about 1.2. (The Much Ado kit's HAIR_CUTS, three broad parallel gouges over
 * the crown with no hairline, was used first, and at panel size its stripes
 * read as a cloth wound round the head: on Morocco, a turban the play does
 * not give him. The hairline is what makes the strands read as hair.)
 */
export const HAIR_SHORT =
  'M13.6 -12.4C6.4 -11.6 1.6 -8.4 -0.2 -3C-1.2 1.2 -2.6 4.6 -5.8 7.4' +
  'M-1.4 -3.2C-4.4 -3.8 -5.8 0 -4 3.2C-3 4.6 -1.4 4.2 -1 2.8' +
  'M8 -16.4C0 -17.6 -8 -14.6 -13.4 -7.4M4 -13C-3 -12.6 -9 -8 -12.4 0.4'

/**
 * Antonio's cap, as his portrait cuts it (../portraits/antonio.tsx): a soft
 * round crown, full enough to stand out a little over the narrow band of its
 * brim, worn level. ANTONIO_CAP_CUT is the line where the crown overhangs the
 * brim and two folds in the soft crown. (A round cap whose outline ran on
 * from the head's read at panel size as a helmet, and a flat-topped one as a
 * top hat of the wrong century.)
 */
export const ANTONIO_CAP =
  'M-17.4 -11C-21.2 -14 -20.8 -22 -14.4 -26.8C-8 -30.8 6 -31 13.8 -27.2C20 -24 21.8 -17.6 18.6 -13.4L18.8 -10.4C8 -11.6 -5 -10.8 -16.8 -8.4Z'
export const ANTONIO_CAP_CUT =
  gouge(-17.6, -12.4, 18.6, -14.2, 0.9, -0.4) +
  gouge(-9, -27.4, -13.4, -16.4, 0.6, 1.2) +
  gouge(5, -29, 3, -17, 0.6, -0.6)
/** Short hair at the nape under a cap. */
export const NAPE_HAIR = 'M-16 -6C-19 0 -18 8 -14 14L-9 16C-11 9 -11 2 -9 -5Z'

/**
 * Gratiano's cap: small and tilted back, with a feather curling back from
 * its band (GRATIANO_FEATHER, its barbs cut in paper by GRATIANO_FEATHER_CUTS).
 */
export const GRATIANO_CAP =
  'M-15 -9.6C-18 -17 -10 -24.6 1 -24.6C11 -24.6 17.4 -19.4 16.6 -12.4C8.4 -10.8 -4 -10.8 -15 -9.6Z'
export const GRATIANO_CAP_CUT = gouge(-14.4, -12.2, 16.2, -14.6, 0.9, -0.5)
export const GRATIANO_FEATHER =
  'M-2 -22C-8 -30 -18 -34 -28 -33C-32 -32.4 -34 -30 -33 -27.6C-24 -30.4 -13 -27.6 -5 -20.4Z'
export const GRATIANO_FEATHER_CUTS =
  gouge(-6, -24, -30, -30.6, 0.5, 0.8) + 'M-12 -27L-10 -24M-18 -29.4L-16.6 -26.4M-24 -30.8L-23 -28'

/** Lorenzo's flat bonnet, worn tilted forward, its band cut in paper. */
export const LORENZO_BONNET =
  'M-17.6 -7.4C-21.4 -15.4 -13 -25.4 1 -26.4C14 -27 23.6 -21.6 23 -14.4C15 -11.6 -3.4 -9.6 -17.6 -7.4Z'
export const LORENZO_BONNET_CUT = gouge(-16.6, -10, 21, -15.6, 0.9, -0.8)

/** Salarino's round cap with a turned-up brim, cut along its brim. */
export const SALARINO_CAP =
  'M-17 -5C-19 -14 -12 -23 -1 -24C9 -25 16 -20 17.5 -12L19 -9C12 -8 2 -8.5 -6 -8C-11 -7.6 -14.5 -6.5 -17 -5Z'
export const SALARINO_CAP_CUT = gouge(-16, -7.5, 18, -11, 1, -0.6)

/**
 * Solanio's short beard, from the ear along the jaw to the chin: ink on the
 * ink head, so its strands are cut in paper (SOLANIO_BEARD_CUTS).
 */
export const SOLANIO_BEARD =
  'M-3 4C-3 12 1 19 6.4 22.4C10 24.6 14.6 24.4 16.8 21.4C18.4 18.6 18 15.4 17 12.6L15.6 10C12 12.4 7 12 3.4 9Z'
export const SOLANIO_BEARD_CUTS =
  gouge(1, 9, 4.4, 18.6, 0.8, -0.5) +
  gouge(6.4, 13.4, 9, 21.6, 0.8, -0.4) +
  gouge(11.6, 14.6, 13.6, 21.6, 0.7)

/** Launcelet's close cap, over the crown, and its edge cut in paper. */
export const LAUNCELET_CAP =
  'M-15.6 -8.4C-16.4 -17.4 -8 -23 1 -23C9.4 -23 14.6 -18.6 15.4 -11.6C6 -13 -6.6 -11.6 -15.6 -8.4Z'
export const LAUNCELET_CAP_CUT = gouge(-14.6, -10.6, 14.6, -13.4, 0.9, -0.6)

/**
 * Portia's hair, "sunny locks" that "Hang on her temples like a golden
 * fleece": the one fair head in the play, so cut in PAPER, with an ink edge.
 * Drawn back over the crown, falling in a lock before the ear at the temple
 * and in a mass down her back to the shoulder blades; PORTIA_STRANDS are the
 * ink strands cut back into it, so it reads as hair and never as a hood.
 */
export const PORTIA_HAIR =
  'M13.4 -11.4C10 -20.8 -3 -24 -11.6 -18.6C-18.4 -14.2 -20.4 -5 -19.4 4C-21.6 8 -19.8 12 -21.4 16C-23.6 20 -21.4 24 -23.2 28C-24.2 32 -21 35.4 -17.4 34.2C-14.6 36.6 -11 35.4 -10.4 32.4C-9.4 26 -8.8 18 -8.8 10C-8.8 3 -7 -3 -3.4 -7.2C-2.6 -2.6 -1.6 3 -2.4 9C-1.4 11.2 0.6 11.4 1.8 10C3.2 4 3.4 -3 2.2 -8.8C6 -11 9.6 -11.8 13.4 -11.4Z'
/**
 * The strands, cut bold (stroke 1.1) and many: with four fine ones the first
 * cut read at panel size as a pale veil over the head, not as hair.
 */
export const PORTIA_STRANDS =
  'M9 -15.4C2 -17 -7 -14 -13 -6M5.4 -12C-2 -12.6 -9 -8 -13.8 1M-15.6 -1C-16.6 9 -17.4 19 -19.6 29M-12.4 6C-12.8 15 -13.4 23 -14.6 31M-0.6 -5.4C0.4 -1 0.6 3 0 7.6M-5 -9.6C-9 -4 -10.6 2 -10.8 8M1 -18.6C-5 -18.4 -11 -15 -15.4 -9'

/** Jessica's hair, dark, long and loose down her back, its strands cut in paper. */
export const JESSICA_HAIR =
  'M13 -11C9 -20.5 -5 -22 -12.5 -15.5C-18.5 -9.5 -19 2 -17.5 14C-16 30 -18 46 -22 60C-18 62 -12 62 -8.6 60C-6.4 46 -5.4 32 -6 20C-6.6 8 -4 -3 4 -8.5C8 -11 10.5 -11.5 13 -11Z'
export const JESSICA_STRANDS =
  gouge(4, -15.5, -14, 4, 0.55, 3) +
  gouge(-12, 8, -14.4, 42, 0.6, 1.4) +
  gouge(-9, 22, -11.6, 54, 0.55, 1.2)

/** The small round cap of Jessica's page's suit, over her hair, cut round its band. */
export const PAGE_CAP =
  'M-17 -4C-20 -14 -12 -23.6 0 -24C11 -24.4 17.4 -18.6 16.4 -10.6C8 -9.4 -6 -7.6 -17 -4Z'
export const PAGE_CAP_CUT = gouge(-16, -6.6, 16, -12, 0.9, -0.8)

/** A gentleman's ruffled collar, the small ruff of the 1590s, in paper: placed at the neck. */
export const RUFF = 'M-9 21.6C-4 25.4 4 26.6 9.6 23.4L10.4 27.4C4 30.6 -5 29.6 -10.6 25.6Z'

/**
 * The doctor's square cap Portia wears to the court: flat on top and wider
 * there than at the brow, its band and the edge of its top cut in paper
 * (DOCTOR_CAP_CUT).
 */
export const DOCTOR_CAP =
  'M-16.6 -8.8L-21 -24.4C-8 -29.6 10 -30 22.8 -25L17.8 -11C6.6 -12.6 -6 -11.8 -16.6 -8.8Z'
export const DOCTOR_CAP_CUT =
  gouge(-16.2, -11.6, 17.6, -13.8, 1.1, -0.4) + gouge(-18.6, -24.4, 20.4, -25.2, 0.8, 1.8)
/** Her fair hair gathered up under the cap: a short lock at the nape, in paper. */
export const PORTIA_TUCKED =
  'M-15.6 -8.4C-19.6 -3.4 -19.8 3.4 -17 9.6C-15.2 12.6 -11.6 12.8 -9.8 10.6C-11.2 5.2 -11 -0.8 -9.2 -6.2Z'
export const PORTIA_TUCKED_STRANDS =
  'M-15.8 -3.6C-16.8 1.4 -16.2 5.4 -14.4 9.2M-12.6 -4.6C-13.4 0.4 -13 4.4 -11.8 8.2'
/**
 * The Duke's cap: stiff, rising at the back to a rounded horn, its band cut
 * in paper (DUKE_CAP_CUT).
 */
export const DUKE_CAP =
  'M-17.6 -8.4C-19.6 -16 -19.6 -26 -16.4 -34.4C-14.4 -39.6 -9.4 -41.6 -5.4 -38.4C-1 -34.6 5 -31.4 11.4 -30C15.6 -29 17.6 -26 17.8 -21.6L17.8 -11.8C6.4 -12.8 -6.4 -11.6 -17.6 -8.4Z'
export const DUKE_CAP_CUT = gouge(-17, -11, 17, -13.6, 1.2, -0.4)

/** Salerio's soft travelling hat, its wide brim turned down, its band cut in paper. */
export const SALERIO_HAT =
  'M-27 -6.4C-17 -10.6 5 -12.8 27 -10.4C25.4 -6 21 -3.8 14.4 -5.6C14 -15.4 8 -23.6 -0.6 -23.6C-9 -23.6 -14.6 -17 -15.6 -8.6C-19.6 -7.4 -23.6 -6.4 -27 -6.4Z'
export const SALERIO_HAT_CUT = gouge(-15, -10.6, 14.4, -12.4, 1, -0.4)

/**
 * The gaoler's steel cap: a dome with a low comb along its crown and a brim
 * sloping down all round, its edge and the foot of the comb cut in paper
 * (GAOLER_HELMET_CUT). (A brim turned up to points before and behind read
 * as horns.)
 */
export const GAOLER_HELMET =
  'M-14.6 -12C-16 -25 -8.6 -32.6 0 -32.6C8.6 -32.6 16 -25 14.6 -12Z' +
  'M-10.6 -29.4Q0 -42 10.6 -29.4Z' +
  'M-27 -8Q0 -21 27 -8L25 -5Q0 -16.6 -25 -5Z'
export const GAOLER_HELMET_CUT =
  gouge(-23, -8.6, 23, -8.6, 0.9, -3) + gouge(-9, -30.4, 9, -30.4, 0.8)
/**
 * The gaoler's keys at his belt, in the figure's frame: a ring at the hip and
 * three keys hanging from it, cut in paper so they read on his dark jerkin.
 */
export const GAOLER_KEYS =
  'M-4.6 -72a4.2 4.2 0 1 0 8.4 0a4.2 4.2 0 1 0 -8.4 0ZM-3 -72a2.6 2.6 0 1 1 5.2 0a2.6 2.6 0 1 1 -5.2 0Z' +
  gouge(-2.4, -68, -5.4, -52, 1.1) +
  gouge(0.6, -67.6, 0.8, -50, 1.1) +
  gouge(3, -68, 6.6, -53, 1.1) +
  'M-6.6 -55h4v3h-4ZM0 -53h4v3h-4ZM5.6 -56h4v3h-4Z'

// ── The Prince of Morocco's scimitar ────────────────────────────────────────

/**
 * A scimitar in its scabbard, hung from the sash at the hip (facing right):
 * the scabbard falls down the side of the white robe and curves back a
 * little at its tip, and ends above the knee, inside the robe's outline, so
 * it is always read against the cloth it hangs on. The scabbard is filled in
 * ink; the hilt, a grip rising forward from the sash with a cross guard and
 * a pommel, is in paper with an ink edge.
 *
 * REVIEWED 27 September 2026. It was first cut 78 units long, sweeping back
 * from the hip to the floor behind him, and at panel size, and above all at
 * phone width, the long dark curve behind the Prince read as a tail. On the
 * one Black character in the play that is exactly the animal imagery this
 * text's rules forbid, so the blade was shortened to hang against the robe,
 * where nothing but a sword can be read.
 */
export function scimitar(hip: P, len = 50): { scabbard: string; hilt: string } {
  const [x, y] = hip
  const k = len / 50
  // The centreline of the scabbard, a cubic from the sash down and back.
  const c: P[] = [
    [x + 2, y + 2],
    [x - 2 * k, y + 18 * k],
    [x - 6 * k, y + 36 * k],
    [x - 16 * k, y + 48 * k],
  ]
  const at = (t: number): P => {
    const u = 1 - t
    const a = u * u * u
    const b = 3 * u * u * t
    const d = 3 * u * t * t
    const e = t * t * t
    return [
      a * c[0][0] + b * c[1][0] + d * c[2][0] + e * c[3][0],
      a * c[0][1] + b * c[1][1] + d * c[2][1] + e * c[3][1],
    ]
  }
  // Wider towards the tip, as a scimitar is, then closing to a point.
  const half = (t: number) => (t < 0.8 ? 2.2 + 1.4 * (t / 0.8) : 3.6 * ((1 - t) / 0.2))
  const left: string[] = []
  const right: string[] = []
  const steps = 12
  for (let i = 0; i <= steps; i++) {
    const t = i / steps
    const p = at(t)
    const q = at(Math.min(1, t + 0.02))
    const r = at(Math.max(0, t - 0.02))
    const dx = q[0] - r[0]
    const dy = q[1] - r[1]
    const L = Math.hypot(dx, dy) || 1
    const w = half(t)
    left.push(`${n(p[0] - (dy / L) * w)} ${n(p[1] + (dx / L) * w)}`)
    right.push(`${n(p[0] + (dy / L) * w)} ${n(p[1] - (dx / L) * w)}`)
  }
  const scabbard = `M${left.join('L')}L${right.reverse().join('L')}Z`
  // The grip rises forward from the sash, against the line of the blade.
  const s = c[0]
  const g: P = [s[0] + 2.4, s[1] - 10]
  const hilt =
    `M${n(s[0] - 1.2)} ${n(s[1])}L${n(g[0] - 1.2)} ${n(g[1])}L${n(g[0] + 1.4)} ${n(g[1] + 0.4)}L${n(s[0] + 1.4)} ${n(s[1])}Z` +
    `M${n(s[0] - 6.4)} ${n(s[1] - 0.2)}L${n(s[0] + 6.6)} ${n(s[1] + 3)}L${n(s[0] + 6.2)} ${n(s[1] + 5.4)}L${n(s[0] - 6.8)} ${n(s[1] + 2.2)}Z` +
    `M${n(g[0] - 2.2)} ${n(g[1] - 1)}a2.2 2.2 0 1 0 4.4 0a2.2 2.2 0 1 0 -4.4 0Z`
  return { scabbard, hilt }
}

// ── The builder ──────────────────────────────────────────────────────────────

export type Look =
  | 'portia-doctor'
  | 'nerissa-clerk'
  | 'duke'
  | 'balthazar'
  | 'antonio'
  | 'bassanio'
  | 'gratiano'
  | 'lorenzo'
  | 'salarino'
  | 'solanio'
  | 'shylock'
  | 'portia'
  | 'nerissa'
  | 'jessica'
  | 'jessica-page'
  | 'launcelet'
  | 'morocco'
  | 'morocco-follower'
  | 'arragon'
  | 'salerio'
  | 'gaoler'

/** How big each person is, against a man of 1: Portia speaks of "my little body". */
const SIZE: Record<Look, number> = {
  'portia-doctor': 0.86,
  'nerissa-clerk': 0.9,
  duke: 1,
  balthazar: 0.97,
  antonio: 1,
  bassanio: 1,
  gratiano: 0.98,
  lorenzo: 0.99,
  salarino: 0.98,
  solanio: 1,
  shylock: 0.98,
  portia: 0.86,
  nerissa: 0.9,
  jessica: 0.88,
  'jessica-page': 0.86,
  launcelet: 0.96,
  morocco: 1.04,
  'morocco-follower': 1,
  arragon: 1,
  salerio: 0.99,
  gaoler: 1.02,
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
  /** Hip, knee and foot of each leg, for the men in doublets and Antonio. */
  legs?: { far: P[]; near: P[] }
  /** A short cloak, and how far its hem swings back. */
  cloak?: number
  /** A gown's hem: how far it reaches ahead of the waist and behind it. */
  hem?: { front?: number; back?: number }
  /** A reveller's visor over the eyes (the masquers of 2.6). */
  masked?: boolean
  eye?: 'open' | 'down' | 'none'
  /** No cap, hat or circlet. */
  bare?: boolean
  /** A rapier sheathed at the hip (the gentlemen in doublets). */
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

const WOMEN: Look[] = ['portia', 'nerissa', 'jessica']
/** The long gowns and robes that reach the floor, over no visible legs. */
const TO_THE_FLOOR: Look[] = [
  ...WOMEN,
  'shylock',
  'morocco',
  'morocco-follower',
  'portia-doctor',
  'duke',
]
/** Portia and Nerissa as the doctor and his clerk (4.1): their own faces, men's dress. */
const IN_DISGUISE: Look[] = ['portia-doctor', 'nerissa-clerk']
const IN_WHITE: Look[] = ['morocco', 'morocco-follower']

function hatOf(look: Look): { d: string; cut?: string } | undefined {
  if (look === 'portia-doctor') return { d: DOCTOR_CAP, cut: DOCTOR_CAP_CUT }
  if (look === 'duke') return { d: DUKE_CAP, cut: DUKE_CAP_CUT }
  if (look === 'balthazar') return { d: WATCH_HAT, cut: WATCH_HAT_CUT }
  if (look === 'antonio') return { d: ANTONIO_CAP, cut: ANTONIO_CAP_CUT }
  if (look === 'gratiano') return { d: GRATIANO_CAP, cut: GRATIANO_CAP_CUT }
  if (look === 'lorenzo') return { d: LORENZO_BONNET, cut: LORENZO_BONNET_CUT }
  if (look === 'salarino') return { d: SALARINO_CAP, cut: SALARINO_CAP_CUT }
  if (look === 'launcelet') return { d: LAUNCELET_CAP, cut: LAUNCELET_CAP_CUT }
  if (look === 'jessica-page') return { d: PAGE_CAP, cut: PAGE_CAP_CUT }
  if (look === 'salerio') return { d: SALERIO_HAT, cut: SALERIO_HAT_CUT }
  if (look === 'gaoler') return { d: GAOLER_HELMET, cut: GAOLER_HELMET_CUT }
  return undefined
}

function build(p: Pose) {
  const look = p.look
  const woman = WOMEN.includes(look)
  const floor = TO_THE_FLOOR.includes(look)
  const white = IN_WHITE.includes(look)
  const slight = woman || look === 'jessica-page' || IN_DISGUISE.includes(look)
  const h = p.head ?? {}
  const hAt: P = h.at ?? (woman ? [3, -154] : [3, -160])
  const headT = `translate(${n(hAt[0])} ${n(hAt[1])}) rotate(${h.rot ?? 0})`
  const armW = slight ? 7.8 : look === 'shylock' || look === 'antonio' ? 9.6 : 8.4
  // Morocco's robe and sleeves are white, his head and hands are not: the
  // cloth is one figure in paper and the skin another in ink, laid over it.
  const cloth: Piece[] = []
  const skin: Part[] = []
  let cuts = ''
  const handOf = (a: ArmPose, sep?: number): Part[] => {
    const kind = a.hand ?? 'mitt'
    const wrist = a.pts[a.pts.length - 1]
    const angle = a.deg ?? endAngle(a.pts)
    if (kind === 'none') return []
    if (kind === 'mitt') return [{ ...mitt(wrist, angle, slight ? 0.85 : 1), sep }]
    if (kind === 'point')
      return pointingHand(wrist, angle, slight ? 0.9 : 1, a.thumb ?? 1).map((q) => ({ ...q, sep }))
    if (kind === 'finger') return warningHand(wrist, angle, { size: slight ? 13 : 15, sep })
    // The fan of an open hand's fingers, 18 degrees apart by default. At 14,
    // the first default, the rough edge of the print closed the gaps between
    // them at panel size and several open hands read as fists (reviewed 27
    // September 2026). A hand laid flat on the breast sets its own, smaller.
    return hand(wrist, angle, {
      size: a.size ?? (slight ? 13.5 : 15),
      spread: a.spread ?? 18,
      thumb: a.thumb,
      sep,
    })
  }
  const armOf = (a: ArmPose, near: boolean) => {
    const sep = near ? 1.5 : undefined
    const sleeve: Part = { d: limb(a.pts), w: armW, sep }
    if (white) {
      cloth.push(sleeve)
      skin.push(...handOf(a, undefined))
    } else cloth.push([sleeve, ...handOf(a, sep)])
  }

  if (p.far) armOf(p.far, false)
  const sword = p.sword && !floor && look !== 'antonio' ? sheathed([0, -74], 1, 76) : undefined
  if (!floor) {
    const legs = p.legs ?? MEN_LEGS
    const leg = (pts: P[]): Part[] => [{ d: limb(pts), w: 9 }, shoe([pts[pts.length - 1][0], 0], 1)]
    cloth.push(...leg(legs.far))
    // Arragon's cloak is long, to the knee, as the Much Ado kit's Prince's is.
    const long = look === 'arragon'
    if (p.cloak !== undefined || long) {
      cloth.push({ d: cloak(p.cloak ?? 0, long) })
      cuts += cloakCuts(p.cloak ?? 0, long)
    }
    if (sword) cloth.push(sword.scabbard)
    cloth.push({
      d: limb([
        [0, -138],
        [0, -72],
      ]),
      w: 22,
    })
    if (look === 'antonio') {
      // A merchant's gown to the knee over his hose, girdled.
      cloth.push(...leg(legs.near))
      cloth.push({
        d: gown([0, -136], [0, -92], -40, 1, { shoulder: 32, waistW: 26, front: 16, back: 20 }),
      })
      cuts +=
        gouge(-13, -93, 14, -92, 1.4) +
        gouge(6, -128, 9, -46, 1.6, -0.4) +
        gouge(-6, -84, -14, -46, 1.8, 1)
    } else {
      cloth.push({ d: doublet([0, -138], [0, -70], 1, { width: 28, hem: 16, flare: 6 }) })
      cloth.push(...leg(legs.near))
      // the doublet's buttons down the front and the girdle at the waist
      cuts += gouge(7.6, -128, 8.6, -84, 0.9, 0.4) + gouge(-11, -79, 12, -80, 1.1)
      if (look === 'gaoler') cuts += GAOLER_KEYS
    }
  } else if (woman) {
    cloth.push({
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
    // Portia is "richly left": a paper band of lace at the neck of her gown.
    if (look === 'portia') cuts += gouge(-9, -131, 8, -129.6, 1.6, 1.4)
  } else if (look === 'portia-doctor' || look === 'duke') {
    // The doctor's robe, open down the front; the Duke's, wider, with a
    // short cape across the shoulders. Neither has Shylock's sash.
    const duke = look === 'duke'
    cloth.push({
      d: gown([0, -136], [0, -90], 0, 1, {
        shoulder: duke ? 36 : 30,
        waistW: duke ? 30 : 26,
        front: p.hem?.front ?? (duke ? 28 : 24),
        back: p.hem?.back ?? (duke ? 36 : 32),
      }),
    })
    cloth.push(shoe([10, 0], 1))
    cuts +=
      gouge(9, -124, 15, -6, 1.5, -0.6) +
      gouge(-4, -84, -15, -8, 1.8, 1) +
      gouge(2, -96, 3, -10, 1.6, -0.3) +
      (duke ? gouge(-18, -110, 18, -108, 2, 2.6) : '')
  } else {
    // Shylock's gaberdine, and the Prince's robe: long gowns to the floor.
    const white2 = white
    cloth.push({
      d: gown([0, -136], [0, -90], 0, 1, {
        shoulder: white2 ? 32 : 30,
        waistW: white2 ? 26 : 24,
        front: p.hem?.front ?? 22,
        back: p.hem?.back ?? 28,
      }),
    })
    cloth.push(shoe([10, 0], 1))
    // the sash at the waist, the front edge of the coat, and two long folds
    cuts +=
      gouge(-12, -91, 13, -90, 1.8) +
      gouge(9, -124, 16, -6, 1.2, -0.6) +
      gouge(-4, -80, -14, -8, 1.8, 1) +
      gouge(4, -80, 6, -8, 1.6, -0.4)
  }
  // The head, and what is behind or on it.
  const head: Part[] = []
  if (look === 'portia') head.push({ d: HEAD_WOMAN, t: headT })
  else if (look === 'jessica') head.push({ d: JESSICA_HAIR, t: headT }, { d: HEAD_WOMAN, t: headT })
  else if (look === 'jessica-page' || IN_DISGUISE.includes(look))
    head.push({ d: HEAD_WOMAN, t: headT })
  else if (look === 'nerissa') head.push({ d: COIF, t: headT }, { d: HEAD_WOMAN, t: headT })
  else {
    // Hair at the nape under a hat; not Antonio's, whose head is so often
    // bowed that it stood out behind like a second crown.
    if (hatOf(look) && look !== 'antonio' && !p.bare && !p.masked)
      head.push({ d: NAPE_HAIR, t: headT })
    head.push({ d: HEAD_MAN, t: headT })
    if (look === 'solanio') head.push({ d: SOLANIO_BEARD, t: headT })
  }
  const hat = !p.bare && !(p.masked && look !== 'jessica-page') ? hatOf(look) : undefined
  if (hat) head.push({ d: hat.d, t: headT })
  if (look === 'gratiano' && hat) head.push({ d: GRATIANO_FEATHER, t: headT })
  if (white) skin.unshift(...head)
  else cloth.push(...head)
  if (p.near) armOf(p.near, true)
  return { cloth, skin, cuts, headT, hat, hilt: sword?.hilt, white }
}

/**
 * One of the people of the play, cut from the block: placed with its feet at
 * `at`, scaled by `scale` (on top of the person's own size), and turned to
 * face left with `flip`. `children` are drawn last, in the figure's own frame
 * (a casket, a scroll, a torch held in the hand).
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
  const { cloth, skin, cuts, headT, hat, hilt, white } = build(pose)
  const look = pose.look
  const s = scale * SIZE[look]
  const eye = pose.eye ?? 'open'
  const transform = `translate(${n(at[0])} ${n(at[1])}) scale(${n(flip ? -s : s)} ${n(s)})`
  const face = (
    <g transform={headT}>
      {(look === 'bassanio' ||
        look === 'solanio' ||
        look === 'morocco' ||
        look === 'arragon' ||
        look === 'morocco-follower' ||
        ((look === 'lorenzo' || look === 'gratiano') && !hat)) && (
        <path d={HAIR_SHORT} fill="none" stroke={PAPER} strokeWidth={1.2} strokeLinecap="round" />
      )}
      {look === 'solanio' && <path d={SOLANIO_BEARD_CUTS} fill={PAPER} />}
      {look === 'shylock' && (
        <>
          <path d={SHYLOCK_HAIR} fill={PAPER} stroke={INK} strokeWidth={1} />
          <path d={SHYLOCK_HAIR_STRANDS} fill="none" stroke={INK} strokeWidth={0.8} />
          <path d={FULL_BEARD} fill={PAPER} stroke={INK} strokeWidth={0.9} />
          <path d={SHYLOCK_BEARD_STRANDS} fill="none" stroke={INK} strokeWidth={0.8} />
          <path d={SHYLOCK_BROW} fill={PAPER} />
        </>
      )}
      {look === 'portia' && (
        <>
          <path d={PORTIA_HAIR} fill={PAPER} stroke={INK} strokeWidth={1.1} />
          <path d={PORTIA_STRANDS} fill="none" stroke={INK} strokeWidth={1.1} />
        </>
      )}
      {look === 'jessica' && <path d={JESSICA_STRANDS} fill={PAPER} />}
      {look === 'portia-doctor' && (
        <>
          <path d={PORTIA_TUCKED} fill={PAPER} stroke={INK} strokeWidth={1} />
          <path d={PORTIA_TUCKED_STRANDS} fill="none" stroke={INK} strokeWidth={0.8} />
        </>
      )}
      {look === 'nerissa-clerk' && (
        <path d={HAIR_SHORT} fill="none" stroke={PAPER} strokeWidth={1.2} strokeLinecap="round" />
      )}
      {look === 'nerissa' && (
        <path d={COIF_EDGE} fill="none" stroke={PAPER} strokeWidth={1.8} strokeLinecap="round" />
      )}
      {hat?.cut && <path d={hat.cut} fill={PAPER} />}
      {look === 'gratiano' && hat && <path d={GRATIANO_FEATHER_CUTS} fill={PAPER} />}
      {(look === 'morocco' || look === 'arragon') && !pose.bare && (
        <path d={CIRCLET} fill={PAPER} stroke={INK} strokeWidth={1.1} strokeLinejoin="round" />
      )}
      {!woman(look) && look !== 'jessica-page' && !white && (
        <path d={RUFF} fill={PAPER} stroke={INK} strokeWidth={0.8} />
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
  )
  if (white) {
    const sc = scimitar([0, -88])
    return (
      <g transform={transform}>
        <CutFigure parts={cloth} cuts={cuts || undefined} tone="paper" halo={1.9} />
        {look === 'morocco' && (
          <>
            <path d={sc.scabbard} fill={INK} stroke={PAPER} strokeWidth={1.2} />
            <path d={sc.hilt} fill={PAPER} stroke={INK} strokeWidth={0.9} />
          </>
        )}
        <CutFigure parts={skin} halo={1.2}>
          {face}
        </CutFigure>
        {children}
      </g>
    )
  }
  return (
    <CutFigure parts={cloth} cuts={cuts || undefined} transform={transform}>
      {face}
      {hilt && <path d={hilt} fill={PAPER} stroke={INK} strokeWidth={0.8} />}
      {children}
    </CutFigure>
  )
}

const woman = (look: Look) => WOMEN.includes(look)

/** The angle, in degrees, a limb's last segment points: re-exported for placing held things. */
export const angleOf = (a: P, b: P) => (Math.atan2(b[1] - a[1], b[0] - a[0]) * 180) / Math.PI

/** A point `d` along the direction `a` (degrees) from `p`. */
export const along = (p: P, a: number, d: number): P => [
  p[0] + Math.cos(deg(a)) * d,
  p[1] + Math.sin(deg(a)) * d,
]
