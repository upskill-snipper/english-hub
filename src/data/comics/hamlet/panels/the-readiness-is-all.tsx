import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { timing } from '@/components/comics/linocut/styles'

import { H, HallBack, Table, W } from './hall'
import { Person, rapier } from './people'

/**
 * Act 5, Scene 2: "The readiness is all", the nineteenth moment in the
 * guide's timeline. The panel draws the moment of its quotation. Every detail
 * is from the scene in the held edition (src/data/full-texts/hamlet.ts,
 * Project Gutenberg #1524):
 *
 * - The hall is ./hall.tsx's, the same as in "The duel" and "The rest is
 *   silence": its great window, the day's light across the flags, and the
 *   table by the wall, bare, because the wine is not set on it until the King
 *   comes in ("Set me the stoups of wine upon that table").
 * - HAMLET: "Here's the commission, read it at more leisure." It is the
 *   King's order for his death, whose seal Hamlet broke on the ship ("to
 *   unseal Their grand commission"). So Horatio holds it, folded, its broken
 *   seal in the spot colour: the King's treachery, in his friend's hand. He
 *   holds it against his chest: held out between them, it read as a letter
 *   being handed over.
 * - Osric has brought the wager and gone ("Exit Osric"), and so has the Lord
 *   after him, so the two friends are alone. HORATIO: "You will lose this
 *   wager, my lord ... If your mind dislike anything, obey it." So Horatio
 *   faces Hamlet, his brow drawn up in worry.
 * - The quotation's next line is the stage direction "Enter King, Queen,
 *   Laertes, Lords, Osric and Attendants with foils", and it is Osric who
 *   hands them out ("Give them the foils, young Osric"). So Osric comes in
 *   from the left, first of the court, in his tall plumed hat, the hat
 *   Hamlet teased him to put on ("Put your bonnet to his right use"), with
 *   the two foils carried point down behind him.
 * - HAMLET: "Not a whit, we defy augury ... If it be now, 'tis not to come;
 *   if it be not to come, it will be now; if it be not now, yet it will come.
 *   The readiness is all." So Hamlet stands calm in the light of the window,
 *   his open hand let fall low and away from him: he has stopped trying to
 *   steer what comes.
 * - The people are the kit's (./people.tsx): Hamlet bareheaded in his black
 *   doublet and cloak, Horatio in his scholar's cap and gown with his white
 *   band.
 *
 * Nothing is taken from a film or stage production. Seeds: the hall's own
 * (./hall.tsx).
 */

/** The commission, folded, in Horatio's frame, held by its edge in his hand. */
const LETTER = 'M12 -128L32 -130L33 -112L13 -110Z'
const LETTER_LINES = 'M16 -125.4L28.6 -126.6M16.4 -121.4L29 -122.6'
/**
 * Its broken seal, the spot colour, on the sheet below the writing and wholly
 * on the paper. (It was first set on the sheet's foot and hung over its edge
 * onto Horatio's dark wrist, which the letter's foot meets: red on a hand,
 * which the kit's rule forbids. Reviewed 2 October 2026.)
 */
const SEAL = 'M19.2 -117.2a3.4 3.4 0 1 0 6.8 0a3.4 3.4 0 1 0 -6.8 0Z'
const SEAL_CRACK = 'M21.2 -119.8L23.2 -117.2L22 -114.6'

function TheReadinessIsAll({ uid }: ArtProps) {
  return (
    <g className="lc-push" style={timing({ origin: [560, 190], push: 1.03 })}>
      <HallBack uid={uid} />
      <Table />

      {/* Osric, coming in first of the court with the foils */}
      <Person
        at={[214, 314]}
        scale={1.06}
        pose={{
          look: 'osric',
          head: { rot: 2 },
          legs: {
            far: [
              [-3, -70],
              [-10, -36],
              [-17, -3],
            ],
            near: [
              [3, -70],
              [12, -37],
              [17, -3],
            ],
          },
          far: {
            pts: [
              [-4, -130],
              [-12, -106],
              [-14, -86],
            ],
          },
          near: {
            pts: [
              [5, -128],
              [12, -104],
              [20, -92],
            ],
            hand: 'grip',
          },
        }}
      >
        <path
          d={rapier([20, -89], 116, 84) + rapier([22, -87], 124, 80)}
          fill={PAPER}
          stroke={INK}
          strokeWidth={0.9}
        />
      </Person>

      {/* Horatio, the commission in his hand: "If your mind dislike anything, obey it." */}
      <Person
        at={[456, 332]}
        scale={1.32}
        pose={{
          look: 'horatio',
          brow: 'sorrow',
          head: { rot: 2 },
          far: {
            pts: [
              [-4, -130],
              [-2, -104],
              [8, -88],
            ],
          },
          near: {
            pts: [
              [5, -128],
              [14, -104],
              [24, -116],
            ],
            hand: 'grip',
            deg: -60,
          },
        }}
      >
        <path d={LETTER} fill={PAPER} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
        <path d={LETTER_LINES} fill="none" stroke={INK} strokeWidth={0.8} />
        <path d={SEAL} fill={RED} stroke={INK} strokeWidth={0.9} />
        <path d={SEAL_CRACK} fill="none" stroke={PAPER} strokeWidth={0.9} />
      </Person>
      {/* Hamlet, calm in the light of the window: "The readiness is all." */}
      <Person
        at={[650, 332]}
        scale={1.34}
        flip
        pose={{
          look: 'hamlet',
          head: { rot: 2 },
          far: {
            pts: [
              [-4, -130],
              [-8, -104],
              [-3, -82],
            ],
          },
          near: {
            pts: [
              [5, -128],
              [13, -104],
              [27, -90],
            ],
            hand: 'open',
            deg: 28,
          },
        }}
      />
    </g>
  )
}

export const theReadinessIsAll: LinocutArt = { width: W, height: H, Draw: TheReadinessIsAll }
