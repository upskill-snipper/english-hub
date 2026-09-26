import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { timing } from '@/components/comics/linocut/styles'

import { CELL, Cell } from './cell-acts-3-4'
import { footShadow, type P } from './late-scenes-kit'
import { Figure, type Pose } from './late-scenes-people'

/**
 * Act 5, Scene 2: "The letter that never went", the eighteenth moment in the
 * guide's timeline. Every detail is from the scene, as the held edition
 * prints it (src/data/full-texts/romeo-and-juliet.ts):
 *
 * - "Friar Lawrence's Cell." It is the room of "Banished" and "The Friar's
 *   plan" (./cell-acts-3-4.tsx), so a student knows it again: the window on
 *   the walls of Verona, the herbs drying from the beam, the shelf of jars,
 *   the basket and the table with its lamp.
 * - It is night. Lawrence says Juliet will wake "Within this three hours" and
 *   goes straight to the churchyard, where it is night when he comes ("Who is
 *   it that consorts, so late, the dead?", 5.3). So the moon is in the window
 *   and the lamp is lit, its flame the spot colour.
 * - "Enter Friar John." "Holy Franciscan Friar! Brother, ho!" Both are
 *   Franciscans, so both wear the habit and cord; John's hood is up, as a man
 *   just in from the street, and Lawrence's is down, as in his other panels.
 * - "I could not send it [...] here it is again". So John holds out the letter,
 *   still folded and sealed, his head bowed: the seal is printed in the spot
 *   colour, because the unbroken seal is the whole of the moment.
 * - "Unhappy fortune! [...] The letter was not nice, but full of charge, / Of
 *   dear import, and the neglecting it / May do much danger." So Lawrence
 *   starts back from it with one hand thrown up, fingers spread, clear of his
 *   face so that it reads as alarm and not as a hand at his mouth. He stands
 *   short of his table, so the lamp is not hidden.
 *
 * The plague house where John was shut in ("the searchers of the town [...]
 * Seal'd up the doors") is off stage and is not drawn. The people are drawn
 * as in the other late panels (./late-scenes-people.tsx). Nothing is taken
 * from a film or stage production. No seeds of its own: the room's are in
 * ./cell-acts-3-4.tsx.
 */

const { W, H } = CELL

/** Friar John, just in from the street, hood up, holding out the sealed letter. */
const JOHN: Pose = {
  look: 'friar-hood',
  head: { at: [4, -175], rot: 12 },
  eye: 'down',
  far: {
    arm: [
      [-3, -149],
      [8, -120],
      [30, -127],
    ],
    hand: 'cup',
  },
  near: {
    arm: [
      [6, -147],
      [15, -117],
      [36, -121],
    ],
    hand: 'cup',
  },
  body: { hem: 29 },
}
const JOHN_AT: P = [410, 326]

/** Friar Lawrence, starting back, his near hand thrown up and out. */
const LAWRENCE: Pose = {
  look: 'friar',
  head: { at: [2, -176], rot: -8 },
  far: {
    arm: [
      [-3, -149],
      [-4, -120],
      [0, -96],
    ],
  },
  near: {
    arm: [
      [6, -147],
      [26, -128],
      [44, -150],
    ],
    hand: 'spread',
    deg: -52,
    thumb: -1,
  },
  body: { hem: 31, lean: 5 },
}
const LAWRENCE_AT: P = [566, 326]

function LetterThatNeverWent({ uid }: ArtProps) {
  return (
    <g className="lc-push" style={timing({ origin: [490, 190], push: 1.03 })}>
      <Cell uid={uid} time="night" />
      <path d={footShadow(JOHN_AT[0] + 4, JOHN_AT[1] + 2, 40)} fill={INK} />
      <path d={footShadow(LAWRENCE_AT[0] - 6, LAWRENCE_AT[1] + 2, 42)} fill={INK} />

      {/* Friar John, holding out the letter he could not send */}
      <Figure pose={JOHN} at={JOHN_AT} scale={1.1}>
        {/* the letter, folded and sealed, the seal unbroken */}
        <g transform="rotate(-8 40 -134)">
          <rect
            x={25}
            y={-146}
            width={32}
            height={20}
            fill={PAPER}
            stroke={INK}
            strokeWidth={1.4}
          />
          <path d="M25 -136H57M36 -146V-126" fill="none" stroke={INK} strokeWidth={0.9} />
          <circle
            className="lc-glow"
            style={timing({ delay: 0.6 })}
            cx={41}
            cy={-136}
            r={4.4}
            fill={RED}
            stroke={INK}
            strokeWidth={0.8}
          />
        </g>
        {/* his thumbs over its lower edge */}
        <path
          d="M30 -131L33 -125M38 -129L40 -122"
          stroke={INK}
          strokeWidth={2.6}
          strokeLinecap="round"
        />
      </Figure>

      {/* Friar Lawrence: "Unhappy fortune!" */}
      <Figure pose={LAWRENCE} at={LAWRENCE_AT} scale={1.1} flip tilt={-5} />
    </g>
  )
}

export const theLetterThatNeverWent: LinocutArt = { width: W, height: H, Draw: LetterThatNeverWent }
