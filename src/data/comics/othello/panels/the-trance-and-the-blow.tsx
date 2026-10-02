import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { clamp, gouge, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
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
import { Person, type Pose } from './people'

/**
 * Act 4, Scene 1: "The trance and the blow", the eleventh moment in the
 * guide's timeline. The blow is never drawn: the picture is the moment after
 * it, Lodovico's shock and Desdemona's composure, with the letter from Venice
 * in Othello's hands. Every detail is from the scene in the held edition
 * (src/data/full-texts/othello.ts):
 *
 * - "Cyprus. Before the Castle." So the castle's battlemented front of
 *   dressed stone and its gate, cut with the tools of ./garden.tsx so that it
 *   is the castle of the garden panels, with the harbour beyond the parapet.
 *   It is day: Lodovico has just landed, and Othello asks him to supper
 *   "tonight". So the sky and the sea are the paper left almost bare.
 * - IAGO: "Something from Venice, sure. 'Tis Lodovico / Come from the duke."
 *   So a Venetian galley rides at anchor in the harbour, a small red pennant
 *   at her masthead, the one red in the print: Venice, whose orders have just
 *   come ashore.
 * - "[Gives him a packet.]" "[Opens the packet and reads.]" LODOVICO: "He did
 *   not call; he's busy in the paper." So Othello holds the open letter in
 *   both hands and reads it, his head bowed over it: he has turned his back
 *   on his wife and on Lodovico.
 * - DESDEMONA: "I have not deserv'd this." ... "I will not stay to offend
 *   you." LODOVICO: "Truly, an obedient lady." So Desdemona stands upright
 *   and still behind him, her hands folded before her and her eyes lowered:
 *   her composure, as the guide's reading of the moment asks.
 * - LODOVICO: "My lord, this would not be believ'd in Venice, / Though I
 *   should swear I saw't"; and when Othello has gone, "Is this the noble Moor,
 *   whom our full senate / Call all in all sufficient?" So Lodovico has
 *   started back, his mouth open and both open hands up before his breast.
 * - Iago stands before the castle gate, a hand on his hip, watching it all
 *   with the knowing smile the kit gives him alone. (Bianca and Cassio, of
 *   the scene's earlier part, have gone; Lodovico's attendant is left out.)
 *
 * LEFT OUT, on purpose (the play's own rules, ../index.ts). The blow: no
 * raised hand, and nothing on Desdemona's face, least of all red. Othello's
 * fit, which comes earlier in the scene, and every insult in it. Nothing is
 * taken from a film or stage production; the people are the kit's
 * (./people.tsx), Othello's face in ink and the Venetians' lit.
 *
 * Seeds: 1101 (the sky), 1102 (the sea), 1103 (the castle's stone), 1104
 * (the parapet), 1105 (the forecourt), 1106 (the gate's reveal), 1107 to 1110
 * (the shadows under the people).
 */

const W = 860
const H = 340
/** The foot of the castle wall and the parapet, where the forecourt begins. */
const GROUND = 262
/** Where everyone stands. */
const FEET = 318
/** The castle's front, from the left edge to here. */
const CASTLE = 270
/** The battlements' top. */
const TOP = 86
/** The castle gate. */
const GATE = { x0: 92, x1: 180, spring: 178 }
/** The parapet over the harbour, and the sea's horizon behind it. */
const PARAPET = 220
const HORIZON = 178

type Marks = {
  sky: string
  sea: string
  wall: { cuts: string; joints: string }
  wallBody: string
  par: { body: string; cuts: string }
  gravel: string
  gateReveal: string
  shadows: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const light = (x: number, y: number) => clamp(0.25 + (x / CASTLE) * 0.55 - (y - 90) / 900)
  cached = {
    sky: daySky(1101, { x0: 0, x1: W, y0: 6, y1: HORIZON - 4 }),
    sea: seaLines(1102, { x0: CASTLE, x1: W, y0: HORIZON + 2, y1: PARAPET }),
    wall: stoneCourses(1103, { x0: 0, x1: CASTLE, y0: TOP, y1: GROUND }, light),
    wallBody: battlemented(-6, CASTLE, TOP, GROUND),
    par: parapet(1104, CASTLE, W + 6, PARAPET, GROUND),
    gravel: gravel(1105, { x0: 0, x1: W, y0: GROUND, y1: H }),
    gateReveal: reveal(rng(1106), GATE.x0 - 10, GATE.x0, GATE.spring - 30, GROUND),
    shadows:
      castShadow(1107, 148, FEET + 1, 26) +
      castShadow(1108, 318, FEET + 1, 30) +
      castShadow(1109, 486, FEET + 1, 30) +
      castShadow(1110, 650, FEET + 1, 30),
  }
  return cached
}

/**
 * A Venetian galley at anchor far off in the harbour: the long low hull with
 * its raised stern, the oars shipped along her side, the mast with its yard
 * lowered, and the pennant of Venice at the masthead in the spot colour.
 */
function Galley({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path
        d="M-40 -1H26L34 -9L42 -10L38 2C24 7 -22 7 -36 3Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.2}
        strokeLinejoin="round"
      />
      <path d={gouge(-34, 2.4, 30, 2.4, 0.6)} fill={PAPER} />
      <path
        d="M-30 4L-34 9M-20 4L-24 9M-10 4L-14 9M0 4L-4 9M10 4L6 9M20 4L16 9"
        stroke={INK}
        strokeWidth={1.1}
      />
      <path d="M-4 -1V-44" stroke={INK} strokeWidth={2.2} />
      <path d="M-30 -18L24 -40" stroke={INK} strokeWidth={2.4} strokeLinecap="round" />
      <path
        d="M-4 -44L10 -41L-4 -37Z"
        fill={RED}
        stroke={INK}
        strokeWidth={0.8}
        strokeLinejoin="round"
      />
    </g>
  )
}

/** Iago before the gate, watching: a hand on his hip, the knowing smile. */
const IAGO: Pose = {
  look: 'iago',
  eye: 'open',
  mouth: 'smile',
  head: { rot: 2 },
  far: {
    pts: [
      [-3, -130],
      [-6, -104],
      [-4, -82],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [20, -110],
      [8, -88],
    ],
    hand: 'mitt',
    deg: 160,
  },
}

/**
 * Othello, flipped, his back to his wife, reading the letter held open in
 * both hands. His sword is left off here: sheathed at his hip, its scabbard
 * ran back from him to point at Desdemona, in the moment after he has struck
 * her.
 */
const OTHELLO: Pose = {
  look: 'othello',
  sword: false,
  eye: 'down',
  head: { rot: 14 },
  far: {
    pts: [
      [-3, -130],
      [8, -106],
      [22, -112],
    ],
    hand: 'mitt',
    deg: -20,
  },
  near: {
    pts: [
      [5, -130],
      [14, -102],
      [26, -108],
    ],
    hand: 'mitt',
    deg: -10,
  },
}

/**
 * The letter from Venice, held open before him, in Othello's own frame: a
 * sheet unfolded, the creases of its folds, lines of writing, and the broken
 * seal (in ink: a red seal on a white sheet could read as a spot of blood).
 */
function Letter() {
  return (
    <g>
      <path
        d="M18 -140L42 -136L40 -104L16 -108Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.2}
        strokeLinejoin="round"
      />
      <path d="M17.4 -124L41.4 -120" stroke={INK} strokeWidth={0.8} />
      <path
        d="M21 -134L37 -131.4M21 -130.6L38 -127.8M20.6 -127.2L33 -125.2M20 -118.6L37 -116M19.8 -115L36 -112.4M19.4 -111.4L30 -109.8"
        stroke={INK}
        strokeWidth={0.9}
      />
      <circle cx={34} cy={-108.6} r={2.2} fill={INK} />
    </g>
  )
}

/** Desdemona, flipped, upright and still behind him, her hands folded before her, her eyes lowered. */
const DESDEMONA: Pose = {
  look: 'desdemona',
  eye: 'down',
  head: { rot: 8 },
  far: {
    pts: [
      [-3, -126],
      [2, -104],
      [12, -96],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -126],
      [8, -102],
      [16, -95],
    ],
    hand: 'mitt',
    deg: 170,
  },
}

/** Lodovico, flipped, started back: his mouth open, both open hands up before his breast. */
const LODOVICO: Pose = {
  look: 'lodovico',
  eye: 'open',
  mouth: 'open',
  head: { rot: -8 },
  far: {
    pts: [
      [-3, -130],
      [10, -112],
      [22, -124],
    ],
    hand: 'open',
    deg: -62,
    thumb: -1,
  },
  near: {
    pts: [
      [4, -130],
      [18, -108],
      [32, -118],
    ],
    hand: 'open',
    deg: -50,
    thumb: -1,
  },
}

function TheTranceAndTheBlow({ uid }: ArtProps) {
  const m = marks()
  void uid
  return (
    <g className="lc-push" style={timing({ origin: [430, 200], push: 1.03 })}>
      {/* the bright day: the sky and the sea, left almost bare */}
      <rect x={0} y={0} width={W} height={PARAPET} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      <path d={headland(560, 760, HORIZON, 14)} fill={INK} />
      <path d={m.sea} fill={INK} />
      <path d={`M${CASTLE} ${HORIZON}H${W}`} stroke={INK} strokeWidth={1.4} />
      <Galley x={734} y={HORIZON + 12} />
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
      <Person pose={IAGO} at={[146, FEET]} scale={1.1} />
      <Person pose={OTHELLO} at={[322, FEET]} scale={1.12} flip>
        <Letter />
      </Person>
      <Person pose={DESDEMONA} at={[484, FEET]} scale={1.12} flip />
      <Person pose={LODOVICO} at={[650, FEET]} scale={1.1} flip />
    </g>
  )
}

export const theTranceAndTheBlow: LinocutArt = { width: W, height: H, Draw: TheTranceAndTheBlow }
