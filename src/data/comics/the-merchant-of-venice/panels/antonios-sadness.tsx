import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { flagFloor, footShadow } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { Person, type Pose } from './people'
import { Argosy, archPath, ripples } from './venice'

/**
 * Act 1, Scene 1: "Antonio's sadness", the first moment in the guide's
 * timeline. Every detail is from the scene, as the held edition prints it
 * (src/data/full-texts/the-merchant-of-venice.ts):
 *
 * - "Venice. A street." "Good morrow, my good lords." A street on the
 *   waterfront on a clear morning, the quay's stone parapet on the left with
 *   the sea beyond it, and on the right the house fronts of the city.
 * - ANTONIO: "In sooth I know not why I am so sad"; "A stage, where every man
 *   must play a part, / And mine a sad one." So Antonio stands apart on the
 *   left with his head bowed and his eyes down, one hand laid on his breast.
 * - SALARINO: "Your mind is tossing on the ocean, / There where your
 *   argosies, with portly sail ... Do overpeer the petty traffickers". So
 *   Salarino, in his round cap, turns to him and points out to sea, where
 *   three great ships ride on the horizon with their full sails printed in
 *   the spot colour: Antonio's fortunes, "all my fortunes are at sea".
 * - "Enter Bassanio, Lorenzo and Gratiano." SOLANIO: "Here comes Bassanio,
 *   your most noble kinsman, / Gratiano, and Lorenzo." So Solanio, bearded
 *   and bareheaded, turns to the right and holds out an open hand towards the
 *   three coming along the quay: Bassanio in front, bareheaded, in a short
 *   cloak with a rapier, holding out his hand in greeting; Gratiano in his
 *   feathered cap; Lorenzo in his bonnet. All six are on stage together from
 *   that entrance until "Exeunt Salarino and Solanio", and the guide names
 *   all six.
 *
 * The people are cut from ./people.tsx, the kit every panel of this text
 * draws them from; nothing is taken from a film or stage production. Seeds:
 * 1101 (sky), 1102 (sea), 1103 (house fronts), 1104 (quay).
 */

const W = 860
const H = 340
const HORIZON = 168
/** The top of the quay's parapet, and the paving in front of it. */
const PARAPET = 224
const PAVING = 252
/** Where the house fronts begin. */
const HOUSES = 548

const ANTONIO: Pose = {
  look: 'antonio',
  head: { rot: 12 },
  eye: 'down',
  far: {
    pts: [
      [-3, -130],
      [-6, -104],
      [-4, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [22, -101],
      [12, -106],
    ],
    hand: 'open',
    deg: -172,
    thumb: 1,
    spread: 8,
  },
}

/** Salarino, turned to Antonio (flipped), pointing out to sea at the argosies. */
const SALARINO: Pose = {
  look: 'salarino',
  head: { rot: -6 },
  far: {
    pts: [
      [-3, -130],
      [-15, -108],
      [-6, -92],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [24, -138],
      [44, -149],
    ],
    hand: 'point',
  },
}

/** Solanio, turned to the three coming along the quay, an open hand held out to them. */
const SOLANIO: Pose = {
  look: 'solanio',
  far: {
    pts: [
      [-3, -130],
      [-6, -104],
      [-4, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [20, -109],
      [39, -112],
    ],
    hand: 'open',
    deg: -12,
    thumb: -1,
    size: 16.5,
    spread: 20,
  },
}

const STRIDE = {
  far: [
    [-3, -70],
    [-11, -36],
    [-19, -3],
  ] as [number, number][],
  near: [
    [3, -70],
    [10, -36],
    [17, -3],
  ] as [number, number][],
}

/** Bassanio, walking in (flipped), his hand held out in greeting. */
const BASSANIO: Pose = {
  look: 'bassanio',
  cloak: 6,
  sword: true,
  legs: STRIDE,
  far: {
    pts: [
      [-3, -130],
      [-10, -104],
      [-12, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [18, -110],
      [36, -117],
    ],
    hand: 'open',
    deg: -22,
    thumb: -1,
  },
}

const GRATIANO: Pose = {
  look: 'gratiano',
  legs: STRIDE,
  head: { rot: -4 },
  far: {
    pts: [
      [-3, -130],
      [-12, -106],
      [-18, -88],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [16, -106],
      [32, -100],
    ],
    hand: 'open',
    deg: -8,
    thumb: -1,
  },
}

const LORENZO: Pose = {
  look: 'lorenzo',
  legs: STRIDE,
  far: {
    pts: [
      [-3, -130],
      [4, -104],
      [10, -86],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [-4, -106],
      [-8, -88],
    ],
    hand: 'mitt',
  },
}

type Marks = {
  sky: string
  sea: string
  houses: string
  joints: string
  floor: string
  wall: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // A clear morning: a pale sky, a few streaks of haze cut in ink.
  const r = rng(1101)
  let sky = ''
  for (let y = 22; y < HORIZON - 8; y += 9) {
    let x = between(r, -30, 0)
    while (x < HOUSES + 20) {
      const len = between(r, 20, 90)
      if (r() < 0.32 + (y / HORIZON) * 0.2)
        sky += gouge(
          x,
          y + between(r, -1, 1),
          x + len,
          y + between(r, -1, 1),
          0.6 + between(r, 0, 0.9),
        )
      x += len + between(r, 30, 90)
    }
  }
  const sea = ripples(1102, 0, HOUSES + 20, HORIZON, PARAPET)
  // The house fronts in the morning light, lit from the sea on the left.
  const light = (x: number, y: number) =>
    clamp(0.95 - (x - HOUSES) / 520 - Math.max(0, y - 200) / 260) * 0.9 + 0.08
  const houses = gougeField(rng(1103), { x0: HOUSES, x1: W, y0: 26, y1: PAVING }, light, {
    spacing: 6.6,
    len: [18, 60],
    gap: [6, 18],
    max: 3.6,
  })
  // Courses of the house fronts, cut across them.
  let joints = ''
  for (let y = 62; y < PAVING; y += 40) joints += gouge(HOUSES, y, W, y + 0.6, 1)
  const q = rng(1104)
  const floor = flagFloor(q, W, H, PAVING, [430, 120], 64, 5)
  // The parapet's stones: a face of blocks with the joints cut in paper.
  let wall = ''
  for (let x = 6; x < HOUSES; x += between(q, 36, 60))
    wall += wedge(x, PARAPET + 10, x + between(q, -0.6, 0.6), PAVING - 2, 1.6, 1.6)
  wall += gouge(0, PARAPET + 18, HOUSES, PARAPET + 18.6, 1)
  cached = { sky, sea, houses, joints, floor, wall }
  return cached
}

/** The windows of the house fronts: arched, in two storeys, and a door. */
const WINDOWS =
  archPath(568, 590, 70, 118) +
  archPath(606, 628, 70, 118) +
  archPath(660, 682, 70, 118) +
  archPath(730, 752, 58, 110) +
  archPath(768, 790, 58, 110) +
  archPath(806, 828, 58, 110) +
  archPath(730, 750, 140, 176) +
  archPath(812, 832, 140, 176)
const SILLS =
  [568, 606, 660].map((x) => `M${x - 4} 118h30v4h-${30}z`).join('') +
  [730, 768, 806].map((x) => `M${x - 4} 110h30v4h-${30}z`).join('')
/** The roofs, with the funnel chimneys of Venice. */
const ROOFS =
  `M${HOUSES} 34L${HOUSES + 4} 26H712L716 34Z` +
  'M708 22L712 14H860V22Z' +
  'M590 26V12H586V6H604V12H600V26Z' +
  'M760 14V2H754L752 -4H778L776 2H770V14Z'

function AntoniosSadness({ uid }: ArtProps) {
  const m = marks()
  const clip = `${uid}-sea`
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <rect x={0} y={HORIZON} width={HOUSES + 20} height={PARAPET - HORIZON} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [260, 190], push: 1.03 })}>
        {/* the pale morning sky and its haze */}
        <rect x={0} y={0} width={W} height={HORIZON} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        {/* the sea, and Antonio's argosies riding on it */}
        <rect x={0} y={HORIZON} width={HOUSES + 20} height={PARAPET - HORIZON} fill={INK} />
        <g clipPath={`url(#${clip})`}>
          <path d={m.sea} fill={PAPER} />
        </g>
        <path d={gouge(0, HORIZON, HOUSES, HORIZON + 0.4, 1.2)} fill={PAPER} />
        <g className="lc-drift" style={timing({ dur: 3.2 })}>
          <Argosy at={[58, HORIZON + 4]} s={0.62} />
          <Argosy at={[212, HORIZON + 6]} s={0.86} />
          <Argosy at={[478, HORIZON + 3]} s={0.52} />
        </g>
        {/* the quay's parapet */}
        <rect x={0} y={PARAPET - 6} width={HOUSES} height={8} fill={PAPER} />
        <rect x={0} y={PARAPET + 2} width={HOUSES} height={PAVING - PARAPET - 2} fill={INK} />
        <path d={m.wall} fill={PAPER} />
        {/* a mooring post in the water by the quay */}
        <path d="M456 176V222" stroke={PAPER} strokeWidth={9} />
        <path d="M456 178V222" stroke={INK} strokeWidth={5.6} />
        <path d="M453 186H459M453 200H459" stroke={PAPER} strokeWidth={1.6} />

        {/* the house fronts on the right */}
        <rect x={HOUSES} y={26} width={W - HOUSES} height={PAVING - 26} fill={INK} />
        <path d={m.houses} fill={PAPER} />
        <path d={m.joints} fill={INK} />
        <path d={ROOFS} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={WINDOWS} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={SILLS} fill={PAPER} />
        <path d={`M${HOUSES} 26V${PAVING}M712 22V${PAVING}`} stroke={PAPER} strokeWidth={2.4} />
        {/* a doorway in the far house, open on the dark */}
        <path
          d={archPath(618, 650, 186, PAVING)}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />

        {/* the paving of the quay */}
        <rect x={0} y={PAVING} width={W} height={H - PAVING} fill={PAPER} />
        <path d={m.floor} fill={INK} />
        <rect x={0} y={PAVING - 1} width={W} height={3} fill={INK} />
        <path
          d={
            footShadow(122, 324, 34) +
            footShadow(290, 324, 30) +
            footShadow(386, 324, 30) +
            footShadow(600, 302, 26) +
            footShadow(700, 302, 24) +
            footShadow(790, 302, 24)
          }
          fill={INK}
        />

        {/* the three coming along the quay, and the three already there */}
        <Person pose={LORENZO} at={[790, 300]} scale={0.93} flip />
        <Person pose={GRATIANO} at={[700, 300]} scale={0.93} flip />
        <Person pose={BASSANIO} at={[602, 300]} scale={0.95} flip />
        <Person pose={SOLANIO} at={[386, 322]} scale={1.1} />
        <Person pose={SALARINO} at={[290, 322]} scale={1.1} flip />
        <Person pose={ANTONIO} at={[122, 322]} scale={1.12} />
      </g>
    </>
  )
}

export const antoniosSadness: LinocutArt = { width: W, height: H, Draw: AntoniosSadness }
