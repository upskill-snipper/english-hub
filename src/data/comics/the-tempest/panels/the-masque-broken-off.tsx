import type { ReactNode } from 'react'

import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  arc,
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { HEAD_GIRL, JULIET_HAIR, JULIET_STRANDS } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { doublet, gown } from '../../romeo-and-juliet/panels/verona-kit'
import {
  CutFigure,
  HEAD_MAN,
  Person,
  STAFF_HELD,
  bareFoot,
  limb,
  mitt,
  type P,
  type Part,
} from './people'
import { Cell, LimeTree } from './the-cell'

/**
 * Act 4, Scene 1: "The masque broken off", the eleventh moment in the guide's
 * timeline. Every detail is from the scene in the held edition (Project
 * Gutenberg #1540, src/data/full-texts/the-tempest.ts):
 *
 * - "Enter certain Reapers, properly habited: they join with the Nymphs in a
 *   graceful dance; towards the end whereof Prospero starts suddenly, and
 *   speaks; after which, to a strange, hollow, and confused noise, they
 *   heavily vanish." So the dancers are there, hand in hand, and going: the
 *   first is whole, the next is fading from the feet up, and the third is only
 *   an outline with the sky showing through it, her hand reaching on to a
 *   partner who has already gone. "These our actors, As I foretold you, were all spirits and Are
 *   melted into air, into thin air". They are cut in paper with an ink edge,
 *   as the kit cuts Ariel and the pilot its spirits, because they are spirits
 *   ("Spirits, which by mine art I have from their confines call'd"); and
 *   they fade as the kit cuts Ariel unseen (`veiled` in ./people.tsx): an
 *   outline and rows of fine upright cuts, the ground showing between them.
 *   (They were first cut streaming away into ribbons of air below the waist,
 *   as Ariel is; hanging from dancers' bodies, the ribbons read as
 *   tentacles. A fourth dancer, cut as a broken outline of a hat and
 *   shoulders, read as a crate, and was taken out.)
 * - The reapers: "You sun-burn'd sicklemen, of August weary ... your
 *   rye-straw hats put on". So a smock, bare legs and a broad straw hat. No
 *   sickle is drawn: the text names their trade, not a blade in the dance.
 * - The nymphs: "You nymphs, call'd Naiads, of the windring brooks, With your
 *   sedg'd crowns". So long loose hair, a light gown and a wreath of sedge
 *   leaves, which lean back like grass so they are not taken for a crown of
 *   points (a king's or a goddess's).
 * - Iris, who called them, is the rainbow: "Whose wat'ry arch and messenger
 *   am I", "thy blue bow", "heavenly bow". The bow stands over the dance and
 *   breaks up on the right as the show dissolves, "like this insubstantial
 *   pageant faded". The spot colour is its outer band, the one colour the
 *   print has, for the "many-colour'd messenger". It breaks into arcs along
 *   the curve, never into falling drops, which would read as something else.
 * - "Prospero starts suddenly": "Well done! avoid; no more!" He stands in
 *   the middle, staff in hand (held clear of his face, as the kit's
 *   STAFF_HELD holds it), frowning, his free arm flung out at the dancers,
 *   the hand open with its fingers apart and no higher than the shoulder (a
 *   raised straight arm with a flat hand reads as a salute). The
 *   text gives no direction for his magic garment in this scene, so he wears
 *   his gown, as in the panels of 1.2 after "Lie there my art".
 * - "This is strange: your father's in some passion That works him
 *   strongly." "Never till this day Saw I him touch'd with anger so
 *   distemper'd." Ferdinand and Miranda, who watched the show ("No tongue!
 *   all eyes!"), stand before the cell looking at him: he lifts an open hand,
 *   she holds hers clasped at her breast.
 * - "Before Prospero's cell": the cell and its lime, cut once in
 *   ./the-cell.tsx. It is still afternoon (Caliban's plot is set for
 *   Prospero's "afternoon" sleep, 3.2), so the sky is clear.
 *
 * Caliban, Stephano and Trinculo, and the hounds that hunt them, are in the
 * guide's summary of this moment but come on after Ferdinand and Miranda have
 * gone into the cell, so they are not in this picture.
 *
 * The spirits of the masque appear in this panel only, so they are cut here
 * from the kit's heads, hands and garments (the Romeo and Juliet kit's girl's
 * head and long hair, the man's head, the gown, the doublet and the bare foot
 * of ./people.tsx), not added to ./people.tsx.
 *
 * Seeds: 4101 (sky), 4102 (sea), 4103 (ground), 4104 (the bow's fragments).
 */

const W = 860
const H = 340
const GROUND = 330
const HORIZON = 190
const DANCE = 318
const edge = (x: number) => 238 + 4 * Math.sin(x / 41)

/** Iris's bow: its centre, and the radii of its outer edge, its bands and its inner edge. */
const BOW = { cx: 720, cy: 304, out: 216, red: 210, mid: 198, inner: 184, foot: 199, break: 284 }
const rad = (a: number) => (a * Math.PI) / 180

type Marks = {
  sky: string
  sea: string
  land: string
  ground: string
  tufts: string
  shards: { a0: number; a1: number }[]
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = gougeField(
    rng(4101),
    { x0: 0, x1: W, y0: 4, y1: HORIZON - 2 },
    (x, y) => clamp(0.1 + (1 - y / HORIZON) * 0.34),
    { spacing: 6, len: [36, 130], gap: [14, 44], max: 2.2 },
  )
  const sea = gougeField(
    rng(4102),
    { x0: 0, x1: W, y0: HORIZON + 3, y1: 252 },
    (x, y) => clamp(0.32 - ((y - HORIZON) / 60) * 0.12),
    { spacing: 5, len: [30, 90], gap: [8, 26], max: 1.8 },
  )
  let land = `M-10 ${H + 10}L-10 ${n(edge(0))}`
  for (let x = 0; x <= W + 10; x += 8) land += `L${x} ${n(edge(x))}`
  land += `L${W + 10} ${H + 10}Z`
  const g = rng(4103)
  const ground = gougeField(
    g,
    { x0: 0, x1: W, y0: 244, y1: H },
    (x, y) => clamp(((y - 238) / 102) ** 1.5 * 0.5 + 0.06),
    { spacing: 6, len: [10, 46], gap: [14, 44], max: 2 },
  )
  let tufts = ''
  for (let i = 0; i < 80; i++) {
    const x = between(g, 0, W)
    const y = between(g, edge(x) + 6, H - 2)
    const h = 3 + clamp((y - 240) / 100) * 7
    tufts += `M${n(x - 2.4)} ${n(y)}l${n(-1.2)} ${n(-h)}M${n(x)} ${n(y)}l0 ${n(-h * 1.25)}M${n(x + 2.4)} ${n(y)}l${n(1.6)} ${n(-h)}`
  }
  // The bow breaking up on the right: arcs that shorten and spread apart
  // along the curve, ending in the air before the edge of the block.
  const s = rng(4104)
  const shards: Marks['shards'] = []
  let a = BOW.break + 2
  let k = 0
  while (a < 318) {
    const len = Math.max(1.6, 7 - k * 0.9 + between(s, -0.6, 0.6))
    shards.push({ a0: a, a1: a + len })
    a += len + 2.4 + k * 1.3 + between(s, 0, 1.2)
    k++
  }
  cached = { sky, sea, land, ground, tufts, shards }
  return cached
}

// ── The spirits of the masque ────────────────────────────────────────────────

/**
 * A spirit of the masque, in its own frame (facing right, feet at (0, 0), a
 * man about 182 tall). `going` is how far it has vanished: 0 whole, 1 fading
 * from the hem or the feet up, 2 an outline only.
 */
type Spirit = {
  kind: 'reaper' | 'nymph'
  at: P
  scale: number
  going: 0 | 1 | 2
  /** The arm reaching back to the dancer behind, and the arm reaching on to the one ahead. */
  back?: P[]
  on?: P[]
}

/** The reaper's broad straw hat, in the head's frame: the wide flat brim and the low crown. */
const STRAW_HAT =
  'M-31 -10.6C-17 -16.6 14 -17.8 33 -12.8C34.4 -11.4 33.8 -9.6 32 -9.4C14 -13 -14 -12.2 -30 -7.4C-31.8 -7.6 -32.2 -9.6 -31 -10.6Z' +
  'M-12.4 -13.8C-13 -21.6 -8 -25.8 0.8 -26C9.6 -26.2 13.8 -21.8 13.6 -15.2Z'
/** The band and the plait of the straw, cut in ink. */
const STRAW_CUTS =
  gouge(-12.6, -16.8, 13.8, -17.8, 0.9, -0.2) +
  gouge(-10, -21.4, 11, -22.2, 0.55, -0.6) +
  'M-24 -10.8l0.8 -2.4M-17 -12.4l0.6 -2.4M17 -13.4l0.4 2.4M24 -12.6l0.6 2.4'

/**
 * A wreath of sedge round the nymph's head, cut in ink in the head's frame: a
 * band arched over the crown from the brow to the back of the head, with
 * long narrow leaves lying back along it, some above the crown and some
 * below, as a wreath is seen from the side. (Leaves standing up from the
 * band, cut first, read as a crown of points, or as a feathered headdress.)
 */
const WREATH_ENDS: [Pt, Pt, Pt] = [
  [15, -11.2],
  [-1.6, -22.4],
  [-17.4, -10.6],
]
const onWreath = (t: number): Pt => {
  const [a, c, b] = WREATH_ENDS
  const u = 1 - t
  return [
    u * u * a[0] + 2 * t * u * c[0] + t * t * b[0],
    u * u * a[1] + 2 * t * u * c[1] + t * t * b[1],
  ]
}
const WREATH =
  `M${WREATH_ENDS[0][0]} ${WREATH_ENDS[0][1]}Q${WREATH_ENDS[1][0]} ${WREATH_ENDS[1][1]} ${WREATH_ENDS[2][0]} ${WREATH_ENDS[2][1]}` +
  `L-17.6 -7.4Q-1.6 -18.2 15 -7.8Z` +
  [0.06, 0.2, 0.34, 0.48, 0.62, 0.76, 0.9]
    .map((t, i) => {
      const [x, y] = onWreath(t)
      const up = i % 2 === 0
      return gouge(x + 1, y + (up ? -0.6 : 1.4), x - 11, y + (up ? -4.4 : 3.8), 2, up ? -0.8 : 0.8)
    })
    .join('')
/** A spirit's face, cut in ink on the paper head: the brow, the eye, the line of the mouth. */
const FACE =
  gouge(6.4, -8.6, 14.6, -7.8, 0.8, -0.4) +
  'M7.4 -4.2Q10.2 -6.6 13 -4Q10.2 -1.6 7.4 -4.2Z' +
  gouge(10.8, 10.6, 15, 9.8, 0.55)

/** A band of even width along a polyline, as a filled shape: a limb that can clip and be outlined. */
function band(pts: P[], w: number): string {
  const left: P[] = []
  const right: P[] = []
  for (let i = 0; i < pts.length; i++) {
    const a = pts[Math.max(0, i - 1)]
    const b = pts[Math.min(pts.length - 1, i + 1)]
    const L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1
    const v: P = [-(b[1] - a[1]) / L, (b[0] - a[0]) / L]
    left.push([pts[i][0] + (v[0] * w) / 2, pts[i][1] + (v[1] * w) / 2])
    right.push([pts[i][0] - (v[0] * w) / 2, pts[i][1] - (v[1] * w) / 2])
  }
  return 'M' + [...left, ...right.reverse()].map(([x, y]) => `${n(x)} ${n(y)}`).join('L') + 'Z'
}

const angleOf = (pts: P[]) => {
  const a = pts[pts.length - 2]
  const b = pts[pts.length - 1]
  return (Math.atan2(b[1] - a[1], b[0] - a[0]) * 180) / Math.PI
}

/** The reaper's dancing legs: the far foot planted, the near foot lifted in a step. */
const STEP: { far: P[]; near: P[] } = {
  far: [
    [-4, -76],
    [-7, -40],
    [-10, -4],
  ],
  near: [
    [4, -76],
    [20, -50],
    [17, -18],
  ],
}
const SMOCK = doublet([0, -138], [0, -76], 1, { width: 30, hem: 14, flare: 8 })
/** The smock above the belt, for a reaper fading from the feet up. */
const SMOCK_TOP = doublet([0, -138], [0, -84], 1, { width: 30, hem: 4, flare: 1 })
/** The reaper's legs, as outlines for the veil. */
const LEGS = band(STEP.far, 8.4) + band(STEP.near, 8.4)
const NYMPH_GOWN = gown([0, -132], [0, -94], 0, 1, {
  shoulder: 24,
  waistW: 16,
  front: 26,
  back: 34,
})
/** The nymph's bodice alone, for a spirit fading from the hem up. */
const BODICE = 'M-7 -136Q-12 -136 -12 -128L-9 -94L10 -94L12 -128Q12 -136 7 -136Z'

/**
 * A spirit seen through: its outline (dashed when `broken`) and rows of fine
 * upright cuts inside it, the ground showing between them, as the kit cuts
 * Ariel unseen. `shapes` are filled outlines in the spirit's frame.
 */
function Veil({
  clip,
  shapes,
  broken = false,
  top = -200,
  bottom = 0,
}: {
  clip: string
  shapes: ReactNode
  broken?: boolean
  top?: number
  bottom?: number
}) {
  let hatch = ''
  for (let x = -60; x < 60; x += 3) hatch += `M${x} ${top}V${bottom}`
  return (
    <>
      <defs>
        <clipPath id={clip}>{shapes}</clipPath>
      </defs>
      <g clipPath={`url(#${clip})`}>
        <path d={hatch} stroke={INK} strokeWidth={0.85} />
      </g>
      <g
        fill="none"
        stroke={INK}
        strokeWidth={broken ? 1.6 : LINE.bold}
        strokeLinejoin="round"
        strokeDasharray={broken ? '6 5' : undefined}
      >
        {shapes}
      </g>
    </>
  )
}

function MasqueSpirit({ s, uid, k }: { s: Spirit; uid: string; k: number }) {
  const reaper = s.kind === 'reaper'
  const headAt: P = reaper ? [3, -160] : [3, -154]
  const headT = `translate(${headAt[0]} ${headAt[1]})`
  const transform = `translate(${n(s.at[0])} ${n(s.at[1])}) scale(${n(s.scale)})`
  const armW = reaper ? 8.2 : 7.4
  const hs = reaper ? 1 : 0.85
  const clip = `${uid}-spirit-${k}`

  if (s.going === 2) {
    // Seen through: an outline, and fine cuts with the sky between them.
    const arms = [s.back, s.on].filter((a): a is P[] => !!a)
    const shapes = (
      <>
        <path d={reaper ? HEAD_MAN + STRAW_HAT : JULIET_HAIR + HEAD_GIRL} transform={headT} />
        <path d={reaper ? SMOCK + LEGS : NYMPH_GOWN} />
        {arms.map((a) => (
          <path key={a.join()} d={band(a, armW) + mitt(a[a.length - 1], angleOf(a), hs).d} />
        ))}
      </>
    )
    return (
      <g transform={transform}>
        <Veil clip={clip} shapes={shapes} />
        {!reaper && <path d={WREATH} transform={headT} fill={INK} />}
      </g>
    )
  }

  const parts: Part[] = []
  let cuts = ''
  // The arm reaching back, behind the body.
  if (s.back) {
    parts.push({ d: limb(s.back), w: armW })
    parts.push(mitt(s.back[s.back.length - 1], angleOf(s.back), hs))
  }
  if (reaper) {
    if (s.going === 0) {
      parts.push({ d: limb(STEP.far), w: 8.4 }, bareFoot([-10, 0], 1))
      parts.push({ d: limb(STEP.near), w: 8.4 }, bareFoot([17, -15], 1))
    }
    parts.push({ d: s.going === 0 ? SMOCK : SMOCK_TOP })
    // the belt, and the smock's folds
    cuts += gouge(-12, -82, 13, -83, 1.4)
    if (s.going === 0)
      cuts += gouge(-6, -76, -12, -64, 1.4, 0.6) + gouge(6, -76, 10, -64, 1.4, -0.6)
    parts.push({ d: HEAD_MAN, t: headT }, { d: STRAW_HAT, t: headT })
  } else {
    parts.push({ d: s.going === 0 ? NYMPH_GOWN : BODICE })
    cuts += gouge(-8, -95, 8.4, -94, 1, 0.8)
    if (s.going === 0) cuts += gouge(-6, -84, -20, -8, 1.8, 1) + gouge(8, -84, 18, -8, 1.8, -1)
    parts.push({ d: JULIET_HAIR, t: headT }, { d: HEAD_GIRL, t: headT })
  }
  // The arm reaching on, in front of the body.
  if (s.on) {
    parts.push({ d: limb(s.on), w: armW, sep: 1.2 })
    parts.push({ ...mitt(s.on[s.on.length - 1], angleOf(s.on), hs), sep: 1.2 })
  }
  return (
    <g transform={transform}>
      {/* fading from the hem, or the feet, up: what is below is seen through */}
      {s.going === 1 && (
        <Veil
          clip={clip}
          shapes={<path d={reaper ? SMOCK + LEGS : NYMPH_GOWN} />}
          top={reaper ? -84 : -96}
          bottom={2}
          broken
        />
      )}
      <CutFigure parts={parts} cuts={cuts || undefined} tone="paper" halo={2.4}>
        <g transform={headT}>
          <path d={FACE} fill={INK} />
          <path d={reaper ? STRAW_CUTS : JULIET_STRANDS + WREATH} fill={INK} />
        </g>
      </CutFigure>
    </g>
  )
}

/**
 * The three dancers, nymph and reaper by turns, hand in hand, going from
 * whole to seen through. Each hand reaching on meets the hand reaching back of
 * the dancer ahead, so the line holds, until the last reaches on into the air.
 * A veiled arm starts at the edge of the body, not inside it, or its outline
 * crosses the chest.
 */
const SPIRITS: Spirit[] = [
  {
    kind: 'nymph',
    at: [556, DANCE],
    scale: 0.9,
    going: 0,
    back: [
      [-4, -126],
      [-14, -108],
      [-19, -92],
    ],
    on: [
      [4, -126],
      [22, -118],
      [38, -113],
    ],
  },
  {
    kind: 'reaper',
    at: [638, DANCE],
    scale: 1,
    going: 1,
    back: [
      [-5, -130],
      [-18, -116],
      [-32, -104],
    ],
    on: [
      [5, -130],
      [22, -116],
      [36, -108],
    ],
  },
  {
    kind: 'nymph',
    at: [718, DANCE],
    scale: 0.9,
    going: 2,
    back: [
      [-11, -126],
      [-26, -122],
      [-40, -118],
    ],
    on: [
      [11, -126],
      [26, -118],
      [38, -114],
    ],
  },
]

const PROSPERO: P = [424, GROUND]
const MIRANDA: P = [306, GROUND]
const FERDINAND: P = [236, GROUND]

function TheMasqueBrokenOff({ uid }: ArtProps) {
  const m = marks()
  const seaClip = `${uid}-sea`
  const bowArc = (r: number, a0: number, a1: number) => arc(BOW.cx, BOW.cy, r, rad(a0), rad(a1))
  // The bow, each band one stroke: whole up to where it breaks, then in arcs.
  const whole = (r: number) => bowArc(r, BOW.foot, BOW.break)
  const shard = (r: number) => m.shards.map(({ a0, a1 }) => bowArc(r, a0, a1)).join('')
  const bands = (at: (r: number) => string) => (
    <>
      <path
        d={at((BOW.out + BOW.inner) / 2)}
        stroke={PAPER}
        strokeWidth={BOW.out - BOW.inner + 4}
      />
      <path d={at(BOW.out)} stroke={INK} strokeWidth={LINE.bold} />
      <path d={at(BOW.red)} stroke={RED} strokeWidth={10} />
      <path d={at(BOW.mid + 6)} stroke={INK} strokeWidth={1.4} />
      <path d={at(BOW.mid)} stroke={INK} strokeWidth={1.4} />
      <path d={at(BOW.inner)} stroke={INK} strokeWidth={LINE.bold} />
    </>
  )
  return (
    <>
      <defs>
        <clipPath id={seaClip}>
          <rect x={0} y={HORIZON} width={W} height={70} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [470, 210], push: 1.03 })}>
        <rect x={0} y={0} width={W} height={H} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        <g clipPath={`url(#${seaClip})`}>
          <path d={m.sea} fill={INK} />
        </g>
        <path d={`M0 ${HORIZON}H${W}`} stroke={INK} strokeWidth={LINE.fine} />

        {/* Iris's bow over the dance, breaking up on the right */}
        <g fill="none" strokeLinecap="butt">
          {bands(whole)}
          <g className="lc-fade-in" style={timing({ delay: 0.6, dur: 1.4 })}>
            {bands(shard)}
          </g>
        </g>

        {/* the ground before the cell */}
        <path d={m.land} fill={PAPER} />
        <path d={m.land} fill="none" stroke={INK} strokeWidth={LINE.bold} />
        <path d={m.ground} fill={INK} />
        <path d={m.tufts} stroke={INK} strokeWidth={1.3} strokeLinecap="round" />
        <LimeTree at={[30, 300]} scale={0.8} />
        <Cell at={[96, 300]} scale={0.8} />

        {/* the dancers, hand in hand, melting into air */}
        {SPIRITS.map((s, k) => ({ s, k }))
          .reverse()
          .map(({ s, k }) => (
            <MasqueSpirit key={k} s={s} uid={uid} k={k} />
          ))}

        {/* Ferdinand and Miranda, looking at him */}
        <Person
          at={FERDINAND}
          scale={1.12}
          pose={{
            look: 'ferdinand',
            head: { rot: -2 },
            sword: true,
            cloak: 2,
            far: {
              pts: [
                [-4, -128],
                [-6, -100],
                [-2, -76],
              ],
            },
            near: {
              pts: [
                [5, -128],
                [18, -110],
                [30, -116],
              ],
              hand: 'open',
              deg: -46,
              thumb: -1,
            },
          }}
        />
        <Person
          at={MIRANDA}
          scale={1.12}
          pose={{
            look: 'miranda',
            head: { rot: -4 },
            far: {
              pts: [
                [-3, -124],
                [6, -104],
                [13, -113],
              ],
              hand: 'mitt',
              deg: -70,
            },
            near: {
              pts: [
                [3, -124],
                [12, -103],
                [15, -112],
              ],
              hand: 'mitt',
              deg: -80,
            },
          }}
        />

        {/* Prospero, started up: "avoid; no more!" */}
        <Person
          at={PROSPERO}
          scale={1.2}
          pose={{
            look: 'prospero',
            head: { rot: -4 },
            frown: true,
            far: {
              pts: [
                [-4, -130],
                [22, -122],
                [52, -114],
              ],
              hand: 'open',
              deg: 6,
              spread: 22,
              thumb: -1,
            },
            near: STAFF_HELD.near,
            staff: STAFF_HELD.staff,
          }}
        />
      </g>
    </>
  )
}

export const theMasqueBrokenOff: LinocutArt = {
  width: W,
  height: H,
  Draw: TheMasqueBrokenOff,
}
