import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rays, rng } from '@/components/comics/linocut/carve'
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
import { HandkerchiefFallen } from './handkerchief'
import { Person } from './people'

/**
 * Act 3, Scene 3: "The handkerchief is dropped", the eighth moment in the
 * guide's timeline: the moment the husband and wife go in and leave it
 * behind. Every detail is from the scene in the held edition
 * (src/data/full-texts/othello.ts, Project Gutenberg #1531):
 *
 * - "Cyprus. The Garden of the Castle." The garden of ./garden.tsx again,
 *   from the walk by the castle's door, in the same bright day.
 * - OTHELLO: "I have a pain upon my forehead here." DESDEMONA: "Let me but
 *   bind it hard, within this hour It will be well." OTHELLO: "Your napkin is
 *   too little; [He puts the handkerchief from him, and she drops it.] Let it
 *   alone. Come, I'll go in with you." DESDEMONA: "I am very sorry that you
 *   are not well." "[Exeunt Othello and Desdemona.]" So the two are going in
 *   at the castle door: Othello with his head bowed, Desdemona close behind
 *   him with a hand on his arm. Neither looks back.
 * - The handkerchief of ./handkerchief.tsx lies on the walk where it fell,
 *   in the shade of a cypress, so the white linen is printed on the darkest
 *   ground in the picture with its strawberries in the spot colour: "a
 *   handkerchief Spotted with strawberries" (Iago, later in the scene).
 * - EMILIA, who stays: "I am glad I have found this napkin; This was her first
 *   remembrance from the Moor. My wayward husband hath a hundred times Woo'd
 *   me to steal it." So Emilia, on the right, has seen it, and looks down at
 *   it with a hand reaching towards it. Iago, who comes in after she has
 *   picked it up, is not here yet: the quotation tells where it will go.
 *
 * Othello's hand to his aching head was tried and left out (2 October 2026):
 * at panel size an arm raised across the head hid his face, or read as a
 * man scratching the back of his head. His bowed head and Desdemona's hand
 * on his arm carry it. The people are the kit's (./people.tsx), Othello's
 * face in ink and the Venetians' lit.
 *
 * Seeds: 801 (sky), 802 (wall), 803 and 804 (cypresses), 805 (hedge), 806
 * (gravel), 807 (the specks in the shade), 808 to 810 (shadows), 811 (the
 * hall inside the door), 812 (the glint round the cloth), 813 (the edge of
 * the shade).
 */

const GROUND = 268
const WALL = { x1: 300, top: 60 }
const DOOR = { x0: 138, x1: 232, spring: 152 }
const CLOTH: [[number, number], [number, number], [number, number], [number, number]] = [
  [414, 318],
  [488, 314],
  [490, 297],
  [420, 299],
]
/** The line the cypress's shade falls along, from the foot of the tree. */
const SHADE_AXIS: [[number, number], [number, number]] = [
  [358, 270],
  [548, 334],
]

type Marks = {
  sky: string
  wall: { cuts: string; joints: string }
  trees: { body: string; cuts: string }[]
  hedge: { body: string; cuts: string }
  ground: string
  shade: string
  shadeCuts: string
  shadows: string
  hall: string
  glint: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = daySky(801, { x0: WALL.x1, x1: W, y0: 0, y1: 240 }, (_x, y) => clamp(0.85 - y / 220))
  const wall = stoneCourses(802, { x0: 0, x1: WALL.x1, y0: WALL.top - 16, y1: GROUND }, (x, y) =>
    clamp(0.5 + (x / WALL.x1) * 0.3 - y / 900),
  )
  const trees = [cypress(803, 356, 262, 214, 40, 1), cypress(804, 790, 258, 170, 32, 1)]
  const hdg = hedge(805, WALL.x1 - 4, W + 10, 234, GROUND)
  const ground = gravel(806, { x0: 0, x1: W, y0: GROUND, y1: H })
  // The sun is high on the left, so the cypress's shade falls down and to the
  // right across the walk: a long, narrow shape along SHADE_AXIS, toothed
  // along its edges as the sprays of the tree are. The cloth lies in it, so
  // the white linen is printed against the darkest ground in the picture.
  const sp = rng(813)
  const [[ax, ay], [bx, by]] = SHADE_AXIS
  const edge = (side: 1 | -1) => {
    const out: string[] = []
    for (let i = 0; i <= 18; i++) {
      const t = side === 1 ? i / 18 : 1 - i / 18
      // Narrow at the foot of the tree, widest past the middle, rounded at the tip.
      const half = 3 + Math.pow(Math.sin(Math.PI * Math.min(1, t * 0.98)), 0.7) * 24
      const x = ax + (bx - ax) * t + between(sp, -1.4, 1.4)
      const y =
        ay + (by - ay) * t + side * half * (side === 1 ? 0.62 : 0.9) + between(sp, -1.4, 1.4)
      out.push(`${n(x)} ${n(y)}`)
    }
    return out
  }
  const shade = `M${[...edge(-1).reverse(), ...edge(1)].join('L')}Z`
  // Specks of gravel catching what light gets through the tree.
  const sr = rng(807)
  let shadeCuts = ''
  for (let y = ay; y < by + 20; y += 4.2) {
    let x = ax + between(sr, 0, 12)
    while (x < bx) {
      const t = (x - ax) / (bx - ax)
      const off = (y - (ay + (by - ay) * t)) / (3 + Math.pow(Math.sin(Math.PI * t), 0.7) * 24)
      const onCloth = x > 410 && x < 496 && y > 294 && y < 322
      if (!onCloth && t > 0.12 && t < 0.92 && off > -0.7 && off < 0.5 && sr() < 0.42)
        shadeCuts += gouge(x, y, x + between(sr, 2, 5), y + between(sr, -0.6, 0.6), 0.45)
      x += between(sr, 8, 16)
    }
  }
  const shadows =
    castShadow(808, 196, 288, 30) + castShadow(809, 270, 294, 24) + castShadow(810, 566, 336, 36)
  const hr = rng(811)
  // The hall inside the door, in half light: dimmer than the garden but well
  // lit from its windows, so the two figures going in are dark against it and
  // not lost in it.
  const hall = gougeField(
    hr,
    { x0: DOOR.x0, x1: DOOR.x1, y0: DOOR.spring - 50, y1: GROUND },
    (x, y) => clamp(0.56 + (y - DOOR.spring) / 600 - Math.abs(x - (DOOR.x0 + DOOR.x1) / 2) / 400),
    { spacing: 5, len: [8, 30], gap: [4, 10], max: 2.6 },
  )
  const glint = rays(rng(812), 452, 307, { from: 30, to: 50, every: 20, width: 1.1 })
  cached = { sky, wall, trees, hedge: hdg, ground, shade, shadeCuts, shadows, hall, glint }
  return cached
}

function TheHandkerchiefIsDropped({ uid }: ArtProps) {
  const m = marks()
  const doorD = archway(DOOR.x0, DOOR.x1, DOOR.spring, GROUND)
  const doorClip = `${uid}-door`
  return (
    <>
      <defs>
        <clipPath id={doorClip}>
          <path d={doorD} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [440, 240], push: 1.03 })}>
        <rect x={0} y={0} width={W} height={GROUND} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        {/* the castle wall, and the door into the castle */}
        <path d={battlemented(-10, WALL.x1, WALL.top, GROUND, 20, 13, 14)} fill={INK} />
        <path d={m.wall.cuts} fill={PAPER} />
        <path d={m.wall.joints} fill={PAPER} />
        <path d={doorD} fill={INK} stroke={PAPER} strokeWidth={LINE.bold} />
        <g clipPath={`url(#${doorClip})`}>
          <path d={m.hall} fill={PAPER} />
        </g>
        <path
          d={voussoirs(DOOR.x0 - 4, DOOR.x1 + 4, DOOR.spring, 14, 9)}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        {/* the cypresses and the hedge */}
        {m.trees.map((t, i) => (
          <g key={i}>
            <path d={t.body} fill={INK} />
            <path d={t.cuts} fill={PAPER} />
          </g>
        ))}
        <path d={m.hedge.body} fill={INK} />
        <path d={m.hedge.cuts} fill={PAPER} />
        {/* the gravel walk, and the shade across it */}
        <rect x={0} y={GROUND} width={W} height={H - GROUND} fill={PAPER} />
        <path d={m.ground} fill={INK} />
        <path d={m.shadows} fill={INK} />
        <path d={m.shade} fill={INK} />
        <path d={m.shadeCuts} fill={PAPER} />

        {/* Othello going in, his hand to his aching head, and Desdemona with him */}
        <Person
          at={[196, 288]}
          flip
          pose={{
            look: 'othello',
            // His scabbard ran back from his hip across Desdemona's skirt, a line
            // pointing at her; it is left off here, as "The trance and the
            // blow" leaves it off.
            sword: false,
            head: { rot: 10 },
            eye: 'down',
            far: {
              pts: [
                [-4, -130],
                [-10, -106],
                [-8, -84],
              ],
            },
            near: {
              pts: [
                [5, -128],
                [10, -104],
                [18, -86],
              ],
            },
          }}
        />
        <Person
          at={[266, 292]}
          flip
          pose={{
            look: 'desdemona',
            head: { rot: -8 },
            far: {
              pts: [
                [-4, -126],
                [-4, -104],
                [4, -94],
              ],
            },
            near: {
              pts: [
                [4, -124],
                [20, -114],
                [38, -122],
              ],
              hand: 'open',
              deg: -20,
            },
          }}
        />
        {/* the handkerchief, where it fell */}
        <path d={m.glint} fill={PAPER} />
        <HandkerchiefFallen q={CLOTH} s={1.35} />
        {/* Emilia, who stays, and sees it */}
        <Person
          at={[552, 334]}
          scale={1.2}
          flip
          pose={{
            look: 'emilia',
            head: { rot: 20 },
            eye: 'down',
            hem: { front: 34, back: 30 },
            far: {
              pts: [
                [-4, -126],
                [2, -108],
                [12, -114],
              ],
            },
            near: {
              pts: [
                [4, -124],
                [12, -100],
                [22, -78],
              ],
              hand: 'open',
              deg: 72,
            },
          }}
        />
      </g>
    </>
  )
}

export const theHandkerchiefIsDropped: LinocutArt = {
  width: W,
  height: H,
  Draw: TheHandkerchiefIsDropped,
}
