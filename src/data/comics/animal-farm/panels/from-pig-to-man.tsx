import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Cut, Horse, place, type Part } from './people'

/**
 * Chapter 10: "From pig to man", the thirty-third and last moment in the
 * guide's timeline. Every detail is from the text (the held edition,
 * src/data/full-texts/animal-farm.ts):
 *
 * - "That evening loud laughter and bursts of singing came from the
 *   farmhouse ... they began to creep as quietly as possible into the
 *   farmhouse garden. At the gate they paused, half frightened to go on but
 *   Clover led the way in. They tiptoed up to the house, and such animals as
 *   were tall enough peered in at the dining-room window." So it is night,
 *   the house wall is dark, and the one light is the dining-room window, with
 *   Clover outside it in the garden, her head at the glass. The garden's
 *   laurels ("the laurels in the farmhouse garden", Chapter 9) are the dark
 *   leaves along the foot of the picture.
 * - "There, round the long table, sat half a dozen farmers and half a dozen
 *   of the more eminent pigs"; "The company had been enjoying a game of
 *   cards"; "A large jug was circulating, and the mugs were being refilled
 *   with beer." So the table runs the width of the window, with the jug, the
 *   mugs and the cards of the game on it.
 * - "Clover's old dim eyes flitted from one face to another. Some of them had
 *   five chins, some had four, some had three." So Clover's eye is turned to
 *   the faces, and the faces are heavy with chins.
 * - "a violent quarrel was in progress. There were shoutings, bangings on the
 *   table, sharp suspicious glances, furious denials. The source of the
 *   trouble appeared to be that Napoleon and Mr. Pilkington had each played
 *   an ace of spades simultaneously." So the two stand face to face in the
 *   middle of the table, each holding up his ace of spades to the other, and
 *   every mouth at the table is open. It is a quarrel of words: the hands
 *   hold cards, and nothing is raised to strike.
 * - "Twelve voices were shouting in anger, and they were all alike. No
 *   question, now, what had happened to the faces of the pigs. The creatures
 *   outside looked from pig to man, and from man to pig, and from pig to man
 *   again; but already it was impossible to say which was which." So every
 *   face at the table is cut from ONE head (HEAD below): a pig's ear and a
 *   snout shortened almost to a nose, a man's brow and chins, and a collar
 *   and tie. Nothing in the picture says which is Napoleon and which is
 *   Pilkington, or which of the others are pigs and which are men, because
 *   the text says nothing could. Napoleon has worn "a black coat" since
 *   earlier in the chapter, and the farmers' dress is not described, so all
 *   of them wear the same dark coat.
 * - The anger is the spot colour: the same three short strokes of red on
 *   every cheek, never on a mouth or chin.
 *
 * Clover (hatched) is the kit's (./people.tsx), with her eye cut larger for
 * this close view. Nothing is taken from a film, a cartoon or a stage
 * production. Seeds: 3301 (the house wall), 3302 (the room), 3303 (the
 * sill), 3304 (under the table), 3305 (the laurels).
 */

const W = 860
const H = 340
/** The dining-room window: its glass, inside the frame. */
const WIN = { x0: 262, x1: 826, y0: 24, y1: 236 }
/**
 * Clover outside the window: where she stands, her scale, and how far her
 * head is raised. She is cut off at the chest by the foot of the picture:
 * she was first set so that a hand's breadth of her legs showed below her
 * body, and at this size, ink on the night-dark garden, they printed as four
 * thin outlines, stick legs under a block (review, 27 September 2026).
 */
const CLOVER = { at: [84, 442] as [number, number], s: 1.9, head: -22 }
/** The top of the long table, seen from the window. */
const TABLE = 184

type Marks = {
  wall: string
  room: string
  sill: string
  underTable: string
  laurels: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The house wall at night, lit only where the window's light spills on it.
  const wall = gougeField(
    rng(3301),
    { x0: 0, x1: W, y0: 4, y1: H },
    (x, y) => {
      const dx = x < WIN.x0 ? WIN.x0 - x : x > WIN.x1 ? x - WIN.x1 : 0
      const dy = y < WIN.y0 ? WIN.y0 - y : y > WIN.y1 ? y - WIN.y1 : 0
      return clamp(0.4 - Math.hypot(dx, dy) / 110) * 0.9
    },
    { len: [10, 44] },
  )
  // Cut in ink over paper, so `light` here is how dark the room falls.
  const room = gougeField(
    rng(3302),
    { x0: WIN.x0, x1: WIN.x1, y0: WIN.y0, y1: TABLE },
    (x, y) => clamp(Math.hypot((x - 544) * 0.8, (y - 70) * 1.2) / 330 - 0.1),
    { spacing: 7, max: 2.6, len: [16, 60], gap: [8, 26] },
  )
  let sill = ''
  const s = rng(3303)
  for (let x = WIN.x0 - 14; x < WIN.x1 + 14; x += between(s, 14, 30))
    sill += gouge(x, 250, x + between(s, 8, 20), 250 + between(s, -0.4, 0.4), 0.6)
  // The dark under the table: a few pale cuts of the floorboards.
  const underTable = gougeField(
    rng(3304),
    { x0: WIN.x0, x1: WIN.x1, y0: TABLE + 24, y1: WIN.y1 },
    (x) => clamp(0.3 - Math.abs(x - 544) / 900),
    { spacing: 6, len: [20, 70] },
  )
  // Laurel bushes along the foot of the wall: leaves cut round each bush's
  // crown, pointing outwards, where the window's light catches them.
  const l = rng(3305)
  let laurels = ''
  for (const [cx, r] of [
    [318, 44],
    [420, 52],
    [540, 46],
    [650, 50],
    [764, 46],
  ]) {
    for (let i = 0; i < 46; i++) {
      const a = between(l, -Math.PI + 0.25, -0.25)
      const rad = r * Math.sqrt(between(l, 0.15, 1))
      const x = cx + Math.cos(a) * rad
      const y = 344 + Math.sin(a) * rad * 0.9
      if (l() > 0.3 + 0.7 * (rad / r)) continue
      const o = a + between(l, -0.5, 0.5)
      const len = between(l, 8, 13)
      laurels += gouge(x, y, x + Math.cos(o) * len, y + Math.sin(o) * len, between(l, 1.8, 2.8))
    }
  }
  cached = { wall, room, sill, underTable, laurels }
  return cached
}

// ── THE FACES AT THE TABLE ──────────────────────────────────────────────────
// One head for all twelve, pig and man alike, because the text will not let
// them be told apart. In profile facing right, centred near (0, 0): the ear's
// tip at y -47, the collar at y 38. The face is cut in paper, lit by the
// room, and outlined in ink.

/**
 * The head, bald as a pig and as a man: a man's brow over a snout that has
 * shortened almost to a nose, its end still flat; the mouth open in a shout;
 * three chins, and a thick neck.
 */
const HEAD =
  'M-15 32C-24 22 -29 8 -27 -6C-25 -19 -16 -28 -6 -28C4 -30 12 -28 16 -22C19 -18 20 -13 20 -9L24 -8C29 -8 33 -7 36 -6L38 -5.4L38.6 3L34 4.2C30 5 27 5 25 5L22.4 7L15.6 10.4L27.6 13.8C27.4 17 24.6 18.4 21.6 18.4C24.4 20.4 23 23.4 19.6 23.6C22 26.4 19.6 29.4 15 29.4C10 32.4 2 34 -4 34Z'
/** A pig's ear, broad and standing up from the crown, tipped forward. */
const EAR = 'M-17 -19C-16 -31 -8 -41 5 -47C6 -37 2 -28 -4 -21Z'
const EAR_LINE = 'M-12 -22C-9 -30 -4 -36 2 -41'
/** The open mouth, in ink. */
const MOUTH = 'M22.8 7.2L15.6 10.4L27.2 13.6C24 12 22 10.4 22.8 7.2Z'
/** Ink cuts into the paper face: the heavy scowling brow, the eye, the nostril. */
const FACE_INK =
  gouge(5, -16.5, 21, -10.5, 1.5, 0.4) +
  'M8.6 -8.6Q12.2 -11.2 16 -9Q12.4 -6.8 8.6 -8.6Z' +
  'M36.2 -2.6Q37.6 -3 37.6 -0.6Q37.6 1.6 36.2 1.2Q35.2 -0.6 36.2 -2.6Z'
/** Fine ink lines: the fold from snout to mouth, the chins, the jowl. */
const FACE_LINES =
  'M25 -5C22 -1 19 3 17 7M20.6 18.4C18 19 15.4 18.4 13.4 16.8M19 23.6C16 24.4 13 23.8 10.6 22M14.6 29.2C11 29.6 7.6 28.8 5 27M-4 4C-6 12 -5 20 -1 27'
/**
 * The flush of anger: three short strokes on the cheek below the eye, never
 * on the mouth or chin, and never a round spot (a round red cheek reads as a
 * clown's; see the Jekyll and Hyde kit).
 */
const FLUSH = 'M0.6 4L3.4 -0.4M4.4 4.6L7.2 0.2M8.2 5.2L11 0.8'
/** A starched collar and the knot of a tie, at the throat. */
const COLLAR = 'M-3 30L16 29L18 36L-2 38Z'
const TIE = 'M5 34L11 33.6L10.4 40L6 40.4Z'

/** The head at `at`, facing right (1) or left (-1). */
function Face({ at, facing, scale = 1 }: { at: [number, number]; facing: 1 | -1; scale?: number }) {
  return (
    <g transform={`translate(${at[0]} ${at[1]}) scale(${facing * scale} ${scale})`}>
      <path d={HEAD} fill={PAPER} stroke={INK} strokeWidth={1.6 / scale} strokeLinejoin="round" />
      <path d={EAR} fill={PAPER} stroke={INK} strokeWidth={1.4 / scale} strokeLinejoin="round" />
      <path d={EAR_LINE} fill="none" stroke={INK} strokeWidth={0.8 / scale} />
      <path d={FLUSH} fill="none" stroke={RED} strokeWidth={2 / scale} strokeLinecap="round" />
      <path d={MOUTH + FACE_INK} fill={INK} />
      <path
        d={FACE_LINES}
        fill="none"
        stroke={INK}
        strokeWidth={0.9 / scale}
        strokeLinecap="round"
      />
      <path d={COLLAR} fill={PAPER} stroke={INK} strokeWidth={1 / scale} strokeLinejoin="round" />
      <path d={TIE} fill={INK} />
    </g>
  )
}

/** A dark coat on a figure standing at the table, in the head's frame. */
const STANDING_COAT =
  'M-18 26C-30 34 -38 56 -40 84C-41 104 -39 124 -36 140L36 140C38 118 36 94 30 72C26 52 20 38 12 30C4 33 -8 32 -18 26Z'
const STANDING_CUTS =
  gouge(-28, 48, -32, 132, 1.1, -1.4) + gouge(18, 46, 26, 132, 0.9, 1) + gouge(6, 40, 8, 136, 0.7)
/** The near arm, reaching over the table with the card held up. */
const STANDING_ARM = 'M2 50C10 64 22 72 40 70'
/** Head and shoulders of a seated figure, the table hiding the rest. */
const SEATED_COAT = 'M-18 26C-30 32 -40 46 -44 66L38 66C36 48 24 34 12 30C4 33 -8 32 -18 26Z'

/**
 * A card held up to be seen: the ace of spades, face out, gripped at its
 * edge with the thumb over it, so the hand behind it (a hand or a trotter:
 * the text will not say) is never drawn.
 */
function HeldAce({ at, facing, rot }: { at: [number, number]; facing: 1 | -1; rot: number }) {
  return (
    <g transform={`translate(${at[0]} ${at[1]}) rotate(${rot}) scale(${facing} 1)`}>
      <rect
        x={-11}
        y={-17}
        width={22}
        height={32}
        rx={2}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.4}
      />
      <path
        d="M0 -8C-4 -3.4 -7.4 -1 -7.4 2.2C-7.4 5 -4.4 5.8 -1.6 3.8L-2.8 7.6H2.8L1.6 3.8C4.4 5.8 7.4 5 7.4 2.2C7.4 -1 4 -3.4 0 -8Z"
        fill={INK}
      />
      <path d="M-8.4 -14.6L-6.6 -10.4M-7.6 -12.2H-5" stroke={INK} strokeWidth={0.8} />
      <path
        d="M-13 8C-12 5 -9 4.4 -7 5.6C-5.6 7 -6.4 9.6 -9 10.4Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={0.8}
      />
    </g>
  )
}

function FromPigToMan({ uid }: ArtProps) {
  const m = marks()
  const glass = `${uid}-glass`
  // The two in the middle of the table, face to face: one is Napoleon and
  // one is Mr Pilkington, and the picture, like the text, cannot say which.
  const left: [number, number] = [468, 74]
  const right: [number, number] = [620, 74]
  const seated: [number, number, 1 | -1][] = [
    [326, 128, 1],
    [412, 134, 1],
    [682, 134, -1],
    [774, 128, -1],
  ]
  const standing = (at: [number, number], facing: 1 | -1) => (
    <g transform={`translate(${at[0]} ${at[1]}) scale(${facing} 1)`}>
      <Cut parts={[{ d: STANDING_COAT }]} cuts={STANDING_CUTS} halo={1.8} />
    </g>
  )
  const arm = (at: [number, number], facing: 1 | -1): Part => ({
    d: STANDING_ARM,
    w: 11,
    t: `translate(${at[0]} ${at[1]}) scale(${facing} 1)`,
  })
  const bars = `M${WIN.x0} 44H${WIN.x1}M372 44V${WIN.y1}M716 44V${WIN.y1}`
  return (
    <>
      <defs>
        <clipPath id={glass}>
          <rect x={WIN.x0} y={WIN.y0} width={WIN.x1 - WIN.x0} height={WIN.y1 - WIN.y0} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [540, 120], push: 1.04 })}>
        <path d={m.wall} fill={PAPER} />
        {/* the lit room */}
        <g clipPath={`url(#${glass})`}>
          <rect
            x={WIN.x0}
            y={WIN.y0}
            width={WIN.x1 - WIN.x0}
            height={TABLE - WIN.y0}
            fill={PAPER}
          />
          <path d={m.room} fill={INK} />
          {/* the company: four seated round the table, two standing face to face */}
          {seated.map(([x, y, f]) => (
            <g key={x}>
              <g transform={`translate(${x} ${y}) scale(${f * 0.84} 0.84)`}>
                <Cut parts={[{ d: SEATED_COAT }]} halo={1.8} />
              </g>
              <Face at={[x, y]} facing={f} scale={0.84} />
            </g>
          ))}
          {standing(left, 1)}
          <Face at={left} facing={1} />
          {standing(right, -1)}
          <Face at={right} facing={-1} />
          {/* the long table */}
          <rect x={WIN.x0} y={TABLE} width={WIN.x1 - WIN.x0} height={WIN.y1 - TABLE} fill={INK} />
          <path d={`M${WIN.x0} ${TABLE}H${WIN.x1}V${TABLE + 12}H${WIN.x0}Z`} fill={PAPER} />
          <path d={`M${WIN.x0} ${TABLE + 12}H${WIN.x1}`} stroke={INK} strokeWidth={LINE.bold} />
          <path d={m.underTable} fill={PAPER} />
          {/* the large jug, the mugs of beer, and the cards of the interrupted game */}
          <g fill={PAPER} stroke={INK} strokeWidth={1.4} strokeLinejoin="round">
            <path d="M436 188L438 164C438 158 442 155 447 155L446 150H454L453 155C458 155 462 158 462 164L464 188Z" />
            <path d="M696 172H710V190H696Z" />
            <path d="M790 172H804V190H790Z" />
          </g>
          <path
            d="M462 166C470 166 470 180 463 180M710 176C716 176 716 184 710 184M804 176C810 176 810 184 804 184"
            fill="none"
            stroke={INK}
            strokeWidth={2}
          />
          <path d="M441 170H459" stroke={INK} strokeWidth={1} />
          <g fill={PAPER} stroke={INK} strokeWidth={1}>
            <path d="M520 186L536 184L537 190L521 192Z" />
            <path d="M560 185L575 187L574 193L559 191Z" />
            <path d="M388 188L402 186L403 191L389 193Z" />
          </g>
          {/* their arms over the table, each holding up his ace of spades */}
          <Cut parts={[arm(left, 1), arm(right, -1)]} halo={1.8} />
          <g className="lc-fade-in" style={timing({ delay: 1, dur: 0.6 })}>
            <HeldAce at={[520, 132]} facing={1} rot={-6} />
            <HeldAce at={[568, 132]} facing={-1} rot={6} />
          </g>
        </g>
        {/* the window frame, its transom and two glazing bars */}
        <path
          d={`M${WIN.x0} ${WIN.y0}H${WIN.x1}V${WIN.y1}H${WIN.x0}Z`}
          fill="none"
          stroke={INK}
          strokeWidth={10}
        />
        <path d={bars} stroke={PAPER} strokeWidth={8} />
        <path d={bars} stroke={INK} strokeWidth={5} />
        {/* the sill, and the laurels in the garden below it */}
        <path d={`M${WIN.x0 - 16} 240H${WIN.x1 + 16}V256H${WIN.x0 - 16}Z`} fill={PAPER} />
        <path d={m.sill} fill={INK} />
        <path d={`M${WIN.x0 - 16} 256H${WIN.x1 + 16}`} stroke={INK} strokeWidth={LINE.bold} />
        <path d={m.laurels} fill={PAPER} />

        {/* Clover, outside in the dark, her old eye at the glass */}
        <Horse at={CLOVER.at} s={CLOVER.s} who="clover" headDown={CLOVER.head} uid={uid} />
        <g transform={place(CLOVER.at, CLOVER.s)}>
          <g transform={`rotate(${CLOVER.head} 40 -104)`}>
            <path d="M73.6 -146.8Q78.4 -150 83 -145.2Q78.2 -143.2 73.6 -146.8Z" fill={PAPER} />
            <circle cx={80} cy={-146} r={1.3} fill={INK} />
            <path d="M73 -148Q78.4 -151.6 83.6 -146.4" fill="none" stroke={INK} strokeWidth={1} />
          </g>
        </g>
      </g>
    </>
  )
}

export const fromPigToMan: LinocutArt = { width: W, height: H, Draw: FromPigToMan }
