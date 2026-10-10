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
  flip,
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
 * Grace Poole, as Jane first sees her, and nothing else. Chapter 11, on the
 * third storey at Thornfield, when the laugh has been heard and Mrs Fairfax
 * calls "Grace!":
 *
 *   "The door nearest me opened, and a servant came out,... a woman of
 *   between thirty and forty; a set, square-made figure, red-haired, and
 *   with a hard, plain face: any apparition less romantic or less ghostly
 *   could scarcely be conceived."
 *
 * and in Chapter 16, sewing in Rochester's room, "staid and taciturn-looking,
 * as usual, in her brown stuff gown, her check apron, white handkerchief, and
 * cap", "her hard forehead ... her commonplace features". (The edition sets
 * the first line off with a dash; the card's passage begins after it.)
 *
 * So: a woman between thirty and forty in profile, facing left, broad and
 * square in the shoulder and the neck ("a set, square-made figure"), cut
 * from the one woman's head (WOMAN_HEAD) with only what the text gives her
 * changed: the jaw square and heavy, the brow straight and low over a level
 * eye, the mouth one straight line ("a hard, plain face", "hard-featured and
 * staid"). She wears a servant's white cap with a frilled edge over her hair,
 * a white handkerchief crossed at the neck and a plain dark gown, as the
 * figure kit dresses her (MOB_CAP in ../panels/people.tsx). Her hair shows
 * under the cap at the brow and the nape, cut in ink with paper strands:
 * HER RED HAIR IS LEFT TO THE WORDS, as the kit leaves it, because red on a
 * head reads at phone width as a wound. The card says so. There is no red
 * in this plate. Nothing here comes from a film or stage production.
 *
 * Drawn facing right and turned by FACE_LEFT, so the markers below are
 * placed with flip(). Seeds: 8301 for the ground, 8302 for the cuts.
 */

/** The one woman's head: the jaw square and heavy, the neck thick. */
const HEAD_K: Knot[] = nudge(WOMAN_HEAD, [
  [0, -6, 0],
  [1, -6, 0],
  [2, -4, 0],
  [22, 1, 1],
  [23, 2, 2],
  [24, 5, 5],
  [25, 4, 9],
  [26, 2, 8],
  [27, 4, 0],
])

const F = placer([20, -8], 0.92)
const HEAD = smooth(F.knots(HEAD_K))

/** The plain cap: a soft linen crown over the head to the nape, set back on the brow. */
const CAP_K: Knot[] = [
  [208, 66, 1],
  [198, 50],
  [176, 38],
  [144, 38],
  [114, 52],
  [94, 82],
  [88, 120],
  [94, 160],
  [110, 188, 1],
  [140, 182],
  [156, 164],
  [168, 140],
  [178, 116],
  [190, 92],
]
const CAP = smooth(F.knots(CAP_K))
const FRILL_K: Pt[] = [
  [210, 64],
  [200, 82],
  [190, 102],
  [180, 124],
  [170, 146],
  [158, 168],
  [142, 186],
]
/** Her hair between the frill and the brow, and at the nape below the cap. */
const HAIR_FRONT = smooth(
  F.knots([
    [219, 78, 1],
    [212, 84],
    [204, 96],
    [196, 112],
    [188, 128, 1],
    [184, 118],
    [192, 98],
    [202, 78],
    [210, 66, 1],
  ]),
)
const HAIR_NAPE = smooth(
  F.knots([
    [110, 186, 1],
    [140, 180],
    [132, 204],
    [124, 222, 1],
    [114, 214],
  ]),
)

/** Broad, square shoulders in a plain dark gown. */
const GOWN = smooth([
  [-8, 330, 1],
  [-6, 280],
  [12, 250],
  [52, 232],
  [100, 226],
  [146, 232],
  [192, 238],
  [232, 246],
  [262, 266],
  [280, 296],
  [286, 330, 1],
])
/** The white handkerchief round the neck, crossed at the front. */
const KERCHIEF = smooth([
  [96, 230, 1],
  [130, 222],
  [162, 230],
  [196, 236],
  [226, 234],
  [244, 246],
  [252, 272],
  [238, 300, 1],
  [214, 286],
  [184, 272],
  [140, 260],
  [98, 248, 1],
])

type Marks = {
  ground: string
  cap: string
  frill: string
  hair: string
  back: string
  neck: string
  gown: string
  kerchief: string
}

const marks = once<Marks>(() => {
  // Plain daylight in the corridor: "any apparition less ... ghostly".
  const ground = portraitGround(8301, (x, y) =>
    clamp(0.12 + ((x - 50) / 270) * 0.8 - Math.max(0, (y - 260) / 280)),
  )
  const r = rng(8302)
  // The gathers of the linen crown and its shadow.
  const [cx, cy] = F.pt([146, 116])
  let cap = ''
  for (let i = 0; i < 15; i++) {
    const a = deg(196 + i * 9.5 + between(r, -3, 3))
    const x0 = cx + Math.cos(a) * 24
    const y0 = cy + Math.sin(a) * 28
    const x1 = cx + Math.cos(a) * between(r, 52, 62)
    const y1 = cy + Math.sin(a) * between(r, 64, 74)
    cap += `M${n(x0)} ${n(y0)}Q${n((x0 + x1) / 2 + between(r, -3, 3))} ${n((y0 + y1) / 2)} ${n(x1)} ${n(y1)}`
  }
  for (let rad = 46; rad < 68; rad += 4)
    cap += arcDashes(r, cx, cy, rad, deg(110), deg(200), [10, 24], [3, 7])
  const frill = scallops(
    FRILL_K.map((q) => F.pt(q)),
    4,
    6.5,
  )
  const hair =
    strands(
      r,
      10,
      lerp2(F.pt([216, 76]), F.pt([190, 124])),
      lerp2(F.pt([206, 70]), F.pt([186, 118])),
      [0.3, 0.5],
      0.5,
    ) +
    strands(
      r,
      8,
      lerp2(F.pt([114, 188]), F.pt([136, 184])),
      lerp2(F.pt([118, 216]), F.pt([128, 212])),
      [0.3, 0.5],
      0.5,
    )
  let back = ''
  const [bx, by] = F.pt([178, 158])
  for (let rad = 44; rad < 76; rad += 3.4)
    back += arcDashes(r, bx, by, rad, deg(96), deg(146), [8, 20], [2, 5])
  const neck = hatch(r, { x0: 120, x1: 230, y0: 186, y1: 214 }, 4.4, 0.06)
  const gown =
    gouge(34, 262, 14, 318, 2, 2) +
    gouge(70, 250, 58, 318, 1.6, 2) +
    gouge(262, 290, 276, 318, 1.6, -2)
  const kerchief =
    'M110 238Q140 244 170 254M126 228Q160 238 196 248M150 232Q186 242 214 254M206 238Q224 258 230 288'
  return { ground, cap, frill, hair, back, neck, gown, kerchief }
})

function GracePoolePortrait({ uid }: ArtProps) {
  const m = marks()
  const capClip = `${uid}-gp-cap`
  const headClip = `${uid}-gp-head`
  const P = (d: string) => placePath(d, F)
  const [ex, ey] = F.pt([216, 132])
  return (
    <>
      <defs>
        <clipPath id={capClip}>
          <path d={CAP} />
        </clipPath>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
      </defs>
      <g transform={FACE_LEFT}>
        <path d={m.ground} fill={PAPER} />
        {/* The ink halo that lifts the figure off the ground. */}
        <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
          <path d={HEAD} />
          <path d={CAP} />
          <path d={GOWN} />
        </g>
        <path d={GOWN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.gown} fill={PAPER} />
        <path d={HEAD} fill={PAPER} />
        <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.back} strokeWidth={1.4} />
          <path d={m.neck} strokeWidth={LINE.hairline} />
        </g>
        {/* "red-haired": her hair at the brow and the nape, in ink */}
        <path d={HAIR_FRONT} fill={INK} />
        <path d={HAIR_NAPE} fill={INK} />
        <path d={m.hair} fill={PAPER} />
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          {/* "a hard, plain face": a square, heavy jaw */}
          <path
            d={P('M230 212C214 222 194 220 180 206C174 198 172 188 172 178')}
            strokeWidth={1.6}
          />
          {/* a straight brow, low over the eye */}
          <path d={P('M203 122Q214 120 227 121.5')} strokeWidth={2.8} />
          <path d={P('M235.5 163C232.5 161 232 157.5 234.5 155.5')} strokeWidth={1.2} />
          {/* a straight mouth */}
          <path d={P('M229 176.5L219.5 177')} strokeWidth={1.9} />
          <path d={P('M229 156C224 163 222 170 223.5 175')} strokeWidth={LINE.hairline} />
          <path d={P('M228 190Q226 193 227 196')} strokeWidth={LINE.hairline} />
        </g>
        <ProfileEye at={[ex, ey]} s={0.84} heavy look={0.4} />
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
        <path d={m.frill} fill="none" stroke={INK} strokeWidth={1.3} strokeLinecap="round" />
        <path
          d={'M' + FRILL_K.map(([x, y]) => F.p(x, y)).join('L')}
          fill="none"
          stroke={INK}
          strokeWidth={LINE.hairline}
        />
        <path d={P('M96 150Q126 160 160 150')} fill="none" stroke={INK} strokeWidth={1.4} />
        <path d={KERCHIEF} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path d={m.kerchief} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      </g>
      <InnerRule />
    </>
  )
}

export const gracePooleArt: LinocutArt = { width: PW, height: PH, Draw: GracePoolePortrait }

export const gracePoole: Portrait = {
  name: 'Grace Poole',
  art: gracePooleArt,
  alt: "A linocut portrait of Grace Poole in profile, facing left, drawn from Jane's description in Chapter 11: a woman between thirty and forty, broad and square in the shoulders and the neck. Her face is hard and plain, with a square, heavy jaw, a straight brow low over a level eye and a straight mouth. She wears a servant's white linen cap with a frilled edge, her dark hair showing under it at the brow and the nape, a white handkerchief crossed at her neck and a plain dark gown. Three numbered red markers point to her square figure, her hair and her hard, plain face.",
  describedBy: [
    { phrase: 'a set, square-made figure', at: flip([64, 282]) },
    // Into the hair at the nape, below the cap. FIXED 10 October 2026: it
    // stopped in the dark ground behind her neck, short of the hair, which
    // lies higher than the line ran.
    { phrase: 'red-haired', at: flip([60, 182]), to: flip([128, 180]) },
    { phrase: 'a hard, plain face', at: flip([196, 160]) },
  ],
  where: 'Chapter 11',
  passage:
    'a woman of between thirty and forty; a set, square-made figure, red-haired, and with a hard, plain face: any apparition less romantic or less ghostly could scarcely be conceived.',
  note: 'Jane is braced for a ghost and gets a servant. Brontë makes Grace so plain and solid that the reader, like Jane, stops looking for the mystery behind her.',
  artNote:
    'Her hair is red, but red on a head reads as a wound at a glance, so it is cut in ink and its colour is left to the words. Her cap and handkerchief are the ones Jane sees her wearing in Chapter 16.',
}
