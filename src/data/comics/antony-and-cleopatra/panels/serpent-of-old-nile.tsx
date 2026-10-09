import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, ribbon, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { flagFloor, footShadow } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { cut, lightField, skyLines } from './light-cuts'
import { Column, beam, parapet } from './palace'
import { CutFigure, HIP_CUT, Person, limb, sizeOf, type P, type Part, type Pose } from './people'

/**
 * Act 1, Scene 5: "Serpent of old Nile", the fifth moment in the guide's
 * timeline. Every detail is from the scene, as the held edition prints it
 * (src/data/full-texts/antony-and-cleopatra.ts):
 *
 * - "Alexandria. A Room in the Palace." So the palace of the first three
 *   panels (./palace.tsx): its round columns, its daylight, the dark wall at
 *   the side.
 * - "Enter Cleopatra, Charmian, Iras and Mardian." CLEOPATRA: "O, Charmian,
 *   Where think’st thou he is now? Stands he, or sits he? Or does he walk? Or
 *   is he on his horse? O happy horse, to bear the weight of Antony! Do
 *   bravely, horse, for wot’st thou whom thou mov’st?" So Cleopatra, the
 *   kit's Cleopatra (./people.tsx, her hair long and loose, the queen's mantle
 *   behind her, no crown: the play gives her one only in 5.2), stands at the
 *   front of the hall with her face lifted and one hand held out, open,
 *   towards the far sky, where what she imagines is cut as a vision: Antony on
 *   his horse.
 * - The vision is cut with the kit's `stone`, as the Julius Caesar kit cuts
 *   Caesar's ghost and the statue of Calpurnia's dream: in paper, edged and
 *   lined in ink, on a cloud of cuts of its own, so it is never taken for a
 *   real horseman in the sky. It fades in after the print arrives. It is
 *   the kit's Antony, bearded and in his armour and general's cloak, riding
 *   away from her. His horse comes from Alexas's report in the same scene: he
 *   "soberly did mount an arm-gaunt steed, Who neighed so high that what I
 *   would have spoke Was beastly dumbed by him". So a lean horse, its head up,
 *   one foreleg lifted, stepping out: "Do bravely, horse".
 * - CHARMIAN: "You think of him too much." So Charmian, the kit's (her hair in
 *   a knot), stands behind her mistress, one hand held out towards her.
 * - "Thou, eunuch Mardian!" ... "Not now to hear thee sing." So Mardian, one
 *   of the queen's household in the kit's long girt robe, waits at the side
 *   by the dark wall. Iras says nothing in the scene and is left out.
 *
 * Nothing is drawn of the mandragora she asks for: no cup is near anyone.
 * The play describes her face only in her own words here, "with Phœbus’
 * amorous pinches black, And wrinkled deep in time": every face in a linocut
 * is cut in ink, and the print leaves the colour to those words.
 *
 * Nothing in the scene is the spot colour's, so the panel is ink and paper.
 *
 * The quotation is Cleopatra's, verbatim. The guide's line for this moment,
 * "Where’s my serpent of old Nile?", is not set on the art: a quotation on
 * this play's panels never names the means of a death by a character's own
 * hand, and the serpent is the means of hers in Act 5. Nothing is taken from
 * a film or stage production. Seeds: 501 (the wall), 502 (the sky), 503 (the
 * floor), 504 and 505 (the parapets), 506 and 507 (the cloud the vision is
 * cut on, and the light cut back into it).
 */

const W = 860
const H = 340
const BEAM = { top: 14, bottom: 40 }
const WALL_FOOT = 262
const FEET = 326
/** The dark wall at the left, and the columns. */
const WALL_END = 118
const COLS = [136, 486, 846]
const CAP_TOP = 40
const SILL = 224

/** Where the vision is: its horse's feet, its scale, and the cloud it is cut on. */
const VISION = { at: [652, 206] as P, s: 1 }
const CLOUD = { cx: 652, cy: 122, rx: 140, ry: 82 }

const S = 1.12

type Marks = {
  wall: string
  sky: string
  floor: string
  parapets: { shape: string; cuts: string }[]
  cloud: string
  cloudCuts: string
}

/**
 * A cloud of cuts for a vision to be cut on: rows of ink, each a long gouge
 * across the cloud's width at that height, so it is solid at the heart and
 * frays into streaks at the rim, in the same horizontal cuts as the sky
 * round it. Fill with INK.
 */
function cloudRows(seed: number, c: typeof CLOUD): string {
  const r = rng(seed)
  let d = ''
  for (let y = c.cy - c.ry + 2; y < c.cy + c.ry - 1; y += 4.2) {
    const t = (y - c.cy) / c.ry
    const hw = c.rx * Math.sqrt(Math.max(0, 1 - t * t))
    if (hw < 10) continue
    const x0 = c.cx - hw * between(r, 0.8, 1.04)
    const x1 = c.cx + hw * between(r, 0.8, 1.04)
    // near the rim a row breaks into pieces, so the edge frays
    const pieces = Math.abs(t) > 0.62 ? 3 : Math.abs(t) > 0.3 ? 2 : 1
    let x = x0
    for (let k = 0; k < pieces; k++) {
      const len = ((x1 - x0) / pieces) * between(r, 0.82, 1)
      d += cut(x, y + between(r, -0.5, 0.5), len, 4.8, between(r, -0.6, 0.6))
      x += (x1 - x0) / pieces
    }
  }
  return d
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const wall = lightField(
    501,
    { x0: 0, x1: WALL_END, y0: BEAM.bottom + 2, y1: WALL_FOOT },
    (x, y) => clamp(0.1 + (x / WALL_END) * 0.45 - (y - 150) / 900),
    { spacing: 6, len: [12, 40], gap: [6, 18], max: 3 },
  )
  // the sky, left bare round the cloud so the two do not cross
  const e = (x: number, y: number) =>
    Math.hypot((x - CLOUD.cx) / CLOUD.rx, (y - CLOUD.cy) / CLOUD.ry)
  const sky = skyLines(502, { x0: WALL_END, x1: W, y0: BEAM.bottom + 2, y1: SILL - 2 }, (x, y) =>
    e(x, y) < 1.12 ? -1 : 0.4 - (y - BEAM.bottom) / 260,
  )
  const floor = flagFloor(rng(503), W, H, WALL_FOOT, [430, 120], 64, 5)
  const parapets = [0, 1].map((k) =>
    parapet(504 + k, COLS[k] + 14, COLS[k + 1] - 14, SILL, WALL_FOOT),
  )
  const cloud = cloudRows(506, CLOUD)
  // and light cut back into it towards the rim
  const cloudCuts = lightField(
    507,
    {
      x0: CLOUD.cx - CLOUD.rx,
      x1: CLOUD.cx + CLOUD.rx,
      y0: CLOUD.cy - CLOUD.ry + 4,
      y1: CLOUD.cy + CLOUD.ry - 4,
    },
    (x, y) => clamp((e(x, y) - 0.62) / 0.4),
    { spacing: 4.2, len: [10, 34], gap: [6, 18], max: 1.6 },
  )
  cached = { wall, sky, floor, parapets, cloud, cloudCuts }
  return cached
}

// ── The vision: Antony on his horse ───────────────────────────────────────────
// In the horse's own frame: facing right, its feet on y 0, about 102 high at
// the withers, so that the kit's Antony at 0.6 sits it as a man sits a horse.

/**
 * The horse's body and neck in one outline: the neck thick at the withers
 * and arched up to the poll, the chest deep, the back dipped where the
 * rider sits. The head is cut in its own frame (HEAD, placed by HEAD_T) and
 * joins the neck at the throat.
 */
const HORSE =
  'M18 -103C26 -116 36 -132 46 -142L50 -146L44 -138L40 -132C38 -118 39 -100 44 -88C48 -80 47 -72 42 -66' +
  'C30 -58 0 -57 -22 -60C-28 -61 -33 -63 -36 -66C-38 -63 -39 -61 -40 -58L-54 -58' +
  'C-57 -64 -60 -72 -59 -80C-58 -92 -52 -99 -42 -101C-28 -101 -12 -96 -2 -96C8 -96 13 -99 18 -103Z'
/**
 * The head, in its own frame: the poll at the origin and the face running
 * along x to the muzzle, the jowl rounded below, so it is a horse's head and
 * not a mule's. HEAD_T sets it on the neck, held high: "neighed so high".
 */
const HEAD =
  'M-2 -6C8 -8 20 -7 32 -5C38 -4 42 -1 42 3C42 7 39 9 35 9C32 9.5 30 9 28 8.5' +
  'C24 9.6 20 11 16 14C11 19 4 19 0 15C-3 11 -4 6 -4 0C-4 -3 -3 -5 -2 -6Z'
const HEAD_T = 'translate(49 -146) rotate(54) scale(0.9)'
/** In the head's frame, in ink: the eye, the nostril, the mouth, the line of the jowl. */
const HEAD_CUTS =
  gouge(9, -2.4, 15.4, -2, 1.1, 0.3) +
  gouge(36.4, 0.4, 38.6, 4, 0.8) +
  gouge(32, 7.2, 41, 6.4, 0.55) +
  gouge(10, 4, 21, 9.6, 0.75, 1.4)
/** In the head's frame: the cheek strap from the poll to the bit, and the noseband. */
const BRIDLE = 'M1 -5L31 7.6M27 -6L28 8.8'
/** The ears, pricked, at the poll. */
const EARS = 'M44.8 -144.4L45 -153.6L49.6 -146.2ZM48.8 -146.6L52 -155L53.6 -145.2Z'
/** The tail, streaming from the croup as he steps out, and the strands in it. */
const TAIL = ribbon(
  [
    [-55, -94],
    [-65, -90],
    [-72, -80],
    [-76, -66],
    [-75, -52],
    [-70, -40],
  ],
  13,
  0.55,
)
const TAIL_CUTS = gouge(-64, -86, -72, -50, 0.7, -1.6) + gouge(-60, -90, -69, -62, 0.6, -1.4)

/** A leg as a shape: a line through its joints, `w` wide at each, tapering to the hoof. */
function leg(pts: P[], w: number[]): string {
  const left: P[] = []
  const right: P[] = []
  pts.forEach((p, i) => {
    const a = pts[Math.max(0, i - 1)]
    const b = pts[Math.min(pts.length - 1, i + 1)]
    const L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1
    const nx = -(b[1] - a[1]) / L
    const ny = (b[0] - a[0]) / L
    left.push([p[0] + (nx * w[i]) / 2, p[1] + (ny * w[i]) / 2])
    right.push([p[0] - (nx * w[i]) / 2, p[1] - (ny * w[i]) / 2])
  })
  return 'M' + [...left, ...right.reverse()].map((p) => `${n(p[0])} ${n(p[1])}`).join('L') + 'Z'
}
/** A hoof on the ground below the fetlock at x, its toe forward. */
const groundHoof = (x: number) =>
  `M${n(x - 4.2)} -6.6L${n(x + 3.4)} -6.6L${n(x + 6.4)} 0L${n(x - 5)} 0Z`
/** The lifted hoof, tucked under the bent knee. */
const LIFTED_HOOF = 'M49.6 -31.6L56.4 -27.4L52.6 -20.6L46 -23.4Z'

/**
 * The legs, in the horse's one outline: the near foreleg lifted, the forearm
 * reaching forward and the cannon hanging from the knee with the hoof
 * tucked; the other three on the ground. Where a near leg passes over the
 * body or a far leg, its edge is cut in ink (LEG_CUTS), as a linocut separates
 * one shape from another in the same tone.
 */
const LEGS =
  leg(
    [
      [33, -70],
      [35, -37],
      [36, -12],
      [37, -6],
    ],
    [12, 7.4, 5.8, 6.6],
  ) +
  leg(
    [
      [-50, -62],
      [-60, -34],
      [-58, -12],
      [-57, -6],
    ],
    [13, 7.8, 5.8, 6.6],
  ) +
  leg(
    [
      [-38, -66],
      [-49, -32],
      [-42, -12],
      [-40, -6],
    ],
    [15, 8.2, 6, 6.8],
  ) +
  leg(
    [
      [38, -76],
      [57, -53],
      [56, -35],
      [53, -29],
    ],
    [14, 8, 6, 6.6],
  )
/** The hooves, cut in paper as the legs are, each with the line of its coronet in ink. */
const HOOVES = groundHoof(37) + groundHoof(-57) + groundHoof(-40) + LIFTED_HOOF
const CORONETS =
  gouge(32.6, -6, 40.6, -6, 0.7) +
  gouge(-61.4, -6, -53.4, -6, 0.7) +
  gouge(-44.4, -6, -36.4, -6, 0.7) +
  gouge(48.6, -30.4, 55.6, -26.6, 0.7)
/** The near legs' edges where they cross the body and the far legs. */
const LEG_CUTS =
  gouge(44, -70, 52, -60, 0.8, -0.6) +
  gouge(38, -64, 42, -58, 0.6) +
  gouge(-31.6, -64, -41.6, -40, 0.8, 0.8) +
  gouge(-44, -66, -54, -40, 0.7, -0.6)

/** The horse's own cuts, in ink: the mane, the forelock, and the lines of the shoulder, the hip and the belly. */
const HORSE_CUTS =
  gouge(24, -108, 16, -100, 1.2, 0.7) +
  gouge(29.6, -117, 21.4, -108.6, 1.2, 0.7) +
  gouge(35, -126, 27, -117.6, 1.2, 0.7) +
  gouge(40.6, -134, 32.4, -126, 1.2, 0.7) +
  gouge(46, -140.6, 38, -133.6, 1.1, 0.7) +
  gouge(48.4, -146, 52, -139.4, 0.8, 0.4) +
  gouge(34, -98, 40, -76, 1, -1.4) +
  gouge(-40, -94, -50, -68, 1, 1.2) +
  gouge(-14, -63.6, 22, -63.6, 0.7, 1.2)
/** A cloth on his back under the rider, its hem cut with a fringe. */
const SADDLE_CLOTH = 'M-24 -98.4C-12 -95.4 1 -94.6 10 -96.4L11.4 -82C0 -79.6 -14 -79.6 -26 -82.4Z'
const SADDLE_CUTS =
  gouge(-23, -85.6, 10, -85, 0.8, 0.6) +
  gouge(-17, -94, -18, -87.6, 0.6) +
  gouge(-7, -93, -7.6, -87, 0.6) +
  gouge(3, -93.6, 3, -87, 0.6)

/** Where Antony sits: his hip on the cloth, and his scale against the horse. */
const SEAT: P = [-7, -97]
const RIDER_S = 0.6
/** His hand on the reins, in his own figure's frame. */
const REIN_HAND: P = [38, -116]

/** Antony in the saddle: armour and his general's cloak, his hand on the reins. */
const RIDER: Pose = {
  look: 'antony',
  head: { rot: -4 },
  // the standing figure's legs, folded out of sight under his skirt of strips
  legs: {
    far: [
      [-3, -76],
      [-3, -75],
    ],
    near: [
      [3, -76],
      [3, -75],
    ],
  },
  near: {
    pts: [[5, -128], [20, -110], REIN_HAND],
    hand: 'grip',
    deg: 4,
  },
}
/** His near leg astride, from the hip down the horse's side, in his figure's frame (hip at -86). */
const RIDER_LEG: Part[] = [
  {
    d: limb([
      [2, -84],
      [26, -66],
      [18, -30],
    ]),
    w: 9.6,
  },
  { d: 'M12 -33L24 -32C28 -29 29 -25 28 -22L14 -24Z' },
]
const RIDER_LEG_CUTS = gouge(16, -32.4, 25, -29.4, 0.6) + gouge(6, -80, 22, -68, 0.9, 1)

/** The reins, from his hand to the bit, in the horse's frame. */
const REINS = (() => {
  const hx = SEAT[0] + REIN_HAND[0] * RIDER_S
  const hy = SEAT[1] + (REIN_HAND[1] + HIP_CUT) * RIDER_S
  return `M${n(hx + 5)} ${n(hy)}Q${n(hx + 22)} ${n(hy + 4)} 59.6 -119.6`
})()

function Vision({ uid }: { uid: string }) {
  const clip = `${uid}-rider`
  return (
    <g transform={`translate(${VISION.at[0]} ${VISION.at[1]}) scale(${VISION.s})`}>
      <defs>
        <clipPath id={clip}>
          <rect x={-240} y={-400} width={480} height={406} />
        </clipPath>
      </defs>
      <CutFigure
        parts={[
          { d: TAIL },
          { d: LEGS + HOOVES },
          { d: HORSE },
          { d: EARS },
          { d: HEAD, t: HEAD_T },
        ]}
        tone="paper"
        halo={1.9}
      >
        <path d={HORSE_CUTS + LEG_CUTS + TAIL_CUTS + CORONETS} fill={INK} />
        <g transform={HEAD_T}>
          <path d={HEAD_CUTS} fill={INK} />
          <path d={BRIDLE} fill="none" stroke={INK} strokeWidth={1.4} strokeLinecap="round" />
        </g>
      </CutFigure>
      {/* the rider: the kit's Antony above the hip */}
      <g transform={`translate(${SEAT[0]} ${SEAT[1]}) scale(${RIDER_S})`}>
        <g clipPath={`url(#${clip})`}>
          <Person pose={RIDER} at={[0, HIP_CUT]} scale={1 / sizeOf('antony')} stone />
        </g>
      </g>
      <CutFigure parts={[{ d: SADDLE_CLOTH }]} tone="paper" halo={1.4}>
        <path d={SADDLE_CUTS} fill={INK} />
      </CutFigure>
      {/* his near leg astride, over the cloth */}
      <g transform={`translate(${SEAT[0]} ${SEAT[1]}) scale(${RIDER_S}) translate(0 ${HIP_CUT})`}>
        <CutFigure parts={RIDER_LEG} tone="paper" halo={2.4}>
          <path d={RIDER_LEG_CUTS} fill={INK} />
        </CutFigure>
      </g>
      <path d={REINS} fill="none" stroke={INK} strokeWidth={1.2} strokeLinecap="round" />
    </g>
  )
}

/** Cleopatra: her face lifted to the sky, one hand held out, open, towards it. */
const CLEOPATRA: Pose = {
  look: 'cleopatra',
  head: { rot: -14 },
  near: {
    pts: [
      [5, -124],
      [18, -106],
      [36, -112],
    ],
    hand: 'open',
    deg: -22,
    thumb: -1,
  },
}
/** Charmian, behind her: "You think of him too much." */
const CHARMIAN: Pose = {
  look: 'charmian',
  head: { rot: 6 },
  near: {
    pts: [
      [5, -122],
      [15, -100],
      [33, -104],
    ],
    hand: 'open',
    deg: -12,
    thumb: -1,
  },
}
/** Mardian, waiting at the side, his hands at rest. */
const MARDIAN: Pose = { look: 'attendant', head: { rot: 8 } }

function SerpentOfOldNile({ uid }: ArtProps) {
  const m = marks()
  const b = beam(W, BEAM.top, BEAM.bottom)
  return (
    <g className="lc-push" style={timing({ origin: [430, 190], push: 1.03 })}>
      {/* daylight in the openings, the dark wall at the left */}
      <rect x={0} y={0} width={W} height={H} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      <rect x={0} y={BEAM.bottom} width={WALL_END} height={WALL_FOOT - BEAM.bottom} fill={INK} />
      <path d={m.wall} fill={PAPER} />

      {/* what she imagines: Antony on his horse, cut on a cloud of its own */}
      <g className="lc-fade-in" style={timing({ delay: 0.9, dur: 1.6 })}>
        <path d={m.cloud} fill={INK} />
        <path d={m.cloudCuts} fill={PAPER} />
        <Vision uid={uid} />
      </g>

      {m.parapets.map((p, k) => (
        <g key={k}>
          <path d={p.shape} fill={INK} />
          <path d={p.cuts} fill={PAPER} />
        </g>
      ))}
      <path d={m.floor} fill={INK} />
      <path
        d={
          footShadow(98, FEET + 2, 30) +
          footShadow(240, FEET + 2, 34) +
          footShadow(354, FEET + 2, 40)
        }
        fill={INK}
      />
      <path d={b.shape} fill={INK} />
      <path d={b.cuts} fill={PAPER} />
      {COLS.map((cx) => (
        <Column key={cx} cx={cx} top={CAP_TOP} foot={WALL_FOOT + 2} />
      ))}

      <Person pose={MARDIAN} at={[96, FEET]} scale={S * 0.98} />
      <Person pose={CHARMIAN} at={[236, FEET]} scale={S} />
      <Person pose={CLEOPATRA} at={[350, FEET]} scale={S} />
    </g>
  )
}

export const serpentOfOldNile: LinocutArt = { width: W, height: H, Draw: SerpentOfOldNile }
