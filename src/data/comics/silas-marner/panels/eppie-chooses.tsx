import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rays, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Bonnet,
  EppieGrownHead,
  Figure,
  GODFREY_CURLS,
  GODFREY_CUTS,
  GODFREY_HAIR,
  GRIP_CUTS,
  GRIP_HAND,
  HEAD_EPPIE_GROWN,
  HEAD_GODFREY,
  HEAD_NANCY,
  HEAD_SILAS,
  HOLD_CUTS,
  HOLD_HAND,
  NECKCLOTH,
  NancyHead,
  OPEN_HAND,
  PaperHair,
  SHIRT_COLLAR,
  SilasFace,
  gown,
  handAt,
  headAt,
  man,
  seatedGown,
  type P,
  type Part,
} from './people'

/**
 * Chapter 19: "Eppie chooses", the sixteenth moment in the guide's timeline.
 * Every detail is from the text (the held edition,
 * src/data/full-texts/silas-marner.ts):
 *
 * - "Between eight and nine o'clock that evening, Eppie and Silas were seated
 *   alone in the cottage"; "On the table near them, lit by a candle, lay the
 *   recovered gold—the old long-loved gold, ranged in orderly heaps". So it is
 *   night, the one light is a candle on the table, and the gold stands on it
 *   in columns of coins: with the candle's flame, the only things in the spot
 *   colour, as the gold is in every panel of this text.
 * - "The oaken table and three-cornered oaken chair" came from the Red House
 *   (Chapter 16), and Silas "sat in his arm-chair". So he sits in an old oak
 *   chair with a low rail round him. The cottage is "a stone cottage" with a
 *   brick floor ("between the bricks", Chapter 4), so the wall is laid stone
 *   and the floor brick, under a low beam. (The loom is still in the room,
 *   Chapter 16, but it is left out: its end, standing in the dark, read at
 *   panel size as a bare frame with something hanging from its beam.)
 * - "Eppie, after placing chairs for Mr. and Mrs. Cass, went to stand against
 *   Silas, opposite to them." So the Casses sit on two plain chairs across
 *   the room, and she stands by his chair, facing them.
 * - The moment of the quotation. "She held Silas's hand in hers, and grasped
 *   it firmly"; "Nancy looked at Godfrey with a pained questioning glance. But
 *   his eyes were fixed on the floor, where he was moving the end of his
 *   stick"; Nancy then speaks to Eppie, "mildly", and "'I can't feel as I've
 *   got any father but one,' said Eppie, impetuously, while the tears
 *   gathered." So her hand is closed round her father's, its knuckles cut
 *   apart, Godfrey's head is bowed over the end of his stick on the bricks,
 *   and Nancy, who has just spoken, looks across at Eppie.
 * - "Her cheeks were flushed, but not with shyness this time." The flush is
 *   left to the words: a spot of red on her dark profile was tried, and at
 *   panel size it read as her lips. Her throat is cut in paper above the dark
 *   gown: "the whiteness of her rounded chin and throat set off by the
 *   dark-blue cotton gown" (Chapter 16); the blue is left to the words.
 * - Silas, "Fifty-five, as near as I can say": the white hair and the calmer
 *   eye of Part Two in the figure kit (./people.tsx), his face turned up to
 *   her. Godfrey is one of the "tall, powerful" men, the broadest figure, his
 *   fair hair cut in paper. "Nancy herself was pale and tremulous", so there
 *   is no bloom on her cheek.
 * - Nancy has come out at night on foot: "Nancy and Godfrey walked home under
 *   the starlight", and at home "Nancy laid down her bonnet and shawl"
 *   (Chapter 20). So she sits here in them: a plain straw bonnet that leaves
 *   her face and the flat rings over her brow showing, tied with a bow, and a
 *   dark fringed shawl over a dark gown. "Too late" shows them laid down.
 *
 * Seeds: 1601 (the wall), 1602 (the candle's light), 1603 (the brick floor).
 */

const W = 860
const H = 340
/** The foot of the wall; the floor runs from it. */
const BASE = 244
/** Where the figures' feet stand. */
const FEET = 316
const FLAME: P = [470, 168]
const TABLE_TOP = 212

type Marks = { wall: string; glow: string; bricks: string; beam: string }

const light = (x: number, y: number) =>
  Math.max(clamp(1 - Math.hypot((x - FLAME[0]) * 0.74, (y - FLAME[1]) * 1.05) / 330) ** 1.2, 0.04)

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // Laid stone, lit by the one candle: the cuts follow its light.
  const wall = gougeField(rng(1601), { x0: 0, x1: W, y0: 30, y1: BASE - 3 }, light, {
    spacing: 6.4,
    len: [12, 42],
  })
  const glow = rays(rng(1602), FLAME[0], FLAME[1], { from: 16, to: 84, every: 7, width: 2.2 })
  // The brick floor: courses running back to the wall, each brick a paper
  // shape whose joints widen into the dark away from the candle.
  const r = rng(1603)
  const V: P = [FLAME[0], 120]
  const rows = [BASE, 249, 255, 262, 270, 279, 289, 300, 312, 325, 340]
  let bricks = ''
  for (let k = 0; k < rows.length - 1; k++) {
    const y0 = rows[k]
    const y1 = rows[k + 1]
    const ym = (y0 + y1) / 2
    const s0 = (y0 - V[1]) / (H - V[1])
    const s1 = (y1 - V[1]) / (H - V[1])
    const len = 48
    for (let u = -900 + (k % 2) * (len / 2); u < 1800; u += len) {
      const xa0 = V[0] + (u - V[0]) * s0
      const xb0 = V[0] + (u + len - V[0]) * s0
      const xa1 = V[0] + (u - V[0]) * s1
      const xb1 = V[0] + (u + len - V[0]) * s1
      if (xb1 < -10 || xa1 > W + 10) continue
      const xm = (xa0 + xb1) / 2
      const L = clamp(1 - Math.hypot((xm - FLAME[0]) * 0.72, (ym - 250) * 1.6) / 360) ** 1.1
      if (L < 0.12 && r() > L * 5) continue
      const j = 1.3 + (1 - L) * 6
      const jy = 0.8 + (1 - L) * 2
      bricks += `M${n(xa0 + j)} ${n(y0 + jy)}L${n(xb0 - j)} ${n(y0 + jy)}L${n(xb1 - j)} ${n(y1 - jy)}L${n(xa1 + j)} ${n(y1 - jy)}Z`
    }
  }
  // The low beam of the ceiling, catching the candle along its lower edge.
  let beam = ''
  for (let x = 6; x < W; x += between(r, 10, 26)) {
    const L = light(x, 60)
    if (L > 0.14)
      beam += gouge(x, 22 + between(r, -1, 1), x + between(r, 14, 30), 22, 0.5 + L * 2.2)
  }
  cached = { wall, glow, bricks, beam }
  return cached
}

/** The gold "ranged in orderly heaps": [x, height] of each column of coins. */
const HEAPS: [number, number][] = [
  [414, 10],
  [426, 15],
  [438, 8],
  [500, 12],
  [512, 17],
]
/** The coins' edges across one column, as ink lines. */
const coinLines = (x: number, h: number) =>
  Array.from(
    { length: Math.floor(h / 2.6) },
    (_, i) => `M${x - 5.5} ${n(TABLE_TOP - h + 2.6 * (i + 1))}h11`,
  ).join('')

// ── NANCY, seated in her bonnet and shawl, looking across at Eppie ──────────
const NAN_HEAD = { at: [154, 152] as P, rot: -2, scale: 1.12 }
const NAN_NECK: P = [150, 180]
const NAN_HIP: P = [140, 248]
const NAN_KNEE: P = [188, 252]
const NAN_NEAR_ARM: P[] = [
  [154, 188],
  [160, 222],
  [184, 240],
]
const NAN_FAR_ARM: P[] = [
  [146, 188],
  [150, 224],
  [176, 244],
]
const NANCY: Part[] = man({
  facing: 1,
  neck: NAN_NECK,
  hip: NAN_HIP,
  head: { ...NAN_HEAD, d: HEAD_NANCY },
  robe: seatedGown(NAN_NECK, NAN_HIP, NAN_KNEE, FEET, 1, { width: 24, lap: 11 }),
  near: { arm: NAN_NEAR_ARM, leg: [], hand: { parts: OPEN_HAND, scale: 0.82, rot: 30 } },
  far: { arm: NAN_FAR_ARM, leg: [], hand: { parts: OPEN_HAND, scale: 0.8, rot: 26 } },
  arm: 7,
  feet: false,
})
/** Her dark shawl over the shoulders and arms, its point hanging at her back. */
const SHAWL =
  'M140 177C148 175 156 177 162 183C166 193 168 207 167 220L161 225C151 227 141 233 131 241L122 231C120 215 124 197 130 185C133 180 136 178 140 177Z'
const SHAWL_FRINGE =
  'M161 225L162.4 230.6M156 225.6L156.6 231.4M150.4 226.8L150.4 232.6M145 229L144.2 234.6M139.4 232.2L138.2 237.6M133.8 236.2L132.2 241.4'
/** Two of the flat rings showing under the brim, on her brow. Stroke in PAPER. */
const RINGS_UNDER: P[] = [
  [8.2, -11.4],
  [11.8, -10.2],
]

// ── GODFREY, seated, his eyes on the floor and the end of his stick ─────────
const GOD_HEAD = { d: HEAD_GODFREY, at: [272, 150] as P, rot: 28, scale: 1.3 }
const GOD_NEAR_ARM: P[] = [
  [266, 194],
  [288, 228],
  [318, 232],
]
const GOD_GRIP = { parts: GRIP_HAND, scale: 1.1, rot: 64 }
const GODFREY: Part[] = man({
  facing: 1,
  neck: [258, 186],
  hip: [246, 254],
  head: GOD_HEAD,
  body: { width: 40, tails: 22, front: 2, flare: 4 },
  arm: 9.6,
  leg: 10.6,
  near: {
    arm: GOD_NEAR_ARM,
    leg: [
      [252, 256],
      [304, 258],
      [308, FEET - 6],
    ],
    hand: GOD_GRIP,
  },
  far: {
    arm: [
      [254, 196],
      [264, 230],
      [290, 246],
    ],
    leg: [
      [244, 258],
      [294, 262],
      [294, FEET - 8],
    ],
    hand: { parts: OPEN_HAND, scale: 1, rot: 16 },
  },
})
/** His walking-stick, its end on the bricks in front of him. */
const STICK = 'M321 226L352 312'

// ── SILAS, in his oaken arm-chair, his hand in hers ────────────────────────
const SIL_HEAD = { d: HEAD_SILAS, at: [670, 156] as P, rot: 14, scale: 1.26 }
const SIL_NEAR_ARM: P[] = [
  [678, 196],
  [666, 232],
  [632, 240],
]
const SIL_HAND = { parts: HOLD_HAND, scale: 1, rot: 4 }
const SILAS: Part[] = man({
  facing: -1,
  neck: [684, 190],
  hip: [704, 258],
  head: SIL_HEAD,
  body: { width: 30, tails: 16, front: 2, flare: 3 },
  arm: 8,
  leg: 9,
  near: {
    arm: SIL_NEAR_ARM,
    leg: [
      [698, 260],
      [650, 262],
      [648, FEET - 4],
    ],
    hand: SIL_HAND,
  },
  far: {
    arm: [
      [692, 198],
      [704, 232],
      [686, 248],
    ],
    leg: [
      [706, 262],
      [660, 266],
      [660, FEET - 8],
    ],
    hand: { parts: OPEN_HAND, scale: 0.95, rot: -10 },
  },
})
/**
 * The oak arm-chair in profile, all behind him: the back post with its knob,
 * the low rail curving round from it at the height of his elbow, the front
 * post, two spindles, the seat and the legs.
 */
const ARM_CHAIR = {
  sticks: 'M738 316V204M680 238V316M652 266L650 316M720 220V262M702 228V262',
  rail: 'M738 212Q712 218 678 238',
  seat: 'M646 260H742V268H646Z',
  knob: 'M738 205m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0Z',
}

// ── EPPIE, standing by his chair, facing the Casses ─────────────────────────
const EPP_HEAD_AT: P = [580, 100]
const EPP_T = headAt(-1, EPP_HEAD_AT, 0, 1.18)
const EPP_NECK: P = [582, 132]
const EPP_NEAR_ARM: P[] = [
  [592, 140],
  [602, 184],
  [618, 228],
]
/** Her hand closed round his fingers: "She held Silas's hand in hers, and grasped it firmly". */
const EPP_HAND = { parts: GRIP_HAND, scale: 1, rot: 0 }
const EPPIE: Part[] = [
  { d: 'M574 140L568 178L574 210', w: 7 },
  { d: gown(EPP_NECK, [586, FEET], { width: 26, waist: 22, foot: 48, bust: 3 }) },
  { d: HEAD_EPPIE_GROWN, t: EPP_T },
  { d: EPP_NEAR_ARM.map(([x, y], i) => `${i ? 'L' : 'M'}${x} ${y}`).join(''), w: 7, sep: 1.4 },
  ...GRIP_HAND.map((q) => ({ ...q, t: handAt(EPP_NEAR_ARM, -1, EPP_HAND) })),
]
/**
 * "the whiteness of her rounded chin and throat": the throat, in the head's
 * frame, cut in PAPER from under the jaw to the neckline of the gown.
 */
const EPP_THROAT =
  'M0.6 20.2C3 20.8 5.4 20.8 7.4 20.4L6.2 24L7.4 27C3.4 27.8 -0.8 27.6 -3.4 26.8C-1.4 24.8 -0.2 22.6 0.6 20.2Z'
/** The gown's high waist, its sleeve seam and the long folds of the skirt. */
const EPP_GOWN_CUTS =
  gouge(570, 156, 594, 155, 0.9) +
  gouge(578, 166, 570, 238, 0.8, 0.6) +
  gouge(588, 168, 590, 300, 0.9, -0.5) +
  gouge(598, 200, 606, 304, 0.7, -0.8) +
  gouge(570, 250, 566, 306, 0.7, 0.4)

function EppieChooses({ uid }: ArtProps) {
  const m = marks()
  const gt = headAt(1, GOD_HEAD.at, GOD_HEAD.rot, GOD_HEAD.scale)
  const nt = headAt(1, NAN_HEAD.at, NAN_HEAD.rot, NAN_HEAD.scale)
  const st = headAt(-1, SIL_HEAD.at, SIL_HEAD.rot, SIL_HEAD.scale)
  return (
    <g className="lc-push" style={timing({ origin: [520, 190], push: 1.03 })}>
      <path d={m.wall} fill={PAPER} />
      <path d={m.glow} fill={PAPER} />
      {/* the ceiling beam */}
      <rect x={0} y={0} width={W} height={24} fill={INK} />
      <path d={m.beam} fill={PAPER} />
      <rect x={0} y={25} width={W} height={1.6} fill={PAPER} />
      {/* the brick floor */}
      <rect x={0} y={BASE} width={W} height={H - BASE} fill={INK} />
      <path d={m.bricks} fill={PAPER} />
      <rect x={0} y={BASE - 3} width={W} height={2} fill={PAPER} />

      {/* the oaken table, the candle and the gold */}
      <path
        d={`M400 ${TABLE_TOP + 8}L404 ${FEET - 4}M530 ${TABLE_TOP + 8}L526 ${FEET - 4}M420 ${TABLE_TOP + 8}L422 298M510 ${TABLE_TOP + 8}L508 298`}
        stroke={PAPER}
        strokeWidth={8.2}
        fill="none"
      />
      <path
        d={`M400 ${TABLE_TOP + 8}L404 ${FEET - 4}M530 ${TABLE_TOP + 8}L526 ${FEET - 4}M420 ${TABLE_TOP + 8}L422 298M510 ${TABLE_TOP + 8}L508 298`}
        stroke={INK}
        strokeWidth={5}
        fill="none"
      />
      <rect
        x={390}
        y={TABLE_TOP}
        width={150}
        height={8}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={gouge(394, TABLE_TOP + 1.8, 536, TABLE_TOP + 1.8, 1)} fill={PAPER} />
      <rect x={394} y={TABLE_TOP + 8} width={142} height={10} fill={INK} />
      {HEAPS.map(([x, h]) => (
        <g key={x}>
          <rect
            x={x - 5.5}
            y={TABLE_TOP - h}
            width={11}
            height={h}
            fill={RED}
            stroke={INK}
            strokeWidth={1}
          />
          <path d={coinLines(x, h)} stroke={INK} strokeWidth={0.8} />
          <ellipse
            cx={x}
            cy={TABLE_TOP - h}
            rx={5.5}
            ry={1.8}
            fill={RED}
            stroke={INK}
            strokeWidth={1}
          />
        </g>
      ))}
      {/* the candlestick */}
      <ellipse
        cx={FLAME[0]}
        cy={TABLE_TOP - 2}
        rx={11}
        ry={3}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1}
      />
      <rect
        x={FLAME[0] - 3.5}
        y={192}
        width={7}
        height={18}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1}
      />
      <rect
        x={FLAME[0] - 3.4}
        y={178}
        width={6.8}
        height={14}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1}
      />
      <path
        className="lc-flicker"
        style={timing({ dur: 0.9 })}
        d={`M${FLAME[0]} 178C${FLAME[0] - 4} 174 ${FLAME[0] - 3.5} 168 ${FLAME[0]} 158C${FLAME[0] + 3.5} 168 ${FLAME[0] + 4} 174 ${FLAME[0]} 178Z`}
        fill={RED}
      />

      {/* the two plain chairs Eppie set for the Casses */}
      {['M118 190V316M120 260H180M178 260V316', 'M224 186V316M226 262H296M294 262V316'].map((d) => (
        <g key={d}>
          <path d={d} stroke={PAPER} strokeWidth={7.6} fill="none" strokeLinecap="round" />
          <path d={d} stroke={INK} strokeWidth={4.4} fill="none" strokeLinecap="round" />
        </g>
      ))}

      {/* Nancy, in her bonnet and shawl */}
      <Figure parts={[...NANCY, { d: SHAWL }]}>
        <NancyHead t={nt} />
        <g transform={nt}>
          <g fill="none" stroke={PAPER} strokeWidth={0.9}>
            {RINGS_UNDER.map(([x, y]) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r={1.8} />
            ))}
          </g>
        </g>
        <Bonnet t={nt} straw />
        {/* the shawl's edge, its fringe, and the folds of the gown below it */}
        <path d={SHAWL} fill="none" stroke={PAPER} strokeWidth={1.2} strokeLinejoin="round" />
        <path d={SHAWL_FRINGE} stroke={PAPER} strokeWidth={1} />
        <path
          d={gouge(152, 190, 160, 214, 0.7, 0.6) + gouge(172, 262, 176, 306, 0.8)}
          fill={PAPER}
        />
      </Figure>

      {/* Godfrey, his stick's end on the bricks */}
      <path d={STICK} stroke={PAPER} strokeWidth={6.4} strokeLinecap="round" />
      <path d={STICK} stroke={INK} strokeWidth={3.4} strokeLinecap="round" />
      <Figure parts={GODFREY}>
        <path d={NECKCLOTH} transform={gt} fill={PAPER} />
        <PaperHair t={gt} d={GODFREY_HAIR} lines={GODFREY_CURLS} />
        <path d={GODFREY_CUTS} transform={gt} fill={PAPER} />
        <path d={GRIP_CUTS} transform={handAt(GOD_NEAR_ARM, 1, GOD_GRIP)} fill={PAPER} />
        <path
          d={gouge(262, 198, 252, 246, 1, -1) + gouge(272, 204, 276, 250, 0.8, 0.6)}
          fill={PAPER}
        />
      </Figure>

      {/* Silas's oaken arm-chair, and Silas in it */}
      <g fill="none" strokeLinecap="round">
        <path d={ARM_CHAIR.sticks + ARM_CHAIR.rail} stroke={PAPER} strokeWidth={7.8} />
        <path d={ARM_CHAIR.sticks} stroke={INK} strokeWidth={4.6} />
        <path d={ARM_CHAIR.rail} stroke={INK} strokeWidth={5.4} />
      </g>
      <path d={ARM_CHAIR.knob} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={ARM_CHAIR.seat} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <Figure parts={SILAS}>
        <path d={SHIRT_COLLAR} transform={st} fill={PAPER} />
        <SilasFace t={st} white look={0.5} />
        <path d={HOLD_CUTS} transform={handAt(SIL_NEAR_ARM, -1, SIL_HAND)} fill={PAPER} />
        <path d={gouge(694, 202, 708, 250, 0.8, 0.8)} fill={PAPER} />
      </Figure>

      {/* Eppie, her hand in his */}
      <Figure parts={EPPIE}>
        <path d={EPP_GOWN_CUTS} fill={PAPER} />
        <EppieGrownHead t={EPP_T} />
        <path d={EPP_THROAT} transform={EPP_T} fill={PAPER} stroke={INK} strokeWidth={0.8} />
        <path d={GRIP_CUTS} transform={handAt(EPP_NEAR_ARM, -1, EPP_HAND)} fill={PAPER} />
      </Figure>
    </g>
  )
}

export const eppieChooses: LinocutArt = { width: W, height: H, Draw: EppieChooses }
