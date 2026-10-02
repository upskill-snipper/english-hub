import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  H,
  W,
  archway,
  battlemented,
  castShadow,
  cypress,
  daySky,
  gravel,
  hedge,
  stoneCourses,
  voussoirs,
} from './garden'
import { HandkerchiefHanging } from './handkerchief'
import { Person } from './people'

/**
 * Act 3, Scene 3: "The temptation begins", the seventh moment in the guide's
 * timeline: its first minute, when the trap is set. Every detail is from the
 * scene in the held edition (src/data/full-texts/othello.ts, Project
 * Gutenberg #1531):
 *
 * - "Cyprus. The Garden of the Castle." So the garden of ./garden.tsx, from
 *   the castle end: the battlemented wall with the garden gate in it, the
 *   clipped hedge and the cypresses, under the bright sky of the middle of
 *   the day (Desdemona calls Othello in to his dinner later in the scene).
 * - "Enter Othello and Iago." EMILIA: "Madam, here comes my lord." CASSIO:
 *   "Madam, I'll take my leave. ... Madam, not now. I am very ill at ease"
 *   "[Exit Cassio.]" So Cassio, bearded as the kit cuts him, is slipping
 *   away out of the garden by the gate, his head down.
 * - IAGO: "Ha, I like not that." OTHELLO: "What dost thou say?" ... "Was not
 *   that Cassio parted from my wife?" IAGO: "Cassio, my lord? No, sure, I
 *   cannot think it, That he would steal away so guilty-like, Seeing you
 *   coming." So Othello stands watching Cassio go, and Iago leans in close
 *   behind him, speaking low at his ear, a hand on his shoulder: the confidant's
 *   closeness the scene runs on ("My lord, you know I love you").
 * - DESDEMONA: "How now, my lord? I have been talking with a suitor here".
 *   So she has turned to her husband with an open hand held out, Emilia a
 *   step behind her.
 * - EMILIA, later in the scene: "she so loves the token ... That she reserves
 *   it evermore about her To kiss and talk to", and before the scene is out
 *   Desdemona offers it to bind Othello's head. So the handkerchief of
 *   ./handkerchief.tsx is in her hand here, small, its strawberries the one
 *   spot colour in the print: the trifle the next two panels turn on.
 *
 * The people are the kit's (./people.tsx), Othello's face in ink and the
 * Venetians' lit. Nothing is taken from a film or stage production.
 *
 * Seeds: 701 (sky), 702 (wall), 703 and 704 (cypresses), 705 (hedge), 706
 * (gravel), 707 to 711 (shadows), 712 (the court beyond the gate).
 */

const GROUND = 262
const WALL = { x1: 214, top: 66 }
const GATE = { x0: 96, x1: 150, spring: 198 }

type Marks = {
  sky: string
  wall: { cuts: string; joints: string }
  trees: { body: string; cuts: string }[]
  hedge: { body: string; cuts: string }
  ground: string
  shadows: string
  court: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = daySky(701, { x0: WALL.x1, x1: W, y0: 0, y1: 240 }, (_x, y) => clamp(0.85 - y / 220))
  const wall = stoneCourses(702, { x0: 0, x1: WALL.x1, y0: WALL.top - 16, y1: GROUND }, (x, y) =>
    clamp(0.55 + (x / WALL.x1) * 0.3 - y / 900),
  )
  const trees = [cypress(703, 256, GROUND, 206, 38, 1), cypress(704, 514, 250, 150, 28, 1)]
  const hdg = hedge(705, WALL.x1 - 4, W + 10, 232, GROUND)
  const ground = gravel(706, { x0: 0, x1: W, y0: GROUND, y1: H })
  const shadows =
    castShadow(707, 344, 300, 28) +
    castShadow(708, 440, 306, 28) +
    castShadow(709, 588, 332, 44) +
    castShadow(710, 662, 336, 36) +
    castShadow(711, 116, 263, 14, 2)
  const r = rng(712)
  let court = ''
  for (let y = GATE.spring - 12; y < GROUND - 22; y += 7)
    court += gouge(GATE.x0, y + between(r, -0.6, 0.6), GATE.x1, y, 0.5)
  cached = { sky, wall, trees, hedge: hdg, ground, shadows, court }
  return cached
}

function TheTemptationBegins({ uid }: ArtProps) {
  const m = marks()
  void uid
  const gateD = archway(GATE.x0, GATE.x1, GATE.spring, GROUND)
  return (
    <g className="lc-push" style={timing({ origin: [600, 220], push: 1.03 })}>
      {/* the bright sky of the middle of the day */}
      <rect x={0} y={0} width={W} height={GROUND} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      {/* the castle wall and the garden gate, with the sunlit court beyond */}
      <path d={battlemented(-10, WALL.x1, WALL.top, GROUND, 20, 13, 14)} fill={INK} />
      <path d={m.wall.cuts} fill={PAPER} />
      <path d={m.wall.joints} fill={PAPER} />
      <path d={gateD} fill={PAPER} stroke={INK} strokeWidth={5} />
      <path d={m.court} fill={INK} />
      <path
        d={voussoirs(GATE.x0 - 3, GATE.x1 + 3, GATE.spring, 12, 7)}
        stroke={PAPER}
        strokeWidth={LINE.fine}
      />
      {/* the cypresses and the clipped hedge */}
      {m.trees.map((t, i) => (
        <g key={i}>
          <path d={t.body} fill={INK} />
          <path d={t.cuts} fill={PAPER} />
        </g>
      ))}
      <path d={m.hedge.body} fill={INK} />
      <path d={m.hedge.cuts} fill={PAPER} />
      {/* the gravel walk */}
      <rect x={0} y={GROUND} width={W} height={H - GROUND} fill={PAPER} />
      <path d={m.ground} fill={INK} />
      <path d={m.shadows} fill={INK} />

      {/* Cassio, slipping away through the gate: "so guilty-like" */}
      <Person
        at={[124, GROUND]}
        scale={0.62}
        flip
        pose={{
          look: 'cassio',
          eye: 'down',
          head: { rot: 12 },
          legs: {
            far: [
              [-3, -70],
              [-12, -38],
              [-20, -3],
            ],
            near: [
              [3, -70],
              [12, -36],
              [18, -3],
            ],
          },
          far: {
            pts: [
              [-4, -130],
              [-14, -108],
              [-18, -86],
            ],
          },
          near: {
            pts: [
              [5, -128],
              [12, -104],
              [22, -88],
            ],
          },
          cloak: 6,
        }}
      />
      {/* Emilia, and Desdemona turning to her husband: "How now, my lord?" */}
      <Person
        at={[350, 298]}
        pose={{
          look: 'emilia',
          far: {
            pts: [
              [-4, -126],
              [-2, -104],
              [8, -98],
            ],
          },
          near: {
            pts: [
              [4, -124],
              [8, -104],
              [14, -98],
            ],
          },
        }}
      />
      {/* "she reserves it evermore about her": the handkerchief in her hand */}
      <Person
        at={[446, 304]}
        pose={{
          look: 'desdemona',
          head: { rot: -5 },
          far: {
            pts: [
              [-4, -126],
              [-2, -104],
              [10, -94],
            ],
          },
          near: {
            pts: [
              [4, -124],
              [20, -110],
              [38, -114],
            ],
            hand: 'open',
            deg: -12,
          },
        }}
      >
        <HandkerchiefHanging at={[15, -91]} len={34} swing={3} s={0.7} />
      </Person>
      {/* Othello, watching Cassio go */}
      <Person
        at={[594, 330]}
        scale={1.3}
        flip
        pose={{
          look: 'othello',
          head: { rot: -3 },
          far: {
            pts: [
              [-4, -130],
              [-8, -106],
              [-6, -84],
            ],
          },
          near: {
            pts: [
              [5, -128],
              [8, -104],
              [16, -86],
            ],
          },
        }}
      />
      {/* Iago at his ear, a hand on his shoulder: "Ha, I like not that." */}
      <g transform="rotate(-11 668 334)">
        <Person
          at={[668, 334]}
          scale={1.24}
          flip
          pose={{
            look: 'iago',
            mouth: 'open',
            head: { rot: 14 },
            far: {
              pts: [
                [-4, -130],
                [-2, -104],
                [6, -92],
              ],
            },
            near: {
              pts: [
                [5, -128],
                [18, -110],
                [24, -134],
              ],
              hand: 'open',
              deg: -16,
              spread: 14,
            },
          }}
        />
      </g>
    </g>
  )
}

export const theTemptationBegins: LinocutArt = { width: W, height: H, Draw: TheTemptationBegins }
