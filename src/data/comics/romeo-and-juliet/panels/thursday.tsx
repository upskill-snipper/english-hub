import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rays, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  CutFigure,
  EYE,
  HEAD_MAN,
  HEAD_WOMAN,
  FULL_BEARD,
  FULL_BEARD_STRANDS,
  WHITE_BROW,
  PARIS_BAND,
  PARIS_CAP,
  PARIS_HAIR,
  VEIL,
  VEIL_BAND,
  footShadow,
  headAt,
  line,
  openHand,
  type Part,
} from './acts-3-4-kit'
import { boards, houseWall } from './house-acts-3-4'
import { CAP, CAP_BAND } from './late-scenes-kit'

/**
 * Act 3, Scene 4: "Thursday", the twelfth moment in the guide's timeline. A
 * room in Capulet's house, very late at night. Every detail is from the
 * scene in the held edition (src/data/full-texts/romeo-and-juliet.ts):
 *
 * - "Enter Capulet, Lady Capulet and Paris." Nobody else: Juliet is upstairs,
 *   "mew'd up to her heaviness" (Lady Capulet), and will "not come down
 *   tonight" (Capulet). So the three of them are alone, and the stair on the
 *   right climbs to a closed door. The audience knows what the three of them
 *   do not, that Romeo is with her, and the picture leaves that door shut.
 * - CAPULET: "Sir Paris, I will make a desperate tender / Of my child's
 *   love"; "A Thursday be it then." So the old man takes the young man's
 *   hand in both of his: the bargain made, and made without her.
 * - CAPULET: "Wife, go you to her ere you go to bed ... Prepare her, wife,
 *   against this wedding day." So Lady Capulet stands at the foot of the
 *   stair with a candle, ready to go up.
 * - "'Tis very late"; "it is so very very late that we / May call it early
 *   by and by"; "Light to my chamber, ho!" So the candle is the only light,
 *   its flame the spot colour, and through the window a late moon hangs low
 *   among the stars.
 *
 * Capulet is old ("old Capulet", 1.2), with a white beard, in his long gown
 * and the cap he wears in the other Romeo and Juliet panels (CAP, from
 * ./late-scenes-kit.tsx);
 * Paris is "young, and noble" (3.5), beardless, in a bonnet and short cloak;
 * Lady Capulet wears a gown and veil (./acts-3-4-kit.tsx). The room is the
 * plaster and wainscot of Capulet's house in all three of these panels
 * (./house-acts-3-4.tsx). Seeds: 3401 (wall), 3402 (floor), 3403 (candle
 * rays), 3404 (the view).
 */

const W = 860
const H = 340
const RAIL = 200
const FLOOR = 272
/** The candle's flame, in Lady Capulet's hand. */
const FLAME: [number, number] = [452, 118]
/** The window's opening: an arch on (358, 92), radius 40, down to the sill. */
const WIN = { x0: 318, x1: 398, cx: 358, cy: 92, r: 40, sill: 188 }
const WIN_PATH = `M${WIN.x0} ${WIN.sill}V${WIN.cy}A${WIN.r} ${WIN.r} 0 0 1 ${WIN.x1} ${WIN.cy}V${WIN.sill}Z`

/** The stair: thirteen steps from the floor at the front up to the landing. */
const STEP = { x0: 584, y0: 334, run: 15.4, rise: 17.7, count: 13 }
const LANDING = STEP.y0 - STEP.rise * STEP.count

type Marks = {
  plaster: string
  wains: string
  floor: string
  flameRays: string
  stair: string
  nosings: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(3401)
  const light = (x: number, y: number) =>
    Math.max(
      clamp(1 - Math.hypot(x - FLAME[0], (y - FLAME[1]) * 1.1) / 430) ** 0.85,
      clamp(1 - Math.hypot(x - WIN.cx, y - 120) / 110) * 0.35,
      0.05,
    )
  const { plaster, wains } = houseWall(r, W, RAIL, FLOOR, light, (x) => x > 574)
  const floor = boards(rng(3402), W, H, FLOOR, [430, 40])
  const flameRays = rays(rng(3403), FLAME[0], FLAME[1], {
    from: 16,
    to: 104,
    every: 5.4,
    width: 2.8,
  })
  let stair = `M${STEP.x0} ${H}V${STEP.y0}`
  let nosings = ''
  for (let i = 0; i < STEP.count; i++) {
    const x = STEP.x0 + i * STEP.run
    const y = STEP.y0 - (i + 1) * STEP.rise
    stair += `V${n(y)}H${n(x + STEP.run)}`
    // the edge of each tread catches the candle; the far ones less
    const L = clamp(1 - Math.hypot(x - FLAME[0], y - FLAME[1]) / 420)
    nosings += wedge(x - 1, y + 0.6, x + STEP.run + 1, y + 0.6, 0.8 + L * 2, 0.8 + L * 2)
    nosings += gouge(x + 1.4, y + 4, x + 1.4, y + STEP.rise - 3, 0.3 + L * 0.8)
  }
  stair += `H${W}V${H}Z`
  cached = { plaster, wains, floor, flameRays, stair, nosings }
  return cached
}

// ── Paris, facing right, giving his hand ────────────────────────────────────
const PARIS_HEAD = headAt([170, 98], 1, 1.05, 10)
const PARIS: Part[] = [
  // the short cloak on his back
  {
    d: 'M152 118C136 124 128 152 124 192L126 208C134 206 140 202 145 196C143 170 147 142 158 124Z',
  },
  {
    d: line([
      [157, 204],
      [151, 252],
      [146, 296],
    ]),
    w: 12,
  },
  { d: 'M141 291L153 291C158 292 160 295 160 299L140 299Z' },
  // the doublet, belted, with its short skirt
  {
    d: 'M152 120C142 126 139 150 141 176L135 208L191 208L186 176C188 150 186 130 177 121C169 116 159 116 152 120Z',
  },
  {
    d: line([
      [175, 204],
      [179, 252],
      [183, 296],
    ]),
    w: 12.5,
  },
  { d: 'M178 291L191 291C197 292 200 295 200 299L177 299Z' },
  { d: HEAD_MAN, t: PARIS_HEAD },
  { d: PARIS_HAIR, t: PARIS_HEAD },
  { d: PARIS_CAP, t: PARIS_HEAD },
  // the near arm, held out to Capulet
  {
    d: line([
      [176, 132],
      [190, 160],
      [208, 170],
    ]),
    w: 9,
    sep: 1.6,
  },
  ...openHand([207, 170], 4, 1.05, -1, 10),
]
const PARIS_CUTS =
  gouge(140, 176, 186, 176, 1) +
  gouge(162, 126, 160, 204, 0.8, 0.6) +
  gouge(134, 140, 128, 196, 0.8, 0.8) +
  gouge(156, 214, 150, 290, 0.6) +
  gouge(178, 214, 182, 290, 0.6)

// ── Capulet, facing left, taking Paris's hand in both of his ────────────────
const CAPULET_HEAD = headAt([254, 96], -1, 1.08, -4)
const CAPULET: Part[] = [
  // the long gown
  {
    d: 'M254 118C240 123 236 148 236 178C234 220 228 260 224 300L302 300C298 262 292 222 290 184C290 150 286 128 272 118C266 114 260 114 254 118Z',
  },
  { d: HEAD_MAN, t: CAPULET_HEAD },
  { d: CAP, t: CAPULET_HEAD },
  // the far arm, across his body, its hand under Paris's
  {
    d: line([
      [266, 132],
      [258, 172],
      [238, 180],
    ]),
    w: 12,
    sep: 1.6,
  },
  { d: 'M252 168L230 172L234 192L258 184Z', sep: 1.6 },
  ...openHand([232, 181], 192, 1.08, 1, 10).map((p) => ({ ...p, sep: 1.2 })),
  // the near arm, its hand over Paris's
  {
    d: line([
      [250, 130],
      [240, 158],
    ]),
    w: 12,
    sep: 1.6,
  },
  { d: 'M246 150L230 158L236 176L250 166Z', sep: 1.6 },
  ...openHand([234, 165], 168, 1.08, -1, 10).map((p) => ({ ...p, sep: 1.2 })),
]
const CAPULET_CUTS =
  gouge(248, 196, 240, 294, 1, 0.8) +
  gouge(268, 190, 272, 294, 0.9, -0.6) +
  gouge(284, 150, 294, 294, 1.1, -1) +
  gouge(260, 124, 276, 126, 0.8)

// ── Lady Capulet, facing left, with the candle, at the foot of the stair ────
const LADY_HEAD = headAt([480, 104], -1, 1, -3)
const LADY: Part[] = [
  { d: VEIL, t: LADY_HEAD },
  // a fitted bodice, drawn in at the waist, over a full skirt
  {
    d: 'M472 124C462 128 459 140 461 152C462 162 465 172 468 182C458 222 450 262 442 302L536 302C528 262 518 222 494 182C496 172 498 160 498 150C498 138 494 128 486 124C482 122 476 122 472 124Z',
  },
  { d: HEAD_WOMAN, t: LADY_HEAD },
  // the near arm, holding the candlestick up before her
  {
    d: line([
      [472, 134],
      [464, 162],
      [456, 150],
    ]),
    w: 8.5,
    sep: 1.6,
  },
  { d: 'M451 150a5 5 0 1 0 10 0a5 5 0 1 0 -10 0Z', sep: 1.2 },
]
const LADY_CUTS =
  gouge(470, 196, 456, 296, 1.1, 0.8) +
  gouge(482, 200, 482, 296, 1, 0) +
  gouge(492, 196, 514, 296, 1, -0.8) +
  gouge(467, 182, 494, 182, 0.9) +
  // the linen collar high at her neck
  gouge(470, 124.5, 488, 124.5, 2.2, 0.8)

function Thursday({ uid }: ArtProps) {
  const m = marks()
  const clip = `${uid}-win`
  const v = rng(3404)
  let stars = ''
  for (const [x, y, s] of [
    [330, 70, 1.1],
    [346, 96, 0.9],
    [372, 64, 1],
    [386, 88, 1.2],
    [334, 124, 0.9],
    [360, 112, 0.8],
  ])
    stars += `M${x - s} ${y}a${s} ${s} 0 1 0 ${2 * s} 0a${s} ${s} 0 1 0 ${-2 * s} 0Z`
  let roofs = 'M318 188V172'
  for (let x = 318; x <= 398; x += 10)
    roofs += `L${x} ${n(170 + (x % 20 ? 6 : 0) + between(v, -2, 2))}`
  roofs += 'L398 188Z'
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <path d={WIN_PATH} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [430, 170], push: 1.03 })}>
        <path d={m.plaster} fill={PAPER} />
        <path d={m.flameRays} fill={PAPER} />
        <rect x={0} y={RAIL - 6} width={574} height={6} fill={PAPER} />
        <rect x={0} y={RAIL} width={574} height={1.6} fill={INK} />
        <path d={m.wains} fill={PAPER} />

        {/* the window: a late moon low among the stars, over the roofs */}
        <path d="M306 196V92A52 52 0 0 1 410 92V196Z" fill={PAPER} />
        <path d="M312 192V92A46 46 0 0 1 404 92V192Z" fill={INK} />
        <g clipPath={`url(#${clip})`}>
          <path d={stars} fill={PAPER} />
          <path d="M384 128A10 10 0 0 0 384 148A13 13 0 0 1 384 128Z" fill={PAPER} />
          <path
            d={roofs}
            fill={INK}
            stroke={PAPER}
            strokeWidth={LINE.carve}
            strokeLinejoin="round"
          />
        </g>
        <path d="M358 52V188M318 128H398" stroke={INK} strokeWidth={2.6} />
        <rect x={302} y={188} width={112} height={7} fill={PAPER} />

        {/* the floor */}
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />

        {/* the stair up to Juliet's shut door */}
        <path
          d={m.stair}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={m.nosings} fill={PAPER} />
        <path
          d={`M${STEP.x0 + 8} ${STEP.y0 - 70}L${n(STEP.x0 + 8 + STEP.run * 12)} ${n(STEP.y0 - 70 - STEP.rise * 12)}`}
          stroke={PAPER}
          strokeWidth={5}
          strokeLinecap="round"
        />
        <path
          d={`M${STEP.x0 + 8} ${STEP.y0 - 70}L${n(STEP.x0 + 8 + STEP.run * 12)} ${n(STEP.y0 - 70 - STEP.rise * 12)}`}
          stroke={INK}
          strokeWidth={2.4}
          strokeLinecap="round"
        />
        <g stroke={PAPER} strokeWidth={1.4}>
          {Array.from({ length: 7 }, (_, i) => {
            const x = STEP.x0 + 8 + i * 2 * STEP.run
            const yTop = STEP.y0 - 70 - (i * 2 * STEP.rise * STEP.run) / STEP.run
            const yFoot = STEP.y0 - (2 * i + 1) * STEP.rise
            return <path key={i} d={`M${n(x)} ${n(yTop)}V${n(yFoot)}`} />
          })}
        </g>
        <path
          d={`M${STEP.x0 + 8} ${STEP.y0 - 76}V${STEP.y0 - STEP.rise}`}
          stroke={PAPER}
          strokeWidth={6}
        />
        <path
          d={`M${STEP.x0 + 8} ${STEP.y0 - 76}V${STEP.y0 - STEP.rise}`}
          stroke={INK}
          strokeWidth={3.4}
        />
        <path
          d="M786 104V36A24 24 0 0 1 834 36V104Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d="M798 44V100M810 38V100M822 44V100" stroke={PAPER} strokeWidth={0.9} />
        <circle cx={794} cy={74} r={3} fill="none" stroke={PAPER} strokeWidth={1.2} />

        <path
          d={footShadow(168, 302, 34) + footShadow(263, 302, 42) + footShadow(487, 304, 44)}
          fill={INK}
        />

        <CutFigure parts={PARIS} cuts={PARIS_CUTS}>
          <path d={PARIS_BAND} transform={PARIS_HEAD} fill={PAPER} />
          <path d={EYE} transform={PARIS_HEAD} fill={PAPER} />
        </CutFigure>
        <CutFigure parts={CAPULET} cuts={CAPULET_CUTS}>
          <g transform={CAPULET_HEAD}>
            <path d={CAP_BAND} fill={PAPER} />
            <path d={FULL_BEARD} fill={PAPER} stroke={INK} strokeWidth={0.9} />
            <path d={FULL_BEARD_STRANDS} fill="none" stroke={INK} strokeWidth={0.8} />
            <path d={WHITE_BROW} fill={PAPER} />
            <path d={EYE} fill={PAPER} />
          </g>
        </CutFigure>
        <CutFigure parts={LADY} cuts={LADY_CUTS}>
          <path d={VEIL_BAND} transform={LADY_HEAD} fill={PAPER} />
          <path
            d="M-12.6 -9C-15.4 4 -12.6 30 -18 56C-19.8 64 -21.4 68 -22.6 71"
            transform={LADY_HEAD}
            stroke={PAPER}
            strokeWidth={1.3}
            fill="none"
          />
          <path d={EYE} transform={LADY_HEAD} fill={PAPER} />
          {/* the candlestick in her hand */}
          <path d="M444 152H466L462 146H448Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
          <path d="M455 146V134" stroke={PAPER} strokeWidth={5} />
          <path d="M455 146V134" stroke={INK} strokeWidth={2.6} />
          <rect x={451} y={124} width={8} height={10} fill={PAPER} stroke={INK} strokeWidth={1} />
          <path d="M449 152C449 157 461 157 461 152" fill={INK} stroke={PAPER} strokeWidth={1.2} />
        </CutFigure>
        <path
          className="lc-flicker"
          style={timing({ dur: 0.9 })}
          d={`M${FLAME[0] + 3} 124C${FLAME[0] - 1.5} 119 ${FLAME[0] - 1} 113 ${FLAME[0] + 3} 104C${FLAME[0] + 7} 113 ${FLAME[0] + 7.5} 119 ${FLAME[0] + 3} 124Z`}
          fill={RED}
        />
      </g>
    </>
  )
}

export const thursday: LinocutArt = { width: W, height: H, Draw: Thursday }
