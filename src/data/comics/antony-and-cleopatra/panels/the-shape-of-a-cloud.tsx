import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, n, ribbon, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { flagFloor, footShadow } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { cut, lightField } from './light-cuts'
import { Column, EDGE, beam, parapet } from './palace'
import { Person, type P } from './people'

/**
 * Act 4, Scene 14: "The shape of a cloud", the twentieth moment in the
 * guide's timeline. Every detail is from the scene, as the held edition
 * prints it (src/data/full-texts/antony-and-cleopatra.ts):
 *
 * - "Alexandria. Another Room." "Enter Antony and Eros." So a room of the
 *   palace, the same palace as the halls of Act 1 (./palace.tsx): its round
 *   column, its beam, the low wall along the foot of the opening, the stone
 *   floor. The play does not say they look at the sky, so the room is drawn
 *   open to it, and the clouds Antony speaks of are drawn in it.
 * - ANTONY: "Sometime we see a cloud that’s dragonish, A vapour sometime like
 *   a bear or lion, A towered citadel"; "They are black vesper’s pageants."
 *   Vesper is the evening, so it is evening: the sun low over the sea beyond
 *   the palace, the clouds dark against the glow. On the right a cloud bank
 *   rises into towers and battlements: the towered citadel.
 * - ANTONY: "That which is now a horse, even with a thought The rack dislimns
 *   and makes it indistinct As water is in water." So the great cloud is a
 *   horse, its head, ears, arched neck and forelegs clear, and from the back
 *   its body breaks into level streaks that blow away to the right.
 * - ANTONY: "My good knave Eros, now thy captain is Even such a body. Here I
 *   am Antony, Yet cannot hold this visible shape". So Antony stands at the
 *   opening, in the armour and general's cloak of the kit (./people.tsx): he
 *   has come from the field, and only later in the scene says "Unarm, Eros".
 *   He looks up at the horse and lifts his hand to it, the elbow bent and
 *   the fingers open.
 * - ANTONY: "Nay, weep not, gentle Eros." So Eros, behind him in his belted
 *   tunic, bows his head.
 *
 * RED is the setting sun, a large disc low over the sea, clear of every face
 * and hand: the evening of the "black vesper’s pageants", the sun Antony said
 * he would not see rise again ("O sun, thy uprise shall I see no more", 4.12),
 * going down in the next panel as he is carried to the monument. Its light on
 * the water is cut in paper, never red.
 *
 * WHAT IS LEFT OUT. The rest of the scene is never drawn or suggested: no
 * sword is drawn or worn by anyone, Eros has no blade, nothing in the room
 * hints at what follows, and the quotation is the line about the cloud.
 * Nothing is taken from a film or stage production. Seeds: 2001 (the sky),
 * 2002 (the wall), 2003 (the floor), 2004 (the sea), 2005 (the lines through
 * the horse), 2006 (the parapet), 2007 (the lines through the citadel), 2008
 * (the rack).
 */

const W = 860
const H = 340
/** The beam across the top, the floor line, the sea's horizon and the top of the low wall. */
const BEAM = { top: 14, bottom: 40 }
const WALL_FOOT = 262
const HORIZON = 214
const SILL = 232
const FEET = 324
/** The column at the left of the opening; the opening runs on out of the picture. */
const COL = 166
/** The setting sun, and its radius. */
const SUN: P = [660, 196]
const SUN_R = 30
/** The scale of the people in the room, as in the halls of Act 1. */
const S = 1.06

// ── The clouds ────────────────────────────────────────────────────────────────

/**
 * The horse, facing left towards Antony, in its own frame (the front of the
 * chest at 0, 0): its long head bent down to the left, two ears pricked up,
 * the mane standing up in tufts along the arched neck, the back, one foreleg
 * lifted at the knee and one hanging. It has no hindquarters: the body ends
 * in a torn edge, where the rack is pulling it apart.
 */
const HORSE =
  'M-44 -52C-42 -60 -36 -70 -30 -78C-26 -84 -22 -88 -19 -91L-16 -106L-11 -93L-6 -107L-2 -92' +
  'L4 -96L7 -88L13 -92L15 -83L21 -85L22 -76L28 -76L27 -67L33 -65L31 -57L36 -54' +
  'C50 -50 64 -49 76 -48L84 -45L80 -40L90 -36L83 -31L93 -26L85 -21L91 -15L82 -10L87 -4L77 2' +
  'L80 7C62 10 38 12 18 10' +
  'L12 46L13 54L2 54L2 46L0 14L-4 10L-18 18L-22 30L-26 36L-33 33L-29 27L-27 14' +
  'C-20 6 -12 0 -8 -6C-12 -16 -14 -30 -12 -44C-11 -50 -12 -56 -16 -60' +
  'C-22 -56 -28 -48 -34 -45C-38 -44 -42 -46 -44 -52Z'
/** Where the horse is placed, and its scale. */
const HORSE_AT: P = [500, 160]
const HORSE_S = 0.86

/**
 * The towered citadel, in its own frame (the foot of its bank at 0, 0): a
 * bank of cloud, and rising from it a wall with three square towers and
 * merlons along their tops, the one shape in the sky that is not round, so it
 * reads as a citadel.
 */
const CITADEL_BANK: [number, number, number][] = [
  [2, -4, 9],
  [12, -8, 12],
  [24, -10, 13],
  [36, -9, 13],
  [48, -11, 14],
  [60, -10, 13],
  [72, -12, 14],
  [84, -10, 13],
  [96, -8, 12],
  [108, -6, 11],
  [119, -4, 9],
  [128, -2, 6.4],
]
const CITADEL_WALL = (() => {
  const merlons = (x0: number, x1: number, top: number, w = 5, h = 6) => {
    let d = ''
    for (let x = x0; x + w <= x1 + 0.1; x += w * 2)
      d += `H${n(x)}V${n(top - h)}H${n(x + w)}V${n(top)}`
    return d
  }
  // from the bottom left, up and over the towers, and down the right
  return (
    `M8 -14V-40H16V-70${merlons(16, 36, -70)}H36V-40` +
    `${merlons(36, 54, -40, 4.5, 5)}H54V-92${merlons(54, 82, -92, 5.6, 7)}H82V-40` +
    `${merlons(82, 98, -40, 4.5, 5)}H98V-64${merlons(98, 118, -64)}H118V-40H124V-14Z`
  )
})()
const CITADEL_AT: P = [718, 178]

/**
 * Rounds as path data, each moved to `at` and scaled by `s`. Each is drawn
 * clockwise, the way the citadel's wall runs: a round wound the other way
 * cancels where it overlaps the wall, under the nonzero rule, and its overlap
 * printed as a paper hole (the first cut's bank was a row of beads).
 */
function roundsPath(rs: [number, number, number][], at: P, s: number) {
  return rs
    .map(([cx, cy, r]) => {
      const x = at[0] + cx * s
      const y = at[1] + cy * s
      const rr = r * s
      return `M${n(x - rr)} ${n(y)}a${n(rr)} ${n(rr)} 0 1 1 ${n(rr * 2)} 0a${n(rr)} ${n(rr)} 0 1 1 ${n(-rr * 2)} 0Z`
    })
    .join('')
}

/**
 * Fine paper lines ruled across a cloud, in rows `every` apart, broken as a
 * hand cuts them, `w(x, y)` their half-width at each point (0 for none). On
 * a phone they close into a dark grey, so a cloud reads as a cloud there too.
 * Clip them to the cloud.
 */
function striate(
  seed: number,
  box: { x0: number; x1: number; y0: number; y1: number },
  w: (x: number, y: number) => number,
  every = 4.4,
) {
  const r = rng(seed)
  let d = ''
  for (let y = box.y0; y < box.y1; y += every) {
    let x = box.x0 - between(r, 0, 20)
    while (x < box.x1) {
      const len = between(r, 18, 60)
      const ww = w(x + len / 2, y)
      if (ww > 0) d += cut(x, y + between(r, -0.5, 0.5), len, ww, between(r, -0.4, 0.4))
      x += len + between(r, 3, 9)
    }
  }
  return d
}

/** Path data in absolute M, L, H, V, C and Z only, moved to `at` and scaled by `s`. */
function placed(d: string, at: P, s: number) {
  return d.replace(/([MLHVCZ])([^MLHVCZ]*)/g, (_, cmd: string, args: string) => {
    const v = args.trim()
      ? args
          .trim()
          .split(/[\s,]+|(?=-)/)
          .filter(Boolean)
          .map(Number)
      : []
    if (cmd === 'H') return `H${n(at[0] + v[0] * s)}`
    if (cmd === 'V') return `V${n(at[1] + v[0] * s)}`
    if (cmd === 'Z') return 'Z'
    const out: string[] = []
    for (let i = 0; i + 1 < v.length; i += 2)
      out.push(`${n(at[0] + v[i] * s)} ${n(at[1] + v[i + 1] * s)}`)
    return `${cmd}${out.join(' ')}`
  })
}

type Marks = {
  sky: string
  wall: string
  floor: string
  sea: string
  parapet: { shape: string; cuts: string }
  horse: string
  horseCuts: string
  rack: string
  citadel: string
  citadelCuts: string
  streaks: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The evening sky, on the paper: ink cuts heavy and close overhead, thinning
  // downwards until the glow over the sea and round the sun is all but clean,
  // so the clouds and the two heads stand dark against it.
  const skyLight = (x: number, y: number) =>
    clamp(
      Math.max(
        clamp((y - 50) / 118) ** 0.85,
        1.1 - Math.hypot((x - SUN[0]) * 0.5, (y - SUN[1]) * 1.1) / 230,
      ),
    )
  const r = rng(2001)
  let sky = ''
  for (let y = BEAM.bottom + 3; y < HORIZON - 1; y += 4.6) {
    let x = COL + between(r, -40, 0)
    while (x < W) {
      const len = between(r, 30, 120)
      const D = 1 - skyLight(x + len / 2, y)
      if (r() < 0.12 + D * 0.88)
        sky += cut(
          x,
          y + between(r, -0.6, 0.6),
          len,
          0.3 + D ** 1.4 * 3.4,
          between(r, -0.8, 0.8),
          between(r, -0.4, 0.4),
        )
      x += len * (1 - D * 0.3) + between(r, 8, 40) * (1 - D * 0.85)
    }
  }
  // The wall at the left, out of the light, cut a little more towards the opening.
  const wall = lightField(
    2002,
    { x0: 0, x1: COL - 12, y0: BEAM.bottom + 2, y1: WALL_FOOT },
    (x, y) => clamp(0.1 + (x / COL) * 0.34 - (y - 150) / 1000),
    { spacing: 6, len: [12, 40], gap: [6, 18], max: 3 },
  )
  const floor = flagFloor(rng(2003), W, H, WALL_FOOT, [520, 130], 64, 5)
  // The sea between the horizon and the low wall: it gives back the glow, so
  // it is paper ruled with ink lines that close up towards the near shore,
  // and the sun's path down it is left all but clean.
  const s = rng(2004)
  let sea = ''
  for (let y = HORIZON + 2.2; y < SILL - 1; y += 2.8) {
    const t = (y - HORIZON) / (SILL - HORIZON)
    let x = COL + between(s, -20, 0)
    while (x < W) {
      const len = between(s, 12, 40) * (1 + t * 0.4)
      const mid = x + len / 2
      const lit = clamp(1 - Math.abs(mid - SUN[0]) / (24 + t * 30))
      const D = (0.35 + t * 0.5) * (1 - lit)
      if (s() < 0.2 + D * 0.8) sea += cut(x, y, len, 0.35 + D * 1.3, between(s, -0.3, 0.3))
      x += len + between(s, 4, 18) * (1.2 - D)
    }
  }
  const par = parapet(2006, COL + 14, W + 10, SILL, WALL_FOOT)
  const horse = placed(HORSE, HORSE_AT, HORSE_S)
  // Fine paper lines ruled through it, as through the citadel, so it is made
  // of cloud: thinnest across the head and legs, which keep the shape, and
  // wider towards the hindquarters, where the rack tears it into strands.
  const at = (x: number, y: number): P => [HORSE_AT[0] + x * HORSE_S, HORSE_AT[1] + y * HORSE_S]
  const [hx0, hy0] = at(-48, -110)
  const [hx1, hy1] = at(112, 56)
  const horseCuts = striate(2005, { x0: hx0, x1: hx1, y0: hy0, y1: hy1 }, (x, y) => {
    const lx = (x - HORSE_AT[0]) / HORSE_S
    const ly = (y - HORSE_AT[1]) / HORSE_S
    if (ly > 12 || (lx < 4 && ly < -40)) return 0.5
    return 0.6 + clamp((lx - 40) / 60) * 1.3
  })
  // The rack: past the torn edge the body comes apart into short ink cuts
  // like the sky's own, in rows that spread and lift as they go, each row's
  // pieces shorter, thinner and further apart than the last, until they are
  // the sky's lines again: "indistinct As water is in water". Broken pieces,
  // not long straight streaks, which would read as the speed lines of a
  // horse galloping away.
  const k = rng(2008)
  let rack = ''
  for (let row = 0; row < 9; row++) {
    const ly = -42 + row * 5.6
    let lx = 84 + between(k, -4, 6)
    for (let i = 0; lx < 200; i++) {
      const t = clamp((lx - 84) / 112)
      const len = between(k, 14, 30) * (1 - t * 0.25)
      if (k() < 0.94 - t * 0.45) {
        const [x0, y0] = at(lx, ly - t * 16 + (row - 4) * t * 3 + between(k, -1, 1))
        rack += cut(x0, y0, len * HORSE_S, (2.3 - t * 1.75) * HORSE_S, between(k, -0.6, 0.6))
      }
      lx += len + between(k, 3, 8) + t * 12
    }
  }
  const citadel = roundsPath(CITADEL_BANK, CITADEL_AT, 1) + placed(CITADEL_WALL, CITADEL_AT, 1)
  // The same fine lines through the citadel. Clipped to it.
  const citadelCuts = striate(
    2007,
    {
      x0: CITADEL_AT[0] - 8,
      x1: CITADEL_AT[0] + 138,
      y0: CITADEL_AT[1] - 102,
      y1: CITADEL_AT[1] + 12,
    },
    () => 0.62,
  )
  // Two long streaks of cloud: one low over the sea beside the sun, one high
  // over the citadel.
  const streak = (x0: number, y0: number, len: number, w: number) => {
    const pts: P[] = []
    for (let i = 0; i <= 12; i++) {
      const t = i / 12
      pts.push([x0 + len * t, y0 + Math.sin(t * 4 + x0) * 1.6 - t * 3])
    }
    return ribbon(pts, w, 0.7)
  }
  const streaks = streak(536, 206, 84, 3.4) + streak(470, 200, 40, 2.2) + streak(690, 66, 140, 4.2)
  cached = {
    sky,
    wall,
    floor,
    sea,
    parapet: par,
    horse,
    horseCuts,
    rack,
    citadel,
    citadelCuts,
    streaks,
  }
  return cached
}

/** Where Eros and Antony stand. */
const EROS_AT: P = [236, FEET]
const ANTONY_AT: P = [362, FEET + 2]
/**
 * Antony's near arm, lifted to the cloud: the upper arm forward and down, the
 * forearm rising, the hand open at the height of his shoulder with its
 * fingers towards the horse. Never a straight arm (./people.tsx, HANDS).
 */
const ANTONY_NEAR: P[] = [
  [5, -128],
  [22, -108],
  [40, -126],
]

function TheShapeOfACloud({ uid }: ArtProps) {
  const m = marks()
  const b = beam(W, BEAM.top, BEAM.bottom)
  const clip = { horse: `${uid}-horse`, citadel: `${uid}-citadel` }
  return (
    <g className="lc-push" style={timing({ origin: [560, 150], push: 1.03 })}>
      <defs>
        <clipPath id={clip.horse}>
          <path d={m.horse} />
        </clipPath>
        <clipPath id={clip.citadel}>
          <path d={m.citadel} />
        </clipPath>
      </defs>
      <rect x={0} y={0} width={W} height={H} fill={INK} />

      {/* the evening sky in the opening, the sea, and the sun going down */}
      <rect x={COL} y={BEAM.bottom} width={W - COL} height={HORIZON - BEAM.bottom} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      <circle cx={SUN[0]} cy={SUN[1]} r={SUN_R + 3} fill={INK} />
      <circle cx={SUN[0]} cy={SUN[1]} r={SUN_R} fill={RED} />
      <rect x={COL} y={HORIZON} width={W - COL} height={SILL - HORIZON} fill={PAPER} />
      <path d={m.sea} fill={INK} />
      <path d={`M${COL} ${HORIZON}H${W}`} stroke={INK} strokeWidth={1.2} />

      {/* streaks of cloud, and the towered citadel */}
      <path d={m.streaks} fill={INK} />
      <path
        d={m.citadel}
        fill={PAPER}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path d={m.citadel} fill={INK} />
      <g clipPath={`url(#${clip.citadel})`}>
        <path d={m.citadelCuts} fill={PAPER} />
      </g>

      {/* the horse, its hindquarters breaking into the rack */}
      <g className="lc-drift" style={timing({ delay: 0.4 })}>
        <path d={m.rack} fill={INK} />
      </g>
      <path
        d={m.horse}
        fill={PAPER}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path d={m.horse} fill={INK} />
      <g clipPath={`url(#${clip.horse})`}>
        <path d={m.horseCuts} fill={PAPER} />
      </g>

      {/* the wall at the left, the low wall along the opening, the column and the beam */}
      <rect x={0} y={BEAM.bottom} width={COL} height={WALL_FOOT - BEAM.bottom} fill={INK} />
      <path d={m.wall} fill={PAPER} />
      <path d={m.parapet.shape} fill={INK} {...EDGE} />
      <path d={m.parapet.cuts} fill={PAPER} />
      <Column cx={COL} top={BEAM.bottom} foot={WALL_FOOT + 1} />
      <path d={b.shape} fill={INK} {...EDGE} />
      <path d={b.cuts} fill={PAPER} />

      {/* the stone floor of the room */}
      <rect x={0} y={WALL_FOOT} width={W} height={H - WALL_FOOT} fill={PAPER} />
      <path d={m.floor} fill={INK} />
      <path d={`M0 ${WALL_FOOT}H${W}`} stroke={INK} strokeWidth={LINE.bold} />
      <path
        d={footShadow(EROS_AT[0] + 4, FEET + 2, 30) + footShadow(ANTONY_AT[0] + 4, FEET + 4, 34)}
        fill={INK}
      />

      {/* Eros, his head bowed */}
      <Person
        pose={{
          look: 'eros',
          head: { rot: 24 },
          eye: 'down',
          far: {
            pts: [
              [-4, -130],
              [0, -106],
              [8, -86],
            ],
            hand: 'mitt',
          },
          near: {
            pts: [
              [5, -128],
              [12, -104],
              [16, -84],
            ],
            hand: 'mitt',
          },
        }}
        at={EROS_AT}
        scale={S}
      />

      {/* Antony at the opening, his hand lifted to the cloud */}
      <Person
        pose={{
          look: 'antony',
          head: { rot: -12 },
          mouth: 'open',
          far: {
            pts: [
              [-4, -130],
              [-8, -104],
              [-4, -80],
            ],
            hand: 'mitt',
          },
          near: { pts: ANTONY_NEAR, hand: 'open', deg: -52, thumb: -1 },
        }}
        at={ANTONY_AT}
        scale={S}
      />
    </g>
  )
}

export const theShapeOfACloud: LinocutArt = { width: W, height: H, Draw: TheShapeOfACloud }
