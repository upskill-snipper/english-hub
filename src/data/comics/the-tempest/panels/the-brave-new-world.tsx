import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gougeField, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, type P } from './people'
import { Cell, LimeTree } from './the-cell'

/**
 * Act 5, Scene 1: "The brave new world", the thirteenth moment in the guide's
 * timeline. Every detail is from the scene in the held edition (Project
 * Gutenberg #1540, src/data/full-texts/the-tempest.ts):
 *
 * - "This cell's my court ... pray you, look in ... bring forth a wonder" and
 *   "Here Prospero discovers Ferdinand and Miranda playing at chess." So the
 *   chessboard stands on a small table at the door of the cell, the game left
 *   on it and the two stools empty: both players have risen.
 * - "[Kneels to Alonso.] Now all the blessings Of a glad father compass thee
 *   about! Arise". Ferdinand has risen, and his father holds his hand in
 *   both of his. (His hands were first laid on his son's shoulders; in
 *   profile they fell at the neck, and could be read as a grip on the
 *   throat.)
 * - "O, wonder! How many goodly creatures are there here! How beauteous
 *   mankind is! O brave new world That has such people in 't!" Miranda, in
 *   front of the cell, lifts both open hands, the elbows bent and the hands
 *   no higher than her face, and looks at the strangers.
 * - "'Tis new to thee." Prospero stands by his cell and watches her, a hand
 *   held out to her. He has sent Ariel for "the hat and rapier in my cell",
 *   and put off his magic garment, "I will discase me, and myself present As
 *   I was sometime Milan", so he wears the Duke of Milan's hat over his white
 *   hair and a rapier at his hip (the kit's `duke`), and no mantle. The scene
 *   does not name his staff again after "I'll break my staff", so as the Duke
 *   he is drawn without it.
 * - Gonzalo, "the good old lord", white-bearded under his cap: "I have inly
 *   wept, Or should have spoke ere this". His hands are clasped and his eyes
 *   cast down.
 * - Sebastian: "A most high miracle!" He lifts an open hand.
 * - Antonio, whom Prospero has forgiven ("I do forgive Thy rankest fault"),
 *   never answers him, and says nothing more in the scene but a sneer. He
 *   stands apart on the right, turned away from them all.
 * - The court are in the wedding clothes they wore "at the marriage of the
 *   King's fair daughter Claribel" (2.1), as the kit dresses them. Their
 *   rapiers are left off here: in a row of seven, the sheathed blades of
 *   Sebastian and Antonio met between them like crossed swords, and only
 *   Prospero's is named in the scene. The evening is drawing on: Prospero invites them to rest in his cell "For
 *   this one night". So the sun has gone and the sky darkens from the top.
 *
 * The spot colour is the chessmen: the "wonder" Prospero brings forth, at the
 * moment it is shown, and well away from any face.
 *
 * Ariel has gone to the ship ("To the King's ship, invisible as thou art"),
 * and the Boatswain, Caliban, Stephano and Trinculo, who are in the guide's
 * summary of this moment, come on after Miranda speaks, so none of them is in
 * this picture.
 *
 * Seeds: 4301 (sky), 4302 (sea), 4303 (ground).
 */

const W = 860
const H = 340
const GROUND = 330
const HORIZON = 194
const edge = (x: number) => 240 + 4 * Math.sin(x / 43 + 2)

type Marks = {
  sky: string
  sea: string
  land: string
  ground: string
  tufts: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The evening sky, cut as the block cuts light: an ink ground with paper
  // cuts that widen towards the horizon, where the last light lies.
  const sky = gougeField(
    rng(4301),
    { x0: 0, x1: W, y0: 2, y1: HORIZON + 2 },
    (x, y) => clamp(0.3 + (y / HORIZON) ** 1.4 * 0.74),
    { spacing: 7, len: [40, 150], gap: [6, 20], max: 4.2 },
  )
  const sea = gougeField(
    rng(4302),
    { x0: 0, x1: W, y0: HORIZON + 3, y1: 254 },
    (x, y) => clamp(0.36 - ((y - HORIZON) / 60) * 0.12),
    { spacing: 5, len: [30, 90], gap: [8, 26], max: 1.8 },
  )
  let land = `M-10 ${H + 10}L-10 ${n(edge(0))}`
  for (let x = 0; x <= W + 10; x += 8) land += `L${x} ${n(edge(x))}`
  land += `L${W + 10} ${H + 10}Z`
  const g = rng(4303)
  const ground = gougeField(
    g,
    { x0: 0, x1: W, y0: 246, y1: H },
    (x, y) => clamp(((y - 240) / 100) ** 1.5 * 0.5 + 0.06),
    { spacing: 6, len: [10, 46], gap: [14, 44], max: 2 },
  )
  let tufts = ''
  for (let i = 0; i < 60; i++) {
    const x = between(g, 0, W)
    const y = between(g, edge(x) + 6, H - 2)
    const h = 3 + clamp((y - 240) / 100) * 7
    tufts += `M${n(x - 2.4)} ${n(y)}l${n(-1.2)} ${n(-h)}M${n(x)} ${n(y)}l0 ${n(-h * 1.25)}M${n(x + 2.4)} ${n(y)}l${n(1.6)} ${n(-h)}`
  }
  cached = { sky, sea, land, ground, tufts }
  return cached
}

// ── The game of chess ────────────────────────────────────────────────────────

/**
 * The chess table, in its own frame: its feet on the ground at y 0, its
 * middle at x 0, the top 46 wide at y -40. The board is seen a little from
 * above, its far edge raised, in two rows of squares, ink and paper, with the
 * pieces standing on it in the spot colour.
 */
const TABLE_TOP = 'M-26 -42L26 -42L28 -37L-28 -37Z'
const TABLE_LEGS = 'M-22 -37L-23 0M22 -37L23 0M-6 -37L-6 -2M6 -37L6 -2M-22 -14L22 -14'
const BOARD = 'M-20 -43L20 -43L16 -52L-16 -52Z'
/** The dark squares of the board, two rows of six, the far row narrower. */
const SQUARES = [0, 1, 2, 3, 4, 5]
  .flatMap((i) => {
    const near = (k: number) => -20 + (40 * k) / 6
    const mid = (k: number) => -18 + (36 * k) / 6
    const far = (k: number) => -16 + (32 * k) / 6
    const cells: string[] = []
    if (i % 2 === 0)
      cells.push(
        `M${n(near(i))} -43L${n(near(i + 1))} -43L${n(mid(i + 1))} -47.5L${n(mid(i))} -47.5Z`,
      )
    else
      cells.push(
        `M${n(mid(i))} -47.5L${n(mid(i + 1))} -47.5L${n(far(i + 1))} -52L${n(far(i))} -52Z`,
      )
    return cells
  })
  .join('')
/** A chessman standing at (x, y): a round head on a waisted body and a broad foot. */
const man = (x: number, y: number, h: number) =>
  `M${n(x - 2.6)} ${n(y)}L${n(x + 2.6)} ${n(y)}L${n(x + 1.6)} ${n(y - 2)}L${n(x + 1)} ${n(y - h + 3)}` +
  `A2 2 0 1 0 ${n(x - 1)} ${n(y - h + 3)}L${n(x - 1.6)} ${n(y - 2)}Z`
const PIECES =
  man(-12, -46, 9) + man(-4, -49, 8) + man(9, -47, 10) + man(14, -50, 7) + man(2, -45, 8)

/** A low three-legged stool, its seat at y -26, in its own frame. */
const STOOL = 'M-11 -28L11 -28L10 -24L-10 -24ZM-8 -24L-11 0M8 -24L11 0M0 -24L0 -2'

function ChessTable({ at }: { at: P }) {
  return (
    <g transform={`translate(${n(at[0])} ${n(at[1])})`}>
      {/* the two stools, left empty */}
      {[-40, 40].map((x) => (
        <g key={x} transform={`translate(${x} 0)`} strokeLinecap="round" strokeLinejoin="round">
          <path d={STOOL} fill={PAPER} stroke={PAPER} strokeWidth={6.8} />
          <path d={STOOL} fill={INK} stroke={INK} strokeWidth={3.4} />
        </g>
      ))}
      {/* the table, cut free of the dark doorway behind by a paper edge */}
      <path d={TABLE_LEGS} stroke={PAPER} strokeWidth={7.4} strokeLinecap="round" fill="none" />
      <path d={TABLE_LEGS} stroke={INK} strokeWidth={3.6} strokeLinecap="round" fill="none" />
      <path d={TABLE_TOP} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      {/* the board, and the game left standing on it */}
      <path d={BOARD} fill={PAPER} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
      <path d={SQUARES} fill={INK} />
      <path d={PIECES} fill={RED} stroke={INK} strokeWidth={1} strokeLinejoin="round" />
    </g>
  )
}

const PROSPERO: P = [72, GROUND]
const MIRANDA: P = [292, GROUND]
const FERDINAND: P = [420, GROUND]
const ALONSO: P = [486, GROUND]
const GONZALO: P = [566, GROUND]
const SEBASTIAN: P = [646, GROUND]
const ANTONIO: P = [776, GROUND]

function TheBraveNewWorld({ uid }: ArtProps) {
  const m = marks()
  const seaClip = `${uid}-sea`
  return (
    <>
      <defs>
        <clipPath id={seaClip}>
          <rect x={0} y={HORIZON} width={W} height={70} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [430, 220], push: 1.03 })}>
        <rect x={0} y={0} width={W} height={HORIZON} fill={INK} />
        <rect x={0} y={HORIZON} width={W} height={H - HORIZON} fill={PAPER} />
        <path d={m.sky} fill={PAPER} />
        <g clipPath={`url(#${seaClip})`}>
          <path d={m.sea} fill={INK} />
        </g>
        <path d={`M0 ${HORIZON}H${W}`} stroke={INK} strokeWidth={LINE.fine} />

        {/* the ground before the cell */}
        <path d={m.land} fill={PAPER} />
        <path d={m.land} fill="none" stroke={INK} strokeWidth={LINE.bold} />
        <path d={m.ground} fill={INK} />
        <path d={m.tufts} stroke={INK} strokeWidth={1.3} strokeLinecap="round" />
        <LimeTree at={[26, 302]} scale={0.8} />
        <Cell at={[150, 304]} scale={0.92} />

        {/* the game they were discovered at, left on its table at the door */}
        <g className="lc-fade-in" style={timing({ delay: 0.3, dur: 1 })}>
          <ChessTable at={[188, 318]} />
        </g>

        {/* Prospero as the Duke of Milan, by his cell, watching her */}
        <Person
          at={PROSPERO}
          scale={1.14}
          pose={{
            look: 'prospero',
            duke: true,
            head: { rot: 4 },
            far: {
              pts: [
                [-4, -130],
                [-6, -102],
                [-2, -80],
              ],
            },
            near: {
              pts: [
                [5, -128],
                [20, -110],
                [40, -106],
              ],
              hand: 'open',
              deg: 2,
              thumb: -1,
            },
          }}
        />

        {/* Miranda: "O, wonder!" */}
        <Person
          at={MIRANDA}
          scale={1.2}
          pose={{
            look: 'miranda',
            head: { rot: -8 },
            far: {
              pts: [
                [-3, -124],
                [10, -108],
                [20, -122],
              ],
              hand: 'open',
              deg: -64,
              thumb: -1,
            },
            near: {
              pts: [
                [3, -124],
                [18, -110],
                [32, -120],
              ],
              hand: 'open',
              deg: -40,
              thumb: -1,
            },
          }}
        />

        {/* Ferdinand, risen, and his father holding his hand in both of his */}
        <Person
          at={FERDINAND}
          scale={1.12}
          pose={{
            look: 'ferdinand',
            head: { rot: 6 },
            cloak: 0,
            far: {
              pts: [
                [-4, -128],
                [-4, -100],
                [2, -78],
              ],
            },
            near: {
              pts: [
                [5, -128],
                [14, -104],
                [30, -100],
              ],
              deg: -4,
            },
          }}
        />
        <Person
          at={ALONSO}
          scale={1.1}
          flip
          pose={{
            look: 'alonso',
            head: { rot: 8 },
            far: {
              pts: [
                [-4, -130],
                [12, -112],
                [26, -110],
              ],
              deg: 6,
            },
            near: {
              pts: [
                [5, -130],
                [14, -108],
                [28, -98],
              ],
              deg: -6,
            },
          }}
        />

        {/* Gonzalo, who has "inly wept", his hands clasped */}
        <Person
          at={GONZALO}
          scale={1.12}
          flip
          pose={{
            look: 'gonzalo',
            head: { rot: 8 },
            eye: 'down',
            far: {
              pts: [
                [-4, -128],
                [8, -106],
                [16, -116],
              ],
              hand: 'mitt',
              deg: -70,
            },
            near: {
              pts: [
                [4, -128],
                [14, -104],
                [18, -115],
              ],
              hand: 'mitt',
              deg: -80,
            },
          }}
        />

        {/* Sebastian: "A most high miracle!" */}
        <Person
          at={SEBASTIAN}
          scale={1.1}
          flip
          pose={{
            look: 'sebastian',
            head: { rot: -2 },
            cloak: 2,
            far: {
              pts: [
                [-4, -128],
                [-6, -100],
                [-2, -76],
              ],
            },
            near: {
              pts: [
                [5, -128],
                [18, -110],
                [30, -118],
              ],
              hand: 'open',
              deg: -50,
              thumb: -1,
            },
          }}
        />

        {/* Antonio, who does not answer, apart and turned away */}
        <Person
          at={ANTONIO}
          scale={1.1}
          pose={{
            look: 'antonio',
            head: { rot: 8 },
            eye: 'down',
            far: {
              pts: [
                [-4, -128],
                [-6, -100],
                [-2, -78],
              ],
            },
            near: {
              pts: [
                [5, -128],
                [8, -100],
                [6, -78],
              ],
            },
          }}
        />
      </g>
    </>
  )
}

export const theBraveNewWorld: LinocutArt = {
  width: W,
  height: H,
  Draw: TheBraveNewWorld,
}
