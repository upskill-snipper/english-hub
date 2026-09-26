import type { CSSProperties, ReactNode } from 'react'

import { gouge } from '@/components/comics/linocut/carve'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'

/**
 * The people of Jekyll and Hyde, cut from the text's own descriptions and
 * shared by every panel, so that a student meets the same man from chapter to
 * chapter. Drawn first for the panels of moments 1 to 5 (Chapters 1 to 4);
 * other panels may import from here. A change to any shape below changes
 * every panel that uses it: preview them all before changing one.
 *
 * A figure is cut as the reference panel cuts Fred
 * (src/data/comics/a-christmas-carol/counting-house.tsx): a paper halo round
 * every part, so it reads as one black shape with a single carved outline,
 * then the parts in ink, then the paper cuts of folds and features.
 *
 * WHAT THE TEXT SAYS, and so what is drawn (the held edition,
 * src/data/full-texts/jekyll-and-hyde.ts):
 *
 * - UTTERSON: "a man of a rugged countenance that was never lighted by a
 *   smile"; "lean, long, dusty, dreary" (Chapter 1). So he is the tallest man
 *   in any panel, thin, with a long hard jaw and a mouth cut straight, never
 *   smiling. He "put on a greatcoat" to go out (Chapter 2).
 * - ENFIELD: "his distant kinsman, the well-known man about town", "the young
 *   man" (Chapter 1). Younger and shorter than Utterson, a fuller face, and
 *   a cane, which he "lifted up" to point.
 * - HYDE: "small and very plainly dressed" (Chapter 2); "pale and dwarfish,
 *   he gave an impression of deformity without any nameable malformation, he
 *   had a displeasing smile" (Chapter 2); "particularly small and particularly
 *   wicked-looking" (Chapter 4). So he is a head and more shorter than the
 *   others, in a plain short coat and a plain low hat, and his face is the one
 *   face cut in PAPER on a black figure: pale, a heavy brow over a deep-set
 *   eye, and a tight smirk. No deformity is drawn, because the text names
 *   none. When he is angry the text flushes him ("with a flush of anger",
 *   Chapter 2; "a great flame of anger", Chapter 4), and the spot colour runs
 *   at his brow and in two strokes on his cheek, never on his mouth or chin
 *   (see HYDE_FLUSH). (A round red cheek was tried and read as a clown's.)
 * - JEKYLL: "a large, well-made, smooth-faced man of fifty, with something
 *   of a slyish cast perhaps, but every mark of capacity and kindness"
 *   (Chapter 3). So he is broad and clean-shaven, with a full jaw.
 * - CAREW: "an aged beautiful gentleman with white hair" (Chapter 4). So his
 *   hair is cut in paper below the brim of his hat.
 *
 * Nobody's dress is described beyond that, so the gentlemen wear the plain
 * top hat and frock coat or greatcoat of London in the 1880s, and nothing is
 * taken from a film or stage production.
 */

export type P = [number, number]

/**
 * One part of a figure: a filled shape, or with `w` a limb or a stick drawn
 * as a stroke of that width. `sep` cuts a paper edge that wide round this part
 * before it is inked, to lift an arm off the coat behind it. `t` places the
 * part (a head drawn once, turned and scaled).
 */
export type Part = { d: string; w?: number; sep?: number; t?: string }

export function Figure({
  parts,
  cuts,
  halo = 1.8,
  transform,
  className,
  style,
  children,
}: {
  parts: Part[]
  cuts?: string
  halo?: number
  transform?: string
  className?: string
  style?: CSSProperties
  children?: ReactNode
}) {
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
      {halo > 0 && parts.map((p, i) => shape(p, PAPER, halo * 2, `h${i}`))}
      {parts.map((p, i) => [
        p.sep ? shape(p, PAPER, p.sep * 2, `s${i}`) : null,
        shape(p, INK, 0, `f${i}`),
      ])}
      {cuts && <path d={cuts} fill={PAPER} />}
      {children}
    </g>
  )
}

/** The transform of a head centred on `at`, facing right (1) or left (-1). */
export function headAt(facing: 1 | -1, at: P, rot = 0, scale = 1) {
  return `translate(${at[0]} ${at[1]}) rotate(${rot}) scale(${facing * scale} ${scale})`
}

// ── HEADS ───────────────────────────────────────────────────────────────────
// Each in profile facing right, centred on (0, 0), crown near y -20, chin near
// y 21, the base of the neck at y 25. The nose, brow and chin are pushed out
// further than life: the rough edge of the print eats about two units, and a
// profile must survive that at phone width.

/** Utterson: lean and long, a long hard jaw. */
export const HEAD_UTTERSON =
  'M-8 26C-9 20 -14 15 -15.5 6C-17 -9 -8 -20 3 -20C11 -20 15.5 -15 15.5 -9L16 -5.5L23 5.5L16.5 7L17 10L15.5 11.5L16.8 14C17 19 15.5 23 10 24L7 26Z'
/** His features, cut in paper: a heavy brow, the eye, a hollow cheek, a mouth that does not smile. */
export const UTTERSON_CUTS =
  gouge(5.5, -7.8, 14.5, -6.6, 1.1) +
  'M6.4 -3.4Q10 -5.8 13.4 -3.8Q10 -1.8 6.4 -3.4Z' +
  gouge(4.2, 2, 6.6, 15, 0.75, 1.4) +
  gouge(9.5, 12, 16, 11.8, 0.55) +
  gouge(-5.5, -1, -4.5, 7, 0.7, -1.4)

/** Enfield: younger, a fuller face and chin, hair curling at the nape. */
export const HEAD_ENFIELD =
  'M-8.5 24C-10 19 -12.5 16 -14 13L-18 12L-15 9C-16.5 -7 -8 -19.5 3 -19.5C11 -19.5 15.5 -14.5 15.5 -8.5L15.5 -5L21.5 4L16 5.5L16.5 8.5L15 10L16.2 12.5C16 17 13 19.5 8 19.5L6 24Z'
export const ENFIELD_CUTS =
  'M6.4 -3.6Q9.8 -6 13 -4Q9.8 -2 6.4 -3.6Z' + gouge(6.5, -7.8, 13.5, -7.2, 0.8)

/** Jekyll: large and smooth-faced, a full jaw, his hair swept back. */
export const HEAD_JEKYLL =
  'M-9 26C-11 20 -16 15 -17 6C-18.5 -10 -9 -22 3 -22C12 -22 17.5 -16 17.5 -9.5L17.5 -5.5L23 4L17.5 6L18 9L16.5 10.5L17.8 13C18.4 19.5 15 24 8.5 24.5L7 26Z'
export const JEKYLL_CUTS =
  'M7 -3.8Q10.4 -6 13.6 -4.2Q10.4 -2.4 7 -3.8Z' +
  gouge(6.5, -8, 14, -7.8, 0.8) +
  gouge(11, 12.2, 15.8, 11, 0.6, -0.6) +
  gouge(-2, -19, -14, -6, 0.6, 2.4) +
  gouge(6, -20, -13, 1, 0.55, 3) +
  gouge(-5.5, -1, -4.5, 7, 0.7, -1.4)

/** Carew: an old man's face; his white hair is WHITE_HAIR, below his hat. */
export const HEAD_CAREW =
  'M-8 24C-9.5 18 -14 14 -15 5C-16 -9 -8 -19.5 3 -19.5C11 -19.5 15 -14.5 15 -8.5L15.5 -5L22 4.5L16 6L16.5 9L15 10.5L16 13C15.5 17.5 12.5 20 7.5 20L6 24Z'
export const WHITE_HAIR = 'M-15.5 -8C-19.5 -1 -19 9 -14.5 17L-7.5 18.5C-10.5 11 -11 1 -8.5 -7Z'
export const WHITE_HAIR_STRANDS = 'M-15 -2C-16 5 -15 11 -12 16M-11.5 -3C-12.5 4 -12 10 -9.5 15'
export const CAREW_CUTS =
  'M6.6 -3.4Q9.8 -5.6 12.8 -3.8Q9.8 -2 6.6 -3.4Z' + gouge(6.5, -7.4, 13, -6.8, 0.7)

/**
 * Hyde: smaller, a low heavy brow and a jutting jaw ("something troglodytic,
 * shall we say?"). Drawn as the others are, then HYDE_FACE is laid over it in
 * paper, outlined in ink, and HYDE_FEATURES cut into that in ink.
 */
export const HEAD_HYDE =
  'M-8 23C-10 17 -15 13 -16 5C-17 -8 -9 -19 2 -19C10 -19 14 -15 15.5 -10L18.8 -6.4L16.6 -4L22.5 5.5L16.5 7L17.5 9.5L16 11L18.2 13.5C19.2 18 15.5 21.5 9 22L6.5 23Z'
export const HYDE_FACE =
  'M-1.5 -12.5C4 -13.8 11 -13.2 15.5 -10L18.8 -6.4L16.6 -4L22.5 5.5L16.5 7L17.5 9.5L16 11L18.2 13.5C19.2 18 15.5 21.5 9 22C4 21.5 0.5 19 -1.5 14C-3 8 -3 -5 -1.5 -12.5Z'
/**
 * His heavy brow and the deep socket under it, filled in ink, with the eye a
 * small paper glint inside: "the mere radiance of a foul soul".
 */
export const HYDE_BROW_EYE =
  gouge(3.5, -9.2, 19, -6.8, 1.7, -0.5) + 'M5.6 -6.6Q12 -8.4 17.4 -6L16 -2.2Q11 0.2 6 -2.2Z'
export const HYDE_GLINT = 'M10.4 -3.9Q12.4 -5 14.2 -3.8Q12.4 -3 10.4 -3.9Z'
/**
 * "a displeasing smile": a tight line hooked up at the back corner, a smirk
 * rather than a grin. Stroke in ink.
 */
export const HYDE_SMILE = 'M5.6 7.4Q6.2 9.6 8.2 10.6Q12.4 12 16.6 10.4'
/** The crease from nose to mouth, and a nostril. Stroke in ink. */
export const HYDE_LINES = 'M16.4 3.6Q11 5.6 9.4 9.2M17.2 5.8Q18.8 6.8 20.4 6'
/** The shadow under his jaw. Fill in ink. */
export const HYDE_JAW = 'M-1.4 11.5Q2.6 19.6 9.4 21.4L9.6 19.2Q4 17.6 1.4 11Z'
/**
 * Where the spot colour flushes him: just inside his profile at the brow, and
 * two short strokes on the cheek.
 *
 * WHY NOT THE WHOLE PROFILE (26 September 2026). It first ran brow to chin,
 * as Fred's ruddy face does in the reference panel. On Hyde that put a red
 * line along the mouth and chin of the man raising a stick in "The Carew
 * murder", and at a glance on a phone that reads as blood, on a site many of
 * whose readers are children. The red stops above the mouth.
 */
export const HYDE_FLUSH = 'M14.2 -9.2L16.8 -6.4L14.8 -3.8M8 1.2L12.6 2.4M8.6 3.8L12.2 4.7'

/**
 * His hair, for the two panels where he is bareheaded ("The experiment" and
 * "Losing control"): paper strands brushed back through the black of the head
 * from the brow to the nape, as UTTERSON_HAIR cuts Utterson's. The text never
 * describes his hair, so it is plain and dark.
 *
 * WHY. Without them his black cranium ran unbroken into the black collar of
 * Jekyll's coat, and at phone width the bare head read as a hood: a hooded
 * figure the text does not have. Fill with PAPER, in the frame of HEAD_HYDE.
 */
export const HYDE_HAIR =
  gouge(12, -15.6, -4, -17.4, 0.6, -1.2) +
  gouge(9.5, -13, -11, -11, 0.7, 1.8) +
  gouge(2, -10.6, -14.2, -2, 0.65, 2.2) +
  gouge(-3, -5, -14.6, 6.4, 0.6, 1.4) +
  gouge(-6.4, 1, -11.6, 11, 0.5, 0.6)

/**
 * The brow and eye for a bare head. Under a hat brim HYDE_BROW_EYE reads as
 * the shadow of the brim over a deep-set eye; with no hat, that dark band
 * across the face to its edge read as a highwayman's mask. So a bare head
 * gets the heavy brow as a cut of its own and a smaller socket set back from
 * the profile, with the same glint in it. Fill with INK, then the glint.
 */
export const HYDE_BARE_BROW = gouge(4.5, -8.6, 18, -6.6, 1.5, -0.4)
export const HYDE_BARE_SOCKET = 'M8.2 -5Q12 -6.6 15.4 -4.8L14.6 -2.4Q11.6 -1 8.8 -2.6Z'
export const HYDE_BARE_GLINT = 'M10.6 -3.6Q12.2 -4.6 13.8 -3.6Q12.2 -2.8 10.6 -3.6Z'

/**
 * Hyde's pale face over his black head: place with the head's transform. With
 * `flushed`, the spot colour along his profile, for the moments the text says
 * he is angry. With `hat`, his hat is inked again over the top of the face, so the
 * brim sits in front of the brow. With `bare`, he has no hat: his hair is cut
 * into the head and the brow and eye are the bare-headed ones above.
 */
export function HydeFace({
  t,
  flushed = false,
  hat,
  bare = false,
}: {
  t: string
  flushed?: boolean
  hat?: boolean
  bare?: boolean
}) {
  return (
    <g transform={t}>
      {bare && <path d={HYDE_HAIR} fill={PAPER} />}
      <path d={HYDE_FACE} fill={PAPER} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
      {flushed && (
        <path
          d={HYDE_FLUSH}
          fill="none"
          stroke={RED}
          strokeWidth={2.2}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      )}
      <path d={(bare ? HYDE_BARE_BROW + HYDE_BARE_SOCKET : HYDE_BROW_EYE) + HYDE_JAW} fill={INK} />
      <path d={bare ? HYDE_BARE_GLINT : HYDE_GLINT} fill={PAPER} />
      <path d={HYDE_SMILE} fill="none" stroke={INK} strokeWidth={1.3} strokeLinecap="round" />
      <path d={HYDE_LINES} fill="none" stroke={INK} strokeWidth={0.9} strokeLinecap="round" />
      {hat && <path d={LOW_HAT} fill={INK} />}
      {hat && <path d={LOW_HAT_BAND} fill={PAPER} />}
    </g>
  )
}

// ── HATS, in the frame of the heads ─────────────────────────────────────────

/** A plain top hat, sitting down over the brow. */
export const TOP_HAT =
  'M-18.5 -10C-17.5 -13.5 -14.5 -14.2 -12.8 -14.2L-13.8 -39C-5 -41.5 6 -41.5 13.8 -39L12.8 -14.2C14.8 -14.2 18 -13.2 19 -10C9 -7.8 -8.5 -7.8 -18.5 -10Z'
/** The paper cut of its band. */
export const TOP_HAT_BAND = gouge(-12.9, -19.5, 12.9, -19.5, 1)

/** Hyde's hat: a plain, low, round-crowned hat. */
export const LOW_HAT =
  'M-17.5 -9.5C-16.5 -12.5 -14 -13 -12.5 -13C-13 -25 -6.5 -31 1.5 -31C9.5 -31 14 -25 13.5 -13.2C15.5 -13.2 18.5 -11.8 19.5 -9C9.5 -7 -8.5 -7 -17.5 -9.5Z'
export const LOW_HAT_BAND = gouge(-12.4, -16.8, 13.4, -16.8, 0.9)

// ── HANDS ───────────────────────────────────────────────────────────────────
// In the frame of the wrist: the wrist at (0, 0), the hand pointing along +x,
// the thumb on the -y side. `gent` turns them along the forearm. Drawn larger
// than life, with a clear gap between every finger, because a hand whose
// fingers merge reads as a fist at phone width.

/** An open hand, the fingers spread. */
export const OPEN_HAND: Part[] = [
  { d: 'M-0.8 -4.6C3 -5.8 6.5 -6 9.4 -5.2L9.6 5C6.5 5.8 3 5.6 -0.8 4.4Z' },
  { d: 'M8.8 -3.9L16.4 -7.6', w: 2.2 },
  { d: 'M9.3 -1.3L18.2 -3', w: 2.2 },
  { d: 'M9.3 1.4L17.6 2.4', w: 2.2 },
  { d: 'M8.8 4L15 6.8', w: 2.1 },
  { d: 'M2.4 -4.4L5.8 -9L8.8 -10.8', w: 2.3 },
]

/** A hand held out to be shaken: thumb up, fingers together but cut apart. */
export const SHAKE_HAND: Part[] = [
  { d: 'M-0.8 -4.4C3 -5.6 7 -5.8 10 -4.8L10 5C7 5.6 3 5.4 -0.8 4.2Z' },
  { d: 'M9.5 -2.8L18 -3.2', w: 2.2 },
  { d: 'M9.5 0L18.8 0.2', w: 2.2 },
  { d: 'M9.5 2.8L17.6 3.4', w: 2.2 },
  { d: 'M2.8 -4.2L7 -8.2L10.5 -9.4', w: 2.4 },
]
/** The paper lines between the fingers of SHAKE_HAND, in its frame. */
export const SHAKE_CUTS = gouge(10.5, -1.4, 18, -1.5, 0.5) + gouge(10.5, 1.4, 18, 1.8, 0.5)

/** A fist closed round a stick or a handle; the knuckles cut apart. */
export const GRIP_HAND: Part[] = [
  {
    d: 'M-0.8 -4.4C4 -6 9.5 -6.2 11.8 -3.2C13.2 -1 13 2.6 11.3 4.4C8.2 6 3.2 5.6 -0.8 4.2Z',
  },
]

/** A walking boot, its heel at the ankle point, toe towards `facing`. */
export function boot([x, y]: P, facing: 1 | -1): Part {
  const f = facing
  return {
    d: `M${x - f * 5} ${y - 7}L${x + f * 6} ${y - 6}C${x + f * 11} ${y - 5} ${x + f * 14} ${y - 2} ${x + f * 14} ${y + 1}L${x - f * 6} ${y + 1}Z`,
  }
}

type Hand = { parts: Part[]; scale?: number; rot?: number; flip?: boolean }

const line = (pts: P[]) => 'M' + pts.map(([x, y]) => `${x} ${y}`).join('L')
const r1 = (v: number) => Math.round(v * 10) / 10

/** The transform `gent` gives a hand at the end of `arm`. */
export function handAt(arm: P[], facing: 1 | -1, h: Hand) {
  const [x0, y0] = arm[arm.length - 2]
  const [x1, y1] = arm[arm.length - 1]
  const a = (Math.atan2(y1 - y0, x1 - x0) * 180) / Math.PI + (h.rot ?? 0)
  const s = h.scale ?? 1
  const flip = (h.flip ?? facing === -1) ? -1 : 1
  return `translate(${x1} ${y1}) rotate(${r1(a)}) scale(${s} ${flip * s})`
}

/**
 * A frock coat or greatcoat hung on the line from neck to hip: shoulders
 * `width` across, drawn in at the waist, the skirt flaring to a hem `hem`
 * below the hip. `swing` pushes the hem back, as a coat does on a man in
 * motion.
 */
export function coat(
  neck: P,
  hip: P,
  facing: 1 | -1,
  {
    width = 30,
    hem = 44,
    flare = 9,
    swing = 0,
  }: { width?: number; hem?: number; flare?: number; swing?: number } = {},
): string {
  const dx = hip[0] - neck[0]
  const dy = hip[1] - neck[1]
  const L = Math.hypot(dx, dy) || 1
  const u: P = [dx / L, dy / L]
  const v: P = [-u[1], u[0]]
  const at = (o: P, a: number, b: number): P => [
    r1(o[0] + u[0] * a + v[0] * b),
    r1(o[1] + u[1] * a + v[1] * b),
  ]
  const h = width / 2
  const back = -facing * swing
  const s1 = at(neck, 5, h)
  const s2 = at(neck, 5, -h)
  const top1 = at(neck, -3, h * 0.5)
  const top2 = at(neck, -3, -h * 0.5)
  const w1 = at(hip, -4, h * 0.78)
  const w2 = at(hip, -4, -h * 0.78)
  const hem1: P = [
    r1(hip[0] + u[0] * hem + v[0] * (h * 0.78 + flare) + back),
    r1(hip[1] + u[1] * hem + v[1] * (h * 0.78 + flare)),
  ]
  const hem2: P = [
    r1(hip[0] + u[0] * hem - v[0] * (h * 0.78 + flare) + back),
    r1(hip[1] + u[1] * hem - v[1] * (h * 0.78 + flare)),
  ]
  const c1 = at(neck, -3, h)
  const c2 = at(neck, -3, -h)
  return `M${top1[0]} ${top1[1]}Q${c1[0]} ${c1[1]} ${s1[0]} ${s1[1]}L${w1[0]} ${w1[1]}L${hem1[0]} ${hem1[1]}L${hem2[0]} ${hem2[1]}L${w2[0]} ${w2[1]}L${s2[0]} ${s2[1]}Q${c2[0]} ${c2[1]} ${top2[0]} ${top2[1]}Z`
}

/**
 * A man of the 1880s from his joints: arms through shoulder, elbow and wrist,
 * legs through hip, knee and ankle, a coat on the line from neck to hip, a
 * hand at the end of each arm. Returned in drawing order: far limbs, coat,
 * near leg, head, hat, near arm (lifted off the coat by its own paper edge),
 * near hand.
 */
export function gent(p: {
  facing: 1 | -1
  neck: P
  hip: P
  head: { d: string; at: P; rot?: number; scale?: number }
  hat?: string
  near: { arm: P[]; leg: P[]; hand?: Hand }
  far: { arm: P[]; leg: P[]; hand?: Hand }
  body?: { width?: number; hem?: number; flare?: number; swing?: number }
  arm?: number
  leg?: number
}): Part[] {
  const f = p.facing
  const aw = p.arm ?? 8.5
  const lw = p.leg ?? 9.5
  const last = (a: P[]) => a[a.length - 1]
  const hand = (arm: P[], h?: Hand): Part[] =>
    h ? h.parts.map((q) => ({ ...q, t: handAt(arm, f, h) })) : []
  const ht = headAt(f, p.head.at, p.head.rot ?? 0, p.head.scale ?? 1)
  return [
    { d: line(p.far.arm), w: aw },
    ...hand(p.far.arm, p.far.hand),
    { d: line(p.far.leg), w: lw },
    boot(last(p.far.leg), f),
    { d: line([p.neck, p.hip]), w: (p.body?.width ?? 30) * 0.75 },
    { d: coat(p.neck, p.hip, f, p.body) },
    { d: line(p.near.leg), w: lw },
    boot(last(p.near.leg), f),
    { d: p.head.d, t: ht },
    ...(p.hat ? [{ d: p.hat, t: ht }] : []),
    { d: line(p.near.arm), w: aw, sep: 1.4 },
    ...hand(p.near.arm, p.near.hand),
  ]
}
