import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rays,
  rng,
  wedge,
  type Pt,
  type Rng,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  CreatureHead,
  Figure,
  GRIP_HAND,
  HEAD_CREATURE,
  HEAD_VICTOR,
  NECKCLOTH,
  OPEN_HAND,
  VICTOR_CUTS,
  VICTOR_HAIR,
  VICTOR_HAIR_CUTS,
  VICTOR_PUPIL,
  headAt,
  man,
  type P,
  type Part,
} from './people'

/**
 * Chapters 10 and 17: "The demand for a companion", the eleventh moment in
 * the guide's timeline. Every detail is from the held 1831 text:
 *
 * - "We crossed the ice, therefore, and ascended the opposite rock. The air
 *   was cold, and the rain again began to descend: we entered the hut ...
 *   seating myself by the fire which my odious companion had lighted, he thus
 *   began his tale" (Chapter 10). So the two sit on either side of a fire in
 *   a rough mountain hut: dry-stone walls, a low roof on a heavy beam.
 * - "His tale had occupied the whole day; and the sun was upon the verge of
 *   the horizon when he departed"; "I saw him descend the mountain with
 *   greater speed than the flight of an eagle, and quickly lost among the
 *   undulations of the sea of ice" (Chapter 17). So through the open doorway
 *   the sun, in the spot colour, sits on the rim of the mountains above the
 *   sea of ice.
 * - "The being finished speaking, and fixed his looks upon me in expectation
 *   of a reply"; "Oh! my creator, make me happy; let me feel gratitude towards
 *   you for one benefit!" So the Creature leans towards Victor across the
 *   fire, looking at him, one great open hand held out to him.
 * - "I was bewildered, perplexed, and unable to arrange my ideas"; "I could
 *   no longer suppress the rage that burned within me". So Victor sits
 *   upright and drawn back on his stone, a hand gripping his knee.
 * - "my height is superior to thine" (Chapter 10). Seated, the Creature's
 *   head is higher than Victor's by more than a head, and nearly touches the
 *   beam of the roof. He is the kit's Creature (./people.tsx), drawn only as
 *   Chapter 5 describes him: the paper face, the flowing black hair, the
 *   straight black lips, the pale eye; and the cloak he took from Victor's
 *   rooms. Victor is the kit's Victor.
 *
 * The quotation is the threat in the middle of the plea, so the panel holds
 * both halves of the Creature's argument: the open hand, and the words. It is
 * copied as the held text has it, with a small "if", because it runs on from
 * "I will revenge my injuries:". Seeds: 1101 (the wall), 1102 (the fire's
 * light), 1103 (the floor), 1104 (the view), 1105 (the roof).
 */

const W = 860
const H = 340
/** Where the floor meets the wall. */
const FLOOR = 290
/** The underside of the roof beam. */
const BEAM = 40
/** The fire on its hearth: the light of the hut. */
const FIRE: Pt = [412, 266]
/** The open doorway on the evening. */
const DOOR = { x0: 640, x1: 786, y0: 78, y1: FLOOR }
/** The sun, on the verge of the horizon, seen through the door. */
const SUN: Pt = [724, 190]

type Marks = {
  wall: string
  joints: string
  fireRays: string
  floor: string
  roof: string
  sky: string
  sunRays: string
  ice: string
}

const light = (x: number, y: number) =>
  Math.max(
    0.04,
    clamp(1 - Math.hypot((x - FIRE[0]) * 0.85, (y - FIRE[1]) * 1.15) / 300) ** 1.3,
    0.4 * clamp(1 - Math.hypot(x - DOOR.x0, (y - 190) * 0.6) / 120),
  )

/** A dry-stone wall: courses of uneven height, stones of uneven length, ink joints. */
function dryStone(r: Rng, box: { x0: number; x1: number; y0: number; y1: number }) {
  let joints = ''
  let y = box.y0 + between(r, 10, 20)
  let row = 0
  while (y < box.y1 - 6) {
    const course = between(r, 20, 32)
    let x = box.x0 + between(r, -20, 0)
    while (x < box.x1) {
      const len = between(r, 26, 70)
      joints += wedge(x, y + between(r, -1.4, 1.4), x + len, y + between(r, -1.4, 1.4), 2.4, 2.8)
      x += len + between(r, 0, 3)
    }
    let hx = box.x0 + (row % 2 ? 14 : 36) + between(r, -8, 8)
    while (hx < box.x1) {
      joints += wedge(hx, y - course + 2, hx + between(r, -3, 3), y, 2.2, 2.6)
      hx += between(r, 34, 72)
    }
    y += course
    row++
  }
  return joints
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(1101)
  const wall = gougeField(r, { x0: 0, x1: W, y0: BEAM + 10, y1: FLOOR }, light, {
    spacing: 6.4,
    len: [18, 60],
    gap: [6, 18],
  })
  const joints = dryStone(r, { x0: 0, x1: W, y0: BEAM + 12, y1: FLOOR })
  const fireRays = rays(rng(1102), FIRE[0], FIRE[1] - 22, {
    from: 34,
    to: 96,
    every: 7.5,
    width: 2.2,
  })
  // The beaten earth floor, lit round the hearth.
  const floor = gougeField(
    rng(1103),
    { x0: 0, x1: W, y0: FLOOR + 5, y1: H },
    (x, y) => 0.1 + 0.8 * clamp(1 - Math.hypot((x - FIRE[0]) * 0.55, (y - FIRE[1]) * 1.6) / 260),
    { spacing: 6.5, len: [18, 70], gap: [8, 26], max: 3.6 },
  )
  // The evening through the doorway: the sky cut pale towards the sun, and
  // the sea of ice below, its crevasses running away from the eye.
  const v = rng(1104)
  const sky = gougeField(
    v,
    { x0: DOOR.x0, x1: DOOR.x1, y0: DOOR.y0, y1: 194 },
    (x, y) => 0.2 + 0.8 * clamp(1 - Math.hypot((x - SUN[0]) * 0.8, y - SUN[1]) / 110),
    { spacing: 5.4, len: [16, 60], gap: [4, 12] },
  )
  const sunRays = rays(v, SUN[0], SUN[1], { from: 18, to: 70, every: 8, width: 2 })
  let ice = ''
  for (let k = 0; k < 12; k++) {
    const y = 220 + k * 6 + between(v, -1, 1)
    let x = DOOR.x0 + between(v, -20, 0)
    while (x < DOOR.x1) {
      const len = between(v, 14, 44)
      if (v() < 0.6) ice += gouge(x, y, x + len, y + between(v, 1, 4), 0.5 + k * 0.12)
      x += len + between(v, 8, 22)
    }
  }
  // The roof: boards above the beam, dark, a few long cuts.
  const f = rng(1105)
  let roof = ''
  for (let y = 7; y < BEAM - 4; y += 7) {
    let x = between(f, -30, 0)
    while (x < W) {
      const len = between(f, 60, 160)
      roof += gouge(x, y, x + len, y + between(f, -0.5, 0.5), 0.4 + light(x + len / 2, 80) * 1.6)
      x += len + between(f, 6, 18)
    }
  }
  cached = { wall, joints, fireRays, floor, roof, sky, sunRays, ice }
  return cached
}

/** The mountains through the door: black peaks, their snow cut in paper. */
const PEAKS = `M${DOOR.x0} 196L650 168L664 144L678 160L690 150L702 176L714 190L736 190L748 172L760 150L772 126L786 146L${DOOR.x1} 196Z`
const PEAK_SNOW =
  gouge(664, 145, 672, 158, 1.3) +
  gouge(690, 151, 697, 164, 1.2) +
  gouge(772, 127, 780, 142, 1.4) +
  gouge(772, 130, 765, 141, 0.9)
/** The far edge of the sea of ice, below the peaks. */
const ICE_TOP = `M${DOOR.x0} 196L${DOOR.x1} 196L${DOOR.x1} 214C750 208 700 212 ${DOOR.x0} 216Z`

// ── VICTOR, seated on a stone on the left, drawn back, gripping his knee ───

const V_HEAD = { d: HEAD_VICTOR, at: [250, 150] as P, rot: -6, scale: 1.3 }
const VICTOR = man({
  facing: 1,
  neck: [242, 186],
  hip: [230, 254],
  head: V_HEAD,
  hair: VICTOR_HAIR,
  body: { width: 30, tails: 30, front: 2 },
  near: {
    arm: [
      [248, 196],
      [258, 228],
      [280, 246],
    ],
    leg: [
      [232, 254],
      [282, 252],
      [288, 292],
    ],
    hand: { parts: GRIP_HAND, scale: 1.05, rot: 40 },
  },
  far: {
    arm: [
      [236, 196],
      [244, 230],
      [268, 250],
    ],
    leg: [
      [228, 256],
      [272, 262],
      [272, 294],
    ],
  },
})

/** The edge of his coat, its buttons, and the line of his lap, cut in paper. */
const VICTOR_COAT_CUTS =
  gouge(252, 198, 243, 244, 0.9, 0.6) +
  gouge(238, 251, 278, 249, 0.8) +
  gouge(230, 200, 222, 246, 0.8, -1) +
  [206, 216, 226].map((y) => `M${n(249 - (y - 206) * 0.2)} ${y}a1.3 1.3 0 1 0 0.1 0Z`).join('')

/** The stone he sits on. */
const V_STONE = 'M184 294C182 276 190 262 204 258L256 257C268 259 274 268 274 280L272 294Z'

// ── THE CREATURE, seated on a boulder on the right, leaning to Victor ───────

const C_HEAD = { d: HEAD_CREATURE, at: [566, 98] as P, rot: 12, scale: 1.72 }
const C_NEAR_ARM: P[] = [
  [570, 158],
  [536, 190],
  [496, 200],
]
/**
 * A hand held out, open, the fingers spread wide in a fan so each one stays
 * apart at phone width, the thumb up: the kit's OPEN_HAND spread further,
 * because at this size its fingers ran together into a paw. In the frame of
 * the wrist, as the kit's hands are.
 */
const PLEA_HAND: Part[] = [
  { d: 'M-1 -5C4 -6.6 9 -6.4 11.4 -4.4L11.8 5C8 6.8 3 6.4 -1 4.6Z' },
  { d: 'M10.6 -3.6L18.6 -9.4', w: 2.4 },
  { d: 'M11.2 -1.2L21.2 -3.6', w: 2.4 },
  { d: 'M11.2 1.6L20.8 3', w: 2.4 },
  { d: 'M10.6 4.2L17.8 9.2', w: 2.3 },
  { d: 'M3 -5L6.6 -10.6L10.4 -13', w: 2.5 },
]
/** His cloak, over the shoulders and back to the boulder, and forward over his thighs. */
const C_CLOAK =
  'M560 150C582 136 610 136 628 150C646 172 654 212 658 250L662 288L612 290C602 272 584 262 554 260L550 246C572 240 590 230 598 212C592 186 578 166 560 150Z'
const CREATURE: Part[] = man({
  facing: -1,
  neck: [578, 146],
  hip: [612, 236],
  head: C_HEAD,
  robe: C_CLOAK,
  body: { width: 48 },
  arm: 12,
  leg: 13,
  near: {
    arm: C_NEAR_ARM,
    leg: [
      [606, 246],
      [550, 252],
      [544, 292],
    ],
    hand: { parts: PLEA_HAND, scale: 1.45, rot: 6 },
  },
  far: {
    arm: [],
    leg: [
      [616, 240],
      [570, 262],
      [568, 292],
    ],
  },
})
/** The boulder he sits on. */
const C_STONE = 'M592 294C588 268 600 248 628 242L668 242C686 246 694 264 692 294Z'

function TheDemandForACompanion({ uid }: ArtProps) {
  const m = marks()
  const vt = headAt(1, V_HEAD.at, V_HEAD.rot, V_HEAD.scale)
  const ct = headAt(-1, C_HEAD.at, C_HEAD.rot, C_HEAD.scale)
  const door = `${uid}-door`
  return (
    <>
      <defs>
        <clipPath id={door}>
          <rect x={DOOR.x0} y={DOOR.y0} width={DOOR.x1 - DOOR.x0} height={DOOR.y1 - DOOR.y0} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [430, 200], push: 1.03 })}>
        {/* the dry-stone wall, lit by the fire */}
        <path d={m.wall} fill={PAPER} />
        <path d={m.joints} fill={INK} />
        <path d={m.fireRays} fill={PAPER} />

        {/* the roof and its beam */}
        <rect x={0} y={0} width={W} height={BEAM} fill={INK} />
        <path d={m.roof} fill={PAPER} />
        <rect x={0} y={BEAM} width={W} height={12} fill={INK} />
        <path
          d={`M0 ${BEAM + 1}H${W}M0 ${BEAM + 12}H${W}`}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={gouge(40, BEAM + 6, 300, BEAM + 7, 1) + gouge(420, BEAM + 6, 760, BEAM + 5, 1)}
          fill={PAPER}
        />

        {/* the doorway on the evening: the sun on the verge of the horizon */}
        <rect
          x={DOOR.x0}
          y={DOOR.y0}
          width={DOOR.x1 - DOOR.x0}
          height={DOOR.y1 - DOOR.y0}
          fill={INK}
        />
        <g clipPath={`url(#${door})`}>
          <path d={m.sky} fill={PAPER} />
          <path d={m.sunRays} fill={PAPER} />
          <circle cx={SUN[0]} cy={SUN[1]} r={21} fill={INK} />
          <circle cx={SUN[0]} cy={SUN[1]} r={17} fill={RED} />
          <path
            d={PEAKS}
            fill={INK}
            stroke={PAPER}
            strokeWidth={LINE.fine}
            strokeLinejoin="round"
          />
          <path d={PEAK_SNOW} fill={PAPER} />
          <rect x={DOOR.x0} y={196} width={DOOR.x1 - DOOR.x0} height={FLOOR - 196} fill={PAPER} />
          <path d={ICE_TOP} fill={INK} />
          <path d={m.ice} fill={INK} />
        </g>
        {/* the door-posts and lintel, rough timber */}
        <g fill={INK} stroke={PAPER} strokeWidth={LINE.carve}>
          <rect x={DOOR.x0 - 14} y={DOOR.y0 - 12} width={14} height={DOOR.y1 - DOOR.y0 + 12} />
          <rect x={DOOR.x1} y={DOOR.y0 - 12} width={14} height={DOOR.y1 - DOOR.y0 + 12} />
          <rect x={DOOR.x0 - 22} y={DOOR.y0 - 16} width={DOOR.x1 - DOOR.x0 + 44} height={12} />
        </g>
        <path
          d={
            gouge(DOOR.x0 - 7, DOOR.y0, DOOR.x0 - 7.6, DOOR.y1 - 10, 0.9) +
            gouge(DOOR.x1 + 7, DOOR.y0, DOOR.x1 + 6.4, DOOR.y1 - 10, 0.9)
          }
          fill={PAPER}
        />

        {/* the floor */}
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={INK} />
        <path d={`M0 ${FLOOR + 1}H${W}`} stroke={PAPER} strokeWidth={LINE.bold} />
        <path d={m.floor} fill={PAPER} />

        {/* the stones they sit on */}
        <path d={V_STONE + C_STONE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path
          d={
            gouge(208, 268, 262, 266, 1.2) +
            gouge(216, 278, 270, 277, 0.9) +
            gouge(606, 254, 676, 252, 1.2) +
            gouge(612, 268, 682, 268, 0.9)
          }
          fill={PAPER}
        />

        {/* the fire the Creature lit, on a ring of hearth stones */}
        <g fill={RED}>
          <path
            className="lc-flicker"
            d="M392 282C384 268 392 252 398 238C404 250 410 262 404 282Z"
          />
          <path
            className="lc-flicker"
            style={timing({ dur: 0.8, delay: 0.35 })}
            d="M404 282C398 262 406 240 414 222C422 242 430 262 422 282Z"
          />
          <path
            className="lc-flicker"
            style={timing({ dur: 1, delay: 0.5 })}
            d="M420 282C416 268 422 256 428 246C432 258 436 270 432 282Z"
          />
        </g>
        <path d="M380 290L446 290L440 280L386 280Z" fill={INK} />
        <path
          d="M386 283L404 276M408 284L426 275M418 283L440 279"
          stroke={PAPER}
          strokeWidth={1.4}
        />
        <g fill={INK} stroke={PAPER} strokeWidth={LINE.carve}>
          {[364, 382, 402, 424, 446, 462].map((x, i) => (
            <ellipse key={x} cx={x} cy={290 + (i % 2) * 2} rx={11} ry={7} />
          ))}
        </g>

        {/* Victor */}
        <Figure parts={VICTOR} cuts={VICTOR_COAT_CUTS}>
          <path d={VICTOR_HAIR_CUTS + VICTOR_CUTS} transform={vt} fill={PAPER} />
          <path d={VICTOR_PUPIL} transform={vt} fill={INK} />
          <path d={NECKCLOTH} transform={vt} fill={PAPER} />
        </Figure>

        {/* the Creature */}
        <Figure parts={CREATURE} halo={2.2}>
          <path
            d={gouge(606, 160, 632, 240, 1.2, -2) + gouge(620, 156, 646, 256, 1, -2.6)}
            fill={PAPER}
          />
        </Figure>
        <CreatureHead t={ct} />
      </g>
    </>
  )
}

export const theDemandForACompanion: LinocutArt = {
  width: W,
  height: H,
  Draw: TheDemandForACompanion,
}
