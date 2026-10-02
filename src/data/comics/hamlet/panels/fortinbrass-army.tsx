import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rng, wedge, type Pt } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, type Pose } from './people'

/**
 * Act 4, Scene 4: "Fortinbras's army", the fourteenth moment in the guide's
 * timeline. Every detail is from the held edition
 * (src/data/full-texts/hamlet.ts):
 *
 * - "A plain in Denmark." "Enter Fortinbras and Forces marching." So the
 *   ground is open and flat to a low horizon, and a road runs across it.
 * - "Go softly on." Fortinbras sends his army on, and Hamlet, coming by, asks
 *   the Captain whose it is and where it goes: "We go to gain a little patch
 *   of ground / That hath in it no profit but the name", and "it is already
 *   garrison'd". So the column marches away along the road towards a small
 *   fort on a low hill far off on the right, the patch of ground it will die
 *   for.
 * - "Witness this army of such mass and charge, / Led by a delicate and tender
 *   prince"; "The imminent death of twenty thousand men". So the column is
 *   long, rank after rank of pikemen shrinking into the distance until it is a
 *   hatching of pikes, with Fortinbras somewhere at its far head, too small to
 *   make out.
 * - "I'll be with you straight. Go a little before. [Exeunt all but
 *   Hamlet.]" So Hamlet stands alone on a rise in front, watching the army
 *   go, and is the one figure in the foreground: black against the pale sky.
 * - "O, from this time forth, / My thoughts be bloody or be nothing worth."
 *   The spot colour is on the army's pennants, the war that the soliloquy
 *   measures him against. It stands for no wound.
 *
 * The soldiers' dress is not described, so they are plain pikemen of no
 * particular army: a round steel helmet, a jerkin, a pike on the shoulder. Nothing
 * is taken from a film or stage production. Seeds: 1401 (sky), 1402 (plain),
 * 1403 (hills and the rise), 1404 (the column).
 */

const W = 860
const H = 340
const HORIZON = 170
/** Where the road vanishes, on the horizon at the right. */
const VP: Pt = [822, 171]
/** The near end of the column, on the road just past Hamlet's rise. */
const NEAR: Pt = [384, 288]
/** How far apart the ranks are on the ground, in the units of `depth` below. */
const STEP = 0.14
/** The ranks drawn man by man; those behind them close up into one mass. */
const SINGLE = 9
const RANKS = 90
/** A man in the nearest rank, against a man 100 units tall. */
const NEAR_SCALE = 1.06

/** Depth along the road: 1 at the near end, falling towards 0 at the vanishing point. */
const depth = (i: number) => 1 / (1 + STEP * i)
/** The foot of a man in rank `i`, on the near side (0) or the far side (1) of the road. */
function footAt(i: number, side: 0 | 1): Pt {
  const u = depth(i) * (side ? 0.95 : 1)
  return [VP[0] + (NEAR[0] - VP[0]) * u + side * 9 * u, VP[1] + (NEAR[1] - VP[1]) * u]
}
const scaleAt = (i: number, side: 0 | 1) => NEAR_SCALE * depth(i) * (side ? 0.95 : 1)

type Marks = {
  sky: string
  plain: string
  road: string
  hillCuts: string
  riseCuts: string
  men: string[]
  mass: string
  massCuts: string
  pikes: Map<string, string>
  heads: string
  pennants: string
}

/**
 * One pikeman marching right, feet at `foot`, `s` the scale of a man about
 * 100 tall: a round helmet with a brim, a jerkin, two legs in stride and the
 * near arm up to the pike on his shoulder. Every part is a filled shape in the
 * panel's own coordinates, so a man is one path.
 */
function pikeman(foot: Pt, s: number, stride: 1 | -1): string {
  const P = (x: number, y: number) => `${n(foot[0] + x * s)} ${n(foot[1] + y * s)}`
  // A limb as a tapering quad, always wound the same way round as the
  // outlines below: a man is one path, and a part wound the other way would
  // cut a hole where it crosses another.
  const L = (x1: number, y1: number, x2: number, y2: number, w1: number, w2: number) => {
    const ax = foot[0] + x1 * s
    const ay = foot[1] + y1 * s
    const bx = foot[0] + x2 * s
    const by = foot[1] + y2 * s
    const len = Math.hypot(bx - ax, by - ay) || 1
    let nx = -(by - ay) / len
    let ny = (bx - ax) / len
    // wound clockwise on the screen: the normal must point to the right of the direction of travel
    if (nx * (by - ay) - ny * (bx - ax) > 0) {
      nx = -nx
      ny = -ny
    }
    const a = (w1 * s) / 2
    const b = (w2 * s) / 2
    return `M${n(ax - nx * a)} ${n(ay - ny * a)}L${n(bx - nx * b)} ${n(by - ny * b)}L${n(bx + nx * b)} ${n(by + ny * b)}L${n(ax + nx * a)} ${n(ay + ny * a)}Z`
  }
  const a = stride
  const shoe = (x: number) => `M${P(x - 4, -5)}L${P(x + 6, -4.5)}L${P(x + 8, 0)}L${P(x - 5, 0)}Z`
  return (
    L(2, -44, 6 * a, -22, 8.5, 7) +
    L(6 * a, -22, 10 * a, -3, 7, 6) +
    L(-2, -44, -4 * a, -21, 8.5, 7) +
    L(-4 * a, -21, -9 * a, -3, 7, 6) +
    shoe(10 * a) +
    shoe(-9 * a) +
    // the helmet: a low round crown with a comb, its narrow brim turned up
    // at front and back, so it reads as steel and not as a hat
    `M${P(-13, -84.6)}Q${P(-9.4, -88.4)} ${P(-6.6, -89)}C${P(-7.6, -97)} ${P(-3, -100)} ${P(1.4, -100)}C${P(6, -100)} ${P(10, -97)} ${P(9.2, -89)}Q${P(12.6, -88.4)} ${P(15.6, -85)}Q${P(9, -87.2)} ${P(1.4, -87.2)}Q${P(-6.4, -87.2)} ${P(-13, -84.6)}Z` +
    `M${P(-2.6, -99.4)}C${P(-1.4, -104)} ${P(4.2, -104)} ${P(5.4, -99.4)}Z` +
    // the face, and the jerkin to its flared skirt, in one outline
    `M${P(-6, -88)}L${P(8.5, -88)}L${P(8.5, -84)}L${P(8, -81)}L${P(5, -79.5)}L${P(10, -76)}C${P(12, -66)} ${P(11, -57)} ${P(8.5, -50)}L${P(12.5, -40)}L${P(-11.5, -40)}L${P(-8.5, -50)}C${P(-11.5, -60)} ${P(-11.5, -70)} ${P(-9.5, -77)}L${P(-5, -80.5)}L${P(-6.5, -86)}Z` +
    // the near arm, bent up to the pike
    L(4, -75, 11, -61, 6.5, 6) +
    L(11, -61, 6, -55, 6, 6)
  )
}

/** A pike on a man's shoulder: from below his hand up past his helmet, leaning back. */
function pikeOf(foot: Pt, s: number, lean: number): [Pt, Pt] {
  return [
    [foot[0] + 7 * s, foot[1] - 30 * s],
    [foot[0] - lean * s, foot[1] - 200 * s],
  ]
}

/** A pike's head: a narrow leaf at the tip, pointing along the shaft. */
function pikeHead(base: Pt, tip: Pt, s: number): string {
  const dx = tip[0] - base[0]
  const dy = tip[1] - base[1]
  const len = Math.hypot(dx, dy) || 1
  const ux = dx / len
  const uy = dy / len
  const L = 11 * s
  const w = 2.6 * s
  const t2: Pt = [tip[0] + ux * L, tip[1] + uy * L]
  const m: Pt = [tip[0] + ux * L * 0.35, tip[1] + uy * L * 0.35]
  return `M${n(tip[0])} ${n(tip[1])}L${n(m[0] - uy * w)} ${n(m[1] + ux * w)}L${n(t2[0])} ${n(t2[1])}L${n(m[0] + uy * w)} ${n(m[1] - ux * w)}Z`
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The sky: paper, cut through with ink lines that thicken towards the top.
  const s = rng(1401)
  let sky = ''
  for (let y = 10; y < HORIZON - 12; y += 6.4) {
    let x = between(s, -30, 0)
    while (x < W) {
      const len = between(s, 40, 140)
      const D = clamp(0.66 - (y - 10) / 200)
      if (s() < 0.15 + D)
        sky += gouge(
          x,
          y + between(s, -0.6, 0.6),
          x + len,
          y + between(s, -0.6, 0.6),
          0.3 + D * 2.1,
        )
      x += len + between(s, 8, 30)
    }
  }
  // The plain: long ink furrows, wider and further apart towards us, broken
  // where the road crosses them.
  const p = rng(1402)
  const roadHalf = (y: number) => {
    const t = (y - VP[1]) / (NEAR[1] - VP[1])
    return { c: VP[0] + (NEAR[0] - VP[0]) * t, half: 3 + 64 * t }
  }
  let plain = ''
  for (let k = 0, y = HORIZON + 6; y < H + 4; k++) {
    const t = (y - HORIZON) / (H - HORIZON)
    const { c, half } = roadHalf(y)
    let x = between(p, -40, 0)
    while (x < W) {
      const len = between(p, 40, 150) * (0.6 + t)
      let x2 = x + len
      if (x < c + half && x2 > c - half) x2 = Math.min(x2, c - half - 4)
      if (x2 - x > 8 && p() < 0.8)
        plain += gouge(x, y, x2, y + between(p, -0.6, 0.6), 0.4 + t * 1.9)
      x += len + between(p, 10, 40) * (0.5 + t)
      if (x > c - half - 4 && x < c + half + 4) x = c + half + 4
    }
    y += 3 + t * 9 + k * 0.05
  }
  // the edges of the road, two lines running back to the vanishing point
  const edgeAt = (side: -1 | 1, y: number): Pt => {
    const { c, half } = roadHalf(y)
    return [c + side * half, y]
  }
  const a1 = edgeAt(-1, H + 10)
  const b1 = edgeAt(1, H + 10)
  const road =
    wedge(a1[0], a1[1], VP[0] - 2, VP[1] + 1, 3, 0.5) +
    wedge(b1[0], b1[1], VP[0] + 2, VP[1] + 1, 3, 0.5)

  // The low hills along the horizon, cut in paper hatching over ink.
  const h = rng(1403)
  let hillCuts = ''
  for (let y = 150; y < 175; y += 3.4) {
    let x = between(h, -20, 0)
    while (x < W) {
      const len = between(h, 14, 46)
      if (h() < 0.45) hillCuts += gouge(x, y, x + len, y + between(h, -0.3, 0.3), 0.45)
      x += len + between(h, 8, 22)
    }
  }
  // Hamlet's rise: its grass cut in paper.
  let riseCuts = ''
  for (let i = 0; i < 46; i++) {
    const x = between(h, 4, 250)
    const top = x < 120 ? 246 - (x / 120) * 4 : 242 + ((x - 120) / 170) * 70
    const y = between(h, top + 10, H - 6)
    riseCuts += gouge(x, y, x + between(h, -3, 3), y - between(h, 5, 11), 0.8)
  }

  // The column. The near ranks are cut man by man, back to front, each with
  // a paper edge so he stands clear of the man behind; the ranks behind them
  // close up into one dark mass with its legs and helmets cut in paper.
  const c = rng(1404)
  const men: string[] = []
  const pikes = new Map<string, string>()
  let heads = ''
  let pennants = ''
  for (let i = RANKS; i >= 0; i--) {
    for (const side of [1, 0] as const) {
      const f = footAt(i, side)
      const sc = scaleAt(i, side)
      const [b, t] = pikeOf(f, sc, between(c, 12, 20))
      const w = n(Math.max(LINE.hairline, 2.8 * sc))
      pikes.set(w, (pikes.get(w) ?? '') + `M${n(b[0])} ${n(b[1])}L${n(t[0])} ${n(t[1])}`)
      if (sc > 0.18) heads += pikeHead(b, t, sc)
      if (side === 1 && [1, 6, 14, 28, 50].includes(i)) {
        const k = sc
        const fx = t[0] + 0.4 * k
        const fy = t[1] + 6 * k
        pennants += `M${n(fx)} ${n(fy)}L${n(fx + 44 * k)} ${n(fy + 5 * k)}L${n(fx + 30 * k)} ${n(fy + 12 * k)}L${n(fx + 40 * k)} ${n(fy + 19 * k)}L${n(fx)} ${n(fy + 21 * k)}Z`
      }
      if (i <= SINGLE) men.push(pikeman(f, sc, (i + side) % 2 ? 1 : -1))
    }
  }
  // The mass: from the last single rank to the vanishing point, the band
  // between the men's feet and their helmets.
  const top: Pt[] = []
  const bottom: Pt[] = []
  for (let i = SINGLE + 0.5; i <= RANKS + 30; i += 0.5) {
    const f = footAt(i, 0)
    const sc = scaleAt(i, 0)
    const bob = (Math.round(i * 2) % 2) * 3 * sc
    top.push([f[0] - 2 * sc, f[1] - (99 - bob) * sc])
    bottom.push([f[0] - 2 * sc, f[1] - 0.5])
  }
  const mass =
    'M' + [...top, ...bottom.reverse()].map(([x, y]) => `${n(x)} ${n(y)}`).join('L') + 'Z'
  // the gaps between the legs and a glint on each helmet, cut in paper
  let massCuts = ''
  for (let i = SINGLE + 1; i <= 34; i += 0.5) {
    const f = footAt(i, 0)
    const sc = scaleAt(i, 0)
    massCuts += gouge(f[0] + 1 * sc, f[1] - 1.5, f[0] + 2 * sc, f[1] - 38 * sc, 1.8 * sc)
    if (i < 22)
      massCuts += gouge(f[0] - 9 * sc, f[1] - 92 * sc, f[0] + 3 * sc, f[1] - 93 * sc, 1.2 * sc)
  }
  cached = {
    sky,
    plain,
    road,
    hillCuts,
    riseCuts,
    men,
    mass,
    massCuts,
    pikes,
    heads,
    pennants,
  }
  return cached
}

/** The low hills along the horizon, rising to the fort's hill at the right. */
const HILLS =
  'M-6 172C60 165 120 161 190 164C260 167 320 160 400 163C470 166 540 158 610 162C660 165 704 158 744 150C772 144 798 142 820 146C840 150 852 155 866 160V178H-6Z'
/** The fort on its hill: a curtain wall and a square tower, with a flag. */
const FORT =
  'M782 147V128H786V123H790V128H794V123H798V128H802V118H806V112H810V118H814V112H818V118H822V128H826V123H830V128H834V147Z'
/** Hamlet's rise: a dark knoll in the left foreground. */
const RISE = 'M-6 246C40 240 82 240 120 242C160 246 206 262 246 284C270 298 292 318 304 346H-6Z'

/**
 * Hamlet on the rise: the kit's figure (./people.tsx), standing still with
 * his face to the army, his head a little bowed, his cloak lifted behind him
 * by the wind on the plain; his near hand closed on his breast, the far arm
 * at his side: "O, from this time forth, / My thoughts be bloody or be
 * nothing worth."
 */
const HAMLET: Pose = {
  look: 'hamlet',
  head: { rot: 7 },
  eye: 'down',
  brow: 'frown',
  cloak: 14,
  legs: {
    far: [
      [-3, -70],
      [-6, -36],
      [-9, -3],
    ],
    near: [
      [3, -70],
      [10, -37],
      [14, -3],
    ],
  },
  far: {
    pts: [
      [-4, -132],
      [-8, -104],
      [-6, -80],
    ],
  },
  near: {
    pts: [
      [5, -132],
      [6, -104],
      [14, -118],
    ],
    hand: 'mitt',
    deg: -24,
  },
}
const HAMLET_AT: [number, number] = [150, 254]

function FortinbrassArmy({ uid }: ArtProps) {
  const m = marks()
  void uid
  return (
    <g className="lc-push" style={timing({ origin: [560, 200], push: 1.03 })}>
      <rect x={0} y={0} width={W} height={H} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      <path d={HILLS} fill={INK} />
      <path d={m.hillCuts} fill={PAPER} />
      <path d={FORT} fill={INK} stroke={PAPER} strokeWidth={1.2} />
      <path d="M808 112V101L819 104L808 107" stroke={INK} strokeWidth={1.2} fill="none" />
      <path d={m.plain} fill={INK} />
      <path d={m.road} fill={INK} />
      <g className="lc-drift" style={timing({ delay: 0.2 })}>
        {[...m.pikes].map(([w, d]) => (
          <path key={w} d={d} stroke={INK} strokeWidth={w} strokeLinecap="round" />
        ))}
        <path d={m.heads} fill={INK} />
        <path d={m.mass} fill={INK} />
        <path d={m.massCuts} fill={PAPER} />
        {m.men.map((d, i) => (
          <path
            key={i}
            d={d}
            fill={INK}
            stroke={PAPER}
            strokeWidth={2.6}
            strokeLinejoin="round"
            paintOrder="stroke"
          />
        ))}
        <path d={m.pennants} fill={RED} stroke={INK} strokeWidth={0.8} strokeLinejoin="round" />
      </g>
      <path d={RISE} fill={INK} />
      <path d={m.riseCuts} fill={PAPER} />
      <Person pose={HAMLET} at={HAMLET_AT} scale={1.16} />
    </g>
  )
}

export const fortinbrassArmy: LinocutArt = { width: W, height: H, Draw: FortinbrassArmy }
