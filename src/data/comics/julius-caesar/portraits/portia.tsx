import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  EarCut,
  Hand,
  handPoint,
  combedFromCrown,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  shoulders,
  spline,
  WOMAN_EAR,
  WOMAN_EYE,
  WOMAN_HEAD,
  WomanFace,
  WomanNeckShadow,
  type Digit,
  type SP,
} from './common'

/**
 * Portia, Brutus's wife, from her own words, the only description of her
 * the play gives:
 *
 *   "upon my knees, I charm you, by my once commended beauty" (Act 2,
 *   Scene 1)
 *   "I grant I am a woman; but withal A woman well reputed, Cato's daughter."
 *   (Act 2, Scene 1)
 *   "O constancy, be strong upon my side, Set a huge mountain 'tween my heart
 *   and tongue!" (Act 2, Scene 4)
 *
 * So: a woman whose beauty was praised, her head held up as Cato's daughter,
 * and one hand pressed to her breast, keeping the secret she fought for. She
 * looks ahead, steady, her mouth closed.
 *
 * She is drawn as the figure kit draws her (../panels/people.tsx): every
 * woman's head in these portraits (WOMAN_HEAD), bareheaded, as she is at
 * home, her dark hair drawn back from the brow and bound in a knot at the
 * nape (PORTIA_HAIR); the stola, the long gown of a Roman wife. The play
 * describes none of it. The light is the "raw cold morning" (Brutus, 2.1) in
 * which she comes out to him.
 *
 * NEVER DRAWN. Her "voluntary wound Here, in the thigh" (2.1) is left to the
 * words: never drawn, bandaged or pointed at. Nothing of her death is drawn
 * or suggested, and there is no fire anywhere in the plate. There is no red
 * in it.
 *
 * Seeds: 5101 and 5102 (the figure's marks), 5110 (the ground).
 */

/** Dark hair drawn back from the brow over the ear to a knot at the nape. */
const HAIR_PTS: SP[] = [
  [160, 61, 1],
  [150, 55],
  [137, 57],
  [125, 64],
  [117, 78],
  [112, 94],
  [104, 103],
  [92, 110],
  [82, 124],
  [76, 140],
  [70, 154],
  [62, 166, 1],
  [46, 170],
  [32, 160],
  [26, 142],
  [32, 124],
  [44, 112],
  [47, 96],
  [58, 70],
  [83, 47],
  [114, 37],
  [141, 39],
  [155, 50],
]
const HAIR = spline(HAIR_PTS)
/** The knot at the nape. */
const KNOT = spline([
  [48, 118],
  [66, 126],
  [72, 146],
  [62, 166],
  [42, 170],
  [26, 156],
  [28, 132],
])

/** The stola over the shoulders, its neck cut round. */
const STOLA = shoulders(0.96, 8)
const NECKLINE = 'M84 222C104 236 132 236 152 222'

/** Her sleeve, from the foot of the frame to the wrist on her breast. */
const SLEEVE = spline([
  [40, 344, 1],
  [72, 324],
  [102, 306],
  [116, 300, 1],
  [134, 312],
  [130, 330],
  [106, 344, 1],
])
// The hand pressed to her breast, the fingers apart: in the hand's own frame,
// the wrist at the origin and the fingers up.
const HAND_AT: Pt = [124, 304]
const HAND_ROT = 26
const HAND_S = 0.78
const PALM = spline([
  [-13, 2],
  [-15, -14],
  [-15, -30],
  [-11, -42],
  [1, -46],
  [14, -44],
  [20, -36],
  [20, -16],
  [15, 0],
])
const DIGITS: Digit[] = [
  { from: [15.5, -36], to: [21, -56], w: 7 },
  { from: [8.5, -40], to: [12, -66], w: 7.6 },
  { from: [0.5, -42], to: [1, -70], w: 7.8 },
  { from: [-7.5, -40], to: [-11, -63], w: 7.6 },
  { from: [-12, -12], to: [-25, -32], w: 8.6 },
]
const HAND_LINES = 'M-12 -59L-9.6 -60M-0.4 -66L2.4 -66M10.6 -62L13.4 -62.5M19 -53L21.4 -53.5'
const inHand = handPoint(HAND_AT, HAND_ROT, HAND_S)
const HAND_T = `translate(${HAND_AT[0]} ${HAND_AT[1]}) rotate(${HAND_ROT}) scale(${HAND_S})`

type Marks = { strands: string; knot: string; folds: string }

const marks = once((): Marks => {
  // The hair combed back: long paper strands from the hairline to the knot.
  // Strokes lying back from the brow, so the hair reads as drawn back to the
  // knot: each points away from a spot in front of the face.
  const strands = combedFromCrown(5101, HAIR_PTS, [214, 70], 150, [8, 15], [0.6, 1.05], (x) =>
    clamp(0.3 + (x - 50) / 100),
  )
  // The knot: strands wound round it.
  const r = rng(5102)
  let knot = ''
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * Math.PI * 2 + between(r, -0.2, 0.2)
    const x = 48 + Math.cos(a) * 9
    const y = 146 + Math.sin(a) * 11
    knot += gouge(x, y, x + Math.cos(a + 1.7) * 14, y + Math.sin(a + 1.7) * 14, 1.1, 2)
  }
  let folds = ''
  for (let i = 0; i < 7; i++) {
    const x = between(r, 20, 220)
    folds += gouge(x, between(r, 262, 284), x + between(r, -8, 8), 336, between(r, 0.9, 1.5), 1)
  }
  return { strands, knot, folds }
})

/** Portia, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function PortiaFigure({ uid }: { uid: string }) {
  const m = marks()
  return (
    <g>
      <defs>
        <clipPath id={`${uid}-po-hair`}>
          <path d={HAIR} />
        </clipPath>
      </defs>
      <path d={WOMAN_HEAD} fill={PAPER} />
      <WomanNeckShadow id={`${uid}-po`} />
      <path d={STOLA} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.folds} fill={PAPER} />
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${uid}-po-hair)`}>
        <path d={m.strands} fill={PAPER} />
      </g>
      <path d={KNOT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.knot} fill={PAPER} />
      <EarCut {...WOMAN_EAR} />
      <WomanFace eye="open" />
      <path d={NECKLINE} fill="none" stroke={PAPER} strokeWidth={1.6} strokeLinecap="round" />
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <Hand transform={HAND_T} palm={PALM} digits={DIGITS} lines={HAND_LINES} />
    </g>
  )
}

/** A thick ink halo round head and shoulders. */
function PortiaKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={WOMAN_HEAD} />
      <path d={HAIR} />
      <path d={STOLA} />
    </g>
  )
}

const P = placing(30, 4, 0.98)

const ground = once(() =>
  // The raw cold morning: grey light low ahead of her, to the right.
  portraitGround('jc-portia', 5110, (x, y) =>
    clamp(0.06 + ((x - 90) / 260) * 0.8 + ((y - 60) / PH) * 0.2),
  ),
)

function PortiaPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <PortiaKnockout />
        <PortiaFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const portiaPortrait: LinocutArt = { width: PW, height: PH, Draw: PortiaPortrait }

const FACE_AT = P.to(WOMAN_EYE[0] - 6, WOMAN_EYE[1] + 26)
const HEAD_AT = P.to(120, 50)
const HAND_MARK = P.to(...inHand(2, -40))

export const portia: Portrait = {
  name: 'Portia',
  art: portiaPortrait,
  alt: 'A linocut portrait of Portia in profile, facing right, in the grey light of early morning: a woman with her dark hair drawn back from her brow and bound in a knot at the nape, her eye open and steady and her mouth closed, wearing a dark gown with a round neck. She presses one hand to her breast, its fingers apart. Three numbered red markers point to her face, her head and the hand at her breast.',
  describedBy: [
    // From below and behind the jaw, so the line never crosses her mouth or chin.
    { phrase: 'my once commended beauty', at: [FACE_AT[0] - 54, FACE_AT[1] + 78], to: FACE_AT },
    { phrase: 'A woman well reputed, Cato’s daughter', at: [HEAD_AT[0] + 22, 24], to: HEAD_AT },
    {
      phrase: 'O constancy, be strong upon my side',
      at: [HAND_MARK[0] + 66, HAND_MARK[1] + 22],
      to: HAND_MARK,
    },
  ],
  where: 'Act 2, Scenes 1 and 4',
  note: 'Portia claims her husband’s secret as Cato’s daughter and Brutus’s wife, and wins it. By Act 2, Scene 4 she can hardly hold it: she begs her own constancy to set “a huge mountain” between her heart and her tongue.',
  artNote:
    'Her “once commended beauty” is her own phrase and all the play says of her looks. She is bareheaded at home, her hair bound at the nape, as in the panels. Nothing of her wound or her death is drawn.',
}
