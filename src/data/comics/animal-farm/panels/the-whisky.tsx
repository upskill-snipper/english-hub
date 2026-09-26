import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  gouge,
  gougeField,
  rays,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { EndWall, commandments } from './end-wall'
import { Benjamin, Hen, Horse, Pig, Sheep, Wolfdog } from './people'

/**
 * Chapter 8: "The whisky", the twenty-fifth moment in the guide's timeline.
 * Of its scenes (the pigs finding the whisky, Napoleon in Mr Jones's bowler,
 * the announcement that he is dying, the paddock sown with barley) this is
 * the one the moment's quotation turns on, and the only one that shows how
 * the Commandments come to change. Every detail is from the text (the held
 * edition, src/data/full-texts/animal-farm.ts):
 *
 * - "One night at about twelve o'clock there was a loud crash in the yard,
 *   and the animals rushed out of their stalls. It was a moonlit night." So
 *   the moon is high, the yard is white under it, and the animals stand in
 *   front of the stable on the right, where they have come out.
 * - "At the foot of the end wall of the big barn, where the Seven
 *   Commandments were written, there lay a ladder broken in two pieces.
 *   Squealer, temporarily stunned, was sprawling beside it, and near at hand
 *   there lay a lantern, a paint-brush, and an overturned pot of white
 *   paint." So all of those are at the foot of the wall (./end-wall.tsx),
 *   the paint spilt in a white pool. Squealer is the kit's (./people.tsx),
 *   lying with his forequarters lifted: stunned, and plainly alive.
 * - "The dogs immediately made a ring round Squealer". So three of
 *   Napoleon's dogs, the kit's Wolfdog, stand round him.
 * - "None of the animals could form any idea as to what this meant, except
 *   old Benjamin, who nodded his muzzle with a knowing air, and seemed to
 *   understand, but would say nothing." So Benjamin stands nearest, his head
 *   bowed in a nod; Boxer, the sheep and the hens look on behind him.
 * - "Actually the Commandment read: "No animal shall drink alcohol TO
 *   EXCESS."" Muriel reads it a few days later; the picture shows the wall
 *   as it now stands, and the two words that are new are the one thing in
 *   the spot colour. The paint is white; the red is the print pointing.
 *   FOUR LEGS GOOD, TWO LEGS BAD is in the gable over them, as it has been
 *   since Chapter III.
 * - The lantern "lay" there: it is drawn on its side and dark, since the
 *   text does not say it was still alight, and the moon lights the yard.
 *
 * Nothing is taken from a film, a cartoon or a stage production. Seed 2525.
 */

const W = 860
const H = 340
/** The foot of the barn's end wall. */
const FOOT = 262
/** The end wall, a little smaller than in "Without cause", so the yard below it has room. */
const WALL_S = 0.9
const MOON: Pt = [512, 62]

type Marks = {
  sky: string
  glow: string
  halo: string
  yard: string
  stable: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(2525)
  // The night sky: ink, cut paler towards the moon.
  const sky = gougeField(
    r,
    { x0: 380, x1: W, y0: 6, y1: 200 },
    (x, y) => clamp(0.55 - Math.hypot(x - MOON[0], (y - MOON[1]) * 1.3) / 420),
    { spacing: 6, len: [16, 60] },
  )
  const glow = rays(r, MOON[0], MOON[1], { from: 34, to: 110, every: 7, width: 2 })
  const halo =
    arcDashes(r, MOON[0], MOON[1], 29, 0, Math.PI * 2, [6, 16], [4, 9]) +
    arcDashes(r, MOON[0], MOON[1], 35, 0, Math.PI * 2, [4, 12], [6, 14])
  // The yard, white under the moon, scored by ruts and the shadows of straw.
  const yard = gougeField(
    r,
    { x0: 0, x1: W, y0: FOOT, y1: H },
    (x, y) => clamp(0.12 + (y - FOOT) / 520),
    { spacing: 5, len: [16, 70] },
  )
  // The stable's boards on the right, dark, faintly moonlit.
  let stable = ''
  for (let x = 606; x < W; x += 13)
    stable += gouge(x + between(r, -1, 1), 122, x + between(r, -1, 1), FOOT - 4, 0.5)
  cached = { sky, glow, halo, yard, stable }
  return cached
}

/** The ladder, broken in two: two lengths of rails and rungs on the ground. */
function LadderPiece({ x, y, len, rot }: { x: number; y: number; len: number; rot: number }) {
  let rungs = ''
  for (let k = 12; k < len - 4; k += 16) rungs += `M${k} -1V17`
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <path
        d={`M0 0H${len}M0 16H${len}${rungs}`}
        stroke={PAPER}
        strokeWidth={7}
        strokeLinecap="round"
        fill="none"
      />
      <path
        d={`M0 0H${len}M0 16H${len}${rungs}`}
        stroke={INK}
        strokeWidth={4}
        strokeLinecap="round"
        fill="none"
      />
      {/* the snapped ends */}
      <path
        d={`M${len} -3L${len + 6} 1L${len + 2} 3ZM${len} 13L${len + 7} 17L${len + 1} 19Z`}
        fill={INK}
      />
    </g>
  )
}

function TheWhisky({ uid }: ArtProps) {
  const m = marks()
  void uid
  return (
    <g className="lc-push" style={timing({ origin: [330, 260], push: 1.03 })}>
      {/* "It was a moonlit night." */}
      <path d={m.sky} fill={PAPER} />
      <path d={m.glow} fill={PAPER} />
      <circle cx={MOON[0]} cy={MOON[1]} r={22} fill={PAPER} />
      <path d={m.halo} fill="none" stroke={PAPER} strokeWidth={LINE.fine} />
      {/* the stable the animals have rushed out of */}
      <path
        d="M590 128L690 96L870 96V262H590Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={m.stable} fill={PAPER} />
      <rect x={628} y={170} width={52} height={92} fill={INK} stroke={PAPER} strokeWidth={2} />
      <rect x={740} y={170} width={52} height={92} fill={INK} stroke={PAPER} strokeWidth={2} />
      {/* the moonlit yard */}
      <rect x={0} y={FOOT} width={W} height={H - FOOT} fill={PAPER} />
      <path d={m.yard} fill={INK} />
      {/* the end wall of the big barn: "TO EXCESS", new, in the spot colour */}
      <EndWall
        transform={`translate(16 ${FOOT - 300 * WALL_S}) scale(${WALL_S})`}
        lines={commandments({ toExcess: 'red' })}
        sky="night"
        maxim
      />
      {/* moonlight along the wall's foot and down its corner */}
      <rect x={10} y={FOOT - 1} width={392} height={3} fill={PAPER} />
      <path d={`M400 ${FOOT}V44`} stroke={PAPER} strokeWidth={LINE.carve} />

      {/* the ladder broken in two, the spilt paint, the brush, the lantern */}
      <LadderPiece x={60} y={276} len={126} rot={-3} />
      <LadderPiece x={176} y={326} len={100} rot={-9} />
      <path
        d="M112 300C100 302 94 308 100 314C110 320 132 320 150 316C162 313 164 306 156 301C144 296 124 297 112 300Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.4}
      />
      <g transform="translate(98 302) rotate(-72)">
        <path d="M-10 -12H10L8 12H-8Z" fill={INK} stroke={PAPER} strokeWidth={1.6} />
        <ellipse cx={0} cy={12} rx={8} ry={3} fill={PAPER} stroke={INK} strokeWidth={1.2} />
      </g>
      <path d="M156 326L188 318" stroke={INK} strokeWidth={3} strokeLinecap="round" />
      <path d="M186 316L196 313L197 321L189 322Z" fill={INK} />
      {/* the lantern, knocked over on its side */}
      <g transform="translate(470 318) rotate(-100)">
        <path d="M-8 9H8L7 -9H-7Z" fill={INK} stroke={PAPER} strokeWidth={1.4} />
        <path d="M-4 5V-5M0 5V-5M4 5V-5" stroke={PAPER} strokeWidth={1.1} />
        <path d="M-6 -9Q0 -18 6 -9" stroke={INK} strokeWidth={1.8} fill="none" />
        <rect x={-9} y={8} width={18} height={4} fill={INK} stroke={PAPER} strokeWidth={1} />
      </g>

      {/* "The dogs immediately made a ring round Squealer": one behind him
          and one at either side, none over him */}
      <Wolfdog at={[268, 270]} s={0.66} />
      <Wolfdog at={[200, 292]} s={0.8} />
      <Wolfdog at={[430, 292]} s={0.8} face={-1} />
      {/* Squealer, "temporarily stunned", sprawling by the ladder */}
      <g transform="rotate(6 300 318)">
        <Pig at={[312, 320]} s={1.05} kind="squealer" pose="lie-trotter" />
      </g>

      {/* the animals, out of their stalls */}
      <Horse at={[762, 290]} s={0.86} face={-1} who="boxer" headDown={8} />
      <Sheep at={[704, 300]} s={1.4} face={-1} />
      <Hen at={[820, 318]} s={1.3} face={-1} />
      <Hen at={[664, 322]} s={1.2} face={-1} />
      <Sheep at={[790, 332]} s={1.5} face={-1} />
      {/* Benjamin, who "nodded his muzzle with a knowing air" */}
      <Benjamin at={[590, 330]} s={1.0} face={-1} headDown={22} />
    </g>
  )
}

export const theWhisky: LinocutArt = { width: W, height: H, Draw: TheWhisky }
