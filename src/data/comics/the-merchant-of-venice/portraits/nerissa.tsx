import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, gouge, n, rng } from '@/components/comics/linocut/carve'

import {
  folds,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  WOMAN_HEAD,
  WomanFace,
  WomanNeckShadow,
} from './common'

/**
 * Nerissa, Portia's waiting-woman, from the three places the play says
 * anything about her:
 *
 *   "Enter Portia with her waiting-woman Nerissa." (Act 1, Scene 2)
 *   GRATIANO: "I got a promise of this fair one here To have her love"
 *   (Act 3, Scene 2)
 *   GRATIANO, of the lawyer's clerk he gave her ring to: "A kind of boy, a
 *   little scrubbed boy, No higher than thyself" (Act 5, Scene 1)
 *
 * The clerk was Nerissa in disguise, so Gratiano, without knowing it, says
 * she is small. So: a young woman set low and small in the block, her eye
 * open and her head up, in the plain linen coif and plain dark gown of a
 * waiting-woman. Nothing else is said of her looks.
 *
 * She is drawn as the figure kit draws her (../panels/people.tsx): a plain
 * gown and a linen coif, so she is told from Portia at a glance, and her
 * head is every woman's head in these portraits (WOMAN_HEAD). The coif is
 * the kit's, cut here in PAPER as linen is, with its folds and turned-back
 * edge in ink. There is no red in this plate.
 *
 * Seeds: 4501 (the figure), 4502 to 4503 (its marks), 4510 (the ground).
 */

/**
 * The linen coif: over the crown, round the back of the head and down to
 * the shoulders, framing the face from the brow past the ear to the jaw.
 * The kit's COIF, drawn at the portraits' size.
 */
const COIF =
  'M149.7 70C135.5 30.9 78.7 20.3 46.8 48.7C25.5 73.5 21.9 116.1 25.5 158.7' +
  'C27.2 187.1 21.9 208.4 7.7 226.2L78.7 226.2C82.3 208.4 85.8 197.8 92.9 190.7L121.3 187.1' +
  'C107.1 172.9 100 144.5 105.3 112.6C110.7 87.7 128.4 73.5 149.7 70Z'
/** Its turned-back edge round the face, a band of linen. */
const COIF_EDGE = 'M149.7 70C128.4 73.5 110.7 87.7 105.3 112.6C100 144.5 107.1 172.9 121.3 187.1'
const COIF_EDGE_IN = 'M146 78C129 82 117 94 113.5 114C110 142 116 166 126 180'

/** Her shoulders in a plain dark gown. */
export const NERISSA_BODY = spline([
  [-4, 336, 1],
  [2, 298],
  [20, 266],
  [52, 242],
  [84, 230],
  [114, 234],
  [142, 228],
  [168, 240],
  [190, 264],
  [204, 298],
  [210, 336, 1],
])
/** A plain linen collar at the neck of the gown. */
const COLLAR = spline([
  [80, 226, 1],
  [112, 232],
  [146, 224, 1],
  [156, 236],
  [114, 246],
  [76, 240, 1],
])

type Marks = { folds: string; body: string }

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)

  // Folds in the linen: gathered at the back of the head, where the coif
  // is drawn in, and fanning out from there towards the face and the crown,
  // as cloth does and hair does not; and a few falling behind the neck.
  let fl = ''
  const gx = 44
  const gy = 132
  for (let i = 0; i < 9; i++) {
    const a = -1.25 + (i / 8) * 1.7 + (r() - 0.5) * 0.12
    const len = 26 + r() * 20
    const x1 = gx + Math.cos(a) * 12
    const y1 = gy + Math.sin(a) * 12
    const x2 = gx + Math.cos(a) * (12 + len)
    const y2 = gy + Math.sin(a) * (12 + len)
    fl += `M${n(x1)} ${n(y1)}Q${n((x1 + x2) / 2 + 3)} ${n((y1 + y2) / 2 - 3)} ${n(x2)} ${n(y2)}`
  }
  // the seam over the crown, from the brow to the gather
  fl += 'M128 44Q84 36 52 70Q40 96 42 120'
  for (let i = 0; i < 4; i++) {
    const x = 30 + i * 13
    fl += `M${n(x + 6)} 168Q${n(x)} 196 ${n(x - 6)} 222`
  }
  // the side of the coif away from the light, shaded in short rows
  for (let y = 44; y < 226; y += 4.6) {
    const w = 10 + Math.sin(((y - 44) / 182) * Math.PI) * 10 + r() * 4
    fl += `M${n(14)} ${n(y)}L${n(14 + w)} ${n(y + 1.2)}`
  }

  const body = folds(seed + 1, [20, 180], [264, 280], 6) + gouge(40, 256, 30, 330, 1.2, 1)

  const m = { folds: fl, body }
  marksBySeed.set(seed, m)
  return m
}

/** Nerissa, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function NerissaFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const coifClip = `${uid}-ner-coif-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={coifClip}>
          <path d={COIF} />
        </clipPath>
      </defs>
      <path d={NERISSA_BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <path d={WOMAN_HEAD} fill={PAPER} />
      <WomanNeckShadow id={`${uid}-ner-${seed}`} />
      <path d={COLLAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      {/* "her waiting-woman": the plain linen coif */}
      <path d={COIF} fill={PAPER} stroke={INK} strokeWidth={1.5} strokeLinejoin="round" />
      <g clipPath={`url(#${coifClip})`}>
        <path d={m.folds} fill="none" stroke={INK} strokeWidth={LINE.fine} strokeLinecap="round" />
      </g>
      <path d={COIF_EDGE} fill="none" stroke={INK} strokeWidth={2} strokeLinecap="round" />
      <path d={COIF_EDGE_IN} fill="none" stroke={INK} strokeWidth={1.1} strokeLinecap="round" />
      <WomanFace eye="open" />
    </g>
  )
}

/** A thick ink halo round head, coif and shoulders. */
export function NerissaKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={WOMAN_HEAD} />
      <path d={COIF} />
      <path d={NERISSA_BODY} />
    </g>
  )
}

/** Small in the block: "No higher than thyself". */
const P = placing(40, 46, 0.86)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // Belmont by day, the light ahead of her.
  ground = portraitGround('nerissa', 4510, (x, y) =>
    clamp(0.12 + ((x - 40) / 280) * 0.88 - (y / PH) * 0.1),
  )
  return ground
}

function NerissaPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <NerissaKnockout />
        <NerissaFigure uid={uid} seed={4501} />
      </g>
      <PortraitRule />
    </>
  )
}

export const nerissaPortrait: LinocutArt = { width: PW, height: PH, Draw: NerissaPortrait }

const COIF_AT = P.to(56, 120)
const FACE_AT = P.to(140, 146)
const TOP_AT = P.to(96, 26)

export const nerissa: Portrait = {
  name: 'Nerissa',
  art: nerissaPortrait,
  alt: 'A linocut portrait of Nerissa in profile, facing right, set low and small in the block with a band of cut ground above her head. She is a young woman with her head up and her eye open, in a plain white linen coif that covers her hair and ears, frames her face with a turned-back edge and falls behind her neck to her shoulders. She wears a plain dark gown with a plain white collar. Three numbered red markers point to her coif, her cheek and the top of her head.',
  describedBy: [
    { phrase: 'her waiting-woman', at: [COIF_AT[0] - 12, COIF_AT[1] + 70], to: COIF_AT },
    { phrase: 'this fair one here', at: [FACE_AT[0] + 58, FACE_AT[1] + 56], to: FACE_AT },
    { phrase: 'No higher than thyself', at: [TOP_AT[0] + 70, TOP_AT[1] - 14], to: TOP_AT },
  ],
  where: 'Act 1, Scene 2; Act 3, Scene 2; Act 5, Scene 1',
  note: 'Nerissa follows Portia into marriage, into disguise and into the ring trick. In Act 5 Gratiano tells her the clerk he gave her ring to was no taller than she is, without knowing that the clerk was Nerissa herself.',
  artNote:
    'The play does not describe her. She wears the linen coif the panels give her, the plain dress of a waiting-woman of the time, and is set small in the block because of Gratiano’s words.',
}
