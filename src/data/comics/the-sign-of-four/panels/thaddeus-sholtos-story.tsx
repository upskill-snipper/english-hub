import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  n,
  rays,
  ribbon,
  rng,
  type Rng,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  COLLAR,
  Figure,
  GRIP_HAND,
  HEAD_HOLMES,
  HEAD_THADDEUS,
  HEAD_WATSON,
  HOLMES_HAIR,
  HolmesHands,
  LONG_HAND,
  Mary,
  OPEN_HAND,
  PaperHands,
  THADDEUS_CUTS,
  THADDEUS_FRINGE,
  THADDEUS_PUPIL,
  THADDEUS_SCALP,
  THADDEUS_SCALP_LINE,
  WATSON_CUTS,
  WATSON_HAIR,
  WATSON_PUPIL,
  gent,
  handAt,
  headAt,
  type P,
  type Part,
} from './people'

/**
 * Chapter 4, "The Story of the Bald-Headed Man": "Thaddeus Sholto's story",
 * the fifth moment in the guide's timeline. The picture is one beat of the
 * chapter, the pause after Thaddeus has told them his father's deathbed
 * confession, and every detail is from the held edition:
 *
 * - "The little man stopped to relight his hookah and puffed thoughtfully for
 *   a few moments. We had all sat absorbed, listening to his extraordinary
 *   narrative." / "Mr. Thaddeus Sholto looked from one to the other of us with
 *   an obvious pride at the effect which his story had produced, and then
 *   continued between the puffs of his overgrown pipe." So Thaddeus sits in
 *   the middle, on "a low settee", holding the mouthpiece of the hookah to his
 *   lips in one hand and the other held open towards his listeners; the bowl
 *   glows in the spot colour and its smoke rises.
 * - "a small man with a very high head, a bristle of red hair all round the
 *   fringe of it, and a bald, shining scalp which shot out from among it like
 *   a mountain-peak from fir-trees"; "Nature had given him a pendulous lip".
 *   Drawn from the kit's head (./people.tsx): the bald dome cut in paper, the
 *   red bristles round the back of it, well above his mouth, and the hanging
 *   lip. He is smaller than the other men.
 * - "a huge hookah which stood upon a mat in the corner"; "He applied a taper
 *   to the great bowl, and the smoke bubbled merrily through the rose-water."
 *   So the hookah stands on its mat beside the settee: a glass vessel with
 *   bubbles in the water, a tall stem, the great bowl, and the long tube that
 *   runs over the floor to his hand.
 * - "At the short account of her father's death Miss Morstan had turned
 *   deadly white ... She rallied however, on drinking a glass of water which
 *   I quietly poured out for her from a Venetian carafe upon the side-table."
 *   So Mary sits with the glass in her hand and her face cut white (Mary's
 *   `pale`), still "muffled in a dark cloak" from Chapter 3, and Watson stands
 *   at her side with the carafe.
 * - "Sherlock Holmes leaned back in his chair with an abstracted expression
 *   and the lids drawn low over his glittering eyes." So Holmes leans back,
 *   his eye cut as a narrow lid with no pupil (HOLMES_LIDDED below), his long
 *   white hands at rest on his knees.
 * - The room: "The richest and glossiest of curtains and tapestries draped the
 *   walls, looped back here and there to expose some richly-mounted painting
 *   or Oriental vase"; "The landscape is a genuine Corot"; "The carpet was of
 *   amber-and-black"; "Two great tiger-skins thrown athwart it"; "A lamp in
 *   the fashion of a silver dove was hung from an almost invisible golden wire
 *   in the centre of the room." So the walls are hung with folds, looped back
 *   to their tie-backs to show a framed landscape and a tall vase; the dove
 *   lamp hangs on a hairline over the middle, its flame the spot colour; and
 *   the carpet is patterned. The print has no amber or gold: they are left to
 *   the words.
 *
 * WHAT IS NOT DRAWN. Major Sholto's death, the face at the window and Captain
 * Morstan's death are told in this chapter, never shown: the picture is the
 * room in which they are told, and the faces of those who hear it. The
 * servant who let them in is not in the room. The "two great tiger-skins" are
 * left to the words too: laid flat on the floor at this low angle, a striped
 * skin with its legs spread read as a crocodile, and a crocodile has its own
 * part in this novel (it takes Small's leg, Chapter 12).
 *
 * Seeds: 1501 (the hangings), 1502 (the lamp's rays), 1503 (the recesses),
 * 1504 (the smoke).
 */

const W = 860
const H = 340
/** The foot of the hangings, where the carpet begins. */
const FLOOR = 262
/** The silver dove, hung in the centre of the room; its flame burns at the beak. */
const DOVE: P = [436, 66]
const FLAME: P = [466, 56]

/**
 * Where the hangings are looped back: the top of each opening, the height of
 * its tie-backs, its half-width there, and how wide each gathered curtain is.
 */
const ALCOVES = [
  { cx: 316, top: 30, tie: 150, half: 46, width: 92 },
  { cx: 630, top: 88, tie: 170, half: 32, width: 76 },
]
/** The plain falls of the hangings, between the looped-back curtains. */
const FALLS: [number, number][] = [
  [0, 224],
  [408, 554],
  [706, W],
]
/** The hookah: its centre line, and the top of its mat. */
const HK = { x: 556, mat: 302 }

type Fold = P[]

const lerp = (a: number, b: number, t: number) => a + (b - a) * t
const qb = (a: P, c: P, b: P, t: number): P => [
  (1 - t) * (1 - t) * a[0] + 2 * (1 - t) * t * c[0] + t * t * b[0],
  (1 - t) * (1 - t) * a[1] + 2 * (1 - t) * t * c[1] + t * t * b[1],
]

/** The inner edge of a looped-back curtain: from the top of the opening, to the tie-back, to the floor. */
function edge(a: (typeof ALCOVES)[number], side: -1 | 1, t = 0): Fold {
  const top: P = t === 0 ? [a.cx + side * 1.5, a.top] : [a.cx + side * (4 + t * (a.width - 4)), 18]
  const tie: P = [a.cx + side * (a.half + 1 + t * 12), a.tie]
  const foot: P = [a.cx + side * (a.half - 2 + t * (a.width - 4)), FLOOR]
  const out: Fold = []
  const c1: P = [lerp(top[0], tie[0], 0.9), lerp(top[1], tie[1], 0.3)]
  for (let s = 0; s <= 10; s++) out.push(qb(top, c1, tie, s / 10))
  const c2: P = [tie[0] - side * 1.5, lerp(tie[1], foot[1], 0.45)]
  for (let s = 1; s <= 6; s++) out.push(qb(tie, c2, foot, s / 6))
  return out
}

/**
 * A fold of cloth cut as a band along its line, as wide as the light on it at
 * each point, pointed only at its very ends.
 */
function band(pts: Fold, width: (p: P) => number): string {
  const left: P[] = []
  const right: P[] = []
  const k = pts.length
  for (let i = 0; i < k; i++) {
    const p = pts[i]
    const a = pts[Math.max(0, i - 1)]
    const b = pts[Math.min(k - 1, i + 1)]
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1
    const nx = -(b[1] - a[1]) / len
    const ny = (b[0] - a[0]) / len
    const taper = Math.min(1, Math.sin((Math.PI * i) / (k - 1)) * 3.2)
    const hw = (width(p) * taper) / 2
    left.push([p[0] + nx * hw, p[1] + ny * hw])
    right.push([p[0] - nx * hw, p[1] - ny * hw])
  }
  return 'M' + [...left, ...right.reverse()].map(([x, y]) => `${n(x)} ${n(y)}`).join('L') + 'Z'
}

type Marks = {
  folds: string
  edges: string
  recess: string
  rays: string
  carpet: string
  lozenges: string
  smoke: string[]
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The dove lamp lights the room from the middle, high up.
  const light = (x: number, y: number) =>
    Math.max(clamp(1 - Math.hypot((x - DOVE[0]) * 0.6, (y - 100) * 0.9) / 340) ** 1.1, 0.04)
  const width = (r: Rng) => (p: P) => 0.5 + light(p[0], p[1]) * 3.4 * between(r, 0.85, 1.1)
  const r = rng(1501)
  let folds = ''
  // the plain falls: folds hanging straight, swaying a little
  for (const [x0, x1] of FALLS)
    for (let x = x0 + 5; x < x1 - 3; x += between(r, 9, 13)) {
      const ph = between(r, 0, 6)
      const f: Fold = []
      for (let y = 18; y <= FLOOR; y += 24.4) f.push([x + Math.sin(y / 44 + ph) * 1.4, y])
      folds += band(f, width(r))
    }
  // the looped-back curtains: every fold runs from the top to the tie-back,
  // where it is gathered, and falls from there to the floor
  let edges = ''
  for (const a of ALCOVES)
    for (const side of [-1, 1] as const) {
      for (let i = 1; i <= 7; i++) folds += band(edge(a, side, i / 7), width(r))
      edges +=
        'M' +
        edge(a, side)
          .map(([x, y]) => `${n(x)} ${n(y)}`)
          .join('L')
    }
  // inside each opening, the bare wall the curtains were drawn back from
  const c = rng(1503)
  let recess = ''
  for (const a of ALCOVES)
    for (let y = a.top + 8; y < FLOOR - 4; y += 7) {
      const reach = y < a.tie ? ((y - a.top) / (a.tie - a.top)) * a.half * 0.9 : a.half - 4
      if (reach < 6) continue
      recess += gouge(
        a.cx - reach + between(c, 0, 6),
        y,
        a.cx + reach - between(c, 0, 6),
        y + between(c, -0.6, 0.6),
        0.5 + light(a.cx, y) * 1.2,
      )
    }
  const lampRays = rays(rng(1502), FLAME[0], FLAME[1], { from: 16, to: 66, every: 9, width: 2.2 })
  // The carpet: a border along the foot of the hangings, then rows of lozenges
  // and dots, larger as they come towards us.
  let carpet = ''
  let lozenges = ''
  for (let x = 4; x < W; x += 14) carpet += gouge(x, FLOOR + 6, x + 8, FLOOR + 6, 1.1)
  const rows = [278, 294, 314, 336]
  rows.forEach((y, j) => {
    const s = 0.7 + j * 0.28
    const step = 46 * s
    for (let x = (j % 2) * step * 0.5 - 20; x < W + 20; x += step) {
      const w = 9 * s
      const h = 3.6 * s
      lozenges += `M${n(x - w)} ${y}L${n(x)} ${n(y - h)}L${n(x + w)} ${y}L${n(x)} ${n(y + h)}Z`
      carpet += gouge(x + step / 2 - 2 * s, y, x + step / 2 + 2 * s, y, 1 * s)
    }
  })
  // The smoke from the great bowl, curling up and away to the left.
  const s = rng(1504)
  const smoke = [0, 1, 2].map((k) => {
    const pts: P[] = []
    for (let i = 0; i <= 14; i++) {
      const t = i / 14
      pts.push([HK.x - t * (30 + k * 12) + Math.sin(t * 6 + k * 2) * 6, 144 - t * (62 + k * 14)])
    }
    return ribbon(pts, 2.6 + between(s, 0, 1.4), 0.8)
  })
  cached = { folds, edges, recess, rays: lampRays, carpet, lozenges, smoke }
  return cached
}

// ── Watson, standing at Mary's side with the carafe ─────────────────────────
const WAT_HEAD = { d: HEAD_WATSON, at: [118, 112] as P, rot: 10, scale: 1.3 }
const WATSON: Part[] = gent({
  facing: 1,
  neck: [108, 146],
  hip: [112, 228],
  head: WAT_HEAD,
  body: { width: 34, hem: 44, flare: 7 },
  arm: 9,
  leg: 10,
  near: {
    arm: [
      [110, 156],
      [124, 190],
      [144, 190],
    ],
    leg: [
      [110, 228],
      [114, 274],
      [116, 316],
    ],
    hand: { parts: GRIP_HAND, scale: 1, rot: -80 },
  },
  far: {
    arm: [
      [104, 156],
      [98, 194],
      [100, 226],
    ],
    leg: [
      [116, 230],
      [128, 274],
      [132, 316],
    ],
    hand: { parts: OPEN_HAND, scale: 0.9, rot: 6 },
  },
})

// ── Mary Morstan, deadly white, the glass in her hand ───────────────────────
const MARY = {
  facing: 1 as const,
  head: { at: [214, 136] as P, rot: 6, scale: 1.15 },
  neck: [208, 164] as P,
  waist: [202, 222] as P,
  knee: [258, 224] as P,
  floor: 316,
  near: {
    arm: [
      [212, 174],
      [226, 206],
      [244, 192],
    ] as P[],
    hand: { parts: GRIP_HAND, scale: 0.8, rot: -46 },
  },
  far: {
    arm: [
      [204, 174],
      [214, 210],
      [240, 208],
    ] as P[],
    hand: { parts: OPEN_HAND, scale: 0.7, rot: 0 },
  },
}

// ── Thaddeus on his low settee ──────────────────────────────────────────────
const TH_HEAD = { d: HEAD_THADDEUS, at: [432, 162] as P, rot: -4, scale: 1.12 }
/** The far hand holds the mouthpiece to his lips. */
const TH_FAR_ARM: P[] = [
  [446, 198],
  [444, 232],
  [418, 190],
]
const THADDEUS: Part[] = gent({
  facing: -1,
  neck: [440, 192],
  hip: [458, 256],
  head: TH_HEAD,
  body: { width: 28, hem: 10, flare: 3 },
  arm: 8,
  leg: 9,
  near: {
    // held open towards his listeners: "with an obvious pride"
    arm: [
      [436, 200],
      [424, 234],
      [392, 228],
    ],
    leg: [
      [454, 256],
      [408, 248],
      [410, 316],
    ],
    hand: { parts: OPEN_HAND, scale: 1.05, rot: -12 },
  },
  far: {
    arm: TH_FAR_ARM,
    leg: [
      [462, 258],
      [420, 258],
      [424, 316],
    ],
    hand: { parts: GRIP_HAND, scale: 0.85, rot: 0 },
  },
})
/** The far hand, drawn again over the hookah's tube, so it holds it. */
const TH_FAR_HAND = THADDEUS.slice(1, 2)
/** The near arm and its open hand, drawn again over the tube. */
const TH_NEAR_ARM = THADDEUS.slice(-7)

// ── Holmes, leaning back, the lids drawn low ────────────────────────────────
const HOL_HEAD = { d: HEAD_HOLMES, at: [748, 132] as P, rot: 8, scale: 1.3 }
const HOL_NEAR: P[] = [
  [752, 176],
  [748, 214],
  [714, 230],
]
const HOL_FAR: P[] = [
  [762, 176],
  [766, 216],
  [730, 238],
]
const HOLMES: Part[] = gent({
  facing: -1,
  neck: [758, 166],
  hip: [744, 248],
  head: HOL_HEAD,
  body: { width: 26, hem: 16, flare: 4 },
  arm: 8,
  leg: 9,
  near: {
    arm: HOL_NEAR,
    leg: [
      [740, 248],
      [694, 246],
      [696, 316],
    ],
  },
  far: {
    arm: HOL_FAR,
    leg: [
      [748, 250],
      [706, 254],
      [708, 316],
    ],
  },
})
/**
 * Holmes's features with "the lids drawn low over his glittering eyes": the
 * kit's cuts (HOLMES_CUTS in ./people.tsx), with the open eye and its pupil
 * replaced by a narrow lid.
 */
const HOLMES_LIDDED =
  gouge(5, -8.6, 15, -7.2, 1.25, 0.3) +
  gouge(8, -2.8, 13.6, -3.4, 0.6, 0.3) +
  gouge(4.4, 2.4, 6, 11.6, 0.7, 1.2) +
  gouge(10.2, 12.4, 16, 12.2, 0.5) +
  gouge(-5.5, -1, -4.5, 7, 0.7, -1.4)

/** The tube from the hookah, over the floor and up to the mouthpiece in his hand. */
const TUBE = `M${HK.x - 8} 246C${HK.x - 4} 262 ${HK.x - 12} 282 ${HK.x - 40} 290C${HK.x - 80} 300 ${HK.x - 120} 296 ${HK.x - 132} 276C${HK.x - 140} 260 ${HK.x - 138} 220 ${HK.x - 142} 196`

/** The tie-back of a looped curtain: a cord round the gathered folds and its tassel. */
function TieBack({ x, y, side }: { x: number; y: number; side: -1 | 1 }) {
  const w = 16 * side
  return (
    <g>
      <path
        d={`M${x - side * 3} ${y - 3}Q${x + w / 2} ${y + 5} ${x + w} ${y - 2}`}
        fill="none"
        stroke={INK}
        strokeWidth={5}
      />
      <path
        d={`M${x - side * 3} ${y - 3}Q${x + w / 2} ${y + 5} ${x + w} ${y - 2}`}
        fill="none"
        stroke={PAPER}
        strokeWidth={2.4}
      />
      <path
        d={`M${x + w} ${y - 1}L${x + w - side * 3.4} ${y + 15}H${x + w + side * 3.4}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1}
      />
      <path
        d={`M${x + w - side * 2} ${y + 6}H${x + w + side * 2}`}
        stroke={INK}
        strokeWidth={0.9}
      />
    </g>
  )
}

/** "The landscape is a genuine Corot": a framed landscape, its trees feathery. */
function Painting({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  return (
    <g>
      <rect x={x - 7} y={y - 7} width={w + 14} height={h + 14} fill={PAPER} />
      <rect
        x={x - 4}
        y={y - 4}
        width={w + 8}
        height={h + 8}
        fill="none"
        stroke={INK}
        strokeWidth={1}
      />
      <rect x={x} y={y} width={w} height={h} fill={INK} />
      {/* sky, a far line of land, a still water, two feathery trees */}
      <path
        d={
          gouge(x + 6, y + 9, x + w - 10, y + 8, 1.1) +
          gouge(x + 12, y + 15, x + w - 4, y + 15, 0.9) +
          gouge(x + 4, y + h - 13, x + w - 4, y + h - 13, 0.8) +
          gouge(x + 8, y + h - 7, x + w - 14, y + h - 7, 0.7)
        }
        fill={PAPER}
      />
      <path
        d={`M${x + 16} ${y + h - 14}V${y + 26}M${x + w - 18} ${y + h - 14}V${y + 32}`}
        stroke={PAPER}
        strokeWidth={1.4}
      />
      <path
        d={`M${x + 7} ${y + 30}q4 -10 9 -7q6 -5 11 4q-4 7 -11 4q-6 4 -9 -1ZM${x + w - 26} ${y + 34}q3 -8 8 -5q5 -4 9 3q-3 5 -9 4q-5 3 -8 -2Z`}
        fill={PAPER}
      />
    </g>
  )
}

/** "some richly-mounted ... Oriental vase": a tall vase on a stand, its bands cut in ink. */
function Vase({ cx, foot }: { cx: number; foot: number }) {
  const b = foot - 22
  return (
    <g>
      <path
        d={`M${cx - 16} ${foot}L${cx - 12} ${b}H${cx + 12}L${cx + 16} ${foot}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.fine}
      />
      <path
        d={`M${cx - 7} ${b}C${cx - 20} ${b - 8} ${cx - 22} ${b - 40} ${cx - 10} ${b - 54}C${cx - 6} ${b - 60} ${cx - 6} ${b - 66} ${cx - 9} ${b - 72}H${cx + 9}C${cx + 6} ${b - 66} ${cx + 6} ${b - 60} ${cx + 10} ${b - 54}C${cx + 22} ${b - 40} ${cx + 20} ${b - 8} ${cx + 7} ${b}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.2}
      />
      <path
        d={`M${cx - 17} ${b - 24}H${cx + 17}M${cx - 15} ${b - 40}H${cx + 15}M${cx - 8} ${b - 62}H${cx + 8}`}
        stroke={INK}
        strokeWidth={1.6}
      />
      <path
        d={`M${cx - 12} ${b - 32}q6 -5 12 0q6 5 12 0M${cx - 10} ${b - 14}q5 4 10 0q5 -4 10 0`}
        fill="none"
        stroke={INK}
        strokeWidth={0.9}
      />
    </g>
  )
}

function ThaddeusSholtosStory({ uid }: ArtProps) {
  const m = marks()
  const wt = headAt(1, WAT_HEAD.at, WAT_HEAD.rot, WAT_HEAD.scale)
  const tt = headAt(-1, TH_HEAD.at, TH_HEAD.rot, TH_HEAD.scale)
  const ht = headAt(-1, HOL_HEAD.at, HOL_HEAD.rot, HOL_HEAD.scale)
  const [dx, dy] = DOVE
  const [fx, fy] = FLAME
  const x = HK.x
  return (
    <>
      <g className="lc-push" style={timing({ origin: [440, 170], push: 1.03 })}>
        {/* the hangings, lit by the dove lamp, looped back in two places */}
        <path d={m.recess} fill={PAPER} />
        <Painting x={290} y={70} w={52} h={46} />
        <Vase cx={630} foot={FLOOR} />
        <path d={m.folds} fill={PAPER} />
        <path d={m.edges} fill="none" stroke={PAPER} strokeWidth={LINE.carve} />
        {ALCOVES.map((a) =>
          ([-1, 1] as const).map((s) => (
            <TieBack key={`${a.cx}${s}`} x={a.cx + s * (a.half + 2)} y={a.tie} side={s} />
          )),
        )}
        {/* the pelmet the hangings fall from */}
        <rect x={0} y={0} width={W} height={16} fill={INK} />
        <path
          d={Array.from(
            { length: 21 },
            (_, i) => `M${i * 43 - 6} 12Q${i * 43 + 15.5} 24 ${i * 43 + 37} 12`,
          ).join('')}
          fill="none"
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d={`M0 6H${W}`} stroke={PAPER} strokeWidth={1} />

        {/* the carpet, amber-and-black */}
        <rect x={0} y={FLOOR} width={W} height={2.4} fill={PAPER} />
        <path d={m.carpet} fill={PAPER} />
        <path d={m.lozenges} fill="none" stroke={PAPER} strokeWidth={1.3} strokeLinejoin="round" />

        {/* "A lamp in the fashion of a silver dove", on its golden wire */}
        <path d={m.rays} fill={PAPER} />
        <path d={`M${dx - 2} 16V${dy - 8}`} stroke={PAPER} strokeWidth={LINE.hairline} />
        <path
          d={`M${dx - 22} ${dy - 2}C${dx - 14} ${dy - 10} ${dx + 4} ${dy - 12} ${dx + 16} ${dy - 8}C${dx + 18} ${dy - 14} ${dx + 26} ${dy - 16} ${dx + 30} ${dy - 10}L${fx - 1} ${fy + 3}L${dx + 28} ${dy - 5}C${dx + 26} ${dy + 4} ${dx + 12} ${dy + 10} ${dx - 4} ${dy + 9}C${dx - 14} ${dy + 9} ${dx - 22} ${dy + 6} ${dx - 30} ${dy + 8}L${dx - 34} ${dy}Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.4}
          strokeLinejoin="round"
        />
        <path
          d={`M${dx - 10} ${dy - 3}Q${dx + 2} ${dy - 6} ${dx + 12} ${dy - 2}M${dx - 8} ${dy + 1}Q${dx + 2} ${dy - 1} ${dx + 10} ${dy + 2}M${dx - 30} ${dy + 4}L${dx - 20} ${dy + 3}`}
          fill="none"
          stroke={INK}
          strokeWidth={0.9}
        />
        <circle cx={dx + 24} cy={dy - 10} r={1.2} fill={INK} />
        <path
          className="lc-flicker"
          d={`M${fx} ${fy + 4}C${fx - 4} ${fy} ${fx - 2} ${fy - 5} ${fx + 1} ${fy - 11}C${fx + 4} ${fy - 5} ${fx + 5} ${fy} ${fx} ${fy + 4}Z`}
          fill={RED}
        />

        {/* Mary's chair, and Mary, deadly white, the glass in her hand */}
        <path d="M184 232L180 300M254 232L258 300" stroke={INK} strokeWidth={4.4} />
        <path
          d="M176 232V148H184V232ZM172 150H188V158H172ZM176 226H262V233H176Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <Mary uid={uid} {...MARY} cloak pale />
        <path
          d="M242.6 176.6L251.8 176L250.6 190.4L243.6 190.8Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.2}
        />
        <path d="M243.2 182.4L251.2 181.8" stroke={INK} strokeWidth={0.8} />
        <PaperHands hands={[{ parts: GRIP_HAND, t: handAt(MARY.near.arm, 1, MARY.near.hand) }]} />

        {/* Watson at her side, the Venetian carafe in his hand */}
        <Figure parts={WATSON}>
          <path d={WATSON_CUTS + WATSON_HAIR + COLLAR} transform={wt} fill={PAPER} />
          <path d={WATSON_PUPIL} transform={wt} fill={INK} />
          <path d={gouge(114, 160, 106, 222, 0.9, 1.2)} fill={PAPER} />
        </Figure>
        <path
          d="M145.4 174H156.6L154 178V190C164 196 166 214 160 222C157 226 145 226 142 222C136 214 138 196 148 190V178Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.4}
          strokeLinejoin="round"
        />
        <path
          d="M148.4 196Q147 210 145.6 222M151 194V224M153.6 196Q155 210 156.4 222"
          fill="none"
          stroke={INK}
          strokeWidth={0.8}
        />
        <Figure parts={WATSON.slice(-1)} />

        {/* the low settee */}
        <path
          d="M372 258V214Q372 204 382 204H514Q524 204 524 214V258Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d={gouge(384, 214, 512, 214, 0.9) + gouge(384, 230, 512, 230, 0.7)} fill={PAPER} />
        <path
          d="M360 260Q360 252 368 252H526Q534 252 534 260V294H360Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d={gouge(366, 262, 528, 262, 0.8)} fill={PAPER} />
        <path
          d={Array.from({ length: 21 }, (_, i) => `M${364 + i * 8} 288V297`).join('')}
          stroke={PAPER}
          strokeWidth={1.6}
        />

        {/* Thaddeus, the mouthpiece at his lips, the other hand held open to them */}
        <Figure parts={THADDEUS}>
          <g transform={tt}>
            <path d={THADDEUS_SCALP} fill={PAPER} />
            <path d={THADDEUS_SCALP_LINE} fill="none" stroke={INK} strokeWidth={0.9} />
            <path d={THADDEUS_FRINGE} fill={RED} />
            <path d={THADDEUS_CUTS + COLLAR} fill={PAPER} />
            <path d={THADDEUS_PUPIL} fill={INK} />
          </g>
        </Figure>

        {/* the huge hookah on its mat: the glass of rose-water, the stem, the great bowl */}
        <ellipse cx={x} cy={HK.mat} rx={40} ry={6} fill={PAPER} stroke={INK} strokeWidth={1.2} />
        <path
          d={Array.from(
            { length: 9 },
            (_, i) => `M${x - 40 + i * 10} ${HK.mat + 5}V${HK.mat + 10}`,
          ).join('')}
          stroke={PAPER}
          strokeWidth={1.4}
        />
        <path
          d={`M${x - 10} ${HK.mat}C${x - 32} ${HK.mat - 2} ${x - 37} ${HK.mat - 20} ${x - 30} ${HK.mat - 33}C${x - 25} ${HK.mat - 42} ${x - 16} ${HK.mat - 46} ${x - 8} ${HK.mat - 48}V${HK.mat - 56}H${x + 8}V${HK.mat - 48}C${x + 16} ${HK.mat - 46} ${x + 25} ${HK.mat - 42} ${x + 30} ${HK.mat - 33}C${x + 37} ${HK.mat - 20} ${x + 32} ${HK.mat - 2} ${x + 10} ${HK.mat}Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.bold}
        />
        <path
          d={`M${x - 33} ${HK.mat - 24}Q${x} ${HK.mat - 20} ${x + 33} ${HK.mat - 24}`}
          fill="none"
          stroke={INK}
          strokeWidth={1}
        />
        <g fill="none" stroke={INK} strokeWidth={0.9}>
          {(
            [
              [-4, -11, 2.2],
              [5, -15, 1.6],
              [-1, -18, 1.2],
              [8, -8, 1.4],
            ] as [number, number, number][]
          ).map(([bx, by, br]) => (
            <circle key={bx} cx={x + bx} cy={HK.mat + by} r={br} />
          ))}
        </g>
        <path d={`M${x - 3} ${HK.mat - 4}V${HK.mat - 56}`} stroke={INK} strokeWidth={1.4} />
        <rect
          x={x - 4.5}
          y={170}
          width={9}
          height={HK.mat - 56 - 170}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        {[226, 204, 186].map((ky) => (
          <ellipse
            key={ky}
            cx={x}
            cy={ky}
            rx={8}
            ry={4}
            fill={INK}
            stroke={PAPER}
            strokeWidth={LINE.fine}
          />
        ))}
        <ellipse
          cx={x}
          cy={172}
          rx={18}
          ry={4}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={`M${x - 12} 168L${x - 9} 152H${x + 9}L${x + 12} 168Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <ellipse className="lc-glow" cx={x} cy={152} rx={8} ry={2.6} fill={RED} />
        {m.smoke.map((d, k) => (
          <path
            key={k}
            className="lc-rise"
            style={timing({ delay: 0.6 + k * 0.5, dur: 1.4 })}
            d={d}
            fill={PAPER}
          />
        ))}

        {/* the long tube, over the floor and up to the mouthpiece in his hand */}
        <path d={TUBE} fill="none" stroke={INK} strokeWidth={6.6} strokeLinecap="round" />
        <path
          d={TUBE}
          fill="none"
          stroke={PAPER}
          strokeWidth={3.4}
          strokeLinecap="round"
          strokeDasharray="5 2"
        />
        <Figure parts={TH_FAR_HAND} />
        <path d="M413 184L419 175" stroke={PAPER} strokeWidth={4.8} strokeLinecap="round" />
        <path d="M413 184L419 175" stroke={INK} strokeWidth={2.6} strokeLinecap="round" />
        <Figure parts={TH_NEAR_ARM} />

        {/* Holmes's chair, and Holmes, leaning back */}
        <path d="M690 258L686 312M778 258L782 312" stroke={INK} strokeWidth={4.4} />
        <path
          d="M772 258L780 144Q782 132 792 134L796 258Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d="M684 250H798V259H684Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <Figure parts={HOLMES}>
          <path d={HOLMES_LIDDED + HOLMES_HAIR + COLLAR} transform={ht} fill={PAPER} />
        </Figure>
        <HolmesHands
          facing={-1}
          arms={[
            { arm: HOL_FAR, hand: { parts: LONG_HAND, scale: 1.05, rot: 6 } },
            { arm: HOL_NEAR, hand: { parts: LONG_HAND, scale: 1.1, rot: 4 } },
          ]}
        />
      </g>
    </>
  )
}

export const thaddeusSholtosStory: LinocutArt = {
  width: W,
  height: H,
  Draw: ThaddeusSholtosStory,
}
