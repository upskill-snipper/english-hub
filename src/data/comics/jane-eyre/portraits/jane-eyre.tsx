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
  type Knot,
} from './common'

/**
 * Jane Eyre, as she describes herself, and nothing else. Chapter 11, her
 * first morning at Thornfield, dressing to meet Mrs Fairfax and her pupil:
 *
 *   "I sometimes regretted that I was not handsomer; I sometimes wished to
 *   have rosy cheeks, a straight nose, and small cherry mouth; I desired to
 *   be tall, stately, and finely developed in figure; I felt it a misfortune
 *   that I was so little, so pale, and had features so irregular and so
 *   marked."
 *
 * and, in the same paragraph, "when I had brushed my hair very smooth, and
 * put on my black frock" (which, she says, "at least had the merit of
 * fitting to a nicety") "and adjusted my clean white tucker, I thought I
 * should do respectably enough". (The edition sets the clause about the
 * frock between dashes; the card prints the phrases alone, so no dash is
 * quoted.)
 *
 * So she is drawn by what she says she is not: small and pale, with no red
 * on her face, since she wished for "rosy cheeks"; her nose not straight,
 * with a slight rise in the bridge; her mouth not small, a firm line a
 * little longer than the other women's; her brow and chin clear and decided
 * ("so marked"). She is set a little smaller in the block than the other
 * women ("so little"), in profile, facing right, towards the window she has
 * just opened, whose light is the light of the ground. Her hair is brushed
 * flat and smooth from the brow, over the top of the ear, into a knot at the
 * back, cut as fine unbroken lines. Her black frock is plain, high and close
 * to her shoulders, and her clean white tucker is a narrow frill of linen
 * along its neck. In Chapter 24 she says "I had green eyes, reader", and
 * Rochester calls her hair hazel; the print shows neither colour, and the
 * card says so. Nothing here comes from a film or stage production.
 *
 * The head is the one woman's head (WOMAN_HEAD), placed with placer().
 * Seeds: 7101 for the ground, 7102 for the cuts in the figure.
 */

/** The one woman's head: the bridge of the nose rising a little, the brow and chin decided. */
const HEAD_K: Knot[] = nudge(WOMAN_HEAD, [
  [12, 1, 0],
  [14, 3.2, -1.5],
  [15, 0.8, 0.4],
  [16, -0.6, 0.6],
  [23, 1.2, 0.5],
  [24, 0.6, 0],
])

/** Small: the head at 0.86 of the block's women, set with room round her. */
const F = placer([30, 8], 0.86)
const HEAD = smooth(F.knots(HEAD_K))

/**
 * Her hair, brushed smooth: flat over the crown from the brow, drawn down
 * over the top of the ear in a smooth band, and gathered behind into a knot.
 */
const HAIR_K: Knot[] = [
  [216, 64, 1],
  [214, 76],
  [209, 90],
  [201, 103],
  [190, 114],
  [176, 124],
  [160, 131],
  [142, 134],
  [124, 132],
  [108, 122],
  [101, 104],
  [104, 84],
  [118, 64],
  [142, 52],
  [170, 47],
  [196, 50],
  [210, 57],
]
const HAIR = smooth(F.knots(HAIR_K))
/** The knot at the back of the head, a coil of the smooth hair. */
const KNOT_AT: Pt = [100, 118]
const KNOT_R = 22

/** The black frock: narrow, sloping shoulders, high at the neck. */
const FROCK = smooth([
  [18, 330, 1],
  [24, 302],
  [40, 282],
  [70, 264],
  [106, 248],
  [130, 232],
  [138, 216],
  [166, 222],
  [194, 226],
  [212, 222],
  [228, 234],
  [242, 256],
  [250, 290],
  [252, 330, 1],
])
/** The clean white tucker, along the neck of the frock. */
const TUCKER = smooth([
  [137, 211, 1],
  [162, 218],
  [188, 222],
  [206, 219],
  [214, 216, 1],
  [216, 224],
  [206, 228],
  [188, 230],
  [162, 226],
  [135, 219, 1],
])
const TUCKER_EDGE: Pt[] = [
  [139, 212],
  [162, 218.5],
  [188, 222.5],
  [206, 219.5],
  [213, 216.5],
]

type Marks = {
  ground: string
  hair: string
  band: string
  knot: string
  back: string
  neck: string
  frock: string
  frill: string
}

const marks = once<Marks>(() => {
  // Morning light from the window in front of her; dark behind her.
  const ground = portraitGround(7101, (x, y) =>
    clamp(0.06 + ((x - 50) / 270) * 0.95 - Math.max(0, (y - 250) / 260)),
  )
  const r = rng(7102)
  // "brushed my hair very smooth": long fine cuts, all lying one way, from
  // the brow back over the crown to the knot, and from the temple back over
  // the ear.
  const hair =
    strands(
      r,
      36,
      lerp2(F.pt([213, 62]), F.pt([200, 104])),
      lerp2(F.pt([118, 70]), F.pt([112, 112])),
      [0.35, 0.6],
      1.2,
    ) +
    strands(
      r,
      12,
      lerp2(F.pt([196, 108]), F.pt([178, 122])),
      lerp2(F.pt([122, 118]), F.pt([120, 130])),
      [0.3, 0.55],
      0.8,
    )
  // The lower edge of the band over the ear, catching the light.
  const band = `M${F.p(192, 113)}Q${F.p(166, 130)} ${F.p(128, 132)}`
  // The knot: a coil of hair, cut as rings round its middle.
  const [kx, ky] = F.pt(KNOT_AT)
  let knot = ''
  for (let rad = 4; rad < KNOT_R * F.s - 2; rad += 3.1)
    knot += arcDashes(r, kx, ky, rad, deg(-160), deg(170), [10, 24], [2, 4])
  // The shadow down the back of the neck, under the knot.
  const [bx, by] = F.pt([176, 150])
  let back = ''
  for (let rad = 50; rad < 80; rad += 3.4)
    back += arcDashes(r, bx, by, rad, deg(98), deg(146), [8, 20], [2, 5])
  // Only the shadow under the jaw.
  const neck = hatch(r, { x0: 134, x1: 200, y0: 184, y1: 200 }, 4.6, 0.08)
  // The frock, lit from the window at the front: folds at the shoulder and
  // the seam of the sleeve.
  const frock =
    gouge(222, 246, 240, 314, 1.8, -2) +
    gouge(210, 252, 222, 318, 1.1, -1) +
    gouge(48, 280, 34, 318, 1.3, 2) +
    gouge(88, 266, 80, 318, 1, 1) +
    gouge(150, 236, 136, 300, 0.9, 2)
  const frill = scallops(TUCKER_EDGE, 2.2, 4.4)
  return { ground, hair, band, knot, back, neck, frock, frill }
})

function JanePortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-je-head`
  const hairClip = `${uid}-je-hair`
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
      </defs>
      <path d={m.ground} fill={PAPER} />
      {/* The ink halo that lifts the figure off the ground. */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={HEAD} />
        <path d={HAIR} />
        <circle cx={n(kx)} cy={n(ky)} r={n(kr)} />
        <path d={FROCK} />
      </g>
      <path d={FROCK} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.frock} fill={PAPER} />
      <path d={HEAD} fill={PAPER} />
      <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.back} strokeWidth={1.4} />
        <path d={m.neck} strokeWidth={LINE.hairline} />
      </g>
      <ProfileEar at={[ax, ay]} h={36} />
      {/* The knot behind, then the smooth hair over the crown and the ear. */}
      <circle cx={n(kx)} cy={n(ky)} r={n(kr)} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <path d={m.knot} fill="none" stroke={PAPER} strokeWidth={LINE.hairline} />
      <path d={HAIR} fill={INK} />
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.hair} fill={PAPER} />
      </g>
      <path d={m.band} fill="none" stroke={PAPER} strokeWidth={LINE.fine} strokeLinecap="round" />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d={P(WOMAN_LINES.jaw)} strokeWidth={1.3} />
        {/* "so marked": a clear, straight brow */}
        <path d={P('M204 118Q215 114.5 226.5 118.2')} strokeWidth={2.6} />
        {/* "features so irregular": the bridge of the nose rises (HEAD_K) over a plain nostril */}
        <path d={P(WOMAN_LINES.nostril)} strokeWidth={1.2} />
        {/* not "small cherry mouth": a firm line, a little long */}
        <path d={P('M229.5 176.5L220.5 177.6')} strokeWidth={1.6} />
        <path d={P(WOMAN_LINES.lowerLip)} strokeWidth={LINE.hairline} />
        <path d={P('M227 188.5Q225 191 226 194')} strokeWidth={LINE.hairline} />
      </g>
      <ProfileEye at={[ex, ey]} s={0.8} look={0.4} />
      <path d={TUCKER} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={m.frill} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      <path
        d="M142 217Q172 225 210 224"
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
        strokeLinecap="round"
      />
      <InnerRule />
    </>
  )
}

export const janeEyreArt: LinocutArt = { width: PW, height: PH, Draw: JanePortrait }

export const janeEyre: Portrait = {
  name: 'Jane Eyre',
  art: janeEyreArt,
  alt: 'A linocut portrait of Jane Eyre at eighteen, in profile, facing right, drawn from her own description of herself in Chapter 11 on her first morning at Thornfield. She is small and pale, set a little smaller in the block than the other sitters, with no colour in her face. Her features are plain and decided: a clear straight brow, a nose whose bridge rises a little, a firm mouth and a definite chin. Her dark hair is brushed flat and smooth from her brow, over the top of her ear, into a knot at the back. She wears a plain black frock, high and close at the neck, with a narrow frill of white linen along it. Light comes from in front of her face. Five numbered red markers point to her pale face, her features, her smooth hair, her black frock and the white tucker at her neck.',
  describedBy: [
    { phrase: 'so little, so pale', at: [196, 150] },
    { phrase: 'features so irregular and so marked', at: [296, 118], to: [235, 124] },
    { phrase: 'brushed my hair very smooth', at: [48, 84], to: [122, 84] },
    { phrase: 'my black frock', at: [100, 286] },
    { phrase: 'my clean white tucker', at: [292, 212], to: [219, 220] },
  ],
  where: 'Chapter 11',
  note: 'Jane is her own plainest portrait painter. She lists what she lacks, cannot say why it matters to her, and then makes herself neat and goes down to meet her new life.',
  artNote:
    'The print has no colour but red, and Jane is pale, so there is none in her face. She says in Chapter 24 that she has green eyes, and Rochester there calls her hair hazel: both are left to the words. The words come from one paragraph, but a clause between them is set off by dashes, so the card prints the phrases alone.',
}
