import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rng } from '@/components/comics/linocut/carve'

import {
  locks,
  MAN_CHEEK,
  MAN_EAR,
  MAN_HEAD,
  ManBrow,
  ManEye,
  ManNoseAndMouth,
  NeckShadow,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
} from './common'

/**
 * The Prince of Morocco, at Belmont in Act 2, Scene 1, from the stage
 * direction that brings him on and his own first speeches:
 *
 *   "Enter the Prince of Morocco, a tawny Moor all in white, and three or
 *   four followers accordingly"
 *   "Mislike me not for my complexion, The shadowed livery of the burnish'd
 *   sun, To whom I am a neighbour, and near bred."
 *   "By this scimitar That slew the Sophy and a Persian prince"
 *
 * So: a prince standing tall, his head high and his eye level, in a long
 * white robe with a sash at the waist, and the hilt of a scimitar at his hip,
 * sheathed. He speaks of his complexion with pride and asks Portia not to
 * judge him by it; the portrait draws him with the same care and the same
 * dignity as every other suitor, and nothing in it is caricature.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): all in
 * white, the one figure in the play whose robe is cut in PAPER, with a plain
 * paper circlet for a prince, dark hair swept back, and a curved scimitar
 * sheathed at his side. His head is every man's head (MAN_HEAD). Every face
 * in these prints is cut the same way from the same block, his as much as
 * Portia's or Antonio's, as the kit's docblock sets out, so the complexion he
 * names is left to his own proud words, and the card says so. Portia's line
 * about his complexion after he has gone is never a caption here. There is no
 * red in this plate.
 *
 * Drawn a little smaller in the block than the others, to the waist, so the
 * scimitar's hilt at his hip is in the picture.
 *
 * Seeds: 5101 (the figure), 5102 to 5104 (its marks), 5110 (the ground).
 */

/** His head is up a little: "this aspect of mine Hath fear'd the valiant". */
const LIFT = 'rotate(-4 112 214)'

/** Dark hair swept back from the brow over the crown to the nape. */
const HAIR = spline([
  [159, 62, 1],
  [150, 66],
  [133, 70],
  [119, 80],
  [112, 96, 1],
  [100, 100],
  [92, 110],
  [86, 126],
  [80, 146, 1],
  [68, 136],
  [56, 146, 1],
  [46, 126],
  [40, 100],
  [44, 70],
  [64, 42],
  [96, 28],
  [130, 27],
  [153, 38],
  [163, 52],
])
/**
 * A plain circlet round the head, the kit's CIRCLET seen from the side: a
 * narrow band from above the brow round to the back of the head, with three
 * low points along its top.
 */
const CIRCLET =
  'M44 86L43 74L63 70.6L71 61.5L79 69.2L97 66L105 56.4L113 64.6L131 61.6L139 52L147 60.2L165 56.8' +
  'L166 67.4Q104 74 44 86Z'

/** The long white robe, over his shoulders and down to below the block. */
export const MOROCCO_BODY = spline([
  [-14, 420, 1],
  [-12, 330],
  [-4, 280],
  [20, 244],
  [56, 220],
  [96, 214],
  [132, 216],
  [170, 222],
  [204, 246],
  [228, 286],
  [238, 340],
  [242, 420, 1],
])
/** The round neck of the robe, and its front opening falling from it. */
const NECK = 'M86 214Q112 232 142 216'
const FRONT = 'M150 222Q170 286 176 420'
/** The sash at the waist, and its knot. */
const SASH = spline([
  [-12, 340, 1],
  [60, 332],
  [150, 330],
  [240, 334, 1],
  [242, 360, 1],
  [150, 356],
  [60, 358],
  [-12, 366, 1],
])
/**
 * "By this scimitar": its hilt at his hip, sheathed, the grip rising forward
 * out of the sash, with a cross guard and a round pommel; the scabbard's
 * mouth shows below the sash, curving back.
 */
const GRIP = 'M186 334L224 298L232 306L194 342Z'
const GUARD = 'M170 316Q182 332 204 350L198 356Q176 338 164 322Z'
const POMMEL_C: [number, number] = [230, 300]
const SCABBARD = 'M178 340C170 360 150 380 118 396L122 420C154 402 180 380 194 352Z'

type Marks = { hair: string; folds: string; sash: string }

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)
  const hair = locks(
    seed + 1,
    18,
    (t) => [158 - t * 44, 46 + t * 34],
    (t) => [70 - t * 20, 40 + t * 92],
    [0.9, 1.5],
    -9,
  )
  // Folds in the white robe, cut in ink: from the shoulders down, gathered
  // into the sash, and falling again below it.
  let folds = ''
  for (let i = 0; i < 9; i++) {
    const x = between(r, 4, 226)
    if (x > 140 && x < 168) continue
    folds += `M${n(x)} ${n(between(r, 246, 262))}Q${n(x + between(r, -6, 6))} 296 ${n(x * 0.9 + 12)} 332`
  }
  for (let i = 0; i < 6; i++) {
    const x = between(r, 6, 170)
    folds += `M${n(x)} 362Q${n(x - 4)} 392 ${n(x - 8)} 420`
  }
  folds += 'M20 256Q34 240 56 232M190 240Q210 256 222 278'
  // The sash's twist, cut in paper across the ink.
  let sash = ''
  for (let i = 0; i < 8; i++) {
    const x = 10 + i * 28 + between(r, -3, 3)
    sash += gouge(x, 356, x + 14, 336, 0.9, 1)
  }
  const m = { hair, folds, sash }
  marksBySeed.set(seed, m)
  return m
}

/** The Prince of Morocco, to the waist, facing right in a 0..240 by 0..420 frame. */
export function MoroccoFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const hairClip = `${uid}-mor-hair-${seed}`
  const robeClip = `${uid}-mor-robe-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
        <clipPath id={robeClip}>
          <path d={MOROCCO_BODY} />
        </clipPath>
      </defs>
      {/* "all in white": the robe cut in paper, its folds in ink */}
      <path d={MOROCCO_BODY} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <g clipPath={`url(#${robeClip})`}>
        <path d={m.folds} fill="none" stroke={INK} strokeWidth={LINE.fine} strokeLinecap="round" />
        <path d={FRONT} fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
        <path d={SCABBARD} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={SASH} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.sash} fill={PAPER} />
      </g>
      <path d={GUARD} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path d={GRIP} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <circle
        cx={POMMEL_C[0]}
        cy={POMMEL_C[1]}
        r={6}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.fine}
      />
      <g transform={LIFT}>
        <path d={MAN_HEAD} fill={PAPER} />
        <NeckShadow id={`${uid}-mor-${seed}`} />
        <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <g clipPath={`url(#${hairClip})`}>
          <path d={m.hair} fill={PAPER} />
        </g>
        <path d={MAN_EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.4} />
        <path d={MAN_EAR.curl} fill="none" stroke={INK} strokeWidth={1.5} />
        <path d={CIRCLET} fill={PAPER} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
        <ManNoseAndMouth />
        <ManBrow w={2.8} />
        <ManEye look="open" />
      </g>
      <path d={NECK} fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
    </g>
  )
}

/** A thick ink halo round head, robe and hilt, to lift the white robe off the ground. */
export function MoroccoKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={10} strokeLinejoin="round">
      <g transform={LIFT}>
        <path d={MAN_HEAD} />
        <path d={HAIR} />
        <path d={CIRCLET} />
      </g>
      <path d={MOROCCO_BODY} />
      <path d={GRIP} />
    </g>
  )
}

const P = placing(44, 16, 0.78)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // A room at Belmont by day, the light ahead of him.
  ground = portraitGround('morocco', 5110, (x, y) =>
    clamp(0.1 + ((x - 40) / 280) * 0.84 - (y / PH) * 0.1),
  )
  return ground
}

function MoroccoPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <MoroccoKnockout />
        <MoroccoFigure uid={uid} seed={5101} />
      </g>
      <PortraitRule />
    </>
  )
}

export const moroccoPortrait: LinocutArt = { width: PW, height: PH, Draw: MoroccoPortrait }

/** A point on the lifted head, carried into the portrait. */
function onHead(x: number, y: number): [number, number] {
  const a = (-4 * Math.PI) / 180
  const dx = x - 112
  const dy = y - 214
  return P.to(112 + dx * Math.cos(a) - dy * Math.sin(a), 214 + dx * Math.sin(a) + dy * Math.cos(a))
}
const ROBE_AT = P.to(70, 280)
const FACE_AT = onHead(MAN_CHEEK[0], MAN_CHEEK[1])
const HILT_AT = P.to(212, 318)

export const thePrinceOfMorocco: Portrait = {
  name: 'The Prince of Morocco',
  art: moroccoPortrait,
  alt: 'A linocut portrait of the Prince of Morocco in profile, facing right, drawn to the waist: a tall, clean-shaven man with his head held high and his eye open and level under a dark brow. His dark hair is swept back from his brow, and a plain pale circlet with three low points runs round his head above the brow. He wears a long white robe with a round neck, its folds cut in fine dark lines, and a dark sash at the waist, and the hilt of a scimitar, with a cross guard and a round pommel, rises from the sash at his hip, its dark scabbard curving back below. Three numbered red markers point to his white robe, his face and the hilt of the scimitar.',
  describedBy: [
    { phrase: 'all in white', at: [ROBE_AT[0] - 30, ROBE_AT[1] - 36], to: ROBE_AT },
    {
      phrase: 'The shadowed livery of the burnish’d sun',
      at: [FACE_AT[0] - 24, FACE_AT[1] + 62],
      to: FACE_AT,
    },
    { phrase: 'By this scimitar', at: [HILT_AT[0] + 50, HILT_AT[1] - 30], to: HILT_AT },
  ],
  where: 'Act 2, Scene 1',
  note: 'The Prince asks Portia not to dislike him for his complexion, and speaks of it with pride. She answers him courteously to his face; what she says after he has gone shows that prejudice lives at Belmont as well as in Venice.',
  artNote:
    'Every face in these prints is cut the same way, from the same block, so the complexion he names with pride is left to his own words. His white robe and scimitar are the play’s; the plain circlet is how the panels mark him as a prince.',
}
