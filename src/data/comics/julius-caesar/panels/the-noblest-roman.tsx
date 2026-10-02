import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rays, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, type P } from './people'

/**
 * Act 5, Scene 5: "The noblest Roman", the fifteenth and last moment in the
 * guide's timeline. Brutus's death happens off the page: the panel draws what
 * comes after it, the tribute his enemies pay him, and no body and no blade
 * are drawn. Every detail is from the scene (the held edition, Project
 * Gutenberg #1522):
 *
 * - "Come, poor remains of friends, rest on this rock." So the scene is a
 *   rock on the battlefield, large in the foreground.
 * - "Statilius show'd the torch-light"; Octavius: "Within my tent his bones
 *   tonight shall lie". So it is night, and the field is lit by torches, the
 *   flames in the spot colour.
 * - "Alarum. Retreat. Enter Antony, Octavius, Messala, Lucilius and the
 *   Army." So the victors stand by the rock with their soldiers and torches.
 *   They are the kit's Antony and Octavius (./people.tsx), bareheaded, in the
 *   armour and cloak of a general at Philippi, and the kit's soldiers.
 * - "This was the noblest Roman of them all." So Antony stands with his head
 *   bowed and one hand held out, open and low, towards the far side of the
 *   rock, where Brutus lies out of sight; Octavius bows his head beside him
 *   ("According to his virtue let us use him With all respect").
 * - "Strato, where is thy master?" "Free from the bondage you are in,
 *   Messala." So Strato, Brutus's man, stands by the rock with his head bowed
 *   and his hands empty.
 *
 * Nothing is taken from a film or stage production. Seeds: 1501 (the night
 * and the rock), 1502 to 1504 (the torches' light).
 */

const W = 860
const H = 340
/** Where the ground meets the dark. */
const GROUND = 262

/** The rock Brutus's friends rested on, in the foreground. */
const ROCK =
  'M112 346L118 314L132 292L146 280L150 266L170 252L196 246L210 236L236 232L262 234L288 230L312 236L330 246L348 250L362 266L380 280L388 300L398 318L404 346Z'
/** The rock's facets: the edges between its faces, cut in paper. */
const ROCK_FACETS =
  'M170 252L184 276L176 306M210 236L226 262L246 270M288 230L296 256L330 268M330 246L340 274L372 290M246 270L262 300L258 330M296 256L284 292'

/**
 * The three soldiers at the back: where each stands, his size, and where his
 * hand is in his own frame (he faces left). The torch he holds rises from
 * that hand; TORCHES are the feet of its flames in the scene, for their light.
 */
const SOLDIERS: { at: P; s: number; hand: P }[] = [
  { at: [632, 296], s: 0.86, hand: [26, -146] },
  { at: [736, 290], s: 0.82, hand: [22, -150] },
  { at: [812, 300], s: 0.86, hand: [24, -140] },
]
/** How far the torch's head is above the hand, in the soldier's frame. */
const REACH = 54
const TORCHES: P[] = SOLDIERS.map(({ at, s, hand }) => [
  at[0] - hand[0] * s,
  at[1] + (hand[1] - REACH) * s,
])

type Marks = {
  sky: string
  ground: string
  rockCuts: string
  glow: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(1501)
  const light = (x: number, y: number) =>
    Math.max(...TORCHES.map(([tx, ty]) => clamp(1 - Math.hypot(x - tx, (y - ty) * 1.1) / 260)))
  // the night sky, lit round the torches and dark to the left
  let sky = ''
  for (let y = 6; y < GROUND; y += 6) {
    let x = between(r, -30, 0)
    while (x < W) {
      const len = between(r, 20, 80)
      const L = light(x + len / 2, y) * 0.95
      if (r() < 0.06 + L * 0.94)
        sky += gouge(
          x,
          y + between(r, -0.6, 0.6),
          x + len,
          y + between(r, -0.6, 0.6),
          0.3 + L * 2.8,
        )
      x += len + between(r, 6, 26) * (1 - L * 0.6)
    }
  }
  let ground = ''
  for (let y = GROUND + 5; y < H; y += 5.5) {
    let x = between(r, -20, 0)
    while (x < W) {
      const len = between(r, 18, 60)
      const L = light(x + len / 2, y - 120) * 0.85
      if (r() < 0.1 + L) ground += gouge(x, y, x + len, y + between(r, -0.5, 0.5), 0.3 + L * 2)
      x += len + between(r, 6, 22)
    }
  }
  // the rock, lit along its top from the torches on the right
  let rockCuts = ''
  for (let i = 0; i < 90; i++) {
    const x = between(r, 140, 392)
    const y = between(r, 236, 340)
    const top = 1 - clamp((y - 232) / 80)
    const side = clamp((x - 160) / 240)
    if (r() < 0.12 + top * side * 0.9)
      rockCuts += gouge(
        x,
        y,
        x + between(r, 8, 24),
        y + between(r, -4, 4),
        0.4 + top * side * 1.8,
        between(r, -1, 1),
      )
  }
  let glow = ''
  TORCHES.forEach(([x, y], i) => {
    glow += rays(rng(1502 + i), x, y - 8, { from: 12, to: 62, every: 8, width: 2.4 })
  })
  cached = { sky, ground, rockCuts, glow }
  return cached
}

/**
 * A torch, in its bearer's frame: the shaft from below the hand up through it,
 * the head bound with cloth, and the flame burning up from it in three
 * tongues. Its foot is at `hand`.
 */
function Torch({ hand }: { hand: P }) {
  const [x, y] = hand
  const top = y - REACH
  return (
    <>
      <path
        d={`M${x} ${y + 20}V${top + 4}`}
        stroke={PAPER}
        strokeWidth={6.4}
        strokeLinecap="round"
      />
      <path d={`M${x} ${y + 20}V${top + 4}`} stroke={INK} strokeWidth={4} strokeLinecap="round" />
      <path
        d={`M${x - 5.4} ${top + 8}L${x - 6} ${top}H${x + 6}L${x + 5.4} ${top + 8}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.2}
      />
      <path
        className="lc-flicker"
        d={`M${x - 8} ${top}C${x - 13} ${top - 8} ${x - 9} ${top - 15} ${x - 6} ${top - 20}C${x - 5} ${top - 14} ${x - 3} ${top - 12} ${x - 1} ${top - 11}C${x - 2} ${top - 19} ${x + 1} ${top - 26} ${x + 4} ${top - 31}C${x + 5} ${top - 23} ${x + 8} ${top - 18} ${x + 9} ${top - 13}C${x + 10} ${top - 16} ${x + 12} ${top - 18} ${x + 14} ${top - 19}C${x + 15} ${top - 11} ${x + 13} ${top - 5} ${x + 8} ${top}Z`}
        fill={RED}
      />
    </>
  )
}

function NoblestRoman(_: ArtProps) {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [440, 220], push: 1.03 })}>
      {/* the night, lit round the torches */}
      <path d={m.sky} fill={PAPER} />
      <path d={m.glow} fill={PAPER} />
      <rect x={0} y={GROUND} width={W} height={1.6} fill={PAPER} />
      <path d={m.ground} fill={PAPER} />

      {/* the soldiers behind, holding up their torches */}
      {SOLDIERS.map(({ at, s: sc, hand }) => (
        <Person
          key={at[0]}
          pose={{
            look: 'soldier',
            near: {
              pts: [[5, -130], [hand[0] - 8, hand[1] + 26], hand],
              hand: 'grip',
              deg: -90,
            },
          }}
          at={at}
          scale={sc}
          flip
        >
          <Torch hand={hand} />
        </Person>
      ))}

      {/* Octavius, his head bowed */}
      <Person
        pose={{
          look: 'octavius',
          dress: 'armour',
          head: { rot: 10 },
          eye: 'down',
          near: {
            pts: [
              [5, -130],
              [11, -106],
              [17, -86],
            ],
            hand: 'mitt',
          },
        }}
        at={[566, 322]}
        scale={1.12}
        flip
      />

      {/* Antony: "This was the noblest Roman of them all." */}
      <Person
        pose={{
          look: 'antony',
          dress: 'armour',
          head: { rot: 14 },
          eye: 'down',
          near: {
            pts: [
              [5, -130],
              [16, -106],
              [36, -98],
            ],
            hand: 'open',
            deg: 14,
          },
        }}
        at={[470, 326]}
        scale={1.18}
        flip
      />

      {/* Strato, by the rock, his head bowed */}
      <Person
        pose={{
          look: 'strato',
          head: { rot: 14 },
          eye: 'down',
          near: {
            pts: [
              [5, -130],
              [10, -106],
              [16, -86],
            ],
            hand: 'mitt',
          },
        }}
        at={[118, 318]}
        scale={1.1}
      />

      {/* the rock */}
      <path d={ROCK} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={ROCK_FACETS} fill="none" stroke={PAPER} strokeWidth={1.4} strokeLinecap="round" />
      <path d={m.rockCuts} fill={PAPER} />
    </g>
  )
}

export const noblestRoman: LinocutArt = { width: W, height: H, Draw: NoblestRoman }
