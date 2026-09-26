import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, rng } from '@/components/comics/linocut/carve'

import { ear, PH, placing, portraitGround, PortraitRule, PW, spline, type SP } from './common'

/**
 * Dogberry, the Master Constable, at the examination in Act 4, Scene 2, when
 * Conrade has called him an ass and he answers with the whole of his worth:
 *
 *   "I am a wise fellow; and, which is more, an officer; and, which is more,
 *   a householder; and, which is more, as pretty a piece of flesh as any in
 *   Messina; and one that knows the law, go to; and a rich fellow enough, go
 *   to; and a fellow that hath had losses; and one that hath two gowns, and
 *   everything handsome about him."
 *
 * So: a stout man well pleased with himself, his chin up, his brows raised
 * high and his mouth open in the middle of the speech; a full, round face
 * with a double chin, "as pretty a piece of flesh" as he claims; and one of
 * his two gowns, wide and belted, worn with dignity. The officers come to
 * the examination "in gowns" (the stage direction, 4.2). He has just been
 * called an ass, so his cheek is flushed: the one red in the plate, on the
 * cheek and nowhere near the mouth.
 *
 * He is drawn as the panels draw him (../panels/people.tsx): stout, in a
 * wide belted gown, with a flat cap wide in the brim, cut round its band.
 * His looks are otherwise not described; he asks the court to "suspect" his
 * years, so he is not young.
 */

/** A stout man's head, the jowl full, the chin lifted, facing right in a 0..240 by 0..332 frame. */
const HEAD_PTS: SP[] = [
  [62, 226],
  [52, 200],
  [42, 172],
  [36, 140],
  [38, 104],
  [52, 68],
  [78, 44],
  [112, 32],
  [144, 34],
  [162, 48],
  [169, 68],
  [172, 86],
  [168.5, 96, 1],
  [177, 108],
  [186, 120],
  [184, 126],
  [174, 129, 1],
  [177, 135],
  [172, 139.5, 1],
  [159, 144, 1],
  [174, 153, 1],
  [177, 160],
  [174, 166, 1],
  [180, 176],
  [178, 190],
  [166, 200],
  [150, 206],
  [140, 214],
  [136, 226],
]
export const DOGBERRY_HEAD = spline(HEAD_PTS)

/** The open mouth, in the middle of his speech. */
const MOUTH = 'M172 139.5L159 144L174 153Z'

/** The flat cap, wide in the brim, set level on his head. */
const CAP = spline([
  [26, 70, 1],
  [30, 48],
  [56, 24],
  [100, 12],
  [148, 14],
  [180, 30],
  [192, 52, 1],
  [110, 62],
])
const CAP_BAND = spline([
  [34, 60, 1],
  [110, 52],
  [186, 46, 1],
  [188, 56, 1],
  [110, 64],
  [30, 72, 1],
])
/** Short hair below the cap, over the ear to the nape. */
const HAIR = spline([
  [122, 62, 1],
  [116, 90, 1],
  [102, 94],
  [92, 106],
  [86, 134],
  [74, 160],
  [56, 168, 1],
  [40, 146],
  [34, 104],
  [38, 66, 1],
])
const EAR = ear(104, 122)

/** His stout shoulders in the wide gown. */
export const DOGBERRY_BODY = spline([
  [-16, 336, 1],
  [-14, 290],
  [2, 250],
  [32, 224],
  [70, 210],
  [112, 216],
  [150, 212],
  [186, 224],
  [216, 250],
  [236, 290],
  [244, 336, 1],
])
/** The gown's broad collar, lying back over both shoulders. */
const COLLAR_BACK = spline([
  [-14, 296, 1],
  [2, 256],
  [30, 228],
  [66, 212],
  [96, 214, 1],
  [96, 240],
  [78, 266],
  [56, 296],
  [44, 336, 1],
  [-16, 336, 1],
])
const COLLAR_FRONT = spline([
  [164, 216, 1],
  [194, 230],
  [220, 258],
  [236, 296],
  [244, 336, 1],
  [204, 336, 1],
  [198, 300],
  [184, 262],
])
/** A plain falling band at the throat. */
const BAND = spline([
  [98, 206, 1],
  [136, 214],
  [168, 206, 1],
  [182, 224, 1],
  [140, 234],
  [96, 228, 1],
])

type Marks = { hair: string; cap: string; chin: string; brow: string; gown: string }

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)

  let hair = ''
  for (let i = 0; i < 7; i++) {
    const t = (i + 0.5) / 7
    hair += gouge(110 - t * 64, 90 + t * 6, 84 - t * 36, 146 + t * 14, between(r, 0.8, 1.2), -2)
  }

  // The flat cap's soft crown: folds cut in paper, radiating from the front.
  let cap = ''
  for (let i = 0; i < 7; i++) {
    const x = 50 + i * 20 + between(r, -3, 3)
    cap += gouge(
      x,
      52,
      x + 12 + between(r, -3, 3),
      22 + Math.abs(x - 110) * 0.12,
      between(r, 0.7, 1.1),
      1.4,
    )
  }

  // "as pretty a piece of flesh as any in Messina": the round of the cheek
  // and the fold of the double chin, cut as curves of fine line.
  // (A first cut hatched the cheek in bowls of line, and at panel size it
  // read as stubble round the mouth: two clean curves do it instead.)
  const chin = 'M124 138Q130 158 150 164M177 177Q166 188 150 188M173 192Q161 200 146 200'

  // "I am a wise fellow": the forehead lifted in lines under the brim.
  const brow = 'M142 70Q152 67 164 71M140 77Q151 74 166 78'

  // The gown: wide folds, and the collar's edge cut in a band of paper.
  let gown = ''
  for (let i = 0; i < 6; i++) {
    const x = 96 + i * 16 + between(r, -3, 3)
    gown += gouge(x, 238 + between(r, 0, 12), x + between(r, -6, 6), 336, between(r, 1, 1.6), 1)
  }
  gown += gouge(94, 222, 46, 334, 2.6, 2) + gouge(168, 222, 204, 334, 2.6, -2)

  const m = { hair, cap, chin, brow, gown }
  marksBySeed.set(seed, m)
  return m
}

/** Dogberry in his gown, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function DogberryFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const clip = `${uid}-dg-head-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={DOGBERRY_HEAD} />
        </clipPath>
      </defs>
      <path d={DOGBERRY_BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={DOGBERRY_HEAD} fill={PAPER} />
      <g clipPath={`url(#${clip})`}>
        <path d={m.chin} fill="none" stroke={INK} strokeWidth={LINE.fine} strokeLinecap="round" />
        <path
          d={m.brow}
          fill="none"
          stroke={INK}
          strokeWidth={LINE.hairline}
          strokeLinecap="round"
        />
      </g>
      {/* the gown's collar over the neck, and the band at the throat */}
      <path d={COLLAR_BACK} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={COLLAR_FRONT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.gown} fill={PAPER} />
      <path d={BAND} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.hair} fill={PAPER} />
      <path d={EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.3} />
      <path d={EAR.curl} fill="none" stroke={INK} strokeWidth={1.5} />
      <path d={CAP} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.cap} fill={PAPER} />
      <path d={CAP_BAND} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      {/* his cheek flushed at being called an ass: the one red, on the cheek */}
      <ellipse cx={144} cy={122} rx={12} ry={8} transform="rotate(-10 144 122)" fill={RED} />
      <path d={MOUTH} fill={INK} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d="M178 124C174 121 174 116 179.5 115" strokeWidth={1.5} />
        <path d="M159 144Q156 139 158 134" strokeWidth={1.1} />
        {/* the brows raised high, the eye round with indignation */}
        <path d="M146 80Q155 74.5 166 80" strokeWidth={2.6} />
        <path d="M148 94Q156 88 164 93.5" strokeWidth={2.2} />
        <path d="M149.5 100.5Q156 103 162.5 99" strokeWidth={1.1} />
      </g>
      <circle cx={156.6} cy={95.4} r={2.8} fill={INK} />
    </g>
  )
}

/** A thick ink halo round head, cap and gown. */
export function DogberryKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={DOGBERRY_HEAD} />
      <path d={CAP} />
      <path d={DOGBERRY_BODY} />
    </g>
  )
}

const P = placing(22, 6, 0.98)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // The prison where the examination is held, lit from ahead of him.
  ground = portraitGround('dogberry', 4001, (x, y) =>
    clamp(0.08 + ((x - 60) / 270) * 0.8 - (y / PH) * 0.12),
  )
  return ground
}

function DogberryPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <DogberryKnockout />
        <DogberryFigure uid={uid} seed={4001} />
      </g>
      <PortraitRule />
    </>
  )
}

export const dogberryPortrait: LinocutArt = { width: PW, height: PH, Draw: DogberryPortrait }

const BROW_AT = P.to(154, 72)
const CHEEK_AT = P.to(158, 186)
const GOWN_AT = P.to(66, 268)

export const dogberry: Portrait = {
  name: 'Dogberry',
  art: dogberryPortrait,
  alt: 'A linocut portrait of Dogberry in profile, facing right, his chin lifted: a stout man with a full, round face and a double chin, in a dark flat cap with a wide brim. His brows are raised high over a round eye, his forehead is lined, and his mouth is open in the middle of a speech. His cheek is printed red. He wears a plain white falling band and a wide dark gown with a broad collar over his shoulders. Three numbered red markers point to his lined forehead, his round cheek and double chin, and his gown.',
  describedBy: [
    { phrase: 'I am a wise fellow', at: [BROW_AT[0] + 48, BROW_AT[1] - 50], to: BROW_AT },
    {
      phrase: 'as pretty a piece of flesh as any in Messina',
      at: [CHEEK_AT[0] + 66, CHEEK_AT[1] + 30],
      to: CHEEK_AT,
    },
    {
      phrase: 'one that hath two gowns, and everything handsome about him',
      at: [GOWN_AT[0] + 10, GOWN_AT[1] - 66],
      to: GOWN_AT,
    },
  ],
  where: 'Act 4, Scene 2',
  passage:
    'I am a wise fellow; and, which is more, an officer; and, which is more, a householder; and, which is more, as pretty a piece of flesh as any in Messina; and one that knows the law, go to; and a rich fellow enough, go to; and a fellow that hath had losses; and one that hath two gowns, and everything handsome about him.',
  note: 'Called an ass by a prisoner, Dogberry lists every reason he deserves respect, and each one undercuts the last. The comedy is that this proud, muddled man is the one who has caught the villains.',
  artNote:
    'He is drawn as the panels draw him: stout, in a wide gown and a flat cap. The red on his cheek is his outrage at being called an ass.',
}
