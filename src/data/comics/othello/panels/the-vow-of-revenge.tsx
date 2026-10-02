import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, rays, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  H,
  W,
  battlemented,
  castShadow,
  cypress,
  daySky,
  gravel,
  headland,
  hedge,
  marbleVeins,
  parapet,
  seaLines,
  stoneCourses,
} from './garden'
import { HandkerchiefTucked } from './handkerchief'
import { KneelingMan } from './kneel'

/**
 * Act 3, Scene 3: "The vow of revenge", the ninth moment in the guide's
 * timeline, which ends the long scene in the garden. Every detail is from
 * the scene in the held edition (src/data/full-texts/othello.ts, Project
 * Gutenberg #1531):
 *
 * - "Cyprus. The Garden of the Castle." The garden of ./garden.tsx from its
 *   far end: the parapet over the harbour, the sea and a headland, with the
 *   castle wall and its cypresses on the left. Still the same day.
 * - OTHELLO: "Now by yond marble heaven, In the due reverence of a sacred vow
 *   [Kneels.] I here engage my words." So Othello is on one knee (./kneel.tsx,
 *   on the kit's own upper body), his head raised to the heaven he swears by
 *   and his open hand laid on his breast: the vow given with his whole heart.
 *   Two raised hands were tried and are not to come back. An arm stretched up
 *   towards the sun read at phone width as a salute. Then the forearm upright
 *   with one finger raised: on his ink hand, with no paper cut inside it, a
 *   single finger raised from the fist is a silhouette, and in silhouette it
 *   reads as a rude sign (caught in review, 2 October 2026).
 * - "yond marble heaven": the sky is bright, drawn out in long thin clouds
 *   like the veins in a slab of marble (`marbleVeins`), and IAGO swears by
 *   "you ever-burning lights above", so the sun burns in it, in paper, with
 *   its rays cut round it.
 * - IAGO: "Do not rise yet. [Kneels.] Witness, you ever-burning lights above
 *   ... Witness that here Iago doth give up The execution of his wit, hands,
 *   heart, To wrong'd Othello's service!" So Iago kneels too, a little behind
 *   him, his hands pressed together as if in prayer, with the knowing smile
 *   the kit gives him alone. The guide's reading of the moment: the kneeling
 *   vow "can be read as a dark parody of a marriage".
 * - Just before Othello comes back into the garden, Iago has the
 *   handkerchief from Emilia: "I will in Cassio's lodging lose this napkin".
 *   And he tells Othello he saw "Cassio wipe his beard with" it. So the
 *   corner of the handkerchief of ./handkerchief.tsx hangs at Iago's belt,
 *   white, its strawberries the one spot colour: the proof, on the man who
 *   is lying about it.
 * - OTHELLO, when they have risen: "Now art thou my lieutenant." That is the
 *   quotation, and Iago's answer is "I am your own for ever."
 *
 * Nothing is drawn of the "bloody thoughts" Othello speaks of: no blade, and
 * no red but the strawberries. The people are the kit's (./people.tsx),
 * Othello's face in ink and Iago's lit.
 *
 * Seeds: 901 (sky), 902 (the marble veins), 903 (sea), 904 (parapet), 905
 * (wall), 906 and 907 (cypresses), 908 (gravel), 909 (the sun's rays), 910
 * (hedge), 911 and 913 (shadows).
 */

const HORIZON = 198
const PARAPET = { top: 222, base: 258 }
const GROUND = 334
const SUN: [number, number] = [704, 74]
const WALL_X = 96

type Marks = {
  sky: string
  veins: string
  sea: string
  par: { body: string; cuts: string }
  wall: { cuts: string; joints: string }
  trees: { body: string; cuts: string }[]
  hedge: { body: string; cuts: string }
  ground: string
  sunRays: string
  shadows: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = daySky(901, { x0: WALL_X, x1: W, y0: 0, y1: HORIZON }, (x, y) =>
    clamp(0.55 - y / 300 - Math.max(0, 1 - Math.hypot(x - SUN[0], y - SUN[1]) / 150) * 1.1),
  )
  const veins = marbleVeins(902, { x0: WALL_X, x1: W, y0: 14, y1: 104 }, 5, { c: SUN, r: 44 })
  const sea = seaLines(903, { x0: WALL_X, x1: W, y0: HORIZON + 1, y1: PARAPET.top }, SUN[0])
  const par = parapet(904, WALL_X, W, PARAPET.top, PARAPET.base)
  const wall = stoneCourses(905, { x0: 0, x1: WALL_X, y0: 10, y1: GROUND }, (x, y) =>
    clamp(0.25 + (x / WALL_X) * 0.5 - y / 1400),
  )
  const trees = [cypress(906, 150, 262, 214, 40, 1), cypress(907, 196, 262, 168, 32, 1)]
  const hdg = hedge(910, WALL_X, 300, 238, 268)
  const ground = gravel(908, { x0: 0, x1: W, y0: PARAPET.base, y1: H }, (x) =>
    clamp((WALL_X + 40 - x) / 120),
  )
  const sunRays = rays(rng(909), SUN[0], SUN[1], { from: 28, to: 124, every: 6.5, width: 1.7 })
  const shadows = castShadow(911, 462, 336, 74) + castShadow(913, 326, 322, 60)
  cached = { sky, veins, sea, par, wall, trees, hedge: hdg, ground, sunRays, shadows }
  return cached
}

/**
 * Iago's hands pressed together, palm to palm, the fingers up, in his
 * figure's frame: lit, as the kit prints every Venetian's hands, in paper with
 * an ink edge. The thumb and the lines between the fingers are cut so that
 * at panel size they read as two hands and not as a leaf or a scrap of paper.
 */
const PRAY_T = 'translate(21 -118) rotate(-76) scale(1.25)'
const PRAY_HANDS =
  'M0 -4.6C6 -5.6 12 -4.4 17 -1.6C18.6 -0.6 18.6 0.6 17 1.6C12 4.4 6 5.6 0 4.6Z' +
  'M2.6 -4.2C4.4 -7.6 8.4 -8.4 9.8 -6.6C10.4 -5.6 9.4 -4.8 7.8 -4.4Z'
const PRAY_LINES = 'M8.6 -2.6L16.4 -1.1M9.2 -0.4L17.4 0.2M8.6 1.9L16.2 1.4M0.6 0L7 -0.2'

function TheVowOfRevenge({ uid }: ArtProps) {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [430, 220], push: 1.03 })}>
      {/* "yond marble heaven": a bright sky, its clouds veined like marble */}
      <rect x={0} y={0} width={W} height={HORIZON + 2} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      <path d={m.sunRays} fill={INK} />
      {/* "you ever-burning lights above" */}
      <circle cx={SUN[0]} cy={SUN[1]} r={22} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} />
      <path d={m.veins} fill={INK} />
      {/* the sea over the parapet, and a headland */}
      <rect x={0} y={HORIZON} width={W} height={PARAPET.top - HORIZON} fill={PAPER} />
      <path d={headland(520, 690, HORIZON + 1, 15)} fill={INK} />
      <path d={m.sea} fill={INK} />
      <path d={`M0 ${HORIZON}H${W}`} stroke={INK} strokeWidth={LINE.fine} />
      <path d={m.par.body} fill={INK} />
      <path d={m.par.cuts} fill={PAPER} />
      {/* the gravel walk */}
      <rect x={0} y={PARAPET.base} width={W} height={H - PARAPET.base} fill={PAPER} />
      <path d={m.ground} fill={INK} />
      {/* the cypresses and the hedge at the castle's foot */}
      {m.trees.map((t, i) => (
        <g key={i}>
          <path d={t.body} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
          <path d={t.cuts} fill={PAPER} />
        </g>
      ))}
      <path d={m.hedge.body} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.hedge.cuts} fill={PAPER} />
      {/* the castle wall, battlemented, on the left */}
      <path d={battlemented(-10, WALL_X, 28, GROUND, 20, 14, 14)} fill={INK} />
      <path d={m.wall.cuts} fill={PAPER} />
      <path d={m.wall.joints} fill={PAPER} />
      <path d={`M${WALL_X} 14V${GROUND}`} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.shadows} fill={INK} />

      {/* Iago on his knee behind him, his hands pressed together, the handkerchief at his belt */}
      <KneelingMan
        uid={uid}
        id="iago"
        at={[338, 320]}
        scale={1.36}
        pose={{
          look: 'iago',
          mouth: 'smile',
          head: { rot: -2 },
          far: {
            pts: [
              [-4, -130],
              [6, -108],
              [20, -116],
            ],
            hand: 'none',
          },
          near: {
            pts: [
              [5, -128],
              [12, -106],
              [22, -116],
            ],
            hand: 'none',
          },
        }}
      >
        <path d={PRAY_HANDS} transform={PRAY_T} fill={PAPER} stroke={INK} strokeWidth={1.2} />
        <path d={PRAY_LINES} transform={PRAY_T} fill="none" stroke={INK} strokeWidth={0.7} />
        <HandkerchiefTucked
          top={[
            [0, -81],
            [14, -81],
          ]}
          tip={[5, -54]}
          s={0.85}
        />
      </KneelingMan>
      {/* Othello on his knee: "Now by yond marble heaven" */}
      <KneelingMan
        uid={uid}
        id="othello"
        at={[478, 334]}
        scale={1.5}
        pose={{
          look: 'othello',
          head: { rot: -10 },
          far: {
            pts: [
              [-4, -130],
              [-2, -108],
              [10, -116],
            ],
          },
          near: {
            pts: [
              [5, -128],
              [18, -102],
              [15, -116],
            ],
            hand: 'open',
            deg: -100,
            size: 15,
            spread: 15,
            thumb: 1,
          },
        }}
      />
    </g>
  )
}

export const theVowOfRevenge: LinocutArt = { width: W, height: H, Draw: TheVowOfRevenge }
