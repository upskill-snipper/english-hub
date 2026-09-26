import { between, gouge, n, rng } from '@/components/comics/linocut/carve'

/**
 * What the Much Ado About Nothing portraits share.
 *
 * The block, the cut ground behind a head, the paper rule, the outline and
 * placing helpers and the hand are the Romeo and Juliet portraits' own
 * (../../romeo-and-juliet/portraits/common.tsx), re-exported here rather than
 * copied: the two plays are drawn in the same years and the same dress, and a
 * second copy of a helper is a copy that drifts. Only what this play needs
 * beyond them is defined below.
 *
 * THE DRESS IS PLAIN ON PURPOSE. Shakespeare describes almost nobody's looks
 * in this play, so nobody here wears anything the text does not give them
 * beyond the ordinary dress of a town like Messina as his first audience
 * would have pictured it, about 1598: men in doublets buttoned down the
 * front, with a small ruff or a falling band at the neck, and a hat or a soft
 * cap; older men in long gowns; women in a fitted bodice with a small ruff or
 * a high linen collar, their hair dressed up under a caul or a coif. The text
 * names the doublet (2.3, 3.2), the hat (1.1, 3.2), the gown (4.2, "in
 * gowns"), the visor worn at the revels (2.1) and the "penthouse" Borachio
 * sheltered under in the rain (3.3). None of it comes from a film,
 * television or stage production. The markers on each portrait point only at
 * what the play does say.
 *
 * Every figure is drawn facing right in its own 0..240 by 0..332 frame and
 * placed with `placing`; one that faces left is flipped.
 */

export {
  Buttons,
  capsule,
  Hand,
  handPoint,
  hatch,
  lerp2,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  quad2,
  ruffBand,
  spline,
  strands,
  type Digit,
  type SP,
} from '../../romeo-and-juliet/portraits/common'

/**
 * Folds in a dark garment, cut in paper: gouges falling from a line of
 * start points to the foot of the plate. The shading every body shares.
 */
export function folds(
  seed: number,
  xs: [number, number],
  top: [number, number],
  count: number,
  foot = 336,
): string {
  const r = rng(seed)
  let d = ''
  for (let i = 0; i < count; i++) {
    const x = between(r, xs[0], xs[1])
    d += gouge(
      x,
      between(r, top[0], top[1]),
      x + between(r, -8, 8),
      foot,
      between(r, 0.7, 1.4),
      between(r, -1.5, 1.5),
    )
  }
  return d
}

/**
 * An ear in profile, facing right, its middle at (cx, cy): the outline (fill
 * with PAPER, rim in INK) and the curl inside it (stroke in INK). The same
 * ear on every head, as the pilot draws Scrooge's.
 */
export function ear(cx: number, cy: number, s = 1): { outline: string; curl: string } {
  const p = (x: number, y: number) => `${n(cx + x * s)} ${n(cy + y * s)}`
  return {
    outline:
      `M${p(8, -17)}C${p(0, -19)} ${p(-9, -14)} ${p(-10, -2)}C${p(-11, 10)} ${p(-6, 20)} ${p(2, 21)}` +
      `C${p(8, 21)} ${p(10, 14)} ${p(10, 6)}C${p(10, -2)} ${p(11, -12)} ${p(8, -17)}Z`,
    curl: `M${p(4, -11)}C${p(-3, -9)} ${p(-5, -1)} ${p(-3, 7)}C${p(-2, 11)} ${p(1, 13)} ${p(4, 10)}`,
  }
}
