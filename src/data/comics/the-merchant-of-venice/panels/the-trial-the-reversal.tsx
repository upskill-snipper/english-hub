import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { timing } from '@/components/comics/linocut/styles'

import { Court, FEET, H, W, footShadow } from './court-of-justice'
import { Person, type Pose } from './people'

/**
 * Act 4, Scene 1: "The trial: the reversal", the thirteenth moment in the
 * guide's timeline, in the court of "The trial: mercy refused"
 * (./court-of-justice.tsx), with everyone where that panel stands them, so
 * a student sees what has changed. Every detail is from the scene, as the
 * held edition prints it (src/data/full-texts/the-merchant-of-venice.ts):
 *
 * - PORTIA: "A pound of that same merchant's flesh is thine, / The court
 *   awards it and the law doth give it." SHYLOCK: "Most learned judge! A
 *   sentence! Come, prepare." PORTIA: "Tarry a little, there is something
 *   else. / This bond doth give thee here no jot of blood." So Shylock has
 *   stepped out towards Antonio and is checked where he stands, his head
 *   drawn back, and Portia, between them, holds up an open hand to stop him
 *   (on a bent arm, with the fingers apart, so it reads as "wait" and never
 *   as a salute).
 * - PORTIA: "I pray you let me look upon the bond." SHYLOCK: "Here 'tis".
 *   So the bond, and its seal in the spot colour, is now in Portia's other
 *   hand: "The words expressly are 'a pound of flesh'".
 * - PORTIA: "Are there balance here to weigh / The flesh?" SHYLOCK: "I have
 *   them ready." So a pair of scales stands on its stand behind Shylock.
 * - GRATIANO: "O upright judge! Mark, Jew. O learned judge!" So Gratiano, on
 *   the left, leans forward to hear. His taunts, and his glee, are left to
 *   the words.
 * - The Duke leans forward from his seat; the Magnificoes watch.
 *
 * SAFEGUARDING AND THIS PLAY'S RULES (./people.tsx). The knife is shown, as
 * the play shows it, but held low at Shylock's side and pointing at the
 * floor, the whole width of the court from Antonio, with Portia standing
 * between them. Antonio stands fully clothed among his friends ("Therefore
 * lay bare your bosom" is left to the words), and the scales stand empty,
 * far from him. The tension is in the faces and the hands. Shylock is
 * drawn upright, with the dignity the kit gives him, and nothing in the
 * picture mocks him. His defeat, his forced conversion and his exit are
 * not drawn here; the moment is the turn, "Tarry a little". The spot
 * colour is the seal of the bond, never blood.
 *
 * Nothing is taken from a film or stage production. The court's seeds are
 * in ./court-of-justice.tsx; this panel adds none.
 */

/**
 * Gratiano, leaning forward to hear. (He first threw up both hands, and at
 * panel size they met before his face and read as clapping: the art
 * cheering Shylock's fall, which it must not do.)
 */
const GRATIANO: Pose = {
  look: 'gratiano',
  head: { rot: 8 },
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
      [10, -106],
      [8, -86],
    ],
    hand: 'mitt',
  },
  sword: true,
}

const BASSANIO: Pose = {
  look: 'bassanio',
  head: { rot: -2 },
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
  head: { rot: -2 },
  far: {
    pts: [
      [-3, -130],
      [-5, -104],
      [-2, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [3, -130],
      [6, -104],
      [4, -84],
    ],
    hand: 'mitt',
  },
}

/** Portia: an open hand held up to stop him, "Tarry a little", the bond in her other hand. */
const PORTIA: Pose = {
  look: 'portia-doctor',
  head: { rot: -4 },
  far: {
    pts: [
      [-3, -130],
      [8, -112],
      [18, -122],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [30, -126],
      [44, -148],
    ],
    hand: 'open',
    deg: -72,
    thumb: -1,
    // Wide and large: at 13 degrees and 15 units the hand closed up at phone
    // width, beside her face, into what could be taken for a raised fist
    // (reviewed 27 September 2026).
    spread: 20,
    size: 17.5,
  },
}

const DUKE: Pose = {
  look: 'duke',
  head: { rot: 10 },
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

/** Shylock, checked as he steps forward, the knife held low at his side, turned to Portia. */
const SHYLOCK: Pose = {
  look: 'shylock',
  head: { rot: -12 },
  far: {
    pts: [
      [-3, -130],
      [6, -110],
      [14, -120],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [12, -106],
      [24, -90],
    ],
    hand: 'mitt',
    deg: 60,
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

/** The bond, in Portia's far hand, its seal hanging: in her frame. */
const BOND = 'M16 -128L36 -130L38 -96L18 -94Z'
const BOND_LINES = 'M20 -123L33 -124M20 -118L33 -119M20 -113L34 -114M20 -108L30 -109'
/** The knife in Shylock's hand, its blade pointing at the floor: in his frame. */
const KNIFE = 'M26 -84L30 -86L38 -58L37 -48L33 -56Z'
const KNIFE_HILT = 'M22 -84L33 -88L34 -85L23 -81Z'

/** The scales, "ready", on a stand on the floor behind Shylock. */
function Scales({ x }: { x: number }) {
  const top = 212
  return (
    <g strokeLinecap="round">
      <path
        d={`M${x} ${FEET}V${top}M${x - 30} ${top + 4}H${x + 30}M${x - 12} ${FEET}H${x + 12}`}
        stroke={PAPER}
        strokeWidth={7}
        fill="none"
      />
      <path
        d={`M${x} ${FEET}V${top}M${x - 30} ${top + 4}H${x + 30}M${x - 12} ${FEET}H${x + 12}`}
        stroke={INK}
        strokeWidth={3.6}
        fill="none"
      />
      {[-1, 1].map((s) => (
        <g key={s}>
          <path
            d={`M${x + s * 30} ${top + 4}L${x + s * 22} ${top + 34}M${x + s * 30} ${top + 4}L${x + s * 38} ${top + 34}`}
            stroke={INK}
            strokeWidth={1.2}
          />
          <path
            d={`M${x + s * 19} ${top + 34}H${x + s * 41}Q${x + s * 30} ${top + 46} ${x + s * 19} ${top + 34}Z`}
            fill={INK}
            stroke={PAPER}
            strokeWidth={1.4}
          />
        </g>
      ))}
      <circle cx={x} cy={top - 2} r={4} fill={INK} stroke={PAPER} strokeWidth={1.4} />
    </g>
  )
}

function Reversal(_: ArtProps) {
  return (
    <g className="lc-push" style={timing({ origin: [430, 200], push: 1.03 })}>
      <Court duke={{ pose: DUKE, flip: true }} />
      <path
        d={
          footShadow(46, 26) +
          footShadow(106, 26) +
          footShadow(166, 26) +
          footShadow(318, 30) +
          footShadow(470, 30) +
          footShadow(760, 22)
        }
        fill={INK}
      />
      <Scales x={600} />
      <Person pose={GRATIANO} at={[46, FEET]} />
      <Person pose={BASSANIO} at={[106, FEET]} />
      <Person pose={ANTONIO} at={[170, FEET]} />
      <Person pose={PORTIA} at={[318, FEET]} scale={1.04}>
        <path d={BOND} fill={PAPER} stroke={INK} strokeWidth={1.2} />
        <path d={BOND_LINES} fill="none" stroke={INK} strokeWidth={1} />
        <path d="M27 -96L24 -87M29 -96L32 -87" stroke={RED} strokeWidth={1.6} />
        <circle cx={28} cy={-96} r={4.2} fill={RED} stroke={INK} strokeWidth={0.8} />
      </Person>
      <Person pose={SHYLOCK} at={[470, FEET]} flip>
        <path d={KNIFE} fill={PAPER} stroke={INK} strokeWidth={1} />
        <path d={KNIFE_HILT} fill={INK} stroke={PAPER} strokeWidth={1} />
      </Person>
      <Person pose={NERISSA} at={[760, FEET]} flip>
        <path d="M18 -122L30 -126L34 -104L22 -100Z" fill={PAPER} stroke={INK} strokeWidth={1} />
      </Person>
    </g>
  )
}

export const theTrialTheReversal: LinocutArt = { width: W, height: H, Draw: Reversal }
