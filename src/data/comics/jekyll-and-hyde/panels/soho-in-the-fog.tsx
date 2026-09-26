import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED, SERIF } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  ribbon,
  rng,
  wave,
  wedge,
  wisps,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Figure,
  HEAD_UTTERSON,
  TOP_HAT,
  TOP_HAT_BAND,
  UTTERSON_CUTS,
  gent,
  headAt,
  type Part,
} from './people'
import { COLLAR } from './investigation-kit'

/**
 * Chapter 4, "The Carew Murder Case": "Soho in the fog", the sixth moment in
 * the guide's timeline. Every detail is from the text:
 *
 * - "It was by this time about nine in the morning, and the first fog of the
 *   season. A great chocolate-coloured pall lowered over heaven". So the top
 *   of the block is a heavy dark pall; the print cannot show brown, so the
 *   colour is left to the words.
 * - "here, for a moment, the fog would be quite broken up, and a haggard shaft
 *   of daylight would glance in between the swirling wreaths". So one shaft of
 *   light is cut down through the pall, and paper wreaths drift over the roofs.
 * - "its lamps, which had never been extinguished or had been kindled afresh
 *   to combat this mournful reinvasion of darkness". So the street lamps burn
 *   in the morning, their flames the spot colour.
 * - "As the cab drew up before the address indicated, the fog lifted a little
 *   and showed him a dingy street, a gin palace, a low French eating house, a
 *   shop for the retail of penny numbers and twopenny salads, many ragged
 *   children huddled in the doorways, and many women of many different
 *   nationalities passing out, key in hand, to have a morning glass". So the
 *   row is those three shops, left to right the paper shop, the gin palace
 *   (its name over the door, its windows lit) and the low eating house, with
 *   ragged children huddled in two doorways. "with its muddy ways": the road
 *   is cut with ruts and puddles. The women with their keys were drawn and
 *   taken out: at panel size a shawled figure read as a hooded ghost, which
 *   the text does not have.
 * - "If you will come with me in my cab"; "when he glanced at the companion of
 *   his drive". Utterson has brought Inspector Newcomen of Scotland Yard, so
 *   the cab stands at the kerb on the left, the inspector still at its window,
 *   and Utterson, down on the road, looks along the street.
 *
 * Utterson is the shared figure (./people.tsx): "lean, long, dusty, dreary"
 * (Chapter 1), with "a rugged countenance that was never lighted by a
 * smile", in a top hat and greatcoat (he takes up "his hat and greatcoat" in
 * Chapter 8). Newcomen is not described, so he is a plain man in the bowler
 * hat of the period. Nothing is taken from a film or stage production.
 *
 * The spot colour is the lamps burning in the morning. Seeds: 601 (the fog
 * behind the houses), 602 (the fog on the fronts), 603 (the road), 604 (the
 * pall), 605 (the shaft), 606 to 608 (the wreaths).
 */

const W = 860
const H = 340
/** The foot of the house fronts, and the edge of the pavement. */
const BASE = 224
const KERB = 262
/** Where the shaft of daylight enters at the top of the block, and how it slants. */
const SHAFT: [number, number] = [92, 0]
const SHAFT_SLOPE = 0.6

type Marks = {
  fog: string
  pall: string
  shaft: string
  wreaths: string
  settling: string
  fronts: string
  pave: string
  road: string
  puddles: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The fog is thinnest where it has lifted over the street, behind Utterson,
  // and darkest in the pall overhead.
  // The shaft of daylight is the same cuts widened along a slanting band,
  // fading as it nears the street, so it is light in the fog and not a
  // shape laid over it.
  const beam = (x: number, y: number) =>
    clamp(1 - Math.abs(x - (SHAFT[0] + 60 + y * SHAFT_SLOPE)) / 58) * (1 - (y / BASE) * 0.55)
  const light = (x: number, y: number) =>
    clamp(
      0.14 +
        0.44 * clamp((y - 50) / 140) +
        0.8 * clamp(1 - Math.hypot((x - 210) * 0.7, y - 175) / 175) +
        0.62 * beam(x, y),
    )
  const fog = gougeField(rng(601), { x0: 0, x1: W, y0: 4, y1: BASE }, light, {
    spacing: 5.4,
    len: [18, 80],
  })
  // The pall: slow rolls of cut line along the top of the block.
  const p = rng(604)
  let pall = ''
  for (let k = 0; k < 6; k++) {
    const y = 10 + k * 9
    let x = between(p, -40, 0)
    while (x < W) {
      const len = between(p, 60, 170)
      if (p() < 0.55)
        pall += ribbon(
          wave(x, x + len, y + between(p, -2, 2), 2.2, between(p, 70, 120), between(p, 0, 6), 14),
          between(p, 0.8, 1.6) + k * 0.25,
          0.8,
        )
      x += len + between(p, 20, 60)
    }
  }
  // A few long cuts down the line of the beam, so it slants.
  const s = rng(605)
  let shaft = ''
  for (let i = 0; i < 7; i++) {
    const x0 = SHAFT[0] + 30 + i * 10 + between(s, -2, 2)
    const y0 = between(s, 4, 40)
    const y1 = y0 + between(s, 50, 110)
    shaft += gouge(x0 + y0 * SHAFT_SLOPE, y0, x0 + y1 * SHAFT_SLOPE, y1, 0.9 - i * 0.04)
  }
  const wreaths =
    wisps(rng(606), 5, { x0: 240, x1: W, y0: 22, y1: 70 }, [5, 11]) +
    wisps(rng(607), 3, { x0: 520, x1: W, y0: 88, y1: 118 }, [4, 8])
  // The fog settling down again on the far end of the street.
  const settling = wisps(rng(608), 6, { x0: 700, x1: W + 80, y0: 30, y1: 128 }, [4, 10])

  // The fog lying on the house fronts: thick at the roofs, thinning to the
  // shopfronts, where it has lifted. Cut over the windows too.
  const fronts = gougeField(
    rng(602),
    { x0: 262, x1: W, y0: 16, y1: 128 },
    (_x, y) => 0.04 + 0.7 * clamp((112 - y) / 96),
    { spacing: 5, len: [12, 50], max: 3.2 },
  )

  // The pavement: flags, their joints sloping a little towards the eye.
  let pave = ''
  for (let x = 150; x < W + 30; x += 38) pave += wedge(x, BASE + 1, x - 8, KERB, 0.8, 1.6)
  pave += wedge(150, 242, W, 242, 1.2, 1.2)
  for (let y = BASE + 2; y < BASE + 12; y += 3) pave += gouge(150, y, W, y, 1.6 - (y - BASE) * 0.12)

  // The muddy road: ruts and puddles, cut white.
  const r = rng(603)
  let road = ''
  for (let y = KERB + 10; y < H - 4; y += 8) {
    let x = between(r, -20, 0)
    while (x < W) {
      const len = between(r, 30, 110)
      const bright = y > 300 && x > 500 ? 0.3 : 1
      if (r() < 0.5 * bright)
        road += ribbon(
          wave(x, x + len, y + between(r, -2, 2), 1.2, 60, between(r, 0, 6), 10),
          between(r, 0.8, 2.4) * (0.6 + (y - KERB) / 140),
          0.7,
        )
      x += len + between(r, 16, 50)
    }
  }
  const puddles =
    'M268 296C290 290 330 290 350 296C340 302 290 304 268 296Z' +
    'M430 318C452 312 500 312 520 318C500 325 450 325 430 318Z'
  cached = { fog, pall, shaft, wreaths, settling, fronts, pave, road, puddles }
  return cached
}

/** The roofline of the row, left to right: the paper shop, the gin palace, the eating house, the tall house. */
const ROW =
  'M262 224V58H300V44H312V58H392V40H424V26H438V40H548V28H562V40H600V104L658 84L716 104V30H752V18H766V30H860V224Z'
/** The farther houses, faint in the fog above the low eating house. */
const FAR = 'M600 104V70H628V62H640V70H690V58H716V104Z'

/** The row's windows: [x, y, w, h]. Dark panes, paper frames. */
const WINDOWS: [number, number, number, number][] = [
  [276, 70, 30, 40],
  [336, 70, 30, 40],
  [410, 54, 30, 34],
  [466, 54, 30, 34],
  [522, 54, 30, 34],
  [410, 96, 30, 26],
  [466, 96, 30, 26],
  [522, 96, 30, 26],
  [734, 46, 28, 36],
  [800, 46, 28, 36],
  [734, 94, 28, 30],
  [800, 94, 28, 30],
]

/**
 * A ragged child sitting huddled on a doorstep, facing right, seat at (0, 0):
 * the head bowed on the knees, the arms round the shins, the hem torn.
 */
const CHILD =
  'M-9 0C-11 -8 -10 -16 -6 -21C-7 -27 -3 -31 2 -30.5C7 -30 9.5 -26 9 -21C11.5 -19.5 13.5 -15.5 12.5 -11L12.5 -2.5L15 0L11 -1.5L9 0.6L6.5 -1.2L3.5 0.8L0.5 -1.2L-2.5 0.8L-5.5 -1.2Z'
/** The arm wrapped round the knees, and the tear in the sleeve. */
const CHILD_CUTS = gouge(-5, -17, 10.5, -13, 0.7, 1.2) + gouge(-7.5, -9, -6, -3, 0.5)

/** A gas lamp on its post at the kerb: the lantern, its bars and its flame. */
function Lamp({ x, top, delay }: { x: number; top: number; delay: number }) {
  return (
    <g>
      <path
        d={`M${x} ${KERB}V${top + 22}`}
        stroke={PAPER}
        strokeWidth={7}
        fill="none"
        strokeLinecap="round"
      />
      <path d={`M${x} ${KERB}V${top + 22}`} stroke={INK} strokeWidth={4.2} fill="none" />
      <path d={`M${x - 8} ${top + 22}H${x + 8}`} stroke={INK} strokeWidth={3} />
      <path
        d={`M${x - 7} ${top + 20}L${x - 10} ${top + 2}H${x + 10}L${x + 7} ${top + 20}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.8}
      />
      <path d={`M${x - 12} ${top + 2}L${x} ${top - 6}L${x + 12} ${top + 2}Z`} fill={INK} />
      <path
        className="lc-flicker"
        style={timing({ delay, dur: 0.9 })}
        d={`M${x} ${top + 17}C${x - 4} ${top + 14} ${x - 3} ${top + 9} ${x} ${top + 5}C${x + 3} ${top + 9} ${x + 4} ${top + 14} ${x} ${top + 17}Z`}
        fill={RED}
      />
      <path d={`M${x} ${top + 2}V${top + 20}`} stroke={INK} strokeWidth={0.9} />
    </g>
  )
}

// ── Utterson: facing right, feet at (0, 0), about 196 tall to his hat ────────
// Cut from the shared figure (./people.tsx), standing still, looking along
// the street, his near hand in the pocket of his greatcoat.

const U_HEAD_T = headAt(1, [3, -156], -3, 1.04)
const UTTERSON: Part[] = gent({
  facing: 1,
  neck: [0, -128],
  hip: [-1, -74],
  head: { d: HEAD_UTTERSON, at: [3, -156], rot: -3, scale: 1.04 },
  hat: TOP_HAT,
  near: {
    arm: [
      [3, -122],
      [11, -100],
      [11, -80],
    ],
    leg: [
      [1, -74],
      [4, -37],
      [6, -6],
    ],
  },
  far: {
    arm: [
      [-4, -122],
      [-9, -100],
      [-8, -79],
    ],
    leg: [
      [-3, -74],
      [-5, -37],
      [-8, -6],
    ],
  },
  body: { width: 25, hem: 44, flare: 6 },
  arm: 7,
  leg: 7.8,
})
/** The folds of the greatcoat, and the pocket his hand is in. */
const U_CUTS =
  gouge(-9, -106, -14, -34, 0.9, 0.8) +
  gouge(1, -98, 0, -32, 1, 0.3) +
  gouge(9, -94, 13, -34, 0.8, -0.6) +
  'M6 -81L16 -83V-81L6 -79Z'

// ── The cab, drawn up at the kerb, facing left ────────────────────────────────

const CAB_BODY = 'M-10 166H132C140 166 146 172 146 180V250C146 258 140 262 132 262H-10Z'
const CAB_ROOF = 'M-10 158H138L142 166H-10Z'
const CAB_WINDOW = 'M60 176H122V214H60Z'
/** Newcomen at the far window: bowler hat, head and shoulders, facing right. */
const INSPECTOR =
  'M76 214C76 204 80 200 86 199L85 196C80 194 78 190 78 185C78 180 81 176 86 175.5L82 175C82 168 87 164 94 164C101 164 105 168 105 175L109 175.5C109 177 107 177.5 104 177.5C104.5 180 105 182 106.5 184.5L103.4 185.6L103.8 188.4L102.4 189.6C101.6 193 99 195 96 195.4L96 199C103 200 108 204 110 214Z'

function Wheel({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  const spokes = Array.from({ length: 12 }, (_, i) => {
    const a = (i * Math.PI) / 6
    return `M${n(cx + Math.cos(a) * 6)} ${n(cy + Math.sin(a) * 6)}L${n(cx + Math.cos(a) * (r - 5))} ${n(cy + Math.sin(a) * (r - 5))}`
  }).join('')
  return (
    <g>
      <circle cx={cx} cy={cy} r={r + 1.6} fill={PAPER} />
      <circle cx={cx} cy={cy} r={r} fill={INK} />
      <circle cx={cx} cy={cy} r={r - 4.5} fill="none" stroke={PAPER} strokeWidth={1.2} />
      <path d={spokes} stroke={PAPER} strokeWidth={1.4} />
      <circle cx={cx} cy={cy} r={6} fill={INK} stroke={PAPER} strokeWidth={1.2} />
    </g>
  )
}

function Soho({ uid }: ArtProps) {
  const m = marks()
  const id = { row: `${uid}-row` }
  return (
    <>
      <defs>
        <clipPath id={id.row}>
          <path d={ROW} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [300, 200], push: 1.03 })}>
        {/* the fog, thin where it has lifted over the street */}
        <path d={m.fog} fill={PAPER} />
        {/* the pall overhead, and the shaft of daylight through it */}
        <path d={m.pall} fill={PAPER} />
        <path d={m.shaft} fill={PAPER} />

        {/* the farther houses, faint, then the row */}
        <path d={FAR} fill="none" stroke={INK} strokeWidth={LINE.bold} />
        <path d={ROW} fill={INK} />
        <path d="M392 40V224M600 104V224M716 30V224" stroke={PAPER} strokeWidth={1.2} />
        <g>
          {WINDOWS.map(([x, y, w, h]) => (
            <g key={`${x}-${y}`}>
              <rect x={x - 2} y={y - 2} width={w + 4} height={h + 4} fill={PAPER} />
              <rect x={x} y={y} width={w} height={h} fill={INK} />
              <path
                d={`M${x + w / 2} ${y}V${y + h}M${x} ${y + h / 2}H${x + w}`}
                stroke={PAPER}
                strokeWidth={1.1}
              />
              <rect x={x - 4} y={y + h + 2} width={w + 8} height={3} fill={PAPER} />
            </g>
          ))}
        </g>
        {/* the fog lying on the upper storeys, over their windows */}
        <g clipPath={`url(#${id.row})`}>
          <path d={m.fronts} fill={PAPER} />
        </g>

        {/* the paper shop: penny numbers pegged up, salads on the board */}
        <rect x={268} y={134} width={120} height={12} fill={PAPER} />
        <rect x={268} y={146} width={120} height={2} fill={INK} />
        <rect x={272} y={152} width={74} height={54} fill={PAPER} />
        <path d="M272 162H346M272 184H346" stroke={INK} strokeWidth={0.9} />
        <g fill={INK}>
          {[278, 292, 306, 320, 334].map((x, i) => (
            <rect key={x} x={x} y={163} width={10} height={14 + (i % 2) * 2} />
          ))}
          {[282, 298, 314, 330].map((x) => (
            <rect key={x} x={x} y={185} width={11} height={15} />
          ))}
        </g>
        <path
          d="M280 167H286M280 170H286M294 167H300M308 167H314M308 170H314M322 167H328M336 167H342M284 189H291M300 189H307M300 192H307M316 189H323M332 189H339M332 192H339"
          stroke={PAPER}
          strokeWidth={0.8}
        />
        <rect x={266} y={206} width={84} height={18} fill={INK} />
        <path d="M268 208H348" stroke={PAPER} strokeWidth={1.4} />
        <g fill={PAPER} stroke={INK} strokeWidth={0.9}>
          {[276, 292, 308, 324, 340].map((x) => (
            <path key={x} d={`M${x - 7} 207C${x - 6} 200 ${x + 6} 200 ${x + 7} 207Z`} />
          ))}
        </g>
        <rect x={354} y={148} width={32} height={76} fill={INK} stroke={PAPER} strokeWidth={1.4} />

        {/* the gin palace, lit up in the morning */}
        <rect x={396} y={128} width={200} height={20} fill={INK} stroke={PAPER} strokeWidth={1.6} />
        <text
          x={496}
          y={144}
          textAnchor="middle"
          fontFamily={SERIF}
          fontSize={16}
          fontWeight={700}
          letterSpacing={6}
          fill={PAPER}
        >
          GIN
        </text>
        {[402, 526].map((x) => (
          <g key={x}>
            <path
              d={`M${x} 214V166Q${x} 154 ${x + 12} 154H${x + 56}Q${x + 68} 154 ${x + 68} 166V214Z`}
              fill={PAPER}
            />
            <path
              d={`M${x + 34} 154V214M${x} 186H${x + 68}M${x + 8} 170Q${x + 34} 160 ${x + 60} 170`}
              stroke={INK}
              strokeWidth={1.2}
              fill="none"
            />
            <rect x={x - 2} y={214} width={72} height={10} fill={INK} />
          </g>
        ))}
        <rect x={476} y={152} width={40} height={72} fill={PAPER} />
        <path
          d="M496 152V224M480 160H492V190H480ZM500 160H512V190H500ZM480 198H492V218H480ZM500 198H512V218H500Z"
          stroke={INK}
          strokeWidth={1.2}
          fill="none"
        />
        <path d="M394 150V224M598 150V224" stroke={PAPER} strokeWidth={2.4} />

        {/* the low French eating house: an awning and a half-curtained window */}
        <path d="M606 134H700L706 148H600Z" fill={INK} stroke={PAPER} strokeWidth={1.4} />
        <path
          d="M618 135L614 147M632 135L630 147M646 135L646 147M660 135L662 147M674 135L678 147M688 135L693 147"
          stroke={PAPER}
          strokeWidth={2.2}
        />
        <path
          d="M600 148Q606 155 612 148Q618 155 624 148Q630 155 636 148Q642 155 648 148Q654 155 660 148Q666 155 672 148Q678 155 684 148Q690 155 696 148Q702 155 706 148"
          fill={INK}
          stroke={PAPER}
          strokeWidth={1.2}
        />
        <rect x={610} y={156} width={66} height={52} fill={PAPER} />
        <path d="M610 180H676" stroke={INK} strokeWidth={1.4} />
        <rect x={610} y={181} width={66} height={27} fill={INK} />
        <path
          d="M618 183V206M628 183V206M638 183V206M648 183V206M658 183V206M668 183V206"
          stroke={PAPER}
          strokeWidth={0.9}
        />
        <rect x={684} y={156} width={24} height={68} fill={INK} stroke={PAPER} strokeWidth={1.4} />

        {/* the tall house's doorway */}
        <rect x={740} y={144} width={38} height={80} fill={INK} stroke={PAPER} strokeWidth={1.6} />
        <path d="M740 144Q759 128 778 144" fill="none" stroke={PAPER} strokeWidth={1.4} />
        <rect x={792} y={156} width={44} height={50} fill={INK} stroke={PAPER} strokeWidth={1.4} />
        <path d="M814 156V206M792 181H836" stroke={PAPER} strokeWidth={1} />

        {/* the wreaths of fog drifting over the roofs */}
        <g className="lc-drift" style={timing({ delay: 0.2 })}>
          <path d={m.wreaths} fill={PAPER} />
        </g>

        {/* the pavement and the kerb, the muddy road */}
        <rect x={0} y={BASE} width={W} height={KERB - BASE} fill={PAPER} />
        <path d={m.pave} fill={INK} />
        <rect x={0} y={KERB} width={W} height={5} fill={INK} />
        <rect x={0} y={KERB - 1.5} width={W} height={1.5} fill={PAPER} />
        <path d={m.road} fill={PAPER} />
        <path d={m.puddles} fill={PAPER} />
        <path d="M290 296H326M456 318H494" stroke={INK} strokeWidth={1} />

        {/* ragged children huddled in the doorways */}
        {[
          [370, 224, 1],
          [752, 224, 1],
          [768, 224, -1],
        ].map(([x, y, f]) => (
          <g key={x} transform={`translate(${x} ${y}) scale(${f} 1)`}>
            <path
              d={CHILD}
              fill={INK}
              stroke={PAPER}
              strokeWidth={LINE.carve}
              strokeLinejoin="round"
            />
            <path d={CHILD_CUTS} fill={PAPER} />
          </g>
        ))}

        {/* the fog settling down again on the far end of the street */}
        <g className="lc-drift-r" style={timing({ delay: 0.4 })}>
          <path d={m.settling} fill={PAPER} />
        </g>

        {/* the lamps, burning in the morning */}
        <Lamp x={256} top={148} delay={0.3} />
        <Lamp x={722} top={150} delay={0.6} />

        {/* the cab at the kerb, Newcomen still at its window */}
        <path d={CAB_ROOF} fill={INK} stroke={PAPER} strokeWidth={1.6} />
        <path d={CAB_BODY} fill={INK} stroke={PAPER} strokeWidth={1.6} />
        <path d={CAB_WINDOW} fill={PAPER} />
        <path d={INSPECTOR} fill={INK} />
        <path d="M60 176H122V214H60Z" fill="none" stroke={INK} strokeWidth={3} />
        <path
          d="M52 170V256M130 170V256M52 222H130M-10 222H40"
          stroke={PAPER}
          strokeWidth={1.3}
          fill="none"
        />
        <path d="M114 234H124" stroke={PAPER} strokeWidth={2.2} strokeLinecap="round" />
        <Wheel cx={104} cy={294} r={40} />
        <Wheel cx={-4} cy={300} r={34} />

        {/* Utterson, down from the cab, looking along the street */}
        <Figure parts={UTTERSON} cuts={U_CUTS} transform="translate(206 328)">
          <g transform={U_HEAD_T}>
            <path d={UTTERSON_CUTS + TOP_HAT_BAND + COLLAR} fill={PAPER} />
          </g>
        </Figure>
      </g>
    </>
  )
}

export const sohoInTheFog: LinocutArt = { width: W, height: H, Draw: Soho }
