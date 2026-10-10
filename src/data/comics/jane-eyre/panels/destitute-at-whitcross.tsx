import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rays,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Figure,
  HEAD_JANE,
  JaneFace,
  OPEN_HAND,
  STRAW_BONNET,
  STRAW_BONNET_LINING,
  STRAW_BONNET_PLAIT,
  STRAW_BONNET_TIES,
  headAt,
  shawl,
  shawlBorder,
  shawlPin,
  woman,
  type P,
} from './people'

/**
 * Chapter 28: "Destitute at Whitcross", the seventeenth moment in the
 * guide's timeline. Every detail is from the held edition
 * (src/data/full-texts/jane-eyre.ts).
 *
 * THE MOMENT DRAWN. Jane just set down by the coach, alone at the
 * crossroads, with nothing: "Whitcross is no town, nor even a hamlet; it is
 * but a stone pillar set up where four roads meet: whitewashed, I suppose,
 * to be more obvious at a distance and in darkness. Four arms spring from
 * its summit"; "I forgot to take my parcel out of the pocket of the coach
 * ... and now, I am absolutely destitute". Her nights on the heath, her
 * begging and her coming to Moor House are left to the guide.
 *
 * - "It is a summer evening"; "The coach is a mile off by this time; I am
 *   alone"; the roads "stretch out east, west, north, and south—white, broad,
 *   lonely; they are all cut in the moor, and the heather grows deep and
 *   wild to their very verge"; "waves of mountains far beyond that deep
 *   valley at my feet". So the four white roads cross on the moor, the coach
 *   is small on the east road going away, and ridge after ridge of
 *   mountains lie beyond the valley; the low evening sun, the spot colour,
 *   goes down in the west over the hills.
 * - She wears the straw bonnet and the pinned shawl she left Thornfield in,
 *   as the figure kit cuts them, and her hands are empty.
 *
 * Seeds: 1701 to 1708.
 */

const W = 860
const H = 340
/** The low evening sun, going down behind the mountains in the west. */
const SUN: Pt = [150, 176]
const SUN_R = 20
/** The edge of the moor, where it drops into the deep valley. */
const EDGE = 222
/** Where the four roads meet, at the foot of the pillar. */
const CROSS: Pt = [420, 262]
/** The whitewashed pillar: its shaft and its stepped foot. */
const PILLAR = { x: 420, top: 100, w: 24, foot: 266 }

/**
 * The four roads, "east, west, north, and south", seen from the south road:
 * it runs towards us, the north road away over the moor's edge into the
 * valley, and the west and east roads across, the east one bending away to
 * where the coach is. Each as a centre line and its half-width at each point.
 */
const ROADS: { pts: Pt[]; w: number[] }[] = [
  {
    pts: [
      [420, 262],
      [446, 300],
      [470, H + 10],
    ],
    w: [10, 26, 46],
  },
  {
    pts: [
      [420, 262],
      [436, 240],
      [448, EDGE + 1],
    ],
    w: [10, 5, 2],
  },
  {
    pts: [
      [420, 262],
      [220, 260],
      [-10, 254],
    ],
    w: [9, 9, 9],
  },
  {
    pts: [
      [420, 262],
      [600, 250],
      [740, 234],
      [816, EDGE + 2],
    ],
    w: [9, 7, 3.6, 1.6],
  },
]

/** A road as a filled band along its centre line. */
function band({ pts, w }: { pts: Pt[]; w: number[] }) {
  const left: Pt[] = []
  const right: Pt[] = []
  pts.forEach((p, i) => {
    const a = pts[Math.max(0, i - 1)]
    const b = pts[Math.min(pts.length - 1, i + 1)]
    const dx = b[0] - a[0]
    const dy = b[1] - a[1]
    const L = Math.hypot(dx, dy) || 1
    const nx = (-dy / L) * w[i]
    const ny = (dx / L) * w[i]
    left.push([p[0] + nx, p[1] + ny])
    right.push([p[0] - nx, p[1] - ny])
  })
  const all = [...left, ...right.reverse()]
  return 'M' + all.map(([x, y]) => `${n(x)} ${n(y)}`).join('L') + 'Z'
}

/** The evening light: brightest round the sun, dusk gathering in the east. */
const evening = (x: number, y: number) =>
  Math.max(
    clamp(1 - Math.hypot((x - SUN[0]) * 0.45, (y - SUN[1]) * 1.15) / 330) ** 1.2,
    clamp(1 - Math.abs(y - 182) / 90) ** 1.3 * clamp(0.9 - x / 1400),
    0.03,
  )

/** The waves of mountains beyond the valley, farthest first. */
const RIDGES: { y: number; amp: number; seed: number; light: number }[] = [
  { y: 190, amp: 16, seed: 1704, light: 0.55 },
  { y: 202, amp: 10, seed: 1705, light: 0.3 },
  { y: 212, amp: 6, seed: 1706, light: 0 },
]
function crest(y0: number, amp: number, seed: number): (x: number) => number {
  const r = rng(seed)
  const p1 = between(r, 0, 6)
  const p2 = between(r, 0, 6)
  const f1 = between(r, 110, 170)
  const f2 = between(r, 40, 70)
  return (x) => y0 - amp * (0.6 + 0.4 * Math.sin(x / f1 + p1)) - amp * 0.3 * Math.sin(x / f2 + p2)
}

type Marks = {
  sky: string
  sunRays: string
  ridges: { shape: string; cuts: string }[]
  valley: string
  heather: string
  ruts: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = gougeField(rng(1701), { x0: 0, x1: W, y0: 4, y1: 206 }, evening, {
    spacing: 6.2,
    len: [40, 130],
    gap: [5, 18],
    max: 6.4,
  })
  const sunRays = rays(rng(1702), SUN[0], SUN[1], {
    from: SUN_R + 10,
    to: 170,
    every: 6,
    width: 2.8,
  })
  // The mountains: the farthest palest in the haze, each nearer wave darker.
  const rc = rng(1703)
  const ridges = RIDGES.map(({ y, amp, seed, light }) => {
    const top = crest(y, amp, seed)
    let shape = `M-4 ${EDGE + 2}`
    for (let x = -4; x <= W + 4; x += 6) shape += `L${x} ${n(top(x))}`
    shape += `L${W + 4} ${EDGE + 2}Z`
    let cuts = ''
    for (let yy = y - amp * 1.3; yy < EDGE; yy += 4.6) {
      let x = between(rc, -10, 0)
      while (x < W) {
        const len = between(rc, 16, 60)
        const L = clamp(light * (0.55 + evening(x, yy) * 0.9))
        if (yy > top(x) + 2 && yy > top(x + len) + 2 && rc() < L * 0.9)
          cuts += gouge(x, yy, x + len, yy + between(rc, -0.3, 0.3), 0.3 + L * 1.2)
        x += len + between(rc, 4, 14)
      }
    }
    return { shape, cuts }
  })
  // The deep valley at her feet: haze, cut in long faint lines.
  const rv = rng(1707)
  let valley = ''
  for (let y = 210; y < EDGE; y += 3) {
    let x = between(rv, -20, 0)
    while (x < W) {
      const len = between(rv, 30, 90)
      if (rv() < 0.7)
        valley += gouge(x, y, x + len, y + between(rv, -0.3, 0.3), 0.6 + evening(x, y) * 1.4)
      x += len + between(rv, 6, 22)
    }
  }
  // "the heather grows deep and wild to their very verge": tufts cut in
  // short upright strokes, finer and closer with distance.
  const rh = rng(1708)
  let heather = ''
  for (let i = 0; i < 640; i++) {
    const y = between(rh, EDGE + 3, H)
    const x = between(rh, -4, W + 4)
    const k = (y - EDGE) / (H - EDGE)
    const L = clamp(evening(x, EDGE) + 0.15)
    if (rh() > 0.3 + L * 0.6) continue
    const h = 2.4 + k * 10
    heather += gouge(x, y, x + between(rh, -2.4, 2.4) * (0.5 + k), y - h, 0.35 + k * 0.9)
  }
  // Wheel ruts along the roads, as fine ink lines.
  let ruts = ''
  for (const road of ROADS) {
    for (const side of [-0.5, 0.5]) {
      const pts = road.pts.map((p, i) => {
        const a = road.pts[Math.max(0, i - 1)]
        const b = road.pts[Math.min(road.pts.length - 1, i + 1)]
        const dx = b[0] - a[0]
        const dy = b[1] - a[1]
        const L = Math.hypot(dx, dy) || 1
        return [p[0] + (-dy / L) * road.w[i] * side, p[1] + (dx / L) * road.w[i] * side] as Pt
      })
      ruts +=
        'M' +
        pts
          .slice(0)
          .map(([x, y]) => `${n(x)} ${n(y)}`)
          .join('L')
    }
  }
  cached = { sky, sunRays, ridges, valley, heather, ruts }
  return cached
}

/**
 * The coach, a mile off on the east road and going away: its body on its
 * wheels, the coachman up on the box, two horses ahead.
 */
const COACH =
  'M724 233L725 220H739L740 233Z' +
  'M727 220L728 216H737L738 220Z' +
  'M735 216L736 211L739 211L739 216Z' +
  'M741 231C741 227 745 225 750 225L755 226L757 230L755 231L754 236H752L751 232L745 232L744 236H742Z' +
  'M747 225L748 221L751 222Z' +
  'M752 226C752 223 755 222 758 222L762 223L763 227L761 228L760 234H758L758 229L755 229Z'
const WHEELS: [number, number, number][] = [
  [727, 234, 3.2],
  [737, 234, 3.2],
]

// ── JANE, by the sign-post, her hands empty ─────────────────────────────────
const JANE_HEAD = { d: HEAD_JANE, at: [552, 166] as P, rot: 8, scale: 0.58 }
const JANE_HT = headAt(1, JANE_HEAD.at, JANE_HEAD.rot, JANE_HEAD.scale)
const NECK: P = [546, 181]
const WAIST: P = [548, 209]
const JANE = woman({
  facing: 1,
  neck: NECK,
  waist: WAIST,
  hemY: 304,
  head: JANE_HEAD,
  arm: 6.8,
  near: {
    arm: [
      [550, 188],
      [554, 215],
      [557, 240],
    ],
    hand: { parts: OPEN_HAND, scale: 0.86, rot: 4 },
  },
  far: { arm: [] },
  gown: { shoulder: 23, waistW: 16, front: 20, back: 32 },
  toes: [
    [560, 304],
    [538, 304],
  ],
  shoe: 0.8,
})
const SHAWL = { width: 32, point: 36, front: 8 }

function DestituteAtWhitcross({ uid }: ArtProps) {
  const m = marks()
  const id = { sky: `${uid}-sky` }
  const P = PILLAR
  return (
    <>
      <defs>
        <clipPath id={id.sky}>
          <rect x={0} y={0} width={W} height={EDGE} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [430, 220], push: 1.03 })}>
        {/* the summer evening sky, and the sun going down in the west */}
        <path d={m.sky} fill={PAPER} />
        <g clipPath={`url(#${id.sky})`}>
          <path d={m.sunRays} fill={PAPER} />
          <circle cx={SUN[0]} cy={SUN[1]} r={SUN_R + 5} fill={INK} />
          <circle cx={SUN[0]} cy={SUN[1]} r={SUN_R} fill={RED} />
        </g>

        {/* "waves of mountains far beyond that deep valley at my feet".
            FIXED 10 October 2026: the crests were cut at the fine weight,
            and the far ones were lost among the long cuts of the sky, so
            the mountains the alt text names did not read; each crest is now
            cut at the bold weight, which survives a phone. */}
        {m.ridges.map((r, k) => (
          <g key={k}>
            <path
              d={r.shape}
              fill={INK}
              stroke={PAPER}
              strokeWidth={LINE.bold}
              strokeLinejoin="round"
            />
            <path d={r.cuts} fill={PAPER} />
          </g>
        ))}
        <path d={m.valley} fill={PAPER} />

        {/* the moor, the heather deep to the roads' verges */}
        <rect x={-4} y={EDGE} width={W + 8} height={H - EDGE + 4} fill={INK} />
        <path d={`M-4 ${EDGE}H${W + 4}`} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.heather} fill={PAPER} />

        {/* the four roads, "white, broad, lonely", cut in the moor */}
        <g fill={PAPER}>
          {ROADS.map((r) => (
            <path key={r.pts[r.pts.length - 1].join()} d={band(r)} />
          ))}
        </g>
        <path d={m.ruts} fill="none" stroke={INK} strokeWidth={1.1} />

        {/* the coach, a mile off by this time */}
        <g fill={INK} stroke={PAPER} strokeWidth={0.8}>
          <path d={COACH} />
          {WHEELS.map(([cx, cy, r]) => (
            <circle key={cx} cx={cx} cy={cy} r={r} />
          ))}
        </g>

        {/* the pillar, whitewashed, on its stepped foot */}
        <path
          d={`M${P.x - 28} ${P.foot}H${P.x + 28}V${P.foot - 8}H${P.x + 21}V${P.foot - 16}H${P.x - 21}V${P.foot - 8}H${P.x - 28}Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.fine}
        />
        <path
          d={`M${P.x - P.w / 2} ${P.foot - 16}L${P.x - P.w / 2 + 2} ${P.top}H${P.x + P.w / 2 - 2}L${P.x + P.w / 2} ${P.foot - 16}Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.fine}
        />
        {/* the shaded side, away from the sun */}
        <path
          d={`M${P.x + 3} ${P.foot - 17}L${P.x + 3} ${P.top + 1}H${P.x + P.w / 2 - 2.6}L${P.x + P.w / 2 - 0.6} ${P.foot - 17}Z`}
          fill={INK}
        />
        <path
          d={
            gouge(P.x + 7, P.top + 20, P.x + 7, P.foot - 40, 0.8) +
            gouge(P.x + 6, P.foot - 13, P.x + 26, P.foot - 13, 0.9)
          }
          fill={PAPER}
        />
        <rect
          x={P.x - 16}
          y={P.top - 9}
          width={32}
          height={10}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.fine}
        />
        {/* "Four arms spring from its summit": west and east in profile,
            north and south coming at us and going away */}
        <g fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round">
          <rect x={P.x - 7} y={P.top - 58} width={14} height={50} />
          <path
            d={`M${P.x - 7} ${P.top - 46}H${P.x - 76}L${P.x - 88} ${P.top - 39}L${P.x - 76} ${P.top - 32}H${P.x - 7}Z`}
          />
          <path
            d={`M${P.x + 7} ${P.top - 32}H${P.x + 76}L${P.x + 88} ${P.top - 25}L${P.x + 76} ${P.top - 18}H${P.x + 7}Z`}
          />
          <path
            d={`M${P.x - 7} ${P.top - 56}L${P.x - 22} ${P.top - 64}L${P.x - 24} ${P.top - 56}L${P.x - 7} ${P.top - 50}Z`}
          />
          <path
            d={`M${P.x + 7} ${P.top - 18}L${P.x + 20} ${P.top - 10}L${P.x + 22} ${P.top - 16}L${P.x + 7} ${P.top - 22}Z`}
          />
        </g>
        {/* their inscriptions, too far off to read */}
        <path
          d={`M${P.x - 72} ${P.top - 39}H${P.x - 14}M${P.x + 14} ${P.top - 25}H${P.x + 72}`}
          stroke={INK}
          strokeWidth={1.5}
          strokeDasharray="6 3 2 3"
        />
        <path d={`M${P.x + 2} ${P.top - 56}V${P.top - 10}`} stroke={INK} strokeWidth={3} />

        {/* Jane, standing at the sign-post in her bonnet and shawl, turned
            after the coach, her hands empty */}
        <Figure parts={JANE}>
          <path
            d={shawl(NECK, WAIST, 1, SHAWL)}
            fill={INK}
            stroke={PAPER}
            strokeWidth={LINE.carve}
            strokeLinejoin="round"
          />
          <path d={shawlBorder(NECK, WAIST, 1, SHAWL)} fill={PAPER} />
          <circle
            cx={shawlPin(NECK, 1, SHAWL.front)[0]}
            cy={shawlPin(NECK, 1, SHAWL.front)[1]}
            r={1.4}
            fill={PAPER}
          />
          <JaneFace t={JANE_HT} hair={false} tucker={false} />
          <g transform={JANE_HT}>
            <path d={STRAW_BONNET_TIES} fill={INK} stroke={PAPER} strokeWidth={0.9} />
            <path
              d={STRAW_BONNET}
              fill={PAPER}
              stroke={INK}
              strokeWidth={1.4}
              strokeLinejoin="round"
            />
            <path d={STRAW_BONNET_PLAIT} fill="none" stroke={INK} strokeWidth={1.1} />
            <path d={STRAW_BONNET_LINING} fill={INK} />
          </g>
        </Figure>
      </g>
    </>
  )
}

export const destituteAtWhitcross: LinocutArt = { width: W, height: H, Draw: DestituteAtWhitcross }
