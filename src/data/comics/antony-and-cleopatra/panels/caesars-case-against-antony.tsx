import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER } from '@/components/comics/linocut/palette'
import { clamp } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { footShadow } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import {
  DOOR,
  FEET,
  H,
  LAMP,
  Lampstand,
  ROME_ROOFS,
  ROME_TEMPLE_CUTS,
  RoomFrame,
  W,
  WALL_FOOT,
  WIN,
  roomMarks,
  type RoomMarks,
} from './caesars-house'
import { skyLines } from './light-cuts'
import { Person, type P, type Pose } from './people'

/**
 * Act 1, Scene 4: "Caesar's case against Antony", the fourth moment in the
 * guide's timeline. Every detail is from the scene, as the held edition
 * prints it (src/data/full-texts/antony-and-cleopatra.ts):
 *
 * - "Rome. An Apartment in Caesar’s House." So the room of
 *   ./caesars-house.tsx, where the play goes back to Caesar in 2.3 and 3.6:
 *   one plain Roman room, so a student knows Caesar's house when it comes
 *   round again. Nothing in the scene says night, and it ends on business for
 *   "Tomorrow", so it is shown by day: the window high in the wall is bright,
 *   with the roofs of Rome and a temple's gable low in it (the room's
 *   ROME_ROOFS, the same city its other daylit panel shows), the doorway is
 *   lit from the court beyond, and the room's lamp stands unlit on its stand
 *   where it stands in 2.3 and 3.6. Nothing is lit, so there is no red in this
 *   panel: the spot colour stays for Egypt.
 * - "Enter Octavius [Caesar], Lepidus and their train." CAESAR: "You may see,
 *   Lepidus, and henceforth know ... From Alexandria This is the news: he
 *   fishes, drinks, and wastes The lamps of night in revel ... You shall find
 *   there A man who is the abstract of all faults That all men follow." So
 *   Caesar, at the front and the largest figure, makes his case to Lepidus
 *   with the news from Alexandria held out in his hand, his brow drawn down.
 *   The news is drawn as an opened letter: the play says only that it has
 *   come "From Alexandria", and a sheet is how a panel shows news from far
 *   away, as the messengers' letters do in the first two panels. He is the
 *   kit's Caesar (./people.tsx), "the scarce-bearded Caesar" (1.1): a youth's
 *   head, the hair cropped and combed forward, and in Rome the toga. A raised
 *   finger was tried first, and at panel size the one finger on its small
 *   fist read as a thumb raised, or a ruder sign.
 * - LEPIDUS: "I must not think there are Evils enough to darken all his
 *   goodness." CAESAR: "You are too indulgent." So Lepidus, the kit's Lepidus
 *   (slight, balding, in a toga, as the Julius Caesar kit cuts him), faces
 *   him with an open hand turned up, putting the other side.
 * - "Enter a Messenger." LEPIDUS: "Here’s more news." MESSENGER: "Thy
 *   biddings have been done, and every hour, Most noble Caesar, shalt thou
 *   have report How ’tis abroad. Pompey is strong at sea". So in the lit
 *   doorway behind Caesar a messenger steps in from the road, the kit's
 *   messenger in his tunic and short travelling cloak, his hand on his breast
 *   as he begins his report, which is spoken, not written.
 *
 * The quotation is Caesar's, verbatim. Nothing is taken from a film or stage
 * production. Seeds: 401 (wall, dado and floor), 404 (the sky in the
 * window).
 */

/** Where the window's light and the doorway's light fall from. */
const WIN_C: P = [WIN.x + WIN.w / 2, WIN.y + WIN.h * 0.6]
const DOOR_C: P = [(DOOR.x0 + DOOR.x1) / 2, 176]

/**
 * The people: Caesar at the front, the largest figure, so the panel is his;
 * Lepidus a step further back, facing him; the messenger in the doorway at
 * the back of the room, smaller again.
 */
const CAESAR_AT: P = [338, FEET + 3]
const LEPIDUS_AT: P = [566, FEET - 16]
const MESSENGER_AT: P = [64, WALL_FOOT + 1]
const S = 1.2
const S_LEPIDUS = 1.08
const S_FAR = 0.82

type Marks = RoomMarks & { sky: string; shade: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // Daylight from the window high in the wall and from the open doorway,
  // falling away towards the corners.
  const light = (x: number, y: number) =>
    Math.max(
      clamp(1 - Math.hypot((x - WIN_C[0]) * 0.62, (y - WIN_C[1]) * 0.9) / 300) * 0.95,
      clamp(1 - Math.hypot((x - DOOR_C[0]) * 0.9, (y - DOOR_C[1]) * 0.7) / 170) * 0.75,
      0.07,
    )
  const room = roomMarks(401, light)
  const sky = skyLines(
    404,
    { x0: WIN.x, x1: WIN.x + WIN.w, y0: WIN.y, y1: WIN.y + WIN.h - 24 },
    (_x, y) => 0.5 - (y - WIN.y) / 160,
  )
  const shade =
    footShadow(CAESAR_AT[0] + 2, CAESAR_AT[1] + 4, 36) +
    footShadow(LEPIDUS_AT[0] - 2, LEPIDUS_AT[1] + 3, 30) +
    footShadow(LAMP.x, LAMP.foot + 3, 22)
  cached = { ...room, sky, shade }
  return cached
}

/** Caesar: his brow drawn down, holding out the news from Alexandria for Lepidus to see. */
const CAESAR: Pose = {
  look: 'caesar',
  dress: 'toga',
  frown: true,
  head: { rot: 4 },
  near: {
    pts: [
      [5, -128],
      [24, -114],
      [40, -124],
    ],
    hand: 'grip',
    deg: -20,
  },
}

/** The news from Alexandria in Caesar's hand, in his figure's frame: an opened sheet, its lines cut in ink. */
const NEWS = 'M40 -138L60 -142L63 -116L43 -112Z'
const NEWS_LINES = 'M45 -132L57 -134.6M46 -127L58 -129.6M47 -122L59 -124.6M47.6 -117L56 -118.8'

/** Lepidus: an open hand turned up, putting the other side. */
const LEPIDUS: Pose = {
  look: 'lepidus',
  head: { rot: 6 },
  near: {
    pts: [
      [5, -128],
      [14, -104],
      [34, -106],
    ],
    hand: 'open',
    deg: -30,
    thumb: -1,
  },
}

/** The messenger, stepping in at the door, his hand on his breast as he begins his report. */
const MESSENGER: Pose = {
  look: 'messenger',
  head: { rot: 8 },
  legs: {
    far: [
      [-3, -70],
      [-9, -37],
      [-17, -3],
    ],
    near: [
      [3, -70],
      [13, -38],
      [15, -3],
    ],
  },
  near: {
    pts: [
      [5, -128],
      [18, -106],
      [14, -122],
    ],
    hand: 'mitt',
    deg: -150,
  },
}

function CaesarsCaseAgainstAntony({ uid }: ArtProps) {
  const m = marks()
  const win = `${uid}-win`
  return (
    <g className="lc-push" style={timing({ origin: [400, 170], push: 1.03 })}>
      <defs>
        <clipPath id={win}>
          <rect x={WIN.x} y={WIN.y} width={WIN.w} height={WIN.h} />
        </clipPath>
      </defs>
      {/* the wall by daylight */}
      <rect x={0} y={0} width={W} height={H} fill={INK} />
      <path d={m.wall} fill={PAPER} />
      <path d={m.dado} fill={PAPER} />
      {/* the window: the sky, and the roofs of Rome low in it */}
      <rect x={WIN.x} y={WIN.y} width={WIN.w} height={WIN.h} fill={PAPER} />
      <g clipPath={`url(#${win})`}>
        <path d={m.sky} fill={INK} />
        <path d={ROME_ROOFS} fill={INK} />
        <path d={ROME_TEMPLE_CUTS} fill={PAPER} />
      </g>
      <RoomFrame m={m} doorLit />
      <path d={m.shade} fill={INK} />

      {/* the messenger, come in from the road with more news */}
      <Person pose={MESSENGER} at={MESSENGER_AT} scale={S_FAR} />
      {/* the room's lamp on its stand, unlit by day */}
      <Lampstand />
      {/* Caesar, making his case, the news from Alexandria in his hand */}
      <Person pose={CAESAR} at={CAESAR_AT} scale={S}>
        <path d={NEWS} fill={PAPER} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
        <path d={NEWS_LINES} stroke={INK} strokeWidth={1} />
      </Person>
      {/* Lepidus, too indulgent */}
      <Person pose={LEPIDUS} at={LEPIDUS_AT} scale={S_LEPIDUS} flip />
    </g>
  )
}

export const caesarsCaseAgainstAntony: LinocutArt = {
  width: W,
  height: H,
  Draw: CaesarsCaseAgainstAntony,
}
