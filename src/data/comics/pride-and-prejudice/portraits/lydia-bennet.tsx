import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, ribbon } from '@/components/comics/linocut/carve'

import {
  BANDEAU_PTS,
  Bloom,
  CHEMISETTE,
  Curls,
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
  TEMPLE_CURLS,
  WOMAN_EAR,
  WOMAN_HEAD_OPEN,
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
 * Lydia Bennet, as the narrator introduces her in Chapter 9, and nothing
 * else:
 *
 *   "Lydia was a stout, well-grown girl of fifteen, with a fine complexion and
 *   good-humoured countenance; a favourite with her mother, whose affection
 *   had brought her into public at an early age. She had high animal
 *   spirits, and a sort of natural self-consequence, which the attentions of
 *   the officers, to whom her uncle's good dinners and her own easy manners
 *   recommended her, had increased into assurance."
 *
 * So: a girl of fifteen in profile, facing right, laughing, her head thrown
 * back a little and her mouth open, her eye creased with it ("high animal
 * spirits"), and the colour of her "fine complexion" printed as a flush high
 * on the cheekbone, well clear of the mouth. Her hair is dark and drawn up,
 * as a girl's was once she was "out", with a ribbon bound round it and curls
 * at the temple; her gown is white, filled to the foot of the neck by a
 * chemisette closed with a small frill, with a dark ribbon at the high waist.
 * She is drawn as the girl she is, head and shoulders, and nothing on the
 * card points at her figure. The novel describes none of the hair or the
 * dress. Nothing here comes from a film or stage production.
 *
 * RED IS THE FLUSH ON THE CHEEKBONE AND NOTHING ELSE: high on the cheek and
 * back towards the ear, well clear of the open mouth.
 *
 * Seeds: 8901 (the ground), 8902 (the hair), 8903 (the gown).
 */

const P = placing(24, 6, 0.95)
/** "high animal spirits": the head thrown back a little, laughing. */
const TOSS = -4

const marks = once(() => {
  const ground = portraitGround('pp-lydia', 8901, (x, y) =>
    clamp(0.12 + ((x - 70) / 250) * 0.9 - Math.max(0, (y - 250) / 260)),
  )
  const hair = hairUpCuts(8902)
  const folds = gownGathers(8903)
  const frillD = frill(FRILL_SPINE, 2.8, 4.6)
  const bandeau = ribbon(BANDEAU_PTS, 6.4, 0.3, false)
  return { ground, hair, folds, frillD, bandeau }
})

/** More curls than her sisters wear, clustered at the temple and over the brow. */
const CURLS: [number, number, number][] = [...TEMPLE_CURLS, [161, 70, 3.6], [124, 98, 4]]

function LydiaFigure({ uid }: { uid: string }) {
  const m = marks()
  const hairClip = `${uid}-pp-lb-hair`
  const gownClip = `${uid}-pp-lb-gown`
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
        <g transform={turn(TOSS)}>
          <path d={WOMAN_HEAD_OPEN} />
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
      <g transform={turn(TOSS)}>
        <path d={WOMAN_HEAD_OPEN} fill={PAPER} />
        <WomanNeckShadow id={`${uid}-pp-lb`} />
        {/* "a fine complexion": colour high on the cheekbone, clear of the mouth */}
        <Bloom at={[140, 120]} w={17} h={9.5} tilt={-6} />
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
        <Curls at={CURLS} />
        <EarCut {...WOMAN_EAR} />
        <WomanFeatures eye="laugh" mouth="open" brow="raised" />
      </g>
      <path d={CHEMISETTE} fill={PAPER} />
      <path d={NECKLINE} fill="none" stroke={INK} strokeWidth={LINE.fine} />
      <path d={m.frillD} fill="none" stroke={INK} strokeWidth={1.1} strokeLinecap="round" />
    </g>
  )
}

function LydiaPortrait({ uid }: ArtProps) {
  const m = marks()
  return (
    <>
      <path d={m.ground} fill={PAPER} />
      <g transform={P.transform}>
        <LydiaFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const lydiaBennetArt: LinocutArt = { width: PW, height: PH, Draw: LydiaPortrait }

const on = (x: number, y: number) => onTurnedHead(P, TOSS, x, y)
const FACE = on(132, 150)
const MOUTH = on(171, 139)

export const lydiaBennet: Portrait = {
  name: 'Lydia Bennet',
  art: lydiaBennetArt,
  alt: "A linocut portrait of Lydia Bennet in profile, facing right, drawn from Austen's description in Chapter 9: a girl of fifteen laughing, her head thrown back a little, her mouth open and her eye creased, with a small red flush high on her cheekbone. Her dark hair is drawn up to a knot with a pale ribbon bound round it and curls at her temple. She wears a white gown filled to the foot of her neck by a white chemisette closed with a small frill, and a dark ribbon at the high waist. Two numbered red markers point to her face and her laughing mouth.",
  describedBy: [
    { phrase: 'a fine complexion and good-humoured countenance', at: FACE },
    { phrase: 'She had high animal spirits', at: [MOUTH[0] + 50, MOUTH[1] + 4], to: MOUTH },
  ],
  where: 'Chapter 9',
  passage:
    "Lydia was a stout, well-grown girl of fifteen, with a fine complexion and good-humoured countenance; a favourite with her mother, whose affection had brought her into public at an early age. She had high animal spirits, and a sort of natural self-consequence, which the attentions of the officers, to whom her uncle's good dinners and her own easy manners recommended her, had increased into assurance.",
  note: 'The narrator gives the reasons for Lydia in the same breath as her looks: her mother’s favourite, brought out too young, and made bold by the officers’ attention. Everything she does later is already in this sentence.',
  artNote:
    'She is fifteen here, and drawn as a girl, head and shoulders, laughing. The colour of her complexion is the one red in the print; her hair and gown are the plain fashion of the 1810s.',
}
