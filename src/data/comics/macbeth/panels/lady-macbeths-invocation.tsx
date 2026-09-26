import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { CutFigure, type Part } from './cut-figure'
import { EYE, HEAD_WOMAN, VEIL } from './inverness-people'

/**
 * Act 1, Scene 5: "Lady Macbeth's invocation", the fifth moment in the
 * guide's timeline. Every detail is from the scene:
 *
 * - "Inverness. A Room in Macbeth’s Castle." "Enter Lady Macbeth, reading a
 *   letter." She
 *   holds the letter still, lowered in one hand: the paper, and nothing on
 *   it that could be read as words.
 * - "The King comes here tonight." So the day is ending: through the window
 *   the sun is low, and it is the one red in the panel, the last of the
 *   light she is about to call the night down on. That low light throws her
 *   shadow large on the wall behind her, arm raised: the one figure in the
 *   room, doubled in the dark she is asking for. The patch of light on the
 *   wall is the window's shape sheared by the low sun, with its edge cut
 *   outwards in short gouges as the candlelight is in Tomorrow, and her
 *   shadow is sheared with it, so it reads as thrown light and not as a lit
 *   doorway.
 * - "The raven himself is hoarse / That croaks the fatal entrance of Duncan /
 *   Under my battlements." A raven sits on the battlements outside the
 *   window, its beak open.
 * - "Come, you spirits / That tend on mortal thoughts, unsex me here" ...
 *   "Come, thick night, / And pall thee in the dunnest smoke of hell". She
 *   lifts her other arm to the window, and black smoke billows in at the top
 *   of it towards her hand and spills over the sill, as if answering. The spirits themselves are
 *   "sightless substances" and are not drawn.
 * - The play says nothing of how she looks, so she wears the long gown and
 *   veil the other Macbeth panels give her (./inverness-people.tsx).
 *
 * REVIEWED 26 September 2026. The patch of light was first cut as a clean
 * round-headed arch with stone courses in it, and at a glance it read as an
 * open doorway with a second woman standing in it, which is nobody the scene
 * has. Shearing it and her shadow together, and feathering its edge, fixed
 * that.
 *
 * Nothing is taken from a film or stage production. Seeds: 251 (wall), 252
 * (clouds), 253 (smoke), 254 (floor), 255 (the cut edge of the light).
 */

const W = 860
const H = 340
const FLOOR = 276

type Marks = {
  wall: string
  sky: string
  floor: string
  smoke: [number, number, number][][]
  smokeCuts: string
  lightEdge: string
}

/** The window: a tall round-headed opening in the thick wall. */
const WINDOW_OUT = 'M452 262V90Q452 18 540 18Q628 18 628 90V262Z'
const WINDOW_IN = 'M466 256V94Q466 32 540 32Q614 32 614 94V256Z'

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The chamber is lit only by the window; the wall darkens away from it.
  const light = (x: number, y: number) => {
    const win = clamp(1 - Math.hypot((x - 540) * 0.9, (y - 150) * 1.2) / 240)
    return Math.max(win * 0.42, 0.04)
  }
  const wall = gougeField(rng(251), { x0: 0, x1: W, y0: 4, y1: FLOOR }, light, {
    spacing: 7.4,
    len: [24, 80],
    gap: [6, 20],
  })

  // A few bars of cloud left in ink across the pale evening sky.
  const rk = rng(252)
  let sky = ''
  for (let y = 40; y < 150; y += 11) {
    let x = 466 + between(rk, -20, 0)
    while (x < 614) {
      const len = between(rk, 20, 60)
      if (rk() < 0.55 - (y - 40) / 260) sky += gouge(x, y, x + len, y + between(rk, -1, 1), 1.2)
      x += len + between(rk, 10, 30)
    }
  }

  // The floor: dark flags, and the pale patch the window throws on them.
  const rf = rng(254)
  let floor = ''
  for (const [y, w] of [
    [286, 1],
    [302, 1.4],
    [322, 2],
  ])
    floor += wedge(0, y, W, y + between(rf, -1, 1), w, w)
  for (let x = -600; x < 1500; x += 70) floor += wedge(x, FLOOR, 430 + (x - 430) * 1.8, H, 0.8, 2.2)

  // "Come, thick night": tendrils of black smoke coming in at the window from
  // the right, crossing the light towards her lifted hand, and one creeping
  // in over the sill along the floor.
  // Each is a chain of billows shrinking as it reaches towards her, drawn as
  // overlapping rounds whose union is the cloud.
  const rs = rng(253)
  const smoke: [number, number, number][][] = []
  for (const [x0, y0, x1, y1, r0, arch] of [
    [604, 46, 500, 62, 18, -12],
    [606, 114, 518, 102, 14, 10],
    [632, 262, 428, 286, 12, -6],
  ]) {
    const chain: [number, number, number][] = []
    const steps = 16
    for (let k = 0; k <= steps; k++) {
      const t = k / steps
      const r = r0 * (1 - t * 0.7) * between(rs, 0.75, 1.15)
      const x = x0 + (x1 - x0) * t
      const y = y0 + (y1 - y0) * t + Math.sin(t * Math.PI) * arch
      chain.push([x + between(rs, -2, 2), y + between(rs, -2, 2), r])
      // a second round off the line, so the chain thickens into a cloud
      if (k % 2 === 0 && t < 0.8)
        chain.push([x + between(rs, -3, 3), y + between(rs, -1, 1) * r * 0.7, r * 0.7])
    }
    smoke.push(chain)
  }
  const smokeCuts = smoke
    .flat()
    .filter(([, , r]) => r > 7)
    .map(
      ([x, y, r]) =>
        `M${n(x - r * 0.6)} ${n(y - r * 0.15)}q${n(r * 0.5)} ${n(-r * 0.6)} ${n(r * 1.1)} ${n(-r * 0.1)}`,
    )
    .join('')

  // The edge of the thrown light, cut outwards into the dark wall in short
  // gouges along the sides and the arched head of the patch, never the floor.
  const re = rng(255)
  let lightEdge = ''
  const edge = (x: number, y: number, nx: number, ny: number) => {
    const out = between(re, 6, 22)
    lightEdge += gouge(x - nx * 4, y - ny * 4, x + nx * out, y + ny * out, between(re, 1.1, 2.4))
  }
  for (let y = 276; y > 104; y -= between(re, 7, 11)) {
    edge(104, y, -1, 0)
    edge(252, y + between(re, -3, 3), 1, 0)
  }
  // the arched head: the two quadratic curves of WALL_LIGHT
  const quad = (p0: number[], c: number[], p1: number[], steps: number) => {
    for (let k = 0; k <= steps; k++) {
      const t = k / steps
      const u = 1 - t
      const x = u * u * p0[0] + 2 * u * t * c[0] + t * t * p1[0]
      const y = u * u * p0[1] + 2 * u * t * c[1] + t * t * p1[1]
      const tx = 2 * u * (c[0] - p0[0]) + 2 * t * (p1[0] - c[0])
      const ty = 2 * u * (c[1] - p0[1]) + 2 * t * (p1[1] - c[1])
      const L = Math.hypot(tx, ty) || 1
      edge(x, y, ty / L, -tx / L)
    }
  }
  quad([104, 100], [104, 52], [172, 56], 9)
  quad([172, 56], [242, 62], [252, 108], 9)

  cached = { wall, sky, floor, smoke, smokeCuts, lightEdge }
  return cached
}

// ── Lady Macbeth: the letter lowered in one hand, the other lifted ──────────
const LADY_HEAD = 'translate(12 -176) rotate(-14) scale(0.92)'
const LADY: Part[] = [
  // the gown, long and plain
  {
    d: 'M-2 -156C-12 -138 -14 -116 -13 -100C-20 -70 -34 -34 -48 -1L36 -1C30 -32 24 -68 18 -100C20 -120 23 -138 22 -153C14 -160 4 -160 -2 -156Z',
  },
  // the far arm, lifted high to the window, the hand open
  { d: 'M6 -150C16 -166 28 -184 40 -200', w: 6.4, sep: 1.4 },
  {
    d: 'M36 -198C38 -205 42 -211 46 -214L48 -213L47 -207L52 -214L54 -212.5L51 -206L56.5 -210.5L58 -209L53 -202L59 -203L59.5 -201L51 -197C47 -194 40 -194 36 -198Z',
    sep: 1,
  },
  { d: HEAD_WOMAN, t: LADY_HEAD },
  { d: VEIL, t: LADY_HEAD, sep: 1.2 },
  // the near arm lowered, holding the letter
  { d: 'M14 -148C22 -132 26 -118 28 -104', w: 6.6, sep: 1.4 },
  { d: 'M24 -108C28 -111 34 -109 34 -104C33 -99 27 -98 24 -101Z', sep: 1 },
]
const LADY_CUTS =
  gouge(4, -116, -10, -8, 0.9, 1) +
  gouge(12, -110, 18, -8, 0.9, -0.6) +
  gouge(-4, -104, -30, -8, 0.8, 1) +
  gouge(-12, -100, 17, -101, 0.9)

/** The letter, in the lowered hand: a folded sheet with its lines ruled in. */
const LETTER = 'M24 -106L46 -112L52 -84L30 -78Z'
const LETTER_LINES = 'M30 -103L45 -107M31 -98L46 -102M32 -93L47 -97M33 -88L44 -91'

/**
 * The window's light thrown on the wall to the left of her: the window's own
 * round-headed shape, sheared and stretched as low light throws it on a side
 * wall, so it cannot be mistaken for a doorway. Drawn in the frame of
 * LIGHT_THROW.
 */
const WALL_LIGHT = 'M104 286V100Q104 52 172 56Q242 62 252 108V286Z'
const LIGHT_THROW = 'translate(178 286) skewX(-22) translate(-178 -286)'
/** Streaks of the low light across the patch, cut in ink along its slant. */
const WALL_JOINTS =
  gouge(110, 150, 180, 146, 0.7) + gouge(196, 204, 250, 200, 0.7) + gouge(108, 250, 160, 247, 0.7)

/** The pale patch the window throws on the floor. */
const PATCH = 'M452 277H628L596 340H300Z'

/** The raven on the battlements, facing her, its beak open to croak. */
const RAVEN =
  'M0 0C4 -8 12 -12 22 -12C26 -18 32 -20 37 -18L44 -21L39 -15.5L45 -12.5L38 -12C37 -6 32 0 24 3L30 10L26 10L21 4L16 5L19 11L15 11L12 5C8 5 3 4 0 0ZM0 0L-16 -3L-12 2L-18 4Z'

function Invocation({ uid }: ArtProps) {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [420, 160], push: 1.03 })}>
      <path d={m.wall} fill={PAPER} />

      {/* the low sun throws the window's light, and her shadow, on the wall */}
      <g transform={LIGHT_THROW}>
        <path d={m.lightEdge} fill={PAPER} />
        <path d={WALL_LIGHT} fill={PAPER} />
        <path d={WALL_JOINTS} fill={INK} />
      </g>
      <g transform="translate(172 286) scale(1.14 1.06) skewX(-22)">
        {LADY.map((p) =>
          p.w ? (
            <path
              key={p.d}
              d={p.d}
              transform={p.t}
              fill="none"
              stroke={INK}
              strokeWidth={p.w}
              strokeLinecap="round"
            />
          ) : (
            <path key={p.d} d={p.d} transform={p.t} fill={INK} />
          ),
        )}
        <path d={LETTER} fill={INK} />
      </g>

      {/* the window: evening sky, the setting sun, the battlements and the raven */}
      <path d={WINDOW_OUT} fill={INK} stroke={PAPER} strokeWidth={2.4} />
      <path d={WINDOW_IN} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      <circle
        className="lc-glow"
        style={timing({ delay: 0.3 })}
        cx={578}
        cy={178}
        r={17}
        fill={RED}
      />
      <path d={gouge(556, 174, 602, 173, 1.3) + gouge(560, 186, 598, 187, 1.1)} fill={INK} />
      <path d="M466 224C500 216 560 218 614 222V236H466Z" fill={INK} />
      {/* the battlements across the court, and the raven on them */}
      <path
        d="M466 256V214H474V198H490V214H512V198H528V214H550V198H566V214H588V198H604V214H614V256Z"
        fill={INK}
      />
      <g transform="translate(520 187) scale(-1.1 1.1)">
        <path d={RAVEN} fill={INK} />
        <path d="M33 -15.5L35.5 -15.5" stroke={PAPER} strokeWidth={1.6} strokeLinecap="round" />
        <path
          d="M12 -8Q18 -6 24 -8M10 -4Q16 -2 22 -4"
          stroke={PAPER}
          strokeWidth={0.8}
          fill="none"
        />
      </g>
      <path d="M440 262H640V272H440Z" fill={PAPER} />
      <path d="M440 272H640V277H440Z" fill={INK} />

      {/* the floor: dark, with the pale patch the window throws */}
      <defs>
        <clipPath id={`${uid}-patch`}>
          <path d={PATCH} />
        </clipPath>
      </defs>
      <path d={m.floor} fill={PAPER} />
      <path d={PATCH} fill={PAPER} />
      <path d={m.floor} fill={INK} clipPath={`url(#${uid}-patch)`} />

      {/* "Come, thick night": the smoke comes in at the window towards her */}
      <g className="lc-drift-r" style={timing({ delay: 0.4 })}>
        <g fill={PAPER} stroke={PAPER} strokeWidth={3}>
          {m.smoke.flat().map(([x, y, r]) => (
            <circle key={`${x}-${y}`} cx={n(x)} cy={n(y)} r={n(r)} />
          ))}
        </g>
        <g fill={INK}>
          {m.smoke.flat().map(([x, y, r]) => (
            <circle key={`${x}-${y}`} cx={n(x)} cy={n(y)} r={n(r)} />
          ))}
        </g>
        <path d={m.smokeCuts} fill="none" stroke={PAPER} strokeWidth={1.1} strokeLinecap="round" />
      </g>

      {/* Lady Macbeth */}
      <CutFigure parts={LADY} cuts={LADY_CUTS} transform="translate(390 330) scale(1.3)">
        <path d={EYE} transform={LADY_HEAD} fill={PAPER} />
        <path d={LETTER} fill={PAPER} stroke={INK} strokeWidth={1} strokeLinejoin="round" />
        <path d={LETTER_LINES} stroke={INK} strokeWidth={0.8} />
        <path d="M24 -108C28 -111 34 -109 34 -104C33 -99 27 -98 24 -101Z" fill={INK} />
      </CutFigure>
    </g>
  )
}

export const ladyMacbethsInvocation: LinocutArt = { width: W, height: H, Draw: Invocation }
