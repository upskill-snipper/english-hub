import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, seatedFrame, type P } from './people'

/**
 * Act 1, Scene 2: "The new King and the mourning son", the second moment in
 * the guide's timeline. Every detail is from the scene in the held edition
 * (Project Gutenberg #1524, src/data/full-texts/hamlet.ts):
 *
 * - "Elsinore. A room of state in the Castle. Enter Claudius King of Denmark,
 *   Gertrude the Queen, Hamlet, Polonius, Laertes, Voltemand, Cornelius,
 *   Lords and Attendant." A room of state has a cloth of state, the canopy
 *   hung behind the throne, so the King and Queen sit enthroned under one,
 *   on a dais, lit; the room round them is dark.
 * - The King has married his brother's widow "With mirth in funeral, and with
 *   dirge in marriage", and "The serpent that did sting thy father's life Now
 *   wears his crown" (1.5). The crown is the spot colour, on the head that
 *   wears it. He smiles ("one may smile, and smile, and be a villain", 1.5)
 *   and holds out a hand to his nephew: "think of us As of a father ... Our
 *   chiefest courtier, cousin, and our son".
 * - THE QUEEN: "Good Hamlet, cast thy nighted colour off, And let thine eye
 *   look like a friend on Denmark. Do not for ever with thy vailed lids Seek
 *   for thy noble father in the dust." So she leans from her throne towards
 *   him, a hand held out, and Hamlet's eyes are cast down.
 * - HAMLET: "Seems, madam! Nay, it is; I know not seems. 'Tis not alone my
 *   inky cloak, good mother, Nor customary suits of solemn black ... But I
 *   have that within which passeth show". So he stands apart in the dark of
 *   the room, all in black, his cloak about him, a hand on his breast, nearer
 *   to us than anyone, with three lords of the court further off behind him:
 *   the court is all there, and he is with none of it. (The stage direction
 *   brings in "Lords and Attendant" and no lady, so the third figure, first
 *   cut as a lady, is a lord, his hands folded at his waist. Reviewed
 *   2 October 2026.)
 * - Laertes, who has just been given leave to go back to France, and his
 *   father Polonius stand behind the King's throne. Voltemand and
 *   Cornelius have already left for Norway, and Horatio, Marcellus and
 *   Barnardo come in only when the court has gone, so none of them is drawn.
 *
 * Seeds: 1201 (wall), 1202 (floor).
 */

const W = 860
const H = 340
const FLOOR = 262
const DAIS = 278
/** The thrones' seat height, above the dais. */
const SEAT = 50
const QUEEN: P = [522, DAIS]
const KING: P = [650, DAIS]
const CLOTH = { x0: 448, x1: 724, y0: 22, y1: DAIS - 22 }

type Marks = {
  wall: string
  floor: string
  lattice: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The room is dark; the light is on the cloth of state and the dais.
  const light = (x: number, y: number) =>
    clamp(0.06 + 0.42 * clamp(1 - Math.hypot((x - 586) * 0.7, y - 140) / 330))
  const wall = gougeField(rng(1201), { x0: 0, x1: W, y0: 4, y1: FLOOR - 2 }, light, {
    spacing: 6.2,
  })
  const r = rng(1202)
  let floor = ''
  const vx = 430
  const vy = FLOOR - 260
  for (let xt = -900; xt < W + 900; xt += 52) {
    const xb = vx + (xt - vx) * ((H - vy) / (FLOOR - vy))
    floor += wedge(xt, FLOOR, xb, H, 0.9, 3)
  }
  for (const [y, w] of [
    [286, 1.2],
    [306, 1.7],
    [330, 2.2],
  ])
    floor += gouge(0, y, W, y + between(r, -1, 1), w)
  // The cloth of state: a lattice of lozenges cut in ink on the pale cloth.
  let lattice = ''
  const { x0, x1, y0, y1 } = CLOTH
  for (let k = -12; k < 20; k++) {
    const a = x0 + k * 26
    lattice += `M${n(a)} ${y0 + 30}L${n(a + (y1 - y0 - 30))} ${y1}`
    lattice += `M${n(a + (y1 - y0 - 30))} ${y0 + 30}L${n(a)} ${y1}`
  }
  cached = { wall, floor, lattice }
  return cached
}

/**
 * A high-backed chair of state facing left, its seat `SEAT` above the dais:
 * the seat and its front, and a broad back rising behind the sitter to a
 * peak with a finial at each corner.
 */
function throne(x: number) {
  const top = DAIS - 176
  return (
    `M${x - 30} ${DAIS}L${x - 30} ${DAIS - SEAT}L${x - 34} ${DAIS - SEAT - 4}L${x - 34} ${DAIS - SEAT - 12}` +
    `L${x + 6} ${DAIS - SEAT - 12}L${x + 6} ${top + 22}L${x + 3} ${top + 10}L${x + 9} ${top + 10}` +
    `L${x + 12} ${top + 16}L${x + 24} ${top + 4}L${x + 36} ${top + 16}L${x + 39} ${top + 10}` +
    `L${x + 45} ${top + 10}L${x + 42} ${top + 22}L${x + 42} ${DAIS}Z`
  )
}
/** The carving on a throne's back, cut in paper: a panel, and the line of its seat. */
function throneCuts(x: number) {
  const top = DAIS - 176
  return (
    gouge(x + 13, top + 30, x + 13, DAIS - SEAT - 24, 1.1) +
    gouge(x + 35, top + 30, x + 35, DAIS - SEAT - 24, 1.1) +
    gouge(x + 13, top + 30, x + 35, top + 30, 1) +
    gouge(x - 32, DAIS - SEAT - 8, x + 40, DAIS - SEAT - 8, 1.1)
  )
}

function TheNewKingAndTheMourningSon({ uid }: ArtProps) {
  const m = marks()
  const clothClip = `${uid}-cloth`
  const { x0, x1, y0, y1 } = CLOTH
  const qf = seatedFrame(SEAT)
  return (
    <>
      <defs>
        <clipPath id={clothClip}>
          <rect x={x0 + 8} y={y0 + 30} width={x1 - x0 - 16} height={y1 - y0 - 30} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [560, 170], push: 1.03 })}>
        <path d={m.wall} fill={PAPER} />

        {/* the cloth of state, its valance and its lattice */}
        <rect
          x={x0}
          y={y0}
          width={x1 - x0}
          height={y1 - y0}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.bold}
        />
        <g clipPath={`url(#${clothClip})`}>
          <path d={m.lattice} stroke={INK} strokeWidth={1.3} fill="none" />
        </g>
        <path
          d={`M${x0 - 10} ${y0}L${x1 + 10} ${y0}L${x1 + 10} ${y0 + 26}L${x0 - 10} ${y0 + 26}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={Array.from({ length: 22 }, (_, i) => {
            const x = x0 - 4 + i * ((x1 - x0 + 8) / 21)
            return `M${n(x)} ${y0 + 26}L${n(x)} ${y0 + 34}`
          }).join('')}
          stroke={INK}
          strokeWidth={2.4}
        />
        <path d={gouge(x0 - 6, y0 + 13, x1 + 6, y0 + 13, 1.6)} fill={PAPER} />

        {/* the floor of the room, and the dais under the thrones */}
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />
        <path d={`M-10 ${FLOOR}H${W + 10}`} stroke={INK} strokeWidth={LINE.bold} />
        <path
          d={`M420 ${DAIS + 14}L420 ${DAIS}L436 ${DAIS - 14}L740 ${DAIS - 14}L756 ${DAIS}L756 ${DAIS + 14}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={gouge(438, DAIS - 9, 738, DAIS - 9, 1.4) + gouge(424, DAIS + 6, 752, DAIS + 6, 1.4)}
          fill={PAPER}
        />

        {/* the two thrones */}
        <path
          d={throne(QUEEN[0]) + throne(KING[0])}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d={throneCuts(QUEEN[0]) + throneCuts(KING[0])} fill={PAPER} />

        {/* three lords of the court, further off in the dark of the room */}
        <Person
          at={[70, 300]}
          scale={0.86}
          pose={{
            look: 'lord',
            variant: 1,
            far: {
              pts: [
                [-4, -130],
                [-8, -104],
                [-6, -82],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [5, -128],
                [9, -104],
                [11, -80],
              ],
              hand: 'mitt',
            },
          }}
        />
        <Person
          at={[128, 302]}
          scale={0.86}
          pose={{
            look: 'lord',
            variant: 2,
            far: {
              pts: [
                [-4, -130],
                [0, -106],
                [12, -100],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [5, -128],
                [9, -106],
                [17, -102],
              ],
              hand: 'mitt',
            },
          }}
        />
        <Person
          at={[188, 304]}
          scale={0.86}
          pose={{
            look: 'lord',
            variant: 0,
            far: {
              pts: [
                [-4, -130],
                [-8, -104],
                [-6, -82],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [5, -128],
                [9, -104],
                [11, -80],
              ],
              hand: 'mitt',
            },
          }}
        />

        {/* Polonius, and Laertes with his hand on his sword, behind the King's throne */}
        <Person
          at={[798, DAIS + 2]}
          scale={1}
          flip
          pose={{
            look: 'laertes',
            sword: true,
            cloak: 2,
            far: {
              pts: [
                [-4, -130],
                [-8, -104],
                [-6, -82],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [5, -128],
                [10, -104],
                [4, -82],
              ],
              hand: 'grip',
              deg: 120,
            },
          }}
        />
        <Person
          at={[724, DAIS + 6]}
          scale={1}
          flip
          pose={{
            look: 'polonius',
            head: { rot: 4 },
            far: {
              pts: [
                [-4, -130],
                [-8, -104],
                [-6, -82],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [5, -128],
                [12, -104],
                [20, -92],
              ],
              hand: 'mitt',
              deg: 40,
            },
          }}
        />

        {/* the King, smiling, his hand held out to his "son" */}
        <Person
          at={KING}
          scale={1.02}
          flip
          pose={{
            look: 'claudius',
            crownRed: true,
            mouth: 'smile',
            seated: { seat: SEAT, knee: [36, -SEAT - 8] },
            far: {
              pts: [
                [-4, qf.shoulder[1]],
                [-2, qf.shoulder[1] + 24],
                [20, qf.waist[1] - 2],
              ],
              hand: 'mitt',
              deg: 4,
            },
            near: {
              pts: [
                [5, qf.shoulder[1] + 2],
                [20, qf.shoulder[1] + 22],
                [40, qf.shoulder[1] + 16],
              ],
              hand: 'open',
              deg: -16,
              thumb: -1,
            },
          }}
        />

        {/* the Queen, leaning towards her son: "cast thy nighted colour off" */}
        <Person
          at={QUEEN}
          scale={1.02}
          flip
          pose={{
            look: 'gertrude',
            seated: { seat: SEAT, knee: [34, -SEAT - 8] },
            body: { neck: [8, qf.neck[1] + 2], hip: qf.waist },
            head: { at: [12, qf.head[1] + 3], rot: 8 },
            far: {
              pts: [
                [4, qf.shoulder[1] + 2],
                [12, qf.shoulder[1] + 24],
                [26, qf.waist[1] - 2],
              ],
              hand: 'mitt',
              deg: 6,
            },
            near: {
              pts: [
                [12, qf.shoulder[1] + 2],
                [30, qf.shoulder[1] + 18],
                [50, qf.shoulder[1] + 12],
              ],
              hand: 'open',
              deg: -12,
              thumb: -1,
            },
          }}
        />

        {/* Hamlet apart in the dark, in his inky cloak: "I know not seems" */}
        <Person
          at={[346, 332]}
          scale={1.14}
          pose={{
            look: 'hamlet',
            eye: 'down',
            brow: 'sorrow',
            head: { rot: 10 },
            cloak: 3,
            far: {
              pts: [
                [-4, -130],
                [-6, -104],
                [-2, -82],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [5, -128],
                [16, -108],
                [6, -116],
              ],
              hand: 'open',
              deg: 178,
              size: 14,
              thumb: -1,
            },
          }}
        />
      </g>
    </>
  )
}

export const theNewKingAndTheMourningSon: LinocutArt = {
  width: W,
  height: H,
  Draw: TheNewKingAndTheMourningSon,
}
