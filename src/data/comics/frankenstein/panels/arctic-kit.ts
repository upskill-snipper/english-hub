import { between, gouge, n, type Pt, type Rng } from '@/components/comics/linocut/carve'

/**
 * The ice of Walton's letters, shared by the panels set on his ship: "the
 * floating sheets of ice that continually pass us" (Letter 3), and after the
 * ice broke up, "those large loose masses which float about" (Letter 4). One
 * shape for every floe, so the sea looks the same from panel to panel.
 */

/** One sheet of ice on dark water: its flat top, its lit edge below, and the hatching on that edge. */
export type Floe = { top: string; side: string; hatch: string }

/**
 * A jagged sheet of ice centred on (cx, cy), `rx` by `ry` across its top,
 * with an edge `thick` deep (by default in proportion to `ry`). Draw `side`
 * in PAPER with an ink outline, then `hatch` in INK, then `top` in PAPER with
 * an ink outline. The generator is the panel's own, so the ice is seeded.
 */
export function floe(
  r: Rng,
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  thick = Math.max(1.6, ry * 0.42),
): Floe {
  const k = 13
  const pts: Pt[] = []
  for (let i = 0; i < k; i++) {
    const a = (i / k) * Math.PI * 2 + between(r, -0.12, 0.12)
    const f = between(r, 0.8, 1.08)
    pts.push([cx + Math.cos(a) * rx * f, cy + Math.sin(a) * ry * f])
  }
  const poly = (dy: number) => 'M' + pts.map(([x, y]) => `${n(x)} ${n(y + dy)}`).join('L') + 'Z'
  let hatch = ''
  for (let x = cx - rx * 0.8; x < cx + rx * 0.8; x += between(r, 3.4, 6)) {
    const yb = cy + ry * Math.sqrt(Math.max(0, 1 - ((x - cx) / rx) ** 2)) * 0.9
    hatch += gouge(x, yb + thick * 0.15, x + 0.4, yb + thick * 0.95, 0.5)
  }
  return { top: poly(0), side: poly(thick), hatch }
}
