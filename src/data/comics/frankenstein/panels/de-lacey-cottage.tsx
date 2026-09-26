import type { ReactNode } from 'react'

import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, gouge, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

/**
 * The De Laceys' cottage and the Creature's hovel against it, drawn once and
 * shared by "Learning to be human" and "Three books and a rejection", so the
 * room is the same room in both. Both panels show it CUT AWAY from the side:
 * the hovel on the left, the cottage's back wall between them seen edge-on,
 * and the cottage's one room on the right, so that a reader sees at once
 * both the watcher and the watched.
 *
 * What the held edition (src/data/full-texts/frankenstein.ts) says of it,
 * Chapter 11:
 * - "a low hovel, quite bare ... This hovel, however, joined a cottage of a
 *   neat and pleasant appearance"; "My place of refuge was constructed of
 *   wood, but so low, that I could with difficulty sit upright in it. No wood,
 *   however, was placed on the earth, which formed the floor, but it was
 *   dry"; "Having thus arranged my dwelling, and carpeted it with clean
 *   straw". So the hovel is a lean-to of planks, its roof sloping down from
 *   the cottage wall, low over an earth floor laid with straw.
 * - "one of the windows of the cottage had formerly occupied a part of it,
 *   but the panes had been filled up with wood. In one of these was a small
 *   and almost imperceptible chink, through which the eye could just
 *   penetrate." So a boarded window is set in the wall between them, with one
 *   thin chink of light through it (CHINK).
 * - "Through this crevice a small room was visible, whitewashed and clean,
 *   but very bare of furniture. In one corner, near a small fire, sat an old
 *   man". So the room's wall is pale, cut nearly to paper, and a small fire
 *   burns in its corner (Hearth), printed in red.
 */

export const COT = {
  /** The cottage's back wall, seen edge-on, between the hovel and the room. */
  wallX0: 196,
  wallX1: 220,
  /** The floor of the room, and the hovel's earth floor. */
  floor: 298,
  /** The underside of the room's ceiling beam. */
  ceil: 30,
  /** The chimney breast on the right. */
  hearthX: 776,
} as const

/** The hovel's lean-to roof of planks, sloping down from the cottage wall. */
export const HOVEL_ROOF = `M${COT.wallX0} 108L${COT.wallX0} 124L0 198L0 180Z`
/** Where the boarded-up window is set in the wall, and the chink through it. */
export const BOARDED = { y0: 142, y1: 212 }
export const CHINK_Y = 173

/** The wall between them, in section: stone above and below, planks where the window was. */
export function WallSection({ seed }: { seed: number }) {
  const r = rng(seed)
  let stones = ''
  for (let y = COT.ceil + 4; y < COT.floor; y += 13) {
    if (y > BOARDED.y0 - 6 && y < BOARDED.y1) continue
    stones += gouge(COT.wallX0 + 3, y, COT.wallX1 - 3, y + between(r, -1, 1), 0.8)
  }
  // The boards that fill the old window: their grain cut in short upright
  // strokes, so that the one level line through them is the chink.
  let boards = ''
  for (let x = COT.wallX0 + 5; x < COT.wallX1 - 3; x += 5)
    for (let y = BOARDED.y0 + 4; y < BOARDED.y1 - 6; y += between(r, 10, 18))
      if (Math.abs(y + 4 - CHINK_Y) > 7)
        boards += gouge(x, y, x + between(r, -0.4, 0.4), y + 8, 0.45)
  return (
    <>
      <rect
        x={COT.wallX0}
        y={COT.ceil - 30}
        width={COT.wallX1 - COT.wallX0}
        height={COT.floor - COT.ceil + 30}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={stones} fill={PAPER} />
      {/* the window, boarded: planks in the wall */}
      <rect
        x={COT.wallX0 + 2}
        y={BOARDED.y0}
        width={COT.wallX1 - COT.wallX0 - 4}
        height={BOARDED.y1 - BOARDED.y0}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.fine}
      />
      <path d={boards} fill={PAPER} />
    </>
  )
}

/**
 * "near a small fire": the chimney breast on the right, its opening and a
 * small fire in red. `lit` false leaves the grate cold.
 */
export function Hearth({ lit = true }: { lit?: boolean }) {
  const x = COT.hearthX
  const y = COT.floor
  return (
    <>
      <path
        d={`M${x} ${COT.ceil}H860V${y}H${x}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path
        d={`M${x + 4} ${y - 84}H856M${x + 4} ${y - 90}H856`}
        stroke={PAPER}
        strokeWidth={2}
        fill="none"
      />
      <path
        d={`M${x + 16} ${y}V${y - 54}Q${x + 16} ${y - 76} ${x + 44} ${y - 76}Q${x + 72} ${y - 76} ${x + 72} ${y - 54}V${y}Z`}
        fill={PAPER}
      />
      <path
        d={`M${x + 22} ${y}V${y - 52}Q${x + 22} ${y - 70} ${x + 44} ${y - 70}Q${x + 66} ${y - 70} ${x + 66} ${y - 52}V${y}Z`}
        fill={INK}
      />
      {/* the fire-irons of the grate, and the logs */}
      <path
        d={`M${x + 28} ${y - 10}H${x + 60}M${x + 30} ${y - 4}H${x + 58}`}
        stroke={PAPER}
        strokeWidth={1.6}
      />
      <path
        d={
          wedge(x + 28, y - 13, x + 60, y - 17, 5, 4) + wedge(x + 30, y - 18, x + 58, y - 12, 4, 5)
        }
        fill={INK}
        stroke={PAPER}
        strokeWidth={1}
      />
      {lit && (
        <g fill={RED}>
          <path
            d={`M${x + 30} ${y - 18}C${x + 30} ${y - 26} ${x + 36} ${y - 30} ${x + 40} ${y - 24}C${x + 42} ${y - 32} ${x + 50} ${y - 32} ${x + 52} ${y - 24}C${x + 56} ${y - 28} ${x + 60} ${y - 24} ${x + 58} ${y - 18}Z`}
          />
          <path
            className="lc-flicker"
            d={`M${x + 38} ${y - 24}C${x + 36} ${y - 34} ${x + 40} ${y - 40} ${x + 43} ${y - 48}C${x + 47} ${y - 40} ${x + 50} ${y - 34} ${x + 47} ${y - 24}Z`}
          />
          <path
            className="lc-flicker"
            style={timing({ dur: 0.8, delay: 0.35 })}
            d={`M${x + 50} ${y - 24}C${x + 49} ${y - 30} ${x + 52} ${y - 34} ${x + 53} ${y - 38}C${x + 56} ${y - 33} ${x + 57} ${y - 29} ${x + 55} ${y - 24}Z`}
          />
        </g>
      )}
    </>
  )
}

/** The room's floor of beaten earth and flags, in ink with paper joints. */
export function roomFloor(seed: number, light: (x: number, y: number) => number) {
  const r = rng(seed)
  let d = ''
  for (let y = COT.floor + 5; y < 340; y += 6) {
    let x = COT.wallX1 + between(r, -10, 0)
    while (x < 860) {
      const len = between(r, 20, 70)
      const L = light(x + len / 2, y)
      if (r() < 0.2 + L * 0.8) d += gouge(x, y, x + len, y + between(r, -0.6, 0.6), 0.4 + L * 2.6)
      x += len + between(r, 4, 16)
    }
  }
  return d
}

type P = [number, number]
const pt = (p: P) => `${Math.round(p[0] * 10) / 10} ${Math.round(p[1] * 10) / 10}`

/**
 * A seated woman's gown in one shape, facing `facing`: the bodice from the
 * shoulders at `neck` to a high waist, the lap running forward to the knee,
 * and the skirt falling from the knee to the floor at `hemY`.
 */
export function seatedSkirt(
  neck: P,
  waist: P,
  knee: P,
  hemY: number,
  facing: 1 | -1,
  { shoulder = 22, waistW = 16 }: { shoulder?: number; waistW?: number } = {},
): string {
  const f = facing
  const sF: P = [neck[0] + f * shoulder * 0.3, neck[1] + 2]
  const sB: P = [neck[0] - f * shoulder * 0.5, neck[1] + 3]
  const wF: P = [waist[0] + f * waistW * 0.5, waist[1]]
  const wB: P = [waist[0] - f * waistW * 0.5, waist[1]]
  const seat: P = [waist[0] - f * (waistW * 0.5 + 8), waist[1] + 30]
  const hemB: P = [waist[0] - f * (waistW * 0.5 + 4), hemY]
  const hemF: P = [knee[0] + f * 10, hemY]
  const kneeF: P = [knee[0] + f * 7, knee[1] + 4]
  const kneeTop: P = [knee[0], knee[1] - 7]
  return (
    `M${pt(sB)}Q${pt([neck[0], neck[1] - 4])} ${pt(sF)}L${pt(wF)}` +
    `Q${pt([(wF[0] + kneeTop[0]) / 2, kneeTop[1] - 4])} ${pt(kneeTop)}` +
    `Q${pt([kneeF[0] + f * 2, kneeTop[1]])} ${pt(kneeF)}L${pt(hemF)}L${pt(hemB)}` +
    `Q${pt([seat[0] - f * 4, (seat[1] + hemY) / 2])} ${pt(seat)}L${pt(wB)}Z`
  )
}

/** The cottage door, in the room's back wall. */
export const DOOR = { x0: 598, x1: 666, top: 112 } as const

/**
 * The door, shut (its planks and latch) or flung open onto the day outside,
 * its leaf swung into the room towards us. Pass what is seen through the
 * open door as children; they are clipped to the doorway.
 */
export function BackDoor({
  uid,
  open = false,
  children,
}: {
  uid: string
  open?: boolean
  children?: ReactNode
}) {
  const { x0, x1, top } = DOOR
  const y = COT.floor
  const clip = `${uid}-door`
  if (!open)
    return (
      <>
        <rect x={x0 - 6} y={top - 6} width={x1 - x0 + 12} height={y - top + 6} fill={INK} />
        <rect
          x={x0}
          y={top}
          width={x1 - x0}
          height={y - top}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        <path
          d={`M${x0 + 17} ${top + 2}V${y}M${x0 + 34} ${top + 2}V${y}M${x0 + 51} ${top + 2}V${y}`}
          stroke={PAPER}
          strokeWidth={1}
        />
        <path
          d={`M${x0 + 4} ${top + 34}H${x1 - 4}M${x0 + 4} ${y - 40}H${x1 - 4}`}
          stroke={PAPER}
          strokeWidth={3}
        />
        <circle cx={x0 + 10} cy={top + 96} r={2.4} fill={PAPER} />
      </>
    )
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <rect x={x0} y={top} width={x1 - x0} height={y - top} />
        </clipPath>
      </defs>
      <rect x={x0 - 6} y={top - 6} width={x1 - x0 + 12} height={y - top + 6} fill={INK} />
      <rect x={x0} y={top} width={x1 - x0} height={y - top} fill={PAPER} />
      <g clipPath={`url(#${clip})`}>{children}</g>
      {/* the leaf, swung in towards us on its hinges */}
      <path
        d={`M${x0} ${top}L${x0 - 30} ${top - 14}V${y + 16}L${x0} ${y}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path
        d={`M${x0 - 10} ${top - 2}V${y + 6}M${x0 - 20} ${top - 7}V${y + 11}M${x0 - 28} ${top + 26}L${x0 - 2} ${top + 36}M${x0 - 28} ${y - 26}L${x0 - 2} ${y - 36}`}
        stroke={PAPER}
        strokeWidth={1}
      />
    </>
  )
}

/**
 * De Lacey's guitar ("the old man played on his guitar", Chapter 13), drawn
 * along its own axis, the body's lower bout at 0, 0 and the neck along -x,
 * and placed with `at`: a waisted body, a long neck and a head, so that it
 * reads as a guitar and not as a drum.
 */
export function Guitar({ at }: { at: string }) {
  return (
    <g transform={at}>
      <path
        d="M-30 -2.6L-66 -2.2L-66 2.2L-30 2.6ZM-66 -3.6L-76 -3.2L-76 3.2L-66 3.6Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.3}
        strokeLinejoin="round"
      />
      <path
        d="M14 0C14 9 8 15 0 15C-6 15 -9 11 -12 9C-15 10 -18 12 -23 11C-29 10 -32 5 -32 0C-32 -5 -29 -10 -23 -11C-18 -12 -15 -10 -12 -9C-9 -11 -6 -15 0 -15C8 -15 14 -9 14 0Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.6}
      />
      <circle cx={-10} cy={0} r={4.4} fill={INK} />
      <path d="M8 -6L8 6M-30 -1.2L-66 -1M-30 1.2L-66 1" stroke={INK} strokeWidth={0.8} />
    </g>
  )
}
