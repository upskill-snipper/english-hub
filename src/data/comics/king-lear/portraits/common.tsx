import { INK, PAPER } from '@/components/comics/linocut/palette'
import { between, n, ribbon, rng, type Pt } from '@/components/comics/linocut/carve'

/**
 * What the King Lear portraits share.
 *
 * The block, the cut ground behind a sitter, the paper rule, the outline and
 * placing helpers, the hand with its fingers kept apart, the garment folds,
 * the ear, hair cut as locks, and the man's and the woman's heads are the
 * Shakespeare portraits' own, re-exported here through
 * ../../the-tempest/portraits/common.tsx and
 * ../../the-merchant-of-venice/portraits/common.tsx rather than copied, and
 * `once`, `ageLines`, `napeShade` and `EarCut` are the Julius Caesar
 * portraits' (../../julius-caesar/portraits/common.tsx): a second copy of a
 * helper is a copy that drifts, and one hand cutting every play keeps the
 * site one artist. Only what this play needs beyond them is defined below.
 *
 * ONE HEAD FOR EVERY MAN, ONE FOR EVERY WOMAN. Every man is cut from
 * MAN_HEAD and every woman from WOMAN_HEAD, as in every Shakespeare portrait,
 * and each is told from the others by what the play gives them: Lear's white
 * hair and beard, Gloucester's white beard and the band over his eyes,
 * Kent's grey beard, the Fool's coxcomb and motley, Edgar's knotted hair and
 * blanket, and, where the play gives nothing, a cut of hair or a coronet
 * invented only for that and named in the portrait's docblock.
 *
 * AS THE PLAY DESCRIBES THEM, AND NO FURTHER. Every portrait is drawn from
 * the held edition (src/data/full-texts/king-lear.ts, Project Gutenberg
 * #1532), and its docblock quotes the lines each detail comes from.
 * Shakespeare describes few of these people, and most of what he gives is
 * said by someone else. Where the play gives no looks, the sitter is drawn
 * plainly in the dress of the time, the markers point only at what the play
 * does say, and the card's small print says so. Nothing is taken from a film,
 * television or stage production.
 *
 * NEVER DRAWN, in any portrait (the rules in full are in ../index.ts).
 * Gloucester's eyes are covered by a plain cloth band with nothing beneath
 * it, and no hand is near his face. No wound, no blood, no blade at a body.
 * Edgar as Poor Tom is decently covered, and his madness, a disguise, is not
 * drawn as madness: his face is steady. Lear is drawn with his dignity. No
 * marker is a curse or a line of abuse, whoever in the play speaks it.
 *
 * RED IS NEVER ON A MOUTH OR A CHIN. A red mark near a mouth reads at a
 * glance as blood. In this play no face is printed in red at all, not even as
 * a flush on the cheek: a red mark beside an eye reads as a hurt eye in the
 * play of Gloucester's eyes (the panels' rule, ../panels/people.tsx). The
 * only red on a portrait is its numbered markers.
 *
 * MARKERS NEVER CROSS A FACE. A marker for the face, a cheek or the skin
 * sits on the face with no line, as the pilot's "shrivelled his cheek" sits
 * on Scrooge's. Any other marker that reaches a head comes to its feature
 * from in front at the feature's own height, as Scrooge's eye marker does,
 * or, for the hair at the back of the head, from behind at its own height:
 * never down from above the head and never up from the neck.
 *
 * GROUND KEYS. portraitGround caches each ground by its key in a module that
 * every text's portraits share: every key here starts "lear-".
 *
 * Every figure is drawn facing right in its own 0..240 by 0..332 frame (a
 * figure drawn to the waist runs on to 420) and placed with `placing`; one
 * that faces left is flipped.
 */

export {
  Buttons,
  capsule,
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
  bandAlong,
  NECK_PIVOT,
  onTurnedHead,
  quadPts,
  Tear,
  turn,
} from '../../the-tempest/portraits/common'
export {
  ageLines,
  EarCut,
  napeShade,
  once,
  YOUTH_EAR,
  YOUTH_HEAD,
  YOUTH_HEAD_OPEN,
  YOUTH_JAW,
  YOUTH_MOUTH,
  YOUTH_PTS,
  YouthEye,
  YouthNoseAndMouth,
} from '../../julius-caesar/portraits/common'

/**
 * A white brow on MAN_HEAD: short strokes of ink over the paper face, so it
 * reads as white hair and not as a line. `lift` raises its inner end (towards
 * the nose), for sorrow; `knit` lowers it, for a frown.
 */
export function whiteBrow(seed: number, lift = 0, knit = 0): string {
  const r = rng(seed)
  let d = ''
  for (let i = 0; i < 13; i++) {
    const t = i / 12
    const x = 142.5 + t * 23 + between(r, -0.5, 0.5)
    const y = 89 - Math.sin(t * Math.PI) * 2 - t * lift + t * knit + between(r, -0.6, 0.6)
    d += `M${n(x)} ${n(y)}l${n(between(r, 2.4, 4.2))} ${n(between(r, -2.8, -0.6))}`
  }
  return d
}

/**
 * Fur along a band, as on the collar of a gown: short ink strokes standing
 * off a paper band in rows, each leaning a little, so the band reads as pelt
 * and not as cloth. `along` is the band's spine, `w` its width.
 */
export function furStrokes(seed: number, along: Pt[], w: number, rows = 3): string {
  const r = rng(seed)
  let d = ''
  for (let i = 0; i < along.length - 1; i++) {
    const [ax, ay] = along[i]
    const [bx, by] = along[i + 1]
    const L = Math.hypot(bx - ax, by - ay) || 1
    const tx = (bx - ax) / L
    const ty = (by - ay) / L
    const nx = -ty
    const ny = tx
    const k = Math.max(1, Math.round(L / 3.6))
    for (let j = 0; j < k; j++) {
      const t = (j + between(r, 0.1, 0.9)) / k
      const x = ax + (bx - ax) * t
      const y = ay + (by - ay) * t
      for (let row = 0; row < rows; row++) {
        const off = ((row + 0.5) / rows - 0.5) * w + between(r, -1, 1)
        const len = between(r, 3, 5.5)
        const lean = between(r, -0.5, 0.5)
        d += `M${n(x + nx * off)} ${n(y + ny * off)}l${n((nx + tx * lean) * len)} ${n((ny + ty * lean) * len)}`
      }
    }
  }
  return d
}

/**
 * A long beard or long hair in waves, as tapered ink ribbons on a paper mass:
 * `count` locks from points on `from(t)` to points on `to(t)`, each waved
 * across its length. Fill with INK over a white beard.
 */
export function waves(
  seed: number,
  count: number,
  from: (t: number) => Pt,
  to: (t: number) => Pt,
  width: [number, number],
  amp = 2.2,
): string {
  const r = rng(seed)
  let d = ''
  for (let i = 0; i < count; i++) {
    const t = (i + between(r, 0.2, 0.8)) / count
    const [x0, y0] = from(t)
    const [x1, y1] = to(t)
    const ph = between(r, 0, 6)
    const pts: Pt[] = []
    for (let k = 0; k <= 10; k++) {
      const u = k / 10
      pts.push([x0 + (x1 - x0) * u + Math.sin(u * 7 + ph) * amp, y0 + (y1 - y0) * u])
    }
    d += ribbon(pts, between(r, width[0], width[1]), 0.8)
  }
  return d
}

/** The point a fraction `t` (0 to 1) of the way along a polyline, by length. */
export function along(pts: Pt[], t: number): Pt {
  const lens: number[] = []
  let total = 0
  for (let i = 0; i < pts.length - 1; i++) {
    const L = Math.hypot(pts[i + 1][0] - pts[i][0], pts[i + 1][1] - pts[i][1])
    lens.push(L)
    total += L
  }
  let d = Math.max(0, Math.min(1, t)) * total
  for (let i = 0; i < lens.length; i++) {
    if (d <= lens[i] || i === lens.length - 1) {
      const u = lens[i] ? Math.min(1, d / lens[i]) : 0
      return [
        pts[i][0] + (pts[i + 1][0] - pts[i][0]) * u,
        pts[i][1] + (pts[i + 1][1] - pts[i][1]) * u,
      ]
    }
    d -= lens[i]
  }
  return pts[pts.length - 1]
}

/** A ring brooch, as the cloak of a man of rank is pinned: a paper ring with an ink rim and its pin. */
export function Brooch({ x, y, rad = 7 }: { x: number; y: number; rad?: number }) {
  return (
    <g fill="none" strokeLinecap="round">
      <circle cx={x} cy={y} r={rad} stroke={INK} strokeWidth={5.2} />
      <circle cx={x} cy={y} r={rad} stroke={PAPER} strokeWidth={2.4} />
      <path
        d={`M${n(x - rad * 1.7)} ${n(y + rad * 0.9)}L${n(x + rad * 1.7)} ${n(y - rad * 0.9)}`}
        stroke={INK}
        strokeWidth={3.8}
      />
      <path
        d={`M${n(x - rad * 1.7)} ${n(y + rad * 0.9)}L${n(x + rad * 1.7)} ${n(y - rad * 0.9)}`}
        stroke={PAPER}
        strokeWidth={1.5}
      />
    </g>
  )
}
