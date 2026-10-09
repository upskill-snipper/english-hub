import { between, ribbon, rng, type Pt } from '@/components/comics/linocut/carve'

import { inside } from '../../jekyll-and-hyde/portraits/common'
import { shoulders } from '../../julius-caesar/portraits/common'
import { spline, type SP } from '../../the-merchant-of-venice/portraits/common'

/**
 * What The Great Gatsby portraits share.
 *
 * The block, the cut ground behind a sitter, the paper rule, the outline and
 * placing helpers, the man's head and the woman's head are the portraits' own
 * from the plays, re-exported here rather than copied: through
 * ../../the-merchant-of-venice/portraits/common.tsx (MAN_HEAD, WOMAN_HEAD,
 * their eyes and mouths, the shadow under the jaw), ../../julius-caesar/
 * portraits/common.tsx (the shoulders every garment is cut from, `once`, the
 * ear) and ../../the-tempest/portraits/common.tsx (a head turned at the
 * neck). A second copy of a helper is a copy that drifts, and one hand
 * cutting every text keeps the site one artist. Only the dress of 1922, and
 * the hair worn with it, are defined below.
 *
 * ONE HEAD FOR EVERY MAN, AND ONE FOR EVERY WOMAN. Every man here is cut
 * from MAN_HEAD, the same brow, nose, mouth and ear, and is told from the
 * others only by what the novel gives him (Gatsby's smile, Tom's straw hair
 * and hard mouth, George Wilson's pale hair under the dust) and by what he is
 * doing. Two jaws are changed, as the figure kit (../panels/people.tsx)
 * changes them, because the novel's words do: Tom's heavier (TOM_HEAD) and
 * Wilson's longer and thinner (WILSON_HEAD). Meyer Wolfshiem's head is
 * MAN_HEAD itself, cut no differently from Nick's: many readers find the
 * novel's description of him an antisemitic stereotype, and it is never drawn
 * or quoted (see ./meyer-wolfshiem.tsx). Every woman is cut from WOMAN_HEAD.
 *
 * AS FITZGERALD DESCRIBES THEM, AND NO FURTHER. Every phrase on a card is
 * copied from the held edition, src/data/full-texts/the-great-gatsby.ts (the
 * 1925 first edition, Wikisource's transcription of the Scribner printing),
 * in its spelling ("gray", "anæmic", "crêpe-de-chine"), and each portrait's
 * docblock quotes the sentences each detail comes from. Where the novel gives
 * no looks (Nick never describes his own face; Wolfshiem's is left
 * undrawn), the sitter is drawn plainly in the dress of 1922 and the markers
 * point only at what the novel does say; the card's small print says so.
 * Nothing is taken from a film, television or stage production.
 *
 * THE DRESS OF 1922 IS PLAIN ON PURPOSE. The novel names very little of what
 * anyone wears: Tom's "riding clothes", Daisy and Jordan "both in white",
 * Myrtle's "spotted dress of dark blue crêpe-de-chine", George Wilson's "dark
 * suit", Nick's "white flannels", Gatsby's pink suit and his white flannel
 * one, Jordan "dressed to play golf". The rest is the ordinary dress of the
 * summer of 1922 on Long Island and in New York: a lounge jacket with notched
 * lapels, a soft turned-down collar and a long tie for a man, a dinner jacket
 * and a black bow tie at night; a loose dress with a plain round neck for a
 * woman, and short hair (the "French bob" the novel itself sees at Gatsby's
 * party, Chapter III), each cut in its sitter's file. Women are drawn with
 * the same care and dignity as every other sitter, head and shoulders,
 * dressed to the collarbone, and nothing on a card is chosen for what it says
 * about a woman's body.
 *
 * RED IS NEVER ON A MOUTH, A CHIN OR A HAND, where at a glance it reads as
 * blood; nor near a car, a road or water. These portraits print no red at
 * all except their numbered markers: nothing the novel says of these people
 * is red, and the colours it does name (Daisy's "dark shining hair", Jordan's
 * autumn-leaf hair, Myrtle's dark blue, George's light blue eyes, Tom's
 * straw) are cut in ink and paper and named in each card's small print.
 *
 * A TAN IS LEFT TO THE WORDS. The kit prints Gatsby's and Jordan's faces in
 * ink for the sun on them, as it prints most faces in a panel. In a portrait
 * a face is cut in paper so its features can be read, and a tan is a colour
 * the print cannot show, so the card's small print says so, as the style
 * guide asks ("his blue lips are left to the words"). WHY (9 October 2026):
 * Gatsby's face was first cut as an inked head with the light carved back
 * from the profile in close contours, the way the Othello portraits cut a
 * dark face. It read as a different complexion, not a tan, and lost his
 * smile, which his card is about.
 *
 * MARKERS NEVER CROSS A FACE. A marker for the face, a cheek or the skin sits
 * on the face with no line, as the pilot's "shrivelled his cheek" sits on
 * Scrooge's. Any other marker that reaches a head comes to its feature from
 * in front at the feature's own height, as Scrooge's eye marker does, or, for
 * the hair, from behind at the hair's own height: never down from above the
 * head and never up from the neck. A marker for the lips stops in the air
 * before them.
 *
 * GROUND KEYS. portraitGround caches each ground by its key in a module every
 * text's portraits share: every key here starts "gg-".
 *
 * Every figure is drawn facing right in its own 0..240 by 0..332 frame, the
 * frame of MAN_HEAD and WOMAN_HEAD, and placed with `placing`; one that faces
 * left is flipped.
 */

export {
  MAN_CHEEK,
  MAN_EAR,
  MAN_HEAD,
  ManBrow,
  ManEye,
  ManNoseAndMouth,
  NeckShadow,
  neckShade,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  WOMAN_EAR,
  WOMAN_EYE,
  WOMAN_HEAD,
  WomanFace,
  WomanNeckShadow,
  type SP,
} from '../../the-merchant-of-venice/portraits/common'
export { EarCut, once, shoulders } from '../../julius-caesar/portraits/common'
export { onTurnedHead, turn } from '../../the-tempest/portraits/common'
/**
 * A hand seen from the back, every finger its own stroke with an ink edge so
 * the fingers stay apart (../../jekyll-and-hyde/portraits/hands.tsx).
 */
export { Hand as SpecHand, handPaths } from '../../jekyll-and-hyde/portraits/hands'
export { inside }

// ── Two heads the novel makes different ─────────────────────────────────────
//
// MAN_HEAD's own outline, with only the jaw and the neck changed, as the
// figure kit (../panels/people.tsx) changes them for HEAD_TOM and HEAD_WILSON
// from the novel's words. Brow, nose, mouth, eye and ear are every man's.

/** MAN_HEAD from the brow to the lips, as the Merchant portraits cut it. */
const BROW_TO_LIPS: SP[] = [
  [55, 74],
  [78, 50],
  [110, 38],
  [140, 39],
  [158, 52],
  [165, 70],
  [168, 88],
  [164.5, 98, 1],
  [171, 111],
  [177.5, 124],
  [179, 130],
  [175, 134],
  [168, 135.5, 1],
  [170.5, 140],
  [173, 144.5],
  [169.8, 148, 1],
]

/**
 * Tom: "a sturdy straw-haired man of thirty" with "the enormous power of that
 * body" (Chapter I). The jaw squarer and lower, the chin pushed forward, the
 * neck thick, front and back.
 */
export const TOM_HEAD = spline([
  [58, 234, 1],
  [51, 204],
  [45, 174],
  [42, 142],
  [44, 108],
  ...BROW_TO_LIPS,
  [172.8, 152],
  [170, 157, 1],
  [174, 166],
  [175, 178],
  [171.5, 188, 1],
  [158, 195],
  [146, 200],
  [140, 207],
  [138.5, 218],
  [139, 234, 1],
])

/**
 * George Wilson: "a blond, spiritless man, anæmic, and faintly handsome"
 * (Chapter II). A longer, thinner face, the chin lower and drawn back a
 * little, the neck thin.
 */
export const WILSON_HEAD = spline([
  [68, 234, 1],
  [61, 204],
  [52, 176],
  [45, 144],
  [44, 108],
  ...BROW_TO_LIPS,
  [171.4, 152],
  [168, 157, 1],
  [169.4, 168],
  [167, 181],
  [158, 190],
  [146, 197],
  [138, 204],
  [133, 216],
  [131.5, 234, 1],
])

// ── A man's hair, 1922 ──────────────────────────────────────────────────────

/**
 * Short at the back and sides and fuller on top, combed straight back from
 * the brow, cut clean in front of the ear and short at the nape: how a man
 * wore his hair in 1922. For MAN_HEAD. Fill with INK for dark hair, or with
 * PAPER for fair hair, and cut it with `combedBack`.
 */
export const MAN_HAIR_PTS: SP[] = [
  [160, 57, 1],
  [151, 60],
  [143, 66],
  [138, 76],
  [134, 88],
  [129, 100],
  [125, 112, 1],
  [117, 112, 1],
  [115, 102],
  [107, 97],
  [98, 100],
  [92, 110],
  [89, 126],
  [85, 142],
  [77, 156],
  [64, 165, 1],
  [50, 161],
  [43, 142],
  [41, 110],
  [48, 78],
  [68, 50],
  [98, 33],
  [130, 30],
  [150, 36],
  [159, 46],
]
export const MAN_HAIR = spline(MAN_HAIR_PTS)

const combedBySeed = new Map<string, string>()
/**
 * Hair combed back: strokes from the hairline over the crown and down to the
 * nape, each following the curve of the skull and kept inside the hair's
 * outline, wider where `light` (0 to 1) falls on the hair, so oiled hair
 * shines on the side the light comes from. Paper ribbons on dark hair, ink on
 * fair. `parting` adds the clean line of a side parting along the top.
 * Cached by seed, count, width and parting: give every drawing its own seed.
 */
export function combedBack(
  seed: number,
  outline: SP[],
  count: number,
  width: [number, number],
  {
    parting = true,
    light = () => 1,
  }: { parting?: boolean; light?: (x: number, y: number) => number } = {},
): string {
  const key = `${seed}-${count}-${width.join('-')}-${parting}`
  const hit = combedBySeed.get(key)
  if (hit) return hit
  const r = rng(seed)
  const poly = outline.map(([x, y]): Pt => [x, y])
  let d = ''
  for (let i = 0; i < count; i++) {
    const t = (i + between(r, 0.1, 0.9)) / count
    // From the front of the hair (brow to temple) back over the skull: the
    // top strokes arch over the crown, the lower ones run back to the nape.
    // Each starts and stops a little at random, so no two lie alike.
    const a: Pt = [162 - t * 40 + between(r, -3, 3), 44 + t * 66 + between(r, -2, 2)]
    const c: Pt = [114 - t * 22 + between(r, -4, 4), 18 + t * 82 + between(r, -3, 3)]
    const b: Pt = [46 + t * 14 + between(r, -4, 4), 74 + t * 90 + between(r, -4, 4)]
    const u0 = between(r, 0, 0.25)
    const u1 = between(r, 0.7, 1)
    const line: Pt[] = []
    for (let k = 0; k <= 16; k++) {
      const u = u0 + ((u1 - u0) * k) / 16
      line.push([
        (1 - u) * (1 - u) * a[0] + 2 * (1 - u) * u * c[0] + u * u * b[0],
        (1 - u) * (1 - u) * a[1] + 2 * (1 - u) * u * c[1] + u * u * b[1],
      ])
    }
    let run: Pt[] = []
    const flush = () => {
      if (run.length > 4) {
        const mid = run[Math.floor(run.length / 2)]
        const w = between(r, width[0], width[1]) * (0.45 + 0.55 * light(mid[0], mid[1]))
        d += ribbon(run, w, 0.75)
      }
      run = []
    }
    for (const p of line) {
      if (inside(poly, p[0], p[1])) run.push(p)
      else flush()
    }
    flush()
  }
  if (parting) d += ribbon(quadLine([156, 42], [126, 28], [84, 40]), width[1] * 1.4, 0.8)
  combedBySeed.set(key, d)
  return d
}

/** Points along a quadratic curve from a through the pull of c to b. */
function quadLine(a: Pt, c: Pt, b: Pt, k = 14): Pt[] {
  const out: Pt[] = []
  for (let i = 0; i <= k; i++) {
    const u = i / k
    out.push([
      (1 - u) * (1 - u) * a[0] + 2 * (1 - u) * u * c[0] + u * u * b[0],
      (1 - u) * (1 - u) * a[1] + 2 * (1 - u) * u * c[1] + u * u * b[1],
    ])
  }
  return out
}

// ── A man's dress, 1922 ─────────────────────────────────────────────────────
//
// In the frame of MAN_HEAD, the body turned a little towards us so the front
// of the jacket shows: the shoulders, a white collar round the neck, the V of
// the shirt front between the lapels, and a tie down it.

/** The jacket: the shoulders every garment here is cut from. */
export const JACKET = shoulders(1, 0)

/** The soft turned-down collar round the foot of the neck, its point at the front. */
export const COLLAR = spline([
  [58, 208, 1],
  [96, 214],
  [127, 212],
  [137, 207, 1],
  [143, 222],
  [152, 240, 1],
  [139, 238],
  [126, 234],
  [96, 232],
  [63, 229, 1],
])

/** The V of the shirt front between the lapels. */
export const SHIRT_V = spline([
  [124, 232, 1],
  [150, 227, 1],
  [161, 270],
  [165, 336, 1],
  [142, 336, 1],
  [131, 282],
])

/** The tie: its knot under the collar's point, and its blade down the shirt. */
export const TIE_KNOT = spline([
  [137, 228, 1],
  [150, 228, 1],
  [152, 240],
  [146, 247, 1],
  [140, 245],
])
export const TIE = spline([
  [141, 244, 1],
  [148, 246, 1],
  [156, 300],
  [160, 336, 1],
  [144, 336, 1],
  [143, 300],
])

/** A bow tie for evening: two wings and the knot, at the throat. */
export const BOW_TIE =
  spline([
    [129, 227, 1],
    [140, 232],
    [139, 238, 1],
    [127, 244],
  ]) +
  spline([
    [149, 231, 1],
    [162, 224],
    [165, 238, 1],
    [149, 239],
  ])
export const BOW_KNOT = 'M140 229.5L148.5 229L149 238.5L140.5 239Z'

/** The lapels, one each side of the V, with the notch where they meet the collar. */
export const LAPEL_NEAR = spline([
  [104, 228, 1],
  [124, 232, 1],
  [131, 282],
  [142, 336, 1],
  [116, 336, 1],
  [108, 292],
  [102, 254, 1],
  [92, 247, 1],
])
export const LAPEL_FAR = spline([
  [150, 227, 1],
  [168, 233, 1],
  [178, 247, 1],
  [171, 257, 1],
  [178, 300],
  [182, 336, 1],
  [165, 336, 1],
  [161, 270],
])

// ── A woman's dress, 1922 ───────────────────────────────────────────────────

/** A loose dress over the shoulders, a little narrower than a man's jacket. */
export const DRESS = shoulders(0.94, 6)
/** Its plain round neck, at the collarbone. */
export const DRESS_NECK = 'M74 220C92 238 122 242 146 226'
