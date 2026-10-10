import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arcDashes, clamp, deg, gouge, n, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  InnerRule,
  PH,
  PW,
  ProfileEar,
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
  twill,
  type Knot,
} from './common'

/**
 * Miss Temple, the superintendent of Lowood, as Jane describes her, and
 * nothing else. Chapter 5, Jane's first morning at the school, as she walks
 * up the schoolroom:
 *
 *   "Seen now, in broad daylight, she looked tall, fair, and shapely; brown
 *   eyes with a benignant light in their irids, and a fine pencilling of
 *   long lashes round, relieved the whiteness of her large front; on each
 *   of her temples her hair, of a very dark brown, was clustered in round
 *   curls, according to the fashion of those times, when neither smooth
 *   bands nor long ringlets were in vogue; her dress, also in the mode of
 *   the day, was of purple cloth, relieved by a sort of Spanish trimming of
 *   black velvet; a gold watch (watches were not so common then as now)
 *   shone at her girdle."
 *
 * So: a tall woman drawn half length, in profile, facing right, up the
 * room, in broad daylight. She is cut from the one woman's head (WOMAN_HEAD)
 * with nothing changed but a calm, kind eye: open, steady, its lashes cut
 * fine along the lid ("a fine pencilling of long lashes round"). Her forehead
 * is broad and high and left as clear paper ("the whiteness of her large
 * front"). Her very dark hair is drawn back to a knot, and on her temple it
 * is clustered in round curls, each cut as a dark ring turned in paper. Her
 * gown is high-waisted, as the mode of the day was: the purple cloth is cut
 * as a dark ground with fine pale ribs, so that the black velvet of its
 * trimming, solid black with a scalloped edge, reads against it, round the
 * neck and round the top of the sleeve. A watch hangs from the band at her
 * high waist, cut in paper. The print cannot show brown, purple or gold; the
 * card says so. There is no red in this plate. Nothing here comes from a
 * film or stage production.
 *
 * Seeds: 7801 for the ground, 7802 for the cuts in the figure.
 */

const HEAD_K: Knot[] = nudge(WOMAN_HEAD, [
  [10, 1, -2],
  [11, 1, 0],
])

/** Tall, half length: the head smaller in the block, so the girdle shows. */
const F = placer([62, -2], 0.7)
const HEAD = smooth(F.knots(HEAD_K))

/** Very dark hair drawn back to a knot behind, high on the head. */
const HAIR_K: Knot[] = [
  [214, 66, 1],
  [208, 78],
  [200, 92],
  [190, 104],
  [176, 112],
  [158, 116],
  [138, 122],
  [118, 120],
  [104, 104],
  [104, 80],
  [118, 60],
  [146, 46],
  [178, 42],
  [202, 50],
]
const HAIR = smooth(F.knots(HAIR_K))
const KNOT_AT: Pt = [112, 82]
const KNOT_R = 20
/** "clustered in round curls": the curls on her temple, in the head's frame. */
const CURLS: Pt[] = [
  [197, 100],
  [206, 104],
  [190, 110],
  [200, 114],
  [192, 121],
]
const CURL_R = 5.2

/** The gown: the shoulders, a short bodice, the high waist and the skirt. */
const GOWN = smooth([
  [44, 330, 1],
  [50, 280],
  [62, 236],
  [86, 204],
  [120, 186],
  [152, 172],
  [176, 180],
  [194, 182],
  [206, 175],
  [222, 186],
  [238, 208],
  [246, 240],
  [250, 290],
  [256, 330, 1],
])
/** The near sleeve, close to the arm, from the shoulder down past the block. */
const SLEEVE = smooth([
  [104, 200],
  [128, 190],
  [150, 196],
  [158, 222],
  [158, 262],
  [152, 330, 1],
  [106, 330, 1],
  [100, 270],
  [100, 226],
])
/** The girdle under the bust: the high waist of the mode of the day. */
const GIRDLE = 'M50 262Q150 278 248 254L249 264Q150 290 49 273Z'
/** The black velvet trimming: a band round the neck, and one round the top of the sleeve. */
const TRIM_NECK = smooth([
  [150, 171, 1],
  [176, 179],
  [194, 181],
  [207, 174, 1],
  [220, 186],
  [198, 194],
  [172, 192],
  [144, 182, 1],
])
const TRIM_NECK_EDGE: Pt[] = [
  [144, 182],
  [172, 192],
  [198, 194],
  [220, 186],
]
const TRIM_SLEEVE = smooth([
  [104, 200, 1],
  [128, 190],
  [150, 196],
  [155, 212, 1],
  [128, 210],
  [102, 216, 1],
])
const TRIM_SLEEVE_EDGE: Pt[] = [
  [102, 216],
  [128, 210],
  [155, 212],
]
/** The watch, hanging from the girdle on a short chain. */
const WATCH_AT: Pt = [206, 292]

type Marks = {
  ground: string
  hair: string
  curls: string
  knot: string
  back: string
  neck: string
  cloth: string
  sleeve: string
  trim: string
}

const marks = once<Marks>(() => {
  // "in broad daylight": light all round, strongest in front of her.
  const ground = portraitGround(7801, (x, y) =>
    clamp(0.3 + ((x - 40) / 280) * 0.7 - Math.max(0, (y - 280) / 300)),
  )
  const r = rng(7802)
  const hair = strands(
    r,
    24,
    lerp2(F.pt([212, 64]), F.pt([188, 106])),
    lerp2(F.pt([128, 60]), F.pt([118, 112])),
    [0.35, 0.6],
    1.2,
  )
  // Each curl a ring of hair turned in on itself: a paper spiral on the ink.
  let curls = ''
  for (const c of CURLS) {
    const [x, y] = F.pt(c)
    curls +=
      `M${n(x + 3.4)} ${n(y)}A3.4 3.4 0 1 1 ${n(x)} ${n(y + 3.4)}` +
      `M${n(x + 1.5)} ${n(y)}A1.5 1.5 0 1 1 ${n(x)} ${n(y + 1.5)}`
  }
  const [kx, ky] = F.pt(KNOT_AT)
  let knot = ''
  for (let rad = 3.4; rad < KNOT_R * F.s - 1.5; rad += 2.8)
    knot += arcDashes(r, kx, ky, rad, deg(-160), deg(170), [8, 18], [2, 4])
  let back = ''
  const [bx, by] = F.pt([176, 152])
  for (let rad = 40; rad < 64; rad += 3.2)
    back += arcDashes(r, bx, by, rad, deg(98), deg(146), [6, 16], [2, 4])
  const neck = hatch(r, { x0: 140, x1: 210, y0: 138, y1: 152 }, 4, 0.1)
  // The purple cloth: a dark ground with fine pale ribs, so the black velvet
  // reads against it.
  const cloth = twill({ x0: 40, x1: 262, y0: 168, y1: 330 }, 3.4, 0.25)
  const sleeve = gouge(146, 232, 146, 318, 1.1, -1) + gouge(120, 236, 114, 318, 0.8, 1)
  const trim = scallops(TRIM_NECK_EDGE, 2.4, 5) + scallops(TRIM_SLEEVE_EDGE, 2.4, 5)
  return { ground, hair, curls, knot, back, neck, cloth, sleeve, trim }
})

function MissTemplePortrait({ uid }: ArtProps) {
  const m = marks()
  const hairClip = `${uid}-mt-hair`
  const headClip = `${uid}-mt-head`
  const gownClip = `${uid}-mt-gown`
  const sleeveClip = `${uid}-mt-sleeve`
  const P = (d: string) => placePath(d, F)
  const [ex, ey] = F.pt([217, 130])
  const [ax, ay] = F.pt([160, 118])
  const [kx, ky] = F.pt(KNOT_AT)
  const kr = KNOT_R * F.s
  const [wx, wy] = WATCH_AT
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
        <clipPath id={gownClip}>
          <path d={GOWN} />
        </clipPath>
        <clipPath id={sleeveClip}>
          <path d={SLEEVE} />
        </clipPath>
      </defs>
      <path d={m.ground} fill={PAPER} />
      {/* The ink halo that lifts the figure off the ground. */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={HEAD} />
        <path d={HAIR} />
        <circle cx={n(kx)} cy={n(ky)} r={n(kr)} />
        <path d={GOWN} />
      </g>
      {/* "her dress ... was of purple cloth": dark, with a fine pale rib */}
      <path d={GOWN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <g clipPath={`url(#${gownClip})`}>
        <path d={m.cloth} fill="none" stroke={PAPER} strokeWidth={0.6} />
      </g>
      <path d={GIRDLE} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      {/* "a gold watch ... shone at her girdle" */}
      <path
        d={`M${wx - 3} 270Q${wx - 6} 279 ${wx} ${wy - 8}`}
        fill="none"
        stroke={PAPER}
        strokeWidth={LINE.fine}
      />
      <circle cx={wx} cy={wy} r={8} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <circle cx={wx} cy={wy} r={5.4} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      <path
        d={`M${wx} ${wy}L${wx} ${wy - 4}M${wx} ${wy}L${wx + 3} ${wy + 1}`}
        stroke={INK}
        strokeWidth={LINE.fine}
      />
      {/* The sleeve, of the same cloth, over the girdle. */}
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <g clipPath={`url(#${sleeveClip})`}>
        <path d={m.cloth} fill="none" stroke={PAPER} strokeWidth={0.6} />
      </g>
      <path d={m.sleeve} fill={PAPER} />
      {/* "a sort of Spanish trimming of black velvet" */}
      <path d={TRIM_SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <path d={HEAD} fill={PAPER} />
      <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.back} strokeWidth={1.2} />
        <path d={m.neck} strokeWidth={LINE.hairline} />
      </g>
      <ProfileEar at={[ax, ay]} h={30} />
      <circle
        cx={n(kx)}
        cy={n(ky)}
        r={n(kr)}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.hairline}
      />
      <path d={m.knot} fill="none" stroke={PAPER} strokeWidth={LINE.hairline} />
      <path d={HAIR} fill={INK} />
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.hair} fill={PAPER} />
      </g>
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d={P(WOMAN_LINES.jaw)} strokeWidth={1.1} />
        <path d={P(WOMAN_LINES.brow)} strokeWidth={1.9} />
        <path d={P(WOMAN_LINES.nostril)} strokeWidth={1} />
        {/* a kind mouth, at rest */}
        <path d={P('M229 176.5Q225.5 178 221.5 176.5')} strokeWidth={1.4} />
        <path d={P(WOMAN_LINES.chin)} strokeWidth={LINE.hairline} />
        {/* "a fine pencilling of long lashes round" */}
        <path
          d={P('M222 126.5L225.5 123.5M218.5 125.5L220.5 121.5M225 128.5L229 126.5')}
          strokeWidth={LINE.hairline}
        />
      </g>
      <ProfileEye at={[ex, ey]} s={0.66} look={0.4} />
      {/* "on each of her temples her hair ... was clustered in round curls" */}
      <g fill={INK} stroke={PAPER} strokeWidth={LINE.hairline}>
        {CURLS.map((c) => {
          const [x, y] = F.pt(c)
          return <circle key={`${c[0]}-${c[1]}`} cx={n(x)} cy={n(y)} r={CURL_R} />
        })}
      </g>
      <path d={m.curls} fill="none" stroke={PAPER} strokeWidth={0.9} strokeLinecap="round" />
      <path d={TRIM_NECK} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <path d={m.trim} fill="none" stroke={PAPER} strokeWidth={LINE.fine} />
      <InnerRule />
    </>
  )
}

export const missTempleArt: LinocutArt = { width: PW, height: PH, Draw: MissTemplePortrait }

export const missTemple: Portrait = {
  name: 'Miss Temple',
  art: missTempleArt,
  alt: "A linocut portrait of Miss Temple, drawn half length in profile, facing right, from Jane's description in Chapter 5, in broad daylight: a tall woman with a calm, kind eye under fine long lashes and a broad, high, clear forehead. Her very dark hair is drawn back to a knot behind, and on her temple a cluster of round curls. Her high-waisted gown is dark, with a fine pale rib in the cloth, and is trimmed round the neck and round the top of the sleeve with bands of solid black with scalloped edges. A small round watch hangs on a short chain from the band at her high waist. Five numbered red markers point to her eye, her forehead, her curls, the black trimming and the watch.",
  describedBy: [
    {
      phrase: 'brown eyes with a benignant light in their irids',
      at: [292, 92],
      to: [221, 90],
    },
    { phrase: 'the whiteness of her large front', at: [292, 52], to: [224, 62] },
    // From behind and a little above, through the knot and the hair to the
    // curls. FIXED 10 October 2026: the line ran level at the height of the
    // curls, along the lower edge of the hair, and crossed the bare skin at
    // the back of her neck and at her temple on its way.
    {
      phrase: 'her hair, of a very dark brown, was clustered in round curls',
      at: [62, 44],
      to: [194, 67],
    },
    { phrase: 'a sort of Spanish trimming of black velvet', at: [292, 172], to: [222, 184] },
    { phrase: 'a gold watch', at: [292, 300], to: [215, 294] },
  ],
  where: 'Chapter 5',
  passage:
    'Seen now, in broad daylight, she looked tall, fair, and shapely; brown eyes with a benignant light in their irids, and a fine pencilling of long lashes round, relieved the whiteness of her large front; on each of her temples her hair, of a very dark brown, was clustered in round curls, according to the fashion of those times, when neither smooth bands nor long ringlets were in vogue; her dress, also in the mode of the day, was of purple cloth, relieved by a sort of Spanish trimming of black velvet; a gold watch (watches were not so common then as now) shone at her girdle.',
  note: 'Jane watches Miss Temple with “admiring awe” from her first morning. She is the first grown woman in the novel who is both kind and in charge, and Jane models herself on her for eight years.',
  artNote:
    'The print cannot show her brown eyes, her purple cloth or her gold watch. The cloth is cut dark with a fine pale rib, so the black velvet trimming reads against it, and the watch is cut in paper.',
}
