import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER } from '@/components/comics/linocut/palette'
import { n, type Pt } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { ChurchyardBack, GraveFront, H, W, spade } from './churchyard'
import { Person } from './people'

/**
 * Act 5, Scene 1: "The graveyard", the seventeenth moment in the guide's
 * timeline. Every detail is from the scene in the held edition
 * (src/data/full-texts/hamlet.ts, Project Gutenberg #1524):
 *
 * - "A churchyard." "Enter two Clowns with spades"; the Second Clown is sent
 *   off for liquor before Hamlet comes, so one Gravedigger is left, "Digs and
 *   sings". He is in the grave: "Thou dost lie in't, to be in't and say it is
 *   thine". So he stands in the pit to the waist, his spade in his hands,
 *   and looks up at Hamlet, with whom he has been talking. The churchyard,
 *   the grave and the heap of clay are ./churchyard.tsx's, the same as in
 *   "Ophelia's funeral", because it is her grave he is digging.
 * - "This same skull, sir, was Yorick's skull, the King's jester." HAMLET:
 *   "Let me see. [Takes the skull.] Alas, poor Yorick. I knew him, Horatio".
 *   So Hamlet stands at the end of the grave holding the skull up before his
 *   face on his open hand, and looks at it. He asks "Where be your gibes
 *   now? ... Not one now, to mock your own grinning? Quite chop-fallen?", so
 *   the skull keeps its upper teeth and has no jaw. It is drawn as the play
 *   has it and as this panel's brief allows: a clean, plain skull, cut in
 *   paper, and nothing else of the dead anywhere in the picture (the other
 *   skulls the Gravedigger throws up are left to the words).
 * - "Enter Hamlet and Horatio, at a distance"; HORATIO: "E'en so, my lord."
 *   So Horatio stands a little behind Hamlet and listens.
 * - The people are the kit's (./people.tsx): Hamlet bareheaded in his black
 *   doublet and cloak, Horatio in his scholar's cap and gown with his white
 *   band, the Gravedigger in his working man's cap. Hamlet's brow is drawn up
 *   in sorrow, "how abhorred in my imagination it is!"
 *
 * There is no spot colour: nothing in the scene asks for one, and the grey
 * day is the scene's own. Nothing is taken from a film or stage production.
 * Seeds: the churchyard's own (./churchyard.tsx).
 */

/**
 * Yorick's skull in profile, facing right, centred on (0, 0): the dome of the
 * crown, the eye's socket, the nose's opening and the upper teeth, and no jaw
 * ("Quite chop-fallen?"). About as big as the kit's head is, less the jaw. Cut
 * in paper with an ink edge; its hollows in ink.
 */
const SKULL =
  'M-11.4 6.4C-14.4 3 -15.4 -2.6 -14.6 -7.6C-13.2 -14.4 -6.6 -17.6 0.6 -17.4C7.6 -17.2 13 -13.4 14 -7C14.4 -4.4 14 -2.6 13.4 -1.4L12.6 0.2L14.6 4.4L12.8 5.8L13.2 9.4L11.6 11.4L5.6 11.6L4.2 8.4C1.4 8.4 -1.6 8.8 -4 9.8C-6.6 10.6 -9.4 9 -11.4 6.4Z'
/** The socket, the nose's opening, the cheekbone, the line of the teeth. */
const SKULL_SOCKET =
  'M3.4 -3.8C3.4 -7.2 6.4 -8.8 9 -8C11.2 -7.2 11.8 -4.6 11 -2.2C10 0.4 7.4 1.4 5.4 0.6C3.8 -0.2 3.4 -1.8 3.4 -3.8Z'
const SKULL_NOSE = 'M12.2 1.2L13.4 4.6L11 4.4Z'
const SKULL_LINES =
  'M3.6 3.6Q-1.6 2.4 -6.6 3.6' + 'M5.4 8.6L12.8 8.4' + 'M7.2 8.6V11.4M9.2 8.6V11.4M11.2 8.5V11.4'

/** The skull on Hamlet's open hand, its base at `at`, facing back towards him. */
function Skull({ at, s = 1 }: { at: Pt; s?: number }) {
  const t = `translate(${n(at[0])} ${n(at[1] - 11 * s)}) scale(${n(-s)} ${n(s)})`
  return (
    <g transform={t} strokeLinecap="round" strokeLinejoin="round">
      {/* a dark rim round it, so the pale bone holds against the grey sky */}
      <path d={SKULL} fill={INK} stroke={INK} strokeWidth={4.4} />
      <path d={SKULL} fill={PAPER} />
      <path d={SKULL_SOCKET + SKULL_NOSE} fill={INK} />
      <path d={SKULL_LINES} fill="none" stroke={INK} strokeWidth={1} />
    </g>
  )
}

/** The Gravedigger's spade, in the panel's frame: the blade down in the pit, the grip in his hands. */
const SPADE = spade([502, 360], [495, 266])

function TheGraveyard({ uid: _uid }: ArtProps) {
  return (
    <g className="lc-push" style={timing({ origin: [400, 190], push: 1.03 })}>
      <ChurchyardBack />

      {/* the Gravedigger, in the grave to the waist, leaning on his spade */}
      <g strokeLinecap="round">
        <path d={SPADE.shaft + SPADE.tee} stroke={PAPER} strokeWidth={8} fill="none" />
        <path d={SPADE.shaft + SPADE.tee} stroke={INK} strokeWidth={4.8} fill="none" />
      </g>
      <Person
        at={[530, 394]}
        scale={1.1}
        flip
        pose={{
          look: 'gravedigger',
          head: { rot: -14 },
          far: {
            pts: [
              [-4, -130],
              [12, -110],
              [27, -117],
            ],
            hand: 'grip',
            deg: 6,
          },
          near: {
            pts: [
              [5, -128],
              [12, -102],
              [24, -92],
            ],
            hand: 'grip',
            deg: 4,
          },
        }}
      />
      <GraveFront />

      {/* Horatio, a little behind, listening */}
      <Person
        at={[212, 326]}
        scale={1.12}
        pose={{
          look: 'horatio',
          head: { rot: 4 },
          far: {
            pts: [
              [-4, -130],
              [-1, -104],
              [9, -90],
            ],
          },
          near: {
            pts: [
              [5, -128],
              [12, -104],
              [15, -88],
            ],
          },
        }}
      />
      {/* Hamlet at the end of the grave, Yorick's skull held up on his open hand */}
      <Person
        at={[372, 324]}
        scale={1.16}
        pose={{
          look: 'hamlet',
          head: { rot: 3 },
          brow: 'sorrow',
          far: {
            pts: [
              [-4, -130],
              [-9, -105],
              [-6, -82],
            ],
          },
          near: {
            pts: [
              [5, -128],
              [21, -106],
              [38, -128],
            ],
            hand: 'open',
            deg: -24,
            thumb: -1,
          },
        }}
      />
      <Skull at={[426, 175]} s={1.12} />
    </g>
  )
}

export const theGraveyard: LinocutArt = { width: W, height: H, Draw: TheGraveyard }
