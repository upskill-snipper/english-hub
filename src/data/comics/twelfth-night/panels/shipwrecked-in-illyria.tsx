import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rays,
  ribbon,
  rng,
  wedge,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person } from './people'

/**
 * Act 1, Scene 2: "Shipwrecked in Illyria", the second moment in the guide's
 * timeline. Every detail is from the scene in the held edition (Project
 * Gutenberg #1526, src/data/full-texts/twelfth-night.ts):
 *
 * - "The sea-coast." "Enter Viola, a Captain and Sailors." So the three of
 *   them, and two sailors, stand on the sand with the sea behind them; nobody
 *   is in the water and nothing is drowning.
 * - "after our ship did split, When you, and those poor number sav'd with
 *   you, Hung on our driving boat". So the ship lies split on a rock far out
 *   on the horizon, its mast broken, and the boat they clung to is drawn up on
 *   the beach: one sailor rests a hand on it and looks back at the wreck, the
 *   other stands by its bow with an oar. Sebastian, who bound himself "To a
 *   strong mast", lives in the Captain's words only: no figure is drawn at sea.
 * - The storm is over but not long gone: its clouds still hang in dark bands
 *   over the sea on the left, and break up to the right, where the sun comes
 *   through. The play does not give the hour; the sun is the spot
 *   colour, as the comedies' outdoor panels light their skies (see
 *   ./sebastian-is-alive.tsx, the same coast in 2.1), and it stands high, not
 *   setting.
 * - "Conceal me what I am, and be my aid / For such disguise as haply shall
 *   become / The form of my intent." Viola, still "lady" and "madam" to the
 *   Captain and in her own dress, her hair loose from the sea, turns to him
 *   with one hand open, asking, and the other at her breast. The Captain, in
 *   his hat, answers with his hand on his heart: "Be you his eunuch and your
 *   mute I'll be". Read left to right, the picture goes from the wreck and the
 *   boat to Viola, and from her to the man who will lead her ashore into
 *   Illyria, whose cliffs rise on the right ("I thank thee. Lead me on.").
 *
 * The people are cut from ./people.tsx: Viola in her own dress ('viola'),
 * with the face she keeps as Cesario, the Captain and his sailors. Nothing is
 * taken from a film, television or stage production. Seeds: 2201 (sky), 2202
 * (clouds), 2203 (sea), 2204 (the sun's path), 2205 (foam and wet
 * sand), 2206 (sand), 2207 (the cliff), 2208 (the sun's rays).
 */

const W = 860
const H = 340
/** The sea's horizon. */
const HORIZON = 188
/** The sun, breaking through the cloud. */
const SUN: Pt = [474, 82]
const SUN_R = 21
/** The waterline: where the last wave runs up the sand, falling away to the right. */
const shore = (x: number) => 238 + 6 * Math.sin(x / 58 + 0.6) + (x / W) * 30
/** The cliffs of Illyria on the right, a rocky headland. */
const CLIFF =
  'M704 344L706 304L716 276L710 254L724 232L738 222L744 204L760 194L770 178L792 170L806 158L834 152L870 148V344Z'

type Marks = {
  sky: string
  sunRays: string
  clouds: string
  cloudCuts: string
  streaks: string
  sea: string
  glitter: string
  foam: string
  wet: string
  sand: string
  cliff: string
  scrub: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The sky: paper, cut with ink bars, darkest on the left under the storm
  // and thinning out round the sun.
  const sky = gougeField(
    rng(2201),
    { x0: 0, x1: W, y0: 8, y1: HORIZON - 4 },
    (x, y) =>
      clamp(
        0.7 -
          x / 1500 -
          y / 900 -
          Math.max(0, 1 - Math.hypot(x - SUN[0], (y - SUN[1]) * 1.3) / 220) * 0.8,
      ),
    { spacing: 7, len: [40, 130], gap: [14, 46], max: 2.6 },
  )
  const sunRays = rays(rng(2208), SUN[0], SUN[1], {
    from: SUN_R + 12,
    to: 150,
    every: 7,
    width: 2.2,
  })

  // The storm's clouds over the sea on the left: long dark bands, heavy and
  // close above the wreck and thinning out towards the sun. (Cut first as
  // heaped clouds, scalloped along the top, they read as a hedge.)
  const c = rng(2202)
  let clouds = ''
  let cloudCuts = ''
  for (let i = 0; i < 9; i++) {
    const y = 16 + i * 13 + between(c, -3, 3)
    const x0 = between(c, -60, -20) + (i > 6 ? 40 : 0)
    const x1 = 400 - Math.abs(i - 3) * 34 + between(c, -30, 30)
    const pts: Pt[] = []
    for (let j = 0; j <= 10; j++) {
      const x = x0 + ((x1 - x0) * j) / 10
      pts.push([x, y + 3 * Math.sin(x / 70 + i)])
    }
    clouds += ribbon(pts, 15 - Math.abs(i - 4) * 1.2 + between(c, -1, 1), 0.45)
    // the light along each band's lower edge
    const a = x0 + (x1 - x0) * between(c, 0.15, 0.3)
    const b = x0 + (x1 - x0) * between(c, 0.6, 0.8)
    cloudCuts += gouge(a, y + 4.4, b, y + 4.4 + between(c, -1, 1), 0.9)
  }
  // A small cloud breaking away on the right.
  clouds += ribbon(
    [
      [612, 46],
      [650, 41],
      [690, 42],
      [726, 46],
    ],
    9,
    0.5,
  )
  // Thin streaks of cloud drawn across the sun's lower half.
  const streaks =
    ribbon(
      [
        [SUN[0] - 96, SUN[1] + 14],
        [SUN[0] - 30, SUN[1] + 9],
        [SUN[0] + 40, SUN[1] + 8],
        [SUN[0] + 100, SUN[1] + 12],
      ],
      6.4,
      0.7,
    ) +
    ribbon(
      [
        [SUN[0] - 56, SUN[1] + 25],
        [SUN[0] + 10, SUN[1] + 20],
        [SUN[0] + 80, SUN[1] + 21],
        [SUN[0] + 136, SUN[1] + 26],
      ],
      4.6,
      0.7,
    )

  // The sea: black, cut with the paper crests of the swell, small and close
  // at the horizon, longer and heavier as they come in.
  const q = rng(2203)
  let sea = ''
  for (let y = HORIZON + 4, row = 0; y < 272; row++) {
    const depth = clamp((y - HORIZON) / 70)
    let x = between(q, -40, 0) + (row % 2) * 12
    while (x < 760) {
      const len = between(q, 14, 30) + depth * 44
      const rise = 1 + depth * 3.4
      const pts: Pt[] = []
      for (let i = 0; i <= 8; i++) {
        const t = i / 8
        pts.push([x + len * t, y - Math.sin(Math.PI * t) * rise + between(q, -0.3, 0.3)])
      }
      if (y < shore(x + len / 2) - 4) sea += ribbon(pts, 0.9 + depth * 2.4, 0.7)
      x += len + between(q, 6, 26) * (1.3 - depth * 0.7)
    }
    y += 4.2 + depth * 6
  }
  // The sun's path on the water, under it: short bright cuts.
  const g = rng(2204)
  let glitter = ''
  for (let y = HORIZON + 4; y < 236; y += 3.8) {
    const spread = 10 + (y - HORIZON) * 0.7
    const k = Math.round(1 + (y - HORIZON) / 14)
    for (let i = 0; i < k; i++) {
      const cx = SUN[0] + between(g, -spread, spread)
      const len = between(g, 6, 16)
      if (y < shore(cx) - 5)
        glitter += gouge(cx - len / 2, y, cx + len / 2, y, 0.7 + between(g, 0, 0.8))
    }
  }
  // The foam of the last wave up the sand, and the wet sand below it.
  const f = rng(2205)
  let foam = ''
  for (let x = -12; x < 760; ) {
    const w = between(f, 14, 30)
    const y = shore(x + w / 2)
    foam += `M${n(x)} ${n(y + 1)}Q${n(x + w / 2)} ${n(y - between(f, 5, 9))} ${n(x + w)} ${n(y + 1)}Z`
    x += w - 2
  }
  let wet = ''
  for (let k = 0; k < 3; k++) {
    let x = between(f, -20, 0)
    while (x < 720) {
      const len = between(f, 30, 90)
      const y = shore(x + len / 2) + 6 + k * 4.4
      wet += gouge(x, y, x + len, y + between(f, -0.6, 0.6), 1.4 - k * 0.3)
      x += len + between(f, 10, 40)
    }
  }
  // The sand: paper, with a few ink cuts of ripple and shadow.
  const s = rng(2206)
  let sand = ''
  for (let i = 0; i < 60; i++) {
    const x = between(s, 0, W)
    const yy = shore(x) + 24 + between(s, 0, 1) * (H - shore(x) - 24)
    if (x > 690) continue
    const len = between(s, 8, 22)
    sand += gouge(x, yy, x + len, yy + between(s, -1, 1), 0.6 + (yy - 250) / 120)
  }
  // The headland: dark rock, its fissures cut in paper, lit from the sun on
  // its left face; scrub along its top, in ink against the sky.
  const k = rng(2207)
  let cliff = ''
  for (let i = 0; i < 26; i++) {
    const x = between(k, 712, 850)
    const y = between(k, 180, 330)
    const lit = clamp(1 - (x - 706) / 150)
    if (y < 150 + (x - 704) * -0.2 + 50) continue
    const len = between(k, 14, 40)
    cliff += gouge(x, y, x + len * 0.35, y + len, 0.6 + lit * 1.8, between(k, -1, 1))
  }
  for (let y = 236; y < 336; y += 9) {
    const x = 712 + between(k, 0, 10)
    cliff += gouge(x, y, x + between(k, 20, 60), y + between(k, -2, 2), 1.4)
  }
  let scrub = ''
  const ridge: Pt[] = [
    [736, 222],
    [744, 204],
    [760, 194],
    [770, 178],
    [792, 170],
    [806, 158],
    [834, 152],
    [860, 149],
  ]
  for (let i = 1; i < ridge.length; i++) {
    const [ax, ay] = ridge[i - 1]
    const [bx, by] = ridge[i]
    for (let t = 0; t < 1; t += between(k, 0.25, 0.4)) {
      const x = ax + (bx - ax) * t
      const y = ay + (by - ay) * t
      scrub += wedge(x, y + 1, x + between(k, -3, 3), y - between(k, 5, 11), 2.6, 0.3)
    }
  }
  cached = {
    sky,
    sunRays,
    clouds,
    cloudCuts,
    streaks,
    sea,
    glitter,
    foam,
    wet,
    sand,
    cliff,
    scrub,
  }
  return cached
}

/**
 * The split ship far out on the horizon: a hull broken at the waist on a
 * rock, the stern cocked up, the mast snapped short and leaning with its yard
 * askew, a rag of sail. A dark shape against the pale foot of the sky.
 */
function Wreck() {
  return (
    <g>
      {/* the bow half, sunk low, and the stern half cocked up on the rock */}
      <path d="M198 192L204 182L234 178L242 186L246 192Z" fill={INK} />
      <path d="M250 192L254 180L262 168L290 160L296 168L292 192Z" fill={INK} />
      {/* the broken mast, its yard and a rag of sail */}
      <path d="M266 168L276 128L280 129L271 168Z" fill={INK} />
      <path d="M262 140L294 128L295 131L263 143Z" fill={INK} />
      <path d="M278 132C286 138 290 146 290 156L278 150Z" fill={INK} />
      <path d="M220 180L218 160L222 160L224 180Z" fill={INK} />
      {/* the rock it lies on, and the surf breaking round it */}
      <path d="M192 196C200 188 214 188 224 192C240 188 266 188 302 194L306 200H188Z" fill={INK} />
      <path d={gouge(186, 194, 212, 192, 1.2) + gouge(276, 192, 312, 194, 1.2)} fill={PAPER} />
    </g>
  )
}

/**
 * The ship's boat, drawn up on the sand, its bow to the right: the planks of
 * its side cut in paper, its gunwale, and the stem post at the bow. In the
 * panel's frame.
 */
function Boat() {
  const hull =
    'M108 264C114 282 128 294 152 298L256 296C274 294 286 282 294 264C268 268 240 270 210 270C172 270 138 268 108 264Z'
  return (
    <g>
      <path d={hull} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path
        d={
          gouge(116, 274, 286, 273, 1.1, 1.6) +
          gouge(128, 284, 276, 284, 1, 1.2) +
          gouge(110, 265, 292, 265, 1, -0.6)
        }
        fill={PAPER}
      />
      <path d="M290 268L302 252L307 256L296 270Z" fill={INK} stroke={PAPER} strokeWidth={1.2} />
    </g>
  )
}

/**
 * An oar held upright, its loom on the sand and its blade at the top, in the
 * panel's frame: cut in ink with a paper edge, so it stands clear of the sea
 * behind it.
 */
function Oar({ foot, top }: { foot: Pt; top: Pt }) {
  const a = Math.atan2(top[1] - foot[1], top[0] - foot[0])
  const u: Pt = [Math.cos(a), Math.sin(a)]
  const v: Pt = [-u[1], u[0]]
  const at = (x: number, y: number) =>
    `${n(top[0] + u[0] * x + v[0] * y)} ${n(top[1] + u[1] * x + v[1] * y)}`
  const blade = `M${at(-30, -2)}L${at(-26, -6)}L${at(2, -6.4)}L${at(6, 0)}L${at(2, 6.4)}L${at(-26, 6)}L${at(-30, 2)}Z`
  const loom = `M${n(foot[0])} ${n(foot[1])}L${at(-28, 0)}`
  return (
    <g>
      <path d={loom} stroke={PAPER} strokeWidth={6.6} strokeLinecap="round" />
      <path d={blade} fill={PAPER} stroke={PAPER} strokeWidth={3} strokeLinejoin="round" />
      <path d={loom} stroke={INK} strokeWidth={3.4} strokeLinecap="round" />
      <path d={blade} fill={INK} />
      <path d={`M${at(-24, 0)}L${at(0, 0)}`} stroke={PAPER} strokeWidth={0.9} />
    </g>
  )
}

function ShipwreckedInIllyria({ uid }: ArtProps) {
  const m = marks()
  const sky = `${uid}-sky`
  return (
    <>
      <defs>
        <clipPath id={sky}>
          <rect x={0} y={0} width={W} height={HORIZON} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [520, 220], push: 1.03 })}>
        {/* the sky */}
        <rect x={0} y={0} width={W} height={HORIZON} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        <g clipPath={`url(#${sky})`}>
          <g className="lc-fade-in" style={timing({ dur: 1.6 })}>
            <path d={m.sunRays} fill={INK} />
          </g>
          {/* the sun, coming through behind its streaks of cloud */}
          <circle cx={SUN[0]} cy={SUN[1]} r={SUN_R + 7} fill={PAPER} />
          <circle className="lc-glow" cx={SUN[0]} cy={SUN[1]} r={SUN_R} fill={RED} />
          <path d={m.streaks} fill={INK} stroke={PAPER} strokeWidth={1} />
          <g className="lc-drift-r" style={timing({ dur: 3.6 })}>
            <path d={m.clouds} fill={INK} />
            <path d={m.cloudCuts} fill={PAPER} />
          </g>
        </g>

        {/* the sea, and the wreck on the horizon */}
        <rect x={0} y={HORIZON} width={W} height={H - HORIZON} fill={INK} />
        <path d={m.sea} fill={PAPER} />
        <path d={m.glitter} fill={PAPER} />
        <Wreck />

        {/* the beach */}
        <path
          d={`M-10 ${n(shore(-10))}${Array.from({ length: 45 }, (_, i) => {
            const x = i * 20
            return `L${x} ${n(shore(x))}`
          }).join('')}L${W + 10} ${n(shore(W + 10))}V${H + 10}H-10Z`}
          fill={PAPER}
        />
        <path d={m.foam} fill={PAPER} stroke={INK} strokeWidth={1} />
        <path d={m.wet + m.sand} fill={INK} />

        {/* the cliffs of Illyria */}
        <path d={CLIFF} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path d={m.cliff} fill={PAPER} />
        <path d={m.scrub} fill={INK} />

        {/* the boat they hung on, drawn up on the sand */}
        <Boat />

        {/* a sailor at the boat's stern, his hand on it, looking back at the wreck */}
        <Person
          at={[76, 300]}
          pose={{
            look: 'sailor',
            head: { rot: -8 },
            far: {
              pts: [
                [-4, -132],
                [-8, -104],
                [-4, -80],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [4, -130],
                [18, -108],
                [34, -40],
              ],
              hand: 'open',
              deg: 40,
              size: 14,
            },
          }}
        />

        {/* the second sailor, by the bow, holding an oar upright */}
        <Oar foot={[362, 302]} top={[360, 140]} />
        <Person
          at={[324, 304]}
          pose={{
            look: 'sailor',
            cap: true,
            head: { rot: 2 },
            far: {
              pts: [
                [-4, -132],
                [-8, -104],
                [-4, -78],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [4, -132],
                [18, -108],
                [34, -116],
              ],
              hand: 'grip',
              deg: -90,
            },
          }}
        />

        {/* Viola, asking the Captain's help */}
        <Person
          at={[500, 322]}
          pose={{
            look: 'viola',
            head: { rot: -4 },
            hem: { front: 26, back: 40 },
            far: {
              pts: [
                [-3, -127],
                [14, -110],
                [34, -112],
              ],
              hand: 'open',
              deg: -12,
              thumb: -1,
            },
            near: {
              pts: [
                [3, -127],
                [14, -104],
                [8, -116],
              ],
              hand: 'open',
              deg: -100,
              size: 12.6,
              spread: 16,
            },
          }}
        />

        {/* the Captain, his hand on his heart */}
        <Person
          at={[624, 320]}
          flip
          pose={{
            look: 'captain',
            head: { rot: 8 },
            far: {
              pts: [
                [-4, -132],
                [-8, -104],
                [-4, -80],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [4, -132],
                [18, -104],
                [9, -110],
              ],
              hand: 'open',
              deg: -140,
              size: 13.4,
              spread: 15,
            },
          }}
        />
      </g>
    </>
  )
}

export const shipwreckedInIllyria: LinocutArt = {
  width: W,
  height: H,
  Draw: ShipwreckedInIllyria,
}
