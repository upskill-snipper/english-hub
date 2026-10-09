import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, gouge, n, ribbon, rng, type Pt } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { CutFigure, Person, limb, type P, type Piece } from './people'
import { H, HourGlass, Playhouse, SKY, W, Yard, skyStreaks } from './the-wooden-o'

/**
 * The Prologue: "The Chorus asks for imagination", the first moment in the
 * guide's timeline. "The bare stage of the playhouse." Every detail is from
 * the Prologue in the held edition (src/data/full-texts/henry-v.ts, Project
 * Gutenberg #1521, which holds it as the section "prologue"):
 *
 * - "Can this cockpit hold The vasty fields of France? Or may we cram Within
 *   this wooden O the very casques That did affright the air at Agincourt?"
 *   and "within the girdle of these walls". So the playhouse is a ring of
 *   timber galleries round an open yard, three tiers high under a roof of
 *   thatch, seen from the yard. It is ./the-wooden-o.tsx, the one playhouse
 *   that the Chorus's later panels (moments 21 and 24) are cut from too, so
 *   that a student sees the play begin and end on one stage. It is drawn
 *   plainly, as a London playhouse of the play's own time; nothing is taken
 *   from a film or stage production.
 * - "On this unworthy scaffold": the stage is a bare platform of boards with
 *   nothing on it but the Chorus and an hour-glass, and the people of the
 *   yard stand below its edge, the backs of their heads to us: "pardon,
 *   gentles all", "Who prologue-like your humble patience pray".
 * - "Admit me Chorus to this history". He speaks from the playhouse's own
 *   time, about 1599, so he is dressed as the kit cuts him (./people.tsx):
 *   doublet, trunk hose, a ruff and a short cloak, bareheaded. He looks up and
 *   holds out an open hand, from a bent arm, towards the open sky of the O:
 *   "On your imaginary forces work."
 * - "Think, when we talk of horses, that you see them Printing their proud
 *   hoofs i' th' receiving earth" and "the very casques That did affright the
 *   air at Agincourt". What he asks the audience to imagine is drawn in the
 *   open sky over the galleries, in line only, unprinted, so that it reads as
 *   imagined and not as there: a column of horsemen at the gallop, riding
 *   away up into the distance, each rider in a casque (the open bascinet of
 *   1415) with his lance held upright, and the ground their hoofs strike
 *   sketched under them with the dust they kick up. Nobody is struck; no lance
 *   is lowered. The quotation is the line.
 * - The spot colour is the one thing in the imagined army printed solid: the
 *   English banner on the nearest lance, Saint George's red cross, cut large
 *   so that at phone width it stays a flag. The other armies of the play are
 *   still to come.
 * - "Turning the accomplishment of many years Into an hour-glass": the
 *   hour-glass stands on the boards in the middle of the stage, its sand
 *   just begun to run (it has run out by the Epilogue, moment 24).
 *
 * The guide's timeline gives this moment no quotation (the held edition
 * lacked the Prologue when it was written; see the note at the top of
 * src/data/study-guides/henry-v.ts), so the panel's is taken from the
 * Prologue as held. Seeds: 101 (the sky's streaks), 105 (the dust).
 */

// ── An imagined horseman ────────────────────────────────────────────────────
// A horse at the gallop facing right, its frame's ground at y 0, and its
// rider with his lance upright. Cut in paper with an ink edge, because he is
// imagined; only the mane, the casque and the banner's cross are printed.

const pt = (p: P) => `${n(p[0])} ${n(p[1])}`

/** A tapered limb: a polygon round the polyline, `w[i]` wide at `pts[i]`. */
function taper(pts: P[], w: number[]): string {
  const L: P[] = []
  const R: P[] = []
  for (let i = 0; i < pts.length; i++) {
    const a = pts[Math.max(0, i - 1)]
    const b = pts[Math.min(pts.length - 1, i + 1)]
    const dx = b[0] - a[0]
    const dy = b[1] - a[1]
    const len = Math.hypot(dx, dy) || 1
    const h = w[i] / 2
    L.push([pts[i][0] - (dy / len) * h, pts[i][1] + (dx / len) * h])
    R.push([pts[i][0] + (dy / len) * h, pts[i][1] - (dx / len) * h])
  }
  return 'M' + [...L, ...R.reverse()].map(pt).join('L') + 'Z'
}

/** A hoof below the last joint of a leg: a short wedge, wider at the sole. */
function hoof(a: P, b: P, len = 7, top = 6, sole = 8.4): string {
  const L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1
  const u: P = [(b[0] - a[0]) / L, (b[1] - a[1]) / L]
  const v: P = [-u[1], u[0]]
  const c: P = [b[0] + u[0] * len, b[1] + u[1] * len]
  const q: P[] = [
    [b[0] + (v[0] * top) / 2, b[1] + (v[1] * top) / 2],
    [c[0] + (v[0] * sole) / 2 + u[0], c[1] + (v[1] * sole) / 2 + u[1]],
    [c[0] - (v[0] * sole) / 2, c[1] - (v[1] * sole) / 2],
    [b[0] - (v[0] * top) / 2, b[1] - (v[1] * top) / 2],
  ]
  return 'M' + q.map(pt).join('L') + 'Z'
}

type Leg = { pts: P[]; w: number[] }
const leg = ({ pts, w }: Leg): Piece => [
  { d: taper(pts, w) },
  { d: hoof(pts[pts.length - 2], pts[pts.length - 1]) },
]

/** The legs at full stretch: the near fore reaching, the far fore folded, the hinds driving. */
const LEGS: Record<'nearFore' | 'farFore' | 'nearHind' | 'farHind', Leg> = {
  nearFore: {
    pts: [
      [36, -62],
      [54, -44],
      [67, -32],
      [72, -26],
    ],
    w: [15, 9.4, 7, 6.4],
  },
  farFore: {
    pts: [
      [28, -62],
      [42, -44],
      [34, -32],
      [29, -28],
    ],
    w: [14, 9, 7, 6.2],
  },
  nearHind: {
    pts: [
      [-56, -66],
      [-60, -46],
      [-72, -36],
      [-86, -24],
      [-90, -20],
    ],
    w: [24, 14, 9, 7, 6.4],
  },
  farHind: {
    pts: [
      [-46, -66],
      [-40, -46],
      [-50, -36],
      [-38, -25],
      [-34, -22],
    ],
    w: [22, 13, 9, 7, 6.2],
  },
}

const BODY =
  'M22 -90C10 -86 -2 -83 -14 -84C-28 -85 -42 -90 -54 -89C-63 -88 -70 -82 -72 -72' +
  'C-73 -64 -70 -58 -64 -54L-38 -51C-24 -46 4 -45 20 -47C28 -48 33 -50 36 -54' +
  'C42 -58 48 -62 50 -68C51 -73 50 -77 47 -80Z'
const NECK = 'M16 -88C26 -100 40 -112 56 -119L66 -108C58 -100 52 -90 50 -78L44 -70Z'
const HEAD =
  'M56 -120C62 -122 68 -120 72 -116L88 -101C92 -98 94 -94 92 -91C90 -88 86 -88 84 -89.6' +
  'L78 -92C72 -94 66 -96 63 -101C61 -105 59 -110 56 -114Z'
const EARS = 'M57 -119L53.6 -128L61 -121ZM60.6 -120L59.6 -129.4L65 -120.4Z'
const TAIL = ribbon(
  [
    [-66, -84],
    [-80, -84],
    [-94, -80],
    [-106, -71],
    [-115, -60],
  ] as Pt[],
  13,
  0.7,
)
/** The mane, flying back from the crest in four locks. */
const MANE = (
  [
    [
      [57, -118],
      [50, -118],
      [43, -114],
    ],
    [
      [50, -114],
      [42, -112],
      [35, -107],
    ],
    [
      [42, -108],
      [34, -106],
      [27, -100],
    ],
    [
      [34, -101],
      [26, -99],
      [19, -94],
    ],
  ] as Pt[][]
)
  .map((lock) => ribbon(lock, 5, 0.8))
  .join('')
/** The eye, the nostril, the line of the cheek, the shoulder, the girth and the thigh, cut in ink. */
const HORSE_LINES =
  'M71.6 -110.4a1.9 1.6 0 1 0 3.8 0a1.9 1.6 0 1 0 -3.8 0Z' +
  'M88.2 -95.6a1.4 1.2 0 1 0 2.8 0a1.4 1.2 0 1 0 -2.8 0Z' +
  gouge(73, -104, 68, -96, 0.7, -1.6) +
  gouge(40, -78, 32, -58, 0.8, 1.6) +
  gouge(-46, -80, -58, -60, 0.8, -1.6) +
  gouge(-4, -82, 2, -52, 0.7, 0.8)
const HORSE_BACK: Piece[] = [leg(LEGS.farFore), leg(LEGS.farHind), { d: TAIL }]
const HORSE_FRONT: Piece[] = [
  { d: BODY },
  { d: NECK },
  { d: HEAD },
  { d: EARS },
  leg(LEGS.nearFore),
  leg(LEGS.nearHind),
]

/**
 * The rider, sitting the gallop: his thigh along the horse's side and his foot
 * in the stirrup, a jupon over his harness, and the casque, an open bascinet
 * rising to a point at the back with its mail to the shoulders, printed solid
 * with the face bare in front of it. (The first casque, cut as big as a hood,
 * read at panel size as a black bucket.)
 */
const RIDER = {
  thigh: [
    [2, -94],
    [17, -80],
    [11, -64],
  ] as P[],
  foot: 'M7.6 -66L16 -65.4L18.6 -61.6L7 -60.8Z',
  jupon:
    'M-7 -91C-10 -104 -8 -114 -2 -121C2 -124 9 -124 13 -121C16 -110 16 -99 14 -91C7 -88 -1 -88 -7 -91Z',
  belt: gouge(-8.6, -99, 15.2, -100, 0.8, 0.4),
  helm: 'M15.6 -137.4C15.4 -142 12 -145.6 3.4 -147.6C0.2 -144 -1.4 -139.6 -1.2 -135L-3.6 -124.6C1 -122.8 9 -122.8 15.4 -124.4L13.6 -127.6L13.8 -137.4Z',
  helmCuts: gouge(12, -139.6, 4, -145.6, 0.9, 0.9) + gouge(-1.2, -133.6, 13.8, -133.2, 0.7, 0.4),
  face: 'M13.8 -137.6L15.8 -137.6C17.2 -135.6 18.4 -133.8 19 -132L17.2 -131.4L17.6 -129.4C16.6 -128.2 15 -127.8 13.6 -128.2Z',
  arm: [
    [7, -117],
    [14, -105],
    [23, -108],
  ] as P[],
  fist: 'M21 -111.6L27.6 -111.2Q30 -107.8 27.6 -104.4L21.2 -104.8Z',
}
const RIDER_PARTS: Piece[] = [{ d: limb(RIDER.thigh), w: 8 }, { d: RIDER.foot }, { d: RIDER.jupon }]

/** The lance, upright through the rider's fist; the banner streams back from its head. */
const LANCE: [P, P] = [
  [27, -60],
  [29.4, -164],
]
/**
 * Saint George's banner, its fly cut in a swallow-tail, rippling as it streams
 * back: cut large, so that at phone width it is still a flag and its cross is
 * a cross, not a red speck by a rider's head.
 */
const BANNER =
  'M29.4 -164C12 -166.6 -10 -160.6 -46 -163.4C-37 -155 -37 -147.6 -46 -138.6C-10 -136.6 12 -140 29.4 -134.6Z'
const BANNER_CROSS = 'M-2 -163.2V-137.4M29.4 -149.4C12 -152 -10 -146.4 -41 -150.6'
/** A plain pennon for the other lances. */
const PENNON = 'M29.4 -164L-6 -159.4L29.4 -154Z'

function Horseman({ at, s, banner }: { at: P; s: number; banner?: boolean }) {
  return (
    <g transform={`translate(${n(at[0])} ${n(at[1])}) scale(${n(s)})`}>
      <CutFigure parts={HORSE_BACK} tone="paper" halo={1.6} />
      <CutFigure parts={HORSE_FRONT} cuts={HORSE_LINES} tone="paper" halo={1.6} />
      <path d={MANE} fill={INK} />
      <path d={limb(LANCE)} stroke={INK} strokeWidth={3.4} strokeLinecap="round" />
      {banner ? (
        <>
          <path d={BANNER} fill={PAPER} stroke={INK} strokeWidth={1.8} strokeLinejoin="round" />
          <path d={BANNER_CROSS} fill="none" stroke={RED} strokeWidth={7.4} />
          <path d={BANNER} fill="none" stroke={INK} strokeWidth={1.8} strokeLinejoin="round" />
        </>
      ) : (
        <path d={PENNON} fill={PAPER} stroke={INK} strokeWidth={1.6} strokeLinejoin="round" />
      )}
      <CutFigure parts={RIDER_PARTS} cuts={RIDER.belt} tone="paper" halo={1.6} />
      <path d={RIDER.helm} fill={INK} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
      <path d={RIDER.helmCuts} fill={PAPER} />
      <path d={RIDER.face} fill={PAPER} stroke={INK} strokeWidth={1.3} strokeLinejoin="round" />
      <path d="M15.2 -134.8a1 0.9 0 1 0 2 0a1 0.9 0 1 0 -2 0Z" fill={INK} />
      <CutFigure
        parts={[[{ d: limb(RIDER.arm), w: 6.4 }, { d: RIDER.fist }]]}
        tone="paper"
        halo={1.5}
      />
    </g>
  )
}

/**
 * The column, riding away up into the distance: the nearest, with the banner,
 * over the middle of the O where its sky is tallest, the others smaller and
 * higher as they go. `at` is where each one's hoofs meet the imagined ground.
 */
const COLUMN: { at: P; s: number; banner?: boolean }[] = [
  { at: [728, 97], s: 0.42 },
  { at: [610, 115], s: 0.53 },
  { at: [470, 136], s: 0.68, banner: true },
]

/** Where the Chorus stands, the hour-glass and the ground the hoofs strike. */
const CHORUS: P = [250, 287]
const GLASS: P = [432, 280]

type Marks = { streaks: string; ground: string; dust: string }
let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The receiving earth, sketched under each horseman as a broken line, and
  // the dust his hoofs throw up behind him in loose curls.
  const r = rng(105)
  let ground = ''
  let dust = ''
  for (const {
    at: [x, y],
    s,
  } of COLUMN) {
    ground += gouge(x - 120 * s, y + 0.6, x + 100 * s, y - 0.6, 1.1 * s + 0.4)
    for (let k = 0; k < 4; k++) {
      const dx = x - (40 + k * 22 + between(r, -6, 6)) * s
      const dy = y - between(r, 4, 12) * s
      const L = between(r, 18, 30) * s
      dust += ribbon(
        [
          [dx, dy],
          [dx - L * 0.35, dy - 2.4 * s],
          [dx - L * 0.7, dy - 1 * s],
          [dx - L, dy - 3 * s],
        ],
        between(r, 2.4, 3.4) * s,
        0.8,
      )
    }
  }
  cached = { streaks: skyStreaks(101), ground, dust }
  return cached
}

function ChorusAsksForImagination({ uid }: ArtProps) {
  const m = marks()
  const skyClip = `${uid}-sky`
  return (
    <>
      <defs>
        <clipPath id={skyClip}>
          <path d={SKY} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [330, 200], push: 1.03 })}>
        {/* the open sky of the O */}
        <path d={SKY} fill={PAPER} />
        <g clipPath={`url(#${skyClip})`}>
          <path d={m.streaks} fill={INK} />
        </g>

        {/* the galleries and the bare stage */}
        <Playhouse />

        {/* what the Chorus asks us to see: horsemen at the gallop in the air */}
        <g className="lc-fade-in" style={timing({ delay: 1, dur: 1.6 })}>
          <path d={m.ground + m.dust} fill={INK} />
          {COLUMN.map((h) => (
            <Horseman key={h.at[0]} at={h.at} s={h.s} banner={h.banner} />
          ))}
        </g>

        {/* the hour-glass, the only thing on the stage, its sand just begun to run */}
        <HourGlass x={GLASS[0]} y={GLASS[1]} sand={0.06} />

        {/* the Chorus, looking up, one open hand held out to the air over the yard */}
        <path d={gouge(206, 287, 294, 288, 2.2) + gouge(218, 291, 280, 291.4, 1.4)} fill={INK} />
        <Person
          pose={{
            look: 'chorus',
            head: { rot: -10 },
            mouth: 'open',
            far: {
              pts: [
                [-3, -128],
                [-9, -104],
                [-7, -82],
              ],
            },
            near: {
              pts: [
                [4, -128],
                [18, -104],
                [40, -113],
              ],
              hand: 'open',
              deg: -16,
              thumb: -1,
            },
            legs: {
              far: [
                [-3, -70],
                [-8, -36],
                [-12, -3],
              ],
              near: [
                [3, -70],
                [8, -36],
                [10, -3],
              ],
            },
          }}
          at={CHORUS}
          scale={1.16}
        />

        {/* the yard, and the people standing in it */}
        <Yard />
      </g>
    </>
  )
}

export const chorusAsksForImagination: LinocutArt = {
  width: W,
  height: H,
  Draw: ChorusAsksForImagination,
}
