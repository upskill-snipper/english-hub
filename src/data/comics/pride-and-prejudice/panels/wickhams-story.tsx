import type { ArtProps, ComicPanel, LinocutArt } from '@/lib/comics/types'
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
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/timing'

import { Person, type P, type Pose } from './people'

/**
 * Chapter 16: "Wickham’s story", the third moment in the guide's timeline.
 * Every detail is from the held text
 * (src/data/full-texts/pride-and-prejudice.ts):
 *
 * - "When the card tables were placed, he had an opportunity of obliging her
 *   in return, by sitting down to whist." So at the back of the room, at a
 *   small card table, Mr Collins, the kit's clergyman in black, plays whist.
 *   The text does not say with whom, and it is not his hostess: when the
 *   whist party breaks up, "The usual inquiries as to his success were made
 *   by the latter", Mrs Philips. So the lady across the table from him is
 *   drawn plainly, an older lady in a cap (the kit's `matron`). (Cut first as
 *   Mrs Philips, which the chapter rules out.) "The officers of the ----shire
 *   were in general a very creditable, gentleman-like set, and the best of
 *   them were of the present party", so an officer stands behind Mr Collins,
 *   his coat in the spot colour, as the kit prints every officer's.
 * - "Mr. Wickham did not play at whist, and with ready delight was he
 *   received at the other table between Elizabeth and Lydia." So in front, at
 *   the other table, Lydia sits at one end, Elizabeth at the other, and
 *   Wickham between them on the far side. The round game wants a round
 *   table, and none is described, so it is a plain pedestal table of the
 *   time. (Drawn first behind a table with a cloth to the floor, the three
 *   were buried to the chest behind a block of black.)
 * - "At first there seemed danger of Lydia's engrossing him entirely, for she
 *   was a most determined talker; but being likewise extremely fond of lottery
 *   tickets, she soon grew too much interested in the game, too eager in
 *   making bets and exclaiming after prizes, to have attention for any one in
 *   particular." And on the way home "Lydia talked incessantly of lottery
 *   tickets, of the fish she had lost and the fish she had won". So Lydia is
 *   bent over the table with her mouth open, reaching for the counters, which
 *   are cut as little fish, and the tickets lie in front of each player.
 * - "Allowing for the common demands of the game, Mr. Wickham was therefore
 *   at leisure to talk to Elizabeth"; "Elizabeth honoured him for such
 *   feelings, and thought him handsomer than ever as he expressed them." So
 *   his back is half turned on Lydia: he leans towards Elizabeth, smiling, one
 *   hand open towards her as he tells his story, and she sits turned to him,
 *   listening, her tickets forgotten in her hand.
 * - He is not in uniform: "the young man wanted only regimentals to make him
 *   completely charming" (Chapter 15), two days before. So he wears the kit's
 *   plain dark tailcoat, and the one red coat in the room is another
 *   officer's.
 * - It is night, "a wet night", and an evening party: the ladies are in the
 *   kit's evening dress, short sleeves and long gloves. The room is lit by a
 *   two-branched sconce on the wall over the round table; its flames are the
 *   only other red, and hang well clear of every face and hand.
 *
 * Mrs Philips's drawing-room is not described, beyond "the size and
 * furniture of the apartment" that Mr Collins admires, so the room is plain:
 * a panelled wall, a dado, a boarded floor. Nothing is taken from any film or
 * television production.
 *
 * Seeds: 1301 (the wall), 1302 (the floor), 1303 (the light round the
 * sconce), 1304 (the grain of the round table's top).
 */

const W = 860
const H = 340
/** The foot of the back wall. */
const BASE = 262
/** The sconce over the round table: where its plate is fixed to the wall. */
const SCONCE: P = [588, 62]
/** The round table: the centre and half-width of its top, and its height. */
const TABLE = { x: 594, rx: 112, y: 224 }

type Marks = {
  wall: string
  wains: string
  floor: string
  shade: string
  glow: string
  grain: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(1301)
  // The wall is lit by the sconce, and falls away into the dark at the left,
  // where the whist table is.
  const light = (x: number, y: number) => {
    const l = clamp(1 - Math.hypot((x - SCONCE[0]) * 0.72, (y - SCONCE[1] - 40) * 1.1) / 300)
    return Math.max(l, 0.06)
  }
  const wall = gougeField(r, { x0: 0, x1: W, y0: 4, y1: 186 }, light, {
    spacing: 6.4,
    len: [16, 64],
  })
  let wains = ''
  for (let x = 4; x < W; x += 10) {
    const L = light(x, 220)
    wains += wedge(
      x + between(r, -0.6, 0.6),
      200,
      x + between(r, -0.6, 0.6),
      BASE - 8,
      0.4,
      0.5 + L * 2.8,
    )
  }

  // Boards running to a point under the sconce, and the dark under each table.
  const f = rng(1302)
  let floor = ''
  const V: P = [588, 40]
  for (let xt = -800; xt < 1600; xt += 34) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (BASE - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(f, 0.3, 0.8))
      floor += wedge(
        xt + (xb - xt) * t0,
        BASE + (H - BASE) * t0,
        xt + (xb - xt) * t1,
        BASE + (H - BASE) * t1,
        0.7 + t0 * 2.6,
        0.7 + t1 * 2.6,
      )
      t0 = t1 + between(f, 0.02, 0.07)
    }
  }
  let shade = ''
  for (let y = BASE + 2; y < BASE + 14; y += 3) shade += gouge(0, y, W, y, 2 - (y - BASE) * 0.12)
  // Pools of shadow under the whist party and under the round table.
  for (const [x0, x1, yc, h] of [
    [40, 300, 282, 7],
    [380, 800, 322, 9],
  ]) {
    for (let y = yc - h; y < yc + h; y += 3) {
      const w = 1 - Math.abs(y - yc) / h
      shade += gouge(x0 - w * 8, y, x1 + w * 8, y + 0.5, 0.6 + w * 1.8)
    }
  }

  const glow = rays(rng(1303), SCONCE[0], SCONCE[1] - 14, {
    from: 26,
    to: 112,
    every: 9,
    width: 2.4,
  })

  // The grain of the table top, its polish catching the candlelight: paper
  // gouges along it, heavier at the middle, under the sconce.
  const g = rng(1304)
  let grain = ''
  for (let k = 0; k < 4; k++) {
    const y = TABLE.y - 5 + k * 3
    let x = TABLE.x - TABLE.rx + 14 + between(g, 0, 10)
    while (x < TABLE.x + TABLE.rx - 20) {
      const len = between(g, 14, 40)
      const L = clamp(1 - Math.abs(x - TABLE.x) / TABLE.rx)
      if (g() < 0.4 + L * 0.5)
        grain += gouge(x, y, x + len, y + between(g, -0.4, 0.4), 0.4 + L * 0.9)
      x += len + between(g, 6, 18)
    }
  }
  cached = { wall, wains, floor, shade, glow, grain }
  return cached
}

/** One fish counter, `len` long, facing along `a` degrees: a lens of a body and a forked tail. */
function fish(x: number, y: number, len: number, a: number) {
  const c = Math.cos((a * Math.PI) / 180)
  const s = Math.sin((a * Math.PI) / 180)
  const at = (u: number, v: number) => `${n(x + u * c - v * s)} ${n(y + u * s + v * c)}`
  const h = len * 0.26
  return (
    `M${at(len * 0.5, 0)}Q${at(len * 0.1, -h)} ${at(-len * 0.3, 0)}Q${at(len * 0.1, h)} ${at(len * 0.5, 0)}Z` +
    `M${at(-len * 0.24, 0)}L${at(-len * 0.5, -h * 0.9)}L${at(-len * 0.44, 0)}L${at(-len * 0.5, h * 0.9)}Z`
  )
}

/**
 * Lydia's winnings and losses: the fish counters on the table, [x, y,
 * length, angle]. Cut large, because at 11 units they were lost in the grain
 * of the table top and did not read as fish.
 */
const FISH: [number, number, number, number][] = [
  [516, 220, 18, -10],
  [540, 229, 17, 12],
  [504, 230, 16, 172],
  [560, 219, 15, 190],
  [664, 227, 15, 6],
]
/** The lottery tickets laid out before each player: [x, y, rotation]. */
const TICKETS: [number, number, number][] = [
  [568, 224, 8],
  [600, 220, -5],
  [632, 226, 5],
  [686, 221, -8],
]

/** Lydia, bent over the table, reaching for the counters, exclaiming. */
const LYDIA: Pose = {
  look: 'lydia',
  seated: true,
  evening: true,
  body: { neck: [11, -97], hip: [0, -48] },
  head: { at: [15, -117], rot: 16 },
  eye: 'down',
  mouth: 'open',
  legs: {
    far: [
      [-2, -48],
      [26, -50],
      [26, -4],
    ],
    near: [
      [2, -48],
      [30, -50],
      [31, -4],
    ],
  },
  near: {
    pts: [
      [13, -92],
      [28, -80],
      [48, -78],
    ],
    hand: 'open',
    deg: 6,
    spread: 16,
  },
  far: {
    pts: [
      [7, -92],
      [16, -78],
      [34, -77],
    ],
    hand: 'grip',
  },
}

/**
 * Wickham, his back half turned on Lydia, leaning to Elizabeth as he talks.
 * His body leans well forward, so that, seated, his head is not far above
 * the ladies' on either side of him.
 */
const WICKHAM: Pose = {
  look: 'wickham',
  seated: true,
  body: { neck: [16, -106], hip: [0, -48] },
  head: { at: [21, -126], rot: 10 },
  legs: {
    far: [
      [-2, -48],
      [30, -50],
      [28, -4],
    ],
    near: [
      [2, -48],
      [34, -50],
      [34, -4],
    ],
  },
  far: {
    pts: [
      [12, -100],
      [18, -80],
      [36, -76],
    ],
    hand: 'mitt',
    deg: 2,
  },
  near: {
    pts: [
      [18, -100],
      [32, -84],
      [52, -84],
    ],
    hand: 'open',
    deg: -24,
    spread: 16,
    thumb: -1,
  },
}

/** Elizabeth, turned to him, listening, her tickets forgotten in her hand. */
const ELIZABETH: Pose = {
  look: 'elizabeth',
  seated: true,
  evening: true,
  body: { neck: [4, -98], hip: [0, -48] },
  head: { at: [7, -119], rot: 1 },
  legs: {
    far: [
      [-2, -48],
      [26, -50],
      [26, -4],
    ],
    near: [
      [2, -48],
      [30, -50],
      [31, -4],
    ],
  },
  near: {
    pts: [
      [6, -92],
      [14, -76],
      [32, -78],
    ],
    hand: 'grip',
  },
  far: {
    pts: [
      [0, -92],
      [4, -72],
      [20, -70],
    ],
    hand: 'mitt',
  },
}
/** The tickets in Elizabeth's hand, in her own frame. */
const HELD_TICKETS = 'M30 -86L42 -88L43 -80L31 -78ZM33 -90L44 -93L46 -86L35 -83Z'

/** Mr Collins at whist, his cards held up before him. */
const COLLINS: Pose = {
  look: 'collins',
  seated: true,
  body: { neck: [4, -118], hip: [0, -52] },
  legs: {
    far: [
      [-2, -52],
      [32, -55],
      [30, -4],
    ],
    near: [
      [2, -52],
      [38, -54],
      [38, -4],
    ],
  },
  far: {
    pts: [
      [0, -112],
      [6, -88],
      [24, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [6, -112],
      [18, -92],
      [30, -100],
    ],
    hand: 'grip',
    deg: -60,
  },
}

/** The older lady across the whist table from him, holding her hand of cards. */
const WHIST_LADY: Pose = {
  look: 'matron',
  seated: true,
  body: { neck: [3, -98], hip: [0, -48] },
  legs: {
    far: [
      [-2, -48],
      [26, -50],
      [26, -4],
    ],
    near: [
      [2, -48],
      [30, -50],
      [31, -4],
    ],
  },
  far: {
    pts: [
      [0, -92],
      [4, -72],
      [20, -72],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [5, -92],
      [14, -76],
      [24, -84],
    ],
    hand: 'grip',
    deg: -56,
  },
}

/** An officer of the militia, standing behind Mr Collins. */
const OFFICER: Pose = {
  look: 'officer',
  near: {
    pts: [
      [1, -132],
      [-4, -106],
      [-10, -88],
    ],
    hand: 'none',
  },
  far: {
    pts: [
      [-4, -132],
      [-9, -106],
      [-14, -88],
    ],
    hand: 'none',
  },
  head: { rot: 12 },
}

/** A hand of cards fanned in a grip, in the figure's frame, at the wrist `at`. */
function Cards({ at: [x, y], a }: { at: P; a: number }) {
  return (
    <g transform={`translate(${n(x)} ${n(y)}) rotate(${a})`}>
      {[-16, -4, 8].map((t) => (
        <rect
          key={t}
          x={-3}
          y={-15}
          width={8}
          height={11}
          transform={`rotate(${t} 1 -4)`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={0.7}
        />
      ))}
    </g>
  )
}

/** The whist table, from the side: a plain card table with its cards laid down. */
function WhistTable() {
  const [x0, x1, top, floor] = [146, 230, 218, 284]
  return (
    <g>
      <path
        d={`M${x0 + 6} ${top + 6}L${x0 + 4} ${floor}M${x1 - 6} ${top + 6}L${x1 - 4} ${floor}`}
        stroke={INK}
        strokeWidth={4.4}
        strokeLinecap="round"
        fill="none"
      />
      <path
        d={`M${x0 + 5} ${top + 8}L${x0 + 3.4} ${floor - 2}M${x1 - 7} ${top + 8}L${x1 - 5.4} ${floor - 2}`}
        stroke={PAPER}
        strokeWidth={0.8}
        fill="none"
      />
      <path
        d={`M${x0} ${top}H${x1}V${top + 7}H${x0}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.fine}
      />
      {[160, 178, 204].map((x, i) => (
        <rect
          key={x}
          x={x}
          y={top - 3.4}
          width={10}
          height={3.4}
          transform={`rotate(${i * 7 - 4} ${x + 5} ${top - 1.7})`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={0.6}
        />
      ))}
    </g>
  )
}

/**
 * The round table, a pedestal on three splayed feet, its top seen a little
 * from above so the tickets and counters lie on it.
 */
function RoundTable({ grain }: { grain: string }) {
  const { x, rx, y } = TABLE
  return (
    <g>
      {/* the pedestal and its three feet */}
      <path
        d={`M${x - 7} ${y + 10}H${x + 7}L${x + 5} ${y + 34}Q${x + 11} ${y + 46} ${x + 5} ${y + 60}L${x + 6} 300H${x - 6}L${x - 5} ${y + 60}Q${x - 11} ${y + 46} ${x - 5} ${y + 34}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path
        d={`M${x - 4} 296Q${x - 28} 300 ${x - 50} 318M${x + 4} 296Q${x + 28} 300 ${x + 50} 318M${x} 298L${x + 2} 324`}
        stroke={INK}
        strokeWidth={6}
        strokeLinecap="round"
        fill="none"
      />
      <path d={gouge(x - 1.6, y + 14, x - 2, 294, 0.9)} fill={PAPER} />
      {/* the top: a rim in paper, the polished wood in ink */}
      <ellipse cx={x} cy={y} rx={rx} ry={11} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path
        d={`M${x - rx} ${y}Q${x - rx} ${y + 13} ${x} ${y + 13}Q${x + rx} ${y + 13} ${x + rx} ${y}V${y + 6}Q${x + rx} ${y + 19} ${x} ${y + 19}Q${x - rx} ${y + 19} ${x - rx} ${y + 6}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.fine}
      />
      <path d={grain} fill={PAPER} />
    </g>
  )
}

/** The two-branched sconce on the wall, its two candles' flames in the spot colour. */
function Sconce() {
  const [x, y] = SCONCE
  const cups: P[] = [
    [x - 20, y - 6],
    [x + 20, y - 6],
  ]
  return (
    <g>
      <path
        d={`M${x - 7} ${y - 16}H${x + 7}V${y + 14}H${x - 7}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.1}
      />
      <path
        d={`M${x} ${y + 4}C${x - 10} ${y + 8} ${x - 20} ${y + 4} ${x - 20} ${y - 3}M${x} ${y + 4}C${x + 10} ${y + 8} ${x + 20} ${y + 4} ${x + 20} ${y - 3}`}
        stroke={INK}
        strokeWidth={2.6}
        fill="none"
      />
      {cups.map(([cx, cy], i) => (
        <g key={i}>
          <rect
            x={cx - 4}
            y={cy}
            width={8}
            height={3.4}
            fill={INK}
            stroke={PAPER}
            strokeWidth={0.7}
          />
          <rect
            x={cx - 1.6}
            y={cy - 12}
            width={3.2}
            height={12}
            fill={PAPER}
            stroke={INK}
            strokeWidth={0.6}
          />
          <path
            className="lc-flicker"
            style={timing({ dur: 0.75 + i * 0.2, delay: i * 0.3 })}
            d={`M${cx} ${cy - 12}C${cx - 3} ${cy - 16} ${cx - 1.2} ${cy - 20} ${cx} ${cy - 24}C${cx + 1.2} ${cy - 20} ${cx + 3} ${cy - 16} ${cx} ${cy - 12}Z`}
            fill={RED}
          />
        </g>
      ))}
    </g>
  )
}

function WickhamsStory({ uid }: ArtProps) {
  void uid
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [600, 170], push: 1.03 })}>
      {/* the wall, lit round the sconce, its dado and the panelling below */}
      <path d={m.wall} fill={PAPER} />
      <path d={m.glow} fill={PAPER} />
      <rect x={0} y={188} width={W} height={5} fill={PAPER} />
      <rect x={0} y={195} width={W} height={1.4} fill={PAPER} />
      <path d={m.wains} fill={PAPER} />
      <rect x={0} y={BASE - 6} width={W} height={6} fill={PAPER} />
      <rect x={0} y={BASE} width={W} height={H - BASE} fill={PAPER} />
      <path d={m.floor} fill={INK} />
      <path d={m.shade} fill={INK} />
      <Sconce />

      {/* at the back, the whist table: an officer behind Mr Collins, and the lady he plays with */}
      <Person pose={OFFICER} at={[74, 278]} scale={0.84} />
      <Person pose={COLLINS} at={[112, 284]} scale={0.84}>
        <Cards at={[30, -100]} a={-20} />
      </Person>
      <Person pose={WHIST_LADY} at={[272, 284]} scale={0.84} flip>
        <Cards at={[24, -84]} a={-30} />
      </Person>
      <WhistTable />

      {/* in front, the round table: Wickham behind it, Lydia and Elizabeth at its ends */}
      <Person pose={WICKHAM} at={[562, 300]} scale={1.36} />
      <RoundTable grain={m.grain} />
      {TICKETS.map(([x, y, a]) => (
        <g key={x} transform={`translate(${x} ${y}) rotate(${a})`}>
          <rect
            x={-9}
            y={-3.4}
            width={18}
            height={6.8}
            fill={PAPER}
            stroke={INK}
            strokeWidth={0.7}
          />
          <path d="M-6 -1H6M-6 1.4H3" stroke={INK} strokeWidth={0.6} />
        </g>
      ))}
      <path
        d={FISH.map(([x, y, len, a]) => fish(x, y, len, a)).join('')}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1}
        strokeLinejoin="round"
      />
      {/* each fish's eye, so it reads as a fish and not a leaf */}
      <g fill={INK}>
        {FISH.map(([x, y, len, a]) => (
          <circle
            key={x}
            cx={n(x + Math.cos((a * Math.PI) / 180) * len * 0.26)}
            cy={n(y + Math.sin((a * Math.PI) / 180) * len * 0.26)}
            r={n(len * 0.06)}
          />
        ))}
      </g>
      <Person pose={LYDIA} at={[426, 322]} scale={1.42} />
      <Person pose={ELIZABETH} at={[770, 322]} scale={1.42} flip>
        <path d={HELD_TICKETS} fill={PAPER} stroke={INK} strokeWidth={0.9} />
      </Person>
    </g>
  )
}

export const wickhamsStoryArt: LinocutArt = { width: W, height: H, Draw: WickhamsStory }

export const wickhamsStory: ComicPanel = {
  moment: 'Wickham’s story',
  art: wickhamsStoryArt,
  alt: "A linocut print of an evening card party in Mrs Philips's drawing-room in Meryton, lit by a two-branched sconce on the wall whose candle flames are printed in red. At the back on the left, Mr Collins in his clergyman's black plays whist at a small card table with an older lady in a white cap, while an officer in a red coat stands behind him. In front is a round table on a pedestal, with lottery tickets and little fish-shaped counters laid out on it. At its left end Lydia, in a pale evening gown, bends over the counters with her mouth open, reaching for them. Behind the table, between the two sisters, Mr Wickham, in a plain dark tailcoat, has turned his back on Lydia and leans towards Elizabeth, smiling, one hand open towards her as he talks. At the right end Elizabeth, in a pale evening gown, sits turned to him, listening, her tickets forgotten in her hand.",
  quote: 'thought him handsomer than ever as he expressed them',
  quoteAt: 'top-left',
}
