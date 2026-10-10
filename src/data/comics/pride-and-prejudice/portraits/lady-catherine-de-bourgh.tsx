import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, ribbon } from '@/components/comics/linocut/carve'

import {
  LADY_HEAD,
  capGathers,
  capShapes,
  PH,
  PW,
  WOMAN_EYE,
  WomanFeatures,
  WomanNeckShadow,
  coatFolds,
  frill,
  once,
  onTurnedHead,
  placing,
  portraitGround,
  PortraitRule,
  ruffBand,
  shoulders,
  spline,
  turn,
} from './common'

/**
 * Lady Catherine de Bourgh, as Elizabeth first sees her in the drawing-room
 * at Rosings in Chapter 29, and nothing else:
 *
 *   "Lady Catherine was a tall, large woman, with strongly-marked features,
 *   which might once have been handsome. Her air was not conciliating, nor
 *   was her manner of receiving them, such as to make her visitors forget
 *   their inferior rank."
 *
 * and, a little later in the chapter, Elizabeth finds in her "countenance
 * and deportment ... some resemblance of Mr. Darcy". Mr Collins, the same
 * day, speaks of "that elegance of dress ... which becomes herself and
 * daughter", and in Chapter 13 his letter calls her the "widow of Sir Lewis
 * de Bourgh".
 *
 * So: a tall, large woman in profile, facing left, drawn big in the block and
 * broad in the shoulder, her head carried up and back as her nephew carries
 * his, so that she looks down her nose. Her features are cut stronger than
 * any other woman's here (LADY_HEAD: the nose longer and higher in the
 * bridge, the chin fuller), the lid heavy and level, the mouth set and turned
 * down at the corner ("not conciliating"). She wears a widow's tall white
 * cap with a frilled edge and a dark ribbon, a dark gown and a white ruff at
 * the throat: the plain dress of a widow of rank in the 1810s. Her hair is
 * hidden under the cap but for a little grey at the brow. Nothing here comes
 * from a film or stage production, and there is no red in this plate.
 *
 * Seeds: 9201 (the ground), 9202 (the cap), 9203 (the gown).
 */

const P = placing(16, 14, 1.0, true)
/** "not conciliating": the head carried up and back. */
const LIFT = -5

/** Her gown: the shoulders every garment here is cut from, broader. */
const GOWN = shoulders(1.08, 0)

/** A widow's cap: the married woman's cap, its crown gathered fuller and higher. */
const CAP = capShapes(1.2)
/** A bow of dark ribbon at the front of the cap, above the brow. */
const BOW =
  spline([
    [144, 38, 1],
    [128, 24],
    [124, 34],
    [138, 44, 1],
  ]) +
  spline([
    [146, 38, 1],
    [158, 22],
    [166, 30],
    [150, 44, 1],
  ])
const BOW_KNOT = 'M141 36L150 34L152 44L143 46Z'
/** The gown, made high to the throat, under the ruff. */
const HIGH_NECK = 'M68 224C90 244 132 248 158 226L152 208L76 210Z'
/** The little of her hair that shows at the brow, under the frill: grey. */
const BROW_HAIR = 'M157 56Q162 60 163 70L156 66Q154 60 157 56Z'

const marks = once(() => {
  // The light of the drawing-room at Rosings, in front of her.
  const ground = portraitGround('pp-lady-catherine', 9201, (x, y) =>
    clamp(0.1 + ((262 - x) / 250) * 0.9 - Math.max(0, (y - 250) / 260)),
  )
  const gathers = capGathers(9202, CAP.band, CAP.centre, 20)
  const edge = frill(CAP.edge, 3.8, 5.6)
  const band = ribbon(CAP.band, 8, 0.15)
  const folds = coatFolds(9203)
  const ruff = ruffBand(76, 150, 204, 222, 6, 0.1)
  return { ground, gathers, edge, band, folds, ruff }
})

function LadyCatherineFigure({ uid }: { uid: string }) {
  const m = marks()
  const capClip = `${uid}-pp-lc-cap`
  return (
    <g>
      <defs>
        <clipPath id={capClip}>
          <path d={CAP.cap} />
        </clipPath>
      </defs>
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={GOWN} />
        <g transform={turn(LIFT)}>
          <path d={LADY_HEAD} />
          <path d={CAP.cap} />
        </g>
      </g>
      <path d={GOWN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.folds} fill={PAPER} />
      <g transform={turn(LIFT)}>
        <path d={LADY_HEAD} fill={PAPER} />
        <WomanNeckShadow id={`${uid}-pp-lc`} />
        <path d={BROW_HAIR} fill={PAPER} stroke={INK} strokeWidth={LINE.hairline} />
        <path
          d="M157.6 59L160.8 66M155.8 61L158.6 66.6"
          fill="none"
          stroke={INK}
          strokeWidth={LINE.hairline}
        />
        <path
          d={CAP.cap}
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
        <path
          d={BOW}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.hairline}
          strokeLinejoin="round"
        />
        <path d={BOW_KNOT} fill={INK} stroke={PAPER} strokeWidth={LINE.hairline} />
        <WomanFeatures eye="proud" nostril="M173.4 124.6C169.6 122.6 169.6 118 173.8 117" />
        {/* "strongly-marked features": a heavy brow, and the mouth set and turned down. */}
        <path
          d="M142.6 83.2Q152 79.6 161.4 82.6M156.6 137.8Q154.2 138.8 153.8 141.6"
          fill="none"
          stroke={INK}
          strokeWidth={2.8}
          strokeLinecap="round"
        />
        <path
          d="M162 118Q156.4 128 158 138"
          fill="none"
          stroke={INK}
          strokeWidth={1}
          strokeLinecap="round"
        />
      </g>
      {/* The gown high to the throat, and the white ruff that closes it. */}
      <path d={HIGH_NECK} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <path
        d={m.ruff.ruff}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.fine}
        strokeLinejoin="round"
      />
      <path d={m.ruff.pleats} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
    </g>
  )
}

function LadyCatherinePortrait({ uid }: ArtProps) {
  const m = marks()
  return (
    <>
      <path d={m.ground} fill={PAPER} />
      <g transform={P.transform}>
        <LadyCatherineFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const ladyCatherineDeBourghArt: LinocutArt = {
  width: PW,
  height: PH,
  Draw: LadyCatherinePortrait,
}

const on = (x: number, y: number) => onTurnedHead(P, LIFT, x, y)
const CHEEK = on(138, 126)
const EYE = on(WOMAN_EYE[0] + 9, WOMAN_EYE[1] + 1)
const SHOULDER = P.to(200, 264)

export const ladyCatherineDeBourgh: Portrait = {
  name: 'Lady Catherine de Bourgh',
  art: ladyCatherineDeBourghArt,
  alt: "A linocut portrait of Lady Catherine de Bourgh in profile, facing left, drawn from Austen's description in Chapter 29: a tall, large woman drawn big in the frame and broad in the shoulder, her head carried up and back so that she looks down her long, high-bridged nose. Her features are strong, her brow heavy, her eyelid lowered and level and her mouth set and turned down at the corner. She wears a tall white cap with a frilled edge and a dark ribbon round it, a dark gown and a white ruff at her throat. Three numbered red markers point to her large figure, her face and her eye.",
  describedBy: [
    { phrase: 'a tall, large woman', at: SHOULDER },
    { phrase: 'strongly-marked features, which might once have been handsome', at: CHEEK },
    { phrase: 'Her air was not conciliating', at: [EYE[0] - 66, EYE[1] - 4], to: EYE },
  ],
  where: 'Chapter 29',
  passage:
    'Lady Catherine was a tall, large woman, with strongly-marked features, which might once have been handsome. Her air was not conciliating, nor was her manner of receiving them, such as to make her visitors forget their inferior rank.',
  note: 'Elizabeth finds in her face and bearing “some resemblance of Mr. Darcy”, and the likeness is the point: Lady Catherine is his pride of rank with nothing to correct it.',
  artNote:
    'Austen gives her size and her strong features; her dress is described only as elegant. She wears the cap and dark gown of a widow of rank in the 1810s, as the widow of Sir Lewis de Bourgh would.',
}
