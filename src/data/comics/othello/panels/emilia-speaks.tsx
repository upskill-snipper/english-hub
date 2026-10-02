import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import type { Pt } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'
import { INK, PAPER } from '@/components/comics/linocut/palette'

import { Person, type Pose } from './people'
import {
  CandleStand,
  CurtainedBed,
  Floor,
  H,
  NightWindow,
  OpenDoor,
  W,
  bedMarks,
  candleGlow,
  candleLight,
  chamberMarks,
  type Bed,
} from './bedchamber'

/**
 * Act 5, Scene 2: "Emilia speaks", the sixteenth moment in the guide's
 * timeline, at its quotation: Iago has just told his wife "Go to, charm your
 * tongue", and she answers "I will not charm my tongue; I am bound to speak."
 * Every detail is from the scene, as the held edition prints it
 * (src/data/full-texts/othello.ts, Project Gutenberg #1531):
 *
 * - "Cyprus. A Bedchamber in the castle." "Desdemona in bed asleep; a light
 *   burning." So it is the room of ./bedchamber.tsx at night, the stars in
 *   its window, lit by its one candle, whose flame is the spot colour.
 * - "Soft, by and by; let me the curtains draw." Othello drew the bed's
 *   curtains before he let Emilia in, so the bed stands with its curtains
 *   drawn along its side and nothing on it is drawn. Emilia's "My mistress
 *   here lies murder'd in her bed" is left to the words.
 * - "[Unlocks the door.]" "Enter Montano, Gratiano and Iago." So the door
 *   stands open, and Montano, the last in, is still in the doorway.
 * - EMILIA: "You told a lie, an odious, damned lie; / Upon my soul, a lie";
 *   "Good gentlemen, let me have leave to speak." So she stands in the
 *   candlelight with her chin up and her mouth open, speaking, one hand laid
 *   on her breast and the other held out open towards her husband. She is the
 *   one face in the full light: the truth is spoken by the woman Iago treated
 *   as a fool. (Her hand first pointed at him, and in review, 2 October 2026,
 *   the pale fist with its one long finger read at panel size as a white
 *   blade in her hand, aimed at him, in the scene where he stabs her.)
 * - IAGO: "Go to, charm your tongue"; "Come, hold your peace." So he faces
 *   her and holds up an open hand to silence her, on a bent arm, the fingers
 *   apart. (A raised forefinger was tried first: at panel size, seen from the
 *   back of the hand, it could be read as a rude sign. Then an arm stretched
 *   back to the door, for "get you home", which tangled with Gratiano's hand.)
 * - GRATIANO: "What is the matter?"; ALL: "O heavens forfend!" So he holds up
 *   an open hand in dismay.
 * - OTHELLO: "Nay, stare not, masters, it is true indeed." So he stands by
 *   the bed, apart from them and out of the light, his head bowed.
 *
 * SAFEGUARDING. Iago's stabbing of Emilia, a few lines later, happens off the
 * page, and so does his "offers to stab his wife" before it: no sword is drawn
 * or worn by anyone in the panel (`sword: false`), so no blade is anywhere
 * near her. The only red is the candle's flame. Emilia's cheek is not
 * flushed: two red strokes on the face of a woman about to be stabbed could be
 * taken for cuts.
 *
 * The people are cut from ./people.tsx and nothing is taken from a film or
 * stage production. Seeds: 1601 (the wall and the floor), 1602 (the
 * curtains' folds), 1603 (the candle's light).
 */

/** The room as ./bedchamber.tsx sets it, so that it is the same room in every panel there. */
const FLAME: Pt = [372, 150]
const BED: Bed = { x0: 34, x1: 246, foot: 300, top: 44 }
const DOOR = { x0: 708, x1: 778, top: 120 }

type Marks = {
  room: ReturnType<typeof chamberMarks>
  bed: ReturnType<typeof bedMarks>
  glow: string
}
let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const light = candleLight(FLAME)
  // nothing is cut on the wall behind the bed or the door
  const hidden = (x: number, y: number) =>
    (x > BED.x0 - 20 && x < BED.x1 + 14 && y > BED.top - 4) ||
    (x > DOOR.x0 - 14 && x < DOOR.x1 + 84 && y > DOOR.top - 12)
  cached = {
    room: chamberMarks(1601, light, hidden),
    bed: bedMarks(1602, BED, light),
    glow: candleGlow(1603, FLAME),
  }
  return cached
}

/** Arms hanging at rest, in the kit's figure frame. */
const REST_FAR: Pt[] = [
  [-4, -128],
  [-6, -104],
  [-4, -80],
]
const REST_NEAR: Pt[] = [
  [5, -128],
  [8, -104],
  [9, -80],
]

/** Othello by the bed, his head bowed, his hands at his sides. */
const OTHELLO: Pose = {
  look: 'othello',
  head: { rot: 14 },
  eye: 'down',
  sword: false,
  far: { pts: REST_FAR, hand: 'mitt' },
  near: { pts: REST_NEAR, hand: 'mitt' },
}
/** Emilia, her chin up, her far hand held out open towards Iago and her near hand on her breast. */
const EMILIA: Pose = {
  look: 'emilia',
  head: { rot: -7 },
  far: {
    pts: [
      [-3, -124],
      [14, -110],
      [32, -113],
    ],
    hand: 'open',
    deg: -6,
    thumb: -1,
    size: 13.5,
    spread: 18,
  },
  near: {
    pts: [
      [4, -124],
      [13, -98],
      [11, -110],
    ],
    hand: 'open',
    deg: -96,
    size: 13,
    spread: 10,
    thumb: 1,
  },
}
/** Her mouth open as she speaks: a dark notch between the lips, in the frame of her head. */
const EMILIA_MOUTH = 'M14.9 8.6L11.6 9.6L14.6 11Z'
/** Iago, facing her, one open hand held up to silence her. */
const IAGO: Pose = {
  look: 'iago',
  sword: false,
  head: { rot: 2 },
  far: { pts: REST_FAR, hand: 'mitt' },
  near: {
    pts: [
      [5, -128],
      [27, -114],
      [41, -128],
    ],
    hand: 'open',
    deg: -72,
    size: 16,
    spread: 17,
    thumb: 1,
  },
}
/** Gratiano, an open hand raised in dismay. */
const GRATIANO: Pose = {
  look: 'gratiano',
  head: { rot: -3 },
  far: { pts: REST_FAR, hand: 'mitt' },
  near: {
    pts: [
      [5, -128],
      [19, -112],
      [32, -118],
    ],
    hand: 'open',
    deg: -34,
    thumb: -1,
  },
}
/** Montano, just in at the door. */
const MONTANO: Pose = {
  look: 'montano',
  sword: false,
  far: { pts: REST_FAR, hand: 'mitt' },
  near: { pts: REST_NEAR, hand: 'mitt' },
}

function EmiliaSpeaks(_: ArtProps) {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [430, 200], push: 1.03 })}>
      {/* the castle chamber at night: its wall lit by the candle, the stars in its window */}
      <path d={m.room.wall} fill={PAPER} />
      <path d={m.glow} fill={PAPER} />
      <NightWindow x={486} top={56} w={30} h={92} />
      <OpenDoor x0={DOOR.x0} x1={DOOR.x1} top={DOOR.top} />
      <Floor marks={m.room} />
      {/* "let me the curtains draw": the bed, its curtains drawn */}
      <CurtainedBed b={BED} marks={m.bed} />

      {/* the two who came in with Iago, behind him */}
      <Person pose={MONTANO} at={[750, 304]} scale={0.94} flip />
      <Person pose={GRATIANO} at={[660, 308]} scale={0.96} flip />
      <Person pose={OTHELLO} at={[290, 314]} scale={1} />
      <CandleStand flame={FLAME} floor={306} />
      <Person pose={IAGO} at={[558, 318]} scale={1.03} flip />
      {/* "I will not charm my tongue; I am bound to speak." */}
      <Person pose={EMILIA} at={[414, 324]} scale={1.16}>
        <path d={EMILIA_MOUTH} transform="translate(3 -154) rotate(-7)" fill={INK} />
      </Person>
    </g>
  )
}

export const emiliaSpeaks: LinocutArt = { width: W, height: H, Draw: EmiliaSpeaks }
