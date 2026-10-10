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
  FACE_LEFT,
  InnerRule,
  PH,
  PW,
  ProfileEye,
  WOMAN_HEAD,
  WOMAN_LINES,
  flip,
  hatch,
  lerp2,
  nudge,
  once,
  placePath,
  placer,
  portraitGround,
  smooth,
  strands,
  type Knot,
} from './common'

/**
 * Blanche Ingram, as Mrs Fairfax describes her to Jane, and nothing else.
 * Chapter 16, remembering her at a Christmas ball at Thornfield:
 *
 *   "noble features; eyes rather like Mr. Rochester's: large and black, and
 *   as brilliant as her jewels. And then she had such a fine head of hair;
 *   raven-black and so becomingly arranged: a crown of thick plaits behind,
 *   and in front the longest, the glossiest curls I ever saw. She was
 *   dressed in pure white; an amber-coloured scarf was passed over her
 *   shoulder and across her breast, tied at the side, and descending in
 *   long, fringed ends below her knee. She wore an amber-coloured flower,
 *   too, in her hair: it contrasted well with the jetty mass of her curls."
 *
 * When Jane sees her for herself, in Chapter 17, "she answered point for
 * point, both to my picture and Mrs. Fairfax's description", with "the same
 * low brow, the same high features, the same pride" as her mother, and
 * "the habitual expression of her arched and haughty lip".
 *
 * So: a tall young woman in profile, facing left, her head carried high,
 * cut from the one woman's head (WOMAN_HEAD) with only what the text gives
 * her changed: a low brow, a high-bridged nose, the upper lip a little
 * arched. Her eye is large and dark, with a bright glint ("as brilliant as
 * her jewels"). Her black hair is smooth from the brow to a crown of plaits
 * at the back, and in front of the ear long glossy ringlets fall to her
 * neck, each turned in paper, as the figure kit cuts them (BLANCHE_HAIR in
 * ../panels/people.tsx); a flower is set in her hair, cut in paper. Her gown
 * is white, cut in paper, dressed to the collarbone, with the scarf passed
 * over her shoulder and across her breast, cut dark; its fringed ends fall
 * "below her knee", out of this half-length block. FIXED 10 October 2026:
 * the fringe was cut below the foot of the plate, where nothing prints, and
 * the alt text described it as if it showed; the dead cuts went, and the
 * alt text now describes what prints. She is drawn with the dignity
 * of every other sitter, and nothing on the card is chosen for what it says
 * about a woman's body. Her "olive complexion" and the amber of the scarf
 * and flower are colours the print cannot show; the card says so. There is
 * no red in this plate. Nothing here comes from a film or stage production.
 *
 * Drawn facing right and turned by FACE_LEFT, so the markers below are
 * placed with flip(). Seeds: 8101 for the ground, 8102 for the cuts.
 */

/** The one woman's head: the brow low, the nose high-bridged, the upper lip arched. */
const HEAD_K: Knot[] = nudge(WOMAN_HEAD, [
  [12, 1, 0],
  [13, 1, -1],
  [14, 3.5, -1.5],
  [15, 2, -0.5],
  [16, 0.5, 0],
  [19, 1.2, -0.5],
])

/** Tall, the head carried high: the chin a little lifted. */
const F = placer([20, -12], 0.88, -4, [164, 252])
const HEAD = smooth(F.knots(HEAD_K))

/** Raven-black hair, smooth from a low brow to the crown of plaits behind. */
const HAIR_K: Knot[] = [
  [221, 86, 1],
  [212, 90],
  [204, 100],
  [196, 112],
  [182, 118],
  [166, 118],
  [148, 120],
  [128, 124],
  [110, 112],
  [102, 90],
  [110, 64],
  [134, 46],
  [166, 38],
  [196, 44],
  [214, 62],
]
const HAIR = smooth(F.knots(HAIR_K))
/** "a crown of thick plaits behind": a coil of plaits at the back of the head. */
const PLAITS_AT: Pt = [108, 78]
const PLAITS_R = 26
/** "in front the longest, the glossiest curls": ringlets before the ear, to the neck. */
const RINGLETS: Pt[] = [
  [184, 128],
  [178, 142],
  [186, 152],
  [176, 158],
  [184, 168],
  [174, 176],
  [182, 186],
  [172, 194],
]
/** The flower in her hair, over the temple. */
const FLOWER_AT: Pt = [150, 72]

/** The white gown, dressed to the collarbone, and the scarf over the shoulder. */
const GOWN = smooth([
  [6, 330, 1],
  [12, 294],
  [32, 262],
  [72, 242],
  [116, 232],
  [148, 234],
  [180, 240],
  [214, 238],
  [240, 248],
  [262, 272],
  [272, 302],
  [276, 330, 1],
])
const SCARF = smooth([
  [96, 236, 1],
  [130, 236],
  [168, 256],
  [214, 290],
  [244, 330, 1],
  [196, 330, 1],
  [164, 292],
  [124, 266],
  [86, 256],
])

type Marks = {
  ground: string
  hair: string
  plaits: string
  rings: string
  back: string
  neck: string
  gown: string
}

const marks = once<Marks>(() => {
  // The light of a ball: candles before her, the dark behind.
  const ground = portraitGround(8101, (x, y) =>
    clamp(0.08 + ((x - 50) / 270) * 0.9 - Math.max(0, (y - 260) / 280)),
  )
  const r = rng(8102)
  // "raven-black ... so becomingly arranged": a gloss cut in long lines.
  const hair = strands(
    r,
    28,
    lerp2(F.pt([220, 82]), F.pt([194, 114])),
    lerp2(F.pt([134, 46]), F.pt([118, 120])),
    [0.35, 0.65],
    1.2,
  )
  // The plaits: braided strands coiled round, cut as rows of short slanting
  // paper ticks along rings.
  const [px, py] = F.pt(PLAITS_AT)
  let plaits = ''
  for (let ring = 0; ring < 3; ring++) {
    const rad = 6 + ring * 7
    for (let a = 0; a < 360; a += 26 - ring * 5) {
      const t = deg(a + ring * 9)
      const x = px + Math.cos(t) * rad
      const y = py + Math.sin(t) * rad
      plaits += gouge(x - 2.4, y - 1.6, x + 2.4, y + 1.6, 1, 0.4)
    }
  }
  // The ringlets: each a turn of paper on the black.
  let rings = ''
  for (const c of RINGLETS) {
    const [x, y] = F.pt(c)
    const rad = between(r, 3.6, 4.4)
    rings += `M${n(x + rad)} ${n(y)}A${n(rad)} ${n(rad)} 0 1 1 ${n(x)} ${n(y + rad)}`
  }
  let back = ''
  const [bx, by] = F.pt([180, 154])
  for (let rad = 40; rad < 70; rad += 3.4)
    back += arcDashes(r, bx, by, rad, deg(100), deg(146), [8, 18], [2, 5])
  const neck = hatch(r, { x0: 150, x1: 226, y0: 168, y1: 184 }, 4.4, 0.1)
  // White silk: a few long folds in fine ink.
  const gown = 'M60 252Q48 290 44 330M96 244Q90 290 92 330M236 252Q252 290 254 330'
  return { ground, hair, plaits, rings, back, neck, gown }
})

function BlanchePortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-bi-head`
  const hairClip = `${uid}-bi-hair`
  const P = (d: string) => placePath(d, F)
  const [ex, ey] = F.pt([217, 130])
  const [px, py] = F.pt(PLAITS_AT)
  const pr = PLAITS_R * F.s
  const [fx, fy] = F.pt(FLOWER_AT)
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
          <circle cx={n(px)} cy={n(py)} r={n(pr)} />
          <path d={GOWN} />
        </g>
        {/* "She was dressed in pure white" */}
        <path d={GOWN} fill={PAPER} />
        <path d={m.gown} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
        <path d="M120 236Q170 252 214 240" fill="none" stroke={INK} strokeWidth={LINE.fine} />
        {/* "an amber-coloured scarf was passed over her shoulder" */}
        <path d={SCARF} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path d={HEAD} fill={PAPER} />
        <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.back} strokeWidth={1.3} />
          <path d={m.neck} strokeWidth={LINE.hairline} />
        </g>
        {/* "a crown of thick plaits behind" */}
        <circle
          cx={n(px)}
          cy={n(py)}
          r={n(pr)}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.hairline}
        />
        <path d={m.plaits} fill={PAPER} />
        <path d={HAIR} fill={INK} />
        <g clipPath={`url(#${hairClip})`}>
          <path d={m.hair} fill={PAPER} />
        </g>
        {/* "in front the longest, the glossiest curls I ever saw" */}
        <g fill={INK} stroke={PAPER} strokeWidth={LINE.hairline}>
          {RINGLETS.map((c) => {
            const [x, y] = F.pt(c)
            return <circle key={`${c[0]}-${c[1]}`} cx={n(x)} cy={n(y)} r={6} />
          })}
        </g>
        <path d={m.rings} fill="none" stroke={PAPER} strokeWidth={1} strokeLinecap="round" />
        {/* "an amber-coloured flower, too, in her hair" */}
        <g fill={PAPER} stroke={INK} strokeWidth={LINE.fine}>
          {[0, 72, 144, 216, 288].map((a) => (
            <ellipse
              key={a}
              cx={n(fx + Math.cos(deg(a)) * 5)}
              cy={n(fy + Math.sin(deg(a)) * 5)}
              rx={4.2}
              ry={3}
              transform={`rotate(${a} ${n(fx + Math.cos(deg(a)) * 5)} ${n(fy + Math.sin(deg(a)) * 5)})`}
            />
          ))}
        </g>
        <circle cx={n(fx)} cy={n(fy)} r={2.4} fill={INK} />
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          <path d={P(WOMAN_LINES.jaw)} strokeWidth={1.2} />
          {/* a low, arched brow */}
          <path d={P('M204 121Q214 115 226 120')} strokeWidth={2.2} />
          <path d={P(WOMAN_LINES.nostril)} strokeWidth={1.2} />
          {/* "her arched and haughty lip" */}
          <path d={P('M230 175.5Q226 174.5 221.5 177')} strokeWidth={1.6} />
          <path d={P(WOMAN_LINES.lowerLip)} strokeWidth={LINE.hairline} />
          <path d={P(WOMAN_LINES.chin)} strokeWidth={LINE.hairline} />
        </g>
        {/* "large and black, and as brilliant as her jewels" */}
        <ProfileEye at={[ex, ey]} s={0.92} look={0.5} />
        <circle cx={ex + 4.4} cy={ey - 0.6} r={1.3} fill={PAPER} />
      </g>
      <InnerRule />
    </>
  )
}

export const blancheIngramArt: LinocutArt = { width: PW, height: PH, Draw: BlanchePortrait }

export const blancheIngram: Portrait = {
  name: 'Blanche Ingram',
  art: blancheIngramArt,
  alt: "A linocut portrait of Blanche Ingram in profile, facing left, drawn from Mrs Fairfax's description in Chapter 16: a tall young woman with her head carried high, a low arched brow, a high-bridged nose and the upper lip a little arched. Her eye is large and dark with a bright glint. Her black hair is smooth from her brow to a coil of thick plaits at the back of her head, and long glossy ringlets fall in front of her ear to her neck; a flower is set in her hair. She wears a white gown to the collarbone, with a dark scarf passed over her shoulder and across her breast. Five numbered red markers point to her face, her eye, her plaits, her ringlets and her white gown.",
  describedBy: [
    { phrase: 'noble features', at: flip([196, 148]) },
    {
      phrase: 'large and black, and as brilliant as her jewels',
      at: flip([298, 104]),
      to: flip([232, 108]),
    },
    { phrase: 'a crown of thick plaits behind', at: flip([28, 70]), to: flip([90, 62]) },
    {
      phrase: 'the longest, the glossiest curls I ever saw',
      at: flip([120, 186]),
      to: flip([168, 168]),
    },
    { phrase: 'She was dressed in pure white', at: flip([62, 288]) },
  ],
  where: 'Chapter 16',
  passage:
    'noble features; eyes rather like Mr. Rochester’s: large and black, and as brilliant as her jewels. And then she had such a fine head of hair; raven-black and so becomingly arranged: a crown of thick plaits behind, and in front the longest, the glossiest curls I ever saw. She was dressed in pure white; an amber-coloured scarf was passed over her shoulder and across her breast, tied at the side, and descending in long, fringed ends below her knee. She wore an amber-coloured flower, too, in her hair: it contrasted well with the jetty mass of her curls.',
  note: 'Jane hears Blanche described before she sees her, and the picture is all surface: jewels, hair, silk. When Blanche arrives she matches it “point for point”, and Jane soon judges that “She was not good; she was not original”.',
  artNote:
    'Mrs Fairfax gives her an “olive complexion, dark and clear”, an amber scarf and an amber flower. The print has one colour besides black, so her face is cut in paper like every other, the scarf is cut dark and the flower pale, and those colours are left to the words.',
}
