import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  gougeField,
  rays,
  rng,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  CAREW_CUTS,
  Figure,
  GRIP_HAND,
  HEAD_CAREW,
  HEAD_HYDE,
  HydeFace,
  LOW_HAT,
  OPEN_HAND,
  TOP_HAT,
  TOP_HAT_BAND,
  WHITE_HAIR,
  WHITE_HAIR_STRANDS,
  gent,
  handAt,
  headAt,
  type P,
  type Part,
} from './people'
import { COLLAR } from './investigation-kit'

/**
 * Chapter 4, "The Carew Murder Case": "The Carew murder", the fifth moment in
 * the guide's timeline. Every detail is from the maid's account:
 *
 * - "A maid servant living alone in a house not far from the river, had gone
 *   upstairs to bed about eleven. Although a fog rolled over the city in the
 *   small hours, the early part of the night was cloudless, and the lane,
 *   which the maid's window overlooked, was brilliantly lit by the full moon."
 *   So the moon is full in a clear sky, the lane is bright and throws long
 *   shadows, the river lies beyond it, and the maid is at her upper window.
 * - "she sat down upon her box, which stood immediately under the window";
 *   "At the horror of these sights and sounds, the maid fainted." So she is
 *   seated, only her head and shoulders above the sill, and in the moment
 *   before the blow her hand goes to her mouth.
 * - "an aged beautiful gentleman with white hair, drawing near along the
 *   lane; and advancing to meet him, another and very small gentleman ... Mr.
 *   Hyde". "He had in his hand a heavy cane". So Carew is tall, white-haired,
 *   in a top hat, and Hyde is the small, plainly dressed man of the earlier
 *   panels, with a heavy stick.
 * - "And then all of a sudden he broke out in a great flame of anger, stamping
 *   with his foot, brandishing the cane, and carrying on (as the maid
 *   described it) like a madman. The old gentleman took a step back, with the
 *   air of one very much surprised and a trifle hurt". So Hyde has one foot
 *   raised to stamp and the cane raised high behind his head, his face flushed
 *   (the spot colour, as in "Utterson meets Hyde"), and Carew is stepping back
 *   from him, one open hand up before his chest and the other thrown out
 *   behind him.
 *
 * SAFEGUARDING. The killing is not drawn. The picture stops at the moment
 * before the blow: the cane is raised and has touched no one, and nothing
 * after it is shown. The violence is carried by the raised stick, the
 * old man's recoil, the maid's hand at her mouth, and the long shadow of the
 * stick lying across the lane towards him. Seeds: 551 (the sky), 552 (the
 * moon's light), 553 (the river), 554 (the lane), 555 (the house), 556 (the
 * moon's marks).
 */

const W = 860
const H = 340
const MOON: P = [318, 62]
const RIVER_TOP = 150
const WALL_TOP = 190
const LANE = 204
const GROUND = 292

type Marks = {
  sky: string
  moon: string
  river: string
  glint: string
  lane: string
  house: string
  craters: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // A cloudless sky, bright round the full moon.
  const sky = gougeField(
    rng(551),
    { x0: 190, x1: W, y0: 6, y1: RIVER_TOP },
    (x, y) => 0.06 + 0.9 * clamp(1 - Math.hypot(x - MOON[0], (y - MOON[1]) * 1.3) / 320) ** 1.5,
    { spacing: 6, len: [24, 90], gap: [6, 22] },
  )
  const moon = rays(rng(552), MOON[0], MOON[1], { from: 34, to: 100, every: 6.5, width: 2.6 })
  // The river under the moon: dark water, ripples cut white, a broken path
  // of light below the moon.
  const r = rng(553)
  let river = ''
  for (let y = RIVER_TOP + 14; y < WALL_TOP - 2; y += 4.4) {
    let x = 190 + between(r, -20, 0)
    while (x < W) {
      const len = between(r, 10, 40)
      const near = clamp(1 - Math.abs(x - MOON[0]) / 70)
      if (r() < 0.25 + near * 0.7)
        river += gouge(x, y, x + len, y + between(r, -0.5, 0.5), 0.5 + near * 1.8)
      x += len + between(r, 8, 30) * (1 - near * 0.8)
    }
  }
  let glint = ''
  for (let i = 0; i < 9; i++) {
    const y = RIVER_TOP + 16 + i * 2.8
    glint += gouge(MOON[0] - 14 + between(r, -4, 4), y, MOON[0] + 14 + between(r, -4, 4), y, 1.1)
  }
  // The lane, bright, with a little grit cut in ink.
  const lane = gougeField(
    rng(554),
    { x0: 0, x1: W, y0: LANE + 6, y1: H },
    (_x, y) => 0.06 + 0.1 * clamp((y - LANE) / 130),
    { spacing: 8, len: [10, 40], gap: [20, 60], max: 1.4 },
  )
  // The maid's house: dark brick.
  const house = gougeField(
    rng(555),
    { x0: 0, x1: 190, y0: 0, y1: 300 },
    (x, y) => 0.05 + 0.3 * clamp(1 - Math.hypot(x - 190, y - 60) / 260),
    { spacing: 5.4, len: [10, 30], gap: [4, 12], max: 2 },
  )
  // The moon's marks: two broken rings, as on the Carew portrait. Solid ink:
  // an earlier draft printed them as ink at a third of its strength, a grey
  // the print cannot make.
  const c = rng(556)
  const craters =
    arcDashes(c, MOON[0] - 7, MOON[1] - 5, 8, deg(0), deg(360), [4, 8], [3, 6]) +
    arcDashes(c, MOON[0] + 8, MOON[1] + 7, 5, deg(0), deg(360), [3, 6], [3, 5])
  cached = { sky, moon, river, glint, lane, house, craters }
  return cached
}

/** The far bank: wharves and a church tower, black against the moonlit sky. */
const FAR_BANK = `M190 ${RIVER_TOP}V132H236V120H262V132H300V136H420V124H520V124H560V130H640V116H664V126H700V104H710V88L716 74L722 88V104H732V134H790V120H818V130H${W}V${RIVER_TOP}Z`

/** Hyde, stamping his foot, the heavy cane raised high behind his head. */
const HYDE_HEAD = { d: HEAD_HYDE, at: [434, 152] as P, rot: -4, scale: 1.08 }
const HYDE_CANE_ARM: P[] = [
  [428, 184],
  [408, 154],
  [400, 114],
]
/** The heavy stick, brandished high behind his head, its knob in his fist. */
const CANE = 'M404 116L356 56'
const CANE_KNOB: P = [406, 119]
const HYDE: Part[] = [
  { d: CANE, w: 6.4 },
  { d: `M${CANE_KNOB[0] - 5} ${CANE_KNOB[1]}a5 5 0 1 0 10 0a5 5 0 1 0 -10 0Z` },
  ...gent({
    facing: 1,
    neck: [432, 178],
    hip: [428, 232],
    head: HYDE_HEAD,
    hat: LOW_HAT,
    body: { width: 30, hem: 22, flare: 6, swing: 4 },
    arm: 8,
    leg: 9,
    near: {
      arm: HYDE_CANE_ARM,
      leg: [
        [430, 232],
        [452, 252],
        [452, 274],
      ],
    },
    far: {
      arm: [
        [428, 186],
        [414, 210],
        [420, 232],
      ],
      leg: [
        [426, 232],
        [418, 264],
        [412, GROUND],
      ],
      hand: { parts: GRIP_HAND },
    },
  }),
  ...GRIP_HAND.map((q) => ({ ...q, t: handAt(HYDE_CANE_ARM, 1, { parts: GRIP_HAND, rot: -10 }) })),
]

/**
 * Carew, stepping back, surprised: the near hand up before his chest, open,
 * the palm towards Hyde; the far hand thrown out behind him as he steps back.
 * An earlier draft raised both hands together before his chest, and at phone
 * width their ten fingers ran into one fan that read as clapping or prayer.
 */
const CAREW_HEAD = { d: HEAD_CAREW, at: [568, 106] as P, rot: 10, scale: 1.26 }
const CAREW_NEAR: P[] = [
  [564, 148],
  [548, 184],
  [530, 160],
]
const CAREW_FAR: P[] = [
  [574, 148],
  [588, 178],
  [602, 198],
]
const CAREW_POSE: Parameters<typeof gent>[0] = {
  facing: -1,
  neck: [570, 140],
  hip: [564, 216],
  head: CAREW_HEAD,
  hat: TOP_HAT,
  body: { width: 30, hem: 46, flare: 8, swing: 6 },
  near: {
    arm: CAREW_NEAR,
    leg: [
      [566, 216],
      [582, 258],
      [600, GROUND],
    ],
    hand: { parts: OPEN_HAND, scale: 1.05 },
  },
  far: {
    arm: CAREW_FAR,
    leg: [
      [562, 216],
      [548, 260],
      [536, GROUND - 2],
    ],
    hand: { parts: OPEN_HAND, scale: 1 },
  },
}
const CAREW: Part[] = gent(CAREW_POSE)
/** His shadow leaves out his hands, whose small spread shapes read as nothing on the ground. */
const CAREW_SHADOW: Part[] = gent({
  ...CAREW_POSE,
  near: { ...CAREW_POSE.near, hand: undefined },
  far: { ...CAREW_POSE.far, hand: undefined },
})

/**
 * The maid, seated at her open window, facing the lane: a plain woman's head
 * with a servant's white cap, in the frame of the heads (facing right). The
 * text does not describe her; the cap is the plain dress of her place.
 *
 * Her hair is put up in a bun below the back of the cap, and the cap has a
 * frilled edge: with a plain white cap alone, the black head at phone width
 * read as a bald man's, and the witness is a woman.
 */
const MAID_HEAD =
  'M-8 22C-9 16 -14 12 -15 4C-16 -8 -8 -18 2 -18C10 -18 14 -13 14 -7.5L14.5 -4.5L19.5 3L15 4.8L15.5 7.5L14.3 9L15 11.5C14.5 15 11.5 17 7 17L5.5 22Z'
const MAID_CAP =
  'M-15 -3C-17 -14 -8 -23 3 -22C10 -21.5 15 -17 15.5 -11C8 -14 -2 -14 -9 -9C-12 -6 -13.5 -4 -15 -3Z'
/** The bun, at the back of the head under the cap. */
const MAID_BUN = 'M-13 -1C-19 -3 -24 1 -23 7C-22 12 -16 13 -12.5 9Z'
/** The frill along the front edge of the cap: small scallops, cut in paper. */
const MAID_FRILL =
  'M15.5 -11Q14.6 -7.6 11.6 -9.2Q10.4 -6 7.2 -7.8Q5.8 -4.8 2.6 -6.8Q1 -4 -2 -6.2Q-3.6 -3.6 -6.4 -5.8Q-7.6 -3.4 -9 -4.8L-9 -9C-2 -14 8 -14 15.5 -11Z'
const MAID_AT: P = [100, 106]
const MAID_ARM: P[] = [
  [96, 138],
  [114, 146],
  [118, 124],
]
const MAID: Part[] = [
  { d: 'M78 150C78 136 86 128 98 128C110 128 122 134 124 150Z' },
  { d: MAID_BUN, t: headAt(1, MAID_AT, 0, 0.95) },
  { d: MAID_HEAD, t: headAt(1, MAID_AT, 0, 0.95) },
  { d: 'M96 138L114 146L118 124', w: 6.4, sep: 1.2 },
  ...OPEN_HAND.map((q) => ({
    ...q,
    t: handAt(MAID_ARM, 1, { parts: OPEN_HAND, scale: 0.8, rot: -10 }),
  })),
]

/**
 * A figure's shadow cast by the moon behind it on the left: each point
 * slides right and a little down in proportion to its height above the
 * ground line `g`.
 */
const shadowAt = (g: number) => `matrix(1 0 -0.9 -0.24 ${0.9 * g} ${1.24 * g})`

function Shadow({ parts, g }: { parts: Part[]; g: number }) {
  return (
    <g transform={shadowAt(g)} fill={INK} stroke={INK}>
      {parts.map((p, i) =>
        p.w ? (
          <path
            key={i}
            d={p.d}
            transform={p.t}
            fill="none"
            strokeWidth={p.w}
            strokeLinecap="round"
          />
        ) : (
          <path key={i} d={p.d} transform={p.t} strokeWidth={0} />
        ),
      )}
    </g>
  )
}

function TheCarewMurder({ uid }: ArtProps) {
  const m = marks()
  const ht = headAt(1, HYDE_HEAD.at, HYDE_HEAD.rot, HYDE_HEAD.scale)
  const ct = headAt(-1, CAREW_HEAD.at, CAREW_HEAD.rot, CAREW_HEAD.scale)
  const laneClip = `${uid}-lane`
  return (
    <>
      <defs>
        <clipPath id={laneClip}>
          <rect x={0} y={LANE} width={W} height={H - LANE} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [520, 190], push: 1.035 })}>
        {/* the clear sky and the full moon */}
        <path d={m.sky} fill={PAPER} />
        <path d={m.moon} fill={PAPER} />
        <circle cx={MOON[0]} cy={MOON[1]} r={26} fill={PAPER} stroke={INK} strokeWidth={2} />
        {/* the moon's own marks, cut as the Carew portrait cuts them */}
        <path d={m.craters} fill="none" stroke={INK} strokeWidth={1} strokeLinecap="round" />

        {/* the far bank, the river, the river wall */}
        <path
          d={FAR_BANK}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
          strokeLinejoin="round"
        />
        <path d={m.river} fill={PAPER} />
        <path d={m.glint} fill={PAPER} />
        <rect x={190} y={WALL_TOP} width={W - 190} height={LANE - WALL_TOP} fill={INK} />
        <path d={`M190 ${WALL_TOP + 1}H${W}`} stroke={PAPER} strokeWidth={LINE.bold} />
        <path
          d={[260, 340, 420, 500, 580, 660, 740, 820]
            .map((x) => `M${x} ${WALL_TOP + 3}V${LANE}`)
            .join('')}
          stroke={PAPER}
          strokeWidth={1}
        />

        {/* the lane, brilliantly lit, and the long moon-shadows on it */}
        <rect x={0} y={LANE} width={W} height={H - LANE} fill={PAPER} />
        <path d={m.lane} fill={INK} />
        <g clipPath={`url(#${laneClip})`}>
          <Shadow parts={HYDE} g={GROUND} />
          <Shadow parts={CAREW_SHADOW} g={GROUND} />
        </g>

        {/* the maid's house, and the maid at her window */}
        <rect x={0} y={0} width={190} height={300} fill={INK} />
        <path d={m.house} fill={PAPER} />
        <path d="M190 0V300" stroke={PAPER} strokeWidth={LINE.carve} />
        <rect x={0} y={300} width={190} height={8} fill={PAPER} />
        <rect x={0} y={308} width={190} height={H - 308} fill={INK} />
        <rect x={48} y={30} width={116} height={128} fill={PAPER} />
        <rect x={54} y={36} width={104} height={116} fill={INK} />
        {/* the upper sash, its panes silvered by the moon */}
        <rect x={54} y={36} width={104} height={50} fill={PAPER} />
        <path d="M54 61H158M106 36V86M54 86H158" stroke={INK} strokeWidth={3} />
        <path
          d={
            gouge(62, 44, 88, 58, 0.55) +
            gouge(114, 44, 140, 58, 0.55) +
            gouge(66, 68, 92, 82, 0.55) +
            gouge(118, 68, 150, 82, 0.55)
          }
          fill={INK}
        />
        <Figure parts={MAID}>
          {/* her servant's cap, white linen */}
          <path
            d={MAID_CAP}
            transform={headAt(1, MAID_AT, 0, 0.95)}
            fill={PAPER}
            stroke={INK}
            strokeWidth={1.2}
            strokeLinejoin="round"
          />
          <path
            d={MAID_FRILL}
            transform={headAt(1, MAID_AT, 0, 0.95)}
            fill={PAPER}
            stroke={INK}
            strokeWidth={1}
            strokeLinejoin="round"
          />
          <path
            d="M-6 -17C-2 -12 0 -9 1 -6"
            transform={headAt(1, MAID_AT, 0, 0.95)}
            fill="none"
            stroke={INK}
            strokeWidth={0.9}
          />
          {/* the hair of the bun, wound round */}
          <path
            d={gouge(-21, 2, -15, -0.6, 0.55, 1) + gouge(-21.4, 7, -14.4, 9.2, 0.55, -1)}
            transform={headAt(1, MAID_AT, 0, 0.95)}
            fill={PAPER}
          />
          <path
            d="M7 -3.6Q10 -5.4 12.6 -3.6Q10 -2.2 7 -3.6Z"
            transform={headAt(1, MAID_AT, 0, 0.95)}
            fill={PAPER}
          />
        </Figure>
        <rect x={42} y={150} width={128} height={8} fill={PAPER} stroke={INK} strokeWidth={1} />

        {/* Carew, stepping back */}
        <Figure parts={CAREW}>
          <path d={TOP_HAT_BAND} transform={ct} fill={PAPER} />
          <path d={WHITE_HAIR} transform={ct} fill={PAPER} />
          <path d={WHITE_HAIR_STRANDS} transform={ct} fill="none" stroke={INK} strokeWidth={0.8} />
          <path d={CAREW_CUTS + COLLAR} transform={ct} fill={PAPER} />
          <path
            d={gouge(572, 154, 578, 210, 0.9, -1) + gouge(566, 220, 584, 256, 0.9, -1)}
            fill={PAPER}
          />
        </Figure>

        {/* Hyde, in a great flame of anger */}
        <Figure parts={HYDE}>
          <path d={gouge(428, 190, 424, 228, 0.8, 0.8)} fill={PAPER} />
          {/* the grain of the stick, so it reads as wood and not as his arm */}
          <path d={gouge(396, 104, 362, 62, 0.8, 0.4)} fill={PAPER} />
        </Figure>
        <HydeFace t={ht} flushed hat />
      </g>
    </>
  )
}

export const theCarewMurder: LinocutArt = { width: W, height: H, Draw: TheCarewMurder }
