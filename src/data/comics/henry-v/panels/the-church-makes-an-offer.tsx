import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER } from '@/components/comics/linocut/palette'
import { clamp, gouge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { footShadow } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { Person } from './people'
import { FLOOR_Y, GothicWindow, H, PresenceDoor, W, floorMarks, wallMarks } from './palace'

/**
 * Act 1, Scene 1: "The Church makes an offer", the second moment in the
 * guide's timeline. "London. An ante-chamber in the King's palace." Every
 * detail is from the scene in the held edition (src/data/full-texts/henry-v.ts,
 * Project Gutenberg #1521):
 *
 * - "Enter the Archbishop of Canterbury and the Bishop of Ely." They are alone,
 *   and the scene is a private talk: the bill that would "strip from us" the
 *   Church's lands, and what Canterbury has done about it. Ely asks "But what
 *   prevention?" and then "How now for mitigation of this bill Urged by the
 *   Commons? Doth his Majesty Incline to it, or no?"; Canterbury answers "For
 *   I have made an offer to his Majesty ... As touching France, to give a
 *   greater sum Than ever at one time the clergy yet Did to his predecessors
 *   part withal." So the two prelates stand close and lean in to each other,
 *   as men do who are talking of something not to be overheard: Ely, on the
 *   left, holds out an open hand, palm up, asking; Canterbury, against the
 *   window, answers with one open hand held out low to him and the other
 *   pointing back over his shoulder to the door of the King's presence.
 * - "The French ambassador upon that instant Craved audience; and the hour, I
 *   think, is come To give him hearing" and "Then go we in". So the door of
 *   the presence chamber is beside them, standing a little open, and through
 *   the gap is the King's cloth of state, the one thing in the spot colour,
 *   large and far from any face or hand: the King they are talking about, not
 *   yet seen. The quotation is Canterbury's line naming the offer, the moment's
 *   own title in his words.
 * - "Is it four o'clock?" "It is." The afternoon light comes in through a
 *   tall window behind Canterbury, so he stands black against the glass, and
 *   the two men's shadows lie on the floor towards us.
 *
 * How the two prelates look, and why (neither is described: Canterbury the
 * elder, his hair white at the nape; Ely the younger, dark), is in
 * ./people.tsx; the palace is ./palace.tsx. Nothing is taken from a film or
 * stage production. Seeds: 201 (wall), 202 (floor).
 */

const ELY: [number, number] = [252, 310]
const CANTERBURY: [number, number] = [402, 310]

/** The window's light falls across the wall from behind Canterbury. */
const light = (x: number, y: number) => {
  const win = clamp(1 - Math.hypot((x - 372) * 0.62, (y - 118) * 1.1) / 330)
  return Math.max(win * 0.9, 0.06)
}

type Marks = { wall: { cuts: string; joints: string }; floor: string; shadows: string }
let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // Each man's shadow, cast from the window behind him towards us: a pool at
  // his feet, then cuts across the floor that spread away from the window as
  // they come towards us.
  let shadows =
    footShadow(ELY[0], ELY[1] - 1, 30) + footShadow(CANTERBURY[0], CANTERBURY[1] - 1, 30)
  for (const [x, y] of [ELY, CANTERBURY]) {
    const drift = (x - 372) * 0.35
    for (let k = 0; k < 6; k++) {
      const yy = y + 12 + k * 4.6
      const c = x + drift * (k / 5)
      const half = 26 - k * 2.2
      shadows += gouge(c - half, yy, c + half, yy + 0.6, 2.4 - k * 0.3)
    }
  }
  cached = { wall: wallMarks(201, light), floor: floorMarks(202, [420, 118]), shadows }
  return cached
}

function ChurchMakesAnOffer({ uid }: ArtProps) {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [360, 170], push: 1.03 })}>
      {/* the stone of the ante-chamber, lit from the window */}
      <path d={m.wall.cuts} fill={PAPER} />
      <path d={m.wall.joints} fill={PAPER} />

      {/* the floor, and the two shadows lying across it */}
      <rect x={0} y={FLOOR_Y} width={W} height={H - FLOOR_Y} fill={PAPER} />
      <path d={m.floor} fill={INK} />
      <path d={m.shadows} fill={INK} />
      {/* the wall's foot, a plinth along the floor */}
      <path d={gouge(0, FLOOR_Y + 2, W, FLOOR_Y + 2, 1.6)} fill={INK} />

      {/* the window behind Canterbury, and the door of the presence chamber standing a little open */}
      <GothicWindow uid={uid} x={372} w={112} spring={86} sill={202} />
      <PresenceDoor uid={uid} x={702} w={120} spring={132} foot={FLOOR_Y} />

      {/* Ely, leaning in to listen, one open hand held out, asking */}
      <Person
        pose={{
          look: 'ely',
          head: { rot: 7 },
          body: { neck: [4, -137], hip: [0, -90] },
          far: {
            pts: [
              [1, -128],
              [6, -108],
              [14, -102],
            ],
            hand: 'none',
          },
          near: {
            pts: [
              [8, -128],
              [15, -106],
              [28, -106],
            ],
            hand: 'open',
            deg: -16,
            thumb: -1,
          },
        }}
        at={ELY}
        scale={1.42}
      />

      {/* Canterbury, against the glass, leaning in: one hand open to Ely, the other pointing back to the door */}
      <Person
        pose={{
          look: 'canterbury',
          head: { rot: 9 },
          mouth: 'open',
          body: { neck: [5, -137], hip: [0, -90] },
          far: {
            pts: [
              [0, -130],
              [-14, -116],
              [-30, -122],
            ],
            hand: 'point',
            deg: 196,
            thumb: -1,
          },
          near: {
            pts: [
              [9, -128],
              [14, -106],
              [24, -94],
            ],
            hand: 'open',
            deg: 12,
            thumb: -1,
          },
        }}
        at={CANTERBURY}
        scale={1.42}
        flip
      />
    </g>
  )
}

export const churchMakesAnOffer: LinocutArt = { width: W, height: H, Draw: ChurchMakesAnOffer }
