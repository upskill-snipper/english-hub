import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { clamp, gougeField, rays, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { dropInside } from '../../jekyll-and-hyde/panels/confession-kit'
import { Armchair, ChairArm, Desk, Mantel, armchair } from './baker-street'
import {
  COLLAR,
  Figure,
  HEAD_HOLMES,
  HEAD_WATSON,
  HOLMES_CUTS,
  HOLMES_HAIR,
  HOLMES_PUPIL,
  HolmesHands,
  LONG_HAND,
  OPEN_HAND,
  WATSON_CUTS,
  WATSON_FLUSH,
  WATSON_HAIR,
  WATSON_PUPIL,
  floorBoards,
  gent,
  handAt,
  headAt,
  type P,
  type Part,
} from './people'

/**
 * Chapter 12, "The Strange Story of Jonathan Small": "The division of
 * rewards", the last moment in the guide's timeline, set in the same room as
 * the first ("The seven-per-cent solution") and drawn as its bookend: the
 * shared Mantel, armchairs and desk, Watson in his chair on the left and
 * Holmes in his on the right, as there. Every detail is from the held edition:
 *
 * - "You first, Small," remarked the wary Jones as they left the room. So
 *   Jones and Small have gone, and only Holmes and Watson are left.
 * - "Well, and there is the end of our little drama," I remarked, after we
 *   had set some time smoking in silence. The text sets the smoking before
 *   the talk, so no pipe is drawn, and the only thing either man reaches for
 *   is the one the quotation names.
 * - "Miss Morstan has done me the honour to accept me as a husband in
 *   prospective"; "said I, laughing". Watson is the man of feeling, so the
 *   kit's WATSON_FLUSH is on his cheekbone, never on the mouth.
 * - "You have done all the work in this business. I get a wife out of it,
 *   Jones gets the credit, pray what remains for you?" So Watson, in his
 *   chair, holds out an open hand towards Holmes as he asks: the gesture he
 *   made in the first panel, "Count the cost!", made again at the end. It is
 *   held level, pointing at Holmes, not raised: raised fingers would say
 *   "stop", and Watson does not protest here.
 * - "My companion lounged in his arm-chair with his usual listless
 *   expression" (earlier in the chapter); "But you look weary." / "Yes, the
 *   reaction is already upon me. I shall be as limp as a rag for a week."
 *   So Holmes lies sunk back in his chair, his body slid down the seat and
 *   leaning into its back, his long legs stretched out before him towards
 *   the hearth.
 * - "For me," said Sherlock Holmes, "there still remains the cocaine-bottle."
 *   And he stretched his long white hand up for it. So Holmes stretches his
 *   paper-white hand (the kit's LONG_HAND palm, its long fingers curved to
 *   take hold, REACH_HAND) up from the depth of the chair towards the bottle,
 *   his face lifted to it; the fingers are open beside it and have not yet
 *   reached it.
 *
 * THE BOOKEND. The spot colour marks what each man is left with: on the left
 * Watson's flush, on the right the neat morocco case beside the bottle,
 * printed in red as it is in the first panel, where it is what the two men
 * argue about. The third red is the lamp's flame, printed as the reference
 * counting-house prints its fire and its candles.
 *
 * WHY THE MANTEL IS TURNED. Chapter 1 puts the bottle at "the corner of the
 * mantel-piece", and here Holmes reaches it from his chair, so it stands at
 * the corner by his chair. The shared Mantel sets the bottle and the case at
 * its left-hand corner, by Watson's chair in the first panel; this panel
 * draws the same Mantel turned about (MANTEL_FLIP), which puts them at the
 * right-hand corner, by Holmes, and the fireplace stands close enough to his
 * chair for his reach. The shared file is not changed.
 *
 * WHAT IS NOT DRAWN. The rule for this text in ./people.tsx: the cocaine is
 * left to the words. No syringe, no needle, no bared arm; the bottle and the
 * closed morocco case are the shared Mantel's, exactly as in the first panel,
 * and his hand has not reached them.
 *
 * THE ARM. A raised straight arm with an open hand can read as a salute or a
 * wave, so the arm rises on a diagonal towards the bottle with a bend at the
 * elbow, the wrist turns so the fingers point level at the bottle, not up
 * past it, and the hand ends just short of it, level with it on the shelf,
 * its long fingers curving towards it, every one apart. (Pointed along the
 * forearm, the fingers rose above the bottle and read as a wave at phone
 * width.) The hand has its own thick ink halo, so its white fingers stay
 * apart from the white cuts of the lit wall behind it.
 *
 * The text does not say how the room is lit at night, so one plain oil lamp
 * stands on the other end of the mantel, its flame the spot colour. The
 * shared Mantel leaves the grate dark: the text lights no fire. The wall is
 * left solid ink round the bottle and the case, so both stand clear at phone
 * width; cuts the mantel would hide are not carved at all.
 *
 * Seeds: 1601 (the wall), 1602 (the lamp's rays), 1603 (the floor).
 */

const W = 860
const H = 340
/** The foot of the wall, where the boards begin. */
const FLOOR = 262
/** The shared Mantel: its left end, its width and its shelf. */
const MX = 454
const MW = 164
const SHELF = 142
/** The Mantel turned about its own centre, so the bottle and case stand at its right-hand corner. */
const MANTEL_FLIP = `translate(${2 * MX + MW} 0) scale(-1 1)`
/** The bottle and the case, once turned: their left and right edges on the shelf. */
const BOTTLE = { x0: MX + MW - 20, x1: MX + MW - 8, top: SHELF - 34 }
const CASE = { x0: MX + MW - 62, x1: MX + MW - 26 }
/** The lamp's flame, on the other end of the shelf. */
const LAMP: P = [MX + 24, SHELF - 38]

type Marks = { wall: string; glow: string; floor: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const light = (x: number, y: number) =>
    Math.max(clamp(1 - Math.hypot((x - LAMP[0]) * 0.8, (y - LAMP[1]) * 1.1) / 380) ** 1.2, 0.05)
  // Not carved: what the mantel covers, and the dark ground kept round the
  // bottle and the case so they stand clear.
  const hidden = (x: number, y: number) =>
    (x > MX - 2 && x < MX + MW + 2 && y > SHELF - 7) ||
    (x > CASE.x0 - 12 && x < BOTTLE.x1 + 8 && y > BOTTLE.top - 9)
  const wall = dropInside(
    gougeField(rng(1601), { x0: 0, x1: W, y0: 6, y1: FLOOR - 2 }, light, {
      spacing: 6.2,
      len: [14, 50],
    }),
    hidden,
  )
  const glow = dropInside(
    rays(rng(1602), LAMP[0], LAMP[1], { from: 22, to: 96, every: 7, width: 2.6 }),
    hidden,
  )
  const floor = floorBoards(rng(1603), W, H, FLOOR, [500, 90], 34)
  cached = { wall, glow, floor }
  return cached
}

// ── Watson, in his chair on the left, an open hand held out to Holmes ───────
const WAT_CHAIR = armchair(206, 1, 244, 300)
const WAT_HEAD = { d: HEAD_WATSON, at: [276, 124] as P, rot: 6, scale: 1.3 }
const WATSON: Part[] = gent({
  facing: 1,
  neck: [270, 160],
  hip: [248, 238],
  head: WAT_HEAD,
  body: { width: 34, hem: 16, flare: 4 },
  arm: 9,
  leg: 10,
  near: {
    arm: [
      [274, 170],
      [288, 201],
      [321, 194],
    ],
    leg: [
      [252, 238],
      [310, 240],
      [314, 318],
    ],
    hand: { parts: OPEN_HAND, scale: 1.1, rot: 6 },
  },
  far: {
    // resting along the arm of the chair, hidden by it
    arm: [
      [264, 170],
      [266, 204],
      [290, 214],
    ],
    leg: [
      [246, 240],
      [300, 246],
      [298, 318],
    ],
  },
})
/** The near arm and its hand are the last seven parts: drawn again over the chair's arm. */
const WATSON_BODY = WATSON.slice(0, -7)
const WATSON_ARM = WATSON.slice(-7)

// ── Holmes, sunk back in his chair on the right, reaching for the bottle ────
const HOL_CHAIR = armchair(736, -1, 244, 300)
const HOL_HEAD = { d: HEAD_HOLMES, at: [715, 155] as P, rot: 16, scale: 1.3 }
/**
 * The reaching arm: the elbow carried out low to the left, clear of his face,
 * and the forearm rising from it to the shelf.
 *
 * REDRAWN on 2 October 2026 (review). The first points lay almost on one line
 * (a bend of seven degrees at the elbow, though the docblock above asked for
 * a bend), so at phone width it was the straight raised arm with an open hand
 * that reads as a salute. Now the elbow bends by about forty degrees, and the
 * wrist turns the fingers level at the bottle.
 */
const HOL_REACH: P[] = [
  [700, 194],
  [666, 182],
  [643, 138],
]
/**
 * His hand as it reaches: LONG_HAND's palm, with the long fingers curved a
 * little to take hold and the thumb opened above them, so the gap between
 * thumb and fingers faces the bottle. Every finger apart, as the kit asks.
 * In the frame of the kit's hands (the wrist at (0, 0), pointing along +x,
 * the thumb on the -y side).
 */
const REACH_HAND: Part[] = [
  LONG_HAND[0],
  { d: 'M9 -3.4Q15.4 -5.4 20.6 -3', w: 1.9 },
  { d: 'M9.4 -0.9Q16.4 -1.6 21.2 1.4', w: 1.9 },
  { d: 'M9.4 1.5Q15.4 2 19.4 5.2', w: 1.9 },
  { d: 'M9 3.7Q13.4 5.2 16.2 8', w: 1.8 },
  { d: 'M2.4 -3.8Q6.6 -9.4 12.8 -9.8', w: 2 },
]
const HOL_REACH_HAND = { parts: REACH_HAND, scale: 1.15, rot: -46 }
const HOLMES: Part[] = gent({
  facing: -1,
  neck: [706, 188],
  hip: [680, 250],
  head: HOL_HEAD,
  // a short skirt, so the coat does not hang below the arm of the chair
  body: { width: 26, hem: 9, flare: 3 },
  arm: 8,
  leg: 9,
  near: {
    arm: HOL_REACH,
    // stretched out before him, towards the hearth
    leg: [
      [682, 250],
      [624, 254],
      [572, 315],
    ],
  },
  far: {
    // hanging by his side, behind the arm of the chair
    arm: [
      [710, 196],
      [720, 228],
      [704, 240],
    ],
    // drawn up a little, the foot nearer the chair
    leg: [
      [686, 254],
      [632, 258],
      [612, 318],
    ],
  },
})
/** The reaching arm is the last part: drawn again over the chair's arm. */
const HOLMES_BODY = HOLMES.slice(0, -1)
const HOLMES_ARM = HOLMES.slice(-1)

/** A thick ink halo round a hand in paper, to knock it out of a lit ground. */
function HandHalo({ parts, t, w }: { parts: Part[]; t: string; w: number }) {
  return (
    <g transform={t} fill={INK} stroke={INK} strokeLinecap="round" strokeLinejoin="round">
      {parts.map((p) =>
        p.w ? (
          <path key={p.d} d={p.d} fill="none" strokeWidth={p.w + w} />
        ) : (
          <path key={p.d} d={p.d} strokeWidth={w} />
        ),
      )}
    </g>
  )
}

function TheDivisionOfRewards(_props: ArtProps) {
  const m = marks()
  const wt = headAt(1, WAT_HEAD.at, WAT_HEAD.rot, WAT_HEAD.scale)
  const ht = headAt(-1, HOL_HEAD.at, HOL_HEAD.rot, HOL_HEAD.scale)
  const [lx, ly] = LAMP
  const top = SHELF - 6
  return (
    <>
      <g className="lc-push" style={timing({ origin: [600, 140], push: 1.03 })}>
        {/* the sitting-room wall at night, lit by the one lamp */}
        <path d={m.wall} fill={PAPER} />
        <rect x={0} y={FLOOR - 4} width={W} height={4} fill={PAPER} />
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />

        {/* Watson's open desk, in the corner */}
        <Desk x={42} top={182} floor={300} />

        {/* the lamp's light on the wall, then the mantelpiece: the bottle and the case, shut, at Holmes's corner */}
        <path d={m.glow} fill={PAPER} />
        <g transform={MANTEL_FLIP}>
          <Mantel x={MX} shelf={SHELF} floor={FLOOR} caseRed />
        </g>

        {/* the oil lamp on the other end of the shelf */}
        <path
          d={`M${lx - 11} ${top}H${lx + 11}L${lx + 6} ${top - 6}H${lx - 6}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        <ellipse
          cx={lx}
          cy={top - 13}
          rx={10}
          ry={8}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <rect
          x={lx - 7}
          y={top - 23}
          width={14}
          height={4}
          fill={INK}
          stroke={PAPER}
          strokeWidth={1}
        />
        <path
          d={`M${lx - 5} ${top - 23}C${lx - 7} ${top - 30} ${lx - 4} ${top - 36} ${lx - 3.4} ${top - 48}H${lx + 3.4}C${lx + 4} ${top - 36} ${lx + 7} ${top - 30} ${lx + 5} ${top - 23}Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.2}
        />
        <path
          className="lc-flicker"
          d={`M${lx} ${ly + 12}C${lx - 3.4} ${ly + 8} ${lx - 2.2} ${ly + 3} ${lx} ${ly - 3}C${lx + 2.2} ${ly + 3} ${lx + 3.4} ${ly + 8} ${lx} ${ly + 12}Z`}
          fill={RED}
        />

        {/* Watson's chair, and Watson: "pray what remains for you?" */}
        <Armchair c={WAT_CHAIR} />
        <Figure parts={WATSON_BODY}>
          <path d={WATSON_CUTS + WATSON_HAIR + COLLAR} transform={wt} fill={PAPER} />
          <path d={WATSON_PUPIL} transform={wt} fill={INK} />
        </Figure>
        <path
          d={WATSON_FLUSH}
          transform={wt}
          fill="none"
          stroke={RED}
          strokeWidth={2.2}
          strokeLinecap="round"
        />
        <ChairArm c={WAT_CHAIR} />
        <Figure parts={WATSON_ARM} />

        {/* Holmes's chair, and Holmes, "as limp as a rag", reaching for the bottle */}
        <Armchair c={HOL_CHAIR} />
        <Figure parts={HOLMES_BODY}>
          <path d={HOLMES_CUTS + HOLMES_HAIR + COLLAR} transform={ht} fill={PAPER} />
          <path d={HOLMES_PUPIL} transform={ht} fill={INK} />
        </Figure>
        <ChairArm c={HOL_CHAIR} />
        <Figure parts={HOLMES_ARM} />
        {/* "he stretched his long white hand up for it" */}
        <HandHalo parts={REACH_HAND} t={handAt(HOL_REACH, -1, HOL_REACH_HAND)} w={6} />
        <HolmesHands facing={-1} arms={[{ arm: HOL_REACH, hand: HOL_REACH_HAND }]} />
      </g>
    </>
  )
}

export const theDivisionOfRewards: LinocutArt = {
  width: W,
  height: H,
  Draw: TheDivisionOfRewards,
}
