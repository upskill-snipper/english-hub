import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arcDashes, clamp, deg, gouge, n, rng } from '@/components/comics/linocut/carve'

import {
  FACE_LEFT,
  InnerRule,
  MAN_HEAD,
  PH,
  PW,
  ProfileEar,
  flip,
  hatch,
  lerp2,
  nudge,
  once,
  placePath,
  placer,
  portraitGround,
  rimLight,
  smooth,
  strands,
  type Knot,
} from './common'

/**
 * Mr Brocklehurst, as Jane first sees him, and nothing else. Chapter 4, at
 * Gateshead, when the ten-year-old Jane is called down to the breakfast-room:
 *
 *   "I looked up at ... a black pillar! ... such, at least, appeared to me,
 *   at first sight, the straight, narrow, sable-clad shape standing erect on
 *   the rug: the grim face at the top was like a carved mask, placed above
 *   the shaft by way of capital."
 *
 * and, when he sets her before him, "what a great nose!" (Chapter 4). At
 * Lowood, Chapter 7: "it was Mr. Brocklehurst, buttoned up in a surtout, and
 * looking longer, narrower, and more rigid than ever." (The edition sets
 * "a black pillar!" between dashes; the card prints the phrases alone.)
 *
 * So he is drawn as a child sees him, from below: a narrow black column
 * standing straight up the block from its foot almost to its top, and on top
 * of it, small, a hard face in profile, facing left, towards the child. The
 * column is his long black surtout, buttoned up its front to a white
 * neckcloth, his arms straight at his sides inside it, its folds cut as long
 * straight lines. The face is cut from the one man's head (MAN_HEAD), long
 * and hard and set like carving: a heavy brow over a deep eye, a great nose,
 * a thin mouth turned down, a long chin, and the cheek cut in hard planes
 * ("like a carved mask"). His hair and his age are not described, so his
 * hair is plain and dark, combed flat. The ground is light, so the black
 * shape stands out against it as Jane saw it. There is no red in this
 * plate. His teeth, which Jane also remarks on, are left to the words.
 * Nothing here comes from a film or stage production.
 *
 * Drawn facing right and turned by FACE_LEFT, so the markers below are
 * placed with flip(). Seeds: 7901 for the ground, 7902 for the cuts.
 */

/** The one man's head made long and hard: a great nose, a thin mouth, a long chin. */
const HEAD_K: Knot[] = nudge(MAN_HEAD, [
  [11, 1, 0],
  [12, 2, 1],
  [13, 0, 2],
  [14, 4, 1],
  [15, 9, 3],
  [16, 10, 6],
  [17, 6, 8],
  [18, 2, 8],
  [19, 1, 8],
  [20, 0, 8],
  [21, 0, 8],
  [22, 0, 9],
  [23, 1, 12],
  [24, 0, 14],
  [25, -2, 12],
  [26, -4, 10],
  [27, -4, 4],
])

/** Small, at the top of the column: "placed above the shaft by way of capital". */
const F = placer([66, -6], 0.54)
const HEAD = smooth(F.knots(HEAD_K))

/** Plain dark hair, combed flat. */
const HAIR_K: Knot[] = [
  [222, 64],
  [208, 62],
  [198, 72],
  [190, 90],
  [184, 110],
  [176, 116, 1],
  [164, 108],
  [148, 106],
  [136, 116],
  [128, 142],
  [120, 170],
  [110, 190, 1],
  [94, 170],
  [88, 130],
  [96, 92],
  [116, 60],
  [146, 40],
  [180, 34],
  [206, 40],
  [220, 52],
]
const HAIR = smooth(F.knots(HAIR_K))

/**
 * "a black pillar": the long surtout, a narrow column from the shoulders to
 * the foot of the block, straight-sided.
 */
const PILLAR = smooth([
  [110, 330, 1],
  [112, 250],
  [112, 186],
  [118, 158],
  [134, 144],
  [150, 140],
  [166, 142],
  [180, 140],
  [196, 146],
  [206, 162],
  [208, 196],
  [206, 260],
  [206, 330, 1],
])
/** The white neckcloth at his throat, above the buttoned collar. */
const NECKCLOTH = smooth([
  [150, 128, 1],
  [176, 130],
  [184, 132, 1],
  [186, 144],
  [176, 150],
  [154, 148, 1],
])
/** The surtout's collar, standing up behind the neck. */
const COLLAR = smooth([
  [130, 148, 1],
  [138, 128],
  [152, 132],
  [160, 146, 1],
])

type Marks = {
  ground: string
  hair: string
  rim: string
  back: string
  carve: string
  folds: string
}

const marks = once<Marks>(() => {
  // A light room behind him: the black shape stands out against it.
  const ground = portraitGround(7901, (x, y) =>
    clamp(0.55 + ((x - 40) / 280) * 0.35 - Math.max(0, (y - 290) / 200)),
  )
  const r = rng(7902)
  const hair = strands(
    r,
    20,
    lerp2(F.pt([214, 56]), F.pt([184, 108])),
    lerp2(F.pt([118, 60]), F.pt([108, 172])),
    [0.3, 0.55],
    1.5,
  )
  const rim = rimLight(
    r,
    { cx: F.pt([156, 110])[0], cy: F.pt([156, 110])[1], rx: 66 * F.s, ry: 80 * F.s },
    -100,
    -10,
    10,
    0.8,
  )
  let back = ''
  const [bx, by] = F.pt([176, 154])
  for (let rad = 30; rad < 50; rad += 3)
    back += arcDashes(r, bx, by, rad, deg(100), deg(150), [6, 14], [2, 4])
  // "like a carved mask": the hollow under the cheekbone cut as a few hard
  // arcs, and the hollow of the temple. (Straight strokes across the cheek
  // were tried first, and read as a scar.)
  let carve = ''
  const [hx, hy] = F.pt([206, 150])
  for (let rad = 8; rad < 15; rad += 2.6)
    carve += arcDashes(r, hx, hy, rad, deg(40), deg(140), [6, 12], [1.5, 3])
  for (let i = 0; i < 3; i++)
    carve += `M${F.p(192 + i * 3, 94 + i * 1.5)}Q${F.p(189 + i * 3, 106)} ${F.p(195 + i * 3, 118 - i)}`
  const folds =
    gouge(196, 176, 198, 318, 1.3, -1) +
    gouge(124, 184, 120, 318, 1.2, 1) +
    gouge(150, 200, 148, 318, 0.8, 0) +
    gouge(176, 196, 178, 318, 0.9, 0)
  return { ground, hair, rim, back, carve, folds }
})

function BrocklehurstPortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-mb-head`
  const hairClip = `${uid}-mb-hair`
  const P = (d: string) => placePath(d, F)
  const [ax, ay] = F.pt([156, 112])
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
      </defs>
      <g transform={FACE_LEFT}>
        <path d={m.ground} fill={PAPER} />
        {/* The ink halo that lifts the figure off the ground. */}
        <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
          <path d={HEAD} />
          <path d={HAIR} />
          <path d={PILLAR} />
        </g>
        {/* "the straight, narrow, sable-clad shape" */}
        <path d={PILLAR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.folds} fill={PAPER} />
        {/* "buttoned up in a surtout": a row of buttons up the front */}
        <g fill={PAPER}>
          {[170, 192, 214, 236, 258, 280, 302].map((y) => (
            <circle key={y} cx={198} cy={y} r={2.2} />
          ))}
        </g>
        <path d={COLLAR} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path d={HEAD} fill={PAPER} />
        <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.back} strokeWidth={1.2} />
          <path d={m.carve} strokeWidth={LINE.hairline} />
        </g>
        <path d={HAIR} fill={INK} />
        <g clipPath={`url(#${hairClip})`}>
          <path d={m.hair} fill={PAPER} />
          <path d={m.rim} fill={PAPER} />
        </g>
        <ProfileEar at={[ax, ay]} h={24} />
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          {/* the long jaw */}
          <path
            d={P('M236 222C214 230 190 222 176 204C170 194 168 182 168 170')}
            strokeWidth={1.6}
          />
          {/* a heavy straight brow over a deep-set eye */}
          <path d={P('M204 112Q218 108 236 111')} strokeWidth={3} />
          <path d={P('M210 124Q222 120 233 124')} strokeWidth={2.2} />
          <path d={P('M212 129Q222 132 232 128')} strokeWidth={LINE.fine} />
          {/* "what a great nose": the nostril far down the long nose */}
          <path d={P('M253 174C248.5 172.5 247.5 168 250.5 165')} strokeWidth={1.4} />
          {/* a thin, hard mouth, one straight line */}
          <path d={P('M237 188L225 189')} strokeWidth={2} />
          {/* the frown between the brows */}
          <path d={P('M233 100L231.5 108')} strokeWidth={LINE.fine} />
        </g>
        <circle cx={n(F.pt([224, 126])[0])} cy={n(F.pt([224, 126])[1])} r={1.7} fill={INK} />
        <path d={NECKCLOTH} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      </g>
      <InnerRule />
    </>
  )
}

export const mrBrocklehurstArt: LinocutArt = {
  width: PW,
  height: PH,
  Draw: BrocklehurstPortrait,
}

export const mrBrocklehurst: Portrait = {
  name: 'Mr Brocklehurst',
  art: mrBrocklehurstArt,
  alt: "A linocut portrait of Mr Brocklehurst as the ten-year-old Jane first sees him in Chapter 4, from a child's height: a narrow black column standing straight up the picture from its foot almost to its top, against a light room. The column is his long black coat, buttoned up its front with a row of small buttons to a white neckcloth, his arms straight at his sides inside it. At the top, small, is his hard face in profile, facing left: a heavy straight brow over a deep-set eye, a great long nose, a thin mouth turned down and a long chin, the cheek cut in hard straight lines like carving. His dark hair is combed flat. Four numbered red markers point to the black column, his face, his nose and the buttons of his coat.",
  describedBy: [
    { phrase: 'a black pillar', at: flip([160, 236]) },
    {
      phrase: 'the grim face at the top was like a carved mask',
      at: flip([274, 42]),
      to: flip([197, 48]),
    },
    { phrase: 'what a great nose', at: flip([292, 92]), to: flip([212, 86]) },
    { phrase: 'buttoned up in a surtout', at: flip([268, 236]), to: flip([204, 236]) },
  ],
  where: 'Chapters 4 and 7',
  note: 'Jane sees him as a child does, from below, before he is a man at all: a pillar with a carved face for its capital. Brontë lets the cold, rigid shape tell us what his religion is like before he says a word.',
  artNote:
    'His hair, his age and his teeth, which Jane also remarks on, are left to the words. Jane’s exclamation is set off by the edition’s dashes, so the card prints the phrases alone.',
}
