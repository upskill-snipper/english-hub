import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rays, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  CutFigure,
  EYE,
  HEAD_GIRL,
  JULIET_HAIR,
  JULIET_STRANDS,
  footShadow,
  headAt,
  line,
  openHand,
  type Part,
} from './acts-3-4-kit'
import { boards, houseWall } from './house-acts-3-4'

/**
 * Act 4, Scene 3: "Juliet drinks the potion", the fifteenth moment in the
 * guide's timeline. Juliet's chamber, at night. Every detail is from the
 * scene in the held edition (src/data/full-texts/romeo-and-juliet.ts):
 *
 * - JULIET: "I pray thee leave me to myself tonight"; "[Exeunt Lady Capulet
 *   and Nurse.]"; "My dismal scene I needs must act alone." So she is alone.
 * - "Come, vial." ... "Romeo, Romeo, Romeo, here's drink! I drink to thee."
 *   "[Throws herself on the bed.]" So she sits on the edge of her bed and
 *   holds the vial up, as a toast to him, towards the window and the night
 *   outside, the moment before she drinks. The picture stops there: it does
 *   not show her drinking or lying as if dead.
 * - JULIET: "Ay, those attires are best"; "we have cull'd such necessaries /
 *   As are behoveful for our state tomorrow". So the dress chosen for
 *   tomorrow's wedding lies ready over the chest.
 * - It is night, and she is by herself with one light, so a candle burns on
 *   its stand beside her, its flame the spot colour, and stars show in the
 *   window. FRIAR LAWRENCE (4.1): "The roses in thy lips and cheeks shall
 *   fade", so, as in "The Friar's plan", her cheek keeps the red for the
 *   last time. Her lips were red too until the review of 26 September 2026:
 *   a red mouth on a girl about to drink from a vial can read as blood, so
 *   the lips are left to the words.
 *
 * LEFT OUT, ON PURPOSE. She lays a dagger by her ("Lie thou there") in case
 * the potion fails: a means of killing herself, beside a girl of thirteen.
 * The style guide says the picture carries the weight of the moment, not its
 * injury, so the dagger is not drawn. Nor are her imaginings of the vault,
 * the bones and Tybalt's body: they are fears, not things in the room.
 *
 * Juliet is cut in paper, with her dark hair loose, as in the other Romeo and
 * Juliet panels (./acts-3-4-kit.tsx). The walls and floor are those of
 * Capulet's house in "Thursday" (./house-acts-3-4.tsx). Seeds: 3601 (wall),
 * 3602 (floor), 3603 (candle rays), 3604 (the bed-hangings).
 */

const W = 860
const H = 340
const RAIL = 204
const FLOOR = 272
/** The candle's flame, on its stand. */
const FLAME: [number, number] = [381, 134]
/** The window's opening: an arch on (112, 96), radius 40. */
const WIN_PATH = 'M72 196V96A40 40 0 0 1 152 96V196Z'

type Marks = {
  plaster: string
  wains: string
  floor: string
  flameRays: string
  folds: string
  stars: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(3601)
  const light = (x: number, y: number) =>
    Math.max(clamp(1 - Math.hypot(x - FLAME[0], (y - FLAME[1]) * 1.1) / 420) ** 0.9, 0.04)
  const { plaster, wains } = houseWall(r, W, RAIL, FLOOR, light, (x) => x > 460)
  const floor = boards(rng(3602), W, H, FLOOR, [430, 40])
  const flameRays = rays(rng(3603), FLAME[0], FLAME[1], {
    from: 16,
    to: 110,
    every: 5.4,
    width: 2.8,
  })
  // the hangings behind the bed: vertical folds, lit on the candle's side
  const f = rng(3604)
  let folds = ''
  for (let x = 488; x < 820; x += between(f, 9, 15)) {
    const L = clamp(1 - Math.abs(x - FLAME[0]) / 520)
    folds += gouge(x, 66, x + between(f, -2, 2), 206, 0.4 + L * 1.8, between(f, -0.8, 0.8))
  }
  let stars = ''
  for (const [x, y, s] of [
    [86, 80, 1.1],
    [102, 112, 0.9],
    [132, 70, 1],
    [140, 104, 1.2],
    [92, 146, 0.9],
    [124, 136, 0.8],
    [114, 90, 1],
  ])
    stars += `M${x - s} ${y}a${s} ${s} 0 1 0 ${2 * s} 0a${s} ${s} 0 1 0 ${-2 * s} 0Z`
  cached = { plaster, wains, floor, flameRays, folds, stars }
  return cached
}

// ── Juliet, sitting on the edge of the bed, facing left, the vial raised ────
const JULIET_HEAD = headAt([494, 112], -1, 0.94, 12)
const JULIET: Part[] = [
  { d: JULIET_HAIR, t: JULIET_HEAD },
  // her gown, sitting: the bodice upright, the lap forward, the skirt to the floor
  {
    d: 'M486 136C480 142 480 156 482 172C483 186 484 198 484 206C472 208 460 212 452 220C446 226 446 236 448 248C448 266 448 284 450 300L526 300C524 284 524 256 524 232C522 222 518 214 516 206C518 190 518 170 516 154C514 144 510 138 504 135C498 132 491 133 486 136Z',
  },
  { d: 'M448 297L436 297C432 298 431 302 435 303L452 303Z' },
  { d: HEAD_GIRL, t: JULIET_HEAD },
  // the far hand on her breast
  {
    d: line([
      [506, 146],
      [514, 176],
      [494, 170],
    ]),
    w: 7.5,
    sep: 1.3,
  },
  ...openHand([494, 170], 196, 0.95, 1, 10).map((p) => ({ ...p, sep: 1.1 })),
  // the near arm, raising the vial
  {
    d: line([
      [488, 144],
      [464, 134],
      [448, 110],
    ]),
    w: 7.5,
    sep: 1.3,
  },
  {
    d: 'M442 110C440 104 444 100 450 101C455 102 457 107 455 112C453 116 446 117 443 114Z',
    sep: 1.1,
  },
  {
    d: line([
      [444, 104],
      [440, 99],
    ]),
    w: 2.2,
    sep: 1,
  },
]
const JULIET_CUTS =
  gouge(462, 226, 454, 294, 0.9, 0.6) +
  gouge(478, 222, 476, 294, 0.8, 0) +
  gouge(500, 222, 506, 294, 0.8, -0.4) +
  gouge(484, 206, 516, 206, 0.8)

function JulietDrinksThePotion({ uid }: ArtProps) {
  const m = marks()
  const win = `${uid}-win`
  let valance = 'M470 50H840V64'
  for (let x = 840; x > 470; x -= 18.5) valance += `Q${n(x - 9.25)} 74 ${n(x - 18.5)} 64`
  valance += 'Z'
  return (
    <>
      <defs>
        <clipPath id={win}>
          <path d={WIN_PATH} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [440, 150], push: 1.035 })}>
        <path d={m.plaster} fill={PAPER} />
        <path d={m.flameRays} fill={PAPER} />
        <rect x={0} y={RAIL - 6} width={460} height={6} fill={PAPER} />
        <rect x={0} y={RAIL} width={460} height={1.6} fill={INK} />
        <path d={m.wains} fill={PAPER} />

        {/* the window: night, and stars */}
        <path d="M60 204V96A52 52 0 0 1 164 96V204Z" fill={PAPER} />
        <path d="M66 200V96A46 46 0 0 1 158 96V200Z" fill={INK} />
        <g clipPath={`url(#${win})`}>
          <path d={m.stars} fill={PAPER} />
        </g>
        <path d="M112 56V196M72 132H152" stroke={INK} strokeWidth={2.6} />
        <rect x={56} y={196} width={112} height={8} fill={PAPER} />

        {/* the floor */}
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />

        {/* the chest, and the dress chosen for tomorrow laid over it */}
        <path d="M196 300V246H318V300Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path
          d="M192 246C192 236 200 232 210 232H304C314 232 322 236 322 246Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d={gouge(200, 262, 314, 262, 1.1) + gouge(200, 286, 314, 286, 1.1)} fill={PAPER} />
        {/* the gown: its bodice on the lid, its sleeves and full skirt hanging down the front */}
        <g stroke={INK} strokeWidth={1.2} strokeLinejoin="round" fill={PAPER}>
          <path d="M206 240C204 252 204 262 208 272L220 270C218 260 218 250 220 242Z" />
          <path d="M308 240C310 252 310 262 306 272L294 270C296 260 296 250 294 242Z" />
          <path d="M238 244L276 244C286 260 296 280 306 298L208 298C218 280 228 260 238 244Z" />
          <path d="M226 238C230 230 238 228 246 230C252 234 262 234 268 230C276 228 284 230 288 238L276 244H238Z" />
        </g>
        <path
          d={
            gouge(246, 250, 232, 294, 0.8, 0.6) +
            gouge(257, 250, 256, 294, 0.8, 0) +
            gouge(268, 250, 282, 294, 0.8, -0.6) +
            gouge(238, 244.5, 276, 244.5, 0.9)
          }
          fill={INK}
        />
        <path
          d="M208 298Q220 292 232 298Q244 292 257 298Q270 292 282 298Q294 292 306 298"
          stroke={INK}
          strokeWidth={1.2}
          fill="none"
        />

        {/* the candle on its stand */}
        <path
          d="M366 300L381 286L396 300"
          stroke={INK}
          strokeWidth={4}
          fill="none"
          strokeLinejoin="round"
        />
        <path d="M381 288V156" stroke={PAPER} strokeWidth={7} />
        <path d="M381 288V156" stroke={INK} strokeWidth={4} />
        <path d="M370 156H392L388 150H374Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <rect x={377} y={140} width={8} height={11} fill={PAPER} stroke={INK} strokeWidth={1} />
        <path
          className="lc-flicker"
          style={timing({ dur: 0.9 })}
          d={`M${FLAME[0]} 141C${FLAME[0] - 4.5} 136 ${FLAME[0] - 4} 130 ${FLAME[0]} 121C${FLAME[0] + 4} 130 ${FLAME[0] + 4.5} 136 ${FLAME[0]} 141Z`}
          fill={RED}
        />

        {/* the bed: its hangings, posts, valance, pillow and coverlet */}
        <path d="M484 60H826V214H484Z" fill={INK} />
        <path d={m.folds} fill={PAPER} />
        <path
          d={valance}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <rect
          x={462}
          y={40}
          width={386}
          height={12}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        {/* the curtains drawn back and tied at the posts */}
        <path
          d="M486 64C500 100 498 150 490 176C502 190 504 206 500 214L482 214V64Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d="M824 64C810 100 812 150 820 176C808 190 806 206 810 214L828 214V64Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d={gouge(488, 176, 500, 178, 1.4) + gouge(810, 178, 822, 176, 1.4)} fill={PAPER} />
        <path d="M476 52V282M834 52V282" stroke={PAPER} strokeWidth={10} />
        <path d="M476 52V282M834 52V282" stroke={INK} strokeWidth={7} />
        <path
          d="M744 212C744 198 756 192 774 192C792 192 806 198 806 212Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.2}
        />
        <path d="M480 212H830V258H480Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d="M480 220H830" stroke={PAPER} strokeWidth={2.2} />
        <path
          d={Array.from({ length: 12 }, (_, i) =>
            wedge(500 + i * 28, 228, 506 + i * 28, 252, 1.2, 0.4),
          ).join('')}
          fill={PAPER}
        />
        <path d="M484 258V278M826 258V278" stroke={INK} strokeWidth={8} />

        <path d={footShadow(478, 304, 44)} fill={INK} />

        <CutFigure parts={JULIET} cuts={JULIET_CUTS} tone="paper" halo={2.2}>
          {/* her dark hair, loose down her back */}
          <path d={JULIET_HAIR} transform={JULIET_HEAD} fill={INK} />
          <path d={JULIET_STRANDS} transform={JULIET_HEAD} fill={PAPER} />
          <path d={EYE} transform={JULIET_HEAD} fill={INK} />
          <path d={gouge(4.6, -7.4, 10.8, -8.2, 0.6, -0.4)} transform={JULIET_HEAD} fill={INK} />
          <ellipse cx={6} cy={6.6} rx={2.1} ry={1.4} transform={JULIET_HEAD} fill={RED} />
        </CutFigure>

        {/* the vial, held up: "Romeo, Romeo, Romeo, here's drink! I drink to thee." */}
        <path
          d="M444 72H450V79C454 81 456 85 456 90V98C456 101 453 103 450 103H444C441 103 438 101 438 98V90C438 85 440 81 444 79Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <rect
          x={442}
          y={66}
          width={10}
          height={7}
          rx={1.5}
          fill={INK}
          stroke={PAPER}
          strokeWidth={1.2}
        />
        <path d={gouge(441, 86, 441, 98, 1.1, -0.4)} fill={PAPER} />
      </g>
    </>
  )
}

export const julietDrinksThePotion: LinocutArt = {
  width: W,
  height: H,
  Draw: JulietDrinksThePotion,
}
