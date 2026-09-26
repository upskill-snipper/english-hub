import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, gouge } from '@/components/comics/linocut/carve'

import {
  folds,
  locks,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  WOMAN_EAR,
  WOMAN_EYE,
  WOMAN_HEAD,
  WomanFace,
  WomanNeckShadow,
} from './common'

/**
 * Jessica, as Lorenzo speaks of her in Act 2, Scene 6, on the night she
 * leaves her father's house to marry him:
 *
 *   "Beshrew me but I love her heartily, For she is wise, if I can judge of
 *   her, And fair she is, if that mine eyes be true, And true she is, as she
 *   hath prov'd herself."
 *
 * So: a young woman with her head up and her eye open and clear, looking
 * ahead. "Fair" here is Lorenzo's praise, not a colouring, and the play
 * describes nothing else about her looks, so nothing else is drawn.
 *
 * She is drawn as the figure kit draws her (../panels/people.tsx): long dark
 * hair loose down her back, its strands cut in paper, and a plain gown; her
 * head is every woman's head in these portraits (WOMAN_HEAD). She is drawn as
 * herself, not in the boy's clothes she escapes in: the portrait is of the
 * woman Lorenzo describes. Nothing in her hands, nothing demeaning. There is
 * no red in this plate.
 *
 * She faces left, towards Lorenzo's portrait across the gallery, so the
 * figure is drawn facing right and flipped.
 *
 * Seeds: 4801 (the figure), 4802 to 4804 (its marks), 4810 (the ground).
 */

/** Long dark hair, parted and drawn back from the brow, falling loose down her back. */
const HAIR = spline([
  [162, 60, 1],
  [150, 56],
  [134, 58],
  [120, 70],
  [110, 90, 1],
  [98, 100],
  [90, 118],
  [86, 150],
  [82, 200],
  [80, 260],
  [74, 336, 1],
  [10, 336, 1],
  [22, 280],
  [30, 220],
  [36, 160],
  [40, 110],
  [48, 70],
  [70, 42],
  [100, 28],
  [134, 27],
  [154, 38],
])

/** Her shoulders in a plain dark gown. */
export const JESSICA_BODY = spline([
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
/** A plain linen edge at the neck of the gown. */
const NECK_EDGE = spline([
  [84, 228, 1],
  [114, 234],
  [148, 226, 1],
  [154, 236],
  [114, 244],
  [82, 238, 1],
])

type Marks = { hair: string; body: string }

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  // Strands cut in paper: drawn back over the crown from the parting at the
  // brow, then falling long and loose down her back.
  const hair =
    locks(
      seed + 1,
      18,
      (t) =>
        t < 0.35
          ? [134 + (t / 0.35) * 26, 30 + (t / 0.35) * 30]
          : [160 - ((t - 0.35) / 0.65) * 48, 60 + ((t - 0.35) / 0.65) * 32],
      (t) => [80 - t * 34, 36 + t * 84],
      [0.9, 1.5],
      -6,
    ) +
    locks(
      seed + 2,
      14,
      (t) => [44 + t * 42, 116 + t * 4],
      (t) => [16 + t * 54, 334],
      [0.9, 1.5],
      -4,
      2,
    )
  const body = folds(seed + 3, [100, 190], [270, 290], 5) + gouge(150, 250, 166, 334, 1.2, -1)
  const m = { hair, body }
  marksBySeed.set(seed, m)
  return m
}

/** Jessica, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function JessicaFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const hairClip = `${uid}-jes-hair-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
      </defs>
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={JESSICA_BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <path d={WOMAN_HEAD} fill={PAPER} />
      <WomanNeckShadow id={`${uid}-jes-${seed}`} />
      <path
        d={NECK_EDGE}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.fine}
        strokeLinejoin="round"
      />
      {/* the hair over the crown and behind the ear, drawn again over the head */}
      <path
        d={HAIR}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
        clipPath={`url(#${hairClip})`}
      />
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.hair} fill={PAPER} />
      </g>
      <path d={WOMAN_EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.3} />
      <path d={WOMAN_EAR.curl} fill="none" stroke={INK} strokeWidth={1.4} />
      {/* "she is wise ... fair she is": the eye open and clear */}
      <WomanFace eye="open" />
    </g>
  )
}

/** A thick ink halo round head, hair and shoulders. */
export function JessicaKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={HAIR} />
      <path d={WOMAN_HEAD} />
      <path d={JESSICA_BODY} />
    </g>
  )
}

const P = placing(24, 34, 0.9, true)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // Evening in Venice, the last light ahead of her, to the left.
  ground = portraitGround('jessica', 4810, (x, y) =>
    clamp(0.06 + ((PW - x - 60) / 280) * 0.72 - (y / PH) * 0.12),
  )
  return ground
}

function JessicaPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <JessicaKnockout />
        <JessicaFigure uid={uid} seed={4801} />
      </g>
      <PortraitRule />
    </>
  )
}

export const jessicaPortrait: LinocutArt = { width: PW, height: PH, Draw: JessicaPortrait }

const BROW_AT = P.to(WOMAN_EYE[0], WOMAN_EYE[1] - 16)
const CHEEK_AT = P.to(140, 132)

export const jessica: Portrait = {
  name: 'Jessica',
  art: jessicaPortrait,
  alt: 'A linocut portrait of Jessica in profile, facing left: a young woman with her head up and her eye open and clear, looking ahead. Her long dark hair is drawn back from her brow over her head and falls loose down her back past her shoulders, its strands cut in fine white lines. She wears a plain dark gown with a plain white edge at the neck. Two numbered red markers point to her brow and her cheek.',
  describedBy: [
    { phrase: 'she is wise', at: [BROW_AT[0] - 50, BROW_AT[1] - 40], to: BROW_AT },
    { phrase: 'fair she is', at: [CHEEK_AT[0] - 30, CHEEK_AT[1] + 70], to: CHEEK_AT },
  ],
  where: 'Act 2, Scene 6',
  passage:
    'Beshrew me but I love her heartily, For she is wise, if I can judge of her, And fair she is, if that mine eyes be true, And true she is, as she hath prov’d herself.',
  note: 'Lorenzo praises Jessica for her mind first, then her beauty, then her faithfulness, just after she has thrown down her father’s casket to him. Whether her flight is loyalty or betrayal depends on whose side of the door you stand.',
  artNote:
    '“Fair” is Lorenzo’s praise, not a colour, and the play describes nothing else of her looks. Her long dark hair and plain gown are how the panels draw her, in the dress of the time.',
}
