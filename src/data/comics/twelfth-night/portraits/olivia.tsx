import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { clamp, gouge } from '@/components/comics/linocut/carve'

import {
  folds,
  locks,
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
  WomanFace,
  WomanNeckShadow,
} from './common'

/**
 * Olivia, in Act 1, Scene 5, at the moment she lifts her veil for Cesario,
 * from what she and Viola say there:
 *
 *   OLIVIA: "we will draw the curtain and show you the picture." (as she
 *   unveils)
 *   VIOLA: "'Tis beauty truly blent, whose red and white Nature's own sweet
 *   and cunning hand laid on."
 *   OLIVIA: "I will give out divers schedules of my beauty ... item, two lips
 *   indifferent red; item, two grey eyes with lids to them; item, one neck,
 *   one chin, and so forth."
 *
 * So: a young woman in mourning for her brother, her black veil thrown back
 * from her face over her head ("like a cloistress she will veiled walk",
 * Valentine, Act 1, Scene 1), her face pale and a flush on her cheek: the
 * "red and white" Viola praises. Her grey eyes are open under their lids.
 *
 * She is drawn as the figure kit draws her (../panels/people.tsx): a black
 * gown and a black veil over her head, falling down her back, its front edge
 * cut in paper where it frames her face (the kit's VEIL and VEIL_EDGE, which
 * are the Romeo and Juliet kit's, carried to this size point for point); her
 * face the one face in the panels cut in paper, as every face in these
 * portraits is; her dark hair drawn back from the brow under the veil, over
 * the ear. Her head is every woman's head (WOMAN_HEAD), lifted a little.
 *
 * RED. The kit's rule, and this plate's: Olivia's "red" is a flush on the
 * cheek, never on the lips, because a red mouth reads at a glance as blood.
 * Her lips, "indifferent red", and her grey eyes are left to the words.
 *
 * She faces left, as she faces Cesario in the panels, so the figure is drawn
 * facing right and flipped.
 *
 * Seeds: 8401 (the figure), 8402 to 8404 (its marks), 8410 (the ground).
 */

/** Her head lifted a little: she is showing her face, and proud of it. */
const ROT = -3

/**
 * The black veil over her head and down her back, its front edge drawn back
 * from her face: the kit's VEIL at this size, in the head's frame.
 */
const VEIL =
  'M143.6 66.9C120.7 30.4 78.3 26.6 53.6 53.5C34.2 80.3 30.7 130.3 34.2 176.3C37.7 237.8 21.8 314.6 0.7 391.4L53.6 395.2C67.7 322.3 74.8 245.5 74.8 191.7C74.8 145.6 81.9 103.4 106.6 80.3C122.4 66.9 134.8 65 143.6 66.9Z'
/** "we will draw the curtain": the veil's front edge, cut in paper (the kit's VEIL_EDGE). */
const VEIL_EDGE =
  'M143.6 66.9C133.4 64.2 120.7 67.3 106.6 79.6C84 101.1 75.5 141.8 74.8 191.7C74.1 245.5 67 322.3 53.6 395.2'

/** Her dark hair, drawn back from the brow under the veil, covering the ear. */
const HAIR = spline([
  [152, 63, 1],
  [140, 72],
  [127, 86],
  [118, 104],
  [112, 126],
  [108, 146],
  [100, 160, 1],
  [86, 150],
  [80, 124],
  [86, 98],
  [104, 79],
  [130, 67],
])

/** "red and white": the flush on her cheek, well back from her lips. In the head's frame. */
const FLUSH =
  'M130.6 123.6C131.6 119.8 137 118 142 119C146 120 147.2 123 144.8 125.4C141.8 128 135.2 128.4 132.4 127C131 126.2 130.4 125 130.6 123.6Z'

/** Her shoulders in a black gown. */
const BODY = spline([
  [-4, 336, 1],
  [2, 300],
  [20, 268],
  [52, 244],
  [84, 232],
  [114, 236],
  [142, 230],
  [168, 242],
  [190, 266],
  [204, 300],
  [210, 336, 1],
])
/** A narrow edge of white linen at the neck of the gown. */
const NECK_EDGE = spline([
  [84, 230, 1],
  [114, 236],
  [146, 228, 1],
  [152, 238],
  [114, 246],
  [82, 240, 1],
])

type Marks = { hair: string; veil: string; body: string }

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  // Strands cut in paper, drawn back from the brow under the veil.
  const hair = locks(
    seed + 1,
    11,
    (t) => [150 - t * 40, 66 + t * 30],
    (t) => [96 - t * 10, 84 + t * 66],
    [0.8, 1.3],
    6,
  )
  // Folds in the veil as it falls down her back, cut in paper.
  const veil =
    gouge(70, 56, 46, 150, 1.6, 3) +
    gouge(62, 156, 50, 300, 1.7, 2) +
    gouge(46, 186, 24, 330, 1.5, 1.5) +
    gouge(92, 46, 60, 92, 1.4, 2) +
    gouge(54, 96, 42, 200, 1.3, 1)
  const body = folds(seed + 2, [100, 190], [270, 290], 4)
  const m = { hair, veil, body }
  marksBySeed.set(seed, m)
  return m
}

/** Olivia, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function OliviaFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const hairClip = `${uid}-oli-hair-${seed}`
  const veilClip = `${uid}-oli-veil-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
        <clipPath id={veilClip}>
          <path d={VEIL} />
        </clipPath>
      </defs>
      {/* the black gown */}
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
        <WomanNeckShadow id={`${uid}-oli-${seed}`} />
        <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <g clipPath={`url(#${hairClip})`}>
          <path d={m.hair} fill={PAPER} />
        </g>
        <WomanFace eye="open" />
        {/* "whose red and white": the flush on her cheek, never on her lips */}
        <path d={FLUSH} fill={RED} />
        {/* the veil, thrown back over her head and down her back */}
        <path d={VEIL} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <g clipPath={`url(#${veilClip})`}>
          <path d={m.veil} fill={PAPER} />
        </g>
        <path d={VEIL_EDGE} fill="none" stroke={PAPER} strokeWidth={3} strokeLinecap="round" />
      </g>
    </g>
  )
}

/** A thick ink halo round head, veil and shoulders. */
export function OliviaKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <g transform={turn(ROT)}>
        <path d={WOMAN_HEAD} />
        <path d={VEIL} />
      </g>
      <path d={BODY} />
    </g>
  )
}

const P = placing(40, 40, 0.86, true)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // Her darkened house: the light falls on her face, ahead of her to the left.
  ground = portraitGround('twelfth-night-olivia', 8410, (x, y) =>
    clamp(0.06 + ((PW - x - 60) / 280) * 0.8 - (y / PH) * 0.14),
  )
  return ground
}

function OliviaPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <OliviaKnockout />
        <OliviaFigure uid={uid} seed={8401} />
      </g>
      <PortraitRule />
    </>
  )
}

export const oliviaPortrait: LinocutArt = { width: PW, height: PH, Draw: OliviaPortrait }

const EDGE_AT = onTurnedHead(P, ROT, 124, 70)
const EYE_AT = onTurnedHead(P, ROT, WOMAN_EYE[0] + 3, WOMAN_EYE[1] - 1)
/*
 * Marker lines on a face never cross a mouth, a chin or a beard: a red line
 * there reads as blood at a glance. The line to the flush comes from behind
 * her head, over the veil and the hair, and stops just short of the back of
 * the flush, so nothing red runs towards her lips and the flush stands as a
 * shape of its own, not as the head of the marker's pin.
 */
const FLUSH_AT = onTurnedHead(P, ROT, 125.6, 123.2)

export const olivia: Portrait = {
  name: 'Olivia',
  art: oliviaPortrait,
  alt: 'A linocut portrait of the Countess Olivia in profile, facing left: a young woman in mourning, her head lifted a little, a black veil thrown back from her face over her head and falling down her back, its front edge cut in white where it frames her face. Her dark hair is drawn back from her brow under the veil. Her face is pale, with an open eye under a clear lid and a flush printed in red on her cheek, well back from her lips. She wears a black gown with a narrow white edge at the neck. Three numbered red markers point to the edge of her veil, her eye and the flush on her cheek.',
  describedBy: [
    {
      phrase: 'we will draw the curtain and show you the picture',
      at: [EDGE_AT[0] - 46, EDGE_AT[1] - 36],
      to: EDGE_AT,
    },
    { phrase: 'two grey eyes with lids to them', at: [EYE_AT[0] - 62, EYE_AT[1] + 2], to: EYE_AT },
    {
      phrase: '’Tis beauty truly blent, whose red and white',
      at: [FLUSH_AT[0] + 104, FLUSH_AT[1] + 24],
      to: FLUSH_AT,
    },
  ],
  where: 'Act 1, Scene 5',
  note: 'Olivia has vowed to hide her face for seven years in mourning for her brother, yet she unveils it for Orsino’s messenger and calls it a picture. When Viola praises it, Olivia mocks the praise by listing her face like goods in a will: “two lips indifferent red”, “two grey eyes with lids to them”.',
  artNote:
    'The print has no grey, so her grey eyes are left to the words, and so are her lips: the print keeps its red off a mouth and puts it on her cheek, where Viola sees it. Her black veil and gown are how the panels draw her mourning.',
}
