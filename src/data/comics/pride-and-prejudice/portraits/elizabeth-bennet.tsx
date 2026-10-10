import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp } from '@/components/comics/linocut/carve'

import {
  Curls,
  EarCut,
  GOWN,
  HAIR_UP,
  KNOT,
  NECKLINE,
  PH,
  PW,
  SASH,
  SASH_BOW,
  SASH_KNOT,
  TUCKER_SPINE,
  WOMAN_EAR,
  WOMAN_EYE,
  WOMAN_HEAD,
  WomanFeatures,
  WomanNeckShadow,
  frill,
  gownGathers,
  hairUpCuts,
  once,
  placing,
  portraitGround,
  PortraitRule,
} from './common'

/**
 * Elizabeth Bennet, as Darcy begins to see her in Chapter 6, and nothing
 * else:
 *
 *   "Mr. Darcy had at first scarcely allowed her to be pretty; he had looked
 *   at her without admiration at the ball; and when they next met, he looked
 *   at her only to criticise. But no sooner had he made it clear to himself
 *   and his friends that she had hardly a good feature in her face, than he
 *   began to find it was rendered uncommonly intelligent by the beautiful
 *   expression of her dark eyes."
 *
 * and, in the same chapter, Darcy's own words to Miss Bingley: "I have been
 * meditating on the very great pleasure which a pair of fine eyes in the face
 * of a pretty woman can bestow." Her look in the same chapter: "Elizabeth
 * looked archly, and turned away."
 *
 * So: a young woman of twenty in profile, facing right, her face lit and
 * plain in its features, the eye made the thing to look at: larger and darker
 * than the others' in this gallery, with a glint cut in it and the lashes
 * drawn, as the "fine eyes" the novel keeps returning to. Her mouth is held
 * in the arch half-smile of the same chapter, one corner drawn up. Her hair
 * is dark and drawn up to a knot at the back of the crown, with curls at the
 * temple, as young women wore it in the 1810s; her gown is white muslin, cut
 * round at the collarbone with a band of muslin along the neck, and a dark
 * ribbon at the high waist. The novel describes none of the hair or the
 * dress. Nothing here comes from a film or stage production, and there is no
 * red in this plate.
 *
 * WHY THE GOWN IS WHITE (10 October 2026). It was cut first in a dark gown,
 * while every panel of the novel dresses her in the figure kit's pale muslin
 * (../panels/people.tsx), so a student met one Elizabeth in the gallery and
 * another in the key moments. She is dressed here as the panels dress her,
 * and as Jane's portrait dresses Jane; the sisters are told apart, as in the
 * panels, by Jane's ribbon bound round her hair and Elizabeth's dark eye.
 *
 * Seeds: 8101 (the ground), 8102 (the hair), 8103 (the gown).
 */

const P = placing(26, 4, 0.95)

const marks = once(() => {
  // The light is in front of her, where she is looking.
  const ground = portraitGround('pp-elizabeth', 8101, (x, y) =>
    clamp(0.1 + ((x - 70) / 250) * 0.95 - Math.max(0, (y - 240) / 260)),
  )
  const hair = hairUpCuts(8102)
  const folds = gownGathers(8103)
  const tucker = frill(TUCKER_SPINE, 2.6, 4.6)
  return { ground, hair, folds, tucker }
})

function ElizabethFigure({ uid }: { uid: string }) {
  const m = marks()
  const hairClip = `${uid}-pp-eb-hair`
  const gownClip = `${uid}-pp-eb-gown`
  return (
    <g>
      <defs>
        <clipPath id={hairClip}>
          <path d={HAIR_UP} />
        </clipPath>
        <clipPath id={gownClip}>
          <path d={GOWN} />
        </clipPath>
      </defs>
      {/* The ink halo that lifts the white figure off the lit ground. */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={WOMAN_HEAD} />
        <path d={HAIR_UP} />
        <path d={KNOT} />
        <path d={GOWN} />
      </g>
      {/* The white muslin gown, its folds cut in ink, a dark ribbon at the waist. */}
      <path d={GOWN} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path
        d={m.folds}
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
        strokeLinecap="round"
      />
      <g clipPath={`url(#${gownClip})`}>
        <path d={SASH} fill={INK} stroke={INK} strokeWidth={LINE.fine} />
      </g>
      <path
        d={SASH_BOW}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.hairline}
        strokeLinejoin="round"
      />
      <path d={SASH_KNOT} fill={INK} stroke={PAPER} strokeWidth={LINE.hairline} />
      <path d={WOMAN_HEAD} fill={PAPER} />
      <WomanNeckShadow id={`${uid}-pp-eb`} />
      <path d={NECKLINE} fill="none" stroke={INK} strokeWidth={LINE.fine} />
      <path d={m.tucker} fill="none" stroke={INK} strokeWidth={1} strokeLinecap="round" />
      {/* Dark hair drawn up to the knot. */}
      <path d={HAIR_UP} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.hair.strands} fill={PAPER} />
      </g>
      <path d={KNOT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.hair.knot} fill={PAPER} />
      <Curls />
      <EarCut {...WOMAN_EAR} />
      <WomanFeatures eye="bright" mouth="arch" />
    </g>
  )
}

function ElizabethPortrait({ uid }: ArtProps) {
  const m = marks()
  return (
    <>
      <path d={m.ground} fill={PAPER} />
      <g transform={P.transform}>
        <ElizabethFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const elizabethBennetArt: LinocutArt = { width: PW, height: PH, Draw: ElizabethPortrait }

const CHEEK = P.to(138, 124)
const EYE = P.to(WOMAN_EYE[0] + 9, WOMAN_EYE[1])

export const elizabethBennet: Portrait = {
  name: 'Elizabeth Bennet',
  art: elizabethBennetArt,
  alt: "A linocut portrait of Elizabeth Bennet in profile, facing right, drawn from Austen's description in Chapter 6: a young woman with a lit, plain face and a large dark eye with a glint in it and its lashes drawn, the corner of her mouth drawn up in a held-back smile. Her dark hair is drawn up to a knot at the back of her head, with small curls at her temple. She wears a white muslin gown cut round at the collarbone with a band of muslin along the neck, and a dark ribbon at the high waist. Two numbered red markers point to her face and her eye.",
  describedBy: [
    { phrase: 'hardly a good feature in her face', at: CHEEK },
    {
      phrase: 'uncommonly intelligent by the beautiful expression of her dark eyes',
      at: [EYE[0] + 76, EYE[1]],
      to: EYE,
    },
  ],
  where: 'Chapter 6',
  passage:
    'Mr. Darcy had at first scarcely allowed her to be pretty; he had looked at her without admiration at the ball; and when they next met, he looked at her only to criticise. But no sooner had he made it clear to himself and his friends that she had hardly a good feature in her face, than he began to find it was rendered uncommonly intelligent by the beautiful expression of her dark eyes.',
  note: 'Darcy looks at her “only to criticise”, and finds her eyes instead. In the same chapter he tells Miss Bingley he has been thinking of “a pair of fine eyes in the face of a pretty woman”, and Miss Bingley makes a joke of her “fine eyes” for chapters after.',
  artNote:
    'Austen gives her dark eyes, and Darcy’s first verdict on her face, and nothing else of her looks. Her hair, drawn up with curls at the temple, and her gown are the plain fashion of the 1810s.',
}
