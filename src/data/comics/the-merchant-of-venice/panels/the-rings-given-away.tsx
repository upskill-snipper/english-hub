import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Court, FEET, H, W, footShadow } from './court-of-justice'
import { Person, type Pose } from './people'

/**
 * Act 4, Scene 1: "The rings given away", the fourteenth moment in the
 * guide's timeline, in the court of the trial (./court-of-justice.tsx), so
 * a student knows where they are. Every detail is from the scene, as the
 * held edition prints it (src/data/full-texts/the-merchant-of-venice.ts):
 *
 * - "Exeunt Duke and his train." So the court has risen: the Duke's chair
 *   under its canopy and the Magnificoes' benches are empty, and the people
 *   left on the floor are the ones the scene names.
 * - PORTIA: "[To Antonio.] Give me your gloves, I'll wear them for your
 *   sake. / [To Bassanio.] And, for your love, I'll take this ring from you.
 *   / Do not draw back your hand". So Portia, still disguised as the doctor
 *   (the kit's 'portia-doctor'), holds out her open hand for the ring, with
 *   Antonio's gloves hanging from the other, and Bassanio draws his hand
 *   back, away from her, with the ring on it.
 * - BASSANIO: "There's more depends on this than on the value"; "Good sir,
 *   this ring was given me by my wife". His other hand is laid on his
 *   breast, but it is the far hand, ink on his ink doublet with no edge cut
 *   round it, so the print does not show it and the alt text does not claim
 *   it (reviewed 27 September 2026). The ring is the spot colour, the thing
 *   the rest of the play turns on; it is cut as a ring, a red band with a
 *   paper edge, and light glints round it, so that at any size it reads as a
 *   ring on a finger and never as a mark on the hand.
 * - ANTONIO: "My Lord Bassanio, let him have the ring." So Antonio, his
 *   gloves given away, stands behind his friend, looking on, with Gratiano
 *   ("Go, Gratiano, run and overtake him"). Nerissa, still the clerk,
 *   stands behind Portia with the deed of gift she has been told to draw
 *   ("Clerk, draw a deed of gift").
 *
 * The people are cut from ./people.tsx, and nothing is taken from a film or
 * stage production. The court's seeds are in ./court-of-justice.tsx; this
 * panel adds none.
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

const ANTONIO: Pose = {
  look: 'antonio',
  head: { rot: 6 },
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

/**
 * Bassanio, drawing back the hand with the ring on it, away from the doctor,
 * the other laid on his breast: "Do not draw back your hand".
 */
const BASSANIO: Pose = {
  look: 'bassanio',
  head: { rot: -4 },
  far: {
    pts: [
      [-3, -130],
      [8, -110],
      [12, -122],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [-12, -112],
      [-22, -124],
    ],
    hand: 'open',
    deg: -118,
    thumb: 1,
    spread: 11,
    size: 19,
  },
  cloak: 3,
  sword: true,
}
/** Where the ring sits on that hand, on the ring finger, in his frame. */
const RING: [number, number] = [-28.5, -133]
/**
 * Its glints: short paper cuts standing out round it, so it reads as a ring
 * catching the light and never as a mark on the hand.
 */
const RING_GLINTS = [0, 60, 120, 180, 240, 300]
  .map((a) => {
    const c = Math.cos((a * Math.PI) / 180)
    const s = Math.sin((a * Math.PI) / 180)
    return wedge(RING[0] + c * 7, RING[1] + s * 7, RING[0] + c * 12, RING[1] + s * 12, 1.6, 0.3)
  })
  .join('')

/** Portia, the doctor, holding out her open hand for the ring, Antonio's gloves in the other. */
const PORTIA: Pose = {
  look: 'portia-doctor',
  head: { rot: 2 },
  far: {
    pts: [
      [-3, -130],
      [4, -108],
      [14, -100],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [22, -114],
      [42, -116],
    ],
    hand: 'open',
    deg: -10,
    thumb: -1,
  },
}

const NERISSA: Pose = {
  look: 'nerissa-clerk',
  head: { rot: 2 },
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

/** Antonio's gloves, hanging from Portia's far hand: in her frame. */
const GLOVES =
  'M14 -102L22 -101L23 -84L21 -76L19 -84L17 -76L15 -84Z' + 'M20 -100L27 -97L26 -82L24 -76L22 -83Z'

function RingsGivenAway(_: ArtProps) {
  return (
    <g className="lc-push" style={timing({ origin: [500, 200], push: 1.03 })}>
      <Court sitting={false} />
      <path
        d={
          footShadow(120, 26) +
          footShadow(212, 26) +
          footShadow(344, 28) +
          footShadow(506, 30) +
          footShadow(628, 22)
        }
        fill={INK}
      />
      <Person pose={GRATIANO} at={[120, FEET]} />
      <Person pose={ANTONIO} at={[212, FEET]} />
      <Person pose={BASSANIO} at={[344, FEET]} scale={1.04}>
        <path d={RING_GLINTS} fill={PAPER} />
        <circle cx={RING[0]} cy={RING[1]} r={4.6} fill={PAPER} />
        <circle cx={RING[0]} cy={RING[1]} r={2.9} fill="none" stroke={INK} strokeWidth={2.8} />
        <circle cx={RING[0]} cy={RING[1]} r={2.9} fill="none" stroke={RED} strokeWidth={1.8} />
      </Person>
      <Person pose={PORTIA} at={[506, FEET]} scale={1.04} flip>
        <path d={GLOVES} fill={PAPER} stroke={INK} strokeWidth={1} />
      </Person>
      <Person pose={NERISSA} at={[628, FEET]} flip>
        <path d="M18 -122L30 -126L34 -104L22 -100Z" fill={PAPER} stroke={INK} strokeWidth={1} />
      </Person>
    </g>
  )
}

export const theRingsGivenAway: LinocutArt = { width: W, height: H, Draw: RingsGivenAway }
