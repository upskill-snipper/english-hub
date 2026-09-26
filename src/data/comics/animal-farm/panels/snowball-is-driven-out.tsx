import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  deg,
  gouge,
  gougeField,
  n,
  rng,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Pig, Sheep, Wolfdog, place, type P } from './people'

/**
 * Chapter 5: "Snowball is driven out", the fourteenth moment in the guide's
 * timeline. Every detail is from the text (the held edition,
 * src/data/full-texts/animal-farm.ts):
 *
 * - "At the Meeting on the following Sunday the question of whether or not to
 *   begin work on the windmill was to be put to the vote. When the animals
 *   had assembled in the big barn". So it is the big barn on a Sunday
 *   morning, its floor deep in straw and its great door open on the day.
 *   Sheep of the meeting lie in the straw at the far end; the rest of the
 *   assembly is left to the words, so the chase has room.
 * - "At one end of the big barn, on a sort of raised platform, Major was
 *   already ensconced on his bed of straw, under a lantern which hung from a
 *   beam" (Chapter 1). The platform and the lantern are at the left end,
 *   empty, and the lantern is not lit, because it is morning. Napoleon only
 *   mounts the platform after the chase, so he stands on the floor below it.
 * - "just at this moment Napoleon stood up and, casting a peculiar sidelong
 *   look at Snowball, uttered a high-pitched whimper of a kind no one had ever
 *   heard him utter before." So Napoleon, the large black boar of the figure
 *   kit, stands on the left facing Snowball, his eye cut in the spot colour,
 *   the panel's one red, as it is in "The windmill plans"; and three short
 *   curved lines leave his snout: the whimper, the signal.
 * - "At this there was a terrible baying sound outside, and nine enormous dogs
 *   wearing brass-studded collars came bounding into the barn. They dashed
 *   straight for Snowball, who only sprang from his place just in time to
 *   escape their snapping jaws." So the dogs pour in at the door on the right,
 *   black against the daylight, their collars studded with bright points (the
 *   print has no brass). Six are seen, from the leader in mid-leap to those
 *   still in the doorway; the rest of the nine are outside the picture.
 *   Snowball, the pale pig, is still turned towards Napoleon, as he was in
 *   the debate, and springs clear with all four feet off the straw; his
 *   shadow is left on the spot where he stood. Every dog's jaw is shut and
 *   none touches him: the "snapping jaws" are the text's, not the picture's.
 *
 * The dogs are the figure kit's Wolfdog, drawn first for this panel from
 * "enormous", "brass-studded collars" and "as fierce-looking as wolves"
 * (Chapter 5), and shared with every later panel that has them.
 *
 * Nothing is taken from a film or stage production. Seeds: 1410 (wall), 1411
 * (straw), 1412 (daylight).
 */

const W = 860
const H = 340
/** Where the back wall meets the floor. */
const BASE = 236
/** The great door: its opening, left, top and right. */
const DOOR = { x0: 664, y0: 54, x1: 836 }

/**
 * Napoleon's "peculiar sidelong look": a lens in the spot colour over the
 * kit's eye cut, in the kit pig's frame, as "The windmill plans" cuts it.
 */
const SIDELONG_EYE = gouge(35.2, -39, 46, -41.2, 1.9)

/** Where Napoleon stands, and where Snowball's feet are as he springs. */
const NAPOLEON: P = [150, 302]
const SNOWBALL: P = [384, 262]
/** "a high-pitched whimper": three short arcs off his snout. */
const WHIMPER = 'M246 251Q251 259 246 267M254 246Q261 259 254 272M262 241Q271 259 262 277'
/** The shadow on the straw under Snowball, where he was. */
const SPRING_SHADOW = gouge(318, 306, 452, 306, 3.4)
/** The dogs: x, y, scale, pose, from the back of the pack to its lead. */
const DOGS: [number, number, number, 'stand' | 'bound'][] = [
  [838, 234, 0.8, 'stand'],
  [786, 230, 0.85, 'bound'],
  [728, 236, 0.9, 'bound'],
  [796, 262, 1.05, 'bound'],
  [700, 280, 1.15, 'bound'],
  [596, 306, 1.3, 'bound'],
]
/** The sheep of the meeting, lying in the straw: x, y, scale, facing. */
const SHEEP: [number, number, number, number][] = [
  [28, 262, 1.3, 1],
  [66, 257, 1.3, 1],
]

/** Straw on the top of the platform, where Major's bed was. */
const PLATFORM_STRAW =
  gouge(12, 212, 26, 210, 0.7) +
  gouge(40, 214, 56, 211, 0.7) +
  gouge(74, 211, 90, 213, 0.7) +
  gouge(108, 214, 124, 211, 0.7) +
  gouge(142, 211, 158, 213, 0.7) +
  gouge(172, 214, 188, 212, 0.7)

/** The far hedge seen through the door, above the pasture. */
const HEDGE =
  'M664 172C680 164 694 168 706 162C720 158 734 166 748 160C764 156 780 164 796 158C810 156 824 162 836 160V178H664Z'

type Marks = {
  wall: string
  planks: string
  straw: string
  day: string
  rafters: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The barn is lit from its open door on the right; the cuts in the wall
  // widen towards it and die away into the dark at the platform end.
  const light = (x: number, y: number) =>
    Math.max(clamp(1 - Math.hypot((x - 760) * 0.75, (y - 150) * 1.2) / 420), 0.05)
  const wall = gougeField(rng(1410), { x0: 0, x1: DOOR.x0 - 10, y0: 58, y1: BASE }, light, {
    spacing: 6.2,
  })
  let planks = ''
  for (let x = 30; x < DOOR.x0 - 16; x += 42) planks += wedge(x, 56, x + 0.6, BASE, 2.4, 2.8)

  // The straw on the floor: short cuts at every angle, thicker and denser in
  // the daylight that falls in from the door.
  const rs = rng(1411)
  let straw = ''
  for (let i = 0; i < 520; i++) {
    const x = between(rs, 0, W)
    const y = between(rs, BASE + 3, H - 2)
    const L = clamp(1 - Math.hypot((x - 740) * 0.5, (y - 250) * 1.4) / 380)
    if (rs() > 0.25 + L * 0.75) continue
    const a = deg(between(rs, -35, 35) + (rs() < 0.5 ? 0 : 180))
    const len = between(rs, 6, 16)
    straw += gouge(x, y, x + Math.cos(a) * len, y + Math.sin(a) * len, 0.5 + L * 1.1)
  }

  // Daylight through the door: pale, with a few thin cuts of cloud and the
  // line of the yard beyond.
  const day = gougeField(
    rng(1412),
    { x0: DOOR.x0, x1: DOOR.x1, y0: DOOR.y0 + 8, y1: BASE },
    () => 0.03,
    { spacing: 11, len: [20, 60], gap: [20, 50], max: 1 },
  )

  // The roof: king-posts standing on the tie-beam, braced both ways, and a
  // purlin running along under the roof.
  let rafters = gouge(0, 16, W, 16, 1.4)
  for (const x of [200, 420, 640])
    rafters +=
      wedge(x, 0, x, 50, 5, 5) +
      wedge(x - 70, 50, x - 2, 10, 3, 3.6) +
      wedge(x + 70, 50, x + 2, 10, 3, 3.6)
  cached = { wall, planks, straw, day, rafters }
  return cached
}

function SnowballIsDrivenOut({ uid }: ArtProps) {
  const m = marks()
  const door = `${uid}-door`
  return (
    <>
      <defs>
        <clipPath id={door}>
          <rect x={DOOR.x0} y={DOOR.y0} width={DOOR.x1 - DOOR.x0} height={BASE - DOOR.y0} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [430, 200], push: 1.03 })}>
        {/* the roof space, dark, with its rafters cut out of the dark */}
        <rect x={0} y={0} width={W} height={60} fill={INK} />
        <path d={m.rafters} fill={PAPER} />
        {/* the back wall of planks */}
        <path d={m.wall} fill={PAPER} />
        <path d={m.planks} fill={INK} />
        {/* the tie-beam and the lantern hanging from it over the platform */}
        <rect x={0} y={50} width={W} height={12} fill={INK} />
        <path d={gouge(0, 55, W, 55, 1.4)} fill={PAPER} />
        <path d="M112 62V102" stroke={PAPER} strokeWidth={4.4} />
        <path d="M112 62V102" stroke={INK} strokeWidth={2} />
        <path
          d="M100 102H124L128 108L124 134H100L96 108Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={1.4}
        />
        <path d="M104 110H120V130H104Z" fill="none" stroke={PAPER} strokeWidth={1} />

        {/* the floor, deep in straw */}
        <rect x={0} y={BASE} width={W} height={H - BASE} fill={PAPER} />
        <rect x={0} y={BASE} width={W} height={3} fill={INK} />
        <path d={m.straw} fill={INK} />
        {/* the raised platform at the left end, where Major once lay */}
        <path d="M0 206H198L210 218H0Z" fill={PAPER} />
        <path d={PLATFORM_STRAW} fill={INK} />
        <path d="M0 218H210V248H0Z" fill={INK} stroke={PAPER} strokeWidth={1.8} />
        <path d={gouge(4, 226, 204, 226, 0.9) + gouge(4, 236, 204, 236, 0.9)} fill={PAPER} />

        {/* the great door, open on the day */}
        <rect
          x={DOOR.x0 - 14}
          y={DOOR.y0 - 12}
          width={DOOR.x1 - DOOR.x0 + 28}
          height={BASE - DOOR.y0 + 12}
          fill={INK}
        />
        <rect
          x={DOOR.x0}
          y={DOOR.y0}
          width={DOOR.x1 - DOOR.x0}
          height={BASE - DOOR.y0}
          fill={PAPER}
        />
        <g clipPath={`url(#${door})`}>
          <path d={m.day} fill={INK} />
          {/* the hedge at the far side of the long pasture */}
          <path d={HEDGE} fill={INK} />
          <path
            d={`M${DOOR.x0} 196Q750 190 ${DOOR.x1} 200`}
            fill="none"
            stroke={INK}
            strokeWidth={1.6}
          />
        </g>
        {/* the leaf of the door, swung back into the barn */}
        <path
          d={`M${DOOR.x1 + 14} 40L856 30V256L${DOOR.x1 + 14} 246Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={1.2}
        />
        {[0, 1, 2].map((k) => (
          <path key={k} d={gouge(DOOR.x1 + 18, 70 + k * 70, 853, 64 + k * 72, 0.9)} fill={PAPER} />
        ))}
        <path d={`M${n(DOOR.x0 - 14)} ${BASE}H${DOOR.x1 + 14}`} stroke={INK} strokeWidth={4} />

        {/* the meeting: sheep lying in the straw along the wall */}
        {SHEEP.map(([x, y, s, f]) => (
          <Sheep key={x} at={[x, y]} s={s} face={f as 1 | -1} />
        ))}

        {/* the dogs, pouring in at the door, the far ones first */}
        {DOGS.map(([x, y, s, pose]) => (
          <Wolfdog key={x} at={[x, y]} s={s} face={-1} pose={pose} />
        ))}

        {/* Napoleon, standing, his eye cut sidelong at Snowball, whimpering */}
        <Pig at={NAPOLEON} s={1.45} kind="napoleon" />
        <g transform={place(NAPOLEON, 1.45)}>
          <path d={SIDELONG_EYE} fill={RED} />
        </g>
        <path d={WHIMPER} fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />

        {/* Snowball, still facing Napoleon as he was in the debate, springs
            clear of the dogs at his back, all four feet off the straw */}
        <path d={SPRING_SHADOW} fill={INK} />
        <g transform={`rotate(9 ${SNOWBALL[0]} ${SNOWBALL[1]})`}>
          <Pig at={SNOWBALL} s={1.3} face={-1} kind="snowball" pose="skip" mouthOpen />
        </g>
      </g>
    </>
  )
}

export const snowballIsDrivenOut: LinocutArt = { width: W, height: H, Draw: SnowballIsDrivenOut }
