import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  arc,
  between,
  clamp,
  deg,
  gouge,
  gougeField,
  rng,
  wedge,
  type Rng,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  BEATRICE_CAUL_NET,
  BEATRICE_HAIR,
  CutFigure,
  EYE,
  HEAD_WOMAN,
  Person,
  gown,
  hand,
  limb,
  mitt,
  type Piece,
  type Pose,
} from './people'

/**
 * Act 3, Scene 1: "Beatrice in the bower", the sixth moment in the guide's
 * timeline. Every detail is from the scene, as the held edition prints it
 * (src/data/full-texts/much-ado-about-nothing.ts):
 *
 * - "Leonato's Garden." Hero bids Beatrice "steal into the pleached bower, /
 *   Where honey-suckles, ripen'd by the sun, / Forbid the sun to enter". So
 *   the sun stands high in a clear sky, and on the right a long arched bower
 *   of woven boughs, its honeysuckle cut as little whorls of trumpets, is
 *   dark within. Hero and Ursula "Walk in the orchard", so the orchard's
 *   trees stand behind the hedge.
 * - "As we do trace this alley up and down, / Our talk must only be of
 *   Benedick". So Hero and Ursula are on the gravel alley before the bower,
 *   talking, Hero with her hand lifted as she speaks. Hero is "too low for a
 *   high praise" (1.1), so she is the smaller of the two (./people.tsx).
 * - "look where Beatrice, like a lapwing, runs / Close by the ground"; "who
 *   even now / Is couched in the woodbine coverture." So Beatrice crouches
 *   low in the mouth of the bower, holding a spray of leaves aside to hear.
 *   Her hand reaches out at the height of her breast to the edge of the
 *   leaves, well clear of her face. It was first lifted just before her
 *   mouth with the leaves laid over it, and at panel size the fingers merged
 *   into the leaves and she seemed to be hiding her face in her hands
 *   (review, 26 September 2026).
 * - Her first words when they have gone: "What fire is in mine ears?" So her
 *   ear is the spot colour: an ear, its inner curve cut in ink, set back
 *   under her caul, well clear of the eye and the mouth. (Two strokes on the
 *   cheek were tried beside it and, next to the eye, read as a red eye.)
 * - Margaret, whom the guide names, is sent to fetch Beatrice and goes
 *   ("Exit") before the talk begins, so she is not drawn.
 *
 * The people are drawn from ./people.tsx. Beatrice's crouch, which Person
 * cannot make, is cut from the kit's pieces: its head, hair and caul, its
 * gown and its hand with the fingers apart. Nothing is taken from a film or
 * stage production. Seed 6101 for every scattered mark.
 */

const W = 860
const H = 340
/** Where the gravel of the alley meets the hedge behind it. */
const PATH_TOP = 222
const SUN: [number, number] = [430, 50]

type Marks = {
  sky: string
  sunRays: string
  crowns: string
  orchard: string
  hedge: string
  gravel: string
  shadows: string
  leaves: string
  rim: string
  blossoms: string
  spray: string
  front: string
}

/** The bower's outer mass of leaves: a long arch of pleached boughs. */
const BOWER = 'M574 304C570 250 572 190 584 140C598 84 640 44 700 30C760 18 820 26 856 40V304Z'
/** Its mouth on the alley side, dark inside: the honeysuckle forbids the sun. */
const MOUTH =
  'M600 304C598 250 602 200 616 164C630 128 652 110 676 108C700 108 716 128 722 162C728 200 728 250 726 304Z'
/** The orchard beyond the hedge: [x, y, radius] of each crown. */
const CROWNS: [number, number, number][] = [
  [36, 166, 30],
  [128, 160, 34],
  [214, 166, 28],
  [354, 164, 25],
  [484, 166, 30],
]

/**
 * Foliage as a woodcutter cuts it: rows of small crescents, the lit top edge
 * of each clump of leaves, heavier where the sun strikes. `inside` decides
 * where they may fall and `lit` how bright each is.
 */
function clumps(
  r: Rng,
  box: { x0: number; x1: number; y0: number; y1: number },
  step: number,
  inside: (x: number, y: number) => boolean,
  lit: (x: number, y: number) => number,
) {
  let d = ''
  let row = 0
  for (let y = box.y0; y < box.y1; y += step * 0.72, row++) {
    for (let x = box.x0 + (row % 2) * step * 0.5; x < box.x1; x += step) {
      const cx = x + between(r, -1.5, 1.5)
      const cy = y + between(r, -1.2, 1.2)
      if (!inside(cx, cy)) continue
      const L = lit(cx, cy)
      if (r() > 0.15 + L) continue
      const rad = step * between(r, 0.36, 0.46)
      const a0 = deg(between(r, 196, 214))
      const a1 = deg(between(r, 326, 344))
      d += arc(cx, cy, rad, a0, a1)
    }
  }
  return d
}

/** Ursula, her hands folded before her, walking towards Hero and the bower. */
const URSULA: Pose = {
  look: 'ursula',
  head: { rot: 6 },
  far: {
    pts: [
      [-3, -126],
      [5, -104],
      [15, -98],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [2, -126],
      [9, -103],
      [17, -101],
    ],
    hand: 'mitt',
  },
  hem: { front: 24, back: 44 },
}

/**
 * Hero, turned to Ursula (the figure is flipped to face left), speaking with
 * her near hand open and lifted on a bent arm, the fingers apart.
 */
const HERO: Pose = {
  look: 'hero',
  head: { rot: -4 },
  far: {
    pts: [
      [-3, -126],
      [-5, -102],
      [-3, -82],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [2, -126],
      [14, -104],
      [30, -112],
    ],
    hand: 'open',
    deg: -24,
    thumb: -1,
  },
  hem: { front: 30, back: 34 },
}

/**
 * Beatrice crouched in the mouth of the bower, "couched in the woodbine
 * coverture", facing the alley (flipped to face left): bent low over her
 * spread skirt, her near hand holding a spray of leaves aside so she can
 * hear, her far hand at her breast. The kit's Person stands; a crouch is cut
 * from its pieces, with her head, hair and caul as the kit gives them.
 * Drawn facing right in her own frame, the ground at y 0.
 */
const BEATRICE_HEAD = 'translate(29 -101) rotate(22)'
const BEATRICE_AT = 'translate(692 304) scale(-1.1 1.1)'
const BEATRICE_PARTS: Piece[] = [
  {
    d: limb([
      [12, -76],
      [20, -62],
      [32, -70],
    ]),
    w: 7.2,
  },
  mitt([32, -70], -30, 0.85),
  { d: gown([18, -80], [0, -46], 0, 1, { shoulder: 22, waistW: 16, front: 46, back: 52 }) },
  { d: BEATRICE_HAIR, t: BEATRICE_HEAD },
  { d: HEAD_WOMAN, t: BEATRICE_HEAD },
  [
    {
      d: limb([
        [20, -78],
        [44, -64],
        [66, -70],
      ]),
      w: 7.2,
      sep: 1.5,
    },
    ...hand([66, -70], -45, { size: 15, spread: 18, thumb: -1, sep: 1.5 }),
  ],
]
const BEATRICE_CUTS = gouge(-6, -40, -34, -6, 1.8, 1) + gouge(8, -40, 26, -6, 1.8, -1)
/**
 * Her ear, in the head's frame, where the spot colour burns: set well back
 * from the eye, under the caul, with its inner curve cut in ink so it reads
 * as an ear and not as a mark on the face.
 */
const EAR =
  'M-3.2 -2.4C-6.4 -2.4 -7.4 1.6 -6.8 4.4C-6.2 7.2 -3.8 8.4 -1.6 7.2C-2.6 4 -2.6 0.4 -3.2 -2.4Z'
const EAR_FOLD = 'M-3.4 0.4Q-5.4 1.8 -5 4Q-4.6 5.6 -3.2 6'

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(6101)
  // Full sun, high: the sky cut almost clean.
  const light = (x: number, y: number) =>
    clamp(1 - Math.hypot(x - SUN[0], y - SUN[1]) / 2200 - clamp((y - 120) / 90) * 0.3)
  const sky = gougeField(r, { x0: 0, x1: W, y0: 4, y1: 190 }, light, {
    spacing: 7.5,
    len: [60, 160],
    gap: [3, 8],
    max: 5.2,
  })
  // The sun: a clear disc and its rays, cut into the sky round it.
  let sunRays = ''
  for (let a = 0; a < 360; a += 20) {
    const t = deg(a + 10 + between(r, -3, 3))
    const r0 = 31
    const r1 = r0 + between(r, 11, 17)
    sunRays += wedge(
      SUN[0] + Math.cos(t) * r0,
      SUN[1] + Math.sin(t) * r0,
      SUN[0] + Math.cos(t) * r1,
      SUN[1] + Math.sin(t) * r1,
      3,
      0.6,
    )
  }
  // The orchard: round crowns on short trunks, lit from above.
  const crowns = CROWNS.map(
    ([x, y, rad]) =>
      `M${x - rad} ${y}a${rad} ${rad * 0.86} 0 1 1 ${rad * 2} 0a${rad} ${rad * 0.86} 0 1 1 ${-rad * 2} 0Z` +
      `M${x - 3} ${y + rad * 0.7}h6v${190 - y}h-6Z`,
  ).join('')
  const orchard = clumps(
    r,
    { x0: 0, x1: 520, y0: 136, y1: 196 },
    11,
    (x, y) => CROWNS.some(([cx, cy, rad]) => Math.hypot(x - cx, (y - cy) / 0.86) < rad - 5),
    (x, y) => {
      const c = CROWNS.find(([cx, cy, rad]) => Math.hypot(x - cx, (y - cy) / 0.86) < rad)
      return c ? clamp(0.75 - (y - c[1]) / c[2]) : 0
    },
  )
  // A clipped hedge along the back of the alley: its top edge nicked with leaves.
  let hedge = ''
  for (let x = 0; x < 578; x += between(r, 7, 11)) {
    hedge += gouge(x, 193 + between(r, -1, 1), x + between(r, 3, 5), 188, 1.2)
    if (r() < 0.5) hedge += arc(x + 4, 206 + between(r, 0, 8), 4, deg(200), deg(340))
  }
  // The gravel of the alley: ink flecks, few and fine in the full sun.
  let gravel = ''
  for (let y = PATH_TOP + 8; y < H; y += 9) {
    const t = (y - PATH_TOP) / (H - PATH_TOP)
    let x = between(r, -10, 10)
    while (x < 580) {
      const len = between(r, 3, 8 + t * 10)
      if (r() < 0.5) gravel += gouge(x, y, x + len, y + between(r, -0.6, 0.6), 0.6 + t * 0.8)
      x += len + between(r, 14, 44)
    }
  }
  // Short hard shadows under the two walkers: the sun is high.
  let shadows = ''
  for (const [x0, x1] of [
    [258, 334],
    [380, 446],
  ] as [number, number][])
    for (let k = 0; k < 3; k++)
      shadows += gouge(x0 + k * 3, 303 + k * 3.4, x1 - k * 3, 303 + k * 3.4, 2.4 - k * 0.5)

  // The bower's leaves, heaviest on the side the sun strikes.
  const inBower = (x: number, y: number) => {
    // inside the outer arch, and outside the mouth
    const top = 30 + (x < 700 ? ((700 - x) / 126) ** 2 * 110 : ((x - 700) / 156) ** 2 * 6)
    const inMouth = x > 604 && x < 722 && y > 116 + ((x - 669) / 55) ** 2 * 40
    return y > top + 6 && x > 580 && !inMouth
  }
  const leaves = clumps(r, { x0: 574, x1: 860, y0: 30, y1: 304 }, 13, inBower, (x, y) =>
    clamp(0.95 - (x - 574) / 420 - (y - 30) / 900),
  )
  // Leaves hanging over the lip of the mouth, so it reads as a gap in the
  // boughs and not a door.
  let rim = ''
  for (let t = 0; t <= 1; t += 0.045) {
    const a = deg(180 + t * 180)
    const x = 669 + Math.cos(a) * 56
    const y = 168 + Math.sin(a) * 60
    const L = between(r, 7, 11)
    rim += gouge(x, y, x + between(r, -3, 3), y + L, between(r, 1.6, 2.4), between(r, -1.4, 1.4))
  }
  for (let y = 176; y < 290; y += between(r, 12, 20)) {
    rim += gouge(612, y, 620 + between(r, 0, 4), y + between(r, 5, 9), 1.8)
    rim += gouge(722, y + 6, 715 - between(r, 0, 4), y + between(r, 11, 15), 1.8)
  }
  // Honeysuckle: little whorls of trumpets, ripened by the sun.
  let blossoms = ''
  const clusters: [number, number][] = [
    [596, 168],
    [616, 104],
    [664, 66],
    [724, 48],
    [792, 42],
    [760, 100],
    [818, 124],
    [770, 176],
    [834, 214],
    [778, 250],
    [588, 246],
    [826, 282],
  ]
  for (const [cx, cy] of clusters)
    for (let i = 0; i < 5; i++) {
      const a = deg(-160 + i * 35 + between(r, -8, 8))
      blossoms += wedge(cx, cy, cx + Math.cos(a) * 10, cy + Math.sin(a) * 10, 0.9, 3.2)
    }

  // The spray she holds aside: leaves fanning out beyond her fingertips, at
  // the edge of the mouth, clear of the hand so its fingers stay apart.
  let spray = ''
  for (const [x, y, a] of [
    [598, 206, 215],
    [596, 214, 190],
    [597, 222, 165],
    [600, 229, 140],
    [601, 199, 240],
  ] as [number, number, number][])
    spray += gouge(x, y, x + Math.cos(deg(a)) * 12, y + Math.sin(deg(a)) * 12, 2.6, 0.8)
  // Woodbine low across the mouth, in front of her skirt.
  let front = ''
  for (let x = 606; x < 726; x += between(r, 9, 13)) {
    const y = between(r, 284, 298)
    front += arc(x, y, 5, deg(200), deg(340))
  }

  cached = {
    spray,
    front,
    sky,
    sunRays,
    crowns,
    orchard,
    hedge,
    gravel,
    shadows,
    leaves,
    rim,
    blossoms,
  }
  return cached
}

function Bower({ uid }: ArtProps) {
  const m = marks()
  const id = { bower: `${uid}-bower`, mouth: `${uid}-mouth` }
  return (
    <>
      <defs>
        <clipPath id={id.bower}>
          <path d={BOWER} />
        </clipPath>
        <clipPath id={id.mouth}>
          <path d={MOUTH} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [520, 180], push: 1.03 })}>
        <path d={m.sky} fill={PAPER} />
        {/* the sun: a clear disc, ringed, its rays left standing in ink */}
        <circle cx={SUN[0]} cy={SUN[1]} r={52} fill={PAPER} />
        <circle cx={SUN[0]} cy={SUN[1]} r={25} fill="none" stroke={INK} strokeWidth={2.6} />
        <path d={m.sunRays} fill={INK} />
        {/* the orchard beyond the hedge */}
        <path d={m.crowns} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path d={m.orchard} fill="none" stroke={PAPER} strokeWidth={1.8} />
        <rect x={0} y={188} width={580} height={PATH_TOP - 188} fill={INK} />
        <path d={m.hedge} fill="none" stroke={PAPER} strokeWidth={1.4} />
        {/* the alley, in full sun */}
        <rect x={0} y={PATH_TOP} width={W} height={H - PATH_TOP} fill={PAPER} />
        <rect x={0} y={PATH_TOP} width={580} height={2.6} fill={INK} />
        <path d={m.gravel} fill={INK} />
        <path d={m.shadows} fill={INK} />

        {/* the pleached bower */}
        <path d={BOWER} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <g clipPath={`url(#${id.bower})`}>
          <path d={m.leaves} fill="none" stroke={PAPER} strokeWidth={2} />
          <path d={MOUTH} fill={INK} />
          <path d={m.rim} fill={PAPER} />
        </g>
        <path d={m.blossoms} fill={PAPER} />
        <path d="M570 304H856" stroke={INK} strokeWidth={3} />
        {/* Beatrice, couched in the woodbine, listening */}
        <g clipPath={`url(#${id.mouth})`}>
          <CutFigure parts={BEATRICE_PARTS} cuts={BEATRICE_CUTS} transform={BEATRICE_AT}>
            <g transform={BEATRICE_HEAD}>
              <path d={BEATRICE_CAUL_NET} fill="none" stroke={PAPER} strokeWidth={0.8} />
              <path d={EYE} fill={PAPER} />
              {/* "What fire is in mine ears?" */}
              <path d={EAR} fill={RED} />
              <path d={EAR_FOLD} fill="none" stroke={INK} strokeWidth={0.9} strokeLinecap="round" />
            </g>
          </CutFigure>
        </g>
        {/* the leaves she holds aside, over her hand, and the woodbine before her */}
        <path d={m.spray} fill={PAPER} />
        <path d={m.front} fill="none" stroke={PAPER} strokeWidth={2} />
        {/* Ursula and Hero walking the alley, talking of her */}
        <Person pose={URSULA} at={[290, 304]} scale={1.12} />
        <Person pose={HERO} at={[412, 304]} scale={1.12} flip />
      </g>
    </>
  )
}

export const beatriceInTheBower: LinocutArt = { width: W, height: H, Draw: Bower }
