import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  gougeField,
  n,
  rng,
  wedge,
  type Rng,
} from '@/components/comics/linocut/carve'

/**
 * OLIVIA'S GARDEN: the ground of every panel set there, cut once here so that
 * a student who meets it again and again knows it for the same place: the
 * same brick wall with its coping, the same clipped box and the same church
 * tower over the wall. Cut first for the moments "I am not what I am" (3.1),
 * "Yellow stockings" (3.4) and "A duel and an arrest" (3.4); "The letter in
 * the garden" (2.5) and "A pearl and a priest" (4.3) draw from it too.
 * SHARED: other panels import from this file, so keep every export's
 * signature, and preview the panels that use a piece before changing how it
 * looks.
 *
 * WHAT THE PLAY SAYS OF IT (the held edition, src/data/full-texts/
 * twelfth-night.ts, Project Gutenberg #1526):
 * - "Let the garden door be shut, and leave me to my hearing" (Olivia, 3.1).
 *   So the garden is walled, and its door can be shut: brickWall and
 *   GardenDoor, a plank door in an arch of brick.
 * - "[Clock strikes.] The clock upbraids me with the waste of time" (3.1),
 *   and Feste's "my house doth stand by the church" (3.1). So a church tower
 *   stands over the wall (Steeple), and in 3.1 the bells in its belfry are
 *   struck, with rings of sound cut round it as the pilot cuts the bells of
 *   Christmas morning. A clock strikes its bell with a hammer, so the bells
 *   hang still rather than swing. No clock face is cut: the play does not say
 *   what hour it strikes.
 * - "Get ye all three into the box-tree" (2.5), and "Malvolio's coming down
 *   this walk" (2.5). So the garden has clipped box (Topiary, and a box hedge
 *   along the wall, hedgeBand) and a gravel walk (walk).
 * - "Scout me for him at the corner of the orchard" and "attends thee at the
 *   orchard end" (3.4). So the orchard's trees (OrchardTree) stand over the
 *   wall, and close behind the duel.
 *
 * The rest is the plain dress of a great garden of about 1600; the play
 * describes nothing more, and nothing is taken from a film, television or
 * stage production. The sky, the sunlit wall and the walk are pale, so the
 * people, cut in ink, stand out against them; the box and the trees are dark,
 * and a figure in front of them keeps its carved paper edge.
 *
 * Every function here takes its own seeded generator, so each panel that uses
 * them records its own seeds.
 */

export type Box = { x0: number; x1: number; y0: number; y1: number }

/**
 * Foliage as a woodcutter cuts it: rows of small paper crescents, the lit top
 * edge of each clump of leaves, heavier towards the light. Fill with PAPER
 * over the ink shape of the tree. (The Much Ado garden cuts its arbour so.)
 */
export function foliage(
  r: Rng,
  box: Box,
  step: number,
  inside: (x: number, y: number) => boolean,
  lit: (x: number, y: number) => number,
) {
  let d = ''
  let row = 0
  for (let y = box.y0; y < box.y1; y += step * 0.7, row++) {
    for (let x = box.x0 + (row % 2) * step * 0.5; x < box.x1; x += step) {
      const cx = x + between(r, -1.5, 1.5)
      const cy = y + between(r, -1.2, 1.2)
      if (!inside(cx, cy)) continue
      const L = lit(cx, cy)
      if (r() > 0.25 + L * 0.75) continue
      const w = step * (0.32 + L * 0.2)
      d += gouge(cx - w, cy + 1.4, cx + w, cy + 1.4, 0.5 + L * 1.9, -1.6 - L * 1.2)
    }
  }
  return d
}

/** A daylit sky: ink bars on the paper, closing up towards the top of the block. Fill with INK. */
export function skyBars(r: Rng, box: Box) {
  return gougeField(
    r,
    box,
    (x, y) => clamp(0.78 - (y - box.y0) / 170 + 0.06 * Math.sin(x / 70 + y / 22)),
    { spacing: 6.2, len: [40, 150], gap: [10, 34], max: 2.5 },
  )
}

/**
 * A sunlit brick wall: the paper face, its courses and staggered joints cut
 * in ink, broken where the light is strongest. `light` is 0 (shade) to 1
 * (full sun). Fill with INK over PAPER.
 */
export function brickWall(r: Rng, box: Box, light: (x: number, y: number) => number, course = 7.4) {
  let d = ''
  let row = 0
  for (let y = box.y0 + course; y < box.y1 - 1; y += course, row++) {
    let x = box.x0 + between(r, -8, 0)
    while (x < box.x1) {
      const len = between(r, 18, 64)
      const L = light(x + len / 2, y)
      if (r() > L * 0.5)
        d += wedge(x, y, x + len, y + between(r, -0.4, 0.4), 0.9, 0.9 + (1 - L) * 0.9)
      x += len + between(r, 2, 9)
    }
    for (let hx = box.x0 + (row % 2 ? 6 : 15) + between(r, -2, 2); hx < box.x1; hx += 18) {
      const L = light(hx, y - course / 2)
      if (r() > 0.3 + L * 0.45) d += wedge(hx, y - course + 1, hx, y - 0.6, 0.9, 0.9)
    }
  }
  return d
}

/** A gravel walk: paper, its grain cut in ink, heavier towards the front of the block. Fill with INK. */
export function walk(r: Rng, box: Box) {
  return gougeField(
    r,
    box,
    (_x, y) => clamp(0.1 + ((y - box.y0) / (box.y1 - box.y0)) ** 1.6 * 0.5),
    { spacing: 5, len: [12, 46], gap: [6, 22], max: 2.2 },
  )
}

/** A shadow on the walk under someone standing: a few tapering ink cuts. Fill with INK. */
export function footShadow(cx: number, y: number, halfW: number, lean = 0) {
  let d = ''
  for (let k = 0; k < 3; k++) {
    const w = halfW * (1 - k * 0.2)
    d += gouge(cx - w + lean * k, y + 1 + k * 3, cx + w + lean * k, y + 1.4 + k * 3, 1.9 - k * 0.45)
  }
  return d
}

/** The wall's coping: an ink band along the top, its sunlit edge cut in paper. */
export function WallCoping({ x0, x1, top }: { x0: number; x1: number; top: number }) {
  return (
    <>
      <rect x={x0} y={top - 7} width={x1 - x0} height={8} fill={INK} />
      <path d={gouge(x0, top - 4.4, x1, top - 4.2, 1.1)} fill={PAPER} />
      <rect x={x0} y={top + 1} width={x1 - x0} height={2.4} fill={INK} />
    </>
  )
}

/**
 * The garden door, shut: planks in an arch of brick, its iron straps cut in
 * paper and its ring on the side away from the hinges. `x` is its left edge,
 * `base` the foot of the wall, `w` and `h` its width and its height to the
 * top of the arch.
 */
export function GardenDoor({ x, base, w, h }: { x: number; base: number; w: number; h: number }) {
  const r = w / 2
  const spring = base - h + r
  const door = `M${n(x)} ${n(base)}V${n(spring)}A${n(r)} ${n(r)} 0 0 1 ${n(x + w)} ${n(spring)}V${n(base)}Z`
  const frame = `M${n(x - 6)} ${n(base)}V${n(spring)}A${n(r + 6)} ${n(r + 6)} 0 0 1 ${n(x + w + 6)} ${n(spring)}V${n(base)}Z`
  let planks = ''
  for (let k = 1; k < 4; k++) {
    const px = x + (w * k) / 4
    const dy = Math.sqrt(Math.max(0, r * r - (px - x - r) ** 2))
    planks += gouge(px, spring - dy + 4, px, base - 2, 0.9)
  }
  let voussoirs = ''
  for (let k = 1; k < 9; k++) {
    const a = Math.PI + (k / 9) * Math.PI
    voussoirs += `M${n(x + r + Math.cos(a) * (r + 1))} ${n(spring + Math.sin(a) * (r + 1))}L${n(x + r + Math.cos(a) * (r + 6))} ${n(spring + Math.sin(a) * (r + 6))}`
  }
  const straps =
    gouge(x + 2, spring + 6, x + w - 3, spring + 6, 1.3) +
    gouge(x + 2, base - 12, x + w - 3, base - 12, 1.3)
  return (
    <g>
      <path d={frame} fill={INK} />
      <path d={voussoirs} stroke={PAPER} strokeWidth={1.1} />
      <path d={door} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={planks + straps} fill={PAPER} />
      <circle
        cx={x + w * 0.76}
        cy={base - h * 0.42}
        r={3}
        fill="none"
        stroke={PAPER}
        strokeWidth={1.3}
      />
    </g>
  )
}

/** A scalloped outline round an ellipse: the clipped edge of a box ball or a tree's crown. */
function scallop(cx: number, cy: number, rx: number, ry: number, bumps: number, out: number) {
  const pt = (a: number, k: number) =>
    `${n(cx + Math.cos(a) * rx * k)} ${n(cy + Math.sin(a) * ry * k)}`
  let d = `M${pt(0, 1)}`
  for (let i = 0; i < bumps; i++) {
    const a0 = (i / bumps) * Math.PI * 2
    const a1 = ((i + 1) / bumps) * Math.PI * 2
    d += `Q${pt((a0 + a1) / 2, 1 + out)} ${pt(a1, 1)}`
  }
  return d + 'Z'
}

/**
 * A clipped box ball on a short stem, in the hedge line: (cx, cy) is the
 * ball's centre, `rad` its radius, `base` the foot of the stem. Lit from the
 * upper left, so its crescents gather there.
 */
export function Topiary({
  r,
  cx,
  cy,
  rad,
  base,
}: {
  r: Rng
  cx: number
  cy: number
  rad: number
  base: number
}) {
  const leaves = foliage(
    r,
    { x0: cx - rad, x1: cx + rad, y0: cy - rad + 3, y1: cy + rad - 3 },
    7.5,
    (x, y) => Math.hypot(x - cx, y - cy) < rad - 4,
    (x, y) => clamp(0.85 - (x - cx + rad) / (rad * 2.8) - (y - cy + rad) / (rad * 4)),
  )
  return (
    <g>
      <path
        d={`M${n(cx - 3)} ${n(cy + rad - 4)}H${n(cx + 3)}L${n(cx + 4)} ${n(base)}H${n(cx - 4)}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.2}
      />
      <path
        d={scallop(cx, cy, rad, rad, Math.round(rad / 3.4), 0.07)}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={leaves} fill={PAPER} />
    </g>
  )
}

/**
 * A clipped box hedge along the foot of the wall, from x0 to x1, its top at
 * `top` (gently scalloped by the shears) and its foot at `base`. Ink, with its
 * leaves cut in paper. Returns the hedge's shape and its leaves.
 */
export function hedgeBand(r: Rng, x0: number, x1: number, top: number, base: number) {
  let shape = `M${n(x0)} ${n(base)}V${n(top + 2)}`
  for (let x = x0; x < x1; x += 14) {
    const xe = Math.min(x1, x + 14)
    shape += `Q${n((x + xe) / 2)} ${n(top - 2.4)} ${n(xe)} ${n(top + 2)}`
  }
  shape += `V${n(base)}Z`
  const leaves = foliage(
    r,
    { x0, x1, y0: top + 3, y1: base - 2 },
    7,
    () => true,
    (_x, y) => clamp(0.7 - (y - top) / ((base - top) * 1.6)),
  )
  return { shape, leaves }
}

/**
 * An orchard tree: a round crown of leaves on a trunk, lit from the upper
 * left. (cx, cy) is the crown's centre and `base` the foot of the trunk.
 */
export function OrchardTree({
  r,
  cx,
  cy,
  rx,
  ry,
  base,
}: {
  r: Rng
  cx: number
  cy: number
  rx: number
  ry: number
  base: number
}) {
  const leaves = foliage(
    r,
    { x0: cx - rx, x1: cx + rx, y0: cy - ry + 3, y1: cy + ry - 3 },
    8,
    (x, y) => Math.hypot((x - cx) / (rx - 4), (y - cy) / (ry - 4)) < 1,
    (x, y) => clamp(0.85 - (x - cx + rx) / (rx * 2.8) - (y - cy + ry) / (ry * 5)),
  )
  return (
    <g>
      <path
        d={`M${n(cx - 4)} ${n(cy + ry * 0.5)}L${n(cx + 4)} ${n(cy + ry * 0.5)}L${n(cx + 6)} ${n(base)}L${n(cx - 6)} ${n(base)}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.2}
      />
      <path
        d={scallop(cx, cy, rx, ry, Math.round((rx + ry) / 6), 0.06)}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={leaves} fill={PAPER} />
    </g>
  )
}

/**
 * The church tower over the garden wall: a square tower with a spire, and a
 * belfry with two arched openings. `x` is the tower's centre, `top` the foot
 * of the spire, and `base` where the wall hides the tower. With `ringing`
 * (3.1, "Clock strikes"), rings of sound are cut round the belfry, broken as
 * the pilot breaks them; `seed` places the breaks. The bells hang still
 * either way: a clock's hammer strikes them, and nothing swings them.
 */
export function Steeple({
  x,
  top,
  base,
  ringing = false,
  seed = 1,
}: {
  x: number
  top: number
  base: number
  ringing?: boolean
  seed?: number
}) {
  const w = 34
  const x0 = x - w / 2
  const spire = `M${n(x0 - 3)} ${n(top + 2)}L${n(x)} ${n(top - 62)}L${n(x0 + w + 3)} ${n(top + 2)}Z`
  const openings =
    `M${n(x - 12)} ${n(top + 32)}V${n(top + 16)}Q${n(x - 12)} ${n(top + 8)} ${n(x - 6.5)} ${n(top + 7)}Q${n(x - 1)} ${n(top + 8)} ${n(x - 1)} ${n(top + 16)}V${n(top + 32)}Z` +
    `M${n(x + 1)} ${n(top + 32)}V${n(top + 16)}Q${n(x + 1)} ${n(top + 8)} ${n(x + 6.5)} ${n(top + 7)}Q${n(x + 12)} ${n(top + 8)} ${n(x + 12)} ${n(top + 16)}V${n(top + 32)}Z`
  // the bells, hanging still in the two openings
  const bells =
    `M${n(x - 10.5)} ${n(top + 26)}C${n(x - 10)} ${n(top + 19)} ${n(x - 8.5)} ${n(top + 14)} ${n(x - 6.5)} ${n(top + 14)}C${n(x - 4.5)} ${n(top + 14)} ${n(x - 3)} ${n(top + 19)} ${n(x - 2.5)} ${n(top + 26)}Z` +
    `M${n(x + 2.5)} ${n(top + 26)}C${n(x + 3)} ${n(top + 19)} ${n(x + 4.5)} ${n(top + 14)} ${n(x + 6.5)} ${n(top + 14)}C${n(x + 8.5)} ${n(top + 14)} ${n(x + 10)} ${n(top + 19)} ${n(x + 10.5)} ${n(top + 26)}Z`
  let courses = ''
  for (let y = top + 44; y < base; y += 9) courses += gouge(x0 + 3, y, x0 + w * 0.5, y + 0.3, 1.1)
  let sound = ''
  if (ringing) {
    const r = rng(seed)
    for (let i = 0; i < 3; i++) {
      const rad = 30 + i * 11
      sound += arcDashes(r, x, top + 20, rad, deg(196), deg(250), [8, 16], [4, 8])
      sound += arcDashes(r, x, top + 20, rad, deg(290), deg(344), [8, 16], [4, 8])
    }
  }
  return (
    <g>
      <path d={spire} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={gouge(x - 1, top - 50, x - 7, top - 2, 0.9)} fill={PAPER} />
      <rect
        x={x0}
        y={top}
        width={w}
        height={base - top}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={openings} fill={PAPER} />
      <path d={bells} fill={INK} />
      <rect
        x={x0 - 3}
        y={top + 34}
        width={w + 6}
        height={4}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1}
      />
      <path d={courses} fill={PAPER} />
      {ringing && (
        <path
          className="lc-glow"
          d={sound}
          fill="none"
          stroke={INK}
          strokeWidth={LINE.bold}
          strokeLinecap="round"
        />
      )}
    </g>
  )
}

/**
 * The orchard's grass: the paper ground with short tufts cut in ink, more of
 * them and taller towards the front of the block. Stroke with INK, about 1.3
 * wide, round caps. `keepOut` leaves bare the boxes where people stand, so
 * their feet are not lost in the tufts.
 */
export function grassTufts(r: Rng, box: Box, count: number, keepOut: Box[] = []) {
  let d = ''
  for (let i = 0; i < count; i++) {
    const x = between(r, box.x0, box.x1)
    const t = Math.pow(r(), 0.7)
    const y = box.y0 + t * (box.y1 - box.y0)
    if (keepOut.some((b) => x > b.x0 && x < b.x1 && y > b.y0 && y < b.y1)) continue
    const h = 3 + t * 6
    d += `M${n(x - 2.4)} ${n(y)}l${n(-1.2)} ${n(-h)}M${n(x)} ${n(y)}l0 ${n(-h * 1.25)}M${n(x + 2.4)} ${n(y)}l${n(1.6)} ${n(-h)}`
  }
  return d
}
