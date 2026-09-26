import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rays, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  CAP_FLAT,
  CutFigure,
  EYE,
  HAIR_CUTS,
  HEAD_MAN,
  MASK,
  MASK_EYE,
  MASK_TIE,
  ROMEO_CURLS,
  ROMEO_HAIR,
  VISOR,
  VISOR_BROW_CUT,
  doublet,
  headAt,
  limb,
  openArm,
  sheathed,
  shoe,
  type P,
  type Part,
  type Piece,
} from './people'
import { warningHand } from './verona-kit'

/**
 * Act 1, Scene 4: "Queen Mab and a warning", the fourth moment in the
 * guide's timeline. A street near Capulet's house, at night, as the maskers
 * set off for the feast. Every detail is from the held edition:
 *
 * - "Enter Romeo, Mercutio, Benvolio, with five or six Maskers; Torch-bearers
 *   and others." Ahead of the three, small, maskers and a torch-bearer go in
 *   at the lit door of Capulet's house on the right, and one carries the drum
 *   ("Strike, drum").
 * - "Give me a case to put my visage in: [Putting on a mask.] / A visor for a
 *   visor ... Here are the beetle-brows shall blush for me." On the left
 *   Mercutio, in his mask with its heavy brow, throws out an open hand in
 *   the middle of his speech ("This is that very Mab"), the other hand on his
 *   hip. The hand is held out at the height of his chest with the fingers
 *   spread: flung up above his head, as it was first cut, the straight arm
 *   and flat hand read as a salute at phone width (review of 26 September
 *   2026).
 * - "Give me a torch, I am not for this ambling; / Being but heavy I will bear
 *   the light." "I'll be a candle-holder and look on". In the middle Romeo,
 *   masked, holds the torch up behind him, so that his head is black against
 *   its light, and lays his other hand on his breast.
 * - "my mind misgives / Some consequence yet hanging in the stars, / Shall
 *   bitterly begin his fearful date / With this night's revels". He looks up
 *   past the torch at the stars, and one star, the one he is looking at, is
 *   printed in red, as the two crossed stars are in the Prologue's panel: the
 *   only red in the picture.
 * - "Supper is done, and we shall come too late." On the right Benvolio,
 *   masked, in his flat cap, turns back to them and beckons them on: one
 *   open hand held out to them, the other pointing over his shoulder to the
 *   lit door. (His one hand, first cut small and turned up, read as two
 *   fists raised at phone width.)
 *
 * Queen Mab herself is not drawn: she is in Mercutio's words, not in the
 * street. Romeo is cut as ./verona-kit.tsx cuts him, with his rapier at his
 * side; the masks are in ./people.tsx. Nothing is taken from a film or stage
 * production. Seeds: 2401 (sky), 2402 (stars), 2403 (houses), 2404 (street),
 * 2405 (torchlight), 2406 (the door's light).
 */

const W = 860
const H = 340
/** The foot of the house fronts. */
const GROUND = 250
/** The flame of Romeo's torch, held up just behind his head. */
const FLAME: P = [394, 98]
/** The star Romeo is looking at. */
const STAR: P = [536, 42]
/** The lit doorway of Capulet's house. */
const DOOR = { x0: 724, x1: 796, top: 158 }

type Marks = {
  sky: string
  stars: string
  houses: string
  pool: string
  doorPool: string
  glow: string
  doorGlow: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // Night: nearly black, a little lighter low over the roofs.
  const sky = gougeField(
    rng(2401),
    { x0: 0, x1: W, y0: 6, y1: 176 },
    (_x, y) => clamp((y - 80) / 170) * 0.22 + 0.02,
    { spacing: 7.5, len: [20, 80], gap: [14, 34], max: 2.4 },
  )
  const s = rng(2402)
  let stars = ''
  for (let i = 0; i < 46; i++) {
    const x = between(s, 16, W - 16)
    const y = between(s, 12, 150)
    if (x < 370 && y < 96) continue
    if (Math.hypot(x - FLAME[0], y - FLAME[1]) < 110) continue
    if (Math.hypot(x - STAR[0], y - STAR[1]) < 26) continue
    const r = between(s, 1, 2.4)
    stars +=
      gouge(x - r * 1.7, y, x + r * 1.7, y, r * 0.8) +
      gouge(x, y - r * 1.7, x, y + r * 1.7, r * 0.8)
  }
  // The wall behind Romeo, cut nearly white where the torch is nearest, so
  // he stands black against its light; the rest of the street is left dark.
  const near = (x: number, y: number) =>
    clamp(1 - Math.hypot((x - FLAME[0]) * 0.8, (y - FLAME[1] - 50) * 0.9) / 190)
  const houses = gougeField(rng(2403), { x0: 220, x1: 600, y0: 120, y1: GROUND }, near, {
    spacing: 5,
    len: [20, 60],
    gap: [2, 8],
    max: 4.6,
  })
  // A pool of torchlight on the paving round his feet.
  const pool = gougeField(
    rng(2404),
    { x0: 120, x1: 700, y0: GROUND + 4, y1: H + 2 },
    (x, y) => clamp(1 - Math.hypot((x - FLAME[0]) / 260, (y - 306) / 44)) * 1.1,
    { spacing: 5.4, len: [30, 80], gap: [3, 10], max: 4.4 },
  )
  // And the light from the open door, spilling on to the street.
  const doorPool = gougeField(
    rng(2407),
    { x0: 690, x1: 850, y0: GROUND + 4, y1: 300 },
    (x, y) => clamp(1 - Math.hypot((x - 760) / 80, (y - GROUND) / 40)),
    { spacing: 5, len: [16, 44], gap: [3, 8], max: 4 },
  )
  const glow = rays(rng(2405), FLAME[0], FLAME[1], { from: 30, to: 170, every: 3.6, width: 3.8 })
  const doorGlow = rays(rng(2406), 760, 214, { from: 40, to: 96, every: 7, width: 2.4 })
  cached = { sky, stars, houses, pool, doorPool, glow, doorGlow }
  return cached
}

/** The house fronts along the street, and Capulet's taller house on the right. */
const HOUSES = `M0 ${GROUND}V150L40 128L80 150V140H200V124L240 104L280 124V146H420V132H560V150L600 128L640 150V${GROUND}Z`
const CAPULET_HOUSE = `M660 ${GROUND}V70H860V${GROUND}Z`
const CAPULET_ROOF = 'M652 72L700 50H860V72Z'
/** Capulet's windows, lit for the feast. */
const LIT = (() => {
  let d = ''
  const win = (x: number, y: number, w: number, h: number) =>
    (d += `M${x} ${y + h}V${y + w / 2}A${w / 2} ${w / 2} 0 0 1 ${x + w} ${y + w / 2}V${y + h}Z`)
  for (const x of [682, 736, 790, 836]) win(x, 90, 18, 40)
  return d
})()
const LIT_BARS =
  'M691 100V130M745 100V130M799 100V130M845 100V130M682 114H700M736 114H754M790 114H808M836 114H854'
const DARK_WINDOWS = (() => {
  let d = ''
  for (const [x, y] of [
    [20, 168],
    [104, 164],
    [222, 150],
    [300, 162],
    [460, 156],
    [580, 168],
  ])
    d += `M${x} ${y + 26}V${y + 8}A8 8 0 0 1 ${x + 16} ${y + 8}V${y + 26}Z`
  return d
})()
const DOORWAY = `M${DOOR.x0} ${GROUND}V${DOOR.top + 36}A36 36 0 0 1 ${DOOR.x1} ${DOOR.top + 36}V${GROUND}Z`

/** A small masker in his own frame (feet at 0, 0, facing right), about 100 tall. */
function masker(armUp: boolean): Part[] {
  const head = headAt(1, [4, -84], 0, 0.62)
  return [
    {
      d: limb([
        [-2, -46],
        [-6, -24],
        [-10, 0],
      ]),
      w: 6,
    },
    {
      d: limb([
        [2, -46],
        [6, -24],
        [10, 0],
      ]),
      w: 6,
    },
    { d: doublet([0, -72], [0, -44], 1, { width: 18, hem: 10, flare: 4 }) },
    { d: HEAD_MAN, t: head },
    {
      d: armUp
        ? limb([
            [2, -68],
            [10, -84],
            [12, -102],
          ])
        : limb([
            [2, -68],
            [12, -58],
            [16, -48],
          ]),
      w: 5,
    },
  ]
}

// ── Mercutio, masked, in full flow ───────────────────────────────────────────
const M_NECK: P = [156, 166]
const M_HIP: P = [150, 232]
const M_HEAD = headAt(1, [163, 144], -10)
const MERCUTIO: Piece[] = [
  // the far arm, its hand on his hip
  {
    d: limb([
      [150, 174],
      [132, 194],
      [144, 214],
    ]),
    w: 8,
  },
  { d: `M139.5 215a5 5 0 1 0 10 0a5 5 0 1 0 -10 0Z` },
  {
    d: limb([
      [146, 232],
      [132, 276],
      [120, 318],
    ]),
    w: 9,
  },
  shoe([120, 319], 1),
  { d: limb([M_NECK, M_HIP]), w: 22 },
  { d: doublet(M_NECK, M_HIP, 1, { width: 28, hem: 16, flare: 7 }) },
  {
    d: limb([
      [154, 232],
      [166, 276],
      [174, 318],
    ]),
    w: 9,
  },
  shoe([175, 319], 1),
  { d: HEAD_MAN, t: M_HEAD },
  // the near arm thrown out at the height of his chest, the hand open, the
  // fingers spread
  openArm(
    [
      [160, 172],
      [182, 188],
      [206, 180],
    ],
    -16,
    { w: 8.2, sep: 1.5, size: 18, spread: 20, thumb: -1 },
  ),
]
const MERCUTIO_CUTS = gouge(140, 206, 164, 207, 0.9) + gouge(152, 176, 148, 204, 0.8, 0.6)

// ── Romeo, masked, the torch held up behind him ─────────────────────────────
const R_NECK: P = [406, 168]
const R_HIP: P = [400, 236]
const R_HEAD = headAt(1, [418, 150], -20)
const R_SWORD = sheathed([398, 230], 1, 72)
const R_GRIP: P = [392, 136]
const ROMEO: Piece[] = [
  // the short cloak on his back
  {
    d: 'M398 166C386 174 380 196 377 222C375 238 375 250 376 258L394 254C392 234 394 208 400 188Z',
  },
  // the far arm, holding the torch up behind his head
  [
    { d: limb([[400, 176], [382, 162], R_GRIP]), w: 8.4 },
    { d: `M${R_GRIP[0] - 5.4} ${R_GRIP[1]}a5.4 5.4 0 1 0 10.8 0a5.4 5.4 0 1 0 -10.8 0Z` },
  ],
  {
    d: limb([
      [396, 236],
      [390, 278],
      [386, 318],
    ]),
    w: 9,
  },
  shoe([386, 319], 1),
  R_SWORD.scabbard,
  { d: limb([R_NECK, R_HIP]), w: 22 },
  { d: doublet(R_NECK, R_HIP, 1, { width: 28, hem: 16, flare: 6 }) },
  {
    d: limb([
      [404, 236],
      [412, 278],
      [418, 318],
    ]),
    w: 9,
  },
  shoe([419, 319], 1),
  { d: HEAD_MAN, t: R_HEAD },
  { d: ROMEO_HAIR, t: R_HEAD },
  // the near hand laid on his breast
  openArm(
    [
      [410, 176],
      [420, 204],
      [428, 190],
    ],
    -116,
    { w: 7.8, sep: 1.4, size: 13.5, spread: 12, thumb: -1 },
  ),
]
const ROMEO_CUTS = gouge(390, 206, 380, 250, 0.9, 0.6) + gouge(392, 214, 414, 215, 0.8)

// ── Benvolio, masked, turning back to beckon them on ────────────────────────
const B_NECK: P = [604, 168]
const B_HIP: P = [606, 234]
const B_HEAD = headAt(-1, [598, 146], -4)
const BENVOLIO: Piece[] = [
  // the far arm, pointing back over his shoulder to the lit door
  [
    {
      d: limb([
        [608, 176],
        [628, 192],
        [650, 186],
      ]),
      w: 8,
    },
    ...warningHand([650, 186], -10, { size: 18 }),
  ],
  {
    d: limb([
      [610, 234],
      [624, 276],
      [636, 318],
    ]),
    w: 9,
  },
  shoe([637, 319], 1),
  { d: limb([B_NECK, B_HIP]), w: 22 },
  { d: doublet(B_NECK, B_HIP, -1, { width: 28, hem: 16, flare: 6 }) },
  {
    d: limb([
      [602, 234],
      [598, 276],
      [594, 318],
    ]),
    w: 9,
  },
  shoe([594, 319], -1),
  { d: HEAD_MAN, t: B_HEAD },
  { d: CAP_FLAT, t: B_HEAD },
  // the near hand held out to them, open, beckoning
  openArm(
    [
      [598, 176],
      [578, 194],
      [554, 188],
    ],
    -168,
    { w: 8, sep: 1.5, size: 18, spread: 20, thumb: 1 },
  ),
]
const BENVOLIO_CUTS = gouge(594, 208, 618, 209, 0.9) + gouge(604, 178, 608, 204, 0.8, -0.6)

/** A star of five points centred on (x, y). */
function star([x, y]: P, r: number) {
  let d = ''
  for (let i = 0; i < 10; i++) {
    const a = -Math.PI / 2 + (i * Math.PI) / 5
    const rr = i % 2 === 0 ? r : r * 0.45
    d += `${i ? 'L' : 'M'}${n(x + Math.cos(a) * rr)} ${n(y + Math.sin(a) * rr)}`
  }
  return d + 'Z'
}

function QueenMabAndAWarning({ uid }: ArtProps) {
  const m = marks()
  const wallClip = `${uid}-walls`
  return (
    <>
      <defs>
        <clipPath id={wallClip}>
          <path d={HOUSES} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [420, 150], push: 1.03 })}>
        {/* the night sky and its stars */}
        <path d={m.sky} fill={PAPER} />
        <path d={m.stars} fill={PAPER} />

        {/* the houses along the street, touched by the torchlight */}
        <path d={HOUSES} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} strokeLinejoin="round" />
        <g clipPath={`url(#${wallClip})`}>
          <path d={m.houses} fill={PAPER} />
        </g>
        <path d={DARK_WINDOWS} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />

        {/* Capulet's house, lit for the feast, and the maskers going in */}
        <path
          d={CAPULET_ROOF}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={CAPULET_HOUSE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={LIT} fill={PAPER} />
        <path d={LIT_BARS} stroke={INK} strokeWidth={LINE.bold} />
        <path d={m.doorGlow} fill={PAPER} />
        <path d={DOORWAY} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} />
        <g transform="translate(742 250)">
          <CutFigure parts={masker(true)} halo={0}>
            <path
              d="M8 -104C4 -110 6 -118 12 -124C18 -118 19 -110 15 -104Z"
              fill={PAPER}
              stroke={INK}
              strokeWidth={1.4}
            />
            <path d="M11.5 -104V-92" stroke={INK} strokeWidth={3} />
          </CutFigure>
        </g>
        <g transform="translate(770 250)">
          <CutFigure parts={masker(false)} halo={0}>
            <rect x={8} y={-58} width={14} height={16} rx={2} fill={INK} />
          </CutFigure>
        </g>

        {/* the street */}
        <rect x={0} y={GROUND} width={W} height={H - GROUND} fill={INK} />
        <path d={m.pool} fill={PAPER} />
        <path d={m.doorPool} fill={PAPER} />

        {/* the torch's light, and the star he looks at */}
        <path d={m.glow} fill={PAPER} />
        <circle cx={FLAME[0]} cy={FLAME[1] - 6} r={30} fill={PAPER} />
        <g className="lc-fade-in" style={timing({ delay: 1.2, dur: 1.2 })}>
          <path
            d={star(STAR, 13)}
            fill={RED}
            stroke={PAPER}
            strokeWidth={LINE.carve}
            strokeLinejoin="round"
          />
          <path
            d={
              gouge(STAR[0] - 30, STAR[1], STAR[0] - 18, STAR[1], 1.1) +
              gouge(STAR[0] + 18, STAR[1], STAR[0] + 30, STAR[1], 1.1) +
              gouge(STAR[0], STAR[1] - 30, STAR[0], STAR[1] - 18, 1.1) +
              gouge(STAR[0], STAR[1] + 18, STAR[0], STAR[1] + 30, 1.1)
            }
            fill={PAPER}
          />
        </g>

        {/* Mercutio */}
        <CutFigure parts={MERCUTIO} cuts={MERCUTIO_CUTS} halo={2}>
          <g transform={M_HEAD}>
            <path d={HAIR_CUTS} fill={PAPER} />
            <path d={VISOR} fill={PAPER} stroke={INK} strokeWidth={1} strokeLinejoin="round" />
            <path d={VISOR_BROW_CUT} fill={INK} />
            <path d={MASK_EYE} fill={INK} />
            <path d={MASK_TIE} fill={PAPER} />
          </g>
        </CutFigure>

        {/* Benvolio */}
        <CutFigure parts={BENVOLIO} cuts={BENVOLIO_CUTS} halo={2}>
          <g transform={B_HEAD}>
            <path d={MASK} fill={PAPER} stroke={INK} strokeWidth={1} strokeLinejoin="round" />
            <path d={MASK_EYE} fill={INK} />
            <path d={MASK_TIE} fill={PAPER} />
          </g>
        </CutFigure>

        {/* Romeo's torch, behind his head: its shaft, its head and its white flame */}
        <path
          d={`M${R_GRIP[0] - 3} ${R_GRIP[1] + 14}L${R_GRIP[0] + 3} ${R_GRIP[1] + 14}L${FLAME[0] + 4} ${FLAME[1] + 14}L${FLAME[0] - 4} ${FLAME[1] + 14}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={`M${FLAME[0] - 7} ${FLAME[1] + 6}H${FLAME[0] + 7}V${FLAME[1] + 15}H${FLAME[0] - 7}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={1.4}
        />
        <path
          className="lc-flicker"
          d={`M${FLAME[0]} ${FLAME[1] + 7}C${FLAME[0] - 11} ${FLAME[1] + 2} ${FLAME[0] - 9} ${FLAME[1] - 12} ${FLAME[0] - 2} ${FLAME[1] - 30}C${FLAME[0] + 1} ${FLAME[1] - 20} ${FLAME[0] + 4} ${FLAME[1] - 18} ${FLAME[0] + 4} ${FLAME[1] - 24}C${FLAME[0] + 11} ${FLAME[1] - 12} ${FLAME[0] + 11} ${FLAME[1] + 2} ${FLAME[0]} ${FLAME[1] + 7}Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.bold}
        />

        {/* Romeo, the torch held up behind him */}
        <CutFigure parts={ROMEO} cuts={ROMEO_CUTS} halo={2}>
          <path d={R_SWORD.hilt} fill={PAPER} stroke={INK} strokeWidth={0.8} />
          <g transform={R_HEAD}>
            <path d={ROMEO_CURLS} fill={PAPER} />
            <path d={MASK} fill={PAPER} stroke={INK} strokeWidth={1} strokeLinejoin="round" />
            <path d={MASK_EYE} fill={INK} />
            <path d={MASK_TIE} fill={PAPER} />
          </g>
        </CutFigure>
      </g>
    </>
  )
}

export const queenMabAndAWarning: LinocutArt = { width: W, height: H, Draw: QueenMabAndAWarning }
