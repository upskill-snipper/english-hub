import type { ReactNode } from 'react'

import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, gouge, n, rng, type Rng } from '@/components/comics/linocut/carve'

import { stoneWall } from '../../romeo-and-juliet/panels/acts-3-4-kit'

/**
 * "Before Gloucester's castle" (2.2 and 2.4): the gate where Kent is put in
 * the stocks, and where Lear is shut out two scenes later. Shared by the two
 * panels of those scenes, "Kent in the stocks" and "Stripped of his knights",
 * so a student sees the same gate, the same towers and the same stocks in
 * both: dawn in the first, the storm coming on in the second.
 *
 * WHAT THE PLAY SAYS OF IT (the held edition, src/data/full-texts/
 * king-lear.ts):
 * - It is a castle with a gate and doors: "Shut up your doors, my lord; 'tis a
 *   wild night" (2.4); Kent calls it "this hard house, More harder than the
 *   stones whereof 'tis rais'd" (3.2). So it is cut in coursed stone, with
 *   heavy doors in an arched gate between two towers.
 * - The stocks are brought out before it: "Fetch forth the stocks!", "Put in
 *   his legs." (2.2). So they stand on the open ground in front of the gate:
 *   two boards held between two posts, with holes for the legs where the
 *   boards meet, and a low bench behind. When the King comes, "Kent here set
 *   at liberty" (2.4), so in the second panel they stand empty, the holes open.
 * - "This house is little" (Regan, 2.4): a small castle, two towers and a
 *   gatehouse, not a great fortress.
 * - "For many miles about There's scarce a bush" (Gloucester, 2.4): the land
 *   round it is open and bare, a long low horizon to the right.
 *
 * The castle stands on the left of both panels, its foot at GROUND; the
 * country opens to the right. Nothing is taken from a film or stage production.
 */

export const W = 860
export const H = 340
/** The foot of the castle walls and the far edge of the open ground. */
export const GROUND = 262
/** The horizon of the open country to the right of the castle. */
export const HORIZON = 238
/** The right-hand edge of the castle. */
export const CASTLE_RIGHT = 352

/** The arched gateway, in the gatehouse between the towers. */
export const GATE = 'M154 262V178C154 152 174 134 199 134C224 134 244 152 244 178V262Z'
const GATE_X0 = 154
const GATE_X1 = 244

export type CastleMarks = {
  towerL: { cuts: string; joints: string }
  gatehouse: { cuts: string; joints: string }
  towerR: { cuts: string; joints: string }
  voussoirs: string
  doors: string
  studs: [number, number][]
  slits: string
}

const cache = new Map<number, CastleMarks>()

/**
 * The castle's cuts for one light: `light(x, y)` from 0 (unlit) to 1 (full
 * light), as gougeField takes it. Cached per seed: a drawing never changes.
 */
export function castleMarks(seed: number, light: (x: number, y: number) => number): CastleMarks {
  const hit = cache.get(seed)
  if (hit) return hit
  const r = rng(seed)
  const towerL = stoneWall(r, { x0: 0, x1: 96, y0: 34, y1: GROUND }, light, 24)
  const gatehouse = stoneWall(r, { x0: 96, x1: 290, y0: 84, y1: GROUND }, light, 24)
  const towerR = stoneWall(r, { x0: 290, x1: CASTLE_RIGHT, y0: 44, y1: GROUND }, light, 24)
  // The ring of the arch: its inner and outer edge, and a joint every few
  // stones, so it reads as an arch of cut stone and not as rays.
  const c = [199, 178]
  let voussoirs = ''
  for (let k = 1; k < 9; k++) {
    const a = Math.PI + (k / 9) * Math.PI
    const ca = Math.cos(a)
    const sa = Math.sin(a)
    voussoirs += `M${n(c[0] + ca * 48)} ${n(c[1] + sa * 46)}L${n(c[0] + ca * 58)} ${n(c[1] + sa * 55)}`
  }
  voussoirs += 'M141 262V178C141 145 167 123 199 123C231 123 257 145 257 178V262'
  // The planks of the two doors and their iron bands.
  let doors = ''
  for (let x = GATE_X0 + 15; x < GATE_X1 - 6; x += 15)
    if (Math.abs(x - 199) > 4) doors += `M${x} 146V262`
  const studs: [number, number][] = []
  for (const y of [184, 222, 252])
    for (let x = GATE_X0 + 8; x < GATE_X1 - 4; x += 15) studs.push([x + between(r, -0.4, 0.4), y])
  const slits = slitsAt(r, [
    [44, 96],
    [44, 170],
    [322, 104],
    [322, 176],
  ])
  const m = { towerL, gatehouse, towerR, voussoirs, doors, studs, slits }
  cache.set(seed, m)
  return m
}

function slitsAt(r: Rng, at: [number, number][]) {
  return at
    .map(([x, y]) => {
      const h = 22 + between(r, -2, 2)
      return `M${n(x - 2.6)} ${n(y)}V${n(y + h)}H${n(x + 2.6)}V${n(y)}Z`
    })
    .join('')
}

/** Battlements along a wall top from x0 to x1: merlons rising from `top`. */
function battlements(x0: number, x1: number, top: number, step = 16) {
  let d = `M${x0} ${top + 30}V${top}`
  for (let x = x0; x < x1; x += step) {
    const xe = Math.min(x + step * 0.55, x1)
    const xn = Math.min(x + step, x1)
    d += `H${n(xe)}V${top + 7}H${n(xn)}V${top}`
  }
  return d + `V${top + 30}Z`
}

/**
 * The castle front: two towers and the gatehouse, cut in light, with the
 * gateway's doors shut (`open` false) or standing open on a lit hall
 * (`open` true, the hall drawn by the panel through `hall`).
 */
export function CastleFront({
  m,
  open = false,
  hall,
}: {
  m: CastleMarks
  open?: boolean
  hall?: ReactNode
}) {
  const skyline =
    battlements(0, 96, 26) + battlements(96, 290, 76, 18) + battlements(290, CASTLE_RIGHT, 36)
  return (
    <g>
      {/* the towers and gatehouse in ink, their skyline carved free of the sky */}
      <path d={skyline} fill={INK} stroke={PAPER} strokeWidth={LINE.bold} strokeLinejoin="round" />
      <path
        d={`M0 50H96V100H290V60H${CASTLE_RIGHT}V${GROUND}H0Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.bold}
      />
      <path d={skyline} fill={INK} />
      <path d={`M0 50H96V100H290V60H${CASTLE_RIGHT}V${GROUND}H0Z`} fill={INK} />
      <path d={m.towerL.cuts + m.gatehouse.cuts + m.towerR.cuts} fill={PAPER} />
      <path d={m.towerL.joints + m.gatehouse.joints + m.towerR.joints} fill={PAPER} />
      {/* the edges of the towers, standing proud of the gatehouse */}
      <path
        d={`M96 30V${GROUND}M290 40V${GROUND}M${CASTLE_RIGHT - 1} 38V${GROUND}`}
        stroke={PAPER}
        strokeWidth={LINE.bold}
      />
      <path d={m.slits} fill={INK} stroke={PAPER} strokeWidth={1.2} />
      {/* the gateway */}
      <path d={GATE} fill={INK} stroke={PAPER} strokeWidth={4} />
      <path d={m.voussoirs} stroke={PAPER} strokeWidth={1.8} fill="none" />
      {open ? (
        hall
      ) : (
        <g>
          <path d={m.doors} stroke={PAPER} strokeWidth={0.9} />
          <path d="M199 136V262" stroke={PAPER} strokeWidth={2.4} />
          <path d="M156 186H242M156 224H242M156 254H242" stroke={PAPER} strokeWidth={2.2} />
          <g fill={PAPER}>
            {m.studs.map(([x, y]) => (
              <circle key={`${x}-${y}`} cx={n(x)} cy={y} r={1.4} />
            ))}
          </g>
          {/* the ring of the knocker */}
          <circle cx={190} cy={206} r={4.4} fill="none" stroke={PAPER} strokeWidth={1.6} />
          <circle cx={208} cy={206} r={4.4} fill="none" stroke={PAPER} strokeWidth={1.6} />
        </g>
      )}
    </g>
  )
}

/**
 * The stocks, in their own frame, ground at y 0: two boards, one over the
 * other, held between a near post and a far post, with holes for the legs
 * along the line where the boards meet. The boards run INTO the picture (the
 * depth DEPTH, drawn up and to the right), because a man seated in profile
 * puts his legs through them from the side: his legs go in through the face
 * we cannot see, and his feet come out of LEG_HOLES in the face we can. The
 * bench he sits on is BENCH, to the left. Its outline, front end, top and
 * near face are drawn separately so that the face can be lit.
 */
const DEPTH: [number, number] = [30, -22]
/** The board's thickness, across the picture. */
const BOARD = 7
const at3 = (x: number, y: number, t: number): [number, number] => [
  x + DEPTH[0] * t,
  y + DEPTH[1] * t,
]
const quad = (a: [number, number], b: [number, number], c: [number, number], d: [number, number]) =>
  `M${n(a[0])} ${n(a[1])}L${n(b[0])} ${n(b[1])}L${n(c[0])} ${n(c[1])}L${n(d[0])} ${n(d[1])}Z`
const BOARD_TOP = -41
const BOARD_SPLIT = -28
const BOARD_FOOT = -16
export const STOCKS = {
  farPost: quad(
    at3(BOARD + 1, 2, 1),
    at3(BOARD + 1, -54, 1),
    at3(BOARD + 8, -54, 1),
    at3(BOARD + 8, 2, 1),
  ),
  /** The near face of the boards, the one the feet come out of. */
  face: quad(
    [BOARD, BOARD_FOOT],
    [BOARD, BOARD_TOP],
    at3(BOARD, BOARD_TOP, 1),
    at3(BOARD, BOARD_FOOT, 1),
  ),
  /** The front end of the boards, and the top of the upper one. */
  end:
    `M0 ${BOARD_FOOT}V${BOARD_TOP}H${BOARD}V${BOARD_FOOT}Z` +
    quad([0, BOARD_TOP], [BOARD, BOARD_TOP], at3(BOARD, BOARD_TOP, 1), at3(0, BOARD_TOP, 1)),
  nearPost: 'M-6 2V-52H0V2Z',
  bench: 'M-90 -25H-28V-18H-90ZM-86 -18H-80V2H-86ZM-38 -18H-32V2H-38Z',
}
/** Where the ankles pass through, in the stocks' frame: the nearer leg, then the farther. */
export const LEG_HOLES: [number, number][] = [
  at3(BOARD, BOARD_SPLIT, 0.34),
  at3(BOARD, BOARD_SPLIT, 0.7),
]

/**
 * The stocks cut from the block: ink timbers, their edges and grain cut in
 * paper, the near face lit by the dawn so the feet read against it. With
 * `empty`, the holes stand open, cut back in ink.
 */
export function Stocks({
  transform,
  empty = false,
  part = 'all',
}: {
  transform: string
  empty?: boolean
  /** 'back' is the bench and the far post, drawn behind a man in the stocks; 'front' the boards over his legs. */
  part?: 'all' | 'back' | 'front'
}) {
  const r = rng(7302)
  let grain = ''
  for (let k = 0; k < 7; k++) {
    const y = BOARD_FOOT - 3 - k * 3.4
    if (Math.abs(y - BOARD_SPLIT) < 2) continue
    const t0 = between(r, 0.02, 0.2)
    const t1 = between(r, 0.75, 0.98)
    const a = at3(BOARD, y, t0)
    const b = at3(BOARD, y, t1)
    grain += gouge(a[0], a[1], b[0], b[1], between(r, 0.6, 1.1))
  }
  const split = [at3(BOARD, BOARD_SPLIT, 0), at3(BOARD, BOARD_SPLIT, 1)]
  return (
    <g transform={transform} strokeLinejoin="round">
      {part !== 'front' && (
        <>
          {/* the bench behind, and the far post */}
          <path d={STOCKS.bench} fill={INK} stroke={PAPER} strokeWidth={2.4} />
          <path d={STOCKS.farPost} fill={INK} stroke={PAPER} strokeWidth={2.4} />
        </>
      )}
      {part !== 'back' && (
        <>
          {/* the boards: grain cut along the near face, the end and the top dark */}
          <path d={STOCKS.face + STOCKS.end} fill={INK} stroke={PAPER} strokeWidth={2.4} />
          <path d={grain} fill={PAPER} />
          <path
            d={`M${n(split[0][0])} ${n(split[0][1])}L${n(split[1][0])} ${n(split[1][1])}`}
            stroke={PAPER}
            strokeWidth={1.6}
          />
          {empty &&
            LEG_HOLES.map(([x, y]) => (
              <ellipse
                key={x}
                cx={n(x + 0.6)}
                cy={n(y)}
                rx={3.4}
                ry={4.4}
                fill={INK}
                stroke={PAPER}
                strokeWidth={1.4}
              />
            ))}
          <path d={STOCKS.nearPost} fill={INK} stroke={PAPER} strokeWidth={2.4} />
        </>
      )}
    </g>
  )
}

/**
 * A foot held in the stocks, standing up out of a hole in the near face of
 * the boards: the ankle coming through, the shoe upright on its heel with its
 * toe raised, as a seated man's foot is when his leg lies level. At the hole
 * (x, y), in the stocks' frame; STOCKED_SOLE is the line of the sole, to cut
 * in paper so the shoe reads as a shoe and not a peg.
 */
export const STOCKED_FOOT = (x: number, y: number) =>
  `M${n(x - 2)} ${n(y - 3.4)}L${n(x + 4)} ${n(y - 3.6)}C${n(x + 5)} ${n(y - 8)} ${n(x + 6.4)} ${n(y - 13)} ${n(x + 9.6)} ${n(y - 15.4)}` +
  `C${n(x + 12)} ${n(y - 17)} ${n(x + 14)} ${n(y - 15)} ${n(x + 13.4)} ${n(y - 12)}` +
  `C${n(x + 12.8)} ${n(y - 6)} ${n(x + 12.4)} ${n(y)} ${n(x + 11.6)} ${n(y + 4)}C${n(x + 9)} ${n(y + 5.4)} ${n(x + 5)} ${n(y + 5)} ${n(x + 3)} ${n(y + 3.6)}L${n(x - 2)} ${n(y + 3.4)}Z`
export const STOCKED_SOLE = (x: number, y: number) =>
  `M${n(x + 11.4)} ${n(y - 13)}C${n(x + 10.8)} ${n(y - 7)} ${n(x + 10.4)} ${n(y - 1)} ${n(x + 9.6)} ${n(y + 3)}`

/** A long, low horizon of bare country, ridges cut as rows that close up with distance. */
export function countryMarks(seed: number, light: (x: number, y: number) => number) {
  const r = rng(seed)
  let d = ''
  for (let y = HORIZON + 2; y < GROUND + 4; y += 2.6 + (y - HORIZON) * 0.12) {
    let x = CASTLE_RIGHT - 10 + between(r, 0, 10)
    while (x < W) {
      const len = between(r, 18, 70)
      const L = light(x + len / 2, y)
      if (r() < 0.3 + L * 0.7)
        d += gouge(x, y + between(r, -0.4, 0.4), x + len, y + between(r, -0.4, 0.4), 0.3 + L * 1.6)
      x += len + between(r, 4, 16)
    }
  }
  return d
}
