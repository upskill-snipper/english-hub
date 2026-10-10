import type { ArtProps, ComicPanel, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { bark, boughs, dapples, foliage, gravel, leafCuts, trunk, type Tree } from './copse'
import { Cut, Person, type P, type Pose } from './people'

/**
 * Chapter 56: "Lady Catherine’s visit", the twelfth moment in the guide's
 * timeline. Every detail is from the held text
 * (src/data/full-texts/pride-and-prejudice.ts):
 *
 * - "they perceived a chaise and four driving up the lawn"; "Her carriage
 *   remained at the door, and Elizabeth saw that her waiting-woman was in
 *   it." So across the lawn a closed travelling chaise stands at the door of
 *   the house with its four horses in pairs, and a woman's head shows at its
 *   window. "The horses were post", so two postboys sit the near horses.
 * - "there seemed to be a prettyish kind of a little wilderness on one side
 *   of your lawn"; "Elizabeth obeyed, and running into her own room for her
 *   parasol, attended her noble guest down stairs"; "They proceeded in
 *   silence along the gravel walk that led to the copse". So they stand in
 *   the copse at the end of the gravel walk, and Elizabeth has her parasol,
 *   furled in the shade of the trees, its point on the ground.
 * - "As soon as they entered the copse, Lady Catherine began in the following
 *   manner". So the two have just come in under the trees, on their feet at
 *   the end of the walk, and the panel is the start of what she says there.
 *   Her second speech opens "'Miss Bennet,' replied her ladyship, in an angry
 *   tone, 'you ought to know, that I am not to be trifled with.'", the words
 *   on the panel. So Lady Catherine, "a tall, large woman, with
 *   strongly-marked features" (Chapter 29; the kit's 'catherine'), has her
 *   head back and her lid lowered as her nephew's is in his pride, her mouth
 *   open as she speaks, and points at Elizabeth. The text gives her no
 *   gesture; the pointing is the print's way of showing an angry tone at
 *   panel size.
 * - Elizabeth's answer to that same speech is the first thing she says
 *   "colouring with astonishment and disdain". So Elizabeth, the shorter,
 *   stands upright with her chin raised, and the spot colour is that
 *   colouring: the kit's one patch on the cheek.
 * - "I am not to be intimidated into anything so wholly unreasonable." So
 *   Elizabeth does not step back: she stands square, her hand on her parasol.
 *
 * WHY NOT THE FAMOUS LINE (review, 10 October 2026). The panel first quoted
 * "Are the shades of Pemberley to be thus polluted?", the guide's own
 * quotation for the moment, and its notes put the two "on their feet by the
 * bench where they sat". But no bench is drawn, and that question is asked
 * while both are sitting: Elizabeth answers it, "And she rose as she spoke.
 * Lady Catherine rose also". Standing, the picture is the start of the
 * conversation, so it quotes the start, from the speech that makes Elizabeth
 * colour. The key-moments player still prints the guide's line under the
 * panel.
 *
 * Lady Catherine's dress is not described: she is a widow of rank, in the
 * kit's cap and kerchief under a bonnet, and a dark gown. She is printed in
 * ink against the bright lawn she has come across, Elizabeth pale against
 * the dark of the copse. The red is Elizabeth's flush and nothing else.
 *
 * Seeds: 5601 (the sky), 5602 (the leaves), 5603 (the bark), 5604 (the lawn
 * and the gravel), 5605 (the wood), 5606 (the patches of sun), 5607 (the
 * trees behind the house).
 */

const W = 860
const H = 340
/** The far edge of the lawn. */
const HORIZON = 226
/** Where the two women stand. */
const FEET = 320
/** Where the copse's shade begins, behind Elizabeth. */
const EDGE = 500

const TREES: Tree[] = [
  // foreground left, thick
  {
    spine: [
      [22, H + 4],
      [26, 250],
      [20, 150],
      [28, 60],
      [36, -4],
    ],
    w: [46, 40, 36, 32, 30],
    side: 1,
    boughs: [
      [
        [32, 84],
        [80, 60],
        [130, 50],
        [180, 38],
      ],
    ],
  },
  // at the edge of the lawn, thin
  {
    spine: [
      [352, 300],
      [348, 220],
      [354, 130],
      [362, 40],
    ],
    w: [16, 13, 11, 9],
    side: 1,
    boughs: [
      [
        [358, 80],
        [330, 56],
        [300, 44],
      ],
    ],
  },
  // the copse behind Elizabeth
  {
    spine: [
      [700, 300],
      [696, 200],
      [702, 120],
      [694, 40],
    ],
    w: [30, 26, 22, 19],
    side: -1,
  },
  {
    spine: [
      [780, 306],
      [786, 210],
      [780, 120],
      [788, 30],
    ],
    w: [34, 29, 26, 22],
    side: -1,
  },
  {
    spine: [
      [850, H + 4],
      [846, 250],
      [854, 140],
      [848, 40],
    ],
    w: [52, 46, 42, 38],
    side: -1,
  },
]

const CANOPY: [number, number, number][] = [
  [6, 26, 44],
  [54, -2, 46],
  [108, 26, 30],
  [160, -6, 36],
  [226, -12, 34],
  [300, 4, 34],
  [352, 30, 34],
  [410, -6, 40],
  [470, 18, 40],
  [530, -4, 44],
  [586, 34, 46],
  [640, 8, 48],
  [700, 52, 52],
  [760, 20, 54],
  [820, 66, 52],
  [868, 18, 46],
  [620, 92, 32],
  [730, 110, 36],
  [548, 70, 28],
]

/** The wood behind Elizabeth: low rounds of dark leaves above the shade. */
const UNDERWOOD: [number, number, number][] = [
  [520, 222, 22],
  [556, 206, 26],
  [600, 202, 24],
  [640, 196, 26],
  [680, 162, 30],
  [722, 128, 32],
  [770, 108, 38],
  [830, 100, 42],
  [866, 116, 40],
]

// ── LADY CATHERINE, pointing ────────────────────────────────────────────────
// The kit's Lady Catherine, facing right, her head back, her lid lowered,
// her mouth open as she speaks, her near arm out and pointing at Elizabeth.

const LC_AT: P = [430, FEET]
const LC_SCALE = 1.15
const LC_POSE: Pose = {
  look: 'catherine',
  head: { rot: -6 },
  eye: 'proud',
  brow: 'low',
  mouth: 'open',
  hat: true,
  far: {
    pts: [
      [-4, -126],
      [-10, -102],
      [-8, -80],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -126],
      [24, -110],
      [52, -114],
    ],
    hand: 'point',
    thumb: 1,
  },
}

// ── ELIZABETH, standing her ground ──────────────────────────────────────────
// The kit's Elizabeth, facing left (drawn facing right and flipped), upright,
// her chin raised, her hand on the furled parasol.

const EB_AT: P = [598, FEET]
const EB_SCALE = 1.15
const EB_POSE: Pose = {
  look: 'elizabeth',
  head: { rot: -5 },
  flush: true,
  far: {
    pts: [
      [-3, -126],
      [-7, -104],
      [-4, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [3, -126],
      [10, -104],
      [18, -86],
    ],
    hand: 'grip',
    deg: 80,
  },
}
/**
 * Her parasol, furled, in the figure's frame: the handle in her hand, the
 * stick down to its point on the ground in front of her, the closed silk
 * wrapped round its lower half, and its ferrule. Cut as the kit cuts a figure,
 * with a paper edge, so it shows against the dark of the copse.
 */
const PARASOL = [
  { d: 'M19 -88L33 -3', w: 2.6 },
  {
    d: 'M25.4 -50C29 -51.6 31.4 -46 32.4 -38L34.6 -12L32.4 -8L30.6 -12L24.6 -42C24 -46 24 -49 25.4 -50Z',
  },
  { d: 'M17.6 -90a2.6 2.6 0 1 0 5.2 0a2.6 2.6 0 1 0 -5.2 0Z' },
]
const PARASOL_FOLDS = gouge(27.4, -46, 31.6, -14, 0.5, 0.4) + gouge(29.6, -47, 33, -20, 0.45, 0.3)

/**
 * The gravel walk, as a polygon: its far end at the door of the house, its
 * near end under the two women's feet.
 */
const WALK: P[] = (() => {
  const pts: P[] = []
  const left = (t: number): P => [138 + 242 * t * t, HORIZON + 2 + 116 * t]
  const right = (t: number): P => [166 + 590 * t * t, HORIZON + 2 + 116 * t]
  for (let i = 0; i <= 12; i++) pts.push(left(i / 12))
  for (let i = 12; i >= 0; i--) pts.push(right(i / 12))
  return pts.map(([x, y]) => [Math.round(x * 10) / 10, Math.round(y * 10) / 10] as P)
})()
function inside(poly: P[], x: number, y: number): boolean {
  let hit = false
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i]
    const [xj, yj] = poly[j]
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) hit = !hit
  }
  return hit
}

type Marks = {
  clouds: string
  canopy: string
  leaves: string
  trunks: string[]
  boughs: string
  bark: string
  lawn: string
  wood: string
  under: string
  underCuts: string
  gravel: string
  dapples: string
  houseTrees: string
  stone: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // A clear morning sky: a few long cuts of cloud over the lawn.
  const c = rng(5601)
  let clouds = ''
  for (let k = 0; k < 8; k++) {
    const x = between(c, 60, 420)
    const y = between(c, 70, 130)
    clouds += gouge(x, y, x + between(c, 30, 80), y + between(c, -1, 1), between(c, 0.5, 1))
  }
  const frame = { x0: 4, x1: W - 4, y0: 4, y1: H - 4 }
  const light = (x: number, y: number) =>
    clamp(0.12 + clamp(1 - Math.hypot(x - 260, y - 40) / 320) * 0.8 - (y > 110 ? 0.12 : 0))
  const leaves = leafCuts(rng(5602), CANOPY, light, frame, 0.012)
  const rb = rng(5603)
  const trunks = TREES.map((t) => trunk(t.spine, t.w))
  let barkCuts = ''
  for (const t of TREES) barkCuts += bark(rb, t, Math.round(t.w[0] / 5) + 4)
  // The lawn in the sun: short fine strokes of grass.
  const g = rng(5604)
  let lawn = ''
  for (let y = HORIZON + 6; y < 300; y += 6) {
    let x = between(g, -10, 0)
    while (x < EDGE) {
      const len = between(g, 3, 8)
      if (g() < 0.38)
        lawn += gouge(x, y, x + len, y - between(g, 0.5, 2.5), 0.35 + (y - HORIZON) * 0.012)
      x += len + between(g, 14, 34)
    }
  }
  // The gravel walk that led to the copse: from the door of the house,
  // across the lawn, widening to where they stand.
  const onWalk = (x: number, y: number) => inside(WALK, x, y)
  const grav = gravel(g, { x0: 120, x1: W, y0: HORIZON, y1: H }, onWalk, 420)
  // The wood behind Elizabeth: its far trunks cut as pale strokes, its leaves
  // as short cuts, lit most round her head so it stands off the shade.
  const wd = rng(5605)
  const head: P = [EB_AT[0], EB_AT[1] - 158]
  const lit = (x: number, y: number) =>
    Math.max(
      clamp(1 - Math.hypot((x - head[0]) * 0.8, (y - head[1]) * 1.1) / 110) * 0.95,
      clamp(0.4 - (x - EDGE) / 300),
      0.05,
    )
  let wood = ''
  for (let k = 0; k < 22; k++) {
    const x = between(wd, EDGE + 10, W - 20)
    if (x < 690 && x > 470) continue
    const top = between(wd, 70, 140)
    wood += gouge(
      x,
      284,
      x + between(wd, -4, 4),
      top,
      between(wd, 0.8, 2.2),
      between(wd, -1.5, 1.5),
    )
  }
  const blobs: [number, number, number][] = []
  for (let k = 0; k < 20; k++)
    blobs.push([between(wd, EDGE + 10, W - 30), between(wd, 214, 290), between(wd, 20, 34)])
  wood += leafCuts(wd, blobs, lit, { x0: EDGE - 10, x1: W - 6, y0: 200, y1: 296 }, 0.016)
  const underCuts = leafCuts(wd, UNDERWOOD, (x) => clamp(0.45 - (x - EDGE) / 700), frame, 0.016)
  const dp = dapples(
    rng(5606),
    { x0: EDGE, x1: W, y0: 290, y1: H - 6 },
    (x, y) => !onWalk(x, y),
    20,
  )
  const houseTrees = gougeField(rng(5607), { x0: 20, x1: 262, y0: 90, y1: HORIZON }, () => 0.3, {
    spacing: 6,
    len: [6, 16],
    gap: [6, 16],
    max: 1.4,
  })
  let stone = ''
  for (let y = 124; y < HORIZON - 2; y += 7) stone += `M46 ${y}H242`
  cached = {
    clouds,
    canopy: foliage(CANOPY),
    leaves,
    trunks,
    boughs: TREES.map((t) => boughs(t, t.w[t.w.length - 1] * 0.7)).join(''),
    bark: barkCuts,
    lawn,
    wood,
    under: foliage(UNDERWOOD),
    underCuts,
    gravel: grav,
    dapples: dp,
    houseTrees,
    stone,
  }
  return cached
}

/**
 * One post horse in profile facing right, its hooves on the line at `y`, its
 * hind feet at `x`: rump, back, neck and head with its ear, four legs, a
 * tail. About 48 long and 46 high at `s` 1. Fill with INK.
 */
function horse(x: number, y: number, s = 1): string {
  const pts: [number, number][] = [
    [2, -30],
    [10, -35],
    [22, -35],
    [31, -36],
    [37, -45],
    [39, -50],
    [41, -46],
    [48, -38],
    [49, -35],
    [45, -34],
    [40, -36],
    [36, -28],
    [35, -21],
    [36, 0],
    [32.6, 0],
    [31.4, -18],
    [28.6, -18],
    [28.4, 0],
    [25, 0],
    [25, -20],
    [12, -20],
    [9.6, 0],
    [6.2, 0],
    [6.6, -18],
    [4.4, -19],
    [3, 0],
    [-0.4, 0],
    [0, -21],
    [-3, -16],
    [-5.4, -8],
    [-6.8, -9],
    [-5, -18],
    [-1, -27],
  ]
  return 'M' + pts.map(([a, b]) => `${n(x + a * s)} ${n(y + b * s)}`).join('L') + 'Z'
}

/**
 * A postboy astride the near horse of a pair: a short jacket, a round cap,
 * his leg down the horse's side. In the horse's frame (see `horse`). INK.
 */
function postboy(x: number, y: number, s = 1): string {
  const p = (a: number, b: number) => `${n(x + a * s)} ${n(y + b * s)}`
  return (
    `M${p(14, -34)}L${p(16, -52)}L${p(24, -52)}L${p(24, -34)}Z` +
    `M${p(17, -36)}L${p(19, -22)}L${p(23, -22)}L${p(22, -36)}Z` +
    `M${p(16, -57)}a${n(4.4 * s)} ${n(4.4 * s)} 0 1 0 ${n(8.8 * s)} 0a${n(4.4 * s)} ${n(4.4 * s)} 0 1 0 ${n(-8.8 * s)} 0Z` +
    `M${p(14.4, -59)}L${p(26, -59)}L${p(25, -62)}Q${p(20, -66)} ${p(15.4, -62)}Z`
  )
}

/**
 * The chaise and four at the door, facing right across the front of the
 * house: the closed body of a post-chaise slung between a high back wheel and
 * a smaller front one, the waiting-woman's bonneted head at its window, the
 * pole running forward to the four horses in two pairs, a postboy on each
 * near horse. The far horse of each pair shows only a little behind the near.
 */
function Chaise() {
  const S = 0.92
  // Drawn up just past the door, so the door shows beside it.
  return (
    <g transform="translate(26 0)">
      {/* the far horse of each pair, a step behind and above */}
      <path d={horse(205, 222, S) + horse(258, 222, S)} transform="translate(5 -4)" fill={INK} />
      {/* the chaise's body, its window and the waiting-woman, its wheels */}
      <path
        d="M138 206L134 182Q134 172 144 172H176Q186 172 190 182L192 196Q190 206 180 206Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.2}
      />
      <path d="M160 178H182L185 192H160Z" fill={PAPER} />
      <path d="M168 192V186Q168 180 174 180Q180 180 180 186V192Z" fill={INK} />
      <path d="M166 186Q168 177 175 176Q182 176 183 182L180 183Q176 179 170 184Z" fill={INK} />
      <path d={gouge(140, 180, 141, 200, 0.7)} fill={PAPER} />
      <g fill="none" stroke={INK} strokeWidth={2.2}>
        <circle cx={146} cy={213} r={11} />
        <circle cx={186} cy={215} r={8} />
      </g>
      <path
        d="M146 213L146 202M140 208L152 218M152 208L140 218M186 215L186 207M181 211L191 219M191 211L181 219"
        stroke={INK}
        strokeWidth={1.2}
      />
      <path d="M192 200L212 204" stroke={INK} strokeWidth={2} />
      {/* the near horse of each pair, and its postboy */}
      <path
        d={horse(200, 222, S) + horse(253, 222, S)}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1}
        strokeLinejoin="round"
      />
      <path
        d={postboy(200, 222, S) + postboy(253, 222, S)}
        fill={INK}
        stroke={PAPER}
        strokeWidth={0.9}
        strokeLinejoin="round"
      />
      {/* the traces from collar to collar */}
      <path d="M232 191L253 196M284 191" stroke={PAPER} strokeWidth={0.8} />
    </g>
  )
}

function LadyCatherinesVisit({ uid }: ArtProps) {
  void uid
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [520, 200], push: 1.03 })}>
      {/* the sky over the lawn */}
      <rect x={0} y={0} width={W} height={HORIZON} fill={PAPER} />
      <path d={m.clouds} fill={INK} />
      {/* the trees behind the house */}
      <path
        d="M20 226V120Q34 98 58 106Q78 84 106 96Q134 78 162 92Q192 82 216 100Q240 96 262 118V226Z"
        fill={INK}
      />
      <path d={m.houseTrees} fill={PAPER} />
      {/* the house: the same plain square house of five bays as in "Darcy’s secret", nearer */}
      <path d="M44 226V118H244V226Z" fill={PAPER} stroke={INK} strokeWidth={LINE.bold} />
      <path d={m.stone} stroke={INK} strokeWidth={0.6} />
      <path d="M34 120L144 84L254 120Z" fill={INK} />
      <path d="M78 100V76H92V96M196 100V76H210V96" fill={INK} />
      {/* five bays: five windows above, four below, and the door in the
          middle, where the chaise stands */}
      <g fill={INK}>
        {[64, 104, 144, 184, 224].map((x) => (
          <rect key={`u${x}`} x={x - 8} y={132} width={16} height={24} />
        ))}
        {[64, 104, 184, 224].map((x) => (
          <rect key={`d${x}`} x={x - 8} y={172} width={16} height={26} />
        ))}
        <rect x={136} y={182} width={16} height={44} />
      </g>
      <g stroke={PAPER} strokeWidth={1.1}>
        {[64, 104, 144, 184, 224].map((x) => (
          <path key={`m${x}`} d={`M${x} 132V156M${x - 8} 144H${x + 8}`} />
        ))}
        {[64, 104, 184, 224].map((x) => (
          <path key={`n${x}`} d={`M${x} 172V198M${x - 8} 185H${x + 8}`} />
        ))}
      </g>
      {/* the lawn, in the sun */}
      <rect x={0} y={HORIZON} width={W} height={H - HORIZON} fill={PAPER} />
      <path d={`M0 ${HORIZON}H${EDGE}`} stroke={INK} strokeWidth={1.2} />
      <path d={m.lawn} fill={INK} />
      <Chaise />

      {/* the copse behind Elizabeth: the underwood up to her shoulders, the
          sky between the trees above it, the wood deepening to the right */}
      <path
        d={`M530 304Q500 290 502 250Q504 214 530 206L640 202Q690 150 730 112L${W} 96V300Z`}
        fill={INK}
      />
      <path d={m.under} fill={INK} />
      <path d={m.underCuts} fill={PAPER} />
      <path d={m.wood} fill={PAPER} />
      <path d={`M${EDGE + 40} 300Q700 286 ${W} 290V${H}H${EDGE + 60}Z`} fill={INK} />
      <path d={m.dapples} fill={PAPER} />
      {/* the gravel walk, from the door to their feet */}
      <path
        d={'M' + WALK.map(([x, y]) => `${x} ${y}`).join('L') + 'Z'}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1}
      />
      <path d={m.gravel} fill={INK} />

      {/* the trunks and the canopy */}
      <path d={m.boughs} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      {m.trunks.map((d, i) => (
        <path key={i} d={d} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      ))}
      <path d={m.bark} fill={PAPER} />
      <path d={m.canopy} fill={INK} />
      <path d={m.leaves} fill={PAPER} />

      {/* their shadows on the gravel */}
      <ellipse cx={LC_AT[0] + 4} cy={FEET + 3} rx={34} ry={4} fill={INK} />
      <ellipse cx={EB_AT[0] - 4} cy={FEET + 3} rx={26} ry={4} fill={INK} />

      <Person pose={LC_POSE} at={LC_AT} scale={LC_SCALE} />
      <Person pose={EB_POSE} at={EB_AT} scale={EB_SCALE} flip>
        <Cut parts={PARASOL} halo={1.2} />
        <path d={PARASOL_FOLDS} fill={PAPER} />
      </Person>
    </g>
  )
}

export const ladyCatherinesVisitArt: LinocutArt = { width: W, height: H, Draw: LadyCatherinesVisit }

export const ladyCatherinesVisit: ComicPanel = {
  moment: 'Lady Catherine’s visit',
  art: ladyCatherinesVisitArt,
  alt: "A linocut print of the copse beside the lawn at Longbourn on a bright morning. On the left, across the lawn, a closed travelling chaise stands at the door of a plain square house, a woman's bonneted head at its window and four horses harnessed in pairs before it, a postboy riding each near horse. A gravel walk curves from the door to two women in the foreground. Lady Catherine, tall and large in a dark gown and bonnet, her head held back, stands on the walk with her mouth open, pointing at Elizabeth. Elizabeth, shorter, in a pale gown with her dark hair dressed up, faces her in front of the dark bushes and trees of the copse, her chin raised and her cheek flushed red, one hand on a furled parasol whose point rests on the ground.",
  quote: 'you ought to know, that I am not to be trifled with.',
  quoteAt: 'top-right',
}
