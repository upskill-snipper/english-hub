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
  rng,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { floe, type Floe } from './arctic-kit'
import {
  Figure,
  FUR_CAP,
  FUR_CAP_CUTS,
  FUR_COLLAR,
  FUR_COLLAR_CUTS,
  GRIP_HAND,
  HEAD_WALTON,
  HOLD_CUTS,
  HOLD_HAND,
  WALTON_CUTS,
  furTrim,
  handAt,
  headAt,
  man,
  type P,
} from './people'

/**
 * Letters 1 to 3: "Walton sets out for the Pole", the first moment in the
 * guide's timeline. The moment runs from St Petersburgh to the open sea; the
 * panel is the last of the three letters, written at sea on July 7th, because
 * that is where the voyage is under way. Every detail is from the letters:
 *
 * - "I write a few lines in haste, to say that I am safe, and well advanced
 *   on my voyage" (Letter 3). So Walton holds his letter as he stands at the
 *   bow.
 * - "nor do the floating sheets of ice that continually pass us, indicating
 *   the dangers of the region towards which we are advancing, appear to
 *   dismay them"; "We have already reached a very high latitude; but it is
 *   the height of summer" (Letter 3). So flat sheets of ice float past on a
 *   dark sea.
 * - "the southern gales, which blow us speedily towards those shores which I
 *   so ardently desire to attain" (Letter 3). So the wind is behind the ship
 *   and the sails belly forward, towards the north, which is to the right.
 * - "There, Margaret, the sun is for ever visible; its broad disk just
 *   skirting the horizon, and diffusing a perpetual splendour" (Letter 1): his
 *   dream of the Pole, and what a sailor that far north in July does see. So
 *   the sun sits on the horizon ahead of him, the one thing printed in red,
 *   and its light runs to the ship across the water.
 * - "The cold is not excessive, if you are wrapped in furs,--a dress which I
 *   have already adopted" (Letter 1). So he wears the fur cap and fur-trimmed
 *   greatcoat of every panel (./people.tsx).
 * - "I am about to proceed on a long and difficult voyage" (Letter 1); "I
 *   have hired a vessel" at Archangel (Letter 2). The ship is not described,
 *   so it is a plain square-rigged vessel of the 1790s, seen at the bow: the
 *   foremast with its square sail, the bowsprit and a jib.
 *
 * Walton stands alone at the bow, as the letters have him: "I have no friend,
 * Margaret" (Letter 2). Nothing is taken from a film or stage production.
 * Seeds: 1501 (sky), 1502 (sea), 1503 (ice), 1504 (the sun's rings), 1505
 * (the hull and sails).
 */

const W = 860
const H = 340
/** The horizon, and the sun sitting on it. */
const HZ = 206
const SUN: P = [664, HZ]
const SUN_R = 25

type Marks = {
  sky: string
  sea: string
  rings: string
  floes: (Floe & { delay: number })[]
  hullCuts: string
  sailShade: string
  jibShade: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The sky is paper, streaked with ink that thickens up and away from the
  // sun: a pale polar summer, not a night sky. So these marks are INK.
  const skyDark = (x: number, y: number) =>
    clamp(0.04 + 0.85 * (Math.hypot((x - SUN[0]) * 0.62, (y - HZ) * 1.25) / 560) ** 1.3)
  const sky = gougeField(rng(1501), { x0: 0, x1: W, y0: 8, y1: HZ - 4 }, skyDark, {
    spacing: 7,
    len: [20, 90],
    gap: [10, 40],
    max: 1.5,
  })
  // The sea is dark, lit along the sun's path and a little at the horizon.
  const seaLight = (x: number, y: number) => {
    const t = clamp((y - HZ) / (H - HZ))
    const path = Math.exp(-(((x - SUN[0]) / (16 + 90 * t)) ** 2))
    return clamp(0.34 * (1 - t) + 0.04 + 0.95 * path)
  }
  const sea = gougeField(rng(1502), { x0: 0, x1: W, y0: HZ + 3, y1: H }, seaLight, {
    spacing: 5,
    len: [8, 46],
    gap: [6, 18],
    max: 2.6,
  })
  const rings =
    arcDashes(rng(1504), SUN[0], SUN[1], SUN_R + 9, deg(182), deg(358), [6, 16], [4, 9]) +
    arcDashes(rng(1504), SUN[0], SUN[1], SUN_R + 17, deg(184), deg(356), [8, 20], [6, 12]) +
    arcDashes(rng(1504), SUN[0], SUN[1], SUN_R + 26, deg(186), deg(354), [10, 22], [8, 16])
  const ri = rng(1503)
  const floes = [
    { ...floe(ri, 506, 218, 26, 3.6), delay: 0.2 },
    { ...floe(ri, 786, 215, 36, 3.2), delay: 0.5 },
    { ...floe(ri, 612, 240, 44, 6), delay: 0.1 },
    { ...floe(ri, 812, 262, 30, 6.4), delay: 0.4 },
    { ...floe(ri, 548, 290, 58, 10), delay: 0 },
    { ...floe(ri, 742, 318, 70, 12), delay: 0.3 },
  ]
  const rh = rng(1505)
  let hullCuts = ''
  // Planks along the hull, rising towards the bow.
  for (let k = 0; k < 6; k++) {
    const y0 = 272 + k * 12
    let x = between(rh, -20, 0)
    while (x < 430 - k * 2) {
      const len = between(rh, 60, 150)
      const x2 = Math.min(x + len, 432 - k * 3)
      const lift = (xx: number) => (xx > 290 ? ((xx - 290) / 140) * (16 - k * 1.5) : 0)
      hullCuts += gouge(x, y0 - lift(x), x2, y0 - lift(x2), 1.5 - k * 0.1, between(rh, -0.4, 0.4))
      x = x2 + between(rh, 6, 16)
    }
  }
  // The belly of the square sail and of the jib, shaded in ink hatching.
  let sailShade = ''
  for (let y = 48; y < 196; y += 5.2) {
    const x0 = 30 + (y - 48) * 0.04
    sailShade += gouge(x0, y, x0 + between(rh, 26, 44), y + 1, 0.9)
  }
  let jibShade = ''
  for (let i = 0; i < 14; i++) {
    const t = (i + 0.5) / 14
    const x = 212 + (430 - 212) * t
    const y = 30 + (188 - 30) * t
    jibShade += gouge(x + 6, y - 3, x + between(rh, 30, 60), y - 3 + between(rh, -3, 3), 0.8)
  }
  cached = { sky, sea, rings, floes, hullCuts, sailShade, jibShade }
  return cached
}

/** Walton at the bow, facing north, his letter in one hand, the other on the rail. */
const W_HEAD = { d: HEAD_WALTON, at: [330, 118] as P, scale: 1.3 }
const LETTER_ARM: P[] = [
  [332, 170],
  [340, 204],
  [360, 210],
]
const RAIL_ARM: P[] = [
  [322, 170],
  [330, 204],
  [350, 238],
]
const WALTON = man({
  facing: 1,
  neck: [326, 158],
  hip: [322, 232],
  head: W_HEAD,
  hair: FUR_CAP,
  body: { width: 36, tails: 64, long: true, flare: 6, swing: 3 },
  near: { arm: LETTER_ARM, leg: [], hand: { parts: HOLD_HAND, rot: -30 } },
  far: { arm: RAIL_ARM, leg: [], hand: { parts: GRIP_HAND, rot: 10 } },
  arm: 9,
  feet: false,
})
/** The letter in his hand, stirring in the south wind, with lines of writing. */
const LETTER = 'M362 199L384 191L390 212L368 221Z'
const LETTER_LINES =
  'M366 203L382 197M367.6 207.6L384 201.6M369.2 212.2L385.6 206.2M370.8 216.8L381 213'

function WaltonSetsOut({ uid }: ArtProps) {
  const m = marks()
  const clip = { sky: `${uid}-sky`, sea: `${uid}-sea` }
  const ht = headAt(1, W_HEAD.at, 0, W_HEAD.scale)
  return (
    <>
      <defs>
        <clipPath id={clip.sky}>
          <rect x={0} y={0} width={W} height={HZ} />
        </clipPath>
        <clipPath id={clip.sea}>
          <rect x={0} y={HZ} width={W} height={H - HZ} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [SUN[0], HZ], push: 1.03 })}>
        {/* the polar sky: paper, streaked with ink away from the sun */}
        <rect x={0} y={0} width={W} height={HZ} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        {/* the sun on the horizon, and its rings of light */}
        <g clipPath={`url(#${clip.sky})`}>
          <circle cx={SUN[0]} cy={SUN[1]} r={SUN_R + 4} fill={PAPER} />
          <circle className="lc-glow" cx={SUN[0]} cy={SUN[1]} r={SUN_R} fill={RED} />
        </g>
        <path d={m.rings} fill="none" stroke={INK} strokeWidth={LINE.fine} strokeLinecap="round" />
        {/* the sea, lit along the sun's path */}
        <rect x={0} y={HZ} width={W} height={H - HZ} fill={INK} />
        <g clipPath={`url(#${clip.sea})`}>
          <path d={m.sea} fill={PAPER} />
        </g>
        <rect x={0} y={HZ} width={W} height={1.6} fill={PAPER} />
        {/* the floating sheets of ice, drifting past */}
        {m.floes.map((f, i) => (
          <g key={i} className="lc-drift-r" style={timing({ delay: f.delay })}>
            <path d={f.side} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
            <path d={f.hatch} fill={INK} />
            <path d={f.top} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
          </g>
        ))}

        {/* the foremast, its yard and its square sail bellying forward */}
        <rect x={134} y={0} width={11} height={262} fill={INK} />
        <path
          d="M24 34L262 34C276 80 282 140 270 200C200 212 110 212 32 206C44 150 40 90 24 34Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.bold}
          strokeLinejoin="round"
        />
        <path d={m.sailShade} fill={INK} />
        <path
          d="M84 36C92 90 94 150 88 208M146 36C154 90 156 150 150 210M206 36C214 90 216 150 210 208"
          fill="none"
          stroke={INK}
          strokeWidth={LINE.fine}
        />
        <path d="M8 26H282L280 36H10Z" fill={INK} />
        {/* the shrouds and ratlines down to the rail */}
        <path
          d="M140 8L92 258M140 8L112 258M140 8L176 256M140 8L198 255"
          stroke={INK}
          strokeWidth={LINE.carve}
        />
        <path
          d="M104 218L118 218M100 236L116 236M168 218L182 218M172 236L190 236"
          stroke={INK}
          strokeWidth={LINE.fine}
        />
        {/* the forestay, the jib on it and the bowsprit */}
        <path d="M140 2L604 150" stroke={INK} strokeWidth={LINE.carve} />
        <path
          d="M204 22L592 154C540 160 480 170 432 190C390 140 300 70 204 22Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.bold}
          strokeLinejoin="round"
        />
        <path d={m.jibShade} fill={INK} />
        <path
          d="M300 52L452 180M392 86L500 168M480 116L540 162"
          stroke={INK}
          strokeWidth={LINE.fine}
        />
        <path d="M432 190L418 234" stroke={INK} strokeWidth={LINE.fine} />
        <path d="M404 240L612 148L614 154L410 248Z" fill={INK} />

        {/* Walton, at the bow */}
        <Figure parts={WALTON} halo={2}>
          <g transform={ht}>
            <path d={FUR_COLLAR} fill={INK} stroke={PAPER} strokeWidth={0.8} />
            <path d={FUR_COLLAR_CUTS + FUR_CAP_CUTS + WALTON_CUTS} fill={PAPER} />
          </g>
          <path d={furTrim([338, 170], [344, 250])} fill={PAPER} />
          <path d={gouge(318, 176, 312, 238, 0.9, 1.2)} fill={PAPER} />
        </Figure>
        <path d={LETTER} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
        <path d={LETTER_LINES} stroke={INK} strokeWidth={LINE.hairline} />
        <g transform={handAt(LETTER_ARM, 1, { parts: HOLD_HAND, rot: -30 })}>
          {HOLD_HAND.map((p, i) =>
            p.w ? (
              <path
                key={i}
                d={p.d}
                fill="none"
                stroke={INK}
                strokeWidth={p.w}
                strokeLinecap="round"
              />
            ) : (
              <path key={i} d={p.d} fill={INK} />
            ),
          )}
          <path d={HOLD_CUTS} fill={PAPER} />
        </g>

        {/* the hull at the bow, in front of him, and its rail */}
        <path
          d="M0 262L300 255C350 252 392 246 424 236C438 250 448 280 456 340L0 340Z"
          fill={INK}
        />
        <path d={m.hullCuts} fill={PAPER} />
        <path
          d="M0 259L300 252C350 249 392 243 424 233"
          fill="none"
          stroke={PAPER}
          strokeWidth={3.2}
          strokeLinecap="round"
        />
        <path
          d="M424 236C438 250 448 280 456 340"
          fill="none"
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
      </g>
    </>
  )
}

export const waltonSetsOut: LinocutArt = { width: W, height: H, Draw: WaltonSetsOut }
