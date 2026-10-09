import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { footShadow } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { Dais, Throne } from './palace'
import { FLEUR, Person, type P } from './people'

/**
 * Act 2, Scene 4: "The French court divided", the seventh moment in the
 * guide's timeline. Every detail is from the scene in the held edition
 * (src/data/full-texts/henry-v.ts, Project Gutenberg #1521), set "France.
 * The King's palace.":
 *
 * - "Enter the French King, the Dauphin, the Dukes of Berry and Brittany, the
 *   Constable and others." The King sits in state, as Henry does in the third
 *   panel, and the two courts are cut alike on purpose: there the English King
 *   sat on the left and the French came in on the right; here the French King
 *   sits on the left and the English envoy has come in on the right. He is
 *   drawn from the kit (./people.tsx): older than Henry, his hair white under
 *   the crown, the lilies of France on his gown. He fears what is coming:
 *   "let us fear The native mightiness and fate of him".
 * - The division is the Dauphin's and the Constable's. The Dauphin finds
 *   England "so idly king'd ... By a vain, giddy, shallow, humorous youth,
 *   That fear attends her not": so he stands with his chin up, smiling, a
 *   hand on his hip. The Constable answers him, "O peace, Prince Dauphin! You
 *   are too much mistaken in this king", so he points at him. The two face
 *   each other before the tall window, their profiles black against its light.
 *   (A finger raised in warning was cut first; at phone width a single
 *   raised finger can be misread, and a pointing hand cannot.)
 * - "Enter Exeter": the King's uncle, known by his grey beard, in his lord's
 *   gown and cloak, come with Henry's claim: "He sends you this most
 *   memorable line, In every branch truly demonstrative; Willing you overlook
 *   this pedigree". So he holds the pedigree out, unrolled: a family tree,
 *   the names as rounds and the lines of descent joining them, from the
 *   ancestor at its head ("Edward the Third") to the claimant at its foot.
 * - "Exeunt Messenger and certain Lords" to bring him in, so a lord of the
 *   court stands by the door behind him.
 * - The palace is the one the English lesson is set in (the eleventh panel),
 *   drawn plainly as a chamber of 1415: a stone wall, a tall leaded window, a
 *   tiled floor with the window's light lying on it, and an arched doorway.
 *
 * THE SPOT COLOUR is the French King's cloth of state, sprinkled with the
 * lilies of France cut in paper: the seat of the crown Exeter has come to
 * demand ("Deliver up the crown"). It is one large flat hanging, so at phone
 * width it stays a hanging, and the King's crown is printed in paper. The
 * French are drawn with the same care as the English. Nothing is taken from a
 * film or stage production.
 *
 * Seeds: 701 (wall), 702 (floor).
 */

const W = 860
const H = 340
/** Where the floor meets the wall. */
const FLOOR = 246

/** The tall leaded window behind the Constable and the Dauphin. */
const WIN = { x0: 344, x1: 408, top: 34, spring: 90, sill: 214 }
const WIN_MID = (WIN.x0 + WIN.x1) / 2
const LANCET = `M${WIN.x0} ${WIN.sill}V${WIN.spring}Q${WIN.x0} ${WIN.top + 20} ${WIN_MID} ${WIN.top}Q${WIN.x1} ${WIN.top + 20} ${WIN.x1} ${WIN.spring}V${WIN.sill}Z`
const GLASS = `M${WIN.x0 + 6} ${WIN.sill - 2}V${WIN.spring + 1}Q${WIN.x0 + 6} ${WIN.top + 26} ${WIN_MID} ${WIN.top + 8}Q${WIN.x1 - 6} ${WIN.top + 26} ${WIN.x1 - 6} ${WIN.spring + 1}V${WIN.sill - 2}Z`

/** The cloth of state behind the King's seat, and the doorway Exeter came in by. */
const CLOTH = { x0: 30, x1: 250, top: 18, hem: 238 }
const DOOR = { x0: 742, x1: 818, top: 112 }

/** Where each of them stands. */
const KING: P = [150, 282]
const CONSTABLE: P = [318, 324]
const DAUPHIN: P = [438, 324]
const EXETER: P = [618, 326]
/** A lord of the French court, who has brought him in. */
const LORD: P = [770, 312]

type Marks = {
  wall: string
  floorJoints: string
  floorDark: string
  pool: string
  leads: string
  lilies: string
  shadows: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const light = (x: number, y: number) =>
    Math.max(0.05, clamp(1 - Math.hypot((x - WIN_MID) * 0.6, (y - 130) * 1.1) / 270) * 0.9)
  const wall = gougeField(
    rng(701),
    { x0: 0, x1: W, y0: 6, y1: FLOOR - 6 },
    (x, y) =>
      x > WIN.x0 - 4 && x < WIN.x1 + 4 && y > WIN.top - 4 && y < WIN.sill + 6 ? 0 : light(x, y),
    { spacing: 6.4, len: [16, 64], gap: [6, 22], max: 3.4 },
  )
  // The floor: tiles in perspective towards a point behind the window, the
  // window's light lying on them in a pool that widens towards us.
  const r = rng(702)
  const vp: P = [WIN_MID, 40]
  let floorJoints = ''
  for (let xt = -900; xt <= 1800; xt += 46) {
    const xb = vp[0] + (xt - vp[0]) * ((H - vp[1]) / (FLOOR - vp[1]))
    floorJoints += `M${n(xt)} ${FLOOR}L${n(xb)} ${H}`
  }
  for (let i = 0, y = FLOOR + 6; y < H; i++) {
    floorJoints += `M0 ${n(y)}H${W}`
    y += 7 + i * 4.2
  }
  const pool = `M${WIN.x0 + 4} ${FLOOR}L${WIN.x1 - 4} ${FLOOR}L${WIN.x1 + 110} ${H}L${WIN.x0 - 80} ${H}Z`
  let floorDark = ''
  for (let i = 0; i < 40; i++) {
    const y = between(r, FLOOR + 6, H - 4)
    const t = (y - FLOOR) / (H - FLOOR)
    const edgeL = WIN.x0 + 4 - t * 84
    const edgeR = WIN.x1 - 4 + t * 114
    const left = r() < 0.5
    const x0 = left ? edgeL - between(r, 8, 90) * (0.4 + t) : edgeR + between(r, 4, 30)
    const len = between(r, 10, 40) * (0.5 + t)
    floorDark += gouge(x0, y, x0 + len, y + between(r, -0.6, 0.6), 0.5 + t * 1.2)
  }
  let leads = ''
  for (let k = -12; k <= 12; k++) {
    const x = WIN_MID + k * 12
    leads += `M${x - 90} ${WIN.sill + 40}L${x + 90} ${WIN.sill - 260}`
    leads += `M${x + 90} ${WIN.sill + 40}L${x - 90} ${WIN.sill - 260}`
  }
  // The lilies of France on the cloth of state, cut in paper, in staggered rows.
  const place = (d: string, at: P, s: number) =>
    d.replace(
      /(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/g,
      (_, xs: string, ys: string) => `${n(at[0] + Number(xs) * s)} ${n(at[1] + Number(ys) * s)}`,
    )
  let lilies = ''
  for (let row = 0, y = CLOTH.top + 46; y < CLOTH.hem - 18; row++, y += 40)
    for (let x = CLOTH.x0 + 26 + (row % 2) * 24; x < CLOTH.x1 - 16; x += 48)
      lilies += place(FLEUR, [x, y], 2.1)
  const shadows =
    footShadow(CONSTABLE[0] + 4, CONSTABLE[1] + 1, 30) +
    footShadow(DAUPHIN[0] - 4, DAUPHIN[1] + 1, 30) +
    footShadow(EXETER[0] - 4, EXETER[1] + 1, 30) +
    footShadow(LORD[0] - 4, LORD[1] + 1, 26)
  cached = { wall, floorJoints, floorDark, pool, leads, lilies, shadows }
  return cached
}

/**
 * The pedigree Exeter brings, "this most memorable line, In every branch
 * truly demonstrative": a long sheet with its roll at the head and the foot,
 * and on it a family tree, the names as rounds joined by the lines of
 * descent. In Exeter's frame (he faces left, so the frame is flipped); `top`
 * and `bottom` are the middle of the two rolls.
 */
function Pedigree({ top, bottom, w }: { top: P; bottom: P; w: number }) {
  const [x, y0] = top
  const y1 = bottom[1]
  const sheet = `M${n(x - w / 2)} ${n(y0)}H${n(x + w / 2)}V${n(y1)}H${n(x - w / 2)}Z`
  // The ancestor at the head, his sons below him, and the one line of
  // descent running on down the sheet to the claimant at its foot; the
  // other branches end.
  const nodes: [number, number][] = [
    [0, 0.06],
    [-0.3, 0.3],
    [0, 0.3],
    [0.3, 0.3],
    [-0.18, 0.54],
    [0.18, 0.54],
    [0.18, 0.76],
    [0, 0.95],
  ]
  const parent = [-1, 0, 0, 0, 2, 2, 5, 6]
  const at = (i: number): P => [x + nodes[i][0] * w, y0 + nodes[i][1] * (y1 - y0)]
  let lines = ''
  let rounds = ''
  for (let i = 0; i < nodes.length; i++) {
    const [cx, cy] = at(i)
    const rad = i === nodes.length - 1 ? 3.4 : 2.6
    rounds += `M${n(cx - rad)} ${n(cy)}a${rad} ${rad} 0 1 0 ${n(rad * 2)} 0a${rad} ${rad} 0 1 0 ${n(-rad * 2)} 0Z`
    if (parent[i] >= 0) {
      const [px, py] = at(parent[i])
      const midY = (py + cy) / 2
      lines += `M${n(px)} ${n(py)}V${n(midY)}H${n(cx)}V${n(cy)}`
    }
  }
  const roll = (y: number) =>
    `M${n(x - w / 2 - 3)} ${n(y - 3)}H${n(x + w / 2 + 3)}V${n(y + 3)}H${n(x - w / 2 - 3)}Z`
  return (
    <g>
      <path d={sheet} fill={PAPER} stroke={PAPER} strokeWidth={3.4} />
      <path d={sheet} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={lines} fill="none" stroke={INK} strokeWidth={1.1} />
      <path d={rounds} fill={INK} />
      <path d={roll(y0) + roll(y1)} fill={INK} stroke={PAPER} strokeWidth={1} />
    </g>
  )
}

function TheFrenchCourtDivided({ uid }: ArtProps) {
  const m = marks()
  const id = { glass: `${uid}-glass`, pool: `${uid}-pool`, dark: `${uid}-dark` }
  return (
    <>
      <defs>
        <clipPath id={id.glass}>
          <path d={GLASS} />
        </clipPath>
        <clipPath id={id.pool}>
          <path d={m.pool} />
        </clipPath>
        <clipPath id={id.dark}>
          <path d={`M0 ${FLOOR}H${W}V${H}H0Z${m.pool}`} clipRule="evenodd" />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [400, 190], push: 1.03 })}>
        {/* the stone of the French King's palace, lit round the window */}
        <path d={m.wall} fill={PAPER} />

        {/* the floor, the window's light lying across it */}
        <path d={m.pool} fill={PAPER} />
        <g clipPath={`url(#${id.pool})`}>
          <path d={m.floorJoints} stroke={INK} strokeWidth={LINE.carve} fill="none" />
        </g>
        <g clipPath={`url(#${id.dark})`}>
          <path d={m.floorJoints} stroke={PAPER} strokeWidth={LINE.fine} fill="none" />
          <path d={m.floorDark} fill={PAPER} />
        </g>
        <rect x={0} y={FLOOR - 4} width={W} height={4} fill={PAPER} />
        <path d={m.shadows} fill={INK} />

        {/* the leaded window */}
        <path d={LANCET} fill={PAPER} />
        <path d={GLASS} fill={PAPER} stroke={INK} strokeWidth={LINE.carve} />
        <g clipPath={`url(#${id.glass})`}>
          <path d={m.leads} stroke={INK} strokeWidth={LINE.hairline} fill="none" />
          <path
            d={`M${WIN.x0} 118H${WIN.x1}M${WIN.x0} 172H${WIN.x1}`}
            stroke={INK}
            strokeWidth={LINE.carve}
          />
        </g>
        <rect x={WIN.x0 - 10} y={WIN.sill} width={WIN.x1 - WIN.x0 + 20} height={7} fill={PAPER} />

        {/* the doorway Exeter came in by */}
        <path
          d={`M${DOOR.x0} ${FLOOR}V${DOOR.top + 40}Q${DOOR.x0} ${DOOR.top} ${(DOOR.x0 + DOOR.x1) / 2} ${DOOR.top - 6}Q${DOOR.x1} ${DOOR.top} ${DOOR.x1} ${DOOR.top + 40}V${FLOOR}`}
          fill="none"
          stroke={PAPER}
          strokeWidth={7}
        />
        <path
          d={`M${DOOR.x0 + 12} ${FLOOR}V${DOOR.top + 46}Q${DOOR.x0 + 12} ${DOOR.top + 14} ${(DOOR.x0 + DOOR.x1) / 2} ${DOOR.top + 8}Q${DOOR.x1 - 12} ${DOOR.top + 14} ${DOOR.x1 - 12} ${DOOR.top + 46}V${FLOOR}`}
          fill="none"
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />

        {/* the French King's cloth of state, sprinkled with the lilies of France */}
        <path
          d={`M${CLOTH.x0} ${CLOTH.top}H${CLOTH.x1}V${CLOTH.hem}H${CLOTH.x0}Z`}
          fill={RED}
          stroke={PAPER}
          strokeWidth={2}
        />
        <path
          d={`M${CLOTH.x0 + 7} ${CLOTH.top + 26}H${CLOTH.x1 - 7}V${CLOTH.hem - 7}H${CLOTH.x0 + 7}Z`}
          fill="none"
          stroke={PAPER}
          strokeWidth={3.2}
        />
        <path d={m.lilies} fill={PAPER} />
        <path
          d={(() => {
            let v = `M${CLOTH.x0 - 4} ${CLOTH.top - 6}H${CLOTH.x1 + 4}V${CLOTH.top + 14}`
            for (let x = CLOTH.x1 + 4; x > CLOTH.x0 - 4; x -= 16)
              v += `L${x - 8} ${CLOTH.top + 24}L${x - 16} ${CLOTH.top + 14}`
            return v + 'Z'
          })()}
          fill={INK}
          stroke={PAPER}
          strokeWidth={1.8}
          strokeLinejoin="round"
        />
        <Dais x0={36} x1={254} y={KING[1]} />
        <Throne x={KING[0]} seatY={226} top={62} floor={KING[1]} />

        {/* the French King on his seat, troubled */}
        <Person
          at={KING}
          scale={1.3}
          pose={{
            look: 'french-king',
            seated: { seat: 52, knee: [36, -56] },
            mantle: 0,
            brow: 'sorrow',
            head: { at: [6, -128], rot: 4 },
            body: { neck: [3, -106], hip: [0, -60] },
            far: {
              pts: [
                [-2, -102],
                [4, -80],
                [16, -70],
              ],
            },
            near: {
              pts: [
                [6, -102],
                [16, -80],
                [32, -74],
              ],
            },
          }}
        />

        {/* the Constable, pointing at the Dauphin: "You are too much mistaken in this king" */}
        <Person
          at={CONSTABLE}
          scale={1.24}
          pose={{
            look: 'constable',
            brow: 'frown',
            mouth: 'open',
            far: {
              pts: [
                [-3, -132],
                [-6, -108],
                [-4, -84],
              ],
            },
            near: {
              pts: [
                [4, -132],
                [20, -112],
                [40, -120],
              ],
              hand: 'point',
              deg: -8,
            },
          }}
        />

        {/* the Dauphin, his chin up, waving the warning away */}
        <Person
          at={DAUPHIN}
          scale={1.24}
          flip
          pose={{
            look: 'dauphin',
            head: { rot: -7 },
            mouth: 'smile',
            far: {
              pts: [
                [-3, -132],
                [-20, -108],
                [-6, -92],
              ],
            },
            near: {
              pts: [
                [4, -132],
                [22, -110],
                [8, -92],
              ],
            },
          }}
        />

        {/* Exeter, come from England, holding out the pedigree */}
        <Person
          at={EXETER}
          scale={1.24}
          flip
          pose={{
            look: 'exeter',
            far: {
              pts: [
                [-3, -132],
                [10, -102],
                [30, -66],
              ],
              hand: 'grip',
              deg: 10,
            },
            near: {
              pts: [
                [4, -132],
                [22, -118],
                [34, -138],
              ],
              hand: 'grip',
              deg: -30,
            },
          }}
        >
          <Pedigree top={[42, -140]} bottom={[42, -62]} w={32} />
        </Person>

        {/* a lord of the court by the door */}
        <Person
          at={LORD}
          scale={1.1}
          flip
          pose={{
            look: 'french-lord',
            variant: 2,
            far: {
              pts: [
                [-3, -132],
                [-6, -108],
                [-4, -84],
              ],
            },
            near: {
              pts: [
                [4, -132],
                [8, -108],
                [10, -84],
              ],
            },
          }}
        />
      </g>
    </>
  )
}

export const theFrenchCourtDivided: LinocutArt = {
  width: W,
  height: H,
  Draw: TheFrenchCourtDivided,
}
