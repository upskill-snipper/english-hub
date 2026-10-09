import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  arc,
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  n,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  DRESS_NECK,
  EarCut,
  inside,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  shoulders,
  spline,
  WOMAN_EAR,
  WOMAN_HEAD,
  WomanNeckShadow,
  type SP,
} from './common'

/**
 * Myrtle Wilson, as Nick first sees her, coming down into her husband's
 * garage in the valley of ashes in Chapter II:
 *
 *   "Then I heard footsteps on a stairs, and in a moment the thickish figure
 *   of a woman blocked out the light from the office door. She was in the
 *   middle thirties ... Her face, above a spotted dress of dark blue
 *   crêpe-de-chine, contained no facet or gleam of beauty, but there was an
 *   immediately perceptible vitality about her as if the nerves of her body
 *   were continually smouldering. She smiled slowly"
 *
 * So: a woman in her middle thirties in profile, facing right, towards Tom,
 * smiling slowly, the corner of her closed mouth drawn up; and round her head
 * and shoulders broken rings of light cut in the dark of the garage, as the
 * pilot cuts the glow round Fred, for the "vitality about her", with the
 * ground lit from her outwards. Her dress is ink, spotted in paper, with a
 * plain round neck; its blue is left to the words. Her hair is dark and
 * pinned up in a knot at the back of the head, as the figure kit
 * (../panels/people.tsx) cuts MYRTLE_HAIR; the novel does not describe it.
 * She is a little broader than the other women in the gallery, as the kit
 * makes her, and drawn with the same care as every other sitter: Nick's
 * harsher words about her body and her face are not drawn or quoted on the
 * card. Nothing here comes from a film or stage production, and there is no
 * red in this plate.
 *
 * Seeds: 6601 (the ground), 6602 (the hair), 6603 (the spots), 6604 (the
 * rings of light).
 */

const P = placing(34, 18, 1.0)

/** Dark hair drawn back from the brow over the top of the ear to the knot. */
const HAIR_PTS: SP[] = [
  [162, 60, 1],
  [154, 62],
  [145, 66],
  [136, 74],
  [128, 86],
  [120, 96],
  [110, 98],
  [100, 101],
  [92, 110],
  [86, 124],
  [78, 138],
  [64, 146, 1],
  [48, 140],
  [40, 118],
  [40, 92],
  [50, 66],
  [74, 44],
  [106, 30],
  [136, 30],
  [154, 40],
  [161, 50],
]
const HAIR = spline(HAIR_PTS)
/** The knot it is pinned up in, at the back of the head. */
const KNOT: Pt = [34, 104]

/** Her dress over the shoulders, a little broader than Daisy's. */
const DRESS = shoulders(1, 6)

/** Her smile: the closed mouth drawn up slowly at its corner. */
const MOUTH = 'M163.6 137.4Q159.4 139.6 154.8 135.2'
const FEATURES = {
  nostril: 'M169.5 121.5C166 119.5 166 115.5 170 114.5',
  upperLip: 'M165.5 133C163.5 134 161.5 135.5 160.5 137',
  lowerLip: 'M164.5 143.5C162.5 145 160.5 145.3 158.5 144.7',
  /** The fold of the cheek lifted by the smile. */
  cheek: 'M163 120Q155.6 126 155 135',
  brow: 'M143 83.5Q152 80 161 83',
  lid: 'M145 94.5Q152.5 90 160.5 94',
  lower: 'M146.5 99.2Q153 100.4 159.5 98.4',
}

const marks = once(() => {
  // The dim garage, lit from her outwards: the ground glows round her.
  const [hx, hy] = P.to(118, 120)
  const ground = portraitGround('gg-myrtle', 6601, (x, y) =>
    clamp(1.05 - Math.hypot(x - hx, (y - hy) * 1.1) / 170),
  )
  const r = rng(6602)
  // Dark hair drawn back: paper strands from the brow and temple back to the
  // knot, kept inside the hair.
  const poly = HAIR_PTS.map(([x, y]): Pt => [x, y])
  let hair = ''
  for (let i = 0; i < 22; i++) {
    const t = (i + between(r, 0.2, 0.8)) / 22
    const x0 = 158 - t * 52 + between(r, -2, 2)
    const y0 = 48 + t * 52 + between(r, -2, 2)
    const x1 = 50 + between(r, -3, 3)
    const y1 = 84 + t * 40
    if (inside(poly, x0, y0))
      hair += gouge(x0, y0, x1, y1, between(r, 0.7, 1.15), between(r, -5, -2))
  }
  // The knot: a few turns cut round it.
  let knot = ''
  for (let rad = 4; rad < 15; rad += 3.6)
    knot += arc(KNOT[0], KNOT[1], rad, deg(rad * 20), deg(rad * 20 + 280))
  // "a spotted dress": paper spots in loose rows over the ink.
  const rs = rng(6603)
  const spots: Pt[] = []
  for (let row = 0; row < 8; row++)
    for (let x = -6 + (row % 2) * 9; x < 244; x += 18)
      spots.push([x + between(rs, -2, 2), 250 + row * 12 + between(rs, -2, 2)])
  // "an immediately perceptible vitality about her": broken rings of light
  // cut round her head and shoulders, as the pilot cuts the glow round Fred.
  const rr = rng(6604)
  let rays = ''
  for (let rad = 104; rad < 176; rad += 8)
    rays += arcDashes(rr, 112, 128, rad, deg(-200), deg(20), [10, 28], [6, 15])
  return { ground, hair, knot, spots, rays }
})

function MyrtleFigure({ uid }: { uid: string }) {
  const m = marks()
  const hairClip = `${uid}-gg-myrtle-hair`
  const dressClip = `${uid}-gg-myrtle-dress`
  return (
    <g>
      <defs>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
        <clipPath id={dressClip}>
          <path d={DRESS} />
        </clipPath>
      </defs>
      {/* the rings of light round her, "continually smouldering": they
          breathe, and settle lit */}
      <g className="lc-glow" style={timing({ delay: 0.4 })}>
        <path d={m.rays} fill="none" stroke={PAPER} strokeWidth={1.9} strokeLinecap="round" />
      </g>
      {/* The ink halo that lifts the figure off the lit ground. */}
      <g fill={INK} stroke={INK} strokeWidth={10} strokeLinejoin="round">
        <path d={DRESS} />
        <path d={WOMAN_HEAD} />
        <path d={HAIR} />
        <circle cx={KNOT[0]} cy={KNOT[1]} r={16} />
      </g>
      <path d={DRESS} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <g clipPath={`url(#${dressClip})`} fill={PAPER}>
        {m.spots.map(([x, y]) => (
          <circle key={`${n(x)}-${n(y)}`} cx={n(x)} cy={n(y)} r={2.6} />
        ))}
      </g>
      <path d={WOMAN_HEAD} fill={PAPER} />
      <WomanNeckShadow id={`${uid}-gg-myrtle`} />
      <path d={DRESS_NECK} fill="none" stroke={PAPER} strokeWidth={2.4} strokeLinecap="round" />
      <path d={DRESS_NECK} fill="none" stroke={INK} strokeWidth={1.2} strokeLinecap="round" />
      <circle cx={KNOT[0]} cy={KNOT[1]} r={15} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.knot} fill="none" stroke={PAPER} strokeWidth={1.1} strokeLinecap="round" />
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.hair} fill={PAPER} />
      </g>
      <EarCut outline={WOMAN_EAR.outline} curl={WOMAN_EAR.curl} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d={FEATURES.nostril} strokeWidth={1.2} />
        <path d={FEATURES.upperLip} strokeWidth={0.9} />
        <path d={FEATURES.lowerLip} strokeWidth={0.9} />
        <path d={FEATURES.cheek} strokeWidth={1} />
        <path d={FEATURES.brow} strokeWidth={2.2} />
        <path d={FEATURES.lid} strokeWidth={2.2} />
        <path d={FEATURES.lower} strokeWidth={1} />
        {/* "She smiled slowly" */}
        <path d={MOUTH} strokeWidth={1.9} />
      </g>
      <circle cx={153.6} cy={96} r={2.5} fill={INK} />
      <circle cx={154.5} cy={95.2} r={0.85} fill={PAPER} />
    </g>
  )
}

function MyrtlePortrait({ uid }: ArtProps) {
  const m = marks()
  return (
    <>
      <path d={m.ground} fill={PAPER} />
      <g transform={P.transform}>
        <MyrtleFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const myrtleWilsonArt: LinocutArt = { width: PW, height: PH, Draw: MyrtlePortrait }

const CHEEK = P.to(142, 120)
const DRESS_AT = P.to(176, 268)
const RAYS_AT = P.to(214, 40)
/**
 * Where the smile's marker line stops: in the air, well in front of her lips.
 * (It first stopped a unit or two from them, and at phone width a red line
 * at a mouth reads as blood, 9 October 2026.)
 */
const LIPS = P.to(178, 137)

export const myrtleWilson: Portrait = {
  name: 'Myrtle Wilson',
  art: myrtleWilsonArt,
  alt: "A linocut portrait of Myrtle Wilson in profile, facing right, drawn from Fitzgerald's description in Chapter II: a woman in her middle thirties, smiling slowly, the corner of her closed mouth drawn up and her eye bright. Her dark hair is drawn back over her ear and pinned up in a knot at the back of her head. She wears a dark dress spotted with pale spots, with a plain round neck. Round her head and shoulders, broken rings of light are cut into the dark, and the ground is lit from her outwards. Four numbered red markers point to her face, her spotted dress, the light about her and her smile.",
  describedBy: [
    { phrase: 'She was in the middle thirties', at: CHEEK },
    { phrase: 'a spotted dress of dark blue crêpe-de-chine', at: DRESS_AT },
    {
      phrase: 'an immediately perceptible vitality about her',
      at: RAYS_AT,
    },
    { phrase: 'She smiled slowly', at: [LIPS[0] + 56, LIPS[1]], to: LIPS },
  ],
  where: 'Chapter II',
  note: 'In the grey valley of ashes, where the dust veils everything but her, Myrtle is the one thing alive. She is Tom’s mistress and George Wilson’s wife, and she wants out of the valley.',
  artNote:
    'The print has no blue, so her dress is ink, its spots cut in paper. The novel does not describe her hair: it is pinned up, as the panels draw it.',
}
