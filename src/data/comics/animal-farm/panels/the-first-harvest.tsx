import type { LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, deg, gouge, n, rng, type Rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Benjamin, Hen, Horse, Pig, type P } from './people'

/**
 * Chapter 3: "The first harvest", the seventh moment in the guide's timeline.
 * Every detail is from the held edition (src/data/full-texts/animal-farm.ts):
 *
 * - "Boxer and Clover would harness themselves to the cutter or the
 *   horse-rake (no bits or reins were needed in these days, of course) and
 *   tramp steadily round and round the field with a pig walking behind and
 *   calling out 'Gee up, comrade!'" So the two cart-horses of the figure kit
 *   (./people.tsx), Boxer with the white stripe down his nose and Clover
 *   beside him, pull a horse-rake by traces from their collars, with no bit
 *   and no rein, and a pig walks behind it, his mouth open, calling out.
 * - "The pigs did not actually work, but directed and supervised the
 *   others." So the pig carries nothing and pulls nothing.
 * - "the implements had been designed for human beings and not for
 *   animals". So the rake's iron seat stands empty.
 * - "Even the ducks and hens toiled to and fro all day in the sun, carrying
 *   tiny wisps of hay in their beaks." So hens and ducks cross the
 *   foreground, each with a wisp of hay, and the summer sun is the spot
 *   colour.
 * - Benjamin "did his work in the same slow obstinate way as he had done it
 *   in Jones's time, never shirking and never volunteering for extra work".
 *   So he stands further off by a haycock, his head low, at his own pace.
 *
 * Mollie is named in the moment, but only for leaving work early, so she is
 * not in the field. The horse-rake is drawn plainly, as the two-wheeled rake
 * of an English farm of the period. Nothing is taken from a film or stage
 * production. Seeds: 701 (sky), 702 (field), 703 (hay in the beaks).
 */

const W = 860
const H = 340
const HORIZON = 150
const SUN: P = [716, 62]

type Marks = {
  sky: string
  sunRays: string
  trees: string
  field: string[]
  windrows: string
  shadows: string
  cock: string
  cockCuts: string
}

function skyMarks(r: Rng) {
  let d = ''
  for (let y = 14; y < HORIZON - 12; y += 8) {
    let x = 12 + between(r, -20, 0)
    while (x < W - 12) {
      const len = between(r, 10, 40)
      const nearSun = Math.hypot(x - SUN[0], y - SUN[1]) < 110
      if (!nearSun && r() < 0.22) d += gouge(x, y + between(r, -1, 1), x + len, y, 0.35 + r() * 0.6)
      x += len + between(r, 14, 46)
    }
  }
  return d
}

/** Short ink rays round the sun, broken like cuts. */
function sunRays(r: Rng) {
  let d = ''
  for (let a = 0; a < 360; a += 9) {
    const ang = deg(a + between(r, -2, 2))
    let rad = between(r, 32, 38)
    while (rad < 96) {
      const len = between(r, 8, 18)
      d += gouge(
        SUN[0] + Math.cos(ang) * rad,
        SUN[1] + Math.sin(ang) * rad,
        SUN[0] + Math.cos(ang) * (rad + len),
        SUN[1] + Math.sin(ang) * (rad + len),
        clamp(1.3 - rad / 90, 0.35, 1.2),
      )
      rad += len + between(r, 6, 16)
    }
  }
  return d
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = skyMarks(rng(701))
  const rays = sunRays(rng(704))

  // A hedgerow along the far side of the field, with trees standing in it.
  const f = rng(702)
  let trees = `M0 ${HORIZON + 10}`
  for (let x = 0; x <= W; x += 5)
    trees += `L${x} ${n(HORIZON + 2 + 2.4 * Math.abs(Math.sin(x / 9)) - 2 * Math.sin(x / 31))}`
  trees += `L${W} ${HORIZON + 12}L0 ${HORIZON + 12}Z`
  for (const [cx, rad] of [
    [96, 22],
    [128, 16],
    [388, 26],
    [420, 18],
    [560, 20],
    [808, 24],
  ] as [number, number][]) {
    trees += `M${cx - 3} ${HORIZON + 4}L${cx - 3} ${HORIZON - rad}L${cx + 3} ${HORIZON - rad}L${cx + 3} ${HORIZON + 4}Z`
    for (const [dx, dy, rr] of [
      [0, -rad * 1.35, rad],
      [-rad * 0.7, -rad * 0.95, rad * 0.72],
      [rad * 0.7, -rad * 0.9, rad * 0.74],
    ])
      trees += `M${n(cx + dx - rr)} ${n(HORIZON + dy)}a${n(rr)} ${n(rr)} 0 1 0 ${n(2 * rr)} 0a${n(rr)} ${n(rr)} 0 1 0 ${n(-2 * rr)} 0Z`
  }

  // The mown field: stubble cut as short upright strokes, sparse far off
  // and heavier near, and windrows of raked hay lying across it.
  // Drawn as plain strokes in three bands of weight, which weigh a fifth of
  // what lens-shaped gouges would: the plate must stay light for a phone.
  const field = ['', '', '']
  for (let y = HORIZON + 18; y < H - 6; y += 7 + (y - HORIZON) * 0.05) {
    const depth = (y - HORIZON) / (H - HORIZON)
    const band = depth < 0.34 ? 0 : depth < 0.67 ? 1 : 2
    let x = 12 + between(f, -10, 0)
    while (x < W - 12) {
      if (f() < 0.42) field[band] += `M${n(x)} ${n(y)}l${n(between(f, -1, 1))} ${n(-2 - depth * 4)}`
      x += between(f, 9, 18) - depth * 3
    }
  }
  let windrows = ''
  for (const [y0, amp] of [
    [176, 2.4],
    [204, 3.4],
    [238, 4.6],
  ] as [number, number][]) {
    let x = 14 + between(f, 0, 10)
    while (x < W - 16) {
      const len = between(f, 4, 9) * (1 + (y0 - 170) / 80)
      const y = y0 + amp * Math.sin(x / 70) + between(f, -amp, amp) * 0.6
      windrows += gouge(x, y, x + len, y - between(f, 1, amp), 0.6 + amp * 0.18, between(f, -1, 1))
      x += len * between(f, 0.4, 0.9)
    }
  }

  // Shadows under the pig, the rake, the horses and the birds.
  let shadows = ''
  const pool = (x0: number, x1: number, y: number, rows: number) => {
    for (let i = 0; i < rows; i++) {
      const t = 1 - Math.abs(i - (rows - 1) / 2) / rows
      shadows += gouge(
        x0 + (1 - t) * 10,
        y + i * 3,
        x1 - (1 - t) * 10,
        y + i * 3 + 0.6,
        0.6 + t * 1.6,
      )
    }
  }
  pool(58, 156, 318, 4)
  pool(170, 318, 316, 4)
  pool(384, 640, 318, 5)
  pool(730, 800, 243, 3)

  // A haycock by Benjamin: a dome of hay, cut in rows of strokes.
  const cock = 'M772 244C774 222 790 208 806 208C822 208 836 222 838 244Z'
  const c = rng(705)
  let cockCuts = ''
  for (let k = 0; k < 44; k++) {
    const y = between(c, 214, 242)
    const half = Math.sqrt(Math.max(0, 1 - ((y - 244) / 36) ** 2)) * 30
    const x = between(c, 805 - half + 2, 805 + half - 4)
    cockCuts += gouge(x, y, x + between(c, 3, 6), y - between(c, 1, 4), 0.55)
  }

  cached = { sky, sunRays: rays, trees, field, windrows, shadows, cock, cockCuts }
  return cached
}

// ── THE HORSE-RAKE ──────────────────────────────────────────────────────────
// Seen three-quarters from the near side: a near and a far wheel, the rake
// head running between them with its curved tines, the iron seat on its
// spring, and the pole forward to the horses.

const NEAR_WHEEL: [number, number, number] = [206, 280, 34]
const FAR_WHEEL: [number, number, number] = [290, 266, 30]

function wheel([cx, cy, r]: [number, number, number]) {
  let spokes = ''
  for (let i = 0; i < 12; i++) {
    const a = deg(i * 30 + 8)
    spokes += `M${n(cx + Math.cos(a) * 5)} ${n(cy + Math.sin(a) * 5)}L${n(cx + Math.cos(a) * (r - 2))} ${n(cy + Math.sin(a) * (r - 2))}`
  }
  return spokes
}

/** The tines: curved teeth from the rake head down to the stubble. */
const TINES = (() => {
  let d = ''
  for (let i = 0; i <= 11; i++) {
    const t = i / 11
    const x = 210 + (284 - 210) * t
    const y = 262 + (250 - 262) * t
    const ground = 316 - 12 * t
    d += `M${n(x)} ${n(y)}C${n(x - 10)} ${n(y + 16)} ${n(x - 12)} ${n(ground - 12)} ${n(x - 2)} ${n(ground)}`
  }
  return d
})()

function HorseRake() {
  const frame = 'M206 280L290 266M210 262L284 250M246 272C248 250 250 236 246 222M290 266L560 240'
  return (
    <g>
      {/* the far wheel, behind the tines */}
      <circle
        cx={FAR_WHEEL[0]}
        cy={FAR_WHEEL[1]}
        r={FAR_WHEEL[2]}
        fill="none"
        stroke={PAPER}
        strokeWidth={7.6}
      />
      <circle
        cx={FAR_WHEEL[0]}
        cy={FAR_WHEEL[1]}
        r={FAR_WHEEL[2]}
        fill="none"
        stroke={INK}
        strokeWidth={4.4}
      />
      <path d={wheel(FAR_WHEEL)} stroke={INK} strokeWidth={2} />
      {/* the tines */}
      <path d={TINES} fill="none" stroke={PAPER} strokeWidth={5} strokeLinecap="round" />
      <path d={TINES} fill="none" stroke={INK} strokeWidth={2.4} strokeLinecap="round" />
      {/* the rake head, the axle, the spring of the seat and the pole */}
      <path d={frame} fill="none" stroke={PAPER} strokeWidth={8} strokeLinecap="round" />
      <path d={frame} fill="none" stroke={INK} strokeWidth={4.6} strokeLinecap="round" />
      {/* the iron seat, empty */}
      <path
        d="M232 220C236 212 256 212 260 220L256 226L236 226Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={gouge(238, 218, 254, 218, 0.8)} fill={PAPER} />
      {/* the near wheel, in front */}
      <circle
        cx={NEAR_WHEEL[0]}
        cy={NEAR_WHEEL[1]}
        r={NEAR_WHEEL[2]}
        fill="none"
        stroke={PAPER}
        strokeWidth={8}
      />
      <circle
        cx={NEAR_WHEEL[0]}
        cy={NEAR_WHEEL[1]}
        r={NEAR_WHEEL[2]}
        fill="none"
        stroke={INK}
        strokeWidth={4.8}
      />
      <path d={wheel(NEAR_WHEEL)} stroke={PAPER} strokeWidth={4.4} />
      <path d={wheel(NEAR_WHEEL)} stroke={INK} strokeWidth={2.2} />
      <circle
        cx={NEAR_WHEEL[0]}
        cy={NEAR_WHEEL[1]}
        r={6.4}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.4}
      />
    </g>
  )
}

/**
 * A horse's collar and the trace running back from it to the rake, in the
 * horse's own frame (the kit's: facing right, feet on y = 0).
 */
const COLLAR =
  'M42 -122C52 -128 62 -120 64 -104C66 -88 62 -74 56 -70C52 -78 50 -92 48 -104C47 -112 45 -118 42 -122Z'

/**
 * A duck, white, walking: the kit has only a duckling, and "the ducks" are
 * not described, so a plain farmyard duck, facing right, feet at (0, 0),
 * about 34 long. Its flat bill ends at BILL.
 */
const DUCK =
  'M-15 -10C-17 -15 -12 -18 -4 -17L6 -16C10 -15 12 -12 11 -8C9 -4 2 -2 -6 -2C-11 -2 -14 -5 -15 -10L-20 -15Z' +
  'M3 -15C3 -22 4 -28 9 -29.4C13 -30.4 15.6 -28 15 -25L22.6 -24L22.4 -21.6L14.4 -21C12.4 -19.6 11 -17.6 10.4 -14Z'
const DUCK_BILL: P = [22.6, -22.6]
const DUCK_FEET = 'M-2 -3L-3 0L-7 0M3 -3L3 0L7 0'

function Duck({ at, s, face }: { at: P; s: number; face: 1 | -1 }) {
  return (
    <g transform={`translate(${at[0]} ${at[1]}) scale(${face * s} ${s})`}>
      <path d={DUCK_FEET} fill="none" stroke={INK} strokeWidth={1.4 / s} strokeLinecap="round" />
      <path d={DUCK} fill={PAPER} stroke={INK} strokeWidth={1.8 / s} strokeLinejoin="round" />
      <path d="M-8 -11Q-2 -13 4 -10" fill="none" stroke={INK} strokeWidth={0.9 / s} />
      <circle cx={10.6} cy={-25.4} r={1.1} fill={INK} />
    </g>
  )
}

/** Hens and ducks crossing the foreground, each with a wisp of hay: [x, y, scale, face, duck]. */
const BIRDS: [number, number, number, 1 | -1, boolean][] = [
  [620, 320, 1.7, 1, false],
  [676, 328, 1.05, 1, true],
  [738, 316, 1.6, -1, false],
  [800, 326, 1.0, -1, true],
]

/** A wisp of hay held at (x, y), trailing forward: a few strands, stroked. */
function wisp(r: Rng, x: number, y: number) {
  let d = ''
  for (let i = 0; i < 5; i++)
    d += `M${n(x - 2)} ${n(y + between(r, -1, 1))}q${n(6 + between(r, 0, 3))} ${n(between(r, -4, 3))} ${n(13 + between(r, 0, 5))} ${n(between(r, -3, 5))}`
  return d
}

/** Where a hen's beak is, in the kit's hen frame. */
const HEN_BEAK: P = [16, -16.4]

function FirstHarvest() {
  const m = marks()
  const w = rng(703)
  return (
    <>
      <g className="lc-push" style={timing({ origin: [430, 220], push: 1.03 })}>
        {/* the summer sky and the sun */}
        <rect x={0} y={0} width={W} height={H} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        <path d={m.sunRays} fill={INK} />
        <circle
          className="lc-glow"
          style={timing({ delay: 0.4 })}
          cx={SUN[0]}
          cy={SUN[1]}
          r={24}
          fill={RED}
        />
        {/* the far hedgerow, and the mown field with its windrows */}
        <path d={m.trees} fill={INK} />
        {m.field.map((d, i) => (
          <path key={i} d={d} stroke={INK} strokeWidth={0.7 + i * 0.45} strokeLinecap="round" />
        ))}
        <path d={m.windrows} fill={INK} />
        <path d={m.shadows} fill={INK} />

        {/* Benjamin by a haycock, at his own pace */}
        <path d={m.cock} fill={INK} />
        <path d={m.cockCuts} fill={PAPER} />
        <Benjamin at={[748, 244]} s={0.5} />

        {/* the pig, walking behind and calling out */}
        <Pig at={[104, 318]} s={0.74} kind="plain" mouthOpen />
        {/* "calling out 'Gee up, comrade!'": three short cuts from his snout */}
        <path
          className="lc-fade-in"
          style={timing({ delay: 1, dur: 0.5 })}
          d="M154 292L164 286M156 298L167 298M154 304L164 310"
          stroke={INK}
          strokeWidth={LINE.bold}
          strokeLinecap="round"
        />

        <HorseRake />

        {/* Clover, on the far side, and Boxer, pulling with no bit and no rein */}
        <g transform="translate(540 304) scale(0.9)">
          <path d={COLLAR} fill={INK} stroke={PAPER} strokeWidth={2} />
        </g>
        <Horse at={[540, 304]} s={0.9} who="clover" />
        <g transform="translate(540 304) scale(0.9)">
          <path d={COLLAR} fill={INK} stroke={PAPER} strokeWidth={1.8} />
          <path d={gouge(50, -110, 56, -82, 0.8, -0.6)} fill={PAPER} />
        </g>
        <Horse at={[486, 320]} s={0.96} who="boxer" />
        <g transform="translate(486 320) scale(0.96)">
          <path d={COLLAR} fill={INK} stroke={PAPER} strokeWidth={1.8} />
          <path d={gouge(50, -110, 56, -82, 0.8, -0.6)} fill={PAPER} />
          {/* the trace, from the collar back along his flank to the rake */}
          <path
            d="M50 -84L-30 -76L-80 -68"
            fill="none"
            stroke={PAPER}
            strokeWidth={5}
            strokeLinecap="round"
          />
          <path
            d="M50 -84L-30 -76L-80 -68"
            fill="none"
            stroke={INK}
            strokeWidth={2.4}
            strokeLinecap="round"
          />
        </g>

        {/* hens and ducks, each carrying a tiny wisp of hay */}
        {BIRDS.map(([x, y, s, face, duck]) => {
          const beak = duck ? DUCK_BILL : HEN_BEAK
          return (
            <g key={x}>
              {duck ? (
                <Duck at={[x, y]} s={s} face={face} />
              ) : (
                <>
                  <path
                    d={`M${x - 2 * face} ${y - 8}l${-face} 8M${x + 3 * face} ${y - 8}l${face} 8`}
                    stroke={INK}
                    strokeWidth={1.6}
                    strokeLinecap="round"
                  />
                  <Hen at={[x, y - 6]} s={s} face={face} />
                </>
              )}
              <path
                transform={`translate(${x} ${duck ? y : y - 6}) scale(${face} 1)`}
                d={wisp(w, beak[0] * s, beak[1] * s)}
                fill="none"
                stroke={INK}
                strokeWidth={1.2}
                strokeLinecap="round"
              />
            </g>
          )
        })}
      </g>
    </>
  )
}

export const theFirstHarvest: LinocutArt = { width: W, height: H, Draw: FirstHarvest }
