import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rays,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, seatedLegs, type Pose } from './people'

/**
 * Chapter 53: "Orlick's trap", the sixteenth moment in the guide's timeline.
 * Every detail is from the held edition (src/data/full-texts/
 * great-expectations.ts):
 *
 * - "Looking in, I saw a lighted candle on a table, a bench, and a mattress
 *   on a truckle bedstead. As there was a loft above"; "the house—of wood with
 *   a tiled roof". So it is a hut of boards under a loft, lit by one candle
 *   on a table, the spot colour.
 * - "I made out that I was fastened to a stout perpendicular ladder a few
 *   inches from the wall—a fixture there—the means of ascent to the loft
 *   above"; "Not only were my arms pulled close to my sides, but the pressure
 *   on my bad arm caused me exquisite pain". So Pip stands with his back to
 *   the ladder, a rope round him and its rails at his chest and his waist,
 *   his arms held at his sides; "It was only my head and my legs that I
 *   could move". His burnt arms (Chapter 49) are
 *   still dressed: "My left arm ... those I carried in a sling; and I could
 *   only wear my coat like a cloak, loose over my shoulders and fastened at
 *   the neck" (Chapter 50). So his coat hangs from his shoulders like a cloak,
 *   with the white band of the sling across his chest.
 * - "He lighted the candle from the flaring match with great deliberation ...
 *   Then, he put the candle away from him on the table, so that he could see
 *   me, and sat with his arms folded on the table and looked at me." So Orlick
 *   sits at the far end of the table from Pip, his arms on it, glaring, the
 *   candle at the end nearer Pip; he is the kit's Orlick, "a broad-shouldered
 *   loose-limbed swarthy fellow" (Chapter 15), in a plain coat, with the strap
 *   of the tin bottle "slung" round his neck. The candle behind him throws his
 *   shadow up the boards, larger than he is. His eyes, "red and bloodshot",
 *   are left to the words: red at a face reads as blood.
 * - Pip "resolved that I would not entreat him", and "a scornful detestation
 *   of him ... sealed my lips". So Pip's head is up and his mouth shut.
 * - The rescue, which the guide's moment ends with: "I heard responsive
 *   shouts, saw figures and a gleam of light dash in at the door". Trabb's
 *   boy "went before us with a lantern, which was the light I had seen come
 *   in at the door". So the door is shut and lantern-light shows in every
 *   crack round it and spills in under it: Herbert, Startop and Trabb's boy
 *   are outside, and are not drawn.
 *
 * WHAT IS NOT DRAWN (../index.ts): the noose, the struggle, the gun Orlick
 * takes up, the stone-hammer and the rescue's tumult. Nobody is struck or
 * threatened with anything in the picture; the danger is in the rope, the
 * glare and the shadow. The quotation is Orlick's own boast that he set the
 * trap, and names no harm.
 *
 * Seeds: 5301 (the wall), 5302 (the floor), 5303 (the candle's light), 5304
 * (the lantern-light under the door).
 */

const W = 860
const H = 340
/** Where the back wall meets the floor. */
const FLOOR = 258
/** The underside of the loft floor, and the beam along its edge. */
const LOFT = 36
/** The candle's flame, on the table, put "away from him ... so that he could see me". */
const FLAME: Pt = [318, 176]
/** The ladder to the loft, seen from the side: its far and near rails, and where it stands. */
const LADDER = { far: 86, near: 108, foot: 288 }
/** The table: its top's back and front edges, its ends, and its legs' feet. */
const TABLE = { back: 202, front: 215, x0: 270, x1: 540, feet: 302 }
/** The shut door, its chinks lit by a lantern outside. */
const DOOR = { x0: 730, x1: 802, top: 66 }
/** Where Pip stands, his back to the ladder, and where Orlick sits; both a little larger than the kit's man. */
const PIP_AT: Pt = [148, 322]
const ORLICK_AT: Pt = [508, 304]
const S = 1.22

/** The candle's light: 1 at the flame, falling away into the dark of the hut. */
function light(x: number, y: number) {
  const d = Math.hypot(x - FLAME[0], (y - FLAME[1]) * 1.1)
  return clamp(1.12 - d / 540) ** 1.15
}

/**
 * Orlick's shadow, thrown up the boards behind him by the candle: his round
 * head bowed forward and his broad shoulders, half as large again as he is.
 */
const SHADOW =
  'M520 206C522 186 530 174 542 166C530 158 514 146 512 124C510 100 528 82 552 83C576 84 592 104 590 128C589 142 582 152 572 158C600 162 628 172 648 188C656 196 660 202 662 206Z'

/** A rope as a cubic curve: start, two controls, end. */
type RopeCurve = [Pt, Pt, Pt, Pt]

/**
 * The rope round Pip and the ladder at his chest and his waist, in his frame.
 * His legs are free: "It was only my head and my legs that I could move".
 */
const ROPES: RopeCurve[] = [
  [
    [-34, -116],
    [-20, -122],
    [0, -125],
    [20, -123],
  ],
  [
    [-34, -86],
    [-20, -90],
    [0, -92],
    [22, -90],
  ],
]

/** The rope's line, and the slanted cuts of its twist. */
function rope(c: RopeCurve): { line: string; twist: string } {
  const at = (t: number): Pt => {
    const u = 1 - t
    const a = u * u * u
    const b = 3 * u * u * t
    const d = 3 * u * t * t
    const e = t * t * t
    return [
      a * c[0][0] + b * c[1][0] + d * c[2][0] + e * c[3][0],
      a * c[0][1] + b * c[1][1] + d * c[2][1] + e * c[3][1],
    ]
  }
  const pts: Pt[] = []
  for (let i = 0; i <= 16; i++) pts.push(at(i / 16))
  const line = 'M' + pts.map(([x, y]) => `${n(x)} ${n(y)}`).join('L')
  let twist = ''
  for (let i = 1; i < 26; i++) {
    const [x, y] = at(i / 26)
    const [x2, y2] = at(i / 26 + 0.01)
    const L = Math.hypot(x2 - x, y2 - y) || 1
    const tx = (x2 - x) / L
    const ty = (y2 - y) / L
    // Across the rope, leaning with it, as the strands of a laid rope do.
    twist += `M${n(x - ty * 1.5 - tx * 1.1)} ${n(y + tx * 1.5 - ty * 1.1)}L${n(x + ty * 1.5 + tx * 1.1)} ${n(y - tx * 1.5 + ty * 1.1)}`
  }
  return { line, twist }
}

type Marks = {
  wall: string
  joints: string
  beam: string
  floor: string
  glow: string
  chinks: string
  spill: string
  ropes: { line: string; twist: string }[]
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The plank wall: the field is cut with x and y swapped and drawn through
  // a transform that swaps them back, so its gouges run up the boards.
  const wall = gougeField(rng(5301), { x0: LOFT, x1: FLOOR, y0: 0, y1: W }, (u, v) => light(v, u), {
    spacing: 6,
    len: [14, 48],
    gap: [3, 12],
    max: 3.8,
  })
  let joints = ''
  for (let x = 14; x < W; x += 26) joints += `M${x} ${LOFT}V${FLOOR}`
  // The edge of the loft floor, lit underneath near the candle.
  let beam = ''
  for (let x = 0; x < W; x += 30) {
    const L = light(x + 15, LOFT + 30)
    if (L > 0.12) beam += gouge(x, LOFT - 2, x + 28, LOFT - 2.4, 0.4 + L * 1.8)
  }
  // The floor: rough boards, lit between Pip and the table, dark under it.
  const under = (x: number, y: number) =>
    x > TABLE.x0 - 4 && x < TABLE.x1 + 4 && y < TABLE.feet + 8 ? 0.12 : 1
  const floor = gougeField(
    rng(5302),
    { x0: 0, x1: W, y0: FLOOR + 4, y1: H },
    (x, y) => light(x, y - 70) ** 1.6 * under(x, y),
    { spacing: 6.8, len: [18, 64], gap: [6, 18], max: 3.6 },
  )
  const glow = rays(rng(5303), FLAME[0], FLAME[1], { from: 13, to: 58, every: 9, width: 1.8 })
  // The lantern outside shows in every crack round the door and between its boards.
  const { x0, x1, top } = DOOR
  const chinks =
    gouge(x0 + 1, top + 6, x0 + 1.5, FLOOR - 2, 1.8) +
    gouge(x1 - 1, top + 8, x1 - 1.5, FLOOR - 2, 1.6) +
    gouge(x0 + 6, top + 1, x1 - 6, top + 1.5, 1.5) +
    gouge(x0 + 24, top + 26, x0 + 25, FLOOR - 24, 1.1) +
    gouge(x0 + 48, top + 44, x0 + 48.5, FLOOR - 14, 1) +
    gouge(x0 + 2, FLOOR + 1.6, x1 - 2, FLOOR + 2, 2.6)
  // ...and spills in under it, a fan of light across the floorboards.
  let spill = ''
  const sr = rng(5304)
  for (let k = 0; k < 8; k++) {
    const y = FLOOR + 6 + k * 4.8
    const reach = 18 + k * 14
    spill += gouge(
      x0 - reach * 0.8 + between(sr, -4, 4),
      y,
      x1 + reach * 0.3,
      y + 0.5,
      1.8 - k * 0.15,
    )
  }
  cached = {
    wall,
    joints,
    beam,
    floor,
    glow,
    chinks,
    spill,
    ropes: ROPES.map(rope),
  }
  return cached
}

/**
 * Orlick at the table: "sat with his arms folded on the table and looked at
 * me". Facing left, at Pip.
 */
const ORLICK: Pose = {
  look: 'orlick',
  dress: 'coat',
  body: { neck: [20, -112], hip: [0, -48] },
  head: { at: [32, -132], rot: 10 },
  legs: seatedLegs(46, 34),
  far: {
    pts: [
      [16, -106],
      [6, -84],
      [36, -86],
    ],
    hand: 'mitt',
    deg: 0,
  },
  near: {
    pts: [
      [22, -104],
      [12, -82],
      [42, -82],
    ],
    hand: 'mitt',
    deg: -4,
  },
  eye: 'glare',
  brow: 'frown',
}

/** Pip, bound to the ladder with his back to it, his head up and turned to Orlick. */
const PIP: Pose = {
  look: 'pip',
  age: 'man',
  head: { rot: -8 },
  near: {
    pts: [
      [3, -126],
      [6, -100],
      [8, -76],
    ],
    hand: 'none',
  },
  far: {
    pts: [
      [-3, -126],
      [-4, -100],
      [-2, -76],
    ],
    hand: 'none',
  },
  eye: 'open',
  brow: 'frown',
}

/** His coat worn "like a cloak, loose over my shoulders and fastened at the neck" (Chapter 50). In Pip's frame. */
const CLOAK =
  'M6 -140C12 -138 16 -132 17 -124C19 -108 20 -88 20 -68L-22 -64C-22 -84 -22 -104 -20 -120C-18 -132 -12 -140 -4 -141Z'
const CLOAK_FOLDS = gouge(-12, -122, -16, -70, 0.8, 0.8) + gouge(-2, -124, -2, -70, 0.7, -0.4)
/** The band of the sling his burnt left arm is carried in, across his chest under the cloak's edge. */
const SLING = 'M3 -139L16 -104'

function OrlicksTrap({ uid }: ArtProps) {
  const m = marks()
  const id = { wall: `${uid}-wall`, above: `${uid}-above` }
  const [px, py] = PIP_AT
  const [fx, fy] = FLAME
  return (
    <>
      <defs>
        <clipPath id={id.wall}>
          <rect x={0} y={LOFT} width={W} height={FLOOR - LOFT} />
        </clipPath>
        {/* Orlick shows above the table top; the table hides the rest of him. */}
        <clipPath id={id.above}>
          <rect x={0} y={0} width={W} height={TABLE.back + 6} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [400, 190], push: 1.03 })}>
        {/* the plank wall, lit by the one candle */}
        <g clipPath={`url(#${id.wall})`}>
          <g transform="matrix(0 1 1 0 0 0)">
            <path d={m.wall} fill={PAPER} />
          </g>
          <path d={m.joints} stroke={INK} strokeWidth={2.2} />
          {/* Orlick's shadow, thrown up the boards behind him */}
          <path d={SHADOW} fill={INK} />
        </g>
        <rect x={0} y={LOFT - 12} width={W} height={12} fill={INK} />
        <path d={m.beam} fill={PAPER} />
        {/* the floor */}
        <path d={m.floor} fill={PAPER} />

        {/* the shut door, and the lantern-light in its chinks */}
        <rect
          x={DOOR.x0}
          y={DOOR.top}
          width={DOOR.x1 - DOOR.x0}
          height={FLOOR - DOOR.top}
          fill={INK}
        />
        <g className="lc-fade-in" style={timing({ delay: 1.4, dur: 1.2 })}>
          <path d={m.chinks + m.spill} fill={PAPER} />
        </g>

        {/* the ladder up to the loft, seen from the side */}
        <g fill={INK} stroke={PAPER} strokeWidth={1.6}>
          <rect x={LADDER.far - 4} y={0} width={8} height={LADDER.foot - 6} />
          {[16, 48, 80, 112, 144, 176, 208, 240].map((y) => (
            <path
              key={y}
              d={`M${LADDER.far} ${y}L${LADDER.near} ${y + 4}L${LADDER.near} ${y + 10}L${LADDER.far} ${y + 6}Z`}
            />
          ))}
          <rect x={LADDER.near - 4} y={0} width={9} height={LADDER.foot} />
        </g>

        {/* Pip, bound to it */}
        <Person pose={PIP} at={PIP_AT} scale={S}>
          <path d={CLOAK} fill={INK} stroke={PAPER} strokeWidth={1.6} />
          <path d={CLOAK_FOLDS} fill={PAPER} />
          <path d={SLING} stroke={PAPER} strokeWidth={3} strokeLinecap="round" />
        </Person>
        <g transform={`translate(${px} ${py}) scale(${S})`} fill="none" strokeLinecap="round">
          {m.ropes.map(({ line, twist }) => (
            <g key={line}>
              <path d={line} stroke={INK} strokeWidth={6} />
              <path d={line} stroke={PAPER} strokeWidth={3.4} />
              <path d={twist} stroke={INK} strokeWidth={0.8} />
            </g>
          ))}
        </g>

        {/* Orlick, sitting at the table, and the table */}
        <g clipPath={`url(#${id.above})`}>
          <Person pose={ORLICK} at={ORLICK_AT} scale={S} flip>
            {/* the strap of the tin bottle slung round his neck */}
            <path d="M14 -114L-8 -76" fill="none" stroke={PAPER} strokeWidth={1.4} />
          </Person>
        </g>
        <path
          d={`M${TABLE.x0 + 6} ${TABLE.back}L${TABLE.x1 - 6} ${TABLE.back}L${TABLE.x1} ${TABLE.front}L${TABLE.x0} ${TABLE.front}Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.4}
        />
        <rect x={TABLE.x0} y={TABLE.front} width={TABLE.x1 - TABLE.x0} height={9} fill={INK} />
        <g fill={INK} stroke={PAPER} strokeWidth={1.4}>
          <rect
            x={TABLE.x0 + 6}
            y={TABLE.front + 9}
            width={9}
            height={TABLE.feet - TABLE.front - 9}
          />
          <rect
            x={TABLE.x1 - 15}
            y={TABLE.front + 9}
            width={9}
            height={TABLE.feet - TABLE.front - 9}
          />
        </g>

        {/* the candle */}
        <path d={m.glow} fill={PAPER} />
        <path
          d={`M${fx - 12} ${TABLE.back + 5}Q${fx} ${TABLE.back - 1} ${fx + 12} ${TABLE.back + 5}L${fx + 10} ${TABLE.back + 8}L${fx - 10} ${TABLE.back + 8}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={1.2}
        />
        <rect
          x={fx - 4}
          y={fy + 13}
          width={8}
          height={TABLE.back + 3 - fy - 13}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1}
        />
        <path
          className="lc-flicker"
          d={`M${fx} ${fy + 12}C${fx - 3.4} ${fy + 8} ${fx - 2.4} ${fy + 3} ${fx} ${fy - 4}C${fx + 2.4} ${fy + 3} ${fx + 3.4} ${fy + 8} ${fx} ${fy + 12}Z`}
          fill={RED}
        />
      </g>
    </>
  )
}

export const orlicksTrap: LinocutArt = { width: W, height: H, Draw: OrlicksTrap }
