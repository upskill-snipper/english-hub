import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, deg, gouge, n, ribbon, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { headland } from '../../othello/panels/garden'
import { Ship, type ShipSpec } from './fleet'
import { cut, lightField, seaCuts, skyLines } from './light-cuts'
import { Person, type P } from './people'

/**
 * Act 4, Scene 12: "All is lost", the nineteenth moment in the guide's
 * timeline. Every detail is from the scene, as the held edition prints it
 * (src/data/full-texts/antony-and-cleopatra.ts):
 *
 * - "Another part of the Ground." "Alarum afar off, as at a sea fight." The
 *   guide sets it "within sight of the sea", and ANTONY: "Where yond pine
 *   does stand I shall discover all." So Antony and Scarus stand on high
 *   ground by a tall pine, in daylight, looking down on the sea.
 * - ANTONY: "My fleet hath yielded to the foe, and yonder They cast their
 *   caps up and carouse together Like friends long lost." So out on the sea
 *   the ships lie side by side, their oars shipped, Egypt's red sails among
 *   Caesar's dark ones (./fleet.tsx says why Cleopatra's sails, and only
 *   hers, are red). The caps are left to the words: cut at the size of the
 *   ships, the Julius Caesar kit's felt caps read as half moons over the
 *   masts, and so as nothing.
 * - SCARUS: "Swallows have built In Cleopatra’s sails their nests." So
 *   swallows wheel over the red sails, the omen the augurs dare not read.
 * - ANTONY: "this pine is barked That overtopped them all." So the pine
 *   overtops everything in the picture, and its trunk is stripped of its bark
 *   in a long pale blaze.
 * - ANTONY: "All is lost! This foul Egyptian hath betrayed me"; "Bid them all
 *   fly! Be gone!" So he points down at the fleet, frowning and crying out;
 *   the pointing arm is angled down at the sea and bent at the elbow, so it
 *   is never a raised straight arm (./people.tsx, HANDS). His other arm hangs
 *   behind him, hidden by his cloak, and the alt text does not claim it.
 *   Scarus, who has just said that Antony "Is valiant and dejected", stands
 *   behind him with his head bowed.
 *
 * WHAT IS LEFT OUT. Cleopatra comes to him later in the scene, and he
 * threatens her and drives her away; the threat is not drawn, and she is not
 * in the picture. Nor is the line where he swears "The witch shall die". No
 * sword is drawn (./people.tsx), and there is no red in the panel but the
 * sails, each one large: Antony's despair, the play's brief for this moment,
 * is in his face and in the sea below him.
 *
 * CUT TWICE. The first cut set the quotation at the top left, where it hid
 * the pine's crown, and pointed Antony's arm out level and straight, which at
 * phone width can read as the salute no page of this site may show; its caps,
 * plain domes, and the kit's felt caps after them, read as nothing at the size
 * of the ships, so the caps are gone. The quotation is now at the top right,
 * over the empty sky, the swallows below it: at the bottom right, where the
 * box can take two fifths of the width, it covered the nearest red sail.
 * Nothing is taken from a film or stage production. Seeds: 1901 (the sky),
 * 1902 (the sea), 1903 (the height), 1904 (the pine).
 */

const W = 860
const H = 340
const HORIZON = 140

/** The height Antony and Scarus stand on, falling away to the right towards the sea. */
const LAND = 'M-6 254C80 252 180 256 262 264C330 272 392 288 442 306C482 320 512 332 532 346H-6Z'
/** The top of the height at x, for keeping the sea's cuts off it. */
const landTop = (x: number) =>
  x < 262
    ? 254 + (x / 262) * 10
    : x < 442
      ? 264 + ((x - 262) / 180) * 42
      : 306 + ((x - 442) / 90) * 40

/** The fleet that has yielded: Egypt's red sails lying alongside Caesar's dark ones, oars shipped. */
const FLEET: ShipSpec[] = [
  { at: [592, 188], s: 0.44, facing: -1, sail: 'set', colour: 'ink', rowing: false },
  { at: [792, 186], s: 0.46, facing: -1, sail: 'set', colour: 'ink', rowing: false },
  { at: [704, 204], s: 0.54, facing: 1, sail: 'set', colour: 'red', rowing: false },
  { at: [614, 228], s: 0.6, facing: -1, sail: 'set', colour: 'ink', rowing: false },
  { at: [790, 238], s: 0.64, facing: -1, sail: 'set', colour: 'ink', rowing: false },
  { at: [688, 274], s: 0.74, facing: 1, sail: 'set', colour: 'red', rowing: false },
]

/**
 * A swallow seen from below, flying up the picture: a round head, a slim
 * body, long pointed wings swept back from the shoulders in crescents, and a
 * deeply forked tail, about 30 across. Reviewed on 9 October 2026: the first
 * cut had no head or body, its wings and tail the same four thin arms, and at
 * panel size each bird was an X.
 */
const SWALLOW =
  'M0 -9.5C1.6 -9.5 2 -7.6 1.8 -5.6L2 -3.4C7 -6.4 11 -4 15 2.6C10.4 -0.6 6 -0.4 2 1.4L1.6 5L4.8 13.4L0 8.2L-4.8 13.4L-1.6 5L-2 1.4C-6 -0.4 -10.4 -0.6 -15 2.6C-11 -4 -7 -6.4 -2 -3.4L-1.8 -5.6C-2 -7.6 -1.6 -9.5 0 -9.5Z'
const SWALLOWS: { at: P; s: number; rot: number }[] = [
  { at: [662, 140], s: 1.2, rot: -14 },
  { at: [716, 126], s: 1.05, rot: 10 },
  { at: [754, 150], s: 1.15, rot: -6 },
]

/** A shape drawn round (0, 0), moved to `at`, scaled and turned. */
function placed(d: string, at: P, s: number, rot: number) {
  const c = Math.cos(deg(rot))
  const si = Math.sin(deg(rot))
  return d.replace(/(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/g, (_, xs: string, ys: string) => {
    const x = Number(xs) * s
    const y = Number(ys) * s
    return `${n(at[0] + x * c - y * si)} ${n(at[1] + x * si + y * c)}`
  })
}

type Marks = {
  sky: string
  sea: string
  far: string
  land: string
  crown: string
  needles: string
  bark: string
  birds: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The sky by day: pale, scored in long thin ink lines, closer towards the top.
  const sky = skyLines(1901, { x0: 0, x1: W, y0: 0, y1: HORIZON - 3 }, (_x, y) => 0.5 - y / 300)
  const sea = seaCuts(1902, { x0: 0, x1: W, y0: HORIZON + 1, y1: H }, (x, y) => y < landTop(x) - 3)
  const far = headland(-30, 250, HORIZON, 12) + headland(724, 900, HORIZON, 8)
  // The height in ink, its grass cut in paper, lit from the sky behind.
  const land = lightField(
    1903,
    { x0: 0, x1: 540, y0: 258, y1: H },
    (x, y) => clamp(0.5 - (y - 258) / 110 - x / 2600),
    { spacing: 5.4, len: [6, 22], gap: [4, 14], max: 2.4 },
  )
  // The pine's crown: flat lobes of needles spread like an umbrella over the
  // top left, with tufts of needles cut along their lit upper edges.
  const p = rng(1904)
  const lobes: [number, number, number, number][] = [
    [52, 52, 62, 19],
    [128, 36, 74, 23],
    [204, 50, 52, 16],
    [92, 72, 58, 13],
    [168, 70, 48, 12],
  ]
  let crown = ''
  let needles = ''
  for (const [cx, cy, rx, ry] of lobes) {
    let d = ''
    for (let k = 0; k <= 32; k++) {
      const a = (k / 32) * Math.PI * 2
      const bump = 1 + 0.07 * Math.sin(a * 9 + cx) + between(p, -0.03, 0.03)
      d += `${k ? 'L' : 'M'}${n(cx + Math.cos(a) * rx * bump)} ${n(cy + Math.sin(a) * ry * bump)}`
    }
    crown += d + 'Z'
    for (let k = 0; k < Math.round(rx / 5); k++) {
      const a = Math.PI + between(p, 0.15, 0.85) * Math.PI
      const x = cx + Math.cos(a) * rx * 0.86
      const y = cy + Math.sin(a) * ry * 0.7
      const lean = between(p, -0.5, 0.5)
      needles += gouge(x, y + 4, x + lean * 6, y - 3, 0.9)
    }
  }
  // The bark that is left on the trunk: short plates cut in paper down its
  // shaded left side, beside the blaze.
  let bark = ''
  for (let y = 100; y < 254; y += between(p, 7, 10)) {
    const [cx, w] = trunkAt(y)
    const x0 = cx - w / 2 + 1.6
    bark += cut(x0, y, Math.max(3, w / 2 - 3) * between(p, 0.7, 1), 0.95, between(p, -0.6, 0.6))
  }
  const birds = SWALLOWS.map((b) => placed(SWALLOW, b.at, b.s, b.rot)).join('')
  cached = { sky, sea, far, land, crown, needles, bark, birds }
  return cached
}

/** The pine's trunk: its centre line, from the foot on the height to the fork under the crown. */
const TRUNK_LINE: P[] = [
  [84, 262],
  [88, 210],
  [93, 160],
  [99, 120],
  [106, 92],
  [113, 70],
]
/** The trunk's centre and width at height y: 24 wide at the foot, 12 at the fork. */
function trunkAt(y: number): [number, number] {
  for (let i = 1; i < TRUNK_LINE.length; i++) {
    const [x0, y0] = TRUNK_LINE[i - 1]
    const [x1, y1] = TRUNK_LINE[i]
    if (y <= y0 && y >= y1) {
      const t = (y0 - y) / (y0 - y1)
      return [x0 + (x1 - x0) * t, 24 - ((262 - y) / 192) * 12]
    }
  }
  return [113, 12]
}
const TRUNK = (() => {
  const left: string[] = []
  const right: string[] = []
  for (let y = 262; y >= 70; y -= 8) {
    const [cx, w] = trunkAt(y)
    left.push(`${n(cx - w / 2)} ${n(y)}`)
    right.push(`${n(cx + w / 2)} ${n(y)}`)
  }
  return `M${left.join('L')}L${right.reverse().join('L')}Z`
})()
const LIMBS =
  ribbon(
    [
      [108, 90],
      [82, 74],
      [58, 62],
    ],
    9,
    0.6,
    false,
  ) +
  ribbon(
    [
      [111, 80],
      [150, 66],
      [190, 58],
    ],
    9,
    0.6,
    false,
  )
/**
 * "this pine is barked": the bark stripped from the trunk in a long pale
 * blaze down the lit side of its face, from just under the fork almost to the
 * ground, with the grain of the bare wood in ink.
 */
const BLAZE = (() => {
  const pts: P[] = []
  for (let y = 252; y >= 112; y -= 10) {
    const [cx, w] = trunkAt(y)
    pts.push([cx + w * 0.16, y])
  }
  return ribbon(pts, 9, 0.35)
})()
const BLAZE_GRAIN = (() => {
  let d = ''
  for (const off of [-0.05, 0.3]) {
    const pts: string[] = []
    for (let y = 236; y >= 132; y -= 13) {
      const [cx, w] = trunkAt(y)
      pts.push(`${n(cx + w * (0.16 + off * 0.35))} ${n(y)}`)
    }
    d += `M${pts.join('L')}`
  }
  return d
})()

/** Where Antony stands, and the arm he points with, angled down at the fleet. */
const ANTONY_AT: P = [304, 270]
const POINTING: P[] = [
  [5, -128],
  [26, -116],
  [49, -109],
]

function AllIsLost(_props: ArtProps) {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [420, 190], push: 1.03 })}>
      <rect x={0} y={0} width={W} height={H} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      <path d={m.far} fill={INK} />
      <path d={`M0 ${HORIZON}H${W}`} stroke={INK} strokeWidth={1.3} />
      <path d={m.sea} fill={INK} />

      {/* the swallows over the red sails */}
      <path d={m.birds} fill={INK} />

      {/* the fleet, yielded: Egypt's red sails alongside Caesar's */}
      {FLEET.map((s, i) => (
        <Ship key={i} {...s} />
      ))}

      {/* the height above the sea */}
      <path d={LAND} fill={INK} />
      <path d={m.land} fill={PAPER} />
      <path d={LAND} fill="none" stroke={PAPER} strokeWidth={1.6} />

      {/* the pine that overtopped them all, its bark stripped */}
      <path
        d={TRUNK + LIMBS}
        fill={PAPER}
        stroke={PAPER}
        strokeWidth={3.2}
        strokeLinejoin="round"
      />
      <path d={TRUNK + LIMBS} fill={INK} />
      <path d={m.bark} fill={PAPER} />
      <path d={BLAZE} fill={PAPER} />
      <path d={BLAZE_GRAIN} fill="none" stroke={INK} strokeWidth={1} />
      <path d={m.crown} fill={INK} stroke={PAPER} strokeWidth={1.4} />
      <path d={m.crown} fill={INK} />
      <path d={m.needles} fill={PAPER} />

      {/* Scarus behind him, his head bowed */}
      <Person
        pose={{
          look: 'scarus',
          head: { rot: 16 },
          eye: 'down',
          far: {
            pts: [
              [-4, -130],
              [4, -106],
              [10, -84],
            ],
            hand: 'mitt',
          },
          near: {
            pts: [
              [5, -128],
              [-2, -104],
              [-6, -81],
            ],
            hand: 'open',
            deg: 98,
          },
        }}
        at={[186, 260]}
        scale={1.08}
      />

      {/* Antony on the height, pointing down at the fleet: "All is lost!" */}
      <Person
        pose={{
          look: 'antony',
          frown: true,
          mouth: 'open',
          head: { rot: 16 },
          legs: {
            far: [
              [-3, -70],
              [-10, -38],
              [-16, -3],
            ],
            near: [
              [3, -70],
              [14, -38],
              [20, -3],
            ],
          },
          far: {
            pts: [
              [-4, -130],
              [-14, -106],
              [-18, -82],
            ],
            hand: 'open',
            deg: 104,
          },
          near: { pts: POINTING, hand: 'point', deg: 20 },
        }}
        at={ANTONY_AT}
        scale={1.12}
      />
    </g>
  )
}

export const allIsLost: LinocutArt = { width: W, height: H, Draw: AllIsLost }
