import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, ribbon, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  InnerRule,
  PH,
  PW,
  ProfileEye,
  WOMAN_HEAD,
  hatch,
  nudge,
  once,
  placePath,
  placer,
  portraitGround,
  smooth,
  type Knot,
} from './common'

/**
 * Adèle Varens, as Jane first sees her, and nothing else. Chapter 11, her
 * first morning at Thornfield, out on the lawn:
 *
 *   "As I was meditating on this discovery, a little girl, followed by her
 *   attendant, came running up the lawn. I looked at my pupil, who did not
 *   at first appear to notice me: she was quite a child, perhaps seven or
 *   eight years old, slightly built, with a pale, small-featured face, and a
 *   redundancy of hair falling in curls to her waist."
 *
 * So: a slight little girl of seven or eight in profile, facing right, out
 * of doors in the morning light, her face pale and small-featured, cut from
 * the one woman's head (WOMAN_HEAD) made a small child's: the brow high and
 * round, the nose small and short, the chin small and round. Her hair is a
 * great mass of curls ("a redundancy of hair") falling down her back to her
 * waist, at the foot of the block: ink, each ringlet turned in paper, as the
 * figure kit cuts them (ADELE_CURLS in ../panels/people.tsx). Her frock is
 * the brown one she wears before she is dressed up in Chapter 14 ("the
 * brown frock she had previously worn"): plain, dark, with a short sleeve
 * over a thin bare arm ("slightly built"). The brown is left to the words.
 * There is no red in this plate. Nothing here comes from a film or stage
 * production.
 *
 * Seeds: 8001 for the ground, 8002 for the cuts in the figure.
 */

/** The one woman's head made a small child's: a high round brow, a small nose and chin. */
const HEAD_K: Knot[] = nudge(WOMAN_HEAD, [
  [8, 0, -4],
  [9, 2, -4],
  [10, 2, -2],
  [14, -3, 2],
  [15, -6, 2],
  [16, -9, 1],
  [17, -7, 1],
  [18, -5, 0],
  [19, -4, 0],
  [20, -5, 0],
  [21, -5, 0],
  [22, -6, -1],
  [23, -8, -3],
  [24, -8, -4],
  [25, -6, -4],
  [26, -6, -2],
])

/** A small child, her head large for her slight body. */
const F = placer([44, 22], 0.72)
const HEAD = smooth(F.knots(HEAD_K))

/** The crown of her hair, close over the head, from which the curls fall. */
const CROWN_K: Knot[] = [
  [214, 74, 1],
  [204, 84],
  [194, 96],
  [182, 108],
  [168, 112],
  [150, 112],
  [132, 120],
  [116, 132],
  [104, 120],
  [98, 92],
  [110, 62],
  [138, 44],
  [172, 40],
  [198, 50],
]
const CROWN = smooth(F.knots(CROWN_K))

/**
 * "a redundancy of hair falling in curls to her waist": the fall of ringlets
 * down her back, in plate coordinates, from behind the head to the foot.
 */
const FALL = smooth([
  [66, 80],
  [56, 130],
  [40, 200],
  [30, 262],
  [26, 330, 1],
  [148, 330, 1],
  [150, 280],
  [146, 226],
  [140, 176],
  [132, 132],
  [118, 104],
])

/** A slight body in a plain dark frock, a short sleeve over a thin arm. */
const FROCK = smooth([
  [120, 330, 1],
  [124, 268],
  [132, 236],
  [146, 214],
  [164, 206],
  [184, 210],
  [196, 222],
  [206, 246],
  [212, 290],
  [216, 330, 1],
])
const SLEEVE = smooth([
  [140, 220],
  [162, 214],
  [176, 226],
  [176, 248],
  [158, 254],
  [140, 246],
])
const ARM = 'M156 252Q160 284 158 330L170 330Q174 284 170 252Z'

type Marks = {
  ground: string
  rings: string
  locks: string
  crownCuts: string
  back: string
  frock: string
}

const marks = once<Marks>(() => {
  // Morning light on the lawn, from in front of her.
  const ground = portraitGround(8001, (x, y) =>
    clamp(0.12 + ((x - 60) / 260) * 0.85 - Math.max(0, (y - 270) / 260)),
  )
  const r = rng(8002)
  // The ringlets: rows of curls down the fall, each a paper turn on the ink.
  let rings = ''
  let locks = ''
  for (let row = 0; row < 11; row++) {
    const y = 96 + row * 21 + between(r, -3, 3)
    const left = 66 - row * 3.6
    const right = 128 + row * 1.6
    for (let x = left + 6; x < right - 4; x += 15) {
      const cx = x + between(r, -3, 3) + (row % 2) * 7
      const cy = y + between(r, -3, 3)
      const rad = between(r, 4, 5.4)
      rings += `M${n(cx + rad)} ${n(cy)}A${n(rad)} ${n(rad)} 0 1 1 ${n(cx)} ${n(cy + rad)}`
    }
    // a lock running down between the rows
    const x0 = left + between(r, 4, 20)
    const pts: Pt[] = []
    for (let k = 0; k <= 6; k++) pts.push([x0 + Math.sin(k + row) * 3, y - 10 + k * 3.4])
    locks += ribbon(pts, 1.2, 0.8)
  }
  // The crown: paper strands drawn back over the head to where the curls fall.
  let crownCuts = ''
  for (let i = 0; i < 16; i++) {
    const t = i / 15
    const [x0, y0] = F.pt([206 - t * 40, 64 + t * 46])
    const [x1, y1] = F.pt([118 - t * 8, 70 + t * 52])
    crownCuts += gouge(x0, y0, x1, y1, between(r, 0.35, 0.6), between(r, -2, 2))
  }
  const back = hatch(r, { x0: 120, x1: 196, y0: 172, y1: 186 }, 4.4, 0.1)
  const frock = gouge(200, 250, 206, 318, 1.2, -1) + gouge(132, 262, 128, 318, 1, 1)
  return { ground, rings, locks, crownCuts, back, frock }
})

function AdelePortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-av-head`
  const crownClip = `${uid}-av-crown`
  const P = (d: string) => placePath(d, F)
  const [ex, ey] = F.pt([214, 128])
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
        <clipPath id={crownClip}>
          <path d={CROWN} />
        </clipPath>
      </defs>
      <path d={m.ground} fill={PAPER} />
      {/* The ink halo that lifts the figure off the ground. */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={FALL} />
        <path d={HEAD} />
        <path d={CROWN} />
        <path d={FROCK} />
        <path d={ARM} />
      </g>
      {/* The fall of curls down her back, to her waist. */}
      <path d={FALL} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.rings} fill="none" stroke={PAPER} strokeWidth={1.1} strokeLinecap="round" />
      <path d={m.locks} fill={PAPER} />
      <path d={FROCK} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.frock} fill={PAPER} />
      <path d={ARM} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <path d={HEAD} fill={PAPER} />
      <g clipPath={`url(#${headClip})`}>
        <path d={m.back} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      </g>
      <path d={CROWN} fill={INK} />
      <g clipPath={`url(#${crownClip})`}>
        <path d={m.crownCuts} fill={PAPER} />
      </g>
      {/* curls at her brow and temple, over the edge of the crown */}
      <g fill={INK} stroke={PAPER} strokeWidth={LINE.hairline}>
        {(
          [
            [200, 92],
            [188, 104],
            [208, 80],
            [176, 112],
          ] as Pt[]
        ).map((c) => {
          const [x, y] = F.pt(c)
          return <circle key={`${c[0]}-${c[1]}`} cx={n(x)} cy={n(y)} r={4.6} />
        })}
      </g>
      <g fill="none" stroke={PAPER} strokeWidth={0.9} strokeLinecap="round">
        {(
          [
            [200, 92],
            [188, 104],
            [208, 80],
            [176, 112],
          ] as Pt[]
        ).map((c) => {
          const [x, y] = F.pt(c)
          return (
            <path
              key={`${c[0]}-${c[1]}`}
              d={`M${n(x + 2.8)} ${n(y)}A2.8 2.8 0 1 1 ${n(x)} ${n(y + 2.8)}`}
            />
          )
        })}
      </g>
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        {/* a small, round jaw */}
        <path d={P('M214 199C202 204 190 200 182 190')} strokeWidth={1.1} />
        <path d={P('M203 117Q212 113.5 222 116.5')} strokeWidth={1.7} />
        <path d={P('M230 161C227.5 159.5 227 156.5 229 155')} strokeWidth={1} />
        {/* "small-featured": a small mouth, closed */}
        <path d={P('M223.5 176.5L218.5 177')} strokeWidth={1.4} />
        <path d={P('M219 186Q217.5 188 218 190')} strokeWidth={LINE.hairline} />
      </g>
      <ProfileEye at={[ex, ey]} s={0.74} look={0.4} />
      <InnerRule />
    </>
  )
}

export const adeleVarensArt: LinocutArt = { width: PW, height: PH, Draw: AdelePortrait }

export const adeleVarens: Portrait = {
  name: 'Adèle Varens',
  art: adeleVarensArt,
  alt: 'A linocut portrait of Adèle Varens as Jane first sees her on the lawn at Thornfield in Chapter 11: a slight little girl of seven or eight in profile, facing right, in the morning light. Her face is pale and small-featured, with a high round brow, a small nose, a small closed mouth and a round chin. A great mass of dark curls, each ringlet turned in pale lines, falls down her back to her waist, and a few curls lie at her brow. She wears a plain dark frock with a short sleeve over a thin bare arm. Three numbered red markers point to her slight build, her pale small face and her curls.',
  describedBy: [
    { phrase: 'slightly built', at: [190, 296] },
    { phrase: 'a pale, small-featured face', at: [182, 140] },
    {
      phrase: 'a redundancy of hair falling in curls to her waist',
      at: [22, 120],
      to: [50, 124],
    },
  ],
  where: 'Chapter 11',
  passage:
    'she was quite a child, perhaps seven or eight years old, slightly built, with a pale, small-featured face, and a redundancy of hair falling in curls to her waist.',
  note: 'Jane meets her pupil before anyone has told her whose child she is. Adèle is first of all a small girl almost hidden in her own hair, and Jane treats her as one.',
  artNote:
    'Her frock is the brown one she wears before Rochester’s presents arrive in Chapter 14; the brown is left to the words, and her hair, whose colour the novel does not give, is cut dark.',
}
