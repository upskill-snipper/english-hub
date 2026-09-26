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
  wedge,
  type Pt,
  type Rng,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  arm,
  CutFigure,
  doublet,
  EYE,
  gown,
  HEAD_GIRL,
  HEAD_MAN,
  headAt,
  JULIET_FACE,
  JULIET_HAIR,
  JULIET_STRANDS,
  limb,
  ROMEO_CURLS,
  ROMEO_HAIR,
  sheathed,
  shoe,
  type P,
  type Piece,
} from './verona-kit'

/**
 * Act 2, Scene 2: "The balcony", the sixth moment in the guide's timeline.
 * Every detail is from the scene in the held edition (Project Gutenberg
 * #1513, src/data/full-texts/romeo-and-juliet.ts):
 *
 * - "Capulet's Garden." "Juliet appears above at a window." The text gives her
 *   a window, not a balcony (the name the scene is known by), so she leans
 *   out of an arched window high in the dark wall of the house.
 * - "But soft, what light through yonder window breaks? It is the east, and
 *   Juliet is the sun!" So the window is the one warm light in the picture,
 *   printed in the spot colour, its light cut in rays across the wall, and
 *   Juliet is cut in paper against it.
 * - "See how she leans her cheek upon her hand." So she leans on the sill,
 *   her cheek on her hand.
 * - "Arise fair sun and kill the envious moon, Who is already sick and pale
 *   with grief". "Lady, by yonder blessed moon I vow, That tips with silver
 *   all these fruit-tree tops". So a pale moon, shadowed across its face,
 *   hangs over the orchard, and the tops of the fruit trees are cut white
 *   where it touches them. "Two of the fairest stars in all the heaven"
 *   twinkle between the moon and her.
 * - "The orchard walls are high and hard to climb", "With love's light wings
 *   did I o'erperch these walls", "I have night's cloak to hide me from their
 *   eyes". So a high wall runs behind Romeo, pale in the moonlight, and he
 *   stands black against it in the orchard below her, looking up, one hand
 *   on his heart and the other held out to her, open.
 * - The Nurse only calls from within ("Nurse calls within"), so she is not
 *   drawn.
 *
 * Romeo and Juliet are cut as in the other panels of moments 6 to 10
 * (./verona-kit.tsx). Nothing is taken from a film or stage production.
 * Seeds: 601 (sky), 602 (wall), 603 (trees), 604 (ground), 605 and 606 (the
 * house and the window's light).
 */

const W = 860
const H = 340
/** Where the orchard wall and the house stand on the ground. */
const GROUND = 272
const WALL_TOP = 128
/** The house front begins here. */
const HOUSE_X = 566
const MOON: P = [298, 50]
/** Juliet's window: its sill, its sides and the centre of its arch. */
const WIN = { x0: 648, x1: 764, sill: 140, spring: 80 }
const WIN_R = (WIN.x1 - WIN.x0) / 2
const WIN_CX = (WIN.x0 + WIN.x1) / 2
const WIN_OPEN = `M${WIN.x0} ${WIN.sill}V${WIN.spring}A${WIN_R} ${WIN_R} 0 0 1 ${WIN.x1} ${WIN.spring}V${WIN.sill}Z`

type Crown = { d: string; rim: string; leaves: string; fruit: Pt[] }
type Marks = {
  sky: string
  wallShade: string
  joints: string
  house: string
  light: string
  ground: string
  near: Crown
  far: Crown
  bark: string
}

/**
 * A fruit tree's crown: a scalloped mass of leaf, cut white where the moon
 * touches it, most of all along the edge that faces the moon.
 */
function crown(r: Rng, cx: number, cy: number, rx: number, ry: number): Crown {
  const k = 19
  const at = (t: number, f: number): Pt => [cx + Math.cos(t) * rx * f, cy + Math.sin(t) * ry * f]
  const radii = Array.from({ length: k }, () => between(r, 0.93, 1.05))
  let d = ''
  // "tips with silver all these fruit-tree tops": a white cut under the edge
  // of every cluster of leaves along the top, and a thinner one below it.
  let rim = ''
  for (let i = 0; i <= k; i++) {
    const t = (i / k) * Math.PI * 2
    const p = at(t, radii[i % k])
    if (i === 0) d += `M${n(p[0])} ${n(p[1])}`
    else {
      const tm = ((i - 0.5) / k) * Math.PI * 2
      const c = at(tm, 1.17)
      d += `Q${n(c[0])} ${n(c[1])} ${n(p[0])} ${n(p[1])}`
      const top = clamp(-Math.sin(tm) * 1.3 - 0.15)
      if (top > 0) {
        const t0 = ((i - 1) / k) * Math.PI * 2
        const a0 = at(t0, radii[i - 1] * 0.95)
        const a1 = at(t, radii[i % k] * 0.95)
        rim += gouge(a0[0], a0[1], a1[0], a1[1], 1 + top * 2.3, -3.4)
        const b0 = at(t0 + 0.05, radii[i - 1] * 0.84)
        const b1 = at(t - 0.05, radii[i % k] * 0.84)
        if (top > 0.4) rim += gouge(b0[0], b0[1], b1[0], b1[1], 0.6 + top * 1.2, -2.6)
      }
    }
  }
  d += 'Z'
  // Towards the moon, as a unit vector from the crown's centre.
  // The light falls from the moon and from above: the tops are cut whitest.
  const ml0 = Math.hypot(MOON[0] - cx, MOON[1] - cy)
  const mx = ((MOON[0] - cx) / ml0) * 0.45
  const my = ((MOON[1] - cy) / ml0) * 0.45 - 0.55
  const ml = Math.hypot(mx, my)
  let leaves = ''
  for (let i = 0; i < 320; i++) {
    const t = between(r, 0, Math.PI * 2)
    const f = Math.sqrt(between(r, 0.02, 1)) * 0.96
    const [x, y] = at(t, f)
    const facing = (Math.cos(t) * mx + Math.sin(t) * my) / ml
    const L = clamp((0.2 + facing * 0.85) * (0.1 + f * f * 1.05))
    if (r() > L) continue
    const a = t + Math.PI / 2 + between(r, -0.5, 0.5)
    const len = between(r, 4, 9) * (0.7 + L * 0.6)
    leaves += gouge(x, y, x + Math.cos(a) * len, y + Math.sin(a) * len, 0.45 + L * 1.3)
  }
  const fruit: Pt[] = []
  for (let i = 0; i < 6; i++) fruit.push(at(between(r, 0.3, Math.PI * 2), between(r, 0.3, 0.72)))
  return { d, rim, leaves, fruit }
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The night sky, lit round the pale moon.
  const sky = gougeField(
    rng(601),
    { x0: 0, x1: HOUSE_X, y0: 4, y1: WALL_TOP },
    (x, y) => Math.max(clamp(1 - Math.hypot(x - MOON[0], (y - MOON[1]) * 1.3) / 230) * 0.78, 0.03),
    { spacing: 6.4, len: [26, 90], gap: [8, 26], max: 3 },
  )

  // The orchard wall, pale in the moonlight, darkening towards the house.
  const w = rng(602)
  const wallShade = gougeField(
    w,
    { x0: 0, x1: HOUSE_X, y0: WALL_TOP + 8, y1: GROUND },
    (x, y) =>
      clamp(
        0.06 + Math.max(0, (x - 300) / 330) * 0.85 + Math.max(0, (90 - x) / 200) + (y - 150) / 520,
      ),
    { spacing: 5.4, len: [18, 60], gap: [4, 14], max: 2.4 },
  )
  let joints = ''
  let row = 0
  for (let y = WALL_TOP + 30; y < GROUND - 4; y += 27, row++) {
    joints += gouge(0, y, HOUSE_X, y + between(w, -0.6, 0.6), 0.9)
    for (let x = (row % 2) * 34 + between(w, 0, 14); x < HOUSE_X; x += between(w, 62, 86))
      joints += wedge(x, y - 26, x + between(w, -1, 1), y, 1.1, 0.9)
  }

  // The house front: dark stone, faintly lit by the moon and the window.
  const house = gougeField(
    rng(605),
    { x0: HOUSE_X, x1: W, y0: 4, y1: H },
    (x, y) =>
      Math.max(
        clamp(0.3 - (x - HOUSE_X) / 500),
        clamp(1 - Math.hypot(x - WIN_CX, (y - 96) * 0.8) / 150) * 0.4,
        0.03,
      ),
    { spacing: 7, len: [16, 40], gap: [4, 10], max: 2.2 },
  )
  // "what light through yonder window breaks?"
  const light = rays(rng(606), WIN_CX, 92, { from: 72, to: 196, every: 6.5, width: 3.2 })

  // The grass of the orchard, lit by the moon.
  const ground = gougeField(
    rng(604),
    { x0: 0, x1: W, y0: GROUND + 3, y1: H },
    (x, y) => clamp(0.42 - (y - GROUND) / 260 - Math.max(0, x - 520) / 500),
    { spacing: 5.2, len: [8, 30], gap: [4, 14], max: 2.2 },
  )

  const t = rng(603)
  const near = crown(t, 140, 116, 104, 62)
  const far = crown(t, 468, 116, 60, 42)
  let bark = ''
  for (let y = 186; y < 300; y += between(t, 9, 15))
    bark += gouge(150 + between(t, -2, 2), y, 152 + between(t, -2, 2), y + between(t, 8, 16), 0.7)

  cached = { sky, wallShade, joints, house, light, ground, near, far, bark }
  return cached
}

// ── Romeo, below, facing right and looking up ────────────────────────────────

const R_NECK: P = [360, 170]
const R_HIP: P = [352, 238]
const R_HEAD = { at: [367, 146] as P, rot: -27 }
/** Romeo stands further off than he is drawn: scaled about his feet. */
const ROMEO_AT = 'translate(352 312) scale(0.88) translate(-352 -312)'
const R_SWORD = sheathed([350, 232], 1, 78)
const ROMEO: Piece[] = [
  // the short cloak hanging from his back shoulder
  {
    d: 'M350 166C340 172 332 192 328 216C325 234 324 246 326 256L344 252C342 234 344 210 350 190Z',
  },
  {
    d: limb([
      [349, 238],
      [342, 276],
      [338, 310],
    ]),
    w: 9,
  },
  shoe([338, 311], 1),
  R_SWORD.scabbard,
  { d: limb([R_NECK, R_HIP]), w: 22 },
  { d: doublet(R_NECK, R_HIP, 1, { width: 28, hem: 16, flare: 6 }) },
  {
    d: limb([
      [355, 238],
      [362, 276],
      [366, 310],
    ]),
    w: 9,
  },
  shoe([367, 311], 1),
  { d: HEAD_MAN, t: headAt(1, R_HEAD.at, R_HEAD.rot) },
  { d: ROMEO_HAIR, t: headAt(1, R_HEAD.at, R_HEAD.rot) },
  // the far hand laid on his heart, lifted off the doublet by its own edge
  arm(
    [
      [356, 180],
      [366, 208],
      [376, 196],
    ],
    -118,
    { w: 7.5, sep: 1.4, size: 13, spread: 12, thumb: -1 },
  ),
  // the near hand held out to her, open, at the height of his shoulder
  arm(
    [
      [366, 180],
      [385, 194],
      [404, 182],
    ],
    -34,
    { w: 8, sep: 1.5, size: 15, spread: 16, thumb: -1 },
  ),
]
const ROMEO_CUTS =
  gouge(344, 196, 334, 250, 0.9, 0.6) +
  gouge(348, 226, 366, 227, 0.8) +
  gouge(340, 240, 346, 252, 0.7)

// ── Juliet, at the window, facing left, her cheek on her hand ─────────────────

const J_HEAD = { at: [698, 90] as P, rot: -8 }
const J_NECK: P = [706, 114]
const JULIET: Piece[] = [
  { d: gown(J_NECK, [720, 162], 230, -1, { shoulder: 26, waistW: 18 }) },
  { d: HEAD_GIRL, t: headAt(-1, J_HEAD.at, J_HEAD.rot) },
  // her near arm: the elbow on the sill, the forearm up, the hand under her cheek
  arm(
    [
      [700, 122],
      [680, 137],
      [692, 115],
    ],
    -84,
    { w: 7, sep: 1.3, size: 13, spread: 10, thumb: -1 },
  ),
]

function TheBalcony({ uid }: ArtProps) {
  const m = marks()
  const id = { house: `${uid}-house`, win: `${uid}-win` }
  return (
    <>
      <defs>
        <clipPath id={id.house}>
          <rect x={HOUSE_X} y={0} width={W - HOUSE_X} height={GROUND + 4} />
        </clipPath>
        <clipPath id={id.win}>
          <path d={WIN_OPEN} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [520, 150], push: 1.03 })}>
        {/* the night sky and the pale moon, "sick and pale with grief" */}
        <path d={m.sky} fill={PAPER} />
        <circle cx={MOON[0]} cy={MOON[1]} r={30} fill={INK} />
        <circle cx={MOON[0]} cy={MOON[1]} r={24} fill={PAPER} />
        <path
          d={
            gouge(MOON[0] - 16, MOON[1] - 14, MOON[0] - 4, MOON[1] - 16, 0.7) +
            gouge(MOON[0] - 20, MOON[1] - 7, MOON[0] - 3, MOON[1] - 8, 0.9) +
            gouge(MOON[0] - 22, MOON[1], MOON[0] - 5, MOON[1] - 1, 1) +
            gouge(MOON[0] - 20, MOON[1] + 8, MOON[0] - 6, MOON[1] + 8, 0.9) +
            gouge(MOON[0] - 15, MOON[1] + 15, MOON[0] - 4, MOON[1] + 15, 0.7) +
            gouge(MOON[0] + 4, MOON[1] - 10, MOON[0] + 12, MOON[1] - 9, 0.6) +
            gouge(MOON[0] + 8, MOON[1] + 8, MOON[0] + 16, MOON[1] + 6, 0.6)
          }
          fill={INK}
        />
        {/* two stars, twinkling */}
        {[
          [548, 30, 1],
          [520, 62, 0.8],
        ].map(([x, y, s], i) => (
          <path
            key={x}
            className="lc-glow"
            style={timing({ delay: 0.6 + i * 0.4 })}
            d={
              gouge(x - 7 * s, y, x + 7 * s, y, 1.3 * s) +
              gouge(x, y - 7 * s, x, y + 7 * s, 1.3 * s)
            }
            fill={PAPER}
          />
        ))}

        {/* a fruit tree beyond the wall: only its crown shows over it */}
        <path
          d={m.far.d}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={m.far.leaves + m.far.rim} fill={PAPER} />

        {/* the high orchard wall, pale in the moonlight */}
        <rect x={0} y={WALL_TOP} width={HOUSE_X} height={GROUND - WALL_TOP} fill={PAPER} />
        <path d={m.wallShade} fill={INK} />
        <path d={m.joints} fill={INK} />
        <rect x={0} y={WALL_TOP - 8} width={HOUSE_X} height={10} fill={PAPER} />
        <rect x={0} y={WALL_TOP + 2} width={HOUSE_X} height={5} fill={INK} />
        <path d={`M0 ${WALL_TOP - 8}H${HOUSE_X}`} stroke={INK} strokeWidth={LINE.fine} />

        {/* the near fruit tree: its trunk and boughs, then its crown over them */}
        <path
          d="M138 300C142 256 146 214 140 184L118 158L126 152L146 172L148 140L157 141L158 172L178 150L185 156L162 186C158 222 160 262 166 300Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={m.bark} fill={PAPER} />
        <path
          d={m.near.d}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={m.near.leaves + m.near.rim} fill={PAPER} />
        <g fill={PAPER} stroke={INK} strokeWidth={0.9}>
          {[...m.near.fruit, ...m.far.fruit.filter(([, y]) => y < WALL_TOP - 12)].map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={n(x)} cy={n(y)} r={3} />
          ))}
        </g>

        {/* the ground of the orchard */}
        <rect x={0} y={GROUND} width={W} height={H - GROUND} fill={INK} />
        <path d={m.ground} fill={PAPER} />
        <path d={`M0 ${GROUND + 1}H${HOUSE_X}`} stroke={INK} strokeWidth={LINE.bold} />

        {/* the house: dark stone, lit by her window */}
        <g clipPath={`url(#${id.house})`}>
          <rect x={HOUSE_X} y={0} width={W - HOUSE_X} height={GROUND + 4} fill={INK} />
          <path d={m.house} fill={PAPER} />
          <g className="lc-fade-in" style={timing({ delay: 0.5, dur: 1.4 })}>
            <path d={m.light} fill={PAPER} />
          </g>
        </g>
        <path d={`M${HOUSE_X} 0V${GROUND + 2}`} stroke={PAPER} strokeWidth={LINE.bold} />

        {/* Juliet's window: a stone arch, the room behind it lit red */}
        <path
          d={`M${WIN.x0 - 12} ${WIN.sill}V${WIN.spring}A${WIN_R + 12} ${WIN_R + 12} 0 0 1 ${WIN.x1 + 12} ${WIN.spring}V${WIN.sill}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d={WIN_OPEN} fill={RED} />
        <g clipPath={`url(#${id.win})`}>
          <CutFigure parts={JULIET} tone="paper" halo={1.8}>
            <g transform={headAt(-1, J_HEAD.at, J_HEAD.rot)}>
              <path d={JULIET_HAIR} fill={INK} />
              <path d={JULIET_STRANDS} fill={PAPER} />
              <path d={JULIET_FACE} fill={INK} />
              <path d={EYE} fill={INK} />
            </g>
            <path d={gouge(712, 124, 718, 138, 0.7)} fill={INK} />
          </CutFigure>
        </g>
        {/* the sill she leans on, and the stones of the arch */}
        <rect x={WIN.x0 - 22} y={WIN.sill} width={WIN.x1 - WIN.x0 + 44} height={10} fill={PAPER} />
        <rect
          x={WIN.x0 - 22}
          y={WIN.sill + 10}
          width={WIN.x1 - WIN.x0 + 44}
          height={2}
          fill={INK}
        />
        <path
          d={[WIN.x0 - 10, WIN_CX, WIN.x1 + 10]
            .map(
              (x) =>
                `M${x - 5} ${WIN.sill + 12}L${x + 5} ${WIN.sill + 12}L${x + 2} ${WIN.sill + 24}L${x - 2} ${WIN.sill + 24}Z`,
            )
            .join('')}
          fill={PAPER}
        />
        <path
          d={Array.from({ length: 9 }, (_, i) => {
            const a = Math.PI + (i / 8) * Math.PI
            return wedge(
              WIN_CX + Math.cos(a) * (WIN_R + 1),
              WIN.spring + Math.sin(a) * (WIN_R + 1),
              WIN_CX + Math.cos(a) * (WIN_R + 11),
              WIN.spring + Math.sin(a) * (WIN_R + 11),
              1.4,
              2,
            )
          }).join('')}
          fill={PAPER}
        />

        {/* Romeo in the orchard below, looking up at her */}
        <CutFigure parts={ROMEO} cuts={ROMEO_CUTS} transform={ROMEO_AT}>
          <g transform={headAt(1, R_HEAD.at, R_HEAD.rot)}>
            <path d={ROMEO_CURLS} fill={PAPER} />
            <path d={EYE} fill={PAPER} />
          </g>
          <path d={R_SWORD.hilt} fill={PAPER} stroke={INK} strokeWidth={0.8} />
        </CutFigure>
      </g>
    </>
  )
}

export const theBalcony: LinocutArt = { width: W, height: H, Draw: TheBalcony }
