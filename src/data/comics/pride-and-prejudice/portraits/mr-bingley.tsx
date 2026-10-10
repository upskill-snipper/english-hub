import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, rng } from '@/components/comics/linocut/carve'

import {
  Buttons,
  COAT,
  COAT_COLLAR,
  COLLAR_ROLL,
  CRAVAT,
  CRAVAT_FOLDS,
  CRAVAT_KNOT,
  EarCut,
  JAW,
  LAPEL_FAR,
  LAPEL_NEAR,
  MAN_HAIR,
  MAN_HAIR_PTS,
  PH,
  PW,
  SHIRT_POINT,
  VEST,
  YOUTH_EAR,
  YOUTH_HEAD,
  YouthEye,
  coatFolds,
  curlMarks,
  forelocks,
  napeShade,
  once,
  placing,
  portraitGround,
  PortraitRule,
} from './common'

/**
 * Mr Bingley, as Meryton first hears of him and sees him in Chapter 3, and
 * nothing else:
 *
 *   "The ladies were somewhat more fortunate, for they had the advantage of
 *   ascertaining from an upper window, that he wore a blue coat and rode a
 *   black horse."
 *
 *   "Mr. Bingley was good looking and gentleman-like; he had a pleasant
 *   countenance, and easy, unaffected manners."
 *
 * and, in Lady Lucas's report earlier in the chapter, "He was quite young,
 * wonderfully handsome, extremely agreeable".
 *
 * So: a young man of twenty-two in profile, facing left, cut from the youth's
 * head the plays give their young men (YOUTH_HEAD) because he is "quite
 * young", the eye open and the mouth turned up in an easy smile: the face of
 * someone pleased with everyone. His coat is the blue coat, cut in ink
 * because the print has no blue; his waistcoat is white, with its buttons,
 * and he wears a white neckcloth wound high with the points of his collar
 * against his jaw, as a gentleman did in the 1810s. His hair is dark, brushed
 * forward and curling, and he has whiskers to the lobe of the ear. The novel
 * describes none of these but the coat. The light is in front of him.
 * Nothing here comes from a film or stage production, and there is no red in
 * this plate.
 *
 * Seeds: 8401 (the ground), 8402 (the curls), 8403 (the forelocks), 8404
 * (the coat), 8405 (the nape).
 */

const P = placing(26, 6, 1.0, true)

/** His easy smile, in the youth's head: the corner of the mouth drawn up. */
const SMILE = 'M167.4 142.6Q163.4 144.8 158.4 141.2'
const SMILE_FOLD = 'M163 121Q155.6 130 158 139.6'
const NOSTRIL = 'M174.5 126C170.5 123.5 170.6 118.5 175.6 117.5'
const CHIN = 'M168.5 152.5C166 154 163.5 154 161.5 153'

const marks = once(() => {
  const ground = portraitGround('pp-bingley', 8401, (x, y) =>
    clamp(0.12 + ((262 - x) / 250) * 0.9 - Math.max(0, (y - 250) / 260)),
  )
  // Dark hair, brushed forward and curling: open rings cut in paper through
  // it, and the locks falling forward on the brow.
  const curls = curlMarks(rng(8402), MAN_HAIR_PTS, 46, [2.4, 4.2])
  const locks = forelocks(8403, 6)
  const folds = coatFolds(8404)
  const nape = napeShade(8405, 150, 118, 66, 120)
  return { ground, curls, locks, folds, nape }
})

function BingleyFigure({ uid }: { uid: string }) {
  const m = marks()
  const headClip = `${uid}-pp-bingley-head`
  const hairClip = `${uid}-pp-bingley-hair`
  return (
    <g>
      <defs>
        <clipPath id={headClip}>
          <path d={YOUTH_HEAD} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={MAN_HAIR} />
        </clipPath>
      </defs>
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={COAT} />
        <path d={YOUTH_HEAD} />
        <path d={MAN_HAIR} />
      </g>
      {/* "he wore a blue coat": in ink, its folds cut in paper. */}
      <path d={COAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.folds} fill={PAPER} />
      <path d={VEST} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <Buttons
        pts={[
          [160, 262],
          [163, 284],
          [166, 306],
          [168, 328],
        ]}
        r={2.4}
      />
      <path
        d={LAPEL_NEAR}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path
        d={LAPEL_FAR}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path d={YOUTH_HEAD} fill={PAPER} />
      <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.nape} strokeWidth={1.5} />
      </g>
      <path
        d={MAN_HAIR}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.curls} fill="none" stroke={PAPER} strokeWidth={1.1} strokeLinecap="round" />
      </g>
      <path d={m.locks} fill={INK} />
      <EarCut {...YOUTH_EAR} />
      <YouthEye look="open" brow={2.4} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d={NOSTRIL} strokeWidth={1.4} />
        <path d={SMILE} strokeWidth={1.7} />
        <path d={SMILE_FOLD} strokeWidth={0.9} />
        <path d={CHIN} strokeWidth={0.9} />
        <path d={JAW} strokeWidth={1.3} />
      </g>
      <path d={CRAVAT} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={CRAVAT_FOLDS} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      <path
        d={CRAVAT_KNOT}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.fine}
        strokeLinejoin="round"
      />
      <path
        d={SHIRT_POINT}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.fine}
        strokeLinejoin="round"
      />
      <path
        d={COAT_COLLAR}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path d={COLLAR_ROLL} fill="none" stroke={PAPER} strokeWidth={LINE.hairline} />
    </g>
  )
}

function BingleyPortrait({ uid }: ArtProps) {
  const m = marks()
  return (
    <>
      <path d={m.ground} fill={PAPER} />
      <g transform={P.transform}>
        <BingleyFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const mrBingleyArt: LinocutArt = { width: PW, height: PH, Draw: BingleyPortrait }

const CHEEK = P.to(142, 128)
const MOUTH = P.to(174, 142)
const COAT_AT = P.to(30, 296)

export const mrBingley: Portrait = {
  name: 'Mr Bingley',
  art: mrBingleyArt,
  alt: "A linocut portrait of Mr Bingley in profile, facing left, drawn from Austen's description in Chapter 3: a young man with a smooth, open face, his eye open and the corner of his mouth turned up in an easy smile. His dark hair is brushed forward and curling, with whiskers to the lobe of his ear. He wears a dark tail-coat with a high collar, a white waistcoat with a row of buttons, a white neckcloth wound high round his throat and the points of his shirt collar against his jaw. Three numbered red markers point to his face, his smile and his coat.",
  describedBy: [
    { phrase: 'good looking and gentleman-like', at: CHEEK },
    {
      phrase: 'a pleasant countenance, and easy, unaffected manners',
      at: [MOUTH[0] - 50, MOUTH[1] + 10],
      to: MOUTH,
    },
    { phrase: 'he wore a blue coat', at: COAT_AT },
  ],
  where: 'Chapter 3',
  note: 'Bingley is liked at once by everyone, and likes everyone back. The same easy, trusting temper lets Darcy talk him out of loving Jane.',
  artNote:
    'His blue coat is cut in ink, because the print cannot show blue. Austen does not describe his face or hair, so he is drawn plainly, young, with his hair worn as men wore it in the 1810s.',
}
