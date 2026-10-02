import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, gouge, ribbon, rng } from '@/components/comics/linocut/carve'

import {
  folds,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  WOMAN_EYE,
  WOMAN_HEAD,
  WomanFace,
  WomanNeckShadow,
} from './common'

/**
 * Emilia, in her own words in the willow scene, the play's plainest claim
 * that a wife feels as her husband does:
 *
 *   "Let husbands know Their wives have sense like them: they see, and smell
 *   And have their palates both for sweet and sour, As husbands have."
 *   (Act 4, Scene 3)
 *
 * The play never describes her looks, so the markers point where her own
 * words point: to the head where her sense is, the eye that sees, and the
 * nose that smells. Nothing points at her mouth. She is drawn steady, her
 * head up and her eye open and level, as she is when she will not be
 * silenced in the last scene ("I will not charm my tongue; I am bound to
 * speak", 5.2).
 *
 * She is drawn as the figure kit draws her (../panels/people.tsx): every
 * woman's head (WOMAN_HEAD), lit, framed by a dark linen coif (the kit's
 * COIF, here at the size of a portrait) so she is told from Desdemona at a
 * glance, and a plain gown with a linen collar. There is no red in this
 * plate but the markers.
 *
 * She faces left, so the figure is drawn facing right and flipped.
 *
 * Seeds: 9401 (the coif's folds), 9410 (the ground).
 */

/**
 * The dark linen coif: over the crown, round the back of the head and down
 * to the shoulders, framing the face from the brow past the ear to the jaw.
 */
const COIF =
  'M151 66C137 28 80 18 47 46C25 72 21 116 25 158C27 188 22 208 8 226L80 226C83 208 87 197 94 190L122 186' +
  'C107 172 100 144 105 112C110 87 128 70 151 66Z'
/** Its front edge, turned back round the face. */
const COIF_EDGE = 'M151 66C128 70 110 87 105 112C100 144 107 172 122 186'
/**
 * The turned-back linen along that edge, a band cut in paper, and the hem at
 * its foot: what tells a coif from a head of hair.
 */
const COIF_TURN = ribbon(
  [
    [147, 69.5],
    [131, 75],
    [117, 86],
    [109.5, 103],
    [107, 124],
    [108.5, 146],
    [113, 166],
    [119.5, 182],
  ],
  6.4,
  0.2,
)
const COIF_HEM = 'M12 222Q44 219 78 222'

/** Her shoulders in a plain dark gown. */
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
/** A plain linen collar at the neck of the gown. */
const COLLAR = spline([
  [80, 224, 1],
  [112, 232],
  [148, 222, 1],
  [158, 236],
  [114, 248],
  [74, 240, 1],
])

const marks = once(() => {
  const r = rng(9401)
  // Folds in the coif, cut in paper: gathered at the back of the head and
  // fanning towards the face and the crown, as cloth does and hair does not.
  let coif = ''
  const g = [42, 132]
  for (let i = 0; i < 8; i++) {
    const a = -1.3 + (i / 7) * 1.7 + (r() - 0.5) * 0.12
    const len = 24 + r() * 22
    const x1 = g[0] + Math.cos(a) * 12
    const y1 = g[1] + Math.sin(a) * 12
    const x2 = g[0] + Math.cos(a) * (12 + len)
    const y2 = g[1] + Math.sin(a) * (12 + len)
    coif += gouge(x1, y1, x2, y2, 1.1 + r() * 0.6, 1.6)
  }
  // The seam over the crown, and the folds falling behind the neck.
  coif += gouge(126, 42, 52, 74, 0.9, -9)
  for (let i = 0; i < 4; i++) {
    const x = 30 + i * 13
    coif += gouge(x + 6, 170, x - 6, 222, 0.9, 1.4)
  }
  const gown = folds(9402, [14, 180], [262, 280], 6)
  return { coif, gown }
})

/** Emilia, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function EmiliaFigure({ uid }: { uid: string }) {
  const m = marks()
  const coifClip = `${uid}-emi-coif`
  return (
    <g>
      <defs>
        <clipPath id={coifClip}>
          <path d={COIF} />
        </clipPath>
      </defs>
      <path d={GOWN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.gown} fill={PAPER} />
      <path d={WOMAN_HEAD} fill={PAPER} />
      <WomanNeckShadow id={`${uid}-emi`} />
      <path d={COLLAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      {/* the dark linen coif framing her face */}
      <path d={COIF} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${coifClip})`}>
        <path d={m.coif} fill={PAPER} />
      </g>
      <path d={COIF_TURN} fill={PAPER} stroke={INK} strokeWidth={1.1} />
      <path d={COIF_EDGE} fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
      <path d={COIF_HEM} fill="none" stroke={PAPER} strokeWidth={1.4} strokeLinecap="round" />
      <WomanFace eye="open" />
    </g>
  )
}

/** A thick ink halo round coif, head and shoulders. */
function EmiliaKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={COIF} />
      <path d={WOMAN_HEAD} />
      <path d={GOWN} />
    </g>
  )
}

const P = placing(52, 6, 0.96, true)

const ground = once(() =>
  // A room in the castle at night: the light of a lamp ahead of her, to the left.
  portraitGround('othello-emilia', 9410, (x, y) =>
    clamp(0.14 + ((PW - x - 50) / 260) * 0.86 - (y / PH) * 0.1),
  ),
)

function EmiliaPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <EmiliaKnockout />
        <EmiliaFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const emiliaPortrait: LinocutArt = { width: PW, height: PH, Draw: EmiliaPortrait }

const BROW_AT = P.to(150, 76)
const EYE_AT = P.to(WOMAN_EYE[0] + 1, WOMAN_EYE[1])
const NOSE_AT = P.to(174, 117)

export const emilia: Portrait = {
  name: 'Emilia',
  art: emiliaPortrait,
  alt: 'A linocut portrait of Emilia in profile, facing left, head and shoulders: a woman with her head up and her eye open and level, her face lit and pale, framed by a dark linen coif that covers her hair and ears and falls to her shoulders, its edge turned back in a pale band round her face and its folds cut in fine pale lines. She wears a plain dark gown with a pale linen collar. Three numbered red markers point to her brow, her eye and her nose.',
  describedBy: [
    {
      phrase: 'Their wives have sense like them',
      at: [BROW_AT[0] + 10, BROW_AT[1] - 50],
      to: BROW_AT,
    },
    { phrase: 'they see', at: [EYE_AT[0] - 46, EYE_AT[1] - 26], to: EYE_AT },
    { phrase: 'and smell', at: [NOSE_AT[0] - 40, NOSE_AT[1] + 30], to: NOSE_AT },
  ],
  where: 'Act 4, Scene 3',
  passage:
    'Let husbands know Their wives have sense like them: they see, and smell And have their palates both for sweet and sour, As husbands have.',
  note: 'Desdemona cannot believe that a wife would wrong her husband; Emilia answers that husbands who wrong their wives teach them to. In the last scene the same woman refuses her husband’s order to be quiet, and tells the truth.',
  artNote:
    'The play does not describe her looks. She is drawn as the panels draw her, plainly, in a dark linen coif and a plain gown; the markers point where her own words do.',
}
