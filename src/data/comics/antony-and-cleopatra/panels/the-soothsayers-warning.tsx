import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER } from '@/components/comics/linocut/palette'
import { clamp, rays, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { footShadow } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import {
  FEET,
  H,
  LAMP,
  Lampstand,
  RoomFrame,
  W,
  WIN,
  roomMarks,
  stars,
  type RoomMarks,
} from './caesars-house'
import { Person, type Pose } from './people'

/**
 * Act 2, Scene 3: "The Soothsayer's warning", the seventh moment in the
 * guide's timeline. Every detail is from the scene, as the held edition
 * prints it (src/data/full-texts/antony-and-cleopatra.ts):
 *
 * - "Rome. A Room in Caesar’s House." The room of ./caesars-house.tsx, which
 *   "Enthroned in Alexandria" (3.6) shows by day. It is night: "Good night,
 *   sir", "Good night, dear lady". So the window high in the wall shows a
 *   clear night sky with its stars, and the room is lit by the one lamp on
 *   its stand behind the Soothsayer, whose flame is the spot colour, cut
 *   large, with tongues and a paper core so it reads as fire, at the height
 *   of his chest and well clear of every face and hand. The light falls from
 *   behind the old man and fades towards Antony, who stands at its edge.
 * - "Exeunt Caesar and Octavia." "Enter Soothsayer." So the doorway on the
 *   left stands dark, and Antony and the Soothsayer are alone.
 * - SOOTHSAYER: "Therefore, O Antony, stay not by his side." ... "If thou
 *   dost play with him at any game, Thou art sure to lose". So the
 *   Soothsayer, an old man with a white beard in a long girt robe (the kit,
 *   ./people.tsx, as the Julius Caesar panels draw that play's soothsayer),
 *   faces Antony with one finger raised in warning, his arm bent at the
 *   elbow and the finger leaning towards Antony, and his other hand held out
 *   low and open towards him.
 * - ANTONY: "Speak this no more." So Antony, in the toga, as a Roman in
 *   Rome, stands over him frowning, his hand on his breast. The quotation is
 *   the Soothsayer's, verbatim, the warning the moment is named for. Antony's
 *   own lines that the guide quotes ("I’ th’ East my pleasure lies") come
 *   after the Soothsayer has gone, so they are not set on a picture of the
 *   two of them.
 *
 * Caesar and Octavia, who leave before the Soothsayer comes in, are not in
 * the picture: a panel shows only who is there.
 *
 * Redrawn on 9 October 2026 from an unreviewed draft, which stood the two
 * men far apart across an empty room, with a lamp flame small enough to
 * shrink to a speck at phone width, and the Soothsayer pointing at the
 * window rather than warning.
 *
 * Nothing is taken from a film or stage production. Seeds: 701 (wall, dado
 * and floor), 704 (stars), 705 (the lamp's light).
 */

const SOOTHSAYER_AT = 352
const ANTONY_AT = 540
const SCALE = 1.28

type Marks = RoomMarks & { stars: string; glow: string; shade: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const [fx, fy] = LAMP.flame
  // The lamp lights the room from the middle; the corners fall to dark.
  const light = (x: number, y: number) =>
    Math.max(clamp(1 - Math.hypot((x - fx) * 0.66, (y - fy) * 0.8) / 250) ** 1.1 * 0.95, 0.05)
  const room = roomMarks(701, light)
  const glow = rays(rng(705), fx, fy - 8, { from: 26, to: 104, every: 7 })
  const shade =
    footShadow(SOOTHSAYER_AT, FEET + 4, 30) +
    footShadow(ANTONY_AT, FEET + 4, 36) +
    footShadow(LAMP.x, LAMP.foot + 3, 22)
  cached = { ...room, stars: stars(704, 9), glow, shade }
  return cached
}

/** The Soothsayer: "Therefore, O Antony, stay not by his side." One finger raised, the other hand open to him. */
const SOOTHSAYER: Pose = {
  look: 'soothsayer',
  head: { rot: -6 },
  far: {
    pts: [
      [-4, -130],
      [8, -110],
      [28, -106],
    ],
    hand: 'open',
    deg: -4,
  },
  near: {
    pts: [
      [5, -128],
      [30, -122],
      [40, -146],
    ],
    hand: 'finger',
    deg: -70,
  },
}

/** Antony: "Speak this no more." Frowning, his hand on his breast. */
const ANTONY: Pose = {
  look: 'antony',
  dress: 'toga',
  head: { rot: 8 },
  frown: true,
  near: {
    pts: [
      [5, -128],
      [20, -104],
      [13, -116],
    ],
    hand: 'mitt',
    deg: -150,
  },
}

function TheSoothsayersWarning(_props: ArtProps) {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [420, 170], push: 1.03 })}>
      {/* the wall by lamplight, and the night through the window */}
      <rect x={0} y={0} width={W} height={H} fill={INK} />
      <path d={m.wall} fill={PAPER} />
      <path d={m.glow} fill={PAPER} />
      <path d={m.dado} fill={PAPER} />
      <rect x={WIN.x} y={WIN.y} width={WIN.w} height={WIN.h} fill={INK} />
      <path d={m.stars} fill={PAPER} />
      <RoomFrame m={m} night />
      <path d={m.shade} fill={INK} />

      <Lampstand lit />
      <Person pose={SOOTHSAYER} at={[SOOTHSAYER_AT, FEET]} scale={SCALE} />
      <Person pose={ANTONY} at={[ANTONY_AT, FEET]} scale={SCALE} flip />
    </g>
  )
}

export const theSoothsayersWarning: LinocutArt = {
  width: W,
  height: H,
  Draw: TheSoothsayersWarning,
}
