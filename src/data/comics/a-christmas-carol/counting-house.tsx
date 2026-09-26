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
  wedge,
  wisps,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { ScroogeSilhouette } from './scrooge'

/**
 * Stave One: "Christmas Eve at the counting-house", the first moment in the
 * guide's timeline. Every detail is from the text:
 *
 * - "It was cold, bleak, biting weather: foggy withal"; "The city clocks had
 *   only just gone three, but it was quite dark already"; "candles were flaring
 *   in the windows of the neighbouring offices, like ruddy smears upon the
 *   palpable brown air"; "the houses opposite were mere phantoms". So the
 *   window is full of fog, the houses are faint hatching and the far candles
 *   are two red smears.
 * - "The door of Scrooge's counting-house was open that he might keep his eye
 *   upon his clerk, who in a dismal little cell beyond, a sort of tank, was
 *   copying letters." So the Tank is seen through an open doorway, and
 *   Scrooge faces it.
 * - "Scrooge had a very small fire, but the clerk's fire was so very much
 *   smaller that it looked like one coal", "Scrooge kept the coal-box in his
 *   own room", "the clerk put on his white comforter, and tried to warm
 *   himself at the candle". So Scrooge's grate is small, the coal-box is at
 *   his side, and Bob has one red coal, a candle and a long white comforter.
 * - Fred "came upon him so quickly that this was the first intimation he had
 *   of his approach", "all in a glow; his face was ruddy and handsome; his eyes
 *   sparkled, and his breath smoked again". The text puts the outer door by the
 *   clerk (Fred leaves by "the outer door" and greets the clerk there), so he
 *   stands just inside Scrooge's room from the Tank side, facing his uncle:
 *   his face is edged in the spot colour, his eye is a cut spark, and his
 *   breath rises towards Scrooge in three white puffs.
 *
 * Nobody's dress is described beyond Bob's comforter, so Fred wears a plain
 * top hat, muffler and greatcoat of 1843.
 *
 * Carried over from the approved prototype (26 September 2026): everything
 * but Fred. Fred is new, because the moment names him among those present.
 */

const W = 860
const H = 340

type Marks = {
  wall: string
  wains: string
  floor: string
  floorShade: string
  pool: string
  houses: string
  fogWin: string
  tankRays: string
  frame: [number, number, number, number][]
  breath: Puff[]
  puffCurls: string[]
}

/** One puff of breath: circles [cx, cy, r] whose union is the cloud. */
type Puff = [number, number, number][]

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(101)
  // The room is lit by the fog-light from the window and, faintly, by
  // Scrooge's small fire; the cuts in the wall follow it.
  const light = (x: number, y: number) => {
    const l1 = clamp(1 - Math.hypot((x - 370) * 0.8, y - 88) / 250)
    const l2 = clamp(1 - Math.hypot(x - 78, y - 200) / 150) * 0.7
    return Math.max(l1, l2, 0.05)
  }
  const wall = gougeField(r, { x0: 0, x1: W, y0: 4, y1: 158 }, light)

  let wains = ''
  for (let x = 2; x < W; x += 9) {
    if (x > 8 && x < 150) continue
    const L = light(x, 200)
    wains += wedge(
      x + between(r, -0.6, 0.6),
      175,
      x + between(r, -0.6, 0.6),
      231,
      0.4,
      0.8 + L * 3.2,
    )
  }

  // Floor: paper boards, ink joints running to a vanishing point.
  let floor = ''
  const V = [470, 30]
  for (let xt = -560; xt < 1440; xt += 30) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (241 - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(r, 0.3, 0.8))
      floor += wedge(
        xt + (xb - xt) * t0,
        241 + (H - 241) * t0,
        xt + (xb - xt) * t1,
        241 + (H - 241) * t1,
        0.8 + t0 * 3,
        0.8 + t1 * 3,
      )
      t0 = t1 + between(r, 0.02, 0.07)
    }
  }
  let floorShade = ''
  for (let y = 242; y < 262; y += 3) floorShade += gouge(0, y, W, y, 2.6 - (y - 242) * 0.12)
  // Shadow pools under the stool, the desk and Fred.
  let pool = ''
  for (let y = 300; y < 334; y += 3.4) {
    const w = 1 - Math.abs(y - 316) / 20
    pool += gouge(300 - w * 10, y, 548 + w * 20, y + 1, 1 + w * 2.2)
  }
  for (let y = 259; y < 273; y += 3.2) {
    const w = 1 - Math.abs(y - 265) / 9
    pool += gouge(530 - w * 6, y, 614 + w * 8, y + 0.6, 0.6 + w * 1.6)
  }
  let houses = ''
  for (let x = 250; x < 470; x += 4.4) houses += `M${n(x)} 20L${n(x + 70)} 160`
  const fogWin = wisps(rng(55), 8, { x0: 262, x1: 470, y0: 34, y1: 142 }, [5, 12])
  const tankRays = rays(rng(606), 690, 143)
  const frame: Marks['frame'] = [0, 1, 2].map((k) => [
    571 + k * 4,
    19 + k * 4,
    258 - k * 8,
    223 - k * 4,
  ])

  // Fred's breath: three puffs, each a small cloud of overlapping rounds,
  // growing as they drift from his mouth towards his uncle.
  const b = rng(707)
  const breath: Puff[] = [
    [541, 87, 3.4],
    [526, 82.5, 4.8],
    [508, 77, 6.2],
  ].map(([cx, cy, rad]) => [
    [cx, cy, rad],
    [cx - rad * 0.8, cy + rad * 0.3 + between(b, -0.4, 0.4), rad * 0.72],
    [cx + rad * 0.7, cy + rad * 0.4 + between(b, -0.4, 0.4), rad * 0.62],
    [cx - rad * 0.1, cy - rad * 0.55, rad * 0.6],
  ])
  const puffCurls = breath.map(
    ([[cx, cy, rad]]) =>
      `M${n(cx - rad * 0.9)} ${n(cy + rad * 0.2)}q${n(rad * 0.5)} ${n(-rad * 0.6)} ${n(rad * 1.1)} ${n(-rad * 0.15)}`,
  )

  cached = {
    wall,
    wains,
    floor,
    floorShade,
    pool,
    houses,
    fogWin,
    tankRays,
    frame,
    breath,
    puffCurls,
  }
  return cached
}

/**
 * Fred, facing left towards Scrooge, just in from the Tank: top hat, muffler
 * with one end streaming behind him, greatcoat, one hand raised in greeting.
 * Drawn in his own frame (feet at 50, 260; 254 tall) and placed with FRED_AT.
 *
 * Built as a paper halo round every part, then the parts in ink over it, so
 * the figure reads as one shape with a single carved outline against the
 * black wall. The Tank's candle is behind him, so his back takes a thin rim
 * of light; the spot colour runs down the front of his face and flushes his
 * cheek.
 */
const FRED_AT = 'translate(566 264) scale(0.9) translate(-50 -260)'
const FRED = {
  hat: 'M28 41C30 37 34 37 37 38L35 8C44 5 58 5 67 8L64 38C67 37 71 37 73 41C66 44 36 44 28 41Z',
  head: 'M40 42C39 45 38.4 47.5 38.2 50L39 52.6C37 55.5 34.5 58 32.4 60.2C32 61 32.6 61.8 33.6 61.8L36.4 62.4L36 65L35.2 65.9L36.8 66.8L35.9 68L37.2 69.8C36.4 71 36 72.5 36.3 73.8C36.8 75.6 38.4 76.6 40.6 77C44 77.6 47 77.6 48.5 78.5L47 86L62 86C62 80 62.5 76 63.5 72C65.8 66 66.4 58 65.6 50L64.5 42Z',
  muffler: 'M42 81C49 79 57 79 64 81L65 89C57 91 49 91 42 90C40 88 40 83 42 81Z',
  tail: 'M62 81C68 79.6 74 79.8 80 81.6C83 82.6 85.2 83.8 87.4 85.2L89.6 87.8L87.2 88.2L89.4 90.8L86.9 91.2L88.8 93.9L86.2 94.2L87.8 97.1L84.8 96.7C78 95.1 71 92.4 64 90.2Z',
  coat: 'M42 87C38 91 34 96 33.5 104C33 113 34.5 122 37 130C34 150 31 172 28.5 194C40 199 52 201 62 200C70 199 78 197 84 194C78 176 72 154 67 132C69 122 70 112 69 102C68 96 66 91 63 87C56 85 48 85 42 87Z',
  hand: 'M19.5 113C16 111.6 11.5 112 8.4 113.8C6.8 114.9 7.3 117 9 117.3L12.8 117.7C11.4 119.1 11 121 12.6 121.8C15 122.6 17.6 121.2 19.6 119.6ZM14.6 113.2C14 110.6 15 108.4 16.9 108.7C18.5 109.1 18.6 111.4 18 113.4Z',
  bootFront: 'M21 243L32 242C33 249 34 254 34 259L11 260C10 257 13 255 19 254Z',
  bootBack: 'M66 241L77 240C80 244 81 248 80 251L64 260C60 260 59 258 61 256Z',
}
/** Limbs as thick strokes: the raised arm, and the two legs below the coat. */
const FRED_LIMBS = [
  'M47 95C42 104 37 112 32 116.5C28 117.6 24 117.6 19.5 117',
  'M37 190C34 212 30 230 27 246',
  'M62 192C66 210 70 228 72 243',
]
/** Drawn in this order: the muffler's tail and the coat behind the legs, the rest in front. */
const FRED_BEHIND = [FRED.tail, FRED.coat]
const FRED_FRONT = [FRED.hat, FRED.head, FRED.muffler, FRED.bootFront, FRED.bootBack]
const FRED_CUTS =
  gouge(40.5, 93, 37.5, 128, 0.9, 0.6) +
  gouge(44, 140, 39.5, 189, 1.1, 0.8) +
  gouge(56, 138, 58, 193, 1, -0.4) +
  gouge(64, 141, 73, 189, 0.9, -0.8) +
  gouge(68.5, 104, 81, 188, 0.8, -1.4) +
  gouge(64.5, 48, 64, 70, 0.7, -0.6)

function Fred({ uid }: { uid: string }) {
  const face = `${uid}-fred-face`
  return (
    <g transform={FRED_AT}>
      <defs>
        {/* The front of his face, for the spot-colour glow. */}
        <clipPath id={face}>
          <rect x={28} y={43} width={11.2} height={33} />
        </clipPath>
      </defs>
      {/* the paper halo round the whole figure */}
      <g fill={PAPER} stroke={PAPER} strokeWidth={3.6} strokeLinejoin="round">
        {[...FRED_BEHIND, ...FRED_FRONT, FRED.hand].map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <g fill="none" stroke={PAPER} strokeWidth={13.6} strokeLinecap="round">
        {FRED_LIMBS.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      {/* the figure in ink */}
      <g fill={INK}>
        {FRED_BEHIND.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <g fill="none" stroke={INK} strokeWidth={10} strokeLinecap="round">
        {FRED_LIMBS.slice(1).map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <g fill={INK}>
        {FRED_FRONT.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <path d={FRED_CUTS} fill={PAPER} />
      {/* folds in the muffler's end as it streams behind him */}
      <path d={gouge(70, 82, 68.5, 90, 0.7) + gouge(78.5, 83.2, 76, 92.4, 0.7)} fill={PAPER} />
      {/* the raised arm over the coat, cut free of it by its own paper edge */}
      <path d={FRED_LIMBS[0]} fill="none" stroke={PAPER} strokeWidth={13} strokeLinecap="round" />
      <path d={FRED_LIMBS[0]} fill="none" stroke={INK} strokeWidth={10} strokeLinecap="round" />
      <path d={FRED.hand} fill={INK} />
      <path d="M19.2 112.6L20 121" stroke={PAPER} strokeWidth={1.2} />
      {/* hat band, coat buttons, waist seam */}
      <path d="M36.5 34.2L64.5 34.2" stroke={PAPER} strokeWidth={1.4} />
      <g fill={PAPER}>
        {[106, 116, 126].map((y) => (
          <circle key={y} cx={43 - (y - 106) * 0.05} cy={y} r={1.3} />
        ))}
      </g>
      <path d="M37.5 131.5Q52 134.5 66.5 132.5" stroke={PAPER} strokeWidth={0.9} fill="none" />
      {/* "all in a glow; his face was ruddy" */}
      <g clipPath={`url(#${face})`}>
        <path d={FRED.head} fill="none" stroke={RED} strokeWidth={2.4} strokeLinejoin="round" />
      </g>
      <ellipse cx={44.5} cy={64.5} rx={3.4} ry={2.6} fill={RED} />
      {/* "his eyes sparkled" */}
      <path d={gouge(39.6, 55.4, 43.6, 54.6, 1)} fill={PAPER} />
      <path d="M41.6 52.4L42.2 51M44.4 53L45.4 52" stroke={PAPER} strokeWidth={0.7} />
    </g>
  )
}

function CountingHouse({ uid }: ArtProps) {
  const m = marks()
  const id = {
    win: `${uid}-win`,
    tank: `${uid}-tank`,
    houses: `${uid}-houses`,
  }
  return (
    <>
      <defs>
        <clipPath id={id.win}>
          <rect x={300} y={24} width={140} height={126} />
        </clipPath>
        <clipPath id={id.tank}>
          <rect x={586} y={34} width={228} height={206} />
        </clipPath>
        <clipPath id={id.houses}>
          <path d="M300 150V96L318 84L336 96V150ZM404 150V112H414V104H420V112H440V150Z" />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [600, 150], push: 1.03 })}>
        <path d={m.wall} fill={PAPER} />
        <rect x={0} y={159} width={W} height={6} fill={PAPER} />
        <rect x={0} y={169} width={W} height={1.8} fill={PAPER} />
        <path d={m.wains} fill={PAPER} />
        <rect x={0} y={233} width={W} height={8} fill={PAPER} />
        <rect x={0} y={236} width={W} height={1.4} fill={INK} />
        <rect x={0} y={241} width={W} height={H - 241} fill={PAPER} />
        <path d={m.floor} fill={INK} />
        <path d={m.floorShade} fill={INK} />
        <path d={m.pool} fill={INK} />

        {/* Scrooge's very small fire, in a pale stone surround */}
        <rect x={12} y={144} width={136} height={97} fill={PAPER} />
        <rect x={8} y={140} width={144} height={6} fill={INK} />
        <rect x={6} y={136} width={148} height={4} fill={PAPER} />
        <path
          d={
            gouge(22, 152, 22, 236, 1.6) +
            gouge(28, 156, 28, 232, 1) +
            gouge(132, 152, 132, 236, 1.6) +
            gouge(138, 156, 138, 232, 1) +
            gouge(52, 152, 108, 152, 1.2)
          }
          fill={INK}
        />
        <path d="M42 241V184Q42 168 58 168H102Q118 168 118 184V241Z" fill={INK} />
        <path
          d="M58 216H102M59 222H101M60 228H100M62 216V236M98 216V236"
          fill="none"
          stroke={PAPER}
          strokeWidth={1.5}
        />
        <g fill={RED}>
          <path d="M62 216C62 210 68 207 73 211C75 206 84 206 86 211C91 208 99 211 98 216Z" />
          <path className="lc-flicker" d="M71 211C69 204 73 198 75 192C78 199 82 204 78 211Z" />
          <path
            className="lc-flicker"
            style={timing({ dur: 0.8, delay: 0.35 })}
            d="M84 211C83 206 86 202 87 198C89 202 91 206 89 211Z"
          />
        </g>
        <rect x={4} y={241} width={152} height={8} fill={PAPER} />
        <rect x={4} y={249} width={152} height={2} fill={INK} />

        {/* the coal-box, kept in Scrooge's own room */}
        <path d="M154 270L190 270L186 300L158 300Z" fill={INK} />
        <path d="M150 271L194 264L194 268L150 275Z" fill={INK} />
        <path
          d={
            gouge(163, 278, 162, 296, 1.1) +
            gouge(172, 278, 172, 297, 1.1) +
            gouge(181, 278, 182, 296, 1.1)
          }
          fill={PAPER}
        />
        <g fill={INK}>
          <circle cx={162} cy={266} r={4.4} />
          <circle cx={171} cy={263.5} r={5} />
          <circle cx={180} cy={264} r={4} />
        </g>
        <path d={gouge(160, 264, 165, 262, 0.9) + gouge(169, 261, 175, 260, 0.9)} fill={PAPER} />

        {/* the window on the fog: phantom houses, far candles like ruddy smears */}
        <rect x={290} y={14} width={160} height={146} fill={INK} />
        <rect x={300} y={24} width={140} height={126} fill={PAPER} />
        <g clipPath={`url(#${id.win})`}>
          <g clipPath={`url(#${id.houses})`}>
            <path d={m.houses} stroke={INK} strokeWidth={LINE.fine} />
          </g>
          <path
            d="M300 96L318 84L336 96M404 112H414V104H420V112H440"
            fill="none"
            stroke={INK}
            strokeWidth={1.3}
          />
          <path d="M312 124C316 120 323 121 323 127C322 132 314 133 312 129Z" fill={RED} />
          <path d="M420 128C423 124 430 125 429 131C428 135 421 135 420 132Z" fill={RED} />
          <g className="lc-drift">
            <path d={m.fogWin} fill={PAPER} />
          </g>
        </g>
        <g fill={INK}>
          <rect x={300} y={24} width={140} height={4} />
          <rect x={300} y={146} width={140} height={4} />
          <rect x={300} y={24} width={4} height={126} />
          <rect x={436} y={24} width={4} height={126} />
          <rect x={368} y={24} width={4} height={126} />
          <rect x={300} y={84} width={140} height={5} />
          <rect x={300} y={54} width={140} height={2.6} />
          <rect x={300} y={117} width={140} height={2.6} />
        </g>
        <rect x={284} y={150} width={172} height={7} fill={PAPER} />
        <rect x={284} y={157} width={172} height={2} fill={INK} />

        {/* the high stool */}
        <path
          d="M322 214L316 318M354 214L360 318M318 286H358"
          stroke={INK}
          strokeWidth={4.5}
          fill="none"
          strokeLinecap="round"
        />
        <rect x={312} y={206} width={50} height={8} fill={INK} />
        {/* Scrooge, hunched at the desk, facing the Tank */}
        <path
          d="M346 118C336 126 326 136 323 152C319 172 319 192 322 208C316 222 312 238 313 254L327 254C329 238 333 224 338 214L380 216C390 218 394 222 398 226C400 250 401 272 402 292L401 303L432 304C433 298 428 295 416 293C414 272 415 244 418 216C420 206 414 200 404 199L378 197C381 180 381 162 378 146C375 136 368 128 360 122Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={1.4}
          strokeLinejoin="round"
        />
        <path
          d={
            gouge(331, 152, 326, 198, 1.7, 2) +
            gouge(339, 144, 336, 174, 1.1, 1.5) +
            gouge(320, 230, 318, 250, 1.1)
          }
          fill={PAPER}
        />
        <g transform="translate(328 64) scale(0.3)">
          <ScroogeSilhouette outline={0} />
        </g>
        <path d="M358 121L368 119.5L365 128Z" fill={PAPER} />
        {/* the sloping desk */}
        <path d="M400 184L528 160L528 214L400 226Z" fill={INK} />
        <path
          d={
            gouge(470, 176, 472, 214, 1.2) +
            gouge(430, 186, 432, 220, 1.2) +
            gouge(506, 172, 508, 210, 1.2)
          }
          fill={PAPER}
        />
        <path
          d="M404 226V318M524 214V312M404 292L524 288"
          stroke={INK}
          strokeWidth={5}
          fill="none"
        />
        <path d="M394 178L532 152L534 160L396 186Z" fill={INK} />
        <path d={gouge(396, 178, 532, 152, 1.3)} fill={PAPER} />
        <path d="M410 172L486 158L489 150L413 164Z" fill={PAPER} />
        <path
          d="M449 156.5L451 165.5M420 169.5L443 165.5M455 163.5L480 159"
          stroke={INK}
          strokeWidth={0.9}
          fill="none"
        />
        {/* arm, hand and pen */}
        <path
          d="M352 136C360 150 366 162 372 172C384 170 396 166 410 162"
          stroke={PAPER}
          strokeWidth={12}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M352 136C360 150 366 162 372 172C384 170 396 166 410 162"
          stroke={INK}
          strokeWidth={9}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d={gouge(362, 152, 369, 166, 1)} fill={PAPER} />
        <path
          d={ribbon(
            [
              [409, 160],
              [414, 152],
              [420, 144],
              [427, 137],
            ],
            3.4,
            0.5,
          )}
          fill={PAPER}
        />

        {/* the doorway into the Tank */}
        <rect x={562} y={12} width={276} height={229} fill={PAPER} />
        <g fill="none" stroke={INK} strokeWidth={LINE.fine}>
          {m.frame.map(([x, y, w, h]) => (
            <rect key={x} x={x} y={y} width={w} height={h} />
          ))}
        </g>
        <rect x={584} y={32} width={232} height={209} fill={INK} />
        <g clipPath={`url(#${id.tank})`}>
          <path
            d="M586 34L608 52M814 34L792 52M586 240L608 212M814 240L792 212M608 52H792V212H608Z"
            fill="none"
            stroke={PAPER}
            strokeWidth={LINE.fine}
          />
          <path d={m.tankRays} fill={PAPER} />
          <circle cx={690} cy={143} r={11} fill={INK} />
          <path d="M606 212L792 212L814 240L586 240Z" fill={INK} />
          <path
            d={
              gouge(640, 214, 632, 240, 1) +
              gouge(680, 214, 678, 240, 1) +
              gouge(720, 214, 724, 240, 1) +
              gouge(760, 214, 770, 240, 1)
            }
            fill={PAPER}
          />
          {/* one coal */}
          <path
            d="M614 213V194Q614 183 628 183Q642 183 642 194V213Z"
            fill={INK}
            stroke={PAPER}
            strokeWidth={LINE.carve}
          />
          <path d="M619 204H637" stroke={PAPER} strokeWidth={1} />
          <circle
            className="lc-glow"
            cx={628}
            cy={208}
            r={7.5}
            fill="none"
            stroke={RED}
            strokeWidth={1.2}
          />
          <circle cx={628} cy={208.5} r={3.6} fill={RED} />
          {/* Bob's desk, his letters and his candle */}
          <path d="M648 228V176M714 226V174" stroke={INK} strokeWidth={3.4} />
          <path d="M642 176L720 170L720 176L642 182Z" fill={INK} />
          <path d={gouge(642, 176, 720, 170, 1)} fill={PAPER} />
          <path d="M648 175L680 172.5L680 175L648 177.5Z" fill={PAPER} />
          <rect x={681} y={169} width={18} height={3} fill={PAPER} />
          <rect x={686} y={150.5} width={8} height={19} fill={INK} />
          <rect x={688} y={152} width={4} height={17} fill={PAPER} />
          <path
            className="lc-flicker"
            style={timing({ dur: 0.8 })}
            d="M690 150C686.5 146 687.5 141 690 134C692.5 141 693.5 146 690 150Z"
            fill={RED}
          />
          {/* Bob Cratchit: no great-coat, a white comforter with long ends */}
          <path d="M746 208L742 238M764 208L768 238" stroke={INK} strokeWidth={3.6} fill="none" />
          <rect x={738} y={203} width={32} height={6} fill={INK} />
          <path
            d="M738 138C748 138 757 147 761 160C764 172 764 190 762 205L736 206C730 207 722 207 715 206L713 213L717 236L702 237L700 232L708 230L704 212C704 204 710 198 720 198L733 198C731 186 728 170 728 160C728 150 731 142 738 138Z"
            fill={INK}
            stroke={PAPER}
            strokeWidth={0.9}
            strokeLinejoin="round"
          />
          <path
            d="M721 128C721 120 727 115 735 115.5C743 116 747 123 745.5 131C744.5 138 738.5 142 732 141.5L727 141C724 139.5 721.5 137.5 718.5 136.5L715.5 134.5C717.5 133 719.5 132 721 131Z"
            fill={INK}
            stroke={PAPER}
            strokeWidth={1.3}
          />
          <path
            d={
              gouge(736, 118, 742, 112, 1.2) +
              gouge(731, 116, 733, 110, 1.1) +
              gouge(743, 122, 749, 119, 1.1)
            }
            fill={PAPER}
          />
          <path
            d="M723 139C730 146 742 148 752 144L754 152C742 156 729 154 721 147Z"
            fill={PAPER}
          />
          <path
            d={ribbon(
              [
                [727, 147],
                [725, 162],
                [723, 178],
                [721, 194],
                [720, 212],
              ],
              6.5,
              0.3,
              false,
            )}
            fill={PAPER}
          />
          <path
            d={ribbon(
              [
                [733, 149],
                [732.5, 164],
                [732, 180],
                [732.5, 196],
                [734, 213],
              ],
              5.5,
              0.3,
              false,
            )}
            fill={PAPER}
          />
          <path
            d="M720 211L719 216M723 212L723 217M731 212L731 217M735 213L736 218"
            stroke={PAPER}
            strokeWidth={1}
          />
          <path
            d="M739 152C736 164 730 172 723 176C710 177 697 175 685 172"
            stroke={INK}
            strokeWidth={6.5}
            fill="none"
            strokeLinecap="round"
          />
          <path
            d={ribbon(
              [
                [684, 171],
                [679, 163],
                [675, 155],
              ],
              2,
              0.5,
            )}
            fill={PAPER}
          />
        </g>

        <Fred uid={uid} />
        {/* "his breath smoked again" */}
        {m.breath.map((puff, k) => (
          <g key={k} className="lc-rise" style={timing({ delay: 1 + k * 0.5, dur: 1.2 })}>
            <g fill={INK} stroke={INK} strokeWidth={3}>
              {puff.map(([cx, cy, rad]) => (
                <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={rad} />
              ))}
            </g>
            <g fill={PAPER}>
              {puff.map(([cx, cy, rad]) => (
                <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={rad} />
              ))}
            </g>
            <path
              d={m.puffCurls[k]}
              fill="none"
              stroke={INK}
              strokeWidth={0.8}
              strokeLinecap="round"
            />
          </g>
        ))}
      </g>
    </>
  )
}

export const countingHouse: LinocutArt = { width: W, height: H, Draw: CountingHouse }
