import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, gouge } from '@/components/comics/linocut/carve'

import {
  COAT,
  COAT_COLLAR,
  COLLAR_ROLL,
  CRAVAT,
  CRAVAT_FOLDS,
  EarCut,
  HAND_DIGITS,
  HAND_LINES,
  HAND_PALM,
  Hand,
  LAPEL_FAR,
  LAPEL_NEAR,
  MAN_EAR,
  MAN_HAIR,
  ManBrow,
  ManEye,
  PH,
  PW,
  SHIRT_POINT,
  TOM_HEAD,
  VEST,
  brushedForward,
  coatFolds,
  handOnBreast,
  neckShade,
  once,
  onTurnedHead,
  placing,
  portraitGround,
  PortraitRule,
  spline,
  turn,
} from './common'

/**
 * Mr Collins, as the Bennets first see him at Longbourn in Chapter 13, and
 * nothing else:
 *
 *   "He was a tall, heavy looking young man of five and twenty. His air was
 *   grave and stately, and his manners were very formal."
 *
 * So: a big young man in profile, facing left, cut from the head with the
 * heavier jaw (TOM_HEAD, the Gatsby portraits' own) for "heavy looking", and
 * drawn large in the block for "tall". He is in the middle of a bow, as he
 * is through most of his visit: the head inclined at the neck, the eye
 * lowered, the brow lifted and the mouth set ("grave and stately"), and one
 * hand laid flat on his breast, its fingers apart ("very formal"). He is a
 * clergyman, so he wears the plain dress of a country clergyman of the
 * 1810s: a black coat and black waistcoat, a white neckcloth, and the two
 * white bands at the throat. His hair is dark, short and combed down. The
 * novel describes none of the dress. Nothing here comes from a film or stage
 * production, and there is no red in this plate.
 *
 * Seeds: 9001 (the ground), 9002 (the hair), 9003 (the coat), 9004 (the
 * nape).
 */

const P = placing(20, 4, 1.04, true)
/** "very formal": the head inclined in a bow. */
const BOW = 8

/** His features, in the frame of TOM_HEAD (the Gatsby portraits' Tom's, which are cut there). */
const FEATURES = {
  nostril: 'M172.5 128C168.5 125.5 168.5 120 174 119',
  mouth: 'M169.8 148.4L160.4 148.8',
  fold: 'M165.4 125Q160 134 161 146',
  chin: 'M168.4 159.4Q164.6 161.2 160.6 159.8',
  jaw: 'M171.5 188C152 197 128 190 116 172C110 162 108 152 108 144',
}

/** The two white bands of a clergyman, hanging from the neckcloth at the throat. */
const BANDS =
  spline([
    [146, 236, 1],
    [154, 236, 1],
    [156, 268, 1],
    [146, 268, 1],
  ]) +
  spline([
    [156, 236, 1],
    [164, 235, 1],
    [168, 266, 1],
    [158, 267, 1],
  ])

/** His sleeve, from the foot of the frame up to the hand on his breast. */
const SLEEVE = spline([
  [50, 352, 1],
  [80, 336],
  [106, 320, 1],
  [130, 326],
  [134, 352, 1],
])
const HAND = handOnBreast([118, 320], 14, 0.84)

const marks = once(() => {
  const ground = portraitGround('pp-collins', 9001, (x, y) =>
    clamp(0.12 + ((262 - x) / 250) * 0.9 - Math.max(0, (y - 250) / 260)),
  )
  const hair = brushedForward(9002, undefined, 150)
  const folds = coatFolds(9003)
  const nape = neckShade(9004)
  // The black waistcoat, its edge and its buttons cut in paper.
  const vest = gouge(150, 250, 160, 334, 0.6) + gouge(140, 252, 146, 334, 0.5)
  return { ground, hair, folds, nape, vest }
})

function CollinsFigure({ uid }: { uid: string }) {
  const m = marks()
  const headClip = `${uid}-pp-collins-head`
  const hairClip = `${uid}-pp-collins-hair`
  return (
    <g>
      <defs>
        <clipPath id={headClip}>
          <path d={TOM_HEAD} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={MAN_HAIR} />
        </clipPath>
      </defs>
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={COAT} />
        <g transform={turn(BOW)}>
          <path d={TOM_HEAD} />
          <path d={MAN_HAIR} />
        </g>
      </g>
      {/* The black coat and black waistcoat of a clergyman. */}
      <path d={COAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.folds} fill={PAPER} />
      <path d={VEST} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <path d={m.vest} fill={PAPER} />
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
      <g transform={turn(BOW)}>
        <path d={TOM_HEAD} fill={PAPER} />
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
        <EarCut outline={MAN_EAR.outline} curl={MAN_EAR.curl} />
        <ManBrow w={2.8} raise={2} />
        <ManEye look="down" />
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          <path d={FEATURES.nostril} strokeWidth={1.5} />
          <path d={FEATURES.fold} strokeWidth={1} />
          <path d={FEATURES.mouth} strokeWidth={1.8} />
          <path d={FEATURES.chin} strokeWidth={1} />
          <path d={FEATURES.jaw} strokeWidth={1.4} />
        </g>
      </g>
      {/* The neckcloth sits a little lower on the heavier jaw. */}
      <g transform="translate(0 6)">
        <path d={CRAVAT} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path d={CRAVAT_FOLDS} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
        <path
          d={SHIRT_POINT}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.fine}
          strokeLinejoin="round"
        />
      </g>
      <path d={BANDS} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path
        d={COAT_COLLAR}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path d={COLLAR_ROLL} fill="none" stroke={PAPER} strokeWidth={LINE.hairline} />
      {/* "his manners were very formal": a hand laid flat on his breast as he bows. */}
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <Hand transform={HAND.transform} palm={HAND_PALM} digits={HAND_DIGITS} lines={HAND_LINES} />
    </g>
  )
}

function CollinsPortrait({ uid }: ArtProps) {
  const m = marks()
  return (
    <>
      <path d={m.ground} fill={PAPER} />
      <g transform={P.transform}>
        <CollinsFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const mrCollinsArt: LinocutArt = { width: PW, height: PH, Draw: CollinsPortrait }

const on = (x: number, y: number) => onTurnedHead(P, BOW, x, y)
const CHEEK = on(140, 130)
const SHOULDER = P.to(40, 272)
const HAND_AT = P.to(...HAND.to(2, -40))

export const mrCollins: Portrait = {
  name: 'Mr Collins',
  art: mrCollinsArt,
  alt: "A linocut portrait of Mr Collins in profile, facing left, drawn from Austen's description in Chapter 13: a big young man with a heavy jaw, drawn large in the frame, in the middle of a bow, his head inclined, his eye lowered, his brow lifted and his mouth set. One hand is laid flat on his breast with its fingers apart. His dark hair is short and combed down. He wears a black coat and black waistcoat, a white neckcloth with the points of his shirt collar against his jaw, and the two white bands of a clergyman at his throat. Three numbered red markers point to his large figure, his face and the hand on his breast.",
  describedBy: [
    { phrase: 'a tall, heavy looking young man of five and twenty', at: SHOULDER },
    { phrase: 'His air was grave and stately', at: CHEEK },
    {
      phrase: 'his manners were very formal',
      at: [HAND_AT[0] - 50, HAND_AT[1] - 30],
      to: HAND_AT,
    },
  ],
  where: 'Chapter 13',
  passage:
    'He was a tall, heavy looking young man of five and twenty. His air was grave and stately, and his manners were very formal.',
  note: 'His letter has already introduced him, and Austen needs only these few words to confirm it. Everything about Collins is weight and ceremony, and his solemn formality is a way of admiring himself.',
  artNote:
    'Austen does not describe his face or his dress. He wears the plain black coat and white bands of a country clergyman of the 1810s, as the rector of Hunsford would.',
}
