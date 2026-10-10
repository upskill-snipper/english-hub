import { INK, LINE } from '@/components/comics/linocut/palette'

import { placer, type Knot } from '../../silas-marner/portraits/common'

/**
 * What the Great Expectations portraits share.
 *
 * The block, the cut ground behind a sitter, the paper rule, the outline,
 * hair and placing helpers, the eye, the ear, the flush on a cheek and the
 * hand are the Silas Marner portraits' own (and through them the Jekyll and
 * Hyde portraits'), re-exported here from ../../silas-marner/portraits/
 * common.tsx rather than copied: the two novels are set in the same years of
 * the same country, and a second copy of a helper is a copy that drifts. Only
 * what this novel needs beyond them is defined below.
 *
 * AS DICKENS DESCRIBES THEM, AND NO FURTHER. Every portrait is drawn from the
 * held edition, src/data/full-texts/great-expectations.ts (the P. F. Collier
 * edition of 1890, chapters numbered 1 to 59), and its docblock quotes the
 * sentences each detail comes from. Dickens describes some people closely
 * (Joe and Mrs Joe in Chapter 2, Miss Havisham in Chapter 8, Jaggers in
 * Chapter 11, Herbert in Chapter 22) and some only by what they do or how
 * they carry themselves (Drummle, Compeyson). Where the text gives no face,
 * the sitter is drawn plainly in the dress of the time and the markers point
 * only at what the text says; the card's small print says so.
 *
 * THE DRESS IS PLAIN ON PURPOSE. Pip's story runs from a childhood in the
 * days of the convict hulks to his middle years, written in 1860 about a
 * time some forty years before, so everyone wears the ordinary dress of
 * England in the 1810s to the 1830s: a gentleman a dark tail-coat with a
 * standing collar and a white neckcloth wound high; a working man a shirt, a
 * waistcoat and a knotted neckerchief; a married woman a cap, a kerchief and
 * a plain gown. What Dickens does name is drawn as he names it: Joe's
 * "leather apron" and "rolled-up shirt sleeve", Mrs Joe's "coarse apron",
 * Miss Havisham's veil and bridal flowers, Compeyson's "black clothes",
 * Herbert's "rather old clothes", Magwitch's dress "like a voyager by sea".
 * Nothing comes from a film, television or stage production.
 *
 * ONE HEAD FOR EVERY MAN, AND ONE FOR EVERY WOMAN. Every man is cut from
 * MAN_HEAD and every woman from WOMAN_HEAD (Silas Marner's), the same brow,
 * nose, mouth, eye and ear, and each is told from the others only by what
 * the novel gives them, nudged into the outline where the words change it:
 * Jaggers's "exceedingly large head", Joe's neck for "a sort of Hercules in
 * strength", Magwitch's years, Mrs Joe "tall and bony". The features are
 * drawn by ManFeatures and WomanFeatures, so a brow or a mouth is the same
 * cut on every face unless the text asks for another.
 *
 * COLOURS THE PRINT CANNOT SHOW ARE LEFT TO THE WORDS, and said so on each
 * card. Jaggers's "exceedingly dark complexion", Orlick's "swarthy" and
 * Magwitch "browned ... by exposure to weather" are English complexions
 * darkened by sun and weather, and a face printed in ink reads at a glance as
 * a different one (the Gatsby portraits found this on 9 October 2026), so
 * every face here is cut in paper and the card names the colour. The same
 * holds for Joe's "undecided blue" eyes and Estella's brown hair.
 *
 * RED IS NEVER ON A MOUTH, A CHIN OR A HAND, where at a glance it reads as
 * blood. Mrs Joe's "prevailing redness of skin" is a flush on the cheekbone
 * (Bloom), and a fire behind a sitter (Joe's forge, the fire Estella looks
 * into) prints red only in the ground, low in the block and well below the
 * face.
 *
 * WHAT IS NEVER DRAWN (the registry, ../index.ts, has the whole list). Pip
 * is a child on his card, as he is in the first stage, and is shown alone in
 * the courtyard of Satis House looking at his hands: nobody near him, no
 * danger. Mrs Joe is drawn as she is in Chapter 2, with no Tickler and
 * nothing of the attack on her. Miss Havisham is drawn as Pip first sees her
 * in Chapter 8, with no candle near her and no flame anywhere in her plate.
 * Molly's wrists are never drawn, and no card says what she was tried for.
 * Orlick is drawn slouching, as he is at the forge, and nothing of the
 * lime-kiln; Compeyson standing in the dock, and nothing of the river.
 *
 * MARKERS NEVER CROSS A FACE. A marker for the face or the skin sits on the
 * face with no line; any other marker that reaches a head comes to its
 * feature from in front at the feature's own height, or, for the hair, from
 * behind at the hair's own height.
 *
 * Every portrait is drawn in the plate's own coordinates, 332 by 318, so its
 * markers can be read straight off the drawing. A sitter who faces left is
 * drawn facing right and turned over by FACE_LEFT, and their markers are
 * placed with flip(). A head drawn smaller, turned or moved is placed with
 * placer(), and its features are drawn through the same placer.
 */

export {
  Bloom,
  FACE_LEFT,
  Hand,
  InnerRule,
  PH,
  PW,
  ProfileEar,
  ProfileEye,
  WOMAN_HEAD,
  combedHair,
  curlMarks,
  flame,
  flip,
  handPaths,
  hatch,
  inside,
  lerp2,
  nudge,
  once,
  placer,
  portraitGround,
  rimLight,
  scallops,
  smooth,
  splitGround,
  strands,
  twill,
  type HandPaths,
  type HandSpec,
  type Knot,
} from '../../silas-marner/portraits/common'

/** A head's placing on the plate: its scale, its turn and where it lands. */
export type Placer = ReturnType<typeof placer>

/**
 * ONE HEAD FOR EVERY MAN: a man's head in profile, facing right, the
 * Silas Marner portraits' William Dane's, in the plate's own frame.
 * Landmarks: the crown at knot 7; the brow ridge at 11 (232, 95); the root
 * of the nose at 13 (230, 123); the tip of the nose at 16 (251, 163); the
 * lips meet the profile at 20 (237, 178.5); the front of the chin at 23 and
 * the point under it at 24; the throat at 25 to 27. The back of the neck is
 * knots 0 and 1, its front 27 and 28. The eye is at MAN_EYE and the top of
 * the ear at MAN_EAR.
 */
export const MAN_HEAD: Knot[] = [
  [120, 256, 1],
  [115, 232],
  [102, 206],
  [92, 172],
  [90, 134],
  [98, 98],
  [118, 66],
  [148, 46],
  [182, 40],
  [208, 50],
  [224, 70],
  [232, 95],
  [234, 113],
  [230, 123],
  [234.5, 135],
  [243, 151],
  [251, 163, 1],
  [245.5, 168],
  [238, 169.5, 1],
  [239, 175],
  [237, 178.5, 1],
  [238, 182.5],
  [233, 188],
  [238.5, 198],
  [236, 208],
  [218, 214],
  [206, 224],
  [206, 240],
  [204, 256, 1],
]
/** The middle of the eye on MAN_HEAD, for ProfileEye at s = 1. */
export const MAN_EYE: [number, number] = [222, 126.5]
/** The top of the ear's front edge on MAN_HEAD, for ProfileEar at h = 48. */
export const MAN_EAR: [number, number] = [156, 112]

/**
 * A man's features on MAN_HEAD, drawn through the head's placer so they
 * move with it and keep their widths in the plate's units: the jaw back to
 * below the ear, the brow, the nostril, the fold from the nose, the mouth and
 * the crease over the chin.
 *
 * - `brow`: its weight, and how far it is raised (+) or drawn down (-).
 *   `knit` drops its inner end towards the nose, for a frown or a scowl.
 * - `mouth`: 'set', closed level; 'smile', its corner turned up; 'down', its
 *   corner turned down, sulky or grim; 'thin', pressed into one hard line.
 * - `jaw`: false for a jaw hidden by a beard or a collar.
 */
export function ManFeatures({
  F,
  brow = 3.2,
  raise = 0,
  knit = 0,
  mouth = 'set',
  jaw = true,
}: {
  F: Placer
  brow?: number
  raise?: number
  knit?: number
  mouth?: 'set' | 'smile' | 'down' | 'thin'
  jaw?: boolean
}) {
  const p = F.p
  const mouths = {
    set: `M${p(237, 178.5)}L${p(228, 179.5)}`,
    smile: `M${p(237, 178.5)}L${p(229.5, 179.5)}Q${p(225.5, 179.2)} ${p(223.8, 175.4)}`,
    down: `M${p(237, 178.5)}L${p(228.5, 180)}Q${p(225, 181.4)} ${p(224.4, 186)}`,
    thin: `M${p(237.5, 178.5)}L${p(225.5, 179.2)}`,
  }
  return (
    <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
      {jaw && (
        <path
          d={`M${p(236, 208)}C${p(214, 218)} ${p(190, 212)} ${p(176, 196)}C${p(170, 188)} ${p(168, 178)} ${p(168, 168)}`}
          strokeWidth={1.6}
        />
      )}
      <path
        d={`M${p(205, 111 - raise)}Q${p(218, 106.5 - raise * 1.3)} ${p(233, 110.5 - raise + knit)}`}
        strokeWidth={brow}
      />
      <path
        d={`M${p(244.5, 166)}C${p(240.5, 163.5)} ${p(240, 159.5)} ${p(243, 157)}`}
        strokeWidth={1.4}
      />
      <path
        d={
          mouth === 'smile'
            ? `M${p(235, 154)}C${p(228, 160)} ${p(225, 168)} ${p(225.5, 174)}`
            : `M${p(235, 154)}C${p(229, 161)} ${p(227, 169)} ${p(228.5, 176)}`
        }
        strokeWidth={LINE.fine}
      />
      <path d={mouths[mouth]} strokeWidth={mouth === 'thin' ? 2.2 : 1.8} />
      <path d={`M${p(232.5, 189)}Q${p(230.5, 192)} ${p(231.5, 195)}`} strokeWidth={LINE.hairline} />
    </g>
  )
}

/** The middle of the eye on WOMAN_HEAD, for ProfileEye at s = 0.86. */
export const WOMAN_EYE: [number, number] = [216, 130]
/** The top of the ear's front edge on WOMAN_HEAD, for ProfileEar at h = 44. */
export const WOMAN_EAR: [number, number] = [160, 118]

/**
 * A woman's features on WOMAN_HEAD, through the head's placer, as the Silas
 * Marner portraits cut them: the jaw, a fine brow, the nostril, the closed
 * lips and the round of the chin. `mouth`: 'set', closed and level; 'smile',
 * the corner turned up; 'firm', pressed a little harder, for Mrs Joe.
 * `brow` is its weight; `knit` drops its inner end towards the nose.
 */
export function WomanFeatures({
  F,
  brow = 2.1,
  knit = 0,
  mouth = 'set',
  jaw = true,
}: {
  F: Placer
  brow?: number
  knit?: number
  mouth?: 'set' | 'smile' | 'firm'
  jaw?: boolean
}) {
  const p = F.p
  const mouths = {
    set: `M${p(229, 176.5)}L${p(222, 177.2)}`,
    smile: `M${p(229, 176.5)}L${p(223, 177)}Q${p(219.5, 176.5)} ${p(218.5, 173)}`,
    firm: `M${p(229.5, 176.5)}L${p(220.5, 177.6)}`,
  }
  return (
    <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
      {jaw && (
        <path
          d={`M${p(223, 203)}C${p(204, 212)} ${p(184, 206)} ${p(174, 192)}`}
          strokeWidth={1.5}
        />
      )}
      <path d={`M${p(205, 118.5)}Q${p(215, 115)} ${p(225.5, 119 + knit)}`} strokeWidth={brow} />
      <path
        d={`M${p(235, 162)}C${p(232, 160)} ${p(231.5, 157)} ${p(234, 155)}`}
        strokeWidth={1.2}
      />
      <path d={mouths[mouth]} strokeWidth={mouth === 'firm' ? 1.9 : 1.5} />
      <path
        d={`M${p(229, 181)}Q${p(226.5, 183.5)} ${p(223.5, 182.5)}`}
        strokeWidth={LINE.hairline}
      />
      <path d={`M${p(227, 189)}Q${p(224.5, 192)} ${p(225.5, 195)}`} strokeWidth={LINE.hairline} />
    </g>
  )
}
