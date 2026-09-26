import { gouge, ribbon } from '@/components/comics/linocut/carve'

import { arm, type Part } from './verona-kit'

export {
  CutFigure,
  arm,
  doublet,
  gown,
  hand,
  headAt,
  hilt,
  limb,
  rapier,
  sheathed,
  shoe,
  EYE,
  HEAD_MAN,
  ROMEO_HAIR,
  ROMEO_CURLS,
  HEAD_GIRL,
  JULIET_HAIR,
  JULIET_STRANDS,
  JULIET_FACE,
  JULIET_EYE,
  HEAD_NURSE,
  COIF,
  COIF_EDGE,
  type P,
  type Part,
  type Piece,
} from './verona-kit'
export { HEAD_WOMAN, VEIL, VEIL_BAND, PARIS_CAP, PARIS_BAND, PARIS_HAIR } from './acts-3-4-kit'
export { CAP, CAP_BAND, CIRCLET, OLD_BEARD, OLD_HAIR, HAIR_CUTS } from './late-scenes-kit'
export { FULL_BEARD, FULL_BEARD_STRANDS, WHITE_BROW } from './acts-3-4-kit'
export { BEARD_CUTS, HEAD_BEARD } from './late-scenes-people'

/**
 * The people of the first five moments (the Prologue to Act 1, Scene 5), for
 * the panels "The Chorus tells the ending", "A brawl in the streets", "A
 * suitor for Juliet", "Queen Mab and a warning" and "The feast".
 *
 * ONE OUTLINE PER PERSON. Several artists are drawing this play at once, and a
 * character must look the same in every panel, so the people other panels
 * had already cut are taken from their kits, not redrawn:
 * - Romeo, Juliet and the Nurse as ./verona-kit.tsx gives them (its heads
 *   are the ones ./acts-3-4-kit.tsx cut: Romeo bareheaded with a full head of
 *   curls, a short cloak and a rapier at his side; Juliet cut in paper with
 *   her dark hair loose down her back; the Nurse broad, in a white coif), and
 *   its CutFigure, arms, hands, doublets and gowns;
 * - Lady Capulet's veil and its band, and Paris's flat bonnet, from
 *   ./acts-3-4-kit.tsx;
 * - Capulet's soft cap and its band, Montague's short white beard and white
 *   hair, and the Prince's circlet and short dark beard with its cut strands
 *   from ./late-scenes-kit.tsx and ./late-scenes-people.tsx ("Capulet wears a
 *   cap, so a reader can tell the two fathers apart when they stand
 *   together");
 * - Capulet's long white beard and white brow (FULL_BEARD, WHITE_BROW) from
 *   ./acts-3-4-kit.tsx, as his portrait and every later panel draw him. These
 *   first panels once gave him Montague's short beard, so the two fathers had
 *   one beard between them; the review of 26 September 2026 matched them.
 *
 * WHO IS NEW HERE, and what the held edition
 * (src/data/full-texts/romeo-and-juliet.ts) says of them:
 * - Tybalt is young: Capulet calls him "goodman boy", "a saucy boy" and "a
 *   princox" (1.5). So he is beardless. Mercutio mocks him as one of "these
 *   fashion-mongers" who "stand so much on the new form" (2.4), so he wears a
 *   flat cap with a feather, which nobody else here wears.
 * - Mercutio puts on a mask for the feast: "Give me a case to put my visage
 *   in: / A visor for a visor", "Here are the beetle-brows shall blush for
 *   me" (1.4). So his mask has a heavy jutting brow.
 * - Romeo goes to the feast masked too: Tybalt sees him "cover'd with an
 *   antic face" (1.5). His is a plain mask over the eyes.
 * - Benvolio is described not at all: a young man in a doublet and a plain
 *   flat cap.
 * - The Chorus is described not at all: a bearded man (the Prince's short
 *   beard) in a long gown and a flat cap, in the dress of the time.
 *
 * Nothing is taken from a film or stage production. Heads are in the frame
 * of the Macbeth heads (centred on 0, 0, about 38 by 44, facing right).
 */

// ── Headgear and masks, in the head frame ─────────────────────────────────────

/** A plain flat cap, the soft bonnet of the play's Verona, set on the crown. */
export const CAP_FLAT =
  'M-18 -9C-21 -17 -12 -25.5 1 -25.5C13 -25.5 22 -20 24 -13.5C18 -11 -4 -10.5 -18 -9Z'

/**
 * Tybalt's feather: a plume standing up from the front of his cap, its tip
 * curling back. Print it in paper with an ink edge over the cap, with its
 * quill (FEATHER_QUILL) in ink, so it reads as a feather and not as a horn.
 */
export const FEATHER = ribbon(
  [
    [3, -22],
    [7, -32],
    [9, -42],
    [8, -52],
    [3, -60],
  ],
  10,
  0.6,
)
/** The quill down the middle of the plume and two of its barbs, in ink. */
export const FEATHER_QUILL = 'M3.5 -23Q9 -36 8.5 -50Q7 -56 3 -60M6 -32L1.5 -36M8.4 -42L3.8 -46'

/**
 * A mask over the eyes, as the maskers wear to the feast: a band from the brow
 * to the cheekbone with a ridge down the nose, and its tie trailing behind.
 * Cut in paper over an ink head, with an ink eyehole (MASK_EYE).
 */
export const MASK =
  'M-4 -10C4 -12.5 12 -11.5 16.5 -7.5L17 -4.5L21 2.4L16.5 3.6C12 5.4 5 5.5 -2 3.4C-4.5 -0.5 -5.5 -6 -4 -10Z'
export const MASK_TIE = 'M-3.5 -5C-10 -4 -15 -1 -20 5C-18 -1 -13 -6.5 -3.5 -8.5Z'
export const MASK_EYE = 'M6.5 -3.8Q10 -6.4 13.2 -3.8Q10 -1.6 6.5 -3.8Z'

/** Mercutio's visor: the mask with a heavy brow jutting over the eyehole. */
export const VISOR =
  'M-5 -11C3 -16.5 13 -16 21.5 -10.5L20.5 -6.5C18.5 -6.8 17.5 -6.2 17 -4.5L21 2.4L16.5 3.6C12 5.4 5 5.5 -2 3.4C-5 -1 -6.5 -7 -5 -11Z'
/** The beetle-brow's lower edge, cut in ink so the jut reads. */
export const VISOR_BROW_CUT = gouge(3, -8.2, 20, -7.4, 0.9, 0.8)

/**
 * `arm` from ./verona-kit.tsx, the same arm and open hand, with any run of
 * stroked parts of one width (the fingers) joined into one path. Strokes of
 * one width and colour draw exactly the same joined or apart, and each part
 * joined saves three elements (halo, edge and ink), so a panel with many open
 * hands stays inside the weight the style guide allows. The Verona kit now
 * joins its fingers itself, so this is usually a pass-through; it is kept so
 * the panels here do not depend on which version of the kit they meet.
 */
export function openArm(...args: Parameters<typeof arm>): Part[] {
  const out: Part[] = []
  for (const p of arm(...args)) {
    const last = out[out.length - 1]
    if (last && p.w && last.w === p.w && last.sep === p.sep && last.t === p.t)
      out[out.length - 1] = { ...last, d: last.d + p.d }
    else out.push(p)
  }
  return out
}
