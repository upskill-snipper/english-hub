import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  arc,
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  ribbon,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'

import { FLUELLEN_CAP, FLUELLEN_CAP_CUT } from '../panels/people'
import {
  bandAlong,
  Beard,
  beardStrands,
  carry,
  EarCut,
  JACK,
  JackBody,
  jackQuilts,
  JackNeck,
  MAN_EAR,
  MAN_HEAD,
  ManEye,
  ManNoseAndMouth,
  napeShade,
  NeckShadow,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  SHORT_BEARD_P,
  spline,
} from './common'

/**
 * Captain Fluellen, the Welsh captain, as the King and Fluellen himself give
 * him:
 *
 *   KING HENRY (alone, in Erpingham's cloak, after Fluellen has scolded Gower
 *   for talking too loud in the camp): "Though it appear a little out of
 *   fashion, There is much care and valour in this Welshman." (Act 4,
 *   Scene 1)
 *   FLUELLEN: "the Welshmen did good service in garden where leeks did grow,
 *   wearing leeks in their Monmouth caps; which, your Majesty know, to this
 *   hour is an honourable badge of the service" (Act 4, Scene 7)
 *   GOWER: "but why wear you your leek today? Saint Davy's day is past."
 *   FLUELLEN: "I will be so bold as to wear it in my cap till I see him once
 *   again" (Act 5, Scene 1)
 *
 * So: a Welshman a little behind the fashion, with a leek in his cap. Nothing
 * is said of his face.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx, 'fluellen'):
 * every man's head (MAN_HEAD); a short dark beard (./common.tsx, SHORT_BEARD_P,
 * the kit's SHORT_BEARD at this size); his plain round cap (the kit's
 * FLUELLEN_CAP, carried to this size), which his own words make a Monmouth
 * cap, so its knitting is cut in paper in rows; and the long hood of an older
 * fashion pulled back off his head and lying gathered on his shoulders, its
 * tail hanging down his back, which is how the kit makes him "a little out of
 * fashion" (FLUELLEN_HOOD, cut again here with its folds); and the captain's
 * padded jack. The leek stands in his cap, as from Saint Davy's day on the kit
 * sets it (`leek`): a white stalk tucked into the edge of the cap above the
 * ear, its broad leaves spreading and drooping at the top, paper with an ink
 * edge. It is cut smaller than the kit's would be carried to this size, which
 * would run off the top of the block. Its green is left to the words.
 *
 * The camp by day, the light ahead of him. There is no red in this plate.
 *
 * He faces left, so the figure is drawn facing right and flipped.
 *
 * MARKERS, in the order of the play. "a little out of fashion" comes to the
 * hood on his shoulders from behind, at its own height; "much care and valour
 * in this Welshman" sits on his cheek with no line; "wearing leeks in their
 * Monmouth caps" comes to the leek from in front, at the leek's own height,
 * above his head. No line crosses his face.
 *
 * Seeds: 9801 to 9806 (the figure's marks), 9810 (the ground).
 */

/** The round cap: the kit's FLUELLEN_CAP at this size, and the band cut at its edge. */
const CAP = carry(FLUELLEN_CAP)
const CAP_EDGE = carry(FLUELLEN_CAP_CUT)

/** Dark hair below the cap: at the temple in front of the ear, and at the nape above the hood. */
const HAIR = spline([
  [118, 70, 1],
  [120, 90],
  [117, 110, 1],
  [110, 104],
  [100, 102],
  [92, 107],
  [88, 120],
  [86, 134],
  [80, 146, 1],
  [68, 140],
  [56, 146, 1],
  [48, 126],
  [45, 100],
  [47, 80, 1],
])

/**
 * The hood, pulled back off the head and lying gathered round the back of the
 * neck and on the shoulders, its long tail hanging down his back. Its cloth is
 * hatched in ink, a middle tone, and its folds are cut deep: in solid ink it
 * ran together with his dark hair and the jack into one black cape.
 */
const HOOD = spline([
  [76, 148, 1],
  [60, 152],
  [44, 164],
  [30, 184],
  [20, 210],
  [14, 240],
  [10, 280],
  [10, 340, 1],
  [42, 340, 1],
  [42, 300],
  [48, 270],
  [62, 250],
  [86, 238],
  [114, 232],
  [122, 222],
  [102, 214],
  [84, 206],
  [74, 192],
  [70, 172],
])
/** The deep folds of the gathered cloth, cut in ink across the hatching. */
const HOOD_FOLDS =
  gouge(66, 160, 38, 200, 1.8, 2) +
  gouge(72, 184, 42, 230, 2, 2.4) +
  gouge(90, 214, 56, 244, 1.8, 1.6) +
  gouge(30, 214, 22, 300, 1.6, 1.2) +
  gouge(42, 240, 34, 322, 1.5, 0.8)
/** The rim of the hood's opening, rolled back round the nape. */
const HOOD_RIM: Pt[] = [
  [72, 160],
  [74, 186],
  [86, 206],
  [104, 216],
  [122, 224],
]

// ── The leek, in its own frame: the foot of the stalk at the origin, standing up along -y ──

/** The white stalk, thick and round, widening a little where the leaves part. */
const STALK = spline([
  [-6.4, 4, 1],
  [-6.8, -12],
  [-6.8, -26],
  [-7.4, -36, 1],
  [7.2, -36.6, 1],
  [7, -26],
  [7, -12],
  [6.6, 4, 1],
])
/**
 * The leaves: broad and flat, parting from the top of the stalk, arching out
 * and drooping at their tips, each a ribbon wide at its foot and narrowing to
 * the tip. Back, middle and front.
 */
const LEAF_LINES: Pt[][] = [
  [
    [-4.6, -33],
    [-9.4, -44],
    [-15.6, -53],
    [-22.6, -58.6],
    [-29, -59],
    [-33, -54],
  ],
  [
    [0, -35],
    [0.2, -48],
    [1.4, -60],
    [4.4, -69],
    [9.6, -72],
    [13.6, -67],
  ],
  [
    [4.6, -33],
    [9.6, -42],
    [15.6, -49],
    [22, -52],
    [27, -50],
    [30, -44.6],
  ],
]
const LEAVES = LEAF_LINES.map((pts, i) => ribbon(pts, [13, 12, 12][i], 0.6, false))
/** The layers of the stalk, and the midrib down each leaf, in ink. */
const LEEK_LINES =
  'M-2.6 2Q-2.8 -16 -2 -32M2.6 2Q2.8 -16 2.2 -32' +
  LEAF_LINES.map(
    (pts) =>
      'M' +
      pts
        .slice(0, 5)
        .map(([x, y]) => `${x} ${y}`)
        .join('L'),
  ).join('')
/** Where the leek stands in the cap, above the ear, and how far it leans back. */
const LEEK_XY: Pt = [90, 76]
const LEEK_ROT = -14
const LEEK_S = 1.4
const LEEK_AT = `translate(${LEEK_XY[0]} ${LEEK_XY[1]}) rotate(${LEEK_ROT}) scale(${LEEK_S})`

function Leek() {
  return (
    <g transform={LEEK_AT}>
      <g fill={INK} stroke={INK} strokeWidth={4.4} strokeLinejoin="round">
        <path d={STALK} />
        {LEAVES.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <g fill={PAPER} stroke={INK} strokeWidth={1.1} strokeLinejoin="round">
        {LEAVES.map((d) => (
          <path key={d} d={d} />
        ))}
        <path d={STALK} />
      </g>
      <path d={LEEK_LINES} fill="none" stroke={INK} strokeWidth={0.9} strokeLinecap="round" />
    </g>
  )
}

type Marks = {
  quilts: string
  hair: string
  cheek: string
  nape: string
  beard: string
  knit: string
  cloth: string
}

const marks = once((): Marks => {
  const r = rng(9801)
  const quilts = jackQuilts(9802)
  let hair = ''
  for (const [x, y, x2, y2] of [
    [112, 78, 114, 104],
    [95, 110, 88, 132],
    [76, 92, 68, 134],
    [60, 90, 54, 128],
  ] as [number, number, number, number][])
    hair += gouge(x, y, x2 + between(r, -1, 1), y2, 0.8, between(r, -1, 1))
  let cheek = ''
  for (let rad = 14; rad < 24; rad += 3.6)
    cheek += arcDashes(r, 141, 110, rad, deg(80), deg(124), [7, 14], [2, 5])
  const nape = napeShade(9803, 150, 118, 86, 112)
  const beard = beardStrands(9804, false)
  // The knitting of a Monmouth cap: rows of small stitches round the crown,
  // cut in paper, brighter towards the light in front.
  const r2 = rng(9805)
  let knit = ''
  for (let row = 0; row < 9; row++) {
    const rad = 24 + row * 6
    for (let a = -164; a < -14; a += 9 + between(r2, -1, 1)) {
      if (a < -110 && r2() < 0.45) continue
      knit += arc(102, 84, rad, deg(a), deg(a + 4.2))
    }
  }
  // The cloth of the hood: diagonal hatching, a middle tone.
  let cloth = ''
  for (let k = -200; k < 200; k += 3.6) cloth += `M${k} 340L${k + 140} 140`
  return { quilts, hair, cheek, nape, beard, knit, cloth }
})

/** Fluellen, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function FluellenFigure({ uid }: { uid: string }) {
  const m = marks()
  const id = `${uid}-flu`
  return (
    <g>
      <defs>
        <clipPath id={`${id}-head`}>
          <path d={MAN_HEAD} />
        </clipPath>
        <clipPath id={`${id}-hair`}>
          <path d={HAIR} />
        </clipPath>
        <clipPath id={`${id}-cap`}>
          <path d={CAP} />
        </clipPath>
        <clipPath id={`${id}-hood`}>
          <path d={HOOD} />
        </clipPath>
      </defs>
      <JackBody quilts={m.quilts} />
      <path d={MAN_HEAD} fill={PAPER} />
      <NeckShadow id={id} />
      <g clipPath={`url(#${id}-head)`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.nape} strokeWidth={1.4} />
        <path d={m.cheek} strokeWidth={0.95} />
      </g>
      <JackNeck />
      {/* "a little out of fashion": the long hood, pulled back onto his shoulders */}
      <path d={HOOD} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <g clipPath={`url(#${id}-hood)`}>
        <path d={m.cloth} fill="none" stroke={INK} strokeWidth={1.2} />
      </g>
      <path d={HOOD_FOLDS} fill={INK} />
      <path
        d={bandAlong(HOOD_RIM, 9)}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.fine}
        strokeLinejoin="round"
      />
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${id}-hair)`}>
        <path d={m.hair} fill={PAPER} />
      </g>
      <EarCut {...MAN_EAR} />
      <ManNoseAndMouth />
      <Beard id={id} d={SHORT_BEARD_P} strands={m.beard} moustache={false} />
      {/* a brow raised a little: he has a great deal to say */}
      <path
        d="M143.5 86Q153 81.6 165.5 85.6"
        fill="none"
        stroke={INK}
        strokeWidth={2.8}
        strokeLinecap="round"
      />
      <ManEye look="open" />
      {/* the Monmouth cap and its knitting, and the leek, its stalk tucked in at the edge */}
      <path d={CAP} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${id}-cap)`}>
        <path d={m.knit} fill="none" stroke={PAPER} strokeWidth={1.3} strokeLinecap="round" />
      </g>
      <path d={CAP_EDGE} fill={PAPER} />
      <Leek />
      <path d={gouge(76, 76.4, 108, 72, 4.2, -0.4)} fill={INK} />
      <path d={gouge(74, 73, 110, 68.6, 0.8, -0.4)} fill={PAPER} />
    </g>
  )
}

/** A thick ink halo round head, cap, leek, hood and shoulders. */
function FluellenKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={MAN_HEAD} />
      <path d={CAP} />
      <path d={SHORT_BEARD_P} />
      <path d={HOOD} />
      <path d={JACK} />
      <g transform={LEEK_AT}>
        <path d={STALK} />
        {LEAVES.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
    </g>
  )
}

const P = placing(58, 46, 0.84, true)

const ground = once(() =>
  // The English camp by day: the light ahead of him, to the left.
  portraitGround('hv-fluellen', 9810, (x, y) =>
    clamp(0.12 + ((PW - x - 60) / 260) * 0.82 - (y / PH) * 0.14),
  ),
)

function FluellenPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <FluellenKnockout />
        <FluellenFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const fluellenPortrait: LinocutArt = { width: PW, height: PH, Draw: FluellenPortrait }

/** A point on the leek, carried through its placing in the cap and the portrait's. */
function onLeek(x: number, y: number): Pt {
  const a = deg(LEEK_ROT)
  const [lx, ly] = [x * LEEK_S, y * LEEK_S]
  return P.to(
    LEEK_XY[0] + lx * Math.cos(a) - ly * Math.sin(a),
    LEEK_XY[1] + lx * Math.sin(a) + ly * Math.cos(a),
  )
}
const HOOD_AT = P.to(26, 232)
const CHEEK_AT = P.to(139, 127)
const LEEK_PT = onLeek(-14, -54)

export const fluellen: Portrait = {
  name: 'Fluellen',
  art: fluellenPortrait,
  alt: 'A linocut portrait of Captain Fluellen in profile, facing left, by day: a man with a short dark beard along his jaw, a raised brow and a level eye. He wears a round dark cap with its knitting cut in white rows, and standing in the cap above his ear is a leek, its white stalk tucked in at the edge and its broad leaves spreading and drooping at the top. A long hood, shaded in fine lines, is pulled back off his head and lies gathered on his shoulders, its tail hanging down his back, over a padded soldier’s jacket. Three numbered red markers point to the hood, his cheek and the leek.',
  describedBy: [
    { phrase: 'a little out of fashion', at: [HOOD_AT[0] + 38, HOOD_AT[1] - 4], to: HOOD_AT },
    { phrase: 'much care and valour in this Welshman', at: CHEEK_AT },
    {
      phrase: 'wearing leeks in their Monmouth caps',
      at: [LEEK_PT[0] - 40, LEEK_PT[1] - 4],
      to: LEEK_PT,
    },
  ],
  where: 'Act 4, Scene 1; Act 4, Scene 7',
  note: 'Fluellen talks without end about the Roman wars and how they should be fought, and the King, overhearing him at night, finds care and valour under the old-fashioned manner. The leek is the Welsh badge he wears with pride, and the one he makes Pistol eat for mocking it.',
  artNote:
    'The play does not describe his face. His leek and his Monmouth cap are his own words, and his old hood is how the panels show him a little out of fashion; the leek’s green is left to the words, since the print has no green.',
}
