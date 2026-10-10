import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  gougeField,
  n,
  ribbon,
  rng,
  wave,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, type Pose } from './people'

/**
 * Chapter 19: "Leaving the forge", the seventh moment in the guide's timeline.
 * Every detail is from the held edition (src/data/full-texts/
 * great-expectations.ts):
 *
 * - "I was to leave our village at five in the morning, carrying my little
 *   hand-portmanteau, and I had told Joe that I wished to walk away all
 *   alone." So it is first light, Pip is alone on the road, and his small
 *   portmanteau stands at his feet.
 * - "the village was very peaceful and quiet, and the light mists were
 *   solemnly rising, as if to show me the world". So the village lies quiet
 *   behind him on the left, its church steeple ("I saw the steeple under my
 *   feet", Chapter 1) and its roofs dark against the dawn, and long bands of
 *   mist lift off the flat land where the road runs away to the right.
 * - "in a moment with a strong heave and sob I broke into tears. It was by
 *   the finger-post at the end of the village, and I laid my hand upon it,
 *   and said, 'Good bye, O my dear, dear friend!'" So he stands at the
 *   finger-post, his hand laid on it, turned back towards the village, his
 *   head bowed, with tears cut on his cheek.
 * - He wears the new clothes ordered at the tailor's, the hatter's and the
 *   bootmaker's, and the hat he stopped "to wave" at Joe and Biddy a few
 *   minutes before.
 * - "Fantastic failures of journeys occupied me until the day dawned and the
 *   birds were singing." The day has dawned: the spot colour is the low sun,
 *   half veiled in the rising mist where the road goes, and nothing else.
 *
 * Joe and Biddy are not drawn: he left them at the house, and walks away
 * alone. The finger-post's arms carry no lettering, because the text gives
 * none. Seeds: 1901 (the sky), 1902 (the mist), 1903 (the land), 1904 (the
 * road), 1905 (the grass), 1906 (the sun's halo).
 */

const W = 860
const H = 340
/** The horizon over the flat land. */
const HZ = 214
/** The low sun, where the road goes. */
const SUN: [number, number, number] = [712, 200, 25]
/** Where the road meets the horizon, under the sun. */
const VP: [number, number] = [706, HZ]
/** The finger-post: where it stands, its foot, the top of the post. */
const POST = { x: 404, foot: 286, top: 30 }

type Marks = {
  sky: string
  halo: string
  land: string
  mist: string
  roadShade: string
  ruts: string
  grass: string
  roofs: string
  smoke: string
}

/** The road's far edge and near edge, from the village to the sun. */
const ROAD_FAR = (t: number): [number, number] => {
  // t from 0 (left edge of the picture) to 1 (the vanishing point)
  const x = VP[0] * t
  return [x, 266 - 52 * t ** 1.6]
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The dawn sky is the paper, hatched in ink: heavy at the top of the block,
  // thinning to nothing along the horizon and round the sun.
  const dark = (x: number, y: number) => {
    const up = 0.14 + 0.86 * clamp((HZ - 50 - y) / (HZ - 50)) ** 1.1
    const sun = clamp(1 - Math.hypot(x - SUN[0], (y - SUN[1]) * 1.3) / 230) ** 0.8
    return clamp(up * (1 - sun))
  }
  const r = rng(1901)
  let sky = ''
  for (let y = 7; y < HZ - 4; y += 5.2) {
    let x = between(r, -40, 0)
    while (x < W) {
      const len = between(r, 26, 110)
      const D = dark(x + len / 2, y)
      if (D > 0.05 && r() < 0.4 + D * 0.6)
        sky += gouge(
          x,
          y + between(r, -0.6, 0.6),
          x + len,
          y + between(r, -0.6, 0.6),
          0.35 + D * 2.4,
          between(r, -0.6, 0.6),
        )
      x += len + between(r, 4, 18) * (1.2 - D)
    }
  }
  const halo = arcDashes(
    rng(1906),
    SUN[0],
    SUN[1],
    SUN[2] + 11,
    deg(182),
    deg(358),
    [6, 12],
    [6, 10],
  )
  // The flat land under the horizon, dark, with long cuts of light lying on
  // the wet ground, brightest towards the sun.
  const lit = (x: number, y: number) =>
    Math.max(clamp(1 - Math.hypot((x - SUN[0]) * 0.55, (y - HZ) * 2.6) / 300) ** 1.3, 0.1)
  const land = gougeField(rng(1903), { x0: 0, x1: W, y0: HZ + 3, y1: H }, lit, {
    spacing: 4.6,
    len: [24, 96],
    gap: [6, 24],
    max: 2.4,
  })
  // "the light mists were solemnly rising": long tapered bands of paper
  // lying over the land and the far road, the higher ones thinner.
  const m = rng(1902)
  let mist = ''
  const bands: [number, number, number, number][] = [
    // x0, x1, y, width: low and broad over the land, thinner as they rise
    [470, 900, HZ + 3, 10],
    [330, 640, HZ + 8, 7],
    [600, 900, HZ + 16, 9],
    [520, 820, HZ + 27, 7],
    [660, 900, HZ + 40, 8],
    [560, 900, HZ - 7, 5],
    [640, 880, HZ - 17, 3.4],
  ]
  for (const [x0, x1, y, w] of bands)
    mist += ribbon(
      wave(x0, x1, y, between(m, 1.4, 2.6), between(m, 70, 120), between(m, 0, 6), 30),
      w,
      0.8,
    )
  // Shade on the road, heavier in the foreground and at its edges, so the
  // pale way runs out of the dark towards the sun.
  const rs = rng(1908)
  let roadShade = ''
  for (let k = 0; k < 15; k++) {
    const y = 344 - k * 5.4
    const depth = 1 - k / 15
    let x = between(rs, -20, 0)
    while (x < 640) {
      const len = between(rs, 18, 60)
      if (rs() < 0.25 + depth * 0.6)
        roadShade += gouge(x, y, x + len, y - len * 0.04, 0.4 + depth * 1.5)
      x += len + between(rs, 8, 30)
    }
  }
  // Ruts in the road, running away to the sun.
  const rr = rng(1904)
  let ruts = ''
  for (const s of [0.28, 0.5, 0.72]) {
    let t = 0
    while (t < 0.96) {
      const t1 = Math.min(0.98, t + between(rr, 0.05, 0.12))
      const at = (u: number): [number, number] => {
        const [fx, fy] = ROAD_FAR(u)
        const near = 340 - (340 - VP[1]) * u ** 1.15
        return [fx + (1 - u) * 60 * s, fy + (near - fy) * s]
      }
      const [ax, ay] = at(t)
      const [bx, by] = at(t1)
      ruts += wedge(ax, ay, bx, by, 2.6 * (1 - t) + 0.3, 2.6 * (1 - t1) + 0.3)
      t = t1 + between(rr, 0.015, 0.04)
    }
  }
  // Grass on the verge beyond the road, cut as tufts of paper.
  const g = rng(1905)
  let grass = ''
  for (let k = 0; k < 60; k++) {
    const x = between(g, 600, W - 10)
    const y = between(g, 262, H - 6)
    const h = between(g, 8, 20)
    grass += gouge(x, y, x + between(g, -6, 3), y - h, 1)
  }
  for (let k = 0; k < 36; k++) {
    const x = between(g, 10, 380)
    const y = between(g, 236, 258)
    const h = between(g, 4, 9)
    grass += gouge(x, y, x + between(g, -3, 3), y - h, 0.7)
  }
  // The courses of the village roofs, cut faint in the dark.
  let roofs = ''
  for (let y = 178; y < 238; y += 5)
    roofs += gouge(6, y, 108, y, 0.45) + gouge(258, y + 2, 330, y + 2, 0.45)
  // Smoke rising straight from one chimney in the still morning.
  const smoke = ribbon(
    [
      [36, 156],
      [38, 138],
      [34, 120],
      [39, 100],
      [36, 80],
    ],
    5,
    0.8,
  )
  cached = { sky, halo, land, mist, roadShade, ruts, grass, roofs, smoke }
  return cached
}

/** The road from the village street past the finger-post, narrowing to the sun. */
const ROAD = (() => {
  let d = 'M0 340V266'
  for (let i = 1; i <= 20; i++) {
    const [x, y] = ROAD_FAR(i / 20)
    d += `L${n(x)} ${n(y)}`
  }
  d += `L${VP[0] + 12} ${VP[1]}C${VP[0] - 30} 248 ${VP[0] - 110} 300 ${VP[0] - 160} 340Z`
  return d
})()

/** The village against the dawn: cottages, the church and its steeple, trees. */
const VILLAGE =
  // cottages on the left
  'M0 240V182L30 164V156H40V158L52 150L80 172V166L102 154L126 176V240Z' +
  // the church: the tower and steeple, the nave
  'M126 240V132H132V122L146 42L160 122V132H168V164L212 140L262 164V240Z' +
  // the end cottage, by the road
  'M256 240V192L284 172V162H294V168L330 192V240Z'
/** Round-headed trees among the roofs. */
const TREES =
  'M92 176C82 172 82 158 92 154C94 144 106 142 112 150C122 148 128 158 122 166C128 174 120 182 110 180Z' +
  'M222 152C212 148 212 134 222 130C226 120 238 120 242 128C252 128 256 138 250 146C256 154 246 162 236 160Z'
/** Windows and the church's belfry and door, cut in paper. */
const VILLAGE_CUTS =
  'M137 142h6v12h-6ZM149 142h6v12h-6Z' +
  'M188 192q7 -9 14 0v20h-14Z' +
  'M16 196h9v9h-9ZM58 190h9v9h-9ZM286 200h9v9h-9Z'

/** The finger-post: the post and its cap, an arm on to London, an arm back to the village. */
const FINGER_POST =
  `M${POST.x - 5} ${POST.foot}V${POST.top + 7}L${POST.x} ${POST.top - 4}L${POST.x + 5} ${POST.top + 7}V${POST.foot}Z` +
  `M${POST.x + 5} 40H${POST.x + 70}L${POST.x + 83} 49L${POST.x + 70} 58H${POST.x + 5}Z` +
  `M${POST.x - 5} 64H${POST.x - 66}L${POST.x - 79} 73L${POST.x - 66} 82H${POST.x - 5}Z`

/**
 * Pip, the apprentice in his new clothes (`age: 'youth'`, `dress: 'coat'`),
 * facing left, back towards the village: his near hand laid on the
 * finger-post, his head bowed, a tear on his cheek. Drawn from the figure kit
 * (./people.tsx).
 */
const PIP_AT: [number, number] = [452, 304]
const PIP_SCALE = 1.3
const PIP: Pose = {
  look: 'pip',
  age: 'youth',
  dress: 'coat',
  hat: 'top',
  eye: 'down',
  tear: true,
  head: { at: [8, -146], rot: 24 },
  body: { neck: [4, -125], hip: [0, -65] },
  near: {
    pts: [
      [6, -118],
      [20, -98],
      [34, -102],
    ],
    hand: 'mitt',
    deg: -8,
  },
  legs: {
    far: [
      [-3, -65],
      [-7, -33],
      [-10, -3],
    ],
    near: [
      [3, -65],
      [6, -33],
      [7, -3],
    ],
  },
}

/** "my little hand-portmanteau", set down at his heel: the case, its handle, its strap and buckle. */
function Portmanteau() {
  return (
    <g>
      <path
        d="M466 300V284Q466 279 471 279H499Q504 279 504 284V300Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path d="M478 279Q485 270 492 279" fill="none" stroke={PAPER} strokeWidth={4.4} />
      <path d="M478 279Q485 270 492 279" fill="none" stroke={INK} strokeWidth={2.2} />
      <path d="M466 289H504" stroke={PAPER} strokeWidth={1.2} />
      <rect x={482} y={286.5} width={6} height={5} fill={INK} stroke={PAPER} strokeWidth={1} />
    </g>
  )
}

function LeavingTheForge({ uid }: ArtProps) {
  const m = marks()
  const id = { sky: `${uid}-sky`, road: `${uid}-road` }
  return (
    <>
      <defs>
        <clipPath id={id.sky}>
          <rect x={0} y={0} width={W} height={HZ + 0.5} />
        </clipPath>
        <clipPath id={id.road}>
          <path d={ROAD} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [420, 200], push: 1.03 })}>
        {/* the dawn sky, and the sun low in it */}
        <rect x={0} y={0} width={W} height={HZ} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        <g clipPath={`url(#${id.sky})`}>
          <circle cx={SUN[0]} cy={SUN[1]} r={SUN[2]} fill={RED} />
          <path d={m.halo} fill="none" stroke={INK} strokeWidth={LINE.fine} />
        </g>

        {/* the flat land, lit along the wet ground towards the sun */}
        <rect x={0} y={HZ} width={W} height={H - HZ} fill={INK} />
        <path d={m.land} fill={PAPER} />
        <path d={m.grass} fill={PAPER} />
        <path d={ROAD} fill={PAPER} />
        <g clipPath={`url(#${id.road})`}>
          <path d={m.roadShade + m.ruts} fill={INK} />
        </g>
        {/* the mist rising off the land, across the foot of the sun */}
        <g className="lc-drift-r" style={timing({ delay: 0.2 })}>
          <path d={m.mist} fill={PAPER} />
        </g>

        {/* the village, quiet behind him */}
        <path
          d={VILLAGE + TREES}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={m.roofs} fill={PAPER} />
        <path d={VILLAGE_CUTS} fill={PAPER} />
        <g className="lc-rise" style={timing({ delay: 0.6 })}>
          <path d={m.smoke} fill={INK} />
        </g>

        {/* the finger-post at the end of the village */}
        <path d={FINGER_POST} fill={PAPER} stroke={PAPER} strokeWidth={4} strokeLinejoin="round" />
        <path d={FINGER_POST} fill={INK} />
        <path
          d={
            gouge(POST.x, POST.top + 14, POST.x - 0.6, POST.foot - 8, 0.8) +
            gouge(POST.x + 12, 49, POST.x + 66, 49, 0.7) +
            gouge(POST.x - 12, 73, POST.x - 62, 73, 0.7)
          }
          fill={PAPER}
        />
        <Portmanteau />
        <Person pose={PIP} at={PIP_AT} scale={PIP_SCALE} flip />
      </g>
    </>
  )
}

export const leavingTheForge: LinocutArt = { width: W, height: H, Draw: LeavingTheForge }
