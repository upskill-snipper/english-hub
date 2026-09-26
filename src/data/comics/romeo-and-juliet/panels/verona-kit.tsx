import type { CSSProperties, ReactNode } from 'react'

import { INK, PAPER } from '@/components/comics/linocut/palette'
import { deg, gouge, n } from '@/components/comics/linocut/carve'

import {
  HEAD_MAN as HEAD_MAN_SHAPE,
  JULIET_STRANDS as JULIET_STRANDS_CUTS,
  ROMEO_CURLS as ROMEO_CURLS_CUTS,
  ROMEO_HAIR as ROMEO_HAIR_SHAPE,
} from './acts-3-4-kit'

/**
 * The people of Verona for the panels of moments 6 to 10 of the guide's
 * timeline (Act 2, Scene 2 to Act 3, Scene 2): "The balcony", "The Friar
 * agrees", "A secret wedding", "Two deaths and a banishment" and "Juliet hears
 * the news". Romeo is in four of them, Juliet in three and Friar Lawrence in
 * two, so each is cut once here and looks the same from panel to panel.
 *
 * A figure is cut as the reference panel cuts Fred
 * (src/data/comics/a-christmas-carol/counting-house.tsx), and as the Macbeth
 * panels cut theirs (src/data/comics/macbeth/panels/cut-figure.tsx, whose
 * CutFigure this repeats in leaner markup): a halo in the edge colour round
 * every part, so the figure reads as one shape with a single carved outline,
 * then the parts, then the cuts of the folds and features. Heads are in the
 * same frame as the Macbeth heads (centred on 0, 0, about 34 by 42, facing
 * right).
 *
 * WEIGHT. The first version wrote every finger of every hand as three
 * elements, each carrying its own stroke attributes; three figures in the
 * Friar's cell came to 27 KB and pushed the panel to 99 KB, over the style
 * guide's 90. The halo is now merged into one path per stroke width, the
 * fingers of a hand are one path, and the shared attributes sit on the
 * figure's group. The print is unchanged.
 *
 * FOLD CUTS. A cut narrower than about 1.6 units is lost under the paper
 * grain at panel size: the Friar's first habit folds, at 1 unit, could only be
 * seen at five times magnification. Cut folds, belts and hems at 1.6 to 2.6.
 *
 * WHAT THE PLAY SAYS OF THEM, AND SO WHAT IS DRAWN (Project Gutenberg #1513,
 * held at src/data/full-texts/romeo-and-juliet.ts):
 * - Juliet is "not fourteen" (1.3), and Romeo sees her as light: "So shows a
 *   snowy dove trooping with crows" (1.5), "It is the east, and Juliet is the
 *   sun" (2.2). So she is cut in paper, with an ink edge, wherever she is; her
 *   dark hair falls loose down her back, as a girl's, not under a veil.
 * - Romeo is young: the Friar calls him "Young son" and "young waverer" (2.3),
 *   Tybalt calls him "Boy" (3.1). So he is beardless, bareheaded, with a full
 *   head of hair curling at the nape, in the doublet, hose and short cloak of
 *   the play's Italy, and a rapier at his side.
 * - Friar Lawrence is old ("Care keeps his watch in every old man's eye",
 *   "mine ancient ears", 2.3) and a Franciscan ("Holy Saint Francis!", 2.3).
 *   So he wears a friar's habit with its hood thrown back and a knotted cord
 *   for a girdle, his crown shaved and ringed with white hair.
 * - The Nurse is old ("These griefs, these woes, these sorrows make me old",
 *   3.2) and large enough for Mercutio to cry "A sail, a sail!" at her (2.4).
 *   So she is broad, in a long gown and apron, with a white linen coif.
 *
 * Nothing here is taken from a film or stage production. The hands are drawn
 * with their fingers apart (see `hand`), because at panel size a hand whose
 * fingers merge reads as a fist.
 */

export type P = [number, number]

/**
 * A part is a filled shape, or, with `w`, a limb drawn as a stroke of that
 * width. `sep` cuts an edge of that width round the part before it is inked,
 * to lift an arm off the body behind it. `t` is a transform for that part
 * alone.
 */
export type Part = { d: string; w?: number; sep?: number; t?: string }

/**
 * One entry in a figure: a part, or a group of parts (an arm and its hand)
 * whose separating edges are all cut before any of them is inked, so the
 * group is lifted off the body as one shape and its own fingers are not cut
 * into each other.
 */
export type Piece = Part | Part[]

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
  parts: Piece[]
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
  const groups = parts.map((piece) => (Array.isArray(piece) ? piece : [piece]))
  const all = groups.flat()
  // The halo is all one colour, so the order of its parts does not matter:
  // the plain shapes are merged into one path and the limbs into one path per
  // width, which keeps the markup small (every panel of a text is sent with
  // the page). A part with its own transform keeps its own element.
  const haloShapes = all.filter((p) => !p.w && !p.t)
  const haloLimbs = new Map<string, string>()
  for (const p of all)
    if (p.w && !p.t) {
      const k = n(p.w + halo * 2)
      haloLimbs.set(k, (haloLimbs.get(k) ?? '') + p.d)
    }
  const placed = all.filter((p) => p.t)
  const one = (p: Part, colour: string, extra: number, key: string) =>
    p.w ? (
      <path
        key={key}
        d={p.d}
        transform={p.t}
        fill="none"
        stroke={colour}
        strokeWidth={n(p.w + extra)}
      />
    ) : (
      <path
        key={key}
        d={p.d}
        transform={p.t}
        fill={colour}
        stroke={extra ? colour : undefined}
        strokeWidth={extra ? n(extra) : undefined}
      />
    )
  return (
    <g
      transform={transform}
      className={className}
      style={style}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {halo > 0 && (
        <>
          <path
            d={haloShapes.map((p) => p.d).join('')}
            fill={edge}
            stroke={edge}
            strokeWidth={n(halo * 2)}
          />
          {[...haloLimbs].map(([w, d]) => (
            <path key={w} d={d} fill="none" stroke={edge} strokeWidth={w} />
          ))}
          {placed.map((p, i) => one(p, edge, halo * 2, `h${i}`))}
        </>
      )}
      {groups.map((g, i) => [
        ...g.map((p, j) => (p.sep ? one(p, edge, p.sep * 2, `s${i}-${j}`) : null)),
        ...g.map((p, j) => one(p, fg, 0, `f${i}-${j}`)),
      ])}
      {cuts && <path d={cuts} fill={edge} />}
      {children}
    </g>
  )
}

const pt = (p: P) => `${n(p[0])} ${n(p[1])}`
/** A polyline through the points, for a limb. */
export const limb = (pts: P[]) => 'M' + pts.map(pt).join('L')

/**
 * An open hand at the end of an arm: a palm, four fingers and a thumb, each
 * finger its own stroke, splayed `spread` degrees from the next so that the
 * edge colour shows between them. `angle` is the direction the fingers point,
 * in degrees clockwise from the right; `thumb` is the side the thumb is on (1
 * to the fingers' right as they point, -1 to their left). About 15 units
 * long, a little larger than life, so the fingers survive at panel size.
 */
export function hand(
  wrist: P,
  angle: number,
  o: { size?: number; spread?: number; thumb?: 1 | -1; sep?: number } = {},
): Part[] {
  const L = o.size ?? 15
  const sp = o.spread ?? 15
  const th = o.thumb ?? 1
  const sep = o.sep
  const a = deg(angle)
  const ux = Math.cos(a)
  const uy = Math.sin(a)
  const at = (x: number, y: number): P => [wrist[0] + ux * x - uy * y, wrist[1] + uy * x + ux * y]
  const palm: Part = {
    d: `M${pt(at(-1.5, -0.17 * L))}L${pt(at(0.42 * L, -0.23 * L))}Q${pt(at(0.52 * L, 0))} ${pt(at(0.42 * L, 0.23 * L))}L${pt(at(-1.5, 0.17 * L))}Z`,
    sep,
  }
  // Little finger to forefinger, from the side away from the thumb.
  const lengths = [0.3, 0.4, 0.43, 0.38]
  const fingers: Part = {
    d: [-1.5, -0.5, 0.5, 1.5]
      .map((k, i) => {
        const kk = k * th
        const base = at(0.4 * L, kk * 0.12 * L)
        const fa = a + deg(kk * sp)
        const len = lengths[i] * L
        return `M${pt(base)}L${pt([base[0] + Math.cos(fa) * len, base[1] + Math.sin(fa) * len])}`
      })
      .join(''),
    w: 0.12 * L,
    sep,
  }
  const tb = at(0.1 * L, th * 0.19 * L)
  const ta = a + deg(th * 52)
  const thumbPart: Part = {
    d: `M${pt(tb)}L${pt([tb[0] + Math.cos(ta) * 0.33 * L, tb[1] + Math.sin(ta) * 0.33 * L])}`,
    w: 0.14 * L,
    sep,
  }
  return [palm, fingers, thumbPart]
}

/**
 * A hand raised in warning: the forefinger straight up along `angle`, the
 * other fingers curled into the palm, the thumb laid across them. The finger
 * is long and the fist small, so it reads as a finger raised, never a fist.
 */
export function warningHand(
  wrist: P,
  angle: number,
  o: { size?: number; sep?: number } = {},
): Part[] {
  const L = o.size ?? 15
  const a = deg(angle)
  const ux = Math.cos(a)
  const uy = Math.sin(a)
  const at = (x: number, y: number): P => [wrist[0] + ux * x - uy * y, wrist[1] + uy * x + ux * y]
  const c = at(0.3 * L, 0)
  const r = 0.24 * L
  const base = at(0.4 * L, -0.12 * L)
  const tip = at(0.95 * L, -0.14 * L)
  const tb = at(0.18 * L, 0.2 * L)
  const tt = at(0.42 * L, 0.18 * L)
  return [
    {
      d: `M${n(c[0] - r)} ${n(c[1])}a${n(r)} ${n(r)} 0 1 0 ${n(2 * r)} 0a${n(r)} ${n(r)} 0 1 0 ${n(-2 * r)} 0Z`,
      sep: o.sep,
    },
    { d: `M${pt(base)}L${pt(tip)}`, w: 0.14 * L, sep: o.sep },
    { d: `M${pt(tb)}L${pt(tt)}`, w: 0.13 * L, sep: o.sep },
  ]
}

/** An arm through shoulder, elbow and wrist, ending in an open `hand`, as one group. */
export function arm(
  pts: P[],
  handAngle: number,
  o: { w?: number; sep?: number; size?: number; spread?: number; thumb?: 1 | -1 } = {},
): Part[] {
  return [
    { d: limb(pts), w: o.w ?? 8, sep: o.sep },
    ...hand(pts[pts.length - 1], handAngle, {
      size: o.size,
      spread: o.spread,
      thumb: o.thumb,
      sep: o.sep,
    }),
  ]
}

/** A shoe on the ground at (x, y), pointing along `facing`. */
export function shoe([x, y]: P, facing: 1 | -1): Part {
  const f = facing
  return {
    d: `M${x - f * 5} ${y - 6}L${x + f * 5} ${y - 5}C${x + f * 10} ${y - 4} ${x + f * 12} ${y - 2} ${x + f * 12} ${y + 1}L${x - f * 6} ${y + 1}Z`,
  }
}

/**
 * A doublet with its short skirt, hung on the line from neck to hip:
 * shoulders `width` across, drawn in at the waist, flaring to a hem `hem`
 * below the hip. `swing` pushes the hem backwards, as on a man lunging. The
 * shape of the Macbeth kit's coat, cut short for the play's Italy.
 */
export function doublet(
  neck: P,
  hip: P,
  facing: 1 | -1,
  {
    width = 28,
    hem = 16,
    flare = 6,
    swing = 0,
  }: { width?: number; hem?: number; flare?: number; swing?: number } = {},
): string {
  const dx = hip[0] - neck[0]
  const dy = hip[1] - neck[1]
  const L = Math.hypot(dx, dy) || 1
  const u: P = [dx / L, dy / L]
  const v: P = [-u[1], u[0]]
  const at = (o: P, a: number, b: number): P => [
    o[0] + u[0] * a + v[0] * b,
    o[1] + u[1] * a + v[1] * b,
  ]
  const h = width / 2
  const back = -facing * swing
  const s1 = at(neck, 4, h)
  const s2 = at(neck, 4, -h)
  const top1 = at(neck, -4, h * 0.55)
  const top2 = at(neck, -4, -h * 0.55)
  const w1 = at(hip, -8, h * 0.78)
  const w2 = at(hip, -8, -h * 0.78)
  const hem1: P = [
    hip[0] + u[0] * hem + v[0] * (h + flare) + back,
    hip[1] + u[1] * hem + v[1] * (h + flare),
  ]
  const hem2: P = [
    hip[0] + u[0] * hem - v[0] * (h + flare) + back,
    hip[1] + u[1] * hem - v[1] * (h + flare),
  ]
  const c1 = at(neck, -4, h)
  const c2 = at(neck, -4, -h)
  return `M${pt(top1)}Q${pt(c1)} ${pt(s1)}L${pt(w1)}L${pt(hem1)}L${pt(hem2)}L${pt(w2)}L${pt(s2)}Q${pt(c2)} ${pt(top2)}Z`
}

/**
 * A long gown: a bodice from the neck to the waist, then a full skirt to the
 * floor at `hemY`, reaching `front` ahead of the waist and `back` behind it.
 */
export function gown(
  neck: P,
  waist: P,
  hemY: number,
  facing: 1 | -1,
  {
    shoulder = 26,
    waistW = 18,
    front = 34,
    back = 40,
  }: { shoulder?: number; waistW?: number; front?: number; back?: number } = {},
): string {
  const f = facing
  const dx = waist[0] - neck[0]
  const dy = waist[1] - neck[1]
  const L = Math.hypot(dx, dy) || 1
  const u: P = [dx / L, dy / L]
  // v points to the figure's back.
  const v: P = [-u[1] * f, u[0] * f]
  const at = (o: P, a: number, b: number): P => [
    o[0] + u[0] * a + v[0] * b,
    o[1] + u[1] * a + v[1] * b,
  ]
  const h = shoulder / 2
  const t1 = at(neck, -4, h * 0.55)
  const c1 = at(neck, -4, h)
  const s1 = at(neck, 4, h)
  const w1 = at(waist, 0, waistW / 2)
  const hb: P = [waist[0] - f * back, hemY]
  const hf: P = [waist[0] + f * front, hemY]
  const w2 = at(waist, 0, -waistW / 2)
  const s2 = at(neck, 4, -h)
  const c2 = at(neck, -4, -h)
  const t2 = at(neck, -4, -h * 0.55)
  const midHem: P = [(hb[0] + hf[0]) / 2, hemY + 4]
  return (
    `M${pt(t1)}Q${pt(c1)} ${pt(s1)}L${pt(w1)}` +
    `C${pt([w1[0] - f * 8, w1[1] + (hemY - w1[1]) * 0.35])} ${pt([hb[0] + f * 6, hemY - (hemY - w1[1]) * 0.3])} ${pt(hb)}` +
    `Q${pt(midHem)} ${pt(hf)}` +
    `C${pt([hf[0] - f * 6, hemY - (hemY - w2[1]) * 0.3])} ${pt([w2[0] + f * 6, w2[1] + (hemY - w2[1]) * 0.35])} ${pt(w2)}` +
    `L${pt(s2)}Q${pt(c2)} ${pt(t2)}Z`
  )
}

/**
 * A rapier, from the grip in the hand along `angle` (degrees clockwise from
 * the right): a long, narrow blade, a cross guard and a round pommel. Drawn in
 * paper with a fine ink edge, so the steel reads on the dark ground and the
 * light one.
 */
export function rapier(grip: P, angle: number, len = 120): string {
  const a = deg(angle)
  const u: P = [Math.cos(a), Math.sin(a)]
  const v: P = [-u[1], u[0]]
  const at = (x: number, y: number): P => [
    grip[0] + u[0] * x + v[0] * y,
    grip[1] + u[1] * x + v[1] * y,
  ]
  const blade = `M${pt(at(5, -1.5))}L${pt(at(len, -0.3))}L${pt(at(len + 3, 0))}L${pt(at(len, 0.3))}L${pt(at(5, 1.5))}Z`
  return blade + hilt(grip, angle)
}

/** A rapier's hilt alone: cross guard, knuckle bow and pommel, the blade along `angle`. */
export function hilt(grip: P, angle: number): string {
  const a = deg(angle)
  const u: P = [Math.cos(a), Math.sin(a)]
  const v: P = [-u[1], u[0]]
  const at = (x: number, y: number): P => [
    grip[0] + u[0] * x + v[0] * y,
    grip[1] + u[1] * x + v[1] * y,
  ]
  const guard = `M${pt(at(3, -10))}L${pt(at(5.5, -10))}L${pt(at(5.5, 10))}L${pt(at(3, 10))}Z`
  const bow = `M${pt(at(4, 2))}Q${pt(at(-3, 11))} ${pt(at(-10, 3))}L${pt(at(-10, 1.2))}Q${pt(at(-3, 8.6))} ${pt(at(4, 0.2))}Z`
  const c = at(-11, 0)
  const pommel = `M${n(c[0] - 3)} ${n(c[1])}a3 3 0 1 0 6 0a3 3 0 1 0 -6 0Z`
  return guard + bow + pommel
}

/**
 * A rapier in its scabbard at the hip, angled down behind the figure: the
 * scabbard as a part of the figure, and the hilt to print in paper over it.
 */
export function sheathed(hip: P, facing: 1 | -1, len = 84): { scabbard: Part; hilt: string } {
  const f = facing
  const a = f === 1 ? 158 : 22
  const start: P = [hip[0] + f * 8, hip[1] - 3]
  const end: P = [start[0] + Math.cos(deg(a)) * len, start[1] + Math.sin(deg(a)) * len]
  return {
    scabbard: { d: limb([start, end]), w: 3.6 },
    hilt: hilt(start, a),
  }
}

// ── Heads, facing right, centred on (0, 0) ───────────────────────────────────

/*
 * Romeo, Juliet, the Nurse and Friar Lawrence are the people of Act 3 and 4
 * too, so their heads are the ones cut for those panels (moments 11 to 15,
 * ./acts-3-4-kit.tsx), and each keeps one outline from the balcony to the
 * vault. The young men of the fight in Act 3, Scene 1 wear the caps, and
 * Tybalt the feather, that ./people.tsx gives them for the brawl in Act 1.
 */
export {
  HEAD_MAN,
  ROMEO_HAIR,
  ROMEO_CURLS,
  HEAD_GIRL,
  JULIET_HAIR,
  JULIET_STRANDS,
  HEAD_NURSE,
  COIF,
  COIF_EDGE,
  TONSURE,
  TONSURE_STRANDS,
  EYE,
} from './acts-3-4-kit'

/*
 * The names the panels of moments 1 to 5 take from this kit (./people.tsx),
 * kept so that they draw the same Romeo, Juliet and Nurse as moments 6 to 15.
 * HEAD_ROMEO is the man's head and Romeo's curls as one shape: both outlines
 * run the same way round (checked in a browser, 26 September 2026), so as
 * one path they fill as their union with no holes.
 */
export const HEAD_ROMEO = HEAD_MAN_SHAPE + ROMEO_HAIR_SHAPE
export const ROMEO_HAIR_CUTS = ROMEO_CURLS_CUTS
export const JULIET_HAIR_CUTS = JULIET_STRANDS_CUTS
export { HEAD_WOMAN, COIF as NURSE_COIF } from './acts-3-4-kit'
/** Folds in the Nurse's coif, in ink: the band over the crown and a fold at the back. */
export const NURSE_COIF_CUTS = gouge(10, -14, -14, -12, 0.9, 2.4) + gouge(-16, -4, -18, 26, 0.8, -1)

/** Juliet's eye, lid and mouth, in ink on her paper face, in the frame of HEAD_GIRL. */
export const JULIET_FACE = gouge(4.6, -7.2, 10.6, -8, 0.6, -0.4) + gouge(9.6, 10, 12.2, 9.8, 0.45)
export const JULIET_EYE: P = [8.4, -3.2]

/** The transform for a head placed at `at`, facing `facing`, turned `rot` degrees. */
export function headAt(facing: 1 | -1, at: P, rot = 0, scale = 1) {
  return `translate(${n(at[0])} ${n(at[1])}) rotate(${rot}) scale(${n(facing * scale)} ${n(scale)})`
}
