import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  CROWN,
  CROWN_BAND_LINE,
  folds,
  Hand,
  locks,
  MAN_EAR,
  MAN_HEAD,
  NeckShadow,
  neckShade,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  type Digit,
} from './common'

/**
 * Claudius, King of Denmark, from three moments that between them give his
 * face, his habit and what he gained:
 *
 *   HAMLET, on the platform at night: "The King doth wake tonight and takes
 *   his rouse, Keeps wassail, and the swaggering upspring reels; And as he
 *   drains his draughts of Rhenish down, The kettle-drum and trumpet thus
 *   bray out The triumph of his pledge." (Act 1, Scene 4)
 *   HAMLET, when the Ghost has gone: "O villain, villain, smiling damned
 *   villain! My tables. Meet it is I set it down, That one may smile, and
 *   smile, and be a villain!" (Act 1, Scene 5)
 *   CLAUDIUS, alone, trying to pray: "since I am still possess'd Of those
 *   effects for which I did the murder" ... "My crown, mine own ambition,
 *   and my queen." (Act 3, Scene 3)
 *
 * So: a king, crowned, smiling, holding a standing cup at his breast. The
 * smile does not reach his eye, which is level and watchful. Rhenish is wine
 * of the Rhine, a white wine, so nothing in the cup is coloured.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): every
 * man's head (MAN_HEAD); the King's crown, the band with five points that
 * the Tempest portraits cut at this size (CROWN), here printed in the spot
 * colour, as the kit prints it for a picture about the crown, because this
 * one is: it is what he says he did the murder for; dark hair under it; his
 * short dark beard along the jaw and round the chin, with the moustache (the
 * kit's CLAUDIUS_BEARD carried to this size), and the smile cut in paper
 * through it (the kit's SMILE); a king's dark gown with a broad collar of fur,
 * paper spotted with ink. Hamlet's names for him ("a satyr", "the bloat
 * King") stay in Hamlet's mouth: he is drawn plainly, never as a caricature.
 *
 * The cup is held by its stem, low, in a hand closed round it, every finger
 * cut apart: a man holding his cup, not raising it. RED is on the crown only,
 * never on his mouth or his beard.
 *
 * Seeds: 7301 to 7305 (the figure's marks), 7310 (the ground).
 */

/** Dark hair under the crown, swept back to the nape. In the head's frame. */
const HAIR = spline([
  [158, 66, 1],
  [148, 70],
  [133, 74],
  [120, 84],
  [113, 100, 1],
  [101, 101],
  [92, 110],
  [86, 126],
  [80, 146, 1],
  [68, 138],
  [56, 150, 1],
  [46, 128],
  [40, 100],
  [42, 72],
  [54, 50],
  [78, 36],
  [108, 30],
  [138, 32],
  [156, 44],
  [162, 56],
])

/**
 * The short dark beard along the jaw and round the chin. The kit's
 * CLAUDIUS_BEARD, carried to this size point for point, covered the cheek
 * and the mouth with ink, so the smile could only be a cut through it; here
 * it is trimmed back to the jaw and the chin, under the lower lip, so the
 * smile is his own mouth's.
 */
const BEARD = spline([
  [96, 134, 1],
  [103, 154],
  [115, 173],
  [131, 187],
  [148, 194],
  [161, 192],
  [171, 183],
  [176, 170],
  [175, 160, 1],
  [166, 162],
  [155, 166],
  [143, 166],
  [130, 160],
  [116, 148],
  [106, 136],
])
/** The moustache over the upper lip, its ends turned down to the smile. */
const MOUSTACHE = spline([
  [167.6, 136.6, 1],
  [171, 139.4],
  [170.4, 142.8],
  [164.4, 144.8],
  [157.6, 147, 1],
  [160.6, 141.4],
])
/** "smile, and smile": the line of the mouth turned up at the corner. */
const SMILE_LINE = 'M169.6 148.2Q164 150 158.8 146.2'

/** His shoulders in the gown. */
const BODY = spline([
  [-14, 336, 1],
  [-8, 294],
  [10, 258],
  [42, 232],
  [76, 220],
  [112, 226],
  [148, 220],
  [180, 232],
  [206, 260],
  [224, 296],
  [232, 336, 1],
])
/** The broad collar of fur over his shoulders and breast, cut in paper. */
const FUR = spline([
  [8, 266, 1],
  [36, 238],
  [72, 224],
  [110, 228],
  [148, 222],
  [182, 234],
  [210, 262, 1],
  [200, 288],
  [174, 270],
  [142, 262],
  [110, 266],
  [80, 262],
  [50, 272],
  [24, 292, 1],
])

/** The standing cup: its bowl, the stem with a knop, and the foot. */
const CUP_X = 206
const BOWL = `M${CUP_X - 20} 232Q${CUP_X - 20} 262 ${CUP_X - 4} 268L${CUP_X + 4} 268Q${CUP_X + 20} 262 ${CUP_X + 20} 232Z`
const RIM = `M${CUP_X - 21} 230.5L${CUP_X + 21} 230.5L${CUP_X + 20} 236L${CUP_X - 20} 236Z`
const STEM = `M${CUP_X - 4} 266L${CUP_X + 4} 266L${CUP_X + 3.4} 306L${CUP_X - 3.4} 306Z`
const FOOT = `M${CUP_X - 4} 304Q${CUP_X - 6} 310 ${CUP_X - 16} 314L${CUP_X + 16} 314Q${CUP_X + 6} 310 ${CUP_X + 4} 304Z`
/** The chasing on the bowl: a band of lobes, cut in ink. */
const CHASING =
  `M${CUP_X - 18} 244L${CUP_X + 18} 244` +
  [-12, -4, 4, 12]
    .map((x) => `M${n(CUP_X + x - 3)} 246Q${n(CUP_X + x)} 258 ${n(CUP_X + x + 3)} 246`)
    .join('')

/** His forearm in the gown's sleeve, from below the block up across his body to the cup. */
const SLEEVE = spline([
  [96, 346, 1],
  [110, 320],
  [140, 300],
  [174, 290],
  [190, 288, 1],
  [194, 316, 1],
  [168, 322],
  [142, 334],
  [126, 350, 1],
])
const CUFF = spline([
  [184, 286, 1],
  [196, 285, 1],
  [199, 316, 1],
  [188, 318, 1],
])

/**
 * The hand closed round the stem below the knop: the back of the hand
 * towards us, the four fingers wrapped across the stem, the thumb over the
 * first of them. In the hand's own frame, the wrist at the origin.
 */
const HAND_AT: Pt = [192, 300]
const PALM = spline([
  [-2, -11],
  [7, -13],
  [14, -10],
  [15, 0],
  [14, 11],
  [6, 13],
  [-2, 10],
])
const DIGITS: Digit[] = [
  { from: [10, 10], to: [24, 10.4], w: 6 },
  { from: [10, 4], to: [25.6, 4.2], w: 6.2 },
  { from: [10, -2], to: [25.6, -2], w: 6.2 },
  { from: [10, -8], to: [24, -8.2], w: 6 },
  { from: [2, -10], to: [17, -15.4], w: 6.6 },
]
const KNUCKLES = 'M11.6 -10.4L11.6 12.6'

type Marks = {
  hair: string
  neck: string
  beard: string
  body: string
  fur: string
  spots: Pt[]
  sleeve: string
}

const marks = once((): Marks => {
  const r = rng(7301)
  const hair = locks(
    7302,
    16,
    (t) => [154 - t * 40, 52 + t * 30],
    (t) => [72 - t * 22, 50 + t * 88],
    [0.9, 1.5],
    -8,
  )
  const neck = neckShade(7303)
  // Paper strands through the beard, falling to the point of the chin.
  const beard = locks(
    7304,
    8,
    (t) => [104 + t * 64, 146 + t * 18],
    (t) => [124 + t * 40, 184 + t * 6],
    [0.6, 0.95],
    2,
  )
  const body = folds(7305, [30, 200], [290, 304], 6)
  // The fur's lie, and its spots: ink tails scattered over the paper.
  const fur = 'M30 274Q62 250 98 246M126 246Q164 248 194 272'
  const spots: Pt[] = []
  for (let i = 0, tries = 0; i < 18 && tries < 400; tries++) {
    const x = between(r, 16, 204)
    const y = between(r, 232, 284)
    const inside =
      y > 236 + Math.abs(x - 110) * 0.02 &&
      y < 262 + Math.abs(x - 110) * 0.2 &&
      y > 226 + Math.abs(x - 110) * 0.28
    if (!inside) continue
    if (spots.some(([a, b]) => Math.hypot(a - x, b - y) < 15)) continue
    spots.push([x, y])
    i++
  }
  const sleeve = gouge(124, 330, 170, 304, 1.2, -1.2) + gouge(140, 340, 182, 314, 1, -0.8)
  return { hair, neck, beard, body, fur, spots, sleeve }
})

/** Claudius, head and shoulders, with his cup, facing right in the 0..240 by 0..332 frame. */
export function ClaudiusFigure({ uid }: { uid: string }) {
  const m = marks()
  const id = `${uid}-cla`
  return (
    <g>
      <defs>
        <clipPath id={`${id}-head`}>
          <path d={MAN_HEAD} />
        </clipPath>
        <clipPath id={`${id}-hair`}>
          <path d={HAIR} />
        </clipPath>
        <clipPath id={`${id}-beard`}>
          <path d={BEARD} />
        </clipPath>
      </defs>
      <path d={BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />

      <path d={MAN_HEAD} fill={PAPER} />
      <NeckShadow id={`${id}-ns`} />
      <g clipPath={`url(#${id}-head)`}>
        <path d={m.neck} fill="none" stroke={INK} strokeWidth={1.3} strokeLinecap="round" />
      </g>
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${id}-hair)`}>
        <path d={m.hair} fill={PAPER} />
      </g>
      <path d={MAN_EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.4} />
      <path d={MAN_EAR.curl} fill="none" stroke={INK} strokeWidth={1.5} />

      {/* the face: the nostril, the cheek lifted by the smile, the level eye */}
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d="M172.5 128C168.5 125.5 168.5 120 174 119" strokeWidth={1.5} />
        <path d="M164.6 122.4Q155.4 131 156.2 143.4" strokeWidth={1.4} />
        <path d="M143.5 89Q153 85.6 165.5 88.6" strokeWidth={2.6} />
        <path d="M146 98Q154 94.6 162.5 98" strokeWidth={2.3} />
        <path d="M147.4 102.2Q154.6 103 161.2 100.2" strokeWidth={1.6} />
        <path d="M148.6 106.6Q154.6 108.6 160 106.4" strokeWidth={LINE.hairline} />
      </g>
      <circle cx={155.4} cy={99.8} r={2.6} fill={INK} />

      {/* "smiling damned villain": the mouth turned up, the cheek lifted */}
      <path d={SMILE_LINE} fill="none" stroke={INK} strokeWidth={1.7} strokeLinecap="round" />
      <path d="M158 145.4Q156.4 146.8 157.2 149.4" fill="none" stroke={INK} strokeWidth={1} />
      {/* the short dark beard and the moustache */}
      <path d={BEARD} fill={INK} stroke={PAPER} strokeWidth={1.2} strokeLinejoin="round" />
      <g clipPath={`url(#${id}-beard)`}>
        <path d={m.beard} fill={PAPER} />
      </g>
      <path d={MOUSTACHE} fill={INK} stroke={PAPER} strokeWidth={1} strokeLinejoin="round" />

      {/* "My crown": the King's crown, in the spot colour */}
      <path d={CROWN} fill={RED} stroke={INK} strokeWidth={1.8} strokeLinejoin="round" />
      <path d={CROWN_BAND_LINE} fill="none" stroke={INK} strokeWidth={1.4} />

      {/* the gown's collar of fur */}
      <path d={FUR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path d={m.fur} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      <g fill={INK}>
        {m.spots.map(([x, y]) => (
          <path
            key={`${x}-${y}`}
            d={`M${n(x - 1.6)} ${n(y)}L${n(x)} ${n(y + 5)}L${n(x + 1.6)} ${n(y)}Z`}
          />
        ))}
      </g>

      {/* "his draughts of Rhenish": the cup, held by its stem */}
      <g stroke={INK} strokeWidth={6} strokeLinejoin="round" fill={INK}>
        <path d={BOWL} />
        <path d={STEM} />
        <path d={FOOT} />
      </g>
      <path d={BOWL} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={CHASING} fill="none" stroke={INK} strokeWidth={1} strokeLinecap="round" />
      <path d={RIM} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={STEM} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={FOOT} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.sleeve} fill={PAPER} />
      <path d={CUFF} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <Hand
        transform={`translate(${HAND_AT[0]} ${HAND_AT[1]})`}
        palm={PALM}
        digits={DIGITS}
        lines={KNUCKLES}
        halo={3.4}
      />
    </g>
  )
}

/** A thick ink halo round head, crown and shoulders. */
function ClaudiusKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={MAN_HEAD} />
      <path d={HAIR} />
      <path d={CROWN} />
      <path d={BEARD} />
      <path d={BODY} />
    </g>
  )
}

const P = placing(30, 10, 0.92)

/** The hall at night, lit by the feast's candles ahead of him. */
const ground = once(() =>
  portraitGround('hamlet-claudius', 7310, (x, y) =>
    clamp(0.08 + ((x - 40) / 280) * 0.86 - (y / PH) * 0.12),
  ),
)

function ClaudiusPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <ClaudiusKnockout />
        <ClaudiusFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const claudiusPortrait: LinocutArt = { width: PW, height: PH, Draw: ClaudiusPortrait }

const CUP_AT = P.to(CUP_X + 18, 246)
const SMILE_AT = P.to(142, 128)
const CROWN_AT = P.to(170, 46)

export const claudius: Portrait = {
  name: 'Claudius',
  art: claudiusPortrait,
  alt: 'A linocut portrait of Claudius in profile, facing right: a man in his prime with a short dark beard and moustache, smiling, the smile cut in white through his beard, while his eye stays level and watchful. On his dark hair he wears a crown with five points, printed in red. His dark gown has a broad collar of white fur spotted with black. In front of his chest he holds a standing cup by its stem, his fingers closed round it. Three numbered red markers point to the cup, his smiling cheek and the crown.',
  describedBy: [
    { phrase: 'his draughts of Rhenish', at: [CUP_AT[0] + 46, CUP_AT[1] - 10], to: CUP_AT },
    { phrase: 'smiling damned villain', at: SMILE_AT },
    {
      phrase: 'My crown, mine own ambition, and my queen',
      at: [CROWN_AT[0] + 56, CROWN_AT[1]],
      to: CROWN_AT,
    },
  ],
  where: 'Act 1, Scene 4; Act 1, Scene 5; Act 3, Scene 3',
  note: 'The new King drinks and feasts while Hamlet mourns. After the Ghost speaks, Hamlet writes down that “one may smile, and smile, and be a villain”; Claudius himself, alone at prayer, names what he murdered for, and cannot give any of it up.',
  artNote:
    'The play describes his drinking and his smile, not his face. His crown, short dark beard and furred gown are how the panels draw him. The crown is printed in red because it is the thing he confesses he killed for.',
}
