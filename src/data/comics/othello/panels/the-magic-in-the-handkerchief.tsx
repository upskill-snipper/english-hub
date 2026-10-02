import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { clamp, rays, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  H,
  W,
  archway,
  battlemented,
  castShadow,
  daySky,
  gravel,
  headland,
  parapet,
  reveal,
  seaLines,
  stoneCourses,
  voussoirs,
} from './garden'
import { HandkerchiefHanging } from './handkerchief'
import { Person, type Pose } from './people'

/**
 * Act 3, Scene 4: "The magic in the handkerchief", the tenth moment in the
 * guide's timeline. Every detail is from the scene in the held edition
 * (src/data/full-texts/othello.ts, Project Gutenberg #1531):
 *
 * - "Cyprus. Before the Castle." So this is the castle front of "The trance
 *   and the blow" (4.1), which is set in the same place: the battlemented
 *   wall of dressed stone and its gate on the left, cut with the same tools
 *   (./garden.tsx) to the same measure, and the parapet over the harbour on
 *   the right. No galley yet: Lodovico's ship comes in Act 4.
 * - It is day, later on the day of the garden scene: Bianca asks Cassio "say
 *   if I shall see you soon at night". So the sky and the sea are the paper
 *   left almost bare.
 * - DESDEMONA, just before Othello comes in: "I think the sun where he was
 *   born Drew all such humours from him." So the sun is the one spot colour,
 *   as the morning sun is in two Julius Caesar panels.
 * - OTHELLO: "Lend me thy handkerchief." DESDEMONA: "Here, my lord." OTHELLO:
 *   "That which I gave you." DESDEMONA: "I have it not about me." So
 *   Desdemona holds out a handkerchief, and it is not the one: a plain square
 *   of linen with no strawberries on it (the cloth of ./handkerchief.tsx,
 *   `plain`). Othello holds out his open hand for the other, and does not
 *   take hers. The real one is in Cassio's lodging, and is not in the picture.
 * - "Fetch't, let me see't." ... "The handkerchief!" So he leans a little
 *   towards her, intent, and she faces him upright, puzzled ("Why do you speak
 *   so startingly and rash?").
 * - EMILIA has it on her conscience: asked "Where should I lose that
 *   handkerchief, Emilia?" she answers "I know not, madam." So she stands a
 *   step behind her mistress with her hands folded and her eyes lowered,
 *   saying nothing. The Clown has gone; Cassio, Iago and Bianca come later in
 *   the scene and are not here.
 *
 * Othello's sun and the magic he tells of ("A sibyl ... In her prophetic fury
 * sew'd the work") are left to the words: nothing is drawn that he only
 * describes. The people are the kit's (./people.tsx), Othello's face in ink
 * and the Venetians' lit.
 *
 * Seeds: 1001 (sky), 1002 (the castle's stone), 1003 (sea), 1004 (parapet),
 * 1005 (the forecourt), 1006 (the gate's reveal), 1007 (the sun's rays), 1008
 * to 1010 (the shadows under the people).
 */

/** The castle front, as "The trance and the blow" measures it. */
const GROUND = 262
const CASTLE = 270
const TOP = 86
const GATE = { x0: 92, x1: 180, spring: 178 }
const PARAPET = 220
const HORIZON = 178
const SUN: [number, number] = [748, 72]

type Marks = {
  sky: string
  sea: string
  wall: { cuts: string; joints: string }
  wallBody: string
  par: { body: string; cuts: string }
  gravel: string
  gateReveal: string
  sunRays: string
  shadows: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const light = (x: number, y: number) => clamp(0.25 + (x / CASTLE) * 0.55 - (y - 90) / 900)
  cached = {
    sky: daySky(1001, { x0: 0, x1: W, y0: 6, y1: HORIZON - 4 }, (x, y) =>
      clamp(0.5 - y / 600 - Math.max(0, 1 - Math.hypot(x - SUN[0], y - SUN[1]) / 130)),
    ),
    sea: seaLines(1003, { x0: CASTLE, x1: W, y0: HORIZON + 2, y1: PARAPET }, SUN[0]),
    wall: stoneCourses(1002, { x0: 0, x1: CASTLE, y0: TOP, y1: GROUND }, light),
    wallBody: battlemented(-6, CASTLE, TOP, GROUND),
    par: parapet(1004, CASTLE, W + 6, PARAPET, GROUND),
    gravel: gravel(1005, { x0: 0, x1: W, y0: GROUND, y1: H }),
    gateReveal: reveal(rng(1006), GATE.x0 - 10, GATE.x0, GATE.spring - 30, GROUND),
    sunRays: rays(rng(1007), SUN[0], SUN[1], { from: 26, to: 96, every: 9, width: 1.5 }),
    shadows:
      castShadow(1008, 324, 329, 34) +
      castShadow(1009, 496, 325, 30) +
      castShadow(1010, 630, 321, 28),
  }
  return cached
}

/**
 * Othello, his open hand held out low for it: "That which I gave you." Low,
 * at her waist, never at the height of her face: the next panel is the blow,
 * and a hand held up towards her here could be read as the start of it.
 */
const OTHELLO: Pose = {
  look: 'othello',
  head: { rot: 8 },
  far: {
    pts: [
      [-4, -130],
      [-8, -106],
      [-4, -84],
    ],
  },
  near: {
    pts: [
      [5, -128],
      [16, -104],
      [38, -94],
    ],
    hand: 'open',
    deg: -4,
    thumb: -1,
  },
}

/** Desdemona, flipped, holding out her own handkerchief, her other hand at her breast. */
const DESDEMONA: Pose = {
  look: 'desdemona',
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
      [18, -110],
      [34, -116],
    ],
  },
}

/** Emilia, flipped, a step behind her, her hands folded and her eyes lowered. */
const EMILIA: Pose = {
  look: 'emilia',
  eye: 'down',
  head: { rot: 10 },
  far: {
    pts: [
      [-4, -126],
      [0, -104],
      [10, -96],
    ],
  },
  near: {
    pts: [
      [4, -124],
      [6, -104],
      [14, -96],
    ],
  },
}

function TheMagicInTheHandkerchief({ uid }: ArtProps) {
  const m = marks()
  void uid
  return (
    <g className="lc-push" style={timing({ origin: [430, 210], push: 1.03 })}>
      {/* the day: the sky and the sea, and the sun "where he was born" */}
      <rect x={0} y={0} width={W} height={PARAPET} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      <path d={m.sunRays} fill={INK} />
      <circle cx={SUN[0]} cy={SUN[1]} r={20} fill={RED} stroke={INK} strokeWidth={LINE.bold} />
      <path d={headland(400, 600, HORIZON, 14)} fill={INK} />
      <path d={m.sea} fill={INK} />
      <path d={`M${CASTLE} ${HORIZON}H${W}`} stroke={INK} strokeWidth={1.4} />
      {/* the castle: its battlemented front, the stone, the gate open on the dark */}
      <path d={m.wallBody} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.wall.cuts} fill={PAPER} />
      <path d={m.wall.joints} fill={PAPER} />
      <path d={archway(GATE.x0 - 12, GATE.x1 + 12, GATE.spring, GROUND)} fill={PAPER} />
      <path
        d={voussoirs(GATE.x0 - 12, GATE.x1 + 12, GATE.spring, 12, 11)}
        stroke={INK}
        strokeWidth={1.4}
      />
      <path d={archway(GATE.x0, GATE.x1, GATE.spring, GROUND)} fill={INK} />
      <path d={m.gateReveal} fill={PAPER} />
      {/* the parapet over the harbour */}
      <path d={m.par.body} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.par.cuts} fill={PAPER} />
      {/* the forecourt, in daylight */}
      <rect x={0} y={GROUND} width={W} height={H - GROUND} fill={PAPER} />
      <path d={m.gravel} fill={INK} />
      <path d={m.shadows} fill={INK} />

      <Person pose={OTHELLO} at={[330, 328]} scale={1.3} />
      <Person pose={DESDEMONA} at={[500, 324]} scale={1.15} flip>
        <HandkerchiefHanging at={[38, -114]} len={26} swing={-2} s={0.9} plain />
      </Person>
      <Person pose={EMILIA} at={[632, 320]} scale={1.08} flip />
    </g>
  )
}

export const theMagicInTheHandkerchief: LinocutArt = {
  width: W,
  height: H,
  Draw: TheMagicInTheHandkerchief,
}
