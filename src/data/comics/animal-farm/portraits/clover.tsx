import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arc, between, clamp, deg, ribbon, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  InnerRule,
  PH,
  PW,
  inside,
  once,
  portraitGround,
  quad2,
  smooth,
  strands,
  toneHatch,
  type Knot,
} from './common'

/**
 * Clover, as Orwell shows her in the barn in Chapter 1, and nothing else:
 *
 *   "Clover was a stout motherly mare approaching middle life, who had never
 *   quite got her figure back after her fourth foal."
 *
 *   "The two horses had just lain down when a brood of ducklings, which had
 *   lost their mother, filed into the barn, cheeping feebly and wandering from
 *   side to side to find some place where they would not be trodden on. Clover
 *   made a sort of wall round them with her great foreleg, and the ducklings
 *   nestled down inside it and promptly fell asleep."
 *
 * So: a big, stout mare lying on the straw of the barn, facing right, her
 * belly deep and round, her head bent down over a brood of ducklings asleep in
 * the curve of her great foreleg, which she has laid round them like a wall,
 * the long hair falling over its hoof. The text gives no colour for her, so
 * she is cut as the figure kit cuts her (../panels/people.tsx): dark, but
 * hatched through, a softer tone than Boxer's solid black, and with no white
 * stripe, so the two cart-horses are never confused. A paper edge lifts her
 * off the dark barn. The ducklings are pale and round, heads tucked, eyes
 * shut. Nothing here comes from a film or stage production.
 *
 * Seeds: 5701 for the ground, 5702 for the cuts in the figure, 5703 for the
 * straw.
 */

/** The head's frame to the plate's: the poll at (206, 56), the muzzle 62 degrees down. */
const POLL: Pt = [206, 56]
const TILT = deg(62)
const SCALE = 0.78
function at(x: number, y: number): Pt {
  const c = Math.cos(TILT) * SCALE
  const s = Math.sin(TILT) * SCALE
  return [
    Math.round((POLL[0] + x * c - y * s) * 10) / 10,
    Math.round((POLL[1] + x * s + y * c) * 10) / 10,
  ]
}
const place = (pts: Knot[]): Knot[] =>
  pts.map((p) => {
    const [x, y] = at(p[0], p[1])
    return p[2] ? [x, y, 1] : [x, y]
  })

/** The head, level, as a cart-horse's: a broad jowl and a long face. */
const HEAD: Knot[] = place([
  [-10, -8],
  [16, -16],
  [46, -16],
  [78, -10],
  [118, -2],
  [156, 8],
  [184, 16],
  [200, 26],
  [208, 40],
  [206, 56],
  [198, 64],
  [188, 66, 1],
  [194, 72],
  [190, 82],
  [178, 88],
  [164, 82],
  [140, 82],
  [112, 90],
  [88, 102],
  [62, 110],
  [38, 104],
  [20, 86],
  [8, 60],
  [0, 34],
])
/** Her body, lying down: neck, withers, back, rump, and the deep, round belly. */
const BODY: Knot[] = [
  at(-10, -8),
  at(4, 40),
  at(20, 86),
  [216, 170],
  [214, 214],
  [206, 250],
  [176, 290],
  [120, 300],
  [60, 296],
  [20, 280],
  [0, 260, 1],
  [0, 176, 1],
  [40, 160],
  [100, 150],
  [150, 132],
  [178, 100],
]
/** "her great foreleg", laid out in front of her and curved round, like a wall. */
const FORELEG = smooth([
  [186, 262],
  [206, 256],
  [224, 276],
  [252, 284],
  [286, 284],
  [304, 274],
  [310, 256, 1],
  [324, 262],
  [324, 290],
  [304, 304],
  [270, 306],
  [236, 302],
  [206, 292],
  [184, 284],
])
/** The hoof, the long hair falling over it. */
const HOOF = 'M306 256L322 258L326 290L302 292Z'
/** The ducklings, asleep inside the curve of the leg: [x, y, size, facing]. */
const DUCKLINGS: [number, number, number, 1 | -1][] = [
  [246, 254, 1.15, 1],
  [284, 256, 1.2, -1],
  [228, 270, 1.3, 1],
  [262, 272, 1.35, -1],
  [296, 272, 1.25, 1],
]
const crest = quad2([204, 58], [150, 70], [100, 150])

type Marks = {
  ground: string
  straw: string
  hatchBody: string
  hatchLeg: string
  hatchHead: string
  mane: string
  feather: string
  belly: string
}

const marks = once<Marks>(() => {
  // The barn at night, a little light from the right.
  const ground = portraitGround(5701, (x, y) => clamp(0.12 + (x / PW) * 0.5 - (y / PH) * 0.2))
  const r = rng(5702)
  // Hatching through her: the kit's softer tone, not Boxer's black. The body
  // hatched on one slant, the head on another, so the two read apart.
  // Light from the right and above: the back and the face lit, the belly and
  // the underside of the jaw in shadow.
  const hatchBody = toneHatch(
    r,
    { x0: 0, x1: 230, y0: -100, y1: 300 },
    4.4,
    0.7,
    (x, y) => 0.95 - (y - 150) / 150 + (x - 100) / 400,
    26,
    (x, y) => inside(BODY, x, y),
  )
  const hatchLeg = toneHatch(
    r,
    { x0: 180, x1: 326, y0: 130, y1: 310 },
    4.4,
    0.7,
    (x, y) => 0.7 - (y - 270) / 60,
    26,
    (x, y) => y > 250 && y < 310,
  )
  const hatchHead = toneHatch(
    r,
    { x0: 170, x1: 300, y0: 60, y1: 380 },
    4.2,
    -0.9,
    (x, y) => 0.9 - (y - 80) / 220 + (x - 220) / 200,
    26,
    (x, y) => inside(HEAD, x, y),
  )
  // Her mane along the crest, cut as strands.
  const mane = strands(
    r,
    26,
    (t) => crest(t),
    (t) => {
      const [x, y] = crest(t)
      return [x - 22, y + 16]
    },
    [0.6, 1.3],
    1.5,
  )
  // The long hair over her hoof.
  const feather = strands(
    r,
    9,
    (t) => [300 + t * 20, 252],
    (t) => [298 + t * 24, 284 + between(r, -2, 2)],
    [0.8, 1.4],
    1,
  )
  // "never quite got her figure back": the round of her belly, cut as arcs.
  let belly = ''
  for (let k = 0; k < 5; k++) belly += arc(110, 190, 70 + k * 10, deg(58 + k * 2), deg(124 - k * 2))
  const rs = rng(5703)
  let straw = ''
  for (let i = 0; i < 90; i++) {
    const x = between(rs, 8, PW - 8)
    const y = between(rs, 280, 308)
    const a = deg(between(rs, -25, 25) + (rs() < 0.5 ? 180 : 0))
    const L = between(rs, 14, 34)
    straw += ribbon(
      [
        [x, y],
        [x + Math.cos(a) * L * 0.5, y + Math.sin(a) * L * 0.5 + between(rs, -2, 2)],
        [x + Math.cos(a) * L, y + Math.sin(a) * L],
      ],
      between(rs, 2, 3.4),
      0.6,
    )
  }
  return { ground, straw, hatchBody, hatchLeg, hatchHead, mane, feather, belly }
})

/** One duckling asleep: a round pale body, the head tucked, a small beak, the eye shut. */
function Duckling({ x, y, s, face }: { x: number; y: number; s: number; face: 1 | -1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${face * s} ${s})`}>
      <path
        d="M-12 4C-12 -6 -4 -10 4 -9C8 -14 16 -13 17 -7C18 -3 15 0 12 1C12 6 6 9 -2 9C-8 9 -12 7 -12 4Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.3}
        strokeLinejoin="round"
      />
      <path d="M16 -8L22 -6L16 -4Z" fill={INK} />
      <path d="M9 -8Q11 -6 13 -8" fill="none" stroke={INK} strokeWidth={1} strokeLinecap="round" />
      <path d="M-6 0Q0 4 6 1" fill="none" stroke={INK} strokeWidth={0.9} strokeLinecap="round" />
    </g>
  )
}

function CloverPortrait({ uid }: ArtProps) {
  const m = marks()
  const bodyClip = `${uid}-cl-body`
  const headClip = `${uid}-cl-head`
  const legClip = `${uid}-cl-leg`
  const HEAD_D = smooth(HEAD)
  const BODY_D = smooth(BODY)
  const [ex, ey] = at(58, 16)
  const [nx, ny] = at(188, 34)
  return (
    <>
      <defs>
        <clipPath id={bodyClip}>
          <path d={BODY_D} />
        </clipPath>
        <clipPath id={headClip}>
          <path d={HEAD_D} />
        </clipPath>
        <clipPath id={legClip}>
          <path d={FORELEG} />
        </clipPath>
      </defs>
      <path d={m.ground} fill={PAPER} />
      <path d={m.straw} fill={PAPER} />
      {/* a paper edge round her, to lift her off the dark barn */}
      <g fill={PAPER} stroke={PAPER} strokeWidth={4} strokeLinejoin="round">
        <path d={BODY_D} />
        <path d={HEAD_D} />
        <path d={FORELEG} />
        <path d="M196 62L184 38L180 20L198 34L212 56Z" />
      </g>
      <path d="M196 62L184 38L180 20L198 34L212 56Z" fill={INK} />
      <path d={BODY_D} fill={INK} />
      <g clipPath={`url(#${bodyClip})`}>
        <path d={m.hatchBody} fill={PAPER} />
        <path d={m.belly} fill="none" stroke={PAPER} strokeWidth={2} strokeLinecap="round" />
      </g>
      <path d={m.mane} fill={INK} />
      <path d={HEAD_D} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <g clipPath={`url(#${headClip})`}>
        <path d={m.hatchHead} fill={PAPER} />
        {/* the round of the jowl */}
        <path
          d={smooth([at(20, 30), at(22, 64), at(44, 90), at(80, 88), at(112, 74)], false)}
          fill="none"
          stroke={PAPER}
          strokeWidth={2}
          strokeLinecap="round"
        />
      </g>
      {/* her ear, laid a little back */}
      <path
        d="M212 64L204 40L204 22L220 38L228 62Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      {/* a gentle eye, the lid half lowered, looking down at the ducklings */}
      <g transform={`translate(${ex} ${ey}) rotate(34) scale(1.35)`}>
        <path d="M-13 0Q0 -10 14 0Q0 8 -13 0Z" fill={PAPER} />
        <path d="M-11 -1Q0 3 12 -1Q0 7 -11 -1Z" fill={INK} />
        <circle cx={2} cy={1.6} r={1.1} fill={PAPER} />
        <path
          d="M-15 -3Q0 -14 16 -3"
          fill="none"
          stroke={PAPER}
          strokeWidth={2.2}
          strokeLinecap="round"
        />
      </g>
      <path
        d={`M${nx} ${ny}m-3 -7c-6 2 -6 11 0 13`}
        fill="none"
        stroke={PAPER}
        strokeWidth={2}
        strokeLinecap="round"
      />
      {/* the ducklings, asleep in the curve of her leg */}
      {DUCKLINGS.map(([x, y, s, f]) => (
        <Duckling key={`${x}-${y}`} x={x} y={y} s={s} face={f} />
      ))}
      {/* the great foreleg, laid round them */}
      <path d={FORELEG} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <g clipPath={`url(#${legClip})`}>
        <path d={m.hatchLeg} fill={PAPER} />
      </g>
      <path d={HOOF} fill={INK} stroke={PAPER} strokeWidth={1.4} />
      <path d={m.feather} fill={PAPER} />
      <path d="M198 256C212 262 224 276 236 290" fill="none" stroke={PAPER} strokeWidth={1.4} />
      <InnerRule />
    </>
  )
}

export const cloverArt: LinocutArt = { width: PW, height: PH, Draw: CloverPortrait }

export const clover: Portrait = {
  name: 'Clover',
  art: cloverArt,
  alt: 'A linocut portrait of Clover in the barn at night, in Chapter 1: a big, stout mare lying on the straw, facing right, cut dark and hatched through with fine white lines, her belly deep and round. Her head is bent gently down, her eye half closed. One great foreleg is laid out in front of her and curved round, like a wall, the long hair falling over its hoof, and inside its curve a brood of five small pale ducklings sleep with their heads tucked in. Four numbered red markers point to her face, her belly, her foreleg and the ducklings.',
  describedBy: [
    { phrase: 'a stout motherly mare approaching middle life', at: [296, 70], to: at(70, 20) },
    {
      phrase: 'never quite got her figure back after her fourth foal',
      at: [60, 230],
      to: [96, 250],
    },
    { phrase: 'a sort of wall round them with her great foreleg', at: [192, 298], to: [220, 290] },
    {
      phrase: 'the ducklings nestled down inside it and promptly fell asleep',
      at: [306, 212],
      to: [288, 240],
    },
  ],
  where: 'Chapter 1',
  note: 'Clover is the book’s mother-figure and its conscience. She cannot read, but she remembers, and in Chapter 7, looking down on the farm after the executions, her eyes fill with tears for what the Rebellion has become.',
  artNote:
    'The text gives no colour for her, so she is hatched, a softer tone than Boxer’s black, and has no white stripe.',
}
