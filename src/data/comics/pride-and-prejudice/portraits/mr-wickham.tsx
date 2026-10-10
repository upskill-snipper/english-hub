import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { clamp, gouge, n } from '@/components/comics/linocut/carve'

import {
  Buttons,
  COAT,
  COAT_COLLAR,
  COLLAR_ROLL,
  CRAVAT,
  CRAVAT_FOLDS,
  EarCut,
  JAW,
  MAN_EAR,
  MAN_HAIR,
  MAN_HEAD,
  ManBrow,
  ManEye,
  ManNoseAndMouth,
  PH,
  PW,
  SHIRT_POINT,
  brushedForward,
  forelocks,
  neckShade,
  once,
  placing,
  portraitGround,
  PortraitRule,
  spline,
} from './common'

/**
 * Mr Wickham, as the Bennet sisters first see him in the street at Meryton
 * in Chapter 15, and nothing else:
 *
 *   "This was exactly as it should be; for the young man wanted only
 *   regimentals to make him completely charming. His appearance was greatly
 *   in his favour; he had all the best part of beauty, a fine countenance, a
 *   good figure, and very pleasing address."
 *
 * So: a young man in profile, facing right, at ease and smiling, the eye
 * open and lively, the corner of the mouth drawn up: the "very pleasing
 * address" that makes everyone believe him. He is drawn in the regimentals
 * his commission brings him: the officers are "red coats" in the novel
 * ("the cluster of red coats", Chapter 18; Mrs Bennet's "I remember the time
 * when I liked a red coat myself", Chapter 7), so his coat is printed in the
 * spot colour, as every officer's is in this set. The rest of the uniform is
 * the plain regimentals of a militia officer of the 1810s, which the novel
 * does not describe: dark facings on the standing collar and the lapels, two
 * rows of buttons, a fringed epaulette on the shoulder, and a white
 * neckcloth. His hair is dark, brushed forward, with whiskers to the lobe of
 * the ear. Nothing here comes from a film or stage production.
 *
 * RED IS THE COAT AND NOTHING ELSE: a broad flat shape with dark facings
 * between it and his face and hands, never a mark near his mouth or chin.
 *
 * Seeds: 8701 (the ground), 8702 (the hair), 8703 (the forelocks), 8704
 * (the nape).
 */

const P = placing(28, 4, 1.0)

/** The lapels of the regimental coat, buttoned back, in the dark of the facings. */
const FACING_NEAR = spline([
  [96, 234, 1],
  [130, 240, 1],
  [134, 286],
  [136, 336, 1],
  [104, 336, 1],
  [100, 292],
  [94, 260, 1],
  [84, 254, 1],
])
const FACING_FAR = spline([
  [150, 236, 1],
  [186, 242, 1],
  [196, 256, 1],
  [188, 262, 1],
  [194, 300],
  [198, 336, 1],
  [170, 336, 1],
  [160, 286],
])
/** The front of the coat between the lapels, buttoned to the neckcloth. */
const FRONT = 'M130 240L150 236L160 286L170 336L136 336L134 286Z'
/** The epaulette: a strap from the collar to the point of the shoulder, and its fringe. */
const STRAP = spline([
  [70, 236, 1],
  [34, 246],
  [14, 258, 1],
  [20, 272, 1],
  [40, 262],
  [74, 250, 1],
])
const FRINGE = (() => {
  let d = ''
  for (let i = 0; i < 9; i++) {
    const x0 = 13 + i * 3.4
    const y0 = 266 - i * 1.4
    d += gouge(x0, y0, x0 - 3, y0 + 22, 1.4, 0.3)
  }
  return d
})()

const marks = once(() => {
  const ground = portraitGround('pp-wickham', 8701, (x, y) =>
    clamp(0.1 + ((x - 90) / 240) * 0.95 - Math.max(0, (y - 250) / 260)),
  )
  const hair = brushedForward(8702)
  const locks = forelocks(8703)
  const nape = neckShade(8704)
  // Folds in the red cloth, cut in ink: the shadow under the arm and across the back.
  const folds =
    gouge(24, 280, 10, 334, 2, 2) +
    gouge(46, 276, 40, 334, 1.4, 1.5) +
    gouge(212, 280, 226, 334, 1.8, -1.6) +
    gouge(68, 272, 76, 334, 1, 0.8)
  return { ground, hair, locks, nape, folds }
})

function WickhamFigure({ uid }: { uid: string }) {
  const m = marks()
  const headClip = `${uid}-pp-wickham-head`
  const hairClip = `${uid}-pp-wickham-hair`
  return (
    <g>
      <defs>
        <clipPath id={headClip}>
          <path d={MAN_HEAD} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={MAN_HAIR} />
        </clipPath>
      </defs>
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={COAT} />
        <path d={MAN_HEAD} />
        <path d={MAN_HAIR} />
      </g>
      {/* "wanted only regimentals": the red coat. */}
      <path d={COAT} fill={RED} stroke={INK} strokeWidth={LINE.fine} />
      <path d={m.folds} fill={INK} />
      <path d={FRONT} fill={RED} stroke={INK} strokeWidth={LINE.fine} />
      <path
        d={FACING_NEAR}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.fine}
        strokeLinejoin="round"
      />
      <path
        d={FACING_FAR}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.fine}
        strokeLinejoin="round"
      />
      <Buttons
        pts={[
          [126, 252],
          [128, 274],
          [130, 296],
          [132, 318],
          [156, 250],
          [161, 272],
          [166, 294],
          [170, 316],
        ]}
        r={2.6}
      />
      <path d={MAN_HEAD} fill={PAPER} />
      <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.nape} strokeWidth={1.6} />
      </g>
      <path
        d={MAN_HAIR}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.hair} fill={PAPER} />
      </g>
      <path d={m.locks} fill={INK} />
      <EarCut outline={MAN_EAR.outline} curl={MAN_EAR.curl} />
      <ManBrow w={2.6} raise={1} />
      <ManEye look="open" />
      <circle cx={156.6} cy={99.2} r={0.9} fill={PAPER} />
      <ManNoseAndMouth smile />
      <path d={JAW} fill="none" stroke={INK} strokeWidth={1.3} strokeLinecap="round" />
      <path d={CRAVAT} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={CRAVAT_FOLDS} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      <path
        d={SHIRT_POINT}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.fine}
        strokeLinejoin="round"
      />
      {/* The standing collar in the dark facing colour. */}
      <path
        d={COAT_COLLAR}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path d={COLLAR_ROLL} fill="none" stroke={PAPER} strokeWidth={LINE.hairline} />
      {/* The epaulette on the near shoulder, cut in paper. */}
      <path d={STRAP} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path d={`M${n(30)} 250L${n(62)} 240`} stroke={INK} strokeWidth={LINE.hairline} />
      <path d={FRINGE} fill={PAPER} stroke={INK} strokeWidth={0.5} />
    </g>
  )
}

function WickhamPortrait({ uid }: ArtProps) {
  const m = marks()
  return (
    <>
      <path d={m.ground} fill={PAPER} />
      <g transform={P.transform}>
        <WickhamFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const mrWickhamArt: LinocutArt = { width: PW, height: PH, Draw: WickhamPortrait }

const CHEEK = P.to(140, 130)
const MOUTH = P.to(176, 148)
const COAT_AT = P.to(220, 300)

export const mrWickham: Portrait = {
  name: 'Mr Wickham',
  art: mrWickhamArt,
  alt: "A linocut portrait of Mr Wickham in profile, facing right, drawn from Austen's description in Chapter 15: a young man at ease, his eye open and lively and the corner of his mouth drawn up in a smile. His dark hair is brushed forward, with whiskers to the lobe of his ear. He wears an officer's coat printed in red, with a dark standing collar and dark lapels buttoned back with two rows of pale buttons, a pale fringed epaulette on his shoulder, and a white neckcloth with the points of his shirt collar against his jaw. Three numbered red markers point to his red coat, his face and his smile.",
  describedBy: [
    {
      phrase: 'wanted only regimentals to make him completely charming',
      at: [COAT_AT[0] + 40, COAT_AT[1] - 24],
      to: COAT_AT,
    },
    { phrase: 'all the best part of beauty, a fine countenance', at: CHEEK },
    { phrase: 'very pleasing address', at: [MOUTH[0] + 48, MOUTH[1] + 6], to: MOUTH },
  ],
  where: 'Chapter 15',
  passage:
    'This was exactly as it should be; for the young man wanted only regimentals to make him completely charming. His appearance was greatly in his favour; he had all the best part of beauty, a fine countenance, a good figure, and very pleasing address.',
  note: 'Everything in this description is surface, and the novel tests every word of it. His “pleasing address” is how he wins Elizabeth’s trust for a story about Darcy that is not true.',
  artNote:
    'When this passage describes him he has no regimentals yet. He is drawn in the red coat his commission gives him: by the Netherfield ball Elizabeth looks for him “among the cluster of red coats” (Chapter 18).',
}
