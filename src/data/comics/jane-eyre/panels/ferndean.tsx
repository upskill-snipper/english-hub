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
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  FERNDEAN_HAIR,
  FERNDEAN_HAIR_CUTS,
  Figure,
  HEAD_JANE,
  HEAD_ROCHESTER,
  HOLD_CUTS,
  HOLD_HAND,
  JaneFace,
  ROCHESTER_BLIND_CUTS,
  gown,
  handAt,
  headAt,
  line,
  man,
  type Hand,
  type P,
  type Part,
} from './people'

/**
 * Chapter 37: "Ferndean", the twenty-second moment in the guide's timeline.
 * Every detail is from the text (the held edition):
 *
 * - "To this house I came just ere dark on an evening marked by the
 *   characteristics of sad sky, cold gale, and continued small penetrating
 *   rain"; "deep buried in a wood"; "the windows were latticed and narrow";
 *   "the pattering rain on the forest leaves". So a narrow latticed window
 *   shows the wood at dusk and the rain, and Rochester's head is printed
 *   black against it.
 * - "This parlour looked gloomy: a neglected handful of fire burnt low in the
 *   grate; and, leaning over it, with his head supported against the high,
 *   old-fashioned mantelpiece, appeared the blind tenant of the room." So
 *   the room is dark, the high mantelpiece stands at his back, and a few
 *   embers burn low in its grate.
 * - Mary fills "a glass with water" and places "it on a tray, together with
 *   candles": "he always has candles brought in at dark, though he is
 *   blind"; "I set it on the table"; "he drank, and put the glass down". So
 *   the tray and two lit candles stand on the table, and the glass on the
 *   mantelshelf. The candle flames and the embers are the spot colour: "with
 *   the right eye I see a glow—a ruddy haze".
 * - "His old dog, Pilot ... jumped up with a yelp and a whine, and bounded
 *   towards me"; "Pilot followed me, still excited". So Pilot is at her
 *   side, looking up at her.
 * - "He groped; I arrested his wandering hand, and prisoned it in both
 *   mine." So she holds his one hand in both of hers, one hand above it and
 *   one below.
 * - ROCHESTER: "a man without a hat"; "his hair was still raven black"; "his
 *   thick and long uncut locks"; "those sightless eyes"; "the left arm, the
 *   mutilated one, he kept hidden in his bosom". So he is bareheaded, his
 *   long black hair over his collar, his eye shut, his head lifted and turned
 *   past her towards her voice, and his left arm folded across his chest into
 *   his coat, no hand showing (the kit's ROCHESTER AT FERNDEAN). No injury is
 *   drawn.
 * - JANE: "while I removed my bonnet and shawl"; "being so much lower of
 *   stature than he" (the end of the chapter). So she is bareheaded in her
 *   dark frock, a head and more shorter than he is, her face lifted to his.
 *
 * The quotation on the panel is the line it draws, "I arrested his wandering
 * hand, and prisoned it in both mine."; the guide's own quotation for the
 * moment, "I am an independent woman now.", is what she tells him a few
 * moments later, and the key-moments player prints it beside the panel.
 */

const W = 860
const H = 340
/** Where the wall meets the floor. */
const FLOOR = 312
/** The narrow latticed window, behind Rochester's head. */
const WIN = { x0: 450, x1: 534, y0: 26, y1: 196 }
/** The high, old-fashioned mantelpiece and the opening of the grate. */
const MANTEL = { x0: 592, x1: 818, shelf: 112 }
const GRATE = { x0: 646, x1: 764, top: 186 }
/** The two candles on the tray, [x, top of the candle]. */
const CANDLES: P[] = [
  [92, 182],
  [146, 186],
]

// ── ROCHESTER ───────────────────────────────────────────────────────────────

/** Rochester, after placing: close to, cut off at the shin by the block's edge. */
const R = {
  head: { d: HEAD_ROCHESTER, at: [502, 92] as P, rot: 9, scale: 1.06 },
  neck: [505, 121] as P,
  hip: [514, 244] as P,
  /** His right hand, held out, wandering, to find her. */
  far: [
    [497, 140],
    [472, 180],
    [444, 208],
  ] as P[],
  /** His left arm, kept in the bosom of his coat. */
  near: [
    [519, 140],
    [527, 190],
    [505, 184],
  ] as P[],
}
const R_HT = headAt(-1, R.head.at, R.head.rot, R.head.scale)
const R_HAND: Hand = { parts: HOLD_HAND, scale: 1.04, rot: 8 }
const ROCHESTER: Part[] = man({
  facing: -1,
  neck: R.neck,
  hip: R.hip,
  head: R.head,
  hair: FERNDEAN_HAIR,
  near: {
    arm: [],
    leg: [
      [520, 244],
      [522, 300],
      [524, 360],
    ],
  },
  far: {
    arm: R.far,
    leg: [
      [508, 244],
      [504, 300],
      [500, 360],
    ],
    hand: R_HAND,
  },
  body: { width: 48, tails: 60, front: 6 },
  arm: 11,
  leg: 12.5,
  feet: false,
})
/** The near arm, folded across his chest into the coat, its own paper edge round it. */
const ROCHESTER_ARM: Part[] = [{ d: line(R.near), w: 11, sep: 1.5 }]
/** The front edge of his coat, cut over the end of that arm: it goes in, and no hand shows. */
const COAT_EDGE = 'M503 132C505 150 505 170 502 190C501 200 499 208 496 214'

// ── JANE ────────────────────────────────────────────────────────────────────

/** Jane, after placing: her bonnet and shawl left in the kitchen. */
const J = {
  head: { d: HEAD_JANE, at: [384, 146] as P, rot: -9, scale: 0.9 },
  neck: [382, 168] as P,
  waist: [381, 210] as P,
  /** The near arm reaches over his hand; the far arm comes up under it. */
  near: [
    [388, 178],
    [398, 214],
    [420, 204],
  ] as P[],
  far: [
    [375, 178],
    [384, 228],
    [418, 222],
  ] as P[],
}
const J_HT = headAt(1, J.head.at, J.head.rot, J.head.scale)
const J_NEAR_HAND: Hand = { parts: HOLD_HAND, scale: 0.96, rot: 26 }
const J_FAR_HAND: Hand = { parts: HOLD_HAND, scale: 0.94, rot: -34 }
const paperHand = (arm: P[], h: Hand): Part[] =>
  h.parts.map((q) => ({ ...q, t: handAt(arm, 1, h), paper: true, edge: 1 }))
/** Her far arm and hand, under his hand: printed before him. */
const JANE_FAR: Part[] = [{ d: line(J.far), w: 8.4 }, ...paperHand(J.far, J_FAR_HAND)]
const JANE_BODY: Part[] = [
  { d: gown(J.neck, J.waist, 370, 1, { shoulder: 24, waistW: 18, front: 28, back: 34 }) },
  { d: HEAD_JANE, t: J_HT },
]
/** Her near arm and hand, over his: "I arrested his wandering hand, and prisoned it in both mine." */
const JANE_NEAR: Part[] = [{ d: line(J.near), w: 8.4, sep: 1.4 }, ...paperHand(J.near, J_NEAR_HAND)]

// ── PILOT ───────────────────────────────────────────────────────────────────

/**
 * Pilot's head, in its own frame (the middle of the skull at 0 0, facing
 * right): "a lion-like creature with long hair and a huge head" (Chapter
 * 12), so a broad round skull, a short blunt muzzle and a long ear hanging
 * flat. INK; his white is PILOT_WHITE.
 */
const PILOT_HEAD =
  'M-18 -6C-18 -18 -6 -24 6 -22C14 -21 19 -16 20 -10L30 -8C35 -7 37 -3 36 1C35 5 31 7 26 7L18 8C14 13 6 15 -2 14C-12 13 -18 6 -18 -6Z'
const PILOT_EAR = 'M-2 -21C-11 -21 -16 -12 -15 1C-14 9 -10 14 -5 12C-2 5 -1 -8 -2 -21Z'
/** "black and white": a white muzzle and a narrow blaze up the brow. */
const PILOT_WHITE =
  'M20.4 -10L30 -8C35 -7 37 -3 36 1C35 5 31 7 26 7L18.6 8C16.6 3 17 -4 20.4 -10Z' +
  'M13 -21.6C16.4 -19 18.6 -15 19.6 -10.6L17.6 -9.8C16.2 -13.6 14.2 -17.6 11 -20.8Z'
/** His shaggy neck and shoulders, rising from below the block's edge to the head. */
const PILOT_RUFF =
  'M-58 64C-57 38 -47 16 -31 6C-25 1 -19 -1 -15 6C-11 13 -3 16 5 14C9 18 10 24 9 30C13 36 14 44 12 52C14 56 15 60 14 64Z'
const PILOT_AT = 'translate(304 286) rotate(-22) scale(1.05)'

function Pilot() {
  return (
    <g transform={PILOT_AT}>
      <Figure parts={[{ d: PILOT_RUFF }, { d: PILOT_HEAD }, { d: PILOT_EAR }]}>
        <path d={PILOT_WHITE} fill={PAPER} />
        {/* the long hair of his ruff, and the edge of the ear */}
        <path
          d={
            gouge(-40, 30, -22, 10, 0.8, 0.6) +
            gouge(-30, 44, -10, 22, 0.8, 0.6) +
            gouge(-16, 52, 0, 34, 0.7, 0.6) +
            gouge(-48, 46, -36, 24, 0.7, 0.4)
          }
          fill={PAPER}
        />
        <path d="M-2 -21C-1 -8 -2 5 -5 12" fill="none" stroke={PAPER} strokeWidth={1} />
        {/* the nose, and the eye looking up at her */}
        <path d="M33 -6C36 -6 37.6 -3 36.4 -0.4L32 -1.4Z" fill={INK} />
        <circle cx={8} cy={-10} r={2.8} fill={PAPER} />
        <circle cx={9} cy={-10.6} r={1.5} fill={INK} />
      </Figure>
    </g>
  )
}

// ── THE ROOM ────────────────────────────────────────────────────────────────

type Marks = {
  wall: string
  candleRays: string
  rain: string
  trees: string
  floor: string
  stone: string
}

/** The light in the room: the two candles on the left, the low fire on the right. */
const roomLight = (x: number, y: number) => {
  const c = clamp(1 - Math.hypot(x - 120, (y - 180) * 0.9) / 180) * 0.5
  const f = clamp(1 - Math.hypot((x - 704) * 0.8, y - 280) / 240) * 0.55
  return Math.max(c, f, 0.03)
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const wall = gougeField(rng(2201), { x0: 0, x1: W, y0: 4, y1: FLOOR }, roomLight, {
    spacing: 6.4,
    len: [12, 46],
    gap: [8, 22],
    max: 2.4,
  })
  const candleRays = rays(rng(2202), 119, 174, { from: 14, to: 46, every: 11, width: 1.8 })
  // Rain on the window: streaks of it, dark on the last of the light.
  const rr = rng(2204)
  let rain = ''
  for (let i = 0; i < 54; i++) {
    const x = between(rr, WIN.x0 - 10, WIN.x1)
    const y = between(rr, WIN.y0, WIN.y1 - 10)
    const len = between(rr, 8, 18)
    rain += gouge(x, y, x + len * 0.28, y + len, 0.55)
  }
  // The wood outside, black against the dusk: trunks, and the leaves overhead.
  let trees = ''
  for (const [x, w] of [
    [458, 8],
    [486, 5],
    [520, 9],
  ] as [number, number][])
    trees += wedge(x, WIN.y1, x + between(rr, -2, 2), WIN.y0 + 60, w, w * 0.6)
  trees += `M${WIN.x0} ${WIN.y0}H${WIN.x1}V${WIN.y0 + 26}`
  for (let x = WIN.x1; x > WIN.x0; x -= 14)
    trees += `C${n(x - 2)} ${n(WIN.y0 + 40 + between(rr, 0, 6))} ${n(x - 12)} ${n(WIN.y0 + 40 + between(rr, 0, 6))} ${n(x - 14)} ${n(WIN.y0 + 26 + between(rr, -2, 2))}`
  trees += 'Z'
  // The floor: dark boards, a little light on them from the fire.
  const rf = rng(2205)
  let floor = ''
  for (let y = FLOOR + 6; y < H; y += 6) {
    let x = between(rf, -20, 0)
    while (x < W) {
      const len = between(rf, 40, 120)
      const L = roomLight(x + len / 2, y - 20)
      if (rf() < 0.3 + L) floor += gouge(x, y, x + len, y + between(rf, -0.5, 0.5), 0.5 + L * 1.6)
      x += len + between(rf, 10, 30)
    }
  }
  // The stone of the mantelpiece, coursed, lit from below by the fire.
  const rs = rng(2206)
  let stone = ''
  for (let y = MANTEL.shelf + 12; y < FLOOR; y += 9) {
    let x = MANTEL.x0 + between(rs, 2, 10)
    while (x < MANTEL.x1 - 4) {
      const len = between(rs, 14, 30)
      if (!(x + len > GRATE.x0 - 4 && x < GRATE.x1 + 4 && y > GRATE.top - 6))
        stone += gouge(x, y, Math.min(x + len, MANTEL.x1 - 4), y, 0.6 + roomLight(x, y) * 1.4)
      x += len + between(rs, 3, 8)
    }
  }
  cached = { wall, candleRays, rain, trees, floor, stone }
  return cached
}

function Ferndean({ uid }: ArtProps) {
  const m = marks()
  const id = { win: `${uid}-win` }
  return (
    <>
      <defs>
        <clipPath id={id.win}>
          <rect x={WIN.x0} y={WIN.y0} width={WIN.x1 - WIN.x0} height={WIN.y1 - WIN.y0} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [440, 190], push: 1.035 })}>
        {/* the gloomy parlour */}
        <path d={m.wall} fill={PAPER} />
        <path d={m.candleRays} fill={PAPER} />

        {/* the narrow latticed window: the wood at dusk, and the rain */}
        <rect
          x={WIN.x0 - 6}
          y={WIN.y0 - 6}
          width={WIN.x1 - WIN.x0 + 12}
          height={WIN.y1 - WIN.y0 + 12}
          fill={INK}
        />
        <g clipPath={`url(#${id.win})`}>
          <rect
            x={WIN.x0}
            y={WIN.y0}
            width={WIN.x1 - WIN.x0}
            height={WIN.y1 - WIN.y0}
            fill={PAPER}
          />
          <path d={m.trees} fill={INK} />
          <path d={m.rain} fill={INK} />
          <g stroke={INK} strokeWidth={1.4}>
            {Array.from({ length: 10 }, (_, k) => {
              const x = WIN.x0 - 100 + k * 24
              return (
                <path
                  key={k}
                  d={`M${x} ${WIN.y0}L${x + 170} ${WIN.y0 + 200}M${x + 170} ${WIN.y0}L${x} ${WIN.y0 + 200}`}
                />
              )
            })}
          </g>
        </g>
        <rect
          x={WIN.x0 - 8}
          y={WIN.y1}
          width={WIN.x1 - WIN.x0 + 16}
          height={6}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />

        {/* the high, old-fashioned mantelpiece, and its low fire */}
        <rect
          x={MANTEL.x0}
          y={MANTEL.shelf}
          width={MANTEL.x1 - MANTEL.x0}
          height={FLOOR - MANTEL.shelf}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d={m.stone} fill={PAPER} />
        <rect
          x={MANTEL.x0 - 12}
          y={MANTEL.shelf - 10}
          width={MANTEL.x1 - MANTEL.x0 + 24}
          height={10}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        {/* the glass he put down, on the shelf */}
        <path d="M628 86L638 86L637 102L629 102Z" fill={PAPER} stroke={INK} strokeWidth={1} />
        <path d="M630 95H636" stroke={INK} strokeWidth={0.8} />
        <path
          d={`M${GRATE.x0} ${FLOOR}V${GRATE.top + 20}Q${GRATE.x0} ${GRATE.top} ${GRATE.x0 + 20} ${GRATE.top}H${GRATE.x1 - 20}Q${GRATE.x1} ${GRATE.top} ${GRATE.x1} ${GRATE.top + 20}V${FLOOR}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        {/* "a neglected handful of fire burnt low in the grate" */}
        <path
          d="M676 302H736M678 294H734M682 308V288M730 308V288"
          stroke={PAPER}
          strokeWidth={1.6}
          fill="none"
        />
        <g fill={RED}>
          <path
            className="lc-glow"
            d="M686 294C686 289 692 286 698 289C701 284 710 284 713 289C720 286 728 290 726 294Z"
          />
          <path
            className="lc-flicker"
            style={timing({ dur: 0.9, delay: 0.2 })}
            d="M702 290C700 284 703 280 705 276C708 281 710 285 708 290Z"
          />
        </g>

        {/* the floor */}
        <rect x={-4} y={FLOOR} width={W + 8} height={H - FLOOR + 4} fill={INK} />
        <path d={m.floor} fill={PAPER} />
        <path d={`M-4 ${FLOOR}H${W + 4}`} stroke={PAPER} strokeWidth={LINE.bold} />
        <rect
          x={MANTEL.x0 - 8}
          y={FLOOR}
          width={MANTEL.x1 - MANTEL.x0 + 16}
          height={7}
          fill={PAPER}
        />

        {/* the table, the tray she set down, the candles he has brought at dark */}
        <path
          d="M16 242L222 242L214 254L24 254Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d="M34 254V344M204 254V344" stroke={INK} strokeWidth={7} />
        <path d="M30 254V344M200 254V344" stroke={PAPER} strokeWidth={1.2} />
        <path d="M60 236L178 236L172 242L66 242Z" fill={PAPER} stroke={INK} strokeWidth={1} />
        {CANDLES.map(([x, top]) => (
          <g key={x}>
            <path
              d={`M${x - 9} 236L${x + 9} 236L${x + 4} 230L${x - 4} 230Z`}
              fill={INK}
              stroke={PAPER}
              strokeWidth={1}
            />
            <rect
              x={x - 3.6}
              y={top}
              width={7.2}
              height={230 - top}
              fill={PAPER}
              stroke={INK}
              strokeWidth={1}
            />
            <path
              className="lc-flicker"
              style={timing({ dur: 0.9, delay: x / 400 })}
              d={`M${x} ${top - 1}C${x - 3.6} ${top - 5} ${x - 2.4} ${top - 10} ${x} ${top - 16}C${x + 2.4} ${top - 10} ${x + 3.6} ${top - 5} ${x} ${top - 1}Z`}
              fill={RED}
            />
          </g>
        ))}

        {/* Jane's far hand goes under his, so it is printed first */}
        <Figure parts={JANE_FAR}>
          <path d={HOLD_CUTS} transform={handAt(J.far, 1, J_FAR_HAND)} fill={INK} />
        </Figure>

        {/* Rochester: blind, his left arm kept hidden in his coat */}
        <Figure parts={ROCHESTER}>
          <path d={FERNDEAN_HAIR_CUTS} transform={R_HT} fill={PAPER} />
          <path d={ROCHESTER_BLIND_CUTS} transform={R_HT} fill={PAPER} />
          <path d={HOLD_CUTS} transform={handAt(R.far, -1, R_HAND)} fill={PAPER} />
        </Figure>
        <Figure parts={ROCHESTER_ARM} halo={0} />
        <path d={COAT_EDGE} fill="none" stroke={INK} strokeWidth={5} strokeLinecap="round" />
        <path
          d={COAT_EDGE}
          fill="none"
          stroke={PAPER}
          strokeWidth={LINE.fine}
          transform="translate(-2.6 0)"
        />

        {/* Pilot, at her side, looking up */}
        <Pilot />

        {/* Jane, the near hand over his */}
        <Figure parts={JANE_BODY}>
          <JaneFace t={J_HT} />
        </Figure>
        <Figure parts={JANE_NEAR} halo={1.4}>
          <path d={HOLD_CUTS} transform={handAt(J.near, 1, J_NEAR_HAND)} fill={INK} />
        </Figure>
      </g>
    </>
  )
}

export const ferndean: LinocutArt = { width: W, height: H, Draw: Ferndean }
