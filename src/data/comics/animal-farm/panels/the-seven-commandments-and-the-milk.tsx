import type { LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rng, wedge, type Rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { EndWall, type WallLine } from './end-wall'
import { Horse, Pig } from './people'

/**
 * Chapter 2: "The Seven Commandments and the milk", the sixth moment in the
 * guide's timeline: the morning after the Rebellion. Every detail is from the
 * held edition (src/data/full-texts/animal-farm.ts):
 *
 * - "Snowball and Napoleon sent for a ladder which they caused to be set
 *   against the end wall of the big barn"; "Snowball climbed up and set to
 *   work, with Squealer a few rungs below him holding the paint-pot. The
 *   Commandments were written on the tarred wall in great white letters". So
 *   the wall is the shared end wall (./end-wall.tsx), the ladder still leans
 *   on it, and Squealer, small and round, stands at its foot by the pot of
 *   white paint.
 * - The Commandments are lettered as they stand on this first morning:
 *   "4. No animal shall sleep in a bed." and "6. No animal shall kill any
 *   other animal." with nothing added, and the Second keeps Snowball's
 *   "freind".
 * - "'Now, comrades,' cried Snowball, throwing down the paint-brush, 'to the
 *   hayfield!'" So the brush lies where he threw it.
 * - "Soon there were five buckets of frothing creamy milk at which many of
 *   the animals looked with considerable interest." So five buckets stand
 *   in the yard, the milk heaped white above their rims; their hoops are
 *   printed in the spot colour, because the milk is what the moment is about.
 * - "'Never mind the milk, comrades!' cried Napoleon, placing himself in
 *   front of the buckets. ... 'Comrade Snowball will lead the way. I shall
 *   follow in a few minutes. Forward, comrades! The hay is waiting.'" So
 *   Napoleon, the black Berkshire of the figure kit (./people.tsx), stands
 *   squarely between the buckets and the others, his mouth open.
 * - "So the animals trooped down to the hayfield to begin the harvest". So
 *   Snowball, pale, walks away to the right at the head of them, and Boxer,
 *   the biggest animal, with the white stripe down his nose, follows him.
 *   The standing hay waits beyond the hedge.
 *
 * It is "half-past six" in June, so the sky is open and pale. The quotation
 * is the sentence that closes the chapter, that evening: the picture shows
 * the moment the milk was left behind, and the words say what became of it.
 * Mollie is named among those present but is left out: a second horse would
 * hide the buckets. Nothing is taken from a film or stage production. Seeds:
 * 601 (sky), 602 (yard), 603 (hay).
 */

const W = 860
const H = 340
/** Where the yard meets the foot of the barn wall. */
const GROUND = 292
/** The wall's place: its own frame is 420 wide with its foot at y 300. */
const WALL_T = `translate(14 ${GROUND - 300 * 0.74}) scale(0.74)`

/** The Seven Commandments as Snowball painted them, in the wall's frame. */
const FIRST_MORNING: WallLine[] = [
  { runs: [{ t: '1. Whatever goes upon two legs is an enemy.' }], width: 300 },
  { runs: [{ t: '2. Whatever goes upon four legs, or has wings, is a freind.' }], width: 366 },
  { runs: [{ t: '3. No animal shall wear clothes.' }], width: 218 },
  { runs: [{ t: '4. No animal shall sleep in a bed.' }], width: 214 },
  { runs: [{ t: '5. No animal shall drink alcohol.' }], width: 222 },
  { runs: [{ t: '6. No animal shall kill any other animal.' }], width: 266 },
  { runs: [{ t: '7. All animals are equal.' }], width: 170 },
]

/** The five buckets: [x of the centre, y of the base]. */
const BUCKETS: [number, number][] = [
  [382, 300],
  [414, 298],
  [446, 301],
  [398, 316],
  [432, 318],
]

type Marks = {
  sky: string
  hedge: string
  hay: string
  yard: string
  shadows: string
  froth: string[]
}

function skyMarks(r: Rng) {
  let d = ''
  for (let y = 14; y < 170; y += 8) {
    const dens = clamp(1 - (y - 14) / 160)
    let x = 330 + between(r, -20, 0)
    while (x < W - 12) {
      const len = between(r, 10, 40)
      if (r() < 0.08 + dens * 0.34)
        d += gouge(x, y + between(r, -1, 1), x + len, y + between(r, -1, 1), 0.3 + dens * 0.8)
      x += len + between(r, 12, 44)
    }
  }
  return d
}

/** The heaped froth of one bucket of milk: a lumpy dome over the rim. */
function froth(r: Rng, cx: number, top: number) {
  let d = `M${n(cx - 13)} ${n(top + 1)}`
  const k = 6
  for (let i = 0; i < k; i++) {
    const x0 = cx - 13 + (26 * i) / k
    const x1 = cx - 13 + (26 * (i + 1)) / k
    const hgt = 3 + 3.4 * Math.sin((Math.PI * (i + 0.5)) / k) + between(r, -0.8, 0.8)
    d += `Q${n((x0 + x1) / 2)} ${n(top - hgt * 1.4)} ${n(x1)} ${n(top + 0.4)}`
  }
  return d + 'Z'
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = skyMarks(rng(601))

  // The hedge along the bottom of the hayfield, and the standing hay above it.
  const h = rng(603)
  const hedgeTop = (x: number) => 214 + 3 * Math.abs(Math.sin(x / 11)) - 2 * Math.sin(x / 37)
  let hedge = `M326 232`
  for (let x = 326; x <= W; x += 4) hedge += `L${x} ${n(hedgeTop(x))}`
  hedge += `L${W} 232Z`
  let hay = ''
  for (let x = 330; x < W - 6; x += 3.2) {
    const top = 176 + 6 * Math.sin(x / 90) + between(h, -5, 3)
    hay += gouge(x, hedgeTop(x) - 1, x + between(h, -3, 3), top, 0.55 + between(h, 0, 0.35))
  }
  // Seed heads bending at the tops of the grass.
  for (let k = 0; k < 90; k++) {
    const x = between(h, 334, W - 14)
    const y = 172 + 6 * Math.sin(x / 90) + between(h, -4, 6)
    hay += gouge(x, y, x + between(h, 3, 6), y - between(h, 3, 6), 0.9)
  }

  // The trodden yard: ruts and stones, paler where the morning light falls.
  const y = rng(602)
  let yard = ''
  for (let row = GROUND + 4; row < H - 4; row += 6) {
    let x = 330 + between(y, -30, 0)
    const depth = (row - GROUND) / (H - GROUND)
    while (x < W - 8) {
      const len = between(y, 12, 46)
      if (y() < 0.34 + depth * 0.2)
        yard += gouge(
          x,
          row + between(y, -1, 1),
          x + len,
          row + between(y, -1, 1),
          0.5 + depth * 1.2,
        )
      x += len + between(y, 10, 34)
    }
  }
  // Short strokes for the ground in front of the wall.
  for (let k = 0; k < 40; k++) {
    const x = between(y, 20, 330)
    const yy = between(y, GROUND + 8, H - 10)
    yard += gouge(x, yy, x + between(y, 8, 22), yy + between(y, -1, 1), 0.6 + between(y, 0, 0.6))
  }

  // Shadows under Squealer, the buckets, Napoleon, Boxer and Snowball.
  let shadows = ''
  const pool = (x0: number, x1: number, yy: number, rows: number) => {
    for (let i = 0; i < rows; i++) {
      const t = 1 - Math.abs(i - (rows - 1) / 2) / rows
      shadows += gouge(
        x0 + (1 - t) * 10,
        yy + i * 3,
        x1 - (1 - t) * 10,
        yy + i * 3 + 0.6,
        0.6 + t * 1.6,
      )
    }
  }
  pool(186, 262, 309, 4)
  pool(364, 462, 320, 4)
  pool(456, 570, 322, 4)
  pool(572, 752, 316, 5)
  pool(726, 830, 322, 4)

  const f = rng(604)
  const frothPaths = BUCKETS.map(([cx, base]) => froth(f, cx, base - 25))

  cached = { sky, hedge, hay, yard, shadows, froth: frothPaths }
  return cached
}

/** A wooden bucket: tapering staves, two hoops, a rope handle. Base centred on (cx, base). */
function Bucket({ cx, base, frothD }: { cx: number; base: number; frothD: string }) {
  const top = base - 25
  return (
    <g>
      <path
        d={`M${cx - 14} ${top}L${cx + 14} ${top}L${cx + 11} ${base}L${cx - 11} ${base}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path
        d={
          gouge(cx - 5, top + 3, cx - 4.4, base - 3, 0.6) +
          gouge(cx + 4, top + 3, cx + 3.6, base - 3, 0.6)
        }
        fill={PAPER}
      />
      <g fill={RED}>
        <path
          d={`M${cx - 13.6} ${top + 5}L${cx + 13.6} ${top + 5}L${cx + 13.2} ${top + 8.4}L${cx - 13.2} ${top + 8.4}Z`}
        />
        <path
          d={`M${cx - 12} ${base - 7}L${cx + 12} ${base - 7}L${cx + 11.6} ${base - 3.8}L${cx - 11.6} ${base - 3.8}Z`}
        />
      </g>
      <path d={frothD} fill={PAPER} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
      <path
        d={`M${n(cx - 6)} ${n(top - 3)}q3 -2 6 0M${n(cx + 1)} ${n(top - 5)}q3 -2 6 0`}
        fill="none"
        stroke={INK}
        strokeWidth={0.8}
      />
    </g>
  )
}

function SevenCommandmentsAndMilk() {
  const m = marks()
  return (
    <>
      <g className="lc-push" style={timing({ origin: [470, 220], push: 1.03 })}>
        {/* the morning sky, the hedge and the standing hay beyond the yard */}
        <rect x={0} y={0} width={W} height={GROUND + 2} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        <path d={m.hay} fill={INK} />
        <path d={m.hedge} fill={INK} />
        <path d={gouge(330, 222, W - 10, 224, 0.8)} fill={PAPER} />
        {/* the yard */}
        <rect x={0} y={GROUND} width={W} height={H - GROUND} fill={PAPER} />
        <path d={m.yard} fill={INK} />

        {/* the end wall of the big barn, the Commandments fresh on it */}
        <EndWall transform={WALL_T} lines={FIRST_MORNING} sky="day" />
        <rect x={0} y={GROUND} width={336} height={3} fill={INK} />
        <path d={m.shadows} fill={INK} />

        {/* the ladder, still set against the wall */}
        {[
          ['M324 302L306 116', 'M342 302L324 116'],
          [...Array(12)].map((_, i) => {
            const t = (i + 0.6) / 12.4
            const x0 = 324 - 18 * t
            const yy = 302 - 186 * t
            return `M${n(x0)} ${n(yy)}L${n(x0 + 18)} ${n(yy)}`
          }),
        ].map((set, i) => (
          <g key={i}>
            <path
              d={set.join('')}
              fill="none"
              stroke={PAPER}
              strokeWidth={i ? 6 : 7.4}
              strokeLinecap="round"
            />
            <path
              d={set.join('')}
              fill="none"
              stroke={INK}
              strokeWidth={i ? 3 : 4.2}
              strokeLinecap="round"
            />
          </g>
        ))}

        {/* the paint-pot of white paint, and the brush Snowball threw down */}
        <path
          d="M262 290L284 290L282 311L264 311Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d="M262 290L284 290L283.4 295L262.6 295Z" fill={PAPER} />
        <path
          d="M268 296L268.4 302M276 296L275.6 305"
          stroke={PAPER}
          strokeWidth={1.4}
          strokeLinecap="round"
        />
        <path d="M263 290Q273 280 283 290" fill="none" stroke={INK} strokeWidth={1.4} />
        <path d={wedge(328, 324, 356, 318, 3.4, 3)} fill={INK} stroke={PAPER} strokeWidth={1} />
        <path
          d="M355 312.6L366 311L367 318.6L356 319.4Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.2}
        />
        <path d="M358 314L365 313M358.4 317L365.6 316.4" stroke={INK} strokeWidth={0.7} />

        {/* Squealer, at the foot of the ladder */}
        <Pig at={[222, 312]} s={0.6} kind="squealer" />

        {/* five buckets of frothing creamy milk */}
        {BUCKETS.map(([cx, base], i) => (
          <Bucket key={cx} cx={cx} base={base} frothD={m.froth[i]} />
        ))}

        {/* Napoleon, placing himself in front of the buckets */}
        <Pig at={[512, 322]} s={0.92} kind="napoleon" mouthOpen />

        {/* Boxer and Snowball, off to the hayfield */}
        <Horse at={[646, 314]} s={0.96} who="boxer" />
        <Pig at={[772, 322]} s={0.8} kind="snowball" />
      </g>
    </>
  )
}

export const theSevenCommandmentsAndTheMilk: LinocutArt = {
  width: W,
  height: H,
  Draw: SevenCommandmentsAndMilk,
}
