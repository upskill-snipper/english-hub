import { between, gouge, gougeField, n, wedge, type Rng } from '@/components/comics/linocut/carve'

/**
 * The platform at Elsinore, cut once for the three panels of Act 1 that stand
 * on it or near it ("The Ghost on the battlements", "Hamlet follows the
 * Ghost", "The Ghost's command"), so the battlements are the same stone in
 * each. Pure functions returning path data, cached by the panels that call
 * them with their own seeds.
 *
 * The text gives little: "Elsinore. A platform before the Castle" (1.1), "The
 * platform" (1.4), "A more remote part of the Castle" (1.5), and of the place
 * only "the dreadful summit of the cliff That beetles o'er his base into the
 * sea" (1.4). So it is a walk of flagstones behind a crenellated parapet, the
 * plain stonework of a castle of the play's own time, on a cliff above the
 * sea. Nothing is taken from a film, a stage set or a picture of any real
 * castle.
 */

type Box = { x0: number; x1: number; y0: number; y1: number }

/**
 * The night sky: rows of ink-dark gouges that lighten towards `glowY` (a
 * horizon, or a light low in the sky), and a scatter of stars, each a small
 * cross of paper cuts. Fill both with PAPER over ink.
 */
export function nightSky(
  r: Rng,
  box: Box,
  light: (x: number, y: number) => number,
  stars: number,
  keepClear: (x: number, y: number) => boolean = () => false,
) {
  const sky = gougeField(r, box, light, { spacing: 6.4, len: [30, 110], gap: [10, 34], max: 2.4 })
  let starCuts = ''
  for (let i = 0, tries = 0; i < stars && tries < stars * 20; tries++) {
    const x = between(r, box.x0 + 8, box.x1 - 8)
    const y = between(r, box.y0 + 8, box.y1 - 20)
    if (keepClear(x, y)) continue
    const s = between(r, 1.6, 3.4)
    starCuts += gouge(x - s, y, x + s, y, 0.7) + gouge(x, y - s, x, y + s, 0.7)
    i++
  }
  return { sky, stars: starCuts }
}

/**
 * A crenellated parapet across the panel: merlons `merlon` wide with gaps
 * `gap` wide, their tops at `top`, the gaps down to `sill`, the wall down to
 * `foot`. Returns the wall's outline (fill INK), the cut texture of the stone
 * (fill PAPER), following `light`, and the joints of its courses (fill PAPER).
 */
export function parapet(
  r: Rng,
  W: number,
  {
    top,
    sill,
    foot,
    merlon = 48,
    gap = 30,
    start = -12,
  }: { top: number; sill: number; foot: number; merlon?: number; gap?: number; start?: number },
  light: (x: number, y: number) => number,
) {
  let wall = `M-10 ${foot}L-10 ${sill}`
  const merlons: [number, number][] = []
  for (let x = start; x < W + 10; x += merlon + gap) {
    merlons.push([x, x + merlon])
    wall += `L${n(x)} ${sill}L${n(x)} ${top}L${n(x + merlon)} ${top}L${n(x + merlon)} ${sill}`
  }
  wall += `L${W + 10} ${sill}L${W + 10} ${foot}Z`
  const texture = gougeField(r, { x0: 0, x1: W, y0: top + 3, y1: foot - 2 }, light, {
    spacing: 5.6,
    len: [10, 44],
    gap: [6, 18],
    max: 2.2,
  })
  // The courses of the stone and the joints between the blocks, cut only
  // where the light reaches them and wider as it grows: a grid of joints cut
  // evenly over the whole wall read as brickwork, and drew the eye from the
  // figures in front of it.
  let joints = ''
  const joint = (x0: number, y0: number, x1: number, y1: number) => {
    const L = light((x0 + x1) / 2, (y0 + y1) / 2)
    if (L > 0.16) joints += wedge(x0, y0, x1, y1, 0.4 + L * 1.6, 0.4 + L * 1.6)
  }
  for (let y = sill + 14, row = 0; y < foot - 4; y += 15, row++) {
    for (let x = -10; x < W + 10; x += 40) joint(x, y, x + 40, y + between(r, -0.4, 0.4))
    for (let x = (row % 2 ? 18 : 44) + between(r, -6, 6); x < W; x += between(r, 50, 70))
      joint(x, y - 15 + 1.4, x + between(r, -0.6, 0.6), y - 0.6)
  }
  for (const [x0, x1] of merlons) {
    const mid = (top + sill) / 2
    joint(x0 + 2, mid, x1 - 2, mid + between(r, -0.5, 0.5))
  }
  return { wall, texture, joints, merlons }
}

/**
 * The flagstones of the walk, paper with ink joints running to a vanishing
 * point and cross joints closing up with distance, from `top` to the foot of
 * the panel. Fill INK.
 */
export function flagstones(r: Rng, W: number, H: number, top: number, vx: number, every = 64) {
  let d = ''
  const vy = top - 240
  for (let xt = -900; xt < W + 900; xt += every) {
    const xb = vx + (xt - vx) * ((H - vy) / (top - vy))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(r, 0.4, 0.9))
      d += wedge(
        xt + (xb - xt) * t0,
        top + (H - top) * t0,
        xt + (xb - xt) * t1,
        top + (H - top) * t1,
        1 + t0 * 2.2,
        1 + t1 * 2.2,
      )
      t0 = t1 + between(r, 0.03, 0.08)
    }
  }
  for (let k = 1; k < 5; k++) {
    const t = Math.pow(k / 5, 1.4)
    const y = top + (H - top) * t
    let x = between(r, -30, 0)
    while (x < W) {
      const len = between(r, 60, 150)
      d += gouge(x, y + between(r, -0.6, 0.6), x + len, y + between(r, -0.6, 0.6), 0.9 + t * 1.4)
      x += len + between(r, 3, 12)
    }
  }
  // the shadow of the parapet along the back of the walk
  for (let y = top + 1; y < top + 12; y += 2.8)
    d += gouge(-10, y, W + 10, y, 2.2 - (y - top) * 0.15)
  return d
}
