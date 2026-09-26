import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  deg,
  gouge,
  gougeField,
  rays,
  rng,
  wedge,
  type Rng,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

/**
 * The big barn at night, where Major speaks (Chapter 1) and the pigs hold
 * their secret meetings (Chapter 2): "At one end of the big barn, on a sort of
 * raised platform, Major was already ensconced on his bed of straw, under a
 * lantern which hung from a beam." Shared by the panels for "Old Major's
 * speech", "Major's warnings" and "Animalism", so the barn, its platform and
 * its lantern are the same in all three.
 *
 * The lantern is the only light, so the plank walls are cut by a light
 * function that falls away from it, and the straw on the floor is thickest
 * where it lights. Its flame is the spot colour.
 */

export type Light = (x: number, y: number) => number

/** Light falling off from a lantern at (lx, ly): 1 at the flame, `floor` far away. */
export const lanternLight =
  (lx: number, ly: number, reach: number, floor = 0.04): Light =>
  (x, y) =>
    Math.max(clamp(1 - Math.hypot(x - lx, (y - ly) * 1.15) / reach), floor)

/**
 * A plank wall: the grain as rows of cuts following the light, and the
 * vertical joints between the boards, cut widest near the lantern.
 */
export function plankWall(
  r: Rng,
  box: { x0: number; x1: number; y0: number; y1: number },
  light: Light,
  board = 34,
  spacing = 7.6,
) {
  // Only where the lantern reaches: the dark wall beyond is left solid, which
  // is both the print and a saving of weight.
  const lit: Light = (x, y) => (light(x, y) < 0.08 ? 0 : light(x, y))
  const grain = gougeField(r, box, lit, { spacing, len: [18, 64], gap: [6, 22], max: 3.6 })
  let joints = ''
  for (let x = box.x0 + board; x < box.x1; x += board + between(r, -3, 3)) {
    const L = light(x, (box.y0 + box.y1) / 2)
    joints += wedge(x, box.y0, x + between(r, -1, 1), box.y1, 0.6 + L * 1.4, 0.6 + L * 2.2)
  }
  return { grain, joints }
}

/**
 * Loose straw: short cuts at every angle, thickest where `density` is high.
 * Fill with PAPER over ink, or INK over paper.
 */
export function straw(
  r: Rng,
  box: { x0: number; x1: number; y0: number; y1: number },
  density: Light,
  count: number,
  len: [number, number] = [6, 16],
) {
  let d = ''
  for (let i = 0; i < count; i++) {
    const x = between(r, box.x0, box.x1)
    const y = between(r, box.y0, box.y1)
    if (r() > density(x, y)) continue
    const a = deg(between(r, -35, 35) + (r() < 0.5 ? 0 : 180))
    const L = between(r, len[0], len[1])
    d += gouge(x, y, x + Math.cos(a) * L, y + Math.sin(a) * L * 0.6, between(r, 0.5, 1))
  }
  return d
}

/**
 * The lantern hanging from the beam: its cord, a tin cap and base, the glass
 * with its wires, and the flame in the spot colour. `at` is the flame. The
 * rays round it are drawn by the panel, which knows how far they reach.
 */
export function Lantern({ at, cordTop }: { at: [number, number]; cordTop: number }) {
  const [x, y] = at
  return (
    <g>
      <path d={`M${x} ${cordTop}V${y - 20}`} stroke={INK} strokeWidth={4.4} />
      <path d={`M${x} ${cordTop}V${y - 20}`} stroke={PAPER} strokeWidth={1.2} />
      <path
        d={`M${x - 11} ${y - 12}L${x - 6} ${y - 20}H${x + 6}L${x + 11} ${y - 12}ZM${x - 11} ${y + 11}H${x + 11}L${x + 9} ${y + 16}H${x - 9}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <rect x={x - 9} y={y - 12} width={18} height={23} fill={PAPER} />
      <path
        d={`M${x - 9} ${y - 12}V${y + 11}M${x + 9} ${y - 12}V${y + 11}M${x - 3} ${y - 12}V${y - 7}M${x + 3} ${y - 12}V${y - 7}`}
        stroke={INK}
        strokeWidth={1.8}
      />
      <path
        className="lc-flicker"
        style={timing({ dur: 0.8, delay: 0.3 })}
        d={`M${x} ${y + 7}C${x - 4.6} ${y + 5} ${x - 4} ${y - 1} ${x} ${y - 9}C${x + 4} ${y - 1} ${x + 4.6} ${y + 5} ${x} ${y + 7}Z`}
        fill={RED}
      />
      <rect x={x - 3.4} y={y + 7} width={6.8} height={4} fill={INK} />
    </g>
  )
}

/**
 * "a sort of raised platform" at the end of the barn: its planked front, from
 * `x0` to `x1`, its top at `top` and its foot at `bottom`.
 */
export function Platform({
  x0,
  x1,
  top,
  bottom,
}: {
  x0: number
  x1: number
  top: number
  bottom: number
}) {
  const rows: number[] = []
  for (let y = top + 12; y < bottom - 3; y += 12) rows.push(y)
  const posts: number[] = []
  for (let x = x0 + 90; x < x1 - 20; x += 100) posts.push(x)
  return (
    <g>
      <rect x={x0} y={top} width={x1 - x0} height={bottom - top} fill={INK} />
      <path
        d={`M${x0} ${top}H${x1}V${bottom}`}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        fill="none"
      />
      <path
        d={
          rows.map((y) => gouge(x0 + 6, y, x1 - 6, y + 0.6, 0.9)).join('') +
          posts.map((x) => wedge(x, top + 2, x, bottom - 2, 1.2, 1.2)).join('')
        }
        fill={PAPER}
      />
    </g>
  )
}

/** Rays of lantern light, cut into the dark round the lantern. */
export const lanternRays = (seed: number, x: number, y: number, to = 120) =>
  rays(rng(seed), x, y, { from: 26, to, every: 7.5, width: 3.2 })

/**
 * The beam the lantern hangs from, with the roof boards and rafters above it,
 * across the whole top of a panel of width `w`.
 */
export function Roof({ w, beamY }: { w: number; beamY: number }) {
  const rafters: string[] = []
  for (let x = -40; x < w + 60; x += 96) rafters.push(`M${x} 0L${x + 60} ${beamY}`)
  return (
    <g>
      <g stroke={PAPER} strokeWidth={LINE.fine} fill="none">
        {rafters.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <g stroke={INK} strokeWidth={7} fill="none">
        {rafters.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <rect x={0} y={beamY} width={w} height={11} fill={INK} />
      <path d={`M0 ${beamY}H${w}M0 ${beamY + 11}H${w}`} stroke={PAPER} strokeWidth={LINE.carve} />
      <path
        d={gouge(30, beamY + 5.5, 190, beamY + 5, 0.8) + gouge(400, beamY + 5, 610, beamY + 6, 0.8)}
        fill={PAPER}
      />
    </g>
  )
}
