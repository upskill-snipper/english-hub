import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER } from '@/components/comics/linocut/palette'
import { gouge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Bonnet,
  Figure,
  GODFREY_CURLS,
  GODFREY_CUTS,
  GODFREY_HAIR,
  GRIP_CUTS,
  GRIP_HAND,
  HEAD_GODFREY,
  HEAD_NANCY,
  HOLD_CUTS,
  HOLD_HAND,
  NECKCLOTH,
  NancyHead,
  PaperHair,
  gown,
  handAt,
  headAt,
  man,
  type P,
  type Part,
} from './people'
import { ARMCHAIR, ChairShape, H, PolishedParlour, SIDE_CHAIR, TABLE, W } from './polished-parlour'

/**
 * Chapter 20: "Too late", the seventeenth moment in the guide's timeline.
 * Every detail is from the text (the held edition,
 * src/data/full-texts/silas-marner.ts); the room is the Red House parlour of
 * moments 14 and 15, at night, in ./polished-parlour.tsx, with the sentences
 * it is drawn from.
 *
 * - "Nancy and Godfrey walked home under the starlight in silence. When they
 *   entered the oaken parlour, Godfrey threw himself into his chair, while
 *   Nancy laid down her bonnet and shawl, and stood on the hearth near her
 *   husband". So it is night, the window is full of stars, the room is lit by
 *   the fire alone, Godfrey sits in his wing armchair by the hearth (the
 *   chair he threw himself into in Chapter 18), and the bonnet and shawl she
 *   wore to the cottage in "Eppie chooses" are laid down: the bonnet on the
 *   round table, the shawl over the back of her chair.
 * - "At last Godfrey turned his head towards her, and their eyes met"; "he
 *   put out his hand, and as Nancy placed hers within it, he drew her towards
 *   him"; "She bent to kiss him, and then said, as she stood by his side".
 *   So she stands at his side with her hand in his, his hand closed round it
 *   (its knuckles cut apart), her head bent to him and his turned up to her.
 * - Then he says it: "I wanted to pass for childless once, Nancy—I shall pass
 *   for childless now against my wish." The quotation on the panel is its
 *   second half, as the whole runs to sixteen words.
 * - Godfrey is "The tall blond man of forty" (Chapter 16), the kit's Godfrey
 *   (./people.tsx), his fair hair in paper. Nancy is the kit's Nancy, bare-
 *   headed now, so the flat rings over her brow show, in the plain dark gown
 *   of "Nancy's Sunday". Nothing in the chapter calls up the bloom on her
 *   cheek, so the one spot colour is the low fire.
 *
 * Seeds: none of its own; the room's marks are the parlour's.
 */

// ── GODFREY, in his armchair by the hearth, turned up to her ────────────────
const GOD_HEAD = { d: HEAD_GODFREY, at: [410, 140] as P, rot: -8, scale: 1.3 }
const GOD_NEAR_ARM: P[] = [
  [410, 184],
  [430, 216],
  [458, 208],
]
/** His hand closed round hers: "as Nancy placed hers within it". */
const GOD_GRIP = { parts: GRIP_HAND, scale: 1.05, rot: -14 }
const GODFREY: Part[] = man({
  facing: 1,
  neck: [402, 175],
  hip: [394, 242],
  head: GOD_HEAD,
  body: { width: 40, tails: 20, front: 2, flare: 4 },
  arm: 9.6,
  leg: 10.6,
  near: {
    arm: GOD_NEAR_ARM,
    leg: [
      [398, 246],
      [448, 248],
      [454, 296],
    ],
    hand: GOD_GRIP,
  },
  far: {
    arm: [
      [400, 186],
      [404, 214],
      [414, 222],
    ],
    leg: [
      [392, 248],
      [440, 252],
      [444, 294],
    ],
  },
})

// ── NANCY, standing at his side, her hand in his ───────────────────────────
const NAN_HEAD_AT: P = [496, 106]
const NAN_T = headAt(-1, NAN_HEAD_AT, -12, 1.12)
const NAN_NECK: P = [500, 134]
const NAN_NEAR_ARM: P[] = [
  [504, 142],
  [492, 180],
  [472, 202],
]
const NAN_HAND = { parts: HOLD_HAND, scale: 0.86, rot: 6 }
const NANCY: Part[] = [
  { d: 'M494 142L486 178L494 202', w: 6.6 },
  { d: gown(NAN_NECK, [506, 298], { width: 24, waist: 21, foot: 42, bust: 3 }) },
  { d: HEAD_NANCY, t: NAN_T },
  { d: NAN_NEAR_ARM.map(([x, y], i) => `${i ? 'L' : 'M'}${x} ${y}`).join(''), w: 6.6, sep: 1.4 },
  ...HOLD_HAND.map((q) => ({ ...q, t: handAt(NAN_NEAR_ARM, -1, NAN_HAND) })),
]
/** The neat folds of her gown, and its high waist. */
const NAN_CUTS =
  gouge(492, 156, 512, 155, 0.8) +
  gouge(498, 166, 492, 230, 0.7, 0.6) +
  gouge(508, 168, 512, 288, 0.8, -0.5) +
  gouge(488, 240, 484, 290, 0.7, 0.4)

// ── WHAT SHE LAID DOWN ──────────────────────────────────────────────────────
/** The bonnet on the table, on its side, its crown towards the window. */
const BONNET_AT = 'translate(548 190) rotate(-72) scale(-0.9 0.9)'
/**
 * Her shawl folded over the top of her chair-back, falling in two fringed
 * flaps either side of it, the chair-back showing between them. (Cut first
 * as one long dark shape hanging from just below the top of the chair-back,
 * and the review of 2 October 2026 found that, with the top of the back
 * standing above it like a head, it read as a dark figure standing at the
 * window.)
 */
const SHAWL =
  'M641 143C636 143 633 147 632 152L618 202L636 196L641 178L646 196L667 202L652 152C650 147 646 143 641 143Z'
const SHAWL_FRINGE = [0, 1, 2, 3, 4, 5]
  .map((k) => {
    const t = k / 5
    const fx = 618 + 18 * t
    const fy = 202 - 6 * t
    const bx = 646 + 21 * t
    const by = 196 + 6 * t
    return `M${fx} ${fy + 1}l-0.6 5.4M${bx} ${by + 1}l0.6 5.4`
  })
  .join('')
const SHAWL_FOLDS = gouge(634.5, 157, 625, 196, 0.7, 0.6) + gouge(647.5, 157, 657, 197, 0.7, -0.6)

function TooLate({ uid }: ArtProps) {
  const gt = headAt(1, GOD_HEAD.at, GOD_HEAD.rot, GOD_HEAD.scale)
  return (
    <g className="lc-push" style={timing({ origin: [440, 190], push: 1.03 })}>
      <PolishedParlour uid={uid} hour="night" />

      {/* her chair by the window, her shawl over its back */}
      <ChairShape
        parts={{ fill: [SIDE_CHAIR.back, SIDE_CHAIR.seat], stroke: [SIDE_CHAIR.legs] }}
        width={4}
      />
      <path d={SHAWL} fill={INK} stroke={PAPER} strokeWidth={1.3} strokeLinejoin="round" />
      <path d={SHAWL_FRINGE} stroke={PAPER} strokeWidth={1.1} strokeLinecap="round" />
      <path d={SHAWL_FOLDS} fill={PAPER} />

      {/* the round table, and her bonnet laid on it */}
      <ChairShape parts={{ fill: [TABLE.top, TABLE.pillar], stroke: [TABLE.feet] }} width={3.6} />
      <Bonnet t={BONNET_AT} straw />

      {/* his armchair by the hearth */}
      <ChairShape
        parts={{ fill: [ARMCHAIR.back, ARMCHAIR.seat, ARMCHAIR.arm], stroke: [ARMCHAIR.legs] }}
      />
      <g fill={PAPER}>
        {ARMCHAIR.buttons.map(([x, y]) => (
          <circle key={y} cx={x} cy={y} r={1.8} />
        ))}
      </g>

      {/* Nancy, standing at his side */}
      <Figure parts={NANCY}>
        <path d={NAN_CUTS} fill={PAPER} />
        <NancyHead t={NAN_T} />
        <path d={HOLD_CUTS} transform={handAt(NAN_NEAR_ARM, -1, NAN_HAND)} fill={PAPER} />
      </Figure>

      {/* Godfrey, his hand round hers */}
      <Figure parts={GODFREY}>
        <path d={NECKCLOTH} transform={gt} fill={PAPER} />
        <PaperHair t={gt} d={GODFREY_HAIR} lines={GODFREY_CURLS} />
        <path d={GODFREY_CUTS} transform={gt} fill={PAPER} />
        <path d={GRIP_CUTS} transform={handAt(GOD_NEAR_ARM, 1, GOD_GRIP)} fill={PAPER} />
        <path d={gouge(404, 188, 396, 236, 1, -1)} fill={PAPER} />
      </Figure>
    </g>
  )
}

export const tooLate: LinocutArt = { width: W, height: H, Draw: TooLate }
