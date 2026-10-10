import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  BROCKLEHURST_CUTS,
  BROCKLEHURST_HAIR,
  BROCKLEHURST_HAIR_CUTS,
  BROCKLEHURST_NECKCLOTH,
  BROCKLEHURST_TEETH,
  Figure,
  HEAD_BROCKLEHURST,
  HEAD_MRS_REED,
  HOLD_HAND,
  JaneGirl,
  LOOSE_HAND,
  MRS_REED_CAP,
  MRS_REED_CAP_FRILL,
  MRS_REED_CUTS,
  MRS_REED_HAIR,
  MRS_REED_HAIR_LINES,
  OPEN_HAND,
  boot,
  handAt,
  headAt,
  line,
  type P,
  type Part,
} from './people'

/**
 * Chapter 4: "The black pillar", the third moment in the guide's timeline.
 * Every detail is from the held edition (src/data/full-texts/jane-eyre.ts).
 *
 * THE MOMENT DRAWN. The instant that gives the moment its name, Jane's first
 * sight of Brocklehurst: "The handle turned, the door unclosed, and passing
 * through and curtseying low, I looked up at—a black pillar!—such, at
 * least, appeared to me, at first sight, the straight, narrow, sable-clad
 * shape standing erect on the rug: the grim face at the top was like a
 * carved mask, placed above the shaft by way of capital." What follows (Mrs
 * Reed calling her deceitful, Jane's "I am not deceitful" when he has gone)
 * is in the guide's own words beside the picture.
 *
 * - "It was the fifteenth of January, about nine o'clock in the morning";
 *   "the breakfast-room door". So it is the room of the first panel, the
 *   same panelled door and the same boards, on a grey winter morning; this
 *   view takes the fireplace wall and the second of its "windows".
 * - "Mrs. Reed occupied her usual seat by the fireside; she made a signal to
 *   me to approach". So she sits in her arm-chair at the right of the fire,
 *   one hand lifted, beckoning, palm up.
 * - "He, for it was a man, turned his head slowly towards where I stood";
 *   "Her size is small". So he stands on the hearth-rug in front of the pale
 *   marble chimney-piece, the tallest and narrowest shape in the room, his
 *   head turned down towards Jane at the door; she, small, curtseys with her
 *   hands at her skirt and looks up. Bessie has "denuded me of my pinafore",
 *   so Jane wears her dark frock alone.
 * - The fire is printed in the spot colour: it is the one warm thing in the
 *   room, and within minutes Brocklehurst will ask her what hell is ("A pit
 *   full of fire."). It burns low in the grate, well away from every hand
 *   and face.
 * - Brocklehurst and Mrs Reed are cut as ./people.tsx describes them: he is
 *   all black from the neckcloth to the ground, "buttoned up" (Chapter 7),
 *   his face a carved mask of an INK face, bushy brows, great nose and large
 *   teeth cut in paper; she is stout and square-shouldered, with a heavy jaw,
 *   a white cap and flaxen hair. His black head is set against the pale
 *   glass over the chimney-piece, a capital on its shaft.
 *
 * Seeds: 1301 (the wall), 1302 (the wainscot and floor), 1303 (the glass),
 * 1304 (the window).
 */

const W = 860
const H = 340
/** The foot of the back wall. */
const FLOOR = 252
/** The overmantel glass, and the window. */
const GLASS = { x0: 312, x1: 506, y0: 26, y1: 114 }
const WIN = { x0: 690, x1: 834, y0: 30, y1: 222 }

type Marks = {
  wall: string
  wains: string
  floor: string
  pools: string
  glass: string
  frost: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // Grey morning light from the window, and the glow of the fire.
  const light = (x: number, y: number) =>
    Math.max(
      clamp(1 - Math.hypot((x - 760) * 0.7, (y - 120) * 1.1) / 300),
      clamp(1 - Math.hypot(x - 408, y - 230) / 150) * 0.55,
      0.05,
    )
  const wall = gougeField(rng(1301), { x0: 0, x1: W, y0: 4, y1: 184 }, light, {
    spacing: 6.5,
    len: [16, 60],
    gap: [6, 20],
    max: 3.8,
  })
  const r = rng(1302)
  let wains = ''
  for (let x = 2; x < W; x += 9) {
    if (x > 6 && x < 128) continue
    if (x > 284 && x < 532) continue
    const L = light(x, 214)
    wains += wedge(x + between(r, -0.6, 0.6), 196, x + between(r, -0.6, 0.6), 242, 0.4, 0.8 + L * 3)
  }
  let floor = ''
  const V: P = [430, 30]
  for (let xt = -760; xt < 1700; xt += 34) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (FLOOR - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(r, 0.3, 0.8))
      floor += wedge(
        xt + (xb - xt) * t0,
        FLOOR + (H - FLOOR) * t0,
        xt + (xb - xt) * t1,
        FLOOR + (H - FLOOR) * t1,
        0.8 + t0 * 3,
        0.8 + t1 * 3,
      )
      t0 = t1 + between(r, 0.02, 0.07)
    }
  }
  let pools = ''
  for (let y = FLOOR + 1; y < FLOOR + 14; y += 3)
    pools += gouge(0, y, W, y, 2.4 - (y - FLOOR) * 0.15)
  const pool = (cx: number, cy: number, rx: number, ry: number) => {
    for (let y = cy - ry; y < cy + ry; y += 3.2) {
      const w = 1 - Math.abs(y - cy) / ry
      pools += gouge(cx - rx * w, y, cx + rx * w, y + 0.6, 0.6 + w * 2.2)
    }
  }
  pool(172, 316, 34, 6)
  pool(596, 304, 70, 8)
  // The glass over the chimney-piece: pale, with a few slanting reflections.
  const rg = rng(1303)
  let glass = ''
  for (let k = 0; k < 9; k++) {
    const x = between(rg, GLASS.x0 + 10, GLASS.x1 - 30)
    const y = between(rg, GLASS.y0 + 30, GLASS.y1 - 6)
    glass += gouge(x, y, x + 22, y - 22, between(rg, 0.5, 1))
  }
  // Frost at the foot of the panes; bare branches beyond.
  const rf = rng(1304)
  let frost = ''
  for (let k = 0; k < 10; k++) {
    const x = between(rf, WIN.x0 + 16, WIN.x1 - 16)
    frost += gouge(x, WIN.y1 - 12, x + between(rf, -8, 8), WIN.y1 - between(rf, 24, 40), 0.6)
  }
  cached = { wall, wains, floor, pools, glass, frost }
  return cached
}

/**
 * Brocklehurst, the black pillar, on the rug, facing left: one straight black
 * shape from the shoulders to the shins, his arms close to it, his head
 * turned down towards Jane.
 */
const BROCK_HEAD = { at: [318, 52] as P, rot: -10, scale: 1.08 }
const BROCK_T = headAt(-1, BROCK_HEAD.at, BROCK_HEAD.rot, BROCK_HEAD.scale)
const BROCK_BODY =
  'M300 96C302 90 310 86 319 86C328 86 336 90 338 96L341 110L341 266L297 266L297 110Z'
const BROCK_ARM: P[] = [
  [301, 100],
  [298, 160],
  [300, 214],
]
const BROCK: Part[] = [
  { d: 'M312 266L310 312', w: 12 },
  { d: 'M327 266L330 312', w: 12 },
  boot([310, 314], -1, 1.5),
  boot([330, 314], -1, 1.5),
  { d: BROCK_BODY },
  { d: HEAD_BROCKLEHURST, t: BROCK_T },
  { d: BROCKLEHURST_HAIR, t: BROCK_T },
  { d: line(BROCK_ARM), w: 11, sep: 1.4 },
  ...LOOSE_HAND.map((q) => ({
    ...q,
    t: handAt(BROCK_ARM, -1, { parts: LOOSE_HAND, scale: 1.3, rot: 6 }),
  })),
]
/** "buttoned up in a surtout": the buttons down its front, and the seam at the back. */
const BROCK_CUTS =
  [104, 122, 140, 158, 176, 194, 212, 230].map((y) => gouge(305, y, 308.4, y, 1.1)).join('') +
  gouge(336, 120, 337, 258, 0.8) +
  gouge(305, 246, 304, 262, 0.7)

/** Mrs Reed, in her arm-chair at the right of the fire, facing left, beckoning. */
const REED_HEAD = { at: [574, 158] as P, rot: -4, scale: 1.02 }
const REED_T = headAt(-1, REED_HEAD.at, REED_HEAD.rot, REED_HEAD.scale)
const REED_NEAR_ARM: P[] = [
  [566, 190],
  [552, 220],
  [532, 210],
]
/** Her dark gown, square at the shoulders, seated: the bodice, the lap, the skirt to the floor. */
const REED_GOWN =
  'M562 186C568 181 584 181 592 186L596 216C598 226 598 236 596 244L560 246C548 246 538 248 532 252C528 266 528 284 530 300L582 302C590 290 600 272 604 252L600 214L594 188Z'
const REED: Part[] = [
  { d: 'M542 286L538 300', w: 8 },
  boot([538, 302], -1, 0.9),
  { d: REED_GOWN },
  { d: HEAD_MRS_REED, t: REED_T },
  { d: line(REED_NEAR_ARM), w: 9.5, sep: 1.4 },
  ...OPEN_HAND.map((q) => ({
    ...q,
    t: handAt(REED_NEAR_ARM, -1, { parts: OPEN_HAND, scale: 1.05, rot: -20, flip: false }),
  })),
]
const REED_CUTS =
  gouge(566, 196, 570, 240, 0.9, -0.6) +
  gouge(546, 262, 542, 296, 0.9, 0.4) +
  gouge(566, 256, 566, 298, 0.8) +
  gouge(586, 256, 584, 296, 0.8, -0.4)

/** Jane, just inside the door, facing right, curtseying low and looking up. */
const JANE_POSE = {
  facing: 1 as const,
  neck: [172, 207] as P,
  waist: [171, 237] as P,
  hemY: 294,
  head: { at: [164, 187] as P, rot: -22, scale: 0.9 },
  // The frock held out at either side by her hands, the hem near the floor.
  skirt:
    'M167 204C171 202 177 203 179 206L181 214L178 236C187 239 197 245 205 254C209 266 210 284 210 302Q174 309 134 302C134 284 138 264 146 252C153 245 160 240 164 236L162 214Z',
  arm: 7.4,
  leg: 8,
  shoe: 0.82,
  near: {
    arm: [
      [175, 214],
      [187, 236],
      [201, 250],
    ] as P[],
    leg: [
      [175, 255],
      [191, 281],
      [188, 312],
    ] as P[],
    hand: { parts: HOLD_HAND, scale: 0.9, rot: 30 },
  },
  far: {
    arm: [
      [166, 215],
      [156, 236],
      [144, 250],
    ] as P[],
    leg: [
      [168, 255],
      [156, 288],
      [138, 312],
    ] as P[],
    hand: { parts: HOLD_HAND, scale: 0.9, rot: -30 },
  },
}

function BlackPillar({ uid }: ArtProps) {
  const m = marks()
  const id = { glass: `${uid}-glass`, win: `${uid}-win` }
  return (
    <>
      <defs>
        <clipPath id={id.glass}>
          <rect
            x={GLASS.x0}
            y={GLASS.y0}
            width={GLASS.x1 - GLASS.x0}
            height={GLASS.y1 - GLASS.y0}
          />
        </clipPath>
        <clipPath id={id.win}>
          <rect x={WIN.x0} y={WIN.y0} width={WIN.x1 - WIN.x0} height={WIN.y1 - WIN.y0} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [320, 120], push: 1.03 })}>
        {/* the wall, the chair rail, the wainscot and the skirting, as in the first panel */}
        <path d={m.wall} fill={PAPER} />
        <rect x={0} y={186} width={W} height={5} fill={PAPER} />
        <rect x={0} y={193} width={W} height={1.6} fill={PAPER} />
        <path d={m.wains} fill={PAPER} />
        <rect x={0} y={243} width={W} height={9} fill={PAPER} />
        <rect x={0} y={246} width={W} height={1.4} fill={INK} />
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />
        <path d={m.pools} fill={INK} />

        {/* the panelled door Jane has come through */}
        <rect x={6} y={0} width={122} height={FLOOR} fill={PAPER} />
        <rect x={12} y={0} width={110} height={FLOOR} fill={INK} />
        <g fill="none" stroke={PAPER} strokeWidth={LINE.fine}>
          <path d={`M9 0V${FLOOR}M125 0V${FLOOR}`} />
          <rect x={26} y={30} width={36} height={86} />
          <rect x={72} y={30} width={36} height={86} />
          <rect x={26} y={132} width={36} height={104} />
          <rect x={72} y={132} width={36} height={104} />
        </g>
        <circle cx={112} cy={150} r={3.8} fill={PAPER} />
        <circle cx={112} cy={150} r={1.5} fill={INK} />

        {/* the window: a grey January morning, frost, bare branches */}
        <rect
          x={WIN.x0 - 6}
          y={WIN.y0 - 6}
          width={WIN.x1 - WIN.x0 + 12}
          height={WIN.y1 - WIN.y0 + 12}
          fill={PAPER}
        />
        <rect x={WIN.x0} y={WIN.y0} width={WIN.x1 - WIN.x0} height={WIN.y1 - WIN.y0} fill={PAPER} />
        <g clipPath={`url(#${id.win})`}>
          <path
            d="M700 222L704 160L700 120M704 160L722 130L732 96M722 130L744 118M704 180L684 150M760 222L762 170L776 140L790 110M762 170L748 150M776 140L800 132"
            fill="none"
            stroke={INK}
            strokeWidth={2.2}
            strokeLinecap="round"
          />
          <path d={m.frost} fill={INK} />
        </g>
        <g fill={INK}>
          <rect x={WIN.x0} y={WIN.y0} width={WIN.x1 - WIN.x0} height={4} />
          <rect x={WIN.x0} y={WIN.y1 - 4} width={WIN.x1 - WIN.x0} height={4} />
          <rect x={759} y={WIN.y0} width={5} height={WIN.y1 - WIN.y0} />
          <rect x={WIN.x0} y={92} width={WIN.x1 - WIN.x0} height={4} />
          <rect x={WIN.x0} y={156} width={WIN.x1 - WIN.x0} height={4} />
        </g>
        <rect x={WIN.x0 - 10} y={WIN.y1 + 4} width={WIN.x1 - WIN.x0 + 20} height={6} fill={PAPER} />

        {/* the pale marble chimney-piece, the glass over it, and the fire */}
        <rect
          x={GLASS.x0 - 8}
          y={GLASS.y0 - 8}
          width={GLASS.x1 - GLASS.x0 + 16}
          height={GLASS.y1 - GLASS.y0 + 8}
          fill={PAPER}
        />
        <rect
          x={GLASS.x0}
          y={GLASS.y0}
          width={GLASS.x1 - GLASS.x0}
          height={GLASS.y1 - GLASS.y0}
          fill={INK}
        />
        <rect
          x={GLASS.x0 + 3}
          y={GLASS.y0 + 3}
          width={GLASS.x1 - GLASS.x0 - 6}
          height={GLASS.y1 - GLASS.y0 - 6}
          fill={PAPER}
        />
        <g clipPath={`url(#${id.glass})`}>
          <path d={m.glass} fill={INK} />
        </g>
        <rect x={290} y={114} width={238} height={9} fill={PAPER} />
        <rect x={290} y={123} width={238} height={2} fill={INK} />
        <rect x={298} y={125} width={222} height={FLOOR - 125} fill={PAPER} />
        <path d="M336 252V158Q336 146 348 146H470Q482 146 482 158V252Z" fill={INK} />
        <path
          d="M304 132V246M314 132V246M504 132V246M514 132V246M324 136H494"
          fill="none"
          stroke={INK}
          strokeWidth={1}
        />
        {/* the grate and the fire in it */}
        <path
          d="M362 212H456M364 222H454M366 232H452M372 212V244M446 212V244"
          fill="none"
          stroke={PAPER}
          strokeWidth={1.5}
        />
        <g fill={RED}>
          <path d="M372 212C372 204 380 200 388 204C392 196 404 196 408 204C414 198 424 198 428 204C436 200 446 204 446 212Z" />
          <path
            className="lc-flicker"
            d="M386 204C383 194 388 184 392 176C396 186 400 194 396 204Z"
          />
          <path
            className="lc-flicker"
            style={timing({ dur: 0.8, delay: 0.35 })}
            d="M412 204C410 196 414 188 417 182C420 190 422 196 420 204Z"
          />
          <path
            className="lc-flicker"
            style={timing({ dur: 1, delay: 0.6 })}
            d="M432 204C431 198 434 193 436 189C438 194 439 199 437 204Z"
          />
        </g>
        <rect x={340} y={246} width={140} height={4} fill={PAPER} />

        {/* the hearth-rug */}
        <path
          d="M244 300L268 284H560L590 300L594 324H240Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d="M256 304L274 292H554L576 304L578 318H254Z"
          fill="none"
          stroke={PAPER}
          strokeWidth={1.2}
        />
        <path
          d="M300 300L312 296L324 300L312 304ZM380 300L392 296L404 300L392 304ZM460 300L472 296L484 300L472 304ZM540 300L552 296L564 300L552 304Z"
          fill={PAPER}
        />

        {/* Mrs Reed's arm-chair */}
        <path
          d="M584 142C596 132 626 132 638 142L642 260L580 262Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.fine}
        />
        <path d="M594 150V254M610 146V254M626 150V254" stroke={INK} strokeWidth={1.4} />
        <path d="M576 236H648V266H576Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path
          d="M578 266L580 300M646 266L644 300"
          stroke={INK}
          strokeWidth={5.4}
          strokeLinecap="round"
        />

        {/* Mrs Reed */}
        <Figure parts={REED} cuts={REED_CUTS}>
          <path d={MRS_REED_CUTS} transform={REED_T} fill={PAPER} />
          <path d={MRS_REED_HAIR} transform={REED_T} fill={PAPER} />
          <path
            d={MRS_REED_HAIR_LINES}
            transform={REED_T}
            fill="none"
            stroke={INK}
            strokeWidth={0.8}
          />
          <path d={MRS_REED_CAP} transform={REED_T} fill={PAPER} stroke={INK} strokeWidth={1} />
          <path
            d={MRS_REED_CAP_FRILL}
            transform={REED_T}
            fill="none"
            stroke={INK}
            strokeWidth={0.9}
          />
        </Figure>

        {/* Brocklehurst, the black pillar */}
        <Figure parts={BROCK} cuts={BROCK_CUTS}>
          <path d={BROCKLEHURST_HAIR_CUTS} transform={BROCK_T} fill={PAPER} />
          <path d={BROCKLEHURST_CUTS} transform={BROCK_T} fill={PAPER} />
          <path
            d={BROCKLEHURST_TEETH}
            transform={BROCK_T}
            fill="none"
            stroke={INK}
            strokeWidth={0.7}
          />
          <path d={BROCKLEHURST_NECKCLOTH} transform={BROCK_T} fill={PAPER} />
        </Figure>

        {/* Jane, curtseying */}
        <JaneGirl pose={JANE_POSE} dress="frock" eye="wide" mouth="shut" />
      </g>
    </>
  )
}

export const theBlackPillar: LinocutArt = { width: W, height: H, Draw: BlackPillar }
