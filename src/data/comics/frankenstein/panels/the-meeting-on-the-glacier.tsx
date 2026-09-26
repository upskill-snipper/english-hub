import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  fogBank,
  gouge,
  gougeField,
  ribbon,
  rng,
  wave,
  wedge,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  CreatureHead,
  Figure,
  HEAD_CREATURE,
  HEAD_VICTOR,
  NECKCLOTH,
  OPEN_HAND,
  VICTOR_CUTS,
  VICTOR_HAIR,
  VICTOR_HAIR_CUTS,
  VICTOR_PUPIL,
  cloak,
  headAt,
  man,
  type P,
} from './people'

/**
 * Chapter 10: "The meeting on the glacier", the seventh moment in the guide's
 * timeline. Every detail is from the held edition
 * (src/data/full-texts/frankenstein.ts):
 *
 * - "It was nearly noon when I arrived at the top of the ascent ... Presently
 *   a breeze dissipated the cloud, and I descended upon the glacier";
 *   "From the side where I now stood Montanvert was exactly opposite, at the
 *   distance of a league; and above it rose Mont Blanc, in awful majesty";
 *   "Their icy and glittering peaks shone in the sunlight over the clouds."
 *   So it is noon: a clear pale sky, Mont Blanc's snow dome over a bank of
 *   cloud, and the dark dependent mountains round it with snow in their
 *   gullies. "The sun is yet high in the heavens", the Creature says, giving
 *   Victor until it sets to hear him: the one spot of colour is the sun.
 * - "The surface is very uneven, rising like the waves of a troubled sea,
 *   descending low, and interspersed by rifts that sink deep." So the ice is
 *   cut in ridges and deep rifts, heavier as they come towards us.
 * - "I remained in a recess of the rock": Victor has stepped out of the
 *   bare rock at the left, one hand still on it.
 * - "I suddenly beheld the figure of a man, at some distance, advancing
 *   towards me with superhuman speed. He bounded over the crevices in the ice
 *   ... his stature, also, as he approached, seemed to exceed that of man."
 *   "Remember, thou hast made me more powerful than thyself; my height is
 *   superior to thine". So the Creature stands on the ice about 1.4 times
 *   Victor's height, drawn from ./people.tsx as Chapter 5 describes him: the
 *   pale face (his yellow skin is left to the words), long flowing black
 *   hair, straight black lips, the pale eye; and a plain dark cloak, since he
 *   covered himself with "some clothes" and then "a huge cloak" (Chapter 11).
 * - "He approached; his countenance bespoke bitter anguish"; "Be calm! I
 *   entreat you to hear me". So he leans towards Victor with one open hand
 *   held out low, pleading, not threatening.
 * - "I trembled with rage and horror"; "Begone! I will not hear you." So
 *   Victor leans back from him, his open hand up to ward him off, his eye
 *   wide. (This note once said the spot colour flushed his cheek; it never
 *   did, and the sun is the one red.)
 *
 * Seeds: 701 (the sky), 702 (Mont Blanc), 703 and 704 (snow on the peaks),
 * 705 (the cloud), 706 (the ridges and rifts of the ice), 708 (the rock).
 */

const W = 860
const H = 340
/** The sun, high over the peaks at noon. */
const SUN: Pt = [300, 42]
/** Where the cloud lies, between the peaks and the ice. */
const CLOUD = 150

/** Mont Blanc: a broad snow dome, the highest thing in the picture. */
const BLANC =
  'M520 160C540 150 556 136 572 124C586 114 596 100 610 92C622 84 632 70 646 60C660 50 672 40 690 36C708 32 724 38 738 48C748 56 758 58 770 64C782 70 790 80 802 90C820 104 840 116 860 124V160Z'
/** The ridge down from the summit, in ink. */
const BLANC_RIDGE =
  'M690 37C680 54 666 70 650 84C636 96 622 112 604 126M738 48C744 66 752 82 766 96'
/** The dependent mountains, dark, their summits hanging over the ice. */
const PEAKS =
  'M232 166L262 128L276 136L300 104L314 116L336 86L352 100L370 78L392 104L410 96L436 124L452 118L480 146L506 136L540 160L560 170Z'
/** The river of ice: narrow in the distance, widening towards us. */
const ICE =
  'M150 176C260 168 420 166 560 168C660 170 760 170 860 172V340H0V270C60 230 100 196 150 176Z'
/** The bare rock of the near side, with the recess Victor has stepped from. */
const ROCK =
  'M0 0H84C92 36 102 76 100 116C98 150 106 180 122 208C134 234 142 268 148 300L154 340H0Z'

type Marks = {
  streaks: string
  shade: string
  rocks: string
  snow: string
  cloud: { mass: string; lines: string }
  ridges: string
  rifts: string
  riftLips: string
  rock: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // A clear noon sky, cut in long strokes: a little darker at the top,
  // cleared to paper at the horizon and round the sun, so the snow stands
  // against it. WHY SO PALE (27 September 2026): it was first cut from a
  // base of about a third, and the sky printed mostly black, so the red sun
  // in it read as a setting sun or a moon; "It was nearly noon".
  const streaks = gougeField(
    rng(701),
    { x0: 60, x1: W, y0: 4, y1: 184 },
    (x, y) =>
      clamp(0.62 + 0.38 * (y / 150) ** 1.3) +
      0.6 * clamp(1 - Math.hypot(x - SUN[0], y - SUN[1]) / 110),
    { spacing: 6.6, len: [40, 130], gap: [3, 10], max: 4.2 },
  )
  // Mont Blanc's shaded flank, hatched down the slope from the summit, and
  // a few dark rock bands breaking through the snow.
  const r = rng(702)
  let shade = ''
  for (let k = 0; k < 26; k++) {
    const t = k / 26
    const x0 = 738 + t * 122
    const y0 = 50 + t * 76 + between(r, -2, 2)
    shade += wedge(x0, y0, x0 - 10 - t * 16, y0 + 34, 0.8 + t * 2.6, 0.2)
  }
  let rocks = ''
  for (const [x, y, len] of [
    [632, 104, 16],
    [664, 76, 12],
    [598, 138, 20],
    [700, 110, 12],
  ] as const)
    rocks += gouge(x, y, x - len * 0.7, y + len, 1.6, 0.6)
  // Snow in the gullies of the dark peaks: cuts down from each summit.
  const snowFrom = (pts: Pt[], s: ReturnType<typeof rng>) => {
    let d = ''
    for (const [px, py] of pts)
      for (let i = 0; i < 4; i++) {
        const side = i % 2 ? 1 : -1
        d += gouge(
          px + side * between(s, 0, 3),
          py + 3,
          px + side * between(s, 6, 16),
          py + between(s, 12, 26),
          between(s, 0.9, 1.5),
        )
      }
    return d
  }
  const snow = snowFrom(
    [
      [262, 128],
      [300, 104],
      [336, 86],
      [370, 78],
      [410, 96],
      [452, 118],
      [506, 136],
    ],
    rng(703),
  )
  // From under the rock, so the bank has no cut end: it first began at x 200,
  // and its square end showed as a black notch in the sky above the ice.
  const cloud = fogBank(rng(705), 90, W, CLOUD - 6, CLOUD + 24, 5)
  // The ice: "rising like the waves of a troubled sea". Wave crests in ink
  // on the paper ice, heavier and further apart as they come towards us.
  const s = rng(706)
  let ridges = ''
  for (let y = 180; y < H + 6; y += 6.5 + (y - 176) * 0.07) {
    const depth = clamp((y - 176) / 164)
    let x = between(s, -40, 0)
    while (x < W) {
      const len = between(s, 40, 110) * (0.6 + depth)
      if (s() < 0.78)
        ridges += ribbon(
          wave(x, x + len, y, 1.2 + depth * 3, 30 + depth * 50, between(s, 0, 6), 12),
          0.8 + depth * 2.8 * between(s, 0.7, 1.2),
          0.7,
        )
      x += len + between(s, 10, 34)
    }
  }
  // "rifts that sink deep": dark lenses, each with its near lip cut white.
  let rifts = ''
  let riftLips = ''
  for (let i = 0; i < 20; i++) {
    const y = between(s, 190, 334)
    const depth = clamp((y - 176) / 164)
    const x = between(s, 170, 840)
    if (x > 360 && x < 540 && y > 290) continue
    const len = 18 + depth * 64 * between(s, 0.6, 1.2)
    const w = 1.6 + depth * 5
    rifts += gouge(x, y, x + len, y + between(s, -2, 2), w, between(s, -0.6, 0.6))
    riftLips += gouge(x + len * 0.15, y + w * 0.9, x + len * 0.85, y + w * 0.9, 0.5 + depth * 0.8)
  }
  // The rock: facets cut on a slant, catching the sun on their upper edges.
  const k = rng(708)
  let rock = ''
  for (let i = 0; i < 46; i++) {
    const y = between(k, 8, 334)
    const edge =
      y < 116
        ? 84 + (y / 116) * 16
        : y < 208
          ? 100 + ((y - 116) / 92) * 22
          : 122 + ((y - 208) / 132) * 30
    const x = between(k, 4, Math.max(10, edge - 16))
    const len = between(k, 10, 26)
    rock += gouge(x, y, x + len * 0.8, y - len * 0.6, between(k, 0.8, 1.9))
  }
  cached = { streaks, shade, rocks, snow, cloud, ridges, rifts, riftLips, rock }
  return cached
}

// ── Victor, stepped out from the rock, leaning back from him ─────────────────
const VIC_HEAD = { d: HEAD_VICTOR, at: [162, 154] as P, rot: -12, scale: 1.08 }
const VIC_T = headAt(1, VIC_HEAD.at, VIC_HEAD.rot, VIC_HEAD.scale)
const VICTOR = man({
  facing: 1,
  neck: [160, 182],
  hip: [176, 246],
  head: VIC_HEAD,
  hair: VICTOR_HAIR,
  body: { width: 30, tails: 44, swing: 4 },
  near: {
    arm: [
      [166, 192],
      [192, 198],
      [214, 194],
    ],
    leg: [
      [178, 246],
      [196, 282],
      [204, 318],
    ],
    hand: { parts: OPEN_HAND, rot: -78, scale: 1.08 },
  },
  far: {
    arm: [
      [156, 192],
      [138, 214],
      [124, 226],
    ],
    leg: [
      [172, 246],
      [160, 284],
      [150, 318],
    ],
    hand: { parts: OPEN_HAND, rot: 20, scale: 0.95 },
  },
})

// ── The Creature, gigantic, on the ice, one hand held out to him ─────────────
const CR_HEAD = { d: HEAD_CREATURE, at: [450, 106] as P, rot: -10, scale: 1.42 }
const CR_T = headAt(-1, CR_HEAD.at, CR_HEAD.rot, CR_HEAD.scale)
const CR_NECK: P = [458, 148]
const CR_HIP: P = [472, 240]
const CREATURE = man({
  facing: -1,
  neck: CR_NECK,
  hip: CR_HIP,
  head: CR_HEAD,
  robe: cloak(CR_NECK, CR_HIP, { width: 56, drop: 70, flare: 18 }),
  body: { width: 50 },
  arm: 12,
  leg: 13,
  near: {
    arm: [
      [452, 164],
      [436, 206],
      [404, 230],
    ],
    leg: [
      [468, 240],
      [454, 282],
      [440, 322],
    ],
    hand: { parts: OPEN_HAND, rot: -14, scale: 1.4 },
  },
  far: {
    arm: [],
    leg: [
      [476, 240],
      [490, 282],
      [502, 322],
    ],
  },
})

function MeetingOnTheGlacier({ uid }: ArtProps) {
  const m = marks()
  const blancClip = `${uid}-blanc`
  const rockClip = `${uid}-rock`
  const cloudClip = `${uid}-cloud`
  return (
    <>
      <defs>
        <clipPath id={blancClip}>
          <path d={BLANC} />
        </clipPath>
        <clipPath id={rockClip}>
          <path d={ROCK} />
        </clipPath>
        <clipPath id={cloudClip}>
          <path d={m.cloud.mass} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [330, 200], push: 1.03 })}>
        {/* the clear noon sky, and the sun "yet high in the heavens" */}
        <rect x={0} y={0} width={W} height={186} fill={INK} />
        <path d={m.streaks} fill={PAPER} />
        <circle cx={SUN[0]} cy={SUN[1]} r={18} fill={RED} />

        {/* Mont Blanc "in awful majesty" */}
        <path d={BLANC} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} strokeLinejoin="round" />
        <g clipPath={`url(#${blancClip})`}>
          <path d={m.shade + m.rocks} fill={INK} />
          <path d={BLANC_RIDGE} fill="none" stroke={INK} strokeWidth={LINE.fine} />
        </g>
        {/* its dependent mountains, dark, snow in their gullies */}
        <path d={PEAKS} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} strokeLinejoin="round" />
        <path d={m.snow} fill={PAPER} />
        {/* the cloud the peaks shine over */}
        <g className="lc-drift">
          <path d={m.cloud.mass} fill={PAPER} />
          <path d={m.cloud.lines} fill={INK} clipPath={`url(#${cloudClip})`} />
        </g>

        {/* the sea of ice */}
        <path d={ICE} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path d={m.ridges + m.rifts} fill={INK} />
        <path d={m.riftLips} fill={PAPER} />

        {/* the bare rock of the near side */}
        <path d={ROCK} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <g clipPath={`url(#${rockClip})`}>
          <path d={m.rock} fill={PAPER} />
        </g>

        {/* the Creature, towering, pleading */}
        <Figure parts={CREATURE}>
          <path
            d={
              gouge(478, 176, 494, 296, 1.1, -1.4) +
              gouge(464, 190, 470, 300, 1, -0.4) +
              gouge(452, 206, 444, 298, 0.9, 0.8)
            }
            fill={PAPER}
          />
        </Figure>
        <CreatureHead t={CR_T} />

        {/* Victor, recoiling, his hand up against him */}
        <Figure parts={VICTOR}>
          <path d={VICTOR_HAIR_CUTS + VICTOR_CUTS + NECKCLOTH} transform={VIC_T} fill={PAPER} />
          <path d={VICTOR_PUPIL} transform={VIC_T} fill={INK} />
          <path
            d={gouge(170, 196, 174, 240, 0.9, 0.8) + gouge(166, 250, 158, 286, 0.9, 0.6)}
            fill={PAPER}
          />
        </Figure>
      </g>
    </>
  )
}

export const theMeetingOnTheGlacier: LinocutArt = {
  width: W,
  height: H,
  Draw: MeetingOnTheGlacier,
}
