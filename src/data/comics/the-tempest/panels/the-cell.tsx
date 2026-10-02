import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, ribbon, rng, type Rng } from '@/components/comics/linocut/carve'

import type { P } from './people'

/**
 * PROSPERO'S CELL, cut once for every panel set "Before Prospero's cell"
 * (eight of the guide's moments), so a student sees the same place each time.
 *
 * What the play gives (the held edition, src/data/full-texts/the-tempest.ts):
 * - It is poor and small: "Prospero, master of a full poor cell" (1.2);
 *   "This cell's my court: here have I few attendants" (5.1). So a low hut of
 *   rough stone, one dark doorway, a thatched roof.
 * - It stands in a grove of lime trees: "In the line grove which
 *   weather-fends your cell" (5.1), and in 4.1 the stolen clothes hang "on
 *   this line". So lime trees stand by it (LimeTree), broad crowns of small
 *   leaves on short trunks.
 * - Caliban "does make our fire, Fetch in our wood" (1.2), "There's wood
 *   enough within". `woodpile` stacks the wood by the side wall.
 * - Caliban lives apart from it: "here you sty me In this hard rock" (1.2).
 *   CalibanRock is that rock, a low outcrop with a dark opening.
 *
 * Nothing is taken from a film, television or stage production's set.
 *
 * The cell is drawn in its own frame: the ground at y 0, the middle of the
 * doorway at x 0. The front wall runs from x -72 to 72 and stands 80 high;
 * the side wall runs back to x 98; the ridge of the roof is at y -126. Place
 * it with `at`, `scale` and `flip` (to put the side wall on the left). A lime
 * tree is drawn in its own frame, its foot at (0, 0): 'broad' reaches about
 * y -300 and spreads about 150 either side, 'small' about y -250 and 105.
 * Seeds: 2101 (stones), 2102 (thatch), 2103 and 2104 (the limes), 2105 (the
 * woodpile), 2106 (the rock).
 */

type Grove = { trunk: string; limbs: string; crown: string; leaves: string; holes: string }
type Marks = {
  stones: string
  sideJoints: string
  thatch: string
  eaves: string
  gable: string
  limes: { broad: Grove; small: Grove }
  logs: { ends: string; rings: string; bark: string }
  rock: { mass: string; cuts: string }
}

/** A rough stone: a rounded box with its corners pushed about a little. */
function stone(r: Rng, x: number, y: number, w: number, h: number) {
  const j = () => between(r, -1.2, 1.2)
  const a: P = [x + j(), y + j()]
  const b: P = [x + w + j(), y + j()]
  const c: P = [x + w + j(), y + h + j()]
  const d: P = [x + j(), y + h + j()]
  const k = 3
  return (
    `M${n(a[0] + k)} ${n(a[1])}L${n(b[0] - k)} ${n(b[1])}Q${n(b[0])} ${n(b[1])} ${n(b[0])} ${n(b[1] + k)}` +
    `L${n(c[0])} ${n(c[1] - k)}Q${n(c[0])} ${n(c[1])} ${n(c[0] - k)} ${n(c[1])}` +
    `L${n(d[0] + k)} ${n(d[1])}Q${n(d[0])} ${n(d[1])} ${n(d[0])} ${n(d[1] - k)}` +
    `L${n(a[0])} ${n(a[1] + k)}Q${n(a[0])} ${n(a[1])} ${n(a[0] + k)} ${n(a[1])}Z`
  )
}

const disc = (cx: number, cy: number, rx: number, ry = rx) =>
  `M${n(cx - rx)} ${n(cy)}a${n(rx)} ${n(ry)} 0 1 0 ${n(rx * 2)} 0a${n(rx)} ${n(ry)} 0 1 0 ${n(-rx * 2)} 0Z`

/**
 * A lime tree in its own frame, its foot at (0, 0): a short trunk forking
 * into limbs under a broad, uneven crown of small leaves. The crown is ink,
 * its leaves cut in paper where the light falls from the upper right, with a
 * few gaps in its underside where the sky shows and the limbs are seen.
 */
function lime(r: Rng, top: number, spread: number): Grove {
  const cy = top + spread * 0.62
  const rx = spread * 0.78
  const ry = spread * 0.46
  const base = cy + ry * 0.7
  const trunk = `M-10 0C-8 ${n(base * 0.4)} -7 ${n(base * 0.8)} -6 ${n(base)}L6 ${n(base)}C7 ${n(base * 0.8)} 9 ${n(base * 0.4)} 12 0Z`
  const limbs = (
    [
      [-rx * 0.62, cy + ry * 0.05],
      [-rx * 0.22, cy - ry * 0.45],
      [rx * 0.2, cy - ry * 0.35],
      [rx * 0.6, cy - ry * 0.02],
    ] as P[]
  )
    .map(([ex, ey]) =>
      ribbon(
        [
          [0, base + 4],
          [ex * 0.35, base - (base - ey) * 0.45],
          [ex * 0.75, ey + (base - ey) * 0.15],
          [ex, ey],
        ],
        9,
        0.8,
        false,
      ),
    )
    .join('')
  // The crown: rounds of different sizes round an ellipse, so its edge is
  // uneven like leafage and not a lollipop.
  let crown = disc(0, cy, rx * 0.7, ry * 0.8)
  const lobes = 15
  for (let k = 0; k < lobes; k++) {
    const a = (k / lobes) * Math.PI * 2 + between(r, -0.12, 0.12)
    const rad = spread * between(r, 0.22, 0.36) * (Math.sin(a) > 0.3 ? 0.8 : 1)
    crown += disc(
      Math.cos(a) * rx * between(r, 0.78, 0.92),
      cy + Math.sin(a) * ry * between(r, 0.72, 0.9),
      rad,
      rad * 0.86,
    )
  }
  // The leaves: small cuts, thick where the light falls and sparse in shade.
  let leaves = ''
  for (let i = 0; i < 300; i++) {
    const a = between(r, 0, Math.PI * 2)
    const rr = Math.sqrt(r()) * 1.04
    const lx = Math.cos(a) * rr * rx
    const ly = cy + Math.sin(a) * rr * ry
    const light = clamp(0.62 + (lx / rx) * 0.3 - ((ly - cy) / ry) * 0.5)
    if (r() > light) continue
    const ang = between(r, -0.9, 0.9) + (lx > 0 ? 0.4 : -0.4)
    const len = 3.8 + light * 4.4
    leaves += gouge(lx, ly, lx + Math.cos(ang) * len, ly + Math.sin(ang) * len, 0.9 + light * 1.3)
  }
  // Gaps in the underside of the crown, where the sky shows through the limbs.
  let holes = ''
  for (let i = 0; i < 4; i++) {
    const hx = between(r, -rx * 0.55, rx * 0.55)
    const hy = cy + between(r, ry * 0.3, ry * 0.62)
    holes += disc(hx, hy, between(r, 3, 6), between(r, 1.8, 3))
  }
  return { trunk, limbs, crown, leaves, holes }
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The front wall: courses of rough stones.
  const r = rng(2101)
  let stones = ''
  for (let y = -80, row = 0; y < -2; row++) {
    const h = between(r, 11, 15)
    let x = -72 + (row % 2) * between(r, -10, -2)
    while (x < 72) {
      const w = between(r, 16, 30)
      const x1 = Math.min(x + w, 72)
      // leave the doorway and its jambs clear
      const inDoor = x1 > -21 && x < 21 && y + h > -60
      if (!inDoor && x1 - x > 6)
        stones += stone(r, Math.max(x, -72), y, x1 - Math.max(x, -72) - 2, h - 2)
      x = x1 + 1
    }
    y += h
  }
  let sideJoints = ''
  for (let y = -74; y < -4; y += 12) sideJoints += gouge(74, y + 1, 96, y + 6, 1.2, 0.4)
  for (let y = -68; y < -4; y += 24) sideJoints += gouge(84, y + 4, 84.6, y + 14, 0.8)

  // The thatch: straw cut in paper, running down the slope and fanning to the
  // eaves, brighter on the right where the light falls.
  const t = rng(2102)
  let thatch = ''
  for (let i = 0; i < 52; i++) {
    const u = i / 51
    const xTop = -60 + u * 124
    const xBot = -86 + u * 176
    let s = between(t, 0, 0.2)
    while (s < 1) {
      const e = Math.min(1, s + between(t, 0.12, 0.3))
      const light = clamp(0.25 + u * 0.6 + between(t, -0.1, 0.1))
      if (t() < 0.3 + light * 0.6)
        thatch += gouge(
          xTop + (xBot - xTop) * s,
          -126 + 50 * s,
          xTop + (xBot - xTop) * e,
          -126 + 50 * e,
          0.5 + light * 1.1,
        )
      s = e + between(t, 0.04, 0.12)
    }
  }
  let eaves = ''
  for (let x = -86; x < 92; x += 3.6)
    eaves += gouge(x, -79, x + between(t, -1, 1), -71 + between(t, -1, 2), 1)
  let gable = ''
  for (let k = 0; k < 9; k++)
    gable += gouge(70 + k * 3.6, -122 + k * 5, 94 + k * 2.4, -76 + k * 0.6, 0.6, 0.6)

  const limes = { broad: lime(rng(2103), -300, 150), small: lime(rng(2104), -250, 105) }

  // The woodpile against the side wall: log ends stacked three high.
  const w = rng(2105)
  let ends = ''
  let rings = ''
  let bark = ''
  const rows = [
    [104, 116, 128, 140, 152],
    [110, 122, 134, 146],
    [116, 128, 140],
  ]
  rows.forEach((xs, row) => {
    for (const x of xs) {
      const cx = x + between(w, -1, 1)
      const cy = -6 - row * 11 + between(w, -0.6, 0.6)
      const rad = between(w, 5.2, 6.2)
      ends += disc(cx, cy, rad)
      rings += disc(cx, cy, rad * 0.5)
      bark += `M${n(cx)} ${n(cy - 1.4)}l${n(between(w, 1, 2.4))} ${n(between(w, -2, 2))}`
    }
  })

  // Caliban's rock: a hump of stone with a low dark mouth, cut with the light
  // on its upper faces.
  const k = rng(2106)
  const mass =
    'M-120 0C-122 -30 -112 -62 -90 -80C-70 -96 -40 -104 -10 -100C20 -98 50 -88 74 -70C96 -52 112 -28 118 0Z'
  let cuts = ''
  for (let i = 0; i < 46; i++) {
    const x0 = between(k, -104, 100)
    const top = -100 + Math.abs(x0) * 0.22 + (x0 > 40 ? (x0 - 40) * 0.5 : 0)
    const y0 = between(k, top + 6, -10)
    const light = clamp(0.9 - (y0 - top) / 70 + (x0 > 0 ? 0.15 : -0.1))
    if (k() > light) continue
    cuts += gouge(
      x0,
      y0,
      x0 + between(k, 10, 26),
      y0 + between(k, 2, 6),
      0.6 + light * 1.6,
      between(k, -1, 1),
    )
  }
  cached = {
    stones,
    sideJoints,
    thatch,
    eaves,
    gable,
    limes,
    logs: { ends, rings, bark },
    rock: { mass, cuts },
  }
  return cached
}

/** One of the limes by the cell, its foot at `at`. */
export function LimeTree({
  at,
  scale = 1,
  flip = false,
  which = 'broad',
}: {
  at: P
  scale?: number
  flip?: boolean
  which?: 'broad' | 'small'
}) {
  const g = marks().limes[which]
  return (
    <g
      transform={`translate(${n(at[0])} ${n(at[1])}) scale(${n(flip ? -scale : scale)} ${n(scale)})`}
    >
      <path d={g.trunk} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={g.crown} fill={INK} stroke={PAPER} strokeWidth={3.4} />
      <path d={g.crown} fill={INK} />
      <path d={g.leaves} fill={PAPER} />
      <path d={g.holes} fill={PAPER} />
      <path d={g.limbs} fill={INK} />
    </g>
  )
}

/**
 * The cell, placed with its doorway's foot at `at`. `woodpile` puts the wood
 * by the side wall, and `glow` the red of the fire Caliban makes, inside the
 * doorway.
 */
export function Cell({
  at,
  scale = 1,
  flip = false,
  woodpile = false,
  glow = false,
}: {
  at: P
  scale?: number
  flip?: boolean
  woodpile?: boolean
  glow?: boolean
}) {
  const m = marks()
  const t = `translate(${n(at[0])} ${n(at[1])}) scale(${n(flip ? -scale : scale)} ${n(scale)})`
  return (
    <g transform={t}>
      {/* the side wall, in shade, running back */}
      <path d="M72 -80L98 -74L98 0L72 0Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.sideJoints} fill={PAPER} />
      {/* the front wall of rough stone, in the light */}
      <rect
        x={-72}
        y={-80}
        width={144}
        height={80}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.bold}
      />
      <path d={m.stones} fill="none" stroke={INK} strokeWidth={1.3} />
      {/* the shadow under the eaves */}
      <path d="M-72 -80H72V-72C40 -70 -40 -70 -72 -73Z" fill={INK} />
      {/* the doorway, dark within, under a lintel stone */}
      <path d="M-18 0V-44Q-18 -60 0 -60Q18 -60 18 -44V0Z" fill={INK} />
      {glow && (
        <g fill={RED}>
          <path d="M-9 0C-10 -7 -5 -10 -2 -8C-1 -13 5 -13 6 -8C9 -10 12 -5 10 0Z" />
          <path className="lc-flicker" d="M-2 -8C-4 -14 -1 -19 1 -24C3 -18 6 -14 3 -8Z" />
        </g>
      )}
      <path d="M-26 -60L26 -60L24 -68L-24 -68Z" fill={PAPER} stroke={INK} strokeWidth={1.4} />
      <path d="M-24 0V-58M24 0V-58" stroke={INK} strokeWidth={2.4} />
      {/* the thatched roof, and its end over the side wall */}
      <path
        d="M-90 -74L-62 -126L66 -126L96 -74Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={m.thatch} fill={PAPER} />
      <path d="M96 -74L66 -126L76 -124L106 -76Z" fill={INK} stroke={PAPER} strokeWidth={1.2} />
      <path d={m.gable} fill={PAPER} />
      <path d={m.eaves} fill={INK} />
      <path d="M-90 -74L96 -74" stroke={PAPER} strokeWidth={1.2} />
      {woodpile && (
        <g>
          <path d={m.logs.ends} fill={PAPER} stroke={INK} strokeWidth={1.6} />
          <path d={m.logs.rings} fill="none" stroke={INK} strokeWidth={0.9} />
          <path d={m.logs.bark} stroke={INK} strokeWidth={0.8} />
        </g>
      )}
    </g>
  )
}

/**
 * Caliban's "hard rock" (1.2): a low hump of stone with a dark opening at its
 * foot, in its own frame (the ground at y 0, the middle of the opening at
 * x 0, about 240 wide and 100 high). Place with `at`, `scale` and `flip`.
 */
export function CalibanRock({
  at,
  scale = 1,
  flip = false,
}: {
  at: P
  scale?: number
  flip?: boolean
}) {
  const m = marks()
  const t = `translate(${n(at[0])} ${n(at[1])}) scale(${n(flip ? -scale : scale)} ${n(scale)})`
  return (
    <g transform={t}>
      <path d={m.rock.mass} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.rock.cuts} fill={PAPER} />
      {/* the opening, its lip lit */}
      <path d="M-30 0C-30 -24 -18 -42 0 -42C18 -42 30 -24 30 0Z" fill={INK} />
      <path
        d="M-30 0C-30 -24 -18 -42 0 -42C18 -42 30 -24 30 0"
        fill="none"
        stroke={PAPER}
        strokeWidth={LINE.bold}
      />
    </g>
  )
}
