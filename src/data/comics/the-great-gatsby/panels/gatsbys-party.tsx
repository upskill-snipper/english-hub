import type { ReactNode } from 'react'

import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { coat } from '../../jekyll-and-hyde/panels/people'
import { HEAD_MAN, HEAD_WOMAN } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import {
  Cut,
  DAISY_HAIR,
  EYE,
  HAIR_LINES,
  JORDAN_HAIR,
  Person,
  seatedBody,
  seatedLegs,
  type P,
  type Part,
  type Tone,
} from './people'

/**
 * Chapter III: "Gatsby's party", the fourth moment in the guide's timeline:
 * the party as spectacle, at the moment Nick, who has just learned whom he
 * was talking to, sees his host. Every detail is from the held text (the 1925
 * first edition, src/data/full-texts/the-great-gatsby.ts):
 *
 * - "At least once a fortnight a corps of caterers came down with several
 *   hundred feet of canvas and enough colored lights to make a Christmas tree
 *   of Gatsby's enormous garden." So strings of lights hang in loops over the
 *   whole garden, between the trees and the house.
 * - "By seven o'clock the orchestra has arrived, no thin five-piece affair,
 *   but a whole pitful of oboes and trombones and saxophones and viols and
 *   cornets and piccolos, and low and high drums." So on the right the
 *   orchestra sits on its stand with a trombone, a saxophone, a viol and the
 *   big drum, with guests standing in front of it. (A leader holding up his
 *   baton stood before the stand at first, but the guests in front of it hid
 *   him and his baton was lost against the trombone, so the alt text
 *   described a man the print did not show; he was taken out on 9 October
 *   2026.)
 * - "the halls and salons and verandas are gaudy with primary colors ... The
 *   lights grow brighter as the earth lurches away from the sun". So it is
 *   night, and every window of the house (the Hôtel de Ville of Chapter I,
 *   its tower on one side, as "The green light" draws it) is lit.
 * - "There was dancing now on the canvas in the garden ... superior couples
 *   holding each other tortuously, fashionably". So couples dance upright on
 *   the pale canvas. Nobody is drawn drunk, sick or falling, and nobody
 *   swoons backward; the guests stand and talk in groups.
 * - Daisy is not at this party (she comes to one in Chapter VI), and Jordan
 *   is at the table, so no guest is cut as the kit cuts either of them: no
 *   woman here has Daisy's paper face over a white dress, and none has
 *   Jordan's pale hair with one. (The first dancing woman was cut in paper,
 *   face, arms and dress, with dark hair, and a guest by the steps had pale
 *   hair and a white dress; at panel size they read as Daisy dancing and a
 *   second Jordan, 9 October 2026.)
 * - "my eyes fell on Gatsby, standing alone on the marble steps and looking
 *   from one group to another with approving eyes ... I wondered if the fact
 *   that he was not drinking helped to set him off from his guests". So he is
 *   the one dark figure at the head of the white steps, against the lit
 *   doorway, alone, with nothing in his hands.
 * - "Dressed up in white flannels I went over to his lawn"; "I was still with
 *   Jordan Baker. We were sitting at a table". So in the foreground Nick, cut
 *   in paper for his white flannels, sits at a table with Jordan, her pale
 *   hair and her chin raised (the kit, ./people.tsx), and turns to look up at
 *   the steps. A glass stands on the table, as the text has champagne
 *   served; nobody is drinking from one.
 *
 * Red is the coloured lights, and only those: each red bulb is set in a
 * paper ring, high over the garden and away from every face, hand and the
 * water, and big enough at phone width to stay a lamp and not a speck. The
 * car in the ditch at the end of the night is not drawn. Nothing is taken
 * from a film, television or stage production. Seeds: 1401 (the stars),
 * 1402 (the lawn), 1403 (the trees).
 */

const W = 860
const H = 340
/** The house: the foot of its walls, its eaves, its ends, and the tower. */
const HOUSE = { foot: 232, eaves: 70, x0: 150, x1: 560 }
const TOWER = { x0: 104, x1: 152, top: 52, tip: 14 }
/** The lit doorway at the head of the marble steps. */
const DOOR = { x0: 314, x1: 366, top: 150 }
/** The canvas for dancing, and the orchestra's stand. */
const CANVAS = { y0: 262, y1: 300, x0: 470, x1: 704 }
const STAND = { x0: 700, x1: 852, top: 214, foot: 262 }

/** The trees at either side: round canopies, lumpy at the edge. */
const TREE_LEFT =
  'M-6 162C-20 140 -8 112 6 104C2 78 20 54 40 62C52 42 80 50 82 74C100 84 98 114 82 128C88 150 66 170 44 162C30 178 6 178 -6 162Z'
const TREE_RIGHT =
  'M866 156C880 136 870 110 856 102C860 76 842 54 822 62C810 44 784 52 782 76C766 86 768 114 784 126C780 148 800 166 820 158C834 172 856 172 866 156Z'

/** The loops of lights: each from one point to another, sagging by `sag`. */
const LOOPS: { a: P; b: P; sag: number; every: number }[] = [
  { a: [28, 44], b: [330, 30], sag: 40, every: 23 },
  { a: [330, 30], b: [640, 40], sag: 44, every: 23 },
  { a: [640, 40], b: [846, 30], sag: 34, every: 23 },
  { a: [40, 120], b: [250, 104], sag: 26, every: 24 },
]

/** Points along a hanging loop from a to b. */
function loop(a: P, b: P, sag: number, k: number): P {
  return [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k + sag * 4 * k * (1 - k)]
}

type Marks = {
  stars: string
  lawn: string
  trees: string
  wires: string
  bulbs: { at: P; red: boolean }[]
}

/**
 * A guest standing on the lawn: a lighter figure than the kit's Person, for
 * the crowd, cut from the same heads and coat (no hands: their arms hang at
 * their sides, inside the sleeve's line), so a crowd of them stays light
 * enough to send to a phone. Feet at `at`, facing right unless `flip`.
 */
function Guest({
  at,
  s,
  flip = false,
  woman = false,
  dress = 'ink',
  hair = 'ink',
}: {
  at: P
  s: number
  flip?: boolean
  woman?: boolean
  dress?: Tone
  hair?: Tone
}) {
  const neck: P = woman ? [0, -132] : [0, -138]
  const hip: P = woman ? [0, -80] : [0, -70]
  const headT = woman ? 'translate(2.5 -153)' : 'translate(3 -160)'
  const parts: Part[] = woman
    ? [
        { d: 'M-2 -80L-3 -4M3 -80L5 -4', w: 6, tone: 'ink' },
        { d: coat(neck, hip, 1, { width: 23, hem: 46, flare: 4 }), tone: dress },
        { d: HEAD_WOMAN, t: headT, tone: 'ink' },
        { d: hair === 'paper' ? JORDAN_HAIR : DAISY_HAIR, t: headT, tone: hair },
        { d: 'M3 -127L8 -103L9 -84', w: 6.2, sep: 1.3, tone: 'ink' },
      ]
    : [
        { d: 'M-3 -70L-5 -3M3 -70L6 -3', w: 10, tone: dress },
        { d: coat(neck, hip, 1, { width: 30, hem: 13, flare: 3 }), tone: dress },
        { d: HEAD_MAN, t: headT, tone: 'ink' },
        { d: 'M4 -132L8 -104L9 -82', w: 8.6, sep: 1.4, tone: dress },
      ]
  return (
    <Cut
      parts={parts}
      transform={`translate(${n(at[0])} ${n(at[1])}) scale(${n(flip ? -s : s)} ${n(s)})`}
    >
      {!woman && <path d="M4 -139L12.4 -138L9.4 -125Z" fill={PAPER} />}
      <g transform={headT}>
        <path d={EYE} fill={PAPER} />
        {!woman && <path d={HAIR_LINES} fill="none" stroke={PAPER} strokeWidth={1.2} />}
        {woman && hair === 'paper' && (
          <path
            d="M8 -13C2 -15 -6 -13 -11 -8M3 -9C-2 -8 -7 -4 -9 2"
            fill="none"
            stroke={INK}
            strokeWidth={0.8}
          />
        )}
      </g>
    </Cut>
  )
}

/**
 * Where the guests stand, in groups: x and y of their feet, scale, facing
 * left, a woman, the tone of the dress or suit, and of the hair.
 */
const GUESTS: [number, number, number, boolean, boolean, Tone, Tone][] = [
  [160, 286, 0.56, false, true, 'paper', 'ink'],
  [198, 288, 0.6, false, false, 'ink', 'ink'],
  [414, 286, 0.58, true, false, 'ink', 'ink'],
  [452, 288, 0.55, true, true, 'paper', 'ink'],
  [736, 318, 0.66, true, true, 'ink', 'paper'],
  [774, 322, 0.68, true, false, 'ink', 'ink'],
  [812, 320, 0.64, true, true, 'paper', 'ink'],
]

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const rs = rng(1401)
  let stars = ''
  for (let i = 0; i < 40; i++) {
    const x = between(rs, 10, W - 10)
    const y = between(rs, 8, 64)
    const r = between(rs, 0.8, 1.4)
    stars += `M${n(x - r)} ${n(y)}a${n(r)} ${n(r)} 0 1 0 ${n(r * 2)} 0a${n(r)} ${n(r)} 0 1 0 ${n(-r * 2)} 0Z`
  }
  // "his blue gardens": the dark lawn, lit in pools under the lights.
  const lawn = gougeField(
    rng(1402),
    { x0: 0, x1: W, y0: HOUSE.foot + 4, y1: H },
    (x, y) => Math.max(0.06, clamp(1 - Math.hypot((x - 380) * 0.6, y - 270) / 260) * 0.55),
    { spacing: 6, len: [10, 34], gap: [6, 18], max: 2.2 },
  )
  const rt = rng(1403)
  let trees = ''
  for (let i = 0; i < 70; i++) {
    const left = i % 2 === 0
    const x = left ? between(rt, 0, 70) : between(rt, 790, 860)
    const y = between(rt, 64, 156)
    trees += gouge(x, y, x + between(rt, 6, 11), y - between(rt, 2, 5), 1.1)
  }
  let wires = ''
  const bulbs: { at: P; red: boolean }[] = []
  let count = 0
  for (const L of LOOPS) {
    const len = Math.hypot(L.b[0] - L.a[0], L.b[1] - L.a[1])
    const steps = 24
    wires +=
      'M' +
      Array.from({ length: steps + 1 }, (_, i) =>
        loop(L.a, L.b, L.sag, i / steps)
          .map(n)
          .join(' '),
      ).join('L')
    const k = Math.floor(len / L.every)
    for (let i = 1; i < k; i++) {
      bulbs.push({ at: loop(L.a, L.b, L.sag, i / k), red: count % 2 === 0 })
      count++
    }
  }
  cached = { stars, lawn, trees, wires, bulbs }
  return cached
}

/**
 * A dancing couple on the canvas: he faces right and she faces him, at arm's
 * length, both hands joined low between them, each stepping. (Drawn first in
 * a close hold, their heads met and a raised hand came to her face, and at
 * panel size they read as kissing; now their heads are well apart.) Her face
 * and arms are ink whatever she wears: a paper face over a white dress is
 * how every panel cuts Daisy.
 */
function Couple({ at, s, woman }: { at: P; s: number; woman: 'paper' | 'ink' }) {
  return (
    <g>
      <Person
        at={at}
        scale={s}
        pose={{
          look: 'man',
          head: { rot: 4 },
          legs: {
            far: [
              [-3, -70],
              [-8, -36],
              [-14, -3],
            ],
            near: [
              [3, -70],
              [14, -38],
              [18, -3],
            ],
          },
          far: {
            pts: [
              [-4, -132],
              [10, -110],
              [26, -98],
            ],
            hand: 'mitt',
            deg: 0,
          },
          near: {
            pts: [
              [4, -132],
              [16, -106],
              [30, -94],
            ],
            hand: 'mitt',
            deg: 0,
          },
        }}
      />
      <Person
        at={[at[0] + 58 * s, at[1]]}
        scale={s}
        flip
        pose={{
          look: 'woman',
          dress: woman,
          skin: 'ink',
          hair: woman === 'paper' ? 'ink' : 'paper',
          head: { rot: 4 },
          legs: {
            far: [
              [-2, -80],
              [-6, -40],
              [-10, -4],
            ],
            near: [
              [2, -80],
              [10, -40],
              [14, -4],
            ],
          },
          far: {
            pts: [
              [-3, -127],
              [8, -106],
              [22, -98],
            ],
            hand: 'mitt',
            deg: 0,
          },
          near: {
            pts: [
              [3, -127],
              [12, -102],
              [26, -96],
            ],
            hand: 'mitt',
            deg: 0,
          },
        }}
      />
    </g>
  )
}

/** A seated musician on the stand, facing left towards the leader, with his instrument. */
function Musician({ at, s, children }: { at: P; s: number; children?: ReactNode }) {
  return (
    <Person
      at={at}
      scale={s}
      flip
      pose={{
        look: 'man',
        body: seatedBody(46, 4),
        head: { rot: 6 },
        legs: seatedLegs(46, 30),
        far: {
          pts: [
            [0, -108],
            [16, -92],
            [30, -98],
          ],
          hand: 'mitt',
        },
        near: {
          pts: [
            [6, -108],
            [20, -88],
            [34, -94],
          ],
          hand: 'mitt',
        },
      }}
    >
      {children}
    </Person>
  )
}

function GatsbysParty({ uid }: ArtProps) {
  const m = marks()
  const id = { house: `${uid}-house` }
  return (
    <>
      <defs>
        <clipPath id={id.house}>
          <rect
            x={TOWER.x0}
            y={TOWER.top}
            width={HOUSE.x1 - TOWER.x0}
            height={HOUSE.foot - TOWER.top}
          />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [340, 180], push: 1.03 })}>
        {/* the night over the garden */}
        <path d={m.stars} fill={PAPER} />

        {/* the house, every window lit: the tower on one side, the steep roof */}
        <path
          d={`M${TOWER.x0 - 6} ${TOWER.top}L${(TOWER.x0 + TOWER.x1) / 2} ${TOWER.tip}L${TOWER.x1 + 6} ${TOWER.top}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={`M${HOUSE.x0 - 4} ${HOUSE.eaves}L${HOUSE.x0 + 22} 40H${HOUSE.x1 - 22}L${HOUSE.x1 + 4} ${HOUSE.eaves}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <rect
          x={TOWER.x0}
          y={TOWER.top}
          width={TOWER.x1 - TOWER.x0}
          height={HOUSE.foot - TOWER.top}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <rect
          x={HOUSE.x0}
          y={HOUSE.eaves}
          width={HOUSE.x1 - HOUSE.x0}
          height={HOUSE.foot - HOUSE.eaves}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        {/* the lit windows, upper and lower, and the tower's */}
        <g fill={PAPER}>
          {[170, 200, 230, 260, 290, 390, 420, 450, 480, 510, 536].map((x) => (
            <rect key={`u${x}`} x={x} y={86} width={14} height={26} />
          ))}
          {[170, 202, 234, 266, 400, 432, 464, 496, 528].map((x) => (
            <path key={`l${x}`} d={`M${x} 192V146Q${x + 9} 136 ${x + 18} 146V192Z`} />
          ))}
          <rect x={120} y={70} width={16} height={26} />
          <rect x={120} y={124} width={16} height={34} />
          {[260, 300, 344, 388].map((x) => (
            <path key={`d${x}`} d={`M${x} 64V54L${x + 7} 47L${x + 14} 54V64Z`} />
          ))}
        </g>
        {/* the glazing of the lit windows */}
        <path
          d={[170, 202, 234, 266, 400, 432, 464, 496, 528]
            .map((x) => `M${x + 9} 140V192M${x} 168H${x + 18}`)
            .join('')}
          stroke={INK}
          strokeWidth={1.4}
        />
        {/* the doorway at the head of the steps, its light pouring out */}
        <path
          d={`M${DOOR.x0} ${HOUSE.foot}V${DOOR.top + 22}Q${(DOOR.x0 + DOOR.x1) / 2} ${DOOR.top - 6} ${DOOR.x1} ${DOOR.top + 22}V${HOUSE.foot}Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={2}
        />
        {/* the terrace's balustrade along the foot of the house */}
        <path
          d={`M${HOUSE.x0} ${HOUSE.foot - 12}H${DOOR.x0 - 16}M${DOOR.x1 + 16} ${HOUSE.foot - 12}H${HOUSE.x1}`}
          stroke={PAPER}
          strokeWidth={2.6}
        />
        <path
          d={
            Array.from(
              { length: 13 },
              (_, i) => `M${HOUSE.x0 + 6 + i * 12} ${HOUSE.foot - 10}V${HOUSE.foot}`,
            ).join('') +
            Array.from(
              { length: 15 },
              (_, i) => `M${DOOR.x1 + 20 + i * 12} ${HOUSE.foot - 10}V${HOUSE.foot}`,
            ).join('')
          }
          stroke={PAPER}
          strokeWidth={2.2}
        />

        {/* the trees at either side, holding up the strings of lights */}
        <path d="M20 236V150M840 214V150" stroke={PAPER} strokeWidth={9} />
        <path d="M20 236V150M840 214V150" stroke={INK} strokeWidth={6} />
        <g fill={INK} stroke={PAPER} strokeWidth={LINE.carve}>
          <path d={TREE_LEFT} />
          <path d={TREE_RIGHT} />
        </g>
        <path d={m.trees} fill={PAPER} />

        {/* the garden, dark and lit in pools */}
        <rect x={0} y={HOUSE.foot} width={W} height={H - HOUSE.foot} fill={INK} />
        <path d={m.lawn} fill={PAPER} />

        {/* the marble steps, white, down from the doorway into the garden */}
        <path
          d={`M${DOOR.x0 - 10} ${HOUSE.foot}H${DOOR.x1 + 10}L${DOOR.x1 + 46} 268H${DOOR.x0 - 46}Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.6}
        />
        <path
          d={[0, 1, 2, 3, 4]
            .map((i) => {
              const y = HOUSE.foot + 7 + i * 7
              const k = (y - HOUSE.foot) / 36
              return `M${n(DOOR.x0 - 10 - k * 36)} ${y}H${n(DOOR.x1 + 10 + k * 36)}`
            })
            .join('')}
          stroke={INK}
          strokeWidth={1.4}
        />

        {/* the canvas laid for dancing */}
        <path
          d={`M${CANVAS.x0 + 20} ${CANVAS.y0}H${CANVAS.x1 - 10}L${CANVAS.x1} ${CANVAS.y1}H${CANVAS.x0}Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.6}
        />
        <path
          d={[0, 1, 2, 3]
            .map(
              (i) => `M${CANVAS.x0 + 6 + i * 2} ${CANVAS.y0 + 8 + i * 8}H${CANVAS.x1 - 6 + i * 1}`,
            )
            .join('')}
          stroke={INK}
          strokeWidth={0.9}
        />

        {/* the orchestra's stand on the right */}
        <rect
          x={STAND.x0}
          y={STAND.top}
          width={STAND.x1 - STAND.x0}
          height={STAND.foot - STAND.top}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={gouge(STAND.x0 + 4, STAND.top + 6, STAND.x1 - 4, STAND.top + 6, 1.2)}
          fill={PAPER}
        />
        {/* the big drum, its head white */}
        <circle cx={826} cy={196} r={20} fill={PAPER} stroke={INK} strokeWidth={2.4} />
        <path d="M812 186L840 206M840 186L812 206" stroke={INK} strokeWidth={1} />
        <Musician at={[744, STAND.top + 2]} s={0.56}>
          {/* a trombone, its slide reaching out */}
          <path
            d="M24 -106H70M24 -100H70M70 -106V-100M30 -112L18 -100L30 -88"
            fill="none"
            stroke={PAPER}
            strokeWidth={2.2}
          />
        </Musician>
        <Musician at={[790, STAND.top + 2]} s={0.56}>
          {/* a saxophone */}
          <path
            d="M22 -110Q26 -86 30 -78Q34 -70 42 -76L44 -86"
            fill="none"
            stroke={PAPER}
            strokeWidth={4}
          />
        </Musician>
        <Musician at={[836, STAND.top + 2]} s={0.56}>
          {/* a viol, upright between his knees */}
          <path
            d="M18 -120V-60M10 -88Q4 -80 10 -70Q18 -64 26 -70Q32 -80 26 -88Q18 -94 10 -88Z"
            fill={PAPER}
            stroke={INK}
            strokeWidth={1.4}
          />
        </Musician>
        {/* couples dancing on the canvas */}
        <Couple at={[494, 296]} s={0.62} woman="paper" />
        <Couple at={[602, 294]} s={0.6} woman="ink" />

        {/* the crowd on the lawn, in groups, talking */}
        {GUESTS.map(([x, y, sc, flip, woman, dress, hair]) => (
          <Guest key={x} at={[x, y]} s={sc} flip={flip} woman={woman} dress={dress} hair={hair} />
        ))}

        {/* Gatsby, alone at the head of the marble steps, not drinking */}
        <Person
          at={[340, HOUSE.foot + 2]}
          scale={0.62}
          pose={{
            look: 'gatsby',
            head: { rot: 8 },
            far: {
              pts: [
                [-4, -132],
                [-8, -104],
                [-6, -80],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [4, -132],
                [8, -104],
                [8, -82],
              ],
              hand: 'mitt',
            },
          }}
        />

        {/* the strings of coloured lights over everything */}
        <path d={m.wires} fill="none" stroke={PAPER} strokeWidth={2.6} />
        <path d={m.wires} fill="none" stroke={INK} strokeWidth={1} />
        <g className="lc-glow" style={timing({ dur: 2.8 })}>
          {m.bulbs.map(({ at, red }) => (
            <g key={`${at[0]}-${at[1]}`}>
              <circle cx={n(at[0])} cy={n(at[1] + 5)} r={red ? 7.2 : 6.2} fill={PAPER} />
              <circle cx={n(at[0])} cy={n(at[1] + 5)} r={red ? 4.6 : 3.8} fill={red ? RED : INK} />
            </g>
          ))}
        </g>

        {/* Nick in his white flannels at a table with Jordan, looking up at the steps */}
        <ellipse cx={170} cy={300} rx={76} ry={13} fill={PAPER} stroke={INK} strokeWidth={2} />
        <path
          d="M100 302Q98 322 104 340H236Q242 322 240 302Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={2}
        />
        <path
          d={
            gouge(130, 306, 128, 338, 0.8) +
            gouge(170, 314, 170, 340, 0.8) +
            gouge(210, 306, 212, 338, 0.8)
          }
          fill={INK}
        />
        {/* a glass on the table */}
        <path
          d="M172 296L166 284H182L176 296ZM173.4 296V292M168 300H180"
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.4}
        />
        <Person
          at={[88, 340]}
          scale={0.98}
          pose={{
            look: 'jordan',
            seated: true,
            body: { hip: [0, -54], neck: [-4, -106] },
            head: { rot: -8 },
            legs: {
              far: [
                [-2, -54],
                [28, -56],
                [26, -4],
              ],
              near: [
                [2, -54],
                [32, -54],
                [30, -4],
              ],
            },
            far: {
              pts: [
                [-6, -102],
                [6, -80],
                [26, -74],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [-2, -102],
                [12, -78],
                [32, -72],
              ],
              hand: 'mitt',
            },
          }}
        />
        <Person
          at={[254, 340]}
          scale={1.02}
          pose={{
            look: 'nick',
            dress: 'paper',
            skin: 'ink',
            body: seatedBody(48, -4),
            head: { rot: -14 },
            legs: seatedLegs(48, 34),
            far: {
              pts: [
                [-2, -110],
                [10, -84],
                [32, -70],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [4, -110],
                [16, -82],
                [38, -68],
              ],
              hand: 'mitt',
            },
          }}
        />
      </g>
    </>
  )
}

export const gatsbysParty: LinocutArt = { width: W, height: H, Draw: GatsbysParty }
