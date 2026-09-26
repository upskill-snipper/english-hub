import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  arc,
  between,
  clamp,
  deg,
  gouge,
  n,
  rng,
  type Rng,
} from '@/components/comics/linocut/carve'

/**
 * What the Macbeth portraits share: the size of the block, the cut ground
 * behind each head, the paper rule inside the border, and the few pieces of
 * eleventh-century dress the play leaves undescribed (a mail shirt, a cloak
 * and the ring brooch that pins it).
 *
 * THE DRESS IS PLAIN ON PURPOSE. Shakespeare says almost nothing about how
 * anyone in the play looks, so nobody here wears anything the play does not
 * give them beyond the ordinary dress of Scotland in the eleventh century, and
 * none of it comes from a film, television or stage production. The markers on
 * each portrait point only at what the play does say.
 *
 * Every drawing is facing right in its own frame and placed with a transform;
 * a portrait that faces left flips its group with scale(-1 1), so the heads can
 * be reused in panels the same way Scrooge's are.
 */

export const PW = 332
export const PH = 318

const grounds = new Map<string, string>()

/**
 * Horizontal cuts behind a head, as on Scrooge's portrait: `light(x, y)` from 0
 * (almost solid ink) to 1 (cut nearly white). Cached by `key`, since a ground
 * never changes.
 */
export function portraitGround(
  key: string,
  seed: number,
  light: (x: number, y: number) => number,
): string {
  const hit = grounds.get(key)
  if (hit) return hit
  const r = rng(seed)
  let d = ''
  for (let y = 12; y < PH - 8; y += 5.2) {
    let x = 10 + between(r, 0, 8)
    while (x < PW - 10) {
      const len = between(r, 20, 90)
      const x2 = Math.min(x + len, PW - 10)
      const L = clamp(light((x + x2) / 2, y))
      if (L > 0.02)
        d += gouge(
          x,
          y + between(r, -0.5, 0.5),
          x2,
          y + between(r, -0.5, 0.5),
          0.3 + L * 2.4 * between(r, 0.7, 1.1),
        )
      x += len + between(r, 4, 12)
    }
  }
  grounds.set(key, d)
  return d
}

/** The thin paper rule cut just inside the block's edge. */
export function PortraitRule() {
  return (
    <rect
      x={8}
      y={8}
      width={PW - 16}
      height={PH - 16}
      fill="none"
      stroke={PAPER}
      strokeWidth={LINE.carve}
    />
  )
}

/**
 * Ring mail: rows of small arcs, each row offset by half a ring, cut in paper.
 * Stroke it with PAPER at about 0.9 and clip it to the shirt.
 */
export function mailRings(
  r: Rng,
  box: { x0: number; x1: number; y0: number; y1: number },
  step = 5,
): string {
  let d = ''
  let row = 0
  for (let y = box.y0; y < box.y1; y += step * 0.72, row++) {
    for (let x = box.x0 + (row % 2) * (step / 2); x < box.x1; x += step) {
      const rr = step * 0.42 + between(r, -0.3, 0.3)
      d += arc(x + between(r, -0.3, 0.3), y, rr, deg(200), deg(340))
    }
  }
  return d
}

/**
 * A penannular ring brooch, the pin that fastens a cloak: a ring with a gap
 * and a pin across it. Centred on (x, y), radius `rad`.
 */
export function Brooch({
  x,
  y,
  rad = 7,
  turn = -30,
}: {
  x: number
  y: number
  rad?: number
  turn?: number
}) {
  const a = deg(turn)
  const px = Math.cos(a) * rad * 1.9
  const py = Math.sin(a) * rad * 1.9
  return (
    <g fill="none" strokeLinecap="round">
      <path d={arc(x, y, rad, deg(turn + 110), deg(turn + 430))} stroke={INK} strokeWidth={5.4} />
      <path d={arc(x, y, rad, deg(turn + 110), deg(turn + 430))} stroke={PAPER} strokeWidth={2.4} />
      <path
        d={`M${n(x - px)} ${n(y - py)}L${n(x + px)} ${n(y + py)}`}
        stroke={INK}
        strokeWidth={4}
      />
      <path
        d={`M${n(x - px)} ${n(y - py)}L${n(x + px)} ${n(y + py)}`}
        stroke={PAPER}
        strokeWidth={1.6}
      />
    </g>
  )
}

/**
 * Hair or a beard cut as white strands through a black mass: gouges from
 * points on a start line towards an end line, with a little scatter.
 */
export function strands(
  r: Rng,
  count: number,
  from: (t: number) => [number, number],
  to: (t: number) => [number, number],
  width: [number, number],
  bend = 1,
): string {
  let d = ''
  for (let i = 0; i < count; i++) {
    const t = (i + between(r, 0.1, 0.9)) / count
    const [x1, y1] = from(t)
    const [x2, y2] = to(t)
    d += gouge(
      x1 + between(r, -1.5, 1.5),
      y1 + between(r, -1.5, 1.5),
      x2 + between(r, -2, 2),
      y2 + between(r, -2, 2),
      between(r, width[0], width[1]),
      between(r, -bend, bend),
    )
  }
  return d
}

/** A point on a straight line from a to b. */
export const lerp2 =
  (a: [number, number], b: [number, number]) =>
  (t: number): [number, number] => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]
