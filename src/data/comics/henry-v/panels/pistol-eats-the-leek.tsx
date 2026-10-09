import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rng, wedge, type Rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { banner, clothBand, daySky, staff } from './agincourt-field'
import { Person, gripHand, type P } from './people'

/**
 * Act 5, Scene 1: "Pistol eats the leek", the twenty-second moment in the
 * guide's timeline. Every detail is from the scene in the held edition
 * (src/data/full-texts/henry-v.ts, Project Gutenberg #1521):
 *
 * - The English camp in France, by day (the guide's setting): the soldiers'
 *   tents on the trodden ground, and over the nearest of them the banner of
 *   Saint George, the English army's ("Cry, God for Harry! England and Saint
 *   George!", 3.1), its cross the spot colour, cut big enough at phone width
 *   to stay a flag. It is the only red in the panel.
 * - "why wear you your leek today? Saint Davy's day is past" (Gower), and "I
 *   will be so bold as to wear it in my cap till I see him once again"
 *   (Fluellen). Then, to Pistol: "to eat, look you, this leek". The leek
 *   Pistol eats is the one Fluellen wore (the guide: "still wearing the leek
 *   Pistol mocked, beats him with a cudgel until he eats it"); "another leek
 *   in my pocket" comes after, as a threat. So Fluellen is the kit's, his cap
 *   bare of the leek (no `leek`), because the leek is in Pistol's hand. (The
 *   first cut left it in the cap as well, which made two leeks.)
 * - "There is one goat for you. [Strikes him.]", "Quiet thy cudgel; thou dost
 *   see I eat." So Fluellen has his cudgel, held lowered at his side: it
 *   strikes nobody, and Pistol shows no hurt. It was first drawn raised
 *   behind his head, a threat rather than a blow, but a club raised over a
 *   man on his knees reads as a blow about to land, and on review (9 October
 *   2026) it came down. His "green wound" and "ploody coxcomb" are left to
 *   the words. His other hand points at the leek: "Eat, I pray you."
 * - "Must I bite?", "By this leek, I will most horribly revenge. I eat and
 *   eat, I swear". So Pistol, the kit's, his feathered cap and his pointed
 *   beard, is down on one knee before Fluellen, his eyes screwed shut,
 *   biting the end of the leek's white shank, which he holds in his fist, its
 *   leaves hanging down from the far end. "swelling like a turkey-cock" when
 *   he came in (Gower), he is the smallest shape in the picture now. The leek
 *   is cut as the kit cuts the leek in a cap (LEEK in ./people.tsx), paper
 *   with an ink edge, its leaves lined a shade darker than its white; their
 *   green is left to the words.
 * - "Enough, captain; you have astonish'd him." So Gower, the kit's, in his
 *   steel cap, stands back behind Fluellen, one open hand held out low
 *   towards him.
 *
 * Nobody else is in the scene, so nobody else is in the picture. Nothing is
 * taken from a film, television or stage production. Seeds: 2201 (the sky),
 * 2202 (the ground), 2203 (the far tents), 2204 and 2205 (the two near
 * tents), 2206 (the banner).
 */

const W = 860
const H = 340
/** The far edge of the camp's ground. */
const HORIZON = 222
/** Where the people stand. */
const FEET = 322

const GOWER: P = [150, FEET]
const FLUELLEN: P = [352, FEET]
const PISTOL: P = [608, FEET]
const SCALE = 1.28

/** A round tent: its middle, its base, its wall's half-width, its eaves and its peak. */
type Tent = { cx: number; base: number; half: number; eave: number; peak: number }
/** The great tent behind Gower, with the banner, and the edge of another on the right. */
const TENT: Tent = { cx: 104, base: 298, half: 96, eave: 150, peak: 74 }
const TENT_R: Tent = { cx: 846, base: 292, half: 74, eave: 158, peak: 92 }

/** A round tent's outlines: its conical roof, the scalloped valance and the wall. */
function tentShapes(t: Tent) {
  const x0 = t.cx - t.half - 8
  const x1 = t.cx + t.half + 8
  const roof = `M${x0} ${t.eave}Q${n(t.cx - t.half * 0.42)} ${t.peak + 24} ${t.cx} ${t.peak}Q${n(t.cx + t.half * 0.42)} ${t.peak + 24} ${x1} ${t.eave}Z`
  let valance = `M${x0} ${t.eave - 1}H${x1}V${t.eave + 5}`
  for (let x = x1; x > x0 + 1; x -= 19.6)
    valance += `Q${n(x - 9.8)} ${t.eave + 15} ${n(x - 19.6)} ${t.eave + 5}`
  const wall = `M${t.cx - t.half} ${t.eave + 4}L${t.cx - t.half - 4} ${t.base}L${t.cx + t.half + 4} ${t.base}L${t.cx + t.half} ${t.eave + 4}Z`
  return { roof, valance: valance + 'Z', wall }
}

/** The roof's seams running up to the peak, cut in paper, and the wall's shading, in ink. */
function tentCuts(r: Rng, t: Tent, litFrom: number) {
  let roof = ''
  for (let k = -5; k <= 5; k++) {
    const xb = t.cx + (k / 5.6) * (t.half + 8)
    roof += gouge(
      t.cx + k * 0.8,
      t.peak + 8,
      xb,
      t.eave - 3,
      0.5 + (1 - Math.abs(k) / 6) * 0.9,
      between(r, -0.4, 0.4),
    )
  }
  // Pale where the day falls on the wall, shaded as it turns away, in
  // upright strokes.
  let shade = ''
  for (let x = t.cx - t.half + 2; x < t.cx + t.half - 1; x += between(r, 3.4, 4.4)) {
    const dark = clamp((Math.abs(x - t.cx - litFrom) / t.half - 0.36) / 0.64)
    if (dark < 0.05) continue
    let y = t.eave + 12 + between(r, 0, 10)
    while (y < t.base - 4) {
      const len = between(r, 18, 60)
      shade += `M${n(x)} ${n(y)}v${n(Math.min(len, t.base - 3 - y))}`
      y += len + between(r, 4, 12) * (1.3 - dark)
    }
  }
  const seams = [-0.65, -0.32, 0.32, 0.65]
    .map((k) => `M${n(t.cx + k * t.half)} ${t.eave + 8}L${n(t.cx + k * t.half * 1.04)} ${t.base}`)
    .join('')
  return { roof, shade, seams }
}

/**
 * The trodden ground of the camp, paper cut with ink: short dashes in rows
 * that lengthen and thicken towards the reader, and tufts of grass standing
 * up in it. Fill INK. (A cart track's ruts were cut too, and ran through
 * Pistol's knee like a staff; they went.)
 */
function campGround(r: Rng): string {
  let d = ''
  for (let y = HORIZON + 5; y < H; y += 4.6 + (y - HORIZON) * 0.08) {
    const t = clamp((y - HORIZON) / (H - HORIZON))
    let x = between(r, -20, 0)
    while (x < W) {
      const len = 3 + t * 16 * between(r, 0.6, 1.3)
      if (r() < 0.32 + t * 0.2)
        d += gouge(
          x,
          y + between(r, -0.8, 0.8),
          x + len,
          y + between(r, -0.8, 0.8),
          (0.4 + t * 1.2) * between(r, 0.7, 1.2),
          between(r, -0.5, 0.5),
        )
      x += len + between(r, 8, 30) * (1.3 - t * 0.5)
    }
  }
  // tufts of grass, larger nearer
  for (let i = 0; i < 46; i++) {
    const y = between(r, HORIZON + 14, H - 4)
    const x = between(r, 4, W - 4)
    const t = clamp((y - HORIZON) / (H - HORIZON))
    const s = 2.6 + t * 6
    for (const k of [-1, 0, 1])
      d += wedge(x, y, x + k * s * 0.7, y - s * (1.2 - Math.abs(k) * 0.25), 1 + t * 1.2, 0.3)
  }
  return d
}

type Marks = {
  sky: string
  ground: string
  farTents: string
  farCuts: string
  tent: ReturnType<typeof tentCuts>
  tentR: ReturnType<typeof tentCuts>
  pole: string
  cloth: string
  /** The arms of the cross, as two paths: one path with both would leave a hole where they cross. */
  cross: [string, string]
  shadows: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(2201)
  // A clear day, a little cloud high up.
  const sky = daySky(r, { x0: 0, x1: W, y0: 8, y1: HORIZON - 30 }, (x, y) => {
    const high = 1 - y / (HORIZON - 30)
    return -0.06 + high * high * 0.42 + (x / W) * 0.05
  })
  const ground = campGround(rng(2202))

  // The rest of the camp along the far edge of the ground: small tents, each
  // a peak on its pole with its door cut in paper.
  const rt = rng(2203)
  let farTents = ''
  let farCuts = ''
  for (const [x, s] of [
    [236, 0.9],
    [282, 0.7],
    [430, 0.62],
    [478, 0.8],
    [618, 0.72],
    [668, 0.95],
    [722, 0.7],
  ] as P[]) {
    const w = 26 * s
    const h = 24 * s * between(rt, 0.9, 1.1)
    const b = HORIZON + 1
    farTents += `M${n(x - w)} ${b}Q${n(x - w * 0.4)} ${n(b - h * 0.5)} ${n(x)} ${n(b - h)}Q${n(x + w * 0.4)} ${n(b - h * 0.5)} ${n(x + w)} ${b}Z`
    farTents += wedge(x, b - h + 1, x, b - h - 7 * s, 1.6, 1)
    farCuts += `M${n(x - 3 * s)} ${b}L${n(x)} ${n(b - h * 0.55)}L${n(x + 3 * s)} ${b}Z`
  }

  const tent = tentCuts(rng(2204), TENT, 18)
  const tentR = tentCuts(rng(2205), TENT_R, -30)

  // Saint George's banner on the pole above the great tent, flying out on
  // the wind. Its wave is kept low, so the cross's arms stay straight bands.
  const rb = rng(2206)
  const top: P = [TENT.cx + 1, 20]
  const flag = banner(rb, [top[0] + 1, top[1] + 2], { len: 92, depth: 56, ragged: true, wave: 2.6 })
  const pole = staff([TENT.cx, TENT.peak + 4], top, 3.4)
  const cross: [string, string] = [
    clothBand(flag.at, true, 0, 0.86, 0.5, 0.2),
    clothBand(flag.at, false, 0, 1, 0.38, (0.2 * 56) / 92),
  ]

  // The shadows the three men cast, short in the day.
  let shadows = ''
  for (const [x, w] of [
    [GOWER[0] + 2, 30],
    [FLUELLEN[0] + 2, 36],
    [PISTOL[0] - 2, 46],
  ] as P[]) {
    for (let k = 0; k < 3; k++)
      shadows += gouge(
        x - w + k * 4,
        FEET + 1 + k * 2.4,
        x + w - k * 4,
        FEET + 1.6 + k * 2.4,
        1.4 - k * 0.3,
      )
  }

  cached = { sky, ground, farTents, farCuts, tent, tentR, pole, cloth: flag.cloth, cross, shadows }
  return cached
}

const T = tentShapes(TENT)
const TR = tentShapes(TENT_R)
/** The great tent's door, to the left of Gower: a dark opening, its flaps tied back. */
const DOOR = { x0: 34, x1: 80, top: 200 }
const DOORWAY = `M${DOOR.x0} ${TENT.base}C${DOOR.x0 + 1} ${TENT.base - 60} ${DOOR.x0 + 14} ${DOOR.top + 18} ${(DOOR.x0 + DOOR.x1) / 2} ${DOOR.top}C${DOOR.x1 - 14} ${DOOR.top + 18} ${DOOR.x1 - 1} ${TENT.base - 60} ${DOOR.x1} ${TENT.base}Z`
const FLAPS =
  `M${DOOR.x0} ${TENT.base}L${DOOR.x0 - 12} ${TENT.base}C${DOOR.x0 - 8} ${TENT.base - 40} ${DOOR.x0 - 10} ${TENT.base - 64} ${DOOR.x0 + 2} ${TENT.base - 72}Z` +
  `M${DOOR.x1} ${TENT.base}L${DOOR.x1 + 12} ${TENT.base}C${DOOR.x1 + 8} ${TENT.base - 40} ${DOOR.x1 + 10} ${TENT.base - 64} ${DOOR.x1 - 2} ${TENT.base - 72}Z`

/**
 * The leek Pistol bites, in his own frame (he is drawn facing right and
 * flipped to face Fluellen). It is the leek Fluellen wore, so it is cut as
 * the kit cuts the leek in his cap (LEEK in ./people.tsx), paper with an ink
 * edge, larger. Its white shank hangs down from his mouth, where he bites it,
 * past his fist, with the long fold of its sheath in ink; from its far end
 * its flat leaves fan down, lined along their length, their tips flopping
 * over, as a leek's do.
 *
 * WHY (9 October 2026). It was first cut with its leaves in ink: three black
 * curved blades, which at panel size read as a bird's wing or a bunch of
 * sickles, and the shaft held level across his face read as a flute.
 */
const BITE: P = [28, -121]
const LEAF_BASE: P = [71, -86]
const LEEK_SHANK = wedge(BITE[0], BITE[1], LEAF_BASE[0], LEAF_BASE[1], 10.6, 9.4)
const LEEK_SHEATH = `M${BITE[0] + 5} ${BITE[1] + 1}L${LEAF_BASE[0] - 2} ${LEAF_BASE[1] - 2.2}`
/** A leek's leaf along `pts`: broad where it leaves the shank, flat, coming to a point. */
function leaf(pts: P[], w: number): string {
  const left: P[] = []
  const right: P[] = []
  const k = pts.length
  for (let i = 0; i < k; i++) {
    const a = pts[Math.max(0, i - 1)]
    const b = pts[Math.min(k - 1, i + 1)]
    const L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1
    const nx = -(b[1] - a[1]) / L
    const ny = (b[0] - a[0]) / L
    const h = (w / 2) * (1 - Math.pow(i / (k - 1), 3))
    left.push([pts[i][0] + nx * h, pts[i][1] + ny * h])
    right.push([pts[i][0] - nx * h, pts[i][1] - ny * h])
  }
  return 'M' + [...left, ...right.reverse()].map((p) => `${n(p[0])} ${n(p[1])}`).join('L') + 'Z'
}
/**
 * Lines along a leaf, `off` either side of its middle: the long veins of a
 * leek's leaf, which print the leaves a shade darker than the white shank,
 * as the leaves of a leek are darker than its stem.
 */
function veins(pts: P[], offs: number[]): string {
  let d = ''
  for (const off of offs) {
    const line: P[] = []
    for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[Math.max(0, i - 1)]
      const b = pts[Math.min(pts.length - 1, i + 1)]
      const L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1
      const taper = 1 - Math.pow(i / (pts.length - 1), 2)
      line.push([
        pts[i][0] - ((b[1] - a[1]) / L) * off * taper,
        pts[i][1] + ((b[0] - a[0]) / L) * off * taper,
      ])
    }
    d += 'M' + line.map((p) => `${n(p[0])} ${n(p[1])}`).join('L')
  }
  return d
}
/** The leaves, back to front, fanning down from the end of the shank as it hangs from his mouth. */
const LEAVES: [P[], number][] = [
  [
    [
      [70, -89],
      [84, -92],
      [99, -90],
      [111, -84],
      [118, -74],
    ],
    12.4,
  ],
  [
    [
      [71, -87],
      [86, -83],
      [99, -76],
      [109, -66],
      [114, -55],
    ],
    12.4,
  ],
  [
    [
      [70, -85],
      [81, -75],
      [90, -63],
      [95, -51],
      [96, -40],
    ],
    12,
  ],
]
const LEEK_LEAVES = LEAVES.map(([pts, w]) => leaf(pts, w))
const LEEK_VEINS = LEAVES.map(([pts]) => veins(pts, [-2.6, 0, 2.6])).join('')
/** Pistol's fist round the shank, printed over it. */
const FIST = gripHand([42, -104], -52, 1.1)

/** Fluellen's cudgel, lowered at his side: a knotted stick thickening to a knob, in his own frame. */
const GRIP: P = [-13, -84]
const CUDGEL_A = 104
const along = (d: number, s = 0): P => {
  const a = (CUDGEL_A * Math.PI) / 180
  return [GRIP[0] + Math.cos(a) * d - Math.sin(a) * s, GRIP[1] + Math.sin(a) * d + Math.cos(a) * s]
}
const CUDGEL =
  'M' +
  [
    along(-8, -2.6),
    along(14, -3.2),
    along(20, -4.8),
    along(24, -3.4),
    along(38, -4),
    along(46, -6.4),
    along(53, -5.6),
    along(56, -1),
    along(54, 4.4),
    along(46, 6),
    along(36, 4.2),
    along(30, 5.6),
    along(26, 3.6),
    along(10, 3),
    along(-8, 2.6),
  ]
    .map((p) => `${n(p[0])} ${n(p[1])}`)
    .join('L') +
  'Z'
const CUDGEL_KNOTS = (() => {
  const a = along(20, -1.4)
  const b = along(23, -1.6)
  const c = along(44, 1.2)
  const d = along(48, 1)
  return gouge(a[0], a[1], b[0], b[1], 0.8) + gouge(c[0], c[1], d[0], d[1], 0.9)
})()

function PistolEatsTheLeek({ uid }: ArtProps) {
  const m = marks()
  const flag = `${uid}-flag`
  return (
    <>
      <defs>
        <clipPath id={flag}>
          <path d={m.cloth} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [470, 230], push: 1.03 })}>
        {/* the day sky over the camp */}
        <rect x={0} y={0} width={W} height={HORIZON + 2} fill={PAPER} />
        <path d={m.sky} fill={INK} />

        {/* the camp's ground and its far tents */}
        <rect x={0} y={HORIZON} width={W} height={H - HORIZON} fill={PAPER} />
        <path d={`M0 ${HORIZON}H${W}`} stroke={INK} strokeWidth={LINE.bold} />
        <path d={m.farTents} fill={INK} />
        <path d={m.farCuts} fill={PAPER} />
        <path d={m.ground} fill={INK} />

        {/* the edge of a tent on the right */}
        <path
          d={TR.wall}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.bold}
          strokeLinejoin="round"
        />
        <path d={m.tentR.shade} stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
        <path d={m.tentR.seams} stroke={INK} strokeWidth={1.8} />
        <path d={TR.roof} fill={INK} />
        <path d={m.tentR.roof} fill={PAPER} />
        <path d={TR.valance} fill={INK} stroke={PAPER} strokeWidth={1.2} strokeLinejoin="round" />

        {/* the great tent, and Saint George's banner over it */}
        <path d={m.pole} fill={INK} stroke={PAPER} strokeWidth={1.2} strokeLinejoin="round" />
        <path d={m.cloth} fill={PAPER} stroke={INK} strokeWidth={2.2} strokeLinejoin="round" />
        <g clipPath={`url(#${flag})`} fill={RED}>
          <path d={m.cross[0]} />
          <path d={m.cross[1]} />
        </g>
        <path d={T.wall} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} strokeLinejoin="round" />
        <path d={m.tent.shade} stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
        <path d={m.tent.seams} stroke={INK} strokeWidth={1.8} />
        <path d={DOORWAY} fill={INK} />
        <path d={FLAPS} fill={PAPER} stroke={INK} strokeWidth={1.6} strokeLinejoin="round" />
        <path d={T.roof} fill={INK} />
        <path d={m.tent.roof} fill={PAPER} />
        <path d={T.valance} fill={INK} stroke={PAPER} strokeWidth={1.2} strokeLinejoin="round" />
        <path d={m.shadows} fill={INK} />

        {/* Gower, standing back: "Enough, captain" */}
        <Person
          at={GOWER}
          scale={SCALE}
          pose={{
            look: 'gower',
            head: { rot: 3 },
            mouth: 'open',
            far: {
              pts: [
                [-3, -130],
                [-7, -104],
                [-4, -80],
              ],
            },
            near: {
              pts: [
                [5, -128],
                [16, -104],
                [36, -98],
              ],
              hand: 'open',
              deg: -12,
            },
          }}
        />

        {/* Fluellen, his cap bare of the leek, the cudgel lowered at his side, pointing at it */}
        <Person
          at={FLUELLEN}
          scale={SCALE}
          pose={{
            look: 'fluellen',
            brow: 'frown',
            mouth: 'open',
            head: { rot: 4 },
            legs: {
              far: [
                [-3, -70],
                [-9, -36],
                [-15, -3],
              ],
              near: [
                [3, -70],
                [12, -37],
                [19, -3],
              ],
            },
            far: {
              pts: [[-3, -131], [-10, -107], GRIP],
              hand: 'none',
            },
            near: {
              pts: [
                [5, -128],
                [22, -110],
                [46, -102],
              ],
              hand: 'point',
              deg: 14,
            },
          }}
        >
          {/* the cudgel, and the fist round it */}
          <path d={CUDGEL} fill={INK} stroke={PAPER} strokeWidth={1.6} strokeLinejoin="round" />
          <path d={CUDGEL_KNOTS} fill={PAPER} />
          <path
            d={gripHand(GRIP, 97, 1.1).d}
            fill={INK}
            stroke={PAPER}
            strokeWidth={1.3}
            strokeLinejoin="round"
          />
        </Person>

        {/* Pistol, down on one knee, biting the leek */}
        <Person
          at={PISTOL}
          scale={SCALE}
          flip
          pose={{
            look: 'pistol',
            sword: false,
            eye: 'shut',
            brow: 'sorrow',
            body: { neck: [10, -112], hip: [0, -45] },
            head: { rot: 12 },
            legs: {
              far: [
                [-3, -45],
                [22, -47],
                [24, -3],
              ],
              near: [
                [3, -45],
                [6, -7],
                [-24, -4],
              ],
            },
            far: {
              pts: [
                [6, -106],
                [14, -80],
                [24, -56],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [12, -104],
                [26, -86],
                [42, -104],
              ],
              hand: 'none',
            },
          }}
        >
          {LEEK_LEAVES.map((d) => (
            <path
              key={d}
              d={d}
              fill={PAPER}
              stroke={INK}
              strokeWidth={1.5}
              strokeLinejoin="round"
            />
          ))}
          <path d={LEEK_VEINS} fill="none" stroke={INK} strokeWidth={0.9} strokeLinecap="round" />
          <path d={LEEK_SHANK} fill={PAPER} stroke={INK} strokeWidth={1.5} strokeLinejoin="round" />
          <path d={LEEK_SHEATH} fill="none" stroke={INK} strokeWidth={0.9} strokeLinecap="round" />
          <path d={FIST.d} fill={INK} stroke={PAPER} strokeWidth={1.4} strokeLinejoin="round" />
        </Person>
      </g>
    </>
  )
}

export const pistolEatsTheLeek: LinocutArt = { width: W, height: H, Draw: PistolEatsTheLeek }
