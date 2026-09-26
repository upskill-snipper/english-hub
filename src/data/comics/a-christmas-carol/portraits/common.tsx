import { PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, rng } from '@/components/comics/linocut/carve'

/**
 * What every A Christmas Carol character portrait shares with the Scrooge
 * portrait (../scrooge.tsx), which set the standard: the size of the block,
 * the ground of horizontal cuts behind the sitter, and the paper rule inside
 * the block's edge. Kept here so the eight later portraits print as one set
 * with his.
 */

/** Every portrait is drawn 332 by 318, as the style guide sets. */
export const PW = 332
export const PH = 318

/** A value computed once, on first use, and kept: a drawing never changes. */
export function once<T>(make: () => T): () => T {
  let value: T | undefined
  return () => {
    if (value === undefined) value = make()
    return value
  }
}

/**
 * The ground behind a sitter: rows of horizontal gouges whose width follows
 * `light(x, y)`, 0 (almost solid ink) to 1 (cut widest). The Scrooge portrait
 * lights its ground from the right, in front of his face; each portrait here
 * passes its own light, so the ground says where the light in the passage
 * comes from (a Spirit's jet of light, a torch, a fire, the fog outside).
 */
export function portraitGround(seed: number, light: (x: number, y: number) => number): string {
  const r = rng(seed)
  let d = ''
  for (let y = 12; y < PH - 8; y += 5.2) {
    let x = 10 + between(r, 0, 8)
    while (x < PW - 10) {
      const len = between(r, 20, 90)
      const end = Math.min(x + len, PW - 10)
      const L = clamp(light((x + end) / 2, y))
      d += gouge(
        x,
        y + between(r, -0.5, 0.5),
        end,
        y + between(r, -0.5, 0.5),
        0.3 + L * 2.4 * between(r, 0.7, 1.1),
      )
      x += len + between(r, 4, 12)
    }
  }
  return d
}

/** The fine paper rule inside the block's edge, as on the Scrooge portrait. */
export function InnerRule() {
  return (
    <rect
      x={8}
      y={8}
      width={PW - 16}
      height={PH - 16}
      fill="none"
      stroke={PAPER}
      strokeWidth={1.6}
    />
  )
}
