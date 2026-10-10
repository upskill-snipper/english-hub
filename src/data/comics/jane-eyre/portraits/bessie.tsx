import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arcDashes, clamp, deg, gouge, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  FACE_LEFT,
  InnerRule,
  PH,
  PW,
  ProfileEar,
  ProfileEye,
  WOMAN_HEAD,
  WOMAN_LINES,
  flip,
  hatch,
  lerp2,
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
 * Bessie Lee, the nursemaid at Gateshead, as Jane remembers her, and nothing
 * else. Chapter 4:
 *
 *   "She was pretty too, if my recollections of her face and person are
 *   correct. I remember her as a slim young woman, with black hair, dark
 *   eyes, very nice features, and good, clear complexion".
 *
 * So: a slim young woman in profile, facing left, cut from the one woman's
 * head (WOMAN_HEAD) with nothing changed, because the text gives her only
 * "very nice features": the most regular face in the set. Her eye is dark,
 * the eye cut with its pupil large. Her black hair is ink with paper strands,
 * smooth from the brow over the temple and round the ear, and gathered into a
 * knot at the nape. She wears what a nursemaid at a house like Gateshead wore
 * in the novel's first years, as the portraits' common dress has it (./
 * common.tsx): a small white cap on the crown, a white kerchief crossed at the
 * neck, and a plain dark gown, narrow at the shoulder ("slim"). Her
 * complexion is "good, clear", so her face is clean paper, with no colour in
 * it; there is no red in this plate. In Chapter 10, eight years on, Jane sees
 * her again "very good-looking, with black hair and eyes", which is the same
 * woman. Nothing here comes from a film or stage production.
 *
 * Drawn facing right and turned by FACE_LEFT, so the markers are placed with
 * flip(). Seeds: 8601 for the ground, 8602 for the cuts in the figure.
 */

const F = placer([22, 4], 0.9)
const HEAD = smooth(F.knots(WOMAN_HEAD))

/** Her black hair: from the brow over the temple and round the ear, to the nape. */
const HAIR_K: Knot[] = [
  [218, 62, 1],
  [216, 78],
  [209, 94],
  [197, 106],
  [180, 112],
  [166, 112],
  [152, 122],
  [146, 146],
  [140, 176],
  [130, 204, 1],
  [110, 196],
  [98, 164],
  [96, 124],
  [102, 88],
  [120, 62],
  [150, 46],
  [190, 46],
]
const HAIR = smooth(F.knots(HAIR_K))
/** The knot of hair at the nape, under the cap. */
const KNOT_AT: Pt = [112, 176]
const KNOT_R = 19
/** The small white cap on the crown, behind the hair at the brow. */
const CAP_K: Knot[] = [
  [198, 44, 1],
  [180, 30],
  [148, 26],
  [120, 34],
  [100, 54],
  [90, 82],
  [92, 110, 1],
  [112, 104],
  [130, 92],
  [150, 76],
  [174, 56],
]
const CAP = smooth(F.knots(CAP_K))
const FRILL_K: Pt[] = [
  [198, 44],
  [174, 56],
  [150, 76],
  [130, 92],
  [112, 104],
  [92, 110],
]

/** A plain dark gown, narrow at the shoulder. */
const GOWN = smooth([
  [-8, 330, 1],
  [-4, 288],
  [16, 262],
  [56, 244],
  [100, 236],
  [142, 238],
  [184, 244],
  [222, 254],
  [248, 274],
  [262, 300],
  [266, 330, 1],
])
/** The white kerchief round the neck, crossed at the front. */
const KERCHIEF = smooth([
  [108, 232, 1],
  [138, 226],
  [168, 234],
  [200, 242],
  [228, 246],
  [240, 262],
  [234, 288, 1],
  [214, 276],
  [184, 266],
  [146, 258],
  [110, 248, 1],
])

type Marks = {
  ground: string
  hair: string
  knot: string
  frill: string
  cap: string
  back: string
  neck: string
  gown: string
  kerchief: string
}

const marks = once<Marks>(() => {
  // Plain daylight, from in front of her.
  const ground = portraitGround(8601, (x, y) =>
    clamp(0.1 + ((x - 50) / 270) * 0.9 - Math.max(0, (y - 250) / 260)),
  )
  const r = rng(8602)
  // "black hair": smooth, cut as long fine strands from the brow back over
  // the temple, and down round the ear to the knot.
  const hair =
    strands(
      r,
      18,
      lerp2(F.pt([216, 66]), F.pt([196, 106])),
      lerp2(F.pt([150, 52]), F.pt([118, 92])),
      [0.35, 0.55],
      1.2,
    ) +
    strands(
      r,
      8,
      lerp2(F.pt([166, 114]), F.pt([146, 150])),
      lerp2(F.pt([128, 120]), F.pt([118, 182])),
      [0.3, 0.5],
      0.8,
    )
  const [kx, ky] = F.pt(KNOT_AT)
  let knot = ''
  for (let rad = 4; rad < KNOT_R * F.s - 2; rad += 3)
    knot += arcDashes(r, kx, ky, rad, deg(-150), deg(160), [8, 20], [2, 4])
  const frill = scallops(
    FRILL_K.map((q) => F.pt(q)),
    3.6,
    5.6,
  )
  // The linen of the cap: a few gathers over the crown.
  let cap = ''
  for (let i = 0; i < 6; i++) {
    const [x0, y0] = F.pt([118 + i * 12, 46 + i * 2])
    const [x1, y1] = F.pt([106 + i * 14, 84 - i * 4])
    cap += `M${x0} ${y0}L${x1} ${y1}`
  }
  // The shadow down the back of the neck, and under the jaw.
  const [bx, by] = F.pt([176, 150])
  let back = ''
  for (let rad = 52; rad < 80; rad += 3.4)
    back += arcDashes(r, bx, by, rad * F.s, deg(98), deg(140), [8, 18], [2, 5])
  const neck = hatch(r, { x0: 140, x1: 210, y0: 186, y1: 204 }, 4.4, 0.08)
  // The gown: folds at the shoulder and the seam of the sleeve.
  const gown =
    gouge(30, 266, 14, 318, 1.6, 2) +
    gouge(66, 254, 56, 318, 1.2, 1.6) +
    gouge(246, 290, 256, 318, 1.4, -1.6)
  const kerchief =
    'M120 238Q150 244 180 254M136 230Q168 238 202 248M156 234Q190 244 220 254M214 248Q230 266 234 284'
  return { ground, hair, knot, frill, cap, back, neck, gown, kerchief }
})

function BessiePortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-bl-head`
  const hairClip = `${uid}-bl-hair`
  const capClip = `${uid}-bl-cap`
  const P = (d: string) => placePath(d, F)
  const [ex, ey] = F.pt([217, 130])
  const [ax, ay] = F.pt([160, 118])
  const [kx, ky] = F.pt(KNOT_AT)
  const kr = KNOT_R * F.s
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
        <clipPath id={capClip}>
          <path d={CAP} />
        </clipPath>
      </defs>
      <g transform={FACE_LEFT}>
        <path d={m.ground} fill={PAPER} />
        {/* The ink halo that lifts the figure off the ground. */}
        <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
          <path d={HEAD} />
          <path d={HAIR} />
          <path d={CAP} />
          <circle cx={kx} cy={ky} r={kr} />
          <path d={GOWN} />
        </g>
        <path d={GOWN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.gown} fill={PAPER} />
        <path d={HEAD} fill={PAPER} />
        <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.back} strokeWidth={1.4} />
          <path d={m.neck} strokeWidth={LINE.hairline} />
        </g>
        {/* "black hair": the knot at the nape, then the smooth hair */}
        <circle cx={kx} cy={ky} r={kr} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path d={m.knot} fill="none" stroke={PAPER} strokeWidth={LINE.hairline} />
        <path d={HAIR} fill={INK} />
        <g clipPath={`url(#${hairClip})`}>
          <path d={m.hair} fill={PAPER} />
        </g>
        <ProfileEar at={[ax, ay]} h={34} />
        {/* the small white cap on the crown */}
        <path d={CAP} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <g clipPath={`url(#${capClip})`}>
          <path
            d={m.cap}
            fill="none"
            stroke={INK}
            strokeWidth={LINE.hairline}
            strokeLinecap="round"
          />
        </g>
        <path d={m.frill} fill="none" stroke={INK} strokeWidth={1.2} strokeLinecap="round" />
        {/* "very nice features": the one woman's face, unaltered */}
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          <path d={P(WOMAN_LINES.jaw)} strokeWidth={1.3} />
          <path d={P(WOMAN_LINES.brow)} strokeWidth={2.4} />
          <path d={P(WOMAN_LINES.nostril)} strokeWidth={1.1} />
          <path d={P(WOMAN_LINES.mouth)} strokeWidth={1.5} />
          <path d={P(WOMAN_LINES.lowerLip)} strokeWidth={LINE.hairline} />
          <path d={P(WOMAN_LINES.chin)} strokeWidth={LINE.hairline} />
        </g>
        {/* "dark eyes" */}
        <ProfileEye at={[ex, ey]} s={0.86} look={0.3} />
        <path d={KERCHIEF} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path d={m.kerchief} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      </g>
      <InnerRule />
    </>
  )
}

export const bessieArt: LinocutArt = { width: PW, height: PH, Draw: BessiePortrait }

export const bessie: Portrait = {
  name: 'Bessie',
  art: bessieArt,
  alt: "A linocut portrait of Bessie, the nursemaid at Gateshead, in profile, facing left, drawn from Jane's memory of her in Chapter 4: a slim young woman with regular, pleasant features, a dark eye and a clear, pale face. Her black hair is smooth over her temple and round her ear and gathered into a knot at the nape, under a small white cap with a frilled edge on the crown of her head. She wears a white kerchief crossed at her neck over a plain dark gown, narrow at the shoulders. Five numbered red markers point to her slim figure, her black hair, her eye, her features and her clear complexion.",
  describedBy: [
    { phrase: 'a slim young woman', at: flip([84, 288]) },
    { phrase: 'black hair', at: flip([30, 150]), to: flip([108, 150]) },
    { phrase: 'dark eyes', at: flip([304, 121]), to: flip([230, 121]) },
    { phrase: 'very nice features', at: flip([304, 152]), to: flip([244, 152]) },
    { phrase: 'good, clear complexion', at: flip([194, 156]) },
  ],
  where: 'Chapter 4',
  passage:
    'She was pretty too, if my recollections of her face and person are correct. I remember her as a slim young woman, with black hair, dark eyes, very nice features, and good, clear complexion',
  note: 'Bessie is the one warmth of Jane’s childhood at Gateshead, quick-tempered but kind, and the teller of the ballads and fairy tales that fill her imagination. Jane remembers her face fondly and fairly.',
  artNote:
    'The text gives her no particular features, only “very nice” ones, so she is cut from the one woman’s face unaltered. Her cap, kerchief and gown are a nursemaid’s of the time; the text does not describe her dress.',
}
