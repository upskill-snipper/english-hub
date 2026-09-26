import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER, RED, SERIF } from '@/components/comics/linocut/palette'
import { between, clamp, deg, gougeField, n, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { EndWall, WALL } from './end-wall'
import { Benjamin, Horse } from './people'

/**
 * Chapter 10: "The single Commandment", the thirty-second moment in the
 * guide's timeline. Every detail is from the text (the held edition,
 * src/data/full-texts/animal-farm.ts):
 *
 * - "Benjamin felt a nose nuzzling at his shoulder. He looked round. It was
 *   Clover. Her old eyes looked dimmer than ever. Without saying anything,
 *   she tugged gently at his mane and led him round to the end of the big
 *   barn, where the Seven Commandments were written. For a minute or two they
 *   stood gazing at the tatted wall with its white lettering." ("tatted" is
 *   the edition's misprint for the "tarred wall" of Chapter II.) So the two
 *   of them stand before the end wall of the big barn, the same tarred wall
 *   the panels of Chapter 8 draw (./end-wall.tsx): Clover with her dim old
 *   head raised to the letters, Benjamin, who can read, facing the wall
 *   beside her. Nobody else is there.
 * - It is the same evening: the pigs have just "marched back into the
 *   farmhouse" after "a pleasant evening when the animals had finished
 *   work". So the sun is low beyond the corner of the barn, its level rays
 *   cut across the sky, and the two animals throw long shadows.
 * - "There was nothing there now except a single Commandment. It ran: ALL
 *   ANIMALS ARE EQUAL / BUT SOME ANIMALS ARE MORE EQUAL THAN OTHERS". So the
 *   wall carries those words and nothing else, in the text's own capitals
 *   and on its own two lines, in great white letters. The panel is drawn
 *   close enough that the old heading, THE SEVEN COMMANDMENTS, would sit
 *   above the top of the picture: nothing of it shows. The words the moment
 *   is about, the second line, are the one thing in the spot colour, cut
 *   round in paper as the Chapter 8 panels cut "WITHOUT CAUSE". The paint is
 *   white; the red is the print pointing at the words. With motion, that
 *   line comes up a moment after the first, as Benjamin reads it out.
 *
 * The quotation is Clover's question, since the Commandment itself is
 * printed on the wall and runs across two of the edition's paragraphs.
 * Clover (hatched, head raised) and Benjamin (grey about the muzzle) are the
 * kit's (./people.tsx). Nothing is taken from a film, a cartoon or a stage
 * production. Seeds: 3201 (the sky), 3202 (the ground).
 */

const W = 860
const H = 340
/** The foot of the wall and the ground the two stand on, as in "Without cause". */
const GROUND = 318
/** The wall is drawn nearer than in Chapter 8, so its letters read at phone width. */
const WALL_S = 1.55
const WALL_X = 200
/** The low sun, beyond the corner of the barn. */
const SUN: [number, number] = [74, 236]

type Marks = { sky: string; far: string; ground: string; shadows: string }
let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(3201)
  // The evening sky: paper, the sun's level rays cut across it in ink.
  let sky = ''
  for (let a = 180; a < 360; a += between(r, 6, 9)) {
    const ang = deg(a)
    let rad = between(r, 34, 50)
    while (rad < 320) {
      const len = between(r, 30, 70)
      const w0 = 0.4 + rad / 220
      sky += wedge(
        SUN[0] + Math.cos(ang) * rad,
        SUN[1] + Math.sin(ang) * rad,
        SUN[0] + Math.cos(ang) * (rad + len),
        SUN[1] + Math.sin(ang) * (rad + len),
        w0,
        w0 + len / 150,
      )
      rad += len + between(r, 6, 16)
    }
  }
  // The far hedge, low under the sun.
  let far = `M-4 ${GROUND}`
  for (let x = 0; x <= WALL_X; x += 8)
    far += `L${n(x)} ${n(252 + 4 * Math.sin(x / 17) + 3 * Math.sin(x / 7 + 2))}`
  far += `L${WALL_X} ${GROUND}Z`
  // The yard in the level light, and the long shadows thrown to the right.
  const g = rng(3202)
  const ground = gougeField(
    g,
    { x0: 0, x1: W, y0: GROUND + 2, y1: H },
    (x) => clamp(0.35 - x / 3000),
    { spacing: 5, len: [16, 50] },
  )
  let shadows = ''
  for (const [x0, x1, y] of [
    [250, 520, 326],
    [420, 640, 332],
  ] as [number, number, number][])
    for (let k = 0; k < 3; k++)
      shadows += wedge(x0 + k * 5, y + k * 2.6, x1 - k * 30, y + k * 2.6, 3 - k * 0.6, 0.6)
  cached = { sky, far, ground, shadows }
  return cached
}

function SingleCommandment({ uid }: ArtProps) {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [520, 110], push: 1.03 })}>
      {/* the evening beyond the corner of the barn */}
      <rect x={0} y={0} width={W} height={H} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      <circle cx={SUN[0]} cy={SUN[1]} r={22} fill={PAPER} stroke={INK} strokeWidth={2} />
      <path d={m.far} fill={INK} />
      <rect x={0} y={GROUND} width={W} height={H - GROUND} fill={PAPER} />
      <path d={m.ground} fill={INK} />

      {/* the end wall of the big barn, and the single Commandment on it */}
      <EndWall
        transform={`translate(${WALL_X} ${GROUND}) scale(${WALL_S}) translate(0 ${-WALL.FOOT})`}
        lines={[]}
        sky="day"
      >
        <g fill={PAPER} fontFamily={SERIF} fontWeight={700} textAnchor="middle">
          <text x={214} y={140} fontSize={20} textLength={214} lengthAdjust="spacingAndGlyphs">
            ALL ANIMALS ARE EQUAL
          </text>
          <text
            className="lc-fade-in"
            style={timing({ delay: 1.2, dur: 1.2 })}
            x={214}
            y={168}
            fontSize={20}
            textLength={384}
            lengthAdjust="spacingAndGlyphs"
            fill={RED}
            stroke={PAPER}
            strokeWidth={1.1}
            paintOrder="stroke"
          >
            BUT SOME ANIMALS ARE MORE EQUAL THAN OTHERS
          </text>
        </g>
      </EndWall>

      <path d={m.shadows} fill={INK} />
      {/* Clover, her old head raised to the wall, and Benjamin reading it to her */}
      <Horse at={[262, 324]} s={1.1} who="clover" headDown={-12} uid={uid} />
      <Benjamin at={[436, 332]} s={1.1} />
    </g>
  )
}

export const theSingleCommandment: LinocutArt = { width: W, height: H, Draw: SingleCommandment }
