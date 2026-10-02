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

import { Person } from './people'

/**
 * Act 3, Scene 2: "Defying the storm". Lear on the heath with the Fool, before
 * Kent finds them:
 *
 *   "Blow, winds, and crack your cheeks! Rage! blow!" ... "You sulphurous and
 *   thought-executing fires, Vaunt-couriers to oak-cleaving thunderbolts,
 *   Singe my white head!" ... "Here I stand your slave, A poor, infirm, weak,
 *   and despis'd old man"
 *
 * Every detail is from the scene (the held edition, src/data/full-texts/
 * king-lear.ts):
 * - "Another part of the heath", "Storm continues": the scene opens on "A
 *   storm with thunder and lightning" (3.1). So the sky is black and driven,
 *   rain slants in on the wind from the right, and the open heath runs to a
 *   far, dark edge.
 * - "oak-cleaving thunderbolts": far off on the right a forked bolt strikes a
 *   bare oak on the skyline and splits it, and it burns, the fire the one red
 *   in the panel ("Spit, fire!").
 * - Lear, the kit's 'lear', stands on a rise of the heath "bareheaded"
 *   (Kent's "Alack, bareheaded!"), his "white head" open to the sky, his
 *   white hair blown back off it as the Gentleman saw it in 3.1: "tears his
 *   white hair, Which the impetuous blasts with eyeless rage, Catch in their
 *   fury" (HAIR_BLOWN, added here over the kit's hair). He wears his gown
 *   with its fur collar and no mantle, as he does at the hovel and the
 *   farmhouse later the same night, its skirt blown back by the wind. He
 *   flings both arms wide to the storm, open-handed, the
 *   elbows easy, commanding the weather and offering himself to it in the
 *   same gesture: never a straight arm with a flat hand.
 * - The Fool, the kit's 'fool', is with him from the first ("Enter Lear and
 *   Fool") and begs him to go in: "Good nuncle, in". He crouches against the
 *   King's gown on the side away from the wind, holding the back of it in
 *   both hands, and looks up at him.
 * - Kent is not drawn: he comes in later in the scene, after "I will say
 *   nothing".
 *
 * Hardship, not injury: the storm is in the sky, the rain and the wind, and
 * nothing in the panel is hurt. Lear's madness is not drawn as madness: his
 * face is the kit's, steady, lifted to the sky. Nothing is taken from a film
 * or stage production.
 *
 * Seed: 1001 (the sky, the cloud, the rain and the heath).
 */

const W = 860
const H = 340
/** The far edge of the heath. */
const HORIZON = 236
/** Where the thunderbolt strikes the oak, far off on the right. */
const OAK: Pt = [744, HORIZON]

/** Where Lear stands, on the top of the hummock. */
const LEAR_AT: Pt = [336, 268]
/**
 * Locks of his white hair blown back from the back of his head, in his own
 * frame: "tears his white hair, Which the impetuous blasts with eyeless rage,
 * Catch in their fury" (3.1). Tapered ribbons streaming to the left.
 */
const HAIR_BLOWN = (() => {
  const locks: [number, number, number, number, number][] = [
    [-6, -167, -30, -174, 2.4],
    [-9, -162, -38, -166, 3],
    [-11, -156, -42, -158, 3.2],
    [-12, -150, -44, -149, 3.2],
    [-12, -144, -40, -140, 3],
    [-11, -139, -36, -131, 2.8],
    [-9, -134, -30, -124, 2.4],
  ]
  return locks
    .map(([x0, y0, x1, y1, w], i) =>
      ribbon(
        Array.from({ length: 11 }, (_, k): Pt => {
          const t = k / 10
          return [x0 + (x1 - x0) * t, y0 + (y1 - y0) * t + Math.sin(t * 7 + i * 1.3) * 1.8 * t]
        }),
        w,
        0.6,
      ),
    )
    .join('')
})()

/** The ground line: the heath rising to a low hummock where Lear stands. */
const groundAt = (x: number) =>
  286 - 24 * Math.exp(-(((x - 330) / 150) ** 2)) + 3 * Math.sin(x / 37)

const skyLight = (x: number, y: number) =>
  clamp(
    Math.max(
      1 - Math.hypot((x - 700) * 0.55, (y - 120) * 0.9) / 300,
      0.55 - Math.hypot((x - 330) * 0.7, y - 90) / 360,
    ),
    0.04,
  )

type Marks = {
  sky: string
  clouds: string
  rain: string
  land: string
  heath: string[]
  tufts: string
  bolt: string
  branch: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(1001)
  const sky = gougeField(r, { x0: 0, x1: W, y0: 6, y1: HORIZON }, skyLight, {
    spacing: 5.6,
    len: [30, 110],
    gap: [6, 20],
    max: 4.6,
  })
  // Cloud banks driven in from the right, cut back into the lit sky in ink.
  let clouds = ''
  for (let k = 0; k < 9; k++) {
    const y = 18 + k * 22 + between(r, -5, 5)
    const x0 = between(r, -60, 600)
    clouds += ribbon(
      wave(
        x0,
        x0 + between(r, 200, 380),
        y,
        between(r, 3, 8),
        between(r, 80, 140),
        between(r, 0, 6),
        26,
      ),
      between(r, 4, 8),
      0.8,
    )
  }
  // The rain, slanting down from the right on the wind.
  let rain = ''
  for (let i = 0; i < 150; i++) {
    const x = between(r, 0, W + 120)
    const y = between(r, 0, H)
    const len = between(r, 12, 30)
    rain += `M${n(x)} ${n(y)}l${n(-len * 0.45)} ${n(len)}`
  }
  // The far heath, dark under the storm, lit only where the flash falls.
  let land = ''
  for (let y = HORIZON + 3; y < 300; y += 3 + (y - HORIZON) * 0.08) {
    let x = between(r, -20, 0)
    while (x < W) {
      const len = between(r, 16, 60)
      const L = clamp(0.8 - Math.abs(x - OAK[0]) / 340) * 0.9
      if (r() < 0.15 + L * 0.85)
        land += gouge(x, y, x + len, y + between(r, -0.4, 0.4), 0.3 + L * 1.6)
      x += len + between(r, 4, 18)
    }
  }
  // The near heath: rows of ink strokes on pale ground, bent with the wind.
  const heath = ['', '', '']
  for (let y = 252; y < H; y += 4.2) {
    let x = between(r, -30, 0)
    while (x < W) {
      const len = between(r, 14, 50)
      if (y > groundAt(x) + 2) {
        const d = clamp((y - 250) / 100 + between(r, -0.2, 0.2))
        const k = Math.min(2, Math.floor(d * 3))
        if (r() < 0.35 + d * 0.5) heath[k] += `M${n(x)} ${n(y + between(r, -0.6, 0.6))}h${n(len)}`
      }
      x += len + between(r, 6, 22)
    }
  }
  // Tufts of heather and gorse along the ground line, flattened to the left.
  let tufts = ''
  for (let x = 4; x < W; x += between(r, 9, 22)) {
    const y = groundAt(x)
    for (let k = 0; k < 4; k++)
      tufts += `M${n(x + k * 2)} ${n(y + 1)}q${n(-4 - k)} ${n(-4 - k * 0.6)} ${n(-9 - k * 2)} ${n(-6 - k)}`
  }
  const bolt = `M612 0L640 46L626 50L664 112L652 116L702 176L692 180L${OAK[0]} ${OAK[1] - 30}`
  const branch = 'M664 112L700 120L712 140M626 50L586 70L574 96'
  cached = { sky, clouds, rain, land, heath, tufts, bolt, branch }
  return cached
}

/**
 * The oak on the skyline, cleft by the thunderbolt and burning:
 * "Vaunt-couriers to oak-cleaving thunderbolts" (3.2). Its two halves lean
 * apart from the split, bare (the season is winter's end: "Winter's not gone
 * yet", 2.4), and the fire, the one red in the panel, rises from the split.
 */
const OAK_LIMBS: [string, number][] = (() => {
  const [x, y] = OAK
  const p = (pts: [number, number][]) =>
    'M' + pts.map(([a, b]) => `${n(x + a)} ${n(y + b)}`).join('L')
  return [
    [
      p([
        [0, 2],
        [0, -20],
      ]),
      11,
    ],
    [
      p([
        [-3, -18],
        [-12, -40],
        [-22, -56],
      ]) +
        p([
          [3, -18],
          [11, -38],
          [20, -52],
        ]),
      6,
    ],
    [
      p([
        [-12, -40],
        [-24, -44],
      ]) +
        p([
          [-22, -56],
          [-32, -62],
        ]) +
        p([
          [-22, -56],
          [-22, -70],
        ]) +
        p([
          [11, -38],
          [24, -40],
        ]) +
        p([
          [20, -52],
          [30, -56],
        ]) +
        p([
          [20, -52],
          [18, -66],
        ]),
      3.2,
    ],
    [
      p([
        [-32, -62],
        [-38, -60],
      ]) +
        p([
          [-22, -70],
          [-27, -76],
        ]) +
        p([
          [-24, -44],
          [-30, -50],
        ]) +
        p([
          [30, -56],
          [36, -62],
        ]) +
        p([
          [18, -66],
          [23, -73],
        ]) +
        p([
          [24, -40],
          [30, -45],
        ]),
      1.6,
    ],
  ]
})()
/** Flames from the split, as the pilot cuts a flame: a teardrop, here leaning downwind (left). */
const FLAMES = (() => {
  const [x, y] = OAK
  const flame = (a: number, b: number, base: number, tip: [number, number]) => {
    const [tx, ty] = tip
    return (
      `M${n(x + a)} ${n(y + base)}C${n(x + a - 3)} ${n(y + base - 10)} ${n(x + tx + 5)} ${n(y + ty + 14)} ${n(x + tx)} ${n(y + ty)}` +
      `C${n(x + tx + 9)} ${n(y + ty + 12)} ${n(x + b + 4)} ${n(y + base - 10)} ${n(x + b)} ${n(y + base)}Z`
    )
  }
  return [
    flame(-7, 7, -18, [-12, -64]),
    flame(-12, -3, -26, [-22, -50]),
    flame(2, 11, -24, [0, -50]),
  ]
})()

function Oak() {
  return (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      {OAK_LIMBS.map(([d, w]) => (
        <path key={`h${w}`} d={d} stroke={PAPER} strokeWidth={w + 3.2} />
      ))}
      {OAK_LIMBS.map(([d, w]) => (
        <path key={w} d={d} stroke={INK} strokeWidth={w} />
      ))}
      {FLAMES.map((d, i) => (
        <path
          key={d}
          className="lc-flicker"
          style={timing({ dur: 0.6 + i * 0.03, delay: 1.1 + i * 0.1 })}
          d={d}
          fill={RED}
          stroke={INK}
          strokeWidth={1}
        />
      ))}
    </g>
  )
}

function DefyingTheStorm(_: ArtProps) {
  const m = marks()
  const ground =
    `M0 ${H}V${n(groundAt(0))}` +
    Array.from({ length: 44 }, (_, i) => {
      const x = (i + 1) * 20
      return `L${x} ${n(groundAt(x))}`
    }).join('') +
    `V${H}Z`
  return (
    <g className="lc-push" style={timing({ origin: [330, 200], push: 1.03 })}>
      <path d={m.sky} fill={PAPER} />
      <path d={m.clouds} fill={INK} />
      {/* the thunderbolt */}
      <g className="lc-fade-in" style={timing({ delay: 1, dur: 0.3 })}>
        <path
          d={m.bolt + m.branch}
          fill="none"
          stroke={INK}
          strokeWidth={9}
          strokeLinejoin="bevel"
        />
        <path d={m.bolt} fill="none" stroke={PAPER} strokeWidth={4.4} strokeLinejoin="bevel" />
        <path d={m.branch} fill="none" stroke={PAPER} strokeWidth={2.2} strokeLinejoin="bevel" />
      </g>
      {/* the far heath under the storm */}
      <rect x={0} y={HORIZON} width={W} height={60} fill={INK} />
      <path d={m.land} fill={PAPER} />
      <Oak />
      {/* the near heath, the hummock Lear stands on */}
      <path d={ground} fill={PAPER} />
      <g fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.heath[0]} strokeWidth={0.9} />
        <path d={m.heath[1]} strokeWidth={1.7} />
        <path d={m.heath[2]} strokeWidth={2.6} />
      </g>
      <path d={m.tufts} fill="none" stroke={INK} strokeWidth={1.4} strokeLinecap="round" />

      {/* the rain, driven in from the right */}
      <g className="lc-drift-r" style={timing({ dur: 3.2 })}>
        <path d={m.rain} stroke={PAPER} strokeWidth={1.1} strokeLinecap="round" />
      </g>
      {/* Lear, bareheaded, his arms flung wide to the storm */}
      <Person
        pose={{
          look: 'lear',
          mantle: false,
          hem: { front: 12, back: 40 },
          head: { rot: -10 },
          far: {
            pts: [
              [-4, -128],
              [-30, -132],
              [-54, -142],
            ],
            hand: 'open',
            deg: 200,
            spread: 22,
          },
          near: {
            pts: [
              [6, -128],
              [34, -134],
              [58, -146],
            ],
            hand: 'open',
            deg: -22,
            spread: 22,
          },
        }}
        at={LEAR_AT}
        scale={1.16}
      >
        {/* his white hair blown back off his head by the wind */}
        <path d={HAIR_BLOWN} fill={PAPER} stroke={INK} strokeWidth={0.9} strokeLinejoin="round" />
      </Person>
      {/* the Fool, crouched against the King's gown out of the wind, both
          hands holding the back of it */}
      <Person
        pose={{
          look: 'fool',
          head: { rot: -20 },
          body: { neck: [14, -92], hip: [0, -40] },
          legs: {
            far: [
              [-2, -40],
              [14, -26],
              [2, -3],
            ],
            near: [
              [2, -40],
              [20, -30],
              [10, -3],
            ],
          },
          far: {
            pts: [
              [12, -84],
              [24, -74],
              [34, -80],
            ],
            hand: 'grip',
            deg: -6,
          },
          near: {
            pts: [
              [16, -84],
              [28, -78],
              [36, -86],
            ],
            hand: 'grip',
            deg: -12,
          },
        }}
        at={[LEAR_AT[0] - 62, LEAR_AT[1] + 2]}
        scale={1.06}
      />
    </g>
  )
}

export const defyingTheStorm: LinocutArt = { width: W, height: H, Draw: DefyingTheStorm }
