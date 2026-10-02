import type { ReactNode } from 'react'

import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, gouge, n, rng } from '@/components/comics/linocut/carve'

import type { Bed, Light } from './bedchamber'

/**
 * The bed of ./bedchamber.tsx with its curtains OPEN, for the two panels set
 * before they are drawn: "The willow song" (Act 4, Scene 3, the wedding sheets
 * laid on it) and "The murder" (Act 5, Scene 2, Desdemona asleep in it, the
 * moment before anything happens). The cornice, the scalloped valance, the
 * turned posts with their knobs and rings, the coverlet's scalloped hem and
 * the side rail are cut to the same measures as ./bedchamber.tsx's
 * CurtainedBed, so that it is the same bed when "Emilia speaks" and
 * "Othello's last words" show it with the curtains drawn ("let me the
 * curtains draw", 5.2). If CurtainedBed's measures change, change them here
 * too and preview all four panels.
 *
 * WHAT THE PLAY SAYS. "Desdemona in bed asleep; a light burning" (5.2); "Lay
 * on my bed my wedding sheets" (4.2); "I have laid those sheets you bade me on
 * the bed" (4.3). So the curtains are tied back at the posts, the back hanging
 * shows between them, and on the mattress is `linen`: the white sheets, or
 * Desdemona under them.
 *
 * SAFEGUARDING. The head of the bed is the white linen drawn over a bolster,
 * one mass with the sheet, and there is no loose pillow anywhere near her (the
 * play's own rule, ../index.ts).
 */

/** Where the curtains hang from: as CurtainedBed. */
const curtainTop = (b: Bed) => b.top + 26
/**
 * The top of the mattress, where the coverlet starts to fall over the side
 * rail: where CurtainedBed's coverlet starts under the drawn curtains.
 */
export const linenTop = (b: Bed) => b.foot - 68
/** The coverlet's hem: as CurtainedBed. */
const hemOf = (b: Bed) => b.foot - 30

/**
 * The back hanging's folds, the gathered curtains' folds and the folds of the
 * white coverlet where it falls over the rail, for one panel's seed and light.
 */
export function openBedMarks(
  seed: number,
  b: Bed,
  light: Light,
): { hang: string; gather: string; cover: string } {
  const r = rng(seed)
  const top = curtainTop(b)
  const bot = linenTop(b)
  let hang = ''
  for (let x = b.x0 + 26; x < b.x1 - 22; x += between(r, 10, 15)) {
    const L = light(x, (top + bot) / 2)
    hang += gouge(x, top + 10, x + between(r, -2, 2), bot - 4, 0.45 + L * 1.9, between(r, -1, 1))
  }
  // three folds in each gathered curtain, pinched in at the tie
  let gather = ''
  for (const [x, dir] of [
    [b.x0 + 6, 1],
    [b.x1 - 6, -1],
  ] as const) {
    for (const k of [0, 1, 2]) {
      const xa = x + dir * (3 + k * 5)
      const L = light(xa, 140)
      gather +=
        gouge(xa, top + 8, x + dir * (3 + k * 2), tieY(b) - 4, 0.6 + L * 1.2, dir * 0.8) +
        gouge(
          x + dir * (3 + k * 2),
          tieY(b) + 6,
          x + dir * (3 + k * 3.4),
          bot - 4,
          0.6 + L * 1.2,
          -dir * 0.4,
        )
    }
  }
  // the coverlet's folds over the rail, cut as CurtainedBed cuts them
  let cover = ''
  for (let x = b.x0 + 20; x < b.x1 - 12; x += between(r, 22, 32))
    cover += gouge(x, bot + 13, x + between(r, -3, 3), b.foot - 33, 1, between(r, -1.2, 1.2))
  return { hang, gather, cover }
}

/** The height of the ties that hold the curtains back. */
const tieY = (b: Bed) => Math.round((curtainTop(b) + linenTop(b)) / 2)

/**
 * The bed, its curtains tied back at the posts. `linen` is drawn on the
 * mattress, in front of the back hanging and behind the coverlet's fall, the
 * posts and the curtains.
 */
export function OpenBed({
  b,
  marks,
  linen,
}: {
  b: Bed
  marks: { hang: string; gather: string; cover: string }
  linen: ReactNode
}) {
  const { x0, x1, foot, top } = b
  const ct = curtainTop(b)
  const lt = linenTop(b)
  const hemY = hemOf(b)
  const ty = tieY(b)
  // the valance, as CurtainedBed cuts it
  const span = x1 - x0 + 12
  const k = Math.max(4, Math.round(span / 19))
  const s = span / k
  let valance = `M${n(x0 - 6)} ${top + 10}H${n(x1 + 6)}V${top + 24}`
  for (let i = 0; i < k; i++) {
    const xa = x1 + 6 - i * s
    valance += `Q${n(xa - s / 2)} ${top + 34} ${n(xa - s)} ${top + 24}`
  }
  valance += 'Z'
  // the white coverlet with its scalloped hem, as CurtainedBed cuts it
  let hem = `M${n(x0 + 2)} ${lt}H${n(x1 - 2)}V${hemY - 4}`
  const kk = Math.max(4, Math.round((x1 - x0) / 30))
  const ss = (x1 - 4 - (x0 + 2)) / kk
  for (let i = 0; i < kk; i++) {
    const xa = x1 - 2 - i * ss
    hem += `Q${n(xa - ss / 2)} ${hemY + 5} ${n(xa - ss)} ${hemY - 4}`
  }
  hem += 'Z'
  // a curtain gathered and tied back at a post: full at the top, pinched in
  // at the tie, and falling narrow to the mattress, so that it does not hide
  // whoever lies at the head of the bed
  const gathered = (x: number, dir: 1 | -1) =>
    `M${n(x)} ${ct}H${n(x + dir * 26)}C${n(x + dir * 18)} ${ct + 40} ${n(x + dir * 12)} ${ty - 16} ${n(x + dir * 9)} ${ty}` +
    `C${n(x + dir * 10)} ${ty + 14} ${n(x + dir * 13)} ${lt - 18} ${n(x + dir * 14)} ${lt}H${n(x)}Z`
  const ring = (x: number, y: number) => gouge(x - 4.4, y, x + 4.4, y, 1.1)
  return (
    <g>
      {/* the back hanging, seen between the tied curtains */}
      <path
        d={`M${n(x0)} ${ct}H${n(x1)}V${lt + 4}H${n(x0)}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={marks.hang} fill={PAPER} />
      {linen}
      {/* the white coverlet falling over the side rail, its hem as CurtainedBed's */}
      <path
        d={`M${n(x0)} ${lt + 4}H${n(x1)}V${hemY + 2}H${n(x0)}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={hem} fill={PAPER} />
      <path d={marks.cover} fill={INK} />
      <path d={`M${n(x0)} ${hemY + 2}H${n(x1)}V${foot - 6}H${n(x0)}Z`} fill={INK} />
      <path d={gouge(x0 + 8, hemY + 9, x1 - 8, hemY + 9, 1.2)} fill={PAPER} />
      {/* the curtains, drawn back and tied at each post */}
      <g fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round">
        <path d={gathered(x0, 1)} />
        <path d={gathered(x1, -1)} />
      </g>
      <path d={marks.gather} fill={PAPER} />
      <path
        d={gouge(x0 + 2, ty, x0 + 16, ty, 1.6) + gouge(x1 - 16, ty, x1 - 2, ty, 1.6)}
        fill={PAPER}
      />
      {/* the valance and the cornice */}
      <path d={valance} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={gouge(x0 + 2, top + 17, x1 - 2, top + 17, 1.1)} fill={PAPER} />
      <rect
        x={x0 - 16}
        y={top}
        width={x1 - x0 + 32}
        height={11}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      {/* the posts, turned, with a knob above the cornice */}
      <path
        d={`M${n(x0 - 8)} ${top - 6}V${foot}M${n(x1 + 8)} ${top - 6}V${foot}`}
        stroke={PAPER}
        strokeWidth={11.6}
      />
      <path
        d={`M${n(x0 - 8)} ${top - 6}V${foot}M${n(x1 + 8)} ${top - 6}V${foot}`}
        stroke={INK}
        strokeWidth={8.4}
      />
      <g fill={INK} stroke={PAPER} strokeWidth={1.4}>
        <circle cx={n(x0 - 8)} cy={top - 9} r={5.4} />
        <circle cx={n(x1 + 8)} cy={top - 9} r={5.4} />
      </g>
      <path
        d={
          ring(x0 - 8, ct + 30) +
          ring(x0 - 8, lt + 6) +
          ring(x0 - 8, foot - 22) +
          ring(x1 + 8, ct + 30) +
          ring(x1 + 8, lt + 6) +
          ring(x1 + 8, foot - 22)
        }
        fill={PAPER}
      />
    </g>
  )
}
