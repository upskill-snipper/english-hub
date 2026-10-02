import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { OliviasHouse, Street, type OrchardTreeAt } from './olivias-house'
import { Person } from './people'

/**
 * Act 5, Scene 1: "The wind and the rain", the twentieth and last moment in
 * the guide's timeline. The street before Olivia's house (./olivias-house.tsx),
 * emptied. Every detail is from the end of the play in the held edition
 * (src/data/full-texts/twelfth-night.ts, Project Gutenberg #1526):
 *
 * - "[Exeunt.] Clown sings." Everyone else has gone, Orsino promising that
 *   "A solemn combination shall be made Of our dear souls" and Olivia
 *   offering the weddings "Here at my house". So Feste stands alone in the
 *   street, and the house has taken the lovers in: its gate is shut ("'Gainst
 *   knaves and thieves men shut their gate") and two of its upper windows are
 *   lit, printed in the spot colour, the one warm thing in the block.
 * - "With hey, ho, the wind and the rain, ... For the rain it raineth every
 *   day." So it rains, slanting on the wind, the street wet under it. It is
 *   the song's weather: the play gives no other. Each drop is cut once, in
 *   paper with a thin ink edge, so it shows white against the dark sky and as
 *   a dark streak across the lit stone. (It was first cut twice, paper and
 *   ink, from one path shown through a <use> element and a clip; the comics
 *   test allows no href but a literal fragment, which cannot carry the
 *   piece's own id prefix, and a second copy of the path cost 16 KB.)
 * - Feste is the kit's fool, in his hood and motley. He sings with his head
 *   lifted, his back to the shut gate, and holds one open hand out, palm up,
 *   into the rain and towards us: the last stanza turns to the audience, "our
 *   play is done, And we'll strive to please you every day." His mouth is not
 *   cut: the lifted head and the hand carry the song.
 *
 * The rain drifts in on the wind as the plate arrives (lc-drift), the one
 * motion besides the push-in. Seeds: 6401 (the sky), 6402 (the rain).
 */

const W = 860
const H = 340
/** The foot of the house front, where the street begins. */
const FOOT = 258
const FEET = 330
const HOUSE_X = 640
const SCALE = 0.84
/** The orchard over the wall, placed so that no crown stands behind Feste's head. */
const TREES: OrchardTreeAt[] = [
  [26, -150, 38, 32],
  [200, -154, 40, 34],
]

type Marks = { sky: string; rain: string }
let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // A heavy sky: ink, with a few ragged bands of lighter cloud cut across it.
  const sky = gougeField(
    rng(6401),
    { x0: 0, x1: W, y0: 4, y1: FOOT },
    (x, y) => clamp(0.12 + 0.2 * Math.sin(x / 90 + y / 40) + (y / FOOT) * 0.18),
    { spacing: 6.4, len: [30, 120], gap: [8, 30], max: 2.6 },
  )
  // The rain: long thin cuts slanting down to the right on the wind, a little
  // wider past the right edge so the drift never shows a dry strip.
  const r = rng(6402)
  let rain = ''
  for (let i = 0; i < 290; i++) {
    const x = between(r, -90, W + 30)
    const y = between(r, -10, H)
    const L = between(r, 16, 36)
    rain += gouge(x, y, x + L * 0.42, y + L, between(r, 1.2, 1.65))
  }
  cached = { sky, rain }
  return cached
}

function TheWindAndTheRain({ uid }: ArtProps) {
  void uid
  const m = marks()
  return (
    <>
      <g className="lc-push" style={timing({ origin: [330, 220], push: 1.03 })}>
        <rect width={W} height={H} fill={INK} />
        <path d={m.sky} fill={PAPER} />
        <OliviasHouse
          at={[HOUSE_X, FOOT]}
          scale={SCALE}
          gate="shut"
          lit={[-150, 0]}
          weather="rain"
          wall="left"
          trees={TREES}
        />
        <Street top={FOOT + 9} bottom={H} width={W} vx={HOUSE_X} wet />
        <path d={`M0 ${FOOT + 9}H${W}`} stroke={INK} strokeWidth={2} />

        {/* the rain: white on the dark sky, a dark streak across the lit stone */}
        <g className="lc-drift">
          <path d={m.rain} fill={PAPER} stroke={INK} strokeWidth={0.6} />
        </g>

        {/* Feste, alone, singing */}
        <Person
          at={[300, FEET]}
          scale={1.42}
          flip
          pose={{
            look: 'feste',
            head: { rot: -20 },
            legs: {
              far: [
                [-3, -70],
                [-7, -36],
                [-11, -3],
              ],
              near: [
                [3, -70],
                [9, -36],
                [13, -3],
              ],
            },
            far: {
              pts: [
                [-5, -130],
                [-20, -112],
                [-36, -104],
              ],
              hand: 'open',
              deg: 168,
              thumb: 1,
            },
            near: {
              pts: [
                [4, -130],
                [19, -116],
                [37, -121],
              ],
              hand: 'open',
              deg: -22,
              thumb: -1,
            },
          }}
        />
      </g>
    </>
  )
}

export const theWindAndTheRain: LinocutArt = { width: W, height: H, Draw: TheWindAndTheRain }
