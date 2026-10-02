import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, gouge, ribbon, type Pt } from '@/components/comics/linocut/carve'

import { HandkerchiefHanging } from '../panels/handkerchief'
import {
  folds,
  Hand,
  handPoint,
  once,
  PH,
  PINCH_AT,
  PINCH_DIGITS,
  PINCH_LINES,
  PINCH_PALM,
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
 * Bianca, from what the play gives her, and from nowhere else:
 *
 *   "How is it with you, my most fair Bianca?" (Cassio, Act 3, Scene 4)
 *   "Sweet Bianca, [Giving her Desdemona's handkerchief.] Take me this work
 *   out." (Cassio, Act 3, Scene 4)
 *   "He supp'd at my house, but I therefore shake not." (Bianca, to Iago,
 *   Act 5, Scene 1)
 *
 * So: a young woman holding up the handkerchief Cassio has given her to
 * copy, looking down at its work, the strawberries she is asked to take out,
 * and suspecting it is "some token from a newer friend". Her hand is steady.
 * The men round her call her names; the print never repeats them, and
 * nothing about her is drawn to demean her.
 *
 * She is drawn as the figure kit draws her (../panels/people.tsx): every
 * woman's head (WOMAN_HEAD), lit; her hair bound up in a kerchief cut in
 * paper and tied at the back of her head (KERCHIEF); a plain gown. The
 * handkerchief is the kit's own (../panels/handkerchief.tsx), the same cloth
 * Desdemona's portrait holds, and her hand holds it by the corner with the
 * shared pinch in ./common.tsx, the fingers cut apart. The red is the
 * strawberries' alone.
 *
 * She faces left, so the figure is drawn facing right and flipped.
 *
 * Seeds: 9801 (the gown's folds), 9810 (the ground).
 */

/** The kerchief over her hair, from the brow over the crown, tied at the back of her head. */
const KERCHIEF = spline([
  [152, 60, 1],
  [148, 45],
  [132, 33],
  [108, 29],
  [82, 35],
  [60, 49],
  [46, 72],
  [41, 100],
  [44, 126],
  [54, 144, 1],
  [70, 130],
  [86, 112],
  [104, 98],
  [124, 82],
  [140, 69],
])
/** Its knot at the back of her head, and the two ends hanging from it. */
const KNOT = 'M44 146a9 8 0 1 0 18 0a9 8 0 1 0 -18 0Z'
const ENDS =
  ribbon(
    [
      [50, 150],
      [42, 164],
      [36, 182],
      [34, 196],
    ],
    10,
    0.4,
  ) +
  ribbon(
    [
      [56, 152],
      [56, 168],
      [52, 186],
    ],
    9,
    0.4,
  )
/** A little of her dark hair, showing at the temple below the kerchief. */
const TEMPLE = spline([
  [141, 70, 1],
  [130, 86],
  [123, 102],
  [119, 113, 1],
  [111, 104],
  [104, 98, 1],
])

/** Her shoulders in a plain dark gown, and the linen collar at its neck. */
const GOWN = spline([
  [-4, 336, 1],
  [2, 298],
  [20, 266],
  [52, 242],
  [84, 230],
  [114, 234],
  [142, 228],
  [168, 240],
  [190, 264],
  [204, 298],
  [210, 336, 1],
])
const COLLAR = spline([
  [80, 224, 1],
  [112, 232],
  [148, 222, 1],
  [158, 236],
  [114, 248],
  [74, 240, 1],
])

/** Her near forearm, raised in its sleeve from below the block to the wrist. */
const SLEEVE = spline([
  [104, 340, 1],
  [118, 302],
  [140, 262],
  [160, 228],
  [168, 214, 1],
  [188, 226, 1],
  [176, 254],
  [158, 296],
  [144, 340, 1],
])
const CUFF = spline([
  [164, 214, 1],
  [175, 204],
  [189, 210],
  [188, 230, 1],
  [180, 226],
  [170, 222],
])

// Her hand raised before her, holding up the cloth by its corner to look at
// its work: the shared pinch, the fingers cut apart, steady.
const HAND_AT: Pt = [180, 216]
const HAND_ROT = -2
const HAND_S = 1.65
const inHand = handPoint(HAND_AT, HAND_ROT, HAND_S)
const HAND_T = `translate(${HAND_AT[0]} ${HAND_AT[1]}) rotate(${HAND_ROT}) scale(${HAND_S})`
const PINCH = inHand(...PINCH_AT)

const marks = once(() => {
  // Folds in the kerchief, cut in ink: drawn from the brow back to the knot.
  const kerchief =
    'M146 54Q100 46 60 124M140 64Q104 66 64 132M128 40Q88 40 54 108M150 50Q120 30 74 48'
  const gown = folds(9801, [14, 150], [262, 280], 6)
  const sleeve = gouge(134, 290, 160, 244, 1, -1) + gouge(124, 334, 144, 294, 0.9, -0.8)
  return { kerchief, gown, sleeve }
})

/** Bianca, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function BiancaFigure({ uid }: { uid: string }) {
  const m = marks()
  const kerchiefClip = `${uid}-bia-kerchief`
  return (
    <g>
      <defs>
        <clipPath id={kerchiefClip}>
          <path d={KERCHIEF} />
        </clipPath>
      </defs>
      <path d={GOWN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.gown} fill={PAPER} />
      <path d={WOMAN_HEAD} fill={PAPER} />
      <WomanNeckShadow id={`${uid}-bia`} />
      <path d={COLLAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path d={TEMPLE} fill={INK} />
      <path d={WOMAN_EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.3} />
      <path d={WOMAN_EAR.curl} fill="none" stroke={INK} strokeWidth={1.3} />
      {/* the kerchief over her hair, tied at the back of her head */}
      <path d={ENDS} fill={PAPER} stroke={INK} strokeWidth={1.2} />
      <path d={KERCHIEF} fill={PAPER} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
      <g clipPath={`url(#${kerchiefClip})`}>
        <path d={m.kerchief} fill="none" stroke={INK} strokeWidth={1} strokeLinecap="round" />
      </g>
      <path d={KNOT} fill={PAPER} stroke={INK} strokeWidth={1.3} />
      <path d="M48 145Q53 141 58 146" fill="none" stroke={INK} strokeWidth={0.9} />
      {/* her eyes lowered to the work in her hand */}
      <WomanFace eye="down" />
      {/* "Take me this work out": the handkerchief, held up by its corner */}
      <HandkerchiefHanging at={PINCH} len={80} swing={-4} s={1.85} />
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.sleeve} fill={PAPER} />
      <path d={CUFF} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <Hand
        transform={HAND_T}
        palm={PINCH_PALM}
        digits={PINCH_DIGITS}
        lines={PINCH_LINES}
        halo={3.4}
      />
    </g>
  )
}

/** A thick ink halo round kerchief, head and shoulders. */
function BiancaKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={KERCHIEF} />
      <path d={ENDS} />
      <path d={WOMAN_HEAD} />
      <path d={GOWN} />
    </g>
  )
}

const P = placing(46, 4, 0.94, true)

const ground = once(() =>
  // Before the castle by day: the light ahead of her, to the left.
  portraitGround('othello-bianca', 9810, (x, y) =>
    clamp(0.16 + ((PW - x - 40) / 270) * 0.86 - (y / PH) * 0.1),
  ),
)

function BiancaPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <BiancaKnockout />
        <BiancaFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const biancaPortrait: LinocutArt = { width: PW, height: PH, Draw: BiancaPortrait }

const FACE_AT = P.to(146, 118)
const BERRY_AT = P.to(PINCH[0] + 80 * 0.62 * 0.24 - 4 * 0.8, PINCH[1] + 80 * 0.7)
const HAND_MARK = P.to(...inHand(10, 0))

export const bianca: Portrait = {
  name: 'Bianca',
  art: biancaPortrait,
  alt: 'A linocut portrait of Bianca in profile, facing left, head and shoulders: a young woman with her face lit and pale and her eyes lowered to what she holds. Her hair is bound up in a pale kerchief tied at the back of her head, a little dark hair showing at her temple, and she wears a plain dark gown with a pale linen collar. Her hand is raised before her, its fingers apart and steady, holding up by one corner a small white handkerchief worked with strawberries printed in red, each with its cap of leaves. Three numbered red markers point to her face, a strawberry on the handkerchief and her hand.',
  describedBy: [
    { phrase: 'my most fair Bianca', at: [FACE_AT[0] - 34, FACE_AT[1] - 60], to: FACE_AT },
    { phrase: 'Take me this work out.', at: [BERRY_AT[0] - 30, BERRY_AT[1] + 30], to: BERRY_AT },
    {
      phrase: 'but I therefore shake not',
      at: [HAND_MARK[0] + 50, HAND_MARK[1] + 40],
      to: HAND_MARK,
    },
  ],
  where: 'Act 3, Scene 4; Act 5, Scene 1',
  note: 'Cassio gives Bianca the handkerchief to copy, and she suspects it is a token from another woman. When Iago tries to blame her for the attack on Cassio, she answers that she does not tremble, and that her life is as honest as her accusers’.',
  artNote:
    'The play does not describe her, and the men round her call her names the print never repeats. She is drawn as the panels draw her, plainly, her hair bound up in a kerchief.',
}
