import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Door } from './by-street'
import { COLLAR } from './investigation-kit'
import {
  ENFIELD_CUTS,
  Figure,
  GRIP_HAND,
  HEAD_ENFIELD,
  HEAD_UTTERSON,
  TOP_HAT,
  TOP_HAT_BAND,
  UTTERSON_CUTS,
  gent,
  handAt,
  headAt,
  type P,
  type Part,
} from './people'

/**
 * Chapter 1, "Story of the Door": "The door and Enfield's story", the first
 * moment in the guide's timeline. Every detail is from the text:
 *
 * - "their way led them down a by-street in a busy quarter of London";
 *   "Even on Sunday, when it veiled its more florid charms and lay
 *   comparatively empty of passage, the street shone out in contrast to its
 *   dingy neighbourhood, like a fire in a forest; and with its freshly painted
 *   shutters, well-polished brasses". So it is day, the street is empty but
 *   for the two walkers, the shopfronts are shuttered for Sunday, and their
 *   freshly painted shutters are the spot colour: the street's fire.
 * - "Two doors from one corner, on the left hand going east the line was
 *   broken by the entry of a court; and just at that point a certain sinister
 *   block of building thrust forward its gable on the street. It was two
 *   storeys high; showed no window, nothing but a door on the lower storey
 *   and a blind forehead of discoloured wall on the upper". So the block is
 *   lower than the shops, stands forward of them with its side showing, has a
 *   gable and no window at all, and its wall is cut blotched and dark against
 *   the bright fronts. The door itself is ./by-street.tsx.
 * - "Mr. Enfield and the lawyer were on the other side of the by-street; but
 *   when they came abreast of the entry, the former lifted up his cane and
 *   pointed." So the two walk on the near pavement, and Enfield, the younger,
 *   points his cane across the road at the door. Utterson, "lean, long,
 *   dusty, dreary", the taller, looks where it points.
 *
 * Enfield's story itself, of the child trampled at three in the morning, is
 * not drawn: a child is never shown at the moment of harm. The panel shows
 * the door the story is attached to, and the moment the story begins.
 * Seeds: 111 (the sky), 112 (the shop fronts), 113 (the block), 114 (the
 * road and pavement).
 */

const W = 860
const H = 340
/** The foot of the house fronts, the far kerb, the near kerb. */
const BASE = 200
const FAR_KERB = 207
const NEAR_KERB = 262

/** The block: its left and right edges, its eaves and the apex of its gable. */
const BL = 482
const BR = 656
const EAVES = 76
const APEX: P = [569, 30]
/** The door, centred on the block's lower storey. */
const DOOR = { x: 548, y: 128, w: 42, h: 69 }

/** The shops, left to right: [x0, x1, roof, chimney x or 0]. */
const SHOPS: [number, number, number, number][] = [
  [0, 150, 50, 36],
  [150, 302, 36, 250],
  [302, 446, 54, 404],
  [656, 790, 44, 702],
  [790, 860, 58, 0],
]

type Marks = {
  sky: string
  fronts: string
  block: string
  road: string
  pave: string
  slats: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // A Sunday sky: paper, with a few long ink strokes of cloud.
  const sky = gougeField(
    rng(111),
    { x0: 0, x1: W, y0: 8, y1: 70 },
    (_x, y) => 0.08 + 0.1 * clamp((70 - y) / 60),
    { spacing: 9, len: [40, 120], gap: [30, 90], max: 1.4 },
  )
  // The shop fronts: paper, with only a few ink courses of brick, so the
  // row shines against the dark block.
  const fronts = gougeField(
    rng(112),
    { x0: 0, x1: W, y0: 34, y1: 134 },
    (_x, y) => 0.06 + 0.12 * clamp((y - 60) / 70),
    { spacing: 7, len: [14, 44], gap: [14, 40], max: 1.6 },
  )
  // The block: "a blind forehead of discoloured wall", blotched and dark.
  const b = rng(113)
  const blot = (x: number, y: number) =>
    0.5 + 0.5 * Math.sin(x / 17 + 1.3) * Math.cos(y / 13 + 0.4) * Math.sin((x + y) / 29)
  const block = gougeField(
    b,
    { x0: BL - 20, x1: BR, y0: APEX[1], y1: BASE },
    (x, y) => 0.04 + 0.5 * blot(x, y) ** 2,
    { spacing: 4.4, len: [6, 22], gap: [4, 12], max: 1.8 },
  )
  // The road, swept clean: a few fine ink strokes on paper.
  const r = rng(114)
  let road = ''
  for (let y = FAR_KERB + 6; y < NEAR_KERB - 3; y += 6.5) {
    let x = between(r, -30, 0)
    while (x < W) {
      const len = between(r, 20, 70)
      if (r() < 0.3 + (y - FAR_KERB) / 160)
        road += gouge(x, y, x + len, y, 0.35 + (y - FAR_KERB) / 110)
      x += len + between(r, 20, 60)
    }
  }
  // The near pavement: flags, their joints running towards the eye.
  let pave = ''
  for (let x = -40; x < W + 60; x += 58) pave += wedge(x + 18, NEAR_KERB + 5, x - 16, H, 0.9, 2.2)
  for (const y of [288, 318]) pave += wedge(0, y, W, y + 1, 1 + (y - 262) / 40, 1 + (y - 262) / 40)
  // The slats of the painted shutters.
  let slats = ''
  for (const [x0, x1] of SHOPS) for (let x = x0 + 16; x < x1 - 40; x += 7) slats += `M${x} 153V196`
  cached = { sky, fronts, block, road, pave, slats }
  return cached
}

/** The row's roofline, less the gap for the court and the block. */
function rowShape() {
  let d = ''
  for (const [x0, x1, roof] of SHOPS) d += `M${x0} ${BASE}V${roof}H${x1}V${BASE}Z`
  return d
}

/** Windows on the first and second floors of each shop: dark panes, paper sashes. */
function windows(): [number, number, number, number][] {
  const out: [number, number, number, number][] = []
  for (const [x0, x1, roof] of SHOPS) {
    const span = x1 - x0
    const n = span > 120 ? 3 : 1
    for (let i = 0; i < n; i++) {
      const cx = x0 + (span * (i + 0.5)) / n
      out.push([cx - 11, roof + 16, 22, 30])
      if (roof + 60 < 128) out.push([cx - 11, roof + 58, 22, 30])
    }
  }
  return out.filter(([x, y]) => y + 30 < 136 && x > -4)
}
const WINDOWS = windows()

/** Utterson, walking, his stick planted, looking across at the door. */
const UTT_HEAD = { d: HEAD_UTTERSON, at: [148, 126] as P, scale: 1.3 }
const UTT_ARM: P[] = [
  [148, 168],
  [154, 198],
  [164, 224],
]
const UTTERSON: Part[] = [
  ...gent({
    facing: 1,
    neck: [144, 160],
    hip: [140, 228],
    head: UTT_HEAD,
    hat: TOP_HAT,
    body: { width: 30, hem: 50, flare: 8 },
    near: {
      arm: UTT_ARM,
      leg: [
        [142, 228],
        [152, 274],
        [158, 320],
      ],
    },
    far: {
      arm: [
        [140, 168],
        [132, 198],
        [128, 222],
      ],
      leg: [
        [138, 228],
        [130, 274],
        [120, 318],
      ],
    },
  }),
  { d: 'M166 222L176 324', w: 3.4 },
  ...GRIP_HAND.map((q) => ({ ...q, t: handAt(UTT_ARM, 1, { parts: GRIP_HAND, rot: -20 }) })),
]

/** Enfield, a pace ahead, his cane lifted and pointed across the road. */
const ENF_HEAD = { d: HEAD_ENFIELD, at: [259, 135] as P, scale: 1.26 }
const ENF_ARM: P[] = [
  [260, 172],
  [284, 170],
  [306, 164],
]
const CANE = 'M296 167L398 141'
const ENFIELD: Part[] = [
  ...gent({
    facing: 1,
    neck: [254, 166],
    hip: [250, 232],
    head: ENF_HEAD,
    hat: TOP_HAT,
    body: { width: 34, hem: 42, flare: 9 },
    near: {
      arm: ENF_ARM,
      leg: [
        [252, 232],
        [266, 274],
        [276, 320],
      ],
    },
    far: {
      arm: [
        [250, 172],
        [244, 202],
        [246, 228],
      ],
      leg: [
        [248, 232],
        [238, 276],
        [224, 318],
      ],
    },
  }),
  { d: CANE, w: 3.4 },
  ...GRIP_HAND.map((q) => ({ ...q, t: handAt(ENF_ARM, 1, { parts: GRIP_HAND }) })),
]

function TheDoor({ uid }: ArtProps) {
  const m = marks()
  const clip = {
    fronts: `${uid}-fronts`,
    block: `${uid}-block`,
  }
  const blockWall = `M${BL} ${BASE}V${EAVES}L${APEX[0]} ${APEX[1]}L${BR} ${EAVES}V${BASE}Z`
  const blockSide = `M${BL - 14} ${BASE}V${EAVES + 6}L${BL} ${EAVES}V${BASE}Z`
  const ut = headAt(1, UTT_HEAD.at, 0, UTT_HEAD.scale)
  const et = headAt(1, ENF_HEAD.at, 0, ENF_HEAD.scale)
  return (
    <>
      <defs>
        <clipPath id={clip.fronts}>
          <path d={rowShape()} />
        </clipPath>
        <clipPath id={clip.block}>
          <path d={blockWall + blockSide} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [560, 160], push: 1.03 })}>
        {/* the Sunday sky */}
        <rect x={0} y={0} width={W} height={BASE} fill={PAPER} />
        <path d={m.sky} fill={INK} />

        {/* the court's entry: a dark way in between the shops and the block */}
        <path d={`M446 ${BASE}V70H${BL}V${BASE}Z`} fill={INK} />
        <path
          d={
            gouge(452, 120, 452, 196, 1.1) +
            gouge(462, 110, 462, 196, 0.8) +
            gouge(449, 102, 470, 102, 0.8)
          }
          fill={PAPER}
        />

        {/* the shops: pale brick, dark roofs and chimneys */}
        <path d={rowShape()} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} />
        <g clipPath={`url(#${clip.fronts})`}>
          <path d={m.fronts} fill={INK} />
        </g>
        {SHOPS.map(([x0, x1, roof, chim]) => (
          <g key={x0} fill={INK}>
            <rect x={x0} y={roof} width={x1 - x0} height={10} />
            <rect x={x0} y={roof + 12} width={x1 - x0} height={2.4} />
            {chim > 0 && <rect x={chim} y={roof - 18} width={16} height={18} />}
            {chim > 0 && <rect x={chim - 2} y={roof - 21} width={20} height={4} />}
          </g>
        ))}
        {WINDOWS.map(([x, y, w, h]) => (
          <g key={`${x}-${y}`}>
            <rect x={x - 3} y={y - 3} width={w + 6} height={h + 6} fill={PAPER} />
            <rect x={x} y={y} width={w} height={h} fill={INK} />
            <path
              d={`M${x + w / 2} ${y}V${y + h}M${x} ${y + h / 2}H${x + w}`}
              stroke={PAPER}
              strokeWidth={1.4}
            />
            <rect x={x - 4} y={y + h + 2} width={w + 8} height={3} fill={INK} />
          </g>
        ))}
        {/* the shopfronts: a fascia, and the freshly painted shutters closed for Sunday */}
        {SHOPS.map(([x0, x1]) => (
          <g key={`s${x0}`}>
            <rect x={x0} y={136} width={x1 - x0} height={10} fill={INK} />
            <path d={gouge(x0 + 6, 141, x1 - 6, 141, 1.2)} fill={PAPER} />
            <rect
              x={x0 + 10}
              y={150}
              width={Math.max(x1 - x0 - 50, 10)}
              height={BASE - 150}
              fill={INK}
            />
            <rect
              x={x0 + 13}
              y={153}
              width={Math.max(x1 - x0 - 56, 4)}
              height={BASE - 157}
              fill={RED}
            />
            {/* the shop door, and its polished brass knob */}
            <rect x={x1 - 34} y={150} width={20} height={BASE - 150} fill={INK} />
            <circle cx={x1 - 18} cy={176} r={2.2} fill={PAPER} />
            <rect x={x1 - 31} y={156} width={14} height={4} fill={PAPER} />
          </g>
        ))}
        <path d={m.slats} stroke={INK} strokeWidth={1.3} />

        {/* the block: thrust forward, its side showing, no window, the wall blotched */}
        <path d={blockSide} fill={INK} />
        <path d={blockWall} fill={INK} />
        <g clipPath={`url(#${clip.block})`}>
          <path d={m.block} fill={PAPER} />
        </g>
        <path
          d={`M${BL - 18} ${EAVES + 8}L${APEX[0]} ${APEX[1] - 8}L${BR + 6} ${EAVES + 2}`}
          fill="none"
          stroke={INK}
          strokeWidth={7}
          strokeLinejoin="round"
        />
        <path
          d={`M${BL - 16} ${EAVES + 4}L${APEX[0]} ${APEX[1] - 12}L${BR + 4} ${EAVES - 2}`}
          fill="none"
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        <path d={`M${BL} ${EAVES}V${BASE}`} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={`M${BL} 121H${BR}`} stroke={PAPER} strokeWidth={LINE.fine} />
        {/* the side it thrusts forward, in shade */}
        <path
          d={
            gouge(471, 96, 479, 90, 0.8) +
            gouge(471, 124, 479, 118, 0.8) +
            gouge(471, 152, 479, 146, 0.8) +
            gouge(471, 180, 479, 174, 0.8)
          }
          fill={PAPER}
        />
        <Door box={DOOR} />

        {/* the far pavement, the road, the near pavement */}
        <rect x={0} y={BASE} width={W} height={H - BASE} fill={PAPER} />
        <path d={`M0 ${FAR_KERB}H${W}`} stroke={INK} strokeWidth={LINE.bold} />
        <path d={m.road} fill={INK} />
        <path d={`M0 ${NEAR_KERB}H${W}`} stroke={INK} strokeWidth={3.4} />
        <path d={`M0 ${NEAR_KERB + 4}H${W}`} stroke={INK} strokeWidth={1} />
        <path d={m.pave} fill={INK} />

        {/* their shadows on the flags */}
        <path
          d={
            gouge(96, 326, 196, 326, 3.2) +
            gouge(200, 324, 312, 324, 3.2) +
            gouge(110, 331, 180, 331, 1.6) +
            gouge(214, 329, 296, 329, 1.6)
          }
          fill={INK}
        />

        {/* Utterson and Enfield */}
        <Figure parts={UTTERSON}>
          <path d={TOP_HAT_BAND + UTTERSON_CUTS + COLLAR} transform={ut} fill={PAPER} />
          <path
            d={gouge(152, 164, 150, 206, 0.9, 1.2) + gouge(146, 176, 140, 222, 0.9, 0.8)}
            fill={PAPER}
          />
          <g fill={PAPER}>
            <circle cx={153} cy={188} r={1.3} />
            <circle cx={152} cy={200} r={1.3} />
          </g>
        </Figure>
        <Figure parts={ENFIELD}>
          <path d={TOP_HAT_BAND + ENFIELD_CUTS + COLLAR} transform={et} fill={PAPER} />
          <path
            d={gouge(263, 170, 262, 210, 0.9, 1.2) + gouge(254, 186, 250, 228, 0.9, 0.8)}
            fill={PAPER}
          />
          <g fill={PAPER}>
            <circle cx={265} cy={196} r={1.3} />
            <circle cx={265} cy={208} r={1.3} />
          </g>
        </Figure>
      </g>
    </>
  )
}

export const theDoor: LinocutArt = { width: W, height: H, Draw: TheDoor }
