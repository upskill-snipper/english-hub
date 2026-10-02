import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  deg,
  gouge,
  gougeField,
  n,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Street } from './olivias-house'
import { Person } from './people'

/**
 * Act 2, Scene 2: "The ring", the seventh moment in the guide's timeline.
 * Every detail is from the scene in the held edition (Project Gutenberg
 * #1526, src/data/full-texts/twelfth-night.ts):
 *
 * - "A street." "Enter Viola; Malvolio at several doors." So a row of house
 *   fronts stands across the back of the block, each with its own door, and
 *   the street is paved with the setts of the street before Olivia's house
 *   (./olivias-house.tsx), so the town is one town. It is the same day Viola
 *   left Olivia's house "on a moderate pace", so it is daylight.
 * - "She returns this ring to you, sir ... If it be worth stooping for, there
 *   it lies in your eye; if not, be it his that finds it. [Exit.]" So the
 *   ring lies on the stones, printed in the spot colour with its glint cut
 *   round it, and Malvolio, in his steward's black and chain, is already
 *   walking off to the left with his nose in the air, one hand flung back at
 *   it. (Olivia calls him "sick of self-love", 1.5.)
 * - "I left no ring with her; what means this lady? ... She loves me, sure
 *   ... I am the man ... O time, thou must untangle this, not I, It is too
 *   hard a knot for me t'untie!" So Viola, as Cesario, stands over the ring
 *   looking down at it, one hand held out open in puzzlement.
 *
 * Viola is the kit's 'cesario': a young woman dressed as a young man, her
 * own face under the page's cap, her hair gathered up under it. The people
 * are cut from ./people.tsx. Nothing is taken from a film, television or
 * stage production; the fronts are the plain houses of a town of about 1600.
 * Seeds: 2701 (sky), 2702 (plaster), 2703 (tiles and shade), 2704 (the
 * ring's glint).
 */

const W = 860
const H = 340
/** The foot of the house fronts, where the street begins. */
const KERB = 262
const FEET = 324
const RING: Pt = [498, 314]

/** The house fronts across the street: [x0, x1, top of the wall]. */
const FRONTS: [number, number, number][] = [
  [-10, 268, 62],
  [268, 586, 42],
  [586, 870, 74],
]
/** Their doors: [x0, x1, top]. */
const DOORS: [number, number, number][] = [
  [140, 186, 182],
  [716, 760, 188],
]
/** Leaded windows above: [x0, x1, y0, y1]. */
const LEADED: [number, number, number, number][] = [
  [36, 80, 92, 146],
  [130, 174, 92, 146],
  [304, 348, 70, 128],
  [406, 450, 70, 128],
  [508, 552, 70, 128],
  [716, 760, 104, 156],
  [796, 840, 104, 156],
]
/** Barred windows below: [x0, x1, y0, y1]. */
const BARRED: [number, number, number, number][] = [
  [40, 80, 186, 226],
  [312, 350, 178, 218],
  [508, 546, 178, 218],
  [790, 828, 192, 232],
]

type Marks = { sky: string; plaster: string; tiles: string; shade: string; glint: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = gougeField(
    rng(2701),
    { x0: 0, x1: W, y0: 6, y1: 80 },
    (x, y) => clamp(0.55 - y / 200 + 0.05 * Math.sin(x / 60)),
    { spacing: 6, len: [40, 120], gap: [12, 40], max: 2.2 },
  )
  // The plaster of the fronts, in the sun: a few faint cuts, more towards
  // the right, away from the light.
  const opening = (x: number, y: number) =>
    [...LEADED, ...BARRED].some(
      ([a, b, c, d]) => x > a - 8 && x < b + 8 && y > c - 9 && y < d + 9,
    ) || DOORS.some(([a, b, c]) => x > a - 10 && x < b + 10 && y > c - 26)
  const r = rng(2702)
  let plaster = ''
  for (let y = 48; y < KERB - 4; y += 6.5) {
    let x = between(r, -20, 0)
    while (x < W) {
      const len = between(r, 8, 26)
      if (!opening(x + len / 2, y) && r() < 0.22 + x / 2600)
        plaster += gouge(x, y, x + len, y + between(r, -0.5, 0.5), 0.5 + r() * 0.4)
      x += len + between(r, 14, 46)
    }
  }
  // Roof tiles at the eaves: rows of round tile ends in paper on the ink.
  const t = rng(2703)
  let tiles = ''
  for (const [x0, x1, top] of FRONTS)
    for (let y = top - 6; y > top - 22; y -= 5.2)
      for (let x = x0 - 6 + between(t, 0, 5); x < x1 + 6; x += 9)
        tiles += `M${n(x - 3.4)} ${n(y)}q3.4 ${n(between(t, 2.2, 3))} 6.8 0`
  // Shade: under the eaves, and down the right side of each opening.
  let shade = ''
  for (const [x0, x1, top] of FRONTS)
    for (let y = top + 1; y < top + 10; y += 2.6)
      shade += gouge(x0, y, x1, y + between(t, -0.3, 0.3), 1.2 - (y - top) * 0.1)
  for (const [, b, c, d] of [...LEADED, ...BARRED]) shade += gouge(b + 7, c - 3, b + 7, d + 5, 1.3)
  for (const [, b, c] of DOORS) shade += gouge(b + 10, c - 20, b + 10, KERB - 2, 1.5)
  // The ring's glint: short rays cut round it on the stones.
  const g = rng(2704)
  let glint = ''
  for (let a = 0; a < 360; a += 30) {
    const ang = deg(a + between(g, -6, 6))
    const r0 = 17 + between(g, 0, 3)
    const r1 = r0 + between(g, 6, 11)
    glint += gouge(
      RING[0] + Math.cos(ang) * r0,
      RING[1] + Math.sin(ang) * r0 * 0.6,
      RING[0] + Math.cos(ang) * r1,
      RING[1] + Math.sin(ang) * r1 * 0.6,
      0.9,
    )
  }
  cached = { sky, plaster, tiles, shade, glint }
  return cached
}

const rect = (x: number, y: number, w: number, h: number) =>
  `M${n(x)} ${n(y)}h${n(w)}v${n(h)}h${n(-w)}Z`

/** The diamond lattice of a leaded window, as paper lines over its dark glass. */
function lattice([a, b, c, d]: [number, number, number, number]) {
  let path = ''
  const step = 9
  for (let k = -Math.ceil((d - c) / step); k < Math.ceil((b - a) / step) + 1; k++) {
    const x = a + k * step
    path += `M${n(x)} ${c}L${n(x + (d - c))} ${d}M${n(x + (d - c))} ${c}L${n(x)} ${d}`
  }
  return path
}

/** An arched doorway in its stone surround, and a studded door. */
function doorway([a, b, c]: [number, number, number]) {
  const r = (b - a) / 2
  const frame = `M${a - 8} ${KERB}V${c}A${r + 8} ${r + 8} 0 0 1 ${b + 8} ${c}V${KERB}Z`
  const door = `M${a} ${KERB}V${c}A${r} ${r} 0 0 1 ${b} ${c}V${KERB}Z`
  let studs = ''
  for (const y of [c + 12, (c + KERB) / 2, KERB - 14])
    for (let x = a + 7; x < b - 3; x += 9.4)
      studs += `M${n(x - 1.3)} ${n(y)}a1.3 1.3 0 1 0 2.6 0a1.3 1.3 0 1 0 -2.6 0Z`
  return { frame, door, studs, mid: (a + b) / 2, top: c - r }
}

function TheRing({ uid }: ArtProps) {
  const m = marks()
  const glass = `${uid}-glass`
  return (
    <>
      <defs>
        <clipPath id={glass}>
          {LEADED.map(([a, b, c, d]) => (
            <rect key={a * 1000 + c} x={a} y={c} width={b - a} height={d - c} />
          ))}
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [450, 240], push: 1.03 })}>
        <rect x={0} y={0} width={W} height={H} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        {/* the house fronts across the street, their eaves and roofs */}
        {FRONTS.map(([x0, x1, top]) => (
          <g key={x0}>
            <path
              d={`M${x0 - 6} ${top}L${x0 + 4} ${top - 24}H${x1 - 4}L${x1 + 6} ${top}Z`}
              fill={INK}
            />
            <path
              d={rect(x0, top, x1 - x0, KERB - top)}
              fill={PAPER}
              stroke={INK}
              strokeWidth={LINE.bold}
            />
          </g>
        ))}
        <path d={m.tiles} fill="none" stroke={PAPER} strokeWidth={1.2} />
        <path d={m.plaster} fill={INK} />
        <path d={m.shade} fill={INK} />
        {/* a string course between the storeys */}
        <path d={`M-10 166H${W + 10}`} stroke={INK} strokeWidth={LINE.bold} />
        <path d={`M-10 171H${W + 10}`} stroke={INK} strokeWidth={LINE.fine} />

        {/* leaded windows above */}
        {LEADED.map(([a, b, c, d]) => (
          <g key={`l${a}-${c}`}>
            <path
              d={rect(a - 5, c - 5, b - a + 10, d - c + 10)}
              fill={PAPER}
              stroke={INK}
              strokeWidth={LINE.fine}
            />
            <path d={rect(a, c, b - a, d - c)} fill={INK} />
            <path d={rect(a - 8, d + 5, b - a + 16, 4)} fill={INK} />
          </g>
        ))}
        <g clipPath={`url(#${glass})`}>
          <path d={LEADED.map(lattice).join('')} stroke={PAPER} strokeWidth={0.9} />
        </g>
        {LEADED.map(([a, b, c, d]) => (
          <path
            key={`m${a}-${c}`}
            d={`M${(a + b) / 2} ${c}V${d}M${a} ${n(c + (d - c) * 0.42)}H${b}`}
            stroke={PAPER}
            strokeWidth={2.4}
          />
        ))}
        {/* barred windows below */}
        {BARRED.map(([a, b, c, d]) => (
          <g key={`b${a}`}>
            <path
              d={rect(a - 5, c - 5, b - a + 10, d - c + 10)}
              fill={PAPER}
              stroke={INK}
              strokeWidth={LINE.fine}
            />
            <path d={rect(a, c, b - a, d - c)} fill={INK} />
            <path
              d={`M${a + (b - a) / 4} ${c}V${d}M${(a + b) / 2} ${c}V${d}M${b - (b - a) / 4} ${c}V${d}M${a} ${(c + d) / 2}H${b}`}
              stroke={PAPER}
              strokeWidth={1.8}
            />
          </g>
        ))}
        {/* arched doorways with studded doors */}
        {DOORS.map((d) => {
          const o = doorway(d)
          return (
            <g key={d[0]}>
              <path d={o.frame} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
              <path d={o.door} fill={INK} />
              <path d={o.studs} fill={PAPER} />
              <path d={`M${o.mid} ${o.top + 4}V${KERB - 2}`} stroke={PAPER} strokeWidth={1.2} />
            </g>
          )
        })}

        {/* the street */}
        <rect x={0} y={KERB - 2} width={W} height={4} fill={INK} />
        <Street top={KERB + 2} bottom={H} width={W} vx={450} />

        {/* the ring, thrown down on the stones, its glint cut round it */}
        <ellipse cx={RING[0]} cy={RING[1]} rx={30} ry={13} fill={PAPER} />
        <path d={m.glint} fill={INK} />
        <ellipse
          cx={RING[0]}
          cy={RING[1]}
          rx={13}
          ry={6.6}
          fill="none"
          stroke={INK}
          strokeWidth={7}
        />
        <ellipse
          cx={RING[0]}
          cy={RING[1]}
          rx={13}
          ry={6.6}
          fill="none"
          stroke={RED}
          strokeWidth={4}
        />
        <path d={gouge(RING[0] - 9, RING[1] - 4.6, RING[0] - 2, RING[1] - 6.6, 0.9)} fill={PAPER} />

        {/* Malvolio, walking off to the left, nose in the air, a hand flung back at the ring */}
        <Person
          at={[262, FEET]}
          scale={1.06}
          flip
          pose={{
            look: 'malvolio',
            head: { rot: -7 },
            legs: {
              far: [
                [-3, -70],
                [-12, -36],
                [-20, -3],
              ],
              near: [
                [3, -70],
                [12, -37],
                [20, -3],
              ],
            },
            far: {
              pts: [
                [-4, -128],
                [2, -100],
                [6, -76],
              ],
            },
            near: {
              pts: [
                [-1, -128],
                [-16, -108],
                [-36, -100],
              ],
              hand: 'open',
              deg: 168,
              thumb: 1,
            },
          }}
        />
        {/* Viola, as Cesario, looking down at the ring, one hand held out open */}
        <Person
          at={[612, FEET]}
          scale={1.06}
          flip
          pose={{
            look: 'cesario',
            head: { rot: 16 },
            cloak: 0,
            far: {
              pts: [
                [-4, -128],
                [-8, -100],
                [-5, -74],
              ],
            },
            near: {
              pts: [
                [5, -128],
                [12, -100],
                [32, -92],
              ],
              hand: 'open',
              deg: -14,
              thumb: -1,
            },
          }}
        />
      </g>
    </>
  )
}

export const theRing: LinocutArt = { width: W, height: H, Draw: TheRing }
