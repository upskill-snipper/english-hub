import type { LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rng,
  type Rng,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Hen, Horse, Pig, Sheep, type P } from './people'

/**
 * Chapter 3: "The milk and the apples", the ninth moment in the guide's
 * timeline. Every detail is from the held edition
 * (src/data/full-texts/animal-farm.ts):
 *
 * - "The mystery of where the milk went to was soon cleared up. It was mixed
 *   every day into the pigs' mash. The early apples were now ripening, and
 *   the grass of the orchard was littered with windfalls." So the orchard's
 *   trees carry apples and a few windfalls still lie in the grass, all in the
 *   spot colour, with a bucket of milk hooped in it as the five buckets of
 *   Chapter 2 are.
 * - "the order went forth that all the windfalls were to be collected and
 *   brought to the harness-room for the use of the pigs." So a heap of
 *   apples lies at the open door of the harness-room, with the bucket beside
 *   it.
 * - "All the pigs were in full agreement on this point, even Snowball and
 *   Napoleon. Squealer was sent to make the necessary explanations to the
 *   others." So Snowball (pale) and Napoleon (black), from the figure kit
 *   (./people.tsx), stand at the harness-room on either side of the heap,
 *   and Squealer is out in front, between them and the rest.
 * - "cried Squealer almost pleadingly, skipping from side to side and
 *   whisking his tail". So Squealer is mid-skip, his tail whisked out and
 *   his mouth open.
 * - "At this some of the other animals murmured, but it was no use." So
 *   Boxer and Clover, a hen and a sheep, stand under the apple trees facing
 *   him and listening.
 * - Napoleon took the nine puppies "up into a loft which could only be
 *   reached by a ladder from the harness-room, and there kept them in such
 *   seclusion that the rest of the farm soon forgot their existence." So a
 *   loft hatch is shut above the door, and nothing is seen of them.
 *
 * Nothing is taken from a film or stage production. Seeds: 901 (sky), 902
 * (the harness-room wall), 903 (grass), 904 (leaves), 905 (apples).
 */

const W = 860
const H = 340
const GROUND = 300
const HEDGE = 226

/** The harness-room door: its opening, left, top and right. */
const DOOR = { x0: 150, y0: 180, x1: 234 }

/** The apple trees: trunk foot, and the rounds of the crown [cx, cy, r]. */
const TREES: { foot: P; crown: [number, number, number][] }[] = [
  {
    foot: [566, 262],
    crown: [
      [566, 118, 44],
      [528, 138, 34],
      [606, 136, 36],
      [548, 96, 28],
      [590, 98, 26],
    ],
  },
  {
    foot: [792, 256],
    crown: [
      [792, 142, 38],
      [760, 156, 30],
      [826, 156, 28],
      [780, 120, 24],
      [812, 124, 22],
    ],
  },
]
const inCrown = (x: number, y: number) =>
  TREES.some((t) => t.crown.some(([cx, cy, r]) => Math.hypot(x - cx, y - cy) < r - 4))

type Marks = {
  sky: string
  hedge: string
  wall: string
  roof: string
  grass: string
  crowns: string
  leaves: string
  apples: P[]
  windfalls: P[]
  heap: P[]
  shadows: string
}

function skyMarks(r: Rng) {
  let d = ''
  for (let y = 14; y < HEDGE - 16; y += 8) {
    const dens = clamp(1 - (y - 14) / 190)
    let x = 300 + between(r, -20, 0)
    while (x < W - 12) {
      const len = between(r, 10, 40)
      if (r() < 0.1 + dens * 0.34 && !inCrown(x + len / 2, y))
        d += gouge(x, y + between(r, -1, 1), x + len, y + between(r, -1, 1), 0.3 + dens * 0.8)
      x += len + between(r, 12, 44)
    }
  }
  return d
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = skyMarks(rng(901))

  let hedge = `M300 ${HEDGE + 16}`
  for (let x = 300; x <= W; x += 5)
    hedge += `L${x} ${n(HEDGE + 2.6 * Math.abs(Math.sin(x / 10)) - 2 * Math.sin(x / 33))}`
  hedge += `L${W} ${HEDGE + 16}Z`

  // The harness-room wall: weatherboards, lit from the right.
  const b = rng(902)
  const wall = gougeField(
    b,
    { x0: 0, x1: 304, y0: 128, y1: GROUND - 4 },
    (x) => 0.14 + 0.3 * clamp((x - 20) / 280),
    { spacing: 8, len: [30, 90], gap: [6, 18], max: 2.2 },
  )
  let roof = ''
  for (const y of [72, 86, 100, 112]) {
    let x = 8 + ((y - 64) / 56) * -12 + between(b, 0, 10)
    while (x < 300) {
      const len = between(b, 20, 50)
      roof += gouge(x, y, Math.min(x + len, 300), y, 1)
      x += len + between(b, 6, 14)
    }
  }

  // Orchard grass: short tufts, stroked.
  const g = rng(903)
  let grass = ''
  for (let y = HEDGE + 20; y < H - 6; y += 6) {
    let x = 296 + between(g, -10, 0)
    while (x < W - 10) {
      if (g() < 0.4) {
        const hgt = 2.5 + ((y - HEDGE) / (H - HEDGE)) * 4
        grass += `M${n(x)} ${n(y)}l-1.6 ${n(-hgt)}M${n(x + 1.4)} ${n(y)}l1.4 ${n(-hgt * 0.9)}`
      }
      x += between(g, 10, 20)
    }
  }
  // The ground in front of the harness-room.
  for (let y = GROUND + 8; y < H - 6; y += 7) {
    let x = 10 + between(g, -10, 0)
    while (x < 296) {
      const len = between(g, 10, 30)
      if (g() < 0.4) grass += `M${n(x)} ${n(y)}h${n(len)}`
      x += len + between(g, 10, 30)
    }
  }

  let crowns = ''
  for (const t of TREES) {
    for (const [cx, cy, r] of t.crown)
      crowns += `M${n(cx - r)} ${n(cy)}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0Z`
    const [fx, fy] = t.foot
    crowns += `M${fx - 8} ${fy}L${fx - 5} ${fy - 70}L${fx - 22} ${fy - 104}L${fx - 14} ${fy - 108}L${fx} ${fy - 84}L${fx + 12} ${fy - 110}L${fx + 20} ${fy - 104}L${fx + 5} ${fy - 70}L${fx + 8} ${fy}Z`
  }
  const l = rng(904)
  let leaves = ''
  for (let k = 0; k < 360; k++) {
    const x = between(l, 480, 860)
    const y = between(l, 56, 196)
    if (!inCrown(x, y)) continue
    const L = clamp(1 - (y - 60) / 150)
    if (l() < 0.25 + L * 0.6)
      leaves += gouge(x, y, x + between(l, 3, 6), y + between(l, -2, 2), 0.6 + L * 0.8)
  }
  const a = rng(905)
  const apples: P[] = []
  for (let k = 0; k < 200 && apples.length < 22; k++) {
    const x = between(a, 490, 850)
    const y = between(a, 80, 186)
    if (inCrown(x, y) && apples.every(([ax, ay]) => Math.hypot(ax - x, ay - y) > 14))
      apples.push([x, y])
  }
  const windfalls: P[] = [
    [548, 330],
    [602, 324],
    [688, 326],
    [742, 316],
    [836, 322],
    [470, 328],
  ]
  // The collected windfalls, heaped at the harness-room door.
  const heap: P[] = []
  for (let row = 0; row < 4; row++) {
    const count = 7 - row * 2
    for (let i = 0; i < count; i++)
      heap.push([
        168 + row * 9 + i * 10 + between(a, -1, 1),
        296 - row * 7.4 + between(a, -0.6, 0.6),
      ])
  }

  let shadows = ''
  const pool = (x0: number, x1: number, y: number, rows: number) => {
    for (let i = 0; i < rows; i++) {
      const t = 1 - Math.abs(i - (rows - 1) / 2) / rows
      shadows += gouge(
        x0 + (1 - t) * 10,
        y + i * 3,
        x1 - (1 - t) * 10,
        y + i * 3 + 0.6,
        0.6 + t * 1.6,
      )
    }
  }
  pool(28, 116, 306, 4)
  pool(236, 330, 308, 4)
  pool(356, 470, 314, 4)
  pool(540, 780, 314, 5)

  cached = { sky, hedge, wall, roof, grass, crowns, leaves, apples, windfalls, heap, shadows }
  return cached
}

/** An apple: a round in the spot colour, a paper edge to lift it off the ink, and its stalk. */
function Apple({ at, r = 4 }: { at: P; r?: number }) {
  return (
    <g>
      <circle cx={at[0]} cy={at[1]} r={r} fill={RED} stroke={PAPER} strokeWidth={1} />
      <path d={`M${n(at[0])} ${n(at[1] - r + 0.6)}l1 -2.6`} stroke={INK} strokeWidth={1} />
    </g>
  )
}

function MilkAndApples() {
  const m = marks()
  return (
    <>
      <g className="lc-push" style={timing({ origin: [420, 220], push: 1.03 })}>
        {/* sky, the far hedge and the orchard grass */}
        <rect x={0} y={0} width={W} height={H} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        <path d={m.hedge} fill={INK} />
        <path d={m.grass} stroke={INK} strokeWidth={1} strokeLinecap="round" fill="none" />
        <path d={m.shadows} fill={INK} />

        {/* the apple trees, the early apples ripening */}
        <path d={m.crowns} fill={INK} />
        <path d={m.leaves} fill={PAPER} />
        {m.apples.map((p) => (
          <Apple key={`${p[0]}-${p[1]}`} at={p} r={4.2} />
        ))}
        {m.windfalls.map((p) => (
          <Apple key={`${p[0]}-${p[1]}`} at={p} r={4} />
        ))}

        {/* the harness-room, at the end of the stables */}
        <path d="M-6 124L14 62L296 62L312 124Z" fill={INK} />
        <path d={m.roof} fill={PAPER} />
        <rect x={0} y={124} width={306} height={GROUND - 124} fill={INK} />
        <path d={m.wall} fill={PAPER} />
        <rect x={-6} y={122} width={320} height={4} fill={PAPER} />
        {/* the loft hatch above the door, shut */}
        <rect x={170} y={134} width={46} height={34} fill={INK} stroke={PAPER} strokeWidth={2.4} />
        <path d="M193 134V168M172 136L214 166" stroke={PAPER} strokeWidth={1.6} />
        {/* the open door, dark inside */}
        <rect
          x={DOOR.x0 - 5}
          y={DOOR.y0 - 5}
          width={DOOR.x1 - DOOR.x0 + 10}
          height={GROUND - DOOR.y0 + 5}
          fill={PAPER}
        />
        <rect
          x={DOOR.x0}
          y={DOOR.y0}
          width={DOOR.x1 - DOOR.x0}
          height={GROUND - DOOR.y0}
          fill={INK}
        />
        <path
          d={`M${DOOR.x1 + 5} ${DOOR.y0 - 5}L${DOOR.x1 + 38} ${DOOR.y0 + 6}L${DOOR.x1 + 38} ${GROUND - 4}L${DOOR.x1 + 5} ${GROUND}Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.6}
        />
        <path
          d={
            gouge(DOOR.x1 + 16, DOOR.y0 + 6, DOOR.x1 + 16, GROUND - 6, 0.8) +
            gouge(DOOR.x1 + 27, DOOR.y0 + 9, DOOR.x1 + 27, GROUND - 6, 0.8)
          }
          fill={INK}
        />
        <rect x={-6} y={GROUND} width={318} height={3} fill={INK} />

        {/* the windfalls heaped at the door, and the milk */}
        {m.heap.map((p) => (
          <Apple key={`${p[0]}-${p[1]}`} at={p} r={4.6} />
        ))}
        <g>
          <path
            d="M124 276L148 276L145 300L127 300Z"
            fill={INK}
            stroke={PAPER}
            strokeWidth={LINE.carve}
            strokeLinejoin="round"
          />
          <path
            d="M124.4 281H147.6L147.3 284.4H124.7ZM126.2 292H145.8L145.5 295.2H126.5Z"
            fill={RED}
          />
          <path
            d="M123 277Q126 270 130 275Q133 268 137 274Q141 268 144 275Q147 270 149 277Z"
            fill={PAPER}
            stroke={INK}
            strokeWidth={1.2}
            strokeLinejoin="round"
          />
        </g>

        {/* Snowball and Napoleon, in full agreement, at the harness-room */}
        <Pig at={[62, 304]} s={0.6} kind="snowball" />
        <Pig at={[282, 306]} s={0.64} kind="napoleon" />

        {/* Squealer, skipping from side to side and whisking his tail */}
        <Pig at={[412, 312]} s={0.78} kind="squealer" pose="skip" mouthOpen />
        <path
          className="lc-fade-in"
          style={timing({ delay: 0.9, dur: 0.5 })}
          d="M352 276Q346 268 349 258M360 280Q354 272 356 262"
          fill="none"
          stroke={INK}
          strokeWidth={LINE.fine}
          strokeLinecap="round"
        />

        {/* the others, under the apple trees, listening */}
        <Horse at={[760, 306]} s={0.84} who="clover" face={-1} />
        <Horse at={[676, 314]} s={0.92} who="boxer" face={-1} />
        <Hen at={[512, 316]} s={1.3} face={-1} />
        <Sheep at={[796, 330]} s={1.3} face={-1} />
      </g>
    </>
  )
}

export const theMilkAndTheApples: LinocutArt = { width: W, height: H, Draw: MilkAndApples }
