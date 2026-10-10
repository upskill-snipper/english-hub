import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  n,
  ribbon,
  rng,
  wave,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, type P, type Pose } from './people'

/**
 * Chapter 59: "Eleven years later", the twentieth and last moment in the
 * guide's timeline: the site of Satis House on a December evening. Every
 * detail is from the held edition (src/data/full-texts/great-expectations.ts):
 *
 * - "There was no house now, no brewery, no building whatever left, but the
 *   wall of the old garden. The cleared space had been enclosed with a rough
 *   fence, and looking over it, I saw that some of the old ivy had struck
 *   root anew, and was growing green on low quiet mounds of ruin. A gate in
 *   the fence standing ajar, I pushed it open, and went in." So the old
 *   garden wall runs across the back, low mounds lie on the ground with ivy
 *   on them, and on the right a rough fence of posts and rails has a gate
 *   standing open in it.
 * - "A cold silvery mist had veiled the afternoon, and the moon was not yet up
 *   to scatter it. But, the stars were shining beyond the mist, and the moon
 *   was coming, and the evening was not dark"; "The moon began to rise"; "The
 *   silvery mist was touched with the first rays of the moonlight". So stars
 *   are cut in the sky, the moon is low and veiled by bands of mist with a
 *   broken ring of light round it, and the mist lies pale across the ground,
 *   so that the two figures stand dark against it. "the evening mists were
 *   rising now": the mist is cut as rising bands, as the morning mist is in
 *   "Leaving the forge", which this ending answers.
 * - "We sat down on a bench that was near"; "'We are friends,' said I, rising
 *   and bending over her, as she rose from the bench"; "I took her hand in
 *   mine, and we went out of the ruined place". So the bench stands behind
 *   them, and Pip, grown, the kit's Pip (./people.tsx), stands bending a
 *   little towards Estella with her hand in his; Estella, the kit's Estella
 *   grown (`age: 'woman'`), faces him, her head a little bowed: "what I had
 *   never seen before, was the saddened softened light of the once proud
 *   eyes". Her dress is not described: it is dark, so that she reads against
 *   the mist as he does.
 *
 * The panel's quotation is what she says to him on the bench just before.
 * Her tears in the moonlight are not drawn. The spot colour is not used: the
 * light here is "silvery", and nothing in the scene is red.
 *
 * Seeds: 5901 (the sky), 5902 (the stars), 5903 (the wall), 5904 (the mist),
 * 5905 (the ivy), 5906 (the ground), 5907 (the moon's ring), 5908 (the fence).
 */

const W = 860
const H = 340
/** The top of the old garden wall, and where the ground meets it. */
const WALL = { x1: 600, top: 128, foot: 236 }
/** The low moon, veiled. */
const MOON: [number, number, number] = [706, 116, 24]
/** The rough fence on the right, and the gate standing open in it. */
const FENCE = { x0: 626, top: 176, foot: 262 }
const GATE = { hinge: 742, top: 184, foot: 264 }
/** The bench behind them. */
const BENCH = { x0: 268, x1: 390, seat: 280 }

type Marks = {
  sky: string
  stars: string
  bricks: string
  mist: string
  mistLow: string
  mounds: string
  ivy: string
  stems: string
  ground: string
  ring: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The night sky: ink, cut lighter towards the low moon and the horizon,
  // where the mist holds the light.
  const glow = (x: number, y: number) =>
    clamp(Math.max(1 - Math.hypot(x - MOON[0], (y - MOON[1]) * 1.4) / 260, ((y - 60) / 180) * 0.5))
  const r = rng(5901)
  let sky = ''
  for (let y = 8; y < 236; y += 5.4) {
    let x = between(r, -40, 0)
    while (x < W) {
      const len = between(r, 22, 90)
      const L = glow(x + len / 2, y)
      if (L > 0.04 && r() < 0.25 + L * 0.75)
        sky += gouge(
          x,
          y + between(r, -0.6, 0.6),
          x + len,
          y + between(r, -0.6, 0.6),
          0.3 + L * 2.2,
        )
      x += len + between(r, 6, 24) * (1.3 - L)
    }
  }
  // "the stars were shining beyond the mist": small four-pointed cuts high
  // in the sky, away from the moon.
  const s = rng(5902)
  let stars = ''
  for (let i = 0; i < 26; i++) {
    const x = between(s, 20, W - 20)
    const y = between(s, 14, 92)
    if (Math.hypot(x - MOON[0], y - MOON[1]) < 70) continue
    const k = between(s, 1.6, 3.2)
    stars += gouge(x - k, y, x + k, y, 0.6) + gouge(x, y - k, x, y + k, 0.6)
  }
  // The old garden wall: courses of brick cut in paper, the bed joints long
  // and the head joints short and staggered, so it reads as brickwork and
  // not as more of the sky. (Cut first as long faint lines only, it did.)
  const b = rng(5903)
  let bricks = ''
  for (let y = WALL.top + 10, row = 0; y < WALL.foot; y += 10, row++) {
    bricks += gouge(-4, y + between(b, -0.4, 0.4), WALL.x1 - 2, y + between(b, -0.4, 0.4), 0.9)
    for (let x = (row % 2) * 13 + 4; x < WALL.x1 - 6; x += 26 + between(b, -1.5, 1.5))
      if (b() < 0.85) bricks += gouge(x, y + 1.5, x + between(b, -0.4, 0.4), y + 8.5, 0.8)
  }
  // The leaves of the ivy: a small pointed leaf at (x, y), k long, turned a degrees.
  const v = rng(5905)
  const leaf = (x: number, y: number, k: number, a: number) => {
    const c = Math.cos(deg(a))
    const si = Math.sin(deg(a))
    const p = (u: number, w: number): string => `${n(x + u * c - w * si)} ${n(y + u * si + w * c)}`
    return `M${p(0, 0)}Q${p(k * 0.45, -k * 0.6)} ${p(k, 0)}Q${p(k * 0.45, k * 0.6)} ${p(0, 0)}Z`
  }
  // "low quiet mounds of ruin", "the old ivy ... growing green" on them:
  // dark humps on the ground, each with leaves cut over its back.
  const mounds =
    'M-6 340V300C20 280 60 272 104 280C140 286 168 300 186 318L196 340Z' +
    'M520 340L530 320C552 302 590 296 626 302C650 306 668 316 680 330L684 340Z' +
    'M720 340C736 324 770 316 806 318C830 320 852 326 870 334V340Z'
  // The ivy on them: trailing stems over each mound, cut in paper, with
  // leaves in pairs along them, larger than a speck, so it reads as a plant.
  let ivy = ''
  let stems = ''
  for (const [x0, x1, yTop, count] of [
    [10, 176, 290, 5],
    [540, 672, 308, 4],
    [740, 856, 326, 3],
  ] as [number, number, number, number][]) {
    for (let i = 0; i < count; i++) {
      const sx = x0 + ((x1 - x0) * (i + 0.5)) / count + between(v, -8, 8)
      const pts: P[] = []
      for (let k = 0; k <= 8; k++) {
        const t = k / 8
        pts.push([
          sx + (t - 0.5) * between(v, 40, 60),
          yTop + 6 + t * (338 - yTop - 6) + Math.sin(t * 6 + i) * 3,
        ])
      }
      stems += ribbon(pts, 1.6, 0.6)
      for (let k = 1; k < 8; k++) {
        const [lx, ly] = pts[k]
        ivy += leaf(lx, ly, between(v, 6.5, 8.5), between(v, -150, -110))
        ivy += leaf(lx, ly, between(v, 6.5, 8.5), between(v, -70, -30))
      }
    }
  }
  // The ground: dark, with long faint cuts where the mist lies on it.
  const g = rng(5906)
  let ground = ''
  for (let y = 244; y < H; y += 6) {
    let x = between(g, -30, 0)
    while (x < W) {
      const len = between(g, 30, 110)
      const L = clamp(0.55 - (y - 244) / 200)
      if (g() < 0.3 + L) ground += gouge(x, y, x + len, y + between(g, -0.5, 0.5), 0.3 + L * 1.6)
      x += len + between(g, 10, 40)
    }
  }
  // "the evening mists were rising": long tapered bands of paper, broad and
  // low over the ground, thinner as they rise, and a few across the moon.
  const m = rng(5904)
  let mist = ''
  const bands: [number, number, number, number][] = [
    [-40, 520, 226, 9],
    [300, 900, 222, 11],
    [-30, 360, 238, 8],
    [420, 900, 236, 10],
    [80, 640, 212, 5],
    [560, 900, 204, 6],
    [600, 860, 126, 4],
    [620, 880, 108, 3],
  ]
  for (const [x0, x1, y, w] of bands)
    mist += ribbon(
      wave(x0, x1, y, between(m, 1.2, 2.4), between(m, 70, 120), between(m, 0, 6), 32),
      w,
      0.8,
    )
  let mistLow = ''
  for (const [x0, x1, y, w] of [
    [-40, 300, 252, 6],
    [380, 900, 256, 7],
    [100, 700, 268, 4],
  ] as [number, number, number, number][])
    mistLow += ribbon(
      wave(x0, x1, y, between(m, 1, 2), between(m, 60, 110), between(m, 0, 6), 32),
      w,
      0.8,
    )
  const ring = arcDashes(
    rng(5907),
    MOON[0],
    MOON[1],
    MOON[2] + 12,
    deg(0),
    deg(360),
    [6, 14],
    [6, 12],
  )
  cached = { sky, stars, bricks, mist, mistLow, mounds, ivy, stems, ground, ring }
  return cached
}

// ── THE PLACE ───────────────────────────────────────────────────────────────

/** The rough fence: uneven posts, two rails, and the gate swung open on its hinge-post. */
function Fence() {
  const r = rng(5908)
  const posts: number[] = []
  for (let x = FENCE.x0; x < W + 10; x += 34) if (Math.abs(x - GATE.hinge) > 20) posts.push(x)
  const postPath = posts
    .map((x) => {
      const top = FENCE.top + between(r, -6, 6)
      return `M${n(x - 3)} ${FENCE.foot}L${n(x - 2.4)} ${n(top)}L${n(x + 2.6)} ${n(top - 2)}L${n(x + 3)} ${FENCE.foot}Z`
    })
    .join('')
  const rails = `M${FENCE.x0 - 4} ${FENCE.top + 18}L${GATE.hinge - 4} ${FENCE.top + 20}M${FENCE.x0 - 4} ${FENCE.top + 52}L${GATE.hinge - 4} ${FENCE.top + 54}M${GATE.hinge + 52} ${FENCE.top + 16}L${W + 10} ${FENCE.top + 12}M${GATE.hinge + 52} ${FENCE.top + 50}L${W + 10} ${FENCE.top + 48}`
  // The gate, standing ajar: seen nearly edge on, swung in towards us.
  const gate = `M${GATE.hinge} ${GATE.top + 2}L${GATE.hinge + 22} ${GATE.top + 14}L${GATE.hinge + 22} ${GATE.foot + 8}L${GATE.hinge} ${GATE.foot - 2}Z`
  const gateBars = `M${GATE.hinge + 2} ${GATE.top + 22}L${GATE.hinge + 20} ${GATE.top + 32}M${GATE.hinge + 2} ${GATE.top + 54}L${GATE.hinge + 20} ${GATE.top + 64}M${GATE.hinge + 2} ${GATE.top + 66}L${GATE.hinge + 20} ${GATE.top + 34}`
  return (
    <g strokeLinejoin="round">
      <path d={rails} stroke={PAPER} strokeWidth={6} strokeLinecap="round" />
      <path d={rails} stroke={INK} strokeWidth={3.4} strokeLinecap="round" />
      <path d={postPath} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      {/* the hinge-post and the far gate-post */}
      <path
        d={`M${GATE.hinge - 4} ${GATE.foot}V${GATE.top - 8}H${GATE.hinge + 4}V${GATE.foot}ZM${GATE.hinge + 48} ${GATE.foot}V${GATE.top - 6}H${GATE.hinge + 56}V${GATE.foot}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={gate} fill="none" stroke={PAPER} strokeWidth={6} />
      <path d={gate} fill="none" stroke={INK} strokeWidth={3.2} />
      <path d={gateBars} fill="none" stroke={PAPER} strokeWidth={5} strokeLinecap="round" />
      <path d={gateBars} fill="none" stroke={INK} strokeWidth={2.6} strokeLinecap="round" />
    </g>
  )
}

/** The plain bench they have risen from, behind them. */
function Bench() {
  const { x0, x1, seat } = BENCH
  const legs = `M${x0 + 10} ${seat + 4}V${seat + 34}M${x1 - 10} ${seat + 4}V${seat + 34}`
  return (
    <g strokeLinejoin="round">
      <path d={legs} stroke={PAPER} strokeWidth={8} strokeLinecap="round" />
      <path d={legs} stroke={INK} strokeWidth={5} strokeLinecap="round" />
      <rect
        x={x0}
        y={seat - 3}
        width={x1 - x0}
        height={8}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
    </g>
  )
}

// ── THE PEOPLE, from the figure kit ─────────────────────────────────────────

/** Pip, risen from the bench, bending a little towards her, her hand in his. */
const PIP_AT: P = [418, 326]
const PIP: Pose = {
  look: 'pip',
  age: 'man',
  eye: 'open',
  body: { neck: [8, -136], hip: [0, -70] },
  head: { at: [14, -156], rot: 12 },
  // His near hand closed round hers: he is drawn after her, so it lies over it.
  near: {
    pts: [
      [10, -130],
      [24, -110],
      [42, -102],
    ],
    hand: 'grip',
    deg: 4,
  },
}
/** Estella, facing him, her head a little bowed, her near hand given to him. */
const ESTELLA_AT: P = [532, 326]
const ESTELLA: Pose = {
  look: 'estella',
  age: 'woman',
  tone: 'ink',
  eye: 'down',
  head: { rot: 10 },
  near: {
    pts: [
      [8, -124],
      [20, -104],
      [36, -100],
    ],
    hand: 'mitt',
    deg: 0,
  },
}
function ElevenYearsLater({ uid }: ArtProps) {
  const m = marks()
  const sky = `${uid}-sky`
  return (
    <>
      <defs>
        <clipPath id={sky}>
          <rect x={0} y={0} width={W} height={244} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [470, 200], push: 1.03 })}>
        {/* the night sky, lighter towards the low moon, and the stars */}
        <g clipPath={`url(#${sky})`}>
          <path d={m.sky} fill={PAPER} />
        </g>
        <path d={m.stars} fill={PAPER} />
        {/* the moon, veiled */}
        <circle cx={MOON[0]} cy={MOON[1]} r={MOON[2]} fill={PAPER} />
        <path d={m.ring} fill="none" stroke={PAPER} strokeWidth={1.6} strokeLinecap="round" />
        {/* the old garden wall, its coping and its courses of brick */}
        <path
          d={`M-6 ${WALL.foot + 4}V${WALL.top}H${WALL.x1}V${WALL.foot + 4}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={`M-6 ${WALL.top - 7}H${WALL.x1 + 6}V${WALL.top + 1}H-6Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.fine}
        />
        <path d={m.bricks} fill={PAPER} />
        {/* the ground */}
        <rect x={0} y={244} width={W} height={H - 244} fill={INK} />
        <path d={m.ground} fill={PAPER} />
        {/* the evening mists, rising */}
        <g className="lc-drift" style={timing({ dur: 3.6 })}>
          <path d={m.mist} fill={PAPER} />
        </g>
        <Fence />
        <path d={m.mistLow} fill={PAPER} />
        <Bench />
        {/* the two of them, her hand in his */}
        <Person pose={ESTELLA} at={ESTELLA_AT} scale={1.32} flip />
        <Person pose={PIP} at={PIP_AT} scale={1.32} />
        {/* the low mounds of ruin, with the ivy grown green on them */}
        <path d={m.mounds} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.stems} fill={PAPER} />
        <path d={m.ivy} fill={PAPER} stroke={INK} strokeWidth={0.6} />
      </g>
    </>
  )
}

export const elevenYearsLater: LinocutArt = { width: W, height: H, Draw: ElevenYearsLater }
