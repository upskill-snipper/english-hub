import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  ribbon,
  rng,
  wedge,
  type Pt,
  type Rng,
} from '@/components/comics/linocut/carve'

/**
 * THE GARDEN OF THE CASTLE ON CYPRUS, cut once for the three moments the
 * guide sets in it, all in Act 3, Scene 3: "The temptation begins", "The
 * handkerchief is dropped" and "The vow of revenge". It is one garden seen
 * from three places, so a student knows it again: the same castle wall of
 * dressed stone with its battlements and its arched door, the same dark
 * cypresses, the same clipped hedge and gravel walks, and, from the far end,
 * the parapet over the sea.
 *
 * THE CASTLE'S OUTSIDE TOO. The same tools cut the castle front for the
 * panels set "Before the Castle" ("The magic in the handkerchief", "The
 * trance and the blow"), the harbour of "Storm and reunion on Cyprus" and the
 * evening sky of "The accusation", so the castle a student sees from the
 * harbour, the forecourt and the garden is one castle. Several panels by
 * several hands import from here: a change to any function's output changes
 * all of them. Preview every panel that imports it (grep for './garden')
 * before changing one, and prefer adding a new function to changing an old.
 *
 * WHAT THE PLAY SAYS, and so what is drawn (the held edition,
 * src/data/full-texts/othello.ts, Project Gutenberg #1531):
 * - "Cyprus. The Garden of the Castle." The play names the garden and no
 *   more, so it is a walled castle garden of the island: gravel walks, a
 *   clipped hedge and cypress trees, which grow all over Cyprus; nothing in
 *   it is taken from a film or stage production.
 * - It is day. Before the scene, Othello "will be walking on the works"
 *   (3.2), and in it Desdemona calls him in: "Your dinner, and the generous
 *   islanders By you invited, do attend your presence." So the sky is the
 *   bright sky of the middle of the day, the paper left almost bare.
 * - The castle stands over the harbour, where the ships came in after the
 *   storm (2.1), so from the garden's far end the sea shows over a parapet.
 *
 * Seeds are each panel's own, passed in, and recorded in its docblock.
 */

export const W = 860
export const H = 340

export type Box = { x0: number; x1: number; y0: number; y1: number }
export type Light = (x: number, y: number) => number

/**
 * A bright day sky: the paper all but bare, scored with long, thin ink lines
 * where the block was left uncut, closer together towards the top. Fill with
 * INK over PAPER.
 */
export function daySky(seed: number, box: Box, dark: Light = (_x, y) => 0.5 - y / 600): string {
  const r = rng(seed)
  let d = ''
  for (let y = box.y0 + 4; y < box.y1; y += between(r, 6.5, 9)) {
    let x = box.x0 + between(r, -40, 0)
    while (x < box.x1) {
      const len = between(r, 30, 120)
      const D = clamp(dark(x + len / 2, y))
      if (r() < 0.25 + D * 0.7)
        d += gouge(
          x,
          y + between(r, -0.6, 0.6),
          x + len,
          y + between(r, -0.6, 0.6),
          0.35 + D * 1.3,
          between(r, -0.5, 0.5),
        )
      x += len + between(r, 10, 70) * (1.2 - D)
    }
  }
  return d
}

/**
 * Long, thin clouds drawn out across a bright sky like the veins in a slab of
 * marble: ink ribbons that swell and taper, each with a fine vein or two
 * splitting from it. For the "marble heaven" Othello swears by in the vow
 * (3.3). `avoid` is a circle the veins stay out of (the sun). Fill with INK.
 */
export function marbleVeins(
  seed: number,
  box: Box,
  count: number,
  avoid?: { c: Pt; r: number },
): string {
  const r = rng(seed)
  let d = ''
  const clear = (x: number, y: number) =>
    !avoid || Math.hypot(x - avoid.c[0], y - avoid.c[1]) > avoid.r
  const vein = (pts: Pt[], w: number) => {
    // Break the vein where it would cross the clear circle.
    let run: Pt[] = []
    const flush = () => {
      if (run.length > 3) d += ribbon(run, w, 0.6)
      run = []
    }
    for (const p of pts) {
      if (clear(p[0], p[1])) run.push(p)
      else flush()
    }
    flush()
  }
  for (let i = 0; i < count; i++) {
    const y0 = box.y0 + ((box.y1 - box.y0) * (i + 0.5)) / count + between(r, -6, 6)
    const x0 = box.x0 + between(r, -60, (box.x1 - box.x0) * 0.35)
    const len = between(r, 220, 480)
    const tilt = between(r, -0.08, 0.05)
    const amp = between(r, 3, 7)
    const ph = between(r, 0, 6)
    const pts: Pt[] = []
    for (let k = 0; k <= 30; k++) {
      const x = x0 + (len * k) / 30
      pts.push([x, y0 + (x - x0) * tilt + amp * Math.sin((x - x0) / between(r, 50, 58) + ph)])
    }
    vein(pts, between(r, 3, 7))
    // A finer vein splitting off, and running on beside it.
    const k0 = Math.floor(between(r, 6, 16))
    const side = r() < 0.5 ? -1 : 1
    const drift = between(r, 0.5, 0.9)
    const branch: Pt[] = []
    for (let k = k0; k <= Math.min(30, k0 + 12); k++) {
      const [x, y] = pts[k]
      branch.push([x, y + side * (k - k0) * drift])
    }
    vein(branch, between(r, 1.2, 2.2))
  }
  return d
}

/**
 * A wall of dressed stone, inked, with gouged courses that follow the light
 * and the mortar joints cut between them. Fill both with PAPER.
 */
export function stoneCourses(seed: number, box: Box, light: Light, course = 22) {
  const r = rng(seed)
  const cuts = gougeField(r, box, light, { spacing: 5.8, len: [12, 44], gap: [5, 16], max: 3.2 })
  let joints = ''
  let row = 0
  for (let y = box.y1 - course; y > box.y0 + 4; y -= course, row++) {
    // The bed joints print where the light reaches them and are lost where it does not.
    let x = box.x0
    while (x < box.x1) {
      const len = between(r, 30, 90)
      const L = light(x + len / 2, y)
      if (L > 0.12)
        joints += wedge(
          x,
          y + between(r, -0.6, 0.6),
          x + len,
          y + between(r, -0.6, 0.6),
          0.5 + L * 1.4,
          0.5 + L * 1.4,
        )
      x += len
    }
    let hx = box.x0 + (row % 2 ? 14 : 38) + between(r, -5, 5)
    while (hx < box.x1 - 4) {
      const L = light(hx, y + course / 2)
      if (L > 0.1)
        joints += wedge(hx, y + 1, hx + between(r, -0.8, 0.8), y + course - 1, 0.8 + L, 0.8 + L)
      hx += between(r, 34, 52)
    }
  }
  return { cuts, joints }
}

/**
 * The battlements along the top of a wall from x0 to x1: merlons `w` wide
 * with gaps of `gap`, `h` tall above `top`. The path is the wall's outline
 * from its top down to `bottom`, so it can be inked as one shape.
 */
export function battlemented(
  x0: number,
  x1: number,
  top: number,
  bottom: number,
  w = 22,
  gap = 14,
  h = 14,
): string {
  let d = `M${n(x0)} ${n(bottom)}L${n(x0)} ${n(top - h)}`
  let x = x0
  let up = true
  while (x < x1) {
    const nx = Math.min(x + (up ? w : gap), x1)
    d += `L${n(nx)} ${n(top - (up ? h : 0))}`
    if (nx < x1) d += `L${n(nx)} ${n(top - (up ? 0 : h))}`
    x = nx
    up = !up
  }
  return d + `L${n(x1)} ${n(bottom)}Z`
}

/** An arched opening from x0 to x1, its springing at `spring` and its sill at `sill`. */
export function archway(x0: number, x1: number, spring: number, sill: number): string {
  const r = (x1 - x0) / 2
  return `M${n(x0)} ${n(sill)}L${n(x0)} ${n(spring)}A${n(r)} ${n(r)} 0 0 1 ${n(x1)} ${n(spring)}L${n(x1)} ${n(sill)}Z`
}

/**
 * The voussoirs of an arch: the wedge-shaped stones round its head, as ink
 * lines radiating from the centre of the arch, for a paper surround.
 */
export function voussoirs(x0: number, x1: number, spring: number, depth = 12, count = 9): string {
  const cx = (x0 + x1) / 2
  const r = (x1 - x0) / 2
  let d = ''
  for (let i = 0; i <= count; i++) {
    const a = Math.PI + (Math.PI * i) / count
    const c = Math.cos(a)
    const s = Math.sin(a)
    d += `M${n(cx + c * r)} ${n(spring + s * r)}L${n(cx + c * (r + depth))} ${n(spring + s * (r + depth))}`
  }
  return d
}

/**
 * A cypress: a tall, narrow spire of dark foliage on a short trunk, `h` tall
 * from its foot at (x, base) and `w` across at its widest. `body` is inked;
 * `cuts`, filled with PAPER, are the short upward strokes of its sprays,
 * thicker on the side the light comes from (`lit`: -1 left, 1 right).
 */
export function cypress(
  seed: number,
  x: number,
  base: number,
  h: number,
  w: number,
  lit: 1 | -1 = -1,
) {
  const r = rng(seed)
  const top = base - h
  const foot = base - h * 0.06
  const half = w / 2
  const body =
    `M${n(x - half * 0.55)} ${n(foot)}` +
    `C${n(x - half * 1.08)} ${n(foot - h * 0.3)} ${n(x - half * 0.9)} ${n(top + h * 0.4)} ${n(x - half * 0.3)} ${n(top + h * 0.12)}` +
    `Q${n(x - 1)} ${n(top - 2)} ${n(x + 0.6)} ${n(top)}` +
    `Q${n(x + 2)} ${n(top + h * 0.05)} ${n(x + half * 0.34)} ${n(top + h * 0.13)}` +
    `C${n(x + half * 0.92)} ${n(top + h * 0.42)} ${n(x + half * 1.06)} ${n(foot - h * 0.3)} ${n(x + half * 0.55)} ${n(foot)}Z` +
    `M${n(x - 2.4)} ${n(foot - 2)}L${n(x - 3)} ${n(base)}L${n(x + 3)} ${n(base)}L${n(x + 2.4)} ${n(foot - 2)}Z`
  let cuts = ''
  for (let y = top + 10; y < foot - 6; y += between(r, 5, 8)) {
    const t = (y - top) / (foot - top)
    const span = half * Math.min(1, Math.sin(Math.PI * Math.min(1, t * 0.95 + 0.06))) * 0.9
    const k = Math.round(1 + span / 6)
    for (let i = 0; i < k; i++) {
      const u = (i + 0.5) / k
      const side = (u - 0.5) * 2
      const xx = x + side * span * 0.8 + between(r, -1.4, 1.4)
      const L = clamp(0.35 + side * lit * 0.6)
      if (r() < 0.25 + L * 0.65)
        cuts += gouge(
          xx,
          y + 2.2,
          xx + side * 1.6 + between(r, -0.6, 0.6),
          y - 3.4,
          0.25 + L * 0.85,
          between(r, -0.4, 0.4),
        )
    }
  }
  return { body, cuts }
}

/**
 * A clipped hedge along the ground from x0 to x1: its top at `top`, rounded
 * at the ends and lumpy along the crown, its foot at `base`. `body` is
 * inked; `cuts`, filled with PAPER, are the leaves catching the light on its
 * crown and its face.
 */
export function hedge(seed: number, x0: number, x1: number, top: number, base: number) {
  const r = rng(seed)
  let crown = ''
  for (let x = x0 + 8; x < x1 - 8; x += 10)
    crown += `Q${n(x + 5)} ${n(top - between(r, 2, 4))} ${n(x + 10)} ${n(top)}`
  const body =
    `M${n(x0)} ${n(base)}L${n(x0)} ${n(top + 8)}Q${n(x0)} ${n(top)} ${n(x0 + 8)} ${n(top)}` +
    crown +
    `L${n(x1 - 8)} ${n(top)}Q${n(x1)} ${n(top)} ${n(x1)} ${n(top + 8)}L${n(x1)} ${n(base)}Z`
  let cuts = ''
  for (let y = top + 3; y < base - 2; y += between(r, 5, 7)) {
    const L = clamp(1 - ((y - top) / (base - top)) * 1.1)
    let x = x0 + between(r, 2, 8)
    while (x < x1 - 4) {
      if (r() < 0.2 + L * 0.7)
        cuts += gouge(x, y, x + between(r, 3.6, 7), y - between(r, 0.5, 2), 0.35 + L * 1)
      x += between(r, 8, 16)
    }
  }
  return { body, cuts }
}

/**
 * A gravel walk in daylight: paper, flecked with small ink stones that close
 * up and shrink with distance, and a shadow band where it meets the hedge or
 * wall at `top`. Fill with INK over PAPER.
 */
export function gravel(seed: number, box: Box, shade: Light = () => 0): string {
  const r = rng(seed)
  let d = ''
  // Kept sparse: the walk is a third of every garden panel's width, and a
  // close fleck here doubled the weight of the plate for no gain at phone width.
  for (let y = box.y0 + 3; y < box.y1; ) {
    const t = (y - box.y0) / (box.y1 - box.y0)
    let x = box.x0 + between(r, 0, 16)
    while (x < box.x1) {
      const S = clamp(shade(x, y))
      if (r() < 0.3 + S * 0.6) {
        const len = between(r, 2, 5.6) * (0.6 + t)
        d += gouge(
          x,
          y + between(r, -1, 1),
          x + len,
          y + between(r, -1, 1),
          0.4 + t * 0.6 + S * 0.8,
        )
      }
      x += between(r, 12, 30) * (0.7 + t * 0.6) * (1 - S * 0.5)
    }
    y += 3.6 + t * 6
  }
  for (let y = box.y0; y < box.y0 + 9; y += 2.4)
    d += gouge(box.x0, y, box.x1, y + between(r, -0.4, 0.4), 1.6 - (y - box.y0) * 0.16)
  return d
}

/**
 * The sea seen from above the harbour in daylight: ink strokes on paper,
 * long and fine far off, shorter and heavier near the shore. Fill with INK.
 */
export function seaLines(seed: number, box: Box, glitter?: number): string {
  const r = rng(seed)
  let d = ''
  for (let y = box.y0 + 1.5; y < box.y1; ) {
    const t = (y - box.y0) / (box.y1 - box.y0)
    let x = box.x0 + between(r, -20, 0)
    while (x < box.x1) {
      const len = between(r, 14, 60) * (1.2 - t * 0.5)
      // Under the sun the water glitters: the block is cut almost clean there.
      const lit =
        glitter === undefined ? 0 : clamp(1 - Math.abs(x + len / 2 - glitter) / (26 + t * 40))
      if (r() < 0.82 - lit * 0.7)
        d += gouge(
          x,
          y,
          x + len,
          y + between(r, -0.4, 0.4),
          (0.7 + t * 1.2) * (1 - lit * 0.6),
          between(r, -0.4, 0.4),
        )
      x += len + between(r, 4, 16)
    }
    y += 2.4 + t * 2.8
  }
  return d
}

/** A distant headland on the sea's horizon, from x0 to x1: a low dark hump. Fill with INK. */
export function headland(x0: number, x1: number, horizon: number, h: number): string {
  const span = x1 - x0
  return (
    `M${n(x0)} ${n(horizon)}C${n(x0 + span * 0.2)} ${n(horizon - h * 0.7)} ${n(x0 + span * 0.35)} ${n(horizon - h)} ${n(x0 + span * 0.55)} ${n(horizon - h * 0.95)}` +
    `C${n(x0 + span * 0.75)} ${n(horizon - h * 0.9)} ${n(x0 + span * 0.85)} ${n(horizon - h * 0.4)} ${n(x1)} ${n(horizon)}Z`
  )
}

/**
 * A stone parapet from x0 to x1, from its coping at `top` down to `base`:
 * inked, with a paper coping line, its joints cut, and a band of light along
 * the coping. Returns the outline and the paper cuts.
 */
export function parapet(seed: number, x0: number, x1: number, top: number, base: number) {
  const r = rng(seed)
  const body = `M${n(x0)} ${n(base)}L${n(x0)} ${n(top)}L${n(x1)} ${n(top)}L${n(x1)} ${n(base)}Z`
  let cuts = gouge(x0, top + 3, x1, top + 3, 1.5) + gouge(x0, top + 7.5, x1, top + 7.5, 0.7)
  let x = x0 + between(r, 10, 30)
  while (x < x1 - 6) {
    cuts += wedge(x, top + 10, x + between(r, -0.6, 0.6), base - 2, 1.1, 1.1)
    x += between(r, 30, 46)
  }
  const mid = (top + 10 + base) / 2
  x = x0 + between(r, 0, 20)
  while (x < x1 - 10) {
    cuts += wedge(x, mid, x + 30, mid + between(r, -0.5, 0.5), 0.9, 0.9)
    x += between(r, 36, 60)
  }
  return { body, cuts }
}

/** A soft shadow cast on the gravel: rows of ink strokes, widest in the middle. Fill with INK. */
export function castShadow(seed: number, cx: number, y: number, halfW: number, rows = 4): string {
  const r = rng(seed)
  let d = ''
  for (let k = 0; k < rows; k++) {
    const w = halfW * (1 - k * 0.16)
    d += gouge(
      cx - w + between(r, -2, 2),
      y + k * 2.8,
      cx + w + between(r, -2, 2),
      y + k * 2.8 + 0.3,
      1.9 - k * 0.32,
    )
  }
  return d
}

/** The stones of a wall seen end on, for the reveal of a door or an arch: horizontal paper cuts. */
export function reveal(r: Rng, x0: number, x1: number, y0: number, y1: number, every = 11): string {
  let d = ''
  for (let y = y0 + every / 2; y < y1; y += every)
    d += gouge(x0 + 1, y + between(r, -0.6, 0.6), x1 - 1, y, 0.8)
  return d
}
