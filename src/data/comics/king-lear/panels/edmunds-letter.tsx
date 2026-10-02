import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { flagFloor, footShadow, stoneWall } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { Letter, Person } from './people'
import { ArchedWindow } from './room-of-state'

/**
 * Act 1, Scene 2: "Edmund's letter", the third moment in the guide's timeline.
 * Every detail is from the scene (the held edition,
 * src/data/full-texts/king-lear.ts):
 *
 * - "A Hall in the Earl of Gloucester's Castle". "Enter Edmund with a
 *   letter." He speaks alone: "Well, my legitimate, if this letter speed, And
 *   my invention thrive, Edmund the base Shall top the legitimate. I grow, I
 *   prosper. Now, gods, stand up for bastards!" So Edmund stands in the hall,
 *   nearest us, holding the letter up before him, his head lifted to the gods
 *   he calls on, and smiling: the letter is his "invention", the forgery he
 *   will let his father find. Its seal is the spot colour: the scene is about
 *   the letter.
 * - The stage direction that follows the line is "Enter Gloucester." He comes
 *   in still full of the morning: "Kent banish'd thus! and France in choler
 *   parted! And the King gone tonight! Prescrib'd his pow'r!" So he is in the
 *   doorway behind, an old man in his earl's cap and gown, his head bowed and
 *   one open hand lifted in dismay, not yet seeing his son or the letter. A
 *   moment later he asks "What paper were you reading?" and Edmund answers
 *   "Nothing, my lord."
 * - Edgar comes in only after his father has gone out ("Enter Edgar"), so he
 *   is not in the hall.
 *
 * Edmund is the kit's (./people.tsx): "so proper", clean-shaven, with short
 * dark curls, a short cloak and a sword; Gloucester is the kit's, white-bearded
 * and capped. The hall is not described: a stone hall with a tall window and
 * an arched doorway, a hanging on the wall, as an earl's hall of the old
 * Britain the play is set in. Nothing is taken from a film or stage
 * production. Seeds: 1301 (wall), 1302 (floor), 1303 (the hanging).
 */

const W = 860
const H = 340
const FLOOR = 258

/** The doorway on the right, its passage lit. */
const DOOR_X0 = 642
const DOOR_X1 = 752
const DOOR_TOP = 96
const DOOR = `M${DOOR_X0} ${FLOOR}V${DOOR_TOP + 55}A55 55 0 0 1 ${DOOR_X1} ${DOOR_TOP + 55}V${FLOOR}Z`

/** Light from the window on the left and the lit doorway on the right. */
const light = (x: number, y: number) => {
  const win = clamp(1 - Math.hypot((x - 252) * 0.8, (y - 130) * 1.1) / 260)
  const door = clamp(1 - Math.hypot((x - 697) * 0.9, (y - 190) * 1.1) / 210)
  return Math.max(win * 0.85, door * 0.7, 0.06)
}

type Marks = {
  wall: { cuts: string; joints: string }
  floor: string
  hanging: string
  passage: string
  voussoirs: string
  shadows: string
}
let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const wall = stoneWall(rng(1301), { x0: 0, x1: W, y0: 4, y1: FLOOR - 4 }, light, 30)
  const floor = flagFloor(rng(1302), W, H, FLOOR, [470, 120], 64, 6)
  // the hanging: a dark cloth with a border and rows of small lozenges cut in it
  const r = rng(1303)
  let hanging = ''
  for (let y = 92; y < 196; y += 22)
    for (let x = 478 + (((y - 92) / 22) % 2) * 13; x < 596; x += 26) {
      const cx = x + between(r, -1.5, 1.5)
      const cy = y + between(r, -1.5, 1.5)
      hanging += `M${n(cx)} ${n(cy - 6)}L${n(cx + 4.4)} ${n(cy)}L${n(cx)} ${n(cy + 6)}L${n(cx - 4.4)} ${n(cy)}Z`
    }
  // the passage beyond the door: a far wall and a floor, lit
  const passage = gougeField(
    rng(1304),
    { x0: DOOR_X0, x1: DOOR_X1, y0: DOOR_TOP + 4, y1: 210 },
    () => 0.9,
    { spacing: 9, len: [16, 40], gap: [8, 18], max: 1.2 },
  )
  // the stones of the arch
  let voussoirs = ''
  for (let k = 0; k <= 8; k++) {
    const a = Math.PI + (k * Math.PI) / 8
    const cx = (DOOR_X0 + DOOR_X1) / 2
    const cy = DOOR_TOP + 55
    voussoirs += gouge(
      cx + Math.cos(a) * 58,
      cy + Math.sin(a) * 58,
      cx + Math.cos(a) * 76,
      cy + Math.sin(a) * 76,
      1.1,
    )
  }
  const shadows = footShadow(700, FLOOR + 1, 24)
  cached = { wall, floor, hanging, passage, voussoirs, shadows }
  return cached
}

function EdmundsLetter(_: ArtProps) {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [330, 170], push: 1.03 })}>
      {/* the stone hall */}
      <path d={m.wall.cuts} fill={PAPER} />
      <path d={m.wall.joints} fill={PAPER} />
      <ArchedWindow x={252} y={44} w={96} h={152} />

      {/* the hanging on the wall */}
      <path d="M458 64H614V214H458Z" fill={INK} stroke={PAPER} strokeWidth={2} />
      <path d="M466 72H606V206H466Z" fill="none" stroke={PAPER} strokeWidth={3} />
      <path d={m.hanging} fill={PAPER} />
      <path d="M452 60H620" stroke={INK} strokeWidth={6} />
      <path d="M452 60H620" stroke={PAPER} strokeWidth={1.6} />

      {/* the doorway on the right, its passage lit */}
      <path d={m.voussoirs} fill={PAPER} />
      <path d={DOOR} fill={PAPER} stroke={INK} strokeWidth={3} />
      <path d={m.passage} fill={INK} />
      <path d={`M${DOOR_X0} 210H${DOOR_X1}`} stroke={INK} strokeWidth={LINE.fine} />

      {/* the floor */}
      <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
      <path d={m.floor} fill={INK} />
      <path d={m.shadows} fill={INK} />

      {/* Gloucester coming in at the door, his head bowed, not yet seeing */}
      <Person
        pose={{
          look: 'gloucester',
          eye: 'down',
          head: { rot: 9 },
          far: {
            pts: [
              [-3, -128],
              [-6, -104],
              [-2, -82],
            ],
          },
          near: {
            pts: [
              [5, -128],
              [17, -112],
              [31, -118],
            ],
            hand: 'open',
            deg: -24,
          },
          hem: { front: 26, back: 22 },
        }}
        at={[704, FLOOR]}
        scale={0.94}
        flip
      />

      {/* Edmund, nearest us, holding up the letter: "Now, gods, stand up for bastards!" */}
      <Person
        pose={{
          look: 'edmund',
          mouth: 'smile',
          head: { rot: -12 },
          body: { neck: [-3, -138], hip: [0, -70] },
          far: {
            pts: [
              [-5, -128],
              [-10, -104],
              [-8, -82],
            ],
          },
          near: {
            pts: [
              [4, -128],
              [26, -136],
              [42, -166],
            ],
            hand: 'grip',
            deg: -70,
          },
        }}
        at={[318, 446]}
        scale={1.8}
      >
        <Letter at={[48, -178]} rot={-14} scale={1.25} seal />
      </Person>
    </g>
  )
}

export const edmundsLetter: LinocutArt = { width: W, height: H, Draw: EdmundsLetter }
