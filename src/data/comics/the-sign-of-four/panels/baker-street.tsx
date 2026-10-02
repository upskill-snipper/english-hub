import { between, gouge, n, rng, wisps } from '@/components/comics/linocut/carve'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'

import type { P } from './people'

/**
 * The sitting room at 221B Baker Street, cut once and shared by every panel
 * set there, so the room is the same room from Chapter 1 to the last page.
 * Drawn first for moments 1 to 3 (Chapters 1 and 2). What the text gives:
 *
 * - "Sherlock Holmes took his bottle from the corner of the mantel-piece and
 *   his hypodermic syringe from its neat morocco case"; "sank back into the
 *   velvet-lined arm-chair" (Chapter 1). So there is a mantelpiece with a
 *   bottle at its corner, and Holmes's deep armchair (Armchair). The case is
 *   only ever drawn CLOSED (Mantel), and nothing else of it is ever drawn:
 *   see the rules in ./people.tsx.
 * - "Stand at the window here. Was ever such a dreary, dismal, unprofitable
 *   world? See how the yellow fog swirls down the street and drifts across
 *   the dun-coloured houses" (Chapter 1). So the window gives on to fog, with
 *   the houses opposite as faint shapes behind it (FogWindow). The print has
 *   no yellow: the fog is the paper, the houses are hatched in ink through it.
 * - "I see also in your open desk there that you have a sheet of stamps and a
 *   thick bundle of post-cards" (Chapter 1): Watson's desk (Desk).
 *
 * Nothing else of the room is described, so it is plain: walls cut in the
 * light from the window, bare boards, a stone fireplace.
 */

/**
 * A wing armchair in profile, its back at `x`, facing `f`, its seat at `seat`
 * and the floor at `floor`: the shape Jekyll's chairs are cut to, with a
 * padded arm, for the "velvet-lined arm-chair". Fill back, seat and arm in
 * INK with a carve-weight paper edge; stroke legs in INK.
 */
export function armchair(x: number, f: 1 | -1, seat = 244, floor = 286) {
  const s = (v: number) => n(x + f * v)
  const top = seat - 140
  return {
    back: `M${s(-4)} ${seat + 18}C${s(-8)} ${seat - 44} ${s(-10)} ${seat - 94} ${s(-2)} ${top + 14}C${s(4)} ${top} ${s(22)} ${top} ${s(28)} ${top + 14}L${s(30)} ${seat + 18}Z`,
    seat: `M${s(14)} ${seat}H${s(96)}C${s(104)} ${seat} ${s(106)} ${seat + 8} ${s(104)} ${seat + 18}H${s(14)}Z`,
    arm: `M${s(16)} ${seat - 30}C${s(16)} ${seat - 40} ${s(24)} ${seat - 43} ${s(34)} ${seat - 43}H${s(86)}C${s(96)} ${seat - 43} ${s(101)} ${seat - 35} ${s(99)} ${seat - 27}L${s(97)} ${seat + 18}H${s(16)}Z`,
    armCuts:
      gouge(x + f * 24, seat - 33, x + f * 92, seat - 33, 0.9) +
      gouge(x + f * 94, seat - 22, x + f * 93, seat + 12, 0.8) +
      gouge(x + f * 22, seat + 8, x + f * 88, seat + 8, 0.7),
    tufts: [36, 56, 76].map((v) => [x + f * v, seat - 12] as P),
    buttons: [top + 46, top + 72, top + 98].map((y) => [x + f * 10, y] as P),
    legs: `M${s(4)} ${seat + 18}V${floor}M${s(98)} ${seat + 18}V${floor}`,
  }
}

/** Draws an armchair from `armchair()`. */
export function Armchair({ c }: { c: ReturnType<typeof armchair> }) {
  return (
    <g>
      <path d={c.legs} stroke={INK} strokeWidth={5} />
      <path
        d={c.back + c.seat}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      {c.buttons.map(([bx, by]) => (
        <circle key={by} cx={bx} cy={by} r={1.8} fill={PAPER} />
      ))}
    </g>
  )
}
/**
 * The upholstered side of the chair, its padded arm rolled along the top:
 * drawn over the sitter's hip and thigh, and under the arm he rests on it.
 * The seam, the front and the buttoning are cut in paper, so it reads as a
 * stuffed chair and not as a black box.
 */
export function ChairArm({ c }: { c: ReturnType<typeof armchair> }) {
  return (
    <g>
      <path d={c.arm} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={c.armCuts} fill={PAPER} />
      {c.tufts.map(([tx, ty]) => (
        <circle key={tx} cx={tx} cy={ty} r={1.6} fill={PAPER} />
      ))}
    </g>
  )
}

type Box = { x: number; y: number; w: number; h: number }

const fogCache = new Map<string, { houses: string; fog: string; hatch: string }>()
function fogMarks(b: Box, seed: number, roof: [number, number]) {
  const key = `${b.x},${b.y},${b.w},${b.h},${seed},${roof}`
  const hit = fogCache.get(key)
  if (hit) return hit
  const r = rng(seed)
  // the dun-coloured houses opposite: a roofline of plain fronts with
  // chimneys, their windows in rows, all hatched faint through the fog
  let houses = `M${b.x} ${n(b.y + b.h)}`
  let x = b.x
  let y = b.y + b.h * roof[0]
  while (x < b.x + b.w) {
    const w = between(r, 34, 60)
    y = b.y + b.h * between(r, roof[0], roof[1])
    houses += `L${n(x)} ${n(y)}L${n(x + w * 0.2)} ${n(y)}V${n(y - between(r, 8, 14))}H${n(x + w * 0.3)}V${n(y)}L${n(x + w)} ${n(y)}`
    x += w
  }
  houses += `L${n(b.x + b.w)} ${n(b.y + b.h)}Z`
  let hatch = ''
  for (let hx = b.x - b.h; hx < b.x + b.w; hx += 5.4)
    hatch += `M${n(hx)} ${n(b.y + b.h)}L${n(hx + b.h * 0.5)} ${n(b.y)}`
  const fog = wisps(r, 7, { x0: b.x, x1: b.x + b.w, y0: b.y + 16, y1: b.y + b.h - 12 }, [5, 12])
  const out = { houses, fog, hatch }
  fogCache.set(key, out)
  return out
}

/**
 * A sash window on the fog, glazing bars and all: paper fog, the houses
 * opposite hatched faint behind it, wisps drifting across (lc-drift). `uid`
 * keeps its clips unique to its piece; `seed` fixes the houses and the fog.
 */
export function FogWindow({
  uid,
  box,
  seed,
  roof = [0.26, 0.4],
  lamps = [],
}: {
  uid: string
  box: Box
  seed: number
  /** How far down the window the roofs opposite stand, as fractions of its height. */
  roof?: [number, number]
  /** Far lamps or lit windows opposite, printed as red smears, like the pilot's candles. */
  lamps?: P[]
}) {
  const { x, y, w, h } = box
  const m = fogMarks(box, seed, roof)
  const clip = `${uid}-fogwin-${x}`
  const hclip = `${uid}-fogwin-houses-${x}`
  const mid = y + h * 0.5
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <rect x={x} y={y} width={w} height={h} />
        </clipPath>
        <clipPath id={hclip}>
          <path d={m.houses} />
        </clipPath>
      </defs>
      <rect x={x - 10} y={y - 10} width={w + 20} height={h + 20} fill={INK} />
      <rect x={x} y={y} width={w} height={h} fill={PAPER} />
      <g clipPath={`url(#${clip})`}>
        <g clipPath={`url(#${hclip})`}>
          <path d={m.hatch} stroke={INK} strokeWidth={LINE.hairline} />
        </g>
        <path d={m.houses} fill="none" stroke={INK} strokeWidth={1.3} />
        {lamps.map(([lx, ly]) => (
          <path
            key={lx}
            d={`M${lx - 5} ${ly}C${lx - 4} ${ly - 5} ${lx + 4} ${ly - 5} ${lx + 5} ${ly}C${lx + 4} ${ly + 4} ${lx - 4} ${ly + 4} ${lx - 5} ${ly}Z`}
            fill={RED}
          />
        ))}
        <g className="lc-drift">
          <path d={m.fog} fill={PAPER} />
        </g>
      </g>
      {/* the sash: frame, meeting rail and glazing bars */}
      <g fill={INK}>
        <rect x={x} y={y} width={w} height={4} />
        <rect x={x} y={y + h - 4} width={w} height={4} />
        <rect x={x} y={y} width={4} height={h} />
        <rect x={x + w - 4} y={y} width={4} height={h} />
        <rect x={x} y={mid - 3} width={w} height={6} />
        <rect x={x + w / 2 - 2} y={y} width={4} height={h} />
        <rect x={x} y={y + h * 0.25 - 1.3} width={w} height={2.6} />
        <rect x={x} y={y + h * 0.75 - 1.3} width={w} height={2.6} />
      </g>
      <rect x={x - 16} y={y + h + 10} width={w + 32} height={6} fill={PAPER} />
      <rect x={x - 16} y={y + h + 16} width={w + 32} height={2} fill={INK} />
    </g>
  )
}

/**
 * The fireplace and mantelpiece, its left end at `x` and its shelf at
 * `shelf`, standing on `floor`: a pale stone surround, a dark grate with no
 * fire (the text lights none), and on the corner of the shelf "his bottle"
 * and "its neat morocco case", closed. With `caseRed` the case is printed in
 * the spot colour, for a panel whose subject it is.
 */
export function Mantel({
  x,
  shelf,
  floor,
  caseRed = false,
}: {
  x: number
  shelf: number
  floor: number
  caseRed?: boolean
}) {
  const w = 164
  return (
    <g>
      <path d={`M${x + 8} ${floor}V${shelf + 6}H${x + w - 8}V${floor}Z`} fill={PAPER} />
      <path
        d={`M${x - 4} ${shelf - 6}H${x + w + 4}V${shelf + 4}H${x - 4}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.fine}
      />
      <path
        d={
          gouge(x + 18, shelf + 16, x + 18, floor - 6, 1.4) +
          gouge(x + w - 18, shelf + 16, x + w - 18, floor - 6, 1.4) +
          gouge(x + 40, shelf + 14, x + w - 40, shelf + 14, 1.1)
        }
        fill={INK}
      />
      {/* the grate, dark */}
      <path
        d={`M${x + 38} ${floor}V${shelf + 60}Q${x + 38} ${shelf + 38} ${x + 60} ${shelf + 38}H${x + w - 60}Q${x + w - 38} ${shelf + 38} ${x + w - 38} ${shelf + 60}V${floor}Z`}
        fill={INK}
      />
      <path
        d={`M${x + 52} ${floor - 12}H${x + w - 52}M${x + 54} ${floor - 18}H${x + w - 54}M${x + 58} ${floor - 22}V${floor - 8}M${x + w - 58} ${floor - 22}V${floor - 8}`}
        stroke={PAPER}
        strokeWidth={1.6}
      />
      <path d={`M${x + 20} ${floor + 8}H${x + w - 20}`} stroke={PAPER} strokeWidth={4} />
      <path d={`M${x + 20} ${floor + 8}H${x + w - 20}`} stroke={INK} strokeWidth={1.4} />
      {/* on the corner of the shelf: the bottle, and the neat morocco case, shut */}
      <path
        d={`M${x + 8} ${shelf - 6}V${shelf - 22}Q${x + 8} ${shelf - 28} ${x + 12} ${shelf - 29}V${shelf - 34}H${x + 16}V${shelf - 29}Q${x + 20} ${shelf - 28} ${x + 20} ${shelf - 22}V${shelf - 6}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1}
      />
      <path d={gouge(x + 11, shelf - 24, x + 11, shelf - 10, 0.8)} fill={INK} />
      <rect
        x={x + 26}
        y={shelf - 16}
        width={36}
        height={10}
        rx={2}
        fill={caseRed ? RED : INK}
        stroke={PAPER}
        strokeWidth={LINE.fine}
      />
      <path
        d={`M${x + 27} ${shelf - 12}H${x + 61}`}
        stroke={caseRed ? INK : PAPER}
        strokeWidth={0.9}
      />
      <rect x={x + 42} y={shelf - 13.4} width={4} height={3} fill={PAPER} />
    </g>
  )
}

/**
 * Watson's writing desk, "your open desk there", its left end at `x`, its
 * lid-top at `top`, on `floor`: a sloping lid open on a paper sheet of stamps
 * and a bundle of post-cards.
 */
export function Desk({ x, top, floor }: { x: number; top: number; floor: number }) {
  return (
    <g>
      <path
        d={`M${x} ${top + 18}L${x + 96} ${top}L${x + 96} ${top + 44}L${x} ${top + 52}Z`}
        fill={INK}
      />
      <path
        d={`M${x + 6} ${top + 52}V${floor}M${x + 90} ${top + 44}V${floor}M${x + 6} ${floor - 26}H${x + 90}`}
        stroke={INK}
        strokeWidth={5}
      />
      <path
        d={`M${x - 4} ${top + 14}L${x + 100} ${top - 6}L${x + 100} ${top + 1}L${x - 4} ${top + 21}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.fine}
      />
      {/* the sheet of stamps */}
      <path
        d={`M${x + 12} ${top + 18}L${x + 40} ${top + 12.6}L${x + 42} ${top + 22}L${x + 14} ${top + 27.4}Z`}
        fill={PAPER}
      />
      <path
        d={`M${x + 19} ${top + 16.6}L${x + 21} ${top + 26}M${x + 26} ${top + 15.2}L${x + 28} ${top + 24.6}M${x + 33} ${top + 13.9}L${x + 35} ${top + 23.3}M${x + 13} ${top + 22.6}L${x + 41} ${top + 17.2}`}
        stroke={INK}
        strokeWidth={0.8}
      />
      {/* the bundle of post-cards, tied */}
      <path
        d={`M${x + 52} ${top + 12}L${x + 80} ${top + 6.6}L${x + 80} ${top + 14}L${x + 52} ${top + 19.4}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={0.8}
      />
      <path
        d={`M${x + 53} ${top + 15}L${x + 79} ${top + 10}M${x + 66} ${top + 9.4}L${x + 66} ${top + 17}`}
        stroke={INK}
        strokeWidth={0.8}
      />
    </g>
  )
}
