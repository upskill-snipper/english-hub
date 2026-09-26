import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  deg,
  gouge,
  ribbon,
  rng,
  wave,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { InnerRule, PH, PW, hatch, once, portraitGround, smooth } from './common'

/**
 * Robert Walton in his first letter to his sister, from St Petersburgh:
 *
 *   "I am already far north of London; and as I walk in the streets of
 *   Petersburgh, I feel a cold northern breeze play upon my cheeks, which
 *   braces my nerves, and fills me with delight. ... Inspirited by this wind
 *   of promise, my day dreams become more fervent and vivid. I try in vain to
 *   be persuaded that the pole is the seat of frost and desolation; it ever
 *   presents itself to my imagination as the region of beauty and delight.
 *   There, Margaret, the sun is for ever visible; its broad disk just skirting
 *   the horizon, and diffusing a perpetual splendour." (Letter 1)
 *
 * So: a young man in profile, facing right, into the north, the wind cut as
 * long paper streaks blowing back at his face; his eye open and eager, the
 * mouth just lifting. Ahead of him is the pole of his imagination: a level
 * horizon of ice, and on it a broad red sun, "just skirting the horizon",
 * with its light cut as rays across the sky: the one spot of colour. It is
 * his day dream, not a place he has seen, and the alt text says so. (Two red
 * strokes of cold on his cheek were tried, and read as cuts; the red is kept
 * for the sun.)
 *
 * Shelley never describes his face. He is twenty-eight ("Now I am
 * twenty-eight", Letter 2) and he dresses in furs ("The cold is not
 * excessive, if you are wrapped in furs,--a dress which I have already
 * adopted", Letter 1), so he is the panels' Walton (../panels/people.tsx):
 * clean-shaven, a fuller face than Victor's and a strong straight nose, in
 * the panels' fur cap (a round crown and a thick fur band, with a flap over
 * the ear; see CROWN below), and a greatcoat with a thick fur collar turned up. Nothing here comes from a film
 * or stage production.
 *
 * The head is drawn in its own frame and placed with HEAD_T; `onHead` carries
 * a point on it to the plate, for the markers.
 *
 * Seeds: 4301 for the ground, 4302 for the cuts in the figure.
 */

const HEAD_T = 'translate(-26 4) scale(1.12)'
const onHead = (x: number, y: number): Pt => [
  Math.round((-26 + x * 1.12) * 10) / 10,
  Math.round((4 + y * 1.12) * 10) / 10,
]

/** A young man's head in profile, facing right: a full cheek, a strong straight nose. */
const HEAD = smooth([
  [128, 262, 1],
  [130, 220],
  [116, 180],
  [108, 140],
  [112, 100],
  [130, 70],
  [160, 52],
  [196, 50],
  [220, 62],
  [230, 84],
  [233.5, 100],
  [231, 108, 1],
  [237, 122],
  [243, 134],
  [249, 146, 1],
  [242.5, 150],
  [234, 151.5, 1],
  [235, 156],
  [237.5, 160, 1],
  [234.5, 164, 1],
  [236.5, 167.5],
  [233.5, 173],
  [237, 183],
  [234, 195],
  [220, 202],
  [200, 203],
  [184, 200, 1],
  [190, 222],
  [196, 262, 1],
])

/**
 * The panels' fur cap (FUR_CAP in ../panels/people.tsx), drawn large: a
 * smooth round crown, and below it a thick turned-up fur band that stands out
 * beyond the crown at the brow and comes down in a flap over the ear.
 *
 * WHY (27 September 2026). The cap was first one tall shape with straight
 * sides, furred all over, and it read as a bearskin, and was not the cap
 * Walton wears in the panels. The kit had already tried a tall straight-sided
 * cap and dropped it because it read as a flat-topped head, the film image of
 * the Creature. So the portrait takes the kit's shape.
 */
const CROWN = smooth([
  [118, 70, 1],
  [116, 42],
  [138, 19],
  [176, 11],
  [212, 17],
  [232, 38],
  [236, 68, 1],
])
/** The two seams down the crown, cut in paper. */
const CROWN_SEAMS = gouge(158, 16, 134, 62, 1.1, 2.4) + gouge(200, 15, 214, 60, 1.1, -2)
const BAND = smooth([
  [245, 93, 1],
  [218, 88],
  [192, 91],
  [182, 100, 1],
  [180, 128],
  [178, 152],
  [150, 160],
  [114, 160, 1],
  [104, 126],
  [103, 88],
  [108, 64],
  [140, 56],
  [182, 53],
  [222, 55],
  [246, 60],
  [251, 78],
])
/** The thick fur collar of his greatcoat, turned up high behind his head and round his neck. */
const COLLAR = smooth([
  [92, 262, 1],
  [96, 214],
  [112, 192],
  [140, 188],
  [166, 198],
  [190, 208],
  [212, 213],
  [234, 204],
  [248, 214],
  [252, 236],
  [244, 262, 1],
])
/** The greatcoat over his shoulders. */
const COAT = smooth([
  [-12, 330, 1],
  [-12, 268],
  [30, 250],
  [90, 240],
  [150, 244],
  [206, 246],
  [250, 250],
  [270, 276],
  [282, 330, 1],
])

/** The sun of his day dream, half-risen on the horizon of ice. */
const HORIZON = 232
const SUN_C: Pt = [292, HORIZON]
const SUN_R = 22
const SUN = `M${SUN_C[0] - SUN_R} ${HORIZON}A${SUN_R} ${SUN_R} 0 0 1 ${SUN_C[0] + SUN_R} ${HORIZON}Z`
const ICE = `M236 ${HORIZON}L324 ${HORIZON}L324 312L236 312Z`

type Marks = {
  ground: string
  rays: string
  wind: string
  ice: string
  fur: string
  collar: string
  coat: string
  cheek: string
  jaw: string
  nape: string
}

/** Rows of short paper tufts over a fur shape's bounding box: clip them to the shape. */
function tufts(
  r: () => number,
  box: { x0: number; x1: number; y0: number; y1: number },
  step: number,
) {
  let d = ''
  let row = 0
  for (let y = box.y0; y < box.y1; y += step * 0.8, row++)
    for (let x = box.x0 + (row % 2) * step * 0.5; x < box.x1; x += step) {
      const a = deg(between(r, 60, 110))
      const len = between(r, 4, 7)
      d += gouge(x, y, x + Math.cos(a) * len, y + Math.sin(a) * len, between(r, 0.6, 1))
    }
  return d
}

const marks = once<Marks>(() => {
  // Dark behind him, and light ahead of him, round the sun he imagines.
  const ground = portraitGround(4301, (x, y) => {
    const d = Math.hypot(x - SUN_C[0], (y - SUN_C[1]) * 1.3)
    return 0.04 + clamp(1 - d / 240) ** 1.3 + clamp((x - 200) / 400) * 0.2
  })
  const r = rng(4302)

  // "diffusing a perpetual splendour": the sun's light cut as rays across
  // the sky above the horizon, thinning as they go.
  let rays = ''
  for (let a = 188; a < 352; a += 7) {
    const ang = deg(a + between(r, -1.5, 1.5))
    let rad = SUN_R + between(r, 6, 10)
    while (rad < 130) {
      const len = between(r, 8, 20)
      const w = 0.5 + 1.8 * clamp(1 - (rad - SUN_R) / 110)
      const x1 = SUN_C[0] + Math.cos(ang) * rad
      const y1 = SUN_C[1] + Math.sin(ang) * rad
      if (x1 > 250 && y1 < HORIZON - 2)
        rays += gouge(
          x1,
          y1,
          SUN_C[0] + Math.cos(ang) * (rad + len),
          SUN_C[1] + Math.sin(ang) * (rad + len),
          w,
        )
      rad += len + between(r, 5, 12)
    }
  }

  // "a cold northern breeze": long streaks of wind blowing in from the north,
  // ahead of him, to his face, bending down as they come.
  let wind = ''
  for (let i = 0; i < 7; i++) {
    const y = 54 + i * 15 + between(r, -3, 3)
    const x0 = 262 + between(r, 0, 14)
    const pts = wave(x0, 326, y, 1.2, 90, between(r, 0, 6), 12).map(
      ([x, yy]): Pt => [x, yy + ((326 - x) / 70) ** 2 * 3],
    )
    wind += ribbon(pts, between(r, 1.8, 2.8), 0.9)
  }

  // The ice of his dream, flat to the horizon: long level cuts, closer
  // together towards the horizon.
  let ice = ''
  for (let k = 0; k < 12; k++) {
    const y = HORIZON + 4 + k * k * 0.62
    if (y > 310) break
    ice += gouge(238, y, 324, y + between(r, -0.4, 0.4), 0.3 + k * 0.08)
  }

  // Fur: rows of short tufts over the cap's band, close enough to print it
  // paler than the smooth crown, and over the collar.
  const fur = tufts(r, { x0: 100, x1: 252, y0: 52, y1: 162 }, 7.4)
  const collar = tufts(r, { x0: 90, x1: 254, y0: 186, y1: 262 }, 9)
  // The back of his neck in the shadow between the cap and the collar.
  const nape = hatch(r, { x0: 108, x1: 186, y0: 160, y1: 206 }, 3.4, 0.12)
  const coat =
    gouge(24, 268, 10, 322, 2, 2) +
    gouge(64, 258, 56, 322, 1.6, 1.5) +
    gouge(228, 262, 246, 324, 2, -1.5) +
    gouge(196, 262, 204, 326, 1.4, -1)

  // The modelling of a full, young face: a light shade under the cheekbone,
  // falling towards the jaw.
  const cheek = hatch(r, { x0: 184, x1: 222, y0: 128, y1: 176 }, 4.2, 0.55, 0.4)
  const jaw = 'M182 172C190 188 204 198 222 201'

  return { ground, rays, wind, ice, fur, collar, coat, cheek, jaw, nape }
})

/** The shade under the cheekbone: a crescent the cheek's hatching is clipped to. */
const HOLLOW = 'M184 132C188 156 202 176 222 184C208 170 200 152 198 130Z'

function RobertWalton({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-rw-head`
  const capClip = `${uid}-rw-cap`
  const collarClip = `${uid}-rw-collar`
  const hollowClip = `${uid}-rw-hollow`
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
        <clipPath id={capClip}>
          <path d={BAND} />
        </clipPath>
        <clipPath id={collarClip}>
          <path d={COLLAR} />
        </clipPath>
        <clipPath id={hollowClip}>
          <path d={HOLLOW} />
        </clipPath>
      </defs>
      <path d={m.ground} fill={PAPER} />
      <path d={m.rays} fill={PAPER} />
      {/* the ice of his day dream, and the broad red sun on its horizon */}
      <path d={ICE} fill={PAPER} />
      <path d={m.ice} fill={INK} />
      <path
        d={SUN}
        fill={RED}
        className="lc-glow"
        // three 1.2 s breaths after the delay: all done by 4 s
        style={timing({ delay: 0.3 })}
      />
      <path d={`M236 ${HORIZON}L324 ${HORIZON}`} stroke={INK} strokeWidth={LINE.bold} />
      <path d={m.wind} fill={PAPER} className="lc-drift-r" style={timing({ delay: 0.2 })} />
      {/* the ink halo that lifts him off the ground */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={COAT} />
        <g transform={HEAD_T}>
          <path d={HEAD} />
          <path d={CROWN} />
          <path d={BAND} />
          <path d={COLLAR} />
        </g>
      </g>
      <path d={COAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.coat} fill={PAPER} />
      <g transform={HEAD_T}>
        <path d={HEAD} fill={PAPER} />
        <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.cheek} strokeWidth={0.8} clipPath={`url(#${hollowClip})`} />
          <path d={m.jaw} strokeWidth={1.2} />
          <path d={m.nape} strokeWidth={1.3} />
        </g>
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          {/* a level brow under the fur */}
          <path d="M207 101Q220 96 233 101" strokeWidth={3} />
          {/* the eye open, looking far ahead */}
          <path d="M213 112Q220.5 105.5 229.5 110" strokeWidth={2.2} />
          <path d="M214.5 115.5Q221 120 228.5 114.5" strokeWidth={LINE.fine} />
          <path d="M229.5 110L231 112.5" strokeWidth={1.1} />
          {/* the nostril, and the mouth just lifting at its corner */}
          <path d="M240.5 148C236.5 146 236.5 141 240.5 139" strokeWidth={1.4} />
          <path d="M237 164L227.5 164.2Q224.5 163 223.5 160.6" strokeWidth={1.7} />
          <path d="M234 171.5Q231 173 228 172" strokeWidth={LINE.hairline} />
          <path d="M228 149Q221 155 222 163" strokeWidth={0.9} />
        </g>
        <circle cx={222.4} cy={112.2} r={2.8} fill={INK} />
        <circle cx={223.3} cy={111.3} r={0.85} fill={PAPER} />
        {/* the fur cap, and the fur collar turned up */}
        <path
          d={COLLAR}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <g clipPath={`url(#${collarClip})`}>
          <path d={m.collar} fill={PAPER} />
        </g>
        <path d={CROWN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path d={CROWN_SEAMS} fill={PAPER} />
        <path d={BAND} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <g clipPath={`url(#${capClip})`}>
          <path d={m.fur} fill={PAPER} />
        </g>
        <path
          d="M244 93Q212 85 182 100"
          fill="none"
          stroke={PAPER}
          strokeWidth={LINE.bold}
          strokeLinecap="round"
        />
      </g>
      <InnerRule />
    </>
  )
}

export const robertWaltonArt: LinocutArt = { width: PW, height: PH, Draw: RobertWalton }

const CHEEK = onHead(204, 140)
const EYE = onHead(223, 112)

export const robertWalton: Portrait = {
  name: 'Robert Walton',
  art: robertWaltonArt,
  alt: 'A linocut portrait of Robert Walton as he writes his first letter from St Petersburgh: a young, clean-shaven man in profile, facing right, into the north, in a round fur cap, its thick fur band turned up at the brow and coming down in a flap over his ear, and a dark greatcoat with a thick fur collar turned up round his neck. Long streaks of wind blow in towards his face, his eye is open and eager and his mouth just lifts at the corner. Ahead of him, in the dream he describes, a flat plain of ice runs to a level horizon, and on it sits a broad red sun, half risen, its light cut as rays across the sky. Four numbered red markers point to his cheek, the wind, his eye and the sun.',
  describedBy: [
    {
      phrase: 'I feel a cold northern breeze play upon my cheeks',
      at: [CHEEK[0] - 44, CHEEK[1] + 50],
      to: CHEEK,
    },
    { phrase: 'Inspirited by this wind of promise', at: [300, 34], to: [292, 62] },
    {
      phrase: 'my day dreams become more fervent and vivid',
      at: [EYE[0] + 30, EYE[1] - 50],
      to: EYE,
    },
    { phrase: 'its broad disk just skirting the horizon', at: [302, 280], to: [292, 222] },
  ],
  where: 'Letter 1',
  passage:
    'I am already far north of London; and as I walk in the streets of Petersburgh, I feel a cold northern breeze play upon my cheeks, which braces my nerves, and fills me with delight. Do you understand this feeling? This breeze, which has travelled from the regions towards which I am advancing, gives me a foretaste of those icy climes. Inspirited by this wind of promise, my day dreams become more fervent and vivid. I try in vain to be persuaded that the pole is the seat of frost and desolation; it ever presents itself to my imagination as the region of beauty and delight. There, Margaret, the sun is for ever visible; its broad disk just skirting the horizon, and diffusing a perpetual splendour.',
  note: 'Walton is still in Russia, months from the ice, and he already pictures the pole as a paradise of endless light. The novel will give him fog, frozen seas and a man who went too far, and Victor will see his own ambition in him.',
  artNote:
    'Shelley never describes his face: he is drawn plainly, in the furs he says he has “already adopted”, as in the panels. The sun and the ice ahead of him are the pole of his imagination, not a place he has yet seen.',
}
