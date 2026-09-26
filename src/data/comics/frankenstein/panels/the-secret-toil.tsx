import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  rays,
  rng,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Figure,
  GRIP_HAND,
  HEAD_VICTOR,
  NECKCLOTH,
  OPEN_HAND,
  VICTOR_CUTS,
  VICTOR_HAIR,
  VICTOR_HAIR_CUTS,
  VICTOR_PUPIL,
  headAt,
  man,
  type P,
} from './people'

/**
 * Chapter 4: "The secret toil", the fourth moment in the guide's timeline.
 * Victor at work alone, night after night, in the room where he builds the
 * being. Every detail is from the chapter:
 *
 * - "In a solitary chamber, or rather cell, at the top of the house, and
 *   separated from all the other apartments by a gallery and staircase, I
 *   kept my workshop". So the room is a garret under a sloping roof.
 * - "the moon gazed on my midnight labours, while, with unrelaxed and
 *   breathless eagerness, I pursued nature to her hiding-places". So the
 *   full moon looks in at the window behind him, and he sits with his back
 *   to it, bent over his work.
 * - "My cheek had grown pale with study, and my person had become emaciated
 *   with confinement"; "my eye-balls were starting from their sockets in
 *   attending to the details of my employment". So he is the thin Victor of
 *   every panel (./people.tsx), his candlelit cheek cut pale, his eye wide,
 *   staring into a glass he holds up to the flame.
 * - "It was a most beautiful season; never did the fields bestow a more
 *   plentiful harvest, or the vines yield a more luxuriant vintage: but my
 *   eyes were insensible to the charms of nature." So a vine heavy with
 *   grapes hangs across the window, and he does not look at it.
 * - "I knew my silence disquieted them"; "My father made no reproach in his
 *   letters". So his family's letters lie pushed aside at the end of the
 *   table under a heavy book, sealed and unopened, their seals printed in
 *   red: what the toil is costing him. The candle's flame is the only other
 *   red.
 * - The work itself is "chemistry" and "the improvement of some chemical
 *   instruments" (Chapter 4). So the table carries glass vessels, a retort,
 *   books and papers of notes. What the chapter says he gathered from
 *   charnel-houses, the dissecting room and the slaughter-house is left to
 *   the words: no bones, no bodies and no part of the being he is making is
 *   drawn, on a site many of whose readers are children.
 *
 * Nothing is taken from a film or stage production.
 * Seeds: 1801 (wall), 1802 (floor), 1803 (candlelight), 1804 (moonlight),
 * 1805 (stars).
 */

const W = 860
const H = 340
const FLOOR = 276
const CANDLE: P = [556, 186]
const MOON: P = [98, 152]

type Marks = {
  wall: string
  floor: string
  candle: string
  moonRays: string
  moonShaft: string
  stars: string
  roof: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const light = (x: number, y: number) => {
    const c = clamp(1 - Math.hypot(x - CANDLE[0], (y - CANDLE[1]) * 1.1) / 250)
    return Math.max(c * 0.95, 0.04)
  }
  const wall = gougeField(rng(1801), { x0: 0, x1: W, y0: 8, y1: FLOOR - 2 }, light, {
    spacing: 6,
    max: 3.8,
  })
  const rf = rng(1802)
  let floor = ''
  const V: P = [520, 80]
  for (let xt = -700; xt < 1700; xt += 34) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (FLOOR - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(rf, 0.3, 0.8))
      floor += wedge(
        xt + (xb - xt) * t0,
        FLOOR + (H - FLOOR) * t0,
        xt + (xb - xt) * t1,
        FLOOR + (H - FLOOR) * t1,
        1 + t0 * 3,
        1 + t1 * 3,
      )
      t0 = t1 + between(rf, 0.02, 0.07)
    }
  }
  for (let y = FLOOR + 2; y < FLOOR + 18; y += 3)
    floor += gouge(0, y, W, y, 2.6 - (y - FLOOR) * 0.13)
  const candle = rays(rng(1803), CANDLE[0], CANDLE[1] - 8, {
    from: 16,
    to: 120,
    every: 5.4,
    width: 3,
  })
  const moonRays = rays(rng(1804), MOON[0], MOON[1], { from: 34, to: 66, every: 8, width: 2 })
  // The moonlight falling through the window on to the floorboards behind him.
  const rm = rng(1804)
  let moonShaft = ''
  for (let i = 0; i < 16; i++) {
    const t = i / 15
    const x0 = 80 + t * 110
    const x1 = 190 + t * 150
    moonShaft += gouge(
      x0,
      190 + between(rm, -3, 3),
      x1,
      330 + between(rm, -4, 4),
      1.1,
      between(rm, -1, 1),
    )
  }
  const rs = rng(1805)
  let stars = ''
  for (let i = 0; i < 12; i++) {
    const x = between(rs, 70, 186)
    const y = between(rs, 56, 176)
    if (Math.hypot(x - MOON[0], y - MOON[1]) < 44) continue
    stars += gouge(x - 2, y, x + 2, y, 0.9) + gouge(x, y - 2, x, y + 2, 0.9)
  }
  // The underside of the roof: rafters cut in the dark slope.
  let roof = ''
  for (let x = 30; x < W + 60; x += 58) roof += wedge(x, 0, x - 26, 64 + x * 0.06, 2.4, 3.6)
  cached = { wall, floor, candle, moonRays, moonShaft, stars, roof }
  return cached
}

/** Victor on his stool, bent to the glass he holds up to the candle. */
const VIC_HEAD = { d: HEAD_VICTOR, at: [438, 146] as P, rot: 14, scale: 1.2 }
const GLASS_ARM: P[] = [
  [440, 178],
  [472, 196],
  [492, 176],
]
const VICTOR = man({
  facing: 1,
  neck: [426, 172],
  hip: [398, 236],
  head: VIC_HEAD,
  hair: VICTOR_HAIR,
  body: { width: 28, tails: 34, front: 2 },
  near: {
    arm: GLASS_ARM,
    leg: [
      [400, 236],
      [440, 244],
      [442, 304],
    ],
    hand: { parts: GRIP_HAND, rot: -70 },
  },
  far: {
    arm: [
      [430, 180],
      [452, 208],
      [478, 216],
    ],
    leg: [
      [396, 238],
      [430, 250],
      [428, 304],
    ],
    hand: { parts: OPEN_HAND, rot: 8, scale: 0.9 },
  },
  arm: 7.5,
  leg: 8.5,
})
/** The letters' seals, one on each where the book leaves it in view: x, y, radius. */
const SEALS: [number, number, number][] = [
  [755, 211, 3.6],
  [794, 218, 4],
  [772, 228.4, 3.4],
]
/** The glass vessel he stares into: a round flask with a long neck. */
const FLASK =
  'M494 166C488 166 484 172 484 179C484 188 490 194 498 194C506 194 512 188 512 179C512 172 508 166 502 166L501 150H495Z'

function TheSecretToil({ uid }: ArtProps) {
  const m = marks()
  const clip = { win: `${uid}-win`, roof: `${uid}-roof` }
  const vt = headAt(1, VIC_HEAD.at, VIC_HEAD.rot, VIC_HEAD.scale)
  const roofPath = `M0 0H${W}V48L0 18Z`
  return (
    <>
      <defs>
        <clipPath id={clip.win}>
          <rect x={64} y={50} width={128} height={132} />
        </clipPath>
        <clipPath id={clip.roof}>
          <path d={roofPath} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [CANDLE[0] - 60, CANDLE[1]], push: 1.035 })}>
        {/* the garret's wall, lit only by his candle */}
        <path d={m.wall} fill={PAPER} />
        {/* the sloping roof above, its rafters */}
        <path d={roofPath} fill={INK} />
        <g clipPath={`url(#${clip.roof})`}>
          <path d={m.roof} fill={PAPER} opacity={0.9} />
        </g>
        <path d={`M0 18L${W} 48`} stroke={PAPER} strokeWidth={3} />
        {/* the floor, and the moonlight across it */}
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />

        {/* the window behind him: the moon, the night, and the vine */}
        <rect x={54} y={40} width={148} height={152} fill={PAPER} />
        <rect x={64} y={50} width={128} height={132} fill={INK} />
        <g clipPath={`url(#${clip.win})`}>
          <path d={m.stars} fill={PAPER} />
          <path d={m.moonRays} fill={PAPER} />
          <circle cx={MOON[0]} cy={MOON[1]} r={27} fill={INK} />
          <circle cx={MOON[0]} cy={MOON[1]} r={24} fill={PAPER} />
          {/* "the vines yield a more luxuriant vintage" */}
          <g fill={INK} stroke={PAPER} strokeWidth={1.2} strokeLinejoin="round">
            <path d="M150 50C160 62 174 64 186 56C182 70 170 76 160 72C164 80 160 88 150 88C148 76 146 64 150 50Z" />
            <path d="M178 76C186 84 196 86 204 80C200 94 190 98 182 94C184 102 178 108 170 106C172 94 172 84 178 76Z" />
            <path d="M92 50C98 60 94 70 84 74C86 82 80 88 72 86C74 76 76 64 70 54Z" />
          </g>
          <path
            d="M64 54C96 64 130 60 160 54C176 52 188 56 196 62"
            fill="none"
            stroke={PAPER}
            strokeWidth={4.4}
          />
          <path
            d="M64 54C96 64 130 60 160 54C176 52 188 56 196 62"
            fill="none"
            stroke={INK}
            strokeWidth={2.2}
          />
          <g fill={INK} stroke={PAPER} strokeWidth={0.9}>
            {[
              [164, 92],
              [170, 92],
              [158, 97],
              [167, 98],
              [173, 98],
              [162, 104],
              [169, 104],
              [166, 110],
              [102, 76],
              [108, 76],
              [99, 82],
              [105, 82],
              [102, 88],
            ].map(([x, y]) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r={3.4} />
            ))}
          </g>
        </g>
        <path d="M128 50V182M64 116H192" stroke={INK} strokeWidth={4} />
        <rect x={50} y={190} width={156} height={7} fill={PAPER} />
        <path d={m.moonShaft} fill={PAPER} opacity={0.85} />

        {/* the long table and its glass */}
        <path d="M324 232L736 232L736 242L324 242Z" fill={PAPER} />
        <path d="M330 242L334 312M728 242L724 312M340 242L344 300" stroke={PAPER} strokeWidth={6} />
        <path d="M330 242L334 312M728 242L724 312M340 242L344 300" stroke={INK} strokeWidth={3} />
        <path d={gouge(330, 237, 730, 237, 1.1)} fill={INK} />
        {/* a retort, flasks, a stand and a mortar, lit by the candle */}
        <g fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round">
          <path d="M596 232C582 232 576 222 578 212C580 200 592 194 604 198C612 190 628 176 648 166L650 170C634 182 620 196 614 206C618 214 616 226 606 232Z" />
          <path d="M660 232C652 232 648 226 648 218C648 210 654 204 660 202V186H668V202C674 204 680 210 680 218C680 226 676 232 668 232Z" />
          <path d="M694 232L690 214H716L712 232Z" />
          <path d="M622 232V222H640V232Z" />
        </g>
        <path
          d={
            gouge(584, 210, 590, 202, 1) +
            gouge(652, 214, 656, 206, 0.9) +
            gouge(694, 218, 710, 218, 0.8)
          }
          fill={PAPER}
        />
        <path d="M690 212L720 196" stroke={INK} strokeWidth={3} strokeLinecap="round" />
        {/* papers of notes spread by his hand */}
        <path
          d="M456 230L520 226L524 232L458 234Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.fine}
        />
        <path d="M470 229L500 227M472 231L510 228.6" stroke={INK} strokeWidth={LINE.hairline} />
        {/* the letters from home, sealed and pushed aside under a heavy book */}
        <path
          d="M744 206L808 196L812 214L748 224Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.fine}
        />
        <path
          d="M752 218L818 210L820 226L754 232Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.fine}
        />
        <path
          d="M738 226L802 222L804 232L740 234Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.fine}
        />
        {/*
          The seals, each with an ink rim and a ring pressed into the wax.
          WHY (27 September 2026): they were first plain red dots on plain
          paper, one half under the book, and at panel size red spots on white
          read as drops of blood, in the chapter of the charnel-houses. A seal
          must read as a seal: rimmed, with its impression cut in it.
        */}
        <g fill={RED} stroke={INK} strokeWidth={0.8}>
          {SEALS.map(([x, y, r]) => (
            <circle key={x} cx={x} cy={y} r={r} />
          ))}
        </g>
        <g fill="none" stroke={INK} strokeWidth={0.8}>
          {SEALS.map(([x, y, r]) => (
            <circle key={x} cx={x} cy={y} r={r * 0.48} />
          ))}
        </g>
        <path
          d="M760 198L840 186L842 200L762 212Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d={gouge(766, 204, 836, 194, 0.8)} fill={PAPER} />
        <path d="M742 232H852V240H742Z" fill={PAPER} />
        <path d="M748 240L752 312M846 240L842 312" stroke={PAPER} strokeWidth={6} />
        <path d="M748 240L752 312M846 240L842 312" stroke={INK} strokeWidth={3} />

        {/* the candle, and its light cut round it */}
        <path d={m.candle} fill={PAPER} />
        <circle cx={CANDLE[0]} cy={CANDLE[1] - 8} r={12} fill={INK} />
        <rect x={548} y={226} width={18} height={6} fill={PAPER} />
        <rect x={551} y={CANDLE[1]} width={12} height={40} fill={INK} />
        <rect x={553.5} y={CANDLE[1] + 1} width={7} height={39} fill={PAPER} />
        <path
          className="lc-flicker"
          d={`M${CANDLE[0] + 1} ${CANDLE[1] - 1}C${CANDLE[0] - 4} ${CANDLE[1] - 6} ${CANDLE[0] - 2} ${CANDLE[1] - 12} ${CANDLE[0] + 1} ${CANDLE[1] - 20}C${CANDLE[0] + 4} ${CANDLE[1] - 12} ${CANDLE[0] + 6} ${CANDLE[1] - 6} ${CANDLE[0] + 1} ${CANDLE[1] - 1}Z`}
          fill={RED}
        />

        {/* his stool */}
        <path
          d="M370 244L364 312M410 244L416 312M368 290H412"
          stroke={INK}
          strokeWidth={4.4}
          fill="none"
        />
        <rect
          x={362}
          y={238}
          width={54}
          height={8}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />

        {/* Victor, staring into the glass */}
        <Figure parts={VICTOR} halo={2.2}>
          <g transform={vt}>
            <path d={VICTOR_HAIR_CUTS + VICTOR_CUTS} fill={PAPER} />
            <path d={VICTOR_PUPIL} fill={INK} />
            <path d={NECKCLOTH} fill={PAPER} />
            {/* "My cheek had grown pale with study": the candlelight on it */}
            <path
              d={
                gouge(9, 0.6, 16, 2, 0.7) +
                gouge(8.6, 4, 15.6, 5.8, 0.7) +
                gouge(8, 7.4, 13.6, 9, 0.6)
              }
              fill={PAPER}
            />
          </g>
          <path
            d={gouge(420, 184, 402, 228, 0.9, 1.2) + gouge(430, 188, 414, 232, 0.7, 0.6)}
            fill={PAPER}
          />
        </Figure>
        <path d={FLASK} fill={PAPER} stroke={INK} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path
          d="M488 184C492 190 500 192 508 186"
          fill="none"
          stroke={INK}
          strokeWidth={LINE.fine}
        />
        <path d="M486 181C490 186 506 188 510 181L510 186C504 192 490 192 486 186Z" fill={INK} />
      </g>
    </>
  )
}

export const theSecretToil: LinocutArt = { width: W, height: H, Draw: TheSecretToil }
