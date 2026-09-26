import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER } from '@/components/comics/linocut/palette'
import { gouge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { footShadow } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { Alcove, Garden, H, Room, W, Window, type Box } from './belmont'
import { Person, type Pose } from './people'

/**
 * Act 2, Scene 7: "Morocco chooses gold", the fifth moment in the guide's
 * timeline. Every detail is from the scene, as the held edition prints it
 * (src/data/full-texts/the-merchant-of-venice.ts):
 *
 * - "Belmont. A room in Portia's house." "Enter Portia with the Prince of
 *   Morocco and both their trains." PORTIA: "Go, draw aside the curtains and
 *   discover / The several caskets to this noble prince." So it is the room
 *   and the alcove of "Portia and her father's will" (./belmont.tsx), and the
 *   curtain, printed in the spot colour, is drawn right back to the sides.
 * - The Prince is drawn as the kit draws him (./people.tsx), from the stage
 *   direction of Act 2, Scene 1, "a tawny Moor all in white": tall and
 *   upright in a long white robe, with a plain circlet and a scimitar at his
 *   side ("By this scimitar"), with the same dignity as every suitor. Every
 *   face in the print is cut from the same black block, so his complexion,
 *   which he himself speaks of with pride ("The shadowed livery of the
 *   burnish'd sun", 2.1), is left to his words. One of his followers, in
 *   white too ("three or four followers accordingly", 2.1), stands behind
 *   him; the rest of the trains are left out.
 * - "He unlocks the golden casket." MOROCCO: "O hell! what have we here? / A
 *   carrion Death, within whose empty eye / There is a written scroll. I'll
 *   read the writing." So the gold casket, the first on the left, stands open,
 *   and a small skull lies in it, drawn plainly as the emblem of death the
 *   play makes it, with nothing of a body about it; the Prince has taken the
 *   scroll from it and holds it open before him, his head bowed over it:
 *   "Cold indeed and labour lost", "I have too griev'd a heart / To take a
 *   tedious leave."
 * - PORTIA: "There, take it, prince, and if my form lie there, / Then I am
 *   yours." So Portia stands on the far side of the caskets, still, her hands
 *   before her, watching. Her last line in the scene, on his complexion, is
 *   not the caption and is not drawn into her face; the guide's own reading
 *   of it is in the guide.
 *
 * Nothing is taken from a film or stage production. Seed: 1501 (the wall and
 * the floor).
 */

const WIN: Box = { x0: 40, x1: 128, top: 44, bottom: 190 }
const ALCOVE: Box = { x0: 472, x1: 722, top: 70, bottom: 256 }

/**
 * The Prince, facing the caskets, the scroll held up open before him, its top
 * in one hand and its foot in the other, clear of his white robe against the
 * dark wall. (Held low against the robe, white on white, it read as a small
 * box.)
 */
const MOROCCO: Pose = {
  look: 'morocco',
  head: { rot: 8 },
  eye: 'down',
  far: {
    pts: [
      [-3, -130],
      [18, -128],
      [40, -142],
    ],
    hand: 'mitt',
    deg: 0,
  },
  near: {
    pts: [
      [4, -130],
      [24, -112],
      [42, -106],
    ],
    hand: 'mitt',
    deg: 0,
  },
}

/**
 * One of his followers, in white, standing back, his hands in the sleeves of
 * his robe. (Two dark hands at rest against the white read at panel size as
 * two blots.)
 */
const FOLLOWER: Pose = {
  look: 'morocco-follower',
  head: { rot: 4 },
  far: {
    pts: [
      [-3, -130],
      [-6, -104],
      [-4, -84],
    ],
    hand: 'none',
  },
  near: {
    pts: [
      [4, -130],
      [6, -104],
      [4, -84],
    ],
    hand: 'none',
  },
}

/** Portia (flipped to face left), still, her hands before her. */
const PORTIA: Pose = {
  look: 'portia',
  head: { rot: 2 },
  far: {
    pts: [
      [-3, -126],
      [4, -104],
      [14, -96],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -126],
      [10, -102],
      [18, -94],
    ],
    hand: 'mitt',
  },
}

/**
 * The "carrion Death": a small skull lying in the open casket, cut plainly in
 * paper, with dark sockets and no more; in the casket's frame, its base on
 * the casket's mouth.
 */
function Skull() {
  return (
    <g transform="translate(0 -21) scale(0.9)">
      <path
        d="M-10 0C-12.4 -7 -9 -16 0 -16.4C9 -16 12.4 -7 10 0L7 1.6V5H-7V1.6Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.2}
        strokeLinejoin="round"
      />
      <path
        d="M-6.4 -7.6a2.8 2.4 0 1 0 5.2 0a2.8 2.4 0 1 0 -5.2 0ZM1.2 -7.6a2.8 2.4 0 1 0 5.2 0a2.8 2.4 0 1 0 -5.2 0ZM-1 -3.4L1 -3.4L0 -0.8Z"
        fill={INK}
      />
    </g>
  )
}

/**
 * The scroll, held open between his hands: a long strip of paper with a roll
 * at its top and its foot, and lines of writing, against the dark wall.
 */
function Scroll() {
  return (
    <g>
      <path d="M430 158H452V194H430Z" fill={PAPER} stroke={INK} strokeWidth={1.6} />
      <path
        d="M428 152H454A3.6 3.6 0 0 1 454 159.2H428A3.6 3.6 0 0 1 428 152ZM428 192H454A3.6 3.6 0 0 1 454 199.2H428A3.6 3.6 0 0 1 428 192Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.6}
      />
      <path
        d={
          gouge(434, 166, 448, 166, 0.7) +
          gouge(434, 172, 446, 172, 0.7) +
          gouge(434, 178, 449, 178, 0.7) +
          gouge(434, 184, 445, 184, 0.7)
        }
        fill={INK}
      />
    </g>
  )
}

function MoroccoChoosesGold({ uid }: ArtProps) {
  return (
    <g className="lc-push" style={timing({ origin: [470, 190], push: 1.03 })}>
      <Room seed={1501} win={WIN} skip={ALCOVE} />
      <Window uid={uid} win={WIN} outside={<Garden win={WIN} />} />
      <Alcove box={ALCOVE} open={1} openOne="gold" inside={<Skull />} />
      <path
        d={footShadow(236, 326, 30) + footShadow(378, 326, 36) + footShadow(790, 326, 30)}
        fill={INK}
      />
      <Person pose={FOLLOWER} at={[232, 324]} scale={1.08} />
      <Person pose={MOROCCO} at={[376, 324]} scale={1.14} />
      <Scroll />
      <Person pose={PORTIA} at={[792, 324]} scale={1.26} flip />
    </g>
  )
}

export const moroccoChoosesGold: LinocutArt = { width: W, height: H, Draw: MoroccoChoosesGold }
