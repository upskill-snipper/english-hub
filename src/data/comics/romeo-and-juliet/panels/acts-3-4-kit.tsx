import type { CSSProperties, ReactNode } from 'react'

import { between, gouge, gougeField, n, wedge, type Rng } from '@/components/comics/linocut/carve'
import { INK, PAPER } from '@/components/comics/linocut/palette'

/**
 * The people and rooms of Romeo and Juliet's Acts 3 and 4, for the panels of
 * moments 11 to 15 of the guide's timeline (Act 3, Scene 3 to Act 4, Scene
 * 3): Friar Lawrence's cell twice, and Capulet's house three times. Drawn
 * once here so the same people look the same in each of those panels.
 *
 * WHAT THE PLAY SAYS OF THEM, and so what is drawn (the held edition,
 * src/data/full-texts/romeo-and-juliet.ts). It says very little; where it is
 * silent, a person is drawn plainly in the dress of the play's Verona, and
 * nothing is taken from a film or stage production.
 *
 * - Romeo is young ("Wert thou as young as I", 3.3). A beardless youth with
 *   a full head of curling hair, in a doublet and hose.
 * - Juliet "hath not seen the change of fourteen years" (1.2). A girl in a
 *   plain long gown, her hair long and loose, drawn a head shorter than the
 *   adults round her.
 * - Friar Lawrence is old: Juliet appeals to "thy long-experienc'd time" and
 *   "the commission of thy years" (4.1). He is a friar of the Franciscan
 *   order ("Holy Franciscan Friar", 5.2), so he wears a habit with its hood
 *   down on his shoulders, a knotted cord at the waist and a tonsure, the
 *   ring of hair left white with age.
 * - Capulet is "old Capulet" (1.2), past his "dancing days" (1.5), and first
 *   seen "in his gown" (1.1). An old man with a white beard in a long gown.
 * - Lady Capulet was a mother at Juliet's age ("I was your mother much upon
 *   these years", 1.3), so she is not yet thirty: a lady in a gown and veil.
 * - The Nurse is old ("I have but four teeth", 1.3) and stout, "A sail, a
 *   sail" to Mercutio (2.4). A broad old woman in a linen coif tied under her
 *   chin, her mouth fallen in.
 * - Paris is "The gallant, young, and noble gentleman" (3.5). A beardless
 *   young nobleman in a flat bonnet and a short cloak.
 *
 * HOW A FIGURE IS CUT. As the reference panel cuts Fred
 * (src/data/comics/a-christmas-carol/counting-house.tsx): a paper halo round
 * every part so the figure reads as one shape with one carved outline on a
 * black ground, then the parts in ink, then the white cuts of folds and
 * features. Heads are drawn once, in profile facing right, centred on (0, 0)
 * in a box about 34 wide and 42 high, and placed with a part's `t`
 * (mirrored with a negative x scale to face left).
 *
 * HANDS. Every open hand is a palm with four fingers and a thumb cut apart,
 * fanned, so that at panel size it reads as an open hand and never as a fist;
 * a pointing hand has one long finger and the rest curled. No hand is drawn
 * as a flat, straight-armed salute.
 */

export type P = [number, number]
export type Part = { d: string; w?: number; sep?: number; t?: string }

/** A figure cut from the block: halo, parts, cuts. `tone="paper"` swaps the colours. */
export function CutFigure({
  parts,
  cuts,
  halo = 1.8,
  tone = 'ink',
  transform,
  className,
  style,
  children,
}: {
  parts: Part[]
  cuts?: string
  halo?: number
  tone?: 'ink' | 'paper'
  transform?: string
  className?: string
  style?: CSSProperties
  children?: ReactNode
}) {
  const fg = tone === 'ink' ? INK : PAPER
  const edge = tone === 'ink' ? PAPER : INK
  const shape = (p: Part, colour: string, extra: number, key: string) =>
    p.w ? (
      <path
        key={key}
        d={p.d}
        transform={p.t}
        fill="none"
        stroke={colour}
        strokeWidth={p.w + extra}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ) : (
      <path
        key={key}
        d={p.d}
        transform={p.t}
        fill={colour}
        stroke={extra ? colour : undefined}
        strokeWidth={extra || undefined}
        strokeLinejoin="round"
      />
    )
  return (
    <g transform={transform} className={className} style={style}>
      {halo > 0 && parts.map((p, i) => shape(p, edge, halo * 2, `h${i}`))}
      {parts.map((p, i) => [
        p.sep ? shape(p, edge, p.sep * 2, `s${i}`) : null,
        shape(p, fg, 0, `f${i}`),
      ])}
      {cuts && <path d={cuts} fill={edge} />}
      {children}
    </g>
  )
}

/** A polyline as path data. */
export const line = (pts: P[]) => 'M' + pts.map(([x, y]) => `${n(x)} ${n(y)}`).join('L')

/** A smooth curve through three points (a quadratic whose control is pulled to pass through the middle one). */
export const bend = (a: P, m: P, b: P) =>
  `M${n(a[0])} ${n(a[1])}Q${n(2 * m[0] - (a[0] + b[0]) / 2)} ${n(2 * m[1] - (a[1] + b[1]) / 2)} ${n(b[0])} ${n(b[1])}`

/** The transform for a head at `at`, facing right (1) or left (-1). */
export const headAt = (at: P, facing: 1 | -1, scale = 1, rot = 0) =>
  `translate(${at[0]} ${at[1]}) rotate(${rot}) scale(${facing * scale} ${scale})`

// ── Heads, facing right, centred on (0, 0) ───────────────────────────────────

/**
 * A man's head, features pushed out a little beyond life so the profile
 * survives the print's rough edge at phone width.
 */
export const HEAD_MAN =
  'M-9 22C-10 16 -15 12 -16 3C-17 -10 -8 -20 3 -20C11 -20 16 -14 16 -8L16 -5L22.5 3.5L17 5.5L17.5 8.5L16 10L17 12.5C16.5 16 13 18.5 8 18.5L6 22Z'

/** An eye, one short paper cut under the brow. */
export const EYE = 'M7 -3.6Q10 -5.4 12.6 -3.6Q10 -2.2 7 -3.6Z'
/** An eye cast down: a lid line, for a face bowed in grief or thought. */
export const EYE_DOWN = gouge(6.6, -2.2, 12.2, -1.2, 0.8, 0.9)

/** A scalloped mass of hair round a head, from `a0` to `a1` degrees about (cx, cy). */
function curls(
  cx: number,
  cy: number,
  r: number,
  a0: number,
  a1: number,
  bumps: number,
  out: number,
) {
  const pt = (a: number, rad: number): P => [
    cx + rad * Math.cos((a * Math.PI) / 180),
    cy + rad * Math.sin((a * Math.PI) / 180),
  ]
  const step = (a1 - a0) / bumps
  let [x, y] = pt(a0, r)
  let d = `M${n(x)} ${n(y)}`
  for (let i = 0; i < bumps; i++) {
    const am = a0 + step * (i + 0.5)
    const ae = a0 + step * (i + 1)
    const c = pt(am, r + out)
    ;[x, y] = pt(ae, r)
    d += `Q${n(c[0])} ${n(c[1])} ${n(x)} ${n(y)}`
  }
  // back along the inside, under the head, so the mass is closed
  const inner = pt(a1, r - 7)
  const inner0 = pt(a0, r - 7)
  d += `L${n(inner[0])} ${n(inner[1])}A${n(r - 7)} ${n(r - 7)} 0 0 1 ${n(inner0[0])} ${n(inner0[1])}Z`
  return d
}

/**
 * Romeo's hair: a full head of curls from the brow round the crown to the
 * nape, so the youth keeps one outline from panel to panel. ROMEO_CURLS are
 * the paper cuts of the curls in it.
 */
export const ROMEO_HAIR =
  curls(0.5, -1, 19.5, 105, 305, 9, 5.2) + 'M9 -18C14 -17 16.5 -13 15.5 -8.5L12 -11Z'
export const ROMEO_CURLS =
  gouge(-12, -12, -6, -17, 0.6, -1.2) +
  gouge(-17, -2, -14, -9, 0.6, -1) +
  gouge(-16, 8, -15, 1, 0.6, -1) +
  gouge(-2, -19, 5, -19.5, 0.55, -1)

/** Paris's flat bonnet, worn tilted, with its band cut in paper (PARIS_BAND). */
export const PARIS_CAP =
  'M-18 -8C-21 -16 -13 -26 2 -27C15 -27.5 23 -22 21.5 -15C14 -12 -4 -8 -18 -8Z'
export const PARIS_BAND = gouge(-17, -10.5, 19.5, -16.5, 0.9)
/** Short hair at Paris's nape, under the bonnet. */
export const PARIS_HAIR = 'M-16 -6C-19 0 -18 8 -14 14L-9 16C-11 9 -11 2 -9 -5Z'

/** The white beard and the white hair at the nape of an old man (Capulet). */
export const OLD_BEARD =
  'M17 5C20 11 20.5 20 16 28C13.5 32 10 33.5 8 31C6.5 27 6 22 6.5 17C10 18 13.5 17 15.5 12L16.5 8.5Z'
export const OLD_HAIR = 'M-14 -4C-17.5 4 -17 13 -13 21L-7 22C-10 14 -10.5 5 -8.5 -3Z'
/**
 * Capulet's full white beard, from below the ear along the jaw to a point
 * under the chin, with the moustache over the lip: large enough to read as
 * white at panel size, where OLD_BEARD alone reads as a shadow. Paper, with
 * ink strands (FULL_BEARD_STRANDS), and a white brow (WHITE_BROW).
 */
export const FULL_BEARD =
  'M-2 2C-4 10 -3 18 1 25C4 31 8 36 12 36C16 34 19 28 19.4 21C19.6 16 18.6 12.6 17 10.6L17.6 8.4L14 7.4C12.4 9.4 12 11.6 13.6 13.2C11 14.6 7.6 14.6 5 13C2.6 10 0.6 6 -2 2Z'
export const FULL_BEARD_STRANDS =
  'M3 16C4.6 22 7.4 28 10.6 32M8.6 16.4C10 22 12.4 27 14.6 30.6M14.6 16C15.6 21 16.2 25 16.4 28.6'
export const WHITE_BROW = gouge(6.4, -8.2, 15.4, -8.4, 1.3, -0.8)
/** Ink strands in the white beard and hair. */
export const OLD_STRANDS =
  'M15 10C16 17 15 24 12 30M11.5 18C12 23 11 27 9.5 30.5M-12.5 0C-14 7 -13 14 -10.5 20.5'

/**
 * The Friar's tonsure: the crown bare, and a thick horseshoe of white hair
 * from the temple round the back of the head to the nape, tufted along its
 * lower edge so it reads as hair and not as a band. Paper, over the ink
 * head, and set in from the head's outline: white hair on the very edge of
 * a black head merges with the paper halo and reads as outline, not hair; with TONSURE_SHINE, the light on the bare crown, and TONSURE_STRANDS
 * cut back into the white in ink.
 */
export const TONSURE =
  'M4.6 -8.6C-1 -9.4 -6.4 -10.4 -10.8 -12C-13.8 -8.4 -14.6 -1.8 -13.6 5.6L-12.2 11.4L-10.2 9.6L-9.4 6L-8.2 4.4L-8.4 1.2L-6.6 -1.2L-6 -3.2L-3.6 -2.2L-2.2 -4.2L0.6 -3.2L2.2 -5L4.6 -4.4Z'
/** The light on the bare crown above the ring, so the tonsure reads as shaven and not as a band. */
export const TONSURE_SHINE = gouge(-7, -16.8, 8.4, -16.4, 0.9, -1.6)
/** Ink strands cut back into the white ring of hair. */
export const TONSURE_STRANDS =
  'M-11.6 -7C-12.4 -2.4 -12.2 2 -11.2 6.4M-7 -8.2L-6 -5M-1.6 -7.8L-1 -5.4M2.8 -7.6L3.2 -5.8'

/** A woman's head, and a veil over the crown falling down her back (Lady Capulet). */
export const HEAD_WOMAN =
  'M-8 21C-9 15 -14 11 -15 3C-16 -9 -7 -19 2 -19C10 -19 14.5 -13 14.5 -7.5L15 -4.5L20.5 3L15.5 4.8L16 7.5L14.8 9L15.6 11.5C15 15 12 17 7.5 17L5.5 21Z'
export const VEIL =
  'M12.5 -12.5C6 -22 -6 -23 -13 -16C-18.5 -9 -19.5 4 -18.5 16C-17.5 32 -22 52 -28 72L-13 73C-9 54 -7 34 -7 20C-7 8 -5 -3 2 -9C6.5 -12.5 10 -13 12.5 -12.5Z'
/** The jewelled band across Lady Capulet's veil, cut in paper. */
export const VEIL_BAND = gouge(12, -12.4, -12.5, -15.4, 0.9, -1.4)

/**
 * Juliet's head: a girl's, smaller and softer in the nose and chin than the
 * women's, with her hair long and loose down her back (JULIET_HAIR) and cut
 * into strands (JULIET_STRANDS).
 */
export const HEAD_GIRL =
  'M-8 20C-9 14 -13 10 -14 3C-15 -9 -7 -18 2 -18C9.5 -18 14 -12.5 14 -7L14.4 -4L18.6 2.4L14.6 4.2L15 6.8L14 8.4L14.8 10.6C14.2 13.8 11.5 15.8 7.5 15.8L5.5 20Z'
export const JULIET_HAIR =
  'M13 -11C9 -20.5 -5 -22 -12.5 -15.5C-18.5 -9.5 -19 2 -17.5 14C-15.5 34 -18 56 -23 78C-21 80 -17 80.5 -14 79.5C-12 81 -8.5 81 -6 79C-5 58 -4 38 -5.5 22C-7 8 -4 -3 4 -8.5C8 -11 10.5 -11.5 13 -11Z'
export const JULIET_STRANDS =
  gouge(4, -15.5, -14, 4, 0.55, 3) +
  gouge(-12, 8, -15, 46, 0.6, 1.5) +
  gouge(-9, 22, -12, 64, 0.55, 1.2) +
  gouge(-15.5, 30, -19, 70, 0.5, 1)

/**
 * The Nurse's head: an old woman's, the mouth fallen in over "but four
 * teeth" and the chin coming forward; and her coif, a linen cap covering the
 * head and hanging to the shoulders, its white edge framing the face and
 * tied under the chin (COIF_EDGE, in paper).
 */
export const HEAD_NURSE =
  'M-9 22C-10 16 -15 12 -16 3C-17 -10 -8 -20 3 -20C11 -20 15.5 -14 15.5 -8L15.8 -5L20.8 3L16 5.4L15 8.6L14.4 10.4L17.4 13.4C17 17.4 13.6 19.8 8.6 19.4L6 22Z'
export const COIF =
  'M14 -11C10 -22 -6 -25 -15 -17C-21 -10 -22 2 -21 14C-20.5 22 -22 28 -26 33L-6 33C-5 28 -4 25 -2 23L6 22C2 18 0 10 1.5 1C3 -6 8 -10 14 -11Z'
export const COIF_EDGE = 'M14 -11.5C8 -9.5 3 -5 1.5 2C0.5 9 2 16 5.5 21.5C8 23.5 12 23 15 20'

// ── Hands ────────────────────────────────────────────────────────────────────

const ang = (a: number): P => [Math.cos((a * Math.PI) / 180), Math.sin((a * Math.PI) / 180)]
const add = (p: P, u: P, k: number): P => [p[0] + u[0] * k, p[1] + u[1] * k]

/**
 * An open hand with the fingers apart. `at` is the wrist, `a` the direction
 * the fingers point in degrees (0 right, 90 down), `s` the scale (1 is about
 * 15 units from wrist to fingertip), and `thumb` which side of the hand the
 * thumb is on: 1 is clockwise of the fingers' direction.
 */
export function openHand(at: P, a: number, s = 1, thumb: 1 | -1 = 1, spread = 11): Part[] {
  const u = ang(a)
  const v: P = [-u[1], u[0]]
  const k1 = add(at, u, 7.5 * s)
  const palm =
    `M${n(at[0] + v[0] * 2.8 * s)} ${n(at[1] + v[1] * 2.8 * s)}` +
    `L${n(k1[0] + v[0] * 5 * s)} ${n(k1[1] + v[1] * 5 * s)}` +
    `Q${n(k1[0] + u[0] * 1.6 * s)} ${n(k1[1] + u[1] * 1.6 * s)} ${n(k1[0] - v[0] * 5 * s)} ${n(k1[1] - v[1] * 5 * s)}` +
    `L${n(at[0] - v[0] * 2.8 * s)} ${n(at[1] - v[1] * 2.8 * s)}Z`
  const parts: Part[] = [{ d: palm }]
  // Spaced and fanned so that a paper edge survives between every two
  // fingers, even on a paper hand with an ink edge: at panel size fingers
  // that touch read as a fist.
  const lens = [5.8, 7.6, 8, 7.2]
  for (let i = 0; i < 4; i++) {
    const off = (1.5 - i) * 3.1 * s * -thumb
    const base: P = [k1[0] + v[0] * off, k1[1] + v[1] * off]
    const fa = a + (1.5 - i) * (spread / 1.5) * -thumb * 0.8
    const tip = add(base, ang(fa), lens[i] * s)
    parts.push({ d: line([base, tip]), w: 1.8 * s })
  }
  const tb = add(add(at, u, 3 * s), v, thumb * 3.2 * s)
  parts.push({ d: line([tb, add(tb, ang(a + thumb * 52), 5.8 * s)]), w: 2.2 * s })
  return parts
}

/**
 * A pointing hand: the fingers curled into the palm and the forefinger
 * straight out along `a`, the thumb laid along it.
 */
export function pointingHand(at: P, a: number, s = 1, thumb: 1 | -1 = 1): Part[] {
  const u = ang(a)
  const v: P = [-u[1], u[0]]
  const c = add(at, u, 4.6 * s)
  const knuckles = `M${n(c[0] - 4.4 * s)} ${n(c[1])}a${n(4.4 * s)} ${n(4.4 * s)} 0 1 0 ${n(8.8 * s)} 0a${n(4.4 * s)} ${n(4.4 * s)} 0 1 0 ${n(-8.8 * s)} 0Z`
  const fb = add(add(at, u, 7 * s), v, -thumb * 2.2 * s)
  const tb = add(add(at, u, 3.4 * s), v, thumb * 3.4 * s)
  return [
    { d: knuckles },
    { d: line([fb, add(fb, u, 11 * s)]), w: 2.2 * s },
    { d: line([tb, add(tb, ang(a + thumb * 28), 5 * s)]), w: 2.2 * s },
  ]
}

/**
 * Two hands pressed together, palm to palm, the fingers up: pleading or
 * prayer. `at` is the wrists, `a` the direction the fingers point. `cut` is
 * the line between the palms, to be filled in the figure's edge colour with
 * the same transform `t`.
 */
export function prayingHands(at: P, a: number, s = 1): { part: Part; cut: string; t: string } {
  const t = `translate(${n(at[0])} ${n(at[1])}) rotate(${n(a)}) scale(${s})`
  return {
    part: { d: 'M0 -4.6C6 -5.6 12 -4.4 17 -1.6C18.6 -0.6 18.6 0.6 17 1.6C12 4.4 6 5.6 0 4.6Z', t },
    cut: gouge(2.5, 0, 16.5, 0, 0.6),
    t,
  }
}

// ── Rooms ────────────────────────────────────────────────────────────────────

type Box = { x0: number; x1: number; y0: number; y1: number }

/**
 * A wall of dressed stone on the black: gouged courses whose cuts follow the
 * light, with the bed and head joints cut between them. Fill `cuts` and
 * `joints` with PAPER; `joints` are the lines of mortar, which print pale
 * where the light reaches and are lost where it does not.
 */
export function stoneWall(r: Rng, box: Box, light: (x: number, y: number) => number, course = 28) {
  const cuts = gougeField(r, box, light, { spacing: 6.2, len: [16, 60], gap: [5, 16] })
  let joints = ''
  let row = 0
  for (let y = box.y0 + course * 0.7; y < box.y1 - 4; y += course, row++) {
    let x = box.x0
    while (x < box.x1) {
      const len = between(r, 40, 110)
      const L = light(x + len / 2, y)
      if (L > 0.12)
        joints += wedge(
          x,
          y + between(r, -0.7, 0.7),
          x + len,
          y + between(r, -0.7, 0.7),
          0.6 + L * 1.6,
          0.6 + L * 1.6,
        )
      x += len
    }
    let hx = box.x0 + (row % 2 ? 20 : 50) + between(r, -6, 6)
    while (hx < box.x1) {
      const L = light(hx, y - course / 2)
      if (L > 0.12)
        joints += wedge(hx, y - course + 2, hx + between(r, -1, 1), y, 0.6 + L * 1.4, 0.6 + L * 1.4)
      hx += between(r, 52, 76)
    }
  }
  return { cuts, joints }
}

/** A floor of flags or boards on paper: ink joints to a vanishing point, cross joints closing up with distance. */
export function flagFloor(
  r: Rng,
  W: number,
  H: number,
  top: number,
  vanish: P,
  every = 58,
  cross = 6,
) {
  let d = ''
  const [vx, vy] = vanish
  for (let xt = -700; xt < W + 700; xt += every) {
    const xb = vx + (xt - vx) * ((H - vy) / (top - vy))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(r, 0.35, 0.9))
      d += wedge(
        xt + (xb - xt) * t0,
        top + (H - top) * t0,
        xt + (xb - xt) * t1,
        top + (H - top) * t1,
        0.9 + t0 * 2.6,
        0.9 + t1 * 2.6,
      )
      t0 = t1 + between(r, 0.03, 0.08)
    }
  }
  for (let k = 1; k < cross; k++) {
    const t = Math.pow(k / cross, 1.5)
    const y = top + (H - top) * t
    let x = between(r, -30, 0)
    while (x < W) {
      const len = between(r, 50, 140)
      d += gouge(x, y + between(r, -0.6, 0.6), x + len, y + between(r, -0.6, 0.6), 0.9 + t * 1.6)
      x += len + between(r, 2, 10)
    }
  }
  for (let y = top + 1; y < top + 16; y += 3) d += gouge(0, y, W, y, 2.4 - (y - top) * 0.14)
  return d
}

/** A shadow on a paper floor under a figure: a few tapering cuts. */
export function footShadow(cx: number, y: number, halfW: number) {
  let d = ''
  for (let k = 0; k < 4; k++) {
    const w = halfW * (1 - k * 0.18)
    d += gouge(cx - w, y + k * 3, cx + w, y + k * 3 + 0.4, 1.8 - k * 0.35)
  }
  return d
}
