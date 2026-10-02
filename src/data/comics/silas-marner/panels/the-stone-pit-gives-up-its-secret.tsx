import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER } from '@/components/comics/linocut/palette'
import { gouge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Figure,
  GODFREY_CURLS,
  GODFREY_FROWN_CUTS,
  GODFREY_HAIR,
  HEAD_GODFREY,
  HEAD_NANCY,
  NECKCLOTH,
  NancyHead,
  OPEN_HAND,
  PRAY_CUTS,
  PRAY_HANDS,
  PaperHair,
  ROUND_HAT,
  ROUND_HAT_BAND,
  handAt,
  headAt,
  line,
  man,
  seatedGown,
  type Hand,
  type P,
  type Part,
} from './people'
import { ARMCHAIR, ChairShape, H, PolishedParlour, SIDE_CHAIR, TABLE, W } from './polished-parlour'

/**
 * Chapter 18: "The Stone-pit gives up its secret", the fifteenth moment in the
 * guide's timeline. Every detail is from the text (the held edition,
 * src/data/full-texts/silas-marner.ts); the room is the parlour of "Nancy's
 * Sunday", drawn from the same place an hour later (./polished-parlour.tsx),
 * so the armchair that stood empty is filled.
 *
 * - "Godfrey was laying down his hat with trembling hands, and turned towards
 *   her with a pale face"; "he left the touch unnoticed, and threw himself into
 *   his chair"; "'Sit down, Nancy—there,' he said, pointing to a chair opposite
 *   him." So Godfrey is in his armchair by the hearth, his hat laid on the
 *   table among the tea-things that Jane brought in at the end of Chapter 17,
 *   and Nancy sits facing him across the table.
 * - "Presently he lifted his eyes to her face, and kept them fixed on her, as
 *   he said— 'Everything comes to light, Nancy, sooner or later.'" "The eyes of
 *   the husband and wife met with awe in them". So he leans towards her, his
 *   brow drawn down (GODFREY_FROWN_CUTS), and they look at each other across
 *   the table; the quotation is that line.
 * - Nancy, "clasping her hands together tightly on her lap", sits upright,
 *   "pale and quiet as a meditative statue", her hands together in her lap,
 *   the fingers cut apart so they never read as fists. (The kit's finger cuts
 *   alone closed up at this size and the hands printed as one mitten; the
 *   review of 2 October 2026 stroked them wider.)
 * - It is tea-time: the sun is lower, the gravestones' shadows longer, and the
 *   fire made up (the parlour's 'tea' hour). Jane and "the hissing urn" are
 *   sent away ("Tell her to keep away, will you?"), so no one else is here.
 *
 * SAFEGUARDING. What the drained pit gave up, Dunstan's skeleton, is told
 * here and never drawn: the panel is the telling, in a quiet room.
 *
 * Godfrey is the kit's Godfrey at forty, "only fuller in flesh", as "Too late"
 * draws him in this chair. Nancy is the Nancy of "Nancy's Sunday". The spot
 * colour is the fire and the autumn trees.
 *
 * Seeds: none of its own; the room's marks are the parlour's.
 */

// ── GODFREY, in his armchair, leaning towards her ──────────────────────────
const G_HEAD = { d: HEAD_GODFREY, at: [426, 146] as P, rot: 6, scale: 1.3 }
/** His near forearm on his knee, the hand hanging open beyond it. */
const G_NEAR_ARM: P[] = [
  [418, 190],
  [436, 234],
  [462, 236],
]
const G_HAND: Hand = { parts: OPEN_HAND, scale: 1.05, rot: 40 }
const GODFREY: Part[] = man({
  facing: 1,
  neck: [412, 180],
  hip: [394, 242],
  head: G_HEAD,
  body: { width: 40, tails: 20, front: 2, flare: 4 },
  arm: 9.6,
  leg: 10.6,
  near: {
    arm: G_NEAR_ARM,
    hand: G_HAND,
    leg: [
      [398, 246],
      [450, 246],
      [456, 296],
    ],
  },
  far: {
    arm: [
      [404, 190],
      [404, 218],
      [422, 226],
    ],
    leg: [
      [392, 248],
      [442, 250],
      [446, 294],
    ],
  },
})

// ── NANCY, upright in her chair, her hands clasped in her lap ──────────────
const N_HEAD = { at: [604, 150] as P, rot: 0, scale: 1.14 }
const N_NECK: P = [610, 177]
const N_HIP: P = [630, 240]
const N_KNEE: P = [590, 242]
const N_ARM: P[] = [
  [606, 188],
  [610, 222],
  [592, 236],
]
const N_HANDS: Hand = { parts: PRAY_HANDS, scale: 1.05, rot: 6 }

// ── WHAT IS ON THE TABLE ───────────────────────────────────────────────────
/** His round hat, laid down on the table, standing on its brim. */
const HAT_T = 'translate(488 209) scale(0.8)'
/** The tea-things: two cups on their saucers, and the sugar basin. */
const CUPS = [
  'M532 196C532 190 534 188 540 188C546 188 548 190 548 196C548 200 544 202 540 202C536 202 532 200 532 196Z',
  'M554 197C554 191 556 189 562 189C568 189 570 191 570 197C570 201 566 203 562 203C558 203 554 201 554 197Z',
]
const SAUCERS = 'M528 202.6Q540 207 552 202.6M550 203.6Q562 208 572 203.6'
const BASIN = 'M510 200C510 194 514 192 519 192C524 192 528 194 528 200Z'

function TheStonePitGivesUpItsSecret({ uid }: ArtProps) {
  const gt = headAt(1, G_HEAD.at, G_HEAD.rot, G_HEAD.scale)
  const nt = headAt(-1, N_HEAD.at, N_HEAD.rot, N_HEAD.scale)
  const hands = handAt(N_ARM, -1, N_HANDS)
  const nancy: Part[] = [
    { d: seatedGown(N_NECK, N_HIP, N_KNEE, 294, -1, { width: 22, lap: 11 }) },
    { d: HEAD_NANCY, t: nt },
  ]
  return (
    <g className="lc-push" style={timing({ origin: [520, 190], push: 1.03 })}>
      <PolishedParlour uid={uid} hour="tea" />

      {/* his armchair by the hearth */}
      <ChairShape
        parts={{ fill: [ARMCHAIR.back, ARMCHAIR.seat, ARMCHAIR.arm], stroke: [ARMCHAIR.legs] }}
      />
      <path d={ARMCHAIR.cuts} fill="none" stroke={PAPER} strokeWidth={1.2} />
      <g fill={PAPER}>
        {ARMCHAIR.buttons.map(([x, y]) => (
          <circle key={y} cx={x} cy={y} r={1.8} />
        ))}
      </g>

      {/* the table, the tea-things, and his hat laid down among them */}
      <ChairShape parts={{ fill: [TABLE.top, TABLE.pillar], stroke: [TABLE.feet] }} width={3.6} />
      <g transform={HAT_T}>
        <path d={ROUND_HAT} fill={INK} stroke={PAPER} strokeWidth={1.4} />
        <path d={ROUND_HAT_BAND} fill={PAPER} />
      </g>
      <path d={BASIN} fill={PAPER} stroke={INK} strokeWidth={1.1} />
      <g fill={PAPER} stroke={INK} strokeWidth={1.1}>
        {CUPS.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <path d={SAUCERS} fill="none" stroke={PAPER} strokeWidth={2.2} strokeLinecap="round" />
      <path
        d="M548 193Q552 194 550 198M570 194Q574 195 572 199"
        fill="none"
        stroke={PAPER}
        strokeWidth={1.2}
      />

      {/* her chair */}
      <ChairShape
        parts={{ fill: [SIDE_CHAIR.back, SIDE_CHAIR.seat], stroke: [SIDE_CHAIR.legs] }}
        width={4}
      />

      {/* Nancy, very still, her hands clasped in her lap, her eyes on his */}
      <Figure parts={nancy}>
        <NancyHead t={nt} />
        <path
          d={
            gouge(604, 196, 622, 196, 0.7) +
            gouge(608, 200, 600, 238, 0.7, 0.8) +
            gouge(574, 256, 578, 290, 0.8) +
            gouge(586, 254, 592, 290, 0.7)
          }
          fill={PAPER}
        />
      </Figure>
      <Figure
        parts={[
          { d: line(N_ARM), w: 7, sep: 1.2 },
          ...N_HANDS.parts.map((q) => ({ ...q, t: hands })),
        ]}
        halo={1.4}
      >
        {/* stroked as well as filled: lying in her lap the cuts alone close up (see PRAY_HANDS) */}
        <path
          d={PRAY_CUTS}
          transform={hands}
          fill={PAPER}
          stroke={PAPER}
          strokeWidth={0.9}
          strokeLinecap="round"
        />
      </Figure>

      {/* Godfrey, leaning towards her, his eyes fixed on her */}
      <Figure parts={GODFREY}>
        <path d={NECKCLOTH} transform={gt} fill={PAPER} />
        <PaperHair t={gt} d={GODFREY_HAIR} lines={GODFREY_CURLS} />
        <path d={GODFREY_FROWN_CUTS} transform={gt} fill={PAPER} />
      </Figure>
    </g>
  )
}

export const theStonePitGivesUpItsSecret: LinocutArt = {
  width: W,
  height: H,
  Draw: TheStonePitGivesUpItsSecret,
}
