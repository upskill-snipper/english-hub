import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, gouge, n, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  CandleStick,
  Floor,
  FLOOR,
  H,
  W,
  flameGlow,
  flameLight,
  roomMarks,
  shadowPool,
} from './acts-3-4-rooms'
import { Person, rapier, type P, type Pose } from './people'

/**
 * Act 3, Scene 4: "The closet scene", the twelfth moment in the guide's
 * timeline. Every detail is from the held edition
 * (src/data/full-texts/hamlet.ts):
 *
 * - "Another room in the Castle": the Queen's closet, her own room, by night,
 *   straight after the King's prayer. Its one light is a candle on a small
 *   table, its flame the spot colour.
 * - "[Polonius goes behind the arras.]" So an arras, a woven hanging, hangs
 *   from its rod on the right, falling in heavy folds to a fringe a hand's
 *   breadth above the floor.
 * - "Come, come, and sit you down, you shall not budge." "What wilt thou do?
 *   Thou wilt not murder me? Help, help, ho!" "How now? A rat? [Draws.] Dead
 *   for a ducat, dead! [Makes a pass through the arras.]" "O me, what hast
 *   thou done?" "Nay, I know not. Is it the King?" So the picture is the
 *   moment after the pass. The Queen has started up from her chair on the
 *   left, her hands up and her eyes wide. Hamlet stands before the arras, his
 *   face to it, the rapier drawn back out of it and held low at his side, its
 *   point to the floor behind him. In the arras, at the height of his chest,
 *   is the rent the blade made.
 *
 * THE QUOTATION on the panel is the Queen's, spoken at the moment drawn. The
 * guide's own, "Thou wretched, rash, intruding fool, farewell!", comes after
 * Hamlet has drawn Polonius out from behind the arras ("[Draws forth
 * Polonius.]"), which is not drawn; the key-moments player prints it under the
 * panel.
 *
 * SAFEGUARDING. The play's rules (./people.tsx): Polonius dies behind the
 * arras and is never shown. The arras hangs straight: nothing behind it or
 * under its hem, no shape against it, no foot, no hand. The rent is a dark
 * slit in the weave and nothing more; no red is near it or on the blade, and
 * the blade points away from the arras and from the Queen. The Ghost, who
 * comes later in the scene, is not drawn: this is the one moment before
 * anyone knows who has died.
 *
 * Nothing is taken from a film or stage production. Seeds: 1201 (the room),
 * 1202 (the candle's light), 1203 (the arras).
 */

const FLAME: P = [292, 178]
/** The arras: its rod's left end, its top and its hem, running out of the picture at the right. */
const ARRAS = { x0: 508, x1: 872, top: 34, bottom: 252 }
/** Where the rapier passed through the arras: the rent's centre. */
const RENT: P = [559, 146]
const QUEEN_AT: P = [150, 326]
const HAMLET_AT: P = [462, 326]

const light = flameLight(FLAME, 540, 0.08)

/** The arras's hem: a slow wave, a fold every FOLD units. */
const FOLD = 42
const hem = (x: number) => ARRAS.bottom + 3.4 * Math.sin(((x - ARRAS.x0) / FOLD) * Math.PI * 2)

type Marks = {
  room: ReturnType<typeof roomMarks>
  glow: string
  cloth: string
  folds: string
  border: string
  borderCuts: string
  flowers: string
  fringe: string
  rings: string
}
let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const behindArras = (x: number, y: number) =>
    x > ARRAS.x0 - 12 && y > ARRAS.top - 10 && y < ARRAS.bottom + 4
  const r = rng(1203)
  const { x0, x1, top, bottom } = ARRAS
  let cloth = `M${x0} ${top}H${x1}`
  for (let x = x1; x >= x0; x -= 4) cloth += `L${n(x)} ${n(hem(x))}`
  cloth += 'Z'
  // The folds: in each, a shadow cut in ink, narrow where the cloth is
  // gathered at the rod and widening as it falls, and a lit ridge beside it.
  let folds = ''
  for (let x = x0 + FOLD * 0.75; x < x1; x += FOLD) {
    folds += wedge(x, top + 6, x + between(r, -1, 1), bottom + 2, 2.4, 11)
    folds += wedge(x - 9, top + 20, x - 10, bottom - 4, 0.8, 2.6)
    folds += wedge(x + 9, top + 30, x + 11, bottom - 2, 0.6, 2)
  }
  // The woven border at the top and the foot: a dark band with lozenges cut in it.
  const band = (y: number) => `M${x0} ${y}H${x1}V${y + 13}H${x0}Z`
  const border = band(top + 7) + band(bottom - 24)
  let borderCuts = ''
  for (let x = x0 + 9; x < x1; x += 15) {
    for (const y of [top + 13.5, bottom - 17.5])
      borderCuts += `M${n(x - 4.4)} ${y}L${n(x)} ${y - 3}L${n(x + 4.4)} ${y}L${n(x)} ${y + 3}Z`
  }
  // The field: small woven flowers in rows, each four petals round a heart.
  let flowers = ''
  for (let row = 0, y = top + 40; y < bottom - 36; row++, y += 30) {
    for (let x = x0 + 22 + (row % 2) * 21; x < x1; x += 42) {
      const s = between(r, 3.4, 4)
      flowers +=
        `M${n(x)} ${n(y - s * 1.9)}Q${n(x + s)} ${n(y - s)} ${n(x)} ${n(y - s * 0.3)}Q${n(x - s)} ${n(y - s)} ${n(x)} ${n(y - s * 1.9)}Z` +
        `M${n(x)} ${n(y + s * 1.9)}Q${n(x + s)} ${n(y + s)} ${n(x)} ${n(y + s * 0.3)}Q${n(x - s)} ${n(y + s)} ${n(x)} ${n(y + s * 1.9)}Z` +
        `M${n(x - s * 1.9)} ${n(y)}Q${n(x - s)} ${n(y - s)} ${n(x - s * 0.3)} ${n(y)}Q${n(x - s)} ${n(y + s)} ${n(x - s * 1.9)} ${n(y)}Z` +
        `M${n(x + s * 1.9)} ${n(y)}Q${n(x + s)} ${n(y - s)} ${n(x + s * 0.3)} ${n(y)}Q${n(x + s)} ${n(y + s)} ${n(x + s * 1.9)} ${n(y)}Z`
    }
  }
  let fringe = ''
  for (let x = x0 + 2; x < x1; x += 3.6)
    fringe += `M${n(x)} ${n(hem(x))}l${n(between(r, -0.6, 0.6))} ${n(between(r, 5, 7))}`
  let rings = ''
  for (let x = x0 + 10; x < x1; x += 24)
    rings += `M${n(x - 3.4)} ${top - 3}a3.4 3.4 0 1 0 6.8 0a3.4 3.4 0 1 0 -6.8 0Z`
  cached = {
    room: roomMarks(1201, light, behindArras),
    glow: flameGlow(1202, FLAME, 100),
    cloth,
    folds,
    border,
    borderCuts,
    flowers,
    fringe,
    rings,
  }
  return cached
}

/**
 * The arras: a pale woven hanging on a rod, a dark border with lozenges at
 * the top and the foot, small flowers woven over the field, falling in heavy
 * folds to a fringe a hand's breadth above the floor.
 */
function Arras({ uid }: { uid: string }) {
  const m = marks()
  const clip = `${uid}-arras`
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <path d={m.cloth} />
        </clipPath>
      </defs>
      <path d={m.cloth} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} />
      <g clipPath={`url(#${clip})`}>
        <path d={m.flowers} fill={INK} />
        <path d={m.border} fill={INK} />
        <path d={m.borderCuts} fill={PAPER} />
        <path d={m.folds} fill={INK} />
      </g>
      <path d={m.fringe} fill="none" stroke={INK} strokeWidth={1.3} />
      <path d={m.fringe} fill="none" stroke={PAPER} strokeWidth={0.5} />
      {/* the rod, its finial and its rings */}
      <rect
        x={ARRAS.x0 - 12}
        y={ARRAS.top - 8}
        width={W}
        height={5.6}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.2}
      />
      <circle
        cx={ARRAS.x0 - 14}
        cy={ARRAS.top - 5.2}
        r={4.6}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.2}
      />
      <path d={m.rings} fill="none" stroke={PAPER} strokeWidth={1.3} />
    </>
  )
}

/**
 * The rent where the pass went through: a short dark slit in the weave, its
 * lips cut in paper and a few loose threads standing from it. Nothing is
 * seen through it.
 */
function Rent({ at }: { at: P }) {
  const [x, y] = at
  return (
    <g>
      <path
        d={`M${n(x - 1.6)} ${n(y - 26)}Q${n(x + 7)} ${n(y - 2)} ${n(x + 1)} ${n(y + 26)}Q${n(x - 7)} ${n(y + 2)} ${n(x - 1.6)} ${n(y - 26)}Z`}
        fill={INK}
        stroke={INK}
        strokeWidth={2.4}
        strokeLinejoin="round"
      />
      <path
        d={`M${n(x - 1.6)} ${n(y - 26)}Q${n(x + 7)} ${n(y - 2)} ${n(x + 1)} ${n(y + 26)}Q${n(x - 7)} ${n(y + 2)} ${n(x - 1.6)} ${n(y - 26)}Z`}
        fill="none"
        stroke={PAPER}
        strokeWidth={1.2}
      />
      <path
        d={`M${n(x + 5.6)} ${n(y - 11)}l7 -3.6M${n(x + 5.4)} ${n(y + 5)}l7.4 1.6M${n(x + 3.4)} ${n(y + 16)}l5.6 4M${n(x - 5.4)} ${n(y - 4)}l-7 -2.4M${n(x - 4.6)} ${n(y + 11)}l-6.4 3.2M${n(x - 3)} ${n(y - 17)}l-5 -4`}
        stroke={INK}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </g>
  )
}

/**
 * The Queen's chair, seen from in front, that she has started up from: a high
 * carved back with a cresting and two finials, arms on turned posts, a
 * cushioned seat and legs braced by a stretcher. Floor at y 0, centred on x 0.
 */
const CHAIR =
  'M-26 -64V-176C-26 -182 -22 -184 -18 -186C-14 -192 -6 -198 0 -198C6 -198 14 -192 18 -186C22 -184 26 -182 26 -176V-64Z' +
  'M-31 -178a5 5 0 1 0 10 0a5 5 0 1 0 -10 0ZM21 -178a5 5 0 1 0 10 0a5 5 0 1 0 -10 0Z' +
  'M-36 -104H-25V-64H-36ZM25 -104H36V-64H25Z' +
  'M-39 -110H-23V-102H-39ZM23 -110H39V-102H23Z' +
  'M-36 -74H36V-62H-36Z' +
  'M-34 -62H-25V0H-34ZM25 -62H34V0H25Z' +
  'M-31 -30H31V-24H-31Z'
const CHAIR_CUTS =
  gouge(-18, -172, -18, -92, 1.2) +
  gouge(18, -172, 18, -92, 1.2) +
  gouge(-15, -176, 15, -176, 1.1) +
  'M0 -160L9 -144L0 -128L-9 -144ZM0 -153L-5 -144L0 -135L5 -144Z' +
  gouge(-30.5, -98, -30.5, -68, 1) +
  gouge(30.5, -98, 30.5, -68, 1)
const CUSHION = 'M-25 -80C-25 -85 -20 -86 0 -86C20 -86 25 -85 25 -80V-74H-25Z'

/** The small table the candle stands on: a top, and a turned pedestal on a spreading foot. */
const TABLE =
  'M-34 -78H34V-70H-34Z' + 'M-5 -70H5L7 -40L4 -28L8 -10L20 -4V0H-20V-4L-8 -10L-4 -28L-7 -40Z'

/**
 * The Queen, started up from her chair and recoiling from what she has
 * seen: her head back, her eyes wide, her mouth open, her hands up before
 * her with the fingers spread. Bent arms and open hands: never a flat hand on
 * a straight arm.
 */
const QUEEN: Pose = {
  look: 'gertrude',
  head: { rot: -8 },
  body: { neck: [-4, -132], hip: [0, -94] },
  eye: 'wide',
  mouth: 'open',
  hem: { front: 24, back: 42 },
  far: {
    pts: [
      [-7, -126],
      [12, -120],
      [30, -138],
    ],
    hand: 'open',
    deg: -56,
    thumb: -1,
  },
  near: {
    pts: [
      [1, -126],
      [24, -116],
      [44, -126],
    ],
    hand: 'open',
    deg: -30,
    thumb: 1,
  },
}

/**
 * Hamlet, his face to the arras: the rapier drawn back out of it and held low
 * at his side in the near hand, its point to the floor behind him; the far
 * arm at his side. His mouth is open: "Is it the King?"
 */
const HAMLET: Pose = {
  look: 'hamlet',
  head: { rot: -3 },
  cloak: 8,
  mouth: 'open',
  legs: {
    far: [
      [-3, -70],
      [-12, -37],
      [-20, -3],
    ],
    near: [
      [3, -70],
      [12, -37],
      [16, -3],
    ],
  },
  far: {
    pts: [
      [-4, -132],
      [-10, -106],
      [-8, -82],
    ],
  },
  near: {
    pts: [
      [5, -132],
      [10, -106],
      [18, -88],
    ],
    hand: 'grip',
    deg: 124,
  },
}
const GRIP: P = [15, -83.6]
const BLADE_DEG = 124
const BLADE_LEN = 86

function TheClosetScene({ uid }: ArtProps) {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [470, 200], push: 1.03 })}>
      <path d={m.room.wall} fill={PAPER} />
      <path d={m.glow} fill={PAPER} />
      <Floor marks={m.room} />
      <Arras uid={uid} />
      <Rent at={RENT} />
      {/* the Queen's chair behind her, and the candle on its table */}
      <g transform={`translate(92 ${FLOOR + 40}) scale(1.12)`}>
        <path d={CHAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path d={CHAIR_CUTS} fill={PAPER} />
        <path d={CUSHION} fill={PAPER} stroke={INK} strokeWidth={1.2} />
      </g>
      <g transform={`translate(${FLAME[0]} 300)`}>
        <path d={TABLE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path d={gouge(-30, -74, 30, -74, 1)} fill={PAPER} />
      </g>
      <CandleStick flame={FLAME} base={222} />
      <path
        d={shadowPool(QUEEN_AT[0], 330, 52, 4) + shadowPool(HAMLET_AT[0] - 4, 330, 46, 4)}
        fill={INK}
      />
      <Person pose={QUEEN} at={QUEEN_AT} scale={1.3} />
      <Person pose={HAMLET} at={HAMLET_AT} scale={1.3}>
        <path
          d={rapier(GRIP, BLADE_DEG, BLADE_LEN)}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.fine}
          strokeLinejoin="round"
        />
      </Person>
    </g>
  )
}

export const theClosetScene: LinocutArt = { width: W, height: H, Draw: TheClosetScene }
