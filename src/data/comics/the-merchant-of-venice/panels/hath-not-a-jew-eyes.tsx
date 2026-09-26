import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { timing } from '@/components/comics/linocut/styles'

import { Person, type Pose } from './people'
import { FEET, H, MooringPost, VeniceCanal, W, footShadow } from './venice-canal'

/**
 * Act 3, Scene 1: "Hath not a Jew eyes?", the eighth moment in the guide's
 * timeline. Every detail is from the scene, as the held edition prints it
 * (src/data/full-texts/the-merchant-of-venice.ts):
 *
 * - "Venice. A street." "Now, what news on the Rialto?" It is the street of
 *   the other Venice panels of moments 6 to 10 (./venice-canal.tsx), by day.
 * - "Enter Solanio and Salarino." "Enter Shylock." The speech is made to the
 *   two of them. Tubal comes in only after they have gone ("Exeunt Solanio,
 *   Salarino and the Servant"), so he is not drawn, and nor is the servant,
 *   who comes and goes after the speech.
 * - SALARINO: "Why, I am sure if he forfeit, thou wilt not take his flesh!
 *   What's that good for?" So Salarino, in his round cap, nearest Shylock,
 *   holds out an open hand as he asks. Solanio, bareheaded with his short
 *   beard, stands behind him with his hand on his hip. They have been
 *   taunting Shylock about his daughter; the panel shows them standing their
 *   ground, and nobody touches anybody.
 * - SHYLOCK: "Hath not a Jew eyes? Hath not a Jew hands, organs, dimensions,
 *   senses, affections, passions?" He faces them upright, alone on his side
 *   of the street, against the sunlit houses across the water: one hand
 *   laid open on his own breast, the other held out open towards them, palm
 *   up, arguing. He is the same Shylock as in every panel (./people.tsx): old,
 *   with his grey beard and hair, bareheaded, in the long plain gaberdine,
 *   and as tall as the men he answers.
 * - "warmed and cooled by the same winter and summer as a Christian is": the
 *   spot colour is the sun, high over the street between them, shining on
 *   both sides of it alike. (A flush on Shylock's cheek was tried first; at
 *   panel size it sat just over his beard, where it could be taken for a
 *   red mouth, and was dropped.)
 *
 * The quotation is Shylock's own question, the line the play gives him to
 * argue for his humanity; the speech goes on to justify revenge, and the
 * guide asks the student to hold both. Nothing is taken from a film or stage
 * production. Seed: 8801 (the street).
 */

/** Solanio, facing Shylock, his near hand on his hip. */
const SOLANIO: Pose = {
  look: 'solanio',
  head: { rot: -3 },
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
      [21, -104],
      [9, -86],
    ],
    hand: 'mitt',
    deg: 170,
  },
}

/** Salarino, asking his question: his near hand held out open, palm up. */
const SALARINO: Pose = {
  look: 'salarino',
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
      [18, -106],
      [34, -112],
    ],
    hand: 'open',
    deg: -12,
    thumb: -1,
  },
}

/**
 * Shylock (flipped to face left): upright, his head level, his near hand
 * laid open on his breast and his far hand held out open towards them.
 */
const SHYLOCK: Pose = {
  look: 'shylock',
  head: { rot: -3 },
  far: {
    pts: [
      [-4, -128],
      [12, -108],
      [34, -114],
    ],
    hand: 'open',
    deg: -10,
    thumb: -1,
  },
  near: {
    pts: [
      [5, -128],
      [15, -100],
      [13, -114],
    ],
    hand: 'open',
    deg: -94,
    size: 14,
    spread: 10,
    thumb: 1,
  },
}
/** The sun, high over the street between them. */
const SUN: [number, number] = [506, 30]

function HathNotAJewEyes(_: ArtProps) {
  return (
    <g className="lc-push" style={timing({ origin: [600, 170], push: 1.03 })}>
      <VeniceCanal
        seed={8801}
        gap={40}
        sky={
          <>
            <circle cx={SUN[0]} cy={SUN[1]} r={21} fill={PAPER} />
            <circle cx={SUN[0]} cy={SUN[1]} r={15} fill={RED} />
          </>
        }
        near={<MooringPost x={150} top={146} />}
      />
      <path d={footShadow(236, 34) + footShadow(352, 36) + footShadow(612, 40)} fill={INK} />
      <Person pose={SOLANIO} at={[236, FEET]} scale={1.12} />
      <Person pose={SALARINO} at={[352, FEET]} scale={1.12} />
      <Person pose={SHYLOCK} at={[612, FEET]} scale={1.14} flip />
    </g>
  )
}

export const hathNotAJewEyes: LinocutArt = { width: W, height: H, Draw: HathNotAJewEyes }
