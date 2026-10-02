import type { LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { flagFloor, footShadow } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { Person, type P } from './people'
import { Eave } from './rome'

/**
 * Act 3, Scene 3: "Cinna the poet", the tenth moment in the guide's timeline.
 * Every detail is from the scene in the held edition (Project Gutenberg #1522,
 * src/data/full-texts/julius-caesar.ts):
 *
 * - "The same. A street." "Enter Cinna, the poet, and after him the
 *   citizens." It is the afternoon of the funeral ("Directly, I am going to
 *   Caesar's funeral"), and the citizens have left the Forum to "burn his body
 *   in the holy place, And with the brands fire the traitors' houses" (3.2). So
 *   smoke rises from behind the roofs, leaning on the wind, cut as the Macbeth
 *   panels cut smoke ("Brave Macbeth").
 * - Cinna the poet as the kit draws him (./people.tsx): a toga for the
 *   funeral, which sets him apart from the working men in tunics, and his
 *   fringe. "I am Cinna the poet, I am Cinna the poet. ... I am not Cinna the
 *   conspirator." So he holds one hand to his breast and the other open
 *   before him, protesting, his mouth open.
 * - The citizens question him from every side ("Answer every man directly";
 *   "Your name, sir, truly"): one stands behind him, pointing, and one before
 *   him: "Tear him to pieces! He's a conspirator." Then the scene turns:
 *   "Come; brands, ho! firebrands. To Brutus', to Cassius'; burn all." One
 *   holds up a firebrand, one has already turned away, pointing up the street,
 *   and another follows him with a second brand. The brands' flames are the
 *   spot colour. They are the kit's citizens, ordinary Romans, angry and drawn
 *   with the same care as everyone else.
 *
 * SAFEGUARDING. What the crowd does to Cinna happens off the page, as the
 * scene ends before it: nobody touches him, no one holds a weapon, and the
 * brands are held up for the houses, never towards him.
 *
 * WHY THE SMOKE IS IN PLUMES (2 October 2026). It was first one column of
 * great rounds rising out of a lane, and read as a black tree or worse, a
 * mushroom cloud.
 *
 * Seeds: 7601 (sky), 7602 (walls), 7603 (paving), 7604 (smoke).
 */

const W = 860
const H = 340
const STREET = 252
/** The line of the eaves, where the smoke rises from behind the roofs. */
const ROOF = 92

type Marks = {
  sky: string
  walls: string
  paving: string
  shadows: string
  plumes: [number, number, number][][]
}

/**
 * The smoke of the fires, as the Macbeth panels cut smoke ("Brave Macbeth"):
 * plumes of rounds that grow as they rise from behind the roofs and lean on
 * the wind. [x where it rises, how far it leans, how many rounds].
 */
const PLUMES: [number, number, number][] = [
  [432, 1.1, 8],
  [560, 0.9, 9],
  [690, 1.2, 8],
  [790, 0.8, 6],
]

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = gougeField(
    rng(7601),
    { x0: 0, x1: W, y0: 6, y1: 104 },
    (x, y) => clamp(0.1 + (1 - y / 104) * 0.24),
    { spacing: 7, len: [40, 150], gap: [24, 70], max: 1.6 },
  )
  const walls = gougeField(
    rng(7602),
    { x0: 0, x1: W, y0: 96, y1: STREET - 4 },
    (_x, y) => clamp(0.05 + Math.max(0, 1 - (y - 96) / 26) * 0.5),
    { spacing: 7, len: [14, 60], gap: [16, 46], max: 2 },
  )
  const paving = flagFloor(rng(7603), W, H, STREET, [420, 130], 54, 6)
  const shadows =
    footShadow(214, 330, 28) +
    footShadow(330, 334, 34) +
    footShadow(442, 334, 30) +
    footShadow(540, 336, 30) +
    footShadow(668, 330, 30)
  const rs = rng(7604)
  const plumes = PLUMES.map(([x0, lean, count]) => {
    const puffs: [number, number, number][] = []
    let y = ROOF - 4
    for (let t = 0; t < count; t++) {
      const r = 4 + t * 2.2 + between(rs, -0.6, 0.6)
      puffs.push([x0 + (t * t * 1.1 + t * 3) * lean + between(rs, -1.5, 1.5), y, r])
      y -= r * 0.95
    }
    return puffs
  })
  cached = { sky, walls, paving, shadows, plumes }
  return cached
}

/** A firebrand: a stick with its head bound in rags, in the hand's frame, the flame above it. */
const BRAND = 'M-1.6 4L1.6 4L2.4 -40L-2.4 -40Z'
const BRAND_HEAD = 'M-5 -40C-5.6 -46 -4 -50 0 -51C4 -50 5.6 -46 5 -40Z'
const FLAME =
  'M-6 -48C-12 -58 -6 -70 -2 -80C-1 -72 4 -70 3 -62C8 -66 8 -74 7 -80C14 -70 14 -56 6 -48Z'

/** A firebrand held up, its stick in the hand at `at` (in the holder's frame). */
function Brand({ at }: { at: P }) {
  return (
    <g transform={`translate(${at[0]} ${at[1]})`}>
      <path d={BRAND} fill={INK} stroke={PAPER} strokeWidth={1.4} />
      <path d={BRAND_HEAD} fill={INK} stroke={PAPER} strokeWidth={1.2} />
      <path d={gouge(-4, -44, 4, -44, 0.6) + gouge(-4, -47.4, 4, -47.4, 0.6)} fill={PAPER} />
      <path
        className="lc-flicker"
        d={FLAME}
        fill={RED}
        stroke={INK}
        strokeWidth={1.4}
        strokeLinejoin="round"
      />
    </g>
  )
}

const CINNA: P = [330, 334]

function CinnaThePoet() {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [320, 200], push: 1.03 })}>
      <rect x={0} y={0} width={W} height={H} fill={PAPER} />
      <path d={m.sky} fill={INK} />

      {/* the smoke of the fires, rising from behind the roofs on the wind */}
      {m.plumes.map((puffs, k) => (
        <g key={k} className="lc-rise" style={timing({ delay: 0.2 + k * 0.25, dur: 2.4 })}>
          <g fill={PAPER} stroke={PAPER} strokeWidth={3}>
            {puffs.map(([x, y, r]) => (
              <circle key={`${x}-${y}`} cx={n(x)} cy={n(y)} r={n(r)} />
            ))}
          </g>
          <g fill={INK}>
            {puffs.map(([x, y, r]) => (
              <circle key={`${x}-${y}`} cx={n(x)} cy={n(y)} r={n(r)} />
            ))}
          </g>
          <path
            d={puffs
              .slice(2)
              .map(
                ([x, y, r]) =>
                  `M${n(x - r * 0.6)} ${n(y - r * 0.2)}q${n(r * 0.5)} ${n(-r * 0.6)} ${n(r * 1.1)} ${n(-r * 0.1)}`,
              )
              .join('')}
            fill="none"
            stroke={PAPER}
            strokeWidth={1}
            strokeLinecap="round"
          />
        </g>
      ))}

      {/* the street: house fronts in the afternoon sun */}
      <rect x={0} y={ROOF - 2} width={W} height={STREET - ROOF} fill={PAPER} />
      <path d={m.walls} fill={INK} />
      <Eave x0={-12} x1={W + 12} y={ROOF + 4} />
      {/* doorways and windows */}
      <path d="M40 252V182Q40 158 70 158Q100 158 100 182V252Z" fill={INK} />
      <rect x={170} y={120} width={44} height={36} fill={INK} />
      <path d="M192 120V156M170 138H214" stroke={PAPER} strokeWidth={2} />
      <path d="M764 252V186Q764 162 792 162Q820 162 820 186V252Z" fill={INK} />
      <rect x={586} y={120} width={44} height={36} fill={INK} />
      <path d="M608 120V156M586 138H630" stroke={PAPER} strokeWidth={2} />

      <rect x={0} y={STREET} width={W} height={H - STREET} fill={PAPER} />
      <path d={`M0 ${STREET}H${W}`} stroke={INK} strokeWidth={LINE.bold} />
      <path d={m.paving} fill={INK} />
      <path d={m.shadows} fill={INK} />

      {/* further off, another goes after them with a second brand */}
      <Person
        at={[612, 298]}
        scale={0.78}
        pose={{
          look: 'citizen',
          variant: 3,
          head: { rot: -4 },
          legs: {
            far: [
              [-3, -70],
              [-12, -38],
              [-20, -4],
            ],
            near: [
              [3, -70],
              [14, -40],
              [18, -4],
            ],
          },
          near: {
            pts: [
              [5, -128],
              [16, -150],
              [20, -174],
            ],
            hand: 'grip',
            deg: -90,
          },
        }}
      >
        <Brand at={[25, -176]} />
      </Person>

      {/* a citizen behind him, pointing: "Answer every man directly" */}
      <g transform="rotate(5 214 330)">
        <Person
          at={[214, 330]}
          scale={1.02}
          pose={{
            look: 'citizen',
            variant: 2,
            frown: true,
            head: { rot: 2 },
            near: {
              pts: [
                [5, -128],
                [24, -116],
                [44, -114],
              ],
              hand: 'point',
              deg: -4,
            },
          }}
        />
      </g>

      {/* Cinna the poet, a hand on his breast: "I am Cinna the poet" */}
      <Person
        at={CINNA}
        scale={1.06}
        pose={{
          look: 'cinna-poet',
          mouth: 'open',
          head: { rot: -4 },
          feet: [-10, 10],
          hem: { front: 26, back: 30 },
          far: {
            pts: [
              [-4, -130],
              [16, -118],
              [30, -126],
            ],
            hand: 'open',
            deg: -50,
          },
          near: {
            pts: [
              [5, -128],
              [14, -106],
              [6, -118],
            ],
            hand: 'open',
            deg: -120,
            size: 13.5,
          },
        }}
      />

      {/* the citizens closing on him: "Tear him to pieces! He's a conspirator." */}
      <g transform="rotate(-6 442 334)">
        <Person
          at={[442, 334]}
          scale={1.04}
          flip
          pose={{
            look: 'citizen',
            variant: 1,
            frown: true,
            mouth: 'open',
            head: { rot: -2 },
            near: {
              pts: [
                [5, -128],
                [24, -118],
                [44, -120],
              ],
              hand: 'point',
              deg: -6,
            },
          }}
        />
      </g>
      {/* "Come; brands, ho! firebrands": the brand held up, its flame the spot colour */}
      <Person
        at={[540, 336]}
        scale={1.04}
        flip
        pose={{
          look: 'citizen',
          variant: 0,
          frown: true,
          head: { rot: -6 },
          near: {
            pts: [
              [5, -128],
              [20, -150],
              [24, -176],
            ],
            hand: 'grip',
            deg: -90,
          },
        }}
      >
        <Brand at={[29, -178]} />
      </Person>
      {/* and one already turning away to fetch the rest: "To Brutus', to Cassius'; burn all" */}
      <Person
        at={[668, 330]}
        scale={1}
        pose={{
          look: 'citizen',
          variant: 4,
          mouth: 'open',
          head: { rot: -6 },
          legs: {
            far: [
              [-3, -70],
              [-14, -38],
              [-22, -4],
            ],
            near: [
              [3, -70],
              [16, -40],
              [20, -4],
            ],
          },
          near: {
            pts: [
              [5, -128],
              [26, -124],
              [48, -134],
            ],
            hand: 'point',
            deg: -14,
          },
        }}
      />
    </g>
  )
}

export const cinnaThePoet: LinocutArt = {
  width: W,
  height: H,
  Draw: CinnaThePoet,
}
