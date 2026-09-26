import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  ribbon,
  rng,
  wisps,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  CreatureHead,
  Figure,
  GRIP_HAND,
  HEAD_CREATURE,
  OPEN_HAND,
  handAt,
  headAt,
  man,
  type P,
  type Part,
} from './people'

/**
 * Chapter 16: "War on humankind", the tenth moment in the guide's timeline.
 * Every detail is from the held edition (src/data/full-texts/frankenstein.ts).
 *
 * THE MOMENT DRAWN. The guide's summary runs from the burning of the cottage
 * to William's death and the portrait placed on Justine. William is a child,
 * and his death is never drawn, nor the Creature anywhere near him; this panel
 * takes the first act of the Creature's war instead, the burning of the empty
 * cottage, which the text tells in full and which harms no one: "I never saw
 * any of the family of De Lacey more."
 *
 * - "from that moment I declared everlasting war against the species": the
 *   quotation on the panel, from the night before the fire.
 * - "As night advanced, I placed a variety of combustibles around the cottage;
 *   and, after having destroyed every vestige of cultivation in the garden, I
 *   waited ... until the moon had sunk". So the garden in the foreground is
 *   torn up, its plants uprooted and thrown down.
 * - "a fierce wind arose from the woods, and quickly dispersed the clouds";
 *   "I lighted the dry branch of a tree, and danced with fury around the
 *   devoted cottage, my eyes still fixed on the western horizon, the edge of
 *   which the moon nearly touched. A part of its orb was at length hid, and I
 *   waved my brand". So it is night, the torn clouds streaming on the wind,
 *   and the moon half sunk behind the woods on the left; the Creature, drawn
 *   from ./people.tsx as Chapter 5 describes him, brandishes the burning
 *   branch, his cloak and his long black hair blown out on the wind.
 * - "with a loud scream, I fired the straw, and heath, and bushes, which I
 *   had collected. The wind fanned the fire, and the cottage was quickly
 *   enveloped by the flames, which clung to it, and licked it with their
 *   forked and destroying tongues." So the cottage, the hovel against its end
 *   and the heaped brush round it burn in forked tongues of the spot colour,
 *   blown the way of the wind, and the firelight lies on the pool beside it
 *   ("a clear pool of water", Chapter 11) in paper, not red: red strokes in
 *   water could be read as something else. Its windows and open door, with
 *   the fire inside, are drawn, but the flames at its foot rise over them and
 *   hide the door, so the alt text names only the windows.
 *
 * Seeds: 1001 (the sky), 1002 (the clouds), 1003 (the ground), 1004 (the
 * flames), 1005 (the smoke), 1006 (the garden), 1007 (the cottage walls).
 */

const W = 860
const H = 340
/** The line of the woods on the horizon. */
const HORIZON = 226
/** The moon, part of its orb hid behind the woods in the west. */
const MOON: Pt = [74, 222]
/** The heart of the fire, which lights the ground. */
const FIRE: Pt = [600, 210]

/** The cottage: walls, thatched roof, chimney; the hovel against its left end. */
const WALLS = 'M452 260V160H742V260Z'
const ROOF = 'M436 164L520 92H676L758 164Z'
const CHIMNEY = 'M684 112V70H702V120Z'
const HOVEL = 'M404 262V204L452 178V262Z'
const DOOR_OPEN = 'M560 260V196H592V260Z'
const WINDOWS = 'M480 190H516V222H480ZM640 190H676V222H640Z'
/** The pool beside it, and the brush heaped round its walls. */
const POOL =
  'M612 312C640 298 720 294 800 300C836 304 850 312 846 320C820 330 700 332 630 326C606 322 600 318 612 312Z'

type Marks = {
  sky: string
  clouds: string
  stars: string
  woods: string
  ground: string
  flames: string
  flamesBack: string
  smoke: string
  garden: string
  thatch: string
  wallCuts: string
  ripples: string
}

/**
 * One forked tongue of flame, rising from (x, b) to a height h and leaning
 * with the wind: a closed shape, broad at the root and drawn to a point, with
 * a second, smaller tip split off one side when `fork` is set.
 */
function tongue(x: number, b: number, h: number, w: number, lean: number, fork: boolean): string {
  const f = (v: number) => Math.round(v * 10) / 10
  const tip: Pt = [x + lean, b - h]
  let d =
    `M${f(x - w / 2)} ${f(b)}` +
    `C${f(x - w / 2)} ${f(b - h * 0.45)} ${f(x + lean * 0.35 - w * 0.35)} ${f(b - h * 0.62)} ${f(tip[0])} ${f(tip[1])}` +
    `C${f(x + lean * 0.5 + w * 0.15)} ${f(b - h * 0.62)} ${f(x + w * 0.62)} ${f(b - h * 0.32)} ${f(x + w / 2)} ${f(b)}Z`
  if (fork) {
    const fx = x + lean * 0.45 + w * 0.2
    const fy = b - h * 0.5
    d +=
      `M${f(fx - w * 0.2)} ${f(fy + h * 0.1)}` +
      `C${f(fx)} ${f(fy - h * 0.12)} ${f(fx + lean * 0.3)} ${f(fy - h * 0.2)} ${f(fx + lean * 0.5 + w * 0.3)} ${f(fy - h * 0.34)}` +
      `C${f(fx + lean * 0.2 + w * 0.3)} ${f(fy - h * 0.08)} ${f(fx + w * 0.4)} ${f(fy + h * 0.04)} ${f(fx + w * 0.3)} ${f(fy + h * 0.14)}Z`
  }
  return d
}

/** A run of tongues rising from a wavy bed of fire between x0 and x1. */
function fireRow(
  r: ReturnType<typeof rng>,
  x0: number,
  x1: number,
  base: (x: number) => number,
  hRange: [number, number],
  wRange: [number, number],
  bed = true,
) {
  let d = ''
  if (bed) {
    d = `M${x0} ${base(x0) + 12}`
    for (let x = x0; x <= x1; x += 10) d += `L${x} ${Math.round(base(x) - between(r, 4, 14))}`
    d += `L${x1} ${base(x1) + 12}Z`
  }
  for (let x = x0 + 6; x < x1 - 6; x += between(r, 16, 26)) {
    const h = between(r, hRange[0], hRange[1])
    d += tongue(
      x,
      base(x) - 4,
      h,
      between(r, wRange[0], wRange[1]),
      h * between(r, 0.28, 0.5),
      r() < 0.5,
    )
  }
  return d
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // A clear night, the fire lighting the sky over the roof.
  const sky = gougeField(
    rng(1001),
    { x0: 0, x1: W, y0: 4, y1: HORIZON },
    (x, y) => 0.06 + 0.5 * clamp(1 - Math.hypot(x - FIRE[0], (y - FIRE[1]) * 1.3) / 330),
    { spacing: 7, len: [30, 90], gap: [6, 20], max: 3 },
  )
  // "a fierce wind ... quickly dispersed the clouds": torn clouds streaming.
  const clouds = wisps(rng(1002), 6, { x0: 0, x1: 520, y0: 26, y1: 120 }, [2, 5])
  const s = rng(1008)
  let stars = ''
  for (let i = 0; i < 22; i++) {
    const x = between(s, 10, 420)
    const y = between(s, 10, 190)
    stars += gouge(x - 1.8, y, x + 1.8, y, 0.8) + gouge(x, y - 1.8, x, y + 1.8, 0.8)
  }
  // The woods on the horizon, over the sinking moon.
  let woods = `M0 ${HORIZON + 30}V${HORIZON}`
  const t = rng(1009)
  for (let x = 0; x <= W; x += 8) woods += `L${x} ${HORIZON - between(t, 2, 14)}`
  woods += `L${W} ${HORIZON + 30}Z`
  const ground = gougeField(
    rng(1003),
    { x0: 0, x1: W, y0: HORIZON + 6, y1: H },
    (x, y) => 0.08 + 0.8 * clamp(1 - Math.hypot((x - FIRE[0]) * 0.8, (y - 262) * 1.6) / 300),
    { spacing: 6.4, len: [20, 70], gap: [4, 16], max: 3.4 },
  )
  // The fire: tongues along the foot of the walls and the hovel, and over the roof.
  const f = rng(1004)
  // The brush heaped round the walls, alight, its tongues climbing the walls.
  const flames = fireRow(f, 396, 764, () => 270, [44, 104], [18, 30])
  // The thatch alight along the roof, its tongues streaming off on the wind.
  const flamesBack = fireRow(
    f,
    452,
    740,
    (x) => (x < 520 ? 164 - (x - 436) * 0.86 : x > 676 ? 92 + (x - 676) * 0.87 : 96),
    [36, 84],
    [18, 28],
    false,
  )
  const smoke = wisps(rng(1005), 7, { x0: 520, x1: W, y0: 10, y1: 90 }, [3, 7])
  // "destroyed every vestige of cultivation in the garden": plants torn up
  // and flung down, their roots in the air, and the beds broken.
  const g = rng(1006)
  let garden = ''
  for (let i = 0; i < 14; i++) {
    const x = between(g, 350, 600)
    const y = between(g, 292, 330)
    const a = between(g, -0.5, 0.5) + (g() < 0.5 ? Math.PI : 0)
    const len = between(g, 18, 30)
    const ex = x + Math.cos(a) * len
    const ey = y + Math.sin(a) * len * 0.3
    // the stalk, its leaves, and the roots torn out at its end
    garden += gouge(x, y, ex, ey, 1.6)
    for (let k = 1; k < 3; k++) {
      const lx = x + ((ex - x) * k) / 3
      const ly = y + ((ey - y) * k) / 3
      garden += gouge(lx, ly, lx + between(g, -4, 4), ly - between(g, 6, 10), 2.2)
    }
    for (let k = 0; k < 3; k++)
      garden += gouge(ex, ey, ex + between(g, -7, 7), ey + between(g, 2, 8), 0.7)
  }
  // Thatch cut in short strokes down the roof, and the wall's timbers.
  const th = rng(1007)
  let thatch = ''
  for (let y = 100; y < 162; y += 7) {
    const half = 78 + ((y - 92) / 72) * 82
    for (let x = 598 - half; x < 598 + half; x += between(th, 8, 14))
      thatch += gouge(x, y, x + between(th, -2, 2), y + between(th, 5, 8), 0.8)
  }
  const wallCuts =
    gouge(452, 176, 742, 176, 1) +
    gouge(452, 240, 742, 240, 1) +
    gouge(530, 162, 530, 258, 1) +
    gouge(620, 162, 620, 258, 1) +
    gouge(700, 162, 700, 258, 1)
  let ripples = ''
  for (let y = 304; y < 328; y += 5)
    ripples += gouge(624 + (y - 304) * 0.5, y, 832 - (y - 304) * 0.8, y, 0.7)
  cached = {
    sky,
    clouds,
    stars,
    woods,
    ground,
    flames,
    flamesBack,
    smoke,
    garden,
    thatch,
    wallCuts,
    ripples,
  }
  return cached
}

// ── The Creature, the burning branch raised ─────────────────────────────────
const CR_HEAD = { d: HEAD_CREATURE, at: [262, 88] as P, rot: -4, scale: 1.5 }
const CR_T = headAt(1, CR_HEAD.at, CR_HEAD.rot, CR_HEAD.scale)
const CR_NECK: P = [252, 132]
const CR_HIP: P = [246, 226]
const BRAND_ARM: P[] = [
  [262, 142],
  [294, 132],
  [308, 106],
]
/** His cloak, blown out behind him on the wind. */
const CR_CLOAK =
  'M236 126C224 130 214 146 208 170C200 204 188 240 172 276C186 282 204 280 220 272C230 290 244 296 262 290C266 266 266 238 264 214C270 186 272 158 268 136C262 128 248 124 236 126Z'
const CREATURE: Part[] = man({
  facing: 1,
  neck: CR_NECK,
  hip: CR_HIP,
  head: CR_HEAD,
  robe: CR_CLOAK,
  body: { width: 44 },
  arm: 12,
  leg: 13.5,
  near: {
    arm: BRAND_ARM,
    leg: [
      [250, 226],
      [284, 272],
      [296, 326],
    ],
    hand: { parts: GRIP_HAND, rot: -10, scale: 1.45 },
  },
  far: {
    arm: [
      [244, 142],
      [222, 178],
      [200, 196],
    ],
    leg: [
      [242, 228],
      [224, 276],
      [204, 322],
    ],
    hand: { parts: OPEN_HAND, rot: 16, scale: 1.3 },
  },
})
/** "the dry branch of a tree", held up, alight at its end. */
const BRAND = 'M302 126L334 56'
const BRAND_TWIGS = 'M326 74L338 68M318 92L308 86'
/** His hair, streaming out behind him on the wind: ink ribbons from the nape. */
const HAIR_WIND = [
  ribbon(
    [
      [238, 100],
      [222, 106],
      [204, 110],
      [188, 118],
    ],
    9,
    0.6,
  ),
  ribbon(
    [
      [240, 114],
      [222, 124],
      [206, 132],
      [194, 144],
    ],
    7,
    0.6,
  ),
]

function WarOnHumankind({ uid }: ArtProps) {
  const m = marks()
  const moonClip = `${uid}-moon`
  const wallClip = `${uid}-walls`
  return (
    <>
      <defs>
        <clipPath id={moonClip}>
          <rect x={0} y={0} width={W} height={HORIZON} />
        </clipPath>
        <clipPath id={wallClip}>
          <path d={WALLS} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [420, 200], push: 1.03 })}>
        {/* the night: stars, the torn clouds, the sinking moon */}
        <path d={m.sky} fill={PAPER} />
        <path d={m.stars} fill={PAPER} />
        <g className="lc-drift">
          <path d={m.clouds} fill={PAPER} />
        </g>
        <g clipPath={`url(#${moonClip})`}>
          <circle cx={MOON[0]} cy={MOON[1]} r={26} fill={PAPER} />
        </g>
        <path d={m.woods} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <g className="lc-drift-r">
          <path d={m.smoke} fill={PAPER} />
        </g>

        {/* the ground, lit by the fire */}
        <rect x={0} y={HORIZON + 6} width={W} height={H - HORIZON - 6} fill={INK} />
        <path d={m.ground} fill={PAPER} />

        {/* the flames over the roof, behind it */}
        <path d={m.flamesBack} fill={RED} />

        {/* the cottage and the hovel against its end */}
        <path d={CHIMNEY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={ROOF} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path d={m.thatch} fill={PAPER} />
        <path d={WALLS} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} />
        <g clipPath={`url(#${wallClip})`}>
          <path d={m.wallCuts} fill={INK} />
        </g>
        <path d={HOVEL} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        {/* its windows and its open door, the fire inside */}
        <path d={WINDOWS} fill={INK} />
        <path
          d="M498 190V222M480 206H516M658 190V222M640 206H676"
          stroke={PAPER}
          strokeWidth={1.4}
        />
        <path
          d="M486 216L494 200L500 212L508 196L512 216ZM646 216L652 202L660 212L666 198L672 216Z"
          fill={RED}
        />
        <path d={DOOR_OPEN} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path d="M566 258L572 230L578 246L584 224L588 258Z" fill={RED} />

        {/* the flames at its foot, blown on the wind */}
        <path d={m.flames} fill={RED} />

        {/* the pool beside it, the fire in it */}
        <path d={POOL} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path d={m.ripples} fill={INK} />

        {/* the garden, torn up */}
        <path d={m.garden} fill={PAPER} />

        {/* the Creature, brandishing the burning branch */}
        <path d={HAIR_WIND.join('')} fill={INK} stroke={PAPER} strokeWidth={1.6} />
        <path d={BRAND} stroke={PAPER} strokeWidth={9} strokeLinecap="round" />
        <path d={BRAND} stroke={INK} strokeWidth={6} strokeLinecap="round" />
        <path d={BRAND_TWIGS} stroke={INK} strokeWidth={2.4} strokeLinecap="round" />
        <path
          className="lc-flicker"
          d="M326 58C320 50 324 40 332 34C336 30 338 24 340 16C346 24 350 32 350 40C354 36 356 32 358 28C364 36 362 48 354 56C346 62 332 64 326 58Z"
          fill={RED}
        />
        <Figure parts={CREATURE}>
          <path
            d={
              ribbon(
                [
                  [226, 140],
                  [214, 190],
                  [196, 262],
                ],
                2.2,
                0.6,
              ) +
              ribbon(
                [
                  [250, 144],
                  [244, 200],
                  [240, 280],
                ],
                2,
                0.6,
              )
            }
            fill={PAPER}
          />
        </Figure>
        <Figure
          parts={GRIP_HAND.map((q) => ({
            ...q,
            t: handAt(BRAND_ARM, 1, { parts: GRIP_HAND, rot: -10, scale: 1.45 }),
          }))}
        />
        <CreatureHead t={CR_T} />
      </g>
    </>
  )
}

export const warOnHumankind: LinocutArt = { width: W, height: H, Draw: WarOnHumankind }
