import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER } from '@/components/comics/linocut/palette'
import { rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person } from './people'
import {
  GardenDoor,
  OrchardTree,
  Steeple,
  Topiary,
  WallCoping,
  brickWall,
  footShadow,
  hedgeBand,
  skyBars,
  walk,
} from './act-3-garden'

/**
 * Act 3, Scene 1: "I am not what I am", the eleventh moment in the guide's
 * timeline. Every detail is from the scene in the held edition (Project
 * Gutenberg #1526, src/data/full-texts/twelfth-night.ts):
 *
 * - "Olivia's garden." Olivia sends the others off with "Let the garden door
 *   be shut, and leave me to my hearing" (Exeunt Sir Toby, Sir Andrew and
 *   Maria; Feste has gone before). So only Olivia and Cesario are drawn, and
 *   the door in the garden wall behind them is shut.
 * - "[Clock strikes.] The clock upbraids me with the waste of time." So the
 *   bells of the church over the wall (Feste's house "doth stand by the
 *   church") are struck, with rings of sound cut round the belfry; they hang
 *   still, as a clock's bells do when its hammer strikes them.
 * - "There lies your way, due west." / "Then westward ho!" ... "Stay: / I
 *   prithee tell me what thou think'st of me." Cesario was going, and is
 *   checked mid-step, her feet still apart; Olivia reaches one open hand
 *   after her.
 * - "That you do think you are not what you are." / "Then think you right;
 *   I am not what I am." / "I have one heart, one bosom, and one truth." So
 *   Viola, as Cesario, faces Olivia with her hand on her breast: she is
 *   telling the truth, in a riddle.
 * - "A murd'rous guilt shows not itself more soon / Than love that would seem
 *   hid. Love's night is noon." Olivia's love shows in her face: the spot
 *   colour is her flush, on the cheek of her paper face (the kit's "red and
 *   white"), and nowhere near the mouth.
 *
 * Olivia is in her mourning black, her veil thrown back; Cesario is Viola in
 * the page's doublet, short cloak and feathered cap, with no sword (she does
 * not draw one until the duel later in Act 3, Scene 4). Both are cut from the
 * kit (./people.tsx) and the garden from ./act-3-garden.tsx. Nothing is taken
 * from a film, television or stage production.
 *
 * Seeds: 1101 (sky), 1102 (wall), 1103 (walk), 1104 and 1105 (the hedge),
 * 1106 to 1109 (the orchard trees over the wall), 1110 (the rings of sound),
 * 1111 and 1112 (the box balls).
 */

const W = 860
const H = 340
const FEET = 324
const WALL_TOP = 172
const WALL_BASE = 244
const DOOR_X = 176
const DOOR_W = 36
/** Where the two stand. */
const OLIVIA_X = 360
const VIOLA_X = 540

type Marks = {
  sky: string
  wall: string
  walk: string
  hedge: string
  leaves: string
  shadows: string
}
let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = skyBars(rng(1101), { x0: 0, x1: W, y0: 6, y1: WALL_TOP - 8 })
  const wall = brickWall(rng(1102), { x0: 0, x1: W, y0: WALL_TOP + 2, y1: WALL_BASE }, (x) =>
    Math.max(0.15, 1 - Math.abs(x - 430) / 560),
  )
  const walkD = walk(rng(1103), { x0: 0, x1: W, y0: WALL_BASE + 12, y1: H })
  // the box hedge along the wall, broken at the door
  const left = hedgeBand(rng(1104), -4, DOOR_X - 12, WALL_BASE - 20, WALL_BASE + 10)
  const right = hedgeBand(rng(1105), DOOR_X + DOOR_W + 12, W + 4, WALL_BASE - 20, WALL_BASE + 10)
  const shadows = footShadow(OLIVIA_X + 4, FEET, 36, -3) + footShadow(VIOLA_X, FEET, 26, -3)
  cached = {
    sky,
    wall,
    walk: walkD,
    hedge: left.shape + right.shape,
    leaves: left.leaves + right.leaves,
    shadows,
  }
  return cached
}

function IAmNotWhatIAm({ uid }: ArtProps) {
  void uid
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [450, 220], push: 1.03 })}>
      {/* the sky, the orchard over the wall, and the church tower, its clock striking */}
      <rect x={0} y={0} width={W} height={H} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      <OrchardTree r={rng(1106)} cx={290} cy={120} rx={36} ry={30} base={WALL_TOP} />
      <OrchardTree r={rng(1107)} cx={454} cy={128} rx={28} ry={24} base={WALL_TOP} />
      <OrchardTree r={rng(1108)} cx={652} cy={124} rx={34} ry={30} base={WALL_TOP} />
      <OrchardTree r={rng(1109)} cx={772} cy={120} rx={38} ry={32} base={WALL_TOP} />
      <Steeple x={112} top={84} base={WALL_TOP} ringing seed={1110} />

      {/* the garden wall, its door shut, and the box hedge at its foot */}
      <rect x={0} y={WALL_TOP} width={W} height={WALL_BASE - WALL_TOP} fill={PAPER} />
      <path d={m.wall} fill={INK} />
      <WallCoping x0={0} x1={W} top={WALL_TOP} />
      <GardenDoor x={DOOR_X} base={WALL_BASE + 4} w={DOOR_W} h={56} />
      <path d={m.hedge} fill={INK} />
      <path d={m.leaves} fill={PAPER} />
      <Topiary r={rng(1111)} cx={258} cy={202} rad={24} base={WALL_BASE} />
      <Topiary r={rng(1112)} cx={724} cy={198} rad={27} base={WALL_BASE} />

      {/* the walk */}
      <path d={m.walk} fill={INK} />
      <path d={m.shadows} fill={INK} />

      {/* Olivia, reaching after Cesario: "Stay" */}
      <Person
        at={[OLIVIA_X, FEET]}
        scale={1.16}
        pose={{
          look: 'olivia',
          flush: true,
          body: { neck: [5, -132], hip: [1, -94] },
          head: { rot: 4 },
          far: {
            pts: [
              [-1, -124],
              [3, -104],
              [14, -112],
            ],
            hand: 'mitt',
            deg: -40,
          },
          near: {
            pts: [
              [9, -124],
              [28, -114],
              [46, -118],
            ],
            hand: 'open',
            deg: -12,
            thumb: -1,
          },
          hem: { front: 30, back: 34 },
        }}
      />

      {/* Cesario, turned back from the way out, a hand on her heart */}
      <Person
        at={[VIOLA_X, FEET]}
        scale={1.16}
        flip
        pose={{
          look: 'cesario',
          cloak: 4,
          legs: {
            far: [
              [-3, -70],
              [-9, -36],
              [-17, -3],
            ],
            near: [
              [3, -70],
              [6, -36],
              [8, -3],
            ],
          },
          far: {
            pts: [
              [-4, -128],
              [-7, -100],
              [-4, -76],
            ],
            hand: 'mitt',
          },
          near: {
            pts: [
              [5, -128],
              [14, -106],
              [4, -116],
            ],
            hand: 'open',
            deg: -150,
            size: 12,
            spread: 14,
            thumb: 1,
          },
        }}
      />
    </g>
  )
}

export const iAmNotWhatIAm: LinocutArt = { width: W, height: H, Draw: IAmNotWhatIAm }
