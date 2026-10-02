import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  ribbon,
  rng,
  wave,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Bonnet,
  EppieGrownHead,
  Figure,
  GRIP_CUTS,
  GRIP_HAND,
  HEAD_EPPIE_GROWN,
  HEAD_PLAIN,
  HEAD_SILAS,
  HOLD_HAND,
  PLAIN_CUTS,
  PLAIN_HAIR,
  SHIRT_COLLAR,
  SilasFace,
  gown,
  handAt,
  headAt,
  man,
  type P,
  type Part,
} from './people'

/**
 * Chapter 21: "Lantern Yard is gone", the eighteenth moment in the guide's
 * timeline. Every detail is from the text (the held edition,
 * src/data/full-texts/silas-marner.ts):
 *
 * - "Silas and Eppie, in their Sunday clothes, with a small bundle tied in a
 *   blue linen handkerchief, were making their way through the streets of a
 *   great manufacturing town"; "they issued from the alleys into Shoe Lane,
 *   where there was a broader strip of sky"; "a weekday noon!". So it is
 *   midday, a strip of sky shows over the street, and Silas carries the
 *   knotted bundle (its blue left to the words).
 * - "here's the house with the o'erhanging window—I know that—it's just the
 *   same; but they've made this new opening"; he had looked for "the entry
 *   next to the o'erhanging window, where there's the nick in the road for the
 *   water to run". So on the left stands the one house he knows, old and
 *   timbered, its window jutting out over the street on brackets, the gutter
 *   cut across the setts before it; and where the narrow entry to the Yard
 *   was, the ground lies open.
 * - "They were before an opening in front of a large factory, from which men
 *   and women were streaming for their midday meal." So beyond the opening
 *   the factory fills the right of the panel, rows of windows and a smoking
 *   chimney, and its people come out of its door and across the open ground
 *   towards the street.
 * - "Suddenly he started and stood still with a look of distressed amazement,
 *   that alarmed Eppie"; "'Father,' said Eppie, clasping his arm, 'what's the
 *   matter?'" So Silas stands stock-still, his wide eye on the factory, and
 *   Eppie, at his side, holds his arm in both hands and looks up at his face.
 * - Silas is the kit's Silas of Part Two (./people.tsx), white-haired, his
 *   pale face the one pale face in the street. Eppie is in her Sunday clothes,
 *   so in "her brown bonnet" (Chapter 16), the kit's dark bonnet. The workers
 *   are not described, so they are plain working people of the time, the men
 *   bareheaded in short coats, the women with their hair knotted behind, a
 *   shawl round the shoulders and a pale apron. (Shawls drawn over the head
 *   were tried first, and at panel size the women read as hooded, robed
 *   figures.)
 *
 * The quotation on the panel is what Silas says there. The guide's own line
 * for this moment ("The old home's gone; I've no home but this now.") he says
 * to Dolly "on the night of his return", at the cottage; the player prints it
 * under the panel, and Dolly, who is not in the street, is not drawn.
 *
 * No spot colour: nothing in the town is given a colour, and what the scene is
 * about is an absence, the chapel that is not there. Eppie's own words for the
 * streets are "Oh, what a dark ugly place! ... How it hides the sky!"
 *
 * Seeds: 1801 (the factory's brick), 1802 (the smoke), 1803 (the setts), 1804
 * (the old house's plaster).
 */

const W = 860
const H = 340
/** The foot of the factory and of the old house. */
const BASE = 236
const FEET = 324
/** The factory's front, and its chimney. */
const MILL = { x0: 340, roof: 48 }
const CHIMNEY = { x0: 352, x1: 378, top: 4 }

type Marks = { brick: string; smoke: string; setts: string; plaster: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The factory's face: courses of brick cut faintly in the ink, a little
  // stronger on the upper storeys where the noon light falls.
  const brick = gougeField(
    rng(1801),
    { x0: MILL.x0, x1: W, y0: MILL.roof + 8, y1: BASE - 4 },
    (_x, y) => 0.1 + clamp(1 - (y - MILL.roof) / 200) * 0.22,
    { spacing: 8, len: [16, 40], gap: [8, 22], max: 1.6 },
  )
  // Smoke from the chimney, rolling out to the right across the sky.
  const s = rng(1802)
  let smoke = ''
  for (let k = 0; k < 5; k++) {
    const y = CHIMNEY.top + 6 + k * 7 + between(s, -1.5, 1.5)
    const x0 = CHIMNEY.x0 + 8 + k * 10
    smoke += ribbon(
      wave(x0, W + 20, y, between(s, 2, 3.5), between(s, 70, 120), between(s, 0, 6), 22),
      9 - k * 1.2,
      0.6,
    )
  }
  // The street and the open ground: paper setts, their joints cut in ink, the
  // courses widening towards the eye. Stroked, so each joint is a few bytes.
  const c = rng(1803)
  let setts = ''
  const rows = [BASE + 2, 242, 249, 257, 266, 276, 288, 301, 315, 331, 348]
  for (let k = 0; k < rows.length - 1; k++) {
    const y0 = rows[k]
    const y1 = rows[k + 1]
    setts += `M0 ${y0}H${W}`
    const w = (y1 - y0) * 2.4
    for (let x = between(c, 0, w); x < W; x += w * between(c, 0.85, 1.15))
      setts += `M${n(x)} ${y0}V${y1}`
  }
  // The old house: its plaster, a few strokes between the timbers.
  const p = rng(1804)
  let plaster = ''
  for (const [x0, x1, y0, y1] of [
    [8, 58, 132, 228],
    [140, 176, 132, 228],
    [8, 58, 30, 100],
  ])
    for (let y = y0 + 6; y < y1; y += between(p, 9, 15))
      plaster += gouge(
        x0 + between(p, 0, 12),
        y,
        x1 - between(p, 0, 12),
        y + between(p, -1, 1),
        0.7,
      )
  cached = { brick, smoke, setts, plaster }
  return cached
}

/** The factory's windows: [x, y] of each, in four rows, a gap over its door. */
const WINDOWS: P[] = []
for (let row = 0; row < 4; row++)
  for (let col = 0; col < 12; col++) {
    const x = 392 + col * 40
    if (x > W - 20) continue
    if (row === 3 && x > 600 && x < 700) continue
    WINDOWS.push([x, 68 + row * 40])
  }
const DOOR = { x0: 616, x1: 684, top: 186 }

// ── SILAS, stock-still, his eye on the factory ──────────────────────────────
const SIL_HEAD = { d: HEAD_SILAS, at: [286, 106] as P, rot: -4, scale: 1.3 }
const SIL_NEAR_ARM: P[] = [
  [292, 150],
  [298, 190],
  [300, 226],
]
const SILAS: Part[] = man({
  facing: 1,
  neck: [282, 140],
  hip: [278, 222],
  head: SIL_HEAD,
  body: { width: 30, tails: 40, front: 4, flare: 5 },
  arm: 8,
  leg: 9,
  near: {
    arm: SIL_NEAR_ARM,
    leg: [
      [280, 222],
      [286, 272],
      [290, FEET - 4],
    ],
    hand: { parts: HOLD_HAND, scale: 1, rot: 0 },
  },
  far: {
    arm: [
      [276, 150],
      [272, 190],
      [276, 220],
    ],
    leg: [
      [274, 224],
      [270, 274],
      [268, FEET - 2],
    ],
  },
})
/**
 * The small bundle tied in a handkerchief, hanging from his hand: a soft,
 * squarish bag of pale cloth, its two knotted corners standing up as ears.
 * (Printed dark and round, it read as a ball with a fuse.)
 */
const BUNDLE =
  'M290 246C286 252 286 262 292 267C298 270 308 270 314 266C319 261 318 251 314 246C308 242 296 242 290 246Z'
const BUNDLE_EARS =
  'M298 244C294 238 291 233 295 232C298 232 300 237 301 243ZM305 243C307 237 310 232 313 234C315 237 311 241 308 245Z'
const BUNDLE_FOLDS = 'M294 252Q302 256 312 251M296 260Q303 262 311 259M301 244L302 266'

// ── EPPIE, at his side, clasping his arm ────────────────────────────────────
const EPP_HEAD_AT: P = [234, 126]
const EPP_T = headAt(1, EPP_HEAD_AT, -12, 1.16)
const EPP_NECK: P = [234, 158]
const EPP_NEAR_ARM: P[] = [
  [240, 166],
  [260, 186],
  [286, 178],
]
const EPP_FAR_ARM: P[] = [
  [230, 166],
  [252, 182],
  [280, 168],
]
const EPP_GRIP = { parts: GRIP_HAND, scale: 0.95, rot: -40 }
const EPP_FAR_GRIP = { parts: GRIP_HAND, scale: 0.95, rot: -30 }
const EPPIE: Part[] = [
  { d: 'M230 166L252 182L280 168', w: 6.6 },
  ...GRIP_HAND.map((q) => ({ ...q, t: handAt(EPP_FAR_ARM, 1, EPP_FAR_GRIP) })),
  { d: gown(EPP_NECK, [238, FEET + 2], { width: 25, waist: 22, foot: 46, bust: 3 }) },
  { d: HEAD_EPPIE_GROWN, t: EPP_T },
  { d: 'M240 166L260 186L286 178', w: 6.6, sep: 1.4 },
  ...GRIP_HAND.map((q) => ({ ...q, t: handAt(EPP_NEAR_ARM, 1, EPP_GRIP) })),
]
/** The high waist of her gown, its folds, and her throat above it. */
const EPP_CUTS =
  gouge(224, 180, 246, 179, 0.8) +
  gouge(230, 190, 224, 300, 0.8, 0.6) +
  gouge(242, 192, 248, 310, 0.8, -0.6)
const EPP_THROAT =
  'M0.6 20.2C3 20.8 5.4 20.8 7.4 20.4L6.2 24L7.4 27C3.4 27.8 -0.8 27.6 -3.4 26.8C-1.4 24.8 -0.2 22.6 0.6 20.2Z'

// ── THE WORKERS, streaming out for their midday meal ───────────────────────
/**
 * One of the crowd, walking left towards the street at scale `s`, feet at
 * `y`: a man bareheaded in a short coat, or a woman with a shawl drawn over
 * her head and shoulders.
 */
function worker(x: number, y: number, s: number, step: number, woman: boolean) {
  const at: P = [x - 2 * s, y - 170 * s]
  const t = headAt(-1, at, 0, 1.18 * s)
  const neck: P = [x, y - 140 * s]
  const hip: P = [x + 2 * s, y - 76 * s]
  const legs = (k: number): P[] => [
    hip,
    [x + 2 * s - k * 10 * s, y - 38 * s],
    [x + 2 * s - k * 18 * s, y - 4 * s],
  ]
  const arms = (k: number, side: number): P[] => [
    [x + side * 2 * s, y - 134 * s],
    [x + side * 2 * s + k * 12 * s, y - 102 * s],
    [x + side * 2 * s + k * 18 * s, y - 74 * s],
  ]
  if (woman) {
    // A shawl round her shoulders, its point at her back; a pale apron in front.
    const shawl = `M${n(x - 13 * s)} ${n(y - 140 * s)}L${n(x + 12 * s)} ${n(y - 142 * s)}L${n(x + 17 * s)} ${n(y - 100 * s)}L${n(x - 15 * s)} ${n(y - 112 * s)}Z`
    const apron = `M${n(x - 13 * s)} ${n(y - 116 * s)}L${n(x + 5 * s)} ${n(y - 116 * s)}L${n(x + 7 * s)} ${n(y - 16 * s)}L${n(x - 19 * s)} ${n(y - 16 * s)}Z`
    return {
      parts: [
        { d: gown(neck, [x + s, y], { width: 24 * s, waist: 20 * s, foot: 40 * s, bust: 2 }) },
        { d: HEAD_PLAIN, t },
        { d: HAIR_KNOT, t },
        { d: shawl },
      ] as Part[],
      t,
      woman,
      shawl,
      apron,
    }
  }
  return {
    parts: man({
      facing: -1,
      neck,
      hip,
      head: { d: HEAD_PLAIN, at, scale: 1.18 * s },
      body: { width: 28 * s, tails: 14 * s, front: 2 * s, flare: 3 * s },
      arm: 7 * s,
      leg: 8 * s,
      near: { arm: arms(step, -1), leg: legs(step) },
      far: { arm: arms(-step, 1), leg: legs(-step) },
    }),
    t,
    woman,
    shawl: '',
    apron: '',
  }
}
/** A woman's hair gathered in a knot at the back of the head, in the frame of the heads. */
const HAIR_KNOT = 'M-21.6 -7a5.4 5.4 0 1 0 10.8 0a5.4 5.4 0 1 0 -10.8 0Z'
/** Nearest first in the list is drawn last: the far ones by the door, the near ones crossing the ground. */
const CROWD = [
  worker(668, 236, 0.5, 0.6, true),
  worker(640, 238, 0.52, -0.6, false),
  worker(606, 244, 0.58, 0.7, false),
  worker(574, 252, 0.66, -0.6, true),
  worker(528, 266, 0.76, 0.7, false),
  worker(478, 280, 0.86, -0.6, true),
  worker(430, 294, 0.94, 0.7, false),
]

function LanternYardIsGone({ uid }: ArtProps) {
  const m = marks()
  const st = headAt(1, SIL_HEAD.at, SIL_HEAD.rot, SIL_HEAD.scale)
  const sky = `${uid}-sky`
  return (
    <>
      <defs>
        <clipPath id={sky}>
          <rect x={0} y={0} width={W} height={MILL.roof + 2} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [300, 220], push: 1.03 })}>
        {/* the strip of sky over Shoe Lane, and the smoke across it */}
        <rect x={0} y={0} width={W} height={BASE} fill={PAPER} />
        <g clipPath={`url(#${sky})`}>
          <g className="lc-drift-r" style={timing({ dur: 3.6 })}>
            <path d={m.smoke} fill={INK} />
          </g>
        </g>

        {/* the factory: brick, and rows of windows */}
        <rect x={MILL.x0} y={MILL.roof} width={W - MILL.x0} height={BASE - MILL.roof} fill={INK} />
        <path d={m.brick} fill={PAPER} />
        <g fill={PAPER}>
          {WINDOWS.map(([x, y]) => (
            <rect key={`${x}-${y}`} x={x} y={y} width={20} height={26} />
          ))}
        </g>
        <path
          d={WINDOWS.map(([x, y]) => `M${x + 10} ${y}V${y + 26}M${x} ${y + 13}H${x + 20}`).join('')}
          stroke={INK}
          strokeWidth={1.6}
        />
        <rect
          x={MILL.x0 - 6}
          y={MILL.roof - 8}
          width={W - MILL.x0 + 6}
          height={9}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        {/* its door, open on the new ground */}
        <path
          d={`M${DOOR.x0} ${BASE}V${DOOR.top + 14}Q${DOOR.x0} ${DOOR.top} ${DOOR.x0 + 18} ${DOOR.top}H${DOOR.x1 - 18}Q${DOOR.x1} ${DOOR.top} ${DOOR.x1} ${DOOR.top + 14}V${BASE}Z`}
          fill={PAPER}
        />
        <path
          d={`M${DOOR.x0 + 8} ${BASE}V${DOOR.top + 18}Q${DOOR.x0 + 8} ${DOOR.top + 8} ${DOOR.x0 + 22} ${DOOR.top + 8}H${DOOR.x1 - 22}Q${DOOR.x1 - 8} ${DOOR.top + 8} ${DOOR.x1 - 8} ${DOOR.top + 18}V${BASE}Z`}
          fill={INK}
        />
        {/* the chimney, its smoke rolling out of the top */}
        <path
          d={`M${CHIMNEY.x0} ${MILL.roof}L${CHIMNEY.x0 + 3} ${CHIMNEY.top + 8}H${CHIMNEY.x1 - 3}L${CHIMNEY.x1} ${MILL.roof}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={`M${CHIMNEY.x0 - 2} ${CHIMNEY.top}H${CHIMNEY.x1 + 2}V${CHIMNEY.top + 9}H${CHIMNEY.x0 - 2}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />

        {/* the street and the open ground before the factory, in setts */}
        <rect x={0} y={BASE} width={W} height={H - BASE} fill={PAPER} />
        <path d={m.setts} stroke={INK} strokeWidth={2} fill="none" />
        <rect x={0} y={BASE} width={W} height={3} fill={INK} />
        {/* "the nick in the road for the water to run" */}
        <path d="M0 298Q100 293 200 296L200 303Q100 300 0 305Z" fill={INK} />

        {/* the old house he knows: timbered, its upper window out over the street */}
        <path d="M0 -4H208V24H0Z" fill={INK} />
        <path d={gouge(0, 8, 208, 8, 1.4) + gouge(0, 16, 208, 16, 1.2)} fill={PAPER} />
        <rect x={0} y={24} width={196} height={BASE - 24} fill={PAPER} />
        <path d={m.plaster} fill={INK} />
        <path
          d="M2 24V236M64 24V236M134 112V236M194 24V236M0 26H196M0 112H196M0 120H196"
          stroke={INK}
          strokeWidth={5}
        />
        {/* its door and its lower window */}
        <path d="M14 236V150H52V236Z" fill={INK} />
        <path d="M84 140H120V188H84Z" fill={INK} />
        <path d="M102 140V188M84 164H120" stroke={PAPER} strokeWidth={1.6} />
        {/* the overhanging window, its glass dark, on two brackets */}
        <path d="M76 38H182V100L174 108H84L76 100Z" fill={INK} stroke={PAPER} strokeWidth={2} />
        <path d="M78 34H180V40H78Z" fill={INK} stroke={PAPER} strokeWidth={1.4} />
        <path d="M112 40V106M146 40V106M78 70H180" stroke={PAPER} strokeWidth={1.8} />
        <path d="M86 108L104 130M172 108L154 130" stroke={INK} strokeWidth={4.6} />

        {/* the crowd, streaming out towards the street */}
        {CROWD.map((w, i) => (
          <Figure key={i} parts={w.parts} halo={1.3}>
            <path d={PLAIN_CUTS + PLAIN_HAIR} transform={w.t} fill={PAPER} />
            {w.woman && (
              <>
                <path d={w.shawl} fill="none" stroke={PAPER} strokeWidth={1} />
                <path d={w.apron} fill={PAPER} stroke={INK} strokeWidth={0.9} />
              </>
            )}
          </Figure>
        ))}

        {/* Silas, stopped dead, the bundle in his hand */}
        <Figure parts={SILAS}>
          <path d={SHIRT_COLLAR} transform={st} fill={PAPER} />
          <SilasFace t={st} white look={1} />
          <path d={gouge(286, 156, 290, 214, 0.9, -0.8)} fill={PAPER} />
        </Figure>
        <path
          d={BUNDLE + BUNDLE_EARS}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.3}
          strokeLinejoin="round"
        />
        <path d={BUNDLE_FOLDS} fill="none" stroke={INK} strokeWidth={0.9} />

        {/* Eppie, clasping his arm, her face turned up to his */}
        <Figure parts={EPPIE}>
          <path d={EPP_CUTS} fill={PAPER} />
          <EppieGrownHead t={EPP_T} />
          <path d={EPP_THROAT} transform={EPP_T} fill={PAPER} stroke={INK} strokeWidth={0.8} />
          <Bonnet t={EPP_T} />
          <path d={GRIP_CUTS} transform={handAt(EPP_NEAR_ARM, 1, EPP_GRIP)} fill={PAPER} />
        </Figure>
      </g>
    </>
  )
}

export const lanternYardIsGone: LinocutArt = { width: W, height: H, Draw: LanternYardIsGone }
