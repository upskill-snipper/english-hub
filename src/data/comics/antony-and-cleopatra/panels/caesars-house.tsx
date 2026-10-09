import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, gouge, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { flagFloor } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { lightField } from './light-cuts'

/**
 * A ROOM IN CAESAR'S HOUSE IN ROME, cut once for the panels of moments 7 and
 * 10 ("The Soothsayer's warning", Act 2, Scene 3, and "Enthroned in
 * Alexandria", Act 3, Scene 6), which the play sets in the same place:
 * "Rome. A Room in Caesar’s House." So the two panels show one room, by night
 * and by day: a plain Roman wall with a painted dado round its foot, one
 * window set high in the middle, a doorway on the left, a floor of stone
 * flags, and a lamp on its stand (`Lampstand`, lit only by night). "Caesar's
 * case against Antony" (1.4, "An Apartment in Caesar’s House") draws the same
 * room.
 *
 * The play describes none of it, so it is drawn plainly, as a room in a Roman
 * house of about 40 BC, with the two upright bars the site's other Roman
 * windows have (src/data/comics/julius-caesar/panels/the-proscription-list.tsx).
 * Nothing is taken from a film or a stage production.
 *
 * A panel draws the wall with its own light (`roomMarks`), then what is seen
 * through the window, then `RoomFrame` over it, then its people.
 */

export const W = 860
export const H = 340
/** Where the wall meets the floor, and the top of the painted dado. */
export const WALL_FOOT = 252
export const DADO = 206
/** The window, high in the middle of the wall. */
export const WIN = { x: 384, y: 22, w: 92, h: 104 }
/** The doorway on the left. */
export const DOOR = { x0: 30, x1: 112, top: 88 }
/** Where the people's feet stand, at the front of the room. */
export const FEET = 324

export type RoomMarks = { wall: string; dado: string; floor: string }

/**
 * The wall and floor, their cuts following `light` (0 unlit to 1 cut nearly
 * white). The dado takes a little over half the wall's light.
 */
export function roomMarks(seed: number, light: (x: number, y: number) => number): RoomMarks {
  const wall = lightField(seed, { x0: 0, x1: W, y0: 4, y1: DADO - 4 }, light, {
    spacing: 6,
    len: [16, 64],
    gap: [6, 20],
    max: 3.6,
  })
  const dado = lightField(
    seed + 1,
    { x0: 0, x1: W, y0: DADO + 10, y1: WALL_FOOT - 2 },
    (x, y) => light(x, y) * 0.55,
    { spacing: 5.4, len: [10, 40], gap: [6, 18], max: 2.6 },
  )
  const floor = flagFloor(rng(seed + 2), W, H, WALL_FOOT, [430, 110], 70, 5)
  return { wall, dado, floor }
}

/** The stars of a clear night, as small four-pointed paper cuts, for the window. */
export function stars(seed: number, count: number): string {
  const r = rng(seed)
  let d = ''
  for (let i = 0; i < count; i++) {
    const x = WIN.x + between(r, 8, WIN.w - 8)
    const y = WIN.y + between(r, 8, WIN.h - 10)
    const s = between(r, 1.8, 3.4)
    d += gouge(x - s, y, x + s, y, s * 0.32) + gouge(x, y - s, x, y + s, s * 0.32)
  }
  return d
}

/**
 * The room's fixed parts over the wall and floor marks: the dado's moulding,
 * the window's deep reveal, its two bars and its sill, the doorway, dark or
 * lit from beyond (`doorLit`), and the floor.
 */
export function RoomFrame({
  m,
  doorLit = false,
  night = false,
}: {
  m: RoomMarks
  doorLit?: boolean
  night?: boolean
}) {
  const { x, y, w, h } = WIN
  const bars = `M${n(x + w / 3)} ${y}V${y + h}M${n(x + (2 * w) / 3)} ${y}V${y + h}`
  return (
    <>
      <rect x={0} y={DADO - 3} width={W} height={7} fill={PAPER} />
      <rect x={0} y={DADO + 6} width={W} height={1.8} fill={PAPER} />
      {/* the window's reveal, its bars and its sill */}
      <path
        d={`M${x - 8} ${y - 8}H${x + w + 8}V${y + h + 6}H${x - 8}Z M${x} ${y}V${y + h}H${x + w}V${y}Z`}
        fill={INK}
        fillRule="evenodd"
      />
      {/* at night the lamp catches the edge of the reveal and the bars, which
          would otherwise be ink on ink */}
      {night && (
        <>
          <rect x={x} y={y} width={w} height={h} fill="none" stroke={PAPER} strokeWidth={2.6} />
          <path d={bars} stroke={PAPER} strokeWidth={7.6} />
        </>
      )}
      <path d={bars} stroke={INK} strokeWidth={4.4} />
      <rect x={x - 14} y={y + h + 6} width={w + 28} height={6} fill={PAPER} />
      <rect x={x - 14} y={y + h + 12} width={w + 28} height={2} fill={INK} />
      {/* the doorway */}
      <path
        d={`M${DOOR.x0 - 10} ${WALL_FOOT}V${DOOR.top - 10}H${DOOR.x1 + 10}V${WALL_FOOT}`}
        fill="none"
        stroke={PAPER}
        strokeWidth={3}
      />
      <rect
        x={DOOR.x0}
        y={DOOR.top}
        width={DOOR.x1 - DOOR.x0}
        height={WALL_FOOT - DOOR.top}
        fill={doorLit ? PAPER : INK}
      />
      {doorLit && <path d={`M${DOOR.x0} ${DOOR.top}h8V${WALL_FOOT}h-8Z`} fill={INK} />}
      {/* the floor */}
      <rect x={0} y={WALL_FOOT} width={W} height={H - WALL_FOOT} fill={PAPER} />
      <path d={m.floor} fill={INK} />
    </>
  )
}

/**
 * Rome through the window by day, low in it: flat roofs, and between them the
 * gable of a temple on its columns. The play names no building; this is only
 * the city, cut plainly, in ink, with the temple's columns and gable line cut
 * in paper. Cut first for "Caesar's case against Antony" (1.4) and moved here
 * on 9 October 2026 for "Enthroned in Alexandria" (3.6), so the window shows
 * one city in every daylit panel of this room: both panels draw it from here.
 * Draw it clipped to the window, over its sky.
 */
export const ROME_ROOFS = (() => {
  const x0 = WIN.x
  const x1 = WIN.x + WIN.w
  const b = WIN.y + WIN.h
  const t = WIN.x + 50
  return (
    `M${x0} ${b}V${b - 14}H${x0 + 12}V${b - 20}H${x0 + 26}V${b - 12}H${t - 18}` +
    `V${b - 22}L${t} ${b - 34}L${t + 18} ${b - 22}V${b - 12}H${x1 - 10}V${b - 18}H${x1}V${b}Z`
  )
})()
export const ROME_TEMPLE_CUTS = (() => {
  const t = WIN.x + 50
  const b = WIN.y + WIN.h
  let d = gouge(t - 15, b - 23.4, t + 15, b - 23.4, 0.7)
  for (let k = -2; k <= 2; k++) d += gouge(t + k * 6, b - 20, t + k * 6, b - 3, 0.9)
  return d
})()

/**
 * The room's lamp, on its stand left of the window, added on 9 October 2026
 * for "The Soothsayer's warning" (lit, by night) and "Enthroned in
 * Alexandria" (unlit, by day), so the stand is in the same place in both;
 * "Caesar's case against Antony" (1.4) stands it unlit, by day, as well.
 * Where its feet stand, the top of the stand, and the foot of its flame,
 * which rises from the lamp's nozzle.
 */
export const LAMP = { x: 262, foot: 298, top: 214, flame: [278, 206] as [number, number] }

/**
 * A lamp's flame standing on (fx, fy): a short tongue and a tall one, about
 * 28 across and 46 high. Shared with the hanging lamps of "Pompey's galley".
 */
export const flame = (fx: number, fy: number) =>
  `M${fx - 1} ${fy + 4}C${fx - 14} ${fy - 2} ${fx - 12} ${fy - 16} ${fx - 5} ${fy - 26}` +
  `C${fx - 4} ${fy - 18} ${fx - 1} ${fy - 16} ${fx + 1} ${fy - 20}` +
  `C${fx + 2} ${fy - 30} ${fx + 6} ${fy - 36} ${fx + 3} ${fy - 46}` +
  `C${fx + 14} ${fy - 34} ${fx + 16} ${fy - 16} ${fx + 12} ${fy - 6}` +
  `C${fx + 10} ${fy + 1} ${fx + 5} ${fy + 4} ${fx - 1} ${fy + 4}Z`
/** Its hot core, cut in paper. */
export const flameCore = (fx: number, fy: number) =>
  `M${fx + 1} ${fy + 1}C${fx - 5} ${fy - 3} ${fx - 3} ${fy - 11} ${fx + 2} ${fy - 20}` +
  `C${fx + 7} ${fy - 11} ${fx + 8} ${fy - 3} ${fx + 1} ${fy + 1}Z`

/**
 * The lampstand: three feet, a slender shaft with a knop, a dish at the top,
 * and on it an oil lamp, its nozzle to the right. Ink with a paper edge.
 * `lit` stands a flame on the nozzle in the spot colour, cut large (about 28
 * across and 46 high) so that at phone width it is still a flame on a lamp
 * and never a speck, with two tongues and a paper core, so it reads as fire
 * and never as a drop.
 */
export function Lampstand({ lit = false }: { lit?: boolean }) {
  const { x, foot, top } = LAMP
  const [fx, fy] = LAMP.flame
  const stand =
    `M${x - 24} ${foot}L${x - 5} ${foot - 18}M${x + 24} ${foot}L${x + 5} ${foot - 18}` +
    `M${x} ${foot - 16}V${top + 8}`
  const knop = `M${x - 6} ${n((foot + top) / 2 - 8)}h12v9h-12Z`
  const dish = `M${x - 17} ${top + 4}H${x + 17}L${x + 12} ${top + 10}H${x - 12}Z`
  const lamp =
    `M${x - 15} ${top + 4}C${x - 15} ${top - 4} ${x - 4} ${top - 7} ${x + 4} ${top - 6}` +
    `L${x + 16} ${top - 6}C${x + 20} ${top - 5} ${x + 20} ${top} ${x + 15} ${top + 1}` +
    `C${x + 4} ${top + 5} ${x - 6} ${top + 6} ${x - 15} ${top + 4}Z`
  return (
    <g strokeLinecap="round" strokeLinejoin="round">
      <path d={stand} fill="none" stroke={PAPER} strokeWidth={7.4} />
      <path d={stand} fill="none" stroke={INK} strokeWidth={4.2} />
      <path d={knop + dish + lamp} fill={INK} stroke={PAPER} strokeWidth={1.6} />
      <path d={gouge(x - 10, top - 1, x + 7, top - 3, 0.9)} fill={PAPER} />
      {lit && (
        <g className="lc-flicker" style={timing({ dur: 0.9 })}>
          <path d={flame(fx, fy)} fill={RED} stroke={INK} strokeWidth={1.2} />
          <path d={flameCore(fx, fy)} fill={PAPER} />
        </g>
      )}
    </g>
  )
}
