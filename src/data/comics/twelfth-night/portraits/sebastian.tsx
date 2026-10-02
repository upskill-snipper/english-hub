import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, gouge, type Pt } from '@/components/comics/linocut/carve'

import {
  Hand,
  handPoint,
  onTurnedHead,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  TWIN_CHEEK,
  TWIN_FEATHER_AT,
  TwinFigure,
  TwinKnockout,
  type Digit,
} from './common'

/**
 * Sebastian, Viola's twin, as the play describes him: through her.
 *
 *   VIOLA: "I my brother know Yet living in my glass; even such and so In
 *   favour was my brother, and he went Still in this fashion, colour,
 *   ornament, For him I imitate." (Act 3, Scene 4)
 *   SEBASTIAN: "This pearl she gave me, I do feel't and see't, And though
 *   'tis wonder that enwraps me thus, Yet 'tis not madness." (Act 4, Scene 3)
 *   ORSINO: "One face, one voice, one habit, and two persons!" (Act 5,
 *   Scene 1)
 *
 * So: Viola's face and Viola's clothes, because she copied his, and in his
 * open hand the pearl Olivia gave him, which he looks down at to be sure it
 * is real. He says of his sister that "she much resembled me" (Act 2, Scene
 * 1). Nothing else of his looks is given.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx), from
 * TwinFigure (./common.tsx), the figure Viola's portrait is drawn from: the
 * same face, the same flat bonnet with the same feather curling from its
 * band (the "ornament"), the same small ruff, doublet and short cloak, and
 * the same dark hair curling at the nape. He faces left, so the pair look at
 * each other across the gallery as in a glass: "A natural perspective, that
 * is, and is not!" The pearl is cut in paper with an ink rim and a shade
 * under its curve, lying in the hollow of his palm, every finger cut apart
 * from the next. There is no red in this plate.
 *
 * Seeds: 8201 (the figure and its marks), 8210 (the ground).
 */

/** His head bowed a little: he looks down at the pearl in his hand. */
const ROT = 7

/** His near forearm, raised from below the block to hold his hand out before him. */
const SLEEVE = spline([
  [138, 336, 1],
  [152, 302],
  [170, 268],
  [188, 240, 1],
  [212, 252, 1],
  [196, 280],
  [184, 308],
  [176, 336, 1],
])
const SLEEVE_CUTS = gouge(152, 326, 180, 270, 1.2, 1) + gouge(164, 334, 194, 278, 1, 1)
/** The cuff at his wrist, cut in paper. */
const CUFF = spline([
  [185, 236, 1],
  [213, 250, 1],
  [209, 258, 1],
  [181, 243, 1],
])

/**
 * His hand held out palm up, the fingers reaching forward and a little apart,
 * the thumb lifted at the near side, so the pearl lies in the hollow of the
 * palm beside it. In the hand's own frame: the wrist at the origin, the
 * fingers pointing along +x.
 */
const HAND_AT: Pt = [200, 240]
const HAND_ROT = -10
const HAND_S = 1.5
const PALM = spline([
  [-2, -7],
  [16, -9],
  [33, -6],
  [37, 1],
  [33, 8],
  [14, 9],
  [-2, 6],
])
const DIGITS: Digit[] = [
  { from: [30, -5], to: [50, -12], w: 6.4 },
  { from: [33, -2], to: [56, -6], w: 6.8 },
  { from: [34, 2], to: [58.5, 1.5], w: 7 },
  { from: [32, 6], to: [55, 8.5], w: 6.8 },
  { from: [6, -3], to: [21, -17], w: 7.8 },
]
const HAND_LINES =
  'M27 -4Q29 1 28 6M49 -13.4L50.4 -10.4M55.2 -7.6L56.2 -4.4M57.8 -0.4L58.2 2.8M54.2 6.8L54.6 10'
const inHand = handPoint(HAND_AT, HAND_ROT, HAND_S)
const HAND_T = `translate(${HAND_AT[0]} ${HAND_AT[1]}) rotate(${HAND_ROT}) scale(${HAND_S})`
/** "This pearl she gave me": where it lies, in the hollow of the palm. */
const PEARL = inHand(31, -13.5)
const PEARL_R = 8.2

const P = placing(44, 40, 0.86, true)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // "This is the air; that is the glorious sun": the light high and ahead of
  // him, to the upper left, where he faces.
  ground = portraitGround('twelfth-night-sebastian', 8210, (x, y) =>
    clamp(0.16 + ((PW - x - 40) / 280) * 0.7 + ((PH - y) / PH) * 0.16),
  )
  return ground
}

function SebastianPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <TwinKnockout rot={ROT} />
        <TwinFigure uid={uid} seed={8201} rot={ROT} eye="lowered" />
        {/* his forearm and his open hand, the pearl in it */}
        <g fill={INK} stroke={INK} strokeWidth={8} strokeLinejoin="round">
          <path d={SLEEVE} />
        </g>
        <path
          d={SLEEVE}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={SLEEVE_CUTS} fill={PAPER} />
        <Hand transform={HAND_T} palm={PALM} digits={DIGITS} lines={HAND_LINES} />
        <path d={CUFF} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
        <circle
          cx={PEARL[0]}
          cy={PEARL[1]}
          r={PEARL_R}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.5}
        />
        {/* the shade under the pearl's curve, so it reads as round */}
        <path
          d={`M${PEARL[0] - 5.6} ${PEARL[1] + 2}A6 6 0 0 0 ${PEARL[0] + 2.2} ${PEARL[1] + 5.8}`}
          fill="none"
          stroke={INK}
          strokeWidth={1.2}
          strokeLinecap="round"
        />
      </g>
      <PortraitRule />
    </>
  )
}

export const sebastianPortrait: LinocutArt = { width: PW, height: PH, Draw: SebastianPortrait }

const FEATHER_AT = onTurnedHead(P, ROT, TWIN_FEATHER_AT[0], TWIN_FEATHER_AT[1])
/** The top of the pearl: the marker's line stops there and leaves the pearl clear. */
const PEARL_AT = P.to(PEARL[0], PEARL[1] - PEARL_R - 1.5)
/*
 * Marker lines on a face never cross a mouth, a chin or a beard: a red line
 * there reads as blood at a glance. The line to his cheek comes from behind
 * his head, over the hair and the ear, and stops on the cheek well behind
 * the mouth.
 */
const CHEEK_AT = onTurnedHead(P, ROT, TWIN_CHEEK[0] - 4, TWIN_CHEEK[1] - 4)

export const sebastian: Portrait = {
  name: 'Sebastian',
  art: sebastianPortrait,
  alt: 'A linocut portrait of Sebastian in profile, facing left: a young man with a smooth, beardless face, the same face as his twin sister Viola’s, his head bowed a little as he looks down at a small white pearl lying in the open palm of his hand, which he holds out before him. He wears the same clothes as Viola in her disguise: a dark flat bonnet tilted back on his head, with a pale band and a long dark feather curling back from it over his head, a small white ruff, a dark doublet with pale buttons and a short dark cloak over his far shoulder. His dark hair curls at the nape of his neck. Three numbered red markers point to the feather on his bonnet, the pearl and his face.',
  describedBy: [
    {
      phrase: 'Still in this fashion, colour, ornament',
      at: [FEATHER_AT[0] + 40, FEATHER_AT[1] + 2],
      to: FEATHER_AT,
    },
    {
      phrase: 'This pearl she gave me, I do feel’t and see’t',
      at: [PEARL_AT[0] - 18, PEARL_AT[1] - 62],
      to: PEARL_AT,
    },
    // On the cheek with no line, as the pilot's "shrivelled his cheek" sits on
    // Scrooge's: from behind the head the line crossed hair and face and read as
    // a cut. (Checked 2 October 2026.)
    { phrase: 'One face, one voice, one habit, and two persons!', at: CHEEK_AT },
  ],
  where: 'Act 3, Scene 4; Act 4, Scene 3; Act 5, Scene 1',
  note: 'Viola dresses as her brother did, so when Sebastian reaches Illyria everyone takes him for Cesario. Olivia gives him a pearl, which he holds to be sure he is not mad, and is betrothed to him within hours. When the twins at last stand face to face, Orsino can hardly believe his eyes.',
  artNote:
    'The play describes Sebastian only through his likeness to Viola. He is drawn with her face and in the clothes she copied from him: the bonnet with its feather, the ruff, the doublet and the cloak are how the panels draw both twins.',
}
