import type { CSSProperties, ReactNode } from 'react'

import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  gouge,
  gougeField,
  n,
  rays,
  rng,
  wedge,
  type Rng,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

/**
 * The people and places of the last five moments of Romeo and Juliet (Act 4,
 * Scene 5 to the end of Act 5), drawn for the panels "Wedding turned to
 * funeral", "News in Mantua", "The letter that never went", "The tomb" and "A
 * glooming peace", so that Friar Lawrence, Balthasar, Capulet and Lady Capulet
 * look the same from one of those panels to the next, and the Capulets'
 * monument and the yew beside it are the same stone and the same tree at
 * night and at dawn.
 *
 * A figure is cut as the reference panel cuts Fred and Bob
 * (src/data/comics/a-christmas-carol/counting-house.tsx): a paper halo round
 * every part, so the whole figure reads as one shape with one carved outline
 * on a dark ground, then the parts in ink, then the white cuts of folds and
 * features. The heads are the profiles of the Macbeth panels
 * (src/data/comics/macbeth/panels/inverness-people.tsx), copied so that one
 * hand cuts every face on the site: features pushed out larger than life so a
 * profile survives the rough edge at phone width.
 *
 * WHO LOOKS LIKE WHAT is set out in ./late-scenes-people.tsx, which builds
 * the figures from these parts and from the heads the earlier panels of the
 * play cut first (./acts-3-4-kit.tsx), so each person keeps one outline from
 * the first act to the last. The play describes almost nobody; where it is
 * silent a person is drawn plainly in the dress of the play's Italy, and
 * nothing is taken from a film or stage production. Capulet's cap, the old
 * men's white beards and hair, the Prince's circlet and the veil below were
 * cut here first and are shared with the earlier panels.
 *
 * Every shape is plain path data in the toolkit's carving style
 * (src/components/comics/linocut), computed once and cached. Seeds: 1691
 * and 1692 (the monument's stone at night and at dawn), 1693 (the torch's
 * light in the vault), 1694 (the yew's needles); each panel records its own.
 */

export type P = [number, number]

// ── A figure cut from the block ─────────────────────────────────────────────

/**
 * One part of a figure: a filled shape, or with `w` a limb stroked that wide.
 * `sep` cuts a paper edge that wide round the part before it is inked (to lift
 * a near arm off the body behind it); `t` transforms that part alone.
 */
export type Part = { d: string; w?: number; sep?: number; t?: string }

/**
 * A figure: a halo round every part, then the parts, then the cuts. With
 * `tone="paper"` the colours swap, for a figure standing in the light.
 */
export function Cut({
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

// ── Heads, facing right, centred on (0, 0), about 36 by 44 ─────────────────

/** A man's head, clean-shaven. */
export const HEAD_MAN =
  'M-9 22C-10 16 -15 12 -16 3C-17 -10 -8 -20 3 -20C11 -20 16 -14 16 -8L16 -5L22.5 3.5L17 5.5L17.5 8.5L16 10L17 12.5C16.5 16 13 18.5 8 18.5L6 22Z'
/** A young man's head: fuller hair falling over the brow and curling at the nape. */
export const HEAD_YOUTH =
  'M-9 22C-12 18 -15 14 -16.5 8L-19.5 6.5L-16.5 3C-18 -10 -9 -21 3 -21C11.5 -21 17.5 -16 17.5 -9.5L15 -9L16.5 -5L22.5 3.5L17 5.5L17.5 8.5L16 10L17 12.5C16.5 16 13 18.5 8 18.5L6 22Z'
/** An old man's white beard and the white hair at his nape, drawn over HEAD_MAN. */
export const OLD_BEARD =
  'M17 5C20 11 20.5 20 16 28C13.5 32 10 33.5 8 31C6.5 27 6 22 6.5 17C10 18 13.5 17 15.5 12L16.5 8.5Z'
export const OLD_HAIR = 'M-14 -4C-17.5 4 -17 13 -13 21L-7 22C-10 14 -10.5 5 -8.5 -3Z'
const OLD_STRANDS =
  'M15 10C16 17 15 24 12 30M11.5 18C12 23 11 27 9.5 30.5M-12.5 0C-14 7 -13 14 -10.5 20.5'
/** A woman's head, and the veil that falls from her crown down her back. */
export const HEAD_WOMAN =
  'M-8 21C-9 15 -14 11 -15 3C-16 -9 -7 -19 2 -19C10 -19 14.5 -13 14.5 -7.5L15 -4.5L20.5 3L15.5 4.8L16 7.5L14.8 9L15.6 11.5C15 15 12 17 7.5 17L5.5 21Z'
export const VEIL =
  'M12.5 -12.5C6 -22 -6 -23 -13 -16C-18.5 -9 -19.5 4 -18.5 16C-17.5 32 -22 52 -28 72L-13 73C-9 54 -7 34 -7 20C-7 8 -5 -3 2 -9C6.5 -12.5 10 -13 12.5 -12.5Z'
/** An old man's soft cap, for Capulet. */
export const CAP =
  'M-17 -6C-19 -15 -12 -24 0 -25.5C10 -26.5 18 -22 19.5 -15C14 -12.5 4 -12 -4 -11.5C-10 -11 -14 -9 -17 -6Z'
/**
 * The cap's band, cut in the figure's edge colour just above its brim. An ink
 * cap on an ink head is otherwise lost in the head's outline: the review of
 * 26 September 2026 found Capulet bareheaded at panel size in panels whose
 * alt text gives him his cap, and nothing to tell him from Montague but the
 * beard.
 */
export const CAP_BAND = gouge(-15.5, -9.4, 16.8, -16.6, 0.9, -1.2)
/** The Prince's circlet, a band with three low points, printed in ink. */
export const CIRCLET =
  'M-15.5 -11L-16.5 -21L-11 -15.5L-4 -24L2 -16L8.5 -24.5L13.5 -15L15.5 -19L15 -9C7 -12 -7 -12.5 -15.5 -11Z'
/** Friar John's hood, up: it covers the crown and the back of the head and frames the face. */
export const HOOD_UP =
  'M16.5 -10C14 -21 3 -27 -8 -25C-19 -22 -24 -11 -24 2C-24 14 -21 23 -15 30L2 28C1 22 2 15 4 9C5 1 8 -5 12 -8C13.5 -9.2 15 -9.8 16.5 -10Z'
/** A watchman's iron cap. */
export const MORION =
  'M-24 -2C-20 -4 -16 -8 -16 -14C-15 -24 -6 -30 4 -30C13 -30 19 -24 19 -14C21 -9 25 -6 28 -4C18 -1 -12 0 -24 -2Z'

/** An eye cut as a paper spark, in the frame of every head here. */
export const EYE = 'M7 -3.6Q10 -5.4 12.6 -3.6Q10 -2.2 7 -3.6Z'
/** A lowered eye, for a bowed head: a short curved lid. */
export const EYE_DOWN = 'M7 -2.4Q10 -0.6 12.8 -2.4Q10 -1.4 7 -2.4Z'
/** Hair swept back on a bare head, cut as a few paper strands. */
export const HAIR_CUTS =
  gouge(7, -15.5, -12, -5, 0.6, 2.6) +
  gouge(10.5, -11, -13.5, 3, 0.55, 3) +
  gouge(-1, -18, -13, -10, 0.5, 1.4)

// ── Hands ───────────────────────────────────────────────────────────────────

export type HandKind = 'open' | 'spread' | 'point' | 'fist' | 'cup'

const rad = (d: number) => (d * Math.PI) / 180
const r1 = (v: number) => Math.round(v * 10) / 10
const pt = (p: P) => `${r1(p[0])} ${r1(p[1])}`
/** A polyline through the points. */
export const line = (pts: P[]) => 'M' + pts.map(pt).join('L')
/** A smooth curve through the points (Catmull-Rom as cubic Béziers): arms, cords, cloaks. */
export function smooth(pts: P[]) {
  if (pts.length < 3) return line(pts)
  let d = `M${pt(pts[0])}`
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(0, i - 1)]
    const p1 = pts[i]
    const p2 = pts[i + 1]
    const p3 = pts[Math.min(pts.length - 1, i + 2)]
    const c1: P = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6]
    const c2: P = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6]
    d += `C${pt(c1)} ${pt(c2)} ${pt(p2)}`
  }
  return d
}

/**
 * A hand at the wrist `at`, pointing along `deg` (0 is to the right, 90 is
 * down). The style guide's rule for gestures: fingers must stay apart at panel
 * size, or an open hand reads as a fist. So an `open` hand fans four fingers
 * with paper between them, `spread` fans them wider (alarm, grief), `point`
 * straightens one finger and curls the rest, `fist` and `cup` (holding
 * something) are closed. `thumb` is 1 or -1: which side the thumb is on.
 */
export function hand(kind: HandKind, at: P, deg: number, s = 1, thumb: 1 | -1 = 1): Part[] {
  const a = rad(deg)
  const u: P = [Math.cos(a), Math.sin(a)]
  const v: P = [-u[1], u[0]]
  const off = (d: number, e: number): P => [
    at[0] + u[0] * d * s + v[0] * e * s,
    at[1] + u[1] * d * s + v[1] * e * s,
  ]
  const ray = (from: P, ang: number, len: number): string => {
    const b = a + ang
    return line([from, [from[0] + Math.cos(b) * len * s, from[1] + Math.sin(b) * len * s]])
  }
  const palm = (len: number, wid: number) =>
    `M${pt(off(0, -wid / 2))}Q${pt(off(len * 0.55, -wid * 0.75))} ${pt(off(len, -wid / 2.2))}Q${pt(off(len * 1.1, 0))} ${pt(off(len, wid / 2.2))}Q${pt(off(len * 0.55, wid * 0.75))} ${pt(off(0, wid / 2))}Z`
  if (kind === 'cup') {
    const c = off(3.4, 0)
    const r = 4.3 * s
    return [
      {
        d: `M${r1(c[0] - r)} ${r1(c[1])}a${r1(r)} ${r1(r)} 0 1 0 ${r1(r * 2)} 0a${r1(r)} ${r1(r)} 0 1 0 ${r1(-r * 2)} 0Z`,
      },
    ]
  }
  if (kind === 'fist') {
    // a clenched fist is squarer and wider than the wrist, so it reads as a
    // fist and not as the rounded end of an arm; `fistCuts` cuts the fingers
    return [
      {
        d: `M${pt(off(0, -4))}L${pt(off(2, -6.4))}L${pt(off(10, -6.4))}Q${pt(off(13, -6.4))} ${pt(off(13, -3))}L${pt(off(13, 3))}Q${pt(off(13, 6.4))} ${pt(off(10, 6.4))}L${pt(off(2, 6.4))}L${pt(off(0, 4))}Z`,
      },
    ]
  }
  if (kind === 'point') {
    return [
      { d: palm(6.4, 7.4) },
      { d: ray(off(5, -thumb * 1.8), 0, 8.4), w: 2.3 * s },
      { d: ray(off(2.4, thumb * 3.2), thumb * rad(38), 4.4), w: 2.4 * s },
    ]
  }
  const fan = kind === 'spread' ? [-0.62, -0.2, 0.22, 0.62] : [-0.36, -0.12, 0.12, 0.36]
  const lens = [5.4, 6.6, 6.8, 6]
  const parts: Part[] = [{ d: palm(6, 7.6) }]
  fan.forEach((f, i) => {
    const base = off(5.2, (i - 1.5) * 1.7 * -thumb)
    parts.push({ d: ray(base, f * -thumb, lens[i]), w: 2.1 * s })
  })
  parts.push({
    d: ray(off(1.6, thumb * 3.4), thumb * rad(kind === 'spread' ? 62 : 48), 5),
    w: 2.3 * s,
  })
  return parts
}

/** The curled fingers of a `fist`, cut in paper across its knuckles. */
export function fistCuts(at: P, deg: number, s = 1) {
  const a = rad(deg)
  const u: P = [Math.cos(a), Math.sin(a)]
  const v: P = [-u[1], u[0]]
  const o = (d: number, e: number): [number, number] => [
    at[0] + u[0] * d * s + v[0] * e * s,
    at[1] + u[1] * d * s + v[1] * e * s,
  ]
  let d = ''
  for (const e of [-3, 0, 3]) {
    const [x1, y1] = o(6.5, e)
    const [x2, y2] = o(12, e)
    d += gouge(x1, y1, x2, y2, 0.75)
  }
  return d
}

/** The angle, in degrees, of the last segment of an arm: the way its hand points. */
export function endAngle(pts: P[]) {
  const a = pts[pts.length - 2]
  const b = pts[pts.length - 1]
  return (Math.atan2(b[1] - a[1], b[0] - a[0]) * 180) / Math.PI
}

// ── Bodies, in a figure's own frame: facing right, feet at (0, 0) ───────────

/**
 * A long gown or habit hung from the shoulders at `top`, `sh` half-wide at
 * the shoulder and flaring to a hem `hem` half-wide at the floor. `lean`
 * pushes the hem backwards (negative) or forwards, as a stooping or walking
 * figure's does; `stoop` bows the back.
 */
export function gown({
  top = -156,
  sh = 15,
  hem = 30,
  lean = 0,
  stoop = 0,
  floor = 0,
}: {
  top?: number
  sh?: number
  hem?: number
  lean?: number
  stoop?: number
  floor?: number
} = {}) {
  const b = -sh - 2 - stoop
  return `M${r1(-sh * 0.4)} ${top}C${r1(-sh - stoop * 0.6)} ${top + 1} ${r1(b)} ${top + 6} ${r1(b)} ${top + 18}C${r1(b - 2)} ${top + 60} ${r1(-hem * 0.8 + lean * 0.5)} ${r1(floor - 50)} ${r1(-hem + lean)} ${floor}L${r1(hem * 0.92 + lean)} ${floor}C${r1(hem * 0.62 + lean * 0.5)} ${r1(floor - 50)} ${r1(sh + 3)} ${top + 60} ${r1(sh + 1)} ${top + 18}C${r1(sh + 1)} ${top + 7} ${r1(sh - 3)} ${top + 1} ${r1(sh * 0.4)} ${top}Z`
}

/** Folds falling from the shoulders to the hem of a `gown`, cut in paper. */
export function gownFolds(o: { top?: number; hem?: number; lean?: number; floor?: number } = {}) {
  const top = o.top ?? -156
  const hem = o.hem ?? 30
  const lean = o.lean ?? 0
  const f = o.floor ?? 0
  return (
    gouge(-8, top + 20, -hem * 0.72 + lean, f - 6, 1.1, 0.8) +
    gouge(1, top + 40, -hem * 0.2 + lean, f - 5, 1, 0.4) +
    gouge(8, top + 36, hem * 0.42 + lean, f - 6, 1, -0.6) +
    gouge(-3, top + 70, -hem * 0.46 + lean, f - 4, 0.8, 0.5)
  )
}

/** A friar's hood, down, lying in folds on his shoulders behind his neck. */
export const COWL =
  'M9 -153C4 -162 -8 -166 -19 -163C-28 -160 -32 -150 -32 -137C-32 -124 -30 -111 -26 -98C-22 -109 -18 -121 -13 -130C-5 -135 4 -141 9 -153Z'
export const COWL_CUTS =
  gouge(-22, -155, -28, -110, 0.9, 1.2) +
  gouge(-14, -160, 5, -149, 0.8, -1.5) +
  gouge(-16, -146, -20, -118, 0.7, 0.8)
/**
 * A doublet and short trunk hose, for the young men: the body from the neck
 * to the tops of the legs, belted at the waist.
 */
export const DOUBLET =
  'M-3 -157C-12 -156 -16 -151 -16 -142L-13 -104L-17 -82C-8 -78 8 -78 17 -82L13 -104L15 -142C15 -151 10 -156 3 -157Z'
export const DOUBLET_CUTS =
  gouge(-13, -104, 13, -104, 1) +
  'M10.5 -146a1.2 1.2 0 1 0 0.1 0ZM10.2 -136a1.2 1.2 0 1 0 0.1 0ZM10 -126a1.2 1.2 0 1 0 0.1 0ZM10 -116a1.2 1.2 0 1 0 0.1 0Z' +
  gouge(-10, -100, -13, -84, 0.7) +
  gouge(2, -100, 2, -82, 0.7) +
  gouge(10, -100, 13, -84, 0.7)
/** A short cloak on the back shoulder, `swing` blowing it back. */
export function cloak(swing = 0) {
  return `M4 -158C-8 -160 -20 -154 -24 -142C-28 -126 -30 -104 ${-34 - swing} -78L${-14 - swing * 0.6} -76C-14 -96 -12 -120 -8 -136C-4 -146 0 -152 4 -158Z`
}
export const cloakCuts = (swing = 0) =>
  gouge(-18, -146, -26 - swing * 0.8, -82, 0.9, 1) +
  gouge(-11, -140, -19 - swing * 0.7, -80, 0.8, 0.6)

/** A shoe at a foot (the sole's back at `at`), facing right. */
export const shoe = ([x, y]: P, f: 1 | -1 = 1): Part => ({
  d: `M${x - f * 4} ${y - 6.5}L${x + f * 5} ${y - 6}C${x + f * 10.5} ${y - 5} ${x + f * 12.5} ${y - 2} ${x + f * 12.5} ${y + 0.5}L${x - f * 5} ${y + 0.5}Z`,
})
/** A riding boot to the knee: the leg below `knee` is booted, wider and square-topped. */
export const boot = (knee: P, [x, y]: P): Part[] => [
  {
    d: line([
      [knee[0], knee[1] - 2],
      [x, y - 5],
    ]),
    w: 10.5,
  },
  {
    d: `M${knee[0] - 7} ${knee[1] - 7}L${knee[0] + 7} ${knee[1] - 6}L${knee[0] + 6} ${knee[1] + 2}L${knee[0] - 6} ${knee[1] + 1}Z`,
  },
  shoe([x, y]),
]

// ── The churchyard and the Capulets' monument, for "The tomb" and "A glooming peace" ──

/**
 * The Capulets' monument, "A Monument belonging to the Capulets" (5.3): a
 * stone house for the dead on two steps, with a gabled front and an arched
 * door, its right side running off the block. The door has been broken open
 * ("Breaking open the door of the monument"), so its leaf hangs crooked inside
 * the arch. Romeo's torch burns in a bracket on the far wall inside: "What
 * torch is yond [...] It burneth in the Capels' monument", and at dawn the
 * Page points to it still: "There, where the torch doth burn."
 *
 * `night`: the vault is full of the torch's light. `dawn`: the torch still
 * burns, small, in a dark doorway, and the stone is grey in the morning.
 */
const MON = {
  body: 'M598 276V104L716 40L872 110V276Z',
  roof: 'M578 112L716 28L876 108V124L716 46L590 118Z',
  pediment: 'M618 110L716 58L846 116',
  door: 'M676 250V168C676 146 694 130 716 130C738 130 756 146 756 168V250Z',
  frame: 'M666 252V166C666 138 688 120 716 120C744 120 766 138 766 166V252',
  step1: 'M584 250H876V264H584Z',
  step2: 'M566 264H876V280H566Z',
  leaf: 'M680 250L678 172L700 150L706 156L702 250Z',
}
const MON_TORCH: P = [730, 170]
const CARVE = 1.6

type MonumentMarks = { stone: string; joints: string; rays: string }
const monumentCache: Partial<Record<'night' | 'dawn', MonumentMarks>> = {}
function monumentMarks(time: 'night' | 'dawn'): MonumentMarks {
  const hit = monumentCache[time]
  if (hit) return hit
  const r = rng(time === 'night' ? 1691 : 1692)
  // night: only the door's light touches the stone; dawn: grey all over
  const light =
    time === 'night'
      ? (x: number, y: number) =>
          Math.max(0.14, 0.8 - Math.hypot((x - 716) * 0.9, (y - 200) * 1.1) / 110)
      : (x: number, y: number) => 0.34 + (y - 60) / 900 - Math.abs(x - 716) / 1400
  const stone = gougeField(r, { x0: 600, x1: 870, y0: 60, y1: 250 }, light, {
    spacing: 6,
    len: [12, 40],
    gap: [5, 14],
    max: 3,
  })
    .split('M')
    .filter((c) => {
      if (!c) return false
      const [x, y] = c.split(/[ Q]/).map(Number)
      // no cuts inside the doorway, or above the line of the gable
      const inDoor = x > 664 && x < 768 && y > 118
      const aboveGable =
        x < 716 ? y < 104 - ((x - 598) / 118) * 64 : y < 40 + ((x - 716) / 156) * 70
      return !inDoor && !aboveGable
    })
    .map((c) => 'M' + c)
    .join('')
  // the courses of the stone: bed joints, and head joints staggered course by
  // course, all stopping at the door's frame
  let joints = ''
  for (let y = 132, row = 0; y < 250; y += 22, row++)
    for (let x = 600 + (row % 2 ? 0 : 24); x < 870; x += 48) {
      if (x > 640 && x < 774) continue
      joints += wedge(x, y, x + 48, y + between(r, -0.4, 0.4), 1, 1)
      joints += wedge(x, y, x + between(r, -0.5, 0.5), y + 22, 1, 1)
    }
  const tr =
    time === 'night'
      ? rays(rng(1693), MON_TORCH[0], MON_TORCH[1], { from: 12, to: 70, every: 10, width: 2.2 })
      : ''
  const out = { stone, joints, rays: tr }
  monumentCache[time] = out
  return out
}

export function Monument({ uid, time }: { uid: string; time: 'night' | 'dawn' }) {
  const m = monumentMarks(time)
  const night = time === 'night'
  const inside = `${uid}-vault`
  const [tx, ty] = MON_TORCH
  return (
    <g>
      <defs>
        <clipPath id={inside}>
          <path d={MON.door} />
        </clipPath>
      </defs>
      <path d={MON.body} fill={INK} stroke={PAPER} strokeWidth={CARVE} />
      <path d={m.stone} fill={PAPER} />
      <path d={m.joints} fill={night ? PAPER : INK} />
      <path d={MON.pediment} fill="none" stroke={PAPER} strokeWidth={1.4} />
      <path d={MON.roof} fill={INK} stroke={PAPER} strokeWidth={CARVE} strokeLinejoin="round" />
      <path d={MON.frame} fill="none" stroke={PAPER} strokeWidth={2.4} />
      {/* the vault through the broken door */}
      <path d={MON.door} fill={night ? PAPER : INK} />
      <g clipPath={`url(#${inside})`}>
        {night ? (
          <>
            <path d={m.rays} fill={INK} />
            <path d="M676 232H756V250H676Z" fill={INK} />
            <path d={gouge(676, 234, 756, 234, 1)} fill={PAPER} />
          </>
        ) : (
          <path d={gouge(684, 236, 750, 236, 0.8) + gouge(690, 244, 746, 244, 0.7)} fill={PAPER} />
        )}
        {/* Romeo's torch in its bracket on the far wall */}
        <path
          d={`M${tx - 2} ${ty + 8}L${tx + 2} ${ty + 8}L${tx + 3} ${ty + 30}L${tx - 3} ${ty + 30}Z`}
          fill={INK}
          stroke={night ? INK : PAPER}
          strokeWidth={1}
        />
        <path d={`M${tx - 8} ${ty + 30}H${tx + 8}`} stroke={night ? INK : PAPER} strokeWidth={2} />
        <circle
          className="lc-glow"
          cx={tx}
          cy={ty}
          r={night ? 11 : 8}
          fill="none"
          stroke={RED}
          strokeWidth={1.2}
        />
        <path
          className="lc-flicker"
          style={timing({ dur: 0.9 })}
          d={`M${tx} ${ty + 8}C${tx - 5} ${ty + 4} ${tx - 4} ${ty - 3} ${tx} ${ty - 12}C${tx + 4} ${ty - 3} ${tx + 5} ${ty + 4} ${tx} ${ty + 8}Z`}
          fill={RED}
        />
      </g>
      {/* the door leaf, broken open, hanging crooked */}
      <path d={MON.leaf} fill={INK} stroke={PAPER} strokeWidth={1.4} />
      <path d={gouge(686, 178, 686, 244, 0.7) + gouge(694, 164, 696, 244, 0.7)} fill={PAPER} />
      {/* the two steps: the "stony entrance" */}
      <path d={MON.step1} fill={INK} stroke={PAPER} strokeWidth={CARVE} />
      <path d={MON.step2} fill={INK} stroke={PAPER} strokeWidth={CARVE} />
      <path d={gouge(590, 254, 872, 254, 1) + gouge(572, 268, 872, 268, 1)} fill={PAPER} />
    </g>
  )
}

/**
 * The yew: a dense dark crown on a thick trunk, "Under yond yew tree lay thee
 * all along" (5.3). Its outline is fixed, so it is the same tree at night and
 * at dawn, and its needles are cut from a fixed seed. Drawn in its own frame,
 * the foot of the trunk at (0, 0).
 */
const YEW = {
  crown:
    'M-98 -58C-110 -64 -112 -80 -104 -90C-114 -100 -112 -118 -98 -124C-104 -140 -92 -156 -74 -156C-72 -174 -54 -186 -34 -182C-24 -198 0 -204 18 -194C36 -202 60 -194 66 -176C86 -176 102 -160 98 -142C112 -134 116 -114 106 -102C116 -90 114 -70 100 -62C94 -48 74 -42 58 -50C44 -38 20 -38 6 -48C-8 -38 -30 -38 -44 -48C-60 -40 -84 -44 -98 -58Z',
  trunk: 'M-14 0C-10 -20 -8 -40 -14 -58L8 -64C12 -44 14 -22 22 0Z',
  roots: 'M-30 2C-20 -4 -14 -6 -12 -10L-2 -6L6 -10C12 -4 20 -2 34 2Z',
}
/**
 * The yew's foliage, cut as tiers of scalloped clumps, each with a few needles
 * hanging under its edge: the dense, layered dark of a churchyard yew, and
 * not the round puffs of a broad-leaved tree.
 */
let yewCuts: string | undefined
function yewNeedles() {
  if (yewCuts) return yewCuts
  const r = rng(1694)
  let d = ''
  for (let y = -176; y < -52; y += 19) {
    const t = (y + 116) / 70
    const half = 100 * Math.sqrt(Math.max(0, 1 - t * t)) - 8
    let x = -half + between(r, 0, 8)
    while (x < half - 10) {
      const w = between(r, 12, 18)
      const yy = y + between(r, -2.5, 2.5)
      d += gouge(x, yy, x + w, yy + between(r, -1, 1), 1.3, 2.6)
      d += gouge(x + w * 0.3, yy + 4, x + w * 0.36, yy + 9, 0.55)
      d += gouge(x + w * 0.7, yy + 4, x + w * 0.74, yy + 8, 0.5)
      x += w + between(r, 2, 6)
    }
  }
  yewCuts = d
  return d
}
export function Yew({ at, scale = 1 }: { at: P; scale?: number }) {
  return (
    <g transform={`translate(${at[0]} ${at[1]}) scale(${scale})`}>
      <g fill={PAPER} stroke={PAPER} strokeWidth={3.4} strokeLinejoin="round">
        <path d={YEW.crown} />
        <path d={YEW.trunk} />
        <path d={YEW.roots} />
      </g>
      <path d={YEW.trunk} fill={INK} />
      <path d={YEW.roots} fill={INK} />
      <path d={YEW.crown} fill={INK} />
      <path d={yewNeedles()} fill={PAPER} />
      <path d={gouge(-2, -60, 2, -4, 1, 1.2) + gouge(8, -58, 12, -6, 0.8, -1)} fill={PAPER} />
    </g>
  )
}

/** A grave: a low mound of turned earth, and sometimes a small plain stone at its head. */
export function grave(cx: number, y: number, w: number, stone?: 'cross' | 'slab') {
  const mound = `M${cx - w} ${y}C${cx - w * 0.6} ${y - 11} ${cx + w * 0.6} ${y - 11} ${cx + w} ${y}Z`
  const x = cx - w
  const head =
    stone === 'cross'
      ? `M${x - 3} ${y - 2}V${y - 26}H${x - 10}V${y - 32}H${x - 3}V${y - 40}H${x + 3}V${y - 32}H${x + 10}V${y - 26}H${x + 3}V${y - 2}Z`
      : stone === 'slab'
        ? `M${x - 8} ${y}V${y - 26}C${x - 8} ${y - 34} ${x + 8} ${y - 34} ${x + 8} ${y - 26}V${y}Z`
        : ''
  return { mound, head }
}

/** A night sky of cut stars on the ink, for a churchyard at night. */
export function stars(
  r: Rng,
  box: { x0: number; x1: number; y0: number; y1: number },
  count: number,
) {
  let d = ''
  for (let i = 0; i < count; i++) {
    const x = between(r, box.x0, box.x1)
    const y = between(r, box.y0, box.y1)
    const s = between(r, 1.2, 2.8)
    d += `M${n(x - s)} ${n(y)}L${n(x)} ${n(y - s * 0.4)}L${n(x + s)} ${n(y)}L${n(x)} ${n(y + s * 0.4)}ZM${n(x)} ${n(y - s)}L${n(x + s * 0.4)} ${n(y)}L${n(x)} ${n(y + s)}L${n(x - s * 0.4)} ${n(y)}Z`
  }
  return d
}

/**
 * A pale sky engraved with ink: rows of cuts that thicken where `dark` is
 * high, the reverse of `gougeField` on a black ground. Fill INK over PAPER.
 */
export function engravedSky(
  r: Rng,
  box: { x0: number; x1: number; y0: number; y1: number },
  dark: (x: number, y: number) => number,
) {
  let d = ''
  for (let y = box.y0 + 3; y < box.y1; y += 6) {
    let x = box.x0 + between(r, -30, 0)
    while (x < box.x1) {
      const len = between(r, 30, 110)
      const D = dark(x + len / 2, y)
      if (r() < D * 1.1)
        d += gouge(x, y + between(r, -0.6, 0.6), x + len, y + between(r, -0.6, 0.6), 0.3 + D * 2.1)
      x += len + between(r, 6, 26)
    }
  }
  return d
}

/** Grass on a paper ground: short ink ticks, thicker nearer the reader. */
export function grass(
  r: Rng,
  box: { x0: number; x1: number; y0: number; y1: number },
  count: number,
) {
  let d = ''
  for (let i = 0; i < count; i++) {
    const t = Math.pow(r(), 0.8)
    const y = box.y0 + (box.y1 - box.y0) * t
    const x = between(r, box.x0, box.x1)
    const len = 5 + t * 14
    d += gouge(x, y, x + len, y + between(r, -1, 1), 0.5 + t * 1.2)
  }
  return d
}

/** A shadow on a paper ground under a standing figure: a few tapering cuts. */
export function footShadow(cx: number, y: number, halfW: number) {
  let d = ''
  for (let k = 0; k < 4; k++) {
    const w = halfW * (1 - k * 0.18)
    d += gouge(cx - w, y + k * 3, cx + w, y + k * 3 + 0.4, 1.8 - k * 0.35)
  }
  return d
}
