import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arcDashes, clamp, deg, gouge, rng } from '@/components/comics/linocut/carve'

import {
  EarCut,
  folds,
  hatch,
  lerp2,
  locks,
  napeShade,
  onTurnedHead,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  shoulders,
  spline,
  turn,
  YOUTH_EAR,
  YOUTH_HEAD,
  YOUTH_JAW,
  YouthEye,
  YouthNoseAndMouth,
} from './common'

/**
 * Hamlet, in Act 1, Scene 2, from his own answer to his mother when she asks
 * why his grief "seems" so particular:
 *
 *   "Seems, madam! Nay, it is; I know not seems. 'Tis not alone my inky
 *   cloak, good mother, Nor customary suits of solemn black, Nor windy
 *   suspiration of forc'd breath, No, nor the fruitful river in the eye, Nor
 *   the dejected haviour of the visage, Together with all forms, moods, shows
 *   of grief, That can denote me truly. These indeed seem, For they are
 *   actions that a man might play; But I have that within which passeth
 *   show; These but the trappings and the suits of woe."
 *
 * So: a young man in black from the throat down, a black doublet and a black
 * cloak over it, his head bowed and his eye cast down under a lid his mother
 * calls "vailed" in the same scene ("Do not for ever with thy vailed lids
 * Seek for thy noble father in the dust"). He is "young Hamlet" (1.1).
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): the youth's
 * head, beardless; his dark hair over the crown and down behind the ear to
 * the jaw, its lower edge broken into locks (the kit's HAMLET_HAIR at this
 * size, lifted a little off the brow so the forehead shows), its strands cut
 * in paper and his ear clear of it; a black doublet with no ruff and no paper
 * ornament, and the black cloak. Bareheaded.
 *
 * THE FOURTH MARKER POINTS AT NOTHING YOU CAN SEE. Hamlet's whole point is
 * that the black clothes and the downcast face are only "the trappings and
 * the suits of woe", and that the grief itself is "within". So the marker for
 * "that within which passeth show" sits on his chest, over the heart, with no
 * line to anything: the print can show the outside only, which is what he
 * says. There is no red in this plate but the markers.
 *
 * He faces left, so the figure is drawn facing right and flipped.
 *
 * Seeds: 7201 to 7206 (the figure's marks), 7210 (the ground).
 */

/** His head is bowed: "the dejected haviour of the visage". */
const ROT = 8

/**
 * Dark hair over the crown and down behind the ear to the jaw, its lower edge
 * broken into locks: the kit's HAMLET_HAIR carried to this size, its front
 * lifted off the brow. In the head's frame.
 */
const HAIR = spline([
  [157, 62, 1],
  [152, 42],
  [136, 27],
  [112, 20],
  [86, 23],
  [60, 34],
  [40, 56],
  [29, 88],
  [27, 120],
  [31, 150],
  [38, 176, 1],
  [45, 166, 1],
  [49, 186, 1],
  [58, 172, 1],
  [66, 188, 1],
  [74, 170, 1],
  [80, 182, 1],
  [86, 160],
  [88, 140],
  [90, 118],
  [96, 104],
  [106, 99],
  [116, 102],
  [121, 112],
  [124, 128, 1],
  [129, 116],
  [131, 98],
  [137, 82],
  [146, 70],
])

/** The doublet: his shoulders and chest, the youth's slighter than a man's. */
const BODY = shoulders(0.96)
/** The doublet's standing collar round the foot of the neck, black, with no ruff. */
const COLLAR = spline([
  [64, 210, 1],
  [100, 216],
  [136, 210, 1],
  [142, 234, 1],
  [100, 240],
  [58, 234, 1],
])
/**
 * "my inky cloak": over both shoulders and down his back, open at the front,
 * its edge falling from the collar down his breast, so the doublet shows in
 * a strip in front of it.
 */
const CLOAK = spline([
  [-14, 336, 1],
  [-10, 296],
  [6, 260],
  [34, 236],
  [66, 224],
  [100, 226],
  [134, 232, 1],
  [140, 262],
  [146, 300],
  [152, 336, 1],
])
/** The cloak's front edge, its lining turned back, cut as a paper line. */
const CLOAK_EDGE = 'M134 232Q141 280 152 336'
/** The doublet's front edge, closed, with no buttons. */
const FRONT = 'M172 244Q190 288 198 336'

/** Where the face is marked, in the head's frame, and the breast, in the figure's. */
const CHEEK = { x: 146, y: 126 }
const HEART: [number, number] = [176, 272]

type Marks = {
  hair: string
  nape: string
  neck: string
  cloak: string
  body: string
  collar: string
}

const marks = once((): Marks => {
  const r = rng(7201)
  // Strands cut in paper, from the brow and the crown back and down to the
  // locks at the jaw.
  const hair =
    locks(
      7202,
      22,
      (t) => (t < 0.3 ? [150 - t * 60, 50 - t * 40] : [132 - (t - 0.3) * 120, 38 + (t - 0.3) * 40]),
      (t) => [74 - t * 34, 132 + t * 44],
      [0.8, 1.4],
      -10,
      0.8,
    ) +
    locks(
      7203,
      6,
      (t) => [140 - t * 40, 74 - t * 2],
      (t) => [92 - t * 20, 100 + t * 30],
      [0.7, 1.1],
      -4,
    )
  const nape = napeShade(7204, 150, 118, 78, 110)
  // The shadow under the jaw, the head bowed into it: a few rows only.
  const neck = hatch(r, lerp2([112, 180], [118, 206]), lerp2([150, 184], [134, 214]), 6, 0.6)
  // The cloak's folds falling from the shoulder, and the doublet's few.
  const cloak = folds(7205, [6, 126], [258, 292], 9)
  const body = gouge(184, 268, 196, 334, 0.9, -0.6) + gouge(160, 280, 166, 334, 0.7, -0.4)
  let collar = ''
  for (let k = 0; k < 3; k++)
    collar += arcDashes(r, 100, 120, 100 + k * 5, deg(70), deg(108), [8, 16], [3, 6])
  return { hair, nape, neck, cloak, body, collar }
})

/** Hamlet, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function HamletFigure({ uid }: { uid: string }) {
  const m = marks()
  const id = `${uid}-ham`
  return (
    <g>
      <defs>
        <clipPath id={`${id}-head`}>
          <path d={YOUTH_HEAD} />
        </clipPath>
        <clipPath id={`${id}-hair`}>
          <path d={HAIR} />
        </clipPath>
        <clipPath id={`${id}-cloak`}>
          <path d={CLOAK} />
        </clipPath>
      </defs>

      {/* "customary suits of solemn black": the doublet, closed, unadorned */}
      <path d={BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <path d={FRONT} fill="none" stroke={PAPER} strokeWidth={1.4} strokeLinecap="round" />

      <g transform={turn(ROT)}>
        <path d={YOUTH_HEAD} fill={PAPER} />
        <g clipPath={`url(#${id}-head)`} fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.nape} strokeWidth={1.5} />
          <path d={m.neck} strokeWidth={1.1} />
          <path d={YOUTH_JAW} strokeWidth={1.4} />
        </g>
        <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <g clipPath={`url(#${id}-hair)`}>
          <path d={m.hair} fill={PAPER} />
        </g>
        <EarCut {...YOUTH_EAR} />
        <YouthNoseAndMouth />
        {/* the corner of the mouth turned down */}
        <path
          d="M159.8 143.4Q157.8 144.2 157 146.6"
          fill="none"
          stroke={INK}
          strokeWidth={1.2}
          strokeLinecap="round"
        />
        {/* "thy vailed lids": the eye cast down, the brow drawn up a little */}
        <YouthEye look="down" brow={0} />
        <path
          d="M144 88.6Q152 87.6 158 85.4Q162 83.8 165.6 81.2"
          fill="none"
          stroke={INK}
          strokeWidth={2.6}
          strokeLinecap="round"
        />
      </g>

      {/* the doublet's collar, and "my inky cloak" over the shoulders */}
      <path d={COLLAR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.collar} fill="none" stroke={PAPER} strokeWidth={0.9} strokeLinecap="round" />
      <path d={CLOAK} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${id}-cloak)`}>
        <path d={m.cloak} fill={PAPER} />
      </g>
      <path d={CLOAK_EDGE} fill="none" stroke={PAPER} strokeWidth={2.2} strokeLinecap="round" />
    </g>
  )
}

/** A thick ink halo round head, hair, cloak and doublet. */
function HamletKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <g transform={turn(ROT)}>
        <path d={YOUTH_HEAD} />
        <path d={HAIR} />
      </g>
      <path d={BODY} />
      <path d={CLOAK} />
    </g>
  )
}

const P = placing(38, 8, 0.92, true)

/** The room of state by day, the light ahead of him, to the left, falling away behind. */
const ground = once(() =>
  portraitGround('hamlet-hamlet', 7210, (x, y) =>
    clamp(0.1 + ((PW - x - 30) / 280) * 0.85 - (y / PH) * 0.14),
  ),
)

function HamletPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <HamletKnockout />
        <HamletFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const hamletPortrait: LinocutArt = { width: PW, height: PH, Draw: HamletPortrait }

const CLOAK_AT = P.to(50, 270)
const DOUBLET_AT = P.to(208, 312)
const FACE_AT = onTurnedHead(P, ROT, CHEEK.x, CHEEK.y)
const HEART_AT = P.to(HEART[0], HEART[1])

export const hamlet: Portrait = {
  name: 'Hamlet',
  art: hamletPortrait,
  alt: 'A linocut portrait of Hamlet in profile, facing left: a young, beardless man with his head bowed and his eye cast down under a heavy lid, the corner of his mouth turned down. His dark hair covers his crown and falls behind his ear to his jaw, ending in short locks, its strands cut in white. He is dressed all in black: a black cloak over both shoulders, its folds cut in white, open at the front over a plain black doublet with a standing collar and no ruff. Four numbered red markers point to his cloak, his doublet, his downcast face and, with no line, a place on his chest over his heart.',
  describedBy: [
    { phrase: 'my inky cloak', at: [CLOAK_AT[0] + 34, CLOAK_AT[1] - 40], to: CLOAK_AT },
    {
      phrase: 'customary suits of solemn black',
      at: [DOUBLET_AT[0] - 42, DOUBLET_AT[1] - 6],
      to: DOUBLET_AT,
    },
    { phrase: 'the dejected haviour of the visage', at: FACE_AT },
    { phrase: 'that within which passeth show', at: HEART_AT },
  ],
  where: 'Act 1, Scene 2',
  passage:
    'Seems, madam! Nay, it is; I know not seems. ’Tis not alone my inky cloak, good mother, Nor customary suits of solemn black, Nor windy suspiration of forc’d breath, No, nor the fruitful river in the eye, Nor the dejected haviour of the visage, Together with all forms, moods, shows of grief, That can denote me truly. These indeed seem, For they are actions that a man might play; But I have that within which passeth show; These but the trappings and the suits of woe.',
  note: 'Gertrude asks why his grief “seems” so particular, and Hamlet seizes on the word. Black clothes, sighs, tears and a downcast face are things an actor could put on; what he feels is inside and cannot be shown. In a play about acting and spying, he claims to be the one person not performing.',
  artNote:
    'The play gives his black clothes and his bowed head. His dark hair to the jaw is how the panels draw him, so he is known at a glance. The fourth marker sits over his heart and points at nothing: the print, like the clothes, can only show the outside.',
}
