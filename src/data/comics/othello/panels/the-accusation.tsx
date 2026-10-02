import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, gouge, n, type Pt } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { FLOOR, Floor, H, OpenDoor, W, chamberMarks } from './bedchamber'
import { daySky } from './garden'
import { Person, type Pose } from './people'
import { OffTheirFeet } from './seated'

/**
 * Act 4, Scene 2: "The accusation", the twelfth moment in the guide's
 * timeline. Every detail is from the scene in the held edition
 * (src/data/full-texts/othello.ts):
 *
 * - "Cyprus. A Room in the Castle." A room of the same castle as the
 *   bedchamber, so its stone wall, its flagged floor and its door are cut
 *   with ./bedchamber.tsx's tools. It is not yet night: the scene ends with
 *   the trumpets that "summon to supper". So the light is day's last, from a
 *   tall window in the wall.
 * - OTHELLO, to Emilia: "shut the door. / Cough, or cry hem, if anybody
 *   come." "[Exit Emilia.]" So Emilia is at the door, the door standing open on
 *   the dark passage, turned back towards her mistress as she goes: the moment
 *   the guide's own reading of the scene asks for, "Emilia at the door".
 * - DESDEMONA: "Upon my knees, what doth your speech import? / I understand a
 *   fury in your words, / But not the words." So she kneels (./seated.tsx),
 *   her face turned up to him and both hands open before her, asking: her
 *   bewilderment, which the quotation names. Her hair is still pinned up, as
 *   the kit dresses it until 4.3.
 * - DESDEMONA: "Alas the heavy day, why do you weep? / Am I the motive of
 *   these tears, my lord?" So Othello weeps: he stands apart from her, against
 *   the window, his head bowed and his hand to his brow over his eyes.
 *
 * LEFT OUT, on purpose. Everything Othello calls her in this scene, and what
 * he calls Emilia, is never quoted or drawn (the play's own rule, ../index.ts).
 * He does not stand over her or reach towards her: the width of the room is
 * between them, and his hands are his own. His sword is not drawn on him.
 * Iago and Roderigo come later in the scene and are not here. Nothing is
 * taken from a film or stage production; the people are the kit's
 * (./people.tsx): Othello's face in ink, modelled by the light; Desdemona's
 * and Emilia's lit.
 *
 * Seeds: 1201 (the wall and the floor), 1202 (the sky in the window).
 */

/** The tall window behind Othello: its opening's sides, the top of its arch's springing, and its sill. */
const WIN = { x0: 584, x1: 664, spring: 92, sill: 196 }
/** The door Emilia stands in, open on the passage. */
const DOOR = { x0: 52, x1: 124, top: 98 }
/** Where the day comes in. */
const LIGHT: Pt = [624, 150]

type Marks = { room: ReturnType<typeof chamberMarks>; sky: string }
let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const light = (x: number, y: number) =>
    Math.max(clamp(1 - Math.hypot((x - LIGHT[0]) * 0.7, (y - LIGHT[1]) * 1.1) / 420) ** 1.2, 0.05)
  const hidden = (x: number, y: number) =>
    (x > WIN.x0 - 16 &&
      x < WIN.x1 + 16 &&
      y > WIN.spring - (WIN.x1 - WIN.x0) / 2 - 16 &&
      y < WIN.sill + 12) ||
    (x > DOOR.x0 - 14 && x < DOOR.x1 + 84 && y > DOOR.top - 12)
  cached = {
    room: chamberMarks(1201, light, hidden),
    sky: daySky(1202, { x0: WIN.x0, x1: WIN.x1, y0: 40, y1: WIN.sill }, (_x, y) => 0.42 - y / 700),
  }
  return cached
}

/** The tall arched window: a deep stone reveal, the evening sky in it, its mullion and the sill. */
function TallWindow({ clip, sky }: { clip: string; sky: string }) {
  const { x0, x1, spring, sill } = WIN
  const r = (x1 - x0) / 2
  const opening = `M${x0} ${sill}V${spring}A${n(r)} ${n(r)} 0 0 1 ${x1} ${spring}V${sill}Z`
  const outer = `M${x0 - 10} ${sill + 6}V${spring}A${n(r + 10)} ${n(r + 10)} 0 0 1 ${x1 + 10} ${spring}V${sill + 6}Z`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={opening} />
        </clipPath>
      </defs>
      <path d={outer} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={opening} fill={PAPER} />
      <g clipPath={`url(#${clip})`}>
        <path d={sky} fill={INK} />
      </g>
      {/* the mullion only: a transom crossed it behind Othello's head, and a
          cross behind a weeping man's head is a symbol the play does not give */}
      <path d={`M${(x0 + x1) / 2} ${spring - r}V${sill}`} stroke={INK} strokeWidth={3} />
      <path
        d={`M${x0 - 16} ${sill}H${x1 + 16}V${sill + 8}H${x0 - 16}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.2}
      />
      {/* the light the window throws down the wall below it */}
      <path
        d={
          gouge(x0 + 6, sill + 14, x0 - 6, FLOOR - 8, 1.6, 0) +
          gouge(x1 - 6, sill + 14, x1 + 6, FLOOR - 8, 1.6, 0)
        }
        fill={PAPER}
      />
    </g>
  )
}

/** Emilia, in the doorway, turned back to her mistress as she goes, one open hand raised a little before her. */
const EMILIA: Pose = {
  look: 'emilia',
  eye: 'open',
  head: { rot: 2 },
  far: {
    pts: [
      [-3, -126],
      [-6, -102],
      [-4, -80],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -126],
      [10, -102],
      [24, -110],
    ],
    hand: 'open',
    deg: -48,
    thumb: -1,
    size: 13,
  },
}

/**
 * Desdemona on her knees, her face turned up to him, both hands open before
 * her at the height of her breast, asking: never raised above her head, and
 * never towards him like a blow warded off.
 */
const DESDEMONA: Pose = {
  look: 'desdemona',
  eye: 'open',
  head: { rot: -12 },
  far: {
    pts: [
      [-3, -126],
      [10, -110],
      [24, -118],
    ],
    hand: 'open',
    deg: -40,
    thumb: -1,
    size: 13,
  },
  near: {
    pts: [
      [4, -126],
      [18, -106],
      [32, -112],
    ],
    hand: 'open',
    deg: -22,
    thumb: -1,
    size: 13,
  },
}

/** Othello, flipped to face her across the room: his head bowed, his hand to his brow over his eyes. */
const OTHELLO: Pose = {
  look: 'othello',
  sword: false,
  eye: 'down',
  head: { rot: 14 },
  far: {
    pts: [
      [-3, -130],
      [-7, -104],
      [-5, -82],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [5, -130],
      [24, -118],
      [22, -146],
    ],
    hand: 'open',
    deg: -116,
    thumb: 1,
    size: 15,
  },
}

function TheAccusation({ uid }: ArtProps) {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [430, 190], push: 1.03 })}>
      <path d={m.room.wall} fill={PAPER} />
      <TallWindow clip={`${uid}-win`} sky={m.sky} />
      <OpenDoor x0={DOOR.x0} x1={DOOR.x1} top={DOOR.top} />
      <Floor marks={m.room} />
      <Person pose={EMILIA} at={[90, 318]} scale={1.12} />
      <OffTheirFeet
        uid={uid}
        id="desd"
        pose={DESDEMONA}
        how="kneeling"
        at={[392, 318]}
        scale={1.12}
        seat={44}
      />
      <Person pose={OTHELLO} at={[626, 318]} scale={1.12} flip />
    </g>
  )
}

export const theAccusation: LinocutArt = { width: W, height: H, Draw: TheAccusation }
