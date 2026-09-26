import { between, gouge, wedge, type Pt, type Rng } from '@/components/comics/linocut/carve'

/**
 * The shared parts of the three panels drawn from the two confessions at the
 * end of the book: "Lanyon's narrative" (Chapter 9), and "The experiment" and
 * "Losing control" (Chapter 10), moments 11 to 13 of the guide's timeline.
 * The people themselves come from ./people.tsx, as in every panel of this
 * text; what is here is what only these three need.
 *
 * In all three Hyde wears Henry Jekyll's clothes, because in all three the
 * change has come on him in them: at Lanyon's "his clothes ... were
 * enormously too large for him in every measurement: the trousers hanging on
 * his legs and rolled up to keep them from the ground, the waist of the coat
 * below his haunches, and the collar sprawling wide upon his shoulders"; in
 * Regent's Park "my clothes hung formlessly on my shrunken limbs". So he is
 * the same small man in the same big coat in each: the coat to his shins and
 * the collar standing wide. His trousers are rolled at the ankle only at
 * Lanyon's, where the text says so; the first night and in the park they fall
 * loose over his feet.
 */

/**
 * Hyde's head (HEAD_HYDE in ./people.tsx) with the lips drawn apart on an
 * open mouth, for Chapter 9: "staring with injected eyes, gasping with open
 * mouth". Same frame: facing right, centred on (0, 0).
 */
export const HEAD_HYDE_GASP =
  'M-8 23C-10 17 -15 13 -16 5C-17 -8 -9 -19 2 -19C10 -19 14 -15 15.5 -10L18.8 -6.4L16.6 -4L22.5 5.5L16.5 7L17.6 9.4L11.6 10.6L11.8 15.4L18.6 16.2C19 20 15.5 22.4 9 22.6L6.5 23Z'

/**
 * Dr Lanyon, as Chapter 2 gives him: "a hearty, healthy, dapper, red-faced
 * gentleman, with a shock of hair prematurely white". A full, round face in
 * the frame of the heads in ./people.tsx (facing right, centred on (0, 0)),
 * the mouth open, for "O God!" I screamed.
 */
export const HEAD_LANYON_CRY =
  'M-9 26C-11 20 -16 15 -17 6C-18.5 -9 -9 -20 3 -20C11.5 -20 16.5 -15 16.5 -9L16.8 -5.5L22.5 4L17 5.8L17.8 8.4L12.4 9.6L12.6 14.2L18 14.8C18.4 20 14.6 24 8.5 24.4L7 26Z'
/** "a shock of hair prematurely white", standing up off the crown. Fill with PAPER. */
export const WHITE_SHOCK =
  'M-17.4 6C-21.6 -2 -21.4 -11 -17 -17.4L-21.6 -22.4L-13.6 -22.6C-11.2 -28.4 -4.6 -31.8 1 -30L2.4 -36.4L7.4 -30.4C12.6 -31.6 17.4 -28.8 18.8 -24.2L25.4 -24.8L21 -18.6C22.6 -15.8 22.2 -12.6 19.6 -10.4L16 -12.4C12 -16.4 7 -17.8 1 -17.6C-6.6 -17.2 -12.4 -11 -13.4 -1.4Z'
/** Strands in the shock, cut in ink. */
export const WHITE_SHOCK_STRANDS =
  gouge(-15, -6, -9, -20, 0.6, 1.2) +
  gouge(-9, -19, 0, -27, 0.6, 1.2) +
  gouge(3, -22, 13, -26, 0.6, -0.8) +
  gouge(8, -19, 18, -18, 0.55, -0.6)
/**
 * His features in ink on the lit face, as the lamp-lit face of "Lanyon's
 * shock" (./lanyons-shock.tsx) is cut: the brow flung up, the fold of the
 * cheek, a line at the mouth. In the frame of HEAD_LANYON_CRY.
 */
export const LANYON_BROW = gouge(4.4, -10.4, 14.6, -8.6, 1.1, -1.4)
export const LANYON_LINES = 'M3.6 1.8Q5 8 8.2 13M14.2 8.4Q15.6 10 17.8 10.6'
/** The wide eye: a paper ring and an ink pupil, drawn over the head. */
export const LANYON_EYE: [number, number, number] = [9.6, -3.6, 2.8]

/**
 * An open hand, palm towards us, fingers up and spread apart, lit and cut in
 * paper, in its own frame with the wrist at (0, 0): the same hand Lanyon
 * holds up in "Lanyon's shock" (./lanyons-shock.tsx), so that it is his hand
 * in both. Fill with PAPER and edge in INK.
 */
export const PALM_HAND =
  'M-4 0C-4.8 -2.6 -5.2 -4.6 -5.8 -6.8L-9.6 -10C-10.8 -11 -9.8 -12.8 -8.2 -12L-5.2 -10L-5.8 -18C-5.8 -19.6 -3.6 -19.6 -3.4 -18L-2.6 -12.2L-2.4 -20.6C-2.4 -22.2 -0.2 -22.2 0 -20.6L0.6 -12.2L2.2 -19.2C2.4 -20.8 4.6 -20.6 4.4 -19L3.4 -11.6L5.8 -16.6C6.2 -18 8.2 -17.6 7.8 -16L5.6 -8.8C5 -5 4.4 -2.6 3.8 0Z'

/**
 * Rolled trouser cuffs, "rolled up to keep them from the ground": a thick
 * roll round the ankle, wider than the leg, for a leg ending at `at` and
 * running along `dir` (a unit vector down the leg). Fill with INK, and cut
 * its folds with `cuffCuts`.
 */
export function cuff(at: Pt, dir: Pt, w: number) {
  const nx = -dir[1]
  const ny = dir[0]
  const c: Pt = [at[0] - dir[0] * 7, at[1] - dir[1] * 7]
  const h = 5.5
  const p = (a: number, b: number) =>
    `${Math.round((c[0] + dir[0] * a + nx * b) * 10) / 10} ${Math.round((c[1] + dir[1] * a + ny * b) * 10) / 10}`
  return `M${p(-h, -w)}L${p(-h, w)}L${p(h, w + 1)}L${p(h, -w - 1)}Z`
}
export function cuffCuts(at: Pt, dir: Pt, w: number) {
  const nx = -dir[1]
  const ny = dir[0]
  let d = ''
  for (const a of [-2.4, 1.6]) {
    const cx = at[0] - dir[0] * (7 - a)
    const cy = at[1] - dir[1] * (7 - a)
    d += gouge(cx - nx * (w - 1), cy - ny * (w - 1), cx + nx * (w - 1), cy + ny * (w - 1), 0.6)
  }
  return d
}

/**
 * Floorboards seen from the room, paper boards with ink joints running to a
 * vanishing point, as in the reference counting-house. Fill with INK over a
 * PAPER floor.
 */
export function boards(r: Rng, W: number, H: number, top: number, vanish: Pt, every = 30): string {
  let d = ''
  const [vx, vy] = vanish
  for (let xt = -600; xt < W + 600; xt += every) {
    const xb = vx + (xt - vx) * ((H - vy) / (top - vy))
    // a joint that never crosses the floor would never print
    if (Math.max(xt, xb) < -10 || Math.min(xt, xb) > W + 10) continue
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(r, 0.3, 0.8))
      d += wedge(
        xt + (xb - xt) * t0,
        top + (H - top) * t0,
        xt + (xb - xt) * t1,
        top + (H - top) * t1,
        0.8 + t0 * 2.8,
        0.8 + t1 * 2.8,
      )
      t0 = t1 + between(r, 0.02, 0.07)
    }
  }
  for (let y = top + 1; y < top + 10; y += 3) d += gouge(0, y, W, y, 2.2 - (y - top) * 0.18)
  return d
}

/**
 * Wainscot panelling: upright cuts between the dado rail and the skirting,
 * wider where the light falls. Fill with PAPER over INK.
 */
export function wainscot(
  r: Rng,
  x0: number,
  x1: number,
  y0: number,
  y1: number,
  light: (x: number, y: number) => number,
): string {
  let d = ''
  for (let x = x0; x < x1; x += 9) {
    const L = light(x, (y0 + y1) / 2)
    d += wedge(x + between(r, -0.6, 0.6), y0, x + between(r, -0.6, 0.6), y1, 0.4, 0.8 + L * 3.2)
  }
  return d
}

/** A soft shadow under a foot or a chair leg: stacked gouges. Fill with INK. */
export function footShadow(cx: number, y: number, halfW: number) {
  let d = ''
  for (let k = 0; k < 4; k++) {
    const w = halfW * (1 - k * 0.18)
    d += gouge(cx - w, y + k * 3, cx + w, y + k * 3 + 0.4, 1.8 - k * 0.35)
  }
  return d
}

/**
 * A pool of light cleared on a wall round a lamp or a candle: the outline of
 * the pool with a hand-cut wobble, and the gouges where its edge was cut
 * outwards into the ink. Fill both with PAPER.
 */
export function lightPool(
  r: Rng,
  pool: { cx: number; cy: number; rx: number; ry: number },
): { pool: string; edge: string } {
  let d = ''
  let edge = ''
  for (let a = 0; a < 360; a += 5) {
    const t = (a * Math.PI) / 180
    const k = 1 + 0.035 * Math.sin(t * 5 + 1) + 0.025 * Math.sin(t * 11)
    const x = pool.cx + Math.cos(t) * pool.rx * k
    const y = pool.cy + Math.sin(t) * pool.ry * k
    d += `${a ? 'L' : 'M'}${Math.round(x * 10) / 10} ${Math.round(y * 10) / 10}`
    const out = between(r, 8, 24)
    const len = Math.hypot(Math.cos(t) * pool.rx, Math.sin(t) * pool.ry)
    edge += gouge(
      x - (Math.cos(t) * pool.rx * 6) / len,
      y - (Math.sin(t) * pool.ry * 6) / len,
      x + (Math.cos(t) * pool.rx * out) / len,
      y + (Math.sin(t) * pool.ry * out) / len,
      between(r, 1.2, 2.6),
    )
  }
  return { pool: d + 'Z', edge }
}

/** Drop every gouge in `cuts` that starts where `inside` is true: it would never print. */
export function dropInside(cuts: string, inside: (x: number, y: number) => boolean) {
  return cuts
    .split('M')
    .filter((c) => {
      if (!c) return false
      const [x, y] = c.split(/[ Q]/).map(Number)
      return !inside(x, y)
    })
    .map((c) => 'M' + c)
    .join('')
}
