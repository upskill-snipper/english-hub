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
  type Rng,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, type P } from './people'

/**
 * Act 2, Scene 3: "Benedick in the garden", the fifth moment in the guide's
 * timeline. Every detail is from the scene in the held edition (Project
 * Gutenberg #1519, src/data/full-texts/much-ado-about-nothing.ts):
 *
 * - "Leonato's Garden." Benedick sends the boy for a book "in the orchard",
 *   and at "Ha! the Prince and Monsieur Love! I will hide me in the arbour."
 *   So on the left stands the arbour, a leafy bower on a wooden frame, and
 *   the orchard's trees stand behind the path. The boy never comes back with
 *   the book, so Benedick has none.
 * - "How still the evening is, As hush'd on purpose to grace harmony!" It is
 *   evening: the sun, the spot colour, is going down behind the orchard hedge
 *   on the right.
 * - "See you where Benedick hath hid himself?" Benedick, bearded (he is not
 *   shaved until Act 3, Scene 2), leans out of the arbour's shadow over the
 *   leaves at its mouth, one hand on its post, listening.
 * - "I should think this a gull, but that the white-bearded fellow speaks it"
 *   (Benedick, aside). Leonato, white-bearded, in his long gown, stands on the
 *   path facing the arbour and speaks up, one hand held out, so the hidden man
 *   can hear: "she loves him with an enraged affection".
 * - "Stalk on, stalk on; the fowl sits" (Claudio, aside to Don Pedro); "Bait
 *   the hook well: this fish will bite." Claudio, beardless, beside the
 *   Prince and facing him, lifts a hand to the side of his mouth to whisper.
 *   Don Pedro, in his circlet, stands with his back to the arbour, one hand
 *   on his hip, playing his part: "Maybe she doth but counterfeit."
 *
 * Balthasar and the musicians have gone before the talk of Beatrice begins
 * ("Exeunt Balthasar and Musicians"), so they are not drawn. The people are
 * cut from ./people.tsx. Nothing is taken from a film, television or stage
 * production. Seeds: 1501 (sky), 1502 (orchard), 1503 (arbour leaves), 1504
 * (ground), 1505 (the sun's rays), 1506 (the bush at the arbour's mouth).
 */

const W = 860
const H = 340
/** The top of the orchard hedge, where the sun is going down. */
const HEDGE = 222
/** Where everyone's feet stand. */
const FEET = 318
const SUN: P = [796, HEDGE - 2]

/** The arbour: its outer mass of leaves, and its mouth, dark within. */
const ARBOUR = 'M14 324V178C14 104 66 60 142 56C218 60 272 104 274 178V324Z'
const MOUTH = 'M86 324V204C86 162 110 138 146 138C182 138 208 162 208 204V324Z'
/** The orchard's trees behind the hedge: [x, y, radius] of each crown. */
const CROWNS: [number, number, number][] = [
  [322, 180, 30],
  [396, 174, 34],
  [630, 182, 24],
  [742, 184, 22],
]

/**
 * Foliage cut as a woodcutter cuts it: rows of small paper crescents, the lit
 * top edge of each clump of leaves, heavier towards the light.
 */
function leaves(
  r: Rng,
  box: { x0: number; x1: number; y0: number; y1: number },
  step: number,
  inside: (x: number, y: number) => boolean,
  lit: (x: number, y: number) => number,
) {
  let d = ''
  let row = 0
  for (let y = box.y0; y < box.y1; y += step * 0.7, row++) {
    for (let x = box.x0 + (row % 2) * step * 0.5; x < box.x1; x += step) {
      const cx = x + between(r, -1.5, 1.5)
      const cy = y + between(r, -1.2, 1.2)
      if (!inside(cx, cy)) continue
      const L = lit(cx, cy)
      if (r() > 0.25 + L * 0.75) continue
      const w = step * (0.32 + L * 0.2)
      d += gouge(cx - w, cy + 1.4, cx + w, cy + 1.4, 0.5 + L * 1.9, -1.6 - L * 1.2)
    }
  }
  return d
}

type Marks = {
  sky: string
  sunRays: string
  orchard: string
  arbour: string
  bush: string
  ground: string
  shadows: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The evening sky: paper, cut with ink bars that close up towards the top.
  const sky = gougeField(
    rng(1501),
    { x0: 270, x1: W, y0: 8, y1: HEDGE - 20 },
    (x, y) => clamp(0.66 - y / 240 + 0.06 * Math.sin(x / 70 + y / 22)),
    { spacing: 6, len: [40, 150], gap: [10, 40], max: 2.6 },
  )
  const sunRays = rays(rng(1505), SUN[0], SUN[1], { from: 26, to: 120, every: 9, width: 2.2 })
  // The orchard crowns, dark, their lit edges cut on the side of the sun.
  const orchard = leaves(
    rng(1502),
    { x0: 288, x1: 768, y0: 138, y1: HEDGE },
    9,
    (x, y) => CROWNS.some(([cx, cy, rr]) => Math.hypot(x - cx, y - cy) < rr - 4),
    (x) => clamp(0.25 + (x - 290) / 700),
  )
  // The arbour's leaves: lit on the side facing the sun, dark at its back.
  const arbour = leaves(
    rng(1503),
    { x0: 18, x1: 272, y0: 62, y1: 324 },
    10,
    (x, y) => {
      const inArbour =
        y > 178 ? x > 18 && x < 270 : Math.hypot((x - 144) / 128, (y - 178) / 118) < 0.97
      const inMouth =
        y > 204 ? x > 80 && x < 214 : Math.hypot((x - 147) / 66, (y - 204) / 72) < 1.08
      return inArbour && !inMouth
    },
    (x, y) => clamp(0.2 + (x - 18) / 360 - (y - 60) / 900),
  )
  // A low bush at the arbour's mouth that hides Benedick's legs.
  const bush = leaves(
    rng(1506),
    { x0: 76, x1: 226, y0: 250, y1: 324 },
    9,
    (x, y) => Math.hypot((x - 150) / 76, (y - 300) / 52) < 1,
    (x) => clamp(0.3 + (x - 76) / 260),
  )
  // The path and the grass: paper, marked in ink, darker at the front.
  const ground = gougeField(
    rng(1504),
    { x0: 0, x1: W, y0: HEDGE + 30, y1: H },
    (x, y) => clamp(0.14 + ((y - HEDGE - 30) / (H - HEDGE - 30)) ** 1.5 * 0.5),
    { spacing: 5, len: [14, 50], gap: [6, 22], max: 2.4 },
  )
  // Long shadows thrown back to the left by the low sun.
  let shadows = ''
  for (const x of [470, 574, 676])
    for (let k = 0; k < 3; k++)
      shadows += gouge(x - 90, FEET + 1 + k * 3, x + 16, FEET + 1.4 + k * 3, 2 - k * 0.5)
  cached = { sky, sunRays, orchard, arbour, bush, ground, shadows }
  return cached
}

const CROWN_PATH = CROWNS.map(
  ([x, y, r]) =>
    `M${n(x - r)} ${n(y)}a${n(r)} ${n(r * 0.9)} 0 1 0 ${n(2 * r)} 0a${n(r)} ${n(r * 0.9)} 0 1 0 ${n(-2 * r)} 0Z`,
).join('')
const TRUNKS = CROWNS.map(
  ([x, y, r]) => `M${x - 3} ${n(y + r * 0.6)}H${x + 3}V${HEDGE}H${x - 3}Z`,
).join('')
/** The clipped hedge along the back of the path. */
const HEDGE_PATH = `M270 ${HEDGE + 30}V${HEDGE}Q400 ${HEDGE - 6} 560 ${HEDGE - 2}Q720 ${HEDGE - 6} ${W} ${HEDGE}V${HEDGE + 30}Z`

function BenedickInTheGarden({ uid }: ArtProps) {
  const m = marks()
  const skyClip = `${uid}-sky`
  const mouthClip = `${uid}-mouth`
  return (
    <>
      <defs>
        <clipPath id={skyClip}>
          <rect x={0} y={0} width={W} height={HEDGE} />
        </clipPath>
        <clipPath id={mouthClip}>
          <path d={MOUTH} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [420, 220], push: 1.03 })}>
        {/* the evening sky, and the sun going down behind the hedge */}
        <rect x={0} y={0} width={W} height={H} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        <g clipPath={`url(#${skyClip})`}>
          <g className="lc-fade-in" style={timing({ dur: 1.6 })}>
            <path d={m.sunRays} fill={INK} />
          </g>
          <circle cx={SUN[0]} cy={SUN[1]} r={24} fill={PAPER} />
          <circle cx={SUN[0]} cy={SUN[1]} r={19} fill={RED} />
        </g>

        {/* the orchard behind the hedge */}
        <path d={TRUNKS} fill={INK} />
        <path d={CROWN_PATH} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.orchard} fill={PAPER} />
        <path d={HEDGE_PATH} fill={INK} />
        <path
          d={gouge(280, HEDGE + 8, W, HEDGE + 6, 1.2) + gouge(280, HEDGE + 18, W, HEDGE + 17, 1.4)}
          fill={PAPER}
        />

        {/* the path */}
        <path d={m.ground} fill={INK} />
        <path d={m.shadows} fill={INK} />

        {/* the arbour: a bower of leaves on a wooden frame, dark within */}
        <path d={ARBOUR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.arbour} fill={PAPER} />
        <path d={MOUTH} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        {/*
          The trellis at the back of the bower, faint in the shadow: faint as
          a print makes it, with broken hairline cuts. It was first a solid
          line at 55 per cent opacity, a grey the block cannot print (three
          values only: ink, paper and the cuts between).
        */}
        <g clipPath={`url(#${mouthClip})`}>
          <path
            d="M86 170L208 292M86 210L208 332M86 250L190 354M104 140L208 244M140 138L208 206M86 292L126 332M208 170L86 292M208 210L86 332M208 250L104 354M190 140L86 244M154 138L86 206"
            stroke={PAPER}
            strokeWidth={LINE.hairline}
            strokeDasharray="7 5"
          />
        </g>
        {/* its two front posts */}
        <path d="M84 206V324M210 206V324" stroke={PAPER} strokeWidth={9} />
        <path d="M84 206V324M210 206V324" stroke={INK} strokeWidth={5.4} />

        {/* Benedick, leaning out over the leaves, listening */}
        <Person
          at={[160, FEET + 4]}
          pose={{
            look: 'benedick',
            head: { at: [12, -156], rot: 16 },
            far: {
              pts: [
                [-4, -128],
                [-9, -100],
                [-5, -76],
              ],
            },
            near: {
              pts: [
                [5, -128],
                [28, -118],
                [44, -126],
              ],
              hand: 'mitt',
              deg: -80,
            },
          }}
        />
        {/* the bush at the arbour's mouth, hiding him to the waist */}
        <path
          d="M72 324C70 290 88 262 118 254C134 244 164 244 180 254C210 262 230 290 228 324Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d={m.bush} fill={PAPER} />

        {/* Don Pedro, his back to the arbour, playing his part */}
        <Person
          at={[474, FEET]}
          pose={{
            look: 'don-pedro',
            far: {
              pts: [
                [-4, -128],
                [-8, -100],
                [-5, -74],
              ],
            },
            near: {
              pts: [
                [5, -128],
                [20, -106],
                [10, -86],
              ],
              deg: 170,
            },
          }}
        />
        {/*
          Leonato, facing the arbour, speaking up so that Benedick hears. He
          stands behind the other two, and Claudio beside the Prince: the
          aside is "to Don Pedro", and with Leonato between them Claudio's
          hand at his mouth was whispering to nobody (review, 26 September
          2026).
        */}
        <Person
          at={[680, FEET]}
          flip
          pose={{
            look: 'leonato',
            head: { rot: -4 },
            far: {
              pts: [
                [-4, -128],
                [-9, -100],
                [-7, -74],
              ],
            },
            near: {
              pts: [
                [5, -128],
                [18, -108],
                [34, -112],
              ],
              hand: 'open',
              deg: -24,
              thumb: -1,
            },
          }}
        />
        {/* Claudio, beside the Prince, whispering aside to him */}
        <Person
          at={[578, FEET]}
          flip
          pose={{
            look: 'claudio',
            head: { rot: 6 },
            far: {
              pts: [
                [-4, -128],
                [-8, -100],
                [-5, -74],
              ],
            },
            near: {
              pts: [
                [5, -130],
                [16, -120],
                [18, -142],
              ],
              hand: 'open',
              deg: -100,
              size: 12,
              spread: 8,
              thumb: 1,
            },
          }}
        />
      </g>
    </>
  )
}

export const benedickInTheGarden: LinocutArt = { width: W, height: H, Draw: BenedickInTheGarden }
