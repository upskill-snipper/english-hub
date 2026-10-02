import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rays,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, seatedBody, seatedLegs } from './people'

/**
 * Act 2, Scene 4: "Patience on a monument", the ninth moment in the guide's
 * timeline. Every detail is from the scene in the held edition (Project
 * Gutenberg #1526, src/data/full-texts/twelfth-night.ts):
 *
 * - "A Room in the Duke's Palace." Orsino greets the company with "Now, good
 *   morrow, friends", so it is morning: the sun stands in a tall window, cut
 *   in paper as the comedies cut their daylight.
 * - Feste sings "Come away, come away, death" and goes ("Exit Clown"), and
 *   Orsino sends the rest away: "Let all the rest give place. [Exeunt Curio
 *   and Attendants.]" So when Viola speaks the quoted line only she and
 *   Orsino are in the room, and only they are drawn.
 * - "She never told her love, But let concealment, like a worm i' th' bud,
 *   Feed on her damask cheek ... She sat like patience on a monument, Smiling
 *   at grief." The sister is Viola herself ("I am all the daughters of my
 *   father's house"). So Viola, as Cesario, sits very still on the stone
 *   seat in the window, her hands in her lap, like the carved figure she
 *   describes, and the kit's flush is on her cheek, the "damask cheek": the
 *   spot colour on the cheek, never on the mouth.
 * - "And what's her history?"; "But died thy sister of her love, my boy?"
 *   Orsino, in his chair, leans towards her with one open hand held out.
 *
 * The play does not say whether either of them sits, or describe the room.
 * A duke's chair of state, with a cloth of state hung behind it under a
 * canopy, panelling and a tiled floor are the plain furniture of a great
 * house of about 1600, and the window seat lets Viola sit "like patience on
 * a monument" while she tells Orsino the truth in a riddle. Viola is the
 * kit's 'cesario', her own face under the page's cap; Orsino is the kit's
 * 'orsino', with his circlet and pointed beard (./people.tsx). Nothing is
 * taken from a film, television or stage production. Seeds: 2901 (the
 * wall), 2902 (the sky in the window), 2903 (panelling), 2904 (the sun's
 * rays).
 */

const W = 860
const H = 340
/** The foot of the back wall, where the tiled floor begins. */
const SKIRT = 262
const FEET = 326
/** The tall window: its sides, the top of its arch and its sill. */
const WIN = { x0: 214, x1: 398, top: 30, sill: 228 }
/** The stone seat in the window: its ends, its top and its front edge. */
const SEAT = { x0: 202, x1: 410, top: 272, front: 282 }
const SUN: Pt = [358, 76]
/** The cloth of state behind Orsino's chair, and its canopy. */
const CLOTH = { x0: 520, x1: 650, top: 62 }
/** The chair of state, as strokes: two back posts, three rails, the seat and the legs. */
const CHAIR = 'M538 326V150M630 326V150M538 160H630M538 200H630M538 272H630M548 272V326M620 272V326'
/** The finials on its back posts. */
const FINIALS = 'M533 150L538 136L543 150ZM625 150L630 136L635 150Z'

type Marks = {
  wall: string
  sky: string
  sunRays: string
  tiles: string
  panelling: string
  cloth: string
  valance: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The wall, lit by the morning through the window: cut wide near it and
  // closing up a little towards the far end of the room.
  const light = (x: number, y: number) =>
    clamp(1.2 - Math.hypot((x - 306) * 0.6, (y - 150) * 1.1) / 600)
  const wall = gougeField(rng(2901), { x0: 0, x1: W, y0: 6, y1: SKIRT }, light, {
    spacing: 6,
    len: [18, 64],
    gap: [6, 22],
    max: 3.6,
  })
  const sky = gougeField(
    rng(2902),
    { x0: WIN.x0, x1: WIN.x1, y0: WIN.top, y1: WIN.sill },
    (x, y) =>
      clamp(
        0.74 -
          (y - WIN.top) / 520 +
          0.05 * Math.sin(x / 30) -
          Math.max(0, 1 - Math.hypot(x - SUN[0], y - SUN[1]) / 90) * 0.5,
      ),
    { spacing: 6, len: [20, 70], gap: [10, 30], max: 2.2 },
  )
  const sunRays = rays(rng(2904), SUN[0], SUN[1], { from: 20, to: 70, every: 10, width: 1.8 })
  // The tiled floor: squares in perspective, alternately ink and paper.
  const V: Pt = [430, 120]
  let tiles = ''
  const rows = [SKIRT + 2]
  for (let k = 0; rows[k] < H + 10; k++) rows.push(rows[k] + 9 + k * 4.2)
  const xAt = (x: number, y: number) => V[0] + (x - V[0]) * ((y - V[1]) / (SKIRT - V[1]))
  for (let k = 0; k < rows.length - 1; k++) {
    const y0 = rows[k]
    const y1 = rows[k + 1]
    for (let j = -30; j < 30; j++) {
      if ((j + k) % 2) continue
      const x = V[0] + j * 30
      const a = xAt(x, y0)
      const b = xAt(x + 30, y0)
      const c = xAt(x + 30, y1)
      const d = xAt(x, y1)
      if (Math.max(a, b, c, d) < -10 || Math.min(a, b, c, d) > W + 10) continue
      tiles += `M${n(a)} ${n(y0)}L${n(b)} ${n(y0)}L${n(c)} ${n(y1)}L${n(d)} ${n(y1)}Z`
    }
  }
  // Panelling below the dado on the right: tall panels with lit edges.
  const r = rng(2903)
  let panelling = ''
  for (let x = 662; x < W; x += 58) {
    panelling += gouge(x + 6, 184, x + 6, SKIRT - 8, 1.1) + gouge(x + 8, 182, x + 50, 182, 1.1)
    panelling += gouge(
      x + between(r, 14, 30),
      196,
      x + between(r, 30, 46),
      196 + between(r, 20, 50),
      0.6,
    )
  }
  // The cloth of state: a plain lozenge pattern woven into it, and the
  // canopy's valance with its scalloped edge.
  let cloth = ''
  for (let y = CLOTH.top + 20; y < SKIRT - 10; y += 26)
    for (let x = CLOTH.x0 + 22; x < CLOTH.x1 - 12; x += 26)
      cloth += `M${x} ${y - 9}L${x + 7} ${y}L${x} ${y + 9}L${x - 7} ${y}Z`
  let valance = `M${CLOTH.x0 - 14} ${CLOTH.top - 22}H${CLOTH.x1 + 14}V${CLOTH.top + 2}`
  for (let x = CLOTH.x1 + 14; x > CLOTH.x0 - 14; x -= 13)
    valance += `Q${n(x - 6.5)} ${CLOTH.top + 14} ${n(x - 13)} ${CLOTH.top + 2}`
  valance += 'Z'
  cached = { wall, sky, sunRays, tiles, panelling, cloth, valance }
  return cached
}

const ARCH = `M${WIN.x0} ${WIN.sill}V${WIN.top + 90}A${(WIN.x1 - WIN.x0) / 2} ${(WIN.x1 - WIN.x0) / 2} 0 0 1 ${WIN.x1} ${WIN.top + 90}V${WIN.sill}Z`

function PatienceOnAMonument({ uid }: ArtProps) {
  const m = marks()
  const winClip = `${uid}-win`
  return (
    <>
      <defs>
        <clipPath id={winClip}>
          <path d={ARCH} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [360, 210], push: 1.03 })}>
        <path d={m.wall} fill={PAPER} />
        {/* the tall window and the morning outside it */}
        <path d={ARCH} fill={PAPER} />
        <g clipPath={`url(#${winClip})`}>
          <path d={m.sky} fill={INK} />
          <g className="lc-fade-in" style={timing({ dur: 1.6 })}>
            <path d={m.sunRays} fill={INK} />
          </g>
          <circle
            cx={SUN[0]}
            cy={SUN[1]}
            r={15}
            fill={PAPER}
            stroke={INK}
            strokeWidth={LINE.bold}
          />
          <path
            d={`M${(WIN.x0 + WIN.x1) / 2} ${WIN.top}V${WIN.sill}M${WIN.x0} ${WIN.top + 104}H${WIN.x1}`}
            stroke={INK}
            strokeWidth={5}
          />
        </g>
        <path d={ARCH} fill="none" stroke={PAPER} strokeWidth={10} />
        <path d={ARCH} fill="none" stroke={INK} strokeWidth={3.4} />
        {/* the deep reveal under the sill, and the stone seat in the window */}
        <path
          d={`M${WIN.x0 - 6} ${WIN.sill + 4}H${WIN.x1 + 6}V${SEAT.top}H${WIN.x0 - 6}Z`}
          fill={INK}
        />
        <path d={gouge(WIN.x0, WIN.sill + 8, WIN.x1, WIN.sill + 8, 1.2)} fill={PAPER} />
        <path
          d={`M${SEAT.x0} ${SEAT.top}H${SEAT.x1}V${SEAT.front}H${SEAT.x0}Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.bold}
        />
        <path
          d={`M${SEAT.x0 + 8} ${SEAT.front}H${SEAT.x1 - 8}V${FEET - 2}H${SEAT.x0 + 8}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={gouge(SEAT.x0 + 22, SEAT.front + 9, SEAT.x1 - 22, SEAT.front + 9, 1.1)}
          fill={PAPER}
        />

        {/* the panelling and the dado rail on the right */}
        <rect x={650} y={174} width={W - 650} height={5} fill={PAPER} />
        <path d={m.panelling} fill={PAPER} />

        {/* the cloth of state hung behind the Duke's chair, under its canopy */}
        <path
          d={`M${CLOTH.x0} ${CLOTH.top}H${CLOTH.x1}V${SKIRT}H${CLOTH.x0}Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.bold}
        />
        <path d={m.cloth} fill="none" stroke={INK} strokeWidth={1.1} />
        <path
          d={`M${CLOTH.x0 + 7} ${CLOTH.top + 7}H${CLOTH.x1 - 7}V${SKIRT - 4}H${CLOTH.x0 + 7}Z`}
          fill="none"
          stroke={INK}
          strokeWidth={LINE.bold}
        />
        <path d={m.valance} fill={INK} />
        <path
          d={gouge(CLOTH.x0 - 10, CLOTH.top - 12, CLOTH.x1 + 10, CLOTH.top - 12, 1.2)}
          fill={PAPER}
        />

        {/* the tiled floor */}
        <rect x={0} y={SKIRT} width={W} height={H - SKIRT} fill={PAPER} />
        <path d={m.tiles} fill={INK} />
        {/* the seat's foot, over the floor */}
        <path
          d={`M${SEAT.x0 + 8} ${SEAT.front}H${SEAT.x1 - 8}V${FEET - 2}H${SEAT.x0 + 8}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={`M${SEAT.x0} ${SEAT.top}H${SEAT.x1}V${SEAT.front}H${SEAT.x0}Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.bold}
        />
        <path
          d={gouge(SEAT.x0 + 22, SEAT.front + 9, SEAT.x1 - 22, SEAT.front + 9, 1.1)}
          fill={PAPER}
        />

        {/* Orsino's chair of state, its back open between the rails */}
        <path d={CHAIR} fill="none" stroke={PAPER} strokeWidth={9.6} strokeLinejoin="round" />
        <path d={CHAIR} fill="none" stroke={INK} strokeWidth={6} strokeLinejoin="round" />
        <path d={FINIALS} fill={INK} stroke={PAPER} strokeWidth={1.4} />

        {/* Viola, as Cesario, seated still in the window, her hands in her lap */}
        <Person
          at={[262, FEET]}
          scale={1.06}
          pose={{
            look: 'cesario',
            body: seatedBody(54),
            legs: seatedLegs(54, 30),
            flush: true,
            far: {
              pts: [
                [-3, -116],
                [2, -90],
                [16, -64],
              ],
            },
            near: {
              pts: [
                [4, -116],
                [12, -88],
                [22, -62],
              ],
            },
          }}
        />
        {/* Orsino in his chair, leaning to her, one hand open: "And what's her history?" */}
        <Person
          at={[590, FEET]}
          scale={1.04}
          flip
          pose={{
            look: 'orsino',
            body: seatedBody(56, 6),
            legs: seatedLegs(56, 32),
            far: {
              pts: [
                [2, -118],
                [-4, -92],
                [10, -80],
              ],
            },
            near: {
              pts: [
                [10, -118],
                [24, -96],
                [44, -98],
              ],
              hand: 'open',
              deg: -12,
              thumb: -1,
            },
          }}
        />
      </g>
    </>
  )
}

export const patienceOnAMonument: LinocutArt = { width: W, height: H, Draw: PatienceOnAMonument }
