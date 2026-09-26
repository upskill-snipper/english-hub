import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { gouge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { footShadow } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { FLOOR, Garden, H, Room, W, Window, arch, type Box } from './belmont'
import { Person, type Pose } from './people'

/**
 * Act 3, Scene 4: "Portia's plan", the eleventh moment in the guide's
 * timeline. Every detail is from the scene, as the held edition prints it
 * (src/data/full-texts/the-merchant-of-venice.ts):
 *
 * - "Belmont. A room in Portia's house." It is the room of the casket
 *   scenes, as ./belmont.tsx cuts it: the same stone, the same tall window on
 *   the gardens, the same floor of marble squares. It is seen from its other
 *   side, with the door and the window and no alcove, because the caskets
 *   are finished with, and their red curtain would take the spot colour from
 *   what this moment is about. It is day: "we must measure twenty miles
 *   today".
 * - PORTIA: "Take this same letter, / And use thou all th' endeavour of a man
 *   / In speed to Padua, see thou render this / Into my cousin's hands, Doctor
 *   Bellario". BALTHAZAR: "Madam, I go with all convenient speed." [Exit.]
 *   So Balthazar strides out at the door in a travelling cloak, the letter in
 *   his hand, and its seal is the spot colour: the letter is the plan, and it
 *   brings back the "notes and garments" the trial is won with. The table
 *   it was written at stands behind him, with the sheet, the inkstand and
 *   the quill.
 * - PORTIA: "I'll tell thee all my whole device / When I am in my coach,
 *   which stays for us / At the park gate". So through the window, over the
 *   garden hedge, the coach stands waiting with its horse.
 * - PORTIA: "Come on, Nerissa, I have work in hand / That you yet know not
 *   of"; "When we are both accoutered like young men, / I'll prove the
 *   prettier fellow of the two". NERISSA: "Shall they see us?" So Portia,
 *   small, her fair hair in paper as the kit cuts it, turns to Nerissa with
 *   her chin up and holds out an open hand to her as she tells it, and
 *   Nerissa, in her coif, listens with a hand on her breast. (Portia's hand
 *   was first lifted beside her chin; at panel size its fingers closed up and
 *   it read as a raised fist, so it is held out at the waist, palm up, the
 *   fingers spread, as a woman explains, reviewed 27 September 2026.)
 * - WHO IS DRAWN. The guide names Portia, Nerissa, Lorenzo and Jessica, but
 *   the moment drawn is the end of the scene: "Exeunt Jessica and Lorenzo"
 *   comes before Portia turns to Balthazar, and Balthazar is gone before she
 *   speaks the lines quoted. So Lorenzo and Jessica are not drawn, and
 *   Balthazar is caught at the door on his way out.
 *
 * The people are cut from ./people.tsx (Balthazar is its 'balthazar'), and
 * nothing is taken from a film or stage production. Seed: 11101 (the wall
 * and the floor).
 */

const WIN: Box = { x0: 700, x1: 800, top: 40, bottom: 196 }
/** The doorway Balthazar goes out by, on the other side of the room. */
const DOOR: Box = { x0: 44, x1: 134, top: 92, bottom: FLOOR }
/** Nowhere: this wall of the room has no alcove, so nothing is left out of its stone. */
const NO_ALCOVE: Box = { x0: W + 20, x1: W + 20, top: 0, bottom: 0 }
const FEET = 326

const PORTIA: Pose = {
  look: 'portia',
  head: { rot: -8 },
  far: {
    pts: [
      [-3, -126],
      [-8, -102],
      [-4, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -126],
      [20, -106],
      [40, -110],
    ],
    hand: 'open',
    deg: -16,
    thumb: -1,
    size: 15.5,
    spread: 20,
  },
}

const NERISSA: Pose = {
  look: 'nerissa',
  head: { rot: 4 },
  far: {
    pts: [
      [-3, -126],
      [-6, -102],
      [-3, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -126],
      [16, -106],
      [8, -116],
    ],
    hand: 'mitt',
    deg: -150,
  },
}

const BALTHAZAR: Pose = {
  look: 'balthazar',
  head: { rot: -2 },
  far: {
    pts: [
      [-3, -130],
      [-12, -106],
      [-18, -86],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [3, -130],
      [16, -110],
      [30, -114],
    ],
    hand: 'mitt',
  },
  legs: {
    far: [
      [-3, -70],
      [-14, -36],
      [-22, -3],
    ],
    near: [
      [3, -70],
      [12, -36],
      [18, -3],
    ],
  },
  cloak: 8,
}

/** The letter to Bellario, in Balthazar's hand, sealed: in his frame. */
const LETTER = 'M26 -124L44 -126L45 -112L27 -110Z'

/**
 * The coach waiting at the park gate, seen through the window over the
 * hedge: a closed coach on two wheels and one horse in the shafts, facing
 * the road. Cut in ink with a paper edge, so it stands off the cypresses.
 */
const COACH =
  'M716 152V140Q716 132 726 132H744Q748 132 748 138V152Z' +
  'M747 146H758' +
  'M757 150Q756 142 764 141H774Q778 139 780 133L783 130L785 131L791 142L788 144L784 139L781 146Q779 150 776 150Z' +
  'M760 150L758 162M765 150L766 162M772 150L771 162M777 149L779 162' +
  'M757 143Q752 146 752 154'
const COACH_WHEELS =
  'M716 156a6 6 0 1 0 12 0a6 6 0 1 0 -12 0ZM738 157a5 5 0 1 0 10 0a5 5 0 1 0 -10 0Z'
const COACH_CUTS = 'M722 136H732V144H722ZM722 150L722 162M716 156H728M743 152V162M738 157H748'

function Coach() {
  return (
    <g strokeLinecap="round" strokeLinejoin="round">
      <path d={COACH + COACH_WHEELS} fill={PAPER} stroke={PAPER} strokeWidth={4.4} />
      <path d={COACH} fill={INK} stroke={INK} strokeWidth={2.2} />
      <path d={COACH_WHEELS} fill={INK} />
      <path d={COACH_CUTS} fill="none" stroke={PAPER} strokeWidth={1.1} />
    </g>
  )
}

/** The table Portia wrote the letter at: a sheet, the inkstand and the quill. */
function WritingTable() {
  return (
    <g>
      <path
        d="M188 246L192 306M270 246L266 306M196 280H262"
        stroke={PAPER}
        strokeWidth={9}
        fill="none"
      />
      <path
        d="M188 246L192 306M270 246L266 306M196 280H262"
        stroke={INK}
        strokeWidth={5.4}
        fill="none"
      />
      <path d="M178 234H280V246H178Z" fill={PAPER} stroke={INK} strokeWidth={1.8} />
      <path d={gouge(182, 242, 276, 242, 0.8)} fill={INK} />
      <path d="M200 233L226 230L228 233Z" fill={PAPER} stroke={INK} strokeWidth={1} />
      <path
        d="M240 233V222Q240 218 245 218H251Q256 218 256 222V233Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.2}
      />
      <path
        d="M250 218Q258 200 270 190Q264 204 254 218Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth={1}
      />
    </g>
  )
}

function PortiasPlan({ uid }: ArtProps) {
  return (
    <g className="lc-push" style={timing({ origin: [430, 190], push: 1.03 })}>
      <Room seed={11101} win={WIN} skip={NO_ALCOVE} />
      <Window
        uid={uid}
        win={WIN}
        outside={
          <>
            <Garden win={WIN} />
            <Coach />
          </>
        }
      />
      {/* the doorway on the other side of the room, and the lit passage beyond */}
      <path
        d={arch({ x0: DOOR.x0 - 12, x1: DOOR.x1 + 12, top: DOOR.top - 12, bottom: DOOR.bottom })}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.bold}
      />
      <path d={arch(DOOR)} fill={PAPER} />
      <path
        d={
          gouge(DOOR.x0 + 6, 200, DOOR.x1 - 6, 200, 0.9) +
          gouge(DOOR.x0 + 6, 226, DOOR.x1 - 6, 226, 1.1)
        }
        fill={INK}
      />
      <path
        d={`M${DOOR.x1} ${DOOR.top + 30}L${DOOR.x1 + 26} ${DOOR.top + 20}V${FLOOR + 10}L${DOOR.x1} ${FLOOR}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path
        d={
          footShadow(92, FEET - 12, 22) +
          footShadow(380, FEET + 4, 32) +
          footShadow(500, FEET + 4, 32)
        }
        fill={INK}
      />
      <WritingTable />
      <Person pose={BALTHAZAR} at={[88, FEET - 14]} scale={0.92} flip>
        <path d={LETTER} fill={PAPER} stroke={INK} strokeWidth={1} />
        <path d="M29 -121L42 -122M29 -117L40 -118" stroke={INK} strokeWidth={0.8} />
        <circle cx={36} cy={-113} r={3.4} fill={RED} stroke={INK} strokeWidth={0.8} />
      </Person>
      <Person pose={PORTIA} at={[380, FEET + 4]} scale={1.18} />
      <Person pose={NERISSA} at={[500, FEET + 4]} scale={1.18} flip />
    </g>
  )
}

export const portiasPlan: LinocutArt = { width: W, height: H, Draw: PortiasPlan }
