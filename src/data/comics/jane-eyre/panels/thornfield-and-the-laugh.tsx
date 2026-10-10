import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rays,
  rng,
  wedge,
  type Rng,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Figure,
  GRACE_CUTS,
  GRACE_HAIR,
  GRACE_HAIR_CUTS,
  HEAD_GRACE,
  HEAD_JANE,
  HOLD_HAND,
  JaneFace,
  MOB_CAP,
  MOB_CAP_BAND,
  OPEN_HAND,
  apron,
  headAt,
  woman,
  type P,
} from './people'

/**
 * Chapters 11 and 12: "Thornfield and the laugh", the sixth moment in the
 * guide's timeline. Every detail is from the held edition
 * (src/data/full-texts/jane-eyre.ts).
 *
 * THE MOMENT DRAWN. Jane alone on the third storey, pacing the corridor,
 * stopped and turned back by the laugh, as Grace Poole comes out of her room:
 * "my sole relief was to walk along the corridor of the third storey,
 * backwards and forwards"; "When thus alone, I not unfrequently heard Grace
 * Poole's laugh"; "she would come out of her room with a basin, or a plate,
 * or a tray in her hand" (Chapter 12).
 *
 * - "I lingered in the long passage to which this led, separating the front
 *   and back rooms of the third storey: narrow, low, and dim, with only one
 *   little window at the far end, and looking, with its two rows of small
 *   black doors all shut, like a corridor in some Bluebeard's castle"
 *   (Chapter 11). So the passage runs away from us to one small window, the
 *   only light, under a low beamed ceiling, with two rows of small black
 *   doors; one of them, Grace Poole's, stands open on her dim room.
 * - "It was a curious laugh; distinct, formal, mirthless"; "It passed off in
 *   a clamorous peal that seemed to wake an echo in every lonely chamber"
 *   (Chapter 11). So the laugh is cut as broken rings of sound out of the
 *   open doorway, away from both faces.
 * - GRACE POOLE as the figure kit cuts her (./people.tsx): "a set,
 *   square-made figure, red-haired, and with a hard, plain face" (Chapter
 *   11), in a servant's cap and apron, her red hair in ink and left to the
 *   words; she stands on her threshold with a tray and a covered basin.
 * - JANE as the kit cuts her grown: "I had brushed my hair very smooth, and
 *   put on my black frock ... and adjusted my clean white tucker" (Chapter
 *   11). She has turned back towards the sound, one hand caught up to her
 *   breast.
 *
 * Nothing is red in this plate: the corridor is lit only by its window.
 *
 * Seeds: 601 to 609.
 */

const W = 860
const H = 340

// ── THE CORRIDOR, IN PERSPECTIVE ────────────────────────────────────────────
// One point, looking down the passage towards the little window at its far
// end. Lengths in metres: the passage 3.4 wide and 2.3 high ("narrow, low,
// and dim"), the eye a little over a metre and a half above the boards.

/** The vanishing point: the eye's level, and the far end's centre line. */
const VP = { x: 624, y: 128 }
/** The focal length, in drawing units per metre at one metre. */
const F = 480
const LEFT = -2.3
const RIGHT = 1.1
const FLOOR = 1.6
const CEIL = -0.7
/** How deep the far end is. */
const FAR = 8.5
/** The height of the small doors. */
const DOOR_H = 1.85

const at = (X: number, Y: number, Z: number): P => [VP.x + (F * X) / Z, VP.y + (F * Y) / Z]
const pt = ([x, y]: P) => `${n(x)} ${n(y)}`
const quad = (a: P, b: P, c: P, d: P) => `M${pt(a)}L${pt(b)}L${pt(c)}L${pt(d)}Z`

/** The far end wall, and the little window in it. */
const END = { tl: at(LEFT, CEIL, FAR), br: at(RIGHT, FLOOR, FAR) }
const WIN = { tl: at(-0.75, -0.35, FAR), br: at(0.05, 0.75, FAR) }
const WIN_C: P = [(WIN.tl[0] + WIN.br[0]) / 2, (WIN.tl[1] + WIN.br[1]) / 2]

/** A door in a side wall: from depth z0 to z1. */
function door(X: number, z0: number, z1: number) {
  const top = FLOOR - DOOR_H
  return quad(at(X, top, z0), at(X, top, z1), at(X, FLOOR, z1), at(X, FLOOR, z0))
}
/** "two rows of small black doors all shut": depths along each wall. */
const LEFT_DOORS: [number, number][] = [
  [1.9, 2.75],
  [3.3, 4.15],
  [4.75, 5.5],
  [6.05, 6.75],
  [7.3, 7.9],
]
const RIGHT_DOORS: [number, number][] = [
  [2.4, 3.2],
  [3.9, 4.65],
  [5.3, 6],
  [6.6, 7.25],
]
/** Grace Poole's door, the second on the left, stands open. */
const OPEN = LEFT_DOORS[1]
/** The beams across the low ceiling. */
const BEAMS = [2.4, 3.1, 3.8, 4.5, 5.2, 5.9, 6.6, 7.3, 8.0]

/** Where the laugh comes from: the dark of Grace Poole's open doorway. */
const LAUGH: P = [292, 200]

/**
 * A gouge field cut only in the strips of wall between the doors and above
 * them: the doors are solid ink, and cuts hidden under them would only add
 * weight to the file.
 */
function wallField(
  r: Rng,
  X: number,
  doors: [number, number][],
  light: (x: number, y: number) => number,
  spacing: number,
) {
  const xs = (z: number) => at(X, 0, z)[0]
  const topOf = (z: number) => at(X, FLOOR - DOOR_H, z)[1]
  const sorted = [...doors].sort((a, b) => (X < 0 ? a[0] - b[0] : b[0] - a[0]))
  const boxes: { x0: number; x1: number; y0: number; y1: number }[] = []
  let edge = X < 0 ? 0 : END.br[0]
  for (const [z0, z1] of sorted) {
    const a = xs(z0)
    const b = xs(z1)
    const lo = Math.min(a, b)
    const hi = Math.max(a, b)
    if (lo > edge) boxes.push({ x0: edge, x1: lo, y0: 0, y1: H })
    boxes.push({ x0: lo, x1: hi, y0: 0, y1: Math.max(topOf(z0), topOf(z1)) })
    edge = hi
  }
  boxes.push({ x0: edge, x1: X < 0 ? END.tl[0] : W, y0: 0, y1: H })
  const opts = {
    spacing,
    len: [12, 44] as [number, number],
    gap: [7, 20] as [number, number],
    max: 3.4,
  }
  return boxes.map((b) => gougeField(r, b, light, opts)).join('')
}

type Marks = {
  leftWall: string
  rightWall: string
  ceiling: string
  floor: string
  boards: string
  glow: string
  endWall: string
  rings: string
  room: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // All the light comes from the little window at the far end: the cuts in
  // the plaster, the beams and the boards follow it, and the near end of the
  // passage is dark.
  const light = (x: number, y: number) => {
    const d = Math.hypot((x - WIN_C[0]) * 0.85, (y - WIN_C[1]) * 1.25)
    return Math.max(clamp(1 - d / 470) ** 1.5, 0.06)
  }
  const leftWall = wallField(rng(601), LEFT, LEFT_DOORS, light, 7)
  const rightWall = wallField(rng(602), RIGHT, RIGHT_DOORS, light, 8.4)
  const ceiling = gougeField(rng(603), { x0: 0, x1: W, y0: 0, y1: END.tl[1] }, light, {
    spacing: 7.5,
    len: [14, 60],
    gap: [10, 26],
    max: 2.6,
  })
  // The boards run down the passage to the vanishing point.
  const r = rng(604)
  let boards = ''
  for (let X = LEFT + 0.22; X < RIGHT; X += 0.34) {
    const near = at(X, FLOOR, 3.4)
    const far = at(X, FLOOR, FAR)
    let t0 = between(r, 0, 0.1)
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(r, 0.25, 0.6))
      boards += wedge(
        near[0] + (far[0] - near[0]) * t0,
        near[1] + (far[1] - near[1]) * t0,
        near[0] + (far[0] - near[0]) * t1,
        near[1] + (far[1] - near[1]) * t1,
        2.4 * (1 - t0) + 0.5,
        2.4 * (1 - t1) + 0.5,
      )
      t0 = t1 + between(r, 0.02, 0.06)
    }
  }
  // The floor's light: a pale path down the middle of the passage, cut as
  // strokes across the boards that thin towards the walls.
  const rf = rng(605)
  let floor = ''
  for (let Z = 3.4; Z < FAR; Z += 0.13 + Z * 0.016) {
    const y = VP.y + (F * FLOOR) / Z
    let X = LEFT + between(rf, 0, 0.2)
    while (X < RIGHT) {
      const len = between(rf, 0.25, 0.7)
      const mid = X + len / 2
      const L = clamp(1 - Math.abs(mid + 0.4) / 2.1) * clamp(0.45 + Z / 12)
      if (rf() < 0.15 + L * 0.85) {
        const a = at(X, FLOOR, Z)
        const b = at(X + len, FLOOR, Z)
        floor += gouge(a[0], y, b[0], y + between(rf, -0.4, 0.4), 0.5 + L * 2.6 * (3 / Z) ** 0.4)
      }
      X += len + between(rf, 0.06, 0.32) * (1.2 - L)
    }
  }
  const glow = rays(rng(606), WIN_C[0], WIN_C[1], { from: 36, to: 120, every: 7.5, width: 2.6 })
  const endWall = gougeField(
    rng(607),
    { x0: END.tl[0], x1: END.br[0], y0: END.tl[1], y1: END.br[1] },
    () => 0.7,
    { spacing: 7.4, len: [8, 22], gap: [5, 12], max: 2.4 },
  )
  // The laugh: short arcs of sound out of the dark doorway and back along
  // the wall, away from both faces: "a clamorous peal that seemed to wake an
  // echo in every lonely chamber".
  const rr = rng(608)
  let rings = ''
  for (const [rad, a0, a1] of [
    [20, 2.6, 4.2],
    [32, 2.5, 4.35],
    [45, 2.55, 4.4],
    [58, 2.65, 4.3],
  ] as [number, number, number][])
    rings += arcDashes(rr, LAUGH[0], LAUGH[1], rad, a0, a1, [9, 18], [5, 10])
  // Grace Poole's room, seen through the doorway: dim, a little daylight from
  // its "narrow casement" on the floor and the far wall, so that she stands
  // out against it.
  const dl = at(LEFT, 0, OPEN[0])[0]
  const dr = at(LEFT, 0, OPEN[1])[0]
  const room = gougeField(
    rng(609),
    { x0: dl, x1: dr, y0: 90, y1: H },
    (_x, y) => 0.2 + clamp(1 - Math.abs(y - 165) / 80) * 0.42,
    {
      spacing: 6,
      len: [6, 16],
      gap: [6, 14],
      max: 1.6,
    },
  )
  cached = { leftWall, rightWall, ceiling, floor, boards, glow, endWall, rings, room }
  return cached
}

/** The planes of the passage, for clipping the cuts to each. */
const PLANES = {
  left: quad([0, -40], at(LEFT, CEIL, FAR), at(LEFT, FLOOR, FAR), [0, 640]),
  right: quad([W, -40], at(RIGHT, CEIL, FAR), at(RIGHT, FLOOR, FAR), [W, 640]),
  ceiling: quad([-40, -6], [W + 40, -6], at(RIGHT, CEIL, FAR), at(LEFT, CEIL, FAR)),
  floor: quad([-40, H + 6], at(LEFT, FLOOR, FAR), at(RIGHT, FLOOR, FAR), [W + 40, H + 6]),
}

/** A beam across the ceiling at depth z: its lit underside, a band in perspective. */
function beam(z: number) {
  return quad(
    at(LEFT, CEIL, z),
    at(RIGHT, CEIL, z),
    at(RIGHT, CEIL + 0.14, z + 0.06),
    at(LEFT, CEIL + 0.14, z + 0.06),
  )
}
/** The skirting along the foot of a wall, from depth z0 to the far end. */
function skirting(X: number, z0: number) {
  return quad(
    at(X, FLOOR - 0.12, z0),
    at(X, FLOOR - 0.12, FAR),
    at(X, FLOOR, FAR),
    at(X, FLOOR, z0),
  )
}

// ── THE PEOPLE ──────────────────────────────────────────────────────────────

/**
 * Jane, stopped in her pacing and turned back towards the sound: her black
 * frock and white tucker, her near hand caught up to her breast.
 */
const JANE_HEAD = { d: HEAD_JANE, at: [560, 164] as P, scale: 1.14 }
const JANE_T = headAt(-1, JANE_HEAD.at, 0, JANE_HEAD.scale)
const JANE_NEAR: P[] = [
  [564, 198],
  [572, 232],
  [552, 222],
]
const JANE_FAR: P[] = [
  [566, 198],
  [574, 230],
  [574, 262],
]
const JANE = woman({
  facing: -1,
  neck: [562, 192],
  waist: [564, 226],
  hemY: 332,
  head: JANE_HEAD,
  arm: 8,
  gown: { shoulder: 25, waistW: 17, front: 26, back: 32 },
  near: { arm: JANE_NEAR, hand: { parts: OPEN_HAND, scale: 0.86, rot: -16 } },
  far: { arm: JANE_FAR },
  toes: [[541, 330]],
})

/**
 * Grace Poole, on the threshold of her room with a tray, square and staid,
 * facing down the passage, her figure against the dim room behind her. Her
 * cap and apron are a servant's.
 */
const GRACE_HEAD = { d: HEAD_GRACE, at: [329, 149] as P, scale: 1.16 }
const GRACE_T = headAt(1, GRACE_HEAD.at, 0, GRACE_HEAD.scale)
const GRACE_WAIST: P = [325, 213]
const GRACE_NEAR: P[] = [
  [333, 187],
  [339, 223],
  [361, 229],
]
const GRACE_FAR: P[] = [
  [319, 187],
  [319, 223],
  [345, 229],
]
const GRACE = woman({
  facing: 1,
  neck: [327, 177],
  waist: GRACE_WAIST,
  hemY: 336,
  head: GRACE_HEAD,
  arm: 9,
  gown: { shoulder: 33, waistW: 26, front: 26, back: 28 },
  near: { arm: GRACE_NEAR, hand: { parts: HOLD_HAND, scale: 0.95, rot: -8 } },
  far: { arm: GRACE_FAR, hand: { parts: HOLD_HAND, scale: 0.95, rot: -8 } },
  toes: [[341, 334]],
})
/** Her tray, carried level, with a covered basin on it. */
const TRAY = 'M341 221L399 221L397 228L343 228Z'
const BASIN = 'M355 221C355 212 362 207 371 207C380 207 387 212 387 221Z'

function ThornfieldAndTheLaugh({ uid }: ArtProps) {
  const m = marks()
  const id = {
    left: `${uid}-left`,
    right: `${uid}-right`,
    ceiling: `${uid}-ceiling`,
    floor: `${uid}-floor`,
    end: `${uid}-end`,
    room: `${uid}-room`,
  }
  const openHead = at(LEFT, FLOOR - DOOR_H, OPEN[0])
  const openHeadFar = at(LEFT, FLOOR - DOOR_H, OPEN[1])
  const openFoot = at(LEFT, FLOOR, OPEN[0])
  const openFootFar = at(LEFT, FLOOR, OPEN[1])
  return (
    <>
      <defs>
        <clipPath id={id.left}>
          <path d={PLANES.left} />
        </clipPath>
        <clipPath id={id.right}>
          <path d={PLANES.right} />
        </clipPath>
        <clipPath id={id.ceiling}>
          <path d={PLANES.ceiling} />
        </clipPath>
        <clipPath id={id.floor}>
          <path d={PLANES.floor} />
        </clipPath>
        <clipPath id={id.end}>
          <rect
            x={END.tl[0]}
            y={END.tl[1]}
            width={END.br[0] - END.tl[0]}
            height={END.br[1] - END.tl[1]}
          />
        </clipPath>
        <clipPath id={id.room}>
          <path d={door(LEFT, OPEN[0], OPEN[1])} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [520, 200], push: 1.03 })}>
        {/* the plaster walls and the low ceiling, lit only from the far end */}
        <g clipPath={`url(#${id.left})`}>
          <path d={m.leftWall} fill={PAPER} />
        </g>
        <g clipPath={`url(#${id.right})`}>
          <path d={m.rightWall} fill={PAPER} />
        </g>
        <g clipPath={`url(#${id.ceiling})`}>
          <path d={m.ceiling} fill={PAPER} />
          <g fill={INK} stroke={PAPER} strokeWidth={LINE.hairline}>
            {BEAMS.map((z) => (
              <path key={z} d={beam(z)} />
            ))}
          </g>
        </g>
        {/* the corners where the walls meet the ceiling */}
        <path
          d={`M${pt(at(LEFT, CEIL, 1.2))}L${pt(at(LEFT, CEIL, FAR))}M${pt(at(RIGHT, CEIL, 1.2))}L${pt(at(RIGHT, CEIL, FAR))}`}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        {/* the boards, pale down the middle where the light falls */}
        <g clipPath={`url(#${id.floor})`}>
          <path d={m.floor} fill={PAPER} />
          <path d={m.boards} fill={INK} />
        </g>
        <g fill={INK} stroke={PAPER} strokeWidth={LINE.hairline}>
          <path d={skirting(LEFT, 1.4)} />
          <path d={skirting(RIGHT, 1.4)} />
        </g>

        {/* the far end: one little window, the only light in the passage */}
        <rect
          x={END.tl[0]}
          y={END.tl[1]}
          width={END.br[0] - END.tl[0]}
          height={END.br[1] - END.tl[1]}
          fill={INK}
        />
        <g clipPath={`url(#${id.end})`}>
          <path d={m.endWall} fill={PAPER} />
          <path d={m.glow} fill={PAPER} />
        </g>
        <rect
          x={WIN.tl[0] - 3}
          y={WIN.tl[1] - 3}
          width={WIN.br[0] - WIN.tl[0] + 6}
          height={WIN.br[1] - WIN.tl[1] + 6}
          fill={INK}
        />
        <rect
          x={WIN.tl[0]}
          y={WIN.tl[1]}
          width={WIN.br[0] - WIN.tl[0]}
          height={WIN.br[1] - WIN.tl[1]}
          fill={PAPER}
        />
        <path
          d={`M${n(WIN_C[0])} ${n(WIN.tl[1])}V${n(WIN.br[1])}M${n(WIN.tl[0])} ${n(WIN_C[1])}H${n(WIN.br[0])}`}
          stroke={INK}
          strokeWidth={2}
        />

        {/* the two rows of small black doors, all shut but one */}
        <g fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round">
          {LEFT_DOORS.filter((d) => d !== OPEN).map(([z0, z1]) => (
            <path key={z0} d={door(LEFT, z0, z1)} />
          ))}
          {RIGHT_DOORS.map(([z0, z1]) => (
            <path key={z0} d={door(RIGHT, z0, z1)} />
          ))}
        </g>
        <g fill={PAPER}>
          {LEFT_DOORS.filter((d) => d !== OPEN).map(([z0, z1]) => {
            const a = at(LEFT, FLOOR - 0.95, z0 + (z1 - z0) * 0.82)
            return <circle key={z0} cx={n(a[0])} cy={n(a[1])} r={n(clamp(10 / z0, 1.2, 4))} />
          })}
          {RIGHT_DOORS.map(([z0, z1]) => {
            const a = at(RIGHT, FLOOR - 0.95, z0 + (z1 - z0) * 0.82)
            return <circle key={z0} cx={n(a[0])} cy={n(a[1])} r={n(clamp(10 / z0, 1.2, 3))} />
          })}
        </g>

        {/* Grace Poole's door, open on her dim room */}
        <path d={door(LEFT, OPEN[0], OPEN[1])} fill={INK} />
        <g clipPath={`url(#${id.room})`}>
          <path d={m.room} fill={PAPER} />
        </g>
        <path
          d={`M${pt(openFoot)}L${pt(openHead)}L${pt(openHeadFar)}L${pt(openFootFar)}`}
          fill="none"
          stroke={PAPER}
          strokeWidth={LINE.bold}
          strokeLinejoin="round"
        />
        {/* the laugh, out of that room */}
        <path
          className="lc-fade-in"
          style={timing({ delay: 0.9, dur: 0.6 })}
          d={m.rings}
          fill="none"
          stroke={PAPER}
          strokeWidth={2.4}
          strokeLinecap="round"
        />

        {/* Grace Poole, with her tray */}
        <Figure parts={GRACE}>
          <path d={apron(GRACE_WAIST, 328, 1, 34, 7)} fill={PAPER} stroke={INK} strokeWidth={1} />
          <g transform={GRACE_T}>
            <path d={GRACE_HAIR} fill={INK} />
            <path d={GRACE_HAIR_CUTS} fill={PAPER} />
            <path d={MOB_CAP} fill={PAPER} stroke={INK} strokeWidth={0.9} strokeLinejoin="round" />
            <path d={MOB_CAP_BAND} fill="none" stroke={INK} strokeWidth={0.8} />
            <path d={GRACE_CUTS} fill={PAPER} />
          </g>
        </Figure>
        <path d={TRAY} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path d={BASIN} fill={PAPER} stroke={INK} strokeWidth={1.1} />
        <path d="M369 207Q371 202 373 207" fill="none" stroke={INK} strokeWidth={1.6} />

        {/* Jane, turned back towards the laugh */}
        <Figure parts={JANE}>
          <JaneFace t={JANE_T} />
        </Figure>
      </g>
    </>
  )
}

export const thornfieldAndTheLaugh: LinocutArt = {
  width: W,
  height: H,
  Draw: ThornfieldAndTheLaugh,
}
