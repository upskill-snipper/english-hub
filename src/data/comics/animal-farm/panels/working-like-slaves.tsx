import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  ribbon,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Benjamin,
  Cut,
  featherCuts,
  HEAD_FRAME,
  hoof,
  HORSE_BARREL,
  HORSE_EARS,
  HORSE_HEAD,
  HORSE_NECK,
  HORSE_TAIL_SHAPE,
  k,
  MARE_BARREL,
  Muriel,
  SHEEP_FLEECE,
  SHEEP_HEAD,
  type Part,
} from './people'

/**
 * Chapter 6: "Working like slaves", the sixteenth moment in the guide's
 * timeline. Every detail is from the text (the held edition,
 * src/data/full-texts/animal-farm.ts):
 *
 * - "All that year the animals worked like slaves." "Throughout the spring
 *   and summer they worked a sixty-hour week". So it is summer, and the spot
 *   colour is the sun over the work.
 * - "There was a good quarry of limestone on the farm". "Huge boulders, far
 *   too big to be used as they were, were lying all over the bed of the
 *   quarry. The animals lashed ropes round these, and then all together,
 *   cows, horses, sheep, any animal that could lay hold of the rope ... they
 *   dragged them with desperate slowness up the slope to the top of the
 *   quarry, where they were toppled over the edge, to shatter to pieces
 *   below." So the quarry is seen in section: pale limestone, a huge boulder
 *   lashed with rope on the slope, the team hauling it up, and beyond the
 *   edge at the top the pieces of the ones already thrown down.
 * - "it was always Boxer who strained himself against the rope and brought
 *   the boulder to a stop. To see him toiling up the slope inch by inch, his
 *   breath coming fast, the tips of his hoofs clawing at the ground". So
 *   Boxer is at the head of the rope, which runs round his chest, leaning
 *   into it, his head down, with dust kicked up at his hoofs. Clover, behind
 *   him, and two sheep behind her hold the rope in their teeth.
 * - "The horses carried it off in cart-loads, the sheep dragged single
 *   blocks, even Muriel and Benjamin yoked themselves into an old
 *   governess-cart and did their share." So in the distance, on the way to
 *   the knoll, Benjamin and Muriel pull a little two-wheeled cart of stone.
 * - "By late summer a sufficient store of stone had accumulated, and then the
 *   building began". So on the knoll the first course of the windmill's round
 *   wall stands, low.
 *
 * Boxer, Clover, Benjamin and Muriel are the kit's (./people.tsx). The kit
 * has no pose for a horse hauling, so Boxer and Clover are cut here from the
 * kit's own barrel, neck, head, ears, tail and hoofs, with legs set for
 * hauling (see Hauler); Boxer keeps his blaze and Clover her hatching, as the
 * kit cuts them. The kit has no standing sheep, so the two here are built
 * from its lying sheep's fleece and head, lifted onto legs.
 *
 * Nothing is taken from a film, a cartoon or a stage production. Seeds: 1601
 * (sky), 1602 (back wall), 1603 (the slope's cut face and the pit), 1604 (the
 * broken stone), 1605 (fields), 1606 (the boulder's cracks).
 */

const W = 860
const H = 340
/** The slope: its height at x = 0 and its rise per unit to the right. */
const RAMP0 = 318
const RISE = 0.2
/** Where the slope reaches the top, and where the top ends at the edge. */
const TOP_X = 606
const EDGE_X = 702
const rampY = (x: number) =>
  x < TOP_X ? RAMP0 - x * RISE : RAMP0 - TOP_X * RISE - (x - TOP_X) * 0.02
/** The slope's angle, in degrees. */
const ANG = (Math.atan(RISE) * 180) / Math.PI
/** The far rim of the quarry, and the horizon beyond it. */
const RIM = 186
const HORIZON = 164

// ── Placing a figure on the slope, leaning into the rope ────────────────────

type Stance = { x: number; s: number; lean: number; face?: 1 | -1 }
const r1 = (v: number) => Math.round(v * 10) / 10
/** The transform for a figure standing on the slope at `x`, leaning forward by `lean` degrees. */
const stanceT = ({ x, lean }: Stance) =>
  `translate(${r1(x)} ${r1(rampY(x))}) rotate(${r1(-ANG)}) skewX(${-lean})`
/** Where a point in a figure's own frame lands on the page. */
function onPage(st: Stance, [px, py]: Pt): Pt {
  const sx = st.s * px * (st.face ?? 1)
  const sy = st.s * py
  const kx = sx + Math.tan((-st.lean * Math.PI) / 180) * sy
  const a = (-ANG * Math.PI) / 180
  return [
    st.x + kx * Math.cos(a) - sy * Math.sin(a),
    rampY(st.x) + kx * Math.sin(a) + sy * Math.cos(a),
  ]
}
/** A horse's muzzle, in its own frame, with the head lowered by `down` degrees. */
function muzzle(down: number): Pt {
  // HEAD_FRAME: translate(72 -158) rotate(56) scale(0.84), the mouth at (57, 9) in the head's frame
  const hx = 57 * 0.84
  const hy = 9 * 0.84
  const c = Math.cos((56 * Math.PI) / 180)
  const s = Math.sin((56 * Math.PI) / 180)
  const p: Pt = [72 + hx * c - hy * s, -158 + hx * s + hy * c]
  const d = (down * Math.PI) / 180
  const v: Pt = [p[0] - 40, p[1] + 104]
  return [
    40 + v[0] * Math.cos(d) - v[1] * Math.sin(d),
    -104 + v[0] * Math.sin(d) + v[1] * Math.cos(d),
  ]
}
const BOXER: Stance & { down: number } = { x: 566, s: 0.92, lean: 6, down: 40 }
const CLOVER: Stance & { down: number } = { x: 394, s: 0.84, lean: 5, down: 52 }
const SHEEP: Stance[] = [
  { x: 204, s: 1.5, lean: 10 },
  { x: 262, s: 1.5, lean: 10 },
]
/** The standing sheep's mouth, in its frame. */
const SHEEP_MOUTH: Pt = [27, -20.6]
/** The boulder, lashed, low on the slope. */
const BOULDER = { cx: 124, r: 48 }
const BOULDER_CY = rampY(BOULDER.cx) - BOULDER.r * 0.8
/** The boulder's outline, in units of its radius: angular, its foot on the slope. */
const BOULDER_PTS: Pt[] = [
  [-1.0, 0.2],
  [-0.98, -0.2],
  [-0.84, -0.56],
  [-0.5, -0.86],
  [-0.06, -0.97],
  [0.38, -0.88],
  [0.76, -0.62],
  [0.98, -0.22],
  [1.02, 0.16],
  [0.8, 0.56],
  [0.36, 0.74],
  [-0.14, 0.8],
  [-0.62, 0.86],
]
const bp = ([u, v]: Pt): Pt => [BOULDER.cx + u * BOULDER.r, BOULDER_CY + v * BOULDER.r]
const bpath = (pts: Pt[], close = true) =>
  'M' + pts.map((q) => bp(q).map(n).join(' ')).join('L') + (close ? 'Z' : '')
/** Its shaded underside, away from the sun. */
const BOULDER_SHADE = bpath([
  [-1.0, 0.2],
  [-0.98, -0.2],
  [-0.7, 0.06],
  [-0.3, 0.4],
  [0.36, 0.74],
  [-0.14, 0.8],
  [-0.62, 0.86],
])
/** The lashing: a girth round it and a band over the top, crossing on its face. */
const LASHING =
  `M${bp([-0.98, -0.06]).map(n).join(' ')}Q${bp([0, 0.22]).map(n).join(' ')} ${bp([1.02, -0.02]).map(n).join(' ')}` +
  `M${bp([-0.1, -0.93]).map(n).join(' ')}Q${bp([0.2, -0.1]).map(n).join(' ')} ${bp([0.42, 0.72]).map(n).join(' ')}`
/** The rope, from the knot on the boulder through each mouth to Boxer's chest. */
const ROPE: Pt[] = [
  bp([1.02, -0.02]),
  ...SHEEP.map((st) => onPage(st, SHEEP_MOUTH)),
  onPage(CLOVER, muzzle(CLOVER.down)),
  onPage(BOXER, [62, -80]),
]

/** The rope round Boxer's chest and over his shoulders, in his frame. */
const BREAST_LOOP = 'M62 -80C58 -92 50 -102 40 -108'

type Marks = {
  sky: string
  fields: string
  hedges: string
  backWall: string
  strata: string
  joints: string
  face: string
  pit: string
  broken: string
  boulderCracks: string
  dust: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // A hot pale summer sky, scored lightly, a little darker away from the sun.
  const r = rng(1601)
  const sky = gougeField(
    r,
    { x0: 0, x1: W, y0: 4, y1: HORIZON },
    (x, y) => clamp(0.2 + Math.hypot(x - 600, y - 60) / 900),
    { spacing: 7, len: [30, 110], gap: [20, 60], max: 1.6 },
  )
  // The fields beyond the quarry: pale, with dark hedgerows.
  const f = rng(1605)
  let fields = ''
  for (let y = HORIZON + 5; y < RIM + 20; y += 6) {
    let x = between(f, -20, 0)
    while (x < W) {
      const len = between(f, 20, 70)
      if (f() < 0.4) fields += gouge(x, y, x + len, y + between(f, -0.4, 0.4), 0.5)
      x += len + between(f, 20, 50)
    }
  }
  let hedges = `M-4 ${HORIZON + 3}`
  for (let x = 0; x <= W; x += 8)
    hedges += `L${x} ${n(HORIZON - 2 + 2.6 * Math.sin(x / 11) + between(f, -1, 1))}`
  hedges += `L${W + 4} ${HORIZON + 5}L-4 ${HORIZON + 5}Z`
  hedges += `M-4 ${RIM - 8}`
  for (let x = 0; x <= 560; x += 8)
    hedges += `L${x} ${n(RIM - 11 + 2 * Math.sin(x / 9) + between(f, -0.8, 0.8))}`
  hedges += `L560 ${RIM - 6}L-4 ${RIM - 6}Z`

  // The back wall of the quarry above the slope: pale limestone in beds,
  // with the joints between them cut in ink.
  const b = rng(1602)
  const backWall = `M-4 ${RIM}L${TOP_X} ${RIM + 4}L${TOP_X} ${rampY(TOP_X)}L-4 ${RAMP0 + 1}Z`
  const strata = gougeField(
    b,
    { x0: -4, x1: TOP_X, y0: RIM + 6, y1: RAMP0 },
    (x, y) => clamp(0.95 - Math.abs(((y - RIM) % 26) - 13) / 34 - x / 4000),
    { spacing: 6.5, len: [40, 140], gap: [4, 16], max: 3.4 },
  )
  let joints = ''
  for (let k = 0; k < 40; k++) {
    const x = between(b, 4, TOP_X - 20)
    const y0 = RIM + 6 + Math.floor(between(b, 0, 5)) * 26
    if (y0 + 20 < rampY(x)) joints += gouge(x, y0 + 2, x + between(b, -2, 2), y0 + 22, 1.1)
  }
  // The slope's own cut face below its surface: darker, in beds.
  const c = rng(1603)
  const face = gougeField(
    c,
    { x0: 0, x1: EDGE_X, y0: rampY(EDGE_X) + 4, y1: H },
    (x, y) => clamp(0.42 - (y - rampY(x)) / 260),
    { spacing: 6, len: [20, 80] },
  )
  // The pit beyond the edge, in shadow, its far wall faintly bedded.
  const pit = gougeField(
    c,
    { x0: EDGE_X + 8, x1: W, y0: RIM + 4, y1: H },
    (x, y) => clamp(0.34 - (y - RIM) / 500 + (x - EDGE_X) / 1400),
    { spacing: 6, len: [16, 60] },
  )
  // The broken stone at the foot of the edge: pale angular pieces.
  const p = rng(1604)
  let broken = ''
  for (let k = 0; k < 30; k++) {
    const cx = between(p, EDGE_X + 22, W - 10)
    const cy = between(p, 296, 334) - Math.max(0, 40 - Math.abs(cx - 790)) * 0.3
    const rr = between(p, 4, 11)
    const m = 5
    let d = ''
    for (let i = 0; i < m; i++) {
      const a = (i / m) * Math.PI * 2 + between(p, -0.3, 0.3)
      const q = rr * between(p, 0.7, 1.15)
      d += `${i ? 'L' : 'M'}${n(cx + Math.cos(a) * q * 1.3)} ${n(cy + Math.sin(a) * q * 0.8)}`
    }
    broken += d + 'Z'
  }
  // The cracks and bedding of the boulder.
  const cr = rng(1606)
  let boulderCracks = ''
  for (let k = 0; k < 6; k++) {
    const [x0, y0] = bp([between(cr, -0.7, 0.5), between(cr, -0.1, 0.55)])
    boulderCracks += gouge(x0, y0, x0 + between(cr, 10, 24), y0 + between(cr, -3, 3), 0.7)
  }
  // Dust kicked up at Boxer's hoofs: small puffs behind them on the slope.
  let dust = ''
  for (const [x, rr] of [
    [498, 5],
    [488, 7],
    [476, 5.5],
    [604, 4],
    [594, 5.5],
  ] as [number, number][]) {
    const y = rampY(x) - rr * 0.6
    dust += `M${n(x - rr)} ${n(y)}a${rr} ${rr * 0.8} 0 1 1 ${rr * 2} 0a${rr} ${rr * 0.8} 0 1 1 ${-rr * 2} 0Z`
  }
  cached = { sky, fields, hedges, backWall, strata, joints, face, pit, broken, boulderCracks, dust }
  return cached
}

/**
 * A sheep standing, built from the kit's fleece and head lifted onto legs.
 * Drawn in two passes, `body` then `head`, so the rope can run along its
 * flank and into its mouth without covering its face.
 */
function StandingSheep({ st, part }: { st: Stance; part: 'body' | 'head' }) {
  const w = k(st.s)
  const lift = 'translate(0 -14)'
  const legs: Part[] = [
    { d: 'M-14 -16L-16 0', w: 3.2 },
    { d: 'M11 -16L12 0', w: 3.2 },
    { d: 'M-8 -16L-9 0', w: 3.2 },
    { d: 'M15 -16L17 0', w: 3.2 },
  ]
  if (part === 'head')
    return (
      <g transform={`${stanceT(st)} scale(${st.s})`}>
        <Cut
          parts={[{ d: SHEEP_HEAD, t: lift }]}
          halo={w(1.4)}
          cuts={gouge(20, -25.6, 23, -25.8, w(0.5))}
        />
      </g>
    )
  return (
    <g transform={stanceT(st)}>
      <g transform={`scale(${st.s})`}>
        <Cut parts={legs} halo={w(1.6)} />
        <Cut parts={[{ d: SHEEP_FLEECE, t: lift }]} tone="paper" halo={w(1.6)}>
          <path
            transform={lift}
            d="M-16 -8C-14 -11 -10 -11 -8 -8M-4 -12C-2 -15 2 -15 4 -12M6 -7C8 -10 12 -10 14 -7M-10 -3C-8 -6 -4 -6 -2 -3"
            fill="none"
            stroke={INK}
            strokeWidth={w(0.8)}
          />
        </Cut>
      </g>
    </g>
  )
}

/** Benjamin and Muriel yoked side by side to a little two-wheeled cart of stone. */
function GovernessCart({ at, s }: { at: Pt; s: number }) {
  const [x, y] = at
  return (
    <g>
      {/* the cart behind them: a low box on one big wheel, heaped with stone */}
      <g transform={`translate(${x} ${y}) scale(${s})`}>
        <path
          d="M-150 -44L-92 -44L-92 -20L-150 -20Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={2.4 / s}
        />
        <path
          d="M-148 -44C-144 -56 -134 -58 -126 -52C-120 -60 -108 -60 -100 -52C-96 -50 -94 -46 -94 -44Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={2 / s}
        />
        <circle cx={-121} cy={-18} r={17} fill={INK} stroke={PAPER} strokeWidth={2.4 / s} />
        <path
          d="M-121 -34V-2M-137 -18H-105M-132 -29L-110 -7M-110 -29L-132 -7"
          stroke={PAPER}
          strokeWidth={1.6 / s}
        />
        {/* the shafts running forward to the two of them */}
        <path d="M-92 -34L-30 -46" stroke={INK} strokeWidth={4 / s} />
        <path d="M-92 -34L-30 -46" stroke={PAPER} strokeWidth={1 / s} />
      </g>
      <Benjamin at={[x - 14, y - 2]} s={s} />
      <Muriel at={[x, y + 2]} s={s * 1.05} />
    </g>
  )
}

/**
 * A cart-horse hauling, cut from the kit's shapes: the near foreleg reaching
 * up the slope, the far one planted, the hind legs driven back with the toes
 * of the hoofs dug in ("the tips of his hoofs clawing at the ground"), the
 * neck stretched and the head low. In the horse's own frame (./people.tsx),
 * placed on the slope by `st`.
 */
const HAUL = {
  far: [
    { d: 'M-44 -66C-50 -54 -56 -46 -60 -38L-64 -14', hoof: 'translate(-65 0) rotate(8 0 -8)' },
    { d: 'M40 -64L46 -38L44 -14', hoof: 'translate(44 0)' },
  ],
  near: [
    { d: 'M-54 -70C-62 -58 -72 -48 -82 -40L-98 -18', hoof: 'translate(-101 -3) rotate(34 0 -8)' },
    { d: 'M54 -68L72 -44L84 -18', hoof: 'translate(86 -1) rotate(-18 0 -8)' },
  ],
}
/** Diagonal hatching over a horse's frame, as the kit gives Clover her softer tone. */
const hatch = (gap: number) => {
  let d = ''
  for (let x = -170; x < 130; x += gap) d += `M${n(x)} 20L${n(x + 124)} -190`
  return d
}

function Hauler({
  st,
  who,
  uid,
  headOnly = false,
}: {
  st: Stance & { down: number }
  who: 'boxer' | 'clover'
  uid: string
  /** Draw the head alone, over a rope held in the teeth. */
  headOnly?: boolean
}) {
  const w = k(st.s)
  const neckT = `rotate(${st.down} 40 -104)`
  const headT = `${neckT} ${HEAD_FRAME}`
  const barrel = who === 'clover' ? MARE_BARREL : HORSE_BARREL
  const legW = who === 'boxer' ? 13 : 11.5
  const head: Part[] = [
    { d: HORSE_EARS, t: headT },
    { d: HORSE_HEAD, t: headT },
  ]
  const parts: Part[] = headOnly
    ? head
    : [
        ...HAUL.far.flatMap((l) => [
          { d: l.d, w: legW },
          { d: hoof(0), t: l.hoof },
        ]),
        ...HAUL.near.flatMap((l) => [
          { d: l.d, w: legW },
          { d: hoof(0), t: l.hoof },
        ]),
        { d: HORSE_TAIL_SHAPE },
        { d: barrel },
        { d: HORSE_NECK, t: neckT },
        ...head,
      ]
  const hs = st.s * 0.84
  const hw = (v: number) => Math.round((v / hs) * 100) / 100
  const clip = `${uid}-haul-${who}${headOnly ? '-head' : ''}`
  return (
    <g transform={stanceT(st)}>
      <g transform={`scale(${st.s})`}>
        <Cut parts={parts} halo={w(1.8)}>
          {who === 'clover' && (
            <>
              <defs>
                <clipPath id={clip}>
                  {!headOnly && <path d={barrel} />}
                  {!headOnly && <path d={HORSE_NECK} transform={neckT} />}
                  <path d={HORSE_HEAD} transform={headT} />
                </clipPath>
              </defs>
              <path
                d={hatch(Math.round((3.4 / st.s) * 10) / 10)}
                clipPath={`url(#${clip})`}
                stroke={PAPER}
                strokeWidth={w(0.85)}
                fill="none"
              />
            </>
          )}
          {!headOnly && <path d={featherCuts(44, w(0.4))} fill={PAPER} />}
          {!headOnly && (
            <path
              d={
                gouge(48, -100, 52, -68, w(0.6), w(3)) +
                gouge(-50, -104, -64, -76, w(0.6), w(-3)) +
                gouge(-76, -86, -80, -40, w(0.4), w(-1)) +
                (who === 'clover' ? gouge(-30, -60, 30, -56, w(0.5), w(2.4)) : '')
              }
              fill={PAPER}
            />
          )}
          {!headOnly && (
            <path
              transform={neckT}
              d={
                gouge(33, -110, 42, -128, w(0.45)) +
                gouge(40, -118, 51, -140, w(0.45)) +
                gouge(48, -128, 60, -152, w(0.45)) +
                gouge(57, -140, 68, -160, w(0.4))
              }
              fill={PAPER}
            />
          )}
          <g transform={headT}>
            <path
              d={
                gouge(15, -0.6, 22.5, -1.6, hw(0.95)) +
                gouge(55, 1, 58.6, 4.4, hw(0.6), hw(-0.6)) +
                gouge(50.5, 9.4, 60, 8.2, hw(0.4)) +
                gouge(4, 2, 26, 17.5, hw(0.5), hw(-4))
              }
              fill={PAPER}
            />
            {who === 'boxer' && (
              // "A white stripe down his nose"
              <path
                d={ribbon(
                  [
                    [3, -7],
                    [16, -7.4],
                    [30, -6.4],
                    [44, -5.2],
                    [57, -2],
                  ],
                  6.4,
                  0.45,
                )}
                fill={PAPER}
              />
            )}
          </g>
        </Cut>
      </g>
    </g>
  )
}

/** Short paper cuts across the rope, so it reads as twisted rope, not a wire. */
function ropeTwist() {
  let d = ''
  for (let i = 0; i < ROPE.length - 1; i++) {
    const [x0, y0] = ROPE[i]
    const [x1, y1] = ROPE[i + 1]
    const L = Math.hypot(x1 - x0, y1 - y0)
    for (let t = 8; t < L - 4; t += 9) {
      const x = x0 + ((x1 - x0) * t) / L
      const y = y0 + ((y1 - y0) * t) / L
      d += gouge(x - 1.4, y + 1.6, x + 1.4, y - 1.6, 0.5)
    }
  }
  return d
}

function WorkingLikeSlaves({ uid }: ArtProps) {
  const m = marks()
  const rope = 'M' + ROPE.map(([x, y]) => `${n(x)} ${n(y)}`).join('L')
  return (
    <g className="lc-push" style={timing({ origin: [480, 200], push: 1.03 })}>
      {/* the summer sky and its sun */}
      <rect x={0} y={0} width={W} height={H} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      <circle cx={640} cy={58} r={30} fill={PAPER} />
      <circle
        className="lc-glow"
        style={timing({ delay: 0.4 })}
        cx={640}
        cy={58}
        r={24}
        fill={RED}
      />

      {/* the fields beyond, and the knoll with the first course of the windmill */}
      <path d={m.fields} fill={INK} />
      <path d={m.hedges} fill={INK} />
      <path
        d={`M${EDGE_X - 40} ${RIM + 6}C${720} ${RIM - 14} ${760} ${HORIZON - 16} ${800} ${HORIZON - 20}C${830} ${HORIZON - 20} ${850} ${HORIZON - 6} ${W + 6} ${HORIZON}V${RIM + 10}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.bold}
      />
      <g>
        <path d="M774 146V132H826V146Z" fill={PAPER} stroke={INK} strokeWidth={1.4} />
        <path
          d="M774 139H826M786 132V139M800 132V139M814 132V139M780 139V146M794 139V146M808 139V146M820 139V146"
          stroke={INK}
          strokeWidth={1}
        />
      </g>
      <GovernessCart at={[742, 176]} s={0.3} />

      {/* the back wall of the quarry, pale limestone in beds */}
      <defs>
        <clipPath id={`${uid}-wall`}>
          <path d={m.backWall} />
        </clipPath>
      </defs>
      <path d={m.backWall} fill={INK} />
      <g clipPath={`url(#${uid}-wall)`}>
        <path d={m.strata} fill={PAPER} />
        <path d={m.joints} fill={INK} />
      </g>
      <path d={`M-4 ${RIM}L${TOP_X} ${RIM + 4}`} stroke={PAPER} strokeWidth={LINE.bold} />

      {/* the slope's cut face, and the top out to the edge */}
      <path
        d={`M-4 ${RAMP0}L${TOP_X} ${rampY(TOP_X)}L${EDGE_X} ${rampY(EDGE_X)}L${EDGE_X + 10} ${rampY(EDGE_X) + 30}L${EDGE_X + 18} ${H + 4}H-4Z`}
        fill={INK}
      />
      <path d={m.face} fill={PAPER} />
      <path
        d={`M-4 ${RAMP0}L${TOP_X} ${rampY(TOP_X)}L${EDGE_X} ${rampY(EDGE_X)}`}
        stroke={PAPER}
        strokeWidth={LINE.bold}
        fill="none"
      />
      {/* the pit below the edge, and the pieces of the boulders already thrown down */}
      <path
        d={`M${EDGE_X + 12} ${RIM + 6}H${W + 4}V${H + 4}H${EDGE_X + 20}L${EDGE_X + 12} ${rampY(EDGE_X) + 30}Z`}
        fill={INK}
      />
      <path d={m.pit} fill={PAPER} />
      <path d={m.broken} fill={PAPER} stroke={INK} strokeWidth={1.1} strokeLinejoin="round" />

      {/* the huge boulder, lashed with rope */}
      <path
        d={bpath(BOULDER_PTS)}
        fill={PAPER}
        stroke={INK}
        strokeWidth={4}
        strokeLinejoin="round"
      />
      <path d={BOULDER_SHADE} fill={INK} />
      <path d={m.boulderCracks} fill={INK} />
      <path d={LASHING} fill="none" stroke={PAPER} strokeWidth={7} strokeLinecap="round" />
      <path d={LASHING} fill="none" stroke={INK} strokeWidth={4} strokeLinecap="round" />
      <circle
        cx={bp([1.02, -0.02])[0]}
        cy={bp([1.02, -0.02])[1]}
        r={4.6}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.4}
      />

      {/* the two sheep at the tail of the rope, then Clover, then Boxer */}
      {SHEEP.map((st) => (
        <StandingSheep key={st.x} st={st} part="body" />
      ))}
      <Hauler st={CLOVER} who="clover" uid={uid} />
      <path d={m.dust} fill={PAPER} stroke={INK} strokeWidth={1} />
      <Hauler st={BOXER} who="boxer" uid={uid} />

      {/* the rope, taut from the boulder through each mouth to Boxer's chest */}
      <path
        d={rope}
        fill="none"
        stroke={PAPER}
        strokeWidth={6.4}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d={rope}
        fill="none"
        stroke={INK}
        strokeWidth={3.6}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path d={ropeTwist()} fill={PAPER} />
      {/* Clover's head over the rope she holds in her teeth */}
      <Hauler st={CLOVER} who="clover" uid={uid} headOnly />
      {SHEEP.map((st) => (
        <StandingSheep key={st.x} st={st} part="head" />
      ))}
      {/* and round his chest and over his shoulders */}
      <g transform={`${stanceT(BOXER)} scale(${BOXER.s})`}>
        <path
          d={BREAST_LOOP}
          fill="none"
          stroke={PAPER}
          strokeWidth={6.4 / BOXER.s}
          strokeLinecap="round"
        />
        <path
          d={BREAST_LOOP}
          fill="none"
          stroke={INK}
          strokeWidth={3.6 / BOXER.s}
          strokeLinecap="round"
        />
      </g>
    </g>
  )
}

export const workingLikeSlaves: LinocutArt = { width: W, height: H, Draw: WorkingLikeSlaves }
