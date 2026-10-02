import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { gouge, gougeField, clamp, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { footShadow } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { Person, type Pose } from './people'
import {
  CANDLES,
  CHAIR,
  Candle,
  DOOR,
  FLOOR,
  SENATOR_CHAIRS,
  TABLE,
  WINDOWS,
  candleLight,
  chamberMarks,
  dukeChair,
  letters,
  nightWindow,
  senatorChair,
  tableMarks,
  wainscot,
} from './council'

/**
 * Act 1, Scene 3: "Before the senate", the third moment in the guide's
 * timeline. Every detail is from the scene, as the held edition prints it
 * (src/data/full-texts/othello.ts):
 *
 * - "Venice. A council chamber. The Duke and Senators sitting at a table":
 *   the room of ./council.tsx, at night, lit by the candles on the table.
 *   The Duke, in the cap and robe of his office, sits in his high chair in
 *   the middle of the table with a senator either side, the letters about
 *   the Turkish fleet open before them.
 * - OTHELLO: "Most potent, grave, and reverend signiors ... I will a round
 *   unvarnish'd tale deliver / Of my whole course of love." So Othello stands
 *   before the table, upright, and holds out an open hand to the Duke as he
 *   tells it. He is drawn as the kit draws him (./people.tsx).
 * - OTHELLO: "She lov'd me for the dangers I had pass'd, / And I lov'd her
 *   that she did pity them. / This only is the witchcraft I have us'd. / Here
 *   comes the lady. Let her witness it." "Enter Desdemona, Iago and
 *   Attendants." So Desdemona comes in at the door on the left, a hand laid
 *   on her breast, and Iago, who fetched her ("Ancient, conduct them, you
 *   best know the place"), stands in the doorway behind her.
 * - BRABANTIO: "I pray you hear her speak ... Come hither, gentle mistress."
 *   So her father, in his senator's gown and cap, stands at the end of the
 *   table with a hand on his breast (see BRABANTIO below for why it is not
 *   held out to her); Roderigo, who came in with him, watches from behind.
 *
 * The guide's quotation for this moment runs to eighteen words, over the
 * fifteen a panel may carry, so the panel quotes its first line. What
 * Brabantio says against Othello here is not quoted or drawn. Nothing is
 * taken from a film or stage production. Seeds: 4301 (wall and floor), 4303
 * (cloth), 4304 (the lit passage).
 */

const W = 860
const H = 340
const FEET = 326

const DUKE: Pose = {
  look: 'duke',
  far: {
    pts: [
      [-3, -130],
      [6, -102],
      [22, -94],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [5, -130],
      [14, -100],
      [34, -94],
    ],
    hand: 'open',
    deg: 4,
    thumb: -1,
    spread: 12,
  },
}

/** A senator at the table, his hands on a letter. */
const SENATOR: Pose = {
  look: 'senator',
  head: { rot: 6 },
  far: {
    pts: [
      [-3, -130],
      [6, -102],
      [20, -94],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [5, -130],
      [12, -100],
      [30, -94],
    ],
    hand: 'mitt',
  },
}

const OTHELLO: Pose = {
  look: 'othello',
  far: {
    pts: [
      [-3, -130],
      [-7, -104],
      [4, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [22, -110],
      [43, -112],
    ],
    hand: 'open',
    deg: -8,
    thumb: -1,
    spread: 20,
  },
}

const DESDEMONA: Pose = {
  look: 'desdemona',
  hem: { front: 26, back: 42 },
  far: {
    pts: [
      [-3, -126],
      [-6, -102],
      [-2, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -126],
      [20, -102],
      [10, -110],
    ],
    hand: 'open',
    deg: -168,
    thumb: 1,
    spread: 9,
    size: 13,
  },
}

const IAGO: Pose = {
  look: 'iago',
  far: {
    pts: [
      [-3, -130],
      [-7, -104],
      [-6, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [8, -104],
      [7, -84],
    ],
    hand: 'mitt',
  },
}

/**
 * Brabantio (flipped), at the end of the table, a hand on his breast: "my
 * particular grief / Is of so flood-gate and o'erbearing nature". (He first
 * held out his hand towards his daughter, but Othello stands between them,
 * and the two men's open hands met in the middle as if they were shaking
 * hands.)
 */
const BRABANTIO: Pose = {
  look: 'brabantio',
  head: { rot: 8 },
  far: {
    pts: [
      [-3, -130],
      [-8, -104],
      [-4, -86],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [22, -102],
      [12, -108],
    ],
    hand: 'open',
    deg: -170,
    thumb: 1,
    spread: 9,
    size: 14,
  },
}

/** Roderigo, further back between Desdemona and Othello, watching. */
const RODERIGO: Pose = {
  look: 'roderigo',
  sword: true,
  far: {
    pts: [
      [-3, -130],
      [-7, -104],
      [-6, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [8, -104],
      [8, -84],
    ],
    hand: 'mitt',
  },
}

type Marks = {
  wall: string
  floor: string
  cloth: string
  folds: string
  fringe: string
  passage: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const light = candleLight(CANDLES, 340)
  const { wall, floor } = chamberMarks(4301, light, W, H)
  const { cloth, folds, fringe } = tableMarks(4303, W)
  // The passage beyond the door, lit: paper, with a few ink courses that
  // close in at its sides, so Iago stands dark against it.
  const mid = (DOOR.x0 + DOOR.x1) / 2
  const passage = gougeField(
    rng(4304),
    { x0: DOOR.x0, x1: DOOR.x1, y0: DOOR.top, y1: FLOOR },
    (x) => clamp((Math.abs(x - mid) - 22) / 40) * 0.8,
    { spacing: 6.4, len: [10, 30], gap: [6, 14], max: 2.6 },
  )
  cached = { wall, floor, cloth, folds, fringe, passage }
  return cached
}

const LETTERS = letters([
  [604, 205, 20],
  [700, 206, 24],
  [740, 204, 18],
  [812, 206, 22],
])

function BeforeTheSenate({ uid }: ArtProps) {
  const m = marks()
  const chair = dukeChair()
  const door = `M${DOOR.x0} ${FLOOR}V${DOOR.top + 52}A52 52 0 0 1 ${DOOR.x1} ${DOOR.top + 52}V${FLOOR}Z`
  const clip = `${uid}-door`
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <path d={door} />
        </clipPath>
        {/* the sitting figures show only above the table */}
        <clipPath id={`${uid}-seated`}>
          <rect x={TABLE.x0} y={0} width={W - TABLE.x0} height={TABLE.top + 4} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [430, 200], push: 1.03 })}>
        {/* the chamber: its wall lit by the candles, the panelling, the windows on the night */}
        <rect x={0} y={0} width={W} height={FLOOR} fill={INK} />
        <path d={m.wall} fill={PAPER} />
        <path d={`M0 188H${W}M0 192H${W}`} stroke={PAPER} strokeWidth={2} />
        <path d={wainscot(W)} fill="none" stroke={PAPER} strokeWidth={1.6} />
        {WINDOWS.map((w) => {
          const win = nightWindow(w)
          return (
            <g key={w.x0}>
              <path d={win.frame} fill={INK} stroke={PAPER} strokeWidth={LINE.bold} />
              <path d={win.lead} stroke={PAPER} strokeWidth={1.2} fill="none" />
            </g>
          )
        })}

        {/* the door on the left, open on the lit passage */}
        <path d={door} fill={PAPER} stroke={PAPER} strokeWidth={8} />
        <path d={door} fill={PAPER} stroke={INK} strokeWidth={3} />
        <g clipPath={`url(#${clip})`}>
          <path d={m.passage} fill={INK} />
        </g>

        {/* the floor */}
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />
        <rect x={0} y={FLOOR - 1} width={W} height={3} fill={INK} />

        {/* the Duke's high chair and the senators' chairs behind the table */}
        <path d={chair.back} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={chair.panel} fill="none" stroke={PAPER} strokeWidth={1.4} />
        <path
          d={SENATOR_CHAIRS.map((x) => senatorChair(x)).join('')}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        {/* the Duke and two senators, sitting */}
        <g clipPath={`url(#${uid}-seated)`}>
          <Person pose={SENATOR} at={[SENATOR_CHAIRS[0], 304]} scale={0.98} flip />
          <Person pose={DUKE} at={[(CHAIR.x0 + CHAIR.x1) / 2, 300]} scale={1} flip />
          <Person pose={SENATOR} at={[SENATOR_CHAIRS[1], 304]} scale={0.98} flip />
        </g>
        {/* the table: its cloth to the floor, the letters, the candles */}
        <path d={m.cloth} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.folds} fill={PAPER} />
        <path d={m.fringe} stroke={PAPER} strokeWidth={2.4} strokeDasharray="2 3" />
        <path
          d={`M${TABLE.x0 - 6} ${TABLE.top - 2}H${W + 10}V${TABLE.top + 6}H${TABLE.x0 - 6}Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.4}
        />
        <path d={LETTERS.paper} fill={PAPER} stroke={INK} strokeWidth={1} />
        <path d={LETTERS.lines} stroke={INK} strokeWidth={0.8} />
        {/* staggered by 0.12 s, so the last flame stops by about 4.2 s, within the
            style guide's four seconds (by 0.3 s it ran on to 4.7) */}
        {CANDLES.map((c, i) => (
          <Candle key={c[0]} at={c} delay={i * 0.12} />
        ))}

        {/* Iago in the doorway; Desdemona coming in; Othello before the Duke */}
        <path
          d={
            footShadow(184, FEET + 2, 26) +
            footShadow(356, FEET + 2, 28) +
            footShadow(520, FEET + 2, 28)
          }
          fill={INK}
        />
        <Person pose={IAGO} at={[78, 320]} scale={1.02} />
        <Person pose={RODERIGO} at={[268, 314]} scale={0.95} />
        <Person pose={DESDEMONA} at={[184, FEET]} scale={1.12} />
        <Person pose={OTHELLO} at={[352, FEET]} scale={1.1} />
        {/* Brabantio, at the end of the table */}
        <Person pose={BRABANTIO} at={[520, FEET]} scale={1.07} flip />
        <path d={gouge(0, H - 3, W, H - 3, 0.5)} fill={INK} />
      </g>
    </>
  )
}

export const beforeTheSenate: LinocutArt = { width: W, height: H, Draw: BeforeTheSenate }
