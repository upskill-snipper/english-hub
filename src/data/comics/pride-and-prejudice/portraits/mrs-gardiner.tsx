import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, n, ribbon, rng } from '@/components/comics/linocut/carve'

import {
  BONNET_BRIM,
  BONNET_CROWN,
  BONNET_LINING,
  BONNET_RIBBON,
  Curls,
  GOWN,
  HAIR_UP,
  NECKLINE,
  PH,
  PW,
  SASH,
  SASH_LINES,
  SCOOP,
  TUCKER_SPINE,
  WOMAN_HEAD,
  WomanFeatures,
  WomanNeckShadow,
  coatFolds,
  frill,
  once,
  placing,
  portraitGround,
  PortraitRule,
} from './common'

/**
 * Mrs Gardiner, as the novel introduces her when she comes to Longbourn for
 * Christmas in Chapter 25, and nothing else:
 *
 *   "Mrs. Gardiner, who was several years younger than Mrs. Bennet and Mrs.
 *   Philips, was an amiable, intelligent, elegant woman, and a great
 *   favourite with all her Longbourn nieces."
 *
 * So: a married woman in profile, facing right, kind and composed, her eye
 * open and a warm smile at the corner of her mouth. She is drawn dressed for
 * walking out, as she is on the tour of Derbyshire with Elizabeth that brings
 * them to Pemberley (Chapters 42 and 43): a bonnet with a deep brim standing
 * forward round her face and its pale lining showing inside it, tied with a
 * dark ribbon under the chin, a little of her dark hair curling at the brow
 * under it; a dark gown cut round at the
 * collarbone with a band of muslin, and a pale ribbon at the high waist. The
 * novel describes none of the dress. Nothing here comes from a film or stage
 * production, and there is no red in this plate.
 *
 * Seeds: 9301 (the ground), 9302 (the bonnet), 9303 (the gown).
 */

const P = placing(22, 8, 0.95)

/** The curls that show at the brow under the brim. */
const BROW_CURLS: [number, number, number][] = [
  [158, 64, 3.6],
  [152, 70, 4.2],
  [145, 78, 4.2],
]

const marks = once(() => {
  // Daylight out of doors, in front of her.
  const ground = portraitGround('pp-mrs-gardiner', 9301, (x, y) =>
    clamp(0.16 + ((x - 70) / 250) * 0.85 - Math.max(0, (y - 250) / 260)),
  )
  // The silk of the bonnet: fine cuts along the brim, following its curve,
  // and the gathers of the crown.
  const r = rng(9302)
  let straw = ''
  for (let i = 0; i < 7; i++) {
    const t = (i + 0.5) / 7
    const ax = 106 + t * 8
    const ay = 128 - t * 14
    const cx = 128 + t * 18
    const cy = 30 + t * 18
    const bx = 186 - t * 22
    const by = 24 + t * 18
    straw += `M${n(ax)} ${n(ay)}Q${n(cx + between(r, -2, 2))} ${n(cy)} ${n(bx)} ${n(by)}`
  }
  let crown = ''
  for (let i = 0; i < 6; i++) {
    const x = 52 + i * 10 + between(r, -2, 2)
    crown += `M${n(x)} ${n(36 + i * 2)}Q${n(x - 8)} ${n(80)} ${n(x - 2 + i * 2)} ${n(124 - i * 3)}`
  }
  const folds = coatFolds(9303)
  const tucker = frill(TUCKER_SPINE, 2.4, 4.8)
  const lining = ribbon(BONNET_LINING, 8, 0.25)
  return { ground, straw, crown, folds, tucker, lining }
})

function MrsGardinerFigure({ uid }: { uid: string }) {
  const m = marks()
  const brimClip = `${uid}-pp-mg-brim`
  const crownClip = `${uid}-pp-mg-crown`
  const gownClip = `${uid}-pp-mg-gown`
  return (
    <g>
      <defs>
        <clipPath id={brimClip}>
          <path d={BONNET_BRIM} />
        </clipPath>
        <clipPath id={crownClip}>
          <path d={BONNET_CROWN} />
        </clipPath>
        <clipPath id={gownClip}>
          <path d={GOWN} />
        </clipPath>
      </defs>
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={WOMAN_HEAD} />
        <path d={BONNET_CROWN} />
        <path d={BONNET_BRIM} />
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
      <WomanNeckShadow id={`${uid}-pp-mg`} />
      {/* Her dark hair, drawn up under the bonnet, shows at the nape and the brow. */}
      <path d={HAIR_UP} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <Curls at={BROW_CURLS} />
      {/* The bonnet, of dark silk: its soft crown, then the brim standing forward
          round her face, its pale lining showing inside it. */}
      <path d={BONNET_CROWN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <g clipPath={`url(#${crownClip})`}>
        <path d={m.crown} fill="none" stroke={PAPER} strokeWidth={LINE.hairline} />
      </g>
      <path
        d={BONNET_BRIM}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <g clipPath={`url(#${brimClip})`}>
        <path d={m.straw} fill="none" stroke={PAPER} strokeWidth={LINE.hairline} />
        <path d={m.lining} fill={PAPER} />
      </g>
      <path d={BONNET_RIBBON} fill={INK} stroke={PAPER} strokeWidth={LINE.hairline} />
      <path
        d="M146 186C136 182 128 190 134 196C138 198 142 194 144 190M146 186C154 182 162 188 158 195C154 198 150 194 148 190"
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.hairline}
        strokeLinejoin="round"
      />
      <WomanFeatures eye="open" mouth="smile" />
    </g>
  )
}

function MrsGardinerPortrait({ uid }: ArtProps) {
  const m = marks()
  return (
    <>
      <path d={m.ground} fill={PAPER} />
      <g transform={P.transform}>
        <MrsGardinerFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const mrsGardinerArt: LinocutArt = { width: PW, height: PH, Draw: MrsGardinerPortrait }

const CHEEK = P.to(140, 124)
const MOUTH = P.to(170, 136)

export const mrsGardiner: Portrait = {
  name: 'Mrs Gardiner',
  art: mrsGardinerArt,
  alt: "A linocut portrait of Mrs Gardiner in profile, facing right, drawn from Austen's description in Chapter 25: a married woman, kind and composed, her eye open and a warm smile at the corner of her mouth. She is dressed for walking out, in a dark bonnet with a deep brim standing forward round her face and its pale lining showing inside it, tied with a dark ribbon in a bow under her chin, a little dark hair curling at her brow. She wears a dark gown cut round at the collarbone with a band of muslin, and a pale ribbon at the high waist. Two numbered red markers point to her face and her smile.",
  describedBy: [
    { phrase: 'an amiable, intelligent, elegant woman', at: CHEEK },
    {
      phrase: 'a great favourite with all her Longbourn nieces',
      at: [MOUTH[0] + 52, MOUTH[1] + 12],
      to: MOUTH,
    },
  ],
  where: 'Chapter 25',
  passage:
    'Mrs. Gardiner, who was several years younger than Mrs. Bennet and Mrs. Philips, was an amiable, intelligent, elegant woman, and a great favourite with all her Longbourn nieces.',
  note: 'She is the sensible adult that Elizabeth’s mother is not. She warns Elizabeth against Wickham, takes her to Derbyshire, and her letter tells her what Darcy has done for Lydia.',
  artNote:
    'Austen describes her character and not her looks. She is drawn plainly, in the bonnet and gown of a married woman of the 1810s, dressed for the tour that brings her to Pemberley.',
}
