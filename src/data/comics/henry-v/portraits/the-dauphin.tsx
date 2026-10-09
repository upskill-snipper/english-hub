import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, ribbon, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  CIRCLET_BAND,
  CIRCLET_STONES,
  EarCut,
  fleur,
  folds,
  locks,
  napeShade,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PRINCE_CIRCLET,
  PW,
  spline,
  YOUTH_EAR,
  YOUTH_HEAD,
  YOUTH_JAW,
  YouthEye,
  YouthNoseAndMouth,
} from './common'

/**
 * The Dauphin, as the play gives him in the French camp on the night before
 * Agincourt, where he can talk of nothing but his horse:
 *
 *   DAUPHIN: "When I bestride him, I soar, I am a hawk. He trots the air"
 *   ORLEANS: "He's of the colour of the nutmeg."
 *   ORLEANS: "By the white hand of my lady, he's a gallant prince."
 *   ORLEANS: "He is simply the most active gentleman of France."
 *   (Act 3, Scene 7)
 *   THE FRENCH KING: "And you, Prince Dauphin, with all swift dispatch"
 *   (Act 2, Scene 4)
 *
 * So: the King of France's son, and beside him the horse he loves, its head
 * high and its nostril wide ("qui a les narines de feu"). The play says
 * nothing of his face or his age; he pairs himself with Henry's youth, which
 * he mocks ("As matching to his youth and vanity"), so he is drawn young too,
 * from the youth's head (YOUTH_HEAD).
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx, 'dauphin'):
 * the youth's head, clean-shaven, his dark hair long to the shoulder and
 * curled under at the ends (DAUPHIN_HAIR, longer than Scroop's, which stops at
 * the jaw); the prince's circlet with three small points, lower than a king's
 * crown (DAUPHIN_CIRCLET, as ./common.tsx cuts it at this size,
 * PRINCE_CIRCLET); and the kit's mark of the French, the lilies of France cut
 * in paper, sprinkled over a dark gown, here with a high standing collar, as a
 * great lord wore it about 1415. The hair and the circlet are the kit's
 * invention, only so that he is known at a glance from his father and from
 * Henry, and the card's small print says so. He is drawn with the care the
 * English are, a proud young prince, never a caricature. It is midnight and
 * he has not yet gone to arm ("'Tis midnight; I'll go arm myself"), so he
 * wears no armour.
 *
 * THE HORSE, behind him, is the panels' horse (../panels/the-french-wait-for-
 * morning.tsx): a courser, dark, its coat cut with fine diagonal strokes for
 * "the colour of the nutmeg", its eye and its wide nostril cut in paper, its
 * bridle in paper. Its neck runs down out of the foot of the block behind his
 * shoulder: in the first draft its head was cut off at the throat by the edge
 * of the block and read as a horse's head on its own (redrawn 9 October 2026,
 * with the hair and the three-pointed circlet, which the first draft, cut
 * before the kit had a Dauphin, gave five points and a short crop). There is
 * no red in this plate.
 *
 * He faces left, towards the English, so the figure is drawn facing right and
 * flipped; the horse is drawn in the portrait's own frame.
 *
 * MARKERS. "Prince Dauphin" comes to his circlet from in front, at its own
 * height, and stops at its front edge; "the most active gentleman of France"
 * comes to the lilies on his breast from in front; the horse's marker sits on
 * its cheek with no line. No line crosses a face.
 *
 * Seeds: 9201 to 9205 (the figure's marks), 9210 (the ground), 9211 to 9213
 * (the horse).
 */

/** His head is lifted a little: he is proud of his horse, and of himself. */
const LIFT = 'rotate(-4 112 214)'

/**
 * Dark hair, long to the shoulder, as the kit cuts it (DAUPHIN_HAIR): from the
 * brow under the circlet over the crown, in front of the ear and behind it,
 * falling down the back of the neck to the shoulder, curled under at the ends.
 */
const HAIR = spline([
  [157, 66, 1],
  [146, 72],
  [134, 82],
  [126, 96],
  [121, 112],
  [118, 126, 1],
  [112, 110],
  [102, 102],
  [91, 106],
  [86, 124],
  [88, 150],
  [92, 180],
  [96, 212],
  [99, 238, 1],
  [88, 248],
  [78, 240, 1],
  [68, 252],
  [58, 244, 1],
  [46, 254],
  [37, 238, 1],
  [35, 200],
  [37, 160],
  [39, 120],
  [44, 86],
  [58, 56],
  [84, 36],
  [114, 27],
  [141, 32],
  [157, 48],
])

/** The gown over his shoulders. */
const GOWN = spline([
  [-12, 340, 1],
  [-6, 300],
  [8, 266],
  [34, 244],
  [66, 234],
  [104, 236],
  [146, 232],
  [180, 242],
  [206, 266],
  [222, 300],
  [230, 340, 1],
])
/**
 * The high standing collar of the gown, round the neck below the jaw and
 * flaring onto the shoulders, as a great lord's gown was worn about 1415. Its
 * pleats and its rim are cut in paper.
 */
const COLLAR = spline([
  [58, 200, 1],
  [86, 202],
  [114, 206],
  [134, 210],
  [146, 214, 1],
  [152, 230],
  [162, 250, 1],
  [124, 258],
  [84, 256],
  [42, 250, 1],
  [50, 226],
])
const COLLAR_EDGE = 'M60 202Q104 204 144 216'
const COLLAR_PLEATS =
  'M70 206Q66 228 60 250M92 206Q90 230 86 254M114 209Q114 232 112 256M134 213Q136 234 138 256'
/** The front opening of the gown, from the collar down. */
const GOWN_FRONT = 'M150 250Q168 290 178 340'

/** Where the lilies lie on the gown: on the breast, the shoulder and the back. */
const LILY_AT: [number, number, number][] = [
  [186, 282, 1.25],
  [204, 318, 1.25],
  [160, 304, 1.25],
  [130, 274, 1.2],
  [108, 312, 1.25],
  [76, 278, 1.2],
  [52, 314, 1.25],
  [24, 290, 1.15],
]

type Marks = {
  hair: string
  ends: string
  nape: string
  gown: string
  pleats: string
  lilies: string
}

const marks = once((): Marks => {
  const hair =
    locks(
      9201,
      15,
      (t) => [150 - t * 100, 62 - t * 2],
      (t) => [124 - t * 76, 116 + t * 110],
      [0.8, 1.3],
      -7,
    ) +
    locks(
      9202,
      6,
      (t) => [148 - t * 20, 70 + t * 10],
      (t) => [122 - t * 4, 102 + t * 20],
      [0.9, 1.4],
      -2,
    )
  // The ends of the hair, curled under at the shoulder: short curved cuts.
  let ends = ''
  for (const [x, y] of [
    [92, 232],
    [80, 236],
    [68, 240],
    [56, 242],
    [44, 240],
  ] as Pt[])
    ends += gouge(x + 4, y - 16, x - 2, y + 2, 1.1, -3)
  const nape = napeShade(9203, 150, 118, 80, 104)
  const gown = folds(9204, [14, 214], [292, 306], 7)
  // The deep pleats of the gown, falling from the collar.
  const pleats = folds(9205, [36, 196], [258, 268], 6)
  const lilies = LILY_AT.map(([x, y, s]) => fleur(x, y, s)).join('')
  return { hair, ends, nape, gown, pleats, lilies }
})

/** The Dauphin, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function DauphinFigure({ uid }: { uid: string }) {
  const m = marks()
  const id = `${uid}-dau`
  return (
    <g>
      <defs>
        <clipPath id={`${id}-head`}>
          <path d={YOUTH_HEAD} />
        </clipPath>
        <clipPath id={`${id}-hair`}>
          <path d={HAIR} />
        </clipPath>
      </defs>
      {/* the dark gown, sprinkled with the lilies of France */}
      <path d={GOWN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.gown + m.pleats} fill={PAPER} />
      <path d={m.lilies} fill={PAPER} />
      <path
        d={GOWN_FRONT}
        fill="none"
        stroke={PAPER}
        strokeWidth={LINE.bold}
        strokeLinecap="round"
      />
      <g transform={LIFT}>
        <path d={YOUTH_HEAD} fill={PAPER} />
        <g clipPath={`url(#${id}-head)`} fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.nape} strokeWidth={1.4} />
          <path d={YOUTH_JAW} strokeWidth={1.4} />
        </g>
      </g>
      {/* the high standing collar */}
      <path d={COLLAR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={COLLAR_PLEATS} fill="none" stroke={PAPER} strokeWidth={1.1} strokeLinecap="round" />
      <path d={COLLAR_EDGE} fill="none" stroke={PAPER} strokeWidth={2.2} strokeLinecap="round" />
      <g transform={LIFT}>
        <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <g clipPath={`url(#${id}-hair)`}>
          <path d={m.hair + m.ends} fill={PAPER} />
        </g>
        <EarCut {...YOUTH_EAR} />
        <YouthNoseAndMouth />
        <YouthEye look="open" brow={2.6} />
        {/* "Prince Dauphin": the prince's circlet, in paper */}
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
    </g>
  )
}

/** A thick ink halo round head, circlet and shoulders. */
function DauphinKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={GOWN} />
      <path d={COLLAR} />
      <g transform={LIFT}>
        <path d={YOUTH_HEAD} />
        <path d={HAIR} />
        <path d={PRINCE_CIRCLET} />
      </g>
    </g>
  )
}

const P = placing(84, 22, 0.9, true)

// ── His horse, in the portrait's own frame, its head facing left ────────────

/**
 * The horse's head and neck: the poll between the ears at the top, the line
 * of the face running down to the muzzle, the round of the jaw, the throat,
 * and the neck running down off the foot of the block behind the Dauphin's
 * shoulder and off its edge to the right, the crest carrying the mane. The
 * neck goes down out of the picture so that the horse is plainly standing
 * there, all of it: its head cut off at the throat by the edge of the block,
 * as the first draft had it, read as a horse's head on its own.
 */
const HORSE = spline([
  [300, 34, 1],
  [288, 50],
  [276, 72],
  [264, 100],
  [254, 124],
  [246, 144],
  [240, 158],
  [238, 168, 1],
  [242, 176],
  [252, 181, 1],
  [266, 180],
  [282, 172],
  [294, 158],
  [298, 146, 1],
  [292, 176],
  [284, 206],
  [278, 242],
  [276, 282],
  [278, 346, 1],
  [346, 346, 1],
  [346, 80, 1],
  [334, 60],
  [318, 42],
])
/** The ears, pricked up at the poll. */
const EARS =
  'M292 40C286 30 285 18 288 8C295 16 300 26 301 36Z' +
  'M304 36C303 26 305 14 311 6C315 16 315 28 312 38Z'
/** The forelock, falling over the brow between the ears. */
const FORELOCK = 'M297 38C291 46 285 54 281 64C289 60 296 54 302 46Z'
/** The round of the jaw (the cheek), as a curve cut in paper. */
const JAW = 'M252 181Q276 176 290 160Q300 146 300 128'
/** The eye, high on the side of the head, its brow above it, and the wide nostril. */
const EYE = 'M279 80Q288 72.6 298 79Q288 87 279 80Z'
const EYE_BROW = 'M278 72Q288 66 300 71'
const NOSTRIL = 'M243 152Q247 141 256 143Q255 155 243 152Z'
const MOUTH = 'M240 172Q246 170 252 174'
/** The bridle: the browband, the cheekpiece, the noseband, and the ring of the bit. */
const BRIDLE = 'M286 58L312 48' + 'M302 52L262 164' + 'M252 132L282 146'
const BIT: [number, number] = [258, 172]

const horseMarks = once(() => {
  // "of the colour of the nutmeg": the coat a mid-tone, fine diagonal cuts
  // over the ink, as the panels cut it.
  const r = rng(9211)
  let coat = ''
  for (let x = 160; x < 400; x += 3.8)
    coat += gouge(x, 350 + between(r, -2, 2), x + 110, 0 + between(r, -2, 2), 0.42)
  // The mane along the crest of the neck: locks falling over to the right,
  // in ink with paper between.
  const mane: string[] = []
  const r2 = rng(9212)
  for (let i = 0; i < 8; i++) {
    const t = i / 7
    const x = 306 + t * 30 + between(r2, -1, 1)
    const y = 40 + t * 46 + between(r2, -2, 2)
    mane.push(
      ribbon(
        [
          [x, y],
          [x + 7, y + 4],
          [x + 12, y + 14],
          [x + 14, y + 26],
        ],
        9,
        0.6,
      ),
    )
  }
  // The light down the line of the face, from the front.
  const r3 = rng(9213)
  let face = ''
  for (let i = 0; i < 8; i++) {
    const t = i / 7
    const x = 284 - t * 36
    const y = 66 + t * 86
    face += gouge(x + between(r3, -1, 1), y, x - 3 + between(r3, -1, 1), y + 12, 1.2, 0.4)
  }
  return { coat, mane: mane.join(''), face }
})

function Horse({ id }: { id: string }) {
  const h = horseMarks()
  return (
    <g>
      <defs>
        <clipPath id={`${id}-horse`}>
          <path d={HORSE} />
          <path d={EARS} />
        </clipPath>
      </defs>
      <g fill={PAPER} stroke={PAPER} strokeWidth={2.6} strokeLinejoin="round">
        <path d={HORSE} />
        <path d={EARS} />
      </g>
      <path d={HORSE} fill={INK} />
      <path d={EARS} fill={INK} />
      <g clipPath={`url(#${id}-horse)`}>
        <path d={h.coat} fill={PAPER} />
        <path d={h.face} fill={PAPER} />
      </g>
      <path d={h.mane} fill={INK} stroke={PAPER} strokeWidth={1.1} />
      <path d={FORELOCK} fill={INK} stroke={PAPER} strokeWidth={1.1} />
      <g fill="none" stroke={PAPER} strokeLinecap="round" strokeLinejoin="round">
        <path d={JAW} strokeWidth={2.2} />
        <path d={BRIDLE} strokeWidth={2} />
        <path d={MOUTH} strokeWidth={1.4} />
        <path d={EYE_BROW} strokeWidth={1.2} />
      </g>
      <circle cx={BIT[0]} cy={BIT[1]} r={4} fill="none" stroke={PAPER} strokeWidth={1.8} />
      {/* "qui a les narines de feu": the eye and the wide nostril, in paper */}
      <path d={EYE} fill={PAPER} />
      <circle cx={289} cy={80} r={2.8} fill={INK} />
      <path d={NOSTRIL} fill={PAPER} />
    </g>
  )
}

const ground = once(() =>
  // The French camp at midnight: the dark, a little lighter low ahead of him.
  portraitGround('hv-the-dauphin', 9210, (x, y) =>
    clamp(0.06 + ((200 - x) / 220) * 0.7 + (y / PH) * 0.12),
  ),
)

function DauphinPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <Horse id={`${uid}-dau`} />
      <g transform={P.transform}>
        <DauphinKnockout />
        <DauphinFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const theDauphinPortrait: LinocutArt = { width: PW, height: PH, Draw: DauphinPortrait }

/** The front of the circlet, on the lifted head, and the lily on his breast. */
const lifted = (x: number, y: number): [number, number] => {
  const a = (-4 * Math.PI) / 180
  const dx = x - 112
  const dy = y - 214
  return P.to(112 + dx * Math.cos(a) - dy * Math.sin(a), 214 + dx * Math.sin(a) + dy * Math.cos(a))
}
const CIRCLET_AT = lifted(166, 68)
const LILY = P.to(LILY_AT[0][0], LILY_AT[0][1])

export const theDauphin: Portrait = {
  name: 'The Dauphin',
  art: theDauphinPortrait,
  alt: 'A linocut portrait of the Dauphin in profile, facing left, at night: a proud young man, clean-shaven, his head lifted a little, his dark hair falling to his shoulders and curled under at the ends, beneath a pale prince’s circlet with three small points. He wears a dark gown with a high standing collar, sprinkled with pale fleurs-de-lis, the lilies of France. Behind him on the right stands his horse, a dark courser with its ears pricked and its neck running down out of the picture behind his shoulder, its coat cut with fine lines, a pale eye, a wide pale nostril and a pale bridle. Three numbered red markers point to his circlet, the lilies on his gown and the horse.',
  describedBy: [
    { phrase: 'Prince Dauphin', at: [CIRCLET_AT[0] - 46, CIRCLET_AT[1] - 4], to: CIRCLET_AT },
    {
      phrase: 'the most active gentleman of France',
      at: [LILY[0] - 40, LILY[1] + 4],
      to: [LILY[0] - 6, LILY[1]],
    },
    { phrase: 'When I bestride him, I soar, I am a hawk', at: [282, 140] },
  ],
  where: 'Act 2, Scene 4; Act 3, Scene 7',
  note: 'The Dauphin mocked Henry’s youth with a gift of tennis balls. On the night before the battle he can talk of nothing but his horse, and once he has gone to arm, the Constable mocks his courage behind his back.',
  artNote:
    'The play does not describe his face. His circlet with three points and his long hair are how the panels tell him from his father and from Henry; the lilies of France mark the French in every panel.',
}
