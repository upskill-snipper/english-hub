import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arcDashes, clamp, deg, gouge, rng } from '@/components/comics/linocut/carve'

import {
  folds,
  NeckShadow,
  MAN_CHEEK,
  MAN_EAR,
  MAN_EYE,
  MAN_HEAD,
  ManBrow,
  ManEye,
  ManNoseAndMouth,
  neckShade,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  ruffBand,
  spline,
} from './common'

/**
 * Antonio, the merchant of the title, from three speeches:
 *
 *   ANTONIO: "In sooth I know not why I am so sad" (Act 1, Scene 1)
 *   GRATIANO: "You look not well, Signior Antonio" (Act 1, Scene 1)
 *   BASSANIO: "The dearest friend to me, the kindest man" (Act 3, Scene 2)
 *
 * So: a man with his head bowed and his eyes cast down, the cheek hollow
 * under the bone, the mouth closed and turning down a little at the corner.
 * The play never says how old he is or what he looks like beyond that.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx):
 * clean-shaven, which tells him from Shylock at a glance; a round cap with a
 * narrow turned-up brim, worn level; the small ruff every man in the kit
 * wears; and a merchant's gown with a broad collar, the plain dress of a
 * Venetian man of business in the 1590s. His head is every man's head
 * (MAN_HEAD), bowed as the kit bows it. His short dark hair shows at the
 * nape under the cap. There is no red in this plate.
 *
 * He faces left, towards Shylock's portrait across the gallery, so the figure
 * is drawn facing right and flipped.
 *
 * Seeds: 4201 (the figure), 4202 to 4204 (its marks), 4210 (the ground).
 */

/** The head is bowed: "I know not why I am so sad". */
const BOW = 'rotate(8 112 214)'

/**
 * The round cap: a soft crown, full enough to stand out a little over the
 * narrow brim turned up round it, and worn level.
 */
const CAP = spline([
  [34, 76, 1],
  [27, 58],
  [36, 38],
  [66, 22],
  [106, 17],
  [144, 21],
  [170, 36],
  [178, 54],
  [170, 66, 1],
  [122, 61],
  [72, 66],
])
const BRIM = spline([
  [37, 84, 1],
  [36, 70],
  [100, 62],
  [167, 58],
  [169, 71, 1],
  [100, 72],
])
/** Short dark hair at the nape, below the cap, cut off above the neck. */
const HAIR = spline([
  [60, 80, 1],
  [96, 80],
  [112, 94, 1],
  [100, 100],
  [93, 112],
  [89, 132],
  [78, 146],
  [60, 150],
  [47, 138],
  [41, 110],
  [40, 86, 1],
])
/** The merchant's gown over his shoulders. */
export const ANTONIO_BODY = spline([
  [-14, 336, 1],
  [-10, 292],
  [6, 256],
  [38, 226],
  [72, 212],
  [110, 218],
  [150, 212],
  [186, 226],
  [214, 260],
  [232, 298],
  [240, 336, 1],
])
/** The gown's broad collar, turned back over the shoulders, behind and before. */
const COLLAR_BACK = spline([
  [-12, 300, 1],
  [2, 262],
  [30, 230],
  [66, 214],
  [96, 222, 1],
  [92, 250],
  [76, 278],
  [58, 304],
  [46, 336, 1],
  [-14, 336, 1],
])
const COLLAR_FRONT = spline([
  [168, 226, 1],
  [196, 242],
  [220, 276],
  [232, 308],
  [238, 336, 1],
  [198, 336, 1],
  [192, 300],
  [180, 266],
])
const RUFF = ruffBand(76, 150, 204, 226, 6, 0.05)

type Marks = { cheek: string; brow: string; hair: string; cap: string; body: string; neck: string }

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)

  // "You look not well": the cheek hollow under the bone, in shallow bowls
  // of fine line, as Scrooge's shrivelled cheek is cut.
  let cheek = ''
  for (let rad = 14; rad < 32; rad += 3.4)
    cheek += arcDashes(r, 136, 112, rad, deg(58), deg(128), [10, 26], [1.5, 4])

  // A line or two on the brow, and the lid heavy over the lowered eye.
  const brow = 'M142 72Q152 69.5 163 73M143 79Q152 77 162 80'

  let hair = ''
  for (let i = 0; i < 7; i++) {
    const t = (i + 0.5) / 7
    hair += gouge(106 - t * 56, 96 + t * 8, 90 - t * 30, 150 + t * 10, 0.9 + (i % 2) * 0.3, -2)
  }

  // The soft crown: the light along its top, cut as two curving gouges
  // that follow the dome, as cloth catches it.
  const cap = gouge(50, 44, 120, 24, 1.4, -4) + gouge(64, 54, 138, 32, 1, -3.5)

  const body = folds(seed + 2, [100, 170], [256, 272], 5)
  const neck = neckShade(seed + 3)

  const m = { cheek, brow, hair, cap, body, neck }
  marksBySeed.set(seed, m)
  return m
}

/** Antonio in his gown, head bowed, facing right in the 0..240 by 0..332 frame. */
export function AntonioFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const clip = `${uid}-ant-head-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={MAN_HEAD} />
        </clipPath>
      </defs>
      <path d={ANTONIO_BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <g transform={BOW}>
        <path d={MAN_HEAD} fill={PAPER} />
        <g clipPath={`url(#${clip})`} fill="none" stroke={INK}>
          <path d={m.cheek} strokeWidth={0.95} />
          <path d={m.brow} strokeWidth={LINE.hairline} />
          <path d={m.neck} strokeWidth={1.3} />
        </g>
        <NeckShadow id={`${uid}-ant-${seed}`} />
        <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path d={m.hair} fill={PAPER} />
        <path d={MAN_EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.4} />
        <path d={MAN_EAR.curl} fill="none" stroke={INK} strokeWidth={1.5} />
        <path d={CAP} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path d={BRIM} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path d={m.cap} fill={PAPER} />
        <ManNoseAndMouth />
        {/* the corner of the mouth turned down a little */}
        <path
          d="M163 148.6Q161 150.4 160.4 153"
          fill="none"
          stroke={INK}
          strokeWidth={1.1}
          strokeLinecap="round"
        />
        <ManBrow w={2.6} />
        {/* "I know not why I am so sad": the eyes cast down */}
        <ManEye look="down" />
      </g>
      <path d={COLLAR_BACK} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={COLLAR_FRONT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={RUFF.ruff} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={RUFF.pleats} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
    </g>
  )
}

/** A thick ink halo round head, cap and gown. */
export function AntonioKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <g transform={BOW}>
        <path d={MAN_HEAD} />
        <path d={CAP} />
        <path d={BRIM} />
      </g>
      <path d={ANTONIO_BODY} />
    </g>
  )
}

const P = placing(26, 8, 0.98, true)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // A street in Venice by day, the light ahead of him, to the left.
  ground = portraitGround('antonio', 4210, (x, y) =>
    clamp(0.12 + ((PW - x - 40) / 280) * 0.88 - (y / PH) * 0.1),
  )
  return ground
}

function AntonioPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <AntonioKnockout />
        <AntonioFigure uid={uid} seed={4201} />
      </g>
      <PortraitRule />
    </>
  )
}

export const antonioPortrait: LinocutArt = { width: PW, height: PH, Draw: AntonioPortrait }

/** A point on the bowed head, carried into the portrait. */
function onHead(x: number, y: number): [number, number] {
  const a = deg(8)
  const dx = x - 112
  const dy = y - 214
  return P.to(112 + dx * Math.cos(a) - dy * Math.sin(a), 214 + dx * Math.sin(a) + dy * Math.cos(a))
}
const EYE_AT = onHead(MAN_EYE[0], MAN_EYE[1] + 1)
const CHEEK_AT = onHead(MAN_CHEEK[0] - 8, MAN_CHEEK[1] - 6)
const HEART_AT = P.to(150, 276)

export const antonio: Portrait = {
  name: 'Antonio',
  art: antonioPortrait,
  alt: 'A linocut portrait of Antonio in profile, facing left, his head bowed and his eyes cast down, the lashes lowered. He is clean-shaven, his cheek hollow under the bone and his mouth closed, turning down a little at the corner. He wears a round dark cap with a narrow turned-up brim, worn level, with short dark hair at the nape below it, a small white ruff, and a dark merchant’s gown with a broad collar turned back over his shoulders. Three numbered red markers point to his lowered eye, his hollow cheek and his breast.',
  describedBy: [
    {
      phrase: 'I know not why I am so sad',
      at: [EYE_AT[0] - 56, EYE_AT[1] - 52],
      to: EYE_AT,
    },
    { phrase: 'You look not well', at: [CHEEK_AT[0] + 6, CHEEK_AT[1] + 60], to: CHEEK_AT },
    { phrase: 'the kindest man', at: [HEART_AT[0] - 70, HEART_AT[1] + 16], to: HEART_AT },
  ],
  where: 'Act 1, Scene 1; Act 3, Scene 2',
  note: 'The play opens on a sadness Antonio cannot explain, and his friends can see it in his face. Bassanio calls him the kindest man alive, yet Antonio says he would spit on Shylock again: a strong answer weighs both.',
  artNote:
    'Nothing in the play says what he looks like. He is clean-shaven, capped and gowned as the panels draw him, in the plain dress of a Venetian merchant of the time.',
}
