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
  Bloom,
  FACE_LEFT,
  InnerRule,
  PH,
  PW,
  ProfileEar,
  ProfileEye,
  WOMAN_HEAD,
  flip,
  hatch,
  lerp2,
  nudge,
  once,
  placer,
  portraitGround,
  scallops,
  smooth,
  strands,
  twill,
  type Knot,
} from './common'

/**
 * Nancy Lammeter, as George Eliot describes her, and nothing else. Chapter
 * 11, dressing for the New Year's Eve dance at the Red House, with her aunt
 * and the Miss Gunns looking on:
 *
 *   "It is true that her light-brown hair was cropped behind like a boy's,
 *   and was dressed in front in a number of flat rings, that lay quite away
 *   from her face; but there was no sort of coiffure that could make Miss
 *   Nancy's cheek and neck look otherwise than pretty; and when at last she
 *   stood complete in her silvery twilled silk, her lace tucker, her coral
 *   necklace, and coral ear-drops, the Miss Gunns could see nothing to
 *   criticise except her hands"
 *
 * and, in the same chapter, "the bloom on her cheeks", "the clasping of the
 * small coral necklace that fitted closely round her little white neck",
 * "as for her own person, it gave the same idea of perfect unvarying neatness
 * as the body of a little bird", and "her pretty lips met each other with
 * such quiet firmness".
 *
 * So: a small, neat young woman in profile, facing left, cut from the one
 * woman's head every portrait here starts from (WOMAN_HEAD), with its
 * features made small and fine; her hair short at the back of the head, cut
 * close above the nape like a boy's, and a row of flat rings of hair laid
 * along her brow and temple; her lips closed and firm; the bloom on her
 * cheek in the spot colour, high on the cheekbone, well away from the mouth.
 * Her gown is the silvery twilled silk: pale, crossed with the fine diagonal
 * ribs of the twill, cut low and high-waisted in the way of about 1800, with
 * a short puffed sleeve, and a lace tucker along its neckline. The coral
 * necklace and ear-drops are cut in paper, small round beads close round her
 * neck and a drop at her ear, and their colour is left to the words: a red
 * line round a neck, or a red drop below an ear, reads at a glance as a
 * wound. She matches the Nancy of the panels (../panels/people.tsx): small,
 * the hair cropped behind, the flat rings over the brow. Nothing here comes
 * from a film or stage production.
 *
 * Drawn facing right and turned by FACE_LEFT, so the markers below are
 * placed with flip(). Seeds: 5701 for the ground, 5702 for the cuts in the
 * figure.
 */

/** The one woman's head, its nose shorter and its chin a little rounder. */
const HEAD_K: Knot[] = nudge(WOMAN_HEAD, [
  [15, -1, 0],
  [16, -2.5, -0.5],
  [17, -1.5, 0],
  [23, 0, 1],
])

/**
 * Her hair: close over the crown and cut short above the nape, as a boy's
 * is, with the flat rings laid along the front of it.
 */
const HAIR_K: Knot[] = [
  [216, 70],
  [205, 80],
  [197, 94],
  [190, 108],
  [178, 112],
  [164, 106],
  [150, 110],
  [138, 126],
  [128, 152],
  [120, 176, 1],
  [106, 168],
  [99, 138],
  [104, 102],
  [122, 70],
  [152, 48],
  [186, 45],
  [210, 54],
]
/** The flat rings dressed along her brow and temple, in the head's frame. */
const RINGS: Pt[] = [
  [219, 74],
  [212, 82],
  [205.5, 92],
  [200, 103],
  [194, 112],
  [211, 68],
]

/** Small: the head at nine-tenths of the men's, placed high, to show her gown. */
const F = placer([15, -8], 0.9)
const HEAD = smooth(F.knots(HEAD_K))
const HAIR = smooth(F.knots(HAIR_K))

/** The bodice of the gown, cut low, the waist high under the bust. */
const GOWN = smooth([
  [124, 218, 1],
  [106, 216],
  [80, 228],
  [58, 256],
  [44, 294],
  [40, 324, 1],
  [252, 324, 1],
  [254, 294],
  [246, 266],
  [228, 244, 1],
  [196, 242],
  [166, 232],
])
/** Her shoulder and the top of her arm, bare above the sleeve. */
const SKIN = smooth([
  [130, 200, 1],
  [194, 200, 1],
  [204, 224],
  [228, 244, 1],
  [196, 242],
  [166, 232],
  [124, 220, 1],
])
/** The short puffed sleeve over the top of the arm. */
const SLEEVE = smooth([
  [92, 230],
  [118, 222],
  [144, 232],
  [152, 256],
  [140, 280],
  [110, 286],
  [84, 274],
  [76, 252],
])
/** The lace tucker along the neckline, from the shoulder to the front. */
const TUCKER_SPINE: Pt[] = [
  [128, 222],
  [150, 230],
  [170, 236],
  [196, 244],
  [226, 246],
]

type Marks = {
  ground: string
  hair: string
  back: string
  silk: string
  silkShade: string
  sleeve: string
  lace: string
  beads: Pt[]
}

const marks = once<Marks>(() => {
  // The candlelit room in front of her; the dark gathers behind her head.
  const ground = portraitGround(5701, (x, y) =>
    clamp(0.06 + ((x - 40) / 280) * 0.9 - Math.max(0, (y - 250) / 300)),
  )
  const r = rng(5702)
  const [hx, hy] = F.pt([150, 120])
  // Light-brown hair: a dark mass cut through with many strands, lying back
  // from the brow and down to the short-cropped nape.
  const hair =
    strands(
      r,
      40,
      lerp2(F.pt([120, 76]), F.pt([118, 172])),
      lerp2(F.pt([200, 60]), F.pt([150, 116])),
      [0.4, 0.8],
      2,
    ) +
    strands(
      r,
      18,
      lerp2(F.pt([104, 120]), F.pt([112, 170])),
      lerp2(F.pt([118, 112]), F.pt([126, 176])),
      [0.35, 0.65],
      1,
    )
  let back = ''
  for (let rad = 52; rad < 84; rad += 3.4)
    back += arcDashes(r, hx + 20, hy + 20, rad, deg(96), deg(144), [8, 20], [2, 5])
  // The twill: fine diagonal ribs over the whole gown, and a second set in
  // the shadow at her back.
  const silk = twill({ x0: 30, x1: 260, y0: 214, y1: 330 }, 4.4, 0.62)
  let silkShade = ''
  for (let i = 0; i < 9; i++) silkShade += gouge(52 + i * 4, 256 + i * 6, 40 + i * 4, 330, 0.9, 0.5)
  silkShade += hatch(r, { x0: 40, x1: 100, y0: 244, y1: 330 }, 3.6, 0.3)
  // The gathers of the puffed sleeve.
  const sleeve =
    'M100 232Q96 256 104 282M114 226Q112 254 118 284M128 226Q130 254 132 282M140 234Q144 254 140 276'
  // The lace: scallops along the top of the tucker, and a row of holes under them.
  let lace = scallops(TUCKER_SPINE, 2.6, 5)
  for (let i = 0; i < TUCKER_SPINE.length - 1; i++) {
    const [ax, ay] = TUCKER_SPINE[i]
    const [bx, by] = TUCKER_SPINE[i + 1]
    const L = Math.hypot(bx - ax, by - ay)
    for (let t = 2.5; t < L; t += 5) {
      const x = ax + ((bx - ax) * t) / L
      const y = ay + ((by - ay) * t) / L + 4.6
      lace += `M${n(x - 0.9)} ${n(y)}a0.9 0.9 0 1 0 1.8 0a0.9 0.9 0 1 0 -1.8 0`
    }
  }
  // The coral necklace: small beads close round her neck.
  const beads: Pt[] = []
  for (let i = 0; i < 11; i++) {
    const t = i / 10
    const [x, y] = lerp2([146, 200], [199, 202])(t)
    beads.push([x + between(r, -0.2, 0.2), y + Math.sin(t * Math.PI) * 3.2])
  }
  return { ground, hair, back, silk, silkShade, sleeve, lace, beads }
})

function NancyPortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-nl-head`
  const gownClip = `${uid}-nl-gown`
  const p = F.p
  const [ex, ey] = F.pt([216, 130])
  const [ax, ay] = F.pt([160, 118])
  const [bx, by] = F.pt([199, 151])
  const lobe = F.pt([157, 160])
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
        <clipPath id={gownClip}>
          <path d={GOWN} />
        </clipPath>
      </defs>
      <g transform={FACE_LEFT}>
        <path d={m.ground} fill={PAPER} />
        <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
          <path d={HEAD} />
          <path d={HAIR} />
          <path d={GOWN} />
          <path d={SKIN} />
        </g>
        {/* Her silvery twilled silk: pale, ribbed on the diagonal. */}
        <path d={GOWN} fill={PAPER} />
        <g clipPath={`url(#${gownClip})`} fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.silk} strokeWidth={LINE.hairline} />
        </g>
        <g clipPath={`url(#${gownClip})`}>
          <path d={m.silkShade} fill={INK} />
        </g>
        <path d={SKIN} fill={PAPER} />
        <path d={HEAD} fill={PAPER} />
        <path d={SLEEVE} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path d={m.sleeve} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
        <path d={m.lace} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
        <path
          d="M128 224Q172 238 228 248"
          fill="none"
          stroke={INK}
          strokeWidth={LINE.fine}
          strokeLinecap="round"
        />
        <path d={HAIR} fill={INK} />
        <g clipPath={`url(#${headClip})`}>
          <path d={m.back} fill="none" stroke={PAPER} strokeWidth={0.9} />
        </g>
        <path d={m.hair} fill={PAPER} />
        {/* "a number of flat rings": coils of hair laid flat along the brow */}
        <g fill={PAPER} stroke={INK} strokeWidth={1.9}>
          {RINGS.map(([x, y]) => {
            const [cx, cy] = F.pt([x, y])
            return <circle key={`${x}-${y}`} cx={n(cx)} cy={n(cy)} r={3.5} />
          })}
        </g>
        <g fill="none" stroke={INK} strokeWidth={LINE.hairline}>
          {RINGS.map(([x, y]) => {
            const [cx, cy] = F.pt([x, y])
            return <path key={`${x}-${y}`} d={`M${n(cx - 1.4)} ${n(cy)}a1.4 1.4 0 1 1 1.4 1.4`} />
          })}
        </g>
        <ProfileEar at={[ax, ay]} h={38} />
        {/* the coral ear-drop, cut in paper */}
        <path
          d={`M${n(lobe[0])} ${n(lobe[1] - 2)}L${n(lobe[0])} ${n(lobe[1] + 3)}M${n(lobe[0])} ${n(lobe[1] + 3)}c-3.4 3 -3.4 7.6 0 9.2c3.4 -1.6 3.4 -6.2 0 -9.2Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.fine}
          strokeLinejoin="round"
        />
        {/* "the bloom on her cheeks", high on the cheekbone */}
        <Bloom at={[bx, by]} w={13} h={8} tilt={14} />
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          {/* the jaw, a fine line back to below the ear */}
          <path
            d={`M${p(223, 203)}C${p(206, 210)} ${p(188, 205)} ${p(176, 192)}`}
            strokeWidth={1.2}
          />
          {/* a fine, level brow */}
          <path d={`M${p(204, 118.5)}Q${p(214, 114.5)} ${p(225, 118.5)}`} strokeWidth={2.2} />
          {/* nostril; small lips, closed and firm */}
          <path
            d={`M${p(235, 162)}C${p(232, 160)} ${p(231.5, 157)} ${p(234, 155)}`}
            strokeWidth={1.2}
          />
          <path d={`M${p(229, 176.5)}L${p(222.5, 177.2)}`} strokeWidth={1.5} />
          <path
            d={`M${p(229.5, 180.5)}Q${p(227, 183)} ${p(224.5, 182)}`}
            strokeWidth={LINE.hairline}
          />
          <path d={`M${p(226, 188)}Q${p(224, 190.5)} ${p(225, 193)}`} strokeWidth={LINE.hairline} />
        </g>
        <ProfileEye at={[ex, ey]} s={0.84} look={0.3} />
        {/* her coral necklace, close round her little neck */}
        <g fill={PAPER} stroke={INK} strokeWidth={LINE.hairline}>
          {m.beads.map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={n(x)} cy={n(y)} r={2.2} />
          ))}
        </g>
      </g>
      <InnerRule />
    </>
  )
}

export const nancyLammeterArt: LinocutArt = { width: PW, height: PH, Draw: NancyPortrait }

export const nancyLammeter: Portrait = {
  name: 'Nancy Lammeter',
  art: nancyLammeterArt,
  alt: "A linocut portrait of Nancy Lammeter in profile, facing left, drawn from George Eliot's description in Chapter 11 as she dresses for the New Year's Eve dance: a small, neat young woman with fine features and her lips closed and firm. Her hair is cut short at the back of her head, close above the nape like a boy's, and a row of small flat rings of hair, cut as little coils, is laid along her brow and temple. A small patch of red high on her cheek is her bloom. Her gown is pale silk crossed with fine diagonal ribs, cut low and high-waisted, with a short puffed sleeve and a band of lace along the neckline; a necklace of small round beads sits close round her neck and a drop hangs from her ear. Five numbered red markers point to her cropped hair, the rings at her brow, her silk gown, the lace at its neckline and her necklace.",
  describedBy: [
    {
      phrase: 'her light-brown hair was cropped behind like a boy’s',
      at: flip([60, 154]),
      to: flip([114, 158]),
    },
    {
      phrase: 'a number of flat rings, that lay quite away from her face',
      at: flip([262, 46]),
      to: flip([209, 62]),
    },
    { phrase: 'her silvery twilled silk', at: flip([212, 292]) },
    { phrase: 'her lace tucker', at: flip([288, 218]), to: flip([226, 243]) },
    {
      phrase: 'her coral necklace, and coral ear-drops',
      at: flip([150, 236]),
      to: flip([170, 203]),
    },
  ],
  where: 'Chapter 11',
  passage:
    'It is true that her light-brown hair was cropped behind like a boy’s, and was dressed in front in a number of flat rings, that lay quite away from her face; but there was no sort of coiffure that could make Miss Nancy’s cheek and neck look otherwise than pretty; and when at last she stood complete in her silvery twilled silk, her lace tucker, her coral necklace, and coral ear-drops, the Miss Gunns could see nothing to criticise except her hands, which bore the traces of butter-making, cheese-crushing, and even still coarser work.',
  note: 'Everything about Nancy is neat and exact, and Eliot ends the list with her working hands: the farmer’s daughter is not ashamed of them. The same exactness will shape her principles, and her marriage.',
  artNote:
    'The print cannot show light brown, silver or coral. Her hair is cut dark with fine lines, her silk is pale with the ribs of the twill, and the coral is cut in paper, because a red line round a neck reads at a glance as a wound.',
}
