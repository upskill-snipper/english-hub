import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { gouge, n, type Pt } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'

import { shoe } from '../../romeo-and-juliet/panels/verona-kit'
import { Person, type Pose } from './people'
import {
  CandleStand,
  CurtainedBed,
  Floor,
  H,
  NightWindow,
  OpenDoor,
  W,
  bedMarks,
  candleGlow,
  candleLight,
  chamberMarks,
  type Bed,
} from './bedchamber'

/**
 * Act 5, Scene 2: "Othello's last words", the seventeenth and last moment in
 * the guide's timeline, at its quotation: "Speak of me as I am. Nothing
 * extenuate, / Nor set down aught in malice." Every detail is from the scene,
 * as the held edition prints it (src/data/full-texts/othello.ts, Project
 * Gutenberg #1531):
 *
 * - It is the room of "Emilia speaks" (./emilia-speaks.tsx) and of
 *   ./bedchamber.tsx, the same night: the candle still burning on its stand,
 *   the stars in the window, the door open.
 * - "Look on the tragic loading of this bed ... Let it be hid." The bed keeps
 *   its curtains drawn, as Othello drew them ("let me the curtains draw"): the
 *   bodies on it, Desdemona's and Emilia's ("O, lay me by my mistress' side"),
 *   are left to the words.
 * - OTHELLO: "Soft you; a word or two before you go ... I pray you, in your
 *   letters, / When you shall these unlucky deeds relate, / Speak of me as I
 *   am." The moment is his, so he stands nearest to us and larger than the
 *   rest, black against the candle's light, his head up, one hand on his
 *   breast and the other held out to Lodovico and the letters. "Of one whose
 *   subdu'd eyes, / Albeit unused to the melting mood, / Drop tears": so a
 *   tear is cut in paper on his cheek below his eye. He is unarmed:
 *   "Wrench his sword from him."
 * - LODOVICO: "Here is a letter / Found in the pocket of the slain Roderigo,
 *   / And here another." So he faces Othello holding out two open letters,
 *   their writing cut in ink: the letters that prove the plot, and the
 *   letters Othello asks him to write.
 * - "Cassio carried in a chair." CASSIO: "Dear general, I never gave you
 *   cause." So Cassio sits in the chair he was carried in, its carrying pole
 *   along its side, and holds out a hand to Othello. His wounded leg ("my leg
 *   is cut in two", 5.1) is not drawn, and nor is any bandage.
 * - "Officers with Iago prisoner." IAGO: "Demand me nothing. What you know,
 *   you know. / From this time forth I never will speak word." So he stands in
 *   the doorway with his arms bound behind his back and his mouth shut.
 *   Montano, who went after him ("I'll after that same villain"), holds him
 *   by the shoulder; the officers are left out, for room.
 * - GRATIANO, Desdemona's uncle, who stayed to "keep the house", stands
 *   behind Cassio's chair.
 *
 * SAFEGUARDING. Othello's death ("And smote him, thus. [Stabs himself.]") is
 * off the page, and no blade is drawn or worn by anyone (`sword: false`). The
 * wound he gave Iago ("I bleed, sir, but not kill'd") is not drawn. The only
 * red is the candle's flame.
 *
 * The people are cut from ./people.tsx and nothing is taken from a film or
 * stage production. Seeds: 1701 (the wall and the floor), 1702 (the
 * curtains' folds), 1703 (the candle's light).
 */

/** The room as ./bedchamber.tsx sets it, so that it is the same room in every panel there. */
const FLAME: Pt = [372, 150]
const BED: Bed = { x0: 34, x1: 246, foot: 300, top: 44 }
const DOOR = { x0: 708, x1: 778, top: 120 }

type Marks = {
  room: ReturnType<typeof chamberMarks>
  bed: ReturnType<typeof bedMarks>
  glow: string
}
let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const light = candleLight(FLAME)
  // nothing is cut on the wall behind the bed or the door
  const hidden = (x: number, y: number) =>
    (x > BED.x0 - 20 && x < BED.x1 + 14 && y > BED.top - 4) ||
    (x > DOOR.x0 - 14 && x < DOOR.x1 + 84 && y > DOOR.top - 12)
  cached = {
    room: chamberMarks(1701, light, hidden),
    bed: bedMarks(1702, BED, light),
    glow: candleGlow(1703, FLAME),
  }
  return cached
}

/** Arms hanging at rest, in the kit's figure frame. */
const REST_FAR: Pt[] = [
  [-4, -128],
  [-6, -104],
  [-4, -80],
]
const REST_NEAR: Pt[] = [
  [5, -128],
  [8, -104],
  [9, -80],
]

/** Othello: upright in the candle's light, one hand on his breast, the other held out to them. */
const OTHELLO: Pose = {
  look: 'othello',
  head: { rot: -3 },
  sword: false,
  far: {
    pts: [
      [-4, -128],
      [12, -106],
      [32, -106],
    ],
    hand: 'open',
    deg: -4,
    thumb: -1,
  },
  near: {
    pts: [
      [5, -128],
      [15, -100],
      [13, -114],
    ],
    hand: 'open',
    deg: -94,
    size: 14,
    spread: 10,
    thumb: 1,
  },
}
/** "subdu'd eyes ... Drop tears": a tear below his eye, cut in paper, in the frame of his head. */
const TEAR =
  'M12.6 -0.6C13.8 1.8 14.6 3.6 13.6 4.8C12.6 5.6 11.2 4.8 11.4 3.6C11.6 2.4 12.2 1 12.6 -0.6Z'

/** Lodovico, facing Othello, a letter held out in one hand and another at his breast. */
const LODOVICO: Pose = {
  look: 'lodovico',
  sword: false,
  far: {
    pts: [
      [-4, -128],
      [2, -106],
      [14, -110],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [5, -128],
      [20, -112],
      [34, -118],
    ],
    hand: 'mitt',
  },
}
/** An open letter, its lines of writing cut in ink: in the frame of the hand that holds it. */
function Letter({ at, rot = 0 }: { at: Pt; rot?: number }) {
  return (
    <g transform={`translate(${n(at[0])} ${n(at[1])}) rotate(${rot})`}>
      <path d="M-7 -21H8V1H-7Z" fill={PAPER} stroke={INK} strokeWidth={1.1} />
      <path
        d="M-4.4 -16.6H5.4M-4.4 -12.6H5.4M-4.4 -8.6H5.4M-4.4 -4.6H2"
        stroke={INK}
        strokeWidth={0.8}
      />
    </g>
  )
}

/**
 * Where Cassio sits: the floor under his chair. His figure is the kit's,
 * set SIT units lower so that its hip comes to the seat, with its thighs laid
 * along the seat and its shins down to the floor (`legs`); the kit puts a
 * figure's shoes at its own floor, so the figure is cut off at the real floor
 * and his shoes are set on it here.
 */
const CASSIO_AT: Pt = [640, 312]
const SIT = 30
/** Cassio in his chair, his near hand held out to Othello: "Dear general, I never gave you cause." */
const CASSIO: Pose = {
  look: 'cassio',
  sword: false,
  legs: {
    far: [
      [-3, -70],
      [28, -67],
      [28, -30],
    ],
    near: [
      [3, -70],
      [33, -66],
      [33, -30],
    ],
  },
  far: { pts: REST_FAR, hand: 'mitt' },
  near: {
    pts: [
      [5, -128],
      [20, -114],
      [36, -122],
    ],
    hand: 'open',
    deg: -16,
    thumb: -1,
  },
}

/**
 * The chair Cassio was carried in, seen from the side and facing left: its
 * back rising behind him, the seat, the legs and a stretcher. `front` and
 * `back` are the seat's two edges.
 */
const CHAIR = { front: 600, back: 662, seat: CASSIO_AT[1] - 40, floor: CASSIO_AT[1] }
function Chair() {
  const { front, back, seat, floor } = CHAIR
  const legs = `M${front + 3} ${floor}V${seat}M${back - 3} ${floor}V${seat}`
  return (
    <g strokeLinejoin="round">
      <path
        d={`M${back - 7} ${seat + 2}V${seat - 88}H${back + 2}V${seat + 2}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <circle cx={back - 2.5} cy={seat - 93} r={5} fill={INK} stroke={PAPER} strokeWidth={1.4} />
      <path d={legs} stroke={PAPER} strokeWidth={7.6} fill="none" />
      <path d={legs} stroke={INK} strokeWidth={4.6} fill="none" />
      <path
        d={`M${front - 3} ${seat}H${back + 3}V${seat + 8}H${front - 3}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={`M${front + 3} ${floor - 12}H${back - 3}`} stroke={PAPER} strokeWidth={4.8} />
      <path d={`M${front + 3} ${floor - 12}H${back - 3}`} stroke={INK} strokeWidth={2.6} />
    </g>
  )
}
/**
 * The near carrying pole, through iron loops on the legs below the seat and
 * out beyond the chair at both ends.
 */
function ChairPole() {
  const { front, back, seat } = CHAIR
  const y = seat + 18
  const pole = `M${front - 46} ${y}H${back + 46}`
  return (
    <g>
      <path d={pole} stroke={PAPER} strokeWidth={9} fill="none" strokeLinecap="round" />
      <path d={pole} stroke={INK} strokeWidth={6} fill="none" strokeLinecap="round" />
      <path d={gouge(front - 38, y - 0.6, back + 38, y - 0.6, 0.7)} fill={PAPER} />
      <path
        d={`M${front - 1} ${y - 6}h8v12h-8ZM${back - 7} ${y - 6}h8v12h-8Z`}
        fill="none"
        stroke={PAPER}
        strokeWidth={1.6}
      />
    </g>
  )
}

/** Gratiano, behind the chair. */
const GRATIANO: Pose = {
  look: 'gratiano',
  head: { rot: 3 },
  far: { pts: REST_FAR, hand: 'mitt' },
  near: { pts: REST_NEAR, hand: 'mitt' },
}
/**
 * Iago, a prisoner, his arms bound behind his back. Only the arm behind him
 * is drawn, its elbow and wrist showing past his back with the cord round
 * the wrist; the near arm, drawn over the body, read as a strap across his
 * chest.
 */
const IAGO: Pose = {
  look: 'iago',
  sword: false,
  far: {
    pts: [
      [-4, -128],
      [-13, -108],
      [-19, -95],
    ],
    hand: 'none',
  },
}
const IAGO_CORD = 'M-23.4 -95a4.4 3.2 0 1 0 8.8 0a4.4 3.2 0 1 0 -8.8 0Z'
/** Montano, who went after Iago and has brought him back, his hand on his shoulder. */
const MONTANO: Pose = {
  look: 'montano',
  sword: false,
  far: { pts: REST_FAR, hand: 'mitt' },
  near: {
    pts: [
      [5, -128],
      [20, -118],
      [36, -128],
    ],
    hand: 'open',
    deg: 18,
    size: 14,
    spread: 12,
    thumb: -1,
  },
}

function OthellosLastWords({ uid }: ArtProps) {
  const m = marks()
  const seated = `${uid}-seated`
  return (
    <>
      <defs>
        {/* everything above the floor: Cassio's figure is cut off here, and his shoes set on it */}
        <clipPath id={seated}>
          <rect x={0} y={0} width={W} height={CASSIO_AT[1] - 1} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [430, 200], push: 1.03 })}>
        {/* the same chamber, the same night: the wall lit by the candle, the stars in the window */}
        <path d={m.room.wall} fill={PAPER} />
        <path d={m.glow} fill={PAPER} />
        <NightWindow x={486} top={56} w={30} h={92} />
        <OpenDoor x0={DOOR.x0} x1={DOOR.x1} top={DOOR.top} />
        <Floor marks={m.room} />
        {/* "Let it be hid": the bed, its curtains drawn */}
        <CurtainedBed b={BED} marks={m.bed} />
        <CandleStand flame={FLAME} floor={306} />

        {/* behind: Gratiano; Iago held at the door by Montano */}
        <Person pose={GRATIANO} at={[700, 300]} scale={0.92} flip />
        <Person pose={MONTANO} at={[820, 306]} scale={0.96} flip />
        <Person pose={IAGO} at={[768, 310]} scale={1} flip>
          <path d={IAGO_CORD} fill="none" stroke={PAPER} strokeWidth={1.6} />
        </Person>

        {/* "Cassio carried in a chair" */}
        <Chair />
        <g clipPath={`url(#${seated})`}>
          <Person pose={CASSIO} at={[CASSIO_AT[0], CASSIO_AT[1] + SIT]} flip />
        </g>
        <g fill={INK} stroke={PAPER} strokeWidth={1.6} strokeLinejoin="round">
          <path d={shoe([CASSIO_AT[0] - 28, CASSIO_AT[1]], -1).d} />
          <path d={shoe([CASSIO_AT[0] - 33, CASSIO_AT[1]], -1).d} />
        </g>
        <ChairPole />

        {/* "Here is a letter ... And here another." */}
        <Person pose={LODOVICO} at={[538, 314]} scale={1} flip>
          <Letter at={[38, -124]} rot={-6} />
          <Letter at={[16, -112]} rot={8} />
        </Person>

        {/* "Speak of me as I am." */}
        <Person pose={OTHELLO} at={[414, 330]} scale={1.26}>
          <path d={TEAR} transform="translate(3 -160) rotate(-3)" fill={PAPER} />
        </Person>
      </g>
    </>
  )
}

export const othellosLastWords: LinocutArt = { width: W, height: H, Draw: OthellosLastWords }
