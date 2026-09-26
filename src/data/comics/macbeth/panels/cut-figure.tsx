import type { CSSProperties, ReactNode } from 'react'

import { gouge } from '@/components/comics/linocut/carve'
import { INK, PAPER } from '@/components/comics/linocut/palette'

/**
 * A figure cut from the block, as the reference panel cuts Fred
 * (src/data/comics/a-christmas-carol/counting-house.tsx): a paper halo round
 * every part, so the figure reads as one shape with a single carved outline
 * on a black ground, then the parts in ink over it, then the white cuts of
 * its folds and features. Drawn for the Macbeth panels of moments 11 to 15
 * (Acts 2.4 to 3.4) and shared by the other Macbeth panels, so the people in
 * them are cut the same way.
 *
 * A part is a filled shape, or, with `w`, a limb drawn as a stroke of that
 * width. `sep` cuts a paper edge of that width round one part before it is
 * inked, to lift an arm off the coat behind it. `t` is a transform for that
 * part alone, so a head drawn once can be turned and placed.
 *
 * `tone="paper"` swaps the colours: a paper figure with an ink halo and ink
 * cuts. Banquo's ghost is cut that way, so it reads as light, not as a body.
 */
export type Part = { d: string; w?: number; sep?: number; t?: string }

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

/**
 * A head in profile facing right, centred on (0, 0) in a box about 34 wide
 * and 42 high: the back of the neck at the lower left, the crown, a straight
 * brow, the nose, the lips and the chin. Placed with a part's `t`, and
 * mirrored with a negative x scale to face left.
 */
export const HEAD =
  'M-9 21C-10 15 -14 11 -15 3C-16 -9 -8 -19 2 -19C10 -19 14 -13 13.5 -7L14.5 -3L19 3.5C19.5 4.5 18.5 5 17 5L14 5.5L15 8L13.5 9.5L14.5 11.5L12.5 13C12 15.5 10 17 6.5 17L5.5 21Z'

/**
 * Hair swept back over a HEAD (or a head drawn in its frame), cut as a few
 * white strands from the brow to the nape, so a black head does not read as
 * bald. Fill with the figure's edge colour, with the head's own transform.
 */
export const HAIR_CUTS =
  gouge(7, -15.5, -12, -5, 0.6, 2.6) +
  gouge(10.5, -11, -13.5, 3, 0.55, 3) +
  gouge(-1, -18, -13, -10, 0.5, 1.4)

/** The eye of a HEAD, one short cut under the brow. Transform it with the head. */
export const EYE_CUT = gouge(5.5, -2.6, 10.5, -3.6, 0.95)

type P = [number, number]
const line = (pts: P[]) => 'M' + pts.map(([x, y]) => `${x} ${y}`).join('L')
const r1 = (v: number) => Math.round(v * 10) / 10

/**
 * A knee-length coat or tunic hung on the line from neck to hip: shoulders
 * `width` across, drawn in at the belt, flaring to a hem `hem` units below the
 * hip. `swing` pushes the hem backwards (against `facing`), as a coat does on
 * a man running or lunging.
 */
export function coat(
  neck: P,
  hip: P,
  facing: 1 | -1,
  {
    width = 30,
    hem = 40,
    flare = 12,
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
  const s1 = at(neck, 4, h)
  const s2 = at(neck, 4, -h)
  const top1 = at(neck, -4, h * 0.55)
  const top2 = at(neck, -4, -h * 0.55)
  const w1 = at(hip, -6, h * 0.84)
  const w2 = at(hip, -6, -h * 0.84)
  const hem1: P = [
    r1(hip[0] + u[0] * hem + v[0] * (h + flare) + back),
    r1(hip[1] + u[1] * hem + v[1] * (h + flare)),
  ]
  const hem2: P = [
    r1(hip[0] + u[0] * hem - v[0] * (h + flare) + back),
    r1(hip[1] + u[1] * hem - v[1] * (h + flare)),
  ]
  const c1 = at(neck, -4, h)
  const c2 = at(neck, -4, -h)
  return `M${top1[0]} ${top1[1]}Q${c1[0]} ${c1[1]} ${s1[0]} ${s1[1]}L${w1[0]} ${w1[1]}L${hem1[0]} ${hem1[1]}L${hem2[0]} ${hem2[1]}L${w2[0]} ${w2[1]}L${s2[0]} ${s2[1]}Q${c2[0]} ${c2[1]} ${top2[0]} ${top2[1]}Z`
}

/**
 * A figure in action, from its joints: for a lunge, a run or a recoil, where
 * a drawn outline would take a dozen tries. The limbs are strokes through
 * shoulder, elbow and hand or hip, knee and foot, with a fist or a boot at
 * the end; the body is a `coat` on the line from neck to hip. Returned in
 * drawing order: far limbs, coat, near leg, head, near arm (lifted off the
 * body by its own paper edge).
 */
export function posed(p: {
  facing: 1 | -1
  neck: P
  hip: P
  head: { d: string; at: P; rot?: number; scale?: number }
  near: { arm: P[]; leg: P[] }
  far: { arm: P[]; leg: P[] }
  body?: { width?: number; hem?: number; flare?: number; swing?: number }
  arm?: number
  leg?: number
}): Part[] {
  const f = p.facing
  const boot = ([x, y]: P): Part => ({
    d: `M${x - f * 5} ${y - 7}L${x + f * 6} ${y - 6}C${x + f * 11} ${y - 5} ${x + f * 13} ${y - 2} ${x + f * 13} ${y + 1}L${x - f * 6} ${y + 1}Z`,
  })
  const aw = p.arm ?? 8
  const fist = ([x, y]: P): Part => ({
    d: `M${x - aw * 0.62} ${y}a${aw * 0.62} ${aw * 0.62} 0 1 0 ${aw * 1.24} 0a${aw * 0.62} ${aw * 0.62} 0 1 0 ${-aw * 1.24} 0Z`,
  })
  const s = p.head.scale ?? 1
  const last = (a: P[]) => a[a.length - 1]
  return [
    { d: line(p.far.arm), w: aw },
    fist(last(p.far.arm)),
    { d: line(p.far.leg), w: p.leg ?? 10 },
    boot(last(p.far.leg)),
    { d: line([p.neck, p.hip]), w: (p.body?.width ?? 30) * 0.8 },
    { d: coat(p.neck, p.hip, f, p.body) },
    { d: line(p.near.leg), w: p.leg ?? 10 },
    boot(last(p.near.leg)),
    {
      d: p.head.d,
      t: `translate(${p.head.at[0]} ${p.head.at[1]}) rotate(${p.head.rot ?? 0}) scale(${f * s} ${s})`,
    },
    { d: line(p.near.arm), w: aw, sep: 1.5 },
    fist(last(p.near.arm)),
  ]
}

/** The transform `posed` gives its head, for cutting an eye or hair in the same place. */
export function headAt(facing: 1 | -1, at: P, rot = 0, scale = 1) {
  return `translate(${at[0]} ${at[1]}) rotate(${rot}) scale(${facing * scale} ${scale})`
}
