import type { ReactNode } from 'react'

import { INK, LINE, PAPER, RED, SERIF } from '@/components/comics/linocut/palette'
import { between, gouge, n, rng } from '@/components/comics/linocut/carve'

/**
 * The end wall of the big barn, where the Seven Commandments are painted:
 * shared by the panels of "Without cause" (Chapter 8, by day) and "The whisky"
 * (Chapter 8, by moonlight), and free for any other panel that needs the wall.
 *
 * FROM THE TEXT (the held edition, src/data/full-texts/animal-farm.ts):
 * - "The Commandments were written on the tarred wall in great white letters
 *   that could be read thirty yards away" (Chapter II). So the wall is solid
 *   ink, which is what a linocut does best, and the letters are cut in paper.
 * - The words are the held edition's, line for line, as the wall stands in
 *   Chapter VIII: the Fourth reads "No animal shall sleep in a bed with
 *   sheets" (Chapter VI), and the Sixth and the Fifth gain "WITHOUT CAUSE" and
 *   "TO EXCESS" in the text's own capitals. The Second keeps the text's own
 *   misspelling: "except that "friend" was written "freind" ... the spelling
 *   was correct all the way through" (Chapter II). It is Snowball's, not ours.
 * - "FOUR LEGS GOOD, TWO LEGS BAD, was inscribed on the end wall of the
 *   barn, above the Seven Commandments and in bigger letters" (Chapter III),
 *   and it stays there until Chapter X. So `maxim` cuts it in the gable,
 *   the biggest words on the wall, where "Reading and the maxim" put it.
 * - The words a panel is about may be cut in the spot colour (`red`). The
 *   paint on the wall is white; the red is the print pointing, not the paint.
 *
 * Drawn in its own frame: the wall 420 wide from x 0, its foot at y 300, the
 * eaves at y 58 and the gable's peak at y -46 (above most panels, so it is
 * cropped). Place it with a transform. Seed 2308 for the grain of the boards.
 */

export const WALL = { W: 420, FOOT: 300, EAVES: 58 } as const

/** One line of the wall: runs of text, each optionally cut in red. */
export type WallLine = { runs: { t: string; red?: boolean }[]; width: number }

const plain = (t: string, width: number): WallLine => ({ runs: [{ t }], width })

/** The Commandments as the wall reads in Chapter VIII, before and after the Fifth is changed. */
export function commandments(opts: {
  withoutCause?: 'plain' | 'red'
  toExcess?: false | 'plain' | 'red'
}): WallLine[] {
  const cause = opts.withoutCause ?? 'plain'
  const excess = opts.toExcess ?? false
  return [
    plain('1. Whatever goes upon two legs is an enemy.', 300),
    plain('2. Whatever goes upon four legs, or has wings, is a freind.', 366),
    plain('3. No animal shall wear clothes.', 218),
    plain('4. No animal shall sleep in a bed with sheets.', 290),
    excess
      ? {
          runs: [
            { t: '5. No animal shall drink alcohol ' },
            { t: 'TO EXCESS.', red: excess === 'red' },
          ],
          width: 316,
        }
      : plain('5. No animal shall drink alcohol.', 222),
    {
      runs: [
        { t: '6. No animal shall kill any other animal ' },
        { t: 'WITHOUT CAUSE.', red: cause === 'red' },
      ],
      width: 372,
    },
    plain('7. All animals are equal.', 170),
  ]
}

type Marks = { boards: string; plinth: string; gable: string }
let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(2308)
  // Tarred weatherboards: the joints run across the wall as long, sparse,
  // broken cuts, so the grain shows but never competes with the letters.
  const joints = (y: number, x0: number, x1: number, w: number) => {
    let d = ''
    let x = x0 + between(r, 0, 16)
    while (x < x1 - 8) {
      const len = Math.min(between(r, 30, 130), x1 - x)
      if (r() < 0.6) d += gouge(x, y + between(r, -0.4, 0.4), x + len, y + between(r, -0.4, 0.4), w)
      x += len + between(r, 10, 50)
    }
    return d
  }
  let boards = ''
  for (let y = WALL.EAVES + 12; y < WALL.FOOT - 26; y += 15) boards += joints(y, 0, WALL.W, 0.45)
  // The gable's boards run up to the roof line.
  let gable = ''
  for (let y = -30; y < 52; y += 15) {
    const half = ((y + 46) / 104) * 210 - 12
    if (half > 20) gable += joints(y, 210 - half, 210 + half, 0.4)
  }
  // A course of pale stones under the tarred boards.
  let plinth = ''
  let x = 0
  let row = 0
  for (const y of [WALL.FOOT - 20, WALL.FOOT - 10]) {
    x = row++ % 2 ? -12 : 0
    while (x < WALL.W) {
      const w = between(r, 18, 30)
      plinth += `M${n(x + 1)} ${n(y + 1)}h${n(w - 2)}v8h${n(-(w - 2))}Z`
      x += w
    }
  }
  cached = { boards, plinth, gable }
  return cached
}

/**
 * The wall and its lettering. `sky` is the colour behind the gable, so the
 * barge-boards are cut to stand out against it: PAPER by day, INK at night.
 * `maxim` cuts FOUR LEGS GOOD, TWO LEGS BAD in the gable, for the wall from
 * Chapter III on (off by default, so a panel of Chapter II has no maxim).
 */
export function EndWall({
  transform,
  lines,
  sky,
  maxim = false,
  children,
}: {
  transform?: string
  lines: WallLine[]
  sky: 'day' | 'night'
  maxim?: boolean
  children?: ReactNode
}) {
  const m = marks()
  const edge = sky === 'day' ? INK : PAPER
  return (
    <g transform={transform}>
      {/* the gable and the wall, one tarred shape */}
      <path d={`M-6 ${WALL.FOOT}V56L210 -46L426 56V${WALL.FOOT}Z`} fill={INK} />
      <path d={m.gable} fill={PAPER} />
      {/* the barge-boards along the roof line, and the eaves */}
      <path
        d="M-16 62L210 -44L436 62"
        fill="none"
        stroke={edge}
        strokeWidth={sky === 'day' ? 9 : 3}
        strokeLinejoin="round"
      />
      <path d="M-14 58L210 -48L434 58" fill="none" stroke={PAPER} strokeWidth={1.4} />
      {/* the hay door high in the gable */}
      <rect x={188} y={-6} width={44} height={40} fill="none" stroke={PAPER} strokeWidth={1.6} />
      <path d="M210 -6V34M190 -4L230 32" stroke={PAPER} strokeWidth={LINE.fine} />
      <rect x={-6} y={WALL.EAVES - 2} width={432} height={4} fill={PAPER} />
      <path d={m.boards} fill={PAPER} />
      <rect x={-6} y={WALL.FOOT - 22} width={432} height={22} fill={INK} />
      <path d={m.plinth} fill={PAPER} />
      {/* the Seven Commandments, in great white letters */}
      <g fill={PAPER} fontFamily={SERIF} fontWeight={700}>
        {maxim && (
          // the maxim in the gable, as "Reading and the maxim" first cut it
          <text
            x={210}
            y={49.5}
            textAnchor="middle"
            fontSize={19}
            textLength={290}
            lengthAdjust="spacingAndGlyphs"
          >
            FOUR LEGS GOOD, TWO LEGS BAD
          </text>
        )}
        <text
          x={210}
          y={88}
          fontSize={17}
          textAnchor="middle"
          textLength={262}
          lengthAdjust="spacingAndGlyphs"
        >
          THE SEVEN COMMANDMENTS
        </text>
        {lines.map((l, i) => (
          <text
            key={i}
            x={28}
            y={118 + i * 22}
            fontSize={14.2}
            textLength={l.width}
            lengthAdjust="spacingAndGlyphs"
          >
            {l.runs.map((run, k) =>
              run.red ? (
                // Cut round with a paper edge, so the red holds its own on
                // the black wall at phone width.
                <tspan key={k} fill={RED} stroke={PAPER} strokeWidth={1.6} paintOrder="stroke">
                  {run.t}
                </tspan>
              ) : (
                run.t
              ),
            )}
          </text>
        ))}
      </g>
      {children}
    </g>
  )
}
