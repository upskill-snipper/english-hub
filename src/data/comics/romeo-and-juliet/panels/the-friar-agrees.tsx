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
  wave,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  arm,
  CutFigure,
  doublet,
  EYE,
  gown,
  HEAD_MAN,
  headAt,
  limb,
  ROMEO_CURLS,
  ROMEO_HAIR,
  sheathed,
  shoe,
  TONSURE,
  TONSURE_STRANDS,
  type P,
  type Piece,
} from './verona-kit'

/**
 * Act 2, Scene 3: "The Friar agrees", the seventh moment in the guide's
 * timeline. Every detail is from the scene in the held edition (Project
 * Gutenberg #1513, src/data/full-texts/romeo-and-juliet.ts):
 *
 * - "Friar Lawrence's Cell. Enter Friar Lawrence with a basket." "I must
 *   upfill this osier cage of ours With baleful weeds and precious-juiced
 *   flowers." So he is out at the door of his cell among his herbs, and his
 *   willow basket, half full of them, stands on the ground behind him.
 * - "The grey-ey'd morn smiles on the frowning night, Chequering the eastern
 *   clouds with streaks of light; And fleckled darkness like a drunkard
 *   reels". "Now, ere the sun advance his burning eye". So it is the moment
 *   before sunrise: the sky still dark overhead, the grey light spreading up
 *   from the horizon, long bars of cloud across it streaked with light, and
 *   no sun yet.
 * - "Within the infant rind of this weak flower Poison hath residence, and
 *   medicine power". So he holds up a single small flower on his open palm,
 *   and it is the spot colour: the healing and the poison that the play's
 *   ending turns on.
 * - "Care keeps his watch in every old man's eye", "mine ancient ears": he is
 *   old, a little bowed, his tonsure white. "Holy Saint Francis!": a friar's
 *   habit, the hood down, a knotted cord.
 * - "Our Romeo hath not been in bed tonight." "That thou consent to marry us
 *   today." "O let us hence; I stand on sudden haste." So Romeo, still in last
 *   night's doublet and cloak, has hurried here and leans towards the Friar,
 *   one hand on his heart and the other held out, palm up, asking.
 *
 * Romeo and the Friar are cut as in the other panels of moments 6 to 10
 * (./verona-kit.tsx). Nothing is taken from a film or stage production.
 * Seeds: 701 (sky), 702 (clouds), 703 (ground), 704 (cell wall), 705 (rays),
 * 706 (herb beds), 707 (the dark flecks in the dawn).
 */

const W = 860
const H = 340
const HORIZON = 234
/** Where the light rises from, below the horizon between the two men. */
const DAWN: P = [440, HORIZON + 30]
/**
 * The grey light of the morning, spreading up from the horizon: its top edge
 * at x, highest between the two men and falling away to either side.
 */
const glowTop = (x: number) =>
  HORIZON - (HORIZON - 112) * Math.max(0, 1 - ((x - 440) / 400) ** 2) ** 0.9
const GLOW = (() => {
  let d = `M40 ${HORIZON}`
  for (let x = 40; x <= 840; x += 10)
    d += `L${x} ${n(glowTop(x) + 2.2 * Math.sin(x / 23) + 1.4 * Math.sin(x / 9))}`
  return d + `L840 ${HORIZON}Z`
})()

type Marks = {
  sky: string
  flecks: string
  clouds: { body: string; lit: string }
  ground: string
  wall: string
  roof: string
  dawn: string
  beds: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // Night overhead, lightening towards the glow.
  const sky = gougeField(
    rng(701),
    { x0: 0, x1: W, y0: 4, y1: HORIZON },
    (x, y) => Math.max(clamp(1 - (glowTop(x) - y) / 110) ** 1.6, 0.03),
    { spacing: 7, len: [50, 150], gap: [8, 26], max: 3.6 },
  )
  // "fleckled darkness like a drunkard reels": ink flecks at the top of the
  // glow, thinning towards the horizon.
  const flecks = gougeField(
    rng(707),
    { x0: 40, x1: 840, y0: 108, y1: HORIZON - 24 },
    (x, y) => clamp(0.75 - (y - glowTop(x)) / 70),
    { spacing: 6, len: [18, 70], gap: [6, 20], max: 2.6 },
  )

  // "Chequering the eastern clouds with streaks of light": long bars of
  // cloud across the glow, their undersides cut with streaks of light.
  const c = rng(702)
  let body = ''
  let lit = ''
  const bars: [number, number, number, number][] = [
    [250, 430, 170, 8],
    [500, 760, 186, 10],
    [300, 560, 206, 7],
    [560, 820, 142, 7],
  ]
  for (const [x0, x1, y, h] of bars) {
    body += ribbon(wave(x0, x1, y, 2.4, 140, between(c, 0, 6), 24), h, 0.5)
    for (let k = 0; k < 2; k++) {
      const a = between(c, x0 + 24, x0 + (x1 - x0) * 0.35)
      const b = between(c, a + 50, x1 - 24)
      lit += gouge(a, y + 1 + k * 2, b, y + 1.4 + k * 2, 1.6 - k * 0.5)
    }
  }

  const dawn = rays(rng(705), DAWN[0], DAWN[1], { from: 150, to: 290, every: 7, width: 3.2 })

  // The garden: dark earth, lit along the path where the two men stand.
  const ground = gougeField(
    rng(703),
    { x0: 0, x1: W, y0: HORIZON + 3, y1: H },
    (x, y) => clamp(0.5 - (y - HORIZON) / 190 + Math.max(0, 1 - Math.abs(x - 430) / 170) * 0.35),
    { spacing: 7, len: [16, 54], gap: [5, 16], max: 2.6 },
  )
  // Herb beds in the foreground: rows of little plants, cut in paper.
  let beds = ''
  const b = rng(706)
  for (const [x0, x1, y0] of [
    [0, 236, 300],
    [620, 860, 296],
  ]) {
    for (let y = y0; y < H + 6; y += 18) {
      for (let x = x0 + between(b, 0, 10); x < x1; x += between(b, 19, 27)) {
        const h = between(b, 12, 20)
        beds += gouge(x, y, x + between(b, -2, 2), y - h, 1.6)
        beds += gouge(x, y - h * 0.45, x - 7, y - h * 0.75, 2.6, 0.8)
        beds += gouge(x, y - h * 0.6, x + 7, y - h * 0.95, 2.6, -0.8)
      }
    }
  }

  // The cell: a small stone house, its wall catching the light at the end.
  const wall = gougeField(
    rng(704),
    { x0: 20, x1: 244, y0: 136, y1: 272 },
    (x) => clamp(0.1 + (x - 150) / 300),
    { spacing: 7, len: [12, 40], gap: [4, 12], max: 2.2 },
  )
  let roof = ''
  for (let y = 100; y < 128; y += 7) {
    const half = 30 + (y - 86) * 3.2
    roof += gouge(132 - half, y, 132 + half, y, 1.8)
  }

  cached = { sky, flecks, clouds: { body, lit }, ground, wall, roof, dawn, beds }
  return cached
}

// ── Friar Lawrence, facing right, a little bowed ─────────────────────────────

const F_NECK: P = [340, 158]
const F_WAIST: P = [330, 226]
const F_HEAD = { at: [350, 138] as P, rot: 8 }
/** The hood thrown back on his shoulders. */
const COWL = `M${F_NECK[0] - 2} ${F_NECK[1] - 4}C${F_NECK[0] - 18} ${F_NECK[1] - 6} ${F_NECK[0] - 26} ${F_NECK[1] + 8} ${F_NECK[0] - 22} ${F_NECK[1] + 24}C${F_NECK[0] - 12} ${F_NECK[1] + 28} ${F_NECK[0]} ${F_NECK[1] + 20} ${F_NECK[0] + 6} ${F_NECK[1] + 10}Z`
const F_WRIST: P = [372, 190]
const FRIAR: Piece[] = [
  { d: gown(F_NECK, F_WAIST, 304, 1, { shoulder: 32, waistW: 28, front: 30, back: 34 }) },
  shoe([346, 305], 1),
  // his far arm, in its wide sleeve, hanging at his side
  {
    d: limb([
      [330, 170],
      [322, 206],
      [326, 236],
    ]),
    w: 12,
  },
  { d: HEAD_MAN, t: headAt(1, F_HEAD.at, F_HEAD.rot) },
  { d: COWL },
  // his near arm: the wide sleeve to the elbow, the palm turned up
  arm([[342, 170], [350, 204], F_WRIST], -20, { w: 11, sep: 1.5, size: 15, spread: 14, thumb: -1 }),
]
/** The cord at his waist with its knotted end, the folds of the habit, the cowl's edge. */
const FRIAR_CUTS =
  gouge(312, 227, 348, 224, 2.6) +
  ribbon(
    [
      [318, 228],
      [316, 244],
      [317, 260],
      [315, 278],
    ],
    3.4,
    0.3,
    false,
  ) +
  [242, 258].map((y) => `M${n(312.6)} ${y}h6.4l-0.8 4.6h-4.8Z`).join('') +
  gouge(318, 240, 306, 298, 2, 0.6) +
  gouge(330, 246, 326, 300, 1.8) +
  gouge(356, 250, 366, 298, 1.8, -0.6) +
  gouge(F_NECK[0] - 22, F_NECK[1] + 21, F_NECK[0] + 3, F_NECK[1] + 13, 1.8, 1.4)

/** The flower: five red petals round a paper heart, on a short stem across his palm. */
const FLOWER: P = [388, 174]
const PETALS = Array.from({ length: 5 }, (_, i) => {
  const a = (i / 5) * Math.PI * 2 - Math.PI / 2
  const cx = FLOWER[0] + Math.cos(a) * 5.4
  const cy = FLOWER[1] + Math.sin(a) * 5.4
  return `M${n(cx - 4)} ${n(cy)}a4 4 0 1 0 8 0a4 4 0 1 0 -8 0Z`
}).join('')

// ── Romeo, facing left, leaning in ───────────────────────────────────────────

const R_NECK: P = [522, 166]
const R_HIP: P = [529, 236]
const R_HEAD = { at: [515, 144] as P, rot: 4 }
const R_SWORD = sheathed([531, 230], -1, 76)
const ROMEO: Piece[] = [
  // his cloak, swinging behind him as he comes to a stop
  {
    d: 'M530 162C542 170 552 188 558 208C562 224 564 238 564 252L544 252C542 234 538 214 532 196Z',
  },
  {
    d: limb([
      [533, 236],
      [542, 270],
      [548, 303],
    ]),
    w: 9,
  },
  shoe([549, 304], -1),
  R_SWORD.scabbard,
  { d: limb([R_NECK, R_HIP]), w: 22 },
  { d: doublet(R_NECK, R_HIP, -1, { width: 28, hem: 16, flare: 6, swing: 2 }) },
  {
    d: limb([
      [526, 236],
      [514, 270],
      [505, 303],
    ]),
    w: 9,
  },
  shoe([504, 304], -1),
  { d: HEAD_MAN, t: headAt(-1, R_HEAD.at, R_HEAD.rot) },
  { d: ROMEO_HAIR, t: headAt(-1, R_HEAD.at, R_HEAD.rot) },
  // the far hand on his heart
  arm(
    [
      [528, 176],
      [526, 204],
      [516, 190],
    ],
    -70,
    { w: 7.5, sep: 1.4, size: 13, spread: 12, thumb: 1 },
  ),
  // the near hand held out to the Friar, palm up, asking
  arm(
    [
      [516, 176],
      [500, 202],
      [478, 198],
    ],
    196,
    { w: 8, sep: 1.5, size: 15, spread: 15, thumb: 1 },
  ),
]
const ROMEO_CUTS = gouge(540, 196, 552, 246, 1.8, -0.6) + gouge(514, 224, 534, 225, 1.8)

/** The willow basket, half full, standing on the ground behind the Friar. */
const BASKET = 'M262 282C262 278 300 278 300 282L296 306C290 309 272 309 266 306Z'

function TheFriarAgrees({ uid }: ArtProps) {
  const m = marks()
  const skyClip = `${uid}-sky`
  const glowClip = `${uid}-glow`
  return (
    <>
      <defs>
        <clipPath id={skyClip}>
          <rect x={0} y={0} width={W} height={HORIZON} />
        </clipPath>
        <clipPath id={glowClip}>
          <path d={GLOW} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [440, 200], push: 1.03 })}>
        {/* the last of the night, and the grey morning rising under it */}
        <path d={m.sky} fill={PAPER} />
        <g clipPath={`url(#${skyClip})`} className="lc-fade-in" style={timing({ dur: 2.4 })}>
          <path d={m.dawn} fill={PAPER} />
        </g>
        <path d={GLOW} fill={PAPER} />
        <g clipPath={`url(#${glowClip})`}>
          <path d={m.flecks} fill={INK} />
        </g>
        <g className="lc-drift" style={timing({ delay: 0.1 })}>
          <path d={m.clouds.body} fill={INK} />
          <path d={m.clouds.lit} fill={PAPER} />
        </g>

        {/* Verona on the skyline, far off */}
        <path
          d="M376 234V222H392V212H400V222H418V204L424 196L430 204V222H452V214H470V206H478V214H500V190H504V184H510V190H514V222H540V214H566V220H592V200H600V192H608V200H616V222H650V216H690V224H720V212H748V224H792V218H830V226H860V234Z"
          fill={INK}
        />

        {/* the garden */}
        <rect x={0} y={HORIZON} width={W} height={H - HORIZON} fill={INK} />
        <path d={m.ground} fill={PAPER} />
        <path d={m.beds} fill={PAPER} />
        <path d={`M0 ${HORIZON + 1}H${W}`} stroke={PAPER} strokeWidth={LINE.fine} />

        {/* the Friar's cell: stone walls, a tiled roof, the door standing open */}
        <path d="M14 272V128H250V272Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.wall} fill={PAPER} />
        <path d="M2 132L132 78L262 132Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.roof} fill={PAPER} />
        <path d="M150 272V198Q150 176 172 176Q194 176 194 198V272Z" fill={PAPER} />
        <path d="M156 272V200Q156 184 172 184Q188 184 188 200V272Z" fill={INK} />
        {/* the door, swung open into the garden */}
        <path d="M194 198L214 206V282L194 272Z" fill={INK} stroke={PAPER} strokeWidth={1.2} />
        <path d={gouge(201, 206, 201, 272, 1.4) + gouge(207, 208, 207, 276, 1.4)} fill={PAPER} />
        <path d="M60 162H96V196H60Z" fill={PAPER} />
        <path d="M78 162V196M60 179H96" stroke={INK} strokeWidth={2.4} />

        {/* his basket, the osier cage, with herbs and flowers in it */}
        <path d={BASKET} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path
          d={
            gouge(266, 288, 298, 288, 1.6) +
            gouge(267, 296, 297, 296, 1.6) +
            gouge(274, 282, 272, 306, 1.2) +
            gouge(281, 282, 281, 307, 1.2) +
            gouge(288, 282, 290, 306, 1.2)
          }
          fill={PAPER}
        />
        <path d="M264 281C262 256 300 256 298 281" fill="none" stroke={PAPER} strokeWidth={7} />
        <path d="M264 281C262 256 300 256 298 281" fill="none" stroke={INK} strokeWidth={4} />
        <path
          d={
            gouge(270, 280, 262, 266, 3, 0.6) +
            gouge(278, 280, 276, 262, 3, -0.6) +
            gouge(290, 280, 298, 266, 3, -0.6)
          }
          fill={PAPER}
          stroke={INK}
          strokeWidth={0.8}
        />

        {/* Friar Lawrence */}
        <CutFigure parts={FRIAR} cuts={FRIAR_CUTS}>
          <g transform={headAt(1, F_HEAD.at, F_HEAD.rot)}>
            <path d={TONSURE} fill={PAPER} />
            <path d={TONSURE_STRANDS} fill="none" stroke={INK} strokeWidth={0.8} />
            <path d={EYE} fill={PAPER} />
          </g>
        </CutFigure>
        {/* "this weak flower", on his palm */}
        <path d="M376 186Q382 182 388 178" stroke={PAPER} strokeWidth={4} fill="none" />
        <path d="M376 186Q382 182 388 178" stroke={INK} strokeWidth={1.6} fill="none" />
        <g className="lc-fade-in" style={timing({ delay: 0.6, dur: 1 })}>
          <path d={PETALS} fill={RED} stroke={INK} strokeWidth={1} />
          <circle
            cx={FLOWER[0]}
            cy={FLOWER[1]}
            r={2.6}
            fill={PAPER}
            stroke={INK}
            strokeWidth={0.8}
          />
        </g>

        {/* Romeo, come in haste */}
        <CutFigure parts={ROMEO} cuts={ROMEO_CUTS}>
          <g transform={headAt(-1, R_HEAD.at, R_HEAD.rot)}>
            <path d={ROMEO_CURLS} fill={PAPER} />
            <path d={EYE} fill={PAPER} />
          </g>
          <path d={R_SWORD.hilt} fill={PAPER} stroke={INK} strokeWidth={0.8} />
        </CutFigure>
      </g>
    </>
  )
}

export const theFriarAgrees: LinocutArt = { width: W, height: H, Draw: TheFriarAgrees }
