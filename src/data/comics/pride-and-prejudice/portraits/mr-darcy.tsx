import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp } from '@/components/comics/linocut/carve'

import {
  Buttons,
  COAT,
  COAT_BUTTONS,
  COAT_COLLAR,
  COLLAR_ROLL,
  CRAVAT,
  CRAVAT_FOLDS,
  CRAVAT_KNOT,
  EarCut,
  LAPEL_FAR,
  LAPEL_NEAR,
  MAN_EAR,
  MAN_HAIR,
  MAN_HEAD,
  ManBrow,
  ProudEye,
  ManNoseAndMouth,
  PH,
  PW,
  JAW,
  SHIRT_POINT,
  VEST,
  brushedForward,
  coatFolds,
  forelocks,
  neckShade,
  once,
  onTurnedHead,
  placing,
  portraitGround,
  PortraitRule,
  turn,
  vestStripes,
} from './common'

/**
 * Mr Darcy, as the assembly at Meryton first sees him in Chapter 3, and
 * nothing else:
 *
 *   "His brother-in-law, Mr. Hurst, merely looked the gentleman; but his
 *   friend Mr. Darcy soon drew the attention of the room by his fine, tall
 *   person, handsome features, noble mien; and the report which was in
 *   general circulation within five minutes after his entrance, of his having
 *   ten thousand a year. The gentlemen pronounced him to be a fine figure of
 *   a man, the ladies declared he was much handsomer than Mr. Bingley, and he
 *   was looked at with great admiration for about half the evening, till his
 *   manners gave a disgust which turned the tide of his popularity; for he
 *   was discovered to be proud, to be above his company, and above being
 *   pleased; and not all his large estate in Derbyshire could then save him
 *   from having a most forbidding, disagreeable countenance, and being
 *   unworthy to be compared with his friend."
 *
 * So: a tall man, drawn high in the block, his head carried up and back so
 * that he looks down his nose at the room ("above his company"), the lid
 * lowered over the eye and the mouth a level line that will not smile
 * ("above being pleased"). The face is every man's (MAN_HEAD), cut clean and
 * regular for "handsome features". His dress is not described, so it is the
 * plain evening dress of a gentleman of the 1810s: a dark tail-coat with a
 * high collar, a striped waistcoat, a white neckcloth wound high and the
 * points of his shirt collar against his jaw; his hair is dark, cut short and
 * brushed forward, with whiskers to the lobe of the ear. The light is the
 * candlelight of the assembly room, in front of him. Nothing here comes from
 * a film or stage production, and there is no red in this plate.
 *
 * Seeds: 8201 (the ground), 8202 (the hair), 8203 (the forelocks), 8204
 * (the coat), 8205 (the nape).
 */

const P = placing(30, 2, 1.02)
/** "above his company": the head carried up and back at the neck. */
const LIFT = -6

const marks = once(() => {
  const ground = portraitGround('pp-darcy', 8201, (x, y) =>
    clamp(0.08 + ((x - 90) / 240) * 0.95 - Math.max(0, (y - 250) / 260)),
  )
  const hair = brushedForward(8202)
  const locks = forelocks(8203)
  const folds = coatFolds(8204)
  const nape = neckShade(8205)
  const stripes = vestStripes()
  return { ground, hair, locks, folds, nape, stripes }
})

function DarcyFigure({ uid }: { uid: string }) {
  const m = marks()
  const headClip = `${uid}-pp-darcy-head`
  const hairClip = `${uid}-pp-darcy-hair`
  const vestClip = `${uid}-pp-darcy-vest`
  return (
    <g>
      <defs>
        <clipPath id={headClip}>
          <path d={MAN_HEAD} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={MAN_HAIR} />
        </clipPath>
        <clipPath id={vestClip}>
          <path d={VEST} />
        </clipPath>
      </defs>
      {/* The ink halo that lifts the figure off the lit ground. */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={COAT} />
        <g transform={turn(LIFT)}>
          <path d={MAN_HEAD} />
          <path d={MAN_HAIR} />
        </g>
      </g>
      <path d={COAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.folds} fill={PAPER} />
      <path d={VEST} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <g clipPath={`url(#${vestClip})`}>
        <path d={m.stripes} fill="none" stroke={INK} strokeWidth={1.6} />
      </g>
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
      <Buttons pts={COAT_BUTTONS} r={2.8} />
      <g transform={turn(LIFT)}>
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
        <ManBrow w={3} />
        <ProudEye />
        <ManNoseAndMouth />
        <path d={JAW} fill="none" stroke={INK} strokeWidth={1.3} strokeLinecap="round" />
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

function DarcyPortrait({ uid }: ArtProps) {
  const m = marks()
  return (
    <>
      <path d={m.ground} fill={PAPER} />
      <g transform={P.transform}>
        <DarcyFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const mrDarcyArt: LinocutArt = { width: PW, height: PH, Draw: DarcyPortrait }

const on = (x: number, y: number) => onTurnedHead(P, LIFT, x, y)
const CHEEK = on(140, 130)
const EYE = on(160, 101)
const MOUTH = on(176, 148)
const SHOULDER = P.to(40, 290)

export const mrDarcy: Portrait = {
  name: 'Mr Darcy',
  art: mrDarcyArt,
  alt: "A linocut portrait of Mr Darcy in profile, facing right, drawn from Austen's description in Chapter 3: a tall man drawn high in the frame, his head carried up and back so that he looks down his nose, the lid lowered over his eye and his mouth a level line that does not smile. His face is clean and regular, his dark hair cut short and brushed forward, with whiskers to the lobe of his ear. He wears a dark tail-coat with a high collar standing up behind his neck, a striped waistcoat, a white neckcloth wound high round his throat and the points of his shirt collar against his jaw. Four numbered red markers point to his tall figure, his face, his lowered eye and his unsmiling mouth.",
  describedBy: [
    { phrase: 'his fine, tall person', at: SHOULDER },
    { phrase: 'handsome features, noble mien', at: CHEEK },
    {
      phrase: 'above his company, and above being pleased',
      at: [EYE[0] + 58, EYE[1] - 4],
      to: EYE,
    },
    {
      phrase: 'a most forbidding, disagreeable countenance',
      at: [MOUTH[0] + 44, MOUTH[1] + 6],
      to: [MOUTH[0] + 8, MOUTH[1]],
    },
  ],
  where: 'Chapter 3',
  passage:
    'His brother-in-law, Mr. Hurst, merely looked the gentleman; but his friend Mr. Darcy soon drew the attention of the room by his fine, tall person, handsome features, noble mien; and the report which was in general circulation within five minutes after his entrance, of his having ten thousand a year. The gentlemen pronounced him to be a fine figure of a man, the ladies declared he was much handsomer than Mr. Bingley, and he was looked at with great admiration for about half the evening, till his manners gave a disgust which turned the tide of his popularity; for he was discovered to be proud, to be above his company, and above being pleased; and not all his large estate in Derbyshire could then save him from having a most forbidding, disagreeable countenance, and being unworthy to be compared with his friend.',
  note: 'The room changes its mind about his face in one evening. Nothing in it has altered, only his manners, and the sentence that admires his “handsome features” ends by calling the same face “forbidding”.',
  artNote:
    'Austen never describes his dress or his colouring, so he wears the plain evening dress of a gentleman of the 1810s, with his hair cut dark and short.',
}
