import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { clamp, gouge, type Pt } from '@/components/comics/linocut/carve'

import {
  capsule,
  folds,
  onTurnedHead,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  turn,
  WOMAN_EYE,
  WOMAN_HEAD,
  WomanNeckShadow,
} from './common'

/**
 * Maria, Olivia's gentlewoman, from what Sir Toby says of her and what she
 * says of herself:
 *
 *   SIR TOBY: "Look where the youngest wren of nine comes." (Act 3, Scene 2)
 *   MARIA: "I can write very like my lady your niece; on a forgotten matter
 *   we can hardly make distinction of our hands." (Act 2, Scene 3)
 *   SIR TOBY: "To the gates of Tartar, thou most excellent devil of wit!"
 *   (Act 2, Scene 5)
 *
 * So: a small woman (the wren is the smallest of birds, and the youngest of
 * nine the smallest wren; Toby calls her "the little villain" too, Act 2,
 * Scene 5), quick-witted and pleased with herself, holding the letter she has
 * written in her lady's hand to trap Malvolio. The letter is sealed:
 * Malvolio knows the seal as Olivia's, "her Lucrece, with which she uses to
 * seal" (Act 2, Scene 5), so the wax is printed in the spot colour, as the
 * panels print the letter's seal. Nothing else of her looks is given.
 *
 * She is drawn as the figure kit draws her (../panels/people.tsx): the
 * smallest adult in the play, set low and small in the block, in a plain
 * dark gown and a linen coif (the kit's COIF, which is the Romeo and Juliet
 * kit's, carried to this size point for point, and cut in PAPER here as
 * linen is, with its turned-back edge in ink), which no other woman in the
 * play wears. Her head is every woman's head (WOMAN_HEAD), her eye creased
 * with laughter and a smile at the corner of her mouth, cut in ink.
 *
 * RED is on the seal of the letter only: never on her mouth, and never on
 * her hand, which holds the letter by its lower edge, the seal standing clear
 * above her fingers.
 *
 * Seeds: 8701 (the figure), 8702 (its marks), 8710 (the ground).
 */

/** Her head tipped back a little: she is laughing at what she has done. */
const ROT = -5

/** The linen coif, over the crown and down to the shoulders, framing the face: the kit's COIF. */
const COIF =
  'M148.9 72.7C134.8 30.4 78.3 18.9 46.6 49.6C25.4 76.5 21.8 122.6 25.4 168.7C27.1 199.4 21.8 222.4 7.7 241.6L78.3 241.6C81.9 222.4 85.4 210.9 92.4 203.2L120.7 199.4C106.6 184 99.5 153.3 104.8 118.7C110.1 91.9 127.7 76.5 148.9 72.7Z'
/** Its turned-back edge round the face (the kit's COIF_EDGE), and the inner line of the turn. */
const COIF_EDGE = 'M148.9 72.7C127.7 76.5 110.1 91.9 104.8 118.7C99.5 153.3 106.6 184 120.7 199.4'
const COIF_EDGE_IN = 'M145.4 80.6C129 84.6 117.6 97 113.6 118.6C109.6 145.6 115.4 170 125.4 184'
/** The folds of the linen over the crown and down the back. */
const COIF_FOLDS =
  'M120 36Q84 46 62 86M92 34Q62 52 50 104M64 112Q58 160 52 214M84 128Q80 170 74 226'

/** Dark hair showing at the brow under the coif's edge. */
const HAIR = 'M150 72.4C142 72 134 76 128 82L131 86C136 81 143 77.4 151 76.6Z'

/** Her shoulders in a plain dark gown, and a narrow white edge at the neck. */
const BODY = spline([
  [-4, 336, 1],
  [2, 300],
  [22, 268],
  [54, 246],
  [86, 236],
  [114, 238],
  [142, 232],
  [166, 244],
  [188, 268],
  [202, 300],
  [208, 336, 1],
])
const NECK_EDGE = spline([
  [86, 234, 1],
  [114, 239],
  [146, 230, 1],
  [152, 240],
  [114, 248],
  [84, 243, 1],
])

/**
 * Her features: nostril, lips, chin and brow as WomanFace cuts them, the
 * mouth turned up at its corner, and the eye creased with laughter, the lower
 * lid pushed up and the lines at its corner cut deep.
 */
function MariaFace() {
  return (
    <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
      <path d="M169.5 121.5C166 119.5 166 115.5 170 114.5" strokeWidth={1.2} />
      <path d="M163.6 137.2Q159.6 139.6 155.4 135.8" strokeWidth={1.6} />
      <path d="M165.5 133C163.5 134 161.5 135.5 160.5 137" strokeWidth={0.9} />
      <path d="M164.5 143.5C162.5 145 160.5 145.3 158.5 144.7" strokeWidth={0.9} />
      <path d="M159.4 126.4Q153.6 130.4 154.2 136.4" strokeWidth={0.9} />
      <path d="M143 82.5Q152 78.6 161 82.4" strokeWidth={2} />
      <path d="M145 95.6Q152.5 89.8 160.5 95" strokeWidth={2.2} />
      <path d="M146.4 98.4Q153 96 159.6 97.6" strokeWidth={1.3} />
      <path d="M144 96.4L137.4 93.4M144.4 99.4L138.2 101.2M145.6 102L140.6 106" strokeWidth={1} />
      <circle cx={153.4} cy={95.2} r={2} fill={INK} stroke="none" />
    </g>
  )
}

/**
 * "I can write very like my lady your niece": the letter, folded and sealed,
 * held up in her near hand. In the figure's frame: a sheet folded in three,
 * turned a little, with the seal in its middle.
 */
const LETTER: Pt[] = [
  [186, 168],
  [244, 160],
  [250, 204],
  [192, 212],
]
const LETTER_FOLDS = 'M188.4 186.4L246.4 178.6M190.2 198.6L248 190.8'
const SEAL: Pt = [219.4, 184.4]

/** Her near forearm, raised from below the block, and her hand at the foot of the letter. */
const SLEEVE = spline([
  [150, 336, 1],
  [162, 296],
  [176, 260],
  [192, 226, 1],
  [214, 234, 1],
  [204, 266],
  [192, 302],
  [186, 336, 1],
])
const CUFF = spline([
  [189, 222, 1],
  [216, 230, 1],
  [213, 238, 1],
  [186, 230, 1],
])
/**
 * The hand: the back of it towards us, the fingers behind the letter with
 * their tips showing over its lower edge, the thumb in front pressing the
 * sheet: so it holds, and never reads as a fist.
 */
const HAND =
  'M190 226C190 216 196 208 206 206L226 204C230 204 231 210 227 212L214 216C216 222 214 230 208 234C200 237 192 234 190 226Z'
const THUMB = capsule(204, 214, 224, 200, 7.6)
const FINGERTIPS = [
  capsule(212, 208, 216, 198, 6.6),
  capsule(220, 207, 225, 197.6, 6.4),
  capsule(228, 206, 233, 197.4, 6),
]
const KNUCKLES = 'M200 220Q204 214 210 213M196 228Q202 224 208 224'

type Marks = { body: string; sleeve: string }

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const body = folds(seed + 1, [40, 140], [270, 290], 4)
  const sleeve = gouge(164, 326, 186, 262, 1.1, 1) + gouge(174, 332, 198, 270, 1, 1)
  const m = { body, sleeve }
  marksBySeed.set(seed, m)
  return m
}

/** Maria, head and shoulders, holding up the letter, facing right in the 0..240 by 0..332 frame. */
export function MariaFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const letter = 'M' + LETTER.map(([x, y]) => `${x} ${y}`).join('L') + 'Z'
  return (
    <g>
      <path d={BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <path
        d={NECK_EDGE}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.fine}
        strokeLinejoin="round"
      />
      <g transform={turn(ROT)}>
        <path d={WOMAN_HEAD} fill={PAPER} />
        <WomanNeckShadow id={`${uid}-mar-${seed}`} />
        <path d={HAIR} fill={INK} />
        <MariaFace />
        {/* the linen coif, cut in paper, its turned-back edge and folds in ink */}
        <path d={COIF} fill={PAPER} stroke={INK} strokeWidth={1.6} strokeLinejoin="round" />
        <path d={COIF_FOLDS} fill="none" stroke={INK} strokeWidth={1.1} strokeLinecap="round" />
        <path d={COIF_EDGE} fill="none" stroke={INK} strokeWidth={2.2} strokeLinecap="round" />
        <path d={COIF_EDGE_IN} fill="none" stroke={INK} strokeWidth={1} strokeLinecap="round" />
      </g>
      {/* her forearm, and the letter in her hand */}
      <g fill={INK} stroke={INK} strokeWidth={8} strokeLinejoin="round">
        <path d={SLEEVE} />
        <path d={letter} />
      </g>
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.sleeve} fill={PAPER} />
      <g fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round">
        {FINGERTIPS.map((d) => (
          <path key={d} d={d} />
        ))}
        <path d={letter} strokeWidth={1.4} />
      </g>
      <path d={LETTER_FOLDS} fill="none" stroke={INK} strokeWidth={0.9} strokeLinecap="round" />
      {/* Olivia's seal, her Lucrece, in red wax on the paper */}
      <circle cx={SEAL[0]} cy={SEAL[1]} r={7.4} fill={RED} stroke={INK} strokeWidth={1} />
      <circle cx={SEAL[0]} cy={SEAL[1]} r={3.6} fill="none" stroke={INK} strokeWidth={0.8} />
      <path d={HAND} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path d={THUMB} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path
        d={KNUCKLES}
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
        strokeLinecap="round"
      />
      <path d={CUFF} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
    </g>
  )
}

/** A thick ink halo round head, coif and shoulders. */
export function MariaKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <g transform={turn(ROT)}>
        <path d={WOMAN_HEAD} />
        <path d={COIF} />
      </g>
      <path d={BODY} />
    </g>
  )
}

/** Set low and small in the block: "the youngest wren of nine". */
const P = placing(56, 84, 0.76)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // Olivia's house: light ahead of her, to the right, over the letter.
  ground = portraitGround('twelfth-night-maria', 8710, (x, y) =>
    clamp(0.1 + ((x - 40) / 280) * 0.82 - (y / PH) * 0.08),
  )
  return ground
}

function MariaPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <MariaKnockout />
        <MariaFigure uid={uid} seed={8701} />
      </g>
      <PortraitRule />
    </>
  )
}

export const mariaPortrait: LinocutArt = { width: PW, height: PH, Draw: MariaPortrait }

const COIF_AT = onTurnedHead(P, ROT, 92, 44)
const LETTER_AT = P.to(236, 172)
/*
 * Marker lines on a face never cross a mouth, a chin or a beard: a red line
 * there reads as blood at a glance. The line to her eye comes from above
 * and in front of the brow, and stops at the lines of laughter by the eye.
 */
const EYE_AT = onTurnedHead(P, ROT, WOMAN_EYE[0] - 8, WOMAN_EYE[1] - 2)

export const maria: Portrait = {
  name: 'Maria',
  art: mariaPortrait,
  alt: 'A linocut portrait of Maria, Olivia’s gentlewoman, in profile, facing right, small and set low in the picture with dark space above her: a woman in a white linen coif that covers her head and falls to her shoulders, framing her face, with a little dark hair showing at her brow. Her eye is creased with laughter and the corner of her mouth turns up. She wears a plain dark gown with a narrow white edge at the neck, and holds up before her a folded letter, sealed with a round seal printed in red. Three numbered red markers point to her coif, the letter and her laughing eye.',
  describedBy: [
    { phrase: 'the youngest wren of nine', at: [COIF_AT[0] - 40, COIF_AT[1] - 34], to: COIF_AT },
    {
      phrase: 'I can write very like my lady your niece',
      at: [LETTER_AT[0] + 18, LETTER_AT[1] - 52],
      to: LETTER_AT,
    },
    {
      phrase: 'thou most excellent devil of wit',
      at: [EYE_AT[0] + 18, EYE_AT[1] - 62],
      to: EYE_AT,
    },
  ],
  where: 'Act 3, Scene 2; Act 2, Scene 3; Act 2, Scene 5',
  note: 'Maria is small, and the sharpest wit in Olivia’s house. When Malvolio threatens to report her, she forges a love letter in her lady’s handwriting and seals it with her lady’s seal, and Sir Toby, delighted, calls her a devil of wit. In the end he marries her.',
  artNote:
    'The play does not describe her face or dress. Her linen coif and plain gown are how the panels draw her, and her size comes from Sir Toby’s names for her. The red is the wax of the seal.',
}
