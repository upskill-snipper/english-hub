import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rays,
  ribbon,
  rng,
  wisps,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  BEAVER_BONNET,
  BEAVER_BONNET_LINES,
  BEAVER_BONNET_STRING,
  Figure,
  HEAD_JANE,
  HEAD_ROCHESTER,
  JaneFace,
  Mesrour,
  OPEN_HAND,
  Pilot,
  ROCHESTER_CUTS,
  ROCHESTER_EAR,
  ROCHESTER_HAIR,
  ROCHESTER_HAIRLINE,
  ROCHESTER_HAIR_CUTS,
  cloak,
  handAt,
  headAt,
  line,
  man,
  woman,
  type P,
  type Part,
} from './people'

/**
 * Chapter 12: "The rider in Hay Lane", the seventh moment in the guide's
 * timeline. Every detail is from the held edition
 * (src/data/full-texts/jane-eyre.ts).
 *
 * THE MOMENT DRAWN. After the fall, as Rochester, lamed, leans on Jane to
 * reach his horse: "He laid a heavy hand on my shoulder, and leaning on me
 * with some stress, limped to his horse." The fall itself is not drawn.
 *
 * - THE LANE. "This lane inclined up-hill all the way to Hay; having reached
 *   the middle, I sat down on a stile which led thence into a field ... it
 *   froze keenly; as was attested by a sheet of ice covering the causeway";
 *   "From my seat I could look down on Thornfield: the grey and battlemented
 *   hall was the principal object in the vale below it"; "On the hill-top
 *   above me sat the rising moon; pale yet as a cloud, but brightening
 *   momentarily, she looked over Hay, which, half lost in trees, sent up a
 *   blue smoke from its few chimneys". So the lane runs along under a hedge
 *   with its stile, the ice lies on the causeway, Hay and its smoke stand on
 *   the hill under the moon at the left, and the hall lies in the vale at the
 *   right with the last of the sunset, printed in the spot colour, low over
 *   its woods ("the sun went down amongst the trees, and sank crimson and
 *   clear behind them").
 * - "Something of daylight still lingered, and the moon was waxing bright: I
 *   could see him plainly. His figure was enveloped in a riding cloak, fur
 *   collared and steel clasped". So Rochester is cut from the figure kit
 *   (./people.tsx), his head bowed, in a cloak with a fur collar and two
 *   steel clasps, his near foot held off the ground.
 * - Jane: "a black merino cloak, a black beaver bonnet" (Chapter 12), the
 *   kit's beaver bonnet over her pale face.
 * - Mesrour, "a tall steed", waits on the ice, his head turned to them;
 *   Pilot, "a lion-like creature with long hair and a huge head", black and
 *   white, stands by. Both as the kit cuts them.
 *
 * Seeds: 701 to 710.
 */

const W = 860
const H = 340
/** The lane's far edge, at the foot of the hedge: it falls to the right, downhill. */
const laneTop = (x: number) => 240 + x * 0.024
/** The middle of the causeway of worn stones. */
const causeway = (x: number) => 292 + x * 0.018
/** The far horizon, where the vale meets the western hills. */
const HORIZON = 196

/** The hill's skyline, rising leftwards to Hay on its top. */
function hillTop(x: number) {
  return 100 + clamp(x / 300) ** 1.15 * 104 + Math.sin(x / 37) * 2
}
/** The top of the far hedge, rough and low; it ends where the field opens on the vale. */
function hedgeTop(x: number) {
  return 206 + x * 0.022 + Math.sin(x / 23) * 4 + Math.sin(x / 7.3) * 2
}
/** The skyline of Thornfield's woods and the rookery behind the hall. */
function woodsTop(x: number) {
  return 182 + Math.sin(x / 19) * 4 + Math.sin(x / 8) * 2.5 - clamp((x - 790) / 70) * 8
}

/** The stile in the hedge, "which led thence into a field". */
const STILE = { x0: 132, x1: 190 }
const HEDGE_END = 612
/** Where the ice glazes the causeway, under the horse. */
const ICE = { x0: 470, x1: 760 }
/** "On the hill-top above me sat the rising moon; pale yet as a cloud". */
const MOON = { cx: 180, cy: 98, r: 22 }

type Marks = {
  sky: string
  vale: string
  hill: string
  hedge: string
  twigs: string
  lane: string
  stones: string
  ice: string
  moonHalo: string
  smoke: string
  woods: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // Dusk: "Something of daylight still lingered, and the moon was waxing
  // bright". The sky pales towards the horizon, the afterglow lies low in the
  // west (right), and the moon lights the sky round itself in the east (left).
  const skyLight = (x: number, y: number) => {
    const base = 0.14 + 0.76 * clamp((y - 30) / 170) ** 1.3
    const west = clamp(1 - Math.hypot((x - 860) * 0.55, (y - 190) * 1.6) / 420) ** 1.3
    const moon = clamp(1 - Math.hypot(x - MOON.cx, y - MOON.cy) / 140) ** 1.5 * 0.85
    return Math.max(base, west, moon)
  }
  const sky = gougeField(rng(701), { x0: 0, x1: W, y0: 4, y1: HORIZON + 4 }, skyLight, {
    spacing: 6.6,
    len: [30, 110],
    gap: [6, 22],
    max: 4.6,
  })
  // The vale below, in the last of the light: its fields cut in long low
  // strokes, pale enough for the black horse to stand out against them.
  const rv = rng(702)
  let vale = ''
  for (let y = HORIZON + 3; y < 262; y += 4.4 + (y - HORIZON) * 0.03) {
    let x = 300 + between(rv, -10, 0)
    while (x < W) {
      const len = between(rv, 16, 54)
      const L = 0.35 + clamp((x - 300) / 560) * 0.35
      if (rv() < 0.35 + L) vale += gouge(x, y, x + len, y + between(rv, -0.4, 0.4), 0.4 + L * 1.6)
      x += len + between(rv, 4, 12)
    }
  }
  // The hill rising on the left towards Hay: rough pasture, cut in short
  // strokes that slope with the ground and pale towards the moon.
  const rh = rng(703)
  let hill = ''
  for (let i = 0; i < 170; i++) {
    const x = between(rh, 0, 330)
    const top = hillTop(x)
    const y = between(rh, top + 4, 236)
    const L = clamp(1 - Math.hypot(x - MOON.cx, y - MOON.cy) / 200) * 0.9
    hill += gouge(x, y, x + between(rh, 6, 16), y - between(rh, 0.5, 2.5), 0.35 + L * 1.4)
  }
  // The hedge along the far side of the lane: "the stripped hawthorn and
  // hazel bushes were as still as the white, worn stones". Bare twigs cut
  // against the sky over a dark tangle.
  const rt = rng(704)
  let hedge = `M-4 ${n(laneTop(0) + 2)}`
  for (let x = -4; x <= HEDGE_END; x += 5)
    hedge += `L${n(x)} ${n(hedgeTop(x) + between(rt, -3, 3))}`
  hedge += `L${HEDGE_END} ${n(laneTop(HEDGE_END) + 2)}Z`
  let twigs = ''
  for (let i = 0; i < 120; i++) {
    const x = between(rt, 0, HEDGE_END - 4)
    if (x > STILE.x0 - 6 && x < STILE.x1 + 6) continue
    const y0 = hedgeTop(x) + between(rt, 0, 6)
    const a = between(rt, -2.4, -0.7)
    const len = between(rt, 8, 22)
    twigs += gouge(x, y0, x + Math.cos(a) * len, y0 + Math.sin(a) * len, between(rt, 0.5, 0.9))
  }
  // The lane: frozen ground, pale under the moon, and the causeway of white,
  // worn stones down its middle.
  const rl = rng(705)
  let lane = ''
  for (let y = 244; y < H; y += 4.4 + (y - 244) * 0.035) {
    let x = between(rl, -20, 0)
    while (x < W) {
      const len = between(rl, 10, 40) * (0.7 + (y - 240) / 140)
      if (y > laneTop(x) + 3 && rl() < 0.5)
        lane += gouge(
          x,
          y,
          x + len,
          y + between(rl, -0.3, 0.3) + len * 0.02,
          0.35 + ((y - 240) / 100) * 0.9,
        )
      x += len + between(rl, 6, 20)
    }
  }
  // The stones: rounded tops in two loose rows, some missing, worn smooth.
  let stones = ''
  for (let x = -6; x < W; x += between(rl, 18, 34)) {
    if (x > ICE.x0 - 10 && x < ICE.x1) continue
    for (const dy of [-5, 6]) {
      if (rl() < 0.3) continue
      const y = causeway(x) + dy + between(rl, -2, 2)
      const w = between(rl, 9, 16)
      const h = between(rl, 3, 5)
      const x0 = x + between(rl, -4, 6)
      stones += `M${n(x0)} ${n(y)}Q${n(x0 + w / 2)} ${n(y - h)} ${n(x0 + w)} ${n(y)}`
    }
  }
  // "a sheet of ice covering the causeway, where a little brooklet, now
  // congealed, had overflowed": smooth, with long glints across it.
  const ri = rng(706)
  let ice = ''
  for (let k = 0; k < 8; k++) {
    const x = between(ri, ICE.x0 + 16, ICE.x1 - 70)
    const y = between(ri, causeway(x) - 6, causeway(x) + 10)
    ice += gouge(x, y, x + between(ri, 30, 70), y + between(ri, 0.5, 2), 0.7)
  }
  const moonHalo = rays(rng(707), MOON.cx, MOON.cy, {
    from: MOON.r + 6,
    to: MOON.r + 60,
    every: 10,
    width: 2.2,
  })
  // "Hay, which, half lost in trees, sent up a blue smoke from its few
  // chimneys": thin smoke, cut in ink on the pale sky round the moon.
  const smoke = wisps(rng(708), 3, { x0: 30, x1: 120, y0: 82, y1: 98 }, [1.2, 2.2])
  // The crowns of Thornfield's woods and rookery, black against the west.
  const rw = rng(709)
  let woods = ''
  for (let i = 0; i < 60; i++) {
    const x = between(rw, 630, 860)
    const y = woodsTop(x) + between(rw, 0, 4)
    woods += gouge(x, y, x + between(rw, -4, 4), y - between(rw, 4, 9), 0.6)
  }
  cached = { sky, vale, hill, hedge, twigs, lane, stones, ice, moonHalo, smoke, woods }
  return cached
}

/** Hay on the hill-top: a few roofs and chimneys, half lost in trees. */
const HAY =
  'M14 122L14 108L26 100L38 108L38 103L42 103L42 110L54 102L66 110L66 124Z' +
  'M84 130L84 117L94 110L104 117L104 130Z'
const HAY_TREES =
  'M0 126C2 114 8 106 16 110C18 100 28 96 34 102L34 124ZM60 128C60 118 68 110 78 114C86 106 96 110 98 118C106 116 112 122 110 132Z'

/** Thornfield Hall in the vale: "the grey and battlemented hall". */
const HALL = { x0: 744, x1: 834, top: 178, base: 206 }
const HALL_BATTLEMENTS = (() => {
  let d = `M${HALL.x0 - 2} ${HALL.top + 3}`
  for (let x = HALL.x0 - 2; x < HALL.x1 + 2; x += 9) {
    const x1 = Math.min(x + 5, HALL.x1 + 2)
    d += `L${x} ${HALL.top - 3}L${x1} ${HALL.top - 3}L${x1} ${HALL.top}L${Math.min(x + 9, HALL.x1 + 2)} ${HALL.top}`
  }
  return d + `L${HALL.x1 + 2} ${HALL.top + 3}Z`
})()

// ── THE PEOPLE ──────────────────────────────────────────────────────────────

/**
 * Rochester, limping to his horse with his weight on Jane: his riding cloak
 * with its fur collar and steel clasps, his black head bowed with the pain of
 * the sprain, his near foot lifted off the ground. His near arm comes out of
 * the cloak and lays its hand on Jane's shoulder; it is drawn after her.
 */
const ROCH_HEAD = { d: HEAD_ROCHESTER, at: [374, 158] as P, rot: 14, scale: 1.2 }
const ROCH_T = headAt(1, ROCH_HEAD.at, ROCH_HEAD.rot, ROCH_HEAD.scale)
const ROCH_NECK: P = [366, 184]
const ROCHESTER: Part[] = man({
  facing: 1,
  neck: ROCH_NECK,
  hip: [350, 252],
  head: ROCH_HEAD,
  hair: ROCHESTER_HAIR,
  robe: cloak(ROCH_NECK, 292, 1, { width: 46, flare: 12, lean: 4 }),
  body: { width: 40 },
  arm: 9.5,
  leg: 10.5,
  far: {
    arm: [],
    leg: [
      [348, 252],
      [344, 286],
      [342, 316],
    ],
  },
  near: {
    arm: [],
    leg: [
      [356, 252],
      [368, 284],
      [362, 306],
    ],
  },
})
/**
 * The fur collar over his shoulders: ink, its fur cut in short paper strokes
 * that follow its curve, and its two steel clasps at the throat.
 */
const FUR =
  'M346 192C350 181 362 177 374 179C382 180 388 185 390 193L386 207C374 201 358 201 348 207Z'
const FUR_CUTS = Array.from({ length: 13 }, (_, i) => {
  const t = i / 12
  const x = 349 + t * 38
  const y = 189 - Math.sin(t * Math.PI) * 7
  return gouge(x, y, x + (t - 0.5) * 3, y + 11 + Math.sin(t * Math.PI) * 3, 0.65)
}).join('')
const ROCH_ARM: P[] = [
  [390, 212],
  [400, 208],
  [408, 212],
]
const ROCH_HAND = { parts: OPEN_HAND, scale: 0.92, rot: 42 }
/** The folds of his cloak as it swings, cut in paper. */
const ROCH_FOLDS =
  gouge(352, 212, 338, 286, 1.2, 1) +
  gouge(366, 216, 360, 288, 1, -1) +
  gouge(380, 222, 386, 286, 0.9, -1)

/**
 * Jane, small beside him, in her black cloak and bonnet, her pale face under
 * the brim, looking ahead at the horse she was "mortally afraid" of.
 */
const JANE_HEAD = { d: HEAD_JANE, at: [428, 192] as P, scale: 1.06 }
const JANE_T = headAt(1, JANE_HEAD.at, 0, JANE_HEAD.scale)
const JANE_NECK: P = [426, 214]
const JANE = woman({
  facing: 1,
  neck: JANE_NECK,
  waist: [426, 240],
  hemY: 322,
  head: JANE_HEAD,
  gown: { shoulder: 22, waistW: 16, front: 22, back: 22 },
  near: { arm: [] },
  far: { arm: [] },
  toes: [[436, 320]],
})
const JANE_CLOAK = cloak(JANE_NECK, 298, 1, { width: 32, flare: 9 })
const JANE_FOLDS = gouge(418, 226, 412, 294, 1, 1) + gouge(432, 230, 436, 294, 0.9, -1)

function TheRiderInHayLane({ uid }: ArtProps) {
  const m = marks()
  const id = { lane: `${uid}-lane` }
  return (
    <>
      <defs>
        <clipPath id={id.lane}>
          <path d={`M-4 ${laneTop(-4)}L${W + 4} ${laneTop(W + 4)}V${H + 4}H-4Z`} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [430, 230], push: 1.03 })}>
        {/* the dusk sky: the afterglow low in the west, the moon in the east */}
        <path d={m.sky} fill={PAPER} />
        {/* "the sun went down amongst the trees, and sank crimson and clear
            behind them": what is left of the crimson, low over the west */}
        <g fill={RED}>
          <path
            d={ribbon(
              [
                [738, 170],
                [780, 168],
                [822, 169],
                [864, 166],
              ],
              5,
              0.6,
            )}
          />
          <path
            d={ribbon(
              [
                [770, 159],
                [810, 157],
                [840, 158],
                [864, 156],
              ],
              3,
              0.6,
            )}
          />
        </g>
        {/* the moon, "pale yet as a cloud, but brightening momentarily" */}
        <path
          className="lc-fade-in"
          style={timing({ delay: 0.4, dur: 1.6 })}
          d={m.moonHalo}
          fill={PAPER}
        />
        <circle cx={MOON.cx} cy={MOON.cy} r={MOON.r + 3} fill={INK} />
        <circle cx={MOON.cx} cy={MOON.cy} r={MOON.r} fill={PAPER} />
        <path
          d={arcDashes(rng(710), MOON.cx + 4, MOON.cy + 3, MOON.r - 9, 2.2, 4.4, [6, 12], [4, 8])}
          fill="none"
          stroke={INK}
          strokeWidth={LINE.hairline}
        />

        {/* the vale below, Thornfield in it, its woods and rookery black
            against the west */}
        <path d={`M300 ${HORIZON - 4}L${W + 4} ${HORIZON - 6}V262H300Z`} fill={INK} />
        <path d={m.vale} fill={PAPER} />
        <path
          d={`M300 ${HORIZON}Q420 ${HORIZON - 8} 520 ${HORIZON - 2}T720 ${HORIZON - 4}L${W + 4} ${HORIZON - 3}V${HORIZON + 3}H300Z`}
          fill={INK}
        />
        <path
          d={`M630 ${HORIZON}${Array.from({ length: 24 }, (_, i) => `L${630 + i * 10} ${n(woodsTop(630 + i * 10))}`).join('')}L${W + 4} ${HORIZON - 10}L${W + 4} 214L630 214Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        <path d={m.woods} fill={INK} />
        {/* the hall, distinct and pale under the moon's "hoary gleam" */}
        <rect
          x={HALL.x0}
          y={HALL.top}
          width={HALL.x1 - HALL.x0}
          height={HALL.base - HALL.top}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.fine}
        />
        <path d={HALL_BATTLEMENTS} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path
          d={[0, 1, 2, 3, 4, 5]
            .map((k) => [184, 194].map((y) => `M${HALL.x0 + 8 + k * 14} ${y}h4v5h-4Z`).join(''))
            .join('')}
          fill={INK}
        />

        {/* the hill rising to Hay, and Hay on its top, its chimneys smoking */}
        <path
          d={`M-4 ${n(hillTop(-4))}${Array.from({ length: 34 }, (_, i) => `L${i * 10} ${n(hillTop(i * 10))}`).join('')}L340 244L-4 244Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        <path d={m.hill} fill={PAPER} />
        <path d={HAY_TREES} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path d={HAY} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path d="M23 108h4v6h-4ZM92 118h4v6h-4Z" fill={PAPER} />
        <g className="lc-drift" style={timing({ delay: 0.3 })}>
          <path d={m.smoke} fill={INK} />
        </g>

        {/* the hedge along the far side of the lane, and the stile in it,
            with Jane's muff put down on it */}
        <path d={m.hedge} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path d={m.twigs} fill={INK} />
        <g fill={INK} stroke={PAPER} strokeWidth={LINE.fine}>
          <rect x={STILE.x0} y={204} width={6} height={44} />
          <rect x={STILE.x1 - 6} y={202} width={6} height={46} />
          <rect x={STILE.x0 - 4} y={218} width={STILE.x1 - STILE.x0 + 8} height={6} />
          <rect x={STILE.x0 - 2} y={234} width={STILE.x1 - STILE.x0 + 4} height={5} />
        </g>
        <path
          d="M146 218C146 208 156 204 164 205C172 206 176 211 175 218Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d={gouge(150, 214, 170, 214, 0.8) + gouge(154, 209, 168, 209, 0.6)} fill={PAPER} />

        {/* the lane, frozen hard and pale, the causeway and the ice on it */}
        <g clipPath={`url(#${id.lane})`}>
          <rect x={-4} y={236} width={W + 8} height={H - 232} fill={PAPER} />
          <path d={m.lane} fill={INK} />
          <path d={m.stones} fill="none" stroke={INK} strokeWidth={LINE.fine} />
          <path
            d={`M${ICE.x0} ${n(causeway(ICE.x0) - 4)}C${ICE.x0 + 80} ${n(causeway(ICE.x0) - 14)} ${ICE.x1 - 80} ${n(causeway(ICE.x1) - 16)} ${ICE.x1} ${n(causeway(ICE.x1) - 2)}C${ICE.x1 - 60} ${n(causeway(ICE.x1) + 18)} ${ICE.x0 + 70} ${n(causeway(ICE.x0) + 22)} ${ICE.x0} ${n(causeway(ICE.x0) - 4)}Z`}
            fill={PAPER}
            stroke={INK}
            strokeWidth={LINE.fine}
          />
          <path d={m.ice} fill={INK} />
        </g>
        <path
          d={`M-4 ${n(laneTop(-4))}L${W + 4} ${n(laneTop(W + 4))}`}
          stroke={INK}
          strokeWidth={LINE.bold}
        />

        {/* Mesrour, waiting on the ice, his head turned to them */}
        <Mesrour at={[524, 312]} s={0.95} flip />
        {/* Pilot, silenced, watching his master */}
        <Pilot at={[252, 322]} s={1.02} />

        {/* Rochester, leaning on Jane */}
        <Figure parts={ROCHESTER} cuts={ROCH_FOLDS}>
          <path d={FUR} fill={INK} stroke={PAPER} strokeWidth={1.4} />
          <path d={FUR_CUTS} fill={PAPER} />
          <g fill={PAPER} stroke={INK} strokeWidth={0.8}>
            <circle cx={389} cy={200} r={2.4} />
            <circle cx={389} cy={208} r={2.4} />
          </g>
          <g transform={ROCH_T}>
            <path d={ROCHESTER_HAIR_CUTS + ROCHESTER_CUTS} fill={PAPER} />
            <path
              d={ROCHESTER_HAIRLINE + ROCHESTER_EAR}
              fill="none"
              stroke={PAPER}
              strokeWidth={1.1}
              strokeLinecap="round"
            />
          </g>
        </Figure>
        <Figure parts={[...JANE, { d: JANE_CLOAK }]} cuts={JANE_FOLDS}>
          <JaneFace t={JANE_T} hair={false} tucker={false} />
          <g transform={JANE_T}>
            <path
              d={BEAVER_BONNET}
              fill={INK}
              stroke={PAPER}
              strokeWidth={1.2}
              strokeLinejoin="round"
            />
            <path d={BEAVER_BONNET_LINES} fill={PAPER} />
            <path
              d={BEAVER_BONNET_STRING}
              fill="none"
              stroke={INK}
              strokeWidth={1.4}
              strokeLinecap="round"
            />
          </g>
        </Figure>
        {/* "He laid a heavy hand on my shoulder" */}
        <Figure
          parts={[
            { d: line(ROCH_ARM), w: 9.5, sep: 1.4 },
            ...OPEN_HAND.map((q) => ({ ...q, t: handAt(ROCH_ARM, 1, ROCH_HAND) })),
          ]}
        />
      </g>
    </>
  )
}

export const theRiderInHayLane: LinocutArt = { width: W, height: H, Draw: TheRiderInHayLane }
