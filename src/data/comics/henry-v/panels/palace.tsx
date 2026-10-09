import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, gouge, n, rng } from '@/components/comics/linocut/carve'

import { flagFloor, stoneWall } from '../../romeo-and-juliet/panels/acts-3-4-kit'

/**
 * The King's palace in London, for the panels of the first two scenes:
 * "The Church makes an offer" (1.1, "London. An ante-chamber in the King's
 * palace.") and "The claim and the tennis balls" (1.2, the presence chamber,
 * where the King sits to hear Canterbury and the French ambassadors). Cut once
 * here, so that the two rooms are plainly one palace: the same dressed stone,
 * the same pointed windows, and the King's cloth of state, which is glimpsed
 * through the door of the presence chamber in the first panel and hangs
 * behind his throne in the second.
 *
 * WHAT THE PLAY GIVES, and so what is drawn (the held edition,
 * src/data/full-texts/henry-v.ts, Project Gutenberg #1521):
 * - The rooms are named and not described. Canterbury greets the King with
 *   "God and his angels guard your sacred throne", and Henry speaks of his
 *   "state" ("I will keep my state", 1.2). So the presence chamber has a
 *   throne raised on a dais under a cloth of state.
 * - It is afternoon: "Is it four o'clock?" "It is." (1.1). So the light comes
 *   in low through the windows.
 * Everything else is the plain building of the play's own years, 1414: walls
 * of dressed stone, windows with pointed heads, two lights and leaded glass,
 * a pointed doorway with two leaves of oak. Nothing is taken from a film or
 * stage production.
 *
 * THE SPOT COLOUR is the cloth of state, a large flat hanging, so that at
 * phone width it stays a hanging: the King's seat, which both scenes are
 * about, before he is seen. The King's crown is printed in paper (see
 * ./people.tsx).
 *
 * Every piece is drawn in the panel's own coordinates (860 by 340), with the
 * floor meeting the wall at FLOOR_Y.
 */

export const W = 860
export const H = 340
export const FLOOR_Y = 238

type Light = (x: number, y: number) => number
type P = [number, number]

/** The stone wall, its cuts following the light. Fill both with PAPER over the ink ground. */
export function wallMarks(seed: number, light: Light) {
  return stoneWall(rng(seed), { x0: 0, x1: W, y0: 4, y1: FLOOR_Y - 4 }, light, 30)
}

/** The flagstone floor, its joints running to a point at the back of the room. Fill INK over PAPER. */
export function floorMarks(seed: number, vanish: P) {
  return flagFloor(rng(seed), W, H, FLOOR_Y, vanish, 64, 6)
}

/**
 * How high a pointed arch rises over its span, for arcs of radius K times the
 * span: 0.5 is a round arch, 1 the tall equilateral arch, and the 0.62 used
 * here the lower pointed head of the play's own century, which keeps a whole
 * window or door inside the panel.
 */
const K = 0.62
const rise = (span: number) => span * Math.sqrt(K * K - (K - 0.5) * (K - 0.5))

/** A pointed arch over a span from `x0` to `x1`, springing at `spring`. */
function pointedArch(x0: number, x1: number, spring: number): string {
  const r = (x1 - x0) * K
  const apex: P = [(x0 + x1) / 2, spring - rise(x1 - x0)]
  return `M${n(x0)} ${n(spring)}A${n(r)} ${n(r)} 0 0 1 ${n(apex[0])} ${n(apex[1])}A${n(r)} ${n(r)} 0 0 1 ${n(x1)} ${n(spring)}`
}

/**
 * A tall window of two lights under a pointed head, lit: the glass in paper
 * with its lead cames in a lattice of lozenges, a stone mullion and transom
 * in ink, two pointed lancet heads and a round light in the head of the arch,
 * a deep ink reveal round it all and a paper sill. `x` is the middle, `w` the
 * opening's width, `spring` where the head springs from, `sill` its foot.
 */
export function GothicWindow({
  uid,
  x,
  w,
  spring,
  sill,
}: {
  uid: string
  x: number
  w: number
  spring: number
  sill: number
}) {
  const x0 = x - w / 2
  const x1 = x + w / 2
  const open = `${pointedArch(x0, x1, spring)}V${n(sill)}H${n(x0)}Z`
  const R = 10
  const reveal = `${pointedArch(x0 - R, x1 + R, spring)}V${n(sill + 6)}H${n(x0 - R)}Z`
  const apexY = spring - rise(w)
  // the lattice of the leads, clipped to the glass
  let leads = ''
  for (let k = -16; k <= 16; k++) {
    const c = x + k * 13
    leads += `M${n(c - 120)} ${n(sill + 120 * 0.9)}L${n(c + 120)} ${n(sill - 240 * 0.9 + 120 * 0.9)}`
    leads += `M${n(c + 120)} ${n(sill + 120 * 0.9)}L${n(c - 120)} ${n(sill - 240 * 0.9 + 120 * 0.9)}`
  }
  // the two lancet heads under the main head, and the round light above them
  const half = (w - 8) / 2
  const lancetSpring = spring + 8
  const lancets =
    pointedArch(x0, x0 + half, lancetSpring) + pointedArch(x1 - half, x1, lancetSpring)
  const oc: P = [x, (apexY + lancetSpring - rise(half)) / 2 + 1]
  const ocr = Math.min(half * 0.36, 16)
  const clip = `${uid}-win-${Math.round(x)}`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={open} />
        </clipPath>
      </defs>
      <path d={reveal} fill={INK} stroke={PAPER} strokeWidth={LINE.bold} />
      <path d={open} fill={PAPER} />
      <g clipPath={`url(#${clip})`}>
        <path d={leads} stroke={INK} strokeWidth={0.8} fill="none" />
        {/* the stone of the head between the lancets and the round light */}
        <path
          d={`${lancets}M${n(x0)} ${n(lancetSpring)}H${n(x1)}`}
          fill="none"
          stroke={INK}
          strokeWidth={5}
        />
        <circle cx={oc[0]} cy={oc[1]} r={ocr} fill="none" stroke={INK} strokeWidth={4.4} />
        <path
          d={`M${n(x)} ${n(lancetSpring - half * 0.4)}V${n(sill)}`}
          stroke={INK}
          strokeWidth={6}
        />
        <path
          d={`M${n(x0)} ${n((lancetSpring + sill) / 2)}H${n(x1)}`}
          stroke={INK}
          strokeWidth={4.4}
        />
      </g>
      <path d={open} fill="none" stroke={INK} strokeWidth={3} />
      <path
        d={`M${n(x0 - R - 8)} ${n(sill + 6)}H${n(x1 + R + 8)}V${n(sill + 13)}H${n(x0 - R - 8)}Z`}
        fill={PAPER}
      />
      <path
        d={`M${n(x0 - R - 8)} ${n(sill + 13)}H${n(x1 + R + 8)}`}
        stroke={INK}
        strokeWidth={1.6}
      />
    </g>
  )
}

/** One of the small crosses over the cloth of state, its ends square: cut as lenses, they read as stars. */
const smallCross = (cx: number, cy: number) =>
  `M${n(cx - 5)} ${n(cy - 1.3)}h10v2.6h-10ZM${n(cx - 1.3)} ${n(cy - 5)}h2.6v10h-2.6Z`

/**
 * The cloth of state: a hanging printed in the spot colour, with a broad
 * border and a valance along its top cut in paper, and a lattice of small
 * paper crosses over its field. `x0` to `x1`, `y0` to `y1`.
 */
export function ClothOfState({
  x0,
  x1,
  y0,
  y1,
  seed,
}: {
  x0: number
  x1: number
  y0: number
  y1: number
  seed: number
}) {
  const r = rng(seed)
  let crosses = ''
  for (let y = y0 + 40; y < y1 - 16; y += 30)
    for (let x = x0 + 22 + (((y - y0 - 40) / 30) % 2) * 15; x < x1 - 16; x += 30) {
      const cx = x + between(r, -1.4, 1.4)
      const cy = y + between(r, -1.4, 1.4)
      crosses += smallCross(cx, cy)
    }
  let valance = `M${n(x0 - 4)} ${n(y0 - 6)}H${n(x1 + 4)}V${n(y0 + 14)}`
  for (let x = x1 + 4; x > x0 - 4; x -= 16)
    valance += `L${n(x - 8)} ${n(y0 + 24)}L${n(x - 16)} ${n(y0 + 14)}`
  valance += 'Z'
  return (
    <g>
      <path
        d={`M${n(x0)} ${n(y0)}H${n(x1)}V${n(y1)}H${n(x0)}Z`}
        fill={RED}
        stroke={INK}
        strokeWidth={2}
      />
      <path
        d={`M${n(x0 + 7)} ${n(y0 + 7)}H${n(x1 - 7)}V${n(y1 - 7)}H${n(x0 + 7)}Z`}
        fill="none"
        stroke={PAPER}
        strokeWidth={3.4}
      />
      <path d={crosses} fill={PAPER} />
      <path d={valance} fill={INK} stroke={PAPER} strokeWidth={1.8} strokeLinejoin="round" />
    </g>
  )
}

/**
 * The King's seat: a high-backed chair of pale carved wood with a pointed
 * gable over the back and a pinnacle at each side, so that the King sits
 * black against it. `x` is the middle of the seat's front edge, `seatY` the
 * top of the seat, `top` the peak of the back, `floor` where it stands.
 */
export function Throne({
  x,
  seatY,
  top,
  floor,
}: {
  x: number
  seatY: number
  top: number
  floor: number
}) {
  const l = x - 60
  const rr = x + 22
  const shoulder = top + 34
  const back = `M${n(l)} ${n(seatY)}V${n(shoulder)}L${n((l + rr) / 2)} ${n(top)}L${n(rr)} ${n(shoulder)}V${n(seatY)}Z`
  const inner = `M${n(l + 10)} ${n(seatY - 8)}V${n(shoulder + 6)}L${n((l + rr) / 2)} ${n(top + 14)}L${n(rr - 10)} ${n(shoulder + 6)}V${n(seatY - 8)}Z`
  const pinnacle = (px: number) =>
    `M${n(px - 5)} ${n(shoulder + 8)}V${n(shoulder - 6)}L${n(px)} ${n(shoulder - 22)}L${n(px + 5)} ${n(shoulder - 6)}V${n(shoulder + 8)}Z`
  return (
    <g>
      <path d={back} fill={PAPER} stroke={INK} strokeWidth={2.4} strokeLinejoin="round" />
      <path d={inner} fill="none" stroke={INK} strokeWidth={LINE.fine} />
      <path
        d={pinnacle(l) + pinnacle(rr)}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
      {/* the seat and its front rail, the legs */}
      <path
        d={`M${n(l - 6)} ${n(seatY)}H${n(rr + 34)}V${n(seatY + 8)}H${n(l - 6)}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={2}
      />
      <path
        d={`M${n(l)} ${n(seatY + 8)}V${n(floor)}M${n(rr + 28)} ${n(seatY + 8)}V${n(floor)}`}
        stroke={PAPER}
        strokeWidth={6}
      />
      <path
        d={`M${n(l)} ${n(seatY + 8)}V${n(floor)}M${n(rr + 28)} ${n(seatY + 8)}V${n(floor)}`}
        stroke={INK}
        strokeWidth={1.4}
        fill="none"
      />
    </g>
  )
}

/** The dais: two broad steps of pale stone from `x0` to `x1`, the top step at `y`. */
export function Dais({ x0, x1, y }: { x0: number; x1: number; y: number }) {
  return (
    <g>
      <path
        d={`M${n(x0)} ${n(y)}H${n(x1)}V${n(y + 11)}H${n(x0)}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={2}
      />
      <path
        d={`M${n(x0 - 14)} ${n(y + 11)}H${n(x1 + 18)}V${n(y + 23)}H${n(x0 - 14)}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={2}
      />
      <path
        d={
          gouge(x0 + 6, y + 5, x1 - 6, y + 5.4, 0.9) + gouge(x0 - 8, y + 17, x1 + 12, y + 17.4, 0.9)
        }
        fill={INK}
      />
    </g>
  )
}

/**
 * The doorway of the presence chamber, under a pointed head, with two leaves
 * of oak. The right leaf is shut, its planks and iron straps cut in paper; the
 * left stands open, and through the gap is the room beyond: the edge of the
 * cloth of state in the spot colour, its border and two of its crosses in
 * paper, and the dark step of the dais below it. (A corner of the King's seat,
 * cut first, read at panel size as a little white house.)
 * `x` is the middle, `w` the opening, `spring` where the head springs, `foot`
 * the threshold.
 */
export function PresenceDoor({
  uid,
  x,
  w,
  spring,
  foot,
}: {
  uid: string
  x: number
  w: number
  spring: number
  foot: number
}) {
  const x0 = x - w / 2
  const x1 = x + w / 2
  const open = `${pointedArch(x0, x1, spring)}V${n(foot)}H${n(x0)}Z`
  const R = 12
  const surround = `${pointedArch(x0 - R, x1 + R, spring)}V${n(foot)}H${n(x0 - R)}Z`
  const clip = `${uid}-door`
  const gap = w * 0.42
  // the shut right leaf: planks, two iron straps with their hinges
  let planks = ''
  for (let px = x + 10; px < x1 - 4; px += 12)
    planks += gouge(px, spring - w * 0.5, px + 0.4, foot - 2, 1)
  const straps = [spring - 20, (spring + foot) / 2 + 10, foot - 26]
    .map((sy) => gouge(x + 2, sy, x1 - 6, sy, 2.2) + `M${n(x1 - 12)} ${n(sy - 5)}h6v10h-6Z`)
    .join('')
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={open} />
        </clipPath>
      </defs>
      <path d={surround} fill={PAPER} />
      <path d={surround} fill="none" stroke={INK} strokeWidth={2.4} />
      <path
        d={`${pointedArch(x0 - R + 6, x1 + R - 6, spring)}`}
        fill="none"
        stroke={INK}
        strokeWidth={1.2}
      />
      <path d={open} fill={INK} />
      <g clipPath={`url(#${clip})`}>
        {/* the room beyond the gap: the cloth of state, a corner of the seat */}
        <path
          d={`M${n(x0 + 8)} ${n(spring - w)}H${n(x0 + gap)}V${n(foot - 40)}H${n(x0 + 8)}Z`}
          fill={RED}
        />
        <path
          d={`M${n(x0 + 16)} ${n(spring - w)}V${n(foot - 46)}`}
          stroke={PAPER}
          strokeWidth={3.4}
        />
        <path d={smallCross(x0 + 30, spring - 4) + smallCross(x0 + 44, spring + 34)} fill={PAPER} />
        <path d={`M${n(x0)} ${n(foot - 40)}H${n(x0 + gap)}V${n(foot)}H${n(x0)}Z`} fill={INK} />
        <path
          d={
            gouge(x0 + 4, foot - 30, x0 + gap - 4, foot - 30, 1) +
            gouge(x0 + 2, foot - 16, x0 + gap - 2, foot - 16, 1.2)
          }
          fill={PAPER}
        />
        {/* the open left leaf, seen on its edge against the jamb */}
        <path
          d={`M${n(x0)} ${n(spring - w)}L${n(x0 + 9)} ${n(spring - w + 10)}V${n(foot - 6)}L${n(x0)} ${n(foot)}Z`}
          fill={INK}
        />
        <path
          d={`M${n(x0 + 9)} ${n(spring - w + 10)}V${n(foot - 6)}`}
          stroke={PAPER}
          strokeWidth={1.4}
        />
        {/* the shut right leaf */}
        <path
          d={`M${n(x0 + gap)} ${n(spring - w)}H${n(x1)}V${n(foot)}H${n(x0 + gap)}Z`}
          fill={INK}
        />
        <path d={`M${n(x0 + gap)} ${n(spring - w)}V${n(foot)}`} stroke={PAPER} strokeWidth={2.2} />
        <path d={planks + straps} fill={PAPER} />
      </g>
      <path d={open} fill="none" stroke={INK} strokeWidth={2.6} />
    </g>
  )
}
