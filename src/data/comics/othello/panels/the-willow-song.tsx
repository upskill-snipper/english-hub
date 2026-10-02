import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { gouge, n, type Pt } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  CandleStand,
  FLOOR,
  Floor,
  H,
  NightWindow,
  W,
  candleGlow,
  candleLight,
  chamberMarks,
  type Bed,
} from './bedchamber'
import { OpenBed, linenTop, openBedMarks } from './open-bed'
import { Person, type Pose } from './people'
import { OffTheirFeet } from './seated'

/**
 * Act 4, Scene 3: "The willow song", the thirteenth moment in the guide's
 * timeline. Every detail is from the scene in the held edition
 * (src/data/full-texts/othello.ts):
 *
 * - "Cyprus. Another Room in the Castle." The play does not say which room;
 *   the scene is Desdemona going to bed ("Get you to bed on th' instant"),
 *   and Emilia says "I have laid those sheets you bade me on the bed", the
 *   wedding sheets of "Lay on my bed my wedding sheets" (4.2). So the panel
 *   puts the two women in Desdemona's chamber (./bedchamber.tsx), where the
 *   bed with its white sheets can be seen: the same room, bed, window, candle
 *   and shut door as "The murder", so that a student sees the sheets laid
 *   ready on the bed that the next panels show.
 * - It is night, and late: Othello has gone out walking with Lodovico ("I
 *   will be return'd forthwith"). One candle burns on its stand, the stars
 *   are in the window, and the door is shut.
 * - DESDEMONA: "Prithee, unpin me"; "No, unpin me here." So Emilia stands
 *   behind her and takes the pins from her hair, her open hands at the back
 *   of Desdemona's head, and the dark hair falls loose down her back (the
 *   kit's `loose`).
 * - "I have much to do / But to go hang my head all at one side / And sing
 *   it like poor Barbary." So Desdemona's head is bowed and her eyes are
 *   down, her lips parted on the song, her hands folded before her.
 * - Nobody else is there: Othello, Lodovico and the attendants have gone out
 *   ("Exeunt Othello, Lodovico and Attendants"), and Emilia has been told to
 *   go when she has done.
 *
 * The bed is ./open-bed.tsx's, its curtains tied back, and on it only the
 * white sheets laid flat, the sheet turned down over the bolster at its head:
 * nothing on it that could be read as a shape under them. The people are the
 * kit's (./people.tsx): Desdemona and Emilia with their faces lit, Emilia in
 * her coif. The only red is the candle's flame. Nothing is taken from a film
 * or stage production.
 *
 * Seeds: 1301 (the wall and the floor), 1302 (the candle's light), 1303 (the
 * bed's hangings and coverlet).
 */

const FLAME: Pt = [372, 150]
const BED: Bed = { x0: 34, x1: 246, foot: 300, top: 44 }
const DOOR = { x0: 708, x1: 778, top: 120 }
const LT = linenTop(BED)

type Marks = {
  room: ReturnType<typeof chamberMarks>
  bed: ReturnType<typeof openBedMarks>
  glow: string
}
let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const light = candleLight(FLAME)
  const hidden = (x: number, y: number) =>
    (x > BED.x0 - 20 && x < BED.x1 + 14 && y > BED.top - 4) ||
    (x > DOOR.x0 - 14 && x < DOOR.x1 + 14 && y > DOOR.top - 12)
  cached = {
    room: chamberMarks(1301, light, hidden),
    glow: candleGlow(1302, FLAME),
    bed: openBedMarks(1303, BED, light),
  }
  return cached
}

/**
 * The wedding sheets laid on the bed: flat, the top sheet turned down over
 * the bolster at the head of the bed, its edge and one fold in ink.
 */
function Sheets() {
  return (
    <g>
      <path
        d={`M${BED.x0 + 4} ${LT + 6}V${LT - 4}C${BED.x0 + 60} ${LT - 6} 150 ${LT - 6} 176 ${LT - 7}C190 ${LT - 14} 206 ${LT - 16} 222 ${LT - 15}C234 ${LT - 15} 242 ${LT - 10} ${BED.x1 - 2} ${LT - 4}V${LT + 6}Z`}
        fill={PAPER}
      />
      <path
        d={`M${BED.x0 + 4} ${LT - 4}C${BED.x0 + 60} ${LT - 6} 150 ${LT - 6} 176 ${LT - 7}C190 ${LT - 14} 206 ${LT - 16} 222 ${LT - 15}C234 ${LT - 15} 242 ${LT - 10} ${BED.x1 - 2} ${LT - 4}`}
        fill="none"
        stroke={INK}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      {/* the turned-down edge of the top sheet, and a fold along the bed */}
      <path
        d={`M176 ${LT - 7}C178 ${LT - 2} 178 ${LT + 2} 176 ${LT + 4}M70 ${LT + 1}C100 ${LT} 130 ${LT} 160 ${LT + 1}`}
        fill="none"
        stroke={INK}
        strokeWidth={1}
        strokeLinecap="round"
      />
    </g>
  )
}

/** The shut door: the doorway of ./bedchamber.tsx's OpenDoor, its leaf closed (as in "The murder"). */
function ShutDoor({ x0, x1, top }: { x0: number; x1: number; top: number }) {
  const w = x1 - x0
  const r = w / 2
  const cx = (x0 + x1) / 2
  let stones = ''
  for (let k = 1; k < 7; k++) {
    const a = (Math.PI * k) / 7
    stones += gouge(
      cx - Math.cos(a) * (r + 1),
      top + r - Math.sin(a) * (r + 1),
      cx - Math.cos(a) * (r + 10),
      top + r - Math.sin(a) * (r + 10),
      0.9,
    )
  }
  let planks = ''
  for (let x = x0 + w / 5; x < x1 - 4; x += w / 5)
    planks += gouge(x, top + 8 + Math.abs(x - cx) * 0.4, x, FLOOR - 4, 0.9)
  return (
    <g>
      <path
        d={`M${n(x0 - 10)} ${FLOOR}V${n(top + r)}A${n(r + 10)} ${n(r + 10)} 0 0 1 ${n(x1 + 10)} ${n(top + r)}V${FLOOR}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={stones} fill={PAPER} />
      <path
        d={`M${n(x0)} ${FLOOR}V${n(top + r)}A${n(r)} ${n(r)} 0 0 1 ${n(x1)} ${n(top + r)}V${FLOOR}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={planks} fill={PAPER} />
      <path
        d={`M${n(x0 + 2)} ${n(top + r + 18)}H${n(x1 - 2)}M${n(x0 + 2)} ${FLOOR - 28}H${n(x1 - 2)}`}
        stroke={PAPER}
        strokeWidth={2.4}
      />
    </g>
  )
}

/**
 * Desdemona, seated on a low stool (./seated.tsx; her skirt hides it),
 * flipped to face the candle: her head bowed to one side, singing, her hands
 * folded in her lap.
 */
const DESDEMONA: Pose = {
  look: 'desdemona',
  loose: true,
  eye: 'down',
  head: { rot: 16 },
  far: {
    pts: [
      [-3, -126],
      [0, -102],
      [14, -94],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -126],
      [6, -102],
      [20, -93],
    ],
    hand: 'mitt',
  },
}
/** Her lips parted on the song: a small ink wedge on her lit face, in the frame of her head. */
const SINGING = 'M15.4 8.4L11.6 9.3L15.1 10.9Z'

/**
 * Her hair as it falls unpinned: more strands cut in paper down the kit's
 * HAIR_LOOSE, in the frame of her head, wavy where the pins held it. WHY
 * (2 October 2026): with the kit's three cuts alone, the long dark fall from
 * the brow to the shoulders read at panel size as a veil, and the moment is
 * her hair coming down.
 */
const LOOSE_STRANDS =
  'M-9.6 -16.4C-13.6 -7 -14.6 4 -13.6 14C-12.8 25 -14.6 37 -17.6 48' +
  'M-4.4 -14.6C-8.6 -6 -9.6 5 -9.2 16C-9 27 -10 38 -11.6 49' +
  'M-14.4 -10C-17 0 -17 11 -15.6 21M1.2 -13C-2.6 -9 -4.6 -4 -5.2 1'

/**
 * Emilia, flipped, standing close behind her seated mistress, drawn after
 * her so that her hands show: her elbows bent and her forearms forward, one
 * open hand at the crown and one at the back of Desdemona's head, where the
 * hair was pinned up, the fingers apart in the hair.
 */
const EMILIA: Pose = {
  look: 'emilia',
  eye: 'down',
  head: { rot: 8 },
  far: {
    pts: [
      [-3, -126],
      [8, -106],
      [26, -124],
    ],
    hand: 'open',
    deg: -14,
    thumb: -1,
    size: 13,
  },
  near: {
    pts: [
      [4, -126],
      [14, -102],
      [30, -114],
    ],
    hand: 'open',
    deg: 2,
    thumb: -1,
    size: 13,
  },
}

function TheWillowSong({ uid }: ArtProps) {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [470, 190], push: 1.03 })}>
      <path d={m.room.wall} fill={PAPER} />
      <path d={m.glow} fill={PAPER} />
      <NightWindow x={486} top={56} w={30} h={92} />
      <ShutDoor x0={DOOR.x0} x1={DOOR.x1} top={DOOR.top} />
      <Floor marks={m.room} />
      <OpenBed b={BED} marks={m.bed} linen={<Sheets />} />
      <CandleStand flame={FLAME} floor={306} />
      <OffTheirFeet
        uid={uid}
        id="desd"
        pose={DESDEMONA}
        how="seated"
        at={[484, 318]}
        scale={1.15}
        flip
      >
        <g transform={`translate(3 -154) rotate(${DESDEMONA.head?.rot ?? 0})`}>
          {/* her parted lips, and her hair coming down */}
          <path d={SINGING} fill={INK} />
          <path
            d={LOOSE_STRANDS}
            fill="none"
            stroke={PAPER}
            strokeWidth={0.9}
            strokeLinecap="round"
          />
        </g>
      </OffTheirFeet>
      <Person pose={EMILIA} at={[536, 318]} scale={1.15} flip />
    </g>
  )
}

export const theWillowSong: LinocutArt = { width: W, height: H, Draw: TheWillowSong }
