import { between, n, ribbon, type Pt, type Rng } from '@/components/comics/linocut/carve'

import { type Knot } from '../../silas-marner/portraits/common'

/**
 * What the Jane Eyre portraits share.
 *
 * The block, the cut ground behind a sitter, the paper rule, the outline and
 * placing helpers, the eye, the ear, the bloom on a cheek, the one woman's
 * head and the frilled edge are the Silas Marner portraits' own (which take
 * the block and the hand from the Jekyll and Hyde portraits), re-exported here
 * rather than copied: a second copy of a helper is a copy that drifts, and
 * one hand cutting every text keeps the site one artist. The two novels are
 * set in the same years and the same country, so they share the same dress.
 * Only what this novel needs beyond them is defined below.
 *
 * AS BRONTË DESCRIBES THEM, AND NO FURTHER. Every phrase on a card is copied
 * from the held edition, src/data/full-texts/jane-eyre.ts (the Service &
 * Paton edition of 1897, as Project Gutenberg #1260 transcribes it), in its
 * own spelling and punctuation, and each portrait's docblock quotes the
 * sentences each detail comes from. Brontë describes most of her people
 * closely, often on the page where Jane first sees them: Mrs Reed and
 * Brocklehurst in Chapter 4, Miss Temple in Chapter 5, Rochester in Chapters
 * 12 and 13, St John in Chapter 29. Where she gives no face (John Eyre, who
 * never appears and is described only by Bessie, at second hand), the sitter
 * is drawn plainly and the markers point only at what the text does say; the
 * card's small print says so. Nothing is taken from a film, television or
 * stage production.
 *
 * THE DRESS IS THE DRESS OF THE NOVEL'S OWN YEARS. Miss Temple's curls are
 * "according to the fashion of those times, when neither smooth bands nor
 * long ringlets were in vogue" (Chapter 5), and in Chapter 32 St John brings
 * Jane a poem then newly published, which places the story in the first
 * years of the century, the years of Silas Marner's first part. So everyone
 * wears the ordinary dress of the English 1800s: a gentleman the dark coat
 * with a high collar and a white neckcloth wound high, a lady the
 * high-waisted gown, a servant a white cap, a kerchief and an apron. What
 * Brontë names is drawn as she names it: Jane's "black frock" and "clean
 * white tucker", Mrs Fairfax's "widow's cap, black silk gown, and snowy
 * muslin apron", the Lowood girls' "brown dresses, made high", Grace Poole's
 * cap and check apron, Blanche Ingram's white dress and scarf, Brocklehurst's
 * surtout, the Rivers sisters' mourning.
 *
 * ONE WAY OF CUTTING A FACE. Every woman is cut from the one woman's head
 * (WOMAN_HEAD) and every man from the one man's head (MAN_HEAD, below), with
 * the same eye, the same ear and the same few lines, and what makes one
 * person differ from another is only what Brontë says of them: Rochester's
 * "square forehead" and "grim mouth, chin, and jaw", St John's "straight,
 * classic nose", Mrs Reed's "under jaw being much developed", Brocklehurst's
 * "great nose", Mason's "small cherry mouth".
 *
 * BERTHA MASON is a woman, drawn with the same head, the same eye and the
 * same dignity as every other woman here, partly in shadow, whatever the
 * novel's own words say of her. Those words are never quoted on her card,
 * and nothing in her face or her figure is drawn from them (./bertha-mason.tsx).
 *
 * THE CHILDREN. John Reed, Helen Burns and Adèle are children in the novel,
 * and are drawn as they are first seen, at rest: nobody here is in danger,
 * hurt or punished. Helen's card is of her talking by Miss Temple's fire, and
 * says nothing of her illness or her death.
 *
 * RED IS NEVER ON A MOUTH, A CHIN OR A HAND, where at a glance it reads as
 * blood. A flush sits on the cheekbone, well clear of the lips (Bloom), and
 * firelight is printed in the ground below the level of the face. Grace
 * Poole's red hair is LEFT TO THE WORDS, as the figure kit leaves it
 * (../panels/people.tsx): red on a head reads at phone width as a wound, so
 * her hair is ink with paper strands under her cap. The colours the novel
 * names that the print cannot show (green eyes, blue eyes, flaxen, amber,
 * purple, gold, red hair) are cut in ink and paper and named in each card's
 * small print.
 *
 * THE FACES ARE PAPER. The figure kit cuts most faces in ink, as panels cut
 * whole figures as dark shapes, and keeps paper for the pale (Jane, Helen,
 * Mason). A portrait cuts every face in paper so its features can be read,
 * as every portrait on the site does; where the text makes a face dark
 * (Rochester's, Mrs Reed's skin, Blanche Ingram's), the card's small print
 * says that the colour is left to the words.
 *
 * MARKERS NEVER CROSS A FACE. A marker for the face, a cheek or the skin sits
 * on the face with no line, as the pilot's "shrivelled his cheek" sits on
 * Scrooge's. Any other marker that reaches a head comes to its feature from
 * in front at the feature's own height, or, for the hair, from behind at the
 * hair's own height. A marker for the lips stops in the air before them.
 *
 * Every portrait is drawn in the plate's own coordinates, 332 by 318, so its
 * markers can be read straight off the drawing. A head is drawn in its own
 * frame, facing right, and put on the plate with placer(); a sitter who
 * faces left is drawn facing right and turned over by FACE_LEFT, and their
 * markers are placed with flip().
 */

export {
  Bloom,
  FACE_LEFT,
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
  type Knot,
} from '../../silas-marner/portraits/common'
export {
  Hand,
  handPaths,
  type HandPaths,
  type HandSpec,
} from '../../jekyll-and-hyde/portraits/hands'

/** Anything that carries a point from a head's own frame onto the plate. */
export type Placing = { pt: (p: Pt) => Pt }

/**
 * A path written in a head's own frame, carried onto the plate by a placer:
 * so a feature drawn once, in the frame of WOMAN_HEAD or MAN_HEAD, lands on
 * whichever head it belongs to, however that head is scaled, turned or
 * moved. Absolute M, L, Q, C, S and T commands only (Z needs no point): an
 * arc or a relative command would not survive the turn, so it throws.
 * Stroke widths stay in the plate's own units, so a hairline stays a
 * hairline however small the head.
 */
export function placePath(d: string, F: Placing): string {
  const tokens = d.match(/[A-Za-z]|-?(?:\d+\.?\d*|\.\d+)/g) ?? []
  let out = ''
  for (let i = 0; i < tokens.length; ) {
    const t = tokens[i]
    if (/^[A-Za-z]$/.test(t)) {
      if (!/^[MLQCSTZ]$/.test(t))
        throw new Error(`placePath: only absolute M L Q C S T Z, not "${t}"`)
      out += t
      i++
      continue
    }
    const [x, y] = F.pt([Number(t), Number(tokens[i + 1])])
    out += `${n(x)} ${n(y)} `
    i += 2
  }
  return out.trim()
}

/**
 * Loose locks of hair as tapered strokes, each along a curve from its root
 * `a`, pulled towards `c`, to its tip `b` (points on the plate): St John's
 * "careless locks" over his forehead, a curl escaping a cap. Fill with INK
 * on a pale ground (fair hair over paper skin), or with PAPER on dark hair.
 */
export function ribbonLocks(r: Rng, spines: [Pt, Pt, Pt][], width: [number, number]): string {
  let d = ''
  for (const [a, c, b] of spines) {
    const pts: Pt[] = []
    for (let k = 0; k <= 12; k++) {
      const u = k / 12
      pts.push([
        (1 - u) * (1 - u) * a[0] + 2 * (1 - u) * u * c[0] + u * u * b[0] + between(r, -0.3, 0.3),
        (1 - u) * (1 - u) * a[1] + 2 * (1 - u) * u * c[1] + u * u * b[1] + between(r, -0.3, 0.3),
      ])
    }
    d += ribbon(pts, between(r, width[0], width[1]), 0.8, false)
  }
  return d
}

/**
 * ONE HEAD FOR EVERY MAN: a man's head in profile, facing right, in the
 * frame the women's head is drawn in. It is the Silas Marner portraits' man
 * (William Dane's head, ../../silas-marner/portraits/william-dane.tsx), so a
 * student meets the same way of cutting a man in both novels. Each man's
 * portrait starts from this and changes only what Brontë gives him, with
 * nudge(). Landmarks: the eye at about (222, 127), the brow over it from 205
 * to 233 at y 110, the top of the ear at (156, 112), the tip of the nose at
 * (251, 163), the corner of the mouth at (226, 179.5), the chin at (238.5,
 * 198).
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

/**
 * The lines every man's face is cut with, in MAN_HEAD's frame (William
 * Dane's, Godfrey Cass's): place them with placePath(). A portrait takes the
 * ones it needs and changes only what the text changes.
 */
export const MAN_LINES = {
  /** The jaw, back to below the ear. */
  jaw: 'M236 208C214 218 190 212 176 196C170 188 168 178 168 168',
  /** A level brow. */
  brow: 'M205 111Q218 106.5 233 110.5',
  nostril: 'M244.5 166C240.5 163.5 240 159.5 243 157',
  /** The fold from the nose towards the corner of the mouth. */
  fold: 'M235 154C229 161 227 169 228.5 176',
  /** The closed lips, one line. */
  mouth: 'M237 178.5L227 179.5',
  /** The cleft above the chin. */
  chin: 'M232.5 189Q230.5 192 231.5 195',
}

/**
 * The lines every woman's face is cut with, in WOMAN_HEAD's frame (Sarah's
 * and Nancy Lammeter's, ../../silas-marner/portraits/): place them with
 * placePath().
 */
export const WOMAN_LINES = {
  jaw: 'M223 203C206 210 188 205 176 192',
  brow: 'M204 118.5Q214 114.5 225 118.5',
  nostril: 'M235.5 163C232.5 161 232 157.5 234.5 155.5',
  /** The closed lips, one line, and a hint of the lower lip. */
  mouth: 'M229 176.5L222 177.3',
  lowerLip: 'M229.5 180.5Q227 183 224.5 182',
  chin: 'M226 188Q224 190.5 225 193',
}
