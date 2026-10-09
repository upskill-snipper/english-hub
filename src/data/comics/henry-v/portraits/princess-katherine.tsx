import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, gouge, type Pt } from '@/components/comics/linocut/carve'

import {
  bandAlong,
  CIRCLET_BAND,
  CIRCLET_STONES,
  fleur,
  folds,
  Hand,
  handPoint,
  locks,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PRINCE_CIRCLET,
  PW,
  spline,
  WomanNeckShadow,
  WOMAN_HEAD,
  type Digit,
} from './common'

/**
 * Princess Katherine, the French King's daughter, at her English lesson with
 * her gentlewoman Alice, and as Henry names her when he woos her:
 *
 *   KATHARINE: "Comment appelez-vous la main en anglais?"
 *   ALICE: "La main? Elle est appelée de hand." (Act 3, Scene 4)
 *   HENRY: "Fair Katharine, and most fair" (Act 5, Scene 2)
 *   HENRY: "What say'st thou, my fair flower-de-luce?" (Act 5, Scene 2)
 *
 * So: a young princess of France holding up her hand and looking at it,
 * learning its name in English, the language of the country invading hers.
 * The play gives her no looks but "fair"; Henry's "flower-de-luce" is the
 * lily of France, which the kit cuts on the French.
 *
 * She is drawn as the figure kit draws her (../panels/people.tsx,
 * 'katharine'): her face lit, cut in paper with her features in ink; her dark
 * hair long and loose down her back, as an unmarried girl of the time wore it;
 * her brother's circlet with its three small points (PRINCE_CIRCLET, the
 * Dauphin's, as ./common.tsx cuts the kit's DAUPHIN_CIRCLET at this size), so
 * that the King of France's son and daughter are known by it; and a dark gown,
 * high at the neck, sprinkled with the lilies of France in paper, her sleeve
 * close to the wrist. At this size her head is the woman's head (WOMAN_HEAD),
 * as the Hamlet and King Lear portraits cut Ophelia's and Cordelia's. The
 * circlet is the kit's invention, only so that the princess is known at a
 * glance. (The first cut of this portrait, made before the kit had a
 * Katharine, gave the circlet five points; it has the kit's three since 9
 * October 2026.)
 *
 * NEVER SEXUALISED. Her gown is high and plain at the neck, her pose is a
 * girl at her lesson, and no marker points at her lips or her body: the
 * lesson's last two words, and Henry's kiss, are never drawn or quoted here.
 *
 * HER HAND is held out before her and turned up, from a bent arm, below the
 * height of her chin, its fingers cut apart and fanned forward and its thumb
 * lifted, so that it reads as a hand she is looking at, never a salute, never
 * a hand raised to stop someone and never a fist. Her eye is lowered to it,
 * open under a heavy lid. There is no red in this plate.
 *
 * MARKERS. "Fair Katharine, and most fair" sits on her cheek with no line.
 * "de hand" comes to her hand from in front, at its own height; "my fair
 * flower-de-luce" to a lily on her gown, from in front. No line crosses her
 * face.
 *
 * Seeds: 9301 to 9304 (the figure's marks), 9310 (the ground).
 */

/** The circlet sits on WOMAN_HEAD's brow. */
const CIRCLET_ON = 'translate(-3 2)'

/** Her long dark hair, from the brow under the circlet over the ear and loose down her back. */
const HAIR = spline([
  [158, 63, 1],
  [150, 67],
  [139, 75],
  [129, 88],
  [122, 102],
  [118, 118],
  [116, 136],
  [114, 160],
  [110, 190],
  [104, 222],
  [98, 256],
  [92, 300],
  [88, 346, 1],
  [26, 346, 1],
  [30, 302],
  [34, 262],
  [38, 222],
  [37, 182],
  [36, 144],
  [38, 108],
  [45, 78],
  [60, 53],
  [84, 36],
  [112, 28],
  [139, 31],
  [156, 45],
])

/** Her shoulders in the gown, high at the neck. */
const GOWN = spline([
  [-4, 346, 1],
  [2, 300],
  [20, 266],
  [52, 242],
  [84, 230],
  [112, 234],
  [140, 228],
  [166, 240],
  [188, 264],
  [202, 298],
  [208, 346, 1],
])
/** The trim at the neck of the gown, cut in paper. */
const NECK_TRIM = 'M88 233Q112 239 138 231'

/** Where the lilies lie on the gown. */
const LILY_AT: [number, number, number][] = [
  [180, 304, 1.3],
  [150, 262, 1.25],
  [118, 286, 1.25],
  [146, 324, 1.3],
]

/** Her forearm in its close sleeve, rising from below the block to the wrist. */
const ARM: Pt[] = [
  [102, 350],
  [124, 322],
  [150, 294],
  [174, 274],
]
const SLEEVE = bandAlong(ARM, 25)
/** The edge of the sleeve at the wrist, cut in paper. */
const CUFF_EDGE = 'M165 266L181 284'

/**
 * The hand, held out before her and turned up, the fingers open and fanned
 * forward, the thumb lifted. In the hand's frame: the wrist at the origin,
 * the fingers along +x.
 */
const HAND_AT: Pt = [174, 274]
const HAND_ROT = -24
const HAND_S = 1.6
const PALM = spline([
  [-2, -9],
  [7, -11],
  [15, -8.4],
  [17, 0],
  [15, 8.6],
  [6, 10.4],
  [-2, 8.4],
])
const DIGITS: Digit[] = [
  { from: [12, 8.4], to: [24.6, 13.2], w: 4.4 },
  { from: [14.6, 4.2], to: [29.4, 6.4], w: 5 },
  { from: [15.4, -1], to: [32, -2.2], w: 5.2 },
  { from: [14.4, -6], to: [30, -10.2], w: 5 },
  { from: [5, -8.6], to: [14.6, -19], w: 5.6 },
]
/** The heel of the hand, and a crease across the palm. */
const KNUCKLES = 'M13.6 -6.6Q16.4 0 13.6 7.6M4 -3Q8 1 12 2'

type Marks = { hair: string; gown: string; lilies: string; sleeve: string }

const marks = once((): Marks => {
  // Long hair, back over the crown from the brow and loose down her back:
  // strands cut in paper through the ink.
  const hair =
    locks(
      9301,
      16,
      (t) => [150 - t * 104, 64 - t * 10],
      (t) => [116 - t * 72, 140 + t * 20],
      [0.8, 1.3],
      -7,
    ) +
    locks(
      9302,
      14,
      (t) => [42 + t * 66, 150 + t * 12],
      (t) => [30 + t * 58, 342],
      [0.9, 1.4],
      -3,
      2,
    )
  const gown = folds(9303, [10, 196], [290, 304], 6, 346)
  const lilies = LILY_AT.map(([x, y, s]) => fleur(x, y, s)).join('')
  const sleeve = gouge(114, 336, 160, 290, 0.9, -1) + gouge(122, 344, 166, 298, 0.8, -1.4)
  return { hair, gown, lilies, sleeve }
})

/** Katherine, head and shoulders, facing right in the 0..240 by 0..346 frame. */
export function KatherineFigure({ uid }: { uid: string }) {
  const m = marks()
  const id = `${uid}-kat`
  return (
    <g>
      <defs>
        <clipPath id={`${id}-hair`}>
          <path d={HAIR} />
        </clipPath>
      </defs>
      {/* the dark gown, high at the neck, sprinkled with the lilies of France */}
      <path d={GOWN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.gown} fill={PAPER} />
      <path d={m.lilies} fill={PAPER} />
      <path d={WOMAN_HEAD} fill={PAPER} />
      <WomanNeckShadow id={id} />
      <path d={NECK_TRIM} fill="none" stroke={PAPER} strokeWidth={2.2} strokeLinecap="round" />
      {/* her long hair, over the crown and the ear and down her back over the gown */}
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${id}-hair)`}>
        <path d={m.hair} fill={PAPER} />
      </g>
      {/* her face, and her eye lowered to her hand, open under a heavy lid */}
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d="M169.5 121.5C166 119.5 166 115.5 170 114.5" strokeWidth={1.2} />
        <path d="M163.5 137L156.5 137.8" strokeWidth={1.6} />
        <path d="M165.5 133C163.5 134 161.5 135.5 160.5 137" strokeWidth={0.9} />
        <path d="M164.5 143.5C162.5 145 160.5 145.3 158.5 144.7" strokeWidth={0.9} />
        <path d="M143 83.5Q152 80 161 83" strokeWidth={2} />
        <path d="M144.6 96Q152.6 92.8 160.6 96.4" strokeWidth={2.4} />
        <path d="M146.8 100.8Q153 103 159.4 100" strokeWidth={1} />
      </g>
      <path d="M149.4 97.2A3.2 2.8 0 0 0 155.8 97.2Z" fill={INK} />
      {/* the princess's circlet, in paper */}
      <g transform={CIRCLET_ON}>
        <path
          d={PRINCE_CIRCLET}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.7}
          strokeLinejoin="round"
        />
        <path d={CIRCLET_BAND} fill="none" stroke={INK} strokeWidth={1.2} />
        <g fill={INK}>
          {CIRCLET_STONES.map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r={2} />
          ))}
        </g>
      </g>
      {/* "de hand": her forearm in its sleeve, and her open hand */}
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.sleeve} fill={PAPER} />
      <path d={CUFF_EDGE} fill="none" stroke={PAPER} strokeWidth={2} strokeLinecap="round" />
      <Hand
        transform={`translate(${HAND_AT[0]} ${HAND_AT[1]}) rotate(${HAND_ROT}) scale(${HAND_S})`}
        palm={PALM}
        digits={DIGITS}
        lines={KNUCKLES}
        halo={2.2}
      />
    </g>
  )
}

/** A thick ink halo round her head, hair, shoulders, arm and hand. */
function KatherineKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={HAIR} />
      <path d={WOMAN_HEAD} />
      <path d={GOWN} />
      <path d={PRINCE_CIRCLET} transform={CIRCLET_ON} />
      <path d={SLEEVE} />
    </g>
  )
}

const P = placing(34, -10, 1.0)

const ground = once(() =>
  // A room in the French King's palace, the light from a window ahead of her.
  portraitGround('hv-princess-katherine', 9310, (x, y) =>
    clamp(0.12 + ((x - 60) / 260) * 0.8 - (y / PH) * 0.16),
  ),
)

function KatherinePortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <KatherineKnockout />
        <KatherineFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const princessKatherinePortrait: LinocutArt = {
  width: PW,
  height: PH,
  Draw: KatherinePortrait,
}

const CHEEK_AT = P.to(138, 122)
/** The back of her hand, in the portrait. */
const HAND_BACK = (() => {
  const [x, y] = handPoint(HAND_AT, HAND_ROT, HAND_S)(31, -4)
  return P.to(x + 4, y)
})()
const LILY = P.to(LILY_AT[0][0], LILY_AT[0][1])

export const princessKatherine: Portrait = {
  name: 'Princess Katherine',
  art: princessKatherinePortrait,
  alt: 'A linocut portrait of Princess Katherine in profile, facing right: a young woman with long dark hair falling loose down her back under a pale circlet with three small points. She wears a dark gown, high at the neck and sprinkled with pale fleurs-de-lis, the lilies of France. She holds her open hand out before her, turned up, its fingers apart, and looks down at it, as if learning its name. Three numbered red markers point to her cheek, her hand and a lily on her gown.',
  describedBy: [
    { phrase: 'Fair Katharine, and most fair', at: CHEEK_AT },
    { phrase: 'de hand', at: [HAND_BACK[0] + 34, HAND_BACK[1] - 10], to: HAND_BACK },
    {
      phrase: 'my fair flower-de-luce',
      at: [LILY[0] + 44, LILY[1] + 8],
      to: [LILY[0] + 7, LILY[1]],
    },
  ],
  where: 'Act 3, Scene 4; Act 5, Scene 2',
  note: 'Katherine asks her gentlewoman Alice for the English words for her hand, her arm and her chin: the language of the country invading hers. In Act 5 Henry woos her in it, and calls her the “capital demand” in his terms of peace.',
  artNote:
    'The play gives no description of her looks beyond “fair”. She is drawn as a princess of France in 1415, her circlet showing her rank and her gown sprinkled with the lilies that Henry’s “flower-de-luce” names.',
}
