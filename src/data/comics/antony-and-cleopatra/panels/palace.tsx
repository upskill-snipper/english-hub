import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, gouge, n, rng, wedge } from '@/components/comics/linocut/carve'

/**
 * CLEOPATRA'S PALACE IN ALEXANDRIA, cut once for the panels of moments 1, 2,
 * 3 and 5 ("Rome’s verdict, Egypt’s reply" to "Serpent of old Nile"), so the
 * rooms of Act 1 are recognisably one palace: a hall of round columns open to
 * the daylight, a stone floor, the beam across the top.
 *
 * The play does not describe the palace: "Alexandria. A Room in Cleopatra’s
 * palace" (1.1, 1.3), "Another Room" (1.2), "A Room in the Palace" (1.5). So
 * it is drawn plainly, as a palace of Alexandria in about 40 BC might have
 * been: round columns with flaring capitals, as the temples and palaces of
 * Egypt were built, carrying a plain beam, and between them openings to the
 * light. Nothing in it is taken from a film or a stage production, and
 * nothing on it is ornament that could be read as a serpent (see the kit's
 * rules, ./people.tsx): the capitals are cut with straight upright leaves.
 *
 * WEIGHT. The sky in the openings is the scored paper of ./light-cuts.ts,
 * written relative, and the floor is the Romeo and Juliet kit's flagFloor;
 * each column is one ink shape and a handful of cuts.
 */

export type Pt = [number, number]

/**
 * One column standing on the floor at `foot`, centred on `cx`, its capital's
 * top at `top`: a round shaft narrowing a little upwards, a bell-shaped
 * capital flaring to an abacus, a round base. `w` is the shaft's width at the
 * foot. Returns the ink shape and the paper cuts: light down the shaft's left
 * side (the light comes from the openings either side, so a cut on each
 * side, the left one broader), the leaves of the capital and the base's
 * mouldings.
 */
export function column(
  cx: number,
  top: number,
  foot: number,
  w = 26,
): { shape: string; cuts: string } {
  const h = w / 2
  const neck = top + 30
  const shape =
    `M${n(cx - h - 4)} ${n(foot)}L${n(cx - h - 4)} ${n(foot - 8)}Q${n(cx - h - 2)} ${n(foot - 12)} ${n(cx - h)} ${n(foot - 13)}` +
    `L${n(cx - h + 2.4)} ${n(neck)}` +
    `C${n(cx - h - 2)} ${n(neck - 10)} ${n(cx - h - 9)} ${n(top + 12)} ${n(cx - h - 11)} ${n(top + 7)}` +
    `L${n(cx - h - 9)} ${n(top)}L${n(cx + h + 9)} ${n(top)}L${n(cx + h + 11)} ${n(top + 7)}` +
    `C${n(cx + h + 9)} ${n(top + 12)} ${n(cx + h + 2)} ${n(neck - 10)} ${n(cx + h - 2.4)} ${n(neck)}` +
    `L${n(cx + h)} ${n(foot - 13)}Q${n(cx + h + 2)} ${n(foot - 12)} ${n(cx + h + 4)} ${n(foot - 8)}L${n(cx + h + 4)} ${n(foot)}Z`
  let cuts =
    // the shaft's lit edges
    wedge(cx - h + 4.2, neck + 4, cx - h + 3.2, foot - 16, 1.6, 2.6) +
    wedge(cx + h - 4.4, neck + 6, cx + h - 3.6, foot - 18, 0.9, 1.6) +
    // the neck band under the capital
    gouge(cx - h + 2, neck - 1, cx + h - 2, neck - 1, 1.1) +
    // the abacus's lower edge
    gouge(cx - h - 9, top + 6, cx + h + 9, top + 6, 0.9) +
    // the base's mouldings
    gouge(cx - h - 3, foot - 9, cx + h + 3, foot - 9, 0.9) +
    gouge(cx - h, foot - 13.4, cx + h, foot - 13.4, 0.7)
  // the capital's upright leaves, fanning out with its bell
  for (let k = -2; k <= 2; k++) {
    const x0 = cx + k * 4.2
    const x1 = cx + k * 7.4
    cuts += gouge(x0, neck - 4, x1, top + 10, k === 0 ? 1.1 : 0.9, -k * 0.3)
  }
  return { shape, cuts }
}

/**
 * The beam the columns carry, across the whole panel from `top` to `bottom`,
 * in ink, its lower edge and one moulding cut in paper.
 */
export function beam(W: number, top: number, bottom: number): { shape: string; cuts: string } {
  return {
    shape: `M-10 ${n(top)}H${n(W + 10)}V${n(bottom)}H-10Z`,
    cuts:
      gouge(-10, bottom - 4, W + 10, bottom - 4, 1.3) +
      gouge(-10, top + (bottom - top) * 0.42, W + 10, top + (bottom - top) * 0.42, 0.8),
  }
}

/**
 * A low parapet wall along the foot of the openings, from `top` to the floor
 * at `foot`, in ink, its coping cut in paper and its joints faintly.
 */
export function parapet(
  seed: number,
  x0: number,
  x1: number,
  top: number,
  foot: number,
): { shape: string; cuts: string } {
  const r = rng(seed)
  let cuts = gouge(x0, top + 2.4, x1, top + 2.4, 1.4) + gouge(x0, top + 6.6, x1, top + 6.6, 0.6)
  for (let y = top + 14; y < foot - 4; y += 10) {
    let x = x0 + between(r, -10, 10)
    while (x < x1) {
      const len = between(r, 26, 60)
      cuts += gouge(x, y, Math.min(x + len, x1), y + between(r, -0.4, 0.4), 0.55)
      x += len + between(r, 6, 16)
    }
  }
  return { shape: `M${n(x0)} ${n(top)}H${n(x1)}V${n(foot)}H${n(x0)}Z`, cuts }
}

/** The carved edge round a column or a figure that must stand off a dark ground. */
export const EDGE = { stroke: PAPER, strokeWidth: LINE.carve, strokeLinejoin: 'round' as const }

/** A column drawn whole: its paper edge, the ink, its cuts. */
export function Column({
  cx,
  top,
  foot,
  w = 26,
}: {
  cx: number
  top: number
  foot: number
  w?: number
}) {
  const c = column(cx, top, foot, w)
  return (
    <>
      <path d={c.shape} fill={INK} {...EDGE} />
      <path d={c.cuts} fill={PAPER} />
    </>
  )
}
