import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, ribbon } from '@/components/comics/linocut/carve'

import {
  CAP_PARTS,
  Curls,
  FICHU,
  FICHU_FOLDS,
  GOWN,
  HAIR_UP,
  HAND_DIGITS,
  HAND_LINES,
  HAND_PALM,
  Hand,
  PH,
  PW,
  WOMAN_HEAD_OPEN,
  WomanFeatures,
  WomanNeckShadow,
  capGathers,
  coatFolds,
  frill,
  handOnBreast,
  once,
  placing,
  portraitGround,
  PortraitRule,
  spline,
} from './common'

/**
 * Mrs Bennet, as the narrator sums her up at the end of Chapter 1, and
 * nothing else:
 *
 *   "She was a woman of mean understanding, little information, and
 *   uncertain temper. When she was discontented she fancied herself nervous.
 *   The business of her life was to get her daughters married; its solace was
 *   visiting and news."
 *
 * and her own complaint in the same chapter: "You have no compassion on my
 * poor nerves."
 *
 * So: a married woman in profile, facing left, in full flow: her mouth open,
 * talking, her brows lifted, her eye wide, and one hand pressed to her breast
 * for her nerves, its fingers apart. She wears a married woman's white cap
 * with a frilled edge and a dark ribbon round it, a little of her hair
 * curling at the brow under the frill, and a white kerchief crossed over a
 * dark gown, as a married woman of the 1810s did by day. The novel describes
 * none of it. The light is in front of her. Nothing here comes from a film or
 * stage production, and there is no red in this plate.
 *
 * Seeds: 8601 (the ground), 8602 (the cap), 8603 (the gown).
 */

const P = placing(26, 4, 0.95, true)

/** The kerchief leaves the skin bare in a small V at the throat. */
const THROAT = 'M84 230L104 244L126 246L140 230L146 210L74 208Z'
/** Her sleeve, from the foot of the frame up to the wrist at her breast. */
const SLEEVE = spline([
  [60, 350, 1],
  [86, 340],
  [108, 330, 1],
  [130, 336],
  [134, 350, 1],
])
const HAND = handOnBreast([120, 330], 16, 0.78)
/** The few curls that show at the brow, under the frill of the cap. */
const BROW_CURLS: [number, number, number][] = [
  [154, 60, 3.6],
  [148, 67, 4],
  [158, 66, 3.4],
]

const marks = once(() => {
  const ground = portraitGround('pp-mrs-bennet', 8601, (x, y) =>
    clamp(0.12 + ((262 - x) / 250) * 0.9 - Math.max(0, (y - 250) / 260)),
  )
  const gathers = capGathers(8602, CAP_PARTS.band, CAP_PARTS.centre)
  const edge = frill(CAP_PARTS.edge, 3.4, 5.4)
  const band = ribbon(CAP_PARTS.band, 7, 0.15)
  const folds = coatFolds(8603)
  return { ground, gathers, edge, band, folds }
})

function MrsBennetFigure({ uid }: { uid: string }) {
  const m = marks()
  const capClip = `${uid}-pp-mrsb-cap`
  return (
    <g>
      <defs>
        <clipPath id={capClip}>
          <path d={CAP_PARTS.cap} />
        </clipPath>
      </defs>
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={WOMAN_HEAD_OPEN} />
        <path d={CAP_PARTS.cap} />
        <path d={GOWN} />
      </g>
      <path d={GOWN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.folds} fill={PAPER} />
      <path d={THROAT} fill={PAPER} />
      <path d={WOMAN_HEAD_OPEN} fill={PAPER} />
      <WomanNeckShadow id={`${uid}-pp-mrsb`} />
      {/* The white kerchief crossed over the gown. */}
      <path d={FICHU} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path d={FICHU_FOLDS} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      {/* "she fancied herself nervous": a hand pressed to her breast. */}
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <Hand transform={HAND.transform} palm={HAND_PALM} digits={HAND_DIGITS} lines={HAND_LINES} />
      {/* The cap, gathered full, its frill round her face and a ribbon round it. */}
      {/* Her dark hair, drawn up under the cap, shows only at the nape and the brow. */}
      <path d={HAIR_UP} fill={INK} />
      <Curls at={BROW_CURLS} />
      <path
        d={CAP_PARTS.cap}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.fine}
        strokeLinejoin="round"
      />
      <g clipPath={`url(#${capClip})`}>
        <path d={m.gathers} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      </g>
      <path d={m.band} fill={INK} />
      <path d={m.edge} fill="none" stroke={INK} strokeWidth={1.1} strokeLinecap="round" />
      <WomanFeatures eye="open" mouth="open" brow="raised" />
    </g>
  )
}

function MrsBennetPortrait({ uid }: ArtProps) {
  const m = marks()
  return (
    <>
      <path d={m.ground} fill={PAPER} />
      <g transform={P.transform}>
        <MrsBennetFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const mrsBennetArt: LinocutArt = { width: PW, height: PH, Draw: MrsBennetPortrait }

const BROW = P.to(161, 80)
const HAND_AT = P.to(...HAND.to(2, -40))
const MOUTH = P.to(172, 139)

export const mrsBennet: Portrait = {
  name: 'Mrs Bennet',
  art: mrsBennetArt,
  alt: "A linocut portrait of Mrs Bennet in profile, facing left, drawn from Austen's summing-up of her in Chapter 1: a married woman in full flow, her mouth open as she talks, her brows lifted and her eye wide, one hand pressed to her breast with its fingers apart. She wears a white cap with a frilled edge and a dark ribbon round it, a few curls of hair showing at her brow, and a white kerchief crossed over a dark gown. Three numbered red markers point to her lifted brow, the hand at her breast and her open mouth.",
  describedBy: [
    { phrase: 'uncertain temper', at: [BROW[0] - 56, BROW[1] - 8], to: BROW },
    { phrase: 'she fancied herself nervous', at: [HAND_AT[0] - 62, HAND_AT[1] - 6], to: HAND_AT },
    { phrase: 'its solace was visiting and news', at: [MOUTH[0] - 52, MOUTH[1] + 12], to: MOUTH },
  ],
  where: 'Chapter 1',
  passage:
    'She was a woman of mean understanding, little information, and uncertain temper. When she was discontented she fancied herself nervous. The business of her life was to get her daughters married; its solace was visiting and news.',
  note: 'The narrator sums her up in three sentences at the end of the first chapter, and the rest of the novel bears them out: she talks, she complains of her nerves, and she schemes to marry her daughters.',
  artNote:
    'Austen does not describe her looks, though her husband married her “captivated by youth and beauty” (Chapter 42). She is drawn plainly, as a married woman of the 1810s, in a white cap and a muslin kerchief.',
}
