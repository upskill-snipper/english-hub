import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, gouge } from '@/components/comics/linocut/carve'

import {
  DarkHead,
  darkHeadOutline,
  MAN_EAR,
  MAN_HEAD,
  manRuff,
  once,
  OTHELLO_AGE,
  OTHELLO_CHEEK,
  OTHELLO_COAT,
  OTHELLO_EYE,
  OTHELLO_SASH,
  OTHELLO_SASH_AT,
  OTHELLO_SASH_ENDS,
  OTHELLO_SASH_KNOT,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  seams,
  turn,
} from './common'

/**
 * Othello, from what the play says of him, and from nowhere else:
 *
 *   "I saw Othello's visage in his mind" (Desdemona, Act 1, Scene 3)
 *   "For I have serv'd him, and the man commands Like a full soldier"
 *   (Montano, Act 2, Scene 1)
 *   "Haply, for I am black, And have not those soft parts of conversation
 *   That chamberers have, or for I am declin'd Into the vale of years"
 *   (Othello, Act 3, Scene 3)
 *
 * So: a Black man no longer young, the lines of his years at the corner of
 * his eye, his head held up and his eye open and level, as he stands before
 * the senate in Act 1 ("I fetch my life and being From men of royal siege",
 * 1.2). The play gives his colour and his age; it does not describe his
 * dress, his hair or his face, and the portrait invents none of them beyond
 * the figure kit's plain choices.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx), and as
 * ./common.tsx sets out: every man's head (MAN_HEAD), cut no differently, left
 * in ink with the light cut in paper on the ridge of his brow, the white of
 * his eye round a dark iris, the bridge of his nose, his cheekbone, the
 * parting of his lips and his ear; his hair close and dark with small curls
 * cut in it; clean-shaven and bareheaded; the small ruff; and the general's
 * long coat girdled with a sash cut in paper, which is how the panels mark
 * him out as the man who commands. His sword is left out, as everything
 * that could point to the end of the play is. Nothing in his features is
 * changed or enlarged, nothing is taken from a stage or film production, and
 * none of the names Iago, Roderigo and Brabantio call him is a marker or a
 * word on this card. There is no red in this plate but the markers.
 *
 * Seeds: 9101 (the head's marks), 9105 (the coat), 9110 (the ground).
 */

/** His head held up a little, as before the senate. */
const LIFT = -3
const LIFT_T = `rotate(${LIFT} 112 214)`
const onHead = turn(112, 214, LIFT)

const RUFF = manRuff()

const coatMarks = once(() => ({
  // The coat's front edge, down from the ruff to the sash and on below it.
  front: gouge(150, 228, 194, 288, 1.5, -2) + gouge(196, 312, 207, 344, 1.4, -0.6),
  // Folds: from the shoulder down the sleeve, and in the skirt below the sash.
  folds: seams(
    9105,
    [
      [
        [56, 236],
        [84, 288],
      ],
      [
        [96, 236],
        [104, 286],
      ],
      [
        [30, 254],
        [40, 286],
      ],
      [
        [126, 240],
        [142, 286],
      ],
      [
        [40, 316],
        [32, 344],
      ],
      [
        [96, 316],
        [100, 344],
      ],
      [
        [140, 316],
        [148, 344],
      ],
    ],
    [1, 1.6],
  ),
  // The sash's folds, cut in ink across the paper.
  sash:
    'M10 297Q80 300 160 298M8 303Q80 306 162 304' +
    'M170 295Q176 299 172 305M179 293Q183 299 180 306',
}))

/** Othello to the waist, facing right in the 0..240 by 0..332 frame. */
export function OthelloFigure({ uid }: { uid: string }) {
  const c = coatMarks()
  return (
    <g>
      <path d={OTHELLO_COAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={c.front + c.folds} fill={PAPER} />
      {/* the sash, girdled at the waist and knotted near the front */}
      <path d={OTHELLO_SASH} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={OTHELLO_SASH_ENDS} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={OTHELLO_SASH_KNOT} fill={PAPER} stroke={INK} strokeWidth={1.3} />
      <path d={c.sash} fill="none" stroke={INK} strokeWidth={0.9} strokeLinecap="round" />
      <g transform={LIFT_T}>
        <DarkHead uid={uid} seed={9101} head={MAN_HEAD} ear={MAN_EAR} />
      </g>
      <path d={RUFF.ruff} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={RUFF.pleats} fill="none" stroke={INK} strokeWidth={1.5} />
    </g>
  )
}

/** A thick ink halo round the whole figure, to lift it off the cut ground. */
function OthelloKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <g transform={LIFT_T}>
        <path d={MAN_HEAD} />
        {darkHeadOutline(9101).map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
      <path d={OTHELLO_COAT} />
    </g>
  )
}

const P = placing(34, -12, 0.96)

const ground = once(() =>
  // Light ahead of him, on the right, falling away behind his head.
  portraitGround('othello-othello', 9110, (x, y) =>
    clamp(0.14 + ((x - 60) / 240) * 0.92 - (y / PH) * 0.12),
  ),
)

function OthelloPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <OthelloKnockout />
        <OthelloFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const othelloPortrait: LinocutArt = { width: PW, height: PH, Draw: OthelloPortrait }

const EYE_AT = P.to(...onHead(OTHELLO_EYE[0] + 1, OTHELLO_EYE[1] - 2))
const SASH_AT = P.to(...OTHELLO_SASH_AT)
const CHEEK_AT = P.to(...onHead(...OTHELLO_CHEEK))
const AGE_AT = P.to(...onHead(...OTHELLO_AGE))

export const othello: Portrait = {
  name: 'Othello',
  art: othelloPortrait,
  alt: 'A linocut portrait of Othello in profile, facing right, drawn to the waist: a Black man no longer young, clean-shaven, his head held up and his eye open and level. His face is printed in black, with the light on his brow, his eyelid, the bridge of his nose and his cheekbone cut in fine pale lines, and fine lines at the corner of his eye. His dark hair is cut close, with small curls cut in it. He wears a small white ruff and a general’s long dark coat girdled at the waist with a pale sash, knotted at the front. Four numbered red markers point to his eye, the sash, his cheek and the lines at the corner of his eye.',
  describedBy: [
    // From in front at eye level, as Scrooge's eye marker comes, so the line
    // crosses only the bridge of the nose. (Checked 2 October 2026: from above
    // it cut down across his brow.)
    {
      phrase: 'I saw Othello’s visage in his mind',
      at: [EYE_AT[0] + 70, EYE_AT[1] - 6],
      to: EYE_AT,
    },
    {
      phrase: 'the man commands Like a full soldier',
      at: [SASH_AT[0] - 66, SASH_AT[1] - 20],
      to: SASH_AT,
    },
    // On the cheek with no line, as Scrooge's "shrivelled his cheek" sits:
    // from below, the line ran up his jaw and cheek like a cut. (Checked
    // 2 October 2026.)
    { phrase: 'for I am black', at: CHEEK_AT },
    {
      phrase: 'declin’d Into the vale of years',
      at: [AGE_AT[0] - 62, AGE_AT[1] - 14],
      to: AGE_AT,
    },
  ],
  where: 'Act 1, Scene 3; Act 2, Scene 1; Act 3, Scene 3',
  note: 'Desdemona says she saw his face in his mind, and Montano, who served under him, that he commands like a full soldier. Othello names his own colour only in Act 3, once Iago has taught him to doubt, and gives it, with his age, as a reason his wife might leave him.',
  artNote:
    'The play gives his colour and his age, and says nothing of his dress. His face is cut as a print cuts anything dark, left in ink with the light cut out of it, and he wears the general’s long coat and sash that mark him out in the panels.',
}
