import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { EndWall, commandments } from './end-wall'
import { Benjamin, Horse, Muriel } from './people'

/**
 * Chapter 8: "Without cause", the twenty-third moment in the guide's
 * timeline. Every detail is from the text (the held edition,
 * src/data/full-texts/animal-farm.ts):
 *
 * - "Clover asked Benjamin to read her the Sixth Commandment, and when
 *   Benjamin, as usual, said that he refused to meddle in such matters, she
 *   fetched Muriel. Muriel read the Commandment for her." So the three of them
 *   are at the end wall of the big barn: Muriel, the white goat, nearest the
 *   wall with her face up to the letters; Clover behind her, her head raised
 *   to a wall she cannot read for herself (in Chapter 3 she "learnt the whole
 *   alphabet, but could not put words together"); and Benjamin with his back
 *   turned on the wall altogether.
 * - "It ran: "No animal shall kill any other animal WITHOUT CAUSE."
 *   Somehow or other, the last two words had slipped out of the animals'
 *   memory." So the wall reads as it does in Chapter VIII (./end-wall.tsx),
 *   with the maxim of Chapter III in the gable over it, and the two words the scene is about are the one thing in the spot
 *   colour. The paint is white; the red is the print pointing at them.
 * - "A few days later, when the terror caused by the executions had died
 *   down". Nothing of the executions is drawn: the killings are in the words
 *   on the wall, not in the picture.
 *
 * The text gives no time of day, so it is an ordinary day in the farmyard.
 * The three animals are the kit's (./people.tsx). Nothing is taken from a
 * film, a cartoon or a stage production. Seed 2323.
 */

const W = 860
const H = 340
/** The foot of the barn's end wall and the ground the animals stand on. */
const GROUND = 318

type Marks = { sky: string; far: string; yard: string; shadows: string }
let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(2323)
  // A pale day sky, lightly scored in ink.
  let sky = ''
  for (let y = 10; y < 226; y += 7) {
    let x = between(r, -20, 0)
    while (x < 430) {
      const len = between(r, 30, 110)
      if (r() < 0.36 - y / 1000)
        sky += gouge(x, y, x + len, y + between(r, -0.5, 0.5), 0.5 + (226 - y) / 260)
      x += len + between(r, 20, 60)
    }
  }
  // The far hedge and the fields beyond the yard, low on the left.
  let far = 'M-4 244'
  for (let x = 0; x <= 430; x += 8)
    far += `L${n(x)} ${n(232 + 4 * Math.sin(x / 19) + 3 * Math.sin(x / 7 + 1))}`
  far += 'L430 252L-4 252Z'
  // The trodden yard: pale, scored with ruts.
  const yard = gougeField(
    r,
    { x0: 0, x1: W, y0: 252, y1: H },
    (x, y) => clamp(0.16 + (y - 252) / 380),
    { spacing: 5.5, len: [14, 60] },
  )
  // Short shadows under the three of them: the sun is high.
  let shadows = ''
  for (const [x0, x1, y] of [
    [40, 190, 320],
    [196, 420, 321],
    [346, 450, 326],
  ] as [number, number, number][]) {
    for (let k = 0; k < 3; k++)
      shadows += wedge(x0 + k * 6, y + k * 3, x1 - k * 6, y + k * 3, 2.6 - k * 0.6, 2.6 - k * 0.6)
  }
  cached = { sky, far, yard, shadows }
  return cached
}

function WithoutCause({ uid }: ArtProps) {
  const m = marks()
  void uid
  return (
    <g className="lc-push" style={timing({ origin: [620, 200], push: 1.03 })}>
      {/* a pale day over the farmyard */}
      <rect x={0} y={0} width={W} height={H} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      <path d={m.far} fill={INK} />
      <path d={m.yard} fill={INK} />
      <rect x={0} y={250} width={430} height={2.4} fill={INK} />

      {/* the end wall of the big barn, "WITHOUT CAUSE" in the spot colour */}
      <EndWall
        transform={`translate(424 ${GROUND - 300})`}
        lines={commandments({ withoutCause: 'red' })}
        sky="day"
        maxim
      />

      <path d={m.shadows} fill={INK} />
      {/* Benjamin, who "refused to meddle in such matters", turned away */}
      <Benjamin at={[122, 318]} s={1.2} face={-1} />
      {/* Clover, her head lowered to listen */}
      <Horse at={[300, 318]} s={1.2} who="clover" headDown={-8} uid={uid} />
      {/* Muriel, the white goat, reading the wall to her */}
      <Muriel at={[388, 324]} s={1.2} />
    </g>
  )
}

export const withoutCause: LinocutArt = { width: W, height: H, Draw: WithoutCause }
