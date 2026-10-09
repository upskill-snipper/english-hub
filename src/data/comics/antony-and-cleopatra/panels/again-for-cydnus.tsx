import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, gouge, n } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { skyLines } from './light-cuts'
import {
  BED,
  QueensBed,
  ROOM_FLOOR,
  ROOM_WINDOW,
  RoomWindow,
  floorShadow,
  roomFloor,
  roomWall,
} from './monument'
import { CutFigure, Person, hand, limb, reach, sizeOf, toFigure, type P } from './people'

/**
 * Act 5, Scene 2: "Again for Cydnus", the twenty-fourth moment in the
 * guide's timeline. The panel draws the queen being robed and crowned, and
 * nothing after it. Every detail is from the scene in the held edition
 * (src/data/full-texts/antony-and-cleopatra.ts):
 *
 * - "Alexandria. A Room in the Monument." IRAS: "Finish, good lady. The
 *   bright day is done, And we are for the dark." So it is dusk: the room of
 *   ./monument.tsx, its window pale low down with the last of the light and
 *   darkening above, and the queen's bed ("Take up her bed") standing open at
 *   the right, its curtains tied back.
 * - CLEOPATRA: "Show me, my women, like a queen. Go fetch My best attires. I
 *   am again for Cydnus To meet Mark Antony." "Bring our crown and all."
 *   "Enter Iras with a robe, crown, &c." "Give me my robe. Put on my crown."
 *   "Yare, yare, good Iras; quick." So she stands in the middle, robed and
 *   crowned, her head up, in the kit's robe with its bands of cut ornament
 *   and its crown printed in the spot colour (./people.tsx); Iras, her hair
 *   cut level at the jaw, before her, ties the girdle of the robe, and
 *   Charmian, her hair bound at the nape, behind her, settles the mantle on
 *   her shoulder with one hand. Both women's heads are bowed.
 * - "Enter Guardsman and Clown with a basket." "Sets down the basket." So the
 *   countryman's basket stands by the window on a small table, its lid shut.
 *
 * WHAT IS LEFT OUT, AND WHY. This play's rule (./people.tsx) is that none of
 * its deaths is shown and none is suggested by its method. So the basket is
 * closed and nothing is in sight in it or near it; there is no snake
 * anywhere in the panel, nothing at the queen's breast or arm, and the bed
 * behind them is empty. Iras, who dies first, is drawn on her feet and busy.
 * The quotation is the robe and the crown, not the line that follows it,
 * "Immortal longings", which there means her wish to die.
 *
 * RED is the crown alone, cut large, its five points clear of her hair, and
 * no hand touches it. Her face is cut in ink, as every face in the print is,
 * and the play's "tawny front" (1.1) is left to the words. Nothing is taken
 * from a film or stage production. Seeds: 2401 (the wall), 2402 (the floor),
 * 2403 (the window's sky).
 */

const W = 860
const H = 340
/** Where the three women stand. */
const FOOT = 330

/** The queen, Iras before her and Charmian behind: where each stands and her size. */
const CLEO: { at: P; s: number } = { at: [450, FOOT], s: 1.42 }
const IRAS: { at: P; s: number } = { at: [378, FOOT], s: 1.36 }
const CHARMIAN: { at: P; s: number } = { at: [530, FOOT - 1], s: 1.36 }
/** Where Iras's hands are, tying the girdle at the robe's waist. */
const IRAS_HANDS: [P, P] = [
  [436, 204],
  [430, 212],
]
/**
 * Charmian's wrist, and the way her fingers point (in her own frame, which is
 * turned to face left): her hand lies on the mantle at the back of the
 * queen's shoulder, the fingers down her back. Reviewed on 9 October 2026:
 * the first cut reached the hand round to the front of the queen's neck,
 * where at phone width it sat on her throat and breast, in the scene of her
 * death.
 */
const CHARMIAN_HAND: P = [481, 146]
const CHARMIAN_FINGERS = 80

/**
 * The window, seen from a step to the left of where moments 23 and 25 see
 * the room from, so that it stands behind the queen and her crowned head is
 * printed against the last of the light.
 */
const WINDOW_AT = 412

/** The basket on its table, against the wall to the left. */
const TABLE = { x: 150, top: 236 }

type Marks = {
  wall: { cuts: string; joints: string; dim: string }
  floor: string
  shade: string
  winSky: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const { y0, y1 } = ROOM_WINDOW
  const x0 = WINDOW_AT
  const x1 = WINDOW_AT + ROOM_WINDOW.x1 - ROOM_WINDOW.x0
  // The last of the day comes in at the window and falls on the wall about
  // it; the corners are dark.
  const wall = roomWall(2401, (x, y) =>
    clamp(0.92 - Math.hypot((x - (x0 + x1) / 2) * 0.62, (y - (y0 + y1) / 2) * 0.55) / 250),
  )
  const floor = roomFloor(2402)
  const shade =
    floorShadow(IRAS.at[0], FOOT + 2, 30) +
    floorShadow(CLEO.at[0], FOOT + 2, 40) +
    floorShadow(CHARMIAN.at[0] + 10, FOOT + 1, 36) +
    floorShadow(TABLE.x, 302, 30) +
    floorShadow((BED.x0 + BED.x1) / 2, BED.foot + 6, 130, 3)
  // Dusk in the window: pale low down, darkening upwards.
  const winSky = skyLines(2403, { x0, x1, y0, y1 }, (_x, y) => 0.1 + clamp((96 - y) / 40) * 0.7)
  cached = { wall, floor, shade, winSky }
  return cached
}

/**
 * The countryman's basket, its lid shut, on a small round table: the table's
 * top seen edge on, its stem and foot; the basket's weave cut in paper, its
 * domed lid with a knob. Nothing is drawn in it or near it.
 */
function BasketOnTable() {
  const { x, top } = TABLE
  const table = `M${x - 36} ${top}h72v7h-72ZM${x - 5} ${top + 7}h10l3 52h-16ZM${x - 22} ${top + 59}h44v6h-44Z`
  const body = `M${x - 25} ${top - 34}H${x + 25}L${x + 21} ${top}H${x - 21}Z`
  const lid = `M${x - 28} ${top - 33}C${x - 26} ${top - 50} ${x + 26} ${top - 50} ${x + 28} ${top - 33}Z`
  let weave = ''
  for (let row = 0; row < 4; row++) {
    const y = top - 29 + row * 8
    for (let k = 0; k < 6; k++) {
      const bx = x - 20 + k * 8 + (row % 2) * 4
      weave += gouge(bx, y, bx + 5, y + 4, 0.9)
    }
  }
  return (
    <g>
      <path d={table} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={gouge(x - 33, top + 2.6, x + 33, top + 2.6, 0.9)} fill={PAPER} />
      <path d={body + lid} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={weave} fill={PAPER} />
      <path
        d={gouge(x - 26, top - 33, x + 26, top - 33, 1.2) + `M${x - 3} ${top - 47}h6v-5h-6Z`}
        fill={PAPER}
      />
    </g>
  )
}

/** An arm reaching to a point of the panel, for a standing figure placed at `at` with size `s`. */
function armTo(
  look: 'iras' | 'charmian',
  f: { at: P; s: number },
  shoulder: P,
  world: P,
  flip: boolean,
  side: 1 | -1 = 1,
) {
  return reach(shoulder, toFigure(world, f.at, f.s * sizeOf(look), flip), 24, side)
}

function AgainForCydnus({ uid }: ArtProps) {
  const m = marks()
  const charmianS = n(CHARMIAN.s * sizeOf('charmian'))
  const charmianNear = armTo('charmian', CHARMIAN, [5, -128], CHARMIAN_HAND, true, -1)
  return (
    <g className="lc-push" style={timing({ origin: [440, 190], push: 1.03 })}>
      {/* the room at dusk */}
      <rect x={0} y={0} width={W} height={ROOM_FLOOR} fill={INK} />
      <path d={m.wall.cuts} fill={PAPER} />
      <path d={m.wall.joints} fill="none" stroke={PAPER} strokeWidth={1.6} />
      <path d={m.wall.dim} fill="none" stroke={PAPER} strokeWidth={0.9} />
      <rect x={0} y={ROOM_FLOOR} width={W} height={H - ROOM_FLOOR} fill={PAPER} />
      <path d={m.floor} fill={INK} />
      <path d={m.shade} fill={INK} />
      <RoomWindow uid={uid} at={WINDOW_AT}>
        <path d={m.winSky} fill={INK} />
      </RoomWindow>

      {/* the queen's bed, open and bare */}
      <QueensBed curtains="open" />

      {/* the countryman's basket, shut, on its table by the window */}
      <BasketOnTable />

      {/* Charmian, behind the queen; her hands are cut over the mantle below */}
      <Person
        pose={{
          look: 'charmian',
          head: { rot: 10 },
          eye: 'down',
          near: { pts: charmianNear, hand: 'none' },
        }}
        at={CHARMIAN.at}
        scale={CHARMIAN.s}
        flip
      />

      {/* Cleopatra, robed and crowned, her head up */}
      <Person
        pose={{
          look: 'cleopatra',
          dress: 'robe',
          crown: 'red',
          head: { rot: -6 },
        }}
        at={CLEO.at}
        scale={CLEO.s}
        flip
      />

      {/* Charmian's hand, settling the mantle on the queen's shoulder */}
      <g
        transform={`translate(${CHARMIAN.at[0]} ${CHARMIAN.at[1]}) scale(${-charmianS} ${charmianS})`}
      >
        <CutFigure
          parts={[
            [
              { d: limb(charmianNear), w: 7.6, sep: 1.5 },
              ...hand(charmianNear[2], CHARMIAN_FINGERS, {
                size: 13.5,
                spread: 18,
                thumb: -1,
                sep: 1.5,
              }),
            ],
          ]}
        />
      </g>

      {/* Iras, before her, tying the girdle of the robe */}
      <Person
        pose={{
          look: 'iras',
          head: { rot: 12 },
          eye: 'down',
          far: {
            pts: armTo('iras', IRAS, [-3, -128], IRAS_HANDS[0], false),
            hand: 'open',
            thumb: -1,
          },
          near: {
            pts: armTo('iras', IRAS, [5, -128], IRAS_HANDS[1], false),
            hand: 'open',
            thumb: -1,
          },
        }}
        at={IRAS.at}
        scale={IRAS.s}
      />
    </g>
  )
}

export const againForCydnus: LinocutArt = { width: W, height: H, Draw: AgainForCydnus }
