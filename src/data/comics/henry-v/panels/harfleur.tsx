import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  n,
  wedge,
  type Pt,
  type Rng,
} from '@/components/comics/linocut/carve'

/**
 * HARFLEUR: the town, its walls, its gate and the English siege before it,
 * cut once for the three panels set there (moments 8 to 10 of the guide's
 * timeline: "Once more unto the breach", "The breach seen from below" and
 * "The ultimatum to Harfleur"), so that the walls a student sees breached in
 * Act 3, Scene 1 are the walls the Governor stands on in Act 3, Scene 3.
 *
 * WHAT THE PLAY GIVES, AND SO WHAT IS DRAWN (src/data/full-texts/henry-v.ts,
 * Project Gutenberg #1521):
 * - A walled town under siege: "girded Harfleur", with "the ordnance on their
 *   carriages, With fatal mouths gaping on girded Harfleur" (Act 3, Chorus),
 *   and English soldiers "with scaling-ladders" (3.1). So the walls are
 *   coursed stone with battlements and round towers, and the English carry
 *   ladders.
 * - The guns have made a gap: "Once more unto the breach", "Or close the wall
 *   up" (3.1), "Alarum, and chambers go off". So the breach is a broken notch
 *   in the wall with its stones spilled in a heap below it, and gun smoke
 *   hangs about it. The guns' shot is never drawn striking anything.
 * - "the mines" (3.2): the English dig under the walls, and "the pioneers"
 *   work them. So the mine is a timbered mouth in an earth bank.
 * - "Before the gates" (3.3): "The Governor and some citizens on the walls;
 *   the English forces below." So the gate is shut in its gatehouse, with
 *   the townspeople above it on the wall-walk.
 * - "Saint George" (3.1, "Cry, God for Harry! England and Saint George!"):
 *   the English banner is Saint George's red cross on white, the spot colour
 *   cut as a flag, large enough at phone width to stay a flag.
 * - "Soldiers, with scaling-ladders" (3.1) and "the English forces below"
 *   (3.3): a rank of them (`soldierRank`), cut as the Feast of Crispian panel
 *   cuts the army at Agincourt, so it is the same army.
 * - "have you quit the mines? Have the pioneers given o'er?" (3.2): the
 *   miners' pick and spade (`minersTools`) are left by the mine's mouth.
 *
 * Nothing here is taken from a film or stage production: the walls, the
 * gate and the banner are the plain forms of a walled town and an English
 * army of 1415.
 *
 * Every shape is plain SVG path data, built by the functions below from the
 * carving tools, and each panel caches what it builds: a drawing never
 * changes.
 */

const pt = (p: Pt) => `${n(p[0])} ${n(p[1])}`

type Box = { x0: number; x1: number; y0: number; y1: number }

/**
 * The sky over Harfleur by day, as level ink cuts on a paper ground: heavier
 * where `dark(x, y)` is high (cloud, and the smoke of the guns over the town),
 * thinning to clear paper where it is low. Fill INK over a PAPER ground. The
 * London street of "The death of Falstaff" is cut with it and with
 * `siegeGround` too, so the play's daylight is one daylight.
 */
export function siegeSky(r: Rng, box: Box, dark: (x: number, y: number) => number, spacing = 6.6) {
  let d = ''
  for (let y = box.y0; y < box.y1; y += spacing) {
    let x = box.x0 + between(r, -30, 0)
    while (x < box.x1) {
      const len = between(r, 26, 100)
      const D = clamp(dark(x + len / 2, y))
      if (r() < 0.1 + D * 1.1)
        d += gouge(
          x,
          y + between(r, -0.7, 0.7),
          x + len,
          y + between(r, -0.7, 0.7),
          0.45 + D * 2.4 * between(r, 0.75, 1.15),
          between(r, -0.6, 0.6),
        )
      x += len + between(r, 8, 30)
    }
  }
  return d
}

/**
 * The trodden ground of the siege lines, as ink on a paper ground: short level
 * strokes that thicken and lengthen towards the reader (the bottom of `box`).
 * Fill INK over PAPER.
 */
export function siegeGround(r: Rng, box: Box, weight = 1) {
  let d = ''
  for (let y = box.y0 + 3; y < box.y1; y += 4.4 + (y - box.y0) * 0.06) {
    const t = clamp((y - box.y0) / (box.y1 - box.y0))
    let x = box.x0 + between(r, -20, 0)
    while (x < box.x1) {
      const len = 8 + t * 30 * between(r, 0.6, 1.3)
      if (r() < 0.45 + t * 0.3)
        d += gouge(
          x,
          y + between(r, -1, 1),
          x + len,
          y + between(r, -1.2, 1.2),
          (0.45 + t * 1.5) * weight * between(r, 0.7, 1.2),
          between(r, -0.8, 0.8),
        )
      x += len + between(r, 8, 26) * (1.2 - t * 0.4)
    }
  }
  return d
}

/**
 * The outline of a stretch of wall with battlements: the wall-walk at `top`,
 * merlons `mh` tall and `merlon` wide with `crenel` gaps between, the foot at
 * `bottom`. `phase` slides the merlons along. Fill INK.
 */
export function battlements(
  x0: number,
  x1: number,
  top: number,
  bottom: number,
  o: { merlon?: number; crenel?: number; mh?: number; phase?: number } = {},
) {
  const mw = o.merlon ?? 16
  const cw = o.crenel ?? 10
  const mh = o.mh ?? 13
  let d = `M${n(x0)} ${n(bottom)}L${n(x0)} ${n(top)}`
  for (let x = x0 - mw + (o.phase ?? 0); x < x1; x += mw + cw) {
    const a = Math.max(x, x0)
    const b = Math.min(x + mw, x1)
    if (b - a < 3) continue
    d += `L${n(a)} ${n(top)}L${n(a)} ${n(top - mh)}L${n(b)} ${n(top - mh)}L${n(b)} ${n(top)}`
  }
  return d + `L${n(x1)} ${n(top)}L${n(x1)} ${n(bottom)}Z`
}

/**
 * A round tower seen from the front: its body `w` wide from `top` to
 * `bottom`, with a parapet that oversails it by `lip` on corbels, and
 * battlements on the parapet. Returns the outline (fill INK) and the corbels'
 * paper cuts.
 */
export function tower(
  cx: number,
  w: number,
  top: number,
  bottom: number,
  o: { lip?: number; merlon?: number; crenel?: number; mh?: number } = {},
) {
  const lip = o.lip ?? 5
  const x0 = cx - w / 2
  const x1 = cx + w / 2
  const mw = o.merlon ?? 11
  const cw = o.crenel ?? 7
  const mh = o.mh ?? 11
  const p0 = x0 - lip
  const p1 = x1 + lip
  // centre the merlons on the tower
  const span = p1 - p0
  const count = Math.max(1, Math.floor((span + cw) / (mw + cw)))
  const used = count * mw + (count - 1) * cw
  let d = `M${n(x0)} ${n(bottom)}L${n(x0)} ${n(top + 18)}L${n(p0)} ${n(top + 11)}L${n(p0)} ${n(top)}`
  for (let k = 0; k < count; k++) {
    const a = p0 + (span - used) / 2 + k * (mw + cw)
    d += `L${n(a)} ${n(top)}L${n(a)} ${n(top - mh)}L${n(a + mw)} ${n(top - mh)}L${n(a + mw)} ${n(top)}`
  }
  d += `L${n(p1)} ${n(top)}L${n(p1)} ${n(top + 11)}L${n(x1)} ${n(top + 18)}L${n(x1)} ${n(bottom)}Z`
  let corbels = ''
  for (let x = x0 + 4; x < x1 - 3; x += 8) corbels += `M${n(x)} ${n(top + 12)}v4.6h3.4v-4.6Z`
  // the parapet's string course
  corbels += gouge(p0 + 1, top + 10.4, p1 - 1, top + 10.4, 1.1)
  return { outline: d, corbels }
}

/** The light on a round tower lit from the upper left: 0 at its shadowed edge, 1 a third of the way across. */
export function towerLight(cx: number, w: number) {
  return (x: number) => {
    const t = (x - (cx - w / 2)) / w
    return Math.max(0.04, Math.cos((t - 0.3) * Math.PI * 0.95))
  }
}

/** An arrow slit with its cross-cut, at (x, y), `h` tall. Fill PAPER on the ink wall. */
export function slit(x: number, y: number, h = 16) {
  return gouge(x, y - h / 2, x, y + h / 2, 1.3) + gouge(x - 3.4, y - 1, x + 3.4, y - 1, 0.9)
}

/**
 * The breach: a notch broken down through the wall from its battlements, its
 * sides stepped where the courses have fallen away. From `x0` to `x1` at the
 * top of the merlons (`top`), down to `floor` at `mid`. Returns the notch's
 * outline (to clip the wall away, so the sky shows through it).
 */
export function breachNotch(
  r: Rng,
  x0: number,
  x1: number,
  top: number,
  floor: number,
  mid: number,
  floorW = 0,
) {
  const left: Pt[] = [[x0, top]]
  const right: Pt[] = [[x1, top]]
  const steps = 7
  const fl = mid - floorW / 2
  const fr = mid + floorW / 2
  // Each side falls in steps, a course at a time: a short drop down the broken
  // face, then a ledge in towards the middle, so the edge reads as masonry
  // knocked out stone by stone and not as a smooth valley.
  for (let k = 1; k <= steps; k++) {
    const t = k / steps
    const y = top + (floor - top) * t
    const xl = x0 + (fl - x0) * Math.pow(t, 0.8) + between(r, -6, 6)
    const xr = x1 - (x1 - fr) * Math.pow(t, 0.8) + between(r, -6, 6)
    const yPrevL = left[left.length - 1][1]
    const yPrevR = right[right.length - 1][1]
    left.push([
      left[left.length - 1][0] + between(r, 0, 3),
      yPrevL + (y - yPrevL) * between(r, 0.7, 0.95),
    ])
    left.push([xl, y + between(r, -2, 1)])
    right.push([
      right[right.length - 1][0] - between(r, 0, 3),
      yPrevR + (y - yPrevR) * between(r, 0.7, 0.95),
    ])
    right.push([xr, y + between(r, -2, 1)])
  }
  // the floor of the gap, broken and uneven where the courses have fallen
  const bottom: Pt[] = []
  for (let k = 1; k < 6 && floorW > 0; k++)
    bottom.push([fl + (floorW * k) / 6, floor + between(r, -4, 3)])
  const pts =
    floorW > 0
      ? [...left, ...bottom, ...right.reverse()]
      : [...left, [mid, floor + 2] as Pt, ...right.reverse()]
  return 'M' + pts.map(pt).join('L') + 'Z'
}

/**
 * The roofs of the town inside the walls, seen through the breach: a run of
 * steep gables and a church spire, in ink, standing on `base`, from `x0` to
 * `x1`. Their ridges are cut in paper (`ridges`), so they read as roofs and
 * not as more wall.
 */
export function townRoofs(r: Rng, x0: number, x1: number, base: number, spireAt?: number) {
  let roofs = `M${n(x0)} ${n(base)}`
  let ridges = ''
  let x = x0
  while (x < x1) {
    const w = between(r, 16, 28)
    const h = between(r, 12, 22)
    roofs += `L${n(x)} ${n(base - h * 0.45)}L${n(x + w / 2)} ${n(base - h)}L${n(x + w)} ${n(base - h * 0.45)}`
    ridges += gouge(x + w / 2 + 1, base - h + 3, x + w - 2, base - h * 0.45 + 1, 0.7)
    x += w + between(r, -2, 1)
  }
  roofs += `L${n(x1)} ${n(base)}Z`
  if (spireAt !== undefined) {
    const s = spireAt
    roofs += `M${n(s - 7)} ${n(base)}L${n(s - 7)} ${n(base - 30)}L${n(s)} ${n(base - 66)}L${n(s + 7)} ${n(base - 30)}L${n(s + 7)} ${n(base)}Z`
    ridges +=
      gouge(s + 1.4, base - 60, s + 5.6, base - 32, 0.8) +
      `M${n(s + 2)} ${n(base - 24)}h2.4v6h-2.4Z`
  }
  return { roofs, ridges }
}

/**
 * A heap of fallen stones, the dressed blocks of the wall tumbled down below
 * the breach: the mound (fill INK, with a PAPER edge), and cut into it the
 * blocks themselves, course on course, each a squared stone lying a little
 * askew with its lit top in paper (`stones`, fill PAPER) and the edges of its
 * shadowed face cut as paper lines (`faces`, stroke PAPER about 1). The
 * blocks grow towards the foot of the heap, which is nearer, and the top of
 * the mound is broken by the ones lying along it, so its edge reads as
 * stones and not as a smooth hill. `outline` is the mound's polygon. (The
 * first cut scattered small paper lozenges over a smooth mound, and at panel
 * size the heap read as a dark hill with tiles on it, not as rubble.)
 */
export function rubble(r: Rng, outline: Pt[], count: number) {
  const xs = outline.map((p) => p[0])
  const ys = outline.map((p) => p[1])
  const bx0 = Math.min(...xs)
  const bx1 = Math.max(...xs)
  const by0 = Math.min(...ys)
  const by1 = Math.max(...ys)
  const inside = (x: number, y: number) => {
    let c = false
    for (let i = 0, j = outline.length - 1; i < outline.length; j = i++) {
      const [xi, yi] = outline[i]
      const [xj, yj] = outline[j]
      if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) c = !c
    }
    return c
  }
  // The top of the mound: for each x, the first y inside it.
  const topAt = (x: number) => {
    for (let y = by0 - 2; y < by1; y += 1.5) if (inside(x, y)) return y
    return by1
  }
  // Every outline added to the mound is wound the same way as the mound's
  // own, so that where they overlap the ink stays solid under the nonzero rule.
  const area = (p: Pt[]) =>
    p.reduce((s, q, i) => s + q[0] * p[(i + 1) % p.length][1] - p[(i + 1) % p.length][0] * q[1], 0)
  const sense = Math.sign(area(outline)) || 1
  const poly = (p: Pt[]) =>
    'M' + (Math.sign(area(p)) === sense ? p : [...p].reverse()).map(pt).join('L') + 'Z'
  let mound = poly(outline)
  let stones = ''
  let faces = ''
  const block = (x: number, y: number, w: number, h: number, tilt: number, lip: number) => {
    // a squared block: its top face (a parallelogram leaning back) and its front face below it
    const t = tilt * w
    const a: Pt = [x - w / 2, y + t / 2]
    const b: Pt = [x + w / 2, y - t / 2]
    const c: Pt = [b[0] - lip * 0.5, b[1] - lip]
    const d: Pt = [a[0] - lip * 0.5, a[1] - lip]
    const e: Pt = [b[0], b[1] + h]
    const f: Pt = [a[0], a[1] + h]
    stones += `M${pt(a)}L${pt(b)}L${pt(c)}L${pt(d)}Z`
    faces += `M${pt(a)}L${pt(f)}L${pt(e)}`
    return poly([d, c, b, e, f, a])
  }
  // the blocks lying along the top of the heap, breaking its edge
  for (let x = bx0 + 14; x < bx1 - 14; x += between(r, 14, 22)) {
    const y = topAt(x) + 2
    if (y >= by1 - 6) continue
    const s = 0.8 + ((y - by0) / (by1 - by0 || 1)) * 0.5
    mound += block(
      x,
      y,
      between(r, 10, 16) * s,
      between(r, 5, 8) * s,
      between(r, -0.18, 0.18),
      3.6 * s,
    )
  }
  // and the courses of blocks within it, larger towards the foot
  let placed = 0
  let y = by0 + 12
  while (y < by1 - 4 && placed < count) {
    const t = (y - by0) / (by1 - by0 || 1)
    const h = 6 + t * 7
    for (let x = bx0 + between(r, 0, 12); x < bx1 && placed < count; ) {
      const w = between(r, 9, 22) * (0.75 + t * 0.6)
      const yy = y + between(r, -2.5, 2.5)
      if (
        inside(x, yy - 4) &&
        inside(x - w / 2, yy + h) &&
        inside(x + w / 2, yy + h) &&
        r() < 0.72
      ) {
        block(
          x,
          yy,
          w * between(r, 0.7, 0.9),
          h * between(r, 0.55, 0.8),
          between(r, -0.3, 0.3),
          3 + t * 2.4,
        )
        placed++
      }
      x += w + between(r, 2, 8)
    }
    y += h + between(r, 2, 5)
  }
  return { mound, stones, faces }
}

/**
 * Gun smoke: billows made of overlapping rounds, each [cx, cy, r]. The rounds
 * are drawn in INK a little larger, then in PAPER, so the cloud has one ink
 * outline round its whole shape; `curls` are the ink arcs inside it.
 */
export function smokeCurls(rounds: [number, number, number][]) {
  let d = ''
  for (const [cx, cy, rad] of rounds) {
    if (rad < 9) continue
    const a0 = Math.PI * 1.05
    const a1 = Math.PI * 1.55
    const rr = rad * 0.62
    d += `M${n(cx + Math.cos(a0) * rr)} ${n(cy + Math.sin(a0) * rr)}A${n(rr)} ${n(rr)} 0 0 1 ${n(cx + Math.cos(a1) * rr)} ${n(cy + Math.sin(a1) * rr)}`
  }
  return d
}

export function Smoke({
  rounds,
  edge = 1.8,
  className,
}: {
  rounds: [number, number, number][]
  edge?: number
  className?: string
}) {
  const circle = (pad: number) =>
    rounds
      .map(
        ([cx, cy, rad]) =>
          `M${n(cx - rad - pad)} ${n(cy)}a${n(rad + pad)} ${n(rad + pad)} 0 1 0 ${n((rad + pad) * 2)} 0a${n(rad + pad)} ${n(rad + pad)} 0 1 0 ${n(-(rad + pad) * 2)} 0Z`,
      )
      .join('')
  return (
    <g className={className}>
      <path d={circle(edge)} fill={INK} />
      <path d={circle(0)} fill={PAPER} />
      <path
        d={smokeCurls(rounds)}
        fill="none"
        stroke={INK}
        strokeWidth={1.3}
        strokeLinecap="round"
      />
    </g>
  )
}

/**
 * Saint George's banner on its pole: a white field with the red cross, hung
 * from the pole's top and stirring in the wind. The pole stands at `x` from
 * `top` down to `foot`; the flag is `w` by `h` and flies towards `dir`. The
 * cross's arms are a fifth of the flag's height thick, so at phone width it
 * is still a cross on a flag and never a speck.
 */
export function Banner({
  x,
  top,
  foot,
  w,
  h,
  dir = 1,
  amp = 4,
  phase = 0,
  halo = 2,
}: {
  x: number
  top: number
  foot: number
  w: number
  h: number
  dir?: 1 | -1
  amp?: number
  phase?: number
  halo?: number
}) {
  const at = (u: number, v: number): Pt => [
    x + dir * (2 + u * w),
    top + 2 + v * h + amp * u * Math.sin(u * Math.PI * 2.1 + phase),
  ]
  const quad = (u0: number, u1: number, v0: number, v1: number) => {
    const steps = 12
    const pts: Pt[] = []
    for (let i = 0; i <= steps; i++) pts.push(at(u0 + ((u1 - u0) * i) / steps, v0))
    for (let i = steps; i >= 0; i--) pts.push(at(u0 + ((u1 - u0) * i) / steps, v1))
    return 'M' + pts.map(pt).join('L') + 'Z'
  }
  const t = 0.2 * h
  const flag = quad(0, 1, 0, 1)
  const cross =
    quad(0.5 - t / 2 / w, 0.5 + t / 2 / w, 0, 1) + quad(0, 1, 0.5 - t / 2 / h, 0.5 + t / 2 / h)
  // the folds: ink cuts down the troughs of the wave
  let folds = ''
  for (const u of [0.3, 0.78]) {
    const a = at(u, 0.06)
    const b = at(u, 0.94)
    folds += gouge(a[0], a[1], b[0], b[1], 0.8)
  }
  return (
    <g>
      <path
        d={`M${n(x)} ${n(top)}L${n(x)} ${n(foot)}`}
        stroke={PAPER}
        strokeWidth={3.4 + halo * 2}
        strokeLinecap="round"
      />
      <path d={flag} fill={PAPER} stroke={PAPER} strokeWidth={halo * 2} strokeLinejoin="round" />
      <path
        d={`M${n(x)} ${n(top)}L${n(x)} ${n(foot)}`}
        stroke={INK}
        strokeWidth={3.4}
        strokeLinecap="round"
      />
      <path d={flag} fill={PAPER} stroke={INK} strokeWidth={1.6} strokeLinejoin="round" />
      <path d={cross} fill={RED} />
      <path d={folds} fill={INK} />
      <circle cx={x} cy={top - 1.4} r={3.2} fill={INK} />
    </g>
  )
}

/**
 * A rank of English soldiers far back on the field, standing at `base` from
 * `x0` to `x1`: small figures in kettle hats and padded jacks, each with a
 * bill (a staff with a short blade at its head) or a bow stave upright beside
 * him, cut as the Feast of Crispian panel cuts its rank, so the army is the
 * same army from Harfleur to Agincourt. `rank` and `bills` fill INK over a
 * PAPER edge, `staves` stroke INK, `cuts` (the quilting of the jacks) fill
 * PAPER.
 */
export function soldierRank(r: Rng, x0: number, x1: number, base0: number, s0 = 0.9) {
  let rank = ''
  let cuts = ''
  let staves = ''
  for (let x = x0; x < x1; x += between(r, 21, 27)) {
    const s = s0 + between(r, -0.05, 0.05)
    const base = base0 + between(r, -2, 2)
    const head = base - 62 * s
    rank += `M${n(x - 6 * s)} ${n(base)}L${n(x - 3 * s)} ${n(base)}L${n(x - 2.4 * s)} ${n(base - 20 * s)}L${n(x - 5.6 * s)} ${n(base - 20 * s)}Z`
    rank += `M${n(x + 2 * s)} ${n(base)}L${n(x + 5.4 * s)} ${n(base)}L${n(x + 5.4 * s)} ${n(base - 20 * s)}L${n(x + 2 * s)} ${n(base - 20 * s)}Z`
    rank += `M${n(x - 9 * s)} ${n(base - 18 * s)}L${n(x - 7 * s)} ${n(head + 14 * s)}Q${n(x)} ${n(head + 10 * s)} ${n(x + 7 * s)} ${n(head + 14 * s)}L${n(x + 9 * s)} ${n(base - 18 * s)}Z`
    rank += `M${n(x - 4.6 * s)} ${n(head + 12 * s)}L${n(x - 4.6 * s)} ${n(head + 4 * s)}L${n(x + 4.6 * s)} ${n(head + 4 * s)}L${n(x + 4.6 * s)} ${n(head + 12 * s)}Z`
    rank += `M${n(x - 10 * s)} ${n(head + 5 * s)}Q${n(x)} ${n(head + 2.4 * s)} ${n(x + 10 * s)} ${n(head + 5 * s)}L${n(x + 6 * s)} ${n(head + 2.6 * s)}Q${n(x)} ${n(head - 7 * s)} ${n(x - 6 * s)} ${n(head + 2.6 * s)}Z`
    cuts += gouge(x - 3.4 * s, head + 17 * s, x - 3.8 * s, base - 21 * s, 0.75 * s)
    cuts += gouge(x + 3.4 * s, head + 17 * s, x + 3.8 * s, base - 21 * s, 0.75 * s)
    const sx = x + 11 * s
    if (r() < 0.5)
      staves += `M${n(sx)} ${n(base - 2)}Q${n(sx + 3.4)} ${n(head - 4)} ${n(sx)} ${n(head - 18 * s)}`
    else {
      staves += `M${n(sx)} ${n(base - 2)}L${n(sx)} ${n(head - 14 * s)}`
      rank += `M${n(sx - 1.2)} ${n(head - 12 * s)}L${n(sx + 4.6 * s)} ${n(head - 14 * s)}L${n(sx + 1.4)} ${n(head - 24 * s)}L${n(sx - 1.6)} ${n(head - 22 * s)}Z`
    }
  }
  return { rank, cuts, staves }
}

/**
 * A scaling ladder from `a` to `b`, `w` wide: its two rails and its rungs, as
 * stroke paths. Stroke INK (rails about 3.2, rungs about 2.2), over a paper
 * halo where it crosses a dark ground.
 */
export function ladder(a: Pt, b: Pt, w = 13, every = 13) {
  const dx = b[0] - a[0]
  const dy = b[1] - a[1]
  const L = Math.hypot(dx, dy) || 1
  const ux = dx / L
  const uy = dy / L
  const vx = -uy * (w / 2)
  const vy = ux * (w / 2)
  const rails = `M${n(a[0] + vx)} ${n(a[1] + vy)}L${n(b[0] + vx)} ${n(b[1] + vy)}M${n(a[0] - vx)} ${n(a[1] - vy)}L${n(b[0] - vx)} ${n(b[1] - vy)}`
  let rungs = ''
  for (let s = every * 0.6; s < L - 4; s += every) {
    const cx = a[0] + ux * s
    const cy = a[1] + uy * s
    rungs += `M${n(cx + vx)} ${n(cy + vy)}L${n(cx - vx)} ${n(cy - vy)}`
  }
  return { rails, rungs }
}

/**
 * A gateway with a pointed arch, `w` wide, its arch springing at `spring` and
 * its threshold at `bottom`, centred on `cx`: the opening's outline, the
 * band of voussoirs round it, and its two shut leaves of planks, studded and
 * hung on strap hinges. Fill the arch band PAPER and the opening INK, then
 * the cuts.
 */
export function gateway(cx: number, w: number, spring: number, bottom: number) {
  const h = w * 0.62
  const x0 = cx - w / 2
  const x1 = cx + w / 2
  const apex = spring - h
  const arch = (pad: number) => {
    const a0 = x0 - pad
    const a1 = x1 + pad
    const top = apex - pad * 1.3
    return `M${n(a0)} ${n(bottom)}L${n(a0)} ${n(spring)}Q${n(a0)} ${n(spring - h * 0.72)} ${n(cx)} ${n(top)}Q${n(a1)} ${n(spring - h * 0.72)} ${n(a1)} ${n(spring)}L${n(a1)} ${n(bottom)}Z`
  }
  const opening = arch(0)
  const band = arch(9)
  // the joints of the voussoirs, radiating from the arch's centre
  let joints = ''
  for (let k = 1; k < 10; k++) {
    const t = k / 10
    const ang = Math.PI * (1 + t)
    const ox = cx + Math.cos(ang) * (w / 2)
    const oy = spring + Math.sin(ang) * h * 0.9
    const ix = cx + Math.cos(ang) * (w / 2 + 9)
    const iy = spring + Math.sin(ang) * (h * 0.9 + 10)
    joints += wedge(ox, oy, ix, iy, 1.4, 1.8)
  }
  // planks, studs and hinges on the two leaves
  let planks = ''
  const pw = w / 8
  for (let k = 1; k < 8; k++) {
    const x = x0 + k * pw
    if (k === 4) continue
    const yTop = spring - h * (1 - Math.pow((x - cx) / (w / 2), 2)) * 0.82
    planks += gouge(x, yTop + 6, x, bottom - 3, 0.7)
  }
  let studs = ''
  let hinges = ''
  for (const y of [spring + 6, spring + (bottom - spring) * 0.55]) {
    hinges += gouge(x0 + 3, y, cx - 4, y + 0.4, 2) + gouge(cx + 4, y + 0.4, x1 - 3, y, 2)
    for (let x = x0 + pw * 0.5; x < x1; x += pw) studs += `M${n(x - 1.5)} ${n(y + 7)}h3v3h-3Z`
  }
  // the meeting of the two leaves
  const meet = `M${n(cx)} ${n(apex + 2)}L${n(cx)} ${n(bottom)}`
  return { opening, band, joints, planks, studs, hinges, meet }
}

/**
 * The mouth of a mine dug into an earth bank: a doorway of heavy timber
 * props, two posts and a lintel over them, black inside, with the next two
 * sets of props further in, each smaller, so the black reads as a tunnel
 * running on into the earth. `at` is the middle of its sill. Fill `opening`
 * INK; `timbers` PAPER with an INK edge and `grain` INK over them; stroke
 * `inner` PAPER about 1.6, its nearer frame heavier. (The first cut had thin
 * posts on a black mouth in a black bank, and at panel size it read as a
 * little white table on a hill.)
 */
export function mineMouth([x, y]: Pt, w = 40, h = 34) {
  const opening = `M${n(x - w / 2)} ${n(y)}L${n(x - w / 2 + 2)} ${n(y - h)}L${n(x + w / 2 - 2)} ${n(y - h)}L${n(x + w / 2)} ${n(y)}Z`
  const P = 7
  const timbers =
    `M${n(x - w / 2 - P)} ${n(y + 1)}L${n(x - w / 2 - P + 2)} ${n(y - h - 2)}L${n(x - w / 2 + 2)} ${n(y - h - 2)}L${n(x - w / 2)} ${n(y + 1)}Z` +
    `M${n(x + w / 2 + P)} ${n(y + 1)}L${n(x + w / 2 + P - 2)} ${n(y - h - 2)}L${n(x + w / 2 - 2)} ${n(y - h - 2)}L${n(x + w / 2)} ${n(y + 1)}Z` +
    `M${n(x - w / 2 - P - 8)} ${n(y - h)}L${n(x + w / 2 + P + 8)} ${n(y - h)}L${n(x + w / 2 + P + 7)} ${n(y - h - 10)}L${n(x - w / 2 - P - 7)} ${n(y - h - 10)}Z`
  const grain =
    gouge(x - w / 2 - P / 2, y - 6, x - w / 2 - P / 2 + 1, y - h + 4, 0.6) +
    gouge(x + w / 2 + P / 2, y - 6, x + w / 2 + P / 2 - 1, y - h + 4, 0.6) +
    gouge(x - w / 2 - P - 2, y - h - 5, x + w / 2 + P + 2, y - h - 5.4, 0.6)
  let inner = ''
  for (const k of [0.68, 0.42]) {
    const iw = w * k
    const ih = h * (0.3 + k * 0.62)
    const iy = y - 2 - (1 - k) * h * 0.18
    inner += `M${n(x - iw / 2)} ${n(iy)}L${n(x - iw / 2 + 1)} ${n(iy - ih)}L${n(x + iw / 2 - 1)} ${n(iy - ih)}L${n(x + iw / 2)} ${n(iy)}`
  }
  return { opening, timbers, grain, inner }
}

/**
 * A miner's pick and a spade, left leaning against the bank by the mine:
 * the hafts in PAPER with an INK edge (`hafts`, stroke), the iron in INK with
 * a PAPER edge (`iron`). `foot` is where they stand.
 */
export function minersTools([x, y]: Pt) {
  const hafts =
    `M${n(x)} ${n(y)}L${n(x - 12)} ${n(y - 58)}` + // the pick's haft, leaning back
    `M${n(x + 14)} ${n(y - 18)}L${n(x + 4)} ${n(y - 66)}` // the spade's, its blade down in the earth
  const iron =
    // the pick's head across the top of its haft, curved, pointed at both ends
    `M${n(x - 32)} ${n(y - 50)}Q${n(x - 14)} ${n(y - 70)} ${n(x + 6)} ${n(y - 60)}Q${n(x - 12)} ${n(y - 57)} ${n(x - 32)} ${n(y - 50)}Z` +
    // the spade's blade, square, in the ground at its foot
    `M${n(x + 10)} ${n(y - 22)}L${n(x + 20)} ${n(y - 20)}L${n(x + 21)} ${n(y + 2)}L${n(x + 9)} ${n(y)}Z` +
    // and its grip
    `M${n(x)} ${n(y - 66)}L${n(x + 8)} ${n(y - 64)}L${n(x + 7.6)} ${n(y - 61)}L${n(x - 0.4)} ${n(y - 63)}Z`
  return { hafts, iron }
}
