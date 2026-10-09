import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, type P } from './people'

/**
 * Chapter VIII: "Gatsby's death", the tenth moment in the guide's timeline.
 *
 * WHAT IS NOT DRAWN, AND WHY. Gatsby's death and Wilson's are never shown or
 * suggested: no pool, no gun, no blood, no body, and nobody but the two
 * friends. The panel is the last time Nick sees Gatsby alive, on the
 * morning of that day, which is where the moment's line is spoken.
 *
 * Every detail is from the 1925 first edition, as Wikisource transcribes it:
 *
 * - "It was nine o'clock when we finished breakfast and went out on the
 *   porch. The night had made a sharp difference in the weather and there
 *   was an autumn flavor in the air." So it is a clear morning: the sky is
 *   the bare paper, with a few streaks of cloud.
 * - "We walked slowly down the steps ... We shook hands and I started away.
 *   Just before I reached the hedge I remembered something and turned
 *   around. 'They're a rotten crowd,' I shouted across the lawn." So Nick is
 *   small and far off on the left, at the hedge, turned back towards the
 *   house with one hand up as he calls, the arm bent and the fingers apart;
 *   between the two of them lies the whole empty lawn, "the darker,
 *   well-kept expanse" of Chapter V, cut with the lines of its mowing.
 * - "First he nodded politely, and then his face broke into that radiant
 *   and understanding smile ... His gorgeous pink rag of a suit made a
 *   bright spot of color against the white steps, and I thought of the night
 *   when I first came to his ancestral home, three months before. The lawn
 *   and drive had been crowded with the faces of those who guessed at his
 *   corruption". So Gatsby stands at the foot of the white steps on the
 *   right, his head a little bowed as he nods, and the smile cut in paper on
 *   his tanned face: the eye creased and the corner of the mouth drawn up
 *   into the cheek. The lawn that was crowded is empty.
 * - The house is the one Chapter I gives: "a factual imitation of some Hôtel
 *   de Ville in Normandy, with a tower on one side, spanking new under a
 *   thin beard of raw ivy". So a tower with a steep spire stands at its
 *   left end with thin tendrils of ivy climbing it, the stone is new and
 *   barely marked, and the roof is steep, with dormers. "Crossing his lawn,
 *   I saw that his front door was still open" (at dawn that day): so the
 *   door at the top of the steps stands open. The swimming pool is not
 *   drawn.
 *
 * THE PINK SUIT IS LEFT TO THE WORDS HERE, cut in ink. It was first printed
 * in the spot colour, the kit's `dress: 'red'` (./people.tsx), as it is in
 * "The Plaza Hotel". But this is the panel for the day he dies, and at phone
 * width a man printed red from collar to shoes, his head bowed, could read
 * as a man covered in blood, which would suggest the death the panel must
 * not show (review, 9 October 2026). So he is a dark figure against the
 * white steps, which keeps the contrast of "a bright spot of color against
 * the white steps", and his colour is left to the words, as the dusk leaves
 * it in "The death car". There is no red in this print.
 *
 * Nothing is taken from a film, television or stage production. Seeds: 1001
 * (the sky), 1002 (the trees), 1003 (the hedge), 1004 (the lawn), 1005 (the
 * roof and the new stone), 1006 (the ivy).
 */

const W = 860
const H = 340
/** The far edge of the lawn, where Nick has nearly reached the hedge. */
const HEDGE_FOOT = 226
/** The lawn at the foot of Gatsby's steps. */
const FOOT = 318
/** The landing at the top of the steps: the floor of the house. */
const LANDING = 230
/** The tower: its sides, its eaves and the tip of its spire. */
const TOWER = { l: 470, r: 542, eaves: 74 }
const TIP: P = [506, 16]
/** The eaves and the ridge of the main roof. */
const EAVES = 92
const RIDGE = 36
/** The front door, centred over the steps. */
const DOOR = { cx: 762, w: 56, top: 146 }
/** The steps: how many, and their width at the top and at the foot. */
const STEPS = { count: 8, top: 110, foot: 300 }
/** Where Gatsby stands, on the lowest step, and Nick, at the hedge. */
const GATSBY_AT: P = [684, 313]
const NICK_AT: P = [156, 228]

type Marks = {
  sky: string
  trees: string
  treeCuts: string
  hedge: string
  hedgeCuts: string
  lawn: string
  roof: string
  spire: string
  courses: string
  terrace: string
  ivyStems: string
  ivy: string
}

/** The crowns of the trees beyond the hedge: [cx, cy, rx, ry]. A gap is left behind Nick. */
const CROWNS: [number, number, number, number][] = [
  [26, 160, 46, 40],
  [78, 176, 30, 26],
  [246, 168, 30, 30],
  [300, 142, 44, 46],
  [370, 150, 40, 42],
  [430, 128, 42, 56],
]
const crownPath = ([cx, cy, rx, ry]: [number, number, number, number]) =>
  `M${n(cx - rx)} ${HEDGE_FOOT - 18}L${n(cx - rx)} ${n(cy)}A${n(rx)} ${n(ry)} 0 0 1 ${n(cx + rx)} ${n(cy)}L${n(cx + rx)} ${HEDGE_FOOT - 18}Z`

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // "promising a cool, lovely day": the sky is the bare paper, with a few
  // long streaks of cloud left in ink, thicker towards the top of the block.
  const s = rng(1001)
  let sky = ''
  for (let y = 8; y < 196; y += 7) {
    let x = between(s, -30, 0)
    const top = clamp(1 - y / 110)
    while (x < TOWER.l) {
      const len = between(s, 30, 130)
      if (s() < 0.12 + top * 0.6)
        sky += gouge(x, y, x + len, y + between(s, -0.6, 0.6), 0.3 + top * 1.9)
      x += len + between(s, 24, 80)
    }
  }

  // The trees beyond the hedge, among "the yellowing trees" of that
  // afternoon: dark crowns cut through with leaves of light, lit from the
  // upper right.
  const trees = CROWNS.map(crownPath).join('')
  const treeCuts = gougeField(
    rng(1002),
    { x0: 0, x1: TOWER.l, y0: 70, y1: HEDGE_FOOT - 18 },
    (x, y) => {
      let best = 0
      for (const [cx, cy, rx, ry] of CROWNS) {
        const dx = (x - cx) / rx
        const dy = (y - cy + ry * 0.2) / ry
        best = Math.max(best, clamp(0.95 - Math.hypot(dx + 0.3, dy + 0.4) * 0.55))
      }
      return best
    },
    { spacing: 3.8, len: [3, 9], gap: [2, 7], max: 1.9 },
  )

  // The hedge along the far edge of the lawn: a long low band, darker than
  // the trees, its top clipped round, a few cuts for leaves.
  const h = rng(1003)
  let hedge = `M0 ${HEDGE_FOOT + 1}L0 ${HEDGE_FOOT - 30}`
  for (let x = 0; x <= TOWER.l + 8; x += 6)
    hedge += `L${n(x)} ${n(HEDGE_FOOT - 30 - 2.4 * Math.sin(x / 8) - between(h, 0, 1.6))}`
  hedge += `L${TOWER.l + 8} ${HEDGE_FOOT + 1}Z`
  let hedgeCuts = ''
  for (let y = HEDGE_FOOT - 25; y < HEDGE_FOOT - 4; y += 5)
    for (let x = between(h, 0, 10); x < TOWER.l; x += between(h, 9, 18))
      hedgeCuts += gouge(x, y, x + between(h, 2.4, 4.4), y - between(h, 0.4, 1.6), 0.55)

  // The lawn, "the darker, well-kept expanse" of Chapter V: paper, with the
  // mower's lines left in ink, wider apart and heavier towards the eye.
  const l = rng(1004)
  let lawn = ''
  for (let y = HEDGE_FOOT + 4, k = 0; y < H; y += 3.2 + k * 0.5, k++) {
    let x = between(l, -40, 0)
    const near = (y - HEDGE_FOOT) / (H - HEDGE_FOOT)
    while (x < W) {
      const len = between(l, 30, 110) * (0.6 + near)
      if (l() < 0.34 + near * 0.3)
        lawn += gouge(x, y, x + len, y + between(l, -0.4, 0.4), 0.3 + near * 1.1)
      x += len + between(l, 12, 60)
    }
  }

  // Slates on the steep roof and the tower's spire, cut along the courses.
  const r = rng(1005)
  let roof = ''
  for (let y = RIDGE + 5; y < EAVES - 3; y += 5) {
    const x0 = TOWER.r + 6 + ((EAVES - y) / (EAVES - RIDGE)) * 26
    let x = x0 + between(r, 0, 10)
    while (x < W) {
      const len = between(r, 18, 60)
      roof += gouge(x, y, Math.min(x + len, W), y, 0.5 + (y - RIDGE) / 70)
      x += len + between(r, 6, 18)
    }
  }
  let spire = ''
  for (let k = 1; k < 10; k++) {
    const y = TIP[1] + k * 5.8
    const half = ((y - TIP[1]) / (TOWER.eaves - TIP[1])) * 42
    spire += gouge(TIP[0] - half + 2.5, y, TIP[0] + half - 2.5, y, 0.45 + k * 0.07)
  }

  // The new stone of the front: only a few faint courses, because the house
  // is "spanking new".
  let courses = ''
  for (let y = EAVES + 14; y < LANDING - 4; y += 12) {
    let x = TOWER.l + between(r, 0, 20)
    while (x < W) {
      const len = between(r, 20, 70)
      if (r() < 0.4) courses += gouge(x, y, x + len, y, 0.35)
      x += len + between(r, 20, 60)
    }
  }
  // The terrace the house stands on, below the landing: big pale blocks,
  // their joints cut in ink. Kept pale and plain, so nothing beside Gatsby
  // could be read as water.
  let terrace = ''
  for (let y = LANDING + 22, k = 0; y < FOOT + 20; y += 22, k++) {
    if (y < FOOT - 2) terrace += `M${TOWER.l} ${y}H${W}`
    for (let x = TOWER.l + (k % 2 ? 34 : 0); x < W; x += 68)
      terrace += `M${x} ${y - 22}V${Math.min(y, FOOT)}`
  }

  // "a thin beard of raw ivy": thin tendrils climbing the tower from the
  // terrace, with a leaf or two.
  const v = rng(1006)
  let ivy = ''
  let ivyStems = ''
  for (let k = 0; k < 6; k++) {
    let x = TOWER.l + 8 + k * 11 + between(v, -3, 3)
    let y = LANDING
    const tall = between(v, 40, 120)
    ivyStems += `M${n(x)} ${n(y)}`
    while (y > LANDING - tall) {
      x += between(v, -4, 4)
      y -= between(v, 6, 12)
      ivyStems += `L${n(x)} ${n(y)}`
      if (v() < 0.5) ivy += gouge(x, y, x + between(v, -6, 6), y - between(v, 2, 5), 1.3)
    }
  }

  cached = {
    sky,
    trees,
    treeCuts,
    hedge,
    hedgeCuts,
    lawn,
    roof,
    spire,
    courses,
    terrace,
    ivyStems,
    ivy,
  }
  return cached
}

/** An arched window, `w` by `h`, its top at `y`. */
function arched(x: number, y: number, w: number, h: number) {
  return `M${x} ${y + h}V${y + w / 2}A${w / 2} ${w / 2} 0 0 1 ${x + w} ${y + w / 2}V${y + h}Z`
}
/** Its glazing bars: a mullion and a transom. */
function bars(x: number, y: number, w: number, h: number) {
  return `M${x + w / 2} ${y + 4}V${y + h}M${x} ${y + w / 2 + 4}H${x + w}`
}

const WINDOWS: [number, number, number, number][] = [
  [566, 106, 30, 50],
  [566, 168, 30, 54],
  [840, 106, 30, 50],
  [840, 168, 30, 54],
  [TOWER.l + 27, 96, 18, 40],
  [TOWER.l + 27, 156, 18, 40],
]

/**
 * His smile, in the frame of the shared man's head: the lid of an eye
 * creased by smiling, and the corner of the mouth drawn up into the cheek.
 * Cut in paper on his tanned face.
 */
const SMILE_EYE = gouge(6.6, -2.4, 12.8, -2.6, 0.75, -1.5)
const SMILE_MOUTH = gouge(16.6, 9.6, 13, 8.2, 0.6, -0.5)

function GatsbysDeath({ uid }: ArtProps) {
  const m = marks()
  const stepH = (FOOT - LANDING) / STEPS.count
  const steps = Array.from({ length: STEPS.count }, (_, i) => {
    const y = LANDING + i * stepH
    const w = STEPS.top + ((STEPS.foot - STEPS.top) * (i + 1)) / STEPS.count
    return { x: DOOR.cx - w / 2, y, w }
  })
  return (
    <>
      <defs>
        <clipPath id={`${uid}-house`}>
          <rect x={TOWER.l - 8} y={0} width={W - TOWER.l + 8} height={FOOT} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [640, 240], push: 1.03 })}>
        {/* the morning sky */}
        <rect x={0} y={0} width={W} height={HEDGE_FOOT} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        {/* the trees beyond the hedge, and the hedge Nick has nearly reached */}
        <path d={m.trees} fill={INK} />
        <path d={m.treeCuts} fill={PAPER} />
        <path d={m.hedge} fill={PAPER} stroke={PAPER} strokeWidth={4} />
        <path d={m.hedge} fill={INK} />
        <path d={m.hedgeCuts} fill={PAPER} />
        {/* the empty lawn */}
        <rect x={0} y={HEDGE_FOOT} width={W} height={H - HEDGE_FOOT} fill={PAPER} />
        <path d={m.lawn} fill={INK} />

        {/* the house */}
        <g clipPath={`url(#${uid}-house)`}>
          <rect
            x={TOWER.l}
            y={TOWER.eaves}
            width={W - TOWER.l}
            height={FOOT - TOWER.eaves}
            fill={PAPER}
          />
          <path d={m.courses} fill={INK} />
          <path
            d={`M${TOWER.l - 7} ${TOWER.eaves}L${TIP[0]} ${TIP[1]}L${TOWER.r + 7} ${TOWER.eaves}Z`}
            fill={INK}
          />
          <path d={m.spire} fill={PAPER} />
          <path d={`M${TIP[0]} ${TIP[1] + 2}V${TIP[1] - 8}`} stroke={INK} strokeWidth={2.4} />
          <path
            d={`M${TOWER.r - 4} ${EAVES}L${TOWER.r + 24} ${RIDGE}H${W + 4}V${EAVES}Z`}
            fill={INK}
          />
          <path d={m.roof} fill={PAPER} />
          {/* dormers in the roof */}
          {[650, 770].map((x) => (
            <g key={x}>
              <path
                d={`M${x - 16} ${EAVES - 4}V${EAVES - 30}L${x} ${EAVES - 44}L${x + 16} ${EAVES - 30}V${EAVES - 4}Z`}
                fill={PAPER}
                stroke={INK}
                strokeWidth={LINE.bold}
              />
              <path d={arched(x - 8, EAVES - 30, 16, 22)} fill={INK} />
            </g>
          ))}
          <rect x={TOWER.r - 8} y={EAVES} width={W} height={7} fill={INK} />
          <rect
            x={TOWER.l - 7}
            y={TOWER.eaves}
            width={TOWER.r - TOWER.l + 14}
            height={6}
            fill={INK}
          />
          <path d={`M${TOWER.r} ${TOWER.eaves}V${LANDING}`} stroke={INK} strokeWidth={LINE.bold} />
          {/* tall arched windows, and slits up the tower */}
          <g fill={INK}>
            {WINDOWS.map(([x, y, w, hh]) => (
              <path key={`${x}-${y}`} d={arched(x, y, w, hh)} />
            ))}
          </g>
          <path
            d={WINDOWS.slice(0, 4)
              .map(([x, y, w, hh]) => bars(x, y, w, hh))
              .join('')}
            stroke={PAPER}
            strokeWidth={1.5}
            fill="none"
          />
          {/* the front door, standing open, under a carved hood */}
          <path
            d={arched(DOOR.cx - DOOR.w / 2, DOOR.top, DOOR.w, LANDING - DOOR.top)}
            fill={INK}
            stroke={PAPER}
            strokeWidth={3}
          />
          <path
            d={`M${DOOR.cx - DOOR.w / 2 - 12} ${DOOR.top - 4}L${DOOR.cx} ${DOOR.top - 22}L${DOOR.cx + DOOR.w / 2 + 12} ${DOOR.top - 4}Z`}
            fill={INK}
          />
          {/* the terrace, and the white steps down from the door */}
          <rect x={TOWER.l} y={LANDING - 3} width={W - TOWER.l} height={3} fill={INK} />
          <path d={m.terrace} stroke={INK} strokeWidth={LINE.fine} fill="none" />
          {steps.map(({ x, y, w }) => (
            <g key={y}>
              <rect x={n(x)} y={n(y)} width={n(w)} height={n(stepH + 0.6)} fill={PAPER} />
              <path d={wedge(x + 1, y + 1.2, x + w - 1, y + 1.2, 2, 2)} fill={INK} />
              <path d={`M${n(x)} ${n(y)}V${n(y + stepH)}`} stroke={INK} strokeWidth={LINE.fine} />
            </g>
          ))}
          <path d={m.ivyStems} stroke={INK} strokeWidth={1.1} fill="none" />
          <path d={m.ivy} fill={INK} />
        </g>
        <path d={`M${TOWER.l} ${TOWER.eaves}V${FOOT}`} stroke={INK} strokeWidth={LINE.bold} />
        <rect x={TOWER.l} y={FOOT - 1} width={W - TOWER.l} height={3} fill={INK} />

        {/* Nick, at the hedge, turned back to call across the lawn */}
        <Person
          at={NICK_AT}
          scale={0.42}
          pose={{
            look: 'nick',
            head: { rot: -4 },
            near: {
              pts: [
                [4, -132],
                [24, -122],
                [34, -146],
              ],
              hand: 'open',
              deg: -78,
              size: 17,
              spread: 22,
            },
          }}
        />
        {/* Gatsby on the lowest of the white steps, smiling: his pink suit is
            cut in ink here, never red (see the docblock) */}
        <Person
          at={GATSBY_AT}
          flip
          pose={{
            look: 'gatsby',
            dress: 'ink',
            head: { rot: 7 },
            eye: 'none',
            far: {
              pts: [
                [-4, -132],
                [-10, -106],
                [-4, -84],
              ],
              hand: 'none',
            },
            near: {
              pts: [
                [4, -132],
                [7, -104],
                [9, -79],
              ],
            },
            legs: {
              far: [
                [-3, -70],
                [-4, -36],
                [-6, -3],
              ],
              near: [
                [3, -70],
                [9, -37],
                [9, -3],
              ],
            },
          }}
        >
          <g transform="translate(3 -160) rotate(7)" fill={PAPER}>
            <path d={SMILE_EYE + SMILE_MOUTH} />
          </g>
        </Person>
      </g>
    </>
  )
}

export const gatsbysDeath: LinocutArt = { width: W, height: H, Draw: GatsbysDeath }
