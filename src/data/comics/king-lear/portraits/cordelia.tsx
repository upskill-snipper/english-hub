import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, gouge } from '@/components/comics/linocut/carve'

import {
  folds,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  Tear,
  waves,
  WOMAN_EYE,
  WOMAN_HEAD,
  WomanNeckShadow,
} from './common'

/**
 * Cordelia, as the Gentleman describes her to Kent in Act 4, Scene 3,
 * reading the letters that tell her how her sisters have treated their
 * father:
 *
 *   "You have seen Sunshine and rain at once: her smiles and tears Were like
 *   a better day. Those happy smilets That play'd on her ripe lip seem'd not
 *   to know What guests were in her eyes; which parted thence As pearls from
 *   diamonds dropp'd."
 *
 * So: a young woman smiling and weeping at once, her eyes full, one tear on
 * her cheek and another falling from her face. It is the only passage in the
 * play that describes anyone's face.
 *
 * She is drawn as the figure kit draws her (../panels/people.tsx): the
 * youngest, "So young" (1.1), her hair long and loose down her back, and,
 * for France's "Fairest Cordelia" (1.1), the one face and the one head of
 * hair in the play cut in PAPER, lit, with ink strands, over a dark gown, so
 * she is the light in a dark court. The hairline round her brow and in front
 * of her ear is one ink line, which is what tells her pale hair from her pale
 * face.
 * WHY THE GOWN IS DARK (2 October 2026, the review). The portrait first left
 * her gown pale as well, as the kit first cut her wholly in paper. The kit
 * darkened the gown because, among ink figures, a figure all in paper read
 * as a ghost or a statue, and the portrait now matches the panels: the
 * student meets one Cordelia, lit face and hair over a dark gown. Her head is every woman's head
 * (WOMAN_HEAD). The tears are cut as the Tempest portraits cut them, in paper
 * with an ink rim, so they read as tears and not as holes. There is no red in
 * this plate: at this size a red mark on a weeping face could be taken for a
 * hurt.
 *
 * MARKERS. "her smiles and tears" sits on her cheek, beside the tear, with
 * no line. The other three come to what they mark from in front of her, each
 * at its own height, and the lip's line stops in the air before her lips: no
 * line crosses her face, and no red touches her mouth.
 *
 * She faces left, towards her father's portrait, so the figure is drawn facing
 * right and flipped. Seeds: 7601 to 7604 (the figure's marks), 7610 (the
 * ground).
 */

/** Her long hair, loose: from the hairline at the brow over the crown and down her back. */
const HAIR = spline([
  [158, 58, 1],
  [150, 44],
  [130, 32],
  [104, 30],
  [78, 38],
  [56, 54],
  [42, 78],
  [36, 108],
  [36, 140],
  [40, 172],
  [44, 204],
  [44, 236],
  [40, 270],
  [34, 304],
  [30, 344, 1],
  [80, 344, 1],
  [82, 304],
  [88, 268],
  [96, 238],
  [104, 208],
  [109, 182],
  [112, 156],
  [116, 132],
  [121, 112],
  [130, 94],
  [142, 76],
  [150, 66],
])
/** The hairline: where her pale hair meets her pale face, round the brow and in front of the ear. */
const HAIRLINE =
  'M158 58C153 63 147 70 141 78C134 88 127 100 122 112C118 122 115 134 113 146C111 160 109 174 107 188'

/** Her shoulders in a dark gown, and its neckline. */
const GOWN = spline([
  [-4, 344, 1],
  [2, 298],
  [20, 266],
  [52, 242],
  [84, 232],
  [114, 238],
  [142, 232],
  [168, 244],
  [190, 268],
  [204, 300],
  [210, 344, 1],
])
/** The skin inside the neckline: everything of the gown above this curve, clipped to the gown. */
const NECK_SCOOP = 'M98 236Q124 262 156 236L160 196L94 196Z'

/** The tear on her cheek, and the one falling from her face: [x, y, size]. */
const ON_CHEEK: [number, number, number] = [147, 120, 1.05]
const FALLING: [number, number, number] = [170, 190, 1]

type Marks = { hair: string; gown: string }

const marks = once((): Marks => {
  // Long loose hair in waves: ink strands on paper, closer at the back of the
  // head and in the fall down her back, where it turns from the light.
  const hair =
    waves(
      7601,
      26,
      (t) => [148 - t * 104, 50 + Math.sin(t * Math.PI) * -14 + t * 40],
      (t) => [104 - t * 52, 200 + t * 110],
      [0.7, 1.2],
      2.4,
    ) +
    waves(
      7602,
      10,
      (t) => [50 + t * 44, 150 + t * 24],
      (t) => [38 + t * 38, 336],
      [0.9, 1.6],
      2.8,
    ) +
    waves(
      7604,
      8,
      (t) => [120 - t * 70, 40 + t * 30],
      (t) => [112 - t * 60, 120 + t * 40],
      [0.6, 1],
      1.6,
    )
  const gown =
    folds(7603, [14, 190], [276, 292], 6, 344) +
    gouge(118, 246, 112, 344, 0.9, -1) +
    gouge(160, 254, 176, 344, 0.9, 1.2)
  return { hair, gown }
})

/** Cordelia, head and shoulders, facing right in the 0..240 by 0..344 frame. */
export function CordeliaFigure({ uid }: { uid: string }) {
  const m = marks()
  const hairClip = `${uid}-cor-hair`
  const gownClip = `${uid}-cor-gown`
  return (
    <g>
      <defs>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
        <clipPath id={gownClip}>
          <path d={GOWN} />
        </clipPath>
      </defs>
      {/* the dark gown, its folds cut in paper, and the skin inside its neckline */}
      <path d={GOWN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.gown} fill={PAPER} />
      <g clipPath={`url(#${gownClip})`}>
        <path d={NECK_SCOOP} fill={PAPER} />
      </g>
      <path d={WOMAN_HEAD} fill={PAPER} />
      <WomanNeckShadow id={`${uid}-cor`} />
      {/* her long pale hair, loose down her back */}
      <path d={HAIR} fill={PAPER} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.hair} fill={INK} />
      </g>
      <path d={HAIRLINE} fill="none" stroke={INK} strokeWidth={LINE.fine} strokeLinecap="round" />
      {/* "her smiles and tears": the face smiling, the eye full */}
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d="M169.5 121.5C166 119.5 166 115.5 170 114.5" strokeWidth={1.2} />
        {/* "happy smilets That play'd on her ripe lip": the mouth turned up at its corner */}
        <path d="M164.6 137.2Q160.4 139.8 156 135.6" strokeWidth={1.6} />
        <path d="M165.5 133C163.5 134 161.5 135.5 160.5 137" strokeWidth={0.9} />
        <path d="M164.5 143.5C162.5 145 160.5 145.3 158.5 144.7" strokeWidth={0.9} />
        {/* the cheek lifted by the smile */}
        <path d="M155 130Q152 126 146 127" strokeWidth={0.9} />
        {/* the brow, a little lifted at its inner end: sorrow under the smile */}
        <path d="M143 84Q151 81.4 160.6 81" strokeWidth={2} />
        {/* "What guests were in her eyes": the eye bright and full, the lower lid wet */}
        <path d="M145 94.5Q152.5 90 160.5 94" strokeWidth={2.2} />
        <path d="M146.6 99.4Q153 102.4 159.6 98.8" strokeWidth={1.3} />
        <path d="M148.6 101.6Q153.4 103.6 158 101.2" strokeWidth={0.8} />
      </g>
      <circle cx={WOMAN_EYE[0] + 0.6} cy={WOMAN_EYE[1] + 0.8} r={2.6} fill={INK} />
      <circle cx={WOMAN_EYE[0] + 1.4} cy={WOMAN_EYE[1]} r={0.8} fill={PAPER} />
      {/* "As pearls from diamonds dropp'd": a tear on her cheek, and one falling */}
      <Tear x={ON_CHEEK[0]} y={ON_CHEEK[1]} s={ON_CHEEK[2]} track={12} />
      <Tear x={FALLING[0]} y={FALLING[1]} s={FALLING[2]} />
    </g>
  )
}

/** A thick ink halo round head, hair and shoulders. */
function CordeliaKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={HAIR} />
      <path d={WOMAN_HEAD} />
      <path d={GOWN} />
    </g>
  )
}

const P = placing(30, -4, 1.08, true)

const ground = once(() =>
  // The French camp by day, the light ahead of her, to the left.
  portraitGround('lear-cordelia', 7610, (x, y) =>
    clamp(0.16 + ((PW - x - 40) / 270) * 0.86 - (y / PH) * 0.1),
  ),
)

function CordeliaPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <CordeliaKnockout />
        <CordeliaFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const cordeliaPortrait: LinocutArt = { width: PW, height: PH, Draw: CordeliaPortrait }

/** The cheek, just behind the tear. */
const SMILES_AT = P.to(131, 122)
/** In the air just before her lips. */
const LIP_AT = P.to(175, 137)
const EYE_AT = P.to(161, 96)
const DROP_AT = P.to(FALLING[0], FALLING[1] - 2)

export const cordelia: Portrait = {
  name: 'Cordelia',
  art: cordeliaPortrait,
  alt: 'A linocut portrait of Cordelia in profile, facing left: a young woman with her long pale hair falling loose down her back, her face and hair lit against the dark, in a dark gown. She is smiling, the corner of her mouth turned up, and weeping at the same time: her eye is bright and full under a brow lifted at its inner end, one tear runs down her cheek and another falls from her face. Four numbered red markers point to her cheek, her smile, her eye and the falling tear.',
  describedBy: [
    { phrase: 'her smiles and tears', at: SMILES_AT },
    {
      phrase: 'happy smilets That play’d on her ripe lip',
      at: [LIP_AT[0] - 52, LIP_AT[1]],
      to: LIP_AT,
    },
    { phrase: 'What guests were in her eyes', at: [EYE_AT[0] - 50, EYE_AT[1] - 4], to: EYE_AT },
    { phrase: 'As pearls from diamonds dropp’d', at: [DROP_AT[0] - 54, DROP_AT[1]], to: DROP_AT },
  ],
  where: 'Act 4, Scene 3',
  passage:
    'Not to a rage: patience and sorrow strove Who should express her goodliest. You have seen Sunshine and rain at once: her smiles and tears Were like a better day. Those happy smilets That play’d on her ripe lip seem’d not to know What guests were in her eyes; which parted thence As pearls from diamonds dropp’d.',
  note: 'Cordelia would not flatter her father and lost her share of the kingdom for it. Reading of how her sisters have treated him, she smiles and weeps at once: love and grief in one face.',
  artNote:
    'The play gives her no colouring; her pale face and hair, over a dark gown, are the panels’ way of setting “Fairest Cordelia” apart from her sisters, the light in a dark court.',
}
