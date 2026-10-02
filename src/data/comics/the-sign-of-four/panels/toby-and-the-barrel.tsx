import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  fogBank,
  gouge,
  gougeField,
  n,
  rays,
  rng,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  BOWLER,
  BOWLER_BAND,
  COLLAR,
  Figure,
  GRIP_HAND,
  HEAD_HOLMES,
  HEAD_WATSON,
  HolmesHands,
  LONG_HAND,
  OPEN_HAND,
  TOP_HAT,
  TOP_HAT_BAND,
  Toby,
  gent,
  handAt,
  headAt,
  type P,
  type Part,
} from './people'

/**
 * Chapter 7, "The Episode of the Barrel": "Toby and the trail of creosote",
 * the eighth moment in the guide's timeline. The picture is where the trail
 * ends. Every detail is from the held edition:
 *
 * - "Our course now ran down Nine Elms until we came to Broderick and
 *   Nelson's large timber-yard ... where the sawyers were already at work.
 *   On the dog raced through sawdust and shavings, down an alley, round a
 *   passage, between two wood-piles". So the scene is the alley between two
 *   stacks of sawn timber, the ground pale with sawdust and curled shavings.
 * - "and finally, with a triumphant yelp, sprang upon a large barrel which
 *   still stood upon the hand-trolley on which it had been brought. With
 *   lolling tongue and blinking eyes, Toby stood upon the cask, looking from
 *   one to the other of us for some sign of appreciation." So Toby stands on
 *   top of the upright barrel on its two-wheeled trolley, between the two
 *   men, his tongue out and his eyes screwed shut, turned towards Holmes.
 *   He is drawn from Toby in ./people.tsx, as the text describes him.
 * - "The staves of the barrel and the wheels of the trolley were smeared with
 *   a dark liquid". The smears are ink, run down the pale staves and over
 *   the wheels. (Never the spot colour: a red run down a barrel would read as
 *   blood.)
 * - "Holmes then threw the handkerchief to a distance, fastened a stout cord
 *   to the mongrel's collar". So Holmes still holds the cord, in his white
 *   hand.
 * - "Sherlock Holmes and I looked blankly at each other, and then burst
 *   simultaneously into an uncontrollable fit of laughter." So Holmes is
 *   doubled over, a hand on his knee, and Watson thrown back on his stick,
 *   both with their eyes screwed shut and their mouths wide open (cut as a
 *   notch at the lips, with no colour near the mouth).
 * - Out of doors Holmes wears the plain top hat and Watson the bowler of the
 *   kit; Watson has his stick ("I have my stick"), and leans on it: "a
 *   six-mile limp for a half-pay officer with a damaged tendo Achillis".
 * - The morning: "The east had been gradually whitening" at the start of the
 *   trail, and "Now the red rim of the sun pushes itself over the London
 *   cloud-bank." By Nine Elms the sun is up over the cloud-bank and the roofs
 *   beyond the yard, and it is the spot colour, kept well away from every
 *   face and from the dog's mouth (a red disc behind an open mouth would
 *   read as blood).
 *
 * Seeds: 801 (the sky), 802 and 806 (the timber), 803 (the sawdust), 804 (the
 * cloud-bank), 805 (the sun's rays).
 */

const W = 860
const H = 340
/** Where the alley's floor meets the foot of the far yard. */
const GROUND = 246
/** The sun, risen over the cloud-bank. */
const SUN: P = [252, 60]

type Marks = {
  sky: string
  sunRays: string
  cloud: { mass: string; lines: string }
  pileL: string
  pileR: string
  sawdust: string
  shavings: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = gougeField(
    rng(801),
    { x0: 0, x1: W, y0: 6, y1: 170 },
    (x, y) => clamp(0.32 + (y - 10) / 280 + (1 - Math.hypot(x - SUN[0], y - SUN[1]) / 240) * 0.6),
    { spacing: 5.6 },
  )
  const sunRays = rays(rng(805), SUN[0], SUN[1], { from: 30, to: 110, every: 6, width: 2.6 })
  const cloud = fogBank(rng(804), 0, W, 136, 178, 5, 0)
  // Each stack is seen side on: planks laid flat, one layer on another. The
  // paper cuts are the lit upper edges of the planks.
  const pile = (x0: number, x1: number, top: number, seed: number, face: 1 | -1) => {
    const r = rng(seed)
    let d = ''
    for (let y = top + 8; y < GROUND + 20; y += 11) {
      let x = x0 + between(r, -10, 0)
      while (x < x1) {
        const len = between(r, 60, 180)
        const lit = clamp(face > 0 ? (x - x0) / (x1 - x0) : (x1 - x) / (x1 - x0))
        d += gouge(x, y, Math.min(x + len, x1), y + between(r, -0.4, 0.4), 0.8 + lit * 1.6)
        x += len + between(r, 3, 8)
      }
    }
    return d
  }
  const pileL = pile(0, 214, 40, 802, 1)
  const pileR = pile(664, W, 52, 806, -1)
  // Sawdust: fine cuts across the lit ground, thicker towards the reader.
  const r = rng(803)
  let sawdust = ''
  for (let y = GROUND + 6; y < H; y += 5.5) {
    let x = between(r, -30, 0)
    while (x < W) {
      const len = between(r, 8, 30)
      if (r() < 0.55)
        sawdust += gouge(x, y, x + len, y + between(r, -0.8, 0.8), 0.4 + ((y - GROUND) / 94) * 0.9)
      x += len + between(r, 10, 34)
    }
  }
  let shavings = ''
  for (let k = 0; k < 26; k++) {
    const x = between(r, 20, W - 20)
    const y = between(r, GROUND + 18, H - 16)
    const s = between(r, 4, 7)
    shavings += `M${n(x)} ${n(y)}c${n(s)} ${n(-s)} ${n(s * 2)} ${n(s * 0.2)} ${n(s * 0.8)} ${n(s)}c${n(-s * 0.8)} ${n(s * 0.6)} ${n(-s * 1.6)} ${n(-s * 0.2)} ${n(-s * 0.6)} ${n(-s * 0.8)}`
  }
  cached = { sky, sunRays, cloud, pileL, pileR, sawdust, shavings }
  return cached
}

/** The barrel on its hand-trolley: centre-bottom of the barrel at BARREL. */
const BARREL = { x: 430, base: 250, w: 78, h: 96 }

function Barrel() {
  const { x, base, w, h } = BARREL
  const top = base - h
  const bulge = 7
  const L = x - w / 2
  const R = x + w / 2
  const body = `M${L} ${top}C${L - bulge} ${top + h * 0.33} ${L - bulge} ${top + h * 0.67} ${L} ${base}H${R}C${R + bulge} ${top + h * 0.67} ${R + bulge} ${top + h * 0.33} ${R} ${top}Z`
  // Staves: the joints between them, curving with the belly.
  const staves = [-0.62, -0.3, 0, 0.3, 0.62]
    .map((f) => {
      const xs = x + (f * w) / 2
      const b = f * bulge * 0.9
      return `M${n(xs)} ${top}C${n(xs + b)} ${n(top + h * 0.33)} ${n(xs + b)} ${n(top + h * 0.67)} ${n(xs)} ${base}`
    })
    .join('')
  const hoop = (y: number, grow: number) =>
    `M${n(L - grow)} ${y}Q${x} ${n(y + 6)} ${n(R + grow)} ${y}`
  // The dark smears: runs of creosote from the rim down the staves.
  const smears =
    `M${L + 6} ${top + 2}C${L + 4} ${top + 30} ${L + 10} ${top + 44} ${L + 7} ${top + 66}C${L + 12} ${top + 52} ${L + 16} ${top + 30} ${L + 16} ${top + 2}Z` +
    `M${x + 8} ${top + 3}C${x + 6} ${top + 22} ${x + 12} ${top + 34} ${x + 10} ${top + 50}C${x + 16} ${top + 38} ${x + 18} ${top + 20} ${x + 18} ${top + 3}Z` +
    `M${R - 14} ${top + 50}C${R - 16} ${top + 64} ${R - 10} ${top + 78} ${R - 12} ${base - 4}C${R - 6} ${top + 76} ${R - 4} ${top + 62} ${R - 6} ${top + 48}Z`
  return (
    <g>
      {/* the trolley: a flat bed, two wheels, handles resting on the ground */}
      <path
        d={`M${L - 16} ${base}H${R + 20}V${base + 8}H${L - 16}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path
        d={`M${R + 16} ${base + 4}L${R + 86} ${base + 52}`}
        stroke={PAPER}
        strokeWidth={9}
        strokeLinecap="round"
      />
      <path
        d={`M${R + 16} ${base + 4}L${R + 86} ${base + 52}`}
        stroke={INK}
        strokeWidth={5.6}
        strokeLinecap="round"
      />
      {[L - 2, R + 4].map((cx) => (
        <g key={cx}>
          <circle
            cx={cx}
            cy={base + 26}
            r={20}
            fill={INK}
            stroke={PAPER}
            strokeWidth={LINE.carve}
          />
          <circle
            cx={cx}
            cy={base + 26}
            r={14}
            fill="none"
            stroke={PAPER}
            strokeWidth={LINE.fine}
          />
          <path
            d={`M${cx - 14} ${base + 26}H${cx + 14}M${cx} ${base + 12}V${base + 40}M${cx - 10} ${base + 16}L${cx + 10} ${base + 36}M${cx + 10} ${base + 16}L${cx - 10} ${base + 36}`}
            stroke={PAPER}
            strokeWidth={1.4}
          />
          <circle cx={cx} cy={base + 26} r={3.4} fill={PAPER} />
          {/* the creosote smeared over the wheel */}
          <path
            d={`M${cx - 18} ${base + 18}C${cx - 10} ${base + 14} ${cx - 2} ${base + 22} ${cx - 6} ${base + 30}C${cx - 12} ${base + 34} ${cx - 18} ${base + 30} ${cx - 18} ${base + 18}Z`}
            fill={INK}
          />
        </g>
      ))}
      {/* the barrel, lit, its staves and hoops cut in ink */}
      <path d={body} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} strokeLinejoin="round" />
      <path d={staves} fill="none" stroke={INK} strokeWidth={LINE.fine} />
      <path
        d={hoop(top + 10, 2) + hoop(top + 28, 5.5) + hoop(base - 28, 5.5) + hoop(base - 10, 2)}
        fill="none"
        stroke={INK}
        strokeWidth={4}
      />
      <path d={smears} fill={INK} />
      <ellipse
        cx={x}
        cy={top}
        rx={w / 2}
        ry={6}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
    </g>
  )
}

// ── THE TWO MEN, LAUGHING ───────────────────────────────────────────────────
// Their heads are the kit's; only the features are cut for laughter: the eyes
// screwed shut, a crease at the cheek, and the mouth open, cut as a notch at
// the lips so the light shows through. In the frames of HEAD_HOLMES and
// HEAD_WATSON. Fill with PAPER; stroke the *_EYES in PAPER.

const HOLMES_LAUGH =
  gouge(5, -8.8, 15, -8, 1.25, 0.3) +
  gouge(9.6, 2.2, 12, 9.6, 0.55, -0.6) +
  'M18.4 8.6L9.6 12.6L18 17.4Z' +
  gouge(4.6, -2.6, 6.8, -1.2, 0.4) +
  gouge(4.8, 0, 7, -0.4, 0.4) +
  gouge(-5.5, -1, -4.5, 7, 0.7, -1.4)
const HOLMES_LAUGH_EYES = 'M7.6 -3Q10.4 -6.4 13.6 -3.4'
const WATSON_LAUGH =
  gouge(5.6, -8.8, 14.2, -8.2, 1) +
  gouge(9.2, 2, 11, 8.6, 0.5, -0.5) +
  'M18.2 6.8L9.6 10.8L18.2 15.6Z' +
  gouge(3.8, -2.8, 6, -1.4, 0.4) +
  gouge(4, -0.2, 6.2, -0.6, 0.4) +
  gouge(-6, -1, -5, 7, 0.7, -1.4)
const WATSON_LAUGH_EYES = 'M6.8 -3.2Q9.8 -6.6 13 -3.6'

/**
 * Holmes, on the left, doubled over with laughter: bent forward from the hips,
 * his head down, his far hand on his knee, the cord still in his white hand.
 */
const HOL_HEAD = { d: HEAD_HOLMES, at: [330, 134] as P, rot: 22, scale: 1.45 }
const HOL_NEAR: P[] = [
  [314, 176],
  [330, 204],
  [352, 206],
]
const HOL_FAR: P[] = [
  [308, 176],
  [312, 210],
  [318, 242],
]
const HOL_HANDS = [
  { arm: HOL_NEAR, hand: { parts: GRIP_HAND, scale: 1, rot: 0 } },
  { arm: HOL_FAR, hand: { parts: LONG_HAND, scale: 1.05, rot: 10 } },
]
const HOLMES: Part[] = gent({
  facing: 1,
  neck: [316, 168],
  hip: [292, 232],
  head: HOL_HEAD,
  hat: TOP_HAT,
  body: { width: 28, hem: 50, flare: 8 },
  arm: 8.8,
  leg: 9.8,
  near: {
    arm: HOL_NEAR,
    leg: [
      [296, 232],
      [318, 272],
      [314, 318],
    ],
  },
  far: {
    arm: HOL_FAR,
    leg: [
      [290, 232],
      [298, 274],
      [284, 316],
    ],
  },
})

/** Watson, on the right, thrown back with laughter, leaning on his stick. */
const WAT_HEAD = { d: HEAD_WATSON, at: [620, 108] as P, rot: 34, scale: 1.45 }
const WAT_NEAR: P[] = [
  [596, 152],
  [584, 186],
  [570, 210],
]
const WATSON: Part[] = [
  ...gent({
    facing: -1,
    neck: [600, 144],
    hip: [590, 228],
    head: WAT_HEAD,
    hat: BOWLER,
    body: { width: 36, hem: 52, flare: 8 },
    arm: 9.6,
    leg: 10.6,
    near: {
      arm: WAT_NEAR,
      leg: [
        [588, 228],
        [578, 274],
        [570, 320],
      ],
    },
    far: {
      arm: [
        [604, 152],
        [616, 184],
        [620, 214],
      ],
      leg: [
        [594, 228],
        [604, 274],
        [612, 318],
      ],
      hand: { parts: OPEN_HAND, scale: 0.95, rot: -6 },
    },
  }),
  // "my heaviest stick", planted on the ground and leant on
  { d: 'M568 204L552 320', w: 4.4 },
  ...GRIP_HAND.map((q) => ({
    ...q,
    t: handAt(WAT_NEAR, -1, { parts: GRIP_HAND, rot: 0 }),
  })),
]

/** Toby on the cask, faced towards Holmes; the ring on his collar, for the cord. */
const TOBY_AT: P = [BARREL.x - 2, BARREL.base - BARREL.h]
const TOBY_SCALE = 0.92
const TOBY_RING: P = [TOBY_AT[0] - 24 * TOBY_SCALE, TOBY_AT[1] - 76 * TOBY_SCALE]

function TobyAndTheBarrel({ uid }: ArtProps) {
  const m = marks()
  const hh = headAt(1, HOL_HEAD.at, HOL_HEAD.rot, HOL_HEAD.scale)
  const wh = headAt(-1, WAT_HEAD.at, WAT_HEAD.rot, WAT_HEAD.scale)
  const holHand = HOL_NEAR[HOL_NEAR.length - 1]
  const cord = `M${n(holHand[0] + 8)} ${n(holHand[1] - 1)}Q${n(384)} ${n(170)} ${n(TOBY_RING[0])} ${n(TOBY_RING[1])}`
  return (
    <>
      <g className="lc-push" style={timing({ origin: [430, 200], push: 1.03 })}>
        {/* the morning sky over the yard, the sun up over the cloud-bank */}
        <path d={m.sky} fill={PAPER} />
        <path d={m.sunRays} fill={PAPER} />
        <circle cx={SUN[0]} cy={SUN[1]} r={24} fill={PAPER} />
        <circle cx={SUN[0]} cy={SUN[1]} r={18} fill={RED} />
        <g className="lc-drift">
          <path d={m.cloud.mass} fill={PAPER} />
          <path d={m.cloud.lines} fill={INK} />
        </g>
        {/* roofs and chimneys of Nine Elms beyond the yard wall */}
        <path
          d="M214 190V164L240 150L266 164V180H380V172L392 168V190ZM480 190V168H500V156H508V168H540V150L566 164V176H600V160H614V150H622V160H664V190Z"
          fill={INK}
        />
        <rect x={204} y={186} width={470} height={GROUND - 186} fill={INK} />
        <path d={gouge(204, 196, 674, 196, 1.2) + gouge(204, 222, 674, 222, 1)} fill={PAPER} />

        {/* the ground, pale with sawdust and curled shavings */}
        <rect x={0} y={GROUND} width={W} height={H - GROUND} fill={PAPER} />
        <path d={m.sawdust} fill={INK} />
        <path d={m.shavings} fill="none" stroke={INK} strokeWidth={1.1} strokeLinecap="round" />

        {/* the two wood-piles */}
        <path d={`M0 40H214V${GROUND + 24}H0Z`} fill={INK} />
        <path d={m.pileL} fill={PAPER} />
        <path d={`M664 52H${W}V${GROUND + 24}H664Z`} fill={INK} />
        <path d={m.pileR} fill={PAPER} />
        <path
          d={`M214 40V${GROUND + 24}M664 52V${GROUND + 24}`}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />

        <Barrel />

        {/* Toby on the cask, tongue out, eyes shut */}
        <Toby pose="stand" at={TOBY_AT} facing={-1} scale={TOBY_SCALE} />
        {/* the stout cord from his collar to Holmes's hand */}
        <path d={cord} fill="none" stroke={PAPER} strokeWidth={3.8} strokeLinecap="round" />
        <path d={cord} fill="none" stroke={INK} strokeWidth={1.8} strokeLinecap="round" />

        {/* Holmes, laughing */}
        <Figure parts={HOLMES}>
          <g transform={hh}>
            <path d={HOLMES_LAUGH + COLLAR + TOP_HAT_BAND} fill={PAPER} />
            <path
              d={HOLMES_LAUGH_EYES}
              fill="none"
              stroke={PAPER}
              strokeWidth={1.4}
              strokeLinecap="round"
            />
          </g>
          <path d={gouge(310, 182, 296, 226, 0.9, 1)} fill={PAPER} />
        </Figure>
        <HolmesHands facing={1} arms={HOL_HANDS} />

        {/* Watson, laughing, on his stick */}
        <Figure parts={WATSON}>
          <g transform={wh}>
            <path d={WATSON_LAUGH + COLLAR + BOWLER_BAND} fill={PAPER} />
            <path
              d={WATSON_LAUGH_EYES}
              fill="none"
              stroke={PAPER}
              strokeWidth={1.4}
              strokeLinecap="round"
            />
          </g>
          <path d={gouge(598, 164, 590, 222, 1, -1)} fill={PAPER} />
        </Figure>
      </g>
    </>
  )
}

export const tobyAndTheBarrel: LinocutArt = { width: W, height: H, Draw: TobyAndTheBarrel }
