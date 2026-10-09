import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  GOWN,
  GOWN_NECK,
  gownFolds,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  Tear,
  Veil,
  VEIL,
  WOMAN_EYE,
  WOMAN_HEAD,
  WomanFace,
  WomanNeckShadow,
} from './common'

/**
 * Octavia, Caesar's sister and Antony's Roman wife, from three men's words:
 *
 *   ENOBARBUS: "Octavia is of a holy, cold, and still conversation."
 *   (Act 2, Scene 6)
 *   ANTONY, as she parts from her brother: "The April’s in her eyes. It is
 *   love’s spring, And these the showers to bring it on." (Act 3, Scene 2)
 *   CLEOPATRA: "Her hair, what colour?" MESSENGER: "Brown, madam, and her
 *   forehead As low as she would wish it." (Act 3, Scene 3)
 *
 * So: a Roman wife, the palla drawn over her head as a married woman's is in
 * public, her eye open and wet with tears, one fallen on her cheek, her mouth
 * closed; a little of her hair showing at the brow under the palla. She
 * looks ahead, still.
 *
 * The messenger who describes her to Cleopatra in Act 3, Scene 3 has already
 * been beaten for bringing bad news, and tells the queen what she wants to
 * hear: Octavia is shorter, "low-voiced", her face "Round even to
 * faultiness", her forehead low. Only his answer about her hair is a marker
 * here, and the card's note says whose words they are. Her head is
 * WOMAN_HEAD, every woman's head in these portraits, cut no differently from
 * Charmian's or Cleopatra's: nothing in it is made round or low to take his
 * word for it.
 *
 * The kit had no look for her when this was cut (2 October 2026): she is drawn
 * plainly, as a Roman wife of the 30s BC, in the long gown and the palla
 * (./common.tsx: Veil), as the Julius Caesar portraits draw Calpurnia. The
 * play describes none of it. There is no red in this plate.
 *
 * MARKERS. The eye's comes to it from in front at the eye's height, crossing
 * only the bridge of the nose; the hair's comes to it from in front at its own
 * height, above the brow. Enobarbus's "holy, cold, and still" is said of her
 * and not of anything she wears, so it sits on her face with no line, as the
 * pilot's "shrivelled his cheek" sits on Scrooge's, clear of the tear: the
 * palla is the dress of a Roman wife, which the play does not describe, and
 * no marker points at it. No line crosses her face.
 *
 * Seeds: 4101 and 4102 (the figure's marks), 4110 (the ground).
 */

/**
 * The palla is drawn back from her brow (VEIL_BACK), as a Roman wife's mantle
 * sat on the head, so a band of her hair shows between its edge and her face
 * (BROW_HAIR): drawn back from the hairline at the brow and over the ear
 * under the cloth, the "Brown, madam" of the messenger, in ink.
 */
const VEIL_BACK = 'translate(-16 -9)'
const BROW_HAIR = spline([
  [161, 56, 1],
  [154, 59.4],
  [144, 61.6],
  [134, 66.6],
  [127, 75],
  [122, 87],
  [118, 99],
  [115, 110],
  [113.6, 124],
  [112.6, 140, 1],
  [99, 141, 1],
  [97, 124],
  [99, 106],
  [104, 90],
  [112, 76],
  [124, 63],
  [138, 54],
  [151, 50],
])

type Marks = { hair: string; folds: string }

const marks = once((): Marks => {
  const r = rng(4101)
  // The hair drawn back from the brow and over the ear under the cloth, in
  // paper strands from the hairline straight back to the palla's edge.
  const INNER: Pt[] = [
    [156, 59],
    [140, 63],
    [127, 75],
    [121, 90],
    [117, 104],
    [114.4, 120],
    [113.4, 134],
  ]
  const OUTER: Pt[] = [
    [146, 52],
    [126, 60],
    [110, 77],
    [102, 92],
    [98.6, 108],
    [97.6, 124],
    [98.6, 136],
  ]
  const along = (pts: Pt[], t: number): Pt => {
    const f = t * (pts.length - 1)
    const i = Math.min(pts.length - 2, Math.floor(f))
    const u = f - i
    return [
      pts[i][0] + (pts[i + 1][0] - pts[i][0]) * u,
      pts[i][1] + (pts[i + 1][1] - pts[i][1]) * u,
    ]
  }
  let hair = ''
  for (let i = 0; i < 14; i++) {
    const t = (i + between(r, 0.2, 0.8)) / 14
    const [x0, y0] = along(INNER, t)
    const [x1, y1] = along(OUTER, t)
    hair += gouge(x0 - 1.5, y0, x1 + 1, y1, between(r, 0.75, 1.05), between(r, -1.4, -0.5))
  }
  return { hair, folds: gownFolds(4102) }
})

/** Octavia, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function OctaviaFigure({ uid }: { uid: string }) {
  const m = marks()
  const hairClip = `${uid}-oa-hair`
  return (
    <g>
      <defs>
        <clipPath id={hairClip}>
          <path d={BROW_HAIR} />
        </clipPath>
      </defs>
      <path d={WOMAN_HEAD} fill={PAPER} />
      <WomanNeckShadow id={`${uid}-oa`} />
      <path d={GOWN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.folds} fill={PAPER} />
      <path d={GOWN_NECK} fill="none" stroke={PAPER} strokeWidth={1.6} strokeLinecap="round" />
      <path d={BROW_HAIR} fill={INK} stroke={PAPER} strokeWidth={1} strokeLinejoin="round" />
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.hair} fill={PAPER} />
      </g>
      <g transform={VEIL_BACK}>
        <Veil uid={`${uid}-oa`} />
      </g>
      <WomanFace eye="open" />
      {/* "The April’s in her eyes": the lower lid wet, and a tear on her cheek */}
      <path
        d="M146.8 99.6Q153 102.4 159.4 98.8"
        fill="none"
        stroke={INK}
        strokeWidth={1.3}
        strokeLinecap="round"
      />
      <Tear x={151.6} y={115} s={0.85} track={7} />
    </g>
  )
}

/** A thick ink halo round head, palla and shoulders. */
function OctaviaKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={WOMAN_HEAD} />
      <path d={BROW_HAIR} />
      <path d={VEIL} transform={VEIL_BACK} />
      <path d={GOWN} />
    </g>
  )
}

const P = placing(42, 4, 1)

const ground = once(() =>
  // An ante-chamber of Caesar's house in Rome, the light ahead of her.
  portraitGround('ac-octavia', 4110, (x, y) =>
    clamp(0.12 + ((x - 50) / 270) * 0.84 - (y / PH) * 0.12),
  ),
)

function OctaviaPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <OctaviaKnockout />
        <OctaviaFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const octaviaPortrait: LinocutArt = { width: PW, height: PH, Draw: OctaviaPortrait }

const EYE_AT = P.to(WOMAN_EYE[0] + 1, WOMAN_EYE[1] + 0.6)
const HAIR_AT = P.to(150, 52.6)
const STILL_AT = P.to(131, 136)

export const octavia: Portrait = {
  name: 'Octavia',
  art: octaviaPortrait,
  alt: 'A linocut portrait of Octavia in profile, facing right, head and shoulders: a Roman wife, still, her mouth closed and her eye open, its lower lid wet and a tear on her cheek below it. A dark palla is drawn over her head from the brow and falls behind her neck and over her shoulder in broad folds, its hemmed edge round her face cut in white, and a little of her dark hair shows at the brow beneath it. She wears a plain dark gown, round at the neck. Three numbered red markers point to her eye, her hair at the brow and her face.',
  describedBy: [
    { phrase: 'The April’s in her eyes.', at: [EYE_AT[0] + 60, EYE_AT[1]], to: EYE_AT },
    { phrase: 'Brown, madam', at: [HAIR_AT[0] + 52, HAIR_AT[1]], to: HAIR_AT },
    { phrase: 'Octavia is of a holy, cold, and still conversation.', at: STILL_AT },
  ],
  where: 'Act 2, Scene 6; Act 3, Scenes 2 and 3',
  note: 'Octavia is seen through men who use her or judge her. Enobarbus says her “conversation”, meaning her whole manner of life, is holy, cold and still, and predicts that Antony will go back to Egypt; Antony watches her weep at leaving her brother; and the colour of her hair is a frightened messenger’s answer to Cleopatra, who beat him for bringing the news of the marriage.',
  artNote:
    'The print cannot show brown, so her hair is ink. The play does not describe her dress: the palla over her head is how a Roman wife went out, as Calpurnia does in the Julius Caesar portraits.',
}
