import type { LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, rays, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, type P } from './people'

/**
 * Act 2, Scene 1: "The masked ball", the third moment in the guide's
 * timeline. Every detail is from the scene in the held edition (Project
 * Gutenberg #1519, src/data/full-texts/much-ado-about-nothing.ts):
 *
 * - "A hall in Leonato's house." "The revellers are entering, brother: make
 *   good room." "Enter Don Pedro, Claudio, Benedick, Balthasar, Don John,
 *   Borachio, Margaret, Ursula and Others, masked." It is the night of the
 *   supper ("I know we shall have revelling tonight", 1.1), so the hall is lit
 *   by torches on the walls, their flames the spot colour, and every man at
 *   the revels wears a visor. Hero and Beatrice were in the hall before the
 *   maskers came, and are not masked.
 * - "Lady, will you walk about with your friend?"; "Speak low, if you speak
 *   love. [Takes her aside.]" On the left Don Pedro, masked and so without his
 *   circlet (he woos "in some disguise", 1.1), bends his head to Hero, small,
 *   her plait over her shoulder, and holds out his hand to her. She looks up
 *   at him.
 * - "We must follow the leaders." "[Dance.]" Behind them the dance goes on,
 *   and in it Beatrice, unmasked, her hair in its caul, faces a masked man
 *   with a beard below his visor: Benedick, whom she calls "the Prince's
 *   jester" to his face.
 * - "And that is Claudio: I know him by his bearing." Claudio, masked, stands
 *   apart in the middle watching the Prince take Hero aside. On the right, in
 *   the shadow between the torches, Don John, in his tall hat and visor, his
 *   arms folded, and Borachio, masked, watch Claudio; Borachio points him out.
 *   Don John's lie, "he is enamoured on Hero", comes once the dance is done;
 *   the panel shows the moment before it, with everyone in it who is in the
 *   hall, and the quotation gives what Claudio makes of it.
 *
 * Leonato, Antonio, Margaret, Ursula and Balthasar are in the hall too and
 * are not drawn, so that the four faces the moment turns on can be read. The
 * people are cut from ./people.tsx. Nothing is taken from a film, television
 * or stage production. Seeds: 1301 (wall), 1302 (floor), 1303 and 1304 (the
 * torches' light).
 */

const W = 860
const H = 340
/** The foot of the back wall. */
const FLOOR = 250
/** The feet of the near figures, and of the dancers further back. */
const FEET = 324
const BACK = 282
/** The torches' flames, on the back wall. */
const TORCHES: P[] = [
  [318, 104],
  [640, 110],
]

type Marks = { wall: string; floor: string; glow: string[]; shadows: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const lit = (x: number, y: number) =>
    Math.max(
      ...TORCHES.map(([tx, ty]) =>
        clamp(1 - Math.hypot((x - tx) * 0.8, (y - ty - 30) * 0.9) / 190),
      ),
      0.04,
    )
  const wall = gougeField(rng(1301), { x0: 0, x1: W, y0: 6, y1: FLOOR - 2 }, lit, {
    spacing: 6,
    len: [22, 70],
    gap: [4, 14],
    max: 4,
  })
  // The floor: strewn and lit in pools under the torches, dark in the corners.
  const floor = gougeField(
    rng(1302),
    { x0: 0, x1: W, y0: FLOOR + 4, y1: H },
    (x, y) =>
      Math.max(
        ...TORCHES.map(([tx]) => clamp(1 - Math.hypot((x - tx) * 0.55, y - FLOOR) / 150) * 0.9),
        0.08,
      ),
    { spacing: 6, len: [18, 60], gap: [6, 18], max: 3.4 },
  )
  const glow = TORCHES.map(([x, y], i) =>
    rays(rng(1303 + i), x, y, { from: 18, to: 88, every: 8, width: 3 }),
  )
  let shadows = ''
  const r = rng(1305)
  for (const [x, y, w] of [
    [184, FEET, 60],
    [436, BACK, 40],
    [566, FEET, 34],
    [690, FEET, 34],
    [790, FEET, 34],
  ] as [number, number, number][])
    for (let k = 0; k < 3; k++)
      shadows += gouge(
        x - w,
        y + 1 + k * 3,
        x + w,
        y + 1.4 + k * 3 + between(r, -0.4, 0.4),
        2 - k * 0.5,
      )
  cached = { wall, floor, glow, shadows }
  return cached
}

/** A torch in its iron bracket on the wall, the flame at (x, y). */
function Torch({ at: [x, y], i }: { at: P; i: number }) {
  return (
    <g>
      <path
        d={`M${x - 3} ${y + 10}L${x + 3} ${y + 10}L${x + 2.5} ${y + 44}L${x - 2.5} ${y + 44}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={`M${x - 12} ${y + 38}H${x}`} stroke={PAPER} strokeWidth={LINE.bold} />
      <path
        d={`M${x - 7} ${y + 2}H${x + 7}V${y + 11}H${x - 7}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.4}
      />
      <path
        className="lc-flicker"
        style={timing({ dur: 0.7 + i * 0.1, delay: i * 0.2 })}
        d={`M${x} ${y + 3}C${x - 10} ${y - 1} ${x - 8} ${y - 13} ${x - 2} ${y - 28}C${x + 1} ${y - 19} ${x + 4} ${y - 17} ${x + 4} ${y - 23}C${x + 10} ${y - 11} ${x + 10} ${y - 1} ${x} ${y + 3}Z`}
        fill={RED}
        stroke={PAPER}
        strokeWidth={1}
      />
    </g>
  )
}

function TheMaskedBall() {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [470, 220], push: 1.03 })}>
      <path d={m.wall} fill={PAPER} />
      <path d={`M0 ${FLOOR}H${W}`} stroke={PAPER} strokeWidth={LINE.bold} />
      <path d={m.floor} fill={PAPER} />
      {m.glow.map((d, i) => (
        <g key={i} className="lc-fade-in" style={timing({ dur: 1.2, delay: i * 0.2 })}>
          <path d={d} fill={PAPER} />
        </g>
      ))}
      {TORCHES.map((t, i) => (
        <Torch key={t[0]} at={t} i={i} />
      ))}
      <path d={m.shadows} fill={INK} />

      {/*
        The dance behind: Beatrice, unmasked, and a bearded man in a visor,
        their hands raised palm to palm as the measure brings them together.
        Their hands were first held up at the chest, apart, and at phone
        width the two small hands facing each other read as fists raised
        for a fight (review, 26 September 2026).
      */}
      <Person
        at={[400, BACK]}
        scale={0.78}
        pose={{
          look: 'beatrice',
          head: { rot: -6 },
          far: {
            pts: [
              [-3, -124],
              [-10, -102],
              [-4, -94],
            ],
          },
          near: {
            pts: [
              [3, -124],
              [24, -114],
              [42, -128],
            ],
            hand: 'open',
            deg: -72,
            thumb: -1,
            size: 17,
            spread: 16,
          },
        }}
      />
      <Person
        at={[474, BACK]}
        scale={0.78}
        flip
        pose={{
          look: 'benedick',
          masked: true,
          far: {
            pts: [
              [-4, -128],
              [-8, -100],
              [-4, -76],
            ],
          },
          near: {
            pts: [
              [5, -128],
              [24, -116],
              [40, -134],
            ],
            hand: 'open',
            deg: -72,
            thumb: 1,
            size: 17,
            spread: 16,
          },
        }}
      />

      {/* Don Pedro, masked, takes Hero aside */}
      <Person
        at={[150, FEET]}
        pose={{
          look: 'don-pedro',
          masked: true,
          bare: true,
          head: { at: [8, -158], rot: 16 },
          far: {
            pts: [
              [-4, -128],
              [-10, -100],
              [-6, -74],
            ],
          },
          near: {
            pts: [
              [5, -128],
              [18, -104],
              [36, -104],
            ],
            hand: 'open',
            deg: -8,
            thumb: -1,
          },
        }}
      />
      <Person
        at={[224, FEET]}
        flip
        pose={{
          look: 'hero',
          head: { rot: -14 },
          far: {
            pts: [
              [-3, -126],
              [-2, -104],
              [8, -96],
            ],
          },
          near: {
            pts: [
              [3, -126],
              [8, -104],
              [14, -98],
            ],
          },
        }}
      />

      {/* Claudio, masked, apart, watching them */}
      <Person
        at={[566, FEET]}
        scale={1.04}
        flip
        pose={{
          look: 'claudio',
          masked: true,
          sword: true,
          head: { rot: -2 },
          far: {
            pts: [
              [-4, -128],
              [-8, -100],
              [-5, -74],
            ],
          },
          near: {
            pts: [
              [5, -128],
              [9, -100],
              [10, -74],
            ],
          },
        }}
      />

      {/* Don John and Borachio, masked, in the shadow, watching Claudio */}
      <Person
        at={[790, FEET]}
        scale={1.04}
        flip
        pose={{ look: 'don-john', masked: true, head: { rot: 4 } }}
      />
      <Person
        at={[690, FEET]}
        scale={1.06}
        flip
        pose={{
          look: 'borachio',
          masked: true,
          head: { at: [6, -158], rot: 10 },
          far: {
            pts: [
              [-4, -128],
              [-8, -100],
              [-4, -76],
            ],
          },
          near: {
            pts: [
              [5, -128],
              [22, -116],
              [40, -122],
            ],
            hand: 'point',
            deg: -8,
            thumb: 1,
          },
        }}
      />
    </g>
  )
}

export const theMaskedBall: LinocutArt = { width: W, height: H, Draw: TheMaskedBall }
