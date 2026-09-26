import type { CSSProperties } from 'react'

import { gouge, ribbon } from '@/components/comics/linocut/carve'
import { INK, PAPER } from '@/components/comics/linocut/palette'

import {
  Cut,
  DOG,
  PIG_EAR,
  PIG_FAR_EAR,
  k,
  pigStrokes,
  place,
  type P,
  type Part,
  type Placing,
} from './people'

/**
 * Chapter 10's figures: the pigs on their hind legs, and the animals round
 * them that the kit (./people.tsx) draws only on four legs or lying down.
 * Drawn for "Walking on two legs" and "From pig to man"; free for any other
 * panel of the last chapter.
 *
 * FROM THE TEXT (the held edition, src/data/full-texts/animal-farm.ts):
 *
 * - "It was a pig walking on his hind legs. Yes, it was Squealer. A little
 *   awkwardly, as though not quite used to supporting his considerable bulk
 *   in that position, but with perfect balance". So an upright pig leans
 *   back a little over his belly, his forelegs held at his sides.
 * - "a long file of pigs, all walking on their hind legs. Some did it better
 *   than others, one or two were even a trifle unsteady and looked as though
 *   they would have liked the support of a stick". So `arms="out"` holds the
 *   forelegs out for balance and tips the pig a little.
 * - "out came Napoleon himself, majestically upright, casting haughty glances
 *   from side to side, and with his dogs gambolling round him. He carried a
 *   whip in his trotter." So `arms="whip"` carries the whip upright, as a
 *   thing held, never raised to strike; its lash hangs slack.
 * - "Napoleon was now a mature boar of twenty-four stone. Squealer was so fat
 *   that he could with difficulty see out of his eyes." So Napoleon is the
 *   biggest pig in any panel, and Squealer's eye is a narrow slit.
 *
 * THE HEADS ARE THE KIT'S. Each upright pig's head is the front of the kit's
 * PIG_BODY or SQUEALER_BODY, with the kit's ears, moved up by HEAD_AT. Its
 * fine strokes (the flat of the snout, Squealer's round cheek and twinkle,
 * Napoleon's down-turned mouth) are the kit's own pigStrokes, and its cuts
 * (eye, brow, mouth, the line of the ear) are the head cuts of the kit's
 * pigCuts at the kit's coordinates, copied because pigCuts also carries the
 * four-legged body's folds, which would land outside an upright pig. So
 * Napoleon on his hind legs has the face he has on four, and the tone is the
 * kit's: Napoleon and the plain pigs black, Squealer pale. Only the body
 * below the head is new. If the kit's pig head changes, change these to
 * match and preview the panels that use them.
 *
 * Every figure here is drawn in its own frame, facing right, feet on y = 0,
 * and placed as the kit places an animal: `at`, `s` and `face`.
 */

/** Where the kit's pig head sits on an upright body. */
const HEAD_AT = 'translate(-30 -80)'

/** The front of the kit's PIG_BODY: the head alone, closed behind the ear. */
const PIG_HEAD =
  'M18 -53C29 -50 37 -44 44 -37C48 -33 53 -31.5 58 -31L61 -30.2L61.6 -20.6L57.6 -19C52 -18.5 47 -17.5 43 -18C38 -14 31 -12 25 -12C18 -10 12 -12 8 -16C2 -24 2 -44 8 -50C11 -52 15 -53 18 -53Z'
/** The front of the kit's SQUEALER_BODY, the same way. */
const SQUEALER_HEAD =
  'M16 -54C27 -50 34 -44 40 -38C44 -34 50 -32 55 -31.4L58 -30.6L58.6 -21.4L54.8 -19.8C50 -19 46 -18.6 44 -18C41 -12 34 -9 26 -9C18 -8 10 -10 6 -16C0 -26 0 -44 6 -50C9 -53 12 -54 16 -54Z'

/**
 * The upright body under the head: the back falls from behind the ears to
 * the rump, the chest and belly swell forward under the jowl. BODY_FAT is
 * Squealer's and Napoleon's: the belly further forward and lower.
 */
const BODY =
  'M-22 -128C-32 -118 -37 -100 -38 -80C-39 -60 -35 -44 -27 -34C-18 -27 -2 -27 6 -32C13 -38 17 -52 17 -66C17 -80 11 -90 -2 -94C-10 -96 -18 -100 -22 -106Z'
const BODY_FAT =
  'M-22 -128C-33 -118 -39 -100 -40 -80C-41 -60 -37 -42 -28 -33C-18 -26 0 -26 10 -32C19 -39 24 -54 23 -68C22 -82 13 -91 -2 -94C-10 -96 -18 -100 -22 -106Z'

export type UprightKind = 'napoleon' | 'squealer' | 'plain'
/** The forelegs: at his sides, held out for balance, or carrying the whip. */
export type UprightArms = 'sides' | 'out' | 'whip'

/** The hind legs mid-step, hip to foot. `step` 0 has the near leg forward. */
const LEGS: [string, string][] = [
  ['M-26 -36L-30 -20L-34 -6', 'M-10 -36L-2 -20L4 -6'],
  ['M-26 -36L-20 -20L-14 -6', 'M-10 -36L-14 -20L-22 -6'],
]
/** A cloven foot at (x, 0). */
const foot = (x: number) =>
  `M${x - 6} 0L${x + 8} 0C${x + 7.5} -3 ${x + 6} -6 ${x + 3.5} -8L${x - 5} -8Z`
const footCleft = (x: number, w: number) => gouge(x + 2.4, -0.6, x + 1.4, -6.4, w)

/** A trotter on the end of a foreleg, pointing along the forearm from `a` to `b`. */
function trotterAt(a: P, b: P): string {
  const ang = (Math.atan2(b[1] - a[1], b[0] - a[0]) * 180) / Math.PI
  return `translate(${b[0]} ${b[1]}) rotate(${Math.round(ang * 10) / 10})`
}
const TROTTER = 'M-1 -4L6 -3.4L8.6 -0.6L8.6 0.6L6 3.4L-1 4Z'
/** The cleft of a trotter, cut down its middle. */
const TROTTER_CLEFT = 'M3.4 0L9 0'

const ARMS: Record<UprightArms, { far: P[]; near: P[] }> = {
  sides: {
    far: [
      [-18, -88],
      [-20, -72],
      [-12, -62],
    ],
    near: [
      [-4, -88],
      [6, -72],
      [14, -64],
    ],
  },
  out: {
    far: [
      [-22, -88],
      [-36, -84],
      [-48, -90],
    ],
    near: [
      [-2, -88],
      [12, -86],
      [26, -92],
    ],
  },
  whip: {
    far: [
      [-18, -88],
      [-22, -72],
      [-14, -60],
    ],
    near: [
      [-4, -88],
      [8, -74],
      [22, -76],
    ],
  },
}

const line = (pts: P[]) => 'M' + pts.map(([x, y]) => `${x} ${y}`).join('L')

/**
 * A pig walking on his hind legs. `kind` picks the kit's head and tone.
 * `step` picks which hind leg is forward. `tilt` leans the whole pig, in
 * degrees about his feet: back for Squealer's bulk, forward for an unsteady
 * pig. `arms` places the forelegs.
 */
export function UprightPig({
  at,
  s = 1,
  face = 1,
  kind = 'plain',
  step = 0,
  tilt = 0,
  chin = 0,
  arms = 'sides',
  className,
  style,
}: Placing & {
  kind?: UprightKind
  step?: 0 | 1
  tilt?: number
  /** Degrees the head tips up (negative) or down about the neck: Napoleon's haughty lift. */
  chin?: number
  arms?: UprightArms
}) {
  const w = k(s)
  const tone = kind === 'squealer' ? 'paper' : 'ink'
  const edge = tone === 'ink' ? PAPER : INK
  const head = kind === 'squealer' ? SQUEALER_HEAD : PIG_HEAD
  const HEAD_T = chin ? `rotate(${chin} -14 -100) ${HEAD_AT}` : HEAD_AT
  const body = kind === 'plain' ? BODY : BODY_FAT
  const [farLeg, nearLeg] = LEGS[step]
  const legX = step === 0 ? [-34, 4] : [-14, -22]
  const a = ARMS[arms]
  const whip = arms === 'whip'
  const parts: Part[] = [
    { d: line(a.far), w: 7.5 },
    { d: TROTTER, t: trotterAt(a.far[1], a.far[2]) },
    { d: farLeg, w: 9 },
    { d: foot(legX[0]) },
    { d: 'M-37 -46C-44 -48 -48 -42 -44 -38C-40 -35 -36 -39 -39 -42', w: 2.6 },
    { d: PIG_FAR_EAR, t: HEAD_T },
    { d: body },
    { d: nearLeg, w: 9, sep: w(1.2) },
    { d: foot(legX[1]) },
    { d: head, t: HEAD_T },
    { d: PIG_EAR, t: HEAD_T },
    ...(whip
      ? [
          // the whip's stock, carried slanting up in the trotter, and the slack lash
          { d: 'M24 -74L42 -130', w: 3 },
          {
            d: ribbon(
              [
                [42, -130],
                [48, -124],
                [51, -112],
                [50, -100],
                [47, -90],
              ],
              2.6,
              0.6,
            ),
          },
        ]
      : []),
    { d: line(a.near), w: 7.5, sep: w(1.2) },
    { d: TROTTER, t: trotterAt(a.near[1], a.near[2]) },
  ]
  // The kit's features, at the kit's coordinates, moved up with the head.
  // A face stays legible on a big figure: its cuts grow with it above s 1.
  const f = (v: number) => w(v) * Math.max(1, s * 1.4)
  // As the kit's pigCuts of 26 September 2026: the eye well inside the face,
  // under the brow. Squealer's is the narrowest, "so fat that he could with
  // difficulty see out of his eyes".
  const eye =
    kind === 'napoleon'
      ? gouge(36, -34.4, 40.8, -34.8, Math.max(f(0.6), 0.8))
      : kind === 'squealer'
        ? gouge(33.6, -33.6, 38.8, -34.2, Math.max(w(0.6), 0.8))
        : gouge(35, -35, 41, -35.6, Math.max(w(0.95), 1.15))
  const brow =
    kind === 'napoleon'
      ? gouge(30.6, -40.4, 44, -36.6, f(1.25), f(-0.4))
      : gouge(33.4, -39.4, 42.4, -38.8, w(0.45), w(-0.6))
  const mouth =
    kind === 'squealer'
      ? gouge(44, -21.4, 52, -24, w(0.5))
      : kind === 'napoleon'
        ? ''
        : gouge(45, -21.6, 54, -22, w(0.45))
  const headCuts = eye + brow + mouth + gouge(27, -54.5, 33, -67, w(0.5))
  // Folds of the upright body: the line of the belly, and the haunch.
  const bodyCuts =
    (kind === 'plain'
      ? gouge(4, -84, 10, -40, w(0.6), w(2))
      : gouge(6, -86, 14, -40, w(0.6), w(2.6))) +
    gouge(-30, -60, -24, -38, w(0.55), w(-1.6)) +
    footCleft(legX[1], w(0.45))
  return (
    <g transform={place(at, s, face)} className={className} style={style}>
      <g transform={tilt ? `rotate(${tilt})` : undefined}>
        <Cut parts={parts} halo={w(1.8)} tone={tone}>
          <path d={bodyCuts} fill={edge} />
          <g transform={HEAD_T}>
            <path d={headCuts} fill={edge} />
            {pigStrokes(s, kind).map(([d, sw]) => (
              <path
                key={d}
                d={d}
                fill="none"
                stroke={edge}
                strokeWidth={sw}
                strokeLinecap="round"
              />
            ))}
          </g>
          <g transform={trotterAt(a.near[1], a.near[2])}>
            <path d={TROTTER_CLEFT} stroke={edge} strokeWidth={w(0.6)} />
          </g>
        </Cut>
      </g>
    </g>
  )
}

/**
 * One of Napoleon's dogs, "gambolling round him": the kit's dog (./people.tsx
 * DOG) in mid-leap, forelegs reaching and hind legs kicked back, with the
 * "brass-studded collars" of Chapter 5. `lift` raises it off the ground.
 */
export function LeapingDog({
  at,
  s = 1,
  face = 1,
  lift = 10,
  className,
  style,
}: Placing & { lift?: number }) {
  const w = k(s)
  const t = `translate(0 ${-lift}) rotate(-14 0 -30)`
  const parts: Part[] = [
    { d: 'M-18 -26L-30 -18L-40 -14', w: 4.6, t },
    { d: 'M12 -30L24 -22L34 -24', w: 4.6, t },
    { d: DOG.tail, w: 4, t },
    { d: DOG.body, t },
    { d: DOG.head, t },
    { d: DOG.ear, t },
    { d: 'M-12 -24L-26 -14L-38 -8', w: 4.6, sep: w(1.1), t },
    { d: 'M8 -28L22 -16L32 -16', w: 4.6, sep: w(1.1), t },
  ]
  return (
    <g transform={place(at, s, face)} className={className} style={style}>
      <Cut parts={parts} halo={w(1.8)}>
        <g transform={t}>
          <path d={gouge(28, -46, 33, -46.4, w(0.8))} fill={PAPER} />
          {/* the brass-studded collar */}
          <path d="M16 -44C19 -38 22 -34 24 -32" fill="none" stroke={PAPER} strokeWidth={w(2.2)} />
          <g fill={INK}>
            <circle cx={17.4} cy={-41.2} r={w(0.6)} />
            <circle cx={20} cy={-37} r={w(0.6)} />
            <circle cx={22.6} cy={-33.6} r={w(0.6)} />
          </g>
        </g>
      </Cut>
    </g>
  )
}

/**
 * Napoleon's black cockerel, "who marched in front of him and acted as a
 * kind of trumpeter" (Chapter 8): crowing, head thrown back and beak open.
 * About 44 high.
 */
const COCKEREL = {
  body: 'M-14 -20C-18 -28 -12 -36 0 -36C8 -36 14 -32 16 -26C18 -20 14 -14 6 -12C-2 -10 -10 -14 -14 -20Z',
  neck: 'M3 -33C5 -42 8 -50 12 -56L20 -54C19 -46 18 -38 16 -27Z',
  head: 'M11 -56C11 -62 16 -64 20 -62C22 -61 23 -59 23 -57L20 -53C17 -52 13 -53 11 -56Z',
  comb: 'M12 -61C11 -65 13 -67 15 -65C16 -68 18 -68 19 -65C21 -67 23 -65 22 -61Z',
  /** The beak open, crowing. */
  beak: 'M22 -60L29.5 -65L23 -57.4ZM22.4 -56L28.6 -57.6L22 -54.2Z',
  wattle: 'M18.6 -53C18.6 -49 20.6 -48 21.8 -51Z',
  /** The sickle feathers of the tail, arching up and back. */
  tail: [
    ribbon(
      [
        [-10, -28],
        [-16, -40],
        [-23, -50],
        [-31, -52],
        [-37, -46],
        [-39, -37],
      ],
      6,
      0.6,
    ),
    ribbon(
      [
        [-12, -25],
        [-20, -35],
        [-28, -40],
        [-35, -36],
        [-37, -27],
      ],
      5,
      0.6,
    ),
    ribbon(
      [
        [-12, -21],
        [-22, -25],
        [-30, -23],
        [-34, -16],
      ],
      4.4,
      0.6,
    ),
  ],
  legs: ['M0 -12L-2 -2', 'M6 -12L7 -2'],
}
export function Cockerel({ at, s = 1, face = 1, className, style }: Placing) {
  const w = k(s)
  const parts: Part[] = [
    ...COCKEREL.legs.map((d) => ({ d, w: 2.4 })),
    { d: 'M-8 0L2 0M3 0L13 0', w: 2 },
    ...COCKEREL.tail.map((d) => ({ d })),
    { d: COCKEREL.body },
    { d: COCKEREL.neck },
    { d: COCKEREL.head },
    { d: COCKEREL.comb },
    { d: COCKEREL.beak },
    { d: COCKEREL.wattle },
  ]
  return (
    <Cut
      parts={parts}
      cuts={
        gouge(15.6, -59.2, 19, -59.8, w(0.7)) +
        gouge(-6, -30, 8, -22, w(0.55), w(1.8)) +
        gouge(8, -48, 14, -34, w(0.45), w(-1)) +
        gouge(12, -52, 17, -40, w(0.4), w(-0.8))
      }
      halo={w(1.6)}
      transform={place(at, s, face)}
      className={className}
      style={style}
    />
  )
}

/**
 * A sheep standing, head up and bleating: the kit's pale fleece and dark
 * face (./people.tsx Sheep), on its feet. About 40 high.
 */
const FLEECE =
  'M-24 -14C-30 -18 -30 -28 -22 -32C-20 -38 -12 -40 -6 -36C0 -40 10 -40 14 -34C20 -34 24 -28 22 -22C24 -16 20 -10 14 -11C8 -8 0 -8 -6 -10C-12 -8 -20 -9 -24 -14Z'
/** The head thrown up to bleat, the mouth open at the tip. */
const EWE_HEAD =
  'M12 -30C14 -40 20 -50 28 -54C33 -56 37 -53 38 -48L41 -40C39 -37 35 -37 33 -39C28 -35 22 -31 16 -27ZM22 -48L11 -51L18 -43Z'
export function BleatingSheep({ at, s = 1, face = 1, style, className }: Placing) {
  const w = k(s)
  return (
    <g transform={place(at, s, face)} className={className} style={style as CSSProperties}>
      <Cut
        parts={['M-16 -12L-17 0', 'M-8 -10L-8 0', 'M6 -10L7 0', 'M14 -11L15 0'].map((d) => ({
          d,
          w: 3,
        }))}
        halo={w(1.4)}
      />
      <Cut parts={[{ d: FLEECE }]} tone="paper" halo={w(1.6)}>
        <path
          d="M-22 -22C-20 -25 -16 -25 -14 -22M-12 -30C-10 -33 -6 -33 -4 -30M2 -28C4 -31 8 -31 10 -28M-6 -18C-4 -21 0 -21 2 -18M8 -18C10 -21 14 -21 16 -18"
          fill="none"
          stroke={INK}
          strokeWidth={w(0.8)}
        />
      </Cut>
      <Cut parts={[{ d: EWE_HEAD }]} halo={w(1.4)}>
        <path d={gouge(27.4, -49.4, 31.4, -50.4, w(0.6))} fill={PAPER} />
        {/* the mouth open in a bleat */}
        <path d="M41.4 -41L34.6 -42.4L37.4 -38.6Z" fill={PAPER} />
      </Cut>
    </g>
  )
}
