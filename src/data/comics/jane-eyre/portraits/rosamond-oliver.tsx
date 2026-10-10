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
  smooth,
  strands,
  type Knot,
} from './common'

/**
 * Rosamond Oliver, as Jane sees her and then draws her, and nothing else.
 *
 * Chapter 31, at the wicket of Jane's school, the first time:
 *
 *   "the young girl had regular and delicate lineaments; eyes shaped and
 *   coloured as we see them in lovely pictures, large, and dark, and full;
 *   the long and shadowy eyelash which encircles a fine eye with so soft a
 *   fascination; the pencilled brow which gives such clearness; the white
 *   smooth forehead, which adds such repose to the livelier beauties of tint
 *   and ray; the cheek oval, fresh, and smooth; the lips, fresh too, ruddy,
 *   healthy, sweetly formed; the even and gleaming teeth without flaw; the
 *   small dimpled chin; the ornament of rich, plenteous tresses";
 *
 * and Chapter 32, when Jane sketches her for her father:
 *
 *   "She had then on a dark-blue silk dress; her arms and her neck were bare;
 *   her only ornament was her chestnut tresses, which waved over her
 *   shoulders with all the wild grace of natural curls."
 *
 * So: Rosamond half length, in profile, facing right, as she sits for Jane's
 * sketch. She is cut from the one woman's head (WOMAN_HEAD), the chin a
 * little smaller ("the small dimpled chin", its dimple cut as a short curve),
 * the lips a little fuller ("sweetly formed"), the forehead clear paper ("the
 * white smooth forehead"), the brow a fine arch ("the pencilled brow"), and
 * the eye large and open with long lashes. Her "pure hues of rose and lily"
 * are the one touch of the spot colour, a flush on the cheekbone well clear
 * of the mouth (Bloom); her "ruddy" lips are cut in ink, as red on a mouth
 * reads at a glance as an injury. Her chestnut hair is ink cut with paper
 * strands and curls, waving over her shoulders and down her back. Her dress
 * is dark silk with a pale sheen, its neck across the collarbone, her neck,
 * shoulders and arms bare paper, modelled with a little hatching under the
 * jaw and a line for the shoulder and the collarbone. The blue and the
 * chestnut are left to the words. Nothing here comes from a film or stage
 * production.
 *
 * FIXED 10 October 2026: this docblock and the alt text promised "a long
 * curl by her cheek", which was never cut; both now describe the print.
 *
 * Seeds: 8801 for the ground, 8802 for the cuts in the figure.
 */

/** The one woman's head: the chin a little smaller, the lips a little fuller. */
const HEAD_K: Knot[] = nudge(WOMAN_HEAD, [
  [21, 0.6, 0.4],
  [22, -0.4, 0.8],
  [23, -1.2, 0.4],
  [24, -1.6, -0.6],
  [25, -0.6, -1],
])

const F = placer([16, 4], 0.86)
const HEAD = smooth(F.knots(HEAD_K))

/**
 * "rich, plenteous tresses": over the crown from the brow, above and behind
 * the ear, and falling in waves down the back of the neck, over the shoulder
 * and down her back. In the head's frame; drawn over the head.
 */
const HAIR_K: Knot[] = [
  [214, 57, 1],
  [204, 70],
  [194, 86],
  [182, 100],
  [172, 108],
  [160, 108],
  [150, 116],
  [146, 140],
  [144, 166],
  [138, 196],
  [134, 226],
  [120, 262],
  [104, 300],
  [92, 336],
  [70, 372],
  [40, 372],
  [30, 330],
  [40, 280],
  [56, 230],
  [70, 180],
  [86, 132],
  [98, 96],
  [118, 64],
  [150, 46],
  [186, 44],
]
const HAIR = smooth(F.knots(HAIR_K))
/** The centres of the curls cut in the fall of the hair, in the head's frame. */
const CURLS: Pt[] = [
  [100, 150],
  [118, 182],
  [88, 196],
  [116, 214],
  [92, 236],
  [114, 252],
  [76, 262],
  [98, 284],
  [70, 300],
  [86, 326],
  [58, 340],
  [126, 128],
]

/**
 * Her bare neck and shoulders, above the neck of the dress.
 *
 * FIXED 10 October 2026: the bare skin first ran from the chin to a neckline
 * low on the breast, the front of the chest sloping far out to the right,
 * all one flat sheet of paper. At phone width it read as a single great pale
 * column, unlike any other sitter on the site, and drew the eye to her body
 * rather than her face. The chest now falls nearly straight from the throat,
 * the dress comes up to the collarbone, and the neck and shoulder are
 * modelled with the same few cuts as every other sitter's.
 */
const SKIN = smooth([
  [116, 212, 1],
  [96, 232],
  [70, 248],
  [50, 266],
  [42, 290],
  [40, 330, 1],
  [238, 330, 1],
  [232, 298],
  [222, 272],
  [210, 248],
  [200, 228],
  [192, 212],
  [188, 198, 1],
])
/** The dark silk dress, its neck across the collarbone and over the back. */
const DRESS = smooth([
  [34, 300, 1],
  [62, 276],
  [102, 264],
  [148, 260],
  [186, 260],
  [212, 252, 1],
  [224, 276],
  [232, 302],
  [238, 330, 1],
  [26, 330, 1],
])
/** The top of the near shoulder, from the base of the neck to the sleeve, and the collarbone. */
const SHOULDER = 'M180 236Q160 240 144 252'
const COLLARBONE = 'M200 240Q188 244 172 246'
/** The short puffed sleeve at the top of the near arm: dark silk. */
const SLEEVE = smooth([
  [120, 260, 1],
  [138, 251],
  [157, 255],
  [167, 267],
  [165, 283, 1],
  [144, 289],
  [122, 283],
])
/** The near arm, bare, hanging from the shoulder below the sleeve. */
const ARM = smooth([
  [128, 282, 1],
  [161, 282],
  [166, 306],
  [167, 330, 1],
  [131, 330, 1],
  [126, 306],
])

type Marks = {
  ground: string
  hair: string
  curls: string
  silk: string
  arm: string
  neck: string
}

const marks = once<Marks>(() => {
  // Light from in front of her, by which Jane draws.
  const ground = portraitGround(8801, (x, y) =>
    clamp(0.18 + ((x - 40) / 280) * 0.8 - Math.max(0, (y - 280) / 300)),
  )
  const r = rng(8802)
  // "waved over her shoulders": long strands from the brow back over the
  // crown, and wavy strands down the fall of the hair.
  const hair =
    strands(
      r,
      22,
      lerp2(F.pt([210, 62]), F.pt([176, 104])),
      lerp2(F.pt([128, 60]), F.pt([100, 104])),
      [0.35, 0.6],
      1.6,
    ) +
    strands(
      r,
      12,
      lerp2(F.pt([142, 130]), F.pt([120, 262])),
      lerp2(F.pt([88, 140]), F.pt([50, 290])),
      [0.35, 0.55],
      3,
    )
  // "all the wild grace of natural curls": rings of paper turned in on themselves.
  let curls = ''
  for (const c of CURLS) {
    const [x, y] = F.pt(c)
    const rr = between(r, 5, 6.6)
    const a0 = between(r, 0, Math.PI * 2)
    curls +=
      `M${n(x + Math.cos(a0) * rr)} ${n(y + Math.sin(a0) * rr)}A${n(rr)} ${n(rr)} 0 1 1 ${n(x + Math.cos(a0 + 4.4) * rr)} ${n(y + Math.sin(a0 + 4.4) * rr)}` +
      `M${n(x + Math.cos(a0) * rr * 0.45)} ${n(y + Math.sin(a0) * rr * 0.45)}A${n(rr * 0.45)} ${n(rr * 0.45)} 0 1 1 ${n(x + Math.cos(a0 + 4) * rr * 0.45)} ${n(y + Math.sin(a0 + 4) * rr * 0.45)}`
  }
  // The sheen of silk: long pale lights across the bodice and down the skirt.
  const silk =
    gouge(76, 292, 62, 318, 1.4, 1.2) +
    gouge(186, 290, 196, 318, 1.2, -0.8) +
    gouge(214, 282, 226, 318, 1.4, -1.2) +
    gouge(146, 258, 158, 274, 0.9, -0.6) +
    gouge(130, 266, 140, 280, 0.6, 0.6)
  // The round of the bare arm: a fine shadow down its back.
  let arm = ''
  for (let y = 286; y < 330; y += 8)
    arm += arcDashes(r, 168, y, 40, deg(172), deg(188), [6, 12], [2, 4])
  // The shadow under the jaw and down the side of the neck, as every other
  // sitter's neck is cut: fine level hatching, clipped to the head and neck.
  const neck = hatch(r, { x0: 150, x1: 206, y0: 176, y1: 204 }, 4.2, 0.1)
  return { ground, hair, curls, silk, arm, neck }
})

function RosamondPortrait({ uid }: ArtProps) {
  const m = marks()
  const hairClip = `${uid}-ro-hair`
  const headClip = `${uid}-ro-head`
  const P = (d: string) => placePath(d, F)
  const [ex, ey] = F.pt([217, 130])
  const [ax, ay] = F.pt([160, 118])
  const [bx, by] = F.pt([200, 154])
  return (
    <>
      <defs>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
      </defs>
      <path d={m.ground} fill={PAPER} />
      {/* The ink halo that lifts the figure off the ground. */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={HEAD} />
        <path d={HAIR} />
        <path d={SKIN} />
      </g>
      {/* "her arms and her neck were bare" */}
      <path d={SKIN} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={HEAD} fill={PAPER} />
      {/* the shadow under the jaw, the top of the shoulder and the collarbone */}
      <g clipPath={`url(#${headClip})`}>
        <path
          d={m.neck}
          fill="none"
          stroke={INK}
          strokeWidth={LINE.hairline}
          strokeLinecap="round"
        />
      </g>
      <path
        d={SHOULDER + COLLARBONE}
        fill="none"
        stroke={INK}
        strokeWidth={LINE.fine}
        strokeLinecap="round"
      />
      {/* "a dark-blue silk dress" */}
      <path d={DRESS} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.silk} fill={PAPER} />
      {/* "rich, plenteous tresses", waving down her back */}
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.hair} fill={PAPER} />
        <path d={m.curls} fill="none" stroke={PAPER} strokeWidth={1.1} strokeLinecap="round" />
      </g>
      <ProfileEar at={[ax, ay]} h={32} />
      {/* the near arm, bare below its short sleeve */}
      <path d={ARM} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={m.arm} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d={P(WOMAN_LINES.jaw)} strokeWidth={1.3} />
        {/* "the pencilled brow which gives such clearness": a fine, clean arch */}
        <path d={P('M204.5 119Q213 112.6 224.5 117.6')} strokeWidth={1.7} />
        <path d={P(WOMAN_LINES.nostril)} strokeWidth={1.1} />
        {/* "the lips, fresh too, ruddy, healthy, sweetly formed": closed and full */}
        <path d={P('M229.4 176.4Q225.6 177.6 221.6 176.6')} strokeWidth={1.5} />
        <path d={P('M230 181Q227 184.4 223.6 182.6')} strokeWidth={LINE.fine} />
        {/* "the small dimpled chin": a short curve on the chin */}
        <path d={P('M223.6 188.6Q222 190.6 223.2 192.6')} strokeWidth={LINE.fine} />
        {/* "the long and shadowy eyelash" */}
        <path
          d={P('M221.4 124L224.6 120.4M217.6 123L219.2 118.8M224.8 126.2L229 123.8')}
          strokeWidth={LINE.hairline}
        />
      </g>
      {/* "eyes ... large, and dark, and full" */}
      <ProfileEye at={[ex, ey]} s={0.92} wide look={0.3} />
      {/* "pure hues of rose and lily": a flush on the cheekbone, well clear of the mouth */}
      <Bloom at={[bx, by]} w={15} h={8.4} tilt={10} />
      <InnerRule />
    </>
  )
}

export const rosamondOliverArt: LinocutArt = { width: PW, height: PH, Draw: RosamondPortrait }

export const rosamondOliver: Portrait = {
  name: 'Rosamond Oliver',
  art: rosamondOliverArt,
  alt: 'A linocut portrait of Rosamond Oliver, half length, in profile, facing right, as Jane sketches her in Chapter 32 and describes her in Chapter 31: a young woman with regular, delicate features, a large dark eye with long lashes under a fine arched brow, a smooth clear forehead, full closed lips and a small chin with a dimple. A flush of the spot colour sits on her cheekbone. Her thick hair falls in waves and curls over her shoulders and down her back. Her dress is dark silk with a pale sheen, its neck across her collarbone, and her neck, shoulders and arm are bare. Five numbered red markers point to her eye, her forehead, her chin, her dress and her hair.',
  describedBy: [
    {
      phrase: 'eyes shaped and coloured as we see them in lovely pictures',
      at: [306, 116],
      to: [215, 116],
    },
    { phrase: 'the white smooth forehead', at: [198, 86] },
    { phrase: 'the small dimpled chin', at: [306, 171], to: [217, 171] },
    { phrase: 'a dark-blue silk dress', at: [226, 296] },
    {
      phrase: 'her chestnut tresses, which waved over her shoulders',
      at: [26, 200],
      to: [74, 200],
    },
  ],
  where: 'Chapters 31 and 32',
  note: 'Rosamond is the beauty St John loves and gives up, because she would never make a missionary’s wife. Jane, who has called herself plain, describes her feature by feature, as a painter would, and then paints her.',
  artNote:
    'The words come from two chapters, so the card prints the phrases alone. Her “pure hues of rose and lily” are the one touch of colour, on her cheek; her ruddy lips, her blue silk and her chestnut hair are left to the words.',
}
