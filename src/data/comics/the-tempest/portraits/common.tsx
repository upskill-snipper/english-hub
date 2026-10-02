import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { n, type Pt } from '@/components/comics/linocut/carve'

import { placing } from '../../the-merchant-of-venice/portraits/common'

/**
 * What The Tempest portraits share.
 *
 * The block, the cut ground behind a head, the paper rule, the outline and
 * placing helpers, the hand, the garment folds, the ruff, the ear, and the
 * man's and the woman's heads are The Merchant of Venice portraits' own
 * (../../the-merchant-of-venice/portraits/common.tsx, which takes most of
 * them from the Much Ado and Romeo and Juliet portraits), re-exported here
 * rather than copied: the figure kit for this play
 * (../panels/people.tsx) is cut from the same three kits, the plays are
 * drawn in the same dress, and a second copy of a helper is a copy that
 * drifts. Only what this play needs beyond them is defined below.
 *
 * ONE HEAD FOR EVERY MAN. The kit gives every man in the play the same head,
 * and these portraits keep that rule at their own size: every man is cut from
 * MAN_HEAD (or, talking, MAN_HEAD_OPEN), the same brow, the same ordinary
 * nose, the same ear, and is told from the others by what the play or the
 * kit gives him: a crown, a hat, a beard, white hair, his age, what he holds.
 * Miranda is cut from WOMAN_HEAD. CALIBAN'S HEAD IS EVERY MAN'S HEAD, cut no
 * differently: the other characters' names for him are never drawn, never a
 * marker and never a caption, and nothing in his face or his body is animal
 * or caricature. Ariel's head is a man's too, cut in paper as the rest of
 * him is, grown and never a child's.
 *
 * THE LOOK OF EACH PERSON is the kit's, and its docblock gives the text for
 * it: Prospero old, bald on the crown with a fringe of white hair, no beard,
 * in his magic mantle with its border of lozenges, with his staff; Miranda
 * about fifteen, her dark hair long and loose with one lock forward over her
 * shoulder, in a plain gown; Ariel cut in paper, his hair streaming back,
 * his body thinning into air below the waist; Caliban weathered, his thick
 * dark hair to the collar, in his coarse gaberdine; Ferdinand beardless, his
 * hair to the jaw and swept back, in a doublet, ruff and short cloak; Alonso
 * in a king's crown and a gown with a broad collar; Antonio in the Duke of
 * Milan's tall hat; Sebastian in a flat bonnet with a short beard; Gonzalo
 * in a close black cap, with white hair and a full white beard. Every
 * gentleman wears the kit's small ruff; Prospero, Gonzalo and Caliban do
 * not.
 *
 * THE DRESS IS PLAIN ON PURPOSE. Shakespeare describes the looks of very
 * few people in this play, so nobody wears anything the text does not give
 * them beyond the ordinary dress of the play's Italy of about 1610. None of
 * it comes from a film, television or stage production. The markers on each
 * portrait point only at what the play does say, and where it says nothing
 * of someone's looks the card's small print says so.
 *
 * GROUND KEYS. portraitGround caches each ground by its key in a module that
 * every text's portraits share, and The Merchant of Venice has an Antonio
 * too: every key here starts "tempest-", or a portrait would be printed on
 * another play's ground.
 *
 * Every figure is drawn facing right in its own frame (0..240 wide; 0..332
 * for head and shoulders, 0..420 for a figure to the waist) and placed with
 * `placing`; one that faces left is flipped.
 */

export {
  Buttons,
  capsule,
  ear,
  folds,
  Hand,
  handPoint,
  hatch,
  lerp2,
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
  quad2,
  ruffBand,
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

/** Where every head turns: the foot of the neck, as the Merchant portraits turn theirs. */
export const NECK_PIVOT: Pt = [112, 214]

/** A head turned by `rot` degrees about NECK_PIVOT: the transform for the head's group. */
export const turn = (rot: number) => `rotate(${rot} ${NECK_PIVOT[0]} ${NECK_PIVOT[1]})`

/**
 * A point on a head turned by `rot`, carried into the portrait through the
 * figure's placing, for a marker that must land on the turned feature.
 */
export function onTurnedHead(
  P: ReturnType<typeof placing>,
  rot: number,
  x: number,
  y: number,
): [number, number] {
  const a = (rot * Math.PI) / 180
  const dx = x - NECK_PIVOT[0]
  const dy = y - NECK_PIVOT[1]
  return P.to(
    NECK_PIVOT[0] + dx * Math.cos(a) - dy * Math.sin(a),
    NECK_PIVOT[1] + dx * Math.sin(a) + dy * Math.cos(a),
  )
}

/**
 * A tear: a drop with its point up and its round foot at (x, y), `s` its
 * size (1 is about 14 units long on a portrait head). Cut in paper with an
 * ink rim, a shadow inside its foot, and the wet track it ran down cut
 * above it, so it reads as a tear on a paper face and not as a hole.
 */
export function Tear({
  x,
  y,
  s = 1,
  track = 0,
}: {
  x: number
  y: number
  s?: number
  track?: number
}) {
  const r = 3.4 * s
  const top = y - 11 * s
  const drop =
    `M${n(x)} ${n(top)}C${n(x + 1.2 * s)} ${n(y - 7 * s)} ${n(x + r)} ${n(y - 3.4 * s)} ${n(x + r)} ${n(y)}` +
    `A${n(r)} ${n(r)} 0 1 1 ${n(x - r)} ${n(y)}C${n(x - r)} ${n(y - 3.4 * s)} ${n(x - 1.2 * s)} ${n(y - 7 * s)} ${n(x)} ${n(top)}Z`
  const shade = `M${n(x - r + 0.9 * s)} ${n(y + 0.4 * s)}A${n(r - 1 * s)} ${n(r - 1 * s)} 0 0 0 ${n(x + 1.2 * s)} ${n(y + r - 0.9 * s)}`
  return (
    <g>
      {track > 0 && (
        <path
          d={`M${n(x - 0.6 * s)} ${n(top - track)}Q${n(x + 0.6 * s)} ${n(top - track / 2)} ${n(x)} ${n(top)}`}
          fill="none"
          stroke={INK}
          strokeWidth={LINE.hairline}
          strokeLinecap="round"
        />
      )}
      <path d={drop} fill={PAPER} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
      <path d={shade} fill="none" stroke={INK} strokeWidth={1} strokeLinecap="round" />
    </g>
  )
}

/** `k` + 1 points along a quadratic curve from a through the pull of c to b. */
export function quadPts(a: Pt, c: Pt, b: Pt, k = 12): Pt[] {
  const out: Pt[] = []
  for (let i = 0; i <= k; i++) {
    const t = i / k
    out.push([
      (1 - t) * (1 - t) * a[0] + 2 * (1 - t) * t * c[0] + t * t * b[0],
      (1 - t) * (1 - t) * a[1] + 2 * (1 - t) * t * c[1] + t * t * b[1],
    ])
  }
  return out
}

/** A band of even width `w` along a polyline, as a closed shape: a border, a strap, a staff. */
export function bandAlong(pts: Pt[], w: number): string {
  const left: Pt[] = []
  const right: Pt[] = []
  for (let i = 0; i < pts.length; i++) {
    const a = pts[Math.max(0, i - 1)]
    const b = pts[Math.min(pts.length - 1, i + 1)]
    const L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1
    const v: Pt = [-(b[1] - a[1]) / L, (b[0] - a[0]) / L]
    left.push([pts[i][0] + (v[0] * w) / 2, pts[i][1] + (v[1] * w) / 2])
    right.push([pts[i][0] - (v[0] * w) / 2, pts[i][1] - (v[1] * w) / 2])
  }
  return 'M' + [...left, ...right.reverse()].map(([x, y]) => `${n(x)} ${n(y)}`).join('L') + 'Z'
}

/**
 * The King of Naples's crown on MAN_HEAD: the kit's CROWN at this size, a
 * band round the head above the brow with five tall points along its top,
 * taller than a prince's circlet so it is known as a king's. In paper with an
 * ink rim, the band's top edge cut in ink (CROWN_BAND_LINE). Alonso wears it;
 * Sebastian's portrait draws it in outline, as Antonio imagines it.
 */
export const CROWN =
  'M42 93L37 52L55 70L70 42L86 65L103 35L119 59L136 29L151 54L171 26L170 67' + 'Q106 76 42 93Z'
/** The top edge of the band, cut in ink across the crown. */
export const CROWN_BAND_LINE = 'M40 80Q105 64 170 56'
