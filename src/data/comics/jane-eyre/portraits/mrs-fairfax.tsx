import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  n,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'

import {
  InnerRule,
  PH,
  PW,
  ProfileEye,
  WOMAN_HEAD,
  WOMAN_LINES,
  hatch,
  lerp2,
  nudge,
  once,
  placePath,
  placer,
  portraitGround,
  scallops,
  smooth,
  strands,
  type Knot,
} from './common'

/**
 * Mrs Fairfax, the housekeeper of Thornfield, as Jane first sees her, and
 * nothing else. Chapter 11, the night Jane arrives:
 *
 *   "A snug small room; a round table by a cheerful fire; an arm-chair
 *   high-backed and old-fashioned, wherein sat the neatest imaginable little
 *   elderly lady, in widow's cap, black silk gown, and snowy muslin apron;
 *   exactly like what I had fancied Mrs. Fairfax, only less stately and
 *   milder looking. She was occupied in knitting; a large cat sat demurely
 *   at her feet".
 *
 * So: a little elderly woman drawn half length, seated, in profile, facing
 * right towards the fire whose light is the light of the ground. She is cut
 * from the one woman's head (WOMAN_HEAD) with only what the text gives her
 * changed: the chin a little fuller with age, a soft line from the nose to
 * the mouth, a mild eye and a mouth that smiles a little ("milder looking").
 * She is set smaller in the block than the other women ("little"). Her
 * widow's cap is white, close round the head and over the ears, with a
 * frill framing the face, as the figure kit cuts it (WIDOW_CAP in
 * ../panels/people.tsx); a little grey hair shows under it at the brow (the
 * kit's wisp), since she is elderly. Her black silk gown is ink with long
 * pale lights along its folds for the sheen; her snowy muslin apron is paper
 * over her lap. She knits: two needles in her hands, the work hanging from
 * them, and a ball of wool in her lap. The high back of the old-fashioned
 * arm-chair rises behind her. The cat at her feet is below the block.
 * Nothing here comes from a film or stage production, and there is no red in
 * this plate.
 *
 * Seeds: 8501 for the ground, 8502 for the cuts in the figure.
 */

/** The one woman's head: the chin a little fuller, the jaw a little softer, with age. */
const HEAD_K: Knot[] = nudge(WOMAN_HEAD, [
  [23, -0.6, 1],
  [24, -1.4, 1.4],
  [25, 1.6, 3],
  [26, 2, 2],
])

/** Little: set low in the block, so the knitting and the apron show below her. */
const F = placer([24, 6], 0.72)
const HEAD = smooth(F.knots(HEAD_K))

/**
 * The widow's cap, in the head's frame: close over the crown and the back of
 * the head to the nape, and down over the ear, its front edge framing the
 * face from above the brow to the jaw.
 */
const CAP_K: Knot[] = [
  [214, 58, 1],
  [206, 38],
  [182, 24],
  [148, 24],
  [118, 38],
  [98, 66],
  [88, 104],
  [88, 146],
  [96, 184],
  [112, 212],
  [130, 224, 1],
  [150, 214],
  [166, 200],
  [176, 180],
  [182, 154],
  [186, 128],
  [192, 104],
  [200, 80],
]
const CAP = smooth(F.knots(CAP_K))
/** The frill along the front edge of the cap, in the head's frame. */
const FRILL_K: Pt[] = [
  [214, 58],
  [204, 80],
  [194, 104],
  [188, 128],
  [184, 154],
  [178, 180],
  [166, 202],
]
/** Her grey hair at the brow, between the frill and the forehead. */
const HAIR = smooth(
  F.knots([
    [216, 60, 1],
    [222, 72],
    [224, 86],
    [222, 96, 1],
    [212, 94],
    [206, 80],
    [210, 66],
  ]),
)

/** The high back of the old-fashioned arm-chair, behind her. */
const CHAIR = smooth([
  [26, 330, 1],
  [24, 110],
  [30, 60],
  [50, 32],
  [84, 24],
  [116, 32],
  [132, 52],
  [138, 96],
  [136, 330, 1],
])

/** Her black silk gown: the shoulders, the back against the chair, the lap forward. */
const GOWN = smooth([
  [116, 184, 1],
  [96, 200],
  [86, 226],
  [84, 262],
  [86, 300],
  [88, 330, 1],
  [306, 330, 1],
  [302, 300],
  [294, 276],
  [270, 262],
  [228, 252],
  [198, 242],
  [190, 222],
  [182, 202],
  [168, 188, 1],
])
/** The snowy muslin apron: over the lap from the high waist, and falling from the knee. */
const APRON = smooth([
  [190, 238, 1],
  [228, 246],
  [266, 256],
  [292, 266],
  [306, 288],
  [310, 330, 1],
  [264, 330, 1],
  [268, 304],
  [264, 290],
  [238, 280],
  [208, 272],
  [192, 262],
])
/** The near sleeve of the gown, from the shoulder down and forward to the wrist. */
const SLEEVE = smooth([
  [150, 206, 1],
  [172, 204],
  [180, 224],
  [184, 242],
  [216, 242],
  [220, 256, 1],
  [180, 260],
  [164, 254],
  [152, 234],
])
/** Her two hands, holding the needles over the work. Paper. */
const HANDS = [
  smooth([
    [214, 242, 1],
    [224, 238],
    [234, 240],
    [240, 246],
    [238, 254],
    [228, 258],
    [216, 258, 1],
  ]),
  smooth([
    [236, 234, 1],
    [246, 232],
    [254, 236],
    [256, 244],
    [248, 248],
    [238, 246, 1],
  ]),
]
/** The fingers over the needles, as fine cuts. */
const FINGERS = 'M226 242Q232 244 236 248M228 247Q233 249 236 253M246 236Q251 238 253 242'
/** The two needles, crossing over her hands, and the work hanging from them. */
const NEEDLES = 'M208 262L268 216M224 264L278 230'
const WORK = smooth([
  [228, 254, 1],
  [254, 242, 1],
  [260, 268],
  [252, 280],
  [236, 282],
  [228, 272],
])
/** The ball of wool in her lap. */
const BALL: Pt = [284, 260]

type Marks = {
  ground: string
  frill: string
  capCuts: string
  hair: string
  back: string
  neck: string
  silk: string
  apron: string
  stitches: string
  wool: string
}

const marks = once<Marks>(() => {
  // The cheerful fire in front of her: the ground lit from the right.
  const ground = portraitGround(8501, (x, y) =>
    clamp(0.14 + ((x - 40) / 280) * 0.85 - Math.max(0, (y - 270) / 300)),
  )
  const r = rng(8502)
  const frill = scallops(
    FRILL_K.map((q) => F.pt(q)),
    4,
    6,
  )
  // The linen of the cap: a few soft gathers at the back, where it is drawn in.
  let capCuts = ''
  for (let i = 0; i < 7; i++) {
    const [x0, y0] = F.pt([112 + i * 4, 70 + i * 22])
    const [x1, y1] = F.pt([150 + i * 3, 64 + i * 22 + between(r, -3, 3)])
    capCuts += `M${n(x0)} ${n(y0)}Q${n((x0 + x1) / 2)} ${n((y0 + y1) / 2 - 3)} ${n(x1)} ${n(y1)}`
  }
  capCuts += `M${F.p(196, 40)}Q${F.p(160, 30)} ${F.p(124, 44)}`
  // Grey: the hair at the brow is ink with fine paper strands close together.
  const hair = strands(
    r,
    13,
    lerp2(F.pt([224, 66]), F.pt([224, 96])),
    lerp2(F.pt([214, 70]), F.pt([210, 92])),
    [0.45, 0.7],
    0.4,
  )
  // The shadow down the back of the neck.
  const [bx, by] = F.pt([176, 150])
  let back = ''
  for (let rad = 50; rad < 74; rad += 3.4)
    back += arcDashes(r, bx, by, rad * F.s, deg(100), deg(140), [5, 12], [2, 4])
  const neck = hatch(r, { x0: 128, x1: 170, y0: 152, y1: 168 }, 3.4, 0.1)
  // The sheen of black silk: long pale lights along the folds.
  const silk =
    gouge(92, 220, 94, 318, 1.6, 1.2) +
    gouge(108, 208, 114, 316, 0.9, 0.8) +
    gouge(172, 210, 180, 236, 1.1, -0.6) +
    gouge(156, 214, 162, 250, 0.8, 0.6) +
    gouge(126, 224, 134, 318, 0.7, 0.6) +
    gouge(244, 294, 252, 324, 1, -0.6)
  // The muslin's folds, fine ink lines down the fall from the knee.
  const apron =
    'M274 292Q278 312 276 328M288 286Q294 308 292 328M300 292Q304 312 304 328' +
    'M206 252Q242 262 282 270'
  // The knitted work: rows of small chevrons.
  let stitches = ''
  for (let y = 254; y < 280; y += 4.4)
    for (let x = 232; x < 256; x += 5)
      stitches += `M${n(x)} ${n(y)}L${n(x + 2.5)} ${n(y + 2.4)}L${n(x + 5)} ${n(y)}`
  // The ball of wool: windings round it.
  let wool = ''
  for (let k = 0; k < 4; k++) {
    const a = deg(20 + k * 38)
    wool += `M${n(BALL[0] + Math.cos(a) * 9)} ${n(BALL[1] + Math.sin(a) * 9)}A9 9 0 0 1 ${n(BALL[0] - Math.cos(a) * 9)} ${n(BALL[1] - Math.sin(a) * 9)}`
  }
  return { ground, frill, capCuts, hair, back, neck, silk, apron, stitches, wool }
})

function MrsFairfaxPortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-mf-head`
  const capClip = `${uid}-mf-cap`
  const gownClip = `${uid}-mf-gown`
  const workClip = `${uid}-mf-work`
  const P = (d: string) => placePath(d, F)
  const [ex, ey] = F.pt([217, 130])
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
        <clipPath id={capClip}>
          <path d={CAP} />
        </clipPath>
        <clipPath id={gownClip}>
          <path d={GOWN} />
        </clipPath>
        <clipPath id={workClip}>
          <path d={WORK} />
        </clipPath>
      </defs>
      <path d={m.ground} fill={PAPER} />
      {/* "an arm-chair high-backed and old-fashioned" */}
      <path d={CHAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={gouge(40, 58, 126, 52, 0.9, -2) + gouge(36, 70, 34, 316, 0.9, 0.6)} fill={PAPER} />
      {/* The ink halo that lifts the figure off the ground. */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={HEAD} />
        <path d={CAP} />
        <path d={GOWN} />
      </g>
      {/* "black silk gown" */}
      <path d={GOWN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <g clipPath={`url(#${gownClip})`}>
        <path d={m.silk} fill={PAPER} />
      </g>
      {/* "snowy muslin apron" */}
      <path d={APRON} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={m.apron} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      {/* the ball of wool in her lap */}
      <circle cx={BALL[0]} cy={BALL[1]} r={9} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={m.wool} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      <path
        d={`M${BALL[0] - 6} ${BALL[1] - 6}Q262 244 252 248`}
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
      />
      {/* the face */}
      <path d={HEAD} fill={PAPER} />
      <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.back} strokeWidth={1.2} />
        <path d={m.neck} strokeWidth={LINE.hairline} />
      </g>
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d={P(WOMAN_LINES.jaw)} strokeWidth={1.1} />
        <path d={P(WOMAN_LINES.brow)} strokeWidth={1.7} />
        <path d={P(WOMAN_LINES.nostril)} strokeWidth={1} />
        {/* "milder looking": the mouth smiling a little */}
        <path d={P('M229.5 175.8Q226 179 221.5 176.8')} strokeWidth={1.3} />
        {/* "elderly": a soft line from the nose to the mouth, a crease under the eye, the fuller chin */}
        <path d={P('M233 162C229 166 227.5 170.5 228.5 174.5')} strokeWidth={LINE.hairline} />
        <path d={P('M209 137.5Q215.5 140.5 222 138.5')} strokeWidth={LINE.hairline} />
        <path d={P('M213 205Q221 207.5 227 202.5')} strokeWidth={LINE.hairline} />
      </g>
      <ProfileEye at={[ex, ey]} s={0.64} look={0.4} />
      {/* her grey hair at the brow, then the widow's cap over it */}
      <path d={HAIR} fill={INK} />
      <path d={m.hair} fill={PAPER} />
      <path d={CAP} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <g clipPath={`url(#${capClip})`}>
        <path
          d={m.capCuts}
          fill="none"
          stroke={INK}
          strokeWidth={LINE.hairline}
          strokeLinecap="round"
        />
      </g>
      <path d={m.frill} fill="none" stroke={INK} strokeWidth={1.3} strokeLinecap="round" />
      <path
        d={'M' + FRILL_K.map(([x, y]) => F.p(x, y)).join('L')}
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
      />
      {/* "She was occupied in knitting": the sleeve, the work, the needles and her hands */}
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={gouge(162, 216, 170, 250, 0.8, 0.6)} fill={PAPER} />
      <path d={WORK} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <g clipPath={`url(#${workClip})`}>
        <path d={m.stitches} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      </g>
      <path d={NEEDLES} fill="none" stroke={INK} strokeWidth={3.4} strokeLinecap="round" />
      <path d={NEEDLES} fill="none" stroke={PAPER} strokeWidth={1.4} strokeLinecap="round" />
      {HANDS.map((d) => (
        <path
          key={d}
          d={d}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.fine}
          strokeLinejoin="round"
        />
      ))}
      <path
        d={FINGERS}
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
        strokeLinecap="round"
      />
      {/* the white muslin at the throat, under the cap's frill */}
      <path
        d="M166 186Q174 194 186 202L182 208Q170 202 162 192Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.hairline}
      />
      <InnerRule />
    </>
  )
}

export const mrsFairfaxArt: LinocutArt = { width: PW, height: PH, Draw: MrsFairfaxPortrait }

export const mrsFairfax: Portrait = {
  name: 'Mrs Fairfax',
  art: mrsFairfaxArt,
  alt: "A linocut portrait of Mrs Fairfax, drawn half length in profile, facing right, from Jane's description in Chapter 11: a little elderly woman, set small in the block, seated in front of the tall dark back of an old-fashioned arm-chair. Her face is mild and a little lined, with a gentle eye and a small smile, and a little grey hair shows at her brow. She wears a white widow's cap, close round her head and over her ears, with a frilled edge framing her face, a black silk gown with pale lights along its folds, and a white muslin apron over her lap. She is knitting: two needles cross over her hands, the work hangs from them, and a ball of wool lies in her lap. Light comes from in front of her. Five numbered red markers point to her face, her cap, her black gown, her apron and her knitting.",
  describedBy: [
    { phrase: 'the neatest imaginable little elderly lady', at: [171, 118] },
    { phrase: 'widow’s cap', at: [44, 60], to: [96, 66] },
    { phrase: 'black silk gown', at: [114, 292] },
    { phrase: 'snowy muslin apron', at: [289, 298] },
    { phrase: 'occupied in knitting', at: [306, 200], to: [270, 222] },
  ],
  where: 'Chapter 11',
  passage:
    'wherein sat the neatest imaginable little elderly lady, in widow’s cap, black silk gown, and snowy muslin apron; exactly like what I had fancied Mrs. Fairfax, only less stately and milder looking. She was occupied in knitting; a large cat sat demurely at her feet',
  note: 'Jane arrives braced for a grand mistress and finds a kind, comfortable housekeeper. Mrs Fairfax’s welcome is the first time since Lowood that anyone has made her feel at home.',
  artNote:
    'The cat at her feet, and the fire she sits by, are below and beyond the block; the light on the ground in front of her is the fire. Her hair is not described, so the little that shows under her cap is cut grey, as an elderly woman’s would be.',
}
