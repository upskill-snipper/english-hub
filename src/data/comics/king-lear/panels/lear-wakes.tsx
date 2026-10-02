import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Kneel } from './kneel'
import { Person, type P } from './people'
import { FarTent } from './the-british-camp'

/**
 * Act 4, Scene 7: "Lear wakes", the eighteenth moment in the guide's
 * timeline. Every detail is from the scene in the held edition
 * (src/data/full-texts/king-lear.ts):
 *
 * - "A Tent in the French Camp." "Lear on a bed, asleep". So the room is a
 *   pavilion's inside: canvas walls with their seams, the valance along the
 *   eaves, the roof's seams running up to the pole, and the bed. Lear wakes
 *   to "Fair daylight?", so the door stands open on the day, its flaps tied
 *   back, a tent of the camp beyond it; the light comes in there and the far
 *   corner, by the bed, is in shadow.
 * - "In the heaviness of sleep / We put fresh garments on him." He is the
 *   kit's Lear in his gown with its fur collar, without the court's mantle,
 *   as his portrait shows him in this scene (../portraits/king-lear.tsx).
 * - "O, look upon me, sir, / And hold your hands in benediction o'er me. /
 *   No, sir, you must not kneel." She asks his blessing as a child does, on
 *   her knees (./kneel.tsx), and he, risen to the edge of the bed, would
 *   kneel to her: so he sits forward, reaching his hand out to her, and she
 *   reaches hers up to it. Cordelia is the kit's, with the circlet of the
 *   Queen of France (`crown`), her face and hair lit.
 * - "Pray, do not mock me: / I am a very foolish fond old man". The
 *   quotation.
 * - Kent is still disguised: "These weeds are memories of those worser
 *   hours: / I prythee put them off." / "Pardon, dear madam; / Yet to be
 *   known shortens my made intent." So he is the kit's 'caius', hooded,
 *   standing in the light from the door, watching.
 *
 * NOT DRAWN: the Physician, the Gentleman and the others attending, and the
 * music. They are there, but the picture holds only the father, the
 * daughter and the friend the moment is about. Nor her tears ("Be your tears
 * wet? Yes, faith."): a tear cut on her lit cheek read at panel size as a dark
 * mark on her face. Nothing is printed in red: by day the tent has no fire
 * or candle, and nothing in the scene is a symbol for the spot colour.
 * Nothing is taken from a film or stage production. Seed: 1801.
 */

const W = 860
const H = 340
/** Where the canvas wall meets the floor. */
const FLOOR = 262
/** The eaves: where the wall meets the roof. */
const EAVE = 40
/** The open door on the right. */
const DOOR = { x0: 690, x1: 806, top: 66 }
const DOOR_MID = (DOOR.x0 + DOOR.x1) / 2
/** The light comes in at the door. */
const light = (x: number, y: number) =>
  clamp(1.15 - Math.hypot((x - 748) * 0.8, (y - 190) * 1.1) / 560)

/** The canvas seams. */
const SEAMS = [52, 136, 220, 304, 388, 472, 556, 640, 850]

const LEAR: P = [318, 328]
const CORDELIA: P = [428, 328]
const KENT: P = [566, 328]
const SCALE = 1.22
/** Lear's seat on the bed, in his own units. */
const SEAT = 56

type Marks = {
  shade: string[]
  roof: string
  floor: string
  outside: string
}

const SHADE_W = [1, 1.8, 2.8, 3.9]

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(1801)
  // The canvas: pale where the day comes in at the door and through the
  // cloth, falling into shadow towards the bed in the far corner, cut as
  // upright strokes that widen until they close up there, so the King's white
  // hair and beard stand out against the dark.
  const shade = SHADE_W.map(() => '')
  for (let x = 2; x < W; x += between(r, 3.6, 4.6)) {
    if (x > DOOR.x0 - 30 && x < DOOR.x1 + 30) continue
    const dark = Math.pow(clamp((640 - x) / 560), 1.3) + clamp((x - 820) / 200) * 0.3
    if (dark < 0.04) continue
    const k = Math.min(
      SHADE_W.length - 1,
      Math.floor(dark * SHADE_W.length * between(r, 0.85, 1.1)),
    )
    let y = EAVE + 6 + between(r, 0, 8)
    while (y < FLOOR - 2) {
      const len = between(r, 24, 90) * (0.6 + dark)
      shade[k] += `M${n(x)} ${n(y)}v${n(Math.min(len, FLOOR - 1 - y))}`
      y += len + between(r, 3, 10) * (1.3 - dark)
    }
  }
  // The roof's underside, its seams running up to the pole above the print.
  let roof = ''
  for (let k = -13; k <= 13; k++) {
    const xb = 430 + k * 38
    roof += gouge(430 + k * 5, -6, xb, EAVE - 2, 0.5 + light(xb, 30) * 1.4, between(r, -0.5, 0.5))
  }
  // The trodden floor, lit near the door.
  let floor = ''
  for (let y = FLOOR + 4; y < H; y += 4.4 + (y - FLOOR) * 0.07) {
    let x = between(r, -30, 0)
    while (x < W) {
      const len = between(r, 16, 60)
      const L = light(x + len / 2, y) * 0.95
      if (r() < 0.3 + L * 0.7)
        floor += gouge(x, y, x + len, y + between(r, -0.6, 0.6), 0.4 + L * 2.4)
      x += len + between(r, 6, 22) * (1.2 - L * 0.6)
    }
  }
  // The day outside the door: the camp's ground, level and pale, with tufts
  // of grass standing up in it nearer the door.
  let outside = ''
  for (let y = 216; y < FLOOR + 2; y += 6 + (y - 216) * 0.12) {
    let x = DOOR.x0 + between(r, -8, 0)
    while (x < DOOR.x1) {
      const len = between(r, 5, 14)
      if (r() < 0.5) outside += `M${n(x)} ${n(y)}h${n(len)}`
      x += len + between(r, 8, 18)
    }
  }
  for (const [x, y] of [
    [706, 236],
    [748, 228],
    [786, 244],
    [722, 254],
    [770, 258],
  ] as P[]) {
    const s = 0.6 + (y - 216) / 60
    for (let k = -1; k <= 1; k++)
      outside += `M${n(x + k * 2 * s)} ${y}l${n(k * 2 * s)} ${n(-7 * s)}`
  }
  cached = { shade, roof, floor, outside }
  return cached
}

/** The doorway's outline: a pointed opening in the canvas. */
const DOORWAY = `M${DOOR.x0} ${FLOOR}C${DOOR.x0 + 2} ${FLOOR - 96} ${DOOR_MID - 22} ${DOOR.top + 44} ${DOOR_MID} ${DOOR.top}C${DOOR_MID + 22} ${DOOR.top + 44} ${DOOR.x1 - 2} ${FLOOR - 96} ${DOOR.x1} ${FLOOR}Z`
/** The flaps, drawn back and tied at each side: the inside of the canvas, in shadow. */
const FLAPS =
  `M${DOOR_MID} ${DOOR.top}C${DOOR_MID - 22} ${DOOR.top + 44} ${DOOR.x0 + 2} ${FLOOR - 96} ${DOOR.x0} ${FLOOR}L${DOOR.x0 - 24} ${FLOOR}C${DOOR.x0 - 16} ${FLOOR - 60} ${DOOR.x0 - 28} ${FLOOR - 104} ${DOOR.x0 - 8} ${FLOOR - 120}C${DOOR.x0 + 8} ${FLOOR - 150} ${DOOR_MID - 30} ${DOOR.top + 30} ${DOOR_MID} ${DOOR.top}Z` +
  `M${DOOR_MID} ${DOOR.top}C${DOOR_MID + 22} ${DOOR.top + 44} ${DOOR.x1 - 2} ${FLOOR - 96} ${DOOR.x1} ${FLOOR}L${DOOR.x1 + 24} ${FLOOR}C${DOOR.x1 + 16} ${FLOOR - 60} ${DOOR.x1 + 28} ${FLOOR - 104} ${DOOR.x1 + 8} ${FLOOR - 120}C${DOOR.x1 - 8} ${FLOOR - 150} ${DOOR_MID + 30} ${DOOR.top + 30} ${DOOR_MID} ${DOOR.top}Z`
const FLAP_FOLDS =
  gouge(DOOR.x0 - 4, FLOOR - 112, DOOR.x0 - 12, FLOOR - 6, 1.4, 1) +
  gouge(DOOR.x0 + 4, FLOOR - 144, DOOR.x0 - 2, FLOOR - 64, 1.1, 0.8) +
  gouge(DOOR.x1 + 4, FLOOR - 112, DOOR.x1 + 12, FLOOR - 6, 1.4, -1) +
  gouge(DOOR.x1 - 4, FLOOR - 144, DOOR.x1 + 2, FLOOR - 64, 1.1, -0.8)
/** The valance along the eaves, scalloped below. */
const VALANCE = (() => {
  let d = `M0 ${EAVE - 2}H${W}V${EAVE + 6}`
  for (let x = W; x > 0; x -= 20) d += `Q${x - 10} ${EAVE + 16} ${x - 20} ${EAVE + 6}`
  return d + 'Z'
})()

/** The bed: its head on the left, its foot under Lear. */
const BED = {
  x0: 52,
  x1: 336,
  /** The mattress, at the height of the seat Lear sits on (the kit's Lear is 0.98 of a man). */
  top: Math.round(LEAR[1] - SEAT * SCALE * 0.98 + 4),
  floor: 334,
}

function Bed() {
  const { x0, x1, top, floor } = BED
  const sheet = `M${x0 + 6} ${top - 6}C${x0 + 80} ${top - 10} ${x1 - 80} ${top - 10} ${x1 - 2} ${top - 6}L${x1} ${top + 14}C${x1 - 40} ${top + 22} ${x0 + 60} ${top + 22} ${x0 + 4} ${top + 16}Z`
  const pillow = `M${x0 + 8} ${top - 6}C${x0 + 6} ${top - 22} ${x0 + 20} ${top - 26} ${x0 + 44} ${top - 22}C${x0 + 58} ${top - 20} ${x0 + 60} ${top - 10} ${x0 + 54} ${top - 6}Z`
  const frame = `M${x0} ${top + 10}H${x1 + 4}V${top + 30}H${x0}Z`
  const legs = `M${x0 + 4} ${top + 28}V${floor}M${x1} ${top + 28}V${floor}M${x0 - 2} ${top - 40}V${floor}`
  return (
    <g>
      <path d={legs} stroke={INK} strokeWidth={6} />
      <path d={legs} stroke={PAPER} strokeWidth={1} />
      <path d={frame} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={gouge(x0 + 10, top + 20, x1 - 6, top + 20, 1.2)} fill={PAPER} />
      <path d={sheet} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path
        d={`M${x0 + 70} ${top - 2}C${x0 + 100} ${top + 6} ${x0 + 130} ${top + 8} ${x0 + 160} ${top + 4}M${x0 + 30} ${top + 6}C${x0 + 60} ${top + 14} ${x0 + 90} ${top + 16} ${x0 + 120} ${top + 14}`}
        stroke={INK}
        strokeWidth={1}
        fill="none"
      />
      <path d={pillow} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path
        d={`M${x0 + 20} ${top - 14}Q${x0 + 32} ${top - 18} ${x0 + 44} ${top - 14}`}
        stroke={INK}
        strokeWidth={0.9}
        fill="none"
      />
    </g>
  )
}

function LearWakes({ uid }: ArtProps) {
  const m = marks()
  return (
    <>
      <defs>
        <clipPath id={`${uid}-door`}>
          <path d={DOORWAY} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [400, 220], push: 1.03 })}>
        {/* the canvas wall, pale with the day */}
        <rect x={0} y={EAVE} width={W} height={FLOOR - EAVE} fill={PAPER} />
        {m.shade.map((d, i) => (
          <path key={i} d={d} stroke={INK} strokeWidth={SHADE_W[i]} strokeLinecap="round" />
        ))}
        <path
          d={SEAMS.map((x) => `M${x} ${EAVE}V${FLOOR}`).join('')}
          stroke={INK}
          strokeWidth={2.2}
        />
        {/* the roof's underside and the valance along the eaves */}
        <rect x={0} y={0} width={W} height={EAVE} fill={INK} />
        <path d={m.roof} fill={PAPER} />
        <path d={VALANCE} fill={INK} />
        <path d={`M0 ${EAVE + 2}H${W}`} stroke={PAPER} strokeWidth={1.2} />
        {/* the open door: the day outside, the flaps tied back */}
        <path d={DOORWAY} fill={PAPER} />
        <g clipPath={`url(#${uid}-door)`}>
          <path d={`M${DOOR.x0} 210H${DOOR.x1}`} stroke={INK} strokeWidth={1.6} />
          <FarTent x={722} base={210} w={30} h={26} />
          <FarTent x={772} base={210} w={22} h={18} />
          <path d={m.outside} stroke={INK} strokeWidth={1.1} strokeLinecap="round" />
        </g>
        <path d={FLAPS} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path d={FLAP_FOLDS} fill={PAPER} />
        <path
          d={`M${DOOR.x0 - 24} ${FLOOR - 98}L${DOOR.x0 + 4} ${FLOOR - 106}M${DOOR.x1 + 22} ${FLOOR - 98}L${DOOR.x1 - 4} ${FLOOR - 106}`}
          stroke={PAPER}
          strokeWidth={2}
        />
        {/* the floor */}
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={INK} />
        <path d={m.floor} fill={PAPER} />
        <Bed />
        {/* Lear, sitting up on the bed, reaching out to her */}
        <Person
          at={LEAR}
          scale={SCALE}
          pose={{
            look: 'lear',
            mantle: false,
            seated: { seat: SEAT, knee: [34, -SEAT - 4] },
            head: { rot: 6 },
            far: {
              pts: [
                [-4, -SEAT - 52],
                [14, -SEAT - 38],
                [38, -SEAT - 30],
              ],
              hand: 'open',
              deg: 10,
            },
            near: {
              pts: [
                [2, -SEAT - 50],
                [-2, -SEAT - 26],
                [8, -SEAT - 8],
              ],
              hand: 'mitt',
            },
          }}
        />
        {/* Cordelia on her knees, holding up her hands to his */}
        <Kneel
          uid={uid}
          id="cordelia"
          at={CORDELIA}
          scale={SCALE}
          flip
          lean={4}
          pose={{
            look: 'cordelia',
            crown: true,
            head: { rot: -14 },
            far: {
              pts: [
                [-3, -126],
                [10, -118],
                [26, -136],
              ],
              hand: 'open',
              deg: -40,
            },
            near: {
              pts: [
                [3, -126],
                [16, -116],
                [32, -140],
              ],
              hand: 'open',
              deg: -34,
              thumb: -1,
            },
          }}
        />
        {/* Kent, still as Caius, watching */}
        <Person
          at={KENT}
          scale={SCALE}
          flip
          pose={{
            look: 'caius',
            head: { rot: 10 },
            far: {
              pts: [
                [-4, -130],
                [-4, -104],
                [2, -82],
              ],
            },
            near: {
              pts: [
                [5, -128],
                [8, -102],
                [12, -82],
              ],
            },
          }}
        />
      </g>
    </>
  )
}

export const learWakes: LinocutArt = { width: W, height: H, Draw: LearWakes }
