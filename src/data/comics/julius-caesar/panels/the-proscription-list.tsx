import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, type P } from './people'

/**
 * Act 4, Scene 1: "The proscription list", the eleventh moment in the guide's
 * timeline. Every detail is from the scene (the held edition, Project
 * Gutenberg #1522):
 *
 * - "Rome. A room in Antony's house." "Enter Antony, Octavius and Lepidus,
 *   seated at a table." So the three sit at one table, in a plain room of a
 *   Roman house, lit from a high window. The play gives no hour, so the light
 *   is the window's and no lamp is lit.
 * - "These many then shall die; their names are prick'd." "Prick him down,
 *   Antony." "He shall not live; look, with a spot I damn him." So the list is
 *   the thing the room is about: a roll of names unrolled across the table
 *   from its back edge and hanging over the front, a spot in the spot colour
 *   against nearly every name, and Antony, who holds the pen, leaning over it
 *   to mark one more. The red marks are the spots of the text, on paper;
 *   nothing in the panel is blood.
 * - Octavius asks Lepidus to consent to his brother's death and tells Antony
 *   to prick him down, so he points at the list. Lepidus consents ("I do
 *   consent"), so he sits with his head bowed and his hand on the table.
 * - The three are dressed as the kit dresses them (./people.tsx): Antony with
 *   his thick curls, Octavius young, Lepidus slight and balding; all three in
 *   the toga, sitting in council ("let us presently go sit in council"). A
 *   cloth to the floor covers the table, so they are seen from the waist up,
 *   as men sitting at it.
 *
 * Nothing is taken from a film or stage production. Seeds: 1101 (the room),
 * 1102 (the names).
 */

const W = 860
const H = 340

/** The table: its top's back and front edges, the hem of its cloth, and the floor. */
const TOP_BACK = 220
const TOP_FRONT = 238
const HEM = 324
const FLOOR = 308

/** The high window behind Antony, the light of the room. */
const WIN = { x: 628, y: 22, w: 62, h: 100 }

/** The list: where it lies on the table, and the length hanging over its edge. */
const LIE = 'M434 224L518 224L522 238.4L430 238.4Z'
const HANG =
  'M430 238.4C446 239.8 466 240 490 239.4C504 239 514 238.6 522 238.2L524 268C523 288 525 306 522 324C510 328.4 490 330 472 329.4C456 329 444 327.6 432 325C434 304 433 286 434 268Z'
/** The rest of the roll, at the back of the table, seen from the side. */
const ROLL =
  'M430 215.6H516C526 215.6 528 218 528 220.4C528 223 526 225.4 522 225.4H424C426 225.4 424 223 424 220.4C424 218 426 215.6 430 215.6Z'

/** Where the figures may show: above the cloth, which hides them from the waist down. */
const ABOVE_TABLE = `M0 0H${W}V${TOP_FRONT + 20}H0Z`

type Marks = {
  wall: string
  floor: string
  floorShade: string
  cloth: string
  names: string
  spots: P[]
  hangShade: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(1101)
  // The wall takes the light of the window, brightest round it.
  const light = (x: number, y: number) => {
    const d = Math.hypot((x - (WIN.x + WIN.w / 2)) * 0.48, (y - (WIN.y + WIN.h / 2)) * 1.05)
    return Math.max(clamp(1 - d / 280) * (y > 176 ? 0.65 : 1), 0.05)
  }
  const wall = gougeField(r, { x0: 0, x1: W, y0: 4, y1: TOP_BACK }, light)
  // The floor: square tiles running back under the table.
  let floor = ''
  const V = [470, 150]
  for (let xt = -900; xt < 1800; xt += 48) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (FLOOR - V[1]))
    floor += wedge(xt, FLOOR, xb, H, 1, 2.4)
  }
  for (const y of [307, 318, 332]) floor += gouge(-10, y, W + 10, y + 0.4, 0.8 + (y - 300) * 0.04)
  let floorShade = ''
  for (let y = FLOOR + 1; y < FLOOR + 14; y += 2.8)
    floorShade += gouge(-10, y, W + 10, y, 2.2 - (y - FLOOR) * 0.15)
  // The cloth over the table: long folds falling to the floor.
  let cloth = ''
  for (let x = 124; x < 740; x += between(r, 26, 40)) {
    if (x > 420 && x < 534) continue
    cloth += gouge(
      x,
      TOP_FRONT + 10,
      x + between(r, -3, 3),
      HEM - 6,
      between(r, 1.2, 1.9),
      between(r, -1, 1),
    )
  }

  // The names, in rows down the hanging list, with a spot before nearly all
  // of them; the fourth and the ninth are not yet pricked.
  const q = rng(1102)
  let names = ''
  const spots: P[] = []
  for (let k = 0; k < 11; k++) {
    const y = 248 + k * 7.2
    const x0 = 440 + between(q, -1, 1)
    const len = between(q, 34, 60)
    let x = x0
    while (x < x0 + len) {
      const l = between(q, 5, 14)
      names += gouge(
        x,
        y + between(q, -0.3, 0.3),
        Math.min(x + l, x0 + len),
        y + between(q, -0.3, 0.3),
        1,
      )
      x += l + between(q, 2.4, 4.4)
    }
    if (k !== 3 && k !== 8) spots.push([514, y])
  }
  // and the rows on the part lying on the table, foreshortened
  for (let k = 0; k < 3; k++) {
    const y = 227.4 + k * 3.6
    let x = 438 + k * 1.2
    while (x < 500) {
      const l = between(q, 6, 14)
      names += gouge(x, y, Math.min(x + l, 500), y - 0.2, 0.65)
      x += l + between(q, 3, 6)
    }
    if (k < 2) spots.push([508.6 + k * 0.8, y])
  }
  // the list's shadow where it bends over the edge
  let hangShade = ''
  for (let x = 434; x < 522; x += 5) hangShade += gouge(x, 239.6, x + 1.4, 245.4, 0.8)
  cached = { wall, floor, floorShade, cloth, names, spots, hangShade }
  return cached
}

/** The reed pen in Antony's hand, its point on the list, in his figure's frame. */
const PEN = 'M50 -119L63.6 -108.4'

function ProscriptionList({ uid }: ArtProps) {
  const m = marks()
  const id = { above: `${uid}-above` }
  return (
    <>
      <defs>
        <clipPath id={id.above}>
          <path d={ABOVE_TABLE} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [470, 230], push: 1.03 })}>
        {/* the wall, lit from the high window */}
        <path d={m.wall} fill={PAPER} />
        <rect x={WIN.x - 7} y={WIN.y - 7} width={WIN.w + 14} height={WIN.h + 14} fill={INK} />
        <rect x={WIN.x} y={WIN.y} width={WIN.w} height={WIN.h} fill={PAPER} />
        <path
          d={`M${n(WIN.x + WIN.w / 3)} ${WIN.y}V${WIN.y + WIN.h}M${n(WIN.x + (2 * WIN.w) / 3)} ${WIN.y}V${WIN.y + WIN.h}`}
          stroke={INK}
          strokeWidth={4}
        />
        <rect x={WIN.x - 12} y={WIN.y + WIN.h + 7} width={WIN.w + 24} height={5} fill={PAPER} />

        {/* the floor */}
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />
        <path d={m.floorShade} fill={INK} />

        {/* the table's top, and the list lying on it */}
        <path
          d={`M120 ${TOP_BACK}L740 ${TOP_BACK}L752 ${TOP_FRONT}L108 ${TOP_FRONT}Z`}
          fill={INK}
        />
        <path d={gouge(122, TOP_BACK + 1.6, 738, TOP_BACK + 1.6, 1.4)} fill={PAPER} />
        <path d={LIE} fill={PAPER} stroke={INK} strokeWidth={1} />
        <path d={ROLL} fill={PAPER} stroke={INK} strokeWidth={1.4} />
        <path d="M430 219.4H522M430 222.4H522" stroke={INK} strokeWidth={0.9} />

        {/* the three at the table: Lepidus, Octavius, and Antony leaning over the list */}
        <g clipPath={`url(#${id.above})`}>
          <Person
            pose={{
              look: 'lepidus',
              head: { rot: 12 },
              eye: 'down',
              near: {
                pts: [
                  [5, -132],
                  [9, -104],
                  [32, -97],
                ],
                hand: 'mitt',
              },
            }}
            at={[214, 359.2]}
            scale={1.42}
          />
          <Person
            pose={{
              look: 'octavius',
              head: { rot: 4 },
              near: {
                pts: [
                  [5, -132],
                  [14, -104],
                  [50, -99],
                ],
                hand: 'point',
                deg: 26,
              },
            }}
            at={[340, 357.7]}
            scale={1.42}
          />
          <g transform="translate(612 364.8) scale(-1 1) rotate(14 0 -100)">
            <Person
              pose={{
                look: 'antony',
                head: { rot: 10 },
                far: {
                  pts: [
                    [-3, -131],
                    [16, -110],
                    [36, -106],
                  ],
                  hand: 'open',
                  deg: 4,
                },
                near: {
                  pts: [
                    [6, -130],
                    [24, -110],
                    [44, -122],
                  ],
                  hand: 'grip',
                  deg: 40,
                },
              }}
              at={[0, 0]}
              scale={1.42}
            >
              <path d={PEN} stroke={PAPER} strokeWidth={4} strokeLinecap="round" />
              <path d={PEN} stroke={INK} strokeWidth={2} strokeLinecap="round" />
            </Person>
          </g>
        </g>

        {/* the table's front edge and its cloth, to the floor */}
        <path d={gouge(110, TOP_FRONT - 1, 750, TOP_FRONT - 1, 1.2)} fill={PAPER} />
        <path
          d={`M108 ${TOP_FRONT}H752L756 ${HEM}Q620 ${HEM + 5} 430 ${HEM + 2}Q250 ${HEM + 5} 104 ${HEM}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d={m.cloth} fill={PAPER} />
        <path d={gouge(110, TOP_FRONT + 5, 750, TOP_FRONT + 5, 1.5)} fill={PAPER} />

        {/* the list over the edge, and the spots against its names */}
        <path d={HANG} fill={PAPER} stroke={INK} strokeWidth={1.2} />
        <path d={m.hangShade} fill={INK} />
        <path d={m.names} fill={INK} />
        <g fill={RED}>
          {m.spots.map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={n(x)} cy={n(y)} r={2.7} />
          ))}
        </g>
      </g>
    </>
  )
}

export const proscriptionList: LinocutArt = { width: W, height: H, Draw: ProscriptionList }
