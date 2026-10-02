import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, gouge, n, rays, rng, wedge, type Pt } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  CandleStand,
  FLOOR,
  Flame,
  Floor,
  H,
  W,
  flameLight,
  keep,
  roomMarks,
  shadowPool,
} from './acts-3-4-rooms'
import { CROWN, CROWN_BAND, Person } from './people'

/**
 * Act 3, Scene 2: "The Mousetrap", the tenth moment in the guide's timeline,
 * at the instant the trap springs. Every detail is from the scene in the held
 * edition (src/data/full-texts/hamlet.ts, Project Gutenberg #1524):
 *
 * - "A hall in the Castle." The play is "tonight" and the scene ends at "the
 *   very witching time of night", so the hall is dark. The play names no
 *   lamp, but the King's own cry is for light ("Give me some light. Away."
 *   ALL: "Lights, lights, lights."), and Hamlet's taunt is about fire, so
 *   the hall is lit by flames in the spot colour: two candles on tall stands
 *   lighting the players, and torches on the wall.
 * - The players' stage at the far end, against a plain hanging. In the dumb
 *   show the King "Lays him down upon a bank of flowers", and the play
 *   repeats it: "Sweet, leave me here awhile ... [Sleeps.]" So the Player
 *   King lies asleep on a bank of flowers, his crown on, his eyes shut,
 *   propped up on the rise of the bank: reclining, as a man asleep in a
 *   garden does, and never flat, so that nobody takes him for a body laid
 *   out. The play does not say which player takes the part; he is drawn as
 *   the bearded First Player of "Spies and players", the company's leading
 *   player.
 * - LUCIANUS: "Thoughts black, hands apt, drugs fit, and time agreeing ...
 *   [Pours the poison into the sleeper's ears.]" Violence is suggested, never
 *   shown: Lucianus stands over the sleeper's head holding the vial up,
 *   stoppered and upright, the moment before. Nothing is poured, and no
 *   harm is drawn.
 * - "OPHELIA: The King rises. HAMLET: What, frighted with false fire? QUEEN:
 *   How fares my lord? POLONIUS: Give o'er the play." So the King is up from
 *   his chair, recoiling from the stage with a hand thrown up before his
 *   face, his eyes wide; the Queen, still in her chair beside his, reaches
 *   towards him; Polonius, between the court and the players, lifts a hand to
 *   stop them; and Ophelia, on her stool, starts.
 * - "HAMLET: Lady, shall I lie in your lap? [Lying down at Ophelia's feet.]"
 *   and, before the play, "I mine eyes will rivet to his face". So Hamlet,
 *   half risen from the floor at Ophelia's feet, points at the King across
 *   the hall. HORATIO was asked to "Observe mine uncle" and "Give him heedful
 *   note", so he stands at the back, watching the King and nothing else.
 * - Rosencrantz and Guildenstern are in the hall too, but the scene gives
 *   them nothing to do at this instant, so they are left out to keep the
 *   picture readable; the alt text says what is drawn.
 *
 * The people are the kit's (./people.tsx); the stone, the flags and the
 * flames are the castle's by night (./acts-3-4-rooms.tsx). Nothing is taken
 * from a film or stage production.
 *
 * Seeds: 10101 (the wall and the flags), 10102 and 10103 (the torches' glow),
 * 10104 (the hanging), 10105 (the bank of flowers).
 */

/** The flames: the two candles lighting the players, and two torches on the wall. */
const STAGE_FLAMES: Pt[] = [
  [30, 146],
  [304, 146],
]
const TORCHES: Pt[] = [
  [506, 108],
  [736, 100],
]
/** The players' stage: the hanging behind it, and the platform's top and front. */
const CLOTH = { x0: 52, x1: 300, top: 70, bottom: 266 }
const STAGE = { x0: 14, x1: 338, back: 266, top: 278, foot: 298 }

const light = (x: number, y: number) =>
  Math.max(
    ...STAGE_FLAMES.map((f) => flameLight(f, 260)(x, y)),
    ...TORCHES.map((f) => flameLight(f, 230)(x, y) * 0.8),
  )
const hidden = (x: number, y: number) =>
  (x > CLOTH.x0 - 6 && x < CLOTH.x1 + 6 && y > CLOTH.top - 8) ||
  (x > STAGE.x0 && x < STAGE.x1 && y > STAGE.back - 4)

type Marks = {
  room: ReturnType<typeof roomMarks>
  glow: string
  folds: string
  boards: string
  bank: string
  flowers: string
  leaves: string
}
let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const raw = roomMarks(10101, light, hidden)
  // No flag is cut where the players' platform stands over the floor.
  const underStage = (x: number, y: number) =>
    x > STAGE.x0 - 8 && x < STAGE.x1 + 6 && y < STAGE.foot + 2
  const room = {
    ...raw,
    joints: keep(raw.joints, underStage),
    flags: keep(raw.flags, underStage),
  }
  // The torches' light thrown on the wall: a few broken spokes each.
  const glow = TORCHES.map((t, i) =>
    rays(rng(10102 + i), t[0], t[1] - 8, { from: 14, to: 62, every: 12, width: 2.4 }),
  ).join('')
  // The hanging: plain cloth on a pole, in soft folds, lit by the candles.
  const r = rng(10104)
  let folds = ''
  for (let x = CLOTH.x0 + 18; x < CLOTH.x1 - 8; x += 26) {
    const dark = 1 - Math.min(1, Math.abs(x - (CLOTH.x0 + CLOTH.x1) / 2) / 160)
    folds += gouge(
      x,
      CLOTH.top + 10,
      x + between(r, -2, 2),
      CLOTH.bottom - 4,
      1.6 - dark * 0.6,
      between(r, -1, 1),
    )
    folds += gouge(x + 5, CLOTH.top + 26, x + 5 + between(r, -2, 2), CLOTH.bottom - 10, 0.8, 0)
  }
  // The platform's boards: joints down its front, and two across its top.
  let boards = ''
  for (let x = STAGE.x0 + 22; x < STAGE.x1 - 8; x += 24)
    boards += wedge(x, STAGE.top + 2, x + between(r, -0.6, 0.6), STAGE.foot - 2, 1.2, 1.6)
  // The bank of flowers: a low mound, its flowers and leaves cut in paper.
  const b = rng(10105)
  const bank = `M56 ${STAGE.top - 2}C64 272 84 270 104 268C140 263 176 254 204 246C222 240 240 238 248 246C254 256 256 268 256 ${STAGE.top - 2}Z`
  let flowers = ''
  let leaves = ''
  for (let i = 0; i < 30; i++) {
    const x = between(b, 70, 240)
    const top = x < 230 ? 268 - (x - 100) * 0.2 : 240 + (x - 230) * 0.9
    const y = between(b, top + 6, STAGE.top - 6)
    // a flower is a round dot (a stroke of no length, round-capped); a leaf a cut
    if (b() < 0.55) flowers += `M${n(x)} ${n(y)}h0.1`
    else leaves += gouge(x, y, x + between(b, 3, 6), y - between(b, 2, 4), 0.9)
  }
  cached = { room, glow, folds, boards, bank, flowers, leaves }
  return cached
}

/**
 * A chair of state seen from the side, facing left: a high back with a
 * finial, an arm, the seat and its legs. Drawn with its front foot at `at`,
 * the seat 46 high (the kit's seated figures sit at 44 to 46), scaled with
 * the person who sits in it.
 */
function ProfileChair({ at, s }: { at: Pt; s: number }) {
  return (
    <g transform={`translate(${n(at[0])} ${n(at[1])}) scale(${n(s)})`}>
      <path
        d="M30 0V-150H40V0ZM0 -50H40V-42H0ZM0 -42H8V0H0ZM2 -86H34V-80H2ZM2 -80H8V-50H2ZM6 -14H32V-10H6Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.6}
        strokeLinejoin="round"
      />
      <path
        d="M30 -150a5 5 0 1 0 10 0a5 5 0 1 0 -10 0Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.4}
      />
      <path d={gouge(35, -142, 35, -58, 1.1) + gouge(4, -47, 36, -47, 0.8)} fill={PAPER} />
    </g>
  )
}

/** A joint stool, seen from the side: its top at `top`, its legs to `foot`. */
function Stool({ x0, x1, top, foot }: { x0: number; x1: number; top: number; foot: number }) {
  return (
    <g>
      <path
        d={`M${x0} ${top}H${x1}V${top + 6}H${x0}ZM${x0 + 3} ${top + 6}L${x0 + 7} ${top + 6}L${x0 + 4} ${foot}H${x0}ZM${x1 - 7} ${top + 6}L${x1 - 3} ${top + 6}L${x1} ${foot}H${x1 - 4}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path d={gouge(x0 + 6, foot - 12, x1 - 6, foot - 12, 1)} fill={PAPER} />
    </g>
  )
}

/** A torch in an iron bracket on the wall: the bracket, the cup, and the flame. */
function Torch({ at, delay }: { at: Pt; delay: number }) {
  const [x, y] = at
  return (
    <g>
      <path
        d={`M${x + 12} ${y + 40}L${x} ${y + 22}V${y + 6}M${x - 7} ${y + 6}H${x + 7}`}
        stroke={PAPER}
        strokeWidth={6}
        fill="none"
        strokeLinejoin="round"
      />
      <path
        d={`M${x + 12} ${y + 40}L${x} ${y + 22}V${y + 6}M${x - 7} ${y + 6}H${x + 7}`}
        stroke={INK}
        strokeWidth={3.4}
        fill="none"
        strokeLinejoin="round"
      />
      <path
        d={`M${x - 8} ${y + 6}L${x - 6} ${y - 2}H${x + 6}L${x + 8} ${y + 6}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.3}
      />
      <Flame at={[x, y - 2]} s={1.3} delay={delay} />
    </g>
  )
}

/**
 * The vial in Lucianus's hand, upright and stoppered, in his own frame
 * (facing right): held up, never tipped.
 */
const LUCIANUS_WRIST: Pt = [52, -118]
/** The vial, standing upright on his fist, in a frame whose origin is the wrist. */
const VIAL =
  'M-0.6 -27H4.4V-22C7.4 -20.6 8.4 -18 8.4 -15C8.4 -11 6.4 -9 1.9 -9C-2.6 -9 -4.6 -11 -4.6 -15C-4.6 -18 -3.6 -20.6 -0.6 -22Z'
const VIAL_STOPPER = 'M-1 -31H4.8V-27H-1Z'

function TheMousetrap({ uid }: ArtProps) {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [470, 200], push: 1.03 })}>
      {/* the hall by night: its stone lit by the flames, its flags */}
      <path d={m.room.wall} fill={PAPER} />
      <path d={m.glow} fill={PAPER} />
      <Floor marks={m.room} />

      {/* the players' stage: the hanging, the platform, the candles */}
      <rect
        x={CLOTH.x0 - 8}
        y={CLOTH.top - 8}
        width={CLOTH.x1 - CLOTH.x0 + 16}
        height={5}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.2}
      />
      <path
        d={`M${CLOTH.x0} ${CLOTH.top - 3}H${CLOTH.x1}V${CLOTH.bottom}H${CLOTH.x0}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.bold}
      />
      <path d={m.folds} fill={INK} />
      <path
        d={`M${STAGE.x0} ${STAGE.back}H${STAGE.x1}L${STAGE.x1 + 4} ${STAGE.top}H${STAGE.x0 - 4}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.4}
      />
      <path
        d={`M${STAGE.x0 - 4} ${STAGE.top}H${STAGE.x1 + 4}V${STAGE.foot}H${STAGE.x0 - 4}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={m.boards} fill={PAPER} />
      <CandleStand flame={STAGE_FLAMES[0]} floor={STAGE.back + 6} />
      <CandleStand flame={STAGE_FLAMES[1]} floor={STAGE.back + 6} />

      {/* the bank of flowers, and the Player King asleep on it */}
      <path d={m.bank} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.flowers} fill="none" stroke={PAPER} strokeWidth={4.4} strokeLinecap="round" />
      <path d={m.leaves} fill={PAPER} />
      <g transform="translate(96 268) rotate(76)">
        <Person
          at={[0, 0]}
          scale={0.78}
          flip
          pose={{
            look: 'player',
            eye: 'shut',
            cloak: 0,
            far: {
              pts: [
                [-3, -130],
                [-4, -104],
                [-2, -80],
              ],
            },
            near: {
              pts: [
                [5, -130],
                [10, -106],
                [16, -86],
              ],
            },
          }}
        >
          <g transform="translate(3 -160)">
            <path d={CROWN} fill={PAPER} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
            <path d={CROWN_BAND} fill="none" stroke={INK} strokeWidth={1.1} />
          </g>
        </Person>
      </g>
      {/* Lucianus, standing over the sleeper, the vial held up and clear of him: the moment before */}
      <Person
        at={[268, STAGE.back + 8]}
        scale={0.82}
        flip
        pose={{
          look: 'lord',
          bare: true,
          body: { neck: [12, -132] },
          head: { at: [22, -152], rot: 30 },
          legs: {
            far: [
              [-3, -70],
              [-8, -37],
              [-12, -3],
            ],
            near: [
              [3, -70],
              [10, -37],
              [12, -3],
            ],
          },
          far: {
            pts: [
              [8, -128],
              [16, -104],
              [26, -90],
            ],
          },
          near: {
            pts: [[18, -126], [40, -108], LUCIANUS_WRIST],
            hand: 'grip',
            deg: -84,
          },
        }}
      >
        <g transform={`translate(${LUCIANUS_WRIST[0] + 1} ${LUCIANUS_WRIST[1] - 1})`}>
          <path d={VIAL} fill={PAPER} stroke={INK} strokeWidth={1.3} />
          <path d={VIAL_STOPPER} fill={INK} />
        </g>
      </Person>

      {/* Polonius, between the court and the players: "Give o'er the play." */}
      <path d={shadowPool(372, 296, 30, 3)} fill={INK} />
      <Person
        at={[372, 294]}
        scale={0.88}
        flip
        pose={{
          look: 'polonius',
          mouth: 'open',
          far: {
            pts: [
              [-4, -130],
              [-6, -104],
              [2, -86],
            ],
          },
          near: {
            pts: [
              [5, -130],
              [24, -118],
              [44, -126],
            ],
            hand: 'open',
            deg: -26,
            thumb: -1,
          },
        }}
      />

      {/* the torches on the wall */}
      <Torch at={TORCHES[0]} delay={0.1} />
      <Torch at={TORCHES[1]} delay={0.5} />

      {/* Horatio at the back, watching the King: "Observe mine uncle" */}
      <path d={shadowPool(812, 302, 30, 3)} fill={INK} />
      <Person
        at={[812, 300]}
        scale={0.9}
        flip
        pose={{
          look: 'horatio',
          head: { rot: 4 },
          far: {
            pts: [
              [-4, -130],
              [-6, -104],
              [0, -86],
            ],
          },
          near: {
            pts: [
              [5, -130],
              [8, -104],
              [14, -86],
            ],
          },
        }}
      />

      {/* the King's chair and the Queen's, facing the stage */}
      <ProfileChair at={[628, 326]} s={1.04} />
      <ProfileChair at={[716, 326]} s={1.02} />
      <path d={shadowPool(690, 330, 110, 4)} fill={INK} />

      {/* the Queen, still in her chair: "How fares my lord?" */}
      <Person
        at={[724, 326]}
        scale={1.02}
        flip
        pose={{
          look: 'gertrude',
          seated: { seat: 46, knee: [32, -54] },
          eye: 'wide',
          mouth: 'open',
          head: { rot: 4 },
          near: {
            pts: [
              [4, -90],
              [22, -84],
              [42, -94],
            ],
            hand: 'open',
            deg: -16,
            thumb: -1,
          },
        }}
      />
      {/* the King, up from his chair: "Give me some light. Away." */}
      <Person
        at={[626, 326]}
        scale={1.06}
        flip
        pose={{
          look: 'claudius',
          eye: 'wide',
          brow: 'frown',
          body: { neck: [-12, -137] },
          head: { rot: -14 },
          hem: { front: 16, back: 30 },
          far: {
            pts: [
              [-8, -132],
              [-18, -108],
              [-30, -90],
            ],
          },
          near: {
            pts: [
              [-6, -131],
              [16, -128],
              [30, -144],
            ],
            hand: 'open',
            deg: -42,
            thumb: -1,
            size: 17,
            spread: 24,
          },
        }}
      />

      {/* Ophelia on her stool, starting: "The King rises." */}
      <Stool x0={448} x1={494} top={282} foot={318} />
      <Person
        at={[468, 318]}
        scale={1.04}
        pose={{
          look: 'ophelia',
          seated: { seat: 40, knee: [30, -48] },
          eye: 'wide',
          head: { rot: -4 },
          near: {
            pts: [
              [4, -84],
              [16, -68],
              [24, -82],
            ],
            hand: 'open',
            deg: -64,
            thumb: -1,
          },
        }}
      />
      {/* Hamlet, half risen from the floor at her feet, pointing at the King */}
      <path d={shadowPool(420, 330, 50, 4)} fill={INK} />
      <Person
        at={[404, 330]}
        scale={1.08}
        pose={{
          look: 'hamlet',
          mouth: 'open',
          body: { neck: [8, -112], hip: [0, -48] },
          head: { rot: -8 },
          cloak: 6,
          legs: {
            far: [
              [-3, -48],
              [-12, -8],
              [-36, -4],
            ],
            near: [
              [3, -48],
              [28, -46],
              [30, -3],
            ],
          },
          near: {
            pts: [
              [12, -108],
              [38, -116],
              [61, -130],
            ],
            hand: 'point',
            deg: -22,
          },
        }}
      />
    </g>
  )
}

export const theMousetrap: LinocutArt = { width: W, height: H, Draw: TheMousetrap }
