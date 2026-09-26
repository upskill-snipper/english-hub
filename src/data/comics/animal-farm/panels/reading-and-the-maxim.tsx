import type { LinocutArt } from '@/lib/comics/types'
import { INK, PAPER, RED, SERIF } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rng, type Rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { EndWall, type WallLine } from './end-wall'
import { Horse, Sheep } from './people'

/**
 * Chapter 3: "Reading and the maxim", the eighth moment in the guide's
 * timeline. Every detail is from the held edition
 * (src/data/full-texts/animal-farm.ts):
 *
 * - "Boxer could not get beyond the letter D. He would trace out A, B, C, D,
 *   in the dust with his great hoof, and then would stand staring at the
 *   letters". So Boxer, the biggest animal, with the
 *   white stripe down his nose (the figure kit, ./people.tsx), stands with
 *   his head lowered over four letters scratched in the dust at his feet.
 *   The letters are printed in the spot colour: the print pointing at them,
 *   as the shared end wall points at a changed Commandment.
 * - "FOUR LEGS GOOD, TWO LEGS BAD, was inscribed on the end wall of the
 *   barn, above the Seven Commandments and in bigger letters". So the maxim
 *   is cut in the gable of the end wall (./end-wall.tsx), above the
 *   Commandments, bigger than they are. The Commandments are as Snowball
 *   painted them in Chapter 2, "freind" and all; none has been changed yet.
 * - "the sheep developed a great liking for this maxim, and often as they
 *   lay in the field they would all start bleating 'Four legs good, two legs
 *   bad! Four legs good, two legs bad!' and keep it up for hours on end". So
 *   the sheep lie in the field beyond the fence, and short cut lines leave
 *   their faces: the bleating. The words stay on the wall, not in the air.
 * - "By the autumn almost every animal on the farm was literate in some
 *   degree." So the field is autumn stubble under a low sky.
 *
 * The other readers of the chapter (Clover, Muriel, Benjamin, Mollie with
 * her twigs) are left to the words, so that the one who cannot get past D
 * holds the picture. Nothing is taken from a film or stage production.
 * Seeds: 801 (sky), 802 (ground), 803 (field).
 */

const W = 860
const H = 340
/** Where the yard meets the foot of the barn wall. */
const GROUND = 300
const WALL_S = 0.8
const WALL_T = `translate(10 ${GROUND - 300 * WALL_S}) scale(${WALL_S})`
/** The far edge of the field, and the fence between it and the yard. */
const FIELD_TOP = 198
const FENCE = 262

/** The Commandments as they still stand in Chapter 3, in the wall's frame. */
const CHAPTER_THREE: WallLine[] = [
  { runs: [{ t: '1. Whatever goes upon two legs is an enemy.' }], width: 300 },
  { runs: [{ t: '2. Whatever goes upon four legs, or has wings, is a freind.' }], width: 366 },
  { runs: [{ t: '3. No animal shall wear clothes.' }], width: 218 },
  { runs: [{ t: '4. No animal shall sleep in a bed.' }], width: 214 },
  { runs: [{ t: '5. No animal shall drink alcohol.' }], width: 222 },
  { runs: [{ t: '6. No animal shall kill any other animal.' }], width: 266 },
  { runs: [{ t: '7. All animals are equal.' }], width: 170 },
]

/**
 * The four letters Boxer traces, as strokes of a hoof in the dust: each
 * [path, x], drawn in a box 26 wide and 30 high from its top left, then laid
 * flat on the ground by the transform in LETTERS_T.
 */
const LETTERS: [string, number][] = [
  ['M0 30L12 0L24 30M5 19H19', 0],
  ['M3 30V0H14C24 0 24 14 14 14H3M14 14C26 14 26 30 14 30H3', 40],
  ['M24 5C18 -2 2 -1 1 15C0 31 18 32 24 25', 80],
  ['M3 30V0H11C27 0 27 30 11 30Z', 120],
]
const LETTERS_T = 'translate(592 296) scale(1.12 0.7)'

/** The sheep lying in the field: [x, y, scale, face]. */
const FLOCK: [number, number, number, 1 | -1][] = [
  [656, 238, 1.25, -1],
  [712, 250, 1.35, -1],
  [764, 234, 1.2, -1],
  [814, 248, 1.3, -1],
]

type Marks = {
  sky: string
  field: string
  dust: string
  shadows: string
  scuffs: string
}

function skyMarks(r: Rng) {
  let d = ''
  for (let y = 14; y < FIELD_TOP - 6; y += 7) {
    const dens = clamp(0.35 + (1 - (y - 14) / 180) * 0.6)
    let x = 340 + between(r, -20, 0)
    while (x < W - 12) {
      const len = between(r, 16, 60)
      if (r() < 0.12 + dens * 0.4)
        d += gouge(x, y + between(r, -1, 1), x + len, y + between(r, -1, 1), 0.35 + dens * 1.1)
      x += len + between(r, 8, 34)
    }
  }
  return d
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = skyMarks(rng(801))

  // Autumn stubble in the field: short strokes, stroked, in rows.
  const f = rng(803)
  let field = ''
  for (let y = FIELD_TOP + 8; y < FENCE - 2; y += 6) {
    let x = 330 + between(f, -10, 0)
    while (x < W - 10) {
      if (f() < 0.45) field += `M${n(x)} ${n(y)}l${n(between(f, -1, 1))} -3`
      x += between(f, 8, 16)
    }
  }

  // The dust of the yard: loose strokes, and the scuffs Boxer's hoof made.
  const g = rng(802)
  let dust = ''
  for (let y = GROUND + 6; y < H - 6; y += 6) {
    let x = 14 + between(g, -20, 0)
    const depth = (y - GROUND) / (H - GROUND)
    while (x < W - 10) {
      const len = between(g, 10, 40)
      // Leave the ground under the letters clear, so they read.
      const clear = x + len > 576 && x < 780 && y > 284 && y < 324
      if (!clear && g() < 0.34 + depth * 0.2)
        dust += gouge(x, y + between(g, -1, 1), x + len, y + between(g, -1, 1), 0.5 + depth * 1)
      x += len + between(g, 10, 36)
    }
  }
  let scuffs = ''
  for (let k = 0; k < 10; k++) {
    const x = between(g, 580, 760)
    const y = between(g, 318, 330)
    scuffs += gouge(x, y, x + between(g, 6, 14), y + between(g, -1, 1), 0.6)
  }

  let shadows = ''
  const pool = (x0: number, x1: number, y: number, rows: number) => {
    for (let i = 0; i < rows; i++) {
      const t = 1 - Math.abs(i - (rows - 1) / 2) / rows
      shadows += gouge(
        x0 + (1 - t) * 10,
        y + i * 3,
        x1 - (1 - t) * 10,
        y + i * 3 + 0.6,
        0.6 + t * 1.6,
      )
    }
  }
  pool(396, 612, 298, 5)

  cached = { sky, field, dust, shadows, scuffs }
  return cached
}

/** Bleating: three short cuts from a sheep's face, in the sheep's frame. */
const BLEAT = 'M31 -12L37 -14M31 -8L38 -8M31 -4L37 -2'

function ReadingAndTheMaxim() {
  const m = marks()
  return (
    <>
      <g className="lc-push" style={timing({ origin: [560, 240], push: 1.03 })}>
        {/* a low autumn sky over the field */}
        <rect x={0} y={0} width={W} height={H} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        <path
          d={`M330 ${FIELD_TOP}Q520 ${FIELD_TOP - 8} 700 ${FIELD_TOP - 2}T${W} ${FIELD_TOP - 6}V${FIELD_TOP + 6}H330Z`}
          fill={INK}
        />
        <path d={m.field} stroke={INK} strokeWidth={1} strokeLinecap="round" />

        {/* the sheep, lying in the field and bleating */}
        {FLOCK.map(([x, y, s, face], i) => (
          <g key={x}>
            <Sheep at={[x, y]} s={s} face={face} />
            <path
              className="lc-fade-in"
              style={timing({ delay: 1 + i * 0.25, dur: 0.5 })}
              transform={`translate(${x} ${y}) scale(${face * s} ${s})`}
              d={BLEAT}
              fill="none"
              stroke={INK}
              strokeWidth={1.2 / s}
              strokeLinecap="round"
            />
          </g>
        ))}

        {/* the fence between the field and the yard */}
        <path
          d={`M340 ${FENCE - 22}H${W}M340 ${FENCE - 8}H${W}`}
          fill="none"
          stroke={PAPER}
          strokeWidth={6}
        />
        <path
          d={`M340 ${FENCE - 22}H${W}M340 ${FENCE - 8}H${W}`}
          fill="none"
          stroke={INK}
          strokeWidth={3.4}
        />
        {[372, 462, 552, 642, 732, 822].map((x) => (
          <rect
            key={x}
            x={x - 3}
            y={FENCE - 30}
            width={6}
            height={32}
            fill={INK}
            stroke={PAPER}
            strokeWidth={1.2}
          />
        ))}

        {/* the yard */}
        <rect x={0} y={FENCE + 2} width={W} height={H - FENCE - 2} fill={PAPER} />
        <path d={m.dust} fill={INK} />

        {/* the end wall: the maxim in the gable, over the Commandments */}
        <EndWall transform={WALL_T} lines={CHAPTER_THREE} sky="day">
          <text
            x={210}
            y={49.5}
            textAnchor="middle"
            fontFamily={SERIF}
            fontWeight={700}
            fontSize={19}
            textLength={290}
            lengthAdjust="spacingAndGlyphs"
            fill={PAPER}
          >
            FOUR LEGS GOOD, TWO LEGS BAD
          </text>
        </EndWall>
        <rect x={0} y={GROUND} width={352} height={3} fill={INK} />
        <path d={m.shadows} fill={INK} />

        {/* Boxer, staring down at the letters with his ears back */}
        <Horse at={[506, 302]} s={0.92} who="boxer" headDown={38} />

        {/* A, B, C, D, traced in the dust with his great hoof */}
        <g transform={LETTERS_T} className="lc-fade-in" style={timing({ delay: 0.6, dur: 1.2 })}>
          {LETTERS.map(([d, x]) => (
            <path
              key={x}
              transform={`translate(${x} 0)`}
              d={d}
              fill="none"
              stroke={RED}
              strokeWidth={5.2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
        </g>
        <path d={m.scuffs} fill={INK} />
      </g>
    </>
  )
}

export const readingAndTheMaxim: LinocutArt = { width: W, height: H, Draw: ReadingAndTheMaxim }
