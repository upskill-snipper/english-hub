import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  ribbon,
  rng,
  wave,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, swordHilt } from './people'

/**
 * Act 2, Scene 3: "Edgar becomes Poor Tom". Edgar alone in the open country,
 * the morning after he fled, making himself into a Bedlam beggar:
 *
 *   "I heard myself proclaim'd, And by the happy hollow of a tree Escap'd the
 *   hunt. No port is free, no place That guard and most unusual vigilance
 *   Does not attend my taking." ... "my face I'll grime with filth, Blanket my
 *   loins; elf all my hair in knots, And with presented nakedness outface The
 *   winds and persecutions of the sky."
 *
 * Every detail is from the scene (the held edition, src/data/full-texts/
 * king-lear.ts):
 * - "The open Country", in the morning: the scene falls between Kent's dawn
 *   in the stocks and the King's "Good morrow" at the castle in 2.4. So a low
 *   sun, the one red in the panel, shows through cloud streaming on the wind.
 * - "the happy hollow of a tree": an old oak on the left, bare at the end of
 *   winter ("Winter's not gone yet", 2.4), its trunk split open at the foot
 *   in a hollow a man could stand in.
 * - He is the kit's 'tom' (./people.tsx): barefoot and bare-armed, his hair
 *   "in knots", a ragged blanket wrapped round him from the chest to the knee
 *   and tied with a rope, so that he is always decently covered. His face is
 *   his own young face, steady: the madness is a disguise, and nothing in it
 *   is mocked. The pins and nails the Bedlam beggars strike in their arms, in
 *   the same speech, are never drawn.
 * - "outface The winds": he strides out towards the open country with his
 *   arms spread wide to the wind, which comes from the right (the grass is
 *   laid flat by it, the cloud drives before it).
 * - What he has left is at the foot of the tree: his tunic thrown down with
 *   its belt across it, and his sword. The text does not list them; they are
 *   what a man must shed to go in a blanket, and Tom never carries a sword.
 * - Far off is the country he will beg in, "low farms, Poor pelting
 *   villages, sheep-cotes, and mills": a sheep-cote and a post mill on the
 *   hills, a track winding out to them. On the skyline two riders are still
 *   searching: "No port is free".
 *
 * Nothing is taken from a film or stage production.
 *
 * Seed: 8201 (the sky, the country and the tree's cuts).
 */

const W = 860
const H = 340
/** The far edge of the country. */
const HORIZON = 214
/** The sun, low in the morning sky behind streaming cloud. */
const SUN: Pt = [610, 150]

const skyLight = (x: number, y: number) =>
  clamp(1.05 - Math.hypot((x - SUN[0]) * 0.55, (y - SUN[1]) * 0.9) / 330, 0.08)

/** The far hills: a long ridge, higher on the right. */
const hillAt = (x: number) => HORIZON - 10 * Math.sin(x / 90 + 1) - 14 * clamp((x - 420) / 400)
/** The near ground the tree and Edgar stand on. */
const nearAt = (x: number) => 284 + 6 * Math.sin(x / 70) - 10 * clamp((260 - x) / 260)

type Marks = {
  sky: string
  streaks: string
  far: string
  near: string[]
  grass: string
  bark: string
  hollow: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(8201)
  const sky = gougeField(r, { x0: 0, x1: W, y0: 6, y1: HORIZON + 10 }, skyLight, {
    spacing: 5.4,
    len: [40, 130],
    gap: [6, 20],
    max: 4.8,
  })
  // Cloud streaming on the wind across the sun, cut back in ink.
  let streaks = ''
  for (let k = 0; k < 6; k++) {
    const y = 104 + k * 13 + between(r, -3, 3)
    const x0 = between(r, 380, 560)
    streaks += ribbon(
      wave(x0, x0 + between(r, 160, 300), y, 2, 120, between(r, 0, 6), 20),
      between(r, 2.4, 4.6),
      0.8,
    )
  }
  // The far country: fields in rows, paler towards the sun, the rows closing
  // up towards the horizon.
  let far = ''
  for (let y = HORIZON - 26; y < 290; y += 2.6 + (y - HORIZON + 26) * 0.06) {
    let x = between(r, -20, 0)
    while (x < W) {
      const len = between(r, 18, 70)
      if (y > hillAt(x + len / 2) + 2) {
        const L = clamp(0.85 - Math.abs(x + len / 2 - SUN[0]) / 380) * 0.8 + 0.06
        if (r() < 0.12 + L * 0.5)
          far += gouge(
            x,
            y,
            x + len * 0.6,
            y + between(r, -0.3, 0.3),
            0.4 + L * 1.6 * (0.5 + (y - HORIZON) / 140),
          )
      }
      x += len + between(r, 4, 16)
    }
  }
  // The near ground: pale, with rows of ink strokes heavier towards the front.
  const near = ['', '', '']
  for (let y = 270; y < H; y += 4.4) {
    let x = between(r, -30, 0)
    while (x < W) {
      const len = between(r, 14, 56)
      if (y > nearAt(x) + 3) {
        const d = clamp((y - 270) / 80 + between(r, -0.25, 0.25))
        const k = Math.min(2, Math.floor(d * 3))
        if (r() < 0.3 + d * 0.5) near[k] += `M${n(x)} ${n(y + between(r, -0.6, 0.6))}h${n(len)}`
      }
      x += len + between(r, 6, 24)
    }
  }
  // Grass along the edge, blown flat to the left by the wind.
  let grass = ''
  for (let x = 4; x < W; x += between(r, 8, 18)) {
    const y = nearAt(x)
    for (let k = 0; k < 3; k++)
      grass += `M${n(x + k * 2.4)} ${n(y + 1)}q${n(-3 - k)} ${n(-5 - k)} ${n(-9 - k * 2)} ${n(-7 - k)}`
  }
  // Bark: long cuts up the trunk, following its twist, lit on the side
  // towards the sun.
  let bark = ''
  for (let i = 0; i < 60; i++) {
    const x = between(r, 56, 200)
    const y0 = between(r, 126, 284)
    // none inside the hollow, which must stay black
    if (x > 92 && x < 140 && y0 > 186) continue
    const L = clamp((x - 50) / 140)
    bark += gouge(
      x,
      y0,
      x + between(r, -4, 6),
      y0 + between(r, 14, 32),
      0.6 + L * 2,
      between(r, -1.2, 1.2),
    )
  }
  // The bare limbs: tapering ribbons, each with its twigs.
  const limbs: Pt[][] = [
    [
      [84, 132],
      [66, 104],
      [44, 84],
      [26, 74],
    ],
    [
      [66, 104],
      [60, 74],
      [64, 46],
    ],
    [
      [104, 124],
      [104, 92],
      [96, 60],
      [100, 26],
    ],
    [
      [96, 60],
      [118, 40],
      [132, 18],
    ],
    [
      [150, 130],
      [174, 104],
      [204, 90],
      [236, 86],
    ],
    [
      [174, 104],
      [182, 72],
      [178, 44],
    ],
    [
      [204, 90],
      [222, 64],
      [240, 52],
    ],
    [
      [44, 84],
      [24, 56],
      [18, 34],
    ],
  ]
  let hollow = ''
  limbs.forEach((pts, i) => {
    hollow += ribbon(pts, i % 2 ? 6 : 11, 0.6, false)
  })
  for (let i = 0; i < 26; i++) {
    const pts = limbs[i % limbs.length]
    const p = pts[pts.length - 1]
    const a = between(r, -2.6, -0.5)
    const len = between(r, 10, 24)
    hollow += ribbon(
      [
        [p[0] + between(r, -6, 6), p[1] + between(r, -4, 4)],
        [p[0] + Math.cos(a) * len * 0.5, p[1] + Math.sin(a) * len * 0.5],
        [p[0] + Math.cos(a) * len, p[1] + Math.sin(a) * len],
      ],
      2.2,
      0.6,
      false,
    )
  }
  cached = { sky, streaks, far, near, grass, bark, hollow }
  return cached
}

/**
 * The hollow tree Edgar hid in, "the happy hollow of a tree": an old oak,
 * its root flares spreading, its trunk split open from the foot in a long
 * ragged hollow big enough for a man to stand in.
 */
const TRUNK =
  'M8 304C26 296 40 286 50 270C58 252 60 230 58 206C56 180 62 156 74 140C80 132 82 126 84 120L104 118L150 124C156 134 160 146 166 158C176 178 184 204 188 232C192 260 200 282 220 296C228 300 232 304 236 306Z'
const HOLLOW =
  'M94 306C90 290 93 274 92 258C91 242 97 230 101 216C104 206 108 198 113 188L116 200L121 196L123 212L128 220L127 236L133 250L131 268L137 286L135 306Z'
/** The lit lip of the split, on the side towards the sun. */
const HOLLOW_LIP =
  'M113 188L116 200L121 196L123 212L128 220L127 236L133 250L131 268L137 286L135 306'

/** Where Tom stands: his feet, on the near ground. */
const TOM_AT: Pt = [356, 306]

/**
 * What Edgar has taken off, left at the foot of the tree: his tunic thrown
 * down with its belt across it, and his sword in its scabbard. The text does
 * not list them; it is what a man must leave who will go "with presented
 * nakedness" in a blanket, and Tom never carries a sword.
 */
function CastOff() {
  const tunic =
    'M238 317C236 307 244 300 257 299C266 298 277 300 287 297C296 295 304 300 305 307C306 314 300 319 291 319L246 320C241 320 239 319 238 317Z'
  const sleeve = 'M287 299C293 291 304 289 313 291L315 297C306 297 297 300 293 305Z'
  const belt = ribbon(
    [
      [244, 309],
      [260, 312],
      [278, 311],
      [296, 306],
      [304, 302],
    ],
    3.4,
    0.3,
    false,
  )
  const sheath = 'M224 331L296 323'
  return (
    <g strokeLinejoin="round">
      <path d={tunic + sleeve} fill={INK} stroke={PAPER} strokeWidth={2} />
      <path
        d={
          gouge(248, 303, 270, 302, 1.4, -0.6) +
          gouge(282, 315, 298, 312, 1.2, 0.4) +
          gouge(296, 296, 310, 294, 0.8)
        }
        fill={PAPER}
      />
      <path d={belt} fill={PAPER} />
      <rect
        x={271}
        y={307.4}
        width={6.4}
        height={6.4}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.4}
      />
      <path d={sheath} stroke={PAPER} strokeWidth={7.4} strokeLinecap="round" />
      <path d={sheath} stroke={INK} strokeWidth={4.2} strokeLinecap="round" />
      <path d={swordHilt([298, 322.8], -6.3)} fill={PAPER} stroke={INK} strokeWidth={0.8} />
    </g>
  )
}

/**
 * The far country Edgar will beg in: "low farms, Poor pelting villages,
 * sheep-cotes, and mills" (2.3). A post mill on the hill towards the sun, a
 * sheep-cote below it, a track winding out to them, and on the skyline two
 * riders still searching: "No port is free, no place That guard and most
 * unusual vigilance Does not attend my taking."
 */
function FarCountry() {
  const mx = 700
  const my = hillAt(mx)
  const sx = 470
  const sy = hillAt(sx)
  const track = ribbon(
    [
      [436, 300],
      [470, 276],
      [492, 256],
      [520, 238],
      [548, 226],
      [568, 218],
    ],
    20,
    0.9,
    false,
  )
  // A horseman on the skyline, in his own frame (facing right, hooves at 0),
  // as strokes: [path, width].
  const RIDER: [string, number][] = [
    ['M-8 -11H8', 6.4],
    ['M7 -12L12 -18L16 -16', 3.2],
    ['M-7 -9L-8 0M-4 -9L-3 0M5 -9L4 0M7 -9L9 0M-9 -12L-12 -5', 1.7],
    ['M0 -13L1 -22', 4.2],
    ['M1.6 -25.6h0.1', 5],
  ]
  const riders: [number, number][] = [
    [784, hillAt(784) + 1],
    [812, hillAt(812) + 1],
  ]
  return (
    <g>
      <path d={track} fill={PAPER} />
      {/* the mill: its body on a post, four sails */}
      <g fill={INK} stroke={PAPER} strokeWidth={1.4} strokeLinejoin="round">
        <path d={`M${mx - 1.6} ${n(my + 2)}V${n(my - 12)}H${mx + 1.6}V${n(my + 2)}Z`} />
        <path
          d={`M${mx - 6} ${n(my - 11)}V${n(my - 25)}L${mx} ${n(my - 30)}L${mx + 6} ${n(my - 25)}V${n(my - 11)}Z`}
        />
      </g>
      <path
        d={`M${mx - 14} ${n(my - 33)}L${mx + 14} ${n(my - 7)}M${mx + 14} ${n(my - 33)}L${mx - 14} ${n(my - 7)}`}
        stroke={INK}
        strokeWidth={2.4}
      />
      {/* the sheep-cote: low walls and a roof */}
      <path
        d={`M${sx - 14} ${n(sy + 1)}V${n(sy - 6)}L${sx - 8} ${n(sy - 13)}H${sx + 10}L${sx + 15} ${n(sy - 6)}V${n(sy + 1)}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.2}
      />
      <path d={`M${sx - 13} ${n(sy - 6)}H${sx + 14}`} stroke={PAPER} strokeWidth={1} />
      {/* the riders on the skyline, facing back across the country */}
      {riders.map(([x, y]) => (
        <g
          key={x}
          transform={`translate(${x} ${n(y)}) scale(-1.3 1.3)`}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {RIDER.map(([d, w]) => (
            <path key={`h${d}`} d={d} stroke={PAPER} strokeWidth={w + 2.4} />
          ))}
          {RIDER.map(([d, w]) => (
            <path key={d} d={d} stroke={INK} strokeWidth={w} />
          ))}
        </g>
      ))}
    </g>
  )
}

function EdgarBecomesPoorTom({ uid }: ArtProps) {
  const m = marks()
  const trunkClip = `${uid}-trunk`
  const hill =
    `M0 ${H}V${n(hillAt(0))}` +
    Array.from({ length: 44 }, (_, i) => `L${(i + 1) * 20} ${n(hillAt((i + 1) * 20))}`).join('') +
    `V${H}Z`
  const near =
    `M0 ${H}V${n(nearAt(0))}` +
    Array.from({ length: 44 }, (_, i) => `L${(i + 1) * 20} ${n(nearAt((i + 1) * 20))}`).join('') +
    `V${H}Z`
  return (
    <g className="lc-push" style={timing({ origin: [300, 220], push: 1.03 })}>
      <defs>
        <clipPath id={trunkClip}>
          <path d={TRUNK} />
        </clipPath>
      </defs>
      {/* the morning sky, and the sun behind the streaming cloud */}
      <path d={m.sky} fill={PAPER} />
      <circle cx={SUN[0]} cy={SUN[1]} r={22} fill={RED} />
      <g className="lc-drift-r" style={timing({ dur: 3.4 })}>
        <path d={m.streaks} fill={INK} />
      </g>
      {/* the far country: hills and fields, a mill and a sheep-cote */}
      <path d={hill} fill={INK} />
      <path d={m.far} fill={PAPER} />
      <path
        d={
          `M0 ${n(hillAt(0))}` +
          Array.from({ length: 44 }, (_, i) => `L${(i + 1) * 20} ${n(hillAt((i + 1) * 20))}`).join(
            '',
          )
        }
        fill="none"
        stroke={PAPER}
        strokeWidth={LINE.fine}
      />
      <FarCountry />
      {/* the near ground */}
      <path d={near} fill={PAPER} />
      <g fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.near[0]} strokeWidth={0.9} />
        <path d={m.near[1]} strokeWidth={1.7} />
        <path d={m.near[2]} strokeWidth={2.6} />
      </g>
      <path d={m.grass} fill="none" stroke={INK} strokeWidth={1.3} strokeLinecap="round" />
      {/* the hollow tree, its bare limbs carved free of the sky */}
      <path d={m.hollow} fill={INK} stroke={PAPER} strokeWidth={3.2} strokeLinejoin="round" />
      <path d={TRUNK} fill={INK} stroke={PAPER} strokeWidth={3.2} strokeLinejoin="round" />
      <path d={m.hollow} fill={INK} />
      <path d={TRUNK} fill={INK} />
      <path d={m.bark} fill={PAPER} clipPath={`url(#${trunkClip})`} />
      <path d={HOLLOW} fill={INK} stroke={PAPER} strokeWidth={1.4} strokeLinejoin="round" />
      <path d={HOLLOW_LIP} fill="none" stroke={PAPER} strokeWidth={3} strokeLinecap="round" />
      <CastOff />

      {/* Edgar as Poor Tom, facing the wind with his arms spread */}
      <Person
        pose={{
          look: 'tom',
          head: { rot: -8 },
          body: { neck: [3, -137], hip: [0, -70] },
          legs: {
            far: [
              [-3, -70],
              [-14, -38],
              [-26, -3],
            ],
            near: [
              [3, -70],
              [16, -40],
              [20, -3],
            ],
          },
          far: {
            pts: [
              [-1, -128],
              [-22, -120],
              [-42, -116],
            ],
            hand: 'open',
            deg: 172,
          },
          near: {
            pts: [
              [7, -128],
              [28, -124],
              [48, -122],
            ],
            hand: 'open',
            deg: 6,
          },
        }}
        at={TOM_AT}
        scale={1.1}
      />
    </g>
  )
}

export const edgarBecomesPoorTom: LinocutArt = { width: W, height: H, Draw: EdgarBecomesPoorTom }
