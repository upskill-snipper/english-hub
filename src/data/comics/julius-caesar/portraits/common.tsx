import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  deg,
  gouge,
  n,
  ribbon,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'

import { inside } from '../../jekyll-and-hyde/portraits/common'
import { ear, spline, type SP } from '../../the-merchant-of-venice/portraits/common'

/**
 * What the Julius Caesar portraits share.
 *
 * The block, the cut ground behind a sitter, the paper rule, the outline and
 * placing helpers, the hand with its fingers kept apart, the ear, the man's
 * head and the woman's head are the Shakespeare portraits' own (Romeo and
 * Juliet, Much Ado About Nothing, The Merchant of Venice), re-exported here
 * through ../../the-merchant-of-venice/portraits/common.tsx rather than
 * copied: a second copy of a helper is a copy that drifts, and one hand
 * cutting all the plays keeps the site one artist. Only what this play needs
 * beyond them is defined below.
 *
 * THE LOOK OF EACH PERSON is the figure kit's (../panels/people.tsx), whose
 * docblock gives the lines of the play for it, so a student meets the same
 * Roman in the gallery as in the story: Caesar lined, in the laurel wreath,
 * his hair cropped and combed forward; Brutus clean-shaven, his thick dark
 * hair combed forward, his "sad brows" drawn up towards the nose; Cassius
 * narrow-headed and long in the jaw, his hair receding; Antony young, with
 * thick curling hair; Decius with his hair worn longer, swept back to a lock
 * at the nape; Octavius young and beardless, his hair cropped, never curled;
 * Lepidus slight and balding; Calpurnia under her palla; Portia bareheaded,
 * her hair bound at the nape; Lucius a boy; the citizens in their tunics,
 * the cobbler in his felt cap. The men's heads are every Shakespeare
 * portrait's man's head (MAN_HEAD) or, for the young, the youth's head here
 * (YOUTH_HEAD); every woman's head is WOMAN_HEAD.
 *
 * AS THE PLAY DESCRIBES THEM, AND NO FURTHER. Every portrait is drawn from
 * the held edition (src/data/full-texts/julius-caesar.ts, Project Gutenberg
 * #1522), and its docblock quotes the lines each detail comes from.
 * Shakespeare describes very few of these people, and almost everything he
 * gives is said by someone else: Cassius's "lean and hungry look" is
 * Caesar's, Caesar's deaf ear his own, Calpurnia's pale cheek Brutus's,
 * Antony's red eyes a citizen's. Where the play gives no looks, the sitter is
 * drawn plainly in the dress of the time and the markers point only at what
 * the play does say; the card's small print says so.
 *
 * THE DRESS IS PLAIN ON PURPOSE: the ordinary dress of Rome in 44 BC, where
 * and when the play is set, as the kit cuts it. A man of rank in public wears
 * the toga, its roll of cloth drawn over the near shoulder and down across
 * the chest; a man at home a loose robe; a general at Philippi a plain
 * cuirass with a cloak from the shoulders; a married woman the stola, and
 * Calpurnia, as the kit always draws her, the palla drawn over her hair; a
 * working man or a servant boy a tunic. Everything is in ink, as every figure
 * in the panels is, its folds cut in paper. Nothing comes from a film,
 * television or stage production.
 *
 * NEVER DRAWN, in any portrait (the rules in full are in ../index.ts and the
 * kit). No wound, no blood and no blade at a body; no sword drawn at all.
 * Caesar is drawn alive and whole. Portia's wound and Portia's death are
 * never drawn or pointed at, and no fire is drawn near her. Cassius and
 * Brutus are drawn as they live, never at the end. The citizens are ordinary
 * Romans, never a caricature, and no marker is a line of abuse, whoever in
 * the play speaks it. No hand is raised: every hand here is held low, laid on
 * the breast, folded, fallen across the strings or closed round what it
 * holds, and every finger is cut apart from the next.
 *
 * RED IS NEVER ON A MOUTH, A CHIN OR A HAND. A red mark near a mouth reads at
 * a glance as blood (it was caught twice in the last texts: Hyde's anger, and
 * Juliet's lips beside the vial). Antony's red eyes are a citizen's words and
 * are printed on the rims of the eye only. The markers' red lines are led to
 * their features round the mouth and chin, never across them: Antony's
 * "orator" line stops in the air before his lips, and Portia's, Calpurnia's
 * and Decius's come up to the cheek from behind the jaw.
 *
 * Every figure is drawn facing right in its own 0..240 by 0..332 frame and
 * placed with `placing`; one that faces left is flipped.
 */

export {
  capsule,
  ear,
  Hand,
  handPoint,
  MAN_EAR,
  MAN_HEAD,
  ManBrow,
  ManEye,
  ManNoseAndMouth,
  NeckShadow,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  WOMAN_EAR,
  WOMAN_EYE,
  WOMAN_HEAD,
  WomanFace,
  WomanNeckShadow,
  type Digit,
  type SP,
} from '../../the-merchant-of-venice/portraits/common'

/** A value computed once, on first use, and kept: a drawing never changes. */
export function once<T>(make: () => T): () => T {
  let value: T | undefined
  return () => {
    if (value === undefined) value = make()
    return value
  }
}

/** A point carried through a rotation of `a` degrees about (cx, cy). */
export function turn(cx: number, cy: number, a: number) {
  const r = deg(a)
  const c = Math.cos(r)
  const s = Math.sin(r)
  return (x: number, y: number): Pt => [
    cx + (x - cx) * c - (y - cy) * s,
    cy + (x - cx) * s + (y - cy) * c,
  ]
}

// ── Heads ───────────────────────────────────────────────────────────────────
//
// Every head is a profile facing right in the 0..240 by 0..332 frame, with
// the eye near (155, 100) and the ear near (104, 124), as every Shakespeare
// portrait draws it.

/**
 * The youth's head (the kit's HEAD_YOUTH, at the size of a portrait): Antony
 * and Octavius. Smooth, the nose and chin soft, the jaw short.
 */
export const YOUTH_PTS: SP[] = [
  [68, 228],
  [61, 200],
  [52, 174],
  [45, 146],
  [45, 108],
  [57, 72],
  [81, 47],
  [112, 35],
  [141, 37],
  [158, 51],
  [165, 70],
  [168.5, 88],
  [165.5, 98, 1],
  [172, 110],
  [180, 123],
  [178.5, 128.5],
  [170.5, 131.5, 1],
  [172, 138],
  [167.5, 142.5, 1],
  [170.5, 146.5],
  [166.5, 152.5, 1],
  [170, 162],
  [167.5, 173],
  [156, 181],
  [140, 184],
  [133, 192],
  [131, 210],
  [133, 228],
]
export const YOUTH_HEAD = spline(YOUTH_PTS)
/** The same head speaking: the lips parted, the gap filled by YOUTH_MOUTH. */
export const YOUTH_HEAD_OPEN = spline([
  ...YOUTH_PTS.slice(0, 17),
  [172, 138],
  [168, 142, 1],
  [160, 145.5, 1],
  [168.5, 150.5, 1],
  [170.5, 154],
  [167, 158.5, 1],
  [170.5, 167],
  [167.5, 177],
  [156, 184],
  [140, 186],
  [133, 193],
  [131, 210],
  [133, 228],
])
export const YOUTH_MOUTH = 'M168.2 141.6L160 145.5L168.8 151Z'
export const YOUTH_EAR = ear(103, 124)

/** The youth's eye: open and level, or shut in sleep (Lucius); `brow` sets the brow's weight. */
export function YouthEye({
  look = 'open',
  brow = 2.6,
}: {
  look?: 'open' | 'shut' | 'down'
  brow?: number
}) {
  return (
    <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
      {look === 'open' && (
        <>
          <path d="M146.5 97Q154.5 93 163 97.5" strokeWidth={2.2} />
          <path d="M148 102.5Q155 105 161.5 101.5" strokeWidth={1.1} />
          <circle cx={155.6} cy={99.4} r={2.7} fill={INK} stroke="none" />
        </>
      )}
      {look === 'down' && (
        <>
          <path d="M146.5 98.5Q154.5 100 162.5 98" strokeWidth={2.4} />
          <path d="M150.6 100A3 2.6 0 0 0 156.6 100Z" fill={INK} stroke="none" />
          <path d="M148 104Q155 106.5 161 103" strokeWidth={1} />
        </>
      )}
      {look === 'shut' && (
        <>
          <path d="M146.5 99Q154.5 103 162.5 99.5" strokeWidth={2.3} />
          <path
            d="M148.6 100.6L147.6 104M152.4 101.8L152 105.4M156.4 101.8L156.8 105.4M160.2 100.6L161.4 103.8"
            strokeWidth={0.9}
          />
        </>
      )}
      <path d="M144 86.5Q154 83 165.5 87" strokeWidth={brow} />
    </g>
  )
}

/** The youth's nostril, mouth (closed, or parted with YOUTH_HEAD_OPEN) and the soft chin. */
export function YouthNoseAndMouth({ open = false }: { open?: boolean }) {
  return (
    <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
      <path d="M174.5 126C170.5 123.5 170.6 118.5 175.6 117.5" strokeWidth={1.4} />
      {open ? (
        <path d={YOUTH_MOUTH} fill={INK} stroke="none" />
      ) : (
        <path d="M167.4 142.6L159.6 143.4" strokeWidth={1.7} />
      )}
      <path d="M168.5 152.5C166 154 163.5 154 161.5 153" strokeWidth={0.9} />
      <path d="M163 122Q158 130 159.5 140" strokeWidth={0.9} />
    </g>
  )
}

/** The line of a young jaw, and one row of shadow under it. */
export const YOUTH_JAW = 'M167 176C150 184 132 182 120 170C115 162 112 152 110 144'

/**
 * Shadow on the back of the neck and under the skull, turned from the light:
 * broken arcs of ink, as on Scrooge's portrait. Draw inside the head's clip.
 */
export function napeShade(seed: number, cx = 150, cy = 118, from = 70, to = 130): string {
  const r = rng(seed)
  let d = ''
  for (let rad = from; rad < to; rad += 3.4)
    d += arcDashes(r, cx, cy, rad, deg(110), deg(168), [8, 22], [2, 5])
  return d
}

/**
 * The lines of age, as the kit cuts Caesar's (CAESAR_LINES) at the size of a
 * portrait: the fold from the nose to the mouth, the cheek a little fallen,
 * crow's feet at the eye and lines across the forehead. For MAN_HEAD.
 */
export function ageLines(seed: number, forehead = 3): string {
  const r = rng(seed)
  let d = ''
  for (let i = 0; i < forehead; i++) {
    const y = 64 + i * 7.5
    d += `M${n(141 + between(r, -1, 1))} ${n(y + 1)}Q${n(151)} ${n(y - 2.2)} ${n(161 + between(r, -1, 1))} ${n(y + 1.4)}`
  }
  for (let i = 0; i < 3; i++)
    d += `M${n(144.5)} ${n(98 + i * 3.6)}L${n(137 - between(r, 0, 2))} ${n(94 + i * 5.2)}`
  for (let rad = 14; rad < 26; rad += 3.8)
    d += arcDashes(r, 142, 112, rad, deg(62), deg(132), [8, 18], [2, 5])
  return d
}

/**
 * Short hair, cut as strokes scattered through the hair's outline (its
 * landmarks, as given to spline()), each lying along a line out from the
 * crown, so the hair reads as combed forward and down from the top of the
 * head, the way a Roman of the Republic wore it, and not as a cap. Fill with
 * PAPER on an ink mass: few strokes for dark hair. `light` (0 to 1) thins
 * them where the light does not reach.
 */
export function combedFromCrown(
  seed: number,
  outline: SP[],
  crown: Pt,
  count: number,
  len: [number, number],
  w: [number, number],
  light: (x: number, y: number) => number = () => 1,
): string {
  const r = rng(seed)
  const poly = outline.map(([x, y]): Pt => [x, y])
  const xs = poly.map((p) => p[0])
  const ys = poly.map((p) => p[1])
  const [x0, x1] = [Math.min(...xs), Math.max(...xs)]
  const [y0, y1] = [Math.min(...ys), Math.max(...ys)]
  let d = ''
  for (let i = 0, tries = 0; i < count && tries < count * 40; tries++) {
    const x = between(r, x0, x1)
    const y = between(r, y0, y1)
    if (!inside(poly, x, y)) continue
    const L0 = light(x, y)
    if (r() > L0) continue
    const vx = x - crown[0]
    const vy = y - crown[1]
    const vl = Math.hypot(vx, vy) || 1
    const L = between(r, len[0], len[1])
    d += gouge(
      x,
      y,
      x + (vx / vl) * L,
      y + (vy / vl) * L,
      between(r, w[0], w[1]) * (0.6 + 0.4 * L0),
      between(r, -0.9, 0.9),
    )
    i++
  }
  return d
}

/**
 * A short fringe combed forward over the brow, as the kit's ROMAN_HAIR has
 * it: small ink points along the hairline, `from` to `to`, each lying forward
 * and down, so the edge of the hair reads as hair and not as the rim of a
 * cap. Fill with INK over the forehead, after the head.
 */
export function fringe(from: Pt, to: Pt, count: number, len: number, seed: number): string {
  const r = rng(seed)
  let d = ''
  for (let i = 0; i < count; i++) {
    const t = (i + 0.5) / count
    const x = from[0] + (to[0] - from[0]) * t
    const y = from[1] + (to[1] - from[1]) * t
    const L = len * between(r, 0.7, 1.15)
    const w = between(r, 1.6, 2.4)
    // a thin wedge from the hair forward and down onto the brow
    d += `M${n(x - w)} ${n(y - 2)}Q${n(x + L * 0.4)} ${n(y + L * 0.2)} ${n(x + L * 0.62)} ${n(y + L * 0.78)}Q${n(x + L * 0.1)} ${n(y + L * 0.3)} ${n(x + w)} ${n(y - 1)}Z`
  }
  return d
}

/** The ink rim round the paper ear, and its inner curl, for any head. */
export function EarCut({ outline, curl }: { outline: string; curl: string }) {
  return (
    <g>
      <path d={outline} fill={PAPER} stroke={INK} strokeWidth={1.4} />
      <path d={curl} fill="none" stroke={INK} strokeWidth={1.5} strokeLinecap="round" />
    </g>
  )
}

// ── Cloth ───────────────────────────────────────────────────────────────────

/** A polyline moved `d` to its left (negative) or right, point by point. */
function offsetLine(pts: Pt[], d: number): Pt[] {
  return pts.map((p, i) => {
    const a = pts[Math.max(0, i - 1)]
    const b = pts[Math.min(pts.length - 1, i + 1)]
    const dx = b[0] - a[0]
    const dy = b[1] - a[1]
    const L = Math.hypot(dx, dy) || 1
    return [p[0] - (dy / L) * d, p[1] + (dx / L) * d]
  })
}

/** Shoulders and chest over the frame's foot: the shape every garment is cut from. */
export function shoulders(slim = 1, lift = 0): string {
  const sx = (x: number) => 105 + (x - 105) * slim
  return spline(
    (
      [
        [-14, 336, 1],
        [-8, 294],
        [8, 258],
        [38, 232],
        [70, 222],
        [100, 226],
        [130, 228],
        [150, 224],
        [180, 234],
        [208, 260],
        [226, 298],
        [236, 336, 1],
      ] as SP[]
    ).map((p) => (p.length === 3 ? [sx(p[0]), p[1] - lift, 1] : [sx(p[0]), p[1] - lift]) as SP),
  )
}

/**
 * THE TOGA, as the figure kit cuts it (../panels/people.tsx: `toga` and
 * `togaCuts`), at the size of a portrait: in ink, with its folds cut in
 * paper. The shoulders, the neck of the tunic at the throat, and the roll of
 * cloth drawn from the front of the chest up over the near shoulder and down
 * behind it, with the folds falling below. `slim` narrows it about the neck,
 * for Cassius ("that spare Cassius"); `seed` scatters the small cuts.
 */
export function togaShapes(seed: number, slim = 1) {
  const sx = (x: number) => 105 + (x - 105) * slim
  const body = shoulders(slim)
  const spine: Pt[] = (
    [
      [212, 342],
      [188, 306],
      [156, 274],
      [122, 250],
      [88, 236],
      [56, 238],
      [24, 254],
      [-6, 280],
      [-20, 300],
    ] as Pt[]
  ).map(([x, y]): Pt => [sx(x), y])
  const side = (d: number) => offsetLine(spine, d)
  const upper = side(-17)
  const lower = side(17)
  const roll =
    'M' + [...upper, ...lower.reverse()].map(([x, y]) => `${n(x)} ${n(y)}`).join('L') + 'Z'
  const r = rng(seed)
  // The roll's folds, cut in paper along it, broken where the cloth turns.
  let rollCuts = ''
  for (const d of [-10, -3.5, 3, 9.5]) {
    const line = side(d + between(r, -1, 1))
    const cutAt = Math.floor(between(r, 3, 5))
    for (const part of [line.slice(0, cutAt + 1), line.slice(cutAt)])
      if (part.length > 1) rollCuts += ribbon(part, between(r, 1.8, 2.8), 0.6)
  }
  // The folds of the cloth below the roll at the front, and behind the shoulder.
  let folds = ''
  for (let i = 0; i < 5; i++) {
    const x = sx(between(r, 146, 214))
    const y0 = 300 + (x - sx(146)) * 0.3 + between(r, 0, 8)
    folds += gouge(x, y0, x + between(r, 2, 10), 336, between(r, 1, 1.6), between(r, -1.5, 1.5))
  }
  for (let i = 0; i < 4; i++) {
    const x = sx(between(r, -6, 40))
    folds += gouge(x, between(r, 290, 300), x - between(r, 4, 14), 336, between(r, 1.1, 1.7), 1.2)
  }
  // The neck of the tunic, showing at the throat above the roll.
  const neck = `M${n(sx(108))} 233Q${n(sx(130))} 243 ${n(sx(154))} 233`
  return { body, roll, rollCuts, folds, neck }
}

const togaCache = new Map<string, ReturnType<typeof togaShapes>>()
function togaParts(seed: number, slim: number) {
  const key = `${seed}:${slim}`
  let hit = togaCache.get(key)
  if (!hit) {
    hit = togaShapes(seed, slim)
    togaCache.set(key, hit)
  }
  return hit
}

/** The toga drawn: body, folds, the tunic's neck, and the roll over the shoulder. */
export function Toga({ seed, slim = 1 }: { seed: number; slim?: number }) {
  const t = togaParts(seed, slim)
  return (
    <g>
      <path d={t.body} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={t.folds} fill={PAPER} />
      <path d={t.neck} fill="none" stroke={PAPER} strokeWidth={1.4} strokeLinecap="round" />
      <path d={t.roll} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={t.rollCuts} fill={PAPER} />
    </g>
  )
}

// ── Light ───────────────────────────────────────────────────────────────────

/** A small cut star: a cross of two gouges and two shorter ones between. */
export function star(x: number, y: number, s: number): string {
  return (
    gouge(x - s, y, x + s, y, s * 0.16) +
    gouge(x, y - s * 1.15, x, y + s * 1.15, s * 0.16) +
    gouge(x - s * 0.45, y - s * 0.45, x + s * 0.45, y + s * 0.45, s * 0.1) +
    gouge(x - s * 0.45, y + s * 0.45, x + s * 0.45, y - s * 0.45, s * 0.1)
  )
}

/** The line weights a face is cut with, named once so every face agrees. */
export const FACE = {
  brow: 2.8,
  lid: 2.2,
  lower: 1.1,
  nostril: 1.5,
  lips: 1.7,
  crease: 1,
  hair: LINE.hairline,
} as const
