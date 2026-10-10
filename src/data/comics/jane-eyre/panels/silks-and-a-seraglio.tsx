import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Figure,
  HEAD_JANE,
  HEAD_ROCHESTER,
  JaneFace,
  LOOSE_HAND,
  OPEN_HAND,
  ROCHESTER_CUTS,
  ROCHESTER_EAR,
  ROCHESTER_HAIR,
  ROCHESTER_HAIRLINE,
  ROCHESTER_HAIR_CUTS,
  ROCHESTER_NECKCLOTH,
  STRAW_BONNET,
  STRAW_BONNET_LINING,
  STRAW_BONNET_PLAIT,
  STRAW_BONNET_TIES,
  headAt,
  man,
  woman,
  type P,
  type Part,
} from './people'

/**
 * Chapter 24: "Silks and a seraglio", the thirteenth moment in the guide's
 * timeline. Every detail is from the held edition
 * (src/data/full-texts/jane-eyre.ts).
 *
 * THE MOMENT DRAWN. The silk warehouse in Millcote: "Mr. Rochester obliged me
 * to go to a certain silk warehouse"; "By dint of entreaties expressed in
 * energetic whispers, I reduced the half-dozen to two"; "With anxiety I
 * watched his eye rove over the gay stores: he fixed on a rich silk of the
 * most brilliant amethyst dye, and a superb pink satin"; "I persuaded him to
 * make an exchange in favour of a sober black satin and pearl-grey silk".
 *
 * - So the gay stores fill the shelves behind the counter, in pigeonholes of
 *   folded and striped pieces; Rochester, as the figure kit cuts him, holds
 *   his hand out over the brilliant silk he has fixed on, unrolled along the
 *   counter and falling over its edge, his eye roving up over the shelves;
 *   the sober black satin and pearl-grey silk lie folded beyond.
 * - The brilliant silk is the spot colour, the thing the scene is about;
 *   amethyst is left to the words.
 * - Jane at his shoulder in her straw bonnet, as the kit cuts her ("my black
 *   stuff Lowood frock and straw bonnet", Chapter 25), whispering up to him,
 *   one hand lifted between them.
 * - The shop window at the left gives the morning light from the street.
 *
 * Seeds: 1301 to 1305.
 */

const W = 860
const H = 340
const FLOOR = 268
const WIN = { x0: 30, x1: 150, top: 34, sill: 210 }
/** The shelves of "the gay stores": pigeonholes along the back wall. */
const SHELF = { x0: 404, x1: 852, top: 18, bottom: 206, rows: 4, cols: 6 }
/** The counter, its long side towards us, running from its near end on the left. */
const COUNTER = { x0: 512, top: 216, front: 224, foot: 300 }
/** The brilliant silk he fixes on, unrolled along the counter. */
const SILK = { x0: 560, x1: 668 }

type Marks = {
  wall: string
  floor: string
  street: string
  folds: string
  stripes: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // Morning light from the window on the left, falling across the shop.
  const light = (x: number, y: number) =>
    Math.max(clamp(1 - Math.hypot((x - 90) * 0.7, y - 120) / 380) ** 1.1, 0.07)
  const wall = gougeField(rng(1301), { x0: 0, x1: SHELF.x0, y0: 6, y1: FLOOR }, light, {
    spacing: 6.4,
    len: [16, 60],
  })
  const r = rng(1302)
  let floor = ''
  const V = [430, 30]
  for (let xt = -540; xt < 1400; xt += 32) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (FLOOR - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(r, 0.3, 0.8))
      floor += wedge(
        xt + (xb - xt) * t0,
        FLOOR + (H - FLOOR) * t0,
        xt + (xb - xt) * t1,
        FLOOR + (H - FLOOR) * t1,
        0.8 + t0 * 2.6,
        0.8 + t1 * 2.6,
      )
      t0 = t1 + between(r, 0.02, 0.07)
    }
  }
  // The street of Millcote through the glass: the house-fronts opposite.
  const rs = rng(1303)
  let street = ''
  for (let y = WIN.top + 8; y < WIN.sill - 40; y += 7) {
    let x = WIN.x0 + between(rs, -6, 4)
    while (x < WIN.x1) {
      const len = between(rs, 8, 26)
      street += gouge(x, y, Math.min(x + len, WIN.x1), y + between(rs, -0.3, 0.3), 0.5)
      x += len + between(rs, 4, 10)
    }
  }
  // The stores: in each pigeonhole a stack of folded pieces, every fold a
  // paper cut, so the shelves glitter as the eye roves over them.
  const rf = rng(1304)
  let folds = ''
  let stripes = ''
  const cw = (SHELF.x1 - SHELF.x0) / SHELF.cols
  const rh = (SHELF.bottom - SHELF.top) / SHELF.rows
  for (let row = 0; row < SHELF.rows; row++) {
    for (let col = 0; col < SHELF.cols; col++) {
      const x0 = SHELF.x0 + col * cw + 6
      const x1 = SHELF.x0 + (col + 1) * cw - 6
      const yb = SHELF.top + (row + 1) * rh - 4
      const layers = 3 + Math.floor(between(rf, 0, 3))
      const th = (rh - 12) / layers
      for (let k = 0; k < layers; k++) {
        const y = yb - (k + 1) * th
        const kind = rf()
        // A folded piece: its rounded fold towards us.
        if (kind < 0.45)
          folds += `M${n(x0 + 2)} ${n(y + 1)}L${n(x1 - 2)} ${n(y + 1)}Q${n(x1 + 2)} ${n(y + th / 2)} ${n(x1 - 2)} ${n(y + th - 1)}L${n(x0 + 2)} ${n(y + th - 1)}Q${n(x0 - 2)} ${n(y + th / 2)} ${n(x0 + 2)} ${n(y + 1)}Z`
        else if (kind < 0.75)
          stripes += gouge(
            x0 + 4,
            y + th / 2,
            x1 - 4,
            y + th / 2 + between(rf, -0.4, 0.4),
            th * 0.32,
          )
        else
          for (let s = x0 + 6; s < x1 - 4; s += 7)
            stripes += gouge(s, y + 2, s + 1, y + th - 2, 0.9)
      }
    }
  }
  cached = { wall, floor, street, folds, stripes }
  return cached
}

/** The front of the counter: pale wood, in panels. */
const PANELS = Array.from({ length: 7 }, (_, k) => {
  const x = COUNTER.x0 + 14 + k * 50
  return `M${x} ${COUNTER.front + 10}h38v${COUNTER.foot - COUNTER.front - 20}h-38Z`
}).join('')

/** The brilliant silk, unrolled along the counter and falling over its edge in folds. */
const SILK_TOP = `M${SILK.x0} ${COUNTER.top + 1}L${SILK.x1} ${COUNTER.top}L${SILK.x1 + 4} ${COUNTER.front}L${SILK.x0 - 4} ${COUNTER.front + 1}Z`
const SILK_FALL = `M${SILK.x0 + 6} ${COUNTER.front}L${SILK.x1 - 10} ${COUNTER.front}C${SILK.x1 - 6} 248 ${SILK.x1 + 2} 270 ${SILK.x1 + 8} 288L${SILK.x1 - 16} 284L${SILK.x1 - 32} 292L${SILK.x0 + 50} 282L${SILK.x0 + 28} 290L${SILK.x0 + 10} 280C${SILK.x0 + 12} 260 ${SILK.x0 + 8} 244 ${SILK.x0 + 6} ${COUNTER.front}Z`
const SILK_FOLDS =
  gouge(SILK.x0 + 28, COUNTER.front + 4, SILK.x0 + 30, 284, 1.1, 1) +
  gouge(SILK.x0 + 54, COUNTER.front + 4, SILK.x0 + 58, 281, 1.2, -1) +
  gouge(SILK.x0 + 80, COUNTER.front + 4, SILK.x0 + 88, 284, 1.1, 1) +
  gouge(SILK.x0 + 6, COUNTER.top + 4, SILK.x1 - 4, COUNTER.top + 4, 0.6)
/** The bolt it is unrolled from, lying at the far end of the length. */
const BOLT = { cx: SILK.x1 + 14, cy: COUNTER.top - 9, r: 11 }
/** "a sober black satin and pearl-grey silk", folded on the counter beyond. */
const SOBER = { x: 760, y: COUNTER.top }

// ── THE PEOPLE ──────────────────────────────────────────────────────────────

/**
 * Rochester at the counter, facing right, his open hand held out over the
 * brilliant silk he has fixed on, his eye roving up over the shelves. FIXED
 * 10 October 2026: his hand was first laid flat on the silk, and a hand on a
 * spread of red reads at a glance as a hand in blood; it is held above it.
 */
const ROCH_HEAD = { d: HEAD_ROCHESTER, at: [486, 102] as P, rot: -8, scale: 1.2 }
const ROCH_T = headAt(1, ROCH_HEAD.at, ROCH_HEAD.rot, ROCH_HEAD.scale)
const ROCHESTER: Part[] = man({
  facing: 1,
  neck: [482, 133],
  hip: [478, 210],
  head: ROCH_HEAD,
  hair: ROCHESTER_HAIR,
  body: { width: 40, tails: 52, front: 4, flare: 8 },
  arm: 10,
  leg: 11,
  shoe: 1.1,
  near: {
    arm: [
      [488, 142],
      [514, 178],
      [546, 190],
    ],
    hand: { parts: OPEN_HAND, scale: 1.1, rot: 4 },
    leg: [
      [482, 210],
      [492, 264],
      [496, 318],
    ],
  },
  far: {
    arm: [
      [476, 142],
      [470, 182],
      [464, 214],
    ],
    hand: { parts: LOOSE_HAND, scale: 1.1, rot: 0 },
    leg: [
      [474, 210],
      [468, 264],
      [464, 316],
    ],
  },
})
/** The edge of his coat's front and its folds, cut in paper. */
const ROCH_CUTS = gouge(494, 150, 502, 214, 0.8, -0.6) + gouge(472, 150, 466, 206, 0.7, 0.6)

/**
 * Jane at his shoulder in her bonnet, facing him and looking up at him,
 * whispering, one hand lifted between them: "By dint of entreaties expressed
 * in energetic whispers".
 */
const J_HEAD = { d: HEAD_JANE, at: [404, 134] as P, rot: -14, scale: 1.06 }
const J_T = headAt(1, J_HEAD.at, J_HEAD.rot, J_HEAD.scale)
const JANE: Part[] = woman({
  facing: 1,
  neck: [400, 160],
  waist: [397, 190],
  hemY: 320,
  head: J_HEAD,
  gown: { shoulder: 24, waistW: 17, front: 28, back: 34 },
  toes: [
    [392, 318],
    [404, 319],
  ],
  near: {
    arm: [
      [404, 167],
      [418, 192],
      [430, 172],
    ],
    hand: { parts: OPEN_HAND, scale: 0.9, rot: -30 },
  },
  far: {
    arm: [
      [396, 167],
      [390, 196],
      [394, 226],
    ],
    hand: { parts: LOOSE_HAND, scale: 0.9, rot: 0 },
  },
})
const JANE_FOLDS = gouge(390, 202, 376, 314, 0.8, 0.8) + gouge(402, 204, 406, 316, 0.8, -0.6)

function SilksAndASeraglio({ uid }: ArtProps) {
  const m = marks()
  const id = { glass: `${uid}-glass` }
  const cw = (SHELF.x1 - SHELF.x0) / SHELF.cols
  const rh = (SHELF.bottom - SHELF.top) / SHELF.rows
  return (
    <>
      <defs>
        <clipPath id={id.glass}>
          <rect x={WIN.x0} y={WIN.top} width={WIN.x1 - WIN.x0} height={WIN.sill - WIN.top} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [460, 200], push: 1.03 })}>
        <path d={m.wall} fill={PAPER} />
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />

        {/* the shop window on the street */}
        <rect
          x={WIN.x0 - 8}
          y={WIN.top - 8}
          width={WIN.x1 - WIN.x0 + 16}
          height={WIN.sill - WIN.top + 16}
          fill={INK}
        />
        <rect
          x={WIN.x0}
          y={WIN.top}
          width={WIN.x1 - WIN.x0}
          height={WIN.sill - WIN.top}
          fill={PAPER}
        />
        <g clipPath={`url(#${id.glass})`}>
          <path d={m.street} fill={INK} />
          <path d={`M${WIN.x0} ${WIN.sill - 38}H${WIN.x1}`} stroke={INK} strokeWidth={LINE.bold} />
        </g>
        <g fill={INK}>
          {[0, 1, 2].map((k) => (
            <rect
              key={`v${k}`}
              x={WIN.x0 + ((WIN.x1 - WIN.x0) * (k + 1)) / 4 - 1.5}
              y={WIN.top}
              width={3}
              height={WIN.sill - WIN.top}
            />
          ))}
          {[0, 1, 2, 3].map((k) => (
            <rect
              key={`h${k}`}
              x={WIN.x0}
              y={WIN.top + ((WIN.sill - WIN.top) * (k + 1)) / 5 - 1.5}
              width={WIN.x1 - WIN.x0}
              height={3}
            />
          ))}
        </g>
        <rect
          x={WIN.x0 - 14}
          y={WIN.sill + 6}
          width={WIN.x1 - WIN.x0 + 28}
          height={6}
          fill={PAPER}
        />

        {/* the shelves of the gay stores */}
        <rect
          x={SHELF.x0 - 6}
          y={SHELF.top - 6}
          width={W - SHELF.x0 + 12}
          height={SHELF.bottom - SHELF.top + 12}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d={m.folds} fill={PAPER} stroke={INK} strokeWidth={0.8} />
        <path d={m.stripes} fill={PAPER} />
        <g stroke={PAPER} strokeWidth={LINE.bold}>
          {Array.from({ length: SHELF.rows + 1 }, (_, k) => (
            <path key={`r${k}`} d={`M${SHELF.x0 - 6} ${n(SHELF.top + k * rh)}H${W}`} />
          ))}
          {Array.from({ length: SHELF.cols + 1 }, (_, k) => (
            <path
              key={`c${k}`}
              d={`M${n(SHELF.x0 + k * cw)} ${SHELF.top - 6}V${SHELF.bottom + 6}`}
            />
          ))}
        </g>

        {/* the counter: pale wood, its top edged in ink */}
        <rect
          x={COUNTER.x0}
          y={COUNTER.front}
          width={W - COUNTER.x0}
          height={COUNTER.foot - COUNTER.front}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.fine}
        />
        <path d={PANELS} fill="none" stroke={INK} strokeWidth={LINE.fine} />
        <path
          d={`M${COUNTER.x0 - 8} ${COUNTER.front}L${COUNTER.x0 + 4} ${COUNTER.top}H${W}V${COUNTER.front}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        <path d={gouge(COUNTER.x0 + 8, COUNTER.top + 3, W, COUNTER.top + 3, 0.8)} fill={PAPER} />
        <path d={`M${COUNTER.x0} ${COUNTER.foot}H${W}`} stroke={INK} strokeWidth={LINE.bold} />

        {/* "a sober black satin and pearl-grey silk", folded beyond */}
        <path
          d={`M${SOBER.x} ${SOBER.y + 1}L${SOBER.x + 44} ${SOBER.y + 1}Q${SOBER.x + 48} ${SOBER.y - 6} ${SOBER.x + 44} ${SOBER.y - 12}L${SOBER.x + 2} ${SOBER.y - 12}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        <path d={gouge(SOBER.x + 6, SOBER.y - 8, SOBER.x + 40, SOBER.y - 8, 0.8)} fill={PAPER} />
        <path
          d={`M${SOBER.x + 2} ${SOBER.y - 12}L${SOBER.x + 42} ${SOBER.y - 12}Q${SOBER.x + 46} ${SOBER.y - 18} ${SOBER.x + 42} ${SOBER.y - 24}L${SOBER.x + 4} ${SOBER.y - 24}Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.fine}
        />
        <path
          d={`M${SOBER.x + 8} ${SOBER.y - 20}H${SOBER.x + 38}M${SOBER.x + 8} ${SOBER.y - 16}H${SOBER.x + 38}`}
          stroke={INK}
          strokeWidth={0.8}
        />

        {/* the brilliant silk he fixes on, unrolled and falling over the edge */}
        <path d={SILK_TOP} fill={RED} stroke={INK} strokeWidth={LINE.fine} />
        <path d={SILK_FALL} fill={RED} stroke={INK} strokeWidth={LINE.fine} />
        <path d={SILK_FOLDS} fill={INK} />
        <circle
          cx={BOLT.cx}
          cy={BOLT.cy}
          r={BOLT.r}
          fill={RED}
          stroke={INK}
          strokeWidth={LINE.fine}
        />
        <circle cx={BOLT.cx} cy={BOLT.cy} r={3.6} fill={INK} />
        <path
          d={`M${BOLT.cx} ${BOLT.cy}m-7.4 0a7.4 7.4 0 0 1 7.4 -7.4`}
          fill="none"
          stroke={INK}
          strokeWidth={0.8}
        />

        {/* Rochester, his hand on the silk, his eye on the stores */}
        <Figure parts={ROCHESTER} cuts={ROCH_CUTS}>
          <g transform={ROCH_T}>
            <path d={ROCHESTER_HAIR_CUTS + ROCHESTER_CUTS} fill={PAPER} />
            <path
              d={ROCHESTER_HAIRLINE + ROCHESTER_EAR}
              fill="none"
              stroke={PAPER}
              strokeWidth={1.1}
              strokeLinecap="round"
            />
            <path d={ROCHESTER_NECKCLOTH} fill={PAPER} />
          </g>
        </Figure>

        {/* Jane in her bonnet, whispering up to him */}
        <Figure parts={JANE} cuts={JANE_FOLDS}>
          <JaneFace t={J_T} hair={false} />
          <g transform={J_T}>
            <path
              d={STRAW_BONNET}
              fill={PAPER}
              stroke={INK}
              strokeWidth={1.3}
              strokeLinejoin="round"
            />
            <path d={STRAW_BONNET_PLAIT} fill="none" stroke={INK} strokeWidth={0.9} />
            <path d={STRAW_BONNET_LINING} fill={INK} />
            <path d={STRAW_BONNET_TIES} fill={INK} stroke={PAPER} strokeWidth={0.6} />
          </g>
        </Figure>
      </g>
    </>
  )
}

export const silksAndASeraglio: LinocutArt = { width: W, height: H, Draw: SilksAndASeraglio }
