import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, gouge, n } from '@/components/comics/linocut/carve'

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
  WomanNeckShadow,
} from './common'

/**
 * Goneril, Lear's eldest daughter, as her father sees her when she comes to
 * cut his knights:
 *
 *   "How now, daughter? What makes that frontlet on? Methinks you are too
 *   much of late i' the frown." (Lear, Act 1, Scene 4)
 *   "Her eyes are fierce; but thine Do comfort, and not burn." (Lear to Regan,
 *   of Goneril, Act 2, Scene 4)
 *
 * A frontlet is a band worn across the forehead, and Lear's word for her frown
 * is the name of it. So she frowns, her brow drawn down towards the nose and
 * her eye narrowed under it, and she wears what his word names. She is drawn
 * as the figure kit draws her (../panels/people.tsx): the frontlet, a band
 * across her brow cut in paper, over a long dark veil, as a married woman,
 * the veil's edge round her face cut in paper so that it never reads as
 * hair. Her head is every woman's head (WOMAN_HEAD): a hard face, never a
 * caricature, with nothing of a witch about it. Her gown is a duchess's dark
 * gown with a band at the neck. There is no red in this plate.
 *
 * MARKERS. "too much of late i' the frown" sits on her brow with no line.
 * The frontlet's marker and the eye's come to them from in front of her,
 * each at its own height: no line crosses her face.
 *
 * Seeds: 7702 (the gown's folds), 7710 (the ground).
 */

/** The long dark veil, over the head and falling behind to the back: the kit's VEIL. */
const VEIL = spline([
  [159, 64, 1],
  [154, 46],
  [136, 30],
  [108, 24],
  [80, 30],
  [58, 46],
  [44, 72],
  [38, 106],
  [38, 146],
  [40, 186],
  [36, 230],
  [24, 280],
  [10, 344, 1],
  [66, 344, 1],
  [70, 296],
  [78, 256],
  [88, 232],
  [96, 210],
  [102, 180],
  [104, 150],
  [106, 124],
  [112, 104],
  [124, 86],
  [140, 73],
])
/** The veil's edge round her face, cut in paper: the kit's VEIL_EDGE. */
const VEIL_EDGE =
  'M158.6 65C151 68 145 71 140 74C131 80 123 88 116 98C110 108 106.6 120 105.6 134C104.8 150 104 166 102.4 182C100.4 200 95.6 216 88.6 232'
/**
 * "What makes that frontlet on?": the band across her brow, over the veil,
 * from the front of the brow back over the head.
 */
const FRONTLET = spline([
  [162, 66, 1],
  [146, 58],
  [122, 52],
  [96, 52],
  [70, 58],
  [52, 70, 1],
  [56, 80, 1],
  [74, 69],
  [98, 63],
  [122, 63],
  [144, 68],
  [161, 76, 1],
])

/** Her shoulders in a dark gown. */
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
/** The band at the neck of her gown, cut in paper. */
const NECKBAND = spline([
  [96, 238, 1],
  [124, 256],
  [158, 236, 1],
  [162, 246],
  [126, 268],
  [92, 248],
])

type Marks = { veil: string; frontlet: string; gown: string }

const marks = once((): Marks => {
  // The veil's folds, cut in paper, falling from the crown down her back.
  const veil =
    gouge(104, 30, 52, 140, 1.4, 6) +
    gouge(74, 40, 46, 200, 1.4, 4) +
    gouge(60, 180, 30, 330, 1.6, 2) +
    gouge(88, 210, 60, 334, 1.4, 1)
  // The weave of the frontlet: short ink ticks across the band.
  let frontlet = ''
  for (let x = 64; x < 156; x += 7) {
    const t = (x - 52) / 110
    const y = 64 - Math.sin(t * Math.PI) * 6 + t * 4
    frontlet += `M${n(x)} ${n(y - 3)}l1 6`
  }
  const gown = folds(7702, [14, 200], [278, 292], 6, 344)
  return { veil, frontlet, gown }
})

/** Goneril, head and shoulders, facing right in the 0..240 by 0..344 frame. */
export function GonerilFigure({ uid }: { uid: string }) {
  const m = marks()
  const veilClip = `${uid}-gon-veil`
  return (
    <g>
      <defs>
        <clipPath id={veilClip}>
          <path d={VEIL} />
        </clipPath>
      </defs>
      {/* the dark gown and the band at its neck */}
      <path d={GOWN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.gown} fill={PAPER} />
      <path d={WOMAN_HEAD} fill={PAPER} />
      <WomanNeckShadow id={`${uid}-gon`} />
      <path d={NECKBAND} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      {/* the long dark veil, its edge round her face cut in paper */}
      <path d={VEIL} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${veilClip})`}>
        <path d={m.veil} fill={PAPER} />
      </g>
      <path
        d={VEIL_EDGE}
        fill="none"
        stroke={PAPER}
        strokeWidth={LINE.bold}
        strokeLinecap="round"
      />
      {/* "What makes that frontlet on?": the band across her brow */}
      <path d={FRONTLET} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path
        d={m.frontlet}
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
        strokeLinecap="round"
      />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        {/* the nostril, and the mouth set hard, its corner turned down */}
        <path d="M169.5 121.5C166 119.5 166 115.5 170 114.5" strokeWidth={1.2} />
        <path d="M163.8 137.2L156.2 138.6Q154.6 139.4 154 141" strokeWidth={1.7} />
        <path d="M164.5 143.5C162.5 145 160.5 145.3 158.5 144.7" strokeWidth={0.9} />
        <path d="M159 124Q154.6 130 155.6 137" strokeWidth={0.9} />
        {/* "too much of late i' the frown": the brow drawn down towards the nose */}
        <path d="M142.6 80.6Q151 80.4 162.4 87.6" strokeWidth={2.6} />
        <path d="M161 81.4L163.4 86.4" strokeWidth={1.1} />
        {/* "Her eyes are fierce": the eye narrowed under the brow, looking hard ahead */}
        <path d="M145 93.6Q152.6 90.6 161 93.4" strokeWidth={2.4} />
        <path d="M146.6 98Q153.4 99.6 159.8 96.8" strokeWidth={1.3} />
      </g>
      <circle cx={WOMAN_EYE[0] + 1.2} cy={WOMAN_EYE[1] - 0.2} r={2.5} fill={INK} />
    </g>
  )
}

/** A thick ink halo round veil, face and shoulders. */
function GonerilKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={VEIL} />
      <path d={WOMAN_HEAD} />
      <path d={GOWN} />
    </g>
  )
}

const P = placing(52, 0, 1.04)

const ground = once(() =>
  // A hall in Albany's palace, the light ahead of her.
  portraitGround('lear-goneril', 7710, (x, y) =>
    clamp(0.1 + ((x - 50) / 270) * 0.84 - (y / PH) * 0.12),
  ),
)

function GonerilPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <GonerilKnockout />
        <GonerilFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const gonerilPortrait: LinocutArt = { width: PW, height: PH, Draw: GonerilPortrait }

/** The front of the frontlet, at her brow. */
const FRONTLET_AT = P.to(160, 70)
/** The brow, above and behind the eye. */
const FROWN_AT = P.to(133, 81)
const EYE_AT = P.to(161, 95)

export const goneril: Portrait = {
  name: 'Goneril',
  art: gonerilPortrait,
  alt: 'A linocut portrait of Goneril in profile, facing right: a woman with a hard face, her brow drawn down towards her nose in a frown, her eye narrowed under it and looking fiercely ahead, and the corner of her mouth set and turned down. A long dark veil covers her head and falls down her back, its edge round her face cut in white, and a pale band, a frontlet, crosses her brow over the veil. She wears a dark gown with a pale band at the neck. Three numbered red markers point to the frontlet, her frowning brow and her eye.',
  describedBy: [
    {
      phrase: 'What makes that frontlet on?',
      at: [FRONTLET_AT[0] + 48, FRONTLET_AT[1] - 6],
      to: FRONTLET_AT,
    },
    { phrase: 'too much of late i’ the frown', at: FROWN_AT },
    { phrase: 'Her eyes are fierce', at: [EYE_AT[0] + 52, EYE_AT[1] + 4], to: EYE_AT },
  ],
  where: 'Act 1, Scene 4; Act 2, Scene 4',
  note: 'Rewarded for her flattery in the love test, Goneril is the first to turn on her father, and the frown he sees is the first sign of it.',
  artNote:
    'A frontlet is a band worn across the forehead, and Lear uses its name for her frown, so she wears one. The play does not describe her face or her dress; the veil is the panels’ mark of a married woman.',
}
