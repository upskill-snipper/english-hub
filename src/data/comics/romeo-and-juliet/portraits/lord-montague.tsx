import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  n,
  ribbon,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'

import { capsule, PH, placing, portraitGround, PortraitRule, PW, spline, type SP } from './common'

/**
 * Lord Montague in the brawl that opens the play (1.1). Capulet sees him
 * coming:
 *
 *   "Old Montague is come, And flourishes his blade in spite of me."
 *
 * and his own first words are to the wife holding him back: "Thou villain
 * Capulet! Hold me not, let me go." So he is an old man with his sword up,
 * his mouth open in a shout. The blade is raised and aimed at no one; there
 * is nobody else in the plate and nothing is struck.
 *
 * The play gives him no other looks. The panels (../panels/late-scenes-kit
 * .tsx) draw him with white hair and a white beard in a long gown, and
 * bareheaded, so that he can be told from Capulet in his cap; he is drawn so
 * here. There is no red in this plate.
 *
 * He faces left, towards Capulet's portrait across the gallery, so the
 * figure is drawn facing right and flipped.
 */

/** The head, old, facing right in a 0..240 by 0..332 frame; the beard is drawn over it. */
const HEAD_PTS: SP[] = [
  [64, 228],
  [56, 200],
  [48, 172],
  [42, 140],
  [44, 106],
  [56, 70],
  [80, 46],
  [112, 34],
  [142, 36],
  [160, 50],
  [166, 70],
  [168.5, 88],
  [165, 97, 1],
  [173, 111],
  [184, 126],
  [182.5, 132],
  [173, 135, 1],
  [176, 150],
  [176, 168],
  [168, 186],
  [150, 196],
  [136, 204],
  [132, 228],
]
export const MONTAGUE_HEAD = spline(HEAD_PTS)

/** White hair, swept back from a high brow over the whole head to the nape. */
const HAIR = spline([
  [150, 44, 1],
  [140, 54],
  [128, 66],
  [120, 84],
  [116, 104, 1],
  [100, 100],
  [90, 110],
  [86, 140],
  [80, 170],
  [70, 196, 1],
  [52, 188],
  [40, 150],
  [36, 108],
  [46, 66],
  [72, 36],
  [110, 24],
  [138, 30],
])
/** A short, full white beard, squared at the chin. */
const BEARD = spline([
  [116, 128, 1],
  [132, 146],
  [150, 148],
  [168, 142],
  [177, 139, 1],
  [181, 154],
  [183, 174],
  [180, 196],
  [170, 210],
  [154, 214, 1],
  [138, 206],
  [122, 190],
  [112, 166],
  [110, 144],
])
const MOUSTACHE = spline([
  [173, 135, 1],
  [181, 140],
  [183, 148],
  [175, 148],
  [166, 150],
  [156, 154, 1],
  [160, 144],
])
/** "Hold me not, let me go": the mouth open in a shout, dark in the beard. */
const MOUTH =
  'M179 149.5C174 150 168 152 163 156C167 162 175 164 181 161C182 157 181 153 179 149.5Z'
const EAR = spline([
  [110, 104],
  [99, 102],
  [92, 111],
  [90, 124],
  [93, 138],
  [102, 146],
  [110, 142],
  [113, 131],
  [113, 116],
])

/** The long gown over his shoulders, and its dark collar edged in paper. */
export const MONTAGUE_BODY = spline([
  [-14, 336, 1],
  [-10, 290],
  [8, 254],
  [40, 230],
  [72, 218],
  [110, 224],
  [150, 222],
  [184, 236],
  [212, 262],
  [230, 300],
  [238, 336, 1],
])
const COLLAR = spline([
  [60, 212, 1],
  [100, 222],
  [146, 216, 1],
  [150, 232],
  [102, 238],
  [56, 228, 1],
])

// ── The blade he flourishes ───────────────────────────────────────────────
/** The sword's line, from the pommel below his fist up to its point. */
const HILT: Pt = [206, 262]
const TIP: Pt = [250, 14]
const dir = (() => {
  const dx = TIP[0] - HILT[0]
  const dy = TIP[1] - HILT[1]
  const L = Math.hypot(dx, dy)
  return { ux: dx / L, uy: dy / L, L }
})()
const along = (t: number, side = 0): Pt => [
  HILT[0] + dir.ux * t - dir.uy * side,
  HILT[1] + dir.uy * t + dir.ux * side,
]
function blade(): string {
  const a = along(16, -4)
  const b = along(dir.L - 14, -2)
  const c = along(dir.L)
  const d = along(dir.L - 14, 2)
  const e = along(16, 4)
  return `M${n(a[0])} ${n(a[1])}L${n(b[0])} ${n(b[1])}L${n(c[0])} ${n(c[1])}L${n(d[0])} ${n(d[1])}L${n(e[0])} ${n(e[1])}Z`
}
const BLADE = blade()
const Q0 = along(12, -24)
const Q1 = along(12, 24)
const QUILLON = capsule(Q0[0], Q0[1], Q1[0], Q1[1], 5.5)
const P0 = along(-30)
const POMMEL = `M${n(P0[0] - 6)} ${n(P0[1])}a6 6 0 1 0 12 0a6 6 0 1 0 -12 0Z`
/** His fist round the grip, the four fingers cut apart down its front. */
const X = HILT[0] - 4
const Y = HILT[1] - 6
const FIST = spline([
  [X - 14, Y + 4, 1],
  [X + 6, Y + 2],
  [X + 15, Y + 5],
  [X + 18, Y + 10],
  [X + 14, Y + 15.5, 1],
  [X + 18, Y + 20],
  [X + 14, Y + 25, 1],
  [X + 18, Y + 29.5],
  [X + 14, Y + 34, 1],
  [X + 17, Y + 38],
  [X + 11, Y + 43],
  [X - 8, Y + 43],
  [X - 16, Y + 34],
  [X - 17, Y + 18],
])
const THUMB = capsule(X - 15, Y + 14, X + 9, Y + 7, 8)
const FIST_LINES =
  `M${X + 14} ${Y + 15.5}L${X + 1} ${Y + 17}M${X + 14} ${Y + 25}L${X} ${Y + 26}` +
  `M${X + 14} ${Y + 34}L${X + 1} ${Y + 35}`
const SLEEVE = spline([
  [140, 340, 1],
  [160, 316],
  [182, 296],
  [192, 290, 1],
  [204, 304, 1],
  [196, 322],
  [186, 340, 1],
])

type Marks = {
  hair: string
  beard: string
  back: string
  brows: string
  wrinkles: string
  body: string
}

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)

  // White hair swept back: ink strands over paper, closer at the back.
  let hair = ''
  for (let i = 0; i < 30; i++) {
    const t = (i + between(r, 0.2, 0.8)) / 30
    const sx = 146 - t * 30 + between(r, -2, 2)
    const sy = 48 + t * 56 + between(r, -2, 2)
    const a = deg(250 - t * 100)
    const ex = 100 + Math.cos(a) * between(r, 50, 60)
    const ey = 120 + Math.sin(a) * between(r, 70, 80) + t * 20
    const pts: Pt[] = []
    for (let k = 0; k <= 8; k++) {
      const u = k / 8
      pts.push([
        sx + (ex - sx) * u - Math.sin(Math.PI * u) * 8,
        sy + (ey - sy) * u - Math.sin(Math.PI * u) * 10,
      ])
    }
    hair += ribbon(pts, between(r, 0.8, 1.3) * (0.7 + t * 0.5), 0.8)
  }
  let beard = ''
  for (let i = 0; i < 13; i++) {
    const t = (i + between(r, 0.2, 0.8)) / 13
    const x0 = 118 + t * 58 + between(r, -2, 2)
    const x1 = 128 + t * 44 + between(r, -3, 3)
    const pts: Pt[] = []
    for (let k = 0; k <= 8; k++) {
      const u = k / 8
      pts.push([x0 + (x1 - x0) * u + Math.sin(u * 6 + i) * 1.6, 144 + u * (58 + t * 10)])
    }
    beard += ribbon(pts, between(r, 0.8, 1.3), 0.8)
  }
  let back = ''
  for (let rad = 54; rad < 118; rad += 3.4)
    back += arcDashes(r, 150, 126, rad, deg(108), deg(174), [8, 22], [2, 6])
  // White brows, drawn together and up in the middle as he shouts.
  let brows = ''
  for (let i = 0; i < 11; i++) {
    const x = 145 + i * 1.9 + between(r, -0.5, 0.5)
    const y = 88 - i * 0.2 + (i > 6 ? (i - 6) * 1.2 : 0)
    brows += `M${n(x)} ${n(y)}l${n(between(r, 2.5, 4))} ${n(between(r, -2, 0.5))}`
  }
  let wrinkles = 'M141 62Q150 59 159 63M140 70Q150 67 160 71M141 78Q150 76 160 79'
  for (let i = 0; i < 4; i++)
    wrinkles += `M${n(145)} ${n(100 + i * 2.4)}L${n(135 - between(r, 0, 3))} ${n(96 + i * 4.5)}`
  for (let rad = 12; rad < 22; rad += 3.4)
    wrinkles += arcDashes(r, 148, 116, rad, deg(80), deg(140), [8, 16], [2, 5])
  let body = ''
  body += gouge(24, 276, 2, 330, 2.2, 3)
  for (let i = 0; i < 7; i++) {
    const x = between(r, 40, 170)
    body += gouge(x, between(r, 252, 272), x + between(r, -8, 8), 336, between(r, 0.8, 1.3), 1.5)
  }

  const m = { hair, beard, back, brows, wrinkles, body }
  marksBySeed.set(seed, m)
  return m
}

/** Lord Montague with his sword up, in the 0..260 by 0..332 frame. */
export function MontagueFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const clip = `${uid}-lm-head-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={MONTAGUE_HEAD} />
        </clipPath>
      </defs>
      <path d={MONTAGUE_BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <path d={COLLAR} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <path d={MONTAGUE_HEAD} fill={PAPER} />
      <g clipPath={`url(#${clip})`}>
        <path d={m.back} fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
        <path d={m.wrinkles} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      </g>
      <path d={HAIR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path d={m.hair} fill={INK} />
      <path d={EAR} fill={PAPER} stroke={INK} strokeWidth={1.4} />
      <path
        d="M106 112C98 114 96 124 98 132C99 137 102 140 106 137"
        fill="none"
        stroke={INK}
        strokeWidth={1.6}
      />
      <path d={BEARD} fill={PAPER} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
      <path d={m.beard} fill={INK} />
      <path d={MOUTH} fill={INK} />
      <path d={MOUSTACHE} fill={PAPER} stroke={INK} strokeWidth={1.3} strokeLinejoin="round" />
      <path d="M179 141Q171 144 161 148" fill="none" stroke={INK} strokeWidth={0.9} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d="M176.5 129C171.5 126 171.5 120 177.5 119" strokeWidth={1.5} />
        <path d="M146 97Q154 91.5 162 96" strokeWidth={2.3} />
        <path d="M147.5 103Q154.5 105.5 161 101.5" strokeWidth={1.1} />
        <path d={m.brows} strokeWidth={1.3} />
      </g>
      <circle cx={155} cy={98.6} r={2.7} fill={INK} />
      {/* "flourishes his blade": the sword held up and aimed at no one */}
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={BLADE} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path
        d={`M${n(along(20)[0])} ${n(along(20)[1])}L${n(along(dir.L - 20)[0])} ${n(along(dir.L - 20)[1])}`}
        stroke={INK}
        strokeWidth={1}
      />
      <path d={QUILLON} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={POMMEL} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={FIST} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={FIST_LINES} stroke={INK} strokeWidth={LINE.fine} strokeLinecap="round" />
      <path d={THUMB} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
    </g>
  )
}

/** A thick ink halo round the figure and the sword. */
export function MontagueKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={MONTAGUE_HEAD} />
      <path d={HAIR} />
      <path d={BEARD} />
      <path d={MONTAGUE_BODY} />
      <path d={BLADE} />
      <path d={QUILLON} />
      <path d={FIST} />
    </g>
  )
}

const P = placing(24, 4, 0.98, true)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // The morning street of the brawl, light ahead of him.
  ground = portraitGround('lord-montague', 3101, (x, y) =>
    clamp(0.1 + ((PW - x - 40) / 280) * 0.85 - (y / PH) * 0.1),
  )
  return ground
}

function MontaguePortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <MontagueKnockout />
        <MontagueFigure uid={uid} seed={3101} />
      </g>
      <PortraitRule />
    </>
  )
}

export const lordMontaguePortrait: LinocutArt = {
  width: PW,
  height: PH,
  Draw: MontaguePortrait,
}

const HAIR_AT = P.to(96, 60)
const BLADE_AT = P.to(...along(150))
const MOUTH_AT = P.to(174, 156)

export const lordMontague: Portrait = {
  name: 'Lord Montague',
  art: lordMontaguePortrait,
  alt: 'A linocut portrait of Lord Montague in profile, facing left: an old man with white hair swept back from a high brow, white brows drawn together and a short, full white beard, his mouth open in a shout. He wears a dark gown with a dark collar. In his fist he holds a sword up before him, the blade rising at a slant to the top of the picture and aimed at no one. Three numbered red markers point to his white hair, the raised blade and his open mouth.',
  describedBy: [
    { phrase: 'Old Montague', at: [HAIR_AT[0] + 40, HAIR_AT[1] - 40], to: HAIR_AT },
    { phrase: 'flourishes his blade', at: [BLADE_AT[0] - 40, BLADE_AT[1] - 50], to: BLADE_AT },
    { phrase: 'Hold me not, let me go', at: [MOUTH_AT[0] + 30, MOUTH_AT[1] + 84], to: MOUTH_AT },
  ],
  where: 'Act 1, Scene 1',
  note: 'Montague is as ready to fight as Capulet, and his wife has to hold him back. The feud is an old men’s quarrel, carried on by their servants and their sons.',
  artNote:
    'The play says only that he is old; his white hair, beard and gown are the plain dress of an old man of the time, as the panels draw him.',
}
