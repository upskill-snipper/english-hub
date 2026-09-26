import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  deg,
  gouge,
  n,
  rng,
  wedge,
  type Pt,
  type Rng,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Hand, handPaths } from '../portraits/hands'
import { footShadow } from './confession-kit'
import {
  Figure,
  HEAD_HYDE,
  HYDE_FACE,
  HYDE_HAIR,
  HYDE_LINES,
  headAt,
  type P,
  type Part,
} from './people'

/**
 * Chapter 10: "Losing control", the thirteenth moment in the guide's
 * timeline: the day the change comes on Jekyll unbidden, in public, and he
 * cannot change back without help. Every detail is from his statement:
 *
 * - "It was a fine, clear, January day, wet under foot where the frost had
 *   melted, but cloudless overhead; and the Regent's Park was full of winter
 *   chirrupings and sweet with spring odours. I sat in the sun on a bench".
 *   So the sky is bare and bright, with the low winter sun in the spot
 *   colour; the trees are bare, and birds sit singing in them; the gravel
 *   path is wet, with puddles standing on it.
 * - "I looked down; my clothes hung formlessly on my shrunken limbs; the hand
 *   that lay on my knee was corded and hairy. I was once more Edward Hyde."
 *   So a small man sits on the bench in a gentleman's clothes that swamp him:
 *   the coat heaped round him, the collar standing off his neck, the
 *   trousers hanging past his feet, which do not reach the ground. No hat is
 *   drawn, because the passage names none; his plain dark hair is cut into
 *   the bare head (HYDE_HAIR in ./people.tsx), which without it read as a
 *   hood at phone width. He looks down at his own hand on
 *   his knee, drawn large and pale, its knuckles and cords cut in ink and
 *   "thickly shaded with a swart growth of hair", with the same hand tool as
 *   the Hyde portrait (../portraits/hands.tsx).
 *
 * His face is the pale face of every panel (HydeFace in ./people.tsx), but
 * without the smile, and with the eye lowered to the hand: this is the moment
 * he finds himself changed. The quotation is Jekyll's own reading of what
 * these changes mean, from the same statement, a few paragraphs earlier (the
 * morning he first woke as Hyde). The spot colour is the sun and nothing
 * else. Nothing is taken from a film or stage production. Seeds: 1301
 * (sky), 1302 (grass), 1303 (path), 1304 (hair on the hand), 1305
 * (trees).
 */

const W = 860
const H = 340
const HORIZON = 214
const PATH_TOP = 300

/** The sun, low in the January sky. */
const SUN: P = [250, 66]

type Marks = {
  sky: string
  distant: string
  grass: string
  path: string
  puddles: string
  ripples: string
  trees: string
  twigs: string
  birds: Pt[]
  shadows: string
  handHair: string
  cords: string
}

/**
 * A bare tree: a trunk, then limbs forking up and out, each a tapering wedge,
 * ending in fine twigs. Returns the tips, where a bird can perch.
 */
function bareTree(r: Rng, x: number, base: number, trunk: number, limb: number, lean: number) {
  let d = ''
  let twigs = ''
  const tips: Pt[] = []
  const grow = (x0: number, y0: number, a: number, len: number, w: number, depth: number) => {
    const x1 = x0 + Math.cos(a) * len
    const y1 = y0 + Math.sin(a) * len
    d += wedge(x0, y0, x1, y1, w, w * 0.66)
    if (depth === 0) {
      twigs += `M${n(x1)} ${n(y1)}l${n(Math.cos(a - 0.45) * 10)} ${n(Math.sin(a - 0.45) * 10)}M${n(x1)} ${n(y1)}l${n(Math.cos(a + 0.4) * 8)} ${n(Math.sin(a + 0.4) * 8)}`
      tips.push([x1, y1])
      return
    }
    const k = depth > 2 ? 2 : 2 + (r() < 0.5 ? 1 : 0)
    for (let i = 0; i < k; i++) {
      const spread = (i - (k - 1) / 2) * between(r, 0.62, 0.9)
      grow(
        x1,
        y1,
        a + spread + between(r, -0.15, 0.15),
        len * between(r, 0.68, 0.8),
        w * 0.64,
        depth - 1,
      )
    }
  }
  d += wedge(x, base, x + lean, base - trunk, 17, 12)
  grow(x + lean, base - trunk, deg(-90) + between(r, -0.08, 0.08), limb, 12, 4)
  return { d, twigs, tips }
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // "cloudless overhead": the bare sky lit from the sun, cut as broken rays.
  const r = rng(1301)
  let sky = ''
  for (let a = 0; a < 360; a += 9) {
    const t = deg(a + between(r, -2, 2))
    let rad = between(r, 36, 48)
    while (rad < 420) {
      const len = between(r, 14, 36)
      const x0 = SUN[0] + Math.cos(t) * rad
      const y0 = SUN[1] + Math.sin(t) * rad
      if (y0 > HORIZON - 16 || x0 < 0 || x0 > W || y0 < 0) break
      sky += gouge(
        x0,
        y0,
        SUN[0] + Math.cos(t) * (rad + len),
        SUN[1] + Math.sin(t) * (rad + len),
        clamp(0.35 + rad / 500, 0.35, 1.1),
      )
      rad += len + between(r, 12, 28) + rad * 0.1
    }
  }
  // A far line of trees along the edge of the park: a low dark band.
  let distant = `M0 ${HORIZON + 8}`
  for (let x = 0; x <= W; x += 10)
    distant += `L${x} ${n(HORIZON - 10 - 8 * Math.abs(Math.sin(x / 37)) - 5 * Math.abs(Math.sin(x / 13)))}`
  distant += `L${W} ${HORIZON + 8}Z`

  // The lawn in the sun: paper, with single blades of grass cut in ink,
  // scattered, closer together and shorter towards the far trees.
  const g = rng(1302)
  let grass = ''
  for (let i = 0; i < 520; i++) {
    const depth = Math.pow(g(), 0.8)
    const y = HORIZON + 12 + depth * (PATH_TOP - HORIZON - 14)
    const x = between(g, 0, W)
    const h = 2 + depth * 5.5
    grass += `M${n(x)} ${n(y)}l${n(between(g, -1.6, 1.6))} ${n(-h)}`
  }
  // The gravel path, and the puddles where the frost has melted: dark, with
  // the bright sky caught on them in ripples.
  const p = rng(1303)
  let path = ''
  for (let y = PATH_TOP + 7; y < H - 4; y += 6) {
    let x = between(p, -10, 10)
    while (x < W) {
      path += gouge(
        x,
        y + between(p, -1, 1),
        x + between(p, 2, 6),
        y + between(p, -1, 1),
        0.6 + (y - PATH_TOP) * 0.01,
      )
      x += between(p, 14, 36)
    }
  }
  const pools: [number, number, number, number][] = [
    [160, 324, 58, 6],
    [338, 314, 30, 3.8],
    [724, 326, 66, 7],
  ]
  let puddles = ''
  let ripples = ''
  for (const [cx, cy, rx, ry] of pools) {
    puddles += `M${cx - rx} ${cy}C${cx - rx} ${n(cy - ry * 1.3)} ${cx + rx} ${n(cy - ry * 1.3)} ${cx + rx} ${cy}C${cx + rx} ${n(cy + ry * 1.2)} ${cx - rx} ${n(cy + ry * 1.2)} ${cx - rx} ${cy}Z`
    for (let k = -1; k <= 1; k++)
      ripples += gouge(
        cx - rx * 0.6 + k * 8,
        cy + k * ry * 0.45,
        cx + rx * 0.5 + k * 6,
        cy + k * ry * 0.45 + 0.4,
        0.8,
      )
  }

  const t = rng(1305)
  const left = bareTree(t, 70, PATH_TOP - 4, 104, 52, -3)
  const right = bareTree(t, 810, PATH_TOP - 2, 92, 40, 4)
  // birds on three twigs well inside the block: two in the left tree's
  // crown, one in the right tree's
  const perch = (tips: Pt[], [tx, ty]: Pt) =>
    tips.reduce((a, b) =>
      Math.hypot(b[0] - tx, b[1] - ty) < Math.hypot(a[0] - tx, a[1] - ty) ? b : a,
    )
  const birds = [
    perch(left.tips, [44, 118]),
    perch(left.tips, [118, 84]),
    perch(right.tips, [780, 150]),
  ]
  const shadows = footShadow(534, PATH_TOP + 20, 150)

  // "thickly shaded with a swart growth of hair": short fine strokes over the
  // back of the hand, in the hand's own frame (see HAND below).
  const hr = rng(1304)
  let handHair = ''
  for (let i = 0; i < 44; i++) {
    const x = between(hr, 5, 27)
    const y = between(hr, 1, 28)
    const a = deg(between(hr, -25, 15))
    handHair += `M${n(x)} ${n(y)}l${n(Math.cos(a) * 3.8)} ${n(Math.sin(a) * 3.8)}`
  }
  let cords = ''
  for (const [kx, ky] of [
    [26, -1],
    [29, 8],
    [29.5, 17],
    [27, 25.5],
  ])
    cords += `M4 ${n(10 + ky * 0.35)}Q${n(15)} ${n((10 + ky * 0.35 + ky) / 2)} ${n(kx)} ${n(ky)}`

  cached = {
    sky,
    distant,
    grass,
    path,
    puddles,
    ripples,
    trees: left.d + right.d,
    twigs: left.twigs + right.twigs,
    birds,
    shadows,
    handHair,
    cords,
  }
  return cached
}

/** A small bird perched on a twig, beak open, facing right: about 16 long. */
const BIRD =
  'M-8 1C-8 -3 -4 -6 1 -5.4C2 -8.4 5.6 -9.6 8.4 -7.4L12.4 -8.4L9.6 -6L12.6 -4.6L9 -4.4C8.4 -1 5.6 2.4 0.6 2.6L-3.4 2.8L-10 6.6L-7 1.6Z'
const BIRD_LEGS = 'M-0.6 2.4L-1.2 6M1.6 2.4L1.8 6'
/** Its song: two short arcs before the open beak. */
const SONG = 'M14.6 -9.6Q16.6 -7 14.8 -4.4M17.6 -11Q20.6 -7 17.8 -3'

// ── The bench ──────────────────────────────────────────────────────────────

const BENCH_IRON = [
  // the two iron ends: a back upright curling over, a front leg, and feet
  'M430 204C424 204 422 210 426 214L432 262H442L436 212C436 207 434 204 430 204Z',
  'M428 262H446L440 316H448V320H424V316H432Z',
  'M626 204C620 204 618 210 622 214L628 262H638L632 212C632 207 630 204 626 204Z',
  'M624 262H642L636 316H644V320H620V316H628Z',
]
/** The wooden slats of the seat and the back. */
const SLATS = ['M420 256H650V266H420Z', 'M424 232H646V240H424Z', 'M426 216H644V224H426Z']

// ── Hyde, on the bench ─────────────────────────────────────────────────────

const HEAD = { d: HEAD_HYDE, at: [494, 176] as P, rot: 20, scale: 1.1 }
const HEAD_T = headAt(1, HEAD.at, HEAD.rot, HEAD.scale)
const HYDE: Part[] = [
  // the far leg, a little behind, the trouser hanging past the foot
  { d: 'M512 264L516 288L515 312', w: 12 },
  // the coat heaped round him on the seat, and over his lap to the knee
  {
    d: 'M468 196C454 204 448 222 449 246L450 272L462 276L526 272C533 270 534 258 527 254L504 250C501 234 499 218 496 206C490 200 480 194 468 196Z',
  },
  // the near leg, from the knee down, the trouser too long
  { d: 'M526 266L530 290L529 313', w: 12.5 },
  // "the collar": standing off his neck
  { d: 'M454 206L466 192L482 186L502 194L504 205L490 200L476 199L462 212Z', sep: 1.6 },
  { d: 'M482 190L480 202', w: 8 },
  { d: HEAD.d, t: HEAD_T },
  // the near arm, the sleeve too long, down to the hand on his knee
  { d: 'M488 206L489 232L499 246', w: 12, sep: 1.4 },
  { d: 'M492.4 237.4L503.6 240.6L501.4 254L490.4 251.4Z', sep: 1.2 },
]
const HYDE_CUTS =
  gouge(460, 214, 456, 266, 1, 1) +
  gouge(472, 212, 470, 268, 0.9, 0.6) +
  // the top of the thigh under the coat, and the folds of the hanging trousers
  gouge(504, 252.6, 526, 256, 0.7, -0.4) +
  gouge(514, 300, 517, 311, 0.6) +
  gouge(527, 300, 531, 311, 0.6)

/**
 * "the hand that lay on my knee was corded and hairy": drawn in its own frame
 * (the wrist at the left, the fingers towards +x, curling down over the
 * knee) with the portrait's hand tool, then laid on his knee.
 */
const HAND = handPaths({
  wrist: [
    [0, 0],
    [3, 30],
  ],
  knuckles: [
    [26, -1],
    [29, 8],
    [29.5, 17],
    [27, 25.5],
  ],
  tips: [
    [42, 12],
    [44, 21],
    [42.5, 29.5],
    [37.5, 35],
  ],
  width: [5.4, 5.6, 5.4, 4.8],
  bow: [3, 2.6, 2.2, 1.8],
  thumb: { root: [6, -1], tip: [25, -8], width: 5.6, bow: -2 },
})
const HAND_AT = 'translate(499 238) rotate(8) scale(0.66)'

/**
 * The bench and the man are drawn at the size above, then brought closer as
 * a group about the bench's feet, so that his hand is large enough to read at
 * phone width.
 */
const CLOSER = 'translate(535 320) scale(1.3) translate(-535 -320)'

/**
 * His brow, as HYDE_BROW_EYE in ./people.tsx cuts it. The eye under it is
 * drawn lowered and a little apart from the brow, because at this size the
 * rough edge of the print closes the shared eye up against the brow into one
 * dark bar, and the reader must see him looking down at his hand.
 */
const HYDE_BROW = gouge(4.5, -8.6, 18, -6.6, 1.5, -0.4)

function Bird({ at, flip = false }: { at: Pt; flip?: boolean }) {
  return (
    <g transform={`translate(${n(at[0])} ${n(at[1] - 6)}) scale(${flip ? -1 : 1} 1)`}>
      <path d={BIRD} fill={INK} />
      <path
        d={BIRD_LEGS + SONG}
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
        strokeLinecap="round"
      />
    </g>
  )
}

function LosingControl(_props: ArtProps) {
  const m = marks()
  return (
    <>
      <g className="lc-push" style={timing({ origin: [510, 230], push: 1.03 })}>
        {/* "cloudless overhead": a bare bright sky, and the low sun */}
        <rect x={0} y={0} width={W} height={HORIZON} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        <circle cx={SUN[0]} cy={SUN[1]} r={22} fill={RED} className="lc-glow" />

        {/* the far trees of the park, and the lawn */}
        <path d={m.distant} fill={INK} />
        <rect x={0} y={HORIZON + 6} width={W} height={PATH_TOP - HORIZON - 6} fill={PAPER} />
        <path d={m.grass} stroke={INK} strokeWidth={1.1} strokeLinecap="round" fill="none" />

        {/* the wet gravel path, and the puddles where the frost has melted */}
        <rect x={0} y={PATH_TOP} width={W} height={H - PATH_TOP} fill={PAPER} />
        <path d={gouge(0, PATH_TOP + 1, W, PATH_TOP + 1, 1.4)} fill={INK} />
        <path d={m.path} fill={INK} />
        <path d={m.shadows} fill={INK} />
        <path d={m.puddles} fill={INK} />
        <path d={m.ripples} fill={PAPER} />

        {/* bare January trees, and the birds singing in them */}
        <path d={m.trees} fill={INK} />
        <path d={m.twigs} stroke={INK} strokeWidth={LINE.fine} fill="none" strokeLinecap="round" />
        <Bird at={m.birds[0]} />
        <Bird at={m.birds[1]} flip />
        <Bird at={m.birds[2]} flip />

        {/* the bench, and the small man on it, drawn larger so the hand reads on a phone */}
        <g transform={CLOSER}>
          <g fill={INK} stroke={PAPER} strokeWidth={1.4} strokeLinejoin="round">
            {SLATS.map((d) => (
              <path key={d} d={d} />
            ))}
            {BENCH_IRON.map((d) => (
              <path key={d} d={d} />
            ))}
          </g>

          {/* the small man in Jekyll's clothes, looking down at his hand */}
          <Figure parts={HYDE} cuts={HYDE_CUTS}>
            <g transform={HEAD_T}>
              {/* his hair, so the bare black head does not read as a hood */}
              <path d={HYDE_HAIR} fill={PAPER} />
              <path
                d={HYDE_FACE}
                fill={PAPER}
                stroke={INK}
                strokeWidth={1.2}
                strokeLinejoin="round"
              />
              {/* the brow, and the eye lowered to look at the hand */}
              <path d={HYDE_BROW} fill={INK} />
              <path d="M9.4 -2Q12.2 -3.6 14.8 -1.8Q12.2 -0.8 9.4 -2Z" fill={INK} />
              <path
                d="M5 10.8Q10.6 8.2 16.4 10.4"
                fill="none"
                stroke={INK}
                strokeWidth={1.4}
                strokeLinecap="round"
              />
              <path
                d={HYDE_LINES}
                fill="none"
                stroke={INK}
                strokeWidth={0.9}
                strokeLinecap="round"
              />
            </g>
          </Figure>
          <g transform={HAND_AT}>
            <Hand paths={HAND} knuckly>
              <g stroke={INK} fill="none">
                <path d={m.cords} strokeWidth={LINE.fine} />
                <path d={m.handHair} strokeWidth={LINE.fine} />
              </g>
            </Hand>
          </g>
        </g>
      </g>
    </>
  )
}

export const losingControl: LinocutArt = { width: W, height: H, Draw: LosingControl }
