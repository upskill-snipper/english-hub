import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, n, type Pt } from '@/components/comics/linocut/carve'

import {
  BOUND_HAIR,
  BOUND_KNOT,
  boundHairCuts,
  capsule,
  GOWN,
  GOWN_NECK,
  gownFolds,
  GRIP_AT,
  GRIP_DIGITS,
  GRIP_LINES,
  GRIP_PALM,
  Hand,
  handPoint,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  WOMAN_EAR,
  WOMAN_HEAD,
  WomanFace,
  WomanNeckShadow,
} from './common'

/**
 * Charmian, Cleopatra's closest companion, from the scene where we first meet
 * her and one command of her mistress's:
 *
 *   SOOTHSAYER: "You shall be yet far fairer than you are." CHARMIAN: "He
 *   means in flesh." IRAS: "No, you shall paint when you are old." CHARMIAN:
 *   "Wrinkles forbid!" (Act 1, Scene 2)
 *   CLEOPATRA, resolved to write to Antony every day he is away: "Ink and
 *   paper, Charmian." (Act 1, Scene 5)
 *
 * So: a young woman with a smooth face, her mouth closed, her eye open and
 * level, and in her hand the paper her queen has sent her for, rolled, to
 * write to Antony. The play says nothing else of her looks: the soothsayer's
 * "fairer" and her own "Wrinkles forbid!" are the nearest it comes, and the
 * card says so.
 *
 * She is drawn as the figure kit draws her (../panels/people.tsx: 'charmian'):
 * every woman's head (WOMAN_HEAD), her dark hair drawn back and bound in a knot
 * at the nape (./common.tsx: BOUND_HAIR, the kit's PORTIA_HAIR), invented only
 * to tell her from Iras and from Cleopatra's long hair, in a plain long gown,
 * and no mantle, which is the queen's. Her hand is closed round the roll, each
 * finger cut apart from the next. Nothing of the last scene of the play is
 * drawn or pointed at, and the soothsayer's other words to her are left to
 * the play. There is no red in this plate but the markers.
 *
 * MARKERS. The soothsayer's words and her own sit on her face with no line, as
 * the pilot's "shrivelled his cheek" sits on Scrooge's: "fairer" on her cheek,
 * "Wrinkles forbid!" on her smooth forehead. "Ink and paper" comes to the roll
 * from in front, at its height, far below the face.
 *
 * Seeds: 7101 and 7102 (the figure's marks), 7110 (the ground).
 */

/** The roll of paper, held slanting across her chest. */
const ROLL_A: Pt = [150, 318]
const ROLL_B: Pt = [222, 262]
const ROLL = capsule(ROLL_A[0], ROLL_A[1], ROLL_B[0], ROLL_B[1], 15)
/** The spiral of the roll's end, and a turn of it, cut in ink. */
const ROLL_END = (() => {
  const a = Math.atan2(ROLL_B[1] - ROLL_A[1], ROLL_B[0] - ROLL_A[0])
  const ux = Math.cos(a)
  const uy = Math.sin(a)
  const nx = -uy * 7.5
  const ny = ux * 7.5
  // the near end, a little in from the tip, as an ellipse seen edge-on
  const cx = ROLL_B[0] - ux * 2
  const cy = ROLL_B[1] - uy * 2
  const ring = `M${n(cx - nx)} ${n(cy - ny)}Q${n(cx + ux * 5)} ${n(cy + uy * 5)} ${n(cx + nx)} ${n(cy + ny)}`
  // the edge of the sheet where it wraps, running along the roll
  const sx = ROLL_A[0] + (ROLL_B[0] - ROLL_A[0]) * 0.55
  const sy = ROLL_A[1] + (ROLL_B[1] - ROLL_A[1]) * 0.55
  const seam = `M${n(sx + nx * 0.4)} ${n(sy + ny * 0.4)}L${n(ROLL_B[0] - ux * 9 + nx * 0.4)} ${n(ROLL_B[1] - uy * 9 + ny * 0.4)}`
  return ring + seam
})()

/**
 * Her near hand closed round the roll, the back of the hand towards us, the
 * four fingers across it and the thumb over the first of them: the Othello
 * portraits' grip (GRIP_PALM), turned so the roll runs through it.
 */
const ROLL_ANGLE = (Math.atan2(ROLL_B[1] - ROLL_A[1], ROLL_B[0] - ROLL_A[0]) * 180) / Math.PI
const HAND_ROT = ROLL_ANGLE + 90
const HAND_S = 0.86
const GRIP_ON: Pt = [
  ROLL_A[0] + (ROLL_B[0] - ROLL_A[0]) * 0.32,
  ROLL_A[1] + (ROLL_B[1] - ROLL_A[1]) * 0.32,
]
const HAND_AT: Pt = (() => {
  const a = (HAND_ROT * Math.PI) / 180
  const gx = GRIP_AT[0] * HAND_S
  const gy = GRIP_AT[1] * HAND_S
  return [
    GRIP_ON[0] - (gx * Math.cos(a) - gy * Math.sin(a)),
    GRIP_ON[1] - (gx * Math.sin(a) + gy * Math.cos(a)),
  ]
})()
const HAND_T = `translate(${n(HAND_AT[0])} ${n(HAND_AT[1])}) rotate(${n(HAND_ROT)}) scale(${HAND_S})`
const inHand = handPoint(HAND_AT, HAND_ROT, HAND_S)

/** Her forearm in the gown's sleeve, from the foot of the frame to the wrist. */
const SLEEVE = (() => {
  const [wx, wy] = inHand(-2, 0)
  return spline([
    [86, 344, 1],
    [106, 322],
    [wx - 4, wy + 10],
    [wx + 2, wy - 12, 1],
    [wx + 16, wy + 4],
    [132, 344, 1],
  ])
})()

type Marks = { hair: string; knot: string; folds: string }

const marks = once((): Marks => {
  const { strands, knot } = boundHairCuts(7101)
  return { hair: strands, knot, folds: gownFolds(7102) }
})

/** Charmian, head and shoulders, a roll of paper in her hand, facing right in the 0..240 by 0..332 frame. */
export function CharmianFigure({ uid }: { uid: string }) {
  const m = marks()
  const hairClip = `${uid}-ch-hair`
  return (
    <g>
      <defs>
        <clipPath id={hairClip}>
          <path d={BOUND_HAIR} />
          <path d={BOUND_KNOT} />
        </clipPath>
      </defs>
      <path d={WOMAN_HEAD} fill={PAPER} />
      <WomanNeckShadow id={`${uid}-ch`} />
      <path d={GOWN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.folds} fill={PAPER} />
      <path d={GOWN_NECK} fill="none" stroke={PAPER} strokeWidth={1.8} strokeLinecap="round" />
      {/* her hair, drawn back and bound in a knot at the nape */}
      <g fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round">
        <path d={BOUND_KNOT} />
        <path d={BOUND_HAIR} />
      </g>
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.hair} fill={PAPER} />
        <path d={m.knot} fill={PAPER} />
      </g>
      <path d={WOMAN_EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.4} />
      <path d={WOMAN_EAR.curl} fill="none" stroke={INK} strokeWidth={1.4} strokeLinecap="round" />
      <WomanFace eye="open" />
      {/* the roll of paper, and her hand closed round it */}
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={ROLL} fill={INK} stroke={INK} strokeWidth={6} />
      <path d={ROLL} fill={PAPER} stroke={INK} strokeWidth={1.6} />
      <path d={ROLL_END} fill="none" stroke={INK} strokeWidth={1.1} strokeLinecap="round" />
      <Hand transform={HAND_T} palm={GRIP_PALM} digits={GRIP_DIGITS} lines={GRIP_LINES} />
    </g>
  )
}

/** A thick ink halo round head, hair and shoulders. */
function CharmianKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={WOMAN_HEAD} />
      <path d={BOUND_HAIR} />
      <path d={BOUND_KNOT} />
      <path d={GOWN} />
    </g>
  )
}

const P = placing(36, 0, 0.96)

const ground = once(() =>
  // A room of the palace at Alexandria by day, the light ahead of her.
  portraitGround('ac-charmian', 7110, (x, y) =>
    clamp(0.12 + ((x - 50) / 270) * 0.86 - (y / PH) * 0.12),
  ),
)

function CharmianPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <CharmianKnockout />
        <CharmianFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const charmianPortrait: LinocutArt = { width: PW, height: PH, Draw: CharmianPortrait }

const CHEEK_AT = P.to(132, 132)
const BROW_AT = P.to(148, 70)
const ROLL_MARK = P.to(ROLL_B[0] - 12, ROLL_B[1] + 9)

export const charmian: Portrait = {
  name: 'Charmian',
  art: charmianPortrait,
  alt: 'A linocut portrait of Charmian in profile, facing right, head and shoulders: a young woman with a smooth face, her eye open and level and her mouth closed, her dark hair drawn back from her brow and bound in a knot at the nape of her neck. She wears a plain dark gown, round at the neck, and holds a pale roll of paper slanting across her chest, her hand closed round it with its fingers apart. Three numbered red markers sit on her cheek and her forehead and point to the roll of paper.',
  describedBy: [
    { phrase: 'You shall be yet far fairer than you are.', at: CHEEK_AT },
    { phrase: 'Wrinkles forbid!', at: BROW_AT },
    {
      phrase: 'Ink and paper, Charmian.',
      at: [ROLL_MARK[0] + 34, ROLL_MARK[1] + 22],
      to: ROLL_MARK,
    },
  ],
  where: 'Act 1, Scenes 2 and 5',
  note: 'Charmian is quick, funny and fiercely loyal. She laughs with the soothsayer about her fortune, advises her mistress how to keep Antony, and is sent for ink and paper so that Cleopatra can write to him every day he is away.',
  artNote:
    'The play does not describe her looks: the soothsayer’s promise and her own joke are as near as it comes. Her bound hair and plain gown are how the panels tell her from Iras and from the queen.',
}
