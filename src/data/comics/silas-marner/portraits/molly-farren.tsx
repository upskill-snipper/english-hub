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
  Hand,
  InnerRule,
  PH,
  PW,
  ProfileEye,
  WOMAN_HEAD,
  curlMarks,
  handPaths,
  hatch,
  nudge,
  once,
  placer,
  portraitGround,
  smooth,
  type Knot,
} from './common'

/**
 * Molly Farren, Godfrey's secret wife, as George Eliot describes her, and
 * nothing else. Chapter 12, New Year's Eve, as she resolves to go to the Red
 * House and shame him:
 *
 *   "But she would mar his pleasure: she would go in her dingy rags, with her
 *   faded face, once as handsome as the best, with her little child that had
 *   its father's hair and eyes, and disclose herself to the Squire as his
 *   eldest son's wife."
 *
 * NEVER DRAWN: her dying in the snow, later in the same chapter, and the
 * opium (see ../index.ts). This is Molly as the sentence gives her, setting
 * out, alive, with her child asleep and safe in her arms. There is no snow,
 * no phial and no night journey in the plate, and nothing that suggests what
 * is coming: the ground is plain.
 *
 * So: a young woman in profile, facing right, her head bowed a little over
 * the child; cut from the one woman's head (WOMAN_HEAD), the cheek thinned
 * and hollowed and shadowed under the eye, the features still regular
 * ("faded face, once as handsome as the best"); a few dark locks loose at her
 * brow. A ragged dark shawl over her head and shoulders, its edges frayed
 * and a patch set into it ("dingy rags"; how they are ragged is the
 * period's, not the text's): a dark checked shawl, worn, frayed into a
 * fringe round her face and patched at the back; the check is there so that
 * the shawl reads as cloth and not as long dark hair. In her arms, held
 * against her breast, her little child asleep, its cheek to her, wrapped in
 * a pale shawl, with fair curls cut in paper as the panels cut them
 * (EPPIE_HAIR in ../panels/people.tsx): "its father's hair", Godfrey's fair
 * hair. Its eyes are shut, so "and eyes" is left to the words. Her near arm
 * is round it, the forearm across it and the hand laid flat on its back, the
 * fingers cut apart and pointing along it: the whole arm is drawn, and the
 * hand lies level, because a hand shown alone and upright (the first cut)
 * read as a hand held up. There is no red in this plate.
 *
 * Nothing here comes from a film or stage production. Seeds: 6201 for the
 * ground, 6202 for the cuts in the figure.
 */

/** The one woman's head, the cheek thinned below the cheekbone. */
const HEAD_K: Knot[] = nudge(WOMAN_HEAD, [
  [21, -1, 0],
  [22, -1.5, 0],
  [24, -2, -2],
  [25, -3, -4],
])

/** Bowed eight degrees over the child, about the base of the neck. */
const F = placer([42, 4], 0.76, 8, [164, 252])
const HEAD = smooth(F.knots(HEAD_K))

/** The shawl over her head, its front edge framing the face: in the head's frame. */
const HOOD_K: Knot[] = [
  [212, 66, 1],
  [200, 46],
  [170, 30],
  [130, 34],
  [96, 58],
  [76, 100],
  [70, 150],
  [76, 200],
  [90, 240, 1],
  [168, 262, 1],
  [190, 236],
  [192, 206],
  [184, 172],
  [184, 140],
  [192, 110],
  [204, 84],
]
const HOOD = smooth(F.knots(HOOD_K))
/** Loose dark locks at her brow, under the edge of the shawl. */
const LOCKS_K: Knot[] = [
  [214, 70, 1],
  [222, 84],
  [218, 92],
  [210, 96],
  [204, 108],
  [198, 122, 1],
  [196, 104],
  [204, 82],
]
const LOCKS = smooth(F.knots(LOCKS_K))

/** The shawl falling from her shoulders: her back at the left, her breast behind the child. */
const SHAWL = smooth([
  [96, 178, 1],
  [70, 196],
  [44, 230],
  [26, 280],
  [18, 330, 1],
  [214, 330, 1],
  [204, 290],
  [196, 250],
  [196, 214],
  [190, 196, 1],
])

/** The child's head in profile, facing left, its cheek against her breast. */
const CHILD_HEAD = smooth([
  [214, 236, 1],
  [208, 228],
  [206, 220, 1],
  [203, 216],
  [204, 210],
  [200, 204, 1],
  [204, 200],
  [206, 192],
  [212, 180],
  [226, 170],
  [246, 168],
  [262, 176],
  [272, 192],
  [272, 214],
  [264, 230],
  [248, 240],
  [228, 242],
])
/** Its fair curls, a cap of paper over the back of its head. */
const CHILD_HAIR_K: Knot[] = [
  [212, 184],
  [222, 172],
  [240, 166],
  [258, 170],
  [272, 184],
  [277, 204],
  [272, 224],
  [262, 236, 1],
  [252, 222],
  [244, 206],
  [236, 196],
  [224, 192],
]
/**
 * The cap of curls with its edge scalloped, one bump to a curl, as the
 * panels cut it (EPPIE_HAIR in ../panels/people.tsx): a smooth edge read as a
 * bonnet there.
 */
const CHILD_HAIR = (() => {
  const pts = CHILD_HAIR_K.map(([x, y]): Pt => [x, y])
  let d = `M${n(pts[0][0])} ${n(pts[0][1])}`
  for (let i = 1; i <= pts.length; i++) {
    const [ax, ay] = pts[i - 1]
    const [bx, by] = pts[i % pts.length]
    const L = Math.hypot(bx - ax, by - ay) || 1
    const k = Math.max(1, Math.round(L / 7))
    for (let j = 0; j < k; j++) {
      const x0 = ax + ((bx - ax) * j) / k
      const y0 = ay + ((by - ay) * j) / k
      const x1 = ax + ((bx - ax) * (j + 1)) / k
      const y1 = ay + ((by - ay) * (j + 1)) / k
      const cx = (x0 + x1) / 2 + ((y1 - y0) / L) * k * 3.4
      const cy = (y0 + y1) / 2 - ((x1 - x0) / L) * k * 3.4
      d += `Q${n(cx)} ${n(cy)} ${n(x1)} ${n(y1)}`
    }
  }
  return d + 'Z'
})()
/** The pale shawl it is wrapped in. */
const CHILD_WRAP = smooth([
  [206, 232, 1],
  [232, 242],
  [262, 236],
  [286, 244],
  [300, 262],
  [304, 286],
  [300, 306],
  [270, 312],
  [228, 306],
  [198, 290],
  [196, 262],
])

/**
 * Her near arm, round the child: the forearm comes up across the front of
 * it, and the hand lies flat across its back, the fingers pointing along it,
 * cut apart. Drawn whole and level, so it reads as holding: a hand shown
 * alone and upright reads as a hand held up.
 */
const FOREARM = smooth([
  [176, 300, 1],
  [204, 290],
  [236, 280],
  [258, 270, 1],
  [266, 290, 1],
  [240, 300],
  [210, 310],
  [182, 318, 1],
])
const HAND = handPaths({
  wrist: [
    [256, 266],
    [264, 288],
  ],
  knuckles: [
    [278, 264],
    [281, 270.5],
    [283, 277],
    [283.5, 283.5],
  ],
  tips: [
    [297, 262],
    [300, 269.5],
    [301, 277],
    [298.5, 284.5],
  ],
  width: [6.2, 6.4, 6.2, 5.6],
  bow: [1.2, 1.2, 1, 1],
  thumb: { root: [262, 266], tip: [276, 256], width: 6, bow: -1 },
})

type Marks = {
  ground: string
  cheek: string
  check: string
  hood: string
  fray: string
  patch: string
  shawl: string
  sleeve: string
  wrap: string
  curls: string
}

const marks = once<Marks>(() => {
  // A plain ground, dark, a little light in front of her.
  const ground = portraitGround(6201, (x, y) =>
    clamp(0.02 + ((x - 60) / 280) * 0.6 - Math.max(0, (y - 200) / 300)),
  )
  const r = rng(6202)
  // "her faded face": the hollow under the cheekbone, and the shadow under the eye.
  const [hx, hy] = F.pt([204, 148])
  let cheek = ''
  for (let rad = 10; rad < 18; rad += 3.2)
    cheek += arcDashes(r, hx, hy, rad, deg(70), deg(130), [6, 12], [2, 4])
  cheek += `M${F.p(205, 139)}Q${F.p(214, 145)} ${F.p(225, 139)}`
  // The shawl: a worn check, cut as crossing lines, so it reads as cloth.
  let check = ''
  for (let k = -300; k < 340; k += 13) {
    check += `M${k} 0L${k + 330} 330`
    check += `M${k + 330} 0L${k} 330`
  }
  // Folds falling from the crown of the hood.
  let hood = ''
  for (let i = 0; i < 6; i++) {
    const [ax, ay] = F.pt([150 - i * 12, 44 + i * 5])
    const [bx, by] = F.pt([146 - i * 11 + between(r, -3, 3), 224 + between(r, -10, 10)])
    hood += gouge(ax, ay, bx, by, 1.6, between(r, -3, 3))
  }
  // "dingy rags": a frayed fringe along the front edge of the shawl, round her face.
  let fray = ''
  const edge: Pt[] = HOOD_K.slice(9, 16).map(([x, y]) => F.pt([x, y]))
  for (let i = 0; i < edge.length - 1; i++) {
    const [ax, ay] = edge[i]
    const [bx, by] = edge[i + 1]
    const L = Math.hypot(bx - ax, by - ay)
    for (let t = 1.5; t < L; t += 3.2) {
      const x = ax + ((bx - ax) * t) / L
      const y = ay + ((by - ay) * t) / L
      const len = between(r, 3.5, 7)
      fray += `M${n(x)} ${n(y)}l${n(len * 0.25)} ${n(len)}`
    }
  }
  // A patch set into the shawl at her back, and its stitches.
  const patch = 'M50 256L84 250L90 282L56 288Z'
  const shawl =
    gouge(40, 250, 26, 318, 1.8, 2) +
    gouge(78, 216, 70, 318, 1.6, 1.5) +
    gouge(122, 200, 126, 318, 1.4, 1) +
    gouge(164, 200, 172, 318, 1.2, -1)
  // The sleeve over her forearm: a fold or two.
  const sleeve = gouge(196, 304, 240, 290, 1, 0.5) + gouge(214, 306, 252, 294, 0.8, 0.5)
  // The grimy shawl the child is wrapped in: close hatching, and its folds.
  const wrap =
    hatch(r, { x0: 196, x1: 306, y0: 240, y1: 314 }, 4.4, 0.18) +
    'M226 252Q240 280 232 304M262 246Q276 270 270 300'
  const curls = curlMarks(r, CHILD_HAIR_K, 46, [2.2, 3.4])
  return { ground, cheek, check, hood, fray, patch, shawl, sleeve, wrap, curls }
})

function MollyPortrait({ uid }: ArtProps) {
  const m = marks()
  const wrapClip = `${uid}-mf-wrap`
  const shawlClip = `${uid}-mf-shawl`
  const hoodClip = `${uid}-mf-hood`
  const childHairClip = `${uid}-mf-chair`
  const p = F.p
  const [ex, ey] = F.pt([216, 131])
  return (
    <>
      <defs>
        <clipPath id={wrapClip}>
          <path d={CHILD_WRAP} />
        </clipPath>
        <clipPath id={childHairClip}>
          <path d={CHILD_HAIR} />
        </clipPath>
        <clipPath id={shawlClip}>
          <path d={SHAWL} />
        </clipPath>
        <clipPath id={hoodClip}>
          <path d={HOOD} />
        </clipPath>
      </defs>
      <path d={m.ground} fill={PAPER} />
      {/* The ink halo that lifts the figure off the ground. */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={HOOD} />
        <path d={HEAD} />
        <path d={SHAWL} />
        <path d={CHILD_WRAP} />
        <path d={CHILD_HEAD} />
      </g>
      {/* Her shawl, ragged, over her shoulders. */}
      <path d={SHAWL} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <g clipPath={`url(#${shawlClip})`}>
        <path d={m.check} fill="none" stroke={PAPER} strokeWidth={0.7} />
      </g>
      <path d={m.shawl} fill={INK} />
      {/* a patch sewn over a hole, and its stitches */}
      <path d={m.patch} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <path
        d={m.patch}
        fill="none"
        stroke={PAPER}
        strokeWidth={LINE.hairline}
        strokeDasharray="2 2.4"
        transform="translate(3.6 3.4) scale(0.92)"
      />
      {/* Her face, under the shawl. */}
      <path d={HEAD} fill={PAPER} />
      <path d={LOCKS} fill={INK} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d={m.cheek} strokeWidth={LINE.hairline} />
        {/* a fine brow, a little drawn */}
        <path d={`M${p(204, 119)}Q${p(214, 115.5)} ${p(225, 119.5)}`} strokeWidth={2.2} />
        {/* nostril, a closed mouth, the chin */}
        <path
          d={`M${p(235, 162)}C${p(232, 160)} ${p(231.5, 157)} ${p(234, 155)}`}
          strokeWidth={1.2}
        />
        <path d={`M${p(229, 176.5)}L${p(221.5, 177.8)}`} strokeWidth={1.5} />
        <path
          d={`M${p(225.5, 186)}Q${p(223.5, 189)} ${p(224.5, 192)}`}
          strokeWidth={LINE.hairline}
        />
      </g>
      {/* her eyes lowered to the child */}
      <ProfileEye at={[ex, ey]} s={0.72} heavy look={0.2} />
      <path d={HOOD} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${hoodClip})`}>
        <path d={m.check} fill="none" stroke={PAPER} strokeWidth={0.7} />
        <path d={m.hood} fill={INK} />
      </g>
      <path d={m.fray} fill="none" stroke={INK} strokeWidth={1.1} strokeLinecap="round" />
      {/* The child, asleep against her, wrapped in a pale shawl. */}
      <path d={CHILD_WRAP} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <g clipPath={`url(#${wrapClip})`}>
        <path d={m.wrap} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      </g>
      <path
        d={CHILD_HEAD}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.fine}
        strokeLinejoin="round"
      />
      <path
        d={CHILD_HAIR}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.fine}
        strokeLinejoin="round"
      />
      <g clipPath={`url(#${childHairClip})`}>
        <path d={m.curls} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      </g>
      <g fill="none" stroke={INK} strokeLinecap="round">
        {/* asleep: the lid shut, the lashes down */}
        <path d="M212 200Q218 204 224 201" strokeWidth={1.5} />
        <path
          d="M215 202.5L214 206M218.5 203.5L218.5 207M222 202.5L223 206"
          strokeWidth={LINE.hairline}
        />
        {/* a round cheek, a tiny mouth */}
        <path d="M218 222Q226 226 232 220" strokeWidth={LINE.hairline} />
        <path d="M206.5 222.5L210.5 223" strokeWidth={1.1} />
      </g>
      {/* Her arm round the child: the forearm across it, the hand flat on its back. */}
      <path d={FOREARM} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.sleeve} fill={PAPER} />
      <Hand paths={HAND} />
      <InnerRule />
    </>
  )
}

export const mollyFarrenArt: LinocutArt = { width: PW, height: PH, Draw: MollyPortrait }

export const mollyFarren: Portrait = {
  name: 'Molly Farren',
  art: mollyFarrenArt,
  alt: "A linocut portrait of Molly Farren in profile, facing right, drawn from George Eliot's description in Chapter 12: a young woman with a thin, tired face, its features still fine, her cheek hollow and shadowed under the eye, her head bowed a little and her eyes lowered. A ragged dark shawl with a worn check pattern is drawn over her head and shoulders, frayed into a fringe round her face and patched at her back. In her arms, held against her breast, her little child sleeps with its eyes shut and its cheek against her, wrapped in a pale shawl, its head covered in fair curls. Her arm is round the child, her forearm across it and her hand laid flat on its back, the fingers apart. Three numbered red markers point to her ragged shawl, her face and the child's fair hair.",
  describedBy: [
    { phrase: 'her dingy rags', at: [30, 214], to: [56, 240] },
    { phrase: 'her faded face, once as handsome as the best', at: [292, 104], to: [214, 108] },
    {
      phrase: 'her little child that had its father’s hair and eyes',
      at: [306, 168],
      to: [268, 186],
    },
  ],
  where: 'Chapter 12',
  passage:
    'But she would mar his pleasure: she would go in her dingy rags, with her faded face, once as handsome as the best, with her little child that had its father’s hair and eyes, and disclose herself to the Squire as his eldest son’s wife.',
  note: 'Molly never speaks in the novel, and Eliot brings her in not by name but as “Godfrey’s wife”. She sets out to shame him at the New Year’s Eve party and never arrives; her child walks on alone, to Silas’s open door.',
  artNote:
    'This is Molly as she sets out, with her child asleep and safe. What happens to her on the road is left to the words. Eliot does not describe her clothes beyond “rags”, so the shawl is the plain dress of a poor woman of the time.',
}
