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
  ProfileEye,
  WOMAN_EYE,
  WOMAN_HEAD,
  WomanFeatures,
  flip,
  hatch,
  nudge,
  once,
  placer,
  portraitGround,
  scallops,
  smooth,
  type Knot,
} from './common'

/**
 * Mrs Joe Gargery, Pip's sister, as Dickens describes her, and nothing else.
 * Chapter 2:
 *
 *   "My sister, Mrs. Joe, with black hair and eyes, had such a prevailing
 *   redness of skin, that I sometimes used to wonder whether it was possible
 *   she washed herself with a nutmeg-grater instead of soap. She was tall and
 *   bony, and almost always wore a coarse apron, fastened over her figure
 *   behind with two loops, and having a square impregnable bib in front,
 *   that was stuck full of pins and needles."
 *
 * So the description is mostly the apron, and she is drawn half length to
 * show it: a tall, thin woman standing square to us, her shoulders bony and
 * angular, her long neck corded, her head turned in profile to the left;
 * over her dark gown a coarse apron with a square bib, pinned flat at its top
 * corners and stuck all over with pins and needles, two of them trailing
 * thread ("a square impregnable bib in front, that was stuck full of pins
 * and needles"). Her face is long and bony, hollow at the temple, the brow
 * drawn down and the mouth pressed firm; her eye is
 * black with a small glint, and her hair black, drawn back under her cap
 * ("black hair and eyes"). The redness of her skin is printed as a flush on
 * the cheekbone, well clear of her mouth ("a prevailing redness of skin").
 *
 * The cap is from Chapter 15, where she "threw her cap off, and pulled her
 * hair down": a plain linen cap with a frilled edge, as a married woman wore
 * indoors in the 1810s. Her gown is not described, so it is plain and dark.
 * Nothing of the Tickler and nothing of the attack on her is drawn here, and
 * nothing comes from a film or stage production.
 *
 * Drawn facing right and turned by FACE_LEFT, so the markers below are
 * placed with flip(). Seeds: 7201 for the ground, 7202 for the cuts in the
 * figure.
 */

/** The one woman's head, its chin and nose a little sharper: "bony". */
const HEAD_K: Knot[] = nudge(WOMAN_HEAD, [
  [16, 2, 1],
  [23, 1.5, 0],
  [24, 1, 1],
  [25, 0, 2],
])

const F = placer([52, -2], 0.74)
const HEAD = smooth(F.knots(HEAD_K))

/** The linen cap, set back on the head: a gathered crown down to the nape. */
const CAP = smooth(
  F.knots([
    [196, 62, 1],
    [186, 46],
    [162, 38],
    [134, 42],
    [110, 60],
    [96, 94],
    [94, 136],
    [102, 174],
    [120, 202, 1],
    [144, 196],
    [154, 174],
    [160, 150],
    [168, 120],
    [180, 90],
  ]),
)
/** Her black hair, drawn back from the brow and the temple to the edge of the cap. */
const HAIR = smooth(
  F.knots([
    [226, 78, 1],
    [216, 66],
    [198, 58, 1],
    [184, 86],
    [172, 118],
    [164, 146],
    [156, 172, 1],
    [174, 154],
    [184, 132],
    [194, 110],
    [206, 94],
    [218, 84],
  ]),
)
/** The frilled edge of the cap, framing the face. */
const FRILL_SPINE: Pt[] = (
  [
    [198, 58],
    [188, 80],
    [178, 104],
    [169, 128],
    [161, 152],
    [152, 178],
    [138, 200],
  ] as Pt[]
).map((p) => F.pt(p))

/** The gown: a tall, narrow body standing square to us, the shoulders bony and angular. */
const GOWN = smooth([
  [60, 330, 1],
  [68, 286],
  [82, 246],
  [102, 214, 1],
  [126, 200],
  [148, 189],
  [200, 189],
  [222, 200],
  [246, 214, 1],
  [266, 246],
  [280, 286],
  [288, 330, 1],
])
/** The neckline of the gown, close round the base of the neck. */
const NECKLINE = 'M140 192Q173 206 206 192'

/** The square bib of the apron, pinned flat to the front of the gown. */
const BIB = 'M132 218L216 218L216 302L132 302Z'
/** The apron's skirt, gathered at the waist below the bib. */
const SKIRT = smooth([
  [118, 302, 1],
  [230, 302, 1],
  [240, 330, 1],
  [108, 330, 1],
])

type Pin = { x: number; y: number; a: number; len: number; needle: boolean; thread: boolean }

type Marks = {
  ground: string
  capGathers: string
  frill: string
  back: string
  neck: string
  cheek: string
  arms: string
  gown: string
  weave: string
  skirt: string
  pins: Pin[]
}

const marks = once<Marks>(() => {
  // A plain wall, lit from in front of her face; dark behind her.
  const ground = portraitGround(7201, (x, y) =>
    clamp(0.05 + ((x - 60) / 270) * 0.85 - Math.max(0, (y - 280) / 300)),
  )
  const r = rng(7202)
  // The gathers of the linen crown, radiating from the band at the back.
  let capGathers = ''
  for (let i = 0; i < 15; i++) {
    const a = deg(200 + i * 9.4 + between(r, -3, 3))
    const [x0, y0] = F.pt([150 + Math.cos(a) * 30, 128 + Math.sin(a) * 36])
    const [x1, y1] = F.pt([
      150 + Math.cos(a) * between(r, 62, 76),
      128 + Math.sin(a) * between(r, 78, 90),
    ])
    capGathers += `M${n(x0)} ${n(y0)}Q${n((x0 + x1) / 2 + between(r, -3, 3))} ${n((y0 + y1) / 2)} ${n(x1)} ${n(y1)}`
  }
  const frill = scallops(FRILL_SPINE, 4, 6)
  // The shadow round the back of the jaw and down the neck.
  let back = ''
  const [bx, by] = F.pt([174, 150])
  for (let rad = 44; rad < 72; rad += 3.2)
    back += arcDashes(r, bx, by, rad, deg(96), deg(140), [6, 16], [2, 5])
  // A long, corded neck: the shadow behind it, and its two cords.
  const neck =
    hatch(r, { x0: 136, x1: 176, y0: 148, y1: 196 }, 4.6, 0.12) +
    `M${F.p(204, 214)}Q${F.p(190, 230)} ${F.p(182, 252)}M${F.p(214, 210)}Q${F.p(206, 232)} ${F.p(204, 252)}`
  // "tall and bony": the hollow at the temple.
  let cheek = ''
  for (let i = 0; i < 3; i++)
    cheek += `M${F.p(194 + i * 3, 96 + i)}Q${F.p(191 + i * 3, 108)} ${F.p(197 + i * 3, 118 - i)}`
  // The gown: the arms hanging at her sides, cut apart from the body, and
  // the bony points of the shoulders lit.
  const arms = 'M104 218Q112 262 114 330M244 218Q236 262 234 330'
  // The bony points of the shoulders catch the light, and the arms below them.
  const gown =
    gouge(80, 252, 72, 318, 1.5, 1) +
    gouge(90, 236, 96, 300, 1, -1) +
    gouge(264, 250, 274, 318, 1.5, -1) +
    gouge(256, 236, 252, 300, 1, 1) +
    gouge(104, 215, 128, 203, 1.4, -1) +
    gouge(220, 203, 244, 215, 1.4, 1)
  // "a coarse apron": the weave of the cloth, a little uneven.
  let weave = ''
  for (let y = 226; y < 300; y += 8)
    weave += `M134 ${n(y + between(r, -0.6, 0.6))}L214 ${n(y + between(r, -0.6, 0.6))}`
  let skirt = ''
  for (let x = 126; x < 230; x += 12)
    skirt += `M${n(x)} 306Q${n(x + between(r, -3, 3))} 318 ${n(x + (x - 174) * 0.06)} 330`
  // "stuck full of pins and needles": pins at every angle, and a few
  // needles, two of them still threaded.
  const pins: Pin[] = []
  for (let i = 0, tries = 0; i < 26 && tries < 2000; tries++) {
    const x = between(r, 140, 208)
    const y = between(r, 226, 292)
    if (pins.some((p) => Math.hypot(p.x - x, p.y - y) < 11)) continue
    const needle = i % 6 === 3
    pins.push({
      x,
      y,
      a: deg(between(r, -50, 50) + (r() < 0.5 ? 0 : 180)),
      len: needle ? between(r, 15, 18) : between(r, 10, 13),
      needle,
      thread: needle && i < 20,
    })
    i++
  }
  return { ground, capGathers, frill, back, neck, cheek, arms, gown, weave, skirt, pins }
})

function Pins({ pins }: { pins: Pin[] }) {
  let shafts = ''
  let threads = ''
  const heads: Pt[] = []
  const eyes: string[] = []
  for (const p of pins) {
    const dx = Math.cos(p.a)
    const dy = Math.sin(p.a)
    const x1 = p.x + dx * p.len
    const y1 = p.y + dy * p.len
    shafts += `M${n(p.x)} ${n(p.y)}L${n(x1)} ${n(y1)}`
    if (p.needle) {
      eyes.push(
        `M${n(p.x)} ${n(p.y)}m${n(-dx * 1.6)} ${n(-dy * 1.6)}l${n(dx * 3.2)} ${n(dy * 3.2)}`,
      )
      if (p.thread)
        threads += `M${n(p.x)} ${n(p.y)}C${n(p.x - 6)} ${n(p.y + 8)} ${n(p.x + 4)} ${n(p.y + 14)} ${n(p.x - 2)} ${n(p.y + 22)}`
    } else heads.push([p.x, p.y])
  }
  return (
    <g>
      <path d={shafts} fill="none" stroke={INK} strokeWidth={1.25} strokeLinecap="round" />
      <path d={eyes.join('')} fill="none" stroke={PAPER} strokeWidth={0.9} strokeLinecap="round" />
      <path d={threads} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      <g fill={INK}>
        {heads.map(([x, y]) => (
          <circle key={`${n(x)}-${n(y)}`} cx={n(x)} cy={n(y)} r={1.8} />
        ))}
      </g>
    </g>
  )
}

function MrsJoePortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-mj-head`
  const capClip = `${uid}-mj-cap`
  const bibClip = `${uid}-mj-bib`
  const [ex, ey] = F.pt(WOMAN_EYE)
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
        <clipPath id={capClip}>
          <path d={CAP} />
        </clipPath>
        <clipPath id={bibClip}>
          <path d={BIB} />
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
        <path d={GOWN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path d={m.gown} fill={PAPER} />
        <path d={m.arms} fill="none" stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={HEAD} fill={PAPER} />
        <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.back} strokeWidth={1.4} />
          <path d={m.neck} strokeWidth={LINE.hairline} />
          <path d={m.cheek} strokeWidth={0.9} />
        </g>
        <path d={NECKLINE} fill="none" stroke={PAPER} strokeWidth={LINE.carve} />
        {/* her black hair, drawn back under the cap */}
        <path d={HAIR} fill={INK} />
        <path
          d={`M${F.p(220, 76)}Q${F.p(200, 90)} ${F.p(186, 124)}M${F.p(212, 68)}Q${F.p(192, 86)} ${F.p(178, 128)}M${F.p(204, 64)}Q${F.p(186, 90)} ${F.p(170, 144)}`}
          fill="none"
          stroke={PAPER}
          strokeWidth={0.7}
          strokeLinecap="round"
        />
        <WomanFeatures F={F} brow={2.6} knit={2} mouth="firm" />
        <ProfileEye at={[ex, ey]} s={0.66} heavy look={0.4} />
        {/* "a prevailing redness of skin": the spot colour on the cheekbone */}
        <Bloom at={F.pt([202, 147])} w={20} h={11} tilt={14} />
        {/* the cap, its gathers and its frilled edge */}
        <path d={CAP} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <g clipPath={`url(#${capClip})`}>
          <path d={m.capGathers} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
        </g>
        <path d={m.frill} fill="none" stroke={INK} strokeWidth={1.4} strokeLinecap="round" />
        {/* The coarse apron: the skirt below, the square bib above, stuck full of pins and needles. */}
        <path d={SKIRT} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path d={m.skirt} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
        <path d="M118 302H230" fill="none" stroke={INK} strokeWidth={2.4} />
        <path d={BIB} fill={PAPER} stroke={INK} strokeWidth={1.8} strokeLinejoin="round" />
        <g clipPath={`url(#${bibClip})`}>
          <path d={m.weave} fill="none" stroke={INK} strokeWidth={0.5} />
        </g>
        <Pins pins={m.pins} />
        {/* the two big pins that hold the bib up at its corners */}
        <path
          d="M128 226L146 210M220 226L202 210"
          fill="none"
          stroke={INK}
          strokeWidth={1.6}
          strokeLinecap="round"
        />
        <circle cx={146} cy={210} r={2.4} fill={INK} stroke={PAPER} strokeWidth={0.8} />
        <circle cx={202} cy={210} r={2.4} fill={INK} stroke={PAPER} strokeWidth={0.8} />
      </g>
      <InnerRule />
    </>
  )
}

export const mrsJoeGargeryArt: LinocutArt = { width: PW, height: PH, Draw: MrsJoePortrait }

export const mrsJoeGargery: Portrait = {
  name: 'Mrs Joe Gargery',
  art: mrsJoeGargeryArt,
  alt: "A linocut portrait of Pip's sister, Mrs Joe Gargery, drawn half length from Dickens's description in Chapter 2. A tall, thin woman stands square to us with bony, angular shoulders and a long, corded neck, her head turned in profile to the left. Her face is long and bony, hollow at the temple, with a frowning brow and a firmly pressed mouth; her eye is black, and her black hair is drawn back under a white linen cap with a frilled edge. A flush printed in red sits on her cheekbone. Over her dark gown she wears a coarse apron with a square bib, pinned flat at its top corners and stuck all over with pins and needles, two of them trailing thread. Four numbered red markers point to her black eye, her reddened face, her bony shoulder and the bib full of pins.",
  describedBy: [
    { phrase: 'black hair and eyes', at: [36, 94], to: flip([216, 94]) },
    { phrase: 'a prevailing redness of skin', at: flip(F.pt([180, 166])) },
    { phrase: 'tall and bony', at: [300, 166], to: flip([104, 216]) },
    {
      phrase: 'a square impregnable bib in front, that was stuck full of pins and needles',
      at: [304, 256],
      to: flip([136, 256]),
    },
  ],
  where: 'Chapter 2',
  passage:
    'My sister, Mrs. Joe, with black hair and eyes, had such a prevailing redness of skin, that I sometimes used to wonder whether it was possible she washed herself with a nutmeg-grater instead of soap. She was tall and bony, and almost always wore a coarse apron, fastened over her figure behind with two loops, and having a square impregnable bib in front, that was stuck full of pins and needles.',
  note: 'Dickens builds Mrs Joe out of hard, sharp things: a grater, bones, a bib no one could get through and a front bristling with pins. The comedy is real, and so is the warning: nothing soft is allowed near her.',
  artNote:
    'Her cap is from Chapter 15, where she throws it off; her gown is not described, so it is plain and dark. The redness of her skin is printed as a flush on her cheekbone, kept well clear of her mouth.',
}
