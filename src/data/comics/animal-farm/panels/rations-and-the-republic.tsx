import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED, SERIF } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  n,
  ribbon,
  rng,
  wave,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { CowStanding } from './chapter-9-kit'
import { BleatingSheep, Cockerel } from './two-legs'
import { Hen, Horse, Pig, Wolfdog, place, type P } from './people'

/**
 * Chapter 9: "Rations and the Republic", the twenty-sixth moment in the
 * guide's timeline. The picture is the ceremony the chapter sets against the
 * hunger. Every detail is from the text (the held edition,
 * src/data/full-texts/animal-farm.ts):
 *
 * - "The winter was as cold as the last one had been, and food was even
 *   shorter. Once again all rations were reduced, except those of the pigs
 *   and the dogs." So it is winter: the trees are bare and the sky is low.
 * - "Napoleon had commanded that once a week there should be held something
 *   called a Spontaneous Demonstration ... the animals would leave their work
 *   and march round the precincts of the farm in military formation, with the
 *   pigs leading, then the horses, then the cows, then the sheep, and then the
 *   poultry. The dogs flanked the procession and at the head of all marched
 *   Napoleon's black cockerel." So, from the right, in that order: the
 *   cockerel, crowing; Napoleon and Squealer; the horses; the cows; the sheep;
 *   the hens at the back; and on the near side of the column one of
 *   Napoleon's dogs, the kit's Wolfdog, since by now it is his dogs that go
 *   with him.
 * - "Boxer and Clover always carried between them a green banner marked with
 *   the hoof and the horn and the caption, 'Long live Comrade Napoleon!'" So
 *   the two horses walk one behind the other with the banner stretched on two
 *   poles between them, its caption in the text's own words. The print cannot
 *   show green, so the banner is dark, as the flag is on the staff behind,
 *   and its hoof and horn are cut in paper. How the horses hold the poles is
 *   not said; they carry them in their mouths.
 * - "if anyone complained ... the sheep were sure to silence him with a
 *   tremendous bleating of 'Four legs good, two legs bad!'" So the sheep
 *   bleat as they march.
 * - "In April, Animal Farm was proclaimed a Republic ... There was only one
 *   candidate, Napoleon, who was elected unanimously." That is what the banner
 *   and the order of march already say; the quotation on the panel is the
 *   narrator's verdict on the ceremony, from the same page.
 *
 * The animals are the shared figures of ./people.tsx; the cockerel and the
 * bleating sheep are the Chapter 10 figures of ./two-legs.tsx, so they look
 * the same there as here; the standing cow is in ./chapter-9-kit.tsx, built
 * from the kit's cow.
 * The spot colour is the farmhouse roof, red as the text's farm roofs are
 * (Chapter 7), and nothing else. Nothing is taken from a film, a cartoon or a
 * stage production.
 *
 * Seeds: 2601 (sky, trees and yard).
 */

const W = 860
const H = 340
/** The far side of the yard. */
const FAR = 214

/** Where a cart-horse's mouth is in the kit's frame (its head on HEAD_FRAME, level). */
const MOUTH: P = [92, -115]
const BOXER: P = [452, 312]
const BOXER_S = 0.78
const CLOVER: P = [298, 314]
const CLOVER_S = 0.76
/** How far each pole rises above the mouth, in the horse's frame. */
const POLE_UP = 170
/** A pole held in the mouth, in the horse's frame: from below the jaw to above the head. */
const POLE = `M${MOUTH[0]} ${MOUTH[1] + 12}L${MOUTH[0]} ${MOUTH[1] - POLE_UP}`
const poleX = (at: P, s: number) => at[0] + MOUTH[0] * s
const poleTop = (at: P, s: number) => at[1] + (MOUTH[1] - POLE_UP) * s

type Marks = { sky: string; hedge: string; yard: string; trees: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(2601)
  // A low winter sky: paper, streaked with long bands of ink.
  let sky = ''
  for (let y = 16; y < FAR - 24; y += 8) {
    let x = between(r, -60, 0)
    while (x < W) {
      const len = between(r, 50, 170)
      if (r() < 0.3 + (y / FAR) * 0.25)
        sky += ribbon(
          wave(x, x + len, y + between(r, -2, 2), 1.4, 100, between(r, 0, 6), 8),
          1.4 + (y / FAR) * 1.4,
          0.8,
        )
      x += len + between(r, 20, 90)
    }
  }
  let hedge = `M0 ${FAR + 4}`
  for (let x = 0; x <= W; x += 6)
    hedge += `L${x} ${n(FAR - 12 - 4 * Math.sin(x / 23) - 3 * Math.sin(x / 9 + 2) - between(r, 0, 2))}`
  hedge += `L${W} ${FAR + 4}Z`
  // The yard, frozen hard: paper, with short strokes of ink.
  let yard = ''
  for (let y = FAR + 8; y < H; y += 5.5 + (y - FAR) * 0.05) {
    const t = clamp((y - FAR) / (H - FAR))
    let x = between(r, -20, 0)
    while (x < W) {
      const len = between(r, 6, 20) * (0.7 + t)
      if (r() < 0.5) yard += gouge(x, y, x + len, y + between(r, -0.5, 0.5), 0.5 + t * 1.1)
      x += len + between(r, 14, 44) * (1.4 - t * 0.5)
    }
  }
  // Bare winter trees along the hedge: trunks and branching twigs.
  let trees = ''
  const tree = (x: number, base: number, h: number) => {
    trees += wedge(x, base, x + between(r, -3, 3), base - h, 7, 2)
    const branch = (x0: number, y0: number, a: number, len: number, wd: number, depth: number) => {
      const x1 = x0 + Math.cos(a) * len
      const y1 = y0 + Math.sin(a) * len
      trees += wedge(x0, y0, x1, y1, wd, wd * 0.5)
      if (depth > 0) {
        branch(x1, y1, a - between(r, 0.3, 0.6), len * 0.66, wd * 0.6, depth - 1)
        branch(x1, y1, a + between(r, 0.3, 0.6), len * 0.66, wd * 0.6, depth - 1)
      }
    }
    for (let k = 0; k < 4; k++)
      branch(
        x,
        base - h * (0.45 + k * 0.16),
        -Math.PI / 2 + between(r, -0.9, 0.9),
        h * 0.36,
        3.2,
        2,
      )
  }
  tree(40, FAR - 4, 120)
  tree(232, FAR - 6, 92)
  tree(820, FAR - 2, 110)
  cached = { sky, hedge, yard, trees }
  return cached
}

/** The hoof and the horn, cut in paper, in a frame about 30 wide. */
const HOOF_HORN =
  'M2 14C0 6 3 0 9 0C15 0 18 6 16 14L12 14C13 8 12 5 9 5C6 5 5 8 6 14Z' +
  'M20 14C22 6 27 1 34 0C30 4 28 8 27 14Z'

function Banner({ x0, x1, top }: { x0: number; x1: number; top: number }) {
  const bottom = top + 50
  const mid = (x0 + x1) / 2
  return (
    <g>
      <path
        d={`M${x0} ${top}H${x1}V${bottom}Q${mid} ${bottom + 7} ${x0} ${bottom}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path d={`M${x0 + 5} ${top + 4}H${x1 - 5}`} stroke={PAPER} strokeWidth={LINE.fine} />
      <path d={HOOF_HORN} transform={`translate(${n(mid - 17)} ${top + 9})`} fill={PAPER} />
      <text
        x={n(mid)}
        y={top + 41}
        textAnchor="middle"
        fontFamily={SERIF}
        fontStyle="italic"
        fontWeight={700}
        fontSize={12.4}
        fill={PAPER}
        textLength={n(x1 - x0 - 16)}
        lengthAdjust="spacingAndGlyphs"
      >
        Long live Comrade Napoleon!
      </text>
    </g>
  )
}

function RationsAndTheRepublic({ uid }: ArtProps) {
  const m = marks()
  const px0 = poleX(CLOVER, CLOVER_S)
  const px1 = poleX(BOXER, BOXER_S)
  const top = Math.max(poleTop(CLOVER, CLOVER_S), poleTop(BOXER, BOXER_S)) + 4
  return (
    <g className="lc-push" style={timing({ origin: [520, 250], push: 1.03 })}>
      <rect x={0} y={0} width={W} height={H} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      <path d={m.trees} fill={INK} />
      <path d={m.hedge} fill={INK} />
      <path d={m.yard} fill={INK} />

      {/* the farmhouse, its roof red, and the flagstaff in its garden */}
      <rect x={640} y={150} width={220} height={FAR - 150} fill={INK} />
      <path d="M626 152L652 118H860V152Z" fill={RED} />
      <path d="M624 151H860" stroke={INK} strokeWidth={LINE.bold} />
      <g fill={PAPER}>
        <rect x={668} y={164} width={20} height={24} />
        <rect x={712} y={164} width={20} height={24} />
        <rect x={800} y={164} width={20} height={24} />
      </g>
      <path
        d="M678 164V188M668 176H688M722 164V188M712 176H732M810 164V188M800 176H820"
        stroke={INK}
        strokeWidth={LINE.fine}
      />
      <path d={`M600 ${FAR}V26`} stroke={PAPER} strokeWidth={6.4} />
      <path d={`M600 ${FAR}V26`} stroke={INK} strokeWidth={4} />
      <circle cx={600} cy={24} r={3.6} fill={INK} />
      {/* the flag, green in the text, dark here, with its white hoof and horn */}
      <g className="lc-drift-r" style={timing({ delay: 0.2, dur: 2.4 })}>
        <path
          d="M602 30C618 26 634 34 652 30C662 28 668 30 672 32L672 70C664 66 656 68 646 70C630 74 616 66 602 70Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        <path d={HOOF_HORN} transform="translate(622 42) scale(0.78)" fill={PAPER} />
      </g>

      {/*
        the cows, then the sheep, bleating, then the poultry at the back. The
        sheep march two ranks deep and the hens come last, drawn over them:
        the hens were first set behind the sheep and hidden by them, and the
        last sheep's head was lost behind the cow's rump (review, 27
        September 2026).
      */}
      <CowStanding at={[176, 314]} s={0.7} />
      <BleatingSheep at={[84, 314]} s={0.95} />
      <BleatingSheep at={[118, 318]} s={0.95} />
      <BleatingSheep at={[100, 338]} s={1.0} />
      <Hen at={[58, 322]} s={1.05} />
      <Hen at={[36, 337]} s={1.15} />

      {/* the horses, Clover and Boxer, the banner on its poles between them */}
      <g transform={place(CLOVER, CLOVER_S, 1)}>
        <path d={POLE} stroke={PAPER} strokeWidth={7} strokeLinecap="round" />
        <path d={POLE} stroke={INK} strokeWidth={4.4} strokeLinecap="round" />
      </g>
      <g transform={place(BOXER, BOXER_S, 1)}>
        <path d={POLE} stroke={PAPER} strokeWidth={7} strokeLinecap="round" />
        <path d={POLE} stroke={INK} strokeWidth={4.4} strokeLinecap="round" />
      </g>
      <Banner x0={px0 + 3} x1={px1 - 3} top={top} />
      <Horse at={CLOVER} s={CLOVER_S} who="clover" uid={uid} />
      <Horse at={BOXER} s={BOXER_S} who="boxer" />

      {/* the pigs leading: Squealer, and Napoleon at their head */}
      <Pig at={[578, 308]} s={0.8} kind="squealer" />
      <Pig at={[680, 308]} s={0.9} kind="napoleon" />
      {/* at the head of all, Napoleon's black cockerel, crowing */}
      <Cockerel at={[796, 306]} s={1.05} />

      {/* one of Napoleon's dogs, flanking the column on the near side */}
      <Wolfdog at={[432, 338]} s={0.9} />
    </g>
  )
}

export const rationsAndTheRepublic: LinocutArt = {
  width: W,
  height: H,
  Draw: RationsAndTheRepublic,
}
