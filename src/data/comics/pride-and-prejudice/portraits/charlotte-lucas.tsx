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
  SASH_LINES,
  SCOOP,
  TUCKER_SPINE,
  WOMAN_EAR,
  WOMAN_HEAD,
  WomanFeatures,
  WomanNeckShadow,
  coatFolds,
  frill,
  hairUpCuts,
  once,
  placing,
  portraitGround,
  PortraitRule,
} from './common'

/**
 * Charlotte Lucas, from what the novel says of her, which is her mind and
 * her age and never her face:
 *
 *   "The eldest of them, a sensible, intelligent young woman, about
 *   twenty-seven, was Elizabeth's intimate friend." (Chapter 5)
 *
 *   "I am not romantic you know. I never was. I ask only a comfortable home"
 *   (her own words to Elizabeth, Chapter 22)
 *
 * and, in the narrator's account of her accepting Mr Collins in the same
 * chapter, "at the age of twenty-seven, without having ever been handsome,
 * she felt all the good luck of it."
 *
 * So: a young woman of twenty-seven in profile, facing right, plainly drawn:
 * the face composed and steady, the eye level, the mouth closed, someone who
 * has thought a thing through and will not be talked out of it. Her hair is
 * dark and drawn up smoothly to a knot, with three small curls at the temple
 * and no ribbon; her gown is
 * dark, cut round at the collarbone with a plain band of muslin along it,
 * with a pale ribbon at the high waist. The novel describes none of the hair
 * or the dress. Nothing here comes from a film or stage production, and there
 * is no red in this plate.
 *
 * Seeds: 9101 (the ground), 9102 (the hair), 9103 (the gown).
 */

const P = placing(24, 4, 0.95)

/** Three small curls at the temple, and no more: the plainest way of the time. */
const TEMPLE: [number, number, number][] = [
  [150, 70, 3.6],
  [143, 79, 4],
  [135, 88, 3.6],
]

const marks = once(() => {
  // A plain grey daylight, even across the block.
  const ground = portraitGround('pp-charlotte', 9101, (x, y) =>
    clamp(0.16 + ((x - 70) / 260) * 0.75 - Math.max(0, (y - 250) / 260)),
  )
  const hair = hairUpCuts(9102)
  const folds = coatFolds(9103)
  const tucker = frill(TUCKER_SPINE, 1.8, 6)
  return { ground, hair, folds, tucker }
})

function CharlotteFigure({ uid }: { uid: string }) {
  const m = marks()
  const hairClip = `${uid}-pp-cl-hair`
  const gownClip = `${uid}-pp-cl-gown`
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
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={WOMAN_HEAD} />
        <path d={HAIR_UP} />
        <path d={KNOT} />
      </g>
      <path d={GOWN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.folds} fill={PAPER} />
      <path d={SCOOP} fill={PAPER} />
      <path d={NECKLINE} fill="none" stroke={INK} strokeWidth={LINE.fine} />
      <path d={m.tucker} fill="none" stroke={INK} strokeWidth={1} strokeLinecap="round" />
      <g clipPath={`url(#${gownClip})`}>
        <path d={SASH} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path d={SASH_LINES} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      </g>
      <path d={WOMAN_HEAD} fill={PAPER} />
      <WomanNeckShadow id={`${uid}-pp-cl`} />
      <path d={HAIR_UP} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.hair.strands} fill={PAPER} />
      </g>
      <path d={KNOT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.hair.knot} fill={PAPER} />
      <Curls at={TEMPLE} />
      <EarCut {...WOMAN_EAR} />
      <WomanFeatures eye="open" mouth="closed" />
    </g>
  )
}

function CharlottePortrait({ uid }: ArtProps) {
  const m = marks()
  return (
    <>
      <path d={m.ground} fill={PAPER} />
      <g transform={P.transform}>
        <CharlotteFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const charlotteLucasArt: LinocutArt = { width: PW, height: PH, Draw: CharlottePortrait }

const CHEEK = P.to(138, 124)
const MOUTH = P.to(170, 137)

export const charlotteLucas: Portrait = {
  name: 'Charlotte Lucas',
  art: charlotteLucasArt,
  alt: 'A linocut portrait of Charlotte Lucas in profile, facing right, drawn from what Austen says of her in Chapters 5 and 22: a young woman of twenty-seven, plainly drawn, her face composed and steady, her eye level and her mouth closed. Her dark hair is drawn up smoothly to a knot, with three small curls at her temple and no ribbon. She wears a dark gown cut round at the collarbone with a plain band of muslin along it, and a pale ribbon at the high waist. Two numbered red markers point to her face and her closed mouth.',
  describedBy: [
    { phrase: 'a sensible, intelligent young woman, about twenty-seven', at: CHEEK },
    { phrase: 'I ask only a comfortable home', at: [MOUTH[0] + 52, MOUTH[1] + 10], to: MOUTH },
  ],
  where: 'Chapters 5 and 22',
  note: 'Charlotte knows exactly what she is choosing. At twenty-seven, “without having ever been handsome” and with little fortune, she takes Mr Collins for the home he can give her, and tells Elizabeth so plainly.',
  artNote:
    'Austen describes Charlotte’s mind and her age, and never her face, so she is drawn plainly. Her hair and gown are the plain fashion of the 1810s.',
}
