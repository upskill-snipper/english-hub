import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, n, rng, type Pt } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { ROW_W, inkRows, tick } from './open-air'
import { Person } from './people'

/**
 * Act 4, Scene 1: "The blind led by the mad", the fourteenth moment in the
 * guide's timeline. Every detail is from the scene in the held edition
 * (Project Gutenberg #1532, src/data/full-texts/king-lear.ts):
 *
 * - "The heath." It is the morning after the storm: Gloucester says "I' the
 *   last night's storm I such a fellow saw". So the last of the cloud hangs
 *   heavy over the left of the sky, and it clears towards the sun, low on the
 *   rim of the heath on the right, where the track runs: the way they will
 *   go, "I' the way toward Dover". The sun is the panel's one red, far from
 *   anyone's face.
 * - "Enter Gloucester, led by an Old Man." The Old Man, "your tenant, and
 *   your father's tenant these fourscore years", is sent away: "I'll bring
 *   him the best 'parel that I have, Come on't what will. [Exit.]" So he is
 *   small in the distance on the left, going.
 * - "Is that the naked fellow?" "Ay, my lord." "Then prythee get thee away
 *   ... bring some covering for this naked soul, Which I'll entreat to lead
 *   me." "Give me thy arm: Poor Tom shall lead thee." So Edgar, still Poor
 *   Tom as the kit (./people.tsx) cuts him, decently covered in his blanket,
 *   walks ahead along the track, and his father follows with a hand on his
 *   shoulder, the other at his side. Edgar's eye is lowered: "O gods! Who
 *   is't can say 'I am at the worst'? I am worse than e'er I was."
 * - Gloucester is blind, and is drawn as the kit draws him from 3.7 on: a
 *   plain cloth band tied over his eyes, and nothing beneath it, no wound and
 *   no red. Edgar's "Bless thy sweet eyes, they bleed" is left to the words.
 *
 * Nothing is taken from a film or stage production. Seeds: 1401 (sky), 1402
 * (the sun's rays), 1403 (heath), 1404 (grass).
 */

const W = 860
const H = 340
/** The far edge of the heath. */
const HORIZON = 232
/** The sun, just up over the rim of the heath, the way to Dover. */
const SUN: Pt = [752, 210]

/** The track's two edges at height y, from the foot of the print to the sun. */
function trackEdges(y: number): [number, number] {
  const t = Math.pow(clamp((y - HORIZON) / (H - HORIZON)), 0.9)
  return [SUN[0] - 34 + (240 - (SUN[0] - 34)) * t, SUN[0] - 18 + (520 - (SUN[0] - 18)) * t]
}

type Marks = {
  sky: string[]
  rays: string
  ground: string[]
  tufts: string
  verges: string
  ruts: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // Morning after the storm: the last of the cloud heavy overhead and away
  // to the left, the sky clearing white towards the sun.
  const sky = inkRows(
    rng(1401),
    { x0: 0, x1: W, y0: 8, y1: HORIZON - 4 },
    (x, y) =>
      clamp(
        0.82 -
          Math.max(0, 1 - Math.hypot((x - SUN[0]) * 0.7, (y - SUN[1]) * 1.3) / 380) * 1.1 -
          (y / HORIZON) * 0.25 +
          Math.max(0, (300 - x) / 300) * 0.15,
      ),
    { spacing: 6.4, len: [40, 150] },
  )
  const rr = rng(1402)
  let rays = ''
  for (let a = 180; a <= 360; a += 9) {
    const from = 34 + between(rr, 0, 8)
    rays += tick(
      SUN[0] + Math.cos((a * Math.PI) / 180) * from,
      SUN[1] + Math.sin((a * Math.PI) / 180) * from,
      a,
      between(rr, 14, 34),
    )
  }
  // The heath: pale in the low sun, darker towards the reader and the left,
  // and bare on the track.
  const onTrack = (x: number, y: number) => {
    const [a, b] = trackEdges(y)
    return x > a - 6 && x < b + 6
  }
  const rows = inkRows(rng(1403), { x0: 0, x1: W, y0: HORIZON + 3, y1: H + 4 }, (x, y) =>
    clamp(
      0.06 +
        Math.pow((y - HORIZON) / (H - HORIZON), 1.6) * 0.6 +
        Math.max(0, (360 - x) / 360) * 0.3,
    ),
  )
  // Cut the rows away where they cross the track.
  const ground = rows.map((d) =>
    d
      .split('M')
      .filter(Boolean)
      .filter((seg) => {
        const [x, rest] = seg.split(' ')
        const y = parseFloat(rest)
        const len = parseFloat(seg.split('h')[1])
        const x0 = parseFloat(x)
        return !onTrack(x0, y) && !onTrack(x0 + len, y) && !onTrack(x0 + len / 2, y)
      })
      .map((seg) => 'M' + seg)
      .join(''),
  )
  // Rough grass, off the track, bent a little by the last of the wind.
  const rg = rng(1404)
  let tufts = ''
  for (let y = HORIZON + 12; y < H - 4; y += 9 + (y - HORIZON) * 0.12) {
    const s = 0.6 + (y - HORIZON) / 110
    for (let x = between(rg, -10, 30); x < W; x += between(rg, 44, 96) * s) {
      if (rg() < 0.25 || onTrack(x, y) || onTrack(x + 10, y)) continue
      for (let k = 0; k < 4; k++)
        tufts += tick(
          x + k * 2.6 * s,
          y,
          -96 + (k - 1.5) * 8 + between(rg, -4, 4),
          between(rg, 6, 10) * s,
        )
    }
  }
  // The track's worn edges, and the ruts along it.
  let verges = ''
  let ruts = ''
  for (const side of [0, 1] as const) {
    let d = ''
    for (let y = HORIZON + 2; y <= H + 2; y += 6) {
      const x = trackEdges(y)[side] + Math.sin(y / 9 + side) * 1.2
      d += `${d ? 'L' : 'M'}${n(x)} ${n(y)}`
    }
    verges += d
  }
  for (let y = HORIZON + 30; y < H; y += 14) {
    const [a, b] = trackEdges(y)
    const len = 8 + (y - HORIZON) * 0.16
    ruts += `M${n(a + (b - a) * 0.3)} ${n(y)}l${n(-len * 0.4)} ${n(len * 0.2)}`
    ruts += `M${n(a + (b - a) * 0.72)} ${n(y + 5)}l${n(-len * 0.3)} ${n(len * 0.2)}`
  }
  cached = { sky, rays, ground, tufts, verges, ruts }
  return cached
}

function TheBlindLedByTheMad({ uid }: ArtProps) {
  const m = marks()
  return (
    <>
      <defs>
        <clipPath id={`${uid}-sky`}>
          <rect x={0} y={0} width={W} height={HORIZON} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [420, 200], push: 1.03 })}>
        <rect x={0} y={0} width={W} height={H} fill={PAPER} />
        <g className="lc-drift">
          {m.sky.map((d, i) => (
            <path key={i} d={d} stroke={INK} strokeWidth={ROW_W[i]} strokeLinecap="round" />
          ))}
        </g>
        <g clipPath={`url(#${uid}-sky)`}>
          <circle cx={SUN[0]} cy={SUN[1]} r={30} fill={PAPER} />
          <path d={m.rays} stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
          <circle cx={SUN[0]} cy={SUN[1]} r={21} fill={RED} />
        </g>
        <path d={`M0 ${HORIZON}H${W}`} stroke={INK} strokeWidth={2.4} />
        {m.ground.map((d, i) => (
          <path key={i} d={d} stroke={INK} strokeWidth={ROW_W[i]} strokeLinecap="round" />
        ))}
        <path d={m.verges} fill="none" stroke={INK} strokeWidth={2.2} strokeLinejoin="round" />
        <path d={m.ruts} stroke={INK} strokeWidth={1.3} strokeLinecap="round" />
        <path d={m.tufts} stroke={INK} strokeWidth={1.4} strokeLinecap="round" />

        {/* the Old Man, sent away, small in the distance on the left */}
        <Person
          at={[104, 270]}
          scale={0.6}
          flip
          pose={{
            look: 'old-man',
            head: { rot: 10 },
            far: {
              pts: [
                [-2, -128],
                [4, -100],
                [14, -84],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [2, -128],
                [-4, -100],
                [-10, -80],
              ],
              hand: 'mitt',
            },
          }}
        />

        {/* Edgar, as Poor Tom, leading the way along the track */}
        <Person
          at={[468, 318]}
          pose={{
            look: 'tom',
            head: { rot: 8 },
            eye: 'down',
            far: {
              pts: [
                [2, -128],
                [-10, -102],
                [-16, -80],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [2, -128],
                [12, -102],
                [24, -84],
              ],
              hand: 'mitt',
            },
            legs: {
              far: [
                [-3, -70],
                [-12, -36],
                [-20, -3],
              ],
              near: [
                [3, -70],
                [14, -38],
                [20, -3],
              ],
            },
          }}
        />

        {/* Gloucester, blind, following with his hand on his son's shoulder */}
        <Person
          at={[394, 320]}
          pose={{
            look: 'gloucester',
            blind: true,
            head: { rot: -6 },
            far: {
              pts: [
                [-2, -128],
                [-6, -100],
                [2, -78],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [2, -128],
                [30, -126],
                [57, -127],
              ],
              hand: 'open',
              deg: 12,
            },
          }}
        />
      </g>
    </>
  )
}

export const theBlindLedByTheMad: LinocutArt = { width: W, height: H, Draw: TheBlindLedByTheMad }
