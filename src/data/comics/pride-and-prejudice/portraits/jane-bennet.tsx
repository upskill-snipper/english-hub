import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, ribbon } from '@/components/comics/linocut/carve'

import {
  BANDEAU_PTS,
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
  hairUpCuts,
  once,
  gownGathers,
  placing,
  portraitGround,
  PortraitRule,
} from './common'

/**
 * Jane Bennet, as the people who look at her see her, and nothing else.
 * Austen never describes her features. She gives the effect of them, three
 * times:
 *
 *   Mr Darcy, at the Meryton assembly: "You are dancing with the only
 *   handsome girl in the room" (Chapter 3; the first word is italic in the
 *   edition, so the marker quotes the words after it).
 *
 *   Elizabeth, at the Netherfield ball: "Jane met her with a smile of such
 *   sweet complacency, a glow of such happy expression, as sufficiently
 *   marked how well she was satisfied with the occurrences of the evening."
 *   (Chapter 18)
 *
 *   Mr Darcy again, in his letter, of the same ball: "the serenity of your
 *   sister's countenance and air was such, as might have given the most
 *   acute observer, a conviction that, however amiable her temper, her heart
 *   was not likely to be easily touched." (Chapter 35)
 *
 * So: a young woman of twenty-two in profile, facing left, her face lit, calm
 * and level, the eye open and steady, the mouth in a small, contented smile.
 * Nothing in the face is strained: the serenity Darcy misreads is the whole
 * of what is drawn. Her hair is dark, drawn up to a knot with curls at the
 * temple and a ribbon bound round it; her gown is white, with a band of
 * muslin along its round neck and a dark ribbon at the high waist. The novel
 * describes none of the hair or the dress. Nothing here comes from a film or
 * stage production, and there is no red in this plate.
 *
 * Seeds: 8301 (the ground), 8302 (the hair), 8303 (the gown).
 */

const P = placing(28, 4, 0.95, true)

const marks = once(() => {
  // A soft, even light in front of her (on the left, as she faces left).
  const ground = portraitGround('pp-jane', 8301, (x, y) =>
    clamp(0.12 + ((260 - x) / 250) * 0.8 - Math.max(0, (y - 240) / 260)),
  )
  const hair = hairUpCuts(8302)
  const folds = gownGathers(8303)
  const tucker = frill(TUCKER_SPINE, 2.6, 4.6)
  const bandeau = ribbon(BANDEAU_PTS, 6.4, 0.3, false)
  return { ground, hair, folds, tucker, bandeau }
})

function JaneFigure({ uid }: { uid: string }) {
  const m = marks()
  const hairClip = `${uid}-pp-jb-hair`
  const gownClip = `${uid}-pp-jb-gown`
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
      {/* The white gown, its folds cut in ink. */}
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
      <WomanNeckShadow id={`${uid}-pp-jb`} />
      <path d={NECKLINE} fill="none" stroke={INK} strokeWidth={LINE.fine} />
      <path d={m.tucker} fill="none" stroke={INK} strokeWidth={1} strokeLinecap="round" />
      {/* Dark hair drawn up to the knot, a ribbon bound round it. */}
      <path d={HAIR_UP} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.hair.strands} fill={PAPER} />
      </g>
      <path d={KNOT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.hair.knot} fill={PAPER} />
      <path d={m.bandeau} fill={PAPER} stroke={INK} strokeWidth={LINE.hairline} />
      <Curls k={0.9} />
      <EarCut {...WOMAN_EAR} />
      <WomanFeatures eye="open" mouth="smile" />
    </g>
  )
}

function JanePortrait({ uid }: ArtProps) {
  const m = marks()
  return (
    <>
      <path d={m.ground} fill={PAPER} />
      <g transform={P.transform}>
        <JaneFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const janeBennetArt: LinocutArt = { width: PW, height: PH, Draw: JanePortrait }

const CHEEK = P.to(136, 126)
const EYE = P.to(WOMAN_EYE[0] + 9, WOMAN_EYE[1])
const MOUTH = P.to(170, 137)

export const janeBennet: Portrait = {
  name: 'Jane Bennet',
  art: janeBennetArt,
  alt: 'A linocut portrait of Jane Bennet in profile, facing left, drawn from what Darcy and Elizabeth see in her in Chapters 3, 18 and 35: a young woman with a lit, calm face, her eye open and steady and her mouth in a small, contented smile. Her dark hair is drawn up to a knot at the back of her head, with curls at her temple and a pale ribbon bound round it. She wears a white gown with a band of muslin along its round neck and a dark ribbon at the high waist. Three numbered red markers point to her face, her smile and her eye.',
  describedBy: [
    { phrase: 'the only handsome girl in the room', at: CHEEK },
    { phrase: 'a smile of such sweet complacency', at: [MOUTH[0] - 52, MOUTH[1] + 8], to: MOUTH },
    {
      phrase: "the serenity of your sister's countenance and air",
      at: [EYE[0] - 70, EYE[1]],
      to: EYE,
    },
  ],
  where: 'Chapters 3, 18 and 35',
  note: 'Her calm is her character and her misfortune. Watching her at the Netherfield ball, Darcy decides that she does not care for Bingley, and parts them.',
  artNote:
    'Austen gives the effect of Jane’s looks and never the looks themselves, so her face is drawn plainly, and her white gown and drawn-up hair are the fashion of the 1810s.',
}
