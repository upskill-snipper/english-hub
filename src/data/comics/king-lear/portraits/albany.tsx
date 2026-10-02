import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp } from '@/components/comics/linocut/carve'

import {
  Brooch,
  folds,
  locks,
  MAN_EAR,
  MAN_EYE,
  MAN_HEAD,
  ManBrow,
  ManEye,
  ManNoseAndMouth,
  NeckShadow,
  once,
  onTurnedHead,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  turn,
} from './common'

/**
 * The Duke of Albany, Goneril's husband, as his wife describes him:
 *
 *   "This milky gentleness and course of yours, Though I condemn not, yet,
 *   under pardon, You are much more attask'd for want of wisdom Than prais'd
 *   for harmful mildness." (Goneril to Albany, Act 1, Scene 4)
 *   "I marvel our mild husband Not met us on the way." (Goneril, Act 4,
 *   Scene 2)
 *
 * So: a mild face, gentle in the eye. It is his wife's scorn, and the play
 * proves her wrong about what mildness can do: by Act 4 he is, as Oswald
 * says, "never man so chang'd", and he turns on her. The portrait draws the
 * mildness and leaves the change to the card.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): clean-
 * shaven, his dark hair to the jaw and combed back from the brow, in ink with
 * its strands cut in paper, the ear below it; a duke's tunic and a cloak,
 * pinned at the shoulder. His head is every man's head (MAN_HEAD), bowed a
 * very little, the brow level and lifted a touch, the eye open and quiet. The
 * play does not describe his looks. There is no red in this plate.
 *
 * MARKERS. "our mild husband" sits on his cheek with no line. The eye's
 * marker comes to it from in front of him at its own height: no line crosses
 * his face.
 *
 * He faces left, towards Goneril's portrait, so the figure is drawn facing
 * right and flipped. Seeds: 8002 to 8004 (the figure's marks), 8010 (the
 * ground).
 */

/** His head is bowed a very little. */
const ROT = 3

/** His dark hair, to the jaw, combed back from the brow, the ear below it: the kit's ALBANY_HAIR. */
const HAIR = spline([
  [155, 62, 1],
  [150, 42],
  [132, 28],
  [104, 22],
  [76, 28],
  [52, 44],
  [38, 70],
  [33, 104],
  [35, 136],
  [42, 160],
  [52, 178, 1],
  [62, 170],
  [68, 182, 1],
  [66, 156],
  [66, 132],
  [72, 110],
  [82, 92],
  [100, 78],
  [122, 72],
  [140, 70],
])

/** His shoulders in a tunic. */
const BODY = spline([
  [-12, 336, 1],
  [-6, 296],
  [12, 262],
  [44, 238],
  [80, 228],
  [116, 232],
  [150, 228],
  [180, 240],
  [204, 264],
  [218, 298],
  [224, 336, 1],
])
/** The cloak over his far shoulder and down his back, pinned at the near shoulder. */
const CLOAK = spline([
  [-14, 336, 1],
  [-8, 296],
  [8, 260],
  [36, 238],
  [68, 228],
  [98, 230],
  [122, 244, 1],
  [104, 262],
  [84, 292],
  [68, 336, 1],
])

type Marks = { hair: string; tunic: string; cloak: string }

const marks = once((): Marks => {
  // Strands of the dark hair, cut in paper, combed back from the brow over
  // the crown and down the back of the head to the jaw, each bowed with the
  // round of the skull, wider towards the light at the front.
  const hair = locks(
    8004,
    18,
    (t) => [150 - t * 56, 62 - t * 30],
    (t) => [64 - t * 26, 176 - t * 60],
    [1.1, 2],
    -16,
    0.8,
  )
  const tunic = folds(8002, [130, 216], [276, 288], 3)
  const cloak = folds(8003, [-4, 76], [262, 276], 4)
  return { hair, tunic, cloak }
})

/** Albany, head and shoulders, facing right in the 0..240 by 0..336 frame. */
export function AlbanyFigure({ uid }: { uid: string }) {
  const m = marks()
  const hairClip = `${uid}-alb-hair`
  return (
    <g>
      <defs>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
      </defs>
      <path d={BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.tunic} fill={PAPER} />
      <path d={CLOAK} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.cloak} fill={PAPER} />
      <Brooch x={114} y={244} rad={6.4} />
      <g transform={turn(ROT)}>
        <path d={MAN_HEAD} fill={PAPER} />
        <NeckShadow id={`${uid}-alb`} />
        <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <g clipPath={`url(#${hairClip})`}>
          <path d={m.hair} fill={PAPER} />
        </g>
        <path d={MAN_EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.4} />
        <path d={MAN_EAR.curl} fill="none" stroke={INK} strokeWidth={1.5} strokeLinecap="round" />
        {/* "This milky gentleness": the brow level and lifted a touch, the eye quiet */}
        <ManNoseAndMouth />
        <ManBrow w={2.2} raise={1.4} />
        <ManEye look="open" />
      </g>
    </g>
  )
}

/** A thick ink halo round head, hair and shoulders. */
function AlbanyKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={BODY} />
      <g transform={turn(ROT)}>
        <path d={MAN_HEAD} />
        <path d={HAIR} />
      </g>
    </g>
  )
}

const P = placing(44, 2, 1.0, true)

const ground = once(() =>
  // Before his palace, the light ahead of him, to the left.
  portraitGround('lear-albany', 8010, (x, y) =>
    clamp(0.12 + ((PW - x - 40) / 270) * 0.84 - (y / PH) * 0.1),
  ),
)

function AlbanyPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <AlbanyKnockout />
        <AlbanyFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const albanyPortrait: LinocutArt = { width: PW, height: PH, Draw: AlbanyPortrait }

const EYE_AT = onTurnedHead(P, ROT, MAN_EYE[0] + 7, MAN_EYE[1])
const CHEEK_AT = onTurnedHead(P, ROT, 136, 128)

export const albany: Portrait = {
  name: 'Albany',
  art: albanyPortrait,
  alt: 'A linocut portrait of the Duke of Albany in profile, facing left: a clean-shaven man with a mild face, his head bowed a very little, his brow level and his eye open and quiet. His dark hair is combed back from his brow and falls to the line of his jaw behind, with his ear showing below it. He wears a dark tunic and a cloak over his far shoulder, pinned with a ring brooch. Two numbered red markers point to his eye and his cheek.',
  describedBy: [
    { phrase: 'This milky gentleness', at: [EYE_AT[0] - 52, EYE_AT[1] - 2], to: EYE_AT },
    { phrase: 'our mild husband', at: CHEEK_AT },
  ],
  where: 'Act 1, Scene 4; Act 4, Scene 2',
  note: 'Goneril scorns her husband as mild, and he is slow to act. When he learns what has been done to Lear and to Gloucester he turns on her, and at the end it is Albany who tries to give the kingdom back.',
  artNote:
    'Both phrases are his wife’s, in scorn. The play does not describe his looks: he is drawn as the panels draw him, clean-shaven, his dark hair to the jaw.',
}
