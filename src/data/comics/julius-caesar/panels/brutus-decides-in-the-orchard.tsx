import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rays,
  ribbon,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { CutFigure, EYE_DOWN, Person, limb, mitt, type Part } from './people'
import { HEAD_YOUTH } from '../../much-ado-about-nothing/panels/people'

/**
 * Act 2, Scene 1: "Brutus decides in the orchard", the fifth moment in the
 * guide's timeline. Every detail is from the scene in the held edition
 * (Project Gutenberg #1522, src/data/full-texts/julius-caesar.ts):
 *
 * - "Rome. Brutus' orchard." Before dawn: "I cannot, by the progress of the
 *   stars, Give guess how near to day"; "The clock hath stricken three"; and
 *   Cinna: "yon grey lines That fret the clouds are messengers of day". So
 *   the sky is night, with stars, and low in the east, on the right, grey
 *   lines cut through the clouds. Fruit trees stand about the orchard, and
 *   its wall runs behind.
 * - "The exhalations, whizzing in the air Give so much light that I may read
 *   by them." One falls high over the orchard, cut as the falling fire of the
 *   night before is cut (./a-night-of-storms-and-portents.tsx), in the spot
 *   colour.
 * - "The taper burneth in your closet, sir." Brutus's house is on the left,
 *   its door open, the taper burning red within and its light spilling out
 *   on the threshold, where Lucius sleeps sitting, his head on his knees: "Boy!
 *   Lucius! Fast asleep? It is no matter; Enjoy the honey-heavy dew of
 *   slumber" (said as the conspirators go, so he is asleep while they talk).
 * - "Is Brutus sick, and is it physical To walk unbraced". Brutus has risen
 *   from his bed: an ungirt robe and a loose mantle (the kit's 'unbraced',
 *   ./people.tsx), his brows drawn up.
 * - "Let Antony and Caesar fall together." / "Let us be sacrificers, but not
 *   butchers, Caius." Lean Cassius, in his cloak, leans in, frowning, urging
 *   with a low open hand; Brutus faces him and holds up an open hand, its
 *   fingers spread, to stop him: the moment he overrules him. (Brutus's hand
 *   was first laid on Cassius's arm, and at panel size the two hands met like
 *   a handshake, which says they agree; a raised forefinger was tried next,
 *   and at panel size read as a thumb raised in approval.)
 * - "Enter Cassius, Casca, Decius, Cinna, Metellus Cimber and Trebonius";
 *   "their hats are pluck'd about their ears, And half their faces buried in
 *   their cloaks". The others stand together under the open sky on the
 *   right, hats pulled down and cloaks over their faces, as Lucius saw them:
 *   four are drawn, the fifth lost behind them in the dark. One has turned to
 *   the grey in the east, as Decius does: "Here lies the east: doth not the
 *   day break here?"
 *
 * Portia comes into the orchard only after they have gone, and is not drawn;
 * the wound she shows Brutus is never drawn on this site (the kit's rules).
 *
 * Seeds: 5501 (sky), 5502 (stars), 5503 (wall), 5504 (trees), 5505 (grass),
 * 5506 (the falling fire), 5507 (the light in the door).
 */

const W = 860
const H = 340
/** The top of the orchard wall, and the ground line. */
const WALL = 212
const GROUND = 262
/** Brutus's door, and the taper's light within it. */
const DOOR = { x0: 38, x1: 104, top: 168 }

type Marks = {
  sky: string
  stars: string
  dawn: string
  wall: string
  grass: string
  trees: { crown: string; cuts: string; trunks: string }
  fire: { body: string; glow: string; head: string }
  doorLight: string
}

/** One fruit tree: a short trunk forking into boughs, under a broad round crown. */
function tree(r: () => number, x: number, base: number, h: number, w: number) {
  let crown = ''
  const cy = base - h
  for (let k = 0; k < 9; k++) {
    const a = (k / 9) * Math.PI * 2
    const cx = x + Math.cos(a) * w * 0.34 + between(r, -4, 4)
    const yy = cy + Math.sin(a) * h * 0.2 + between(r, -3, 3)
    const rad = w * between(r, 0.24, 0.32)
    crown += `M${n(cx - rad)} ${n(yy)}a${n(rad)} ${n(rad * 0.86)} 0 1 0 ${n(rad * 2)} 0a${n(rad)} ${n(rad * 0.86)} 0 1 0 ${n(-rad * 2)} 0Z`
  }
  // leaves: short cuts on the crown, thicker towards the dawn on the right
  let cuts = ''
  for (let k = 0; k < 70; k++) {
    const a = between(r, 0, Math.PI * 2)
    const d = Math.sqrt(r()) * 0.5
    const lx = x + Math.cos(a) * w * d
    const ly = cy + Math.sin(a) * h * 0.32 * d * 1.6
    const L = clamp(0.3 + (lx - x) / w + between(r, -0.2, 0.2))
    if (r() > 0.25 + L * 0.6) continue
    const ang = between(r, -0.8, 0.2)
    cuts += gouge(lx, ly, lx + Math.cos(ang) * 5, ly + Math.sin(ang) * 5, 0.5 + L * 0.8)
  }
  const trunks =
    ribbon(
      [
        [x - 2, base],
        [x - 1, base - h * 0.3],
        [x - 6, base - h * 0.55],
        [x - 16, base - h * 0.8],
      ],
      9,
      0.4,
      false,
    ) +
    ribbon(
      [
        [x, base - h * 0.32],
        [x + 8, base - h * 0.55],
        [x + 18, base - h * 0.78],
      ],
      6,
      0.4,
      false,
    )
  return { crown, cuts, trunks }
}

/** One of the exhalations: a burning head trailing fire, as the storm's are cut. */
function exhalation(x: number, y: number, size: number, angle: number) {
  const a = (angle * Math.PI) / 180
  const u: Pt = [Math.cos(a), Math.sin(a)]
  const v: Pt = [-u[1], u[0]]
  const at = (p: number, q: number): Pt => [x + u[0] * p + v[0] * q, y + u[1] * p + v[1] * q]
  let body = ''
  for (const [q, len, w] of [
    [0, 86, 10],
    [-4.6, 52, 4.4],
    [4.6, 46, 4],
  ] as const) {
    const pts: Pt[] = [0, 0.2, 0.4, 0.6, 0.8, 1].map((t) =>
      at(-t * len * size, (q * (0.6 + t) + Math.sin(t * 7 + q) * 1.6 * t) * size),
    )
    body += ribbon(pts, w * size, 0.75, false)
  }
  const R = 5.6 * size
  const head = `M${n(x - R)} ${n(y)}a${n(R)} ${n(R)} 0 1 0 ${n(R * 2)} 0a${n(R)} ${n(R)} 0 1 0 ${n(-R * 2)} 0Z`
  body += head
  const glow = gouge(
    x - u[0] * 3.6 * size,
    y - u[1] * 3.6 * size,
    x + u[0] * 2.4 * size,
    y + u[1] * 2.4 * size,
    1.7 * size,
  )
  return { body, glow, head }
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The night sky: cuts that grow towards the east and the horizon, where the
  // first grey of the morning is coming.
  const sky = gougeField(
    rng(5501),
    { x0: 0, x1: W, y0: 4, y1: WALL },
    (x, y) =>
      clamp(
        0.04 +
          Math.pow(y / WALL, 2.2) * 0.3 +
          Math.max(0, (x - 440) / 420) * Math.pow(y / WALL, 1.6) * 0.62,
      ),
    { spacing: 6.4, len: [30, 110], gap: [12, 44], max: 2.8 },
  )
  const s = rng(5502)
  let stars = ''
  for (let i = 0; i < 46; i++) {
    const x = between(s, 10, W - 10)
    const y = between(s, 10, 120)
    const rad = between(s, 0.8, 1.7)
    stars += `M${n(x - rad)} ${n(y)}a${n(rad)} ${n(rad)} 0 1 0 ${n(rad * 2)} 0a${n(rad)} ${n(rad)} 0 1 0 ${n(-rad * 2)} 0Z`
  }
  // "yon grey lines That fret the clouds": long cuts low in the east,
  // broadening towards the horizon
  let dawn = ''
  for (let k = 0; k < 8; k++) {
    const y = 138 + k * 8.4 + between(s, -1.4, 1.4)
    const x0 = 500 + (7 - k) * 22 + between(s, -16, 16)
    dawn += gouge(x0, y, W + 10, y + between(s, -2, 2), 0.9 + k * 0.32)
  }
  const wall = gougeField(
    rng(5503),
    { x0: 150, x1: W, y0: WALL + 4, y1: GROUND - 2 },
    (x) => clamp(0.08 + (x / W) * 0.3),
    { spacing: 8, len: [16, 52], gap: [10, 30], max: 1.6 },
  )
  const grass = gougeField(
    rng(5505),
    { x0: 0, x1: W, y0: GROUND + 4, y1: H },
    (x, y) =>
      clamp(
        0.06 +
          ((y - GROUND) / (H - GROUND)) * 0.3 +
          Math.max(0, 1 - Math.hypot(x - 70, y - GROUND) / 120) * 0.5,
      ),
    { spacing: 6.4, len: [8, 30], gap: [8, 26], max: 2 },
  )
  const t = rng(5504)
  // Two trees, at the ends of the picture, so that the sky over the meeting
  // and the grey of the east behind the conspirators stay open.
  const a = tree(t, 214, GROUND - 4, 124, 150)
  const c = tree(t, 846, GROUND - 8, 112, 120)
  const trees = {
    crown: a.crown + c.crown,
    cuts: a.cuts + c.cuts,
    trunks: a.trunks + c.trunks,
  }
  const fire = exhalation(480, 44, 0.85, 152)
  const doorLight = rays(rng(5507), 54.5, 181, { from: 10, to: 64, every: 8, width: 2.6 })
  cached = { sky, stars, dawn, wall, grass, trees, fire, doorLight }
  return cached
}

/**
 * Lucius asleep on the threshold, sitting with his knees drawn up and his
 * head bowed on them, his arms round his knees. A boy, the size the kit gives
 * him, cut in its way: halo, parts, cuts. His feet on the ground at (0, 0),
 * facing right.
 */
const LUCIUS_PARTS: Part[] = [
  // back and seat, from the nape round to the heels
  {
    d: 'M-14 -50C-22 -42 -24 -26 -22 -10C-21 -4 -16 0 -8 0L18 0C22 0 23 -4 20 -7L10 -10L8 -30C7 -40 2 -48 -6 -52Z',
  },
  // the knees drawn up
  {
    d: limb([
      [-6, -14],
      [10, -34],
      [16, -8],
    ]),
    w: 10,
  },
  // the arm round the knees
  {
    d: limb([
      [-8, -44],
      [4, -36],
      [12, -30],
    ]),
    w: 6.6,
    sep: 1.2,
  },
  { ...mitt([12, -30], 40, 0.72), sep: 1.2 },
  // the head bowed on the knees
  { d: HEAD_YOUTH, t: 'translate(2 -50) rotate(48) scale(0.66)' },
]
const LUCIUS_CUTS = gouge(-18, -30, -16, -6, 1.1, 0.8) + gouge(-10, -12, 14, -2, 0.9, 0.6)

/** The door's opening: the taper's light is cut only inside it. */
const DOOR_OPENING = `M${DOOR.x0} ${GROUND}V${DOOR.top + 22}Q${DOOR.x0} ${DOOR.top} ${(DOOR.x0 + DOOR.x1) / 2} ${DOOR.top}Q${DOOR.x1} ${DOOR.top} ${DOOR.x1} ${DOOR.top + 22}V${GROUND}Z`

function BrutusDecidesInTheOrchard({ uid }: ArtProps) {
  const m = marks()
  const doorClip = `${uid}-door`
  return (
    <g className="lc-push" style={timing({ origin: [380, 200], push: 1.03 })}>
      <defs>
        <clipPath id={doorClip}>
          <path d={DOOR_OPENING} />
        </clipPath>
      </defs>
      {/* the sky before dawn, stars, and the grey lines in the east */}
      <path d={m.sky} fill={PAPER} />
      <path d={m.stars} fill={PAPER} />
      <path d={m.dawn} fill={PAPER} />
      {/* one of the exhalations, whizzing in the air */}
      <g className="lc-drift-r" style={timing({ delay: 0.2 })}>
        <path d={m.fire.head} fill="none" stroke={PAPER} strokeWidth={2.4} />
        <path d={m.fire.body} fill={RED} />
        <path d={m.fire.glow} fill={PAPER} />
      </g>

      {/* the orchard wall, dark under the sky */}
      <rect x={150} y={WALL} width={W - 150} height={GROUND - WALL} fill={INK} />
      <path d={m.wall} fill={PAPER} />
      <path d={`M150 ${WALL}H${W}`} stroke={PAPER} strokeWidth={LINE.carve} />

      {/* the fruit trees */}
      <path d={m.trees.trunks} fill={INK} stroke={PAPER} strokeWidth={1.4} strokeLinejoin="round" />
      <path d={m.trees.crown} fill={INK} stroke={PAPER} strokeWidth={1.6} />
      <path d={m.trees.crown} fill={INK} />
      <path d={m.trees.trunks} fill={INK} />
      <path d={m.trees.cuts} fill={PAPER} />

      {/* Brutus's house, its door open on the taper's light */}
      <path
        d={`M-10 ${GROUND}V86L160 74V${GROUND}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d="M-10 86L160 74" stroke={PAPER} strokeWidth={LINE.bold} />
      <path d={DOOR_OPENING} fill={INK} />
      <g clipPath={`url(#${doorClip})`}>
        <path d={m.doorLight} fill={PAPER} />
      </g>
      <path
        d={`M${DOOR.x0 - 6} ${GROUND}V${DOOR.top + 22}Q${DOOR.x0 - 6} ${DOOR.top - 6} ${(DOOR.x0 + DOOR.x1) / 2} ${DOOR.top - 6}Q${DOOR.x1 + 6} ${DOOR.top - 6} ${DOOR.x1 + 6} ${DOOR.top + 22}V${GROUND}`}
        fill="none"
        stroke={PAPER}
        strokeWidth={LINE.bold}
      />
      {/* the taper in the closet beyond the door, on its stand, well clear of
          the sleeping boy: no red is put near a child's head */}
      <path d="M54.5 196V236M47 236H62" stroke={PAPER} strokeWidth={2.2} />
      <rect x={51} y={190} width={7} height={8} fill={PAPER} />
      <path
        className="lc-flicker"
        d="M54.5 189C50.8 184 51.8 178 54.5 171C57.2 178 58.2 184 54.5 189Z"
        fill={RED}
      />
      {/* the ground of the orchard, lit at the door */}
      <path d={`M0 ${GROUND}H${W}`} stroke={PAPER} strokeWidth={LINE.fine} />
      <path d={m.grass} fill={PAPER} />

      {/* Lucius, asleep on the threshold */}
      <CutFigure parts={LUCIUS_PARTS} cuts={LUCIUS_CUTS} transform="translate(92 266) scale(1.06)">
        <g transform="translate(2 -50) rotate(48) scale(0.66)">
          <path d={EYE_DOWN} fill={PAPER} />
        </g>
      </CutFigure>

      {/* the conspirators, hats pulled down and faces in their cloaks */}
      {/* one of them turned to the grey in the east: "Here lies the east:
          doth not the day break here?" */}
      <Person at={[742, 298]} scale={0.94} pose={{ look: 'conspirator', head: { rot: -6 } }} />
      <Person at={[684, 304]} scale={0.97} flip pose={{ look: 'conspirator' }} />
      <Person at={[630, 314]} scale={1.02} flip pose={{ look: 'conspirator', head: { rot: 4 } }} />
      <Person at={[566, 322]} scale={1.06} flip pose={{ look: 'conspirator', head: { rot: 8 } }} />

      {/* Cassius urging, and Brutus holding up an open hand to stop him:
          "Let us be sacrificers, but not butchers, Caius." */}
      <Person
        at={[446, 334]}
        scale={1.15}
        flip
        pose={{
          look: 'cassius',
          dress: 'cloak',
          frown: true,
          head: { at: [6, -159], rot: 10 },
          legs: {
            far: [
              [-4, -60],
              [-10, -3],
            ],
            near: [
              [4, -60],
              [12, -3],
            ],
          },
          near: {
            pts: [
              [5, -128],
              [16, -104],
              [32, -98],
            ],
            hand: 'open',
            deg: -18,
            thumb: -1,
          },
        }}
      />
      <Person
        at={[288, 334]}
        scale={1.17}
        pose={{
          look: 'brutus',
          dress: 'unbraced',
          head: { rot: -2 },
          feet: [-8, 12],
          near: {
            pts: [
              [5, -128],
              [22, -116],
              [34, -128],
            ],
            hand: 'open',
            deg: -66,
            thumb: -1,
          },
        }}
      />
    </g>
  )
}

export const brutusDecidesInTheOrchard: LinocutArt = {
  width: W,
  height: H,
  Draw: BrutusDecidesInTheOrchard,
}
