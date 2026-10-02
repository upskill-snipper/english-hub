import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, type Pt } from '@/components/comics/linocut/carve'

import {
  Buttons,
  folds,
  locks,
  MAN_EAR,
  MAN_EYE,
  MAN_HEAD,
  ManBrow,
  ManEye,
  ManNoseAndMouth,
  NeckShadow,
  onTurnedHead,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  ruffBand,
  spline,
  turn,
} from './common'

/**
 * Ferdinand, as Prospero shows him to Miranda in Act 1, Scene 2, when he
 * comes up from the shore after Ariel's music, weeping for his father:
 *
 *   "This gallant which thou seest Was in the wrack; and, but he's something
 *   stain'd With grief ... thou mightst call him A goodly person"
 *
 * So: a young man, finely dressed, his head bowed a little and his eye
 * lowered with grief, his face open and unmarked. Ariel brought him ashore
 * with his garments "fresher than before" (Act 1, Scene 2), so his dress is
 * whole and fine. Nothing else of his looks is given.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): beardless,
 * his dark hair to the jaw and swept back from the brow, its strands cut in
 * paper, his ear clear of it; the small ruff every gentleman in the kit
 * wears, a doublet buttoned down the front and a short cloak over the far
 * shoulder. (The kit's FERDINAND_HAIR, carried to this size point for point,
 * left a band of bare skin between the hair and the ear and read as a hood,
 * as Caliban's did; so it is cut as a man's hair at this size, with a
 * sideburn and an edge that rises from the nape to the ear, and kept shorter
 * and smoother than Caliban's, swept back.) His head is every man's head
 * (MAN_HEAD). There is no red in this plate.
 *
 * Seeds: 6801 (the figure), 6802 to 6804 (its marks), 6810 (the ground).
 */

/** His head is bowed a little in grief. */
const ROT = 5

/** Dark hair swept back from the brow, to the jaw at the back, the ear clear. In the head's frame. */
const HAIR = spline([
  [161, 61, 1],
  [157, 45],
  [141, 30],
  [116, 22],
  [90, 24],
  [66, 32],
  [48, 48],
  [38, 70],
  [35, 98],
  [36, 126],
  [41, 150],
  [47, 168],
  [53, 182],
  [61, 176],
  [69, 184],
  [77, 174],
  [86, 164],
  [93, 151, 1],
  [92, 132],
  [94, 112],
  [102, 102],
  [114, 100],
  [120, 106],
  [122, 118],
  [123, 126, 1],
  [129, 122],
  [130, 106],
  [136, 88],
  [146, 74],
  [155, 67],
])

/** His shoulders in a doublet. */
const BODY = spline([
  [-10, 336, 1],
  [-4, 296],
  [14, 262],
  [44, 234],
  [76, 220],
  [112, 226],
  [146, 220],
  [176, 232],
  [202, 258],
  [220, 294],
  [230, 336, 1],
])
/** The short cloak over the far shoulder. */
const CLOAK = spline([
  [-10, 336, 1],
  [-6, 300],
  [8, 266],
  [36, 238],
  [70, 222],
  [96, 226],
  [86, 252],
  [80, 290],
  [80, 336, 1],
])
const RUFF = ruffBand(74, 152, 204, 226, 6, 0.06)
const BUTTONS: Pt[] = [
  [182, 248],
  [187, 264],
  [192, 280],
  [196, 296],
  [200, 312],
  [203, 328],
]

type Marks = { hair: string; body: string; cloak: string }

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  // Strands cut in paper, swept back from the brow over the crown and down
  // to the jaw.
  const hair =
    locks(
      seed + 1,
      20,
      (t) => [158 - t * 116, 52 - t * 22 + t * t * 40],
      (t) => [92 - t * 40, 148 + t * 34],
      [0.9, 1.6],
      -12,
    ) +
    locks(
      seed + 2,
      3,
      (t) => [134 - t * 6, 92 + t * 6],
      (t) => [126 - t * 2, 120 + t * 4],
      [0.8, 1.1],
      -1,
    )
  const body = folds(seed + 3, [104, 178], [256, 272], 4)
  const cloak = folds(seed + 4, [4, 74], [258, 280], 5)
  const m = { hair, body, cloak }
  marksBySeed.set(seed, m)
  return m
}

/** Ferdinand, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function FerdinandFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const hairClip = `${uid}-fer-hair-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
      </defs>
      {/* "This gallant": a doublet, a ruff and a short cloak, whole and fine */}
      <path d={BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <Buttons pts={BUTTONS} r={2.8} />
      <path d={CLOAK} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.cloak} fill={PAPER} />
      <g transform={turn(ROT)}>
        <path d={MAN_HEAD} fill={PAPER} />
        <NeckShadow id={`${uid}-fer-${seed}`} />
        <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <g clipPath={`url(#${hairClip})`}>
          <path d={m.hair} fill={PAPER} />
        </g>
        <path d={MAN_EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.4} />
        <path d={MAN_EAR.curl} fill="none" stroke={INK} strokeWidth={1.5} />
        {/* "A goodly person": a young face, open and unmarked */}
        <ManNoseAndMouth />
        <ManBrow w={2.6} raise={0.5} />
        {/* "something stain'd With grief": the eye lowered */}
        <ManEye look="down" />
      </g>
      <path d={RUFF.ruff} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={RUFF.pleats} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
    </g>
  )
}

/** A thick ink halo round head, hair and shoulders. */
export function FerdinandKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <g transform={turn(ROT)}>
        <path d={MAN_HEAD} />
        <path d={HAIR} />
      </g>
      <path d={BODY} />
    </g>
  )
}

const P = placing(36, 36, 0.88)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // The rise before the cell, up from the shore: the light ahead of him.
  ground = portraitGround('tempest-ferdinand', 6810, (x, y) =>
    clamp(0.12 + ((x - 40) / 280) * 0.84 - (y / PH) * 0.1),
  )
  return ground
}

function FerdinandPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <FerdinandKnockout />
        <FerdinandFigure uid={uid} seed={6801} />
      </g>
      <PortraitRule />
    </>
  )
}

export const ferdinandPortrait: LinocutArt = { width: PW, height: PH, Draw: FerdinandPortrait }

const RUFF_AT = P.to(184, 262)
const EYE_AT = onTurnedHead(P, ROT, MAN_EYE[0], MAN_EYE[1] + 1)
/*
 * Marker lines on a face never cross a mouth, a chin or a beard: a red line
 * there reads as blood at a glance. A line to the cheek comes from behind
 * the head or from straight below the cheek, never across the lips.
 */
const FACE_AT = onTurnedHead(P, ROT, 138, 124)

export const ferdinand: Portrait = {
  name: 'Ferdinand',
  art: ferdinandPortrait,
  alt: 'A linocut portrait of Ferdinand in profile, facing right: a young, beardless man with his head bowed a little and his eye lowered in grief, his face smooth and unmarked. His dark hair is swept back from his brow over his head and falls to his jaw behind his ear, its strands cut in white. He wears a small white ruff, a dark doublet with a row of pale buttons down the front, and a short dark cloak over his far shoulder. Three numbered red markers point to his doublet, his lowered eye and his face.',
  describedBy: [
    { phrase: 'This gallant', at: [RUFF_AT[0] + 54, RUFF_AT[1] - 26], to: RUFF_AT },
    { phrase: 'something stain’d With grief', at: [EYE_AT[0] + 66, EYE_AT[1] - 34], to: EYE_AT },
    { phrase: 'A goodly person', at: [FACE_AT[0] - 92, FACE_AT[1] + 6], to: FACE_AT },
  ],
  where: 'Act 1, Scene 2',
  note: 'Prospero shows Ferdinand to Miranda as he comes up from the shore, grieving for the father he thinks has drowned. Miranda has seen only two men before, and takes him for a spirit, then for something divine.',
  artNote:
    'The play does not describe his face. His dark hair, ruff, doublet and cloak are how the panels draw him, in the dress of a young gentleman of the time.',
}
