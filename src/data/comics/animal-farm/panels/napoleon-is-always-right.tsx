import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, ribbon, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Horse, Pig, Sheep, type P } from './people'

/**
 * Chapter 5: "Napoleon is always right", the fifteenth moment in the guide's
 * timeline, drawn at the words on its card. Every detail is from the text
 * (the held edition, src/data/full-texts/animal-farm.ts):
 *
 * - "Afterwards Squealer was sent round the farm to explain the new
 *   arrangement to the others." So it is out in the farmyard, by day, before
 *   the long wall of the big barn with its great door shut, and Napoleon is
 *   not there: he sent Squealer. His name is on the quotation, not in the
 *   picture.
 * - Squealer is "a small fat pig ... with very round cheeks, twinkling eyes,
 *   nimble movements, and a shrill voice", and "when he was arguing some
 *   difficult point he had a way of skipping from side to side and whisking
 *   his tail which was somehow very persuasive" (Chapter 2). So he is the
 *   figure kit's Squealer, mid-skip, his tail whisked up, his mouth open, and
 *   three short lines off his snout for his voice, drawn as Napoleon's
 *   whimper is in "Snowball is driven out".
 * - "Boxer, who had now had time to think things over, voiced the general
 *   feeling by saying: 'If Comrade Napoleon says it, it must be right.'" So
 *   Boxer, the biggest animal, black with his white stripe, stands facing
 *   Squealer with his head a little lowered, having heard him out; Clover, the
 *   hatched mare, stands beside him, and sheep lie in the near yard to
 *   listen. The text names none of the listeners but Boxer, so they are the
 *   farm's usual company, nothing more.
 * - "In January there came bitterly hard weather"; only after this, "By this
 *   time the weather had broken and the spring ploughing had begun." So it is
 *   still winter: the elm behind the hedge is bare.
 *
 * NO DOGS. The three dogs who "growled so threateningly" are with Squealer on
 * the third Sunday after the expulsion, when he calls Napoleon's opposition
 * "tactics"; the words on this panel are spoken before that, and no dog is
 * named with him when he says them.
 *
 * NO SPOT COLOUR. Nothing in the scene is the text's to colour, and the kit
 * gives Squealer none, so the panel is printed from the ink block alone, as
 * several of the pilot's panels are.
 *
 * Nothing is taken from a film or stage production. Seeds: 1510 (sky), 1511
 * (barn wall), 1512 (yard), 1513 (hedge).
 */

const W = 860
const H = 340
/** The foot of the barn wall, and the far edge of the yard. */
const YARD = 250

const SQUEALER: P = [236, 306]
const BOXER: P = [548, 318]
const CLOVER: P = [694, 312]

/**
 * The sheep, lying in the near yard between Squealer and Boxer to listen: x, y.
 * They were first laid at the far edge of the yard, behind Boxer, but drawn
 * over him, and at panel size the three fleeces read as a tray held across
 * his forelegs (review, 27 September 2026). Here they are nearer than
 * anyone, clear of his hoofs and of Squealer's voice.
 */
const SHEEP: P[] = [
  [352, 334],
  [392, 338],
  [432, 335],
]
/** Three short strokes off Squealer's snout, as Napoleon's whimper is drawn in moment 14. */
const VOICE = 'M334 256Q339 263 334 270M342 251Q349 263 342 275M350 246Q359 263 350 280'

type Marks = {
  hedge: string
  tree: string
  sky: string
  wall: string
  yard: string
  roof: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // A pale late-winter sky, lightly scored.
  const r = rng(1510)
  let sky = ''
  for (let y = 10; y < YARD; y += 7) {
    let x = between(r, -20, 0)
    while (x < 400) {
      const len = between(r, 30, 110)
      if (r() < 0.34 - y / 900)
        sky += gouge(x, y, x + len, y + between(r, -0.5, 0.5), 0.9 - y / 400)
      x += len + between(r, 20, 60)
    }
  }
  // The long side of the big barn, its boards in daylight: paper, with the
  // joints and the grain cut in ink.
  const wall = gougeField(
    rng(1511),
    { x0: 372, x1: W, y0: 96, y1: YARD },
    (_x, y) => clamp(0.12 + (y - 96) / 900),
    { spacing: 6.4, len: [20, 70], gap: [10, 30], max: 1.6 },
  )
  // The yard, trodden pale, with ruts cut in ink.
  const yard = gougeField(
    rng(1512),
    { x0: 0, x1: W, y0: YARD + 4, y1: H },
    (_x, y) => 0.06 + ((y - YARD) / (H - YARD)) * 0.22,
    { spacing: 6, len: [20, 80], gap: [10, 26], max: 2.4 },
  )
  // The barn's roof: ink, with the lines of its tiles cut along it.
  let roof = ''
  for (let y = 60; y < 92; y += 6) roof += gouge(392, y, W, y, 0.6 + (y - 60) / 60)
  // The far hedge, low, its top broken into tufts.
  const rh = rng(1513)
  let hedge = `M-4 ${YARD}L-4 232`
  for (let x = -4; x <= 372; x += 8)
    hedge += `L${x} ${(232 - 4 * Math.sin(x / 13) - between(rh, 0, 3)).toFixed(1)}`
  hedge += `L372 ${YARD}Z`
  // A bare elm behind the yard: trunk and limbs as tapered ribbons.
  const limbs: [number, number][][] = [
    [
      [132, 234],
      [134, 190],
      [130, 150],
      [124, 110],
    ],
    [
      [133, 186],
      [150, 160],
      [172, 140],
      [196, 130],
    ],
    [
      [131, 168],
      [112, 146],
      [94, 132],
      [74, 126],
    ],
    [
      [128, 140],
      [140, 118],
      [150, 100],
    ],
    [
      [126, 124],
      [110, 104],
      [100, 92],
    ],
    [
      [165, 146],
      [176, 124],
      [182, 108],
    ],
    [
      [104, 142],
      [98, 118],
      [100, 102],
    ],
  ]
  const tree = limbs.map((pts, i) => ribbon(pts, i === 0 ? 12 : 5.5, 0.6, false)).join('')
  cached = { hedge, tree, sky, wall, yard, roof }
  return cached
}

function NapoleonIsAlwaysRight({ uid }: ArtProps) {
  const m = marks()
  return (
    <>
      <g className="lc-push" style={timing({ origin: [400, 230], push: 1.03 })}>
        <rect x={0} y={0} width={W} height={H} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        {/* the far hedge and fields beyond the yard */}
        <path d={m.hedge} fill={INK} />
        {/* a bare elm: it is late winter */}
        <path d={m.tree} fill={INK} />
        {/* the big barn: its roof, its long wall and its great door, shut */}
        <path d="M372 96L420 52H870V96Z" fill={INK} />
        <path d={m.roof} fill={PAPER} />
        <path d="M370 97L420 52H870" fill="none" stroke={INK} strokeWidth={2.4} />
        <path d={m.wall} fill={INK} />
        {[372, 430, 488, 546, 604, 662, 720, 778, 836].map((x) => (
          <path key={x} d={`M${x} 96V${YARD}`} stroke={INK} strokeWidth={1.4} />
        ))}
        <rect
          x={580}
          y={120}
          width={130}
          height={YARD - 120}
          fill={INK}
          stroke={PAPER}
          strokeWidth={2}
        />
        <path
          d="M645 120V250M580 120L645 185L710 120M580 250L645 185L710 250"
          stroke={PAPER}
          strokeWidth={2.4}
          fill="none"
        />
        {/* the yard */}
        <rect x={0} y={YARD} width={W} height={H - YARD} fill={PAPER} />
        <path d={`M0 ${YARD}H${W}`} stroke={INK} strokeWidth={2.4} />
        <path d={m.yard} fill={INK} />

        {/* the animals he has come to explain it to */}
        <Horse at={CLOVER} s={1.08} face={-1} who="clover" uid={uid} />
        <Horse at={BOXER} s={1.2} face={-1} who="boxer" headDown={12} />

        {/* Squealer, skipping from side to side and whisking his tail */}
        <Pig at={SQUEALER} s={1.45} kind="squealer" pose="skip" mouthOpen />
        {/* his shrill voice: three short strokes off the snout */}
        <path d={VOICE} fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
        {/* the sheep, nearest of all, turned to Squealer */}
        {SHEEP.map(([x, y]) => (
          <Sheep key={x} at={[x, y]} s={1.4} face={-1} />
        ))}
      </g>
    </>
  )
}

export const napoleonIsAlwaysRight: LinocutArt = {
  width: W,
  height: H,
  Draw: NapoleonIsAlwaysRight,
}
