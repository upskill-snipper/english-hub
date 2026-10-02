import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK } from '@/components/comics/linocut/palette'
import { n } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Letter, Person, Sword, type P } from './people'
import { Trumpet } from './the-last-scene'
import {
  CampGround,
  Colours,
  FarTent,
  H,
  HORIZON,
  Pavilion,
  W,
  campMarks,
  footShadow,
} from './the-british-camp'

/**
 * Act 5, Scene 3: "The wheel comes full circle", the twenty-first moment in
 * the guide's timeline. The instant drawn is the duel itself, before anyone
 * falls. Every detail is from the scene in the held edition (Project
 * Gutenberg #1532, src/data/full-texts/king-lear.ts):
 *
 * - The British camp near Dover, its colours flying ("Enter in conquest with
 *   drum and colours, Edmund"), and Albany's tent ("Convey her to my tent"):
 *   ./the-british-camp.tsx. The colours fly over Edmund's side of the field,
 *   the one thing printed in the spot colour: his "fire-new fortune", which
 *   the duel is about to turn.
 * - "Let the trumpet sound" ... "Third trumpet. Trumpet answers within. Enter
 *   Edgar, armed, preceded by a trumpet." ... "Trumpets, speak! [Alarums.
 *   They fight. Edmund falls.]" So a trumpeter sounds on the left as they
 *   fight.
 * - Edgar answers the summons armed and unknown: "Know my name is lost". He
 *   is in mail, his head shut in a closed helm with only the slit for his
 *   eyes (the kit's `armed` and `helm`), and he drives forward. Edmund is
 *   armed too, "Thou art arm'd, Gloucester", bareheaded and known by his
 *   curls, and gives ground. Their swords cross above them: "Draw thy sword",
 *   "This sword of mine shall give them instant way".
 * - Albany watches with Goneril's letter in his hand, the paper he will show
 *   her a moment later: "Shut your mouth, dame, Or with this paper shall I
 *   stop it." Goneril watches beside him, frowning, her hand at her breast.
 *   Regan is not here: "My sickness grows upon me." ... "[Exit Regan, led.]"
 *   before the trumpet sounds.
 *
 * SAFEGUARDING. The duel shows swords and never a wound: the blades cross in
 * the air above the two men and touch no one. Edmund's fall, and the deaths
 * reported after it, are left to the words; the quotation is his, spoken when
 * he has fallen and his brother has named himself.
 *
 * The people are cut from the kit (./people.tsx); nothing is taken from a
 * film, television or stage production. Seed: 2101 (the camp).
 */

const FEET = 326
const SEA: [number, number] = [600, W]

/** Where each figure stands, and its scale. */
const TRUMPETER = { at: [78, 300] as P, s: 0.9 }
const EDGAR = { at: [330, FEET] as P, s: 1.12 }
const EDMUND = { at: [510, FEET] as P, s: 1.1 }
const ALBANY = { at: [700, 312] as P, s: 0.92 }
const GONERIL = { at: [790, 312] as P, s: 0.92 }

/** The sword hands, in each figure's own frame (facing right, feet at 0, 0). */
const EDGAR_WRIST: P = [52, -142]
const EDGAR_BLADE = -38
const EDMUND_WRIST: P = [34, -140]
const EDMUND_BLADE = -42

/** A point along a direction from a wrist: where a sword's grip sits in the fist. */
const along = (p: P, a: number, d: number): P => [
  p[0] + Math.cos((a * Math.PI) / 180) * d,
  p[1] + Math.sin((a * Math.PI) / 180) * d,
]

/** A figure's own frame, placed as `Person` places it, for a thing held behind its hand. */
const placed = (at: P, s: number, flip = false) =>
  `translate(${n(at[0])} ${n(at[1])}) scale(${n(flip ? -s : s)} ${n(s)})`

function TheWheelComesFullCircle(_: ArtProps) {
  const m = campMarks(
    2101,
    SEA,
    (x, y) => y > 290 && ((x > 30 && x < 130) || (x > 270 && x < 560) || x > 650),
  )
  return (
    <g className="lc-push" style={timing({ origin: [436, 120], push: 1.03 })}>
      <CampGround m={m} sea={SEA} />
      {/* far tents along the edge of the field, Albany's tent, the colours */}
      <FarTent x={300} base={HORIZON + 2} w={20} h={16} />
      <FarTent x={334} base={HORIZON + 2} w={16} h={13} />
      <FarTent x={560} base={HORIZON + 2} w={22} h={18} />
      <Pavilion x={170} base={244} w={112} wall={40} roof={52} door />
      <Colours x={606} foot={250} top={44} flagW={74} flagH={36} />
      <path
        d={
          footShadow(TRUMPETER.at[0] + 4, TRUMPETER.at[1], 24) +
          footShadow(EDGAR.at[0], FEET, 40, -2) +
          footShadow(EDMUND.at[0], FEET, 36, 2) +
          footShadow(ALBANY.at[0], ALBANY.at[1], 22) +
          footShadow(GONERIL.at[0], GONERIL.at[1], 24)
        }
        fill={INK}
      />

      {/* the trumpeter: "Trumpets, speak!" */}
      <Person
        at={TRUMPETER.at}
        scale={TRUMPETER.s}
        pose={{
          look: 'servant',
          head: { rot: -6 },
          far: {
            pts: [
              [-4, -128],
              [-10, -104],
              [-6, -82],
            ],
            hand: 'mitt',
          },
          near: {
            pts: [
              [6, -128],
              [26, -134],
              [33, -153],
            ],
            hand: 'grip',
            deg: -20,
          },
        }}
      >
        <Trumpet mouth={[18.5, -151]} angle={-20} len={76} />
      </Person>

      {/* the swords, behind the hands that hold them */}
      <g transform={placed(EDGAR.at, EDGAR.s)}>
        <Sword grip={along(EDGAR_WRIST, EDGAR_BLADE, 7)} angle={EDGAR_BLADE} len={96} />
      </g>
      <g transform={placed(EDMUND.at, EDMUND.s, true)}>
        <Sword grip={along(EDMUND_WRIST, EDMUND_BLADE, 7)} angle={EDMUND_BLADE} len={96} />
      </g>

      {/* Edgar, armed and unknown, driving forward */}
      <Person
        at={EDGAR.at}
        scale={EDGAR.s}
        pose={{
          look: 'edgar',
          armed: true,
          helm: true,
          body: { neck: [12, -130], hip: [2, -66] },
          head: { rot: 4 },
          legs: {
            far: [
              [-1, -66],
              [-16, -36],
              [-30, -3],
            ],
            near: [
              [5, -66],
              [24, -40],
              [32, -3],
            ],
          },
          far: {
            pts: [
              [4, -124],
              [-14, -108],
              [-28, -98],
            ],
            hand: 'open',
            deg: 160,
            thumb: -1,
          },
          near: {
            pts: [[16, -122], [36, -118], EDGAR_WRIST],
            hand: 'grip',
            deg: EDGAR_BLADE,
          },
        }}
      />

      {/* Edmund, armed and bareheaded, giving ground */}
      <Person
        at={EDMUND.at}
        scale={EDMUND.s}
        flip
        pose={{
          look: 'edmund',
          armed: true,
          sword: false,
          noCloak: true,
          frown: true,
          body: { neck: [-8, -134], hip: [2, -68] },
          head: { rot: -6 },
          legs: {
            far: [
              [-1, -68],
              [-14, -38],
              [-26, -3],
            ],
            near: [
              [5, -68],
              [20, -40],
              [28, -3],
            ],
          },
          far: {
            pts: [
              [-10, -126],
              [-24, -110],
              [-34, -98],
            ],
            hand: 'open',
            deg: 150,
            thumb: -1,
          },
          near: {
            pts: [[-4, -126], [16, -118], EDMUND_WRIST],
            hand: 'grip',
            deg: EDMUND_BLADE,
          },
        }}
      />

      {/* Albany, with Goneril's letter in his hand */}
      <Person
        at={ALBANY.at}
        scale={ALBANY.s}
        flip
        pose={{
          look: 'albany',
          head: { rot: 4 },
          far: {
            pts: [
              [-4, -128],
              [-10, -104],
              [-6, -82],
            ],
            hand: 'mitt',
          },
          near: {
            pts: [
              [5, -128],
              [14, -106],
              [24, -96],
            ],
            hand: 'grip',
            deg: -10,
          },
        }}
      >
        <Letter at={[34, -98]} rot={-12} scale={0.9} />
      </Person>

      {/* Goneril, watching, her hand at her breast */}
      <Person
        at={GONERIL.at}
        scale={GONERIL.s}
        flip
        pose={{
          look: 'goneril',
          head: { rot: 2 },
          far: {
            pts: [
              [-4, -122],
              [-8, -100],
              [-4, -80],
            ],
            hand: 'mitt',
          },
          near: {
            pts: [
              [4, -122],
              [14, -104],
              [8, -114],
            ],
            hand: 'open',
            deg: -70,
            size: 12,
            thumb: -1,
          },
        }}
      />
    </g>
  )
}

export const theWheelComesFullCircle: LinocutArt = {
  width: W,
  height: H,
  Draw: TheWheelComesFullCircle,
}
