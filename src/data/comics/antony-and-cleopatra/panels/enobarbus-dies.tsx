import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { arcDashes, between, clamp, gouge, n, rays, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Kneel } from './kneel'
import { reach, type P, type Pose } from './people'

/**
 * Act 4, Scene 9: "Enobarbus dies", the eighteenth moment in the guide's
 * timeline. Drawn from the scene in the held edition
 * (src/data/full-texts/antony-and-cleopatra.ts):
 *
 * - "Caesar’s camp." SENTRY: "The night Is shiny". So it is night in the
 *   camp, under a bright full moon, Caesar's tents dark along the skyline and
 *   his standard planted among them.
 * - ENOBARBUS: "O, bear me witness, night"; "Be witness to me, O thou blessed
 *   moon, When men revolted shall upon record Bear hateful memory, poor
 *   Enobarbus did Before thy face repent." So he is on one knee, alone, in
 *   the moon's light, his face lifted to it as he speaks, one hand pressed to
 *   his heart ("Throw my heart Against the flint and hardness of my fault")
 *   and the other held out to the moon, open, the elbow bent. He kneels
 *   close under it, so that his head and his open hand stand black against
 *   the brightest of its glow: the one figure in the picture.
 * - The sentries hear him because they "Stand close and list him": they are
 *   hidden, and so they are not drawn, and he is alone in the picture, as
 *   this play's brief asks.
 *
 * WHAT IS NEVER DRAWN. Enobarbus dies at the end of the speech, of grief
 * ("[_Dies._]"), and the sentries carry his body away. Neither is drawn or
 * suggested: he is alive and speaking, upright on one knee, as he is for the
 * whole of the line the panel quotes. His other line to the moon, "The
 * poisonous damp of night disponge upon me", asks for his death, so it is not
 * the quotation.
 *
 * CUT THREE TIMES. The first cut put the moon high in the corner and
 * Enobarbus in the dark under it, black on black; set tents as plain peaks
 * along the skyline, which read as hills; and lit the ground under the moon
 * in level strokes, which read as a lake. The second gave the tents walls,
 * doors and guy ropes and cut the ground in tufts, but still knelt him a
 * long way from the moon, against the dark, its sky cut in level strokes
 * that read as water, and his hands' fingers ran together. So now he kneels
 * in the glow, the glow is cut in rings and rays round the moon, the kneel is
 * the kit's own (./kneel.tsx), and each hand is the kit's open hand, cut
 * large. The moon has its dark seas cut in it, so it is never taken for the
 * sun.
 *
 * RED is Caesar's standard, a flag too large to be anything else at phone
 * width and far from his face and hands: he is in the enemy's camp, as in
 * "The treasure sent after him". The quotation sits at the top left, over
 * the empty night: at the bottom right, where the box can take two fifths of
 * the width, it covered his knee. Nothing is taken from a film or stage
 * production. Seeds: 1801 (the stars and ground), 1802 (the rays), 1803 (the
 * rings).
 */

const W = 860
const H = 340
const HORIZON = 248
const MOON: P = [606, 144]
const MOON_R = 62

/** Where Enobarbus kneels: the ground under his hip, and his scale. */
const KNEEL_AT: P = [500, 326]
const KNEEL_S = 1.34
/** The height of the kit's kneeling hip above the ground, and where the standing figure is cut. */
const HIP = 44
const HIP_CUT = 86

/** A point in the panel, in the kneeling figure's own frame (facing right, as `Person` poses it). */
const toFig = ([x, y]: P): P => [
  (x - KNEEL_AT[0]) / KNEEL_S,
  (y - KNEEL_AT[1]) / KNEEL_S - HIP_CUT + HIP,
]

type Marks = {
  rings: string
  outer: string
  glow: string
  stars: string
  ground: string
  seas: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(1801)
  // The moon's light: broken rings round it, broad and close-set near the
  // disc and finer and further apart as they go out, with rays between, so
  // the sky round his head is the brightest thing in the picture after the
  // moon itself, and nothing in it is level enough to read as water.
  const g = rng(1803)
  let rings = ''
  let outer = ''
  for (let k = 0; k < 16; k++) {
    const rad = MOON_R + 8 + k * 8
    const t = k / 15
    const ring = arcDashes(
      g,
      MOON[0],
      MOON[1],
      rad,
      0,
      Math.PI * 2,
      [26 - t * 16, 70 - t * 46],
      [3 + t * 10, 8 + t * 30],
    )
    if (k < 7) rings += ring
    else outer += ring
  }
  const glow = rays(rng(1802), MOON[0], MOON[1], {
    from: MOON_R + 6,
    to: 230,
    every: 7,
    width: 2.6,
  })
  // A few stars, small four-pointed cuts, out in the dark beyond the glow.
  let stars = ''
  const at: P[] = [
    [40, 30],
    [126, 74],
    [214, 26],
    [300, 50],
    [70, 140],
    [828, 30],
    [834, 176],
    [178, 176],
    [388, 22],
  ]
  for (const [x, y] of at)
    stars += gouge(x - 4.6, y, x + 4.6, y, 1) + gouge(x, y - 4.6, x, y + 4.6, 1)
  // The ground of the camp, inked, with tufts of grass cut in paper, more of
  // them towards the moon.
  let ground = ''
  for (let y = HORIZON + 6; y < H; ) {
    const t = (y - HORIZON) / (H - HORIZON)
    let x = between(r, -20, 0)
    while (x < W) {
      const L = clamp(0.3 - Math.abs(x - MOON[0]) / 1400 - t * 0.1)
      if (r() < 0.25 + L * 0.6) {
        const h = 3.6 + t * 5 + between(r, 0, 2)
        const w = 0.55 + t * 0.5
        ground +=
          gouge(x, y, x - 1.8 - t * 2, y - h, w) +
          gouge(x + 1.6, y, x + 2.2, y - h * 1.15, w) +
          gouge(x + 3, y, x + 5.2 + t * 2, y - h * 0.9, w)
      }
      x += between(r, 14, 40) * (1.3 - L * 0.6)
    }
    y += 6 + t * 5
  }
  // The moon's dark seas, cut as patches of short ink strokes on the paper
  // disc: texture, never a tint.
  const [mx, my] = MOON
  let seas = ''
  const patches: [number, number, number, number][] = [
    [mx - 16, my - 16, 15, 4],
    [mx + 20, my + 2, 13, 4],
    [mx - 14, my + 22, 9, 3],
  ]
  for (const [cx, cy, half, rows] of patches)
    for (let k = 0; k < rows; k++) {
      const y = cy + (k - (rows - 1) / 2) * 4.4
      const w = half * Math.sqrt(1 - ((k - (rows - 1) / 2) / rows) ** 2)
      seas += gouge(
        cx - w + between(r, -2, 2),
        y,
        cx + w + between(r, -2, 2),
        y + between(r, -1, 1),
        1,
      )
    }
  cached = { rings, outer, glow, stars, ground, seas }
  return cached
}

/**
 * One of Caesar's tents, seen end on: low walls, a pitched roof, a door
 * flap tied back to a dark doorway, and the guy ropes out to their pegs. In
 * ink with paper edges, centred on x with its foot at `foot`, `w` wide.
 */
function tent(x: number, foot: number, w: number): { body: string; door: string; ropes: string } {
  const h = w * 0.72
  const eave = foot - h * 0.42
  const body = `M${n(x - w / 2)} ${n(foot)}L${n(x - w / 2 + 3)} ${n(eave)}L${n(x)} ${n(foot - h)}L${n(x + w / 2 - 3)} ${n(eave)}L${n(x + w / 2)} ${n(foot)}Z`
  const door = `M${n(x - w * 0.14)} ${n(foot)}L${n(x)} ${n(foot - h * 0.6)}L${n(x + w * 0.14)} ${n(foot)}Z`
  const ropes =
    `M${n(x - w / 2 + 3)} ${n(eave)}L${n(x - w / 2 - w * 0.22)} ${n(foot)}` +
    `M${n(x + w / 2 - 3)} ${n(eave)}L${n(x + w / 2 + w * 0.22)} ${n(foot)}`
  return { body, door, ropes }
}
const TENTS = [tent(112, 250, 128), tent(262, 248, 60), tent(796, 248, 70)]

/**
 * Where his open hand reaches: out in front of his chest, towards the moon,
 * well below his face. The first cut held it up beside his mouth, where it
 * read as a hand raising something to his lips, which this play's rule forbids
 * (./people.tsx).
 */
const REACH_TO: P = [546, 214]

/** Enobarbus on one knee: his face lifted to the moon, a hand on his heart, a hand held out to it. */
function pose(): Pose {
  return {
    look: 'enobarbus',
    head: { rot: -12 },
    mouth: 'open',
    far: { pts: reach([-4, -130], toFig(REACH_TO), 24, 1), hand: 'open', deg: -36, size: 16 },
    near: {
      pts: [
        [5, -128],
        [19, -102],
        [13, -114],
      ],
      hand: 'open',
      deg: -70,
      thumb: -1,
      size: 16,
    },
  }
}

/** Caesar's standard, its flag in the spot colour. */
function Standard({ x, top, foot }: { x: number; top: number; foot: number }) {
  const flag = `M${x - 19} ${top + 11}H${x + 19}V${top + 44}L${x + 12.7} ${top + 39}L${x + 6.3} ${top + 45}L${x} ${top + 39}L${x - 6.3} ${top + 45}L${x - 12.7} ${top + 39}L${x - 19} ${top + 45}Z`
  return (
    <g>
      <path d={`M${x} ${foot}V${top}`} stroke={PAPER} strokeWidth={6.4} strokeLinecap="round" />
      <path d={`M${x} ${foot}V${top}`} stroke={INK} strokeWidth={3.6} strokeLinecap="round" />
      <path d={`M${x - 21} ${top + 10}H${x + 21}`} stroke={PAPER} strokeWidth={5.4} />
      <path d={`M${x - 21} ${top + 10}H${x + 21}`} stroke={INK} strokeWidth={3} />
      <path d={flag} fill={RED} stroke={PAPER} strokeWidth={1.6} strokeLinejoin="round" />
      <path d={`M${x - 3} ${top - 1}L${x} ${top - 9}L${x + 3} ${top - 1}Z`} fill={PAPER} />
    </g>
  )
}

function EnobarbusDies({ uid }: ArtProps) {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [520, 170], push: 1.03 })}>
      {/* the night, and the moon he speaks to */}
      <rect x={0} y={0} width={W} height={H} fill={INK} />
      <path d={m.rings} fill="none" stroke={PAPER} strokeWidth={2.2} strokeLinecap="round" />
      <path d={m.outer} fill="none" stroke={PAPER} strokeWidth={1.2} strokeLinecap="round" />
      <path d={m.glow} fill={PAPER} />
      <path d={m.stars} fill={PAPER} />
      <circle cx={MOON[0]} cy={MOON[1]} r={MOON_R + 5} fill={INK} />
      <circle cx={MOON[0]} cy={MOON[1]} r={MOON_R} fill={PAPER} />
      <path d={m.seas} fill={INK} />

      {/* the ground of the camp */}
      <rect x={0} y={HORIZON} width={W} height={H - HORIZON} fill={INK} />
      <path d={`M0 ${HORIZON}H${W}`} stroke={PAPER} strokeWidth={1.2} />
      <path d={m.ground} fill={PAPER} />

      {/* Caesar's tents, and his standard */}
      <path d={TENTS.map((t) => t.ropes).join('')} stroke={PAPER} strokeWidth={1.1} fill="none" />
      <path
        d={TENTS.map((t) => t.body).join('')}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.6}
        strokeLinejoin="round"
      />
      <path d={TENTS.map((t) => t.door).join('')} fill={PAPER} />
      <Standard x={190} top={108} foot={256} />

      {/* Enobarbus, alone, on one knee in the moon's light */}
      <Kneel uid={uid} id="enobarbus" pose={pose()} at={KNEEL_AT} scale={KNEEL_S} />
    </g>
  )
}

export const enobarbusDies: LinocutArt = { width: W, height: H, Draw: EnobarbusDies }
