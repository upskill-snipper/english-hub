import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  ribbon,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'

import { ear, PH, placing, portraitGround, PortraitRule, PW, spline, type SP } from './common'

/**
 * Don John, as Beatrice and Hero see him at the revels in Act 2, Scene 1,
 * after he has passed through the hall:
 *
 *   BEATRICE: "How tartly that gentleman looks! I never can see him but I am
 *   heart-burned an hour after."
 *   HERO: "He is of a very melancholy disposition."
 *   BEATRICE: "He were an excellent man that were made just in the mid-way
 *   between him and Benedick: the one is too like an image, and says
 *   nothing; and the other too like my lady's eldest son, evermore
 *   tattling."
 *
 * So: a sour look, the brow drawn down hard towards the nose; the melancholy
 * man's heavy lid over an eye that looks down and away; and the mouth shut
 * and turned down at its corner, as still as a carved image. He says of
 * himself, "I am not of many words" (1.1).
 *
 * The play describes his manner, not his features. He is drawn as the panels
 * draw him (../panels/people.tsx): the jaw a little longer than the other
 * men's, hair cropped short at the nape, a tall black hat with a narrow brim
 * pulled down to the frown, which nobody else in the play wears, and a long
 * dark cloak closed up to the throat. (A first cut gave him lank hair to the
 * shoulder, as the panels once did, and like them it read as a woman.) There
 * is no red in this plate.
 */

/** A man's head, the jaw long, facing right in a 0..240 by 0..332 frame. */
const HEAD_PTS: SP[] = [
  [66, 232],
  [59, 204],
  [50, 176],
  [42, 146],
  [42, 106],
  [54, 70],
  [78, 45],
  [110, 32],
  [141, 34],
  [159, 48],
  [166, 68],
  [170, 87],
  [166, 97, 1],
  [174, 110],
  [183, 125],
  [181.5, 130.5],
  [172, 133.5, 1],
  [173, 141],
  [168, 146.5, 1],
  [170.5, 151],
  [167.5, 156],
  [166, 162, 1],
  [170.5, 174],
  [169.5, 188],
  [158, 196],
  [142, 199],
  [134, 206],
  [132, 218],
  [134, 232],
]
export const DON_JOHN_HEAD = spline(HEAD_PTS)

/** Hair cropped short at the nape, under the hat. */
const HAIR = spline([
  [106, 70, 1],
  [110, 96, 1],
  [100, 98],
  [92, 110],
  [88, 138],
  [80, 162],
  [64, 174, 1],
  [46, 156],
  [37, 118],
  [38, 72, 1],
])
/**
 * His hat: a tall black crown, tapering a little to a flat top, over a narrow
 * brim, pulled down low over the frown and tilted forward.
 */
const CROWN = spline([
  [48, 80, 1],
  [58, 30],
  [68, -10, 1],
  [110, -16],
  [150, -12, 1],
  [158, 24],
  [166, 76, 1],
  [108, 80],
])
const BRIM = spline([
  [26, 86, 1],
  [70, 80],
  [130, 76],
  [192, 72, 1],
  [192, 80, 1],
  [130, 84],
  [70, 88],
  [26, 94, 1],
])
const HAT_T = 'translate(0 -9) rotate(3 110 80)'
const EAR = ear(102, 122)

/** The long cloak, closed about him from the throat. */
export const DON_JOHN_CLOAK = spline([
  [-14, 336, 1],
  [-10, 292],
  [6, 258],
  [34, 234],
  [70, 218],
  [104, 214],
  [140, 212],
  [166, 222],
  [196, 250],
  [216, 290],
  [226, 336, 1],
])
/** Its collar, standing up round the neck. */
const COLLAR = spline([
  [70, 208, 1],
  [104, 206],
  [140, 200, 1],
  [150, 224],
  [110, 230],
  [66, 232, 1],
])

type Marks = { hair: string; hat: string; cloak: string; shade: string }

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)

  // Cropped hair at the nape: short paper strands.
  let hair = ''
  for (let i = 0; i < 7; i++) {
    const t = (i + 0.5) / 7
    hair += gouge(96 - t * 44, 96 + t * 8, 84 - t * 26, 150 + t * 10, between(r, 0.8, 1.2), -2)
  }
  // The band round the crown, cut in paper, and a few long cuts of light
  // down the crown.
  let hat = gouge(54, 60, 162, 56, 2.2, -0.5)
  for (const x of [80, 104, 128]) hat += gouge(x, -6, x + (x - 108) * 0.12, 50, 0.9, 0.3)

  // The cloak hangs straight and still: a few long folds, no movement.
  let cloak = ''
  for (const x of [26, 58, 150, 190])
    cloak += gouge(x, 250 + between(r, -4, 6), x + between(r, -4, 4), 336, between(r, 1.4, 2), 0.4)

  // The hollow under the cheekbone, cut as shallow bowls of fine line, as
  // Scrooge's is: a face drawn in on itself.
  let shade = ''
  for (let rad = 14; rad < 34; rad += 3.4)
    shade += arcDashes(r, 142, 120, rad, deg(62), deg(150), [8, 24], [2, 5])

  const m = { hair, hat, cloak, shade }
  marksBySeed.set(seed, m)
  return m
}

/** Don John, head and shoulders in his cloak, facing right in the 0..240 by 0..332 frame. */
export function DonJohnFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const clip = `${uid}-dj-head-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={DON_JOHN_HEAD} />
        </clipPath>
      </defs>
      <path d={DON_JOHN_CLOAK} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.cloak} fill={PAPER} />
      <path d={DON_JOHN_HEAD} fill={PAPER} />
      <g clipPath={`url(#${clip})`}>
        <path d={m.shade} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      </g>
      <path d={COLLAR} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.hair} fill={PAPER} />
      <g transform={HAT_T}>
        <path d={CROWN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path d={m.hat} fill={PAPER} />
        <path d={BRIM} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      </g>
      <path d={EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.3} />
      <path d={EAR.curl} fill="none" stroke={INK} strokeWidth={1.5} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        {/* nostril, drawn in */}
        <path d="M175 128C171 125 171.5 120 177 119" strokeWidth={1.4} />
        {/* "too like an image, and says nothing": the lips shut, the corner turned down */}
        <path d="M168 146.5L160 147.5Q156.5 149 155 153" strokeWidth={2} />
        <path d="M167.5 155C165 156.2 162.5 156.5 160.5 156" strokeWidth={1} />
        <path d="M159 162Q157 166 158.5 170" strokeWidth={LINE.hairline} />
        <path d="M169 176C165 180 165 186 168 190" strokeWidth={LINE.hairline} />
        {/* "How tartly that gentleman looks": the brow drawn hard down to the nose */}
        <path d="M143 80Q154 82 167 93" strokeWidth={3.4} />
        <path d="M160 83L164 91M156 82L159 88" strokeWidth={1} />
        {/* the melancholy eye, the lid heavy, looking down and away */}
        <path d="M147 98Q155 95.5 163 99.5" strokeWidth={2.6} />
        <path d="M148.5 103.5Q155.5 106 161.5 102.5" strokeWidth={1.1} />
        <path d="M148 108Q154 111 160 108.5" strokeWidth={LINE.hairline} />
      </g>
      <circle cx={157.2} cy={101.8} r={2.4} fill={INK} />
    </g>
  )
}

/** A thick ink halo round head, hat and cloak. */
export function DonJohnKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={DON_JOHN_HEAD} />
      <path d={HAIR} />
      <g transform={HAT_T}>
        <path d={CROWN} />
        <path d={BRIM} />
      </g>
      <path d={DON_JOHN_CLOAK} />
    </g>
  )
}

const P = placing(26, 38, 0.88)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // He stands apart from the revels: only a little light reaches him, ahead.
  ground = portraitGround('don-john', 3601, (x, y) =>
    clamp(0.04 + ((x - 90) / 260) * 0.7 - (Math.abs(y - PH * 0.4) / PH) * 0.3),
  )
  return ground
}

function DonJohnPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <DonJohnKnockout />
        <DonJohnFigure uid={uid} seed={3601} />
      </g>
      <PortraitRule />
    </>
  )
}

export const donJohnPortrait: LinocutArt = { width: PW, height: PH, Draw: DonJohnPortrait }

const BROW_AT = P.to(156, 84)
const EYE_AT = P.to(155, 102)
const MOUTH_AT = P.to(162, 148)

export const donJohn: Portrait = {
  name: 'Don John',
  art: donJohnPortrait,
  alt: 'A linocut portrait of Don John in profile, facing right, against a dark ground: a man with a long jaw, his dark hair cropped short at the nape, in a tall black hat with a narrow brim pulled down low over his brow. His brow is drawn hard down towards his nose in a frown, his eyelid is heavy and his eye looks down and away, and his lips are shut, the corner of the mouth turned down. His cheek is hollowed with fine curved lines. He is wrapped in a long dark cloak closed up to the throat. Three numbered red markers point to his frowning brow, his heavy-lidded eye and his shut, down-turned mouth.',
  describedBy: [
    {
      phrase: 'How tartly that gentleman looks',
      at: [BROW_AT[0] + 40, BROW_AT[1] - 58],
      to: BROW_AT,
    },
    {
      phrase: 'He is of a very melancholy disposition',
      at: [EYE_AT[0] + 72, EYE_AT[1] - 8],
      to: EYE_AT,
    },
    {
      phrase: 'too like an image, and says nothing',
      at: [MOUTH_AT[0] + 56, MOUTH_AT[1] + 44],
      to: MOUTH_AT,
    },
  ],
  where: 'Act 2, Scene 1',
  note: 'Don John barely speaks in company, and the others read his silence as sourness. Alone with his followers he is frank about it: “let me be that I am, and seek not to alter me.”',
  artNote:
    'The play describes his manner, not his features. His long jaw, tall black hat and dark cloak are how the panels draw that manner, and how they tell him from everyone else.',
}
