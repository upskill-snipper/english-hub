import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { gouge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, type Pose } from './people'
import { FEET, H, MooringPost, VeniceCanal, W, footShadow } from './venice-canal'

/**
 * Act 3, Scene 3: "I'll have my bond", the tenth moment in the guide's
 * timeline. Every detail is from the scene, as the held edition prints it
 * (src/data/full-texts/the-merchant-of-venice.ts):
 *
 * - "Venice. A street." "Enter Shylock, Salarino, Antonio and Gaoler." These
 *   four and nobody else. It is the street of the other Venice panels of
 *   moments 6 to 10 (./venice-canal.tsx), by day: the trial is "Tomorrow".
 * - ANTONIO: "Hear me yet, good Shylock." "I pray thee hear me speak." So
 *   Antonio, in his merchant's gown and round cap (./people.tsx), his head a
 *   little bowed, holds out an open hand after Shylock. He is in custody
 *   ("Gaoler, look to him"), so the gaoler stands at his shoulder: a plain
 *   man in a jerkin and a steel cap, the keys of his office at his belt
 *   (added to the kit for this panel). Nobody is chained or bound: the text
 *   says neither. Salarino, in his round cap, stands behind them.
 * - SHYLOCK: "I'll have my bond. I will not hear thee speak." "Follow not, /
 *   I'll have no speaking, I will have my bond." "Exit." So Shylock, upright,
 *   his head level, has turned his back on them and is going, some way off
 *   on the right, towards the bridge over the side canal; he does not look
 *   back. In his hand is the bond,
 *   sealed "at the notary's" (1.3): a folded deed with its seal hanging from
 *   it on a cord. The seal is the spot colour: the bond is what the scene,
 *   and the play from here to the trial, turns on. He holds it before him,
 *   not clutched: it is a document, not money.
 *
 * The quotation is Shylock's refusal, the line of the scene's title. The
 * line the guide quotes for the moment, "Thou call'dst me dog before thou
 * hadst a cause", turns the Christians' insult into a threat; a slur is
 * never a panel's quotation on this text, so it is left to the guide.
 * Nothing is taken from a film or stage production. Seed: 1001 (the street).
 */

/** Salarino, behind them, his hands at rest. */
const SALARINO: Pose = {
  look: 'salarino',
  head: { rot: 4 },
  cloak: 1,
  far: {
    pts: [
      [-4, -128],
      [-8, -100],
      [-5, -74],
    ],
  },
  near: {
    pts: [
      [5, -128],
      [9, -100],
      [7, -76],
    ],
  },
}

/** The gaoler, at Antonio's shoulder, watching Shylock go. */
const GAOLER: Pose = {
  look: 'gaoler',
  far: {
    pts: [
      [-4, -128],
      [-10, -100],
      [-8, -76],
    ],
  },
  near: {
    pts: [
      [5, -128],
      [14, -104],
      [10, -82],
    ],
  },
}

/**
 * Antonio, pleading: his head a little bowed, his near hand held out open
 * after Shylock, palm up, on a bent arm.
 */
const ANTONIO: Pose = {
  look: 'antonio',
  head: { rot: 7 },
  far: {
    pts: [
      [-4, -128],
      [-8, -100],
      [-5, -76],
    ],
  },
  near: {
    pts: [
      [5, -128],
      [22, -110],
      [42, -114],
    ],
    hand: 'open',
    deg: -8,
    thumb: -1,
  },
}

/**
 * Shylock, turned away to the right, going: upright, his head level, his
 * gaberdine's hem a little fuller before and behind than when he stands
 * still, the bond held before him in his near hand.
 */
const SHYLOCK: Pose = {
  look: 'shylock',
  head: { rot: -3 },
  hem: { front: 30, back: 34 },
  far: {
    pts: [
      [-4, -128],
      [-12, -102],
      [-16, -80],
    ],
  },
  near: {
    pts: [
      [5, -128],
      [12, -104],
      [28, -106],
    ],
    hand: 'mitt',
    deg: -8,
  },
}

/**
 * The bond, in Shylock's frame, at his near hand: a folded deed held upright,
 * the lines of its writing cut in ink, and its seal hanging on a cord below.
 */
const DEED = 'M26 -128L44 -130L46 -98L28 -96Z'
const DEED_LINES =
  gouge(29.4, -123, 41.6, -124.4, 0.6) +
  gouge(29.8, -118, 42, -119.2, 0.6) +
  gouge(30, -113, 42.4, -114.2, 0.6) +
  gouge(30.4, -108, 40, -109, 0.6)
const CORD = 'M37 -97.4C37.4 -94.4 37.8 -92.4 38.4 -90.4'
const SEAL: [number, number] = [38.6, -86.4]

function IllHaveMyBond(_: ArtProps) {
  return (
    <g className="lc-push" style={timing({ origin: [560, 190], push: 1.03 })}>
      <VeniceCanal seed={1001} gap={712} near={<MooringPost x={470} top={148} />} />
      <path
        d={footShadow(118, 32) + footShadow(232, 34) + footShadow(330, 36) + footShadow(612, 44)}
        fill={INK}
      />
      <Person pose={SALARINO} at={[118, FEET]} scale={1.12} />
      <Person pose={GAOLER} at={[232, FEET]} scale={1.12} />
      <Person pose={ANTONIO} at={[330, FEET]} scale={1.12} />
      <Person pose={SHYLOCK} at={[612, FEET]} scale={1.14}>
        <path d={DEED} fill={PAPER} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
        <path d={DEED_LINES} fill={INK} />
        <path d={CORD} fill="none" stroke={PAPER} strokeWidth={1.2} />
        <circle cx={SEAL[0]} cy={SEAL[1]} r={5.6} fill={PAPER} />
        <circle cx={SEAL[0]} cy={SEAL[1]} r={4.4} fill={RED} />
      </Person>
    </g>
  )
}

export const illHaveMyBond: LinocutArt = { width: W, height: H, Draw: IllHaveMyBond }
