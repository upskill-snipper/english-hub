import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, ribbon } from '@/components/comics/linocut/carve'

import {
  BANDEAU_PTS,
  CHEMISETTE,
  EarCut,
  FRILL_SPINE,
  GOWN,
  HAIR_UP,
  KNOT,
  NECKLINE,
  PH,
  PW,
  SASH,
  SASH_BOW,
  SASH_KNOT,
  WOMAN_EAR,
  WOMAN_EYE,
  WOMAN_HEAD,
  WomanFeatures,
  WomanNeckShadow,
  frill,
  hairUpCuts,
  once,
  onTurnedHead,
  gownGathers,
  placing,
  portraitGround,
  PortraitRule,
  turn,
} from './common'

/**
 * Georgiana Darcy, as Elizabeth first meets her at the inn at Lambton in
 * Chapter 44, and nothing else:
 *
 *   "She was less handsome than her brother, but there was sense and good
 *   humour in her face, and her manners were perfectly unassuming and
 *   gentle."
 *
 * and, a few lines earlier, "Since her being at Lambton, she had heard that
 * Miss Darcy was exceedingly proud; but the observation of a very few
 * minutes convinced her, that she was only exceedingly shy."
 *
 * So: a girl of sixteen in profile, facing left, her head bowed a little and
 * her eyes lowered, shy, with a small smile: the "sense and good humour" in
 * a face that does not push itself forward. Her hair is dark, drawn up to a
 * knot with a ribbon bound round it, and no curls; her gown is white, filled
 * to the foot of the neck by a chemisette closed with a small frill, as a
 * girl's was, with a dark ribbon at the high waist. She is drawn as a girl,
 * head and shoulders. The novel describes none of the hair or the dress.
 * Nothing here comes from a film or stage production, and there is no red in
 * this plate.
 *
 * Seeds: 8801 (the ground), 8802 (the hair), 8803 (the gown).
 */

const P = placing(28, 4, 0.95, true)
/** "only exceedingly shy": the head bowed at the neck. */
const BOW = 7

const marks = once(() => {
  const ground = portraitGround('pp-georgiana', 8801, (x, y) =>
    clamp(0.14 + ((262 - x) / 250) * 0.8 - Math.max(0, (y - 250) / 260)),
  )
  const hair = hairUpCuts(8802)
  const folds = gownGathers(8803)
  const frillD = frill(FRILL_SPINE, 2.8, 4.6)
  const bandeau = ribbon(BANDEAU_PTS, 6.4, 0.3, false)
  return { ground, hair, folds, frillD, bandeau }
})

function GeorgianaFigure({ uid }: { uid: string }) {
  const m = marks()
  const hairClip = `${uid}-pp-gd-hair`
  const gownClip = `${uid}-pp-gd-gown`
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
        <path d={GOWN} />
        <g transform={turn(BOW)}>
          <path d={WOMAN_HEAD} />
          <path d={HAIR_UP} />
          <path d={KNOT} />
        </g>
      </g>
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
      <g transform={turn(BOW)}>
        <path d={WOMAN_HEAD} fill={PAPER} />
        <WomanNeckShadow id={`${uid}-pp-gd`} />
        <path
          d={HAIR_UP}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <g clipPath={`url(#${hairClip})`}>
          <path d={m.hair.strands} fill={PAPER} />
        </g>
        <path d={KNOT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.hair.knot} fill={PAPER} />
        <path d={m.bandeau} fill={PAPER} stroke={INK} strokeWidth={LINE.hairline} />
        <EarCut {...WOMAN_EAR} />
        <WomanFeatures eye="down" mouth="smile" />
      </g>
      {/* The chemisette, filled to the foot of the neck and closed by a frill. */}
      <path d={CHEMISETTE} fill={PAPER} />
      <path d={NECKLINE} fill="none" stroke={INK} strokeWidth={LINE.fine} />
      <path d={m.frillD} fill="none" stroke={INK} strokeWidth={1.1} strokeLinecap="round" />
    </g>
  )
}

function GeorgianaPortrait({ uid }: ArtProps) {
  const m = marks()
  return (
    <>
      <path d={m.ground} fill={PAPER} />
      <g transform={P.transform}>
        <GeorgianaFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const georgianaDarcyArt: LinocutArt = { width: PW, height: PH, Draw: GeorgianaPortrait }

const on = (x: number, y: number) => onTurnedHead(P, BOW, x, y)
const CHEEK = on(136, 126)
const EYE = on(WOMAN_EYE[0] + 9, WOMAN_EYE[1] + 1)

export const georgianaDarcy: Portrait = {
  name: 'Georgiana Darcy',
  art: georgianaDarcyArt,
  alt: "A linocut portrait of Georgiana Darcy in profile, facing left, drawn from Austen's description in Chapter 44: a girl of sixteen with her head bowed a little and her eyes lowered, shy, with a small smile. Her dark hair is drawn up to a knot at the back of her head with a pale ribbon bound round it. She wears a white gown filled to the foot of her neck by a white chemisette closed with a small frill, and a dark ribbon at the high waist. Two numbered red markers point to her face and her lowered eyes.",
  describedBy: [
    { phrase: 'sense and good humour in her face', at: CHEEK },
    {
      phrase: 'her manners were perfectly unassuming and gentle',
      at: [EYE[0] - 70, EYE[1] - 4],
      to: EYE,
    },
  ],
  where: 'Chapter 44',
  passage:
    'She was less handsome than her brother, but there was sense and good humour in her face, and her manners were perfectly unassuming and gentle.',
  note: 'Elizabeth has heard that Miss Darcy is “exceedingly proud”. A few minutes with her show that she is only “exceedingly shy”: one more report in this novel that turns out to be wrong.',
  artNote:
    'Austen says she was tall, which a print of her head and shoulders cannot show. She is sixteen and drawn as a girl, in a white gown with a chemisette, her hair and dress the plain fashion of the 1810s.',
}
