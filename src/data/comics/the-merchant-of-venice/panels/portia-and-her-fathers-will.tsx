import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK } from '@/components/comics/linocut/palette'
import { timing } from '@/components/comics/linocut/styles'

import { footShadow } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { Alcove, Garden, H, Room, W, Window, type Box } from './belmont'
import { Person, type Pose } from './people'

/**
 * Act 1, Scene 2: "Portia and her father's will", the second moment in the
 * guide's timeline. Every detail is from the scene, as the held edition
 * prints it (src/data/full-texts/the-merchant-of-venice.ts):
 *
 * - "Belmont. A room in Portia's house." "Enter Portia with her
 *   waiting-woman Nerissa." Only the two of them are drawn: the Servingman
 *   comes in at the very end with news of Morocco, after the lines this
 *   moment is about. It is day ("the Prince his master will be here
 *   tonight"), so the light comes in at the tall window on the gardens.
 * - It is the room the caskets stand in, as ./belmont.tsx cuts it: every
 *   scene at Belmont before Bassanio's choice is set in "A room in Portia's
 *   house", and they are kept behind a curtain there ("Go, draw aside the
 *   curtains and discover / The several caskets", 2.7). Here the curtain,
 *   printed in the spot colour, is half drawn, and the three caskets show on
 *   their table in the gap: gold, silver and lead.
 * - PORTIA: "By my troth, Nerissa, my little body is aweary of this great
 *   world"; "I may neither choose who I would nor refuse who I dislike, so is
 *   the will of a living daughter curb'd by the will of a dead father." So
 *   Portia, small, her fair hair cut in paper as the kit cuts it ("her sunny
 *   locks / Hang on her temples like a golden fleece", 1.1), stands on the
 *   left with her head bowed and her eyes down, a hand laid on her breast.
 * - NERISSA: "Your father was ever virtuous ... Therefore the lott'ry that
 *   he hath devised in these three chests of gold, silver, and lead, whereof
 *   who chooses his meaning chooses you". So Nerissa, in her coif, stands on
 *   the far side of the caskets and holds out an open hand towards them.
 *
 * The people are cut from ./people.tsx; nothing is taken from a film or
 * stage production. Seed: 1201 (the wall and the floor).
 */

const WIN: Box = { x0: 46, x1: 146, top: 40, bottom: 196 }
const ALCOVE: Box = { x0: 330, x1: 580, top: 64, bottom: 256 }

const PORTIA: Pose = {
  look: 'portia',
  head: { rot: 12 },
  eye: 'down',
  far: {
    pts: [
      [-3, -126],
      [-6, -102],
      [-3, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -126],
      [20, -98],
      [10, -104],
    ],
    hand: 'open',
    deg: -172,
    thumb: 1,
    spread: 8,
  },
}

/** Nerissa (flipped to face left), holding out an open hand to the caskets. */
const NERISSA: Pose = {
  look: 'nerissa',
  head: { rot: 3 },
  far: {
    pts: [
      [-3, -126],
      [-6, -102],
      [-3, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -126],
      [20, -108],
      [40, -113],
    ],
    hand: 'open',
    deg: -16,
    thumb: -1,
    size: 15.5,
    spread: 20,
  },
}

function FathersWill({ uid }: ArtProps) {
  return (
    <g className="lc-push" style={timing({ origin: [455, 190], push: 1.03 })}>
      <Room seed={1201} win={WIN} skip={ALCOVE} />
      <Window uid={uid} win={WIN} outside={<Garden win={WIN} />} />
      <Alcove box={ALCOVE} open={0.74} />
      <path d={footShadow(226, 326, 36) + footShadow(700, 326, 34)} fill={INK} />
      <Person pose={PORTIA} at={[222, 324]} scale={1.3} />
      <Person pose={NERISSA} at={[698, 324]} scale={1.3} flip />
    </g>
  )
}

export const portiaAndHerFathersWill: LinocutArt = { width: W, height: H, Draw: FathersWill }
