import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arcDashes, clamp, deg, gouge, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  ageLines,
  EarCut,
  folds,
  Hand,
  handPoint,
  locks,
  MAN_EAR,
  MAN_HEAD,
  napeShade,
  once,
  onTurnedHead,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  turn,
  waves,
  type Digit,
} from './common'

/**
 * The Earl of Gloucester, blind, as he speaks of himself on the heath in Act
 * 4, Scene 1, when the old tenant leading him says "You cannot see your way":
 *
 *   "I have no way, and therefore want no eyes; I stumbled when I saw. ...
 *   O dear son Edgar, The food of thy abused father's wrath! Might I but live
 *   to see thee in my touch, I'd say I had eyes again!"
 *
 * So: an old man with a plain cloth band over his eyes, his face lifted a
 * little as a blind man's is, and one hand held out in front of him, open,
 * its fingers apart, feeling the air: "to see thee in my touch". His
 * beard is white: Regan calls it so in 3.7, and Lear, mad, greets him at
 * Dover as "Goneril with a white beard!" (4.6). The play says nothing else of
 * his looks. He is drawn as the figure kit draws him (../panels/people.tsx):
 * white hair at the nape, the soft round cap the kit gives him only so that
 * the two old men are never taken for each other, and the long dark gown of
 * an earl of the time, with a plain linen collar.
 *
 * HIS EYES ARE NEVER SHOWN. The band is a plain strip of linen tied at the
 * back of his head, cut in paper with an ink rim and two fine folds, and
 * there is nothing beneath it or at its edges: no wound, no stain, no red
 * anywhere in this plate. His hand is held out at the height of his chest
 * and well away from his face, the elbow bent at his side and the fingers
 * spread, so it reads as feeling for the way and never as a raised arm or a
 * salute.
 *
 * MARKERS. The band's marker comes to its front from in front of his face, at
 * the band's own height; the hand's comes down to the back of the hand, well
 * below his face. No line crosses his face.
 *
 * He faces left, towards Edgar's portrait, so the figure is drawn facing
 * right and flipped. Seeds: 7201 to 7209 (the figure's marks), 7210 (the
 * ground).
 */

/** His face is lifted a little. */
const ROT = -6

/**
 * His soft round cap, as the kit cuts it (GLOUCESTER_CAP in
 * ../panels/people.tsx): over the crown to the brow, standing a little above
 * the skull, in ink, with its rolled band along the lower edge and one fold
 * cut in paper. Invented by the kit only so that the two old men are never
 * taken for each other: Lear goes bareheaded, Gloucester capped.
 */
const CAP = spline([
  [36, 92, 1],
  [33, 68],
  [42, 42],
  [66, 21],
  [98, 11],
  [128, 14],
  [150, 30],
  [160, 52],
  [162, 79, 1],
  [132, 77],
  [100, 79],
  [68, 84],
])
const CAP_CUTS = gouge(40, 87, 159, 75, 3.4, -1.6) + gouge(90, 17, 70, 70, 1.6, 3.4)

/**
 * His white hair below the cap and the band: at the back of the head down to
 * the nape, its ends tufted, and in front of the ear down to the beard.
 */
const HAIR = spline([
  [40, 112, 1],
  [96, 116],
  [104, 108],
  [124, 112, 1],
  [124, 122, 1],
  [110, 130],
  [100, 142],
  [92, 158],
  [84, 172],
  [76, 184, 1],
  [70, 178],
  [64, 190, 1],
  [58, 180],
  [51, 188, 1],
  [46, 172],
  [40, 150],
  [37, 130],
])

/**
 * The band over his eyes: a plain strip of linen round the head at the
 * height of the eyes, from the bridge of the nose, where it stands a little
 * off the face, round to the back of the head.
 */
const BAND = spline([
  [162, 80, 1],
  [168.6, 95],
  [172.4, 109, 1],
  [150, 112],
  [120, 114],
  [90, 116],
  [60, 117],
  [36, 114, 1],
  [35, 102],
  [36, 91, 1],
  [62, 88],
  [92, 85],
  [122, 82],
  [148, 80],
])
/** Its two folds, and the line where it turns round the side of the head. */
const BAND_FOLDS =
  'M166 94Q120 97 50 102.6M169 104.6Q120 107.6 56 110.4M148 81.6Q144.6 96.6 148.6 111.6'
/** The knot at the back of the head, and the two ends hanging from it. */
const KNOT = spline([
  [40, 96],
  [32, 94],
  [26, 102],
  [28, 112],
  [36, 116],
  [42, 108],
])
const TAILS =
  spline([
    [30, 110, 1],
    [22, 126],
    [16, 146, 1],
    [24, 148, 1],
    [30, 128],
    [36, 112, 1],
  ]) +
  spline([
    [34, 112, 1],
    [32, 132],
    [32, 152, 1],
    [40, 152, 1],
    [40, 132],
    [40, 113, 1],
  ])

/** His white beard: trimmed close along the jaw from in front of the ear, to a blunt point below the chin. */
const BEARD = spline([
  [124, 116, 1],
  [130, 132],
  [143, 140],
  [156, 141],
  [165.5, 136.6, 1],
  [172, 140],
  [177, 150],
  [179, 164],
  [178, 180],
  [173, 196],
  [164, 210, 1],
  [154, 204],
  [144, 196],
  [133, 188],
  [124, 178],
  [118, 164],
  [116, 146],
  [118, 130],
])
const MOUSTACHE =
  'M169 138.6Q176.6 141.6 178.6 151.6M166.4 140.4Q172.8 145.4 173.6 155M163.4 141.6Q167.4 148 167 156.6M160.6 143Q162.6 148.6 161.6 155'
/** The mouth, closed, under the moustache. */
const MOUTH = 'M175 156.4L167 157.4'

/** The neck behind the beard, in shadow. */
const NECK_SHADOW = 'M98 146L118 136L124 188L136 232L84 240Z'

/** His shoulders and chest in a dark gown. */
const BODY = spline([
  [-12, 352, 1],
  [-6, 300],
  [12, 260],
  [42, 234],
  [80, 222],
  [116, 226],
  [150, 222],
  [180, 234],
  [202, 260],
  [210, 296],
  [212, 352, 1],
])
/** The plain falling collar of linen at the neck of the gown. */
const COLLAR = spline([
  [64, 236, 1],
  [92, 228],
  [124, 230],
  [150, 226],
  [170, 236, 1],
  [160, 252],
  [136, 246],
  [112, 250],
  [86, 248],
  [70, 254, 1],
])
/**
 * The near sleeve: from the shoulder down to the elbow at his side, and the
 * forearm forward from it at the height of his chest, rising a little to the
 * wrist, the elbow bent.
 */
const SLEEVE = spline([
  [100, 246, 1],
  [128, 240],
  [146, 258],
  [154, 288],
  [174, 276],
  [198, 266, 1],
  [204, 290, 1],
  [180, 300],
  [156, 314],
  [132, 304],
  [114, 282],
])
// The hand held out low in front of him, the back of it towards us, the
// fingers spread and a little curled, feeling the air. Drawn with the wrist
// at the origin and the fingers pointing up, then turned to point forward
// and a little down.
const HAND_AT: Pt = [204, 278]
const HAND_ROT = 96
const HAND_S = 0.84
const PALM = spline([
  [-13, 2],
  [-16, -14],
  [-16, -30],
  [-12, -42],
  [1, -46],
  [15, -44],
  [22, -36],
  [22, -16],
  [16, 0],
])
const DIGITS: Digit[] = [
  { from: [17, -36], to: [26, -56], w: 7.4 },
  { from: [9.5, -40], to: [14, -67], w: 8 },
  { from: [1, -42], to: [0, -70], w: 8.4 },
  { from: [-8, -40], to: [-14, -63], w: 8 },
  { from: [-13, -12], to: [-29, -30], w: 9.4 },
]
const HAND_LINES =
  'M-4 -8Q-6 -22 -8 -34M3 -8Q2 -24 1 -36M9 -8Q10 -22 10 -34' +
  'M-15 -59L-12.6 -60M-1 -66L2 -66M12 -63L15 -63.5M23.4 -53L25.8 -53.5'
const inHand = handPoint(HAND_AT, HAND_ROT, HAND_S)
const HAND_T = `translate(${HAND_AT[0]} ${HAND_AT[1]}) rotate(${HAND_ROT}) scale(${HAND_S})`
/** The cuff of linen at his wrist. */
const CUFF = spline([
  [192, 266, 1],
  [204, 262],
  [210, 276],
  [208, 292, 1],
  [196, 296],
  [192, 282],
])

type Marks = {
  hair: string
  beard: string
  age: string
  cheek: string
  neck: string
  gown: string
  sleeve: string
}

const marks = once((): Marks => {
  const r = rng(7201)
  // White hair combed back from the brow over the crown, fine ink lines on
  // paper, closer at the back where the light does not reach.
  const hair =
    locks(
      7202,
      13,
      (t) => [44 + t * 76, 114 + t * 2],
      (t) => [50 + t * 40, 186 - t * 40],
      [0.7, 1.2],
      -3,
    ) +
    waves(
      7203,
      4,
      (t) => [60 + t * 30, 118],
      (t) => [56 + t * 22, 180 - t * 10],
      [1, 1.6],
      1,
    )

  // The beard, cut in short wavy locks: ink lines between paper.
  const beard =
    waves(
      7204,
      16,
      (t) => [124 + t * 48, 128 + Math.sin(t * Math.PI) * 10],
      (t) => [128 + t * 38, 184 + t * 22],
      [0.8, 1.4],
      1.4,
    ) +
    waves(
      7205,
      4,
      (t) => [117 + t * 6, 140 + t * 10],
      (t) => [126 + t * 10, 178 + t * 12],
      [1.6, 2.3],
      1,
    )

  // The lines of age on the brow above the band, and on the cheek below it.
  const age = ageLines(7206, 0)
  let cheek = ''
  for (let rad = 14; rad < 25; rad += 3.4)
    cheek += arcDashes(r, 142, 112, rad, deg(76), deg(134), [7, 15], [2, 5])

  // The back of the neck below the hair, turned from the light: arcs of ink.
  const neck = napeShade(7207, 150, 112, 70, 112)
  const gown = folds(7208, [10, 120], [282, 296], 5, 352)
  const sleeve =
    gouge(126, 252, 144, 280, 1.2, 1) +
    gouge(160, 294, 192, 280, 1.1, -1) +
    gouge(114, 262, 132, 290, 0.9, 1)
  return { hair, beard, age, cheek, neck, gown, sleeve }
})

/** Gloucester, to the chest, facing right in the 0..240 by 0..352 frame. */
export function GloucesterFigure({ uid }: { uid: string }) {
  const m = marks()
  const headClip = `${uid}-glo-head`
  const hairClip = `${uid}-glo-hair`
  const beardClip = `${uid}-glo-beard`
  return (
    <g>
      <defs>
        <clipPath id={headClip}>
          <path d={MAN_HEAD} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
        <clipPath id={beardClip}>
          <path d={BEARD} />
        </clipPath>
      </defs>
      {/* the dark gown and its plain linen collar */}
      <path d={BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.gown} fill={PAPER} />
      <g transform={turn(ROT)}>
        <path d={MAN_HEAD} fill={PAPER} />
        <g clipPath={`url(#${headClip})`}>
          <path d={NECK_SHADOW} fill={INK} />
          <path d={m.neck} fill="none" stroke={INK} strokeWidth={1.4} strokeLinecap="round" />
          <path
            d={m.age}
            fill="none"
            stroke={INK}
            strokeWidth={LINE.hairline}
            strokeLinecap="round"
          />
          <path d={m.cheek} fill="none" stroke={INK} strokeWidth={0.95} strokeLinecap="round" />
        </g>
        {/* white hair, cut short */}
        <path d={HAIR} fill={PAPER} />
        <g clipPath={`url(#${hairClip})`}>
          <path d={m.hair} fill={INK} />
        </g>
        <EarCut outline={MAN_EAR.outline} curl={MAN_EAR.curl} />
        {/* the soft round cap */}
        <path d={CAP} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path d={CAP_CUTS} fill={PAPER} />
      </g>
      <path d={COLLAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <g transform={turn(ROT)}>
        {/* the white beard */}
        <path d={BEARD} fill={PAPER} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
        <g clipPath={`url(#${beardClip})`}>
          <path d={m.beard} fill={INK} />
        </g>
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          <path d={MOUSTACHE} strokeWidth={1.3} />
          <path d={MOUTH} strokeWidth={1.6} />
          <path d="M172.5 128C168.5 125.5 168.5 120 174 119" strokeWidth={1.5} />
        </g>
        {/* "I stumbled when I saw": the plain band over his eyes, knotted at the back */}
        <path d={TAILS} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
        <path d={KNOT} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path d={BAND} fill={PAPER} stroke={INK} strokeWidth={1.5} strokeLinejoin="round" />
        <path
          d={BAND_FOLDS}
          fill="none"
          stroke={INK}
          strokeWidth={LINE.hairline}
          strokeLinecap="round"
        />
      </g>
      {/* the near arm, the hand held out low, open, feeling the way */}
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.sleeve} fill={PAPER} />
      <path d={CUFF} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <Hand transform={HAND_T} palm={PALM} digits={DIGITS} lines={HAND_LINES} halo={3.6} />
    </g>
  )
}

/** A thick ink halo round head, band, beard, shoulders and arm. */
function GloucesterKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={BODY} />
      <path d={SLEEVE} />
      <g transform={turn(ROT)}>
        <path d={MAN_HEAD} />
        <path d={CAP} />
        <path d={BEARD} />
        <path d={TAILS} />
      </g>
    </g>
  )
}

const P = placing(50, 10, 0.9, true)

const ground = once(() =>
  // The open heath by day, the light ahead of him, to the left.
  portraitGround('lear-gloucester', 7210, (x, y) =>
    clamp(0.12 + ((PW - x - 40) / 270) * 0.84 - (y / PH) * 0.1),
  ),
)

function GloucesterPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <GloucesterKnockout />
        <GloucesterFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const gloucesterPortrait: LinocutArt = { width: PW, height: PH, Draw: GloucesterPortrait }

/** The front of the band, where it stands off the bridge of the nose. */
const BAND_AT = onTurnedHead(P, ROT, 173, 100)
const HAND_MARK = P.to(...inHand(3, -40))

export const gloucester: Portrait = {
  name: 'Gloucester',
  art: gloucesterPortrait,
  alt: 'A linocut portrait of the Earl of Gloucester, facing left: an old man in a soft dark cap, with white hair at the back of his neck and a white beard trimmed to a point below his chin, his face lifted a little. A plain white cloth band is tied over his eyes, just below the cap, and knotted at the back of his head, its two ends hanging; nothing shows beneath it. His cheek is lined below it. He wears a dark gown with a plain white collar, and holds one hand out in front of him at the height of his chest, open, its fingers spread, feeling the air. Two numbered red markers point to the band over his eyes and his outstretched hand.',
  describedBy: [
    { phrase: 'I stumbled when I saw', at: [BAND_AT[0] - 46, BAND_AT[1]], to: BAND_AT },
    {
      phrase: 'Might I but live to see thee in my touch',
      at: [HAND_MARK[0] + 4, HAND_MARK[1] - 50],
      to: HAND_MARK,
    },
  ],
  where: 'Act 4, Scene 1',
  passage:
    'I have no way, and therefore want no eyes; I stumbled when I saw. Full oft ’tis seen Our means secure us, and our mere defects Prove our commodities. O dear son Edgar, The food of thy abused father’s wrath! Might I but live to see thee in my touch, I’d say I had eyes again!',
  note: 'Gloucester trusted the son who lied to him and outlawed the son who loved him. Blind, he sees the truth he missed, and he does not know that the beggar about to lead him is Edgar.',
  artNote:
    'The print never shows his wound: a plain band covers his eyes, as in the panels. The play gives him a white beard and nothing else of his looks; his soft cap is the panels’ way of telling him from Lear, and his dark gown is an old earl’s of the time.',
}
