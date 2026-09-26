import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { timing } from '@/components/comics/linocut/styles'

import { Court, FEET, H, W, footShadow } from './court-of-justice'
import { Person, type Pose } from './people'

/**
 * Act 4, Scene 1: "The trial: mercy refused", the twelfth moment in the
 * guide's timeline. Every detail is from the scene, as the held edition
 * prints it (src/data/full-texts/the-merchant-of-venice.ts):
 *
 * - "Venice. A court of justice." The court is cut once, in
 *   ./court-of-justice.tsx, for this moment and the two after it: the Duke
 *   in his seat above the court, the Magnificoes on their benches, two high
 *   windows of daylight.
 * - PORTIA: "Which is the merchant here? And which the Jew?" DUKE: "Antonio
 *   and old Shylock, both stand forth." So the two parties stand out on the
 *   floor, Antonio on the left with his friends and Shylock on the right,
 *   and Portia between them.
 * - "Enter Portia dressed like a doctor of laws": the kit's
 *   'portia-doctor', in a doctor's robe and square cap, small, her fair hair
 *   tucked up. PORTIA: "Then must the Jew be merciful." SHYLOCK: "On what
 *   compulsion must I? Tell me that." PORTIA: "The quality of mercy is not
 *   strain'd". So she holds out an open hand to him as she pleads.
 * - SHYLOCK: "My deeds upon my head! I crave the law, / The penalty and
 *   forfeit of my bond." So Shylock stands upright, his head up, and holds
 *   the bond out before him: a sheet of writing with its seal hanging from
 *   it ("Till thou canst rail the seal from off my bond"). The seal is the
 *   spot colour, because the bond is what the scene turns on; in "The
 *   trial: the reversal" it has passed into Portia's hand ("I pray you let
 *   me look upon the bond. / Here 'tis, most reverend doctor").
 * - ANTONIO: "I do oppose / My patience to his fury, and am arm'd / To
 *   suffer with a quietness of spirit". So Antonio, clothed as the kit
 *   dresses him, stands with his head bowed and his hands folded, and
 *   Bassanio ("Good cheer, Antonio! What, man, courage yet!") reaches a hand
 *   to his shoulder. Gratiano stands behind them.
 * - "Enter Nerissa dressed like a lawyer's clerk. [Presents a letter.]" So
 *   the clerk, the kit's 'nerissa-clerk', stands at the far right with
 *   Bellario's letter.
 * - The Duke, the kit's 'duke', looks down from his seat towards Portia.
 *
 * THIS PLAY'S RULES (./people.tsx). Shylock is drawn upright and with
 * dignity, his head the same man's head every man in the kit wears; nobody
 * strikes or spits at him, and none of the abuse the Christians speak in
 * this scene is on the art. The knife is not drawn in this moment, and
 * Antonio is clothed. The spot colour is the seal, never blood.
 *
 * Nothing is taken from a film or stage production. The court's seeds are
 * in ./court-of-justice.tsx; this panel adds none.
 */

const GRATIANO: Pose = {
  look: 'gratiano',
  head: { rot: 2 },
  far: {
    pts: [
      [-3, -130],
      [-6, -104],
      [-4, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [14, -108],
      [6, -88],
    ],
    hand: 'mitt',
  },
  sword: true,
}

const BASSANIO: Pose = {
  look: 'bassanio',
  head: { rot: 4 },
  far: {
    pts: [
      [-3, -130],
      [-4, -104],
      [0, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [22, -118],
      [38, -128],
    ],
    hand: 'open',
    deg: 6,
    thumb: -1,
    spread: 10,
  },
  cloak: 2,
  sword: true,
}

const ANTONIO: Pose = {
  look: 'antonio',
  head: { rot: 10 },
  far: {
    pts: [
      [-3, -130],
      [4, -106],
      [14, -98],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [3, -130],
      [8, -104],
      [16, -100],
    ],
    hand: 'mitt',
  },
}

const PORTIA: Pose = {
  look: 'portia-doctor',
  head: { rot: 2 },
  far: {
    pts: [
      [-3, -130],
      [6, -110],
      [12, -122],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [22, -112],
      [42, -116],
    ],
    hand: 'open',
    deg: -16,
    thumb: -1,
  },
}

const DUKE: Pose = {
  look: 'duke',
  head: { rot: 4 },
  far: {
    pts: [
      [-4, -130],
      [8, -112],
      [24, -106],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [14, -110],
      [30, -106],
    ],
    hand: 'mitt',
  },
}

const SHYLOCK: Pose = {
  look: 'shylock',
  head: { rot: -4 },
  far: {
    pts: [
      [-3, -130],
      [-6, -104],
      [-4, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [16, -108],
      [32, -116],
    ],
    hand: 'mitt',
    deg: -70,
  },
}

const NERISSA: Pose = {
  look: 'nerissa-clerk',
  head: { rot: 4 },
  far: {
    pts: [
      [-3, -130],
      [-5, -104],
      [-3, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [3, -130],
      [10, -108],
      [20, -114],
    ],
    hand: 'mitt',
  },
}

/** The bond, in Shylock's hand: a sheet of writing with its seal hanging below, in his frame. */
const BOND = 'M28 -120L50 -122L52 -86L30 -84Z'
const BOND_LINES = 'M32 -115L47 -116M32 -110L47 -111M32 -105L48 -106M32 -100L44 -101'

function MercyRefused(_: ArtProps) {
  return (
    <g className="lc-push" style={timing({ origin: [430, 200], push: 1.03 })}>
      <Court duke={{ pose: DUKE, flip: true }} />
      <path
        d={
          footShadow(52, 26) +
          footShadow(112, 26) +
          footShadow(172, 26) +
          footShadow(318, 30) +
          footShadow(566, 30) +
          footShadow(760, 22)
        }
        fill={INK}
      />
      <Person pose={GRATIANO} at={[52, FEET]} />
      <Person pose={BASSANIO} at={[112, FEET]} />
      <Person pose={ANTONIO} at={[176, FEET]} />
      <Person pose={PORTIA} at={[318, FEET]} scale={1.04} />
      <Person pose={SHYLOCK} at={[566, FEET]} flip>
        <path d={BOND} fill={PAPER} stroke={INK} strokeWidth={1.2} />
        <path d={BOND_LINES} fill="none" stroke={INK} strokeWidth={1} />
        <path d="M40 -85L37 -76M42 -85L45 -76" stroke={RED} strokeWidth={1.6} />
        <circle cx={41} cy={-85} r={4.2} fill={RED} stroke={INK} strokeWidth={0.8} />
      </Person>
      <Person pose={NERISSA} at={[760, FEET]} flip>
        <path d="M18 -122L30 -126L34 -104L22 -100Z" fill={PAPER} stroke={INK} strokeWidth={1} />
      </Person>
    </g>
  )
}

export const theTrialMercyRefused: LinocutArt = { width: W, height: H, Draw: MercyRefused }
