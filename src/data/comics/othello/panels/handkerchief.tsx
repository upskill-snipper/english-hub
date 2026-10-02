import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { gouge, n } from '@/components/comics/linocut/carve'

/**
 * THE HANDKERCHIEF, cut once here so that it is the same cloth in every panel
 * that shows it: lying where it fell (Act 3, Scene 3), tucked at Iago's belt
 * while he swears his vow (3.3), and in any later panel that needs it (Bianca
 * throws it back in 4.1; Emilia tells where it went in 5.2). Import it from
 * here; never cut a second one.
 *
 * WHAT THE PLAY SAYS OF IT (the held edition, src/data/full-texts/othello.ts):
 * - "a handkerchief Spotted with strawberries in your wife's hand" (Iago,
 *   3.3), and Othello answers "I gave her such a one, 'twas my first gift".
 * - It is embroidered: Emilia means to "have the work ta'en out" (3.3), and
 *   Cassio asks Bianca to "Take me this work out" (3.4). Othello says "There's
 *   magic in the web of it" and that a sibyl "sew'd the work" (3.4).
 * - Desdemona calls it a "napkin" too (3.3): a small square of linen, "too
 *   little" to bind Othello's head.
 *
 * So it is a small square of white linen, cut in PAPER with an ink edge and a
 * hemmed border, worked with strawberries printed in the spot colour, each with
 * its cap of leaves cut in ink. The strawberries are set in a regular pattern,
 * the corners and the middle, so that they read as needlework. WHY (2 October
 * 2026): red spots scattered at random over a white cloth read, at a glance, as
 * spots of blood, in a play that ends in a bedchamber. A strawberry is drawn
 * as a fruit, with its leaves, never as a dot, and the cloth is never shown
 * crumpled in anyone's fist.
 */

export type P = [number, number]

/**
 * One worked strawberry, the point down, centred on (0, 0) about 8 units tall
 * at scale 1: the fruit in RED, its cap of three leaves and its stalk in INK.
 */
/**
 * The fruit: a rounded cone, its shoulders full and its top flat under the
 * cap. (A first cut dipped at the top between the shoulders and, at panel
 * size, the strawberries read as hearts.)
 */
const FRUIT =
  'M-3.5 -1.4C-3.9 1.2 -2.7 3.8 -0.9 5.6C-0.4 6 0.4 6 0.9 5.6C2.7 3.8 3.9 1.2 3.5 -1.4C2.4 -2.4 -2.4 -2.4 -3.5 -1.4Z'
/**
 * The cap: its leaves spread flat over the shoulders of the fruit, wider than
 * it, and a stalk. It is what makes the mark a strawberry at a glance;
 * without it a small red shape on white linen is only a spot.
 */
const CAP =
  'M-5 -0.6L-3 -2.2L-3.8 -3.8L-1.4 -3L0 -4.8L1.4 -3L3.8 -3.8L3 -2.2L5 -0.6L2.4 -1.2L0 -0.6L-2.4 -1.2Z' +
  'M-0.5 -4L-0.3 -7L0.5 -7L0.5 -4Z'

function berry(at: P, s: number, rot = 0, squash = 1) {
  return `translate(${n(at[0])} ${n(at[1])}) rotate(${n(rot)}) scale(${n(s)} ${n(s * squash)})`
}

/** Strawberries at the cloth's corners and in its middle, in the unit square. */
const PATTERN: P[] = [
  [0.2, 0.2],
  [0.8, 0.2],
  [0.5, 0.5],
  [0.2, 0.8],
  [0.8, 0.8],
]

function Berries({
  spots,
  s,
  rot = 0,
  squash = 1,
}: {
  spots: P[]
  s: number
  rot?: number
  squash?: number
}) {
  return (
    <>
      {spots.map((p) => (
        <g key={`${p[0]}-${p[1]}`} transform={berry(p, s, rot, squash)}>
          <path d={FRUIT} fill={RED} stroke={INK} strokeWidth={n(0.7 / s)} />
          <path d={CAP} fill={INK} />
        </g>
      ))}
    </>
  )
}

/**
 * The cloth lying on the ground where it fell, seen from above at an angle:
 * the unit square carried to the four corners `q` (near left, near right,
 * far right, far left), with soft edges, two folds where it lies rumpled, a
 * thick ink halo so the white linen reads on any ground, and the strawberries
 * of `PATTERN`. `s` is a strawberry's scale.
 */
export function HandkerchiefFallen({ q, s = 1.2 }: { q: [P, P, P, P]; s?: number }) {
  const [a, b, c, d] = q
  // A point in the unit square (u along the near edge, v away from us).
  const at = (u: number, v: number): P => {
    const near: P = [a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u]
    const far: P = [d[0] + (c[0] - d[0]) * u, d[1] + (c[1] - d[1]) * u]
    return [near[0] + (far[0] - near[0]) * v, near[1] + (far[1] - near[1]) * v]
  }
  const pt = (p: P) => `${n(p[0])} ${n(p[1])}`
  // The edges sag and lift a little, as a soft cloth lies.
  const edge = (p0: P, p1: P, bulge: number) => {
    const m: P = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2]
    const dx = p1[0] - p0[0]
    const dy = p1[1] - p0[1]
    const L = Math.hypot(dx, dy) || 1
    return `Q${pt([m[0] - (dy / L) * bulge, m[1] + (dx / L) * bulge])} ${pt(p1)}`
  }
  const cloth = `M${pt(a)}${edge(a, b, 1.6)}${edge(b, c, -1.2)}${edge(c, d, 1)}${edge(d, a, -1.4)}Z`
  // The hem, a little inside the edge.
  const h = [at(0.07, 0.08), at(0.93, 0.08), at(0.93, 0.92), at(0.07, 0.92)]
  const hem = `M${pt(h[0])}L${pt(h[1])}L${pt(h[2])}L${pt(h[3])}Z`
  const fold1 = at(0.36, 0.06)
  const fold1b = at(0.46, 0.6)
  const fold2 = at(0.64, 0.95)
  const fold2b = at(0.58, 0.55)
  const folds =
    gouge(fold1[0], fold1[1], fold1b[0], fold1b[1], 0.7, 0.6) +
    gouge(fold2[0], fold2[1], fold2b[0], fold2b[1], 0.6, -0.5)
  // Lying flat, the strawberries are foreshortened a little, never to a dot.
  const squash = Math.min(1, Math.max(0.7, Math.abs(d[1] - a[1]) / Math.abs(b[0] - a[0]) + 0.3))
  return (
    <g>
      <path d={cloth} fill={INK} stroke={INK} strokeWidth={7} strokeLinejoin="round" />
      <path d={cloth} fill={PAPER} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
      <path d={hem} fill="none" stroke={INK} strokeWidth={0.9} strokeDasharray="2.4 1.6" />
      <path d={folds} fill={INK} />
      <Berries spots={PATTERN.map(([u, v]) => at(u, v))} s={s} squash={squash} />
    </g>
  )
}

/**
 * The corner of the cloth hanging from a belt or a doublet where it is
 * tucked: a triangle of linen falling from the line `top` (two points along
 * the belt) to a point `tip`, with its hem and two strawberries, cut in PAPER
 * with an ink edge so it reads on a black figure.
 */
export function HandkerchiefTucked({ top, tip, s = 1 }: { top: [P, P]; tip: P; s?: number }) {
  const [p0, p1] = top
  const pt = (p: P) => `${n(p[0])} ${n(p[1])}`
  const mid = (u: P, v: P, k: number): P => [u[0] + (v[0] - u[0]) * k, u[1] + (v[1] - u[1]) * k]
  // The two sides bow out a little, as linen does when it hangs.
  const b1 = mid(p1, tip, 0.5)
  const b0 = mid(p0, tip, 0.5)
  const cloth =
    `M${pt(p0)}L${pt(p1)}` +
    `Q${pt([b1[0] + 2.4, b1[1]])} ${pt(tip)}` +
    `Q${pt([b0[0] - 1.6, b0[1]])} ${pt(p0)}Z`
  const h0 = mid(p0, tip, 0.18)
  const h1 = mid(p1, tip, 0.18)
  const top0: P = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2]
  const ht = mid(tip, top0, 0.14)
  const hem = `M${pt(h0)}L${pt(ht)}L${pt(h1)}`
  const c: P = [(p0[0] + p1[0] + tip[0]) / 3, (p0[1] + p1[1] + tip[1]) / 3]
  const spots: P[] = [mid(c, tip, 0.4), mid(c, top0, 0.3)]
  const fold = gouge(c[0] - 1, c[1] - 2, tip[0] - 0.6, tip[1] - 3, 0.5, 0.4)
  return (
    <g>
      {/* an ink halo, so the linen reads on any ground, dark or light */}
      <path d={cloth} fill={INK} stroke={INK} strokeWidth={4} strokeLinejoin="round" />
      <path d={cloth} fill={PAPER} stroke={INK} strokeWidth={1.1} strokeLinejoin="round" />
      <path d={hem} fill="none" stroke={INK} strokeWidth={0.8} strokeDasharray="2 1.4" />
      <path d={fold} fill={INK} />
      <Berries spots={spots} s={s} />
    </g>
  )
}

/**
 * The cloth held up by one corner, hanging in folds below the hand: for a
 * figure who holds it out or up. `at` is the corner in the hand; the cloth
 * hangs `len` below it, swinging `swing` units sideways at its lowest point.
 */
export function HandkerchiefHanging({
  at,
  len = 30,
  swing = 0,
  s = 1,
  plain = false,
}: {
  at: P
  len?: number
  swing?: number
  s?: number
  /**
   * Another handkerchief, with no strawberries: the one Desdemona offers in
   * 3.4 ("Lend me thy handkerchief." "Here, my lord." "That which I gave
   * you."), which is not the one he asks for.
   */
  plain?: boolean
}) {
  const [x, y] = at
  const w = len * 0.56
  const pt = (p: P) => `${n(p[0])} ${n(p[1])}`
  // Held by one corner, a square of linen hangs as a long diamond: the two
  // side corners drop a little over halfway down and the far corner hangs
  // lowest. (A rounded shape with the bottom full read at panel size as a
  // purse.)
  const sl: P = [x - w * 0.5 + swing * 0.6, y + len * 0.56]
  const sr: P = [x + w * 0.5 + swing * 0.6, y + len * 0.62]
  const low: P = [x + swing, y + len]
  const cloth =
    `M${pt([x - 1.2, y])}Q${pt([x - w * 0.36, y + len * 0.22])} ${pt(sl)}` +
    `Q${pt([sl[0] + w * 0.12, sl[1] + len * 0.24])} ${pt(low)}` +
    `Q${pt([sr[0] - w * 0.06, sr[1] + len * 0.2])} ${pt(sr)}` +
    `Q${pt([x + w * 0.34, y + len * 0.26])} ${pt([x + 1.2, y])}Z`
  // Long folds falling from the corner in the hand.
  const folds =
    gouge(x - 0.4, y + 3, x - w * 0.16 + swing * 0.8, y + len * 0.84, 0.75, 0.5) +
    gouge(x + 0.6, y + 4, x + w * 0.16 + swing * 0.9, y + len * 0.8, 0.65, -0.4)
  const hem =
    `M${pt([sl[0] + 2, sl[1] + 0.6])}Q${pt([sl[0] + w * 0.14, sl[1] + len * 0.2])} ${pt([low[0], low[1] - 2.4])}` +
    `Q${pt([sr[0] - w * 0.08, sr[1] + len * 0.16])} ${pt([sr[0] - 2, sr[1] + 0.4])}`
  const spots: P[] = [
    [x - w * 0.24 + swing * 0.6, y + len * 0.5],
    [x + w * 0.24 + swing * 0.6, y + len * 0.56],
    [x + swing * 0.8, y + len * 0.78],
  ]
  return (
    <g>
      <path d={cloth} fill={PAPER} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
      <path d={folds} fill={INK} />
      <path d={hem} fill="none" stroke={INK} strokeWidth={0.8} strokeDasharray="2 1.4" />
      {!plain && <Berries spots={spots} s={s} />}
    </g>
  )
}
