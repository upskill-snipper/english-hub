import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arcDashes, between, clamp, deg, n, rng } from '@/components/comics/linocut/carve'

import {
  folds,
  locks,
  MAN_EAR,
  MAN_EYE,
  MAN_HEAD,
  ManEye,
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
 * Shylock, from his own words, and only those:
 *
 *   "Still have I borne it with a patient shrug ... And spet upon my Jewish
 *   gaberdine" and "You that did void your rheum upon my beard" (Act 1,
 *   Scene 3); "The difference of old Shylock and Bassanio" (Act 2, Scene 5);
 *   "I am a Jew. Hath not a Jew eyes?" (Act 3, Scene 1).
 *
 * So: an old man with a full grey beard and grey hair, in a long plain coat,
 * the gaberdine, upright, his head level and his eye open and steady. He
 * names his coat and his beard only to say where Antonio spat on them; the
 * portrait shows the man, and his words carry what was done to him. Nobody
 * else is drawn.
 *
 * THE CARE THIS PORTRAIT TAKES. The Elizabethan stage often showed a Jew in
 * caricature, and this play's Christians call Shylock a dog and a devil. None
 * of it is drawn. His head is every man's head in these portraits (MAN_HEAD
 * in ./common.tsx), the same brow and the same ordinary nose as Antonio's;
 * his back is straight; there is nothing in his hands or on his coat: no
 * money, no purse, no scales. The play itself gives the reason nothing marks
 * him out: at the trial Portia has to ask "Which is the merchant here? And
 * which the Jew?" (Act 4, Scene 1).
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx):
 * bareheaded, grey hair round the back of the head from the temple to the
 * nape, the crown bare, a full grey beard with ink strands in it, grey
 * brows, the small ruff every man in the kit wears, and the gaberdine, the
 * long plain coat that marks him in the panels. The beard is rounded, not
 * pointed, and has more ink in it than Leonato's white one in Much Ado, so
 * it reads as grey. There is no red in this plate.
 *
 * Seeds: 4101 (the figure), 4102 to 4106 (its marks), 4110 (the ground).
 */

/** Grey hair round the back of the head, from the temple over the ear to the nape. */
const HAIR = spline([
  [136, 64, 1],
  [126, 78],
  [117, 97, 1],
  [103, 101],
  [94, 113],
  [90, 138],
  [85, 160],
  [74, 178],
  [60, 184],
  [50, 168],
  [43, 132],
  [44, 94],
  [53, 70],
  [72, 58],
  [98, 56],
  [120, 58],
])

/** "upon my beard": full and rounded, from under the ear round the jaw to the chest. */
const BEARD = spline([
  [113, 128, 1],
  [124, 144],
  [140, 150],
  [156, 147],
  [166.5, 136.5, 1],
  [175, 142],
  [181, 158],
  [184.5, 182],
  [182.5, 208],
  [175, 233],
  [161, 251],
  [145, 257],
  [130, 247],
  [119, 225],
  [110, 196],
  [106, 162],
])

/** "my Jewish gaberdine": the long plain coat, over his shoulders. */
export const SHYLOCK_BODY = spline([
  [-14, 336, 1],
  [-10, 292],
  [6, 256],
  [38, 226],
  [72, 212],
  [110, 216],
  [150, 212],
  [186, 226],
  [214, 260],
  [232, 298],
  [240, 336, 1],
])
/** The coat's front edge, falling from under the beard. */
const FRONT_EDGE = 'M170 246C178 272 186 302 190 336'
/** The kit's small ruff, at the back of the neck above the coat; the beard covers its front. */
const RUFF = ruffBand(62, 134, 206, 226, 6, 0.04)

type Marks = {
  hair: string
  beard: string
  moustache: string
  brows: string
  lines: string
  neck: string
  body: string
}

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)

  // Grey hair combed back round the head: ink locks on paper, denser than a
  // white head's, so it reads as grey.
  const hair = locks(
    seed + 1,
    38,
    (t) => [134 - t * 88, 62 + t * 4],
    (t) => [94 - t * 34, 118 + t * 62],
    [0.8, 1.3],
    -8,
  )

  // The grey beard in long locks, falling from the jaw and from under the lip.
  const beard =
    locks(
      seed + 2,
      20,
      (t) => [118 + t * 58, 150 - t * 4],
      (t) => [128 + t * 44, 214 + Math.sin(Math.PI * t) * 40],
      [0.9, 1.5],
      2,
      1.4,
    ) +
    locks(
      seed + 3,
      9,
      (t) => [112 + t * 18, 134 + t * 14],
      (t) => [116 + t * 14, 196 + t * 26],
      [0.8, 1.2],
      -3,
    )

  // The moustache, falling from under the nose into the beard.
  const moustache =
    'M168 139Q176 142 178.5 152M165.5 141Q172 146 173 156M163 142Q167 149 167 158' +
    'M160 144Q162 150 161 157'

  // Grey brows, level: short strokes over the eye.
  let brows = ''
  for (let i = 0; i < 13; i++) {
    const x = 143.5 + i * 1.8 + between(r, -0.5, 0.5)
    const y = 87.5 + between(r, -0.6, 0.6)
    brows += `M${n(x)} ${n(y)}l${n(between(r, 2.5, 4))} ${n(between(r, -2, 0.4))}`
  }

  // The lines of age: the forehead and the bare crown, crow's feet, the cheek.
  let lines = 'M140 58Q150 55 160 59M139 66Q149 63.5 162 68M141 74Q151 72 163 76'
  for (let i = 0; i < 3; i++)
    lines += `M${n(145)} ${n(101 + i * 3)}L${n(136 - between(r, 0, 3))} ${n(98 + i * 4.5)}`
  for (let rad = 12; rad < 22; rad += 3.4)
    lines += arcDashes(r, 150, 118, rad, deg(80), deg(140), [8, 16], [2, 5])

  const neck = neckShade(seed + 4)
  const body = folds(seed + 5, [14, 160], [250, 270], 7)

  const m = { hair, beard, moustache, brows, lines, neck, body }
  marksBySeed.set(seed, m)
  return m
}

/** Shylock in his gaberdine, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function ShylockFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const clip = `${uid}-shy-head-${seed}`
  const hairClip = `${uid}-shy-hair-${seed}`
  const beardClip = `${uid}-shy-beard-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={MAN_HEAD} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
        <clipPath id={beardClip}>
          <path d={BEARD} />
        </clipPath>
      </defs>
      <path d={SHYLOCK_BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <path d={FRONT_EDGE} fill="none" stroke={PAPER} strokeWidth={LINE.bold} />
      <path d={MAN_HEAD} fill={PAPER} />
      <g clipPath={`url(#${clip})`} fill="none" stroke={INK}>
        <path d={m.lines} strokeWidth={LINE.hairline} />
        <path d={m.neck} strokeWidth={1.3} />
      </g>
      {/* grey hair, cut as Leonato's white hair is, but denser */}
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.hair} fill={INK} />
      </g>
      <path d={RUFF.ruff} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={RUFF.pleats} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      <path d={MAN_EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.4} />
      <path d={MAN_EAR.curl} fill="none" stroke={INK} strokeWidth={1.5} />
      <path d={BEARD} fill={PAPER} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
      <g clipPath={`url(#${beardClip})`}>
        <path d={m.beard} fill={INK} />
      </g>
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d={m.moustache} strokeWidth={1.2} />
        {/* the nostril */}
        <path d="M172.5 128C168.5 125.5 168.5 120 174 119" strokeWidth={1.5} />
        <path d={m.brows} strokeWidth={1.3} />
        <path d="M143 89.5Q153 87 166 89.5" strokeWidth={1.4} />
      </g>
      {/* "Hath not a Jew eyes?": the eye open, level and steady */}
      <ManEye look="open" />
    </g>
  )
}

/** A thick ink halo round head, hair, beard and coat. */
export function ShylockKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={MAN_HEAD} />
      <path d={HAIR} />
      <path d={BEARD} />
      <path d={SHYLOCK_BODY} />
    </g>
  )
}

const P = placing(34, 0, 1.0)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // A street in Venice by day, the light ahead of him.
  ground = portraitGround('shylock', 4110, (x, y) =>
    clamp(0.12 + ((x - 40) / 280) * 0.88 - (y / PH) * 0.1),
  )
  return ground
}

function ShylockPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <ShylockKnockout />
        <ShylockFigure uid={uid} seed={4101} />
      </g>
      <PortraitRule />
    </>
  )
}

export const shylockPortrait: LinocutArt = { width: PW, height: PH, Draw: ShylockPortrait }

const COAT_AT = P.to(56, 288)
const BEARD_AT = P.to(160, 222)
const HAIR_AT = P.to(66, 132)
const EYE_AT = P.to(...MAN_EYE)

export const shylock: Portrait = {
  name: 'Shylock',
  art: shylockPortrait,
  alt: 'A linocut portrait of Shylock in profile, facing right: an old man standing upright with his head level and his eye open and steady under a level grey brow. His crown is bare and lined, and grey hair is combed back round the back of his head from the temple to the nape. A full, rounded grey beard falls in long locks from his jaw to his chest, with a grey moustache over his lip. A small white ruff shows at the back of his neck above a long plain dark coat, his gaberdine. His hands are not in the picture, and nothing is on his coat. Four numbered red markers point to his coat, his beard, his grey hair and his eye.',
  describedBy: [
    { phrase: 'my Jewish gaberdine', at: [COAT_AT[0] - 4, COAT_AT[1] - 50], to: COAT_AT },
    { phrase: 'upon my beard', at: [BEARD_AT[0] + 60, BEARD_AT[1] + 26], to: BEARD_AT },
    { phrase: 'old Shylock', at: [HAIR_AT[0] - 50, HAIR_AT[1] - 44], to: HAIR_AT },
    { phrase: 'Hath not a Jew eyes?', at: [EYE_AT[0] + 60, EYE_AT[1] - 50], to: EYE_AT },
  ],
  where: 'Act 1, Scene 3; Act 2, Scene 5; Act 3, Scene 1',
  note: 'Almost everything Shylock says about his own appearance comes in a list of injuries: his gaberdine and his beard are named as the places Antonio spat. In Act 3, Scene 1 he turns from what has been done to him to what he shares with everyone, beginning with his eyes.',
  artNote:
    'The play never says how Shylock looks different from the Venetians around him: at the trial Portia has to ask which is the merchant and which the Jew. So his face is cut as every man’s is in these prints, and the beard, the coat and his age are his own words.',
}
