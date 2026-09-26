import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, deg, gouge, gougeField, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Cut,
  EYE_CUT,
  HAIR_CUTS,
  HEAD,
  HEAD_FRAME,
  Horse,
  Pigeon,
  place,
  type P,
  type Part,
} from './people'

/**
 * Chapter 5: "Mollie leaves", the twelfth moment in the guide's timeline. The
 * moment has two places, so the block is cut in two, the farm on the left and,
 * three days and some weeks later, the far side of Willingdon on the right.
 * Every detail is from the text (the held edition,
 * src/data/full-texts/animal-farm.ts):
 *
 * LEFT, MOLLIE'S STALL.
 * - "A thought struck Clover. Without saying anything to the others, she went
 *   to Mollie's stall and turned over the straw with her hoof. Hidden under
 *   the straw was a little pile of lump sugar and several bunches of ribbon
 *   of different colours." So Clover, the stout hatched mare of the figure
 *   kit, stands alone in the stall with her head bowed over the straw she has
 *   pushed aside, and under it lie lumps of sugar and three bunches of
 *   ribbon. The print cannot show different colours, so one bunch is in the
 *   spot colour, one is paper and one is barred.
 *
 * RIGHT, OUTSIDE A PUBLIC-HOUSE.
 * - "the pigeons reported that they had seen her on the other side of
 *   Willingdon. She was between the shafts of a smart dogcart painted red and
 *   black, which was standing outside a public-house." So the inn stands on
 *   the right, and three pigeons, who saw it all, sit on its roof. The
 *   dogcart's wheel and the panel of its body are in the spot colour, the
 *   rest black; its shafts run forward along Mollie's sides. The inn is not
 *   named, so its hanging sign is left blank.
 * - "A fat red-faced man in check breeches and gaiters, who looked like a
 *   publican, was stroking her nose and feeding her with sugar." So a stout
 *   man in shirt-sleeves and waistcoat stands at her head, one open hand on
 *   her nose and a lump of sugar held to her mouth in the other. His
 *   breeches are cut in a check and his gaiters are buttoned down the side.
 *   The red of his face is a flush on his cheek, not his mouth: red at a
 *   mouth reads as blood.
 * - "Her coat was newly clipped and she wore a scarlet ribbon round her
 *   forelock. She appeared to be enjoying herself". So Mollie is the white
 *   mare of the kit, smooth, with a scarlet bow at her forelock, her head
 *   turned to the man.
 *
 * Seeds: 1210 (stall), 1211 (straw), 1212 (sky), 1213 (road), 1214 (inn).
 */

const W = 860
const H = 340
/** The gutter between the two scenes. */
const GUTTER = { x0: 298, x1: 310 }
/** The foot of the stall's back wall, and the road's edge by the inn. */
const STALL_FLOOR = 236
const ROAD = 294

const CLOVER: P = [150, 324]
const MOLLIE: P = [536, 318]
const MAN: P = [690, 324]
/** The publican is drawn a little larger than the kit's men: he is a grown, stout man. */
const MAN_S = 1.15
/** Mollie dips her head to him. */
const MOLLIE_DIP = 18

type Marks = {
  stall: string
  straw: string
  sky: string
  road: string
  innWall: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The stall: dark boards, lit a little from a gap high on the left.
  const stall = gougeField(
    rng(1210),
    { x0: 0, x1: GUTTER.x0, y0: 6, y1: STALL_FLOOR },
    (x, y) => clamp(0.55 - Math.hypot(x - 40, y - 30) / 360),
    { spacing: 6.4 },
  )
  // Straw on the stall floor, heaped towards the walls.
  const rs = rng(1211)
  let straw = ''
  for (let i = 0; i < 260; i++) {
    const x = between(rs, 4, GUTTER.x0 - 4)
    const y = between(rs, STALL_FLOOR + 3, H - 4)
    // the patch Clover has turned over is bare
    if (Math.hypot((x - 262) * 0.8, (y - 314) * 1.4) < 34) continue
    const a = deg(between(rs, -40, 40) + (rs() < 0.5 ? 0 : 180))
    const len = between(rs, 6, 15)
    straw += gouge(x, y, x + Math.cos(a) * len, y + Math.sin(a) * len, between(rs, 0.5, 1.1))
  }
  // A pale sky over Willingdon, lightly scored.
  const rk = rng(1212)
  let sky = ''
  for (let y = 12; y < 200; y += 8) {
    let x = GUTTER.x1 + between(rk, -20, 0)
    while (x < W) {
      const len = between(rk, 30, 100)
      if (rk() < 0.3 - y / 900)
        sky += gouge(x, y, x + len, y + between(rk, -0.5, 0.5), 0.8 - y / 400)
      x += len + between(rk, 20, 60)
    }
  }
  // The road outside the inn, rutted.
  const road = gougeField(
    rng(1213),
    { x0: GUTTER.x1, x1: W, y0: ROAD + 4, y1: H },
    (_x, y) => 0.08 + ((y - ROAD) / (H - ROAD)) * 0.25,
    { spacing: 5.6, len: [20, 70], gap: [8, 22], max: 2.2 },
  )
  // The inn's rendered wall, shaded under the eaves.
  const innWall = gougeField(
    rng(1214),
    { x0: 700, x1: W, y0: 118, y1: ROAD },
    (_x, y) => clamp(0.3 - (y - 118) / 700),
    { spacing: 6, len: [14, 50], gap: [8, 20], max: 2 },
  )
  cached = { stall, straw, sky, road, innWall }
  return cached
}

// ── WHAT CLOVER FOUND ───────────────────────────────────────────────────────

/** Lumps of sugar, as small cubes: x, y, turn. */
const SUGAR: [number, number, number][] = [
  [246, 318, 8],
  [256, 314, -6],
  [262, 320, 14],
  [252, 322, 0],
]
/** A bunch of ribbon: loops and tails, drawn round (0, 0). */
const RIBBON_BUNCH =
  'M0 0C-6 -8 -14 -8 -14 -2C-14 3 -6 3 0 0ZM0 0C6 -8 14 -8 14 -2C14 3 6 3 0 0ZM0 0L-5 10L-2 10.5ZM0 0L6 9L3 10Z'

// ── THE PUBLICAN ────────────────────────────────────────────────────────────

/**
 * The publican, in his own frame: facing right, feet on y = 0, about as tall
 * as the kit's men. Stout, in shirt-sleeves and a waistcoat; the breeches
 * stop at the knee, and the gaiters run from knee to ankle.
 */
const PUB = {
  torso:
    'M-12 -92C-3 -97 9 -96 15 -89C24 -79 26 -64 19 -54C10 -49 -5 -49 -13 -53C-18 -66 -18 -82 -12 -92Z',
  breeches: 'M-15 -56C-6 -51 10 -50 18 -55L16 -32L7 -30L2 -40L-3 -31L-13 -32Z',
  legs: ['M-8 -32L-8 -6', 'M10 -32L11 -6'],
  gaiters: ['M-12.4 -32H-3.6V-7H-12.4Z', 'M6 -32H15V-7H6Z'],
  boots: ['M-14 -8H-2L0 0H-15Z', 'M5 -8H16L20 0H4Z'],
}
/** His near arm, up to her nose; his far arm, holding the sugar to her mouth. */
const PUB_NEAR_ARM = 'M9 -88L26 -94L36 -104'
const PUB_FAR_ARM = 'M2 -88L18 -80L36 -84'
/** An open hand, fingers apart, in the frame of the wrist, pointing along +x. */
const OPEN_HAND: Part[] = [
  { d: 'M-0.8 -4.2C3 -5.4 6.4 -5.6 9.2 -4.8L9.4 4.8C6.4 5.4 3 5.2 -0.8 4Z' },
  { d: 'M8.6 -3.6L16 -6.8', w: 2.1 },
  { d: 'M9.2 -1.2L17.6 -2.6', w: 2.1 },
  { d: 'M9.2 1.4L17 2.4', w: 2.1 },
  { d: 'M8.6 3.8L14.4 6.4', w: 2 },
  { d: 'M2.2 -4.2L5.4 -8.6L8.4 -10.2', w: 2.2 },
]
/** A hand holding a lump out: the fingers curled under it, the thumb over. */
const HOLD_HAND: Part[] = [
  { d: 'M-0.8 -4.2C3.4 -5.6 8 -5.6 10.6 -3.4C12.2 -1.4 12 2.6 10.2 4.2C7.4 5.8 3 5.4 -0.8 4Z' },
]

function Publican({ uid }: { uid: string }) {
  const clip = `${uid}-check`
  const head = `translate(14 -105) scale(0.42)`
  const near = `translate(36 -104) rotate(-22) scale(0.9)`
  const far = `translate(36 -84) rotate(-5)`
  const parts: Part[] = [
    { d: PUB_FAR_ARM, w: 7 },
    ...HOLD_HAND.map((p) => ({ ...p, t: far })),
    { d: PUB.legs[0], w: 8 },
    { d: PUB.gaiters[0] },
    { d: PUB.boots[0] },
    { d: PUB.breeches },
    { d: PUB.torso },
    { d: PUB.legs[1], w: 8 },
    { d: PUB.gaiters[1] },
    { d: PUB.boots[1] },
    { d: HEAD, t: head },
    { d: PUB_NEAR_ARM, w: 7, sep: 1.3 },
    ...OPEN_HAND.map((p) => ({ ...p, t: near })),
  ]
  // "check breeches": a grid cut across them
  let check = ''
  for (let x = -16; x < 20; x += 4.4) check += `M${n(x)} -58L${n(x)} -30`
  for (let y = -54; y < -30; y += 4.4) check += `M-16 ${n(y)}L20 ${n(y)}`
  return (
    <Cut parts={parts} halo={1.8 / MAN_S} transform={place(MAN, MAN_S, -1)}>
      <defs>
        <clipPath id={clip}>
          <path d={PUB.breeches} />
        </clipPath>
      </defs>
      <path d={check} stroke={PAPER} strokeWidth={0.9} clipPath={`url(#${clip})`} />
      {/* the shirt-sleeves, and the buttons of waistcoat and gaiters */}
      <path d="M9 -88L26 -94M2 -88L18 -80" stroke={PAPER} strokeWidth={0.8} fill="none" />
      <g fill={PAPER}>
        {[-86, -79, -72, -65].map((y) => (
          <circle key={y} cx={18 + (y + 86) * 0.14} cy={y} r={1} />
        ))}
        {[-28, -22, -16, -10].map((y) => (
          <circle key={y} cx={13.4} cy={y} r={0.8} />
        ))}
      </g>
      <g transform={head}>
        <path d={EYE_CUT + HAIR_CUTS} fill={PAPER} />
        {/* "red-faced": the flush on his cheek, well clear of the mouth */}
        <ellipse cx={4} cy={6} rx={5.2} ry={3.8} fill={RED} />
      </g>
      {/* the lump of sugar in his far hand */}
      <rect
        x={46}
        y={-91.6}
        width={6.4}
        height={6.4}
        fill={PAPER}
        stroke={INK}
        strokeWidth={0.9}
        transform="rotate(-20 49.2 -88.4)"
      />
    </Cut>
  )
}

// ── THE DOGCART ─────────────────────────────────────────────────────────────

/** "a smart dogcart painted red and black": body, seat, wheel and shafts. */
function Dogcart() {
  const hub: P = [404, 272]
  const R = 44
  let spokes = ''
  for (let a = 0; a < 360; a += 30) {
    const t = deg(a + 8)
    spokes += `M${n(hub[0] + Math.cos(t) * 6)} ${n(hub[1] + Math.sin(t) * 6)}L${n(hub[0] + Math.cos(t) * (R - 5))} ${n(hub[1] + Math.sin(t) * (R - 5))}`
  }
  return (
    <g>
      {/* the far shaft, running forward to her shoulder */}
      <path d="M430 238L596 226" stroke={PAPER} strokeWidth={6.4} strokeLinecap="round" />
      <path d="M430 238L596 226" stroke={INK} strokeWidth={3.6} strokeLinecap="round" />
      {/* the body, black, with its panel in red, and the seat on top */}
      <path
        d="M348 206H442L448 250H352Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.6}
        strokeLinejoin="round"
      />
      <path d="M358 214H436L440 242H360Z" fill={RED} />
      <path d="M362 220H434M364 236H438" stroke={INK} strokeWidth={1} />
      <path
        d="M352 206C352 196 358 192 368 192H430C438 192 440 198 440 206Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.4}
      />
      {/* the wheel, its rim black and its spokes and hub red */}
      <circle cx={hub[0]} cy={hub[1]} r={R} fill="none" stroke={PAPER} strokeWidth={9} />
      <circle cx={hub[0]} cy={hub[1]} r={R} fill="none" stroke={INK} strokeWidth={6} />
      <path d={spokes} stroke={RED} strokeWidth={2.6} strokeLinecap="round" />
      <circle cx={hub[0]} cy={hub[1]} r={7} fill={RED} stroke={INK} strokeWidth={1.6} />
    </g>
  )
}

/** The near shaft, over her side from the cart to her shoulder. */
function NearShaft() {
  return (
    <g>
      <path d="M446 240L598 234" stroke={PAPER} strokeWidth={7} strokeLinecap="round" />
      <path d="M446 240L598 234" stroke={INK} strokeWidth={4} strokeLinecap="round" />
    </g>
  )
}

// ── THE INN ─────────────────────────────────────────────────────────────────

function Inn({ wall }: { wall: string }) {
  return (
    <g>
      {/* the gable end and front, in paper, with its roof in ink */}
      <path d="M700 118H866V300H700Z" fill={PAPER} />
      <path d={wall} fill={INK} />
      <path d="M690 122L780 70L870 122Z" fill={INK} />
      <path d="M688 122H868" stroke={PAPER} strokeWidth={2} />
      <path d="M700 122V296" stroke={INK} strokeWidth={2.4} />
      {/* chimney */}
      <path d="M806 86V54H822V96Z" fill={INK} />
      {/* windows, upper and lower, and the door */}
      {[
        [724, 140],
        [796, 140],
      ].map(([x, y]) => (
        <g key={x}>
          <rect x={x} y={y} width={40} height={34} fill={INK} />
          <path
            d={`M${x + 20} ${y}V${y + 34}M${x} ${y + 17}H${x + 40}`}
            stroke={PAPER}
            strokeWidth={1.6}
          />
        </g>
      ))}
      <rect x={796} y={214} width={46} height={40} fill={INK} />
      <path d="M819 214V254M796 234H842" stroke={PAPER} strokeWidth={1.6} />
      <path d="M730 296V222Q730 206 746 206Q762 206 762 222V296Z" fill={INK} />
      <path d="M740 262L744 262" stroke={PAPER} strokeWidth={1.8} strokeLinecap="round" />
      {/* the hanging sign, on its bracket: blank, as the text names no inn */}
      <path d="M700 132H672M680 132V140M692 132V140" stroke={INK} strokeWidth={2.2} />
      <rect x={666} y={140} width={30} height={38} fill={PAPER} stroke={INK} strokeWidth={2.4} />
      <rect x={670} y={144} width={22} height={30} fill="none" stroke={INK} strokeWidth={0.9} />
    </g>
  )
}

function MollieLeaves({ uid }: ArtProps) {
  const m = marks()
  const left = `${uid}-left`
  const right = `${uid}-right`
  const mollieHead = `${place(MOLLIE, 1, 1)} rotate(${MOLLIE_DIP} 40 -104) ${HEAD_FRAME}`
  return (
    <>
      <defs>
        <clipPath id={left}>
          <rect x={0} y={0} width={GUTTER.x0} height={H} />
        </clipPath>
        <clipPath id={right}>
          <rect x={GUTTER.x1} y={0} width={W - GUTTER.x1} height={H} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [430, 220], push: 1.03 })}>
        {/* ── LEFT: Mollie's stall ── */}
        <g clipPath={`url(#${left})`}>
          <rect x={0} y={0} width={GUTTER.x0} height={STALL_FLOOR} fill={INK} />
          <path d={m.stall} fill={PAPER} />
          {[60, 124, 188, 252].map((x) => (
            <path key={x} d={`M${x} 0V${STALL_FLOOR}`} stroke={INK} strokeWidth={3} />
          ))}
          {/* the manger on the back wall */}
          <path
            d="M14 170H118L110 206H22Z"
            fill={INK}
            stroke={PAPER}
            strokeWidth={1.8}
            strokeLinejoin="round"
          />
          <path d={gouge(24, 176, 108, 176, 1)} fill={PAPER} />
          <rect x={0} y={STALL_FLOOR} width={GUTTER.x0} height={H - STALL_FLOOR} fill={PAPER} />
          <rect x={0} y={STALL_FLOOR} width={GUTTER.x0} height={3} fill={INK} />
          <path d={m.straw} fill={INK} />

          <Horse at={CLOVER} s={1.12} who="clover" headDown={52} uid={uid} />

          {/* what was hidden under the straw, a little larger than life so a
              phone can show it */}
          <g transform="translate(262 322) scale(1.35) translate(-262 -322)">
            <g transform="translate(274 314) rotate(-10)">
              <path d={RIBBON_BUNCH} fill={RED} />
            </g>
            <g transform="translate(284 326) rotate(14)">
              <path d={RIBBON_BUNCH} fill={PAPER} stroke={INK} strokeWidth={1.2} />
            </g>
            <g transform="translate(236 328) rotate(-4)">
              <path d={RIBBON_BUNCH} fill={INK} stroke={PAPER} strokeWidth={1} />
              <path d="M-11 -4L-7 1M-7 -6L-3 0M5 -6L9 0M9 -4L12 1" stroke={PAPER} strokeWidth={1} />
            </g>
            {SUGAR.map(([x, y, a]) => (
              <rect
                key={x}
                x={x - 3.4}
                y={y - 3.4}
                width={6.8}
                height={6.8}
                fill={PAPER}
                stroke={INK}
                strokeWidth={1.1}
                transform={`rotate(${a} ${x} ${y})`}
              />
            ))}
          </g>
        </g>

        {/* ── RIGHT: outside a public-house beyond Willingdon ── */}
        <g clipPath={`url(#${right})`}>
          <rect x={GUTTER.x1} y={0} width={W - GUTTER.x1} height={H} fill={PAPER} />
          <path d={m.sky} fill={INK} />
          {/* the far edge of the town: roofs and a church tower */}
          <path
            d="M310 246V222L330 210L350 222V214H372V206L386 196L400 206V230H420V218L440 206L460 218V246Z"
            fill={INK}
          />
          <path d="M600 246V226L620 214L640 226V246Z" fill={INK} />
          <rect x={GUTTER.x1} y={246} width={W - GUTTER.x1} height={ROAD - 246} fill={PAPER} />
          <path d={`M${GUTTER.x1} ${ROAD}H${W}`} stroke={INK} strokeWidth={2} />
          <path d={m.road} fill={INK} />
          <Inn wall={m.innWall} />
          {/* the pigeons who saw her, on the ridge of the inn */}
          <Pigeon at={[748, 94]} s={1.3} face={-1} />
          <Pigeon at={[768, 82]} s={1.3} face={-1} />
          <Pigeon at={[800, 81]} s={1.3} face={-1} />

          <Dogcart />
          <Horse at={MOLLIE} s={1} who="mollie" headDown={MOLLIE_DIP} />
          <NearShaft />
          {/* "a scarlet ribbon round her forelock", in the frame of her head */}
          <g transform={mollieHead}>
            <path
              d="M4 -9L-3 -15L-4 -6ZM4 -9L11 -15L12 -6Z"
              fill={RED}
              stroke={INK}
              strokeWidth={0.7}
            />
          </g>
          <Publican uid={uid} />
        </g>

        {/* the gutter between the two scenes */}
        <rect x={GUTTER.x0} y={0} width={GUTTER.x1 - GUTTER.x0} height={H} fill={PAPER} />
        <path d={`M${GUTTER.x0} 0V${H}M${GUTTER.x1} 0V${H}`} stroke={INK} strokeWidth={2.4} />
      </g>
    </>
  )
}

export const mollieLeaves: LinocutArt = { width: W, height: H, Draw: MollieLeaves }
