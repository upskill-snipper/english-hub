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
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Benjamin,
  Cut,
  Horse,
  k,
  PIG_BODY,
  PIG_EAR,
  PIG_FAR_EAR,
  pigCuts,
  pigStrokes,
  place,
  type Part,
} from './people'

/**
 * Chapter 6: "The windmill falls", the eighteenth moment in the guide's
 * timeline. Every detail is from the text (the held edition,
 * src/data/full-texts/animal-farm.ts):
 *
 * - "November came, with raging south-west winds." "Finally there came a
 *   night when the gale was so violent that the farm buildings rocked on
 *   their foundations and several tiles were blown off the roof of the barn."
 *   So it is the morning after: the sky still torn, the cloud racing, and
 *   gaps in the barn roof where the tiles went.
 * - "In the morning the animals came out of their stalls to find that the
 *   flagstaff had been blown down and an elm tree at the foot of the orchard
 *   had been plucked up like a radish." So down by the farm the flagstaff lies
 *   on the ground, and beside the orchard an elm lies on its side with its
 *   roots in the air.
 * - "The windmill was in ruins." "Yes, there it lay, the fruit of all their
 *   struggles, levelled to its foundations, the stones they had broken and
 *   carried so laboriously scattered all around." So on the knoll there is
 *   only the ring of the foundations, a stump of wall and stone everywhere.
 * - "Unable at first to speak, they stood gazing mournfully at the litter of
 *   fallen stone." So Boxer, Clover and Benjamin stand on the right, their
 *   heads low.
 * - "Napoleon paced to and fro in silence, occasionally snuffing at the
 *   ground. His tail had grown rigid and twitched sharply from side to side
 *   ... Suddenly he halted as though his mind were made up." Then: "SNOWBALL!"
 *   he suddenly roared in a voice of thunder. So Napoleon, the black
 *   Berkshire, has halted among the stones, his tail stiff out behind him
 *   (the kit's pig has a curled tail, so he is cut here from the kit's own
 *   body, ears and features with a rigid one), his mouth open, and the roar
 *   is three strokes off his snout, as speech is drawn in moments 14 and 15.
 *
 * The spot colour is Napoleon's eye, as in "Snowball is driven out", where
 * his sidelong look is cut in red: the same mind, made up again, and the one
 * thing in the scene that is not wind or stone. Nothing is taken from a film,
 * a cartoon or a stage production. Seeds: 1801 (sky), 1802 (cloud), 1803
 * (ground), 1804 (stones), 1805 (farm).
 */

const W = 860
const H = 340
/** The far horizon, low on the left where the farm lies below the knoll. */
const HORIZON = 198
/** The top of the knoll, where the animals and the ruins stand. */
const KNOLL = (x: number) => 238 - 18 * clamp(x / 320) + 4 * Math.sin(x / 90)

/** The foundations: the ring the windmill stood on, seen from a little above. */
const RING = { cx: 470, cy: 250, rx: 124, ry: 24 }

/** Napoleon, halted; the three strokes of his roar come off his snout. */
const NAPOLEON = { at: [236, 326] as Pt, s: 1.38 }

type Marks = {
  sky: string
  cloud: string
  cloudLines: string
  ground: string
  stones: string
  stoneShade: string
  near: string
  nearShade: string
  wallCourses: string
  backCourses: string
  back: string
  front: string
  farm: string
  tiles: string
  orchard: string
}

/** One angular stone: a jittered polygon about `r` across. */
function stone(r: () => number, cx: number, cy: number, rr: number) {
  const m = 5 + Math.floor(r() * 2)
  let d = ''
  const pts: Pt[] = []
  for (let i = 0; i < m; i++) {
    const a = (i / m) * Math.PI * 2 + between(r, -0.25, 0.25)
    const q = rr * between(r, 0.72, 1.12)
    pts.push([cx + Math.cos(a) * q * 1.25, cy + Math.sin(a) * q * 0.72])
  }
  pts.forEach(([x, y], i) => (d += `${i ? 'L' : 'M'}${n(x)} ${n(y)}`))
  // the shaded underside: the lower half of the stone, darker
  const shade =
    `M${n(pts[0][0])} ${n(pts[0][1])}` +
    pts
      .slice(1, Math.ceil(m / 2) + 1)
      .map(([x, y]) => `L${n(x)} ${n(y)}`)
      .join('') +
    'Z'
  return { d: d + 'Z', shade }
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // A grey morning after the gale: a pale sky scored in ink, heavier high
  // up where the storm was, clearing towards the horizon.
  const r = rng(1801)
  const sky = gougeField(
    r,
    { x0: 0, x1: W, y0: 4, y1: HORIZON - 4 },
    (x, y) => clamp(0.34 - (y / HORIZON) * 0.3 + Math.sin(x / 140) * 0.05),
    { spacing: 7, len: [40, 140], gap: [20, 50], max: 2.4 },
  )
  // Torn cloud racing across on the wind: long ragged streaks, thickest
  // in the middle, each cut through with a line or two of light.
  const c = rng(1802)
  let cloud = ''
  let cloudLines = ''
  for (let i = 0; i < 16; i++) {
    const y = between(c, 14, 150)
    const x0 = between(c, -120, W - 120)
    const len = between(c, 140, 380)
    const th = between(c, 3, 11) * (1 - y / 260)
    const pts = wave(x0, x0 + len, y, 1.4, between(c, 120, 220), between(c, 0, 6), 24)
    cloud += ribbon(pts, th, 0.8)
    if (th > 6)
      cloudLines += ribbon(
        wave(x0 + len * 0.2, x0 + len * 0.8, y + between(c, -1, 1), 0.8, 160, between(c, 0, 6), 16),
        1,
        0.7,
      )
  }
  // The knoll's grass: pale, cut with short strokes that darken towards us.
  const g = rng(1803)
  const ground = gougeField(
    g,
    { x0: 0, x1: W, y0: 214, y1: H },
    (x, y) => clamp(0.08 + (y - KNOLL(x)) / 420),
    { spacing: 6, len: [8, 26], gap: [14, 34], max: 2 },
  )
  // The stones, scattered all around: small far away, bigger near.
  const s = rng(1804)
  let stones = ''
  let stoneShade = ''
  for (let i = 0; i < 44; i++) {
    const a = between(s, 0, Math.PI * 2)
    const d = Math.sqrt(between(s, 0.05, 1))
    const cx = RING.cx + Math.cos(a) * d * 330
    const cy = RING.cy + 6 + Math.sin(a) * d * 56 + d * 20
    if (cy < KNOLL(cx) + 6 || cy > H - 6) continue
    const st = stone(s, cx, cy, between(s, 4, 7) * (0.7 + (cy - 220) / 100))
    stones += st.d
    stoneShade += st.shade
  }
  // The spill of stone over the broken wall and down in front of it.
  let near = ''
  let nearShade = ''
  for (let i = 0; i < 14; i++) {
    const side = i % 2 ? 1 : -1
    const cx = RING.cx + side * between(s, RING.rx * 0.5, RING.rx * 1.15)
    const cy = RING.cy + between(s, 0, RING.ry + 14)
    const st = stone(s, cx, cy, between(s, 6, 10))
    near += st.d
    nearShade += st.shade
  }
  for (const [cx, cy, rr] of [
    [400, 300, 15],
    [560, 296, 13],
    [470, 322, 17],
    [612, 318, 12],
    [206, 298, 11],
  ] as [number, number, number][]) {
    const st = stone(s, cx, cy, rr)
    near += st.d
    nearShade += st.shade
  }
  // The stump of the round wall, levelled almost to its foundations: low all
  // round, the top ragged where it broke, and one piece of the far side
  // still standing a little higher. The near face is lit, its courses cut
  // in ink; the inside of the far side is in shadow, its courses cut in
  // paper; the floor within is dark.
  const farH = (i: number) =>
    i >= 13 && i <= 17 ? 40 + between(s, -6, 6) : i < 6 ? between(s, 8, 14) : between(s, 12, 26)
  const top: Pt[] = []
  for (let i = 0; i <= 24; i++) {
    const t = Math.PI + (i / 24) * Math.PI
    top.push([RING.cx + Math.cos(t) * RING.rx, RING.cy + Math.sin(t) * RING.ry - farH(i)])
  }
  const frontH: number[] = []
  const frontTop: Pt[] = []
  for (let i = 0; i <= 24; i++) {
    const t = Math.PI - (i / 24) * Math.PI
    const hgt = between(s, 10, 22)
    frontH.push(hgt)
    frontTop.push([RING.cx + Math.cos(t) * RING.rx, RING.cy + Math.sin(t) * RING.ry - hgt])
  }
  const lineOf = (pts: Pt[]) => pts.map(([x, y], i) => `${i ? 'L' : 'M'}${n(x)} ${n(y)}`).join('')
  let back = lineOf(top)
  for (let i = 24; i >= 0; i--) {
    const t = Math.PI + (i / 24) * Math.PI
    back += `L${n(RING.cx + Math.cos(t) * RING.rx)} ${n(RING.cy + Math.sin(t) * RING.ry)}`
  }
  back += 'Z'
  let front = lineOf(frontTop)
  for (let i = 24; i >= 0; i--) {
    const t = Math.PI - (i / 24) * Math.PI
    front += `L${n(RING.cx + Math.cos(t) * RING.rx)} ${n(RING.cy + Math.sin(t) * RING.ry + 4)}`
  }
  front += 'Z'
  // courses round the curve of each face, below its ragged top
  const courses = (pts: Pt[], heights: number[], sign: number) => {
    let d = ''
    for (let row = 1; row <= 5; row++) {
      for (let i = 0; i < 24; i++) {
        if (row * 8 > Math.min(heights[i], heights[i + 1]) - 3) continue
        const t0 = Math.PI + sign * (i / 24) * Math.PI
        const t1 = Math.PI + sign * ((i + 1) / 24) * Math.PI
        const x0 = RING.cx + Math.cos(t0) * RING.rx
        const x1 = RING.cx + Math.cos(t1) * RING.rx
        const y0 = RING.cy + Math.sin(t0) * RING.ry - row * 8
        const y1 = RING.cy + Math.sin(t1) * RING.ry - row * 8
        d += gouge(x0, y0, x1, y1, 0.9)
        if ((i + row) % 2 === 0) d += gouge(x0, y0 + 1, x0, y0 + 7, 0.7)
      }
    }
    void pts
    return d
  }
  const backH = top.map(
    ([, y], i) => RING.cy + Math.sin(Math.PI + (i / 24) * Math.PI) * RING.ry - y,
  )
  const wallCourses = courses(frontTop, frontH, -1)
  const backCourses = courses(top, backH, 1)
  // The farm below, in the distance: the barn with tiles gone, the
  // farmhouse, the orchard.
  const f = rng(1805)
  const farm =
    'M20 198V172L60 150L100 172V198Z' + // barn gable end
    'M100 198V172H176V198Z' + // barn roof run
    'M60 150L136 150L176 172L100 172Z' +
    'M184 198V176L206 162L228 176V198Z' + // farmhouse
    'M214 166V154H220V170Z'
  let tiles = ''
  for (const [x, y] of [
    [110, 156],
    [126, 160],
    [142, 164],
    [118, 166],
  ] as Pt[])
    tiles += `M${x} ${y}h${n(between(f, 5, 8))}v3.4h${n(-between(f, 5, 8))}Z`
  let orchard = ''
  for (const [x, y, rr] of [
    [262, 188, 9],
    [284, 190, 8],
    [306, 187, 9],
    [248, 192, 7],
  ] as [number, number, number][]) {
    orchard += `M${x - rr} ${y}a${rr} ${rr * 0.9} 0 1 1 ${rr * 2} 0a${rr} ${rr * 0.9} 0 1 1 ${-rr * 2} 0Z`
    orchard += `M${x - 1} ${y + 4}h2v8h-2Z`
  }
  cached = {
    sky,
    cloud,
    cloudLines,
    ground,
    stones,
    stoneShade,
    near,
    nearShade,
    wallCourses,
    backCourses,
    back,
    front,
    farm,
    tiles,
    orchard,
  }
  return cached
}

/** "an elm tree ... plucked up like a radish": lying on its side, the roots in the air. */
function FallenElm() {
  return (
    <g>
      {/* the crown lying on the ground on the left, the trunk running to the roots */}
      <path d="M262 200C250 186 230 182 216 190C204 182 186 186 182 198L178 206H262Z" fill={INK} />
      <path d={gouge(190, 196, 250, 198, 1) + gouge(200, 190, 236, 191, 0.8)} fill={PAPER} />
      <path d="M258 197L334 190L336 198L260 204Z" fill={INK} />
      {/* the plate of roots and earth, torn up and standing on end */}
      <path
        d="M334 204C328 196 328 176 334 166C340 164 344 172 345 184C346 194 342 202 334 204Z"
        fill={INK}
      />
      {/* the roots, torn out of the ground and trailing from the plate */}
      <path
        d="M343 172Q350 166 353 158M345 182Q354 180 360 174M345 192Q354 195 359 202M340 200Q344 207 344 214"
        fill="none"
        stroke={INK}
        strokeWidth={1.8}
        strokeLinecap="round"
      />
      <path d={gouge(335, 172, 337, 198, 0.7)} fill={PAPER} />
    </g>
  )
}

/** "the flagstaff had been blown down": the pole lying in the farmhouse garden, the flag crumpled at its tip. */
function FallenFlagstaff() {
  return (
    <g>
      <path d="M150 204L232 200" stroke={INK} strokeWidth={2.4} strokeLinecap="round" />
      <path d="M150 204L140 199L138 206L146 208Z" fill={INK} />
    </g>
  )
}

/** The pig's standing legs (as the kit sets them), and a tail held rigid behind. */
const LEGS = ['M-27 -14L-27 -4', 'M24 -14L26 -4', 'M-36 -16L-37 -4', 'M14 -14L15 -4']
const RIGID_TAIL = 'M-48 -38L-66 -44'
/** The twitch of the tail: two short strokes either side of it. */
const TWITCH = 'M-70 -52L-64 -50M-72 -40L-66 -40'

/** Napoleon halted and roaring, cut from the kit's pig. */
function Napoleon() {
  const { at, s } = NAPOLEON
  const w = k(s)
  const parts: Part[] = [
    ...LEGS.map((d) => ({ d, w: 8 })),
    { d: PIG_FAR_EAR },
    { d: RIGID_TAIL, w: 3.2 },
    { d: PIG_BODY },
    { d: PIG_EAR },
  ]
  return (
    <g transform={place(at, s)}>
      <Cut parts={parts} halo={w(1.8)}>
        <path d={pigCuts(s, 'napoleon')} fill={PAPER} />
        {pigStrokes(s, 'napoleon').map(([d, sw]) => (
          <path key={d} d={d} fill="none" stroke={PAPER} strokeWidth={sw} strokeLinecap="round" />
        ))}
        {/* the mouth open on the roar */}
        <path
          d="M44 -19.4L55 -20.6L50 -15.8C47.6 -15.4 45.4 -16.6 44 -19.4Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={w(0.9)}
          strokeLinejoin="round"
        />
        {/* his eye, the mind made up, in the spot colour */}
        <path d={gouge(35.6, -39.2, 45, -40.2, w(2.8))} fill={RED} />
      </Cut>
      <path d={TWITCH} stroke={INK} strokeWidth={w(1.4)} strokeLinecap="round" />
    </g>
  )
}

/** "he suddenly roared in a voice of thunder": three strokes off his snout. */
const ROAR = 'M326 272Q338 283 326 294M338 264Q354 283 338 302M350 256Q370 283 350 310'

function TheWindmillFalls({ uid }: ArtProps) {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [420, 250], push: 1.03 })}>
      {/* the torn sky, and the cloud still racing on the wind */}
      <rect x={0} y={0} width={W} height={H} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      <g className="lc-drift" style={timing({ dur: 3.6 })}>
        <path d={m.cloud} fill={INK} />
        <path d={m.cloudLines} fill={PAPER} />
      </g>

      {/* the farm below: the barn with its tiles gone, the orchard, the fallen elm and flagstaff */}
      <rect x={0} y={HORIZON} width={W} height={H - HORIZON} fill={PAPER} />
      <path d={`M-4 ${HORIZON}H${W + 4}`} stroke={INK} strokeWidth={LINE.bold} />
      {/* drawn a little smaller than they were cut, standing on the horizon */}
      <g transform={`translate(0 ${n(HORIZON * 0.2)}) scale(0.8)`}>
        <path d={m.farm} fill={INK} />
        <path d={m.tiles} fill={PAPER} />
        <path d={m.orchard} fill={INK} />
        <FallenFlagstaff />
      </g>
      <g transform={`translate(108 ${n(HORIZON * 0.22)}) scale(0.78)`}>
        <FallenElm />
      </g>

      {/* the top of the knoll */}
      <path
        d={
          `M-4 ${H + 4}V${n(KNOLL(0))}` +
          Array.from({ length: 44 }, (_, i) => `L${n(i * 20)} ${n(KNOLL(i * 20))}`).join('') +
          `L${W + 4} ${n(KNOLL(W))}V${H + 4}Z`
        }
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.bold}
      />
      <path d={m.ground} fill={INK} />

      {/* the ring of the foundations, the stump of wall and the heap of stone */}
      <path d={m.back} fill={INK} stroke={INK} strokeWidth={LINE.bold} strokeLinejoin="round" />
      <path d={m.backCourses} fill={PAPER} />
      <ellipse cx={RING.cx} cy={RING.cy} rx={RING.rx - 3} ry={RING.ry - 2} fill={INK} />
      <path d={m.front} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} strokeLinejoin="round" />
      <path d={m.wallCourses} fill={INK} />
      <path d={m.stones} fill={PAPER} stroke={INK} strokeWidth={1} strokeLinejoin="round" />
      <path d={m.stoneShade} fill={INK} />
      <path d={m.near} fill={PAPER} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
      <path d={m.nearShade} fill={INK} />

      {/* the animals, gazing mournfully at the litter of fallen stone */}
      <Horse at={[760, 300]} s={0.86} face={-1} who="clover" headDown={30} uid={uid} />
      <Horse at={[706, 322]} s={0.98} face={-1} who="boxer" headDown={34} />
      <Benjamin at={[610, 330]} s={1.02} face={-1} />

      {/* Napoleon, halted among the stones, roaring */}
      <Napoleon />
      <path
        className="lc-fade-in"
        style={timing({ delay: 1, dur: 0.5 })}
        d={ROAR}
        fill="none"
        stroke={INK}
        strokeWidth={2.6}
        strokeLinecap="round"
      />
    </g>
  )
}

export const theWindmillFalls: LinocutArt = { width: W, height: H, Draw: TheWindmillFalls }
