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
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  DOG,
  DOG_CUTS,
  DOG_FAR_LEGS,
  DOG_TAIL,
  Figure,
  GRIP_HAND,
  HEAD_VICTOR,
  NECKCLOTH,
  VICTOR_CUTS,
  VICTOR_HAIR,
  VICTOR_HAIR_CUTS,
  VICTOR_PUPIL,
  headAt,
  man,
  sledge,
  type P,
} from './people'

/**
 * Chapter 24: "The pursuit north, and Victor's death", the fifteenth moment
 * in the guide's timeline. The panel draws the pursuit; Victor's death, in
 * Walton's cabin, happens off the page. Every detail is from the held 1831
 * text:
 *
 * - "Some weeks before this period I had procured a sledge and dogs"; "I
 *   exchanged my land-sledge for one fashioned for the inequalities of the
 *   Frozen Ocean"; "Immense and rugged mountains of ice often barred up my
 *   passage". So Victor rides a sledge behind a team of dogs over the frozen
 *   sea, among blocks of pack ice. It is the kit's sledge (./people.tsx), the
 *   "low carriage" Walton finds him sitting in in Letter 4, and the kit's
 *   dogs, so it is the same sledge in both panels.
 * - "Once, after the poor animals that conveyed me had with incredible toil
 *   gained the summit of a sloping ice-mountain ... I viewed the expanse
 *   before me with anguish, when suddenly my eye caught a dark speck upon the
 *   dusky plain. I strained my sight to discover what it could be, and
 *   uttered a wild cry of ecstasy when I distinguished a sledge, and the
 *   distorted proportions of a well-known form within." So the team stands
 *   on the crest of an ice-mountain; Victor, sitting in the carriage, leans
 *   out over its front, one hand on its rim, straining to see; and far out on
 *   the plain, going away, is a small dark sledge with a great figure in it.
 *   The dog that dies on the climb is not drawn.
 * - The Creature's sledge is the one Walton saw in Letter 4, "a low
 *   carriage, fixed on a sledge and drawn by dogs", and the villagers' "he
 *   had seized on a numerous drove of trained dogs". At this distance it is
 *   only a speck: the team strung out ahead, the carriage, and the seated
 *   giant rising far above it, his hair blown back. It fades in a beat after
 *   the rest, as it catches Victor's eye.
 * - "the dusky plain": the sun is down on the rim of the frozen sea, in the
 *   spot colour, and the sky is dark above it; the plain is lit low from the
 *   horizon, its ridges crowding into the distance.
 *
 * Victor is the kit's Victor, bareheaded, in the long coat he wears out of
 * doors, so he is the same man as in every other panel. Seeds: 1501 (the
 * sky), 1502 (the sun's light), 1503 (the plain and its far ice), 1504 (the
 * pack ice), 1505 (the ice-mountain).
 */

const W = 860
const H = 340
/** The line where the frozen sea meets the sky. */
const HORIZON = 166
/** The sun, half down on the horizon. */
const SUN: Pt = [748, HORIZON]
/** The top of the ice-mountain the dogs have climbed. */
const CREST = 224

type Marks = {
  sky: string
  sunRays: string
  plain: string
  farIce: string
  hummocks: string
  hummockCuts: string
  slope: string
}

/** The ice-mountain: a black mass rising from the bottom left to a long crest, then falling away. */
const MOUNTAIN = `M0 ${H}V248C22 242 50 234 80 228C96 ${CREST + 1} 110 ${CREST} 130 ${CREST}L556 ${CREST - 1}C576 ${CREST} 592 ${CREST + 4} 606 234C628 250 648 276 664 300C674 316 682 330 686 ${H}Z`
/** The paper edge of its crest, where the low light catches it. */
const CREST_EDGE = `M0 249C22 243 50 235 80 229C96 ${CREST + 2} 110 ${CREST + 1} 130 ${CREST + 1}L556 ${CREST}C576 ${CREST + 1} 592 ${CREST + 5} 606 235C628 251 648 277 664 301`

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // A dusky sky, lit low along the horizon and most towards the sun.
  const sky = gougeField(
    rng(1501),
    { x0: 0, x1: W, y0: 6, y1: HORIZON - 1 },
    (x, y) =>
      Math.max(
        0.05,
        0.95 * clamp(1 - Math.hypot((x - SUN[0]) * 0.5, (y - SUN[1]) * 1.3) / 300) ** 1.2,
        0.62 * clamp((y - 30) / (HORIZON - 30)) ** 2.2,
      ),
    { spacing: 6, len: [30, 110], gap: [8, 26] },
  )
  const sunRays = rays(rng(1502), SUN[0], SUN[1], { from: 26, to: 92, every: 7, width: 2.4 })

  // The frozen plain: paper, with ridges cut in ink that crowd towards the
  // horizon, as a plain does in perspective. They stop short of the speck,
  // so the Creature's sledge is cut clean out of the plain.
  const r = rng(1503)
  let plain = ''
  for (let k = 0; k < 40; k++) {
    const t = k / 40
    const y = HORIZON + 3 + (H - HORIZON) * t ** 1.7
    if (y > H) break
    let x = between(r, -40, 0)
    while (x < W) {
      const len = between(r, 18, 70) * (0.5 + t)
      const clearOfSpeck = !(y < 204 && x + len > 580 && x < 700)
      if (clearOfSpeck && r() < 0.55)
        plain += gouge(x, y, x + len, y + between(r, -0.6, 0.6), 0.35 + t * 1.5)
      x += len + between(r, 14, 60) * (0.6 + t)
    }
  }
  // Far ice along the horizon: low jagged ridges, black against the lit sky.
  let farIce = `M0 ${HORIZON + 2}`
  for (let x = 0; x <= W; x += 14) {
    const h = r() < 0.3 ? between(r, 4, 11) : between(r, 0, 3)
    farIce += `L${n(x + between(r, -3, 3))} ${n(HORIZON + 1 - h)}`
  }
  farIce += `L${W} ${HORIZON + 3}L0 ${HORIZON + 3}Z`

  // Blocks of pack ice on the plain: ragged tops of broken slabs on a flat
  // foot, black, with the face towards the sun cut pale.
  let hummocks = ''
  let hummockCuts = ''
  const hr = rng(1504)
  const spots: [number, number, number][] = [
    [520, 194, 13],
    [818, 186, 11],
    [744, 262, 18],
    [772, 208, 16],
    [700, 222, 10],
    [838, 238, 14],
    [120, 190, 12],
    [300, 184, 9],
  ]
  for (const [x, y, s] of spots) {
    const k = 5 + Math.floor(between(hr, 0, 3))
    let d = `M${n(x - s * 1.5)} ${n(y)}`
    const tops: Pt[] = []
    for (let i = 0; i <= k; i++) {
      const u = -1.3 + (2.6 * i) / k
      const peak = i % 2 === 1
      const hgt = peak ? between(hr, 0.6, 1.25) : between(hr, 0.25, 0.55)
      const p: Pt = [
        x + u * s + between(hr, -0.15, 0.15) * s,
        y - hgt * s * (1 - Math.abs(u) * 0.28),
      ]
      tops.push(p)
      d += `L${n(p[0])} ${n(p[1])}`
    }
    d += `L${n(x + s * 1.5)} ${n(y)}Z`
    hummocks += d
    for (let i = 1; i < tops.length; i += 2) {
      const [px, py] = tops[i]
      hummockCuts += gouge(px + 0.6, py + 1.2, px + s * 0.34, y - 1, Math.max(0.55, s * 0.06))
    }
  }

  // The ice-mountain: its face towards the sun cut in long strokes down the
  // slope, and across its dark front the grain of wind-packed snow.
  const sr = rng(1505)
  let slope = ''
  for (let i = 0; i < 24; i++) {
    const x0 = 566 + i * 5 + between(sr, -2, 2)
    const y0 = CREST + Math.max(0, (x0 - 576) * 0.75) + between(sr, 0, 4)
    const len = between(sr, 30, 80)
    slope += wedge(x0, y0, x0 + len * 0.45, y0 + len, 2.4 - i * 0.06, 0.4)
  }
  for (let y = CREST + 14; y < H; y += 8.5) {
    let x = between(sr, -20, 10)
    const end = 576 + (y - CREST) * 0.7
    while (x < end) {
      const len = between(sr, 24, 80)
      const L = clamp((y - CREST) / 110)
      if (sr() < 0.55)
        slope += gouge(x, y, x + len, y + between(sr, 1, 3), 0.5 + L * 0.9 * between(sr, 0.6, 1.2))
      x += len + between(sr, 10, 40)
    }
  }

  cached = { sky, sunRays, plain, farIce, hummocks, hummockCuts, slope }
  return cached
}

/**
 * Victor, his sledge and his team are drawn at the kit's size and set on the
 * crest a size larger, so he is the one clear figure against the sky.
 */
const FOREGROUND = `translate(96 ${CREST}) scale(1.3) translate(-96 -${CREST})`

/**
 * Victor's sledge: the kit's (./people.tsx), the same "low carriage, fixed
 * on a sledge" he is found in in Letter 4, its front curled up towards the
 * team.
 */
const SLEDGE = sledge([120, CREST], 132, 1, 28)

/**
 * The kit's sledge dog, turned to face right at DOG_SIZE, its paws on the
 * crest. WHY THIS SIZE (27 September 2026): the team was first drawn at 0.82,
 * less than half the size of the dog in "The stranger on the ice" beside a
 * Victor of the same size, and at panel size the dogs read as cats and
 * Victor, towering over them, as a giant: the Creature's mark, not his.
 */
const DOG_SIZE = 1.3
const dogAt = (x: number) =>
  `translate(${x} ${n(CREST - 15 * DOG_SIZE)}) scale(${-DOG_SIZE} ${DOG_SIZE})`
/** Victor's team, strung out along the crest ahead of the sledge. */
const TEAM = [292, 350, 408]
/** The traces from the curl of the runners to each dog's harness. */
const TRACES = TEAM.map(
  (x) => `M258 ${CREST - 11}L${n(x + 12 * DOG_SIZE)} ${n(CREST - 22 * DOG_SIZE)}`,
).join('')

/**
 * Victor, sitting in the carriage and leaning out over its front, one hand
 * on its rim, his head thrust forward towards the speck: "I strained my
 * sight". His legs are inside the carriage.
 */
const V_HEAD = { d: HEAD_VICTOR, at: [194, 136] as P, rot: 14, scale: 1 }
const VICTOR = man({
  facing: 1,
  neck: [180, 162],
  hip: [150, 210],
  head: V_HEAD,
  hair: VICTOR_HAIR,
  body: { width: 24, tails: 4, flare: 2, long: true },
  arm: 6.6,
  near: {
    arm: [
      [184, 168],
      [206, 186],
      [222, 196],
    ],
    leg: [],
    hand: { parts: GRIP_HAND, scale: 0.8, rot: 30 },
  },
  far: { arm: [], leg: [] },
  feet: false,
})

/**
 * The Creature's sledge, far off on the plain and going away to the right: the
 * kit's sledge again, small, with his team strung out ahead and the great
 * seated figure rising far above the carriage, his long hair blown back. A
 * dark speck at this distance.
 */
const SPECK: Pt = [604, 194]
const SPECK_SLEDGE = sledge([0, 0], 30, 1, 8)
const SPECK_FIGURE =
  'M7 -6C6 -12 8 -16.6 12.4 -18C11.8 -20 12.2 -23.8 16 -24.4C19.6 -24.8 21.6 -22 21 -19C24.4 -17.4 25.6 -13.6 25 -6Z' +
  'M13.4 -23C9 -24.4 4 -23 0 -20.6C-2 -19.4 -4 -19.6 -5.6 -20.4C-4.6 -18 -2 -17 1 -17.6C4.6 -18.4 8.6 -19.4 12.6 -18.8Z'
const SPECK_TEAM = [50, 64, 78]

function CreatureSledge() {
  const dogs = SPECK_TEAM.map((x) => (
    <path key={x} d={DOG + DOG_TAIL} transform={`translate(${x} -4.2) scale(-0.28 0.28)`} />
  ))
  return (
    <g transform={`translate(${SPECK[0]} ${SPECK[1]})`}>
      <g fill={PAPER} stroke={PAPER} strokeWidth={4} strokeLinejoin="round">
        <path d={SPECK_SLEDGE.box + SPECK_FIGURE} />
        <path d={SPECK_SLEDGE.runners} fill="none" />
        <g strokeWidth={14}>{dogs}</g>
      </g>
      <g fill={INK}>
        <path d={SPECK_SLEDGE.box + SPECK_FIGURE} />
        <path
          d={SPECK_SLEDGE.runners + 'M38 -8L78 -8.4'}
          fill="none"
          stroke={INK}
          strokeWidth={1.2}
        />
        {dogs}
      </g>
    </g>
  )
}

function ThePursuitNorth({ uid }: ArtProps) {
  const m = marks()
  const clip = `${uid}-sky`
  const vt = headAt(1, V_HEAD.at, V_HEAD.rot, V_HEAD.scale)
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <rect x={0} y={0} width={W} height={HORIZON} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [420, 180], push: 1.03 })}>
        {/* the dusky sky, and the sun down on the rim of the frozen sea */}
        <path d={m.sky} fill={PAPER} />
        <g clipPath={`url(#${clip})`}>
          <path d={m.sunRays} fill={PAPER} />
          <circle cx={SUN[0]} cy={SUN[1]} r={24} fill={INK} />
          <circle cx={SUN[0]} cy={SUN[1]} r={19} fill={RED} />
        </g>
        {/* the plain, its far ice and its blocks of pack ice */}
        <rect x={0} y={HORIZON} width={W} height={H - HORIZON} fill={PAPER} />
        <path d={m.plain} fill={INK} />
        <path d={m.farIce} fill={INK} />
        <path d={m.hummocks} fill={INK} />
        <path d={m.hummockCuts} fill={PAPER} />
        {/* "a dark speck upon the dusky plain" */}
        <g className="lc-fade-in" style={timing({ delay: 1.4, dur: 1 })}>
          <CreatureSledge />
        </g>

        {/* the sloping ice-mountain the dogs have climbed */}
        <path d={MOUNTAIN} fill={INK} />
        <path d={m.slope} fill={PAPER} />
        <path d={CREST_EDGE} fill="none" stroke={PAPER} strokeWidth={LINE.bold} />

        <g transform={FOREGROUND}>
          {/* the traces, and the team ahead of the sledge */}
          <path d={TRACES} fill="none" stroke={PAPER} strokeWidth={3.4} strokeLinecap="round" />
          <path d={TRACES} fill="none" stroke={INK} strokeWidth={1.3} strokeLinecap="round" />
          {TEAM.map((x) => (
            <g key={x} transform={dogAt(x)}>
              <path d={DOG_FAR_LEGS} stroke={INK} strokeWidth={4} strokeLinecap="round" />
              <path
                d={DOG + DOG_TAIL}
                fill={INK}
                stroke={PAPER}
                strokeWidth={2.4}
                strokeLinejoin="round"
              />
              <path d={DOG + DOG_TAIL} fill={INK} />
              <path d={DOG_CUTS} fill={PAPER} />
            </g>
          ))}

          {/* Victor, leaning out of the carriage, straining his sight */}
          <Figure parts={VICTOR} cuts={gouge(186, 170, 162, 204, 0.8, 0.8)}>
            <path d={VICTOR_HAIR_CUTS + VICTOR_CUTS} transform={vt} fill={PAPER} />
            <path d={VICTOR_PUPIL} transform={vt} fill={INK} />
            <path d={NECKCLOTH} transform={vt} fill={PAPER} />
          </Figure>

          {/* the sledge, over his legs */}
          <path
            d={SLEDGE.runners}
            fill="none"
            stroke={PAPER}
            strokeWidth={6}
            strokeLinecap="round"
          />
          <path
            d={SLEDGE.box}
            fill={PAPER}
            stroke={PAPER}
            strokeWidth={3.6}
            strokeLinejoin="round"
          />
          <path d={SLEDGE.box} fill={INK} />
          <path d={SLEDGE.slats} fill={PAPER} />
          <path
            d={SLEDGE.runners}
            fill="none"
            stroke={INK}
            strokeWidth={LINE.bold}
            strokeLinecap="round"
          />
        </g>
      </g>
    </>
  )
}

export const thePursuitNorth: LinocutArt = { width: W, height: H, Draw: ThePursuitNorth }
