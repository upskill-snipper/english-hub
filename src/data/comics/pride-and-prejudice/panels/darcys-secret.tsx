import type { ArtProps, ComicPanel, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { bark, boughs, dapples, foliage, gravel, leafCuts, trunk, type Tree } from './copse'
import { Cut, Person, mitt, seatedBody, seatedLegs, type P, type Pose } from './people'

/**
 * Chapters 51 and 52: "Darcy’s secret", the eleventh moment in the guide's
 * timeline. Drawn where the secret comes out in full: Elizabeth alone in the
 * little copse with her aunt's letter. Every detail is from the held text
 * (src/data/full-texts/pride-and-prejudice.ts):
 *
 * - "She was no sooner in possession of it, than hurrying into the little
 *   copse, where she was least likely to be interrupted, she sat down on one
 *   of the benches, and prepared to be happy; for the length of the letter
 *   convinced her that it did not contain a denial." So she sits alone on a
 *   garden bench under the trees, and the letter is long: two sheets fanned
 *   in her hands and a third lying open on her lap.
 * - "She read over her aunt's commendation of him again and again." So her
 *   head is bowed over the sheets, her eyes cast down on them (the kit's
 *   `eye: 'down'`).
 * - "For herself she was humbled; but she was proud of him." "The contents of
 *   this letter threw Elizabeth into a flutter of spirits, in which it was
 *   difficult to determine whether pleasure or pain bore the greatest share."
 *   The chapter gives her feelings and no colour, so her face is the kit's,
 *   printed in ink, with nothing on it in red. (Cut first with a flush on her
 *   cheek for the "flutter of spirits". The kit gives a flush only where the
 *   text gives one, which is why the first panel's Mrs Bennet lost hers, and
 *   Chapter 52 never colours Elizabeth, so the flush was taken off in review
 *   on 10 October 2026.)
 * - The copse is "on one side of your lawn" (Chapter 56), so to the left,
 *   between the trunks, the lawn runs back in the sun to the house. Longbourn
 *   is not described; it is drawn as a plain square house of the time.
 *
 * Lydia's slip at the breakfast-room table (Chapter 51) is the first half of
 * the moment and is not drawn: the guide's summary tells it, and the panel
 * shows what it led to. Nobody else is in the copse; Wickham comes upon her
 * only after she has read it. Nothing in the print is red: the text names no
 * colour here, and the letter carries no seal, because a red speck at a hand
 * reads as blood.
 * Elizabeth is the kit's (./people.tsx): slight, her dark hair dressed up to
 * a knot, bareheaded in her own grounds, in a pale gown with its high waist.
 * The shade of the copse behind her is cut lightest round her head, so her
 * dark hair and her pale gown both stand off it.
 *
 * Seeds: 5201 (the sky), 5202 (the leaves), 5203 (the bark), 5204 (the lawn
 * and the gravel), 5205 (the wood beyond), 5206 (the patches of sun), 5207
 * (the trees behind the house), 5208 (the writing on the letter), 5209 (the
 * shade of the copse).
 */

const W = 860
const H = 340
/** The far edge of the lawn, where it meets the trees behind the house. */
const HORIZON = 206
/** The ground under the bench, where her feet are. */
const FLOOR = 312
/** Where the copse begins: left of this, the view out on to the lawn. */
const EDGE = 262

const TREES: Tree[] = [
  // foreground left, thick, a bough reaching over towards the lawn
  {
    spine: [
      [40, H + 4],
      [44, 250],
      [38, 160],
      [46, 70],
      [54, -4],
    ],
    w: [50, 42, 38, 34, 32],
    side: 1,
    boughs: [
      [
        [50, 98],
        [98, 74],
        [156, 62],
        [214, 46],
      ],
    ],
  },
  // at the edge of the copse, where the lawn begins
  {
    spine: [
      [EDGE, 300],
      [EDGE - 4, 210],
      [EDGE + 2, 120],
      [EDGE + 10, 30],
    ],
    w: [24, 20, 17, 14],
    side: -1,
    boughs: [
      [
        [EDGE + 6, 76],
        [EDGE - 26, 52],
        [EDGE - 60, 40],
      ],
    ],
  },
  // the copse beyond the bench
  {
    spine: [
      [628, 300],
      [624, 200],
      [630, 120],
      [622, 40],
    ],
    w: [28, 24, 21, 18],
    side: -1,
  },
  {
    spine: [
      [744, 306],
      [750, 210],
      [744, 120],
      [752, 30],
    ],
    w: [36, 31, 27, 24],
    side: -1,
  },
  // foreground right, thick, half out of the picture
  {
    spine: [
      [848, H + 4],
      [844, 250],
      [852, 140],
      [846, 40],
    ],
    w: [56, 48, 44, 40],
    side: -1,
  },
]

/** The canopy: rounds of foliage over the top of the picture, lifting over the lawn. */
const CANOPY: [number, number, number][] = [
  [8, 30, 48],
  [58, 2, 50],
  [112, 30, 32],
  [166, -2, 38],
  [226, 6, 30],
  [282, 16, 40],
  [340, -8, 40],
  [410, -20, 40],
  [398, 14, 30],
  [452, 18, 28],
  [360, 22, 24],
  [478, -8, 42],
  [540, 22, 44],
  [598, 46, 46],
  [652, 22, 50],
  [712, 58, 54],
  [772, 26, 56],
  [830, 70, 54],
  [870, 20, 48],
  [640, 106, 34],
  [790, 126, 40],
  [300, 56, 26],
]

/** The wood beyond the bench, on the right: low rounds of dark leaves. */
const UNDERWOOD: [number, number, number][] = [
  [520, 196, 34],
  [580, 172, 40],
  [650, 190, 42],
  [716, 168, 44],
  [786, 186, 46],
  [860, 170, 44],
]

// ── ELIZABETH, reading ──────────────────────────────────────────────────────
// The kit's Elizabeth, seated in profile facing right on a seat 44 high, her
// head bowed over the sheets. In the figure's own frame: feet at 0, a man
// about 182 tall.

const EL_AT: P = [404, FLOOR]
const EL_SCALE = 1.6
const SEAT = 44
const EL_POSE: Pose = {
  look: 'elizabeth',
  body: seatedBody(SEAT, 6, true),
  head: { at: [9.5, -116], rot: 18 },
  legs: seatedLegs(SEAT, 34),
  seated: true,
  eye: 'down',
  // no flush: Chapter 52 gives her none (see the docblock)
  // the far hand holds the sheets from behind; the near hand pinches their foot
  far: {
    pts: [
      [4, -90],
      [16, -66],
      [42, -88],
    ],
    hand: 'none',
  },
  near: {
    pts: [
      [10, -88],
      [24, -64],
      [46, -74],
    ],
    hand: 'none',
  },
}
/** The letter, in the figure's frame: two sheets fanned in her hands, one on her lap. */
const SHEET_BACK: P[] = [
  [36, -118],
  [62, -126],
  [72, -88],
  [44, -80],
]
const SHEET_FRONT: P[] = [
  [40, -112],
  [68, -118],
  [76, -78],
  [48, -72],
]
const SHEET_LAP: P[] = [
  [12, -58],
  [40, -60],
  [50, -48],
  [20, -46],
]
const quad = (q: P[]) => 'M' + q.map(([x, y]) => `${x} ${y}`).join('L') + 'Z'
/**
 * Her near hand, in front of the sheets: the kit's hand at rest, its fingers
 * closed together over the sheets' lower corner, holding them. (An open hand
 * drawn there read at panel size as a hand waving, and a thumb laid over the
 * paper as a pen.)
 */
const HOLD = [mitt([45, -75], -58, 0.86)]

type Marks = {
  clouds: string
  shade: string
  canopy: string
  leaves: string
  trunks: string[]
  boughs: string
  bark: string
  lawn: string
  under: string
  underCuts: string
  gravel: string
  dapples: string
  houseTrees: string
  stone: string
  writing: string
}

/** Lines of writing across a sheet given by its four corners, as fine ink strokes. */
function writing(r: () => number, c: P[], rows: number): string {
  const [a, b, cc, d] = c
  let s = ''
  for (let i = 1; i <= rows; i++) {
    const t = i / (rows + 1)
    const x0 = a[0] + (d[0] - a[0]) * t
    const y0 = a[1] + (d[1] - a[1]) * t
    const x1 = b[0] + (cc[0] - b[0]) * t
    const y1 = b[1] + (cc[1] - b[1]) * t
    let u = 0.12 + r() * 0.06
    while (u < 0.86) {
      const v = Math.min(0.88, u + 0.12 + r() * 0.3)
      s += `M${(x0 + (x1 - x0) * u).toFixed(1)} ${(y0 + (y1 - y0) * u).toFixed(1)}L${(x0 + (x1 - x0) * v).toFixed(1)} ${(y0 + (y1 - y0) * v).toFixed(1)}`
      u = v + 0.04 + r() * 0.06
    }
  }
  return s
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The sky over the lawn: a few long cuts of cloud, ink on the paper.
  const c = rng(5201)
  let clouds = ''
  for (let k = 0; k < 6; k++) {
    const x = between(c, 80, 200)
    const y = between(c, 60, 120)
    clouds += gouge(x, y, x + between(c, 30, 70), y + between(c, -1, 1), between(c, 0.5, 1))
  }
  // The shade of the copse: the thin trunks of the wood in the distance, cut
  // as pale strokes, and the leaves between them cut thickest round her head
  // and shoulders, so she stands off the dark.
  const sh = rng(5209)
  const head: P = [EL_AT[0] + 9.5 * EL_SCALE * 0.9, EL_AT[1] - 116 * EL_SCALE * 0.9]
  let shade = ''
  for (let k = 0; k < 26; k++) {
    const x = between(sh, EDGE + 14, W - 20)
    if (Math.abs(x - head[0]) < 46) continue
    const top = between(sh, 50, 130)
    const wd = between(sh, 0.8, 2.4) * (1 - (x - EDGE) / 1400)
    shade += gouge(x, 268, x + between(sh, -4, 4), top, wd, between(sh, -1.5, 1.5))
  }
  const glowBlobs: [number, number, number][] = []
  for (let k = 0; k < 22; k++)
    glowBlobs.push([between(sh, EDGE + 20, W - 30), between(sh, 60, 230), between(sh, 26, 46)])
  shade += leafCuts(
    sh,
    glowBlobs,
    (x, y) =>
      Math.max(
        clamp(1 - Math.hypot((x - head[0]) * 0.85, (y - head[1]) * 1.1) / 130) * 0.95,
        clamp(1 - (x - EDGE) / 140) * 0.5,
        0.05,
      ),
    { x0: EDGE, x1: W - 6, y0: 34, y1: 262 },
    0.014,
  )
  // The leaves: brightest where the sun comes through over the lawn.
  const light = (x: number, y: number) =>
    clamp(0.12 + clamp(1 - Math.hypot(x - 200, y - 40) / 300) * 0.8 - (y > 110 ? 0.12 : 0))
  const frame = { x0: 4, x1: W - 4, y0: 4, y1: H - 4 }
  const leaves = leafCuts(rng(5202), CANOPY, light, frame, 0.012)
  const rb = rng(5203)
  const trunks = TREES.map((t) => trunk(t.spine, t.w))
  let barkCuts = ''
  for (const t of TREES) barkCuts += bark(rb, t, Math.round(t.w[0] / 5) + 4)
  // The lawn in the sun: short fine strokes of grass, more towards us.
  const g = rng(5204)
  let lawn = ''
  for (let y = HORIZON + 6; y < 292; y += 6) {
    let x = between(g, -10, 0)
    while (x < EDGE + 30) {
      const len = between(g, 3, 8)
      if (g() < 0.4)
        lawn += gouge(x, y, x + len, y - between(g, 0.5, 2.5), 0.35 + (y - HORIZON) * 0.012)
      x += len + between(g, 14, 34)
    }
  }
  // The gravel walk: from the lawn on the left, past the bench, on into the copse.
  const mid = (x: number) => 324 - (x / W) * 26
  const half = (x: number) => 9 + (1 - x / W) * 9
  const onWalk = (x: number, y: number) => Math.abs(y - mid(x)) < half(x)
  const grav = gravel(g, { x0: 0, x1: W, y0: 296, y1: H }, onWalk, 300)
  // The wood beyond, cut with a little light at its edge.
  const u = rng(5205)
  const underCuts = leafCuts(
    u,
    UNDERWOOD,
    (x, y) => clamp(0.3 - (x - 500) / 900 - (y - 150) / 500),
    frame,
    0.01,
  )
  // Patches of sun on the shaded floor of the copse, off the walk.
  const dp = dapples(
    rng(5206),
    { x0: EDGE, x1: W, y0: 268, y1: H - 6 },
    (x, y) => Math.abs(y - mid(x)) > half(x) + 4 && !(x > 360 && x < 500 && y < 318),
    36,
  )
  // Trees behind the house, beyond the lawn, cut with faint light.
  const houseTrees = gougeField(rng(5207), { x0: 80, x1: 250, y0: 128, y1: HORIZON }, () => 0.3, {
    spacing: 6,
    len: [6, 16],
    gap: [6, 16],
    max: 1.4,
  })
  let stone = ''
  for (let y = 150; y < HORIZON - 2; y += 6.5) stone += `M126 ${y}H210`
  const wr = rng(5208)
  const writ = writing(wr, SHEET_FRONT, 9) + writing(wr, SHEET_LAP, 3)
  cached = {
    clouds,
    shade,
    canopy: foliage(CANOPY),
    leaves,
    trunks,
    boughs: TREES.map((t) => boughs(t, t.w[t.w.length - 1] * 0.7)).join(''),
    bark: barkCuts,
    lawn,
    under: foliage(UNDERWOOD),
    underCuts,
    gravel: grav,
    dapples: dp,
    houseTrees,
    stone,
    writing: writ,
  }
  return cached
}

/**
 * The garden bench, seen from a little in front of its end: the near end
 * beside her, the far end up and to the left behind her, the seat and two
 * back rails running between them. In the picture's frame.
 */
const BENCH_FAR = 'M310 182H317L319 228H382V235H376V292H369V235H321L317 292H310Z'
const BENCH_RAILS =
  'M310 182L374 200L374 206L310 188ZM312 206L376 226L376 231L312 211Z' +
  'M317 228L382 228L446 250L381 250Z'
const BENCH_NEAR = 'M374 200H381L383 250H446V257H440V316H433V257H387V316H380L378 257H374Z'
/** The joints of the seat's planks, and the edges of the end rails. */
const BENCH_CUTS =
  gouge(386, 253, 436, 253, 0.7) +
  gouge(377, 208, 379, 246, 0.6) +
  gouge(334, 231, 404, 246, 0.5) +
  gouge(352, 229, 424, 248, 0.45)

function DarcysSecret({ uid }: ArtProps) {
  void uid
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [420, 190], push: 1.03 })}>
      {/* the sky over the lawn */}
      <rect x={0} y={0} width={W} height={HORIZON} fill={PAPER} />
      <path d={m.clouds} fill={INK} />
      {/* the trees behind the house, beyond the lawn */}
      <path
        d="M70 206V160Q80 140 98 146Q112 126 134 136Q156 120 178 132Q202 122 222 138Q240 134 256 150V206Z"
        fill={INK}
      />
      <path d={m.houseTrees} fill={PAPER} />
      {/* the house across the lawn: a plain square house, its front in the sun */}
      <path d="M120 206V146H216V206Z" fill={PAPER} stroke={INK} strokeWidth={LINE.bold} />
      <path d={m.stone} stroke={INK} strokeWidth={0.6} />
      <path d="M114 148L168 124L222 148Z" fill={INK} />
      <path d="M136 132V116H145V128M190 132V116H199V128" fill={INK} />
      {/* five bays: five windows above, four below and the door in the middle */}
      <g fill={INK}>
        {[129.6, 148.8, 168, 187.2, 206.4].map((x) => (
          <rect key={`u${x}`} x={x - 4.5} y={155} width={9} height={14} />
        ))}
        {[129.6, 148.8, 187.2, 206.4].map((x) => (
          <rect key={`d${x}`} x={x - 4.5} y={180} width={9} height={15} />
        ))}
        <rect x={162.5} y={186} width={11} height={20} />
      </g>
      {/* the lawn, in the sun */}
      <rect x={0} y={HORIZON} width={W} height={H - HORIZON} fill={PAPER} />
      <path d={`M0 ${HORIZON}H${EDGE}`} stroke={INK} strokeWidth={1.2} />
      <path d={m.lawn} fill={INK} />

      {/* the shade of the copse, cut lightest round her */}
      <path d={`M${EDGE} 30H${W}V270Q600 262 ${EDGE} 276Z`} fill={INK} />
      <path d={m.shade} fill={PAPER} />
      {/* the wood beyond the bench */}
      <path d={m.under} fill={INK} />
      <path d={m.underCuts} fill={PAPER} />

      {/* the copse floor in shade, its patches of sun, and the gravel walk */}
      <path d={`M${EDGE - 10} 280Q600 262 ${W} 268V${H}H${EDGE - 10}Z`} fill={INK} />
      <path d={m.dapples} fill={PAPER} />
      <path
        d={`M0 ${324 - 18}Q300 ${315 - 15} 560 ${307 - 12}T${W} ${298 - 9}V${298 + 9}Q600 ${308 + 12} 300 ${317 + 15}T0 ${324 + 18}Z`}
        fill={PAPER}
      />
      <path d={m.gravel} fill={INK} />
      {/* the bench's shadow on the gravel */}
      <ellipse cx={410} cy={318} rx={58} ry={5} fill={INK} />

      {/* the trunks and their boughs */}
      <path d={m.boughs} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      {m.trunks.map((d, i) => (
        <path key={i} d={d} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      ))}
      <path d={m.bark} fill={PAPER} />

      {/* the canopy */}
      <path d={m.canopy} fill={INK} />
      <path d={m.leaves} fill={PAPER} />

      {/* the bench, behind her as she sits on it */}
      <path
        d={BENCH_FAR + BENCH_RAILS + BENCH_NEAR}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={BENCH_CUTS} fill={PAPER} />
      <Person pose={EL_POSE} at={EL_AT} scale={EL_SCALE}>
        {/* the letter: two sheets in her hands, one on her lap */}
        <g stroke={INK} strokeWidth={1} strokeLinejoin="round" fill={PAPER}>
          <path d={quad(SHEET_LAP)} />
          <path d={quad(SHEET_BACK)} />
          <path d={quad(SHEET_FRONT)} />
        </g>
        <path d={m.writing} stroke={INK} strokeWidth={0.6} fill="none" />
        {/* her near hand, its thumb over the paper */}
        <Cut parts={HOLD} halo={1.1} />
      </Person>
    </g>
  )
}

export const darcysSecretArt: LinocutArt = { width: W, height: H, Draw: DarcysSecret }

export const darcysSecret: ComicPanel = {
  moment: 'Darcy’s secret',
  art: darcysSecretArt,
  alt: 'A linocut print of the little copse at Longbourn on a sunny day. On the left, between the trunks of the trees, a sunlit lawn runs back to a plain square house of two storeys. In the middle, under the dark canopy of leaves, Elizabeth sits alone on a wooden garden bench in a pale gown, her dark hair dressed up in a knot. Her head is bowed over a long letter: she holds two sheets up before her and a third lies open on her lap. Behind her the shade of the copse is cut with the pale strokes of distant trunks, and a gravel walk runs along the ground in front of the bench. Nothing in the print is red.',
  quote: 'For herself she was humbled; but she was proud of him.',
  quoteAt: 'top-right',
}
