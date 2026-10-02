import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, gouge } from '@/components/comics/linocut/carve'

import {
  folds,
  locks,
  onTurnedHead,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  Tear,
  turn,
  WOMAN_EAR,
  WOMAN_EYE,
  WOMAN_HEAD,
  WomanFace,
  WomanNeckShadow,
} from './common'

/**
 * Miranda, in Act 1, Scene 2, from what is said to her and by her there:
 *
 *   MIRANDA: "O! I have suffered With those that I saw suffer!" (of the ship
 *   she watched go down)
 *   PROSPERO: "Wipe thou thine eyes; have comfort." ... "The fringed curtains
 *   of thine eye advance, And say what thou seest yond."
 *   FERDINAND: "O you wonder! If you be maid or no?"
 *
 * So: a girl with her head lifted, looking up and out, the lashes of her eye
 * lifted with it, and a tear on her cheek from the wreck she thinks has
 * drowned everyone aboard. "The fringed curtains of thine eye" is
 * Prospero's way of saying her eyelids and lashes, so the lashes are cut.
 * Nothing else of her looks is given.
 *
 * She is drawn as the figure kit draws her (../panels/people.tsx): about
 * fifteen ("thou wast not Out three years old" twelve years before), her
 * dark hair long and loose down her back, a little waved, its strands cut in
 * paper, and one lock falling forward over her shoulder, cut free of her gown
 * by a paper edge; a plain gown. Her head is every woman's head in these
 * portraits (WOMAN_HEAD). The tear is cut as the panel of this scene cuts it.
 * There is no red in this plate: the kit puts a flush on the cheek, and at
 * this size a red stroke on a weeping face could be taken for a hurt.
 *
 * She faces left, as she looks up at Ferdinand in the panels, so the figure is
 * drawn facing right and flipped.
 *
 * Seeds: 6201 (the figure), 6202 to 6205 (its marks), 6210 (the ground).
 */

/** Her head is lifted: "advance" her eyelids, and look. */
const ROT = -6

/** Long dark hair, drawn back from the brow over the crown and falling loose down her back. */
const HAIR = spline([
  [161, 60, 1],
  [149, 55],
  [132, 57],
  [118, 69],
  [109, 90, 1],
  [97, 101],
  [90, 120],
  [87, 152],
  [84, 198],
  [82, 252],
  [78, 336, 1],
  [8, 336, 1],
  [18, 284],
  [24, 228],
  [30, 168],
  [36, 112],
  [46, 72],
  [68, 43],
  [99, 28],
  [133, 27],
  [153, 37],
])

/** The lock falling forward over her shoulder and down the front of her gown. */
const LOCK = spline([
  [104, 150, 1],
  [116, 176],
  [128, 210],
  [140, 248],
  [146, 290],
  [148, 336, 1],
  [124, 336, 1],
  [122, 296],
  [116, 256],
  [104, 218],
  [96, 186],
])

/** Her shoulders in a plain gown. */
const BODY = spline([
  [-4, 336, 1],
  [2, 300],
  [20, 268],
  [52, 244],
  [84, 232],
  [114, 236],
  [142, 230],
  [168, 242],
  [190, 266],
  [204, 300],
  [210, 336, 1],
])
/** A plain edge at the neck of the gown. */
const NECK_EDGE = spline([
  [84, 230, 1],
  [114, 236],
  [146, 228, 1],
  [152, 238],
  [114, 246],
  [82, 240, 1],
])

/**
 * "The fringed curtains of thine eye": the lashes of her upper lid, short
 * strokes standing forward from it, on WomanFace's open eye.
 */
const LASHES =
  'M159.6 93.2L163.8 90.6M157.6 92L161 88.4M155.2 91.2L157.6 87.2M152.6 91L154 86.8M150 91.4L150.6 87.4'

/**
 * Where the tear sits on her cheek, below the outer corner of the eye and
 * well back from the nose, so it is never taken for anything but a tear.
 */
const TEAR_AT: [number, number] = [141, 125]

type Marks = { hair: string; lock: string; body: string }

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  // Strands cut in paper: back over the crown from the brow, then falling
  // long and loose down her back, a little waved.
  const hair =
    locks(
      seed + 1,
      18,
      (t) =>
        t < 0.35
          ? [134 + (t / 0.35) * 25, 30 + (t / 0.35) * 30]
          : [159 - ((t - 0.35) / 0.65) * 48, 60 + ((t - 0.35) / 0.65) * 32],
      (t) => [78 - t * 32, 38 + t * 84],
      [0.9, 1.5],
      -6,
    ) +
    locks(
      seed + 2,
      14,
      (t) => [42 + t * 42, 118 + t * 4],
      (t) => [14 + t * 56, 334],
      [0.9, 1.5],
      -4,
      3,
    )
  const lock = locks(
    seed + 3,
    7,
    (t) => [102 + t * 8, 160 + t * 6],
    (t) => [128 + t * 16, 334],
    [0.9, 1.3],
    -6,
    2,
  )
  const body = folds(seed + 4, [96, 190], [270, 290], 5) + gouge(152, 252, 168, 334, 1.2, -1)
  const m = { hair, lock, body }
  marksBySeed.set(seed, m)
  return m
}

/** Miranda, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function MirandaFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const hairClip = `${uid}-mir-hair-${seed}`
  const lockClip = `${uid}-mir-lock-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
        <clipPath id={lockClip}>
          <path d={LOCK} />
        </clipPath>
      </defs>
      <path d={BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <path
        d={NECK_EDGE}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.fine}
        strokeLinejoin="round"
      />
      <g transform={turn(ROT)}>
        <path d={WOMAN_HEAD} fill={PAPER} />
        <WomanNeckShadow id={`${uid}-mir-${seed}`} />
        {/* the hair over the crown and down her back, over the head and the gown */}
        <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <g clipPath={`url(#${hairClip})`}>
          <path d={m.hair} fill={PAPER} />
        </g>
        <path d={WOMAN_EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.3} />
        <path d={WOMAN_EAR.curl} fill="none" stroke={INK} strokeWidth={1.4} />
        <WomanFace eye="open" />
        <path d={LASHES} fill="none" stroke={INK} strokeWidth={1.05} strokeLinecap="round" />
        {/* "I have suffered With those that I saw suffer": a tear on her cheek */}
        <Tear x={TEAR_AT[0]} y={TEAR_AT[1]} s={0.95} track={12} />
      </g>
      {/* the lock forward over her shoulder, cut free of the gown by a paper edge */}
      <path d={LOCK} fill={INK} stroke={PAPER} strokeWidth={2.4} strokeLinejoin="round" />
      <g clipPath={`url(#${lockClip})`}>
        <path d={m.lock} fill={PAPER} />
      </g>
    </g>
  )
}

/** A thick ink halo round head, hair and shoulders. */
export function MirandaKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <g transform={turn(ROT)}>
        <path d={HAIR} />
        <path d={WOMAN_HEAD} />
      </g>
      <path d={BODY} />
    </g>
  )
}

const P = placing(46, 28, 0.9, true)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // The ground before the cell, the light ahead of her, to the left, where
  // she looks.
  ground = portraitGround('tempest-miranda', 6210, (x, y) =>
    clamp(0.08 + ((PW - x - 50) / 280) * 0.8 - (y / PH) * 0.12),
  )
  return ground
}

function MirandaPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <MirandaKnockout />
        <MirandaFigure uid={uid} seed={6201} />
      </g>
      <PortraitRule />
    </>
  )
}

export const mirandaPortrait: LinocutArt = { width: PW, height: PH, Draw: MirandaPortrait }

const FACE_AT = onTurnedHead(P, ROT, 138, 64)
const EYE_AT = onTurnedHead(P, ROT, WOMAN_EYE[0] + 2, WOMAN_EYE[1] - 6)
/*
 * Marker lines on a face never cross a mouth, a chin or a beard: a red line
 * there reads as blood at a glance. A line to the cheek comes from behind
 * and above the head, over the hair, never across the lips.
 *
 * REVIEWED 2 October 2026. The tear's marker first came from straight below
 * it, so a red line ran from the tear down her cheek, over the jaw and down
 * her neck: at a glance, a tear of blood. It comes down from behind her head
 * now, over the hair and above the ear, and stops at the tear, so nothing red
 * runs below it.
 */
const TEAR_MARK = onTurnedHead(P, ROT, TEAR_AT[0], TEAR_AT[1] + 4)

export const miranda: Portrait = {
  name: 'Miranda',
  art: mirandaPortrait,
  alt: 'A linocut portrait of Miranda in profile, facing left: a girl of about fifteen with her head lifted, looking up and out, the lashes of her upper eyelid cut as short fine strokes. A single tear runs down her cheek below her eye. Her long dark hair is drawn back from her brow over her head and falls loose and a little waved down her back, its strands cut in white, and one long lock falls forward over her shoulder and down the front of her plain dark gown, which has a plain white edge at the neck. Three numbered red markers point to her face, her eyelashes and the tear.',
  describedBy: [
    { phrase: 'O you wonder!', at: [FACE_AT[0] - 30, FACE_AT[1] - 40], to: FACE_AT },
    {
      phrase: 'The fringed curtains of thine eye',
      at: [EYE_AT[0] - 66, EYE_AT[1] + 4],
      to: EYE_AT,
    },
    {
      phrase: 'I have suffered With those that I saw suffer',
      at: [TEAR_MARK[0] + 96, TEAR_MARK[1] - 94],
      to: TEAR_MARK,
    },
  ],
  where: 'Act 1, Scene 2',
  note: 'Miranda’s name is Latin for one to be wondered at. Ferdinand calls her a wonder before he knows it, and plays on it once she tells him. Before they meet she has wept for the strangers she believes drowned, and her father has to tell her to lift her eyes and look.',
  artNote:
    'The play never describes her face, hair or dress. Her long dark hair and plain gown are how the panels draw her. She was not yet three when she came to the island twelve years before, so she is drawn as a girl of about fifteen.',
}
