import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { gouge, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  BURNT_TENT,
  CART,
  EMPTY_CHEST,
  HORSEMAN,
  WHEEL,
  daySky,
  placed,
  smoke,
  trampledGround,
} from './agincourt-field'
import { Person } from './people'

/**
 * Act 4, Scene 7: "The boys and the luggage", the nineteenth moment in the
 * guide's timeline. Every detail is from the held edition
 * (src/data/full-texts/henry-v.ts, Project Gutenberg #1521):
 *
 * - Gower: "the cowardly rascals that ran from the battle ha' done this
 *   slaughter. Besides, they have burned and carried away all that was in the
 *   King's tent". So the luggage camp on the left is empty and ransacked: the
 *   King's tent with half its canvas burned away and its pole bare, the fire
 *   still burning at the foot of its burned edge (the spot colour, tall
 *   tongues of flame with their smoke going up from them, so that at phone
 *   width they stay a fire); a baggage cart tipped over; a chest thrown open
 *   with nothing in it.
 * - WHAT IS NOT DRAWN. The boys are told of, never shown: there is no one in
 *   the camp, and nothing on its ground but the cart, the chest and the ashes.
 *   Nor is the order the scene speaks of. The faces are those who hear of it.
 *   No crows fly here: over a camp where boys were killed, birds of carrion
 *   would say what the panel does not show.
 * - Fluellen and Gower stand looking at it. Fluellen cries out: "'Tis
 *   expressly against the law of arms", so his mouth is open and his brow drawn
 *   down, a hand held out low to the ruin; Gower's head is bowed. Both as the
 *   kit cuts them (Fluellen's short beard, cap and old-fashioned hood; Gower's
 *   steel cap), Fluellen with no leek or glove yet: the King gives him the
 *   glove later in this scene, and the leek is for Saint Davy's day (5.1).
 * - "Alarum. Enter King Henry and forces": "I was not angry since I came to
 *   France Until this instant. ... Ride thou unto the horsemen on yond hill. If
 *   they will fight with us, bid them come down, Or void the field; they do
 *   offend our sight." So Henry, in harness with his crown on his helm, his
 *   brow drawn down in anger, turns from the ruin behind him and points at the
 *   French horsemen on the hill on the right. (In the first cut he stood on the
 *   right pointing back across the camp, and his finger pointed at Fluellen's
 *   head: at panel size the King seemed to be accusing his own captain.) So
 *   the panel reads left to right: what was done, those who grieve it, and the
 *   King's anger turned on the French.
 *
 * Nobody is wounded and no blade is drawn. Nothing is taken from a film or
 * stage production. Seeds: 1902 to 1904.
 */

const W = 860
const H = 340
const HORIZON = 216

/** The hill on the right, where the French horsemen stand. */
const hillY = (x: number) => HORIZON - 36 * Math.exp(-Math.pow((x - 790) / 118, 2))

type Marks = {
  sky: string
  ground: string
  hill: string
  hillCuts: string
  horsemen: { body: string; legs: string }
  smokePath: string
  shade: string
  ash: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = daySky(rng(1901), { x0: 0, x1: W, y0: 6, y1: HORIZON - 6 }, (x, y) => {
    const high = 1 - y / HORIZON
    return 0.1 + high * 0.4
  })
  const ground = trampledGround(rng(1902), { x0: 0, x1: W, y0: HORIZON + 2, y1: H })
  let hill = `M560 ${HORIZON + 1}`
  for (let x = 560; x <= W + 6; x += 10) hill += `L${x} ${n(hillY(x))}`
  hill += `L${W + 6} ${HORIZON + 1}Z`
  let hillCuts = ''
  for (let k = 0; k < 6; k++) {
    const x = 640 + k * 36
    hillCuts += gouge(x, hillY(x) + 6, x + 24, hillY(x + 24) + 7, 0.8)
  }
  // "the horsemen on yond hill": French riders on its crest, facing the
  // English, their lances up
  let hb = ''
  let hl = ''
  for (const [x, s] of [
    [712, 0.92],
    [752, 0.98],
    [794, 1],
    [834, 0.94],
  ]) {
    const g = hillY(x) + 1
    hb += placed(HORSEMAN.body, [x, g], s, 0, true)
    hl += placed(HORSEMAN.legs, [x, g], s, 0, true)
  }
  // the smoke of the King's tent, going up from the fire at its burned edge
  const smokePath = smoke(rng(1903), [172, 258], { rise: 236, lean: 0.22, width: 18 })
  let shade = ''
  for (const [x0, x1, y] of [
    [300, 398, 326],
    [402, 500, 326],
    [540, 664, 330],
  ])
    for (let k = 0; k < 4; k++)
      shade += gouge(x0 + k * 5, y + k * 2.6, x1 - k * 6, y + k * 2.6 + 0.6, 1.6 - k * 0.25)
  // the ash and charred scraps round the tent's foot
  let ash = ''
  const ra = rng(1904)
  for (let k = 0; k < 14; k++) {
    const x = 120 + ra() * 110
    const y = 288 + ra() * 18
    ash += gouge(x, y, x + 6 + ra() * 10, y + (ra() - 0.5) * 2, 1.2 + ra())
  }
  cached = {
    sky,
    ground,
    hill,
    hillCuts,
    horsemen: { body: hb, legs: hl },
    smokePath,
    shade,
    ash,
  }
  return cached
}

/** The tent, the cart and the chest, placed in the camp. */
const TENT_AT = 'translate(170 292) scale(1.1)'
const CART_AT = 'translate(272 302) rotate(-28) scale(1.05)'
const CHEST_AT = 'translate(62 318) scale(1.05)'
/** The fire at the tent's burned edge and the foot of its pole. */
const FIRE_AT = 'translate(168 293)'

function TheBoysAndTheLuggage(_: ArtProps) {
  const m = marks()
  return (
    <>
      <g className="lc-push" style={timing({ origin: [420, 220], push: 1.03 })}>
        {/* the sky, and the hill on the right with the French horsemen on it */}
        <rect x={0} y={0} width={W} height={HORIZON + 2} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        <path d={m.hill} fill={PAPER} stroke={INK} strokeWidth={1.4} />
        <path d={m.hillCuts} fill={INK} />
        <path
          d={m.horsemen.legs}
          fill="none"
          stroke={INK}
          strokeWidth={1.8}
          strokeLinecap="round"
        />
        <path d={m.horsemen.body} fill={INK} />

        {/* the field */}
        <rect x={0} y={HORIZON} width={W} height={H - HORIZON} fill={PAPER} />
        <path d={`M0 ${HORIZON}H566`} stroke={INK} strokeWidth={1.4} />
        <path d={m.ground} fill={INK} />
        <path d={m.shade} fill={INK} />

        {/* the smoke of the King's tent going up */}
        <g className="lc-rise" style={timing({ delay: 0.4, dur: 2.4 })}>
          <path d={m.smokePath} fill={INK} />
        </g>

        {/* the King's tent, half its canvas burned away */}
        <g transform={TENT_AT}>
          <path
            d={BURNT_TENT.pole}
            fill={INK}
            stroke={PAPER}
            strokeWidth={1.6}
            strokeLinejoin="round"
          />
          <path
            d={BURNT_TENT.canvas}
            fill={INK}
            stroke={PAPER}
            strokeWidth={1.6}
            strokeLinejoin="round"
          />
          <path d={BURNT_TENT.seams} fill={PAPER} />
        </g>
        {/* the ashes, and the fire still burning at its burned edge */}
        <path d={m.ash} fill={INK} />
        <g fill={RED} transform={FIRE_AT}>
          <path className="lc-flicker" d="M-30 0C-34 -14 -26 -22 -22 -36C-18 -24 -12 -16 -14 0Z" />
          <path
            className="lc-flicker"
            style={timing({ dur: 0.9, delay: 0.3 })}
            d="M-14 0C-18 -20 -6 -32 -2 -52C2 -34 12 -22 8 0Z"
          />
          <path
            className="lc-flicker"
            style={timing({ dur: 1.1, delay: 0.5 })}
            d="M6 0C4 -12 12 -18 14 -30C18 -20 22 -12 18 0Z"
          />
        </g>
        <path d="M132 294H206" stroke={INK} strokeWidth={3} strokeLinecap="round" />

        {/* a baggage cart tipped over, its shafts in the air */}
        <g transform={CART_AT}>
          <path
            d={CART.shafts + CART.rail + CART.body}
            fill={INK}
            stroke={PAPER}
            strokeWidth={1.4}
            strokeLinejoin="round"
          />
          <path d={CART.slats} fill={PAPER} />
          <g transform={`translate(${CART.wheelAt[0]} ${CART.wheelAt[1]})`}>
            <path d={WHEEL.disc} fill={INK} stroke={PAPER} strokeWidth={1.4} />
            <path d={WHEEL.gaps} fill={PAPER} />
          </g>
        </g>

        {/* a chest thrown open, with nothing in it */}
        <g transform={CHEST_AT}>
          <path
            d={EMPTY_CHEST.lid + EMPTY_CHEST.box}
            fill={INK}
            stroke={PAPER}
            strokeWidth={1.4}
            strokeLinejoin="round"
          />
          <path d={EMPTY_CHEST.inside} fill={PAPER} />
          <path d={EMPTY_CHEST.bands} fill={PAPER} />
        </g>

        {/* Gower, his head bowed over the ruin */}
        <Person
          at={[352, 326]}
          scale={1.24}
          flip
          pose={{
            look: 'gower',
            eye: 'down',
            brow: 'sorrow',
            head: { rot: 12 },
            far: {
              pts: [
                [-2, -130],
                [-4, -104],
                [0, -80],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [4, -130],
                [8, -104],
                [6, -80],
              ],
              hand: 'mitt',
            },
          }}
        />

        {/* Fluellen, crying out at it */}
        <Person
          at={[452, 326]}
          scale={1.24}
          flip
          pose={{
            look: 'fluellen',
            mouth: 'open',
            brow: 'frown',
            head: { rot: -4 },
            far: {
              pts: [
                [-2, -130],
                [-6, -104],
                [-2, -80],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [4, -130],
                [16, -106],
                [37, -98],
              ],
              hand: 'open',
              deg: -4,
              thumb: -1,
            },
          }}
        />

        {/* Henry, angry, pointing at the horsemen on the hill */}
        <Person
          at={[592, 330]}
          scale={1.3}
          pose={{
            look: 'henry',
            dress: 'armour',
            helm: true,
            brow: 'frown',
            mouth: 'open',
            head: { rot: -4 },
            far: {
              pts: [
                [-2, -130],
                [-8, -104],
                [-4, -80],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [4, -130],
                [24, -130],
                [46, -138],
              ],
              hand: 'point',
              deg: -12,
            },
            legs: {
              far: [
                [-3, -70],
                [-10, -36],
                [-15, -3],
              ],
              near: [
                [3, -70],
                [10, -36],
                [15, -3],
              ],
            },
          }}
        />
      </g>
    </>
  )
}

export const theBoysAndTheLuggage: LinocutArt = { width: W, height: H, Draw: TheBoysAndTheLuggage }
