import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
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

import { PH, placing, portraitGround, PortraitRule, PW, spline, type SP } from './common'

/**
 * Lord Capulet, as the play puts him before us:
 *
 * - He is "old Capulet" (the Prince, 1.1; Benvolio, 2.4), past his "dancing
 *   days" (1.5), and says himself it is "not hard ... For men so old as we to
 *   keep the peace" (1.2). So he is an old man with a white beard.
 * - He first comes on in the brawl: "Enter Capulet in his gown, and Lady
 *   Capulet" (1.1), calling for his long sword. So he wears his long gown,
 *   with its broad collar.
 * - In 3.5, when Juliet refuses Paris, he rages at her until his wife says
 *   "You are too hot." So his brow is drawn down, his mouth is open, and his
 *   cheek is printed red: the one colour in the plate, for his temper and
 *   nothing else.
 *
 * His face, beard and dress are otherwise undescribed. He wears the soft cap
 * the panels give him (../panels/late-scenes-kit.tsx), so that he can be
 * told from Montague when the two fathers stand together; his beard is long
 * and white like theirs. Nothing is shown of whom he is shouting at.
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
  [169, 88],
  [165.5, 97, 1],
  [174, 112],
  [186, 128],
  [184.5, 134],
  [174, 137, 1],
  [176, 150],
  [176, 168],
  [168, 186],
  [150, 196],
  [136, 204],
  [132, 228],
]
export const CAPULET_HEAD = spline(HEAD_PTS)

/**
 * The long white beard, from under the ear round the jaw and chin to a point
 * on his chest, parted at the mouth (drawn over it in ink).
 */
const BEARD = spline([
  [118, 128, 1],
  [132, 146],
  [150, 148],
  [168, 142],
  [178, 140, 1],
  [182, 156],
  [184, 178],
  [182, 204],
  [174, 228],
  [160, 250, 1],
  [146, 236],
  [130, 220],
  [116, 196],
  [110, 166],
  [112, 144],
])
/** The moustache, over the open mouth. */
const MOUSTACHE = spline([
  [174, 137, 1],
  [182, 142],
  [184, 150],
  [176, 150],
  [168, 152],
  [158, 156, 1],
  [162, 146],
])
/** The open mouth, dark in the beard. */
const MOUTH =
  'M180 151.5C176 152 170 153.5 164 157C168 162 176 164 182 162C183 158 182 154 180 151.5Z'
/** The soft cap, low at the back, over the crown. */
const CAP = spline([
  [168, 58, 1],
  [172, 40],
  [160, 20],
  [128, 6],
  [90, 6],
  [58, 18],
  [38, 40],
  [30, 64],
  [36, 84, 1],
  [70, 76],
  [110, 66],
  [146, 60],
])
/** The cap's band, a turned-up edge round the head. */
const CAP_BAND = spline([
  [36, 76, 1],
  [70, 68],
  [110, 58],
  [168, 50, 1],
  [168, 60, 1],
  [110, 68],
  [70, 78],
  [38, 88, 1],
])
/** White hair at the nape, below the cap. */
const HAIR = spline([
  [40, 76, 1],
  [70, 72],
  [98, 78],
  [104, 98, 1],
  [92, 110],
  [84, 134],
  [76, 160, 1],
  [58, 158],
  [44, 140],
  [38, 110],
])
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

/** The long gown over his shoulders. */
export const CAPULET_BODY = spline([
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
/** The gown's broad collar, turned back over the shoulders, and its fur. */
const COLLAR = spline([
  [-12, 300, 1],
  [2, 262],
  [30, 236],
  [66, 222],
  [96, 226, 1],
  [100, 250],
  [84, 270],
  [60, 290],
  [44, 336, 1],
  [-14, 336, 1],
])
const COLLAR_FRONT = spline([
  [166, 232, 1],
  [196, 244],
  [220, 272],
  [232, 306],
  [238, 336, 1],
  [196, 336, 1],
  [194, 298],
  [182, 266],
])

type Marks = {
  beard: string
  hair: string
  cap: string
  back: string
  brows: string
  wrinkles: string
  fur: string
  body: string
}

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)

  // The white beard in long waves: ink lines between paper locks.
  let beard = ''
  for (let i = 0; i < 16; i++) {
    const t = (i + between(r, 0.2, 0.8)) / 16
    const x0 = 120 + t * 56 + between(r, -2, 2)
    const y0 = 142 + between(r, -2, 4)
    const x1 = 132 + t * 36 + between(r, -3, 3)
    const y1 = 214 + t * 24 + between(r, -6, 6)
    const pts: Pt[] = []
    for (let k = 0; k <= 10; k++) {
      const u = k / 10
      pts.push([x0 + (x1 - x0) * u + Math.sin(u * 7 + i * 0.8) * 2, y0 + (y1 - y0) * u])
    }
    beard += ribbon(pts, between(r, 0.8, 1.4), 0.8)
  }
  // The white hair at the nape, combed down.
  let hair = ''
  for (let i = 0; i < 10; i++) {
    const x = 44 + i * 5 + between(r, -1, 1)
    hair += ribbon(
      [
        [x, 82],
        [x - 1, 110],
        [x + 2 - i * 0.4, 152 - Math.abs(i - 4) * 4 - Math.max(0, i - 6) * 8],
      ],
      between(r, 0.8, 1.3),
      0.8,
    )
  }
  // Folds in the soft cap, gathered towards its crown.
  let cap = ''
  for (let i = 0; i < 7; i++) {
    const x = 50 + i * 17 + between(r, -4, 4)
    cap += gouge(
      x,
      62 - i * 1.2,
      104 + (x - 104) * 0.4,
      12 + between(r, 0, 5),
      between(r, 0.6, 1.1),
      1.6,
    )
  }
  let back = ''
  for (let rad = 54; rad < 118; rad += 3.4)
    back += arcDashes(r, 150, 126, rad, deg(108), deg(174), [8, 22], [2, 6])
  // Bushy white brows drawn down hard towards the nose: strokes of ink.
  let brows = ''
  for (let i = 0; i < 12; i++) {
    const x = 144 + i * 1.9 + between(r, -0.5, 0.5)
    const y = 84 + i * 0.7
    brows += `M${n(x)} ${n(y)}l${n(between(r, 2.5, 4))} ${n(between(r, 1, 3))}`
  }
  // The lines of age and of anger: a furrowed brow, crow's feet, the cheek.
  let wrinkles = 'M142 60Q151 57 160 61M140 68Q150 65 161 69M162 76L165 84M157 76L160 84'
  for (let i = 0; i < 4; i++)
    wrinkles += `M${n(145)} ${n(100 + i * 2.4)}L${n(135 - between(r, 0, 3))} ${n(96 + i * 4.5)}`
  for (let rad = 12; rad < 22; rad += 3.4)
    wrinkles += arcDashes(r, 148, 116, rad, deg(80), deg(140), [8, 16], [2, 5])

  // The fur of the collar: short strokes of ink over paper.
  let fur = ''
  for (let i = 0; i < 120; i++) {
    const x = between(r, -10, 100)
    const y = between(r, 226, 336)
    fur += gouge(x, y, x + between(r, -3, 3), y + between(r, 4, 8), between(r, 0.5, 0.9), 0.4)
  }
  for (let i = 0; i < 70; i++) {
    const x = between(r, 170, 238)
    const y = between(r, 236, 336)
    fur += gouge(x, y, x + between(r, -3, 3), y + between(r, 4, 8), between(r, 0.5, 0.9), 0.4)
  }
  let body = ''
  for (let i = 0; i < 6; i++) {
    const x = between(r, 90, 170)
    body += gouge(x, between(r, 256, 276), x + between(r, -8, 8), 336, between(r, 0.8, 1.3), 1.5)
  }

  const m = { beard, hair, cap, back, brows, wrinkles, fur, body }
  marksBySeed.set(seed, m)
  return m
}

/** Lord Capulet in his gown, head and shoulders, in the 0..240 by 0..332 frame. */
export function CapuletFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const clip = `${uid}-lc-head-${seed}`
  const collarClip = `${uid}-lc-collar-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={CAPULET_HEAD} />
        </clipPath>
        <clipPath id={collarClip}>
          <path d={COLLAR} />
          <path d={COLLAR_FRONT} />
        </clipPath>
      </defs>
      <path d={CAPULET_BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <path d={COLLAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={COLLAR_FRONT} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <g clipPath={`url(#${collarClip})`}>
        <path d={m.fur} fill={INK} />
      </g>
      <path d={CAPULET_HEAD} fill={PAPER} />
      <g clipPath={`url(#${clip})`}>
        <path d={m.back} fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
        <path d={m.wrinkles} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      </g>
      {/* "You are too hot": his cheek flushed, the one red in the plate */}
      <ellipse cx={150} cy={121} rx={11} ry={8} fill={RED} />
      <path d={HAIR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={m.hair} fill={INK} />
      <path d={CAP} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.cap} fill={PAPER} />
      <path d={CAP_BAND} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
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
      <path
        d="M180 143Q172 146 162 150M181 147Q174 150 165 153"
        fill="none"
        stroke={INK}
        strokeWidth={0.9}
      />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d="M178 131C173 128 173 122 179 121" strokeWidth={1.5} />
        {/* the eye wide under the lowered brow */}
        <path d="M146 96Q154 91 162 96" strokeWidth={2.3} />
        <path d="M147.5 103Q154.5 105.5 161 101.5" strokeWidth={1.1} />
        <path d={m.brows} strokeWidth={1.3} />
        <path d="M143 86Q153 84 166 93" strokeWidth={1.4} />
      </g>
      <circle cx={155} cy={98.6} r={2.7} fill={INK} />
    </g>
  )
}

/** A thick ink halo round head, beard, cap and gown. */
export function CapuletKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={CAPULET_HEAD} />
      <path d={CAP} />
      <path d={BEARD} />
      <path d={CAPULET_BODY} />
    </g>
  )
}

const P = placing(18, -4, 1.02)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // Dawn in Juliet's room (3.5), the light ahead of him.
  ground = portraitGround('lord-capulet', 2901, (x, y) =>
    clamp(0.08 + ((x - 50) / 270) * 0.9 - (y / PH) * 0.12),
  )
  return ground
}

function CapuletPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <CapuletKnockout />
        <CapuletFigure uid={uid} seed={2901} />
      </g>
      <PortraitRule />
    </>
  )
}

export const lordCapuletPortrait: LinocutArt = { width: PW, height: PH, Draw: CapuletPortrait }

const BEARD_AT = P.to(158, 200)
const GOWN_AT = P.to(40, 280)
const CHEEK_AT = P.to(151, 121)

export const lordCapulet: Portrait = {
  name: 'Lord Capulet',
  art: lordCapuletPortrait,
  alt: 'A linocut portrait of Lord Capulet in profile, facing right: an old man with a long white beard, white hair at the nape and a dark soft cap. His bushy white brows are drawn down, his eye glares and his mouth is open in the middle of a shout, and his cheek is printed red. He wears a dark gown with a broad fur collar over his shoulders. Three numbered red markers point to his white beard, his gown and his red cheek.',
  describedBy: [
    { phrase: 'old Capulet', at: [BEARD_AT[0] + 70, BEARD_AT[1] + 10], to: BEARD_AT },
    { phrase: 'Capulet in his gown', at: [GOWN_AT[0] + 10, GOWN_AT[1] - 90], to: GOWN_AT },
    { phrase: 'You are too hot', at: [CHEEK_AT[0] + 70, CHEEK_AT[1] - 60], to: CHEEK_AT },
  ],
  where: 'Act 1, Scene 1; Act 3, Scene 5',
  note: 'Capulet can be a warm host and a loving father, but when Juliet refuses Paris his temper takes over, and even his wife tells him he has gone too far.',
  artNote:
    'The play says he is old and first shows him in his gown; his cap, beard and fur collar are the plain dress of an old man of the time, as the panels draw him. The red stands for his temper.',
}
