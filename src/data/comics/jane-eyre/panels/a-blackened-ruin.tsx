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
  wave,
  wedge,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Figure,
  HEAD_JANE,
  HOLD_CUTS,
  HOLD_HAND,
  JaneFace,
  STRAW_BONNET,
  STRAW_BONNET_LINING,
  STRAW_BONNET_PLAIT,
  STRAW_BONNET_TIES,
  boot,
  gown,
  headAt,
  shawl,
  shawlBorder,
  type P,
  type Part,
} from './people'

/**
 * Chapter 36: "A blackened ruin", the twenty-first moment in the guide's
 * timeline. Every detail is from the text (the held edition):
 *
 * - "early on the succeeding Thursday morning"; "a loud cawing broke the
 *   morning stillness"; "perhaps at this moment he is watching the sun rise
 *   over the Pyrenees". So it is just after sunrise, early in June: the low
 *   sun is up behind her and her shadow falls long across the grass. The sun
 *   is the spot colour, for the "timorous joy" she comes with, the moment
 *   before she sees.
 * - "there was a gate just there, opening into the meadow, between two stone
 *   pillars crowned by stone balls"; then "a straying out into the meadow;
 *   and a sudden stop full in front of the great mansion, and a protracted,
 *   hardy gaze towards it". So Jane stands in the meadow, out from a
 *   gate-pillar with its stone ball, and looks.
 * - "I looked with timorous joy towards a stately house: I saw a blackened
 *   ruin." "The front was, as I had once seen it in a dream, but a
 *   shell-like wall, very high and very fragile-looking, perforated with
 *   paneless windows: no roof, no battlements, no chimneys—all had crashed
 *   in." "the portal yawned void"; "The grim blackness of the stones". So
 *   the front is a black shell of three storeys ("three storeys high",
 *   Chapter 11), thin between its windows, its top broken, the sky showing
 *   through the empty windows, its round-headed doorway a black void.
 * - "The lawn, the grounds were trodden and waste"; "amidst the drenched
 *   piles of rubbish, spring had cherished vegetation: grass and weed grew
 *   here and there between the stones and fallen rafters". So rubble and
 *   charred beams lie along its foot with weeds among them, and the lawn is
 *   rough tussocks.
 * - "the rookery clustered dark"; "The crows sailing overhead"; "My eye
 *   involuntarily wandered to the grey church tower near the gates" (its
 *   "old tower-top looked over a knoll between the house and gates",
 *   Chapter 11). So dark trees cluster behind the house, crows fly over, and
 *   a small grey tower stands on its knoll.
 * - She wears the straw bonnet and the shawl she left Thornfield in ("I
 *   tied on my straw bonnet, pinned my shawl", Chapter 27), and at Ferndean
 *   that evening "removed my bonnet and shawl" (Chapter 37). Her near hand is
 *   at her breast.
 *
 * WHAT IS NOT DRAWN, for readers who are children: the fire, and Bertha's
 * fall from the roof, which the innkeeper tells of later in this chapter.
 * Neither is shown, and no caption, quotation or alt text names her death or
 * how it happened (the rule in ../index.ts). The ruin is a year cold: no
 * smoke, no glow, and nothing red near the house.
 */

const W = 860
const H = 340
/** The low morning sun, up and to the left, behind Jane. */
const SUN: Pt = [118, 60]

/** The ruined front: its two ends and its foot. */
const RUIN = { x0: 392, x1: 758, foot: 264 }
/** The centres of its seven bays; the portal is in the middle one. */
const BAYS = [428, 477, 526, 575, 624, 673, 722]
const PORTAL = 575
const WIN = 13
/** The three storeys of windows: [top, sill]. */
const STOREYS: [number, number][] = [
  [99, 134],
  [151, 196],
  [213, 250],
]
/** The bays whose top-storey window has lost the wall above it, open to the sky. */
const OPEN_TO_SKY = [477, 673]

/**
 * The broken top of the front: no roof, no battlements, no chimneys, "all had
 * crashed in". Stepped like fallen masonry, crumbling lowest at the two ends,
 * and dipping to the sill where a window has lost the wall above it.
 */
const TOP: Pt[] = [
  [392, 163],
  [396, 163],
  [396, 151],
  [403, 151],
  [403, 141],
  [407, 141],
  [407, 132],
  [413, 132],
  [413, 117],
  [419, 117],
  [419, 108],
  [426, 108],
  [426, 96],
  [436, 96],
  [436, 89],
  [447, 89],
  [447, 86],
  [458, 86],
  [458, 89],
  [464, 89],
  [466, 107],
  [465, 122],
  [469, 130],
  [478, 132],
  [485, 128],
  [490, 115],
  [489, 95],
  [492, 88],
  [500, 88],
  [500, 84],
  [513, 84],
  [513, 87],
  [522, 87],
  [522, 83],
  [536, 83],
  [536, 86],
  [547, 86],
  [547, 81],
  [560, 81],
  [560, 77],
  [590, 77],
  [590, 81],
  [604, 81],
  [604, 85],
  [614, 85],
  [614, 82],
  [628, 82],
  [628, 87],
  [640, 87],
  [640, 84],
  [652, 84],
  [652, 88],
  [660, 88],
  [662, 103],
  [661, 119],
  [666, 129],
  [676, 131],
  [683, 124],
  [686, 109],
  [685, 92],
  [690, 89],
  [700, 89],
  [700, 93],
  [712, 93],
  [712, 99],
  [720, 99],
  [720, 104],
  [729, 104],
  [729, 115],
  [737, 115],
  [737, 124],
  [745, 124],
  [745, 134],
  [752, 134],
  [752, 146],
  [758, 146],
]

const pts = (p: Pt[]) => p.map(([x, y]) => `${n(x)} ${n(y)}`).join('L')
const rect = (x0: number, y0: number, x1: number, y1: number) => `M${x0} ${y0}H${x1}V${y1}H${x0}Z`

/** The windows the sky shows through: the top two storeys, bar the open ones. */
const SKY_WINDOWS: [number, number, number, number][] = BAYS.flatMap((c) => {
  const out: [number, number, number, number][] = []
  if (!OPEN_TO_SKY.includes(c)) out.push([c - WIN, STOREYS[0][0], c + WIN, STOREYS[0][1]])
  out.push([c - WIN, STOREYS[1][0], c + WIN, STOREYS[1][1]])
  return out
})
/** The ground-floor windows, dark: rubble and shadow behind them. */
const DARK_WINDOWS = BAYS.filter((c) => c !== PORTAL).map(
  (c) => [c - WIN, STOREYS[2][0], c + WIN, STOREYS[2][1]] as [number, number, number, number],
)

/** The front as one shape, its windows cut through it. */
const FRONT =
  `M${RUIN.x0} ${RUIN.foot}L${pts(TOP)}L${RUIN.x1} ${RUIN.foot}Z` +
  SKY_WINDOWS.map(([a, b, c, d]) => rect(a, b, c, d)).join('')

/** The end wall, going back from the right-hand corner, in shadow, one window through it. */
const SIDE =
  'M758 155L765 158L765 166L773 167L773 178L781 179L781 188L790 190L790 254L758 264Z' +
  'M768 200L779 202L779 236L768 240Z'

/** The portal, which "yawned void": a round-headed doorway, black. */
const PORTAL_D = `M${PORTAL - 15} ${RUIN.foot}V214Q${PORTAL - 15} 200 ${PORTAL} 200Q${PORTAL + 15} 200 ${PORTAL + 15} 214V${RUIN.foot}Z`

/**
 * The rookery: tall trees clustered dark behind the house at each end, their
 * crowns [cx, cy, rx, ry], and their trunks [x, top].
 */
const CROWNS: [number, number, number, number][] = [
  [318, 172, 18, 18],
  [334, 150, 20, 20],
  [352, 132, 22, 22],
  [372, 116, 20, 20],
  [394, 124, 20, 20],
  [412, 142, 18, 18],
  [344, 176, 20, 20],
  [366, 158, 22, 22],
  [390, 160, 20, 20],
  [412, 172, 16, 16],
  [326, 196, 16, 16],
  [352, 200, 18, 18],
  [380, 196, 18, 18],
  [404, 196, 16, 16],
  [758, 140, 18, 18],
  [778, 116, 22, 22],
  [800, 96, 22, 22],
  [824, 84, 22, 22],
  [848, 94, 22, 22],
  [864, 118, 20, 20],
  [772, 160, 20, 20],
  [796, 138, 24, 24],
  [822, 120, 24, 24],
  [846, 138, 22, 22],
  [864, 160, 20, 20],
  [786, 182, 20, 20],
  [814, 170, 24, 24],
  [842, 180, 22, 22],
]
const TRUNKS: [number, number][] = [
  [334, 206],
  [358, 210],
  [384, 206],
  [796, 196],
  [826, 188],
  [852, 196],
]
/** The church tower, near the gates, and the knoll it looks over. */
const TOWER = { x0: 262, x1: 288, top: 172 }
const KNOLL = 'M226 232C246 214 266 206 286 206C306 206 322 214 340 232Z'

/** The far hills, low across the back of the picture. */
const hillTop = (x: number) =>
  224 - 7 * Math.sin(x / 110 + 0.8) - 4 * Math.sin(x / 37 + 2.1) + (x > 700 ? (x - 700) * 0.04 : 0)
const HILLS = (() => {
  let d = `M-4 ${n(hillTop(-4))}`
  for (let x = 4; x <= W + 4; x += 8) d += `L${x} ${n(hillTop(x))}`
  return d + `L${W + 4} 300L-4 300Z`
})()
const HILL_LINE = (() => {
  let d = `M-4 ${n(hillTop(-4))}`
  for (let x = 4; x <= W + 4; x += 8) d += `L${x} ${n(hillTop(x))}`
  return d
})()

type Marks = {
  sky: string
  hills: string
  wall: string
  leaves: string
  tower: string
  rubble: string
  chips: string
  weedsPaper: string
  weedsInk: string
  lawn: string
  meadow: string
  wallStones: string
}

/** Morning light: strongest low in the sky and towards the sun. */
const skyLight = (x: number, y: number) => {
  const sun = clamp(1 - Math.hypot(x - SUN[0], (y - SUN[1]) * 1.2) / 520)
  const low = clamp((y - 6) / 230)
  return clamp(0.42 + low * 0.4 + sun * 0.45)
}

/**
 * The fire-blackened stone: dark all over, a little light raking across it
 * from the left, and soot plumes over every window head where the flames
 * came out, cut nowhere.
 */
const wallLight = (x: number, y: number) => {
  for (const c of BAYS)
    for (const [top] of STOREYS.slice(0, 2)) {
      const up = top - y
      if (up > -2 && up < 30 && Math.abs(x - c) < 15 * (1 - up / 34)) return 0
    }
  return clamp(0.06 + ((RUIN.x1 - x) / (RUIN.x1 - RUIN.x0)) * 0.24)
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The sky is the paper: streaks of cloud left in ink, thicker and closer
  // together high up and away from the sun.
  const rk = rng(2101)
  let sky = ''
  for (let y = 16; y < 200; y += between(rk, 8, 13)) {
    let x = between(rk, -60, 0)
    while (x < W) {
      const len = between(rk, 60, 190)
      const dark = 1 - skyLight(x + len / 2, y)
      if (rk() < 0.2 + dark * 1.3)
        sky += ribbon(
          wave(x, x + len, y, between(rk, 0.6, 1.6), between(rk, 70, 130), between(rk, 0, 6), 6),
          0.6 + dark * 4 * between(rk, 0.7, 1.1),
          0.8,
        )
      x += len + between(rk, 24, 90)
    }
  }
  // The far hills, pale in the haze: a few lines along their slopes.
  const rh = rng(2102)
  let hills = ''
  for (let k = 1; k < 5; k++) {
    let x = between(rh, -30, 10)
    while (x < W) {
      const len = between(rh, 24, 70)
      if (rh() < 0.6)
        hills += gouge(x, hillTop(x) + k * 5.5, x + len, hillTop(x + len) + k * 5.5, 0.35 + k * 0.2)
      x += len + between(rh, 8, 30)
    }
  }
  const wall = gougeField(
    rng(2103),
    { x0: RUIN.x0, x1: RUIN.x1, y0: 88, y1: RUIN.foot },
    wallLight,
    { spacing: 6.6, len: [10, 34], gap: [8, 20], max: 2.2 },
  )
  // Leaves flecked light over the crowns of the rookery, most on the sunward side.
  const rl = rng(2106)
  let leaves = ''
  for (const [cx, cy, rx, ry] of CROWNS) {
    const k = Math.round((rx * ry) / 70)
    for (let i = 0; i < k; i++) {
      const a = between(rl, Math.PI * 0.7, Math.PI * 1.6)
      const rr = Math.sqrt(rl()) * 0.85
      const x = cx + Math.cos(a) * rx * rr
      const y = cy + Math.sin(a) * ry * rr
      leaves += gouge(x, y, x + between(rl, 3, 6), y - between(rl, 1, 3), 0.6)
    }
  }
  // The church tower: grey, coursed, looking over its knoll.
  const rt = rng(2107)
  let tower = ''
  for (let y = 176; y < 214; y += 4.4) {
    let x = TOWER.x0 + 2 + between(rt, -2, 2)
    while (x < TOWER.x1 - 2) {
      const len = between(rt, 6, 12)
      tower += gouge(x, y, Math.min(x + len, TOWER.x1 - 2), y, 1.05)
      x += len + between(rt, 1.6, 3)
    }
  }
  // Rubble heaped along the foot of the front, and spilled from the portal.
  const rr = rng(2108)
  let rubble = `M${RUIN.x0 - 14} ${RUIN.foot + 6}`
  for (let x = RUIN.x0 - 14; x <= RUIN.x1 + 30; x += 7) {
    const heap =
      9 * Math.max(0, Math.sin(((x - RUIN.x0) / 74) * Math.PI)) +
      14 * Math.max(0, 1 - Math.abs(x - PORTAL) / 34) +
      between(rr, 2, 7)
    rubble += `L${n(x)} ${n(RUIN.foot - heap)}`
  }
  rubble += `L${RUIN.x1 + 30} ${RUIN.foot + 8}Z`
  let chips = ''
  for (let i = 0; i < 60; i++) {
    const x = between(rr, RUIN.x0 - 8, RUIN.x1 + 24)
    const y = between(rr, RUIN.foot - 8, RUIN.foot + 4)
    const a = between(rr, 0, Math.PI)
    const l = between(rr, 2, 5)
    chips += gouge(x, y, x + Math.cos(a) * l, y + Math.sin(a) * l * 0.5, 0.6)
  }
  // "grass and weed grew here and there between the stones and fallen rafters"
  const rw = rng(2109)
  const tuft = (x: number, y: number, h: number) => {
    let d = ''
    for (let k = -2; k <= 2; k++)
      d += ribbon(
        [
          [x + k * 1.6, y],
          [x + k * 2.4, y - h * 0.5],
          [x + k * 3.6 + between(rw, -1, 1), y - h * between(rw, 0.8, 1.1)],
        ],
        1.4,
        0.6,
        false,
      )
    return d
  }
  let weedsPaper = ''
  for (const [x, y, h] of [
    [418, 258, 9],
    [452, 255, 7],
    [503, 259, 10],
    [548, 250, 8],
    [606, 253, 9],
    [641, 259, 7],
    [700, 256, 10],
    [741, 259, 8],
  ] as [number, number, number][])
    weedsPaper += tuft(x, y, h)
  let weedsInk = ''
  for (let i = 0; i < 16; i++)
    weedsInk += tuft(between(rw, 250, 600), between(rw, 296, 312), between(rw, 6, 11))
  // The lawn before the house, "trodden and waste": tussocks of rough grass
  // in broken rows, bare trodden earth between them. Spiky-topped, so the
  // rows read as grass and never as water.
  const rg = rng(2110)
  let lawn = ''
  for (const [y0, h, keep] of [
    [271, 5, 0.75],
    [279, 6, 0.6],
    [288, 7, 0.45],
  ] as [number, number, number][]) {
    let x = between(rg, -10, 0)
    while (x < W) {
      const len = between(rg, 30, 110)
      if (rg() < keep) {
        let d = `M${n(x)} ${n(y0 + 2)}`
        for (let xx = x; xx <= x + len; xx += between(rg, 2.6, 4.2))
          d += `L${n(xx)} ${n(y0 - h * between(rg, 0.2, 1))}L${n(xx + 1.3)} ${n(y0 - between(rg, 0, 1))}`
        lawn += d + `L${n(x + len)} ${n(y0 + 2)}Z`
      }
      x += len + between(rg, 14, 60)
    }
  }
  // The meadow in front, where she stands: pale, a few strokes of grass, none
  // in the corner the quotation is set in.
  const rm = rng(2111)
  let meadow = ''
  for (let i = 0; i < 150; i++) {
    const y = between(rm, 292, H)
    const x = between(rm, 0, W)
    const near = clamp((y - 292) / (H - 292))
    if (x > 600 && y > 300) continue
    meadow += gouge(
      x,
      y,
      x + between(rm, -2, 2),
      y - between(rm, 3, 7) * (0.6 + near),
      0.35 + near * 0.5,
    )
  }
  // The orchard wall: coursed stone.
  const rs = rng(2112)
  let wallStones = ''
  for (let y = 206; y < H; y += 9) {
    let x = between(rs, -6, 0)
    while (x < 30) {
      const len = between(rs, 8, 16)
      wallStones += gouge(x, y, Math.min(x + len, 31), y + between(rs, -0.4, 0.4), 0.9)
      x += len + between(rs, 2, 5)
    }
  }
  cached = {
    sky,
    hills,
    wall,
    leaves,
    tower,
    rubble,
    chips,
    weedsPaper,
    weedsInk,
    lawn,
    meadow,
    wallStones,
  }
  return cached
}

/** The fallen rafters: charred beams, [x1, y1, x2, y2, width]. */
const RAFTERS: [number, number, number, number, number][] = [
  [498, 266, 538, 214, 6],
  [430, 262, 482, 250, 5],
  [584, 262, 612, 236, 5],
  [690, 266, 742, 238, 6],
  [652, 262, 700, 257, 4.5],
]

/**
 * A crow sailing, side on, facing right, in its own frame (wingspan about
 * 24): a stout body with a heavy beak and a short tail, and both wings raised
 * a little above it, their tips fingered as a crow's are.
 *
 * FIXED 10 October 2026: the crows were first cut seen from below, two broad
 * rounded wings with a jagged point hanging between them, and at panel size
 * they read as bats over the ruin. Side on, with the beak and the tail
 * showing, they read as birds at any width.
 */
const CROW =
  'M-10.4 0.2L-6.4 -0.8C-3.2 -1.6 0.8 -2 3.8 -2.2C5.2 -3.4 7.4 -3.2 8 -1.8L10.8 -0.8L7.8 0.2C6.6 1.6 4.2 2.4 1 2.4C-2.2 2.4 -4.8 1.8 -6.6 1.4L-10.8 2.4Z' +
  'M-0.6 -1.6C-3 -3.2 -5.8 -4.8 -10.4 -5.8L-9.2 -4.8L-11 -4.4L-9.2 -3.8L-10.4 -3L-6.4 -2.2C-4.4 -1.2 -2.6 -0.4 0.4 0.6Z' +
  'M0.4 -1.8C2.8 -4.2 6 -6.2 11.2 -7.6L10.2 -6.4L12.2 -6.2L10.2 -5.2L11.6 -4.6L6.6 -3.4C4.8 -2.2 3.4 -0.8 2.4 0.6Z'
/** [x, y, scale, rotate]; a negative scale turns the crow to face left. */
const CROWS: [number, number, number, number][] = [
  [240, 76, 1.35, -6],
  [296, 48, -1.1, 8],
  [352, 92, 1.2, -4],
  [458, 54, -0.95, 5],
  [540, 32, 0.8, -8],
  [622, 60, -0.9, 4],
  [706, 40, 0.85, -3],
]

// ── JANE AT THE GATE ────────────────────────────────────────────────────────

/** Jane, after placing: [x, y] of the head and its scale. */
const JANE = { head: [216, 152] as P, s: 0.78 }

/**
 * Jane in the meadow, facing the house: her straw bonnet, her shawl pinned at
 * the breast, the long gown; her near hand raised to her breast, at the pin.
 */
function JaneAtTheGate() {
  const { head, s } = JANE
  const ht = headAt(1, head, 0, s)
  const neck: P = [head[0] - 1, head[1] + 25 * s]
  const waist: P = [head[0] - 1.5, neck[1] + 34]
  const sh = { width: 24, point: 30, front: 6 }
  const handT = `translate(${n(neck[0] + 6.8)} ${n(neck[1] + 17)}) rotate(-70) scale(${s})`
  const parts: Part[] = [
    boot([head[0] + 11, 323], 1, 0.74),
    { d: gown(neck, waist, 322, 1, { shoulder: 19, waistW: 14, front: 21, back: 27 }) },
    { d: HEAD_JANE, t: ht },
    { d: shawl(neck, waist, 1, sh) },
  ]
  return (
    <Figure parts={parts}>
      <path d={shawlBorder(neck, waist, 1, sh)} fill={PAPER} />
      <JaneFace t={ht} hair={false} tucker={false} />
      <g transform={ht}>
        <path d={STRAW_BONNET} fill={PAPER} stroke={INK} strokeWidth={1.3} strokeLinejoin="round" />
        <path d={STRAW_BONNET_PLAIT} fill="none" stroke={INK} strokeWidth={0.9} />
        <path d={STRAW_BONNET_LINING} fill={INK} />
        <path d={STRAW_BONNET_TIES} fill={INK} stroke={PAPER} strokeWidth={0.6} />
      </g>
      <Figure parts={HOLD_HAND.map((q) => ({ ...q, t: handT, paper: true, edge: 0.9 }))} halo={0}>
        <path d={HOLD_CUTS} transform={handT} fill={INK} />
      </Figure>
    </Figure>
  )
}

function ABlackenedRuin({ uid }: ArtProps) {
  const m = marks()
  const id = { front: `${uid}-front` }
  return (
    <>
      <defs>
        <clipPath id={id.front}>
          <path d={FRONT} clipRule="evenodd" />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [575, 180], push: 1.03 })}>
        {/* the morning sky, palest low down and towards the sun */}
        <rect x={-4} y={-4} width={W + 8} height={300} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        {/* the sun, just up */}
        <g fill={INK}>
          {Array.from({ length: 16 }, (_, k) => {
            const a = (k / 16) * Math.PI * 2 + 0.1
            const r1 = k % 2 ? 32 : 40
            return (
              <path
                key={k}
                d={wedge(
                  SUN[0] + Math.cos(a) * 21,
                  SUN[1] + Math.sin(a) * 21,
                  SUN[0] + Math.cos(a) * r1,
                  SUN[1] + Math.sin(a) * r1,
                  1.8,
                  0.4,
                )}
              />
            )
          })}
        </g>
        <circle cx={SUN[0]} cy={SUN[1]} r={15} fill={RED} stroke={INK} strokeWidth={LINE.bold} />

        {/* the far hills, pale */}
        <path d={HILL_LINE} fill="none" stroke={INK} strokeWidth={LINE.carve} />
        <path d={m.hills} fill={INK} />

        {/* "the grey church tower near the gates", over its knoll */}
        <path d={`M${TOWER.x0} 228V${TOWER.top}H${TOWER.x1}V228Z`} fill={INK} />
        <path d={m.tower} fill={PAPER} />
        <path
          d={`M${TOWER.x0 - 2} ${TOWER.top + 1}V${TOWER.top - 7}H${TOWER.x0 + 4}V${TOWER.top - 3}H${TOWER.x0 + 10}V${TOWER.top - 7}H${TOWER.x0 + 16}V${TOWER.top - 3}H${TOWER.x0 + 22}V${TOWER.top - 7}H${TOWER.x1 + 2}V${TOWER.top + 1}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        <path
          d={`M${TOWER.x0 + 9} ${TOWER.top + 13}Q${TOWER.x0 + 13} ${TOWER.top + 7} ${TOWER.x0 + 17} ${TOWER.top + 13}V${TOWER.top + 25}H${TOWER.x0 + 9}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={1}
        />
        <path d={KNOLL} fill={PAPER} stroke={INK} strokeWidth={LINE.carve} />

        {/* the rookery, clustered dark behind the house */}
        <g stroke={INK} strokeWidth={5} strokeLinecap="round">
          {TRUNKS.map(([x, y]) => (
            <path key={x} d={`M${x} ${y}L${x + 1} ${RUIN.foot}`} />
          ))}
        </g>
        <g fill={PAPER}>
          {CROWNS.map(([cx, cy, rx, ry]) => (
            <ellipse key={`${cx}-${cy}`} cx={cx} cy={cy} rx={rx + 1.6} ry={ry + 1.6} />
          ))}
        </g>
        <g fill={INK}>
          {CROWNS.map(([cx, cy, rx, ry]) => (
            <ellipse key={`${cx}-${cy}`} cx={cx} cy={cy} rx={rx} ry={ry} />
          ))}
        </g>
        <path d={m.leaves} fill={PAPER} />

        {/* the shell of the front: "a shell-like wall, very high and very
            fragile-looking, perforated with paneless windows" */}
        <path d={SIDE} fill={INK} fillRule="evenodd" stroke={PAPER} strokeWidth={LINE.fine} />
        <path
          d={FRONT}
          fill={INK}
          fillRule="evenodd"
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <g clipPath={`url(#${id.front})`}>
          <path d={m.wall} fill={PAPER} />
        </g>
        {/* the sills of the open windows */}
        <g fill={INK} stroke={PAPER} strokeWidth={LINE.fine}>
          {SKY_WINDOWS.map(([a, , , d]) => (
            <rect key={`${a}-${d}`} x={a - 3} y={d} width={2 * WIN + 6} height={4} />
          ))}
        </g>
        {/* the ground-floor windows: dark, a lit reveal and sill to each */}
        <g fill={PAPER}>
          {DARK_WINDOWS.map(([a, b, c, d]) => (
            <path
              key={a}
              d={
                wedge(a + 1, b, a + 1, d, 1.6, 1.6) +
                wedge(a, b + 0.8, c, b + 0.8, 1.2, 1.2) +
                wedge(a - 3, d + 2.4, c + 3, d + 2.4, 2.2, 2.2)
              }
            />
          ))}
        </g>
        {/* charred beams fallen across two of the openings */}
        <path d={wedge(614, 158, 636, 197, 3.6, 3.6)} fill={INK} />
        <path d={wedge(516, 110, 538, 140, 3.2, 3.2)} fill={INK} />
        {/* the portal */}
        <path d={PORTAL_D} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path
          d={
            rect(PORTAL - 24, RUIN.foot - 4, PORTAL + 24, RUIN.foot) +
            rect(PORTAL - 30, RUIN.foot, PORTAL + 30, RUIN.foot + 4)
          }
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />

        {/* the lawn, trodden and waste */}
        <rect x={-4} y={RUIN.foot - 4} width={W + 8} height={H - RUIN.foot + 8} fill={PAPER} />
        <path
          d={`M${RUIN.x0 - 20} ${RUIN.foot + 1}C${RUIN.x0 + 80} ${RUIN.foot + 7} ${RUIN.x1 - 40} ${RUIN.foot + 7} ${RUIN.x1 + 40} ${RUIN.foot + 1}Z`}
          fill={INK}
        />
        <path d={m.lawn} fill={INK} />
        {/* rubble and fallen rafters along the foot of the walls */}
        <path
          d={m.rubble}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
          strokeLinejoin="round"
        />
        <path d={m.chips} fill={PAPER} />
        {RAFTERS.map(([x1, y1, x2, y2, w]) => (
          <g key={`${x1}-${y1}`}>
            <path d={wedge(x1, y1, x2, y2, w + 2.4, w + 2.4)} fill={PAPER} />
            <path d={wedge(x1, y1, x2, y2, w, w)} fill={INK} />
          </g>
        ))}
        <path d={m.weedsPaper} fill={PAPER} />

        {/* the meadow, pale in the sun */}
        <path d={m.meadow} fill={INK} />
        <path d={m.weedsInk} fill={INK} />

        {/* the orchard wall and the gate-pillar crowned by a stone ball */}
        <path d={`M-4 198H32V${H + 4}H-4Z`} fill={INK} />
        <path d={m.wallStones} fill={PAPER} />
        <path d="M-4 197H33" stroke={PAPER} strokeWidth={LINE.bold} />
        <rect
          x={34}
          y={136}
          width={40}
          height={H - 132}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d={gouge(69, 142, 69, H - 4, 1.8) + gouge(62, 170, 62, 300, 0.8)} fill={PAPER} />
        <g fill="none" stroke={PAPER} strokeWidth={LINE.hairline}>
          {[164, 194, 224, 254, 284, 314].map((y) => (
            <path key={y} d={`M36 ${y}H72`} />
          ))}
        </g>
        <rect
          x={28}
          y={127}
          width={52}
          height={10}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <circle cx={54} cy={110} r={16} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path
          d="M58 97Q68 101 69 112"
          fill="none"
          stroke={PAPER}
          strokeWidth={2.6}
          strokeLinecap="round"
        />

        {/* her long morning shadow, thrown before her across the grass */}
        <path
          d={ribbon(
            [
              [214, 324],
              [300, 328],
              [390, 331],
              [470, 333],
            ],
            11,
            0.5,
            false,
          )}
          fill={INK}
        />
        <JaneAtTheGate />

        {/* "The crows sailing overhead" */}
        <g className="lc-drift" style={timing({ delay: 0.3 })}>
          {CROWS.map(([x, y, s, rot]) => (
            <path
              key={`${x}-${y}`}
              d={CROW}
              transform={`translate(${x} ${y}) rotate(${rot}) scale(${s} ${Math.abs(s)})`}
              fill={INK}
            />
          ))}
        </g>
      </g>
    </>
  )
}

export const aBlackenedRuin: LinocutArt = { width: W, height: H, Draw: ABlackenedRuin }
