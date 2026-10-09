import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, gouge, ribbon, rng, type Pt } from '@/components/comics/linocut/carve'

import { shoulders } from '../../julius-caesar/portraits/common'
import { inside } from '../../othello/portraits/common'
import { spline, type SP } from '../../the-merchant-of-venice/portraits/common'

/**
 * What the Antony and Cleopatra portraits share.
 *
 * The block, the cut ground behind a sitter, the paper rule, the outline and
 * placing helpers, the hand with its fingers kept apart, the ear, and the
 * man's, the youth's and the woman's heads are the Shakespeare portraits'
 * own, re-exported here rather than copied: through
 * ../../the-merchant-of-venice/portraits/common.tsx (MAN_HEAD, WOMAN_HEAD,
 * Hand), ../../julius-caesar/portraits/common.tsx (the youth's head, the
 * toga, cropped Roman hair, `once`), ../../the-tempest/portraits/common.tsx
 * (a turned head, the tear), ../../king-lear/portraits/common.tsx (waves of a
 * beard) and ../../othello/portraits/common.tsx (curls, the hand closed round
 * a stem or a strap). A second copy of a helper is a copy that drifts, and
 * one hand cutting every play keeps the site one artist. Only what this play
 * needs beyond them is defined below.
 *
 * THE LOOK OF EACH PERSON is the figure kit's (../panels/people.tsx), whose
 * docblock gives the lines of the play for it, so a student meets the same
 * people in the gallery as in the story:
 * - ANTONY: his thick curling hair and a short curled beard, dark, with grey
 *   among them; the cuirass and a general's cloak.
 * - CLEOPATRA: her dark hair long and loose down her back (LONG_HAIR, the
 *   kit's CLEO_HAIR), a plain crown of points (the kit's CROWN), a gown, and
 *   the queen's mantle behind her shoulders, which her women do not wear.
 *   Her face is cut as a print cuts anything dark ("a tawny front", 1.1;
 *   "with Phœbus’ amorous pinches black", 1.5): see ./cleopatra.tsx.
 * - OCTAVIUS CAESAR: the youth's head, his hair cropped and combed forward,
 *   in a toga.
 * - OCTAVIA: the palla drawn over her head (Veil), a little dark hair at the
 *   brow beneath it.
 * - ENOBARBUS: every man's head with a short dark beard to a blunt end
 *   (SHORT_BEARD, the kit's HEAD_CASCA), his hair cropped, the cuirass and NO
 *   cloak.
 * - EROS: the youth's head, beardless, cropped hair, a plain tunic (Tunic).
 * - CHARMIAN: her hair bound in a knot at the nape (BOUND_HAIR, the kit's
 *   PORTIA_HAIR); IRAS: her hair cut level at the jaw (LEVEL_HAIR, the kit's
 *   IRAS_HAIR). Both in a plain gown. The two cuts of hair are the kit's,
 *   invented only to tell the women apart.
 * - LEPIDUS: slight and balding, his hair left at the side (BALDING_HAIR),
 *   in a toga: the Julius Caesar portraits' Lepidus, the same man.
 * - POMPEY: clean-shaven, a fringe of hair over the brow (FRINGE_HAIR, the
 *   kit's CINNA_FRINGE), the cuirass and a general's cloak.
 * - MENAS: the short dark beard, the felt cap of a working man (FELT_CAP, the
 *   kit's CAP), a plain tunic.
 * - DOLABELLA: clean-shaven, cropped hair, the cuirass, no cloak.
 * Fulvia, in the guide's relationships, never comes on stage and the play
 * gives no look for her: she has no portrait.
 *
 * AS THE PLAY DESCRIBES THEM, AND NO FURTHER. Every portrait is drawn from
 * the held edition (src/data/full-texts/antony-and-cleopatra.ts, Project
 * Gutenberg #1534), and its docblock quotes the lines each detail comes from.
 * Shakespeare describes few of these people, and most of what he gives is
 * said by someone else: Cleopatra's "tawny front" is a Roman soldier's,
 * Caesar's thin beard is Cleopatra's word and his youth Antony's, Octavia's
 * hair a frightened messenger's, Lepidus's colour a servant's. Where the play
 * gives no looks, the sitter is drawn plainly in the dress of Rome and
 * Alexandria in the 30s BC, the markers point only at what the play does say,
 * and the card's small print says so. Nothing is taken from a film,
 * television or stage production.
 *
 * CLEOPATRA is drawn with the same care and dignity as every other sitter,
 * head up and eye level, in a gown to the throat. Her head is WOMAN_HEAD,
 * every woman's head, cut as a print cuts anything dark (as the Othello
 * portraits cut Othello's): nothing in its outline is changed or enlarged.
 * No headdress, serpent, painted eye or bare shoulder from any picture of an
 * Egyptian queen.
 *
 * NEVER DRAWN, in any portrait (the rules in full are in ../index.ts). Five
 * deaths in this play come by the characters' own hands or by grief, and no
 * portrait shows or suggests any of them: no sword is drawn on anyone, no
 * asp, no basket of figs, no poison, no wound and no blood. No marker, note
 * or alt text names or describes a death by a character's own hand, an order
 * to kill, or the means of either; Menas's plan against the triumvirs is left
 * to the play. No marker is a line of abuse, whoever speaks it. No hand is
 * raised: every hand here is held low, laid on the breast, or closed round
 * what it holds, and every finger is cut apart from the next.
 *
 * RED IS NEVER ON A MOUTH, A CHIN OR A HAND, where it reads as blood. A flush
 * is laid flat on the cheek, well clear of the mouth, and only where the play
 * gives one (Caesar's "rose Of youth", Lepidus "high-coloured"); otherwise the
 * only red on a portrait is its numbered markers. A crown is cut in paper.
 *
 * MARKERS NEVER CROSS A FACE. A marker for the face, a cheek or the skin sits
 * on the face with no line, as the pilot's "shrivelled his cheek" sits on
 * Scrooge's. Any other marker that reaches a head comes to its feature from
 * in front at the feature's own height, as Scrooge's eye marker does, or, for
 * the hair, a crown or a veil at the back of the head, from behind at its own
 * height: never down from above the head and never up from the neck. A
 * marker for the lips stops in the air before them.
 *
 * GROUND KEYS. portraitGround caches each ground by its key in a module that
 * every text's portraits share, and Julius Caesar has an Antony, an Octavius
 * and a Lepidus too: every key here starts "ac-".
 *
 * Every figure is drawn facing right in its own 0..240 by 0..332 frame and
 * placed with `placing`; one that faces left is flipped.
 */

export {
  capsule,
  folds,
  Hand,
  handPoint,
  locks,
  MAN_CHEEK,
  MAN_EAR,
  MAN_EYE,
  MAN_HEAD,
  MAN_HEAD_OPEN,
  MAN_MOUTH,
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
  strands,
  WOMAN_EAR,
  WOMAN_EYE,
  WOMAN_HEAD,
  WomanFace,
  WomanNeckShadow,
  type Digit,
  type SP,
} from '../../the-merchant-of-venice/portraits/common'
export {
  ageLines,
  combedFromCrown,
  EarCut,
  fringe,
  napeShade,
  once,
  shoulders,
  Toga,
  togaShapes,
  YOUTH_EAR,
  YOUTH_HEAD,
  YOUTH_JAW,
  YOUTH_PTS,
  YouthEye,
  YouthNoseAndMouth,
} from '../../julius-caesar/portraits/common'
export { NECK_PIVOT, onTurnedHead, Tear, turn } from '../../the-tempest/portraits/common'
export { waves } from '../../king-lear/portraits/common'
export {
  curls,
  GRIP_AT,
  GRIP_DIGITS,
  GRIP_LINES,
  GRIP_PALM,
  inside,
  poly,
} from '../../othello/portraits/common'
/**
 * A hand seen from the back or the side, every finger its own stroke with an
 * ink edge so the fingers stay apart (../../jekyll-and-hyde/portraits/
 * hands.tsx, which the Sign of Four portraits use for a hand held out): given
 * the wrist, the knuckles and the tips in the frame it is drawn in.
 */
export { Hand as SpecHand, handPaths, type HandSpec } from '../../jekyll-and-hyde/portraits/hands'

// ── Armour ──────────────────────────────────────────────────────────────────
//
// The plain cuirass of a Roman soldier, and a cloak hung from the shoulders,
// as the Julius Caesar portraits cut Octavius's at Philippi and as the kit
// cuts every man at war ("Eros! Mine armour, Eros!", 4.4; "Chain mine armed
// neck", 4.8). In ink: the rim round the neck, the line of the chest and the
// riveted edge of the shoulder guard cut in paper. The play describes none of
// it. No sword is drawn: see NEVER DRAWN above.

/** The cloak hanging from the shoulders behind him. */
export const CLOAK = spline([
  [-20, 340, 1],
  [-16, 290],
  [0, 254],
  [30, 232],
  [62, 222],
  [96, 226, 1],
  [70, 260],
  [52, 300],
  [44, 340, 1],
])
/** The cuirass over chest and shoulders. */
export const CUIRASS = shoulders(0.98, 4)
const RIM = 'M80 220C100 234 132 236 154 222'
const CHEST = 'M150 262C170 270 190 286 204 306M120 280C140 286 160 300 172 322'
const GUARD = 'M40 244C66 236 92 240 110 256C116 276 112 300 104 318'
const RIVETS: Pt[] = [
  [52, 246],
  [70, 243],
  [88, 247],
  [102, 257],
  [108, 274],
  [108, 292],
]
/** Where the line of the chest runs, for a marker on the armour. */
export const CUIRASS_CHEST: Pt = [176, 286]

const cloakCutsBySeed = new Map<number, string>()
/** The cloak's folds, falling from the shoulder, cut in paper. */
function cloakCuts(seed: number): string {
  const hit = cloakCutsBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)
  let d = ''
  for (let i = 0; i < 4; i++) {
    const x = between(r, -8, 30)
    d += gouge(x + 16, between(r, 240, 256), x - between(r, 4, 12), 340, between(r, 1.2, 1.8), 1.4)
  }
  cloakCutsBySeed.set(seed, d)
  return d
}

/** The cuirass, and behind it the cloak unless `cloak` is false. */
export function Armour({ seed, cloak = true }: { seed: number; cloak?: boolean }) {
  return (
    <g>
      {cloak && (
        <>
          <path
            d={CLOAK}
            fill={INK}
            stroke={PAPER}
            strokeWidth={LINE.carve}
            strokeLinejoin="round"
          />
          <path d={cloakCuts(seed)} fill={PAPER} />
        </>
      )}
      <path d={CUIRASS} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <g fill="none" stroke={PAPER} strokeLinecap="round" strokeLinejoin="round">
        <path d={RIM} strokeWidth={3} />
        <path d={CHEST} strokeWidth={1.8} />
        <path d={GUARD} strokeWidth={2.2} />
      </g>
      <g fill={PAPER}>
        {RIVETS.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={1.9} />
        ))}
      </g>
    </g>
  )
}

// ── The tunic ───────────────────────────────────────────────────────────────
//
// A plain tunic, as the kit dresses Eros, Menas and the men of the household:
// in ink, its round neck cut in paper at the throat and a few folds falling
// from the shoulder. The belt is at the waist, below the frame.

export const TUNIC = shoulders(1, 2)
const TUNIC_NECK = 'M96 226C112 240 138 242 158 228'

const tunicBySeed = new Map<number, string>()
function tunicFolds(seed: number): string {
  const hit = tunicBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)
  let d = ''
  for (let i = 0; i < 5; i++) {
    const x = between(r, 30, 220)
    d += gouge(x, between(r, 250, 272), x + between(r, -10, 10), 338, between(r, 1, 1.6), 1.2)
  }
  tunicBySeed.set(seed, d)
  return d
}

/** The tunic drawn: body, folds and the paper edge of its neck. */
export function Tunic({ seed }: { seed: number }) {
  return (
    <g>
      <path d={TUNIC} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={tunicFolds(seed)} fill={PAPER} />
      <path d={TUNIC_NECK} fill="none" stroke={PAPER} strokeWidth={2.6} strokeLinecap="round" />
    </g>
  )
}

// ── The women's dress ───────────────────────────────────────────────────────
//
// A long gown over the shoulders, its neck cut round high at the throat: the
// plain dress of a woman of Alexandria or of Rome in the 30s BC, as the kit
// cuts the women's gowns. In ink, its folds cut in paper.

export const GOWN = shoulders(0.96, 8)
export const GOWN_NECK = 'M84 222C104 236 132 236 152 222'

const gownFoldsBySeed = new Map<number, string>()
/** Folds falling down the gown from the chest, cut in paper. */
export function gownFolds(seed: number): string {
  const hit = gownFoldsBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)
  let d = ''
  for (let i = 0; i < 6; i++) {
    const x = between(r, 20, 220)
    d += gouge(x, between(r, 262, 284), x + between(r, -8, 8), 336, between(r, 0.9, 1.5), 1)
  }
  gownFoldsBySeed.set(seed, d)
  return d
}

// ── Hair ────────────────────────────────────────────────────────────────────

/**
 * Hair cropped short and combed forward, in the Roman way, on MAN_HEAD or
 * YOUTH_HEAD: the hairline from the top of the brow down the temple to the
 * front of the ear, over the ear and down behind it to the nape. The kit's
 * ROMAN_HAIR at the size of a portrait, as the Julius Caesar portraits cut
 * Octavius's. Fill with INK; cut it with `combedFromCrown` and `fringe`.
 */
export const CROPPED_PTS: SP[] = [
  [160, 54, 1],
  [150, 58],
  [140, 61],
  [131, 67],
  [125, 81],
  [120, 97],
  [115, 106, 1],
  [104, 102],
  [94, 110],
  [88, 130],
  [82, 148],
  [74, 162],
  [62, 170, 1],
  [50, 166],
  [43, 142],
  [43, 108],
  [55, 72],
  [79, 47],
  [111, 35],
  [140, 36],
]
export const CROPPED_HAIR = spline(CROPPED_PTS)

/**
 * Dark hair drawn back from the brow over the ear and bound up in a knot at
 * the nape: the kit's PORTIA_HAIR, which it gives Charmian, at the size of a
 * portrait (the Julius Caesar portraits cut it for Portia, in a module of
 * their own; it is drawn again here because nothing there exports it). For
 * WOMAN_HEAD.
 */
export const BOUND_HAIR_PTS: SP[] = [
  [160, 61, 1],
  [150, 55],
  [137, 57],
  [125, 64],
  [117, 78],
  [112, 94],
  [104, 103],
  [92, 110],
  [82, 124],
  [76, 140],
  [70, 154],
  [62, 166, 1],
  [46, 170],
  [32, 160],
  [26, 142],
  [32, 124],
  [44, 112],
  [47, 96],
  [58, 70],
  [83, 47],
  [114, 37],
  [141, 39],
  [155, 50],
]
export const BOUND_HAIR = spline(BOUND_HAIR_PTS)
/** The knot at the nape. */
export const BOUND_KNOT = spline([
  [48, 118],
  [66, 126],
  [72, 146],
  [62, 166],
  [42, 170],
  [26, 156],
  [28, 132],
])

const boundBySeed = new Map<number, { strands: string; knot: string }>()
/**
 * The hair combed back: long paper strands from the hairline over the crown to
 * the knot, and a few turns cut round the knot itself. Fill with PAPER.
 */
export function boundHairCuts(seed: number): { strands: string; knot: string } {
  const hit = boundBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)
  let strands = ''
  for (let i = 0; i < 16; i++) {
    const t = (i + between(r, 0.2, 0.8)) / 16
    // from the hairline at the brow and temple, back and down to the knot
    const x0 = 152 - t * 44 + between(r, -2, 2)
    const y0 = 56 + t * 34 + between(r, -2, 2)
    const x1 = 70 - t * 18 + between(r, -3, 3)
    const y1 = 70 + t * 52 + between(r, -3, 3)
    strands += gouge(x0, y0, x1, y1, between(r, 0.7, 1.15), between(r, -5, -2))
  }
  let knot = ''
  for (let i = 0; i < 4; i++) {
    const y = 130 + i * 9 + between(r, -1.5, 1.5)
    knot += gouge(32 + i * 2, y, 66 - i * 2, y + 4, 0.9, 3.4)
  }
  const out = { strands, knot }
  boundBySeed.set(seed, out)
  return out
}

/**
 * Cleopatra's hair, long and loose: the kit's CLEO_HAIR at the size of a
 * portrait. From the brow over the crown and down the back of the head,
 * behind the ear, and on down her back over the gown to the foot of the
 * frame, a heavy mass, its front edge the hairline along the temple and
 * over the ear. For WOMAN_HEAD.
 */
export const LONG_HAIR_PTS: SP[] = [
  [162, 58, 1],
  [158, 45],
  [143, 32],
  [115, 26],
  [84, 34],
  [58, 56],
  [43, 92],
  [39, 132],
  [39, 170],
  [34, 208],
  [25, 250],
  [14, 296],
  [4, 342, 1],
  [100, 342, 1],
  [102, 300],
  [103, 262],
  [100, 232],
  [95, 206],
  [90, 182],
  [88, 160],
  [88, 138],
  [91, 118],
  [97, 106],
  [108, 100],
  [117, 93],
  [123, 80],
  [131, 69],
  [143, 62],
]
export const LONG_HAIR = spline(LONG_HAIR_PTS)

/**
 * Iras's hair, cut level at the jaw behind: the kit's IRAS_HAIR at the size
 * of a portrait, invented to tell her from Charmian. From the brow over the
 * crown and down the back of the head, behind the ear, to a level edge at the
 * height of the jaw. For WOMAN_HEAD.
 */
export const LEVEL_HAIR_PTS: SP[] = [
  [162, 58, 1],
  [158, 45],
  [143, 32],
  [115, 26],
  [84, 34],
  [58, 56],
  [43, 92],
  [39, 132],
  [40, 166],
  [44, 186, 1],
  [92, 186, 1],
  [89, 166],
  [88, 146],
  [90, 124],
  [96, 108],
  [108, 100],
  [117, 93],
  [123, 80],
  [131, 69],
  [143, 62],
]
export const LEVEL_HAIR = spline(LEVEL_HAIR_PTS)

/**
 * Long strands of hair as paper ribbons through a mass of dark hair, each
 * following the flow from a start curve to an end curve, kept inside `shape`.
 * Fill with PAPER. `light(x, y)` (0 to 1) thins the cuts away from the light.
 */
export function hairFlow(
  seed: number,
  shape: SP[],
  count: number,
  from: (t: number) => Pt,
  via: (t: number) => Pt,
  to: (t: number) => Pt,
  width: [number, number],
  light: (x: number, y: number) => number = () => 1,
): string {
  const r = rng(seed)
  const pts = shape.map(([x, y]): Pt => [x, y])
  let d = ''
  for (let i = 0; i < count; i++) {
    const t = (i + between(r, 0.15, 0.85)) / count
    const a = from(t)
    const c = via(t)
    const b = to(t)
    const jx = between(r, -2.5, 2.5)
    const line: Pt[] = []
    for (let k = 0; k <= 14; k++) {
      const u = k / 14
      const x = (1 - u) * (1 - u) * a[0] + 2 * (1 - u) * u * (c[0] + jx) + u * u * b[0]
      const y = (1 - u) * (1 - u) * a[1] + 2 * (1 - u) * u * c[1] + u * u * b[1]
      line.push([x, y])
    }
    // Cut in runs, each kept inside the hair, so no strand strays onto the face.
    let run: Pt[] = []
    const flush = () => {
      if (run.length > 4) {
        const mid = run[Math.floor(run.length / 2)]
        const w = between(r, width[0], width[1]) * (0.55 + 0.45 * light(mid[0], mid[1]))
        d += ribbon(run, w, 0.75)
      }
      run = []
    }
    for (const p of line) {
      if (inside(pts, p[0], p[1])) run.push(p)
      else flush()
    }
    flush()
  }
  return d
}

/**
 * The hair at the side of a balding head, from the temple back over the ear
 * to the nape, the crown bare: the Julius Caesar portraits' Lepidus, so that
 * he is the same man (the kit's LEPIDUS_HAIR). For MAN_HEAD.
 */
export const BALDING_PTS: SP[] = [
  [124, 90, 1],
  [120, 100],
  [116, 108, 1],
  [106, 104],
  [96, 112],
  [90, 132],
  [84, 150],
  [76, 164],
  [62, 172, 1],
  [49, 168],
  [44, 146],
  [44, 122],
  [50, 110],
  [62, 104],
  [74, 102],
  [88, 98],
  [104, 94],
]
export const BALDING_HAIR = spline(BALDING_PTS)

/**
 * Pompey's hair: cropped, and combed down over the brow in a fringe a little
 * proud of it, the kit's CINNA_FRINGE at the size of a portrait, invented
 * only to tell him from Antony and Caesar at his own table. For MAN_HEAD.
 */
export const FRINGE_PTS: SP[] = [
  [168, 70, 1],
  [158, 72],
  [146, 74],
  [135, 78],
  [128, 88],
  [121, 99],
  [115, 106, 1],
  [104, 102],
  [94, 110],
  [88, 130],
  [82, 148],
  [74, 162],
  [62, 170, 1],
  [50, 166],
  [42, 142],
  [42, 106],
  [54, 70],
  [78, 44],
  [110, 31],
  [141, 32],
  [161, 45],
  [169, 58],
]
export const FRINGE_HAIR = spline(FRINGE_PTS)

/**
 * The felt cap of a working man, the kit's CAP, which it gives Menas: soft,
 * rising to a rounded point above the crown so its outline is not the head's,
 * its rolled brim across the brow and above the ear cut in paper (CAP_BRIM).
 * For MAN_HEAD.
 */
export const FELT_CAP = spline([
  [42, 98, 1],
  [36, 74],
  [40, 48],
  [52, 26],
  [70, 8],
  [90, -3],
  [106, -5],
  [122, 0],
  [140, 14],
  [156, 36],
  [164, 52],
  [166, 64, 1],
  [140, 68],
  [108, 76],
  [72, 87],
])
export const CAP_BRIM = 'M44 92C80 81 124 70 165 62'
/** A fold in the felt, from the brim up towards the point. */
export const CAP_FOLD = 'M100 72C98 50 100 26 104 4'
/** Dark hair below the cap, at the back of the head to the nape. */
export const CAP_NAPE = spline([
  [46, 96, 1],
  [42, 122],
  [44, 146],
  [52, 166],
  [62, 172, 1],
  [74, 164],
  [82, 148],
  [88, 130],
  [94, 110],
  [104, 102],
  [114, 104, 1],
  [108, 92],
  [90, 88],
  [66, 92],
])

// ── Beards ──────────────────────────────────────────────────────────────────
//
// On MAN_HEAD, whose mouth is the line at y 148 and whose chin is at x 172:
// a moustache over the upper lip, the lower lip left in paper, and the beard
// from the sideburn in front of the ear along the jaw and over the chin, a
// little proud of it. Ink on the paper face, its strands cut in paper: a
// dark beard left uncut reads only as a longer chin, as the kit found.

/** The moustache over the upper lip, to the corner of the mouth. */
export const MOUSTACHE =
  'M167.6 135.8C171.2 137.4 173.8 141.2 174.6 145.4L174.6 148.2C170.6 148.6 166 148.8 161.8 149.6' +
  'C159 150.2 157 151.6 155.4 153.6C153.8 150.6 154.6 146.6 157.6 143.2C160.4 140 163.6 137.6 167.6 135.8Z'

/**
 * The short dark beard, the kit's HEAD_CASCA (Enobarbus, Menas): along the
 * jaw from the sideburn to a blunt end a little below and in front of the
 * chin.
 */
export const SHORT_BEARD_PTS: SP[] = [
  [113, 105, 1],
  [119, 104],
  [122, 116],
  [127, 128],
  [135, 137],
  [145, 143.4],
  [153, 147.6],
  [157.4, 152.4],
  [162, 155.2],
  [168, 157, 1],
  [173, 159],
  [176.6, 165],
  [177.8, 172.5],
  [177.4, 180, 1],
  [172.4, 185.4],
  [162, 188.6],
  [150, 191.6],
  [139, 192.6],
  [131, 189, 1],
  [123, 180],
  [117, 168],
  [113, 154],
  [111, 138],
  [111, 122],
]
export const SHORT_BEARD = spline(SHORT_BEARD_PTS)

const shortBySeed = new Map<number, string>()
/**
 * The short beard's strands: paper cuts from its upper edge down and a little
 * forward to its blunt end, wider and more of them towards the light ahead of
 * the face, and the moustache's, down over the lip. Fill with PAPER, clipped
 * to the beard and the moustache.
 */
export function shortBeardCuts(seed: number): string {
  const hit = shortBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)
  let d = ''
  // the beard: from the cheek edge (sideburn to the corner of the mouth) to
  // the lower edge (under the jaw to the blunt end)
  for (let i = 0; i < 20; i++) {
    const t = Math.sqrt((i + between(r, 0.2, 0.8)) / 20)
    const x0 = 116 + t * 44 + between(r, -1.5, 1.5)
    const y0 = 108 + t * 42 - Math.sin(t * Math.PI) * 4
    const x1 = 126 + t * 50 + between(r, -2, 2)
    const y1 = 186 + Math.sin(t * Math.PI) * 4 - t * 4
    d += gouge(
      x0,
      y0 + 4,
      x1,
      y1 - 3,
      between(r, 0.55, 0.95) * (0.6 + t * 0.5),
      between(r, -1.4, -0.4),
    )
  }
  // the moustache: short strands down and forward over the lip
  for (let i = 0; i < 5; i++) {
    const x = 160 + i * 2.8
    d += gouge(x, 139 + i * 0.6, x + 2.6, 148.4, 0.55, 0.2)
  }
  shortBySeed.set(seed, d)
  return d
}

// ── The crown ───────────────────────────────────────────────────────────────

/**
 * Cleopatra's crown, "the diadem" of 5.2: the kit's CROWN at the size of a
 * portrait, a plain band round the head above the brow with points rising
 * from it, and nothing on it. In profile, on her LONG_HAIR, cut in paper with
 * an ink rim; CROWN_BAND is the top edge of the band, cut in ink so the points
 * read as points on a band and not as a comb.
 */
export const HEAD_CROWN =
  'M50 75L48.4 61L55 38L66 57.4L80 21L93 53.6L106 14L119 49.6L132 18L144 46.6L153 31L159 43.2L160.4 55' +
  'C124 56 86 63 50 75Z'
export const HEAD_CROWN_BAND = 'M49 62.4C86 52.6 124 45.4 159.4 43.6'

// ── The palla ───────────────────────────────────────────────────────────────

/**
 * A veil, the palla, drawn over the head from the brow, down behind the neck
 * and over the near shoulder, as the Julius Caesar portraits cut Calpurnia's
 * (drawn again here: nothing there exports it). Its hemmed edge round the
 * face is a band cut in paper (VEIL_EDGE). The kit gives Octavia, a Roman
 * wife, the palla. For WOMAN_HEAD.
 */
export const VEIL = spline([
  [166, 62, 1],
  [156, 40],
  [122, 24],
  [82, 30],
  [52, 54],
  [36, 96],
  [30, 144],
  [20, 196],
  [2, 250],
  [-12, 300],
  [-18, 340, 1],
  [186, 340, 1],
  [178, 298],
  [164, 264],
  [144, 244],
  [120, 236],
  [104, 222],
  [101, 196],
  [107, 170],
  [112, 146],
  [115, 118],
  [124, 90],
  [140, 72],
])
export const VEIL_EDGE =
  'M166 62C150 66 132 76 124 90C116 106 114 126 112 146C108 166 101 182 101 196' +
  'C100 210 104 222 120 236C140 244 160 262 172 290C176 306 180 322 184 340'

/** The veil's folds, broad and few, as heavy cloth falls, cut in paper. */
export const VEIL_FOLDS = (() => {
  let d =
    gouge(150, 44, 64, 70, 2.2, -9) +
    gouge(132, 36, 50, 92, 2, -10) +
    gouge(60, 92, 44, 200, 2.4, 6) +
    gouge(80, 120, 70, 232, 2, 5) +
    gouge(46, 214, 6, 300, 2.6, 4) +
    gouge(70, 238, 30, 336, 2.4, 4)
  for (let i = 0; i < 4; i++) {
    const y = 256 + i * 16
    d += gouge(40 + i * 4, y, 150 - i * 2, y + 10 + i * 2, 1.8 - i * 0.2, -7 - i)
  }
  return d + gouge(168, 290, 176, 336, 1.6, 1) + gouge(152, 284, 156, 336, 1.4, 1)
})()

/** The veil drawn, with its folds and its paper edge; draw it after the head. */
export function Veil({ uid }: { uid: string }) {
  const clip = `${uid}-veil`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={VEIL} />
        </clipPath>
      </defs>
      <path d={VEIL} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${clip})`}>
        <path d={VEIL_FOLDS} fill={PAPER} />
      </g>
      <path d={VEIL_EDGE} fill="none" stroke={PAPER} strokeWidth={4.4} strokeLinecap="round" />
      <path d={VEIL_EDGE} fill="none" stroke={INK} strokeWidth={1.1} strokeLinecap="round" />
    </g>
  )
}
