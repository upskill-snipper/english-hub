import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER } from '@/components/comics/linocut/palette'
import { rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person } from './people'
import {
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
 * Act 3, Scene 4: "Yellow stockings", the twelfth moment in the guide's
 * timeline. Every detail is from the scene in the held edition (Project
 * Gutenberg #1526, src/data/full-texts/twelfth-night.ts):
 *
 * - "Olivia's garden. Enter Olivia and Maria." Maria warns her: "He's coming,
 *   madam: But in very strange manner. He is sure possessed, madam", "he does
 *   nothing but smile". Then "Enter Malvolio." So at "Why, this is very
 *   midsummer madness" only the three of them are there: Sir Toby and Fabian
 *   come on after Olivia has gone, and are not drawn.
 * - Malvolio obeys the letter: "Remember who commended thy yellow stockings,
 *   and wished to see thee ever cross-gartered" (2.5), and here "this does make
 *   some obstruction in the blood, this cross-gartering ... Not black in my
 *   mind, though yellow in my legs." So, as the kit cuts him (`crossGartered`),
 *   his stockings are bright and the garters cross on them in ink above and
 *   below each knee. The print cannot show yellow; the colour is left to the
 *   words and named in the alt text. He strides forward on the near leg, to
 *   show it: "she did praise my leg being cross-gartered" (2.5).
 * - "Why dost thou smile so, and kiss thy hand so oft?" He smiles (the kit's
 *   `smile`, after Maria's "He does smile his face into more lines than is in
 *   the new map", 3.2), and his hand is flourished out towards her from the
 *   kiss, the other on his hip. He wears his steward's chain ("rub your chain
 *   with crumbs", 2.3) over his sober black.
 * - Olivia, who sent for him "upon a sad occasion" and thinks him mad ("God
 *   comfort thee!", "Heaven restore thee!"), draws back from him with one
 *   open hand raised, bent at the elbow, never straight-armed. Maria, small
 *   in her coif, stands at her side, folding her hands, in on the joke.
 *
 * Malvolio stays a man, not a grotesque: the comedy is in what he wears, his
 * smile and his flourish, and his body and face are the kit's. No spot
 * colour: there is nothing in the moment for it to mark, and a flush beside
 * his smile would sit too near his mouth, where red reads as blood.
 *
 * The garden is ./act-3-garden.tsx and the people ./people.tsx; nothing is
 * taken from a film, television or stage production.
 *
 * Seeds: 1201 (sky), 1202 (wall), 1203 (walk), 1204 (hedge), 1205, 1206 and
 * 1208 (the orchard trees over the wall), 1207 and 1209 (the box balls).
 */

const W = 860
const H = 340
const FEET = 324
const WALL_TOP = 168
const WALL_BASE = 242
const MALVOLIO_X = 318
const OLIVIA_X = 566
const MARIA_X = 662

type Marks = {
  sky: string
  wall: string
  walk: string
  hedge: { shape: string; leaves: string }
  shadows: string
}
let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = skyBars(rng(1201), { x0: 0, x1: W, y0: 6, y1: WALL_TOP - 8 })
  const wall = brickWall(rng(1202), { x0: 0, x1: W, y0: WALL_TOP + 2, y1: WALL_BASE }, (x) =>
    Math.max(0.15, 1 - Math.abs(x - 380) / 560),
  )
  const walkD = walk(rng(1203), { x0: 0, x1: W, y0: WALL_BASE + 12, y1: H })
  const hedge = hedgeBand(rng(1204), -4, W + 4, WALL_BASE - 20, WALL_BASE + 10)
  const shadows =
    footShadow(MALVOLIO_X + 6, FEET, 44, -4) +
    footShadow(OLIVIA_X, FEET, 36, -3) +
    footShadow(MARIA_X, FEET, 26, -3)
  cached = { sky, wall, walk: walkD, hedge, shadows }
  return cached
}

function YellowStockings({ uid }: ArtProps) {
  void uid
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [330, 220], push: 1.03 })}>
      <rect x={0} y={0} width={W} height={H} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      <OrchardTree r={rng(1205)} cx={196} cy={118} rx={38} ry={32} base={WALL_TOP} />
      <OrchardTree r={rng(1206)} cx={448} cy={124} rx={32} ry={28} base={WALL_TOP} />
      <OrchardTree r={rng(1208)} cx={790} cy={122} rx={36} ry={30} base={WALL_TOP} />
      <Steeple x={74} top={76} base={WALL_TOP} />
      <rect x={0} y={WALL_TOP} width={W} height={WALL_BASE - WALL_TOP} fill={PAPER} />
      <path d={m.wall} fill={INK} />
      <WallCoping x0={0} x1={W} top={WALL_TOP} />
      <path d={m.hedge.shape} fill={INK} />
      <path d={m.hedge.leaves} fill={PAPER} />
      <Topiary r={rng(1207)} cx={150} cy={196} rad={26} base={WALL_BASE} />
      <Topiary r={rng(1209)} cx={460} cy={200} rad={22} base={WALL_BASE} />
      <path d={m.walk} fill={INK} />
      <path d={m.shadows} fill={INK} />

      {/* Malvolio, cross-gartered and smiling, his hand flourished from a kiss */}
      <Person
        at={[MALVOLIO_X, FEET]}
        scale={1.14}
        pose={{
          look: 'malvolio',
          crossGartered: true,
          smile: true,
          body: { neck: [-4, -138], hip: [0, -70] },
          head: { rot: -8 },
          legs: {
            far: [
              [-3, -70],
              [-8, -36],
              [-12, -3],
            ],
            near: [
              [3, -70],
              [16, -38],
              [27, -7],
            ],
          },
          far: {
            pts: [
              [-8, -128],
              [-24, -104],
              [-8, -84],
            ],
            hand: 'mitt',
          },
          near: {
            pts: [
              [1, -128],
              [20, -122],
              [38, -136],
            ],
            hand: 'open',
            deg: -38,
            thumb: -1,
          },
        }}
      />

      {/* Olivia, drawing back */}
      <Person
        at={[OLIVIA_X, FEET]}
        scale={1.14}
        flip
        pose={{
          look: 'olivia',
          body: { neck: [-6, -132], hip: [0, -94] },
          head: { rot: -6 },
          far: {
            pts: [
              [-8, -124],
              [-4, -104],
              [6, -114],
            ],
            hand: 'mitt',
            deg: -40,
          },
          near: {
            pts: [
              [0, -124],
              [16, -112],
              [22, -132],
            ],
            hand: 'open',
            deg: -76,
            thumb: -1,
          },
        }}
      />

      {/* Maria, at her lady's side */}
      <Person
        at={[MARIA_X, FEET]}
        scale={1.14}
        flip
        pose={{
          look: 'maria',
          far: {
            pts: [
              [-4, -124],
              [-2, -104],
              [10, -100],
            ],
            hand: 'mitt',
          },
          near: {
            pts: [
              [5, -124],
              [8, -104],
              [-2, -100],
            ],
            hand: 'mitt',
            deg: 180,
          },
        }}
      />
    </g>
  )
}

export const yellowStockings: LinocutArt = { width: W, height: H, Draw: YellowStockings }
