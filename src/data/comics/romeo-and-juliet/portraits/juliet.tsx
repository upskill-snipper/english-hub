import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  deg,
  gouge,
  n,
  ribbon,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'

import {
  Hand,
  handPoint,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  type Digit,
  type SP,
} from './common'

/**
 * Juliet at her window, as Romeo sees her from the orchard below in Act 2,
 * Scene 2, before she knows he is there:
 *
 *   "The brightness of her cheek would shame those stars, As daylight doth a
 *   lamp; her eyes in heaven Would through the airy region stream so bright
 *   That birds would sing and think it were not night. See how she leans her
 *   cheek upon her hand."
 *
 * So: night, and a girl leaning on the sill of a window, her cheek on her
 * hand, the ground cut brightest round her face so that she is the light in
 * the dark ("It is the east, and Juliet is the sun!"), and the stars small
 * and dim beside her. Two brighter stars sit ahead of her, for "Two of the
 * fairest stars in all the heaven".
 *
 * She is a girl: her father says "She hath not seen the change of fourteen
 * years" (1.2). The play never describes her hair, face or dress, so she has
 * what the panels give her (../panels/verona-kit.tsx): dark hair falling
 * loose down her back, and a plain gown cut in paper, because Romeo can only
 * see her as light ("So shows a snowy dove trooping with crows", 1.5). There
 * is no red in this plate: the passage names no colour.
 *
 * She faces left, towards the stars, so the figure is drawn facing right in
 * its own 0..240 by 0..332 frame and flipped into place.
 */

/** A girl's head, facing right, the nose and chin small and soft. */
const HEAD_PTS: SP[] = [
  [76, 236],
  [68, 210],
  [57, 180],
  [47, 146],
  [47, 108],
  [59, 72],
  [83, 48],
  [113, 37],
  [140, 39],
  [156, 53],
  [162, 72],
  [165, 89],
  [162.5, 97, 1],
  [169, 109],
  [176.5, 121],
  [175, 126],
  [167, 128.5, 1],
  [168.5, 135],
  [164, 139.5, 1],
  [166.5, 144],
  [162.5, 150, 1],
  [166, 158],
  [163, 168],
  [152, 175],
  [138, 179],
  [131, 188],
  [129, 206],
  [131, 236],
]
export const JULIET_HEAD = spline(HEAD_PTS)

/**
 * Her hair, long and loose: from the brow over the crown and down her back to
 * the bottom of the plate, falling in front of the ear.
 */
const HAIR = spline([
  [158, 52],
  [150, 36],
  [126, 25],
  [94, 26],
  [64, 40],
  [44, 68],
  [34, 108],
  [32, 156],
  [34, 206],
  [30, 262],
  [22, 336, 1],
  [104, 336, 1],
  [100, 290],
  [98, 240],
  [104, 200],
  [112, 166],
  [118, 132],
  [122, 104],
  [130, 80],
  [142, 62],
])

/** The gown over her shoulders, with a high round neck. */
export const JULIET_BODY = spline([
  [-12, 336, 1],
  [-4, 298],
  [14, 266],
  [46, 246],
  [80, 234],
  [110, 240],
  [138, 234],
  [166, 246],
  [192, 270],
  [208, 300],
  [216, 336, 1],
])
/** The linen of her smock, gathered in a narrow frill round the neck. */
const FRILL = spline([
  [74, 222, 1],
  [104, 230],
  [136, 226, 1],
  [140, 236],
  [104, 242],
  [72, 234, 1],
])

// ── The hand under her cheek ──────────────────────────────────────────────
// The back of her hand, the palm against her cheek, the fingers up towards
// her temple and the thumb along her jaw. Wrist at the origin.
const HAND_AT: Pt = [138, 198]
const HAND_ROT = -10
const HAND_S = 1.02
const PALM = spline([
  [-13, 2],
  [-16, -14],
  [-16, -30],
  [-12, -42],
  [1, -46],
  [15, -44],
  [22, -36],
  [22, -16],
  [16, 0],
])
const DIGITS: Digit[] = [
  { from: [17, -36], to: [21, -58], w: 7.2 },
  { from: [9.5, -40], to: [11.5, -68], w: 7.8 },
  { from: [1, -42], to: [1, -72], w: 8.2 },
  { from: [-8, -40], to: [-11, -66], w: 7.8 },
  { from: [-13, -12], to: [-27, -32], w: 9 },
]
const HAND_LINES =
  'M-4 -8Q-6 -22 -8 -34M3 -8Q2 -24 1 -36M9 -8Q10 -22 10 -34' +
  'M-12 -62L-10 -63M-0.5 -68L2.5 -68M10.5 -64L13 -64.5M19.5 -54.5L22 -55'
const inHand = handPoint(HAND_AT, HAND_ROT, HAND_S)
const HAND_T = `translate(${HAND_AT[0]} ${HAND_AT[1]}) rotate(${HAND_ROT}) scale(${HAND_S})`
/** Her forearm in its sleeve, from the elbow on the sill up to the wrist. */
const SLEEVE = spline([
  [104, 336, 1],
  [110, 286],
  [116, 240],
  [120, 204, 1],
  [160, 200, 1],
  [164, 240],
  [168, 290],
  [174, 336, 1],
])
/** The linen frill at her wrist. */
const CUFF = spline([
  [118, 198, 1],
  [140, 192],
  [162, 195, 1],
  [163, 206],
  [140, 204],
  [118, 209, 1],
])

type Marks = { hair: string; gown: string; sleeve: string; neck: string; cheek: string }

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)

  // Loose hair from the crown down her back: long wavy ribbons of light.
  let hair = ''
  for (let i = 0; i < 26; i++) {
    const t = (i + between(r, 0.1, 0.9)) / 26
    const x0 = 146 - t * 90 + between(r, -3, 3)
    const y0 = 44 + Math.abs(t - 0.4) * 26 + between(r, 0, 6)
    const x1 = 96 - t * 66 + between(r, -6, 6)
    const y1 = 260 + between(r, 30, 80)
    const ph = between(r, 0, 6)
    const pts: Pt[] = []
    for (let k = 0; k <= 16; k++) {
      const u = k / 16
      const bulge = Math.sin(Math.PI * u) * (1 - t) * -18
      pts.push([x0 + (x1 - x0) * u + bulge + Math.sin(u * 7 + ph) * 3, y0 + (y1 - y0) * u])
    }
    hair += ribbon(pts, between(r, 0.7, 1.3) * (1.25 - t * 0.5), 0.8)
  }

  // Folds in the pale gown, cut in ink, thicker away from the light.
  let gown = ''
  for (let i = 0; i < 8; i++) {
    const x = between(r, 90, 200)
    gown += gouge(
      x,
      between(r, 256, 272),
      x + between(r, -8, 10),
      336,
      between(r, 0.8, 1.5),
      between(r, -2, 2),
    )
  }
  for (let y = 244; y < 336; y += 4) {
    const reach = 60 - (y - 244) * 0.2
    gown += gouge(-8, y, reach + between(r, -8, 8), y + 2, 0.5 + ((y - 244) / 92) * 0.7, 0.3)
  }
  let sleeve = ''
  for (let i = 0; i < 5; i++) {
    const x = 124 + i * 9 + between(r, -2, 2)
    sleeve += gouge(x, 220 + between(r, 0, 16), x - 3 + between(r, -2, 2), 336, 0.8, 0.8)
  }

  // The neck in the shadow of the jaw.
  let neck = ''
  for (let y = 188; y < 222; y += 3.4)
    neck += gouge(100, y, 118 + (222 - y) * 0.4, y - between(r, 1, 2.5), between(r, 0.5, 0.8))

  // The shade at the back of the cheek, towards the hair.
  let cheek = ''
  for (let i = 0; i < 7; i++) {
    const y = 106 + i * 7
    cheek += `M${n(122 + between(r, 0, 3))} ${n(y)}L${n(132 + between(r, -2, 3) - i * 0.4)} ${n(y + 3)}`
  }

  const m = { hair, gown, sleeve, neck, cheek }
  marksBySeed.set(seed, m)
  return m
}

/** Juliet leaning her cheek on her hand, facing right, in the 0..240 by 0..332 frame. */
export function JulietFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const clip = `${uid}-ju-head-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={JULIET_HEAD} />
        </clipPath>
      </defs>
      {/* the pale gown, cut from the dark with an ink edge */}
      <path d={JULIET_BODY} fill={PAPER} stroke={INK} strokeWidth={2} />
      <path d={m.gown} fill={INK} />
      <path d={FRILL} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path
        d="M80 226L80 234M90 228L89 237M100 230L100 239M110 230L111 239M120 229L121 238M130 227L131 235"
        stroke={INK}
        strokeWidth={LINE.hairline}
      />
      <path d={JULIET_HEAD} fill={PAPER} />
      <g clipPath={`url(#${clip})`}>
        <path d={m.cheek} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
        <path d={m.neck} fill={INK} />
      </g>
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.hair} fill={PAPER} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        {/* nostril, the lips and the small chin */}
        <path d="M169.5 124C166 122 166 118 170 117" strokeWidth={1.3} />
        <path d="M164 139.5L156 140" strokeWidth={1.7} />
        <path d="M166 135C163.5 136 161.5 137.5 160.5 139" strokeWidth={0.9} />
        <path d="M165 146C163 147.5 161 147.8 159 147.2" strokeWidth={0.9} />
        {/* a fine brow; "her eyes in heaven": the eye lifted, looking out */}
        <path d="M143 84Q152 79.5 162 83.5" strokeWidth={2.1} />
        <path d="M144.5 95Q152 89.5 160.5 94" strokeWidth={2} />
        <path d="M146 101.5Q153 104 159.5 99.5" strokeWidth={1.1} />
        <path d="M144 92Q140 91 138 93M160.5 94L163 92.5" strokeWidth={1} />
      </g>
      <circle cx={154} cy={96.4} r={2.6} fill={INK} />
      {/* the forearm, and the hand her cheek leans on */}
      <path d={SLEEVE} fill={PAPER} stroke={INK} strokeWidth={2} />
      <path d={m.sleeve} fill={INK} />
      <path d={CUFF} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path
        d="M125 197L125 206M133 195L133 204M141 194L141 203M149 195L149 204M156 196L156 205"
        stroke={INK}
        strokeWidth={LINE.hairline}
      />
      <Hand transform={HAND_T} palm={PALM} digits={DIGITS} lines={HAND_LINES} halo={3} />
    </g>
  )
}

/** An ink halo round the figure, so it stands clear of the cut ground. */
export function JulietKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={JULIET_HEAD} />
      <path d={HAIR} />
      <path d={JULIET_BODY} />
      <path d={SLEEVE} />
    </g>
  )
}

// ── The night, the stars and the sill ─────────────────────────────────────

const P = placing(40, -2, 0.98, true)
const FACE = P.to(150, 110)

/** A star: four points, cut in paper. */
function star(x: number, y: number, s: number): string {
  return (
    `M${n(x)} ${n(y - s)}L${n(x + s * 0.22)} ${n(y - s * 0.22)}L${n(x + s)} ${n(y)}` +
    `L${n(x + s * 0.22)} ${n(y + s * 0.22)}L${n(x)} ${n(y + s)}L${n(x - s * 0.22)} ${n(y + s * 0.22)}` +
    `L${n(x - s)} ${n(y)}L${n(x - s * 0.22)} ${n(y - s * 0.22)}Z`
  )
}

type Night = { ground: string; glow: string; stars: string; sill: string }
let night: Night | undefined
function nightCuts(): Night {
  if (night) return night
  // The ground is lit from her face and falls to night at the edges.
  const ground = portraitGround('juliet', 2202, (x, y) => {
    const d = Math.hypot(x - FACE[0], (y - FACE[1]) * 1.05)
    return 0.04 + clamp(1 - d / 240) ** 1.25
  })
  // "It is the east, and Juliet is the sun": light cut in rays from her face,
  // broken spokes that start outside her head and thin towards the edges.
  const rg = rng(2204)
  let glow = ''
  for (let a = 0; a < 360; a += 6) {
    const ang = deg(a + between(rg, -1.5, 1.5))
    let rad = between(rg, 64, 80)
    while (rad < 230) {
      const len = between(rg, 10, 24)
      const w = 0.5 + 2.2 * clamp(1 - (rad - 64) / 170)
      glow += gouge(
        FACE[0] + Math.cos(ang) * rad,
        FACE[1] + Math.sin(ang) * rad,
        FACE[0] + Math.cos(ang) * (rad + len),
        FACE[1] + Math.sin(ang) * (rad + len),
        w,
      )
      rad += len + between(rg, 5, 12)
    }
  }
  const r = rng(2203)
  let stars = ''
  // "Two of the fairest stars in all the heaven", ahead of her, and the rest
  // small and dim, only in the dark corners.
  stars += star(40, 48, 7) + star(84, 30, 5.5)
  for (let i = 0, tries = 0; i < 14 && tries < 400; tries++) {
    const x = between(r, 16, PW - 16)
    const y = between(r, 16, 200)
    if (Math.hypot(x - FACE[0], y - FACE[1]) < 150) continue
    stars += star(x, y, between(r, 1.6, 2.8))
    i++
  }
  // The stone sill: a band across the foot of the plate, its top edge lit.
  let sill = `M8 ${PH - 40}L${PW - 8} ${PH - 40}L${PW - 8} ${PH - 8}L8 ${PH - 8}Z`
  for (let x = 20; x < PW - 20; x += between(r, 30, 60))
    sill += gouge(x, PH - 22 + between(r, -3, 3), x + between(r, 12, 30), PH - 21, 0.7)
  night = { ground, glow, stars, sill }
  return night
}

function JulietPortrait({ uid }: ArtProps) {
  const c = nightCuts()
  return (
    <>
      <path d={c.ground} fill={PAPER} />
      <path d={c.glow} fill={PAPER} />
      <path d={c.stars} fill={PAPER} />
      <g transform={P.transform}>
        <JulietKnockout />
        <JulietFigure uid={uid} seed={2201} />
      </g>
      {/* the sill her elbow rests on, in front of her */}
      <path d={c.sill} fill={INK} />
      <path d={`M8 ${PH - 40}L${PW - 8} ${PH - 40}`} stroke={PAPER} strokeWidth={LINE.bold} />
      <PortraitRule />
    </>
  )
}

export const julietPortrait: LinocutArt = { width: PW, height: PH, Draw: JulietPortrait }

const CHEEK_AT = P.to(151, 113)
const EYE_AT = P.to(154, 97)
const HAND_MARK = P.to(...inHand(4, -30))

export const juliet: Portrait = {
  name: 'Juliet',
  art: julietPortrait,
  alt: 'A linocut portrait of Juliet at her window at night, in profile facing left: a young girl with long dark hair falling loose down her back, in a pale gown with a narrow frill at the neck. Her elbow rests on the stone sill and she leans her cheek on her hand, looking out and up. Rays of light are cut into the dark all round her, as if the light came from her, and small stars, two of them brighter, shine ahead of her. Three numbered red markers point to her cheek, her eye and the hand she leans on.',
  describedBy: [
    {
      phrase: 'The brightness of her cheek',
      at: [CHEEK_AT[0] - 70, CHEEK_AT[1] + 40],
      to: CHEEK_AT,
    },
    { phrase: 'her eyes in heaven', at: [EYE_AT[0] - 40, 30], to: EYE_AT },
    {
      phrase: 'she leans her cheek upon her hand',
      at: [HAND_MARK[0] - 70, HAND_MARK[1] + 40],
      to: HAND_MARK,
    },
  ],
  where: 'Act 2, Scene 2',
  passage:
    'The brightness of her cheek would shame those stars, As daylight doth a lamp; her eyes in heaven Would through the airy region stream so bright That birds would sing and think it were not night. See how she leans her cheek upon her hand.',
  note: 'Romeo, hidden in the orchard below, watches her before she knows he is there. He can only describe her as light: brighter than the stars, bright enough to make the birds think it is day.',
  artNote:
    'The play never describes her hair, face or dress, so she has the long dark hair the panels give her and a plain gown of the time. She is not yet fourteen, and is drawn as a girl.',
}
