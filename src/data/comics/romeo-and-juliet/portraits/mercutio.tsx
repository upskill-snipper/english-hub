import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  ribbon,
  rng,
} from '@/components/comics/linocut/carve'

import {
  Buttons,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  ruffBand,
  spline,
  type SP,
} from './common'

/**
 * Mercutio on the way to the Capulets' feast, as he puts on his mask in Act
 * 1, Scene 4:
 *
 *   "Give me a case to put my visage in: [Putting on a mask.] A visor for a
 *   visor. What care I What curious eye doth quote deformities? Here are the
 *   beetle-brows shall blush for me."
 *
 * A visor is a mask, and he jokes that it is a mask for a face already as
 * ugly as one. So he wears the mask the panels give him
 * (../panels/people.tsx): a band over the eyes with a heavy brow jutting out
 * over the nose. Its cheek is printed red, because the mask is to blush for
 * him. Below it he is grinning, his mouth open in mid-sentence, for Romeo's
 * word on him to the Nurse in 2.4: "A gentleman, Nurse, that loves to hear
 * himself talk".
 *
 * The play never describes his face, hair or dress, so he is drawn plainly: a
 * young man, beardless like the other young men in the panels, bareheaded,
 * in a doublet and a small ruff. Nothing of his death in 3.1 is shown.
 */

/** The head, grinning with the mouth open, facing right in a 0..240 by 0..332 frame. */
const HEAD_PTS: SP[] = [
  [66, 226],
  [60, 200],
  [52, 176],
  [44, 146],
  [44, 108],
  [56, 72],
  [80, 47],
  [112, 34],
  [142, 36],
  [160, 50],
  [167, 70],
  [170, 88],
  [167, 97, 1],
  [176, 113],
  [188, 129],
  [185.5, 134.5],
  [175, 138, 1],
  [177.5, 145],
  [171, 150.5, 1],
  [163, 152, 1],
  [170, 155, 1],
  [173.5, 160],
  [168, 165, 1],
  [172, 173],
  [169, 184],
  [156, 190],
  [140, 193],
  [133, 199],
  [131, 212],
  [134, 226],
]
export const MERCUTIO_HEAD = spline(HEAD_PTS)

/** Short dark hair, swept back, clipped to the skull; its front edge is the hairline. */
const HAIR = spline([
  [160, 46],
  [148, 50],
  [138, 56],
  [131, 68],
  [128, 84],
  [123, 102, 1],
  [112, 101],
  [100, 99],
  [92, 106],
  [88, 128],
  [84, 158],
  [74, 186],
  [60, 204, 1],
  [20, 200, 1],
  [20, 10, 1],
  [180, 10, 1],
])
const EAR = spline([
  [110, 108],
  [100, 106],
  [93, 114],
  [92, 126],
  [95, 139],
  [104, 146],
  [110, 142],
  [112, 132],
  [112, 118],
])

/**
 * The visor, seen from the side: a band from the brow to the cheekbone, its
 * heavy brow jutting out past his own, and an eyehole.
 */
const MASK = spline([
  [122, 86, 1],
  [136, 74],
  [158, 67],
  [180, 70],
  [195, 79],
  [196, 88],
  [186, 94, 1],
  [177, 97, 1],
  [178, 106],
  [180, 113],
  [174, 119, 1],
  [158, 123],
  [138, 121],
  [122, 114, 1],
])
/** The overhang of the beetle-brow, its shadow cut in ink. */
const BROW_SHADOW = 'M190 92C180 97 164 98 146 95C160 92 176 90 194 87Z'
const EYEHOLE = 'M147 102Q155 95.5 164 101Q155 106.5 147 102Z'
/** "shall blush for me": the mask's painted cheek, the one red in the plate. */
const BLUSH = 'M146 112C148 108 156 107 160 110C162 113 158 117 152 117C148 117 145 115 146 112Z'
/** The tie, round the back of his head, and its ends trailing behind. */
const TIE =
  'M126 94C104 92 80 94 58 100L56 106C80 101 104 99 126 101Z' +
  'M60 100C48 104 38 114 30 130L36 132C42 118 50 110 60 106Z' +
  'M58 104C50 112 46 126 46 142L52 142C52 128 56 116 62 108Z'

export const MERCUTIO_BODY = spline([
  [-12, 336, 1],
  [-6, 296],
  [12, 262],
  [40, 238],
  [70, 222],
  [110, 228],
  [140, 222],
  [168, 232],
  [196, 256],
  [216, 290],
  [228, 336, 1],
])

type Marks = {
  brows: string
  browCuts: string
  hair: string
  back: string
  ruff: string
  pleats: string
  body: string
  tie: string
}

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)

  // Hair swept back from the brow in paper strands, with a rim of light.
  let hair = ''
  for (let i = 0; i < 36; i++) {
    const t = (i + between(r, 0.2, 0.8)) / 36
    const sx = 152 - t * 30 + between(r, -2, 2)
    const sy = 44 + t * 60 + between(r, -2, 2)
    const ex = 50 + t * 34 + between(r, -4, 4)
    const ey = 62 + t * 118 + between(r, -4, 4)
    hair += gouge(sx, sy, ex, ey, between(r, 0.6, 1.1) * (1.25 - t * 0.5), between(r, -9, -3))
  }
  for (let i = 0; i < 54; i++) {
    const a = deg(between(r, 150, 290))
    const inset = between(r, 3, 10)
    const cx = 102 + Math.cos(a) * (62 - inset)
    const cy = 116 + Math.sin(a) * (90 - inset)
    const tx = -Math.sin(a) * 62
    const ty = Math.cos(a) * 90
    const tl = Math.hypot(tx, ty)
    const L = between(r, 5, 12)
    hair += gouge(
      cx + (tx / tl) * L * 0.5,
      cy + (ty / tl) * L * 0.5,
      cx - (tx / tl) * L * 0.5,
      cy - (ty / tl) * L * 0.5,
      between(r, 0.5, 1) * (inset < 6 ? 1.2 : 0.8),
      between(r, -1.2, 1.2),
    )
  }

  let back = ''
  for (let rad = 56; rad < 120; rad += 3.6)
    back += arcDashes(r, 152, 124, rad, deg(112), deg(172), [8, 22], [2, 6])

  // A small ruff round the neck.
  const { ruff, pleats } = ruffBand(42, 154, 204, 228)

  let body = ''
  body += gouge(34, 262, 8, 324, 2.2, 3)
  body += gouge(58, 256, 48, 330, 1.6, 2)
  body += gouge(196, 286, 214, 330, 1.4, -1)
  for (let i = 0; i < 6; i++) {
    const x = between(r, 70, 150)
    body += gouge(x, between(r, 250, 270), x + between(r, -6, 6), 334, between(r, 0.7, 1.2), 1)
  }

  // A fold or two in the silk of the tie.
  const tie =
    ribbon(
      [
        [120, 96],
        [96, 95],
        [70, 99],
      ],
      1.4,
    ) +
    ribbon(
      [
        [56, 108],
        [44, 120],
        [36, 130],
      ],
      1.1,
    )

  // The beetle-brow carved on the ridge of the mask: one heavy, bushy brow
  // in ink, its upper edge ragged with tufts raked forward, and paper hairs
  // cut back into it.
  let brows =
    'M140 90C150 80 168 74 186 76C192 77 196 80 197 86C190 90 176 91 162 92C154 92 146 92 140 90Z'
  for (let i = 0; i < 14; i++) {
    const t = i / 13
    const x = 144 + t * 48
    const y = 88 - Math.sin(t * Math.PI * 0.9) * 10
    brows += gouge(
      x - 4,
      y + 2,
      x + 5 + between(r, 0, 3),
      y - 7 + between(r, -2, 2),
      between(r, 1.4, 2),
      1,
    )
  }
  let browCuts = ''
  for (let i = 0; i < 9; i++) {
    const x = 150 + i * 5 + between(r, -1, 1)
    browCuts += gouge(x - 3, 89, x + 3, 81 + Math.abs(i - 4) * 0.8, between(r, 0.5, 0.8), 0.5)
  }

  const m = { brows, browCuts, hair, back, ruff, pleats, body, tie }
  marksBySeed.set(seed, m)
  return m
}

/** Mercutio, masked, head and shoulders, in the 0..240 by 0..332 frame. */
export function MercutioFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const clip = `${uid}-me-head-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={MERCUTIO_HEAD} />
        </clipPath>
      </defs>
      <path d={MERCUTIO_HEAD} fill={PAPER} />
      <g clipPath={`url(#${clip})`}>
        <path d={m.back} fill="none" stroke={INK} strokeWidth={1.7} strokeLinecap="round" />
        <path d={HAIR} fill={INK} />
        <path d={m.hair} fill={PAPER} />
      </g>
      <path d={MERCUTIO_BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <Buttons
        pts={[
          [180, 244],
          [191, 260],
          [200, 277],
          [207, 295],
          [212, 314],
        ]}
      />
      <path d={m.ruff} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={m.pleats} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      <path d={EAR} fill={PAPER} stroke={INK} strokeWidth={1.3} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d="M106 114C99 116 97 124 99 132C100 136 103 138 106 135" strokeWidth={1.6} />
        {/* nostril, and the grin: the cheek pushed up round the open mouth */}
        <path d="M180 132C175 129 175 124 181 123" strokeWidth={1.4} />
        <path d="M171 126C162 134 158 146 163 158" strokeWidth={1.4} />
        <path d="M164 152C166 158 168 164 166 170" strokeWidth={LINE.hairline} />
        <path d="M168 176C164 179 164 183 167 186" strokeWidth={LINE.hairline} />
        {/* the jaw, back to below the ear */}
        <path d="M167 188C150 194 132 192 120 180C115 172 112 160 110 152" strokeWidth={1.8} />
      </g>
      {/* the open mouth: dark within, a line of teeth under the upper lip */}
      <path d="M177.5 145.2L163 152L170.6 155Z" fill={INK} />
      <path d="M175 146.6L166 150.6" stroke={PAPER} strokeWidth={1.4} strokeLinecap="round" />
      {/* the visor and its tie */}
      <path d={TIE} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path d={m.tie} fill={INK} />
      <path d={MASK} fill={PAPER} stroke={INK} strokeWidth={2} strokeLinejoin="round" />
      <path d={BROW_SHADOW} fill={INK} />
      <path d={EYEHOLE} fill={INK} />
      <circle cx={156} cy={101} r={1.6} fill={PAPER} />
      <path d={BLUSH} fill={RED} />
      {/* the carved brows on the mask's jutting ridge */}
      <path d={m.brows} fill={INK} />
      <path d={m.browCuts} fill={PAPER} />
      <path
        d="M128 108Q140 114 152 115M180 99Q181 106 180 112"
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
        strokeLinecap="round"
      />
    </g>
  )
}

/** A thick ink halo round head, mask and shoulders. */
export function MercutioKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={MERCUTIO_HEAD} />
      <path d={MASK} />
      <path d={MERCUTIO_BODY} />
    </g>
  )
}

const P = placing(18, -6, 1.04)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // The torches the maskers carry to the feast, ahead of him.
  ground = portraitGround('mercutio', 2301, (x, y) =>
    clamp(0.06 + ((x - 50) / 270) * 0.95 - (y / PH) * 0.12),
  )
  return ground
}

function MercutioPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <MercutioKnockout />
        <MercutioFigure uid={uid} seed={2301} />
      </g>
      <PortraitRule />
    </>
  )
}

export const mercutioPortrait: LinocutArt = { width: PW, height: PH, Draw: MercutioPortrait }

const MASK_AT = P.to(136, 104)
const BROW_AT = P.to(186, 80)
const MOUTH_AT = P.to(172, 150)

export const mercutio: Portrait = {
  name: 'Mercutio',
  art: mercutioPortrait,
  alt: 'A linocut portrait of Mercutio in profile, facing right: a young, beardless man with short dark hair swept back, in a dark doublet and a small pleated ruff. Over his eyes he wears a pale mask tied round his head, with a heavy brow jutting out over his nose and a round cheek printed in red. Below it he grins with his mouth open, as if in the middle of a sentence. Three numbered red markers point to the mask, its jutting brow and his open mouth.',
  describedBy: [
    { phrase: 'A visor for a visor', at: [MASK_AT[0] - 30, MASK_AT[1] - 70], to: MASK_AT },
    {
      phrase: 'the beetle-brows shall blush for me',
      at: [BROW_AT[0] + 50, BROW_AT[1] - 36],
      to: BROW_AT,
    },
    {
      phrase: 'loves to hear himself talk',
      at: [MOUTH_AT[0] + 60, MOUTH_AT[1] + 24],
      to: MOUTH_AT,
    },
  ],
  where: 'Act 1, Scene 4; Act 2, Scene 4',
  note: 'Mercutio masks for the Capulets’ feast and jokes that the mask can be no uglier than the face under it. Romeo, asked by the Nurse who he is, calls him a man who loves the sound of his own voice.',
  artNote:
    'The play never describes his face or dress, so he is drawn plainly, in the dress of the time. The red is the mask’s cheek, which is to blush in his place.',
}
